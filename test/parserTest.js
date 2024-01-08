import QUnit from "qunit";
import quint from "~/quint";

QUnit.module("parser");

QUnit.test("parse integer", async assert => {

	assert.strictEqual(quint.parse("12345"), 12345);
});
