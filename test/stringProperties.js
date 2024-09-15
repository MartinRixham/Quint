Object.defineProperty(String.prototype, "stripMargin", {
	value: function stripMargin() {

		return this.replace(/[\n\t]/g, "");
	}
});
