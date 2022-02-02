
import {PageFlip} from 'page-flip';

const pageFlip = new PageFlip(
    document.getElementById("example"),
        {
        // options here
        }
)

pageFlip.loadFromHTML(document.querySelectorAll(".page"));