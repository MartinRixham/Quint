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

		if (this.#left.add) {

			return this.#left.add(this.#right);
		}
		else if (this.#right.add) {

			return this.#right.add(this.#left);
		}
		else {

			return this;
		}
	}
}
