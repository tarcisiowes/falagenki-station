import type { AudioTrack, ExerciseGroup, Level, Section, StudyNote } from './types'

// =====================================================================
//  Irodori — いろどり: Japanese for Life in Japan (Japan Foundation)
//  Parte "Starter" (入門 / A1): 9 tópicos, 18 lições (課).
//  Estrutura por módulos (lições). Conteúdo baseado no material oficial;
//  explicações e traduções em pt-BR são autorais.
// =====================================================================

const L00_AUDIO: AudioTrack[] = [
  { id: 'iro-s-00-01', title: '00-01 · kyoshitsu1', descriptionPt: 'Expressões de sala de aula', src: '/audio/irodori/starter/00-01_kyoshitsu1.mp3', script: [] },
  { id: 'iro-s-00-02', title: '00-02 · kyoshitsu2', descriptionPt: 'Expressões de sala de aula', src: '/audio/irodori/starter/00-02_kyoshitsu2.mp3', script: [] },
  { id: 'iro-s-00-03', title: '00-03 · kyoshitsu3', descriptionPt: 'Expressões de sala de aula', src: '/audio/irodori/starter/00-03_kyoshitsu3.mp3', script: [] },
  { id: 'iro-s-00-04', title: '00-04 · kyoshitsu4', descriptionPt: 'Expressões de sala de aula', src: '/audio/irodori/starter/00-04_kyoshitsu4.mp3', script: [] },
  { id: 'iro-s-00-05', title: '00-05 · kyoshitsu5', descriptionPt: 'Expressões de sala de aula', src: '/audio/irodori/starter/00-05_kyoshitsu5.mp3', script: [] },
]

const L01_AUDIO: AudioTrack[] = [
  { id: 'iro-s-01-01', title: '01-01 · kiku', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-01_kiku.mp3', script: [] },
  { id: 'iro-s-01-02', title: '01-02 · kiku1', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-02_kiku1.mp3', script: [] },
  { id: 'iro-s-01-03', title: '01-03 · kiku2', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-03_kiku2.mp3', script: [] },
  { id: 'iro-s-01-04', title: '01-04 · kiku3', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-04_kiku3.mp3', script: [] },
  { id: 'iro-s-01-05', title: '01-05 · kiku4', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-05_kiku4.mp3', script: [] },
  { id: 'iro-s-01-06', title: '01-06 · hanasu1-1', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-06_hanasu1-1.mp3', script: [] },
  { id: 'iro-s-01-07', title: '01-07 · hanasu1-2', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-07_hanasu1-2.mp3', script: [] },
  { id: 'iro-s-01-08', title: '01-08 · hanasu2', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-08_hanasu2.mp3', script: [] },
  { id: 'iro-s-01-09', title: '01-09 · hanasu3', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-09_hanasu3.mp3', script: [] },
  { id: 'iro-s-01-10', title: '01-10 · kiku1', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-10_kiku1.mp3', script: [] },
  { id: 'iro-s-01-11', title: '01-11 · kiku2', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-11_kiku2.mp3', script: [] },
  { id: 'iro-s-01-12', title: '01-12 · kiku3', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-12_kiku3.mp3', script: [] },
  { id: 'iro-s-01-13', title: '01-13 · kiku4', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-13_kiku4.mp3', script: [] },
  { id: 'iro-s-01-14', title: '01-14 · hanasu1-1', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-14_hanasu1-1.mp3', script: [] },
  { id: 'iro-s-01-15', title: '01-15 · hanasu1-2', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-15_hanasu1-2.mp3', script: [] },
  { id: 'iro-s-01-16', title: '01-16 · hanasu2', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-16_hanasu2.mp3', script: [] },
  { id: 'iro-s-01-17', title: '01-17 · hanasu3', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-17_hanasu3.mp3', script: [] },
  { id: 'iro-s-01-18', title: '01-18 · kiku1', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-18_kiku1.mp3', script: [] },
  { id: 'iro-s-01-19', title: '01-19 · kiku2', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-19_kiku2.mp3', script: [] },
  { id: 'iro-s-01-20', title: '01-20 · kiku3', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-20_kiku3.mp3', script: [] },
  { id: 'iro-s-01-21', title: '01-21 · kiku4', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-21_kiku4.mp3', script: [] },
  { id: 'iro-s-01-22', title: '01-22 · kiku5', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-22_kiku5.mp3', script: [] },
  { id: 'iro-s-01-23', title: '01-23 · kiku6', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-23_kiku6.mp3', script: [] },
  { id: 'iro-s-01-24', title: '01-24 · kiku7', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-24_kiku7.mp3', script: [] },
  { id: 'iro-s-01-25', title: '01-25 · kiku8', descriptionPt: 'Compreensão auditiva (聞く)', src: '/audio/irodori/starter/01-25_kiku8.mp3', script: [] },
  { id: 'iro-s-01-26', title: '01-26 · hanasu1-1', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-26_hanasu1-1.mp3', script: [] },
  { id: 'iro-s-01-27', title: '01-27 · hanasu1-2', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-27_hanasu1-2.mp3', script: [] },
  { id: 'iro-s-01-28', title: '01-28 · hanasu1-3', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-28_hanasu1-3.mp3', script: [] },
  { id: 'iro-s-01-29', title: '01-29 · hanasu2', descriptionPt: 'Conversação / fala (話す)', src: '/audio/irodori/starter/01-29_hanasu2.mp3', script: [] },
  { id: 'iro-s-01-30', title: '01-30 · hiragana1', descriptionPt: 'Hiragana (ひらがな)', src: '/audio/irodori/starter/01-30_hiragana1.mp3', script: [] },
  { id: 'iro-s-01-31', title: '01-31 · hiragana2', descriptionPt: 'Hiragana (ひらがな)', src: '/audio/irodori/starter/01-31_hiragana2.mp3', script: [] },
  { id: 'iro-s-01-32', title: '01-32 · hiragana3', descriptionPt: 'Hiragana (ひらがな)', src: '/audio/irodori/starter/01-32_hiragana3.mp3', script: [] },
  { id: 'iro-s-01-33', title: '01-33 · hiragana4', descriptionPt: 'Hiragana (ひらがな)', src: '/audio/irodori/starter/01-33_hiragana4.mp3', script: [] },
  { id: 'iro-s-01-34', title: '01-34 · hiragana (alongamento)', descriptionPt: 'Hiragana — vogal longa', src: '/audio/irodori/starter/01-34_hiragana_nobasu.mp3', script: [] },
  { id: 'iro-s-01-35', title: '01-35 · hiragana (っ)', descriptionPt: 'Hiragana — consoante dupla', src: '/audio/irodori/starter/01-35_hiragana_tsumaru.mp3', script: [] },
]

// --- helper para os módulos ainda em construção --------------------------
function canDoNotes(topicPt: string, candos: string[], extra?: string): StudyNote[] {
  return [
    {
      title: `Tópico: ${topicPt}`,
      bodyPt:
        `Esta lição faz parte do tópico **${topicPt}**.\n\n## O que você vai conseguir fazer (Can-do)\n` +
        candos.map((c) => `- ${c}`).join('\n') +
        (extra ? `\n\n${extra}` : '') +
        `\n\n> ⏳ Exercícios e transcrição desta lição estão em construção. Os áudios oficiais serão adicionados em breve.`,
    },
  ]
}

function scaffold(
  n: number,
  topicPt: string,
  titleJa: string,
  titlePt: string,
  candos: string[],
): Section {
  return {
    id: `lesson-${n}`,
    level: 'starter',
    titleJa: `第${n}課 ${titleJa}`,
    titlePt: `Lição ${n} — ${titlePt}`,
    summaryPt: `${topicPt} · ${titlePt}`,
    studyNotes: canDoNotes(topicPt, candos),
    groups: [],
  }
}

// ---- Lição 0: Sala de aula ----------------------------------------------
const lesson0Group: ExerciseGroup = {
  id: 'iro-s-l0-classroom',
  title: 'きょうしつのことば',
  subtitlePt: 'Expressões de sala de aula',
  instructionJa: 'クラスでよく つかう ことばです。いみを えらんで ください。',
  instructionPt: 'Expressões comuns na sala de aula. Escolha o significado/uso correto.',
  questions: [
    { id: 'iro-s-l0-1', number: 1, prompt: 'O professor diz 「もう いちど おねがいします」. O que significa?', choices: [{ n: 1, text: 'Mais uma vez, por favor.' }, { n: 2, text: 'Pode entrar.' }, { n: 3, text: 'Está correto.' }, { n: 4, text: 'Até logo.' }], answer: 1, explanationPt: 'もう いちど = mais uma vez; おねがいします = por favor. Pede-se para repetir.' },
    { id: 'iro-s-l0-2', number: 2, prompt: 'Para dizer que você ENTENDEU, você diz:', choices: [{ n: 1, text: 'わかりません' }, { n: 2, text: 'わかりました' }, { n: 3, text: 'すみません' }, { n: 4, text: 'おはようございます' }], answer: 2, explanationPt: 'わかりました = entendi. わかりません = não entendo.' },
    { id: 'iro-s-l0-3', number: 3, prompt: 'Para dizer que você NÃO entendeu:', choices: [{ n: 1, text: 'わかりました' }, { n: 2, text: 'だいじょうぶです' }, { n: 3, text: 'わかりません' }, { n: 4, text: 'いただきます' }], answer: 3, explanationPt: 'わかりません = não entendo / não entendi.' },
  ],
}

const lesson0: Section = {
  id: 'lesson-0',
  level: 'starter',
  titleJa: 'はじめに：きょうしつの ことば',
  titlePt: 'Lição 0 — Expressões de sala de aula',
  summaryPt: 'Começar a falar japonês · frases úteis da sala de aula',
  studyNotes: [
    {
      title: 'Expressões da sala de aula (きょうしつの ことば)',
      bodyPt:
        'Antes da Lição 1, conheça as frases que o professor e os alunos mais usam em aula:\n\n' +
        '| Japonês | Português |\n|---|---|\n' +
        '| もう いちど おねがいします | Mais uma vez, por favor |\n' +
        '| わかりました | Entendi |\n' +
        '| わかりません | Não entendi |\n' +
        '| しつもんが あります | Tenho uma pergunta |\n' +
        '| ちょっと まって ください | Espere um momento, por favor |\n' +
        '| だいじょうぶです | Tudo bem / Está ok |\n\n' +
        'Ouça os áudios `kyoshitsu` para treinar a pronúncia.',
    },
  ],
  groups: [lesson0Group],
  audios: L00_AUDIO,
}

// ---- Lição 1: Saudações --------------------------------------------------
const lesson1Group: ExerciseGroup = {
  id: 'iro-s-l1-greetings',
  title: 'あいさつ',
  subtitlePt: 'Saudações do dia a dia',
  instructionJa: 'ばめんに あう あいさつを えらんで ください。',
  instructionPt: 'Escolha a saudação adequada à situação.',
  questions: [
    { id: 'iro-s-l1-1', number: 1, prompt: 'De manhã, ao encontrar um colega, o que você diz?', choices: [{ n: 1, text: 'おはようございます' }, { n: 2, text: 'こんばんは' }, { n: 3, text: 'さようなら' }, { n: 4, text: 'おやすみなさい' }], answer: 1, translationPt: 'Bom dia.', explanationPt: 'おはようございます = bom dia (manhã). こんばんは=boa noite (ao encontrar), おやすみなさい=boa noite (ao dormir).' },
    { id: 'iro-s-l1-2', number: 2, prompt: 'Durante o dia (tarde), ao cumprimentar alguém:', choices: [{ n: 1, text: 'おはようございます' }, { n: 2, text: 'こんにちは' }, { n: 3, text: 'こんばんは' }, { n: 4, text: 'さようなら' }], answer: 2, translationPt: 'Boa tarde / Olá.', explanationPt: 'こんにちは = olá/boa tarde (durante o dia).' },
    { id: 'iro-s-l1-3', number: 3, prompt: 'À noite, ao encontrar alguém:', choices: [{ n: 1, text: 'おはようございます' }, { n: 2, text: 'こんにちは' }, { n: 3, text: 'こんばんは' }, { n: 4, text: 'いただきます' }], answer: 3, translationPt: 'Boa noite.', explanationPt: 'こんばんは = boa noite (ao encontrar alguém à noite).' },
    { id: 'iro-s-l1-4', number: 4, prompt: 'Alguém te ajudou. Para AGRADECER:', choices: [{ n: 1, text: 'すみません' }, { n: 2, text: 'ありがとうございます' }, { n: 3, text: 'おはよう' }, { n: 4, text: 'さようなら' }], answer: 2, translationPt: 'Muito obrigado(a).', explanationPt: 'ありがとうございます = obrigado(a). É o agradecimento educado.' },
    { id: 'iro-s-l1-5', number: 5, prompt: 'Você esbarrou em alguém / quer PEDIR DESCULPA ou licença:', choices: [{ n: 1, text: 'すみません' }, { n: 2, text: 'こんにちは' }, { n: 3, text: 'おやすみ' }, { n: 4, text: 'いただきます' }], answer: 1, translationPt: 'Desculpe / Com licença.', explanationPt: 'すみません = desculpe / com licença (também serve para chamar alguém).' },
    { id: 'iro-s-l1-6', number: 6, prompt: 'Ao se despedir e ir embora:', choices: [{ n: 1, text: 'はじめまして' }, { n: 2, text: 'さようなら' }, { n: 3, text: 'いただきます' }, { n: 4, text: 'ありがとう' }], answer: 2, translationPt: 'Até logo / Adeus.', explanationPt: 'さようなら = adeus/até logo (despedida).' },
    { id: 'iro-s-l1-7', number: 7, prompt: 'Você vê um adesivo escrito 「おはよう」. Ele significa:', choices: [{ n: 1, text: 'Bom dia' }, { n: 2, text: 'Boa noite' }, { n: 3, text: 'Obrigado' }, { n: 4, text: 'Desculpe' }], answer: 1, explanationPt: 'おはよう = bom dia (forma casual de おはようございます). Can-do: entender recados/adesivos com saudações.' },
  ],
}

const lesson1: Section = {
  id: 'lesson-1',
  level: 'starter',
  titleJa: '第1課 おはようございます',
  titlePt: 'Lição 1 — Bom dia! (saudações)',
  summaryPt: 'Começar a falar japonês · cumprimentar, despedir-se, agradecer e pedir desculpa. Estuda também a leitura do hiragana.',
  studyNotes: [
    {
      title: 'Tópico: Começar a falar japonês',
      bodyPt:
        'Nesta primeira lição você aprende as **saudações** essenciais e começa a ler **hiragana**.\n\n' +
        '## Can-do (o que você vai conseguir fazer)\n' +
        '- Cumprimentar ao encontrar alguém.\n' +
        '- Despedir-se ao sair.\n' +
        '- Agradecer e pedir desculpa.\n' +
        '- Entender recados/adesivos com mensagens como “bom dia”.',
    },
    {
      title: 'Saudações essenciais',
      bodyPt:
        '| Japonês | Quando usar | Português |\n|---|---|---|\n' +
        '| おはようございます | de manhã | Bom dia |\n' +
        '| こんにちは | durante o dia | Olá / Boa tarde |\n' +
        '| こんばんは | à noite (ao encontrar) | Boa noite |\n' +
        '| さようなら | ao se despedir | Até logo |\n' +
        '| おやすみなさい | ao ir dormir | Boa noite (dormir) |\n' +
        '| ありがとうございます | agradecer | Obrigado(a) |\n' +
        '| すみません | desculpar / chamar | Desculpe / Com licença |\n\n' +
        'Versões casuais: おはよう、ありがとう、おやすみ.',
    },
    {
      title: 'Hiragana (ひらがな)',
      bodyPt:
        'O hiragana é o primeiro silabário. Na Lição 1 do Irodori você começa a reconhecê-lo. Use os áudios `hiragana` (na aba Áudios) para ouvir os sons, incluindo:\n\n' +
        '- **Vogal longa** (のばす音): おばあさん, こうこう.\n' +
        '- **Consoante dupla** (っ): きって, がっこう.',
    },
  ],
  groups: [lesson1Group],
  audios: L01_AUDIO,
}

// ---- Lições 2 a 18 (estrutura por tópico; conteúdo em construção) --------
const others: Section[] = [
  scaffold(2, 'Começar a falar japonês', 'すみません、よくわかりません', 'Desculpe, não entendi bem', [
    'Pedir para repetir quando não entender.',
    'Responder se fala japonês e perguntar o mesmo.',
    'Perguntar como se diz algo em japonês. (Estuda katakana.)',
  ]),
  scaffold(3, 'Sobre mim', 'はじめまして', 'Prazer em conhecer', [
    'Fazer uma autoapresentação simples (nome, país).',
    'Escrever nome e país num crachá.',
    'Perguntar e responder sobre nome e país; preencher formulário.',
  ]),
  scaffold(4, 'Sobre mim', '東京に住んでいます', 'Moro em Tóquio', [
    'Entender a apresentação de uma família (quem é quem).',
    'Perguntar e responder onde mora e a idade.',
    'Ler um post curto de um amigo e entender o tema.',
  ]),
  scaffold(5, 'Comidas que eu gosto', 'うどんが好きです', 'Gosto de udon', [
    'Responder sobre comidas que gosta e não gosta.',
    'Perguntar e responder sobre comida japonesa.',
    'Responder a uma oferta de bebida; falar do café da manhã.',
  ]),
  scaffold(6, 'Comidas que eu gosto', 'チーズバーガーをおねがいします', 'Um cheeseburger, por favor', [
    'Entender um cardápio de fast food.',
    'Fazer um pedido num restaurante e pedir prato/copo.',
    'Entender placas/letreiros de restaurantes.',
  ]),
  scaffold(7, 'Casa e trabalho', '部屋が4つあります', 'Tem quatro cômodos', [
    'Entender explicações simples ao ser mostrado uma casa.',
    'Perguntar se um cômodo tem o que você precisa.',
    'Ler botões de um eletrodoméstico (ex.: controle remoto).',
  ]),
  scaffold(8, 'Casa e trabalho', '山田さんはどこですか', 'Onde está o Yamada?', [
    'Entender explicação ao ser mostrado um cômodo.',
    'Perguntar e responder onde alguém/algo está.',
    'Entender placas na entrada de uma sala.',
  ]),
  scaffold(9, 'Vida cotidiana', '昼ごはんは12時から1時までです', 'O almoço é das 12h à 1h', [
    'Perguntar e responder a que horas acorda e dorme.',
    'Entender um horário/rotina simples no trabalho.',
    'Perguntar quando você está disponível.',
  ]),
  scaffold(10, 'Vida cotidiana', 'ホチキスを貸してください', 'Me empreste o grampeador', [
    'Entender instruções curtas no trabalho.',
    'Pedir para repetir os pontos importantes.',
    'Pedir algo emprestado; ler um bilhete escrito à mão.',
  ]),
  scaffold(11, 'O que eu gosto de fazer', 'どんなマンガが好きですか', 'De que tipo de mangá você gosta?', [
    'Responder sobre seus hobbies.',
    'Perguntar e responder sobre o que faz nas folgas.',
    'Ler um perfil simples de rede social.',
  ]),
  scaffold(12, 'O que eu gosto de fazer', 'いっしょに飲みに行きませんか', 'Vamos sair para beber juntos?', [
    'Ler um aviso de evento e achar a informação importante.',
    'Convidar e responder a convites; dizer quando está livre.',
    'Responder a uma mensagem com um convite.',
  ]),
  scaffold(13, 'Andar pela cidade', 'このバスは空港に行きますか', 'Este ônibus vai ao aeroporto?', [
    'Perguntar se o trem/ônibus vai aonde você quer.',
    'Entender o anúncio do nome da estação e perguntar.',
  ]),
  scaffold(14, 'Andar pela cidade', '大きい建物ですね', 'É um prédio grande, né', [
    'Descrever lugares e construções de forma simples.',
    'Perguntar e indicar caminhos básicos.',
  ]),
  scaffold(15, 'Nas lojas', '電池がほしいです', 'Quero pilhas', [
    'Perguntar onde comprar algo e entender a resposta.',
    'Ler o guia de andares de uma loja.',
    'Perguntar a um funcionário onde encontrar um item.',
  ]),
  scaffold(16, 'Nas lojas', 'これはいくらですか', 'Quanto custa isto?', [
    'Entender o preço de um produto.',
    'Perguntar o preço e entender a resposta.',
    'Dizer quanto/quantos você quer; entender placas de desconto.',
  ]),
  scaffold(17, 'Dias de folga', '映画を見に行きました', 'Fui ver um filme', [
    'Responder o que fez na folga.',
    'Perguntar e responder sobre o que fez no dia de descanso.',
    'Ler uma tabela de preços de um local e entender quanto pagar.',
  ]),
  scaffold(18, 'Dias de folga', '温泉に行きたいです', 'Quero ir a um onsen', [
    'Perguntar e responder o que quer fazer nas folgas.',
    'Dizer de forma simples o que quer fazer no Japão.',
  ]),
]

export const irodoriStarter: Level = {
  id: 'starter',
  courseId: 'irodori',
  titlePt: 'Irodori — Starter (入門 · A1)',
  descriptionPt:
    'Primeiro nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A1: cumprimentar e se comunicar de forma simples no dia a dia. São 9 tópicos em 18 lições (課), organizadas por módulos, com áudios oficiais. As explicações são em português.',
  sections: [lesson0, lesson1, ...others],
}
