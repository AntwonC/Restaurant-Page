const pageLoadingFunction = () => { 
    const contentContainer = document.querySelector("#content"); 

    contentContainer.style.border = "30px solid blue";
    contentContainer.style.height = "850px";
    document.body.style.backgroundColor = "#1bea15";
    
   
    /* HEADER LOGO STARTS */ 
    const divImageContainer = document.createElement("div"); 
    divImageContainer.classList.add("header-image-logo");
    divImageContainer.style.display = "flex";
    divImageContainer.style.justifyContent = "center"; 
    divImageContainer.style.marginTop = "10px";
    divImageContainer.style.marginBottom = "10px";
    
    const imageElement = document.createElement("img"); 
    imageElement.src = "./images/subway-logo.png";
    imageElement.style.width = "300px"; 
    imageElement.style.height = "200px";
     imageElement.style.backgroundColor = "red";
    
    divImageContainer.appendChild(imageElement); 
    /* HEADER LOGO END */ 

    /* MID-CONTENT STARTS */
    const divAboutMeContainer = document.createElement("div"); 
    divAboutMeContainer.style.display = "flex"; 
    divAboutMeContainer.style.justifyContent = "center";

    
    const divAboutMeHeaderElement = document.createElement("header"); 
    const divTextElement = document.createElement("div");

    divTextElement.textContent = "Hours:"; 
    divTextElement.style.fontSize = "25px";
    divTextElement.style.marginLeft = "100px";

    divAboutMeHeaderElement.appendChild(divTextElement);
    //divAboutMeHeaderElement.style.marginRight = "50px";
    
    const divAboutMeElement = document.createElement("div"); 

    divAboutMeHeaderElement.style.width = "320px";
    divAboutMeHeaderElement.style.border = "20px solid green"; 
    divAboutMeHeaderElement.style.borderRadius = "15px";
    divAboutMeHeaderElement.style.marginTop = "20px";
    divAboutMeHeaderElement.style.marginBottom = "20px";
    //divAboutMeHeaderElement.style.margin = "20px";
    divAboutMeHeaderElement.style.backgroundColor = "orange";
    
    
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
    
    const listElementOne = document.createElement("li"); 
    listElementOne.textContent = "The Way A Sandwich Should Be."; 
    listElementOne.style.color = "orange";
    listElementOne.style.fontSize = "25px";
    

    const listElementTwo = document.createElement("li"); 
    listElementTwo.textContent = "Think fresh."; 
    listElementTwo.style.color = "#1a840b";
    listElementTwo.style.fontSize = "25px";
    
    const listElementThree = document.createElement("li"); 
    listElementThree.textContent = "Eat fresh."; 
    listElementThree.style.color = "orange";
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
    
    //contentContainer.appendChild(imageElement); 
    contentContainer.appendChild(divImageContainer); 
    
    //contentContainer.appendChild(divAboutMeElement); 
    contentContainer.appendChild(divAboutMeContainer); 
   // contentContainer.appendChild(list); 
    contentContainer.appendChild(listContainer); 
    
}

export default pageLoadingFunction; 

