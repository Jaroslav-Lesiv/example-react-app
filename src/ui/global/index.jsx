import { injectGlobal } from "styled-components";
import fontSrc from "../../assets/fonts/ExpletusSans-Regular.ttf";
import { fonts } from "../constant";

injectGlobal`

    body {
        overflow: hidden
    }

    body, html, div, a, span, li, button, input, p, img {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    li {
        list-style: none;
    }
    @font-face {
        font-family: ${fonts.fontName};
        src: url(${fontSrc});
    }

    body, button, input {
        font-family: ${fonts.fontName};
    }
`;
