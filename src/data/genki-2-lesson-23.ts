import {
  buildGenki2Audios,
  genki2Group,
  genki2Question,
  genki2QuestionAudio,
} from './genki-2-lesson-utils'
import type { Question, ScriptItem, Section, StudyNote } from './types'

const LESSON = 23

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
    title: 'Objetivos e despedida',
    bodyPt: 'Na última lição, Mary se despede da família anfitriã e de Takeshi, relembra o ano no Japão e promete voltar. O conteúdo permite reclamar de algo imposto, manter um resultado apesar de uma condição, tomar decisões, estabelecer hábitos, marcar um limite temporal e explicar como realizar uma ação.',
    helpPt: 'Use a despedida como revisão narrativa: quem fez quem agir, que decisões os personagens tomam, até quando uma promessa vale e quais lembranças permanecem apesar das dificuldades.',
  },
  {
    title: '1. Causativa-passiva',
    bodyPt: 'A causativa-passiva expressa que alguém foi obrigado ou manipulado a fazer algo indesejado. Verbos ru: `食べる→食べさせられる`. Verbos u terminados em `す`: `話す→話させられる`. Nos demais verbos u, a forma curta é comum: `行く→行かされる`, `待つ→待たされる`, `読む→読まされる`, `買う→買わされる`. Irregulares: `する→させられる`, `くる→こさせられる`.',
    helpPt: 'Comece pela frase simples “eu fiz X”; acrescente a pessoa que impôs a ação com `に` e transforme o verbo. `私は宿題を手伝った` → `私は友達に宿題を手伝わされた`.',
  },
  {
    title: 'Papéis na causativa-passiva',
    bodyPt: 'A pessoa forçada é o tópico/sujeito com `は` ou `が`; quem exerce poder recebe `に`; a ação imposta aparece na causativa-passiva: `まなはお母さんに勉強させられました`. A estrutura costuma comunicar incômodo. Se a pessoa aceitou a ação de bom grado, outra construção pode ser mais adequada.',
    helpPt: 'Compare as perspectivas: `母はまなに勉強させた` (a mãe fez Mana estudar) e `まなは母に勉強させられた` (Mana foi obrigada pela mãe). Os participantes trocam de posição.',
  },
  {
    title: '2. 〜ても — mesmo se; apesar de',
    bodyPt: '`AてもB` afirma que B continua verdadeiro mesmo com A. Verbos usam forma `て + も`: `雨が降っても`. Adjetivos `い`: `暑くても`; adjetivos `な` e substantivos: `元気でも`, `子供でも`. Negativas: `買わなくても`, `悲しくなくても`, `元気じゃなくても`. A oração `ても` não tem tempo próprio; B situa a frase.',
    helpPt: 'Compare `雨が降ったら、バーベキューをしません` (se chover, não faremos) com `雨が降っても、します` (mesmo se chover, faremos). `たら` muda o resultado; `ても` preserva-o.',
  },
  {
    title: '3. 〜ことにする — decidir',
    bodyPt: 'Forma curta presente + `ことにする` expressa uma decisão deliberada: `車を買うことにしました`. A negativa também é possível: `文句を言わないことにします`. A forma volitiva `〜ことにしよう` propõe uma decisão após deliberação: `この夏はアメリカに行くことにしよう`.',
    helpPt: '`つもりだ` descreve intenção; `ことにする` destaca que uma escolha foi feita entre possibilidades. Use a segunda ao anunciar uma resolução.',
  },
  {
    title: '4. 〜ことにしている — regra pessoal',
    bodyPt: '`〜ことにしている` é uma decisão mantida como hábito: `毎日十一時までに寝ることにしています`. Na negativa: `絶対にお酒を飲まないことにしています`. Não é apenas algo que costuma acontecer; é uma prática que a pessoa escolheu seguir.',
    helpPt: 'Pergunte “isso é rotina por acaso ou por resolução?” `毎日歩く` pode ser simples hábito; `毎日歩くことにしている` comunica disciplina consciente.',
  },
  {
    title: '5. 〜まで — até que',
    bodyPt: 'Verbo afirmativo não passado + `まで` marca o limite em que a outra situação termina ou muda: `晴れるまで、カフェで待ちます`; `日本語が上手になるまで、国に帰りません`. Se os sujeitos diferem, A recebe `が`: `赤ちゃんが寝るまで、歌を歌う`. Mesmo com B no passado, A permanece no presente.',
    helpPt: '`まで` inclui todo o intervalo e espera uma mudança-limite. `までに` indica prazo para uma ação pontual; compare “esperar até cinco” (`五時まで待つ`) e “entregar até cinco” (`五時までに出す`).',
  },
  {
    title: '6. Radical + 〜方 — como fazer',
    bodyPt: 'Acrescente `方` ao radical verbal para formar um substantivo: `泳ぎ方` (como nadar), `考え方` (maneira de pensar). Elementos normalmente marcados por partículas passam a usar `の`: `漢字を読む→漢字の読み方`, `空港に行く→空港への行き方`. Verbos compostos com `する`: `日本語を勉強する→日本語の勉強の仕方`.',
    helpPt: '`方` é substantivo, por isso pode receber `は` ou `を`: `この漢字の書き方を教えてください`. Para verbo com `する`, pense em “o jeito de fazer X”: X + `の仕方`.',
  },
  {
    title: 'Leitura — kaomoji e emoji',
    bodyPt: 'O texto compara `顔文字` (rostos construídos com caracteres) e `絵文字` (pictogramas). Explica como expressam emoções, por que kaomoji japoneses são lidos verticalmente e emoticons ingleses horizontalmente, o peso dos olhos e da boca em cada cultura e como o mesmo emoji pode mudar de sentido entre países. O objetivo é interpretar sinais com contexto, não atribuir um significado universal.',
    helpPt: 'Ao encontrar um símbolo, pergunte: quem enviou, em qual idioma/cultura, qual frase o acompanha e qual relação existe entre as pessoas? Essas quatro pistas reduzem mal-entendidos.',
  },
]

const dialogueOne: ScriptItem[] = [{
  label: '会話 I',
  lines: [
    { speaker: 'お母さん', ja: 'メアリーがいなくなると{寂|さび}しくなるね。', pt: 'Sentiremos sua falta quando você for embora, Mary.' },
    { speaker: 'メアリー', ja: 'でも、{来年|らいねん}{大学|だいがく}を{卒業|そつぎょう}したら、また{日本|にほん}に{戻|もど}ってきますから。お{父|とう}さん、お{母|かあ}さん、{本当|ほんとう}にお{世話|せわ}になりました。', pt: 'Mas, quando eu me formar na universidade no ano que vem, voltarei ao Japão. Pai, mãe, muito obrigada por cuidarem de mim.' },
    { speaker: 'お父さん', ja: '{私|わたし}たちもメアリーがいて、とても{楽|たの}しかったよ。', pt: 'Nós também nos divertimos muito com você aqui.' },
    { speaker: 'お母さん', ja: '{国|くに}に{帰|かえ}っても、{私|わたし}たちのことを{忘|わす}れないでね。', pt: 'Mesmo voltando para seu país, não se esqueça de nós.' },
    { speaker: 'メアリー', ja: 'もちろん。アメリカにも{遊|あそ}びに{来|き}てください。', pt: 'Claro que não. Venham me visitar nos Estados Unidos.' },
    { speaker: 'お父さん', ja: 'じゃあ、この{夏|なつ}はアメリカに{行|い}くことにしよう。', pt: 'Então vamos decidir ir aos Estados Unidos neste verão.' },
    { speaker: 'お母さん', ja: 'そうね。', pt: 'Boa ideia.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: '会話 II',
  lines: [
    { speaker: 'たけし', ja: 'この{一年|いちねん}、いろいろなことがあったね。', pt: 'Muitas coisas aconteceram neste último ano.' },
    { speaker: 'メアリー', ja: 'そうそう。デートの{時|とき}、よく{待|ま}たされた。', pt: 'Verdade. Quando saíamos, muitas vezes você me fazia esperar.' },
    { speaker: 'たけし', ja: 'ぼくが{約束|やくそく}の{場所|ばしょ}を{間違|まちが}えて、{後|あと}で、ものすごく{怒|おこ}られたり。', pt: 'Uma vez confundi o lugar do encontro e depois levei uma bronca enorme.' },
    { speaker: 'メアリー', ja: 'たけしくんが{作|つく}った{料理|りょうり}を{食|た}べさせられて、おなかをこわしたり。', pt: 'Você me fez comer a comida que preparou e eu fiquei com dor de barriga.' },
    { speaker: 'たけし', ja: '{初|はじ}めて{一緒|いっしょ}に{踊|おど}った{時|とき}、「{盆踊|ぼんおど}りみたいだ」って{笑|わら}われた。', pt: 'Quando dançamos juntos pela primeira vez, você riu e disse que parecia Bon-odori.' },
    { speaker: 'メアリー', ja: 'あの{時|とき}は{足|あし}を{踏|ふ}まれて、{痛|いた}かった。', pt: 'Naquela vez você pisou no meu pé, e doeu.' },
    { speaker: 'たけし', ja: '{考|かんが}え{方|かた}が{違|ちが}うから、けんかもよくしたね。でもみんないい{思|おも}い{出|で}だね。', pt: 'Como pensamos de maneiras diferentes, também brigamos bastante. Mas tudo virou uma boa lembrança.' },
  ],
}]

const dialogueThree: ScriptItem[] = [{
  label: '会話 III',
  lines: [
    { speaker: 'たけし', ja: 'じゃあ、{元気|げんき}でね。', pt: 'Então, cuide-se.' },
    { speaker: 'メアリー', ja: 'うん。たけしくんも。たけしくんに{会|あ}えて{本当|ほんとう}によかった。', pt: 'Você também. Fico muito feliz por ter conhecido você.' },
    { speaker: 'たけし', ja: 'そんな{悲|かな}しそうな{顔|かお}しないで。', pt: 'Não faça uma cara tão triste.' },
    { speaker: 'メアリー', ja: 'わかってる。じゃあ、そろそろ{行|い}かなきゃ。', pt: 'Eu sei. Bem, preciso ir agora.' },
    { speaker: 'たけし', ja: 'メアリーが{卒業|そつぎょう}して{日本|にほん}に{戻|もど}ってくるまで、{待|ま}っているから。', pt: 'Vou esperar até você se formar e voltar ao Japão.' },
  ],
}]

const reading: ScriptItem[] = [{
  label: '顔文字と絵文字',
  lines: [
    { speaker: 'ナレーション', ja: '{今|いま}、{多|おお}くの{人|ひと}がメールやSNSなどのメッセージで{顔文字|かおもじ}と{絵文字|えもじ}を{使|つか}っています。みなさんも{顔文字|かおもじ}や{絵文字|えもじ}があるメールをもらったり、{使|つか}ったりしたことがあるでしょう。', pt: 'Hoje muitas pessoas usam kaomoji e emoji em mensagens de e-mail e redes sociais. Provavelmente você já recebeu ou enviou mensagens com esses sinais.' },
    { speaker: 'ナレーション', ja: '`\(^o^)/`と`(@_@)`は{顔文字|かおもじ}、泣いている{顔|かお}と{怒|おこ}っている{顔|かお}は{絵文字|えもじ}です。{顔文字|かおもじ}と{絵文字|えもじ}を{使|つか}えば、{自分|じぶん}の{気持|きも}ちを{簡単|かんたん}に{伝|つた}えられます。', pt: '`\(^o^)/` e `(@_@)` são kaomoji; os rostos desenhados são emoji. Eles permitem transmitir emoções com facilidade.' },
    { speaker: 'ナレーション', ja: '{顔文字|かおもじ}は{一万|いちまん}{以上|いじょう}あると{言|い}われています。{文字|もじ}や{記号|きごう}で{作|つく}られているので、{変|へん}なものもたくさんあり、もらった{人|ひと}は{意味|いみ}がわからない{時|とき}もあります。{一方|いっぽう}、{絵文字|えもじ}は{表情|ひょうじょう}がわかりやすく、{食|た}べ{物|もの}やスポーツなど{生活|せいかつ}も{表|あらわ}せます。', pt: 'Dizem que existem mais de dez mil kaomoji. Como são feitos de caracteres e sinais, alguns são estranhos ou difíceis de entender. Os emoji têm expressões mais claras e também representam comida, esporte e outros aspectos da vida.' },
    { speaker: 'ナレーション', ja: '{絵文字|えもじ}は{日本|にほん}で{作|つく}られたもので、{今|いま}、`emoji`という{言葉|ことば}は`Karaoke`のように{世界中|せかいじゅう}で{使|つか}われています。{最近|さいきん}の{調査|ちょうさ}によると、{絵文字|えもじ}のほうが{顔文字|かおもじ}より{多|おお}く{使|つか}われているそうです。', pt: 'Os emoji foram criados no Japão, e a palavra “emoji” hoje circula pelo mundo como “karaoke”. Uma pesquisa recente indica que emoji são usados mais do que kaomoji.' },
    { speaker: 'ナレーション', ja: '{日本語|にほんご}の{顔文字|かおもじ}は{顔|かお}が{縦|たて}で、{英語|えいご}の{顔文字|かおもじ}は{横|よこ}です。{日本語|にほんご}では{目|め}で{表情|ひょうじょう}を{表|あらわ}すものが{多|おお}いですが、{英語|えいご}では{口|くち}で{表|あらわ}すものが{多|おお}いです。{日本|にほん}には「{目|め}は{口|くち}ほどに{物|もの}を{言|い}う」ということわざがあります。', pt: 'Kaomoji japoneses ficam na vertical, enquanto os ingleses ficam de lado. No japonês, os olhos costumam mostrar a emoção; no inglês, a boca. Um provérbio japonês diz que os olhos falam tanto quanto a boca.' },
    { speaker: 'ナレーション', ja: '{同|おな}じ{絵文字|えもじ}でも{文化|ぶんか}によって{意味|いみ}が{変|か}わる{場合|ばあい}があります。`🙏`は{日本語|にほんご}の{文|ぶん}では「お{願|ねが}いします」「ごめんなさい」という{意味|いみ}ですが、{英語|えいご}の{文|ぶん}では「お{祈|いの}りします」という{意味|いみ}で{使|つか}われています。キスの{絵文字|えもじ}も、フランスやスペインなどでは{友|とも}だちとのあいさつによく{使|つか}われますが、{日本|にほん}では{誤解|ごかい}されるかもしれません。', pt: 'O mesmo emoji pode mudar de sentido conforme a cultura. No Japão, 🙏 pode significar “por favor” ou “desculpe”; em inglês, pode representar oração. O emoji de beijo é uma saudação comum entre amigos na França e Espanha, mas pode ser mal interpretado no Japão.' },
  ],
}]

for (const item of [...dialogueOne, ...dialogueTwo, ...dialogueThree, ...reading]) {
  item.label = item.label
    .replace('\u4f1a\u8a71', '{\u4f1a\u8a71|\u304b\u3044\u308f}')
    .replace(
      '\u9854\u6587\u5b57\u3068\u7d75\u6587\u5b57',
      '{\u9854\u6587\u5b57|\u304b\u304a\u3082\u3058}\u3068{\u7d75\u6587\u5b57|\u3048\u3082\u3058}',
    )
  for (const line of item.lines) {
    line.ja = line.ja.replace(
      '\u6ce3\u3044\u3066\u3044\u308b',
      '{\u6ce3|\u306a}\u3044\u3066\u3044\u308b',
    )
  }
}

const dialogueQuestions = [
  q('dialogue-1', 1, 'Quando Mary pretende voltar ao Japão?', ['Neste verão', 'Depois de se formar no ano que vem', 'Em dez anos', 'Depois de trabalhar'], 2, '`来年大学を卒業したら、また日本に戻ってきます`.', { audio: audio('K23_01', 'Diálogo I — último jantar') }),
  q('dialogue-2', 2, 'Que decisão o pai anfitrião propõe?', ['Mudar para os EUA', 'Visitar os EUA no verão', 'Ir ao Japão no inverno', 'Estudar inglês'], 2, '`この夏はアメリカに行くことにしよう`.', { audio: audio('K23_01', 'Diálogo I — último jantar') }),
  q('dialogue-3', 3, 'O que a mãe pede a Mary?', ['Que escreva toda semana', 'Que não esqueça a família ao voltar', 'Que fique no Japão', 'Que ensine inglês'], 2, '`国に帰っても、私たちのことを忘れないで`.', { audio: audio('K23_01', 'Diálogo I — último jantar') }),
  q('dialogue-4', 4, 'Que queixa Mary faz sobre os encontros?', ['Takeshi falava demais', 'Ela era frequentemente obrigada a esperar', 'Eles sempre se perdiam', 'Takeshi cancelava'], 2, '`よく待たされた` é causativa-passiva.', { audio: audio('K23_03', 'Diálogo II — lembranças do ano') }),
  q('dialogue-5', 5, 'O que aconteceu depois de Mary comer a comida de Takeshi?', ['Ela gostou', 'Ficou com dor de barriga', 'Aprendeu a cozinhar', 'Foi ao restaurante'], 2, 'Ela diz que foi obrigada a comer e `おなかをこわした`.', { audio: audio('K23_03', 'Diálogo II — lembranças do ano') }),
  q('dialogue-6', 6, 'Por que eles brigavam?', ['Dinheiro', 'Tinham maneiras de pensar diferentes', 'Ciúmes', 'Aulas'], 2, '`考え方が違うから`.', { audio: audio('K23_03', 'Diálogo II — lembranças do ano') }),
  q('dialogue-7', 7, 'O que Mary diz sobre conhecer Takeshi?', ['Foi um erro', 'Ficou muito feliz', 'Foi difícil', 'Não tem certeza'], 2, '`たけしくんに会えて本当によかった`.', { audio: audio('K23_05', 'Diálogo III — despedida no aeroporto') }),
  q('dialogue-8', 8, 'Até quando Takeshi promete esperar?', ['Até o fim do verão', 'Até Mary se formar e voltar ao Japão', 'Até o voo sair', 'Até o próximo mês'], 2, '`卒業して日本に戻ってくるまで、待っている`.', { audio: audio('K23_05', 'Diálogo III — despedida no aeroporto') }),
]

const grammarQuestions = [
  q('grammar-1', 9, '食べる → causativa-passiva:', ['食べられる', '食べさせられる', '食べされる', '食べてもらわれる'], 2, 'Verbo ru: `させられる`.'),
  q('grammar-2', 10, '話す → causativa-passiva:', ['話される', '話させられる', '話さされる', '話しされる'], 2, 'Verbo u terminado em `す` usa a forma completa `させられる`.'),
  q('grammar-3', 11, '行く → causativa-passiva comum:', ['行かれる', '行かされる', '行きさせられる', '行ける'], 2, 'Nos demais verbos u, a forma curta `あ-される` é comum.'),
  q('grammar-4', 12, '読む → causativa-passiva:', ['読まされる', '読められる', '読みされる', '読んでもらわれる'], 1, '`読む→読まされる`.'),
  q('grammar-5', 13, 'する／くる → causativa-passivas:', ['させられる／こさせられる', 'しされる／きされる', 'される／こられる', 'すれば／くれば'], 1, 'As formas irregulares são `させられる` e `こさせられる`.'),
  q('grammar-6', 14, 'まなはお母さん（　）勉強させられました。', ['を', 'に', 'が', 'で'], 2, 'Quem impõe a ação recebe `に`.'),
  q('grammar-7', 15, '“Fui obrigado pelo amigo a ajudá-lo na tarefa.”', ['友達は私に宿題を手伝わせた', '私は友達に宿題を手伝わされた', '私は友達に手伝ってもらった', '友達が宿題を手伝った'], 2, 'O falante é quem sofreu a imposição.'),
  q('grammar-8', 16, '雨が降っても、バーベキューをします。', ['Se chover, cancelaremos', 'Mesmo se chover, faremos churrasco', 'Fizemos porque choveu', 'Talvez chova'], 2, '`ても` mantém B apesar de A.'),
  q('grammar-9', 17, '暑い → “mesmo se estiver quente”:', ['暑かっても', '暑くても', '暑いでも', '暑くなれば'], 2, 'Adjetivo `い` usa forma `て`: `暑くても`.'),
  q('grammar-10', 18, '学生 → “mesmo sendo estudante”:', ['学生ても', '学生でも', '学生なても', '学生たら'], 2, 'Substantivos usam `でも`.'),
  q('grammar-11', 19, '買わない → forma com `ても`:', ['買わないても', '買わなくても', '買えなくても', '買わなかっても'], 2, 'Negativa: `ない→なくても`.'),
  q('grammar-12', 20, 'Compare: `雨が降ったら` e `雨が降っても`:', ['As duas significam o mesmo', 'A primeira é “se chover”; a segunda “mesmo se chover”', 'A primeira é passada', 'A segunda é pedido'], 2, '`たら` condiciona; `ても` concede sem mudar o resultado.'),
  q('grammar-13', 21, '“Decidi comprar um carro.”', ['車を買うことにしました', '車を買うことにしています', '車を買わされました', '車を買っても'], 1, '`ことにする` anuncia a decisão.'),
  q('grammar-14', 22, '“Decidi não reclamar muito.”', ['文句をあまり言わないことにしました', '文句を言わなくてもいい', '文句を言わされた', '文句を言うまで'], 1, 'A forma curta negativa vem antes de `ことにする`.'),
  q('grammar-15', 23, '`行くことにしよう` acrescenta a ideia de:', ['obrigação sofrida', 'decisão/proposta após considerar', 'hábito antigo', 'limite temporal'], 2, 'A forma volitiva propõe tomar a decisão.'),
  q('grammar-16', 24, '毎日十一時までに寝ることにしています。', ['Decidi hoje dormir uma vez', 'Tenho como regra dormir até onze todos os dias', 'Sou obrigado a dormir', 'Dormirei até acordar'], 2, '`ことにしている` é resolução mantida como rotina.'),
  q('grammar-17', 25, 'Qual frase destaca uma rotina escolhida?', ['毎日ジョギングする', '毎日ジョギングすることにしている', 'ジョギングさせられる', 'ジョギングしても'], 2, 'A construção mostra uma regra pessoal, não apenas frequência.'),
  q('grammar-18', 26, '晴れるまで、カフェで待ちます。', ['Esperarei até o tempo abrir', 'Esperarei antes de chover', 'Mesmo se abrir, esperarei', 'Decidi abrir um café'], 1, '`まで` marca a mudança que encerra a espera.'),
  q('grammar-19', 27, 'Antes de `まで` neste padrão, o verbo fica:', ['passado negativo', 'presente afirmativo', 'forma `て`', 'causativa'], 2, 'A oração-limite usa forma afirmativa não passada.'),
  q('grammar-20', 28, '赤ちゃん（　）寝るまで、私は歌を歌います。', ['は', 'が', 'を', 'に'], 2, 'Quando os sujeitos diferem, o sujeito da oração com `まで` recebe `が`.'),
  q('grammar-21', 29, '日本語が上手になるまで、（　）。', ['国に帰りません', '国に帰っても', '国に帰ることにした', '国に帰らされた'], 1, 'Não voltar continua até atingir fluência.'),
  q('grammar-22', 30, '泳ぎます → “como nadar”:', ['泳ぐ方', '泳ぎ方', '泳いで方', '泳げば方'], 2, 'Acrescente `方` ao radical `泳ぎ`.'),
  q('grammar-23', 31, '“Como ler kanji”:', ['漢字を読み方', '漢字の読み方', '漢字が読む方', '漢字の読んだ方'], 2, 'A partícula original muda para `の` antes do substantivo `読み方`.'),
  q('grammar-24', 32, '“Como reservar um hotel”:', ['ホテルの予約する方', 'ホテルの予約の仕方', 'ホテルを予約方', 'ホテルの予約し方'], 2, 'Composto `する`: substantivo + `の仕方`.'),
  q('grammar-25', 33, '`方` funciona como:', ['partícula', 'substantivo e pode receber `は`/`を`', 'auxiliar passado', 'adjetivo `い`'], 2, 'A construção inteira é nominal.'),
]

const vocabularyReadingQuestions = [
  q('vocabulary-1', 34, '{卒業|そつぎょう}する', ['matricular-se', 'formar-se', 'despedir-se', 'voltar'], 2, '`卒業する` é concluir um curso.'),
  q('vocabulary-2', 35, 'お{世話|せわ}になりました。', ['Muito prazer', 'Obrigado por tudo que fez por mim', 'Boa viagem', 'Até amanhã'], 2, 'Expressão de gratidão por cuidado e apoio recebidos.'),
  q('vocabulary-3', 36, '{思|おも}い{出|で}', ['decisão', 'lembrança', 'maneira', 'despedida'], 2, '`思い出` é lembrança/memória.'),
  q('reading-1', 37, 'Qual diferença básica o texto apresenta?', ['Kaomoji usam caracteres; emoji são pictogramas', 'Kaomoji só existem em inglês', 'Emoji não mostram sentimentos', 'São exatamente iguais'], 1, 'Kaomoji são feitos de caracteres e sinais; emoji são imagens padronizadas.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-2', 38, 'Quantos kaomoji dizem existir?', ['Mais de cem', 'Mais de mil', 'Mais de dez mil', 'Exatamente cem mil'], 3, '`顔文字は、1万以上あると言われています`.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-3', 39, 'Onde os emoji foram criados?', ['Estados Unidos', 'Japão', 'França', 'Espanha'], 2, 'O texto afirma `絵文字は、日本で作られた`.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-4', 40, 'Segundo a pesquisa citada, qual é mais usado?', ['Kaomoji', 'Emoji', 'Ambos igualmente', 'O texto não diz'], 2, 'A pesquisa indica que emoji são usados mais frequentemente.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-5', 41, 'Como a orientação visual costuma diferir?', ['Japonês horizontal; inglês vertical', 'Japonês vertical; inglês horizontal', 'Ambos verticais', 'Ambos horizontais'], 2, 'Kaomoji japoneses ficam em pé; emoticons ingleses costumam ser lidos de lado.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-6', 42, 'Que parte do rosto tende a carregar a expressão no kaomoji japonês?', ['Nariz', 'Olhos', 'Boca', 'Orelhas'], 2, 'O texto relaciona o japonês aos olhos e o inglês à boca.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-7', 43, 'Que sentidos `🙏` pode ter numa mensagem japonesa?', ['Somente aplauso', 'Pedido ou desculpa', 'Raiva', 'Sono'], 2, 'No japonês, pode acompanhar `お願いします` ou `ごめんなさい`.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
  q('reading-8', 44, 'Qual risco cultural o texto mostra com o emoji de beijo?', ['Não aparece no Japão', 'Uma saudação amigável em alguns países pode parecer romântica no Japão', 'Significa somente adeus', 'É proibido em mensagens'], 2, 'Na França e Espanha pode ser cumprimento entre amigos; um japonês pode interpretar como interesse amoroso.', { audio: audio('Y23', 'Leitura — Kaomoji e emoji') }),
]

const listeningQuestions = [
  q('listening-a1', 45, 'W23-A1: A que horas a esposa acorda Yamada no dia de folga?', ['5h30', '6h30', '8h', '10h'], 2, 'Ele diz `六時半に起こされて`.', { audio: audio('W23_A', 'Workbook W23-A — obrigações indesejadas') }),
  q('listening-a2', 46, 'W23-A1: O que Yamada é obrigado a fazer depois de acordar?', ['Cozinhar', 'Correr com a esposa', 'Limpar a casa', 'Ir ao trabalho'], 2, '`一緒にジョギングさせられる`.', { audio: audio('W23_A', 'Workbook W23-A — obrigações indesejadas') }),
  q('listening-a3', 47, 'W23-A1: O que acontece durante as compras?', ['Ele escolhe tudo', 'Leva a esposa de carro e espera até terminar', 'Volta para casa', 'Trabalha no mercado'], 2, 'Ele é obrigado a levá-la e a esperar até o fim das compras.', { audio: audio('W23_A', 'Workbook W23-A — obrigações indesejadas') }),
  q('listening-a4', 48, 'W23-A2: Que tarefas o novo chefe impõe diariamente?', ['Relatórios e reuniões', 'Fazer café e tirar cópias', 'Dirigir e cozinhar', 'Limpar o escritório'], 2, '`コーヒーを入れさせられる` e `コピーも取らされる`.', { audio: audio('W23_A', 'Workbook W23-A — obrigações indesejadas') }),
  q('listening-a5', 49, 'W23-A2: Quando o funcionário precisa levar/buscar o chefe no aeroporto?', ['Durante as férias do chefe', 'Até em seu dia de folga', 'Somente no expediente', 'Nunca'], 2, 'Ele enfatiza `休みの日にだよ`.', { audio: audio('W23_A', 'Workbook W23-A — obrigações indesejadas') }),
  q('listening-b1', 50, 'W23-B1: Que decisão Hanako tomou?', ['Voltar ao Japão', 'Estudar no Reino Unido', 'Casar-se', 'Mudar de emprego'], 2, '`イギリスに留学することにした`.', { audio: audio('W23_B', 'Workbook W23-B — grandes decisões') }),
  q('listening-b2', 51, 'W23-B1: O que Tarō promete?', ['Ir junto', 'Esperar até ela voltar', 'Esquecê-la', 'Telefonar todo dia'], 2, '`イギリスから戻ってくるまで待っている`.', { audio: audio('W23_B', 'Workbook W23-B — grandes decisões') }),
  q('listening-b3', 52, 'W23-B2: Por que o homem decidiu sair da empresa?', ['O salário é baixo', 'Não consegue fazer o que deseja ali', 'Vai se casar', 'Foi demitido'], 2, 'Ele diz que, mesmo permanecendo, não consegue realizar o que quer.', { audio: audio('W23_B', 'Workbook W23-B — grandes decisões') }),
  q('listening-b4', 53, 'W23-B2: Que profissão ele quer seguir?', ['Professor', 'Dublador/ator de voz', 'Cantor', 'Gerente'], 2, 'Ele quer ser `声優` e entrar numa escola da área.', { audio: audio('W23_B', 'Workbook W23-B — grandes decisões') }),
  q('listening-b5', 54, 'W23-B2: Como se sustentará até conseguir a profissão?', ['Com economias', 'Estudará trabalhando em empregos de meio período', 'Ficará na empresa', 'A escola pagará'], 2, '`声優になれるまでバイトしながら勉強をします`.', { audio: audio('W23_B', 'Workbook W23-B — grandes decisões') }),
  q('listening-c1', 55, 'W23-C1: Que duas maneiras de memorizar kanji são sugeridas?', ['Ler jornal e usar aplicativo', 'Fazer cartões para leitura e escrever muito para grafia', 'Ouvir e cantar', 'Traduzir e desenhar'], 2, 'A pessoa usava cartões para leituras e repetia a escrita num caderno.', { audio: audio('W23_C', 'Workbook W23-C — como fazer') }),
  q('listening-c2', 56, 'W23-C2: Que transporte é recomendado ao aeroporto?', ['Trem', 'Ônibus', 'Táxi', 'Metrô'], 2, 'O ônibus demora mais que o trem, mas é considerado mais fácil de entender.', { audio: audio('W23_C', 'Workbook W23-C — como fazer') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K23_01: dialogueOne,
  K23_02: dialogueOne,
  K23_03: dialogueTwo,
  K23_04: dialogueTwo,
  K23_05: dialogueThree,
  K23_06: dialogueThree,
  Y23: reading,
}

export const genki2Lesson23: Section = {
  id: 'lesson-23',
  level: 'genki-2',
  titleJa: '第23課 別れ',
  titlePt: 'Lição 23 — Despedida',
  summaryPt: 'Causativa-passiva, concessão com ても, decisões com ことにする, regras pessoais, limite com まで, modo de fazer com 方, despedida, kaomoji e emoji.',
  studyNotes,
  groups: [
    genki2Group(LESSON, 'dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    genki2Group(LESSON, 'grammar', '文法', 'gramática e uso em contexto', grammarQuestions),
    genki2Group(LESSON, 'reading', '読み書き', 'vocabulário e leitura sobre kaomoji e emoji', vocabularyReadingQuestions),
    genki2Group(LESSON, 'listening', '聞く練習', 'compreensão oral do workbook', listeningQuestions),
  ],
  audios: buildGenki2Audios({
    lesson: LESSON,
    scripts,
    dialogueCodes: ['K23_01', 'K23_03', 'K23_05'],
    dialogueSupportCodes: ['K23_02', 'K23_04', 'K23_06'],
    vocabularyCodes: ['K23_07', 'K23_08'],
  }),
}
