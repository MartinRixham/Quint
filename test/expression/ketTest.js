import QUnit from "qunit";
import Ket from "~/js/expression/Ket";
import Value from "~/js/expression/Value";

QUnit.module("ket");

QUnit.test("format ket of pi", async assert => {

	const ket = new Ket(new Value({ value: "pi", rational: false }));

	assert.strictEqual(ket.format(), "<mrow><mo>|</mo><mi>π</mi><mo>&rang;</mo></mrow>");
});

QUnit.test("format ket of rational", async assert => {

	const ket = new Ket(new Value({ value: 123.456, rational: true }));

	assert.strictEqual(ket.format(), "<mrow><mo>|</mo><mi><mn>123.456</mn></mi><mo>&rang;</mo></mrow>");
});
