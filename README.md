# multi-convert
Convert Data into all its Multiple Forms.  For example, convert a file into an ArrayBuffer, Buffer, Base64, Data URL, Uint8Array, and more!  All in one function call.

# install
```bash
npm install multi-convert
```

# usage
```bash
const fs = require("fs");
const multiConvert = require("multi-convert");

const buffer = fs.readFileSync("./test.dat");
const conversions = multiConvert({ data: buffer });
```
conversions is
```
{
    arrayBuffer: ArrayBuffer { [Uint8Contents]: <00 01 02 03 04 ... > },
    base64: "AAECAwQFBgcICQoLDA0O ... ",
    buffer: <Buffer 00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d ... >,
    dataView: DataView { byteLength: 256, byteOffset: 0, buffer: ArrayBuffer { ... } },
    hex: "000102030405060 ...",
    int8Array: Int8Array(256) [ 0,  1,  2,  3,  4,  5,  6,  7,  ... ],
    uint8Array: Uint8Array(256) [ 0,  1,  2,  3,  4,  5,  6,  ... ],
    uint8ClampedArray: Uint8ClampedArray(256) [ 0,  1,  2,  ... ],
    int16Array: Int16Array(128) [ 256,    770,   1284,   ... ],
    uint16Array: Uint16Array(128) [ 256,   770,  1284, ... ],
    int32Array: Int32Array(64) [ 50462976,   117835012, ... ],
    uint32Array: Uint32Array(64) [ 50462976,  117835012, ... ],
    float32Array: Float32Array(64) [ 3.820471434542632e-37, ... ],
    float64Array: Float64Array(32) [ 7.949928895127363e-275, ... ],
    bigInt64Array: BigInt64Array(32) [ 506097522914230528n, ... ],
    bigUint64Array: BigUint64Array(32) [ 506097522914230528n, ... ]
}
```