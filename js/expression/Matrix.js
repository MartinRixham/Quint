import Sum from "~/js/expression/Sum";

export default class Matrix {

	#dimension;

	#table;

	constructor(dimension, table) {

		this.#dimension = dimension;
		this.#table = table;
	}

	format() {

		let string = "<mrow><mo>(</mo><mtable>";

		for (let i = 0; i < this.#table.length; i += this.#dimension) {

			string += this.#formatRow(this.#table.slice(i, i + this.#dimension));
		}

		return string + "</mtable><mo>)</mo></mrow>";
	}

	calculate() {

		return null;
	}

	add(other) {

		const sums = [];

		for (let i = 0; i < this.#table.length; i++) {

			sums[i] = new Sum(this.#table[i], other.#table[i]).calculate();
		}

		return new Matrix(this.#dimension, sums);
	}

	#formatRow(row) {

		let string = "<mtr>";

		for (let i = 0; i < row.length; i++) {

			string += `<mtd>${row[i].format()}</mtd>`;
		}

		return string + "</mtr>";
	}
}
