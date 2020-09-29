import Button from "./Button"
import styles from '../styles/components/ContactForm.module.scss'

const ContactForm : React.FC = () => {

    return <div className = {styles.form}>
        <h4 className = {styles.title}>Contact form</h4>
        <form>
           
            <div>
                <label  >Name</label>   
                <input />
            </div>
            <div>
                <label >Email</label>   
                <input type = 'email'/>
            </div>
            <div>
                <label >Message</label>   
                <input />
            </div>

            <Button>Send Email</Button>
        </form>
    </div>
}

export default ContactForm