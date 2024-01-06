import html from "~/html/instructions.html";

export default class Instructions {

	#fetchPage;

	constructor(fetchPage) {

		this.#fetchPage = fetchPage;
	}

	onBind(element) {

		this.#fetchPage(element, html);
	}
}
