/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:13:42-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T14:44:03-08:00
 */
const path = require("path");
const DETAILED_HISTORY_DB = path.join(__dirname, "history.json");
const DETAILED_CONTENT = path.join(__dirname, "../src/content.js");
const DETAILED_DIRECTORY = path.join(__dirname, "../src/directory.js");
const DETAILED_FILE = path.join(__dirname, "../src/file.js");

const TEST_HISTORY_DB = path.join(__dirname, "sandbox.history.json");
/*
  d = detailed
  a = abstracted

  Checkout README for breakdown of Detailed vs. Abstracted
*/
module.exports = {
  T_HISTORY: TEST_HISTORY_DB,
  D_HISTORY: DETAILED_HISTORY_DB,
  D_CONTENT: DETAILED_CONTENT,
  D_DIRECTORY: DETAILED_DIRECTORY,
  D_FILE: DETAILED_FILE
};