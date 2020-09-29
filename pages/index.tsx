
import Button from '../components/Button'
import Card from '../components/Card'
import NavBar from '../components/Nav'
import {Route} from '../components/Nav'
import styles from '../styles/Home.module.scss'

const routes : Route[] = [
    {
        path : '/',
        label : 'Movie Page',
    },
    {
        path : '/movies',
        label : 'Movies',
    },
    {
        path : '/contact',
        label : 'Contact',
    },
    {
        path : '/about',
        label : 'About',
    }
]
export default function Home() {
    return (
        <>
        <NavBar title = 'Movie Page' routes = {routes} />
        <main>
             < p  > hello </p>
             <Button variant = 'container'>hola</Button>
            <Card  date = {new Date()}title = 'Title' description = 'description' price = {20} image = '/avengers.jpeg'/>
        </main>  
        </>      
    )
}