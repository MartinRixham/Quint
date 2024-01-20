import QUnit from "qunit";
import Worksheet from "~/js/Worksheet";

QUnit.module("worksheet");

QUnit.test("calcualte sum", async assert => {

	const worksheet = new Worksheet({

		parse: input => input + " parsed"
	},
	{
		calculate: sum =>  "The answer to " + sum + " is coming."
	});

	worksheet.terminal().value("1 + 2");

	const div = document.createElement("DIV");

	worksheet.answer().update(div)

	assert.equal(div.innerHTML, "The answer to 1 + 2 parsed is coming.");
	assert.equal(worksheet.error().text(), "");
});

QUnit.test("uparsable expression", async assert => {

	const worksheet = new Worksheet({

		parse: () => { throw new Error("Didn't parse."); }
	},
	{
		calculate: sum =>  "The answer to " + sum + " is coming."
	});

	worksheet.terminal().value("1 + 2");

	const div = document.createElement("DIV");

	worksheet.answer().update(div)

	assert.equal(div.innerHTML, "");
	assert.equal(worksheet.error().text(), "Didn't parse.");
});
