import QUnit from "qunit";
import Calculator from "~/js/Calculator";

QUnit.module("calcualtor");

QUnit.test("calcualte rational number", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ value: 12345.0, rational: true });

	assert.strictEqual(result, `<math display="block"><mn>12345</mn></math>`);
});

QUnit.test("calculate variable", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ identifier: "theta" });

	assert.strictEqual(result, `<math display="block"><mi>&theta;</mi></math>`);
});

QUnit.test("calculate ket", async assert => {

	const calculator = new Calculator();

	const result = calculator.calculate({ angle: { value: 0, rational: true }});

	assert.strictEqual(result,
		`<math display="block"><mrow><mo>|</mo><mn>0</mn><mo>&rang;</mo></mrow></math>
		<math display="block">
			<mo>=</mo>
			<mrow>
				<mo>(</mo>
				<mtable>
					<mtr><mtd><mn>1</mn></mtd></mtr>
					<mtr><mtd><mn>0</mn></mtd></mtr>
				</mtable>
				<mo>)</mo>
			</mrow>
		</math>`
			.replace(/[\n\t]/g, ""));
});
