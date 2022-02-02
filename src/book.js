"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_flip_1 = require("page-flip");
const pageFlip = new page_flip_1.PageFlip(document.getElementById("example"), {
// options here
});
pageFlip.loadFromHTML(document.querySelectorAll(".page"));
//# sourceMappingURL=book.js.map