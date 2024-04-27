export default class Value {

	#value;

	constructor(value) {

		this.#value = value;
	}

	format() {

		return `<mn>${this.#value.value}</mn>`;
	}

	calculate() {

		return null;
	}
}
