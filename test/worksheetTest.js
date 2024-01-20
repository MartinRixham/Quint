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
});
