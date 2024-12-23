const express = require("express");

const app = express();
const port = 3000;

//prase json using express
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let movies = [
  {
    id: "1",
    title: "Inception",
    director: "christopher Nolan",
    release_date: "2024-12-01",
  },
  {
    id: "2",
    title: "Inception2",
    director: "christopher Nolan2",
    release_date: "2024-12-11",
  },
];

//get the movie list in the form of json
app.get("/movie", (req, res) => {
  res.json(movies);
});

//add movie to yhe list
app.post("/movie", (req, res) => {
  const movie = req.body;

  console.log(movie);
  movies.push(movie);
  res.send("Movie is added to the list");
});

///search for a movie in the list
app.get('/movie/:id', (req, res) => {
    const id = req.params.id
    for(let movie of movies) {
        if(movie.id === id) {
            res.json(movie)
            return
        }
    }
    res.status(400).send('movie not found')
})

//remove movie from the list
app.delete('/movie/:id', (req, res) => {
    const id = req.params.id

    movies = movies.filter(movie => {
        if(movie.id !== id){
            return true
        }
        return false
    })
    res.send('movie is deleted from list')
})
// set the server to listen at port
app.listen(port, () => console.log(`server listening at port ${port}`));
