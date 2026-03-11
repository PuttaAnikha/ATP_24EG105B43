/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
  //  1. filter() only "Sci-Fi" movies
  let select=movies.filter(movie=>movie.name="Sci-Fi")
  console.log(select)
    //2. map() to return:
      //      "Inception (8.8)"
      let s1=movies.map(movie=>movie.title +" " + movie.rating)
      console.log(s1)

    //3. reduce() to find average movie rating
    let sumRating=movies.reduce((acc,rating)=>acc+rating.rating,0)
    let averageRating=sumRating/movies.length
    console.log(averageRating)

 //   4. find() movie "Joker"
 let findMovie=movies.find(movie=>movie.title=="Joker")
 console.log(findMovie)
   // 5. findIndex() of "Avengers"
let movieIndex=movies.findIndex(movie=>movie.title==="Avengers")
console.log(movieIndex)