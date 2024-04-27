import QUnit from "qunit";
import Value from "~/js/expression/Value";

QUnit.module("value");

QUnit.test("format rational number", async assert => {

	const value = new Value({ value: 12345.0 });

	assert.strictEqual(value.format(), "<mn>12345</mn>");
});
