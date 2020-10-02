import Card, { Movie } from "./Card"
import styles from '../styles/components/Movies.module.scss'



const movies : Movie[] = [
    {
        title : 'End game',
        date : new Date(),
        description : 'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.',
        price : 15,
        image : '/avengers.jpeg'
    },
    {
        title : 'Sao alicization',
        date : new Date(),
        description : `The third season of Sword Art Online, titled Sword Art Online: Alicization, is an anime series adapted from the light novel series of the same title written by Reki Kawahara and illustrated by abec.`,
        price : 7,
        image : '/sao.jpg'
    },
    {
        title : 'Battle of gods',
        date : new Date(),
        description : 'Dragon Ball Z: Battle of Gods is a 2013 Japanese animated science fantasy martial arts film, the eighteenth feature film based on the Dragon Ball series.',
        price : 5,
        image : '/battleofgods.jpg'
    },
    {
        title : 'Infinity war',
        date : new Date(),
        description : 'Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.',
        price : 10,
        image : '/infinitywar.jpg'
    }
]
const Movies : React.FC = () => {

    return (
        <div  className = {styles.movies}>
            {
                movies.map((movie , key) => <Card key = {key} movie = {movie}/>)
            }
        </div>
    )
}

export default Movies