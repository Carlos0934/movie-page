
import Link from 'next/link'
import Button from '../components/Button/Button'
import Layout from '../components/Layout/Layout'
import Movies from '../components/Movies/Movies'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
    return (
        <Layout>
          <section className = {styles.presentation}>
            <h1>Better movies in your neighborhood than other options</h1>
            <p>
                The best movies are here. The website will show you the movies that are shown in the nearby theater.
                in the easiest and cheapest way possible. totally legal.
            </p>
            <div>
                <Button><Link href = '' >View movies</Link></Button>
                <Button variant = 'secondary' ><Link href = ''>Learn about us</Link></Button>
            </div>
           
          </section>
          <section className = {styles.movies}>
            <h3>Movies</h3>
          
            <Movies/> 
          </section>
        </Layout>  
    )
}