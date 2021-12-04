#!/usr/bin/env node

const fs = require("fs");

if (process.argv[2] === "-h") {
  console.log("mitman <REPOSITORY NAME> <YOUR NAME>");
  process.exit();
}

const name = process.argv.slice(3).reduce((a, b) => a + " " + b);

const readme = "# " + process.argv[2] + "\n\n### Requirements\n\n### Usage\n**install**\n\n\n### License\nMIT License";
const license = "Copyright " + (new Date()).getFullYear() + " " + name + '\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.';


fs.writeFileSync("./README.md", readme);
fs.writeFileSync("./LICENSE.txt", license);
