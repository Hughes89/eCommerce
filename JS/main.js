$( document ).ready(function(){


  var products = [
  {
    id: 'book1',
    name: "The Great Gatsby",
    category: "books",
    selling_points: ["Classic American Literature"],
    price: 15.99,
    picture_url: "./images/Fitzgerald-Great-Gatsby.jpg",
    description: "An American Classic detailing one man's quest for success and admiration. Fitzgerald's 'The Great Gatsby' is a tale of fortune and what toil The American Dream can bring when sought after."
  },
  {
    id: 'book2',
    name: "For Whom the Bell Tolls",
    category: "books",
    selling_points: ["Classic American Literature"],
    price: 18.99,
    picture_url: "./images/Hemingway-For-Whom-Bell.jpg",
    description: "Hemingway tells about life for an infantryman in World War I. Considered one of his best works, 'For Whom the Bell Tolls' is Hemingway at the peak of his writing powers."
  },
  {
    id: 'book3',
    name: "The Sound and The Fury, William Faulkner",
    category: "books",
    selling_points: ["Classic American Literature", "Southern Gothic"],
    price: 18.99,
    picture_url: "./images/William-Faulkner-Sound-Fury.jpg",
    description: "One family and their struggle to deal with life in the South after the Civil War."
  },
  {
    id: 'book4',
      name: "1984, George Orwell",
      category: "books",
      selling_points: ["World Literature", "English Classic"],
      price: 18.99,
      picture_url: "./images/1984-George-Orwell.jpeg",
      description: "Orwell's classic about society gone awry. Big Brother is watching (and we might be, too)!"
  },
  {
    id: 'book5',
    name: "One Hundred Years of Solitude, Gabrial Garcia Marquez",
    category: "books",
    selling_points: ["South American Classic", "World Literature Classic"],
    price: 18.99,
    picture_url: "./images/Marquez-100-Years-Solitude.jpg",
    description: "Marquez's classic statement on life in South America. Loved the world over, 'One Hundred Years of Solitude' is a must-read."
  },
  {
    id: 'music1',
    name: "Backstreet Boys",
    category: "music",
    selling_points: ["Collector's Edition", "90's Pop"],
    price: 20.99,
    picture_url: "./images/backstreet-boys.jpg",
    description: "'Backstreet's back, alright!'"
  },
  {
    id: 'music2',
    name: "Fireworks, Katy Perry",
    category: "music",
    selling_points: ["Modern Pop", "Jim Jong Un"],
    price: 2.99,
    picture_url: "./images/Katy-Perry-Firework.jpg",
    description: "Katy Perry's back with this celebratory single about individuality and being yourself!"
  },
  {
    id: 'music3',
    name: "Come Fly w/ Me, Frank Sinatra",
    category: "music",
    selling_points: ["Classic", "Big Band"],
    price: 19.99,
    picture_url: "./images/Frank-Sinatra-Come-Fly-with-Me.jpg",
    description: "Sinatra at the height of his Big Band powers. 'Let's fly!'"
  },
  {
    id: 'music4',
    name: "Sgt. Pepper's Lonely Hearts Club Band, The Beatles",
    category: "music",
    selling_points: ["Classic", "Rock"],
    price: 21.99,
    picture_url: "./images/Beatles-Sgt-Pepper.jpg",
    description: "The Beatles era-defining album. No longer touring, The Beatles brought the show to everyone with a record-player with 'Sgt. Peppers.'"
  },
  {
    id: 'music5',
    name: "Bad, Michael Jackson",
    category: "music",
    selling_points: ["Collector's Edition", "80's Pop"],
    price: 17.99,
    picture_url: "./images/Michael-Jackson-Bad.jpg",
    description: "Michael Jackson returns with even more success on this follow-up to 'Thriller,' the groundbreaking, multi-platinum selling album. Get yours today!"
  },
  {
    id: 'electronics1',
    name: "Motorola Bag Phone",
    category: "electronics",
    selling_points: ["Portable Phone", "Motorola"],
    price: 17.99,
    picture_url: "./images/Motorola-Bag-Phone.jpg",
    description: "Communicate with anyone wherever you may be with Motorola's revolutionary Bag Phone. Need to make a call? No longer look for the nearest phone-booth: The Bag Phone is right there when you need it."
  },
  {
    id: 'electronics2',
    name: "Microsoft Zune",
    category: "electronics",
    selling_points: ["Portable Music Player", "Microsoft"],
    price: 17.99,
    picture_url: "./images/microsoft-zune.jpg",
    description: "Zune is the future of music. Whether on a run, headed to work or going up the slopes of Mt. Rainier, Zune brings all of your favorite music with you."
  },
  {
    id: 'electronics3',
    name: "Apple Newton",
    category: "electronics",
    selling_points: ["Palm Computer", "Personal Assistant", "Apple"],
    price: 500.99,
    picture_url: "./images/apple-newton.jpg",
    description: "Apple's next-step in portable-computing, the Newton is your personal assitant and home-computer in your hands as you travel the world for business or pleasure."
  },
  {
    id: 'electronics4',
    name: "Nintendo Virtual Boy",
    category: "electronics",
    selling_points: ["Virtual Reality", "Nintendo"],
    price: 350.99,
    picture_url: "./images/Nintendo-Virtual-Boy.jpg",
    description: "Nintendo presents Virtual Boy: The largest advancement in video games to date. Had you ever wanted to be in a game? The Virtual Boy will jack gamers straight into their favorite games. The future is today..."
  },
  {
    id: 'electronics5',
    name: "Nintendo Power Glove",
    category: "electronics",
    selling_points: ["Everything Else is Child's Play (You know, like the movie...)", "Nintendo"],
    price: 200.99,
    picture_url: "./images/Nintendo-Power-Glove.jpg",
    description: "Nintendo's continuous moves into virtual-reality continue foward w/ this product that gives gamers, in the truest sense, full control of their adventures."
  },
]

function index(){
  $('#container').html('');
    for(var x in products){
      addToPage(products[x], "container")
    };
  };


function navBarCategories(){
  var uniqCategory = []
  for(var x in products){
    uniqCategory.push(products[x].category)
  }
  uniqCategory = _.uniq(uniqCategory)
  for(var i in uniqCategory){
    $('ul.dropCategories').append("<li class='drop'><a href='#'>" + uniqCategory[i] + "</a></li>")
  }
}

navBarCategories()



//Puts the object into the container div.
function addToPage (obj, destination) {
  $('#' + destination).append($('<div id="'+obj.id+'" class="index">').append($('<div class="name">').append(obj.name)))
  $('#'+obj.id).append($('<div class="category">').append('Category: ' + obj.category));
  $('#'+obj.id).append("<div><ul class='ulSellingPoints li" + obj.id + "'>")
  for(var i in obj.selling_points){
    $('.li'+obj.id).append($('<li class="sellingPoints">'+ obj.selling_points[i]+'</li>'));
  }
  $('.li'+obj.id).append($('<li id="' + obj.id + '"class="sellingPoints more"><a href="" return="fail">Read More</a></li>'))
  $('#'+obj.id).append("</ul></div>")
  $('#'+obj.id).append($('<div class="picture_url"">').append('<img src="' + obj.picture_url + '" class="picture">'));
  $('#'+obj.id).append($('<div class="price">').append(obj.price + '<br>'));
  $('#'+obj.id).append($('<div class="button"><button id="' + obj.id + '" class="addToCart btn btn-warning" >Add to Cart </button></div>'))
  $('#' + destination).append('<br>')

  }
  //Will put everything on the page that matches the category as a string.
function filter (array, category) {
  array.forEach(function (ele) {
    if (ele.category === category) {
      addToPage(ele, "container");
    }
  })
}


function selcted(){
  var x = this.innerHTML
  $('#container').empty();
  filter(products, x);
}


//SEARCH SCRIPT
function searchExecute(){
  console.log(document.getElementById('search').value);
  var searchResult = document.getElementById('search').value.toLowerCase();
  var nameSearch = products.filter(function(i){
    var nameSearchVariable = i.name.toLowerCase();
    if(nameSearchVariable.includes(searchResult)){
      return i
    }
  });
/*  var sellingPointsSearch = products.filter(function(i){
    var sellingPointsSearchVariable = i.name.toLowerCase();
    if(sellingPointsSearchVariable.includes(searchResult)){
      return i
    }
  });*/
  showSearchResults();
  function showSearchResults(){
    if(nameSearch.length === 0){
      $('#container').html("<p>Hey, there's no results! Sorry.</p>");
    } else {
      nameSearch.forEach(function(ele, index){
        addToPage(nameSearch[index], "container");
      });
      /*sellingPointsSearch.forEach(function(ele, index){
        addToPage(sellingPointsSearch[index], "container");
      });*/
    }
  }
};



$('li.drop').on('click', 'a', selcted);
$('.all').on('click', index)
$('#container').on('click', 'li.more', show)
$('.search').on('click', function () {
$('#container').html('')
searchExecute() })



function show(){
    for(var x in products){
    if(this.id === products[x].id){
      printShow(products[x])
      return false
    }
  };
}

function printShow(obj){
  $("#overlay").show();
  $('#show').show();
  $('#show').append("<div id='closeShow'>X</div>");
  $('#show').append("<div id='showName'>" + obj.name + "</div>");
  $('#show').append("<div>" + "<img id='showImg' src='" + obj.picture_url + "'>" + "</div>");
  $('#show').append("<div id='showPrice'>$" + obj.price + "</div>");
  $('#show').append("<div>Category: " + obj.category + "</div>");
  $('#show').append("<div id='showDescription'>" + obj.description + "</div>");
  $('div#closeShow').on('click', function(){
    $('#show').empty().hide();
    $('#overlay').hide();
  });
}


//Enter on the submit puts it through the search function
$('#search').keydown(function (e) {
  if (e.keyCode == 13) {
    $('#container').html('')
    searchExecute()
    return false;
  }
})

//Featured Product Function
featured()
  function featured(){
    var x = Math.floor(Math.random() * products.length)
    addToPage(products[x], "container");

  }


//Shopping Cart Counter
  var total = 0;
$('.totalCart').append(total)


//Button click to add to cart
var cart = [];
$('#container').on('click', ".addToCart", function () {
  $('.totalCart').html(total+= 1)
  getName(this.id)
  shoppingList();
   })

//Checks the id added to the cart then puts the name into the cart array
function getName (id) {
  products.forEach(function (ele) {
    if (id === ele.id) {
      return cart.push(ele.name);
    }
})}

//Adds items to the shopping cart Dropdown, as well as the clear function to empty the shopping cart
function shoppingList () {
  $('ul.dropShop').empty();
  $('ul.dropShop').append('<li><p> Items in your cart: </p></li>');
  $('ul.dropShop').append('<li class="divider"></li>');
  for (var i = 0; i < cart.length; i++) {
     $('ul.dropShop').append("<li class='drop'>" + shortenItem(cart[i]) + "</a></li>");
    }
  $('ul.dropShop').append('<li class="divider"></li>');
  $('ul.dropShop').append('<li class="clear"><p> <a href="#" class="removeCart">Clear</a> </p></li>');
  //function to clear the cart and restart the total to 0
  $('.removeCart').on('click', function () {
    cart = [];
    total = 0;
    $('.totalCart').html(total)
    shoppingList();
})}

//Shortens the shopping cart item to 18 characters
function shortenItem (str) {
  if (str.length > 18) {
    var shortString = str.substr(0,18) + '...';
    return shortString;
  }
  else { return str }
}



})
