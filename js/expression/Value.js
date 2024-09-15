export default class Value {

	#value;

	constructor(value) {

		this.#value = value;
	}

	format() {

		return `<mn>${this.#value.value}</mn>`;
	}

	add(other) {

		if (other instanceof Value) {
		
			return new Value({ value: this.#value.value + other.#value.value });
		}
		else {

			return other.add(this);
		}
	}
}
