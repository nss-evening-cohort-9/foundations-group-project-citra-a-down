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
    domString += `<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>`
    domString += `<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>`
    domString += `<button class="btn btn-primary remove" id=${beer.id}>Remove</button>`
    domString += `</div>`
    domString += `</div>`
  })
  printToDom('sixpack-container', domString)
}
 
 const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
 };
 
 
 const domStringBuilder = (arrayToPrint) => {
        let domString = '';
        arrayToPrint.forEach((item) => {
            domString +=  `<div class="card col-3 secondary-text-color">`
            domString +=  `<div class="card-body divider-color ">`;
            domString +=  `<img src=${item.image} class="img-fluid founder-image" alt="Responsive image">`;
            domString +=  `<h3 class="card-title accent-color">${item.name}</h3>`;
            domString +=  `<p class="card-title text-primary-color">${item.description}</p>`;
            domString +=  `<div class=> </div>`;
            domString +=  `</div>`;
            domString += `</div>`;
        });
        printToDom('founders', domString);
    }
 
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
      mainEventListeners()

      if(document.getElementById('founders') !== null) {
        domStringBuilder(arrayOfFounders);
      }
    };
 
    init();
