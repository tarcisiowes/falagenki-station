import type { AudioTrack, ExerciseGroup, Level, Question, ScriptItem, StudyNote } from './types'

const AUDIO_BASE = '/audio/genki/genki-1/lesson-1'

function question(
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  options: Partial<Pick<Question, 'context' | 'translationPt' | 'audio' | 'helpPt'>> = {},
): Question {
  return {
    id: `genki-1-l1-${id}`,
    number,
    prompt,
    choices: choices.map((text, index) => ({ n: index + 1, text })),
    answer,
    explanationPt,
    ...options,
  }
}

function group(
  id: string,
  title: string,
  subtitlePt: string,
  instructionPt: string,
  questions: Question[],
  example?: ExerciseGroup['example'],
): ExerciseGroup {
  return {
    id: `genki-1-l1-${id}`,
    title,
    subtitlePt,
    instructionJa: '',
    instructionPt,
    example,
    questions,
  }
}

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos da lição',
    bodyPt: `Ao concluir esta lição, você será capaz de:
- apresentar-se e apresentar outras pessoas;
- perguntar e informar nome, nacionalidade, curso, ano escolar e idade;
- perguntar e dizer horas e números de telefone;
- ligar substantivos com a partícula \`の\`.

O foco é formar frases nominais simples e fazer perguntas básicas com segurança.`,
  },
  {
    title: 'Diálogo 1 — Novos amigos',
    bodyPt: `Takeshi conhece Mary durante a orientação da escola.

- \`こんにちは。きむら たけしです。\` — Olá. Sou Takeshi Kimura.
- \`メアリー・ハートです。あのう、りゅうがくせいですか。\` — Sou Mary Hart. Bem... você é estudante internacional?
- \`いいえ、にほんじんです。\` — Não, sou japonês.
- \`そうですか。なんねんせいですか。\` — Entendo. Em que ano você está?
- \`よねんせいです。\` — Estou no quarto ano.

Em japonês, elementos já claros pelo contexto costumam ser omitidos. Por isso não é necessário repetir “eu” ou “você” em todas as frases.`,
  },
  {
    title: 'Diálogo 2 — Apresentação de Mary',
    bodyPt: `Mary se apresenta ao grupo durante a orientação.

- \`はじめまして。メアリー・ハートです。\` — Muito prazer. Sou Mary Hart.
- \`アリゾナだいがくの がくせいです。にねんせいです。\` — Sou estudante da Universidade do Arizona. Estou no segundo ano.
- \`せんこうは にほんごです。じゅうきゅうさいです。\` — Minha área de estudo é língua japonesa. Tenho 19 anos.
- \`よろしく おねがいします。\` — Prazer em conhecê-los / Conto com vocês.`,
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: `| Japonês | Leitura | Português |
| --- | --- | --- |
| 大学 | だいがく | faculdade; universidade |
| 高校 | こうこう | ensino médio |
| 学生 | がくせい | estudante |
| 大学生 | だいがくせい | universitário(a) |
| 留学生 | りゅうがくせい | estudante internacional |
| 先生 | せんせい | professor(a) |
| 専攻 | せんこう | área de estudo; habilitação |
| 私 | わたし | eu |
| 友達 | ともだち | amigo(a) |
| 日本人 | にほんじん | japonês/japonesa |
| 名前 | なまえ | nome |
| 電話 | でんわ | telefone |
| 番号 | ばんごう | número |
| 何 | なん／なに | o quê; qual |

Sufixos úteis: \`〜じん\` (nacionalidade/povo), \`〜ねんせい\` (ano escolar), \`〜さい\` (idade), \`〜ご\` (idioma), \`〜じ\` (hora) e \`〜ばん\` (número).`,
  },
  {
    title: '1. X は Y です',
    bodyPt: `O padrão \`X は Y です\` identifica ou descreve X: “quanto a X, é Y”. A partícula \`は\` marca o tópico e, nessa função, é pronunciada **wa**.

- \`わたしは がくせいです。\` — Eu sou estudante.
- \`せんこうは にほんごです。\` — Minha área de estudo é japonês.
- \`やましたせんせいは せんせいです。\` — O professor Yamashita é professor.

\`です\` dá polidez à frase nominal. O tópico pode ser omitido quando já estiver claro. Substantivos japoneses normalmente não marcam artigo, gênero ou plural.`,
    helpPt: `Pense em \`は\` como a etiqueta “falando de...”.

\`メアリーさんは がくせいです。\`

1. \`メアリーさんは\` — falando de Mary;
2. \`がくせい\` — estudante;
3. \`です\` — conclusão polida.

Não tente encaixar uma tradução palavra por palavra. Monte primeiro “falando de X” e depois diga o que X é.`,
  },
  {
    title: '2. Frases interrogativas',
    bodyPt: `Acrescente \`か\` ao final de uma afirmação para transformá-la em pergunta.

- \`りゅうがくせいです。\` — É estudante internacional.
- \`りゅうがくせいですか。\` — É estudante internacional?

Palavras interrogativas desta lição:
- \`なんじ\` — que horas;
- \`なんさい\` — quantos anos;
- \`なんねんせい\` — qual ano escolar;
- \`なんばん\` — qual número;
- \`なん／なに\` — o quê/qual.

Use \`なん\` antes de \`です\` e de contadores como \`じ\`. Use \`なに\` antes de partículas.`,
    helpPt: `Atalho prático: forme primeiro a afirmação e acrescente \`か\`.

- afirmação: \`メアリーさんは がくせいです。\`
- pergunta: \`メアリーさんは がくせいですか。\`

Não é preciso inverter a ordem como em português ou inglês. A entonação e o \`か\` já fazem o trabalho.`,
  },
  {
    title: '3. Substantivo 1 の Substantivo 2',
    bodyPt: `A partícula \`の\` liga dois substantivos. O segundo substantivo é a ideia principal; o primeiro a restringe ou especifica.

- \`たけしさんの でんわばんご\` — o número de telefone de Takeshi;
- \`だいがくの せんせい\` — professor de universidade;
- \`にほんごの がくせい\` — estudante de língua japonesa;
- \`にほんの だいがく\` — universidade no Japão.

Uma expressão com \`の\` funciona como um bloco nominal: \`たけしさんの おかあさんは こうこうの せんせいです。\``,
    helpPt: `Leia os blocos com \`の\` da direita para a esquerda.

\`にほんご の がくせい\`

1. ideia principal à direita: \`がくせい\` — estudante;
2. especificação à esquerda: \`にほんご\` — língua japonesa;
3. resultado: estudante de língua japonesa.

Pergunte: “que tipo de Substantivo 2?” A resposta costuma ser o Substantivo 1.`,
  },
  {
    title: 'Notas de uso e cultura',
    bodyPt: `- \`あのう\` introduz uma fala com hesitação ou serve para chamar a atenção com delicadeza.
- \`そうですか\` mostra que você recebeu a informação: “entendo” ou “é mesmo?”.
- \`さん\` acompanha o nome de outra pessoa; não é usado para falar de si mesmo.
- Evite depender de \`あなた\`. Em japonês, é mais natural usar o nome e o título da pessoa, como \`ハートさん\` ou \`やましたせんせい\`.
- Nomes japoneses são tradicionalmente apresentados com o sobrenome antes do nome pessoal.
- \`せんせい\` costuma descrever outra pessoa. Para dizer que você é professor de forma mais neutra, \`きょうし\` é uma alternativa.`,
  },
  {
    title: 'Números e horas',
    bodyPt: `Leituras importantes:

| Número/hora | Leitura |
| --- | --- |
| 1 | いち |
| 4 | よん; hora: よじ |
| 7 | なな; hora: しちじ |
| 8 | はち |
| 9 | きゅう; hora: くじ |
| 10 | じゅう |
| meia hora | はん |

- \`いま なんじですか。\` — Que horas são agora?
- \`いちじはんです。\` — É uma e meia.
- \`ごぜん\` indica A.M.; \`ごご\` indica P.M.

Alguns números mudam de som conforme o contador. Aprenda as formas completas de idade e minutos como unidades, não apenas dígito por dígito.`,
    helpPt: `Treino rápido em três passagens:

1. diga apenas a hora: \`よじ\`;
2. acrescente manhã/tarde: \`ごご よじ\`;
3. transforme em resposta completa: \`ごご よじです。\`

Para telefone, leia um dígito por vez; para idade e hora, memorize a forma junto com o contador.`,
  },
]

const dialogueQuestions = [
  question('dialogue-1', 1, 'メアリーさんは りゅうがくせいですか。', ['はい、そうです。', 'いいえ、にほんじんです。', 'よねんせいです。', 'せんせいです。'], 1, 'Mary acabou de chegar ao Japão como estudante internacional.', { translationPt: 'Mary é estudante internacional?', helpPt: 'Procure primeiro a palavra-chave りゅうがくせい no diálogo. Depois identifique se a resposta de Mary/Takeshi confirma ou nega essa informação.' }),
  question('dialogue-2', 2, 'たけしさんは なんじんですか。', ['アメリカじんです。', 'イギリスじんです。', 'にほんじんです。', 'かんこくじんです。'], 3, 'Takeshi responde 「いいえ、にほんじんです」.', { translationPt: 'Qual é a nacionalidade de Takeshi?' }),
  question('dialogue-3', 3, 'たけしさんは なんねんせいですか。', ['いちねんせいです。', 'にねんせいです。', 'さんねんせいです。', 'よねんせいです。'], 4, 'No diálogo, Takeshi diz 「よねんせいです」.', { translationPt: 'Em que ano da faculdade Takeshi está?' }),
  question('dialogue-4', 4, 'メアリーさんは どこの だいがくの がくせいですか。', ['アリゾナだいがく', 'さくらだいがく', 'ロンドンだいがく', 'ソウルだいがく'], 1, 'Mary diz 「アリゾナだいがくの がくせいです」.', { translationPt: 'Mary é estudante de qual universidade?' }),
  question('dialogue-5', 5, 'メアリーさんは なんねんせいですか。', ['いちねんせい', 'にねんせい', 'さんねんせい', 'よねんせい'], 2, 'Mary se apresenta como estudante do segundo ano: 「にねんせいです」.', { translationPt: 'Em que ano Mary está?' }),
  question('dialogue-6', 6, 'メアリーさんの せんこうは なんですか。', ['れきし', 'ビジネス', 'にほんご', 'コンピューター'], 3, 'Mary informa 「せんこうは にほんごです」.', { translationPt: 'Qual é a área de estudo de Mary?' }),
  question('dialogue-7', 7, 'メアリーさんは なんさいですか。', ['じゅうはっさい', 'じゅうきゅうさい', 'はたち', 'にじゅういっさい'], 2, 'Mary diz 「じゅうきゅうさいです」: ela tem 19 anos.', { translationPt: 'Quantos anos Mary tem?' }),
  question('dialogue-8', 8, '「よろしく おねがいします」は いつ つかいますか。', ['Ao iniciar uma refeição', 'Ao se apresentar e criar uma relação', 'Ao voltar para casa', 'Ao perguntar as horas'], 2, 'A expressão encerra uma apresentação de modo cortês, transmitindo “prazer em conhecê-lo(a)” ou “conto com você”.'),
]

const vocabularyQuestions = [
  question('vocabulary-1', 9, '「りゅうがくせい」の いみは なんですか。', ['professor', 'estudante internacional', 'universitário', 'aluno do ensino médio'], 2, '「留学生（りゅうがくせい）」 significa estudante internacional.'),
  question('vocabulary-2', 10, '「せんこう」の いみは なんですか。', ['nome', 'número', 'área de estudo', 'idioma'], 3, '「専攻（せんこう）」 é a área principal de estudo ou habilitação.'),
  question('vocabulary-3', 11, 'Qual palavra significa “amigo(a)”?', ['ともだち', 'がくせい', 'せんせい', 'なまえ'], 1, '「友達（ともだち）」 significa amigo ou amiga.'),
  question('vocabulary-4', 12, 'Qual palavra significa “nome”?', ['でんわ', 'ばんごう', 'なまえ', 'いま'], 3, '「名前（なまえ）」 significa nome.'),
  question('vocabulary-5', 13, '「にほんご」の 「ご」は o quê?', ['ano escolar', 'nacionalidade', 'idioma', 'idade'], 3, 'O sufixo 「〜ご」 forma nomes de idiomas, como 「にほんご」.'),
  question('vocabulary-6', 14, '「アメリカじん」の 「じん」は o quê?', ['pessoa/nacionalidade', 'profissão', 'universidade', 'hora'], 1, 'O sufixo 「〜じん」 indica uma pessoa ou nacionalidade.'),
  question('vocabulary-7', 15, '「でんわばんごう」の いみは なんですか。', ['nome completo', 'número de telefone', 'número da sala', 'horário da aula'], 2, '「電話番号（でんわばんごう）」 é número de telefone.'),
  question('vocabulary-8', 16, 'Qual palavra significa “agora”?', ['ごぜん', 'ごご', 'いま', 'はん'], 3, '「今（いま）」 significa agora.'),
  question('vocabulary-9', 17, '「かいしゃいん」の いみは なんですか。', ['médico', 'enfermeiro', 'funcionário de empresa', 'advogado'], 3, '「会社員（かいしゃいん）」 é funcionário(a) de empresa.'),
  question('vocabulary-10', 18, '「だいがくいんせい」の いみは なんですか。', ['aluno do ensino médio', 'estudante de pós-graduação', 'universitário do primeiro ano', 'professor universitário'], 2, '「大学院生（だいがくいんせい）」 é estudante de pós-graduação.'),
  question('vocabulary-11', 19, 'Qual palavra significa “irmã mais nova”?', ['おねえさん', 'おにいさん', 'いもうと', 'おとうと'], 3, '「いもうと」 significa irmã mais nova.'),
  question('vocabulary-12', 20, 'Qual palavra significa “irmão mais novo”?', ['おねえさん', 'おにいさん', 'いもうと', 'おとうと'], 4, '「おとうと」 significa irmão mais novo.'),
]

const desuQuestions = [
  question('desu-1', 21, 'おがわさん（　）にほんじんです。', ['が', 'は', 'の', 'か'], 2, '「は」 marca Ogawa como tópico: “Quanto à Sra. Ogawa, ela é japonesa”.', { helpPt: 'Leia em dois blocos: おがわさんは = “falando da Sra. Ogawa”; にほんじんです = “é japonesa”.' }),
  question('desu-2', 22, 'たけださんは（　）です。', ['せんせい', 'せんこう', 'にほんご', 'なんじ'], 1, 'Para dizer “O Sr. Takeda é professor”, use 「せんせいです」.'),
  question('desu-3', 23, '“Eu sou estudante internacional.”', ['わたしは りゅうがくせいです。', 'わたしの りゅうがくせいです。', 'わたしは りゅうがくせいですか。', 'りゅうがくせいは わたしですか。'], 1, 'A afirmação segue o padrão X は Y です.'),
  question('desu-4', 24, '“Haruna é aluna do primeiro ano.”', ['はるなさんは いちねんせいです。', 'はるなさんの いちねんせいです。', 'はるなさんは いちねんせいですか。', 'はるなさんは いちじです。'], 1, '「いちねんせい」 significa estudante do primeiro ano.'),
  question('desu-5', 25, '“A Sra. Yamamoto tem 25 anos.”', ['やまもとさんは にじゅうごじです。', 'やまもとさんは にじゅうごさいです。', 'やまもとさんの にじゅうごさいです。', 'やまもとさんは ごねんせいです。'], 2, 'Idade usa o contador 「〜さい」: 25 anos é 「にじゅうごさい」.'),
  question('desu-6', 26, 'やましたせんせいは よんじゅうななさいです。', ['O professor Yamashita tem 47 anos.', 'O professor Yamashita é do quarto ano.', 'A aula de Yamashita é às 7:40.', 'Yamashita é professor há 47 anos.'], 1, '「よんじゅうななさい」 significa 47 anos.'),
  question('desu-7', 27, 'ロバートさんは イギリスじんです。', ['Robert é estudante na Inglaterra.', 'Robert é britânico.', 'Robert estuda inglês.', 'Robert é professor britânico.'], 2, '「イギリスじん」 indica nacionalidade britânica.'),
  question('desu-8', 28, 'ソラさんは さんねんせいです。', ['Sora tem três anos.', 'Sora estuda três idiomas.', 'Sora está no terceiro ano.', 'Sora chega às três.'], 3, '「さんねんせい」 significa estudante do terceiro ano.'),
]

const questionSentenceQuestions = [
  question('questions-1', 29, 'メアリーさんは いちねんせい（　）。', ['です', 'ですか', 'のです', 'はです'], 2, 'A partícula final 「か」 transforma a frase em pergunta.'),
  question('questions-2', 30, 'A: メアリーさんは いちねんせいですか。 B:（　）、にねんせいです。', ['はい', 'そうです', 'いいえ', 'あのう'], 3, 'Mary não está no primeiro ano; a resposta negativa começa com 「いいえ」.'),
  question('questions-3', 31, 'A: やましたせんせいは（　）ですか。 B: よんじゅうななさいです。', ['なんじん', 'なんさい', 'なんねんせい', 'なんばん'], 2, 'A resposta é uma idade, portanto a pergunta usa 「なんさい」.', { helpPt: 'Use a resposta como pista: o final 〜さい conta anos de idade. A palavra interrogativa deve pedir exatamente essa unidade.' }),
  question('questions-4', 32, 'A: いま（　）ですか。 B: くじです。', ['なんじ', 'なんさい', 'なんばん', 'なにご'], 1, 'Para perguntar as horas, use 「いま なんじですか」.'),
  question('questions-5', 33, 'A: せんこうは（　）ですか。 B: えいごです。', ['なに', 'なんじ', 'なんさい', 'なんねんせい'], 1, '「なに」 aparece antes da partícula 「は」: “Qual é a sua área de estudo?”.'),
  question('questions-6', 34, 'A: なんねんせいですか。 B:（　）。', ['じゅうきゅうさいです', 'にほんじんです', 'にねんせいです', 'にじはんです'], 3, '「なんねんせい」 pergunta o ano escolar; 「にねんせい」 é segundo ano.'),
  question('questions-7', 35, 'A: でんわばんごうは なんばんですか。 B:（　）。', ['にねんせいです', '867-5309です', 'にほんごです', 'くじです'], 2, '「なんばん」 pede um número; aqui, o número de telefone.'),
  question('questions-8', 36, '「そうですか」 expressa principalmente:', ['negação direta', 'confirmação de que entendeu', 'pedido de desculpas', 'agradecimento'], 2, '「そうですか」 reconhece a informação recebida: “entendo” ou “é mesmo?”.'),
]

const noQuestions = [
  question('no-1', 37, '“o número de telefone de Takeshi”', ['たけしさんは でんわばんごう', 'たけしさんの でんわばんごう', 'でんわばんごうの たけしさん', 'たけしさんか でんわばんごう'], 2, 'O possuidor/especificador vem antes de 「の」: 「たけしさんの でんわばんごう」.', { helpPt: 'Comece pela ideia principal à direita: でんわばんごう (número de telefone). Depois acrescente “de Takeshi” à esquerda com の.' }),
  question('no-2', 38, '“meu amigo/minha amiga”', ['わたしは ともだち', 'わたしの ともだち', 'ともだちの わたし', 'わたしか ともだち'], 2, '「わたしの ともだち」 liga “eu” a “amigo” com 「の」.'),
  question('no-3', 39, '“professor de inglês”', ['えいごの せんせい', 'せんせいの えいご', 'えいごは せんせい', 'えいごか せんせい'], 1, 'O tipo de professor restringe a ideia principal: 「えいごの せんせい」.'),
  question('no-4', 40, '“área de estudo de Yui”', ['ゆいさんは せんこう', 'ゆいさんの せんこう', 'せんこうの ゆいさん', 'ゆいさんか せんこう'], 2, '「ゆいさんの せんこう」 significa a área de estudo de Yui.'),
  question('no-5', 41, '“professor do ensino médio”', ['こうこうの せんせい', 'せんせいの こうこう', 'こうこうは せんせい', 'こうこうか せんせい'], 1, 'A ideia principal é 「せんせい」, especificada por 「こうこう」.'),
  question('no-6', 42, 'わたしの せんこうは にほんごです。', ['Meu professor é japonês.', 'Minha universidade fica no Japão.', 'Minha área de estudo é japonês.', 'Eu sou professor de japonês.'], 3, '「わたしの せんこう」 é “minha área de estudo”.'),
  question('no-7', 43, 'わたしは にほんだいがくの がくせいです。', ['Sou professor da Universidade Nihon.', 'Sou estudante da Universidade Nihon.', 'Sou estudante japonês.', 'Minha área é universidade japonesa.'], 2, '「にほんだいがくの がくせい」 é estudante da Universidade Nihon.'),
  question('no-8', 44, 'たけしさんは さくらだいがくの がくせいですか。', ['Takeshi é professor da Universidade Sakura?', 'Takeshi é estudante da Universidade Sakura?', 'A universidade de Takeshi é Sakura?', 'Takeshi estuda língua japonesa?'], 2, 'A expressão 「さくらだいがくの がくせい」 forma o predicado nominal “estudante da Universidade Sakura”.'),
]

const numberTimeQuestions = [
  question('number-1', 45, 'よんじゅう', ['14', '40', '44', '400'], 2, '「よんじゅう」 é 4 × 10 = 40.'),
  question('number-2', 46, 'ひゃくろくじゅうよん', ['146', '164', '614', '1.064'], 2, '「ひゃく」 (100) + 「ろくじゅう」 (60) + 「よん」 (4) = 164.'),
  question('number-3', 47, 'ごぜん くじ', ['9:00 A.M.', '9:00 P.M.', '5:09 A.M.', '5:09 P.M.'], 1, '「ごぜん」 é A.M. e 「くじ」 é nove horas.'),
  question('number-4', 48, 'ごご じゅうにじはん', ['12:00 P.M.', '12:30 P.M.', '2:30 P.M.', '10:20 P.M.'], 2, '「ごご」 é P.M.; 「じゅうにじはん」 é 12:30.'),
  question('number-5', 49, '4:00', ['よんじ', 'よじ', 'しじ', 'よんじはん'], 2, 'Para a hora quatro, a leitura especial é 「よじ」.', { helpPt: 'Memorize 4:00 como uma única unidade sonora: よじ. Evite montar automaticamente よん + じ.' }),
  question('number-6', 50, '7:00', ['ななじ', 'しちじ', 'ななじはん', 'しじ'], 2, 'Para a hora sete, usa-se 「しちじ」.'),
  question('number-7', 51, '9:00', ['きゅうじ', 'くじ', 'きゅうじはん', 'ここのじ'], 2, 'Para a hora nove, usa-se 「くじ」.'),
  question('number-8', 52, 'いま なんじですか。', ['Qual é o seu número?', 'Quantos anos você tem?', 'Que horas são agora?', 'Em que ano você está?'], 3, '「いま」 é agora e 「なんじ」 pergunta a hora.'),
]

const listeningAudio = (file: string, title: string) => ({ src: `${AUDIO_BASE}/${file}.mp3`, title })

const listeningQuestions = [
  question('listening-b-1', 53, 'W01-B, item 1: パリは なんじですか。', ['ごぜん よじ', 'ごご よじ', 'ごぜん はちじ', 'ごご はちじ'], 1, 'No diálogo, o horário de Paris é 4:00 A.M.', { audio: listeningAudio('W01_B', 'Workbook W01-B — Horários internacionais'), helpPt: 'Na primeira escuta, procure apenas パリ. Na segunda, capture ごぜん/ごご e a hora. Use a velocidade 0,75× se precisar separar os blocos.' }),
  question('listening-b-2', 54, 'W01-B, item 2: ソウルは なんじですか。', ['ごぜん くじ', 'ごご くじ', 'ごぜん しちじ', 'ごご しちじ'], 2, 'No diálogo, o horário de Seul é 9:00 P.M.', { audio: listeningAudio('W01_B', 'Workbook W01-B — Horários internacionais') }),
  question('listening-b-3', 55, 'W01-B, item 3: ニューヨークは なんじですか。', ['ごぜん いちじ', 'ごご いちじ', 'ごぜん さんじ', 'ごご さんじ'], 2, 'No diálogo, o horário de Nova York é 1:00 P.M.', { audio: listeningAudio('W01_B', 'Workbook W01-B — Horários internacionais') }),
  question('listening-b-4', 56, 'W01-B, item 4: ロンドンは なんじですか。', ['ごぜん しちじ', 'ごぜん しちじはん', 'ごご しちじ', 'ごご しちじはん'], 2, 'No diálogo, o horário de Londres é 7:30 A.M.', { audio: listeningAudio('W01_B', 'Workbook W01-B — Horários internacionais') }),
  question('listening-b-5', 57, 'W01-B, item 5: タイペイは なんじですか。', ['ごぜん じゅういちじ', 'ごご じゅういちじ', 'ごぜん いちじ', 'ごご いちじ'], 1, 'No diálogo, o horário de Taipei é 11:00 A.M.', { audio: listeningAudio('W01_B', 'Workbook W01-B — Horários internacionais') }),
  question('listening-b-6', 58, 'W01-B, item 6: シドニーは なんじですか。', ['ごぜん さんじ', 'ごぜん さんじはん', 'ごご さんじ', 'ごご さんじはん'], 4, 'No diálogo, o horário de Sydney é 3:30 P.M.', { audio: listeningAudio('W01_B', 'Workbook W01-B — Horários internacionais') }),
  question('listening-c-1', 59, 'W01-C, item 1: かわさきさんの でんわばんごうは なんばんですか。', ['905-0877', '950-0877', '905-0787', '509-8077'], 1, 'O número informado para Kawasaki é 905-0877.', { audio: listeningAudio('W01_C', 'Workbook W01-C — Números de telefone') }),
  question('listening-c-2', 60, 'W01-C, item 2: リーさんの でんわばんごうは なんばんですか。', ['59341026', '53941026', '59340126', '59341206'], 1, 'O número informado para Lee é 59341026.', { audio: listeningAudio('W01_C', 'Workbook W01-C — Números de telefone') }),
  question('listening-c-3', 61, 'W01-C, item 3: ウッズさんの でんわばんごうは なんばんですか。', ['491509', '419509', '491059', '495109'], 1, 'O número informado para Woods é 491509.', { audio: listeningAudio('W01_C', 'Workbook W01-C — Números de telefone') }),
  question('listening-c-4', 62, 'W01-C, item 4: クマールさんの でんわばんごうは なんばんですか。', ['67823333', '68723333', '67832333', '67823313'], 1, 'O número informado para Kumar é 67823333.', { audio: listeningAudio('W01_C', 'Workbook W01-C — Números de telefone') }),
  question('listening-d-1', 63, 'W01-D, item 1: アキラさんは いちねんせいです。', ['○ — verdadeiro', '× — falso'], 1, 'A afirmação é verdadeira.', { audio: listeningAudio('W01_D', 'Workbook W01-D — Akira e Kate') }),
  question('listening-d-2', 64, 'W01-D, item 2: アキラさんは アメリカだいがくの がくせいです。', ['○ — verdadeiro', '× — falso'], 2, 'A afirmação é falsa.', { audio: listeningAudio('W01_D', 'Workbook W01-D — Akira e Kate') }),
  question('listening-d-3', 65, 'W01-D, item 3: アキラさんの せんこうは れきしです。', ['○ — verdadeiro', '× — falso'], 2, 'A afirmação é falsa.', { audio: listeningAudio('W01_D', 'Workbook W01-D — Akira e Kate') }),
  question('listening-d-4', 66, 'W01-D, item 4: ケイトさんは にねんせいです。', ['○ — verdadeiro', '× — falso'], 2, 'A afirmação é falsa.', { audio: listeningAudio('W01_D', 'Workbook W01-D — Akira e Kate') }),
  question('listening-d-5', 67, 'W01-D, item 5: ケイトさんの せんこうは にほんごです。', ['○ — verdadeiro', '× — falso'], 1, 'A afirmação é verdadeira.', { audio: listeningAudio('W01_D', 'Workbook W01-D — Akira e Kate') }),
]

const dialogueOneScript: ScriptItem[] = [
  {
    label: '会話 I',
    lines: [
      { speaker: 'T', ja: 'こんにちは。きむら たけしです。', pt: 'Olá. Sou Takeshi Kimura.' },
      { speaker: 'M', ja: 'メアリー・ハートです。あのう、りゅうがくせいですか。', pt: 'Sou Mary Hart. Bem... você é estudante internacional?' },
      { speaker: 'T', ja: 'いいえ、にほんじんです。', pt: 'Não, sou japonês.' },
      { speaker: 'M', ja: 'そうですか。なんねんせいですか。', pt: 'Entendo. Em que ano você está?' },
      { speaker: 'T', ja: 'よねんせいです。', pt: 'Estou no quarto ano.' },
    ],
  },
]

const dialogueTwoScript: ScriptItem[] = [
  {
    label: '会話 II',
    lines: [
      { speaker: 'M', ja: 'はじめまして。メアリー・ハートです。', pt: 'Muito prazer. Sou Mary Hart.' },
      { speaker: 'M', ja: 'アリゾナだいがくの がくせいです。にねんせいです。', pt: 'Sou estudante da Universidade do Arizona. Estou no segundo ano.' },
      { speaker: 'M', ja: 'せんこうは にほんごです。じゅうきゅうさいです。', pt: 'Minha área de estudo é língua japonesa. Tenho 19 anos.' },
      { speaker: 'M', ja: 'よろしく おねがいします。', pt: 'Prazer em conhecê-los / Conto com vocês.' },
    ],
  },
]

const audioLabels: Array<[string, string, string]> = [
  ['K01_01', 'Diálogo I — japonês', 'Diálogo entre Takeshi e Mary durante a orientação.'],
  ['K01_02', 'Diálogo I — apoio em inglês', 'Versão de apoio do primeiro diálogo.'],
  ['K01_03', 'Diálogo II — japonês', 'Apresentação de Mary ao grupo.'],
  ['K01_04', 'Diálogo II — apoio em inglês', 'Versão de apoio da apresentação de Mary.'],
  ['K01_05', 'Vocabulário principal — japonês para inglês', 'Vocabulário da lição na ordem do livro.'],
  ['K01_06', 'Vocabulário principal — inglês para japonês', 'Prática inversa do vocabulário principal.'],
  ['K01_07', 'Vocabulário adicional — japonês para inglês', 'Países, áreas de estudo, ocupações e família.'],
  ['K01_08', 'Vocabulário adicional — inglês para japonês', 'Prática inversa do vocabulário adicional.'],
  ['K01_09', 'Prática I-A — nacionalidades', 'Descreva a nacionalidade das personagens.'],
  ['K01_10', 'Prática I-B — ano escolar', 'Diga em que ano escolar cada pessoa está.'],
  ['K01_11', 'Prática I-C — idades', 'Pratique as leituras de idade.'],
  ['K01_12', 'Prática II-A — perguntas sim/não', 'Faça e responda perguntas com ですか.'],
  ['K01_13', 'Prática II-B — idade', 'Pergunte e responda a idade das personagens.'],
  ['K01_14', 'Prática II-B — ano escolar', 'Pergunte e responda o ano escolar.'],
  ['K01_15', 'Prática II-C — família anfitriã', 'Compreensão sobre a família anfitriã de Mary.'],
  ['K01_16', 'Prática III-A — partícula の', 'Tradução de expressões nominais com の.'],
  ['K01_17', 'Prática III-B — universidade', 'Descreva a universidade de cada personagem.'],
  ['K01_18', 'Prática III-B — área de estudo', 'Descreva a área de estudo das personagens.'],
  ['K01_19', 'Prática III-C — perguntas de compreensão', 'Responda às perguntas sobre as personagens.'],
  ['K01_20', 'Prática IV — números de telefone', 'Modelo de diálogo para perguntar números de telefone.'],
  ['K01_21', 'Prática V — horas', 'Leituras básicas das horas.'],
  ['K01_22', 'Prática V-A — diga as horas', 'Identifique e diga os horários mostrados.'],
  ['K01_23', 'Prática V-C — horários no mundo', 'Pergunte as horas em diferentes cidades.'],
  ['K01_24', 'Revisão da lição', 'Modelo para entrevistas e apresentações pessoais.'],
  ['W01_A', 'Workbook A — cumprimentos', 'Associe as expressões ouvidas às situações ilustradas no workbook.'],
  ['W01_B', 'Workbook B — horários internacionais', 'Ouça os diálogos no avião e identifique o horário de cada cidade.'],
  ['W01_C', 'Workbook C — números de telefone', 'Ouça a telefonista e anote os números pedidos.'],
  ['W01_D', 'Workbook D — Akira e Kate', 'Ouça a conversa e julgue as afirmações como verdadeiras ou falsas.'],
]

const audios: AudioTrack[] = audioLabels.map(([file, title, descriptionPt]) => ({
  id: `genki-1-l1-audio-${file.toLowerCase()}`,
  title,
  descriptionPt,
  src: `${AUDIO_BASE}/${file}.mp3`,
  script: file === 'K01_01' ? dialogueOneScript : file === 'K01_03' ? dialogueTwoScript : [],
}))

export const genki1: Level = {
  id: 'genki-1',
  courseId: 'genki',
  titlePt: 'Genki I — 3ª edição',
  descriptionPt: 'Curso iniciante integrado com explicações em português, exercícios interativos, compreensão oral e revisão FSRS estilo Anki.',
  sections: [
    {
      id: 'lesson-1',
      level: 'genki-1',
      titleJa: '第1課　あたらしいともだち',
      titlePt: 'Lição 1 — Novos amigos',
      summaryPt: 'Apresentações, frases nominais com です, perguntas com か, partícula の, números, idade, telefone e horas.',
      studyNotes,
      groups: [
        group('dialogue', '会話', 'Compreensão dos diálogos', 'Revise as duas conversas principais e escolha a resposta correta.', dialogueQuestions),
        group('vocabulary', '単語', 'Vocabulário', 'Consolide o vocabulário principal e adicional da lição.', vocabularyQuestions),
        group('desu', '文法 1', 'X は Y です', 'Complete ou interprete frases nominais com は e です.', desuQuestions, {
          prompt: 'メアリーさんは アメリカじんです。',
          choices: [{ n: 1, text: 'Mary é americana.' }, { n: 2, text: 'Mary está nos Estados Unidos.' }],
          answer: 1,
          note: 'O padrão identifica Mary pela nacionalidade.',
          helpPt: 'Separe em メアリーさんは (“falando de Mary”) + アメリカじんです (“é americana”).',
        }),
        group('questions', '文法 2', 'Frases interrogativas', 'Pratique か e as palavras interrogativas desta lição.', questionSentenceQuestions),
        group('no', '文法 3', 'Substantivo 1 の Substantivo 2', 'Ligue substantivos com の e identifique a ideia principal.', noQuestions),
        group('numbers-time', '数字・時間', 'Números e horas', 'Pratique leituras de números, idade e horários.', numberTimeQuestions),
        group('listening', '聞く練習', 'Compreensão oral do workbook', 'Ouça a faixa indicada em cada cartão antes de responder. As mesmas questões também aparecem com áudio na revisão FSRS.', listeningQuestions),
      ],
      audios,
    },
  ],
}
