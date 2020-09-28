import styles from '../styles/components/Button.module.scss'

export type ButtonVariants = 'container' | 'outline'  
interface ButtonProps {
    variant? : ButtonVariants 
}
const Button : React.FC<ButtonProps> = ({children , variant = 'container'}) =>  
    <button data-variant = {variant} className = {styles.button}>{children}</button>

export default Button