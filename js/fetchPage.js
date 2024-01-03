export default function fetchPage(element, page, done) {

	fetch(page.replace(/\?.*/, ""))
		.then(response => response.text())
		.then(html => element.innerHTML = html)
		.then(() => done && done());
}
