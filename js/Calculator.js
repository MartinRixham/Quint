import Variable from "~/js/expression/Variable";
import Value from "~/js/expression/Value";
import Ket from "~/js/expression/Ket";
import UnknownExpression from "~/js/expression/UnknownExpression";

export default class Calcualtor {

	#startMaths = `<math display="block">`;

	#endMaths = `</math>`;

	calculate(expression) {

		let calculation = this.express(expression);
		let formatted = [];

		while (calculation) {

			formatted.push(calculation.format());
			calculation = calculation.calculate();
		}

		return `${this.#startMaths}${formatted.join(`${this.#endMaths}${this.#startMaths}<mo>=</mo>`)}${this.#endMaths}`;
	}

	express(expression) {

		if (expression.identifier) {

			return new Variable(expression);
		}
		else if (expression.value != undefined) {

			return new Value(expression);
		}
		else if (expression.angle) {

			return new Ket(this.express(expression.angle));
		}

		return new UnknownExpression();
	}
}
