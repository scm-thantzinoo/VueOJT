import Movie from '@/components/Movie.vue'

export default {
    components: {
        Movie
    },
    setup(){
        const movieTitle = "Welcome from Movies List..."
        const moviesList = [
            {
                title: "Avengers: Endgame (2019)"
            },
            {
                title: "Spider-Man: No Way Home (2021)"
            },
            {
                title: "The Lion King (2019)"
            },
            {
                title: "Titanic (1997)"
            },
            {
                title: "Black Panther (2018)"
            }
        ]
        return { movieTitle, moviesList }
    }
}