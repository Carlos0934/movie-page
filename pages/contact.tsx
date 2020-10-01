import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import styles from '../styles/components/Contact.module.scss'
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