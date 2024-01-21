import Variable from "~/js/expression/Variable";
import Value from "~/js/expression/Value";
import Ket from "~/js/expression/Ket";
import UnknownExpression from "~/js/expression/UnknownExpression";

export default class Calcualtor {

	calculate(expression) {

		return `<math>${this.express(expression).evaluate()}</math>`;
	}

	express(expression) {

		if (expression.identifier) {

			return new Variable(expression);
		}
		else if (expression.value) {

			return new Value(expression);
		}
		else if (expression.angle) {

			return new Ket(this.express(expression.angle));
		}

		return new UnknownExpression();
	}
}
