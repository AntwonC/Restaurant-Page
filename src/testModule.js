const addTabsFunction = () => {
      const contentContainer = document.querySelector("#content"); 
      /* TAB SWITCHING STARTS */
      const divTabsContainer = document.createElement("header");
      divTabsContainer.classList.add("tabs");
      divTabsContainer.style.display = "flex";
      divTabsContainer.style.justifyContent = "center";

      //const imgHomeTabContainer = document.createElement("img");
      const homeTab = document.createElement("div"); 
      homeTab.setAttribute("id", "div-home-tab"); 
      homeTab.textContent = "Home"; 
      homeTab.style.width = "150px"; 
      homeTab.style.height = "50px"; 
      //homeTab.style.background = "#109a26"; 
      homeTab.style.textAlign = "center";
      homeTab.style.border = "2px black solid";
      homeTab.style.marginRight = "5px";
      homeTab.style.marginLeft = "5px";
      homeTab.style.backgroundImage = "url(/home/anthony/the_odin_project/Restaurant-Page/src/images/sandwich.png)";
      homeTab.style.backgroundSize = "contain";
      homeTab.style.backgroundRepeat = "no-repeat";

  
     // homeTab.appendChild(imgHomeTabContainer); 
      
      const menuTab = document.createElement("div"); 
      menuTab.setAttribute("id", "div-menu-tab"); 
      menuTab.textContent = "Menu"; 
      menuTab.style.width = "150px"; 
      menuTab.style.height = "50px"; 
      menuTab.style.background = "#109a26";
      menuTab.style.textAlign = "center";
      menuTab.style.border = "2px black solid";
      menuTab.style.marginRight = "5px";
      menuTab.style.marginLeft = "5px";

      const contactTab = document.createElement("div"); 
      contactTab.setAttribute("id", "div-contact-tab"); 
      contactTab.textContent = "Contact"; 
      contactTab.style.width = "150px"; 
      contactTab.style.height = "50px"; 
      contactTab.style.background = "#109a26";
      contactTab.style.textAlign = "center";
      contactTab.style.border = "2px black solid";
      contactTab.style.marginRight = "5px";
      contactTab.style.marginLeft = "5px";
  
      divTabsContainer.appendChild(homeTab); 
      divTabsContainer.appendChild(menuTab); 
      divTabsContainer.appendChild(contactTab); 
      /* TAB SWITCHING END */

      contentContainer.appendChild(divTabsContainer); 
}

const pageLoadingFunction = () => { 
    const contentContainer = document.querySelector("#content"); 
    const numberOfElements = contentContainer.querySelectorAll("*");
    for(let i = 4; i < numberOfElements.length; i++) {
      numberOfElements[i].remove(); 
    }

    contentContainer.style.background = "linear-gradient(to right top, #109a26, #e5b71a)";
    contentContainer.style.border = "20px solid transparent";
    //contentContainer.style.borderRadius = "20px";
    //contentContainer.style.border = "30px solid orange";
    contentContainer.style.height = "990px";
    contentContainer.style.width = "800px";
    contentContainer.style.margin = "0 auto";
    //contentContainer.style.display = "flex";
    //contentContainer.style.justifyContent = "center";
    document.body.style.backgroundColor = "#1bea15";


    const homeTabElement = document.querySelector("#div-home-tab");
    homeTabElement.style.background = "#e5b71a";
   
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
    //divAboutMeElement.style.color = "blue"; 
    divAboutMeElement.style.fontWeight = "bold";
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
    //contentContainer.appendChild(divTabsContainer); 
    contentContainer.appendChild(divImageContainer); 
    contentContainer.appendChild(divAboutMeContainer); 
    contentContainer.appendChild(listContainer); 
    /* APPENDING CHILDREN TO CONTENT */
    
}

const homeTabLoadingFunction = () => {
  console.log("homeTabLoadingFunction has been called.");

  const homeTabElement = document.querySelector("#div-home-tab");
  const menuTabElement = document.querySelector("#div-menu-tab");
  const contactTabElement = document.querySelector("#div-contact-tab");

  menuTabElement.style.background = "#109a26";
  contactTabElement.style.background = "#109a26";

  pageLoadingFunction(); 

}

const menuTabLoadingFunction = () => {
  console.log("menuTabLoadingFunction has been called."); 

  const contentContainer = document.querySelector("#content"); 
  const numberOfElements = contentContainer.querySelectorAll("*");
  const homeTabElement = document.querySelector("#div-home-tab");
  const menuTabElement = document.querySelector("#div-menu-tab");
  const contactTabElement = document.querySelector("#div-contact-tab");

  console.log(numberOfElements);
  homeTabElement.style.background = "#109a26";
  menuTabElement.style.background = "#e5b71a";
  contactTabElement.style.background = "#109a26";

  for(let i = 4; i < numberOfElements.length; i++) {
    numberOfElements[i].remove(); 
  }

  contentContainer.style.height = "6000px";

  const menuTextContainer = document.createElement("div"); 
  menuTextContainer.textContent = "Menu"; 
  menuTextContainer.style.fontSize = "30px"; 
  menuTextContainer.style.fontWeight = "bold";
  menuTextContainer.style.display = "flex";
  menuTextContainer.style.justifyContent = "center";
  menuTextContainer.style.background = "red";
  menuTextContainer.style.marginTop = "10px";
  menuTextContainer.style.marginLeft = "50px";
  menuTextContainer.style.marginRight = "50px";
  menuTextContainer.style.width = "700px";
  //menuTextContainer.style.margin = "0 auto";
  
  /* Steak & Cheese STARTS */
  const steakAndCheeseContainer = document.createElement("div"); 
  const steakAndCheeseDesc = document.createElement("p"); 
  const steakAndCheesePrice = document.createElement("p"); 
  const steakAndCheeseImage = document.createElement("img"); 

  steakAndCheeseContainer.textContent = "Steak & Cheese";
  steakAndCheeseContainer.style.fontStyle = "italic";
  steakAndCheeseContainer.style.fontSize = "20px";
  steakAndCheeseContainer.style.display = "flex"; 
  steakAndCheeseContainer.style.flexDirection = "column";
  steakAndCheeseContainer.style.alignItems = "center";
  steakAndCheeseContainer.style.marginTop = "10px";
  steakAndCheeseContainer.style.marginLeft = "230px";
  steakAndCheeseContainer.style.border = "20px solid green";
  steakAndCheeseContainer.style.padding = "15px 15px 15px 15px";
  steakAndCheeseContainer.style.width = "300px";
  
  steakAndCheeseDesc.classList.add("food-description");
    steakAndCheeseDesc.textContent = `A Steak & Cheese sandwich with top tier steak and
                                      melted with your favorite cheese. Load em up with veggies 
                                      and you got yourself a gourmet sandwich.`;
  steakAndCheeseDesc.style.fontFamily = "Rocko";
  steakAndCheeseDesc.style.fontStyle = "normal";

  steakAndCheesePrice.textContent = "$4.75";
  steakAndCheesePrice.style.marginRight = "210px";
  
  steakAndCheeseImage.src = "/home/anthony/the_odin_project/Restaurant-Page/src/images/Steak.jpg";
  steakAndCheeseImage.style.width = "175px"; 
  steakAndCheeseImage.style.height = "175px";

  steakAndCheeseContainer.appendChild(steakAndCheeseDesc);
  steakAndCheeseContainer.appendChild(steakAndCheesePrice); 
  steakAndCheeseContainer.appendChild(steakAndCheeseImage); 
  /* Steak & Cheese ENDS */

  /* Spicy Italian STARTS */
  const spicyItalianContainer = document.createElement("div"); 
  const spicyItalianDesc = document.createElement("p"); 
  const spicyItalianImage = document.createElement("img"); 
  const spicyItalianPrice = document.createElement("p"); 


  
  spicyItalianDesc.classList.add("food-description");
  spicyItalianDesc.style.fontFamily = "Rocko";
  spicyItalianDesc.style.fontStyle = "normal";
  spicyItalianDesc.textContent = `Want a spicy hot sandwich? 
  With pepperoni and salami along with cheese, you will have
  a tasteful and spicy sandwich. Add your favorite vegetables
  to enhance the flavor of the sandwich!`
  
  
  
  spicyItalianContainer.textContent = "Spicy Italian";
  spicyItalianContainer.style.fontStyle = "italic";
  spicyItalianContainer.style.fontSize = "20px";
  spicyItalianContainer.style.display = "flex"; 
  spicyItalianContainer.style.flexDirection = "column";
  spicyItalianContainer.style.alignItems = "center";
  spicyItalianContainer.style.marginTop = "10px";
  spicyItalianContainer.style.marginLeft = "230px";
  spicyItalianContainer.style.border = "20px solid green";
  spicyItalianContainer.style.padding = "15px 15px 15px 15px";
  spicyItalianContainer.style.width = "300px";
  
  spicyItalianPrice.textContent = "$3.75";
  spicyItalianPrice.style.marginRight = "210px";
  
  spicyItalianImage.src = "/home/anthony/the_odin_project/Restaurant-Page/src/images/Spicy.jpg";
  spicyItalianImage.style.width = "175px"; 
  spicyItalianImage.style.height = "175px";

  spicyItalianContainer.appendChild(spicyItalianDesc); 
  spicyItalianContainer.appendChild(spicyItalianPrice); 
  spicyItalianContainer.appendChild(spicyItalianImage); 
   /* Spicy Italian ENDS */
   
   /* Turkey STARTS */
   const turkeyContainer = document.createElement("div"); 
   const turkeyDesc = document.createElement("p"); 
   const turkeyImage = document.createElement("img"); 
   const turkeyPrice = document.createElement("p"); 
   
   turkeyDesc.classList.add("food-description");
   turkeyDesc.style.fontFamily = "Rocko";
   turkeyDesc.style.fontStyle = "normal";
   turkeyDesc.textContent = `Just a turkey sandwich. Put cheese
                             and vegetables to enhance the flavor. 
                             Sauces will probably help more.`

   turkeyContainer.textContent = "Oven-Roasted Turkey";
   turkeyContainer.style.fontStyle = "italic";
   turkeyContainer.style.fontSize = "20px";
   turkeyContainer.style.display = "flex"; 
   turkeyContainer.style.flexDirection = "column";
   turkeyContainer.style.alignItems = "center";
   turkeyContainer.style.marginTop = "10px";
   turkeyContainer.style.marginLeft = "230px";
   turkeyContainer.style.border = "20px solid green";
   turkeyContainer.style.padding = "15px 15px 15px 15px";
   turkeyContainer.style.width = "300px";

   turkeyPrice.textContent = "$4.25";
   turkeyPrice.style.marginRight = "210px";
 
   turkeyImage.src = "/home/anthony/the_odin_project/Restaurant-Page/src/images/Turkey.jpg";
   turkeyImage.style.width = "175px"; 
   turkeyImage.style.height = "175px";

   turkeyContainer.appendChild(turkeyDesc);
   turkeyContainer.appendChild(turkeyPrice);
   turkeyContainer.appendChild(turkeyImage); 
   /* Turkey ENDS */
   
   /* Ham STARTS */
   const hamContainer = document.createElement("div"); 
   const hamDesc = document.createElement("p"); 
   const hamImage = document.createElement("img"); 
   const hamPrice = document.createElement("p"); 

   hamDesc.classList.add("food-description");
   hamDesc.style.fontFamily = "Rocko";
   hamDesc.style.fontStyle = "normal";
   hamDesc.textContent = `Similar to the turkey sandwich. This is 
                          just with ham! When you are not feeling 
                          the turkey.`

   hamContainer.textContent = "Black Forest Ham";
   hamContainer.style.fontStyle = "italic";
   hamContainer.style.fontSize = "20px";
   hamContainer.style.display = "flex"; 
   hamContainer.style.flexDirection = "column";
   hamContainer.style.alignItems = "center";
   hamContainer.style.marginTop = "10px";
   hamContainer.style.marginLeft = "230px";
   hamContainer.style.border = "20px solid green";
   hamContainer.style.padding = "15px 15px 15px 15px";
   hamContainer.style.width = "300px";

   hamPrice.textContent = "$3.75";
   hamPrice.style.marginRight = "210px";
 
   hamImage.src = "/home/anthony/the_odin_project/Restaurant-Page/src/images/Ham.jpg";
   hamImage.style.width = "175px"; 
   hamImage.style.height = "175px";

   hamContainer.appendChild(hamDesc);
   hamContainer.appendChild(hamPrice);
   hamContainer.appendChild(hamImage); 
   /* Ham ENDS */

   const sidesTextContainer = document.createElement("div"); 
   sidesTextContainer.textContent = "Sides"; 
   sidesTextContainer.style.fontSize = "30px"; 
   sidesTextContainer.style.fontWeight = "bold";
   sidesTextContainer.style.display = "flex";
   sidesTextContainer.style.justifyContent = "center";
   sidesTextContainer.style.background = "red";
   sidesTextContainer.style.marginTop = "10px";
   sidesTextContainer.style.marginLeft = "50px";
   sidesTextContainer.style.marginRight = "50px";
   sidesTextContainer.style.width = "700px";

   /* Chocolate Chip STARTS */
   const chocolateCookieContainer = document.createElement("div"); 
   const chocolateCookieDesc = document.createElement("p"); 
   const chocolateCookieImage = document.createElement("img"); 
   const chocolateCookiePrice = document.createElement("p"); 

   chocolateCookieDesc.classList.add("food-description");
   chocolateCookieDesc.style.fontFamily = "Rocko";
   chocolateCookieDesc.style.fontStyle = "normal";
   chocolateCookieDesc.textContent = `It's just a chocolate chip coookie.
                                      Everybody loves cookies!`

   chocolateCookieContainer.textContent = "Chocolate Chip Cookie";
   chocolateCookieContainer.style.fontStyle = "italic";
   chocolateCookieContainer.style.fontSize = "20px";
   chocolateCookieContainer.style.display = "flex"; 
   chocolateCookieContainer.style.flexDirection = "column";
   chocolateCookieContainer.style.alignItems = "center";
   chocolateCookieContainer.style.marginTop = "10px";
   chocolateCookieContainer.style.marginLeft = "230px";
   chocolateCookieContainer.style.border = "20px solid green";
   chocolateCookieContainer.style.padding = "15px 15px 15px 15px";
   chocolateCookieContainer.style.width = "300px";

   chocolateCookiePrice.textContent = "$0.85";
   chocolateCookiePrice.style.marginRight = "210px";
 
   chocolateCookieImage.src = "/home/anthony/the_odin_project/Restaurant-Page/src/images/Chocolate_Chip.jpg";
   chocolateCookieImage.style.width = "250px"; 
   chocolateCookieImage.style.height = "200px";

   chocolateCookieContainer.appendChild(chocolateCookieDesc);
   chocolateCookieContainer.appendChild(chocolateCookiePrice);
   chocolateCookieContainer.appendChild(chocolateCookieImage); 

   /* Chocolate Chip ENDS */

  contentContainer.appendChild(menuTextContainer); 
  contentContainer.appendChild(steakAndCheeseContainer); 
  contentContainer.appendChild(spicyItalianContainer); 
  contentContainer.appendChild(turkeyContainer);
  contentContainer.appendChild(hamContainer);
  contentContainer.appendChild(sidesTextContainer);
  contentContainer.appendChild(chocolateCookieContainer);


  
}

const contactTabLoadingFunction = () => {
    console.log("contactTabLoadingFunction has been called."); 

    const contentContainer = document.querySelector("#content"); 
    const numberOfElements = contentContainer.querySelectorAll("*");
    const homeTabElement = document.querySelector("#div-home-tab");
    const menuTabElement = document.querySelector("#div-menu-tab");
    const contactTabElement = document.querySelector("#div-contact-tab");

    for(let i = 4; i < numberOfElements.length; i++) {
      numberOfElements[i].remove(); 
    }

    homeTabElement.style.background = "#109a26";
    menuTabElement.style.background = "#109a26";
    contactTabElement.style.background = "#e5b71a";
}

export {addTabsFunction, pageLoadingFunction, homeTabLoadingFunction, menuTabLoadingFunction, contactTabLoadingFunction}; 

