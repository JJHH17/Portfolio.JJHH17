// JavaScript for main page of Portoflio

import { aboutMeBtn } from "./domSelector.js";
import { aboutMeDiv } from "./domSelector.js";

aboutMeBtn.onclick = () => {
    aboutMeDiv.style.display = "block"
    // Other divs to be added
};