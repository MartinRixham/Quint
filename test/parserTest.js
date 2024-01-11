import QUnit from "qunit";
import quint from "~/quint";

QUnit.module("parser");

QUnit.test("parse integer", async assert => {

	assert.deepEqual(quint.parse("12345"), { value: 12345, rational: true });
});

QUnit.test("parse float", async assert => {

	assert.deepEqual(quint.parse("12345.0"), { value: 12345.0, rational: true });
});

QUnit.test("parse pi", async assert => {

	assert.deepEqual(quint.parse("pi"), { value: "pi", rational: false });
});
