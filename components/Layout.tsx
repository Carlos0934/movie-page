
import styles from '../styles/components/Layout.module.scss'
import NavBar, { Route } from './Nav'
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
const Layout : React.FC = ({children}) => {
    return (
        <>
            <NavBar title = 'Movie Page' routes = {routes} />
            <main className = {styles.layout}>
    {children}
    </main>
        </>
    )
}

export default Layout