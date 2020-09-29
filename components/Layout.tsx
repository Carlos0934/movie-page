import styles from '../styles/components/Layout.module.scss'
const Layout : React.FC = ({children}) => {
    return <main className = {styles.layout}>
    {children}
    </main>
}

export default Layout