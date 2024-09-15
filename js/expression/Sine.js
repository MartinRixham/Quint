export default class Sine {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	format() {

		if (this.#variable.sine) {

			return this.#variable.sine().format();
		}

		return `<mo>sin</mo><mfrac>${this.#variable.format()}<mn>2<mn></mn></mn></mfrac>`;
	}

	calculate() {

		return null;
	}

	add(other) {
			
		return other.add(this.#variable.sine());
	}
}
