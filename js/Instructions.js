import html from "~/html/instructions.html";

import fetchPage from "~/js/fetchPage";

export default class Instructions {

	onBind(element) {

		fetchPage(element, html);
	}
}
