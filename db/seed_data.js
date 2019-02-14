use media;
db.dropDatabase();

db.movies.insertMany([
  {
    name: "Lego Batman",
    genre: "Animation",
    language: "English",
    image: "https://upload.wikimedia.org/wikipedia/en/6/61/The_Lego_Batman_Movie_PromotionalPoster.jpg",
    like: true
  },
  {
    name: "You've Got Mail",
    genre: "Romance",
    language: "English",
    image: "https://images-na.ssl-images-amazon.com/images/I/513FXJJZ5ZL.jpg",
    like: false
  },
  {
    name: "Oldboy",
    genre: "Action",
    language: "Korean",
    image: "https://nofilmschool.com/sites/default/files/styles/article_wide/public/oldboytragedy2.jpg?itok=jx7Ruvo5",
    like: true
  },
  {
    name: "Black Panther",
    genre: "Superhero",
    language: "English",
    image: "https://i.annihil.us/u/prod/marvel/movies/blackpanther/social/assets/global_share_1200x630.jpg",
    like: true
  },
  {
    name: "Pulp Fiction",
    genre: "Crime",
    language: "English",
    image: "https://images-na.ssl-images-amazon.com/images/I/81UTs3sC5hL._SL1500_.jpg",
    like: true
  },
  {
    name: "Reservoir Dogs",
    genre: "Crime",
    language: "English",
    image: "https://sabotagetimes.com/.image/t_share/MTI5NDg0MzQzMDU4OTUyMTYy/ost_-_reservoir_dogs.jpg",
    like: true
  }
])
