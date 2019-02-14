use media;
db.dropDatabase();

db.movies.insertMany([
  {
    name: "Lego Batman",
    genre: "Animation",
    language: "English"
  },
  {
    name: "You've got mail",
    genre: "Romance",
    language: "English"
  },
  {
    name: "Oldboy",
    genre: "Action",
    language: "Korean"
  }
])
