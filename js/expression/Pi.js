import Value from "~/js/expression/Value";
import Zero from "~/js/expression/Zero";

export default class Pi {

	format() {

		return "<mi>π</mi>";
	}

	calculate() {

		return null;
	}

	sine() {

		return new Value({ value: 1, rational: true });
	}

	cosine() {

		return new Zero();
	}
}
