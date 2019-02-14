use media;
db.dropDatabase();

db.movies.insertMany([
  {
    name: "Lego Batman",
    genre: "Animation",
    language: "English",
    image: "https://upload.wikimedia.org/wikipedia/en/6/61/The_Lego_Batman_Movie_PromotionalPoster.jpg"
  },
  {
    name: "You've got mail",
    genre: "Romance",
    language: "English",
    image: "https://images-na.ssl-images-amazon.com/images/I/513FXJJZ5ZL.jpg"
  },
  {
    name: "Oldboy",
    genre: "Action",
    language: "Korean",
    image: "https://nofilmschool.com/sites/default/files/styles/article_wide/public/oldboytragedy2.jpg?itok=jx7Ruvo5"
  }
])
