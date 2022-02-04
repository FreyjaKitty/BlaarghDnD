
import {PageFlip} from 'page-flip';

const pageFlip = new PageFlip(
    document.getElementById("example"),
        {
        // options here, just kidding Bas is a moron.
        }
)

pageFlip.loadFromHTML(document.querySelectorAll(".page"));