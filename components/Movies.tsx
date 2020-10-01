import Card, { Movie } from "./Card"
import styles from '../styles/components/Movies.module.scss'



const movies : Movie[] = [
    {
        title : 'End game',
        date : new Date(),
        description : '',
        price : 20,
        image : '/avengers.jpeg'
    },
    {
        title : 'Sao alicization',
        date : new Date(),
        description : '',
        price : 20,
        image : '/sao.jpg'
    },
    {
        title : 'Battle of gods',
        date : new Date(),
        description : '',
        price : 20,
        image : '/battleofgods.jpg'
    },
    {
        title : 'Dragon ball',
        date : new Date(),
        description : '',
        price : 20,
        image : '/battleofgods.jpg'
    }
]
const Movies : React.FC = () => {

    return (
        <div  className = {styles.movies}>
            {
                movies.map(movie => <Card movie = {movie}/>)
            }
        </div>
    )
}

export default Movies