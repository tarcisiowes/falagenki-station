import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-14'
const lessonPrefix = 'genki-2-l14'
const trackId = (code: string) => `${lessonPrefix}-audio-${code.toLowerCase()}`
const questionAudio = (code: string, title: string) => ({ trackId: trackId(code), src: `${BASE}/${code}.mp3`, title })
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
  helpPt: extra.helpPt ?? `Estratégia prática: ${explanationPt}`,
  ...extra,
})
const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({
  id: `${lessonPrefix}-${id}`,
  title,
  subtitlePt,
  instructionJa: '',
  instructionPt: `Resolva as questões de ${subtitlePt.toLowerCase()}, confira a evidência e envie os itens concluídos à revisão.`,
  questions,
})

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situação da lição',
    bodyPt: 'Mary procura um presente de Dia dos Namorados para Takeshi, entrega um suéter que tricotou e, no dia seguinte, Takeshi conversa com John sobre chocolates e White Day. A lição trabalha desejos, incerteza, dar e receber, conselhos e quantidades enfáticas ou limitadas.',
    helpPt: 'Acompanhe sempre a direção da informação: quem deseja, quem dá, quem recebe e de qual perspectiva a cena é narrada.',
  },
  {
    title: '1. ほしい — querer um objeto',
    bodyPt: 'Use Xがほしいです para dizer que você quer uma coisa: 新しい車がほしいです. A negativa é ほしくないです e o passado ほしかったです. Em pergunta, costuma-se falar do desejo do interlocutor; para uma terceira pessoa, usa-se ほしがっています.',
    helpPt: 'ほしい funciona como adjetivo い, não como verbo. Para querer fazer uma ação, continue usando a base de ます + たい: 車がほしい／車を買いたい.',
  },
  {
    title: '2. 〜かもしれません — possibilidade incerta',
    bodyPt: 'Forma curta + かもしれません expressa “talvez” com cerca de 50% de certeza: 雨が降るかもしれません. Com substantivos e adjetivos な afirmativos no presente, retire だ: 学生かもしれません, 静かかもしれません. Pode seguir formas negativas e passadas.',
    helpPt: 'Compare a força: でしょう indica uma previsão mais confiante; かもしれません deixa duas possibilidades realmente abertas.',
  },
  {
    title: '3. あげる・くれる・もらう',
    bodyPt: 'あげる descreve algo que parte de mim ou permanece entre outras pessoas: 私は友だちに花をあげました. くれる descreve algo que vem para mim ou alguém do meu grupo: 姉が私にマフラーをくれました. Em ambas, o doador é sujeito e o destinatário recebe に. Com もらう, o recebedor é sujeito e a origem usa に ou から: 私は姉にマフラーをもらいました.',
    helpPt: 'Desenhe uma seta. Se aponta para “mim”, use くれる; se aponta para fora, あげる. Se a câmera está no recebedor, reescreva com もらう.',
  },
  {
    title: '4. 〜たらどうですか — conselho',
    bodyPt: 'Passado curto + らどうですか recomenda uma ação: 薬を飲んだらどうですか. Na fala casual, pode virar 〜たらどう ou apenas 〜たら. Pode soar crítico quando o conselho não foi pedido e não deve substituir um convite com ませんか.',
    helpPt: 'É literalmente “se fizesse, como seria?”. Use para solucionar um problema apresentado, não para convidar alguém para sua casa.',
  },
  {
    title: '5. Número + も／しか + negativa',
    bodyPt: 'Número + も enfatiza quantidade maior que a esperada: チョコレートを十個ももらいました. Número + しか + predicado negativo destaca quantidade menor ou exclusiva: 一個しかもらえませんでした. しか exige sempre a forma negativa.',
    helpPt: 'も = “até/tantos”; しか〜ない = “somente e nada além”. A opinião do falante, não o número isolado, decide qual usar.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Presentes e relações: プレゼント, セーター, チョコレート, お返し, 彼, 彼女, 付き合う. Desejos e conselho: ほしい, 悩み, 相談, アドバイス. Vida e viagem: 会社員, 先輩, 家族, 出張, 飛行機, 医者.',
    helpPt: 'Organize em três cenas: escolher presente; falar de relacionamento; pedir conselho sobre um problema.',
  },
  {
    title: 'Leitura e escrita — coluna de conselhos',
    bodyPt: 'Kanji-alvo: 彼 代 留 族 親 切 英 店 去 急 乗 当 音 楽 医 者. Três leitores apresentam conflitos entre casamento e carreira, dificuldade para usar japonês e medo de avião. A coluna oferece um conselho para o terceiro caso.',
    helpPt: 'Para cada texto, separe “situação”, “restrição” e “pedido”. Isso transforma parágrafos longos em três blocos previsíveis.',
  },
]

const dialogueQuestions = [
  q('d1', 1, 'Que presente Yui sugere para Takeshi?', ['Relógio', 'Suéter', 'Chocolate', 'Livro'], 2, 'Como Takeshi usa sempre o mesmo suéter, Yui sugere outro.', { audio: questionAudio('K14_01', 'K14-01 — Escolhendo um presente') }),
  q('d2', 2, 'Como Mary reage à sugestão?', ['Recusa', 'Diz que talvez seja uma boa ideia', 'Já comprou outro presente', 'Não entende'], 2, 'それはいいかもしれませんね.', { audio: questionAudio('K14_01', 'K14-01 — Escolhendo um presente') }),
  q('d3', 3, 'Quem tricotou o suéter?', ['Yui', 'Mary', 'A mãe de Takeshi', 'John'], 2, 'Takeshi pergunta メアリーが編んだの？ e ela confirma.', { audio: questionAudio('K14_03', 'K14-03 — Mary entrega o suéter') }),
  q('d4', 4, 'Por que Mary pede que Takeshi experimente o suéter?', ['Talvez seja pequeno', 'Talvez esteja sujo', 'É muito caro', 'Ela quer devolvê-lo'], 1, '小さいかもしれないから着てみて.', { audio: questionAudio('K14_03', 'K14-03 — Mary entrega o suéter') }),
  q('d5', 5, 'Como o suéter fica em Takeshi?', ['Grande', 'Pequeno', 'Do tamanho certo', 'Não é informado'], 3, 'ちょうどいいよ.', { audio: questionAudio('K14_03', 'K14-03 — Mary entrega o suéter') }),
  q('d6', 6, 'Quantos chocolates Robert recebeu?', ['Um', 'Cinco', 'Dez', 'Vinte'], 3, 'ロバートさんはチョコレートを十個ももらった.', { audio: questionAudio('K14_05', 'K14-05 — Conversa sobre White Day') }),
  q('d7', 7, 'De quem John recebeu seu único chocolate?', ['Mary', 'Sua senhoria', 'Yui', 'Uma colega'], 2, '大家さんから.', { audio: questionAudio('K14_05', 'K14-05 — Conversa sobre White Day') }),
  q('d8', 8, 'O que os homens fazem no White Day?', ['Dão chocolate em 14 de fevereiro', 'Retribuem em 14 de março', 'Vão ao trabalho', 'Compram flores para si'], 2, '三月十四日にお返しをしなきゃいけない.', { audio: questionAudio('K14_05', 'K14-05 — Conversa sobre White Day') }),
]

const grammarQuestions = [
  q('g1', 9, '“Quero um carro novo.”', ['新しい車をほしいです', '新しい車がほしいです', '新しい車にほしいです', '新しい車がほしいます'], 2, 'O objeto desejado usa が com ほしい.'),
  q('g2', 10, 'ほしい → forma negativa', ['ほしいくない', 'ほしくない', 'ほしない', 'ほしくありませんでした'], 2, 'Como adjetivo い, retire い e use くない.'),
  q('g3', 11, '“Eu queria uma bicicleta.”', ['自転車がほしかったです', '自転車をほしいでした', '自転車がほしくないです', '自転車を買います'], 1, 'Passado de ほしい: ほしかった.'),
  q('g4', 12, 'Para o desejo observável de uma terceira pessoa:', ['ほしいです', 'ほしがっています', 'ほしかもしれません', 'ほしくれます'], 2, 'Terceira pessoa usa ほしがっている.'),
  q('g5', 13, '“Quero um livro” versus “quero ler um livro”', ['本がほしい／本を読みたい', '本をほしい／本が読みたい', '本にほしい／本を読むほしい', '本がほしがる／本を読める'], 1, 'ほしい recebe objeto com が; たい se liga à base verbal.'),
  q('g6', 14, '“Talvez chova amanhã.”', ['あした雨が降るでしょう', 'あした雨が降るかもしれません', 'あした雨が降りたいです', 'あした雨が降りそうでした'], 2, 'Forma curta + かもしれません expressa possibilidade incerta.'),
  q('g7', 15, 'ウディさんはインド人（　）。', ['だかもしれません', 'かもしれません', 'なかもしれません', 'でかもしれません'], 2, 'Substantivo afirmativo presente perde だ.'),
  q('g8', 16, '山下先生は犬がきらい（　）。', ['だかもしれません', 'かもしれません', 'なかもしれません', 'そうかもしれだ'], 2, 'Adjetivo な afirmativo presente também perde だ.'),
  q('g9', 17, '“Talvez não venha.”', ['来ないかもしれません', '来ませんかもしれません', '来なくかもしれません', '来なかったでしょう'], 1, 'A forma curta negativa pode vir antes do padrão.'),
  q('g10', 18, 'Quem é o sujeito em 私は友だちに花をあげました?', ['O amigo', 'Eu, quem deu', 'As flores', 'Não há sujeito'], 2, 'Com あげる, o doador é sujeito e o destinatário usa に.'),
  q('g11', 19, '姉が私にマフラーを（　）。', ['あげました', 'くれました', 'もらいました', 'ほしがりました'], 2, 'O presente vem em direção a mim, portanto くれる.'),
  q('g12', 20, '私は姉にマフラーを（　）。', ['くれました', 'もらいました', 'あげました', 'かしました'], 2, 'A câmera está no recebedor 私, portanto もらう.'),
  q('g13', 21, '“A mulher deu um relógio ao homem.”', ['女の人は男の人に時計をあげました', '女の人が男の人に時計をくれました', '男の人は女の人を時計にもらいました', '時計が女の人をあげました'], 1, 'Transação entre terceiros, fora do centro do falante: あげる.'),
  q('g14', 22, 'そのプレゼント、だれ（　）くれたんですか。', ['に', 'が', 'を', 'からを'], 2, 'O doador é sujeito de くれる e usa が.'),
  q('g15', 23, 'Com もらう, a origem pode usar:', ['を apenas', 'に ou から', 'が apenas', 'で ou と apenas'], 2, 'O doador/origem usa に ou から.'),
  q('g16', 24, '薬を（　）どうですか。 “Que tal tomar remédio?”', ['飲むなら', '飲んだら', '飲んでし', '飲みそう'], 2, 'Passado curto 飲んだ + らどうですか.'),
  q('g17', 25, '“Que tal estudar mais?” (casual)', ['もっと勉強したらどう？', 'もっと勉強しませんか?', 'もっと勉強するそう?', 'もっと勉強してもらう?'], 1, 'A forma casual pode terminar em たらどう.'),
  q('g18', 26, 'Por que evitar うちに来たらどうですか como convite?', ['É passado', 'たらどうですか é conselho e pode soar inadequado/crítico', 'Falta objeto', 'Não se usa 来る'], 2, 'Convites usam melhor うちに来ませんか.'),
  q('g19', 27, 'きのうのパーティーには学生が二十人（　）来ました。', ['しか', 'も', 'だけで', 'なら'], 2, 'も enfatiza que vinte foi uma quantidade grande.'),
  q('g20', 28, '私は日本語の本を一冊（　）持っていません。', ['も', 'しか', 'まで', 'そう'], 2, 'しか exige predicado negativo e significa “somente uma”.'),
  q('g21', 29, 'この会社にはパソコンが二台しか（　）。', ['あります', 'ありません', 'ありましたか', 'あるそうです'], 2, 'しか deve combinar com negativa.'),
  q('g22', 30, '“Recebi nada menos que dez chocolates.”', ['チョコレートを十個しかもらいませんでした', 'チョコレートを十個ももらいました', 'チョコレートが十個ほしいです', '十個をくれません'], 2, 'Número + も apresenta a quantidade como grande.'),
  q('g23', 31, '“Recebi somente um.”', ['一個ももらいました', '一個しかもらえませんでした', '一個がほしいでした', '一個をあげました'], 2, 'Número + しか + negativa apresenta quantidade pequena/limitada.'),
  q('g24', 32, 'Qual frase mantém a perspectiva correta?', ['私はあなたから手紙をもらいました', '私はあなたから手紙をくれました', 'あなたは私に手紙をもらいました', '手紙は私をあげました'], 1, 'Eu sou recebedor; a origem é あなたから.'),
  q('g25', 33, 'それはいい（　）ね。 “Talvez seja uma boa ideia.”', ['ほしいです', 'かもしれません', 'しかないです', 'あげます'], 2, 'A fala de Mary usa かもしれません para possibilidade.'),
]

const vocabularyReadingQuestions = [
  q('v1', 34, '{彼|かれ}／{彼女|かのじょ}', ['pai/mãe', 'ele/namorada ou ela', 'irmão/irmã', 'amigo/professor'], 2, '彼 é ele/namorado; 彼女 é ela/namorada.'),
  q('v2', 35, '{付き合|つきあ}う', ['namorar/conviver', 'desistir', 'viajar', 'receber'], 1, 'Na leitura, descreve estar em um relacionamento.'),
  q('v3', 36, '{先輩|せんぱい}', ['colega mais novo', 'membro mais experiente/sênior', 'gerente', 'parente'], 2, 'O namorado era veterano da universidade.'),
  q('v4', 37, '{出張|しゅっちょう}', ['mudança', 'viagem de negócios', 'férias', 'intercâmbio'], 2, 'A terceira leitora precisa ir ao Brasil a trabalho.'),
  q('v5', 38, '{親切|しんせつ}／{家族|かぞく}', ['gentil/família', 'urgente/loja', 'som/festa', 'médico/avião'], 1, 'São kanji centrais da lição.'),
  q('r1', 39, 'Há quanto tempo a primeira leitora namora?', ['Três anos', 'Seis anos', 'Dez anos', 'Seis meses'], 2, '六年間付き合っています.', { audio: questionAudio('Y14_1', 'Y14-1 — Casamento e trabalho') }),
  q('r2', 40, 'Qual é o conflito da primeira leitora?', ['Não quer casar', 'Ele vive em Tóquio, ela em Osaka, e nenhum quer largar o emprego', 'A família é contra', 'Ele vai ao exterior'], 2, 'O casamento exigiria que um deles mudasse e deixasse o trabalho.', { audio: questionAudio('Y14_1', 'Y14-1 — Casamento e trabalho') }),
  q('r3', 41, 'Por que a estudante canadense fala inglês com a família anfitriã?', ['Ela não sabe japonês algum', 'A família quer praticar inglês', 'É uma regra da escola', 'Ela ensina inglês'], 2, 'みんなは私と英語を話したがっています.', { audio: questionAudio('Y14_2', 'Y14-2 — Japonês não melhora') }),
  q('r4', 42, 'O que acontece quando ela tenta usar japonês nas lojas?', ['Ninguém responde', 'Os atendentes respondem em inglês', 'Recebe desconto', 'Pedem que escreva'], 2, 'O texto exemplifica a resposta “Two hundred yen. Thank you.”', { audio: questionAudio('Y14_2', 'Y14-2 — Japonês não melhora') }),
  q('r5', 43, 'Por que a terceira leitora precisou voar a Hokkaido?', ['Férias', 'O pai adoeceu de repente', 'Casamento', 'Trabalho'], 2, '父親が急に病気になったので.', { audio: questionAudio('Y14_3', 'Y14-3 — Medo de avião') }),
  q('r6', 44, 'Qual viagem futura a preocupa?', ['Tóquio–Osaka', 'Japão–São Paulo por cerca de 27 horas', 'Canadá–Japão', 'Hokkaido–Okinawa'], 2, 'Ela terá uma viagem de negócios ao Brasil em três meses.', { audio: questionAudio('Y14_3', 'Y14-3 — Medo de avião') }),
  q('r7', 45, 'Qual conselho a colunista oferece?', ['Nunca viajar', 'Ouvir música apenas', 'Consultar um médico', 'Mudar de emprego'], 3, 'お医者さんに行って相談してみたらどうですか.', { audio: questionAudio('Y14_4', 'Y14-4 — Conselho para medo de avião') }),
  q('r8', 46, 'O que a colunista faz no avião?', ['Dorme', 'Escuta Mozart', 'Trabalha', 'Conversa com o piloto'], 2, '飛行機の中で大好きなモーツァルトの音楽を聞きます.', { audio: questionAudio('Y14_4', 'Y14-4 — Conselho para medo de avião') }),
]

const listeningQuestions = [
  q('l1', 47, 'W14-A: quem tinha o ingresso originalmente?', ['Mori', 'Suzuki', 'Yoshida', 'Tanaka'], 1, 'Tanaka diz que havia dado o ingresso a Mori no dia anterior.', { audio: questionAudio('W14_A', 'W14-A — O caminho do ingresso') }),
  q('l2', 48, 'W14-A: qual foi a sequência completa?', ['Mori→Suzuki→Yoshida→Tanaka', 'Tanaka→Mori→Suzuki→Yoshida→Tanaka', 'Suzuki→Mori→Tanaka', 'Yoshida→Suzuki→Mori'], 2, 'O ingresso retorna a Tanaka depois de passar por Mori, Suzuki e Yoshida.', { audio: questionAudio('W14_A', 'W14-A — O caminho do ingresso') }),
  q('l3', 49, 'W14-B caso 1: o que a estudante quer fazer?', ['Comprar roupas', 'Cortar o cabelo', 'Entrar em clube', 'Fazer homestay'], 2, '髪を切りたいんです.', { audio: questionAudio('W14_B', 'W14-B — Conselhos a estudantes') }),
  q('l4', 50, 'W14-B caso 1: conselho de Yuki', ['Ir ao salão em frente ao ponto de ônibus, onde há alguém que fala inglês', 'Cortar sozinha', 'Não cortar', 'Ir ao hospital'], 1, 'バス停の前の美容院に行ったらどうですか.', { audio: questionAudio('W14_B', 'W14-B — Conselhos a estudantes') }),
  q('l5', 51, 'W14-B caso 2: qual é o problema?', ['Não consegue usar mais japonês porque todos falam inglês', 'Não tem amigos', 'Não encontra casa', 'Não gosta de esportes'], 1, 'Ele usa inglês com estudantes e japoneses, então não melhora.', { audio: questionAudio('W14_B', 'W14-B — Conselhos a estudantes') }),
  q('l6', 52, 'W14-B caso 2: conselho aceito como boa possibilidade', ['Voltar ao país', 'Entrar em algum clube', 'Parar de estudar', 'Comprar livro'], 2, '何かサークルに入ったらどうですか.', { audio: questionAudio('W14_B', 'W14-B — Conselhos a estudantes') }),
  q('l7', 53, 'W14-B caso 3: quantas crianças há na família anfitriã?', ['Cinco', 'Sete', 'Onze', 'Duas'], 2, '五歳から十一歳まで、全部で七人.', { audio: questionAudio('W14_B', 'W14-B — Conselhos a estudantes') }),
  q('l8', 54, 'W14-B caso 3: que presente coletivo é sugerido?', ['Sete brinquedos', 'Fazer um bolo juntos', 'Dar dinheiro', 'Comprar livros'], 2, '一緒にケーキを作ったらどうですか.', { audio: questionAudio('W14_B', 'W14-B — Conselhos a estudantes') }),
  q('l9', 55, 'W14-C: qual item Ichiro quer primeiro?', ['Bicicleta', 'Livro', 'Roupa', 'Relógio'], 1, '自転車がほしいな.', { audio: questionAudio('W14_C', 'W14-C — Presente de aniversário de Ichiro') }),
  q('l10', 56, 'W14-C: por que Yui recusa a bicicleta?', ['É perigosa', 'É cara demais', 'Ele já tem duas', 'Não cabe em casa'], 2, '自転車は高すぎるよ.', { audio: questionAudio('W14_C', 'W14-C — Presente de aniversário de Ichiro') }),
  q('l11', 57, 'W14-C: quais itens Ichiro não quer?', ['Relógio e mangá', 'Roupa e livro', 'Bicicleta e relógio', 'Livro e mangá'], 2, 'Ele diz não ter interesse em roupas e não querer livros.', { audio: questionAudio('W14_C', 'W14-C — Presente de aniversário de Ichiro') }),
  q('l12', 58, 'W14-C: o que Yui decide dar?', ['Uma bicicleta', 'Um relógio', 'Um volume de mangá', 'Uma camiseta'], 3, 'じゃあ、まんがを一冊あげるね.', { audio: questionAudio('W14_C', 'W14-C — Presente de aniversário de Ichiro') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K14_01: [{ label: '{会話|かいわ} I', lines: [
    { speaker: 'Anúncio', ja: '{第十四課|だいじゅうよんか}　バレンタインデー　{会話|かいわ}{一|いち}', pt: 'Lição 14: Dia dos Namorados. Diálogo I.' },
    { speaker: 'Mary', ja: 'バレンタインデーのプレゼントは{何|なに}がいいと{思|おも}いますか。', pt: 'O que você acha que seria bom como presente de Dia dos Namorados?' },
    { speaker: 'Yui', ja: 'そうですね。たけしさんはいつも{同|おな}じセーターを{着|き}ているから、セーターをあげたらどうですか。', pt: 'Bem... Como Takeshi usa sempre o mesmo suéter, que tal dar um suéter a ele?' },
    { speaker: 'Mary', ja: 'それはいいかもしれませんね。', pt: 'Talvez seja uma boa ideia.' },
  ] }],
  K14_03: [{ label: '{会話|かいわ} II', lines: [
    { speaker: 'Anúncio', ja: '{二|に}', pt: 'Diálogo II.' },
    { speaker: 'Mary', ja: 'たけしくん、はい、これ。', pt: 'Takeshi, tome, isto é para você.' },
    { speaker: 'Takeshi', ja: 'えっ、ぼくに？どうもありがとう。{開|あ}けてもいい？', pt: 'O quê, para mim? Muito obrigado. Posso abrir?' },
    { speaker: 'Mary', ja: 'うん。', pt: 'Sim.' },
    { speaker: 'Takeshi', ja: 'わあ、いいね、このセーター。こんなのがほしかったんだ。メアリーが{編|あ}んだの？', pt: 'Uau, que legal, este suéter. Eu queria um assim. Foi você que tricotou, Mary?' },
    { speaker: 'Mary', ja: 'うん、{小|ちい}さいかもしれないから{着|き}てみて。', pt: 'Sim. Talvez seja pequeno, então experimente.' },
    { speaker: 'Takeshi', ja: 'ちょうどいいよ。ありがとう。', pt: 'Ficou do tamanho certo. Obrigado.' },
  ] }],
  K14_05: [{ label: '{会話|かいわ} III', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}', pt: 'Diálogo III.' },
    { speaker: 'John', ja: '{暖|あたた}かそうなセーターですね。', pt: 'Esse suéter parece quente.' },
    { speaker: 'Takeshi', ja: 'これ、メアリーがくれたんです。', pt: 'Mary me deu.' },
    { speaker: 'John', ja: 'よく{似合|にあ}っていますよ。ぼくも{彼女|かのじょ}がほしいなあ。ロバートさんはチョコレートを{十個|じゅっこ}ももらったんですよ。', pt: 'Fica muito bem em você. Eu também queria uma namorada. Robert recebeu nada menos que dez chocolates.' },
    { speaker: 'Takeshi', ja: 'へえ、すごいですね。ジョンさんは？', pt: 'Uau, incrível. E você, John?' },
    { speaker: 'John', ja: 'ぼくは{一個|いっこ}しかもらえませんでした。{大家|おおや}さんから。さびしいなあ。', pt: 'Eu recebi somente um. Da minha senhoria. Que tristeza.' },
    { speaker: 'Takeshi', ja: 'でも、ロバートさんはホワイトデーが{大変|たいへん}ですよ。', pt: 'Mas o White Day será difícil para Robert.' },
    { speaker: 'John', ja: 'ホワイトデー？', pt: 'White Day?' },
    { speaker: 'Takeshi', ja: 'ええ、{男|おとこ}の{人|ひと}は{三月十四日|さんがつじゅうよっか}にお{返|かえ}しをしなきゃいけないんですよ。', pt: 'Sim. Os homens precisam retribuir em 14 de março.' },
  ] }],
  Y14_1: [{ label: '{結婚|けっこん}と{仕事|しごと}', lines: [
    { speaker: 'Anúncio', ja: '{読み書き編|よみかきへん}　{第十四課|だいじゅうよんか}　{二|に}　{悩|なや}みの{相談|そうだん}　B　{一|いち}　{結婚|けっこん}と{仕事|しごと}', pt: 'Parte de leitura e escrita, lição 14, seção II: Coluna de conselhos. Texto 1, Casamento e trabalho.' },
    { speaker: 'Leitora', ja: '{二十六歳|にじゅうろくさい}の{会社員|かいしゃいん}です。{三歳年上|さんさいとしうえ}の{彼|かれ}がいます。', pt: 'Sou funcionária de uma empresa e tenho 26 anos. Tenho um namorado três anos mais velho.' },
    { speaker: 'Leitora', ja: '{彼|かれ}は{大学時代|だいがくじだい}の{先輩|せんぱい}で、{六年間|ろくねんかん}{付|つ}き{合|あ}っています。', pt: 'Ele era meu veterano na universidade e namoramos há seis anos.' },
    { speaker: 'Leitora', ja: 'このごろ、{彼|かれ}は「{早|はや}く{結婚|けっこん}したい」と{言|い}っています。', pt: 'Ultimamente ele diz que quer se casar logo.' },
    { speaker: 'Leitora', ja: '{彼|かれ}はやさしいし、{仕事|しごと}もできるし、{私|わたし}も{結婚|けっこん}したいと{思|おも}っています。', pt: 'Ele é gentil, competente no trabalho, e eu também quero me casar.' },
    { speaker: 'Leitora', ja: 'でも、{彼|かれ}は{東京|とうきょう}に{住|す}んでいて、{私|わたし}は{大阪|おおさか}に{住|す}んでいます。', pt: 'Mas ele mora em Tóquio e eu moro em Osaka.' },
    { speaker: 'Leitora', ja: '{彼|かれ}は{今|いま}の{仕事|しごと}をやめられないと{言|い}っています。{私|わたし}もやめたくありません。', pt: 'Ele diz que não pode deixar o emprego atual. Eu também não quero deixar o meu.' },
    { speaker: 'Leitora', ja: '{私|わたし}が{仕事|しごと}をやめて{東京|とうきょう}に{行|い}ったほうがいいんでしょうか。{彼|かれ}を{愛|あい}しています。', pt: 'Será melhor eu deixar o emprego e ir para Tóquio? Eu o amo.' },
  ] }],
  Y14_2: [{ label: '{日本語|にほんご}が{上手|じょうず}にならない', lines: [
    { speaker: 'Leitor', ja: 'カナダ{人|じん}の{留学生|りゅうがくせい}です。{日本|にほん}の{大学|だいがく}で{勉強|べんきょう}しています。{私|わたし}の{悩|なや}みは{日本語|にほんご}です。', pt: 'Sou um estudante canadense em intercâmbio e estudo em uma universidade japonesa. Minha preocupação é o japonês.' },
    { speaker: 'Leitor', ja: '{今|いま}、{日本人|にほんじん}のホストファミリーと{住|す}んでいます。{家族|かぞく}は{親切|しんせつ}ですが、みんなは{私|わたし}と{英語|えいご}を{話|はな}したがっています。', pt: 'Agora moro com uma família anfitriã japonesa. Eles são gentis, mas todos querem falar inglês comigo.' },
    { speaker: 'Leitor', ja: 'だから、{私|わたし}は「{英語|えいご}を{話|はな}さなきゃ」と{思|おも}って、{英語|えいご}を{話|はな}します。', pt: 'Por isso penso “preciso falar inglês” e falo inglês.' },
    { speaker: 'Leitor', ja: '{学校|がっこう}に{日本人|にほんじん}の{友|とも}だちがたくさんいますが、みんなの{英語|えいご}は{私|わたし}の{日本語|にほんご}より{上手|じょうず}です。だから、たいてい{英語|えいご}を{使|つか}います。', pt: 'Tenho muitos amigos japoneses na escola, mas o inglês deles é melhor que meu japonês. Por isso quase sempre usamos inglês.' },
    { speaker: 'Leitor', ja: '{買|か}い{物|もの}の{時|とき}も「すみません。あのう、これください」と{日本語|にほんご}で{言|い}いますが、お{店|みせ}の{人|ひと}は “Two hundred yen ね。Thank you!” と{英語|えいご}で{言|い}います。', pt: 'Até nas compras digo em japonês “com licença, isto por favor”, mas o atendente responde em inglês: “Two hundred yen. Thank you!”.' },
    { speaker: 'Leitor', ja: 'もう{六|ろっ}か{月|げつ}も{日本|にほん}にいますが、ぜんぜん{日本語|にほんご}が{上手|じょうず}になりません。どうしたらいいでしょうか。', pt: 'Já estou no Japão há seis meses, mas meu japonês não melhora de jeito nenhum. O que devo fazer?' },
  ] }],
  Y14_3: [{ label: '{飛行機|ひこうき}がきらい', lines: [
    { speaker: 'Leitora', ja: '{私|わたし}は{子供|こども}の{時|とき}から{飛行機|ひこうき}がきらいです。', pt: 'Não gosto de avião desde criança.' },
    { speaker: 'Leitora', ja: '{去年|きょねん}、{父親|ちちおや}が{急|きゅう}に{病気|びょうき}になったので、{飛行機|ひこうき}で{北海道|ほっかいどう}に{帰|かえ}らなければいけませんでした。', pt: 'No ano passado, meu pai adoeceu de repente e precisei voltar a Hokkaido de avião.' },
    { speaker: 'Leitora', ja: 'その{時|とき}、{気分|きぶん}が{悪|わる}くて{大変|たいへん}でした。', pt: 'Naquela ocasião passei mal e foi muito difícil.' },
    { speaker: 'Leitora', ja: '{実|じつ}は、{三|さん}か{月後|げつご}に{会社|かいしゃ}の{出張|しゅっちょう}でブラジルに{行|い}くんですが、{日本|にほん}からサンパウロまで{二十七時間|にじゅうしちじかん}ぐらい{飛行機|ひこうき}に{乗|の}っていなければいけません。', pt: 'Na verdade, daqui a três meses irei ao Brasil a trabalho e terei de ficar cerca de 27 horas em aviões do Japão até São Paulo.' },
    { speaker: 'Leitora', ja: 'どうしたらいいでしょうか。アドバイスをお{願|ねが}いします。', pt: 'O que devo fazer? Peço um conselho.' },
  ] }],
  Y14_4: [{ label: 'アドバイス', lines: [
    { speaker: 'Colunista', ja: '{私|わたし}も{飛行機|ひこうき}に{乗|の}るのが{好|す}きじゃないので、あなたの{悩|なや}みが{本当|ほんとう}によくわかります。', pt: 'Eu também não gosto de viajar de avião, então entendo muito bem sua preocupação.' },
    { speaker: 'Colunista', ja: '{私|わたし}はよく{飛行機|ひこうき}の{中|なか}で、{大好|だいす}きなモーツァルトの{音楽|おんがく}を{聞|き}きます。', pt: 'Costumo ouvir no avião as músicas de Mozart que adoro.' },
    { speaker: 'Colunista', ja: 'でも、あなたの{場合|ばあい}はもっと{大変|たいへん}そうなので、お{医者|いしゃ}さんに{行|い}って{相談|そうだん}してみたらどうですか。', pt: 'Mas seu caso parece mais difícil; que tal consultar um médico?' },
  ] }],
}

scripts.K14_02 = scripts.K14_01
scripts.K14_04 = scripts.K14_03
scripts.K14_06 = scripts.K14_05

const specialTitles: Record<string, string> = {
  K14_01: 'Diálogo I — escolhendo um presente', K14_02: 'Diálogo I — repetição guiada',
  K14_03: 'Diálogo II — Mary entrega o suéter', K14_04: 'Diálogo II — repetição guiada',
  K14_05: 'Diálogo III — chocolates e White Day', K14_06: 'Diálogo III — repetição guiada',
  Y14_1: 'Leitura — casamento e trabalho', Y14_2: 'Leitura — japonês não melhora',
  Y14_3: 'Leitura — medo de avião', Y14_4: 'Leitura — conselho para medo de avião',
  W14_A: 'Workbook A — o caminho do ingresso', W14_B: 'Workbook B — aconselhando estudantes',
  W14_C: 'Workbook C — presente para Ichiro',
}
const audioCodes = [...Array.from({ length: 17 }, (_, index) => `K14_${String(index + 1).padStart(2, '0')}`), 'Y14_1', 'Y14_2', 'Y14_3', 'Y14_4', 'W14_A', 'W14_B', 'W14_C']
const kindForCode = (code: string): AudioTrackKind => {
  if (code.startsWith('Y')) return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (/^K14_0[135]$/.test(code)) return 'dialogue'
  if (/^K14_0[246]$/.test(code)) return 'dialogue-support'
  if (/^K14_0[78]$/.test(code)) return 'vocabulary'
  return 'drill'
}
const audios: AudioTrack[] = audioCodes.map((code) => {
  const metadata = genki2AudioSourceByCode[code]
  const kind = kindForCode(code)
  const script = scripts[code] ?? []
  const activity = metadata?.sourceActivityPt ?? `Faixa ${code}`
  const source = metadata?.material === 'workbook' ? 'Workbook' : 'Textbook'
  const purposePt = kind === 'dialogue' ? 'Compreender a conversa integral e identificar desejos, possibilidades e direção da troca.'
    : kind === 'dialogue-support' ? 'Repetir o diálogo em blocos e automatizar ritmo, pronúncia e respostas.'
      : kind === 'reading' ? 'Acompanhar a leitura integral e localizar situação, restrição, pedido e conselho.'
        : kind === 'workbook' ? 'Resolver a tarefa auditiva do workbook e localizar evidências no áudio.'
          : kind === 'vocabulary' ? 'Fixar pronúncia e significado do vocabulário de presentes, relações e conselhos.'
            : `Produzir oralmente a ${activity.toLowerCase()} antes de ouvir o modelo.`
  return {
    id: trackId(code), code, kind, language: 'ja', title: specialTitles[code] ?? activity,
    descriptionPt: `${activity}. ${purposePt}`, purposePt,
    instructionsPt: kind === 'workbook'
      ? ['Leia a tarefa da página indicada.', 'Ouça uma vez sem pausar e registre hipóteses.', 'Ouça de novo, encontre as palavras decisivas e responda às questões vinculadas.']
      : ['Ouça sem tradução.', 'Repita em voz alta acompanhando o texto japonês.', 'Refaça sem texto e complete a prática vinculada.'],
    sourceRefPt: `${source} Genki II, 3ª ed., p. ${metadata?.sourcePage ?? '—'}`,
    sourceActivityPt: activity, sourcePage: metadata?.sourcePage,
    practiceTaskPt: kind === 'reading' ? 'Resuma cada problema em uma frase e formule um conselho com 〜たらどうですか.'
      : kind === 'workbook' ? 'Responda sem transcrição, anote a evidência exata e repita o trecho depois da correção.'
        : kind === 'vocabulary' ? 'Antecipe a palavra japonesa, repita o modelo e produza uma frase curta ligada ao tema da lição.'
          : kind === 'drill' || kind === 'dialogue-support' ? 'Produza a resposta durante a pausa e repita somente os itens em que direção, partícula ou forma divergir.'
            : 'Reconte quem deu o quê a quem e represente um papel, preservando as formas da conversa.',
    src: `${BASE}/${code}.mp3`, script,
    transcript: script.length ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script } : undefined,
  }
})

export const genki2Lesson14: Section = {
  id: 'lesson-14', level: 'genki-2', titleJa: '第14課　バレンタインデー',
  titlePt: 'Lição 14 — Dia dos Namorados',
  summaryPt: 'Desejos, possibilidade incerta, dar e receber, conselhos, quantidades com も e しか, relações, coluna de conselhos e compreensão auditiva.',
  studyNotes,
  groups: [
    group('dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    group('grammar', '文法 1〜5', 'desejos, incerteza, trocas, conselhos e quantidades', grammarQuestions),
    group('vocabulary-reading', '読み書き', 'vocabulário, kanji e compreensão das leituras', vocabularyReadingQuestions),
    group('listening', '聞く練習', 'compreensão auditiva do workbook', listeningQuestions),
  ],
  audios,
}
