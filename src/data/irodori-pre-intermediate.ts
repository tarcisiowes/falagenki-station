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

const sections: Section[] = [
  // Tópico 1 - Coisas e atividades favoritas (好きなもの好きなこと)
  lesson1,
  lesson2,
  // Tópico 2 - Onde morar? (どこに住む？)
  lesson3,
  lesson4,
  // Tópico 3 - Refeições do dia a dia (毎日の食事)
  lesson5,
]

export const irodoriPreIntermediate: Level = {
  id: 'pre-intermediate',
  courseId: 'irodori',
  titlePt: 'Irodori - Pre-Intermediate (初中級 · A2/B1)',
  descriptionPt:
    'Quarto nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A2/B1: amplia a compreensão e produção em situações cotidianas com mais detalhes, explicações e interação. As explicações são em português.',
  sections,
}
