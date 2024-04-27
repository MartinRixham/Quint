import QUnit from "qunit";
import Matrix from "~/js/expression/Matrix";
import Value from "~/js/expression/Value";

QUnit.module("matrix");

QUnit.test("format square matrix", async assert => {

	const matrix =
		new Matrix(
			2,
			[
				new Value({ value: 1, rational: true }),
				new Value({ value: 2, rational: true }),
				new Value({ value: 3, rational: true }),
				new Value({ value: 4, rational: true })
			]);

	assert.strictEqual(matrix.format(), `
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd><mn>1</mn></mtd>
            <mtd><mn>2</mn></mtd>
          </mtr>
          <mtr>
            <mtd><mn>3</mn></mtd>
            <mtd><mn>4</mn></mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>`.replace(/\s/g,''));
});
