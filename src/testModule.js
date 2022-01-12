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
    imageElement.src = "/home/anthony/the_odin_project/Restaurant-Page/subway-logo.png";
    imageElement.style.width = "300px"; 
    imageElement.style.height = "200px";
     imageElement.style.backgroundColor = "red";
    
    divImageContainer.appendChild(imageElement); 
    /* HEADER LOGO END */ 

    /* MID-CONTENT STARTS */
    const divAboutMeContainer = document.createElement("div"); 
    divAboutMeContainer.style.display = "flex"; 
    divAboutMeContainer.style.justifyContent = "center";
    
    const divAboutMeElement = document.createElement("div"); 
    divAboutMeElement.textContent = "Looking for a tasty sandwich? Subway Sandwiches are filling and tasty!";
    divAboutMeElement.style.color = "blue"; 
    divAboutMeElement.style.fontSize = "30px"; 
    divAboutMeElement.style.width = "250px";
    divAboutMeElement.style.border = "20px solid green"; 
    divAboutMeElement.style.borderRadius = "15px";
    divAboutMeElement.style.marginTop = "20px";
    divAboutMeElement.style.marginBottom = "20px";
    divAboutMeElement.style.backgroundColor = "orange";
   
    
    divAboutMeContainer.appendChild(divAboutMeElement); 
    /* MID-CONTENT ENDS */
    const list = document.createElement("ul"); 
    
    const listElementOne = document.createElement("li"); 
    listElementOne.textContent = "1. The Way A Sandwich Should Be."; 

    const listElementTwo = document.createElement("li"); 
    listElementTwo.textContent = "2. Think fresh."; 

    const listElementThree = document.createElement("li"); 
    listElementThree.textContent = "3. Eat fresh."; 

    const listElementFour = document.createElement("li"); 
    listElementFour.textContent = "4. Fresh is What We Do."; 


    list.appendChild(listElementOne); 
    list.appendChild(listElementTwo); 
    list.appendChild(listElementThree); 
    list.appendChild(listElementFour);  

    //contentContainer.appendChild(imageElement); 
    contentContainer.appendChild(divImageContainer); 
    
    //contentContainer.appendChild(divAboutMeElement); 
    contentContainer.appendChild(divAboutMeContainer); 
    contentContainer.appendChild(list); 
    
}

export default pageLoadingFunction; 

