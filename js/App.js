import { SlideNavPiece, NavButton } from "@datumjs/pieces";

import fetchPage from "~/js/fetchPage";
import Worksheet from "~/js/Worksheet";
import quint from "~/quint";
import Calculator from "~/js/Calculator";
import Instructions from "~/js/Instructions";

import html from "~/html/app.html";

export default class App {

	currentPage =
		new SlideNavPiece([
			{
				route: "worksheet",
				page: new Worksheet(quint, new Calculator())
			},
			{
				route: "instructions",
				page: new Instructions()
			}
		]);

	worksheet = new NavButton(0, this.currentPage);

	instructions = new NavButton(1, this.currentPage);

	onBind(element) {

		fetchPage(element, html);
	}
}
