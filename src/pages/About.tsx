import { Link } from 'react-router-dom'

export function About() {
  return (
    <div>
      <div className="crumbs">
        <Link to="/">Início</Link> / <span>Sobre</span>
      </div>
      <div className="card study">
        <h2>Sobre a plataforma</h2>
        <div className="note">
          <h3>O que é</h3>
          <p>
            Plataforma pessoal de estudo de japonês para falantes de português do Brasil. Ela reúne
            JLPT, Irodori e Genki em explicações, exercícios, leitura, áudio e revisão espaçada. Cada
            curso preserva a organização do respectivo material-fonte e acrescenta apoio prático em
            português para transformar conteúdo passivo em estudo revisável.
          </p>
        </div>
        <div className="note">
          <h3>Como o progresso é salvo</h3>
          <p>
            Não há login. Tudo o que você responde (alternativa marcada e suas anotações) é salvo
            automaticamente no <strong>armazenamento local do navegador</strong>. Para não perder
            nada ao trocar de computador ou limpar o navegador, use o botão <strong>Baixar
            backup</strong>: ele gera um arquivo <code className="inline-code">.json</code> com as
            respostas já preenchidas, que pode ser recarregado depois em <strong>Carregar
            backup</strong>.
          </p>
        </div>
        <div className="note">
          <h3>Áudios e transcrição</h3>
          <p>
            Cada faixa informa o objetivo, uma sequência de estudo e os exercícios relacionados. O
            player oferece velocidade, avanço/retrocesso e repetição A–B. Quando existe texto de
            apoio, ele é identificado como transcrição completa, trecho ou resumo; furigana,
            tradução e gabarito só aparecem quando há conteúdo real para esses controles. As
            transcrições automáticas são marcadas como apoio não revisado e devem ser confirmadas
            pelo áudio e pela atividade-fonte. As questões ligadas ao áudio entram na mesma revisão
            FSRS dos demais exercícios.
          </p>
        </div>
        <div className="note">
          <h3>Aviso</h3>
          <p>
            Os direitos dos textos e áudios de cada material pertencem aos respectivos autores e
            editores. Eles são usados nesta ferramenta pessoal e não comercial de estudo. As
            explicações e ajudas complementares em português são produzidas para esta plataforma.
          </p>
        </div>
      </div>
    </div>
  )
}
