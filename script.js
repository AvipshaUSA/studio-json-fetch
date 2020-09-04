window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){
    
    return response.json();
    })
    .then(function(json) {
      const container = document.querySelector("#container");
      
      let astronauts = "";
      //for(astronaut of json){
        json.sort((a, b) => {
        return b.hoursInSpace - a.hoursInSpace;
        })
       console.log(json)
       let count = 0;
       json.forEach((astronaut) => {
 let color;
        if(astronaut.active){
            color = 'green'
        }
           
        astronauts+= `
        <div class = "astronaut">
    
         <div class = "bio">
        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
         <ul>
         <li>Hours in Space: ${astronaut.hoursInSpace}</li>
         <li style = "color:${color}">Active:${astronaut.active}</li>
            
         <li>Skils: ${astronaut.skills.join(", ")}</li>
        </ul>
        </div>
        <img class = "avatar" src = "${astronaut.picture}"></src>
        
         </div>`;
         count =count+1;
    });
    container.innerHTML=`<p><h3>Astronaut count: ${count}</h3></p> 
    <p> ${astronauts} </p>`;   
    
    console.log(count);
    
     });
    });