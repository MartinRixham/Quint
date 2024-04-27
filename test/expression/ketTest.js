import QUnit from "qunit";
import Ket from "~/js/expression/Ket";
import Value from "~/js/expression/Value";
import Pi from "~/js/expression/Pi";
import Variable from "~/js/expression/Variable";

QUnit.module("ket");

QUnit.test("format ket of pi", async assert => {

	const ket = new Ket(new Pi());

	assert.strictEqual(ket.format(), "<mrow><mo>|</mo><mi>π</mi><mo>&rang;</mo></mrow>");
});

QUnit.test("format ket of rational", async assert => {

	const ket = new Ket(new Value({ value: 123.456 }));

	assert.strictEqual(ket.format(), "<mrow><mo>|</mo><mn>123.456</mn><mo>&rang;</mo></mrow>");
});

QUnit.test("calculate ket of pi", async assert => {

	const ket = new Ket(new Pi());
	const result = ket.calculate();

	assert.strictEqual(result.format(), `
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd><mn>0</mn></mtd>
          </mtr>
          <mtr>
            <mtd><mn>1</mn></mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>`.replace(/\s/g,''));
});

QUnit.test("calculate ket of theta", async assert => {

	const ket = new Ket(new Variable({ identifier: "theta" }));
	const result = ket.calculate();

	assert.strictEqual(result.format(), `
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd><mo>cos</mo><mfrac><mi>&theta;</mi><mn>2<mn></mn></mn></mfrac></mtd>
          </mtr>
          <mtr>
            <mtd><mo>sin</mo><mfrac><mi>&theta;</mi><mn>2<mn></mn></mn></mfrac></mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>`.replace(/\s/g,''));
});
