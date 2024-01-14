import Value from "~/js/Value";

export default class Calcualtor {

	calculate(expression) {

		if (expression.value) {

			return new Value(expression).evaluate();
		}

		return "Unknown expression";
	}
}
