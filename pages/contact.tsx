import ContactForm from "../components/ContactForm/ContactForm"
import Layout from "../components/Layout/Layout"
import styles from '../styles/pages/Contact.module.scss'
const Contact : React.FC = () => {
    return (
        <Layout>
            <section className = {styles.contact}>
                <ContactForm />
            </section> 
        </Layout>
    )
}

export default Contact