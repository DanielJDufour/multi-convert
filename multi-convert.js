const toab = require("toab");
const isTypedArray = require("is-typed-array");
const toTypedArrays = require("to-typed-arrays");

function multiconvert({ data, debug = false }) {
  if (debug) console.log("[multiconvert] starting with ", data);
  const result = {};

  const constructor_name =
    (data && data.constructor && data.constructor.name) || "";

  const dataIsATypedArray = isTypedArray(data);

  const unsigned = constructor_name.includes("Uint");

  // toab converts array buffers, buffers, files, text, and typed arrays
  result.arrayBuffer = toab(data) || null;

  if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
    result.buffer = data;
  } else if (typeof data === "string") {
    result.string = data;
    try {
      result.object = JSON.parse(data);
      result.json = data;
    } catch (error) {}
  } else if (typeof data === "object") {
    try {
      result.json = JSON.stringify(data);
      result.object = data;
    } catch (error) {}
  }

  if (result.arrayBuffer) {
    const typedArrays = toTypedArrays({
      arrayBuffer: result.arrayBuffer,
      debug
    });
    for (let arrayType in typedArrays) {
      const key = arrayType[0].toLowerCase() + arrayType.substr(1);
      if (!result[key]) {
        result[key] = typedArrays[arrayType];
      }
    }
  }

  if (result.arrayBuffer && !result.buffer && typeof Buffer !== "undefined") {
    result.buffer = Buffer.from(result.arrayBuffer);
  }

  if (result.arrayBuffer && !result.dataView) {
    result.dataView = new DataView(result.arrayBuffer);
  }

  if (result.buffer && !result.base64) {
    result.base64 = result.buffer.toString("base64");
  }

  if (result.buffer && !result.hex) {
    result.hex = result.buffer.toString("hex");
  }

  return result;
}

module.exports = multiconvert;
