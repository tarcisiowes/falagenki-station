import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-20'
const LESSON_PREFIX = 'genki-2-l20'

let sequence = 0

const trackId = (code: string) => `${LESSON_PREFIX}-audio-${code.toLowerCase()}`
const questionAudio = (code: string, title: string) => ({
  trackId: trackId(code),
  src: `${BASE}/${code}.mp3`,
  title,
})

const q = (
  id: string,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extra: Partial<Pick<Question, 'audio' | 'assessment' | 'context' | 'helpPt' | 'translationPt'>> = {},
): Question => ({
  id: `${LESSON_PREFIX}-${id}`,
  number: ++sequence,
  prompt,
  choices: choices.map((text, index) => ({ n: index + 1, text })),
  answer,
  explanationPt,
  ...extra,
  helpPt: extra.helpPt ?? `Estratégia prática: ${explanationPt}`,
})

const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({
  id: `${LESSON_PREFIX}-${id}`,
  title,
  subtitlePt,
  instructionJa: '',
  instructionPt: `Resolva as atividades de ${subtitlePt.toLowerCase()} e consulte o auxílio somente depois de tentar.`,
  questions,
})

const dialogueOne: ScriptItem[] = [{
  label: '{会話|かいわ} I — {電気製品店|でんきせいひんてん}で',
  setupJa: 'メアリーは{電気製品店|でんきせいひんてん}でヘッドホンについて{相談|そうだん}します。',
  setupPt: 'Mary procura uma loja de eletrodomésticos para resolver um problema com seus fones de ouvido.',
  lines: [
    { speaker: 'Mary', ja: 'すみません。この{間|あいだ}このヘッドホンを{買|か}ったんですが、{音|おと}が{聞|き}こえないんです。', pt: 'Com licença. Comprei estes fones outro dia, mas não sai som.' },
    { speaker: '{店員|てんいん}', ja: '{少々|しょうしょう}、お{待|ま}ちください。{今|いま}、{係|かかり}の{者|もの}を{呼|よ}んで{参|まい}ります。', pt: 'Aguarde um momento, por favor. Vou chamar agora a pessoa responsável.' },
    { speaker: '{田中|たなか}', ja: 'お{待|ま}たせいたしました。{田中|たなか}と{申|もう}します。ヘッドホンを{見|み}せていただけますか。', pt: 'Desculpe fazê-la esperar. Meu nome é Tanaka. Poderia me mostrar os fones?' },
    { speaker: '{田中|たなか}', ja: '……{壊|こわ}れているみたいですね。{失礼|しつれい}いたしました。よろしかったら、{交換|こうかん}いたしますが。', pt: 'Parece que estão quebrados. Peço desculpas. Se estiver de acordo, nós os trocaremos.' },
    { speaker: 'Mary', ja: 'じゃあ、お{願|ねが}いします。', pt: 'Então, por favor.' },
    { speaker: '{田中|たなか}', ja: '{申|もう}し{訳|わけ}ございません。{今|いま}、{同|おな}じ{物|もの}がございませんので、{二|に}、{三週間|さんしゅうかん}{待|ま}っていただけませんか。', pt: 'Sinto muito. Como não temos o mesmo produto agora, poderia esperar duas ou três semanas?' },
    { speaker: 'Mary', ja: 'それは、ちょっと……。もうすぐ{国|くに}に{帰|かえ}るので、できれば{返品|へんぴん}したいんですが。', pt: 'Isso seria um pouco difícil... Como voltarei logo ao meu país, se possível, gostaria de devolver o produto.' },
    { speaker: '{田中|たなか}', ja: 'かしこまりました。まことに{申|もう}し{訳|わけ}ございませんでした。', pt: 'Certamente. Peço sinceras desculpas.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: '{会話|かいわ} II — {道|みち}で',
  setupJa: 'メアリーは{道|みち}で「にしき{屋|や}」への{行|い}き{方|かた}を{尋|たず}ねます。',
  setupPt: 'Na rua, Mary pergunta a um senhor como chegar à loja Nishikiya.',
  lines: [
    { speaker: 'Mary', ja: 'すみません。にしき{屋|や}という{店|みせ}がどこにあるか{教|おし}えていただけませんか。{地図|ちず}を{見|み}ているんですが、わかりにくいんです。', pt: 'Com licença. Poderia me dizer onde fica uma loja chamada Nishikiya? Estou olhando o mapa, mas ele é difícil de entender.' },
    { speaker: 'おじいさん', ja: '{扇子|せんす}の{店|みせ}ですね。{次|つぎ}の{角|かど}を{左|ひだり}に{曲|ま}がったら{見|み}えますよ。{扇子|せんす}を{買|か}いに{行|い}くんですか。', pt: 'É a loja de leques, certo? Você a verá se virar à esquerda na próxima esquina. Vai comprar leques?' },
    { speaker: 'Mary', ja: 'ええ。おみやげに{扇子|せんす}を{買|か}おうと{思|おも}っているんです。', pt: 'Sim. Estou pensando em comprar leques como lembrança.' },
    { speaker: 'おじいさん', ja: 'いいおみやげになりますよ。あっ、{雨|あめ}ですね。{傘|かさ}を{持|も}っていますか。', pt: 'Serão boas lembranças. Ah, está chovendo. Você tem guarda-chuva?' },
    { speaker: 'Mary', ja: 'いいえ、{急|いそ}いでいたから、{傘|かさ}を{持|も}たないで、{来|き}ちゃったんです。', pt: 'Não. Como eu estava com pressa, acabei vindo sem trazer guarda-chuva.' },
    { speaker: 'おじいさん', ja: 'じゃあ、{一緒|いっしょ}に{店|みせ}まで{行|い}きましょう。', pt: 'Então, vamos juntos até a loja.' },
    { speaker: 'Mary', ja: 'どうもすみません。{荷物|にもつ}が{重|おも}そうですね。お{持|も}ちします。', pt: 'Muito obrigada. Sua bagagem parece pesada. Eu a carregarei.' },
    { speaker: 'おじいさん', ja: 'ありがとう。', pt: 'Obrigado.' },
  ],
}]

const catPlateReading: ScriptItem[] = [{
  label: '{落語|らくご}「{猫|ねこ}の{皿|さら}」',
  setupJa: '{江戸時代|えどじだい}から{伝|つた}わる{落語|らくご}の{一|ひと}つです。',
  setupPt: 'Introdução ao rakugo e narrativa tradicional “O prato do gato”.',
  lines: [
    { speaker: '{語|かた}り', ja: '{落語|らくご}は{今|いま}から{三百年以上|さんびゃくねんいじょう}{前|まえ}の{江戸時代|えどじだい}に{始|はじ}まりました。この{時代|じだい}にたくさんの{人|ひと}の{前|まえ}でおもしろい{話|はなし}をして、お{金|かね}をもらう{人|ひと}がいました。', pt: 'O rakugo começou no período Edo, há mais de trezentos anos. Naquela época, havia pessoas que contavam histórias divertidas diante de muita gente e recebiam dinheiro por isso.' },
    { speaker: '{語|かた}り', ja: 'このおもしろい{話|はなし}を{落語|らくご}と{言|い}い、{落語|らくご}をする{人|ひと}を{落語家|らくごか}と{言|い}います。{落語家|らくごか}は{一人|ひとり}でいろいろな{声|こえ}や{身|み}ぶりを{使|つか}って、おもしろい{話|はなし}をします。{今|いま}でも{落語|らくご}はとても{人気|にんき}があります。', pt: 'Essas histórias divertidas são chamadas de rakugo, e quem as apresenta é chamado de rakugoka. Sozinho, o artista usa várias vozes e gestos para contar uma história. O rakugo continua muito popular ainda hoje.' },
    { speaker: '{語|かた}り', ja: '{江戸時代|えどじだい}の{落語|らくご}の{一|ひと}つ、「{猫|ねこ}の{皿|さら}」を{読|よ}んでみましょう。', pt: 'Vamos ler “O prato do gato”, uma história de rakugo do período Edo.' },
    { speaker: '{語|かた}り', ja: 'ある{所|ところ}に、{一人|ひとり}の{男|おとこ}がいました。{男|おとこ}はいなかに{行|い}って{古|ふる}い{物|もの}を{買|か}い、{江戸|えど}でそれを{高|たか}い{値段|ねだん}で{売|う}っていました。', pt: 'Em certo lugar vivia um homem. Ele ia ao interior comprar antiguidades e as vendia em Edo por preços altos.' },
    { speaker: '{語|かた}り', ja: 'ある{日|ひ}、{男|おとこ}は{川|かわ}の{近|ちか}くにある{茶店|ちゃみせ}に{入|はい}りました。{男|おとこ}は{茶店|ちゃみせ}でお{茶|ちゃ}を{飲|の}みながら、{外|そと}を{見|み}ていました。', pt: 'Um dia, o homem entrou numa casa de chá perto de um rio. Enquanto bebia chá, olhava para fora.' },
    { speaker: '{語|かた}り', ja: 'その{時|とき}、{猫|ねこ}が{歩|ある}いてきて、えさが{入|はい}った{皿|さら}の{前|まえ}で{止|と}まりました。{男|おとこ}はびっくりしました。その{皿|さら}はとてもめずらしい{物|もの}で、{一枚三百両|いちまいさんびゃくりょう}もする{皿|さら}だったのです。', pt: 'Nesse momento, um gato se aproximou e parou diante de um prato com comida. O homem se espantou: era um prato raríssimo que valia nada menos que trezentos ryō.' },
    { speaker: '{男|おとこ}', ja: '「{茶店|ちゃみせ}の{主人|しゅじん}はあの{皿|さら}がいくらか{知|し}らないんだ。だからあんなに{高|たか}い{物|もの}を{猫|ねこ}の{皿|さら}に{使|つか}っているんだ。そうだ！{主人|しゅじん}をだまして、あの{皿|さら}をいただこう！」', pt: '“O dono não sabe quanto vale aquele prato. Por isso usa uma coisa tão cara como prato do gato. Já sei! Vou enganar o dono e ficar com o prato!”' },
    { speaker: '{語|かた}り', ja: '{男|おとこ}は{猫|ねこ}を{抱|だ}き、にこにこしながら{主人|しゅじん}に{言|い}いました。', pt: 'O homem pegou o gato no colo e, sorrindo, falou com o dono.' },
    { speaker: '{男|おとこ}', ja: '「かわいい{猫|ねこ}だね。{私|わたし}は{猫|ねこ}が{大好|だいす}きなんだ。{前|まえ}に{猫|ねこ}を{飼|か}っていたけど、どこかに{行|い}っちゃって……。ご{主人|しゅじん}、この{猫|ねこ}くれないか。」', pt: '“Que gato adorável. Eu adoro gatos. Eu tinha um, mas ele foi embora para algum lugar... Senhor, não me daria este gato?”' },
    { speaker: '{主人|しゅじん}', ja: '「{無理|むり}でございます。この{猫|ねこ}は{私|わたし}の{家族|かぞく}みたいで、とてもかわいいんです。」', pt: '“Isso não será possível. Este gato é como alguém da minha família e é muito querido para mim.”' },
    { speaker: '{男|おとこ}', ja: '「じゃあ、{三両払|さんりょうはら}うから、どうだ？」', pt: '“Então, que tal se eu pagar três ryō?”' },
    { speaker: '{語|かた}り', ja: '{三両|さんりょう}というお{金|かね}はとても{大|おお}きいお{金|かね}です。', pt: 'Três ryō era uma quantia muito grande.' },
    { speaker: '{主人|しゅじん}', ja: '「わかりました。{猫|ねこ}をさしあげましょう。」', pt: '“Está bem. Eu lhe darei o gato.”' },
    { speaker: '{語|かた}り', ja: '{茶店|ちゃみせ}の{主人|しゅじん}はうれしそうに{言|い}いました。', pt: 'O dono da casa de chá disse isso, parecendo contente.' },
    { speaker: '{男|おとこ}', ja: '「やった！」', pt: '“Consegui!”' },
    { speaker: '{語|かた}り', ja: '{男|おとこ}は{心|こころ}の{中|なか}で{笑|わら}いました。そして{主人|しゅじん}に{三両払|さんりょうはら}って、{言|い}いました。', pt: 'O homem riu por dentro. Pagou três ryō ao dono e disse:' },
    { speaker: '{男|おとこ}', ja: '「この{猫|ねこ}の{皿|さら}もいっしょに{持|も}っていくよ。」', pt: '“Vou levar também o prato deste gato.”' },
    { speaker: '{主人|しゅじん}', ja: '「それはさしあげられません。」', pt: '“Esse eu não posso lhe dar.”' },
    { speaker: '{男|おとこ}', ja: '「どうして。こんなきたない{皿|さら}。いいだろう。」', pt: '“Por quê? É um prato tão sujo. Não tem problema, certo?”' },
    { speaker: '{語|かた}り', ja: '{男|おとこ}は{何度|なんど}も{頼|たの}みましたが、{主人|しゅじん}は{絶対|ぜったい}に{皿|さら}を{渡|わた}しませんでした。{男|おとこ}はがっかりしました。その{時|とき}、{猫|ねこ}が{男|おとこ}をひっかきました。', pt: 'O homem pediu várias vezes, mas o dono se recusou terminantemente a entregar o prato. O homem ficou decepcionado. Então o gato o arranhou.' },
    { speaker: '{男|おとこ}', ja: '「{痛|いた}い！{何|なん}だ、この{猫|ねこ}！こんな{猫|ねこ}、いらないよ！」', pt: '“Ai! Que gato é este?! Não quero um gato assim!”' },
    { speaker: '{語|かた}り', ja: '{皿|さら}はもらえないし、{猫|ねこ}はひっかくし、{最悪|さいあく}です。{男|おとこ}は{主人|しゅじん}に{聞|き}いてみました。', pt: 'Ele não conseguiu o prato, foi arranhado pelo gato e tudo estava péssimo. O homem resolveu perguntar ao dono.' },
    { speaker: '{男|おとこ}', ja: '「どうしてその{皿|さら}を{渡|わた}したくないんだ。」', pt: '“Por que você não quer entregar esse prato?”' },
    { speaker: '{主人|しゅじん}', ja: '「これはとてもめずらしい{皿|さら}で、{一枚三百両|いちまいさんびゃくりょう}もいたします。{家|いえ}に{置|お}くとあぶないので、こちらに{持|も}ってきたんです。」', pt: '“Este prato é muito raro e vale trezentos ryō. Como seria perigoso deixá-lo em casa, eu o trouxe para cá.”' },
    { speaker: '{語|かた}り', ja: '{主人|しゅじん}は{話|はなし}を{続|つづ}けました。', pt: 'O dono continuou:' },
    { speaker: '{主人|しゅじん}', ja: '「それに、ここに{皿|さら}を{置|お}いておくと、{時々|ときどき}{猫|ねこ}が{三両|さんりょう}で{売|う}れるんですよ。」', pt: '“Além disso, quando deixo o prato aqui, de vez em quando consigo vender o gato por três ryō.”' },
  ],
}]

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situação da lição',
    bodyPt: 'Mary tenta trocar ou devolver um fone defeituoso e depois pede o caminho até uma loja de leques. A lição trabalha linguagem modesta, ações feitas em deferência a alguém, fazer algo sem outra ação, perguntas embutidas, nomes apresentados com という e facilidade ou dificuldade com 〜やすい／〜にくい.',
    helpPt: 'Separe as cenas por intenção: na loja, Mary precisa reconhecer o registro formal do atendente; na rua, precisa pedir informação, compreender instruções e oferecer ajuda com humildade.',
  },
  {
    title: '1. Expressões extra-modestas',
    bodyPt: 'Em situações muito formais, o falante rebaixa as próprias ações para demonstrar deferência ao ouvinte: いる→おります, {行|い}く／{来|く}る→{参|まい}ります, {言|い}う→{申|もう}します, する→いたします, {食|た}べる／{飲|の}む→いただきます, ある→ございます, 〜ている→〜ております e 〜です→〜でございます. Normalmente aparecem na forma longa e também podem descrever pessoas do grupo do falante.',
    helpPt: 'Atalho de perspectiva: use essas formas para “eu/nós e nosso grupo”, nunca para elevar a ação do professor ou cliente. Para o professor, use honoríficos da lição 19.',
  },
  {
    title: '2. Expressões humildes',
    bodyPt: 'Quando o falante age em benefício ou deferência a alguém respeitado, pode usar お + radical ます + する: {会|あ}う→お{会|あ}いする, {貸|か}す→お{貸|か}しする, {返|かえ}す→お{返|かえ}しする. Compostos com する preferem ご ou お diretamente: ご{紹介|しょうかい}する, ご{案内|あんない}する, ご{説明|せつめい}する, お{電話|でんわ}する. Formas especiais: もらう→いただく, あげる→さしあげる e visitar/perguntar→うかがう.',
    helpPt: 'Compare as setas: お帰りになる eleva quem volta; お送りする rebaixa quem acompanha e mostra respeito à pessoa beneficiada. Não aplique o padrão mecanicamente a todo verbo.',
  },
  {
    title: '3. 〜ないで — fazer sem fazer',
    bodyPt: 'Forma negativa curta no presente + で indica que uma ação ocorre sem outra: きのうの{夜|よる}は、{寝|ね}ないで、{勉強|べんきょう}しました。{辞書|じしょ}を{使|つか}わないで、{新聞|しんぶん}を{読|よ}みます. A forma antes de で permanece no presente mesmo quando a ação principal está no passado.',
    helpPt: 'Leia ないで como “sem fazer X”. Não confunda com なくて, que frequentemente liga uma causa ou um estado negativo.',
  },
  {
    title: '4. Perguntas dentro de frases maiores',
    bodyPt: 'Uma pergunta com palavra interrogativa vira forma curta + か: {山下先生|やましたせんせい}はきのう{何|なに}を{食|た}べたかわかりません. Perguntas sim/não usam かどうか: {旅行|りょこう}に{行|い}くかどうか{決|き}めましょう. Com substantivo ou adjetivo な no presente, o だ costuma cair: だれが{一番上手|いちばんじょうず}かわかりません. O sujeito interno geralmente usa が.',
    helpPt: 'Primeiro forme a pergunta direta; depois retire a entonação de pergunta e encaixe-a antes de わかる, 知る, 覚える, 決める ou 教える. Use かどうか somente quando a resposta for sim/não.',
  },
  {
    title: '5. Nome + という + item',
    bodyPt: 'Use (nome) という (categoria) quando apresenta uma pessoa ou coisa cujo nome talvez seja desconhecido: ポチという{犬|いぬ}, 「{花|はな}」という{歌|うた}, にしき{屋|や}という{店|みせ}. という conecta o nome à categoria e equivale a “um(a) ... chamado(a) ...”.',
    helpPt: 'A ordem é nome primeiro, categoria depois: “Nishikiya chamada loja” → にしき屋という店. Se o interlocutor já conhece o referente, o simples nome costuma bastar.',
  },
  {
    title: '6. Radical + 〜やすい／〜にくい',
    bodyPt: 'Acrescente やすい ao radical ます para “fácil de fazer” e にくい para “difícil de fazer”: {使|つか}う→{使|つか}いやすい, {読|よ}む→{読|よ}みやすい, {食|た}べる→{食|た}べにくい. O resultado se comporta como adjetivo い: 読みやすかった, 使いにくくない. O sujeito pode ser um objeto, ferramenta ou lugar no qual a ação é fácil ou difícil.',
    helpPt: 'Essas formas destacam a facilidade prática ou psicológica da ação. “Kanji são difíceis de memorizar para mim” combina com 覚えにくい; uma dificuldade objetiva mais ampla pode ser 覚えるのは難しい.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Compras e atendimento: ヘッドホン, {音|おと}, {係|かかり}の{者|もの}, {交換|こうかん}する, {返品|へんぴん}する, {支店|してん}, {申|もう}し{訳|わけ}ありません. Direções e objetos: {扇子|せんす}, {角|かど}, {信号|しんごう}, {曲|ま}がる, {重|おも}い, {軽|かる}い. Registro formal: かしこまりました, まことに, よろしかったら, できれば.',
    helpPt: 'Estude em blocos de cena. Treine primeiro o problema e a solução na loja; depois, localização, direção e oferta de ajuda na rua.',
  },
  {
    title: 'Leitura — {落語|らくご}「{猫|ねこ}の{皿|さら}」',
    bodyPt: 'A leitura apresenta o rakugo e conta como um comerciante tenta enganar o dono de uma casa de chá para obter um prato valioso. O desfecho revela que o dono conhece o valor do prato e o usa justamente para vender repetidamente o mesmo gato por três ryō.',
    helpPt: 'Acompanhe quem sabe o quê: o homem pensa que só ele reconheceu o prato; o dono já conhece seu valor e controla a situação. Essa diferença de informação produz a piada final.',
  },
]

const dialogueQuestions = [
  q('dialogue-1', 'Por que Mary procura a loja de eletrodomésticos?', ['quer comprar uma televisão', 'o fone comprado não reproduz som', 'perdeu o recibo', 'quer trabalhar na loja'], 2, 'Mary diz このヘッドホンを買ったんですが、音が聞こえないんです.', { audio: questionAudio('K20_01', 'K20-01 — Diálogo I: devolução do fone') }),
  q('dialogue-2', 'O que a primeira atendente fará?', ['trocar o produto imediatamente', 'chamar a pessoa responsável', 'telefonar para Mary amanhã', 'fechar a loja'], 2, 'A atendente diz 係の者を呼んで参ります.', { audio: questionAudio('K20_02', 'K20-02 — Diálogo I: repetição guiada') }),
  q('dialogue-3', 'Qual é o diagnóstico de Tanaka?', ['o fone parece quebrado', 'a bateria está vazia', 'Mary o usou incorretamente', 'o modelo é muito antigo'], 1, '壊れているみたいですね indica que o fone parece estar quebrado.', { audio: questionAudio('K20_01', 'K20-01 — Diálogo I: devolução do fone') }),
  q('dialogue-4', 'Por que a troca não pode ser feita naquele momento?', ['a loja não aceita troca', 'não há o mesmo produto em estoque', 'Tanaka não é responsável', 'Mary não trouxe o produto'], 2, '今、同じ物がございませんので apresenta a falta do mesmo produto como razão.', { audio: questionAudio('K20_02', 'K20-02 — Diálogo I: repetição guiada') }),
  q('dialogue-5', 'O que Mary pede ao saber que teria de esperar?', ['um produto mais caro', 'o conserto em casa', 'a devolução do produto', 'um desconto futuro'], 3, 'Como voltará logo ao país, Mary diz できれば返品したいんですが.', { audio: questionAudio('K20_01', 'K20-01 — Diálogo I: devolução do fone') }),
  q('dialogue-6', 'Qual lugar Mary procura no segundo diálogo?', ['uma loja chamada Nishikiya', 'a estação Nishiki', 'uma casa de chá', 'uma loja de fones'], 1, 'Ela pergunta onde fica にしき屋という店.', { audio: questionAudio('K20_03', 'K20-03 — Diálogo II: caminho para Nishikiya') }),
  q('dialogue-7', 'Como chegar à loja, segundo o senhor?', ['virar à direita no semáforo', 'seguir reto por três quarteirões', 'virar à esquerda na próxima esquina', 'pegar um ônibus'], 3, '次の角を左に曲がったら見えますよ.', { audio: questionAudio('K20_04', 'K20-04 — Diálogo II: repetição guiada') }),
  q('dialogue-8', 'Por que Mary oferece carregar a bagagem do senhor?', ['parece leve', 'parece pesada', 'está chovendo dentro da loja', 'ela quer comprar a mala'], 2, 'Mary observa 荷物が重そうですね e oferece お持ちします.', { audio: questionAudio('K20_03', 'K20-03 — Diálogo II: caminho para Nishikiya') }),
]

const grammarQuestions = [
  q('grammar-1', 'Forma extra-modesta de いる:', ['いらっしゃいます', 'おります', 'おいでになります', 'いただきます'], 2, 'おります rebaixa a presença de quem fala ou de seu grupo.', { helpPt: 'いらっしゃいます eleva outra pessoa; おります é a escolha modesta para eu/nós.' }),
  q('grammar-2', '{行|い}く／{来|く}る → expressão extra-modesta', ['参ります', '申します', 'いたします', 'ございます'], 1, '参ります substitui 行きます e 来ます em registro extra-modesto.'),
  q('grammar-3', '“Meu nome é Tanaka.” em apresentação muito formal:', ['田中でいらっしゃいます。', '田中と申します。', '田中がおります。', '田中をいただきます。'], 2, '申します é a forma modesta de 言います usada para apresentar o próprio nome.'),
  q('grammar-4', 'Qual frase usa a perspectiva corretamente?', ['先生はあした学校に参りますか。', '私は来年も日本におります。', '社長は田中と申します。', '先生がお茶をいただきます。'], 2, 'おります descreve modestamente a presença do próprio falante. As outras opções rebaixam indevidamente a pessoa respeitada.'),
  q('grammar-5', 'Padrão humilde regular de {返|かえ}す:', ['お返しになる', 'お返しする', 'ご返すする', '返していらっしゃる'], 2, 'お + radical ます + する produz お返しする para a ação humilde do falante.'),
  q('grammar-6', '“Vou acompanhar você até a estação.”', ['駅までお送りします。', '駅までお送りになります。', '駅までご送ります。', '駅まで参らせます。'], 1, 'お送りします apresenta humildemente a ação feita em benefício do interlocutor.'),
  q('grammar-7', 'Qual é a forma humilde especial de もらう?', ['さしあげる', 'いただく', 'うかがう', 'ござる'], 2, 'いただく é a substituição humilde de もらう e também de 食べる／飲む em registro formal.'),
  q('grammar-8', '“Perguntei ao professor sobre a prova.” em forma humilde:', ['先生にテストについてうかがいました。', '先生がテストをうかがいました。', '先生にテストをお聞きになりました。', '先生を参りました。'], 1, 'うかがう pode expressar humildemente perguntar a uma pessoa respeitada.'),
  q('grammar-9', '“Ontem à noite estudei sem dormir.”', ['きのうの夜は、寝なくて、勉強しました。', 'きのうの夜は、寝ないで、勉強しました。', 'きのうの夜は、寝なかったで、勉強しました。', 'きのうの夜は、寝ませんでから、勉強しました。'], 2, 'Ação omitida: forma negativa curta no presente 寝ない + で.'),
  q('grammar-10', '{辞書|じしょ}を（　）、{新聞|しんぶん}を{読|よ}みます。', ['使わないで', '使わなくてから', '使わなかったで', '使いにくくて'], 1, '使わないで significa “sem usar o dicionário”.'),
  q('grammar-11', 'Mesmo quando a ação principal está no passado, antes de で usamos:', ['a forma negativa curta no presente', 'sempre o passado negativo', 'a forma て', 'o radical ます'], 1, 'O padrão é 〜ないで; o tempo é expresso pelo verbo principal.'),
  q('grammar-12', '“Não sei o que o professor comeu ontem.”', ['先生はきのう何を食べましたかわかりません。', '先生はきのう何を食べたかわかりません。', '先生はきのう何か食べたどうかわかりません。', '先生はきのう食べた何を知りません。'], 2, 'A pergunta com 何 entra na frase em forma curta: 何を食べたか.'),
  q('grammar-13', 'Pergunta embutida correta para “onde Mary mora”:', ['メアリーさんはどこに住んでいますか知っています。', 'メアリーさんがどこに住んでいるか知っています。', 'メアリーさんがどこか住んでいると知っています。', 'どこにメアリーさんを住むか知っています。'], 2, 'O sujeito interno usa が e o verbo vai à forma curta antes de か.'),
  q('grammar-14', '“Vamos decidir se viajaremos ou não.”', ['旅行に行くか決めましょう。', '旅行に行くかどうか決めましょう。', '旅行に行きますどうか決めましょう。', '旅行に行ったかどう決めましょう。'], 2, 'Pergunta sim/não embutida usa forma curta + かどうか.'),
  q('grammar-15', 'だれが{一番上手|いちばんじょうず}（　）わかりません。', ['だか', 'なのか', 'か', 'ですか'], 3, 'Com adjetivo な no presente, o だ costuma ser omitido antes de か.'),
  q('grammar-16', 'Qual partícula geralmente marca o sujeito dentro de uma pergunta embutida?', ['は', 'が', 'を', 'へ'], 2, 'Mesmo quando a pergunta direta usaria は como tópico, a oração encaixada frequentemente marca o sujeito com が.'),
  q('grammar-17', 'ポチ（　）{犬|いぬ}を{飼|か}っていました。', ['という', 'どういう', 'といってか', 'のようにいう'], 1, 'ポチという犬 é “um cachorro chamado Pochi”.'),
  q('grammar-18', '“Você conhece uma música chamada Hana?”', ['「花」という歌を知っていますか。', '「花」だ歌を知っていますか。', '歌という「花」を知っていますか。', '「花」と歌が知っていますか。'], 1, 'A ordem é nome + という + categoria: 「花」という歌.'),
  q('grammar-19', 'にしき{屋|や}という{店|みせ} significa:', ['uma loja ao lado de Nishikiya', 'uma loja chamada Nishikiya', 'o dono da loja Nishikiya', 'uma loja parecida com Nishikiya'], 2, 'という apresenta o nome にしき屋 e depois sua categoria 店.'),
  q('grammar-20', '{使|つか}う → “fácil de usar”', ['使うやすい', '使いやすい', '使ってやすい', '使わせやすい'], 2, 'Retire ます de 使います e acrescente やすい: 使いやすい.'),
  q('grammar-21', '{読|よ}む → “difícil de ler”', ['読みにくい', '読むにくい', '読んでにくい', '読まないにくい'], 1, 'O radical de 読みます é 読み; acrescente にくい.'),
  q('grammar-22', 'Passado de 読みやすい:', ['読みやすいでした', '読みやすかった', '読みやすくでした', '読みやすかったですかどうか'], 2, 'O composto se conjuga como adjetivo い: やすい → やすかった.'),
  q('grammar-23', 'この{町|まち}はとても{住|す}みやすいです。', ['É fácil encontrar esta cidade.', 'Esta cidade é muito boa/fácil de morar.', 'Esta cidade é barata.', 'É difícil caminhar nesta cidade.'], 2, '住みやすい descreve um lugar onde morar é fácil ou confortável.'),
  q('grammar-24', 'Qual frase destaca uma dificuldade prática ou psicológica?', ['漢字は覚えにくいです。', '漢字は覚えたくないです。', '漢字を覚えないでいます。', '漢字が覚えたそうです。'], 1, '覚えにくい expressa que memorizar kanji é difícil para o falante.'),
]

// These distractors are deliberately invalid; the original alternatives are
// acceptable in broader Japanese usage and made the target answers ambiguous.
grammarQuestions[13].choices[0].text = '\u65c5\u884c\u306b\u884c\u304f\u3069\u3046\u304b\u6c7a\u3081\u307e\u3057\u3087\u3046\u3002'
grammarQuestions[14].choices[1].text = '\u3060\u306e\u304b'

const vocabularyReadingQuestions = [
  q('vocabulary-1', '{係|かかり}の{者|もの}', ['cliente habitual', 'pessoa responsável do nosso grupo', 'dono de uma casa', 'turista estrangeiro'], 2, '係 é a função/encargo; 係の者 é a pessoa da própria equipe responsável.'),
  q('vocabulary-2', '{交換|こうかん}する／{返品|へんぴん}する', ['consertar/descartar', 'trocar/devolver mercadoria', 'comprar/vender', 'levar/receber'], 2, '交換する é trocar; 返品する é devolver um produto à loja.'),
  q('vocabulary-3', '{角|かど}を{左|ひだり}に{曲|ま}がる', ['atravessar o semáforo', 'virar à esquerda na esquina', 'seguir reto até o rio', 'voltar para a loja'], 2, '角 é esquina; 左に曲がる é virar à esquerda.'),
  q('vocabulary-4', 'かしこまりました', ['não entendi', 'certamente/entendido, em registro formal', 'espere um pouco', 'não há problema'], 2, 'かしこまりました é uma resposta formal de atendimento equivalente a “certamente” ou “entendido”.'),
  q('reading-1', 'Quando o rakugo começou?', ['há cerca de cinquenta anos', 'no período Edo, há mais de trezentos anos', 'depois da Segunda Guerra', 'no período Heian'], 2, 'A abertura informa 今から三百年以上前の江戸時代に始まりました.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-2', 'Como um rakugoka apresenta a história?', ['com vários atores', 'sozinho, usando vozes e gestos variados', 'somente cantando', 'sem falar'], 2, '落語家は一人でいろいろな声や身ぶりを使います.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-3', 'Qual era o trabalho do homem de 「猫の皿」?', ['criava gatos', 'comprava antiguidades no interior e as revendia em Edo', 'era dono de casa de chá', 'contava rakugo'], 2, 'Ele comprava 古い物 no interior e as vendia por preços altos em Edo.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-4', 'Quanto valia o prato usado pelo gato?', ['três ryō', 'trinta ryō', 'trezentos ryō', 'três mil ryō'], 3, '一枚三百両もする皿 era um prato que valia nada menos que trezentos ryō.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-5', 'O que o homem pensou sobre o dono?', ['que ele conhecia perfeitamente o valor do prato', 'que não sabia quanto o prato valia', 'que não venderia o gato', 'que era um rakugoka famoso'], 2, 'O homem pensa 茶店の主人はあの皿がいくらか知らないんだ.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-6', 'Por que o homem oferece três ryō pelo gato?', ['quer apenas salvar o animal', 'espera levar junto o prato valioso', 'o gato é uma antiguidade', 'quer presentear o dono'], 2, 'Seu plano é obter o prato fingindo interesse pelo gato.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-7', 'O que acontece quando o dono se recusa a entregar o prato?', ['o homem recebe o dinheiro de volta', 'o gato arranha o homem', 'o prato quebra', 'o dono foge'], 2, 'Depois da recusa, 猫が男をひっかきました.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
  q('reading-8', 'Qual é a revelação final?', ['o prato é falso', 'o dono usa o prato valioso para conseguir vender o gato repetidas vezes', 'o gato pertence ao homem', 'o dono desconhece o valor do prato'], 2, 'O dono explica que, deixando o prato ali, às vezes vende o gato por três ryō.', { audio: questionAudio('Y20', 'Y20 — Leitura: 猫の皿') }),
]

const workbookA: ScriptItem[] = [{
  label: 'W20-A — {京都|きょうと}の{観光|かんこう}ツアー',
  setupJa: '{京都|きょうと}の{観光|かんこう}ツアーで、ガイドが{一日|いちにち}の{予定|よてい}を{説明|せつめい}します。',
  setupPt: 'Num passeio turístico em Kyoto, a guia explica o itinerário e responde aos turistas.',
  lines: [
    { speaker: 'ガイド', ja: '{皆|みな}さん、おはようございます。', pt: 'Bom dia a todos.' },
    { speaker: 'ガイド', ja: '{私|わたくし}、ガイドの{田村|たむら}と{申|もう}します。{今日|きょう}は{京都|きょうと}のお{寺|てら}をご{案内|あんない}いたします。', pt: 'Meu nome é Tamura e sou a guia. Hoje vou conduzi-los pelos templos de Kyoto.' },
    { speaker: 'ガイド', ja: 'まず、{清水寺|きよみずでら}に{参|まい}ります。', pt: 'Primeiro, iremos ao templo Kiyomizudera.' },
    { speaker: '{観光客|かんこうきゃく}', ja: 'ガイドさん、すみません。あのう、トイレに{行|い}きたいんですが。', pt: 'Com licença, guia. Eu gostaria de ir ao banheiro.' },
    { speaker: 'ガイド', ja: 'お{手洗|てあら}いですか。このバスにはございませんので、{申|もう}し{訳|わけ}ありませんが、{少|すこ}し{待|ま}っていただけますか。{五分|ごふん}ぐらいで{清水寺|きよみずでら}に{着|つ}きますので。', pt: 'O banheiro? Como não há um neste ônibus, peço desculpas, mas poderia esperar um pouco? Chegaremos a Kiyomizudera em cerca de cinco minutos.' },
    { speaker: '{観光客|かんこうきゃく}', ja: 'はい。', pt: 'Sim.' },
    { speaker: 'ガイド', ja: 'その{後|あと}、{南禅寺|なんぜんじ}に{参|まい}ります。{南禅寺|なんぜんじ}をご{覧|らん}になった{後|あと}、みやびというレストランで{昼|ひる}ご{飯|はん}にいたします。', pt: 'Depois, iremos a Nanzenji. Após visitarem o templo, almoçaremos num restaurante chamado Miyabi.' },
    { speaker: '{観光客|かんこうきゃく}', ja: 'ガイドさん、{昼|ひる}ご{飯|はん}は{何|なに}を{食|た}べるんですか。', pt: 'Guia, o que comeremos no almoço?' },
    { speaker: 'ガイド', ja: '{魚料理|さかなりょうり}でございます。その{後|あと}、{金閣寺|きんかくじ}に{参|まい}ります。{金閣寺|きんかくじ}で{写真|しゃしん}をお{撮|と}りして、{後|あと}で{皆|みな}さんにさしあげます。', pt: 'Será um prato de peixe. Depois iremos a Kinkakuji. Tirarei fotos de vocês lá e as darei a todos mais tarde.' },
    { speaker: '{観光客|かんこうきゃく}', ja: 'あのう、すみません。{何時|なんじ}ごろ{京都駅|きょうとえき}に{戻|もど}るんでしょうか。', pt: 'Com licença. Por volta de que horas voltaremos à estação de Kyoto?' },
    { speaker: 'ガイド', ja: 'はい、{金閣寺|きんかくじ}の{後|あと}、{龍安寺|りょうあんじ}に{行|い}って、{四時|よじ}ごろ{戻|もど}る{予定|よてい}でございます。', pt: 'Depois de Kinkakuji, iremos a Ryōanji e planejamos voltar por volta das quatro horas.' },
  ],
}]

const workbookB: ScriptItem[] = [{
  label: 'W20-B — {教室|きょうしつ}で',
  setupJa: '{授業|じゅぎょう}の{前|まえ}に、{遅刻|ちこく}や{忘|わす}れ{物|もの}について{話|はな}します。',
  setupPt: 'Antes da aula, professor e alunos comentam atrasos e coisas esquecidas.',
  lines: [
    { speaker: '{先生|せんせい}', ja: '{皆|みな}さん、おはようございます。', pt: 'Bom dia a todos.' },
    { speaker: 'John', ja: '{先生|せんせい}、{遅|おそ}くなってすみません。', pt: 'Professor, desculpe o atraso.' },
    { speaker: '{先生|せんせい}', ja: 'ジョンさん、どうしたんですか。', pt: 'John, o que aconteceu?' },
    { speaker: 'John', ja: '{携帯|けいたい}を{持|も}たないで{家|いえ}を{出|で}てしまったんです。だから、また{家|いえ}に{帰|かえ}らなきゃいけなかったんです。', pt: 'Saí de casa sem levar o celular. Por isso tive de voltar para casa.' },
    { speaker: '{先生|せんせい}', ja: 'それは{大変|たいへん}でしたね。あれ？ロバートさんがいませんね。どうしたんでしょう。', pt: 'Isso foi complicado. Ué, Robert não está aqui. O que será que aconteceu?' },
    { speaker: '{学生|がくせい}', ja: 'ロバートさん、{今|いま}レポートを{書|か}いていると{思|おも}います。きのうレポートを{書|か}かないで{寝|ね}てしまったと{言|い}っていましたから。{今日|きょう}が{締|し}め{切|き}りなんです。', pt: 'Acho que Robert está escrevendo o relatório agora. Ele disse que ontem dormiu sem escrevê-lo. O prazo é hoje.' },
    { speaker: '{先生|せんせい}', ja: 'そうですか。もっと{早|はや}くやればよかったですね。', pt: 'Entendo. Ele deveria ter feito isso mais cedo.' },
    { speaker: '{先生|せんせい}', ja: 'あれ？ソラさん、{元気|げんき}がありませんね。どうしたんですか。', pt: 'Ué, Sora, você parece desanimada. O que aconteceu?' },
    { speaker: 'Sora', ja: '{実|じつ}は、{自転車|じてんしゃ}がないんです。{鍵|かぎ}をかけなかったんです。', pt: 'Na verdade, minha bicicleta sumiu. Eu não a tranquei.' },
    { speaker: '{先生|せんせい}', ja: 'そうですか。それは{困|こま}りましたね。', pt: 'Entendo. Que problema.' },
    { speaker: '{先生|せんせい}', ja: 'じゃあ、{授業|じゅぎょう}を{始|はじ}めましょうか。あれ？{皆|みな}さん、ちょっと{待|ま}ってください。{教科書|きょうかしょ}を{持|も}たないで{来|き}てしまいました。', pt: 'Então, vamos começar a aula. Ué? Pessoal, esperem um pouco. Acabei vindo sem trazer o livro didático.' },
  ],
}]

const workbookC: ScriptItem[] = [{
  label: 'W20-C — {野村|のむら}さんについて',
  setupJa: '{二人|ふたり}の{学生|がくせい}が{野村|のむら}さんについて{話|はな}しています。',
  setupPt: 'Duas estudantes conversam sobre Nomura e combinam um encontro em grupo.',
  lines: [
    { speaker: 'A', ja: 'ねえねえ、{野村|のむら}さんという{人|ひと}と{同|おな}じサークルだよね。', pt: 'Ei, você participa do mesmo clube que uma pessoa chamada Nomura, certo?' },
    { speaker: 'B', ja: 'うん。テニスサークルで{一緒|いっしょ}だよ。', pt: 'Sim. Estamos juntos no clube de tênis.' },
    { speaker: 'A', ja: 'どんな{人|ひと}？', pt: 'Como ele é?' },
    { speaker: 'B', ja: '{話|はな}しやすいし、{性格|せいかく}もいいよ。', pt: 'É fácil conversar com ele e também tem uma boa personalidade.' },
    { speaker: 'A', ja: 'そう。どこに{住|す}んでいるの？', pt: 'Entendi. Onde ele mora?' },
    { speaker: 'B', ja: 'どこに{住|す}んでいるか{知|し}らないけど、{大学|だいがく}の{近|ちか}くだと{思|おも}うよ。{自転車|じてんしゃ}で{大学|だいがく}に{来|き}ているみたいだから。', pt: 'Não sei onde ele mora, mas acho que é perto da universidade, porque parece vir de bicicleta.' },
    { speaker: 'A', ja: '{彼女|かのじょ}はいる？', pt: 'Ele tem namorada?' },
    { speaker: 'B', ja: 'さあ、{彼女|かのじょ}がいるかどうか{知|し}らないけど、{性格|せいかく}もよくてかっこいいから、モテるよ。', pt: 'Não sei se ele tem namorada, mas, como tem boa personalidade e é bonito, faz sucesso.' },
    { speaker: 'A', ja: 'やっぱり。', pt: 'Foi o que eu imaginei.' },
    { speaker: 'B', ja: 'どうして{野村|のむら}さんについて{聞|き}くの？', pt: 'Por que está perguntando sobre o Nomura?' },
    { speaker: 'A', ja: 'いや、{私|わたし}の{友|とも}だちが{野村|のむら}さんに{興味|きょうみ}があるんだって。', pt: 'É que uma amiga minha disse que está interessada nele.' },
    { speaker: 'B', ja: 'そうなんだ。じゃあ、{今度|こんど}みんなで{飲|の}みに{行|い}かない？', pt: 'Entendi. Então, que tal sairmos todos para beber da próxima vez?' },
    { speaker: 'A', ja: 'うん。いいよ。', pt: 'Sim, pode ser.' },
  ],
}]

const listeningQuestions = [
  q('listening-a1', 'W20-A: Como a guia se chama?', ['Miyabi', 'Tamura', 'Nishiki', 'Tanaka'], 2, 'Ela se apresenta com ガイドの田村と申します.', { audio: questionAudio('W20_A', 'W20-A — Passeio turístico em Kyoto') }),
  q('listening-a2', 'W20-A: Qual é o primeiro templo do roteiro?', ['Kinkakuji', 'Nanzenji', 'Kiyomizudera', 'Ryōanji'], 3, 'まず、清水寺に参ります.', { audio: questionAudio('W20_A', 'W20-A — Passeio turístico em Kyoto') }),
  q('listening-a3', 'W20-A: O que a guia pede ao turista que quer usar o banheiro?', ['que desça imediatamente', 'que espere cerca de cinco minutos até Kiyomizudera', 'que use o banheiro do ônibus', 'que espere até o almoço'], 2, 'Não há banheiro no ônibus, e o grupo chegará a Kiyomizudera em cerca de cinco minutos.', { audio: questionAudio('W20_A', 'W20-A — Passeio turístico em Kyoto') }),
  q('listening-a4', 'W20-A: O que será servido no almoço?', ['tofu', 'carne', 'prato de peixe', 'sushi'], 3, 'A guia responde 魚料理でございます.', { audio: questionAudio('W20_A', 'W20-A — Passeio turístico em Kyoto') }),
  q('listening-a5', 'W20-A: Depois de Kinkakuji, para onde o grupo irá antes de voltar por volta das quatro?', ['Ryōanji', 'Kiyomizudera', 'estação de Osaka', 'restaurante Miyabi'], 1, '金閣寺の後、龍安寺に行って、四時ごろ戻る予定です.', { audio: questionAudio('W20_A', 'W20-A — Passeio turístico em Kyoto') }),
  q('listening-b1', 'W20-B: Por que John chegou atrasado?', ['perdeu a bicicleta', 'voltou para buscar o celular que deixou em casa', 'estava escrevendo um relatório', 'esqueceu o livro'], 2, 'Ele saiu sem o celular e precisou voltar para casa.', { audio: questionAudio('W20_B', 'W20-B — Atrasos e esquecimentos na sala') }),
  q('listening-b2', 'W20-B: O que Robert está fazendo?', ['procurando a bicicleta', 'escrevendo um relatório', 'telefonando para John', 'indo à loja'], 2, 'O aluno supõe que Robert está escrevendo o relatório cujo prazo termina hoje.', { audio: questionAudio('W20_B', 'W20-B — Atrasos e esquecimentos na sala') }),
  q('listening-b3', 'W20-B: O que Robert fez na noite anterior?', ['escreveu tudo cedo', 'dormiu sem escrever o relatório', 'perdeu o celular', 'faltou à aula'], 2, 'きのうレポートを書かないで寝てしまった.', { audio: questionAudio('W20_B', 'W20-B — Atrasos e esquecimentos na sala') }),
  q('listening-b4', 'W20-B: Por que a bicicleta de Sora sumiu?', ['ela não a trancou', 'Robert a pegou', 'o professor a moveu', 'ela esqueceu onde mora'], 1, 'Sora explica 鍵をかけなかったんです.', { audio: questionAudio('W20_B', 'W20-B — Atrasos e esquecimentos na sala') }),
  q('listening-b5', 'W20-B: O que o professor percebe ao iniciar a aula?', ['esqueceu o livro didático', 'perdeu o celular', 'não corrigiu o relatório', 'está na sala errada'], 1, 'O professor diz 教科書を持たないで来てしまいました.', { audio: questionAudio('W20_B', 'W20-B — Atrasos e esquecimentos na sala') }),
  q('listening-c1', 'W20-C: Em qual clube Nomura participa?', ['anime', 'tênis', 'rakugo', 'música'], 2, 'テニスサークルで一緒だよ.', { audio: questionAudio('W20_C', 'W20-C — Conversa sobre Nomura') }),
  q('listening-c2', 'W20-C: Como Nomura é descrito?', ['difícil de abordar e sério', 'fácil de conversar e de boa personalidade', 'quieto e antipático', 'muito formal'], 2, '話しやすいし、性格もいいよ.', { audio: questionAudio('W20_C', 'W20-C — Conversa sobre Nomura') }),
  q('listening-c3', 'W20-C: Por que B acha que Nomura mora perto da universidade?', ['ele disse o endereço', 'ele parece vir de bicicleta', 'ele mora no dormitório', 'ele sempre caminha'], 2, 'A inferência vem de 自転車で大学に来ているみたいだから.', { audio: questionAudio('W20_C', 'W20-C — Conversa sobre Nomura') }),
  q('listening-c4', 'W20-C: B sabe se Nomura tem namorada?', ['sim, sabe que tem', 'sim, sabe que não tem', 'não sabe', 'o assunto não aparece'], 3, '彼女がいるかどうか知らないけど mostra que B não sabe.', { audio: questionAudio('W20_C', 'W20-C — Conversa sobre Nomura') }),
  q('listening-c5', 'W20-C: Quem está interessada em Nomura?', ['a professora', 'a amiga de A', 'Sora', 'a guia Tamura'], 2, 'A explica 私の友だちが野村さんに興味があるんだって.', { audio: questionAudio('W20_C', 'W20-C — Conversa sobre Nomura') }),
]

const audioPracticeCodes = Array.from({ length: 13 }, (_, index) => `K20_${String(index + 5).padStart(2, '0')}`)
const audioPracticeQuestions = audioPracticeCodes.map((code) => {
  const source = genki2AudioSourceByCode[code]
  return q(
    `audio-${code.toLowerCase()}`,
    `${source.sourceActivityPt}: depois de ouvir sem ler, você conseguiu repetir ou produzir a estrutura-alvo com sentido?`,
    ['Ainda não; preciso ouvir e repetir de novo.', 'Sim; consegui reproduzir a tarefa com segurança.'],
    2,
    'Esta é uma autoavaliação de produção. Marque a segunda opção somente se conseguiu realizar a tarefa sem depender da resposta escrita.',
    {
      assessment: 'self-check',
      audio: questionAudio(code, `${code} — ${source.sourceActivityPt}`),
      helpPt: 'Faça três passagens: compreensão geral, repetição em blocos e produção sem o áudio. Se travar, marque para repetir; isso agenda uma revisão mais próxima.',
    },
  )
})

const scriptByCode: Record<string, ScriptItem[]> = {
  K20_01: dialogueOne,
  K20_02: dialogueOne,
  K20_03: dialogueTwo,
  K20_04: dialogueTwo,
  Y20: catPlateReading,
  W20_A: workbookA,
  W20_B: workbookB,
  W20_C: workbookC,
}

const audioCodes = [
  ...Array.from({ length: 17 }, (_, index) => `K20_${String(index + 1).padStart(2, '0')}`),
  'Y20',
  'W20_A',
  'W20_B',
  'W20_C',
]

const kindFor = (code: string): AudioTrackKind => {
  if (code === 'Y20') return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (['K20_01', 'K20_03'].includes(code)) return 'dialogue'
  if (['K20_02', 'K20_04'].includes(code)) return 'dialogue-support'
  if (['K20_05', 'K20_06'].includes(code)) return 'vocabulary'
  return 'drill'
}

const audioTracks: AudioTrack[] = audioCodes.map((code) => {
  const source = genki2AudioSourceByCode[code]
  const kind = kindFor(code)
  const script = scriptByCode[code] ?? []
  const isDialogue = kind === 'dialogue' || kind === 'dialogue-support'
  const isReading = kind === 'reading'
  const isWorkbook = kind === 'workbook'
  const transcriptSource = 'source-aligned' as const

  return {
    id: trackId(code),
    code,
    kind,
    language: 'ja',
    title: `${code} — ${source.sourceActivityPt}`,
    descriptionPt: isDialogue
      ? 'Diálogo integral da lição, com transcrição revisada, furigana e tradução linha a linha.'
      : isReading
        ? 'Leitura integral de 「猫の皿」, alinhada ao texto impresso e traduzida para pt-BR.'
        : isWorkbook
          ? 'Compreensão auditiva do workbook com transcrição revisada e questões objetivas ligadas à faixa.'
          : `Faixa oficial de ${source.sourceActivityPt.toLowerCase()} para treino ativo de percepção e produção.`,
    purposePt: isDialogue
      ? 'Reconhecer atendimento formal, pedidos de informação e ofertas humildes em conversas completas.'
      : isReading
        ? 'Acompanhar a estrutura de uma narrativa de rakugo, recuperar detalhes e compreender a ironia final.'
        : isWorkbook
          ? 'Extrair detalhes concretos de fala natural e transformá-los em revisão espaçada.'
          : `Consolidar oralmente a atividade ${source.sourceActivityPt}.`,
    instructionsPt: isWorkbook
      ? ['Leia a pergunta antes de tocar.', 'Ouça uma vez sem pausar e responda.', 'Confira a transcrição somente depois e repita as pistas decisivas.']
      : isDialogue || isReading
        ? ['Ouça uma vez sem ler.', 'Acompanhe a transcrição com furigana e tradução.', 'Ouça novamente e repita os trechos que contêm a estrutura-alvo.']
        : ['Ouça uma vez sem ler.', 'Repita em blocos, imitando ritmo e entonação.', 'Produza a resposta sem o áudio e registre a autoavaliação.'],
    sourceRefPt: `Genki II, 3ª edição — ${source.material === 'textbook' ? 'livro-texto' : 'workbook'}, p. ${source.sourcePage}.`,
    sourceActivityPt: source.sourceActivityPt,
    sourcePage: source.sourcePage,
    practiceTaskPt: isWorkbook
      ? `Responda às questões de ${source.sourceActivityPt}, justifique cada resposta com uma fala e só então abra a transcrição.`
      : isDialogue
        ? 'Reconstrua a sequência da conversa, escolha duas falas formais e reproduza-as sem ler.'
        : isReading
          ? 'Resuma o plano do homem e a estratégia do dono; depois reconte a revelação final em japonês simples.'
          : `Use ${source.sourceActivityPt} em três etapas: escuta global, repetição e produção independente.`,
    src: `${BASE}/${code}.mp3`,
    script,
    transcript: script.length
      ? { kind: 'full', source: transcriptSource, reviewed: true, items: script }
      : undefined,
  }
})

export const genki2Lesson20: Section = {
  id: 'lesson-20',
  level: 'genki-2',
  titleJa: '{第|だい}20{課|か}　メアリーさんの{買|か}い{物|もの}',
  titlePt: 'Lição 20 — As compras de Mary',
  summaryPt: 'Atendimento e pedidos formais, linguagem extra-modesta e humilde, 〜ないで, perguntas embutidas, という, 〜やすい／〜にくい, compreensão auditiva e a leitura de rakugo 「猫の皿」.',
  studyNotes,
  groups: [
    group('dialogue', '{会話|かいわ}', 'compreensão dos diálogos', dialogueQuestions),
    group('grammar', '{文法|ぶんぽう}', 'gramática e uso contextual', grammarQuestions),
    group('vocabulary-reading', '{単語|たんご}・{読|よ}み', 'vocabulário e leitura', vocabularyReadingQuestions),
    group('listening', '{聞|き}く{練習|れんしゅう}', 'compreensão auditiva do workbook', listeningQuestions),
    group('audio-practice', '{音声|おんせい}{練習|れんしゅう}', 'produção guiada com os demais áudios', audioPracticeQuestions),
  ],
  audios: audioTracks,
}
