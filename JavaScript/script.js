// JavaScript for main page of Portoflio

import { aboutMeBtn, aboutMeDiv, projectsDiv, contactDiv} from "./domSelector.js";

aboutMeBtn.onclick = () => {
    aboutMeDiv.style.display = "block"
    projectsDiv.style.display = "none"
    contactDiv.style.display = "none"
};