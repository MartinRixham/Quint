export default class Value {

	#value;

	constructor(value) {

		this.#value = value;
	}

	evaluate() {

		return this.#value.value;
	}
}
