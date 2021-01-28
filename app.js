    // Create Dino Constructor
    function Dino(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;

        
    }

    // Create Dino Objects

    function createDinos() {

               
        fetch('./dino.json')
        .then(response => response.json())
        .then(function(data){
            const obj = data['Dinos'];
            const dinoArray = [];
            for(let i =0; i<8; i++) {

                dinoArray.push(obj[i]);
                                
            }

            generateTiles(dinoArray);
            
            
            
            
        });
        
       
    }


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen

function generateTiles(dinoArray){
    for(let i=0; i<8; i++){

        grid.innerHTML += "<div class='grid-item'> " + dinoArray[i].species +"</div>";
        console.log(dinoArray[i]);
    }

}


// On button click, prepare and display infographic

const button = document.getElementById('btn');
const form = document.getElementById('dino-compare');
const grid = document.getElementById('grid');
button.addEventListener('click', hideFormShowGrid);


function hideFormShowGrid() {
    form.style.display = 'none'; 
    createDinos();
 
    
}





 
