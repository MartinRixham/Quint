import QUnit from "qunit";
import App from "~/js/App";

QUnit.module("app");

QUnit.test("test app", async assert => {

	const app = new App();

	assert.ok(app);
});
