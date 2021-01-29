    // Creature Constructor 
    function Creature(species, weight, height, diet) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;        
        this.image = "./images/" + species.split(' ').join('').toLowerCase() + ".png"; 
    }

    // Dino Constructor inherits from Creature
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
   
    // Human Constructor inherits from Creature  
    function Human(weight,height, diet, name) {
        Creature.call(this, 'Homo Sapiens', weight, height, diet);

        this.name = name;        
    };

    Human.prototype = Object.create(Creature.prototype);
    
    // Create Dino Compare Method 1
    // Compares dino weight with human weight 
    Dino.prototype.compareWeight = function(weight) {

        const weightComparison = weight/human.weight;

        return weightComparison >= 1.2 ? "It was " + Math.floor(weightComparison*10)/10 + " times heavier than you!"
            : weightComparison < 1.2 && weightComparison > 0.8 ? "It was about your weight!"
            : "It was even lighter than you!";

    };
    
    // Create Dino Compare Method 2
    // Compares dino height with human height
    Dino.prototype.compareHeight = function(height){

        const heightComparison = height/human.height;

        return heightComparison >= 1.2 ? "It was " + Math.floor(heightComparison*10)/10 + " times higher than you!"
            : heightComparison < 1.2 && heightComparison >0.8 ? "It was about your height!"
            : "It was even smaller than you!";
    };

    
    // Create Dino Compare Method 3
    // Compares dino diet with human diet
    Dino.prototype.compareDiet = function(diet) {

        return human.diet.toLowerCase() === diet
            ? "It was a " + diet + " like you!" 
            : "Unlike you it was a " + diet + "!";
    };


    // Generates Tiles for each Dino in Array  
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
    // Adds tiles to DOM
    // Removes form from screen
    function hideFormShowGrid() {
    
        // Uses IIFE to get human data from form
        human = (function (){
            formData = new FormData(form);    
            let height = parseInt(formData.get('feet'))*12 + parseInt(formData.get('inches'));
            
            return new Human(formData.get('weight'),height, formData.get('diet'), formData.get('name'));
        })();

        form.style.display = 'none'; 
        generateTiles();     
    }



const button = document.getElementById('btn');
const form = document.getElementById('dino-compare');
const grid = document.getElementById('grid');

button.addEventListener('click', hideFormShowGrid);

let human = {};
let gridItems= [];

//read json file and add items to the gridItems array                    
fetch('./dino.json')
    .then(response => response.json())
    .then(json => gridItems = json.Dinos.map(dino => new Dino(dino.species, dino.weight, dino.height, dino.diet, dino.where, dino.when, dino.fact)));          
         



