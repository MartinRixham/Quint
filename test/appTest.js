import QUnit from "qunit";
import App from "~/js/App";

QUnit.module("app");

QUnit.test("Test app", async assert => {

	const app = new App();

	assert.ok(app);
});