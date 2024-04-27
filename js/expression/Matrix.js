export default class Matrix {

	dimension;

	table;

	constructor(dimension, table) {

		this.dimension = dimension;
		this.table = table;
	}

	format() {

		let string = "<mrow><mo>(</mo><mtable>";

		for (let i = 0; i < this.table.length; i += this.dimension) {

			string += this.#formatRow(this.table.slice(i, i + this.dimension));
		}

		return string + "</mtable><mo>)</mo></mrow>";
	}

	calculate() {

		return null;
	}

	#formatRow(row) {

		let string = "<mtr>";

		for (let i = 0; i < row.length; i++) {

			string += `<mtd>${row[i].format()}</mtd>`;
		}

		return string + "</mtr>";
	}
}
