import Card, { Movie } from "./Card"
import styles from '../styles/components/Movies.module.scss'



const movies : Movie[] = [

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