import Button from "./Button"


interface CardProps {
    title : string
    description : string
    price : number
}
const Card : React.FC<CardProps> = ({}) => {
    return (
        <div>
            <h3></h3>
            <div>

            </div>
            <h4></h4>
            <Button>Buy</Button>
        </div>
    )
}

export default Card