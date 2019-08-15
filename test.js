const assert = require("assert");
const { t0, t1, t2, t3 } = require("./fixture");
const { run } = require("./main");

assert.equal(run(t0), "Yellow");
assert.equal(run(t1), "Yellow");
assert.equal(run(t2), "Red");
