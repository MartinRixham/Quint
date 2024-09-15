import QUnit from "qunit";
import Sum from "~/js/expression/Sum";
import Value from "~/js/expression/Value";
import Ket from "~/js/expression/Ket";
import Zero from "~/js/expression/Zero";
import Pi from "~/js/expression/Pi";

QUnit.module("sum");

QUnit.test("add integers", async assert => {

	const left = new Value({ value: 1 });
	const right = new Value({ value: 2 });
	const sum = new Sum(left, right);

	assert.strictEqual(sum.format(), "<mn>1</mn><mo>+</mo><mn>2</mn>");

	const result = sum.calculate();

	assert.strictEqual(result.format(), "<mn>3</mn>");
});

QUnit.test("add kets", async assert => {

	const left = new Ket(new Zero());
	const right = new Ket(new Pi());
	const sum = new Sum(left, right);

	assert.strictEqual(sum.format(), `
		<mrow><mo>|</mo><mn>0</mn><mo>&rang;</mo></mrow>
		<mo>+</mo>
		<mrow><mo>|</mo><mi>π</mi><mo>&rang;</mo></mrow>`.replace(/[\n\t]/g, ""));

	let result = sum.calculate();

	assert.strictEqual(result.format(), `
		<mrow>
			<mo>(</mo>
			<mtable><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable>
			<mo>)</mo>
		</mrow>
		<mo>+</mo>
		<mrow>
			<mo>(</mo>
			<mtable><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable>
			<mo>)</mo>
		</mrow>`.replace(/[\n\t]/g, ""));

	result = result.calculate();

	assert.strictEqual(result.format(), `
		<mrow>
			<mo>(</mo>
			<mtable><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable>
			<mo>)</mo>
		</mrow>`.replace(/[\n\t]/g, ""));
});
