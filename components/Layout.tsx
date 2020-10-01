
import styles from '../styles/components/Layout.module.scss'
import NavBar, { Route } from './Nav'
const routes : Route[] = [
    {
        path : '/',
        label : 'Movie Page',
    },
    {
        path : '/',
        label : 'Home'
    },
    {
        path : '/contact',
        label : 'Contact',
    },
    {
        path : '/about',
        label : 'About Us',
    }
]
const Layout : React.FC = ({children}) => {
    return (
        <>
            <NavBar routes = {routes} />
            <main className = {styles.layout}>
    {children}
    </main>
        </>
    )
}

export default Layout