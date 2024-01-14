import Variable from "~/js/Variable";
import Value from "~/js/Value";

export default class Calcualtor {

	calculate(expression) {

		if (expression.identifier) {

			return new Variable(expression).evaluate();
		}
		else if (expression.value) {

			return new Value(expression).evaluate();
		}

		return "Unknown expression";
	}
}
