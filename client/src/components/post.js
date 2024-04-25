import "../App.css";
import { Link } from "react-router-dom";


export default function Post(){
    return (
      <main>
        <div className="post">
          <div className="image">
            <img
              src="https://conteudo.imguol.com.br/c/entretenimento/92/2019/07/09/homem-cansado-sentado-na-cama-1562682676080_v2_900x506.jpg.webp"
              alt="imagem capa"
            />
          </div>
          <div className="texts">
            <h2>Mental Exhaustion: Know the signs and what to do to improve</h2>
            <p className="info">
              <Link className="author">Luciana Borges</Link> 
              <time>2022-06-01 16:45</time>
            </p>
            <p className="summary">
              Dizer que se está mentalmente exausto virou quase lugar-comum nas
              conversas entre familiares e amigos nos últimos meses. Porém, há
              de se observar a linha tênue que separa um cansaço que pode ser
              passageiro de uma enfermidade mais profunda, capaz de se
              transformar em uma síndrome de burnout.
            </p>
          </div>
        </div>
        </main>
    );
}