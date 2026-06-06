import type { ExerciseGroup, Level, ScriptItem, Section } from './types'
import { PRE_INTERMEDIATE_AUDIO } from './irodori-pre-intermediate-audio'

// =====================================================================
//  Irodori - いろどり: Japanese for Life in Japan (Japan Foundation)
//  Parte "Pre-Intermediate" (初中級 / A2-B1).
//  Conteúdo implementado fielmente a partir de docs/Irodori/Pre-Intermediate.
//  Explicações e traduções em pt-BR são autorais; japonês oficial preservado.
// =====================================================================

// Liga transcrições (script) a faixas específicas de uma lição, pelo código (ex.: '01-06').
function attachScripts(n: number, scripts: Record<string, ScriptItem[]>): typeof PRE_INTERMEDIATE_AUDIO[number] {
  return (PRE_INTERMEDIATE_AUDIO[n] ?? []).map((t) => {
    const code = t.id.replace('iro-pi-', '')
    return scripts[code] ? { ...t, script: scripts[code] } : t
  })
}

const IMG = '/images/irodori/pre-intermediate'

// ---- Lição 1: フットサルって、何でしたっけ？ (tópico 好きなもの好きなこと) ----
const lesson1Group: ExerciseGroup = {
  id: 'iro-pi-l1',
  title: 'フットサルって、何でしたっけ？',
  subtitlePt: 'Esportes favoritos · convidar para eventos · cancelar por mensagem',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l1-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: '好きなもの好きなこと (coisas e atividades favoritas)' }, { n: 2, text: '自然と環境 (natureza e meio ambiente)' }, { n: 3, text: '仕事の連絡 (comunicação de trabalho)' }, { n: 4, text: '旅行に行こう (vamos viajar)' }], answer: 1, explanationPt: 'A Lição 1 abre o tópico 好きなもの好きなこと: falar sobre coisas de que gosta e atividades favoritas.' },
    { id: 'iro-pi-l1-2', number: 2, prompt: 'Can-do 01: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ouvir comentários simples de amigos sobre esportes favoritos e entender razões/atrativos' }, { n: 2, text: 'preencher um formulário de mudança de endereço' }, { n: 3, text: 'pedir informação no balcão da prefeitura' }, { n: 4, text: 'dar instruções de emergência por telefone' }], answer: 1, explanationPt: 'O Can-do 01 é: entender uma fala simples de amigos sobre esportes favoritos, motivos e atrativos.' },
    { id: 'iro-pi-l1-3', number: 3, prompt: '聴解 01-01: qual esporte トン pratica nos dias de folga?', image: `${IMG}/ZZ_01_1_04_huttosaru.png`, imageAlt: 'pessoas jogando futsal em uma quadra pequena', choices: [{ n: 1, text: 'フットサル' }, { n: 2, text: '相撲' }, { n: 3, text: '登山' }, { n: 4, text: '野球' }], answer: 1, explanationPt: 'トン diz: 毎週土曜日に、フットサルをやっています. Ele entrou num time da cidade onde mora.' },
    { id: 'iro-pi-l1-4', number: 4, prompt: 'Por que トン diz que o futsal é fácil de praticar?', choices: [{ n: 1, text: 'porque tem menos pessoas que futebol e a quadra é pequena' }, { n: 2, text: 'porque não precisa de time' }, { n: 3, text: 'porque é só assistir na TV' }, { n: 4, text: 'porque não há competição' }], answer: 1, explanationPt: 'Ele explica: 1チーム5人だからサッカーより少ない人数でできるし、コートも小さいんです.' },
    { id: 'iro-pi-l1-5', number: 5, prompt: 'No time atual de トン, cerca de quanto do grupo é estrangeiro?', choices: [{ n: 1, text: '3分の1ぐらい (cerca de um terço)' }, { n: 2, text: '半分ぐらい (cerca de metade)' }, { n: 3, text: '全部 (todos)' }, { n: 4, text: '1人だけ (só uma pessoa)' }], answer: 1, explanationPt: 'トン diz: 今のチームは、3分の1ぐらいが外国人で、大会にも出たりします.' },
    { id: 'iro-pi-l1-6', number: 6, prompt: '聴解 01-02: パク é 「見る専門」. O que isso quer dizer?', image: `${IMG}/ZZ_01_1_02_sumoo.png`, imageAlt: 'lutadores de sumo no dohyo', choices: [{ n: 1, text: 'ele só assiste esportes, não pratica' }, { n: 2, text: 'ele é atleta profissional' }, { n: 3, text: 'ele nunca vê esportes' }, { n: 4, text: 'ele ensina esportes' }], answer: 1, explanationPt: '見る専門 = “sou só da parte de assistir”. パク vê esportes na TV e costuma assistir sumô.' },
    { id: 'iro-pi-l1-7', number: 7, prompt: 'O que パク acha atraente no sumô?', choices: [{ n: 1, text: 'スピードと迫力 (velocidade e impacto)' }, { n: 2, text: '自分のペース (ritmo próprio)' }, { n: 3, text: '人数が少ない (poucas pessoas)' }, { n: 4, text: '映像が多い (muitas imagens)' }], answer: 1, explanationPt: 'パク fala da velocidade e da força: 体の大きな力士同士がぶつかって、一瞬で勝負が決まるのが興奮します.' },
    { id: 'iro-pi-l1-8', number: 8, prompt: '聴解 01-02: パク já foi ver sumô no local?', choices: [{ n: 1, text: 'não; ainda não foi, mas quer ir uma vez' }, { n: 2, text: 'sim; ele vai todo mês' }, { n: 3, text: 'sim; ele trabalha no local' }, { n: 4, text: 'não; ele não tem interesse' }], answer: 1, explanationPt: 'パク diz: まだ見に行ったことがないんです。いちど行ってみたいです.' },
    { id: 'iro-pi-l1-9', number: 9, prompt: '聴解 01-03: qual é a relação de マルシア com esportes?', image: `${IMG}/ZZ_01_1_05_nai.png`, imageAlt: 'pessoa sem esporte favorito', choices: [{ n: 1, text: 'ela não tem muito interesse em esportes e não é boa em exercício' }, { n: 2, text: 'ela joga futsal todo sábado' }, { n: 3, text: 'ela assiste sumô todos os dias' }, { n: 4, text: 'ela é guia de montanhismo' }], answer: 1, explanationPt: 'マルシア diz: 私はスポーツはあまり…… e 運動が得意じゃないんです.' },
    { id: 'iro-pi-l1-10', number: 10, prompt: 'Por que マルシア não gosta de esportes de equipe?', choices: [{ n: 1, text: 'porque sente que pode incomodar os outros e não gosta de competição' }, { n: 2, text: 'porque todos são estrangeiros' }, { n: 3, text: 'porque o campo é pequeno' }, { n: 4, text: 'porque precisa assistir pela TV' }], answer: 1, explanationPt: 'Ela diz que não quer causar 迷惑 aos outros e que não se dá bem com 勝つ／負ける ou 強い／弱い.' },
    { id: 'iro-pi-l1-11', number: 11, prompt: '聴解 01-04: que esporte 金子 recomenda para マルシア?', image: `${IMG}/ZZ_01_1_03_tozan.png`, imageAlt: 'pessoas fazendo trilha na montanha', choices: [{ n: 1, text: '登山 (montanhismo/trilha)' }, { n: 2, text: 'フットサル' }, { n: 3, text: '相撲' }, { n: 4, text: '野球' }], answer: 1, explanationPt: '金子 recomenda 登山 porque permite subir no próprio ritmo e a paisagem do topo é excelente.' },
    { id: 'iro-pi-l1-12', number: 12, prompt: 'Qual frase melhor resume por que 登山 combinou com 金子?', choices: [{ n: 1, text: '自分のペースで登ればいいから' }, { n: 2, text: '一瞬で勝負が決まるから' }, { n: 3, text: '見る専門だから' }, { n: 4, text: 'チームでするスポーツだから' }], answer: 1, explanationPt: '金子 diz que começou depois de ser convidado por um amigo e percebeu que combinava com ele: 自分のペースで登ればいい.' },
    { id: 'iro-pi-l1-13', number: 13, prompt: '「フットサルって、何でしたっけ？」 tem qual função?', choices: [{ n: 1, text: 'confirmar algo que a pessoa conhece vagamente ou não lembra bem' }, { n: 2, text: 'perguntar algo totalmente desconhecido pela primeira vez' }, { n: 3, text: 'recusar um convite' }, { n: 4, text: 'fazer uma promessa' }], answer: 1, translationPt: 'Futsal mesmo, o que era?', explanationPt: 'Nでしたっけ？ confirma memória/entendimento. Diferente de 何ですか？, que pergunta quando você não sabe.' },
    { id: 'iro-pi-l1-14', number: 14, prompt: 'Qual frase usa corretamente o padrão 「Nでしたっけ？」?', choices: [{ n: 1, text: 'サッカーって、1チーム9人でしたっけ？' }, { n: 2, text: 'サッカーを9人でしたっけ。' }, { n: 3, text: 'サッカーに9人でしたっけ。' }, { n: 4, text: 'サッカーで9人でしたっけを。' }], answer: 1, explanationPt: 'O modelo da nota gramatical é Nでしたっけ？, frequentemente depois de って para retomar o tópico.' },
    { id: 'iro-pi-l1-15', number: 15, prompt: '聴解 01-06: a pessoa está convidando ロドリゲス para quê?', image: `${IMG}/ZZ_01_2_03_yakyuu.png`, imageAlt: 'jogo de beisebol', choices: [{ n: 1, text: '応援: torcer pelo time de beisebol da empresa' }, { n: 2, text: '演劇: assistir a uma peça' }, { n: 3, text: '落語: ir a uma apresentação' }, { n: 4, text: 'バリ舞踊: ver dança balinesa' }], answer: 1, explanationPt: 'A fala diz: 会社の野球部の試合があるんですよ。みんなで応援しに行くことになったんです.' },
    { id: 'iro-pi-l1-16', number: 16, prompt: '聴解 01-06: quando e onde é o evento?', choices: [{ n: 1, text: 'domingo, no 市民球場' }, { n: 2, text: 'sexta-feira, no 講堂' }, { n: 3, text: 'quinta-feira, na 商店街' }, { n: 4, text: 'sábado, no さくら公園' }], answer: 1, explanationPt: 'O jogo é no domingo e no 市民球場; depois combinam encontro às 10h na empresa.' },
    { id: 'iro-pi-l1-17', number: 17, prompt: '聴解 01-06: ロドリゲス aceita o convite?', choices: [{ n: 1, text: 'sim; ele diz 行きます' }, { n: 2, text: 'não; é difícil demais' }, { n: 3, text: 'não; tem compromisso com o filho' }, { n: 4, text: 'ele não responde' }], answer: 1, explanationPt: 'Ele responde: おもしろそうですね。行きます.' },
    { id: 'iro-pi-l1-18', number: 18, prompt: '聴解 01-07: ビアンカ convida ひとみ para qual evento?', image: `${IMG}/ZZ_01_2_02_engeki.png`, imageAlt: 'palco de teatro', choices: [{ n: 1, text: 'uma apresentação de teatro em japonês' }, { n: 2, text: 'um jogo de beisebol' }, { n: 3, text: 'um festival indonésio' }, { n: 4, text: 'uma aula de culinária' }], answer: 1, explanationPt: 'ビアンカ está fazendo teatro na aula de japonês; a 発表会 será a apresentação do trabalho ensaiado por meio ano.' },
    { id: 'iro-pi-l1-19', number: 19, prompt: '聴解 01-07: quando e onde será a 発表会?', choices: [{ n: 1, text: 'sexta-feira, 18h, no 講堂' }, { n: 2, text: 'domingo, 10h, no 市民球場' }, { n: 3, text: 'quinta-feira, na 商店街' }, { n: 4, text: 'sábado, no parque' }], answer: 1, explanationPt: 'Ela diz: 今度の金曜日が、発表会なんです。夕方6時から、講堂です.' },
    { id: 'iro-pi-l1-20', number: 20, prompt: 'A peça se chama 「紅天女」. Como ビアンカ a descreve?', choices: [{ n: 1, text: 'um pouco difícil, mas muito japonesa e bonita' }, { n: 2, text: 'curta e sem história' }, { n: 3, text: 'um jogo de esporte' }, { n: 4, text: 'uma dança de Bali' }], answer: 1, explanationPt: 'ビアンカ diz: ちょっと難しいですけど、とても日本的で、すてきですよ.' },
    { id: 'iro-pi-l1-21', number: 21, prompt: '聴解 01-08: o que é 落語?', image: `${IMG}/ZZ_01_2_04_rakugo.png`, imageAlt: 'artista de rakugo sentado no palco', choices: [{ n: 1, text: 'uma arte tradicional japonesa em que uma pessoa sentada interpreta vários personagens e conta uma história engraçada' }, { n: 2, text: 'um esporte de luta entre dois rikishi' }, { n: 3, text: 'um festival de comida estrangeira' }, { n: 4, text: 'um jogo de futebol de salão' }], answer: 1, explanationPt: 'A explicação do diálogo: 日本の伝統的な芸の1つで、1人の人が座って、いろいろな登場人物を演じながら、おもしろい話をする.' },
    { id: 'iro-pi-l1-22', number: 22, prompt: '聴解 01-08: por que o convite para 落語 foi feito?', choices: [{ n: 1, text: 'porque precisam reunir público para o evento da 商店街' }, { n: 2, text: 'porque a empresa alugou um estádio' }, { n: 3, text: 'porque é aniversário de um colega' }, { n: 4, text: 'porque todos já compraram ingresso' }], answer: 1, explanationPt: 'A pessoa diz: 商店街で落語会があるんですよ。それで、お客さんを集めなくちゃならなくて.' },
    { id: 'iro-pi-l1-23', number: 23, prompt: '聴解 01-08: por que ヨハン recusa?', choices: [{ n: 1, text: 'porque só conversa em japonês ainda seria difícil para ele' }, { n: 2, text: 'porque não gosta de parques' }, { n: 3, text: 'porque já prometeu levar o filho à piscina' }, { n: 4, text: 'porque o estádio é longe' }], answer: 1, explanationPt: 'Ele diz que, se houvesse música ou vídeo, talvez aproveitasse, mas 日本語の話だけ ainda é difícil.' },
    { id: 'iro-pi-l1-24', number: 24, prompt: '聴解 01-09: エフィ convida 永田 para qual evento?', image: `${IMG}/ZZ_01_2_01_baribuyoo.png`, imageAlt: 'dança balinesa no festival', choices: [{ n: 1, text: 'インドネシアフェスティバル, onde uma amiga vai dançar バリ舞踊' }, { n: 2, text: 'um jogo de beisebol da empresa' }, { n: 3, text: 'um evento de rakugo na rua comercial' }, { n: 4, text: 'uma trilha no mês que vem' }], answer: 1, explanationPt: 'エフィ diz que no sábado haverá インドネシアフェスティバル no parque, e sua amiga dançará バリ舞踊.' },
    { id: 'iro-pi-l1-25', number: 25, prompt: '聴解 01-09: quando e onde será o festival?', choices: [{ n: 1, text: 'sábado, no さくら公園' }, { n: 2, text: 'domingo, no 市民球場' }, { n: 3, text: 'sexta-feira, no 講堂' }, { n: 4, text: 'quinta-feira, na 商店街' }], answer: 1, explanationPt: '今度の土曜日、さくら公園で、インドネシアフェスティバルがあるんです.' },
    { id: 'iro-pi-l1-26', number: 26, prompt: '聴解 01-09: por que 永田 inicialmente não pode ir?', choices: [{ n: 1, text: 'porque prometeu levar o filho à piscina' }, { n: 2, text: 'porque precisa reunir clientes' }, { n: 3, text: 'porque vai jogar futsal' }, { n: 4, text: 'porque precisa ensaiar teatro' }], answer: 1, explanationPt: '永田 diz: 土曜日は、子どもをプールに連れて行くって約束しちゃった.' },
    { id: 'iro-pi-l1-27', number: 27, prompt: '「みんなで応援しに行くことになったんです」 usa qual padrão?', choices: [{ n: 1, text: 'V-ることになった: um plano foi decidido' }, { n: 2, text: 'Nでしたっけ？: confirmar memória' }, { n: 3, text: 'V-てくれませんか？: pedir um favor' }, { n: 4, text: 'V-てしまう: lamentar algo' }], answer: 1, translationPt: 'Ficou decidido que vamos todos torcer.', explanationPt: 'V-ることになった transmite um plano decidido por circunstâncias ou conversa, não simplesmente uma decisão individual.' },
    { id: 'iro-pi-l1-28', number: 28, prompt: 'Qual frase usa corretamente 「V-ることになった」?', choices: [{ n: 1, text: '私の友だちが、バリ舞踊を踊ることになったんです。' }, { n: 2, text: '私の友だちが、バリ舞踊を踊ったことになったんです。' }, { n: 3, text: '私の友だちが、バリ舞踊を踊ってことになったんです。' }, { n: 4, text: '私の友だちが、バリ舞踊に踊ることになったんです。' }], answer: 1, explanationPt: 'Nesta lição, o padrão liga-se à forma de dicionário: 踊ることになった. A nota também mostra que pode ligar à forma ナイ para dizer que ficou decidido não fazer algo.' },
    { id: 'iro-pi-l1-29', number: 29, prompt: '「もしよかったら、見に来てくれませんか？」 é usado para:', choices: [{ n: 1, text: 'pedir que a pessoa venha assistir algo, o que beneficia quem fala' }, { n: 2, text: 'confirmar uma informação esquecida' }, { n: 3, text: 'dizer que um plano foi decidido' }, { n: 4, text: 'descrever uma paisagem' }], answer: 1, translationPt: 'Se puder/se quiser, você poderia vir assistir?', explanationPt: 'V-てくれませんか？ é pedido em que a ação seria favorável a quem fala. Entre amigos, pode aparecer como V-てくれない？.' },
    { id: 'iro-pi-l1-30', number: 30, prompt: 'Na atividade de escrita, qual é o objetivo da mensagem de cancelamento?', choices: [{ n: 1, text: 'cancelar um compromisso com amigo/colega explicando brevemente o motivo' }, { n: 2, text: 'fazer review de mangá' }, { n: 3, text: 'escrever currículo' }, { n: 4, text: 'pedir comida no restaurante' }], answer: 1, explanationPt: 'Can-do 03: escrever uma mensagem simples para cancelar um compromisso, dando a razão.' },
    { id: 'iro-pi-l1-31', number: 31, prompt: 'No exemplo de cancelamento, qual era o compromisso?', choices: [{ n: 1, text: 'domingo, ir torcer no beisebol' }, { n: 2, text: 'sexta-feira, apresentar teatro' }, { n: 3, text: 'quinta-feira, ir ao rakugo' }, { n: 4, text: 'sábado, dançar no festival' }], answer: 1, explanationPt: 'O answer key traz como exemplo: 日曜日 野球の応援.' },
    { id: 'iro-pi-l1-32', number: 32, prompt: 'No exemplo de cancelamento, qual motivo é dado?', choices: [{ n: 1, text: 'teve febre ontem à noite e o exame no hospital indicou COVID' }, { n: 2, text: 'não sabe onde fica o estádio' }, { n: 3, text: 'não gosta de beisebol' }, { n: 4, text: 'o evento foi cancelado por orçamento' }], answer: 1, explanationPt: 'O answer key resume: 昨日の夜に熱が出た。病院で検査をしたら、コロナだった.' },
    { id: 'iro-pi-l1-33', number: 33, prompt: 'Qual sequência corresponde à estrutura da mensagem do exemplo?', choices: [{ n: 1, text: 'iniciar conversa → dizer o assunto → dar motivo → responder ao outro → encerrar' }, { n: 2, text: 'encerrar → motivo → assunto → iniciar → resposta' }, { n: 3, text: 'somente motivo, sem saudação' }, { n: 4, text: 'somente pedido de desculpas, sem explicar' }], answer: 1, explanationPt: 'O answer key marca: ① a (começar), ② e (dizer o assunto), ③ d (motivo), ④ c (responder), ⑤ b (encerrar).' },
    { id: 'iro-pi-l1-34', number: 34, prompt: 'Kanji da lição: 野球／応援／約束 lêem-se:', choices: [{ n: 1, text: 'やきゅう／おうえん／やくそく' }, { n: 2, text: 'のきゅう／おうえん／やくたば' }, { n: 3, text: 'やきゅう／おんえん／やくぞく' }, { n: 4, text: 'のだま／えんおう／やくそく' }], answer: 1, explanationPt: '野球 (beisebol), 応援 (torcida/apoio), 約束 (promessa/compromisso).' },
    { id: 'iro-pi-l1-35', number: 35, prompt: 'Kanji da lição: 得意／伝統的／座る lêem-se:', choices: [{ n: 1, text: 'とくい／でんとうてき／すわる' }, { n: 2, text: 'えいとく／でんどうてき／さわる' }, { n: 3, text: 'とくい／でんとうてき／ざる' }, { n: 4, text: 'とくぎ／つたとうてき／すわる' }], answer: 1, explanationPt: '得意（な）= ser bom em algo; 伝統的（な）= tradicional; 座る = sentar.' },
    { id: 'iro-pi-l1-36', number: 36, prompt: 'Kanji da lição: 弱い／勝つ／負ける／誘う lêem-se:', choices: [{ n: 1, text: 'よわい／かつ／まける／さそう' }, { n: 2, text: 'よい／しょうつ／ふける／いざなう' }, { n: 3, text: 'じゃくい／かつ／まける／さそう' }, { n: 4, text: 'よわい／まつ／かける／さそう' }], answer: 1, explanationPt: '弱い (fraco), 勝つ (vencer), 負ける (perder), 誘う (convidar).' },
    { id: 'iro-pi-l1-37', number: 37, prompt: 'TIPS: qual afirmação sobre 相撲 está correta?', choices: [{ n: 1, text: 'é um esporte tradicional; perde quem sai do dohyo ou toca o chão com parte do corpo além da sola dos pés' }, { n: 2, text: 'é sempre jogado por times de 5 pessoas' }, { n: 3, text: 'é apenas uma dança de festival' }, { n: 4, text: 'não há atletas estrangeiros no sumô' }], answer: 1, explanationPt: 'A TIPS explica a regra simples do sumô e que hoje há lutadores estrangeiros, inclusive yokozuna, especialmente da Mongólia.' },
    { id: 'iro-pi-l1-38', number: 38, prompt: 'TIPS: em 落語, o artista geralmente usa quais recursos?', choices: [{ n: 1, text: 'voz, direção do rosto, leque e tenugui para representar personagens e objetos' }, { n: 2, text: 'somente uma tela de vídeo e música' }, { n: 3, text: 'um time inteiro de atores no palco' }, { n: 4, text: 'bola, quadra e uniforme' }], answer: 1, explanationPt: 'Rakugo é feito por um contador sentado; ele interpreta vários personagens e usa poucos objetos, como 扇子 e 手ぬぐい.' },
    { id: 'iro-pi-l1-39', number: 39, prompt: 'TIPS: にほん e にっぽん são:', choices: [{ n: 1, text: 'duas leituras de 日本; にほん é comum no dia a dia e にっぽん soa mais formal/forte' }, { n: 2, text: 'países diferentes' }, { n: 3, text: 'uma leitura correta e uma errada' }, { n: 4, text: 'apenas nomes de times' }], answer: 1, explanationPt: 'A dica diz que as duas leituras são possíveis; para uso próprio, にほん costuma bastar, e にっぽん aparece em contextos oficiais ou de torcida.' },
    { id: 'iro-pi-l1-40', number: 40, prompt: 'TIPS: os eventos 「○○フェスティバル」 no Japão costumam:', choices: [{ n: 1, text: 'apresentar culturas estrangeiras, comidas, produtos, dança e música; muitas vezes são gratuitos' }, { n: 2, text: 'ser sempre provas oficiais de JLPT' }, { n: 3, text: 'acontecer apenas dentro de escolas' }, { n: 4, text: 'proibir a participação de estrangeiros' }], answer: 1, explanationPt: 'A TIPS menciona festivais de países como Tailândia, Vietnã, Indonésia e Brasil, com comida, produtos, palco e chance de conexão comunitária.' },
    { id: 'iro-pi-l1-41', number: 41, prompt: 'TIPS: sobre teatro japonês, qual lista mistura tradição e teatro moderno citados no texto?', choices: [{ n: 1, text: '歌舞伎／能／狂言 e 宝塚／劇団四季' }, { n: 2, text: '相撲／フットサル／野球' }, { n: 3, text: 'コロナ／マスク／検査' }, { n: 4, text: '扇子／手ぬぐい／土俵' }], answer: 1, explanationPt: 'A TIPS apresenta artes tradicionais como Kabuki, Noh e Kyogen, e também teatro moderno como Takarazuka e Gekidan Shiki.' },
    { id: 'iro-pi-l1-42', number: 42, prompt: 'TIPS: como o texto explica コロナ no Japão?', choices: [{ n: 1, text: 'COVID-19 se espalhou em 2020; em maio de 2023 deixou de ter tratamento legal especial e passou a ser tratado como doença comum' }, { n: 2, text: 'é um tipo de esporte japonês' }, { n: 3, text: 'é uma peça de teatro famosa' }, { n: 4, text: 'é uma palavra para futsal' }], answer: 1, explanationPt: 'A TIPS resume a pandemia, o estado de emergência em 2020, o uso de máscaras e a mudança legal em maio de 2023.' },
  ],
}

const L1_SCRIPTS: Record<string, ScriptItem[]> = {
  '01-01': [
    {
      label: '① トンさん - フットサル (01-01)',
      setupJa: '{地域|ちいき}の{日本語|にほんご}{教室|きょうしつ}で、{好|す}きなスポーツについて{話|はな}しています。',
      setupPt: 'Na aula de japonês da comunidade, conversam sobre esportes favoritos. ① Ton fala sobre futsal.',
      lines: [
        { speaker: '金子', ja: '{日本|にほん}の{生活|せいかつ}には、もう{慣|な}れましたか？', pt: 'Você já se acostumou com a vida no Japão?' },
        { speaker: 'ヤミン・トン', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'パク', ja: '{私|わたし}も{慣|な}れました。', pt: 'Eu também me acostumei.' },
        { speaker: 'マルシア', ja: '{私|わたし}もです。{今|いま}は、{仕事|しごと}だけじゃなくて、ときどき{旅行|りょこう}したりもしています。', pt: 'Eu também. Agora, além do trabalho, às vezes também viajo.' },
        { speaker: 'トン', ja: '{私|わたし}も、{休|やす}みの{日|ひ}はスポーツをしています。', pt: 'Eu também pratico esportes nos dias de folga.' },
        { speaker: 'ヤミン', ja: 'トンさんは、どんなスポーツをするんですか？', pt: 'Ton, que esporte você pratica?' },
        { speaker: 'トン', ja: '{私|わたし}は、{毎週|まいしゅう}{土曜日|どようび}に、フットサルをやっています。{住|す}んでる{町|まち}にフットサルチームがあるので、そこに{入|はい}りました。', pt: 'Eu jogo futsal todos os sábados. Como há um time de futsal na cidade onde moro, entrei nele.' },
        { speaker: 'ヤミン', ja: 'フットサルって、{何|なん}でしたっけ？', pt: 'Futsal mesmo, o que era?' },
        { speaker: 'トン', ja: 'まあ、サッカーに{似|に}てるんですけど、でも、もっと{気軽|きがる}にできるんですよ。', pt: 'Bom, parece futebol, mas dá para jogar de um jeito mais casual.' },
        { speaker: 'ヤミン', ja: 'へー。', pt: 'Ah, entendi.' },
        { speaker: 'トン', ja: '1チーム5{人|にん}だからサッカーより{少|すく}ない{人数|にんずう}でできるし、コートも{小|ちい}さいんです。', pt: 'Como um time tem 5 pessoas, dá para jogar com menos gente que futebol, e a quadra também é pequena.' },
        { speaker: '金子', ja: 'そうなんですか。', pt: 'Ah, é?' },
        { speaker: 'トン', ja: 'はい、{今|いま}のチームは、3{分|ぶん}の1ぐらいが{外国人|がいこくじん}で、{大会|たいかい}にも{出|で}たりします。', pt: 'Sim. No meu time atual, cerca de um terço são estrangeiros, e também participamos de torneios.' },
        { speaker: 'ヤミン', ja: 'すごいですね。', pt: 'Que legal.' },
      ],
    },
  ],
  '01-02': [
    {
      label: '② パクさん - 相撲 (01-02)',
      setupPt: 'Park fala que é da turma de só assistir esportes, especialmente sumô.',
      lines: [
        { speaker: 'ヤミン', ja: 'パクさんは、{何|なに}か{好|す}きなスポーツはありますか？', pt: 'Park, há algum esporte de que você gosta?' },
        { speaker: 'パク', ja: '{私|わたし}は、{見|み}る{専門|せんもん}ですね。スポーツは、テレビでよく{見|み}てます。', pt: 'Eu sou mais de só assistir. Vejo esportes bastante na TV.' },
        { speaker: 'ヤミン', ja: 'どんなスポーツを{見|み}るんですか？', pt: 'Que esportes você assiste?' },
        { speaker: 'パク', ja: 'そうですね。いろいろ{見|み}ますけど、よく{見|み}るのは{相撲|すもう}です。{場所中|ばしょちゅう}は{毎日|まいにち}{見|み}ています。', pt: 'Vejamos. Assisto várias coisas, mas o que vejo bastante é sumô. Durante o torneio, vejo todos os dias.' },
        { speaker: 'ヤミン', ja: 'へー、{相撲|すもう}ですか。{私|わたし}は{見|み}たことないんですが、おもしろいですか？', pt: 'Nossa, sumô? Eu nunca assisti. É interessante?' },
        { speaker: 'パク', ja: 'はい、おもしろいですよ。', pt: 'Sim, é interessante.' },
        { speaker: 'ヤミン', ja: 'どんなところがおもしろいんですか？', pt: 'Que parte é interessante?' },
        { speaker: 'パク', ja: 'そうですねえ、やっぱり、スピードと{迫力|はくりょく}ですね。{体|からだ}の{大|おお}きな{力士|りきし}{同士|どうし}がぶつかって、{一瞬|いっしゅん}で{勝負|しょうぶ}が{決|き}まるのが、{見|み}ていて{興奮|こうふん}します。', pt: 'Vejamos... é a velocidade e o impacto. Ver rikishi enormes se chocando e a vitória ser decidida num instante empolga.' },
        { speaker: 'ヤミン', ja: '{会場|かいじょう}に{見|み}に{行|い}ったことがありますか？', pt: 'Você já foi assistir no local?' },
        { speaker: 'パク', ja: 'いえ、まだ{見|み}に{行|い}ったことがないんです。いちど{行|い}ってみたいです。', pt: 'Não, ainda não fui ver. Quero ir uma vez.' },
      ],
    },
  ],
  '01-03': [
    {
      label: '③ マルシアさん - 好きなスポーツはない (01-03)',
      setupPt: 'Marcia fala por que não tem um esporte favorito.',
      lines: [
        { speaker: 'ヤミン', ja: 'マルシアさんは、{何|なに}か{好|す}きなスポーツはありますか？', pt: 'Marcia, há algum esporte de que você gosta?' },
        { speaker: 'マルシア', ja: 'うーん、{私|わたし}はスポーツはあまり……。', pt: 'Hmm, esportes, para mim, não muito...' },
        { speaker: 'ヤミン', ja: '{興味|きょうみ}ないんですか？', pt: 'Você não tem interesse?' },
        { speaker: 'マルシア', ja: '{運動|うんどう}が{得意|とくい}じゃないんです……。', pt: 'Eu não sou boa em exercício...' },
        { speaker: '金子', ja: 'そうなの？', pt: 'É mesmo?' },
        { speaker: 'マルシア', ja: 'はい、だから、チームでするスポーツだと、ほかの{人|ひと}に{迷惑|めいわく}をかけちゃうのが{嫌|いや}で。', pt: 'Sim, então, em esportes de equipe, não gosto de acabar causando problema para os outros.' },
        { speaker: '金子', ja: 'なるほどね。', pt: 'Entendi.' },
        { speaker: 'マルシア', ja: 'それに、{勝|か}つとか{負|ま}けるとか、{強|つよ}いとか{弱|よわ}いとかが{苦手|にがて}なんです。', pt: 'Além disso, não me dou bem com coisas de ganhar ou perder, ser forte ou fraco.' },
        { speaker: 'ヤミン', ja: 'そうなんですか……。', pt: 'Entendi...' },
        { speaker: 'マルシア', ja: '{体|からだ}を{動|うご}かすことは、{嫌|きら}いじゃないんですけど。', pt: 'Mas não é que eu odeie mexer o corpo.' },
      ],
    },
  ],
  '01-04': [
    {
      label: '④ 金子さん - 登山 (01-04)',
      setupPt: 'Kaneko recomenda montanhismo a Marcia.',
      lines: [
        { speaker: '金子', ja: 'じゃあ、マルシアさんには、{登山|とざん}とか、いいんじゃないですか？', pt: 'Então, para você, Marcia, talvez montanhismo seja bom.' },
        { speaker: 'マルシア', ja: '{登山|とざん}ですか？', pt: 'Montanhismo?' },
        { speaker: 'ヤミン', ja: '{金子|かねこ}さんは、{登山|とざん}をするんですか？', pt: 'Kaneko, você faz montanhismo?' },
        { speaker: '金子', ja: 'はい、{私|わたし}も{子|こ}どものころから、マルシアさんと{同|おな}じように、スポーツで{人|ひと}と{競争|きょうそう}するのが{嫌|いや}で、{学校|がっこう}の{体育|たいいく}の{授業|じゅぎょう}とか、つらかったんです。', pt: 'Sim. Desde criança, assim como você, eu não gostava de competir com pessoas em esportes, e as aulas de educação física na escola eram difíceis para mim.' },
        { speaker: '金子', ja: 'でも、{大人|おとな}になってから、{友人|ゆうじん}に{誘|さそ}われて{登山|とざん}を{始|はじ}めてみたら、{私|わたし}にはすごく{合|あ}ってたんです。', pt: 'Mas, depois de adulto, um amigo me convidou e eu experimentei começar montanhismo. Combinou muito comigo.' },
        { speaker: 'ヤミン', ja: 'そうですか。', pt: 'Entendi.' },
        { speaker: '金子', ja: '{登山|とざん}は、{自分|じぶん}のペースで{登|のぼ}ればいいから。それに、{山|やま}の{頂上|ちょうじょう}から{見|み}る{景色|けしき}も{最高|さいこう}ですよ。', pt: 'No montanhismo, basta subir no seu próprio ritmo. Além disso, a paisagem vista do topo da montanha é ótima.' },
        { speaker: 'マルシア', ja: 'よさそうですね。やってみたいな……。', pt: 'Parece bom. Quero experimentar...' },
        { speaker: '金子', ja: '{来月|らいげつ}、{近|ちか}くの{山|やま}に{登|のぼ}る{予定|よてい}なんですが、いっしょに{行|い}ってみますか？ {案内|あんない}しますよ。', pt: 'Mês que vem, planejo subir uma montanha aqui perto. Quer ir junto? Eu guio você.' },
        { speaker: 'マルシア', ja: 'はい、ぜひ！', pt: 'Sim, com certeza!' },
        { speaker: 'ヤミン', ja: '{私|わたし}も{行|い}きたいです。みんなでいっしょに{行|い}きませんか？', pt: 'Eu também quero ir. Que tal irmos todos juntos?' },
        { speaker: 'トン', ja: 'いいですね。', pt: 'Boa ideia.' },
        { speaker: 'パク', ja: '{私|わたし}も、{連|つ}れて{行|い}ってください。', pt: 'Por favor, me levem também.' },
      ],
    },
  ],
  '01-05': [
    {
      label: '形に注目 - Nでしたっけ？ (01-05)',
      lines: [
        { speaker: 'ヤミン', ja: 'フットサルって、{何|なん}でしたっけ？', pt: 'Futsal mesmo, o que era?' },
      ],
    },
  ],
  '01-06': [
    {
      label: '① 会社で - 野球の応援 (01-06)',
      setupPt: 'No trabalho, alguém convida Rodriguez para torcer pelo time de beisebol da empresa.',
      lines: [
        { speaker: 'A', ja: 'ロドリゲスさん、{今度|こんど}の{日曜日|にちようび}って、{空|あ}いてますか？', pt: 'Rodriguez, você está livre neste domingo?' },
        { speaker: 'B', ja: 'え、{日曜日|にちようび}ですか？ {特|とく}に{予定|よてい}はないですけど、どうしてですか？', pt: 'Domingo? Não tenho nenhum plano em especial. Por quê?' },
        { speaker: 'A', ja: '{日曜日|にちようび}、{会社|かいしゃ}の{野球部|やきゅうぶ}の{試合|しあい}があるんですよ。{市民球場|しみんきゅうじょう}で。', pt: 'No domingo vai ter jogo do time de beisebol da empresa. No estádio municipal.' },
        { speaker: 'A', ja: 'で、みんなで{応援|おうえん}しに{行|い}くことになったんですけど、ロドリゲスさんも、いっしょにどうですか？', pt: 'Então ficou decidido que todos vamos torcer. Rodriguez, quer ir junto?' },
        { speaker: 'B', ja: '{野球|やきゅう}ですか。{行|い}ったことないですけど、おもしろそうですね。{行|い}きます。', pt: 'Beisebol? Nunca fui, mas parece interessante. Eu vou.' },
        { speaker: 'A', ja: 'じゃあ、ぜひ{来|き}てください。10{時|じ}に{会社|かいしゃ}に{集合|しゅうごう}して、{球場|きゅうじょう}までみんなでいっしょに{行|い}きます。', pt: 'Então venha, por favor. Vamos nos reunir na empresa às 10h e ir todos juntos até o estádio.' },
        { speaker: 'A', ja: '{当日|とうじつ}は{暑|あつ}くなると{思|おも}うから、{帽子|ぼうし}と{水|みず}を{忘|わす}れないで。', pt: 'Acho que no dia vai ficar quente, então não esqueça boné e água.' },
        { speaker: 'B', ja: 'はい、わかりました。{楽|たの}しみにしています。', pt: 'Sim, entendi. Estou ansioso.' },
      ],
    },
  ],
  '01-07': [
    {
      label: '② 大学で - 演劇の発表会 (01-07)',
      setupPt: 'Na universidade, Bianca convida Hitomi para assistir a uma peça em japonês.',
      lines: [
        { speaker: 'A', ja: 'ひとみさん、おはようございます。', pt: 'Hitomi, bom dia.' },
        { speaker: 'B', ja: 'あ、ビアンカさん、おはよう。', pt: 'Ah, Bianca, bom dia.' },
        { speaker: 'A', ja: 'ひとみさん、{演劇|えんげき}、{好|す}きですよね？', pt: 'Hitomi, você gosta de teatro, né?' },
        { speaker: 'B', ja: '{演劇|えんげき}？ うん、けっこう{見|み}るよ。{宝塚|たからづか}とか、{劇団四季|げきだんしき}とか。', pt: 'Teatro? Sim, vejo bastante. Takarazuka, Gekidan Shiki e coisas assim.' },
        { speaker: 'A', ja: '{私|わたし}、{今|いま}、{日本語|にほんご}の{授業|じゅぎょう}で、{演劇|えんげき}をやっているんです。{日本語|にほんご}の{劇|げき}を、{半年|はんとし}かけて{練習|れんしゅう}するんです。', pt: 'Agora, na aula de japonês, estou fazendo teatro. Ensaiamos uma peça em japonês durante meio ano.' },
        { speaker: 'B', ja: 'へー、{日本語|にほんご}で{劇|げき}をやるんだ。', pt: 'Nossa, vocês fazem uma peça em japonês.' },
        { speaker: 'A', ja: 'はい。それで、{今度|こんど}の{金曜日|きんようび}が、{発表会|はっぴょうかい}なんです。もしよかったら、{見|み}に{来|き}てくれませんか？ {夕方|ゆうがた}6{時|じ}から、{講堂|こうどう}です。', pt: 'Sim. Então, nesta sexta-feira será a apresentação. Se puder, você poderia vir assistir? É às 18h, no auditório.' },
        { speaker: 'B', ja: 'へー、いいね。{何|なん}の{劇|げき}をやるの？', pt: 'Que legal. Que peça vocês vão fazer?' },
        { speaker: 'A', ja: '「{紅天女|くれないてんにょ}」っていう{作品|さくひん}です。', pt: 'É uma obra chamada “Kurenai Tennyo”.' },
        { speaker: 'B', ja: '{知|し}らないなあ。おもしろい？', pt: 'Não conheço. É interessante?' },
        { speaker: 'A', ja: 'はい、ちょっと{難|むずか}しいですけど、とても{日本的|にほんてき}で、すてきですよ。', pt: 'Sim, é um pouco difícil, mas é muito japonesa e bonita.' },
        { speaker: 'B', ja: 'そうなんだ。じゃあ、{行|い}ってみようかな。', pt: 'Entendi. Então acho que vou.' },
        { speaker: 'A', ja: 'ありがとうございます。これ、チラシです。', pt: 'Obrigada. Aqui está o folheto.' },
      ],
    },
  ],
  '01-08': [
    {
      label: '③ 家の近くで - 落語会 (01-08)',
      setupPt: 'Perto de casa, alguém convida Johan para uma apresentação de rakugo.',
      lines: [
        { speaker: 'A', ja: 'ヨハンさん、{落語|らくご}って、{知|し}ってますか？', pt: 'Johan, você conhece rakugo?' },
        { speaker: 'B', ja: 'らくご……ですか？ えっと……{何|なん}でしたっけ？', pt: 'Rakugo...? Hmm... o que era mesmo?' },
        { speaker: 'A', ja: '{落語|らくご}っていうのは、{日本|にっぽん}の{伝統的|でんとうてき}な{芸|げい}の1つで、1{人|ひとり}の{人|ひと}が{座|すわ}って、いろいろな{登場人物|とうじょうじんぶつ}を{演|えん}じながら、おもしろい{話|はなし}をするんですよ。', pt: 'Rakugo é uma arte tradicional japonesa: uma pessoa fica sentada e conta uma história engraçada interpretando vários personagens.' },
        { speaker: 'B', ja: 'ああ、テレビで{見|み}たことあるかもしれません。', pt: 'Ah, talvez eu já tenha visto na TV.' },
        { speaker: 'A', ja: '{今週|こんしゅう}の{木曜日|もくようび}に、{商店街|しょうてんがい}で{落語会|らくごかい}があるんですよ。それで、お{客|きゃく}さんを{集|あつ}めなくちゃならなくて。', pt: 'Nesta quinta-feira vai ter um encontro de rakugo na rua comercial. Por isso, precisamos reunir público.' },
        { speaker: 'A', ja: 'ヨハンさんも、どうですか？ {日本|にっぽん}の{伝統的|でんとうてき}な{芸|げい}にふれる{機会|きかい}ですよ。', pt: 'Johan, que tal? É uma chance de entrar em contato com uma arte tradicional japonesa.' },
        { speaker: 'B', ja: 'ありがとうございます。でも……{音楽|おんがく}とか{映像|えいぞう}とかあれば、{私|わたし}にも{楽|たの}しめると{思|おも}うんですが、{日本語|にほんご}の{話|はなし}だけなんですよね。', pt: 'Obrigado. Mas... se houvesse música ou imagem, acho que eu conseguiria aproveitar, mas é só fala em japonês, né?' },
        { speaker: 'B', ja: '{私|わたし}には、まだちょっと{難|むずか}しいと{思|おも}います。すみません。', pt: 'Para mim, ainda acho um pouco difícil. Desculpe.' },
        { speaker: 'A', ja: 'そっか、わかりました。じゃ、またいつかの{機会|きかい}にね。', pt: 'Entendi. Então, em outra oportunidade.' },
      ],
    },
  ],
  '01-09': [
    {
      label: '④ 日本語教室で - インドネシアフェスティバル (01-09)',
      setupPt: 'Na aula de japonês, Efi convida Nagata para o festival da Indonésia.',
      lines: [
        { speaker: 'A', ja: '{永田|ながた}さん、ちょっといいですか？', pt: 'Nagata, você tem um minuto?' },
        { speaker: 'B', ja: 'ああ、エフィさん。{何|なに}？', pt: 'Ah, Efi. O que foi?' },
        { speaker: 'A', ja: '{今度|こんど}の{土曜日|どようび}、さくら{公園|こうえん}で、インドネシアフェスティバルがあるんです。', pt: 'Neste sábado vai ter o Festival da Indonésia no Parque Sakura.' },
        { speaker: 'A', ja: 'そこで、{私|わたし}の{友|とも}だちが、バリ{舞踊|ぶよう}を{踊|おど}ることになったんです。もしよかったら、{見|み}に{来|き}てください。', pt: 'Lá, ficou decidido que uma amiga minha vai dançar dança balinesa. Se puder, venha assistir.' },
        { speaker: 'B', ja: 'へー、バリの{踊|おど}りですか。', pt: 'Nossa, dança de Bali?' },
        { speaker: 'A', ja: 'はい、{当日|とうじつ}は、バリ{舞踊|ぶよう}のほかにも、インドネシアの{食|た}べ{物|もの}も{食|た}べられるし、{楽|たの}しめると{思|おも}いますよ。', pt: 'Sim. No dia, além da dança balinesa, dá para comer comida da Indonésia, então acho que você vai aproveitar.' },
        { speaker: 'B', ja: 'おもしろそう。{行|い}ってみたいな。ちょっと{予定|よてい}を{確認|かくにん}するね。えっと、{土曜日|どようび}だよね？', pt: 'Parece interessante. Quero ir. Deixa eu conferir a agenda. Hmm, é sábado, né?' },
        { speaker: 'B', ja: '……ああ、ごめんなさい。{土曜日|どようび}は、{子|こ}どもをプールに{連|つ}れて{行|い}くって{約束|やくそく}しちゃった。{残念|ざんねん}！', pt: 'Ah, desculpe. No sábado prometi levar meu filho à piscina. Que pena!' },
        { speaker: 'A', ja: 'そうですか。お{子|こ}さんとの{約束|やくそく}があるなら、しかたないですね。', pt: 'Entendi. Se você tem uma promessa com seu filho, não tem jeito.' },
        { speaker: 'B', ja: 'でも、{子|こ}どもに{聞|き}いてみるね。もしかしたら、プールよりもそっちがいいって{言|い}うかもしれないから。くわしい{情報|じょうほう}{教|おし}えて。', pt: 'Mas vou perguntar ao meu filho. Talvez ele diga que prefere isso à piscina. Me passe as informações detalhadas.' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '01-10': [
    {
      label: '形に注目 - V-ることになった (01-10)',
      lines: [
        { speaker: 'A', ja: 'みんなで{応援|おうえん}しに{行|い}くことになったんですけど、ロドリゲスさんも、いっしょにどうですか？', pt: 'Ficou decidido que vamos todos torcer. Rodriguez, quer ir junto?' },
      ],
    },
  ],
  '01-11': [
    {
      label: '形に注目 - V-ることになった / V-てくれませんか (01-11)',
      lines: [
        { speaker: 'A', ja: 'そこで、{私|わたし}の{友|とも}だちが、バリ{舞踊|ぶよう}を{踊|おど}ることになったんです。', pt: 'Lá, ficou decidido que uma amiga minha vai dançar dança balinesa.' },
        { speaker: 'A', ja: 'もしよかったら、{見|み}に{来|き}てくれませんか？', pt: 'Se puder, você poderia vir assistir?' },
      ],
    },
  ],
  '01-12': [
    {
      label: '話すモデル① - 演劇に誘う (01-12)',
      lines: [
        { speaker: 'A', ja: 'ひとみさん、{演劇|えんげき}、{好|す}きですよね？', pt: 'Hitomi, você gosta de teatro, né?' },
        { speaker: 'B', ja: 'はい、けっこう{見|み}ますよ。', pt: 'Sim, vejo bastante.' },
        { speaker: 'A', ja: '{今|いま}、{日本語|にほんご}の{授業|じゅぎょう}で、{演劇|えんげき}をやっているんです。{日本語|にほんご}の{劇|げき}を、{半年|はんとし}かけて{練習|れんしゅう}するんです。それで、{今度|こんど}の{金曜日|きんようび}が、{発表会|はっぴょうかい}なんです。', pt: 'Agora estou fazendo teatro na aula de japonês. Ensaiamos uma peça em japonês durante meio ano. Então, nesta sexta-feira será a apresentação.' },
        { speaker: 'A', ja: 'もしよかったら、{見|み}に{来|き}てくれませんか？', pt: 'Se puder, você poderia vir assistir?' },
        { speaker: 'B', ja: 'おもしろそうですね。{行|い}きます。', pt: 'Parece interessante. Eu vou.' },
      ],
    },
  ],
  '01-13': [
    {
      label: '話すモデル② - イベントに誘う (01-13)',
      lines: [
        { speaker: 'A', ja: '{永田|ながた}さん、ちょっといいですか？', pt: 'Nagata, você tem um minuto?' },
        { speaker: 'B', ja: '{何|なん}ですか？', pt: 'O que foi?' },
        { speaker: 'A', ja: '{今度|こんど}の{土曜日|どようび}、さくら{公園|こうえん}で、インドネシアフェスティバルがあるんです。そこで、{私|わたし}の{友|とも}だちが、バリ{舞踊|ぶよう}を{踊|おど}ることになったんです。', pt: 'Neste sábado vai ter o Festival da Indonésia no Parque Sakura. Lá, ficou decidido que uma amiga minha vai dançar dança balinesa.' },
        { speaker: 'A', ja: 'もしよかったら、{見|み}に{来|き}てください。', pt: 'Se puder, venha assistir.' },
        { speaker: 'B', ja: 'すみません。{土曜日|どようび}は、{子|こ}どもと{約束|やくそく}があります。', pt: 'Desculpe. No sábado tenho um compromisso com meu filho.' },
      ],
    },
  ],
}

const lesson1: Section = {
  id: 'lesson-1',
  level: 'pre-intermediate',
  titleJa: '第1課 フットサルって、何でしたっけ？',
  titlePt: 'Lição 1 - Futsal mesmo, o que era?',
  summaryPt:
    'Coisas e atividades favoritas · entender razões e atrativos de esportes favoritos, convidar ou responder a convites para eventos e escrever uma mensagem simples de cancelamento com motivo.',
  studyNotes: [
    {
      title: 'Tópico: Coisas e atividades favoritas (好きなもの好きなこと)',
      bodyPt:
        'Pergunta de abertura: {休|やす}みの{日|ひ}には、{何|なに}をして{過|す}ごしますか？ どこかに{出|で}かけたりしますか？\n\n' +
        '## Can-do\n' +
        '- Ouvir uma fala simples de amigos sobre esportes favoritos e entender razões, atrativos ou motivos para não gostar.\n' +
        '- Conversar sobre o conteúdo de um evento, convidar um amigo e responder a um convite.\n' +
        '- Escrever uma mensagem simples para cancelar um compromisso com amigo ou colega, explicando o motivo.',
    },
    {
      title: 'Atividade 1: esportes favoritos',
      bodyPt:
        'A conversa acontece em uma aula de japonês da comunidade. Yamin pergunta a Ton, Park, Marcia e Kaneko sobre esportes favoritos.\n\n' +
        '| Pessoa | Esporte | Ponto principal |\n|---|---|---|\n' +
        '| トン | フットサル | Parecido com futebol, mas mais fácil de praticar: 1 time tem 5 pessoas e a quadra é pequena. |\n' +
        '| パク | 相撲 | Ele é 「{見|み}る{専門|せんもん}」. Gosta da velocidade e impacto; a vitória se decide em um instante. |\n' +
        '| マルシア | ない | Não é boa em exercício, não quer causar {迷惑|めいわく} e não gosta de competição. |\n' +
        '| 金子 | 登山 | Pode subir no próprio ritmo; a paisagem do topo é excelente. |',
    },
    {
      title: 'Atividade 2: convidar para eventos',
      bodyPt:
        'Os quatro convites da lição:\n\n' +
        '| Situação | Evento | Quando | Onde | Resposta |\n|---|---|---|---|---|\n' +
        '| 会社で | {野球|やきゅう}の{応援|おうえん} | {日曜日|にちようび} | {市民球場|しみんきゅうじょう} | Vai. |\n' +
        '| 大学で | {演劇|えんげき}の{発表会|はっぴょうかい} | {金曜日|きんようび} | {講堂|こうどう} | Vai. |\n' +
        '| 家の近くで | {落語会|らくごかい} | {木曜日|もくようび} | {商店街|しょうてんがい} | Não vai; só fala em japonês ainda é difícil. |\n' +
        '| 日本語教室で | インドネシアフェスティバル／バリ{舞踊|ぶよう} | {土曜日|どようび} | さくら{公園|こうえん} | Não pode inicialmente; prometeu levar o filho à piscina. |',
    },
    {
      title: 'Gramática ➊: Nでしたっけ？',
      bodyPt:
        '**Nでしたっけ？** é usado para confirmar algo que você conhece, mas não lembra bem ou quer checar:\n\n' +
        '- `フットサルって、{何|なん}でしたっけ？` = Futsal mesmo, o que era?\n' +
        '- `サッカーって、1チーム9{人|にん}でしたっけ？` = Futebol era com 9 pessoas por time mesmo?\n' +
        '- Também pode receber uma frase antes: `ミンさんも{明日|あした}の{試合|しあい}、{来|く}るんでしたっけ？`.\n\n' +
        'Use com frequência depois de **って**, que retoma o tópico da conversa.',
    },
    {
      title: 'Gramática ➋➌: planos decididos e pedido',
      bodyPt:
        '**V-ることになった** comunica um plano que ficou decidido por circunstâncias ou conversa, não apenas por decisão individual:\n\n' +
        '- `みんなで{応援|おうえん}しに{行|い}くことになったんです`.\n' +
        '- `{私|わたし}の{友|とも}だちが、バリ{舞踊|ぶよう}を{踊|おど}ることになったんです`.\n' +
        '- A nota também mostra a ligação com forma ナイ: `開催されないことになった`.\n\n' +
        '**V-てくれませんか？** pede que a outra pessoa faça algo favorável para quem fala:\n\n' +
        '- `もしよかったら、{見|み}に{来|き}てくれませんか？`.\n' +
        '- Casual entre amigos: `見に来てくれない？`.',
    },
    {
      title: 'Escrita: mensagem de cancelamento',
      bodyPt:
        'O Can-do da atividade 3 é escrever uma mensagem simples para cancelar um compromisso, dando motivo.\n\n' +
        'No exemplo do answer key: o compromisso era **domingo, ir torcer no beisebol**. O motivo era: **teve febre ontem à noite; no exame do hospital, era COVID**.\n\n' +
        'Estrutura do exemplo:\n' +
        '1. iniciar a conversa;\n' +
        '2. comunicar o assunto;\n' +
        '3. dizer o motivo;\n' +
        '4. responder ao que a outra pessoa pergunta/comenta;\n' +
        '5. encerrar a conversa.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {野球|やきゅう}, {応援|おうえん}, {約束|やくそく}, {得意|とくい}（な）, {伝統的|でんとうてき}（な）, {弱|よわ}い, {勝|か}つ, {負|ま}ける, {誘|さそ}う, {座|すわ}る.\n\n' +
        '**Vocabulário-chave:** 3{分|ぶん}の1 (um terço), {見|み}る{専門|せんもん} (sou só de assistir), {場所中|ばしょちゅう} (durante o torneio), {迷惑|めいわく}をかける (incomodar/causar problema), {自分|じぶん}のペース (ritmo próprio), {発表会|はっぴょうかい} (apresentação), {講堂|こうどう} (auditório), {商店街|しょうてんがい} (rua comercial), {機会|きかい} (oportunidade), しかたない (não tem jeito).',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**相撲:** esporte tradicional japonês; perde quem sai do {土俵|どひょう} ou toca o chão com parte do corpo além da sola dos pés. Há seis torneios oficiais por ano e também 地方巡業.\n\n' +
        '**落語:** arte tradicional em que um contador sentado interpreta vários personagens com voz, rosto, {扇子|せんす} e {手|て}ぬぐい.\n\n' +
        '**にほん／にっぽん:** duas leituras de 日本. にほん é comum no dia a dia; にっぽん soa mais formal, oficial ou forte, e aparece em torcidas esportivas.\n\n' +
        '**フェスティバル／演劇／コロナ:** a lição também apresenta festivais de países no Japão, teatro japonês tradicional e moderno (Kabuki, Noh, Kyogen, Takarazuka, Gekidan Shiki) e um resumo do tratamento social/legal da COVID-19 no Japão.',
    },
  ],
  groups: [lesson1Group],
  audios: attachScripts(1, L1_SCRIPTS),
}

const sections: Section[] = [
  // Tópico 1 - Coisas e atividades favoritas (好きなもの好きなこと)
  lesson1,
]

export const irodoriPreIntermediate: Level = {
  id: 'pre-intermediate',
  courseId: 'irodori',
  titlePt: 'Irodori - Pre-Intermediate (初中級 · A2/B1)',
  descriptionPt:
    'Quarto nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A2/B1: amplia a compreensão e produção em situações cotidianas com mais detalhes, explicações e interação. As explicações são em português.',
  sections,
}
