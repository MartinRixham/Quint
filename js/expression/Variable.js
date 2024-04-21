export default class Variable {

	#variable;

	constructor(variable) {

		this.#variable = variable;
	}

	format() {

		const identifier = this.#variable.identifier;

		switch (identifier) {
			case "theta":
				return "<mi>&theta;</mi>";
			default:
				return identifier ;
		}
	}

	calculate() {

		return null;
	}
}
