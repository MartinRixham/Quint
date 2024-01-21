export default class Value {

	#value;

	constructor(value) {

		this.#value = value;
	}

	evaluate() {

		const value = this.#value;

		if (value.rational) {

			return `<mn>${value.value}</mn>`;
		}
		else {

			switch (value.value) {
				case "pi":
					return "π";
				default:
					return "Unknown symbol" ;
			}
		}
	}
}
