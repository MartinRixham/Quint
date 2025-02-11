import QUnit from "qunit";
import Sine from "~/js/expression/Sine";
import Pi from "~/js/expression/Pi";
import Value from "~/js/expression/Value";
import Zero from "~/js/expression/Zero";

QUnit.module("sine");

QUnit.test("sine of zero", async assert => {

	const sin = new Sine(new Zero());

	assert.strictEqual(sin.format(), "<mn>0</mn>");
});

QUnit.test("sine of pi", async assert => {

	const sin = new Sine(new Pi());

	assert.strictEqual(sin.format(), "<mn>1</mn>");
});

QUnit.test("cosine of 1", async assert => {

	const sin = new Sine(new Value({ value: 1 }));

	assert.strictEqual(sin.format(),
		"<mo>sin</mo><mfrac><mn>1</mn><mn>2<mn></mn></mn></mfrac>");
});
