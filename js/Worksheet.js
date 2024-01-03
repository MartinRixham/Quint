import html from "~/html/worksheet.html";

export default class Worksheet {

	#fetchPage;

	constructor(fetchPage) {

		this.#fetchPage = fetchPage;
	}

	onBind(element) {

		this.#fetchPage(element, html);
	}
}
