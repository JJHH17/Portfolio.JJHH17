// JavaScript for main page of Portoflio

import { aboutMeBtn, aboutMeDiv, projectsDiv, contactDiv, projectsBtn} from "./domSelector.js";

aboutMeBtn.onclick = () => {
    aboutMeDiv.style.display = "block"
    projectsDiv.style.display = "none"
    contactDiv.style.display = "none"
};

projectsBtn.onclick = () => {
    aboutMeDiv.style.display = "none"
    projectsDiv.style.display = "block"
    contactDiv.style.display = "none"
}