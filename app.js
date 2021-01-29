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
        
        this.where = "It lived at " + where;
        this.when = "It lived in " + when;
        this.fact = fact;

        this.getAFact = function(){
            let factArray = 
                [this.compareWeight(this.weight), 
                this.compareHeight(this.height), 
                this.where, this.when, 
                this.compareDiet(this.diet),
                this.fact];
            let randomIndex = Math.floor(Math.random()* factArray.length);
            return this.species === 'Pigeon' ? this.fact :factArray[randomIndex];
            
        };
        
    }

    Dino.prototype = Object.create(Creature.prototype);
   
    // Create Human Object   
    function Human(weight,height, diet, name) {
        Creature.call(this, 'Homo Sapiens', weight, height, diet);

        this.name = name;        
    };

    Human.prototype = Object.create(Creature.prototype);
    
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    Dino.prototype.compareWeight = function(weight) {

        const weightComparison = weight/human.weight;

        return weightComparison > 1 
            ? "It was " + weightComparison + " times heavier more than you!"
            : "It was even lighter than you!";

    };
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    Dino.prototype.compareHeight = function(height){

        const heightComparison = height/human.height;

        return heightComparison > 1 
            ? "It was " + heightComparison + " times higher than you!"
            : "It was even smaller than you!";
    };

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.

    Dino.prototype.compareDiet = function(diet) {

        return human.diet.toLowerCase() === diet
            ? "It is a " + diet + " like you!" 
            : "Unlike you it is a " + diet + "!";
    };


    // Generate Tiles for each Dino in Array  
    function generateTiles(){

        gridItems.splice(4,0,human);
        console.log(gridItems);

        for(let item in gridItems){

            let appendString = "<div class='grid-item'><h3>" + gridItems[item].species
            +"</h3><img src=" + gridItems[item].image + "><p>";
        
            gridItems[item] instanceof Human 
                ? appendString += gridItems[item].name 
                : appendString += gridItems[item].getAFact();

            grid.innerHTML += appendString + "</p></div>";

        
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
    human = (function (){
        formData = new FormData(form);    
        let height = parseInt(formData.get('feet'))*12 + parseInt(formData.get('inches'));
            
        return new Human(formData.get('weight'),height, formData.get('diet'), formData.get('name'));
       })();

    form.style.display = 'none'; 
    generateTiles();
     
}

