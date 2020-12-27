# ImdbScrapper

imdb_chart_fetcher is a node.js command line application that helps you fetch details of top movies (by rating) from imdb.
  
    usage:
      ./imdb_chart_fetcher <url> <num>
  
      arguments are:
  
      url:      the url of imdbsite from where to fetch top movies
      num:      num of movie details to be fetched
    `
Example - ./imdb_chart_fetcher https://www.imdb.com/india/top-rated-indian-movies/  10

So top 10 indian movies will be fetched in a JSON format with these details - 
<br/>
● title <br/>

● movie_release_year <br/>

● imdb_rating <br/>

● summary <br/>

● duration <br/>

● genre <br/>

