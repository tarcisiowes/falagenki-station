import type { ExerciseGroup, Level, ScriptItem, Section, StudyNote } from './types'
import { STARTER_AUDIO } from './irodori-starter-audio'

// Liga transcrições (script) a faixas específicas de uma lição, pelo código (ex.: '04-08').
function attachScripts(n: number, scripts: Record<string, ScriptItem[]>): typeof STARTER_AUDIO[number] {
  return (STARTER_AUDIO[n] ?? []).map((t) => {
    const code = t.id.replace('iro-s-', '')
    return scripts[code] ? { ...t, script: scripts[code] } : t
  })
}

// =====================================================================
//  Irodori — いろどり: Japanese for Life in Japan (Japan Foundation)
//  Parte "Starter" (入門 / A1): 9 tópicos, 18 lições (課).
//  Estrutura por módulos (lições), com os áudios oficiais por lição.
//  Explicações e traduções em pt-BR são autorais.
// =====================================================================

function canDoNotes(topicPt: string, candos: string[], extra?: string): StudyNote[] {
  return [
    {
      title: `Tópico: ${topicPt}`,
      bodyPt:
        `Esta lição faz parte do tópico **${topicPt}**.\n\n## O que você vai conseguir fazer (Can-do)\n` +
        candos.map((c) => `- ${c}`).join('\n') +
        (extra ? `\n\n${extra}` : '') +
        `\n\n> ⏳ Os exercícios desta lição ainda estão em construção. Os **áudios oficiais já estão disponíveis** na aba “Áudios” para você praticar ouvindo e repetindo (shadowing).`,
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
    audios: STARTER_AUDIO[n],
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
        'Ouça os áudios `kyoshitsu` (aba Áudios) para treinar a pronúncia.',
    },
  ],
  groups: [lesson0Group],
  audios: STARTER_AUDIO[0],
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
        'O hiragana é o primeiro silabário. Na Lição 1 do Irodori você começa a reconhecê-lo. Use os áudios `hiragana` (na aba Áudios), incluindo:\n\n' +
        '- **Vogal longa** (のばす音): おばあさん, こうこう.\n' +
        '- **Consoante dupla** (っ): きって, がっこう.',
    },
  ],
  groups: [lesson1Group],
  audios: STARTER_AUDIO[1],
}

// ---- Lição 2: Pedir esclarecimento + Katakana ---------------------------
const lesson2Group: ExerciseGroup = {
  id: 'iro-s-l2-clarify',
  title: 'よくわからないとき',
  subtitlePt: 'Quando você não entende',
  instructionJa: 'よくわからないとき、なんと いいますか。えらんで ください。',
  instructionPt: 'O que dizer quando você não entende. Escolha a opção correta.',
  questions: [
    { id: 'iro-s-l2-1', number: 1, prompt: 'Você não entendeu o que disseram. Para pedir que repitam:', choices: [{ n: 1, text: 'もう いちど おねがいします' }, { n: 2, text: 'はじめまして' }, { n: 3, text: 'さようなら' }, { n: 4, text: 'いただきます' }], answer: 1, translationPt: 'Mais uma vez, por favor.', explanationPt: 'もう いちど おねがいします = (diga) mais uma vez, por favor. Can-do 05.' },
    { id: 'iro-s-l2-2', number: 2, prompt: 'Para dizer que você NÃO entendeu bem:', choices: [{ n: 1, text: 'わかりました' }, { n: 2, text: 'よく わかりません' }, { n: 3, text: 'だいじょうぶです' }, { n: 4, text: 'ありがとう' }], answer: 2, translationPt: 'Não entendi bem.', explanationPt: 'よく わかりません = não entendo/entendi bem.' },
    { id: 'iro-s-l2-3', number: 3, prompt: 'Perguntam 「にほんごが わかりますか」. Você fala um pouco. Responde:', choices: [{ n: 1, text: 'はい、すこし わかります' }, { n: 2, text: 'いいえ、ちがいます' }, { n: 3, text: 'こんにちは' }, { n: 4, text: 'おやすみなさい' }], answer: 1, translationPt: 'Sim, entendo um pouco.', explanationPt: 'すこし = um pouco. 「すこし わかります」 = entendo um pouco. Can-do 06.' },
    { id: 'iro-s-l2-4', number: 4, prompt: 'Para perguntar “Como se diz isto em japonês?”:', choices: [{ n: 1, text: 'これは にほんごで なんですか' }, { n: 2, text: 'これは いくらですか' }, { n: 3, text: 'おなまえは なんですか' }, { n: 4, text: 'いま なんじですか' }], answer: 1, translationPt: 'Como é isto em japonês?', explanationPt: '〜は にほんごで なんですか = como se diz/o que é 〜 em japonês. Can-do 07.' },
    { id: 'iro-s-l2-5', number: 5, prompt: 'O katakana (カタカナ) é usado principalmente para:', choices: [{ n: 1, text: 'palavras de origem estrangeira (ex.: コーヒー, テレビ)' }, { n: 2, text: 'partículas gramaticais' }, { n: 3, text: 'números' }, { n: 4, text: 'apenas nomes japoneses' }], answer: 1, explanationPt: 'Katakana é usado para empréstimos estrangeiros, nomes estrangeiros e onomatopeias. Na Lição 2 do Irodori você estuda katakana.' },
    { id: 'iro-s-l2-6', number: 6, prompt: 'Qual destas é uma palavra escrita em KATAKANA?', choices: [{ n: 1, text: 'すし' }, { n: 2, text: 'コーヒー' }, { n: 3, text: 'やま' }, { n: 4, text: 'みず' }], answer: 2, explanationPt: 'コーヒー (café) é empréstimo, escrito em katakana. As outras são palavras japonesas em hiragana.' },
  ],
}

const lesson2: Section = {
  id: 'lesson-2',
  level: 'starter',
  titleJa: '第2課 すみません、よくわかりません',
  titlePt: 'Lição 2 — Desculpe, não entendi bem',
  summaryPt: 'Começar a falar japonês · pedir para repetir, dizer se fala japonês, perguntar como se diz. Estuda katakana.',
  studyNotes: [
    {
      title: 'Tópico: Começar a falar japonês',
      bodyPt:
        '## Can-do\n' +
        '- Pedir para repetir quando não entender.\n' +
        '- Responder se você fala japonês (e perguntar o mesmo).\n' +
        '- Perguntar como se diz algo em japonês e entender a resposta.',
    },
    {
      title: 'Expressões úteis',
      bodyPt:
        '| Japonês | Português |\n|---|---|\n' +
        '| もう いちど おねがいします | Mais uma vez, por favor |\n' +
        '| よく わかりません | Não entendi bem |\n' +
        '| ゆっくり おねがいします | Mais devagar, por favor |\n' +
        '| にほんごが すこし わかります | Entendo um pouco de japonês |\n' +
        '| 〜は にほんごで なんですか | Como se diz 〜 em japonês? |',
    },
    {
      title: 'Katakana (カタカナ)',
      bodyPt:
        'Na Lição 2 você estuda **katakana**, usado para:\n\n' +
        '- palavras estrangeiras: コーヒー (café), テレビ (TV), パン (pão);\n' +
        '- nomes estrangeiros: ブラジル, マリア;\n' +
        '- onomatopeias.\n\nUse os áudios `katakana` na aba Áudios.',
    },
  ],
  groups: [lesson2Group],
  audios: STARTER_AUDIO[2],
}

// ---- Lição 3: Apresentar-se ---------------------------------------------
const lesson3Group: ExerciseGroup = {
  id: 'iro-s-l3-intro',
  title: 'じこしょうかい',
  subtitlePt: 'Autoapresentação',
  instructionJa: 'じこしょうかいの ばめんです。あう ものを えらんで ください。',
  instructionPt: 'Situações de autoapresentação. Escolha a opção adequada.',
  questions: [
    { id: 'iro-s-l3-1', number: 1, prompt: 'Ao conhecer alguém pela primeira vez, você começa dizendo:', choices: [{ n: 1, text: 'はじめまして' }, { n: 2, text: 'おかえりなさい' }, { n: 3, text: 'いただきます' }, { n: 4, text: 'おつかれさまです' }], answer: 1, translationPt: 'Muito prazer (em conhecê-lo).', explanationPt: 'はじめまして = expressão usada ao se apresentar pela primeira vez. Can-do 08.' },
    { id: 'iro-s-l3-2', number: 2, prompt: 'Para dizer seu nome (“Sou a Maria / Eu sou a Maria”):', choices: [{ n: 1, text: 'マリアです' }, { n: 2, text: 'マリアが すきです' }, { n: 3, text: 'マリアに いきます' }, { n: 4, text: 'マリアを ください' }], answer: 1, translationPt: 'Sou a Maria.', explanationPt: '〜です depois do nome = “sou/é 〜”. (わたしは マリアです também serve.)' },
    { id: 'iro-s-l3-3', number: 3, prompt: 'Para PERGUNTAR o nome de alguém de forma educada:', choices: [{ n: 1, text: 'おなまえは？' }, { n: 2, text: 'おげんきですか' }, { n: 3, text: 'いくらですか' }, { n: 4, text: 'なんじですか' }], answer: 1, translationPt: 'Qual é o seu nome?', explanationPt: 'お+なまえ (nome, com prefixo de cortesia) + は？ = “(qual é o) seu nome?”. Can-do 10.' },
    { id: 'iro-s-l3-4', number: 4, prompt: 'Para perguntar de que país a pessoa é:', choices: [{ n: 1, text: 'おくには どちらですか' }, { n: 2, text: 'なにを たべますか' }, { n: 3, text: 'どこに すんでいますか' }, { n: 4, text: 'いつ きましたか' }], answer: 1, translationPt: 'De que país você é?', explanationPt: 'おくに = (seu) país; どちら = qual/onde (educado). 「おくには どちらですか」 = de que país você é?' },
    { id: 'iro-s-l3-5', number: 5, prompt: 'Você é do Brasil. Para dizer isso:', choices: [{ n: 1, text: 'ブラジルから きました' }, { n: 2, text: 'ブラジルが すきです' }, { n: 3, text: 'ブラジルを ください' }, { n: 4, text: 'ブラジルに あります' }], answer: 1, translationPt: 'Vim do Brasil. / Sou do Brasil.', explanationPt: '〜から きました = vim de 〜. Também: ブラジルじん です (sou brasileiro/a).' },
    { id: 'iro-s-l3-6', number: 6, prompt: 'Ao terminar a apresentação, costuma-se dizer:', choices: [{ n: 1, text: 'どうぞ よろしく おねがいします' }, { n: 2, text: 'さようなら' }, { n: 3, text: 'ごめんください' }, { n: 4, text: 'おめでとうございます' }], answer: 1, translationPt: 'Prazer / Conto com você.', explanationPt: 'どうぞ よろしく おねがいします fecha a apresentação (≈ “muito prazer / conto com a sua ajuda”).' },
  ],
}

const lesson3: Section = {
  id: 'lesson-3',
  level: 'starter',
  titleJa: '第3課 はじめまして',
  titlePt: 'Lição 3 — Prazer em conhecer',
  summaryPt: 'Sobre mim · autoapresentação (nome e país), crachá e formulário.',
  studyNotes: [
    {
      title: 'Tópico: Sobre mim',
      bodyPt:
        '## Can-do\n' +
        '- Fazer uma autoapresentação simples (nome, país).\n' +
        '- Escrever nome e país num crachá.\n' +
        '- Perguntar e responder sobre nome e país; preencher um formulário.',
    },
    {
      title: 'Apresentar-se (じこしょうかい)',
      bodyPt:
        '| Japonês | Português |\n|---|---|\n' +
        '| はじめまして | Muito prazer |\n' +
        '| （わたしは）〜です | (Eu) sou 〜 |\n' +
        '| 〜から きました | Vim de 〜 |\n' +
        '| 〜じんです | Sou (nacionalidade) |\n' +
        '| おなまえは？ | Qual é o seu nome? |\n' +
        '| おくには どちらですか | De que país você é? |\n' +
        '| どうぞ よろしく おねがいします | Prazer / Conto com você |\n\n' +
        '**Exemplo:** はじめまして。マリアです。ブラジルから きました。どうぞ よろしく おねがいします。',
    },
  ],
  groups: [lesson3Group],
  audios: STARTER_AUDIO[3],
}

// ---- Lição 4: Família, onde mora, idade ---------------------------------
const lesson4Group: ExerciseGroup = {
  id: 'iro-s-l4',
  title: 'かぞく・すんでいるところ・ねんれい',
  subtitlePt: 'Família, moradia e idade',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada.',
  questions: [
    { id: 'iro-s-l4-1', number: 1, prompt: '「父」(ちち) significa:', choices: [{ n: 1, text: 'pai' }, { n: 2, text: 'mãe' }, { n: 3, text: 'irmão mais velho' }, { n: 4, text: 'filho' }], answer: 1, explanationPt: '父 = ちち (meu pai). 母=はは (mãe), 兄=あに (irmão mais velho), 子ども=filho.' },
    { id: 'iro-s-l4-2', number: 2, prompt: '「妻」(つま) significa:', choices: [{ n: 1, text: 'marido' }, { n: 2, text: 'esposa' }, { n: 3, text: 'irmã mais nova' }, { n: 4, text: 'avó' }], answer: 2, explanationPt: '妻 = つま (minha esposa). 夫=おっと (marido).' },
    { id: 'iro-s-l4-3', number: 3, prompt: 'Irmão mais NOVO é:', choices: [{ n: 1, text: '兄 (あに)' }, { n: 2, text: '姉 (あね)' }, { n: 3, text: '弟 (おとうと)' }, { n: 4, text: '妹 (いもうと)' }], answer: 3, explanationPt: '弟=おとうと (irmão mais novo). 兄=mais velho; 姉=irmã mais velha; 妹=irmã mais nova.' },
    { id: 'iro-s-l4-4', number: 4, prompt: 'Para apresentar “Este é meu marido e (meu) filho”:', choices: [{ n: 1, text: '夫と子どもです' }, { n: 2, text: '父と母です' }, { n: 3, text: '兄と姉です' }, { n: 4, text: '妻と妹です' }], answer: 1, translationPt: 'São meu marido e meu filho.', explanationPt: 'AとBです = “são A e B”. 夫=marido, 子ども=filho.' },
    { id: 'iro-s-l4-5', number: 5, prompt: 'Para PERGUNTAR a idade de um adulto:', choices: [{ n: 1, text: '何歳ですか / おいくつですか' }, { n: 2, text: 'どこですか' }, { n: 3, text: 'いくらですか' }, { n: 4, text: '何時ですか' }], answer: 1, translationPt: 'Quantos anos você tem?', explanationPt: '何歳(なんさい)ですか e (お)いくつですか perguntam a idade. いくら=preço; 何時=que horas.' },
    { id: 'iro-s-l4-6', number: 6, prompt: '「4歳です」significa:', choices: [{ n: 1, text: 'São 4 horas.' }, { n: 2, text: 'Custa 4 ienes.' }, { n: 3, text: 'Tem 4 anos.' }, { n: 4, text: 'São 4 pessoas.' }], answer: 3, explanationPt: '〜歳(さい) = contador de idade. 4歳 = quatro anos.' },
    { id: 'iro-s-l4-7', number: 7, prompt: 'Para perguntar “Onde você mora?”:', choices: [{ n: 1, text: 'どこに住んでいますか' }, { n: 2, text: 'いつ来ましたか' }, { n: 3, text: 'なにを食べますか' }, { n: 4, text: 'だれと行きますか' }], answer: 1, translationPt: 'Onde você mora?', explanationPt: '〜に住(す)んでいます = morar em 〜. どこに住んでいますか = onde você mora?' },
    { id: 'iro-s-l4-8', number: 8, prompt: 'No diálogo (áudio 04-08), quantos anos tem o Miro e onde mora a família dele?', context: 'ミロ：…25歳です。… Ａ：どこに住んでいますか？ ミロ：赤羽です。… ご家族は？ ミロ：家族は、フィリピンに住んでいます。', choices: [{ n: 1, text: '25 anos; família mora nas Filipinas' }, { n: 2, text: '4 anos; família mora em Akabane' }, { n: 3, text: '25 anos; família mora em Tóquio' }, { n: 4, text: '20 anos; família mora nas Filipinas' }], answer: 1, explanationPt: 'Miro diz 25歳です (25 anos); ele mora em 赤羽 (Akabane) e a família 「フィリピンに住んでいます」 (mora nas Filipinas).' },
  ],
}

const L4_DIALOG: ScriptItem[] = [
  {
    label: '会話 (04-08)',
    setupJa: 'ミロさんが、{上田|うえだ}さんの{家|いえ}に{招待|しょうたい}されました。{上田|うえだ}さんの{家族|かぞく}に{会|あ}います。',
    setupPt: 'Miro foi convidado à casa do Sr. Ueda e conhece a família dele.',
    lines: [
      { speaker: 'ミロ', ja: 'ミロです。フィリピンから{来|き}ました。よろしくお{願|ねが}いします。', pt: 'Sou o Miro. Vim das Filipinas. Muito prazer.' },
      { speaker: '上田', ja: 'ミロさん、うちの{家族|かぞく}です。{妻|つま}と{子|こ}ども。それから、{父|ちち}です。', pt: 'Miro, esta é a minha família. Minha esposa e meu filho. E também meu pai.' },
      { speaker: '上田', ja: '（{妻|つま}・{父|ちち}）ミロさん、よろしく。', pt: '(esposa e pai) Prazer, Miro.' },
      { speaker: 'ミロ', ja: 'あのう、お{名前|なまえ}は？', pt: 'Hum… qual é o seu nome?' },
      { speaker: '上田', ja: '（{子|こ}ども）{伸一|しんいち}です。', pt: '(criança) Sou o Shin’ichi.' },
      { speaker: 'ミロ', ja: 'しんいち。{何歳|なんさい}ですか？', pt: 'Shin’ichi. Quantos anos você tem?' },
      { speaker: '上田', ja: '（{妻|つま}）いくつですか？', pt: '(esposa) Quantos anos você tem? (ajudando)' },
      { speaker: '上田', ja: '（{子|こ}ども）4{歳|さい}です。', pt: '(criança) Tenho 4 anos.' },
      { speaker: 'ミロ', ja: '4{歳|さい}。そうですか。', pt: '4 anos. Ah, sim.' },
      { speaker: '上田', ja: '（{父|ちち}）ミロさんは、{何歳|なんさい}？', pt: '(pai) E você, Miro, quantos anos tem?' },
      { speaker: 'ミロ', ja: '25{歳|さい}です。', pt: 'Tenho 25 anos.' },
      { speaker: '上田', ja: '（{妻|つま}）どこに{住|す}んでいますか？', pt: '(esposa) Onde você mora?' },
      { speaker: 'ミロ', ja: '{赤羽|あかばね}です。', pt: 'Em Akabane.' },
      { speaker: '上田', ja: '（{妻|つま}）そうですか。ご{家族|かぞく}は？', pt: '(esposa) Ah, sim. E a sua família?' },
      { speaker: 'ミロ', ja: '{家族|かぞく}は、フィリピンに{住|す}んでいます。', pt: 'Minha família mora nas Filipinas.' },
    ],
    questionJa: 'ミロさんは{何歳|なんさい}ですか。どこに{住|す}んでいますか。',
  },
]

const lesson4: Section = {
  id: 'lesson-4',
  level: 'starter',
  titleJa: '第4課 東京に住んでいます',
  titlePt: 'Lição 4 — Moro em Tóquio',
  summaryPt: 'Sobre mim · apresentar a família, dizer onde mora e a idade.',
  studyNotes: [
    {
      title: 'Tópico: Sobre mim',
      bodyPt:
        '## Can-do\n' +
        '- Entender a apresentação de uma família (quem é quem).\n' +
        '- Perguntar e responder onde mora e a idade.\n' +
        '- Ler um post curto de um amigo e entender o tema.',
    },
    {
      title: 'A família (家族)',
      bodyPt:
        '| Japonês | Português |\n|---|---|\n' +
        '| 父 (ちち) / 母 (はは) | (meu) pai / mãe |\n' +
        '| 兄 (あに) / 姉 (あね) | irmão / irmã mais velho(a) |\n' +
        '| 弟 (おとうと) / 妹 (いもうと) | irmão / irmã mais novo(a) |\n' +
        '| 夫 (おっと) / 妻 (つま) | marido / esposa |\n' +
        '| 子ども (こども) | filho(s) / criança |\n\n' +
        'Apresentar: 「こちら、〜です」 / 「〜と〜です」. Ex.: 妻と子どもです (são minha esposa e meu filho).',
    },
    {
      title: 'Onde mora / idade',
      bodyPt:
        '- **Morar**: 〜に {住|す}んでいます. `どこに住んでいますか` = onde você mora? · `東京に住んでいます` = moro em Tóquio.\n' +
        '- **Idade**: 〜{歳|さい}. `何歳ですか / おいくつですか` = quantos anos? · `25歳です` = tenho 25 anos.\n' +
        '- Números 1–99 e idades (いっさい, はっさい, じゅっさい, はたち=20 anos) estão no áudio da lição.',
    },
  ],
  groups: [lesson4Group],
  audios: attachScripts(4, { '04-08': L4_DIALOG }),
}

// ---- Lição 5: Comidas que eu gosto --------------------------------------
const lesson5Group: ExerciseGroup = {
  id: 'iro-s-l5',
  title: 'うどんが好きです',
  subtitlePt: 'Gostos, recusas e o café da manhã',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l5-1', number: 1, prompt: 'Para dizer que você GOSTA de peixe:', choices: [{ n: 1, text: '魚が好きです' }, { n: 2, text: '魚は好きじゃないです' }, { n: 3, text: '魚を飲みます' }, { n: 4, text: '魚はちょっと…' }], answer: 1, translationPt: 'Gosto de peixe.', explanationPt: '〜が好(す)きです = gosto de 〜. A coisa de que se gosta vem marcada por が. (Nota de gramática ➊)' },
    { id: 'iro-s-l5-2', number: 2, prompt: 'Para dizer que você NÃO gosta de carne:', choices: [{ n: 1, text: '肉が好きです' }, { n: 2, text: '肉は好きじゃないです' }, { n: 3, text: '肉も好きです' }, { n: 4, text: '肉をください' }], answer: 2, translationPt: 'Não gosto de carne.', explanationPt: '〜は好きじゃないです = não gosto de 〜. A forma negativa de 好きです é 好きじゃないです. (Nota ➊)' },
    { id: 'iro-s-l5-3', number: 3, prompt: 'Você gosta de peixe E também de carne. A 2ª frase é:', context: '魚が好きです。肉＿＿好きです。', choices: [{ n: 1, text: '肉も好きです' }, { n: 2, text: '肉は好きじゃないです' }, { n: 3, text: '肉が好きじゃないです' }, { n: 4, text: '肉を好きです' }], answer: 1, translationPt: 'Também gosto de carne.', explanationPt: '〜も = também. 肉も好きです = (eu) também gosto de carne. (Diálogo 05-01)' },
    { id: 'iro-s-l5-4', number: 4, prompt: 'Alguém pergunta se você gosta de wasabi e você quer recusar com delicadeza. Diz:', choices: [{ n: 1, text: 'わさびは、ちょっと……' }, { n: 2, text: 'わさびが大好きです' }, { n: 3, text: 'わさびをお願いします' }, { n: 4, text: 'わさびは、はい' }], answer: 1, translationPt: 'Wasabi… é meio que não (não muito).', explanationPt: '「〜は、ちょっと……」 é uma recusa/educada e suave: deixa subentendido que você não gosta ou prefere não, sem dizer “não” diretamente. (Nota ➋, diálogo 05-14)' },
    { id: 'iro-s-l5-5', number: 5, prompt: 'Te oferecem chá: 「お茶、飲みますか？」. Para ACEITAR:', choices: [{ n: 1, text: 'はい、お願いします' }, { n: 2, text: 'いえ、けっこうです' }, { n: 3, text: 'すみません、ちがいます' }, { n: 4, text: 'はじめまして' }], answer: 1, translationPt: 'Sim, por favor.', explanationPt: 'はい、お願(ねが)いします = sim, por favor (aceitando). (Nota ➌, diálogo 05-20)' },
    { id: 'iro-s-l5-6', number: 6, prompt: 'Te oferecem bebida alcoólica e você quer RECUSAR educadamente:', choices: [{ n: 1, text: 'はい、お願いします' }, { n: 2, text: 'いえ、けっこうです' }, { n: 3, text: 'もう いちど お願いします' }, { n: 4, text: 'いただきます' }], answer: 2, translationPt: 'Não, obrigado(a) (está bom assim).', explanationPt: 'いえ、けっこうです = não, obrigado(a)/já está bom — recusa educada de uma oferta. (Nota ➌, diálogo 05-21)' },
    { id: 'iro-s-l5-7', number: 7, prompt: 'Perguntam 「何、飲みますか？」 (o que você quer beber?). Você escolhe café:', choices: [{ n: 1, text: 'じゃあ、コーヒー、お願いします' }, { n: 2, text: 'コーヒーは好きじゃないです' }, { n: 3, text: 'コーヒーは、ちょっと…' }, { n: 4, text: 'いえ、けっこうです' }], answer: 1, translationPt: 'Então, café, por favor.', explanationPt: 'じゃあ、〜、お願いします = então (nesse caso), 〜, por favor — usado para escolher o que quer. (Nota ➌, diálogo 05-22)' },
    { id: 'iro-s-l5-8', number: 8, prompt: 'Qual partícula marca o que se come/bebe? 「パン＿＿食べます」', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'が' }, { n: 3, text: 'は' }, { n: 4, text: 'に' }], answer: 1, translationPt: 'Como pão.', explanationPt: 'を marca o objeto direto de verbos como 食べます (comer) e 飲みます (beber). パンを食べます = como pão. (Nota ➍)' },
    { id: 'iro-s-l5-9', number: 9, prompt: 'Para dizer que você NÃO come café da manhã:', choices: [{ n: 1, text: '朝ご飯は食べません' }, { n: 2, text: '朝ご飯を食べます' }, { n: 3, text: '朝ご飯が好きです' }, { n: 4, text: '朝ご飯を飲みます' }], answer: 1, translationPt: 'Não como café da manhã.', explanationPt: 'A forma negativa de 食べます é 食べません (= não como). Também existe 食べないです, mais coloquial. (Nota ➎)' },
    { id: 'iro-s-l5-10', number: 10, prompt: '「朝ご飯は、あまり食べません」significa:', choices: [{ n: 1, text: 'Quase não como café da manhã.' }, { n: 2, text: 'Sempre como café da manhã.' }, { n: 3, text: 'Como muito no café da manhã.' }, { n: 4, text: 'Gosto de café da manhã.' }], answer: 1, explanationPt: 'あまり + verbo negativo = “quase não / raramente”. Frequência: いつも (sempre) > よく (frequentemente) > あまり〜ません (quase não). (Nota ➏)' },
    { id: 'iro-s-l5-11', number: 11, prompt: 'Qual destes é um prato de comida japonesa (日本の食べ物)?', choices: [{ n: 1, text: '天ぷら (tempurá)' }, { n: 2, text: 'コーヒー (café)' }, { n: 3, text: 'ビール (cerveja)' }, { n: 4, text: 'ジュース (suco)' }], answer: 1, explanationPt: 'Comidas japonesas da lição: 刺身, すし, 天ぷら, 牛丼, カレー, ラーメン, うどん, そば, 納豆, 梅干し, わさび. As outras opções são bebidas.' },
    { id: 'iro-s-l5-12', number: 12, prompt: '「牛乳」(ぎゅうにゅう) é:', choices: [{ n: 1, text: 'leite' }, { n: 2, text: 'suco de laranja' }, { n: 3, text: 'sopa de missô' }, { n: 4, text: 'iogurte' }], answer: 1, explanationPt: '牛乳 = leite. オレンジジュース=suco de laranja; みそ汁=sopa de missô; ヨーグルト=iogurte.' },
    { id: 'iro-s-l5-13', number: 13, prompt: 'No diálogo do café da manhã (05-32), o que a Stacey come?', context: 'ステーシー：私は、シリアルを食べます。果物も食べます。', choices: [{ n: 1, text: 'Cereal e frutas' }, { n: 2, text: 'Pão, ovo e iogurte' }, { n: 3, text: 'Nada; só bebe leite' }, { n: 4, text: 'Nada; só bebe água' }], answer: 1, explanationPt: 'Stacey diz 「シリアルを食べます。果物も食べます」 = como cereal; também como frutas.' },
    { id: 'iro-s-l5-14', number: 14, prompt: 'Ainda no diálogo 05-32, o que o Matsuda faz no café da manhã?', context: '松田：私も、食べないです。水を飲みます。', choices: [{ n: 1, text: 'Não come; bebe água' }, { n: 2, text: 'Come pão e bebe leite' }, { n: 3, text: 'Come cereal e frutas' }, { n: 4, text: 'Come ovo e iogurte' }], answer: 1, explanationPt: 'Matsuda diz 「私も、食べないです。水を飲みます」 = eu também não como; bebo água. (食べないです = não como, coloquial)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 5 (聴解スクリプト)
const L5_SCRIPTS: Record<string, ScriptItem[]> = {
  '05-01': [
    {
      label: '会話 (05-01)',
      setupJa: 'カムラーさん、マリさん、ルイスさん、{佐々木|さ さ き}さんが、{会社|かいしゃ}の{食堂|しょくどう}で{昼|ひる}ご{飯|はん}を{食|た}べながら{話|はな}しています。',
      setupPt: 'Khamlar, Mali, Luis e Sasaki conversam enquanto almoçam no refeitório da empresa.',
      lines: [
        { speaker: '佐々木', ja: 'カムラーさん、{魚|さかな}、{好|す}きですか？', pt: 'Khamlar, você gosta de peixe?' },
        { speaker: 'カムラー', ja: 'はい、{好|す}きです。', pt: 'Sim, gosto.' },
        { speaker: '佐々木', ja: '{肉|にく}は？', pt: 'E carne?' },
        { speaker: 'カムラー', ja: '{肉|にく}も{好|す}きです。', pt: 'Também gosto de carne.' },
      ],
    },
  ],
  '05-02': [
    {
      label: '会話 (05-02)',
      lines: [
        { speaker: '佐々木', ja: 'マリさんは、{魚|さかな}、{好|す}きですか？', pt: 'Mali, você gosta de peixe?' },
        { speaker: 'マリ', ja: 'はい、{好|す}きです。', pt: 'Sim, gosto.' },
        { speaker: '佐々木', ja: '{肉|にく}は？', pt: 'E carne?' },
        { speaker: 'マリ', ja: '{肉|にく}は{好|す}きじゃないです。', pt: 'Carne eu não gosto.' },
      ],
    },
  ],
  '05-03': [
    {
      label: '会話 (05-03)',
      lines: [
        { speaker: '佐々木', ja: 'ルイスさんは？', pt: 'E você, Luis?' },
        { speaker: 'ルイス', ja: '{魚|さかな}は{好|す}きじゃないです。{肉|にく}と{野菜|やさい}が{好|す}きです。', pt: 'Peixe eu não gosto. Gosto de carne e legumes.' },
      ],
    },
  ],
  '05-04': [
    {
      label: '会話 (05-04)',
      lines: [
        { speaker: 'ルイス', ja: '{佐々木|さ さ き}さんは？', pt: 'E você, Sasaki?' },
        { speaker: '佐々木', ja: '{私|わたし}は{魚|さかな}が{好|す}きです。{野菜|やさい}も{好|す}きです。', pt: 'Eu gosto de peixe. Também gosto de legumes.' },
        { speaker: 'ルイス', ja: '{肉|にく}は？', pt: 'E carne?' },
        { speaker: '佐々木', ja: '{肉|にく}は{好|す}きじゃないです。', pt: 'Carne eu não gosto.' },
      ],
    },
  ],
  '05-11': [
    {
      label: '会話 (05-11)',
      setupJa: '{日本|にほん}の{食|た}べ{物|もの}の{好|す}き{嫌|きら}いについて{聞|き}かれています。',
      setupPt: 'As pessoas são perguntadas sobre comidas japonesas de que gostam ou não.',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}の{食|た}べ{物|もの}、{何|なに}が{好|す}きですか？', pt: 'Que comida japonesa você gosta?' },
        { speaker: 'B', ja: '{私|わたし}は、うどんが{好|す}きです。', pt: 'Eu gosto de udon.' },
        { speaker: 'A', ja: 'そばは？', pt: 'E soba?' },
        { speaker: 'B', ja: 'そばも{好|す}きです。', pt: 'Soba também gosto.' },
      ],
    },
  ],
  '05-12': [
    {
      label: '会話 (05-12)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}の{食|た}べ{物|もの}、{何|なに}が{好|す}き？', pt: 'Que comida japonesa você gosta? (casual)' },
        { speaker: 'B', ja: 'えーと、{天|てん}ぷらが{好|す}きです。', pt: 'Hmm… gosto de tempurá.' },
        { speaker: 'A', ja: 'へー。', pt: 'Ah é?' },
        { speaker: 'B', ja: '{牛丼|ぎゅうどん}も、カレーも{好|す}きです。', pt: 'Gyūdon e curry também gosto.' },
        { speaker: 'A', ja: 'そう。', pt: 'Entendi.' },
      ],
    },
  ],
  '05-13': [
    {
      label: '会話 (05-13)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}の{食|た}べ{物|もの}、{何|なに}が{好|す}きですか？', pt: 'Que comida japonesa você gosta?' },
        { speaker: 'B', ja: '{私|わたし}は、{納豆|なっとう}が{好|す}きです。', pt: 'Eu gosto de nattō.' },
        { speaker: 'A', ja: 'そうですか。すごい！　{梅干|うめぼ}しは？', pt: 'Ah, é? Que legal! E umeboshi (ameixa em conserva)?' },
        { speaker: 'B', ja: 'あ、{梅干|うめぼ}しは、ちょっと……。', pt: 'Ah, umeboshi… é meio que não.' },
      ],
    },
  ],
  '05-14': [
    {
      label: '会話 (05-14)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}の{食|た}べ{物|もの}、{何|なに}が{好|す}きですか？', pt: 'Que comida japonesa você gosta?' },
        { speaker: 'B', ja: 'すしが{好|す}きです。', pt: 'Gosto de sushi.' },
        { speaker: 'A', ja: 'わさびは、だいじょうぶですか？', pt: 'E wasabi, tudo bem (você come)?' },
        { speaker: 'B', ja: 'あ、わさびは、ちょっと……。', pt: 'Ah, wasabi… é meio que não.' },
      ],
    },
  ],
  '05-20': [
    {
      label: '会話 (05-20)',
      setupJa: 'いろいろな{場面|ばめん}で、{飲|の}み{物|もの}をすすめられています。',
      setupPt: 'Em diferentes situações, oferecem bebidas às pessoas.',
      lines: [
        { speaker: 'A', ja: 'セシルさん、お{茶|ちゃ}、{飲|の}みますか？', pt: 'Cecile, você aceita chá?' },
        { speaker: 'B', ja: 'あ、はい、お{願|ねが}いします。', pt: 'Ah, sim, por favor.' },
        { speaker: 'A', ja: 'はい、どうぞ。', pt: 'Aqui está.' },
        { speaker: 'B', ja: 'ありがとうございます。', pt: 'Obrigada.' },
      ],
    },
  ],
  '05-21': [
    {
      label: '会話 (05-21)',
      lines: [
        { speaker: 'A', ja: '{羅|ラ}さん、お{酒|さけ}、{飲|の}む？', pt: 'Ra, você bebe (álcool)? (casual)' },
        { speaker: 'B', ja: 'いえ、けっこうです。', pt: 'Não, obrigado (está bom assim).' },
        { speaker: 'A', ja: 'あ、そう。', pt: 'Ah, tá.' },
        { speaker: 'B', ja: 'ありがとうございます。', pt: 'Obrigado.' },
      ],
    },
  ],
  '05-22': [
    {
      label: '会話 (05-22)',
      lines: [
        { speaker: 'A', ja: 'イリヤスさん、{何|なに}、{飲|の}む？', pt: 'Ilyas, o que você quer beber? (casual)' },
        { speaker: 'B', ja: 'じゃあ、コーヒー、お{願|ねが}いします。', pt: 'Então, café, por favor.' },
        { speaker: 'A', ja: 'はい、コーヒー。', pt: 'Aqui, café.' },
        { speaker: 'B', ja: 'ありがとうございます。', pt: 'Obrigado.' },
      ],
    },
  ],
  '05-23': [
    {
      label: '会話 (05-23)',
      lines: [
        { speaker: 'A', ja: 'ルシアさん、{何|なに}、{飲|の}みますか？', pt: 'Lucia, o que você quer beber?' },
        { speaker: 'B', ja: 'じゃあ、ビール、お{願|ねが}いします。', pt: 'Então, cerveja, por favor.' },
        { speaker: 'A', ja: 'ビールね。どうぞ。', pt: 'Cerveja, né. Aqui está.' },
        { speaker: 'B', ja: 'あ、どうも。', pt: 'Ah, obrigada.' },
      ],
    },
  ],
  '05-32': [
    {
      label: '会話 (05-32)',
      setupJa: 'ステーシーさん、アミラさん、マークさん、{松田|まつだ}さんが、{昼休|ひるやす}みに{話|はな}しています。',
      setupPt: 'Stacey, Amira, Mark e Matsuda conversam no horário de almoço.',
      lines: [
        { speaker: 'アミラ', ja: '{朝|あさ}ご{飯|はん}、いつも、{何|なに}、{食|た}べますか？　ステーシーさんは？', pt: 'No café da manhã, o que você sempre come? E você, Stacey?' },
        { speaker: 'ステーシー', ja: '{私|わたし}は、シリアルを{食|た}べます。{果物|くだもの}も{食|た}べます。', pt: 'Eu como cereal. Também como frutas.' },
        { speaker: '松田', ja: 'へー。アミラさんは？', pt: 'Ah é? E você, Amira?' },
        { speaker: 'アミラ', ja: 'えーと、{私|わたし}は、パンと、{卵|たまご}と、ヨーグルトをよく{食|た}べます。', pt: 'Hmm, eu costumo comer pão, ovo e iogurte.' },
        { speaker: '松田', ja: 'マークさんは？', pt: 'E você, Mark?' },
        { speaker: 'マーク', ja: 'あー、{私|わたし}は、{朝|あさ}ご{飯|はん}は、あまり{食|た}べません。{牛乳|ぎゅうにゅう}を{飲|の}みます。{松田|まつだ}さんは？', pt: 'Ah, eu quase não como de manhã. Bebo leite. E você, Matsuda?' },
        { speaker: '松田', ja: '{私|わたし}も、{食|た}べないです。{水|みず}を{飲|の}みます。', pt: 'Eu também não como. Bebo água.' },
        { speaker: 'ステーシー・アミラ', ja: 'え～！', pt: 'Quêee?!' },
      ],
      questionJa: '4{人|にん}は{朝|あさ}ご{飯|はん}に{何|なに}を{食|た}べますか。{何|なに}を{飲|の}みますか。',
    },
  ],
}

const lesson5: Section = {
  id: 'lesson-5',
  level: 'starter',
  titleJa: '第5課 うどんが好きです',
  titlePt: 'Lição 5 — Gosto de udon',
  summaryPt: 'Comidas que eu gosto · gostos e recusas, oferecer bebida e falar do café da manhã.',
  studyNotes: [
    {
      title: 'Tópico: Comidas que eu gosto',
      bodyPt:
        '## Can-do\n' +
        '- Responder sobre comidas de que você gosta e não gosta.\n' +
        '- Perguntar e responder sobre comida japonesa (gostar / recusar com delicadeza).\n' +
        '- Responder quando te oferecem uma bebida.\n' +
        '- Falar sobre o que come no café da manhã.',
    },
    {
      title: 'Gostar e não gostar (➊)',
      bodyPt:
        '- **Gostar**: 〜が{好|す}きです. Ex.: `魚が好きです` = gosto de peixe. A coisa de que se gosta vem com **が**.\n' +
        '- **Não gostar**: 〜は{好|す}きじゃないです. Ex.: `肉は好きじゃないです` = não gosto de carne.\n' +
        '- **Também**: 〜も. Ex.: `肉も好きです` = também gosto de carne.\n' +
        '- Perguntar: `〜、好きですか？` / `何が好きですか？` (do que você gosta?).',
    },
    {
      title: 'Recusar com delicadeza (➋)',
      bodyPt:
        'Para dizer que não gosta de algo sem ser rude, usa-se **「〜は、ちょっと……」** (deixando a frase no ar).\n\n' +
        '> わさびは、ちょっと…… = wasabi… é meio que não (= não curto muito).\n\n' +
        'É uma recusa suave, muito comum no Japão.',
    },
    {
      title: 'Oferecer e responder a bebidas (➌)',
      bodyPt:
        '| Situação | Frase | Português |\n|---|---|---|\n' +
        '| Oferecer | お{茶|ちゃ}、{飲|の}みますか？ | Aceita um chá? |\n' +
        '| Aceitar | はい、お{願|ねが}いします | Sim, por favor |\n' +
        '| Recusar | いえ、けっこうです | Não, obrigado(a) |\n' +
        '| Escolher | じゃあ、コーヒー、お{願|ねが}いします | Então, café, por favor |\n\n' +
        'Perguntar o que a pessoa quer: `何、飲みますか？` (o que você quer beber?).',
    },
    {
      title: 'Comer / beber e frequência (➍➎➏)',
      bodyPt:
        '- **Partícula を**: marca o que se come/bebe. `パンを{食|た}べます` = como pão; `{水|みず}を{飲|の}みます` = bebo água. (➍)\n' +
        '- **Negativo**: 食べます → {食|た}べません (= não como). Coloquial: 食べないです. (➎)\n' +
        '- **Frequência** (➏): いつも (sempre) · よく (frequentemente) · あまり〜ません (quase não).\n' +
        '  - `あまり食べません` = quase não como.',
    },
    {
      title: 'Vocabulário da lição',
      bodyPt:
        '**Comida japonesa (日本の食べ物):** {刺身|さしみ} (sashimi), すし (sushi), {天|てん}ぷら (tempurá), {牛丼|ぎゅうどん} (gyūdon), カレー (curry), ラーメン (lámen), うどん (udon), そば (soba), {納豆|なっとう} (nattō), {梅干|うめぼ}し (umeboshi), わさび (wasabi).\n\n' +
        '**Bebidas (飲み物):** コーヒー (café), {紅茶|こうちゃ} (chá preto), お{茶|ちゃ} (chá verde), {水|みず} (água), ジュース (suco), コーラ (refrigerante cola), ビール (cerveja), お{酒|さけ} (bebida alcoólica/saquê).\n\n' +
        '**Café da manhã (朝ご飯):** ご{飯|はん} (arroz), パン (pão), {卵|たまご} (ovo), ヨーグルト (iogurte), シリアル (cereal), {果物|くだもの} (frutas), サラダ (salada), みそ{汁|しる} (sopa de missô), スープ (sopa), {牛乳|ぎゅうにゅう} (leite), トマトジュース / オレンジジュース / りんごジュース (sucos de tomate / laranja / maçã).',
    },
  ],
  groups: [lesson5Group],
  audios: attachScripts(5, L5_SCRIPTS),
}

// ---- Lição 6: Pedir em restaurantes -------------------------------------
const lesson6Group: ExerciseGroup = {
  id: 'iro-s-l6',
  title: 'チーズバーガーください',
  subtitlePt: 'Pedir em fast food, refeitório e izakaya',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l6-1', number: 1, prompt: 'Para PEDIR um café no balcão, você diz:', choices: [{ n: 1, text: 'コーヒー、お願いします' }, { n: 2, text: 'コーヒーが好きです' }, { n: 3, text: 'コーヒーは、ちょっと…' }, { n: 4, text: 'コーヒーですか' }], answer: 1, translationPt: 'Um café, por favor.', explanationPt: 'Para pedir: diga o que quer + ください ou お願(ねが)いします. (Nota ➊)' },
    { id: 'iro-s-l6-2', number: 2, prompt: 'Sobre ください e お願いします ao pedir:', choices: [{ n: 1, text: 'お願いします é mais educado que ください' }, { n: 2, text: 'ください é mais educado que お願いします' }, { n: 3, text: 'São saudações' }, { n: 4, text: 'Significam “não, obrigado”' }], answer: 1, explanationPt: 'Os dois servem para pedir. お願いします (≈ “peço o favor”) é um pouco mais educado que ください. (Nota ➊)' },
    { id: 'iro-s-l6-3', number: 3, prompt: 'O atendente pergunta 「こちらでおめしあがりですか？」. Significa:', choices: [{ n: 1, text: 'Vai comer aqui (no local)?' }, { n: 2, text: 'Qual o tamanho?' }, { n: 3, text: 'Quer bebida?' }, { n: 4, text: 'Aceita cartão?' }], answer: 1, explanationPt: 'おめしあがり = forma muito educada de “comer”. 「こちらでおめしあがりですか？」 = vai comer aqui? (comer no local × levar)' },
    { id: 'iro-s-l6-4', number: 4, prompt: 'Você quer LEVAR a comida (não comer no local). Responde:', choices: [{ n: 1, text: 'いえ、テイクアウトで' }, { n: 2, text: 'はい、ここで' }, { n: 3, text: 'はい、お願いします' }, { n: 4, text: 'いえ、けっこうです' }], answer: 1, translationPt: 'Não, para viagem.', explanationPt: 'テイクアウトで = para viagem/levar. Para comer no local: ここで. (Diálogo 06-02)' },
    { id: 'iro-s-l6-5', number: 5, prompt: '「私は、カレーにします」significa:', choices: [{ n: 1, text: 'Eu vou de curry (escolho curry).' }, { n: 2, text: 'Eu gosto de curry.' }, { n: 3, text: 'Eu não como curry.' }, { n: 4, text: 'Eu faço curry.' }], answer: 1, explanationPt: '〜にします = “decido por / vou de 〜” (escolha). カレーにします = vou de curry. (Nota ➋)' },
    { id: 'iro-s-l6-6', number: 6, prompt: 'Para perguntar ao colega o que ele vai escolher/pedir:', choices: [{ n: 1, text: '何にしますか？' }, { n: 2, text: '何が好きですか？' }, { n: 3, text: 'いくらですか？' }, { n: 4, text: 'どこですか？' }], answer: 1, translationPt: 'O que você vai querer?', explanationPt: '何(なに)にしますか？ = o que você vai escolher/pedir? Responde-se com 〜にします. (Nota ➋, diálogo 06-08)' },
    { id: 'iro-s-l6-7', number: 7, prompt: 'Ao contar pratos/itens (1, 2, 3 unidades), usa-se:', choices: [{ n: 1, text: 'ひとつ、ふたつ、みっつ…' }, { n: 2, text: 'いち、に、さん…' }, { n: 3, text: 'いっぴき、にひき…' }, { n: 4, text: 'いちまい、にまい…' }], answer: 1, explanationPt: 'Para contar coisas em geral (pratos, porções) usa-se ひとつ・ふたつ・みっつ…, não いち・に・さん. (Nota ➌)' },
    { id: 'iro-s-l6-8', number: 8, prompt: 'Ordem correta para pedir “dois edamame”:', choices: [{ n: 1, text: '枝豆 ふたつ、ください' }, { n: 2, text: 'ふたつ 枝豆、ください' }, { n: 3, text: '枝豆 に、ください' }, { n: 4, text: 'ふたつが枝豆です' }], answer: 1, translationPt: 'Dois edamame, por favor.', explanationPt: 'O número vem DEPOIS do item: 枝豆(えだまめ)ふたつ、ください. (Nota ➌, diálogo 06-15)' },
    { id: 'iro-s-l6-9', number: 9, prompt: 'Para perguntar se o restaurante TEM maionese:', choices: [{ n: 1, text: 'マヨネーズ、ありますか？' }, { n: 2, text: 'マヨネーズ、お願いします' }, { n: 3, text: 'マヨネーズが好きですか？' }, { n: 4, text: 'マヨネーズにします' }], answer: 1, translationPt: 'Vocês têm maionese?', explanationPt: '〜（は）ありますか？ = vocês têm 〜? Usa o verbo あります (existir/haver). (Nota ➍, diálogo 06-15)' },
    { id: 'iro-s-l6-10', number: 10, prompt: 'Para CHAMAR o atendente (puxar conversa) no restaurante:', choices: [{ n: 1, text: 'すみません' }, { n: 2, text: 'いただきます' }, { n: 3, text: 'おいしいです' }, { n: 4, text: 'けっこうです' }], answer: 1, translationPt: 'Com licença! / Por favor!', explanationPt: 'すみません serve para chamar a atenção do atendente. O atendente atende com はーい / はい。 (Diálogo 06-15)' },
    { id: 'iro-s-l6-11', number: 11, prompt: 'Você vê uma placa (看板) escrita 「居酒屋」. É um lugar para:', choices: [{ n: 1, text: 'comer petiscos e beber (bar/boteco japonês)' }, { n: 2, text: 'comprar roupas' }, { n: 3, text: 'cortar cabelo' }, { n: 4, text: 'pegar trem' }], answer: 1, explanationPt: '居酒屋(いざかや) = izakaya, bar/boteco japonês com comidas e bebidas. Outras placas: 牛丼 (gyūdon), ラーメン (lámen), そば・うどん, カレー, すし.' },
    { id: 'iro-s-l6-12', number: 12, prompt: 'No cardápio do fast food, 「セット」 e 「単品」 significam:', choices: [{ n: 1, text: 'combo (com acompanhamento) / item avulso' }, { n: 2, text: 'quente / gelado' }, { n: 3, text: 'grande / pequeno' }, { n: 4, text: 'doce / salgado' }], answer: 1, explanationPt: 'セット = combo (lanche + batata + bebida); {単品|たんぴん} = item avulso (só o lanche). S/M/L = tamanhos pequeno/médio/grande.' },
    { id: 'iro-s-l6-13', number: 13, prompt: 'No refeitório (06-08), o que o Adi e o Doni escolhem?', context: 'アディ：私は、うどんにします。… ドニ：じゃあ、私もカレーにします。', choices: [{ n: 1, text: 'Adi: udon; Doni: curry' }, { n: 2, text: 'Adi: curry; Doni: udon' }, { n: 3, text: 'Ambos: udon' }, { n: 4, text: 'Ambos: rámen' }], answer: 1, explanationPt: 'Adi diz うどんにします (vou de udon). Doni hesita (うーん…), Hayashi escolhe curry, e Doni decide 私もカレーにします (eu também vou de curry).' },
    { id: 'iro-s-l6-14', number: 14, prompt: 'No izakaya (06-15), quantos chopes (生ビール) o Robert pede?', context: '生ビール3つと、ウーロン茶1つ。あと、唐揚げ、お願いします。', choices: [{ n: 1, text: 'Três (3つ)' }, { n: 2, text: 'Um (1つ)' }, { n: 3, text: 'Dois (2つ)' }, { n: 4, text: 'Quatro (4つ)' }], answer: 1, explanationPt: 'Robert pede 生(なま)ビール3つ (três chopes) e ウーロン茶1つ (um chá oolong), além de 唐揚げ (frango frito).' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 6 (聴解スクリプト + 会話)
const L6_SCRIPTS: Record<string, ScriptItem[]> = {
  '06-01': [
    {
      label: '会話 (06-01)',
      setupJa: 'ハンバーガーの{店|みせ}で、お{客|きゃく}さんが{注文|ちゅうもん}しています。',
      setupPt: 'Um cliente faz o pedido numa hamburgueria.',
      lines: [
        { speaker: '店員', ja: 'いらっしゃいませ。おうかがいします。', pt: 'Bem-vindo(a). Pode pedir.' },
        { speaker: '客', ja: 'ホットコーヒー、お{願|ねが}いします。', pt: 'Um café quente, por favor.' },
        { speaker: '店員', ja: 'ホットコーヒーですね。サイズは……。', pt: 'Café quente, certo. E o tamanho…?' },
        { speaker: '客', ja: 'Sサイズ、お{願|ねが}いします。', pt: 'Tamanho P, por favor.' },
        { speaker: '店員', ja: 'こちらでおめしあがりですか？', pt: 'Vai consumir aqui?' },
        { speaker: '客', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '06-02': [
    {
      label: '会話 (06-02)',
      lines: [
        { speaker: '店員', ja: 'いらっしゃいませ。おうかがいします。', pt: 'Bem-vindo(a). Pode pedir.' },
        { speaker: '客', ja: 'えー、チーズバーガーと、てりやきバーガーと、フィッシュバーガー、ください。', pt: 'Ah, um cheeseburger, um teriyaki burger e um fish burger, por favor.' },
        { speaker: '店員', ja: 'こちらでおめしあがりですか？', pt: 'Vai consumir aqui?' },
        { speaker: '客', ja: 'いえ、テイクアウトで。', pt: 'Não, para viagem.' },
        { speaker: '店員', ja: 'お{持|も}ち{帰|かえ}りですね。ありがとうございます。', pt: 'Para levar, certo. Obrigado.' },
      ],
    },
  ],
  '06-03': [
    {
      label: '会話 (06-03)',
      lines: [
        { speaker: '店員', ja: 'いらっしゃいませ。おうかがいします。', pt: 'Bem-vindo(a). Pode pedir.' },
        { speaker: '客', ja: 'はい。えーと、これ、ください。', pt: 'Sim. Hmm, este aqui, por favor.' },
        { speaker: '店員', ja: 'チキンバーガーのセットですね。ドリンクは、{何|なに}になさいますか？', pt: 'O combo de chicken burger, certo. Qual bebida o(a) senhor(a) deseja?' },
        { speaker: '客', ja: 'じゃあ、ウーロン{茶|ちゃ}、お{願|ねが}いします。', pt: 'Então, chá oolong, por favor.' },
        { speaker: '店員', ja: 'こちらでおめしあがりですか？', pt: 'Vai consumir aqui?' },
        { speaker: '客', ja: 'はい。ここで。', pt: 'Sim. Aqui mesmo.' },
      ],
    },
  ],
  '06-08': [
    {
      label: '会話 (06-08)',
      setupJa: 'アディさん、ドニさん、{林|はやし}さんが、{会社|かいしゃ}の{食堂|しょくどう}で{昼|ひる}ご{飯|はん}を{食|た}べます。',
      setupPt: 'Adi, Doni e Hayashi vão almoçar no refeitório da empresa.',
      lines: [
        { speaker: '林', ja: 'アディさん、{何|なに}にしますか？', pt: 'Adi, o que você vai querer?' },
        { speaker: 'アディ', ja: '{私|わたし}は、うどんにします。', pt: 'Eu vou de udon.' },
        { speaker: '林', ja: 'ドニさんは？', pt: 'E você, Doni?' },
        { speaker: 'ドニ', ja: 'うーん……{林|はやし}さんは、{何|なに}にしますか？', pt: 'Hmm… Hayashi, o que você vai querer?' },
        { speaker: '林', ja: '{私|わたし}は、カレーにします。', pt: 'Eu vou de curry.' },
        { speaker: 'ドニ', ja: 'じゃあ、{私|わたし}もカレーにします。', pt: 'Então eu também vou de curry.' },
        { speaker: 'アディ', ja: 'ここ、いいですか？', pt: 'Posso sentar aqui?' },
        { speaker: '社員', ja: 'あ、どうぞ。', pt: 'Ah, pode.' },
        { speaker: '林', ja: 'いただきます。', pt: 'Itadakimasu (bom apetite).' },
        { speaker: 'アディ・ドニ', ja: 'いただきます。', pt: 'Itadakimasu.' },
        { speaker: '林', ja: 'うどん、どうですか？', pt: 'E o udon, como está?' },
        { speaker: 'アディ', ja: 'おいしいです。', pt: 'Está gostoso.' },
        { speaker: '林', ja: 'そう。', pt: 'Que bom.' },
      ],
    },
  ],
  '06-15': [
    {
      label: '会話 (06-15)',
      setupJa: 'ロバートさんとアグネスさんが、{友|とも}だちと{居酒屋|いざかや}に{来|き}ています。',
      setupPt: 'Robert e Agnes estão num izakaya com amigos.',
      lines: [
        { speaker: 'ロバート', ja: 'すみません。', pt: 'Com licença!' },
        { speaker: '店員', ja: 'はーい。', pt: 'Pois não.' },
        { speaker: 'ロバート', ja: 'えーと、{生|なま}ビール3つと、ウーロン{茶|ちゃ}1つ。あと、{唐揚|からあ}げ、お{願|ねが}いします。', pt: 'Hmm, três chopes e um chá oolong. E também frango frito (karaage), por favor.' },
        { speaker: '店員', ja: 'はい。', pt: 'Certo.' },
        { speaker: 'アグネス', ja: 'すみません。あと、{枝豆|えだまめ}2つ、ください。', pt: 'Com licença. E mais dois edamame, por favor.' },
        { speaker: '店員', ja: 'ありがとうございます。', pt: 'Obrigado.' },
        { speaker: 'ロバート', ja: 'すみません。', pt: 'Com licença!' },
        { speaker: '店員', ja: 'はーい。', pt: 'Pois não.' },
        { speaker: 'ロバート', ja: 'お{水|みず}、ください。あと、マヨネーズ、ありますか？', pt: 'Água, por favor. E vocês têm maionese?' },
        { speaker: '店員', ja: 'はい、お{持|も}ちします。', pt: 'Sim, já trago.' },
      ],
    },
  ],
}

const lesson6: Section = {
  id: 'lesson-6',
  level: 'starter',
  titleJa: '第6課 チーズバーガーください',
  titlePt: 'Lição 6 — Um cheeseburger, por favor',
  summaryPt: 'Comidas que eu gosto · ler cardápio, fazer pedido em fast food / refeitório / izakaya e pedir o que precisa.',
  studyNotes: [
    {
      title: 'Tópico: Comidas que eu gosto (comer fora)',
      bodyPt:
        '## Can-do\n' +
        '- Ler um cardápio de fast food e entender o que tem.\n' +
        '- Fazer um pedido num fast food (comer no local ou levar).\n' +
        '- Perguntar e responder o que vai comer com outras pessoas.\n' +
        '- Pedir comida e itens (prato, copo, etc.) num restaurante/izakaya.\n' +
        '- Ler placas de restaurantes e saber que tipo de lugar é.',
    },
    {
      title: 'Fazer um pedido (➊)',
      bodyPt:
        'Diga o que quer + **ください** ou **お{願|ねが}いします**:\n\n' +
        '- `ホットコーヒー、お願いします` = um café quente, por favor.\n' +
        '- `これ、ください` = quero este (apontando).\n\n' +
        'Os dois servem; **お願いします é um pouco mais educado** que ください.\n\n' +
        'Frases do atendente: `いらっしゃいませ` (bem-vindo), `おうかがいします / 何になさいますか？` (pode pedir), `こちらでおめしあがりですか？` (vai comer aqui?). Levar: `テイクアウトで`; comer no local: `ここで`.',
    },
    {
      title: 'Escolher / decidir: 〜にします (➋)',
      bodyPt:
        '〜にします = “vou de 〜 / escolho 〜” (uma decisão).\n\n' +
        '- `何(なに)にしますか？` = o que você vai querer?\n' +
        '- `私は、うどんにします` = eu vou de udon.\n' +
        '- `飲み物は？` → `アイスコーヒーにします` = e bebida? — vou de café gelado.',
    },
    {
      title: 'Quantidades: contar coisas (➌)',
      bodyPt:
        'Para contar pratos/porções use o contador **〜つ** (e não いち・に・さん):\n\n' +
        '| | | | |\n|---|---|---|---|\n' +
        '| 1つ ひとつ | 2つ ふたつ | 3つ みっつ | 4つ よっつ |\n' +
        '| 5つ いつつ | 6つ むっつ | 7つ ななつ | 8つ やっつ |\n' +
        '| 9つ ここのつ | 10 とお | ？ いくつ | |\n\n' +
        'O número vem **depois** do item: `生ビール3つ、お願いします` (✗ 3つ生ビール).',
    },
    {
      title: 'Pedir um item: 〜（は）ありますか？ (➍)',
      bodyPt:
        'Para perguntar se o lugar TEM algo: 〜（は）ありますか？ (verbo あります = haver/existir).\n\n' +
        '- `マヨネーズ、ありますか？` = vocês têm maionese?\n' +
        '- `取(と)り{皿|ざら}、ありますか？` = tem prato individual?\n\n' +
        'Para chamar o atendente: **すみません**. Itens úteis: お{水|みず} (água), {取|と}り{皿|ざら} (prato), グラス (copo), （お）はし (hashi), スプーン (colher), おしぼり (toalhinha úmida), ケチャップ / マヨネーズ.',
    },
    {
      title: 'Vocabulário da lição',
      bodyPt:
        '**Fast food:** ハンバーガー (hambúrguer), チーズバーガー, てりやきバーガー, フィッシュバーガー, チキンバーガー, ダブルバーガー, フライドポテト (batata frita), デザート (sobremesa), アイスクリーム (sorvete), アップルパイ, ドリンク (bebida), ホット／アイスコーヒー, ウーロン{茶|ちゃ} (chá oolong), {単品|たんぴん} (avulso), セット (combo), S/M/L.\n\n' +
        '**Izakaya:** {刺身|さしみ} (sashimi), {唐揚|からあ}げ (frango frito), {焼|や}き{鳥|とり} (espetinho de frango), {枝豆|えだまめ} (edamame), {生|なま}ビール (chope), {日本酒|にほんしゅ} (saquê).\n\n' +
        '**Placas (看板):** {居酒屋|いざかや}, {牛丼|ぎゅうどん}, ラーメン, そば・うどん, カレー, すし.',
    },
  ],
  groups: [lesson6Group],
  audios: attachScripts(6, L6_SCRIPTS),
}

// ---- Lição 7: Casa e cômodos -------------------------------------------
const lesson7Group: ExerciseGroup = {
  id: 'iro-s-l7',
  title: '部屋が4つあります',
  subtitlePt: 'A casa: cômodos, móveis, eletrodomésticos e como ela é',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l7-1', number: 1, prompt: 'Mostrando a casa, a pessoa diz 「ここは{玄関|げんかん}です」. Significa:', choices: [{ n: 1, text: 'Aqui é a entrada (genkan).' }, { n: 2, text: 'Aqui é a cozinha.' }, { n: 3, text: 'Aqui é o banheiro.' }, { n: 4, text: 'Aqui é o quarto.' }], answer: 1, explanationPt: 'ここは【lugar】です = “aqui é 〜”. {玄関|げんかん} = entrada da casa (onde se tira o sapato). (Nota ➊)' },
    { id: 'iro-s-l7-2', number: 2, prompt: 'Para apresentar “aqui é o quarto do Son”, você diz:', choices: [{ n: 1, text: 'ここはソンさんの{部屋|へや}です' }, { n: 2, text: 'ソンさんは{部屋|へや}です' }, { n: 3, text: 'ここに{部屋|へや}がソンさんです' }, { n: 4, text: '{部屋|へや}はここがあります' }], answer: 1, translationPt: 'Aqui é o quarto do Son.', explanationPt: 'ここは + (coisa/lugar) + です. ここはソンさんの{部屋|へや}です. (Nota ➊, diálogo 07-03)' },
    { id: 'iro-s-l7-3', number: 3, prompt: '「ここに{階段|かいだん}があります」significa:', choices: [{ n: 1, text: 'Aqui há uma escada.' }, { n: 2, text: 'Aqui não há escada.' }, { n: 3, text: 'A escada é aqui em cima.' }, { n: 4, text: 'Suba a escada, por favor.' }], answer: 1, explanationPt: '【lugar】に N が あります = “em (lugar) há N”. {階段|かいだん} = escada. (Nota ➋)' },
    { id: 'iro-s-l7-4', number: 4, prompt: 'Ordem correta para “no 1º andar há 4 cômodos”:', choices: [{ n: 1, text: '1{階|かい}に{部屋|へや}が4つあります' }, { n: 2, text: '1{階|かい}が{部屋|へや}に4つあります' }, { n: 3, text: '{部屋|へや}に1{階|かい}が4つあります' }, { n: 4, text: '4つ{部屋|へや}が1{階|かい}にあります' }], answer: 1, translationPt: 'No 1º andar há quatro cômodos.', explanationPt: '【lugar】に N が【número】あります → 1{階|かい}に{部屋|へや}が4つあります. (Nota ➋, diálogo 07-03)' },
    { id: 'iro-s-l7-5', number: 5, prompt: 'Ao dizer a quantidade, o número (ex.: 4つ) vem:', choices: [{ n: 1, text: 'logo antes de あります' }, { n: 2, text: 'no começo da frase' }, { n: 3, text: 'depois de あります' }, { n: 4, text: 'antes do lugar (に)' }], answer: 1, explanationPt: 'A quantidade fica antes de あります: …{部屋|へや}が **4つ** あります. (Nota ➋)' },
    { id: 'iro-s-l7-6', number: 6, prompt: 'Em 「ここに{階段|かいだん}があります」, as partículas に e が indicam:', choices: [{ n: 1, text: 'に = onde está; が = o que está' }, { n: 2, text: 'に = o que está; が = onde está' }, { n: 3, text: 'as duas marcam o sujeito' }, { n: 4, text: 'as duas marcam o lugar' }], answer: 1, explanationPt: 'に (ここ**に**) marca o lugar onde algo existe; が ({階段|かいだん}**が**) marca o que existe. (Nota ➋)' },
    { id: 'iro-s-l7-7', number: 7, prompt: 'Para dizer “não tem torradeira”:', choices: [{ n: 1, text: 'トースターはありません' }, { n: 2, text: 'トースターがあります' }, { n: 3, text: 'トースターをください' }, { n: 4, text: 'トースターにします' }], answer: 1, translationPt: 'Não tem torradeira.', explanationPt: 'ありません = forma negativa de あります (não existe / não tem). (Nota ➌, diálogo 07-07)' },
    { id: 'iro-s-l7-8', number: 8, prompt: 'Sobre 「ベッドはないです」 e 「ベッドはありません」:', choices: [{ n: 1, text: 'Têm o mesmo sentido (“não tem cama”).' }, { n: 2, text: 'ないです significa “tem”.' }, { n: 3, text: 'ありません é informal e errado.' }, { n: 4, text: 'ないです é uma pergunta.' }], answer: 1, explanationPt: 'ないです = ありません (não tem). ないです vem de ない (negativo de ある) + です. (Nota ➌, diálogo 07-08)' },
    { id: 'iro-s-l7-9', number: 9, prompt: 'Na resposta negativa, a partícula が de 「Nがあります」 costuma virar:', choices: [{ n: 1, text: 'は (テレビ**は**ありません)' }, { n: 2, text: 'を' }, { n: 3, text: 'に' }, { n: 4, text: 'も' }], answer: 1, explanationPt: 'Em frases negativas, が → は: テレビ**は**ありません / ベッド**は**ないです. (Nota ➌)' },
    { id: 'iro-s-l7-10', number: 10, prompt: 'Para dizer “está um pouco apertado/pequeno” (sobre a casa):', choices: [{ n: 1, text: 'ちょっとせまいです' }, { n: 2, text: 'ちょっと{広|ひろ}いです' }, { n: 3, text: 'ちょっと{静|しず}かです' }, { n: 4, text: 'ちょっときれいです' }], answer: 1, translationPt: 'Está um pouco apertado.', explanationPt: 'せまい = apertado/pequeno (×{広|ひろ}い = espaçoso). Adjetivo-い + です. (Nota ➍, diálogo 07-15)' },
    { id: 'iro-s-l7-11', number: 11, prompt: 'Cuidado com きれい (limpo/bonito). Ela é:', choices: [{ n: 1, text: 'adjetivo-な (e se pronuncia kiree)' }, { n: 2, text: 'adjetivo-い (termina em い)' }, { n: 3, text: 'um substantivo' }, { n: 4, text: 'um verbo' }], answer: 1, explanationPt: 'Apesar de terminar em “い” no som, きれい é adjetivo-**な** (kiree), não adjetivo-い. {静|しず}か（な） também é な-adj. (Nota ➍)' },
    { id: 'iro-s-l7-12', number: 12, prompt: 'Negativa de 「{広|ひろ}いです」 (é espaçoso) é:', choices: [{ n: 1, text: '{広|ひろ}くないです' }, { n: 2, text: '{広|ひろ}いじゃないです' }, { n: 3, text: '{広|ひろ}いくないです' }, { n: 4, text: '{広|ひろ}くです' }], answer: 1, translationPt: 'Não é espaçoso.', explanationPt: 'Adjetivo-い: troca 〜いです por 〜くないです. {広|ひろ}い → {広|ひろ}くないです. (Nota ➎, diálogo 07-22)' },
    { id: 'iro-s-l7-13', number: 13, prompt: 'Negativa de 「{静|しず}かです」 (é silencioso) é:', choices: [{ n: 1, text: '{静|しず}かじゃないです' }, { n: 2, text: '{静|しず}かくないです' }, { n: 3, text: '{静|しず}かいじゃないです' }, { n: 4, text: '{静|しず}かないです' }], answer: 1, translationPt: 'Não é silencioso.', explanationPt: 'Adjetivo-な: troca です por じゃないです. {静|しず}か → {静|しず}かじゃないです. (Nota ➎, diálogo 07-23)' },
    { id: 'iro-s-l7-14', number: 14, prompt: 'Complete: 「アパートは、______ {静|しず}かじゃないです」 (não é muito silencioso):', choices: [{ n: 1, text: 'あまり' }, { n: 2, text: 'とても' }, { n: 3, text: 'よく' }, { n: 4, text: 'いつも' }], answer: 1, translationPt: 'O apartamento não é muito silencioso.', explanationPt: 'あまり + negativa = “não muito / pouco”. あまり{静|しず}かじゃないです. (Diálogo 07-23)' },
    { id: 'iro-s-l7-15', number: 15, prompt: 'Qual é o {冷蔵庫|れいぞうこ}?', choices: [{ n: 1, text: 'Geladeira' }, { n: 2, text: 'Micro-ondas' }, { n: 3, text: 'Panela de arroz' }, { n: 4, text: 'Máquina de lavar' }], answer: 1, explanationPt: '{冷蔵庫|れいぞうこ} = geladeira. {電子|でんし}レンジ = micro-ondas; {炊飯器|すいはんき} = panela de arroz; {洗濯機|せんたくき} = máquina de lavar.' },
    { id: 'iro-s-l7-16', number: 16, prompt: 'Você mora numa 「{一戸建|いっこだ}て」. É:', choices: [{ n: 1, text: 'uma casa térrea/sobrado individual (uma família)' }, { n: 2, text: 'um quarto num alojamento da empresa' }, { n: 3, text: 'um apartamento num prédio grande' }, { n: 4, text: 'uma casa compartilhada (república)' }], answer: 1, explanationPt: '{一戸建|いっこだ}て = casa individual. {寮|りょう} = alojamento; マンション = apê em prédio; アパート = apê em prédio baixo; シェアハウス = casa compartilhada.' },
    { id: 'iro-s-l7-17', number: 17, prompt: 'No controle do ar-condicionado, quando está {暑|あつ}い (calor), você aperta:', choices: [{ n: 1, text: '{冷房|れいぼう} (refrigerar)' }, { n: 2, text: '{暖房|だんぼう} (aquecer)' }, { n: 3, text: '{停止|ていし} (parar)' }, { n: 4, text: '{除湿|じょしつ} (desumidificar)' }], answer: 1, explanationPt: '{冷房|れいぼう} = ar frio (para calor); {暖房|だんぼう} = aquecimento (para frio); {停止|ていし} = parar; {除湿|じょしつ} = desumidificar. (Seção 5)' },
    { id: 'iro-s-l7-18', number: 18, prompt: 'Na máquina de lavar, para LIGAR (electricidade) você aperta o botão:', choices: [{ n: 1, text: '{入|いり} (入れる = ligar)' }, { n: 2, text: '{切|きり} (切る = desligar)' }, { n: 3, text: 'スタート (iniciar)' }, { n: 4, text: 'コース (modo)' }], answer: 1, explanationPt: '{入|いり}（入れる）= ligar; {切|きり}（切る）= desligar; スタート = iniciar a lavagem; コース = escolher o modo. (Seção 5)' },
    { id: 'iro-s-l7-19', number: 19, prompt: 'Diálogo 07-22: como é o {寮|りょう} (alojamento) do Visal?', context: 'いえ、{広|ひろ}くないです。でも、とても{静|しず}かです。{近|ちか}くに{公園|こうえん}があります。', choices: [{ n: 1, text: 'Não é grande, mas é muito silencioso; tem um parque perto.' }, { n: 2, text: 'É grande e barulhento.' }, { n: 3, text: 'É novo e tem uma escola perto.' }, { n: 4, text: 'É velho e sujo.' }], answer: 1, explanationPt: 'Visal: {広|ひろ}くないです (não é grande), でも{静|しず}かです (mas é silencioso), {近|ちか}くに{公園|こうえん}があります (tem parque perto).' },
    { id: 'iro-s-l7-20', number: 20, prompt: 'Diálogo 07-08: o quarto do Son tem cama (ベッド)?', context: 'あ、ベッドはないです。ここにふとんがありますよ。', choices: [{ n: 1, text: 'Não tem cama; tem futon.' }, { n: 2, text: 'Tem cama e futon.' }, { n: 3, text: 'Tem cama, mas não tem futon.' }, { n: 4, text: 'Não tem cama nem futon.' }], answer: 1, explanationPt: 'ベッドはないです (não tem cama), ここにふとんがありますよ (aqui tem futon). A TV fica no {食堂|しょくどう} (refeitório).' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 7 (聴解スクリプト)
const L7_SCRIPTS: Record<string, ScriptItem[]> = {
  '07-03': [
    {
      label: '会話 (07-03)',
      setupJa: 'ソンさんとタインさんが、これから{住|す}む{会社|かいしゃ}の{寮|りょう}を{中川|なかがわ}さんに{案内|あんない}してもらっています。',
      setupPt: 'Nakagawa mostra a Son e Thanh o alojamento da empresa onde eles vão morar.',
      lines: [
        { speaker: '中川', ja: 'どうぞ。{入|はい}ってください。', pt: 'Entrem, por favor.' },
        { speaker: 'ソン・タイン', ja: 'はい。', pt: 'Sim.' },
        { speaker: '中川', ja: 'ここは{玄関|げんかん}です。くつを{脱|ぬ}いでください。', pt: 'Aqui é a entrada. Tirem os sapatos, por favor.' },
        { speaker: 'ソン・タイン', ja: 'はい。', pt: 'Sim.' },
        { speaker: '中川', ja: 'ここは{管理人室|かんりにんしつ}です。', pt: 'Aqui é a sala do zelador.' },
        { speaker: '管理人', ja: 'こんにちは。', pt: 'Boa tarde.' },
        { speaker: 'ソン', ja: 'お{世話|せわ}になります。', pt: 'Conto com a sua ajuda.' },
        { speaker: 'タイン', ja: 'よろしくお{願|ねが}いします。', pt: 'Muito prazer, conto com você.' },
        { speaker: '中川', ja: 'ここはトイレです。', pt: 'Aqui é o banheiro.' },
        { speaker: 'タイン', ja: 'はい。', pt: 'Sim.' },
        { speaker: '中川', ja: 'ここは{台所|だいどころ}です。', pt: 'Aqui é a cozinha.' },
        { speaker: 'ソン', ja: 'はい。', pt: 'Sim.' },
        { speaker: '中川', ja: 'ここは{食堂|しょくどう}です。ご{飯|はん}を{食|た}べます。', pt: 'Aqui é o refeitório. É onde se faz as refeições.' },
        { speaker: 'ソン', ja: 'わかりました。', pt: 'Entendi.' },
        { speaker: '中川', ja: 'ここはお{風呂|ふろ}です。', pt: 'Aqui é o banho (ofurô).' },
        { speaker: 'タイン', ja: 'はい。', pt: 'Sim.' },
        { speaker: '中川', ja: '1{階|かい}に{部屋|へや}が4つあります。ここはソンさんの{部屋|へや}です。', pt: 'No 1º andar há quatro cômodos. Este é o quarto do Son.' },
        { speaker: 'ソン', ja: 'あ、はい。', pt: 'Ah, sim.' },
        { speaker: '中川', ja: 'ここに{階段|かいだん}があります。2{階|かい}にタインさんの{部屋|へや}があります。', pt: 'Aqui tem uma escada. No 2º andar fica o quarto do Thanh.' },
      ],
    },
  ],
  '07-07': [
    {
      label: '会話① (07-07) — {台所|だいどころ}で',
      setupJa: 'これから{住|す}む{寮|りょう}の{設備|せつび}について、ソンさんとタインさんが{中川|なかがわ}さんに{質問|しつもん}しています。',
      setupPt: 'Na cozinha: Son e Thanh perguntam ao Nakagawa sobre os equipamentos do alojamento.',
      lines: [
        { speaker: '中川', ja: 'これ、{冷蔵庫|れいぞうこ}です。みんなで{使|つか}ってください。', pt: 'Esta é a geladeira. Usem todos juntos.' },
        { speaker: 'ソン', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'タイン', ja: 'あのう、{電子|でんし}レンジはありますか？', pt: 'Hmm, tem micro-ondas?' },
        { speaker: '中川', ja: 'あります。ここです。', pt: 'Tem. É aqui.' },
        { speaker: 'ソン', ja: 'すみません。トースターはありますか？', pt: 'Com licença. Tem torradeira?' },
        { speaker: '中川', ja: 'あ、トースターはありません。', pt: 'Ah, torradeira não tem.' },
        { speaker: 'ソン', ja: 'そうですか。', pt: 'Ah, entendi.' },
        { speaker: 'タイン', ja: '{炊飯器|すいはんき}はありますか？', pt: 'Tem panela de arroz?' },
        { speaker: '中川', ja: 'はい。ここです。', pt: 'Sim. É aqui.' },
        { speaker: 'タイン', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '07-08': [
    {
      label: '会話② (07-08) — {部屋|へや}で',
      setupPt: 'No quarto: Nakagawa mostra o quarto ao Son.',
      lines: [
        { speaker: '中川', ja: 'ここはソンさんの{部屋|へや}です。どうぞ。', pt: 'Aqui é o quarto do Son. Fique à vontade.' },
        { speaker: 'ソン', ja: 'はい。すみません。ベッドは……？', pt: 'Sim. Com licença, e a cama…?' },
        { speaker: '中川', ja: 'あ、ベッドはないです。ここにふとんがありますよ。', pt: 'Ah, cama não tem. Mas aqui tem futon, viu?' },
        { speaker: 'ソン', ja: 'はい、わかりました。', pt: 'Sim, entendi.' },
        { speaker: 'タイン', ja: 'テレビは……？', pt: 'E a TV…?' },
        { speaker: '中川', ja: 'あー、ないです。{食堂|しょくどう}にあります。', pt: 'Ah, não tem. Tem no refeitório.' },
        { speaker: 'タイン', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '07-15': [
    {
      label: '会話① (07-15)',
      lines: [
        { speaker: 'A', ja: 'オートさんは、どこに{住|す}んでいますか？', pt: 'Oto, onde você mora?' },
        { speaker: 'B', ja: '{長浜|ながはま}に{住|す}んでいます。', pt: 'Moro em Nagahama.' },
        { speaker: 'A', ja: '{家|いえ}はどうですか？', pt: 'E como é a casa?' },
        { speaker: 'B', ja: 'ちょっとせまいです。', pt: 'É um pouco apertada.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '07-16': [
    {
      label: '会話② (07-16)',
      lines: [
        { speaker: 'A', ja: 'テアさんは、どこに{住|す}んでいますか？', pt: 'Thea, onde você mora?' },
        { speaker: 'B', ja: '{新町|しんまち}です。', pt: 'Em Shinmachi.' },
        { speaker: 'A', ja: '{家|いえ}はどうですか？', pt: 'E como é a casa?' },
        { speaker: 'B', ja: 'とてもきれいです。', pt: 'É muito bonita/limpa.' },
        { speaker: 'A', ja: 'いいですね。', pt: 'Que bom!' },
      ],
    },
  ],
  '07-17': [
    {
      label: '会話③ (07-17)',
      lines: [
        { speaker: 'A', ja: 'アナさんのうちは、{会社|かいしゃ}の{近|ちか}く？', pt: 'Sua casa é perto da empresa, Ana?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: '{家|いえ}はどう？', pt: 'E como é a casa?' },
        { speaker: 'B', ja: '{静|しず}かです。', pt: 'É silenciosa.' },
        { speaker: 'A', ja: 'そう。', pt: 'É mesmo.' },
      ],
    },
  ],
  '07-18': [
    {
      label: '会話④ (07-18)',
      lines: [
        { speaker: 'A', ja: 'ナディムさんの{家|いえ}は、{南区|みなみく}？', pt: 'Sua casa é no bairro sul (Minami), Nadim?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: '{家|いえ}はどう？', pt: 'E como é a casa?' },
        { speaker: 'B', ja: 'ちょっと{古|ふる}いです。でも、{広|ひろ}いです。', pt: 'É um pouco velha. Mas é espaçosa.' },
        { speaker: 'A', ja: 'ふーん。', pt: 'Hmm…' },
      ],
    },
  ],
  '07-22': [
    {
      label: '会話① (07-22)',
      setupJa: '{前田|まえだ}さん、ビサルさん、アルニさんが、{地域|ちいき}のイベントのあと、どこに{住|す}んでいるか{話|はな}しています。',
      setupPt: 'Após um evento do bairro, Maeda, Visal e Aruni conversam sobre onde moram.',
      lines: [
        { speaker: '前田', ja: 'ビサルさんは、どこに{住|す}んでいますか？', pt: 'Visal, onde você mora?' },
        { speaker: 'ビサル', ja: '{会社|かいしゃ}の{寮|りょう}に{住|す}んでいます。', pt: 'Moro no alojamento da empresa.' },
        { speaker: 'アルニ', ja: '{広|ひろ}いですか？', pt: 'É grande?' },
        { speaker: 'ビサル', ja: 'いえ、{広|ひろ}くないです。', pt: 'Não, não é grande.' },
        { speaker: 'アルニ', ja: 'そうですか。', pt: 'Ah, entendi.' },
        { speaker: 'ビサル', ja: 'でも、とても{静|しず}かです。{近|ちか}くに{公園|こうえん}があります。', pt: 'Mas é muito silencioso. Tem um parque perto.' },
        { speaker: 'アルニ', ja: 'そうですか。', pt: 'Que bom.' },
      ],
    },
  ],
  '07-23': [
    {
      label: '会話② (07-23)',
      lines: [
        { speaker: '前田', ja: 'アルニさんは？', pt: 'E você, Aruni?' },
        { speaker: 'アルニ', ja: '{私|わたし}は、{北町|きたまち}のアパートに{住|す}んでいます。', pt: 'Eu moro num apartamento em Kitamachi.' },
        { speaker: 'ビサル', ja: 'きれいですか？', pt: 'É bonito/limpo?' },
        { speaker: 'アルニ', ja: 'はい、きれいです。でも、ちょっと{古|ふる}いです。', pt: 'Sim, é. Mas é um pouco velho.' },
        { speaker: 'ビサル', ja: 'そうですか。{静|しず}かですか？', pt: 'Ah, entendi. É silencioso?' },
        { speaker: 'アルニ', ja: 'いえ。{近|ちか}くに{学校|がっこう}があります。あまり{静|しず}かじゃないです。', pt: 'Não. Tem uma escola perto. Não é muito silencioso.' },
        { speaker: '前田', ja: 'ああ。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '07-24': [
    {
      label: '会話③ (07-24)',
      lines: [
        { speaker: 'アルニ', ja: '{前田|まえだ}さんは？マンションですか？', pt: 'E você, Maeda? Mora num prédio (mansion)?' },
        { speaker: '前田', ja: 'うちは{一戸建|いっこだ}て。', pt: 'A minha é uma casa (individual).' },
        { speaker: 'アルニ', ja: 'すごいですね。', pt: 'Que demais!' },
        { speaker: '前田', ja: 'でも、{大|おお}きくないです。', pt: 'Mas não é grande.' },
        { speaker: 'ビサル', ja: 'そうですか。{新|あたら}しいですか？', pt: 'Ah, entendi. É nova?' },
        { speaker: '前田', ja: 'いえ、{新|あたら}しくないです。とても{古|ふる}いです。', pt: 'Não, não é nova. É bem velha.' },
        { speaker: 'ビサル', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: '前田', ja: '{近|ちか}くにお{寺|てら}があります。お{寺|てら}もとても{古|ふる}いです。', pt: 'Tem um templo perto. O templo também é bem antigo.' },
        { speaker: 'ビサル・アルニ', ja: 'へー。', pt: 'Nossa…' },
      ],
    },
  ],
}

const lesson7: Section = {
  id: 'lesson-7',
  level: 'starter',
  titleJa: '第7課 部屋が4つあります',
  titlePt: 'Lição 7 — Tem quatro cômodos',
  summaryPt: 'Casa e trabalho · cômodos da casa, móveis/eletrodomésticos, dizer como é a casa e ler botões de aparelhos.',
  studyNotes: [
    {
      title: 'Tópico: Casa e trabalho (a moradia)',
      bodyPt:
        '## Can-do\n' +
        '- Entender explicações simples ao ser mostrado uma casa (qual cômodo é o quê, quantos cômodos há).\n' +
        '- Perguntar e checar se um cômodo tem o que você precisa.\n' +
        '- Dar uma resposta simples sobre onde mora e como é a casa.\n' +
        '- Perguntar e responder sobre o tipo de moradia.\n' +
        '- Ler botões de eletrodomésticos (máquina de lavar, controle do ar-condicionado).',
    },
    {
      title: 'Apresentar um lugar: ここは…です (➊)',
      bodyPt:
        'Use **ここは【lugar/coisa】です** = “aqui é 〜” ao mostrar a casa:\n\n' +
        '- `ここは{玄関|げんかん}です` = aqui é a entrada.\n' +
        '- `ここはソンさんの{部屋|へや}です` = aqui é o quarto do Son.\n\n' +
        'ここ = “aqui” (o lugar onde você está agora).\n\n' +
        '**Cômodos:** {玄関|げんかん} (entrada), お{風呂|ふろ} (banho), トイレ (banheiro), {階段|かいだん} (escada), {居間|いま}／リビング (sala de estar), {庭|にわ} (quintal/jardim), {台所|だいどころ}／キッチン (cozinha), ベランダ／バルコニー (varanda), {部屋|へや} (cômodo/quarto), 1{階|かい} (1º andar/térreo), 2{階|かい} (2º andar). No alojamento: {管理人室|かんりにんしつ} (sala do zelador), {食堂|しょくどう} (refeitório).',
    },
    {
      title: 'Dizer que algo existe + quantos: …に N が（数）あります (➋)',
      bodyPt:
        '**【lugar】に N が あります** = “em (lugar) há N”:\n\n' +
        '- `ここに{階段|かいだん}があります` = aqui tem uma escada.\n\n' +
        'Para dizer **quantos**, ponha o número logo antes de あります:\n\n' +
        '- `1{階|かい}に{部屋|へや}が4つあります` = no 1º andar há 4 cômodos.\n' +
        '- `2{階|かい}に{部屋|へや}が3つあります` = no 2º andar há 3 cômodos.\n\n' +
        'Partículas: **に** marca onde algo está; **が** marca o que está. Contador 〜つ: ひとつ・ふたつ・みっつ・よっつ…',
    },
    {
      title: 'Não tem: ありません / ないです (➌)',
      bodyPt:
        'Forma negativa de あります (= não existe / não tem):\n\n' +
        '- `トースターはありません` = não tem torradeira.\n' +
        '- `ベッドはないです` = não tem cama.\n\n' +
        '**ないです = ありません** (mesmo sentido). ないです vem de ない (negativo de ある) + です.\n\n' +
        'Na negativa, a partícula **が** vira **は**: テレビ**は**ありません.\n\n' +
        '**Móveis/eletro:** エアコン (ar-cond.), {冷蔵庫|れいぞうこ} (geladeira), {電子|でんし}レンジ (micro-ondas), {炊飯器|すいはんき} (panela de arroz), トースター (torradeira), ベッド (cama), ふとん (futon), テーブル (mesa), いす (cadeira), {洗濯機|せんたくき} (máq. de lavar), テレビ (TV), Wi-Fi.',
    },
    {
      title: 'Adjetivos: como a casa é, e a negativa (➍ ➎)',
      bodyPt:
        'Dois tipos de adjetivo:\n\n' +
        '**Adjetivo-い** (termina em い): {広|ひろ}い (espaçoso), せまい (apertado), {大|おお}きい (grande), {小|ちい}さい (pequeno), {新|あたら}しい (novo), {古|ふる}い (velho), うるさい (barulhento), きたない (sujo).\n\n' +
        '**Adjetivo-な**: {静|しず}か（な） (silencioso), きれい（な） (limpo/bonito — atenção: é な-adj, lê-se *kiree*).\n\n' +
        '**Afirmativa (➍):** adj-い + です → `せまいです`; adj-な + です (tira o な) → `{静|しず}かです`.\n\n' +
        '**Negativa (➎):**\n' +
        '- adj-い: 〜いです → **〜くないです** → {広|ひろ}い → `{広|ひろ}くないです`.\n' +
        '- adj-な: 〜です → **〜じゃないです** → {静|しず}か → `{静|しず}かじゃないです`.\n\n' +
        '(também existe 〜くありません / 〜じゃありません). Reforço: **あまり** + negativa = “não muito”.',
    },
    {
      title: 'Tipos de moradia e botões de aparelhos',
      bodyPt:
        '**Tipos de moradia:** アパート (apê em prédio baixo), マンション (apê em prédio de concreto), {寮|りょう} (alojamento da empresa/escola), シェアハウス (casa compartilhada/república), {一戸建|いっこだ}て (casa individual). Perto de casa: お{寺|てら} (templo), {学校|がっこう} (escola), {公園|こうえん} (parque).\n\n' +
        '**Máquina de lavar ({洗濯機|せんたくき}):** {入|いり}（入れる）= ligar, {切|きり}（切る）= desligar, スタート = iniciar, コース = modo, {水量|すいりょう} = nível de água, {予約|よやく} = agendar.\n\n' +
        '**Ar-condicionado (エアコン):** {冷房|れいぼう} = refrigerar (calor), {暖房|だんぼう} = aquecer (frio), {除湿|じょしつ} = desumidificar, {自動|じどう} = automático, {温度|おんど} = temperatura, {停止|ていし} = parar, {風向|かざむき} = direção do ar, {風量|ふうりょう} = intensidade.',
    },
  ],
  groups: [lesson7Group],
  audios: attachScripts(7, L7_SCRIPTS),
}

// ---- Lição 8: No trabalho — cômodos, pessoas e objetos --------------------
const lesson8Group: ExerciseGroup = {
  id: 'iro-s-l8',
  title: '山田さんはどこにいますか',
  subtitlePt: 'Cômodos da empresa, onde está uma pessoa/objeto e placas',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l8-1', number: 1, prompt: 'No trabalho, 「{会議室|かいぎしつ}」 é a sala de:', choices: [{ n: 1, text: 'reunião' }, { n: 2, text: 'refeições' }, { n: 3, text: 'fumantes' }, { n: 4, text: 'depósito' }], answer: 1, explanationPt: '{会議室|かいぎしつ} = sala de reunião. {食堂|しょくどう} = refeitório; {喫煙所|きつえんじょ} = área de fumantes; {倉庫|そうこ} = depósito.' },
    { id: 'iro-s-l8-2', number: 2, prompt: 'O 「{給湯室|きゅうとうしつ}」 é o lugar onde se:', choices: [{ n: 1, text: 'prepara chá / água quente (copa)' }, { n: 2, text: 'troca de roupa' }, { n: 3, text: 'recebe visitas' }, { n: 4, text: 'guarda estoque' }], answer: 1, explanationPt: '{給湯室|きゅうとうしつ} = copa (onde se faz chá/café, お{茶|ちゃ}をいれます). {更衣室|こういしつ} = vestiário; {応接室|おうせつしつ} = sala de visitas.' },
    { id: 'iro-s-l8-3', number: 3, prompt: 'No 「{更衣室|こういしつ}」 (vestiário) as pessoas:', choices: [{ n: 1, text: 'trocam de roupa ({着替|きが}えます)' }, { n: 2, text: 'fazem reunião' }, { n: 3, text: 'almoçam' }, { n: 4, text: 'fumam' }], answer: 1, explanationPt: '{更衣室|こういしつ} = vestiário; ali {着替|きが}えます (troca-se de roupa, ex.: para o uniforme/作業服).' },
    { id: 'iro-s-l8-4', number: 4, prompt: 'Em 「ここで{打|う}ち{合|あ}わせをします」, a partícula で indica:', choices: [{ n: 1, text: 'o lugar onde a ação acontece' }, { n: 2, text: 'o lugar onde algo existe' }, { n: 3, text: 'o destino' }, { n: 4, text: 'o instrumento' }], answer: 1, explanationPt: '【lugar】で + verbo de ação = onde a ação ocorre. ここで{打|う}ち{合|あ}わせをします = aqui se faz a reunião. (Nota ➊)' },
    { id: 'iro-s-l8-5', number: 5, prompt: 'Complete: “Aqui a gente come” → ここ＿＿ご{飯|はん}を{食|た}べます:', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'に' }, { n: 3, text: 'を' }, { n: 4, text: 'は' }], answer: 1, translationPt: 'Aqui a gente come.', explanationPt: 'Ação (comer) → partícula で marca o local: ここで食べます. (に é para existência: ここに…があります.) (Nota ➊)' },
    { id: 'iro-s-l8-6', number: 6, prompt: 'Para perguntar ONDE está uma PESSOA (山田さん):', choices: [{ n: 1, text: '{山田|やまだ}さんは、どこにいますか？' }, { n: 2, text: '{山田|やまだ}さんは、どこにありますか？' }, { n: 3, text: '{山田|やまだ}さんは、なにを？' }, { n: 4, text: '{山田|やまだ}さんが、いますか？' }], answer: 1, translationPt: 'Onde está o Yamada?', explanationPt: 'Pessoas/animais usam o verbo いる: 〜は、どこにいますか？ (ou どこですか？). (Nota ➋)' },
    { id: 'iro-s-l8-7', number: 7, prompt: '「{食堂|しょくどう}にいます」 pode ser dito de forma curta como:', choices: [{ n: 1, text: '{食堂|しょくどう}です' }, { n: 2, text: '{食堂|しょくどう}をします' }, { n: 3, text: '{食堂|しょくどう}でいます' }, { n: 4, text: '{食堂|しょくどう}があります' }], answer: 1, explanationPt: '〜にいます pode virar simplesmente 〜です: {食堂|しょくどう}です = (está) no refeitório. (Nota ➋)' },
    { id: 'iro-s-l8-8', number: 8, prompt: 'Para dizer que a pessoa NÃO está ali:', choices: [{ n: 1, text: 'いません／いないです' }, { n: 2, text: 'ありません／ないです' }, { n: 3, text: 'いきません' }, { n: 4, text: 'しません' }], answer: 1, explanationPt: 'いません = negativo de います (para pessoas). いないです = mesmo sentido. (×ありません, que é para coisas.) (Nota ➌)' },
    { id: 'iro-s-l8-9', number: 9, prompt: 'Qual verbo de existência se usa para PESSOAS/animais e qual para COISAS?', choices: [{ n: 1, text: 'pessoas/animais: います; coisas: あります' }, { n: 2, text: 'pessoas/animais: あります; coisas: います' }, { n: 3, text: 'os dois usam あります' }, { n: 4, text: 'os dois usam います' }], answer: 1, explanationPt: 'います（いる）= coisas que se movem (pessoas, animais). あります（ある）= coisas paradas (objetos). (Quadro ◆ あります・います)' },
    { id: 'iro-s-l8-10', number: 10, prompt: 'Diferença entre ここ / そこ / あそこ:', choices: [{ n: 1, text: 'ここ = perto de mim; そこ = perto de você; あそこ = longe dos dois' }, { n: 2, text: 'ここ = longe; そこ = perto de mim; あそこ = perto de você' }, { n: 3, text: 'são sinônimos' }, { n: 4, text: 'ここ = perto de você; そこ = longe; あそこ = perto de mim' }], answer: 1, explanationPt: 'ここ (aqui, perto do falante), そこ (aí, perto do ouvinte), あそこ (lá, longe de ambos). (Nota ➍)' },
    { id: 'iro-s-l8-11', number: 11, prompt: 'A copiadora está bem distante de você e do colega. Você diz que ela está:', choices: [{ n: 1, text: 'あそこです' }, { n: 2, text: 'ここです' }, { n: 3, text: 'そこです' }, { n: 4, text: 'どこです' }], answer: 1, explanationPt: 'Longe dos dois → あそこ. コピー{機|き}はあそこです. (Nota ➍, diálogo 08-19)' },
    { id: 'iro-s-l8-12', number: 12, prompt: 'Para perguntar ONDE está um OBJETO (はさみ = tesoura):', choices: [{ n: 1, text: 'はさみは、どこにありますか？' }, { n: 2, text: 'はさみは、どこにいますか？' }, { n: 3, text: 'はさみは、だれですか？' }, { n: 4, text: 'はさみを、しますか？' }], answer: 1, translationPt: 'Onde está a tesoura?', explanationPt: 'Objetos usam ある: 〜は、どこにありますか？ (ou どこですか？). (Nota ➍)' },
    { id: 'iro-s-l8-13', number: 13, prompt: '「{引|ひ}き{出|だ}しの{中|なか}にあります」 significa que está:', choices: [{ n: 1, text: 'dentro da gaveta' }, { n: 2, text: 'em cima da gaveta' }, { n: 3, text: 'embaixo da gaveta' }, { n: 4, text: 'ao lado da gaveta' }], answer: 1, explanationPt: 'N の {中|なか} = dentro de N. {引|ひ}き{出|だ}し = gaveta. Estrutura: N の【posição】にあります. (Nota ➎, diálogo 08-17)' },
    { id: 'iro-s-l8-14', number: 14, prompt: 'Posições: relacione 「{横|よこ}」:', choices: [{ n: 1, text: 'ao lado' }, { n: 2, text: 'em cima' }, { n: 3, text: 'embaixo' }, { n: 4, text: 'dentro' }], answer: 1, explanationPt: '{横|よこ} = ao lado. {上|うえ} = em cima, {下|した} = embaixo, {中|なか} = dentro. (Seção 3 / Nota ➎)' },
    { id: 'iro-s-l8-15', number: 15, prompt: 'Qual destes é a 「のり」?', choices: [{ n: 1, text: 'cola' }, { n: 2, text: 'tesoura' }, { n: 3, text: 'fita adesiva larga' }, { n: 4, text: 'lixeira' }], answer: 1, explanationPt: 'のり = cola. はさみ = tesoura; ガムテープ = fita adesiva larga; ごみ{箱|ばこ} = lixeira; FAX = aparelho de fax.' },
    { id: 'iro-s-l8-16', number: 16, prompt: 'Você vê na porta a placa 「{事務室|じむしつ}」. É:', choices: [{ n: 1, text: 'o escritório (sala administrativa)' }, { n: 2, text: 'a sala de recepção de visitas' }, { n: 3, text: 'a área de fumantes' }, { n: 4, text: 'o vestiário' }], answer: 1, explanationPt: '{事務室|じむしつ} = escritório/sala administrativa (OFFICE). {応接室|おうせつしつ} = sala de visitas; {喫煙所|きつえんじょ} = área de fumantes. (Seção 4)' },
    { id: 'iro-s-l8-17', number: 17, prompt: 'Diálogo 08-10: onde está o {辻|つじ}?', context: '{辻|つじ}さんは……。あれ？いませんね。たぶん、{倉庫|そうこ}です。', choices: [{ n: 1, text: 'Não está; provavelmente no depósito ({倉庫|そうこ}).' }, { n: 2, text: 'Está no refeitório.' }, { n: 3, text: 'Está na sala de reunião.' }, { n: 4, text: 'Está no banheiro.' }], answer: 1, explanationPt: 'いませんね = (ele) não está. たぶん、{倉庫|そうこ}です = talvez no depósito. たぶん = provavelmente.' },
    { id: 'iro-s-l8-18', number: 18, prompt: 'Diálogo 08-17: onde está a cola (のり)?', context: 'ここです。{引|ひ}き{出|だ}しの{中|なか}にあります。', choices: [{ n: 1, text: 'Dentro da gaveta.' }, { n: 2, text: 'Em cima da mesa.' }, { n: 3, text: 'Ao lado da copiadora.' }, { n: 4, text: 'Embaixo da mesa.' }], answer: 1, explanationPt: 'ここです。{引|ひ}き{出|だ}しの{中|なか}にあります = aqui, dentro da gaveta. (A tesoura é que fica {机|つくえ}の{上|うえ}; a lixeira, {机|つくえ}の{下|した}.)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 8 (聴解スクリプト)
const L8_SCRIPTS: Record<string, ScriptItem[]> = {
  '08-03': [
    {
      label: '会話① (08-03)',
      setupJa: 'はじめての{職場|しょくば}で、{部屋|へや}を{案内|あんない}してもらっています。',
      setupPt: 'No primeiro dia de trabalho, mostram os cômodos para você.',
      lines: [
        { speaker: 'A', ja: 'ここは{男性|だんせい}の{更衣室|こういしつ}です。ここで{着替|きが}えます。', pt: 'Aqui é o vestiário masculino. É aqui que se troca de roupa.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '08-04': [
    {
      label: '会話② (08-04)',
      lines: [
        { speaker: 'A', ja: 'ここは{給湯室|きゅうとうしつ}です。ここでお{茶|ちゃ}をいれます。', pt: 'Aqui é a copa. É aqui que se prepara o chá.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '08-05': [
    {
      label: '会話③ (08-05)',
      lines: [
        { speaker: 'A', ja: 'ここは{会議室|かいぎしつ}です。ここで{打|う}ち{合|あ}わせをします。', pt: 'Aqui é a sala de reunião. É aqui que se fazem as reuniões.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '08-06': [
    {
      label: '会話④ (08-06)',
      lines: [
        { speaker: 'A', ja: 'えっと、ここは{食堂|しょくどう}です。ここでご{飯|はん}を{食|た}べます。', pt: 'Hmm, aqui é o refeitório. É aqui que se faz as refeições.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: 'おいしいですよ。', pt: 'A comida é gostosa, viu?' },
      ],
    },
  ],
  '08-08': [
    {
      label: '会話① (08-08)',
      setupJa: '{職場|しょくば}で、{人|ひと}を{探|さが}しています。',
      setupPt: 'No trabalho, procurando uma pessoa.',
      lines: [
        { speaker: 'A', ja: 'すみません。{山田|やまだ}さんは、どこにいますか？', pt: 'Com licença. Onde está o Yamada?' },
        { speaker: 'B', ja: '{食堂|しょくどう}にいます。', pt: 'Está no refeitório.' },
        { speaker: 'A', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Obrigado.' },
      ],
    },
  ],
  '08-09': [
    {
      label: '会話② (08-09)',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。{永井|ながい}さんは、どこですか？', pt: 'Hmm, com licença. Onde está o Nagai?' },
        { speaker: 'B', ja: '{永井|ながい}さん？ああ、{会議室|かいぎしつ}にいるよ。', pt: 'O Nagai? Ah, ele está na sala de reunião.' },
        { speaker: 'A', ja: 'あ、どうも。', pt: 'Ah, obrigado.' },
      ],
    },
  ],
  '08-10': [
    {
      label: '会話③ (08-10)',
      lines: [
        { speaker: 'A', ja: 'すみません。{辻|つじ}さんは、いますか？', pt: 'Com licença. O Tsuji está?' },
        { speaker: 'B', ja: '{辻|つじ}さんは……。あれ？いませんね。たぶん、{倉庫|そうこ}です。', pt: 'O Tsuji… Ué? Não está, não. Talvez esteja no depósito.' },
        { speaker: 'A', ja: 'じゃあ、{探|さが}してみます。', pt: 'Então vou procurar.' },
      ],
    },
  ],
  '08-11': [
    {
      label: '会話④ (08-11)',
      lines: [
        { speaker: 'A', ja: 'アマンダさん、いますか？', pt: 'A Amanda está?' },
        { speaker: 'B', ja: 'えーと、いないですね。', pt: 'Hmm, não está, não.' },
        { speaker: 'A', ja: 'そうですか。わかりました。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '08-17': [
    {
      label: '会話① (08-17)',
      setupJa: '{職場|しょくば}で、{必要|ひつよう}なものがどこにあるか、{近|ちか}くの{人|ひと}に{質問|しつもん}しています。',
      setupPt: 'No trabalho, perguntando a alguém por perto onde está o que se precisa.',
      lines: [
        { speaker: 'A', ja: 'あのう、のりは、どこにありますか？', pt: 'Hmm, onde está a cola?' },
        { speaker: 'B', ja: 'ここです。{引|ひ}き{出|だ}しの{中|なか}にあります。はい、どうぞ。', pt: 'Aqui. Está dentro da gaveta. Aqui, pode pegar.' },
        { speaker: 'A', ja: 'あ、すみません。', pt: 'Ah, obrigado.' },
      ],
    },
  ],
  '08-18': [
    {
      label: '会話② (08-18)',
      lines: [
        { speaker: 'A', ja: 'すみません。ガムテープは、どこですか？', pt: 'Com licença. Onde está a fita adesiva?' },
        { speaker: 'B', ja: 'ガムテープ？あそこです。{箱|はこ}の{中|なか}。', pt: 'A fita? Lá. Dentro da caixa.' },
        { speaker: 'A', ja: 'ああ、わかりました。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '08-19': [
    {
      label: '会話③ (08-19)',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。FAXは、どこにありますか？', pt: 'Hmm, com licença. Onde está o fax?' },
        { speaker: 'B', ja: 'ああ、あそこ。コピー{機|き}の{横|よこ}。', pt: 'Ah, lá. Ao lado da copiadora.' },
        { speaker: 'A', ja: 'あ、わかりました。ありがとうございます。', pt: 'Ah, entendi. Obrigado.' },
      ],
    },
  ],
  '08-20': [
    {
      label: '会話④ (08-20)',
      lines: [
        { speaker: 'A', ja: 'はさみ、ありますか？', pt: 'Tem tesoura?' },
        { speaker: 'B', ja: 'あ、そこにあります。{机|つくえ}の{上|うえ}です。', pt: 'Ah, está aí. Em cima da mesa.' },
        { speaker: 'A', ja: 'ああ、ありがとうございます。', pt: 'Ah, obrigado.' },
      ],
    },
  ],
  '08-21': [
    {
      label: '会話⑤ (08-21)',
      lines: [
        { speaker: 'A', ja: 'えーと、ごみ{箱|ばこ}は……。', pt: 'Hmm, a lixeira…?' },
        { speaker: 'B', ja: 'あ、そこそこ。', pt: 'Ah, aí, aí.' },
        { speaker: 'A', ja: 'え？', pt: 'Hã?' },
        { speaker: 'B', ja: '{机|つくえ}の{下|した}。', pt: 'Embaixo da mesa.' },
        { speaker: 'A', ja: 'あ、ありました。', pt: 'Ah, achei.' },
      ],
    },
  ],
}

const lesson8: Section = {
  id: 'lesson-8',
  level: 'starter',
  titleJa: '第8課 山田さんはどこにいますか？',
  titlePt: 'Lição 8 — Onde está o Yamada?',
  summaryPt: 'Casa e trabalho · cômodos da empresa, dizer onde está uma pessoa ou objeto (いる／ある, ここ・そこ・あそこ) e ler placas de salas.',
  studyNotes: [
    {
      title: 'Tópico: Casa e trabalho (no escritório)',
      bodyPt:
        '## Can-do\n' +
        '- Entender uma explicação simples ao ser mostrado um cômodo do trabalho (o que se faz nele).\n' +
        '- Perguntar e responder onde uma pessoa está.\n' +
        '- Perguntar e responder onde um objeto/equipamento está.\n' +
        '- Ler placas na entrada das salas e saber que sala é.',
    },
    {
      title: 'O que se faz no cômodo: 【lugar】で V-ます (➊)',
      bodyPt:
        'A partícula **で** marca o **lugar de uma ação**:\n\n' +
        '- `ここで{着替|きが}えます` = aqui a gente troca de roupa.\n' +
        '- `ここで{打|う}ち{合|あ}わせをします` = aqui se fazem reuniões.\n' +
        '- `ここでご{飯|はん}を{食|た}べます` = aqui a gente come.\n\n' +
        '⚠️ Não confunda: **で** = local da ação; **に** = local onde algo existe.\n\n' +
        '**Cômodos da empresa:** {更衣室|こういしつ} (vestiário), {食堂|しょくどう} (refeitório), {給湯室|きゅうとうしつ} (copa), {会議室|かいぎしつ} (sala de reunião), {喫煙所|きつえんじょ} (área de fumantes), {倉庫|そうこ} (depósito), {応接室|おうせつしつ} (sala de visitas), {事務室|じむしつ} (escritório).',
    },
    {
      title: 'Onde está uma pessoa: 【pessoa】は【lugar】にいます (➋ ➌)',
      bodyPt:
        'Para pessoas/animais usa-se o verbo **いる** (います):\n\n' +
        '- `{山田|やまだ}さんは、{食堂|しょくどう}にいます` = o Yamada está no refeitório.\n' +
        '- Pergunta: `〜は、どこにいますか？` ou `〜は、どこですか？`.\n' +
        '- Resposta curta: 〜にいます = 〜です (`{食堂|しょくどう}です`).\n\n' +
        '**Negativa (➌):** `いません` / `いないです` = (a pessoa) não está.\n\n' +
        'Marcas úteis no diálogo: **たぶん** (provavelmente), **〜よ** (informa algo novo: いるよ), **〜ね** (compartilha: いませんね).',
    },
    {
      title: 'Onde está um objeto: ここ・そこ・あそこ (➍)',
      bodyPt:
        'Para objetos usa-se o verbo **ある** (あります):\n\n' +
        '- `はさみは、そこにあります` = a tesoura está aí.\n' +
        '- Pergunta: `〜は、どこにありますか？` ou `〜は、どこですか？`.\n\n' +
        '**Demonstrativos de lugar (こそあど):**\n' +
        '| palavra | significado |\n|---|---|\n' +
        '| ここ | aqui (perto do **falante**) |\n' +
        '| そこ | aí (perto do **ouvinte**) |\n' +
        '| あそこ | lá (longe **dos dois**) |\n' +
        '| どこ | onde? |\n\n' +
        '**Objetos de escritório:** のり (cola), ガムテープ (fita adesiva larga), はさみ (tesoura), FAX, ごみ{箱|ばこ} (lixeira). Referências: {引|ひ}き{出|だ}し (gaveta), コピー{機|き} (copiadora), {箱|はこ} (caixa), {机|つくえ} (mesa).',
    },
    {
      title: 'Posição exata: N の【上/中/下/横】にあります (➎)',
      bodyPt:
        'Para localizar em relação a outro objeto, use **N の + posição**:\n\n' +
        '| posição | significado |\n|---|---|\n' +
        '| {上|うえ} | em cima |\n' +
        '| {中|なか} | dentro |\n' +
        '| {下|した} | embaixo |\n' +
        '| {横|よこ} | ao lado |\n\n' +
        '- `{引|ひ}き{出|だ}しの{中|なか}にあります` = está dentro da gaveta.\n' +
        '- `コピー{機|き}の{横|よこ}です` = (está) ao lado da copiadora.\n' +
        '- `{机|つくえ}の{上|うえ}／{下|した}` = em cima / embaixo da mesa.',
    },
    {
      title: 'Resumo: あります × います',
      bodyPt:
        'Dois verbos de existência:\n\n' +
        '| | あります（ある） | います（いる） |\n|---|---|---|\n' +
        '| usado para | coisas paradas (objetos) | coisas que se movem (pessoas, animais) |\n' +
        '| existe | 【lugar】に N が あります | 【lugar】に 人/動物 が います |\n' +
        '| onde está? | 〜は、どこにありますか？ | 〜は、どこにいますか？ |\n' +
        '| está em… | 〜は【lugar】にあります | 〜は【lugar】にいます |\n\n' +
        'Ex.: `ここに{冷蔵庫|れいぞうこ}があります` / `あそこに{猫|ねこ}がいます`.',
    },
  ],
  groups: [lesson8Group],
  audios: attachScripts(8, L8_SCRIPTS),
}

const lesson9Group: ExerciseGroup = {
  id: 'iro-s-l9',
  title: '12時から1時まで昼休みです',
  subtitlePt: 'Horas, rotina do dia no trabalho e combinar um dia disponível',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l9-1', number: 1, prompt: 'Como se pergunta “que horas?”', choices: [{ n: 1, text: '{何時|なんじ}' }, { n: 2, text: '{何曜日|なんようび}' }, { n: 3, text: 'いつ' }, { n: 4, text: 'どこ' }], answer: 1, explanationPt: '{何時|なんじ} = que horas. {何曜日|なんようび} = que dia da semana; いつ = quando; どこ = onde.' },
    { id: 'iro-s-l9-2', number: 2, prompt: 'Diferença entre 「に」 e 「ごろ」 ao dizer a hora:', choices: [{ n: 1, text: 'に = hora exata; ごろ = aproximadamente, “por volta de”' }, { n: 2, text: 'に = aproximada; ごろ = exata' }, { n: 3, text: 'são iguais' }, { n: 4, text: 'に = de manhã; ごろ = de noite' }], answer: 1, explanationPt: '5{時|じ}に = às 5 em ponto; 11{時|じ}ごろ = por volta das 11. に marca a hora cravada; ごろ, a hora aproximada. (Nota ➊)' },
    { id: 'iro-s-l9-3', number: 3, prompt: 'Complete: “Acordo às 5 (em ponto)” → 5{時|じ}＿＿{起|お}きます:', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'ごろ' }, { n: 3, text: 'から' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'Acordo às 5 (em ponto).', explanationPt: 'Hora exata → に: 5{時|じ}に{起|お}きます. (Nota ➊)' },
    { id: 'iro-s-l9-4', number: 4, prompt: 'Complete: “Durmo por volta das 11” → 11{時|じ}＿＿{寝|ね}ます:', choices: [{ n: 1, text: 'ごろ' }, { n: 2, text: 'に' }, { n: 3, text: 'まで' }, { n: 4, text: 'を' }], answer: 1, translationPt: 'Durmo por volta das 11.', explanationPt: 'Hora aproximada → ごろ (sem に): 11{時|じ}ごろ{寝|ね}ます. (Nota ➊)' },
    { id: 'iro-s-l9-5', number: 5, prompt: 'Em 「8{時|じ}{半|はん}」, o 「{半|はん}」 significa:', choices: [{ n: 1, text: 'e meia (8:30)' }, { n: 2, text: 'em ponto (8:00)' }, { n: 3, text: 'oito da noite' }, { n: 4, text: 'quinze para as oito' }], answer: 1, explanationPt: '{半|はん} = e meia (30 minutos). 8{時|じ}{半|はん} = 8:30. Para outros minutos usa-se 〜{分|ふん}/{分|ぷん} (ex.: 8{時|じ}15{分|ふん}).' },
    { id: 'iro-s-l9-6', number: 6, prompt: 'Relacione: 「{午前|ごぜん}」 e 「{午後|ごご}」:', choices: [{ n: 1, text: '{午前|ごぜん} = manhã/AM; {午後|ごご} = tarde/PM' }, { n: 2, text: '{午前|ごぜん} = PM; {午後|ごご} = AM' }, { n: 3, text: '{午前|ごぜん} = meio-dia; {午後|ごご} = meia-noite' }, { n: 4, text: 'os dois = de noite' }], answer: 1, explanationPt: '{午前|ごぜん} = antes do meio-dia (AM); {午後|ごご} = depois do meio-dia (PM). Ex.: {午後|ごご}2{時|じ} = 14:00.' },
    { id: 'iro-s-l9-7', number: 7, prompt: 'Como dizer “das 12h à 1h” (início e fim)?', choices: [{ n: 1, text: '12{時|じ}から1{時|じ}まで' }, { n: 2, text: '12{時|じ}に1{時|じ}ごろ' }, { n: 3, text: '12{時|じ}も1{時|じ}も' }, { n: 4, text: '12{時|じ}と1{時|じ}' }], answer: 1, translationPt: 'das 12h à 1h.', explanationPt: 'から = início (de), まで = fim (até). 12{時|じ}から1{時|じ}まで、{昼休|ひるやす}みです. (Nota ➋)' },
    { id: 'iro-s-l9-8', number: 8, prompt: 'O 「{昼休|ひるやす}み」 é:', choices: [{ n: 1, text: 'o intervalo do almoço' }, { n: 2, text: 'a hora extra' }, { n: 3, text: 'a reunião da manhã' }, { n: 4, text: 'o dia de folga' }], answer: 1, explanationPt: '{昼休|ひるやす}み = pausa do almoço. {休|やす}み{時間|じかん} = intervalo (curto); {残業|ざんぎょう} = hora extra; {朝礼|ちょうれい} = reunião matinal.' },
    { id: 'iro-s-l9-9', number: 9, prompt: 'O 「{残業|ざんぎょう}」 significa:', choices: [{ n: 1, text: 'hora extra (trabalhar além do horário)' }, { n: 2, text: 'almoço' }, { n: 3, text: 'folga' }, { n: 4, text: 'reunião' }], answer: 1, explanationPt: '{残業|ざんぎょう} = hora extra. No áudio: ときどき、{残業|ざんぎょう}があります = às vezes tem hora extra.' },
    { id: 'iro-s-l9-10', number: 10, prompt: 'O 「{朝礼|ちょうれい}」 é:', choices: [{ n: 1, text: 'a reunião/cerimônia matinal no início do expediente' }, { n: 2, text: 'a saída antecipada' }, { n: 3, text: 'o atraso' }, { n: 4, text: 'o intervalo da tarde' }], answer: 1, explanationPt: '{朝礼|ちょうれい} = reunião matinal: os funcionários se reúnem no começo do dia para avisos e cumprimentos. (TIPS / áudio 09-09)' },
    { id: 'iro-s-l9-11', number: 11, prompt: 'Relacione 「はじめに」 e 「ときどき」:', choices: [{ n: 1, text: 'はじめに = primeiro/no começo; ときどき = às vezes' }, { n: 2, text: 'はじめに = às vezes; ときどき = sempre' }, { n: 3, text: 'はじめに = depois; ときどき = nunca' }, { n: 4, text: 'os dois = todo dia' }], answer: 1, explanationPt: 'はじめに = primeiro, para começar; ときどき = às vezes. Ex.: はじめに、{朝礼|ちょうれい}があります / ときどき、{残業|ざんぎょう}があります.' },
    { id: 'iro-s-l9-12', number: 12, prompt: 'No quadro de horários (スケジュールボード), 「{在|ざい}」 e 「{不在|ふざい}」 indicam:', choices: [{ n: 1, text: '{在|ざい} = presente; {不在|ふざい} = ausente' }, { n: 2, text: '{在|ざい} = ausente; {不在|ふざい} = presente' }, { n: 3, text: '{在|ざい} = atrasado; {不在|ふざい} = de folga' }, { n: 4, text: 'os dois = saiu' }], answer: 1, explanationPt: '{在|ざい} = está presente; {不在|ふざい} = ausente. São colunas do {行動予定表|こうどうよていひょう} (quadro de presença). (Seção 3)' },
    { id: 'iro-s-l9-13', number: 13, prompt: 'No quadro, 「{早退|そうたい}」 significa:', choices: [{ n: 1, text: 'saiu mais cedo' }, { n: 2, text: 'chegou atrasado' }, { n: 3, text: 'saiu a trabalho (externo)' }, { n: 4, text: 'está de folga' }], answer: 1, explanationPt: '{早退|そうたい} = sair antes do fim do expediente. {遅刻|ちこく} = atraso; {外出|がいしゅつ} = saída externa; {休|やす}み = folga. (Seção 3)' },
    { id: 'iro-s-l9-14', number: 14, prompt: 'Relacione os verbos de movimento do quadro:', choices: [{ n: 1, text: '{来|き}ます = vir; {戻|もど}ります = voltar (retornar); {帰|かえ}ります = ir embora (pra casa)' }, { n: 2, text: '{来|き}ます = sair; {戻|もど}ります = chegar; {帰|かえ}ります = vir' }, { n: 3, text: 'os três significam “ir”' }, { n: 4, text: '{来|き}ます = voltar; {戻|もど}ります = vir; {帰|かえ}ります = ficar' }], answer: 1, explanationPt: '{来|き}ます (vir/chegar ao trabalho), {戻|もど}ります (voltar ao posto depois de sair), {帰|かえ}ります (ir embora para casa). (Perguntas da Seção 3)' },
    { id: 'iro-s-l9-15', number: 15, prompt: 'Como dizer que um dia/horário é CONVENIENTE para você?', choices: [{ n: 1, text: '〜がいいです' }, { n: 2, text: '〜はだめです' }, { n: 3, text: '〜はちょっと……' }, { n: 4, text: '〜にいます' }], answer: 1, translationPt: '〜 é bom (pra mim).', explanationPt: '【{日時|にちじ}】がいいです = tal dia/hora me convém. Ex.: {私|わたし}は、{土曜日|どようび}がいいです. Pergunta: いつがいいですか？ / {何時|なんじ}がいいですか？ (Nota ➌)' },
    { id: 'iro-s-l9-16', number: 16, prompt: 'O dia NÃO serve pra você. Como recusar de forma educada/suave?', choices: [{ n: 1, text: '〜はちょっと……（ou 〜はだめです）' }, { n: 2, text: '〜がいいです' }, { n: 3, text: 'だいじょうぶです' }, { n: 4, text: '〜にしましょう' }], answer: 1, translationPt: '〜 fica meio difícil…', explanationPt: '〜はちょっと…… = recusa suave (“fica meio difícil…”); 〜はだめです = não dá. だいじょうぶです = tá tudo bem / pode ser. (Nota ➌)' },
    { id: 'iro-s-l9-17', number: 17, prompt: 'Já decidiram o dia. Como dizer “Então vamos no sábado”?', choices: [{ n: 1, text: 'じゃあ、{土曜日|どようび}にしましょう。' }, { n: 2, text: 'じゃあ、{土曜日|どようび}がいいです。' }, { n: 3, text: 'じゃあ、{土曜日|どようび}はだめです。' }, { n: 4, text: 'じゃあ、{土曜日|どようび}にいます。' }], answer: 1, translationPt: 'Então, vamos no sábado.', explanationPt: '〜にしましょう = vamos decidir/marcar para 〜. Fecha a combinação após acertarem o dia.' },
    { id: 'iro-s-l9-18', number: 18, prompt: 'Ordene os dias: 月→火→水→木→金→土→日 começa em 「{月曜日|げつようび}」 =', choices: [{ n: 1, text: 'segunda-feira' }, { n: 2, text: 'domingo' }, { n: 3, text: 'sábado' }, { n: 4, text: 'quarta-feira' }], answer: 1, explanationPt: '{月|げつ}=segunda, {火|か}=terça, {水|すい}=quarta, {木|もく}=quinta, {金|きん}=sexta, {土|ど}=sábado, {日|にち}=domingo (todos + {曜日|ようび}).' },
    { id: 'iro-s-l9-19', number: 19, prompt: 'Diálogo 09-13: em que dia o Liam e o Artyom vão à piscina?', context: 'アルチョム：{私|わたし}は、{日曜日|にちようび}がいいです。リアム：{私|わたし}も、だいじょうぶです。じゃあ、{日曜日|にちようび}にしましょう。', choices: [{ n: 1, text: 'domingo ({日曜日|にちようび})' }, { n: 2, text: 'sábado ({土曜日|どようび})' }, { n: 3, text: 'quarta ({水曜日|すいようび})' }, { n: 4, text: 'sexta ({金曜日|きんようび})' }], answer: 1, explanationPt: 'Os dois concordam: {日曜日|にちようび}にしましょう = vamos no domingo.' },
    { id: 'iro-s-l9-20', number: 20, prompt: 'Diálogo 09-15: a Nia e o Nun não acertam logo o dia do cinema. Em que dia ficou?', context: 'ニア：{土曜日|どようび}がいいです。ヌン：{土曜日|どようび}はちょっと……。ニア：{日曜日|にちようび}はだめです。ヌン：{金曜日|きんようび}の{夜|よる}は？ニア：だいじょうぶです。', choices: [{ n: 1, text: 'sexta à noite ({金曜日|きんようび}の{夜|よる})' }, { n: 2, text: 'sábado ({土曜日|どようび})' }, { n: 3, text: 'domingo ({日曜日|にちようび})' }, { n: 4, text: 'terça ({火曜日|かようび})' }], answer: 1, explanationPt: 'Sábado e domingo não servem para um dos dois; fecham em {金曜日|きんようび}にしましょう (sexta à noite).' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 9 (聴解スクリプト)
const L9_SCRIPTS: Record<string, ScriptItem[]> = {
  '09-03': [
    {
      label: '会話① (09-03)',
      setupJa: '{職場|しょくば}の{同僚|どうりょう}が、{起|お}きる{時間|じかん}・{寝|ね}る{時間|じかん}を{話|はな}しています。',
      setupPt: 'Colegas de trabalho conversam sobre a que horas acordam e dormem.',
      lines: [
        { speaker: '村上', ja: 'おはようございます。', pt: 'Bom dia.' },
        { speaker: 'パウロ・山川', ja: 'おはようございます。', pt: 'Bom dia.' },
        { speaker: '村上', ja: 'パウロさんも、{山川|やまかわ}さんも、{毎日|まいにち}、{早|はや}いですね。パウロさん、{朝|あさ}、{何時|なんじ}に{起|お}きますか？', pt: 'O Paulo e o Yamakawa, vocês chegam cedo todo dia, né. Paulo, que horas você acorda de manhã?' },
        { speaker: 'パウロ', ja: '5{時|じ}に{起|お}きます。', pt: 'Acordo às 5.' },
        { speaker: '山川', ja: '5{時|じ}！{早|はや}いですね。', pt: '5 horas?! Que cedo!' },
        { speaker: 'パウロ', ja: 'ええ。{毎朝|まいあさ}、ジョギングをします。{夜|よる}は、10{時|じ}{半|はん}に{寝|ね}ます。', pt: 'É. Todo dia de manhã faço cooper. À noite, durmo às 10:30.' },
        { speaker: '村上', ja: 'そうですか。', pt: 'Ah é?' },
      ],
    },
  ],
  '09-04': [
    {
      label: '会話② (09-04)',
      lines: [
        { speaker: '村上', ja: '{山川|やまかわ}さんは？', pt: 'E o Yamakawa?' },
        { speaker: '山川', ja: '{私|わたし}は、だいたい、7{時|じ}ごろ{起|お}きます。', pt: 'Eu acordo mais ou menos por volta das 7.' },
        { speaker: '村上', ja: 'そうですか。{夜|よる}は、{何時|なんじ}に{寝|ね}ますか？', pt: 'Ah é? E à noite, que horas você dorme?' },
        { speaker: '山川', ja: '11{時|じ}ごろ{寝|ね}ます。', pt: 'Durmo por volta das 11.' },
        { speaker: '村上', ja: 'パウロさんも、{山川|やまかわ}さんも、{夜|よる}、{早|はや}いですね。', pt: 'O Paulo e o Yamakawa, vocês dois dormem cedo, né.' },
      ],
    },
  ],
  '09-05': [
    {
      label: '会話③ (09-05)',
      lines: [
        { speaker: 'パウロ', ja: '{村上|むらかみ}さんは、{何時|なんじ}に{寝|ね}ますか？', pt: 'Murakami, que horas você dorme?' },
        { speaker: '村上', ja: '2{時|じ}ごろです。', pt: 'Lá pelas 2.' },
        { speaker: '山川', ja: '{午前|ごぜん}2{時|じ}？{遅|おそ}いですね。', pt: '2 da manhã?! Que tarde!' },
        { speaker: '村上', ja: '{夜|よる}は、ゲームをします。', pt: 'À noite eu jogo videogame.' },
        { speaker: '山川', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'パウロ', ja: '{朝|あさ}は、{何時|なんじ}に{起|お}きますか？', pt: 'E de manhã, que horas você acorda?' },
        { speaker: '村上', ja: '8{時|じ}15{分|ふん}です。', pt: 'Às 8:15.' },
        { speaker: 'パウロ・山川', ja: 'おそーい。', pt: 'Que taaarde!' },
      ],
    },
  ],
  '09-09': [
    {
      label: '説明 (09-09)',
      setupJa: '{新|あたら}しい{職場|しょくば}で、{担当|たんとう}の{人|ひと}から1{日|にち}のスケジュールの{説明|せつめい}を{聞|き}いています。',
      setupPt: 'No novo trabalho, o responsável explica o cronograma do dia.',
      lines: [
        { speaker: '担当', ja: '1{日|にち}のスケジュールを{説明|せつめい}します。', pt: 'Vou explicar o cronograma do dia.' },
        { speaker: '担当', ja: '{仕事|しごと}は、{毎朝|まいあさ}9{時|じ}からです。はじめに、{朝礼|ちょうれい}があります。', pt: 'O trabalho começa às 9 toda manhã. Primeiro tem a reunião matinal.' },
        { speaker: '担当', ja: '{午前|ごぜん}の{仕事|しごと}は、12{時|じ}までです。', pt: 'O trabalho da manhã vai até as 12.' },
        { speaker: '担当', ja: '12{時|じ}から1{時|じ}まで、{昼休|ひるやす}みです。', pt: 'Das 12h à 1h é o intervalo do almoço.' },
        { speaker: '担当', ja: '1{時|じ}から、{午後|ごご}の{仕事|しごと}です。', pt: 'A partir da 1h é o trabalho da tarde.' },
        { speaker: '担当', ja: '3{時|じ}から3{時|じ}{半|はん}まで、{休|やす}み{時間|じかん}です。', pt: 'Das 3h às 3:30 é o intervalo.' },
        { speaker: '担当', ja: '{仕事|しごと}は、6{時|じ}までです。ときどき、{残業|ざんぎょう}があります。', pt: 'O trabalho vai até as 6. Às vezes tem hora extra.' },
      ],
    },
  ],
  '09-13': [
    {
      label: '会話① (09-13)',
      setupJa: '{友|とも}だちと、{来週|らいしゅう}いっしょに{出|で}かける{日|ひ}を{相談|そうだん}しています。',
      setupPt: 'Combinando com um amigo o dia de sair juntos na semana que vem.',
      lines: [
        { speaker: 'リアム', ja: 'アルチョムさん、プール、いつ{行|い}きますか？', pt: 'Artyom, quando a gente vai à piscina?' },
        { speaker: 'アルチョム', ja: 'うーん、{私|わたし}は、{日曜日|にちようび}がいいです。リアムさんは？', pt: 'Hmm, pra mim domingo é bom. E você, Liam?' },
        { speaker: 'リアム', ja: '{私|わたし}も、だいじょうぶです。', pt: 'Pra mim também tá bom.' },
        { speaker: 'アルチョム', ja: 'じゃあ、{日曜日|にちようび}にしましょう。', pt: 'Então vamos no domingo.' },
      ],
    },
  ],
  '09-14': [
    {
      label: '会話② (09-14)',
      lines: [
        { speaker: 'サイード', ja: 'ムナさん、ご{飯|はん}、いつがいいですか？', pt: 'Muna, quando é bom pra comer?' },
        { speaker: 'ムナ', ja: '{私|わたし}は、{火曜日|かようび}がいいです。サイードさんは？', pt: 'Pra mim terça é bom. E você, Saeed?' },
        { speaker: 'サイード', ja: 'すみません。{火曜日|かようび}はちょっと……。{私|わたし}は、{水曜日|すいようび}がいいです。', pt: 'Desculpa, terça fica meio difícil… Pra mim quarta é bom.' },
        { speaker: 'ムナ', ja: '{水曜日|すいようび}……だいじょうぶです。', pt: 'Quarta… tá bom.' },
        { speaker: 'サイード', ja: 'じゃあ、{水曜日|すいようび}にしましょう。', pt: 'Então vamos na quarta.' },
      ],
    },
  ],
  '09-15': [
    {
      label: '会話③ (09-15)',
      lines: [
        { speaker: 'ヌン', ja: 'ニアさん、{映画|えいが}、いつがいいですか？', pt: 'Nia, quando é bom pro cinema?' },
        { speaker: 'ニア', ja: '{私|わたし}は、{土曜日|どようび}がいいです。ヌンさんは？', pt: 'Pra mim sábado é bom. E você, Nun?' },
        { speaker: 'ヌン', ja: 'すみません。{土曜日|どようび}はちょっと……。{私|わたし}は、{日曜日|にちようび}がいいです。', pt: 'Desculpa, sábado fica meio difícil… Pra mim domingo é bom.' },
        { speaker: 'ニア', ja: 'あー、{私|わたし}は、{日曜日|にちようび}はだめです。すみません。', pt: 'Ah, pra mim domingo não dá. Desculpa.' },
        { speaker: 'ヌン', ja: 'じゃあ、{金曜日|きんようび}の{夜|よる}は？', pt: 'Então, sexta à noite?' },
        { speaker: 'ニア', ja: '{金曜日|きんようび}……だいじょうぶです。', pt: 'Sexta… tá bom.' },
        { speaker: 'ヌン', ja: 'じゃあ、{金曜日|きんようび}にしましょう。', pt: 'Então vamos na sexta.' },
      ],
    },
  ],
}

const lesson9: Section = {
  id: 'lesson-9',
  level: 'starter',
  titleJa: '第9課 12時から1時まで昼休みです',
  titlePt: 'Lição 9 — O almoço é das 12h à 1h',
  summaryPt: 'Vida cotidiana · dizer as horas (に／ごろ), explicar a rotina do dia no trabalho (から〜まで), ler um quadro de presença e combinar um dia disponível (〜がいいです／〜はだめです).',
  studyNotes: [
    {
      title: 'Tópico: Vida cotidiana (horários e rotina)',
      bodyPt:
        '## Can-do\n' +
        '- Perguntar e responder a que horas acorda e dorme.\n' +
        '- Entender uma explicação simples da rotina do dia no trabalho.\n' +
        '- Olhar um quadro de presença e entender, em linhas gerais, a agenda dos colegas.\n' +
        '- Perguntar e responder quando você está disponível para combinar um dia.',
    },
    {
      title: 'Que horas: 【hora】に／【hora】ごろ V-ます (➊)',
      bodyPt:
        'Para dizer a que horas algo acontece:\n\n' +
        '- **に** = hora **exata**: `5{時|じ}に{起|お}きます` = acordo às 5 (em ponto).\n' +
        '- **ごろ** = hora **aproximada** (“por volta de”): `11{時|じ}ごろ{寝|ね}ます` = durmo por volta das 11. ⚠️ com ごろ **não** se usa に.\n\n' +
        '**Horas e minutos:** {何時|なんじ} (que horas), 〜{時|じ} (hora), 〜{分|ふん}/{分|ぷん} (minutos), {半|はん} (e meia = 30 min).\n' +
        '**Partes do dia:** {朝|あさ} (manhã), {昼|ひる} (meio do dia), {夜|よる} (noite), {午前|ごぜん} (AM), {午後|ごご} (PM). Ex.: {午前|ごぜん}2{時|じ} = 2 da madrugada; {午後|ごご}2{時|じ} = 14:00.',
    },
    {
      title: 'Início e fim: 【hora】から【hora】まで (➋)',
      bodyPt:
        '**から** = de (início), **まで** = até (fim):\n\n' +
        '- `12{時|じ}から1{時|じ}まで、{昼休|ひるやす}みです` = das 12h à 1h é o almoço.\n' +
        '- `{仕事|しごと}は、9{時|じ}からです` = o trabalho é a partir das 9.\n' +
        '- `{仕事|しごと}は、6{時|じ}までです` = o trabalho vai até as 6.\n\n' +
        '**Rotina do trabalho:** {朝礼|ちょうれい} (reunião matinal), {仕事|しごと} (trabalho), {昼休|ひるやす}み (almoço), {休|やす}み{時間|じかん} (intervalo), {残業|ざんぎょう} (hora extra). Conectivos: はじめに (primeiro), ときどき (às vezes).',
    },
    {
      title: 'Quadro de presença (スケジュールボード)',
      bodyPt:
        'No {行動予定表|こうどうよていひょう} (quadro de presença) aparecem estas palavras:\n\n' +
        '| palavra | significado |\n|---|---|\n' +
        '| {在|ざい} | presente |\n' +
        '| {不在|ふざい} | ausente |\n' +
        '| {遅刻|ちこく} | atraso |\n' +
        '| {休|やす}み | folga |\n' +
        '| {外出|がいしゅつ} | saída externa |\n' +
        '| {早退|そうたい} | saiu mais cedo |\n\n' +
        '**Verbos de movimento:** {来|き}ます (vir/chegar), {戻|もど}ります (voltar ao posto), {帰|かえ}ります (ir embora pra casa). Ex.: `{何時|なんじ}に{戻|もど}りますか？` = a que horas volta?',
    },
    {
      title: 'Combinar um dia: 【dia/hora】がいいです (➌)',
      bodyPt:
        'Para falar de disponibilidade:\n\n' +
        '- **〜がいいです** = 〜 me convém (é bom pra mim): `{私|わたし}は、{土曜日|どようび}がいいです`.\n' +
        '- Pergunta: `いつがいいですか？` (que dia?) / `{何時|なんじ}がいいですか？` (que horas?).\n' +
        '- Recusar de leve: **〜はちょっと……** (“fica meio difícil…”) ou **〜はだめです** (não dá).\n' +
        '- Aceitar: **だいじょうぶです** (tá bom / pode ser).\n' +
        '- Fechar a combinação: **〜にしましょう** = vamos marcar para 〜.',
    },
    {
      title: 'Dias da semana (曜日)',
      bodyPt:
        'Pergunta: `{何曜日|なんようび}ですか？` = que dia da semana é?\n\n' +
        '| kanji | leitura | dia |\n|---|---|---|\n' +
        '| {月曜日|げつようび} | げつようび | segunda |\n' +
        '| {火曜日|かようび} | かようび | terça |\n' +
        '| {水曜日|すいようび} | すいようび | quarta |\n' +
        '| {木曜日|もくようび} | もくようび | quinta |\n' +
        '| {金曜日|きんようび} | きんようび | sexta |\n' +
        '| {土曜日|どようび} | どようび | sábado |\n' +
        '| {日曜日|にちようび} | にちようび | domingo |\n\n' +
        'Outras palavras: いつ (quando), {行|い}きます (ir), だめ（な）(não serve), 〜にしましょう (vamos marcar para 〜).',
    },
  ],
  groups: [lesson9Group],
  audios: attachScripts(9, L9_SCRIPTS),
}

// ---- Lições 10 a 18 (estrutura por tópico; exercícios em construção) ------
const others: Section[] = [
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
    'Primeiro nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A1: cumprimentar e se comunicar de forma simples no dia a dia. São 9 tópicos em 18 lições (課), organizadas por módulos, com os áudios oficiais. As explicações são em português.',
  sections: [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, ...others],
}
