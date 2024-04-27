import QUnit from "qunit";
import Pi from "~/js/expression/Pi";

QUnit.module("pi");

QUnit.test("format pi", async assert => {

	const value = new Pi();

	assert.strictEqual(value.format(), "<mi>π</mi>");
});
