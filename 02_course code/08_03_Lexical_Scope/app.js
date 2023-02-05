function outer() {
    let movie = 'Amadeus';

    function inner() {
        //let movie = "The Shining";

        function extraInner() {
            //movie is not defined in this function
            //but it has access to parent function's variables
            console.log(movie.toUpperCase())
        }
        console.log(`in extraInner f: ${movie}`);
        extraInner();
    }
    inner();
    console.log(`in outer f: ${movie}`);
}

outer(); //'AMADEUS'