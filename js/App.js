import { NavPiece } from "@datumjs/pieces";

import Worksheet from "~/js/Worksheet";

import html from "~/html/app.html";

export default class App {

	#fetchPage;

	constructor(fetchPage) {

		this.#fetchPage = fetchPage;
	}

	onBind(element) {

		this.#fetchPage(element, html);

		this.currentPage =
			new NavPiece([
				{
					route: "home",
					page: new Worksheet(this.#fetchPage)
				},
			]);
	}
}
