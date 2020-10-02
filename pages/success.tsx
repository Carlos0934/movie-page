import Link from 'next/link'
import styles from '../styles/pages/Success.module.scss'
const Success : React.FC = () => {
    return (
        <section className = {styles.section}>
            <h1>Thanks for your purchase! 😃</h1>
            <span className="material-icons">
            check_circle
            </span>
            <h2><Link href = '/'>Back to home</Link></h2>
        </section>
    )
} 

export default Success