import Matrix from "~/js/expression/Matrix";

export default class Ket {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	format() {

		return `<mrow><mo>|</mo>${this.#variable.format()}<mo>&rang;</mo></mrow>`;
	}

	calculate() {

		return new Matrix(0, []);
	}
}
