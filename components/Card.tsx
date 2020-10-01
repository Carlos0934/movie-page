import Button from "./Button"
import styles from '../styles/components/Card.module.scss'
import { useDateFormat } from "../src/hooks/useDateFormat"

export interface Movie {
    title : string
    description : string
    price : number
    date : Date
    image : string
}
interface CardProps {
    movie : Movie
}
const Card : React.FC<CardProps> = ({movie}) => {
    const {title , description , price , image , date} = movie
    const formatDate = useDateFormat(date)
    return (
        <div className = {styles.card}>
            <div className = {styles['card-content']}>
                
                <h3 className = {styles.title}>{title}</h3>
                <div>
                    <img src = {image} />
                </div>
            
            
                <p className = {styles.description}>{description}</p>
                <time className = {styles.description}>{formatDate}</time>
                <Button>Buy ${price}</Button>
            </div>
        </div>
    )
}

export default Card