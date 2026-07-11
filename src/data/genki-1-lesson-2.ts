import type { AudioTrack, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const AUDIO_BASE = '/audio/genki/genki-1/lesson-2'

function q(
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  options: Partial<Pick<Question, 'translationPt' | 'context' | 'audio' | 'helpPt'>> = {},
): Question {
  return {
    id: `genki-1-l2-${id}`,
    number,
    prompt,
    choices: choices.map((text, index) => ({ n: index + 1, text })),
    answer,
    explanationPt,
    ...options,
  }
}

function group(id: string, title: string, subtitlePt: string, instructionPt: string, questions: Question[]): ExerciseGroup {
  return { id: `genki-1-l2-${id}`, title, subtitlePt, instructionJa: '', instructionPt, questions }
}

const notes: StudyNote[] = [
  {
    title: 'Objetivos da lição',
    bodyPt: `Ao concluir esta lição, você será capaz de:
- perguntar e informar preços;
- comprar objetos e pedir comida em um restaurante;
- indicar objetos e lugares conforme a distância;
- perguntar de quem é um objeto;
- negar frases nominais e acrescentar “também”;
- usar \`ね\` para buscar concordância e \`よ\` para dar informação;
- reconhecer e escrever o katakana básico.`,
  },
  {
    title: 'Diálogo 1 - No mercado de pulgas',
    bodyPt: `Mary pergunta os preços de dois relógios e escolhe um deles.

- \`すみません。これは いくらですか。\` - Com licença. Quanto custa isto?
- \`それは さんぜんえんです。\` - Isso custa 3.000 ienes.
- \`じゃあ、あのとけいは いくらですか。\` - Então, quanto custa aquele relógio?
- \`あれは さんぜんごひゃくえんです。\` - Aquele custa 3.500 ienes.
- \`じゃあ、そのとけいを ください。\` - Então, por favor, me dê esse relógio.

Depois, alguém encontra uma carteira e pergunta \`これは だれの さいふですか\`. Mary responde \`わたしの さいふです\`.`,
    helpPt: `Observe o ponto de vista: Mary usa \`これ\` para o objeto junto dela; o vendedor responde com \`それ\` porque o mesmo objeto está junto da pessoa com quem ele fala.`,
  },
  {
    title: 'Diálogo 2 - No restaurante',
    bodyPt: `Depois das compras, Mary vai a um restaurante.

- \`いらっしゃいませ。メニューを どうぞ。\` - Bem-vinda. Aqui está o cardápio.
- \`これは なんですか。\` - O que é isto?
- \`とんかつです。\` - É tonkatsu.
- \`さかなですか。\` - É peixe?
- \`いいえ、さかなじゃないです。にくです。\` - Não, não é peixe. É carne.
- \`じゃあ、これを おねがいします。\` - Então, vou querer isto.
- \`トイレは どこですか。\` - Onde fica o banheiro?
- \`あそこです。\` - É ali.`,
  },
  {
    title: '1. これ・それ・あれ・どれ',
    bodyPt: `Essas palavras substituem o próprio objeto.

| Palavra | Referência |
| --- | --- |
| \`これ\` | isto, perto de quem fala |
| \`それ\` | isso, perto de quem ouve |
| \`あれ\` | aquilo, longe dos dois |
| \`どれ\` | qual deles |

Elas aparecem sozinhas: \`これは いくらですか\`. Não acrescente um substantivo imediatamente depois.`,
    helpPt: `Imagine três círculos: MEU espaço = \`こ\`; SEU espaço = \`そ\`; longe de nós = \`あ\`; pergunta = \`ど\`. O mesmo mapa reaparece em várias famílias de palavras.`,
  },
  {
    title: '2. この・その・あの・どの + substantivo',
    bodyPt: `Essas formas precisam acompanhar um substantivo.

- \`この とけい\` - este relógio;
- \`その さいふ\` - essa carteira;
- \`あの がくせい\` - aquele estudante;
- \`どの かばん\` - qual bolsa.

Compare: \`これは\` (isto) e \`この ほんは\` (este livro).`,
    helpPt: `Se você disser o nome do objeto, escolha a série terminada em \`の\`: \`このほん\`. Se o objeto ficar implícito, use \`これ\`.`,
  },
  {
    title: '3. ここ・そこ・あそこ・どこ',
    bodyPt: `A família de lugares segue o mesmo mapa de distância.

- \`ここ\` - aqui, perto de quem fala;
- \`そこ\` - aí, perto de quem ouve;
- \`あそこ\` - ali, longe dos dois;
- \`どこ\` - onde.

\`ゆうびんきょくは どこですか。\` - Onde fica o correio?`,
  },
  {
    title: '4. だれの + substantivo',
    bodyPt: `Use \`だれの\` para perguntar de quem é alguma coisa.

- \`これは だれの かばんですか。\` - De quem é esta bolsa?
- \`それは ソラさんの かばんです。\` - Essa é a bolsa de Sora.

Na resposta, o substantivo pode ser omitido depois de \`の\` quando já estiver claro: \`わたしのです\` - é meu/minha.`,
  },
  {
    title: '5. Substantivo も',
    bodyPt: `A partícula \`も\` significa “também” e substitui \`は\` no elemento compartilhado.

- \`たけしさんは にほんじんです。\`
- \`ゆいさんも にほんじんです。\`

Use \`も\` diretamente depois do item que tem a mesma característica.`,
  },
  {
    title: '6. Substantivo じゃないです',
    bodyPt: `Para negar uma frase com substantivo, substitua \`です\` por \`じゃないです\`.

- \`これは にくです。\` - Isto é carne.
- \`これは にくじゃないです。\` - Isto não é carne.

Formas mais formais: \`じゃありません\` e \`ではありません\`. Ao responder, repita o substantivo: \`にほんじんじゃないです\`, não apenas \`じゃないです\`.`,
    helpPt: `Pense em \`じゃないです\` como um bloco de negação nominal. Primeiro diga o que está sendo negado e depois encaixe o bloco: \`がくせい + じゃないです\`.`,
  },
  {
    title: '7. ね e よ',
    bodyPt: `\`ね\` busca concordância ou confirmação: “não é?”, “né?”.

- \`たかいですね。\` - É caro, não é?

\`よ\` apresenta uma informação que o falante considera importante ou nova para o ouvinte.

- \`とんかつは さかなじゃないですよ。\` - Tonkatsu não é peixe, viu.`,
  },
  {
    title: 'Números grandes e dinheiro',
    bodyPt: `Leituras com mudança sonora:
- 300: \`さんびゃく\`;
- 600: \`ろっぴゃく\`;
- 800: \`はっぴゃく\`;
- 3.000: \`さんぜん\`;
- 8.000: \`はっせん\`;
- 10.000: \`いちまん\`.

A moeda japonesa é o iene, pronunciado \`えん\`. \`いくらですか\` pergunta “quanto custa?”.`,
    helpPt: `Quebre valores da direita para a esquerda: 23.400 = 2万 + 3千 + 4百 = \`にまん さんぜん よんひゃく\`.`,
  },
  {
    title: 'Leitura e escrita - Katakana',
    bodyPt: `O katakana representa principalmente palavras estrangeiras, nomes estrangeiros, onomatopeias e termos destacados.

Pares que merecem atenção:
- \`シ\` (shi) e \`ツ\` (tsu);
- \`ソ\` (so) e \`ン\` (n);
- \`ク\` (ku) e \`ケ\` (ke);
- \`ル\` (ru) e \`レ\` (re).

Exemplos da lição: \`スマホ\`, \`メニュー\`, \`コーヒー\`, \`アメリカ\`, \`オレンジジュース\`. O traço \`ー\` alonga a vogal anterior.`,
    helpPt: `Pratique por famílias visuais e escreva o som junto. Para nomes estrangeiros, procure reproduzir a pronúncia em blocos japoneses, não a ortografia original.`,
  },
]

const dialogue = [
  q('dialogue-1', 1, 'これは いくらですか。', ['2.000円', '3.000円', '3.500円', '1.800円'], 2, 'O primeiro relógio custa 3.000 ienes.', { translationPt: 'Quanto custa isto?' }),
  q('dialogue-2', 2, 'あの とけいは いくらですか。', ['1.800円', '3.000円', '3.500円', '8.000円'], 3, 'O relógio indicado por あの custa 3.500 ienes.'),
  q('dialogue-3', 3, 'Mary escolhe qual relógio?', ['この とけい', 'その とけい de 1.800円', 'あの とけい de 3.500円', 'nenhum'], 2, 'O vendedor informa que aquele relógio custa 1.800 ienes e Mary o pede.'),
  q('dialogue-4', 4, 'これは だれの さいふですか。', ['たけしさんのです', 'メアリーさんのです', 'みせのひとのです', 'ソラさんのです'], 2, 'Mary responde que a carteira é dela.'),
  q('dialogue-5', 5, 'とんかつは なんですか。', ['さかな', 'にく', 'やさい', 'くだもの'], 2, 'O atendente explica que tonkatsu não é peixe; é carne.'),
  q('dialogue-6', 6, 'メアリーさんは レストランで なにを おねがいしますか。', ['さかな', 'とんかつ', 'メニュー', 'コーヒー'], 2, 'Mary diz 「じゃあ、これを おねがいします」 referindo-se ao tonkatsu.'),
  q('dialogue-7', 7, 'トイレは どこですか。', ['ここです', 'そこです', 'あそこです', 'どれです'], 3, 'O atendente responde 「あそこです」.'),
  q('dialogue-8', 8, '「その とけいを ください」 expressa:', ['uma pergunta sobre posse', 'um pedido do relógio', 'uma negação', 'um agradecimento'], 2, '「〜を ください」 pede um objeto concreto: “por favor, me dê...”.'),
]

const vocabulary = [
  q('vocab-1', 9, '「さいふ」の いみは?', ['relógio', 'carteira', 'bolsa', 'chapéu'], 2, '「さいふ」 significa carteira.'),
  q('vocab-2', 10, '「とけい」の いみは?', ['relógio', 'sapato', 'bicicleta', 'jornal'], 1, '「とけい」 significa relógio.'),
  q('vocab-3', 11, '「かばん」の いみは?', ['guarda-chuva', 'bolsa/mochila', 'carteira', 'caderno'], 2, '「かばん」 é bolsa, pasta ou mochila.'),
  q('vocab-4', 12, '「くつ」の いみは?', ['sapatos', 'jeans', 'boné', 'caneta'], 1, '「くつ」 significa sapatos.'),
  q('vocab-5', 13, '「しんぶん」の いみは?', ['livro', 'jornal', 'caderno', 'menu'], 2, '「しんぶん」 significa jornal.'),
  q('vocab-6', 14, '「ゆうびんきょく」は どこですか。', ['banco', 'biblioteca', 'correio', 'loja de conveniência'], 3, '「ゆうびんきょく」 é correio.'),
  q('vocab-7', 15, 'Qual palavra significa “carne”?', ['さかな', 'にく', 'やさい', 'とんかつ'], 2, '「にく」 significa carne.'),
  q('vocab-8', 16, 'Qual palavra significa “peixe”?', ['さかな', 'にく', 'やさい', 'くだもの'], 1, '「さかな」 significa peixe.'),
  q('vocab-9', 17, '「たかい」は qual ideia?', ['barato', 'caro/alto', 'delicioso', 'grande'], 2, 'Nesta lição, 「たかい」 descreve algo caro.'),
  q('vocab-10', 18, '「いらっしゃいませ」は usado por:', ['cliente ao sair', 'funcionário ao receber cliente', 'aluno ao professor', 'amigo ao telefone'], 2, 'É a saudação de boas-vindas usada em lojas e restaurantes.'),
  q('vocab-11', 19, '「どうぞ」は usado ao:', ['entregar ou oferecer algo', 'negar um pedido', 'perguntar preço', 'pedir desculpas'], 1, '「どうぞ」 acompanha uma oferta: “por favor/aqui está”.'),
  q('vocab-12', 20, '「おいしい」の いみは?', ['caro', 'barato', 'delicioso', 'estranho'], 3, '「おいしい」 significa delicioso/saboroso.'),
]

const demonstratives = [
  q('demonstrative-1', 21, 'Objeto perto de quem fala:', ['これ', 'それ', 'あれ', 'どれ'], 1, '「これ」 aponta para algo perto do falante.'),
  q('demonstrative-2', 22, 'Objeto perto de quem ouve:', ['これ', 'それ', 'あれ', 'どれ'], 2, '「それ」 aponta para algo perto do ouvinte.'),
  q('demonstrative-3', 23, 'Objeto longe dos dois:', ['これ', 'それ', 'あれ', 'どれ'], 3, '「あれ」 aponta para algo longe dos dois.'),
  q('demonstrative-4', 24, 'Pergunta “qual deles?”:', ['これ', 'それ', 'あれ', 'どれ'], 4, '「どれ」 pergunta qual objeto.'),
  q('demonstrative-5', 25, '（　）は わたしの ほんです。', ['この', 'これ', 'どの', 'ここ'], 2, 'Sem substantivo depois, use 「これ」.'),
  q('demonstrative-6', 26, '（　）ほんは わたしのです。', ['これ', 'この', 'どれ', 'ここ'], 2, 'Antes de 「ほん」, use 「この」.'),
  q('demonstrative-7', 27, 'Qual forma significa “aquele livro” longe dos dois?', ['そのほん', 'このほん', 'あのほん', 'どのほん'], 3, '「あの + substantivo」 indica algo longe dos dois.'),
  q('demonstrative-8', 28, '（　）かばんが メアリーさんのですか。', ['どれ', 'どの', 'どこ', 'だれ'], 2, 'Antes de 「かばん」, a pergunta usa 「どの」.'),
  q('demonstrative-9', 29, '「どれですか」 e 「どのほんですか」 diferem porque:', ['どれ exige substantivo', 'どの aparece sozinho', 'どれ aparece sozinho e どの exige substantivo', 'não há diferença'], 3, '「どれ」 substitui o objeto; 「どの」 modifica um substantivo.'),
  q('demonstrative-10', 30, 'Mary segura um relógio e pergunta ao vendedor:', ['それは いくらですか', 'これは いくらですか', 'あれは いくらですか', 'どこは いくらですか'], 2, 'O objeto está junto de Mary, a falante: 「これ」.'),
]

const placesPossession = [
  q('place-1', 31, 'Lugar perto de quem fala:', ['ここ', 'そこ', 'あそこ', 'どこ'], 1, '「ここ」 significa aqui.'),
  q('place-2', 32, 'Lugar perto de quem ouve:', ['ここ', 'そこ', 'あそこ', 'どこ'], 2, '「そこ」 significa aí.'),
  q('place-3', 33, 'Lugar longe dos dois:', ['ここ', 'そこ', 'あそこ', 'どこ'], 3, '「あそこ」 significa ali.'),
  q('place-4', 34, '「トイレは（　）ですか」', ['どれ', 'どの', 'どこ', 'だれ'], 3, 'Para perguntar onde fica um lugar, use 「どこ」.'),
  q('possession-1', 35, 'これは（　）かばんですか。', ['どこ', 'どれ', 'だれの', 'なんじ'], 3, '「だれの」 pergunta de quem é a bolsa.'),
  q('possession-2', 36, 'A: これは だれの かさですか。 B:（　）。', ['メアリーさんです', 'メアリーさんのです', 'メアリーさんもです', 'メアリーさんじゃないです'], 2, 'O substantivo já está claro e pode ser omitido depois de 「の」.'),
  q('possession-3', 37, '「わたしのです」 significa:', ['sou eu', 'também sou eu', 'é meu/minha', 'não é meu'], 3, '「の」 substitui o objeto conhecido: “é meu/minha”.'),
  q('place-5', 38, 'ゆうびんきょくは あそこです。', ['O correio fica aqui.', 'O correio fica aí.', 'O correio fica ali.', 'Onde fica o correio?'], 3, '「あそこ」 indica um lugar afastado de falante e ouvinte.'),
]

const particlesNegation = [
  q('mo-1', 39, 'たけしさんは にほんじんです。ゆいさん（　）にほんじんです。', ['は', 'の', 'も', 'か'], 3, '「も」 marca que Yui também é japonesa.'),
  q('mo-2', 40, 'これは わたしの じてんしゃです。それ（　）わたしのです。', ['は', 'も', 'の', 'を'], 2, 'O segundo item também pertence à pessoa: use 「も」.'),
  q('negative-1', 41, 'やまださんは がくせい（　）。', ['です', 'じゃないです', 'もです', 'のです'], 2, 'A negação nominal é 「がくせいじゃないです」.'),
  q('negative-2', 42, 'A: にほんじんですか。 B: いいえ、（　）。', ['じゃないです', 'にほんじんじゃないです', 'にほんじんです', 'にほんじんもです'], 2, 'Na resposta, diga o substantivo negado: 「にほんじんじゃないです」.'),
  q('negative-3', 43, 'これは さかなじゃないです。', ['Isto é peixe.', 'Isto também é peixe.', 'Isto não é peixe.', 'Isto é de quem?'], 3, '「じゃないです」 nega o substantivo 「さかな」.'),
  q('ne-1', 44, 'たかいです（　）。', ['か', 'ね', 'の', 'を'], 2, '「ね」 busca concordância: “É caro, não é?”.'),
  q('yo-1', 45, 'とんかつは さかなじゃないです（　）。', ['ね', 'よ', 'か', 'も'], 2, '「よ」 apresenta uma informação ao ouvinte.'),
  q('ne-yo-1', 46, 'Qual final equivale melhor a “né?”', ['よ', 'ね', 'か', 'も'], 2, '「ね」 busca confirmação ou compartilhamento.'),
]

const numbers = [
  q('number-1', 47, '300', ['さんひゃく', 'さんびゃく', 'さんぴゃく', 'さんぜん'], 2, '300 tem mudança sonora: 「さんびゃく」.'),
  q('number-2', 48, '600', ['ろくひゃく', 'ろっぴゃく', 'ろくびゃく', 'ろくせん'], 2, '600 é 「ろっぴゃく」.'),
  q('number-3', 49, '800', ['はちひゃく', 'はっぴゃく', 'はちびゃく', 'はっせん'], 2, '800 é 「はっぴゃく」.'),
  q('number-4', 50, '3.000', ['さんせん', 'さんぜん', 'さんまん', 'さんびゃく'], 2, '3.000 é 「さんぜん」.'),
  q('number-5', 51, '8.000', ['はちせん', 'はっせん', 'はちまん', 'はっぴゃく'], 2, '8.000 é 「はっせん」.'),
  q('number-6', 52, '10.000', ['じゅうせん', 'いちまん', 'じゅうまん', 'ひゃくまん'], 2, 'A unidade de dez mil é 「まん」: 10.000 = 「いちまん」.'),
  q('number-7', 53, '23.400', ['にまん さんぜん よんひゃく', 'にじゅうさんまん よんひゃく', 'にせん さんびゃく よんじゅう', 'にまん よんせん さんびゃく'], 1, '23.400 = 2万 + 3千 + 4百.'),
  q('number-8', 54, '「いくらですか」 pergunta:', ['onde fica', 'de quem é', 'quanto custa', 'qual deles'], 3, '「いくら」 pergunta o preço.'),
]

const katakana = [
  q('katakana-1', 55, 'Qual katakana representa shi?', ['シ', 'ツ', 'ソ', 'ン'], 1, '「シ」 representa shi.'),
  q('katakana-2', 56, 'Qual katakana representa tsu?', ['シ', 'ツ', 'ソ', 'ン'], 2, '「ツ」 representa tsu.'),
  q('katakana-3', 57, 'Qual katakana representa n?', ['シ', 'ツ', 'ソ', 'ン'], 4, '「ン」 representa n.'),
  q('katakana-4', 58, 'Qual katakana representa so?', ['シ', 'ツ', 'ソ', 'ン'], 3, '「ソ」 representa so.'),
  q('katakana-5', 59, '「コーヒー」の いみは?', ['cola', 'café', 'chá gelado', 'suco'], 2, '「コーヒー」 é café; ー alonga as vogais.'),
  q('katakana-6', 60, '「オレンジジュース」の いみは?', ['suco de laranja', 'refrigerante', 'sanduíche', 'salada'], 1, 'É a adaptação de “orange juice”.'),
  q('katakana-7', 61, 'Qual escrita forma “smartphone”?', ['マホス', 'スマホ', 'ホスマ', 'スホマ'], 2, 'A abreviação japonesa é 「スマホ」.'),
  q('katakana-8', 62, 'Qual escrita forma “pen”?', ['ンペ', 'ペン', 'パン', 'ペソ'], 2, '“Pen” é adaptado como 「ペン」.'),
  q('katakana-9', 63, '「アメリカ」 usa katakana porque:', ['é verbo', 'é partícula', 'é nome estrangeiro', 'é kanji irregular'], 3, 'Nomes estrangeiros são normalmente escritos em katakana.'),
  q('katakana-10', 64, 'Qual par precisa de atenção pela forma parecida?', ['ア・イ', 'カ・キ', 'シ・ツ', 'マ・ミ'], 3, '「シ」 e 「ツ」 diferem principalmente na direção e posição dos traços.'),
]

const audio = (file: string, title: string) => ({ src: `${AUDIO_BASE}/${file}.mp3`, title })

const listening = [
  q('listen-number-1', 65, 'W02-1 (a): qual número foi ditado?', ['407', '470', '740', '4.700'], 2, 'O número é 470.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-2', 66, 'W02-1 (b): qual número foi ditado?', ['835', '853', '583', '8.503'], 2, 'O número é 853.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-3', 67, 'W02-1 (c): qual número foi ditado?', ['1.030', '1.300', '13.000', '3.100'], 2, 'O número é 1.300.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-4', 68, 'W02-1 (d): qual número foi ditado?', ['1.700', '7.100', '17.000', '70.000'], 3, 'O número é 17.000.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-5', 69, 'W02-1 (e): qual número foi ditado?', ['3.126', '3.612', '3.621', '36.120'], 2, 'O número é 3.612.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-6', 70, 'W02-1 (f): qual número foi ditado?', ['5.189', '5.198', '5.918', '51.980'], 2, 'O número é 5.198.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-7', 71, 'W02-1 (g): qual número foi ditado?', ['46.900', '49.600', '4.690', '469.000'], 1, 'O número é 46.900.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-number-8', 72, 'W02-1 (h): qual número foi ditado?', ['90.210', '90.120', '92.010', '9.021'], 1, 'O número é 90.210.', { audio: audio('W02_1', 'Workbook W02-1 - Números') }),
  q('listen-a-1', 73, 'W02-A: しんぶんは いくらですか。', ['50円', '100円', '150円', '500円'], 3, 'O jornal custa 150 ienes.', { audio: audio('W02_A', 'Workbook W02-A - Preços no quiosque') }),
  q('listen-a-2', 74, 'W02-A: かさは いくらですか。', ['100円', '500円', '1.000円', '1.500円'], 3, 'O guarda-chuva custa 1.000 ienes.', { audio: audio('W02_A', 'Workbook W02-A - Preços no quiosque') }),
  q('listen-a-3', 75, 'W02-A: コーラは いくらですか。', ['100円', '120円', '150円', '200円'], 2, 'A cola custa 120 ienes.', { audio: audio('W02_A', 'Workbook W02-A - Preços no quiosque') }),
  q('listen-a-4', 76, 'W02-A: ガムは いくらですか。', ['50円', '100円', '120円', '150円'], 2, 'O chiclete custa 100 ienes.', { audio: audio('W02_A', 'Workbook W02-A - Preços no quiosque') }),
  q('listen-b-1', 77, 'W02-B: クリスティさんは アメリカじんですか。', ['はい、そうです', 'いいえ、フランスじんです', 'いいえ、にほんじんです', 'いいえ、イギリスじんです'], 2, 'Christy é francesa, não americana.', { audio: audio('W02_B', 'Workbook W02-B - Christy') }),
  q('listen-b-2', 78, 'W02-B: クリスティさんは なんさいですか。', ['18歳', '19歳', '20歳', '21歳'], 3, 'Christy tem 20 anos: 「はたちです」.', { audio: audio('W02_B', 'Workbook W02-B - Christy') }),
  q('listen-b-3', 79, 'W02-B: クリスティさんの おとうさんは にほんじんですか。', ['はい、そうです', 'いいえ、フランスじんです'], 1, 'O pai de Christy é japonês.', { audio: audio('W02_B', 'Workbook W02-B - Christy') }),
  q('listen-b-4', 80, 'W02-B: クリスティさんの おかあさんは にほんじんですか。', ['はい、そうです', 'いいえ、フランスじんです'], 2, 'A mãe de Christy é francesa.', { audio: audio('W02_B', 'Workbook W02-B - Christy') }),
  q('listen-c-1', 81, 'W02-C: すきやきは いくらですか。', ['1.200円', '3.000円', '600円', '300円'], 2, 'O sukiyaki custa 3.000 ienes.', { audio: audio('W02_C', 'Workbook W02-C - Restaurante') }),
  q('listen-c-2', 82, 'W02-C: うどんは いくらですか。', ['600円', '1.200円', '3.000円', '800円'], 1, 'O udon custa 600 ienes.', { audio: audio('W02_C', 'Workbook W02-C - Restaurante') }),
  q('listen-c-3', 83, 'W02-C: てんぷらは いくらですか。', ['600円', '1.000円', '1.200円', '3.000円'], 3, 'A tempura custa 1.200 ienes.', { audio: audio('W02_C', 'Workbook W02-C - Restaurante') }),
  q('listen-c-4', 84, 'W02-C: すきやきは さかなです。', ['○ - verdadeiro', '× - falso'], 2, 'A afirmação é falsa.' , { audio: audio('W02_C', 'Workbook W02-C - Restaurante') }),
  q('listen-c-5', 85, 'W02-C: Mary considera o sukiyaki caro.', ['○ - verdadeiro', '× - falso'], 1, 'A afirmação é verdadeira: Mary considera o sukiyaki caro.', { audio: audio('W02_C', 'Workbook W02-C - Restaurante') }),
  q('listen-c-6', 86, 'W02-C: Takeshi e Mary pedem udon.', ['○ - verdadeiro', '× - falso'], 1, 'A afirmação é verdadeira: os dois pedem udon.', { audio: audio('W02_C', 'Workbook W02-C - Restaurante') }),
]

const dialogueOne: ScriptItem[] = [{
  label: '{会話|かいわ} I',
  setupJa: '{第2課|だいにか} かいもの。{会話|かいわ} I。',
  setupPt: 'Lição 2 — Compras. Diálogo I.',
  lines: [
    { speaker: 'M', ja: 'すみません。これは いくらですか。', pt: 'Com licença. Quanto custa isto?' },
    { speaker: 'V', ja: 'それは さんぜんえんです。', pt: 'Isso custa 3.000 ienes.' },
    { speaker: 'M', ja: 'たかいですね。じゃあ、あのとけいは いくらですか。', pt: 'É caro, não é? Então, quanto custa aquele relógio?' },
    { speaker: 'V', ja: 'あれは さんぜんごひゃくえんです。', pt: 'Aquele custa 3.500 ienes.' },
    { speaker: 'M', ja: 'そうですか。あれも たかいですね。', pt: 'Entendo. Aquele também é caro.' },
    { speaker: 'V', ja: 'これは せんはっぴゃくえんですよ。', pt: 'Este custa 1.800 ienes, viu.' },
    { speaker: 'M', ja: 'じゃあ、そのとけいを ください。', pt: 'Então, por favor, me dê esse relógio.' },
    { speaker: 'H', ja: 'これは だれの さいふですか。', pt: 'De quem é esta carteira?' },
    { speaker: 'M', ja: 'わたしの さいふです。', pt: 'É a minha carteira.' },
    { speaker: 'M', ja: 'ありがとうございます。', pt: 'Muito obrigada.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: '{会話|かいわ} II',
  setupJa: '{二|に}。',
  setupPt: 'Diálogo II.',
  lines: [
    { speaker: 'V', ja: 'いらっしゃいませ。メニューを どうぞ。', pt: 'Bem-vinda. Aqui está o cardápio.' },
    { speaker: 'M', ja: 'どうも。これは なんですか。', pt: 'Obrigada. O que é isto?' },
    { speaker: 'V', ja: 'どれですか。ああ、とんかつです。', pt: 'Qual? Ah, é tonkatsu.' },
    { speaker: 'M', ja: 'とんかつ？ さかなですか。', pt: 'Tonkatsu? É peixe?' },
    { speaker: 'V', ja: 'いいえ、さかなじゃないです。にくです。おいしいですよ。', pt: 'Não, não é peixe. É carne. É delicioso.' },
    { speaker: 'M', ja: 'じゃあ、これを おねがいします。', pt: 'Então, vou querer isto.' },
    { speaker: 'M', ja: 'すみません。トイレは どこですか。', pt: 'Com licença. Onde fica o banheiro?' },
    { speaker: 'V', ja: 'あそこです。', pt: 'É ali.' },
    { speaker: 'M', ja: 'ありがとうございます。', pt: 'Muito obrigada.' },
  ],
}]

const katakanaRecognitionScript: ScriptItem[] = [{
  label: 'I-A',
  setupJa: '{読|よ}み{書|か}き{編|へん} {第2課|だいにか} I　Katakana Practice A。',
  setupPt: 'Seção de leitura e escrita, Lição 2, prática de katakana I-A.',
  lines: [
    { speaker: '1', ja: 'オ。', pt: 'Som “o”.' },
    { speaker: '2', ja: 'ヌ。', pt: 'Som “nu”.' },
    { speaker: '3', ja: 'サ。', pt: 'Som “sa”.' },
    { speaker: '4', ja: 'シ。', pt: 'Som “shi”.' },
    { speaker: '5', ja: 'ク。', pt: 'Som “ku”.' },
    { speaker: '6', ja: 'マ。', pt: 'Som “ma”.' },
    { speaker: '7', ja: 'ル。', pt: 'Som “ru”.' },
    { speaker: '8', ja: 'ホ。', pt: 'Som “ho”.' },
    { speaker: '9', ja: 'ユ。', pt: 'Som “yu”.' },
  ],
}]

const katakanaFoodScript: ScriptItem[] = [{
  label: 'I-B',
  setupJa: 'B。',
  setupPt: 'Prática de associação de palavras em katakana, item B.',
  lines: [
    { speaker: '1', ja: 'オレンジジュース。', pt: 'Suco de laranja.' },
    { speaker: '2', ja: 'フライドポテト。', pt: 'Batata frita.' },
    { speaker: '3', ja: 'ケーキ。', pt: 'Bolo.' },
    { speaker: '4', ja: 'サラダ。', pt: 'Salada.' },
    { speaker: '5', ja: 'チョコレートパフェ。', pt: 'Parfait de chocolate.' },
    { speaker: '6', ja: 'コーヒー。', pt: 'Café.' },
    { speaker: '7', ja: 'サンドイッチ。', pt: 'Sanduíche.' },
    { speaker: '8', ja: 'ステーキ。', pt: 'Bife.' },
    { speaker: '9', ja: 'カレー。', pt: 'Curry.' },
    { speaker: '10', ja: 'ピザ。', pt: 'Pizza.' },
    { speaker: '11', ja: 'トースト。', pt: 'Torrada.' },
    { speaker: '12', ja: 'アイスティー。', pt: 'Chá gelado.' },
  ],
}]

const katakanaReadingScript: ScriptItem[] = [{
  label: 'II',
  setupJa: 'II　Reading Practice。',
  setupPt: 'Prática de leitura II.',
  lines: [
    { speaker: '1', ja: 'これは わたしの ぼうしじゃないです。', pt: 'Este não é o meu boné.' },
    { speaker: '1', ja: 'キャシーさんの ぼうしです。', pt: 'É o boné da Cathy.' },
    { speaker: '1', ja: 'ニューヨークヤンキースの ぼうしです。', pt: 'É um boné do New York Yankees.' },
    { speaker: '2', ja: 'これは わたしの じてんしゃです。', pt: 'Esta é a minha bicicleta.' },
    { speaker: '2', ja: 'オーストラリアの じてんしゃです。', pt: 'É uma bicicleta australiana.' },
    { speaker: '2', ja: 'たかいです。', pt: 'É cara.' },
    { speaker: '3', ja: 'これは ミシェルさんの ほんです。', pt: 'Este é o livro da Michelle.' },
    { speaker: '3', ja: 'スペインごの ほんじゃないです。', pt: 'Não é um livro em espanhol.' },
    { speaker: '3', ja: 'フランスごの ほんです。', pt: 'É um livro em francês.' },
    { speaker: '4', ja: 'これは ジャクソンさんの くつです。', pt: 'Estes são os sapatos de Jackson.' },
    { speaker: '4', ja: 'イタリアの くつじゃないです。', pt: 'Não são sapatos italianos.' },
    { speaker: '4', ja: 'アメリカの くつです。', pt: 'São americanos.' },
  ],
}]

type FullAudioTranscript = NonNullable<AudioTrack['transcript']>

function fullTranscript(items: ScriptItem[]): FullAudioTranscript {
  return { kind: 'full', source: 'source-aligned', reviewed: true, items }
}

const fullTranscripts: Partial<Record<string, FullAudioTranscript>> = {
  K02_01: fullTranscript(dialogueOne),
  K02_03: fullTranscript(dialogueTwo),
  Y02_1: fullTranscript(katakanaRecognitionScript),
  Y02_2: fullTranscript(katakanaFoodScript),
  Y02_3: fullTranscript(katakanaReadingScript),
}

const trackFiles = [
  ...Array.from({ length: 15 }, (_, index) => `K02_${String(index + 1).padStart(2, '0')}`),
  'Y02_1', 'Y02_2', 'Y02_3', 'W02_1', 'W02_A', 'W02_B', 'W02_C',
]

const audios: AudioTrack[] = trackFiles.map((file) => {
  const transcript = fullTranscripts[file]
  return {
    id: `genki-1-l2-audio-${file.toLowerCase()}`,
    title: file === 'K02_01' ? 'Diálogo I - japonês'
      : file === 'K02_02' ? 'Diálogo I - apoio em inglês'
        : file === 'K02_03' ? 'Diálogo II - japonês'
          : file === 'K02_04' ? 'Diálogo II - apoio em inglês'
            : file === 'K02_05' ? 'Vocabulário - japonês para inglês'
              : file === 'K02_06' ? 'Vocabulário - inglês para japonês'
                : file.startsWith('Y02') ? `Leitura e escrita - Katakana ${file.slice(-1)}`
                  : file === 'W02_1' ? 'Workbook - Números'
                    : file.startsWith('W02') ? `Workbook - Compreensão ${file.slice(-1)}`
                      : `Prática do textbook - ${file}`,
    descriptionPt: file.startsWith('Y02') ? 'Faixa da seção de leitura e escrita da Lição 2.'
      : file.startsWith('W02') ? 'Faixa de exercícios do workbook da Lição 2.'
        : 'Faixa correspondente ao conteúdo e às práticas da Lição 2 no textbook.',
    src: `${AUDIO_BASE}/${file}.mp3`,
    script: transcript?.items ?? [],
    transcript,
  }
})

export const genki1Lesson2: Section = {
  id: 'lesson-2',
  level: 'genki-1',
  titleJa: '第2課　かいもの',
  titlePt: 'Lição 2 - Compras',
  summaryPt: 'Compras, preços, restaurante, demonstrativos, lugares, posse, negação, partículas も・ね・よ e katakana.',
  studyNotes: notes,
  groups: [
    group('dialogue', '会話', 'Compreensão dos diálogos', 'Revise as situações do mercado e do restaurante.', dialogue),
    group('vocabulary', '単語', 'Vocabulário', 'Pratique objetos, comidas, lugares e expressões da lição.', vocabulary),
    group('demonstratives', '文法 1・2', 'Demonstrativos', 'Escolha entre as séries これ e この conforme a distância e a estrutura.', demonstratives),
    group('places-possession', '文法 3・4', 'Lugares e posse', 'Pratique ここ・そこ・あそこ・どこ e だれの.', placesPossession),
    group('particles-negation', '文法 5・6・7', 'Também, negação e finais', 'Use も, じゃないです, ね e よ.', particlesNegation),
    group('numbers', '数字・お金', 'Números e preços', 'Leia valores e pratique as mudanças sonoras.', numbers),
    group('katakana', '読み書き', 'Katakana', 'Reconheça formas parecidas e palavras estrangeiras.', katakana),
    group('listening', '聞く練習', 'Compreensão oral do workbook', 'Ouça a faixa indicada antes de responder. Todas as questões entram na revisão FSRS com o áudio.', listening),
  ],
  audios,
}
