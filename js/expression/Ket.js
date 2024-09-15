import Sine from "~/js/expression/Sine";
import Cosine from "~/js/expression/Cosine";
import Matrix from "~/js/expression/Matrix";
import Sum from "~/js/expression/Sum";

export default class Ket {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	format() {

		return `<mrow><mo>|</mo>${this.#variable.format()}<mo>&rang;</mo></mrow>`;
	}

	calculate() {

		return new Matrix(1, [new Cosine(this.#variable), new Sine(this.#variable)]);
	}

	add(other) {

		return new Sum(this.calculate(), other.calculate());
	}
}
