import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import styles from '../styles/components/Contact.module.scss'
const Contact : React.FC = () => {
    return (
        <Layout>
            <section>
                <h3></h3>
                <ContactForm />
            </section> 
        </Layout>
    )
}

export default Contact