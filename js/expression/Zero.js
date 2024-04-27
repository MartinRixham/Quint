import Value from "~/js/expression/Value";

export default class Zero {

	format() {

		return "<mn>0</mn>";
	}

	calculate() {

		return null;
	}

	sine() {

		return new Zero();
	}

	cosine() {

		return new Value({ value: 1, rational: true });
	}
}
