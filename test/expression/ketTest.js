import QUnit from "qunit";
import Ket from "~/js/expression/Ket";
import Value from "~/js/expression/Value";
import Matrix from "~/js/expression/Matrix";

QUnit.module("ket");

QUnit.test("format ket of pi", async assert => {

	const ket = new Ket(new Value({ value: "pi", rational: false }));

	assert.strictEqual(ket.format(), "<mrow><mo>|</mo><mi>π</mi><mo>&rang;</mo></mrow>");
});

QUnit.test("format ket of rational", async assert => {

	const ket = new Ket(new Value({ value: 123.456, rational: true }));

	assert.strictEqual(ket.format(), "<mrow><mo>|</mo><mn>123.456</mn><mo>&rang;</mo></mrow>");
});

QUnit.test("calculate ket of pi", async assert => {

	const ket = new Ket(new Value({ value: "pi", rational: false }));
	const result = ket.calculate();

	assert.ok(result instanceof Matrix);
});
