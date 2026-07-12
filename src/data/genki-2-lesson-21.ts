import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const LESSON = 21
const BASE = `/audio/genki/genki-2/lesson-${LESSON}`
const lessonPrefix = `genki-2-l${LESSON}`

const trackId = (code: string) => `${lessonPrefix}-audio-${code.toLowerCase()}`
const questionAudio = (code: string, title: string) => ({
  trackId: trackId(code),
  src: `${BASE}/${code}.mp3`,
  title,
})

const q = (
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extra: Partial<Pick<Question, 'audio' | 'context' | 'translationPt' | 'helpPt'>> = {},
): Question => ({
  id: `${lessonPrefix}-${id}`,
  number,
  prompt,
  choices: choices.map((text, index) => ({ n: index + 1, text })),
  answer,
  explanationPt,
  helpPt: extra.helpPt ?? `Pista de conferência: localize na frase a forma, a partícula ou a informação citada nesta explicação: ${explanationPt}`,
  ...extra,
})

const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({
  id: `${lessonPrefix}-${id}`,
  title,
  subtitlePt,
  instructionJa: '',
  instructionPt: `Resolva as questões de ${subtitlePt.toLowerCase()}. Use a ajuda para ver outra maneira de analisar a resposta antes de enviá-la à revisão.`,
  questions,
})

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situações da lição',
    bodyPt: 'John descobre que seu apartamento foi invadido, relata o caso à polícia e recebe notícias depois que o suspeito é preso. A lição ensina a falar de experiências ruins com a voz passiva, verificar preparativos com 〜てある, situar um evento dentro de outro com 〜間に, provocar uma mudança com adjetivo + する e dizer o que se deseja que outra pessoa faça com 〜てほしい.',
    helpPt: 'Siga a história como um procedimento real: identificar o prejuízo, reconstruir a sequência do incidente, verificar o que já estava preparado e comunicar o que cada pessoa deve fazer.',
  },
  {
    title: '1. Frases passivas',
    bodyPt: 'A passiva coloca em foco a pessoa afetada: `私は友だちに車を使われました` (“um amigo usou meu carro e isso me afetou”). O afetado recebe `は` ou `が`, o agente normalmente recebe `に`, e a ação fica na passiva. Verbos ru: `食べる→食べられる`. Verbos u: retire a mora final em u e acrescente a linha de a + `れる`: `行く→行かれる`, `読む→読まれる`, `買う→買われる`. Irregulares: `する→される`, `くる→こられる`. A forma passiva conjuga como verbo ru.',
    helpPt: 'Monte a cena em três papéis: vítima は/が + agente に + ação passiva. Compare `友だちが車を使った` (relato neutro) com `私は友だちに車を使われた` (o uso me prejudicou ou incomodou).',
  },
  {
    title: 'Passiva afetiva, passiva neutra e 〜てもらう',
    bodyPt: 'Muitas passivas desta lição sugerem dano, vergonha ou incômodo: `泥棒にお金を盗まれました`. Alguns verbos produzem uma passiva neutra ou positiva, como `デートに誘われました`, `友だちに紹介されました` e `みんなに尊敬されています`. Compare ainda a passiva indesejada `姉に日記を読まれました` com o favor intencional `父に本を読んでもらいました`.',
    helpPt: 'Pergunte se a ação foi desejada. Se o falante apresenta algo inconveniente que alguém fez, a passiva é natural. Se ele pediu e recebeu o favor, 〜てもらう deixa essa intenção explícita.',
  },
  {
    title: '2. 〜てある — resultado de uma ação intencional',
    bodyPt: 'Verbo transitivo na forma て + `ある` descreve um estado que alguém criou de propósito e que continua observável: `ヒーターがつけてあります` e `テーブルの上に花が置いてあります`. O objeto que teria `を` costuma receber `が` ou `は`. A estrutura pode ser o resultado de algo feito como preparação: `予約をしておきました` → `予約がしてあります`.',
    helpPt: 'Imagine a fotografia do resultado e uma intenção humana por trás dela. `窓が閉めてある` destaca que alguém fechou e manteve a janela assim; `窓が閉まっている` apenas descreve que a janela está fechada.',
  },
  {
    title: '3. 〜間に — um evento dentro de outro',
    bodyPt: 'Use `A（ている）間にB` quando B começa e termina dentro do período de A: `寝ている間にどろぼうに入られました`. A pode ser um substantivo + `の`: `留守の間に友だちが来ました`. Mesmo em uma narrativa passada, o verbo antes de `間に` costuma ficar no presente. Se B se prolonga durante todo o período, use `間`, sem `に`: `買い物をしている間、本を読んで待ちました`.',
    helpPt: 'Desenhe uma linha longa para A e um ponto ou intervalo curto dentro dela para B. Se B cabe inteiramente dentro de A, use 間に; se B acompanha A de ponta a ponta, use 間.',
  },
  {
    title: '4. Adjetivo + する — fazer ficar',
    bodyPt: 'Com adjetivos い, troque `い` por `く` + `する`: `冷たい→冷たくする`, `いい→よくする`. Com adjetivos な, use `にする`: `簡単な→簡単にする`, `静かな→静かにする`. A estrutura mostra que alguém provoca deliberadamente a mudança. Compare `部屋がきれいになりました` (o quarto ficou limpo) e `部屋をきれいにしました` (alguém limpou/deixou o quarto limpo).',
    helpPt: 'Use なる para “ficar” e する para “fazer ficar”. Se há uma pessoa escolhendo ou alterando o resultado, する costuma ser a opção certa. `静かにする` também significa “ficar em silêncio”.',
  },
  {
    title: '5. 〜てほしい — desejar uma ação de outra pessoa',
    bodyPt: 'O padrão é `(私は) pessoa に + verbo na forma て + ほしい`: `妹に部屋を片付けてほしいです`. Para dizer que não deseja a ação, use `〜てほしくない` ou `〜ないでほしい`: `父に昔の話をしてほしくない` / `友だちに英語で話さないでほしい`. Compare `行きたい` (eu quero ir), `靴がほしい` (quero sapatos) e `妹に片付けてほしい` (quero que minha irmã arrume).',
    helpPt: 'Identifique quem executará a ação. Se é o próprio falante, use 〜たい; se é outra pessoa, marque-a com に e use 〜てほしい. Para relatar o desejo de terceiros, prefira `〜てほしいと言っています` ou `〜てほしがっています`.',
  },
  {
    title: 'Notas de expressão',
    bodyPt: '`帰ってきた` acrescenta a ideia de voltar ao ponto onde o falante está ou estava. `バイトでためたお金もないです` usa `ないです` como alternativa conversacional a `ありません`; a mesma combinação aparece em `見えないです` e, no passado, `見えなかったです`.',
    helpPt: 'Em diálogos, não trate toda forma diferente de 〜ません como erro. Observe o nível de fala: forma curta negativa + です mantém polidez, mas soa mais conversacional.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Crime e polícia: `ちかん`, `泥棒`, `犯人`, `警察`, `政府`, `捕まる`, `盗む`, `連絡する`. Incidentes: `殴る`, `踏む`, `刺す`, `触る`, `気がつく`, `びっくりする`. Preparação e opinião: `置く`, `包む`, `貼る`, `焼く`, `ほめる`, `比べる`, `信じる`, `間違える`. Situação: `留守`, `終電`, `安全`, `めちゃくちゃ`, `とにかく`.',
    helpPt: 'Organize as palavras pela sequência de um boletim de ocorrência: o que aconteceu, quem foi afetado, quais objetos foram levados, quando se percebeu e quem foi contatado.',
  },
  {
    title: 'Leitura e escrita — 厄年',
    bodyPt: 'Kanji-alvo: `世 主 産 界 送 幸 計 遅 配 弟 妹`. A leitura apresenta a crença em anos de azar, compara as dificuldades da narradora com a vida de outros estudantes e descreve o furto que a faz reconsiderar sua rejeição a superstições.',
    helpPt: 'Separe a leitura em quatro movimentos: explicação cultural, projeto de estudar no exterior, invasão do apartamento e mudança de atitude. Marque as passivas para identificar quem sofreu cada ação.',
  },
]

const dialogueOne: ScriptItem[] = [{
  label: '{会話|かいわ} I',
  lines: [
    { speaker: 'Anúncio', ja: '{第二十一課|だいにじゅういっか}　どろぼう　{会話|かいわ}{一|いち}', pt: 'Lição 21: Ladrão. Diálogo I.' },
    { speaker: 'John', ja: '{大家|おおや}さん、{大変|たいへん}です。どろぼうに{入|はい}られました。', pt: 'Senhora proprietária, aconteceu algo grave. Invadiram meu apartamento.' },
    { speaker: 'Proprietária', ja: 'えっ。{何|なに}かとられたんですか。', pt: 'O quê? Levaram alguma coisa?' },
    { speaker: 'John', ja: 'パソコンとスマホと……バイトでためたお{金|かね}もないです。', pt: 'Meu computador, meu celular... e o dinheiro que economizei no trabalho também sumiu.' },
    { speaker: 'Proprietária', ja: 'とにかく、{警察|けいさつ}に{連絡|れんらく}したほうがいいですよ。', pt: 'De qualquer forma, é melhor entrar em contato com a polícia.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: '{会話|かいわ} II',
  lines: [
    { speaker: 'Anúncio', ja: '{二|に}', pt: 'Diálogo II.' },
    { speaker: 'Policial', ja: 'かぎはかけてあったんですか。', pt: 'A porta estava trancada?' },
    { speaker: 'John', ja: 'さあ……きのうの{夜|よる}は{飲|の}んで{帰|かえ}ってきたから、かぎをかけたかどうかよく{覚|おぼ}えていないんです。', pt: 'Bem... como voltei para casa depois de beber ontem à noite, não me lembro bem se tranquei ou não.' },
    { speaker: 'Policial', ja: 'じゃあ、{何時|なんじ}ごろ{帰|かえ}ってきたか{覚|おぼ}えていますか。', pt: 'Então, lembra por volta de que horas voltou?' },
    { speaker: 'John', ja: '{終電|しゅうでん}だったから……たぶん、{一時半|いちじはん}ごろです。', pt: 'Peguei o último trem... então provavelmente foi por volta de uma e meia.' },
    { speaker: 'Policial', ja: 'どろぼうは、その{後|あと}{入|はい}ったんですね。', pt: 'Então o ladrão entrou depois disso.' },
    { speaker: 'John', ja: 'ええ。{朝|あさ}、{部屋|へや}がめちゃくちゃだったので、びっくりしたんです。', pt: 'Sim. De manhã, fiquei surpreso porque o quarto estava uma bagunça.' },
    { speaker: 'Policial', ja: '{寝|ね}ている{間|あいだ}にどろぼうに{入|はい}られて、{気|き}がつかなかったんですか。', pt: 'Invadiram enquanto você dormia e você não percebeu?' },
    { speaker: 'John', ja: 'はい……。', pt: 'Isso...' },
  ],
}]

const dialogueThree: ScriptItem[] = [{
  label: '{会話|かいわ} III',
  lines: [
    { speaker: 'Anúncio', ja: '{三|さん}', pt: 'Diálogo III.' },
    { speaker: 'Proprietária', ja: 'ジョンさん、{留守|るす}の{間|あいだ}に{警察|けいさつ}から{電話|でんわ}がありましたよ。{犯人|はんにん}が{捕|つか}まったので、{警察|けいさつ}に{来|き}てほしいそうです。', pt: 'John, a polícia telefonou enquanto você estava fora. Como o suspeito foi preso, disseram que querem que você vá à delegacia.' },
    { speaker: 'John', ja: 'ありがとうございます。よかった。', pt: 'Muito obrigado. Que alívio.' },
    { speaker: 'Proprietária', ja: 'それから、かぎを{新|あたら}しくしましたから、どうぞ。{本当|ほんとう}に{大変|たいへん}でしたね。', pt: 'Além disso, troquei a fechadura; aqui está a chave. Foi realmente difícil, não foi?' },
    { speaker: 'John', ja: 'ええ。でも、そのおかげで、いいこともありました。みんないろいろな{物|もの}をくれたり、おごってくれたりしたんです。', pt: 'Sim. Mas, por causa disso, também aconteceram coisas boas. Todos me deram várias coisas e pagaram refeições para mim.' },
    { speaker: 'Proprietária', ja: 'ジョンさんは、いい{友|とも}だちがたくさんいて、{幸|しあわ}せですね。', pt: 'John, você é feliz por ter tantos bons amigos.' },
  ],
}]

const repetitionScript = (items: ScriptItem[]): ScriptItem[] => items.map((item) => ({
  ...item,
  label: `${item.label} — repetição guiada`,
  lines: [
    { speaker: 'Instrução', ja: 'Please repeat each phrase.', pt: 'Repita cada frase.' },
    ...item.lines.filter((line) => line.speaker !== 'Anúncio'),
  ],
}))

const yakudoshiReading: ScriptItem[] = [{
  label: '{厄年|やくどし}',
  lines: [
    { speaker: 'Anúncio', ja: '{読み書き編|よみかきへん}　{第二十一課|だいにじゅういっか}　{二|に}　{厄年|やくどし}　B', pt: 'Parte de leitura e escrita, lição 21, seção II: Ano de azar. Seção B.' },
    { speaker: 'Narradora', ja: '「{厄年|やくどし}」という{言葉|ことば}を{聞|き}いたことがありますか。{昔|むかし}から{多|おお}くの{日本人|にほんじん}は、{厄年|やくどし}に{悪|わる}いことがよく{起|お}こると{信|しん}じています。', pt: 'Você já ouviu a palavra yakudoshi? Há muito tempo, muitos japoneses acreditam que coisas ruins acontecem com frequência em um ano de azar.' },
    { speaker: 'Narradora', ja: '{男|おとこ}の{人|ひと}の{厄年|やくどし}は{二十五歳|にじゅうごさい}と{四十二歳|よんじゅうにさい}と{六十一歳|ろくじゅういっさい}、{女|おんな}の{人|ひと}の{厄年|やくどし}は{十九歳|じゅうきゅうさい}と{三十三歳|さんじゅうさんさい}と{三十七歳|さんじゅうななさい}です。', pt: 'Para homens, os anos de azar são aos 25, 42 e 61 anos; para mulheres, aos 19, 33 e 37.' },
    { speaker: 'Narradora', ja: 'これはただの{迷信|めいしん}だと{言|い}う{人|ひと}もいますが、{厄年|やくどし}に{大変|たいへん}なことを{経験|けいけん}する{人|ひと}も{多|おお}いそうです。', pt: 'Alguns dizem que isso é apenas superstição, mas parece que muitas pessoas passam por situações difíceis no ano de azar.' },
    { speaker: 'Narradora', ja: 'ある{友|とも}だちは{台風|たいふう}で{家|いえ}が{壊|こわ}れてしまいました。ある{友|とも}だちは{飼|か}っていた{犬|いぬ}に{死|し}なれました。', pt: 'A casa de uma amiga foi destruída por um tufão. Outra amiga perdeu o cachorro que criava.' },
    { speaker: 'Narradora', ja: 'また、ある{友|とも}だちは{急|きゅう}に{重|おも}い{病気|びょうき}になって{入院|にゅういん}しなければいけませんでした。', pt: 'Outra amiga ficou gravemente doente de repente e precisou ser hospitalizada.' },
    { speaker: 'Narradora', ja: '{私|わたし}は{今年|ことし}が{厄年|やくどし}です。{友|とも}だちは{気|き}をつけたほうがいいと{言|い}いましたが、{私|わたし}は{占|うらな}いや{迷信|めいしん}が{大|だい}きらいなので、{初|はじ}めはぜんぜん{気|き}にしていませんでした。でも……', pt: 'Este é meu ano de azar. Meus amigos disseram que eu deveria tomar cuidado, mas odeio adivinhação e superstição, então no começo não me preocupei nem um pouco. Porém...' },
    { speaker: 'Narradora', ja: '{私|わたし}は{今|いま}、オーストラリアで{勉強|べんきょう}しています。{外国|がいこく}で{勉強|べんきょう}するのは{長|なが}い{間|あいだ}の{夢|ゆめ}でした。', pt: 'Agora estudo na Austrália. Estudar no exterior era meu sonho havia muito tempo.' },
    { speaker: 'Narradora', ja: '{日本|にほん}で{大学|だいがく}を{卒業|そつぎょう}してから、{一生懸命|いっしょうけんめい}{仕事|しごと}をしてお{金|かね}をためました。そして、{去年|きょねん}ここに{来|き}ました。', pt: 'Depois de me formar na universidade no Japão, trabalhei muito e economizei dinheiro. Então vim para cá no ano passado.' },
    { speaker: 'Narradora', ja: 'ここには{若|わか}い{日本人|にほんじん}の{留学生|りゅうがくせい}がたくさんいます。みんな{親|おや}にお{金|かね}を{送|おく}ってもらって、いいアパートに{住|す}んで、いい{車|くるま}に{乗|の}っています。', pt: 'Há muitos jovens estudantes japoneses aqui. Todos recebem dinheiro dos pais, moram em bons apartamentos e dirigem bons carros.' },
    { speaker: 'Narradora', ja: '{休|やす}みには、いろいろな{所|ところ}に{旅行|りょこう}に{行|い}ったりしています。{私|わたし}はそんなぜいたくができません。', pt: 'Nas férias, eles viajam para vários lugares. Eu não posso me dar a esse luxo.' },
    { speaker: 'Narradora', ja: '{安|やす}いアパートに{住|す}んで、めったに{外|そと}で{食事|しょくじ}をしたり、{旅行|りょこう}に{行|い}ったりしません。', pt: 'Moro em um apartamento barato e raramente como fora ou viajo.' },
    { speaker: 'Narradora', ja: 'でも、{夢|ゆめ}がかなったので、{毎日|まいにち}がとても{幸|しあわ}せでした。ほかの{日本人|にほんじん}をうらやましいと{思|おも}ったことはありませんでした。', pt: 'Mas, como meu sonho se realizou, eu era muito feliz todos os dias. Nunca senti inveja dos outros japoneses.' },
    { speaker: 'Narradora', ja: 'ところが、きのう{大変|たいへん}なことがありました。アパートに{帰|かえ}った{時|とき}、ドアのかぎが{壊|こわ}され、{部屋|へや}がめちゃくちゃになっていたのです。', pt: 'Porém, ontem aconteceu algo terrível. Quando voltei ao apartamento, a fechadura estava arrombada e o quarto estava todo revirado.' },
    { speaker: 'Narradora', ja: 'びっくりして{何|なに}が{起|お}こったのかわかりませんでした。でも、すぐ「どろぼうに{入|はい}られた。」と{気|き}がつきました。', pt: 'Fiquei tão surpresa que não entendi o que havia acontecido. Mas logo percebi: “Invadiram meu apartamento”.' },
    { speaker: 'Narradora', ja: 'いろいろな{物|もの}を{取|と}られました。パソコン、カメラ、{時計|とけい}、そして{自転車|じてんしゃ}も。', pt: 'Levaram várias coisas: computador, câmera, relógio e até a bicicleta.' },
    { speaker: 'Narradora', ja: 'ネットで{日本|にほん}の{家族|かぞく}と{話|はな}したり、ビデオを{見|み}たりするのは、{私|わたし}の{楽|たの}しみでした。', pt: 'Conversar pela internet com minha família no Japão e assistir a vídeos eram meus prazeres.' },
    { speaker: 'Narradora', ja: 'カメラにはオーストラリアで{初|はじ}めて{行|い}った{旅行|りょこう}の{写真|しゃしん}が{入|はい}っていました。{自転車|じてんしゃ}は、{学校|がっこう}に{通|かよ}う{時|とき}{使|つか}っていました。', pt: 'Na câmera estavam as fotos da primeira viagem que fiz na Austrália. Eu usava a bicicleta para ir à escola.' },
    { speaker: 'Narradora', ja: '{今日|きょう}からバスで{通|かよ}わなければいけません。バスはよく{遅|おく}れるし、{一時間|いちじかん}に{一台|いちだい}しか{来|こ}ないから、とても{不便|ふべん}です。', pt: 'A partir de hoje preciso ir de ônibus. O ônibus atrasa muito e só passa um por hora, então é muito inconveniente.' },
    { speaker: 'Narradora', ja: '「どうしてどろぼうは{私|わたし}のアパートに{入|はい}ったんだろう。どうしてお{金持|かねも}ちの{日本人|にほんじん}のアパートに{入|はい}らなかったんだろう。」と{思|おも}ってしまいました。', pt: 'Acabei pensando: “Por que o ladrão entrou no meu apartamento? Por que não entrou no de um japonês rico?”.' },
    { speaker: 'Narradora', ja: '{日本人|にほんじん}の{友|とも}だちに{話|はな}したら、「{厄年|やくどし}だから、やっぱり{悪|わる}いことが{起|お}こったんだよ。」と{言|い}われました。', pt: 'Quando contei a uma amiga japonesa, ela disse: “Como é seu ano de azar, uma coisa ruim acabou acontecendo mesmo”.' },
    { speaker: 'Narradora', ja: '{今|いま}、とても{心配|しんぱい}です。また{悪|わる}いことが{起|お}こるかもしれません。', pt: 'Agora estou muito preocupada. Talvez outra coisa ruim aconteça.' },
    { speaker: 'Narradora', ja: '{今度|こんど}、{弟|おとうと}か{妹|いもうと}にお{守|まも}りを{送|おく}ってもらおうと{思|おも}います。みなさんは{厄年|やくどし}を{信|しん}じますか。', pt: 'Da próxima vez, penso em pedir ao meu irmão mais novo ou à minha irmã mais nova que me envie um amuleto. Vocês acreditam em anos de azar?' },
  ],
}]

const yakudoshiLines = yakudoshiReading[0].lines
const amuletPlanLine = yakudoshiLines[yakudoshiLines.length - 1]
if (amuletPlanLine) {
  amuletPlanLine.pt = 'Agora, penso em pedir ao meu irm\u00e3o mais novo ou \u00e0 minha irm\u00e3 mais nova que me envie um amuleto. Voc\u00eas acreditam em anos de azar?'
}

const dialogueQuestions = [
  q('dialogue-1', 1, 'O que aconteceu no apartamento de John?', ['Houve um incêndio', 'Um ladrão entrou', 'A proprietária trocou os móveis', 'John perdeu a chave na rua'], 2, '`どろぼうに入られました` relata que o apartamento foi invadido.', { audio: questionAudio('K21_01', 'K21-01 — Invasão do apartamento') }),
  q('dialogue-2', 2, 'O que foi levado?', ['Somente a bicicleta', 'Computador, celular e dinheiro economizado', 'Passaporte e relógio', 'Chave e roupas'], 2, 'John cita `パソコン`, `スマホ` e `バイトでためたお金`.', { audio: questionAudio('K21_01', 'K21-01 — Invasão do apartamento') }),
  q('dialogue-3', 3, 'O que a proprietária aconselha John a fazer?', ['Dormir e esperar', 'Trocar de apartamento', 'Entrar em contato com a polícia', 'Telefonar para o trabalho'], 3, 'Ela diz `警察に連絡したほうがいい`.', { audio: questionAudio('K21_01', 'K21-01 — Invasão do apartamento') }),
  q('dialogue-4', 4, 'Por que John não se lembra se trancou a porta?', ['Estava com pressa', 'Voltou depois de beber', 'A chave estava quebrada', 'Outra pessoa trancou'], 2, '`飲んで帰ってきたから` explica a falta de memória.', { audio: questionAudio('K21_03', 'K21-03 — Depoimento à polícia') }),
  q('dialogue-5', 5, 'A que horas John provavelmente voltou?', ['À meia-noite', 'Por volta de uma e meia', 'Às três', 'De manhã'], 2, 'Ele responde `たぶん、一時半ごろです`.', { audio: questionAudio('K21_03', 'K21-03 — Depoimento à polícia') }),
  q('dialogue-6', 6, 'Quando o ladrão provavelmente entrou?', ['Antes de John sair', 'Enquanto John dormia', 'Durante o telefonema', 'Depois da chegada da polícia'], 2, 'O policial confirma `寝ている間にどろぼうに入られて`.', { audio: questionAudio('K21_03', 'K21-03 — Depoimento à polícia') }),
  q('dialogue-7', 7, 'Por que a polícia quer que John vá à delegacia?', ['A chave foi encontrada', 'O suspeito foi preso', 'John esqueceu um documento', 'A proprietária reclamou'], 2, '`犯人が捕まったので` apresenta o motivo.', { audio: questionAudio('K21_05', 'K21-05 — Notícias depois do incidente') }),
  q('dialogue-8', 8, 'Que consequência positiva John menciona?', ['Ganhou um emprego', 'Os amigos deram coisas e pagaram refeições', 'Mudou para um apartamento maior', 'Recebeu dinheiro da polícia'], 2, 'Os amigos `いろいろな物をくれたり、おごってくれたりした`.', { audio: questionAudio('K21_05', 'K21-05 — Notícias depois do incidente') }),
]

const grammarQuestions = [
  q('grammar-1', 9, '`食べる` → forma passiva', ['食べれる', '食べられる', '食べさせる', '食べられ'], 2, 'Verbo ru: retire `る` e acrescente `られる`.', { audio: questionAudio('K21_09', 'K21-09 — Formação da passiva') }),
  q('grammar-2', 10, '`行く` → forma passiva', ['行ける', '行かれる', '行きられる', '行かせる'], 2, 'Verbo u: `く` muda para `か` + `れる`.', { audio: questionAudio('K21_09', 'K21-09 — Formação da passiva') }),
  q('grammar-3', 11, '`する／くる` → formas passivas', ['すられる／きられる', 'される／こられる', 'させる／こさせる', 'できる／これる'], 2, 'As formas irregulares são `される` e `こられる`.', { audio: questionAudio('K21_09', 'K21-09 — Formação da passiva') }),
  q('grammar-4', 12, '友だちが私の車を使いました。→ foco no meu incômodo', ['私は友だちに車を使われました', '私は友だちを車に使われました', '友だちは私に車を使いました', '車は友だちが使えました'], 1, 'A pessoa afetada é `私は`, o agente é `友だちに` e a ação é `使われました`.', { audio: questionAudio('K21_10', 'K21-10 — Experiências ruins na passiva') }),
  q('grammar-5', 13, '私はどろぼう（　）お金を盗まれました。', ['が', 'を', 'に', 'で'], 3, 'O agente da ação passiva recebe `に`.', { audio: questionAudio('K21_10', 'K21-10 — Experiências ruins na passiva') }),
  q('grammar-6', 14, '山下先生はだれかにパスワードを盗まれたそうです。', ['O professor roubou uma senha', 'Parece que alguém roubou a senha do professor', 'O professor esqueceu a senha', 'Alguém recebeu uma senha'], 2, '`先生は` é o afetado e `だれかに` é o agente não identificado.'),
  q('grammar-7', 15, 'Qual contraste está correto?', ['読まれる = conseguir ler; 読める = ser lido', '読まれる = ser lido; 読める = conseguir ler', 'As duas formas significam ler', 'As duas são causativas'], 2, 'Para verbo u, passiva e potencial diferem: `読まれる` versus `読める`.'),
  q('grammar-8', 16, 'Qual passiva pode ser neutra ou positiva?', ['どろぼうに入られました', '友だちにデートに誘われました', '蚊に刺されました', '財布を盗まれました'], 2, '`誘われる` pode apenas relatar um convite, sem incômodo.'),
  q('grammar-9', 17, 'Qual frase apresenta um favor pedido e recebido?', ['姉に日記を読まれました', '父に本を読んでもらいました', '友だちに笑われました', '雨に降られました'], 2, '`〜てもらう` mostra que o falante recebeu intencionalmente o benefício da ação.'),
  q('grammar-10', 18, '寒いので、ヒーターが（　）。', ['つけています', 'つけてあります', 'ついてあります', 'つけられます'], 2, 'Alguém ligou o aquecedor de propósito e o resultado permanece: `つけてあります`.', { audio: questionAudio('K21_11', 'K21-11 — Estados preparados com てある') }),
  q('grammar-11', 19, '予約をしておきました。→ resultado que ainda vale', ['予約がしてあります', '予約をしています', '予約がしてしまいます', '予約にしてあります'], 1, '`予約がしてあります` descreve a reserva já feita como preparação.', { audio: questionAudio('K21_11', 'K21-11 — Estados preparados com てある') }),
  q('grammar-12', 20, 'テーブルの上に花（　）置いてあります。', ['を', 'が', 'に', 'で'], 2, 'Em `〜てある`, o objeto preparado costuma passar de `を` para `が`.', { audio: questionAudio('K21_11', 'K21-11 — Estados preparados com てある') }),
  q('grammar-13', 21, 'Qual frase enfatiza que alguém fechou e manteve a janela assim?', ['窓が閉まっています', '窓が閉めてあります', '窓を閉まっています', '窓が閉めています'], 2, 'Transitivo `閉める` + `てある` preserva a intenção humana; `閉まっている` apenas descreve o estado.'),
  q('grammar-14', 22, 'お風呂に入っている（　）電話がありました。', ['間', '間に', 'まで', 'あとで'], 2, 'O telefonema é um evento curto dentro do período do banho: `間に`.', { audio: questionAudio('K21_12', 'K21-12 — Eventos com 間に') }),
  q('grammar-15', 23, '（　）間に友だちが来ました。', ['留守', '留守の', '留守に', '留守で'], 2, 'Substantivo antes de `間に` recebe `の`: `留守の間に`.', { audio: questionAudio('K21_12', 'K21-12 — Eventos com 間に') }),
  q('grammar-16', 24, 'ルームメイトが買い物をしている（　）、私は本を読んで待ちました。', ['間に', '間', '時にだけ', 'までに'], 2, 'A leitura e a espera duram durante todo o período da compra, por isso usamos `間`.'),
  q('grammar-17', 25, 'Em uma narrativa passada, antes de `間に` usamos normalmente:', ['forma curta presente', 'forma て passada', 'imperativo', 'radical de ます'], 1, '`寝ている間に地震がありました` mantém `いる` no presente, embora o evento principal seja passado.'),
  q('grammar-18', 26, '`冷たい` → “deixar mais frio”', ['冷たいにする', '冷たくする', '冷たくなる', '冷たいする'], 2, 'Adjetivo い: retire `い` e acrescente `くする`.', { audio: questionAudio('K21_13', 'K21-13 — Mudança deliberada com adjetivo + する') }),
  q('grammar-19', 27, '`簡単な` → “tornar mais simples”', ['簡単くする', '簡単にする', '簡単になる', '簡単だする'], 2, 'Adjetivo な usa `にする`.', { audio: questionAudio('K21_13', 'K21-13 — Mudança deliberada com adjetivo + する') }),
  q('grammar-20', 28, '部屋をきれいにしました。', ['O quarto ficou limpo sozinho', 'Alguém limpou/deixou o quarto limpo', 'O quarto será alugado', 'Alguém entrou no quarto'], 2, '`を + きれいにする` mostra uma mudança provocada por alguém.'),
  q('grammar-21', 29, '静かにしてください。', ['Faça silêncio, por favor', 'Fale mais alto', 'O lugar ficou silencioso', 'Não entre'], 1, '`静かにする` tem o uso idiomático de ficar/fazer silêncio.'),
  q('grammar-22', 30, '“Quero que minha irmã arrume o quarto.”', ['妹が部屋を片付けたいです', '妹に部屋を片付けてほしいです', '妹を部屋に片付けてほしいです', '妹に部屋を片付けられました'], 2, 'A pessoa desejada recebe `に` e a ação fica em `て + ほしい`.', { audio: questionAudio('K21_14', 'K21-14 — Desejos com てほしい') }),
  q('grammar-23', 31, '“Não quero que meu pai fale sobre o passado.”', ['父に昔の話をしてほしくないです', '父が昔の話をしたくないです', '父に昔の話をされたいです', '父を昔の話にしてほしいです'], 1, 'Negue `ほしい`: `してほしくない`.', { audio: questionAudio('K21_14', 'K21-14 — Desejos com てほしい') }),
  q('grammar-24', 32, '日本人の友だちに英語で（　）。', ['話してほしくないです', '話さないでほしいです', '話されてほしいです', '話したくないです'], 2, '`話さないでほしい` significa “quero que não falem”.'),
  q('grammar-25', 33, 'Qual correspondência está correta?', ['行きたい = quero que alguém vá', '靴がほしい = quero sapatos', '片付けてほしい = quero arrumar', '行ってほしい = quero ir'], 2, '`N がほしい` expressa o objeto desejado; `〜たい` é ação própria e `〜てほしい`, ação alheia.'),
]

// Make the intended contrast explicit where multiple forms are grammatical
// without the added duration marker or requested construction.
grammarQuestions[15].prompt = '\u30eb\u30fc\u30e0\u30e1\u30a4\u30c8\u304c\u8cb7\u3044\u7269\u3092\u3057\u3066\u3044\u308b\uff08\u3000\uff09\u3001\u79c1\u306f\u305a\u3063\u3068\u672c\u3092\u8aad\u3093\u3067\u5f85\u3061\u307e\u3057\u305f\u3002'
grammarQuestions[23].prompt = 'Complete com \u301c\u306a\u3044\u3067\u307b\u3057\u3044: \u65e5\u672c\u4eba\u306e\u53cb\u3060\u3061\u306b\u82f1\u8a9e\u3067\uff08\u3000\uff09\u3002'

const vocabularyReadingQuestions = [
  q('vocabulary-1', 34, '{泥棒|どろぼう}', ['proprietário', 'ladrão', 'policial', 'colega'], 2, '`泥棒` é ladrão ou assaltante.', { audio: questionAudio('K21_07', 'K21-07 — Vocabulário da lição') }),
  q('vocabulary-2', 35, '{犯人|はんにん}', ['vítima', 'suspeito/culpado', 'testemunha', 'proprietário'], 2, '`犯人` é a pessoa responsável pelo crime.', { audio: questionAudio('K21_07', 'K21-07 — Vocabulário da lição') }),
  q('vocabulary-3', 36, '{留守|るす}', ['estar ausente de casa', 'estar preso', 'estar em silêncio', 'estar atrasado'], 1, '`留守` indica ausência do local, especialmente de casa.', { audio: questionAudio('K21_07', 'K21-07 — Vocabulário da lição') }),
  q('vocabulary-4', 37, '{終電|しゅうでん}', ['primeiro trem', 'trem expresso', 'último trem do dia', 'trem fora de serviço'], 3, '`終電` é o último trem em operação naquele dia.', { audio: questionAudio('K21_08', 'K21-08 — Produção do vocabulário') }),
  q('vocabulary-5', 38, '{捕|つか}まる', ['ser preso; ser capturado', 'prender alguém', 'roubar', 'denunciar'], 1, '`捕まる` é intransitivo: o suspeito é capturado.', { audio: questionAudio('K21_08', 'K21-08 — Produção do vocabulário') }),
  q('vocabulary-6', 39, '{連絡|れんらく}する', ['comparar', 'entrar em contato', 'rejeitar', 'reclamar'], 2, '`連絡する` significa contatar ou comunicar.', { audio: questionAudio('K21_08', 'K21-08 — Produção do vocabulário') }),
  q('reading-1', 40, 'Quais são os anos de azar dos homens citados no texto?', ['19, 33 e 37', '25, 42 e 61', '20, 40 e 60', '25, 33 e 42'], 2, 'O texto lista `二十五歳と四十二歳と六十一歳`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-2', 41, 'Quais são os anos de azar das mulheres citados no texto?', ['19, 33 e 37', '25, 42 e 61', '18, 30 e 36', '20, 35 e 40'], 1, 'O texto lista `十九歳と三十三歳と三十七歳`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-3', 42, 'Qual infortúnio NÃO aconteceu aos amigos da narradora?', ['Casa destruída por tufão', 'Morte do cachorro', 'Hospitalização por doença grave', 'Perda de emprego'], 4, 'O texto menciona tufão, cachorro e doença; não menciona perda de emprego.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-4', 43, 'Onde a narradora estuda?', ['Estados Unidos', 'Austrália', 'Inglaterra', 'Japão'], 2, '`オーストラリアで勉強しています`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-5', 44, 'Como ela financiou o sonho de estudar no exterior?', ['Recebeu dinheiro dos pais', 'Trabalhou muito e economizou', 'Ganhou uma bolsa completa', 'Vendeu o apartamento'], 2, '`一生懸命仕事をしてお金をためました`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-6', 45, 'Por que ela não tinha inveja dos outros estudantes japoneses?', ['Tinha mais dinheiro', 'Seu próprio sonho havia se realizado', 'Não gostava de viajar', 'Morava com a família'], 2, 'Embora não pudesse ter os mesmos luxos, `夢がかなったので` ela se sentia feliz.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-7', 46, 'O que a narradora viu ao voltar ao apartamento?', ['Uma carta da polícia', 'Fechadura arrombada e quarto revirado', 'Amigos esperando', 'A bicicleta na porta'], 2, '`ドアのかぎが壊され、部屋がめちゃくちゃになっていた`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-8', 47, 'Quais objetos foram levados?', ['Computador, câmera, relógio e bicicleta', 'Celular, passaporte e carro', 'Dinheiro e roupas', 'Somente a câmera'], 1, 'A lista do texto é `パソコン、カメラ、時計、そして自転車も`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-9', 48, 'Por que passar a ir de ônibus é inconveniente?', ['É caro e lotado', 'Atrasa e passa apenas um por hora', 'Não chega à escola', 'Só funciona à noite'], 2, '`よく遅れるし、一時間に一台しか来ない`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
  q('reading-10', 49, 'O que a narradora decide fazer no final?', ['Voltar ao Japão', 'Pedir a um irmão que envie um amuleto', 'Comprar outro carro', 'Mudar de escola'], 2, 'Ela pensa em pedir ao irmão ou à irmã mais nova que envie `お守り`.', { audio: questionAudio('Y21', 'Y21 — Leitura sobre 厄年') }),
]

const listeningQuestions = [
  q('listening-a1', 50, 'W21-A, diálogo 1: por que o homem está com sono?', ['Jogou até tarde', 'Foi acordado cedo pelo alarme do vizinho', 'Perdeu o último trem', 'Trabalhou de madrugada'], 2, '`隣の人のアラームで起こされちゃった` apresenta a causa.', { audio: questionAudio('W21_A', 'W21-A — Problemas e conselhos') }),
  q('listening-a2', 51, 'W21-A, diálogo 1: por que o alarme continua sendo um problema?', ['O vizinho não acorda logo', 'O aparelho está quebrado', 'Toca apenas à noite', 'O homem não sabe desligar'], 1, 'Ele explica `その人、すぐ起きないから` e diz que já é a terceira vez.', { audio: questionAudio('W21_A', 'W21-A — Problemas e conselhos') }),
  q('listening-a3', 52, 'W21-A, diálogo 1: qual é o conselho?', ['Comprar outro alarme', 'Dizer ao vizinho para fazer silêncio', 'Mudar de emprego', 'Dormir mais cedo'], 2, '`静かにしてくださいって言ったほうがいい`.', { audio: questionAudio('W21_A', 'W21-A — Problemas e conselhos') }),
  q('listening-a4', 53, 'W21-A, diálogo 2: por que o homem está com a mesma roupa de ontem?', ['Dormiu no trabalho', 'A esposa trancou a porta e ele não entrou', 'Perdeu a mala', 'Foi preso'], 2, 'Quando voltou por volta das três, `奥さんに鍵をかけられちゃって` e ficou do lado de fora.', { audio: questionAudio('W21_A', 'W21-A — Problemas e conselhos') }),
  q('listening-a5', 54, 'W21-A, diálogo 2: o que a amiga sugere?', ['Pedir divórcio', 'Comprar um presente para a esposa', 'Trocar a fechadura', 'Voltar mais tarde'], 2, 'Ela recomenda `奥さんに何かプレゼントを買って帰ったほうがいい`.', { audio: questionAudio('W21_A', 'W21-A — Problemas e conselhos') }),
  q('listening-b1', 55, 'W21-B: o que aconteceu com o leite de Kento?', ['Estragou', 'O colega Hayashi bebeu tudo', 'Kento derrubou', 'Foi levado pelo professor'], 2, '`ルームメートの林に全部飲まれた`.', { audio: questionAudio('W21_B', 'W21-B — O pior dia de Kento') }),
  q('listening-b2', 56, 'W21-B: o que Hayashi fez com o relatório?', ['Corrigiu', 'Imprimiu', 'Apagou o arquivo', 'Entregou ao professor'], 3, 'Kento diz `林にファイルを消された`.', { audio: questionAudio('W21_B', 'W21-B — O pior dia de Kento') }),
  q('listening-b3', 57, 'W21-B: qual era o prazo do relatório de história?', ['Naquele dia', 'No dia seguinte', 'Na semana seguinte', 'Não havia prazo'], 1, 'O amigo confirma `今日、締め切りだっただろう`.', { audio: questionAudio('W21_B', 'W21-B — O pior dia de Kento') }),
  q('listening-b4', 58, 'W21-B: por que o professor brigou com Kento?', ['Ele dormiu', 'Escreveu o relatório de história na aula de economia', 'Faltou à aula', 'Usou o computador do professor'], 2, '`経済のクラスで歴史のレポートを書いていた` e o professor o viu.', { audio: questionAudio('W21_B', 'W21-B — O pior dia de Kento') }),
  q('listening-c1', 59, 'W21-C: onde o hóspede estava durante o furto?', ['No restaurante', 'Na fonte termal', 'Na recepção', 'Na delegacia'], 2, '`温泉に行っている間に泥棒に入られた`.', { audio: questionAudio('W21_C', 'W21-C — Furto no hotel') }),
  q('listening-c2', 60, 'W21-C: onde a carteira havia sido deixada?', ['No cofre', 'Sobre a mesa do quarto', 'Na fonte termal', 'Na recepção'], 2, 'O hóspede acredita que a deixou `テーブルの上`.', { audio: questionAudio('W21_C', 'W21-C — Furto no hotel') }),
  q('listening-c3', 61, 'W21-C: o hóspede se lembra de ter trancado o quarto?', ['Sim, claramente', 'Não; não se lembra bem', 'A chave foi perdida', 'O funcionário trancou'], 2, '`かけたかどうかよく覚えていない`.', { audio: questionAudio('W21_C', 'W21-C — Furto no hotel') }),
  q('listening-c4', 62, 'W21-C: quem entrará em contato com a polícia?', ['O hóspede', 'O funcionário do hotel', 'Outro hóspede', 'A família'], 2, 'O funcionário diz `警察をお呼びします`.', { audio: questionAudio('W21_C', 'W21-C — Furto no hotel') }),
  q('listening-c5', 63, 'W21-C: onde o hóspede deve esperar?', ['Na recepção', 'Na fonte termal', 'No quarto', 'Na delegacia'], 3, '`お部屋でお待ちください`.', { audio: questionAudio('W21_C', 'W21-C — Furto no hotel') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K21_01: dialogueOne,
  K21_02: repetitionScript(dialogueOne),
  K21_03: dialogueTwo,
  K21_04: repetitionScript(dialogueTwo),
  K21_05: dialogueThree,
  K21_06: repetitionScript(dialogueThree),
  Y21: yakudoshiReading,
}

const audioCodes = [
  ...Array.from({ length: 14 }, (_, index) => `K21_${String(index + 1).padStart(2, '0')}`),
  'Y21',
  'W21_A',
  'W21_B',
  'W21_C',
]

const dialogueCodes = new Set(['K21_01', 'K21_03', 'K21_05'])
const dialogueSupportCodes = new Set(['K21_02', 'K21_04', 'K21_06'])
const vocabularyCodes = new Set(['K21_07', 'K21_08'])

const kindForCode = (code: string): AudioTrackKind => {
  if (code.startsWith('Y')) return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (dialogueCodes.has(code)) return 'dialogue'
  if (dialogueSupportCodes.has(code)) return 'dialogue-support'
  if (vocabularyCodes.has(code)) return 'vocabulary'
  return 'drill'
}

const linkedQuestionIds: Record<string, string[]> = {
  K21_01: ['dialogue-1', 'dialogue-2', 'dialogue-3'],
  K21_02: ['dialogue-1', 'dialogue-2', 'dialogue-3'],
  K21_03: ['dialogue-4', 'dialogue-5', 'dialogue-6'],
  K21_04: ['dialogue-4', 'dialogue-5', 'dialogue-6'],
  K21_05: ['dialogue-7', 'dialogue-8'],
  K21_06: ['dialogue-7', 'dialogue-8'],
  K21_07: ['vocabulary-1', 'vocabulary-2', 'vocabulary-3'],
  K21_08: ['vocabulary-4', 'vocabulary-5', 'vocabulary-6'],
  K21_09: ['grammar-1', 'grammar-2', 'grammar-3'],
  K21_10: ['grammar-4', 'grammar-5'],
  K21_11: ['grammar-10', 'grammar-11', 'grammar-12'],
  K21_12: ['grammar-14', 'grammar-15'],
  K21_13: ['grammar-18', 'grammar-19'],
  K21_14: ['grammar-22', 'grammar-23'],
  Y21: Array.from({ length: 10 }, (_, index) => `reading-${index + 1}`),
  W21_A: Array.from({ length: 5 }, (_, index) => `listening-a${index + 1}`),
  W21_B: Array.from({ length: 4 }, (_, index) => `listening-b${index + 1}`),
  W21_C: Array.from({ length: 5 }, (_, index) => `listening-c${index + 1}`),
}

const groupForCode = (code: string): string => {
  if (code.startsWith('W')) return `${lessonPrefix}-listening`
  if (code.startsWith('Y') || vocabularyCodes.has(code)) return `${lessonPrefix}-reading`
  if (dialogueCodes.has(code) || dialogueSupportCodes.has(code)) return `${lessonPrefix}-dialogue`
  return `${lessonPrefix}-grammar`
}

const purposeForKind = (kind: AudioTrackKind): string => {
  if (kind === 'dialogue') return 'Compreender a conversa completa e reconhecer a passiva e as demais estruturas da lição em contexto.'
  if (kind === 'dialogue-support') return 'Repetir o diálogo em blocos e consolidar compreensão, ritmo e respostas automáticas.'
  if (kind === 'reading') return 'Acompanhar a leitura integral, relacionando grafia, furigana, sentido e organização do relato.'
  if (kind === 'workbook') return 'Resolver a tarefa objetiva do workbook e justificar a resposta com uma pista concreta da gravação.'
  if (kind === 'vocabulary') return 'Recuperar significado e pronúncia do vocabulário antes de aplicá-lo nas situações da lição.'
  return 'Produzir a estrutura solicitada durante as pausas e comparar forma, partícula e pronúncia com o modelo.'
}

const audios: AudioTrack[] = audioCodes.map((code) => {
  const metadata = genki2AudioSourceByCode[code]
  const kind = kindForCode(code)
  const script = scripts[code] ?? []
  const activity = metadata?.sourceActivityPt ?? `Faixa ${code}`
  const purposePt = purposeForKind(kind)
  const source = metadata?.material === 'workbook' ? 'Workbook' : 'Textbook'
  const exerciseIds = (linkedQuestionIds[code] ?? []).map((id) => `${lessonPrefix}-${id}`)

  return {
    id: trackId(code),
    code,
    kind,
    language: kind === 'vocabulary' || kind === 'drill' || kind === 'dialogue-support' ? 'mixed' : 'ja',
    title: activity,
    descriptionPt: `${activity}. ${purposePt}`,
    purposePt,
    instructionsPt: kind === 'workbook'
      ? ['Leia a tarefa correspondente antes de tocar.', 'Ouça uma vez sem pausar e registre sua hipótese.', 'Ouça novamente, localize a evidência e responda aos cartões vinculados.']
      : kind === 'drill' || kind === 'vocabulary'
        ? ['Identifique a resposta solicitada.', 'Pause e produza em voz alta antes do modelo.', 'Repita os itens difíceis e faça os cartões vinculados.']
        : ['Ouça uma vez sem tradução e identifique situação e intenção.', 'Confira o roteiro somente após formular sua hipótese.', 'Repita um papel em voz alta e responda aos cartões vinculados.'],
    sourceRefPt: `${source} Genki II, 3ª ed., p. ${metadata?.sourcePage ?? '—'}, faixa ${code}`,
    sourceActivityPt: activity,
    sourcePage: metadata?.sourcePage,
    practiceTaskPt: kind === 'workbook'
      ? 'Responda sem transcrição; depois repita o trecho que contém a evidência e confira a explicação do cartão.'
      : kind === 'reading'
        ? 'Pause ao fim de cada parágrafo, resuma a ideia em português e releia a frase japonesa sem olhar a tradução.'
        : kind === 'dialogue' || kind === 'dialogue-support'
          ? 'Ouça sem texto, reconte a situação em três frases e represente um dos papéis acompanhando o roteiro apenas na segunda tentativa.'
          : 'Use as pausas para produzir a forma solicitada antes do modelo; repita apenas os itens em que forma ou partícula divergir.',
    exerciseGroupIds: [groupForCode(code)],
    exerciseIds,
    exerciseLinkKind: 'direct',
    src: `${BASE}/${code}.mp3`,
    script,
    transcript: script.length
      ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script }
      : undefined,
  }
})

export const genki2Lesson21: Section = {
  id: 'lesson-21',
  level: 'genki-2',
  titleJa: '第21課　どろぼう',
  titlePt: 'Lição 21 — Ladrão',
  summaryPt: 'Experiências ruins e incidentes, voz passiva, resultados preparados com 〜てある, eventos com 〜間に, mudanças com adjetivo + する, desejos com 〜てほしい, leitura sobre 厄年 e compreensão auditiva.',
  studyNotes,
  groups: [
    group('dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    group('grammar', '文法 1〜5', 'voz passiva e demais pontos gramaticais', grammarQuestions),
    group('reading', '読み書き', 'vocabulário, kanji e leitura sobre 厄年', vocabularyReadingQuestions),
    group('listening', '聞く練習', 'compreensão auditiva do workbook', listeningQuestions),
  ],
  audios,
}
