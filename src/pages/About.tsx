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
            Simulação de uma plataforma de ensino de japonês para falantes de português do Brasil,
            organizada a partir dos materiais oficiais de exemplo do exame <strong>JLPT</strong>
            (níveis N5 e N4). O conteúdo é dividido por área — vocabulário, gramática, leitura e
            audição — seguindo a estrutura de cada parte do exame.
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
            Os áudios da seção de audição vêm com um player próprio (velocidade, avançar/voltar e
            repetição de trecho A–B). A transcrição usada é o <strong>roteiro oficial</strong> de
            cada áudio, exibido com furigana (leitura dos kanji) e tradução em português — gratuito,
            exato e funcionando offline.
          </p>
        </div>
        <div className="note">
          <h3>Aviso</h3>
          <p>
            Os textos, questões e áudios são dos materiais de exemplo publicados pela Japan
            Foundation / JEES para fins de divulgação do JLPT, usados aqui em contexto de estudo. As
            explicações em português são autorais desta plataforma.
          </p>
        </div>
      </div>
    </div>
  )
}
