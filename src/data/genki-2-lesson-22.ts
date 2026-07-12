import {
  buildGenki2Audios,
  genki2Group,
  genki2Question,
  genki2QuestionAudio,
} from './genki-2-lesson-utils'
import type { Question, ScriptItem, Section, StudyNote } from './types'

const LESSON = 22

const q = (
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extras: Partial<Pick<Question, 'assessment' | 'audio' | 'context' | 'helpPt' | 'translationPt'>> = {},
) => {
  const defaultHelpPt = extras.audio
    ? 'Volte ao trecho indicado e procure esta evid\u00eancia: ' + explanationPt
    : 'Antes de responder, identifique a estrutura ou palavra-chave. Depois confira: ' + explanationPt

  return genki2Question(LESSON, id, number, prompt, choices, answer, explanationPt, {
    ...extras,
    helpPt: extras.helpPt ?? defaultHelpPt,
  })
}

const audio = (code: string, title: string) => genki2QuestionAudio(LESSON, code, title)

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situações da lição',
    bodyPt: 'Mana discute com a mãe sobre a prova e a universidade; depois conversa com Mary sobre a educação que recebeu. Mary e Takeshi refletem sobre a pressão exercida sobre crianças no Japão. A lição permite falar de fazer ou deixar alguém agir, dar instruções, formular condições e contrastar fatos que frustram uma expectativa.',
    helpPt: 'Observe quem tem poder de decisão em cada frase. Esse papel ajuda a escolher sujeito, pessoa que realiza a ação e o sentido “obrigar” ou “permitir” da causativa.',
  },
  {
    title: '1. Forma causativa',
    bodyPt: 'A causativa descreve alguém fazendo ou deixando outra pessoa realizar uma ação. Verbos ru: retire `る` e acrescente `させる`: `食べる→食べさせる`. Verbos u: troque a mora final para a coluna `a` e acrescente `せる`: `行く→行かせる`, `読む→読ませる`, `買う→買わせる`. Irregulares: `くる→こさせる`, `する→させる`.',
    helpPt: 'Use a frase-base “A faz X” e acrescente quem dirige a situação. `学生が会話を覚える` vira `先生は学生に会話を覚えさせる`: o professor faz os alunos memorizarem.',
  },
  {
    title: 'Partículas e interpretação da causativa',
    bodyPt: 'Quem manda ou permite recebe `は`/`が`; quem executa a ação costuma receber `に` quando o verbo original é transitivo: `先生は学生に会話を覚えさせました`. Com verbo original intransitivo, o executor costuma receber `を`: `母は子供を学校に行かせました`. A mesma forma pode significar obrigar ou permitir; contexto, relação de poder e benefício esclarecem o sentido.',
    helpPt: 'Se já existe um objeto com `を` na frase-base, marque a pessoa com `に`. Se a ação original apenas envolve deslocamento ou outra mudança intransitiva, `を` marca quem é levado a agir.',
  },
  {
    title: '2. Causativa + てあげる／てくれる e てください',
    bodyPt: 'A causativa sozinha não revela claramente se a pessoa queria agir. `〜させてあげる` mostra que o diretor permite a ação como favor: `私は妹を旅行に行かせてあげました`. `〜させてくれる` mostra que alguém permitiu algo ao falante: `両親は私を留学させてくれました`. Para pedir permissão: `〜させてください` — “por favor, deixe-me...”.',
    helpPt: 'Escolha pelo ponto de vista. Se eu concedo liberdade a outra pessoa, `あげる`; se recebo permissão, `くれる`; se peço diretamente para fazer algo, `てください`.',
  },
  {
    title: '3. Radical verbal + なさい',
    bodyPt: '`radical + なさい` é uma ordem firme, comum de pais para filhos e em instruções de prova: `十時までに帰りなさい` e `かっこの中に単語を入れなさい`. Para “pare de...”, use dicionário + `のをやめなさい`: `文句を言うのをやめなさい`.',
    helpPt: 'Não trate `なさい` como um pedido polido comum. Entre adultos sem relação hierárquica, `てください` costuma ser mais apropriado.',
  },
  {
    title: '4. Condicional 〜ば',
    bodyPt: '`AばB` apresenta A como condição suficiente para o resultado B, muitas vezes favorável. Verbos ru: `食べる→食べれば`; verbos u: `行く→行けば`, `待つ→待てば`, `買う→買えば`; `する→すれば`, `くる→くれば`. Negativa: troque `ない` por `なければ`. Exemplos: `車があれば、いろいろな所に行けます` e `単語を覚えれば大丈夫です`.',
    helpPt: 'Use `ば` para conselho quando A garante ou favorece B: “faça A e ficará tudo bem”. Para uma sequência específica sem essa relação, `たら` pode soar mais natural.',
  },
  {
    title: '5. 〜のに — resultado contrário à expectativa',
    bodyPt: '`AのにB` conecta dois fatos: dado A, esperaríamos o contrário de B. Use forma curta antes de `のに`; substantivos e adjetivos `な` afirmativos recebem `な`: `この会社はお金があるのに、給料は安いです`; `田中さんは親切なのに、山田さんは田中さんがきらいです`. Como B deve ser factual, pedidos e sugestões normalmente não aparecem ali.',
    helpPt: 'Diga primeiro a expectativa: “se A, eu esperaria X”. Se o fato real é não-X, una A e o fato com `のに`. A estrutura costuma carregar surpresa, frustração ou crítica.',
  },
  {
    title: 'Vocabulário, educação e leitura',
    bodyPt: 'Vocabulário central: `塾` (curso preparatório), `教育`, `親`, `子供`, `高校生`, `大学生`, `期末試験`, `就職`, `自由`, `厳しい`, `育てる`, `心配する`, `遊ぶ` e `習わせる`. A leitura é o diário de Sakura e acompanha a relação à distância entre ela e Ryō, além da tentativa de apresentar Kuroki a Natsuki.',
    helpPt: 'Na leitura, faça uma linha do tempo com três datas. Em cada entrada, anote o fato, a interpretação de Sakura e o que ela ainda não sabe; isso evita confundir suposição com informação confirmada.',
  },
]

const dialogueOne: ScriptItem[] = [{
  label: '会話 I',
  lines: [
    { speaker: 'お母さん', ja: 'まな、{勉強|べんきょう}しなさい。{来週|らいしゅう}は{期末試験|きまつしけん}があるのにぜんぜん{勉強|べんきょう}していないでしょ。', pt: 'Mana, estude. Mesmo tendo prova final na semana que vem, você não está estudando nada.' },
    { speaker: 'まな', ja: 'お{母|かあ}さん、{私|わたし}、もう{十七|じゅうしち}なんだから、{少|すこ}しほっておいてよ。', pt: 'Mãe, eu já tenho dezessete anos; me deixe um pouco em paz.' },
    { speaker: 'お母さん', ja: '{今|いま}、がんばっておけば、いい{大学|だいがく}に{入|はい}れて、{後|あと}で{楽|らく}になるんだから。', pt: 'Se você se esforçar agora, entrará numa boa universidade e sua vida ficará mais fácil depois.' },
    { speaker: 'まな', ja: '{私|わたし}、{別|べつ}にいい{大学|だいがく}に{行|い}けなくてもいい。', pt: 'Para mim, não tem problema se eu não conseguir ir a uma universidade boa.' },
    { speaker: 'お母さん', ja: 'お{父|とう}さんとお{母|かあ}さんはあなたをいい{大学|だいがく}に{行|い}かせてあげたいの。お{母|かあ}さんのうちは{貧乏|びんぼう}だったから、{大学|だいがく}に{行|い}かせてくれなかったのよ。', pt: 'Seu pai e eu queremos deixar você ir a uma boa universidade. Minha família era pobre e meus pais não me deixaram cursar a universidade.' },
    { speaker: 'まな', ja: 'わかった、わかった。その{話|はなし}、もう{何度|なんど}も{聞|き}いた。', pt: 'Entendi, entendi. Já ouvi essa história muitas vezes.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: '会話 II',
  lines: [
    { speaker: 'まな', ja: 'メアリーも、{高校|こうこう}の{時|とき}、こんなふうだった？', pt: 'Mary, quando estava no ensino médio, sua vida também era assim?' },
    { speaker: 'メアリー', ja: 'そうねえ、やっぱり{親|おや}はうるさかったけど、もう{少|すこ}し{自由|じゆう}があったかな。', pt: 'Deixe-me pensar... Meus pais também pegavam no meu pé, mas acho que eu tinha um pouco mais de liberdade.' },
    { speaker: 'まな', ja: 'うちの{親|おや}、ちょっと{変|へん}だと{思|おも}うでしょ。', pt: 'Você acha que meus pais são um pouco estranhos, não acha?' },
    { speaker: 'メアリー', ja: 'そんなことないよ。ちょっと{厳|きび}しいかもしれないけど、まなちゃんのことを{心配|しんぱい}しているんだよ。', pt: 'Não acho. Talvez sejam um pouco rigorosos, mas estão preocupados com você.' },
  ],
}]

const dialogueThree: ScriptItem[] = [{
  label: '会話 III',
  lines: [
    { speaker: 'メアリー', ja: 'うちのまなちゃん、{高校生|こうこうせい}なのに{忙|いそが}しくて、ぜんぜん{遊|あそ}ぶ{時間|じかん}がないみたい。', pt: 'Minha irmã anfitriã Mana é estudante do ensino médio, mas parece tão ocupada que não tem tempo algum para brincar.' },
    { speaker: 'たけし', ja: '{子供|こども}も{大変|たいへん}だけど、{親|おや}も{大変|たいへん}だと{思|おも}うよ。{塾|じゅく}に{行|い}かせたり、{英会話|えいかいわ}を{習|なら}わせたり、お{金|かね}がかかるだろうなあ。', pt: 'As crianças passam por dificuldades, mas os pais também. Deve custar muito colocá-las em cursos preparatórios e aulas de conversação em inglês.' },
    { speaker: 'メアリー', ja: 'たけしくんも{子供|こども}の{時|とき}、まなちゃんのように{塾|じゅく}に{行|い}ってた？', pt: 'Quando era criança, você também frequentava cursinho como Mana?' },
    { speaker: 'たけし', ja: 'ぼくはずっと{遊|あそ}んでた。{自分|じぶん}の{子供|こども}にも、{自由|じゆう}に{遊|あそ}ばせてあげたいなあ。', pt: 'Eu brincava o tempo todo. Quero deixar meus filhos brincarem livremente também.' },
    { speaker: 'メアリー', ja: 'でも、{日本|にほん}で{子供|こども}を{育|そだ}てるのは{大変|たいへん}そうだね。', pt: 'Mas parece difícil criar filhos no Japão.' },
  ],
}]

const diary: ScriptItem[] = [{
  label: '桜さんの日記',
  lines: [
    { speaker: '3月21日', ja: '{涼|りょう}に{会|あ}いに{東京|とうきょう}に{行|い}った。{彼|かれ}が{東京|とうきょう}の{銀行|ぎんこう}に{就職|しゅうしょく}してからもう{二年|にねん}がたった。{大学|だいがく}の{時|とき}は{毎日|まいにち}{会|あ}っていたのに、{今|いま}は{私|わたし}が{東京|とうきょう}に{行|い}ったり、{彼|かれ}が{大阪|おおさか}に{来|き}たりして、{一か月|いっかげつ}に{一回|いっかい}ぐらいしか{会|あ}えない。{夏菜|なつき}はいつも{私|わたし}たちのことをうらやましがっているけど、{東京|とうきょう}まで{会|あ}いに{行|い}くのは{大変|たいへん}。{早|はや}く{大阪|おおさか}に{帰|かえ}ってきてほしい。', pt: 'Fui a Tóquio ver Ryō. Já se passaram dois anos desde que ele começou a trabalhar em um banco de Tóquio. Na universidade nos víamos diariamente, mas agora só nos encontramos cerca de uma vez por mês, viajando entre Tóquio e Osaka. Natsuki sente inveja, mas ir até Tóquio é difícil. Quero que ele volte logo para Osaka.' },
    { speaker: '4月23日', ja: '{今日|きょう}は{涼|りょう}が{大阪|おおさか}に{来|き}て、{夕方|ゆうがた}お{酒|さけ}を{飲|の}みに{行|い}った。{涼|りょう}は{相変|あいか}わらず{仕事|しごと}が{忙|いそが}しそうだ。{涼|りょう}の{同僚|どうりょう}の{黒木|くろき}さんが{彼女|かのじょ}を{探|さが}していると{聞|き}いた。{東京|とうきょう}に{行|い}った{時|とき}、{涼|りょう}に{紹介|しょうかい}してもらったけど、すごくおもしろくていい{人|ひと}だ。{黒木|くろき}さんは{夏菜|なつき}のように{静|しず}かな{人|ひと}がタイプかもしれない。{今度|こんど}{二人|ふたり}を{会|あ}わせようと{思|おも}う。{夏菜|なつき}が{東京|とうきょう}に{行|い}った{時|とき}、{涼|りょう}が{黒木|くろき}さんを{紹介|しょうかい}する{予定|よてい}。うまくいくといいけど。', pt: 'Ryō veio a Osaka e fomos beber. Ele continua muito ocupado. Soube que seu colega Kuroki procura uma namorada; quando fui a Tóquio, Ryō nos apresentou e achei Kuroki divertido e gentil. Talvez ele goste de pessoas tranquilas como Natsuki. Pretendo aproximá-los na próxima visita dela a Tóquio e espero que dê certo.' },
    { speaker: '5月12日', ja: '{今日|きょう}の{夏菜|なつき}はちょっと{変|へん}だった。{東京|とうきょう}のことを{聞|き}いてみたが、あまり{話|はな}してくれなかった。{黒木|くろき}さんに{急|きゅう}に{用事|ようじ}ができて、{会|あ}えなかったと{言|い}っただけで、{後|あと}は{話|はな}したくなさそうだった。{夜|よる}、{涼|りょう}にメッセージを{送|おく}ったけど、{返事|へんじ}がなかった。{涼|りょう}ならいろいろ{教|おし}えてくれると{思|おも}ったのに、{残念|ざんねん}。{仕事|しごと}が{忙|いそが}しいんだろう。でも、{週末|しゅうまつ}は{大阪|おおさか}で{会|あ}える。{今|いま}から{待|ま}ち{遠|どお}しい。', pt: 'Natsuki estava estranha hoje. Perguntei sobre Tóquio, mas ela quase não quis falar; apenas disse que Kuroki teve um imprevisto e não pôde encontrá-la. Enviei mensagem a Ryō à noite, mas ele não respondeu. Eu esperava que ele explicasse tudo, por isso fiquei decepcionada. Talvez esteja ocupado; ao menos nos veremos em Osaka no fim de semana, e mal posso esperar.' },
  ],
}]

for (const item of [...dialogueOne, ...dialogueTwo, ...dialogueThree, ...diary]) {
  item.label = item.label
    .replace('\u4f1a\u8a71', '{\u4f1a\u8a71|\u304b\u3044\u308f}')
    .replace('\u685c\u3055\u3093\u306e\u65e5\u8a18', '{\u685c|\u3055\u304f\u3089}\u3055\u3093\u306e{\u65e5\u8a18|\u306b\u3063\u304d}')
}

const dialogueQuestions = [
  q('dialogue-1', 1, 'Por que a mãe manda Mana estudar?', ['Ela faltou à escola', 'Há prova final na próxima semana', 'Ela quer viajar', 'Há entrevista de emprego'], 2, 'A mãe diz `来週は期末試験がある`.', { audio: audio('K22_01', 'Diálogo I — Mana e a mãe') }),
  q('dialogue-2', 2, 'Por que a mãe de Mana não foi à universidade?', ['Não queria estudar', 'A família era pobre e não permitiu', 'Reprovou na prova', 'Começou a trabalhar fora'], 2, '`うちは貧乏だったから、大学に行かせてくれなかった`.', { audio: audio('K22_01', 'Diálogo I — Mana e a mãe') }),
  q('dialogue-3', 3, 'O que Mana pede à mãe?', ['Mais dinheiro', 'Que a deixe um pouco em paz', 'Uma escola nova', 'Uma viagem'], 2, 'Mana diz `少しほっておいてよ`.', { audio: audio('K22_01', 'Diálogo I — Mana e a mãe') }),
  q('dialogue-4', 4, 'Como Mary descreve seus pais no ensino médio?', ['Indiferentes', 'Rigorosos, mas com mais liberdade', 'Muito permissivos', 'Ausentes'], 2, 'Ela diz que também eram exigentes, mas que tinha um pouco mais de liberdade.', { audio: audio('K22_03', 'Diálogo II — Mana conversa com Mary') }),
  q('dialogue-5', 5, 'Por que Mary não acha os pais de Mana estranhos?', ['Eles são ricos', 'Estão preocupados com ela', 'Ela concorda com tudo', 'Ela não os conhece'], 2, '`まなちゃんのことを心配している`.', { audio: audio('K22_03', 'Diálogo II — Mana conversa com Mary') }),
  q('dialogue-6', 6, 'Que atividades dos filhos custam dinheiro aos pais, segundo Takeshi?', ['Viagens e esportes', 'Cursinho e conversação em inglês', 'Universidade no exterior', 'Música e teatro'], 2, 'Ele cita `塾に行かせたり、英会話を習わせたり`.', { audio: audio('K22_05', 'Diálogo III — educação dos filhos') }),
  q('dialogue-7', 7, 'O que Takeshi fazia quando criança?', ['Estudava o dia todo', 'Brincava o tempo todo', 'Trabalhava', 'Frequentava cursinho'], 2, '`ぼくはずっと遊んでた`.', { audio: audio('K22_05', 'Diálogo III — educação dos filhos') }),
  q('dialogue-8', 8, 'Como Takeshi quer criar os próprios filhos?', ['Quer obrigá-los a estudar', 'Quer deixá-los brincar livremente', 'Quer mandá-los ao exterior', 'Quer evitar escolas'], 2, '`自由に遊ばせてあげたい`.', { audio: audio('K22_05', 'Diálogo III — educação dos filhos') }),
]

const grammarQuestions = [
  q('grammar-1', 9, '食べる → causativa:', ['食べられる', '食べさせる', '食べされる', '食べてもらう'], 2, 'Verbo ru: retire `る` e acrescente `させる`.'),
  q('grammar-2', 10, '行く → causativa:', ['行ける', '行かせる', '行きさせる', '行かれる'], 2, 'Verbo u: `く` vai para `か + せる`.'),
  q('grammar-3', 11, '買う → causativa:', ['買あせる', '買わせる', '買えせる', '買うさせる'], 2, 'O som final `う` torna-se `わ` antes de `せる`.'),
  q('grammar-4', 12, 'くる／する → causativas:', ['くらせる／すらせる', 'こさせる／させる', 'きさせる／しさせる', 'こられる／できる'], 2, 'As duas formas são irregulares.'),
  q('grammar-5', 13, '先生は学生（　）会話を覚えさせました。', ['を', 'に', 'で', 'から'], 2, 'Com ação transitiva e objeto `会話を`, quem executa recebe `に`.'),
  q('grammar-6', 14, '母は子供（　）学校に行かせました。', ['を', 'に', 'が', 'への'], 1, 'Com o intransitivo `行く`, a pessoa levada a agir costuma receber `を`.'),
  q('grammar-7', 15, 'A causativa simples pode significar:', ['somente obrigar', 'somente permitir', 'obrigar ou permitir, conforme o contexto', 'somente pedir'], 3, 'A relação e o contexto determinam a interpretação.'),
  q('grammar-8', 16, '“Meus pais me deixaram estudar no exterior.”', ['両親は私を留学させてくれました', '私は両親を留学させました', '両親に留学してもらいました', '両親は留学しなさい'], 1, '`させてくれる` mostra que recebi permissão/benefício.'),
  q('grammar-9', 17, '“Deixei minha irmã viajar.”', ['妹は私を旅行させてくれた', '私は妹を旅行に行かせてあげた', '私は妹に旅行してもらった', '妹は旅行に行きなさい'], 2, '`させてあげる` apresenta a permissão concedida a outra pessoa.'),
  q('grammar-10', 18, '“Por favor, deixe-me explicar.”', ['説明してください', '説明させてください', '説明させてあげます', '説明しなさい'], 2, 'Causativa + `てください` pede permissão para o falante agir.'),
  q('grammar-11', 19, '帰ります → ordem com `なさい`:', ['帰るなさい', '帰りなさい', '帰ってなさい', '帰れなさい'], 2, 'Acrescente `なさい` ao radical `帰り`.'),
  q('grammar-12', 20, '“Pare de reclamar.”', ['文句を言いなさい', '文句を言うのをやめなさい', '文句を言わせてください', '文句を言えばいい'], 2, 'Dicionário + `のをやめなさい` ordena interromper uma ação.'),
  q('grammar-13', 21, '`なさい` é mais apropriado:', ['entre desconhecidos de mesma posição', 'de pais para filhos ou em instruções', 'em pedidos formais ao chefe', 'em convites entre amigos'], 2, 'É uma ordem hierárquica firme.'),
  q('grammar-14', 22, '食べる → forma `ば`:', ['食べば', '食べれば', '食べけば', '食べたらば'], 2, 'Verbo ru: retire `る` e acrescente `れば`.'),
  q('grammar-15', 23, '待つ → forma `ば`:', ['待たば', '待てば', '待ちば', '待ったらば'], 2, 'Verbo u: `つ` vai para `て + ば`.'),
  q('grammar-16', 24, '行かない → forma `ば` negativa:', ['行かないば', '行かなければ', '行きなければ', '行けなければ'], 2, 'Troque `ない` por `なければ`.'),
  q('grammar-17', 25, '車があれば、（　）。', ['いろいろな所に行けます', '車が嫌いです', '歩くと遅れます', '車を買いなさいか'], 1, 'Ter o carro é condição suficiente para poder ir a vários lugares.'),
  q('grammar-18', 26, '単語を覚えれば、大丈夫ですよ。', ['Se memorizar as palavras, ficará tudo bem', 'Embora memorize, não dará certo', 'Memorize agora', 'Fez bem em memorizar'], 1, '`ば` apresenta o conselho como condição para um bom resultado.'),
  q('grammar-19', 27, '“A empresa é rica, mas os salários são baixos.”', ['この会社はお金があれば、給料が安い', 'この会社はお金があるのに、給料は安い', 'この会社はお金があると、給料を安くする', 'お金があるながら、給料です'], 2, '`のに` marca o fato contrário à expectativa.'),
  q('grammar-20', 28, '親切だ → antes de `のに`:', ['親切だのに', '親切なのに', '親切ののに', '親切でのに'], 2, 'Adjetivo `な` afirmativo usa `なのに`.'),
  q('grammar-21', 29, '学生だ → antes de `のに`:', ['学生だのに', '学生なのに', '学生のに', '学生でのに'], 2, 'Substantivo afirmativo também usa `なのに`.'),
  q('grammar-22', 30, 'Qual continuação é inadequada depois de `のに`?', ['試験ができなかった', '給料は安い', '読んでください', '誰にも相談しない'], 3, 'A oração B deve apresentar um fato, não um pedido.'),
  q('grammar-23', 31, '八時間も勉強したのに、（　）。', ['試験ができなかった', '勉強しなさい', '試験ができれば', '勉強させてください'], 1, 'Não ir bem contradiz a expectativa criada por oito horas de estudo.'),
  q('grammar-24', 32, 'Qual frase significa “mesmo sendo domingo, ele trabalha”?', ['日曜日だと、働きます', '日曜日なのに、働いています', '日曜日であれば、働きなさい', '日曜日に、働かせます'], 2, 'Substantivo + `なのに` expressa a quebra de expectativa.'),
]

const vocabularyReadingQuestions = [
  q('vocabulary-1', 33, '{塾|じゅく}', ['universidade', 'curso preparatório', 'biblioteca', 'empresa'], 2, '`塾` é uma escola complementar/preparatória.'),
  q('vocabulary-2', 34, '{期末試験|きまつしけん}', ['prova de admissão', 'prova final do período', 'entrevista', 'tarefa semanal'], 2, '`期末` é fim do período e `試験` é prova.'),
  q('vocabulary-3', 35, '{自由|じゆう}', ['liberdade', 'educação', 'pressão', 'responsabilidade'], 1, '`自由` significa liberdade.'),
  q('vocabulary-4', 36, '{心配|しんぱい}する', ['obrigar', 'preocupar-se', 'permitir', 'reprovar'], 2, '`心配する` é preocupar-se.'),
  q('reading-1', 37, 'Há quanto tempo Ryō trabalha no banco de Tóquio?', ['Seis meses', 'Um ano', 'Dois anos', 'Três anos'], 3, '`就職してからもう二年がたった`.', { audio: audio('Y22', 'Leitura — O diário de Sakura') }),
  q('reading-2', 38, 'Com que frequência Sakura e Ryō se encontram agora?', ['Todos os dias', 'Toda semana', 'Cerca de uma vez por mês', 'Uma vez por ano'], 3, 'A distância permite apenas cerca de um encontro mensal.', { audio: audio('Y22', 'Leitura — O diário de Sakura') }),
  q('reading-3', 39, 'Quem procura uma namorada?', ['Ryō', 'Kuroki', 'Natsuki', 'Hashimoto'], 2, 'Sakura soube que o colega Kuroki procura uma namorada.', { audio: audio('Y22', 'Leitura — O diário de Sakura') }),
  q('reading-4', 40, 'Por que Sakura acha que Kuroki pode gostar de Natsuki?', ['Ela mora em Tóquio', 'Ele parece gostar de pessoas tranquilas', 'Eles trabalham juntos', 'Ambos estudam japonês'], 2, '`夏菜のように静かな人がタイプかもしれない`.', { audio: audio('Y22', 'Leitura — O diário de Sakura') }),
  q('reading-5', 41, 'Por que Kuroki não encontrou Natsuki?', ['Não gostou dela', 'Surgiu um compromisso urgente', 'Perdeu o trem', 'Ryō cancelou a viagem'], 2, 'Natsuki diz apenas que `急に用事ができて、会えなかった`.', { audio: audio('Y22', 'Leitura — O diário de Sakura') }),
  q('reading-6', 42, 'Por que Sakura fica decepcionada em 12 de maio?', ['Natsuki vai se mudar', 'Ryō não respondeu nem explicou', 'Kuroki se casou', 'Ela não pode ir a Osaka'], 2, 'Ela esperava que Ryō explicasse, mas não recebeu resposta.', { audio: audio('Y22', 'Leitura — O diário de Sakura') }),
]

const listeningQuestions = [
  q('listening-a1', 43, 'W22-A: Quando o casal quer começar as aulas de inglês da criança?', ['Aos três anos', 'Aos cinco anos', 'Ao entrar na escola', 'Na universidade'], 2, '`この子が五歳になったら、英語を習わせてあげたい`.', { audio: audio('W22_A', 'Workbook W22-A — planos para a criança') }),
  q('listening-a2', 44, 'W22-A: Qual esporte a mãe prefere?', ['Tênis', 'Caratê', 'Futebol', 'Natação'], 2, 'Ela prefere caratê porque acha mais bonito/legal.', { audio: audio('W22_A', 'Workbook W22-A — planos para a criança') }),
  q('listening-a3', 45, 'W22-A: Qual instrumento a mãe quer que a criança aprenda?', ['Piano', 'Violão', 'Violino', 'Flauta'], 3, 'Ela rejeita piano porque muitas pessoas sabem tocá-lo e escolhe violino.', { audio: audio('W22_A', 'Workbook W22-A — planos para a criança') }),
  q('listening-a4', 46, 'W22-A: Que experiência internacional eles aceitam?', ['Morar sozinha', 'Estudar no exterior', 'Viajar sem adultos', 'Trabalhar fora'], 2, 'A mãe propõe `外国に留学させたい` e o pai concorda.', { audio: audio('W22_A', 'Workbook W22-A — planos para a criança') }),
  q('listening-a5', 47, 'W22-A: A que plano o pai reage com “espere”?', ['Aulas de inglês', 'Caratê', 'Casar a criança com alguém rico', 'Violino'], 3, 'Ele interrompe a ideia de decidir o casamento e diz que não permitirá que se case com ninguém.', { audio: audio('W22_A', 'Workbook W22-A — planos para a criança') }),
  q('listening-b1', 48, 'W22-B: Por que Kei não pode fazer a próxima viagem?', ['Tem prova', 'O pai não a deixa viajar com amigos', 'Não tem dinheiro', 'Está doente'], 2, '`友達と旅行させてくれない`.', { audio: audio('W22_B', 'Workbook W22-B — pais rigorosos') }),
  q('listening-b2', 49, 'W22-B: O que os pais ainda não deixam Kei fazer, embora seja estudante do ensino médio?', ['Estudar inglês', 'Ter trabalho de meio período', 'Praticar esporte', 'Usar telefone'], 2, 'Kei diz `高校生なのに、アルバイトもさせてくれない`.', { audio: audio('W22_B', 'Workbook W22-B — pais rigorosos') }),
  q('listening-b3', 50, 'W22-B: Que conselho o pai de Megumi costuma dar?', ['Fique sempre em casa', 'Tenha várias experiências enquanto jovem', 'Estude somente para provas', 'Não trabalhe'], 2, '`若い時はいろいろな経験をしなさい`.', { audio: audio('W22_B', 'Workbook W22-B — pais rigorosos') }),
  q('listening-b4', 51, 'W22-B: Por que a mãe não quer que Kei more sozinha na universidade?', ['Acha perigoso', 'Custa dinheiro; quer que ela vá de casa', 'A universidade é perto', 'Kei não sabe cozinhar'], 2, 'A mãe menciona o custo e manda que ela se desloque de casa.', { audio: audio('W22_B', 'Workbook W22-B — pais rigorosos') }),
  q('listening-b5', 52, 'W22-B: Que permissão o pai prometeu para quando Kei for universitária?', ['Viajar ao exterior', 'Ter trabalho de meio período', 'Morar sozinha', 'Comprar um carro'], 2, 'Ele disse que, quando ela entrar na universidade, poderá trabalhar.', { audio: audio('W22_B', 'Workbook W22-B — pais rigorosos') }),
  q('listening-c1', 53, 'W22-C: O que o guia diz sobre o restante do dia?', ['Há outra reunião', 'Não há mais programa; todos podem ir aonde quiserem', 'Devem ficar no hotel', 'Devem voltar ao aeroporto'], 2, '`今日はもう何も予定がございません`.', { audio: audio('W22_C', 'Workbook W22-C — tarde livre da excursão') }),
  q('listening-c2', 54, 'W22-C: Como se chega ao museu?', ['Trem 3 por vinte minutos', 'Ônibus 3 por cerca de dez minutos', 'A pé em dez minutos', 'Táxi do hotel'], 2, 'O guia recomenda o ônibus número 3; o trajeto dura cerca de dez minutos.', { audio: audio('W22_C', 'Workbook W22-C — tarde livre da excursão') }),
  q('listening-c3', 55, 'W22-C: Onde se pode comprar um suéter?', ['No museu', 'Na loja ao lado do hotel', 'Em frente ao banco', 'Na estação'], 2, '`ホテルの隣の店に行けばたくさんある`.', { audio: audio('W22_C', 'Workbook W22-C — tarde livre da excursão') }),
  q('listening-c4', 56, 'W22-C: Que problema final exige ir à polícia?', ['Passaporte perdido', 'Carteira roubada', 'Ônibus perdido', 'Compra errada'], 2, 'Um participante diz `財布を盗まれました` e o guia propõe irem juntos à polícia.', { audio: audio('W22_C', 'Workbook W22-C — tarde livre da excursão') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K22_01: dialogueOne,
  K22_02: dialogueOne,
  K22_03: dialogueTwo,
  K22_04: dialogueTwo,
  K22_05: dialogueThree,
  K22_06: dialogueThree,
  Y22: diary,
}

export const genki2Lesson22: Section = {
  id: 'lesson-22',
  level: 'genki-2',
  titleJa: '第22課 日本の教育',
  titlePt: 'Lição 22 — A educação no Japão',
  summaryPt: 'Forma causativa, permissão e favor com a causativa, ordens com なさい, condição ば, contraste com のに, educação, leitura de diário e compreensão oral.',
  studyNotes,
  groups: [
    genki2Group(LESSON, 'dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    genki2Group(LESSON, 'grammar', '文法', 'gramática e uso em contexto', grammarQuestions),
    genki2Group(LESSON, 'reading', '読み書き', 'vocabulário e diário de Sakura', vocabularyReadingQuestions),
    genki2Group(LESSON, 'listening', '聞く練習', 'compreensão oral do workbook', listeningQuestions),
  ],
  audios: buildGenki2Audios({
    lesson: LESSON,
    scripts,
    dialogueCodes: ['K22_01', 'K22_03', 'K22_05'],
    dialogueSupportCodes: ['K22_02', 'K22_04', 'K22_06'],
    vocabularyCodes: ['K22_07', 'K22_08'],
  }),
}
