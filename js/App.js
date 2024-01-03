import { SlideNavPiece } from "@datumjs/pieces";

import Worksheet from "~/js/Worksheet";
import Instructions from "~/js/Instructions";

import html from "~/html/app.html";

export default class App {

	#fetchPage;

	constructor(fetchPage) {

		this.#fetchPage = fetchPage;
	}

	onBind(element) {

		this.#fetchPage(element, html);

		this.currentPage =
			new SlideNavPiece([
				{
					route: "worksheet",
					page: new Worksheet(this.#fetchPage)
				},
				{
					route: "instructions",
					page: new Instructions(this.#fetchPage)
				}
			]);
	}
}
