import Layout from "../components/Layout/Layout"
import styles from '../styles/pages/About.module.scss'

const AboutUs : React.FC = () => {
    return (
        <Layout>
            <section className = {styles.about}>
                <h2>About us</h2>
                <p>  Movie Page serves members in many countries. The Movie Page entity that provides you access to the Movie Page service and qualifies as your data controller depending on the country of membership, and you will find more information in your membership or payment confirmation email.</p>
             
            
                <p>
                Movie Page, Inc.
                100 Winchester Circle
                Los Gatos, CA 95032, United States
                
                </p>

                <p>  
                Movie Page International B.V.
                Karperstraat 8-10
                1075 KZ Amsterdam, The Netherlands
                KvK: 62266519
                VAT: NL853746333B01
                Share capital: 12,500 euros</p>
              
                <p>
                Movie Page Entretenimento Brasil, Ltda.
                Alameda Xingu, 350 - 14º walk - Alphaville Industrial
                Barueri, CEP 06455-911 - SP - Brazil
                CNPJ: 13.590.585 / 0002-70
                </p>
              
                <p>
                Movie Page Entertainment Services India LLP
                Level 7, 4th North Avenue, Maker Maxity
                Bandra Kurla Complex, Bandra (East)
                Bombay - 400051
                Maharashtra, india
                </p>
             
                <p>
                Movie Page K.K.
                Shin-Aoyama Tokyu Building 10F
                March 11, 2013 Minami-Aoyama
                Minato-ku
                Tokyo 107-0062 Japan
                </p>
                


                
            </section>
        </Layout>
    )
}

export default AboutUs