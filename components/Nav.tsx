import styles from '../styles/components/Navbar.module.scss'
import Link from 'next/link'
export interface Route {
    path : string
    label : string
    
}
interface NavBarProps {
    routes : Route[]
    title : string
}
const NavBar : React.FC<NavBarProps> = ({routes , title}) => {

    return (
        <header className = {styles.header}>
            <div className = {styles.menu}>
                <input type = 'checkbox' id = 'menu' />
                <label htmlFor = 'menu'><span className="material-icons">menu</span> </label>
            </div>
            <h2 className = {styles.title}> <Link href = {routes[0].path}>{routes[0].label}</Link></h2>
            <nav className = {styles.navbar}>
            
                <ul>
                    {
                        routes.slice(1).map((route , key) => <li key = {key}>
                           <Link  href = {route.path}>{route.label}</Link>
                        </li>)
                    }
                </ul>
            </nav>
        </header>
    )
} 


export default NavBar