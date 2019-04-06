const arrayOfBeers = [
    {
     name: "Citra OG",
     type: "American wheat",
     style: "wheat",
     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Weizenbier-ukko.jpg",
     ingredients: "malted wheat, Noble hops, yeast, water",
     ibu: 25,
     abv: 4.5
    },
    {
     name: "Hypertext",
     type: "Oatmeal Stout",
     style: "ales",
     imageUrl: "https://c1.staticflickr.com/5/4111/4983706691_0e1e088c2f_b.jpg",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 27,
     abv: 5.3
    },
    {
     name: "forEach(American)",
     type: "American Lager",
     style: "lagers",
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kK6xiKcLz9ERVaLn3LDpX07KI0PjNDB0jvrhCLpZqL1izFwp",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 13,
     abv: 4.4
    },
    {
     name: "Parameter",
     type: "Pale Ale",
     style: "ales",
     imageUrl: "http://art11.photozou.jp/pub/918/230918/photo/26047883_624.jpg",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 40,
     abv: 4.7
    },
   {
     name: "Javascript",
     type: "Porter",
     style: "ales",
     imageUrl: "https://farm6.staticflickr.com/5759/23173120300_41a31b2323_b.jpg",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 32,
     abv: 5.6
    }, 
    {
     name: "Encryption",
     type: "English Brown",
     style: "ales",
     imageUrl: "https://c1.staticflickr.com/6/5529/11163847405_b78604e766_b.jpg",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 22,
     abv: 4.6
    },
    {
     name: "Double Click",
     type: "Doppelbock",
     style: "lagers",
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b8h6lyY1hdbY8RU4pgDJIlztu1Y9YBkI1NrbMVPyBaQ2IYvX",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 20,
     abv: 8.5
    },
    {
     name: "Pixel",
     type: "Pilsner",
     style: "lagers",
     imageUrl: "http://capl.washjeff.edu/1/l/1753.jpg",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 30,
     abv: 4.6
    },
    {
     name: "Hacker",
     type: "Schwarzbier",
     style: "lagers",
     imageUrl: "https://urbanmatter.com/chicago/wp-content/uploads/2016/08/dark-beer.jpg",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 25,
     abv: 4.7
    },
    {
     name: "Bootstrap",
     type: "Belgian White",
     style: "wheat",
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CwrhxB69PhOa81pFiNnLs2fy8eGMpZS5wKeB4Jl1vVjZ2MEpZQ",
     ingredients: "malted wheat, hops, yeast, water",
     ibu: 10,
     abv: 4.5
    },
    {
     name: "Blue Screen of Death",
     type: "Blueberry",
     style: "specialty",
     imageUrl: "https://c1.staticflickr.com/3/2628/4122695099_80e09bac0d_b.jpg",
     ingredients: "malted wheat, hops, yeast, water, blueberries",
     ibu: 16,
     abv: 8
    },
    {
     name: "Digital Citizen",
     type: "Oktoberfest",
     style: "specialty",
     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrOHCcYX--6_ndvjP8KFX9ZVv8jc9qxw1l3nFokJNABAO9eNK9Q",
     ingredients: "malted barley, hops, yeast, water",
     ibu: 20,
     abv: 5.5
    },
];

const arrayOfFounders = [
  {
    name: 'Heath',
    description: "Heath makes the best playlists with drake for the crew to listen to in warehouse! His hip-HOPPS playlist is part of out trade secrets",
    image:'https://i.pinimg.com/originals/11/af/65/11af65a0bc6e6949a005a8cf12db4ee5.jpg',
  },
  {
    name: 'Samuel',
    description: "Is the team lead of this MALT-ly crew!",
    image: 'https://i.pinimg.com/originals/79/7d/f0/797df028d0dd812449584089005ce670.jpg',
  },
  {
    name: 'Jen',
    description: "Jen picks the finest barley! Every one else can BARELY compete",
    image: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/34/hbz-strawberry-blonde-blake-lively.jpg?crop=1.0xw:1xh;center,top&resize=480:*',
  },
{
    name: 'Matthew',
    description: "Is mostly a janitor but some time comes up with crazy beer ideas time to time!",
    image: 'https://m.media-amazon.com/images/M/MV5BODZjM2UzOTEtMTk5MC00NjZlLWJiM2EtMThhMDJhMGZkOGFkXkEyXkFqcGdeQXVyODQwMzE5OQ@@._V1_UX140_CR0,0,140,209_AL_.jpg'
  },
];

let sixPack = [];
let beerId = 1;

const printBeer = (event) => {
  const newBeer = {};
  event.preventDefault();
  newBeer.name = document.getElementById('beer-input').value;
  newBeer.id = `beer${beerId}`;
  beerId++;
  sixPack.push(newBeer)
  document.getElementById('beer-input').value = '';
  sixPackBuilder();
}

const removeBeer = (btn) => {
  let tempArray = [];
  sixPack.forEach((beer) => {
    console.log(btn.id, '/', beer.id)
    if(btn.id !== beer.id) {
      tempArray.push(beer);
    }
  })
  sixPack = tempArray;
  sixPackBuilder()
}

const sixPackBuilder = () => {
  let domString = '';
  sixPack.forEach((beer) => {
    domString += `<div class="card mb-3" style="width: 18rem;">`
    domString += `<div class="card-body">`
    domString += `<h5 class="card-title">${beer.name}</h5>`
    domString += `<h6 class="card-subtitle mb-2 text-muted">Good choice.</h6>`
    domString += `<p class="card-text">Thanks for adding this Citra Beer!</p>`
    domString += `<button class="btn btn-primary remove" id=${beer.id}>Remove</button>`
    domString += `</div>`
    domString += `</div>`
  })
  printToDom('sixpack-container', domString)
}

const carouselFill = () => {
  let domString = '';
  arrayOfBeers.forEach((beer) => {
    if(beer.name === "Citra OG") {
      domString += `<div class="carousel-item active">`
    } else {
      domString += `<div class="carousel-item">`
    }
    domString += `<img class="d-block col-8 offset-2" height="500" src=${beer.imageUrl} alt="First slide"></img>`
    domString += `<div class="carousel-caption d-none d-md-block">`
    domString += `<h5>${beer.name}</h5>`
    domString += `<p>${beer.type}</p>`
    domString += `</div>`
    domString += `</div>`
  })
  printToDom('carousel-cont', domString)
}
 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
 
 
 const domStringBuilder = (arrayToPrint) => {
        let domString = '';
        arrayToPrint.forEach((item) => {
            domString +=  `<div class="card col-12 col-md-6 col-lg-3 secondary-text-color" style"max-width: 360px; min-width: 285px;">`
            domString +=  `<div class="card-body divider-color ">`;
            domString +=  `<div class='row justify-content-center'><img src=${item.image} class="img-fluid " alt="Responsive image"></div>`;
            domString +=  `<h3 class="card-title accent-color">${item.name}</h3>`;
            domString +=  `<p class="card-title text-primary-color">${item.description}</p>`;
            domString +=  `</div>`;
            domString += `</div>`;
        });
        printToDom('founders', domString);
    }

const beerCardBuilder = (arrayToPrint) => {
  let domString = '';
    arrayToPrint.forEach((beer) => {
      domString += `<div class="card col-4">`
      domString += `<div class="card-body">`
      domString += `<h2 class="card-header">${beer.name}</h2>`
      domString += `<p>${beer.type}</p>`
      domString += `<img src=${beer.imageUrl} alt=${beer.name} class="img-fluid">`
      domString += `<p>Style: ${beer.style}</p>`
      domString += `<p>Ingredients: ${beer.ingredients}</p>`
      domString += `<p>IBU: ${beer.ibu}</p>`
      domString += `<p>ABV: ${beer.abv}</p>`
      domString += `</div>`
      domString += `</div>`
    });
  printToDom('beerCard', domString);
};

const beerButton = (e) => {
  const buttonId = e.target.id;
  const selectedBeers = [];
  arrayOfBeers.forEach((beer) => {
    if (beer.style === buttonId) {
        selectedBeers.push(beer);
    }
  });

  if (buttonId === 'all') {
    beerCardBuilder(arrayOfBeers);
  } else {
    beerCardBuilder(selectedBeers);
  }
};

const beerButtonEvents = () => {
  document.getElementById('ales').addEventListener('click', beerButton);
  document.getElementById('lagers').addEventListener('click', beerButton);
  document.getElementById('wheat').addEventListener('click', beerButton);
  document.getElementById('specialty').addEventListener('click', beerButton);
  document.getElementById('all').addEventListener('click', beerButton);
};
 
    const mainEventListeners = () => {
      document.getElementById('add-beer').addEventListener('click', printBeer)
      document.addEventListener('click', function(event){
        const removeButton = event.target
        if(removeButton.className === 'btn btn-primary remove') {
          removeBeer(removeButton)
        }
      })
    }
 
    const init = () => {
      
      if(document.getElementById('founders') !== null) {
        domStringBuilder(arrayOfFounders);
      } 
      if(document.getElementById('beerCard') !== null) {
        beerCardBuilder(arrayOfBeers);
      }
      if(document.getElementById('add-beer') !== null) {
        mainEventListeners();
      }
      if(document.getElementById('beerCard') !== null) {
        beerButtonEvents();
      }
      if(document.getElementById('carousel-cont') !== null) {
        carouselFill(arrayOfBeers);
      } 
    };
 
    init();

