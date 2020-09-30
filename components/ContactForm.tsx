import Button from "./Button"
import styles from '../styles/components/ContactForm.module.scss'

const ContactForm : React.FC = () => {

    return <div className = {styles.form}>
        <h4 className = {styles.title}>Contact form</h4>
        <form>
           
            <div>
                <input placeholder = '' />
                <label>Name</label>   
            </div>
            <div>
                <input placeholder = ''  type = 'email'/>
                <label >Email</label>   
            </div>
            <div>
                <textarea placeholder = ''    ></textarea>
              
            </div>

            <Button variant  = 'secondary'>Send Email</Button>
        </form>
    </div>
}

export default ContactForm