import QUnit from "qunit";
import Cosine from "~/js/expression/Cosine";
import Pi from "~/js/expression/Pi";
import Value from "~/js/expression/Value";
import Zero from "~/js/expression/Zero";

QUnit.module("cosine");

QUnit.test("cosine of zero", async assert => {

	const cos = new Cosine(new Zero());

	assert.strictEqual(cos.format(), "<mn>1</mn>");
});

QUnit.test("cosine of pi", async assert => {

	const cos = new Cosine(new Pi());

	assert.strictEqual(cos.format(), "<mn>0</mn>");
});

QUnit.test("cosine of 1", async assert => {

	const cos = new Cosine(new Value({ value: 1 }));

	assert.strictEqual(cos.format(),
		"<mo>cos</mo><mfrac><mn>1</mn><mn>2<mn></mn></mn></mfrac>");
});
