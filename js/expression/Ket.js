import Matrix from "~/js/expression/Matrix";

export default class Ket {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	format() {

		return `<mrow><mo>|</mo><mi>${this.#variable.format()}</mi><mo>&rang;</mo></mrow>`;
	}

	calculate() {

		return new Matrix();
	}
}
