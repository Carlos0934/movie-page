import Button from "./Button"
import styles from '../styles/components/Card.module.scss'
import { useDateFormat } from "../src/hooks/useDateFormat"

interface CardProps {
    title : string
    description : string
    price : number
    date : Date
    image : string
}
const Card : React.FC<CardProps> = ({title , description , price , image , date}) => {
    const formatDate = useDateFormat(date)
    return (
        <div className = {styles.card}>
            <div className = {styles['card-content']}>
               
                <h3 className = {styles.title}>{title}</h3>
                <img src = {image} />
            
                <p className = {styles.description}>{description}</p>
                <time className = {styles.description}>{formatDate}</time>
                <Button>Buy ${price}</Button>
            </div>
        </div>
    )
}

export default Card