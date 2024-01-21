import QUnit from "qunit";
import Value from "~/js/expression/Value";

QUnit.module("value");

QUnit.test("evaluate rational number", async assert => {

	const value = new Value({ value: 12345.0, rational: true });

	assert.strictEqual(value.evaluate(), "<mn>12345</mn>");
});

QUnit.test("evaluate pi", async assert => {

	const value = new Value({ value: "pi", rational: false });

	assert.strictEqual(value.evaluate(), "π");
});
