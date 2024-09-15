import Value from "~/js/expression/Value";
import Zero from "~/js/expression/Zero";

export default class Pi {

	format() {

		return "<mi>π</mi>";
	}

	add(other) {

		return other.add("pi");
	}

	sine() {

		return new Value({ value: 1 });
	}

	cosine() {

		return new Zero();
	}
}
