import { SlideNavPiece, NavButton } from "@datumjs/pieces";

import Worksheet from "~/js/Worksheet";
import Instructions from "~/js/Instructions";

import html from "~/html/app.html";

export default class App {

	#fetchPage;

	currentPage;

	worksheet;

	instructions;

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

		this.worksheet = new NavButton(0, this.currentPage);

		this.instructions = new NavButton(1, this.currentPage);
	}
}
