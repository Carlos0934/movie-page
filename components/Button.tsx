import styles from '../styles/components/Button.module.scss'

export type ButtonVariants = 'primary' | 'secondary'  
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant? : ButtonVariants 
}
const Button : React.FC<ButtonProps> = (props) => {
   
    const {children , variant = 'primary'} = props
    
    return <button  {...props} data-variant = {variant} className = {styles.button}>{children}</button> 
}
    
   

export default Button