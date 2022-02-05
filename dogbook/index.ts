
import {PageFlip} from 'page-flip';

const pageFlip = new PageFlip(
    document.getElementById("example"),
        {
        // options here, wait what is this file for exactly.
        }
)

pageFlip.loadFromHTML(document.querySelectorAll(".page"));