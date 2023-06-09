let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  
  /**
   * ACCESSING DOM ELEMENTS (Querying)
   */

  // Part 1
    //Write a JavaScript statement that selects the #main-title ID element.
    //Remember there are a couple of ways to query id.
    //Change the text of the title to something shorter. 
  document.getElementById('main-title').innerHTML = "Welcome to DOM Toretto!"; // OR document.querySelector("#main-title")
    

  // Part 2
    //Select the body and change the background-color to a new color of your choice.
  document.querySelector('body').style.backgroundColor = 'aqua';


  // Part 3
    //Select DOM's Favorite Things list and remove the last list item.
  let list = document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);
  

  // Part 4
    //Select all .special-title class elements and change their font-size to 2rem
    // Remember you might have to iterate through the list of elements
  let specialTittles = document.querySelectorAll('.special-title');
  //console.log(specialTittles);
  for(let title of specialTittles){
    //console.log(title);
    title.style.fontSize = '2rem';
  }

  // Part 5
    //Access the Past Races list and remove Chicago.
  const pastRaces = document.querySelector('#past-races');// "ul" element/object with 6 "li" children
  //pastRaces.childNodes -> NodeList (array-like object)
  //pastRaces.children -> HTML Collection
  //console.log(pastRaces);
  //const race = document.querySelector('#past-races').children[3];// "li" element/node
  //console.log(race);
  //pastRaces.removeChild(race);
  pastRaces.children[3].remove();
  

  // Creating New DOM Elements

  // Part 6
    /**
     * Let's add to DOM's Past Races list. 
     * Create a new <li> element, 
     * */
    const ilEl = document.createElement('li');
    //  * change the new <li> text to the name of a city,
    ilEl.textContent = 'Omsk';
    //  * and append it to the Past Races list.
    pastRaces.appendChild(ilEl);
    

  // Part 7
    /**
     * Create a new .blog-post corresponding to the new city added in Part 6. 
     * You will have to create a new <div> with class of .blog-post,
     * */
    const main = document.querySelector('.main');
    //console.log(main);
    const divEl = document.createElement('div');
    //console.log( typeof divEl);
    main.appendChild(divEl);
    divEl.classList.add('blog-post');
    

    //  *  a new <h2> with text,
    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    const h2Text = document.createTextNode('Omsk');
    h2El.appendChild(h2Text);
    
   
    // //  *  and a new <p> with some text.
    const pEl = document.createElement('p');
    divEl.appendChild(pEl);
    const pElText = document.createTextNode("I GOT FROZEN THERE");
    pEl.appendChild(pElText);
    //  *  Think about what order you want to create the elements, and what order you want to append them in.
    
  //Event Handlers

  // Part 8
  /**
   * * Query select the #quote-title ID element and add a click event handler. 
   * That event handler should use the function randomQuote whenever #quote-titleis clicked.
   */
  const quoteTitle = this.getElementById('quote-title');
  //quoteTitle.onclick = randomQuote; -> this one works as well
  quoteTitle.addEventListener('click', randomQuote);


  // Part 9
  /**
   * Select all .blog-post class elements. 
   * Iterate through the list of .blog-postclass elements and apply two event handlers to each node.
   * The first event handler should be listening for mouseout events
   *  while the second handler should be listening for mouseenter events.

    The mouseout handler should toggle the class .purple
    The mouseenter handler should toggle the class .red
   */
  const blogPosts = this.querySelectorAll('.blog-post');
  for(let blogPost of blogPosts){
    blogPost.addEventListener('mouseout',(event)=>{
      event.target.classList.toggle('red')

    });
    blogPost.addEventListener('mouseenter', (event)=>{
      event.target.classList.toggle('purple')

    });
  }




});
