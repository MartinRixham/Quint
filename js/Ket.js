export default class Ket {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	evaluate() {

		return `<mrow><mo>|</mo><mi>${this.#variable.evaluate()}</mi><mo>&rang;</mo></mrow>`;
	}
}
