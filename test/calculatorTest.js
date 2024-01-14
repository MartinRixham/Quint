import QUnit from "qunit";
import Calculator from "~/js/Calculator";

QUnit.module("calcualtor");

QUnit.test("calcualte rational number", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ value: 12345.0, rational: true });

	assert.strictEqual(result, 12345.0);
});

QUnit.test("calculate variable", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ identifier: "theta" });

	assert.strictEqual(result, "θ");
});
