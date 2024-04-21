export default class Value {

	#value;

	constructor(value) {

		this.#value = value;
	}

	format() {

		const value = this.#value;

		if (value.rational) {

			return `<mn>${value.value}</mn>`;
		}
		else {

			switch (value.value) {
				case "pi":
					return "<mi>π</mi>";
				default:
					return "Unknown symbol" ;
			}
		}
	}

	calculate() {

		return null;
	}
}
