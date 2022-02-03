const pageLoadingFunction = () => { 
    const contentContainer = document.querySelector("#content"); 
    
    contentContainer.style.background = "linear-gradient(to right top, #109a26, #e5b71a)";
    contentContainer.style.border = "20px solid transparent";
    //contentContainer.style.borderRadius = "20px";
    //contentContainer.style.border = "30px solid orange";
    contentContainer.style.height = "930px";
    contentContainer.style.width = "800px";
    contentContainer.style.margin = "0 auto";
    //contentContainer.style.display = "flex";
    //contentContainer.style.justifyContent = "center";
    document.body.style.backgroundColor = "#1bea15";

    /* TAB SWITCHING STARTS */
    const divTabsContainer = document.createElement("header");
    divTabsContainer.classList.add("tabs");
    divTabsContainer.style.display = "flex";
    divTabsContainer.style.justifyContent = "center";

    const homeTab = document.createElement("div"); 
    homeTab.classList.add("div-home-tab");
    homeTab.textContent = "Home"; 
    homeTab.style.width = "150px"; 
    homeTab.style.height = "50px"; 
    homeTab.style.background = "red"; 
    homeTab.style.textAlign = "center";

    const menuTab = document.createElement("div"); 
    menuTab.classList.add("div-menu-tab");
    menuTab.textContent = "Tab"; 
    menuTab.style.width = "150px"; 
    menuTab.style.height = "50px"; 
    menuTab.style.background = "red";
    menuTab.style.textAlign = "center";


    const contactTab = document.createElement("div"); 
    contactTab.classList.add("div-contact-tab");
    contactTab.textContent = "Contact"; 
    contactTab.style.width = "150px"; 
    contactTab.style.height = "50px"; 
    contactTab.style.background = "red";
    contactTab.style.textAlign = "center";

    divTabsContainer.appendChild(homeTab); 
    divTabsContainer.appendChild(menuTab); 
    divTabsContainer.appendChild(contactTab); 
    

    /* TAB SWITCHING END */
   
    /* HEADER LOGO STARTS */ 
    const divImageContainer = document.createElement("div"); 
    divImageContainer.classList.add("header-image-logo");
    divImageContainer.style.display = "flex";
    divImageContainer.style.justifyContent = "center"; 
    divImageContainer.style.marginTop = "10px";
    divImageContainer.style.marginBottom = "10px";
    //divImageContainer.style.border = "20px solid green";
    
    const imageElement = document.createElement("img"); 
    imageElement.src = "/home/anthony/the_odin_project/Restaurant-Page/src/images/subway-logo.png";   
    imageElement.style.width = "300px"; 
    imageElement.style.height = "200px";
    imageElement.style.backgroundColor = "orange";
    imageElement.style.border = "20px solid green";

    divImageContainer.appendChild(imageElement); 
    /* HEADER LOGO END */ 

    /* MID-CONTENT STARTS */
    const divAboutMeContainer = document.createElement("div"); 
    divAboutMeContainer.style.display = "flex"; 
    divAboutMeContainer.style.justifyContent = "center";

    
    const divAboutMeHeaderElement = document.createElement("header"); 

    const divTextElement = document.createElement("div");
    divTextElement.classList.add("hoursText");
    divTextElement.textContent = "Hours:"; 
    divTextElement.style.fontSize = "50px";
    divTextElement.style.fontFamily = "Chocolate"; 
    //divTextElement.style.src = url("./fonts/Chocolate_Covered_Raindrops.ttf"); 
    //divTextElement.style.fontStyle = "./fonts/Chocolate Covered Raindrops.ttf";

    divTextElement.style.marginLeft = "110px";
    divTextElement.style.marginTop = "10px";
    divTextElement.style.marginBottom = "10px";


    //divAboutMeHeaderElement.style.marginRight = "50px";
    
    
    divAboutMeHeaderElement.style.width = "320px";
    divAboutMeHeaderElement.style.border = "20px solid green"; 
    divAboutMeHeaderElement.style.borderRadius = "15px";
    divAboutMeHeaderElement.style.marginTop = "20px";
    divAboutMeHeaderElement.style.marginBottom = "20px";
    divAboutMeHeaderElement.style.padding= "15px 15px 30px 15px";
    //divAboutMeHeaderElement.style.margin = "20px";
    divAboutMeHeaderElement.style.backgroundColor = "orange";

    divAboutMeHeaderElement.appendChild(divTextElement);
    
    const divAboutMeElement = document.createElement("div"); 
    
    divAboutMeElement.textContent = `Monday: 10AM-8PM 
                                     Tuesday: 10AM-8PM
                                     Wednesday: 10AM-8PM
                                     Thursday: 10AM-8PM
                                     Friday: 10AM-8PM
                                     Saturday: 11AM-7PM
                                     Sunday: 11AM-5PM`;
    divAboutMeElement.style.color = "blue"; 
    divAboutMeElement.style.fontSize = "30px"; 
    divAboutMeElement.style.marginRight = "-20px";
    //divAboutMeElement.style.left = "-500px";
    //divAboutMeElement.style.marginLeft = "-20px";


    divAboutMeHeaderElement.appendChild(divAboutMeElement);
   // divAboutMeContainer.appendChild(divAboutMeHeaderElement);
    divAboutMeContainer.appendChild(divAboutMeHeaderElement); 
    /* MID-CONTENT ENDS */

    /* LIST STARTS */
    const listContainer = document.createElement("div"); 
    listContainer.style.display = "flex"; 
    listContainer.style.justifyContent = "center";

    const list = document.createElement("ol"); 
    list.style.border = "20px solid green";
    list.style.borderRadius = "20px";
    list.style.padding = "30px 30px 30px 30px";
    list.style.backgroundColor = "orange";

    const listElementOne = document.createElement("li"); 
    listElementOne.textContent = "The Way A Sandwich Should Be."; 
    listElementOne.style.color = "yellow";
    listElementOne.style.fontSize = "25px";
    

    const listElementTwo = document.createElement("li"); 
    listElementTwo.textContent = "Think fresh."; 
    listElementTwo.style.color = "#1a840b";
    listElementTwo.style.fontSize = "25px";
    
    const listElementThree = document.createElement("li"); 
    listElementThree.textContent = "Eat fresh."; 
    listElementThree.style.color = "yellow";
    listElementThree.style.fontSize = "25px";

    const listElementFour = document.createElement("li"); 
    listElementFour.textContent = "Fresh is What We Do."; 
    listElementFour.style.color = "#1a840b";
    listElementFour.style.fontSize = "25px";


    list.appendChild(listElementOne); 
    list.appendChild(listElementTwo); 
    list.appendChild(listElementThree); 
    list.appendChild(listElementFour);  

    listContainer.appendChild(list); 

    /* LIST ENDS */
    
    /* APPENDING CHILDREN TO CONTENT */
    contentContainer.appendChild(divTabsContainer); 
    contentContainer.appendChild(divImageContainer); 
    contentContainer.appendChild(divAboutMeContainer); 
    contentContainer.appendChild(listContainer); 
    /* APPENDING CHILDREN TO CONTENT */
    
}

export default pageLoadingFunction; 

