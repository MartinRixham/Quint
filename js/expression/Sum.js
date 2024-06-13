export default class Sum {

	#left;

	#right;

	constructor(left, right) {

		this.#left = left;
		this.#right = right;
	}

	format() {

		return `${this.#left.format()}<mo>+</mo>${this.#right.format()}`
	}

	calculate() {

		return null;
	}
}
