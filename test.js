const test = require("ava");
const multiconvert = require("./multi-convert");

const random_numbers = new Uint8Array(256);
for (let i = 0; i <= 255; i++) {
  random_numbers[i] = i;
}

test("test array buffers", async t => {
  const output = multiconvert({ data: random_numbers.buffer });
  console.log(output);
  t.is(output.int8Array.byteLength, 256);
  t.is(output.uint8Array.byteLength, 256);
  t.is(output.uint8ClampedArray.byteLength, 256);
  t.is(output.arrayBuffer.byteLength, 256);
  t.is(output.buffer.byteLength, 256);
  t.is(output.dataView.byteLength, 256);
  t.is(output.base64.length, 344);
  t.is(output.hex.length, 512);
});
