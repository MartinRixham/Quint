export default class Variable {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	evaluate() {

		const identifier = this.#variable.identifier;

		switch (identifier) {
			case "theta":
				return "θ";
			default:
				return identifier ;
		}
	}
}
