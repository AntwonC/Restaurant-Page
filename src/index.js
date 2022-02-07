import {addTabsFunction, pageLoadingFunction , homeTabLoadingFunction, menuTabLoadingFunction, contactTabLoadingFunction} from './testModule.js';
import "./styles.css";

addTabsFunction(); 
//menuTabLoadingFunction(); 
//homeTabLoadingFunction();
pageLoadingFunction(); 

const homeTabElement = document.querySelector("#div-home-tab");
const menuTabElement = document.querySelector("#div-menu-tab");
const contactTabElement = document.querySelector("#div-contact-tab");

console.log(homeTabElement);
console.log(menuTabElement); 
console.log(contactTabElement); 

homeTabElement.addEventListener("click", homeTabLoadingFunction);

menuTabElement.addEventListener("click", menuTabLoadingFunction);

contactTabElement.addEventListener("click", contactTabLoadingFunction);
console.log("Hello from src/index.js!");