import type {
  AudioTrack,
  AudioTrackKind,
  ExerciseGroup,
  Question,
  ScriptItem,
  Section,
  StudyNote,
} from './types'

const AUDIO_BASE = '/audio/genki/genki-1/foundations'

function trackId(code: string): string {
  return `genki-1-foundations-audio-${code.toLowerCase().replace(/_/g, '-')}`
}

function audioSrc(code: string): string {
  return `${AUDIO_BASE}/${code}.mp3`
}

function question(
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  helpPt: string,
  audioCode: string,
  options: Partial<Pick<Question, 'context' | 'translationPt' | 'assessment'>> = {},
): Question {
  return {
    id: `genki-1-foundations-${id}`,
    number,
    prompt,
    choices: choices.map((text, index) => ({ n: index + 1, text })),
    answer,
    explanationPt,
    helpPt,
    audio: {
      trackId: trackId(audioCode),
      src: audioSrc(audioCode),
      title: `${audioCode} — modelo da fonte`,
    },
    ...options,
  }
}

function group(
  id: string,
  title: string,
  subtitlePt: string,
  instructionPt: string,
  questions: Question[],
  example: ExerciseGroup['example'],
): ExerciseGroup {
  return {
    id: `genki-1-foundations-${id}`,
    title,
    subtitlePt,
    instructionJa: '',
    instructionPt,
    questions,
    example,
  }
}

const studyNotes: StudyNote[] = [
  {
    title: 'Como usar estes fundamentos',
    bodyPt: `Este módulo reúne a preparação anterior à Lição 1 do livro-texto e do workbook.

1. Entenda para que serve cada sistema de escrita.
2. Ouça os modelos e repita sem olhar a romanização.
3. Resolva os exercícios de reconhecimento.
4. Use a revisão espaçada para retomar os sons e situações que ainda confundem.

As páginas de referência são: livro-texto p. 20–26 (escrita), p. 30–34 (cumprimentos) e p. 35 (números); workbook p. 11, 15 e 23.`,
    helpPt: `Faça sessões curtas. Em uma primeira passagem, priorize reconhecer o som; em outra, produza-o em voz alta. Não é necessário dominar kanji antes de começar a Lição 1.`,
  },
  {
    title: 'Três sistemas de escrita',
    bodyPt: `O japonês combina três tipos principais de caracteres em uma mesma frase:

- **hiragana** representa sons e aparece em terminações, palavras funcionais e muitas palavras japonesas;
- **katakana** também representa sons e costuma registrar empréstimos e nomes estrangeiros;
- **kanji** representa significado e som, aparecendo com frequência em substantivos e nas bases de verbos e adjetivos.

No exemplo do livro, \`テレビを{見|み}ます。\`, \`テレビ\` está em katakana, \`見\` é kanji e \`を／ます\` estão em hiragana. A romanização (*rōmaji*) é apenas um apoio inicial.`,
    helpPt: `Use a função como pista visual: formas mais arredondadas costumam ser hiragana; formas mais angulares costumam ser katakana. Depois confirme pelo uso na palavra, porque a aparência isolada não substitui a leitura.`,
  },
  {
    title: 'Hiragana: do quadro básico às combinações',
    bodyPt: `O quadro básico tem 46 sinais. Memorizar linhas por consoante e colunas por vogal ajuda a reconstruir a leitura:

- vogais: \`あ・い・う・え・お\`;
- linha K: \`か・き・く・け・こ\`;
- linhas seguintes: S, T, N, H, M, Y, R e W, mais \`ん\`.

Marcas diacríticas criam 23 sons adicionais: \`か→が\`, \`さ→ざ\`, \`た→だ\`, \`は→ば／ぱ\`. Um \`ゃ／ゅ／ょ\` pequeno depois de uma sílaba da coluna I forma um único som contraído, como \`きゃ\`, \`しゅ\` e \`ちょ\`.`,
    helpPt: `Treine por contrastes curtos: \`か／が\`, \`は／ば／ぱ\`, \`きや／きゃ\`. Se o segundo kana for pequeno, não acrescente uma sílaba inteira: \`きゃ\` tem um bloco rítmico.`,
  },
  {
    title: 'Duração, ん, queda de vogal e altura',
    bodyPt: `A duração pode mudar uma palavra:

- o \`っ\` pequeno segura a consoante seguinte: \`かった\` (*ganhou*) contrasta com \`かた\` (*ombro*);
- vogais longas duram aproximadamente o dobro: \`おばあさん\` (*avó*) contrasta com \`おばさん\` (*tia*);
- \`ん\` ocupa uma unidade rítmica própria, inclusive antes de outra sílaba iniciada por N.

As vogais \`い\` e \`う\` podem soar enfraquecidas ou desaparecer entre consoantes surdas, como em \`すきです\`. O japonês usa padrões de **altura** (alta/baixa), e não a mesma ênfase forte e longa típica do português.`,
    helpPt: `Bata palmas por unidade: \`か・っ・た\` e \`さ・ん・ね・ん\`. Para vogal longa, mantenha o som por duas batidas; para \`っ\`, mantenha uma batida de silêncio antes da consoante.`,
  },
  {
    title: 'Katakana e sons estrangeiros',
    bodyPt: `O katakana tem o mesmo conjunto básico de sons do hiragana e usa as mesmas ideias de diacríticos, combinações com \`ャ／ュ／ョ\` pequenos e \`ッ\` pequeno.

Diferenças importantes:

- vogais longas são escritas com \`ー\`: \`カー\`, \`ケーキ\`, \`ボール\`;
- vogais pequenas ampliam as combinações para sons estrangeiros: \`ウィ\`, \`ウェ\`, \`ウォ\`, \`シェ\`, \`ジェ\`, \`チェ\`, \`ファ／フィ／フェ／フォ\`, \`ティ\`, \`ディ\` e \`デュ\`.

O livro apresenta exemplos como \`ハロウィーン\`, \`ミネラルウォーター\`, \`シェフ\`, \`ジェームス\`, \`チェック\`, \`ファッション\`, \`フィリピン\`, \`カフェ\`, \`フォーク\`, \`パーティー\`, \`ディズニーランド\` e \`デュエット\`.`,
    helpPt: `Ao ler uma palavra estrangeira, divida-a nos blocos que o japonês permite. Em \`ファッション\`, identifique \`ファ\` + \`ッ\` + \`ショ\` + \`ン\`; cada bloco tem uma função audível.`,
  },
  {
    title: 'Cumprimentos, situação e grau de proximidade',
    bodyPt: `Escolha a expressão pela situação e pela relação com a pessoa:

| Situação | Expressão |
| --- | --- |
| manhã, íntimo | \`おはよう。\` |
| manhã, polido | \`おはよう ございます。\` |
| tarde | \`こんにちは。\` |
| noite | \`こんばんは。\` |
| antes de dormir | \`おやすみ（なさい）。\` |
| agradecimento íntimo/polido | \`ありがとう。／ありがとう ございます。\` |
| chamar atenção, desculpar-se ou agradecer pelo incômodo | \`すみません。\` |
| sair de casa / responder | \`いってきます。／いってらっしゃい。\` |
| voltar para casa / receber | \`ただいま。／おかえり（なさい）。\` |
| antes / depois da refeição | \`いただきます。／ごちそうさま（でした）。\` |

Para uma primeira apresentação: \`はじめまして。〜です。よろしく おねがいします。\``,
    helpPt: `Não traduza uma expressão isoladamente sem olhar a cena. \`すみません\`, por exemplo, pode ser “com licença”, “desculpe” ou um agradecimento pelo trabalho que a outra pessoa teve.`,
  },
  {
    title: 'Uso cotidiano e cultura dos cumprimentos',
    bodyPt: `As formas curtas \`おはよう\` e \`ありがとう\` combinam com amigos e família; as formas com \`ございます\` são mais polidas. \`さようなら\` sugere uma separação mais longa e não é a despedida diária padrão entre amigos; \`じゃあ、また\` é natural quando vocês esperam se ver logo, e \`しつれいします\` cabe ao sair, por exemplo, da sala de um professor.

No Japão, a reverência pode mostrar cumprimento, respeito, gratidão ou pedido de desculpas. Em geral, quanto mais longa e profunda, mais formal e respeitosa. Em contexto de negócios, a troca de cartões pode acompanhar uma pequena reverência.`,
    helpPt: `Atalho prático: primeiro escolha o **evento** (chegar, sair, comer, encontrar), depois ajuste a **polidez**. Essa ordem evita decorar traduções soltas.`,
  },
  {
    title: 'Números de 0 a 100',
    bodyPt: `As bases são \`いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう\`. Para formar dezenas, coloque o multiplicador antes de \`じゅう\` e a unidade depois: \`よんじゅうご\` = 4×10+5 = 45.

Variações apresentadas no livro:

- 0: \`ゼロ／れい\`;
- 4: \`よん／し／（よ）\`;
- 7: \`なな／しち\`;
- 9: \`きゅう／く\`;
- 14: \`じゅうよん／じゅうし\`;
- 17: \`じゅうなな／じゅうしち\`;
- 19: \`じゅうきゅう／じゅうく\`;
- 100: \`ひゃく\`.

O workbook amplia o reconhecimento auditivo para números como 101, 157 e 164.`,
    helpPt: `Para números maiores, separe em blocos: \`ひゃく・ろくじゅう・よん\` = 100 + 60 + 4. Em contas, calcule primeiro e só então converta o resultado para japonês.`,
  },
]

const writingQuestions = [
  question(
    'writing-1',
    1,
    'JWS_01: qual sequência completa corretamente a linha K do hiragana?',
    ['か・き・く・け・こ', 'さ・し・す・せ・そ', 'カ・キ・ク・ケ・コ', 'が・ぎ・ぐ・げ・ご'],
    1,
    'A linha K básica é か・き・く・け・こ. A terceira opção tem os mesmos sons em katakana; a quarta usa diacríticos.',
    'Observe primeiro o formato arredondado do hiragana e depois confirme cada coluna na ordem A–I–U–E–O.',
    'JWS_01',
  ),
  question(
    'writing-2',
    2,
    'JWS_02: qual série é formada ao acrescentar dakuten à linha K?',
    ['か・き・く・け・こ', 'が・ぎ・ぐ・げ・ご', 'ぱ・ぴ・ぷ・ぺ・ぽ', 'ざ・じ・ず・ぜ・ぞ'],
    2,
    'O dakuten transforma K em G: か→が, き→ぎ, く→ぐ, け→げ, こ→ご.',
    'Procure as duas pequenas marcas no canto superior direito. O círculo pequeno é handakuten e cria a linha P.',
    'JWS_02',
  ),
  question(
    'writing-3',
    3,
    'JWS_03: qual escrita representa um único som contraído “kyo”?',
    ['きよ', 'きょ', 'ぎょ', 'キョ'],
    2,
    'きょ usa um よ pequeno e forma um único som contraído. きよ mantém duas sílabas completas.',
    'Compare o tamanho de よ. A opção em katakana tem o mesmo som, mas esta faixa apresenta as combinações de hiragana.',
    'JWS_03',
  ),
  question(
    'writing-4',
    4,
    'JWS_04: qual palavra do modelo significa “ganhou” e contém uma consoante dupla?',
    ['かた', 'かった', 'さか', 'さっか'],
    2,
    'かった contém っ pequeno e significa “ganhou”. O livro contrasta かった com かた, “ombro”.',
    'O っ não recebe uma vogal própria: ele marca uma pausa curta antes de た.',
    'JWS_04',
  ),
  question(
    'writing-5',
    5,
    'JWS_05: como se escreve “três anos” no exemplo da faixa?',
    ['さねん', 'さんえん', 'さんねん', 'さっねん'],
    3,
    '“Três anos” é さんねん. O ん continua ocupando uma unidade antes da sílaba な/に/ぬ/ね/の.',
    'Marque quatro batidas: さ・ん・ね・ん. Não substitua ん por um っ pequeno.',
    'JWS_05',
  ),
  question(
    'writing-6',
    6,
    'JWS_06: qual forma significa “avó” no contraste de vogal longa?',
    ['おばさん', 'おばあさん', 'おじさん', 'おじいさん'],
    2,
    'おばあさん tem um あ longo e significa “avó”; おばさん, sem a duração extra, significa “tia”.',
    'Conte o あ por duas batidas em おばあさん. A duração faz parte da palavra, não é apenas ênfase.',
    'JWS_06',
  ),
  question(
    'writing-7',
    7,
    'JWS_07: em すきです, quais vogais podem soar enfraquecidas no modelo?',
    ['os dois あ', 'os dois い', 'os dois う', 'o え e o お'],
    3,
    'O livro marca す(う)きです(う): os dois sons de う podem ser enfraquecidos entre ou depois de consoantes surdas.',
    'A escrita não muda. Continue escrevendo すきです mesmo quando o う quase não for ouvido.',
    'JWS_07',
  ),
  question(
    'writing-8',
    8,
    'JWS_08: o que os modelos あさ, なまえ e たかい demonstram?',
    ['acento por altura alta/baixa', 'vogais sempre longas', 'uso do っ pequeno', 'mudança de hiragana para katakana'],
    1,
    'Os modelos apresentam padrões de altura. As sílabas mantêm duração e força relativamente uniformes, mas variam entre tons altos e baixos.',
    'Imite o contorno melódico sem alongar ou gritar a sílaba alta.',
    'JWS_08',
  ),
  question(
    'writing-9',
    9,
    'JWS_09: qual é a linha S correta em katakana?',
    ['サ・シ・ス・セ・ソ', 'さ・し・す・せ・そ', 'ザ・ジ・ズ・ゼ・ゾ', 'タ・チ・ツ・テ・ト'],
    1,
    'A linha S básica em katakana é サ・シ・ス・セ・ソ.',
    'A segunda opção está em hiragana e a terceira é a linha Z com dakuten.',
    'JWS_09',
  ),
  question(
    'writing-10',
    10,
    'JWS_10: qual sequência é a linha P em katakana?',
    ['バ・ビ・ブ・ベ・ボ', 'パ・ピ・プ・ペ・ポ', 'ハ・ヒ・フ・ヘ・ホ', 'ガ・ギ・グ・ゲ・ゴ'],
    2,
    'O handakuten, o pequeno círculo, transforma a linha H em パ・ピ・プ・ペ・ポ.',
    'Primeiro localize o círculo. Duas marcas diagonais criariam a linha B: バ・ビ・ブ・ベ・ボ.',
    'JWS_10',
  ),
  question(
    'writing-11',
    11,
    'JWS_11: qual forma registra o som contraído “shu” em katakana?',
    ['シユ', 'シュ', 'ジュ', 'しゅ'],
    2,
    'シュ combina シ com um ュ pequeno. ジュ tem dakuten e soa “ju”; しゅ está em hiragana.',
    'Confirme duas pistas ao mesmo tempo: o sistema katakana e o tamanho reduzido de ュ.',
    'JWS_11',
  ),
  question(
    'writing-12',
    12,
    'JWS_12: qual palavra do modelo usa ー para escrever uma vogal longa?',
    ['ケキ', 'ケーキ', 'けえき', 'ケッキ'],
    2,
    'ケーキ (“bolo”) usa ー para alongar a vogal anterior, como ensinado para katakana.',
    'Não confunda ー, que alonga, com ッ, que segura a consoante seguinte.',
    'JWS_12',
  ),
  question(
    'writing-13',
    13,
    'JWS_13: qual escrita corresponde a “fashion” no conjunto de sons estrangeiros?',
    ['ハッション', 'ファション', 'ファッション', 'ファッシオン'],
    3,
    'O exemplo da fonte é ファッション: ファ registra “fa”, ッ duplica a consoante e ショ registra “sho”.',
    'Divida em blocos: ファ・ッ・ショ・ン. Verifique se todos aparecem na mesma ordem.',
    'JWS_13',
  ),
  question(
    'writing-14',
    14,
    'W_JWS1: qual leitura corresponde à sequência ぬ・ね・め?',
    ['nu・ne・me', 'me・ne・nu', 'ne・nu・me', 'nu・me・ne'],
    1,
    'ぬ é nu, ね é ne e め é me. O workbook usa o áudio para revisar o quadro completo de hiragana.',
    'Compare os detalhes finais dos três sinais e fale cada som antes de escolher.',
    'W_JWS1',
  ),
  question(
    'writing-15',
    15,
    'W_JWS2: qual leitura corresponde à sequência ヌ・ネ・メ?',
    ['ne・nu・me', 'nu・ne・me', 'me・ne・nu', 'nu・me・ne'],
    2,
    'ヌ é nu, ネ é ne e メ é me. Esta faixa acompanha o quadro completo de katakana do workbook.',
    'Associe cada katakana ao mesmo som do hiragana, mas não confunda o formato dos dois sistemas.',
    'W_JWS2',
  ),
]

const greetingQuestions = [
  question(
    'greeting-1',
    16,
    'K00_01: você chega à aula de manhã e cumprimenta o professor. O que diz?',
    ['おはよう。', 'おはよう ございます。', 'こんばんは。', 'おやすみなさい。'],
    2,
    'Com o professor, a forma polida おはよう ございます é a escolha adequada.',
    'A situação pede duas decisões: manhã → おはよう; relação menos íntima → acrescente ございます.',
    'K00_01',
  ),
  question(
    'greeting-2',
    17,
    'K00_01: às 13h, você encontra o vizinho Sr. Yamada. Qual cumprimento combina com a situação?',
    ['こんにちは。', 'こんばんは。', 'おはよう。', 'おやすみなさい。'],
    1,
    'À tarde, o cumprimento padrão é こんにちは.',
    'Escolha pela parte do dia. A relação com o vizinho não muda a forma básica de こんにちは.',
    'K00_01',
  ),
  question(
    'greeting-3',
    18,
    'K00_01: no trem lotado, você pisa no pé de alguém. O que diz?',
    ['ありがとう。', 'すみません。', 'いいえ。', 'いただきます。'],
    2,
    'すみません funciona como pedido de desculpas nessa situação.',
    'Pergunte qual foi o evento: você causou incômodo. Entre os três usos de すみません, aqui vale “desculpe”.',
    'K00_01',
  ),
  question(
    'greeting-4',
    19,
    'K00_01: alguém pega o livro que você deixou cair. Qual resposta é natural e polida?',
    ['ありがとう ございます。', 'さようなら。', 'ただいま。', 'ごちそうさまでした。'],
    1,
    'ありがとう ございます agradece de modo polido a ajuda recebida.',
    'A outra pessoa fez algo por você; procure a expressão de agradecimento e ajuste a polidez.',
    'K00_01',
  ),
  question(
    'greeting-5',
    20,
    'K00_01: às 20h, você encontra seu professor numa loja. O que diz?',
    ['こんにちは。', 'こんばんは。', 'おはよう。', 'おやすみ。'],
    2,
    'À noite, ao encontrar alguém, use こんばんは.',
    'おやすみ é usado ao se retirar para dormir, não como cumprimento geral ao encontrar alguém à noite.',
    'K00_01',
  ),
  question(
    'greeting-6',
    21,
    'K00_01: você vai sair de casa. Qual par está na ordem correta?',
    ['いってらっしゃい → いってきます', 'いってきます → いってらっしゃい', 'ただいま → おかえりなさい', 'おかえりなさい → ただいま'],
    2,
    'Quem sai diz いってきます; quem fica responde いってらっしゃい.',
    'Siga o movimento: “vou e volto” parte de quem está saindo; “vá e volte” vem de quem permanece.',
    'K00_01',
  ),
  question(
    'greeting-7',
    22,
    'K00_01: você acabou de voltar para casa. Qual par está na ordem correta?',
    ['ただいま → おかえりなさい', 'おかえりなさい → ただいま', 'いってきます → いってらっしゃい', 'いただきます → ごちそうさま'],
    1,
    'Quem chega diz ただいま; a pessoa em casa responde おかえりなさい.',
    'Primeiro vem o anúncio de quem chegou; depois, a recepção “bem-vindo(a) de volta”.',
    'K00_01',
  ),
  question(
    'greeting-8',
    23,
    'K00_01: qual par marca o início e o fim de uma refeição?',
    ['いただきます → ごちそうさまでした', 'ごちそうさまでした → いただきます', 'ありがとう → いいえ', 'はじめまして → よろしく おねがいします'],
    1,
    'いただきます é dito antes de comer; ごちそうさまでした, depois da refeição.',
    'Associe いただきます ao prato ainda cheio e ごちそうさまでした ao prato já vazio.',
    'K00_01',
  ),
  question(
    'greeting-9',
    24,
    'K00_01: qual sequência forma uma primeira apresentação completa?',
    ['はじめまして。〜です。よろしく おねがいします。', 'こんにちは。いただきます。さようなら。', 'ただいま。〜です。おかえりなさい。', 'すみません。いいえ。ごちそうさま。'],
    1,
    'A fonte apresenta はじめまして, depois o nome com 〜です, e encerra com よろしく おねがいします.',
    'Pense em três funções: abrir o primeiro encontro, dizer quem você é e fechar cordialmente.',
    'K00_01',
  ),
  question(
    'greeting-10',
    25,
    'K00_01: qual despedida é mais natural entre amigos que esperam se ver logo?',
    ['さようなら。', 'じゃあ、また。', 'おやすみなさい。', 'いただきます。'],
    2,
    'A nota de uso recomenda じゃあ、また quando amigos esperam se encontrar novamente em breve.',
    'さようなら pode soar mais solene ou sugerir uma separação longa; ajuste a expressão à duração esperada.',
    'K00_01',
  ),
  question(
    'greeting-11',
    26,
    'K00_01: ao sair da sala de um professor, qual expressão é apropriada?',
    ['しつれいします。', 'いってらっしゃい。', 'ただいま。', 'おはよう。'],
    1,
    'A nota de expressão apresenta しつれいします como despedida apropriada ao sair, por exemplo, da sala de um professor.',
    'A ideia é “com licença pela saída/interrupção”, uma fórmula de cortesia ligada ao contexto formal.',
    'K00_01',
  ),
]

const numberQuestions = [
  question(
    'number-1',
    27,
    'K00_02: quais duas leituras de 0 aparecem na lista da fonte?',
    ['ゼロ／れい', 'まる／ぜろ', 'れい／いち', 'ゼロ／なし'],
    1,
    'A lista apresenta 0 como ゼロ ou れい.',
    'Lembre que uma forma é um empréstimo em katakana e a outra é a leitura japonesa em hiragana.',
    'K00_02',
  ),
  question(
    'number-2',
    28,
    'K00_03: qual é uma leitura válida para o número 7?',
    ['なな', 'ろく', 'はち', 'きゅう'],
    1,
    '7 pode ser lido なな ou しち. A prática A trabalha os números de um algarismo e 10.',
    'Se uma opção traz uma das variações registradas na tabela, ela continua correta mesmo que a outra também exista.',
    'K00_03',
  ),
  question(
    'number-3',
    29,
    'K00_04: como se lê 83?',
    ['はちじゅうさん', 'はちじゅうし', 'さんじゅうはち', 'はちひゃくさん'],
    1,
    '83 é 8×10+3: はちじゅうさん.',
    'Separe em dois blocos: 80 = はちじゅう; 3 = さん.',
    'K00_04',
  ),
  question(
    'number-4',
    30,
    'K00_05: qual é o resultado de 40−25 em japonês?',
    ['じゅうご', 'にじゅうご', 'さんじゅうご', 'ごじゅうご'],
    1,
    '40−25=15, e 15 se lê じゅうご.',
    'Calcule primeiro em algarismos; depois converta 10 + 5 para じゅう + ご.',
    'K00_05',
  ),
  question(
    'number-5',
    31,
    'W00: qual número corresponde a ひゃくろくじゅうよん?',
    ['146', '154', '164', '614'],
    3,
    'ひゃくろくじゅうよん se divide em 100 + 60 + 4, portanto 164.',
    'Marque os blocos: ひゃく | ろくじゅう | よん. Não leia como uma sequência de dígitos isolados.',
    'W00',
  ),
]

const groups: ExerciseGroup[] = [
  group(
    'writing',
    'もじと おと',
    'Sistema de escrita e pronúncia',
    'Ouça a faixa indicada, repita o trecho-alvo e escolha a forma que corresponde ao modelo e à regra da fonte.',
    writingQuestions,
    {
      prompt: 'Qual opção está em hiragana?',
      choices: [
        { n: 1, text: 'あ' },
        { n: 2, text: 'ア' },
        { n: 3, text: 'A' },
        { n: 4, text: '一' },
      ],
      answer: 1,
      note: 'あ é hiragana; ア é katakana.',
      helpPt: 'Compare a forma arredondada de あ com a forma angular de ア.',
    },
  ),
  group(
    'greetings',
    'あいさつ',
    'Cumprimentos em contexto',
    'Ouça K00_01 e escolha a expressão adequada para cada situação do livro-texto e das notas de uso.',
    greetingQuestions,
    {
      prompt: 'Você encontra um amigo pela manhã. O que diz?',
      choices: [
        { n: 1, text: 'おはよう。' },
        { n: 2, text: 'こんばんは。' },
        { n: 3, text: 'ただいま。' },
        { n: 4, text: 'いただきます。' },
      ],
      answer: 1,
      note: 'おはよう é o cumprimento matinal informal.',
      helpPt: 'Primeiro identifique o horário; depois ajuste a polidez à relação.',
    },
  ),
  group(
    'numbers',
    'すうじ',
    'Leitura, composição e contas',
    'Ouça cada modelo, identifique os blocos numéricos e escolha a leitura ou o resultado correspondente.',
    numberQuestions,
    {
      prompt: 'Como se lê 45?',
      choices: [
        { n: 1, text: 'よんじゅうご' },
        { n: 2, text: 'ごじゅうよん' },
        { n: 3, text: 'よんひゃくご' },
        { n: 4, text: 'じゅうよんご' },
      ],
      answer: 1,
      note: '45 = 4×10+5 = よんじゅうご.',
      helpPt: 'Monte a dezena antes da unidade: よん + じゅう + ご.',
    },
  ),
]

const greetingTranscript: ScriptItem[] = [
  { label: '1', lines: [{ speaker: 'Modelo', ja: 'おはよう。', pt: 'Bom dia. (informal)' }] },
  { label: '2', lines: [{ speaker: 'Modelo', ja: 'おはよう ございます。', pt: 'Bom dia. (polido)' }] },
  { label: '3', lines: [{ speaker: 'Modelo', ja: 'こんにちは。', pt: 'Boa tarde; olá.' }] },
  { label: '4', lines: [{ speaker: 'Modelo', ja: 'こんばんは。', pt: 'Boa noite. (ao encontrar)' }] },
  { label: '5', lines: [{ speaker: 'Modelo', ja: 'さようなら。', pt: 'Adeus.' }] },
  { label: '6', lines: [{ speaker: 'Modelo', ja: 'おやすみ（なさい）。', pt: 'Boa noite. (antes de dormir)' }] },
  { label: '7', lines: [{ speaker: 'Modelo', ja: 'ありがとう。', pt: 'Obrigado(a). (informal)' }] },
  { label: '8', lines: [{ speaker: 'Modelo', ja: 'ありがとう ございます。', pt: 'Muito obrigado(a). (polido)' }] },
  { label: '9', lines: [{ speaker: 'Modelo', ja: 'すみません。', pt: 'Com licença; desculpe; obrigado(a) pelo incômodo.' }] },
  { label: '10', lines: [{ speaker: 'Modelo', ja: 'いいえ。', pt: 'Não; de nada.' }] },
  { label: '11', lines: [{ speaker: 'Modelo', ja: 'いってきます。', pt: 'Estou saindo e volto.' }] },
  { label: '12', lines: [{ speaker: 'Modelo', ja: 'いってらっしゃい。', pt: 'Vá e volte bem.' }] },
  { label: '13', lines: [{ speaker: 'Modelo', ja: 'ただいま。', pt: 'Cheguei; estou em casa.' }] },
  { label: '14', lines: [{ speaker: 'Modelo', ja: 'おかえり（なさい）。', pt: 'Bem-vindo(a) de volta.' }] },
  { label: '15', lines: [{ speaker: 'Modelo', ja: 'いただきます。', pt: 'Agradeço pela refeição. (antes de comer)' }] },
  { label: '16', lines: [{ speaker: 'Modelo', ja: 'ごちそうさま（でした）。', pt: 'Obrigado(a) pela refeição. (depois de comer)' }] },
  { label: '17', lines: [{ speaker: 'Modelo', ja: 'はじめまして。', pt: 'Muito prazer; como vai?' }] },
  { label: '18', lines: [{ speaker: 'Modelo', ja: '〜です。', pt: 'Eu sou…' }] },
  { label: '19', lines: [{ speaker: 'Modelo', ja: 'よろしく おねがいします。', pt: 'Prazer em conhecê-lo(a); conto com você.' }] },
]

const numberTranscript: ScriptItem[] = [
  {
    label: '0–10',
    lines: [
      { speaker: 'Modelo', ja: 'ゼロ／れい', pt: '0' },
      { speaker: 'Modelo', ja: 'いち', pt: '1' },
      { speaker: 'Modelo', ja: 'に', pt: '2' },
      { speaker: 'Modelo', ja: 'さん', pt: '3' },
      { speaker: 'Modelo', ja: 'よん／し／（よ）', pt: '4' },
      { speaker: 'Modelo', ja: 'ご', pt: '5' },
      { speaker: 'Modelo', ja: 'ろく', pt: '6' },
      { speaker: 'Modelo', ja: 'なな／しち', pt: '7' },
      { speaker: 'Modelo', ja: 'はち', pt: '8' },
      { speaker: 'Modelo', ja: 'きゅう／く', pt: '9' },
      { speaker: 'Modelo', ja: 'じゅう', pt: '10' },
    ],
  },
  {
    label: '11–20',
    lines: [
      { speaker: 'Modelo', ja: 'じゅういち', pt: '11' },
      { speaker: 'Modelo', ja: 'じゅうに', pt: '12' },
      { speaker: 'Modelo', ja: 'じゅうさん', pt: '13' },
      { speaker: 'Modelo', ja: 'じゅうよん／じゅうし', pt: '14' },
      { speaker: 'Modelo', ja: 'じゅうご', pt: '15' },
      { speaker: 'Modelo', ja: 'じゅうろく', pt: '16' },
      { speaker: 'Modelo', ja: 'じゅうなな／じゅうしち', pt: '17' },
      { speaker: 'Modelo', ja: 'じゅうはち', pt: '18' },
      { speaker: 'Modelo', ja: 'じゅうきゅう／じゅうく', pt: '19' },
      { speaker: 'Modelo', ja: 'にじゅう', pt: '20' },
    ],
  },
  {
    label: 'Dezenas e 100',
    lines: [
      { speaker: 'Modelo', ja: 'さんじゅう', pt: '30' },
      { speaker: 'Modelo', ja: 'よんじゅう', pt: '40' },
      { speaker: 'Modelo', ja: 'ごじゅう', pt: '50' },
      { speaker: 'Modelo', ja: 'ろくじゅう', pt: '60' },
      { speaker: 'Modelo', ja: 'ななじゅう', pt: '70' },
      { speaker: 'Modelo', ja: 'はちじゅう', pt: '80' },
      { speaker: 'Modelo', ja: 'きゅうじゅう', pt: '90' },
      { speaker: 'Modelo', ja: 'ひゃく', pt: '100' },
    ],
  },
]

const allQuestions = groups.flatMap((exerciseGroup) => exerciseGroup.questions)

interface AudioDefinition {
  code: string
  kind: AudioTrackKind
  title: string
  descriptionPt: string
  purposePt: string
  instructionsPt: string[]
  sourceRefPt: string
  transcript?: ScriptItem[]
}

function audioTrack(definition: AudioDefinition): AudioTrack {
  const id = trackId(definition.code)
  const exerciseQuestions = allQuestions.filter((item) => item.audio?.trackId === id)
  const exerciseQuestionIds = new Set(exerciseQuestions.map((item) => item.id))
  const exerciseGroupIds = groups
    .filter((exerciseGroup) => exerciseGroup.questions.some((item) => exerciseQuestionIds.has(item.id)))
    .map((exerciseGroup) => exerciseGroup.id)

  return {
    id,
    code: definition.code,
    kind: definition.kind,
    language: 'ja',
    title: definition.title,
    descriptionPt: definition.descriptionPt,
    purposePt: definition.purposePt,
    instructionsPt: definition.instructionsPt,
    sourceRefPt: definition.sourceRefPt,
    exerciseIds: exerciseQuestions.map((item) => item.id),
    exerciseGroupIds,
    exerciseLinkKind: 'direct',
    src: audioSrc(definition.code),
    script: definition.transcript ?? [],
    transcript: definition.transcript
      ? {
          kind: 'full',
          source: 'source-aligned',
          reviewed: true,
          items: definition.transcript,
        }
      : undefined,
  }
}

const audioDefinitions: AudioDefinition[] = [
  {
    code: 'JWS_01',
    kind: 'reference',
    title: 'JWS_01 — Hiragana básico',
    descriptionPt: 'Modelo sonoro das 46 sílabas básicas do quadro de hiragana.',
    purposePt: 'Associar cada hiragana básico ao som correspondente.',
    instructionsPt: ['Ouça uma linha sem olhar a romanização.', 'Repita na ordem A–I–U–E–O.', 'Resolva a questão e marque os sinais que confundiu.'],
    sourceRefPt: 'Genki I, livro-texto, p. 20–21 — Basic Hiragana Syllables.',
  },
  {
    code: 'JWS_02',
    kind: 'reference',
    title: 'JWS_02 — Hiragana com diacríticos',
    descriptionPt: 'Modelo das séries com dakuten e handakuten.',
    purposePt: 'Distinguir K/G, S/Z, T/D e H/B/P pela escrita e pelo som.',
    instructionsPt: ['Ouça cada série.', 'Alterne a forma básica e a modificada em voz alta.', 'Faça a questão de contraste.'],
    sourceRefPt: 'Genki I, livro-texto, p. 21 — Hiragana with Diacritical Marks.',
  },
  {
    code: 'JWS_03',
    kind: 'reference',
    title: 'JWS_03 — Sons contraídos em hiragana',
    descriptionPt: 'Modelo das combinações com ゃ, ゅ e ょ pequenos.',
    purposePt: 'Reconhecer uma combinação contraída como um único bloco sonoro.',
    instructionsPt: ['Ouça e acompanhe o tamanho do segundo kana.', 'Compare きよ com きょ.', 'Resolva a identificação de kyo.'],
    sourceRefPt: 'Genki I, livro-texto, p. 22 — Transcribing Contracted Sounds.',
  },
  {
    code: 'JWS_04',
    kind: 'drill',
    title: 'JWS_04 — Consoantes duplas com っ',
    descriptionPt: 'Contrastes com っ pequeno: かった, さっか, はっぱ e ざっし.',
    purposePt: 'Ouvir e produzir a pausa que marca uma consoante dupla.',
    instructionsPt: ['Ouça o espaço antes da consoante.', 'Repita contando três unidades.', 'Identifique o contraste かった／かた.'],
    sourceRefPt: 'Genki I, livro-texto, p. 22 — Transcribing Double Consonants.',
  },
  {
    code: 'JWS_05',
    kind: 'drill',
    title: 'JWS_05 — ん antes de N',
    descriptionPt: 'Modelos さんねん e あんない.',
    purposePt: 'Manter ん como uma unidade rítmica própria antes de outra sílaba N.',
    instructionsPt: ['Ouça a duração de ん.', 'Repita com batidas regulares.', 'Escolha a escrita de さんねん.'],
    sourceRefPt: 'Genki I, livro-texto, p. 22 — Double Consonant n.',
  },
  {
    code: 'JWS_06',
    kind: 'drill',
    title: 'JWS_06 — Vogais longas em hiragana',
    descriptionPt: 'Contrastes de duração: おばあさん／おばさん, おじいさん／おじさん e outros modelos.',
    purposePt: 'Perceber que a duração da vogal pode mudar a palavra.',
    instructionsPt: ['Ouça cada par.', 'Sustente a vogal longa por duas batidas.', 'Resolva o contraste de parentesco.'],
    sourceRefPt: 'Genki I, livro-texto, p. 23 — Long Vowels.',
  },
  {
    code: 'JWS_07',
    kind: 'drill',
    title: 'JWS_07 — Queda de vogais',
    descriptionPt: 'Modelo すきです com enfraquecimento do som de う.',
    purposePt: 'Reconhecer a pronúncia natural sem alterar a ortografia.',
    instructionsPt: ['Ouça sem tentar inserir um う forte.', 'Repita mantendo o ritmo.', 'Identifique quais vogais são enfraquecidas.'],
    sourceRefPt: 'Genki I, livro-texto, p. 23 — Vowels to Be Dropped.',
  },
  {
    code: 'JWS_08',
    kind: 'reference',
    title: 'JWS_08 — Altura das sílabas',
    descriptionPt: 'Modelos de padrão de altura em あさ, なまえ e たかい.',
    purposePt: 'Imitar a melodia sem transformar altura em força ou duração.',
    instructionsPt: ['Ouça o contorno alto/baixo.', 'Repita com volume uniforme.', 'Identifique o fenômeno apresentado.'],
    sourceRefPt: 'Genki I, livro-texto, p. 24 — Accent in the Japanese Language.',
  },
  {
    code: 'JWS_09',
    kind: 'reference',
    title: 'JWS_09 — Katakana básico',
    descriptionPt: 'Modelo sonoro das 46 sílabas básicas do quadro de katakana.',
    purposePt: 'Associar cada katakana básico ao mesmo inventário sonoro do hiragana.',
    instructionsPt: ['Ouça por linhas.', 'Repita sem romanização.', 'Diferencie a linha S de hiragana e katakana.'],
    sourceRefPt: 'Genki I, livro-texto, p. 24 — Basic Katakana Syllables.',
  },
  {
    code: 'JWS_10',
    kind: 'reference',
    title: 'JWS_10 — Katakana com diacríticos',
    descriptionPt: 'Modelo das séries de katakana com dakuten e handakuten.',
    purposePt: 'Reconhecer as séries sonoras modificadas em katakana.',
    instructionsPt: ['Ouça cada série.', 'Compare ハ／バ／パ.', 'Identifique a linha P.'],
    sourceRefPt: 'Genki I, livro-texto, p. 25 — Katakana with Diacritical Marks.',
  },
  {
    code: 'JWS_11',
    kind: 'reference',
    title: 'JWS_11 — Sons contraídos em katakana',
    descriptionPt: 'Modelo das combinações de katakana com ャ, ュ e ョ pequenos.',
    purposePt: 'Ler combinações contraídas em katakana como um único bloco.',
    instructionsPt: ['Ouça cada coluna.', 'Compare シユ e シュ.', 'Escolha a escrita de shu.'],
    sourceRefPt: 'Genki I, livro-texto, p. 25 — Transcribing Contracted Sounds.',
  },
  {
    code: 'JWS_12',
    kind: 'drill',
    title: 'JWS_12 — Vogais longas em katakana',
    descriptionPt: 'Modelos カー, スキー, スーツ, ケーキ e ボール.',
    purposePt: 'Usar ー para reconhecer e produzir vogais longas em katakana.',
    instructionsPt: ['Ouça a duração marcada por ー.', 'Repita sem encurtar.', 'Identifique ケーキ.'],
    sourceRefPt: 'Genki I, livro-texto, p. 26 — Long Vowels.',
  },
  {
    code: 'JWS_13',
    kind: 'drill',
    title: 'JWS_13 — Sons estrangeiros',
    descriptionPt: 'Modelos com vogais pequenas para sons estrangeiros.',
    purposePt: 'Segmentar empréstimos em combinações possíveis no japonês.',
    instructionsPt: ['Ouça cada combinação inicial.', 'Separe a palavra em blocos.', 'Reconstrua ファッション.'],
    sourceRefPt: 'Genki I, livro-texto, p. 26 — Transcribing Foreign Sounds.',
  },
  {
    code: 'K00_01',
    kind: 'dialogue-support',
    title: 'K00_01 — Cumprimentos',
    descriptionPt: 'Lista completa de cumprimentos e fórmulas sociais da introdução.',
    purposePt: 'Escolher a expressão adequada ao horário, evento e grau de proximidade.',
    instructionsPt: ['Ouça uma vez sem ler.', 'Abra a transcrição e repita por situação.', 'Resolva as cenas e envie as respostas à revisão.'],
    sourceRefPt: 'Genki I, livro-texto, p. 30–34 — Greetings, Expression Notes e Practice.',
    transcript: greetingTranscript,
  },
  {
    code: 'K00_02',
    kind: 'vocabulary',
    title: 'K00_02 — Números de 0 a 100',
    descriptionPt: 'Lista-base de números e variações de leitura.',
    purposePt: 'Reconhecer as bases e formar dezenas com segurança.',
    instructionsPt: ['Ouça acompanhando apenas os algarismos.', 'Repita as variantes sem misturá-las.', 'Resolva a questão sobre 0.'],
    sourceRefPt: 'Genki I, livro-texto, p. 35 — Numbers.',
    transcript: numberTranscript,
  },
  {
    code: 'K00_03',
    kind: 'drill',
    title: 'K00_03 — Números básicos',
    descriptionPt: 'Prática A com 5, 9, 7, 1, 10, 8, 2, 6, 4 e 3.',
    purposePt: 'Ler rapidamente números de um algarismo e 10.',
    instructionsPt: ['Tente ler antes do modelo.', 'Ouça e corrija a pronúncia.', 'Responda usando uma leitura válida de 7.'],
    sourceRefPt: 'Genki I, livro-texto, p. 35 — Practice A.',
  },
  {
    code: 'K00_04',
    kind: 'drill',
    title: 'K00_04 — Dezenas',
    descriptionPt: 'Prática B com 45, 83, 19, 76, 52, 100, 38, 61, 24 e 97.',
    purposePt: 'Compor dezenas e unidades na ordem japonesa.',
    instructionsPt: ['Pause e leia cada número.', 'Ouça o modelo.', 'Resolva a leitura de 83.'],
    sourceRefPt: 'Genki I, livro-texto, p. 35 — Practice B.',
  },
  {
    code: 'K00_05',
    kind: 'drill',
    title: 'K00_05 — Contas em japonês',
    descriptionPt: 'Prática C com somas e subtrações simples.',
    purposePt: 'Converter o resultado de uma conta em leitura japonesa.',
    instructionsPt: ['Calcule antes de ouvir.', 'Diga o resultado em japonês.', 'Confira com o áudio e resolva 40−25.'],
    sourceRefPt: 'Genki I, livro-texto, p. 35 — Practice C.',
  },
  {
    code: 'W_JWS1',
    kind: 'workbook',
    title: 'W_JWS1 — Quadro de hiragana',
    descriptionPt: 'Revisão auditiva do quadro completo de hiragana do workbook.',
    purposePt: 'Consolidar o reconhecimento sem depender de romanização.',
    instructionsPt: ['Acompanhe o quadro por linhas.', 'Repita sem olhar a romanização.', 'Resolva o contraste ぬ／ね／め.'],
    sourceRefPt: 'Genki I, workbook, p. 11 — Japanese Writing System 1: Hiragana.',
  },
  {
    code: 'W_JWS2',
    kind: 'workbook',
    title: 'W_JWS2 — Quadro de katakana',
    descriptionPt: 'Revisão auditiva do quadro completo de katakana do workbook.',
    purposePt: 'Consolidar os sinais básicos de katakana e seus sons.',
    instructionsPt: ['Acompanhe o quadro por linhas.', 'Compare com os sons do hiragana.', 'Resolva o contraste ヌ／ネ／メ.'],
    sourceRefPt: 'Genki I, workbook, p. 23 — Japanese Writing System 2: Katakana.',
  },
  {
    code: 'W00',
    kind: 'workbook',
    title: 'W00 — Ditado de números',
    descriptionPt: 'Leitura auditiva de números entre 0 e 164.',
    purposePt: 'Converter números falados em algarismos, incluindo centenas.',
    instructionsPt: ['Ouça sem olhar a resposta.', 'Separe centena, dezena e unidade.', 'Resolva a leitura de 164.'],
    sourceRefPt: 'Genki I, workbook, p. 15 — Numbers.',
  },
]

export const genki1Foundations: Section = {
  id: 'foundations',
  level: 'genki-1',
  titleJa: 'はじめの じゅんび',
  titlePt: 'Fundamentos',
  summaryPt: 'Sistema de escrita, pronúncia, cumprimentos e números para começar o Genki I com uma base praticável e revisável.',
  studyNotes,
  groups,
  audios: audioDefinitions.map(audioTrack),
}
