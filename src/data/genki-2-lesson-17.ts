import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-17'
let sequence = 0

const q = (
  id: string,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extra: Partial<Pick<Question, 'audio' | 'assessment' | 'context' | 'helpPt' | 'translationPt'>> = {},
): Question => ({
  id: `genki-2-l17-${id}`,
  number: ++sequence,
  prompt,
  choices: choices.map((text, index) => ({ n: index + 1, text })),
  answer,
  explanationPt,
  ...extra,
  helpPt: extra.helpPt ?? `Estrat\u00e9gia pr\u00e1tica: ${explanationPt}`,
})

const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({
  id: `genki-2-l17-${id}`,
  title,
  subtitlePt,
  instructionJa: '',
  instructionPt: `Resolva as atividades de ${subtitlePt.toLowerCase()} e consulte o auxílio somente depois de tentar.`,
  questions,
})

const trackId = (code: string) => `genki-2-l17-audio-${code.toLowerCase()}`
const audio = (code: string, title: string) => ({ trackId: trackId(code), src: `${BASE}/${code}.mp3`, title })

const dialogueOne: ScriptItem[] = [{
  label: 'かいわ I',
  setupJa: 'ソラとたけしは{駅|えき}でばったり{会|あ}いました。',
  setupPt: 'Sora e Takeshi acabam de se encontrar por acaso na estação.',
  lines: [
    { speaker: 'Sora', ja: 'たけしさん、{久|ひさ}しぶりですね。{旅行会社|りょこうがいしゃ}に{就職|しゅうしょく}したそうですね。', pt: 'Takeshi, quanto tempo! Ouvi dizer que você conseguiu emprego numa agência de viagens.' },
    { speaker: 'Sora', ja: 'おめでとうございます。', pt: 'Parabéns.' },
    { speaker: 'Takeshi', ja: 'ありがとうございます。', pt: 'Obrigado.' },
    { speaker: 'Sora', ja: 'もう{仕事|しごと}に{慣|な}れましたか。', pt: 'Já se acostumou ao trabalho?' },
    { speaker: 'Takeshi', ja: 'ええ。でも{学生|がくせい}の{時|とき}に{比|くら}べてすごく{忙|いそが}しくなりました。{自分|じぶん}の{時間|じかん}がぜんぜんないんです。', pt: 'Sim. Mas fiquei muito mais ocupado do que na época de estudante. Não tenho nenhum tempo para mim.' },
    { speaker: 'Sora', ja: '{大変|たいへん}ですね。{私|わたし}の{友|とも}だちの{会社|かいしゃ}は{休|やす}みが{多|おお}くて、{残業|ざんぎょう}をしなくてもいいそうですよ。', pt: 'Que difícil. Ouvi dizer que a empresa de um amigo meu dá muitas folgas e nem exige hora extra.' },
    { speaker: 'Takeshi', ja: 'うらやましいなあ。ぼくの{会社|かいしゃ}は{休|やす}みも{少|すく}ないし、{給料|きゅうりょう}も{安|やす}いし、{最悪|さいあく}です。', pt: 'Que inveja. Minha empresa dá poucas folgas, paga pouco... é péssima.' },
    { speaker: 'Sora', ja: '{会社|かいしゃ}に{入|はい}る{前|まえ}にどうしてもっと{調|しら}べなかったんですか。', pt: 'Por que você não pesquisou melhor antes de entrar na empresa?' },
    { speaker: 'Takeshi', ja: '{旅行会社|りょこうがいしゃ}に{入|はい}ったら、{旅行|りょこう}ができると{思|おも}ったんです。', pt: 'Eu achei que, se entrasse numa agência de viagens, poderia viajar.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: 'かいわ II',
  setupJa: 'けんとソラが{話|はな}しています。',
  setupPt: 'Ken e Sora estão conversando.',
  lines: [
    { speaker: 'Sora', ja: 'けさ、{駅|えき}でたけしさんに{会|あ}ったよ。', pt: 'Encontrei o Takeshi na estação hoje de manhã.' },
    { speaker: 'Ken', ja: 'たけしさんが{卒業|そつぎょう}してからぜんぜん{会|あ}ってないけど、{元気|げんき}だった？', pt: 'Não o vejo desde que se formou. Ele estava bem?' },
    { speaker: 'Sora', ja: 'ずいぶん{疲|つか}れているみたい。{毎晩|まいばん}{四|よん}、{五時間|ごじかん}しか{寝|ね}ていないそうだよ。', pt: 'Parecia muito cansado. Dizem que dorme só quatro ou cinco horas por noite.' },
    { speaker: 'Ken', ja: 'やっぱりサラリーマンは{大変|たいへん}だよね。', pt: 'A vida de assalariado é difícil mesmo, né?' },
    { speaker: 'Sora', ja: 'それに、{忙|いそが}しすぎてメアリーとデートする{時間|じかん}もないって。', pt: 'Além disso, ele disse que está ocupado demais até para sair com a Mary.' },
    { speaker: 'Ken', ja: 'そうか。ぼくだったら、{仕事|しごと}より{彼女|かのじょ}を{選|えら}ぶけど。あの{二人|ふたり}、{大丈夫|だいじょうぶ}かなあ。', pt: 'Entendi. Se fosse eu, escolheria a namorada em vez do trabalho. Será que os dois vão ficar bem?' },
  ],
}]

const yokoReading: ScriptItem[] = [{
  label: 'オノ・ヨーコの{伝記|でんき}',
  lines: [
    { speaker: 'Narrador', ja: 'オノ・ヨーコ（{小野洋子|おのようこ}）は1933{年|ねん}に{東京|とうきょう}で{生|う}まれました。', pt: 'Yoko Ono nasceu em Tóquio em 1933.' },
    { speaker: 'Narrador', ja: 'ヨーコの{両親|りょうしん}は{芸術|げいじゅつ}が{好|す}きで、ヨーコも{子供|こども}の{時|とき}、ピアノを{習|なら}っていました。', pt: 'Os pais dela gostavam de arte, e Yoko estudava piano quando criança.' },
    { speaker: 'Narrador', ja: 'ヨーコは1953{年|ねん}、{父親|ちちおや}の{仕事|しごと}で{家族|かぞく}とアメリカに{行|い}き、ニューヨークの{大学|だいがく}に{入|はい}りました。', pt: 'Em 1953, por causa do trabalho do pai, Yoko foi aos Estados Unidos com a família e entrou numa universidade em Nova York.' },
    { speaker: 'Narrador', ja: '{大学|だいがく}では{主|おも}に{音楽|おんがく}と{詩|し}を{勉強|べんきょう}しました。', pt: 'Na universidade, estudou principalmente música e poesia.' },
    { speaker: 'Narrador', ja: '1964{年|ねん}、31{歳|さい}の{時|とき}、ヨーコは{自分|じぶん}の{詩|し}を{集|あつ}めて『グレープフルーツ』を{発表|はっぴょう}します。', pt: 'Em 1964, aos 31 anos, Yoko reuniu seus poemas e publicou Grapefruit.' },
    { speaker: 'Narrador', ja: 'ヨーコの{詩|し}は{短|みじか}くて、{俳句|はいく}みたいです。', pt: 'Os poemas de Yoko são curtos e parecem haicais.' },
    { speaker: 'Poema', ja: '{数|かぞ}えなさい。', pt: 'Conte.' },
    { speaker: 'Poema', ja: '{雲|くも}を{数|かぞ}えて、{名前|なまえ}をつけなさい。', pt: 'Conte as nuvens e dê nomes a elas.' },
    { speaker: 'Narrador', ja: 'この{詩|し}は、{読|よ}んだ{人|ひと}が{雲|くも}を{数|かぞ}えて{名前|なまえ}をつけた{時|とき}に{完成|かんせい}します。', pt: 'Esse poema se completa quando quem o lê conta as nuvens e lhes dá nomes.' },
    { speaker: 'Narrador', ja: '1966{年|ねん}、イギリスでヨーコの{展覧会|てんらんかい}がありました。', pt: 'Em 1966, houve uma exposição de Yoko na Inglaterra.' },
    { speaker: 'Narrador', ja: 'その{中|なか}の{作品|さくひん}の{一|ひと}つが「{天井|てんじょう}の{絵|え}」（{写真|しゃしん}）でした。', pt: 'Uma das obras era Pintura do teto (na fotografia).' },
    { speaker: 'Narrador', ja: '{見|み}に{来|き}た{人|ひと}は、はしごの{上|うえ}で{虫|むし}めがねを{使|つか}って{天井|てんじょう}にある{絵|え}を{見|み}るのです。', pt: 'O visitante subia uma escada e usava uma lupa para ver a imagem no teto.' },
    { speaker: 'Narrador', ja: 'ある{日|ひ}、{一人|ひとり}の{髪|かみ}が{長|なが}い{男|おとこ}が{来|き}て、{虫|むし}めがねで{天井|てんじょう}の{絵|え}を{見|み}てみました。', pt: 'Um dia, um homem de cabelos compridos veio e experimentou olhar a imagem no teto com a lupa.' },
    { speaker: 'Narrador', ja: 'そこには{小|ちい}さい “yes” の{文字|もじ}がありました。', pt: 'Ali havia a pequena palavra “yes”.' },
    { speaker: 'Narrador', ja: '“yes”――この{言葉|ことば}に、{男|おとこ}はとても{感動|かんどう}しました。', pt: 'O homem ficou profundamente emocionado com a palavra “yes”.' },
    { speaker: 'Narrador', ja: '{彼|かれ}の{名前|なまえ}はジョン・レノン。{有名|ゆうめい}なロックバンド、ビートルズのメンバーでした。', pt: 'O nome dele era John Lennon, integrante da famosa banda de rock Beatles.' },
    { speaker: 'Narrador', ja: 'その{後|あと}、{二人|ふたり}はいっしょに{音楽活動|おんがくかつどう}や{芸術活動|げいじゅつかつどう}を{始|はじ}めます。', pt: 'Depois disso, os dois começaram juntos atividades musicais e artísticas.' },
    { speaker: 'Narrador', ja: 'そして、{三年後|さんねんご}、{二人|ふたり}は{結婚|けっこん}しました。', pt: 'E, três anos depois, eles se casaram.' },
  ],
}]

const studyNotes: StudyNote[] = [
  { title: 'Objetivos e vocabulário essencial', bodyPt: 'A lição trabalha boatos e fontes de informação, fala citada informal, condições reais ou hipotéticas, dispensa de obrigação, aparência e ordem temporal. Vocabulário central: {就職|しゅうしょく} (conseguir emprego), {残業|ざんぎょう} (hora extra), {給料|きゅうりょう} (salário), {離婚|りこん} (divórcio), {宝|たから}くじ (loteria), {天気予報|てんきよほう} (previsão do tempo) e {卒業|そつぎょう} (formatura).', helpPt: 'Organize a lição por função: “ouvi dizer” (そうです/って), “se/quando” (たら), “não precisa” (なくてもいい), “parece” (みたい) e “antes/depois” (前に/てから).' },
  { title: '1. 〜そうです — informação ouvida', bodyPt: 'Acrescente そうです à forma curta completa: {話|はな}すそうです, さびしいそうです, {親切|しんせつ}だそうです, {学生|がくせい}だそうです. O tempo e a polaridade da informação original permanecem. Para indicar a fonte, use 〜によると: {天気予報|てんきよほう}によると、{台風|たいふう}が{来|く}るそうです。 Não confunda com o そう de aparência da Lição 13, que usa a base do adjetivo.', helpPt: 'Teste rápido: se você pode começar em português com “segundo...” ou “ouvi dizer que...”, preserve a frase curta inteira e acrescente そうです.' },
  { title: '2. 〜って — citação informal', bodyPt: 'Na conversa informal, って pode substituir そうです no fim de uma informação citada e também a partícula と antes de {言|い}う: メアリーさん、{今日|きょう}は{忙|いそが}しいって。ロバートさんは{何|なん}て{言|い}ってた？ A forma anterior continua sendo curta.', helpPt: 'Pense em って como aspas faladas. Ela aponta para a fala alheia, mas não transforma a informação em fato confirmado.' },
  { title: '3. 〜たら — se/quando', bodyPt: 'Forme com o passado curto + ら: {読|よ}んだら, {読|よ}まなかったら, やさしかったら, {静|しず}かだったら. A oração B acontece quando/depois que A se realiza: {宿題|しゅくだい}が{終|お}わったら、{遊|あそ}びに{行|い}きましょう。 Também expressa hipótese contrária aos fatos: {私|わたし}が{猫|ねこ}だったら、{一日中|いちにちじゅう}{寝|ね}ているでしょう。', helpPt: 'A forma parece passada, mas たら não é “passado”: ela abre uma condição. A consequência nunca pode acontecer antes da condição.' },
  { title: '4. 〜なくてもいいです — não precisa', bodyPt: 'Troque o い final de ない por くてもいいです: {行|い}かない → {行|い}かなくてもいいです. Também vale para adjetivos: プレゼントは{高|たか}くなくてもいいです。', helpPt: 'Não confunda com 〜てはいけません (“não pode”). なくてもいい retira uma obrigação; não cria uma proibição.' },
  { title: '5. 〜みたいです — parece/é como', bodyPt: 'Depois de substantivo, indica semelhança: {父|ちち}はカーネルおじさんみたいです。 Depois da forma curta de verbo, indica inferência por sinais: {雨|あめ}が{降|ふ}ったみたいです。 Pode descrever a própria situação quando você ainda não tem certeza: {財布|さいふ}を{忘|わす}れたみたいです。', helpPt: 'Use みたい quando você conclui a partir de pistas; use o そう de boato quando alguém ou uma fonte lhe contou.' },
  { title: '6. 〜前に／〜てから — ordem temporal', bodyPt: 'Para “antes de A, B”, use A no presente curto + {前|まえ}に: {日本|にほん}に{来|く}る{前|まえ}に、{日本語|にほんご}を{勉強|べんきょう}しました。 Para “depois de A, B”, use A na forma て + から: {勉強|べんきょう}してから、{遊|あそ}びに{行|い}きました。', helpPt: 'A forma antes de 前に não vai ao passado, mesmo que a frase toda esteja no passado. Para てから, traduza mentalmente como “feito A, a partir daí B”.' },
  { title: 'Leitura — オノ・ヨーコ', bodyPt: 'A biografia acompanha Yoko Ono desde o nascimento, seus estudos de música e poesia, a publicação de Grapefruit, a obra “Pintura do teto” e o encontro com John Lennon. A leitura exige reconhecer datas, sequência biográfica e a função participativa da obra.', helpPt: 'Monte uma linha do tempo: 1933 nascimento → 1953 universidade em Nova York → 1964 Grapefruit → 1966 exposição e encontro → três anos depois, casamento.' },
]

const dialogue = [
  q('dialogue-1', 'Onde Sora encontra Takeshi?', ['na universidade', 'na estação', 'na agência de viagens', 'num restaurante'], 2, 'O contexto diz que eles se encontram por acaso na estação.', { audio: audio('K17_01', 'K17-01 — Diálogo I'), helpPt: 'Ouça a apresentação antes da primeira fala.' }),
  q('dialogue-2', 'O que mudou na vida de Takeshi depois da faculdade?', ['ficou menos ocupado', 'passou a viajar sempre', 'ficou muito ocupado e sem tempo próprio', 'recebeu muitas folgas'], 3, 'Ele diz que ficou muito ocupado e não tem tempo para si.', { audio: audio('K17_02', 'K17-02 — Diálogo I, repetição'), helpPt: 'Procure 学生の時に比べて e 自分の時間.' }),
  q('dialogue-3', 'Por que Takeshi entrou numa agência de viagens?', ['achou que poderia viajar', 'queria salário baixo', 'queria fazer hora extra', 'Sora o obrigou'], 1, '旅行ができると思ったんです explica a expectativa dele.', { audio: audio('K17_01', 'K17-01 — Diálogo I') }),
  q('dialogue-4', 'Há quanto tempo Ken não vê Takeshi?', ['desde a viagem', 'desde que Takeshi se formou', 'desde ontem', 'desde o divórcio'], 2, 'たけしさんが卒業してから marca o ponto inicial.', { audio: audio('K17_03', 'K17-03 — Diálogo II') }),
  q('dialogue-5', 'Quanto Takeshi dorme por noite, segundo Sora?', ['duas horas', 'quatro ou cinco horas', 'sete horas', 'não é dito'], 2, 'Sora relata 毎晩四、五時間しか寝ていない.', { audio: audio('K17_04', 'K17-04 — Diálogo II, repetição') }),
  q('dialogue-6', 'O que Ken escolheria se estivesse no lugar de Takeshi?', ['a empresa', 'uma viagem', 'a namorada em vez do trabalho', 'mais horas extras'], 3, 'ぼくだったら、仕事より彼女を選ぶけど.', { audio: audio('K17_03', 'K17-03 — Diálogo II') }),
]

const grammar = [
  q('grammar-1', '「{先生|せんせい}は{親切|しんせつ}です」→ relato correto:', ['先生は親切そうです。', '先生は親切だそうです。', '先生は親切ですそうです。', '先生は親切みたいだそう。'], 2, 'No boato, adjetivo な conserva だ antes de そうです.', { helpPt: 'Preserve a forma curta completa: 親切だ + そうです.' }),
  q('grammar-2', '“Segundo a previsão, virá um tufão.”', ['天気予報みたい、台風が来ます。', '天気予報によると、台風が来るそうです。', '天気予報で、台風が来そうでした。', '台風によると、天気予報です。'], 2, '〜によると apresenta a fonte; 来るそうです apresenta o relato.'),
  q('grammar-3', 'Qual frase significa “ouvi dizer que a aula foi divertida”?', ['授業は楽しそうです。', '授業は楽しかったそうです。', '授業は楽しいみたいです。', '授業は楽しかったら。'], 2, 'O boato preserva o passado 楽しかった.', { helpPt: '楽しそう descreve aparência; 楽しかったそう relata informação.' }),
  q('grammar-4', 'Qual forma de そう é um boato?', ['おいしそうです', '雨が降りそうです', '学生だそうです', '元気そうです'], 3, '学生だそうです preserva a forma curta e significa “ouvi dizer que é estudante”.'),
  q('grammar-5', 'Casual: “Mary disse que amanhã tem prova.”', ['メアリーはあした試験があるって。', 'メアリーは試験がありそう。', 'メアリーは試験をあるって。', 'メアリーは試験だったら。'], 1, 'って encerra informalmente a informação citada.'),
  q('grammar-6', 'ロバートさんは{何|なん}（　）{言|い}ってた？', ['を', 'て', 'が', 'に'], 2, '何て言ってた？ é “o que ele disse?” em registro casual.'),
  q('grammar-7', 'Qual é a função principal de って nesta lição?', ['marcar destino', 'citar fala/informação de modo informal', 'marcar posse', 'formar potencial'], 2, 'って funciona como marcador informal de citação.'),
  q('grammar-8', '{日本|にほん}に（　）、{着物|きもの}を{買|か}います。', ['行くたら', '行ったら', '行ってら', '行けばたら'], 2, 'たら usa a forma curta passada: 行った + ら.'),
  q('grammar-9', 'Negativa condicional de {読|よ}む:', ['読まないたら', '読まなかったら', '読んでいなかった', '読めなければたら'], 2, '読まない → passado curto 読まなかった + ら.'),
  q('grammar-10', '“Se eu fosse um gato, dormiria o dia inteiro.”', ['猫だったら、一日中寝ているでしょう。', '猫だそうで、一日中寝ます。', '猫みたいで、寝なくてもいい。', '猫の前に寝ました。'], 1, 'Substantivo afirmativo usa だったら numa hipótese contrária aos fatos.'),
  q('grammar-11', 'Em AたらB, qual ordem é possível?', ['B sempre antes de A', 'B no momento de A ou depois', 'A e B sem relação', 'somente ações passadas'], 2, 'A condição precisa realizar-se antes da consequência ou no mesmo momento.'),
  q('grammar-12', '{宿題|しゅくだい}が{終|お}わったら、（　）。', ['宿題を始めます', '遊びに行きましょう', '昨日でした', '終わる前でした'], 2, 'A proposta de sair acontece depois que a tarefa terminar.'),
  q('grammar-13', '“Você não precisa vir me buscar.”', ['迎えに来てはいけません。', '迎えに来なくてもいいです。', '迎えに来ないでいました。', '迎えに来るそうです。'], 2, '来ない → 来なくてもいい retira a obrigação.'),
  q('grammar-14', 'プレゼントは{高|たか}（　）いいです。', ['くないで', 'くなくても', 'くては', 'くなかったらしか'], 2, 'Adjetivo negativo: 高くない → 高くなくてもいいです.'),
  q('grammar-15', 'Qual tradução de {勉強|べんきょう}しなくてもいいです é correta?', ['não pode estudar', 'não precisa estudar', 'deve estudar', 'parece estudar'], 2, 'なくてもいい expressa ausência de necessidade, não proibição.'),
  q('grammar-16', 'Há poças no chão. “Parece que choveu.”', ['雨が降ったみたいです。', '雨が降ったそうです。', '雨が降ったらです。', '雨が降らなくてもいいです。'], 1, 'みたい indica inferência por evidência visível.', { helpPt: 'Se alguém contou, use そうです; se você concluiu olhando as poças, use みたい.' }),
  q('grammar-17', '“Meu pai parece o Coronel Sanders.”', ['父はカーネルおじさんそうです。', '父はカーネルおじさんみたいです。', '父はカーネルおじさんだったら。', '父によるとカーネルです。'], 2, 'Substantivo + みたい indica semelhança.'),
  q('grammar-18', '{財布|さいふ}を{忘|わす}れた（　）。', ['みたいです', 'なくてもいいです', '前にです', 'ってからです'], 1, 'O falante conclui, sem certeza absoluta, que esqueceu a carteira.'),
  q('grammar-19', '“Antes de vir ao Japão, estudei japonês.”', ['日本に来た前に、日本語を勉強しました。', '日本に来る前に、日本語を勉強しました。', '日本に来てから、日本語を勉強する前です。', '日本に来たら前に勉強しました。'], 2, 'Antes de 前に, o verbo fica no presente curto, mesmo numa frase passada.'),
  q('grammar-20', '“Depois de estudar, fui me divertir.”', ['勉強する前に、遊びに行きました。', '勉強してから、遊びに行きました。', '勉強したそうで、遊びました。', '勉強しなくても、遊びでした。'], 2, 'Forma て + から organiza A e depois B.'),
  q('grammar-21', 'けんさんが{来|き}て（　）、{食|た}べましょう。', ['前に', 'から', 'そう', 'みたい'], 2, '来てから = depois que Ken chegar.'),
  q('grammar-22', 'Qual sequência está correta?', ['歯をみがいてから、寝ます。', '寝てから、寝る前に歯をみがきます。', '歯をみがいた前に寝ます。', '歯をみがくそうで寝ます。'], 1, 'Primeiro escovar os dentes; depois dormir.'),
]

const vocabularyReading = [
  q('vocabulary-1', '{就職|しゅうしょく}する', ['pedir demissão', 'conseguir emprego', 'fazer hora extra', 'formar-se'], 2, '就職する é entrar no mercado/obter emprego.'),
  q('vocabulary-2', '{残業|ざんぎょう}', ['salário', 'folga', 'hora extra', 'previsão'], 3, '残業 é trabalho além do horário regular.'),
  q('vocabulary-3', '{給料|きゅうりょう}が{安|やす}い', ['salário baixo', 'salário atrasado', 'trabalho fácil', 'empresa longe'], 1, '給料 é salário; 安い, neste contexto, significa baixo.'),
  q('vocabulary-4', '{天気予報|てんきよほう}', ['jornal da empresa', 'previsão do tempo', 'agência de viagens', 'loteria'], 2, '天気予報 é previsão meteorológica.'),
  q('reading-1', 'Em que ano Yoko Ono nasceu?', ['1931', '1933', '1953', '1964'], 2, 'A primeira frase informa 1933年.', { audio: audio('Y17', 'Y17 — Biografia de Yoko Ono') }),
  q('reading-2', 'O que Yoko estudou principalmente na universidade?', ['economia e história', 'música e poesia', 'pintura e cinema', 'japonês e inglês'], 2, '大学では主に音楽と詩を勉強しました。', { audio: audio('Y17', 'Y17 — Biografia de Yoko Ono') }),
  q('reading-3', 'Como o texto descreve os poemas de Yoko?', ['longos como romances', 'curtos como haicais', 'somente em inglês', 'sem participação do leitor'], 2, 'ヨーコの詩は短くて、俳句みたいです。', { audio: audio('Y17', 'Y17 — Biografia de Yoko Ono') }),
  q('reading-4', 'Quando o poema “Conte” se completa?', ['quando Yoko o publica', 'quando o leitor conta as nuvens e lhes dá nomes', 'quando John o traduz', 'quando chove'], 2, 'A obra se completa pela ação do leitor descrita no texto.', { audio: audio('Y17', 'Y17 — Biografia de Yoko Ono') }),
  q('reading-5', 'Qual palavra John Lennon viu no teto?', ['love', 'peace', 'yes', 'cloud'], 3, 'Com a lupa, ele viu a pequena palavra “yes”.', { audio: audio('Y17', 'Y17 — Biografia de Yoko Ono') }),
  q('reading-6', 'Quanto tempo depois do encontro Yoko e John se casaram?', ['um ano', 'dois anos', 'três anos', 'dez anos'], 3, 'そして、三年後、二人は結婚しました。', { audio: audio('Y17', 'Y17 — Biografia de Yoko Ono') }),
]

const listening = [
  q('listening-a1', 'W17-A: Yamamoto pretende sair da empresa?', ['sim', 'não'], 1, 'A primeira fala diz 会社をやめるそうですよ.', { audio: audio('W17_A', 'W17-A — Conversa sobre Yamamoto') }),
  q('listening-a2', 'W17-A: Yamamoto está doente?', ['sim', 'não; o áudio diz que parece cansado'], 2, 'O áudio fala em cansaço e excesso de hora extra, não em doença.', { audio: audio('W17_A', 'W17-A — Conversa sobre Yamamoto') }),
  q('listening-a3', 'W17-A: Como é o salário da empresa?', ['bom', 'baixo', 'não é mencionado'], 1, 'この会社は給料はいいけど残業が多すぎます.', { audio: audio('W17_A', 'W17-A — Conversa sobre Yamamoto') }),
  q('listening-a4', 'W17-A: Yamamoto vinha trabalhando até tarde?', ['sim, todos os dias', 'não', 'somente aos domingos'], 1, '毎日、夜遅くまで残業していたみたいです.', { audio: audio('W17_A', 'W17-A — Conversa sobre Yamamoto') }),
  q('listening-a5', 'W17-A: O áudio afirma que a causa do divórcio é um novo namorado da esposa?', ['sim', 'não'], 2, 'A causa sugerida é o excesso de trabalho e a ausência de casa; nenhum namorado é mencionado.', { audio: audio('W17_A', 'W17-A — Conversa sobre Yamamoto') }),
  q('listening-a6', 'W17-A: O que os dois cogitam fazer antes de se casar?', ['viajar', 'procurar um novo emprego', 'pedir aumento', 'mudar de país'], 2, '新しい仕事を探したほうがいいかもしれませんね.', { audio: audio('W17_A', 'W17-A — Conversa sobre Yamamoto') }),
  q('listening-b1', 'W17-B: Eles precisam se apressar?', ['sim', 'não'], 2, '急がなくてもいいですよ。一時間ありますから.', { audio: audio('W17_B', 'W17-B — Antes da festa') }),
  q('listening-b2', 'W17-B: Eles telefonarão para Tanaka?', ['sim', 'não'], 1, 'Antes de sair, dizem que precisam ligar para Tanaka.', { audio: audio('W17_B', 'W17-B — Antes da festa') }),
  q('listening-b3', 'W17-B: Levarão guarda-chuva?', ['sim', 'não'], 2, 'A previsão diz que não choverá; concluem que não é necessário.', { audio: audio('W17_B', 'W17-B — Antes da festa') }),
  q('listening-b4', 'W17-B: O que comprarão depois de descer do ônibus?', ['livro e café', 'bolo e flores', 'guarda-chuva e gravata', 'nada'], 2, 'バスを降りてから、ケーキと花を買いましょう.', { audio: audio('W17_B', 'W17-B — Antes da festa') }),
  q('listening-c1', 'W17-C: Em que dia o grupo irá a Kobe?', ['sábado', 'domingo', 'segunda-feira', 'não irão'], 2, 'Sora não pode sábado, mas pode domingo.', { audio: audio('W17_C', 'W17-C — Planos para Kobe') }),
  q('listening-c2', 'W17-C: O que Mary quer fazer em Kobe?', ['comer algo gostoso', 'só fazer compras', 'trabalhar', 'visitar a empresa'], 1, 'メアリーはおいしいものが食べたい.', { audio: audio('W17_C', 'W17-C — Planos para Kobe') }),
  q('listening-c3', 'W17-C: O que Sora quer fazer?', ['subir o monte Rokko', 'fazer compras', 'dormir', 'trabalhar'], 2, 'ソラさんは買い物がしたいって.', { audio: audio('W17_C', 'W17-C — Planos para Kobe') }),
  q('listening-c4', 'W17-C: O que Takeshi quer fazer?', ['subir o monte Rokko', 'comprar flores', 'ir ao cinema', 'visitar Tanaka'], 1, 'ぼくは六甲山に行きたい.', { audio: audio('W17_C', 'W17-C — Planos para Kobe') }),
  q('listening-c5', 'W17-C: Se chover, qual será o plano?', ['cancelar tudo', 'fazer compras e comer algo gostoso na cidade', 'subir a montanha assim mesmo', 'voltar à universidade'], 2, '雨が降ったら、町で買い物をしたり、おいしいものを食べたりしよう.', { audio: audio('W17_C', 'W17-C — Planos para Kobe') }),
]

const audioSupportCodes = ['K17_05', 'K17_06', 'K17_07', 'K17_08', 'K17_09', 'K17_10', 'K17_11', 'K17_12', 'K17_13', 'K17_14']
const audioPractice = audioSupportCodes.map((code) => {
  const source = genki2AudioSourceByCode[code]
  return q(
    `audio-${code.toLowerCase()}`,
    `${source.sourceActivityPt}: depois de ouvir sem ler, você conseguiu repetir ou produzir a estrutura-alvo com sentido?`,
    ['Ainda não; preciso ouvir e repetir de novo.', 'Sim; consegui reproduzir a tarefa com segurança.'],
    2,
    'Esta é uma autoavaliação de produção. Marque a segunda opção somente se conseguiu realizar a tarefa sem depender da resposta escrita.',
    {
      assessment: 'self-check',
      audio: audio(code, `${code} — ${source.sourceActivityPt}`),
      helpPt: 'Faça três passagens: compreensão geral, repetição em blocos e produção sem o áudio. Se travar, marque para repetir; isso agenda uma revisão mais próxima.',
    },
  )
})

const scriptByCode: Record<string, ScriptItem[]> = {
  K17_01: dialogueOne,
  K17_02: dialogueOne,
  K17_03: dialogueTwo,
  K17_04: dialogueTwo,
  Y17: yokoReading,
}

const codes = [
  ...Array.from({ length: 14 }, (_, index) => `K17_${String(index + 1).padStart(2, '0')}`),
  'Y17',
  'W17_A',
  'W17_B',
  'W17_C',
]

const kindFor = (code: string): AudioTrackKind => {
  if (code === 'Y17') return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (['K17_01', 'K17_03'].includes(code)) return 'dialogue'
  if (['K17_02', 'K17_04'].includes(code)) return 'dialogue-support'
  if (['K17_05', 'K17_06'].includes(code)) return 'vocabulary'
  return 'drill'
}

const audios: AudioTrack[] = codes.map((code) => {
  const source = genki2AudioSourceByCode[code]
  const script = scriptByCode[code] ?? []
  const kind = kindFor(code)
  const isWorkbook = kind === 'workbook'
  const isReading = kind === 'reading'
  const isDialogue = kind === 'dialogue' || kind === 'dialogue-support'
  return {
    id: trackId(code),
    code,
    kind,
    language: 'ja',
    title: `${code} — ${source.sourceActivityPt}`,
    descriptionPt: isDialogue
      ? 'Diálogo integral da lição para compreensão, repetição e revisão contextual.'
      : isReading
        ? 'Leitura integral da biografia, alinhada ao texto impresso.'
        : isWorkbook
          ? 'Compreensão auditiva do workbook ligada às questões objetivas desta sessão.'
          : `Faixa oficial de ${source.sourceActivityPt.toLowerCase()} para treino ativo de percepção e produção.`,
    purposePt: isDialogue
      ? 'Reconhecer boatos, condições e comentários sobre a vida profissional em conversa natural.'
      : isReading
        ? 'Acompanhar uma biografia e recuperar datas, obras e relações de causa e sequência.'
        : isWorkbook
          ? 'Responder à tarefa impressa e transformar os detalhes ouvidos em revisão espaçada.'
          : `Consolidar oralmente a atividade ${source.sourceActivityPt}.`,
    instructionsPt: isWorkbook
      ? ['Leia a pergunta antes de tocar.', 'Ouça uma vez sem pausar e responda.', 'Ouça novamente para confirmar as pistas.']
      : ['Ouça uma vez sem ler.', 'Repita em blocos, imitando ritmo e entonação.', 'Produza a resposta sem o áudio e registre a autoavaliação.'],
    sourceRefPt: `Genki II, 3ª edição — ${source.material === 'textbook' ? 'livro-texto' : 'workbook'}, p. ${source.sourcePage}.`,
    sourceActivityPt: source.sourceActivityPt,
    sourcePage: source.sourcePage,
    practiceTaskPt: isWorkbook
      ? `Resolva as perguntas de ${source.sourceActivityPt} sem consultar a explicação; depois confirme cada detalhe no áudio.`
      : `Use ${source.sourceActivityPt} em três etapas: escuta global, repetição e produção independente.`,
    src: `${BASE}/${code}.mp3`,
    script,
    transcript: script.length ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script } : undefined,
  }
})

export const genki2Lesson17: Section = {
  id: 'lesson-17',
  level: 'genki-2',
  titleJa: '{第|だい}17{課|か}　ぐちとうわさ{話|ばなし}',
  titlePt: 'Lição 17 — Reclamações e boatos',
  summaryPt: 'Relatos por そうです e って, condicional たら, dispensa com なくてもいい, inferência com みたい, sequência com 前に／てから, leitura biográfica e compreensão oral.',
  studyNotes,
  groups: [
    group('dialogue', '{会話|かいわ}', 'compreensão dos diálogos', dialogue),
    group('grammar', '{文法|ぶんぽう}', 'gramática e uso contextual', grammar),
    group('vocabulary-reading', '{単語|たんご}・{読|よ}み', 'vocabulário e leitura', vocabularyReading),
    group('listening', '{聞|き}く{練習|れんしゅう}', 'compreensão auditiva do workbook', listening),
    group('audio-practice', '{音声|おんせい}{練習|れんしゅう}', 'produção guiada com os demais áudios', audioPractice),
  ],
  audios,
}
