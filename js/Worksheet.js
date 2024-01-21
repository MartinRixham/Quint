import { Update, Text, Value } from "Datum";
import html from "~/html/worksheet.html";

import fetchPage from "~/js/fetchPage";

export default class Worksheet {

	#parser;

	#calculator;

	result;

	errorMessage;

	constructor(parser, calculator) {

		this.#parser = parser;
		this.#calculator = calculator;
	}

	onBind(element) {

		fetchPage(element, html);
	}

	terminal = new Value(value => {

		if (!value) {

			return;
		}

		let syntaxTree;

		try {

			syntaxTree = this.#parser.parse(value);
		}
		catch (error) {

			this.errorMessage = `${error.location.start.column}:${error.message}`;
			this.result = null;
		}

		if (syntaxTree) {

			this.errorMessage = null;
			this.result = this.#calculator.calculate(syntaxTree);
		}

		return value;
	});

	answer = new Update(element => { element.innerHTML = this.result || "" });

	error = new Text(() => this.errorMessage || "");
}
