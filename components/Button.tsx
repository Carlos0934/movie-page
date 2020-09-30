import styles from '../styles/components/Button.module.scss'

export type ButtonVariants = 'primary' | 'secondary'  
interface ButtonProps {
    variant? : ButtonVariants 
}
const Button : React.FC<ButtonProps> = ({children , variant = 'primary'}) =>  
    <button data-variant = {variant} className = {styles.button}>{children}</button>

export default Button