import styles from '../styles/components/Navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
export interface Route {
    path : string
    label : string
    
}
interface NavBarProps {
    routes : Route[]
    title : string
}
const NavBar : React.FC<NavBarProps> = ({routes , title}) => {
    const router = useRouter()
    
    return (
        <header className = {styles.header}>
            <input type = 'checkbox' id = 'menu' />
            <label className = {styles.menu} htmlFor = 'menu'><span className="material-icons">menu</span> </label>
            <h2 className = {styles.title}> <Link href = {routes[0].path}>{routes[0].label}</Link></h2>
            <nav className = {styles.navbar}>
            
                <ul>
                    {
                        routes.slice(1).map((route , key) => <li onClick = {() => router.push(route.path)} key = {key}>
                           <Link  href = {route.path}>{route.label}</Link>
                        </li>)
                    }
                </ul>
            </nav>
           
        </header>
    )
} 


export default NavBar