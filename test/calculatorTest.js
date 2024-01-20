import QUnit from "qunit";
import Calculator from "~/js/Calculator";

QUnit.module("calcualtor");

QUnit.test("calcualte rational number", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ value: 12345.0, rational: true });

	assert.strictEqual(result, "<math><mn>12345</mn></math>");
});

QUnit.test("calculate variable", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ identifier: "theta" });

	assert.strictEqual(result, "<math>&theta;</math>");
});

QUnit.test("calculate ket", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ angle: { identifier: "theta" } });

	assert.strictEqual(result, "<math><mrow><mo>|</mo><mi>&theta;</mi><mo>&rang;</mo></mrow></math>");
});
