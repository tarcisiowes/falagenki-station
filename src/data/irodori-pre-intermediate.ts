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

// ---- Lição 2: ドラマを見るのがいちばん好きです (tópico 好きなもの好きなこと) ----
const lesson2Group: ExerciseGroup = {
  id: 'iro-pi-l2',
  title: 'ドラマを見るのがいちばん好きです',
  subtitlePt: 'Resenhas de mangá · falar sobre filmes · explicar gostos em detalhe',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l2-1', number: 1, prompt: 'Qual é a pergunta de abertura desta lição?', choices: [{ n: 1, text: 'あなたは、映画、ドラマ、音楽、読書、ゲームのうち、どれが好きですか？' }, { n: 2, text: '休みの日には、何をして過ごしますか？' }, { n: 3, text: '引っ越しをしたことがありますか？' }, { n: 4, text: 'どんな部屋に住みたいですか？' }], answer: 1, explanationPt: 'A Lição 2 continua o tópico 好きなもの好きなこと e parte de filmes, dramas, música, leitura e jogos.' },
    { id: 'iro-pi-l2-2', number: 2, prompt: 'Can-do 04: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ler comentários curtos e simples sobre mangá e entender avaliações gerais' }, { n: 2, text: 'entender anúncios de imóveis' }, { n: 3, text: 'cancelar compromisso por mensagem' }, { n: 4, text: 'dar instruções para emergência' }], answer: 1, explanationPt: 'O Can-do 04 é ler reviews/comentários curtos e simples sobre mangá gratuito.' },
    { id: 'iro-pi-l2-3', number: 3, prompt: 'Leitura: no PR de mangás gratuitos, os gêneros ①-④ correspondem a:', choices: [{ n: 1, text: '①アクション ②ラブコメディ ③ファンタジー ④家庭・育児' }, { n: 2, text: '①料理 ②スポーツ ③歴史 ④ホラー' }, { n: 3, text: '①音楽 ②ゲーム ③ドラマ ④映画' }, { n: 4, text: '①落語 ②演劇 ③相撲 ④フットサル' }], answer: 1, explanationPt: 'O answer key marca: ① f アクション, ② a ラブコメディ, ③ c ファンタジー, ④ h 家庭・育児.' },
    { id: 'iro-pi-l2-4', number: 4, prompt: 'Nos comentários de mangá, qual conjunto traz apenas avaliações positivas segundo o gabarito?', choices: [{ n: 1, text: 'A, C, D, E, F, H, I, J' }, { n: 2, text: 'B, G, K, L' }, { n: 3, text: 'A, B, G, K' }, { n: 4, text: 'C, L, G, B' }], answer: 1, explanationPt: 'O gabarito marca como positivos A, C, D, E, F, H, I e J; B, G, K e L são negativos.' },
    { id: 'iro-pi-l2-5', number: 5, prompt: 'Qual palavra dos comentários significa "ritmo/andamento" de uma obra?', choices: [{ n: 1, text: 'テンポ' }, { n: 2, text: '主人公' }, { n: 3, text: '離婚' }, { n: 4, text: '共感' }], answer: 1, explanationPt: 'テンポ descreve o ritmo da leitura ou da narrativa.' },
    { id: 'iro-pi-l2-6', number: 6, prompt: '「あっという間に」 nos comentários indica:', choices: [{ n: 1, text: 'algo que passou muito rápido, em um instante' }, { n: 2, text: 'um personagem principal' }, { n: 3, text: 'um gênero de mangá' }, { n: 4, text: 'um pedido formal' }], answer: 1, explanationPt: 'あっという間に aparece para dizer que a pessoa leu tudo rapidamente.' },
    { id: 'iro-pi-l2-7', number: 7, prompt: '「尊い」 em comentário de fã expressa principalmente:', choices: [{ n: 1, text: 'forte admiração ou afeto por algo precioso para a pessoa' }, { n: 2, text: 'que a obra é barata' }, { n: 3, text: 'que a leitura é obrigatória' }, { n: 4, text: 'que o mangá é antigo' }], answer: 1, explanationPt: '尊い é linguagem comum de fãs para algo que desperta admiração, afeto ou sensação de preciosidade.' },
    { id: 'iro-pi-l2-8', number: 8, prompt: 'Qual item combina melhor com 「モヤモヤする」?', choices: [{ n: 1, text: 'ficar com sensação confusa, incômoda ou mal resolvida' }, { n: 2, text: 'ficar com fome' }, { n: 3, text: 'subir montanha' }, { n: 4, text: 'pedir desculpas formalmente' }], answer: 1, explanationPt: 'モヤモヤする descreve um incômodo vago, uma sensação de algo não resolvido.' },
    { id: 'iro-pi-l2-9', number: 9, prompt: 'Can-do 05: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar com certo detalhe a um amigo sobre um filme, incluindo opinião e comentários' }, { n: 2, text: 'ler contrato de aluguel' }, { n: 3, text: 'pedir informação de ônibus' }, { n: 4, text: 'explicar regras de sumô' }], answer: 1, explanationPt: 'A atividade 2 trata de conversar sobre o filme SLAM DUNK e organizar comentários sobre um filme.' },
    { id: 'iro-pi-l2-10', number: 10, prompt: '会話 02-02: sobre qual filme チェン e 石山 conversam?', image: `${IMG}/ZZ_02_2_01_eiganokansoo.png`, imageAlt: 'duas pessoas conversando sobre impressões de um filme', choices: [{ n: 1, text: '映画『スラムダンク』' }, { n: 2, text: '『孤独のグルメ』' }, { n: 3, text: '『刀剣乱舞 ONLINE』' }, { n: 4, text: '『Lemon』' }], answer: 1, explanationPt: 'チェン reconhece a pasta de 石山 e diz: スラムダンクですね. A conversa segue sobre o filme.' },
    { id: 'iro-pi-l2-11', number: 11, prompt: '会話 02-02: qual é a impressão geral de チェン sobre o filme?', choices: [{ n: 1, text: 'とてもよかった' }, { n: 2, text: '退屈だった' }, { n: 3, text: 'ひどかった' }, { n: 4, text: '全然わからなかった' }], answer: 1, explanationPt: 'チェン responde: はい、とてもよかったです.' },
    { id: 'iro-pi-l2-12', number: 12, prompt: 'Sobre o filme, quais aspectos aparecem na conversa e no gabarito?', choices: [{ n: 1, text: '映像, 印象的なシーン, 声優／俳優の演技, ストーリー, 音楽' }, { n: 2, text: '家賃, 広さ, 立地' }, { n: 3, text: '野球, 落語, バリ舞踊' }, { n: 4, text: '履歴書, 面接, 採用' }], answer: 1, explanationPt: 'O answer key lista esses aspectos como pontos tratados na atividade de escuta sobre o filme.' },
    { id: 'iro-pi-l2-13', number: 13, prompt: 'Por que チェン achou a 映像 excelente?', choices: [{ n: 1, text: 'porque o CG deixava os movimentos das pessoas muito realistas' }, { n: 2, text: 'porque o filme não tinha personagens' }, { n: 3, text: 'porque o áudio estava baixo' }, { n: 4, text: 'porque era uma peça teatral' }], answer: 1, explanationPt: 'Ele diz que provavelmente usaram CG e que 人の動きがとてもリアル.' },
    { id: 'iro-pi-l2-14', number: 14, prompt: 'Qual cena deixou チェン realmente ドキドキ?', choices: [{ n: 1, text: 'バスケットの試合のシーン' }, { n: 2, text: 'uma cena de restaurante' }, { n: 3, text: 'um show de música' }, { n: 4, text: 'uma cena de mudança de casa' }], answer: 1, explanationPt: 'Ele fala que a cena do jogo de basquete foi emocionante, com 盛り上がる演出.' },
    { id: 'iro-pi-l2-15', number: 15, prompt: 'Qual ponto negativo チェン comenta sobre o filme?', choices: [{ n: 1, text: 'a história pareceu um pouco curta e ele queria conhecer melhor cada personagem' }, { n: 2, text: 'o filme era longo demais' }, { n: 3, text: 'a música era muito alta' }, { n: 4, text: 'não havia cenas de basquete' }], answer: 1, explanationPt: 'Como não conhecia o mangá original nem o anime, チェン sentiu falta de mais contexto sobre os personagens.' },
    { id: 'iro-pi-l2-16', number: 16, prompt: '「どうでしたか？ おもしろかったでしょう？」 usa 「でしょう？」 para:', choices: [{ n: 1, text: 'pedir concordância ou confirmação sobre algo que o falante acredita ser verdade' }, { n: 2, text: 'negar uma opinião' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'marcar passado remoto' }], answer: 1, translationPt: 'Como foi? Foi interessante, não foi?', explanationPt: 'S（普通形）でしょう？ busca confirmação ou concordância do interlocutor.' },
    { id: 'iro-pi-l2-17', number: 17, prompt: 'Qual frase usa 「気がする」 de modo fiel à lição?', choices: [{ n: 1, text: 'ストーリーがちょっと短かった気がしました。' }, { n: 2, text: 'ストーリーを気がしました。' }, { n: 3, text: 'ストーリーに気がするをしました。' }, { n: 4, text: 'ストーリーで気です。' }], answer: 1, translationPt: 'Tive a impressão de que a história foi um pouco curta.', explanationPt: 'S（普通形）気がする suaviza uma impressão ou opinião, especialmente quando ela pode soar negativa.' },
    { id: 'iro-pi-l2-18', number: 18, prompt: 'Na estratégia de fala 02-05, qual expressão ajuda a ganhar tempo enquanto pensa?', choices: [{ n: 1, text: 'そうですね、えっと' }, { n: 2, text: '全巻持ってるので' }, { n: 3, text: 'お腹がすくから' }, { n: 4, text: '見る専門です' }], answer: 1, explanationPt: 'A lição apresenta そうですね, えっと, なんていうか, んー e そのー como expressões para pensar enquanto fala.' },
    { id: 'iro-pi-l2-19', number: 19, prompt: 'Can-do 06: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar com certo detalhe sobre algo de que gosta, como música, jogo, drama ou esporte' }, { n: 2, text: 'ler recibos de compra' }, { n: 3, text: 'explicar uma doença' }, { n: 4, text: 'anunciar um evento de empresa' }], answer: 1, explanationPt: 'A atividade 3 escuta e pratica explicações sobre jogos, música e dramas favoritos.' },
    { id: 'iro-pi-l2-20', number: 20, prompt: '聴解 02-07: o que 婷婷 gosta?', image: `${IMG}/ZZ_02_3_01_sukinamono.png`, imageAlt: 'pessoas conversando sobre jogos, música e dramas favoritos', choices: [{ n: 1, text: 'ゲーム, especialmente 『刀剣乱舞 ONLINE』' }, { n: 2, text: 'ドラマ, especialmente 『孤独のグルメ』' }, { n: 3, text: '音楽, especially 米津玄師' }, { n: 4, text: '落語' }], answer: 1, explanationPt: '婷婷 diz que gosta de jogos e que seu jogo favorito é 『刀剣乱舞』／『刀剣乱舞 ONLINE』.' },
    { id: 'iro-pi-l2-21', number: 21, prompt: 'Como 婷婷 explica 『刀剣乱舞 ONLINE』?', choices: [{ n: 1, text: 'um jogo em que se juntam personagens nascidos de espadas japonesas e se luta contra inimigos que tentam mudar a história' }, { n: 2, text: 'um drama em que um homem come em restaurantes' }, { n: 3, text: 'uma canção famosa de J-POP' }, { n: 4, text: 'um mangá de família e criação de filhos' }], answer: 1, explanationPt: 'A fala-chave é: 日本の刀から生まれたキャラクターを集めて、歴史を変えようとする敵と戦うってゲームです.' },
    { id: 'iro-pi-l2-22', number: 22, prompt: 'Quais pontos 婷婷 cita como atrativos de 『刀剣乱舞 ONLINE』?', choices: [{ n: 1, text: 'キャラクターがおもしろい e ゲーム以外でも楽しめる' }, { n: 2, text: 'メロディーがきれい e 歌が上手' }, { n: 3, text: '食べ方がいい e バラエティがある' }, { n: 4, text: '家賃が安い e 駅から近い' }], answer: 1, explanationPt: 'O gabarito marca esses dois pontos para 婷婷.' },
    { id: 'iro-pi-l2-23', number: 23, prompt: '聴解 02-08: o que ノン ouve com frequência?', choices: [{ n: 1, text: '音楽, especialmente 米津玄師' }, { n: 2, text: 'ゲーム, especially 刀剣乱舞' }, { n: 3, text: 'ドラマ, especially 孤独のグルメ' }, { n: 4, text: '相撲' }], answer: 1, explanationPt: 'ノン diz que ouve muita música e que, no momento, escuta muito 米津玄師.' },
    { id: 'iro-pi-l2-24', number: 24, prompt: 'Como ノン apresenta 米津玄師?', choices: [{ n: 1, text: 'um singer-songwriter japonês famoso pela canção 『Lemon』' }, { n: 2, text: 'um personagem de espada' }, { n: 3, text: 'um protagonista de mangá de basquete' }, { n: 4, text: 'um restaurante de comida japonesa' }], answer: 1, explanationPt: 'ノン diz: 日本のシンガーソングライターです。『Lemon』って曲が有名ですよ.' },
    { id: 'iro-pi-l2-25', number: 25, prompt: 'Quais pontos ノン cita sobre 米津玄師?', choices: [{ n: 1, text: 'メロディーがきれい e 曲のジャンルが広い' }, { n: 2, text: 'キャラクターがおもしろい e 舞台がある' }, { n: 3, text: '食べ方がいい e バラエティがある' }, { n: 4, text: 'ストーリーが短い e 原作が長い' }], answer: 1, explanationPt: 'ノン diz que a melodia é marcante e dá vontade de ouvir várias vezes, e que há músicas de vários estilos.' },
    { id: 'iro-pi-l2-26', number: 26, prompt: '聴解 02-09: o que アマンダ mais gosta?', choices: [{ n: 1, text: 'ドラマを見ること, especialmente 『孤独のグルメ』' }, { n: 2, text: 'jogar no celular' }, { n: 3, text: 'ler mangá de ação' }, { n: 4, text: 'cantar karaoke' }], answer: 1, explanationPt: 'アマンダ diz: 私は、ドラマを見るのがいちばん好きですね. O drama em que ela está viciada é 『孤独のグルメ』.' },
    { id: 'iro-pi-l2-27', number: 27, prompt: 'Como アマンダ explica 『孤独のグルメ』?', choices: [{ n: 1, text: 'um drama em que 五郎さん entra sozinho em restaurantes e refeitórios pelo Japão e aproveita a refeição' }, { n: 2, text: 'um jogo de espadas que protege a história' }, { n: 3, text: 'uma música de Vocaloid' }, { n: 4, text: 'um mangá de esporte escolar' }], answer: 1, explanationPt: 'A fala-chave é: 五郎さんというおじさんが、日本のあちこちで、1人で町のレストランや食堂に入って、食事を楽しむってドラマです.' },
    { id: 'iro-pi-l2-28', number: 28, prompt: 'Quais pontos アマンダ cita como atrativos de 『孤独のグルメ』?', choices: [{ n: 1, text: '食べ方がいい e バラエティがある' }, { n: 2, text: 'メロディーがきれい e ジャンルが広い' }, { n: 3, text: 'キャラクターがおもしろい e ゲーム以外でも楽しめる' }, { n: 4, text: '映像がすばらしい e CGがリアル' }], answer: 1, explanationPt: 'O gabarito marca 食べ方がいい e バラエティがある.' },
    { id: 'iro-pi-l2-29', number: 29, prompt: '「歴史を変えようとする敵と戦うってゲームです」 usa 「って」 para:', choices: [{ n: 1, text: 'explicar informalmente que tipo de jogo é' }, { n: 2, text: 'pedir concordância' }, { n: 3, text: 'cancelar uma promessa' }, { n: 4, text: 'marcar comparação formal' }], answer: 1, translationPt: 'É um jogo em que você luta contra inimigos que tentam mudar a história.', explanationPt: 'S（普通形）って N é uma forma casual de explicar ou definir algo. Em registro mais formal, a nota aponta という.' },
    { id: 'iro-pi-l2-30', number: 30, prompt: 'Na lição, 「それに」 e 「あと」 são usados para:', choices: [{ n: 1, text: 'acrescentar mais razões ou atrativos em sequência' }, { n: 2, text: 'negar a fala anterior' }, { n: 3, text: 'perguntar o preço' }, { n: 4, text: 'marcar uma obrigação legal' }], answer: 1, explanationPt: 'A nota gramatical ➍ reúne conectores como それに e あと para listar razões ou pontos de atração.' },
    { id: 'iro-pi-l2-31', number: 31, prompt: 'Kanji da lição: 共感／主人公／映像 lêem-se:', choices: [{ n: 1, text: 'きょうかん／しゅじんこう／えいぞう' }, { n: 2, text: 'ともかん／ぬしじんこう／えいが' }, { n: 3, text: 'きょうかん／しゅにんこう／うつぞう' }, { n: 4, text: 'きょうがん／しゅじんこう／えいぞう' }], answer: 1, explanationPt: '共感 = empatia/identificação; 主人公 = protagonista; 映像 = imagem/vídeo.' },
    { id: 'iro-pi-l2-32', number: 32, prompt: 'Kanji da lição: 原作／歌詞／俳優 lêem-se:', choices: [{ n: 1, text: 'げんさく／かし／はいゆう' }, { n: 2, text: 'はらさく／うたことば／はいゆ' }, { n: 3, text: 'げんさく／かじ／はいゆう' }, { n: 4, text: 'げんつく／かし／はいゆう' }], answer: 1, explanationPt: '原作 = obra original; 歌詞 = letra de música; 俳優 = ator.' },
    { id: 'iro-pi-l2-33', number: 33, prompt: 'Kanji da lição: お腹／深み／演じる／探す／死ぬ lêem-se:', choices: [{ n: 1, text: 'おなか／ふかみ／えんじる／さがす／しぬ' }, { n: 2, text: 'おはら／しんみ／えんじる／たずねる／しぬ' }, { n: 3, text: 'おなか／ふかみ／やんじる／さがす／しぬ' }, { n: 4, text: 'おなか／ふかみ／えんじる／さがす／しなない' }], answer: 1, explanationPt: 'Esses são os kanji e leituras apresentados na seção 漢字のことば.' },
    { id: 'iro-pi-l2-34', number: 34, prompt: 'Qual frase usa um kanji da lição no contexto correto?', choices: [{ n: 1, text: '原作では、主人公は死んでしまいます。' }, { n: 2, text: '原作では、主人公は勝ってしまいます。' }, { n: 3, text: '原作では、主人公は探してしまいます。' }, { n: 4, text: '原作では、主人公は座ってしまいます。' }], answer: 1, explanationPt: 'Esta é uma das frases-modelo da seção de kanji.' },
    { id: 'iro-pi-l2-35', number: 35, prompt: 'TIPS: sobre apps de mangá, qual afirmação está correta?', choices: [{ n: 1, text: 'há serviços para smartphone/tablet com capítulos grátis, leitura após anúncios ou espera por tempo' }, { n: 2, text: 'mangá só pode ser lido em revista impressa' }, { n: 3, text: 'todos os mangás digitais são proibidos no Japão' }, { n: 4, text: 'apps de mangá não têm comentários de leitores' }], answer: 1, explanationPt: 'A TIPS apresenta serviços de mangá em app e modos comuns de leitura gratuita ou parcial.' },
    { id: 'iro-pi-l2-36', number: 36, prompt: 'TIPS: 「オノマトペ」 são:', choices: [{ n: 1, text: 'palavras que expressam sons, movimentos, estados ou sentimentos, como ワンワン e イライラ' }, { n: 2, text: 'nomes de restaurantes reais' }, { n: 3, text: 'apenas nomes de personagens' }, { n: 4, text: 'regras de conjugação de passado' }], answer: 1, explanationPt: 'A lição mostra onomatopeias como ワンワン, ピューピュー, ごろごろ, ピカピカ, イライラ, わくわく, ガーン, ザーザー, ポツポツ, しとしと e シーン.' },
    { id: 'iro-pi-l2-37', number: 37, prompt: 'TIPS: o que a dica sobre ふりがな especial explica?', choices: [{ n: 1, text: 'em mangás e letras, furigana pode indicar leitura criativa ou significado, não só a leitura padrão' }, { n: 2, text: 'furigana é proibido em mangá' }, { n: 3, text: 'furigana serve apenas para números' }, { n: 4, text: 'furigana sempre deve ser removido' }], answer: 1, explanationPt: 'A TIPS mostra que furigana pode ser usado de forma especial para efeito expressivo em mangá e letras de música.' },
    { id: 'iro-pi-l2-38', number: 38, prompt: 'TIPS: sobre 『SLAM DUNK』, qual resumo está correto?', choices: [{ n: 1, text: 'mangá de basquete de Inoue Takehiko, publicado de 1990 a 1996, com crescimento de Sakuragi Hanamichi e dramas dos personagens' }, { n: 2, text: 'jogo online de espadas iniciado em 2015' }, { n: 3, text: 'drama gourmet sobre restaurantes' }, { n: 4, text: 'música de 米津玄師' }], answer: 1, explanationPt: 'A TIPS resume SLAM DUNK como mangá de basquete ainda amado e menciona o filme THE FIRST SLAM DUNK de 2022.' },
    { id: 'iro-pi-l2-39', number: 39, prompt: 'TIPS: 「マンガのメディア展開」 quer dizer que mangás populares podem virar:', choices: [{ n: 1, text: 'anime, filmes, dramas live-action, peças, musicais e até colaborações como kabuki' }, { n: 2, text: 'somente livros de gramática' }, { n: 3, text: 'apenas anúncios de imóveis' }, { n: 4, text: 'somente aplicativos bancários' }], answer: 1, explanationPt: 'A TIPS menciona adaptações de mangá para várias mídias e o termo 2.5次元 para obras de palco/musical baseadas em mundos 2D.' },
    { id: 'iro-pi-l2-40', number: 40, prompt: 'TIPS: 『刀剣乱舞 ONLINE』 é descrito como:', choices: [{ n: 1, text: 'jogo online popular em que espadas japonesas viram personagens; também tem anime, palco e musicais' }, { n: 2, text: 'um mangá de basquete escolar' }, { n: 3, text: 'um drama sobre comida' }, { n: 4, text: 'uma onomatopeia para chuva' }], answer: 1, explanationPt: 'A dica diz que o serviço começou em 2015 e que o boom também levou fãs a museus e santuários com espadas reais.' },
    { id: 'iro-pi-l2-41', number: 41, prompt: 'TIPS: sobre 米津玄師, qual afirmação está correta?', choices: [{ n: 1, text: 'começou na internet como ハチ, passou a atuar com seu nome real em 2012 e é conhecido por músicas como 『Lemon』' }, { n: 2, text: 'é o protagonista de 『孤独のグルメ』' }, { n: 3, text: 'é um time de basquete' }, { n: 4, text: 'é uma palavra para furigana especial' }], answer: 1, explanationPt: 'A TIPS cita sua trajetória, músicas conhecidas, canções-tema e estilo com melodias únicas, letras profundas e variedade de gêneros.' },
    { id: 'iro-pi-l2-42', number: 42, prompt: 'TIPS: o que caracteriza os グルメドラマ como 『孤独のグルメ』?', choices: [{ n: 1, text: 'obras centradas em comida, muitas vezes baseadas em mangá ou ensaio, com restaurantes e pratos reais que podem motivar 聖地巡礼' }, { n: 2, text: 'obras sem relação com restaurantes' }, { n: 3, text: 'apenas manuais de cozinha escolar' }, { n: 4, text: 'jogos sobre personagens de espada' }], answer: 1, explanationPt: 'A TIPS apresenta 『孤独のグルメ』 e outros dramas gourmet como porta de entrada para a cultura alimentar japonesa.' },
  ],
}

// ---- Lição 3: 引っ越しの準備はどうですか？ (tópico どこに住む？) ----
const lesson3Group: ExerciseGroup = {
  id: 'iro-pi-l3',
  title: '引っ越しの準備はどうですか？',
  subtitlePt: 'Informações de imóveis · bairros recomendados · pedir ajuda na mudança',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l3-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: 'どこに住む？ (onde morar?)' }, { n: 2, text: '好きなもの好きなこと' }, { n: 3, text: '旅行の楽しみ' }, { n: 4, text: '自然と環境' }], answer: 1, explanationPt: 'A Lição 3 abre o tópico どこに住む？ e trata de procurar quarto, escolher bairro e pedir ajuda para mudança.' },
    { id: 'iro-pi-l3-2', number: 2, prompt: 'Pergunta de abertura: 引っ越しをするなら、どんな部屋に住みたいですか？', choices: [{ n: 1, text: 'Que tipo de quarto/casa você gostaria se fosse se mudar?' }, { n: 2, text: 'Que música você escuta?' }, { n: 3, text: 'Qual esporte você pratica?' }, { n: 4, text: 'Você quer cancelar o compromisso?' }], answer: 1, explanationPt: 'A abertura pergunta sobre experiência de mudança e sobre o tipo de moradia desejada.' },
    { id: 'iro-pi-l3-3', number: 3, prompt: 'Can-do 07: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ver informações de imóvel em site de moradia e encontrar dados como aluguel, tamanho e localização' }, { n: 2, text: 'dar opinião sobre um filme' }, { n: 3, text: 'convidar para uma apresentação' }, { n: 4, text: 'explicar uma receita' }], answer: 1, explanationPt: 'A atividade 1 é leitura de 物件情報 em um 住宅情報サイト.' },
    { id: 'iro-pi-l3-4', number: 4, prompt: 'Em 物件情報, A-F correspondem a quais pontos?', image: `${IMG}/ZZ_03_1_01_bukkenjoohoo.png`, imageAlt: 'exemplo de informação de imóvel em site japonês', choices: [{ n: 1, text: '家賃, 交通, 築年数, 間取り, 部屋の階, 設備' }, { n: 2, text: '映画, 音楽, ゲーム, ドラマ, 読書, マンガ' }, { n: 3, text: '応援, 演劇, 落語, バリ舞踊, 相撲, 登山' }, { n: 4, text: '朝食, 昼食, 夕食, 会計, 予約, 注文' }], answer: 1, explanationPt: 'Esses são os seis pontos que a lição pede para localizar no anúncio.' },
    { id: 'iro-pi-l3-5', number: 5, prompt: '「ワンルーム」 significa:', choices: [{ n: 1, text: '間取り com apenas um cômodo' }, { n: 2, text: 'prédio de cinco andares' }, { n: 3, text: 'quarto japonês com tatami' }, { n: 4, text: 'aluguel mensal' }], answer: 1, explanationPt: 'O gabarito explica ワンルーム como 部屋が1つしかない間取り.' },
    { id: 'iro-pi-l3-6', number: 6, prompt: '「2K」 no contexto de imóvel indica:', choices: [{ n: 1, text: 'dois cômodos e uma cozinha' }, { n: 2, text: 'dois banheiros' }, { n: 3, text: 'dois meses de aluguel' }, { n: 4, text: 'dois apartamentos no mesmo prédio' }], answer: 1, explanationPt: 'O gabarito define 2K como 部屋が2つとキッチンがある間取り.' },
    { id: 'iro-pi-l3-7', number: 7, prompt: '「2LDK」 no contexto de imóvel indica:', choices: [{ n: 1, text: 'dois cômodos mais sala de estar, sala de jantar e cozinha' }, { n: 2, text: 'quarto só de estilo japonês' }, { n: 3, text: 'dois andares com elevador' }, { n: 4, text: 'dois contratos de aluguel' }], answer: 1, explanationPt: '2LDK = 部屋が2つとリビングとダイニングキッチンがある間取り.' },
    { id: 'iro-pi-l3-8', number: 8, prompt: '「和」 e 「洋」 em anúncios de imóvel referem-se a:', choices: [{ n: 1, text: '和室 e 洋室' }, { n: 2, text: 'água quente e água fria' }, { n: 3, text: 'cidade e campo' }, { n: 4, text: 'sim e não' }], answer: 1, explanationPt: '和 indica quarto japonês; 洋 indica quarto ocidental.' },
    { id: 'iro-pi-l3-9', number: 9, prompt: 'Qual imóvel tem como característica 「駅や商店街が近くて便利」?', choices: [{ n: 1, text: '①ルスコアール' }, { n: 2, text: '②高田ハイツ' }, { n: 3, text: '③グランヒルズ壱番館' }, { n: 4, text: '④つばき荘' }], answer: 1, explanationPt: 'O answer key associa ①ルスコアール à característica b: estação e rua comercial próximas e convenientes.' },
    { id: 'iro-pi-l3-10', number: 10, prompt: 'Qual imóvel tem 「キッチンが広い」?', choices: [{ n: 1, text: '②高田ハイツ' }, { n: 2, text: '①ルスコアール' }, { n: 3, text: '③グランヒルズ壱番館' }, { n: 4, text: '④つばき荘' }], answer: 1, explanationPt: 'O gabarito marca ②高田ハイツ como c: cozinha ampla.' },
    { id: 'iro-pi-l3-11', number: 11, prompt: 'Qual imóvel tem 「部屋が新しい」?', choices: [{ n: 1, text: '③グランヒルズ壱番館' }, { n: 2, text: '①ルスコアール' }, { n: 3, text: '②高田ハイツ' }, { n: 4, text: '④つばき荘' }], answer: 1, explanationPt: 'O gabarito marca ③グランヒルズ壱番館 como a: quarto novo.' },
    { id: 'iro-pi-l3-12', number: 12, prompt: 'Qual imóvel tem 「家賃が安い」?', choices: [{ n: 1, text: '④つばき荘' }, { n: 2, text: '①ルスコアール' }, { n: 3, text: '②高田ハイツ' }, { n: 4, text: '③グランヒルズ壱番館' }], answer: 1, explanationPt: 'O gabarito marca ④つばき荘 como d: aluguel barato.' },
    { id: 'iro-pi-l3-13', number: 13, prompt: 'Can-do 08: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ouvir comentários simples sobre bairros recomendados para mudança e entender os motivos' }, { n: 2, text: 'ler reviews de mangá' }, { n: 3, text: 'pedir reparo de ar-condicionado' }, { n: 4, text: 'fazer check-in em hotel' }], answer: 1, explanationPt: 'A atividade 2 é uma conversa em que 馬 pede recomendações de bairro para se mudar.' },
    { id: 'iro-pi-l3-14', number: 14, prompt: '聴解 03-01: 月見台 é apresentado como que tipo de bairro?', image: `${IMG}/ZZ_03_2_03_oshare.png`, imageAlt: 'bairro com cafés e lojas elegantes', choices: [{ n: 1, text: 'おしゃれな町' }, { n: 2, text: '下町っぽい町' }, { n: 3, text: '郊外の住宅地' }, { n: 4, text: '国際的な町' }], answer: 1, explanationPt: '月見台 tem cafés e lojas de roupa elegantes e ficou em 1º em ranking de bairros onde se quer morar.' },
    { id: 'iro-pi-l3-15', number: 15, prompt: '月見台のいいところ／よくないところ são:', choices: [{ n: 1, text: 'いい: おしゃれなカフェがある; よくない: 家賃が高い, 安いスーパーがない' }, { n: 2, text: 'いい: 商店街がある; よくない: 夜はうるさい' }, { n: 3, text: 'いい: 住宅地で静か; よくない: 交通が不便' }, { n: 4, text: 'いい: 国際的でおもしろい; よくない: 会社から遠い' }], answer: 1, explanationPt: 'O answer key marca 月見台: a como ponto bom, h e j como pontos ruins.' },
    { id: 'iro-pi-l3-16', number: 16, prompt: '聴解 03-02: 芝浜 é descrito como:', image: `${IMG}/ZZ_03_2_05_shominteki.png`, imageAlt: 'bairro popular com rua comercial', choices: [{ n: 1, text: '庶民的で、下町っぽい雰囲気' }, { n: 2, text: '高級で静かな住宅地' }, { n: 3, text: '会社から遠い国際都市' }, { n: 4, text: 'novo condomínio de luxo' }], answer: 1, explanationPt: '芝浜 é um bairro popular, com 商店街, lojas de 惣菜 e 定食屋.' },
    { id: 'iro-pi-l3-17', number: 17, prompt: '芝浜のいいところ／よくないところ são:', choices: [{ n: 1, text: 'いい: 商店街がある, 家賃が高くない; よくない: 夜はうるさい' }, { n: 2, text: 'いい: 大きな公園がある; よくない: 交通が不便' }, { n: 3, text: 'いい: 外国語の不動産屋; よくない: 会社から遠い' }, { n: 4, text: 'いい: おしゃれなカフェ; よくない: 安いスーパーがない' }], answer: 1, explanationPt: 'O answer key marca 芝浜: c e f como pontos bons, k como ponto ruim.' },
    { id: 'iro-pi-l3-18', number: 18, prompt: '聴解 03-03: 北ニュータウン é recomendado por quê?', image: `${IMG}/ZZ_03_2_02_koogai.png`, imageAlt: 'bairro residencial suburbano com parque grande', choices: [{ n: 1, text: 'é uma área residencial quieta e tem um parque grande' }, { n: 2, text: 'tem muitos cafés de luxo' }, { n: 3, text: 'tem muitos restaurantes internacionais' }, { n: 4, text: 'fica dentro da empresa' }], answer: 1, explanationPt: '同僚3 diz que é 住宅地で静か e tem 大きな公園.' },
    { id: 'iro-pi-l3-19', number: 19, prompt: '北ニュータウンのよくないところ é:', choices: [{ n: 1, text: '交通が不便' }, { n: 2, text: '夜はうるさい' }, { n: 3, text: '会社から遠い' }, { n: 4, text: '家賃が高い' }], answer: 1, explanationPt: 'Como só há ônibus, o gabarito marca i: 交通が不便.' },
    { id: 'iro-pi-l3-20', number: 20, prompt: '聴解 03-04: 沢口のいいところ／よくないところ são:', image: `${IMG}/ZZ_03_2_04_takokuseki.png`, imageAlt: 'bairro internacional com mercados e restaurantes estrangeiros', choices: [{ n: 1, text: 'いい: 国際的でおもしろい, 外国語が話せる不動産屋がある; よくない: 会社から遠い' }, { n: 2, text: 'いい: 静か, 公園がある; よくない: バスしかない' }, { n: 3, text: 'いい: 家賃が安い, 商店街; よくない: 夜がうるさい' }, { n: 4, text: 'いい: カフェ; よくない: スーパーがない' }], answer: 1, explanationPt: 'O answer key marca 沢口: b e d como bons, l como ruim.' },
    { id: 'iro-pi-l3-21', number: 21, prompt: '「住むなら、どのあたりがおすすめですか？」 usa 「なら」 para:', choices: [{ n: 1, text: 'apresentar uma condição ou premissa: se eu fosse morar' }, { n: 2, text: 'marcar uma obrigação' }, { n: 3, text: 'descrever som de chuva' }, { n: 4, text: 'pedir desculpas' }], answer: 1, translationPt: 'Se eu fosse morar, que área você recomenda?', explanationPt: 'S（普通形）なら apresenta uma condição/premissa antes de uma pergunta ou sugestão.' },
    { id: 'iro-pi-l3-22', number: 22, prompt: 'Qual frase usa corretamente 「なら」 como na lição?', choices: [{ n: 1, text: '家賃が安いところがいいなら、芝浜はどう？' }, { n: 2, text: '家賃が安いところをなら、芝浜はどう？' }, { n: 3, text: '家賃が安いならところ、芝浜はどう？' }, { n: 4, text: '家賃なら安いところを、芝浜はどう？' }], answer: 1, translationPt: 'Se você quer um lugar com aluguel barato, que tal Shibahama?', explanationPt: 'なら vem depois da condição/premissa: 家賃が安いところがいいなら.' },
    { id: 'iro-pi-l3-23', number: 23, prompt: '「下町っぽい雰囲気ですね」 significa:', choices: [{ n: 1, text: 'tem uma atmosfera que lembra um bairro popular/antigo' }, { n: 2, text: 'é um bairro totalmente novo' }, { n: 3, text: 'tem aluguel caro' }, { n: 4, text: 'fica no norte da cidade' }], answer: 1, explanationPt: 'Nっぽい indica que algo tem aparência, sensação ou traço parecido com N.' },
    { id: 'iro-pi-l3-24', number: 24, prompt: 'Can-do 09: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'pedir ajuda a amigo/colega para mudança e aceitar ou recusar quando pedirem ajuda' }, { n: 2, text: 'fazer comentário de mangá' }, { n: 3, text: 'consultar previsão do tempo' }, { n: 4, text: 'comprar ingresso de cinema' }], answer: 1, explanationPt: 'A atividade 3 é sobre pedir ajuda para mudança usando uma forma educada.' },
    { id: 'iro-pi-l3-25', number: 25, prompt: '会話 03-07: quem está se mudando?', image: `${IMG}/ZZ_03_3_01_hikkoshi.png`, imageAlt: 'colegas conversando sobre ajuda em mudança', choices: [{ n: 1, text: 'スジャンさん' }, { n: 2, text: '堀川さん' }, { n: 3, text: '町村さん' }, { n: 4, text: 'イムランさん' }], answer: 1, explanationPt: 'No almoço, os colegas falam sobre a mudança de スジャンさん.' },
    { id: 'iro-pi-l3-26', number: 26, prompt: 'スジャンさん está ocupado agora com quê?', choices: [{ n: 1, text: '荷物をまとめたり、掃除をしたりしている' }, { n: 2, text: 'procurando filme para assistir' }, { n: 3, text: 'preparando apresentação de teatro' }, { n: 4, text: 'reservando restaurante' }], answer: 1, explanationPt: 'Ele diz: 今、荷物をまとめたり、掃除をしたりして、大変です.' },
    { id: 'iro-pi-l3-27', number: 27, prompt: 'スジャンさん já reservou empresa de mudança?', choices: [{ n: 1, text: 'não; como mora sozinho e não tem muita bagagem, pretende carregar por conta própria' }, { n: 2, text: 'sim; reservou duas empresas' }, { n: 3, text: 'sim; a empresa paga tudo' }, { n: 4, text: 'não; ele desistiu da mudança' }], answer: 1, explanationPt: 'Ele diz que não reservou 引っ越し業者 e que 自分で運ぶつもりです.' },
    { id: 'iro-pi-l3-28', number: 28, prompt: 'Qual é a data da mudança de スジャンさん?', choices: [{ n: 1, text: '今月の30日' }, { n: 2, text: '来月の1日' }, { n: 3, text: '今週の木曜日' }, { n: 4, text: '日曜日の10時' }], answer: 1, explanationPt: '堀川 pergunta a data e スジャン responde: 今月の30日です.' },
    { id: 'iro-pi-l3-29', number: 29, prompt: '堀川さん ajuda com quê?', choices: [{ n: 1, text: '荷物を運ぶのを手伝う' }, { n: 2, text: '会社を探す' }, { n: 3, text: '映画を貸す' }, { n: 4, text: '家賃を払う' }], answer: 1, explanationPt: 'O gabarito marca tarefas relacionadas a transportar as caixas e coisas da mudança.' },
    { id: 'iro-pi-l3-30', number: 30, prompt: '町村さん oferece o quê?', choices: [{ n: 1, text: '車を出して、運転もする' }, { n: 2, text: 'preparar o jantar sozinho' }, { n: 3, text: 'comprar geladeira nova' }, { n: 4, text: 'reservar empresa de mudança' }], answer: 1, explanationPt: '町村 diz: 私の車を出しましょうか？ 運転もしますよ.' },
    { id: 'iro-pi-l3-31', number: 31, prompt: 'イムランさん responde como?', choices: [{ n: 1, text: 'recusa, pois naquele dia tem planos' }, { n: 2, text: 'aceita e dirige' }, { n: 3, text: 'empresta o apartamento' }, { n: 4, text: 'não aparece na conversa' }], answer: 1, explanationPt: 'イムラン diz: その日はちょっと予定が……。すみません.' },
    { id: 'iro-pi-l3-32', number: 32, prompt: '「引っ越しを手伝ってもらえたら、とてもありがたいんですが」 é usado para:', choices: [{ n: 1, text: 'pedir ajuda de forma educada, expressando que seria grato' }, { n: 2, text: 'dar uma ordem direta' }, { n: 3, text: 'confirmar uma memória esquecida' }, { n: 4, text: 'descrever um bairro antigo' }], answer: 1, translationPt: 'Eu ficaria muito grato se você pudesse me ajudar na mudança.', explanationPt: 'V-てもらえたら + ありがたい／助かる／うれしい comunica educadamente o que você gostaria que a pessoa fizesse.' },
    { id: 'iro-pi-l3-33', number: 33, prompt: 'Qual frase segue o padrão da lição?', choices: [{ n: 1, text: '荷物を運ぶのを手伝ってもらえたら、とても助かります。' }, { n: 2, text: '荷物を運ぶのを手伝ってもらえたらを助かります。' }, { n: 3, text: '荷物を運ぶのを手伝ってもらえたらです。' }, { n: 4, text: '荷物を運ぶのを手伝ってもらえます助かる。' }], answer: 1, explanationPt: 'O gabarito da forma traz exatamente: 荷物を運ぶのを手伝ってもらえたら、とても助かります.' },
    { id: 'iro-pi-l3-34', number: 34, prompt: 'Kanji da lição: 引っ越し／家賃／築～年 lêem-se:', choices: [{ n: 1, text: 'ひっこし／やちん／ちく～ねん' }, { n: 2, text: 'ひきこし／いえちん／きず～ねん' }, { n: 3, text: 'ひっこし／かちん／ちく～とし' }, { n: 4, text: 'いんこし／やちん／ちく～ねん' }], answer: 1, explanationPt: 'Esses são kanji centrais para leitura de informações de imóvel.' },
    { id: 'iro-pi-l3-35', number: 35, prompt: 'Kanji da lição: 住宅地／荷物／冷蔵庫／電子レンジ lêem-se:', choices: [{ n: 1, text: 'じゅうたくち／にもつ／れいぞうこ／でんしレンジ' }, { n: 2, text: 'すみたくち／かもつ／れいくらこ／でんこレンジ' }, { n: 3, text: 'じゅうたくち／にもつ／れいぞうこ／でんじレンジ' }, { n: 4, text: 'じゅうたくじ／にもつ／ひょうぞうこ／でんしレンジ' }], answer: 1, explanationPt: '住宅地 = área residencial; 荷物 = bagagem/carga; 冷蔵庫 = geladeira; 電子レンジ = micro-ondas.' },
    { id: 'iro-pi-l3-36', number: 36, prompt: 'TIPS: 畳 e 坪 são unidades para:', choices: [{ n: 1, text: 'expressar área/tamanho de quartos, imóveis e terrenos' }, { n: 2, text: 'medir arroz e saquê' }, { n: 3, text: 'contar pessoas em uma equipe' }, { n: 4, text: 'classificar músicas' }], answer: 1, explanationPt: '畳 é usado para tamanho de quarto; 坪 para áreas maiores, como terreno e área construída.' },
    { id: 'iro-pi-l3-37', number: 37, prompt: 'TIPS: 合 e 升 são unidades tradicionais para:', choices: [{ n: 1, text: 'quantidade de líquidos e grãos, como arroz e saquê' }, { n: 2, text: 'distância até estação' }, { n: 3, text: 'idade do prédio' }, { n: 4, text: 'número de andares' }], answer: 1, explanationPt: '1合 = 180 ml; 1升 = 10合 = 1800 ml.' },
    { id: 'iro-pi-l3-38', number: 38, prompt: 'TIPS: ao alugar quarto no Japão, 敷金 e 礼金 são:', choices: [{ n: 1, text: 'depósito de segurança e luva/agradecimento ao proprietário' }, { n: 2, text: 'luz e água' }, { n: 3, text: 'dois tipos de bairro' }, { n: 4, text: 'duas formas de pedir ajuda' }], answer: 1, explanationPt: '敷金 costuma servir como garantia; 礼金 normalmente não é devolvido.' },
    { id: 'iro-pi-l3-39', number: 39, prompt: 'TIPS: sobre 引っ越しの手続き, qual afirmação está correta?', choices: [{ n: 1, text: 'é preciso avisar saída, fazer trâmites na prefeitura, organizar serviços e atualizar endereço após mudar' }, { n: 2, text: 'não há nenhum procedimento ao mudar de endereço' }, { n: 3, text: 'só é preciso comprar móveis' }, { n: 4, text: 'o procedimento é apenas assistir a um vídeo' }], answer: 1, explanationPt: 'A TIPS lista avisar locador/imobiliária, 転出届/転入届, serviços públicos, correio e atualização de documentos/endereço.' },
  ],
}

// ---- Lição 4: エアコンが壊れたみたいなんですが… (tópico どこに住む？) ----
const lesson4Group: ExerciseGroup = {
  id: 'iro-pi-l4',
  title: 'エアコンが壊れたみたいなんですが…',
  subtitlePt: 'Problemas em casa · reclamações de moradia · falar sobre onde mora',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l4-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: 'どこに住む？ (onde morar?)' }, { n: 2, text: '毎日の食事' }, { n: 3, text: '旅行に行こう' }, { n: 4, text: '地域のイベント' }], answer: 1, explanationPt: 'A Lição 4 continua o tópico どこに住む？, agora com problemas da moradia, reclamações e experiência de morar em determinado lugar.' },
    { id: 'iro-pi-l4-2', number: 2, prompt: 'Pergunta de abertura: 今、どんなところに住んでいますか？ その部屋／家は、気に入っていますか？', choices: [{ n: 1, text: 'Que tipo de lugar você mora agora? Gosta desse quarto/casa?' }, { n: 2, text: 'Que comida japonesa você prefere?' }, { n: 3, text: 'Que esporte você pratica?' }, { n: 4, text: 'Que filme você viu ontem?' }], answer: 1, explanationPt: 'A abertura conecta a lição à experiência pessoal de moradia.' },
    { id: 'iro-pi-l4-3', number: 3, prompt: 'Can-do 10: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'relatar a um gerente/imobiliária um problema da casa e receber uma providência' }, { n: 2, text: 'pedir opinião sobre filme' }, { n: 3, text: 'cancelar convite por mensagem' }, { n: 4, text: 'ler cardápio de restaurante' }], answer: 1, explanationPt: 'A atividade 1 é sobre 家に関する問題: reportar problemas como vazamento, ar-condicionado quebrado, ninho de vespa ou chave perdida.' },
    { id: 'iro-pi-l4-4', number: 4, prompt: 'Vocabulário: エアコンが壊れた significa:', image: `${IMG}/ZZ_04_1_01_eakon.png`, imageAlt: 'ar-condicionado quebrado', choices: [{ n: 1, text: 'o ar-condicionado quebrou' }, { n: 2, text: 'a janela quebrou' }, { n: 3, text: 'a chave sumiu' }, { n: 4, text: 'a água não sai' }], answer: 1, explanationPt: 'エアコン = ar-condicionado; 壊れた = quebrou.' },
    { id: 'iro-pi-l4-5', number: 5, prompt: 'Vocabulário: 換気扇が動かない significa:', image: `${IMG}/ZZ_04_1_02_kankisen.png`, imageAlt: 'exaustor que não funciona', choices: [{ n: 1, text: 'o exaustor/ventilador de ventilação não funciona' }, { n: 2, text: 'o banheiro entupiu' }, { n: 3, text: 'a água está vazando' }, { n: 4, text: 'a luz não acende' }], answer: 1, explanationPt: '換気扇 é o ventilador/exaustor de ventilação; 動かない = não se move/não funciona.' },
    { id: 'iro-pi-l4-6', number: 6, prompt: 'Vocabulário: 水漏れしている significa:', image: `${IMG}/ZZ_04_1_08_mizumore.png`, imageAlt: 'vazamento de água', choices: [{ n: 1, text: 'está vazando água' }, { n: 2, text: 'não há água quente' }, { n: 3, text: 'o Wi-Fi não conecta' }, { n: 4, text: 'há uma vespa no quarto' }], answer: 1, explanationPt: '水漏れ = vazamento de água.' },
    { id: 'iro-pi-l4-7', number: 7, prompt: 'Vocabulário: 鍵をなくした significa:', image: `${IMG}/ZZ_04_1_09_kagi.png`, imageAlt: 'chave perdida', choices: [{ n: 1, text: 'perdi a chave' }, { n: 2, text: 'a janela quebrou' }, { n: 3, text: 'a luz não acende' }, { n: 4, text: 'há fezes de pássaro' }], answer: 1, explanationPt: '鍵 = chave; なくした = perdi.' },
    { id: 'iro-pi-l4-8', number: 8, prompt: '聴解 04-03: qual é o problema?', image: `${IMG}/ZZ_04_1_08_mizumore.png`, imageAlt: 'vazamento embaixo da pia', choices: [{ n: 1, text: '洗面台が水漏れしている' }, { n: 2, text: 'エアコンが壊れた' }, { n: 3, text: 'ハチの巣ができた' }, { n: 4, text: '鍵をなくした' }], answer: 1, explanationPt: 'カリモフ・ハサン relata que a água está vazando embaixo da pia: 洗面台の下から、水が漏れている.' },
    { id: 'iro-pi-l4-9', number: 9, prompt: '聴解 04-03: o que a pessoa deve fazer depois?', choices: [{ n: 1, text: 'esperar o técnico no quarto' }, { n: 2, text: 'procurar uma empresa por conta própria' }, { n: 3, text: 'esperar o proprietário na frente do quarto' }, { n: 4, text: 'ir ao shopping perguntar' }], answer: 1, explanationPt: 'A imobiliária diz: 修理業者を手配しますので、お部屋でお待ちください.' },
    { id: 'iro-pi-l4-10', number: 10, prompt: '聴解 04-04: qual é a situação do ar-condicionado?', choices: [{ n: 1, text: 'mesmo no modo resfriamento, não sai ar frio' }, { n: 2, text: 'o controle remoto foi roubado' }, { n: 3, text: 'a água quente não sai' }, { n: 4, text: 'o Wi-Fi cai à noite' }], answer: 1, explanationPt: 'バヤルマー explica: 冷房にしても、冷たい空気が出てこないんです.' },
    { id: 'iro-pi-l4-11', number: 11, prompt: '聴解 04-04: o que acontecerá depois?', choices: [{ n: 1, text: 'a pessoa deve esperar contato do prestador de serviço' }, { n: 2, text: 'ela deve comprar outro aparelho imediatamente' }, { n: 3, text: 'o proprietário levará uma chave reserva' }, { n: 4, text: 'ela deve ir à delegacia' }], answer: 1, explanationPt: 'A fala diz: あとで業者から連絡がありますので、少しお待ちください.' },
    { id: 'iro-pi-l4-12', number: 12, prompt: '聴解 04-05: onde está o ninho de vespa?', image: `${IMG}/ZZ_04_1_11_hachinosu.png`, imageAlt: 'ninho de vespa na varanda', choices: [{ n: 1, text: 'na varanda, no teto' }, { n: 2, text: 'embaixo da pia' }, { n: 3, text: 'no shopping' }, { n: 4, text: 'na cozinha' }], answer: 1, explanationPt: 'ソヌミ diz que o ninho está no teto da varanda: ベランダの天井です.' },
    { id: 'iro-pi-l4-13', number: 13, prompt: '聴解 04-05: por que a imobiliária não resolve diretamente?', choices: [{ n: 1, text: 'porque ninhos em varandas de quartos ficam sob responsabilidade do morador' }, { n: 2, text: 'porque não há vespas no Japão' }, { n: 3, text: 'porque o quarto não existe' }, { n: 4, text: 'porque o morador deve mudar de bairro' }], answer: 1, explanationPt: 'A empresa explica que áreas comuns seriam responsabilidade dela, mas a varanda de cada quarto fica a cargo do入居者.' },
    { id: 'iro-pi-l4-14', number: 14, prompt: '聴解 04-06: quando ヴィレアック acha que perdeu a chave?', choices: [{ n: 1, text: 'quando foi fazer compras' }, { n: 2, text: 'quando pegou ônibus' }, { n: 3, text: 'durante uma mudança' }, { n: 4, text: 'quando foi ao restaurante' }], answer: 1, explanationPt: 'Ele diz: 買い物に行ったときになくしたみたいです.' },
    { id: 'iro-pi-l4-15', number: 15, prompt: '聴解 04-06: o que o proprietário fará?', choices: [{ n: 1, text: 'levará a chave reserva e a pessoa deve esperar na frente do quarto' }, { n: 2, text: 'mandará procurar uma empresa de vespas' }, { n: 3, text: 'pedirá o número de telefone do técnico' }, { n: 4, text: 'fará uma reunião com todos os moradores' }], answer: 1, explanationPt: '榎本 diz que tem uma 合鍵 e vai levá-la; pede para esperar na frente do quarto.' },
    { id: 'iro-pi-l4-16', number: 16, prompt: '「エアコンが壊れたみたいなんですが……」 usa みたい para:', choices: [{ n: 1, text: 'dizer uma conclusão provável baseada no que percebeu, evitando afirmar de forma absoluta' }, { n: 2, text: 'dar uma ordem direta' }, { n: 3, text: 'marcar futuro decidido' }, { n: 4, text: 'indicar obrigação legal' }], answer: 1, translationPt: 'Parece que o ar-condicionado quebrou...', explanationPt: 'S（普通形）みたいだ expressa julgamento baseado no que se viu, sentiu ou experimentou.' },
    { id: 'iro-pi-l4-17', number: 17, prompt: 'Qual frase usa corretamente 「S（普通形）みたいだ」?', choices: [{ n: 1, text: '買い物に行ったときになくしたみたいです。' }, { n: 2, text: '買い物に行ったときになくしたのみたいです。' }, { n: 3, text: '買い物に行ったときになくすみたいしました。' }, { n: 4, text: '買い物に行ったときになくしたみたいをです。' }], answer: 1, explanationPt: 'みたい vem depois da forma comum. A frase da lição é 買い物に行ったときになくしたみたいです.' },
    { id: 'iro-pi-l4-18', number: 18, prompt: 'Na fala da imobiliária, お電話番号／ご都合 usam お／ご para:', choices: [{ n: 1, text: 'mostrar respeito ao falar de algo ligado ao ouvinte' }, { n: 2, text: 'marcar passado' }, { n: 3, text: 'criar voz passiva' }, { n: 4, text: 'contar objetos' }], answer: 1, explanationPt: 'A nota gramatical explica que お／ご + N expressa respeito ao ouvinte, especialmente em atendimento ao cliente.' },
    { id: 'iro-pi-l4-19', number: 19, prompt: '「お部屋でお待ちください」 e 「業者に直接ご連絡ください」 são exemplos de:', choices: [{ n: 1, text: 'お／ご + V + ください, pedido ou instrução polida' }, { n: 2, text: 'Nでしたっけ？' }, { n: 3, text: 'Sなら' }, { n: 4, text: 'V-てもらえたら' }], answer: 1, explanationPt: 'お待ちください e ご連絡ください são formas mais polidas que V-てください.' },
    { id: 'iro-pi-l4-20', number: 20, prompt: 'Can-do 11: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'explicar uma situação de barulho/problema em apartamento e transmitir uma reclamação à administração' }, { n: 2, text: 'ler notícia de esporte' }, { n: 3, text: 'fazer reserva de viagem' }, { n: 4, text: 'descrever um personagem de mangá' }], answer: 1, explanationPt: 'A atividade 2 trabalha como comunicar uma reclamação sobre ruído ou regras de convivência.' },
    { id: 'iro-pi-l4-21', number: 21, prompt: 'Vocabulário: 共用スペースに物を置く significa:', image: `${IMG}/ZZ_04_2_04_mono.png`, imageAlt: 'objetos colocados em espaço comum', choices: [{ n: 1, text: 'colocar coisas em espaço comum' }, { n: 2, text: 'jogar lixo no dia errado' }, { n: 3, text: 'fumar na varanda' }, { n: 4, text: 'correr no corredor' }], answer: 1, explanationPt: '共用スペース = espaço comum; 物を置く = colocar objetos.' },
    { id: 'iro-pi-l4-22', number: 22, prompt: 'Vocabulário: ベランダでたばこを吸う significa:', image: `${IMG}/ZZ_04_2_06_tabako.png`, imageAlt: 'pessoa fumando na varanda', choices: [{ n: 1, text: 'fumar na varanda' }, { n: 2, text: 'cozinhar com cheiro forte' }, { n: 3, text: 'estacionar bicicleta sem permissão' }, { n: 4, text: 'ter pet fazendo xixi' }], answer: 1, explanationPt: 'ベランダ = varanda; たばこを吸う = fumar.' },
    { id: 'iro-pi-l4-23', number: 23, prompt: '会話 04-14: do que カタリーナ reclama?', image: `${IMG}/ZZ_04_2_01_oto.png`, imageAlt: 'barulho de máquina de lavar', choices: [{ n: 1, text: 'a pessoa do andar de cima lava roupa tarde da noite' }, { n: 2, text: 'o ar-condicionado dela quebrou' }, { n: 3, text: 'há um ninho de vespa na escada' }, { n: 4, text: 'a água quente não sai' }], answer: 1, explanationPt: 'Ela diz: 上の階の部屋の人が、夜遅い時間に洗濯をするんです.' },
    { id: 'iro-pi-l4-24', number: 24, prompt: '会話 04-14: segundo カタリーナ, com que frequência e em que horário isso acontece?', choices: [{ n: 1, text: 'todos os dias, por volta das 23h, às vezes passando de meia-noite' }, { n: 2, text: 'uma vez por mês, às 6h' }, { n: 3, text: 'só aos domingos, às 15h' }, { n: 4, text: 'sempre às 8h' }], answer: 1, explanationPt: 'Ela explica: 毎日, だいたい夜の11時から, ときどき12時を過ぎることもあります.' },
    { id: 'iro-pi-l4-25', number: 25, prompt: '会話 04-14: por que カタリーナ está incomodada?', choices: [{ n: 1, text: 'quer dormir cedo, mas o barulho da máquina de lavar a impede de dormir' }, { n: 2, text: 'quer se mudar para uma casa maior' }, { n: 3, text: 'não sabe onde fica a imobiliária' }, { n: 4, text: 'perdeu a chave no shopping' }], answer: 1, explanationPt: 'Ela diz: 早く寝たいのに、洗濯機の音がうるさくて、眠れなくなります.' },
    { id: 'iro-pi-l4-26', number: 26, prompt: 'Estratégia 04-15: 「あのう、すみません、ちょっと相談があるんですが……」 é usado para:', choices: [{ n: 1, text: 'fazer uma abertura/preâmbulo antes de entrar no assunto delicado' }, { n: 2, text: 'encerrar a conversa' }, { n: 3, text: 'recusar ajuda' }, { n: 4, text: 'confirmar endereço' }], answer: 1, explanationPt: 'A estratégia da lição é 前置きをする: preparar a conversa antes de falar da reclamação.' },
    { id: 'iro-pi-l4-27', number: 27, prompt: 'Can-do 12: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'receber uma reclamação da administração e explicar sua situação enquanto responde ao problema' }, { n: 2, text: 'escrever comentário de mangá' }, { n: 3, text: 'preencher anúncio de imóvel' }, { n: 4, text: 'fazer convite para esporte' }], answer: 1, explanationPt: 'A atividade 3 mostra o outro lado: マテオ recebe uma reclamação sobre barulho.' },
    { id: 'iro-pi-l4-28', number: 28, prompt: '会話 04-17: o que o gerente veio comunicar a マテオ?', choices: [{ n: 1, text: 'houve reclamação de que ele usa a máquina de lavar à noite e o som é barulhento' }, { n: 2, text: 'ele precisa renovar contrato de aluguel' }, { n: 3, text: 'a chave dele foi encontrada' }, { n: 4, text: 'a varanda precisa ser limpa' }], answer: 1, explanationPt: '管理人 diz que outros moradores reclamaram do barulho da máquina de lavar usada à noite.' },
    { id: 'iro-pi-l4-29', number: 29, prompt: '会話 04-17: por que マテオ costuma lavar roupa às 23h?', choices: [{ n: 1, text: 'sai para o trabalho às 8h, volta por volta das 21h depois de jantar, fala online com família/amigos e só depois lava' }, { n: 2, text: 'porque a lavanderia só abre às 23h' }, { n: 3, text: 'porque o gerente mandou' }, { n: 4, text: 'porque ele não trabalha de manhã' }], answer: 1, explanationPt: 'Ele explica sua rotina: sai às 8h, volta por volta das 9 da noite, fala pela internet e então lava a roupa.' },
    { id: 'iro-pi-l4-30', number: 30, prompt: '会話 04-17: o que マテオ decide fazer?', choices: [{ n: 1, text: 'voltar um pouco mais cedo e lavar roupa imediatamente, terminando até as 21h' }, { n: 2, text: 'continuar lavando às 23h' }, { n: 3, text: 'parar de trabalhar' }, { n: 4, text: 'mudar para outro país' }], answer: 1, explanationPt: 'Ele diz que voltará um pouco mais cedo e lavará logo; o gerente pede que termine até as 9 da noite.' },
    { id: 'iro-pi-l4-31', number: 31, prompt: '「遅い時間に音を出されると困る人もいます」 é exemplo de:', choices: [{ n: 1, text: '迷惑の受身: passiva usada quando a ação de alguém incomoda outra pessoa' }, { n: 2, text: 'Nみたいだ' }, { n: 3, text: 'お＋N' }, { n: 4, text: 'V-ることになった' }], answer: 1, translationPt: 'Há pessoas que ficam incomodadas quando fazem barulho tarde da noite.', explanationPt: 'A nota chama isso de 迷惑の受身, passiva de incômodo.' },
    { id: 'iro-pi-l4-32', number: 32, prompt: 'Qual frase também usa 迷惑の受身 corretamente?', choices: [{ n: 1, text: '隣の人にたばこを吸われて、困りました。' }, { n: 2, text: '隣の人をたばこに吸いました。' }, { n: 3, text: '隣の人がたばこを吸うみたいください。' }, { n: 4, text: '隣の人にたばこを吸ってもらえたらです。' }], answer: 1, explanationPt: 'A ação de outra pessoa (たばこを吸う) é expressa do ponto de vista de quem sofreu incômodo: 隣の人にたばこを吸われた.' },
    { id: 'iro-pi-l4-33', number: 33, prompt: 'Can-do 13: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar a um amigo, com algum detalhe, sobre conforto, ambiente e pontos bons/ruins da própria moradia' }, { n: 2, text: 'ligar para emergência médica' }, { n: 3, text: 'anunciar evento esportivo' }, { n: 4, text: 'preparar receita de festa' }], answer: 1, explanationPt: 'A atividade 4 é sobre falar do lugar onde se mora: 住み心地 e 周りの環境.' },
    { id: 'iro-pi-l4-34', number: 34, prompt: '聴解 04-20: ウェンシン mora onde?', choices: [{ n: 1, text: 'em apartamento, morando sozinho' }, { n: 2, text: 'em dormitório da empresa' }, { n: 3, text: 'em casa antiga com amigos' }, { n: 4, text: 'em hotel' }], answer: 1, explanationPt: 'Ele diz: アパートで一人暮らしをしています.' },
    { id: 'iro-pi-l4-35', number: 35, prompt: '聴解 04-20: quais são os pontos bons da moradia de ウェンシン?', choices: [{ n: 1, text: 'é livre/confortável e a localização é conveniente' }, { n: 2, text: 'o aluguel é de graça e o quarto é grande' }, { n: 3, text: 'o inverno é quente e a família mora perto' }, { n: 4, text: 'não há comércio perto' }], answer: 1, explanationPt: 'O gabarito marca 自由で快適 e 場所が便利.' },
    { id: 'iro-pi-l4-36', number: 36, prompt: '聴解 04-20: qual é o ponto ruim para ウェンシン?', choices: [{ n: 1, text: 'o quarto é pequeno e ele não consegue chamar muitos amigos' }, { n: 2, text: 'o colega de quarto acorda às 4h' }, { n: 3, text: 'o aquecimento não funciona bem' }, { n: 4, text: 'a empresa fica longe' }], answer: 1, explanationPt: 'Ele diz: 部屋がせまい; 友だちをたくさん呼べないから、ちょっとつまらない.' },
    { id: 'iro-pi-l4-37', number: 37, prompt: '聴解 04-21: シティ mora onde?', choices: [{ n: 1, text: 'no dormitório da empresa' }, { n: 2, text: 'em apartamento sozinho' }, { n: 3, text: 'em uma casa antiga com três amigos' }, { n: 4, text: 'em casa própria nova' }], answer: 1, explanationPt: 'Ela responde: 私は、会社の寮です.' },
    { id: 'iro-pi-l4-38', number: 38, prompt: '聴解 04-21: quais são os pontos bons para シティ?', choices: [{ n: 1, text: 'não custa muito dinheiro e o deslocamento ao trabalho é fácil' }, { n: 2, text: 'há jardim grande e vizinhos prestativos' }, { n: 3, text: 'ela pode chamar muitos amigos' }, { n: 4, text: 'não precisa considerar colega de quarto' }], answer: 1, explanationPt: 'Ela fala de 家賃 barato/móveis que não precisa comprar e 通勤が楽 por ficar perto da empresa.' },
    { id: 'iro-pi-l4-39', number: 39, prompt: '聴解 04-21: qual é o ponto ruim para シティ?', choices: [{ n: 1, text: 'o ritmo de vida da colega de quarto não combina: dorme por volta das 21h e acorda às 4h' }, { n: 2, text: 'o quarto é pequeno demais para amigos' }, { n: 3, text: 'não há ônibus perto' }, { n: 4, text: 'o ar-condicionado está quebrado' }], answer: 1, explanationPt: 'O gabarito marca 同じ部屋の人と生活リズムが合わない.' },
    { id: 'iro-pi-l4-40', number: 40, prompt: '聴解 04-22: クリスティン mora onde?', choices: [{ n: 1, text: 'com dois amigos, em uma casa antiga independente' }, { n: 2, text: 'sozinha em apartamento novo' }, { n: 3, text: 'no dormitório da empresa' }, { n: 4, text: 'num quarto de hotel perto do trabalho' }], answer: 1, explanationPt: 'Ela diz: 友だちと3人で、古い一戸建てに住んでます.' },
    { id: 'iro-pi-l4-41', number: 41, prompt: '聴解 04-22: quais são os pontos bons para クリスティン?', choices: [{ n: 1, text: 'dá para viver com espaço e os vizinhos são gentis' }, { n: 2, text: 'o quarto é pequeno e barato' }, { n: 3, text: 'o colega de quarto dorme cedo' }, { n: 4, text: 'não há jardim' }], answer: 1, explanationPt: 'Ela fala que pode viver com calma/espaço, cultivar legumes e fazer churrasco; também diz que os vizinhos foram gentis no terremoto.' },
    { id: 'iro-pi-l4-42', number: 42, prompt: '聴解 04-22: qual é o ponto ruim para クリスティン?', choices: [{ n: 1, text: 'no inverno faz frio, porque os cômodos são amplos e o aquecimento não funciona bem' }, { n: 2, text: 'não há lugar para lavar roupa' }, { n: 3, text: 'o aluguel é caro demais para o dormitório' }, { n: 4, text: 'não há arrozais perto' }], answer: 1, explanationPt: 'Ela diz: 冬が寒い; 部屋が広いから、暖房があまり効かない.' },
    { id: 'iro-pi-l4-43', number: 43, prompt: 'Kanji da lição: 洗面台／洗濯機／換気扇 lêem-se:', choices: [{ n: 1, text: 'せんめんだい／せんたくき／かんきせん' }, { n: 2, text: 'あらいめんだい／せんたくき／こうきせん' }, { n: 3, text: 'せんめんだい／せんたくぎ／かんきおうぎ' }, { n: 4, text: 'せんめんたい／せんだくき／かんきせん' }], answer: 1, explanationPt: 'Esses kanji aparecem em problemas de casa: pia/lavatório, máquina de lavar e exaustor.' },
    { id: 'iro-pi-l4-44', number: 44, prompt: 'Kanji da lição: 一戸建て／庭／通勤／バス停 lêem-se:', choices: [{ n: 1, text: 'いっこだて／にわ／つうきん／バスてい' }, { n: 2, text: 'いちとけん／てい／つうがく／バスどめ' }, { n: 3, text: 'いっこだて／にわ／つうぎん／バスてい' }, { n: 4, text: 'いえだて／にわ／こうきん／バスてい' }], answer: 1, explanationPt: '一戸建て = casa independente; 庭 = jardim; 通勤 = deslocamento ao trabalho; バス停 = ponto de ônibus.' },
    { id: 'iro-pi-l4-45', number: 45, prompt: 'TIPS: ao ter um problema na casa alugada no Japão, qual é a recomendação principal?', choices: [{ n: 1, text: 'contatar primeiro o proprietário ou a administradora, em vez de consertar por conta própria' }, { n: 2, text: 'sempre contratar qualquer panfleto recebido no correio' }, { n: 3, text: 'mexer na instalação sozinho e pedir reembolso depois' }, { n: 4, text: 'ignorar o contrato e a 入居のしおり' }], answer: 1, explanationPt: 'A TIPS alerta que consertar sem passar pelo proprietário/administradora pode gerar cobrança ou não reembolso; também recomenda cuidado com empresas mal-intencionadas.' },
    { id: 'iro-pi-l4-46', number: 46, prompt: 'TIPS: sobre reclamações de moradia, qual atitude é recomendada?', choices: [{ n: 1, text: 'evitar confronto direto quando possível e procurar a administradora/proprietário para mediar' }, { n: 2, text: 'ir diretamente brigar com o vizinho' }, { n: 3, text: 'continuar o comportamento sem ouvir a reclamação' }, { n: 4, text: 'mudar sem avisar ninguém' }], answer: 1, explanationPt: 'A TIPS diz que, em conflitos entre moradores, hoje é comum a administradora ou o proprietário intermediar para evitar problemas maiores.' },
  ],
}

// ---- Lição 5: どんなお店がいいですか？ (tópico 毎日の食事) ----
const lesson5Group: ExerciseGroup = {
  id: 'iro-pi-l5',
  title: 'どんなお店がいいですか？',
  subtitlePt: 'Pedidos por tablet · recomendar restaurantes · escrever impressões · comidas regionais',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l5-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: '毎日の食事 (refeições do dia a dia)' }, { n: 2, text: 'どこに住む？' }, { n: 3, text: '旅行に行こう' }, { n: 4, text: '仕事の連絡' }], answer: 1, explanationPt: 'A Lição 5 abre o tópico 毎日の食事 e trata de restaurantes, pedidos e pratos regionais.' },
    { id: 'iro-pi-l5-2', number: 2, prompt: 'Pergunta de abertura: おすすめのレストランがありますか？ どんなお店ですか？', choices: [{ n: 1, text: 'Você tem algum restaurante recomendado? Que tipo de lugar é?' }, { n: 2, text: 'Que tipo de quarto você quer alugar?' }, { n: 3, text: 'Você já perdeu uma chave?' }, { n: 4, text: 'Qual esporte você pratica?' }], answer: 1, explanationPt: 'A abertura prepara a atividade de recomendar restaurantes.' },
    { id: 'iro-pi-l5-3', number: 3, prompt: 'Can-do 14: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'pedir comida e bebida usando o tablet de pedidos de um restaurante' }, { n: 2, text: 'pedir ajuda com mudança' }, { n: 3, text: 'fazer reclamação de ruído' }, { n: 4, text: 'escrever mensagem de cancelamento' }], answer: 1, explanationPt: 'A atividade 1 trabalha 注文用タブレット em um restaurante familiar.' },
    { id: 'iro-pi-l5-4', number: 4, prompt: 'No início do pedido por tablet, duas pessoas chegaram ao restaurante. O gabarito indica que primeiro se toca em:', image: `${IMG}/ZZ_05_1_01_chuumon.png`, imageAlt: 'tela de pedido por tablet em restaurante', choices: [{ n: 1, text: '人数「2人」' }, { n: 2, text: '注文履歴' }, { n: 3, text: 'アレルゲン' }, { n: 4, text: '店員呼出' }], answer: 1, explanationPt: 'Como são duas pessoas, primeiro seleciona-se o número de pessoas: 2人.' },
    { id: 'iro-pi-l5-5', number: 5, prompt: 'Depois de selecionar o número de pessoas, o gabarito indica tocar em:', choices: [{ n: 1, text: '注文を開始する' }, { n: 2, text: 'キャンセル' }, { n: 3, text: '税込' }, { n: 4, text: '少なめ' }], answer: 1, explanationPt: 'Após selecionar 2人, toca-se em 注文を開始する para iniciar o pedido.' },
    { id: 'iro-pi-l5-6', number: 6, prompt: 'Vocabulário do tablet: 麺 significa:', image: `${IMG}/ZZ_05_1_02_raamen.png`, imageAlt: 'ramen como exemplo de macarrão', choices: [{ n: 1, text: 'macarrão/noodles' }, { n: 2, text: 'sobremesa' }, { n: 3, text: 'subtotal' }, { n: 4, text: 'histórico de pedidos' }], answer: 1, explanationPt: '麺 é a categoria de macarrão/noodles.' },
    { id: 'iro-pi-l5-7', number: 7, prompt: 'Vocabulário do tablet: 持ち帰り significa:', choices: [{ n: 1, text: 'para levar / takeout' }, { n: 2, text: 'sem arroz' }, { n: 3, text: 'alergênico' }, { n: 4, text: 'garçom' }], answer: 1, explanationPt: '持ち帰り é pedido para levar.' },
    { id: 'iro-pi-l5-8', number: 8, prompt: 'Vocabulário do tablet: 注文履歴 é usado quando você quer:', choices: [{ n: 1, text: 'verificar o que já foi pedido e o valor' }, { n: 2, text: 'trocar idioma' }, { n: 3, text: 'pedir arroz pequeno' }, { n: 4, text: 'fazer um post no SNS' }], answer: 1, explanationPt: '注文履歴 = histórico de pedidos.' },
    { id: 'iro-pi-l5-9', number: 9, prompt: 'Vocabulário do tablet: アレルゲン serve para:', choices: [{ n: 1, text: 'verificar ingredientes que podem causar alergia' }, { n: 2, text: 'calcular imposto' }, { n: 3, text: 'chamar robô de entrega' }, { n: 4, text: 'cancelar uma reserva' }], answer: 1, explanationPt: 'A função アレルゲン ajuda a checar se há ingredientes aos quais a pessoa é alérgica.' },
    { id: 'iro-pi-l5-10', number: 10, prompt: 'Can-do 15: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar com certo detalhe sobre um restaurante no Japão onde se come comida do próprio país/região' }, { n: 2, text: 'ler anúncio de imóvel' }, { n: 3, text: 'usar passiva de incômodo' }, { n: 4, text: 'relatar chave perdida' }], answer: 1, explanationPt: 'A atividade 2 usa uma recomendação de restaurante tailandês feita por ナパー.' },
    { id: 'iro-pi-l5-11', number: 11, prompt: '会話 05-01: que tipo de restaurante 山本 procura?', choices: [{ n: 1, text: 'não muito caro, com comida tailandesa autêntica, bebida, boa atmosfera e fácil de entrar sozinho' }, { n: 2, text: 'um restaurante de luxo e silencioso sem álcool' }, { n: 3, text: 'uma rede rápida apenas para delivery' }, { n: 4, text: 'um restaurante japonês de ramen' }], answer: 1, explanationPt: 'O gabarito marca: あまり高くない, 本物のタイ料理, お酒が飲める, 雰囲気がいい e 1人でも入りやすい.' },
    { id: 'iro-pi-l5-12', number: 12, prompt: '会話 05-01: qual restaurante ナパー recomenda e onde fica?', choices: [{ n: 1, text: 'イサーン, em 十条' }, { n: 2, text: '月島, em 秋田' }, { n: 3, text: 'サイウア, em 千葉' }, { n: 4, text: 'ドゥル天, em 沖縄' }], answer: 1, explanationPt: 'ナパー recomenda 十条にある、イサーンというお店.' },
    { id: 'iro-pi-l5-13', number: 13, prompt: '会話 05-01: イサーン é descrito como:', choices: [{ n: 1, text: 'um 居酒屋 com balcão, onde se pode comer comida tailandesa casualmente' }, { n: 2, text: 'uma cafeteria de sobremesas' }, { n: 3, text: 'uma churrascaria brasileira formal' }, { n: 4, text: 'um restaurante de pedido apenas por aplicativo' }], answer: 1, explanationPt: 'ナパー diz: 居酒屋なんですけど、カウンターがあって、気軽にタイ料理が食べられます.' },
    { id: 'iro-pi-l5-14', number: 14, prompt: '会話 05-01: aproximadamente quanto custa cada prato?', choices: [{ n: 1, text: 'cerca de 600円' }, { n: 2, text: 'cerca de 60円' }, { n: 3, text: 'cerca de 6000円' }, { n: 4, text: 'não há preço' }], answer: 1, explanationPt: 'A fala diz: どの料理もだいたい600円ぐらいです.' },
    { id: 'iro-pi-l5-15', number: 15, prompt: '会話 05-01: que pratos tailandeses famosos são citados?', choices: [{ n: 1, text: 'ソムタム e トムヤムクン' }, { n: 2, text: 'きりたんぽ e しもつかれ' }, { n: 3, text: '焼き鳥 e コロッケ' }, { n: 4, text: 'ラーメン e パフェ' }], answer: 1, explanationPt: 'ナパー diz que há pratos famosos como ソムタム e トムヤムクン.' },
    { id: 'iro-pi-l5-16', number: 16, prompt: '会話 05-01: サイウア é explicado como:', choices: [{ n: 1, text: 'um prato parecido com linguiça/salsicha, especialidade do norte da Tailândia' }, { n: 2, text: 'um tipo de doce de Okinawa' }, { n: 3, text: 'um arroz em palito de Akita' }, { n: 4, text: 'um miso doce de Chiba' }], answer: 1, explanationPt: 'A frase da lição: ソーセージみたいな料理で、タイの北部の名物です.' },
    { id: 'iro-pi-l5-17', number: 17, prompt: '会話 05-01: sobre o sabor picante, ナパー diz que:', choices: [{ n: 1, text: 'não deixam muito picante para japoneses, mas se pedir fazem com a picância local/autêntica' }, { n: 2, text: 'sempre é impossível pedir picante' }, { n: 3, text: 'é doce como sobremesa' }, { n: 4, text: 'não há comida picante' }], answer: 1, explanationPt: 'Ela explica: 日本人に合わせて、あまり辛くしていない; 頼めば本場の辛さにしてくれます.' },
    { id: 'iro-pi-l5-18', number: 18, prompt: '会話 05-01: qual é a recomendação de bebida?', choices: [{ n: 1, text: 'タイの焼酎' }, { n: 2, text: 'ドリンクバー' }, { n: 3, text: '牛乳' }, { n: 4, text: '味噌汁' }], answer: 1, explanationPt: 'ナパー recomenda タイの焼酎, feito de arroz tailandês.' },
    { id: 'iro-pi-l5-19', number: 19, prompt: '「ソーセージみたいな料理」 usa N1みたいなN2 para:', choices: [{ n: 1, text: 'explicar algo comparando a algo parecido' }, { n: 2, text: 'pedir que alguém espere' }, { n: 3, text: 'mostrar passiva de incômodo' }, { n: 4, text: 'marcar histórico de pedidos' }], answer: 1, translationPt: 'um prato parecido com linguiça/salsicha', explanationPt: 'N1みたいなN2 compara uma coisa a outra parecida para explicar.' },
    { id: 'iro-pi-l5-20', number: 20, prompt: '「本場の辛さ」: 辛さ é formado a partir de 辛い para expressar:', choices: [{ n: 1, text: 'grau/qualidade de picância como substantivo' }, { n: 2, text: 'passado de picante' }, { n: 3, text: 'ordem de pedido' }, { n: 4, text: 'negação' }], answer: 1, explanationPt: 'イA-さ／ナA-さ transforma adjetivos em substantivos de grau: 辛い → 辛さ.' },
    { id: 'iro-pi-l5-21', number: 21, prompt: 'Estratégia 05-04: quando ナパー esquece a palavra 焼酎, ela:', choices: [{ n: 1, text: 'descreve as características: feito de arroz, transparente, bebida alcoólica forte' }, { n: 2, text: 'troca imediatamente de assunto' }, { n: 3, text: 'fica em silêncio até o fim' }, { n: 4, text: 'escreve no tablet' }], answer: 1, explanationPt: 'A estratégia é 思い出せない単語の特徴を言って質問する.' },
    { id: 'iro-pi-l5-22', number: 22, prompt: 'Can-do 16: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'escrever um post simples em SNS sobre um restaurante onde foi' }, { n: 2, text: 'explicar uma comida regional desconhecida oralmente' }, { n: 3, text: 'usar tablet de pedidos' }, { n: 4, text: 'pedir conserto da pia' }], answer: 1, explanationPt: 'A atividade 3 é escrita curta: 感想をSNSに書き込む.' },
    { id: 'iro-pi-l5-23', number: 23, prompt: 'No exemplo de post SNS, que tipo de restaurante aparece?', choices: [{ n: 1, text: 'もんじゃ焼きのお店' }, { n: 2, text: 'タイ料理の居酒屋' }, { n: 3, text: '会社の食堂' }, { n: 4, text: '沖縄料理店' }], answer: 1, explanationPt: 'O gabarito da atividade 3 marca もんじゃ焼きのお店.' },
    { id: 'iro-pi-l5-24', number: 24, prompt: 'No exemplo de post SNS, o que foi comido?', choices: [{ n: 1, text: 'もち明太子もんじゃ, お好み焼き e 焼きそば' }, { n: 2, text: 'ソムタム, トムヤムクン e サイウア' }, { n: 3, text: 'きりたんぽ, ドゥル天 e しもつかれ' }, { n: 4, text: 'ラーメン, ハンバーグ e パフェ' }], answer: 1, explanationPt: 'O gabarito lista もち明太子もんじゃ, お好み焼き e 焼きそば.' },
    { id: 'iro-pi-l5-25', number: 25, prompt: 'No exemplo de post SNS, qual foi a impressão?', choices: [{ n: 1, text: 'estava muito gostoso e a pessoa quer ir de novo' }, { n: 2, text: 'era caro e não quer voltar' }, { n: 3, text: 'não conseguiu pedir pelo tablet' }, { n: 4, text: 'não entendeu o cardápio' }], answer: 1, explanationPt: 'O gabarito traz: すごくおいしかった, また行きたい.' },
    { id: 'iro-pi-l5-26', number: 26, prompt: 'Can-do 17: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ouvir apresentação de comidas desconhecidas/regionais e entender modo de preparo e origem em linhas gerais' }, { n: 2, text: 'falar sobre imóveis disponíveis' }, { n: 3, text: 'receber reclamação de barulho' }, { n: 4, text: 'cancelar compromisso por mensagem' }], answer: 1, explanationPt: 'A atividade 4 trabalha 郷土料理 e comidas que o aluno talvez não conheça.' },
    { id: 'iro-pi-l5-27', number: 27, prompt: '聴解 05-06: a comida apresentada é:', image: `${IMG}/ZZ_05_4_01_chijinnoie.png`, imageAlt: 'refeição na casa de um conhecido', choices: [{ n: 1, text: 'きりたんぽ, de 秋田' }, { n: 2, text: 'ドゥル天, de 沖縄' }, { n: 3, text: 'しもつかれ, de 栃木' }, { n: 4, text: 'みそピーナッツ, de 千葉' }], answer: 1, explanationPt: 'O gabarito marca ① c e região ア: きりたんぽ de Akita.' },
    { id: 'iro-pi-l5-28', number: 28, prompt: '聴解 05-06: きりたんぽ é feito de quê?', image: `${IMG}/ZZ_05_4_12_kome.png`, imageAlt: 'arroz', choices: [{ n: 1, text: '米' }, { n: 2, text: '田芋' }, { n: 3, text: 'ニンジン e ダイコン' }, { n: 4, text: 'ピーナッツ e みそ' }], answer: 1, explanationPt: 'A explicação diz: お米から作るんです.' },
    { id: 'iro-pi-l5-29', number: 29, prompt: '聴解 05-06: como se prepara きりたんぽ?', choices: [{ n: 1, text: 'amassa-se arroz, prende-se em volta de um bastão, endurece-se e assa-se' }, { n: 2, text: 'rala-se cenoura e nabo e mistura-se com salmão' }, { n: 3, text: 'amassa-se taro, mistura-se com porco e frita-se' }, { n: 4, text: 'adoça-se miso com açúcar e envolve-se amendoim' }], answer: 1, explanationPt: 'O script diz: お米をつぶして、棒のまわりにつけて固めてから、焼いた料理.' },
    { id: 'iro-pi-l5-30', number: 30, prompt: '聴解 05-07: a comida apresentada é:', image: `${IMG}/ZZ_05_4_02_izakaya.png`, imageAlt: 'comida em izakaya de Okinawa', choices: [{ n: 1, text: 'ドゥル天, de 沖縄' }, { n: 2, text: 'きりたんぽ, de 秋田' }, { n: 3, text: 'しもつかれ, de 栃木' }, { n: 4, text: 'みそピーナッツ, de 千葉' }], answer: 1, explanationPt: 'O gabarito marca ② b e região エ: ドゥル天 de Okinawa.' },
    { id: 'iro-pi-l5-31', number: 31, prompt: '聴解 05-07: ドゥル天 é feito principalmente com:', image: `${IMG}/ZZ_05_4_07_taimo.png`, imageAlt: '田芋', choices: [{ n: 1, text: '田芋, 豚肉 e だし' }, { n: 2, text: '米 e ちくわ' }, { n: 3, text: 'サケ, 大豆 e 酒粕' }, { n: 4, text: 'ピーナッツ, みそ e 砂糖' }], answer: 1, explanationPt: 'O gabarito marca ingredientes c, f, m: 田芋, 豚肉 e だし.' },
    { id: 'iro-pi-l5-32', number: 32, prompt: '聴解 05-07: o que é ドゥル天?', choices: [{ n: 1, text: 'ドゥルワカシー moldado e frito em óleo' }, { n: 2, text: 'arroz assado no bastão' }, { n: 3, text: 'restos de inverno com salmão' }, { n: 4, text: 'amendoim com miso doce' }], answer: 1, explanationPt: 'A frase central: これをさらに丸めて、油で揚げたやつが、ドゥル天なんですよ.' },
    { id: 'iro-pi-l5-33', number: 33, prompt: '聴解 05-08: a comida apresentada é:', image: `${IMG}/ZZ_05_4_03_shokudoo.png`, imageAlt: 'refeição na cantina do dormitório', choices: [{ n: 1, text: 'しもつかれ, de 栃木' }, { n: 2, text: 'みそピーナッツ, de 千葉' }, { n: 3, text: 'ドゥル天, de 沖縄' }, { n: 4, text: 'きりたんぽ, de 秋田' }], answer: 1, explanationPt: 'O gabarito marca ③ d e região イ: しもつかれ de Tochigi.' },
    { id: 'iro-pi-l5-34', number: 34, prompt: '聴解 05-08: quais ingredientes aparecem em しもつかれ?', choices: [{ n: 1, text: 'ニンジン, ダイコン, サケ, 大豆, 油揚げ e 酒粕' }, { n: 2, text: '田芋, 豚肉 e だし' }, { n: 3, text: '米 e 砂糖' }, { n: 4, text: 'ピーナッツ e みそ apenas' }], answer: 1, explanationPt: 'O gabarito marca a, b, g, d, i, l.' },
    { id: 'iro-pi-l5-35', number: 35, prompt: '聴解 05-08: qual era a origem de しもつかれ segundo a explicação?', choices: [{ n: 1, text: 'comida de inverno feita misturando sobras de Ano Novo e Setsubun' }, { n: 2, text: 'bebida de arroz tailandês' }, { n: 3, text: 'comida para churrasco de varanda' }, { n: 4, text: 'sobremesa de festival' }], answer: 1, explanationPt: 'O script explica que era uma comida de inverno feita com sobras como cabeça de salmão do Ano Novo e soja de Setsubun.' },
    { id: 'iro-pi-l5-36', number: 36, prompt: '聴解 05-09: a comida apresentada é:', image: `${IMG}/ZZ_05_4_04_tomodachinoie.png`, imageAlt: 'comida na casa de um amigo', choices: [{ n: 1, text: 'みそピーナッツ, de 千葉' }, { n: 2, text: 'しもつかれ, de 栃木' }, { n: 3, text: 'ドゥル天, de 沖縄' }, { n: 4, text: 'きりたんぽ, de 秋田' }], answer: 1, explanationPt: 'O gabarito marca ④ a e região ウ: みそピーナッツ de Chiba.' },
    { id: 'iro-pi-l5-37', number: 37, prompt: '聴解 05-09: みそピーナッツ usa quais ingredientes?', choices: [{ n: 1, text: 'ピーナッツ, みそ e 砂糖' }, { n: 2, text: '米, 田芋 e 豚肉' }, { n: 3, text: 'ニンジン, ダイコン e サケ' }, { n: 4, text: 'サイウア e 焼酎' }], answer: 1, explanationPt: 'O gabarito marca e, j, k: amendoim, miso e açúcar.' },
    { id: 'iro-pi-l5-38', number: 38, prompt: '聴解 05-09: como みそピーナッツ pode ser comido?', choices: [{ n: 1, text: 'como petisco ou em cima do arroz' }, { n: 2, text: 'somente dentro de hot pot' }, { n: 3, text: 'apenas frito como tempurá' }, { n: 4, text: 'somente como bebida' }], answer: 1, explanationPt: 'O script diz: おつまみとして食べてもいいし、ご飯にのせて食べる人もいます.' },
    { id: 'iro-pi-l5-39', number: 39, prompt: '「油で揚げたやつ」 usa やつ para:', choices: [{ n: 1, text: 'evitar repetir 料理/もの em fala casual' }, { n: 2, text: 'mostrar respeito formal' }, { n: 3, text: 'pedir desculpa' }, { n: 4, text: 'marcar plural' }], answer: 1, translationPt: 'a coisa/o prato que foi frito em óleo', explanationPt: 'S（普通形）やつ substitui informalmente um substantivo já entendido pelo contexto. Pode ser trocado por もの.' },
    { id: 'iro-pi-l5-40', number: 40, prompt: 'Estratégia 05-11: quando não entende uma palavra como きりたんぽ ou ドゥルワカシー, a pessoa:', choices: [{ n: 1, text: 'repete a parte que ouviu com entonação de pergunta para pedir esclarecimento' }, { n: 2, text: 'muda para inglês imediatamente' }, { n: 3, text: 'faz pedido por tablet' }, { n: 4, text: 'sai da conversa' }], answer: 1, explanationPt: 'A estratégia é ことばの一部をくり返して聞き返す: え？ きりたん……？ / え？ ドゥル……？' },
    { id: 'iro-pi-l5-41', number: 41, prompt: 'Kanji da lição: 注文履歴／送信する lêem-se:', choices: [{ n: 1, text: 'ちゅうもんりれき／そうしんする' }, { n: 2, text: 'ちゅうぶんりれき／おくしんする' }, { n: 3, text: 'ちゅうもんれきし／そうしんする' }, { n: 4, text: 'しゅうもんりれき／そうじんする' }], answer: 1, explanationPt: '注文履歴 = histórico de pedidos; 送信する = enviar.' },
    { id: 'iro-pi-l5-42', number: 42, prompt: 'Kanji da lição: 持ち帰り／税込／大盛り lêem-se:', choices: [{ n: 1, text: 'もちかえり／ぜいこみ／おおもり' }, { n: 2, text: 'もちはいり／ぜいこみ／だいもり' }, { n: 3, text: 'もちかえり／ぜいこめ／おおせい' }, { n: 4, text: 'じかえり／ぜいこみ／おおもり' }], answer: 1, explanationPt: 'Esses termos aparecem em telas de pedido e cardápios.' },
    { id: 'iro-pi-l5-43', number: 43, prompt: 'Kanji da lição: 混ぜる／固める／丸める／煮る lêem-se:', choices: [{ n: 1, text: 'まぜる／かためる／まるめる／にる' }, { n: 2, text: 'こんぜる／こためる／えんめる／にる' }, { n: 3, text: 'まぜる／かたまる／まるめる／ねる' }, { n: 4, text: 'まじる／かためる／まるむ／にえる' }], answer: 1, explanationPt: 'São verbos usados para explicar preparo de comidas regionais.' },
    { id: 'iro-pi-l5-44', number: 44, prompt: 'TIPS: sobre automação em restaurantes no Japão, qual afirmação está correta?', choices: [{ n: 1, text: 'há cada vez mais recepção, pedido, serviço e pagamento automatizados por tablet, smartphone, robô ou self-checkout' }, { n: 2, text: 'tablets nunca têm opção de idioma' }, { n: 3, text: 'robôs substituem todos os funcionários em todos os restaurantes' }, { n: 4, text: 'não se deve perguntar nada ao funcionário se não entender' }], answer: 1, explanationPt: 'A TIPS explica automação em受付, 注文, 配膳 e 会計, e diz que você pode perguntar ao funcionário se não entender.' },
    { id: 'iro-pi-l5-45', number: 45, prompt: 'TIPS: もんじゃ焼き é:', choices: [{ n: 1, text: 'prato de massa com ingredientes assado na chapa, famoso em áreas tradicionais de Tokyo como 月島' }, { n: 2, text: 'bebida alcoólica de Okinawa' }, { n: 3, text: 'um jogo de mão' }, { n: 4, text: 'arroz em palito de Akita' }], answer: 1, explanationPt: 'A TIPS descreve もんじゃ焼き como prato feito na chapa, parecido com お好み焼き, mas com massa mais líquida.' },
    { id: 'iro-pi-l5-46', number: 46, prompt: 'TIPS: 泡盛 é:', choices: [{ n: 1, text: 'um tipo de 焼酎 de Okinawa feito de arroz tailandês' }, { n: 2, text: 'arroz amassado e assado' }, { n: 3, text: 'jogo de pedra-papel-tesoura' }, { n: 4, text: 'um app de pedido por smartphone' }], answer: 1, explanationPt: 'A TIPS de Okinawa explica 泡盛 como焼酎 produzido em Okinawa a partir de arroz tailandês.' },
    { id: 'iro-pi-l5-47', number: 47, prompt: 'TIPS: ふるさと納税 é:', choices: [{ n: 1, text: 'sistema de doação a municípios no Japão que pode reduzir imposto e enviar返礼品 como produtos regionais' }, { n: 2, text: 'um tipo de monjayaki' }, { n: 3, text: 'uma regra de tablet' }, { n: 4, text: 'uma reclamação de condomínio' }], answer: 1, explanationPt: 'A TIPS apresenta ふるさと納税 como doação a自治体 com benefícios fiscais e presentes regionais.' },
  ],
}

// ---- Lição 6: 毎日、自炊してます (tópico 毎日の食事) ----
const lesson6Group: ExerciseGroup = {
  id: 'iro-pi-l6',
  title: '毎日、自炊してます',
  subtitlePt: 'Mercados recomendados · leitura sobre micro-ondas · falar da alimentação diária',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l6-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: '毎日の食事 (refeições do dia a dia)' }, { n: 2, text: '出会う' }, { n: 3, text: '旅行に行こう' }, { n: 4, text: '地域のイベント' }], answer: 1, explanationPt: 'A Lição 6 continua o tópico 毎日の食事, agora com compras de comida, preparo em casa e rotina alimentar.' },
    { id: 'iro-pi-l6-2', number: 2, prompt: 'Pergunta de abertura: 毎日の食事は、自分で作りますか？ 外食が多いですか？', choices: [{ n: 1, text: 'Você prepara suas refeições todos os dias? Come fora com frequência?' }, { n: 2, text: 'Você tem algum restaurante recomendado?' }, { n: 3, text: 'Como você conheceu seus amigos?' }, { n: 4, text: 'Onde fica o correio?' }], answer: 1, explanationPt: 'A abertura prepara as atividades sobre 自炊, 外食, delivery, refeitório e compras.' },
    { id: 'iro-pi-l6-3', number: 3, prompt: 'Can-do 18: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ouvir comentários simples sobre supermercados recomendados e entender os motivos' }, { n: 2, text: 'pedir comida por tablet' }, { n: 3, text: 'ler um contrato de aluguel' }, { n: 4, text: 'escrever uma mensagem de cancelamento' }], answer: 1, explanationPt: 'A atividade 1 pergunta onde comprar verduras/legumes e que lojas são recomendadas.' },
    { id: 'iro-pi-l6-4', number: 4, prompt: '聴解 06-01: ヤオイチ é que tipo de loja?', image: `${IMG}/ZZ_06_1_02_yasuisuupaa.png`, imageAlt: 'supermercado barato em frente à estação', choices: [{ n: 1, text: '駅前の安いスーパー' }, { n: 2, text: '業務用のスーパー' }, { n: 3, text: '昔からあるお惣菜屋' }, { n: 4, text: '朝市をやっている道の駅' }], answer: 1, explanationPt: 'ヤオイチ fica em frente à estação e é descrito como スーパー barato.' },
    { id: 'iro-pi-l6-5', number: 5, prompt: '聴解 06-01: por que ヤオイチ é recomendado?', choices: [{ n: 1, text: 'tem muitos tipos de verduras/frutas e é barato; dia 29 é dia da carne' }, { n: 2, text: 'serve comida no dormitório' }, { n: 3, text: 'vende apenas pratos prontos' }, { n: 4, text: 'só abre de manhã' }], answer: 1, explanationPt: '野菜と果物の種類が多くて安い; todo dia 29 é 肉の日 e a carne fica mais barata.' },
    { id: 'iro-pi-l6-6', number: 6, prompt: '聴解 06-02: 旬彩屋 é:', image: `${IMG}/ZZ_06_1_04_osoozaiya.png`, imageAlt: 'loja antiga de pratos prontos', choices: [{ n: 1, text: '昔からあるお惣菜屋' }, { n: 2, text: '駅前の安いスーパー' }, { n: 3, text: '会社の食堂' }, { n: 4, text: 'デリバリー専門店' }], answer: 1, explanationPt: '旬彩屋 é uma loja antiga de お惣菜, recomendada para quem acha trabalhoso preparar comida todos os dias.' },
    { id: 'iro-pi-l6-7', number: 7, prompt: '聴解 06-02: quais pontos positivos de 旬彩屋 são citados?', choices: [{ n: 1, text: 'tem variedade japonesa, ocidental e chinesa; é feito à mão e gostoso' }, { n: 2, text: 'vende tudo por quilo em caixas grandes' }, { n: 3, text: 'os agricultores vendem diretamente' }, { n: 4, text: 'a carne fica barata no dia 29' }], answer: 1, explanationPt: 'B diz: 和・洋・中いろいろ種類があるから飽きない; 手作りでおいしい.' },
    { id: 'iro-pi-l6-8', number: 8, prompt: '聴解 06-03: Ｃプライス é descrito como:', image: `${IMG}/ZZ_06_1_03_gyoomuyoosuupaa.png`, imageAlt: 'supermercado de uso comercial', choices: [{ n: 1, text: '業務用のスーパー' }, { n: 2, text: '朝市' }, { n: 3, text: 'もんじゃ焼きのお店' }, { n: 4, text: 'タイ料理の居酒屋' }], answer: 1, explanationPt: 'Ｃプライス é um supermercado de uso comercial, mostrado na TV e usado também por clientes comuns.' },
    { id: 'iro-pi-l6-9', number: 9, prompt: '聴解 06-03: qual vantagem de Ｃプライス aparece no diálogo?', choices: [{ n: 1, text: 'cada item vem em grande quantidade, fica barato e há muitos congelados' }, { n: 2, text: 'não precisa acordar cedo' }, { n: 3, text: 'tem balcão de comida tailandesa' }, { n: 4, text: 'os pratos são todos por 600円' }], answer: 1, explanationPt: '一つ一つの量が多いから、その分安い. Também há muitos 冷凍食品.' },
    { id: 'iro-pi-l6-10', number: 10, prompt: '聴解 06-04: こばとの里 é:', image: `${IMG}/ZZ_06_1_01_michinoeki.png`, imageAlt: 'michi no eki com feira da manhã', choices: [{ n: 1, text: '朝市をやっている道の駅' }, { n: 2, text: '駅前の安いスーパー' }, { n: 3, text: '昔からあるお惣菜屋' }, { n: 4, text: '業務用のスーパー' }], answer: 1, explanationPt: 'こばとの里 é um 道の駅 que faz 朝市 todo domingo.' },
    { id: 'iro-pi-l6-11', number: 11, prompt: '聴解 06-04: por que こばとの里 é recomendado para verduras/legumes?', choices: [{ n: 1, text: '農家の人 vendem diretamente; é barato, fresco e gostoso' }, { n: 2, text: 'tem muitos pratos de delivery' }, { n: 3, text: 'vende carne barata no dia 29' }, { n: 4, text: 'só vende produtos importados' }], answer: 1, explanationPt: '農家の人が直接売っているから安くて新鮮. Se não souber como comer, pode perguntar ao agricultor.' },
    { id: 'iro-pi-l6-12', number: 12, prompt: 'Em こばとの里, qual cuidado aparece no diálogo?', choices: [{ n: 1, text: 'ir de manhã; se não for 午前中, os vegetais podem esgotar' }, { n: 2, text: 'reservar pelo aplicativo' }, { n: 3, text: 'pedir com a picância tailandesa' }, { n: 4, text: 'levar um tablet de pedido' }], answer: 1, explanationPt: 'B diz que, por ser 朝市, 午前中に行かないと野菜が売り切れちゃう.' },
    { id: 'iro-pi-l6-13', number: 13, prompt: 'Vocabulário da atividade 1: 玉ねぎ／面倒（な）／帰り／その分／早起きする significam:', choices: [{ n: 1, text: 'cebola / trabalhoso / volta para casa / por isso, na mesma medida / acordar cedo' }, { n: 2, text: 'cenoura / barato / ida / ontem / cozinhar demais' }, { n: 3, text: 'macarrão / picante / pedido / subtotal / fritar' }, { n: 4, text: 'carne / doce / cancelamento / imposto / misturar' }], answer: 1, explanationPt: 'São os itens de confirmação antes de ouvir 06-01 a 06-04 novamente.' },
    { id: 'iro-pi-l6-14', number: 14, prompt: '「餃子とかうどんとか、まとめて買っておくと便利ですよ」 usa V-ておく para:', choices: [{ n: 1, text: 'fazer algo antes, com um objetivo futuro' }, { n: 2, text: 'negar uma ação' }, { n: 3, text: 'comparar com algo parecido' }, { n: 4, text: 'pedir desculpa formalmente' }], answer: 1, translationPt: 'É prático comprar gyoza, udon etc. em quantidade e deixar preparado/guardado.', explanationPt: 'V-ておく indica fazer algo de antemão. Na fala, 買っておく também pode soar como 買っとく.' },
    { id: 'iro-pi-l6-15', number: 15, prompt: 'Can-do 19: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ler um artigo online sobre alimentação e entender o conteúdo geral' }, { n: 2, text: 'fazer pedido em restaurante familiar' }, { n: 3, text: 'pedir conserto de ar-condicionado' }, { n: 4, text: 'dar conselho para fazer amigos' }], answer: 1, explanationPt: 'A atividade 2 lê um artigo sobre 電子レンジ調理法 para pessoas que moram sozinhas.' },
    { id: 'iro-pi-l6-16', number: 16, prompt: 'No artigo, o trecho marcado com ★ apresenta:', image: `${IMG}/ZZ_06_2_01_nettonokiji.png`, imageAlt: 'pessoa lendo artigo no smartphone', choices: [{ n: 1, text: 'pontos convenientes da culinária com micro-ondas e receitas recomendadas' }, { n: 2, text: 'um ranking de restaurantes tailandeses' }, { n: 3, text: 'um aviso de emergência' }, { n: 4, text: 'um pedido por tablet' }], answer: 1, explanationPt: 'O título do artigo é: こんなに便利！ 電子レンジ調理法 おすすめレシピも紹介！' },
    { id: 'iro-pi-l6-17', number: 17, prompt: 'No artigo, 「便利なポイント1」 é:', image: `${IMG}/ZZ_06_2_03_araimono.png`, imageAlt: 'menos louça para lavar', choices: [{ n: 1, text: '時短＆洗い物ラクラク' }, { n: 2, text: '失敗なしで安心' }, { n: 3, text: '一人分にちょうどいい' }, { n: 4, text: '少ない油でヘルシー' }], answer: 1, explanationPt: 'O ponto 1 diz que o tempo de preparo é curto e há menos louça porque se pode usar recipiente próprio para micro-ondas.' },
    { id: 'iro-pi-l6-18', number: 18, prompt: 'No artigo, 「便利なポイント2」 é:', image: `${IMG}/ZZ_06_2_02_kanetsuchuu.png`, imageAlt: 'cozinhar sem ficar olhando o fogo', choices: [{ n: 1, text: '失敗なしで安心' }, { n: 2, text: '時短＆洗い物ラクラク' }, { n: 3, text: '少ない油でヘルシー' }, { n: 4, text: '一人分にちょうどいい' }], answer: 1, explanationPt: 'Como não usa fogo, mesmo deixando de olhar durante o aquecimento, tudo bem; é seguro para iniciantes.' },
    { id: 'iro-pi-l6-19', number: 19, prompt: 'No artigo, 「便利なポイント3」 é:', image: `${IMG}/ZZ_06_2_04_hitoribun.png`, imageAlt: 'preparo de uma porção', choices: [{ n: 1, text: '一人分にちょうどいい' }, { n: 2, text: '業務用で安い' }, { n: 3, text: '直接売っている' }, { n: 4, text: '本場の辛さ' }], answer: 1, explanationPt: 'O artigo diz que dá para preparar bem uma pequena quantidade, ideal para quem mora sozinho.' },
    { id: 'iro-pi-l6-20', number: 20, prompt: 'No artigo, 「便利なポイント4」 é:', image: `${IMG}/ZZ_06_2_05_abura.png`, imageAlt: 'cozinhar com pouco óleo', choices: [{ n: 1, text: '少ない油でヘルシー' }, { n: 2, text: '朝市で新鮮' }, { n: 3, text: 'お酒にも合う' }, { n: 4, text: '手作りでおいしい' }], answer: 1, explanationPt: 'O micro-ondas cozinha com a água dos alimentos, então usa pouco óleo e também menos tempero.' },
    { id: 'iro-pi-l6-21', number: 21, prompt: 'Gabarito da leitura: a característica ① combina com quais ilustrações?', choices: [{ n: 1, text: 'b e e: menos louça e menor tempo de preparo' }, { n: 2, text: 'a apenas' }, { n: 3, text: 'c apenas' }, { n: 4, text: 'd e f apenas' }], answer: 1, explanationPt: 'O answer key marca ① = b, e; ② = a; ③ = c; ④ = d, f.' },
    { id: 'iro-pi-l6-22', number: 22, prompt: '「コンビニや外食に頼りがちな一人暮らし」 usa Vがち para:', choices: [{ n: 1, text: 'indicar tendência/frequência alta, geralmente com nuance negativa' }, { n: 2, text: 'fazer algo de antemão' }, { n: 3, text: 'perguntar se algo é bom' }, { n: 4, text: 'dar ordem direta' }], answer: 1, translationPt: 'Uma pessoa que mora sozinha e tende a depender de lojas de conveniência e comer fora.', explanationPt: 'Vがち liga-se à forma masu sem ます: 頼る → 頼りがち, 偏る → 偏りがち.' },
    { id: 'iro-pi-l6-23', number: 23, prompt: 'Can-do 20: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar com algum detalhe a um amigo sobre o que come diariamente e com que toma cuidado' }, { n: 2, text: 'ler cardápio de fast food' }, { n: 3, text: 'explicar regras de lixo' }, { n: 4, text: 'pedir cartão de residência' }], answer: 1, explanationPt: 'A atividade 3 pergunta sobre 毎日の食事 e organiza fala por rotina, motivos, opinião e cuidados.' },
    { id: 'iro-pi-l6-24', number: 24, prompt: 'Vocabulário 【毎日の食事】: 自炊をする／外食をする／デリバリーを頼む correspondem a:', choices: [{ n: 1, text: 'cozinhar para si / comer fora / pedir delivery' }, { n: 2, text: 'trabalhar em turnos / lavar louça / ir ao mercado' }, { n: 3, text: 'fritar / ferver / temperar' }, { n: 4, text: 'pedido por tablet / subtotal / histórico' }], answer: 1, explanationPt: 'A lista também inclui 家族が作ってくれる, 交代で作る, 社食, 寮の食堂, テイクアウト e お惣菜／お弁当を買う.' },
    { id: 'iro-pi-l6-25', number: 25, prompt: '聴解 06-08: エドガー costuma fazer o quê no jantar?', image: `${IMG}/ZZ_06_3_04_gaishoku.png`, imageAlt: 'comer fora', choices: [{ n: 1, text: '外食が多く、quando fica tarde no trabalho pede デリバリー' }, { n: 2, text: 'sempre come na cantina do dormitório' }, { n: 3, text: 'sempre cozinha comida japonesa' }, { n: 4, text: 'só compra obentô' }], answer: 1, explanationPt: 'O gabarito marca d e h: 外食 e デリバリー／出前.' },
    { id: 'iro-pi-l6-26', number: 26, prompt: '聴解 06-08: por que エドガー não cozinha, embora queira?', choices: [{ n: 1, text: 'fica cansado por causa do trabalho' }, { n: 2, text: 'não tem micro-ondas' }, { n: 3, text: 'não gosta de comida japonesa' }, { n: 4, text: 'mora no dormitório sem cozinha' }], answer: 1, explanationPt: 'Ele diz: 自分で作りたいんですけど、仕事で疲れちゃって、料理できないんです.' },
    { id: 'iro-pi-l6-27', number: 27, prompt: '聴解 06-08: o que エドガー come com frequência?', choices: [{ n: 1, text: '定食, ラーメン; no delivery, ピザ e 丼物' }, { n: 2, text: '肉じゃが e 炊き込みご飯' }, { n: 3, text: 'hambúrguer todos os dias' }, { n: 4, text: 'somente peixe grelhado' }], answer: 1, explanationPt: 'Ele lista 定食とかラーメン; quando pede delivery, ピザとか丼物.' },
    { id: 'iro-pi-l6-28', number: 28, prompt: '聴解 06-08: com o que エドガー se preocupa e o que faz?', choices: [{ n: 1, text: 'preocupa-se com dinheiro e nutrição; tenta pensar no equilíbrio e bebe suco de vegetais de manhã' }, { n: 2, text: 'preocupa-se com acordar cedo; vai sempre ao 朝市' }, { n: 3, text: 'preocupa-se com picância; pede sabor tailandês' }, { n: 4, text: 'preocupa-se com convites; escreve SNS' }], answer: 1, explanationPt: 'O answer key marca opinião イ e cuidado: 栄養のバランスを考える; 朝は野菜ジュースを飲んでいる.' },
    { id: 'iro-pi-l6-29', number: 29, prompt: '聴解 06-09: リサ costuma comer onde?', image: `${IMG}/ZZ_06_3_06_shokudoo.png`, imageAlt: 'cantina de dormitório', choices: [{ n: 1, text: '寮の食堂で食べている' }, { n: 2, text: '外食をしている' }, { n: 3, text: '家族が作ってくれる' }, { n: 4, text: 'テイクアウトをする' }], answer: 1, explanationPt: 'Ela mora no dormitório da empresa e come quase todos os dias no refeitório do dormitório, de manhã e à noite.' },
    { id: 'iro-pi-l6-30', number: 30, prompt: '聴解 06-09: como é a refeição da noite no dormitório?', choices: [{ n: 1, text: 'pode escolher carne ou peixe e vem prato de vegetais' }, { n: 2, text: 'sempre é fast food' }, { n: 3, text: 'só há ramen' }, { n: 4, text: 'cada um compra congelados' }], answer: 1, explanationPt: '肉か魚が選べる; também há 野菜の料理.' },
    { id: 'iro-pi-l6-31', number: 31, prompt: '聴解 06-09: por que リサ acaba comendo carne quase todos os dias?', choices: [{ n: 1, text: 'porque não gosta muito de peixe' }, { n: 2, text: 'porque peixe é proibido no dormitório' }, { n: 3, text: 'porque delivery não entrega peixe' }, { n: 4, text: 'porque está fazendo dieta vegetariana' }], answer: 1, explanationPt: 'Ela diz: 魚がちょっと苦手なので、毎日、肉ばかり食べてます.' },
    { id: 'iro-pi-l6-32', number: 32, prompt: '聴解 06-09: como リサ avalia sua alimentação e com o que toma cuidado?', choices: [{ n: 1, text: 'a rotina regular ajuda, mas precisa tomar cuidado para não comer demais' }, { n: 2, text: 'acha caro e nutricionalmente desequilibrado' }, { n: 3, text: 'gosta porque pode comer o que quer e cuida para não desperdiçar' }, { n: 4, text: 'não tem opinião' }], answer: 1, explanationPt: 'O gabarito marca ア: 規則正しい食生活ができて助かる; cuidado: 食べすぎには注意しなくちゃ.' },
    { id: 'iro-pi-l6-33', number: 33, prompt: '聴解 06-10: レー costuma fazer o quê?', image: `${IMG}/ZZ_06_3_01_jisui.png`, imageAlt: 'cozinhar para si', choices: [{ n: 1, text: '毎日、自炊している' }, { n: 2, text: '会社の社食で食べている' }, { n: 3, text: '家族が作ってくれる' }, { n: 4, text: '必ず外食している' }], answer: 1, explanationPt: 'レー mora sozinha e diz: ええ。毎日、自炊してます.' },
    { id: 'iro-pi-l6-34', number: 34, prompt: '聴解 06-10: o que mudou no que レー cozinha?', choices: [{ n: 1, text: 'antes fazia mais pratos do próprio país; recentemente também faz comida japonesa' }, { n: 2, text: 'parou de cozinhar e passou a pedir pizza' }, { n: 3, text: 'só come carne porque não gosta de peixe' }, { n: 4, text: 'só compra pratos prontos' }], answer: 1, explanationPt: '前は自分の国の料理が多かった; 最近は日本食も作っている.' },
    { id: 'iro-pi-l6-35', number: 35, prompt: '聴解 06-10: como レー aprende receitas e que pratos cita?', choices: [{ n: 1, text: 'pesquisa receitas na internet; cita 肉じゃが e 炊き込みご飯' }, { n: 2, text: 'pergunta a agricultores; cita きりたんぽ' }, { n: 3, text: 'lê o cardápio do tablet; cita パフェ' }, { n: 4, text: 'aprende no refeitório; cita hambúrguer' }], answer: 1, explanationPt: 'Ela diz que consegue pesquisar muitas receitas na internet e faz olhando isso: 肉じゃがとか炊き込みご飯とか.' },
    { id: 'iro-pi-l6-36', number: 36, prompt: '聴解 06-10: como レー avalia 自炊 e com que toma cuidado?', choices: [{ n: 1, text: 'gosta porque pode comer o que quer; cuida para não cozinhar demais e desperdiçar' }, { n: 2, text: 'acha caro; bebe suco de vegetais' }, { n: 3, text: 'acha que ajuda na rotina; cuida para não comer demais' }, { n: 4, text: 'não gosta de cozinhar' }], answer: 1, explanationPt: 'O gabarito marca ウ: 好きなものを食べられるのがいい; cuidado: 作りすぎて、むだにしないように.' },
    { id: 'iro-pi-l6-37', number: 37, prompt: '「外食って、やっぱりお金がかかるじゃないですか」 usa Sじゃないですか para:', choices: [{ n: 1, text: 'confirmar algo que se assume que muitas pessoas sabem ou concordam' }, { n: 2, text: 'negar que comer fora custe dinheiro' }, { n: 3, text: 'perguntar pela primeira vez se é caro' }, { n: 4, text: 'dar uma ordem' }], answer: 1, translationPt: 'Comer fora custa dinheiro, né?', explanationPt: 'S（普通形）じゃないですか é usado com entonação descendente. Também aparece em ネットでいろいろレシピを調べられるじゃないですか.' },
    { id: 'iro-pi-l6-38', number: 38, prompt: 'Na prática de fala 06-12, a conversa sobre 食事 segue qual estrutura?', choices: [{ n: 1, text: 'como lida com as refeições → motivo/detalhes/comidas → opinião → cuidados' }, { n: 2, text: 'preço → endereço → telefone → reserva' }, { n: 3, text: 'pedido → cancelamento → pagamento → gorjeta' }, { n: 4, text: 'convite → recusa → desculpa → despedida' }], answer: 1, explanationPt: 'A página organiza a fala em quatro partes: 毎日の食事はどうしている？, razões/detalhes, opinião e 気をつけていること.' },
    { id: 'iro-pi-l6-39', number: 39, prompt: 'Kanji da lição: 冷凍食品／果物／農家 lêem-se:', choices: [{ n: 1, text: 'れいとうしょくひん／くだもの／のうか' }, { n: 2, text: 'れいぞうしょくひん／かもの／のうけ' }, { n: 3, text: 'れいとうたべもの／くだぶつ／のうや' }, { n: 4, text: 'ひえしょくひん／かぶつ／のうか' }], answer: 1, explanationPt: '冷凍食品 = alimentos congelados; 果物 = frutas; 農家 = agricultor/família agricultora.' },
    { id: 'iro-pi-l6-40', number: 40, prompt: 'Kanji da lição: 直接／健康／栄養 lêem-se:', choices: [{ n: 1, text: 'ちょくせつ／けんこう／えいよう' }, { n: 2, text: 'じきせつ／けんきょう／さかえよう' }, { n: 3, text: 'ちょくせつ／けんこ／えいよ' }, { n: 4, text: 'なおせつ／けんこう／えいよう' }], answer: 1, explanationPt: 'Esses kanji aparecem nas frases sobre agricultores vendendo diretamente e pensar no equilíbrio nutricional.' },
    { id: 'iro-pi-l6-41', number: 41, prompt: 'Kanji da lição: 鍋／調味料／新鮮（な）／頼む lêem-se:', choices: [{ n: 1, text: 'なべ／ちょうみりょう／しんせん／たのむ' }, { n: 2, text: 'かね／ちょうみりょう／あたらせん／らいむ' }, { n: 3, text: 'なべ／しらみりょう／しんせん／よりむ' }, { n: 4, text: 'なべ／ちょうあじりょう／しんざん／たのむ' }], answer: 1, explanationPt: '鍋 = panela/hot pot; 調味料 = temperos; 新鮮 = fresco; 頼む = pedir/solicitar.' },
    { id: 'iro-pi-l6-42', number: 42, prompt: 'TIPS: 語呂合わせ é:', image: `${IMG}/ZZ_06_tips_01_nakuyouguisu.png`, imageAlt: 'ilustração para memorizar 794 como nakuyo uguisu Heian-kyo', choices: [{ n: 1, text: 'criar palavras/frases lendo números como sons japoneses' }, { n: 2, text: 'um tipo de micro-ondas' }, { n: 3, text: 'uma feira de agricultores' }, { n: 4, text: 'um prato regional de Chiba' }], answer: 1, explanationPt: 'A lição usa 29 como にく em 肉の日. Outros exemplos: 11/22 いい夫婦の日, 8/31 野菜の日, 794 鳴くようぐいす平安京.' },
    { id: 'iro-pi-l6-43', number: 43, prompt: 'TIPS: 業務用のスーパー no Japão são supermercados que:', choices: [{ n: 1, text: 'vendem ingredientes para restaurantes em grandes quantidades, mas pessoas comuns também podem comprar' }, { n: 2, text: 'só funcionam como cantina de dormitório' }, { n: 3, text: 'vendem apenas comida pronta para viagem' }, { n: 4, text: 'não vendem congelados nem temperos' }], answer: 1, explanationPt: 'A TIPS explica que produtos vêm em quantidades maiores e tendem a ser mais baratos; há congelados, temperos, secos, enlatados e produtos internacionais.' },
    { id: 'iro-pi-l6-44', number: 44, prompt: 'TIPS: 出前・デリバリー, segundo o texto, significa:', choices: [{ n: 1, text: 'pedir comida de restaurante para ser entregue em casa' }, { n: 2, text: 'cozinhar com micro-ondas' }, { n: 3, text: 'doar imposto à cidade natal' }, { n: 4, text: 'comparar pratos parecidos' }], answer: 1, explanationPt: '出前 tradicional já existia em lojas de soba/sushi; hoje apps e serviços como Uber Eats e 出前館 são comuns nas cidades.' },
    { id: 'iro-pi-l6-45', number: 45, prompt: 'Sobre delivery moderno no Japão, qual afirmação segue a TIPS?', choices: [{ n: 1, text: 'é conveniente, mas tende a custar mais por taxas de entrega/serviço' }, { n: 2, text: 'é sempre mais barato que comer no local' }, { n: 3, text: 'só permite pedir pizza' }, { n: 4, text: 'não existe em family restaurants' }], answer: 1, explanationPt: 'O texto cita hambúrguer, pizza, bento, sushi, 丼物, curry e ramen, e observa que costuma ficar mais caro que comer no restaurante.' },
  ],
}

// ---- Lição 7: たくさんの人と友だちになれればと思っています (tópico 出会う) ----
const lesson7Group: ExerciseGroup = {
  id: 'iro-pi-l7',
  title: 'たくさんの人と友だちになれればと思っています',
  subtitlePt: 'Fazer conhecidos · perguntar sobre círculos · autoapresentação em grupo',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l7-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: '出会う (encontros / conhecer pessoas)' }, { n: 2, text: '毎日の食事' }, { n: 3, text: 'どこに住む？' }, { n: 4, text: '旅行に行こう' }], answer: 1, explanationPt: 'A Lição 7 abre o tópico 出会う, com foco em fazer conhecidos, entrar em grupos e se apresentar.' },
    { id: 'iro-pi-l7-2', number: 2, prompt: 'Pergunta de abertura: あなたの友だちとは、どこでどのように知り合いましたか？', choices: [{ n: 1, text: 'Onde e como você conheceu seus amigos?' }, { n: 2, text: 'Você cozinha todos os dias?' }, { n: 3, text: 'Que restaurante recomenda?' }, { n: 4, text: 'Você já perdeu a chave?' }], answer: 1, explanationPt: 'A abertura prepara o tema de ampliar relações e fazer amizades.' },
    { id: 'iro-pi-l7-3', number: 3, prompt: 'Can-do 21: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ouvir conselhos simples sobre onde ir ou o que fazer para ampliar relações' }, { n: 2, text: 'ler artigo sobre micro-ondas' }, { n: 3, text: 'pedir comida por tablet' }, { n: 4, text: 'fazer reclamação de moradia' }], answer: 1, explanationPt: 'A atividade 1 trabalha conselhos para quem quer conhecidos ou amigos.' },
    { id: 'iro-pi-l7-4', number: 4, prompt: '聴解 07-01: ミー quer:', image: `${IMG}/ZZ_07_1_01_kinjonohito.png`, imageAlt: 'pessoa que quer conhecer vizinhos', choices: [{ n: 1, text: 'conhecer pessoas da vizinhança' }, { n: 2, text: 'ter amigos de vários países' }, { n: 3, text: 'conhecer outros pais criando filhos' }, { n: 4, text: 'ter amigos fãs de beisebol' }], answer: 1, explanationPt: 'ミー diz que não tem oportunidade de falar com vizinhos e quer conhecê-los.' },
    { id: 'iro-pi-l7-5', number: 5, prompt: '聴解 07-01: qual método é recomendado para ミー?', image: `${IMG}/ZZ_07_1_08_choonai.png`, imageAlt: 'atividade da associação de bairro', choices: [{ n: 1, text: '町内の活動に参加する' }, { n: 2, text: '国際交流イベントに参加する' }, { n: 3, text: 'ファンが集まる店に行く' }, { n: 4, text: '児童館に行く' }], answer: 1, explanationPt: 'O gabarito marca ① d: participar de atividades da comunidade/bairro.' },
    { id: 'iro-pi-l7-6', number: 6, prompt: '聴解 07-01: nessas atividades, as pessoas podem:', choices: [{ n: 1, text: 'fazer limpeza voluntária e plantar flores no parque' }, { n: 2, text: 'fazer calligraphy e origami' }, { n: 3, text: 'assistir a jogo no bar' }, { n: 4, text: 'brincar em brinquedos de crianças' }], answer: 1, explanationPt: 'A fala cita ボランティアで掃除をしたり、公園にお花を植えたりする.' },
    { id: 'iro-pi-l7-7', number: 7, prompt: '聴解 07-01: o que ミー deve fazer depois?', choices: [{ n: 1, text: 'ver o 掲示板 da cidade/bairro' }, { n: 2, text: 'olhar o cronograma mensal no site' }, { n: 3, text: 'ir diretamente buscar panfleto' }, { n: 4, text: 'vestir uniforme vermelho' }], answer: 1, explanationPt: 'O answer key marca エ: 町の掲示板を見る.' },
    { id: 'iro-pi-l7-8', number: 8, prompt: '聴解 07-02: a pessoa quer:', image: `${IMG}/ZZ_07_1_02_ironnakuni.png`, imageAlt: 'pessoa que quer amigos de vários países', choices: [{ n: 1, text: 'amigos de vários países' }, { n: 2, text: 'colegas fãs do Carp' }, { n: 3, text: 'conhecer os vizinhos' }, { n: 4, text: 'aprender a cozinhar para si' }], answer: 1, explanationPt: 'B diz: いろんな国の友だちがほしいんです.' },
    { id: 'iro-pi-l7-9', number: 9, prompt: '聴解 07-02: que método é recomendado?', image: `${IMG}/ZZ_07_1_05_kokusaikooryuu.png`, imageAlt: 'evento de intercâmbio internacional', choices: [{ n: 1, text: '市の国際交流イベントに参加する' }, { n: 2, text: '町内の活動に参加する' }, { n: 3, text: '寮の食堂で食べる' }, { n: 4, text: '業務用スーパーに行く' }], answer: 1, explanationPt: 'O gabarito marca ② a: participar de eventos de intercâmbio internacional da cidade.' },
    { id: 'iro-pi-l7-10', number: 10, prompt: '聴解 07-02: que atividades podem existir nesses eventos?', choices: [{ n: 1, text: 'experiências de cultura japonesa, como 書道 e 折り紙, e passeio pela cidade' }, { n: 2, text: 'pedidos por tablet e self-checkout' }, { n: 3, text: 'nabe de kiritanpo' }, { n: 4, text: 'conserto de ar-condicionado' }], answer: 1, explanationPt: 'A fala cita 書道, 折り紙, 日本文化体験 e 町を散策するイベント.' },
    { id: 'iro-pi-l7-11', number: 11, prompt: '聴解 07-02: o que deve fazer para se inscrever?', choices: [{ n: 1, text: 'ver o cronograma mensal no website e se inscrever por lá' }, { n: 2, text: 'ver o掲示板 da cidade' }, { n: 3, text: 'vestir uniforme e ir ao restaurante' }, { n: 4, text: 'perguntar ao agricultor' }], answer: 1, explanationPt: 'O answer key marca ア: ウェブサイトで毎月のスケジュールを見る.' },
    { id: 'iro-pi-l7-12', number: 12, prompt: '聴解 07-03: a pessoa quer:', image: `${IMG}/ZZ_07_1_03_kosodatechuu.png`, imageAlt: 'pessoa criando filho pequeno', choices: [{ n: 1, text: 'conhecer pessoas que também estão criando filhos' }, { n: 2, text: 'amigos de vários países' }, { n: 3, text: 'colegas fãs de beisebol' }, { n: 4, text: 'entrar em grupo de culinária' }], answer: 1, explanationPt: 'B passa muito tempo só com a criança e quer conversar com outras pessoas em 子育て中.' },
    { id: 'iro-pi-l7-13', number: 13, prompt: '聴解 07-03: que lugar é recomendado?', image: `${IMG}/ZZ_07_1_07_jidookan.png`, imageAlt: '児童館 ou centro de apoio à criação de filhos', choices: [{ n: 1, text: '児童館や子育て支援センター' }, { n: 2, text: 'ファンが集まるお店' }, { n: 3, text: '国際交流イベント' }, { n: 4, text: '業務用スーパー' }], answer: 1, explanationPt: 'O gabarito marca ③ c: ir ao jidokan ou centro de apoio à criação de filhos.' },
    { id: 'iro-pi-l7-14', number: 14, prompt: '聴解 07-03: o que se pode fazer lá?', choices: [{ n: 1, text: 'brincar com brinquedos e participar de eventos como aniversário' }, { n: 2, text: 'assistir jogo e torcer na TV' }, { n: 3, text: 'comprar legumes frescos' }, { n: 4, text: 'escrever SNS sobre restaurante' }], answer: 1, explanationPt: 'A fala cita おもちゃで遊ぶこと e お誕生日会などのイベント.' },
    { id: 'iro-pi-l7-15', number: 15, prompt: '聴解 07-03: o que a pessoa deve fazer depois?', choices: [{ n: 1, text: 'ir diretamente e pegar/ver o panfleto' }, { n: 2, text: 'olhar o site de eventos internacionais' }, { n: 3, text: 'ver o掲示板' }, { n: 4, text: 'ir usando uniforme vermelho' }], answer: 1, explanationPt: 'O answer key marca イ: 直接行って、チラシをもらう.' },
    { id: 'iro-pi-l7-16', number: 16, prompt: '聴解 07-04: ケビン quer:', image: `${IMG}/ZZ_07_1_04_yakyuufan.png`, imageAlt: 'fã de beisebol', choices: [{ n: 1, text: 'companheiros para conversar sobre o Carp' }, { n: 2, text: 'vizinhos para limpar o bairro' }, { n: 3, text: 'outros pais no jidokan' }, { n: 4, text: 'amigos de vários países' }], answer: 1, explanationPt: 'ケビン se tornou fã do Carp e quer 仲間 com quem falar sobre o time.' },
    { id: 'iro-pi-l7-17', number: 17, prompt: '聴解 07-04: que lugar é recomendado?', image: `${IMG}/ZZ_07_1_06_fan.png`, imageAlt: 'loja onde fãs se reúnem', choices: [{ n: 1, text: 'um お好み焼き屋 onde fãs do Carp se reúnem' }, { n: 2, text: 'um centro infantil' }, { n: 3, text: 'uma aula de japonês' }, { n: 4, text: 'uma loja de pratos prontos' }], answer: 1, explanationPt: 'A recomendação é o restaurante 鯉屋, em 北通り, onde fãs assistem e torcem juntos.' },
    { id: 'iro-pi-l7-18', number: 18, prompt: '聴解 07-04: para fazer amizade no local, ケビン deve:', choices: [{ n: 1, text: 'vestir o uniforme vermelho e ir quando houver jogo' }, { n: 2, text: 'levar panfleto do jidokan' }, { n: 3, text: 'comprar congelados' }, { n: 4, text: 'preparar comida japonesa' }], answer: 1, explanationPt: 'O answer key marca ウ: ユニフォームを着てお店に行く.' },
    { id: 'iro-pi-l7-19', number: 19, prompt: 'Vocabulário da atividade 1: ポスター／なかなか～ない／載る／幼稚園／少しずつ／仲良くなる significam:', choices: [{ n: 1, text: 'pôster / não conseguir facilmente / aparecer publicado / jardim de infância / pouco a pouco / ficar próximo' }, { n: 2, text: 'tempero / entregar / congelar / escola de inglês / de repente / cozinhar' }, { n: 3, text: 'pedido / subtotal / alergênico / criança / cedo / vender' }, { n: 4, text: 'mensagem / comida / esporte / barulho / imposto / cortar' }], answer: 1, explanationPt: 'Esses itens aparecem antes de ouvir os diálogos 07-01 a 07-04 novamente.' },
    { id: 'iro-pi-l7-20', number: 20, prompt: '「興味があるイベントに参加すれば、知り合いもできると思います」 usa V-ば para:', choices: [{ n: 1, text: 'dizer uma condição para o resultado acontecer' }, { n: 2, text: 'fazer algo com antecedência' }, { n: 3, text: 'confirmar algo conhecido' }, { n: 4, text: 'comparar com algo parecido' }], answer: 1, translationPt: 'Se você participar de eventos que te interessam, acho que também conseguirá conhecidos.', explanationPt: 'V-ば marca condição. A lição também usa どうすれば para perguntar por um método específico.' },
    { id: 'iro-pi-l7-21', number: 21, prompt: '「赤いユニフォームを着て行けば、すぐに周りの人と仲良くなると思います」 significa:', choices: [{ n: 1, text: 'Se for vestindo o uniforme vermelho, acho que logo vai se enturmar com as pessoas ao redor' }, { n: 2, text: 'Vou comprar um uniforme vermelho antes' }, { n: 3, text: 'Não se deve vestir vermelho' }, { n: 4, text: 'Vermelho é caro' }], answer: 1, explanationPt: '着て行けば combina 着て行く na forma condicional バ: se for vestindo.' },
    { id: 'iro-pi-l7-22', number: 22, prompt: '「通っているうちに、少しずつ話ができる人が増えると思います」 usa V-ているうちに para:', choices: [{ n: 1, text: 'indicar uma mudança que ocorre enquanto a ação se repete/continua' }, { n: 2, text: 'dar uma ordem direta' }, { n: 3, text: 'pedir permissão' }, { n: 4, text: 'explicar uma tela de pedido' }], answer: 1, translationPt: 'Enquanto você continuar frequentando, acho que aos poucos vão aumentar as pessoas com quem consegue conversar.', explanationPt: 'V-ているうちに é seguido por mudança ou resultado.' },
    { id: 'iro-pi-l7-23', number: 23, prompt: 'Can-do 22: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'escrever mensagem para um amigo que participa de um círculo e obter informações sobre ele' }, { n: 2, text: 'explicar comida regional' }, { n: 3, text: 'ler artigo online sobre micro-ondas' }, { n: 4, text: 'ligar para emergência' }], answer: 1, explanationPt: 'A atividade 2 trabalha uma mensagem para perguntar sobre umサークル.' },
    { id: 'iro-pi-l7-24', number: 24, prompt: 'No exemplo da mensagem, グレイ quer participar de qual círculo?', choices: [{ n: 1, text: '世界の料理サークル' }, { n: 2, text: 'カープ応援サークル' }, { n: 3, text: '児童館のイベント' }, { n: 4, text: '町内清掃ボランティア' }], answer: 1, explanationPt: 'O answer key marca: 世界の料理サークル.' },
    { id: 'iro-pi-l7-25', number: 25, prompt: 'No exemplo da mensagem, グレイ pergunta:', choices: [{ n: 1, text: 'que comidas fazem, se há estrangeiros e se tudo bem não saber muito japonês' }, { n: 2, text: 'preço do restaurante, picância e bebida recomendada' }, { n: 3, text: 'onde comprar cebola barata' }, { n: 4, text: 'como reservar quarto' }], answer: 1, explanationPt: 'O answer key resume as perguntas: いつもどんな料理を作るのか, 外国人もいるか, 日本語があまりできなくてもだいじょうぶか.' },
    { id: 'iro-pi-l7-26', number: 26, prompt: 'Estrutura do exemplo da mensagem: ①, ②, ③, ④ correspondem a:', choices: [{ n: 1, text: 'começar conversa → comunicar o assunto → fazer perguntas → encerrar após sugestão' }, { n: 2, text: 'perguntar → encerrar → começar → recusar' }, { n: 3, text: 'somente agradecer, sem assunto' }, { n: 4, text: 'pedir comida → pagar → ir embora → avaliar' }], answer: 1, explanationPt: 'O gabarito marca ① d, ② c, ③ b, ④ a.' },
    { id: 'iro-pi-l7-27', number: 27, prompt: 'Na resposta do exemplo, ヘミン diz que noサークル:', choices: [{ n: 1, text: 'há japoneses e estrangeiros, todos são boas pessoas; グレイ ficará bem' }, { n: 2, text: 'só entram japoneses fluentes' }, { n: 3, text: 'ninguém cozinha comida estrangeira' }, { n: 4, text: 'é proibido ir no domingo' }], answer: 1, explanationPt: 'Na mensagem: 日本人も外国人も、みんないい人です; グレイさんなら大丈夫です.' },
    { id: 'iro-pi-l7-28', number: 28, prompt: 'As imagens da atividade 2 sugerem possíveisサークル como:', image: `${IMG}/ZZ_07_2_01_shodoo.png`, imageAlt: 'círculo de caligrafia', choices: [{ n: 1, text: '書道, 和太鼓, フットサル, 将棋, 合唱, 日本語, 合気道, プレイグループ, ハイキング' }, { n: 2, text: 'apenas restaurantes tailandeses' }, { n: 3, text: 'somente mercados e lojas' }, { n: 4, text: 'somente hospitais' }], answer: 1, explanationPt: 'A atividade permite usar essas ilustrações como referência ou pensar livremente em outro grupo.' },
    { id: 'iro-pi-l7-29', number: 29, prompt: 'Can-do 23: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'fazer uma autoapresentação coerente com perfil, esperanças e objetivos' }, { n: 2, text: 'preencher formulário de imposto' }, { n: 3, text: 'pedir delivery por aplicativo' }, { n: 4, text: 'reclamar de barulho' }], answer: 1, explanationPt: 'A atividade 3 é a autoapresentação ao entrar pela primeira vez em um círculo ou grupo.' },
    { id: 'iro-pi-l7-30', number: 30, prompt: '会話 07-07: quem é カイラ?', image: `${IMG}/ZZ_07_3_01_jikoshookai.png`, imageAlt: 'autoapresentação em grupo de culinária', choices: [{ n: 1, text: 'uma pessoa das Filipinas, há 3 anos no Japão, mora em 東区 e ensina inglês em uma escola de conversação' }, { n: 2, text: 'uma fã do Carp que mora em Hiroshima' }, { n: 3, text: 'uma agricultora de mercado matinal' }, { n: 4, text: 'uma funcionária de restaurante tailandês' }], answer: 1, explanationPt: 'O gabarito registra: 出身 フィリピン, 日本に来て3年, 東区, 英会話の学校で英語を教えている.' },
    { id: 'iro-pi-l7-31', number: 31, prompt: '会話 07-07: por que カイラ entrou no 世界の料理サークル?', choices: [{ n: 1, text: 'gosta de cozinhar e quer fazer comidas de vários países' }, { n: 2, text: 'quer ver jogos de beisebol' }, { n: 3, text: 'quer procurar apartamento' }, { n: 4, text: 'quer comprar alimentos congelados' }], answer: 1, explanationPt: 'Ela gosta de cozinhar, faz várias comidas e quer fazer comidas de muitos países.' },
    { id: 'iro-pi-l7-32', number: 32, prompt: '会話 07-07: sobre comida japonesa, カイラ diz que:', choices: [{ n: 1, text: 'às vezes faz olhando receitas na internet' }, { n: 2, text: 'nunca tentou' }, { n: 3, text: 'só come no dormitório' }, { n: 4, text: 'não quer aprender' }], answer: 1, explanationPt: '日本料理も、ネットのレシピを見ながら、ときどき作ります.' },
    { id: 'iro-pi-l7-33', number: 33, prompt: '会話 07-07: que esperanças カイラ expressa?', choices: [{ n: 1, text: 'fazer muitos amigos, ser convidada para refeições e atividades, e se divertir com todos' }, { n: 2, text: 'comprar carne no dia 29' }, { n: 3, text: 'só estudar gramática sozinha' }, { n: 4, text: 'pedir atendimento de emergência' }], answer: 1, explanationPt: 'Ela diz: たくさんの人と友だちになれれば, 食事とかいろいろ誘ってもらえれば, 楽しく活動できればいいな.' },
    { id: 'iro-pi-l7-34', number: 34, prompt: '「たくさんの人と友だちになれればと思っています」 expressa:', choices: [{ n: 1, text: 'esperança/desejo usando V-ば + と思っています' }, { n: 2, text: 'ordem para fazer amigos' }, { n: 3, text: 'negação de amizade' }, { n: 4, text: 'comparação com amigos' }], answer: 1, translationPt: 'Espero conseguir fazer amizade com muitas pessoas.', explanationPt: 'Na autoapresentação, V-ば + と思っています/うれしいです/いいなと思います apresenta esperanças de forma suave.' },
    { id: 'iro-pi-l7-35', number: 35, prompt: '「食事とか、いろいろ誘ってもらえればうれしいです」 significa:', choices: [{ n: 1, text: 'Eu ficaria feliz se me convidassem para refeições e outras coisas' }, { n: 2, text: 'Não quero ser convidado para refeições' }, { n: 3, text: 'Já comi antes de vir' }, { n: 4, text: 'Vou convidar todo mundo agora' }], answer: 1, explanationPt: '誘ってもらえればうれしいです expressa desejo envolvendo ação recebida de outras pessoas.' },
    { id: 'iro-pi-l7-36', number: 36, prompt: 'Estratégia 07-09: em 「英語会話の……あ、英会話の学校で」, a correção serve para:', choices: [{ n: 1, text: 'corrigir uma palavra errada pela palavra certa' }, { n: 2, text: 'corrigir gramática' }, { n: 3, text: 'trocar por palavra mais adequada' }, { n: 4, text: 'mudar de assunto' }], answer: 1, explanationPt: 'O answer key marca 2: 間違えたことばを正しいことばに直す.' },
    { id: 'iro-pi-l7-37', number: 37, prompt: 'Estratégia 07-09: em 「いろいろの……えっと、いろいろな料理」, a correção serve para:', choices: [{ n: 1, text: 'corrigir a gramática' }, { n: 2, text: 'corrigir uma data' }, { n: 3, text: 'trocar por termo técnico' }, { n: 4, text: 'pedir repetição' }], answer: 1, explanationPt: 'O answer key marca 1: 文法を直す.' },
    { id: 'iro-pi-l7-38', number: 38, prompt: 'Estratégia 07-09: em 「このグループ……えー、このサークルで」, a correção serve para:', choices: [{ n: 1, text: 'substituir por uma palavra mais adequada' }, { n: 2, text: 'corrigir conjugação' }, { n: 3, text: 'corrigir número' }, { n: 4, text: 'encerrar a fala' }], answer: 1, explanationPt: 'O answer key marca 3: より適切な別のことばに言い換える.' },
    { id: 'iro-pi-l7-39', number: 39, prompt: 'Kanji da lição: 自己紹介／興味／仲間 lêem-se:', choices: [{ n: 1, text: 'じこしょうかい／きょうみ／なかま' }, { n: 2, text: 'じぶんしょうかい／こうみ／ちゅうま' }, { n: 3, text: 'しこしょうかい／きょうあじ／なかま' }, { n: 4, text: 'じこしょうかい／きょうみ／なかかん' }], answer: 1, explanationPt: '自己紹介 = autoapresentação; 興味 = interesse; 仲間 = companheiro/colega de grupo.' },
    { id: 'iro-pi-l7-40', number: 40, prompt: 'Kanji da lição: 子育て／児童館／掲示板 lêem-se:', choices: [{ n: 1, text: 'こそだて／じどうかん／けいじばん' }, { n: 2, text: 'こいくて／じどうやかた／かかげばん' }, { n: 3, text: 'こそだて／こどもかん／けいじばん' }, { n: 4, text: 'しそだて／じどうかん／けいばん' }], answer: 1, explanationPt: 'Essas palavras aparecem nos conselhos para pessoas criando filhos e em atividades da comunidade.' },
    { id: 'iro-pi-l7-41', number: 41, prompt: 'Kanji da lição: 掃除／次／簡単（な）／植える lêem-se:', choices: [{ n: 1, text: 'そうじ／つぎ／かんたん／うえる' }, { n: 2, text: 'そうのぞき／じ／かんだん／そだてる' }, { n: 3, text: 'せいじ／つぎ／かんたん／うえる' }, { n: 4, text: 'そうじ／つぎ／けんたん／しょくえる' }], answer: 1, explanationPt: '掃除 e 植える aparecem nas atividades voluntárias do bairro; 簡単 na frase 自己紹介をお願いします.' },
    { id: 'iro-pi-l7-42', number: 42, prompt: 'TIPS: 児童館 é:', choices: [{ n: 1, text: 'instalação onde crianças brincam/aprendem e pais em子育て também recebem apoio e informações' }, { n: 2, text: 'um restaurante de fãs de beisebol' }, { n: 3, text: 'um supermercado comercial' }, { n: 4, text: 'um tipo de micro-ondas' }], answer: 1, explanationPt: 'A TIPS diz que muitos jidokan são gratuitos, podem ter regras de idade/região e oferecem brinquedos, livros, espaço para movimento, eventos e apoio aos pais.' },
    { id: 'iro-pi-l7-43', number: 43, prompt: 'TIPS: sobre times profissionais de beisebol no Japão, qual afirmação está correta?', choices: [{ n: 1, text: 'há 12 times; cada um tem cidade/região-base e torcidas locais fortes' }, { n: 2, text: 'há apenas um time nacional' }, { n: 3, text: 'o Carp é um time de futebol' }, { n: 4, text: 'não se assiste jogo em estádio' }], answer: 1, explanationPt: 'A TIPS usa o Hiroshima Toyo Carp como exemplo e lista as bases dos times profissionais no Japão em 2026.' },
  ],
}

// ---- Lição 8: 隣、いいですか？ (tópico 出会う) ----
const lesson8Group: ExerciseGroup = {
  id: 'iro-pi-l8',
  title: '隣、いいですか？',
  subtitlePt: 'Falar com desconhecidos · responder conversa casual · primeira impressão',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l8-1', number: 1, prompt: 'Qual é o tópico continuado nesta lição?', choices: [{ n: 1, text: '出会う (encontros / conhecer pessoas)' }, { n: 2, text: '毎日の食事' }, { n: 3, text: '私と日本語' }, { n: 4, text: '自然を楽しむ' }], answer: 1, explanationPt: 'A Lição 8 continua o tópico 出会う, agora com foco em falar com pessoas que você ainda não conhece.' },
    { id: 'iro-pi-l8-2', number: 2, prompt: 'Pergunta de abertura: 知らない人に話しかけたり、話しかけられたりすることがありますか？', choices: [{ n: 1, text: 'Você costuma falar com desconhecidos ou ser abordado por desconhecidos?' }, { n: 2, text: 'Você cozinha todos os dias?' }, { n: 3, text: 'Você sabe jogar shogi?' }, { n: 4, text: 'Você vai ao mercado?' }], answer: 1, explanationPt: 'A abertura prepara situações de conversa casual com pessoas encontradas pela primeira vez.' },
    { id: 'iro-pi-l8-3', number: 3, prompt: 'Can-do 24: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'iniciar conversa com alguém que está encontrando pela primeira vez' }, { n: 2, text: 'ler artigo de culinária com micro-ondas' }, { n: 3, text: 'pedir delivery por aplicativo' }, { n: 4, text: 'explicar imposto da cidade natal' }], answer: 1, explanationPt: 'A atividade 1 trabalha como falar primeiro com alguém de quem você ficará próximo, como colega de trabalho ou membro de círculo.' },
    { id: 'iro-pi-l8-4', number: 4, prompt: '聴解 08-01: no primeiro dia de trabalho, a frase usada para iniciar conversa é:', image: `${IMG}/ZZ_08_1_01_shokuba.png`, imageAlt: 'primeiro dia no local de trabalho', choices: [{ n: 1, text: 'あの、今日、入社の方ですか？' }, { n: 2, text: '隣、いいですか？' }, { n: 3, text: '今日から参加するんですが……' }, { n: 4, text: '田中さんのお友だちですか？' }], answer: 1, translationPt: 'Com licença, você é alguém que entrou na empresa hoje?', explanationPt: 'O gabarito marca esta fala para a cena ① 初出勤の職場で.' },
    { id: 'iro-pi-l8-5', number: 5, prompt: '聴解 08-01: depois de iniciar conversa, como ela continua?', choices: [{ n: 1, text: 'perguntando sobre a outra pessoa e falando de si mesma' }, { n: 2, text: 'falando de conhecidos em comum' }, { n: 3, text: 'comentando um objeto da outra pessoa' }, { n: 4, text: 'pedindo desculpas por uma regra de banho' }], answer: 1, explanationPt: 'O answer key marca ① = d: perguntar sobre a outra pessoa e falar sobre si.' },
    { id: 'iro-pi-l8-6', number: 6, prompt: '聴解 08-01: ファルハナ e カイン dizem que:', choices: [{ n: 1, text: 'ファルハナ veio da Malásia; カイン veio de Myanmar e chegou ao Japão há duas semanas' }, { n: 2, text: 'ambas são colegas de escola de Tanaka' }, { n: 3, text: 'ambas estão em um círculo de shogi' }, { n: 4, text: 'ambas são turistas em uma fonte termal' }], answer: 1, explanationPt: 'ファルハナ se apresenta como da Malásia; ユユカイン diz que veio de Myanmar e chegou ao Japão há duas semanas.' },
    { id: 'iro-pi-l8-7', number: 7, prompt: '聴解 08-02: na festa de casamento, 王志強 inicia a conversa dizendo:', image: `${IMG}/ZZ_08_1_02_kekkonpaatii.png`, imageAlt: 'festa de casamento de colega', choices: [{ n: 1, text: 'こんにちは。田中さんのお友だちですか？' }, { n: 2, text: 'あの、今日、入社の方ですか？' }, { n: 3, text: 'ここのお風呂には、よく来るんですか？' }, { n: 4, text: '観光客ですか？' }], answer: 1, translationPt: 'Olá. Você é amigo do Tanaka?', explanationPt: 'A cena é 同僚の結婚パーティーで; 王 é colega de empresa de Tanaka.' },
    { id: 'iro-pi-l8-8', number: 8, prompt: '聴解 08-02: como a conversa continua?', choices: [{ n: 1, text: 'falando e perguntando sobre um conhecido em comum, 田中さん' }, { n: 2, text: 'falando sobre objetos da outra pessoa' }, { n: 3, text: 'recomendando fonte termal' }, { n: 4, text: 'pedindo ajuda com primeira impressão' }], answer: 1, explanationPt: 'O gabarito marca ② = b: falar ou perguntar sobre conhecidos em comum.' },
    { id: 'iro-pi-l8-9', number: 9, prompt: '聴解 08-02: segundo 浅野, como 田中 era no ensino médio?', choices: [{ n: 1, text: 'falava muito, era barulhento, levava bronca dos professores, mas era animador e popular' }, { n: 2, text: 'era silencioso e não tinha amigos' }, { n: 3, text: 'jogava shogi profissionalmente' }, { n: 4, text: 'trabalhava em Ishikawa' }], answer: 1, explanationPt: 'Ele diz que 田中 era como agora: よくしゃべってうるさかった, mas ムードメーカー e 人気者.' },
    { id: 'iro-pi-l8-10', number: 10, prompt: '聴解 08-03: no círculo de shogi, アルトゥル começa com:', image: `${IMG}/ZZ_08_1_03_saakuru.png`, imageAlt: 'círculo de shogi', choices: [{ n: 1, text: 'すみません。今日から参加するんですが……' }, { n: 2, text: '隣、いいですか？' }, { n: 3, text: '観光客ですか？' }, { n: 4, text: '田中さんのお友だちですか？' }], answer: 1, translationPt: 'Com licença. Vou participar a partir de hoje...', explanationPt: 'A frase permite avisar que é novo no círculo e abrir espaço para a outra pessoa responder.' },
    { id: 'iro-pi-l8-11', number: 11, prompt: '聴解 08-03: depois de se apresentar, アルトゥル fala principalmente:', choices: [{ n: 1, text: 'que está nervoso porque é a primeira vez que participa de um círculo assim' }, { n: 2, text: 'sobre um amigo em comum' }, { n: 3, text: 'sobre um estojo da Hello Kitty' }, { n: 4, text: 'sobre as regras de banho' }], answer: 1, explanationPt: 'O answer key marca ③ = a: falar seus próprios sentimentos para a outra pessoa.' },
    { id: 'iro-pi-l8-12', number: 12, prompt: '聴解 08-04: na nova classe de japonês, a pessoa inicia com:', image: `${IMG}/ZZ_08_1_04_nihongogakkoo.png`, imageAlt: 'nova classe de japonês', choices: [{ n: 1, text: 'あのう、隣、いいですか？' }, { n: 2, text: '今日、入社の方ですか？' }, { n: 3, text: 'ここのお風呂には、よく来るんですか？' }, { n: 4, text: '田中さんって、どんな感じだったんですか？' }], answer: 1, translationPt: 'Com licença, posso sentar ao seu lado?', explanationPt: 'Esta é a frase que dá título à lição.' },
    { id: 'iro-pi-l8-13', number: 13, prompt: '聴解 08-04: como a conversa continua?', choices: [{ n: 1, text: 'comentando o smartphone case da Hello Kitty da outra pessoa' }, { n: 2, text: 'perguntando sobre um colega de empresa' }, { n: 3, text: 'falando de fonte termal' }, { n: 4, text: 'lendo artigo online' }], answer: 1, explanationPt: 'O gabarito marca ④ = c: comentar ou perguntar sobre os pertences da outra pessoa.' },
    { id: 'iro-pi-l8-14', number: 14, prompt: '聴解 08-04: リエン e ジャスミン são de onde?', choices: [{ n: 1, text: 'リエン é do Vietnã; ジャスミン é do Uzbequistão' }, { n: 2, text: 'ambas são da Malásia' }, { n: 3, text: 'ambas são da Indonésia' }, { n: 4, text: 'リエン é de Myanmar; ジャスミン é do Japão' }], answer: 1, explanationPt: 'リエン fala que Hello Kitty também é popular no Vietnã; depois diz seu nome. ジャスミン se apresenta como do Uzbequistão.' },
    { id: 'iro-pi-l8-15', number: 15, prompt: 'Vocabulário da atividade 1: 新郎／新婦／同級生／部署／叱る significam:', choices: [{ n: 1, text: 'noivo / noiva / colega de classe / departamento / repreender' }, { n: 2, text: 'banho / cemitério / toalha / água quente / turista' }, { n: 3, text: 'postura / sorriso / roupa / cabelo / limpeza' }, { n: 4, text: 'shogi / peça / tabuleiro / rei / concentração' }], answer: 1, explanationPt: 'Essas palavras aparecem principalmente na conversa 08-02 sobre a festa de casamento.' },
    { id: 'iro-pi-l8-16', number: 16, prompt: 'Can-do 25: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'responder e conversar de modo simples quando uma pessoa desconhecida começa a falar' }, { n: 2, text: 'escrever mensagem de cancelamento' }, { n: 3, text: 'ler cardápio de restaurante' }, { n: 4, text: 'fazer autoapresentação em círculo' }], answer: 1, explanationPt: 'A atividade 2 é o diálogo de フランキー em uma fonte termal, respondendo a um morador local.' },
    { id: 'iro-pi-l8-17', number: 17, prompt: '会話 08-09: por que フランキー recebe uma advertência?', image: `${IMG}/ZZ_08_2_01_jimotonohito.png`, imageAlt: 'morador local falando em banho público', choices: [{ n: 1, text: 'porque colocou a toalha dentro da água quente' }, { n: 2, text: 'porque falou alto demais no trem' }, { n: 3, text: 'porque chegou atrasado ao trabalho' }, { n: 4, text: 'porque esqueceu o uniforme' }], answer: 1, explanationPt: 'O gabarito registra: お湯の中にタオルを入れたこと.' },
    { id: 'iro-pi-l8-18', number: 18, prompt: '会話 08-09: quem é フランキー?', choices: [{ n: 1, text: 'estudante internacional, mora no dormitório da CPU大学, é da Indonésia e mora no Japão há cerca de 2 anos' }, { n: 2, text: 'colega de empresa de Tanaka' }, { n: 3, text: 'morador local que vai todo dia ao banho' }, { n: 4, text: 'membro novo de círculo de shogi' }], answer: 1, explanationPt: 'O answer key preenche: 留学生; 大学の寮; 出身 インドネシア; 日本に2年ぐらい.' },
    { id: 'iro-pi-l8-19', number: 19, prompt: '会話 08-09: por que フランキー vai ao banho público?', choices: [{ n: 1, text: 'porque gosta de onsen, e o banho do dormitório não é onsen' }, { n: 2, text: 'porque quer jogar shogi lá' }, { n: 3, text: 'porque trabalha no local' }, { n: 4, text: 'porque é gratuito fazer aula de japonês' }], answer: 1, explanationPt: 'Ele diz: 寮にもお風呂がありますが、温泉ではないので; 日本に来て、温泉がとても好きになりました.' },
    { id: 'iro-pi-l8-20', number: 20, prompt: '会話 08-09: que fonte termal é recomendada?', choices: [{ n: 1, text: '鶴の湯: 露天風呂 perto de uma 霊園, gratuita, com água muito boa' }, { n: 2, text: 'CPUの湯: banho do dormitório, pago' }, { n: 3, text: '石川の湯: dentro da empresa' }, { n: 4, text: 'キティの湯: na escola de japonês' }], answer: 1, explanationPt: 'O gabarito marca 露天風呂, 無料 e お湯もすごくいい.' },
    { id: 'iro-pi-l8-21', number: 21, prompt: '「これからは、気をつけなさい」 usa Vなさい para:', choices: [{ n: 1, text: 'dar uma ordem, instrução ou advertência de alguém em posição superior para alguém abaixo' }, { n: 2, text: 'fazer um pedido muito polido a um cliente' }, { n: 3, text: 'expressar desejo suave' }, { n: 4, text: 'dizer que algo é desnecessário' }], answer: 1, translationPt: 'De agora em diante, tome cuidado.', explanationPt: 'A nota gramatical explica que Vなさい é usado por pais, professores ou pessoas mais velhas ao orientar/repreender.' },
    { id: 'iro-pi-l8-22', number: 22, prompt: '「ここには、よくいらっしゃるんですか？」 usa いらっしゃる como:', choices: [{ n: 1, text: 'forma respeitosa de 来る／行く／いる' }, { n: 2, text: 'forma casual de 話す' }, { n: 3, text: 'negação de 来る' }, { n: 4, text: 'imperativo forte' }], answer: 1, translationPt: 'O senhor costuma vir aqui?', explanationPt: '尊敬語 é usado para ações/estados de pessoas superiores, recém-conhecidas ou sobre quem se fala com respeito; não para si mesmo.' },
    { id: 'iro-pi-l8-23', number: 23, prompt: 'Qual par de verbos respeitosos está correto?', choices: [{ n: 1, text: '言う → おっしゃる; 食べる／飲む → 召し上がる' }, { n: 2, text: '言う → いらっしゃる; 食べる → ご存じだ' }, { n: 3, text: '見る → なさる; する → くださる' }, { n: 4, text: '知っている → 召し上がる; 来る → おっしゃる' }], answer: 1, explanationPt: 'A tabela também lista 見る → ご覧になる, くれる → くださる, 知っている → ご存じだ, する → なさる.' },
    { id: 'iro-pi-l8-24', number: 24, prompt: 'Can-do 26: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'ler um artigo online sobre comunicação e entender o conteúdo geral' }, { n: 2, text: 'pedir informação sobre fonte termal' }, { n: 3, text: 'falar sobre rotina alimentar' }, { n: 4, text: 'preencher formulário de mudança' }], answer: 1, explanationPt: 'A atividade 3 lê um artigo online sobre 第一印象.' },
    { id: 'iro-pi-l8-25', number: 25, prompt: 'Leitura: 「第一印象を良く見せるための4つのポイント」 trata de:', choices: [{ n: 1, text: 'como melhorar a primeira impressão ao conhecer alguém' }, { n: 2, text: 'como cozinhar com micro-ondas' }, { n: 3, text: 'como comprar em supermercado comercial' }, { n: 4, text: 'como usar uma fonte termal gratuita' }], answer: 1, explanationPt: 'O gabarito resume o conteúdo: 第一印象を良くするためにはどうすればいいか.' },
    { id: 'iro-pi-l8-26', number: 26, prompt: 'Leitura: os títulos ①-④ correspondem a:', choices: [{ n: 1, text: '①アイコンタクトを取る ②笑顔を忘れない ③姿勢を良くする ④服装や清潔感に気をつける' }, { n: 2, text: '①服装 ②姿勢 ③笑顔 ④アイコンタクト' }, { n: 3, text: '①温泉 ②霊園 ③将棋 ④キティちゃん' }, { n: 4, text: '①仕事 ②結婚 ③サークル ④学校' }], answer: 1, explanationPt: 'O answer key marca ① c, ② d, ③ a, ④ b.' },
    { id: 'iro-pi-l8-27', number: 27, prompt: 'Ponto 1 do artigo: sobre アイコンタクト, qual afirmação é correta?', choices: [{ n: 1, text: 'não é bom ficar olhando fixamente por muito tempo nem evitar totalmente olhar nos olhos' }, { n: 2, text: 'o ideal é encarar sempre sem desviar' }, { n: 3, text: 'o ideal é nunca encontrar o olhar da pessoa' }, { n: 4, text: 'não há relação com comunicação' }], answer: 1, explanationPt: 'O gabarito marca × para “olhar fixamente” e × para “melhor não encontrar o olhar”.' },
    { id: 'iro-pi-l8-28', number: 28, prompt: 'Ponto 2 do artigo: sobre 笑顔, qual afirmação é correta?', choices: [{ n: 1, text: 'fazer um sorriso ajuda a própria pessoa a relaxar, mas não precisa rir o maior possível' }, { n: 2, text: 'não se deve sorrir' }, { n: 3, text: 'é obrigatório rir alto' }, { n: 4, text: 'sorriso só vale para fotos' }], answer: 1, explanationPt: 'O gabarito marca 〇 para relaxar ao sorrir e × para “rir o maior possível”.' },
    { id: 'iro-pi-l8-29', number: 29, prompt: 'Ponto 3 do artigo: 背筋を伸ばす e 猫背 indicam que:', choices: [{ n: 1, text: 'boa postura melhora a impressão; postura curvada dá impressão ruim' }, { n: 2, text: 'postura não importa' }, { n: 3, text: 'postura curvada melhora a impressão' }, { n: 4, text: 'é melhor evitar roupas limpas' }], answer: 1, explanationPt: 'As duas afirmações do gabarito para o ponto 3 são 〇.' },
    { id: 'iro-pi-l8-30', number: 30, prompt: 'Ponto 4 do artigo: sobre roupa e cabelo, qual afirmação segue o texto?', choices: [{ n: 1, text: 'não precisa usar roupa cara; cabelo bem cuidado e aparência limpa ajudam' }, { n: 2, text: 'é melhor usar a roupa mais cara possível' }, { n: 3, text: 'cabelo bagunçado causa sempre boa impressão' }, { n: 4, text: 'limpeza não importa' }], answer: 1, explanationPt: 'O gabarito marca × para roupa cara e 〇 para cuidar bem do cabelo.' },
    { id: 'iro-pi-l8-31', number: 31, prompt: '「この人、感じが良さそうだな」と思わせる usa causativo para:', choices: [{ n: 1, text: 'causar naturalmente um pensamento, sentimento ou impressão em outra pessoa' }, { n: 2, text: 'dar uma ordem direta' }, { n: 3, text: 'dizer que algo não precisa ser feito' }, { n: 4, text: 'mostrar respeito por alguém' }], answer: 1, translationPt: 'Fazer a pessoa pensar: “Essa pessoa parece simpática”.', explanationPt: 'A nota ➌ apresenta 思わせる, 持たせる e 感じさせる como causativos ligados a emoções, sentimentos e pensamentos.' },
    { id: 'iro-pi-l8-32', number: 32, prompt: '「無理に大きな笑顔を作らなくてもいいです」 significa:', choices: [{ n: 1, text: 'não é preciso forçar um sorriso grande' }, { n: 2, text: 'é obrigatório fazer um sorriso grande' }, { n: 3, text: 'não se pode sorrir' }, { n: 4, text: 'não é preciso cumprimentar' }], answer: 1, explanationPt: 'V-なくてもいい／だいじょうぶです expressa que não é necessário fazer algo.' },
    { id: 'iro-pi-l8-33', number: 33, prompt: 'Kanji da lição: 第一印象／関心／背筋 lêem-se:', choices: [{ n: 1, text: 'だいいちいんしょう／かんしん／せすじ' }, { n: 2, text: 'だいいちいんぞう／せきしん／はいきん' }, { n: 3, text: 'いんしょうだいち／かんこころ／せなかすじ' }, { n: 4, text: 'だいいちしょう／かんじん／せすじ' }], answer: 1, explanationPt: 'Esses kanji aparecem no artigo sobre primeira impressão.' },
    { id: 'iro-pi-l8-34', number: 34, prompt: 'Kanji da lição: 清潔（な）／効果的（な）／伸ばす lêem-se:', choices: [{ n: 1, text: 'せいけつ／こうかてき／のばす' }, { n: 2, text: 'しょうけつ／こうけき／しんばす' }, { n: 3, text: 'せいけつ／こかてき／のべる' }, { n: 4, text: 'きよけつ／こうかてき／のばす' }], answer: 1, explanationPt: '清潔 e 効果的 são adjetivos ナ; 伸ばす aparece em 背筋を伸ばす.' },
    { id: 'iro-pi-l8-35', number: 35, prompt: 'Kanji da lição: 逆／与える／この辺／整う lêem-se:', choices: [{ n: 1, text: 'ぎゃく／あたえる／このへん／ととのう' }, { n: 2, text: 'さか／あげる／このあたり／せいう' }, { n: 3, text: 'ぎゃく／よえる／このへん／そろう' }, { n: 4, text: 'げき／あたえる／このべん／ととのえる' }], answer: 1, explanationPt: 'この辺 aparece na pergunta sobre boas fontes termais próximas.' },
    { id: 'iro-pi-l8-36', number: 36, prompt: 'TIPS: 将棋 é:', choices: [{ n: 1, text: 'um jogo de tabuleiro japonês parecido com xadrez, jogado em tabuleiro 9×9 com objetivo de capturar o rei' }, { n: 2, text: 'uma regra de banho em onsen' }, { n: 3, text: 'um tipo de restaurante' }, { n: 4, text: 'um personagem da Sanrio' }], answer: 1, explanationPt: 'A TIPS explica que o shogi tem longa história no Japão, jogadores profissionais e aulas para iniciantes em centros comunitários.' },
    { id: 'iro-pi-l8-37', number: 37, prompt: 'TIPS: ハローキティ／キティちゃん, segundo o texto, é:', choices: [{ n: 1, text: 'personagem da Sanrio criada em 1974, símbolo de cultura kawaii e popular em muitos países' }, { n: 2, text: 'um time de beisebol' }, { n: 3, text: 'uma fonte termal gratuita' }, { n: 4, text: 'uma técnica de primeira impressão' }], answer: 1, explanationPt: 'A TIPS menciona a fita vermelha, produtos variados e o perfil da personagem nascida nos arredores de Londres.' },
    { id: 'iro-pi-l8-38', number: 38, prompt: 'TIPS: お墓／霊園 no Japão são descritos como:', choices: [{ n: 1, text: 'túmulos podem ficar em templos ou cemitérios; 霊園 são áreas amplas, muitas vezes como parques, com muitos túmulos' }, { n: 2, text: 'lugares onde não há túmulos' }, { n: 3, text: 'sempre dentro de estações de trem' }, { n: 4, text: 'lojas de produtos de personagem' }], answer: 1, explanationPt: 'A TIPS explica cremação, túmulos tradicionais, templos, cemitérios e que alguns grandes cemitérios têm túmulos de pessoas famosas.' },
  ],
}

// ---- Lição 9: 日本語の勉強を始めたきっかけって、何だったの？ (tópico 私と日本語) ----
const lesson9Group: ExerciseGroup = {
  id: 'iro-pi-l9',
  title: '日本語の勉強を始めたきっかけって、何だったの？',
  subtitlePt: 'Metas de japonês · dialetos · experiências de aprendizagem',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l9-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: '私と日本語 (eu e a língua japonesa)' }, { n: 2, text: '出会う' }, { n: 3, text: '毎日の食事' }, { n: 4, text: '自然を楽しむ' }], answer: 1, explanationPt: 'A Lição 9 abre o tópico 私と日本語: metas, motivações, dialetos e experiências de aprendizagem.' },
    { id: 'iro-pi-l9-2', number: 2, prompt: 'Pergunta de abertura: あなたは、どうして日本語の勉強を始めましたか？', choices: [{ n: 1, text: 'Por que você começou a estudar japonês?' }, { n: 2, text: 'Onde você conheceu seus amigos?' }, { n: 3, text: 'Você fala com desconhecidos?' }, { n: 4, text: 'Você cozinha para si?' }], answer: 1, explanationPt: 'A pergunta prepara a fala sobre きっかけ, metas e experiências com japonês.' },
    { id: 'iro-pi-l9-3', number: 3, prompt: 'Can-do 27: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar a um amigo, de modo simples, sobre metas de aprendizagem de japonês e seus motivos' }, { n: 2, text: 'ler placa de emergência' }, { n: 3, text: 'pedir comida por tablet' }, { n: 4, text: 'escrever formulário de mudança' }], answer: 1, explanationPt: 'A atividade 1 apresenta quatro conversas sobre 日本語学習の目標.' },
    { id: 'iro-pi-l9-4', number: 4, prompt: '聴解 09-01: アディ fala em qual situação e com qual meta?', image: `${IMG}/ZZ_09_1_01_mendan.png`, imageAlt: 'entrevista na aula de japonês', choices: [{ n: 1, text: '面談 em aula de japonês; quer usar japonês melhor no trabalho' }, { n: 2, text: 'sala de descanso no trabalho; quer entender dramas' }, { n: 3, text: 'vizinhança; quer passar no JLPT' }, { n: 4, text: 'universidade; quer entender dialeto' }], answer: 1, explanationPt: 'O gabarito marca meta c: 仕事で上手に日本語を使う.' },
    { id: 'iro-pi-l9-5', number: 5, prompt: '聴解 09-01: por que アディ quer melhorar o japonês de trabalho?', choices: [{ n: 1, text: 'porque falar ao telefone no trabalho é difícil e ele errou ao encerrar uma ligação' }, { n: 2, text: 'porque perdeu dois pontos no JLPT' }, { n: 3, text: 'porque quer fazer dublagem de anime' }, { n: 4, text: 'porque não entende placas em dialeto' }], answer: 1, explanationPt: 'Ele disse 「失礼します」 como 「じゃあね」 ao desligar o telefone e ficou envergonhado.' },
    { id: 'iro-pi-l9-6', number: 6, prompt: '聴解 09-01: 木山 e アディ usam que estilo?', choices: [{ n: 1, text: 'ambos 丁寧体, porque é uma entrevista e se encontram pela primeira vez' }, { n: 2, text: 'ambos 普通体, porque são amigos próximos' }, { n: 3, text: '木山 普通体 e アディ 丁寧体, porque 木山 é colega de faculdade' }, { n: 4, text: 'não há diferença de estilo' }], answer: 1, explanationPt: 'O gabarito explica que, por ser 面談 e primeiro encontro, ambos usam 丁寧体.' },
    { id: 'iro-pi-l9-7', number: 7, prompt: '聴解 09-02: ラメシュ tem qual meta?', image: `${IMG}/ZZ_09_1_04_shokuba.png`, imageAlt: 'sala de descanso no trabalho', choices: [{ n: 1, text: 'entender completamente dramas japoneses' }, { n: 2, text: 'passar no JLPT' }, { n: 3, text: 'se comunicar melhor com vizinhos' }, { n: 4, text: 'usar japonês ao telefone' }], answer: 1, explanationPt: 'O answer key marca ② = d: 日本のドラマを全部理解する.' },
    { id: 'iro-pi-l9-8', number: 8, prompt: '聴解 09-02: ラメシュ diz que:', choices: [{ n: 1, text: 'estuda há 20 anos, ainda há muito que não entende, e quer recomendações de dramas enquanto estiver no Japão' }, { n: 2, text: 'acabou de chegar há duas semanas' }, { n: 3, text: 'não gosta de dramas japoneses' }, { n: 4, text: 'não quer mais estudar' }], answer: 1, explanationPt: 'Ele gosta de dramas, sente frustração por não captar algumas falas e pede recomendações a 鵜澤.' },
    { id: 'iro-pi-l9-9', number: 9, prompt: '聴解 09-02: o uso de estilos entre ラメシュ e 鵜澤 é:', choices: [{ n: 1, text: 'ラメシュ usa 普通体 e 鵜澤 丁寧体, porque ラメシュ é mais velho' }, { n: 2, text: 'ambos usam 丁寧体 por serem desconhecidos' }, { n: 3, text: 'ambos usam 普通体 por serem colegas de universidade' }, { n: 4, text: 'ambos usam dialeto de Okinawa' }], answer: 1, explanationPt: 'O gabarito indica essa diferença por idade/posição relativa.' },
    { id: 'iro-pi-l9-10', number: 10, prompt: '「日本にいる間に、いろいろなドラマを見たい」 usa ～間に para:', choices: [{ n: 1, text: 'dizer algo que quer fazer durante o período em que uma ação/estado continua' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'perguntar se é dialeto' }, { n: 4, text: 'expressar desnecessidade' }], answer: 1, translationPt: 'Enquanto eu estiver no Japão, quero assistir a vários dramas.', explanationPt: 'A nota ➊ explica V-る／V-ている／Nの + 間に.' },
    { id: 'iro-pi-l9-11', number: 11, prompt: '聴解 09-03: 高 quer:', image: `${IMG}/ZZ_09_1_07_kinjo.png`, imageAlt: 'conversa na vizinhança', choices: [{ n: 1, text: 'conseguir se comunicar mais com outras pessoas' }, { n: 2, text: 'entender anime sem dublagem' }, { n: 3, text: 'passar no JLPT' }, { n: 4, text: 'usar japonês em telefonema de trabalho' }], answer: 1, explanationPt: 'O gabarito marca ③ = a: ほかの人ともっとコミュニケーションをとる.' },
    { id: 'iro-pi-l9-12', number: 12, prompt: '聴解 09-03: qual motivo 高 dá?', choices: [{ n: 1, text: 'às vezes não entende o que as pessoas ao redor dizem e ainda não entende bem dialetos' }, { n: 2, text: 'a pronúncia é difícil' }, { n: 3, text: 'não gosta de estudar sozinho' }, { n: 4, text: 'não consegue comprar passagens' }], answer: 1, explanationPt: 'A lacuna do gabarito é 周りの人のセリフ／言っていることがわからないときがある.' },
    { id: 'iro-pi-l9-13', number: 13, prompt: '聴解 09-04: プラー recusa o convite porque:', image: `${IMG}/ZZ_09_1_10_daigaku.png`, imageAlt: 'sala de aula da universidade', choices: [{ n: 1, text: 'vai estudar para o JLPT da semana seguinte' }, { n: 2, text: 'tem trabalho de cuidado' }, { n: 3, text: 'vai a uma fonte termal' }, { n: 4, text: 'vai participar de círculo de shogi' }], answer: 1, explanationPt: 'Ele diz que, no exame anterior, faltaram 2 pontos; desta vez quer passar com certeza.' },
    { id: 'iro-pi-l9-14', number: 14, prompt: '聴解 09-04: プラー e ありな usam:', choices: [{ n: 1, text: '普通体, porque são amigos' }, { n: 2, text: '丁寧体, porque é uma entrevista' }, { n: 3, text: '尊敬語, porque falam com cliente' }, { n: 4, text: 'somente dialeto de Osaka' }], answer: 1, explanationPt: 'O gabarito indica 普通体 para ambos por serem 友だち同士.' },
    { id: 'iro-pi-l9-15', number: 15, prompt: '丁寧体 e 普通体 devem ser escolhidos conforme:', choices: [{ n: 1, text: 'relação com a pessoa e situação de fala' }, { n: 2, text: 'apenas a hora do dia' }, { n: 3, text: 'apenas o tema gramatical' }, { n: 4, text: 'o número de kanji na frase' }], answer: 1, explanationPt: 'A nota ➋ revisa que o objetivo em 初中級 é alternar os estilos conforme relação e contexto.' },
    { id: 'iro-pi-l9-16', number: 16, prompt: 'Can-do 28: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'perguntar sobre palavras de dialeto que não entendeu ao conversar com moradores locais' }, { n: 2, text: 'falar em detalhe sobre currículo' }, { n: 3, text: 'ler artigo de primeira impressão' }, { n: 4, text: 'cancelar compromisso por mensagem' }], answer: 1, explanationPt: 'A atividade 2 apresenta diálogos em 秋田, 大阪, 福岡 e 沖縄.' },
    { id: 'iro-pi-l9-17', number: 17, prompt: '聴解 09-09: em 秋田, a fala 「そんた服ばり着てさみぐねぇの？」 significa:', choices: [{ n: 1, text: 'Você não está com frio usando só essa roupa?' }, { n: 2, text: 'Você quer consertar essa roupa?' }, { n: 3, text: 'Você vai voltar comigo?' }, { n: 4, text: 'Isso é muito gostoso?' }], answer: 1, explanationPt: 'A pessoa de Akita reformula em japonês comum: そんな服だけ着て寒くないの.' },
    { id: 'iro-pi-l9-18', number: 18, prompt: '聴解 09-09: o viajante reage dizendo 「方言でしょうか……」. Essa estratégia é:', choices: [{ n: 1, text: 'apontar/confirmar que é dialeto' }, { n: 2, text: 'repetir uma parte ou tudo que ouviu' }, { n: 3, text: 'adivinhar pelo japonês comum' }, { n: 4, text: 'recusar conversa' }], answer: 1, explanationPt: 'No gabarito, A = ウ: 方言であることを指摘する.' },
    { id: 'iro-pi-l9-19', number: 19, prompt: '聴解 09-10: em 大阪, 「そこの台車、なおしといて」 quer dizer:', image: `${IMG}/ZZ_09_2_01_kaisha.png`, imageAlt: 'carrinho de carga no trabalho', choices: [{ n: 1, text: 'guarde/arrume esse carrinho ali' }, { n: 2, text: 'conserte o carrinho quebrado' }, { n: 3, text: 'traga o carrinho para cá' }, { n: 4, text: 'não use o carrinho' }], answer: 1, explanationPt: 'Na conversa, なおす em Kansai significa 片付ける／しまう; ユパカー entende primeiro como 修理する.' },
    { id: 'iro-pi-l9-20', number: 20, prompt: '聴解 09-10: ユパカー usa quais estratégias?', choices: [{ n: 1, text: 'repete 「直す？」, confirma se está quebrado e depois aponta que deve ser dialeto' }, { n: 2, text: 'finge que entendeu' }, { n: 3, text: 'muda de assunto para JLPT' }, { n: 4, text: 'usa 尊敬語' }], answer: 1, explanationPt: 'O gabarito marca B = イ／エ e C = ウ.' },
    { id: 'iro-pi-l9-21', number: 21, prompt: '聴解 09-11: em 福岡, 「あんた、どっから来んしゃったと？」 quer dizer:', choices: [{ n: 1, text: 'Você veio de onde?' }, { n: 2, text: 'Você vai voltar agora?' }, { n: 3, text: 'Está com frio?' }, { n: 4, text: 'Você quer guardar isto?' }], answer: 1, explanationPt: 'O amigo explica: 「あなた、どこから来たんですか？」.' },
    { id: 'iro-pi-l9-22', number: 22, prompt: '聴解 09-12: em 沖縄, 「そろそろ、帰りましょうねー」 nessa fala significa:', choices: [{ n: 1, text: 'eu vou voltar/ir embora agora' }, { n: 2, text: 'vamos todos embora juntos' }, { n: 3, text: 'a loja está proibida' }, { n: 4, text: 'isso é muito gostoso' }], answer: 1, explanationPt: 'O マスター explica que ～しましょうね não convida outras pessoas; significa 自分がしますね.' },
    { id: 'iro-pi-l9-23', number: 23, prompt: '聴解 09-12: 「でーじ」 significa:', choices: [{ n: 1, text: 'とても (muito)' }, { n: 2, text: '方言 (dialeto)' }, { n: 3, text: '閉店 (fechamento)' }, { n: 4, text: '修理 (conserto)' }], answer: 1, explanationPt: 'A pessoa pergunta 「でーじ」はどういう意味ですか？ e o マスター responde: とっても.' },
    { id: 'iro-pi-l9-24', number: 24, prompt: 'Vocabulário de dialeto: 台車／直す／しまう／修理する／閉店 significam:', choices: [{ n: 1, text: 'carrinho de carga / consertar ou guardar conforme região / guardar / consertar / horário de fechar' }, { n: 2, text: 'anime / dublagem / meta / prova / cuidador' }, { n: 3, text: 'limpeza / postura / sorriso / cabelo / roupa' }, { n: 4, text: 'vizinho / praça / criança / panfleto / evento' }], answer: 1, explanationPt: 'Essas palavras aparecem nas conversas em 大阪 e 沖縄.' },
    { id: 'iro-pi-l9-25', number: 25, prompt: 'Can-do 29: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'falar com algum detalhe sobre sua experiência de aprendizagem de japonês, incluindo episódios concretos' }, { n: 2, text: 'ler placa em dialeto' }, { n: 3, text: 'pedir recomendação de supermercado' }, { n: 4, text: 'fazer autoapresentação em círculo' }], answer: 1, explanationPt: 'A atividade 3 trabalha きっかけ, 経験 e 将来したいこと.' },
    { id: 'iro-pi-l9-26', number: 26, prompt: 'ことばの準備: 日本語の勉強を始めたきっかけ inclui:', choices: [{ n: 1, text: 'anime/mangá, cultura tradicional, interesse no japonês, disciplina obrigatória, intercâmbio, trabalho, viagem, morar no Japão, família que fala japonês' }, { n: 2, text: 'somente fontes termais e cemitérios' }, { n: 3, text: 'somente lojas de comida' }, { n: 4, text: 'somente regras de banho' }], answer: 1, explanationPt: 'O vocabulário a-i cobre essas nove razões.' },
    { id: 'iro-pi-l9-27', number: 27, prompt: '聴解 09-19: クロード começou a estudar japonês porque:', choices: [{ n: 1, text: 'amava anime japonês e queria entender as falas em japonês' }, { n: 2, text: 'queria trabalhar com cuidado no Japão' }, { n: 3, text: 'o trabalho do marido foi decidido no Japão' }, { n: 4, text: 'precisava usar dialeto de Osaka' }], answer: 1, explanationPt: 'O gabarito marca きっかけ a; ele via dublagem e queria entender セリフ em japonês.' },
    { id: 'iro-pi-l9-28', number: 28, prompt: '聴解 09-19: quais experiências クロード relata?', choices: [{ n: 1, text: 'entrou no anime club, fez dublagem/aterêko, depois veio estudar anime em escola técnica no Japão' }, { n: 2, text: 'trabalhou como cuidador e teve dificuldades culturais' }, { n: 3, text: 'veio sem estudar japonês e mostrou fotos no celular' }, { n: 4, text: 'passou no JLPT por dois pontos' }], answer: 1, explanationPt: 'As experiências do gabarito são カ e ウ: アニメ部に入った e 日本に留学した.' },
    { id: 'iro-pi-l9-29', number: 29, prompt: '聴解 09-20: ハスミン começou por qual motivo?', choices: [{ n: 1, text: 'queria trabalhar com 介護 no Japão porque uma parente era cuidadora no Japão' }, { n: 2, text: 'gostava de anime' }, { n: 3, text: 'veio pelo trabalho do marido' }, { n: 4, text: 'queria entender placas de Okinawa' }], answer: 1, explanationPt: 'O gabarito marca きっかけ f e especifica 親戚: 日本で介護士.' },
    { id: 'iro-pi-l9-30', number: 30, prompt: '聴解 09-20: ハスミン relata que:', choices: [{ n: 1, text: 'estudou japonês e regras do Japão, achou letras difíceis, sofreu no trabalho, mas recebeu apoio de veteranos' }, { n: 2, text: 'não estudou nada e só usou fotos' }, { n: 3, text: 'entrou em anime club' }, { n: 4, text: 'foi reprovado no JLPT por 2 pontos' }], answer: 1, explanationPt: 'O gabarito lista 日本語クラス, 日本のルール, 文字が難しい, 苦労, 失敗, 先輩に悩みを聞いてもらった.' },
    { id: 'iro-pi-l9-31', number: 31, prompt: '聴解 09-21: エレン começou a viver no Japão porque:', choices: [{ n: 1, text: 'o trabalho do marido foi decidido no Japão e ela veio morar junto' }, { n: 2, text: 'queria criar anime' }, { n: 3, text: 'queria ser cuidadora' }, { n: 4, text: 'foi aprovada no JLPT' }], answer: 1, explanationPt: 'O gabarito marca きっかけ h: 日本で生活することになった.' },
    { id: 'iro-pi-l9-32', number: 32, prompt: '聴解 09-21: depois de vir ao Japão, エレン:', choices: [{ n: 1, text: 'teve dificuldades sem japonês, mostrava fotos no celular, começou a frequentar escola de japonês e a vida ficou mais fácil' }, { n: 2, text: 'abriu uma escola de japonês' }, { n: 3, text: 'entrou em anime club' }, { n: 4, text: 'trabalhou em Ishikawa' }], answer: 1, explanationPt: 'O gabarito registra スマホで写真を見せた, 日本語学校に通いはじめた e 生活しやすくなった.' },
    { id: 'iro-pi-l9-33', number: 33, prompt: '「勉強しはじめた」「働きはじめました」「通いはじめました」 usam Vはじめる para:', choices: [{ n: 1, text: 'indicar o começo de uma ação ou estado' }, { n: 2, text: 'indicar que algo não é necessário' }, { n: 3, text: 'dar ordem' }, { n: 4, text: 'mostrar respeito' }], answer: 1, explanationPt: 'Forma: verbo na forma マス sem ます + はじめる.' },
    { id: 'iro-pi-l9-34', number: 34, prompt: 'Qual expressão de esperança corresponde a 「介護の仕事を続けようと思ってます」?', choices: [{ n: 1, text: '意向形 + と思っています' }, { n: 2, text: 'Vなさい' }, { n: 3, text: 'V-なくてもいい' }, { n: 4, text: '尊敬語' }], answer: 1, translationPt: 'Penso em continuar trabalhando com cuidado.', explanationPt: 'A nota ➍ reúne Vたい, volicional + と思う, e V-ば + と思う/うれしい/いいな.' },
    { id: 'iro-pi-l9-35', number: 35, prompt: 'Kanji da lição: 方言／目標／知識 lêem-se:', choices: [{ n: 1, text: 'ほうげん／もくひょう／ちしき' }, { n: 2, text: 'かたこと／めじるし／しりしき' }, { n: 3, text: 'ほうごん／もくてき／ちけん' }, { n: 4, text: 'ほうげん／めひょう／ちしき' }], answer: 1, explanationPt: '方言 = dialeto; 目標 = meta; 知識 = conhecimento.' },
    { id: 'iro-pi-l9-36', number: 36, prompt: 'Kanji da lição: 介護／吹き替え／足りる lêem-se:', choices: [{ n: 1, text: 'かいご／ふきかえ／たりる' }, { n: 2, text: 'かいこ／ふきがえ／あしりる' }, { n: 3, text: 'けいご／ふきかえ／たりる' }, { n: 4, text: 'かいご／すいかえ／たれる' }], answer: 1, explanationPt: '吹き替え é dublagem; 足りる aparece em 2点足りなくて.' },
    { id: 'iro-pi-l9-37', number: 37, prompt: 'Kanji da lição: 最初／失敗する／悩み／理解する lêem-se:', choices: [{ n: 1, text: 'さいしょ／しっぱいする／なやみ／りかいする' }, { n: 2, text: 'さいはつ／しつはいする／のうみ／りげする' }, { n: 3, text: 'さいしょ／しっぱいする／なみ／りかいする' }, { n: 4, text: 'もさい／しっぱいする／なやみ／りかいする' }], answer: 1, explanationPt: 'Esses kanji aparecem nas experiências de estudo e trabalho.' },
    { id: 'iro-pi-l9-38', number: 38, prompt: 'Leitura: placas em dialeto. Qual par lugar-significado segue o gabarito?', choices: [{ n: 1, text: '①空き地 = やめなさい; ③手洗い場 = 手を洗っていきなさい; ⑦お祭りの屋台 = とてもおいしい' }, { n: 2, text: '①駅 = また来てね; ⑦道路 = あぶないよ' }, { n: 3, text: '⑤屋台 = 飲んだら乗るな' }, { n: 4, text: '②大学 = JLPTに合格する' }], answer: 1, explanationPt: 'O gabarito também marca ②道路 = あぶないよ, ④道路 = 飲んだら乗るな, ⑤商店街 = ようこそ, ⑥駅 = また来てね.' },
    { id: 'iro-pi-l9-39', number: 39, prompt: 'TIPS: 日本語の試験 inclui:', choices: [{ n: 1, text: 'JLPT, JFT-Basic e outros testes como EJU, BJT, OPI/OPIc, cada um com finalidades diferentes' }, { n: 2, text: 'apenas um teste único obrigatório para todos' }, { n: 3, text: 'somente prova oral informal' }, { n: 4, text: 'somente teste para crianças japonesas' }], answer: 1, explanationPt: 'A TIPS recomenda escolher testes conforme objetivo e reunir informação em sites, professores e colegas.' },
    { id: 'iro-pi-l9-40', number: 40, prompt: 'TIPS: sobre 日本の方言, qual afirmação está correta?', choices: [{ n: 1, text: 'há diferenças regionais de vocabulário e pronúncia; muita gente alterna dialeto e japonês comum conforme situação' }, { n: 2, text: 'dialetos não existem mais' }, { n: 3, text: 'todos os dialetos são iguais ao japonês de Tóquio' }, { n: 4, text: 'dialetos são usados só em exames' }], answer: 1, explanationPt: 'O texto apresenta exemplos de Tohoku, Kansai, Kyushu/Hakata e Okinawa, e recomenda perguntar 「どういう意味ですか？」 quando não entender.' },
  ],
}

// ---- Lição 10: どうやって日本語を勉強してる？ (tópico 私と日本語) ----
const lesson10Group: ExerciseGroup = {
  id: 'iro-pi-l10',
  title: 'どうやって日本語を勉強してる？',
  subtitlePt: 'Métodos de estudo · portais e apps · perfil para tandem',
  instructionJa: 'いみや ばめんに あう ものを えらんでください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-pi-l10-1', number: 1, prompt: 'Qual é o tópico desta lição?', choices: [{ n: 1, text: '私と日本語 (eu e a língua japonesa)' }, { n: 2, text: 'こんなときどうする？' }, { n: 3, text: '出会う' }, { n: 4, text: '自然を楽しむ' }], answer: 1, explanationPt: 'A Lição 10 continua o tópico 私と日本語 e trata de métodos de aprendizagem de japonês.' },
    { id: 'iro-pi-l10-2', number: 2, prompt: 'Can-do 31: o aluno deve conseguir:', choices: [{ n: 1, text: 'ler descrições de cursos online e apps em um portal de japonês e escolher opções adequadas' }, { n: 2, text: 'contar uma experiência de onsen' }, { n: 3, text: 'denunciar um golpe por e-mail' }, { n: 4, text: 'pedir desculpas por atraso no trabalho' }], answer: 1, explanationPt: 'A primeira atividade usa um portal de aprendizagem para comparar sites e apps.' },
    { id: 'iro-pi-l10-3', number: 3, prompt: 'No portal, qual opção é adequada para estudar japonês de forma abrangente?', choices: [{ n: 1, text: 'A: JF にほんご e ラーニング みなと' }, { n: 2, text: 'B: ひきだすにほんご' }, { n: 3, text: 'C: アニメ・マンガの日本語' }, { n: 4, text: 'apenas D: KANJI Memory Hint' }], answer: 1, explanationPt: 'O gabarito marca A para 総合的な日本語が勉強したい.' },
    { id: 'iro-pi-l10-4', number: 4, prompt: 'Para quem quer ler mangá, o gabarito indica:', choices: [{ n: 1, text: 'C: アニメ・マンガの日本語' }, { n: 2, text: 'apenas A: みなと' }, { n: 3, text: 'apenas D: KANJI Memory Hint' }, { n: 4, text: 'nenhuma opção' }], answer: 1, explanationPt: 'C é o site que usa anime e mangá como entrada para estudar japonês.' },
    { id: 'iro-pi-l10-5', number: 5, prompt: 'Para trabalhar e viver no Japão, qual opção aparece no gabarito?', choices: [{ n: 1, text: 'B: ひきだすにほんご' }, { n: 2, text: 'D: KANJI Memory Hint' }, { n: 3, text: 'apenas C: アニメ・マンガの日本語' }, { n: 4, text: 'nenhuma opção' }], answer: 1, explanationPt: 'O gabarito marca B para 日本で働きながら、生活したい.' },
    { id: 'iro-pi-l10-6', number: 6, prompt: 'Para aprender オノマトペ, o gabarito permite:', choices: [{ n: 1, text: 'B ou C' }, { n: 2, text: 'somente A' }, { n: 3, text: 'somente D' }, { n: 4, text: 'nenhuma opção' }], answer: 1, explanationPt: 'O answer key marca B,C para オノマトペを学びたい.' },
    { id: 'iro-pi-l10-7', number: 7, prompt: 'Para estudar kanji, quais opções aparecem no gabarito?', choices: [{ n: 1, text: 'A, C e D' }, { n: 2, text: 'somente B' }, { n: 3, text: 'B e C' }, { n: 4, text: 'somente A' }], answer: 1, explanationPt: 'O gabarito marca A,C,D para 漢字を勉強したい.' },
    { id: 'iro-pi-l10-8', number: 8, prompt: 'Sobre A「みなと」: 「まるごとコース」では、日本語の「話すこと」は勉強できません。', choices: [{ n: 1, text: '×: a afirmação está incorreta' }, { n: 2, text: '〇: a afirmação está correta' }, { n: 3, text: 'não há informação no material' }, { n: 4, text: 'vale só para kanji' }], answer: 1, explanationPt: 'O gabarito marca ×. A fala/produção oral também faz parte do estudo no curso.' },
    { id: 'iro-pi-l10-9', number: 9, prompt: 'Sobre A「みなと」: usar o site exige ユーザー登録.', choices: [{ n: 1, text: '〇: a afirmação está correta' }, { n: 2, text: '×: a afirmação está incorreta' }, { n: 3, text: 'só para pessoas fora do Japão' }, { n: 4, text: 'só para mangá' }], answer: 1, explanationPt: 'O gabarito marca 〇 para ユーザー登録.' },
    { id: 'iro-pi-l10-10', number: 10, prompt: 'Sobre B「ひきだすにほんご」, qual afirmação está correta?', choices: [{ n: 1, text: 'é possível aprender estratégias vendo vídeos' }, { n: 2, text: 'a protagonista スアン trabalha em um hotel no Vietnã' }, { n: 3, text: 'estrangeiros no Japão apresentam オノマトペ' }, { n: 4, text: 'não há conteúdo em vídeo' }], answer: 1, explanationPt: 'No gabarito, B1 é 〇; B2 e B3 são ×.' },
    { id: 'iro-pi-l10-11', number: 11, prompt: 'Sobre C「アニメ・マンガの日本語」, o gabarito indica que:', choices: [{ n: 1, text: 'há 4 gêneros de mangá e a seção de mangá tem áudio' }, { n: 2, text: 'as expressões vêm só de livros didáticos comuns' }, { n: 3, text: 'não há áudio' }, { n: 4, text: 'é exclusivamente para kanji' }], answer: 1, explanationPt: 'C2 e C3 são 〇; C1 é ×.' },
    { id: 'iro-pi-l10-12', number: 12, prompt: 'Sobre D「KANJI Memory Hint」, qual afirmação está correta?', choices: [{ n: 1, text: 'usa ilustrações para memorizar kanji, permite conferir leitura por áudio e tem 3 versões na série' }, { n: 2, text: 'não trabalha leitura de kanji' }, { n: 3, text: 'não usa imagens' }, { n: 4, text: 'é um site de dramas' }], answer: 1, explanationPt: 'O gabarito marca 〇 para as três afirmações sobre D.' },
    { id: 'iro-pi-l10-13', number: 13, prompt: 'Em 「日本語を総合的に勉強する『まるごとコース』」, que padrão aparece?', choices: [{ n: 1, text: 'V（普通形）＋N para explicar/modificar um substantivo' }, { n: 2, text: 'Vなさい' }, { n: 3, text: 'Nでしたっけ？' }, { n: 4, text: '数量＋も' }], answer: 1, explanationPt: 'A nota ➊ trata de V（plain-form 普通形）＋N.' },
    { id: 'iro-pi-l10-14', number: 14, prompt: '「国際交流基金が運営する日本語学習プラットフォーム。」 é exemplo de:', choices: [{ n: 1, text: 'frase que termina em substantivo, comum em títulos/resumos escritos' }, { n: 2, text: 'pergunta de confirmação oral' }, { n: 3, text: 'ordem direta' }, { n: 4, text: 'forma honorífica' }], answer: 1, explanationPt: 'A nota ➋ explica 名詞で終わる言い方; です fica omitido em estilo resumido de escrita.' },
    { id: 'iro-pi-l10-15', number: 15, prompt: 'Can-do 32: nesta atividade, o aluno deve conseguir:', choices: [{ n: 1, text: 'trocar informações relativamente detalhadas com um amigo sobre métodos de estudo de japonês' }, { n: 2, text: 'ler placas em dialeto' }, { n: 3, text: 'entender anúncio de trem' }, { n: 4, text: 'fazer reserva em hotel' }], answer: 1, explanationPt: 'A atividade 2 trabalha conversas entre Nicole, Hong e Shiva sobre métodos de aprendizagem.' },
    { id: 'iro-pi-l10-16', number: 16, prompt: 'Vocabulário: 日本語学校に通う／地域の日本語教室に通う／オンラインレッスンを受ける significam:', image: `${IMG}/ZZ_10_2_01_nihongogakkoo.png`, imageAlt: 'pessoa estudando em escola de japonês', choices: [{ n: 1, text: 'frequentar escola de japonês / frequentar aula comunitária / fazer aula online' }, { n: 2, text: 'ler mangá / ver anime / usar IA' }, { n: 3, text: 'escrever perfil / registrar app / pesquisar economia' }, { n: 4, text: 'memorizar kanji / estudar onomatopeia / fazer tradução' }], answer: 1, explanationPt: 'São métodos de estudo apresentados na preparação de vocabulário.' },
    { id: 'iro-pi-l10-17', number: 17, prompt: 'Vocabulário: 日本のアニメを見る／日本のドラマを見る／AIを使う correspondem a:', image: `${IMG}/ZZ_10_2_06_dorama.png`, imageAlt: 'pessoa vendo drama japonês', choices: [{ n: 1, text: 'ver anime japonês / ver drama japonês / usar IA' }, { n: 2, text: 'escrever perfil / morar no Japão / estudar em escola' }, { n: 3, text: 'frequentar aula comunitária / estudar por livro / fazer tandem' }, { n: 4, text: 'registrar usuário / operar site / aprender kado' }], answer: 1, explanationPt: 'Esses itens aparecem como e, f e j na lista de métodos de aprendizagem.' },
    { id: 'iro-pi-l10-18', number: 18, prompt: '10-03: ニコル usa qual método de estudo além da aula?', image: `${IMG}/ZZ_10_2_06_dorama.png`, imageAlt: 'drama japonês', choices: [{ n: 1, text: '日本のドラマを見る' }, { n: 2, text: 'タンデム学習をする' }, { n: 3, text: 'AIを使う' }, { n: 4, text: '地域の日本語教室に通う' }], answer: 1, explanationPt: 'O gabarito marca f para ニコルさん.' },
    { id: 'iro-pi-l10-19', number: 19, prompt: '10-03: qual é o método específico de ニコル?', choices: [{ n: 1, text: 'ver 3 vezes: sem legenda, com legenda em japonês e depois com legenda em inglês' }, { n: 2, text: 'escrever para AI corrigir' }, { n: 3, text: 'trocar idioma com um parceiro de tandem' }, { n: 4, text: 'decorar kanji por ilustrações' }], answer: 1, explanationPt: 'Ela explica: 字幕をつけないで見る → 日本語の字幕 → 英語の字幕.' },
    { id: 'iro-pi-l10-20', number: 20, prompt: '10-03: que efeito ニコル percebeu?', choices: [{ n: 1, text: 'ficou capaz de entender o que a outra pessoa está dizendo na vida diária e no trabalho' }, { n: 2, text: 'perdeu medo de escrever japonês' }, { n: 3, text: 'aprendeu a escrever perfil' }, { n: 4, text: 'parou de usar legendas para sempre' }], answer: 1, explanationPt: 'O gabarito marca イ: 相手の言っていることがわかるようになった.' },
    { id: 'iro-pi-l10-21', number: 21, prompt: '10-04: ホン usa qual método?', image: `${IMG}/ZZ_10_2_11_tandemu.png`, imageAlt: 'aprendizagem tandem', choices: [{ n: 1, text: 'タンデム学習をする' }, { n: 2, text: '日本のドラマを見る' }, { n: 3, text: 'AIを使う' }, { n: 4, text: 'テレビ講座で勉強する' }], answer: 1, explanationPt: 'O gabarito marca k para ホンさん.' },
    { id: 'iro-pi-l10-22', number: 22, prompt: '10-04: no tandem de ホン, o que acontece?', choices: [{ n: 1, text: 'ela ensina vietnamita e a outra pessoa ensina japonês' }, { n: 2, text: 'ela só assiste aula gravada' }, { n: 3, text: 'ela pede correção para AI' }, { n: 4, text: 'ela lê mangá com áudio' }], answer: 1, explanationPt: 'O parceiro japonês estuda vietnamita; eles ensinam um ao outro.' },
    { id: 'iro-pi-l10-23', number: 23, prompt: '10-04: que efeito ホン sente?', choices: [{ n: 1, text: 'consegue dizer em japonês o que quer dizer' }, { n: 2, text: 'não tem mais medo de escrever' }, { n: 3, text: 'entende todos os kanji' }, { n: 4, text: 'não precisa mais estudar' }], answer: 1, explanationPt: 'O gabarito marca ウ: 言いたいことが日本語で言えるようになった.' },
    { id: 'iro-pi-l10-24', number: 24, prompt: '10-04: por que ホン gosta do método?', choices: [{ n: 1, text: 'porque aprende palavras que japoneses usam no dia a dia' }, { n: 2, text: 'porque evita falar com pessoas' }, { n: 3, text: 'porque substitui todas as aulas' }, { n: 4, text: 'porque só treina kanji' }], answer: 1, explanationPt: 'Ela diz que consegue memorizar várias palavras que japoneses usam normalmente.' },
    { id: 'iro-pi-l10-25', number: 25, prompt: '10-05: シヴァ usa qual método?', image: `${IMG}/ZZ_10_2_10_eeai.png`, imageAlt: 'uso de IA para estudar', choices: [{ n: 1, text: 'AIを使う' }, { n: 2, text: '本で勉強する' }, { n: 3, text: '日本語学校に通う' }, { n: 4, text: '日本のドラマを見る' }], answer: 1, explanationPt: 'O gabarito marca j para シヴァさん.' },
    { id: 'iro-pi-l10-26', number: 26, prompt: '10-05: como シヴァ usa AI?', choices: [{ n: 1, text: 'quando escreve um texto em japonês, pergunta se está correto e recebe correções de gramática e expressão' }, { n: 2, text: 'para encontrar parceiro de tandem' }, { n: 3, text: 'para assistir drama sem legenda' }, { n: 4, text: 'para registrar usuário no Minato' }], answer: 1, explanationPt: 'Ele diz: AIに聞いたら、文法や表現を直してくれるんだ.' },
    { id: 'iro-pi-l10-27', number: 27, prompt: '10-05: qual efeito シヴァ relata?', choices: [{ n: 1, text: 'não tem ficado com medo de escrever japonês' }, { n: 2, text: 'entende todos os dramas' }, { n: 3, text: 'começou a trabalhar em hotel' }, { n: 4, text: 'decorou todos os kanji' }], answer: 1, explanationPt: 'O gabarito marca ア: 日本語を書くのがこわくなくなった.' },
    { id: 'iro-pi-l10-28', number: 28, prompt: '「3回も見るの？ すごいね。」 usa も para indicar:', choices: [{ n: 1, text: 'que a quantidade parece grande para quem fala' }, { n: 2, text: 'negação' }, { n: 3, text: 'permissão' }, { n: 4, text: 'respeito/honorífico' }], answer: 1, explanationPt: 'A nota ➌ explica 数量＋も: “tantas vezes”, “até 3 vezes”.' },
    { id: 'iro-pi-l10-29', number: 29, prompt: '「言えるようになってきた」 usa V-てくる para:', choices: [{ n: 1, text: 'falar de uma mudança gradual em comparação com antes' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'indicar uma quantidade grande' }, { n: 4, text: 'encerrar uma frase como título' }], answer: 1, explanationPt: 'A nota ➍ explica que V-てくる expressa mudança; aqui, uma habilidade que vem se desenvolvendo.' },
    { id: 'iro-pi-l10-30', number: 30, prompt: 'Estratégia 10-08: quando ニコル não sabia a palavra 字幕, ela:', choices: [{ n: 1, text: 'disse a palavra em inglês: subtitle' }, { n: 2, text: 'ficou em silêncio' }, { n: 3, text: 'mudou de assunto' }, { n: 4, text: 'escreveu um perfil' }], answer: 1, explanationPt: 'A estratégia é わからないことばを英語で言う: usar inglês ou outra palavra disponível para manter a conversa.' },
    { id: 'iro-pi-l10-31', number: 31, prompt: 'No modelo de fala 10-09, a conversa sobre método de estudo segue qual estrutura?', choices: [{ n: 1, text: 'método → método específico → efeito → opinião' }, { n: 2, text: 'opinião → kanji → registro → desculpa' }, { n: 3, text: 'cumprimento → convite → recusa → promessa' }, { n: 4, text: 'local → preço → horário → pagamento' }], answer: 1, explanationPt: 'A atividade organiza a fala em どんな方法？, 具体的な勉強方法, どんな効果があった？ e どう思っている？.' },
    { id: 'iro-pi-l10-32', number: 32, prompt: 'Can-do 33: a atividade de escrita pede que o aluno consiga:', choices: [{ n: 1, text: 'escrever perfil e desejos em algum detalhe em site/app para procurar parceiro de tandem' }, { n: 2, text: 'preencher boletim de ocorrência' }, { n: 3, text: 'escrever resenha de restaurante' }, { n: 4, text: 'ler roteiro de drama' }], answer: 1, explanationPt: 'A atividade 3 é タンデム学習の相手探し.' },
    { id: 'iro-pi-l10-33', number: 33, prompt: 'Um perfil para tandem organiza principalmente:', choices: [{ n: 1, text: 'nome/nickname, línguas que fala, língua que quer aprender, interesses e pedidos para a aula' }, { n: 2, text: 'somente endereço completo e senha' }, { n: 3, text: 'apenas histórico escolar' }, { n: 4, text: 'somente foto e idade' }], answer: 1, explanationPt: 'O formulário do material pede 名前, 話せる言語, 学習したい言語, 自分のこと/好きなこと e お願いしたいこと.' },
    { id: 'iro-pi-l10-34', number: 34, prompt: 'Perfil XYZ: qual resumo corresponde ao gabarito?', choices: [{ n: 1, text: 'fala nepalês, quer aprender japonês, estuda culinária em escola técnica, quer trabalhar em restaurante no Japão e precisa de ajuda com escrita' }, { n: 2, text: 'fala chinês e inglês, pesquisa economia japonesa' }, { n: 3, text: 'é SE em empresa japonesa e quer conversar com colegas' }, { n: 4, text: 'vai ao Japão a trabalho na primavera e gosta de J-POP' }], answer: 1, explanationPt: 'O answer key lista ネパール語, 日本語, 専門学校で料理の勉強, restaurante no futuro e pedido de checar cartas/e-mails.' },
    { id: 'iro-pi-l10-35', number: 35, prompt: 'Perfil うた: qual dado aparece no gabarito?', choices: [{ n: 1, text: 'fala indonésio, gosta do Japão e de J-POP, e vai ao Japão a trabalho na primavera' }, { n: 2, text: 'mora em Hunan e pesquisa economia' }, { n: 3, text: 'quer trabalhar em restaurante japonês' }, { n: 4, text: 'quer ajuda só com apresentações' }], answer: 1, explanationPt: 'うた fala インドネシア語, quer aprender 日本語, gosta de 日本 e J-POP e vai ao Japão por trabalho.' },
    { id: 'iro-pi-l10-36', number: 36, prompt: 'Perfil クオン: qual combinação está correta?', choices: [{ n: 1, text: 'fala vietnamita e inglês; trabalha como SE em empresa japonesa; quer comunicação para conversas casuais com colegas' }, { n: 2, text: 'fala nepalês e estuda culinária' }, { n: 3, text: 'fala chinês e inglês e mora em Hunan' }, { n: 4, text: 'fala indonésio e gosta de なにわ男子' }], answer: 1, explanationPt: 'O gabarito informa ベトナム語・英語, 日系企業でSE e desejo de 雑談できるようなコミュニケーション力.' },
    { id: 'iro-pi-l10-37', number: 37, prompt: 'Perfil 念念: qual resumo corresponde ao gabarito?', choices: [{ n: 1, text: 'fala chinês e inglês, mora em Hunan, pesquisa economia japonesa na pós-graduação e quer praticar japonês para apresentações' }, { n: 2, text: 'estuda culinária em escola técnica' }, { n: 3, text: 'vai ao Japão a trabalho na primavera' }, { n: 4, text: 'é parceira de tandem de Hong' }], answer: 1, explanationPt: '念念 é 中国の湖南省在住, 大学院で日本の経済について研究 e quer ajuda inclusive com 発表.' },
    { id: 'iro-pi-l10-38', number: 38, prompt: 'Kanji da lição: 登録／在住／対象 leem-se:', choices: [{ n: 1, text: 'とうろく／ざいじゅう／たいしょう' }, { n: 2, text: 'とうき／ざいしょ／たいぞう' }, { n: 3, text: 'とろく／ざいじゅ／たいせき' }, { n: 4, text: 'とうろく／すみじゅう／たいしょう' }], answer: 1, explanationPt: 'Esses kanji aparecem no portal e no perfil.' },
    { id: 'iro-pi-l10-39', number: 39, prompt: 'Kanji da lição: 文章／表現／字幕 leem-se:', choices: [{ n: 1, text: 'ぶんしょう／ひょうげん／じまく' }, { n: 2, text: 'ぶんそう／ひょうけん／じばく' }, { n: 3, text: 'もんしょう／ひょうげん／じまく' }, { n: 4, text: 'ぶんしょう／ひょうご／じまく' }], answer: 1, explanationPt: '文章 e 表現 aparecem no uso de AI; 字幕 aparece no método de ニコル.' },
    { id: 'iro-pi-l10-40', number: 40, prompt: 'Kanji da lição: 専門学校／基礎的／研究する／助かる leem-se:', choices: [{ n: 1, text: 'せんもんがっこう／きそてき／けんきゅうする／たすかる' }, { n: 2, text: 'せんこうがっこう／きほんてき／けんさくする／すくかる' }, { n: 3, text: 'せんもんがくこう／きそまと／けんきゅうする／たつかる' }, { n: 4, text: 'せんもんがっこう／きそてき／けんきょうする／たすかる' }], answer: 1, explanationPt: 'São itens do bloco 漢字のことば da Lição 10.' },
    { id: 'iro-pi-l10-41', number: 41, prompt: 'TIPS: sobre sites de aprendizagem da JF, qual afirmação está correta?', choices: [{ n: 1, text: 'a JF desenvolve, opera ou supervisiona vários sites/apps gratuitos, como みなと, アニメ・マンガの日本語, ひきだすにほんご e KANJI Memory Hint' }, { n: 2, text: 'a JF não oferece materiais online' }, { n: 3, text: 'todos exigem pagamento obrigatório' }, { n: 4, text: 'só há material de kanji' }], answer: 1, explanationPt: 'A TIPS também cita MARUGOTO Plus, Erin, Hirogaru e NHK WORLD-JAPAN やさしい日本語.' },
    { id: 'iro-pi-l10-42', number: 42, prompt: 'TIPS: sobre タンデム学習 e AI, qual afirmação está alinhada ao material?', choices: [{ n: 1, text: 'tandem é troca entre pessoas em pé de igualdade, mas exige cuidado com segurança; AI é útil para estudo, mas suas respostas precisam ser verificadas' }, { n: 2, text: 'tandem é sempre relação professor-aluno e AI sempre responde corretamente' }, { n: 3, text: 'AI só serve para imagem, não para japonês' }, { n: 4, text: 'tandem não pode ser feito online' }], answer: 1, explanationPt: 'As TIPS destacam aprender ajudando um ao outro, usar serviços confiáveis e confirmar respostas de AI com cuidado.' },
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

const L2_SCRIPTS: Record<string, ScriptItem[]> = {
  '02-01': [
    {
      label: 'ことば - 好きなもの好きなこと (02-01)',
      lines: [
        { speaker: 'Narração', ja: '{映画|えいが}／ドラマ／{音楽|おんがく}／{読書|どくしょ}／ゲーム', pt: 'filmes, dramas, música, leitura, jogos' },
        { speaker: 'Narração', ja: 'アクション／ラブコメディ／ファンタジー／{家庭|かてい}・{育児|いくじ}', pt: 'ação, comédia romântica, fantasia, família e criação de filhos' },
        { speaker: 'Narração', ja: '{印象的|いんしょうてき}／{物足|ものた}りない／{共感|きょうかん}／モヤモヤする', pt: 'marcante, insuficiente, identificação/empatia, ficar com sensação incômoda' },
      ],
    },
  ],
  '02-02': [
    {
      label: '会話 - 映画「スラムダンク」の感想 (02-02)',
      setupPt: 'Chen e Ishiyama conversam sobre o filme SLAM DUNK.',
      lines: [
        { speaker: 'チェン', ja: 'あ、{石山|いしやま}さん、そのクリアファイル、いいですね。スラムダンクですね！', pt: 'Ah, Ishiyama, essa pasta é legal. É SLAM DUNK, né?' },
        { speaker: '石山', ja: 'ええ。チェンさん、スラムダンク、{好|す}きなんですか？', pt: 'Sim. Chen, você gosta de SLAM DUNK?' },
        { speaker: 'チェン', ja: 'はい、この{間|あいだ}、{映画|えいが}を{見|み}ました。{石山|いしやま}さんも{見|み}ましたか？', pt: 'Sim, vi o filme outro dia. Você também viu, Ishiyama?' },
        { speaker: '石山', ja: 'もちろん！ もう3{回|かい}{見|み}ました。どうでしたか？ おもしろかったでしょう？', pt: 'Claro! Já vi três vezes. Como foi? Foi interessante, não foi?' },
        { speaker: 'チェン', ja: 'はい、とてもよかったです。', pt: 'Sim, foi muito bom.' },
        { speaker: '石山', ja: 'ですよね。どこがよかったですか？', pt: 'Pois é. O que foi bom?' },
        { speaker: 'チェン', ja: 'そうですね、えっと、まず、{映像|えいぞう}がすばらしかったです。', pt: 'Bem, vejamos... primeiro, as imagens eram excelentes.' },
        { speaker: '石山', ja: 'ああ。', pt: 'Ah.' },
        { speaker: 'チェン', ja: 'たぶん、CGを{使|つか}っていると{思|おも}いますが、{人|ひと}の{動|うご}きがとてもリアルで、すごいと{思|おも}いました。', pt: 'Acho que usaram CG, mas os movimentos das pessoas eram muito realistas e achei incrível.' },
        { speaker: '石山', ja: 'そうですよね。', pt: 'É verdade.' },
        { speaker: 'チェン', ja: 'はい。それから、やっぱり、バスケットの{試合|しあい}のシーンが、{本当|ほんとう}にドキドキしました。{盛|も}り{上|あ}がる{演出|えんしゅつ}で、なんていうか、すごく{興奮|こうふん}しました。', pt: 'Sim. E, como era de se esperar, a cena do jogo de basquete me deixou muito empolgado. A direção criava muita emoção e, como dizer, fiquei muito animado.' },
        { speaker: '石山', ja: 'わかります。{最後|さいご}はそういう{結果|けっか}になるだろうなあ、ってわかってても、{見|み}ていてドキドキしますよね。', pt: 'Entendo. Mesmo sabendo que o final provavelmente teria aquele resultado, dá emoção vendo, né?' },
        { speaker: 'チェン', ja: 'そうですね。ただ……{全体的|ぜんたいてき}に、んー、ストーリーがちょっと{短|みじか}かった{気|き}がしました。', pt: 'É. Mas... no geral, hmm, tive a impressão de que a história foi um pouco curta.' },
        { speaker: '石山', ja: '{短|みじか}かった？', pt: 'Curta?' },
        { speaker: 'チェン', ja: 'はい。{私|わたし}は、スラムダンクは、{原作|げんさく}のマンガもテレビアニメも{知|し}らないで、{映画|えいが}ではじめて{見|み}たんですが……それぞれのキャラクターがどんな{人|ひと}か、そのー、もう{少|すこ}しくわしく{知|し}りたいと{思|おも}いました。あの{赤|あか}い{髪|かみ}の{人|ひと}とか。そこが、なんだか{物足|ものた}りなかった{気|き}がします。', pt: 'Sim. Eu não conhecia o mangá original nem o anime de TV de SLAM DUNK e vi pela primeira vez no filme... Então quis saber um pouco mais sobre que tipo de pessoa cada personagem era. Por exemplo, aquele de cabelo vermelho. Foi essa parte que me pareceu meio insuficiente.' },
        { speaker: '石山', ja: 'ああ、{確|たし}かにそうですね。{赤|あか}い{髪|かみ}の{人|ひと}は{桜木|さくらぎ}っていうんですが、{原作|げんさく}だと、{桜木|さくらぎ}が{主人公|しゅじんこう}なんですよ。', pt: 'Ah, realmente. O de cabelo vermelho se chama Sakuragi e, no original, o protagonista é o Sakuragi.' },
        { speaker: '石山', ja: 'でも{原作|げんさく}の{長|なが}い{話|はなし}を、2{時間|じかん}の{映画|えいが}にするのは、{大変|たいへん}なんでしょうね。', pt: 'Mas deve ser difícil transformar uma história longa do original em um filme de duas horas.' },
        { speaker: 'チェン', ja: 'そうなんですか。{今度|こんど}、{原作|げんさく}のマンガも{読|よ}んでみたいと{思|おも}います。', pt: 'Entendi. Da próxima vez, quero tentar ler o mangá original também.' },
        { speaker: '石山', ja: 'ぼく、{全巻|ぜんかん}{持|も}ってるので、{貸|か}しますよ。', pt: 'Eu tenho a coleção completa, então empresto para você.' },
        { speaker: 'チェン', ja: 'わあ、ありがとうございます。いいんですか？', pt: 'Nossa, obrigado. Tudo bem mesmo?' },
        { speaker: '石山', ja: 'はい。スラムダンクのファンが{増|ふ}えるのは、ぼくもうれしいですしね。', pt: 'Sim. Também fico feliz quando aumenta o número de fãs de SLAM DUNK.' },
      ],
    },
  ],
  '02-03': [
    {
      label: '形に注目 - Sでしょう？ (02-03)',
      lines: [
        { speaker: '石山', ja: 'どうでしたか？ おもしろかったでしょう？', pt: 'Como foi? Foi interessante, não foi?' },
      ],
    },
  ],
  '02-04': [
    {
      label: '形に注目 - S気がする (02-04)',
      lines: [
        { speaker: 'チェン', ja: 'ストーリーがちょっと{短|みじか}かった{気|き}がしました。', pt: 'Tive a impressão de que a história foi um pouco curta.' },
        { speaker: 'チェン', ja: 'そこが、なんだか{物足|ものた}りなかった{気|き}がします。', pt: 'Essa parte me pareceu meio insuficiente.' },
      ],
    },
  ],
  '02-05': [
    {
      label: 'ストラテジー - 考えながら話す (02-05)',
      setupPt: 'Expressões para ganhar tempo e organizar a fala enquanto pensa.',
      lines: [
        { speaker: 'チェン', ja: 'そうですね、えっと、まず、{映像|えいぞう}がすばらしかったです。', pt: 'Bem, vejamos... primeiro, as imagens eram excelentes.' },
        { speaker: 'チェン', ja: '{盛|も}り{上|あ}がる{演出|えんしゅつ}で、なんていうか、すごく{興奮|こうふん}しました。', pt: 'A direção criava emoção e, como dizer, fiquei muito animado.' },
        { speaker: 'チェン', ja: 'ただ……{全体的|ぜんたいてき}に、んー、ストーリーがちょっと{短|みじか}かった{気|き}がしました。', pt: 'Mas... no geral, hmm, tive a impressão de que a história foi um pouco curta.' },
        { speaker: 'チェン', ja: 'それぞれのキャラクターがどんな{人|ひと}か、そのー、もう{少|すこ}しくわしく{知|し}りたいと{思|おも}いました。', pt: 'Quis saber um pouco mais sobre que tipo de pessoa cada personagem era.' },
      ],
    },
  ],
  '02-06': [
    {
      label: '話すモデル - 映画の感想 (02-06)',
      lines: [
        { speaker: 'A', ja: 'この{間|あいだ}、スラムダンクの{映画|えいが}を{見|み}ました。', pt: 'Outro dia vi o filme de SLAM DUNK.' },
        { speaker: 'B', ja: 'どうでしたか？', pt: 'Como foi?' },
        { speaker: 'A', ja: 'とてもよかったです。', pt: 'Foi muito bom.' },
        { speaker: 'B', ja: 'どこがよかったですか？', pt: 'O que foi bom?' },
        { speaker: 'A', ja: 'えっと、まず、{映像|えいぞう}がすばらしかったです。{人|ひと}の{動|うご}きがとてもリアルで、すごいと{思|おも}いました。', pt: 'Bem, primeiro, as imagens eram excelentes. Os movimentos das pessoas eram muito realistas e achei incrível.' },
        { speaker: 'A', ja: 'それから、バスケットの{試合|しあい}のシーンが、{本当|ほんとう}にドキドキしました。{盛|も}り{上|あ}がる{演出|えんしゅつ}で、すごく{興奮|こうふん}しました。', pt: 'Além disso, a cena do jogo de basquete me deixou muito empolgado. A direção criava emoção e fiquei muito animado.' },
        { speaker: 'A', ja: 'ただ、{全体的|ぜんたいてき}に、ストーリーがちょっと{短|みじか}かった{気|き}がしました。', pt: 'Mas, no geral, tive a impressão de que a história foi um pouco curta.' },
      ],
    },
  ],
  '02-07': [
    {
      label: '① 婷婷さん - 刀剣乱舞 ONLINE (02-07)',
      setupPt: 'No restaurante, colegas da mesma aula de japonês falam sobre jogos, música e dramas favoritos.',
      lines: [
        { speaker: 'アマンダ', ja: '{婷婷|ティンティン}さん、{今日|きょう}はちょっと{眠|ねむ}そうですけど、だいじょうぶですか？', pt: 'Tingting, hoje você parece um pouco sonolenta. Está tudo bem?' },
        { speaker: '婷婷', ja: 'あ、{昨日|きのう}、{夜遅|よるおそ}くまでゲームしてたんです。', pt: 'Ah, ontem fiquei jogando até tarde da noite.' },
        { speaker: 'アマンダ', ja: 'ゲーム？ {婷婷|ティンティン}さん、ゲーム、{好|す}きなんですか？', pt: 'Jogo? Tingting, você gosta de jogos?' },
        { speaker: '婷婷', ja: 'はい。スマホでよくやってます。', pt: 'Sim. Jogo bastante no smartphone.' },
        { speaker: 'ノン', ja: 'へー。どんなゲームをやるんですか？', pt: 'Nossa. Que tipo de jogo você joga?' },
        { speaker: '婷婷', ja: 'えっと、いちばん{好|す}きなゲームは『{刀剣乱舞|とうけんらんぶ}』です。', pt: 'Bem, meu jogo favorito é Touken Ranbu.' },
        { speaker: 'アマンダ', ja: 'とう……けん？', pt: 'Tou... ken?' },
        { speaker: '婷婷', ja: '『{刀剣乱舞|とうけんらんぶ} ONLINE』です。{日本|にほん}の{刀|かたな}から{生|う}まれたキャラクターを{集|あつ}めて、{歴史|れきし}を{変|か}えようとする{敵|てき}と{戦|たたか}うってゲームです。', pt: 'É Touken Ranbu ONLINE. É um jogo em que você reúne personagens nascidos de espadas japonesas e luta contra inimigos que tentam mudar a história.' },
        { speaker: 'ノン', ja: 'え、{日本|にほん}の{刀|かたな}？', pt: 'Hã, espadas japonesas?' },
        { speaker: '婷婷', ja: 'はい。{刀|かたな}が{人間|にんげん}のキャラクターになっていて、おもしろいんです。いろいろなキャラクターがいて、{刀|かたな}の{歴史|れきし}や{種類|しゅるい}に{合|あ}わせて{強|つよ}さや{得意|とくい}なことが{違|ちが}うんですよ。', pt: 'Sim. As espadas viram personagens humanos e isso é interessante. Há vários personagens, e a força e as especialidades mudam conforme a história e o tipo da espada.' },
        { speaker: 'ノン', ja: 'へー、おもしろそうですね。', pt: 'Nossa, parece interessante.' },
        { speaker: '婷婷', ja: 'それに、ゲームだけじゃなくて、{舞台|ぶたい}とかミュージカルとかアニメとかもあって、いろいろ{楽|たの}しめるんです。{舞台|ぶたい}では、イケメン{俳優|はいゆう}がゲームのキャラクターそっくりに{演|えん}じていて、すごくすてきなんですよ。YouTubeでもちょっと{見|み}られますよ。', pt: 'Além disso, não é só o jogo. Há peças, musicais, anime e dá para aproveitar de várias formas. No palco, atores bonitos interpretam os personagens iguais aos do jogo, e é muito legal. Dá para ver um pouco no YouTube também.' },
        { speaker: 'ノン', ja: 'へー。{私|わたし}も、やってみたいです。', pt: 'Nossa. Eu também quero experimentar.' },
        { speaker: '婷婷', ja: 'じゃあ、{今|いま}リンク{送|おく}りますね。', pt: 'Então vou mandar o link agora.' },
        { speaker: 'ノン', ja: 'ありがとう。', pt: 'Obrigado.' },
      ],
    },
  ],
  '02-08': [
    {
      label: '② ノンさん - 米津玄師 (02-08)',
      lines: [
        { speaker: '婷婷', ja: 'ノンさんも、ゲームをしますか？', pt: 'Non, você também joga?' },
        { speaker: 'ノン', ja: '{私|わたし}は、あまり……。ゲームより、{私|わたし}は{音楽|おんがく}をよく{聞|き}きます。', pt: 'Eu não muito... Mais do que jogos, eu ouço bastante música.' },
        { speaker: '婷婷', ja: 'へー。{私|わたし}、{音楽|おんがく}も{好|す}きですよ。ノンさんは、どんな{音楽|おんがく}を{聞|き}くんですか？', pt: 'Nossa. Eu também gosto de música. Que tipo de música você ouve?' },
        { speaker: 'ノン', ja: '{何|なん}でも{好|す}きです。J-POP、ロック、ジャズ、クラシック……。でも、{今|いま}よく{聞|き}いているのは、{米津玄師|よねづけんし}ですね。', pt: 'Gosto de qualquer coisa. J-POP, rock, jazz, clássico... Mas agora escuto muito Kenshi Yonezu.' },
        { speaker: '婷婷', ja: 'よねづけんし？', pt: 'Yonezu Kenshi?' },
        { speaker: 'ノン', ja: '{日本|にほん}のシンガーソングライターです。『Lemon』って{曲|きょく}が{有名|ゆうめい}ですよ。', pt: 'É um singer-songwriter japonês. A música Lemon é famosa.' },
        { speaker: 'ノン', ja: '{私|わたし}も、{友|とも}だちがカラオケで{歌|うた}ってるのを{聞|き}いて、すごくいい{曲|きょく}だなって{思|おも}いました。それで{気|き}になって、ほかの{曲|きょく}も{聞|き}くようになったんです。', pt: 'Eu ouvi um amigo cantando no karaoke e achei que era uma música muito boa. Aí fiquei curioso e passei a ouvir outras músicas também.' },
        { speaker: '婷婷', ja: 'へー、そうなんですか。', pt: 'Nossa, entendi.' },
        { speaker: 'ノン', ja: 'ええ。メロディーがきれいなんですよ。すごく{印象的|いんしょうてき}なメロディーで、{何回|なんかい}も{聞|き}きたくなるんです。', pt: 'Sim. A melodia é bonita. É uma melodia muito marcante e dá vontade de ouvir várias vezes.' },
        { speaker: 'アマンダ', ja: 'ふーん。', pt: 'Entendi.' },
        { speaker: 'ノン', ja: 'それに、{曲|きょく}のジャンルが{広|ひろ}いんです。いろいろな{雰囲気|ふんいき}の{曲|きょく}があって、{落|お}ち{着|つ}いたバラードもあるし、ノリのいいアップテンポの{曲|きょく}もあるし、どれも{心|こころ}に{残|のこ}るんです。', pt: 'Além disso, os gêneros das músicas são amplos. Há músicas com várias atmosferas, baladas calmas, músicas agitadas e todas ficam na memória.' },
        { speaker: '婷婷', ja: 'そうなんですか。{今度|こんど}、{探|さが}して{聞|き}いてみます。', pt: 'Entendi. Vou procurar e ouvir depois.' },
      ],
    },
  ],
  '02-09': [
    {
      label: '③ アマンダさん - 孤独のグルメ (02-09)',
      lines: [
        { speaker: 'ノン', ja: 'アマンダさんも、ゲームとか、{音楽|おんがく}とか{好|す}きですか？', pt: 'Amanda, você também gosta de jogos, música e coisas assim?' },
        { speaker: 'アマンダ', ja: 'うーん、{私|わたし}は、ドラマを{見|み}るのがいちばん{好|す}きですね。', pt: 'Hmm, eu gosto mais de assistir dramas.' },
        { speaker: '婷婷', ja: 'ドラマですか。', pt: 'Dramas?' },
        { speaker: 'アマンダ', ja: 'はい。{今|いま}ハマってるドラマは、『{孤独|こどく}のグルメ』です。{知|し}ってますか？', pt: 'Sim. O drama em que estou viciada agora é Kodoku no Gourmet. Vocês conhecem?' },
        { speaker: 'ノン', ja: 'え、{知|し}らないです。', pt: 'Hã, não conheço.' },
        { speaker: '婷婷', ja: '{私|わたし}も。どんなドラマですか？', pt: 'Eu também não. Que tipo de drama é?' },
        { speaker: 'アマンダ', ja: '{五郎|ごろう}さんというおじさんが、{日本|にほん}のあちこちで、1{人|ひとり}で{町|まち}のレストランや{食堂|しょくどう}に{入|はい}って、{食事|しょくじ}を{楽|たの}しむってドラマです。', pt: 'É um drama em que um senhor chamado Goro entra sozinho em restaurantes e refeitórios de várias partes do Japão e aproveita a refeição.' },
        { speaker: 'ノン', ja: 'え、それ、おもしろいんですか？', pt: 'Hã, isso é interessante?' },
        { speaker: 'アマンダ', ja: 'おもしろいんですよ。{食|た}べるシーンがメインなんですけど、{五郎|ごろう}さんの{食|た}べ{方|かた}がいいんです。{本当|ほんとう}においしそうに、たくさん{食|た}べるので、{気持|きも}ちいいです。', pt: 'É interessante. As cenas de comer são o principal, e o jeito do Goro comer é ótimo. Ele come bastante, parecendo muito saboroso, então é satisfatório.' },
        { speaker: 'ノン', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'アマンダ', ja: 'そのお{店|みせ}に{行|い}って、{同|おな}じメニューを{食|た}べたくなりますよ。', pt: 'Dá vontade de ir àquele restaurante e comer o mesmo prato.' },
        { speaker: '婷婷', ja: 'ふーん。', pt: 'Entendi.' },
        { speaker: 'アマンダ', ja: 'あと、{毎回|まいかい}バラエティがあって、{楽|たの}しいです。', pt: 'Além disso, cada episódio tem variedade e é divertido.' },
        { speaker: '婷婷', ja: 'バラエティ？', pt: 'Variedade?' },
        { speaker: 'アマンダ', ja: 'はい。{例|たと}えば、{行|い}くお{店|みせ}が、{定食屋|ていしょくや}とか、{居酒屋|いざかや}とか、エスニックのレストランとか、いろいろなんです。{日本|にほん}のあちこちに{行|い}くので、その{地方|ちほう}の{料理|りょうり}が{見|み}られるのも、おもしろいですよ。', pt: 'Sim. Por exemplo, os lugares variam: restaurantes de refeições prontas, izakaya, restaurantes étnicos e outros. Como ele vai a vários lugares do Japão, também é interessante ver a culinária de cada região.' },
        { speaker: '婷婷', ja: 'へー。{今度|こんど}、{見|み}てみようかな。', pt: 'Nossa. Acho que vou assistir depois.' },
        { speaker: 'アマンダ', ja: 'ええ、ぜひ。でも、{絶対|ぜったい}お{腹|なか}がすくから、{気|き}をつけてくださいね。', pt: 'Sim, assista. Mas você com certeza vai ficar com fome, então cuidado.' },
      ],
    },
  ],
  '02-10': [
    {
      label: '形に注目 - SってN (02-10)',
      lines: [
        { speaker: '婷婷', ja: '{日本|にほん}の{刀|かたな}から{生|う}まれたキャラクターを{集|あつ}めて、{歴史|れきし}を{変|か}えようとする{敵|てき}と{戦|たたか}うってゲームです。', pt: 'É um jogo em que você reúne personagens nascidos de espadas japonesas e luta contra inimigos que tentam mudar a história.' },
        { speaker: 'アマンダ', ja: '{五郎|ごろう}さんというおじさんが、{日本|にほん}のあちこちで、1{人|ひとり}で{町|まち}のレストランや{食堂|しょくどう}に{入|はい}って、{食事|しょくじ}を{楽|たの}しむってドラマです。', pt: 'É um drama em que um senhor chamado Goro entra sozinho em restaurantes e refeitórios pelo Japão e aproveita a refeição.' },
      ],
    },
  ],
  '02-11': [
    {
      label: '形に注目 - 接続表現 (02-11)',
      lines: [
        { speaker: '婷婷', ja: 'それに、ゲームだけじゃなくて、{舞台|ぶたい}とかミュージカルとかアニメとかもあって、いろいろ{楽|たの}しめるんです。', pt: 'Além disso, não é só o jogo. Há peças, musicais, anime e dá para aproveitar de várias formas.' },
        { speaker: 'アマンダ', ja: 'あと、{毎回|まいかい}バラエティがあって、{楽|たの}しいです。', pt: 'Além disso, cada episódio tem variedade e é divertido.' },
      ],
    },
  ],
  '02-12': [
    {
      label: '話すモデル - 好きなものについて話す (02-12)',
      lines: [
        { speaker: 'A', ja: '{何|なに}が{好|す}きですか？', pt: 'Do que você gosta?' },
        { speaker: 'B', ja: 'ゲームが{好|す}きです。いちばん{好|す}きなゲームは『{刀剣乱舞|とうけんらんぶ} ONLINE』です。', pt: 'Gosto de jogos. Meu jogo favorito é Touken Ranbu ONLINE.' },
        { speaker: 'A', ja: '{刀剣乱舞|とうけんらんぶ}？', pt: 'Touken Ranbu?' },
        { speaker: 'B', ja: 'はい。{日本|にほん}の{刀|かたな}から{生|う}まれたキャラクターを{集|あつ}めて、{歴史|れきし}を{変|か}えようとする{敵|てき}と{戦|たたか}うってゲームです。', pt: 'Sim. É um jogo em que você reúne personagens nascidos de espadas japonesas e luta contra inimigos que tentam mudar a história.' },
        { speaker: 'A', ja: 'そうなんですか。どんなところが{好|す}きなんですか？', pt: 'Entendi. Que parte você gosta?' },
        { speaker: 'B', ja: 'キャラクターがおもしろいんです。{刀|かたな}が{人間|にんげん}のキャラクターになっていて、{刀|かたな}の{歴史|れきし}や{種類|しゅるい}に{合|あ}わせて{強|つよ}さや{得意|とくい}なことが{違|ちが}うんです。', pt: 'Os personagens são interessantes. As espadas viram personagens humanos, e a força e as especialidades mudam conforme a história e o tipo da espada.' },
        { speaker: 'B', ja: 'あと、ゲーム{以外|いがい}でも、いろいろ{楽|たの}しめるんですよ。{舞台|ぶたい}とかミュージカルとかアニメとかもあります。{舞台|ぶたい}では、イケメン{俳優|はいゆう}がゲームのキャラクターそっくりに{演|えん}じていて、すごくすてきなんです。', pt: 'E dá para aproveitar de várias formas além do jogo. Há peças, musicais e anime. No palco, atores bonitos interpretam os personagens iguais aos do jogo, e é muito legal.' },
        { speaker: 'A', ja: 'おもしろそうですね。', pt: 'Parece interessante.' },
      ],
    },
  ],
}

const L3_SCRIPTS: Record<string, ScriptItem[]> = {
  '03-01': [
    {
      label: '① 月見台 (03-01)',
      setupPt: '馬 pergunta aos colegas que bairro recomendam para se mudar.',
      lines: [
        { speaker: '馬', ja: '{入社|にゅうしゃ}してから、ずっと{寮|りょう}に{住|す}んでるんですけど、そろそろ{引|ひ}っ{越|こ}ししようと{思|おも}っているんです。', pt: 'Desde que entrei na empresa, moro no dormitório, mas estou pensando em me mudar em breve.' },
        { speaker: '同僚1', ja: '{馬|ば}さん、{引|ひ}っ{越|こ}しするんだ。どこに？', pt: 'Ma, você vai se mudar? Para onde?' },
        { speaker: '馬', ja: '{迷|まよ}ってます。{住|す}むなら、どのあたりがおすすめですか？', pt: 'Estou em dúvida. Se eu fosse morar, que área você recomenda?' },
        { speaker: '同僚1', ja: '{私|わたし}なら{月見台|つきみだい}に{住|す}みたいなあ。', pt: 'Se fosse eu, gostaria de morar em Tsukimidai.' },
        { speaker: '馬', ja: '{月見台|つきみだい}ですか。おしゃれな{町|まち}っていうイメージです。', pt: 'Tsukimidai? Tenho a imagem de ser um bairro elegante.' },
        { speaker: '同僚1', ja: 'そうそう、おしゃれなカフェとか{服|ふく}の{店|みせ}がたくさんあるんですよ。{住|す}みたい{街|まち}ランキングでも1{位|い}になってましたよ。', pt: 'Isso mesmo. Tem muitos cafés elegantes e lojas de roupa. Também ficou em primeiro no ranking de bairros onde as pessoas querem morar.' },
        { speaker: '馬', ja: 'へー、すてきですね。', pt: 'Nossa, que legal.' },
        { speaker: '同僚2', ja: 'でも、{安|やす}いスーパーとかなさそうだし、{生活|せいかつ}するには{不便|ふべん}じゃないですか？', pt: 'Mas parece que não tem supermercados baratos, então não seria inconveniente para viver?' },
        { speaker: '同僚1', ja: 'んー、{高級|こうきゅう}スーパーはあるんですけどね。', pt: 'Hmm, supermercados de luxo tem.' },
        { speaker: '同僚2', ja: 'あと、{家賃|やちん}も{高|たか}そうだし。', pt: 'E o aluguel parece caro.' },
        { speaker: '同僚1', ja: 'まあ、{家賃|やちん}はしかたないですよ。{月見台|つきみだい}だから。', pt: 'Bem, o aluguel não tem jeito. É Tsukimidai.' },
        { speaker: '馬', ja: 'そうなんですね。', pt: 'Entendi.' },
      ],
    },
  ],
  '03-02': [
    {
      label: '② 芝浜 (03-02)',
      lines: [
        { speaker: '同僚2', ja: '{家賃|やちん}が{安|やす}いところがいいなら、{芝浜|しばはま}はどう？ {庶民的|しょみんてき}な{町|まち}だから、そんなに{高|たか}くないと{思|おも}いますよ。', pt: 'Se você quer um lugar com aluguel barato, que tal Shibahama? É um bairro popular, então acho que não é tão caro.' },
        { speaker: '馬', ja: '{芝浜|しばはま}？ ちょっと{調|しら}べてみます……ああ、{写真|しゃしん}が{出|で}てきました！ {下町|したまち}っぽい{雰囲気|ふんいき}ですね。', pt: 'Shibahama? Vou pesquisar um pouco... Ah, apareceram fotos! Tem uma atmosfera de bairro popular antigo.' },
        { speaker: '同僚2', ja: 'そう。{商店街|しょうてんがい}があって、お{惣菜屋|そうざいや}さんとか、{気軽|きがる}に{入|はい}れる{定食屋|ていしょくや}さんとかあって{便利|べんり}ですよ。', pt: 'Isso. Tem rua comercial, lojas de comida pronta e restaurantes de refeição onde dá para entrar sem cerimônia, então é conveniente.' },
        { speaker: '馬', ja: 'そうなんですね。', pt: 'Entendi.' },
        { speaker: '同僚2', ja: 'まあ、{夜遅|よるおそ}くまで{開|あ}いている{店|みせ}も{多|おお}いから、{夜|よる}はちょっとうるさいかもしれないですけど。', pt: 'Bem, como há muitas lojas abertas até tarde, talvez seja um pouco barulhento à noite.' },
        { speaker: '馬', ja: 'そうですか。', pt: 'Entendi.' },
      ],
    },
  ],
  '03-03': [
    {
      label: '③ 北ニュータウン (03-03)',
      lines: [
        { speaker: '同僚3', ja: '{北|きた}ニュータウンあたりもいいんじゃないですか？', pt: 'Que tal a região de Kita New Town também?' },
        { speaker: '馬', ja: '{北|きた}ニュータウンって、どこですか？', pt: 'Kita New Town, onde fica?' },
        { speaker: '同僚3', ja: '{山下駅|やましたえき}からバスで20{分|ぷん}ぐらいのところですよ。', pt: 'Fica a uns 20 minutos de ônibus da estação Yamashita.' },
        { speaker: '馬', ja: 'へー。', pt: 'Entendi.' },
        { speaker: '同僚3', ja: '{住宅地|じゅうたくち}だから{静|しず}かだし、{大|おお}きな{公園|こうえん}があるから{休|やす}みの{日|ひ}は{散歩|さんぽ}もできるし。', pt: 'Como é uma área residencial, é tranquila, e há um parque grande, então dá para passear nos dias de folga.' },
        { speaker: '馬', ja: '{買|か}い{物|もの}できるところもありますか？', pt: 'Também há lugares para fazer compras?' },
        { speaker: '同僚3', ja: '{自転車|じてんしゃ}で10{分|ぷん}ぐらいのところに、{大|おお}きなショッピングモールがありますよ。', pt: 'Há um shopping grande a uns 10 minutos de bicicleta.' },
        { speaker: '馬', ja: 'なるほど。', pt: 'Entendi.' },
        { speaker: '同僚3', ja: 'バスしかないから{交通|こうつう}が{不便|ふべん}だけど、{郊外|こうがい}の{住宅地|じゅうたくち}も{住|す}みやすいと{思|おも}いますよ。', pt: 'Como só tem ônibus, o transporte é inconveniente, mas acho que uma área residencial suburbana também é fácil de morar.' },
        { speaker: '馬', ja: 'いいですね。', pt: 'Parece bom.' },
      ],
    },
  ],
  '03-04': [
    {
      label: '④ 沢口 (03-04)',
      lines: [
        { speaker: '同僚4', ja: '{私|わたし}のおすすめは{沢口|さわぐち}です。{昔|むかし}、{住|す}んでたんですが、{住|す}みやすかったですよ。', pt: 'Minha recomendação é Sawaguchi. Morei lá antes e era fácil de viver.' },
        { speaker: '馬', ja: 'ああ、{沢口|さわぐち}。', pt: 'Ah, Sawaguchi.' },
        { speaker: '同僚4', ja: 'いろんな{国|くに}の{人|ひと}が{住|す}んでるから、{国際的|こくさいてき}でおもしろい{町|まち}ですよ。いろんな{国|くに}の{食材|しょくざい}を{売|う}ってるスーパーやレストランがたくさんありますし。', pt: 'Como moram pessoas de vários países, é um bairro internacional e interessante. Há muitos supermercados e restaurantes que vendem ingredientes de vários países.' },
        { speaker: '馬', ja: 'そういえば、{友|とも}だちも{住|す}んでました。', pt: 'Pensando bem, um amigo meu também morava lá.' },
        { speaker: '同僚4', ja: '{外国語|がいこくご}が{話|はな}せる{不動産屋|ふどうさんや}さんがいくつかあるから、{部屋|へや}も{見|み}つけやすいですよ。', pt: 'Há algumas imobiliárias que falam línguas estrangeiras, então é fácil encontrar quarto.' },
        { speaker: '同僚2', ja: 'でも、{会社|かいしゃ}からはちょっと{遠|とお}いかもね。', pt: 'Mas talvez seja um pouco longe da empresa.' },
        { speaker: '馬', ja: 'いろんな{町|まち}があるから{迷|まよ}うな。', pt: 'Há tantos bairros que fico em dúvida.' },
        { speaker: '同僚3', ja: 'いつぐらいに{引|ひ}っ{越|こ}しするんですか？', pt: 'Quando mais ou menos você vai se mudar?' },
        { speaker: '馬', ja: 'まだわかりません。', pt: 'Ainda não sei.' },
      ],
    },
  ],
  '03-05': [
    {
      label: '形に注目 - Sなら (03-05)',
      lines: [
        { speaker: '馬', ja: '{住|す}むなら、どのあたりがおすすめですか？', pt: 'Se eu fosse morar, que área você recomenda?' },
        { speaker: '同僚2', ja: '{家賃|やちん}が{安|やす}いところがいいなら、{芝浜|しばはま}はどう？', pt: 'Se você quer um lugar com aluguel barato, que tal Shibahama?' },
      ],
    },
  ],
  '03-06': [
    {
      label: '形に注目 - Nっぽい (03-06)',
      lines: [
        { speaker: '馬', ja: '{下町|したまち}っぽい{雰囲気|ふんいき}ですね。', pt: 'Tem uma atmosfera de bairro popular antigo.' },
      ],
    },
  ],
  '03-07': [
    {
      label: '会話 - 引っ越しの手伝いをお願いする (03-07)',
      setupPt: 'No almoço, colegas conversam sobre a mudança de Sujan.',
      lines: [
        { speaker: '堀川', ja: 'スジャンさん、もうすぐ{引|ひ}っ{越|こ}しですよね。{引|ひ}っ{越|こ}しの{準備|じゅんび}はどうですか？', pt: 'Sujan, sua mudança é em breve, né? Como estão os preparativos?' },
        { speaker: 'スジャン', ja: '{今|いま}、{荷物|にもつ}をまとめたり、{掃除|そうじ}をしたりして、{大変|たいへん}です。', pt: 'Agora estou juntando a bagagem, limpando e está puxado.' },
        { speaker: '町村', ja: '{引|ひ}っ{越|こ}し{業者|ぎょうしゃ}はもう{予約|よやく}しましたか？', pt: 'Você já reservou uma empresa de mudança?' },
        { speaker: 'スジャン', ja: 'いえ、{一人暮|ひとりぐ}らしで、{荷物|にもつ}はそんなに{多|おお}くないので、{自分|じぶん}で{運|はこ}ぶつもりです。', pt: 'Não. Como moro sozinho e não tenho tanta bagagem, pretendo carregar por conta própria.' },
        { speaker: '堀川', ja: '{自分|じぶん}で？ {大変|たいへん}ですね。', pt: 'Por conta própria? Vai ser difícil.' },
        { speaker: 'スジャン', ja: 'それで、あのう……もしよければ、{引|ひ}っ{越|こ}しを{手伝|てつだ}ってもらえたら、とてもありがたいんですが。', pt: 'Então, bem... se puderem, eu ficaria muito grato se me ajudassem na mudança.' },
        { speaker: '堀川', ja: 'いつでしたっけ？', pt: 'Era quando mesmo?' },
        { speaker: 'スジャン', ja: '{今月|こんげつ}の30{日|にち}です。', pt: 'Dia 30 deste mês.' },
        { speaker: '堀川', ja: 'だいじょうぶですよ。{何|なに}をすればいいですか？', pt: 'Tudo bem. O que devo fazer?' },
        { speaker: 'スジャン', ja: 'あ、ありがとうございます！ えっと、{当日|とうじつ}うちに{来|き}て、{荷物|にもつ}を{運|はこ}ぶのを{手伝|てつだ}ってもらえたら、とても{助|たす}かります。', pt: 'Ah, obrigado! Bem, se você vier à minha casa no dia e ajudar a carregar a bagagem, vai me ajudar muito.' },
        { speaker: 'スジャン', ja: '{荷物|にもつ}は{段|だん}ボール10{個|こ}ぐらいで、あとは{机|つくえ}と、{電子|でんし}レンジと、{小|ちい}さな{冷蔵庫|れいぞうこ}があります。', pt: 'A bagagem são umas 10 caixas de papelão, além de uma mesa, um micro-ondas e uma geladeira pequena.' },
        { speaker: '町村', ja: '{私|わたし}も、{手伝|てつだ}いに{行|い}きますよ。{車|くるま}はどうするんですか？', pt: 'Eu também vou ajudar. O que você vai fazer com o carro?' },
        { speaker: 'スジャン', ja: '{町村|まちむら}さん、ありがとうございます。{車|くるま}は、レンタカーを{借|か}りて、{自分|じぶん}で{運転|うんてん}するつもりです。', pt: 'Machimura, obrigado. Vou alugar um carro e dirigir eu mesmo.' },
        { speaker: '町村', ja: 'それなら、{私|わたし}の{車|くるま}を{出|だ}しましょうか？ {運転|うんてん}もしますよ。', pt: 'Nesse caso, posso levar meu carro. Também dirijo.' },
        { speaker: 'スジャン', ja: 'え、いいんですか？ そうしてもらえたら、すごくうれしいです。', pt: 'Hã, tudo bem? Se puder fazer isso, fico muito feliz.' },
        { speaker: '町村', ja: 'イムランさんはその{日|ひ}、{暇|ひま}？', pt: 'Imran, você está livre nesse dia?' },
        { speaker: 'イムラン', ja: '30{日|にち}ですか？ その{日|ひ}はちょっと{予定|よてい}が……。すみません。', pt: 'Dia 30? Nesse dia tenho uns planos... Desculpe.' },
        { speaker: 'スジャン', ja: 'だいじょうぶです。2{人|ふたり}に{手伝|てつだ}ってもらったら、すぐに{終|お}わると{思|おも}います。その{日|ひ}の{夕食|ゆうしょく}をごちそうしますね。', pt: 'Tudo bem. Se duas pessoas me ajudarem, acho que terminamos rápido. Eu pago o jantar desse dia.' },
        { speaker: '堀川', ja: 'やったー。{焼肉|やきにく}ぐらい{期待|きたい}しようかな。', pt: 'Oba. Acho que vou esperar algo como yakiniku.' },
      ],
    },
  ],
  '03-08': [
    {
      label: '形に注目 - V-てもらえたら (03-08)',
      lines: [
        { speaker: 'スジャン', ja: '{引|ひ}っ{越|こ}しを{手伝|てつだ}ってもらえたら、とてもありがたいんですが。', pt: 'Eu ficaria muito grato se pudesse me ajudar na mudança.' },
        { speaker: 'スジャン', ja: '{荷物|にもつ}を{運|はこ}ぶのを{手伝|てつだ}ってもらえたら、とても{助|たす}かります。', pt: 'Se puder ajudar a carregar a bagagem, isso me ajudaria muito.' },
        { speaker: 'スジャン', ja: 'そうしてもらえたら、すごくうれしいです。', pt: 'Se puder fazer isso, ficarei muito feliz.' },
      ],
    },
  ],
  '03-09': [
    {
      label: '話すモデル① - 手伝いを頼む (03-09)',
      lines: [
        { speaker: 'A', ja: '{引|ひ}っ{越|こ}しの{準備|じゅんび}はどうですか？', pt: 'Como estão os preparativos da mudança?' },
        { speaker: 'B', ja: '{今|いま}、{荷物|にもつ}をまとめたり、{掃除|そうじ}をしたりして、{大変|たいへん}です。', pt: 'Agora estou juntando a bagagem, limpando e está puxado.' },
        { speaker: 'B', ja: 'もしよければ、{引|ひ}っ{越|こ}しを{手伝|てつだ}ってもらえたら、とてもありがたいんですが。', pt: 'Se puder, eu ficaria muito grato se me ajudasse na mudança.' },
        { speaker: 'A', ja: 'だいじょうぶですよ。{何|なに}をすればいいですか？', pt: 'Tudo bem. O que devo fazer?' },
        { speaker: 'B', ja: '{当日|とうじつ}うちに{来|き}て、{荷物|にもつ}を{運|はこ}ぶのを{手伝|てつだ}ってもらえたら、とても{助|たす}かります。', pt: 'Se vier à minha casa no dia e ajudar a carregar a bagagem, isso me ajudaria muito.' },
      ],
    },
  ],
  '03-10': [
    {
      label: '話すモデル② - 断る (03-10)',
      lines: [
        { speaker: 'A', ja: '{引|ひ}っ{越|こ}しを{手伝|てつだ}ってもらえたら、とてもありがたいんですが。', pt: 'Eu ficaria muito grato se pudesse me ajudar na mudança.' },
        { speaker: 'B', ja: 'いつでしたっけ？', pt: 'Era quando mesmo?' },
        { speaker: 'A', ja: '{今月|こんげつ}の30{日|にち}です。', pt: 'Dia 30 deste mês.' },
        { speaker: 'B', ja: 'その{日|ひ}はちょっと{予定|よてい}が……。すみません。', pt: 'Nesse dia tenho uns planos... Desculpe.' },
        { speaker: 'A', ja: 'だいじょうぶです。', pt: 'Tudo bem.' },
      ],
    },
  ],
}

const L4_SCRIPTS: Record<string, ScriptItem[]> = {
  '04-01': [
    {
      label: 'ことばの準備 - 家のトラブル (04-01)',
      setupPt: 'Vocabulário de problemas da casa. Ouça olhando as ilustrações.',
      lines: [
        { speaker: '語彙', ja: 'エアコンが{壊|こわ}れた。', pt: 'O ar-condicionado quebrou.' },
        { speaker: '語彙', ja: '{換気扇|かんきせん}が{動|うご}かない。', pt: 'O exaustor/ventilador de ventilação não funciona.' },
        { speaker: '語彙', ja: '{窓|まど}が{割|わ}れた。', pt: 'A janela quebrou.' },
        { speaker: '語彙', ja: '{電気|でんき}がつかない。', pt: 'A luz não acende.' },
        { speaker: '語彙', ja: 'トイレがつまった。', pt: 'O vaso sanitário entupiu.' },
        { speaker: '語彙', ja: '{水|みず}が{出|で}ない。', pt: 'A água não sai.' },
        { speaker: '語彙', ja: 'お{湯|ゆ}が{出|で}ない。', pt: 'A água quente não sai.' },
        { speaker: '語彙', ja: '{水漏|みずも}れしている。', pt: 'Está vazando água.' },
        { speaker: '語彙', ja: '{鍵|かぎ}をなくした。', pt: 'Perdi a chave.' },
        { speaker: '語彙', ja: 'Wi-Fiがつながらない。', pt: 'O Wi-Fi não conecta.' },
        { speaker: '語彙', ja: 'ハチの{巣|す}ができた。', pt: 'Formou-se um ninho de vespa.' },
        { speaker: '語彙', ja: '{鳥|とり}がフンをする。', pt: 'Pássaros fazem fezes.' },
      ],
    },
  ],
  '04-02': [
    {
      label: 'ことばの確認 - 家のトラブル (04-02)',
      setupPt: 'Ouça e escolha a ilustração correspondente aos problemas da casa.',
      lines: [
        { speaker: '語彙', ja: 'お{湯|ゆ}が{出|で}ない。{鍵|かぎ}をなくした。トイレがつまった。Wi-Fiがつながらない。', pt: 'Não sai água quente. Perdi a chave. O vaso entupiu. O Wi-Fi não conecta.' },
        { speaker: '語彙', ja: 'エアコンが{壊|こわ}れた。{水漏|みずも}れしている。{電気|でんき}がつかない。{換気扇|かんきせん}が{動|うご}かない。', pt: 'O ar-condicionado quebrou. Há vazamento. A luz não acende. O exaustor não funciona.' },
      ],
    },
  ],
  '04-03': [
    {
      label: '① 洗面台の水漏れ (04-03)',
      setupPt: 'Uma pessoa liga para a imobiliária por causa de vazamento na pia.',
      lines: [
        { speaker: 'A', ja: 'はい、サンシャイン{不動産|ふどうさん}です。', pt: 'Sim, aqui é a Sunshine Imobiliária.' },
        { speaker: 'B', ja: 'あ、{南町|みなみまち}のアイワアパートに{住|す}んでいる{者|もの}です。{洗面台|せんめんだい}が{水漏|みずも}れしているんですが……。', pt: 'Ah, sou morador do Aiwa Apartment, em Minamimachi. A pia/lavatório está vazando...' },
        { speaker: 'A', ja: 'かしこまりました。{水漏|みずも}れですね。{部屋番号|へやばんごう}とご{契約者様|けいやくしゃさま}のお{名前|なまえ}をお{願|ねが}いいたします。', pt: 'Entendido. Vazamento, certo. Por favor, o número do quarto e o nome do titular do contrato.' },
        { speaker: 'B', ja: '102{号室|ごうしつ}のカリモフ・ハサンです。', pt: 'Sou Karimov Hasan, do quarto 102.' },
        { speaker: 'A', ja: 'ありがとうございます。{洗面台|せんめんだい}の{水漏|みずも}れとのことですが、どのような{状態|じょうたい}でしょうか。', pt: 'Obrigado. Sobre o vazamento da pia, em que estado está?' },
        { speaker: 'B', ja: 'えっと、{洗面台|せんめんだい}の{下|した}から、{水|みず}が{漏|も}れているんです。', pt: 'Bem, está vazando água por baixo da pia.' },
        { speaker: 'A', ja: 'わかりました。では、{修理業者|しゅうりぎょうしゃ}を{手配|てはい}しますので、お{部屋|へや}でお{待|ま}ちください。ご{都合|つごう}の{悪|わる}いお{時間|じかん}はありますか？', pt: 'Entendi. Então vamos providenciar uma empresa de reparo, por favor aguarde no seu quarto. Há algum horário que não seja conveniente?' },
        { speaker: 'B', ja: 'いつでも、だいじょうぶです。', pt: 'Qualquer horário está bom.' },
        { speaker: 'A', ja: 'ありがとうございます。それでは、よろしくお{願|ねが}いいたします。', pt: 'Obrigado. Contamos com sua compreensão.' },
      ],
    },
  ],
  '04-04': [
    {
      label: '② エアコンが壊れた (04-04)',
      setupPt: 'Bayarmaa liga para relatar problema com o ar-condicionado.',
      lines: [
        { speaker: 'A', ja: 'はい、リビングしろくまです。', pt: 'Sim, aqui é a Living Shirokuma.' },
        { speaker: 'B', ja: 'あ、おはようございます。{夢|ゆめ}が{丘市|おかし}{虹ヶ原町|にじがはらまち}の{大森|おおもり}ハイツ101{号室|ごうしつ}のバヤルマーと{申|もう}しますが。', pt: 'Bom dia. Sou Bayarmaa, do quarto 101 do Omori Heights, em Nijigaharamachi, cidade de Yumegaoka.' },
        { speaker: 'A', ja: 'はい、おはようございます。', pt: 'Sim, bom dia.' },
        { speaker: 'B', ja: 'あの、エアコンが{壊|こわ}れたみたいなんですが……。', pt: 'Bem, parece que o ar-condicionado quebrou...' },
        { speaker: 'A', ja: 'えーと、エアコンはどのような{状態|じょうたい}ですか？', pt: 'Certo, em que estado está o ar-condicionado?' },
        { speaker: 'B', ja: '{冷房|れいぼう}にしても、{冷|つめ}たい{空気|くうき}が{出|で}てこないんです。', pt: 'Mesmo colocando no modo resfriamento, não sai ar frio.' },
        { speaker: 'A', ja: 'わかりました。では、{修理業者|しゅうりぎょうしゃ}を{手配|てはい}します。あとで{業者|ぎょうしゃ}から{連絡|れんらく}がありますので、{少|すこ}しお{待|ま}ちください。お{電話番号|でんわばんごう}、お{願|ねが}いします。', pt: 'Entendi. Vamos providenciar uma empresa de reparo. O prestador entrará em contato depois, então aguarde um pouco. Por favor, seu número de telefone.' },
        { speaker: 'B', ja: '000-1234-5678です。', pt: 'É 000-1234-5678.' },
        { speaker: 'A', ja: 'はい、わかりました。', pt: 'Certo, entendi.' },
      ],
    },
  ],
  '04-05': [
    {
      label: '③ ハチの巣 (04-05)',
      setupPt: 'Sonumi liga para a administradora por causa de um ninho de vespa na varanda.',
      lines: [
        { speaker: 'A', ja: 'はい、たけもり{賃貸|ちんたい}センターです。', pt: 'Sim, aqui é o Takemori Rental Center.' },
        { speaker: 'B', ja: 'あの、すみません。コーポ{青空台|あおぞらだい}303{号室|ごうしつ}のソヌミです。えっと、{外|そと}にハチの{巣|す}ができているんですが……。', pt: 'Desculpe. Sou Sonumi, do quarto 303 do Corpo Aozoradai. Bem, há um ninho de vespa do lado de fora...' },
        { speaker: 'A', ja: 'あー、ハチの{巣|す}ですか。この{季節|きせつ}、{多|おお}いんですよね。{巣|す}は、どこですか？', pt: 'Ah, ninho de vespa? Nesta época aparece bastante. Onde fica o ninho?' },
        { speaker: 'B', ja: 'ベランダの{天井|てんじょう}です。', pt: 'No teto da varanda.' },
        { speaker: 'A', ja: 'そうですか。えーと、{部屋|へや}のベランダにハチの{巣|す}ができてしまった{場合|ばあい}は、{申|もう}し{訳|わけ}ないんですが、{入居者|にゅうきょしゃ}さんに{対応|たいおう}をお{願|ねが}いしているんですよ。', pt: 'Entendi. Bem, quando aparece ninho de vespa na varanda do quarto, desculpe, mas pedimos que o morador cuide disso.' },
        { speaker: 'B', ja: 'えっ、{私|わたし}がですか？', pt: 'Hã, eu?' },
        { speaker: 'A', ja: 'はい。{廊下|ろうか}とか{階段|かいだん}とかの{共用部分|きょうようぶぶん}の{場合|ばあい}は、こちらで{対応|たいおう}するんですが、{各部屋|かくへや}のベランダは{入居者|にゅうきょしゃ}さんにお{願|ねが}いしているんです。', pt: 'Sim. Se fosse corredor ou escada, uma área comum, nós cuidaríamos; mas a varanda de cada quarto fica sob responsabilidade do morador.' },
        { speaker: 'B', ja: 'じゃあ、どうすればいいですか？', pt: 'Então, o que devo fazer?' },
        { speaker: 'A', ja: 'ハチの{巣|す}を{駆除|くじょ}してくれる{業者|ぎょうしゃ}がいろいろあるんですよ。ちょっと{探|さが}してみて、{業者|ぎょうしゃ}に{直接|ちょくせつ}ご{連絡|れんらく}ください。', pt: 'Há várias empresas que removem ninhos de vespa. Procure um pouco e entre em contato diretamente com uma empresa.' },
        { speaker: 'B', ja: '{業者|ぎょうしゃ}を{自分|じぶん}で{探|さが}すんですね。わかりました。', pt: 'Então devo procurar a empresa por conta própria. Entendi.' },
        { speaker: 'A', ja: 'すみません。{駆除|くじょ}が{終|お}わったら、お{手数|てすう}ですが、こちらにもお{電話|でんわ}ください。', pt: 'Desculpe. Quando a remoção terminar, por favor, ligue para nós também.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '04-06': [
    {
      label: '④ 鍵をなくした (04-06)',
      setupPt: 'Villeac liga para o proprietário porque perdeu a chave.',
      lines: [
        { speaker: 'A', ja: 'はい、{榎本|えのもと}です。', pt: 'Sim, aqui é Enomoto.' },
        { speaker: 'B', ja: 'あ、{大家|おおや}さんですか？ 203{号室|ごうしつ}のヴィレアックですけど。', pt: 'Ah, é o proprietário? Sou Villeac, do quarto 203.' },
        { speaker: 'A', ja: 'ああ、ヴィレアックさん、こんにちは。どうしましたか？', pt: 'Ah, Villeac, boa tarde. O que aconteceu?' },
        { speaker: 'B', ja: 'すみません、{部屋|へや}の{鍵|かぎ}をなくしてしまいました……。', pt: 'Desculpe, perdi a chave do quarto...' },
        { speaker: 'A', ja: 'あー……、そうですか……。', pt: 'Ah... entendi...' },
        { speaker: 'B', ja: '{本当|ほんとう}にすみません。{買|か}い{物|もの}に{行|い}ったときになくしたみたいです。{買|か}い{物|もの}していたショッピングモールとか、{近|ちか}くの{交番|こうばん}でも{聞|き}いてみたんですけど、ありませんでした。', pt: 'Sinto muito mesmo. Parece que perdi quando fui fazer compras. Perguntei no shopping onde estava fazendo compras e também no posto policial próximo, mas não estava lá.' },
        { speaker: 'A', ja: 'わかりました。えーと、{今|いま}、どこにいますか？', pt: 'Entendi. Bem, onde você está agora?' },
        { speaker: 'B', ja: 'アパートに{帰|かえ}って{来|き}ました。', pt: 'Voltei para o apartamento.' },
        { speaker: 'A', ja: 'わかりました。こちらに{合鍵|あいかぎ}があるので、これから{持|も}って{行|い}きますね。{部屋|へや}の{前|まえ}で{待|ま}っててください。', pt: 'Entendi. Tenho uma chave reserva aqui, então vou levar agora. Espere na frente do quarto.' },
        { speaker: 'B', ja: 'はい。ありがとうございます！', pt: 'Sim. Muito obrigado!' },
      ],
    },
  ],
  '04-07': [
    {
      label: '形に注目 - Sみたいだ (04-07)',
      lines: [
        { speaker: 'バヤルマー', ja: 'エアコンが{壊|こわ}れたみたいなんですが……。', pt: 'Parece que o ar-condicionado quebrou...' },
        { speaker: 'ヴィレアック', ja: '{買|か}い{物|もの}に{行|い}ったときになくしたみたいです。', pt: 'Parece que perdi quando fui fazer compras.' },
      ],
    },
  ],
  '04-08': [
    {
      label: '形に注目 - お／ご + N (04-08)',
      lines: [
        { speaker: 'A', ja: 'お{電話番号|でんわばんごう}、お{願|ねが}いします。', pt: 'Por favor, seu número de telefone.' },
        { speaker: 'A', ja: 'ご{都合|つごう}の{悪|わる}いお{時間|じかん}はありますか？', pt: 'Há algum horário inconveniente para você?' },
      ],
    },
  ],
  '04-09': [
    {
      label: '形に注目 - お／ご + Vください (04-09)',
      lines: [
        { speaker: 'A', ja: 'お{部屋|へや}でお{待|ま}ちください。', pt: 'Por favor, aguarde no seu quarto.' },
        { speaker: 'A', ja: 'ちょっと{探|さが}してみて、{業者|ぎょうしゃ}に{直接|ちょくせつ}ご{連絡|れんらく}ください。', pt: 'Procure um pouco e entre em contato diretamente com uma empresa.' },
        { speaker: 'A', ja: '{駆除|くじょ}が{終|お}わったら、お{手数|てすう}ですが、こちらにもお{電話|でんわ}ください。', pt: 'Quando a remoção terminar, por favor, ligue para nós também.' },
      ],
    },
  ],
  '04-10': [
    {
      label: '話すモデル① - 部屋のトラブルを連絡する (04-10)',
      lines: [
        { speaker: 'A', ja: 'はい、サンシャイン{不動産|ふどうさん}です。', pt: 'Sim, aqui é a Sunshine Imobiliária.' },
        { speaker: 'B', ja: 'すみません、{虹ヶ原町|にじがはらまち}の{大森|おおもり}ハイツ101{号室|ごうしつ}のバヤルマーです。エアコンが{壊|こわ}れたみたいなんですが……。', pt: 'Desculpe, sou Bayarmaa, do quarto 101 do Omori Heights em Nijigaharamachi. Parece que o ar-condicionado quebrou...' },
        { speaker: 'A', ja: 'どのような{状態|じょうたい}でしょうか？', pt: 'Em que estado está?' },
        { speaker: 'B', ja: '{冷房|れいぼう}にしても、{冷|つめ}たい{空気|くうき}が{出|で}てこないんです。', pt: 'Mesmo colocando no modo resfriamento, não sai ar frio.' },
        { speaker: 'A', ja: 'では、{業者|ぎょうしゃ}を{手配|てはい}します。あとで{業者|ぎょうしゃ}から{連絡|れんらく}がありますので、{少|すこ}しお{待|ま}ちください。', pt: 'Então vamos providenciar uma empresa. O prestador entrará em contato depois, aguarde um pouco.' },
      ],
    },
  ],
  '04-11': [
    {
      label: '話すモデル② - ハチの巣を連絡する (04-11)',
      lines: [
        { speaker: 'B', ja: 'すみません、{外|そと}にハチの{巣|す}ができているんですが……。', pt: 'Desculpe, há um ninho de vespa do lado de fora...' },
        { speaker: 'A', ja: '{巣|す}はどこですか？', pt: 'Onde fica o ninho?' },
        { speaker: 'B', ja: 'ベランダの{天井|てんじょう}です。', pt: 'No teto da varanda.' },
        { speaker: 'A', ja: '{申|もう}し{訳|わけ}ないんですが、{業者|ぎょうしゃ}を{探|さが}して、{直接|ちょくせつ}ご{連絡|れんらく}ください。', pt: 'Desculpe, mas procure uma empresa e entre em contato diretamente.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '04-12': [
    {
      label: 'ことばの準備 - 家の苦情 (04-12)',
      setupPt: 'Vocabulário de reclamações em apartamentos e condomínios.',
      lines: [
        { speaker: '語彙', ja: '{音|おと}がうるさい。ごみ{出|だ}しのルールを{守|まも}らない。{料理|りょうり}のにおいが{強|つよ}い。', pt: 'O som é barulhento. Não seguem as regras de descarte de lixo. O cheiro da comida é forte.' },
        { speaker: '語彙', ja: '{共用|きょうよう}スペースに{物|もの}を{置|お}く。{自転車|じてんしゃ}を{勝手|かって}に{停|と}める。ベランダでたばこを{吸|す}う。', pt: 'Colocam coisas no espaço comum. Estacionam bicicleta sem permissão. Fumam na varanda.' },
        { speaker: '語彙', ja: '{子|こ}どもが{走|はし}り{回|まわ}る。ペットがおしっこをする。', pt: 'Crianças correm de um lado para o outro. O pet faz xixi.' },
      ],
    },
  ],
  '04-13': [
    {
      label: 'ことばの確認 - 家の苦情 (04-13)',
      setupPt: 'Ouça e escolha a ilustração correspondente à reclamação.',
      lines: [
        { speaker: '語彙', ja: '{共用|きょうよう}スペースに{物|もの}を{置|お}く。{音|おと}がうるさい。{自転車|じてんしゃ}を{勝手|かって}に{停|と}める。', pt: 'Colocar coisas no espaço comum. O som é barulhento. Estacionar bicicleta sem permissão.' },
        { speaker: '語彙', ja: '{料理|りょうり}のにおいが{強|つよ}い。{子|こ}どもが{走|はし}り{回|まわ}る。ごみ{出|だ}しのルールを{守|まも}らない。ベランダでたばこを{吸|す}う。', pt: 'Cheiro forte de comida. Crianças correndo. Não cumprir regras de lixo. Fumar na varanda.' },
      ],
    },
  ],
  '04-14': [
    {
      label: '会話 - 洗濯機の音がうるさい (04-14)',
      setupPt: 'カタリーナ, do quarto 102, liga para a sala do gerente para fazer uma reclamação.',
      lines: [
        { speaker: '管理人', ja: 'はい、{管理人室|かんりにんしつ}です。', pt: 'Sim, sala do gerente.' },
        { speaker: 'カタリーナ', ja: 'あのう、すみません、ちょっと{相談|そうだん}があるんですが……。', pt: 'Bem, desculpe, eu gostaria de consultar uma coisa...' },
        { speaker: '管理人', ja: 'あ、はい。どちら{様|さま}でしょうか。', pt: 'Ah, sim. Quem fala, por favor?' },
        { speaker: 'カタリーナ', ja: 'あ、102{号室|ごうしつ}のカタリーナです。', pt: 'Ah, sou Catarina, do quarto 102.' },
        { speaker: '管理人', ja: 'あ、カタリーナさんですね。どうしましたか？', pt: 'Ah, Catarina. O que aconteceu?' },
        { speaker: 'カタリーナ', ja: 'えっと、{上|うえ}の{階|かい}の{部屋|へや}の{人|ひと}が、{夜遅|よるおそ}い{時間|じかん}に{洗濯|せんたく}をするんです。それで、ちょっと{困|こま}っています。', pt: 'Bem, a pessoa do quarto no andar de cima lava roupa tarde da noite. Isso está me causando problema.' },
        { speaker: '管理人', ja: '{洗濯|せんたく}ですか。もう{少|すこ}しくわしく{教|おし}えてください。', pt: 'Lavar roupa? Conte-me um pouco mais, por favor.' },
        { speaker: 'カタリーナ', ja: 'はい、2{階|かい}の{人|ひと}だと{思|おも}います。{毎日|まいにち}、{夜|よる}{洗濯|せんたく}をします。{時間|じかん}は、だいたい{夜|よる}の11{時|じ}から、ときどき12{時|じ}を{過|す}ぎることもあります。', pt: 'Sim, acho que é a pessoa do segundo andar. Lava roupa todas as noites. O horário é mais ou menos a partir das 23h, às vezes passa de meia-noite.' },
        { speaker: '管理人', ja: 'ああ、それはちょっと{遅|おそ}いですね。', pt: 'Ah, isso é um pouco tarde.' },
        { speaker: 'カタリーナ', ja: '{私|わたし}は、{早|はや}く{寝|ね}たいのに、{洗濯機|せんたくき}の{音|おと}がうるさくて、{眠|ねむ}れなくなります。', pt: 'Eu quero dormir cedo, mas o som da máquina de lavar é barulhento e acabo não conseguindo dormir.' },
        { speaker: '管理人', ja: 'そうですか。', pt: 'Entendo.' },
        { speaker: 'カタリーナ', ja: 'すみません、{注意|ちゅうい}してもらえませんか？', pt: 'Desculpe, poderia chamar a atenção da pessoa?' },
        { speaker: '管理人', ja: 'どの{部屋|へや}の{人|ひと}かはわかりますか？', pt: 'Você sabe de qual quarto é a pessoa?' },
        { speaker: 'カタリーナ', ja: 'それはわかりません。', pt: 'Isso eu não sei.' },
        { speaker: '管理人', ja: 'わかりました。こちらでも{調|しら}べてみますね。わかったら、うるさいということを、{伝|つた}えます。', pt: 'Entendi. Vamos verificar aqui também. Se descobrirmos, transmitiremos que está barulhento.' },
        { speaker: 'カタリーナ', ja: 'ありがとうございます。よろしくお{願|ねが}いします。', pt: 'Obrigada. Conto com você.' },
      ],
    },
  ],
  '04-15': [
    {
      label: 'ストラテジー - 前置きをする (04-15)',
      lines: [
        { speaker: 'カタリーナ', ja: 'あのう、すみません、ちょっと{相談|そうだん}があるんですが……。', pt: 'Bem, desculpe, eu gostaria de consultar uma coisa...' },
        { speaker: '管理人', ja: 'あ、はい。', pt: 'Ah, sim.' },
      ],
    },
  ],
  '04-16': [
    {
      label: '話すモデル - 苦情を伝える (04-16)',
      lines: [
        { speaker: 'カタリーナ', ja: 'すみません。102{号室|ごうしつ}のカタリーナです。ちょっと{相談|そうだん}があるんですが……。', pt: 'Desculpe. Sou Catarina, do quarto 102. Gostaria de consultar uma coisa...' },
        { speaker: '管理人', ja: 'あ、カタリーナさんですね。どうしましたか？', pt: 'Ah, Catarina. O que aconteceu?' },
        { speaker: 'カタリーナ', ja: '{上|うえ}の{階|かい}の{部屋|へや}の{人|ひと}が、{夜遅|よるおそ}い{時間|じかん}に{洗濯|せんたく}をするんです。それで、ちょっと{困|こま}っています。', pt: 'A pessoa do quarto do andar de cima lava roupa tarde da noite. Isso está me causando problema.' },
        { speaker: '管理人', ja: 'もう{少|すこ}しくわしく{教|おし}えてください。', pt: 'Conte-me mais um pouco, por favor.' },
        { speaker: 'カタリーナ', ja: '2{階|かい}の{人|ひと}だと{思|おも}います。{毎日|まいにち}、{夜|よる}{洗濯|せんたく}をします。{時間|じかん}は、だいたい{夜|よる}の11{時|じ}から、ときどき12{時|じ}を{過|す}ぎることもあります。', pt: 'Acho que é a pessoa do segundo andar. Lava todas as noites, por volta das 23h, às vezes passa de meia-noite.' },
        { speaker: 'カタリーナ', ja: '{私|わたし}は、{早|はや}く{寝|ね}たいのに、{洗濯機|せんたくき}の{音|おと}がうるさくて、{眠|ねむ}れなくなります。すみません、{注意|ちゅうい}してもらえませんか？', pt: 'Eu quero dormir cedo, mas o som da máquina me impede de dormir. Desculpe, poderia chamar a atenção da pessoa?' },
        { speaker: '管理人', ja: 'わかりました。', pt: 'Entendi.' },
        { speaker: 'カタリーナ', ja: 'ありがとうございます。よろしくお{願|ねが}いします。', pt: 'Obrigada. Conto com você.' },
      ],
    },
  ],
  '04-17': [
    {
      label: '会話 - え、洗濯機がうるさいですか？ (04-17)',
      setupPt: 'O gerente do prédio fala com Mateo, do quarto 202, sobre uma reclamação de barulho.',
      lines: [
        { speaker: '管理人', ja: '（ピンポン）', pt: '(Campainha)' },
        { speaker: 'マテオ', ja: 'はい。', pt: 'Sim.' },
        { speaker: '管理人', ja: 'こんばんは、マテオさん。{管理人|かんりにん}の{上野|うえの}です。', pt: 'Boa noite, Mateo. Sou Ueno, o gerente.' },
        { speaker: 'マテオ', ja: 'あ、はい。', pt: 'Ah, sim.' },
        { speaker: '管理人', ja: 'こんばんは。{夜分|やぶん}すみませんね。{実|じつ}は……この{階|かい}の{人|ひと}が、{毎日|まいにち}、{夜|よる}、{洗濯機|せんたくき}を{使|つか}って、{音|おと}がうるさいと、ほかの{住人|じゅうにん}の{方|かた}から{苦情|くじょう}があったんですよ。', pt: 'Boa noite. Desculpe vir tarde. Na verdade... houve reclamação de outros moradores de que alguém deste andar usa a máquina de lavar todas as noites e o som é barulhento.' },
        { speaker: 'マテオ', ja: 'え、{洗濯機|せんたくき}がうるさいですか？', pt: 'Hã, a máquina de lavar é barulhenta?' },
        { speaker: '管理人', ja: 'はい。{洗濯|せんたく}は、いつも{何時|なんじ}ごろしていますか？', pt: 'Sim. Que horas você costuma lavar roupa?' },
        { speaker: 'マテオ', ja: '{洗濯|せんたく}は、だいたい11{時|じ}ごろにしていますけど、だめですか？', pt: 'Lavo mais ou menos por volta das 23h. Não pode?' },
        { speaker: '管理人', ja: 'そうですね、11{時|じ}はちょっと{遅|おそ}いですね。', pt: 'Bem, 23h é um pouco tarde.' },
        { speaker: 'マテオ', ja: 'そうですか。{私|わたし}は{仕事|しごと}があるので、{朝|あさ}8{時|じ}ごろに{家|いえ}を{出|で}て、{夜|よる}、{仕事|しごと}のあと、ご{飯|はん}を{食|た}べてから{家|いえ}に{帰|かえ}るので、だいたい9{時|じ}ごろに{帰|かえ}るんです。', pt: 'Entendo. Como trabalho, saio de casa por volta das 8h da manhã, e à noite, depois do trabalho, janto antes de voltar, então costumo chegar em casa por volta das 21h.' },
        { speaker: 'マテオ', ja: 'それから{家族|かぞく}や{友|とも}だちとネットで{話|はな}したりして、そのあと{洗濯|せんたく}するので、11{時|じ}ぐらいになってしまいます。', pt: 'Depois falo pela internet com família e amigos, e então lavo a roupa, por isso acaba ficando por volta das 23h.' },
        { speaker: '管理人', ja: 'でも、まあ{普通|ふつう}は、だいたい{夜|よる}の9{時|じ}を{過|す}ぎたら、{洗濯機|せんたくき}や{掃除機|そうじき}の{音|おと}を{出|だ}さないのが{常識|じょうしき}ですね。{早|はや}い{時間|じかん}に{寝|ね}る{人|ひと}とか、{遅|おそ}い{時間|じかん}に{音|おと}を{出|だ}されると{困|こま}る{人|ひと}もいますからね。', pt: 'Mas, normalmente, depois de mais ou menos 21h, o senso comum é não fazer barulho de máquina de lavar ou aspirador. Há pessoas que dormem cedo e pessoas que ficam incomodadas quando fazem barulho tarde.' },
        { speaker: 'マテオ', ja: 'そうなんですか。それは{知|し}りませんでした。じゃあ、{夜|よる}、もう{少|すこ}し{早|はや}くうちに{帰|かえ}って、すぐに{洗濯|せんたく}をするようにします。8{時|じ}ごろならだいじょうぶですか？', pt: 'Ah, é? Eu não sabia. Então vou tentar voltar para casa um pouco mais cedo à noite e lavar logo. Por volta das 20h tudo bem?' },
        { speaker: '管理人', ja: 'そうですね。その{時間|じかん}なら{問題|もんだい}ないですよ。9{時|じ}までに{終|お}わるようにしてください。', pt: 'Sim, nesse horário não há problema. Por favor, termine até as 21h.' },
        { speaker: 'マテオ', ja: 'わかりました。', pt: 'Entendi.' },
        { speaker: '管理人', ja: 'まあ、これからは{気|き}をつけてください。', pt: 'Então, de agora em diante, tome cuidado.' },
        { speaker: 'マテオ', ja: 'はい。どうもすみませんでした。', pt: 'Sim. Sinto muito.' },
      ],
    },
  ],
  '04-18': [
    {
      label: '形に注目 - 迷惑の受身 (04-18)',
      lines: [
        { speaker: '管理人', ja: '{早|はや}い{時間|じかん}に{寝|ね}る{人|ひと}とか、{遅|おそ}い{時間|じかん}に{音|おと}を{出|だ}されると{困|こま}る{人|ひと}もいますからね。', pt: 'Há pessoas que dormem cedo e ficam incomodadas quando fazem barulho tarde.' },
      ],
    },
  ],
  '04-19': [
    {
      label: '話すモデル - 苦情を受けて対応する (04-19)',
      lines: [
        { speaker: '管理人', ja: 'こんばんは、マテオさん。{管理人|かんりにん}の{上野|うえの}です。{実|じつ}は……この{階|かい}の{人|ひと}が、{毎日|まいにち}、{夜|よる}、{洗濯機|せんたくき}を{使|つか}って、{音|おと}がうるさいと、ほかの{住人|じゅうにん}の{方|かた}から{苦情|くじょう}があったんですよ。', pt: 'Boa noite, Mateo. Sou Ueno, o gerente. Na verdade... houve reclamação de outros moradores de que alguém deste andar usa a máquina de lavar todas as noites e o som é barulhento.' },
        { speaker: 'マテオ', ja: 'え、{洗濯機|せんたくき}がうるさいですか？', pt: 'Hã, a máquina de lavar é barulhenta?' },
        { speaker: '管理人', ja: '{洗濯|せんたく}は、いつも{何時|なんじ}ごろしていますか？', pt: 'Que horas você costuma lavar roupa?' },
        { speaker: 'マテオ', ja: '{洗濯|せんたく}は、だいたい11{時|じ}ごろにしていますけど、だめですか？', pt: 'Lavo por volta das 23h. Não pode?' },
        { speaker: '管理人', ja: '11{時|じ}はちょっと{遅|おそ}いですね。', pt: '23h é um pouco tarde.' },
        { speaker: 'マテオ', ja: '{仕事|しごと}のあと、だいたい9{時|じ}ごろに{帰|かえ}るんです。それから{家族|かぞく}や{友|とも}だちとネットで{話|はな}したりして、そのあと{洗濯|せんたく}するので、11{時|じ}ぐらいになってしまいます。', pt: 'Depois do trabalho, chego por volta das 21h. Depois falo online com família e amigos, e então lavo, por isso acaba ficando por volta das 23h.' },
        { speaker: '管理人', ja: '9{時|じ}までに{終|お}わるようにしてください。', pt: 'Por favor, termine até as 21h.' },
        { speaker: 'マテオ', ja: 'わかりました。どうもすみませんでした。', pt: 'Entendi. Sinto muito.' },
      ],
    },
  ],
  '04-20': [
    {
      label: '① ウェンシンさん - 一人暮らし (04-20)',
      setupPt: 'Wenxin fala sobre morar sozinho em apartamento.',
      lines: [
        { speaker: 'シティ', ja: 'ウェンシンさん、{最近|さいきん}、{引|ひ}っ{越|こ}したそうですね。', pt: 'Wenxin, ouvi dizer que você se mudou recentemente.' },
        { speaker: 'ウェンシン', ja: 'ええ、アパートで{一人暮|ひとりぐ}らしをしています。{一人暮|ひとりぐ}らしは、はじめてなんですけど、{自由|じゆう}ですごく{快適|かいてき}です。{好|す}きな{時間|じかん}にご{飯|はん}を{食|た}べて、{好|す}きな{時間|じかん}にお{風呂|ふろ}に{入|はい}って、{好|す}きな{時間|じかん}に{寝|ね}ることができますから。', pt: 'Sim, estou morando sozinho em um apartamento. É a primeira vez que moro sozinho, mas é livre e muito confortável. Posso comer, tomar banho e dormir no horário que quiser.' },
        { speaker: 'シティ', ja: 'いいですねー。{確|たし}か、わかば{町|ちょう}でしたよね？', pt: 'Que bom. Se não me engano, era Wakabacho, certo?' },
        { speaker: 'ウェンシン', ja: 'はい、{場所|ばしょ}が{便利|べんり}で、すごく{住|す}みやすいです。{近|ちか}くに{商店街|しょうてんがい}もスーパーもあるから{買|か}い{物|もの}しやすいし、バス{停|てい}も{近|ちか}いから{便利|べんり}です。', pt: 'Sim, a localização é conveniente e é muito fácil de morar. Há uma rua comercial e supermercado perto, então é fácil fazer compras, e o ponto de ônibus também é próximo.' },
        { speaker: 'クリスティン', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'ウェンシン', ja: 'でも、ちょっと{部屋|へや}がせまいんですよね。{友|とも}だちをたくさん{呼|よ}べないから、ちょっとつまらないです。お{金|かね}が{貯|た}まったら、もう{少|すこ}し{広|ひろ}い{部屋|へや}に{引|ひ}っ{越|こ}したいと{思|おも}ってます。', pt: 'Mas o quarto é um pouco pequeno. Como não consigo chamar muitos amigos, é meio sem graça. Quando juntar dinheiro, quero me mudar para um quarto um pouco maior.' },
        { speaker: 'シティ', ja: 'そうですか。', pt: 'Entendi.' },
      ],
    },
  ],
  '04-21': [
    {
      label: '② シティさん - 会社の寮 (04-21)',
      setupPt: 'Siti fala sobre morar no dormitório da empresa.',
      lines: [
        { speaker: 'ウェンシン', ja: 'シティさんは、どんなところに{住|す}んでいますか？', pt: 'Siti, em que tipo de lugar você mora?' },
        { speaker: 'シティ', ja: '{私|わたし}は、{会社|かいしゃ}の{寮|りょう}です。', pt: 'Eu moro no dormitório da empresa.' },
        { speaker: 'ウェンシン', ja: 'へー、どうですか？', pt: 'Ah, e como é?' },
        { speaker: 'シティ', ja: 'やっぱり、お{金|かね}がかからないのがいいですね。{家賃|やちん}も{安|やす}いし、{家具|かぐ}も{自分|じぶん}で{買|か}わなくていいんです。', pt: 'O bom é que realmente não custa muito dinheiro. O aluguel é barato e não preciso comprar móveis por conta própria.' },
        { speaker: 'ウェンシン', ja: 'そうですか。', pt: 'Entendi.' },
        { speaker: 'シティ', ja: 'あと、{通勤|つうきん}が{楽|らく}で{助|たす}かります。{会社|かいしゃ}から{近|ちか}くて、{自転車|じてんしゃ}で5{分|ふん}ぐらいだから、{仕事|しごと}で{疲|つか}れてもすぐに{部屋|へや}に{帰|かえ}れるんです。', pt: 'Além disso, o deslocamento ao trabalho é fácil e isso ajuda. Fica perto da empresa, uns 5 minutos de bicicleta, então mesmo cansada do trabalho consigo voltar logo para o quarto.' },
        { speaker: 'クリスティン', ja: 'いいですね。', pt: 'Que bom.' },
        { speaker: 'シティ', ja: 'でも、いろいろ{気|き}を{遣|つか}いますよ。うちの{寮|りょう}は、{二人部屋|ふたりべや}なんです。{同|おな}じ{部屋|へや}の{人|ひと}はいい{人|ひと}なんですけど、{生活|せいかつ}リズムが{合|あ}わないんです。その{人|ひと}、{夜寝|よるね}るのがすごく{早|はや}くて、{夜|よる}9{時|じ}ぐらいに{寝|ね}るんです。それに、{朝|あさ}は4{時|じ}に{起|お}きてシャワーを{浴|あ}びるんですよ。', pt: 'Mas preciso ser cuidadosa em várias coisas. Nosso dormitório é quarto para duas pessoas. A pessoa que divide o quarto é boa, mas nossos ritmos de vida não combinam. Ela dorme muito cedo, por volta das 21h. Além disso, acorda às 4h da manhã e toma banho.' },
        { speaker: 'クリスティン', ja: 'それは、{早|はや}いですね。', pt: 'Isso é cedo.' },
        { speaker: 'シティ', ja: '{私|わたし}も、{早|はや}く{寮|りょう}を{出|で}て、アパートを{借|か}りて、1{人|ひとり}で{暮|く}らしたいと{思|おも}ってます。', pt: 'Eu também quero sair logo do dormitório, alugar um apartamento e morar sozinha.' },
      ],
    },
  ],
  '04-22': [
    {
      label: '③ クリスティンさん - 古い一戸建て (04-22)',
      setupPt: 'Christine fala sobre morar com amigos em uma casa antiga.',
      lines: [
        { speaker: 'シティ', ja: 'クリスティンさんは？', pt: 'E você, Christine?' },
        { speaker: 'クリスティン', ja: '{友|とも}だちと3{人|にん}で、{古|ふる}い{一戸建|いっこだ}てに{住|す}んでます。', pt: 'Moro com dois amigos em uma casa antiga independente.' },
        { speaker: 'シティ', ja: 'へー、{一戸建|いっこだ}て。', pt: 'Ah, uma casa independente.' },
        { speaker: 'クリスティン', ja: 'すごく{古|ふる}い{家|いえ}なんです。{築|ちく}60{年|ねん}。{家|いえ}のまわりには、{田|た}んぼとか{林|はやし}があって……。', pt: 'É uma casa muito antiga. Tem 60 anos. Em volta da casa há arrozais e bosques...' },
        { speaker: 'ウェンシン', ja: 'えー。', pt: 'Nossa.' },
        { speaker: 'クリスティン', ja: 'でも、すごくゆったり{暮|く}らせるんですよ。{庭|にわ}も{広|ひろ}くて、{野菜|やさい}を{作|つく}ったり、{休|やす}みの{日|ひ}に3{人|にん}でバーベキューしたりしてます。', pt: 'Mas dá para viver com bastante espaço. O jardim é grande, então cultivamos legumes e fazemos churrasco nós três nos dias de folga.' },
        { speaker: 'シティ', ja: 'いいですね。', pt: 'Que bom.' },
        { speaker: 'クリスティン', ja: 'それに、{近所|きんじょ}の{人|ひと}が{親切|しんせつ}なんです。この{間|あいだ}{地震|じしん}があったときも、{心配|しんぱい}してすぐに{様子|ようす}を{見|み}に{来|き}てくれました。', pt: 'Além disso, os vizinhos são gentis. Quando houve terremoto outro dia, ficaram preocupados e vieram logo ver como estávamos.' },
        { speaker: 'シティ', ja: 'そうなんですか。', pt: 'É mesmo?' },
        { speaker: 'クリスティン', ja: '{困|こま}るのは、{冬|ふゆ}が{寒|さむ}いことですね。{部屋|へや}が{広|ひろ}いから、{暖房|だんぼう}があまり{効|き}かないんです。', pt: 'O problema é que o inverno é frio. Como os quartos são amplos, o aquecimento não funciona muito bem.' },
        { speaker: 'ウェンシン', ja: 'えー。', pt: 'Nossa.' },
        { speaker: 'クリスティン', ja: '{冬|ふゆ}になると、せまくてもいいから、{寒|さむ}くない{家|いえ}に{住|す}みたいって{思|おも}いますよ。', pt: 'Quando chega o inverno, penso que queria morar em uma casa que não fosse fria, mesmo que fosse pequena.' },
        { speaker: 'シティ', ja: 'ははは。', pt: 'Ha ha ha.' },
      ],
    },
  ],
  '04-23': [
    {
      label: '話すモデル - 今住んでいる家について話す (04-23)',
      lines: [
        { speaker: 'A', ja: '{最近|さいきん}、{引|ひ}っ{越|こ}したそうですね。', pt: 'Ouvi dizer que você se mudou recentemente.' },
        { speaker: 'B', ja: 'ええ、アパートで{一人暮|ひとりぐ}らしをしています。{自由|じゆう}ですごく{快適|かいてき}です。', pt: 'Sim, moro sozinho em um apartamento. É livre e muito confortável.' },
        { speaker: 'A', ja: 'いいですねー。', pt: 'Que bom.' },
        { speaker: 'B', ja: 'あと、{場所|ばしょ}が{便利|べんり}で{住|す}みやすいです。{近|ちか}くに{商店街|しょうてんがい}もスーパーもあるから{買|か}い{物|もの}しやすいし、バス{停|てい}も{近|ちか}いから{便利|べんり}です。', pt: 'Além disso, a localização é conveniente e é fácil morar lá. Há rua comercial e supermercado perto, então é fácil fazer compras, e o ponto de ônibus também é perto.' },
        { speaker: 'B', ja: 'でも、ちょっと{部屋|へや}がせまいんですよね。{友|とも}だちをたくさん{呼|よ}べないから、ちょっとつまらないです。', pt: 'Mas o quarto é um pouco pequeno. Como não consigo chamar muitos amigos, é meio sem graça.' },
        { speaker: 'B', ja: 'お{金|かね}が{貯|た}まったら、もう{少|すこ}し{広|ひろ}い{部屋|へや}に{引|ひ}っ{越|こ}したいと{思|おも}ってます。', pt: 'Quando juntar dinheiro, quero me mudar para um quarto um pouco maior.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Entendi.' },
      ],
    },
  ],
}

const L5_SCRIPTS: Record<string, ScriptItem[]> = {
  '05-01': [
    {
      label: '会話 - 本場の辛さにしてくれます (05-01)',
      setupPt: '山本 pergunta a ナパー, da Tailândia, sobre um restaurante tailandês recomendado.',
      lines: [
        { speaker: '山本', ja: 'ナパーさん、この{辺|へん}で、いいタイ{料理|りょうり}のお{店|みせ}、{知|し}らない？', pt: 'Napha, você conhece algum bom restaurante tailandês por aqui?' },
        { speaker: 'ナパー', ja: 'タイ{料理|りょうり}ですか？ そうですね、いくつか{知|し}ってますよ。チェーン{店|てん}もあるし、ちょっと{高級|こうきゅう}な{店|みせ}もあるし、どんなお{店|みせ}がいいですか？', pt: 'Comida tailandesa? Vejamos, conheço alguns. Há redes, há lugares um pouco sofisticados... que tipo de restaurante você quer?' },
        { speaker: '山本', ja: 'うーん、あまり{高|たか}くなくて、でも{本物|ほんもの}のタイ{料理|りょうり}が{食|た}べられるところがいいかな。あと、お{酒|さけ}が{飲|の}めて、{雰囲気|ふんいき}がよくて、1{人|ひとり}でも{入|はい}りやすいところ。', pt: 'Hmm, queria um lugar não muito caro, mas onde dê para comer comida tailandesa autêntica. E que tenha bebida, boa atmosfera e seja fácil entrar sozinho.' },
        { speaker: 'ナパー', ja: 'じゃあ、{十条|じゅうじょう}にある、イサーンというお{店|みせ}がおすすめですね。{居酒屋|いざかや}なんですけど、カウンターがあって、{気軽|きがる}にタイ{料理|りょうり}が{食|た}べられます。', pt: 'Então recomendo um lugar chamado Isaan, em Jujo. É um izakaya, mas tem balcão e dá para comer comida tailandesa de forma casual.' },
        { speaker: '山本', ja: '{居酒屋|いざかや}？ へー。{安|やす}いの？', pt: 'Izakaya? Ah. É barato?' },
        { speaker: 'ナパー', ja: 'そうですね、どの{料理|りょうり}もだいたい600{円|えん}ぐらいです。', pt: 'Sim, todos os pratos ficam por volta de 600 ienes.' },
        { speaker: '山本', ja: 'けっこう{安|やす}いねー。どんな{料理|りょうり}があるの？', pt: 'É bem barato. Que pratos tem?' },
        { speaker: 'ナパー', ja: 'ソムタムとか、トムヤムクンとか、{有名|ゆうめい}なタイ{料理|りょうり}はだいたいありますよ。あと、サイウアとか{地方|ちほう}の{料理|りょうり}も{食|た}べられます。', pt: 'Tem mais ou menos os pratos tailandeses famosos, como som tam e tom yum goong. E também dá para comer pratos regionais, como sai ua.' },
        { speaker: '山本', ja: 'サイウア？', pt: 'Sai ua?' },
        { speaker: 'ナパー', ja: 'ソーセージみたいな{料理|りょうり}で、タイの{北部|ほくぶ}の{名物|めいぶつ}です。', pt: 'É um prato parecido com linguiça/salsicha, especialidade do norte da Tailândia.' },
        { speaker: '山本', ja: 'へー。{味|あじ}は{本格的|ほんかくてき}？', pt: 'Ah. O sabor é autêntico?' },
        { speaker: 'ナパー', ja: 'はい、{辛|から}い{料理|りょうり}は、{日本人|にほんじん}に{合|あ}わせて、あまり{辛|から}くしていないんですが、「タイの{辛|から}さでお{願|ねが}いします」って{頼|たの}めば、{本場|ほんば}の{辛|から}さにしてくれます。', pt: 'Sim. Os pratos picantes são ajustados aos japoneses e não ficam muito picantes, mas, se você pedir “com a picância tailandesa”, eles fazem com a picância autêntica.' },
        { speaker: '山本', ja: 'そうなんだ。いいね。おすすめは？', pt: 'Entendi. Que bom. O que você recomenda?' },
        { speaker: 'ナパー', ja: 'そうですねえ、おすすめは、タイのお{酒|さけ}です。タイのビールもありますが、{何|なん}でしたっけ、お{米|こめ}から{作|つく}る、{透明|とうめい}で、ちょっと{強|つよ}いお{酒|さけ}……。', pt: 'Vejamos, recomendo a bebida tailandesa. Tem cerveja tailandesa também, mas como era mesmo... uma bebida feita de arroz, transparente e um pouco forte...' },
        { speaker: '山本', ja: '{焼酎|しょうちゅう}？', pt: 'Shochu?' },
        { speaker: 'ナパー', ja: 'はい、{焼酎|しょうちゅう}です。タイのお{米|こめ}から{作|つく}った{焼酎|しょうちゅう}で、ほかのタイ{料理|りょうり}のレストランと{比|くら}べて、あまり{高|たか}くない{値段|ねだん}で{飲|の}むことができます。', pt: 'Sim, shochu. É um shochu feito de arroz tailandês, e dá para beber por um preço não muito alto comparado a outros restaurantes tailandeses.' },
        { speaker: '山本', ja: 'タイの{焼酎|しょうちゅう}か。{飲|の}んでみたいな。', pt: 'Shochu tailandês, hein. Quero experimentar.' },
        { speaker: 'ナパー', ja: 'タイ{人|じん}の{親子|おやこ}がやっていて、お{母|かあ}さんはけっこうおしゃべりなので、{楽|たの}しい{雰囲気|ふんいき}です。ほかのお{客|きゃく}さんとも{気軽|きがる}におしゃべりもできますし。', pt: 'É administrado por mãe e filho tailandeses, e a mãe conversa bastante, então a atmosfera é divertida. Também dá para conversar casualmente com outros clientes.' },
        { speaker: '山本', ja: 'へー。{行|い}ってみたくなってきた。くわしい{場所|ばしょ}とか{教|おし}えて。', pt: 'Nossa. Fiquei com vontade de ir. Me diga a localização detalhada.' },
        { speaker: 'ナパー', ja: 'はい、{今|いま}、リンクを{送|おく}りますね。あまり{飲|の}みすぎないようにしてくださいね。', pt: 'Sim, vou mandar o link agora. Não beba demais, hein.' },
        { speaker: '山本', ja: 'あはは、{気|き}をつけなきゃ。', pt: 'Haha, vou tomar cuidado.' },
      ],
    },
  ],
  '05-02': [
    {
      label: '形に注目 - N1みたいなN2 (05-02)',
      lines: [
        { speaker: 'ナパー', ja: '（サイウアは）ソーセージみたいな{料理|りょうり}で、タイの{北部|ほくぶ}の{名物|めいぶつ}です。', pt: 'Sai ua é um prato parecido com linguiça/salsicha e é uma especialidade do norte da Tailândia.' },
      ],
    },
  ],
  '05-03': [
    {
      label: '形に注目 - イA-さ／ナA-さ (05-03)',
      lines: [
        { speaker: 'ナパー', ja: '{辛|から}い{料理|りょうり}は、{日本人|にほんじん}に{合|あ}わせて、あまり{辛|から}くしていないんですが、「タイの{辛|から}さでお{願|ねが}いします」って{頼|たの}めば、{本場|ほんば}の{辛|から}さにしてくれます。', pt: 'Os pratos picantes não ficam muito picantes para combinar com japoneses, mas se pedir “com a picância tailandesa”, eles fazem com a picância autêntica.' },
      ],
    },
  ],
  '05-04': [
    {
      label: 'ストラテジー - 思い出せない単語の特徴を言う (05-04)',
      lines: [
        { speaker: 'ナパー', ja: '{何|なん}でしたっけ、お{米|こめ}から{作|つく}る、{透明|とうめい}で、ちょっと{強|つよ}いお{酒|さけ}……。', pt: 'Como era mesmo... uma bebida feita de arroz, transparente e um pouco forte...' },
        { speaker: '山本', ja: '{焼酎|しょうちゅう}？', pt: 'Shochu?' },
        { speaker: 'ナパー', ja: 'はい、{焼酎|しょうちゅう}です。', pt: 'Sim, shochu.' },
      ],
    },
  ],
  '05-05': [
    {
      label: '話すモデル - おすすめのレストラン (05-05)',
      lines: [
        { speaker: 'A', ja: 'この{辺|へん}で、いいタイ{料理|りょうり}の{店|みせ}って、ありますか？', pt: 'Há algum bom restaurante tailandês por aqui?' },
        { speaker: 'B', ja: '{十条|じゅうじょう}にある、イサーンというお{店|みせ}がおすすめですね。', pt: 'Recomendo um restaurante chamado Isaan, em Jujo.' },
        { speaker: 'B', ja: '{居酒屋|いざかや}なんですけど、カウンターがあって、{気軽|きがる}にタイ{料理|りょうり}が{食|た}べられます。', pt: 'É um izakaya, mas tem balcão e dá para comer comida tailandesa casualmente.' },
        { speaker: 'A', ja: '{安|やす}いですか？', pt: 'É barato?' },
        { speaker: 'B', ja: 'どの{料理|りょうり}もだいたい600{円|えん}ぐらいです。', pt: 'Todos os pratos custam por volta de 600 ienes.' },
        { speaker: 'A', ja: 'どんな{料理|りょうり}が{食|た}べられるんですか？', pt: 'Que tipo de pratos dá para comer?' },
        { speaker: 'B', ja: 'ソムタムとか、トムヤムクンとか、{有名|ゆうめい}なタイ{料理|りょうり}はだいたいありますよ。あと、サイウアとか{地方|ちほう}の{料理|りょうり}も{食|た}べられます。', pt: 'Há pratos tailandeses famosos como som tam e tom yum goong. Também dá para comer pratos regionais, como sai ua.' },
        { speaker: 'A', ja: '{味|あじ}は？', pt: 'E o sabor?' },
        { speaker: 'B', ja: '{味|あじ}は{本格的|ほんかくてき}です。{辛|から}い{料理|りょうり}は、{日本人|にほんじん}に{合|あ}わせて、あまり{辛|から}くしていないんですが、{頼|たの}めば、{本場|ほんば}の{辛|から}さにしてくれます。', pt: 'O sabor é autêntico. Os pratos picantes são ajustados para japoneses e não ficam muito picantes, mas se pedir eles fazem com a picância autêntica.' },
        { speaker: 'A', ja: 'おすすめはありますか？', pt: 'Há alguma recomendação?' },
        { speaker: 'B', ja: 'おすすめは、タイの{焼酎|しょうちゅう}です。', pt: 'Minha recomendação é o shochu tailandês.' },
        { speaker: 'A', ja: '{雰囲気|ふんいき}はどんな{感|かん}じですか？', pt: 'Como é a atmosfera?' },
        { speaker: 'B', ja: 'お{母|かあ}さんはけっこうおしゃべりなので、{楽|たの}しい{雰囲気|ふんいき}です。', pt: 'A mãe conversa bastante, então a atmosfera é divertida.' },
        { speaker: 'A', ja: 'へー。{行|い}ってみたくなってきました。', pt: 'Nossa. Fiquei com vontade de ir.' },
      ],
    },
  ],
  '05-06': [
    {
      label: '① きりたんぽ (05-06)',
      setupPt: 'Em casa de um conhecido, explicam きりたんぽ, comida de Akita.',
      lines: [
        { speaker: 'A', ja: '{今日|きょう}は、お{鍋|なべ}にしましたよ。{冬|ふゆ}はやっぱり{鍋|なべ}ですね。', pt: 'Hoje preparei nabe. No inverno, nabe é mesmo o melhor.' },
        { speaker: 'B', ja: 'わあ！ おいしそうですね！ でも、その{白|しろ}いのは、{何|なん}ですか？ ちくわじゃないですよね？', pt: 'Nossa! Parece delicioso! Mas o que é essa coisa branca? Não é chikuwa, né?' },
        { speaker: 'C', ja: 'あ、これは、きりたんぽ。{秋田|あきた}の{料理|りょうり}です。', pt: 'Ah, isso é kiritanpo. É comida de Akita.' },
        { speaker: 'B', ja: 'え？ きりたん……？', pt: 'Hã? Kir tan...?' },
        { speaker: 'C', ja: 'きりたんぽ。この{間|あいだ}、{秋田|あきた}の{自治体|じちたい}に、ふるさと{納税|のうぜい}をして、そのお{礼|れい}にもらったんですよ。だから、{今日|きょう}はきりたんぽ{鍋|なべ}です。', pt: 'Kiritanpo. Outro dia fiz uma doação de furusato nozei a um município de Akita e recebi isso como agradecimento. Então hoje é nabe de kiritanpo.' },
        { speaker: 'B', ja: 'へー、きりたんぽ、ですか？ {材料|ざいりょう}は、{何|なん}ですか？', pt: 'Ah, kiritanpo? Quais são os ingredientes?' },
        { speaker: 'C', ja: 'お{米|こめ}から{作|つく}るんです。お{米|こめ}をつぶして、{棒|ぼう}のまわりにつけて{固|かた}めてから、{焼|や}いた{料理|りょうり}です。', pt: 'É feito de arroz. Amassa-se o arroz, prende-se em volta de um bastão, endurece-se e assa-se.' },
        { speaker: 'B', ja: 'じゃあ、きりたんぽは、お{餅|もち}ですか？', pt: 'Então kiritanpo é mochi?' },
        { speaker: 'C', ja: 'まあ、ちょっと{似|に}てるかもしれませんね。', pt: 'Bem, talvez seja um pouco parecido.' },
        { speaker: 'A', ja: 'じゃあ、{今|いま}、お{鍋|なべ}に{火|ひ}をつけますね。……これで、お{鍋|なべ}が{煮|に}えたら、きりたんぽを{入|い}れて{食|た}べるんです。でも、あまり{煮|に}すぎると、ボロボロになっちゃうから、{注意|ちゅうい}してくださいね。', pt: 'Então vou acender o fogo do nabe agora. Quando ferver, colocamos o kiritanpo e comemos. Mas, se cozinhar demais, ele se desfaz, então tome cuidado.' },
        { speaker: 'B', ja: 'はい。', pt: 'Certo.' },
      ],
    },
  ],
  '05-07': [
    {
      label: '② ドゥル天 (05-07)',
      setupPt: 'Em um izakaya de Okinawa, explicam ドゥル天.',
      lines: [
        { speaker: 'A', ja: 'じゃ、{乾杯|かんぱい}しましょう。かんぱーい！', pt: 'Então vamos brindar. Saúde!' },
        { speaker: '全員', ja: 'かんぱーい！', pt: 'Saúde!' },
        { speaker: 'B', ja: 'ここ、{沖縄料理|おきなわりょうり}のお{店|みせ}ですよね？ {私|わたし}、{沖縄|おきなわ}の{料理|りょうり}、はじめてなんです。', pt: 'Aqui é um restaurante de comida okinawana, certo? É a primeira vez que como comida de Okinawa.' },
        { speaker: 'A', ja: 'そうですか。めずらしいでしょう？', pt: 'É mesmo? É diferente, não é?' },
        { speaker: 'B', ja: 'ええ。はじめて{見|み}るものばかりです。これは{何|なん}ですか？ この、コロッケみたいなの。', pt: 'Sim. Só tem coisas que vejo pela primeira vez. O que é isto? Essa coisa parecida com croquete.' },
        { speaker: 'A', ja: 'これは、ドゥル{天|てん}です。ドゥルワカシーの{天|てん}ぷら。', pt: 'Isto é duruten. Tempurá de duruwakashi.' },
        { speaker: 'B', ja: 'え？ ドゥル……？', pt: 'Hã? Duru...?' },
        { speaker: 'A', ja: 'ドゥルワカシー。ドゥルワカシーは、{田芋|ターンム}っていう{沖縄|おきなわ}の{芋|いも}をつぶして……。', pt: 'Duruwakashi. Duruwakashi é feito amassando um tubérculo de Okinawa chamado taanmu...' },
        { speaker: 'B', ja: 'ターンム、ですか？', pt: 'Taanmu?' },
        { speaker: 'A', ja: 'そう。{田|た}んぼの{芋|いも}と{書|か}いて、{田芋|ターンム}。', pt: 'Isso. Escreve-se “batata do arrozal”: taanmu.' },
        { speaker: 'B', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'A', ja: 'これをつぶして、{豚肉|ぶたにく}とか、だしとかと{混|ま}ぜて{作|つく}るのが、ドゥルワカシー。で、これをさらに{丸|まる}めて、{油|あぶら}で{揚|あ}げたやつが、ドゥル{天|てん}なんですよ。{食|た}べてみてください。', pt: 'Amassar isso e misturar com carne de porco e caldo é o duruwakashi. A coisa feita ao moldar isso e fritar em óleo é o duruten. Experimente.' },
        { speaker: 'B', ja: 'はい、いただきます。あ、おいしいですね。{本当|ほんとう}にコロッケみたい。', pt: 'Sim, vou provar. Ah, é gostoso. Parece mesmo croquete.' },
        { speaker: 'A', ja: 'お{酒|さけ}にも{合|あ}うんですよ。', pt: 'Combina com bebida alcoólica também.' },
        { speaker: 'B', ja: 'じゃあ、もう1つ、{食|た}べてもいいですか？', pt: 'Então posso comer mais um?' },
        { speaker: 'A', ja: 'ははは、どうぞ。', pt: 'Ha ha ha, fique à vontade.' },
      ],
    },
  ],
  '05-08': [
    {
      label: '③ しもつかれ (05-08)',
      setupPt: 'Na cantina do dormitório, explicam しもつかれ, comida de Tochigi.',
      lines: [
        { speaker: 'A', ja: '{今日|きょう}も、どれもおいしそうですね。{阿久津|あくつ}さんは、{何|なに}にしますか？', pt: 'Hoje também tudo parece gostoso. Akutsu, o que você vai pedir?' },
        { speaker: 'B', ja: '{私|わたし}は、{今日|きょう}はアジフライにします。ビマルさんは？', pt: 'Hoje vou de aji fry. E você, Bimal?' },
        { speaker: 'A', ja: '{私|わたし}は、ハンバーグにします。あれ、このおかずは、{何|なん}ですか？ 「しもつかれ」って{書|か}いてありますが。', pt: 'Eu vou de hambúrguer. Ué, que acompanhamento é esse? Está escrito “shimotsukare”.' },
        { speaker: 'B', ja: 'しもつかれ、{知|し}らないですか？ ここ{栃木|とちぎ}では、よく{食|た}べる{料理|りょうり}ですよ。', pt: 'Você não conhece shimotsukare? Aqui em Tochigi é um prato muito comido.' },
        { speaker: 'A', ja: 'そうなんですか。はじめて{見|み}ました。{何|なん}でできていますか？', pt: 'É mesmo? É a primeira vez que vejo. De que é feito?' },
        { speaker: 'B', ja: 'しもつかれは、ニンジンやダイコンをおろしたものに、えっと、サケとか、あと、{大豆|だいず}や{油揚|あぶらあ}げとかを{混|ま}ぜて{作|つく}るんです。', pt: 'Shimotsukare é feito misturando cenoura e nabo ralados com, bem, salmão, soja e tofu frito.' },
        { speaker: 'A', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'B', ja: '{酒粕|さけかす}で{味|あじ}をつけるのが、ちょっと{特徴的|とくちょうてき}ですね。', pt: 'O característico é temperar com sakekasu.' },
        { speaker: 'A', ja: 'そうなんですか。{見|み}ただけでは、{何|なん}でできているか、ぜんぜんわかりませんね。', pt: 'Entendi. Só olhando, não dá para saber de que é feito.' },
        { speaker: 'B', ja: 'そうですね。{見|み}た{目|め}はあまりおいしそうじゃないかもしれませんね。しもつかれは、もともとはお{正月|しょうがつ}に{食|た}べたサケの{頭|あたま}や、{節分|せつぶん}の{大豆|だいず}とかの、{残|のこ}り{物|もの}を{混|ま}ぜて{作|つく}る{料理|りょうり}だったんですよ。だから、{冬|ふゆ}の{料理|りょうり}でした。', pt: 'Pois é. A aparência talvez não pareça muito apetitosa. Originalmente, shimotsukare era um prato feito misturando sobras, como a cabeça de salmão comida no Ano Novo e a soja de Setsubun. Por isso era um prato de inverno.' },
        { speaker: 'B', ja: 'でも{今|いま}は、{一年中|いちねんじゅう}スーパーで{売|う}ってますけどね。{栄養|えいよう}もあって{体|からだ}にいいんですよ。', pt: 'Mas hoje é vendido em supermercados o ano todo. Tem nutrição e faz bem para o corpo.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Entendi.' },
        { speaker: 'B', ja: '{食|た}べてみますか？', pt: 'Quer experimentar?' },
        { speaker: 'A', ja: 'うーん、じゃあ、{食|た}べてみます。ちょっと{勇気|ゆうき}がいりますね……。', pt: 'Hmm, então vou experimentar. Precisa de um pouco de coragem...' },
      ],
    },
  ],
  '05-09': [
    {
      label: '④ みそピーナッツ (05-09)',
      setupPt: 'Na casa de um amigo, uma pessoa apresenta みそピーナッツ, comida de Chiba.',
      lines: [
        { speaker: 'A', ja: 'はい、{私|わたし}は、{焼|や}き{鳥|とり}とコロッケ、{買|か}ってきた。', pt: 'Eu comprei yakitori e croquete.' },
        { speaker: 'B', ja: '{私|わたし}は、{枝豆|えだまめ}とか、{唐揚|からあ}げとか。どうぞ。', pt: 'Eu trouxe edamame e karaage. Sirvam-se.' },
        { speaker: 'C', ja: 'ぼくは、これを{持|も}って{来|き}ました。', pt: 'Eu trouxe isto.' },
        { speaker: 'D', ja: '{何|なん}ですか？ それ。', pt: 'O que é isso?' },
        { speaker: 'C', ja: 'みそピーナッツです。「みそピー」とか{呼|よ}ぶこともあります。', pt: 'É miso peanuts. Também chamam de “miso-pii”.' },
        { speaker: 'B', ja: 'あ、それ、{千葉県|ちばけん}で{有名|ゆうめい}なやつだよね？', pt: 'Ah, isso é aquele famoso em Chiba, né?' },
        { speaker: 'A', ja: '{知|し}らないなあ。ピーナッツのみそ{漬|づ}け？', pt: 'Não conheço. Amendoim em conserva de miso?' },
        { speaker: 'C', ja: 'ちょっと{違|ちが}いますね。この、ピーナッツのまわりのみそは、{砂糖|さとう}を{入|い}れて、{甘|あま}く{味|あじ}つけがしてあるんです。', pt: 'É um pouco diferente. O miso em volta do amendoim tem açúcar e é temperado de forma doce.' },
        { speaker: 'D', ja: 'え、{甘|あま}いんですか？', pt: 'Hã, é doce?' },
        { speaker: 'C', ja: 'はい。おいしいですよ。そのまま、おつまみとして{食|た}べてもいいし、ご{飯|はん}にのせて{食|た}べる{人|ひと}もいます。', pt: 'Sim. É gostoso. Pode comer assim mesmo como petisco, e algumas pessoas comem colocando em cima do arroz.' },
        { speaker: 'D', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'C', ja: 'このみそピーナッツは、{千葉|ちば}のソウルフードとも{呼|よ}ばれています。ぼくは{出身|しゅっしん}が{千葉|ちば}なんですけど、{子|こ}どものころから、よく{食|た}べていました。{給食|きゅうしょく}にも{出|で}てきましたよ。', pt: 'Este miso peanuts também é chamado de soul food de Chiba. Eu sou de Chiba, e como desde criança. Também aparecia na merenda escolar.' },
        { speaker: 'D', ja: 'そうなんですか。じゃあ、ちょっといただきます。あ、おいしい！', pt: 'É mesmo? Então vou experimentar. Ah, é gostoso!' },
        { speaker: 'C', ja: 'でしょう？', pt: 'Não é?' },
        { speaker: 'D', ja: 'なるほど。これは、{止|と}まらなくなりますね。{癖|くせ}になる{味|あじ}です！', pt: 'Entendi. Isso dá vontade de não parar. É um sabor viciante!' },
      ],
    },
  ],
  '05-10': [
    {
      label: '形に注目 - S（普通形）やつ (05-10)',
      lines: [
        { speaker: 'A', ja: 'これをさらに{丸|まる}めて、{油|あぶら}で{揚|あ}げたやつが、ドゥル{天|てん}なんですよ。', pt: 'A coisa feita ao moldar isso e fritar em óleo é o duruten.' },
        { speaker: 'B', ja: 'それ、{千葉県|ちばけん}で{有名|ゆうめい}なやつだよね？', pt: 'Isso é aquele famoso em Chiba, né?' },
      ],
    },
  ],
  '05-11': [
    {
      label: 'ストラテジー - 一部をくり返して聞き返す (05-11)',
      lines: [
        { speaker: 'A', ja: 'あ、これは、きりたんぽ。{秋田|あきた}の{料理|りょうり}です。', pt: 'Ah, isto é kiritanpo. É comida de Akita.' },
        { speaker: 'B', ja: 'え？ きりたん……？', pt: 'Hã? Kir tan...?' },
        { speaker: 'A', ja: 'きりたんぽ。', pt: 'Kiritanpo.' },
        { speaker: 'A', ja: 'これは、ドゥル{天|てん}です。ドゥルワカシーの{天|てん}ぷら。', pt: 'Isto é duruten. Tempurá de duruwakashi.' },
        { speaker: 'B', ja: 'え？ ドゥル……？', pt: 'Hã? Duru...?' },
        { speaker: 'A', ja: 'ドゥルワカシー。', pt: 'Duruwakashi.' },
      ],
    },
  ],
}

const L6_SCRIPTS: Record<string, ScriptItem[]> = {
  '06-01': [
    {
      label: '① ヤオイチ (06-01)',
      setupPt: 'Uma pessoa pergunta a 安倍 onde comprar verduras e legumes; 安倍 recomenda ヤオイチ.',
      lines: [
        { speaker: 'A', ja: '{安倍|あべ}さん、{最近|さいきん}、{野菜|やさい}も{肉|にく}も{高|たか}いですよね。{昨日|きのう}、{玉|たま}ねぎを{買|か}ったら{高|たか}くてびっくりして。', pt: 'Abe, ultimamente verduras e carne estão caras, né? Ontem comprei cebola e levei um susto de tão cara.' },
        { speaker: 'B', ja: '{高|たか}いですよね。でも、「ヤオイチ」だったら、そんなに{高|たか}くないですよ。', pt: 'Estão caras mesmo. Mas no Yaiochi não é tão caro assim.' },
        { speaker: 'A', ja: 'ヤオイチ？', pt: 'Yaiochi?' },
        { speaker: 'B', ja: '{駅前|えきまえ}にある{安|やす}いスーパーです。', pt: 'É um supermercado barato em frente à estação.' },
        { speaker: 'A', ja: 'あっ、そういえばありますね。', pt: 'Ah, agora que você falou, tem mesmo.' },
        { speaker: 'B', ja: '{野菜|やさい}と{果物|くだもの}の{種類|しゅるい}が{多|おお}くて、とにかく{安|やす}いですよ。', pt: 'Tem muitos tipos de verduras, legumes e frutas, e acima de tudo é barato.' },
        { speaker: 'A', ja: 'そうですか。{肉|にく}や{魚|さかな}はどうですか？', pt: 'É mesmo? E carne e peixe?' },
        { speaker: 'B', ja: 'んー、いつもは{普通|ふつう}だけど、{安|やす}くなる{日|ひ}がありますよ。{毎月|まいつき}29{日|にち}は「{肉|にく}の{日|ひ}」で{肉|にく}が{安|やす}くなるんです。お{肉|にく}を{買|か}うなら、この{日|ひ}がおすすめ。', pt: 'Hmm, normalmente é preço comum, mas há dias em que fica barato. Todo dia 29 é “dia da carne”, e a carne fica mais barata. Se for comprar carne, recomendo esse dia.' },
        { speaker: 'A', ja: 'じゃあ、{今度|こんど}の29{日|にち}に{行|い}ってみます。', pt: 'Então vou experimentar ir no próximo dia 29.' },
      ],
    },
  ],
  '06-02': [
    {
      label: '② 旬彩屋 (06-02)',
      setupPt: 'Uma pessoa diz que preparar comida todos os dias está trabalhoso; a outra recomenda 旬彩屋.',
      lines: [
        { speaker: 'A', ja: '{最近|さいきん}、{仕事|しごと}が{忙|いそが}しくて、{毎日|まいにち}ご{飯|はん}を{作|つく}るのが{面倒|めんどう}で……。', pt: 'Ultimamente o trabalho está corrido, e preparar comida todos os dias está dando trabalho...' },
        { speaker: 'B', ja: 'ご{飯|はん}を{作|つく}るの{大変|たいへん}ですよね。{私|わたし}はよくお{惣菜屋|そうざいや}さんで{買|か}ってます。「{旬彩屋|しゅんさいや}」、{知|し}ってますか？', pt: 'Preparar comida dá trabalho mesmo. Eu costumo comprar em loja de pratos prontos. Você conhece Shunsaiya?' },
        { speaker: 'A', ja: '{旬彩屋|しゅんさいや}……はじめて、{聞|き}きました。', pt: 'Shunsaiya... é a primeira vez que ouço falar.' },
        { speaker: 'B', ja: '{昔|むかし}からあるお{惣菜屋|そうざいや}さんです。{和|わ}・{洋|よう}・{中|ちゅう}いろいろ{種類|しゅるい}があるから{飽|あ}きないし、おすすめですよ。', pt: 'É uma loja de pratos prontos antiga. Tem comida japonesa, ocidental, chinesa e vários tipos, então não enjoa; recomendo.' },
        { speaker: 'A', ja: 'へー、いいですね。', pt: 'Ah, que bom.' },
        { speaker: 'B', ja: '{手作|てづく}りでおいしいし、よく{行|い}ってます。', pt: 'É feito à mão e gostoso, então vou bastante.' },
        { speaker: 'A', ja: 'お{店|みせ}、どこにありますか？', pt: 'Onde fica a loja?' },
        { speaker: 'B', ja: 'ちょっと{待|ま}ってくださいね。{今|いま}、スマホで{見|み}せます。……ほら、ここです。', pt: 'Espere um pouquinho. Vou mostrar no smartphone. ...Olha, é aqui.' },
        { speaker: 'A', ja: 'ありがとうございます。{今日|きょう}の{帰|かえ}りに{行|い}ってみます。', pt: 'Obrigado. Vou passar lá na volta hoje.' },
      ],
    },
  ],
  '06-03': [
    {
      label: '③ Ｃプライス (06-03)',
      setupPt: 'Uma pessoa pergunta sobre o supermercado comercial Ｃプライス.',
      lines: [
        { speaker: 'A', ja: '{小久保|こくぼ}さん、「Ｃプライス」って{知|し}ってますか？ {昨日|きのう}、テレビでやってたんですけど……。', pt: 'Kokubo, você conhece o C Price? Apareceu ontem na TV...' },
        { speaker: 'B', ja: 'あー、{業務用|ぎょうむよう}のスーパーですよね。よく{行|い}きますよ。', pt: 'Ah, é aquele supermercado de uso comercial, né? Eu vou bastante.' },
        { speaker: 'A', ja: 'へー、やっぱり{安|やす}いですか？', pt: 'Ah, é barato mesmo?' },
        { speaker: 'B', ja: 'そうですね。{一|ひと}つ{一|ひと}つの{量|りょう}が{多|おお}いから、その{分|ぶん}{安|やす}くて、いいですよ。', pt: 'Sim. Como a quantidade de cada item é grande, fica barato nessa proporção, então é bom.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'É mesmo?' },
        { speaker: 'B', ja: 'あと、{冷凍食品|れいとうしょくひん}がたくさんあるんです。{餃子|ぎょうざ}とかうどんとか、まとめて{買|か}っておくと{便利|べんり}ですよ。', pt: 'Além disso, tem muitos congelados. É prático comprar gyoza, udon e coisas assim em quantidade e deixar guardado.' },
        { speaker: 'A', ja: 'いいですね。', pt: 'Que bom.' },
        { speaker: 'B', ja: 'ほかにも、レトルト{食品|しょくひん}とか{飲|の}み{物|もの}もたくさんあるし、おすすめですよ。', pt: 'Também tem muitos alimentos prontos em embalagem, bebidas e outras coisas. Recomendo.' },
        { speaker: 'A', ja: 'じゃあ、{今度|こんど}、{仕事|しごと}が{休|やす}みの{日|ひ}に{行|い}ってみようかな。', pt: 'Então acho que vou experimentar ir num dia de folga do trabalho.' },
      ],
    },
  ],
  '06-04': [
    {
      label: '④ こばとの里 (06-04)',
      setupPt: '雨宮 recomenda o 道の駅 こばとの里 para comprar verduras e legumes.',
      lines: [
        { speaker: 'A', ja: '{雨宮|あめみや}さん、{野菜|やさい}、いつもどこで{買|か}ってますか？', pt: 'Amemiya, onde você costuma comprar verduras e legumes?' },
        { speaker: 'B', ja: '{野菜|やさい}だと「こばとの{里|さと}」が{多|おお}いですね。', pt: 'Para verduras e legumes, costumo ir ao Kobato no Sato.' },
        { speaker: 'A', ja: 'こばとの{里|さと}って、{道|みち}の{駅|えき}でしたっけ？', pt: 'Kobato no Sato era um michi no eki, né?' },
        { speaker: 'B', ja: 'そうそう。{毎週|まいしゅう}{日曜日|にちようび}に{朝市|あさいち}をやってて、いろいろな{野菜|やさい}が{買|か}えるんですよ。', pt: 'Isso. Todo domingo tem feira da manhã, e dá para comprar vários tipos de verduras e legumes.' },
        { speaker: 'A', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'B', ja: '{農家|のうか}の{人|ひと}が{直接|ちょくせつ}{売|う}ってるから{安|やす}いし、{新鮮|しんせん}でおいしいですよ。', pt: 'Como os agricultores vendem diretamente, é barato, fresco e gostoso.' },
        { speaker: 'B', ja: 'どうやって{食|た}べればいいかわからないときは、{農家|のうか}の{人|ひと}に{聞|き}くとおいしい{食|た}べ{方|かた}を{教|おし}えてくれるんです。', pt: 'Quando você não sabe como comer algo, se perguntar aos agricultores, eles ensinam uma forma gostosa de comer.' },
        { speaker: 'A', ja: 'それはいいですね。', pt: 'Isso é bom.' },
        { speaker: 'B', ja: 'でも、{朝市|あさいち}だから{午前中|ごぜんちゅう}に{行|い}かないと{野菜|やさい}が{売|う}り{切|き}れちゃうんです。', pt: 'Mas como é feira da manhã, se você não for durante a manhã, os vegetais acabam.' },
        { speaker: 'A', ja: 'じゃあ、{行|い}くときは{早起|はやお}きしなきゃいけませんね。', pt: 'Então, quando for, preciso acordar cedo.' },
      ],
    },
  ],
  '06-05': [
    {
      label: '形に注目 - V-ておく (06-05)',
      lines: [
        { speaker: 'B', ja: '{餃子|ぎょうざ}とかうどんとか、まとめて{買|か}っておくと{便利|べんり}ですよ。', pt: 'É prático comprar gyoza, udon e coisas assim em quantidade e deixar guardado.' },
      ],
    },
  ],
  '06-06': [
    {
      label: 'ことばの準備 - 毎日の食事 (06-06)',
      setupPt: 'Vocabulário para falar de como a pessoa resolve as refeições do dia a dia.',
      lines: [
        { speaker: '語彙', ja: '{自炊|じすい}をする／{自分|じぶん}で{作|つく}る。', pt: 'Cozinhar para si / preparar por conta própria.' },
        { speaker: '語彙', ja: '{家族|かぞく}が{作|つく}ってくれる。', pt: 'A família prepara para mim.' },
        { speaker: '語彙', ja: '{家族|かぞく}／{友|とも}だちと{交代|こうたい}で{作|つく}る。', pt: 'Preparar revezando com a família/amigos.' },
        { speaker: '語彙', ja: '{外食|がいしょく}をする。', pt: 'Comer fora.' },
        { speaker: '語彙', ja: '{社食|しゃしょく}で{食|た}べる。', pt: 'Comer no refeitório da empresa.' },
        { speaker: '語彙', ja: '{寮|りょう}の{食堂|しょくどう}で{食|た}べる。', pt: 'Comer no refeitório do dormitório.' },
        { speaker: '語彙', ja: 'テイクアウトをする。', pt: 'Pegar comida para levar.' },
        { speaker: '語彙', ja: 'デリバリー／{出前|でまえ}を{頼|たの}む。', pt: 'Pedir delivery/entrega.' },
        { speaker: '語彙', ja: 'お{惣菜|そうざい}／お{弁当|べんとう}を{買|か}う。', pt: 'Comprar pratos prontos/obentô.' },
      ],
    },
  ],
  '06-07': [
    {
      label: 'ことばの確認 - 毎日の食事 (06-07)',
      setupPt: 'Ouça e escolha a ilustração correspondente. A ordem segue o gabarito da atividade.',
      lines: [
        { speaker: '語彙', ja: '{家族|かぞく}が{作|つく}ってくれる。', pt: 'A família prepara para mim.' },
        { speaker: '語彙', ja: '{寮|りょう}の{食堂|しょくどう}で{食|た}べる。', pt: 'Comer no refeitório do dormitório.' },
        { speaker: '語彙', ja: '{家族|かぞく}／{友|とも}だちと{交代|こうたい}で{作|つく}る。', pt: 'Preparar revezando com a família/amigos.' },
        { speaker: '語彙', ja: 'お{惣菜|そうざい}／お{弁当|べんとう}を{買|か}う。', pt: 'Comprar pratos prontos/obentô.' },
        { speaker: '語彙', ja: '{外食|がいしょく}をする。', pt: 'Comer fora.' },
        { speaker: '語彙', ja: '{社食|しゃしょく}で{食|た}べる。', pt: 'Comer no refeitório da empresa.' },
        { speaker: '語彙', ja: 'デリバリー／{出前|でまえ}を{頼|たの}む。', pt: 'Pedir delivery/entrega.' },
        { speaker: '語彙', ja: '{自炊|じすい}をする／{自分|じぶん}で{作|つく}る。', pt: 'Cozinhar para si / preparar por conta própria.' },
      ],
    },
  ],
  '06-08': [
    {
      label: '① エドガーさん - 外食とデリバリー (06-08)',
      setupPt: 'エドガー fala sobre jantar fora, pedir delivery e se preocupar com dinheiro e nutrição.',
      lines: [
        { speaker: 'A', ja: 'エドガーさん、{今日|きょう}、エンジさんといっしょにご{飯|はん}を{食|た}べに{行|い}くんだけど、いっしょにどう？', pt: 'Edgar, hoje vou comer com Enji. Quer ir junto?' },
        { speaker: 'B', ja: 'あ、いいですね。{行|い}きます。', pt: 'Ah, boa. Eu vou.' },
        { speaker: 'A', ja: 'エドガーさんは、いつも{夕飯|ゆうはん}はどうしてるの？', pt: 'Edgar, o que você costuma fazer no jantar?' },
        { speaker: 'B', ja: '{夜|よる}は{外食|がいしょく}が{多|おお}いですね。あと、{仕事|しごと}で{遅|おそ}くなるときは、デリバリーを{頼|たの}んで{家|いえ}で{食|た}べたりします。', pt: 'À noite, como fora com frequência. E quando fico até tarde por causa do trabalho, peço delivery e como em casa.' },
        { speaker: 'A', ja: 'へー、そうなの。', pt: 'Ah, é?' },
        { speaker: 'B', ja: 'はい。{自分|じぶん}で{作|つく}りたいんですけど、{仕事|しごと}で{疲|つか}れちゃって、{料理|りょうり}できないんです。', pt: 'Sim. Eu queria cozinhar, mas fico cansado do trabalho e não consigo cozinhar.' },
        { speaker: 'A', ja: 'どんなものを{食|た}べてるの？', pt: 'Que tipo de coisa você come?' },
        { speaker: 'B', ja: 'うーん、よく{食|た}べるのは、{定食|ていしょく}とかラーメンとかですね。デリバリーのときは、ピザとか{丼物|どんぶりもの}とかが{多|おお}いです。', pt: 'Hmm, o que como bastante é refeição pronta tipo teishoku e ramen. Quando é delivery, costuma ser pizza ou donburi.' },
        { speaker: 'A', ja: 'ふーん。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'でも、{外食|がいしょく}って、やっぱりお{金|かね}がかかるじゃないですか。それに、{栄養|えいよう}が{偏|かたよ}るから、ちょっと{気|き}になってます。', pt: 'Mas comer fora custa dinheiro, né? Além disso, a nutrição fica desequilibrada, então isso me preocupa um pouco.' },
        { speaker: 'A', ja: 'そうなんだ。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'だから、できるだけ{栄養|えいよう}のバランスも{考|かんが}えるようにしてます。{朝|あさ}は{野菜|やさい}ジュースを{飲|の}んでますよ。', pt: 'Então tento pensar no equilíbrio nutricional o máximo possível. De manhã, tomo suco de vegetais.' },
        { speaker: 'A', ja: 'うん、{健康|けんこう}には{気|き}をつけなくちゃね。', pt: 'Sim, temos que cuidar da saúde.' },
      ],
    },
  ],
  '06-09': [
    {
      label: '② リサさん - 寮の食堂 (06-09)',
      setupPt: 'リサ mora no dormitório da empresa e fala sobre comer no refeitório.',
      lines: [
        { speaker: 'A', ja: 'リサさんって、{会社|かいしゃ}の{寮|りょう}に{住|す}んでるんだよね。{毎日|まいにち}のご{飯|はん}は、{寮|りょう}で{食|た}べてるの？', pt: 'Risa, você mora no dormitório da empresa, né? Você come no dormitório todos os dias?' },
        { speaker: 'B', ja: 'はい。{朝|あさ}と{夜|よる}は、ほとんど{毎日|まいにち}、{寮|りょう}の{食堂|しょくどう}で{食|た}べてます。', pt: 'Sim. De manhã e à noite, como quase todos os dias no refeitório do dormitório.' },
        { speaker: 'A', ja: 'そうなんだ。どんなご{飯|はん}が{出|で}るの？', pt: 'Ah. Que tipo de refeição servem?' },
        { speaker: 'B', ja: '{夜|よる}は{肉|にく}か{魚|さかな}が{選|えら}べるんです。{肉|にく}は、{照|て}り{焼|や}きチキンとか、ハンバーグとか。{魚|さかな}は、{焼|や}き{魚|ざかな}とかフライとか。それと、{野菜|やさい}の{料理|りょうり}がついてます。', pt: 'À noite dá para escolher carne ou peixe. Carne pode ser frango teriyaki, hambúrguer e coisas assim. Peixe pode ser grelhado ou frito. E vem um prato de vegetais.' },
        { speaker: 'A', ja: 'へー、{健康的|けんこうてき}だね。うらやましい。', pt: 'Nossa, é saudável. Que inveja.' },
        { speaker: 'B', ja: 'でも、{私|わたし}、{魚|さかな}がちょっと{苦手|にがて}なので、{毎日|まいにち}、{肉|にく}ばかり{食|た}べてますけど。', pt: 'Mas eu não gosto muito de peixe, então acabo comendo carne quase todos os dias.' },
        { speaker: 'A', ja: 'ははは。', pt: 'Ha ha ha.' },
        { speaker: 'B', ja: 'あと、ときどきファストフードも{食|た}べたくなるんですよね。そういうときは、ハンバーガーを{買|か}って{食|た}べたりしてます。', pt: 'Além disso, às vezes também dá vontade de comer fast food. Nesses momentos, compro hambúrguer e como.' },
        { speaker: 'A', ja: 'そういうときもあるよね。', pt: 'Acontece mesmo.' },
        { speaker: 'B', ja: 'はい。でも、{寮|りょう}の{食事|しょくじ}のおかげで、{規則正|きそくただ}しい{食生活|しょくせいかつ}ができて、{助|たす}かります。', pt: 'Sim. Mas, graças às refeições do dormitório, consigo manter uma rotina alimentar regular, e isso ajuda.' },
        { speaker: 'A', ja: 'ああ、いいねー。', pt: 'Ah, que bom.' },
        { speaker: 'B', ja: 'おいしくて、ついたくさん{食|た}べちゃうから、{食|た}べすぎには{注意|ちゅうい}しなくちゃと{思|おも}ってます。', pt: 'Como é gostoso, acabo comendo bastante sem pensar, então acho que preciso tomar cuidado para não comer demais.' },
        { speaker: 'A', ja: 'そっかー。', pt: 'Entendi.' },
      ],
    },
  ],
  '06-10': [
    {
      label: '③ レーさん - 自炊 (06-10)',
      setupPt: 'レー fala sobre cozinhar todos os dias, pesquisar receitas e evitar desperdício.',
      lines: [
        { speaker: 'A', ja: 'レーさんって、{一人暮|ひとりぐ}らしですよね？ ご{飯|はん}は、{自分|じぶん}で{作|つく}ってるんですか？', pt: 'Rei, você mora sozinha, né? Você prepara suas refeições?' },
        { speaker: 'B', ja: 'ええ。{毎日|まいにち}、{自炊|じすい}してます。{前|まえ}は{自分|じぶん}の{国|くに}の{料理|りょうり}を{作|つく}ることが{多|おお}かったんですけど、{最近|さいきん}は{日本食|にほんしょく}も{作|つく}ってるんですよ。', pt: 'Sim. Cozinho para mim todos os dias. Antes eu fazia mais comidas do meu país, mas recentemente também faço comida japonesa.' },
        { speaker: 'A', ja: 'へー、そうなんですか。', pt: 'Nossa, é mesmo?' },
        { speaker: 'B', ja: 'ええ、{私|わたし}、{料理|りょうり}が{好|す}きなんです。ネットでいろいろレシピを{調|しら}べられるじゃないですか。それを{見|み}ながら{作|つく}ってます。{肉|にく}じゃがとか{炊|た}き{込|こ}みご{飯|はん}とか。', pt: 'Sim, eu gosto de cozinhar. Dá para pesquisar várias receitas na internet, né? Vou fazendo olhando isso. Nikujaga, takikomi gohan e coisas assim.' },
        { speaker: 'A', ja: '{肉|にく}じゃがですかー。', pt: 'Nikujaga, hein.' },
        { speaker: 'B', ja: 'あと、{日本食|にほんしょく}だけじゃなくて、ほかの{国|くに}の{料理|りょうり}にもいろいろ{挑戦|ちょうせん}してみたいと{思|おも}ってます。', pt: 'Além de comida japonesa, também quero experimentar preparar várias comidas de outros países.' },
        { speaker: 'A', ja: 'すごいですねー。', pt: 'Que incrível.' },
        { speaker: 'B', ja: 'いやいやいや。{自炊|じすい}って、{自分|じぶん}の{好|す}きなものを{食|た}べられるのがいいですよね。', pt: 'Que nada. O bom de cozinhar para si é poder comer o que gosta.' },
        { speaker: 'A', ja: '{毎日|まいにち}おいしいご{飯|はん}が{食|た}べられて{幸|しあわ}せですね。', pt: 'Você pode comer comida gostosa todos os dias, que felicidade.' },
        { speaker: 'B', ja: 'ただ、1{人|ひとり}だと、{作|つく}る{量|りょう}が{多|おお}くなっちゃうんですよね。{作|つく}りすぎて、むだにしないように{気|き}をつけてます。', pt: 'Mas, quando é para uma pessoa só, a quantidade que se faz acaba ficando grande. Tomo cuidado para não fazer demais e desperdiçar.' },
        { speaker: 'A', ja: 'なるほど。', pt: 'Entendi.' },
      ],
    },
  ],
  '06-11': [
    {
      label: '形に注目 - Sじゃないですか (06-11)',
      lines: [
        { speaker: 'B', ja: '{外食|がいしょく}って、やっぱりお{金|かね}がかかるじゃないですか。', pt: 'Comer fora custa dinheiro, né?' },
        { speaker: 'B', ja: 'ネットでいろいろレシピを{調|しら}べられるじゃないですか。', pt: 'Dá para pesquisar várias receitas na internet, né?' },
      ],
    },
  ],
  '06-12': [
    {
      label: '話すモデル - 毎日の食事について (06-12)',
      setupPt: 'Modelo para falar com algum detalhe sobre as refeições do dia a dia.',
      lines: [
        { speaker: 'A', ja: '{毎日|まいにち}の{食事|しょくじ}は、どうしてるんですか？', pt: 'Como você faz com as refeições do dia a dia?' },
        { speaker: 'B', ja: '{夜|よる}は{外食|がいしょく}が{多|おお}いですね。あと、{仕事|しごと}で{遅|おそ}くなるときは、デリバリーを{頼|たの}んで{家|いえ}で{食|た}べたりします。', pt: 'À noite, como fora com frequência. E quando fico até tarde por causa do trabalho, peço delivery e como em casa.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Entendi.' },
        { speaker: 'B', ja: '{自分|じぶん}で{作|つく}りたいんですけど、{仕事|しごと}で{疲|つか}れちゃって、{料理|りょうり}できないんです。', pt: 'Eu queria cozinhar, mas fico cansado do trabalho e não consigo cozinhar.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'É mesmo?' },
        { speaker: 'B', ja: 'よく{食|た}べるのは、{定食|ていしょく}とかラーメンとかですね。デリバリーのときは、ピザとか{丼物|どんぶりもの}とかが{多|おお}いです。', pt: 'O que como bastante é teishoku ou ramen. Quando é delivery, costuma ser pizza ou donburi.' },
        { speaker: 'A', ja: 'ふーん。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'でも、{外食|がいしょく}って、やっぱりお{金|かね}がかかるじゃないですか。それに、{栄養|えいよう}が{偏|かたよ}るから、ちょっと{気|き}になってます。', pt: 'Mas comer fora custa dinheiro, né? Além disso, a nutrição fica desequilibrada, então isso me preocupa um pouco.' },
        { speaker: 'A', ja: 'そうですね。', pt: 'É verdade.' },
        { speaker: 'B', ja: 'だから、{栄養|えいよう}のバランスも{考|かんが}えるようにしてます。{朝|あさ}は{野菜|やさい}ジュースを{飲|の}んでます。', pt: 'Então tento pensar no equilíbrio nutricional. De manhã, tomo suco de vegetais.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Entendi.' },
      ],
    },
  ],
}

const L7_SCRIPTS: Record<string, ScriptItem[]> = {
  '07-01': [
    {
      label: '① ミーさん - 近所の人と知り合いになりたい (07-01)',
      setupPt: 'ミー pergunta como conhecer pessoas da vizinhança; A recomenda participar de atividades do bairro.',
      lines: [
        { speaker: 'A', ja: 'ミーさん、{日本|にほん}の{生活|せいかつ}はどうですか？', pt: 'Mii, como está a vida no Japão?' },
        { speaker: 'B', ja: '{日本|にほん}は、{住|す}みやすいです。ただ、{近所|きんじょ}の{人|ひと}と{話|はな}す{機会|きかい}がなくて……。', pt: 'O Japão é fácil de viver. Mas não tenho oportunidade de conversar com as pessoas da vizinhança...' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Entendi.' },
        { speaker: 'B', ja: '{近所|きんじょ}の{人|ひと}と{知|し}り{合|あ}いになりたいんですが、どうすればいいでしょうか。', pt: 'Eu queria conhecer as pessoas da vizinhança. O que seria bom fazer?' },
        { speaker: 'A', ja: 'そうですね。{町内|ちょうない}の{活動|かつどう}に{参加|さんか}してみるのはどうですか？', pt: 'Vejamos. Que tal experimentar participar de atividades do bairro?' },
        { speaker: 'B', ja: '{町内|ちょうない}の{活動|かつどう}？', pt: 'Atividades do bairro?' },
        { speaker: 'A', ja: 'ええ、{例|たと}えば、{町内|ちょうない}の{人|ひと}とボランティアで{掃除|そうじ}をしたり、{公園|こうえん}にお{花|はな}を{植|う}えたりするんです。', pt: 'Sim. Por exemplo, fazer limpeza voluntária com as pessoas do bairro ou plantar flores no parque.' },
        { speaker: 'B', ja: 'へー、どうやって{参加|さんか}するんですか？', pt: 'Ah, e como participa?' },
        { speaker: 'A', ja: '{町|まち}の{掲示板|けいじばん}に「ボランティア{募集|ぼしゅう}」のポスターが{貼|は}ってあると{思|おも}いますよ。それを{見|み}て、{連絡|れんらく}してみるといいですよ。', pt: 'Acho que há pôsteres de “recrutamento de voluntários” no quadro de avisos da cidade/bairro. É bom ver isso e tentar entrar em contato.' },
        { speaker: 'B', ja: 'そうなんですね。', pt: 'Entendi.' },
        { speaker: 'A', ja: 'おしゃべり{好|ず}きな{人|ひと}もいるから、{知|し}り{合|あ}いもできるんじゃないかな。', pt: 'Como também tem gente que gosta de conversar, acho que você pode fazer conhecidos.' },
        { speaker: 'B', ja: 'いいですね。{掲示板|けいじばん}を{見|み}てみます。', pt: 'Boa ideia. Vou olhar o quadro de avisos.' },
      ],
    },
  ],
  '07-02': [
    {
      label: '② 国際交流イベント (07-02)',
      setupPt: 'B quer amigos de vários países; A recomenda eventos de intercâmbio internacional da cidade.',
      lines: [
        { speaker: 'A', ja: '{最近|さいきん}、どう？ {日本|にほん}の{生活|せいかつ}には{慣|な}れましたか？', pt: 'Como você tem passado? Já se acostumou com a vida no Japão?' },
        { speaker: 'B', ja: 'うーん、{生活|せいかつ}には{慣|な}れたんですが、なかなか{友|とも}だちができないんです。', pt: 'Hmm, acostumei com a vida aqui, mas não consigo fazer amigos facilmente.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é?' },
        { speaker: 'B', ja: 'いろんな{国|くに}の{友|とも}だちがほしいんですけど……。', pt: 'Eu queria amigos de vários países...' },
        { speaker: 'A', ja: 'んー、じゃあ、{市|し}の{国際交流|こくさいこうりゅう}イベントに{参加|さんか}するのはどうですか？', pt: 'Hmm, então que tal participar de eventos de intercâmbio internacional da cidade?' },
        { speaker: 'B', ja: '{行|い}ったことないです。どんなイベントがあるんですか？', pt: 'Nunca fui. Que tipo de eventos existem?' },
        { speaker: 'A', ja: '{書道|しょどう}とか{折|お}り{紙|がみ}とか{日本文化体験|にほんぶんかたいけん}のイベントもあるし、みんなで{町|まち}を{散策|さんさく}するイベントもあるし、いろいろありますよ。', pt: 'Há eventos de experiência de cultura japonesa, como caligrafia e origami, e também eventos para passear pela cidade em grupo; há várias coisas.' },
        { speaker: 'B', ja: 'へー、おもしろそう。', pt: 'Ah, parece interessante.' },
        { speaker: 'A', ja: 'いろんな{国|くに}の{人|ひと}が{参加|さんか}してますよ。{興味|きょうみ}があるイベントに{参加|さんか}すれば、{知|し}り{合|あ}いもできると{思|おも}います。', pt: 'Pessoas de vários países participam. Se você participar de eventos que te interessam, acho que também conseguirá conhecidos.' },
        { speaker: 'B', ja: '{行|い}ってみようかな。', pt: 'Acho que vou experimentar ir.' },
        { speaker: 'A', ja: 'ウェブサイトに{毎月|まいつき}のスケジュールが{載|の}ってるから、そこから{申|もう}し{込|こ}めばいいですよ。', pt: 'O cronograma mensal aparece no site, então é só se inscrever por lá.' },
        { speaker: 'B', ja: '{見|み}てみます。ありがとうございます。', pt: 'Vou dar uma olhada. Obrigado.' },
      ],
    },
  ],
  '07-03': [
    {
      label: '③ 子育て中の知り合い (07-03)',
      setupPt: 'B quer conhecer pessoas que também estão criando filhos; A recomenda 児童館 e 子育て支援センター.',
      lines: [
        { speaker: 'A', ja: 'お{子|こ}さん、{何歳|なんさい}になりましたか？', pt: 'Quantos anos seu filho fez?' },
        { speaker: 'B', ja: 'もうすぐ3{歳|さい}です。', pt: 'Vai fazer 3 anos em breve.' },
        { speaker: 'A', ja: 'じゃあ、そろそろ{幼稚園|ようちえん}ですね。', pt: 'Então já está quase na idade do jardim de infância.' },
        { speaker: 'B', ja: 'はい、でも……。', pt: 'Sim, mas...' },
        { speaker: 'A', ja: 'どうしたんですか？', pt: 'O que houve?' },
        { speaker: 'B', ja: 'いつも{子|こ}どもと2{人|ふたり}なので、もっと{同|おな}じ{子育|こそだ}て{中|ちゅう}の{人|ひと}と{話|はな}したりしたいなって{思|おも}ってて。', pt: 'Como sempre fico só eu e a criança, queria conversar mais com pessoas que também estão criando filhos.' },
        { speaker: 'A', ja: 'なるほどね。', pt: 'Entendi.' },
        { speaker: 'B', ja: '{子育|こそだ}て{中|ちゅう}の{知|し}り{合|あ}いを{作|つく}るには、どうしたらいいでしょうか。', pt: 'O que devo fazer para criar conhecidos que também estão criando filhos?' },
        { speaker: 'A', ja: 'そうですね。{児童館|じどうかん}とか{子育|こそだ}て{支援|しえん}センターに{行|い}ってみたらどうですか？ {子育|こそだ}て{中|ちゅう}の{人|ひと}がたくさんいますよ。', pt: 'Vejamos. Que tal experimentar ir a um jidokan ou a um centro de apoio à criação de filhos? Há muitas pessoas criando filhos lá.' },
        { speaker: 'B', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'A', ja: 'おもちゃで{遊|あそ}ぶこともできるし、お{誕生日会|たんじょうびかい}とか、いろんなイベントに{参加|さんか}することもできますよ。', pt: 'Dá para brincar com brinquedos e também participar de vários eventos, como festas de aniversário.' },
        { speaker: 'B', ja: '{楽|たの}しそうですね。', pt: 'Parece divertido.' },
        { speaker: 'A', ja: '{通|かよ}っているうちに、{少|すこ}しずつ{話|はなし}ができる{人|ひと}が{増|ふ}えると{思|おも}います。', pt: 'Enquanto você continuar frequentando, acho que aos poucos vão aumentar as pessoas com quem consegue conversar.' },
        { speaker: 'B', ja: 'ほかには、どんなイベントがあるんですか？', pt: 'Que outros eventos existem?' },
        { speaker: 'A', ja: 'うーん、{月|つき}によっても{違|ちが}うから、{直接|ちょくせつ}{行|い}ってみたらどうでしょう。チラシが{置|お}いてあると{思|おも}いますよ。', pt: 'Hmm, também muda conforme o mês, então que tal ir diretamente? Acho que há panfletos lá.' },
        { speaker: 'B', ja: 'そうですか。じゃあ、{今度|こんど}、{子|こ}どもといっしょに{行|い}ってみます。', pt: 'Entendi. Então, da próxima vez, vou experimentar ir com meu filho.' },
      ],
    },
  ],
  '07-04': [
    {
      label: '④ ケビンさん - カープ仲間 (07-04)',
      setupPt: 'ケビン quer pessoas com quem conversar sobre o Carp; A recomenda um okonomiyaki onde fãs se reúnem.',
      lines: [
        { speaker: 'A', ja: 'ケビンさん、カープのファンだったんですか？ その{帽子|ぼうし}……。', pt: 'Kevin, você era fã do Carp? Esse boné...' },
        { speaker: 'B', ja: 'そうなんですよ！ {日本|にほん}に{来|き}てから{野球|やきゅう}が{好|す}きになりました。{今|いま}では、すっかりカープのファンです。', pt: 'Pois é! Depois que vim ao Japão, passei a gostar de beisebol. Hoje sou totalmente fã do Carp.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: 'でも、カープの{話|はなし}ができる{仲間|なかま}がほしいんですけど、なかなかできないんです。', pt: 'Mas eu queria colegas com quem conversar sobre o Carp, só que não consigo fazer isso facilmente.' },
        { speaker: 'A', ja: 'それなら、カープファンが{集|あつ}まるお{店|みせ}に{行|い}ってみたらどうかな。{例|たと}えば、{北通|きたどお}りにある「{鯉屋|こいや}」っていうお{好|この}み{焼|や}き{屋|や}さんは{有名|ゆうめい}ですよ。', pt: 'Nesse caso, que tal experimentar ir a um lugar onde fãs do Carp se reúnem? Por exemplo, um okonomiyaki chamado Koiya, na rua Kita, é famoso.' },
        { speaker: 'B', ja: 'お{好|この}み{焼|や}き{屋|や}さんですか？', pt: 'Um okonomiyaki?' },
        { speaker: 'A', ja: 'そう。{試合|しあい}があるときは、みんなでテレビを{見|み}ながら{応援|おうえん}するんです。{盛|も}り{上|あ}がってますよ。', pt: 'Isso. Quando tem jogo, todos torcem enquanto assistem à TV. Fica bem animado.' },
        { speaker: 'B', ja: '{楽|たの}しそうですね。1{人|ひとり}で{行|い}ってもだいじょうぶですか？', pt: 'Parece divertido. Tudo bem ir sozinho?' },
        { speaker: 'A', ja: 'だいじょうぶですよ。{赤|あか}いユニフォームを{着|き}て{行|い}けば、すぐに{周|まわ}りの{人|ひと}と{仲良|なかよ}くなると{思|おも}います。', pt: 'Tudo bem. Se for vestindo o uniforme vermelho, acho que logo vai se enturmar com as pessoas ao redor.' },
        { speaker: 'B', ja: 'そうなんですね。{試合|しあい}をやってるときに、{行|い}ってみます。', pt: 'Entendi. Vou experimentar ir quando estiver passando jogo.' },
        { speaker: 'A', ja: 'カープ{仲間|なかま}ができるといいですね。', pt: 'Tomara que você consiga colegas do Carp.' },
      ],
    },
  ],
  '07-05': [
    {
      label: '形に注目 - V-ば (07-05)',
      lines: [
        { speaker: 'A', ja: '{興味|きょうみ}があるイベントに{参加|さんか}すれば、{知|し}り{合|あ}いもできると{思|おも}います。', pt: 'Se você participar de eventos que te interessam, acho que também conseguirá conhecidos.' },
        { speaker: 'A', ja: '{赤|あか}いユニフォームを{着|き}て{行|い}けば、すぐに{周|まわ}りの{人|ひと}と{仲良|なかよ}くなると{思|おも}います。', pt: 'Se for vestindo o uniforme vermelho, acho que logo vai se enturmar com as pessoas ao redor.' },
      ],
    },
  ],
  '07-06': [
    {
      label: '形に注目 - V-ているうちに (07-06)',
      lines: [
        { speaker: 'A', ja: '{通|かよ}っているうちに、{少|すこ}しずつ{話|はなし}ができる{人|ひと}が{増|ふ}えると{思|おも}います。', pt: 'Enquanto você continuar frequentando, acho que aos poucos vão aumentar as pessoas com quem consegue conversar.' },
      ],
    },
  ],
  '07-07': [
    {
      label: '会話 - 世界の料理サークルで自己紹介 (07-07)',
      setupPt: 'カイラ entra no 世界の料理サークル e faz uma autoapresentação.',
      lines: [
        { speaker: 'スタッフ', ja: 'みなさん、こんにちは。はじめに、{今日|きょう}から{新|あたら}しくメンバーになった{人|ひと}を{紹介|しょうかい}します。カイラさんです。', pt: 'Olá, pessoal. Primeiro, vou apresentar a pessoa que se tornou membro a partir de hoje. É a Kyla.' },
        { speaker: 'カイラ', ja: 'こんにちは。', pt: 'Olá.' },
        { speaker: 'スタッフ', ja: 'じゃあ、カイラさん、{簡単|かんたん}に{自己紹介|じこしょうかい}をお{願|ねが}いします。', pt: 'Então, Kyla, por favor faça uma breve autoapresentação.' },
        { speaker: 'カイラ', ja: 'あ、はい。ええと、みなさん、はじめまして。カイラです。フィリピンから{来|き}ました。えー、{日本|にほん}に{来|き}て、3{年|ねん}になります。', pt: 'Ah, sim. Bem, prazer em conhecer vocês. Sou a Kyla. Vim das Filipinas. Faz três anos que vim ao Japão.' },
        { speaker: 'カイラ', ja: '{今|いま}は{東区|ひがしく}に{住|す}んでいて、{英語会話|えいごかいわ}の……あ、{英会話|えいかいわ}の{学校|がっこう}で、{英語|えいご}を{教|おし}えています。', pt: 'Agora moro no distrito Higashi e ensino inglês em uma escola de... ah, escola de conversação em inglês.' },
        { speaker: 'カイラ', ja: 'えー、{料理|りょうり}が{好|す}きで、いろいろの……えっと、いろいろな{料理|りょうり}をよく{作|つく}ります。', pt: 'Bem, gosto de cozinhar e faço bastante várias... hum, vários tipos de comida.' },
        { speaker: 'カイラ', ja: '{日本料理|にほんりょうり}も、ネットのレシピを{見|み}ながら、ときどき{作|つく}ります。', pt: 'Também faço comida japonesa às vezes, olhando receitas na internet.' },
        { speaker: 'カイラ', ja: 'でも、もっといろいろな{国|くに}の{料理|りょうり}を{作|つく}ってみたくて、この「{世界|せかい}の{料理|りょうり}サークル」に{参加|さんか}しました。', pt: 'Mas eu queria experimentar fazer comidas de mais países, então participei deste “Círculo de Culinária do Mundo”.' },
        { speaker: 'カイラ', ja: 'あと、{料理|りょうり}だけじゃなくて、このグループ……えー、このサークルで、たくさんの{人|ひと}と{友|とも}だちになれればと{思|おも}っています。', pt: 'Além de cozinhar, neste grupo... quer dizer, neste círculo, espero conseguir fazer amizade com muitas pessoas.' },
        { speaker: 'カイラ', ja: 'ええと、{食事|しょくじ}とか、いろいろ{誘|さそ}ってもらえればうれしいです。', pt: 'Bem, eu ficaria feliz se me convidassem para refeições e outras coisas.' },
        { speaker: 'カイラ', ja: 'みなさんといっしょに、{楽|たの}しく{活動|かつどう}できればいいなと{思|おも}います。よろしくお{願|ねが}いします。', pt: 'Espero poder participar das atividades com todos de forma divertida. Conto com vocês.' },
      ],
    },
  ],
  '07-08': [
    {
      label: '形に注目 - 自分の希望を言う (07-08)',
      lines: [
        { speaker: 'カイラ', ja: 'たくさんの{人|ひと}と{友|とも}だちになれればと{思|おも}っています。', pt: 'Espero conseguir fazer amizade com muitas pessoas.' },
        { speaker: 'カイラ', ja: '{食事|しょくじ}とか、いろいろ{誘|さそ}ってもらえればうれしいです。', pt: 'Eu ficaria feliz se me convidassem para refeições e outras coisas.' },
        { speaker: 'カイラ', ja: 'みなさんといっしょに、{楽|たの}しく{活動|かつどう}できればいいなと{思|おも}います。', pt: 'Espero poder participar das atividades com todos de forma divertida.' },
      ],
    },
  ],
  '07-09': [
    {
      label: 'ストラテジー - 自分で訂正しながら話す (07-09)',
      setupPt: 'A estratégia é corrigir a própria fala enquanto continua falando.',
      lines: [
        { speaker: 'カイラ', ja: '{英語会話|えいごかいわ}の……あ、{英会話|えいかいわ}の{学校|がっこう}で、{英語|えいご}を{教|おし}えています。', pt: 'Em uma escola de “inglês conversa”... ah, de conversação em inglês, ensino inglês.' },
        { speaker: 'カイラ', ja: '{料理|りょうり}が{好|す}きで、いろいろの……えっと、いろいろな{料理|りょうり}をよく{作|つく}ります。', pt: 'Gosto de cozinhar e faço bastante “vários de”... hum, vários tipos de comida.' },
        { speaker: 'カイラ', ja: 'このグループ……えー、このサークルで、たくさんの{人|ひと}と{友|とも}だちになれればと{思|おも}っています。', pt: 'Neste grupo... quer dizer, neste círculo, espero conseguir fazer amizade com muitas pessoas.' },
      ],
    },
  ],
  '07-10': [
    {
      label: '話すモデル - サークルで自己紹介する (07-10)',
      setupPt: 'Modelo para se apresentar ao entrar em um círculo ou grupo.',
      lines: [
        { speaker: 'スタッフ', ja: 'じゃあ、カイラさん、{簡単|かんたん}に{自己紹介|じこしょうかい}をお{願|ねが}いします。', pt: 'Então, Kyla, por favor faça uma breve autoapresentação.' },
        { speaker: 'カイラ', ja: 'はい。みなさん、はじめまして。カイラです。フィリピンから{来|き}ました。{日本|にほん}に{来|き}て3{年|ねん}になります。', pt: 'Sim. Prazer em conhecer vocês. Sou a Kyla. Vim das Filipinas. Faz três anos que vim ao Japão.' },
        { speaker: 'カイラ', ja: '{今|いま}は{東区|ひがしく}に{住|す}んでいます。{英会話|えいかいわ}の{学校|がっこう}で、{英語|えいご}を{教|おし}えています。', pt: 'Agora moro no distrito Higashi. Ensino inglês em uma escola de conversação em inglês.' },
        { speaker: 'カイラ', ja: '{料理|りょうり}が{好|す}きで、いろいろな{料理|りょうり}をよく{作|つく}ります。{日本料理|にほんりょうり}も、ネットのレシピを{見|み}ながら、ときどき{作|つく}ります。', pt: 'Gosto de cozinhar e faço bastante vários tipos de comida. Também faço comida japonesa às vezes, olhando receitas na internet.' },
        { speaker: 'カイラ', ja: 'でも、もっといろいろな{国|くに}の{料理|りょうり}を{作|つく}ってみたくて、このサークルに{参加|さんか}しました。', pt: 'Mas eu queria experimentar fazer comidas de mais países, então participei deste círculo.' },
        { speaker: 'カイラ', ja: 'このサークルで、たくさんの{人|ひと}と{友|とも}だちになれればと{思|おも}っています。{食事|しょくじ}とか、いろいろ{誘|さそ}ってもらえればうれしいです。', pt: 'Neste círculo, espero conseguir fazer amizade com muitas pessoas. Eu ficaria feliz se me convidassem para refeições e outras coisas.' },
        { speaker: 'カイラ', ja: 'みなさんといっしょに、{楽|たの}しく{活動|かつどう}できればいいなと{思|おも}います。よろしくお{願|ねが}いします。', pt: 'Espero poder participar das atividades com todos de forma divertida. Conto com vocês.' },
      ],
    },
  ],
}

const L8_SCRIPTS: Record<string, ScriptItem[]> = {
  '08-01': [
    {
      label: '① 初出勤の職場で (08-01)',
      setupPt: 'No primeiro dia de trabalho, ファルハナ inicia conversa com ユユカイン.',
      lines: [
        { speaker: 'A', ja: 'あの、{今日|きょう}、{入社|にゅうしゃ}の{方|かた}ですか？', pt: 'Com licença, você é alguém que entrou na empresa hoje?' },
        { speaker: 'B', ja: 'あ、はい。', pt: 'Ah, sim.' },
        { speaker: 'A', ja: '{私|わたし}もです。マレーシアから{来|き}たファルハナです。よろしくお{願|ねが}いします。', pt: 'Eu também. Sou a Farhana, vim da Malásia. Prazer.' },
        { speaker: 'B', ja: '{私|わたし}はミャンマーから{来|き}ました。ユユカインといいます。カインと{呼|よ}んでください。よろしくお{願|ねが}いします。', pt: 'Eu vim de Myanmar. Meu nome é Yu Yu Kain. Pode me chamar de Kain. Prazer.' },
        { speaker: 'A', ja: 'カインさんは、{前|まえ}はどこで{仕事|しごと}していたんですか？', pt: 'Kain, onde você trabalhava antes?' },
        { speaker: 'B', ja: '{私|わたし}は、2{週間前|しゅうかんまえ}に{日本|にほん}に{来|き}たばかりなんです。', pt: 'Eu acabei de chegar ao Japão há duas semanas.' },
        { speaker: 'A', ja: 'ああ、そうですか。{私|わたし}は、3{年前|ねんまえ}に{日本|にほん}に{来|き}て、{先月|せんげつ}まで{石川県|いしかわけん}で{働|はたら}いていたんです。', pt: 'Ah, entendi. Eu vim ao Japão há três anos e trabalhei em Ishikawa até o mês passado.' },
        { speaker: 'B', ja: 'そうなんですか。', pt: 'Ah, é?' },
      ],
    },
  ],
  '08-02': [
    {
      label: '② 同僚の結婚パーティーで (08-02)',
      setupPt: 'Em uma festa de casamento de colega, 王志強 conversa com 浅野 sobre 田中.',
      lines: [
        { speaker: 'A', ja: 'こんにちは。{田中|たなか}さんのお{友|とも}だちですか？ {私|わたし}は、{田中|たなか}さんの{会社|かいしゃ}の{同僚|どうりょう}の{王志強|オウシキョウ}です。', pt: 'Olá. Você é amigo do Tanaka? Eu sou Wang Zhiqiang, colega de empresa do Tanaka.' },
        { speaker: 'B', ja: 'あ、こんにちは。ぼくは、{浅野|あさの}といいます。{新郎|しんろう}と{新婦|しんぷ}の{高校|こうこう}のときの{同級生|どうきゅうせい}です。', pt: 'Ah, olá. Meu nome é Asano. Sou colega de classe do noivo e da noiva da época do ensino médio.' },
        { speaker: 'A', ja: 'え、{高校|こうこう}のときのお{友|とも}だちなんですか。', pt: 'Hã, vocês eram amigos do ensino médio?' },
        { speaker: 'B', ja: 'はい、{田中|たなか}くんとは{高校|こうこう}3{年間|ねんかん}ずっと{同|おな}じクラスだったんですよ。', pt: 'Sim. Eu e o Tanaka ficamos na mesma turma durante os três anos do ensino médio.' },
        { speaker: 'A', ja: 'へー、そうなんですか。', pt: 'Nossa, é mesmo?' },
        { speaker: 'B', ja: '{王|オウ}さんは、{会社|かいしゃ}の{方|かた}なんですね。', pt: 'Então você é da empresa, Wang.' },
        { speaker: 'A', ja: 'ええ。{同|おな}じ{部署|ぶしょ}で、いろいろお{世話|せわ}になってます。あの、{田中|たなか}さんって、{高校生|こうこうせい}のとき、どんな{感|かん}じだったんですか？', pt: 'Sim. Somos do mesmo departamento, e ele me ajuda em várias coisas. Diga, como era o Tanaka no ensino médio?' },
        { speaker: 'B', ja: 'うーん、{今|いま}と{同|おな}じで、よくしゃべってうるさかったですね。よく{先生|せんせい}にも{叱|しか}られてました。でも、ムードメーカーで{人気者|にんきもの}でしたよ。', pt: 'Hmm, igual a agora: falava muito e era barulhento. Os professores viviam dando bronca nele. Mas ele animava o ambiente e era popular.' },
        { speaker: 'A', ja: 'そうなんですね。{会社|かいしゃ}でもにぎやかで、{職場|しょくば}の{雰囲気|ふんいき}を{良|よ}くしてくれていますよ。{確|たし}かに、ちょっとうるさいなって{思|おも}うときもありますけど。', pt: 'Entendi. Na empresa ele também é animado e melhora o clima do local de trabalho. É verdade que às vezes acho que ele é um pouco barulhento.' },
        { speaker: 'B', ja: 'ははは。', pt: 'Ha ha ha.' },
      ],
    },
  ],
  '08-03': [
    {
      label: '③ はじめて参加するサークルで (08-03)',
      setupPt: 'アルトゥル entra pela primeira vez em um círculo de shogi e fala com 塚原.',
      lines: [
        { speaker: 'A', ja: 'すみません。{今日|きょう}から{参加|さんか}するんですが……。', pt: 'Com licença. Vou participar a partir de hoje...' },
        { speaker: 'B', ja: 'あ、はじめての{方|かた}？', pt: 'Ah, é a primeira vez?' },
        { speaker: 'A', ja: 'はい。アルトゥルといいます。', pt: 'Sim. Meu nome é Artur.' },
        { speaker: 'B', ja: 'アルトゥルさんですね。{人|ひと}が{増|ふ}えてうれしいです。{私|わたし}は{塚原|つかはら}です。', pt: 'Artur, certo? Fico feliz que tenha mais gente. Eu sou Tsukahara.' },
        { speaker: 'A', ja: '{塚原|つかはら}さん……。よろしくお{願|ねが}いします。あの、{私|わたし}、こういうサークルに{参加|さんか}するのははじめてで、すごく{緊張|きんちょう}してます。{将棋|しょうぎ}は{好|す}きなんですけど、{始|はじ}めたばかりだし……。', pt: 'Tsukahara... Prazer. Bem, é a primeira vez que participo de um círculo assim, então estou muito nervoso. Eu gosto de shogi, mas acabei de começar...' },
        { speaker: 'B', ja: 'だいじょうぶ、だいじょうぶ。リラックスして、{楽|たの}しくやりましょう。', pt: 'Tudo bem, tudo bem. Relaxe e vamos nos divertir.' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '08-04': [
    {
      label: '④ 日本語学校の新しいクラスで (08-04)',
      setupPt: 'Na nova classe de japonês, ジャスミン pede para sentar ao lado de リエン e comenta a Hello Kitty.',
      lines: [
        { speaker: 'A', ja: 'あのう、{隣|となり}、いいですか？', pt: 'Com licença, posso sentar ao seu lado?' },
        { speaker: 'B', ja: 'あ、どうぞ。', pt: 'Ah, claro.' },
        { speaker: 'A', ja: 'ありがとう。あ、そのスマホケース、キティちゃんだ。かわいい。キティちゃん、{好|す}きなんですか？', pt: 'Obrigada. Ah, esse case de celular é da Kitty-chan. Que fofo. Você gosta da Kitty-chan?' },
        { speaker: 'B', ja: 'うん、{大好|だいす}きです。ほかにも、ペンケースとか、ハンカチとか、いろいろ{持|も}ってますよ。ほら。', pt: 'Sim, adoro. Também tenho várias outras coisas, como estojo e lenço. Olha.' },
        { speaker: 'A', ja: 'あー、ほんとだ。{私|わたし}もキティちゃん、{好|す}きなんです。{日本|にほん}で{買|か}ったんですか？', pt: 'Ah, é verdade. Eu também gosto da Kitty-chan. Você comprou no Japão?' },
        { speaker: 'B', ja: '{日本|にほん}で{買|か}ったり、ベトナムで{買|か}ったり。ベトナムでも、キティちゃん、{人気|にんき}なんですよ。', pt: 'Comprei algumas coisas no Japão e outras no Vietnã. Kitty-chan também é popular no Vietnã.' },
        { speaker: 'A', ja: 'へー、そうなんだ。ベトナム{出身|しゅっしん}なんですか？', pt: 'Nossa, é mesmo? Você é do Vietnã?' },
        { speaker: 'B', ja: 'はい。ファム・ティ・リエンっていいます。リエンと{呼|よ}んでください。よろしく。', pt: 'Sim. Meu nome é Pham Thi Lien. Pode me chamar de Lien. Prazer.' },
        { speaker: 'A', ja: '{私|わたし}は、ウズベキスタン{出身|しゅっしん}で、ジャスミンっていいます。よろしく。', pt: 'Eu sou do Uzbequistão e me chamo Jasmine. Prazer.' },
      ],
    },
  ],
  '08-05': [
    {
      label: '話すモデル① - 初出勤の職場で (08-05)',
      setupPt: 'Modelo para iniciar conversa no primeiro dia de trabalho.',
      lines: [
        { speaker: 'A', ja: 'あの、{今日|きょう}、{入社|にゅうしゃ}の{方|かた}ですか？', pt: 'Com licença, você é alguém que entrou na empresa hoje?' },
        { speaker: 'B', ja: 'あ、はい。', pt: 'Ah, sim.' },
        { speaker: 'A', ja: '{私|わたし}もです。マレーシアから{来|き}たファルハナです。よろしくお{願|ねが}いします。', pt: 'Eu também. Sou a Farhana, vim da Malásia. Prazer.' },
        { speaker: 'B', ja: '{私|わたし}はミャンマーから{来|き}ました。ユユカインといいます。カインと{呼|よ}んでください。よろしくお{願|ねが}いします。', pt: 'Eu vim de Myanmar. Meu nome é Yu Yu Kain. Pode me chamar de Kain. Prazer.' },
        { speaker: 'A', ja: 'カインさんは、{前|まえ}はどこで{仕事|しごと}していたんですか？', pt: 'Kain, onde você trabalhava antes?' },
        { speaker: 'B', ja: '{私|わたし}は、2{週間前|しゅうかんまえ}に{日本|にほん}に{来|き}たばかりなんです。', pt: 'Eu acabei de chegar ao Japão há duas semanas.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Entendi.' },
      ],
    },
  ],
  '08-06': [
    {
      label: '話すモデル② - 結婚パーティーで (08-06)',
      setupPt: 'Modelo para continuar conversa falando de conhecido em comum.',
      lines: [
        { speaker: 'A', ja: 'こんにちは。{田中|たなか}さんのお{友|とも}だちですか？ {私|わたし}は、{会社|かいしゃ}の{同僚|どうりょう}の{王志強|オウシキョウ}です。', pt: 'Olá. Você é amigo do Tanaka? Eu sou Wang Zhiqiang, colega de empresa.' },
        { speaker: 'B', ja: '{私|わたし}は{浅野|あさの}です。{新郎|しんろう}と{新婦|しんぷ}の{高校|こうこう}のときの{同級生|どうきゅうせい}です。', pt: 'Eu sou Asano. Sou colega de classe do noivo e da noiva da época do ensino médio.' },
        { speaker: 'A', ja: 'え、{高校|こうこう}のときのお{友|とも}だちなんですか。', pt: 'Hã, vocês eram amigos do ensino médio?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: '{田中|たなか}さんって、{高校生|こうこうせい}のとき、どんな{感|かん}じだったんですか？', pt: 'Como era o Tanaka no ensino médio?' },
        { speaker: 'B', ja: 'うーん、{今|いま}と{同|おな}じで、よくしゃべってうるさかったですね。よく{先生|せんせい}にも{叱|しか}られてました。でも、ムードメーカーで{人気者|にんきもの}でしたよ。', pt: 'Hmm, igual a agora: falava muito e era barulhento. Os professores viviam dando bronca nele. Mas ele animava o ambiente e era popular.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é?' },
      ],
    },
  ],
  '08-07': [
    {
      label: '話すモデル③ - サークルで (08-07)',
      setupPt: 'Modelo para falar de seus sentimentos ao entrar em um círculo pela primeira vez.',
      lines: [
        { speaker: 'A', ja: 'すみません。{今日|きょう}から{参加|さんか}するんですが……。', pt: 'Com licença. Vou participar a partir de hoje...' },
        { speaker: 'B', ja: 'あ、はじめての{方|かた}ですか？ {私|わたし}は{塚原|つかはら}といいます。', pt: 'Ah, é a primeira vez? Eu me chamo Tsukahara.' },
        { speaker: 'A', ja: 'アルトゥルといいます。よろしくお{願|ねが}いします。', pt: 'Meu nome é Artur. Prazer.' },
        { speaker: 'A', ja: '{私|わたし}、こういうサークルに{参加|さんか}するのははじめてで、すごく{緊張|きんちょう}してます。', pt: 'É a primeira vez que participo de um círculo assim, então estou muito nervoso.' },
        { speaker: 'B', ja: 'だいじょうぶ、だいじょうぶ。リラックスして、{楽|たの}しくやりましょう。', pt: 'Tudo bem, tudo bem. Relaxe e vamos nos divertir.' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '08-08': [
    {
      label: '話すモデル④ - 日本語学校で (08-08)',
      setupPt: 'Modelo para iniciar conversa comentando um pertence da outra pessoa.',
      lines: [
        { speaker: 'A', ja: 'あのう、{隣|となり}、いいですか？', pt: 'Com licença, posso sentar ao seu lado?' },
        { speaker: 'B', ja: 'あ、どうぞ。', pt: 'Ah, claro.' },
        { speaker: 'A', ja: 'ありがとう。あ、そのスマホケース、キティちゃんだ。キティちゃん、{好|す}きなんですか？', pt: 'Obrigada. Ah, esse case de celular é da Kitty-chan. Você gosta da Kitty-chan?' },
        { speaker: 'B', ja: 'うん、{大好|だいす}きです。ほかにも、ペンケースとか、ハンカチとか、いろいろ{持|も}ってますよ。', pt: 'Sim, adoro. Também tenho várias outras coisas, como estojo e lenço.' },
        { speaker: 'A', ja: 'あー、ほんとだ。', pt: 'Ah, é verdade.' },
      ],
    },
  ],
  '08-09': [
    {
      label: '会話 - ここのお風呂には、よく来るんですか？ (08-09)',
      setupPt: 'フランキー está em uma fonte termal e um morador local inicia conversa após avisá-lo sobre a toalha.',
      lines: [
        { speaker: '地元の人', ja: 'あー、こらこら。タオルをお{湯|ゆ}につけちゃだめですよ！', pt: 'Ei, ei. Não pode colocar a toalha na água quente!' },
        { speaker: 'フランキー', ja: 'え、タオル？', pt: 'Hã, a toalha?' },
        { speaker: '地元の人', ja: 'そう。タオル。お{湯|ゆ}の{中|なか}に{入|い}れちゃだめ。', pt: 'Isso. A toalha. Não pode colocar dentro da água.' },
        { speaker: 'フランキー', ja: 'すみません。{知|し}りませんでした。', pt: 'Desculpe. Eu não sabia.' },
        { speaker: '地元の人', ja: 'これからは、{気|き}をつけなさい。', pt: 'De agora em diante, tome cuidado.' },
        { speaker: 'フランキー', ja: 'はい……。', pt: 'Sim...' },
        { speaker: '地元の人', ja: '{観光客|かんこうきゃく}ですか？', pt: 'Você é turista?' },
        { speaker: 'フランキー', ja: '{私|わたし}は、{留学生|りゅうがくせい}です。CPU{大学|だいがく}の{寮|りょう}に{住|す}んでいます。', pt: 'Sou estudante internacional. Moro no dormitório da Universidade CPU.' },
        { speaker: '地元の人', ja: 'ああ。どこから{来|き}たんですか？', pt: 'Ah. De onde você veio?' },
        { speaker: 'フランキー', ja: '{出身|しゅっしん}は、インドネシアです。', pt: 'Sou da Indonésia.' },
        { speaker: '地元の人', ja: 'インドネシア。どのぐらい{日本|にほん}に{住|す}んでるんですか？', pt: 'Indonésia. Há quanto tempo mora no Japão?' },
        { speaker: 'フランキー', ja: 'だいたい、2{年|ねん}ぐらいです。', pt: 'Mais ou menos dois anos.' },
        { speaker: '地元の人', ja: 'へー、{日本語|にほんご}うまいですね。', pt: 'Nossa, seu japonês é bom.' },
        { speaker: 'フランキー', ja: 'いえ、そんなことないです。', pt: 'Não, não é nada disso.' },
        { speaker: '地元の人', ja: 'ここのお{風呂|ふろ}には、よく{来|く}るんですか？', pt: 'Você vem bastante a este banho?' },
        { speaker: 'フランキー', ja: 'はい、{寮|りょう}にもお{風呂|ふろ}がありますが、{温泉|おんせん}ではないので。', pt: 'Sim. Também há banho no dormitório, mas não é fonte termal.' },
        { speaker: '地元の人', ja: '{温泉|おんせん}が{好|す}きなんですか？', pt: 'Você gosta de fontes termais?' },
        { speaker: 'フランキー', ja: 'はい、{日本|にほん}に{来|き}て、{温泉|おんせん}がとても{好|す}きになりました。', pt: 'Sim. Depois que vim ao Japão, passei a gostar muito de fontes termais.' },
        { speaker: '地元の人', ja: 'ははは、それはいいですね。', pt: 'Ha ha ha. Isso é bom.' },
        { speaker: 'フランキー', ja: 'はじめは、ほかの{人|ひと}の{前|まえ}で{裸|はだか}になるのは{勇気|ゆうき}がいりました。でも、{今|いま}はだいじょうぶです。', pt: 'No começo, precisava de coragem para ficar nu na frente de outras pessoas. Mas agora tudo bem.' },
        { speaker: '地元の人', ja: 'へー、そうなんですね。', pt: 'Nossa, entendi.' },
        { speaker: 'フランキー', ja: 'あのう、この{辺|へん}で、いちばんいい{温泉|おんせん}は、どこですか？', pt: 'Com licença, por aqui, qual é a melhor fonte termal?' },
        { speaker: '地元の人', ja: 'そうだなあ、いろいろあるけど、いちばん{好|す}きなのは、{鶴|つる}の{湯|ゆ}かな。', pt: 'Vejamos, há várias, mas acho que a que eu mais gosto é Tsurunoyu.' },
        { speaker: 'フランキー', ja: '{鶴|つる}の{湯|ゆ}ですか？ どこにありますか？', pt: 'Tsurunoyu? Onde fica?' },
        { speaker: '地元の人', ja: '{国道|こくどう}を{山|やま}のほうに{行|い}ったところの、{霊園|れいえん}のそばにある{露天風呂|ろてんぶろ}。{無料|むりょう}で{入|はい}れるし、お{湯|ゆ}もすごくいいですよ。', pt: 'É um banho ao ar livre perto de um cemitério, seguindo pela estrada nacional em direção à montanha. Dá para entrar de graça, e a água é muito boa.' },
        { speaker: 'フランキー', ja: 'そうですか。あの、すみません、「れいえん」は{何|なん}ですか？', pt: 'Entendi. Desculpe, o que é “reien”?' },
        { speaker: '地元の人', ja: '{霊園|れいえん}は、お{墓|はか}のある{公園|こうえん}みたいなところかな。{場所|ばしょ}は、{観光案内所|かんこうあんないじょ}で{聞|き}けば、{教|おし}えてくれると{思|おも}いますよ。', pt: 'Reien é algo como um parque onde há túmulos. Se perguntar no centro de informações turísticas, acho que eles informam o lugar.' },
        { speaker: 'フランキー', ja: '{今度|こんど}ぜひ{行|い}ってみます。ありがとうございました。', pt: 'Da próxima vez, com certeza vou experimentar ir. Muito obrigado.' },
        { speaker: 'フランキー', ja: 'ここには、よくいらっしゃるんですか？', pt: 'O senhor costuma vir aqui?' },
        { speaker: '地元の人', ja: 'ほとんど{毎日|まいにち}{来|き}てますよ。', pt: 'Venho quase todos os dias.' },
        { speaker: 'フランキー', ja: 'じゃあ、また{会|あ}うかもしれませんね。またいろいろ{教|おし}えてください。', pt: 'Então talvez nos encontremos de novo. Por favor, me ensine várias coisas outra vez.' },
      ],
    },
  ],
  '08-10': [
    {
      label: '形に注目 - Vなさい (08-10)',
      lines: [
        { speaker: '地元の人', ja: 'これからは、{気|き}をつけなさい。', pt: 'De agora em diante, tome cuidado.' },
      ],
    },
  ],
  '08-11': [
    {
      label: '形に注目 - 尊敬の動詞 (08-11)',
      lines: [
        { speaker: '地元の人', ja: 'ここのお{風呂|ふろ}には、よく{来|く}るんですか？', pt: 'Você vem bastante a este banho?' },
        { speaker: 'フランキー', ja: 'ここには、よくいらっしゃるんですか？', pt: 'O senhor costuma vir aqui?' },
      ],
    },
  ],
  '08-12': [
    {
      label: '話すモデル - はじめて会った人と話す (08-12)',
      setupPt: 'Modelo para responder perguntas de uma pessoa desconhecida e também puxar um assunto.',
      lines: [
        { speaker: '地元の人', ja: '{観光客|かんこうきゃく}ですか？', pt: 'Você é turista?' },
        { speaker: 'フランキー', ja: '{私|わたし}は、{留学生|りゅうがくせい}です。', pt: 'Sou estudante internacional.' },
        { speaker: '地元の人', ja: 'どこから{来|き}たんですか？', pt: 'De onde você veio?' },
        { speaker: 'フランキー', ja: '{出身|しゅっしん}は、インドネシアです。', pt: 'Sou da Indonésia.' },
        { speaker: '地元の人', ja: 'どのぐらい{日本|にほん}に{住|す}んでるんですか？', pt: 'Há quanto tempo mora no Japão?' },
        { speaker: 'フランキー', ja: 'だいたい、2{年|ねん}ぐらいです。', pt: 'Mais ou menos dois anos.' },
        { speaker: '地元の人', ja: 'へー、{日本語|にほんご}うまいですね。', pt: 'Nossa, seu japonês é bom.' },
        { speaker: 'フランキー', ja: 'いえ、そんなことないです。', pt: 'Não, não é nada disso.' },
        { speaker: '地元の人', ja: 'ここのお{風呂|ふろ}には、よく{来|く}るんですか？', pt: 'Você vem bastante a este banho?' },
        { speaker: 'フランキー', ja: 'はい、{寮|りょう}にもお{風呂|ふろ}がありますが、{温泉|おんせん}ではないので。', pt: 'Sim. Também há banho no dormitório, mas não é fonte termal.' },
        { speaker: '地元の人', ja: '{温泉|おんせん}が{好|す}きなんですか？', pt: 'Você gosta de fontes termais?' },
        { speaker: 'フランキー', ja: 'はい、{日本|にほん}に{来|き}て、{温泉|おんせん}がとても{好|す}きになりました。', pt: 'Sim. Depois que vim ao Japão, passei a gostar muito de fontes termais.' },
        { speaker: '地元の人', ja: 'それはいいですね。', pt: 'Isso é bom.' },
        { speaker: 'フランキー', ja: 'この{辺|へん}で、いちばんいい{温泉|おんせん}は、どこですか？', pt: 'Por aqui, qual é a melhor fonte termal?' },
        { speaker: '地元の人', ja: 'いちばん{好|す}きなのは、{鶴|つる}の{湯|ゆ}です。', pt: 'A que eu mais gosto é Tsurunoyu.' },
        { speaker: 'フランキー', ja: '{鶴|つる}の{湯|ゆ}ですか？ どこにありますか？', pt: 'Tsurunoyu? Onde fica?' },
        { speaker: '地元の人', ja: '{霊園|れいえん}のそばにある{露天風呂|ろてんぶろ}です。{無料|むりょう}で{入|はい}れるし、お{湯|ゆ}もすごくいいですよ。', pt: 'É um banho ao ar livre perto de um cemitério. Dá para entrar de graça, e a água é muito boa.' },
        { speaker: 'フランキー', ja: '{今度|こんど}ぜひ{行|い}ってみます。ありがとうございました。', pt: 'Da próxima vez, com certeza vou experimentar ir. Muito obrigado.' },
      ],
    },
  ],
}

const L9_SCRIPTS: Record<string, ScriptItem[]> = {
  '09-01': [
    {
      label: '① 日本語教室の面談で (09-01)',
      setupPt: '木山 pergunta a アディ sobre a meta de estudo de japonês.',
      lines: [
        { speaker: '木山', ja: 'こんにちは、{木山|きやま}です。えーと、アディさんは、ここで、どんなことを{勉強|べんきょう}したいですか？ {目標|もくひょう}を{教|おし}えてもらえますか？', pt: 'Olá, sou Kiyama. Bem, Adi, o que você quer estudar aqui? Pode me contar sua meta?' },
        { speaker: 'アディ', ja: 'あの、{仕事|しごと}でもっと{上手|じょうず}に{日本語|にほんご}が{使|つか}えるようになることです。', pt: 'Bem, é conseguir usar japonês melhor no trabalho.' },
        { speaker: '木山', ja: '{仕事|しごと}ですか。', pt: 'No trabalho?' },
        { speaker: 'アディ', ja: 'はい。{最近|さいきん}、{職場|しょくば}の{電話|でんわ}を{取|と}っているんですけど、すごく{難|むずか}しいんです。', pt: 'Sim. Recentemente tenho atendido telefone no trabalho, mas é muito difícil.' },
        { speaker: '木山', ja: 'ああ、{電話|でんわ}、{難|むずか}しいですよね。', pt: 'Ah, telefone é difícil mesmo.' },
        { speaker: 'アディ', ja: 'はい。{電話|でんわ}だと、{緊張|きんちょう}して、うまく{話|はな}せないんです。この{間|あいだ}も、{電話|でんわ}を{切|き}るときに、「{失礼|しつれい}します」を「じゃあね」って{言|い}っちゃって、すごくはずかしかったです。', pt: 'Sim. Ao telefone fico nervoso e não consigo falar bem. Outro dia, ao desligar, acabei dizendo “tchau” em vez de “com licença/obrigado”, e fiquei muito envergonhado.' },
        { speaker: '木山', ja: 'そうですか。じゃあ、{仕事|しごと}で{上手|じょうず}に{日本語|にほんご}が{使|つか}えるように、いっしょにがんばりましょう。', pt: 'Entendi. Então vamos nos esforçar juntos para que você consiga usar japonês bem no trabalho.' },
        { speaker: 'アディ', ja: 'はい。よろしくお{願|ねが}いします。', pt: 'Sim. Conto com você.' },
      ],
    },
  ],
  '09-02': [
    {
      label: '② 職場の休憩室で (09-02)',
      setupPt: '鵜澤 pergunta a ラメシュ sobre metas de japonês; ラメシュ quer entender dramas.',
      lines: [
        { speaker: '鵜澤', ja: 'ラメシュさんって、いつから{日本語|にほんご}{勉強|べんきょう}してるんですか？', pt: 'Ramesh, desde quando você estuda japonês?' },
        { speaker: 'ラメシュ', ja: '{日本|にほん}に{来|く}る{前|まえ}から。だから、もう20{年|ねん}、{勉強|べんきょう}してるよ。', pt: 'Desde antes de vir ao Japão. Então já estudo há 20 anos.' },
        { speaker: '鵜澤', ja: 'へー、20{年|ねん}。', pt: 'Nossa, 20 anos.' },
        { speaker: 'ラメシュ', ja: 'でも、{日本語|にほんご}は、まだまだわからないことがたくさんあるよ。', pt: 'Mas ainda há muita coisa em japonês que não entendo.' },
        { speaker: '鵜澤', ja: 'そうなんですか。{何|なに}か{目標|もくひょう}とか、あるんですか？', pt: 'É mesmo? Você tem alguma meta?' },
        { speaker: 'ラメシュ', ja: 'うーん、{日本|にほん}のドラマを{全部理解|ぜんぶりかい}できるようになることかな。', pt: 'Hmm, talvez conseguir entender completamente dramas japoneses.' },
        { speaker: '鵜澤', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'ラメシュ', ja: '{日本|にほん}のドラマが{好|す}きだから、よく{見|み}るんだけど、{聞|き}き{取|と}れないセリフがあるのが{悔|くや}しいんだよね。', pt: 'Gosto de dramas japoneses e assisto bastante, mas fico frustrado quando há falas que não consigo captar.' },
        { speaker: '鵜澤', ja: 'そうなんですか。', pt: 'Entendi.' },
        { speaker: 'ラメシュ', ja: '{日本|にほん}にいる{間|あいだ}に、いろいろなドラマを{見|み}たいから、{鵜澤|うざわ}くんもおすすめのドラマがあったら、ぜひ{教|おし}えて。', pt: 'Enquanto estou no Japão, quero assistir a vários dramas; se você tiver algum drama para recomendar, me diga.' },
        { speaker: '鵜澤', ja: 'はい。', pt: 'Claro.' },
      ],
    },
  ],
  '09-03': [
    {
      label: '③ 家の近所で (09-03)',
      setupPt: '高 conversa com 西尾 sobre estudar japonês depois do trabalho.',
      lines: [
        { speaker: '西尾', ja: 'あら、{高|コウ}さん、こんばんは。', pt: 'Ah, Gao, boa noite.' },
        { speaker: '高', ja: 'あ、{西尾|にしお}さん。こんばんは。', pt: 'Ah, Nishio, boa noite.' },
        { speaker: '西尾', ja: '{仕事|しごと}の{帰|かえ}り？ {遅|おそ}くまで、ご{苦労|くろう}さま。', pt: 'Voltando do trabalho? Obrigada pelo esforço até tarde.' },
        { speaker: '高', ja: 'ありがとうございます。でも、{今日|きょう}は{仕事|しごと}のあとに{日本語|にほんご}の{勉強|べんきょう}をしていたんです。', pt: 'Obrigado. Mas hoje, depois do trabalho, eu estava estudando japonês.' },
        { speaker: '西尾', ja: '{日本語|にほんご}の{勉強|べんきょう}？ {日本語学校|にほんごがっこう}とか？', pt: 'Estudo de japonês? Em escola de japonês?' },
        { speaker: '高', ja: 'いえ、{知|し}り{合|あ}いの{日本人|にほんじん}に{教|おし}えてもらっているんです。{代|か}わりに、{私|わたし}は{中国語|ちゅうごくご}を{教|おし}えています。', pt: 'Não, um conhecido japonês está me ensinando. Em troca, eu ensino chinês.' },
        { speaker: '西尾', ja: 'そうなの。がんばるわね。', pt: 'É mesmo? Você se esforça.' },
        { speaker: '高', ja: 'ほかの{人|ひと}と、もっとコミュニケーションがとれるようになりたいんです。{周|まわ}りの{人|ひと}の{言|い}っていることが、わからないときがあるので……。{方言|ほうげん}も、まだよくわからないんです。', pt: 'Quero conseguir me comunicar mais com outras pessoas. Às vezes não entendo o que as pessoas ao meu redor dizem... E ainda não entendo muito bem dialetos.' },
        { speaker: '西尾', ja: 'そう。{何|なに}か{困|こま}ったことがあったら、{遠慮|えんりょ}なく{言|い}ってね。', pt: 'Entendi. Se tiver algum problema, fale sem cerimônia.' },
        { speaker: '高', ja: 'はい。ありがとうございます。', pt: 'Sim. Muito obrigado.' },
      ],
    },
  ],
  '09-04': [
    {
      label: '④ 大学の教室で (09-04)',
      setupPt: 'ありな convida プラー para comer, mas ele vai estudar para o JLPT.',
      lines: [
        { speaker: 'ありな', ja: 'ねえねえ、プラー。', pt: 'Ei, Plah.' },
        { speaker: 'プラー', ja: 'あ、ありな。', pt: 'Ah, Arina.' },
        { speaker: 'ありな', ja: 'これから、みんなでご{飯|はん}{食|た}べに{行|い}くけど、いっしょにどう？', pt: 'Agora vamos comer com todo mundo. Quer ir junto?' },
        { speaker: 'プラー', ja: 'あ、ごめん。{今日|きょう}は{早|はや}く{帰|かえ}って{勉強|べんきょう}するから……。', pt: 'Ah, desculpa. Hoje vou voltar cedo e estudar...' },
        { speaker: 'ありな', ja: 'えー、そうなの？', pt: 'Sério?' },
        { speaker: 'プラー', ja: 'うん、{来週|らいしゅう}、JLPTがあるから。', pt: 'Sim, porque semana que vem tenho o JLPT.' },
        { speaker: 'ありな', ja: 'JLPTって、{日本語|にほんご}の{試験|しけん}だったっけ？', pt: 'JLPT era o exame de japonês, né?' },
        { speaker: 'プラー', ja: 'そう。{前回|ぜんかい}は、あまり{勉強|べんきょう}しないで{受|う}けたら、2{点|てん}{足|た}りなくて{合格|ごうかく}できなくて……。だから、{次|つぎ}は、{絶対合格|ぜったいごうかく}したいんだ。', pt: 'Isso. Da vez passada fiz sem estudar muito e faltaram dois pontos para passar... Então da próxima vez quero passar com certeza.' },
        { speaker: 'ありな', ja: '2{点|てん}……。それは{惜|お}しかったね。', pt: 'Dois pontos... Foi por pouco.' },
        { speaker: 'プラー', ja: '{試験|しけん}が{終|お}わったら、また{誘|さそ}って。', pt: 'Quando o exame acabar, me chama de novo.' },
        { speaker: 'ありな', ja: 'うん。{次|つぎ}は、きっと{合格|ごうかく}できるよ。がんばってね。', pt: 'Sim. Da próxima vez, com certeza você vai passar. Força.' },
        { speaker: 'プラー', ja: 'ありがとう。', pt: 'Obrigado.' },
      ],
    },
  ],
  '09-05': [
    {
      label: '形に注目 - V-る間に (09-05)',
      lines: [
        { speaker: 'ラメシュ', ja: '{日本|にほん}にいる{間|あいだ}に、いろいろなドラマを{見|み}たいから、{鵜澤|うざわ}くんもおすすめのドラマがあったら、ぜひ{教|おし}えて。', pt: 'Enquanto estou no Japão, quero assistir a vários dramas; se você tiver recomendações, me diga.' },
      ],
    },
  ],
  '09-06': [
    {
      label: '形に注目 - 丁寧体・普通体 (09-06)',
      lines: [
        { speaker: 'ラメシュ', ja: 'でも、{日本語|にほんご}は、まだまだわからないことがたくさんあるよ。', pt: 'Mas ainda há muita coisa em japonês que não entendo.' },
        { speaker: 'ラメシュ', ja: '{日本|にほん}のドラマが{好|す}きだから、よく{見|み}るんだけど、{聞|き}き{取|と}れないセリフがあるのが{悔|くや}しいんだよね。', pt: 'Gosto de dramas japoneses, mas é frustrante haver falas que não consigo captar.' },
        { speaker: 'ありな', ja: '{次|つぎ}は、きっと{合格|ごうかく}できるよ。', pt: 'Da próxima vez, com certeza você vai passar.' },
      ],
    },
  ],
  '09-07': [
    {
      label: '話すモデル - 丁寧体で目標を話す (09-07)',
      lines: [
        { speaker: 'A', ja: '{日本語学習|にほんごがくしゅう}の{目標|もくひょう}を{教|おし}えてもらえますか？', pt: 'Pode me contar sua meta de aprendizagem de japonês?' },
        { speaker: 'B', ja: '{仕事|しごと}でもっと{上手|じょうず}に{日本語|にほんご}が{使|つか}えるようになることです。', pt: 'É conseguir usar japonês melhor no trabalho.' },
        { speaker: 'A', ja: 'そうですか。じゃあ、いっしょにがんばりましょう。', pt: 'Entendi. Então vamos nos esforçar juntos.' },
      ],
    },
  ],
  '09-08': [
    {
      label: '話すモデル - 普通体で目標を話す (09-08)',
      lines: [
        { speaker: 'A', ja: '{日本語学習|にほんごがくしゅう}の{目標|もくひょう}って、ある？', pt: 'Você tem uma meta de aprendizagem de japonês?' },
        { speaker: 'B', ja: '{試験|しけん}に{合格|ごうかく}したいんだ。', pt: 'Quero passar no exame.' },
        { speaker: 'B', ja: 'この{間|あいだ}は、2{点|てん}{足|た}りなくて{合格|ごうかく}できなくて……。だから、{次|つぎ}は、{絶対合格|ぜったいごうかく}したいんだ。', pt: 'Da outra vez faltaram dois pontos e não consegui passar... Por isso, da próxima vez quero passar com certeza.' },
        { speaker: 'A', ja: 'がんばってね。', pt: 'Força.' },
      ],
    },
  ],
  '09-09': [
    {
      label: '① 秋田で (09-09)',
      setupPt: 'Um morador local fala em dialeto de Akita sobre roupa e frio.',
      lines: [
        { speaker: '地元の人', ja: 'おや、そんた{服|ふく}ばり{着|き}てさみぐねぇの？', pt: 'Ei, você não está com frio usando só essa roupa?' },
        { speaker: '旅行者', ja: 'え、すみません、{何|なん}ですか？', pt: 'Hã, desculpe, o quê?' },
        { speaker: '地元の人', ja: 'そんた{服|ふく}ばり{着|き}てさみぐねぇの？', pt: 'Você não está com frio usando só essa roupa?' },
        { speaker: '旅行者', ja: 'あの、すみません、ちょっとわかりません……{方言|ほうげん}でしょうか……。', pt: 'Desculpe, não entendi muito bem... É dialeto?' },
        { speaker: '地元の人', ja: 'あーわがらながった？ そんな{服|ふく}だけ{着|き}て{寒|さむ}くないのって{言|い}ったのです。', pt: 'Ah, você não entendeu? Eu disse: você não está com frio usando só essa roupa?' },
        { speaker: '旅行者', ja: 'あ、はい、{寒|さむ}いです。{私|わたし}の{国|くに}は、{一年中|いちねんじゅう}{夏|なつ}なので、{冬|ふゆ}の{服|ふく}、{持|も}ってないんです。', pt: 'Ah, sim, estou com frio. No meu país é verão o ano todo, então não tenho roupa de inverno.' },
      ],
    },
  ],
  '09-10': [
    {
      label: '② 大阪で (09-10)',
      setupPt: 'No trabalho, ユパカー interpreta 「なおす」 como “consertar”, mas em Kansai é “guardar”.',
      lines: [
        { speaker: '上司', ja: 'ユパカーさん、そこの{台車|だいしゃ}、なおしといてくれる？', pt: 'Yupaka, pode guardar aquele carrinho ali?' },
        { speaker: 'ユパカー', ja: 'え、{直|なお}す？ {壊|こわ}れてるんですか？', pt: 'Hã, consertar? Está quebrado?' },
        { speaker: '上司', ja: 'あー、ちゃう、ちゃう、{壊|こわ}れてへん。えっと……{片付|かたづ}けといて、しまっといて、ゆう{意味|いみ}。', pt: 'Ah, não, não. Não está quebrado. Quer dizer... deixar arrumado, guardar.' },
        { speaker: 'ユパカー', ja: 'あ、わかりました。{私|わたし}が{壊|こわ}れた{台車|だいしゃ}を{修理|しゅうり}するのかと{思|おも}って、ちょっとびっくりしました。', pt: 'Ah, entendi. Pensei que eu fosse consertar um carrinho quebrado e levei um susto.' },
        { speaker: '上司', ja: 'もしかして、「なおす」て、{方言|ほうげん}？', pt: 'Será que “naosu” é dialeto?' },
        { speaker: 'ユパカー', ja: 'はい、たぶん{方言|ほうげん}だと{思|おも}います。{教科書|きょうかしょ}の{日本語|にほんご}では、「{直|なお}す」は「{修理|しゅうり}する」という{意味|いみ}です。', pt: 'Sim, acho que provavelmente é dialeto. No japonês dos livros, “naosu” significa “consertar”.' },
      ],
    },
  ],
  '09-11': [
    {
      label: '③ 福岡で (09-11)',
      setupPt: 'Um morador de Fukuoka pergunta de onde o viajante veio.',
      lines: [
        { speaker: '地元の人', ja: 'あんた、どっから{来|き}んしゃったと？', pt: 'Você veio de onde?' },
        { speaker: '旅行客', ja: 'え、すみません……きんしゃ？（{友|とも}だちに）どういう{意味|いみ}？', pt: 'Hã, desculpe... kinsha? (para o amigo) O que significa?' },
        { speaker: '友だち', ja: 'えっと、「あなた、どこから{来|き}たんですか？」って。', pt: 'Bem, quer dizer “você veio de onde?”.' },
        { speaker: '旅行客', ja: 'どこから……ええと、{私|わたし}は{東京|とうきょう}から{来|き}ました。{出身|しゅっしん}は、ポーランドです。', pt: 'De onde... Bem, vim de Tóquio. Sou da Polônia.' },
        { speaker: '地元の人', ja: 'はー、ポーランドげな！ {遠|とお}かねー！', pt: 'Nossa, Polônia! É longe, hein!' },
      ],
    },
  ],
  '09-12': [
    {
      label: '④ 沖縄で (09-12)',
      setupPt: 'Em Okinawa, uma expressão com しましょうね e a palavra でーじ confundem o viajante.',
      lines: [
        { speaker: '帰る客', ja: 'マスター、そろそろ、{帰|かえ}りましょうねー。', pt: 'Mestre, vou indo agora.' },
        { speaker: 'マスター', ja: 'はーい、ありがとねー。', pt: 'Certo, obrigado.' },
        { speaker: '旅行客', ja: 'え？ あ、もう{閉店|へいてん}ですか？ {私|わたし}も{帰|かえ}ったほうがいいですか？ ……あれ、1{人|ひとり}で{帰|かえ}っちゃった。', pt: 'Hã? Já está fechando? É melhor eu ir embora também? ...Ué, ele foi embora sozinho.' },
        { speaker: 'マスター', ja: '{沖縄|おきなわ}ではね、「なになにしましょうね」っていうのは、ほかの{人|ひと}を{誘|さそ}ってるんじゃなくて、「{自分|じぶん}がしますね」って{意味|いみ}で{使|つか}うわけよー。', pt: 'Em Okinawa, “vamos fazer tal coisa, né” não é convite para outras pessoas; é usado no sentido de “eu vou fazer”.' },
        { speaker: '旅行客', ja: 'そうなんですか。みんないっしょに{帰|かえ}りましょうって{言|い}われてるんだと{思|おも}いました。おもしろいですね。', pt: 'É mesmo? Achei que ele estava dizendo “vamos todos embora juntos”. Que interessante.' },
        { speaker: 'マスター', ja: 'そうだね。でーじおもしろいねー。', pt: 'Pois é. É muito interessante.' },
        { speaker: '旅行客', ja: 'でーじ？ 「でーじ」はどういう{意味|いみ}ですか？', pt: 'Deeji? O que significa “deeji”?' },
        { speaker: 'マスター', ja: 'でーじは、「とっても」っていう{意味|いみ}さー。', pt: 'Deeji significa “muito”.' },
      ],
    },
  ],
  '09-13': [
    { label: '話すモデル - 方言がわからない① (09-13)', lines: [{ speaker: 'A', ja: 'そこの{台車|だいしゃ}、なおしといて。', pt: 'Guarde aquele carrinho ali.' }, { speaker: 'B', ja: 'え、どういう{意味|いみ}ですか？', pt: 'Hã, o que significa?' }, { speaker: 'A', ja: 'えっと、{片付|かたづ}けといて、しまっといて、ゆう{意味|いみ}。', pt: 'Bem, significa deixar arrumado, guardar.' }] },
  ],
  '09-14': [
    { label: '話すモデル - 方言がわからない② (09-14)', lines: [{ speaker: 'A', ja: 'そこの{台車|だいしゃ}、なおしといて。', pt: 'Guarde aquele carrinho ali.' }, { speaker: 'B', ja: 'え、なおしといて？', pt: 'Hã, “naoshitoite”?' }, { speaker: 'A', ja: 'えっと、{片付|かたづ}けといて、しまっといて、ゆう{意味|いみ}。', pt: 'Bem, significa deixar arrumado, guardar.' }] },
  ],
  '09-15': [
    { label: '話すモデル - 方言がわからない③ (09-15)', lines: [{ speaker: 'A', ja: 'そこの{台車|だいしゃ}、なおしといて。', pt: 'Guarde aquele carrinho ali.' }, { speaker: 'B', ja: 'すみません、ちょっとわかりません……{方言|ほうげん}でしょうか……。', pt: 'Desculpe, não entendi muito bem... É dialeto?' }, { speaker: 'A', ja: 'えっと、{片付|かたづ}けといて、しまっといて、ゆう{意味|いみ}。', pt: 'Bem, significa deixar arrumado, guardar.' }] },
  ],
  '09-16': [
    { label: '話すモデル - 方言がわからない④ (09-16)', lines: [{ speaker: 'A', ja: 'そこの{台車|だいしゃ}、なおしといて。', pt: 'Guarde aquele carrinho ali.' }, { speaker: 'B', ja: 'え、{壊|こわ}れてるんですか？', pt: 'Hã, está quebrado?' }, { speaker: 'A', ja: 'えっと、{片付|かたづ}けといて、しまっといて、ゆう{意味|いみ}。', pt: 'Bem, significa deixar arrumado, guardar.' }] },
  ],
  '09-17': [
    {
      label: 'ことばの準備 - 日本語の勉強を始めたきっかけ (09-17)',
      lines: [
        { speaker: '語彙', ja: '{日本|にほん}のアニメやマンガが{好|す}き。', pt: 'Gosta de anime ou mangá japonês.' },
        { speaker: '語彙', ja: '{日本|にほん}の{伝統文化|でんとうぶんか}に{興味|きょうみ}がある。', pt: 'Tem interesse em cultura tradicional japonesa.' },
        { speaker: '語彙', ja: '{日本語|にほんご}に{興味|きょうみ}がある。', pt: 'Tem interesse na língua japonesa.' },
        { speaker: '語彙', ja: '{学校|がっこう}の{必修科目|ひっしゅうかもく}だった。', pt: 'Era disciplina obrigatória na escola.' },
        { speaker: '語彙', ja: '{日本|にほん}に{留学|りゅうがく}したい。', pt: 'Quer estudar no Japão.' },
        { speaker: '語彙', ja: '{日本|にほん}で{仕事|しごと}がしたい／{仕事|しごと}で{必要|ひつよう}。', pt: 'Quer trabalhar no Japão / é necessário para o trabalho.' },
        { speaker: '語彙', ja: '{日本旅行|にほんりょこう}がしたい。', pt: 'Quer viajar ao Japão.' },
        { speaker: '語彙', ja: '{日本|にほん}で{生活|せいかつ}することになった。', pt: 'Passou a viver no Japão.' },
        { speaker: '語彙', ja: '{家族|かぞく}／{親戚|しんせき}に{日本語|にほんご}を{話|はな}す{人|ひと}がいる。', pt: 'Há alguém na família/parente que fala japonês.' },
      ],
    },
  ],
  '09-18': [
    {
      label: 'ことばの確認 - きっかけ (09-18)',
      setupPt: 'Ouça e escolha a ilustração correspondente. A ordem segue o gabarito.',
      lines: [
        { speaker: '語彙', ja: '{日本語|にほんご}に{興味|きょうみ}がある。', pt: 'Tem interesse na língua japonesa.' },
        { speaker: '語彙', ja: '{家族|かぞく}／{親戚|しんせき}に{日本語|にほんご}を{話|はな}す{人|ひと}がいる。', pt: 'Há familiar/parente que fala japonês.' },
        { speaker: '語彙', ja: '{日本|にほん}で{仕事|しごと}がしたい／{仕事|しごと}で{必要|ひつよう}。', pt: 'Quer trabalhar no Japão / precisa no trabalho.' },
        { speaker: '語彙', ja: '{日本|にほん}のアニメやマンガが{好|す}き。', pt: 'Gosta de anime ou mangá japonês.' },
        { speaker: '語彙', ja: '{学校|がっこう}の{必修科目|ひっしゅうかもく}だった。', pt: 'Era disciplina obrigatória.' },
        { speaker: '語彙', ja: '{日本|にほん}の{伝統文化|でんとうぶんか}に{興味|きょうみ}がある。', pt: 'Tem interesse em cultura tradicional japonesa.' },
        { speaker: '語彙', ja: '{日本旅行|にほんりょこう}がしたい。', pt: 'Quer viajar ao Japão.' },
        { speaker: '語彙', ja: '{日本|にほん}に{留学|りゅうがく}したい。', pt: 'Quer estudar no Japão.' },
        { speaker: '語彙', ja: '{日本|にほん}で{生活|せいかつ}することになった。', pt: 'Passou a viver no Japão.' },
      ],
    },
  ],
  '09-19': [
    {
      label: '① クロードさん - アニメがきっかけ (09-19)',
      setupPt: 'クロード fala sobre começar por anime, fazer dublagem em clube e estudar produção de anime no Japão.',
      lines: [
        { speaker: 'A', ja: 'クロードさんが{日本語|にほんご}の{勉強|べんきょう}を{始|はじ}めたきっかけって、{何|なん}だったの？', pt: 'Claude, o que fez você começar a estudar japonês?' },
        { speaker: 'B', ja: '{日本|にほん}のアニメが{大好|だいす}きだったから。{最初|さいしょ}は{吹|ふ}き{替|か}えで{見|み}てたんだけど、{日本語|にほんご}でセリフがわかるようになりたくて、{勉強|べんきょう}しはじめたんだ。', pt: 'Porque eu adorava anime japonês. No começo eu assistia dublado, mas quis entender as falas em japonês e comecei a estudar.' },
        { speaker: 'A', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'B', ja: '{最初|さいしょ}は、アニメを{見|み}ながら、セリフをまねして、いっしょに{言|い}ったりとか。すごく{楽|たの}しかったよ。', pt: 'No começo eu imitava as falas enquanto assistia anime e falava junto. Era muito divertido.' },
        { speaker: 'A', ja: 'ふーん。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'それで、{高校生|こうこうせい}のとき、アニメ{部|ぶ}に{入|はい}ったんだ。アニメ{部|ぶ}で、{友|とも}だちといっしょに{日本|にほん}のアニメのアテレコをやったんだよ。そうしたら、すごく{盛|も}り{上|あ}がったんだ。', pt: 'Então, no ensino médio, entrei no clube de anime. No clube, fizemos dublagem de anime japonês com amigos. Aí ficou muito animado.' },
        { speaker: 'A', ja: 'アテレコって、アニメに{合|あ}わせてセリフを{言|い}うんだよね？', pt: 'Atereko é falar as falas sincronizando com o anime, né?' },
        { speaker: 'B', ja: 'そうそう。みんなすごく{喜|よろこ}んでくれて、うれしかったなあ。', pt: 'Isso. Todos ficaram muito felizes, e eu fiquei contente.' },
        { speaker: 'A', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'B', ja: 'それから{留学|りゅうがく}で{日本|にほん}に{来|き}たんだ。{今|いま}、{専門学校|せんもんがっこう}でアニメ{制作|せいさく}の{勉強|べんきょう}をしてる。{学校|がっこう}で、{仲間|なかま}がたくさんできて、{毎日|まいにち}{楽|たの}しいよ。', pt: 'Depois vim ao Japão para estudar. Agora estudo produção de anime numa escola técnica. Fiz muitos colegas na escola, e todos os dias são divertidos.' },
        { speaker: 'A', ja: 'いいね。', pt: 'Que bom.' },
        { speaker: 'B', ja: '{将来|しょうらい}は、{勉強|べんきょう}したことを{活|い}かして、アニメとかゲームとかのキャラクターをデザインする{仕事|しごと}ができればと{思|おも}ってるんだ。', pt: 'No futuro, espero poder usar o que estudei para trabalhar desenhando personagens de anime e jogos.' },
        { speaker: 'A', ja: 'そうなんだ。', pt: 'Entendi.' },
      ],
    },
  ],
  '09-20': [
    {
      label: '② ハスミンさん - 介護の仕事 (09-20)',
      setupPt: 'ハスミン fala sobre estudar japonês para trabalhar com cuidado no Japão.',
      lines: [
        { speaker: 'A', ja: 'ハスミンさんは、フィリピンで{日本語|にほんご}を{勉強|べんきょう}したの？', pt: 'Hasmin, você estudou japonês nas Filipinas?' },
        { speaker: 'B', ja: 'はい。{日本|にほん}で{介護|かいご}の{仕事|しごと}をしたいと{思|おも}ったんです。{親戚|しんせき}が{日本|にほん}で{介護士|かいごし}をしていたので……。', pt: 'Sim. Eu queria trabalhar com cuidado no Japão. Uma parente trabalhava como cuidadora no Japão...' },
        { speaker: 'A', ja: 'そう。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'それで、{日本語|にほんご}クラスに{入|はい}って、{日本語|にほんご}とか、{日本|にほん}のルールとかを{勉強|べんきょう}しました。', pt: 'Então entrei em uma turma de japonês e estudei japonês e regras do Japão.' },
        { speaker: 'A', ja: '{日本語|にほんご}、{難|むずか}しかった？', pt: 'Japonês foi difícil?' },
        { speaker: 'B', ja: 'うーん、{発音|はつおん}はあまり{難|むずか}しくなかったですね。でも、{文字|もじ}が{難|むずか}しかったです。{寮|りょう}で、よく{友|とも}だちといっしょに{勉強|べんきょう}しました。', pt: 'Hmm, a pronúncia não foi muito difícil. Mas as letras foram difíceis. No dormitório, eu estudava bastante com amigos.' },
        { speaker: 'A', ja: 'そうなんだ。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'そのあと、{日本|にほん}に{来|き}て、{働|はたら}きはじめました。でも、ことばとか{文化|ぶんか}とか、わからないことがたくさんあって{苦労|くろう}しました。{仕事|しごと}で{失敗|しっぱい}して、よく{落|お}ち{込|こ}みました。', pt: 'Depois vim ao Japão e comecei a trabalhar. Mas havia muita coisa que eu não entendia, como língua e cultura, e tive dificuldades. Eu errava no trabalho e ficava desanimada.' },
        { speaker: 'A', ja: 'そう。{大変|たいへん}だったね。', pt: 'Entendi. Deve ter sido difícil.' },
        { speaker: 'B', ja: 'はい。でも、{先輩|せんぱい}がやさしくて、よく{仕事|しごと}の{悩|なや}みを{聞|き}いてもらいました。', pt: 'Sim. Mas os veteranos eram gentis e ouviam minhas preocupações do trabalho.' },
        { speaker: 'A', ja: 'そっかー。', pt: 'Entendi.' },
        { speaker: 'B', ja: '{仕事|しごと}は{大変|たいへん}だけど、たくさん{勉強|べんきょう}して、{介護|かいご}の{仕事|しごと}を{続|つづ}けようと{思|おも}ってます。それで、フィリピンに{帰|かえ}ったら、{自分|じぶん}の{知識|ちしき}や{経験|けいけん}をほかの{介護士|かいごし}に{伝|つた}えたいと{思|おも}います。', pt: 'O trabalho é difícil, mas penso em estudar bastante e continuar o trabalho de cuidado. Depois, quando voltar às Filipinas, quero transmitir meus conhecimentos e experiências a outros cuidadores.' },
        { speaker: 'A', ja: 'そうなんだ。がんばってね。', pt: 'Entendi. Força.' },
      ],
    },
  ],
  '09-21': [
    {
      label: '③ エレンさん - 日本で生活することになった (09-21)',
      setupPt: 'エレン veio ao Japão pelo trabalho do marido e passou a estudar depois das dificuldades.',
      lines: [
        { speaker: 'A', ja: 'エレンさんは、いつから{日本語|にほんご}を{勉強|べんきょう}してるんですか？', pt: 'Ellen, desde quando você estuda japonês?' },
        { speaker: 'B', ja: '{日本|にほん}に{来|き}てからなんですよ。{夫|おっと}の{日本|にほん}での{仕事|しごと}が{決|き}まって、{私|わたし}もいっしょに{日本|にほん}で{生活|せいかつ}することになって……。', pt: 'Desde que vim ao Japão. O trabalho do meu marido no Japão foi decidido, e eu também passei a viver no Japão com ele...' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'É mesmo?' },
        { speaker: 'B', ja: 'ええ。でも、そのときは、{英語|えいご}ができればだいじょうぶって{言|い}われたので、{日本語|にほんご}の{勉強|べんきょう}はしなかったんです。', pt: 'Sim. Mas, na época, me disseram que bastava saber inglês, então não estudei japonês.' },
        { speaker: 'A', ja: 'えー。', pt: 'Nossa.' },
        { speaker: 'B', ja: '{日本語|にほんご}を{勉強|べんきょう}しないで{日本|にほん}に{来|き}たから、はじめは、{困|こま}ることがたくさんありました。', pt: 'Como vim ao Japão sem estudar japonês, no começo tive muitas dificuldades.' },
        { speaker: 'A', ja: 'え、そうだったんですか。', pt: 'Ah, foi assim?' },
        { speaker: 'B', ja: '{日本語|にほんご}ができなかったから、スーパーで{買|か}いたいものがどこにあるか{聞|き}きたいときは、{店|みせ}の{人|ひと}にスマホで{写真|しゃしん}を{見|み}せたりしてました。', pt: 'Como eu não sabia japonês, quando queria perguntar no supermercado onde ficava algo que queria comprar, eu mostrava foto no celular para os funcionários.' },
        { speaker: 'A', ja: 'それは、{大変|たいへん}でしたね。', pt: 'Isso deve ter sido difícil.' },
        { speaker: 'B', ja: 'はい。それで、{日本語学校|にほんごがっこう}に{通|かよ}いはじめました。', pt: 'Sim. Então comecei a frequentar uma escola de japonês.' },
        { speaker: 'A', ja: 'へー。', pt: 'Ah.' },
        { speaker: 'B', ja: '{日本語|にほんご}ができるようになって、{生活|せいかつ}しやすくなりました。{買|か}い{物|もの}も、いろいろな{手続|てつづ}きも、{困|こま}らなくなったし。', pt: 'Depois que passei a conseguir usar japonês, a vida ficou mais fácil. Compras e vários trâmites também deixaram de ser problema.' },
        { speaker: 'A', ja: 'よかったですね。', pt: 'Que bom.' },
        { speaker: 'B', ja: 'はい。これからは、いろんな{人|ひと}と{知|し}り{合|あ}ったり、{新|あたら}しい{趣味|しゅみ}を{見|み}つけたりして、もっと{日本|にほん}の{生活|せいかつ}を{楽|たの}しみたいと{思|おも}ってます。', pt: 'Sim. Daqui em diante, quero conhecer várias pessoas, encontrar novos hobbies e aproveitar mais a vida no Japão.' },
        { speaker: 'A', ja: 'それは、{楽|たの}しみですね。', pt: 'Isso será algo bom de esperar.' },
      ],
    },
  ],
  '09-22': [
    {
      label: '形に注目 - Vはじめる (09-22)',
      lines: [
        { speaker: 'クロード', ja: '{最初|さいしょ}は{吹|ふ}き{替|か}えで{見|み}てたんだけど、{日本語|にほんご}でセリフがわかるようになりたくて、{勉強|べんきょう}しはじめたんだ。', pt: 'No começo eu assistia dublado, mas quis entender as falas em japonês e comecei a estudar.' },
      ],
    },
  ],
  '09-23': [
    {
      label: '形に注目 - Vはじめる (09-23)',
      lines: [
        { speaker: 'ハスミン', ja: 'そのあと、{日本|にほん}に{来|き}て、{働|はたら}きはじめました。', pt: 'Depois vim ao Japão e comecei a trabalhar.' },
        { speaker: 'エレン', ja: 'それで、{日本語学校|にほんごがっこう}に{通|かよ}いはじめました。', pt: 'Então comecei a frequentar uma escola de japonês.' },
      ],
    },
  ],
  '09-24': [
    {
      label: '形に注目 - 希望を言う (09-24)',
      lines: [
        { speaker: 'クロード', ja: '{将来|しょうらい}は、{勉強|べんきょう}したことを{活|い}かして、アニメとかゲームとかのキャラクターをデザインする{仕事|しごと}ができればと{思|おも}ってるんだ。', pt: 'No futuro, espero poder usar o que estudei para desenhar personagens de anime e jogos.' },
        { speaker: 'ハスミン', ja: '{仕事|しごと}は{大変|たいへん}だけど、たくさん{勉強|べんきょう}して、{介護|かいご}の{仕事|しごと}を{続|つづ}けようと{思|おも}ってます。', pt: 'O trabalho é difícil, mas penso em estudar bastante e continuar o trabalho de cuidado.' },
        { speaker: 'ハスミン', ja: 'フィリピンに{帰|かえ}ったら、{自分|じぶん}の{知識|ちしき}や{経験|けいけん}をほかの{介護士|かいごし}に{伝|つた}えたいと{思|おも}います。', pt: 'Quando voltar às Filipinas, quero transmitir meus conhecimentos e experiências a outros cuidadores.' },
      ],
    },
  ],
  '09-25': [
    {
      label: '話すモデル - 学習経験を話す① (09-25)',
      setupPt: 'Modelo em 普通体 sobre anime como motivação.',
      lines: [
        { speaker: 'A', ja: 'どうして{日本語|にほんご}の{勉強|べんきょう}を{始|はじ}めたの？', pt: 'Por que você começou a estudar japonês?' },
        { speaker: 'B', ja: '{日本|にほん}のアニメが{大好|だいす}きだったから。{最初|さいしょ}は{吹|ふ}き{替|か}えで{見|み}てたんだけど、{日本語|にほんご}でセリフがわかるようになりたかったんだ。セリフをまねして、いっしょに{言|い}ったりしてたよ。', pt: 'Porque eu adorava anime japonês. No começo via dublado, mas queria entender as falas em japonês. Imitava as falas e dizia junto.' },
        { speaker: 'B', ja: 'それで、{高校生|こうこうせい}のとき、アニメ{部|ぶ}に{入|はい}ったんだ。{日本|にほん}のアニメのアテレコをやって、すごく{盛|も}り{上|あ}がったんだ。', pt: 'Então, no ensino médio, entrei no clube de anime. Fizemos dublagem de anime japonês e ficou muito animado.' },
        { speaker: 'B', ja: 'それから{日本|にほん}に{留学|りゅうがく}したんだ。{今|いま}、{専門学校|せんもんがっこう}でアニメ{制作|せいさく}の{勉強|べんきょう}をしてる。', pt: 'Depois vim estudar no Japão. Agora estudo produção de anime em uma escola técnica.' },
        { speaker: 'B', ja: '{将来|しょうらい}は、{勉強|べんきょう}したことを{活|い}かして、アニメとかゲームとかのキャラクターをデザインする{仕事|しごと}ができればと{思|おも}ってるんだ。', pt: 'No futuro, espero poder trabalhar desenhando personagens de anime e jogos, usando o que estudei.' },
      ],
    },
  ],
  '09-26': [
    {
      label: '話すモデル - 学習経験を話す② (09-26)',
      setupPt: 'Modelo em 丁寧体 sobre vir ao Japão e começar escola de japonês.',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}の{勉強|べんきょう}を{始|はじ}めたきっかけって、{何|なん}だったんですか？', pt: 'O que fez você começar a estudar japonês?' },
        { speaker: 'B', ja: '{夫|おっと}の{仕事|しごと}が{決|き}まって、いっしょに{日本|にほん}で{生活|せいかつ}することになったんです。', pt: 'O trabalho do meu marido foi decidido, e passamos a viver juntos no Japão.' },
        { speaker: 'B', ja: 'でも、{英語|えいご}ができればだいじょうぶって{言|い}われたので、そのときは、{日本語|にほんご}の{勉強|べんきょう}はしなかったんです。', pt: 'Mas me disseram que bastava saber inglês, então na época não estudei japonês.' },
        { speaker: 'B', ja: '{日本語|にほんご}を{勉強|べんきょう}しないで{日本|にほん}に{来|き}て、{困|こま}りました。{日本語|にほんご}ができなかったから、スーパーで{買|か}いたいものがどこにあるか{聞|き}きたいときは、{店|みせ}の{人|ひと}にスマホで{写真|しゃしん}を{見|み}せてました。', pt: 'Vim ao Japão sem estudar japonês e tive dificuldades. Como não sabia japonês, quando queria perguntar onde ficava algo no supermercado, mostrava foto no celular ao funcionário.' },
        { speaker: 'B', ja: 'それで、{日本語学校|にほんごがっこう}に{通|かよ}いはじめました。{日本語|にほんご}ができるようになって、{生活|せいかつ}しやすくなりました。', pt: 'Então comecei a frequentar escola de japonês. Quando passei a conseguir usar japonês, a vida ficou mais fácil.' },
        { speaker: 'B', ja: 'これからは、いろんな{人|ひと}と{知|し}り{合|あ}ったり、{新|あたら}しい{趣味|しゅみ}を{見|み}つけたりして、もっと{日本|にほん}の{生活|せいかつ}を{楽|たの}しみたいと{思|おも}ってます。', pt: 'Daqui em diante, quero conhecer várias pessoas, encontrar novos hobbies e aproveitar mais a vida no Japão.' },
      ],
    },
  ],
}

const L10_SCRIPTS: Record<string, ScriptItem[]> = {
  '10-01': [
    {
      label: 'ことば - 日本語の学習方法 (10-01)',
      lines: [
        { speaker: 'Narração', ja: '{日本語学校|にほんごがっこう}に{通|かよ}う／{地域|ちいき}の{日本語教室|にほんごきょうしつ}に{通|かよ}う／オンラインレッスンを{受|う}ける', pt: 'frequentar escola de japonês / frequentar aula comunitária de japonês / fazer aulas online' },
        { speaker: 'Narração', ja: '{本|ほん}で{勉強|べんきょう}する／{日本|にほん}のアニメを{見|み}る／{日本|にほん}のドラマを{見|み}る', pt: 'estudar por livros / ver anime japonês / ver dramas japoneses' },
        { speaker: 'Narração', ja: 'テレビ／ラジオの{日本語講座|にほんごこうざ}で{勉強|べんきょう}する／{日本語学習|にほんごがくしゅう}サイトで{勉強|べんきょう}する／{日本語学習|にほんごがくしゅう}アプリで{勉強|べんきょう}する', pt: 'estudar por curso de japonês na TV/rádio / estudar em site de aprendizagem / estudar em app de aprendizagem' },
        { speaker: 'Narração', ja: 'AIを{使|つか}う／タンデム{学習|がくしゅう}をする／{日本人|にほんじん}の{友|とも}だちを{作|つく}る', pt: 'usar IA / fazer aprendizagem tandem / fazer amigos japoneses' },
      ],
    },
  ],
  '10-02': [
    {
      label: 'ことば - 聞いて選ぶ (10-02)',
      lines: [
        { speaker: 'Narração', ja: '{本|ほん}で{勉強|べんきょう}する', pt: 'estudar por livros' },
        { speaker: 'Narração', ja: 'テレビ／ラジオの{日本語講座|にほんごこうざ}で{勉強|べんきょう}する', pt: 'estudar por curso de japonês na TV ou no rádio' },
        { speaker: 'Narração', ja: '{日本|にほん}のドラマを{見|み}る', pt: 'ver dramas japoneses' },
        { speaker: 'Narração', ja: 'タンデム{学習|がくしゅう}をする', pt: 'fazer aprendizagem tandem' },
        { speaker: 'Narração', ja: 'オンラインレッスンを{受|う}ける', pt: 'fazer aulas online' },
        { speaker: 'Narração', ja: 'AIを{使|つか}う', pt: 'usar IA' },
        { speaker: 'Narração', ja: '{地域|ちいき}の{日本語教室|にほんごきょうしつ}に{通|かよ}う', pt: 'frequentar uma aula comunitária de japonês' },
        { speaker: 'Narração', ja: '{日本語学習|にほんごがくしゅう}アプリで{勉強|べんきょう}する', pt: 'estudar com app de aprendizagem de japonês' },
      ],
    },
  ],
  '10-03': [
    {
      label: '① ニコルさん - ドラマで勉強する (10-03)',
      setupPt: 'Nicole fala como usa dramas japoneses para estudar.',
      lines: [
        { speaker: 'シヴァ', ja: 'この{日本語|にほんご}クラスのほかに、もっと{日本語|にほんご}を{勉強|べんきょう}したいんだけど、ニコルさんとホンさんは、どうやって{日本語|にほんご}を{勉強|べんきょう}してる？', pt: 'Além desta aula de japonês, quero estudar mais. Nicole e Hong, como vocês estudam japonês?' },
        { speaker: 'ニコル', ja: '{私|わたし}は、ネット{配信|はいしん}で{日本|にほん}のドラマをよく{見|み}てるよ。', pt: 'Eu vejo bastante dramas japoneses por streaming.' },
        { speaker: 'シヴァ', ja: 'そうなんだ。', pt: 'Entendi.' },
        { speaker: 'ニコル', ja: '{見|み}るときは……えっと、{日本語|にほんご}で{何|なん}だっけ、subtitle を{使|つか}ってる。', pt: 'Quando assisto... como era em japonês mesmo, uso subtitle.' },
        { speaker: 'ホン', ja: '{字幕|じまく}？', pt: 'Legenda?' },
        { speaker: 'ニコル', ja: 'そうそう。{字幕|じまく}。ドラマの{配信|はいしん}って、{字幕|じまく}がつけられるでしょう？', pt: 'Isso, legenda. Em streaming de dramas dá para colocar legenda, né?' },
        { speaker: 'ニコル', ja: '{最初|さいしょ}は{字幕|じまく}をつけないで{見|み}て、{次|つぎ}に{日本語|にほんご}の{字幕|じまく}をつけて{見|み}て、{最後|さいご}に{英語|えいご}の{字幕|じまく}をつけて{見|み}る。', pt: 'Primeiro vejo sem legenda, depois vejo com legenda em japonês e, por último, com legenda em inglês.' },
        { speaker: 'シヴァ', ja: '3{回|かい}も{見|み}るの？ すごいね。', pt: 'Você assiste até três vezes? Impressionante.' },
        { speaker: 'ニコル', ja: 'その{方法|ほうほう}でいろいろドラマを{見|み}てたら、{普段|ふだん}の{生活|せいかつ}とか{仕事|しごと}とかで、{相手|あいて}の{言|い}っていることがわかるようになってきたよ。', pt: 'Depois de ver vários dramas assim, passei a entender melhor o que as pessoas dizem na vida diária e no trabalho.' },
        { speaker: 'ホン', ja: 'すごーい。', pt: 'Que incrível.' },
        { speaker: 'ニコル', ja: 'ドラマが{大好|だいす}きだから、{私|わたし}に{合|あ}ってるのかな。', pt: 'Como eu adoro dramas, talvez combine comigo.' },
        { speaker: 'シヴァ', ja: 'いいね。{今度|こんど}、ぼくもやってみよう。', pt: 'Legal. Vou tentar fazer isso qualquer hora.' },
      ],
    },
  ],
  '10-04': [
    {
      label: '② ホンさん - タンデム学習 (10-04)',
      setupPt: 'Hong explica como faz tandem com uma pessoa japonesa.',
      lines: [
        { speaker: 'シヴァ', ja: 'ホンさんは？', pt: 'E você, Hong?' },
        { speaker: 'ホン', ja: '{私|わたし}は、{日本人|にほんじん}の{人|ひと}に{教|おし}えてもらってるよ。タンデム{学習|がくしゅう}って、{知|し}ってる？', pt: 'Eu recebo ajuda de uma pessoa japonesa. Você conhece aprendizagem tandem?' },
        { speaker: 'シヴァ', ja: 'タンデム？', pt: 'Tandem?' },
        { speaker: 'ホン', ja: 'そう。{自分|じぶん}の{母語|ぼご}とか{得意|とくい}なことばを、お{互|たが}いに{教|おし}え{合|あ}うんだよ。', pt: 'Isso. Cada pessoa ensina à outra sua língua materna ou uma língua em que é boa.' },
        { speaker: 'ホン', ja: '{相手|あいて}の{日本人|にほんじん}はベトナム{語|ご}を{勉強|べんきょう}してるから、{私|わたし}がベトナム{語|ご}を{教|おし}えて、その{人|ひと}は{私|わたし}に{日本語|にほんご}を{教|おし}えてくれる。', pt: 'A pessoa japonesa estuda vietnamita, então eu ensino vietnamita e ela me ensina japonês.' },
        { speaker: 'シヴァ', ja: 'そうなんだ。どう？', pt: 'Entendi. E como é?' },
        { speaker: 'ホン', ja: 'うん、{自分|じぶん}の{言|い}いたいことが{日本語|にほんご}で{言|い}えるようになってきたと{思|おも}う。', pt: 'Acho que passei a conseguir dizer em japonês o que quero dizer.' },
        { speaker: 'シヴァ', ja: 'その{人|ひと}、{日本語|にほんご}の{先生|せんせい}なの？', pt: 'Essa pessoa é professora de japonês?' },
        { speaker: 'ホン', ja: 'ううん、{普通|ふつう}の{日本人|にほんじん}。でも、{日本人|にほんじん}が{普段|ふだん}よく{使|つか}うことばがいろいろ{覚|おぼ}えられるから、{気|き}に{入|い}ってる。', pt: 'Não, é uma pessoa japonesa comum. Mas gosto porque consigo aprender várias palavras que japoneses usam normalmente.' },
        { speaker: 'シヴァ', ja: 'そうなんだ。', pt: 'Entendi.' },
        { speaker: 'ホン', ja: 'タンデム{相手|あいて}が{探|さが}せるアプリがあるから、よかったら、{紹介|しょうかい}するね。', pt: 'Tem um app para procurar parceiros de tandem. Se quiser, eu te mostro.' },
        { speaker: 'シヴァ', ja: 'うん、ありがとう。', pt: 'Sim, obrigado.' },
      ],
    },
  ],
  '10-05': [
    {
      label: '③ シヴァさん - AIを使う (10-05)',
      setupPt: 'Shiva fala como usa IA para corrigir textos em japonês.',
      lines: [
        { speaker: 'ホン', ja: 'シヴァさんは？ {何|なに}かやってること、ある？', pt: 'E você, Shiva? Tem algo que você faça?' },
        { speaker: 'シヴァ', ja: 'うーん、{勉強|べんきょう}って{感|かん}じじゃないけど……ぼくは、AIを{使|つか}ってる。', pt: 'Hmm, não sei se parece exatamente estudo... mas eu uso IA.' },
        { speaker: 'ホン', ja: 'え、どういうこと？', pt: 'Como assim?' },
        { speaker: 'シヴァ', ja: '{例|たと}えば、ChatGPTとか。', pt: 'Por exemplo, ChatGPT.' },
        { speaker: 'ニコル', ja: 'あ、{私|わたし}も{使|つか}ってる。', pt: 'Ah, eu também uso.' },
        { speaker: 'シヴァ', ja: 'すごく{便利|べんり}だよね。{日本語|にほんご}の{文章|ぶんしょう}を{書|か}いたとき、「これでいいですか？」ってAIに{聞|き}いたら、{文法|ぶんぽう}や{表現|ひょうげん}を{直|なお}してくれるんだ。', pt: 'É muito prático, né? Quando escrevo um texto em japonês, pergunto à IA “está certo assim?” e ela corrige a gramática e as expressões.' },
        { speaker: 'ホン', ja: 'へー、{便利|べんり}なんだね。', pt: 'Nossa, é prático.' },
        { speaker: 'シヴァ', ja: '{前|まえ}は{日本語|にほんご}を{書|か}くのがすごく{苦手|にがて}だったけど、AIに{助|たす}けてもらえるから、{今|いま}は{書|か}くのがこわくなくなってきた。', pt: 'Antes eu era muito ruim em escrever japonês, mas como posso receber ajuda da IA, agora escrever tem ficado menos assustador.' },
        { speaker: 'ホン', ja: 'へー。', pt: 'Entendi.' },
        { speaker: 'シヴァ', ja: 'わからないことを{何|なん}でも{教|おし}えてくれて、{本当|ほんとう}に{助|たす}かってる。', pt: 'Ela me ensina qualquer coisa que eu não entendo, então ajuda muito.' },
        { speaker: 'ニコル', ja: 'そうそう。', pt: 'É isso mesmo.' },
        { speaker: 'ホン', ja: 'いろいろな{方法|ほうほう}があるんだね。', pt: 'Há vários métodos, né?' },
        { speaker: 'シヴァ', ja: 'そうだね。いろいろ{試|ため}してみよう。', pt: 'Pois é. Vamos experimentar vários.' },
      ],
    },
  ],
  '10-06': [
    {
      label: '形に注目 - 数量＋も (10-06)',
      lines: [
        { speaker: 'シヴァ', ja: '3{回|かい}も{見|み}るの？ すごいね。', pt: 'Você assiste até três vezes? Impressionante.' },
      ],
    },
  ],
  '10-07': [
    {
      label: '形に注目 - V-てくる (10-07)',
      lines: [
        { speaker: 'ニコル', ja: 'その{方法|ほうほう}でいろいろドラマを{見|み}てたら、{普段|ふだん}の{生活|せいかつ}とか{仕事|しごと}とかで、{相手|あいて}の{言|い}っていることがわかるようになってきたよ。', pt: 'Depois de ver vários dramas assim, passei a entender melhor o que as pessoas dizem na vida diária e no trabalho.' },
        { speaker: 'ホン', ja: '{自分|じぶん}の{言|い}いたいことが{日本語|にほんご}で{言|い}えるようになってきたと{思|おも}う。', pt: 'Acho que passei a conseguir dizer em japonês o que quero dizer.' },
        { speaker: 'シヴァ', ja: '{今|いま}は{書|か}くのがこわくなくなってきた。', pt: 'Agora escrever tem ficado menos assustador.' },
      ],
    },
  ],
  '10-08': [
    {
      label: 'ストラテジー - わからないことばを英語で言う (10-08)',
      lines: [
        { speaker: 'A', ja: '{見|み}るときは……えっと、{日本語|にほんご}で{何|なん}だっけ、subtitle を{使|つか}ってる。', pt: 'Quando assisto... como era em japonês mesmo, uso subtitle.' },
        { speaker: 'B', ja: '{字幕|じまく}？', pt: 'Legenda?' },
        { speaker: 'A', ja: 'そうそう。{字幕|じまく}。', pt: 'Isso, legenda.' },
      ],
    },
  ],
  '10-09': [
    {
      label: '話すモデル - 自分の日本語の勉強方法 (10-09)',
      lines: [
        { speaker: 'A', ja: 'どうやって{日本語|にほんご}を{勉強|べんきょう}してる？', pt: 'Como você estuda japonês?' },
        { speaker: 'B', ja: '{日本|にほん}のドラマを{見|み}てるよ。', pt: 'Vejo dramas japoneses.' },
        { speaker: 'A', ja: 'ドラマ？', pt: 'Dramas?' },
        { speaker: 'B', ja: '{最初|さいしょ}は{字幕|じまく}をつけないで{見|み}て、{次|つぎ}に{日本語|にほんご}の{字幕|じまく}をつけて{見|み}て、{最後|さいご}に{英語|えいご}の{字幕|じまく}をつけて{見|み}る。', pt: 'Primeiro vejo sem legenda, depois com legenda em japonês e, por último, com legenda em inglês.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: '{普段|ふだん}の{生活|せいかつ}とか{仕事|しごと}とかで、{相手|あいて}の{言|い}っていることがわかるようになってきた。', pt: 'Passei a entender melhor o que as pessoas dizem na vida diária e no trabalho.' },
        { speaker: 'A', ja: 'そうなんだ。', pt: 'Entendi.' },
        { speaker: 'B', ja: 'ドラマが{大好|だいす}きだから、{私|わたし}に{合|あ}ってるのかな。', pt: 'Como adoro dramas, talvez combine comigo.' },
        { speaker: 'A', ja: 'いいね。', pt: 'Legal.' },
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

const lesson2: Section = {
  id: 'lesson-2',
  level: 'pre-intermediate',
  titleJa: '第2課 ドラマを見るのがいちばん好きです',
  titlePt: 'Lição 2 - O que eu mais gosto é assistir dramas',
  summaryPt:
    'Coisas e atividades favoritas · ler comentários curtos sobre mangá, falar sobre impressões de um filme e explicar em detalhe jogos, música ou dramas de que gosta.',
  studyNotes: [
    {
      title: 'Tópico: Coisas e atividades favoritas (好きなもの好きなこと)',
      bodyPt:
        'Pergunta de abertura: あなたは、{映画|えいが}、ドラマ、{音楽|おんがく}、{読書|どくしょ}、ゲームのうち、どれが{好|す}きですか？\n\n' +
        '## Can-do\n' +
        '- Ler e entender comentários curtos e simples sobre mangá.\n' +
        '- Falar com certo detalhe a um amigo sobre um filme, incluindo opinião e comentários.\n' +
        '- Falar com certo detalhe sobre algo de que gosta, como música, jogo, drama ou esporte, explicando razões e atrativos.',
    },
    {
      title: 'Atividade 1: PR de mangás gratuitos',
      bodyPt:
        'A atividade trabalha comentários curtos de leitores sobre mangás. O gabarito classifica os gêneros assim:\n\n' +
        '| Mangá | Gênero |\n|---|---|\n' +
        '| ① | アクション |\n' +
        '| ② | ラブコメディ |\n' +
        '| ③ | ファンタジー |\n' +
        '| ④ | 家庭・育児 |\n\n' +
        'Comentários positivos no gabarito: A, C, D, E, F, H, I, J. Comentários negativos: B, G, K, L.\n\n' +
        'Vocabulário útil: テンポ (ritmo), あっという{間|ま}に (em um instante), {尊|とうと}い (precioso/admirável em linguagem de fã), なにげに (sutilmente/mais do que parece), ドキドキする (ficar empolgado ou ansioso), {追放|ついほう}する (expulsar), パターン (padrão), キャラ (personagem), {主人公|しゅじんこう} (protagonista), {共感|きょうかん} (empatia/identificação), {離婚|りこん}する (divorciar-se), モヤモヤする (ficar com sensação incômoda), モラハラ (assédio moral), むかつく (irritar).',
    },
    {
      title: 'Atividade 2: falar sobre um filme',
      bodyPt:
        'チェン e 石山 conversam sobre o filme 『SLAM DUNK』. A impressão geral de チェン é **とてもよかった**.\n\n' +
        '| Ponto | O que チェン diz |\n|---|---|\n' +
        '| {映像|えいぞう} | As imagens foram excelentes; provavelmente usaram CG e os movimentos das pessoas eram muito realistas. |\n' +
        '| {印象的|いんしょうてき}なシーン | A cena do jogo de basquete foi emocionante; a direção aumentava a tensão e ele ficou muito empolgado. |\n' +
        '| ストーリー | No geral, a história pareceu um pouco curta; ele queria saber mais sobre cada personagem, especialmente o de cabelo vermelho. |\n\n' +
        'Vocabulário de impressão positiva: とてもよかった, {迫力|はくりょく}があった, {楽|たの}しかった, すごいと{思|おも}った, {感動的|かんどうてき}だった, ドキドキした, {深|ふか}みがあった, きれいだった, すばらしかった, {興奮|こうふん}した.\n\n' +
        'Vocabulário de impressão negativa: {退屈|たいくつ}だった, {難|むずか}しかった, {物足|ものた}りなかった, {短|みじか}かった, いまいちだった, ひどかった.',
    },
    {
      title: 'Gramática ➊➋: でしょう？ e 気がする',
      bodyPt:
        '**S（普通形）でしょう？** busca concordância ou confirmação sobre algo que o falante acredita ser verdade:\n\n' +
        '- `おもしろかったでしょう？` = Foi interessante, não foi?\n' +
        '- Pode aparecer depois de forma passada, presente, afirmativa ou negativa conforme a frase-base.\n\n' +
        '**S（普通形）気がする** suaviza uma impressão ou opinião. A lição usa isso para comentários que poderiam soar negativos:\n\n' +
        '- `ストーリーがちょっと{短|みじか}かった{気|き}がしました。`\n' +
        '- `そこが、なんだか{物足|ものた}りなかった{気|き}がします。`\n' +
        '- Com adjetivo ナ, use `ナA-な気がする`: `いまいちな{気|き}がしました`.',
    },
    {
      title: 'Estratégia: pensar enquanto fala',
      bodyPt:
        'A faixa 02-05 destaca preenchimentos naturais que ajudam a manter a conversa enquanto você organiza a ideia:\n\n' +
        '- `そうですね、えっと、まず、{映像|えいぞう}がすばらしかったです。`\n' +
        '- `{盛|も}り{上|あ}がる{演出|えんしゅつ}で、なんていうか、すごく{興奮|こうふん}しました。`\n' +
        '- `ただ……{全体的|ぜんたいてき}に、んー、ストーリーがちょっと{短|みじか}かった{気|き}がしました。`\n' +
        '- `そのー、もう{少|すこ}しくわしく{知|し}りたいと{思|おも}いました。`',
    },
    {
      title: 'Atividade 3: falar sobre coisas favoritas',
      bodyPt:
        'No restaurante, 婷婷, ノン e アマンダ falam sobre jogos, música e dramas.\n\n' +
        '| Pessoa | Gosta de | Especificamente | O que é |\n|---|---|---|---|\n' +
        '| 婷婷 | ゲーム | 『刀剣乱舞 ONLINE』 | Jogo em que personagens nascidos de espadas japonesas lutam contra inimigos que tentam mudar a história. |\n' +
        '| ノン | {音楽|おんがく} | {米津玄師|よねづけんし} | Singer-songwriter japonês; 『Lemon』 é uma música famosa. |\n' +
        '| アマンダ | ドラマ | 『{孤独|こどく}のグルメ』 | Drama em que 五郎さん entra sozinho em restaurantes e refeitórios pelo Japão e aproveita a refeição. |\n\n' +
        'Atrativos principais: 婷婷 fala que os personagens são interessantes e que dá para aproveitar além do jogo; ノン fala da melodia bonita e variedade de gêneros; アマンダ fala do jeito de comer de 五郎さん e da variedade dos lugares e comidas.',
    },
    {
      title: 'Gramática ➌➍: って N e conectores',
      bodyPt:
        '**S（普通形）って N** explica informalmente que tipo de coisa algo é. Em registro formal/escrito, a forma equivalente é **という**.\n\n' +
        '- `{歴史|れきし}を{変|か}えようとする{敵|てき}と{戦|たたか}うってゲームです。`\n' +
        '- `{食事|しょくじ}を{楽|たの}しむってドラマです。`\n\n' +
        '**Conectores para listar razões e atrativos:**\n\n' +
        '- `それに、ゲームだけじゃなくて、{舞台|ぶたい}とかミュージカルとかアニメとかもあって、いろいろ{楽|たの}しめるんです。`\n' +
        '- `あと、{毎回|まいかい}バラエティがあって、{楽|たの}しいです。`\n\n' +
        'A nota também reúne conectores como だから, それで／で, でも, それと, ただ, それから, そうしたら／そしたら.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {共感|きょうかん}, {主人公|しゅじんこう}, {映像|えいぞう}, {原作|げんさく}, {歌詞|かし}, {俳優|はいゆう}, お{腹|なか}, {深|ふか}み, {演|えん}じる, {探|さが}す, {死|し}ぬ.\n\n' +
        '**Frases-modelo:**\n' +
        '1. あのマンガはストーリーに{深|ふか}みがあったし、{共感|きょうかん}もできた。\n' +
        '2. {原作|げんさく}では、{主人公|しゅじんこう}は{死|し}んでしまいます。\n' +
        '3. イケメン{俳優|はいゆう}がゲームのキャラクターを{演|えん}じています。\n' +
        '4. {映像|えいぞう}が、すばらしかったです。\n' +
        '5. 『{孤独|こどく}のグルメ』を{見|み}ていると、お{腹|なか}がすきます。\n' +
        '6. いい{曲|きょく}だったので、{歌詞|かし}を{探|さが}して{歌|うた}ってみました。',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**マンガを読む:** apps de mangá para smartphone/tablet permitem ler capítulos grátis, assistir anúncios ou esperar para continuar. Comentários curtos de leitores ajudam a aprender vocabulário real de opinião.\n\n' +
        '**オノマトペ:** expressões de som, movimento, estado e sentimento. A lição mostra ワンワン, ピューピュー, ごろごろ, ピカピカ, イライラ, わくわく, ガーン, ザーザー, ポツポツ, しとしと e シーン.\n\n' +
        '**ふりがなの特別な用法:** em mangás e letras, furigana pode indicar leitura criativa ou sentido extra, não apenas a leitura padrão do kanji.\n\n' +
        '**『SLAM DUNK』 e mangás de esporte:** SLAM DUNK foi publicado de 1990 a 1996 e mostra basquete, crescimento do protagonista e dramas dos personagens. A lição também cita obras esportivas como 『キャプテン翼』, 『ハイキュー!!』 e 『テニスの王子様』.\n\n' +
        '**マンガのメディア展開:** mangás populares viram anime, filmes, dramas live-action, peças, musicais e até kabuki. O termo 2.5次元 é usado para adaptações de mundos 2D em palco real.\n\n' +
        '**『刀剣乱舞 ONLINE』:** jogo online iniciado em 2015 em que espadas japonesas viram personagens. A popularidade também levou fãs a museus e santuários com espadas reais.\n\n' +
        '**米津玄師:** singer-songwriter japonês que começou na internet como ハチ, passou a atuar com seu nome real em 2012 e é conhecido por músicas como 『Lemon』.\n\n' +
        '**グルメドラマ e 『孤独のグルメ』:** dramas centrados em comida muitas vezes mostram restaurantes reais e podem motivar 聖地巡礼, visitas aos locais que aparecem nas obras.',
    },
  ],
  groups: [lesson2Group],
  audios: attachScripts(2, L2_SCRIPTS),
}

const lesson3: Section = {
  id: 'lesson-3',
  level: 'pre-intermediate',
  titleJa: '第3課 引っ越しの準備はどうですか？',
  titlePt: 'Lição 3 - Como estão os preparativos da mudança?',
  summaryPt:
    'Onde morar · ler informações de imóveis, ouvir recomendações de bairros e pedir ajuda educadamente para uma mudança.',
  studyNotes: [
    {
      title: 'Tópico: Onde morar? (どこに住む？)',
      bodyPt:
        'Perguntas de abertura: {引|ひ}っ{越|こ}しをしたことがありますか？ {引|ひ}っ{越|こ}しをするなら、どんな{部屋|へや}に{住|す}みたいですか？\n\n' +
        '## Can-do\n' +
        '- Ver informações de imóveis em um site de moradia e encontrar dados necessários, como aluguel, tamanho e localização.\n' +
        '- Ouvir comentários simples sobre bairros recomendados para mudança e entender os motivos.\n' +
        '- Pedir ajuda a amigos ou colegas para mudança, e aceitar ou recusar quando alguém pedir ajuda.',
    },
    {
      title: 'Atividade 1: 物件情報',
      bodyPt:
        'A atividade lê informações de imóveis em um 住宅情報サイト. Os pontos principais de leitura são:\n\n' +
        '| Item | Sentido |\n|---|---|\n' +
        '| {家賃|やちん} | aluguel |\n' +
        '| {交通|こうつう} | acesso/transporte |\n' +
        '| {築年数|ちくねんすう} | anos desde a construção |\n' +
        '| {間取|まど}り | planta/disposição dos cômodos |\n' +
        '| {部屋|へや}の{階|かい} | andar do quarto |\n' +
        '| {設備|せつび} | instalações/equipamentos |\n\n' +
        'Vocabulário de planta: ワンルーム = um cômodo; 2K = dois cômodos e cozinha; 2LDK = dois cômodos mais living, dining e kitchen; {和室|わしつ} = quarto japonês; {洋室|ようしつ} = quarto ocidental; ～{階建|かいだて} = prédio de X andares.\n\n' +
        'Características do gabarito: ①ルスコアール = estação e rua comercial próximas; ②高田ハイツ = cozinha ampla; ③グランヒルズ壱番館 = quarto novo; ④つばき荘 = aluguel barato.',
    },
    {
      title: 'Atividade 2: bairros recomendados',
      bodyPt:
        '馬 quer sair do dormitório da empresa e pergunta aos colegas: `{住|す}むなら、どのあたりがおすすめですか？`\n\n' +
        '| Bairro | Tipo | Bons pontos | Pontos ruins |\n|---|---|---|---|\n' +
        '| {月見台|つきみだい} | おしゃれな町 | cafés elegantes | aluguel caro; não há supermercado barato |\n' +
        '| {芝浜|しばはま} | {下町|したまち}っぽい{雰囲気|ふんいき} | rua comercial; aluguel não tão alto | barulhento à noite |\n' +
        '| {北|きた}ニュータウン | {郊外|こうがい}の{住宅地|じゅうたくち} | tranquilo; parque grande | transporte inconveniente |\n' +
        '| {沢口|さわぐち} | internacional | interessante; imobiliárias que falam língua estrangeira | longe da empresa |',
    },
    {
      title: 'Gramática ➊➋: なら e っぽい',
      bodyPt:
        '**S（普通形）なら** apresenta uma condição ou premissa antes de perguntar, sugerir, aconselhar ou oferecer:\n\n' +
        '- `{住|す}むなら、どのあたりがおすすめですか？`\n' +
        '- `{家賃|やちん}が{安|やす}いところがいいなら、{芝浜|しばはま}はどう？`\n' +
        '- `1{人|ひとり}で{住|す}むなら、ワンルームで{十分|じゅうぶん}ですよ。`\n\n' +
        '**Nっぽい** significa que algo tem sensação, aparência ou traço parecido com N:\n\n' +
        '- `{下町|したまち}っぽい{雰囲気|ふんいき}ですね。`\n' +
        '- `ホテルっぽくておしゃれだ。`\n' +
        '- Também aparece em palavras fixas como {油|あぶら}っぽい, {子|こ}どもっぽい, {安|やす}っぽい, {怒|おこ}りっぽい, {忘|わす}れっぽい.',
    },
    {
      title: 'Atividade 3: pedir ajuda para mudança',
      bodyPt:
        'スジャン está se mudando e conversa com 堀川, 町村 e イムラン durante o almoço.\n\n' +
        '- Preparação atual: `{荷物|にもつ}をまとめたり、{掃除|そうじ}をしたりして、{大変|たいへん}です`.\n' +
        '- Ele não reservou 引っ越し業者 porque mora sozinho e não tem muita bagagem.\n' +
        '- Data: 今月の30日.\n' +
        '- 堀川 aceita ajudar a carregar a bagagem.\n' +
        '- 町村 oferece carro e direção.\n' +
        '- イムラン recusa porque tem planos.\n' +
        '- スジャン oferece pagar o jantar do dia; 堀川 brinca que espera 焼肉.',
    },
    {
      title: 'Gramática ➌: V-てもらえたら',
      bodyPt:
        '**V-てもらえたら + sentimento** comunica educadamente o que você gostaria que alguém fizesse por você. É a forma potencial de V-てもらう com たら.\n\n' +
        '- `{引|ひ}っ{越|こ}しを{手伝|てつだ}ってもらえたら、とてもありがたいんですが。`\n' +
        '- `{荷物|にもつ}を{運|はこ}ぶのを{手伝|てつだ}ってもらえたら、とても{助|たす}かります。`\n' +
        '- `そうしてもらえたら、すごくうれしいです。`\n\n' +
        'Depois de V-てもらえたら, a lição usa ありがたいです, 助かります e うれしいです. A frase também pode terminar com んですが para soar menos direta.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {引|ひ}っ{越|こ}し, {家賃|やちん}, {築|ちく}～{年|ねん}, {住宅地|じゅうたくち}, {荷物|にもつ}, {冷蔵庫|れいぞうこ}, {電子|でんし}レンジ, ～{県|けん}, ～{区|く}.\n\n' +
        '**Frases-modelo:**\n' +
        '1. {埼玉県|さいたまけん}に{住|す}んでいます。\n' +
        '2. {南区|みなみく}は、{住宅地|じゅうたくち}で{住|す}みやすいです。\n' +
        '3. {引|ひ}っ{越|こ}しの{荷物|にもつ}をまとめています。\n' +
        '4. このアパートは、{築|ちく}3{年|ねん}で、{新|あたら}しいです。\n' +
        '5. {家賃|やちん}が{安|やす}いところがいいです。\n' +
        '6. {冷蔵庫|れいぞうこ}と{電子|でんし}レンジを{運|はこ}んでもらえませんか？',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**日本特有の単位:** 畳 e 坪 indicam tamanho/área de quartos, terrenos e imóveis; 合 e 升 indicam quantidade de arroz, saquê e outros líquidos/grãos.\n\n' +
        '**部屋を借りる:** procurar quarto no Japão normalmente envolve 不動産会社 e sites como SUUMO/HOME’S. A lição explica 敷金, 礼金, 契約期間, 更新, 保証人 e 保証会社.\n\n' +
        '**部屋の向き:** quartos voltados ao sul são populares por receberem sol; quartos ao norte podem ser frios no inverno e dificultar secagem de roupa.\n\n' +
        '**ユニットバス:** no uso comum, costuma indicar banheiro com chuveiro/banheira, vaso e pia no mesmo espaço.\n\n' +
        '**プロパンガス:** a moradia pode usar 都市ガス ou プロパンガス. O gás de cidade tende a ser mais barato; o propano pode variar por empresa.\n\n' +
        '**外国人の入居:** ainda pode haver recusas por medo de problemas de idioma/cultura, mas há mais imóveis e imobiliárias com suporte para estrangeiros.\n\n' +
        '**引っ越しの手続き:** antes da mudança, avise locador/imobiliária, faça 転出届 ou 転居届, organize eletricidade/água/gás/internet e encaminhamento postal. Depois, faça 転入届 em até 14 dias, confirme serviços e atualize endereço em documentos e contratos.',
    },
  ],
  groups: [lesson3Group],
  audios: attachScripts(3, L3_SCRIPTS),
}

const lesson4: Section = {
  id: 'lesson-4',
  level: 'pre-intermediate',
  titleJa: '第4課 エアコンが壊れたみたいなんですが…',
  titlePt: 'Lição 4 - Parece que o ar-condicionado quebrou...',
  summaryPt:
    'Onde morar · relatar problemas da casa, fazer e receber reclamações de moradia e falar com detalhes sobre o lugar onde mora.',
  studyNotes: [
    {
      title: 'Tópico: Onde morar? (どこに住む？)',
      bodyPt:
        'Pergunta de abertura: {今|いま}、どんなところに{住|す}んでいますか？ その{部屋|へや}／{家|いえ}は、{気|き}に{入|い}っていますか？\n\n' +
        '## Can-do\n' +
        '- Relatar a um gerente, proprietário ou administradora um problema relacionado à casa e receber orientação ou providência.\n' +
        '- Explicar uma situação de ruído ou convivência e transmitir uma reclamação à administração.\n' +
        '- Receber uma reclamação da administração e responder explicando sua situação.\n' +
        '- Falar com algum detalhe sobre o conforto, o entorno e os pontos bons/ruins do lugar onde mora.',
    },
    {
      title: 'Atividade 1: problemas da casa',
      bodyPt:
        'A atividade apresenta vocabulário de problemas de moradia e quatro ligações para imobiliária, administradora ou proprietário.\n\n' +
        '| Faixa | Problema | Situação | O que fazer |\n|---|---|---|---|\n' +
        '| 04-03 | {水漏|みずも}れしている | {洗面台|せんめんだい}の{下|した}から{水|みず}が{漏|も}れている | Esperar o técnico no quarto. |\n' +
        '| 04-04 | エアコンが{壊|こわ}れた | {冷房|れいぼう}にしても{冷|つめ}たい{空気|くうき}が{出|で}てこない | Esperar ligação do prestador. |\n' +
        '| 04-05 | ハチの{巣|す}ができた | ベランダの{天井|てんじょう}にある | Procurar uma empresa por conta própria e avisar depois. |\n' +
        '| 04-06 | {鍵|かぎ}をなくした | {買|か}い{物|もの}に{行|い}ったときになくしたみたい | Esperar o proprietário na frente do quarto. |\n\n' +
        'Frases úteis: `{部屋番号|へやばんごう}とご{契約者様|けいやくしゃさま}のお{名前|なまえ}をお{願|ねが}いいたします`, `どのような{状態|じょうたい}でしょうか`, `{修理業者|しゅうりぎょうしゃ}を{手配|てはい}します`.',
    },
    {
      title: 'Gramática ➊➋➌: みたいだ e formas polidas',
      bodyPt:
        '**S（普通形）みたいだ** expressa uma conclusão provável a partir do que se viu, sentiu ou viveu. Também suaviza a afirmação:\n\n' +
        '- `エアコンが{壊|こわ}れたみたいなんですが……。`\n' +
        '- `{買|か}い{物|もの}に{行|い}ったときになくしたみたいです。`\n\n' +
        '**お／ご + N** mostra respeito ao falar de algo ligado ao ouvinte: `お{電話番号|でんわばんごう}`, `ご{都合|つごう}`, `お{時間|じかん}`, `お{部屋|へや}`.\n\n' +
        '**お／ご + Vください** dá instruções ou faz pedidos de forma polida: `お{待|ま}ちください`, `ご{連絡|れんらく}ください`, `お{電話|でんわ}ください`.',
    },
    {
      title: 'Atividade 2: transmitir uma reclamação',
      bodyPt:
        'カタリーナ liga para a sala do gerente para reclamar do barulho da máquina de lavar no andar de cima.\n\n' +
        '| Ponto | Conteúdo |\n|---|---|\n' +
        '| Problema | A pessoa do quarto de cima lava roupa tarde da noite. |\n' +
        '| Causa provável | Pessoa do 2º andar. |\n' +
        '| Frequência e horário | Todos os dias, por volta das 23h, às vezes passando de meia-noite. |\n' +
        '| Por que incomoda | Ela quer dormir cedo, mas o som da máquina de lavar é barulhento e ela não consegue dormir. |\n' +
        '| Pedido | `すみません、{注意|ちゅうい}してもらえませんか？` |\n\n' +
        'A estratégia da atividade é **前置きをする**: começar com uma abertura como `あのう、すみません、ちょっと{相談|そうだん}があるんですが……` antes de entrar no assunto.',
    },
    {
      title: 'Atividade 3: receber uma reclamação',
      bodyPt:
        'O gerente visita マテオ porque outros moradores reclamaram que alguém usa a máquina de lavar todas as noites e o barulho incomoda.\n\n' +
        'マテオ explica a rotina: sai de casa por volta das 8h para trabalhar, volta por volta das 21h depois de jantar, fala online com família e amigos e só então lava a roupa, o que acaba ficando perto das 23h.\n\n' +
        'Ele não sabia que isso era problema. Decide voltar um pouco mais cedo e lavar logo, terminando até 21h.',
    },
    {
      title: 'Gramática ➍: 迷惑の受身',
      bodyPt:
        '**V-（ら）れる** como **迷惑の受身** descreve a ação de alguém do ponto de vista da pessoa que se sente incomodada. A ação não precisa ser dirigida diretamente a ela, mas causa problema ou incômodo.\n\n' +
        '- `{遅|おそ}い{時間|じかん}に{音|おと}を{出|だ}されると{困|こま}る{人|ひと}もいますからね。`\n' +
        '- `{隣|となり}の{人|ひと}にたばこを{吸|す}われた。`\n' +
        '- `{子|こ}どもに{廊下|ろうか}でうるさくされた。`\n\n' +
        'Costuma aparecer com expressões de incômodo, como {困|こま}る, {迷惑|めいわく}だ, {気分|きぶん}が{悪|わる}い, {眠|ねむ}れなかった.',
    },
    {
      title: 'Atividade 4: falar sobre onde mora',
      bodyPt:
        'ウェンシン, シティ e クリスティン falam sobre o lugar onde moram.\n\n' +
        '| Pessoa | Moradia | Pontos bons | Pontos ruins | Desejo |\n|---|---|---|---|---|\n' +
        '| ウェンシン | Apartamento, {一人暮|ひとりぐ}らし | {自由|じゆう}で{快適|かいてき}; {場所|ばしょ}が{便利|べんり} | {部屋|へや}がせまい | {少|すこ}し{広|ひろ}い{部屋|へや} |\n' +
        '| シティ | {会社|かいしゃ}の{寮|りょう} | お{金|かね}がかからない; {通勤|つうきん}が{楽|らく} | {同|おな}じ{部屋|へや}の{人|ひと}と{生活|せいかつ}リズムが{合|あ}わない | アパートで{一人暮|ひとりぐ}らし |\n' +
        '| クリスティン | {友|とも}だちと{古|ふる}い{一戸建|いっこだ}て | ゆったり{暮|く}らせる; {近所|きんじょ}の{人|ひと}が{親切|しんせつ} | {冬|ふゆ}が{寒|さむ}い | {寒|さむ}くない{家|いえ} |',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {洗面台|せんめんだい}, {洗濯機|せんたくき}, {換気扇|かんきせん}, {一戸建|いっこだ}て, {庭|にわ}, {通勤|つうきん}, バス{停|てい}, {田|た}んぼ, {林|はやし}, {鳥|とり}.\n\n' +
        '**Frases-modelo:**\n' +
        '1. バス{停|てい}が{近|ちか}いので、{通勤|つうきん}に{便利|べんり}です。\n' +
        '2. {友|とも}だちと3{人|にん}で、{一戸建|いっこだ}てに{住|す}んでいます。\n' +
        '3. {庭|にわ}の{木|き}に{鳥|とり}が{巣|す}を{作|つく}っています。\n' +
        '4. {換気扇|かんきせん}が{動|うご}かないんです。\n' +
        '5. {洗面台|せんめんだい}が{水漏|みずも}れしています。\n' +
        '6. {洗濯機|せんたくき}の{音|おと}がうるさくて、{眠|ねむ}れません。',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**家のトラブル:** em moradia alugada, primeiro entre em contato com o proprietário ou a administradora. Consertar por conta própria pode gerar problemas de reembolso ou cobrança na saída. Confira antes o contrato, a 入居のしおり e contatos de emergência.\n\n' +
        '**ハチの巣:** ninhos de vespa podem aparecer da primavera ao outono em varandas, beirais e unidades externas de ar-condicionado. Como pode ser perigoso, especialmente com スズメバチ, avise o proprietário/administradora antes de tentar resolver.\n\n' +
        '**家の苦情:** barulho, lixo, cheiro de comida, objetos em áreas comuns, bicicleta estacionada sem permissão, cigarro, crianças correndo e pets podem gerar conflito em moradia coletiva. A lição recomenda evitar confronto direto quando possível e pedir mediação da administradora ou do proprietário.',
    },
  ],
  groups: [lesson4Group],
  audios: attachScripts(4, L4_SCRIPTS),
}

const lesson5: Section = {
  id: 'lesson-5',
  level: 'pre-intermediate',
  titleJa: '第5課 どんなお店がいいですか？',
  titlePt: 'Lição 5 - Que tipo de restaurante você prefere?',
  summaryPt:
    'Refeições do dia a dia · pedir em tablet, recomendar restaurantes, escrever impressões simples e entender explicações sobre comidas regionais.',
  studyNotes: [
    {
      title: 'Tópico: Refeições do dia a dia (毎日の食事)',
      bodyPt:
        'Pergunta de abertura: おすすめのレストランがありますか？ どんなお{店|みせ}ですか？\n\n' +
        '## Can-do\n' +
        '- Pedir comidas e bebidas usando um tablet de pedidos em restaurante.\n' +
        '- Falar com algum detalhe sobre restaurante recomendado no Japão, incluindo tipo de lugar, pratos, preço, sabor e atmosfera.\n' +
        '- Escrever um post simples em SNS sobre um restaurante onde foi.\n' +
        '- Ouvir apresentação de comidas regionais/desconhecidas e entender origem, ingredientes e preparo em linhas gerais.',
    },
    {
      title: 'Atividade 1: pedido por tablet',
      bodyPt:
        'A situação é em um family restaurant: duas pessoas estão olhando o 注文用タブレット na mesa. O gabarito começa selecionando **2人** e depois **注文を開始する**.\n\n' +
        'Vocabulário de tela e menu: {麺|めん} (noodles), {和食|わしょく} (comida japonesa), {丼|どんぶり} (tigela de arroz), パスタ, サイドメニュー, {持|も}ち{帰|かえ}り, ライス, {少|すく}なめ, キャンセル, {下記|かき}, {送信|そうしん}する, {税込|ぜいこみ}, {数量|すうりょう}, {小計|しょうけい}, ドリンクバー, {合計|ごうけい}, アレルゲン, {注文履歴|ちゅうもんりれき}.',
    },
    {
      title: 'Atividade 2: restaurante tailandês recomendado',
      bodyPt:
        '山本 pergunta a ナパー por um bom restaurante tailandês. Condições de 山本: não muito caro, comida tailandesa autêntica, bebida, boa atmosfera e fácil de entrar sozinho.\n\n' +
        '| Ponto | Conteúdo |\n|---|---|\n' +
        '| Nome/lugar | イサーン, em {十条|じゅうじょう} |\n' +
        '| Tipo | {居酒屋|いざかや} com balcão; dá para comer comida tailandesa casualmente |\n' +
        '| Preço | Pratos por volta de 600円 |\n' +
        '| Pratos | ソムタム, トムヤムクン e pratos regionais como サイウア |\n' +
        '| Sabor | {本格的|ほんかくてき}; se pedir, fazem com a {本場|ほんば}の{辛|から}さ |\n' +
        '| Recomendação | タイの{焼酎|しょうちゅう} |\n' +
        '| Atmosfera | A mãe conversa bastante; ambiente divertido |',
    },
    {
      title: 'Gramática ➊➋: みたいな e ～さ',
      bodyPt:
        '**N1みたいなN2** explica algo comparando com algo parecido:\n\n' +
        '- `サイウアは、ソーセージみたいな{料理|りょうり}です。`\n' +
        '- `キンパは、おすしみたいな{食|た}べ{物|もの}です。`\n\n' +
        '**イA-さ／ナA-さ** transforma adjetivos em substantivos que indicam grau ou qualidade:\n\n' +
        '- `{辛|から}い` → `{辛|から}さ`\n' +
        '- `{高|たか}い` → `{高|たか}さ`\n' +
        '- `いい` → `よさ`.',
    },
    {
      title: 'Estratégia: palavra esquecida',
      bodyPt:
        'Quando não lembra uma palavra, descreva suas características e deixe a outra pessoa ajudar:\n\n' +
        '- `何でしたっけ、お{米|こめ}から{作|つく}る、{透明|とうめい}で、ちょっと{強|つよ}いお{酒|さけ}……。`\n' +
        '- 山本 entende e sugere: `{焼酎|しょうちゅう}？`\n\n' +
        'O gabarito propõe a mesma estratégia para palavras como {納豆|なっとう}, わさび e {茶碗蒸|ちゃわんむ}し.',
    },
    {
      title: 'Atividade 3: post em SNS',
      bodyPt:
        'O exemplo de post apresenta um restaurante de もんじゃ{焼|や}き. A pessoa comeu **もち{明太子|めんたいこ}もんじゃ**, お{好|この}み{焼|や}き e {焼|や}きそば. A impressão foi simples e direta: estava muito gostoso e quer ir de novo.\n\n' +
        'A tarefa pede escrever sobre um restaurante visitado recentemente, o que comeu e como foi. Se possível, usar foto.',
    },
    {
      title: 'Atividade 4: comidas regionais',
      bodyPt:
        'Quatro pessoas explicam comidas regionais ou desconhecidas.\n\n' +
        '| Faixa | Lugar da conversa | Prato e região | Ingredientes/pontos |\n|---|---|---|---|\n' +
        '| 05-06 | {知人|ちじん}の{家|いえ} | きりたんぽ, {秋田|あきた} | feito de {米|こめ}; arroz amassado em volta de bastão, endurecido e assado |\n' +
        '| 05-07 | {居酒屋|いざかや} | ドゥル{天|てん}, {沖縄|おきなわ} | {田芋|ターンム}, {豚肉|ぶたにく}, だし; moldado e frito; combina com bebida |\n' +
        '| 05-08 | {寮|りょう}の{食堂|しょくどう} | しもつかれ, {栃木|とちぎ} | ニンジン, ダイコン, サケ, {大豆|だいず}, {油揚|あぶらあ}げ, {酒粕|さけかす}; prato de inverno feito de sobras |\n' +
        '| 05-09 | {友|とも}だちの{家|いえ} | みそピーナッツ, {千葉|ちば} | ピーナッツ, みそ, {砂糖|さとう}; petisco ou em cima do arroz |',
    },
    {
      title: 'Gramática ➌: やつ',
      bodyPt:
        '**S（普通形）やつ** evita repetir uma palavra já clara no contexto. É casual; em fala mais neutra/formal, pode ser trocado por もの.\n\n' +
        '- `これをさらに{丸|まる}めて、{油|あぶら}で{揚|あ}げたやつが、ドゥル{天|てん}なんですよ。`\n' +
        '- `それ、{千葉県|ちばけん}で{有名|ゆうめい}なやつだよね？`\n\n' +
        'Também pode ajudar quando você esquece uma palavra específica: `あの{辛|から}いやつ`.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {注文履歴|ちゅうもんりれき}, {送信|そうしん}する, {持|も}ち{帰|かえ}り, {税込|ぜいこみ}, {大盛|おおも}り, {麺|めん}, {混|ま}ぜる, {固|かた}める, {丸|まる}める, {煮|に}る.\n\n' +
        '**Frases-modelo:**\n' +
        '1. {注文|ちゅうもん}が{送信|そうしん}されたか{確認|かくにん}するときは、{注文履歴|ちゅうもんりれき}を{見|み}ればわかります。\n' +
        '2. {麺|めん}の{持|も}ち{帰|かえ}りはできません。\n' +
        '3. ご{飯|はん}の{大盛|おおも}りは、{税込|ぜいこみ}250{円|えん}です。\n' +
        '4. きりたんぽは、お{米|こめ}を{棒|ぼう}のまわりにつけて{固|かた}めてから{焼|や}きます。\n' +
        '5. まず、{材料|ざいりょう}を{混|ま}ぜてから、それを{丸|まる}めます。',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**飲食店のサービスの自動化:** restaurantes no Japão usam cada vez mais recepção automática, pedido por tablet/smartphone, robôs de serviço e self-checkout. Se o sistema variar e ficar confuso, perguntar ao funcionário é normal.\n\n' +
        '**もんじゃ焼き:** prato de massa líquida com ingredientes assado na chapa, tradicional em áreas de Tokyo como {月島|つきしま}. Come-se direto da chapa com uma espátula pequena.\n\n' +
        '**じゃんけん:** pedra-papel-tesoura é muito usado para decidir vencedores ou responsáveis por tarefas.\n\n' +
        '**沖縄料理:** inclui 沖縄そば, チャンプルー, サーターアンダギー e 泡盛. Há restaurantes/izakaya de Okinawa em muitas cidades japonesas.\n\n' +
        '**ふるさと納税:** sistema de doação a municípios que pode reduzir imposto e render返礼品, frequentemente produtos regionais.',
    },
  ],
  groups: [lesson5Group],
  audios: attachScripts(5, L5_SCRIPTS),
}

const lesson6: Section = {
  id: 'lesson-6',
  level: 'pre-intermediate',
  titleJa: '第6課 毎日、自炊してます',
  titlePt: 'Lição 6 - Cozinho para mim todos os dias',
  summaryPt:
    'Refeições do dia a dia · entender recomendações de mercados, ler artigo sobre preparo no micro-ondas e falar com detalhe sobre a própria alimentação.',
  studyNotes: [
    {
      title: 'Tópico: Refeições do dia a dia (毎日の食事)',
      bodyPt:
        'Pergunta de abertura: {毎日|まいにち}の{食事|しょくじ}は、{自分|じぶん}で{作|つく}りますか？ {外食|がいしょく}が{多|おお}いですか？\n\n' +
        '## Can-do\n' +
        '- Ouvir comentários simples de amigos sobre supermercados ou lojas recomendadas e entender os motivos.\n' +
        '- Ler um artigo online sobre alimentação e entender o conteúdo geral.\n' +
        '- Falar com algum detalhe sobre refeições diárias: o que come, por que faz assim, opinião e cuidados.',
    },
    {
      title: 'Atividade 1: onde comprar alimentos',
      bodyPt:
        'Quatro pessoas perguntam sobre lojas recomendadas para comida do dia a dia.\n\n' +
        '| Faixa | Loja | Tipo | Pontos principais |\n|---|---|---|---|\n' +
        '| 06-01 | ヤオイチ | {駅前|えきまえ}の{安|やす}いスーパー | verduras/frutas variadas e baratas; todo dia 29 é {肉|にく}の{日|ひ} |\n' +
        '| 06-02 | {旬彩屋|しゅんさいや} | {昔|むかし}からあるお{惣菜屋|そうざいや} | pratos japoneses, ocidentais e chineses; feito à mão e gostoso |\n' +
        '| 06-03 | Ｃプライス | {業務用|ぎょうむよう}のスーパー | grandes quantidades, preço baixo, muitos {冷凍食品|れいとうしょくひん} |\n' +
        '| 06-04 | こばとの{里|さと} | {朝市|あさいち}をやっている{道|みち}の{駅|えき} | agricultores vendem diretamente; barato, fresco; é melhor ir de manhã |',
    },
    {
      title: 'Gramática ➊: V-ておく',
      bodyPt:
        '**V-ておく** indica fazer algo com antecedência para algum objetivo futuro.\n\n' +
        '- `{餃子|ぎょうざ}とかうどんとか、まとめて{買|か}っておくと{便利|べんり}ですよ。`\n' +
        '- `お{弁当|べんとう}、{注文|ちゅうもん}しておきますね。`\n' +
        '- `{今日|きょう}は{午後|ごご}から{忙|いそが}しくなるから、お{昼|ひる}、{早|はや}めに{食|た}べておこう。`\n\n' +
        'Usa-se com verbos volitivos, ligados à forma テ. Na fala, 買っておく pode soar como 買っとく e 飲んでおく como 飲んどく.',
    },
    {
      title: 'Atividade 2: artigo sobre micro-ondas',
      bodyPt:
        'O artigo lido no SNS se chama **こんなに{便利|べんり}！ {電子|でんし}レンジ{調理法|ちょうりほう} おすすめレシピも{紹介|しょうかい}！**. Ele apresenta pontos convenientes da culinária com micro-ondas para quem mora sozinho e tende a depender de コンビニ ou 外食.\n\n' +
        '| Ponto | Título | Ideia |\n|---|---|---|\n' +
        '| 1 | {時短|じたん}＆{洗|あら}い{物|もの}ラクラク | preparo curto e menos louça; não precisa lavar panela ou frigideira |\n' +
        '| 2 | {失敗|しっぱい}なしで{安心|あんしん} | não usa fogo; durante o aquecimento, pode desviar o olhar |\n' +
        '| 3 | {一人分|ひとりぶん}にちょうどいい | dá para fazer quantidades pequenas, sem preparar demais |\n' +
        '| 4 | {少|すく}ない{油|あぶら}でヘルシー | cozinha com a água dos alimentos, usando pouco óleo e menos tempero |',
    },
    {
      title: 'Gramática ➋: Vがち',
      bodyPt:
        '**Vがち** mostra tendência ou frequência alta, muitas vezes com impressão negativa.\n\n' +
        '- `コンビニや{外食|がいしょく}に{頼|たよ}りがちな{一人暮|ひとりぐ}らし。`\n' +
        '- `{自炊|じすい}してますけど、{栄養|えいよう}が{偏|かたよ}りがちです。`\n' +
        '- `{忙|いそが}しいときは、{冷凍食品|れいとうしょくひん}に{頼|たよ}りがちです。`\n\n' +
        'Forma: verbo na forma マス sem ます + がち. Ex.: 頼ります → 頼りがち.',
    },
    {
      title: 'Atividade 3: falar da alimentação diária',
      bodyPt:
        'Três pessoas falam de como lidam com as refeições.\n\n' +
        '| Faixa | Pessoa | Rotina | Opinião/cuidados |\n|---|---|---|---|\n' +
        '| 06-08 | エドガー | {夜|よる}は{外食|がいしょく}が{多|おお}い; quando trabalha até tarde, pede デリバリー | custa dinheiro e a nutrição fica desequilibrada; tenta pensar no {栄養|えいよう}のバランス e toma {野菜|やさい}ジュース de manhã |\n' +
        '| 06-09 | リサ | come no {寮|りょう}の{食堂|しょくどう}; no jantar escolhe carne ou peixe e vem prato de vegetais | a rotina regular ajuda; como é gostoso, toma cuidado para não comer demais |\n' +
        '| 06-10 | レー | {毎日|まいにち}、{自炊|じすい}; antes fazia comida do próprio país, recentemente também faz 日本食 | gosta porque come o que quer; cuida para não preparar demais e desperdiçar |',
    },
    {
      title: 'Gramática ➌: Sじゃないですか',
      bodyPt:
        '**S（普通形）じゃないですか** confirma algo partindo da ideia de que muita gente sabe ou concorda. A entonação de じゃないですか desce.\n\n' +
        '- `{外食|がいしょく}って、やっぱりお{金|かね}がかかるじゃないですか。`\n' +
        '- `ネットでいろいろレシピを{調|しら}べられるじゃないですか。`\n' +
        '- `ラーメンって、カロリーが{高|たか}いじゃないですか。`\n\n' +
        'Nomes e adjetivos ナ ficam como **Nじゃないですか** e **ナA-じゃないですか**. A partícula **って** costuma introduzir o tópico.',
    },
    {
      title: 'Prática de fala',
      bodyPt:
        'A fala-modelo organiza a conversa assim:\n\n' +
        '1. `{毎日|まいにち}の{食事|しょくじ}は、どうしてるんですか？`\n' +
        '2. motivo, detalhes da refeição e comidas frequentes;\n' +
        '3. opinião sobre a própria alimentação;\n' +
        '4. coisas com que toma cuidado.\n\n' +
        'A tarefa final pede anotar sua própria rotina alimentar e depois falar sem olhar as anotações, se conseguir.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {冷凍食品|れいとうしょくひん}, {果物|くだもの}, {農家|のうか}, {直接|ちょくせつ}, {健康|けんこう}, {栄養|えいよう}, {鍋|なべ}, {調味料|ちょうみりょう}, {新鮮|しんせん}（な）, {頼|たの}む.\n\n' +
        '**Vocabulário-chave:** {玉|たま}ねぎ, {面倒|めんどう}（な）, {帰|かえ}り, その{分|ぶん}, {早起|はやお}きする, {調理法|ちょうりほう}, レシピ, {食費|しょくひ}, バランス, {時短|じたん}, {洗|あら}い{物|もの}, {手間|てま}, {一人分|ひとりぶん}, ヘルシー, {夕飯|ゆうはん}, {照|て}り{焼|や}きチキン, {焼|や}き{魚|ざかな}, うらやましい, {肉|にく}じゃが, {炊|た}き{込|こ}みご{飯|はん}.',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**語呂合わせ:** números podem ser lidos como sons japoneses para criar palavras/frases. A lição usa 29 = にく em {肉|にく}の{日|ひ}. Outros exemplos: 11/22 いい{夫婦|ふうふ}の{日|ひ}, 8/31 {野菜|やさい}の{日|ひ}, 794 = {鳴|な}くよ うぐいす {平安京|へいあんきょう}.\n\n' +
        '**業務用のスーパー:** vendem alimentos para restaurantes e izakaya, mas clientes comuns também compram. Itens vêm em quantidades maiores e costumam ser mais baratos; há congelados, temperos, produtos secos, enlatados e ingredientes internacionais.\n\n' +
        '**出前・デリバリー:** pedir comida de restaurante para casa. O 出前 tradicional ainda existe em alguns restaurantes; hoje apps e serviços como Uber Eats e 出前館 são comuns. É prático, mas tende a custar mais por taxas de entrega e serviço.',
    },
  ],
  groups: [lesson6Group],
  audios: attachScripts(6, L6_SCRIPTS),
}

const lesson7: Section = {
  id: 'lesson-7',
  level: 'pre-intermediate',
  titleJa: '第7課 たくさんの人と友だちになれればと思っています',
  titlePt: 'Lição 7 - Espero conseguir fazer amizade com muitas pessoas',
  summaryPt:
    'Encontros · ouvir conselhos para fazer conhecidos, perguntar por mensagem sobre um círculo e fazer uma autoapresentação em grupo.',
  studyNotes: [
    {
      title: 'Tópico: Encontros (出会う)',
      bodyPt:
        'Pergunta de abertura: あなたの{友|とも}だちとは、どこでどのように{知|し}り{合|あ}いましたか？\n\n' +
        '## Can-do\n' +
        '- Ouvir conselhos simples sobre onde ir ou o que fazer para ampliar relações.\n' +
        '- Escrever uma mensagem para um amigo que participa de um círculo e obter informações sobre ele.\n' +
        '- Fazer uma autoapresentação coerente ao entrar pela primeira vez em um círculo ou grupo.',
    },
    {
      title: 'Atividade 1: não consigo fazer amigos facilmente',
      bodyPt:
        'Quatro pessoas querem ampliar seus contatos. Cada diálogo liga o objetivo a uma sugestão concreta.\n\n' +
        '| Faixa | Pessoa | Desejo | Sugestão | Próximo passo |\n|---|---|---|---|---|\n' +
        '| 07-01 | ミー | conhecer pessoas da vizinhança | participar de {町内|ちょうない}の{活動|かつどう}: limpeza voluntária e plantar flores | olhar o {掲示板|けいじばん} |\n' +
        '| 07-02 | B | amigos de vários países | eventos de {国際交流|こくさいこうりゅう}: 書道, 折り紙, cultura japonesa e passeio pela cidade | ver o cronograma no site |\n' +
        '| 07-03 | B | conhecidos que também estão em {子育|こそだ}て{中|ちゅう} | ir a {児童館|じどうかん} ou {子育|こそだ}て{支援|しえん}センター | ir diretamente e pegar o panfleto |\n' +
        '| 07-04 | ケビン | colegas fãs do Carp | ir ao 「{鯉屋|こいや}」, okonomiyaki onde fãs torcem juntos | ir com o uniforme vermelho quando houver jogo |',
    },
    {
      title: 'Gramática ➊: V-ば',
      bodyPt:
        '**V-ば** marca uma condição: se a condição acontecer, espera-se certo resultado. Nesta lição, aparece ao dar conselhos.\n\n' +
        '- `{興味|きょうみ}があるイベントに{参加|さんか}すれば、{知|し}り{合|あ}いもできると{思|おも}います。`\n' +
        '- `{赤|あか}いユニフォームを{着|き}て{行|い}けば、すぐに{周|まわ}りの{人|ひと}と{仲良|なかよ}くなると{思|おも}います。`\n' +
        '- `どうすればいいでしょうか。`\n\n' +
        'Forma: verbos do grupo 1 mudam o som final para -e + ば; 食べる → 食べれば; する → すれば; 来る → 来れば.',
    },
    {
      title: 'Gramática ➋: V-ているうちに',
      bodyPt:
        '**V-ているうちに** indica uma mudança que ocorre enquanto uma ação ou estado continua.\n\n' +
        '- `{通|かよ}っているうちに、{少|すこ}しずつ{話|はなし}ができる{人|ひと}が{増|ふ}えると{思|おも}います。`\n' +
        '- `イベントに{参加|さんか}しているうちに、{友|とも}だちができました。`\n\n' +
        'Depois de うちに, costuma vir uma mudança natural ou gradual, como 増える, 慣れる, わかるようになる.',
    },
    {
      title: 'Atividade 2: perguntar sobre um círculo por mensagem',
      bodyPt:
        'グレイ escreve para ヘミン porque quer participar do **{世界|せかい}の{料理|りょうり}サークル**. Ele pergunta três coisas: que comidas fazem, se há estrangeiros e se tudo bem não saber muito japonês.\n\n' +
        '| Estrutura | Conteúdo no exemplo |\n|---|---|\n' +
        '| ① iniciar conversa | `ヘミンさん、こんばんは。` |\n' +
        '| ② comunicar o assunto | `私も行きたいなと思っているんですが…` |\n' +
        '| ③ fazer perguntas | comidas feitas no círculo, presença de estrangeiros, japonês limitado |\n' +
        '| ④ encerrar após sugestão | aceitar ir no próximo domingo e também ao karaokê |\n\n' +
        'A resposta de ヘミン confirma que fazem comidas de vários países, que há japoneses e estrangeiros, e que グレイ ficará bem porque as pessoas ao redor ajudam.',
    },
    {
      title: 'Atividade 3: autoapresentação em grupo',
      bodyPt:
        'カイラ entra no 世界の料理サークル. A autoapresentação segue quatro partes claras.\n\n' +
        '| Parte | Conteúdo de カイラ |\n|---|---|\n' +
        '| Perfil | カイラ, das Filipinas, há 3 anos no Japão |\n' +
        '| Situação atual | mora em {東区|ひがしく}; ensina inglês em uma escola de 英会話 |\n' +
        '| Motivo para participar | gosta de cozinhar, faz várias comidas e quer fazer comidas de muitos países |\n' +
        '| Esperanças | fazer muitos amigos, ser convidada para refeições e atividades, participar de forma divertida |\n\n' +
        'O modelo de fala 07-10 organiza a prática por essas quatro partes para que o aluno substitua pelos próprios dados.',
    },
    {
      title: 'Gramática ➌: V-ば para expressar esperança',
      bodyPt:
        'A forma condicional **V-ば** também aparece em expressões suaves de esperança ou desejo.\n\n' +
        '- `たくさんの{人|ひと}と{友|とも}だちになれればと{思|おも}っています。`\n' +
        '- `{食事|しょくじ}とか、いろいろ{誘|さそ}ってもらえればうれしいです。`\n' +
        '- `みなさんといっしょに、{楽|たの}しく{活動|かつどう}できればいいなと{思|おも}います。`\n\n' +
        'Em português, essas frases ficam naturais como “espero conseguir...”, “ficaria feliz se...” e “seria bom se...”.',
    },
    {
      title: 'Estratégia: corrigir a própria fala',
      bodyPt:
        'A estratégia da lição é **自分で訂正しながら話す**: corrigir a própria fala enquanto continua falando. O importante é não parar a comunicação.\n\n' +
        '| Exemplo | Função |\n|---|---|\n' +
        '| `{英語会話|えいごかいわ}の……あ、{英会話|えいかいわ}の{学校|がっこう}で` | corrigir uma palavra errada pela certa |\n' +
        '| `いろいろの……えっと、いろいろな{料理|りょうり}` | corrigir a gramática |\n' +
        '| `このグループ……えー、このサークルで` | trocar por uma palavra mais adequada |',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {自己紹介|じこしょうかい}, {興味|きょうみ}, {仲間|なかま}, {子育|こそだ}て, {児童館|じどうかん}, {掲示板|けいじばん}, {掃除|そうじ}, {次|つぎ}, {簡単|かんたん}（な）, {植|う}える.\n\n' +
        '**Vocabulário-chave:** {知|し}り{合|あ}い, {近所|きんじょ}, {機会|きかい}, {町内|ちょうない}, {活動|かつどう}, ボランティア{募集|ぼしゅう}, {国際交流|こくさいこうりゅう}, {散策|さんさく}する, {幼稚園|ようちえん}, {支援|しえん}センター, チラシ, {周|まわ}り, {仲良|なかよ}くなる, サークル, メンバー, {抱負|ほうふ}, {訂正|ていせい}.',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**児童館:** é um espaço onde crianças podem brincar e aprender. Muitos são mantidos por governos locais e podem ser usados gratuitamente, com regras de idade, região, horário e uso. Costumam ter brinquedos, livros, espaço para movimento, eventos sazonais e apoio para responsáveis em 子育て.\n\n' +
        '**日本のプロ野球チーム:** o Japão tem 12 times profissionais. Cada time tem uma cidade ou região-base e uma torcida local forte. O diálogo cita o Hiroshima Toyo Carp; ir ao estádio ou a um local onde fãs se reúnem pode ser uma forma de participar da cultura local mesmo sem conhecer todas as regras.',
    },
  ],
  groups: [lesson7Group],
  audios: attachScripts(7, L7_SCRIPTS),
}

const lesson8: Section = {
  id: 'lesson-8',
  level: 'pre-intermediate',
  titleJa: '第8課 隣、いいですか？',
  titlePt: 'Lição 8 - Posso sentar ao seu lado?',
  summaryPt:
    'Encontros · iniciar conversa com pessoas desconhecidas, responder a conversa casual e ler um artigo sobre como causar boa primeira impressão.',
  studyNotes: [
    {
      title: 'Tópico: Encontros (出会う)',
      bodyPt:
        'Pergunta de abertura: {知|し}らない{人|ひと}に{話|はな}しかけたり、{話|はな}しかけられたりすることがありますか？\n\n' +
        '## Can-do\n' +
        '- Iniciar conversa com alguém que se encontra pela primeira vez, como futuro colega de trabalho ou novo colega de círculo.\n' +
        '- Responder e conversar de modo simples quando uma pessoa desconhecida começa a falar.\n' +
        '- Ler um artigo online sobre comunicação e entender o conteúdo geral.',
    },
    {
      title: 'Atividade 1: iniciar conversa',
      bodyPt:
        'Quatro pessoas falam com alguém que estão encontrando pela primeira vez. A lição mostra uma frase de abertura e uma forma de continuar a conversa.\n\n' +
        '| Faixa | Cena | Frase inicial | Como continua |\n|---|---|---|---|\n' +
        '| 08-01 | {初出勤|はつしゅっきん}の{職場|しょくば}で | `あの、{今日|きょう}、{入社|にゅうしゃ}の{方|かた}ですか？` | pergunta sobre a outra pessoa e fala de si |\n' +
        '| 08-02 | {同僚|どうりょう}の{結婚|けっこん}パーティーで | `{田中|たなか}さんのお{友|とも}だちですか？` | fala de um conhecido em comum |\n' +
        '| 08-03 | はじめて{参加|さんか}するサークルで | `{今日|きょう}から{参加|さんか}するんですが……` | fala dos próprios sentimentos |\n' +
        '| 08-04 | {日本語学校|にほんごがっこう}の{新|あたら}しいクラスで | `{隣|となり}、いいですか？` | comenta um pertence da outra pessoa |',
    },
    {
      title: 'Modelos de conversa',
      bodyPt:
        'Os modelos 08-05 a 08-08 organizam a prática em duas etapas: falar primeiro e depois continuar.\n\n' +
        '- **話しかける／自己紹介をする:** usar uma frase curta de abertura e dizer nome/origem quando natural.\n' +
        '- **話を続ける:** perguntar algo sobre a pessoa, falar de um conhecido em comum, dizer que está nervoso ou comentar algo visível como um smartphone case.\n\n' +
        'A prática final pede escolher uma cena e pensar livremente em como falar primeiro e como manter a conversa.',
    },
    {
      title: 'Atividade 2: conversa no banho público',
      bodyPt:
        'フランキー está em uma fonte termal quando um morador local o avisa que não deve colocar a toalha dentro da água.\n\n' +
        '| Ponto | Conteúdo |\n|---|---|\n' +
        '| Advertência | `タオルをお{湯|ゆ}につけちゃだめですよ` |\n' +
        '| Perfil | {留学生|りゅうがくせい}, mora no {寮|りょう} da CPU{大学|だいがく}, veio da Indonésia, está no Japão há cerca de 2 anos |\n' +
        '| Motivo de ir ao banho | gosta de {温泉|おんせん}; o banho do dormitório não é onsen |\n' +
        '| Recomendação | {鶴|つる}の{湯|ゆ}: {霊園|れいえん}のそばにある{露天風呂|ろてんぶろ}, gratuito, com água muito boa |',
    },
    {
      title: 'Gramática ➊: Vなさい',
      bodyPt:
        '**Vなさい** é usado para dar ordem, instrução ou advertência. Costuma vir de alguém em posição superior para alguém abaixo, como pais para filhos, professores para alunos ou pessoa mais velha para jovem.\n\n' +
        '- `これからは、{気|き}をつけなさい。`\n' +
        '- `お{風呂|ふろ}で{泳|およ}ぐのは、やめなさい。`\n' +
        '- `お{風呂|ふろ}に{入|はい}る{前|まえ}に、ちゃんと{体|からだ}を{洗|あら}いなさい。`\n\n' +
        'Forma: verbo na forma マス sem ます + なさい. Em força, fica entre V-て e o imperativo.',
    },
    {
      title: 'Gramática ➋: verbos respeitosos',
      bodyPt:
        '**尊敬語** é usado para ações ou estados de pessoas superiores, recém-conhecidas ou mencionadas com respeito. Não se usa para falar de si.\n\n' +
        '- `ここのお{風呂|ふろ}には、よく{来|く}るんですか？`\n' +
        '- `ここには、よくいらっしゃるんですか？`\n\n' +
        '| Verbo comum | Verbo respeitoso |\n|---|---|\n' +
        '| いる／行く／来る | いらっしゃる |\n' +
        '| 言う | おっしゃる |\n' +
        '| 食べる／飲む | 召し上がる |\n' +
        '| 見る | ご覧になる |\n' +
        '| くれる | くださる |\n' +
        '| 知っている | ご存じだ |\n' +
        '| する | なさる |',
    },
    {
      title: 'Atividade 3: artigo sobre primeira impressão',
      bodyPt:
        'O artigo se chama **{第一印象|だいいちいんしょう}を{良|よ}く{見|み}せるための4つのポイント**. Antes de ler tudo, a atividade treina localizar título, corpo do artigo, partes que são anúncio e onde tocar para continuar lendo.\n\n' +
        '| Ponto | Título | Ideia principal |\n|---|---|---|\n' +
        '| 1 | アイコンタクトを{取|と}る | olhar para a pessoa é importante, mas não ficar encarando fixamente nem evitar contato visual |\n' +
        '| 2 | {笑顔|えがお}を{忘|わす}れない | um sorriso leve ajuda a pessoa a parecer agradável e também relaxa quem sorri |\n' +
        '| 3 | {姿勢|しせい}を{良|よ}くする | esticar as costas melhora a impressão; 猫背 passa impressão ruim |\n' +
        '| 4 | {服装|ふくそう}や{清潔感|せいけつかん}に{気|き}をつける | não precisa roupa cara; aparência limpa e cabelo cuidado ajudam |',
    },
    {
      title: 'Gramática ➌: causativo V-（さ）せる',
      bodyPt:
        'Nesta lição, o causativo expressa que algo causa naturalmente uma emoção, sentimento ou impressão em outra pessoa.\n\n' +
        '- `{唇|くちびる}の{両端|りょうはし}を{軽|かる}く{上|あ}げるだけで、「この{人|ひと}、{感|かん}じが{良|よ}さそうだな」と{思|おも}わせることができます。`\n' +
        '- `{背筋|せすじ}を{伸|の}ばして{相手|あいて}に{安心感|あんしんかん}を{持|も}たせることで、{印象|いんしょう}が{良|よ}くなるでしょう。`\n' +
        '- `{清潔|せいけつ}で{整|ととの}った{服装|ふくそう}や、{手入|てい}れをされた{髪型|かみがた}は、{相手|あいて}に「きちんとした{人|ひと}だな」と{感|かん}じさせることができます。`\n\n' +
        'A nota também cita がっかりさせる, 悲しませる, 怒らせる e 楽しませる.',
    },
    {
      title: 'Gramática ➍: V-なくてもいい／大丈夫',
      bodyPt:
        '**V-なくてもいいです／だいじょうぶです** indica que não é necessário fazer algo.\n\n' +
        '- `{無理|むり}に{大|おお}きな{笑顔|えがお}を{作|つく}らなくてもいいです。`\n' +
        '- `{高価|こうか}な{服|ふく}は{着|き}なくても{大丈夫|だいじょうぶ}です。`\n' +
        '- `そんなに{緊張|きんちょう}しなくてもいいですよ。`\n\n' +
        'Forma: verbo na forma ナイ sem ない + なくても + いいです／だいじょうぶです.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {第一印象|だいいちいんしょう}, {関心|かんしん}, {背筋|せすじ}, {逆|ぎゃく}, この{辺|へん}, {清潔|せいけつ}（な）, {効果的|こうかてき}（な）, {伸|の}ばす, {与|あた}える, {整|ととの}う.\n\n' +
        '**Vocabulário-chave:** {新郎|しんろう}, {新婦|しんぷ}, {同級生|どうきゅうせい}, {部署|ぶしょ}, しゃべる, {叱|しか}る, ムードメーカー, {人気者|にんきもの}, {緊張|きんちょう}する, {将棋|しょうぎ}, リラックスする, {観光客|かんこうきゃく}, {裸|はだか}, {国道|こくどう}, {霊園|れいえん}, {露天風呂|ろてんぶろ}, {観光案内所|かんこうあんないじょ}.',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**将棋:** jogo de tabuleiro japonês parecido com xadrez, em tabuleiro 9×9. Dois jogadores movem peças alternadamente e buscam capturar o “rei” do adversário. Há jogadores profissionais, partidas transmitidas e aulas para iniciantes em centros comunitários.\n\n' +
        '**ハローキティ（キティちゃん）:** personagem da Sanrio criada em 1974, conhecida pela fita vermelha. Aparece em muitos produtos e é apresentada como símbolo da cultura kawaii.\n\n' +
        '**お墓・霊園:** no Japão, restos cremados são colocados em túmulos. Muitos túmulos ficam em templos, e 霊園 são áreas amplas com muitos túmulos, frequentemente organizadas como parques e às vezes com túmulos de pessoas famosas.',
    },
  ],
  groups: [lesson8Group],
  audios: attachScripts(8, L8_SCRIPTS),
}

const lesson9: Section = {
  id: 'lesson-9',
  level: 'pre-intermediate',
  titleJa: '第9課 日本語の勉強を始めたきっかけって、何だったの？',
  titlePt: 'Lição 9 - O que fez você começar a estudar japonês?',
  summaryPt:
    'Eu e o japonês · falar de metas de aprendizagem, perguntar sobre dialetos, contar experiências de estudo e ler placas em dialeto.',
  studyNotes: [
    {
      title: 'Tópico: Eu e o japonês (私と日本語)',
      bodyPt:
        'Pergunta de abertura: あなたは、どうして日本語の勉強を始めましたか？\n\n' +
        '## Can-do\n' +
        '- Falar a um amigo, de modo simples, sobre metas de aprendizagem de japonês e os motivos dessas metas.\n' +
        '- Perguntar sobre palavras de dialeto que não entendeu ao conversar com moradores locais.\n' +
        '- Falar com algum detalhe sobre sua experiência de aprendizagem de japonês, incluindo episódios concretos.\n' +
        '- Ler placas ou avisos escritos em dialeto e entender o significado geral.',
    },
    {
      title: 'Atividade 1: metas de aprendizagem',
      bodyPt:
        'Quatro pessoas falam sobre 日本語学習の目標. A lição também observa se a conversa usa 丁寧体 ou 普通体, porque a escolha muda conforme relação e situação.\n\n' +
        '| Faixa | Pessoa e cena | Meta | Motivo |\n|---|---|---|---|\n' +
        '| 09-01 | アディ, em 面談 na aula | 仕事で上手に日本語を使う | telefonemas no trabalho são difíceis; ele já encerrou uma ligação com uma fala informal demais |\n' +
        '| 09-02 | ラメシュ, no trabalho | 日本のドラマを全部理解する | gosta de dramas e quer aproveitar recomendações enquanto está no Japão |\n' +
        '| 09-03 | 高, na vizinhança | ほかの人ともっとコミュニケーションをとる | às vezes não entende falas ao redor, especialmente 方言 |\n' +
        '| 09-04 | プラー, na universidade | 日本語能力試験に合格する | no exame anterior faltaram 2 pontos, então quer passar desta vez |\n\n' +
        'Resumo dos estilos: 09-01 é 丁寧体 de ambos por ser primeiro encontro; 09-02 mistura ラメシュ em 普通体 e 鵜沢 em 丁寧体 por idade/posição; 09-03 mistura 高 em 丁寧体 e 西尾 em 普通体 por morador mais velho falando com vizinho; 09-04 é 普通体 entre amigos.',
    },
    {
      title: 'Gramática ➊: V-る間に',
      bodyPt:
        '**V-る間に／V-ている間に／Nの間に** expressa algo que a pessoa quer fazer ou que acontece durante o período em que uma ação, estado ou situação continua.\n\n' +
        '- `日本にいる間に、いろいろなドラマを見たい。` = enquanto estiver no Japão, quero assistir a vários dramas.\n' +
        '- `通勤の間に、スマホで日本語のニュースを読んでいます。` = durante o trajeto para o trabalho, leio notícias em japonês no celular.\n\n' +
        'O foco é o período limitado. A ação de dentro pode acontecer uma ou várias vezes antes de esse período acabar.',
    },
    {
      title: 'Gramática ➋: 丁寧体・普通体',
      bodyPt:
        'A lição revisa a troca entre **丁寧体** e **普通体**. 丁寧体 é usado com desconhecidos, pessoas de posição superior ou em situações formais; 普通体 aparece entre amigos, familiares, pessoas próximas ou quando alguém mais velho fala de modo casual.\n\n' +
        '| Tipo | 丁寧体 | 普通体 |\n|---|---|---|\n' +
        '| verbo | 勉強しています／わかりました | 勉強している／わかった |\n' +
        '| adjetivo イ | 難しいです | 難しい |\n' +
        '| adjetivo ナ | 好きです | 好きだ／好き |\n' +
        '| substantivo | 友だちです | 友だちだ／友だち |\n\n' +
        'No uso real, não basta escolher pela gramática: a relação com a pessoa e o momento da conversa decidem o tom.',
    },
    {
      title: 'Atividade 2: dialetos',
      bodyPt:
        'As conversas mostram como reagir quando uma palavra local não é entendida. A estratégia não é fingir que entendeu; é confirmar, repetir e pedir explicação.\n\n' +
        '| Faixa | Região | Palavra/frase | Sentido no contexto | Estratégia usada |\n|---|---|---|---|---|\n' +
        '| 09-09 | 秋田 | そんな服ばり着てさみぐねぇの？ | Você não está com frio usando só essa roupa? | apontar que parece 方言 |\n' +
        '| 09-10 | 大阪 | その台車、なおしといて | guarde/arrume esse carrinho | repetir, confirmar e perguntar se é 方言 |\n' +
        '| 09-11 | 福岡 | どっから来んしゃったと？ | De onde você veio? | repetir a parte que não entendeu |\n' +
        '| 09-12 | 沖縄 | そろそろ、帰りましょうねー／でーじ | vou embora agora / muito | adivinhar, perguntar e confirmar |\n\n' +
        'A atividade de fala treina frases como `方言でしょうか？`, `どういう意味ですか？` e `もう一度言ってください`.',
    },
    {
      title: 'Atividade 3: experiências de aprendizagem',
      bodyPt:
        'Três pessoas contam por que começaram japonês, que experiências tiveram e o que querem fazer no futuro.\n\n' +
        '| Faixa | Pessoa | きっかけ | Experiência | Futuro |\n|---|---|---|---|---|\n' +
        '| 09-19 | クロード | queria aprender língua estrangeira e japonês parecia interessante | estudou sozinho com apps e vídeos; no Japão percebeu que precisava falar de verdade | quer conversar naturalmente no trabalho e na vida diária |\n' +
        '| 09-20 | ハスミン | gostava de anime e mangá | entendia palavras, mas não conseguia explicar bem; melhorou ao usar japonês com colegas | quer entender obras sem tradução e falar sobre elas |\n' +
        '| 09-21 | エレン | teve contato com japonês por trabalho/família e pela vida no Japão | teve dificuldades, erros e momentos de melhora | quer continuar estudando e usar japonês com mais confiança |\n\n' +
        'O objetivo não é só dizer uma razão curta; a fala inclui episódios concretos para dar detalhe à experiência.',
    },
    {
      title: 'Gramática ➌: Vはじめる',
      bodyPt:
        '**Vはじめる** indica que uma ação começa. Usa-se a forma マス sem ます + はじめる.\n\n' +
        '- `日本語を勉強しはじめました。` = comecei a estudar japonês.\n' +
        '- `日本で働きはじめてから、電話の日本語が難しいと思いました。` = depois que comecei a trabalhar no Japão, achei o japonês de telefone difícil.\n' +
        '- `日本語学校に通いはじめました。` = comecei a frequentar escola de japonês.\n\n' +
        'O padrão aponta o início de um hábito, atividade ou situação que continua depois.',
    },
    {
      title: 'Gramática ➍: expressões de esperança',
      bodyPt:
        'A lição organiza várias formas de falar do que se quer fazer no futuro ou do que seria bom conseguir.\n\n' +
        '| Forma | Uso | Exemplo |\n|---|---|---|\n' +
        '| Vたい | desejo direto | `日本語でドラマを全部理解したいです。` |\n' +
        '| Vようと思う | intenção | `これからも勉強を続けようと思います。` |\n' +
        '| V-ばと思う | esperança suave | `もっと自然に話せればと思います。` |\n' +
        '| V-ばうれしい／いいな | seria bom/ficaria feliz se | `字幕なしで見られればうれしいです。` |\n\n' +
        'Em português, essas formas soam como “quero...”, “penso em...”, “espero conseguir...” ou “ficaria feliz se...”.',
    },
    {
      title: 'Atividade 4: placas em dialeto',
      bodyPt:
        'A leitura final apresenta placas ou avisos locais escritos em 方言. A meta é captar o sentido geral mesmo sem conhecer todas as formas.\n\n' +
        '| Placa | Local | Sentido |\n|---|---|---|\n' +
        '| ① | 空き地 | やめなさい: pare/não faça isso |\n' +
        '| ② | 道路 | あぶないよ: cuidado, é perigoso |\n' +
        '| ③ | 手洗い場 | 手を洗っていきなさい: lave as mãos antes de ir |\n' +
        '| ④ | 道路 | 飲んだら乗るな: se beber, não dirija |\n' +
        '| ⑤ | 商店街のアーケード | ようこそ: bem-vindo |\n' +
        '| ⑥ | 駅 | また来てね: volte novamente |\n' +
        '| ⑦ | お祭りの屋台 | とてもおいしい: muito gostoso |\n\n' +
        'A atividade reforça que dialetos aparecem em falas cotidianas, placas de região, lojas e eventos locais.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {方言|ほうげん}, {目標|もくひょう}, {知識|ちしき}, {最初|さいしょ}, {悩|なや}み, {介護|かいご}, {吹|ふ}き{替|か}え, {足|た}りる, {失敗|しっぱい}する, {理解|りかい}する.\n\n' +
        '**Vocabulário-chave:** {勉強|べんきょう}を{始|はじ}める, きっかけ, {日本語能力試験|にほんごのうりょくしけん}, {通勤|つうきん}, {周|まわ}りの{人|ひと}, {全部|ぜんぶ}, {合格|ごうかく}する, {字幕|じまく}, {翻訳|ほんやく}, {地元|じもと}, {台車|だいしゃ}, {直|なお}す, {修理|しゅうり}する, {閉店|へいてん}.',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**日本語の試験:** a TIPS apresenta o JLPT como prova amplamente usada para medir proficiência em japonês, com níveis de N5 a N1. Também cita o JFT-Basic, usado para verificar se a pessoa consegue se comunicar em japonês básico em situações da vida diária, e outros exames conforme objetivo de estudo, trabalho ou residência.\n\n' +
        '**日本の方言:** dialetos japoneses variam por região em pronúncia, vocabulário e forma gramatical. O material cita diferenças de regiões como 東北, 関西, 九州 e 沖縄. Quando não entender, é natural perguntar o significado ou confirmar se a palavra é 方言.',
    },
  ],
  groups: [lesson9Group],
  audios: attachScripts(9, L9_SCRIPTS),
}

const lesson10: Section = {
  id: 'lesson-10',
  level: 'pre-intermediate',
  titleJa: '第10課 どうやって日本語を勉強してる？',
  titlePt: 'Lição 10 - Como você estuda japonês?',
  summaryPt:
    'Eu e o japonês · escolher sites e apps de estudo, conversar sobre métodos de aprendizagem e escrever um perfil para encontrar parceiro de tandem.',
  studyNotes: [
    {
      title: 'Tópico: Eu e o japonês (私と日本語)',
      bodyPt:
        'Pergunta de abertura: どうやって日本語を勉強してる？\n\n' +
        '## Can-do\n' +
        '- Ler descrições de cursos online e apps em um portal de aprendizagem de japonês e escolher opções adequadas.\n' +
        '- Trocar informações relativamente detalhadas com um amigo sobre métodos de estudo de japonês.\n' +
        '- Escrever um perfil, interesses e pedidos em um site/app para encontrar parceiros de tandem.',
    },
    {
      title: 'Atividade 1: portal de aprendizagem',
      bodyPt:
        'A leitura compara quatro recursos de estudo em um portal de 日本語学習. O objetivo é escolher o recurso conforme a finalidade.\n\n' +
        '| Recurso | Foco principal | Indicações do gabarito |\n|---|---|---|\n' +
        '| A: JF にほんご e ラーニング みなと | cursos como まるごとコース, estudo abrangente, registro de usuário | 総合的な日本語, 漢字, 日本文化 |\n' +
        '| B: ひきだすにほんご | programa de aprendizagem, vida/trabalho no Japão, estratégias | trabalhar e viver no Japão; オノマトペ |\n' +
        '| C: アニメ・マンガの日本語 | japonês a partir de anime e mangá, gêneros e áudio | mangá, オノマトペ, kanji, cultura japonesa |\n' +
        '| D: KANJI Memory Hint | memorizar kanji com ilustrações, leitura por áudio e série de apps | kanji |\n\n' +
        'A atividade também introduz descrições escritas curtas, como `国際交流基金が運営する日本語学習プラットフォーム。`.',
    },
    {
      title: 'Gramática ➊: V（普通形）＋N',
      bodyPt:
        '**V（普通形）＋N** modifica e explica um substantivo. Nesta lição, aparece em descrições de sites e apps.\n\n' +
        '- `日本語を総合的に勉強する「まるごとコース」` = o curso “Marugoto”, em que se estuda japonês de forma abrangente.\n' +
        '- `アニメ・マンガを入り口として、日本語を勉強するサイトです。` = é um site para estudar japonês tendo anime e mangá como porta de entrada.\n' +
        '- `漢字の練習ができるアプリです。` = é um app em que dá para praticar kanji.\n\n' +
        'O substantivo não precisa ser sujeito ou objeto direto do verbo; a frase inteira explica que tipo de site, app, curso, serviço ou recurso é.',
    },
    {
      title: 'Gramática ➋: terminar em substantivo',
      bodyPt:
        'Em textos escritos, uma descrição pode terminar diretamente em substantivo, omitindo `です`. Isso deixa o texto curto, como título ou chamada.\n\n' +
        '- `国際交流基金が運営する日本語学習プラットフォーム。`\n' +
        '- `日本語学習番組「ひきだすにほんご」のサイト。`\n' +
        '- `恋愛、学校、忍者、侍の4つ。`\n\n' +
        'Esse formato é comum em páginas de apresentação, listas de serviços e resumos de apps.',
    },
    {
      title: 'Vocabulário: métodos de estudo',
      bodyPt:
        'A preparação de vocabulário apresenta maneiras de estudar japonês.\n\n' +
        '| Japonês | Português |\n|---|---|\n' +
        '| 日本語学校に通う | frequentar escola de japonês |\n' +
        '| 地域の日本語教室に通う | frequentar aula comunitária de japonês |\n' +
        '| オンラインレッスンを受ける | fazer aulas online |\n' +
        '| 本で勉強する | estudar por livros |\n' +
        '| 日本のアニメ／ドラマを見る | ver anime/dramas japoneses |\n' +
        '| 日本語学習サイト／アプリで勉強する | estudar em site/app de aprendizagem |\n' +
        '| AIを使う | usar IA |\n' +
        '| タンデム学習をする | fazer aprendizagem tandem |\n' +
        '| 日本人の友だちを作る | fazer amigos japoneses |',
    },
    {
      title: 'Atividade 2: como cada pessoa estuda',
      bodyPt:
        'ニコル, ホン e シヴァ conversam depois da aula sobre métodos de estudo além da classe de japonês.\n\n' +
        '| Pessoa | Método | Método específico | Efeito | Opinião |\n|---|---|---|---|---|\n' +
        '| ニコル | 日本のドラマを見る | assiste sem legenda, depois com 字幕 em japonês, depois com 字幕 em inglês | entende melhor o que as pessoas dizem | combina com ela porque ama dramas |\n' +
        '| ホン | タンデム学習をする | ensina vietnamita e recebe japonês de uma pessoa japonesa | consegue dizer em japonês o que quer dizer | gosta porque aprende palavras usadas no dia a dia |\n' +
        '| シヴァ | AIを使う | pergunta se seus textos em japonês estão corretos e recebe correções | escrever japonês ficou menos assustador | ajuda muito porque ensina qualquer dúvida |\n\n' +
        'A fala usa 普通体 porque são colegas/amigos conversando informalmente.',
    },
    {
      title: 'Gramática ➌: 数量＋も',
      bodyPt:
        '**数量＋も** mostra que a quantidade parece grande para quem fala.\n\n' +
        '- `3回も見るの？ すごいね。` = você assiste até três vezes? Impressionante.\n' +
        '- `漢字のテストで、8つも間違えてしまいました。` = errei até oito itens na prova de kanji.\n' +
        '- `もう10年も日本語を勉強しているけど、うまく話せません。` = já estudo japonês há dez anos, mas ainda não falo bem.\n\n' +
        'A nuance é surpresa, ênfase ou sensação de “tanto assim”.',
    },
    {
      title: 'Gramática ➍: V-てくる',
      bodyPt:
        '**V-てくる** expressa mudança que vem ocorrendo até agora. Na lição, aparece para comparar a aprendizagem atual com antes.\n\n' +
        '- `相手の言っていることがわかるようになってきた。` = passei a entender o que a outra pessoa está dizendo.\n' +
        '- `言いたいことが日本語で言えるようになってきた。` = passei a conseguir dizer em japonês o que quero dizer.\n' +
        '- `書くのがこわくなくなってきた。` = escrever tem ficado menos assustador.\n\n' +
        'Forma: verbo na forma テ + くる. Pode aparecer com `V-るようになる` para falar de habilidade que se desenvolveu gradualmente.',
    },
    {
      title: 'Estratégia: dizer a palavra em inglês',
      bodyPt:
        'A estratégia é **わからないことばを英語で言う**: quando não souber uma palavra em japonês, usar uma palavra em inglês ou outra língua compartilhada para continuar a conversa.\n\n' +
        '| Fala | Função |\n|---|---|\n' +
        '| `日本語で何だっけ、subtitle を使ってる。` | a pessoa sabe o conceito, mas não lembra o termo japonês |\n' +
        '| `字幕？` | o interlocutor oferece a palavra japonesa |\n' +
        '| `そうそう。字幕。` | a pessoa confirma e segue a fala |\n\n' +
        'O objetivo é manter a comunicação fluindo e recuperar o vocabulário pelo contexto.',
    },
    {
      title: 'Atividade 3: perfil para tandem',
      bodyPt:
        'A escrita final pede um perfil para procurar parceiro de タンデム学習. O perfil organiza informações pessoais e pedidos de aprendizagem.\n\n' +
        '| Campo | O que escrever |\n|---|---|\n' +
        '| 名前（ニックネーム可） | nome ou apelido |\n' +
        '| 話せる言語／学習したい言語 | línguas que fala e língua que quer aprender |\n' +
        '| 自分のこと／好きなこと／興味があること | quem você é, gostos e interesses |\n' +
        '| 日本語の勉強について／お願いしたいこと | objetivo de estudo e ajuda que deseja receber |\n\n' +
        'Os exemplos incluem XYZ, うた, クオン e 念念: cada perfil combina línguas, interesses, situação pessoal e um pedido concreto, como revisar e-mails, conversar com colegas ou praticar apresentações.',
    },
    {
      title: 'Kanji e vocabulário',
      bodyPt:
        '**Kanji da lição:** {登録|とうろく}, {在住|ざいじゅう}, {対象|たいしょう}, {専門学校|せんもんがっこう}, {文章|ぶんしょう}, {基礎的|きそてき}（な）, {表現|ひょうげん}, {研究|けんきゅう}する, {字幕|じまく}, {助|たす}かる.\n\n' +
        '**Vocabulário-chave:** {主|おも}な, {対象|たいしょう}, {学|まな}ぶ, {運営|うんえい}する, プラットフォーム, {総合的|そうごうてき}（な）, ライブレッスン, ユーザー{登録|とうろく}, {基礎的|きそてき}（な）, {最大限|さいだいげん}, ストラテジー, {来日|らいにち}する, ドキュメンタリー, オノマトペ, {音声|おんせい}, {用語|ようご}, {連想|れんそう}, {語彙|ごい}, {書|か}き{順|じゅん}, {例文|れいぶん}.',
    },
    {
      title: 'TIPS culturais',
      bodyPt:
        '**JF運営・監修の日本語学習サイト:** a Japan Foundation desenvolve, opera e supervisiona vários sites e apps gratuitos para aprendizes de japonês. A TIPS cita, além dos recursos da lição, MARUGOTO Plus, Erin, Hirogaru e NHK WORLD-JAPAN やさしい日本語.\n\n' +
        '**タンデム学習:** duas pessoas ensinam uma à outra as línguas que querem aprender. Pode ser presencial ou online, mas o texto alerta para usar serviços confiáveis por segurança.\n\n' +
        '**AIと日本語学習:** AI pode corrigir textos, explicar palavras/gramática, simplificar ou traduzir textos, criar exercícios e servir como parceiro de escrita. O material ressalta que respostas geradas por AI nem sempre estão corretas; é importante pensar por conta própria e confirmar com outras pessoas ou professores.',
    },
  ],
  groups: [lesson10Group],
  audios: attachScripts(10, L10_SCRIPTS),
}

const sections: Section[] = [
  // Tópico 1 - Coisas e atividades favoritas (好きなもの好きなこと)
  lesson1,
  lesson2,
  // Tópico 2 - Onde morar? (どこに住む？)
  lesson3,
  lesson4,
  // Tópico 3 - Refeições do dia a dia (毎日の食事)
  lesson5,
  lesson6,
  // Tópico 4 - Encontros (出会う)
  lesson7,
  lesson8,
  // Tópico 5 - Eu e o japonês (私と日本語)
  lesson9,
  lesson10,
]

export const irodoriPreIntermediate: Level = {
  id: 'pre-intermediate',
  courseId: 'irodori',
  titlePt: 'Irodori - Pre-Intermediate (初中級 · A2/B1)',
  descriptionPt:
    'Quarto nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A2/B1: amplia a compreensão e produção em situações cotidianas com mais detalhes, explicações e interação. As explicações são em português.',
  sections,
}
