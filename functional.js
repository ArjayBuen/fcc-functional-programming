// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line


// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTeaa = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTeaa(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTeaa(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);


  // The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

return fixedValue+1;
  // Only change code above this line
}

// The global variable
//let fixedValue = 4;

// Only change code below this line
function incrementer(num) {

return num+1;
  // Only change code above this line
}


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArr=[...arr];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newArr=[...arr];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
    }
}


// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = watchList.map(item=>({
  title: item["Title"],
  rating: item["imdbRating"]
}));
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// }

// Only change code above this line

console.log(JSON.stringify(ratings));


Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};
/*
[23, 65, 98, 5, 13].myMap(item => item * 2) should equal [46, 130, 196, 10, 26].
Passed:["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase()) should return ["NAOMI", "QUINCY", "CAMPERBOT"].
Passed:[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) should return 
[1, 2, 5, 2, 1]
*/


//watchlist variable at the top
// Only change code below this line
const filteredList = watchList
  .filter(movie => movie.imdbRating >= 8.0)
  .map(movie => ({ title: movie["Title"], rating: movie["imdbRating"] }));;

// Only change code above this line

console.log(filteredList);

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};
/*
[23, 65, 98, 5, 13].myFilter(item => item % 2) 
should equal [23, 65, 5, 13].
Passed:["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi") 
should return ["naomi"].
Passed:[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) 
should return [1, 2, 5].
*/


function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  return anim.slice(beginSlice, endSlice);

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

function nonMutatingSplice(cities) {
  //return cities.splice(3);
    return cities.slice(0,3);
  }
  nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]); 
  //should return ["Chicago", "Delhi", "Islamabad"].

  //console.log(parseInt(4.8));

  function nonMutatingConcat(original, attach) {
    // Only change code below this line
  
   return original.concat(attach);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);

  function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  //const first = [1, 2, 3];
  //const second = [4, 5];
  nonMutatingPush(first, second);

  
  //watchlist variable above
  function getRating(watchList) {
    // Only change code below this line
    let averageRating= watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
  
  
    // Only change code above this line
    return averageRating;
  }
  
  console.log(getRating(watchList));


  const squareList = arr => {
    // Only change code below this line
    return arr.filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  //squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
  //squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49]

  function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  ascendingOrder([1, 5, 2, 3, 4]);
  //This would return the value [1, 2, 3, 4, 5].

  function descendingOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a, b) {
      return b - a; // Sort in descending order
    });
    // Only change code above this line
  }
  // Example usage:
  const sortedArray = descendingOrder([5, 2, 8, 1, 4]);
  console.log(sortedArray); // Output: [8, 5, 4, 2, 1]

  function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
      // If a is equal to b, it returns 0.
      // If a is less than b, it returns -1.
      // If a is greater than b, it returns 1
    });
  }
  
  reverseAlpha(['l', 'h', 'z', 'b', 's']);
  //This would return the value ['z', 's', 'l', 'h', 'b'].

  function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a,b){
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


  const globalArray = [5, 6, 3, 2, 9];
  function nonMutatingSort(arr) {
    // Only change code below this line
  return [].concat(arr).sort(function(a, b) {
      return a - b;
  });
    // Only change code above this line
  }
  nonMutatingSort(globalArray);
  //nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9]
  //nonMutatingSort([1, 30, 4, 21, 100000]) should return [1, 4, 21, 30, 100000]
  //nonMutatingSort([140000, 104, 99]) should return [99, 104, 140000]


const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
//bySpace would have the value ["Hello", "World"] and 
//byDigits would have the value ["How", "are", "you", "today"]

function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}
splitify("Hello World,I-am code");
//should return ["Hello", "World", "I", "am", "code"].
splitify("Earth-is-our home") 
//should return ["Earth", "is", "our", "home"].
splitify("This.is.a-sentence") 
//should return ["This", "is", "a", "sentence"]


const arr = ["Hello", "World"];
const strr = arr.join(" ");
//strr would have a value of the string Hello World.

function sentensify(str) {
  // Only change code below this line

return strr.split(/\W/).join(" ");
//strr.replace(/\W/," ");
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
//should return the string May the force be with you.
sentensify("The.force.is.strong.with.this.one") 
//should return the string The force is strong with this one.
sentensify("There,has,been,an,awakening") 
//should return the string There has been an awakening


// Only change code below this line
function urlSlug(title) {

  return title.toLowerCase().trim().split(/\s+/).join("-");
  //title.toLowerCase().trim().replace(" ","-");
  }
  // Only change code above this line
  urlSlug(" Winter Is  Coming") //should return the string winter-is-coming.
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"); 
  //should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone


const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
//The every method would return false here.

function checkPositive(arr) {
  // Only change code below this line
return arr.every(function(currentValue){
  return currentValue >0;
});
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
checkPositive([1, 2, 3, -4, 5]) //should return false.
checkPositive([1, 2, 3, 4, 5]) //should return true


const numberss = [10, 50, 8, 220, 110, 11];

numberss.some(function(currentValue) {
  return currentValue < 10;
});
//The some method would return true

function checkPositive(arr) {
  // Only change code below this line
return arr.some(function(num){
  return num>0;
});
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
checkPositive([1, 2, 3, -4, 5]) //should return true.
checkPositive([1, 2, 3, 4, 5]) //should return true.
checkPositive([-1, -2, -3, -4, -5]) //should return false


function add(x) {
  // Only change code below this line
return function(y){
  return function(z){
    return x+y+z;
  }
}
  // Only change code above this line
}

add(10)(20)(30);