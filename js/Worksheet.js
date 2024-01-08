import html from "~/html/worksheet.html";

import fetchPage from "~/js/fetchPage";

export default class Worksheet {

	onBind(element) {

		fetchPage(element, html);
	}
}
