const pageLoadingFunction = () => { 
    const contentContainer = document.querySelector("#content"); 

    document.body.style.backgroundColor = "#1bea15";
    document.body.style.display = "inline-block";
    const imageElement = document.createElement("img"); 
    imageElement.src = "/home/anthony/the_odin_project/Restaurant-Page/subway-logo.png";
    imageElement.style.width = "500px"; 
    imageElement.style.height = "500px";

    const divAboutMeElement = document.createElement("div"); 
    divAboutMeElement.textContent = "Looking for a tasty sandwich? Subway Sandwiches are filling and tasty!";
    divAboutMeElement.style.color = "blue"; 
    divAboutMeElement.style.fontSize = "30px"; 
    
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

    contentContainer.appendChild(imageElement); 
    contentContainer.appendChild(divAboutMeElement); 
    contentContainer.appendChild(list); 
}

export default pageLoadingFunction; 

