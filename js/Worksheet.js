import { Text, Value } from "Datum";
import html from "~/html/worksheet.html";

import fetchPage from "~/js/fetchPage";

export default class Worksheet {

	#parser;

	#calculator;

	result;

	constructor(parser, calculator) {

		this.#parser = parser;
		this.#calculator = calculator;
	}

	onBind(element) {

		fetchPage(element, html);
	}

	terminal = new Value(value => {

		if (value) {

			this.result = this.#calculator.calculate(this.#parser.parse(value));
		}

		return value;
	});

	answer = new Text(() => this.result);
}
