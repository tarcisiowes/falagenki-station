import type { AudioTrack, ExerciseGroup, Question, ScriptItem } from './types'

const AUDIO_BASE = '/audio/genki/genki-1/lesson-1'

type QuestionOptions = Partial<Pick<Question, 'context' | 'translationPt' | 'helpPt' | 'assessment'>>

let nextQuestionNumber = 1

function trackId(code: string): string {
  return `genki-1-l1-audio-${code.toLowerCase()}`
}

function audioRef(code: string, title: string): NonNullable<Question['audio']> {
  return {
    trackId: trackId(code),
    src: `${AUDIO_BASE}/${code}.mp3`,
    title,
  }
}

function question(
  id: string,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  code: string,
  audioTitle: string,
  options: QuestionOptions = {},
): Question {
  return {
    id: `genki-1-l1-writing-${id}`,
    number: nextQuestionNumber++,
    prompt,
    audio: audioRef(code, audioTitle),
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
): ExerciseGroup {
  return {
    id: `genki-1-l1-writing-${id}`,
    title,
    subtitlePt,
    instructionJa: '',
    instructionPt,
    questions,
  }
}

const textbookA = [
  question(
    'y01-a-1',
    'Y01-A, item 1: qual hiragana representa o som “yo”?',
    ['ま', 'よ'],
    2,
    'O som “yo” é escrito 「よ」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
    { helpPt: 'Ouça primeiro sem olhar as opções; depois compare a forma e o som de 「ま」 e 「よ」.' },
  ),
  question(
    'y01-a-2',
    'Y01-A, item 2: qual hiragana representa o som “ho”?',
    ['は', 'ほ'],
    2,
    'O som “ho” é escrito 「ほ」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
    { helpPt: 'Observe que 「ほ」 tem um traço vertical a mais do que 「は」.' },
  ),
  question(
    'y01-a-3',
    'Y01-A, item 3: qual hiragana representa o som “me”?',
    ['ぬ', 'め'],
    2,
    'O som “me” é escrito 「め」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
    { helpPt: 'Compare o final: 「ぬ」 fecha com uma volta; 「め」 termina sem fechar essa volta.' },
  ),
  question(
    'y01-a-4',
    'Y01-A, item 4: qual hiragana representa o som “su”?',
    ['む', 'す'],
    2,
    'O som “su” é escrito 「す」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
  ),
  question(
    'y01-a-5',
    'Y01-A, item 5: qual hiragana representa o som “ki”?',
    ['さ', 'き'],
    2,
    'O som “ki” é escrito 「き」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
  ),
  question(
    'y01-a-6',
    'Y01-A, item 6: qual hiragana representa o som “chi”?',
    ['さ', 'ち'],
    2,
    'O som “chi” é escrito 「ち」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
  ),
  question(
    'y01-a-7',
    'Y01-A, item 7: qual hiragana representa o som “ta”?',
    ['た', 'に'],
    1,
    'O som “ta” é escrito 「た」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
  ),
  question(
    'y01-a-8',
    'Y01-A, item 8: qual hiragana representa o som “ro”?',
    ['ろ', 'る'],
    1,
    'O som “ro” é escrito 「ろ」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
  ),
  question(
    'y01-a-9',
    'Y01-A, item 9: qual hiragana representa o som “e”?',
    ['え', 'ん'],
    1,
    'O som “e” é escrito 「え」.',
    'Y01_1',
    'Y01-1 — Escolha do hiragana',
  ),
]

const personNames = ['Sakuma', 'Tanaka', 'Morikawa', 'Takahashi', 'Yamamoto']
const placeNames = ['Morioka', 'Yokohama', 'Mito', 'Okayama', 'Kumamoto']

const textbookB = [
  question('y01-b-1', 'Associe 「たなか」 à leitura em alfabeto latino.', personNames, 2, '「たなか」 corresponde a Tanaka.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-2', 'Associe 「やまもと」 à leitura em alfabeto latino.', personNames, 5, '「やまもと」 corresponde a Yamamoto.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-3', 'Associe 「さくま」 à leitura em alfabeto latino.', personNames, 1, '「さくま」 corresponde a Sakuma.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-4', 'Associe 「たかはし」 à leitura em alfabeto latino.', personNames, 4, '「たかはし」 corresponde a Takahashi.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-5', 'Associe 「もりかわ」 à leitura em alfabeto latino.', personNames, 3, '「もりかわ」 corresponde a Morikawa.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-6', 'Associe 「くまもと」 ao nome de lugar em alfabeto latino.', placeNames, 5, '「くまもと」 corresponde a Kumamoto.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-7', 'Associe 「おかやま」 ao nome de lugar em alfabeto latino.', placeNames, 4, '「おかやま」 corresponde a Okayama.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-8', 'Associe 「もりおか」 ao nome de lugar em alfabeto latino.', placeNames, 1, '「もりおか」 corresponde a Morioka.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-9', 'Associe 「よこはま」 ao nome de lugar em alfabeto latino.', placeNames, 2, '「よこはま」 corresponde a Yokohama.', 'Y01_2', 'Y01-2 — Associação de nomes'),
  question('y01-b-10', 'Associe 「みと」 ao nome de lugar em alfabeto latino.', placeNames, 3, '「みと」 corresponde a Mito.', 'Y01_2', 'Y01-2 — Associação de nomes'),
]

const textbookC = [
  question('y01-c-1', 'Y01-C, item 1: escolha a escrita correta de ichigo (morango).', ['いちこ', 'いちご', 'いぢご', 'いぢこ'], 2, 'Ichigo é escrito 「いちご」; o dakuten transforma こ em ご.', 'Y01_3', 'Y01-3 — Dakuten e handakuten'),
  question('y01-c-2', 'Y01-C, item 2: escolha a escrita correta de dango (bolinho).', ['たんこ', 'だんこ', 'たんご', 'だんご'], 4, 'Dango é escrito 「だんご」; た e こ recebem dakuten.', 'Y01_3', 'Y01-3 — Dakuten e handakuten'),
  question('y01-c-3', 'Y01-C, item 3: escolha a escrita correta de zabuton (almofada).', ['さふとん', 'ざふとん', 'さぶとん', 'ざぶとん'], 4, 'Zabuton é escrito 「ざぶとん」; さ→ざ e ふ→ぶ.', 'Y01_3', 'Y01-3 — Dakuten e handakuten'),
  question('y01-c-4', 'Y01-C, item 4: escolha a escrita correta de gaikokujin (estrangeiro).', ['かいこくしん', 'がいこくじん', 'かいごくじん', 'がいごくしん'], 2, 'Gaikokujin é escrito 「がいこくじん」.', 'Y01_3', 'Y01-3 — Dakuten e handakuten'),
  question('y01-c-5', 'Y01-C, item 5: escolha a escrita correta de tanpopo (dente-de-leão).', ['たんほほ', 'だんぽぽ', 'たんぼぼ', 'たんぽぽ'], 4, 'Tanpopo é escrito 「たんぽぽ」; o handakuten transforma ほ em ぽ.', 'Y01_3', 'Y01-3 — Dakuten e handakuten'),
  question('y01-c-6', 'Y01-C, item 6: escolha a escrita correta de ganpeki (penhasco).', ['かんへき', 'がんべき', 'がんぺき', 'かんぺぎ'], 3, 'Ganpeki é escrito 「がんぺき」; が recebe dakuten e ぺ recebe handakuten.', 'Y01_3', 'Y01-3 — Dakuten e handakuten'),
]

const textbookD = [
  question('y01-d-1', 'Qual escrita corresponde a shashin (fotografia)?', ['しゃしん', 'しゅしん'], 1, 'Shashin é escrito 「しゃしん」.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-2', 'Qual escrita corresponde a dokusho (leitura)?', ['どくしゅ', 'どくしょ'], 2, 'Dokusho é escrito 「どくしょ」.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-3', 'Qual escrita corresponde a kyori (distância)?', ['きょり', 'きより'], 1, 'Kyori é escrito 「きょり」, com 「ょ」 pequeno.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-4', 'Qual escrita corresponde a hiyasu (resfriar)?', ['ひゃす', 'ひやす'], 2, 'Hiyasu é escrito 「ひやす」, com 「や」 de tamanho normal.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-5', 'Qual escrita corresponde a chairo (marrom)?', ['ちゃいろ', 'ちやいろ'], 1, 'Chairo é escrito 「ちゃいろ」, com 「ゃ」 pequeno.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-6', 'Qual escrita corresponde a onna no hito (mulher)?', ['おんなのひと', 'おったのひと'], 1, 'Onna no hito é escrito 「おんなのひと」.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-7', 'Qual escrita corresponde a kitte (selo postal)?', ['きて', 'きって'], 2, 'Kitte é escrito 「きって」, com 「っ」 pequeno.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
  question('y01-d-8', 'Qual escrita corresponde a motto (mais)?', ['もっと', 'もつと'], 1, 'Motto é escrito 「もっと」, com 「っ」 pequeno.', 'Y01_4', 'Y01-4 — Hiragana correspondente'),
]

const longVowelPairs = [
  { id: 1, pair: 'おばさん — おばあさん', meanings: 'tia — avó' },
  { id: 2, pair: 'おじいさん — おじさん', meanings: 'avô — tio' },
  { id: 3, pair: 'しゅじん — しゅうじん', meanings: 'marido — prisioneiro' },
  { id: 4, pair: 'おや — おおや', meanings: 'pai/mãe — proprietário do imóvel' },
  { id: 5, pair: 'せいき — せき', meanings: 'século — assento' },
]

const textbookE = longVowelPairs.map(({ id, pair, meanings }) => question(
  `y01-e-${id}`,
  `Y01-E, par ${id}: ouça 「${pair}」, pause e leia as duas formas. Como foi sua tentativa?`,
  [
    'Ainda não distingui ou reproduzi a duração das vogais; preciso repetir.',
    'Distingui as duas formas e consegui lê-las acompanhando a duração do áudio.',
  ],
  2,
  `Autoavaliação de pronúncia. O par contrasta “${meanings}”. Marque a segunda opção somente se a duração vocálica ficou audível na sua leitura.`,
  'Y01_5',
  'Y01-5 — Contraste de vogais longas',
  {
    assessment: 'self-check',
    context: 'A vogal longa pode mudar a palavra. Leia primeiro sem imitar; depois repita junto da gravação.',
    helpPt: 'Use o loop A-B no par, bata um pulso para cada mora e não transforme a vogal longa apenas em maior volume.',
  },
))

const introductionNames = ['Tanaka Mai', 'Harada Ryō', 'Katō Yūto', 'Kitano Hiromi', 'Yamada Makoto']

const textbookReading = [
  question('y01-reading-1', 'Segundo as apresentações, quem trabalha em uma empresa?', introductionNames, 1, 'Tanaka Mai diz 「かいしゃいんです」: ela é funcionária de empresa.', 'Y01_6', 'Y01-6 — Apresentações pessoais', { helpPt: 'Procure a palavra 「かいしゃいん」 na primeira apresentação.' }),
  question('y01-reading-2', 'De quem é a área de estudo de língua japonesa?', introductionNames, 5, 'Yamada Makoto diz 「せんこうは にほんごです」.', 'Y01_6', 'Y01-6 — Apresentações pessoais', { helpPt: 'Ouça a última apresentação e identifique o que vem depois de 「せんこうは」.' }),
  question('y01-reading-3', 'Quem está no terceiro ano do ensino médio?', introductionNames, 4, 'Kitano Hiromi diz 「こうこうの さんねんせいです」.', 'Y01_6', 'Y01-6 — Apresentações pessoais', { helpPt: 'A evidência combina 「こうこう」 com 「さんねんせい」.' }),
  question('y01-reading-4', 'Qual é a área de estudo de Harada Ryō?', ['História', 'Economia', 'Língua japonesa', 'Língua inglesa'], 1, 'Harada Ryō diz 「せんこうは れきしです」: sua área é história.', 'Y01_6', 'Y01-6 — Apresentações pessoais', { helpPt: 'Na segunda apresentação, ouça a palavra depois de 「せんこうは」.' }),
]

function objectiveWorkbookQuestion(
  code: string,
  item: number,
  choices: string[],
  answer: number,
  explanationPt: string,
): Question {
  return question(
    `${code.toLowerCase().replace('_', '-')}-${item}`,
    `${code}, item ${item}: ouça e escolha a palavra em hiragana que corresponde à faixa.`,
    choices,
    answer,
    explanationPt,
    code,
    `${code.replace('_', '-')} — Escolha auditiva de hiragana`,
    { helpPt: 'Ouça sem ler uma vez. Na segunda escuta, compare apenas o contraste gráfico ou sonoro entre as duas alternativas.' },
  )
}

function dictationQuestion(code: string, item: number, transcription: string, focusPt: string): Question {
  return question(
    `${code.toLowerCase().replace('_', '-')}-${item}`,
    `${code}, item ${item}: pause após o item, escreva a palavra em hiragana e só então registre sua tentativa.`,
    [
      'Ainda não escrevi a palavra com segurança; vou ouvir e tentar novamente.',
      'Escrevi antes de conferir e comparei cada kana com a transcrição revelada.',
    ],
    2,
    `Transcrição conferida da faixa: 「${transcription}」. ${focusPt}`,
    code,
    `${code.replace('_', '-')} — Ditado de hiragana`,
    {
      assessment: 'self-check',
      context: 'Ditado: a resposta só aparece na orientação depois que você registra a tentativa.',
      helpPt: 'Faça uma escuta para contar as moras, outra para escrever e uma terceira para conferir dakuten, handakuten, kana pequeno ou vogal longa.',
    },
  )
}

const workbookWy1 = [
  objectiveWorkbookQuestion('WY_1', 1, ['かき', 'かぎ'], 1, 'A faixa diz 「かき」, sem dakuten.'),
  objectiveWorkbookQuestion('WY_1', 2, ['ぶんか', 'ふんか'], 1, 'A faixa diz 「ぶんか」, com dakuten em ふ→ぶ.'),
  objectiveWorkbookQuestion('WY_1', 3, ['にんしん', 'にんじん'], 2, 'A faixa diz 「にんじん」, com dakuten em し→じ.'),
  objectiveWorkbookQuestion('WY_1', 4, ['けんぽう', 'けんぼう'], 1, 'A faixa diz 「けんぽう」, com handakuten em ほ→ぽ.'),
]

const workbookWy2 = [
  dictationQuestion('WY_2', 1, 'まど', 'Confira o dakuten em 「ど」.'),
  dictationQuestion('WY_2', 2, 'ちず', 'Confira o dakuten em 「ず」.'),
  dictationQuestion('WY_2', 3, 'さんぽ', 'Confira o handakuten em 「ぽ」.'),
  dictationQuestion('WY_2', 4, 'もんだい', 'A palavra tem quatro kana: も・ん・だ・い.'),
  dictationQuestion('WY_2', 5, 'しんぱい', 'Confira o handakuten em 「ぱ」.'),
  dictationQuestion('WY_2', 6, 'がいこくじん', 'Confira os dakuten em 「が」 e 「じ」.'),
]

const workbookWy3 = [
  objectiveWorkbookQuestion('WY_3', 1, ['しゅみ', 'しゆみ'], 1, 'A faixa diz 「しゅみ」, com 「ゅ」 pequeno.'),
  objectiveWorkbookQuestion('WY_3', 2, ['じんじゃ', 'じんじょ'], 1, 'A faixa diz 「じんじゃ」, com 「ゃ」 pequeno.'),
  objectiveWorkbookQuestion('WY_3', 3, ['りよかん', 'りょかん'], 2, 'A faixa diz 「りょかん」, com 「ょ」 pequeno.'),
  objectiveWorkbookQuestion('WY_3', 4, ['きゃく', 'きやく'], 1, 'A faixa diz 「きゃく」, com 「ゃ」 pequeno.'),
]

const workbookWy4 = [
  dictationQuestion('WY_4', 1, 'いしゃ', 'Use 「ゃ」 pequeno depois de 「し」.'),
  dictationQuestion('WY_4', 2, 'じしょ', 'Use 「ょ」 pequeno depois de 「し」.'),
  dictationQuestion('WY_4', 3, 'おちゃ', 'Use 「ゃ」 pequeno depois de 「ち」.'),
  dictationQuestion('WY_4', 4, 'きょねん', 'A primeira combinação é 「きょ」, com 「ょ」 pequeno.'),
  dictationQuestion('WY_4', 5, 'しゅくだい', 'A primeira combinação é 「しゅ」, com 「ゅ」 pequeno.'),
  dictationQuestion('WY_4', 6, 'ひゃくえん', 'A primeira combinação é 「ひゃ」, com 「ゃ」 pequeno.'),
]

const workbookWy5 = [
  objectiveWorkbookQuestion('WY_5', 1, ['さか', 'さっか'], 1, 'A faixa diz 「さか」, sem 「っ」 pequeno.'),
  objectiveWorkbookQuestion('WY_5', 2, ['いっさい', 'いさい'], 1, 'A faixa diz 「いっさい」, com 「っ」 pequeno.'),
  objectiveWorkbookQuestion('WY_5', 3, ['あない', 'あんない'], 2, 'A faixa diz 「あんない」, com 「ん」 antes de 「な」.'),
  objectiveWorkbookQuestion('WY_5', 4, ['ざっし', 'ざし'], 1, 'A faixa diz 「ざっし」, com 「っ」 pequeno.'),
]

const workbookWy6 = [
  dictationQuestion('WY_6', 1, 'いっしょ', 'A palavra usa 「っ」 e 「ょ」 pequenos.'),
  dictationQuestion('WY_6', 2, 'きっぷ', 'Confira 「っ」 pequeno e o handakuten em 「ぷ」.'),
  dictationQuestion('WY_6', 3, 'もっと', 'Use 「っ」 pequeno entre 「も」 e 「と」.'),
  dictationQuestion('WY_6', 4, 'ざんねん', 'A palavra tem quatro kana: ざ・ん・ね・ん.'),
  dictationQuestion('WY_6', 5, 'はっさい', 'Use 「っ」 pequeno antes de 「さ」.'),
  dictationQuestion('WY_6', 6, 'なんじ', 'Confira o dakuten em 「じ」.'),
]

const workbookWy7 = [
  objectiveWorkbookQuestion('WY_7', 1, ['おじさん', 'おじいさん'], 1, 'A faixa diz 「おじさん」, sem vogal longa depois de 「じ」.'),
  objectiveWorkbookQuestion('WY_7', 2, ['さよなら', 'さようなら'], 2, 'A faixa diz 「さようなら」, com 「う」 alongando o som de よ.'),
  objectiveWorkbookQuestion('WY_7', 3, ['えいが', 'えが'], 1, 'A faixa diz 「えいが」, com 「い」 marcando a vogal longa.'),
  objectiveWorkbookQuestion('WY_7', 4, ['くうき', 'くき'], 2, 'A faixa diz 「くき」, sem vogal longa.'),
]

const workbookWy8 = [
  dictationQuestion('WY_8', 1, 'おとうさん', 'O som longo de と é escrito com 「う」.'),
  dictationQuestion('WY_8', 2, 'がくせい', 'O som longo de せ é escrito com 「い」.'),
  dictationQuestion('WY_8', 3, 'おばあさん', 'O som longo de ば é escrito com 「あ」.'),
  dictationQuestion('WY_8', 4, 'おにいさん', 'O som longo de に é escrito com 「い」.'),
  dictationQuestion('WY_8', 5, 'とうきょう', 'Há duas vogais longas: 「とう」 e 「きょう」.'),
  dictationQuestion('WY_8', 6, 'すうじ', 'O som longo de す é escrito com 「う」.'),
]

export const genki1Lesson1WritingGroups: ExerciseGroup[] = [
  group('y01-a', 'ひらがな A', 'Reconhecimento das formas básicas', 'Ouça cada som da faixa Y01-1 e escolha o hiragana correspondente, como na atividade A da página 297.', textbookA),
  group('y01-b', 'ひらがな B', 'Associação de nomes', 'Leia os nomes em hiragana e associe-os às formas em alfabeto latino da atividade B da página 297.', textbookB),
  group('y01-c', 'ひらがな C', 'Dakuten e handakuten', 'Ouça a faixa Y01-3 e escolha onde as marcas ゛ e ゜ devem aparecer, seguindo a atividade C da página 297.', textbookC),
  group('y01-d', 'ひらがな D', 'Kana pequenos e consoantes duplas', 'Ouça a faixa Y01-4 e escolha a palavra que corresponde à pronúncia, como na atividade D da página 298.', textbookD),
  group('y01-e', 'ひらがな E', 'Leitura e pronúncia de vogais longas', 'Leia os cinco pares da atividade E da página 298. Registre sucesso apenas depois de distinguir e reproduzir a duração das vogais.', textbookE),
  group('y01-reading', '読解 II', 'Compreensão das apresentações', 'Ouça ou leia as cinco apresentações da página 299 e responda às quatro perguntas de compreensão.', textbookReading),
  group('wy-1', 'ワークブック I', 'Dakuten e handakuten — escolha', 'Na página 126 do workbook, ouça WY-1 e escolha a palavra exata em cada item.', workbookWy1),
  group('wy-2', 'ワークブック II', 'Dakuten e handakuten — ditado', 'Ouça WY-2, escreva cada palavra em hiragana e só depois use a autoavaliação para revelar a transcrição.', workbookWy2),
  group('wy-3', 'ワークブック III', 'Kana pequenos — escolha', 'Na página 126 do workbook, ouça WY-3 e escolha entre o kana pequeno e o kana de tamanho normal.', workbookWy3),
  group('wy-4', 'ワークブック IV', 'Kana pequenos — ditado', 'Ouça WY-4, escreva cada palavra com ゃ・ゅ・ょ pequenos e só depois confira a transcrição.', workbookWy4),
  group('wy-5', 'ワークブック I', 'Consoantes duplas e vogais longas — escolha', 'Na página 127 do workbook, ouça WY-5 e escolha a escrita que reproduz exatamente o som.', workbookWy5),
  group('wy-6', 'ワークブック II', 'Consoantes duplas — ditado', 'Ouça WY-6, escreva cada palavra prestando atenção a 「っ」 e só depois confira a transcrição.', workbookWy6),
  group('wy-7', 'ワークブック III', 'Vogais longas — escolha', 'Na página 127 do workbook, ouça WY-7 e escolha a escrita com a duração vocálica correta.', workbookWy7),
  group('wy-8', 'ワークブック IV', 'Vogais longas — ditado', 'Ouça WY-8, escreva cada palavra prestando atenção às vogais longas e só depois confira a transcrição.', workbookWy8),
]

const readingScript: ScriptItem[] = [{
  label: 'II Reading Practice',
  setupJa: 'II　Reading Practice。',
  setupPt: 'II — Prática de leitura.',
  lines: [
    { speaker: '1', ja: 'たなか まいです。かいしゃいんです。', pt: 'Sou Mai Tanaka. Trabalho em uma empresa.' },
    { speaker: '2', ja: 'はらだ りょうです。だいがくせいです。せんこうは れきしです。', pt: 'Sou Ryō Harada. Sou universitário. Minha área de estudo é história.' },
    { speaker: '3', ja: 'かとう ゆうとです。だいがくいんせいです。せんこうは けいざいです。', pt: 'Sou Yūto Katō. Sou estudante de pós-graduação. Minha área de estudo é economia.' },
    { speaker: '4', ja: 'わたしの なまえは きたの ひろみです。こうこうの さんねんせいです。', pt: 'Meu nome é Hiromi Kitano. Estou no terceiro ano do ensino médio.' },
    { speaker: '5', ja: 'やまだ まことです。だいがくせいです。せんこうは にほんごです。', pt: 'Sou Makoto Yamada. Sou universitário. Minha área de estudo é língua japonesa.' },
  ],
}]

interface TrackDefinition {
  code: string
  title: string
  descriptionPt: string
  sourceActivityPt: string
  sourcePage: number
  practiceTaskPt: string
  kind: NonNullable<AudioTrack['kind']>
  transcript?: NonNullable<AudioTrack['transcript']>
}

const trackDefinitions: TrackDefinition[] = [
  { code: 'Y01_1', title: 'Textbook Y01-1 — Escolha do hiragana', descriptionPt: 'Faixa da atividade A de prática de hiragana.', sourceActivityPt: 'Hiragana Practice A — escolher o hiragana correto', sourcePage: 297, practiceTaskPt: 'Ouça cada som e selecione a forma de hiragana correspondente.', kind: 'reading' },
  { code: 'Y01_2', title: 'Textbook Y01-2 — Associação de nomes', descriptionPt: 'Faixa da atividade B com nomes de pessoas e lugares.', sourceActivityPt: 'Hiragana Practice B — associar nomes', sourcePage: 297, practiceTaskPt: 'Acompanhe a leitura dos nomes e associe hiragana e alfabeto latino.', kind: 'reading' },
  { code: 'Y01_3', title: 'Textbook Y01-3 — Dakuten e handakuten', descriptionPt: 'Faixa da atividade C sobre as marcas ゛ e ゜.', sourceActivityPt: 'Hiragana Practice C — acrescentar marcas diacríticas', sourcePage: 297, practiceTaskPt: 'Ouça e identifique quais kana recebem dakuten ou handakuten.', kind: 'reading' },
  { code: 'Y01_4', title: 'Textbook Y01-4 — Hiragana correspondente', descriptionPt: 'Faixa da atividade D sobre kana pequenos e consoantes duplas.', sourceActivityPt: 'Hiragana Practice D — escolher a palavra correspondente', sourcePage: 298, practiceTaskPt: 'Compare a pronúncia com as duas grafias e escolha a palavra exata.', kind: 'reading' },
  { code: 'Y01_5', title: 'Textbook Y01-5 — Vogais longas', descriptionPt: 'Modelo de leitura dos cinco pares da atividade E.', sourceActivityPt: 'Hiragana Practice E — leitura de pares com vogais longas', sourcePage: 298, practiceTaskPt: 'Leia cada par em voz alta e reproduza a diferença de duração mostrada pela gravação.', kind: 'reading' },
  {
    code: 'Y01_6',
    title: 'Textbook Y01-6 — Apresentações pessoais',
    descriptionPt: 'Leitura integral das cinco apresentações usadas nas perguntas da página 299.',
    sourceActivityPt: 'Reading Practice II — apresentações pessoais',
    sourcePage: 299,
    practiceTaskPt: 'Ouça as cinco apresentações, identifique ocupação, nível escolar e área de estudo e responda às quatro perguntas.',
    kind: 'reading',
    transcript: { kind: 'full', source: 'source-aligned', reviewed: true, items: readingScript },
  },
  { code: 'WY_1', title: 'Workbook WY-1 — Dakuten e handakuten', descriptionPt: 'Atividade objetiva I da página 126.', sourceActivityPt: 'Hiragana 6 I — escolher a palavra correta', sourcePage: 126, practiceTaskPt: 'Ouça quatro palavras e escolha a alternativa com as marcas corretas.', kind: 'workbook' },
  { code: 'WY_2', title: 'Workbook WY-2 — Ditado com marcas', descriptionPt: 'Ditado II da página 126.', sourceActivityPt: 'Hiragana 6 II — escrever o que foi ouvido', sourcePage: 126, practiceTaskPt: 'Pause depois de cada item, escreva a palavra e confira dakuten e handakuten.', kind: 'workbook' },
  { code: 'WY_3', title: 'Workbook WY-3 — Kana pequenos', descriptionPt: 'Atividade objetiva III da página 126.', sourceActivityPt: 'Hiragana 6 III — escolher a palavra correta', sourcePage: 126, practiceTaskPt: 'Diferencie ゃ・ゅ・ょ pequenos das formas de tamanho normal.', kind: 'workbook' },
  { code: 'WY_4', title: 'Workbook WY-4 — Ditado com kana pequenos', descriptionPt: 'Ditado IV da página 126.', sourceActivityPt: 'Hiragana 6 IV — escrever o que foi ouvido', sourcePage: 126, practiceTaskPt: 'Pause depois de cada item e escreva as combinações com ゃ・ゅ・ょ pequenos.', kind: 'workbook' },
  { code: 'WY_5', title: 'Workbook WY-5 — Consoantes duplas', descriptionPt: 'Atividade objetiva I da página 127.', sourceActivityPt: 'Hiragana 7 I — escolher a palavra correta', sourcePage: 127, practiceTaskPt: 'Ouça quatro palavras e identifique 「っ」 e as vogais longas.', kind: 'workbook' },
  { code: 'WY_6', title: 'Workbook WY-6 — Ditado com 「っ」', descriptionPt: 'Ditado II da página 127.', sourceActivityPt: 'Hiragana 7 II — escrever o que foi ouvido', sourcePage: 127, practiceTaskPt: 'Escreva cada item e confira especialmente o 「っ」 pequeno.', kind: 'workbook' },
  { code: 'WY_7', title: 'Workbook WY-7 — Vogais longas', descriptionPt: 'Atividade objetiva III da página 127.', sourceActivityPt: 'Hiragana 7 III — escolher a palavra correta', sourcePage: 127, practiceTaskPt: 'Compare a duração das vogais e escolha a grafia correspondente.', kind: 'workbook' },
  { code: 'WY_8', title: 'Workbook WY-8 — Ditado de vogais longas', descriptionPt: 'Ditado IV da página 127.', sourceActivityPt: 'Hiragana 7 IV — escrever o que foi ouvido', sourcePage: 127, practiceTaskPt: 'Escreva cada item e confira como あ・い・う marcam as vogais longas.', kind: 'workbook' },
]

export const genki1Lesson1WritingAudios: AudioTrack[] = trackDefinitions.map((definition) => ({
  id: trackId(definition.code),
  code: definition.code,
  kind: definition.kind,
  language: 'mixed',
  title: definition.title,
  descriptionPt: definition.descriptionPt,
  purposePt: definition.kind === 'workbook'
    ? 'Converter contrastes de pronúncia em escrita correta de hiragana e consolidar o resultado na revisão FSRS.'
    : 'Relacionar som, forma e leitura de hiragana antes de avançar para textos mais longos.',
  instructionsPt: definition.kind === 'workbook'
    ? ['Leia a tarefa vinculada antes de tocar a faixa.', 'Ouça ou escreva antes de revelar qualquer orientação.', 'Confira a explicação e repita somente o contraste que errou.']
    : ['Ouça uma vez sem responder.', 'Faça os exercícios vinculados usando a faixa como fonte.', 'Repita em voz alta e compare som, duração e ritmo.'],
  sourceRefPt: `Genki I 3ª edição, ${definition.code.startsWith('WY_') ? 'workbook' : 'textbook'}, página ${definition.sourcePage}, faixa ${definition.code}`,
  sourceActivityPt: definition.sourceActivityPt,
  sourcePage: definition.sourcePage,
  practiceTaskPt: definition.practiceTaskPt,
  src: `${AUDIO_BASE}/${definition.code}.mp3`,
  script: definition.transcript?.items ?? [],
  transcript: definition.transcript,
}))
