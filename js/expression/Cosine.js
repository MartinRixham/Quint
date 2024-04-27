export default class Cosine {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	format() {

		if (this.#variable.cosine) {

			return this.#variable.cosine().format();
		}

		return `<mo>cos</mo><mfrac>${this.#variable.format()}<mn>2<mn></mn></mn></mfrac>`;
	}

	calculate() {

		return null;
	}
}
