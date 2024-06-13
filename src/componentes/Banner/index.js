import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha-foto.jpg';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Jacson Polonha desenvolvedor web. Aqui compartilho várias coisas sobre tecnologia.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de jacson Polonha"
                />
            </div>
        </div>
    )
}