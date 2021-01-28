    // Create Dino Constructor
    function Creature(species, weight, height, diet, where, when, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
        this.image = "./images/" + species.split(' ').join('').toLowerCase() + ".png";

        
    }

    // Create Dino Objects
    


    // Create Human Object
    const human = {
        species :'human'                
    };

    human.prototype = Creature;


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

function generateTiles(){
    console.log(dinos);
    for(let i in dinos){

        grid.innerHTML += 
        "<div class='grid-item'><h3>" + dinos[i].species 
        +"</h3><img src=" + dinos[i].image + ">" 
        +"<p>" + dinos[i].fact +"</p>"
        +"</div>";
        
        console.log(dinos[i]);
        
    }
    console.log(human);

}


// On button click, prepare and display infographic
const button = document.getElementById('btn');
const form = document.getElementById('dino-compare');
const grid = document.getElementById('grid');
button.addEventListener('click', hideFormShowGrid);
let dinos= [];
                    
fetch('./dino.json')
    .then(response => response.json())
    .then(json => dinos = json.Dinos.map(dino => new Creature(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)));          
         

function hideFormShowGrid() {
    form.style.display = 'none'; 
    generateTiles();
 
    
}





 
