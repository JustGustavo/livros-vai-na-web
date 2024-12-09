import './doadosStyle.scss'
import livro from '../../assets/livro.png'


export default function Doados(){
    return(
        <section id="boxDoados">
            <h2>Livros Doados</h2>
            <section id="boxcard">
                <article>
                    <img src={livro} alt="imagem de um livro que se chama o protagonista" />
                    
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                    
                </article>
            </section>
        </section>
    )
}