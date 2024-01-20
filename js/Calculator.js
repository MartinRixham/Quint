import Variable from "~/js/Variable";
import Value from "~/js/Value";
import Ket from "~/js/Ket";

export default class Calcualtor {

	calculate(expression) {

		return `<math>${this.evaluate(expression)}</math>`;

	}

	evaluate(expression) {

		if (expression.identifier) {

			return new Variable(expression).evaluate();
		}
		else if (expression.value) {

			return new Value(expression).evaluate();
		}
		else if (expression.angle) {

			return new Ket(new Variable(expression.angle)).evaluate();
		}

		return "Unknown expression";
	}
}
