    // Create Dino Constructor
    function Creature(species, weight, height, diet) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;        
        this.image = "./images/" + species.split(' ').join('').toLowerCase() + ".png"; 
    }

    // Create Dino Objects
    function Dino(species, weight, height, diet, where, when, fact){
        Creature.call(this, species, weight, height, diet);
        
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    Dino.prototype = Object.create(Creature.prototype);
   
    // Create Human Object
    function Human(weight,height, diet, name) {
        Creature.call(this, 'Homo Sapiens', weight, height, diet);

        this.fact = name;
    };

    Human.prototype = Object.create(Creature.prototype);
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array  
function generateTiles(){

    gridItems.splice(4,0,human);
    console.log(gridItems);

    for(let item in gridItems){

        grid.innerHTML += 
        "<div class='grid-item'><h3>" + gridItems[item].species 
        +"</h3><img src=" + gridItems[item].image + ">" 
        +"<p>" + gridItems[item].fact +"</p>"
        +"</div>";
    }
    
}


// On button click, prepare and display infographic
const button = document.getElementById('btn');
const form = document.getElementById('dino-compare');
const grid = document.getElementById('grid');

button.addEventListener('click', hideFormShowGrid);

let human = {};
let gridItems= [];

//read json file and add th dinos array                    
fetch('./dino.json')
    .then(response => response.json())
    .then(json => gridItems = json.Dinos.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)));          
         

// Add tiles to DOM
// Remove form from screen
function hideFormShowGrid() {
    
    // Use IIFE to get human data from form
    human = (function(){
        formData = new FormData(form);    
        let height = formData.get('feet');
    
        return new Human(formData.get('weight'),height, formData.get('diet'), formData.get('name'));
       })();
    form.style.display = 'none'; 
    generateTiles();
     
}





 
