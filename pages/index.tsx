
import Button from '../components/Button'
import Card from '../components/Card'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'


export default function Home() {
    return (
        <Layout>
            <ContactForm/>
             < p  > hello </p>
             <Button variant = 'container'>hola</Button>
            <Card  date = {new Date()}title = 'Title' description = 'description' price = {20} image = '/avengers.jpeg'/>
        </Layout>  
    )
}