import Button from "./Button"
import styles from '../styles/components/ContactForm.module.scss'
import { useForm } from "react-hook-form"
import { useState } from "react"

export interface ContactFormData {
    name : string
    email : string
    message : string
}
export interface FormMessage {
    error : boolean
    message : string
}
const ContactForm : React.FC = () => {
    const {register ,handleSubmit , errors} = useForm<ContactFormData>()
    const [formMessage , setFormMessage] = useState<FormMessage>()

    const onSubmit = (data : ContactFormData) => {
        fetch('/api/contact' , {
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
                'Content-Type': 'application/json'
            }
        })
        .then(result => result.json())
        .then(data => setFormMessage(data)) 
       
    }
    return <div className = {styles.form}>
        <h4 className = {styles.title}>Contact Us</h4>
        <form onSubmit = {handleSubmit(onSubmit)}>
           
            <div>
                <input className = {errors.name && styles.input__error} type = 'text' name = 'name' ref = {register({required : true})}  />
                <label>Name</label>
                <p>{errors.name && 'Name is required'}</p>   
            </div>
            <div>
                <input className = {errors.email && styles.input__error}  name = 'email' ref = {register({required : true })}   type = 'email'/>
                <label >Email</label>   
                <p>{errors.email && 'Email is required'}</p>   
            </div>
            <div>
                <textarea className = {errors.message && styles.input__error} name = 'message' ref = {register({required : true})}   ></textarea>
                <p>{errors.message && 'Message required'}</p>   
            </div>
           
            <Button type = 'submit' variant  = 'secondary'>Send Email</Button>
        </form>
        {
            formMessage && <h3 className = {styles.message} data-error = {formMessage.error}>{formMessage.message}</h3>
            
        }
    </div>
}

export default ContactForm