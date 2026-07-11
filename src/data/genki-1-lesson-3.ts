import type { AudioTrack, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const AUDIO_BASE = '/audio/genki/genki-1/lesson-3'

function q(id: string, number: number, prompt: string, choices: string[], answer: number, explanationPt: string, options: Partial<Pick<Question, 'translationPt' | 'audio' | 'helpPt'>> = {}): Question {
  return { id: `genki-1-l3-${id}`, number, prompt, choices: choices.map((text, i) => ({ n: i + 1, text })), answer, explanationPt, ...options }
}

function group(id: string, title: string, subtitlePt: string, instructionPt: string, questions: Question[]): ExerciseGroup {
  return { id: `genki-1-l3-${id}`, title, subtitlePt, instructionJa: '', instructionPt, questions }
}

const notes: StudyNote[] = [
  {
    title: 'Objetivos da lição',
    bodyPt: `Nesta lição, você aprenderá a:
- falar sobre atividades habituais e planos futuros;
- conjugar verbos no presente afirmativo e negativo polido;
- marcar objeto, local da ação, destino e horário;
- convidar alguém com \`〜ませんか\` e recusar com delicadeza;
- expressar frequência;
- organizar frases com tópico, tempo, lugar, objeto e verbo;
- ler os primeiros kanji e um texto sobre rotina diária.`,
  },
  {
    title: 'Diálogo 1 - Marcando um encontro',
    bodyPt: `Takeshi pergunta o que Mary costuma fazer no fim de semana e a convida para ver um filme.

- \`週末は たいてい 何を しますか。\` - O que você costuma fazer no fim de semana?
- \`うちで 勉強します。でも、ときどき 映画を 見ます。\` - Estudo em casa. Mas às vezes vejo filmes.
- \`土曜日に 映画を 見ませんか。\` - Quer ver um filme no sábado?
- \`土曜日は ちょっと…。\` - Sábado é meio complicado...
- \`じゃあ、日曜日は どうですか。\` - Então, que tal domingo?
- \`いいですね。\` - Parece ótimo.`,
    helpPt: `A recusa com \`ちょっと…\` deixa a frase propositalmente incompleta. O contexto comunica “não vai dar”, evitando um \`いいえ\` direto.`,
  },
  {
    title: 'Diálogo 2 - Domingo de manhã',
    bodyPt: `Mary conversa com sua mãe anfitriã antes de sair.

- \`今日は 京都に 行きます。\` - Hoje vou a Kyoto.
- \`京都で 映画を 見ます。\` - Vou ver um filme em Kyoto.
- \`何時ごろ 帰りますか。\` - Por volta de que horas você volta?
- \`九時ごろです。\` - Por volta das nove.
- \`晩ご飯は？\` - E o jantar?
- \`食べません。\` - Não vou comer.
- \`いってきます。\` - Estou indo e volto.`,
  },
  {
    title: '1. Grupos e conjugação verbal',
    bodyPt: `Os verbos são organizados em três grupos.

## Verbos ru
Retire \`る\` e acrescente \`ます\` ou \`ません\`: \`食べる → 食べます／食べません\`.

## Verbos u
Mude a sílaba final da linha u para a linha i e acrescente \`ます\`: \`飲む → 飲みます\`, \`行く → 行きます\`, \`帰る → 帰ります\`.

## Irregulares
- \`する → します／しません\`;
- \`来る → 来ます／来ません\`.

Memorize a forma de dicionário e a forma em \`ます\` juntas. Alguns verbos terminados em \`る\`, como \`帰る\`, são verbos u.`,
    helpPt: `Use três cartões mentais: “tirar る”, “mover para i” e “irregular”. Ao aprender um verbo novo, registre também o grupo para não precisar adivinhar depois.`,
  },
  {
    title: '2. Presente: hábito ou futuro',
    bodyPt: `A forma não passada pode descrever hábitos ou acontecimentos futuros.

- \`よく テレビを 見ます。\` - Assisto TV com frequência.
- \`あした 京都に 行きます。\` - Amanhã vou a Kyoto.

O contexto e as expressões de tempo indicam a interpretação. A forma negativa termina em \`ません\`.`,
  },
  {
    title: '3. Partículas を・で・に・へ',
    bodyPt: `- \`を\` marca o objeto direto: \`コーヒーを 飲みます\`.
- \`で\` marca o lugar onde a ação acontece: \`図書館で 本を 読みます\`.
- \`に\` marca destino e horário específico: \`学校に 行きます\`, \`七時に 起きます\`.
- \`へ\` também marca destino com verbos de movimento: \`うちへ 帰ります\`.

\`へ\` é pronunciado **e** como partícula. Não use \`へ\` para horários.`,
    helpPt: `Pergunte ao verbo: “o quê?” → \`を\`; “onde a ação ocorre?” → \`で\`; “para onde?” ou “a que horas?” → \`に\`.`,
  },
  {
    title: '4. Referências de tempo',
    bodyPt: `Use \`に\` com horários numéricos, dias da semana e meses: \`日曜日に\`, \`十時半に\`, \`九月に\`.

Normalmente não use \`に\` com:
- expressões relativas: \`今日\`, \`明日\`, \`今晩\`;
- intervalos regulares: \`毎日\`, \`毎週\`;
- \`いつ\`.

Com \`朝\`, \`晩\` e \`週末\`, o uso de \`に\` pode variar.`,
  },
  {
    title: '5. Convite com 〜ませんか',
    bodyPt: `A forma negativa interrogativa funciona como convite.

- \`昼ご飯を 食べませんか。\` - Quer almoçar comigo?
- \`テニスを しませんか。\` - Quer jogar tênis?

Aceite com \`いいですね\`. Para recusar suavemente, use \`ちょっと…\` e, quando possível, proponha outra data.`,
    helpPt: `Apesar da forma negativa, não traduza palavra por palavra como “não fará?”. Trate \`ませんか\` como um bloco social: “que tal fazermos...?”.`,
  },
  {
    title: '6. Advérbios de frequência',
    bodyPt: `Escala útil:
- \`毎日\` - todos os dias;
- \`たいてい\` - geralmente;
- \`よく\` - frequentemente;
- \`ときどき\` - às vezes;
- \`あまり + negativo\` - não muito;
- \`全然 + negativo\` - nunca/de jeito nenhum.

\`あまり\` e \`全然\` antecipam uma forma negativa: \`全然 テレビを 見ません\`.`,
  },
  {
    title: '7. Ordem das palavras e tópico は',
    bodyPt: `O verbo costuma encerrar a frase. Uma ordem segura é:

\`tópico は + tempo + lugar で + objeto を + verbo\`

\`私は 今日 図書館で 日本語を 勉強します。\`

Os blocos podem mudar de posição porque as partículas preservam suas funções. \`は\` também pode apresentar tempo ou objeto como tema: \`今日は 京都に 行きます\`, \`晩ご飯は 食べません\`.`,
  },
  {
    title: 'Leitura e escrita - Kanji numéricos e rotina',
    bodyPt: `Kanji desta lição: \`一 二 三 四 五 六 七 八 九 十 百 千 万 円 時\`.

Leituras mudam conforme a palavra: \`四\` pode ser \`よん\` e, em \`四時\`, \`よじ\`. Aprenda os kanji dentro de expressões.

O texto \`まいにちのせいかつ\` descreve uma rotina: acordar às 7, ir à universidade às 8, estudar japonês às 9, almoçar às 12h30, ler na biblioteca às 4, voltar às 6, ver TV às 10 e dormir à meia-noite.`,
    helpPt: `Para ler valores em kanji, encontre primeiro as unidades \`万・千・百・十\`. Para a rotina, circule horários e sublinhe o verbo de cada frase.`,
  },
]

const dialogue = [
  q('dialogue-1', 1, 'メアリーさんは 週末に たいてい 何を しますか。', ['映画を 見ます', 'うちで 勉強します', '京都に 行きます', 'テニスを します'], 2, 'Mary diz que geralmente estuda em casa.'),
  q('dialogue-2', 2, 'メアリーさんは ときどき 何を しますか。', ['本を 読みます', '映画を 見ます', 'コーヒーを 飲みます', 'スポーツを します'], 2, 'Mary às vezes vê filmes.'),
  q('dialogue-3', 3, 'たけしさんは いつ 映画に さそいますか。', ['金曜日', '土曜日', '日曜日', '月曜日'], 2, 'O primeiro convite é para sábado.'),
  q('dialogue-4', 4, '「土曜日は ちょっと…」 significa:', ['sábado é curto', 'sábado é inconveniente', 'sábado é cedo', 'sábado é barato'], 2, '「ちょっと…」 recusa de forma indireta.'),
  q('dialogue-5', 5, '二人は いつ 映画を 見ますか。', ['sábado', 'domingo', 'segunda', 'não combinam'], 2, 'Mary aceita a alternativa de domingo.'),
  q('dialogue-6', 6, 'メアリーさんは 今日 どこに 行きますか。', ['東京', '大阪', '京都', '図書館'], 3, 'Mary vai a Kyoto.'),
  q('dialogue-7', 7, 'メアリーさんは 何時ごろ 帰りますか。', ['7時ごろ', '8時ごろ', '9時ごろ', '10時ごろ'], 3, 'Ela diz que volta por volta das nove.'),
  q('dialogue-8', 8, 'メアリーさんは 晩ご飯を 食べますか。', ['はい、食べます', 'いいえ、食べません', 'ときどき 食べます', 'わかりません'], 2, 'Mary diz 「食べません」.'),
]

const verbs = [
  q('verb-1', 9, '食べる → forma afirmativa polida', ['食べます', '食べません', '食びます', '食べります'], 1, 'Verbo ru: retire る e acrescente ます.'),
  q('verb-2', 10, '見る → forma negativa polida', ['見ます', '見ません', '見りません', '見せん'], 2, 'Verbo ru: 見る → 見ません.'),
  q('verb-3', 11, '飲む → forma afirmativa polida', ['飲むます', '飲みます', '飲めます', '飲ます'], 2, 'Verbo u: む muda para み antes de ます.'),
  q('verb-4', 12, '読む → forma negativa polida', ['読みません', '読ません', '読めません', '読むません'], 1, '読む → 読みません.'),
  q('verb-5', 13, '話す → forma afirmativa polida', ['話します', '話せます', '話すます', '話ります'], 1, 'す muda para し: 話します.'),
  q('verb-6', 14, '聞く → forma negativa polida', ['聞きません', '聞ません', '聞くません', '聞けません'], 1, '聞く → 聞きません.'),
  q('verb-7', 15, '行く → forma afirmativa polida', ['行います', '行きます', '行くます', '行けます'], 2, '行く → 行きます.'),
  q('verb-8', 16, '帰る → forma afirmativa polida', ['帰ます', '帰ります', '帰るます', '帰きます'], 2, '帰る é verbo u nesta lição: 帰ります.'),
  q('verb-9', 17, 'する → forma negativa polida', ['すません', 'しません', 'しりません', 'するません'], 2, 'する é irregular: しません.'),
  q('verb-10', 18, '来る → forma afirmativa polida', ['来ります', '来ます', '来るます', '来きます'], 2, '来る é irregular: 来ます（きます）.'),
  q('verb-11', 19, '起きる pertence a qual grupo?', ['verbo ru', 'verbo u', 'irregular', 'adjetivo'], 1, '起きる é verbo ru.'),
  q('verb-12', 20, '帰る pertence a qual grupo nesta lição?', ['verbo ru', 'verbo u', 'irregular', 'substantivo'], 2, 'Apesar de terminar em る, 帰る é verbo u.'),
]

const particles = [
  q('particle-1', 21, 'コーヒー（　）飲みます。', ['は', 'を', 'で', 'に'], 2, '「を」 marca o objeto de 飲みます.'),
  q('particle-2', 22, '図書館（　）本を 読みます。', ['を', 'で', 'に', 'へ'], 2, '「で」 marca onde a leitura ocorre.'),
  q('particle-3', 23, '学校（　）行きます。', ['を', 'で', 'に', 'も'], 3, 'Destino de movimento usa に.'),
  q('particle-4', 24, 'うち（　）帰ります。', ['を', 'で', 'へ', 'と'], 3, '「へ」 marca direção/destino.'),
  q('particle-5', 25, '七時（　）起きます。', ['を', 'で', 'に', 'へ'], 3, 'Horário específico usa に.'),
  q('particle-6', 26, '音楽（　）聞きます。', ['を', 'で', 'に', 'へ'], 1, '「を」 marca o que se escuta.'),
  q('particle-7', 27, 'うち（　）昼ご飯を 食べます。', ['を', 'で', 'に', 'へ'], 2, 'O almoço acontece em casa: で.'),
  q('particle-8', 28, '京都（　）映画を 見ます。', ['を', 'で', 'に', 'へ'], 2, 'O filme é visto em Kyoto: lugar da ação usa で.'),
  q('particle-9', 29, '今日 学校（　）行きません。', ['を', 'で', 'に', 'も'], 3, 'Escola é o destino não alcançado: に.'),
  q('particle-10', 30, 'A partícula へ é pronunciada:', ['he', 'ha', 'e', 'wa'], 3, 'Como partícula, へ é pronunciado e.'),
]

const timeInviteFrequency = [
  q('time-1', 31, '日曜日（　）京都に 行きます。', ['を', 'で', 'に', 'へ'], 3, 'Dia da semana usa に.'),
  q('time-2', 32, '明日（　）来ます。', ['に', 'を', 'で', 'sem partícula'], 4, '明日 normalmente não usa に.'),
  q('time-3', 33, '毎日（　）日本語を 勉強します。', ['に', 'を', 'で', 'sem partícula'], 4, 'Intervalos regulares como 毎日 não usam に.'),
  q('time-4', 34, 'いつ（　）行きますか。', ['に', 'を', 'で', 'sem partícula'], 4, 'いつ normalmente não usa に.'),
  q('invite-1', 35, '映画を（　）か。', ['見ます', '見ません', '見ました', '見たい'], 2, 'Convite polido: 見ませんか.'),
  q('invite-2', 36, '昼ご飯を 食べませんか。', ['Você não almoça?', 'Quer almoçar comigo?', 'Você já almoçou?', 'O almoço está pronto?'], 2, 'No contexto social, ませんか é um convite.'),
  q('invite-3', 37, 'Resposta positiva natural a ませんか:', ['いいですね', 'いいえです', 'じゃないです', 'どれですか'], 1, '「いいですね」 aceita a sugestão.'),
  q('frequency-1', 38, '“frequentemente”', ['毎日', 'よく', 'あまり', '全然'], 2, '「よく」 significa frequentemente.'),
  q('frequency-2', 39, '“às vezes”', ['たいてい', 'ときどき', '全然', '毎日'], 2, '「ときどき」 significa às vezes.'),
  q('frequency-3', 40, '私は あまり テレビを（　）。', ['見ます', '見ません', '見ました', '見ましょう'], 2, '「あまり」 combina com forma negativa.'),
  q('frequency-4', 41, '私は 全然 お酒を（　）。', ['飲みます', '飲みません', '飲みました', '飲みたいです'], 2, '「全然」 nesta lição combina com negativo.'),
  q('order-1', 42, 'Ordem mais segura:', ['verbo + objeto + lugar', 'tópico + tempo + lugar + objeto + verbo', 'objeto + verbo + tópico', 'lugar + verbo + partícula'], 2, 'O verbo tende a encerrar a frase.'),
]

const kanjiReading = [
  q('kanji-1', 43, '三百', ['30', '300', '3.000', '30.000'], 2, '三百 é 300.'),
  q('kanji-2', 44, '八千', ['800', '8.000', '80.000', '8'], 2, '八千 é 8.000.'),
  q('kanji-3', 45, '一万円', ['1.000 ienes', '10.000 ienes', '100.000 ienes', '1.000.000 ienes'], 2, '一万 é dez mil; 円 é iene.'),
  q('kanji-4', 46, '四時', ['3h', '4h', '7h', '9h'], 2, '四時 é quatro horas, lido よじ.'),
  q('kanji-5', 47, '百五十円', ['105円', '150円', '510円', '1.500円'], 2, '百五十円 = 150 ienes.'),
  q('reading-1', 48, 'No texto まいにちのせいかつ, a que horas o estudante acorda?', ['6:00', '7:00', '8:00', '9:00'], 2, 'Ele diz 「毎日七時に 起きます」.'),
  q('reading-2', 49, 'A que horas ele vai à universidade?', ['7:00', '8:00', '9:00', '12:30'], 2, 'Ele vai à universidade às oito.'),
  q('reading-3', 50, 'Onde ele lê livros às quatro?', ['em casa', 'na universidade', 'na biblioteca', 'no café'], 3, '「四時に 図書館で 本を 読みます」.'),
  q('reading-4', 51, 'A que horas ele volta para casa?', ['4:00', '6:00', '10:00', '12:00'], 2, 'Ele volta por volta das seis.'),
  q('reading-5', 52, 'A que horas ele dorme?', ['10:00', '11:00', '12:00', '1:00'], 3, '「十二時ごろ 寝ます」.'),
]

const audio = (file: string, title: string) => ({ src: `${AUDIO_BASE}/${file}.mp3`, title })
const listening = [
  q('listen-a-1', 53, 'W03-A: Onde Mary estará no sábado?', ['escola', 'biblioteca', 'casa', 'Kyoto'], 4, 'A tabela preenchida indica Kyoto.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-a-2', 54, 'W03-A: Onde Mary estará no domingo?', ['escola', 'biblioteca', 'Tokyo', 'Osaka'], 2, 'Mary estará na biblioteca.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-a-3', 55, 'W03-A: O que Mary fará no domingo?', ['ler um livro', 'praticar esportes', 'estudar', 'ver um filme'], 4, 'A atividade indicada é ver um filme.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-a-4', 56, 'W03-A: Onde Sora estará no sábado?', ['em casa', 'em Kyoto', 'na escola', 'em Osaka'], 1, 'Sora estará em casa.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-a-5', 57, 'W03-A: O que Sora fará no sábado?', ['ver filme', 'ler livro', 'jantar', 'estudar'], 2, 'Sora lerá um livro.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-a-6', 58, 'W03-A: Onde Sora estará no domingo?', ['Tokyo', 'Kyoto', 'Osaka', 'biblioteca'], 3, 'Sora estará em Osaka.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-a-7', 59, 'W03-A: O que Sora fará no domingo?', ['estudar', 'jantar', 'ler', 'ver filme'], 2, 'Sora jantará.', { audio: audio('W03_A', 'Workbook W03-A - Planos de Mary e Sora') }),
  q('listen-b-1', 60, 'W03-B: atividade das 6:00 A.M.', ['acordar', 'tomar café', 'estudar', 'dormir'], 1, 'Às seis, o grupo acorda.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-2', 61, 'W03-B: atividade das 7:30.', ['almoço', 'café da manhã', 'tênis', 'filme'], 2, 'Às 7h30, tomam café da manhã.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-3', 62, 'W03-B: atividade das 9:00.', ['yoga', 'tênis', 'estudo', 'filme'], 2, 'Às nove, jogam tênis.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-4', 63, 'W03-B: atividade das 12:30 P.M.', ['café', 'almoço', 'jantar', 'estudo'], 2, 'Às 12h30, almoçam.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-5', 64, 'W03-B: atividade das 3:00 P.M.', ['yoga', 'filme', 'jantar', 'dormir'], 1, 'Às três, fazem yoga.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-6', 65, 'W03-B: atividade das 6:00 P.M.', ['café', 'almoço', 'jantar', 'tênis'], 3, 'Às seis, jantam.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-7', 66, 'W03-B: atividade das 7:30 P.M.', ['estudar', 'ver filme', 'yoga', 'dormir'], 2, 'Às 7h30, veem um filme.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-8', 67, 'W03-B: atividade das 11:30 P.M.', ['estudar', 'jantar', 'dormir', 'levantar'], 3, 'Às 11h30, vão dormir.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-b-9', 68, 'W03-B: atividade das 1:30 P.M.', ['estudar', 'jantar', 'ver filme', 'dormir'], 1, 'Às 13h30, o grupo estuda.', { audio: audio('W03_B', 'Workbook W03-B - Programação do acampamento') }),
  q('listen-c-1', 69, 'W03-C: Sora estuda japonês com que frequência?', ['todos os dias', 'frequentemente', 'às vezes', 'nunca'], 1, 'Ela estuda japonês todos os dias.', { audio: audio('W03_C', 'Workbook W03-C - Frequência de Sora') }),
  q('listen-c-2', 70, 'W03-C: Sora vai à biblioteca com que frequência?', ['todos os dias', 'frequentemente', 'não muito', 'nunca'], 2, 'Ela vai frequentemente.', { audio: audio('W03_C', 'Workbook W03-C - Frequência de Sora') }),
  q('listen-c-3', 71, 'W03-C: Sora vê filmes americanos com que frequência?', ['todos os dias', 'frequentemente', 'às vezes', 'não muito'], 2, 'Ela vê filmes americanos frequentemente.', { audio: audio('W03_C', 'Workbook W03-C - Frequência de Sora') }),
  q('listen-c-4', 72, 'W03-C: Sora vê filmes japoneses com que frequência?', ['todos os dias', 'frequentemente', 'às vezes', 'não muito'], 4, 'Ela não vê filmes japoneses com frequência.', { audio: audio('W03_C', 'Workbook W03-C - Frequência de Sora') }),
  q('listen-c-5', 73, 'W03-C: Sora joga tênis com que frequência?', ['todos os dias', 'frequentemente', 'às vezes', 'nunca'], 3, 'Ela joga às vezes.', { audio: audio('W03_C', 'Workbook W03-C - Frequência de Sora') }),
  q('listen-c-6', 74, 'W03-C: Sora toma café com que frequência?', ['todos os dias', 'frequentemente', 'às vezes', 'nunca'], 3, 'Ela toma café às vezes.', { audio: audio('W03_C', 'Workbook W03-C - Frequência de Sora') }),
  q('listen-d-1', 75, 'W03-D: Qual foi a primeira sugestão do homem?', ['café em um café', 'cerveja em um bar', 'café ali', 'almoço'], 1, 'Ele sugeriu tomar café em um café.', { audio: audio('W03_D', 'Workbook W03-D - Convites') }),
  q('listen-d-2', 76, 'W03-D: Que horas eram?', ['8h', '9h', '10h', '11h'], 1, 'Eram oito horas.', { audio: audio('W03_D', 'Workbook W03-D - Convites') }),
  q('listen-d-3', 77, 'W03-D: Por que Mary recusou?', ['precisava voltar para casa e estudar', 'não gostava de café', 'era cedo', 'tinha aula'], 1, 'Ela precisava voltar para casa e estudar.', { audio: audio('W03_D', 'Workbook W03-D - Convites') }),
  q('listen-d-4', 78, 'W03-D: Que outras sugestões ele fez?', ['ler e caminhar', 'praticar japonês no café e almoçar no dia seguinte', 'ver filme e jantar', 'ir à biblioteca'], 2, 'Essas duas sugestões estão marcadas no workbook.', { audio: audio('W03_D', 'Workbook W03-D - Convites') }),
]

const scriptOne: ScriptItem[] = [{ label: '{会話|かいわ} I', setupJa: '{第3課|だいさんか} デートの{約束|やくそく}。{会話|かいわ} I。', setupPt: 'Lição 3 — Marcando um encontro. Diálogo I.', lines: [
  { speaker: 'T', ja: 'メアリーさん、{週末|しゅうまつ}は たいてい {何|なに}を しますか。', pt: 'Mary, o que você costuma fazer no fim de semana?' },
  { speaker: 'M', ja: 'そうですね。たいてい うちで {勉強|べんきょう}します。でも、ときどき {映画|えいが}を {見|み}ます。', pt: 'Bem... geralmente estudo em casa. Mas às vezes vejo filmes.' },
  { speaker: 'T', ja: 'そうですか……。じゃあ、{土曜日|どようび}に {映画|えいが}を {見|み}ませんか。', pt: 'Entendo... Então, quer ver um filme no sábado?' },
  { speaker: 'M', ja: '{土曜日|どようび}は ちょっと……。', pt: 'Sábado é meio complicado...' },
  { speaker: 'T', ja: 'じゃあ、{日曜日|にちようび}は どうですか。', pt: 'Então, que tal domingo?' },
  { speaker: 'M', ja: 'いいですね。', pt: 'Parece ótimo.' },
] }]

const scriptTwo: ScriptItem[] = [{ label: '{会話|かいわ} II', setupJa: '{二|に}。', setupPt: 'Diálogo II.', lines: [
  { speaker: 'M', ja: 'おはようございます。', pt: 'Bom dia.' },
  { speaker: 'H', ja: 'おはよう。{早|はや}いですね。', pt: 'Bom dia. Você está cedo, não é?' },
  { speaker: 'M', ja: 'ええ、{今日|きょう}は {京都|きょうと}に {行|い}きます。{京都|きょうと}で {映画|えいが}を {見|み}ます。', pt: 'Sim, hoje vou a Kyoto. Vou ver um filme em Kyoto.' },
  { speaker: 'H', ja: 'いいですね。{何時|なんじ}ごろ {帰|かえ}りますか。', pt: 'Que bom. Por volta de que horas volta?' },
  { speaker: 'M', ja: '{九時|くじ}ごろです。', pt: 'Por volta das nove.' },
  { speaker: 'H', ja: '{晩ご飯|ばんごはん}は？', pt: 'E o jantar?' },
  { speaker: 'M', ja: '{食|た}べません。', pt: 'Não vou comer.' },
  { speaker: 'H', ja: 'そうですか。じゃあ、いってらっしゃい。', pt: 'Entendo. Então, tenha um bom dia.' },
  { speaker: 'M', ja: 'いってきます。', pt: 'Estou indo e volto.' },
] }]

const dailyRoutineScript: ScriptItem[] = [{
  label: 'II　まいにちのせいかつ',
  setupJa: '{読|よ}み{書|か}き{編|へん} {第3課|だいさんか} II　まいにちのせいかつ。',
  setupPt: 'Seção de leitura e escrita, Lição 3, II — Vida cotidiana.',
  lines: [
    { speaker: 'N', ja: 'わたしは まいにち {七時|しちじ}に おきます。', pt: 'Eu me levanto às sete todos os dias.' },
    { speaker: 'N', ja: 'うちで あさごはんを たべます。', pt: 'Tomo café da manhã em casa.' },
    { speaker: 'N', ja: '{八時|はちじ}に だいがくへ いきます。', pt: 'Vou para a universidade às oito.' },
    { speaker: 'N', ja: '{九時|くじ}に にほんごを べんきょうします。', pt: 'Estudo japonês às nove.' },
    { speaker: 'N', ja: '{十二時半|じゅうにじはん}に だいがくで ひるごはんを たべます。', pt: 'Almoço na universidade às doze e meia.' },
    { speaker: 'N', ja: 'ときどき コーヒーを のみます。', pt: 'Às vezes, tomo café.' },
    { speaker: 'N', ja: '{四時|よじ}に としょかんで ほんを よみます。', pt: 'Às quatro, leio livros na biblioteca.' },
    { speaker: 'N', ja: '{六時|ろくじ}ごろ うちへ かえります。', pt: 'Volto para casa por volta das seis.' },
    { speaker: 'N', ja: '{十時|じゅうじ}に テレビを みます。', pt: 'Assisto à televisão às dez.' },
    { speaker: 'N', ja: '{十二時|じゅうにじ}ごろ ねます。', pt: 'Vou dormir por volta da meia-noite.' },
  ],
}]

type FullAudioTranscript = NonNullable<AudioTrack['transcript']>

function fullTranscript(items: ScriptItem[]): FullAudioTranscript {
  return { kind: 'full', source: 'source-aligned', reviewed: true, items }
}

const fullTranscripts: Partial<Record<string, FullAudioTranscript>> = {
  K03_01: fullTranscript(scriptOne),
  K03_03: fullTranscript(scriptTwo),
  Y03: fullTranscript(dailyRoutineScript),
}

const files = [...Array.from({ length: 15 }, (_, i) => `K03_${String(i + 1).padStart(2, '0')}`), 'Y03', 'W03_A', 'W03_B', 'W03_C', 'W03_D']
const audios: AudioTrack[] = files.map((file) => {
  const transcript = fullTranscripts[file]
  return {
    id: `genki-1-l3-audio-${file.toLowerCase()}`,
    title: file === 'K03_01' ? 'Diálogo I - japonês' : file === 'K03_02' ? 'Diálogo I - apoio em inglês' : file === 'K03_03' ? 'Diálogo II - japonês' : file === 'K03_04' ? 'Diálogo II - apoio em inglês' : file === 'K03_05' ? 'Vocabulário - japonês para inglês' : file === 'K03_06' ? 'Vocabulário - inglês para japonês' : file === 'Y03' ? 'Leitura - Rotina diária' : file.startsWith('W03') ? `Workbook - Compreensão ${file.slice(-1)}` : `Prática do textbook - ${file}`,
    descriptionPt: file === 'Y03' ? 'Leitura em voz alta do texto sobre rotina diária.' : file.startsWith('W03') ? 'Faixa de compreensão oral do workbook.' : 'Faixa correspondente à Lição 3 no textbook.',
    src: `${AUDIO_BASE}/${file}.mp3`,
    script: transcript?.items ?? [],
    transcript,
  }
})

export const genki1Lesson3: Section = {
  id: 'lesson-3', level: 'genki-1', titleJa: '第3課　デートの約束', titlePt: 'Lição 3 - Marcando um encontro',
  summaryPt: 'Verbos no presente, partículas を・で・に・へ, tempo, convites, frequência, rotina diária e kanji numéricos.',
  studyNotes: notes,
  groups: [
    group('dialogue', '会話', 'Compreensão dos diálogos', 'Revise os planos de Mary e Takeshi.', dialogue),
    group('verbs', '文法 1・2', 'Conjugação verbal', 'Classifique e conjugue verbos no presente polido.', verbs),
    group('particles', '文法 3', 'Partículas', 'Escolha a partícula exigida pelo verbo e pela função.', particles),
    group('time-invite-frequency', '文法 4〜8', 'Tempo, convites e frequência', 'Pratique referências de tempo, ませんか e frequência.', timeInviteFrequency),
    group('kanji-reading', '読み書き', 'Kanji e rotina diária', 'Leia kanji numéricos e compreenda o texto da rotina.', kanjiReading),
    group('listening', '聞く練習', 'Compreensão oral do workbook', 'Ouça cada faixa antes de responder; as questões entram no FSRS com áudio.', listening),
  ], audios,
}
