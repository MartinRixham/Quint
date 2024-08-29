import QUnit from "qunit";
import Sum from "~/js/expression/Sum";
import Value from "~/js/expression/Value";

QUnit.module("sum");

QUnit.test("add integers", async assert => {

	const left = new Value({ value: 1 });
	const right = new Value({ value: 2 });
	const sum = new Sum(left, right);

	assert.strictEqual(sum.format(), "<mn>1</mn><mo>+</mo><mn>2</mn>");

	const result = sum.calculate();

	assert.strictEqual(result.format(), "<mn>3</mn>");
});
