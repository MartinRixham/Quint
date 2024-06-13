import QUnit from "qunit";
import quint from "~/quint";

QUnit.module("parser");

QUnit.test("parse integer", async assert => {

	assert.deepEqual(quint.parse("12345"), { value: 12345 });
});

QUnit.test("parse float", async assert => {

	assert.deepEqual(quint.parse("12345.0"), { value: 12345 });
});

QUnit.test("parse pi", async assert => {

	assert.deepEqual(quint.parse("pi"), { value: "pi" });
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

QUnit.test("parse zero ket", async assert => {

	assert.deepEqual(quint.parse("|0>"), { angle: { value: 0 } });
});

QUnit.test("parse sum of numbers", async assert => {

	assert.deepEqual(quint.parse("1 + pi"), { left: { value: 1 }, right: { value: "pi" }, operator: "plus" });
});
