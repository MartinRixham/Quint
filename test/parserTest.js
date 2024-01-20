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

QUnit.test("parse variable", async assert => {

	assert.deepEqual(quint.parse("theta"), { identifier: "theta" });
	assert.deepEqual(quint.parse("x"), { identifier: "x" });
	assert.deepEqual(quint.parse("y"), { identifier: "y" });
	assert.deepEqual(quint.parse("z"), { identifier: "z" });
});

QUnit.test("parse ket", async assert => {

	assert.deepEqual(quint.parse("|theta>"), { angle: { identifier: "theta" } });
});
