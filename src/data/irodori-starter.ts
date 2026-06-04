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

const lesson10Group: ExerciseGroup = {
  id: 'iro-s-l10',
  title: 'ホチキス貸してください',
  subtitlePt: 'Entender instruções no trabalho, confirmar, emprestar e checar listas',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l10-1', number: 1, prompt: 'No trabalho alguém diz 「{手伝|てつだ}ってください」. Está pedindo para você:', choices: [{ n: 1, text: 'ajudar' }, { n: 2, text: 'esperar' }, { n: 3, text: 'fechar a janela' }, { n: 4, text: 'jogar fora' }], answer: 1, explanationPt: '{手伝|てつだ}って（ください）= ajude(-me). Verbo {手伝|てつだ}う (ajudar) na forma て. (Seção 1 / Nota ➊)' },
    { id: 'iro-s-l10-2', number: 2, prompt: 'Registro: ordene de mais formal a mais casual:', choices: [{ n: 1, text: 'V-てください ＞ V-て ＞ V-てくれる？' }, { n: 2, text: 'V-て ＞ V-てください ＞ V-てくれる？' }, { n: 3, text: 'V-てくれる？ ＞ V-てください ＞ V-て' }, { n: 4, text: 'são todos iguais' }], answer: 1, explanationPt: 'V-てください = pedido educado/formal; V-て = casual (com amigos/subordinados); V-てくれる？ = casual com entonação de pergunta. (Nota ➊)' },
    { id: 'iro-s-l10-3', number: 3, prompt: 'Relacione 「{置|お}いてください」:', choices: [{ n: 1, text: 'coloque/ponha (aqui)' }, { n: 2, text: 'pegue' }, { n: 3, text: 'jogue fora' }, { n: 4, text: 'guarde/arrume' }], answer: 1, explanationPt: '{置|お}いて (de {置|お}く, pôr) = coloque. Ex.: {段|だん}ボール、そこに{置|お}いてください = ponha a caixa aí. (Diálogo 10-02)' },
    { id: 'iro-s-l10-4', number: 4, prompt: 'Diferença entre 「{持|も}って{行|い}って」 e 「{持|も}って{来|き}て」:', choices: [{ n: 1, text: '{持|も}って{行|い}って = leve (pra lá); {持|も}って{来|き}て = traga (pra cá)' }, { n: 2, text: '{持|も}って{行|い}って = traga; {持|も}って{来|き}て = leve' }, { n: 3, text: 'os dois = segure' }, { n: 4, text: '{持|も}って{行|い}って = compre; {持|も}って{来|き}て = venda' }], answer: 1, explanationPt: '{行|い}く (ir) → levar para longe; {来|く}る (vir) → trazer para perto. {鈴木|すずき}さんに{持|も}って{行|い}って = leve ao Suzuki. (Diálogos 10-03, 10-09)' },
    { id: 'iro-s-l10-5', number: 5, prompt: '「テーブルの{上|うえ}、{片付|かたづ}けてください」 pede para:', choices: [{ n: 1, text: 'arrumar/organizar a mesa' }, { n: 2, text: 'limpar o chão' }, { n: 3, text: 'pôr a caixa em cima' }, { n: 4, text: 'fechar a janela' }], answer: 1, explanationPt: '{片付|かたづ}けて (de {片付|かたづ}ける) = arrumar, organizar, recolher. (Diálogo 10-04)' },
    { id: 'iro-s-l10-6', number: 6, prompt: 'Relacione: {捨|す}てて / {並|なら}べて / {閉|し}めて:', choices: [{ n: 1, text: '{捨|す}てて = jogue fora; {並|なら}べて = enfileire; {閉|し}めて = feche' }, { n: 2, text: '{捨|す}てて = enfileire; {並|なら}べて = feche; {閉|し}めて = jogue fora' }, { n: 3, text: 'os três = arrume' }, { n: 4, text: '{捨|す}てて = abra; {並|なら}べて = pegue; {閉|し}めて = leve' }], answer: 1, explanationPt: '{捨|す}てて (jogar fora — ごみ), {並|なら}べて (enfileirar — いす), {閉|し}めて (fechar — {窓|まど}). (Diálogos 10-06/07/08)' },
    { id: 'iro-s-l10-7', number: 7, prompt: 'Qual destes é 「{段|だん}ボール」?', choices: [{ n: 1, text: 'caixa de papelão' }, { n: 2, text: 'chave de fenda' }, { n: 3, text: 'controle remoto' }, { n: 4, text: 'projetor' }], answer: 1, explanationPt: '{段|だん}ボール = papelão/caixa de papelão. ドライバー = chave de fenda; リモコン = controle remoto; プロジェクタ = projetor; ごみ = lixo; {窓|まど} = janela.' },
    { id: 'iro-s-l10-8', number: 8, prompt: 'Para CONFIRMAR uma instrução (“30, certo?”), usa-se:', choices: [{ n: 1, text: '30ですね' }, { n: 2, text: '30です' }, { n: 3, text: '30ですか' }, { n: 4, text: '30でした' }], answer: 1, translationPt: '30, certo?', explanationPt: 'N + ですね = repete a informação para confirmar. O 〜ね no fim pede a confirmação do outro. (Nota ➋)' },
    { id: 'iro-s-l10-9', number: 9, prompt: 'Você não entendeu a quantidade/horário. Como pedir de novo?', choices: [{ n: 1, text: 'すみません。いくつですか？／{何時|なんじ}ですか？' }, { n: 2, text: 'はい、わかりました。' }, { n: 3, text: 'どうぞ。' }, { n: 4, text: 'そうですね。' }], answer: 1, explanationPt: 'いくつですか？ = quantos? / {何時|なんじ}ですか？ = que horas? Pergunta de volta com a palavra interrogativa. (Nota ➋, retoma a Lição 4)' },
    { id: 'iro-s-l10-10', number: 10, prompt: 'Em 「10{時|じ}までに{片付|かたづ}けてください」, o 「までに」 indica:', choices: [{ n: 1, text: 'o prazo (faça ATÉ as 10h)' }, { n: 2, text: 'o início (a partir das 10h)' }, { n: 3, text: 'a duração' }, { n: 4, text: 'o lugar' }], answer: 1, explanationPt: '〜までに = prazo limite (“até, no máximo até”). Diferente de まで (até, contínuo). (Diálogo 10-12)' },
    { id: 'iro-s-l10-11', number: 11, prompt: 'Relacione 「あとで」 e 「もしもし」:', choices: [{ n: 1, text: 'あとで = depois/mais tarde; もしもし = alô (ao telefone)' }, { n: 2, text: 'あとで = agora; もしもし = tchau' }, { n: 3, text: 'あとで = alô; もしもし = depois' }, { n: 4, text: 'os dois = obrigado' }], answer: 1, explanationPt: 'あとで = mais tarde; もしもし = alô (atender/iniciar telefonema). (Diálogo 10-14, vocab da Seção 2)' },
    { id: 'iro-s-l10-12', number: 12, prompt: 'No relógio de 24 horas, 「14:00」 lê-se:', choices: [{ n: 1, text: 'じゅうよじ' }, { n: 2, text: 'じゅうしじ' }, { n: 3, text: 'にじゅうじ' }, { n: 4, text: 'じゅうにじ' }], answer: 1, explanationPt: '14:00 = じゅうよじ (note: 4{時|じ} = よじ). Ex.: 13:00 じゅうさんじ, 19:00 じゅうくじ, 0:00 れいじ. (Tabela 時間 / TIPS 24時間制)' },
    { id: 'iro-s-l10-13', number: 13, prompt: 'No diálogo 10-14, 「14{時|じ}{半|はん}」 equivale a:', choices: [{ n: 1, text: '{午後|ごご}2{時|じ}{半|はん} (14:30)' }, { n: 2, text: '{午前|ごぜん}4{時|じ}{半|はん}' }, { n: 3, text: '{午後|ごご}4{時|じ}{半|はん}' }, { n: 4, text: '{午前|ごぜん}2{時|じ}{半|はん}' }], answer: 1, explanationPt: 'No áudio: 14{時|じ}{半|はん}。{午後|ごご}2{時|じ}{半|はん}です = 14:30 = 2:30 da tarde.' },
    { id: 'iro-s-l10-14', number: 14, prompt: 'No bilhete (メモ), 「すぐに」 significa:', choices: [{ n: 1, text: 'imediatamente / agora mesmo' }, { n: 2, text: 'mais tarde' }, { n: 3, text: 'amanhã' }, { n: 4, text: 'devagar' }], answer: 1, explanationPt: 'すぐに = imediatamente. Ex. da memo: すぐに{第|だい}2{会議室|かいぎしつ}に{来|き}てください = venha já à 2ª sala de reunião. (Seção 3)' },
    { id: 'iro-s-l10-15', number: 15, prompt: 'O contador 「〜{部|ぶ}」 (ex.: 100{部|ぶ}) conta:', choices: [{ n: 1, text: 'cópias/exemplares de um documento' }, { n: 2, text: 'pessoas' }, { n: 3, text: 'horas' }, { n: 4, text: 'andares' }], answer: 1, explanationPt: '〜{部|ぶ} = exemplares/cópias. 100{部|ぶ} = 100 cópias. {第|だい}〜 = nº ~ (ordinal): {第|だい}2 = nº 2. (Seção 3, palavras-chave)' },
    { id: 'iro-s-l10-16', number: 16, prompt: 'Na memo 「{電話|でんわ}してください」 pede para:', choices: [{ n: 1, text: 'telefonar (ligar de volta)' }, { n: 2, text: 'mandar e-mail' }, { n: 3, text: 'ir pessoalmente' }, { n: 4, text: 'esperar' }], answer: 1, explanationPt: '{電話|でんわ}してください = ligue (por favor). {電話|でんわ}する = telefonar; {折|お}り{返|かえ}し = de volta (retornar a ligação). (Seção 3, memo ③)' },
    { id: 'iro-s-l10-17', number: 17, prompt: 'Como PEDIR algo emprestado (“me empreste o grampeador”)?', choices: [{ n: 1, text: 'ホチキス、{貸|か}してください。' }, { n: 2, text: 'ホチキス、{借|か}りてください。' }, { n: 3, text: 'ホチキス、ありますね。' }, { n: 4, text: 'ホチキス、どうぞ。' }], answer: 1, translationPt: 'Me empreste o grampeador.', explanationPt: '{貸|か}す = emprestar (dar emprestado). N、{貸|か}してください = me empreste N. ⚠️ {借|か}りる = pegar emprestado (ponto de vista oposto). (Nota ➌)' },
    { id: 'iro-s-l10-18', number: 18, prompt: 'Como PEDIR PERMISSÃO para usar/pegar algo emprestado?', choices: [{ n: 1, text: '{借|か}りてもいいですか？' }, { n: 2, text: '{貸|か}してもいいですか？' }, { n: 3, text: 'ありませんか？' }, { n: 4, text: 'どうぞですか？' }], answer: 1, translationPt: 'Posso pegar emprestado?', explanationPt: '{借|か}りてもいいですか？ = posso pegar emprestado? (pedido de permissão com o verbo {借|か}りる). (Nota ➌)' },
    { id: 'iro-s-l10-19', number: 19, prompt: 'Apontando para um objeto, a forma curta de pedir é:', choices: [{ n: 1, text: 'これ、いいですか？' }, { n: 2, text: 'これ、ですね？' }, { n: 3, text: 'これ、ありますか？' }, { n: 4, text: 'これ、までに？' }], answer: 1, translationPt: 'Posso (usar) isto?', explanationPt: 'これ、いいですか？ = posso? — forma abreviada de {借|か}りてもいいですか？ (omite {借|か}りても). Pode-se nomear: のり、いいですか？ (Nota ➌)' },
    { id: 'iro-s-l10-20', number: 20, prompt: 'Para perguntar se a pessoa TEM o item (“tem um carregador?”):', choices: [{ n: 1, text: 'スマホの{充電器|じゅうでんき}、ありますか？' }, { n: 2, text: 'スマホの{充電器|じゅうでんき}、{貸|か}してね。' }, { n: 3, text: 'スマホの{充電器|じゅうでんき}、ですね。' }, { n: 4, text: 'スマホの{充電器|じゅうでんき}、いくつ？' }], answer: 1, translationPt: 'Você tem carregador de celular?', explanationPt: 'N、ありますか？ = você tem N? Muitas vezes seguido de {借|か}りてもいいですか？. Resposta casual: ありますよ／あるよ. (Nota ➌)' },
    { id: 'iro-s-l10-21', number: 21, prompt: 'Qual destes é 「{電卓|でんたく}」 (item de escritório)?', choices: [{ n: 1, text: 'calculadora' }, { n: 2, text: 'grampeador' }, { n: 3, text: 'estilete' }, { n: 4, text: 'post-it' }], answer: 1, explanationPt: '{電卓|でんたく} = calculadora. ホチキス = grampeador; カッター = estilete; ふせん = post-it; のり = cola; えんぴつ = lápis. (Seção 4)' },
    { id: 'iro-s-l10-22', number: 22, prompt: 'Na checklist do restaurante, 「はし」 é:', choices: [{ n: 1, text: 'hashi (palitinhos)' }, { n: 2, text: 'garfo' }, { n: 3, text: 'colher' }, { n: 4, text: 'faca' }], answer: 1, explanationPt: 'はし = hashi (palitinhos). フォーク = garfo; スプーン = colher; ナイフ = faca; {塩|しお} = sal; こしょう = pimenta; {砂糖|さとう} = açúcar. (Seção 5)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 10 (聴解スクリプト)
const L10_SCRIPTS: Record<string, ScriptItem[]> = {
  '10-01': [
    {
      label: '指示① (10-01)',
      setupJa: '{職場|しょくば}で、{上司|じょうし}から{指示|しじ}を{受|う}けています。',
      setupPt: 'No trabalho, recebendo instruções do supervisor.',
      lines: [
        { speaker: 'A', ja: 'すみません。ちょっと、{手伝|てつだ}ってください。', pt: 'Com licença. Me dá uma ajudinha?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '10-02': [
    {
      label: '指示② (10-02)',
      lines: [
        { speaker: 'A', ja: 'えーと、{段|だん}ボール、そこに{置|お}いてください。', pt: 'Hmm, a caixa de papelão, ponha aí, por favor.' },
        { speaker: 'B', ja: 'はい、わかりました。', pt: 'Sim, entendido.' },
      ],
    },
  ],
  '10-03': [
    {
      label: '指示③ (10-03)',
      lines: [
        { speaker: 'B', ja: 'これ、{鈴木|すずき}さんに{持|も}って{行|い}ってください。', pt: 'Isto aqui, leve para o Suzuki, por favor.' },
        { speaker: 'A', ja: 'はい、わかりました。', pt: 'Sim, entendido.' },
      ],
    },
  ],
  '10-04': [
    {
      label: '指示④ (10-04)',
      lines: [
        { speaker: 'A', ja: 'メイさん、テーブルの{上|うえ}、{片付|かたづ}けてください。', pt: 'May, arrume a mesa, por favor.' },
        { speaker: 'B', ja: 'はい、わかりました。', pt: 'Sim, entendido.' },
      ],
    },
  ],
  '10-05': [
    {
      label: '指示⑤ (10-05)',
      lines: [
        { speaker: 'A', ja: 'ちょっと、そこのドライバー、{取|と}って。', pt: 'Ô, me passa aquela chave de fenda aí.' },
        { speaker: 'B', ja: 'はい、どうぞ。', pt: 'Aqui, pega.' },
        { speaker: 'A', ja: 'ありがとう。', pt: 'Valeu.' },
      ],
    },
  ],
  '10-06': [
    {
      label: '指示⑥ (10-06)',
      lines: [
        { speaker: 'A', ja: 'テレーザさん、ごみ、{捨|す}てて。', pt: 'Tereza, joga o lixo fora.' },
        { speaker: 'B', ja: 'あ、はい。', pt: 'Ah, tá.' },
      ],
    },
  ],
  '10-07': [
    {
      label: '指示⑦ (10-07)',
      lines: [
        { speaker: 'A', ja: 'プルナさん、いす、{並|なら}べて。', pt: 'Purna, enfileira as cadeiras.' },
        { speaker: 'B', ja: 'はい。', pt: 'Tá.' },
      ],
    },
  ],
  '10-08': [
    {
      label: '指示⑧ (10-08)',
      lines: [
        { speaker: 'A', ja: 'イさん。', pt: 'Sr. Lee.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: '{窓|まど}、{閉|し}めてくれる？', pt: 'Fecha a janela pra mim?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '10-09': [
    {
      label: '指示⑨ (10-09)',
      lines: [
        { speaker: 'A', ja: '（{電話|でんわ}に{出|で}る）はい。', pt: '(atendendo o telefone) Alô.' },
        { speaker: 'B', ja: 'あ、レザさん。プロジェクタとリモコン、{持|も}って{来|き}てくれる？', pt: 'Ah, Reza. Traz o projetor e o controle pra cá?' },
        { speaker: 'A', ja: 'はい、わかりました。', pt: 'Sim, entendido.' },
      ],
    },
  ],
  '10-11': [
    {
      label: '確認① (10-11)',
      setupJa: '{職場|しょくば}で{仕事|しごと}を{頼|たの}まれ、{内容|ないよう}を{確認|かくにん}しています。',
      setupPt: 'No trabalho, recebendo uma tarefa e confirmando o conteúdo.',
      lines: [
        { speaker: 'A', ja: 'これ、コピー、30{枚|まい}お{願|ねが}い。', pt: 'Faz 30 cópias disto, por favor.' },
        { speaker: 'B', ja: 'はい、30ですね。', pt: 'Sim, 30, certo?' },
      ],
    },
  ],
  '10-12': [
    {
      label: '確認② (10-12)',
      lines: [
        { speaker: 'A', ja: '{隣|となり}の{部屋|へや}、10{時|じ}までに{片付|かたづ}けてください。', pt: 'Arrume a sala ao lado até as 10h, por favor.' },
        { speaker: 'B', ja: 'はい、10{時|じ}ですね。', pt: 'Sim, até as 10h, certo?' },
      ],
    },
  ],
  '10-13': [
    {
      label: '確認③ (10-13)',
      lines: [
        { speaker: 'A', ja: '{会議室|かいぎしつ}に、いす、8つ{並|なら}べてくれる？', pt: 'Põe 8 cadeiras na sala de reunião pra mim?' },
        { speaker: 'B', ja: 'すみません。いくつですか？', pt: 'Desculpa. Quantas?' },
        { speaker: 'A', ja: '8つです。8。', pt: '8. Oito.' },
        { speaker: 'B', ja: 'はい、わかりました。', pt: 'Sim, entendido.' },
      ],
    },
  ],
  '10-14': [
    {
      label: '確認④ (10-14)',
      lines: [
        { speaker: 'A', ja: 'もしもし、リンさん。', pt: 'Alô, Lin.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: 'あとで、14{時|じ}{半|はん}に{事務室|じむしつ}に{来|き}てください。', pt: 'Mais tarde, venha ao escritório às 14:30.' },
        { speaker: 'B', ja: 'すみません。{何時|なんじ}ですか？', pt: 'Desculpa. Que horas?' },
        { speaker: 'A', ja: '14{時|じ}{半|はん}。{午後|ごご}2{時|じ}{半|はん}です。', pt: '14:30. Duas e meia da tarde.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendido.' },
      ],
    },
  ],
  '10-23': [
    {
      label: '貸し借り① (10-23)',
      setupJa: '{職場|しょくば}で、まわりの{人|ひと}にものを{借|か}りています。',
      setupPt: 'No trabalho, pedindo coisas emprestadas a quem está por perto.',
      lines: [
        { speaker: 'A', ja: 'すみません。ホチキス、{貸|か}してください。', pt: 'Com licença. Me empreste o grampeador.' },
        { speaker: 'B', ja: 'どうぞ。', pt: 'Pode pegar.' },
        { speaker: 'A', ja: 'どうも。', pt: 'Obrigado.' },
      ],
    },
  ],
  '10-24': [
    {
      label: '貸し借り② (10-24)',
      lines: [
        { speaker: 'A', ja: 'あのう、これ、いいですか？', pt: 'Hmm, posso usar isto?' },
        { speaker: 'B', ja: 'カッター？いいよ。はい。', pt: 'O estilete? Pode. Toma.' },
        { speaker: 'A', ja: 'すみません。', pt: 'Obrigado.' },
      ],
    },
  ],
  '10-25': [
    {
      label: '貸し借り③ (10-25)',
      lines: [
        { speaker: 'A', ja: 'すみません。{電卓|でんたく}、ありますか？', pt: 'Com licença. Tem calculadora?' },
        { speaker: 'B', ja: '{電卓|でんたく}？あるよ。はい。', pt: 'Calculadora? Tenho. Toma.' },
        { speaker: 'A', ja: 'じゃあ、ちょっと{借|か}ります。', pt: 'Então, vou pegar emprestado.' },
      ],
    },
  ],
  '10-26': [
    {
      label: '貸し借り④ (10-26)',
      lines: [
        { speaker: 'A', ja: 'あのう、スマホの{充電器|じゅうでんき}、ありますか？', pt: 'Hmm, tem carregador de celular?' },
        { speaker: 'B', ja: 'ありますよ。', pt: 'Tenho, sim.' },
        { speaker: 'A', ja: 'すみません。{借|か}りてもいいですか？', pt: 'Desculpa. Posso pegar emprestado?' },
        { speaker: 'B', ja: 'どうぞ。', pt: 'Pode.' },
      ],
    },
  ],
}

const lesson10: Section = {
  id: 'lesson-10',
  level: 'starter',
  titleJa: '第10課 ホチキス貸してください',
  titlePt: 'Lição 10 — Me empreste o grampeador',
  summaryPt: 'Vida cotidiana · entender instruções no trabalho (V-てください／V-て／V-てくれる？), confirmar e perguntar de novo (Nですね, いくつ／何時), ler um bilhete à mão, pedir algo emprestado (貸して／借りてもいい／ありますか) e conferir uma lista de itens.',
  studyNotes: [
    {
      title: 'Tópico: Vida cotidiana (no trabalho)',
      bodyPt:
        '## Can-do\n' +
        '- Entender instruções curtas e simples no trabalho.\n' +
        '- Confirmar os pontos importantes e pedir para repetir quando não entender.\n' +
        '- Ler um bilhete simples escrito à mão e entender a tarefa.\n' +
        '- Pedir algo emprestado a um colega.\n' +
        '- Olhar uma lista de itens e conferir se está tudo (o que falta).',
    },
    {
      title: 'Instruções e pedidos: V-てください／V-て／V-てくれる？ (➊)',
      bodyPt:
        'Usa-se a **forma て** do verbo para instruir/pedir. Três registros:\n\n' +
        '| forma | registro | exemplo |\n|---|---|---|\n' +
        '| V-てください | educado/formal | `{手伝|てつだ}ってください` (me ajude) |\n' +
        '| V-て | casual (amigos/subordinados) | `ドライバー、{取|と}って` (me passa a chave) |\n' +
        '| V-てくれる？ | casual, com entonação ↗ | `{窓|まど}、{閉|し}めてくれる？` (fecha a janela?) |\n\n' +
        '👉 Aqui a meta é só **entender ao ouvir** — a conjugação da forma て é estudada no 初級1.\n\n' +
        '**Verbos de instrução:** {置|お}いて (pôr), {取|と}って (pegar/passar), {並|なら}べて (enfileirar), {片付|かたづ}けて (arrumar), {捨|す}てて (jogar fora), {持|も}って{来|き}て (trazer), {持|も}って{行|い}って (levar), {閉|し}めて (fechar), {手伝|てつだ}って (ajudar). Objetos: {段|だん}ボール, ドライバー, ごみ, {窓|まど}, プロジェクタ, リモコン.',
    },
    {
      title: 'Confirmar e perguntar de novo: Nですね (➋)',
      bodyPt:
        '**Confirmar** o que ouviu: repita a informação + **ですね**.\n\n' +
        '- `30ですね` = 30, certo? · `10{時|じ}ですね` = até as 10h, né?\n\n' +
        '**Não entendeu** a quantidade/horário? Pergunte de volta (retoma a Lição 4):\n\n' +
        '- `すみません。いくつですか？` = quantos? · `すみません。{何時|なんじ}ですか？` = que horas?\n\n' +
        'Vocabulário: コピー (cópia), {隣|となり} (ao lado), 〜までに (até/prazo), あとで (depois), もしもし (alô).\n\n' +
        '**Relógio de 24h:** 13:00 じゅうさんじ, 14:00 じゅうよじ, 15:00 じゅうごじ, 17:00 じゅうしちじ, 19:00 じゅうくじ, 0:00 れいじ. Ex.: 14{時|じ}{半|はん} = {午後|ごご}2{時|じ}{半|はん}.',
    },
    {
      title: 'Bilhete de tarefa (仕事のメモ)',
      bodyPt:
        'Bilhetes deixados na mesa trazem palavras-chave:\n\n' +
        '- **すぐに** = imediatamente. Ex.: `すぐに{第|だい}2{会議室|かいぎしつ}に{来|き}てください`.\n' +
        '- **{第|だい}〜** = nº ~ (ordinal): {第|だい}2 = nº 2.\n' +
        '- **〜{部|ぶ}** = exemplares/cópias: 100{部|ぶ} = 100 cópias.\n' +
        '- **{電話|でんわ}してください** = ligue (por favor); {折|お}り{返|かえ}し{電話|でんわ} = retornar a ligação.\n\n' +
        'Marque sempre os **números** do bilhete e veja o que cada um representa (quantidade, horário, sala…).',
    },
    {
      title: 'Pedir emprestado: 貸して／借りてもいい／いい／ある (➌)',
      bodyPt:
        'Quatro frases (decore como blocos):\n\n' +
        '| frase | uso |\n|---|---|\n' +
        '| N、{貸|か}してください | me empreste N (verbo {貸|か}す = emprestar) |\n' +
        '| N、{借|か}りてもいいですか？ | posso pegar N emprestado? (permissão, {借|か}りる) |\n' +
        '| N／これ、いいですか？ | posso? (apontando; forma curta) |\n' +
        '| N、ありますか？ | você tem N? |\n\n' +
        '⚠️ **{貸|か}す** (emprestar, dar) × **{借|か}りる** (pegar emprestado, receber) — pontos de vista opostos.\n\n' +
        'Respostas: どうぞ (pode), いいよ／いいですよ (pode sim), ありますよ／あるよ (tenho). Itens de mesa: はさみ (tesoura), カッター (estilete), のり (cola), ホチキス (grampeador), えんぴつ (lápis), ペン (caneta), {電卓|でんたく} (calculadora), スマホの{充電器|じゅうでんき} (carregador), ふせん (post-it).',
    },
    {
      title: 'Checklist e kanji do dia',
      bodyPt:
        '**Conferir uma lista** ({備品|びひん}リスト): ver se os itens estão completos e dizer o que falta ({ない}もの).\n\n' +
        '- Restaurante: フォーク (garfo), ナイフ (faca), スプーン (colher), はし (hashi), {塩|しお} (sal), こしょう (pimenta), {砂糖|さとう} (açúcar), ミルク (leite).\n' +
        '- Banheiro de hotel: せっけん (sabonete), シャンプー, コンディショナー, {歯|は}ブラシ (escova de dentes), かみそり (lâmina/barbeador), タオル (toalha), バスタオル (toalha de banho), トイレットペーパー (papel higiênico).\n\n' +
        '**Kanji:** {朝|あさ} (manhã), {昼|ひる} (meio-dia), {夜|よる} (noite), 〜{時|じ} (hora), 〜{分|ふん} (minuto), 〜{半|はん} (meia), 〜{枚|まい} (contador de folhas/coisas planas).\n\n' +
        '💡 **和製英語** (inglês “feito no Japão”): ホチキス (grampeador), ガムテープ (fita), ノートパソコン (notebook), コンセント (tomada) — parecem inglês mas só funcionam no Japão.',
    },
  ],
  groups: [lesson10Group],
  audios: attachScripts(10, L10_SCRIPTS),
}

const lesson11Group: ExerciseGroup = {
  id: 'iro-s-l11',
  title: 'どんなマンガが好きですか？',
  subtitlePt: 'Hobbies, gostos, o que faz nas folgas e frequência',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l11-1', number: 1, prompt: 'O 「{趣味|しゅみ}」 significa:', choices: [{ n: 1, text: 'hobby / passatempo' }, { n: 2, text: 'trabalho' }, { n: 3, text: 'folga' }, { n: 4, text: 'amigo' }], answer: 1, explanationPt: '{趣味|しゅみ} = hobby. Pergunta: {趣味|しゅみ}は、{何|なん}ですか？ = qual é o seu hobby? (Nota ➊)' },
    { id: 'iro-s-l11-2', number: 2, prompt: 'Em 「{何|なん}ですか？」 e 「{何|なに}が{好|す}きですか？」, o 「何」 lê-se:', choices: [{ n: 1, text: 'なん antes de ですか／contadores; なに antes de partícula (を／が)' }, { n: 2, text: 'sempre なに' }, { n: 3, text: 'sempre なん' }, { n: 4, text: 'なに antes de ですか; なん antes de partícula' }], answer: 1, explanationPt: '{何|なん}: com ですか e em {何時|なんじ}/{何枚|なんまい} etc. {何|なに}: com partícula — {何|なに}を{食|た}べますか／{何|なに}が{好|す}きですか. (Nota ➊)' },
    { id: 'iro-s-l11-3', number: 3, prompt: 'Para dizer “gosto de mangá”, qual partícula marca o que se gosta?', choices: [{ n: 1, text: 'が → マンガが{好|す}きです' }, { n: 2, text: 'を → マンガを{好|す}きです' }, { n: 3, text: 'は → マンガは{好|す}きです' }, { n: 4, text: 'で → マンガで{好|す}きです' }], answer: 1, translationPt: 'Gosto de mangá.', explanationPt: '{好|す}き（な）= gostar. O que se gosta leva **が**: マンガが{好|す}きです. (retoma a Lição 5)' },
    { id: 'iro-s-l11-4', number: 4, prompt: 'O interrogativo 「どんな」 (＋ substantivo) serve para:', choices: [{ n: 1, text: 'perguntar “que tipo de ~?”' }, { n: 2, text: 'perguntar “quantos?”' }, { n: 3, text: 'perguntar “onde?”' }, { n: 4, text: 'perguntar “quando?”' }], answer: 1, explanationPt: 'どんな + N = que tipo de N. Ex.: どんなスポーツが{好|す}きですか？ = que tipo de esporte você gosta? (Nota ➋)' },
    { id: 'iro-s-l11-5', number: 5, prompt: 'Resposta a 「どんな{映画|えいが}が{好|す}きですか？」:', choices: [{ n: 1, text: 'アクション{映画|えいが}が{好|す}きです。' }, { n: 2, text: '{映画|えいが}が{何|なん}ですか。' }, { n: 3, text: 'はい、{好|す}きです。' }, { n: 4, text: '{映画|えいが}はだめです。' }], answer: 1, translationPt: 'Gosto de filme de ação.', explanationPt: 'どんな pede o gênero/tipo específico: アクション{映画|えいが} (ação), {恋愛映画|れんあいえいが} (romance), ホラー (terror), SF (ficção). (Nota ➋)' },
    { id: 'iro-s-l11-6', number: 6, prompt: '「スポーツは、あまり{好|す}きじゃないです」 significa:', choices: [{ n: 1, text: 'não gosto muito de esporte' }, { n: 2, text: 'gosto muito de esporte' }, { n: 3, text: 'odeio esporte' }, { n: 4, text: 'adoro esporte' }], answer: 1, explanationPt: 'あまり + negativo = não muito. あまり{好|す}きじゃないです = não gosto muito. (Nota ➌)' },
    { id: 'iro-s-l11-7', number: 7, prompt: 'O advérbio 「ぜんぜん」 (＋ negativo) significa:', choices: [{ n: 1, text: 'de jeito nenhum / nada' }, { n: 2, text: 'um pouco' }, { n: 3, text: 'às vezes' }, { n: 4, text: 'muito' }], answer: 1, explanationPt: 'ぜんぜん + negativo = nada, de modo algum. Ex.: ぜんぜん{好|す}きじゃないです / ぜんぜんしないね. (Notas ➌ ➍)' },
    { id: 'iro-s-l11-8', number: 8, prompt: 'Para dizer que GOSTA MUITO de algo:', choices: [{ n: 1, text: '〜が{大好|だいす}きです（ou とても{好|す}きです）' }, { n: 2, text: '〜があまり{好|す}きです' }, { n: 3, text: '〜がぜんぜん{好|す}きです' }, { n: 4, text: '〜が{好|す}きじゃないです' }], answer: 1, translationPt: 'Adoro ~.', explanationPt: '{大好|だいす}き（な）= adorar; とても{好|す}きです = gostar muito (とても visto na Lição 7). (Nota ➌)' },
    { id: 'iro-s-l11-9', number: 9, prompt: 'A negativa do adjetivo-な 「{好|す}き」 é:', choices: [{ n: 1, text: '{好|す}きじゃないです' }, { n: 2, text: '{好|す}きくないです' }, { n: 3, text: '{好|す}きませんです' }, { n: 4, text: '{好|す}きないです' }], answer: 1, explanationPt: 'Adjetivo-な: 〜じゃないです. {好|す}きじゃないです. (Adjetivo-い faz 〜くないです, ex.: {広|ひろ}くないです.) (Nota ➌)' },
    { id: 'iro-s-l11-10', number: 10, prompt: 'Advérbios de frequência ALTA usados com V-ます:', choices: [{ n: 1, text: 'いつも／たいてい／よく／ときどき' }, { n: 2, text: 'あまり／ぜんぜん' }, { n: 3, text: 'とても／だめ' }, { n: 4, text: 'すぐに／あとで' }], answer: 1, explanationPt: 'いつも (sempre), たいてい (geralmente), よく (com frequência), ときどき (às vezes) → frequência alta a média, com verbo afirmativo. (Nota ➍)' },
    { id: 'iro-s-l11-11', number: 11, prompt: '「あまり」「ぜんぜん」 de frequência vêm com:', choices: [{ n: 1, text: 'verbo NEGATIVO (V-ません)' }, { n: 2, text: 'verbo afirmativo (V-ます)' }, { n: 3, text: 'só com substantivos' }, { n: 4, text: 'só com です' }], answer: 1, explanationPt: 'あまり/ぜんぜん + V-ません = baixa frequência. Ex.: テレビは、あまり{見|み}ません / スポーツは、ぜんぜんしないね. (Nota ➍)' },
    { id: 'iro-s-l11-12', number: 12, prompt: 'Ordene de mais frequente a menos frequente:', choices: [{ n: 1, text: 'いつも ＞ たいてい ＞ よく ＞ ときどき ＞ あまり ＞ ぜんぜん' }, { n: 2, text: 'ときどき ＞ いつも ＞ よく ＞ あまり' }, { n: 3, text: 'ぜんぜん ＞ あまり ＞ いつも' }, { n: 4, text: 'よく ＞ いつも ＞ ぜんぜん ＞ たいてい' }], answer: 1, explanationPt: 'Alta→baixa: いつも → たいてい → よく → ときどき → あまり → ぜんぜん. (Quadro ◆ frequência/grau)' },
    { id: 'iro-s-l11-13', number: 13, prompt: 'Em 「{夫|おっと}と{公園|こうえん}でテニスをします」, a partícula 「と」 indica:', choices: [{ n: 1, text: 'com quem (companhia): com o marido' }, { n: 2, text: 'o lugar' }, { n: 3, text: 'o instrumento' }, { n: 4, text: 'o objeto direto' }], answer: 1, explanationPt: '【pessoa】と = junto com (companhia). {夫|おっと}と = com o marido. (Nota ➎)' },
    { id: 'iro-s-l11-14', number: 14, prompt: 'Na mesma frase, a partícula 「で」 (em {公園|こうえん}で) indica:', choices: [{ n: 1, text: 'o lugar da ação: no parque' }, { n: 2, text: 'a companhia' }, { n: 3, text: 'o tempo' }, { n: 4, text: 'o destino' }], answer: 1, explanationPt: '【lugar】で = onde a ação acontece. {公園|こうえん}で = no parque. (Nota ➎, retoma a Lição 8)' },
    { id: 'iro-s-l11-15', number: 15, prompt: 'No frase em japonês, onde fica o verbo?', choices: [{ n: 1, text: 'sempre no final; os demais elementos (quando/com quem/onde) têm ordem livre' }, { n: 2, text: 'sempre no começo' }, { n: 3, text: 'logo depois do sujeito' }, { n: 4, text: 'a ordem é totalmente fixa' }], answer: 1, explanationPt: 'O verbo vai no fim da frase; quando, com quem, onde podem vir em qualquer ordem antes dele. (Nota ➎)' },
    { id: 'iro-s-l11-16', number: 16, prompt: 'Qual destes é 「{読書|どくしょ}」 (hobby)?', choices: [{ n: 1, text: 'leitura' }, { n: 2, text: 'culinária' }, { n: 3, text: 'compras' }, { n: 4, text: 'música' }], answer: 1, explanationPt: '{読書|どくしょ} = leitura. {料理|りょうり} = cozinhar; {買|か}い{物|もの} = compras; {音楽|おんがく} = música; マンガ = mangá; アニメ = anime. (Seção 1)' },
    { id: 'iro-s-l11-17', number: 17, prompt: 'Relacione as atividades de folga: {掃除|そうじ} / {洗濯|せんたく} / {散歩|さんぽ}:', choices: [{ n: 1, text: '{掃除|そうじ} = faxina; {洗濯|せんたく} = lavar roupa; {散歩|さんぽ} = passear/caminhar' }, { n: 2, text: '{掃除|そうじ} = lavar roupa; {洗濯|せんたく} = passear; {散歩|さんぽ} = faxina' }, { n: 3, text: 'os três = cozinhar' }, { n: 4, text: '{掃除|そうじ} = estudar; {洗濯|せんたく} = jogar; {散歩|さんぽ} = ler' }], answer: 1, explanationPt: '{掃除|そうじ}をします (faxina), {洗濯|せんたく}をします (lavar roupa), {散歩|さんぽ}をします (passear). Outros: {勉強|べんきょう}する (estudar), ゆっくりする (relaxar). (Seção 3)' },
    { id: 'iro-s-l11-18', number: 18, prompt: 'Relacione o gênero 「ミステリー」:', choices: [{ n: 1, text: 'mistério (livro/filme policial)' }, { n: 2, text: 'romance' }, { n: 3, text: 'jazz' }, { n: 4, text: 'ação' }], answer: 1, explanationPt: 'ミステリー = mistério; ファンタジー = fantasia; {恋愛映画|れんあいえいが} = romance; ロック/ジャズ/クラシック = rock/jazz/clássica. (Seção 2)' },
    { id: 'iro-s-l11-19', number: 19, prompt: 'Diálogo 11-04: qual é o hobby da pessoa B?', context: 'A：{趣味|しゅみ}は、{何|なん}ですか？ B：{趣味|しゅみ}は、{読書|どくしょ}と{映画|えいが}です。', choices: [{ n: 1, text: 'leitura e filmes' }, { n: 2, text: 'esporte e culinária' }, { n: 3, text: 'jogos' }, { n: 4, text: 'música' }], answer: 1, explanationPt: '{読書|どくしょ}と{映画|えいが}です = leitura e cinema.' },
    { id: 'iro-s-l11-20', number: 20, prompt: 'Diálogo 11-18: como a Nomin passa a folga?', context: 'ノミン：{私|わたし}は、うちでゆっくりします。たいてい、{映画|えいが}を{見|み}ます。ときどき、{日本語|にほんご}を{勉強|べんきょう}します。テレビは、あまり{見|み}ません。', choices: [{ n: 1, text: 'Relaxa em casa: geralmente vê filme, às vezes estuda japonês; quase não vê TV.' }, { n: 2, text: 'Sai para fazer esporte todo dia.' }, { n: 3, text: 'Joga pachinko a noite toda.' }, { n: 4, text: 'Faz compras com amigos.' }], answer: 1, explanationPt: 'たいてい (geralmente) {映画|えいが}, ときどき (às vezes) {日本語|にほんご}の{勉強|べんきょう}, テレビは あまり (quase não) {見|み}ません.' },
    { id: 'iro-s-l11-21', number: 21, prompt: 'Diálogo 11-19: o que a Morita faz na folga?', context: '{森田|もりた}：{外|そと}でスポーツをします。たいてい、{夫|おっと}と{公園|こうえん}でテニスをします。あと、ときどき、{1人|ひとり}でジョギングをします。', choices: [{ n: 1, text: 'Esporte ao ar livre: tênis com o marido no parque e, às vezes, cooper sozinha.' }, { n: 2, text: 'Fica em casa relaxando.' }, { n: 3, text: 'Vê filmes e estuda.' }, { n: 4, text: 'Vai às compras.' }], answer: 1, explanationPt: '{夫|おっと}と (com o marido) {公園|こうえん}で (no parque) テニス; {1人|ひとり}で (sozinha) ジョギング. Mostra と/で (Nota ➎).' },
    { id: 'iro-s-l11-22', number: 22, prompt: 'Diálogo 11-20: e o Nishikawa, faz esporte?', context: '{西川|にしかわ}：{休|やす}みの{日|ひ}は、うちでごろごろ……。ときどき、パチンコをするかなあ。スポーツは、ぜんぜんしないね。', choices: [{ n: 1, text: 'Não — fica à toa em casa, às vezes joga pachinko; esporte, nada.' }, { n: 2, text: 'Sim, joga futebol todo fim de semana.' }, { n: 3, text: 'Sim, faz natação.' }, { n: 4, text: 'Sim, corre todo dia.' }], answer: 1, explanationPt: 'ごろごろ (ficar à toa), パチンコ (jogo japonês), スポーツは ぜんぜんしない (esporte, nada). ぜんぜん + negativo. (Nota ➍)' },
    { id: 'iro-s-l11-23', number: 23, prompt: 'Numa bio de rede social: 「しゅみは{読書|どくしょ}です」. O hobby da pessoa é:', choices: [{ n: 1, text: 'leitura' }, { n: 2, text: 'compras' }, { n: 3, text: 'esporte' }, { n: 4, text: 'música' }], answer: 1, explanationPt: 'Perfil da mayuri: しゅみは{読書|どくしょ}です = hobby é leitura. (Já a yukiko: {音楽|おんがく}・ショッピング・ファッション・スポーツ.) (Seção 4)' },
    { id: 'iro-s-l11-24', number: 24, prompt: 'O que é 「パチンコ」, citado no diálogo?', choices: [{ n: 1, text: 'um tipo de jogo (de fliperama/pachinko) japonês' }, { n: 2, text: 'um esporte' }, { n: 3, text: 'um prato típico' }, { n: 4, text: 'um instrumento musical' }], answer: 1, explanationPt: 'パチンコ = jogo japonês de salão (tipo pinball/caça-níquel). No áudio: パチンコ？{日本|にほん}のゲーム = é um jogo japonês. ごろごろ = ficar à toa.' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 11 (聴解スクリプト)
const L11_SCRIPTS: Record<string, ScriptItem[]> = {
  '11-01': [
    {
      label: '会話① (11-01)',
      setupJa: '{趣味|しゅみ}について、{6人|ろくにん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Seis pessoas falam sobre seus hobbies.',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: 'えーと、ゲームです。', pt: 'Hmm, é videogame.' },
        { speaker: 'A', ja: 'へー、ゲームですか。', pt: 'Ah é, videogame.' },
      ],
    },
  ],
  '11-02': [
    {
      label: '会話② (11-02)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: '{趣味|しゅみ}？{買|か}い{物|もの}が{好|す}きです。', pt: 'Hobby? Gosto de fazer compras.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah é?' },
      ],
    },
  ],
  '11-03': [
    {
      label: '会話③ (11-03)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: 'うーん、アニメが{好|す}きです。', pt: 'Hmm, gosto de anime.' },
        { speaker: 'A', ja: 'ああ、アニメ。', pt: 'Ah, anime.' },
      ],
    },
  ],
  '11-04': [
    {
      label: '会話④ (11-04)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: '{趣味|しゅみ}は、{読書|どくしょ}と{映画|えいが}です。', pt: 'Meus hobbies são leitura e cinema.' },
        { speaker: 'A', ja: '{読書|どくしょ}と{映画|えいが}、いいですね。', pt: 'Leitura e cinema, que legal.' },
      ],
    },
  ],
  '11-05': [
    {
      label: '会話⑤ (11-05)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: 'スポーツです。あと、{料理|りょうり}も{好|す}きです。', pt: 'Esporte. Ah, e também gosto de cozinhar.' },
        { speaker: 'A', ja: 'いいですね。', pt: 'Que legal.' },
      ],
    },
  ],
  '11-06': [
    {
      label: '会話⑥ (11-06)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: 'えーと、{音楽|おんがく}が{好|す}きです。', pt: 'Hmm, gosto de música.' },
        { speaker: 'A', ja: '{音楽|おんがく}、{私|わたし}もです。', pt: 'Música, eu também.' },
      ],
    },
  ],
  '11-10': [
    {
      label: '会話 (11-10)',
      setupJa: '{日本語|にほんご}クラスの{休|やす}み{時間|じかん}に、ジュンジュンさんと{趙|チョウ}さんが、お{互|たが}いの{趣味|しゅみ}について{話|はな}しています。',
      setupPt: 'No intervalo da aula de japonês, Jun Jun e Zhao conversam sobre os hobbies um do outro.',
      lines: [
        { speaker: '趙', ja: 'ジュンジュンさんの{趣味|しゅみ}は、{何|なん}ですか？', pt: 'Jun Jun, qual é o seu hobby?' },
        { speaker: 'ジュンジュン', ja: 'スポーツです。', pt: 'Esporte.' },
        { speaker: '趙', ja: 'へー、どんなスポーツが{好|す}きですか？', pt: 'Ah, que tipo de esporte você gosta?' },
        { speaker: 'ジュンジュン', ja: 'バスケットボールと{水泳|すいえい}が{好|す}きです。{趙|チョウ}さんは、スポーツ、{好|す}きですか？', pt: 'Gosto de basquete e natação. E você, Zhao, gosta de esporte?' },
        { speaker: '趙', ja: 'うーん、スポーツは、あまり{好|す}きじゃないです。', pt: 'Hmm, esporte eu não gosto muito.' },
        { speaker: 'ジュンジュン', ja: 'そうですか。じゃあ、{何|なに}が{好|す}きですか？', pt: 'Ah é? Então, do que você gosta?' },
        { speaker: '趙', ja: '{私|わたし}は、マンガが{好|す}きです。', pt: 'Eu gosto de mangá.' },
        { speaker: 'ジュンジュン', ja: 'どんなマンガが{好|す}きですか？', pt: 'Que tipo de mangá você gosta?' },
        { speaker: '趙', ja: 'そうですねえ、「ドラゴンボール」が{大好|だいす}きです。', pt: 'Deixa eu ver… adoro “Dragon Ball”.' },
        { speaker: 'ジュンジュン', ja: 'ああ、いいですね。', pt: 'Ah, que legal.' },
      ],
    },
  ],
  '11-17': [
    {
      label: '会話① (11-17)',
      setupJa: '{同|おな}じ{職場|しょくば}の{4人|よにん}が、{休|やす}みの{日|ひ}の{過|す}ごし{方|かた}について{話|はな}しています。',
      setupPt: 'Quatro colegas do mesmo trabalho conversam sobre como passam as folgas.',
      lines: [
        { speaker: '森田', ja: 'ミゲルさん、{休|やす}みの{日|ひ}は、いつも、{何|なに}をしますか？', pt: 'Miguel, o que você costuma fazer nas folgas?' },
        { speaker: 'ミゲル', ja: 'そうですねえ、{私|わたし}は、いつも、{掃除|そうじ}と{洗濯|せんたく}をします。あと、よく、{友|とも}だちと{買|か}い{物|もの}をします。', pt: 'Deixa ver… eu sempre faço faxina e lavo roupa. E também faço compras com amigos com frequência.' },
        { speaker: '森田', ja: 'そうですか。', pt: 'Ah é?' },
      ],
    },
  ],
  '11-18': [
    {
      label: '会話② (11-18)',
      lines: [
        { speaker: '森田', ja: 'ノミンさんは？', pt: 'E você, Nomin?' },
        { speaker: 'ノミン', ja: '{私|わたし}は、うちでゆっくりします。', pt: 'Eu relaxo em casa.' },
        { speaker: '森田', ja: 'そう。うちで、{何|なに}をしますか？', pt: 'Ah. E o que você faz em casa?' },
        { speaker: 'ノミン', ja: 'たいてい、{映画|えいが}を{見|み}ます。ときどき、{日本語|にほんご}を{勉強|べんきょう}します。', pt: 'Geralmente vejo filme. Às vezes estudo japonês.' },
        { speaker: 'ミゲル', ja: 'へー、えらいですね。テレビは{見|み}ますか？', pt: 'Nossa, que dedicação. Você vê TV?' },
        { speaker: 'ノミン', ja: 'ああ、テレビは、あまり{見|み}ません。', pt: 'Ah, TV eu quase não vejo.' },
      ],
    },
  ],
  '11-19': [
    {
      label: '会話③ (11-19)',
      lines: [
        { speaker: 'ミゲル', ja: '{森田|もりた}さんは、{休|やす}みの{日|ひ}は、{何|なに}をしますか？', pt: 'Morita, o que você faz nas folgas?' },
        { speaker: '森田', ja: '{外|そと}でスポーツをします。', pt: 'Faço esporte ao ar livre.' },
        { speaker: 'ノミン', ja: 'スポーツ、いいですね。どんなスポーツをしますか？', pt: 'Esporte, que legal. Que tipo de esporte você faz?' },
        { speaker: '森田', ja: 'たいてい、{夫|おっと}と{公園|こうえん}でテニスをします。あと、ときどき、{1人|ひとり}でジョギングをします。', pt: 'Geralmente jogo tênis com meu marido no parque. E, às vezes, faço cooper sozinha.' },
        { speaker: 'ミゲル', ja: 'へー、いいですね。', pt: 'Nossa, que legal.' },
      ],
    },
  ],
  '11-20': [
    {
      label: '会話④ (11-20)',
      lines: [
        { speaker: 'ノミン', ja: '{西川|にしかわ}さんは？', pt: 'E você, Nishikawa?' },
        { speaker: '西川', ja: 'うーん、{休|やす}みの{日|ひ}は、うちでごろごろ……。', pt: 'Hmm, nas folgas eu fico à toa em casa…' },
        { speaker: 'ノミン', ja: 'ごろごろ？', pt: 'À toa?' },
        { speaker: '西川', ja: 'ふとんでゆっくり。あー、ときどき、パチンコをするかなあ。', pt: 'Relaxando na cama. Ah, e às vezes jogo pachinko, acho.' },
        { speaker: 'ミゲル', ja: 'パチンコ？{何|なん}ですか？', pt: 'Pachinko? O que é isso?' },
        { speaker: '西川', ja: '{日本|にほん}のゲーム。', pt: 'É um jogo japonês.' },
        { speaker: 'ミゲル', ja: 'そうですか。', pt: 'Ah, entendi.' },
        { speaker: 'ノミン', ja: 'スポーツは？', pt: 'E esporte?' },
        { speaker: '西川', ja: 'スポーツは、ぜんぜんしないね。', pt: 'Esporte eu não faço nada.' },
      ],
    },
  ],
}

const lesson11: Section = {
  id: 'lesson-11',
  level: 'starter',
  titleJa: '第11課 どんなマンガが好きですか？',
  titlePt: 'Lição 11 — De que tipo de mangá você gosta?',
  summaryPt: 'O que eu gosto de fazer · falar de hobbies e gostos (〜は何ですか, 〜が好きです, どんなN, 大好き／あまり好きじゃない), contar o que faz nas folgas com advérbios de frequência (いつも〜ぜんぜん) e as partículas と (com quem) / で (onde), e ler um perfil de rede social.',
  studyNotes: [
    {
      title: 'Tópico: O que eu gosto de fazer',
      bodyPt:
        '## Can-do\n' +
        '- Responder de forma simples quando perguntam sobre seus hobbies.\n' +
        '- Perguntar e responder sobre gostos e hobbies (gênero, obra preferida).\n' +
        '- Perguntar e responder o que se faz nos dias de folga.\n' +
        '- Ler um perfil simples de rede social e entender do que a pessoa gosta.',
    },
    {
      title: 'Perguntar com 何: Nは何ですか？ (➊)',
      bodyPt:
        'O interrogativo **{何|なん}/{何|なに}** (o quê) pergunta sobre um tópico: `〜は{何|なん}ですか？`.\n\n' +
        '- `{趣味|しゅみ}は、{何|なん}ですか？` = qual é o seu hobby?\n\n' +
        '**Leitura do 何:**\n' +
        '- **なん** com ですか e em compostos: {何時|なんじ}, {何枚|なんまい}, {何歳|なんさい}, {何曜日|なんようび}, {何月|なんがつ}, {何日|なんにち}.\n' +
        '- **なに** quando vem com partícula: `{何|なに}を{食|た}べますか？`, `{何|なに}が{好|す}きですか？`.\n\n' +
        '**Gostar:** o que se gosta leva **が** → `マンガが{好|す}きです`. Hobbies: スポーツ, {音楽|おんがく}, {映画|えいが}, {読書|どくしょ}, {買|か}い{物|もの}, {料理|りょうり}, ゲーム, マンガ, アニメ.',
    },
    {
      title: 'Que tipo de: どんなN (➋)',
      bodyPt:
        '**どんな + substantivo** = que tipo de ~. Pede o gênero/a obra específica:\n\n' +
        '- `どんなスポーツが{好|す}きですか？` → バスケットボール, {水泳|すいえい}, サッカー…\n' +
        '- `どんな{映画|えいが}が{好|す}きですか？` → アクション{映画|えいが}, {恋愛映画|れんあいえいが}, ホラー, SF…\n' +
        '- `どんな{本|ほん}を{読|よ}みますか？` → ミステリー, ファンタジー…\n\n' +
        '**Gêneros úteis:** 【música】ロック, ジャズ, クラシック · 【filme】{恋愛|れんあい}, アクション, ホラー · 【livro】ミステリー, ファンタジー.',
    },
    {
      title: 'Grau de gosto: あまり〜じゃないです / 大好き (➌)',
      bodyPt:
        'Para dizer **o quanto** se gosta (advérbio + adjetivo):\n\n' +
        '- **とても{好|す}きです** / **{大好|だいす}きです** = gosto muito / adoro.\n' +
        '- **あまり{好|す}きじゃないです** = não gosto muito.\n' +
        '- **ぜんぜん{好|す}きじゃないです** = não gosto nada.\n\n' +
        '⚠️ あまり e ぜんぜん **exigem o negativo**.\n\n' +
        '**Negativo dos adjetivos:** adjetivo-な → 〜じゃないです (`{好|す}きじゃないです`); adjetivo-い → 〜くないです (`{広|ひろ}くないです`).',
    },
    {
      title: 'Frequência: いつも〜ぜんぜん (➍)',
      bodyPt:
        'Advérbios de **frequência**, com verbo:\n\n' +
        '| advérbio | frequência | verbo |\n|---|---|---|\n' +
        '| いつも | sempre | afirmativo |\n' +
        '| たいてい | geralmente | afirmativo |\n' +
        '| よく | com frequência | afirmativo |\n' +
        '| ときどき | às vezes | afirmativo |\n' +
        '| あまり | quase não | **negativo** |\n' +
        '| ぜんぜん | nunca/nada | **negativo** |\n\n' +
        'Ex.: `たいてい、{映画|えいが}を{見|み}ます` · `テレビは、あまり{見|み}ません` · `スポーツは、ぜんぜんしないね`.\n\n' +
        '💡 O mesmo quadro vale para **grau** (com adjetivo): alto = とても; baixo = あまり/ぜんぜん.',
    },
    {
      title: 'Com quem / onde: 【pessoa】と【lugar】で (➎)',
      bodyPt:
        'Duas partículas que situam a ação:\n\n' +
        '- **と** depois de pessoa = **com quem**: `{夫|おっと}と` (com o marido), `{友|とも}だちと` (com amigos).\n' +
        '- **で** depois de lugar = **onde**: `{公園|こうえん}で` (no parque), `うちで` (em casa), `{外|そと}で` (lá fora).\n\n' +
        '`{夫|おっと}と{公園|こうえん}でテニスをします` = jogo tênis com o marido no parque.\n\n' +
        '📌 **Ordem:** o verbo fica no **fim**; quando/com quem/onde podem vir em qualquer ordem antes dele. Sozinho = `{1人|ひとり}で`.\n\n' +
        '**Atividades de folga:** {掃除|そうじ}/{洗濯|せんたく}/{料理|りょうり}/{散歩|さんぽ}/{買|か}い{物|もの}/{勉強|べんきょう}/ゲーム/ゆっくりする. Kanji do dia: {読|よ}みます, {聞|き}きます, {見|み}ます, {本|ほん}, {友|とも}だち, {何|なに}.',
    },
  ],
  groups: [lesson11Group],
  audios: attachScripts(11, L11_SCRIPTS),
}

const lesson12Group: ExerciseGroup = {
  id: 'iro-s-l12',
  title: 'いっしょに飲みに行きませんか？',
  subtitlePt: 'Avisos de evento, datas, convites e combinar de sair junto',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l12-1', number: 1, prompt: 'Num aviso, 「{夏祭|なつまつ}り」 significa:', choices: [{ n: 1, text: 'festival de verão' }, { n: 2, text: 'ano-novo' }, { n: 3, text: 'casamento' }, { n: 4, text: 'feira de empregos' }], answer: 1, explanationPt: '{夏祭|なつまつ}り = festival de verão (julho–agosto, com {屋台|やたい}/barracas, {盆踊|ぼんおど}り e {花火|はなび}). (Seção 1 · TIPS)' },
    { id: 'iro-s-l12-2', number: 2, prompt: 'Num aviso de evento, 「{日時|にちじ}」 indica:', choices: [{ n: 1, text: 'data e hora' }, { n: 2, text: 'o lugar' }, { n: 3, text: 'o preço' }, { n: 4, text: 'o nome do organizador' }], answer: 1, explanationPt: '{日時|にちじ} = data e hora. Outros campos do aviso: {場所|ばしょ}/{会場|かいじょう} (local), {入場料|にゅうじょうりょう} (ingresso). (Seção 1)' },
    { id: 'iro-s-l12-3', number: 3, prompt: '「{入場無料|にゅうじょうむりょう}」 quer dizer:', choices: [{ n: 1, text: 'entrada gratuita' }, { n: 2, text: 'entrada paga' }, { n: 3, text: 'lotado' }, { n: 4, text: 'entrada proibida' }], answer: 1, explanationPt: '{入場無料|にゅうじょうむりょう} = entrada grátis (無料 = de graça). Compare {入場料|にゅうじょうりょう} 〜{円|えん} = taxa de entrada de 〜 ienes. (Seção 1)' },
    { id: 'iro-s-l12-4', number: 4, prompt: '「{駐車場|ちゅうしゃじょう}」 é:', choices: [{ n: 1, text: 'estacionamento' }, { n: 2, text: 'praça' }, { n: 3, text: 'salão' }, { n: 4, text: 'palco' }], answer: 1, explanationPt: '{駐車場|ちゅうしゃじょう} = estacionamento. Compare {広場|ひろば} (praça), ホール (salão), {会場|かいじょう} (local do evento). (Seção 1)' },
    { id: 'iro-s-l12-5', number: 5, prompt: 'A leitura correta de 「9{月|がつ}」 é:', choices: [{ n: 1, text: 'くがつ' }, { n: 2, text: 'きゅうがつ' }, { n: 3, text: ' here' }, { n: 4, text: 'くげつ' }], answer: 1, explanationPt: 'Meses irregulares: 4{月|がつ}=しがつ, 7{月|がつ}=しちがつ, 9{月|がつ}=くがつ. “Que mês?” = {何月|なんがつ}. (Seção 1·áudio 12-01)' },
    { id: 'iro-s-l12-6', number: 6, prompt: 'A leitura correta de 「14{日|にち}」 é:', choices: [{ n: 1, text: 'じゅうよっか' }, { n: 2, text: 'じゅうよんにち' }, { n: 3, text: 'じゅうしにち' }, { n: 4, text: 'じゅうよう' }], answer: 1, explanationPt: '14{日|にち}=じゅうよっか (segue o padrão de 4{日|にち}=よっか e 24{日|にち}=にじゅうよっか). (Seção 1·áudio 12-02)' },
    { id: 'iro-s-l12-7', number: 7, prompt: 'A leitura correta de 「20{日|にち}」 é:', choices: [{ n: 1, text: 'はつか' }, { n: 2, text: 'にじゅうにち' }, { n: 3, text: 'はつにち' }, { n: 4, text: 'ふつか' }], answer: 1, explanationPt: '20{日|にち}=はつか (leitura especial). Não confundir com 2{日|にち}=ふつか. “Que dia (do mês)?” = {何日|なんにち}. (Seção 1·áudio 12-02)' },
    { id: 'iro-s-l12-8', number: 8, prompt: '「あさって」 significa:', choices: [{ n: 1, text: 'depois de amanhã' }, { n: 2, text: 'hoje' }, { n: 3, text: 'ontem' }, { n: 4, text: 'amanhã' }], answer: 1, explanationPt: 'Calendário: {今日|きょう} (hoje), {明日|あした} (amanhã), あさって (depois de amanhã). (Seção 2·12-03)' },
    { id: 'iro-s-l12-9', number: 9, prompt: '「{来週|らいしゅう}」 e 「{今週|こんしゅう}」 são, respectivamente:', choices: [{ n: 1, text: 'próxima semana / esta semana' }, { n: 2, text: 'esta semana / próxima semana' }, { n: 3, text: 'semana passada / esta semana' }, { n: 4, text: 'fim de semana / dia útil' }], answer: 1, explanationPt: '{今週|こんしゅう} = esta semana; {来週|らいしゅう} = próxima semana. (Seção 2·12-03)' },
    { id: 'iro-s-l12-10', number: 10, prompt: 'Em 「{日曜日|にちようび}（　）タイフェスティバルがあります」, a lacuna (data/hora) é:', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'で' }, { n: 3, text: 'を' }, { n: 4, text: 'が' }], answer: 1, translationPt: 'No domingo há a Festa Tailandesa.', explanationPt: 'A data/hora de um evento leva **に**: {日曜日|にちようび}に, 12{月|がつ}20{日|か}に, 7{時|じ}に. (Nota ➊)' },
    { id: 'iro-s-l12-11', number: 11, prompt: 'Em 「さくら{公園|こうえん}（　）タイフェスティバルがあります」, o LUGAR do evento leva:', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'に' }, { n: 3, text: 'へ' }, { n: 4, text: 'と' }], answer: 1, translationPt: 'Tem a Festa Tailandesa no Parque Sakura.', explanationPt: 'O lugar onde um evento acontece leva **で**: さくら{公園|こうえん}で. (Nota ➊)' },
    { id: 'iro-s-l12-12', number: 12, prompt: 'Quais palavras de tempo NÃO levam 「に」?', choices: [{ n: 1, text: '{明日|あした}・{今晩|こんばん}・{来週|らいしゅう}' }, { n: 2, text: '{日曜日|にちようび}・12{月|がつ}20{日|か}' }, { n: 3, text: '7{時|じ}・3{時|じ}' }, { n: 4, text: 'todas precisam sempre de に' }], answer: 1, explanationPt: 'に pode ser omitido na fala; e palavras como {明日|あした} (amanhã), {今晩|こんばん} (hoje à noite) e {来週|らいしゅう} (próxima semana) não usam に. Já {日曜日|にちようび}/{12月|がつ}{20日|はつか}/7{時|じ} levam に. (Nota ➊)' },
    { id: 'iro-s-l12-13', number: 13, prompt: 'Em 「{忘年会|ぼうねんかい}（　）{行|い}きますか？」 (vai à festa de fim de ano?), a lacuna é:', choices: [{ n: 1, text: 'に — 【evento】に{行|い}く indica o destino/objetivo' }, { n: 2, text: 'で' }, { n: 3, text: 'を' }, { n: 4, text: 'は' }], answer: 1, explanationPt: '【N de ação/evento】に{行|い}きます = ir a (objetivo). Ex.: {買|か}い{物|もの}に, {散歩|さんぽ}に, {映画|えいが}に, パーティーに, {試合|しあい}に. (Nota ➋)' },
    { id: 'iro-s-l12-14', number: 14, prompt: '“Moro em Tóquio” = 「{東京|とうきょう}（　）{住|す}んでいます」. A partícula é:', choices: [{ n: 1, text: 'に — lugar de permanência/existência' }, { n: 2, text: 'で — lugar de ação' }, { n: 3, text: 'を' }, { n: 4, text: 'へ' }], answer: 1, explanationPt: '**に** marca lugar de permanência ({住|す}む) e de existência (ある/いる): {食堂|しょくどう}にあります. (Quadro ◆ で・に)' },
    { id: 'iro-s-l12-15', number: 15, prompt: '“Jogo futebol no parque” = 「{公園|こうえん}（　）サッカーをします」. A partícula é:', choices: [{ n: 1, text: 'で — lugar de ação/evento' }, { n: 2, text: 'に — lugar de existência' }, { n: 3, text: 'を' }, { n: 4, text: 'と' }], answer: 1, explanationPt: '**で** marca o lugar onde se faz uma ação ou onde há um evento: {公園|こうえん}でサッカーをします; {中央公園|ちゅうおうこうえん}で{夏祭|なつまつ}りがあります. (Quadro ◆ で・に)' },
    { id: 'iro-s-l12-16', number: 16, prompt: 'Para CONVIDAR (“vamos juntos?”), muda-se 「{行|い}きます」 para:', choices: [{ n: 1, text: '{行|い}きませんか？ (entonação ascendente)' }, { n: 2, text: '{行|い}きました' }, { n: 3, text: '{行|い}きません。' }, { n: 4, text: '{行|い}きたいです' }], answer: 1, translationPt: 'Não quer ir? / Vamos juntos?', explanationPt: 'Convite = trocar ます da forma-マス por **ませんか？**, com entonação subindo. いっしょに{行|い}きませんか？ (Nota ➌)' },
    { id: 'iro-s-l12-17', number: 17, prompt: '「また{今度|こんど}{行|い}きましょう」 — 「〜ましょう」 serve para:', choices: [{ n: 1, text: 'propor/combinar fazer algo junto (“vamos ~”)' }, { n: 2, text: 'recusar um convite' }, { n: 3, text: 'perguntar o preço' }, { n: 4, text: 'falar do passado' }], answer: 1, explanationPt: '〜ましょう = vamos ~ (proposta). Usado para confirmar que vão juntos, ou propor outra ocasião ({また今度|こんど}). Também {始|はじ}めましょう, {休|やす}みましょう. (Nota ➍)' },
    { id: 'iro-s-l12-18', number: 18, prompt: '“Vamos comer yakiniku juntos?” = 「いっしょに{焼肉|やきにく}を（　）{行|い}きませんか？」. A lacuna é:', choices: [{ n: 1, text: '{食|た}べに' }, { n: 2, text: '{食|た}べます' }, { n: 3, text: '{食|た}べて' }, { n: 4, text: '{食|た}べた' }], answer: 1, explanationPt: 'V-に{行|い}く = ir para (fazer algo). Tira ます da forma-マス e põe に: {食|た}べに{行|い}く, {見|み}に{行|い}く, {聞|き}きに{行|い}く. (Nota ➎)' },
    { id: 'iro-s-l12-19', number: 19, prompt: '「{飲|の}みに{行|い}く」 significa:', choices: [{ n: 1, text: 'sair para beber (ir a um bar/izakaya tomar algo)' }, { n: 2, text: 'ir nadar' }, { n: 3, text: 'ir comer' }, { n: 4, text: 'ir dormir' }], answer: 1, explanationPt: '{飲|の}みに{行|い}く = ir a um estabelecimento beber (álcool). É o título da lição: いっしょに{飲|の}みに{行|い}きませんか？ (Nota ➎)' },
    { id: 'iro-s-l12-20', number: 20, prompt: '「{忘年会|ぼうねんかい}」 é:', choices: [{ n: 1, text: 'festa de fim de ano (geralmente do trabalho)' }, { n: 2, text: 'festival de verão' }, { n: 3, text: 'churrasco' }, { n: 4, text: 'reunião de negócios' }], answer: 1, explanationPt: '{忘年会|ぼうねんかい} = confraternização de fim de ano. Outros eventos da lição: {交流|こうりゅう}パーティー (festa de intercâmbio), {空手|からて}の{試合|しあい} (luta de caratê). (Seção 2)' },
    { id: 'iro-s-l12-21', number: 21, prompt: 'Recusar um convite de forma educada: 「{火曜日|かようび}はちょっと……」 significa:', choices: [{ n: 1, text: 'terça-feira para mim não dá muito (recusa suave)' }, { n: 2, text: 'terça está ótimo!' }, { n: 3, text: 'que horas na terça?' }, { n: 4, text: 'claro, terça!' }], answer: 1, explanationPt: '〜はちょっと…… (+ すみません) = recusa indireta e educada. Aceitar = だいじょうぶです. (Seção 3·12-15)' },
    { id: 'iro-s-l12-22', number: 22, prompt: 'Relacione as reações: もちろん / まだわかりません / {残念|ざんねん}です:', choices: [{ n: 1, text: 'もちろん = claro; まだわかりません = ainda não sei; {残念|ざんねん}です = que pena' }, { n: 2, text: 'もちろん = que pena; まだわかりません = claro; {残念|ざんねん}です = ainda não sei' }, { n: 3, text: 'as três = “sim, vou”' }, { n: 4, text: 'as três = “não sei”' }], answer: 1, explanationPt: 'もちろん (claro), {楽|たの}しみですね (mal posso esperar), まだわかりません (ainda não sei), {残念|ざんねん}です (que pena). (Seção 2·12-03)' },
    { id: 'iro-s-l12-23', number: 23, prompt: 'Diálogo 12-05: o Gawin vai à Festa Tailandesa?', context: 'A：ガウィンさん、{日曜日|にちようび}に、さくら{公園|こうえん}でタイフェスティバルがありますね。{行|い}きますか？ B：はい、{行|い}きます。', choices: [{ n: 1, text: 'Sim, vai (はい、{行|い}きます)' }, { n: 2, text: 'Não vai' }, { n: 3, text: 'Ainda não sabe' }, { n: 4, text: 'Vai trabalhar' }], answer: 1, explanationPt: 'B responde はい、{行|い}きます (sim, vou). A complementa {楽|たの}しみですね (mal posso esperar).' },
    { id: 'iro-s-l12-24', number: 24, prompt: 'Diálogo 12-17: por que B recusa o convite de ir beber?', context: 'A：いっしょに{飲|の}みに{行|い}きませんか？ B：いつですか？ A：{今晩|こんばん}です。 B：{今日|きょう}？　すみません、{今日|きょう}はだめです。', choices: [{ n: 1, text: 'Hoje (hoje à noite) não dá para ele' }, { n: 2, text: 'Ele aceita feliz' }, { n: 3, text: 'Amanhã ele não pode' }, { n: 4, text: 'Ele não gosta de beber' }], answer: 1, explanationPt: '{今晩|こんばん} = hoje à noite. B diz {今日|きょう}はだめです (hoje não dá). A encerra com じゃあ、また{今度|こんど} (então, fica para a próxima).' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 12 (聴解スクリプト)
const L12_SCRIPTS: Record<string, ScriptItem[]> = {
  '12-05': [
    {
      label: '会話① (12-05)',
      setupJa: '{5人|ごにん}の{人|ひと}が、{職場|しょくば}の{同僚|どうりょう}に、イベントに{行|い}くかどうか{質問|しつもん}しています。',
      setupPt: 'Cinco pessoas perguntam a um colega de trabalho se vão a um evento.',
      lines: [
        { speaker: 'A', ja: 'ガウィンさん、{日曜日|にちようび}に、さくら{公園|こうえん}でタイフェスティバルがありますね。{行|い}きますか？', pt: 'Gawin, no domingo tem a Festa Tailandesa no Parque Sakura, né? Você vai?' },
        { speaker: 'B', ja: 'はい、{行|い}きます。', pt: 'Sim, vou.' },
        { speaker: 'A', ja: '{楽|たの}しみですね。', pt: 'Mal posso esperar, né.' },
        { speaker: 'B', ja: 'そうですね。', pt: 'Pois é.' },
      ],
    },
  ],
  '12-06': [
    {
      label: '会話② (12-06)',
      lines: [
        { speaker: 'A', ja: '{内山|うちやま}さん、{来週|らいしゅう}、{夏祭|なつまつ}りがありますね。', pt: 'Uchiyama, na próxima semana tem o festival de verão, né.' },
        { speaker: 'B', ja: 'そうですね。', pt: 'Pois é.' },
        { speaker: 'A', ja: '{内山|うちやま}さんは、{行|い}きますか？', pt: 'Você vai, Uchiyama?' },
        { speaker: 'B', ja: 'いえ、{行|い}きません。{仕事|しごと}です。', pt: 'Não, não vou. Vou trabalhar.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '12-07': [
    {
      label: '会話③ (12-07)',
      lines: [
        { speaker: 'A', ja: 'マヤさん、8{日|か}に、{交流|こうりゅう}パーティーがありますね。', pt: 'Maya, no dia 8 tem a festa de intercâmbio, né.' },
        { speaker: 'B', ja: 'へー、そうですか。どこでありますか？', pt: 'Ah é? Onde vai ser?' },
        { speaker: 'A', ja: '{会社|かいしゃ}のホールです。', pt: 'No salão da empresa.' },
        { speaker: 'B', ja: 'ふーん。', pt: 'Hum.' },
        { speaker: 'A', ja: 'マヤさんは、{行|い}きますか？', pt: 'Você vai, Maya?' },
        { speaker: 'B', ja: 'ああ、まだわかりません。', pt: 'Ah, ainda não sei.' },
      ],
    },
  ],
  '12-08': [
    {
      label: '会話④ (12-08)',
      lines: [
        { speaker: 'A', ja: 'アントニオさん、{今週|こんしゅう}の{金曜日|きんようび}、ミルコさんの{空手|からて}の{試合|しあい}に{行|い}きますか？', pt: 'Antônio, nesta sexta você vai à luta de caratê do Mirko?' },
        { speaker: 'B', ja: 'もちろん、{行|い}きます。', pt: 'Claro que vou.' },
        { speaker: 'A', ja: '{私|わたし}も{行|い}きます。{楽|たの}しみですね。', pt: 'Eu também vou. Mal posso esperar, né.' },
        { speaker: 'B', ja: 'そうですね。', pt: 'Pois é.' },
      ],
    },
  ],
  '12-09': [
    {
      label: '会話⑤ (12-09)',
      lines: [
        { speaker: 'A', ja: '{梁|リョウ}さん、{明日|あした}の{忘年会|ぼうねんかい}に{行|い}きますか？', pt: 'Liang, você vai à festa de fim de ano amanhã?' },
        { speaker: 'B', ja: 'ああ、{私|わたし}は{行|い}きません。', pt: 'Ah, eu não vou.' },
        { speaker: 'A', ja: 'そうですか。{残念|ざんねん}です。', pt: 'Ah é? Que pena.' },
      ],
    },
  ],
  '12-14': [
    {
      label: '会話① (12-14)',
      setupJa: '{4人|よにん}の{人|ひと}が、{職場|しょくば}の{同僚|どうりょう}を{誘|さそ}っています。',
      setupPt: 'Quatro pessoas convidam um colega de trabalho.',
      lines: [
        { speaker: 'A', ja: '{今週|こんしゅう}、みんなで、ハイキングに{行|い}きます。アリナさんも、いっしょに{行|い}きませんか？', pt: 'Esta semana vamos todos fazer uma trilha. Alina, você não quer vir junto?' },
        { speaker: 'B', ja: 'どこですか？', pt: 'Onde é?' },
        { speaker: 'A', ja: '{六甲山|ろっこうさん}です。', pt: 'No monte Rokko.' },
        { speaker: 'B', ja: 'いいですね。いつですか？', pt: 'Que legal. Quando é?' },
        { speaker: 'A', ja: '{今度|こんど}の{土曜日|どようび}です。', pt: 'No próximo sábado.' },
        { speaker: 'B', ja: 'あさってですか？　だいじょうぶです。', pt: 'Depois de amanhã? Tudo certo, posso.' },
        { speaker: 'A', ja: 'じゃあ、{行|い}きましょう。', pt: 'Então vamos!' },
      ],
    },
  ],
  '12-15': [
    {
      label: '会話② (12-15)',
      lines: [
        { speaker: 'A', ja: 'ソリヤさん、みんなで、いっしょに{焼肉|やきにく}を{食|た}べに{行|い}きませんか？　マーヒルさんも、ジョバ{二|ニ}さんも{行|い}きますよ。', pt: 'Soriya, não quer ir comer yakiniku com a gente? O Mahir e o Giovani também vão.' },
        { speaker: 'B', ja: 'いいですね。いつですか？', pt: 'Que bom. Quando é?' },
        { speaker: 'A', ja: '14{日|か}です。', pt: 'No dia 14.' },
        { speaker: 'B', ja: '{来週|らいしゅう}の{火曜日|かようび}ですね。{火曜日|かようび}はちょっと……。すみません。', pt: 'É a terça da próxima semana, né. Terça para mim não dá muito… Desculpa.' },
        { speaker: 'A', ja: 'そうですか。じゃあ、また{今度|こんど}{行|い}きましょう。', pt: 'Ah é? Então fica para uma próxima.' },
      ],
    },
  ],
  '12-16': [
    {
      label: '会話③ (12-16)',
      lines: [
        { speaker: 'A', ja: 'アニタさん、{明日|あした}の{夜|よる}、さくらプラザで{映画|えいが}があります。いっしょに{見|み}に{行|い}きませんか？', pt: 'Anita, amanhã à noite tem um filme no Sakura Plaza. Não quer ir assistir junto?' },
        { speaker: 'B', ja: '{明日|あした}ですか？　いいですね。{何|なん}の{映画|えいが}ですか？', pt: 'Amanhã? Que legal. Qual é o filme?' },
        { speaker: 'A', ja: '「{男|おとこ}はつらいよ」です。', pt: 'É “Otoko wa Tsurai yo”.' },
        { speaker: 'B', ja: 'ふーん。{何時|なんじ}からですか？', pt: 'Hum. A partir de que horas?' },
        { speaker: 'A', ja: '7{時半|じはん}からです。', pt: 'A partir das 7h30.' },
        { speaker: 'B', ja: '7{時半|じはん}、だいじょうぶです。', pt: '7h30, tudo certo.' },
        { speaker: 'A', ja: 'じゃあ、いっしょに{行|い}きましょう。', pt: 'Então vamos juntos.' },
      ],
    },
  ],
  '12-17': [
    {
      label: '会話④ (12-17)',
      lines: [
        { speaker: 'A', ja: '{洪|コウ}さん、いっしょに{飲|の}みに{行|い}きませんか？', pt: 'Hong, não quer sair para beber comigo?' },
        { speaker: 'B', ja: 'いつですか？', pt: 'Quando?' },
        { speaker: 'A', ja: '{今晩|こんばん}です。', pt: 'Hoje à noite.' },
        { speaker: 'B', ja: '{今日|きょう}？　すみません、{今日|きょう}はだめです。', pt: 'Hoje? Desculpa, hoje não dá.' },
        { speaker: 'A', ja: 'そうですか。じゃあ、また{今度|こんど}。', pt: 'Ah é? Então fica para a próxima.' },
      ],
    },
  ],
}

const lesson12: Section = {
  id: 'lesson-12',
  level: 'starter',
  titleJa: '第12課 いっしょに飲みに行きませんか？',
  titlePt: 'Lição 12 — Vamos sair para beber juntos?',
  summaryPt: 'O que eu gosto de fazer · ler um aviso de evento e achar data/hora/lugar (【日時】に【場所】で〜があります), dizer datas (meses e dias, com as leituras especiais), perguntar se alguém vai a um evento (Nに行きます), convidar (V-ませんか？), combinar de fazer junto (V-ましょう) e dizer o objetivo de sair (V-に行きます: 飲みに行く, 食べに行く).',
  studyNotes: [
    {
      title: 'Tópico: O que eu gosto de fazer',
      bodyPt:
        '## Can-do\n' +
        '- Ler um aviso de evento e achar a informação importante (data, hora, lugar).\n' +
        '- Perguntar e responder se você vai a um evento.\n' +
        '- Convidar alguém e responder a convites; dizer quando está livre ou não.\n' +
        '- Responder a uma mensagem de amigo com um convite.',
    },
    {
      title: 'Aviso de evento · datas (Seção 1)',
      bodyPt:
        'Num **aviso** ({お知|しらせ}), procure os campos:\n\n' +
        '- {日時|にちじ} = data e hora · {場所|ばしょ}／{会場|かいじょう} = local · {入場料|にゅうじょうりょう} 〜{円|えん} = ingresso · {入場無料|にゅうじょうむりょう} = entrada grátis.\n' +
        '- Locais: {広場|ひろば} (praça), ホール (salão), {駐車場|ちゅうしゃじょう} (estacionamento). Tipos: {夏祭|なつまつ}り (festival de verão), {交流|こうりゅう} (intercâmbio), バーベキュー (churrasco), フェスティバル.\n\n' +
        '**Meses** ({何月|なんがつ}): regulares いちがつ〜じゅうにがつ, mas ⚠️ 4{月|がつ}=**し**がつ, 7{月|がつ}=**しち**がつ, 9{月|がつ}=**く**がつ.\n\n' +
        '**Dias** ({何日|なんにち}) — leituras especiais de 1 a 10 e mais: 1{日|ついたち}, 2{日|ふつか}, 3{日|みっか}, 4{日|よっか}, 5{日|いつか}, 6{日|むいか}, 7{日|なのか}, 8{日|ようか}, 9{日|ここのか}, 10{日|とおか}, 14{日|にち}=じゅう**よっか**, 20{日|にち}=**はつか**, 24{日|にち}=にじゅう**よっか**. O resto é regular (〜にち).',
    },
    {
      title: 'Quando e onde acontece: 【日時】に【場所】で〜があります (➊)',
      bodyPt:
        'Para dizer **quando** e **onde** um evento acontece:\n\n' +
        '`{日曜日|にちようび}に、さくら{公園|こうえん}でタイフェスティバルがありますね。` = no domingo tem a Festa Tailandesa no Parque Sakura.\n\n' +
        '- **に** marca a data/hora: `{日曜日|にちようび}に`, `12{月|がつ}20{日|か}に`, `7{時|じ}に`.\n' +
        '- **で** marca o lugar do evento: `さくら{公園|こうえん}で`.\n\n' +
        '⚠️ Na fala, o **に** pode ser omitido. E palavras como {明日|あした}, {今晩|こんばん}, {来週|らいしゅう} **não** levam に.',
    },
    {
      title: 'で × に para lugar · Nに行きます (➋)',
      bodyPt:
        'A partícula de **lugar** depende do verbo:\n\n' +
        '| partícula | uso | exemplo |\n|---|---|---|\n' +
        '| に | permanência / existência | {東京|とうきょう}に{住|す}む · {食堂|しょくどう}にあります |\n' +
        '| で | ação / evento | {公園|こうえん}でサッカーをします · {中央公園|ちゅうおうこうえん}で{夏祭|なつまつ}りがあります |\n\n' +
        '**Nに{行|い}きます** = ir a (objetivo). O **に** liga um substantivo de ação/evento ao verbo {行|い}く:\n\n' +
        '`{明日|あした}の{忘年会|ぼうねんかい}に{行|い}きますか？` · também {買|か}い{物|もの}に, {散歩|さんぽ}に, {映画|えいが}に, パーティーに, {試合|しあい}に.',
    },
    {
      title: 'Convidar: V-ませんか？ (➌)',
      bodyPt:
        'Para **convidar** alguém, troque o ます da forma-マス por **ませんか？** (entonação subindo):\n\n' +
        '`いっしょに{行|い}きませんか？` = vamos juntos? / não quer ir?\n\n' +
        '- `これから、{昼|ひる}ご{飯|はん}に{行|い}きます。いっしょに{行|い}きませんか？` → {いいですね。}\n' +
        '- `{日曜日|にちようび}、いっしょに{買|か}い{物|もの}に{行|い}きませんか？` → recusa educada: `すみません。{日曜日|にちようび}はちょっと…。`\n\n' +
        '💡 Nesta lição o foco é a frase {行|い}きませんか？.',
    },
    {
      title: 'Combinar / propor: V-ましょう (➍)',
      bodyPt:
        '**〜ましょう** = vamos ~ (proposta de fazer algo junto). Serve para:\n\n' +
        '- **Confirmar** que vão juntos após um convite: `いいですね。{行|い}きましょう。`\n' +
        '- **Propor outra ocasião** quando recusam: `じゃあ、また{今度|こんど}{行|い}きましょう。`\n\n' +
        'Também incentiva o outro a agir: {始|はじ}めましょう (vamos começar), ちょっと、{休|やす}みましょう (vamos descansar um pouco).',
    },
    {
      title: 'Objetivo com verbo: V-に行きます (➎)',
      bodyPt:
        'Para dizer **o que vai fazer** ao ir a algum lugar, use **【V-stem】に{行|い}きます**. Tire o ます da forma-マス e ponha に:\n\n' +
        '- {食|た}べに{行|い}く (ir comer) · {見|み}に{行|い}く (ir ver) · {聞|き}きに{行|い}く (ir ouvir/assistir).\n' +
        '- **{飲|の}みに{行|い}く** = sair para beber (ir a um bar/izakaya). → título da lição.\n\n' +
        '`みんなで、いっしょに{焼肉|やきにく}を{食|た}べに{行|い}きませんか？` = não querem ir comer yakiniku todos juntos?\n\n' +
        '📌 É como o **Nに{行|い}きます** da nota ➋, mas o N vira uma expressão verbal. Kanji do dia: 〜{年|ねん}, 〜{月|がつ}, 〜{日|にち}, {今日|きょう}, {今週|こんしゅう}, {今度|こんど}.',
    },
  ],
  groups: [lesson12Group],
  audios: attachScripts(12, L12_SCRIPTS),
}

const lesson13Group: ExerciseGroup = {
  id: 'iro-s-l13',
  title: 'このバスは空港に行きますか？',
  subtitlePt: 'Transporte, destino, estações, meios e tempo de deslocamento',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l13-1', number: 1, prompt: '「{電車|でんしゃ}」 é:', choices: [{ n: 1, text: 'trem' }, { n: 2, text: 'ônibus' }, { n: 3, text: 'táxi' }, { n: 4, text: 'navio' }], answer: 1, explanationPt: 'Meios de transporte ({乗|の}り{物|もの}): {電車|でんしゃ} (trem), バス (ônibus), タクシー (táxi), {地下鉄|ちかてつ} (metrô), {飛行機|ひこうき} (avião), {船|ふね} (navio). (Seção 1)' },
    { id: 'iro-s-l13-2', number: 2, prompt: '「{地下鉄|ちかてつ}」 é:', choices: [{ n: 1, text: 'metrô' }, { n: 2, text: 'bicicleta' }, { n: 3, text: 'avião' }, { n: 4, text: 'navio' }], answer: 1, explanationPt: '{地下鉄|ちかてつ} = metrô (lit. “ferrovia subterrânea”). Outros: {自転車|じてんしゃ} (bicicleta), バイク (moto), {車|くるま} (carro). (Seções 1 e 3)' },
    { id: 'iro-s-l13-3', number: 3, prompt: 'Para “pegar/embarcar em um meio de transporte” usa-se o verbo:', choices: [{ n: 1, text: '{乗|の}る → 〜に{乗|の}ります' }, { n: 2, text: '{降|お}りる → 〜に{降|お}ります' }, { n: 3, text: '{歩|ある}く → 〜を{歩|ある}きます' }, { n: 4, text: '{行|い}く → 〜を{行|い}きます' }], answer: 1, explanationPt: '{乗|の}る (embarcar) usa **に**: バスに{乗|の}ります. (Nota ➎)' },
    { id: 'iro-s-l13-4', number: 4, prompt: 'Em 「このバスは{空港|くうこう}（　）{行|い}きますか？」, a lacuna (destino) é:', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'で' }, { n: 3, text: 'を' }, { n: 4, text: 'は' }], answer: 1, translationPt: 'Este ônibus vai ao aeroporto?', explanationPt: 'O **に** de {空港|くうこう}に marca o **destino** ({目的地|もくてきち}) do veículo. Estrutura: この【veículo】は【lugar】に{行|い}きますか？ (Nota ➊)' },
    { id: 'iro-s-l13-5', number: 5, prompt: 'O 「この」 de 「このバス」 é um:', choices: [{ n: 1, text: 'demonstrativo: “este(a)” (algo diante de você)' }, { n: 2, text: 'verbo' }, { n: 3, text: 'interrogativo' }, { n: 4, text: 'advérbio de tempo' }], answer: 1, explanationPt: 'この + N = este N (algo à sua frente): このバス, この{電車|でんしゃ}. (Nota ➊)' },
    { id: 'iro-s-l13-6', number: 6, prompt: 'Dentro do trem, para perguntar “onde estou agora?” e “a próxima é ~?”, usa-se:', choices: [{ n: 1, text: 'ここはどこですか？ (lugar atual) / {次|つぎ}は〜ですか？ (próxima parada)' }, { n: 2, text: 'sempre {次|つぎ}' }, { n: 3, text: 'sempre ここ' }, { n: 4, text: 'どうやって / {何|なに}で' }], answer: 1, explanationPt: 'ここ = onde estou agora; {次|つぎ} = próxima parada/estação. Ex.: {次|つぎ}は、{浦田|うらた}ですか？ (Nota ➋)' },
    { id: 'iro-s-l13-7', number: 7, prompt: 'No anúncio do trem, 「{終点|しゅうてん}」 significa:', choices: [{ n: 1, text: 'ponto final (última estação)' }, { n: 2, text: 'próxima estação' }, { n: 3, text: 'baldeação' }, { n: 4, text: 'saída' }], answer: 1, explanationPt: '{終点|しゅうてん} = estação final. Outros termos: (お){乗|の}り{換|か}え (baldeação), (お){出口|でぐち} (saída), {右側|みぎがわ} (lado direito). (Seção 2)' },
    { id: 'iro-s-l13-8', number: 8, prompt: 'A diferença entre 「{快速|かいそく}」 e 「{各駅停車|かくえきていしゃ}（{各停|かくてい}）」 é:', choices: [{ n: 1, text: '{快速|かいそく} = expresso (não para em todas); {各駅停車|かくえきていしゃ} = para em todas as estações' }, { n: 2, text: '{快速|かいそく} para em todas; {各停|かくてい} é expresso' }, { n: 3, text: 'são a mesma coisa' }, { n: 4, text: '{快速|かいそく} é ônibus; {各停|かくてい} é trem' }], answer: 1, explanationPt: '{快速|かいそく} = rápido/expresso (pula estações); {各駅停車|かくえきていしゃ} (各停) = para em todas. No áudio 13-07, o {快速|かいそく} não para em {東新宿|ひがししんじゅく}. (Seção 1)' },
    { id: 'iro-s-l13-9', number: 9, prompt: '「7{番線|ばんせん}」 indica:', choices: [{ n: 1, text: 'a plataforma/linha nº 7 (de onde sai o trem)' }, { n: 2, text: 'o ônibus nº 7' }, { n: 3, text: '7 horas' }, { n: 4, text: 'a saída 7' }], answer: 1, explanationPt: '〜{番線|ばんせん} = plataforma/via nº ~. Para ônibus: 〜{番|ばん}のバス; para barco: 〜{番|ばん}{乗|の}り{場|ば} (atracadouro nº ~). (Seção 1)' },
    { id: 'iro-s-l13-10', number: 10, prompt: 'Para dizer o MEIO de transporte (“venho de moto”), usa-se:', choices: [{ n: 1, text: 'バイクで{来|き}ます (partícula で)' }, { n: 2, text: 'バイクに{来|き}ます' }, { n: 3, text: 'バイクを{来|き}ます' }, { n: 4, text: 'バイクへ{来|き}ます' }], answer: 1, explanationPt: 'O meio/método leva **で**: バイクで, {電車|でんしゃ}で, {車|くるま}で. (Nota ➌)' },
    { id: 'iro-s-l13-11', number: 11, prompt: 'Para dizer “venho a pé”, a forma correta é:', choices: [{ n: 1, text: '{歩|ある}いて{来|き}ます (forma-テ de {歩|ある}く)' }, { n: 2, text: '{歩|ある}きで{来|き}ます' }, { n: 3, text: '{足|あし}で{来|き}ます' }, { n: 4, text: '{歩|ある}くで{来|き}ます' }], answer: 1, explanationPt: 'A pé é exceção: usa a forma-テ {歩|ある}いて{来|き}ます (não で). (Nota ➌)' },
    { id: 'iro-s-l13-12', number: 12, prompt: 'Para perguntar o MEIO de transporte, usa-se:', choices: [{ n: 1, text: 'どうやって / {何|なに}で（{来|き}ますか／{行|い}きますか）' }, { n: 2, text: 'どのぐらい' }, { n: 3, text: 'いつ' }, { n: 4, text: 'いくら' }], answer: 1, explanationPt: 'どうやって (como?) / {何|なに}で (com o quê?). Para o trajeto a um lugar: どうやって{行|い}きますか？ (Nota ➌)' },
    { id: 'iro-s-l13-13', number: 13, prompt: 'A partícula 「で」 tem dois usos no Starter. São:', choices: [{ n: 1, text: 'lugar da ação ({公園|こうえん}で) e meio/método (バスで)' }, { n: 2, text: 'destino e tempo' }, { n: 3, text: 'companhia e posse' }, { n: 4, text: 'existência e permanência' }], answer: 1, explanationPt: 'で = lugar de ação ({公園|こうえん}でテニスをします) **e** meio/método ({家|いえ}から{会社|かいしゃ}までバスで{来|き}ます). (Quadro ◆ で)' },
    { id: 'iro-s-l13-14', number: 14, prompt: 'Para dizer quanto tempo leva (“leva 1h30”), usa-se o verbo:', choices: [{ n: 1, text: 'かかります → 1{時間半|じかんはん}かかります' }, { n: 2, text: 'あります' }, { n: 3, text: 'します' }, { n: 4, text: 'います' }], answer: 1, explanationPt: 'かかります (de かかる) = leva/custa (tempo ou dinheiro). Dá para simplificar com です: 10{分|ぷん}ぐらいです. (Nota ➍)' },
    { id: 'iro-s-l13-15', number: 15, prompt: 'A diferença entre 「〜{時|じ}」 e 「〜{時間|じかん}」 é:', choices: [{ n: 1, text: '〜{時|じ} = hora do relógio (7{時|じ}=7h); 〜{時間|じかん} = duração (2{時間|じかん}=2 horas)' }, { n: 2, text: 'são iguais' }, { n: 3, text: '〜{時|じ} = duração; 〜{時間|じかん} = hora' }, { n: 4, text: '〜{時|じ} = minutos; 〜{時間|じかん} = horas' }], answer: 1, explanationPt: '〜{時|じ} marca o horário; 〜{時間|じかん} marca a duração. Já 〜{分|ふん} serve para os dois (7{時|じ}10{分|ぷん} e 10{分|ぷん}かかります). (Nota ➍)' },
    { id: 'iro-s-l13-16', number: 16, prompt: '「どのぐらい、かかりますか？」 pergunta:', choices: [{ n: 1, text: 'quanto tempo leva (どのぐらい = quanto/aprox.)' }, { n: 2, text: 'quanto custa' }, { n: 3, text: 'que horas são' }, { n: 4, text: 'onde fica' }], answer: 1, explanationPt: 'どのぐらい／どのくらい = quanto (tempo). E o ぐらい de 30{分|ぷん}ぐらい = “mais ou menos, cerca de”. (Nota ➍)' },
    { id: 'iro-s-l13-17', number: 17, prompt: 'Em 「12{番|ばん}のバス（　）{乗|の}ります」 (embarco no ônibus 12), a lacuna é:', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'を' }, { n: 3, text: 'で' }, { n: 4, text: 'へ' }], answer: 1, explanationPt: '{乗|の}る usa **に**: 〜に{乗|の}ります. (Nota ➎)' },
    { id: 'iro-s-l13-18', number: 18, prompt: 'Em 「バスセンターで、バス（　）{降|お}ります」 (desço do ônibus), a lacuna é:', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'に' }, { n: 3, text: 'で' }, { n: 4, text: 'が' }], answer: 1, explanationPt: '{降|お}りる (descer/saltar) usa **を**: 〜を{降|お}ります. O lugar onde embarca/desce leva で: バスセンターで. (Nota ➎)' },
    { id: 'iro-s-l13-19', number: 19, prompt: '「{乗|の}り{換|か}える」 significa:', choices: [{ n: 1, text: 'fazer baldeação / trocar de linha' }, { n: 2, text: 'descer' }, { n: 3, text: 'comprar bilhete' }, { n: 4, text: 'esperar' }], answer: 1, explanationPt: '{乗|の}り{換|か}える = trocar de veículo/linha → 〜に{乗|の}り{換|か}えます ({東西線|とうざいせん}に{乗|の}り{換|か}えます). (Seção 4 · Nota ➎)' },
    { id: 'iro-s-l13-20', number: 20, prompt: '「ここから{新|しん}みなと{駅|えき}まで」 expressa:', choices: [{ n: 1, text: 'de um ponto a outro: から (de) … まで (até)' }, { n: 2, text: 'companhia: com … e …' }, { n: 3, text: 'tempo: das … às …' }, { n: 4, text: 'escolha: ou … ou …' }], answer: 1, explanationPt: '【lugar】から【lugar】まで = de … até … (trecho). Ex.: {空港|くうこう}からホテルまで. (Nota ❻)' },
    { id: 'iro-s-l13-21', number: 21, prompt: 'A partícula 「に」 tem VÁRIOS usos no Starter. Qual lista está correta?', choices: [{ n: 1, text: 'permanência ({住|す}む), existência (ある/いる), tempo (7{時|じ}に), objetivo ({試合|しあい}に{行|い}く), destino ({空港|くうこう}に{行|い}く)' }, { n: 2, text: 'só destino' }, { n: 3, text: 'só meio de transporte' }, { n: 4, text: 'só tempo' }], answer: 1, explanationPt: 'に é multiuso: {東京|とうきょう}に{住|す}む, {食堂|しょくどう}にいます, 7{時|じ}に{起|お}きます, {忘年会|ぼうねんかい}に{行|い}く, このバスは{空港|くうこう}に{行|い}きます. (Quadro ◆ に)' },
    { id: 'iro-s-l13-22', number: 22, prompt: 'Placas de estação: relacione 「{東口|ひがしぐち}」 / 「{改札|かいさつ}」 / 「{待合室|まちあいしつ}」:', choices: [{ n: 1, text: '{東口|ひがしぐち} = saída leste; {改札|かいさつ} = catraca/portão de bilhetes; {待合室|まちあいしつ} = sala de espera' }, { n: 2, text: '{東口|ひがしぐち} = catraca; {改札|かいさつ} = saída; {待合室|まちあいしつ} = plataforma' }, { n: 3, text: 'as três = saídas' }, { n: 4, text: '{東口|ひがしぐち} = elevador; {改札|かいさつ} = escada; {待合室|まちあいしつ} = banheiro' }], answer: 1, explanationPt: 'Saídas: {東口|ひがしぐち}/{西口|にしぐち}/{南口|みなみぐち}/{北口|きたぐち}. Mais: {改札|かいさつ} (catraca), {待合室|まちあいしつ} (sala de espera), バス{乗|の}り{場|ば} (ponto de ônibus). (Seção 5)' },
    { id: 'iro-s-l13-23', number: 23, prompt: 'Diálogo 13-04: o ônibus vai ao {市民病院|しみんびょういん}?', context: 'A：このバスは、{市民病院|しみんびょういん}に{行|い}きますか？ B：このバスは{行|い}きません。{市民病院|しみんびょういん}は23{番|ばん}のバスです。', choices: [{ n: 1, text: 'Não — para o hospital é o ônibus nº 23' }, { n: 2, text: 'Sim, é este mesmo' }, { n: 3, text: 'Sim, é o nº 7' }, { n: 4, text: 'Não há ônibus para lá' }], answer: 1, explanationPt: 'B: este ônibus não vai; o do hospital é o 23{番|ばん}のバス (ônibus nº 23).' },
    { id: 'iro-s-l13-24', number: 24, prompt: 'Diálogo 13-22: como o Yogi vai ao trabalho e quanto leva?', context: '{片山|かたやま}：ヨギさんは、{家|いえ}から{会社|かいしゃ}まで、どうやって{来|き}ますか？ ヨギ：バイクで{来|き}ます。…10{分|ぷん}ぐらいです。', choices: [{ n: 1, text: 'De moto, uns 10 minutos' }, { n: 2, text: 'De trem, 1h30' }, { n: 3, text: 'A pé, 1 hora' }, { n: 4, text: 'De bicicleta, 20 minutos' }], answer: 1, explanationPt: 'ヨギ: バイクで{来|き}ます (de moto), 10{分|ぷん}ぐらい (~10 min). (Compare: {片山|かたやま} {電車|でんしゃ} 1{時間半|じかんはん}; トゥイ ときどき{歩|ある}いて 1{時間|じかん}.)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 13 (聴解スクリプト)
const L13_SCRIPTS: Record<string, ScriptItem[]> = {
  '13-03': [
    {
      label: '会話① (13-03)',
      setupJa: '{5人|ごにん}の{人|ひと}が、{乗|の}り{物|もの}の{行|い}き{先|さき}を{質問|しつもん}しています。',
      setupPt: 'Cinco pessoas perguntam para onde vai um meio de transporte.',
      lines: [
        { speaker: 'A', ja: 'すみません。このバスは、{空港|くうこう}に{行|い}きますか？', pt: 'Com licença. Este ônibus vai ao aeroporto?' },
        { speaker: 'B', ja: 'ええ、{行|い}きますよ。', pt: 'Vai, sim.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '13-04': [
    {
      label: '会話② (13-04)',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。このバスは、{市民病院|しみんびょういん}に{行|い}きますか？', pt: 'Ah, com licença. Este ônibus vai ao hospital municipal?' },
        { speaker: 'B', ja: 'このバスは{行|い}きません。{市民病院|しみんびょういん}は23{番|ばん}のバスです。', pt: 'Este ônibus não vai. Para o hospital municipal é o ônibus nº 23.' },
        { speaker: 'A', ja: '23{番|ばん}ですね。わかりました。', pt: 'O nº 23, né. Entendi.' },
      ],
    },
  ],
  '13-05': [
    {
      label: '会話③ (13-05)',
      lines: [
        { speaker: 'A', ja: 'すみません。この{電車|でんしゃ}は、{大阪駅|おおさかえき}に{行|い}きますか？', pt: 'Com licença. Este trem vai à estação de Osaka?' },
        { speaker: 'B', ja: '{大阪|おおさか}は{反対側|はんたいがわ}です。7{番線|ばんせん}。', pt: 'Osaka é do lado oposto. Plataforma 7.' },
        { speaker: 'A', ja: 'え、{何番線|なんばんせん}ですか？', pt: 'Ahn, qual plataforma?' },
        { speaker: 'B', ja: '7{番線|ばんせん}です。', pt: 'É a plataforma 7.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '13-06': [
    {
      label: '会話④ (13-06)',
      lines: [
        { speaker: 'A', ja: 'すみません。この{船|ふね}は、{黒島|くろしま}に{行|い}きますか？', pt: 'Com licença. Este navio vai para a ilha Kuroshima?' },
        { speaker: 'B', ja: 'いえ、{黒島|くろしま}は、この{先|さき}、5{番|ばん}{乗|の}り{場|ば}です。', pt: 'Não, para Kuroshima é mais adiante, no atracadouro nº 5.' },
        { speaker: 'A', ja: 'あ、わかりました。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '13-07': [
    {
      label: '会話⑤ (13-07)',
      lines: [
        { speaker: 'A', ja: 'あのう、この{電車|でんしゃ}は、{東新宿|ひがししんじゅく}に{行|い}きますか？', pt: 'Ah, este trem vai para Higashi-Shinjuku?' },
        { speaker: 'B', ja: 'あ、これは{東新宿|ひがししんじゅく}には{止|と}まりません。{快速|かいそく}ですから。{各停|かくてい}に{乗|の}ってください。', pt: 'Ah, este não para em Higashi-Shinjuku, porque é o expresso. Pegue o trem que para em todas as estações.' },
        { speaker: 'A', ja: 'かくてい？', pt: 'Kakutei?' },
        { speaker: 'B', ja: '{各駅停車|かくえきていしゃ}です。{次|つぎ}の{電車|でんしゃ}。', pt: 'O “para em todas as estações”. O próximo trem.' },
        { speaker: 'A', ja: 'あ、はい。', pt: 'Ah, sim.' },
      ],
    },
  ],
  '13-11': [
    {
      label: '会話① (13-11)',
      setupJa: '{5人|ごにん}の{人|ひと}が、{電車|でんしゃ}の{中|なか}で{車内放送|しゃないほうそう}を{聞|き}いて、{近|ちか}くの{人|ひと}に{質問|しつもん}しています。',
      setupPt: 'Cinco pessoas, dentro do trem, ouvem o anúncio e perguntam a alguém ao lado.',
      lines: [
        { speaker: 'Anúncio', ja: 'さきやま{新都心|しんとしん}、さきやま{新都心|しんとしん}です。', pt: 'Sakiyama-Shintoshin, estação Sakiyama-Shintoshin.' },
        { speaker: 'A', ja: 'すみません。ここは、さきやま{新都心|しんとしん}ですか？', pt: 'Com licença. Aqui é Sakiyama-Shintoshin?' },
        { speaker: 'B', ja: 'はい、そうです。', pt: 'Sim, é isso.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '13-12': [
    {
      label: '会話② (13-12)',
      lines: [
        { speaker: 'Anúncio', ja: '{黒羽|くろばね}〜、{黒羽|くろばね}です。', pt: 'Kurobane, estação Kurobane.' },
        { speaker: 'A', ja: 'すみません。ここは、どこですか？', pt: 'Com licença. Que estação é esta?' },
        { speaker: 'B', ja: 'え？　ああ、{黒羽|くろばね}です。', pt: 'Ahn? Ah, é Kurobane.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Obrigado.' },
      ],
    },
  ],
  '13-13': [
    {
      label: '会話③ (13-13)',
      lines: [
        { speaker: 'Anúncio', ja: '{終点|しゅうてん}、{本宮|ほんみや}です。お{忘|わす}れ{物|もの}のないよう、お{降|お}りください。', pt: 'Ponto final, estação Honmiya. Por favor, desçam sem esquecer seus pertences.' },
        { speaker: 'A', ja: 'すみません。{今|いま}、どこですか？', pt: 'Com licença. Onde estamos agora?' },
        { speaker: 'B', ja: '{本宮|ほんみや}です。{終点|しゅうてん}ですよ。', pt: 'É Honmiya. É o ponto final.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Obrigado.' },
      ],
    },
  ],
  '13-14': [
    {
      label: '会話④ (13-14)',
      lines: [
        { speaker: 'Anúncio', ja: '{次|つぎ}は{沢口|さわぐち}、{沢口|さわぐち}です。', pt: 'A próxima é Sawaguchi, estação Sawaguchi.' },
        { speaker: 'A', ja: 'あのう、{次|つぎ}は、どこですか？', pt: 'Ah, qual é a próxima estação?' },
        { speaker: 'B', ja: '{沢口|さわぐち}です。', pt: 'É Sawaguchi.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Obrigado.' },
      ],
    },
  ],
  '13-15': [
    {
      label: '会話⑤ (13-15)',
      lines: [
        { speaker: 'Anúncio', ja: '{次|つぎ}は、{南浦田|みなみうらた}です。{武蔵山線|むさしやません}はお{乗|の}り{換|か}えです。お{出口|でぐち}は{右側|みぎがわ}です。', pt: 'A próxima é Minami-Urata. Baldeação para a Linha Musashiyama. A saída é do lado direito.' },
        { speaker: 'A', ja: 'あのう、すみません。{次|つぎ}は、{浦田|うらた}ですか？', pt: 'Ah, com licença. A próxima é Urata?' },
        { speaker: 'B', ja: 'いえ、{次|つぎ}は、{南浦田|みなみうらた}です。{浦田|うらた}は、{南浦田|みなみうらた}の{次|つぎ}です。', pt: 'Não, a próxima é Minami-Urata. Urata é depois de Minami-Urata.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Obrigado.' },
      ],
    },
  ],
  '13-22': [
    {
      label: '会話① (13-22)',
      setupJa: '{会社|かいしゃ}の{休|やす}み{時間|じかん}に、ヨギさん、{片山|かたやま}さん、{小西|こにし}さん、トゥイさんの{4人|よにん}が、{通勤手段|つうきんしゅだん}について{話|はな}しています。',
      setupPt: 'No intervalo do trabalho, Yogi, Katayama, Konishi e Thuy falam sobre como vão ao trabalho.',
      lines: [
        { speaker: '片山', ja: 'ヨギさんは、{家|いえ}から{会社|かいしゃ}まで、どうやって{来|き}ますか？', pt: 'Yogi, como você vem de casa ao trabalho?' },
        { speaker: 'ヨギ', ja: 'バイクで{来|き}ます。', pt: 'Venho de moto.' },
        { speaker: '片山', ja: 'へー、どのぐらい、かかりますか？', pt: 'Ah, e quanto tempo leva?' },
        { speaker: 'ヨギ', ja: '10{分|ぷん}ぐらいです。', pt: 'Uns 10 minutos.' },
        { speaker: '片山', ja: 'そうですか。', pt: 'Ah é.' },
      ],
    },
  ],
  '13-23': [
    {
      label: '会話② (13-23)',
      lines: [
        { speaker: 'ヨギ', ja: '{片山|かたやま}さんは？', pt: 'E você, Katayama?' },
        { speaker: '片山', ja: '{私|わたし}は、{電車|でんしゃ}です。1{時間半|じかんはん}かかります。', pt: 'Eu vou de trem. Leva 1 hora e meia.' },
        { speaker: 'ヨギ', ja: '{大変|たいへん}ですね。', pt: 'Que sufoco, hein.' },
      ],
    },
  ],
  '13-24': [
    {
      label: '会話③ (13-24)',
      lines: [
        { speaker: 'ヨギ', ja: '{小西|こにし}さんは、{家|いえ}から{会社|かいしゃ}まで、{何|なに}で{来|き}ますか？', pt: 'Konishi, com o que você vem de casa ao trabalho?' },
        { speaker: '小西', ja: '{私|わたし}は、{自転車|じてんしゃ}で{来|き}ます。でも、{雨|あめ}の{日|ひ}は{車|くるま}です。', pt: 'Eu venho de bicicleta. Mas em dia de chuva, de carro.' },
        { speaker: 'ヨギ', ja: 'どのぐらい、かかりますか？', pt: 'Quanto tempo leva?' },
        { speaker: '小西', ja: '{自転車|じてんしゃ}で20{分|ぷん}、{車|くるま}で5{分|ふん}です。', pt: 'De bicicleta 20 minutos, de carro 5 minutos.' },
        { speaker: 'ヨギ', ja: 'そうですか。', pt: 'Ah é.' },
      ],
    },
  ],
  '13-25': [
    {
      label: '会話④ (13-25)',
      lines: [
        { speaker: 'ヨギ', ja: 'トゥイさんは？', pt: 'E você, Thuy?' },
        { speaker: 'トゥイ', ja: 'バスで{来|き}ます。15{分|ふん}ぐらいです。', pt: 'Venho de ônibus. Uns 15 minutos.' },
        { speaker: 'ヨギ', ja: 'そうですか。', pt: 'Ah é.' },
        { speaker: 'トゥイ', ja: 'ときどき、{歩|ある}いて{来|き}ます。1{時間|じかん}ぐらいかかります。', pt: 'Às vezes venho a pé. Leva cerca de 1 hora.' },
        { speaker: '全員', ja: 'へー。／すごいですね。／おー。', pt: 'Nossa. / Que incrível. / Oh.' },
      ],
    },
  ],
  '13-30': [
    {
      label: '会話① (13-30)',
      setupJa: '{街|まち}で、{3人|さんにん}の{人|ひと}が、{行|い}き{方|かた}を{質問|しつもん}しています。',
      setupPt: 'Na cidade, três pessoas perguntam como chegar a um lugar.',
      lines: [
        { speaker: 'A', ja: 'すみません。おやしお{市場|いちば}まで、どうやって{行|い}きますか？', pt: 'Com licença. Como faço para chegar ao mercado Oyashio?' },
        { speaker: 'B', ja: 'はい、おやしお{市場|いちば}ですね。ここから{新|しん}みなと{駅|えき}まで、{電車|でんしゃ}に{乗|の}ります。{新|しん}みなと{駅|えき}からマリンシティまで、バスに{乗|の}ります。マリンシティから、{歩|ある}いて5{分|ふん}ぐらいです。', pt: 'Sim, o mercado Oyashio. Daqui até a estação Shin-Minato, pegue o trem. De Shin-Minato até Marine City, pegue o ônibus. De Marine City, são uns 5 minutos a pé.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '13-31': [
    {
      label: '会話② (13-31)',
      lines: [
        { speaker: 'A', ja: 'すみません。{市役所|しやくしょ}まで、どうやって{行|い}きますか？', pt: 'Com licença. Como chego à prefeitura?' },
        { speaker: 'B', ja: '{市役所|しやくしょ}は……ここから、12{番|ばん}のバスに{乗|の}ります。バスセンターで、バスを{降|お}ります。5{番|ばん}のバスに{乗|の}り{換|か}えます。{市役所|しやくしょ}は{終点|しゅうてん}です。', pt: 'A prefeitura… Daqui, pegue o ônibus nº 12. Desça no terminal de ônibus. Faça baldeação para o ônibus nº 5. A prefeitura é o ponto final.' },
        { speaker: 'A', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '13-32': [
    {
      label: '会話③ (13-32)',
      lines: [
        { speaker: 'A', ja: 'すみません。さくらモールまで、どうやって{行|い}きますか？', pt: 'Com licença. Como chego ao shopping Sakura?' },
        { speaker: 'B', ja: 'さくらモールですか？　えーと、もみじ{駅|えき}からさくら{駅|えき}まで、{南北線|なんぼくせん}に{乗|の}ります。さくら{駅|えき}で、{東西線|とうざいせん}に{乗|の}り{換|か}えます。{新|しん}さくら{駅|えき}で{降|お}ります。{新|しん}さくら{駅|えき}から、バスがあります。', pt: 'Shopping Sakura? Hmm, da estação Momiji até a estação Sakura, pegue a Linha Norte-Sul. Em Sakura, faça baldeação para a Linha Leste-Oeste. Desça na estação Shin-Sakura. De Shin-Sakura tem ônibus.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
}

const lesson13: Section = {
  id: 'lesson-13',
  level: 'starter',
  titleJa: '第13課 このバスは空港に行きますか？',
  titlePt: 'Lição 13 — Este ônibus vai ao aeroporto?',
  summaryPt: 'Andar pela cidade · perguntar se um transporte vai aonde você quer (このNは〜に行きますか？), conferir estações e paradas (ここはどこですか／次は〜ですか), dizer o meio de transporte (〜で来ます, 歩いて来ます) e quanto leva (〜かかります), explicar trajetos com 〜に乗ります／〜を降ります／〜に乗り換えます e 〜から〜まで, e ler placas da estação.',
  studyNotes: [
    {
      title: 'Tópico: Andar pela cidade',
      bodyPt:
        '## Can-do\n' +
        '- Perguntar se um trem/ônibus vai aonde você quer e entender a resposta.\n' +
        '- Ouvir o anúncio do nome da estação e, se não entender, perguntar a alguém.\n' +
        '- Dizer como vai ao trabalho e quanto tempo leva.\n' +
        '- Perguntar o caminho até um destino e entender a resposta.\n' +
        '- Ler placas comuns dentro da estação.',
    },
    {
      title: 'Meios de transporte e verbos (Seções 1 e 3)',
      bodyPt:
        '**{乗|の}り{物|もの} (transportes):** {電車|でんしゃ} (trem), バス (ônibus), タクシー (táxi), {地下鉄|ちかてつ} (metrô), {飛行機|ひこうき} (avião), {船|ふね} (navio), {自転車|じてんしゃ} (bicicleta), バイク (moto), {車|くるま} (carro), {歩|ある}いて (a pé).\n\n' +
        '**Verbos-chave:** {乗|の}る → 〜に{乗|の}ります (embarcar), {降|お}りる → 〜を{降|お}ります (descer), {乗|の}り{換|か}える → 〜に{乗|の}り{換|か}えます (baldear).\n\n' +
        '**Na estação:** 〜{番線|ばんせん} (plataforma nº), 〜{番|ばん}のバス (ônibus nº), 〜{番|ばん}{乗|の}り{場|ば} (atracadouro nº), {快速|かいそく} (expresso) × {各駅停車|かくえきていしゃ}/{各停|かくてい} (para em todas), {終点|しゅうてん} (ponto final), 〜{線|せん} (linha), (お){乗|の}り{換|か}え, (お){出口|でぐち}, {右側|みぎがわ}, {反対側|はんたいがわ}, {先|さき}, {次|つぎ}.',
    },
    {
      title: 'Destino do transporte: このNは〜に行きますか？ (➊)',
      bodyPt:
        'Para conferir se um veículo vai aonde você quer:\n\n' +
        '`このバスは、{空港|くうこう}に{行|い}きますか？` = este ônibus vai ao aeroporto?\n\n' +
        '- **この** + N = este N (à sua frente): このバス, この{電車|でんしゃ}, この{船|ふね}.\n' +
        '- O **に** de {空港|くうこう}に marca o **destino** ({目的地|もくてきち}).\n\n' +
        'Respostas: ええ、{行|い}きますよ。／いえ、{行|い}きません。／ちょっとわかりません。',
    },
    {
      title: 'Onde estou / qual é a próxima: ここは〜ですか？ (➋)',
      bodyPt:
        'Dentro de ônibus e trens, para conferir parada/estação:\n\n' +
        '- **ここはどこですか？** = onde estou agora? (lugar atual)\n' +
        '- **{次|つぎ}は、〜ですか？** = a próxima é ~? (próxima parada)\n\n' +
        'Ex.: `{次|つぎ}は、{浦田|うらた}ですか？` → `いえ、{次|つぎ}は、{南浦田|みなみうらた}です。`\n\n' +
        '💡 No anúncio você ouve: {終点|しゅうてん} (ponto final), お{乗|の}り{換|か}え (baldeação), お{出口|でぐち}は{右側|みぎがわ}です (saída à direita).',
    },
    {
      title: 'Meio de transporte: 〜で来ます (➌)',
      bodyPt:
        'O **meio/método** leva a partícula **で**:\n\n' +
        '`バイクで{来|き}ます` · `{電車|でんしゃ}で{来|き}ます` · `{車|くるま}で{来|き}ます`.\n\n' +
        '⚠️ A pé é exceção: usa a **forma-テ** → `{歩|ある}いて{来|き}ます`.\n\n' +
        '**Perguntar:** どうやって{来|き}ますか？ / {何|なに}で{来|き}ますか？ (como? / com o quê?). Para o trajeto a um lugar: どうやって{行|い}きますか？\n\n' +
        '📌 A partícula **で** tem 2 usos no Starter: lugar da ação ({公園|こうえん}でテニス) e meio/método (バスで).',
    },
    {
      title: 'Quanto tempo leva: 〜かかります (➍)',
      bodyPt:
        'Para falar de **duração**: **【tempo】かかります** (leva ~).\n\n' +
        '`1{時間半|じかんはん}かかります` · `10{分|ぷん}ぐらいです` (dá para usar です).\n\n' +
        '- **〜{時|じ}** = hora do relógio (7{時|じ} = 7h); **〜{時間|じかん}** = duração (2{時間|じかん} = 2 horas); **〜{分|ふん}** serve para os dois.\n' +
        '- **Perguntar:** どのぐらい／どのくらい、かかりますか？ O **ぐらい** = “cerca de, mais ou menos”.\n\n' +
        '**Minutos:** 1{分|ぷん}いっぷん, 2{分|ふん}にふん, 3{分|ぷん}さんぷん, 4{分|ぷん}よんぷん, 6{分|ぷん}ろっぷん, 8{分|ぷん}はっぷん, 10{分|ぷん}じゅっぷん.',
    },
    {
      title: 'Explicar o trajeto: 〜に乗ります／〜を降ります／〜から〜まで (➎ ❻)',
      bodyPt:
        'Para descrever um percurso com transporte:\n\n' +
        '| ação | partícula | exemplo |\n|---|---|---|\n' +
        '| embarcar {乗|の}る | **に** | 12{番|ばん}のバスに{乗|の}ります |\n' +
        '| descer {降|お}りる | **を** | バスを{降|お}ります |\n' +
        '| baldear {乗|の}り{換|か}える | **に** | {東西線|とうざいせん}に{乗|の}り{換|か}えます |\n' +
        '| lugar de embarque/desembarque | **で** | バスセンターで{降|お}ります |\n\n' +
        '**Trecho:** 【lugar】**から**【lugar】**まで** = de … até … → `ここから{新|しん}みなと{駅|えき}まで、{電車|でんしゃ}に{乗|の}ります`.\n\n' +
        '📌 A partícula **に** é multiuso (Lições 4–13): permanência ({住|す}む), existência (ある/いる), tempo (7{時|じ}に), objetivo ({試合|しあい}に), destino ({空港|くうこう}に). Kanji do dia: {東|ひがし}, {西|にし}, {南|みなみ}, {北|きた}, {会社|かいしゃ}, {来|き}ます, {行|い}きます, {乗|の}ります.',
    },
  ],
  groups: [lesson13Group],
  audios: attachScripts(13, L13_SCRIPTS),
}

const lesson14Group: ExerciseGroup = {
  id: 'iro-s-l14',
  title: '大きな建物ですね',
  subtitlePt: 'Lugares da cidade, posição, dizer onde você está e dar impressões',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l14-1', number: 1, prompt: '「トイレ」 é:', choices: [{ n: 1, text: 'banheiro' }, { n: 2, text: 'armário com chave' }, { n: 3, text: 'máquina de vendas' }, { n: 4, text: 'área de fumantes' }], answer: 1, explanationPt: 'Lugares de prédio/rua (Seção 1): トイレ (banheiro), コインロッカー (armário), {自動販売機|じどうはんばいき} (máquina de vendas), コンビニ (loja de conveniência), ATM (caixa eletrônico), {喫煙所|きつえんじょ} (área de fumantes).' },
    { id: 'iro-s-l14-2', number: 2, prompt: '「コインロッカー」 é:', choices: [{ n: 1, text: 'armário com fechadura (a moedas)' }, { n: 2, text: 'banheiro' }, { n: 3, text: 'elevador' }, { n: 4, text: 'escada rolante' }], answer: 1, explanationPt: 'コインロッカー = armário/guarda-volumes a moedas, comum em estações. (Seção 1)' },
    { id: 'iro-s-l14-3', number: 3, prompt: '「{自動販売機|じどうはんばいき}」 é:', choices: [{ n: 1, text: 'máquina de vendas automática' }, { n: 2, text: 'caixa eletrônico' }, { n: 3, text: 'catraca' }, { n: 4, text: 'balcão de informações' }], answer: 1, explanationPt: '{自動販売機|じどうはんばいき} = máquina de vendas (de {飲|の}み{物|もの}/bebidas, etc.). No Japão há muitas. (Seção 1 · TIPS)' },
    { id: 'iro-s-l14-4', number: 4, prompt: '「{喫煙所|きつえんじょ}」 é:', choices: [{ n: 1, text: 'área de fumantes' }, { n: 2, text: 'bebedouro' }, { n: 3, text: 'estacionamento' }, { n: 4, text: 'caixa eletrônico' }], answer: 1, explanationPt: '{喫煙所|きつえんじょ} = local destinado a fumar. (Seção 1)' },
    { id: 'iro-s-l14-5', number: 5, prompt: 'Em 「この{近|ちか}くに、コンビニ（　）ありますか？」, a lacuna é:', choices: [{ n: 1, text: 'は' }, { n: 2, text: 'を' }, { n: 3, text: 'で' }, { n: 4, text: 'へ' }], answer: 1, translationPt: 'Tem uma loja de conveniência aqui perto?', explanationPt: 'Estrutura 【lugar】に N（は）ありますか？ — pergunta se algo existe. この{近|ちか}くに (aqui perto) + N は ありますか？ (Nota ➊)' },
    { id: 'iro-s-l14-6', number: 6, prompt: '「この{近|ちか}く」 significa:', choices: [{ n: 1, text: 'aqui perto / nas redondezas' }, { n: 2, text: 'lá longe' }, { n: 3, text: 'lá dentro' }, { n: 4, text: 'em frente' }], answer: 1, explanationPt: 'この{近|ちか}く = perto daqui. Usado para perguntar se há コンビニ, ATM etc. nas redondezas. (Nota ➊)' },
    { id: 'iro-s-l14-7', number: 7, prompt: 'Para perguntar ONDE algo fica de forma mais direta, usa-se:', choices: [{ n: 1, text: '〜は、どこにありますか？ / 〜は、どこですか？' }, { n: 2, text: '〜は、いつですか？' }, { n: 3, text: '〜は、いくらですか？' }, { n: 4, text: '〜は、だれですか？' }], answer: 1, explanationPt: 'どこにありますか？ / どこですか？ = onde fica? Ex.: トイレは、どこですか？ (Nota ➊ · Seção 1)' },
    { id: 'iro-s-l14-8', number: 8, prompt: 'Respostas vagas de direção como 「あちら／あっち／この{先|さき}／この{奥|おく}」 indicam:', choices: [{ n: 1, text: 'lá / por ali / logo adiante / lá no fundo' }, { n: 2, text: 'horários' }, { n: 3, text: 'preços' }, { n: 4, text: 'nomes de pessoas' }], answer: 1, explanationPt: 'あちら/あっち (por ali), この{先|さき} (logo adiante), この{奥|おく} (lá no fundo). (Seção 1)' },
    { id: 'iro-s-l14-9', number: 9, prompt: '「あっち」 é a versão casual de:', choices: [{ n: 1, text: 'あちら' }, { n: 2, text: 'こちら' }, { n: 3, text: 'そちら' }, { n: 4, text: 'どちら' }], answer: 1, explanationPt: 'あっち = jeito casual de あちら (over there). Do mesmo modo そっち = そちら. (Seção 1 e 2)' },
    { id: 'iro-s-l14-10', number: 10, prompt: 'As palavras de posição 「{上|うえ}／{下|した}／{前|まえ}／{後|うし}ろ／{中|なか}／{横|よこ}」 significam:', choices: [{ n: 1, text: 'em cima / embaixo / na frente / atrás / dentro / ao lado' }, { n: 2, text: 'norte / sul / leste / oeste / centro / borda' }, { n: 3, text: 'hoje / amanhã / ontem / agora / depois / antes' }, { n: 4, text: 'primeiro / segundo / terceiro / quarto / quinto / sexto' }], answer: 1, explanationPt: '【位置 posição】: {上|うえ} (em cima), {下|した} (embaixo), {前|まえ} (na frente), {後|うし}ろ (atrás), {中|なか} (dentro), {横|よこ} (ao lado). (Seção 2)' },
    { id: 'iro-s-l14-11', number: 11, prompt: '「{後|うし}ろ」 é:', choices: [{ n: 1, text: 'atrás' }, { n: 2, text: 'na frente' }, { n: 3, text: 'em cima' }, { n: 4, text: 'ao lado' }], answer: 1, explanationPt: '{後|うし}ろ = atrás (≠ {前|まえ} na frente). (Seção 2)' },
    { id: 'iro-s-l14-12', number: 12, prompt: '「{横|よこ}」 é:', choices: [{ n: 1, text: 'ao lado' }, { n: 2, text: 'dentro' }, { n: 3, text: 'embaixo' }, { n: 4, text: 'atrás' }], answer: 1, explanationPt: '{横|よこ} = ao lado. Ex.: インフォメーションの{横|よこ}です (ao lado do balcão de informações). (Seção 2)' },
    { id: 'iro-s-l14-13', number: 13, prompt: 'Para dizer onde você está (ex.: ao telefone), usa-se 「Nの【posição】にいます」. Em 「{今|いま}、{改札|かいさつ}の{前|まえ}（　）います」, a lacuna é:', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'で' }, { n: 3, text: 'を' }, { n: 4, text: 'へ' }], answer: 1, translationPt: 'Agora estou na frente da catraca.', explanationPt: 'いる (pessoa/animal) usa **に** para o local: {改札|かいさつ}の{前|まえ}にいます. Um ponto de referência + posição (〜の{前|まえ}／{横|よこ}／{中|なか}／{後|うし}ろ). (Nota ➋)' },
    { id: 'iro-s-l14-14', number: 14, prompt: 'A frase 「インフォメーションの{前|まえ}です」 em relação a 「インフォメーションの{前|まえ}にいます」:', choices: [{ n: 1, text: 'têm o mesmo sentido — 〜です é forma simplificada de 〜にいます' }, { n: 2, text: 'são opostas' }, { n: 3, text: 'です é sobre objeto, にいます sobre pessoa' }, { n: 4, text: 'です indica passado' }], answer: 1, explanationPt: '〜です pode substituir 〜にいます ao dizer onde você está: インフォメーションの{前|まえ}です = …{前|まえ}にいます. (Nota ➋)' },
    { id: 'iro-s-l14-15', number: 15, prompt: '「{改札|かいさつ}」 é:', choices: [{ n: 1, text: 'catraca / portão de bilhetes da estação' }, { n: 2, text: 'escada rolante' }, { n: 3, text: 'balcão de informações' }, { n: 4, text: 'loja de conveniência' }], answer: 1, explanationPt: '{改札|かいさつ} = catraca/portão da estação (já visto na Lição 13). Pontos de referência: {改札|かいさつ}, コンビニ, インフォメーション, エスカレーター. (Seção 2 · Nota ➋)' },
    { id: 'iro-s-l14-16', number: 16, prompt: '「インフォメーション」 é:', choices: [{ n: 1, text: 'balcão de informações' }, { n: 2, text: 'catraca' }, { n: 3, text: 'escada rolante' }, { n: 4, text: 'estacionamento' }], answer: 1, explanationPt: 'インフォメーション = balcão de informações. Outro ponto comum: エスカレーター (escada rolante). (Seção 2)' },
    { id: 'iro-s-l14-17', number: 17, prompt: '「もしもし」 é usado:', choices: [{ n: 1, text: 'ao atender/iniciar uma ligação telefônica' }, { n: 2, text: 'ao entrar em casa' }, { n: 3, text: 'ao comer' }, { n: 4, text: 'ao se despedir' }], answer: 1, explanationPt: 'もしもし = “alô” ao telefone. Nesta lição aparece nas ligações de encontro (待ち合わせ). (Seção 2 e 3)' },
    { id: 'iro-s-l14-18', number: 18, prompt: 'Ao colocar um adjetivo ANTES de um substantivo (impressão), a regra é:', choices: [{ n: 1, text: 'ナ-adjetivo recebe 〜な (にぎやか**な**{通|とお}り); イ-adjetivo recebe 〜い ({広|ひろ}**い**{公園|こうえん})' }, { n: 2, text: 'todos recebem 〜な' }, { n: 3, text: 'todos recebem 〜い' }, { n: 4, text: 'o adjetivo vai depois do substantivo' }], answer: 1, explanationPt: 'Adjetivo antes do N: ナA-な N (にぎやかな{通|とお}り), イA-い N ({広|ひろ}い{公園|こうえん}). (Nota ➌)' },
    { id: 'iro-s-l14-19', number: 19, prompt: '「きれい」 é qual tipo de adjetivo?', choices: [{ n: 1, text: 'ナ-adjetivo → きれい**な** N (apesar de terminar em い)' }, { n: 2, text: 'イ-adjetivo → きれい**い** N' }, { n: 3, text: 'verbo' }, { n: 4, text: 'substantivo' }], answer: 1, explanationPt: '⚠️ きれい é ナ-adjetivo, não イ-adjetivo: ao modificar N vira きれいな〜 (きれいな{公園|こうえん}). (Nota ➌)' },
    { id: 'iro-s-l14-20', number: 20, prompt: '「{大|おお}きい」 e 「{小|ちい}さい」, ao modificar um substantivo, são exceções porque:', choices: [{ n: 1, text: 'aceitam DUAS formas: 〜い N e 〜な N ({大|おお}きい／{大|おお}きな{建物|たてもの})' }, { n: 2, text: 'viram ナ-adjetivos sempre' }, { n: 3, text: 'não podem modificar substantivos' }, { n: 4, text: 'só usam a forma negativa' }], answer: 1, explanationPt: '{大|おお}きい e {小|ちい}さい são イ-adjetivos, mas ao modificar N têm 2 formas: {大|おお}きい/{大|おお}きな, {小|ちい}さい/{小|ちい}さな. (Nota ➌ · quadro de adjetivos)' },
    { id: 'iro-s-l14-21', number: 21, prompt: 'A frase 「にぎやかな{通|とお}りですね」 serve para:', choices: [{ n: 1, text: 'dar sua impressão sobre o lugar (que rua movimentada, né)' }, { n: 2, text: 'perguntar o preço' }, { n: 3, text: 'pedir informação' }, { n: 4, text: 'recusar um convite' }], answer: 1, translationPt: 'Que rua movimentada, né.', explanationPt: '【adjetivo】N ですね = comentar/dar impressão sobre algo. Ex.: {広|ひろ}い{公園|こうえん}ですね, きれいな{水|みず}ですね. (Nota ➌)' },
    { id: 'iro-s-l14-22', number: 22, prompt: '「〜でしょう？」 (ex.: いいお{寺|てら}でしょう？) é usado para:', choices: [{ n: 1, text: 'buscar a concordância do interlocutor (“não é?”)' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'fazer uma pergunta sobre preço' }, { n: 4, text: 'expressar dúvida sobre si mesmo' }], answer: 1, explanationPt: '〜でしょう？ = expressão para pedir concordância (isn’t it?). Ex.: いいお{寺|てら}でしょう？ (Seção 3 · vocabulário)' },
    { id: 'iro-s-l14-23', number: 23, prompt: 'Em placas de lojas, relacione 「{営業中|えいぎょうちゅう}」 / 「{準備中|じゅんびちゅう}」 / 「{定休日|ていきゅうび}」:', choices: [{ n: 1, text: '{営業中|えいぎょうちゅう} = aberto; {準備中|じゅんびちゅう} = abrindo em breve; {定休日|ていきゅうび} = dia de folga fixo' }, { n: 2, text: '{営業中|えいぎょうちゅう} = fechado; {準備中|じゅんびちゅう} = aberto; {定休日|ていきゅうび} = 24h' }, { n: 3, text: 'as três = aberto' }, { n: 4, text: '{営業中|えいぎょうちゅう} = perigo; {準備中|じゅんびちゅう} = obras; {定休日|ていきゅうび} = cuidado' }], answer: 1, explanationPt: '{営業中|えいぎょうちゅう} (aberto), {準備中|じゅんびちゅう} (em preparação/abre logo), {定休日|ていきゅうび} (dia de folga). (Seção 4)' },
    { id: 'iro-s-l14-24', number: 24, prompt: 'Em placas, 「24{時間営業|じかんえいぎょう}」 e 「{年中無休|ねんじゅうむきゅう}」 significam:', choices: [{ n: 1, text: 'aberto 24 horas / aberto o ano todo (sem folga)' }, { n: 2, text: 'fechado à noite / fechado aos domingos' }, { n: 3, text: 'em obras / proibido entrar' }, { n: 4, text: 'feriado / dia de folga' }], answer: 1, explanationPt: '24{時間営業|じかんえいぎょう} = aberto 24h; {年中無休|ねんじゅうむきゅう} = aberto o ano inteiro. Outras placas: {危険|きけん} (perigo), {注意|ちゅうい} (cuidado), {通行止|つうこうどめ} (passagem fechada), {工事中|こうじちゅう} (em obras), {祝|しゅく}（{日|じつ}）/{祭|さい}（{日|じつ}） (feriado). (Seção 4)' },
    { id: 'iro-s-l14-25', number: 25, prompt: 'Diálogo 14-05: tem loja de conveniência aqui perto?', context: 'A：すみません。この{近|ちか}くに、コンビニはありますか？ B：ええ、この{先|さき}です。', choices: [{ n: 1, text: 'Sim — é logo adiante (この{先|さき})' }, { n: 2, text: 'Não, não tem' }, { n: 3, text: 'Sim, lá no fundo (この{奥|おく})' }, { n: 4, text: 'Não sei' }], answer: 1, explanationPt: 'B responde ええ、この{先|さき}です (sim, é logo adiante). Compare 14-03, onde B diz ちょっと、わからないですね (não sei bem).' },
    { id: 'iro-s-l14-26', number: 26, prompt: 'Diálogo 14-25: o que é o grande prédio?', context: 'A：あれは、{何|なん}ですか？　{大|おお}きな{建物|たてもの}ですね。 B：ああ、あれは、{札幌|さっぽろ}ドームです。{野球場|やきゅうじょう}です。', choices: [{ n: 1, text: 'O Sapporo Dome — um estádio de beisebol ({野球場|やきゅうじょう})' }, { n: 2, text: 'Um templo ({お寺|てら})' }, { n: 3, text: 'Uma galeria comercial ({商店街|しょうてんがい})' }, { n: 4, text: 'Um parque ({公園|こうえん})' }], answer: 1, explanationPt: 'B: あれは{札幌|さっぽろ}ドームです。{野球場|やきゅうじょう}です (é o Sapporo Dome, um estádio de beisebol). あれ = aquilo (longe dos dois). (Seção 3)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 14 (聴解スクリプト)
const L14_SCRIPTS: Record<string, ScriptItem[]> = {
  '14-01': [
    {
      label: '会話① (14-01)',
      setupJa: '{6人|ろくにん}の{人|ひと}が、{街|まち}で、ほかの{人|ひと}に{場所|ばしょ}を{聞|き}いています。',
      setupPt: 'Seis pessoas, na cidade, perguntam a outras onde fica algo.',
      lines: [
        { speaker: 'A', ja: 'すみません。トイレは、どこですか？', pt: 'Com licença. Onde fica o banheiro?' },
        { speaker: 'B', ja: 'あちらです。', pt: 'É por ali.' },
        { speaker: 'A', ja: 'どうも。', pt: 'Obrigado.' },
      ],
    },
  ],
  '14-02': [
    {
      label: '会話② (14-02)',
      lines: [
        { speaker: 'A', ja: 'あのう、{飲|の}み{物|もの}の{自動販売機|じどうはんばいき}は、どこにありますか？', pt: 'Ah, onde fica a máquina de bebidas?' },
        { speaker: 'B', ja: 'あっちにありますよ。', pt: 'Tem ali, viu.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '14-03': [
    {
      label: '会話③ (14-03)',
      lines: [
        { speaker: 'A', ja: 'すみません。コインロッカーは、どこにありますか？', pt: 'Com licença. Onde ficam os armários (guarda-volumes)?' },
        { speaker: 'B', ja: 'あー、すいません。ちょっと、わからないですね。', pt: 'Ah, desculpe. Não sei bem, não.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, tá.' },
      ],
    },
  ],
  '14-04': [
    {
      label: '会話④ (14-04)',
      lines: [
        { speaker: 'A', ja: '{喫煙所|きつえんじょ}は、どこですか？', pt: 'Onde fica a área de fumantes?' },
        { speaker: 'B', ja: 'あ、このビルにはありません。', pt: 'Ah, neste prédio não tem.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, tá.' },
      ],
    },
  ],
  '14-05': [
    {
      label: '会話⑤ (14-05)',
      lines: [
        { speaker: 'A', ja: 'すみません。この{近|ちか}くに、コンビニはありますか？', pt: 'Com licença. Tem uma loja de conveniência aqui perto?' },
        { speaker: 'B', ja: 'ええ、この{先|さき}です。', pt: 'Sim, é logo adiante.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '14-06': [
    {
      label: '会話⑥ (14-06)',
      lines: [
        { speaker: 'A', ja: 'あの、この{近|ちか}くに、ATMはありますか？', pt: 'Hmm, tem um caixa eletrônico aqui perto?' },
        { speaker: 'B', ja: 'この{奥|おく}です。', pt: 'É lá no fundo.' },
        { speaker: 'A', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '14-13': [
    {
      label: '会話① (14-13)',
      setupJa: '{4人|よにん}の{人|ひと}が、{待|ま}ち{合|あ}わせをしている{相手|あいて}と{電話|でんわ}で{話|はな}しています。',
      setupPt: 'Quatro pessoas falam ao telefone com quem vão encontrar.',
      lines: [
        { speaker: 'A', ja: 'もしもし。', pt: 'Alô.' },
        { speaker: 'B', ja: 'あ、もしもし、イルマさん、{今|いま}、どこですか？', pt: 'Ah, alô, Irma, onde você está agora?' },
        { speaker: 'A', ja: '{今|いま}、{改札|かいさつ}の{前|まえ}にいます。', pt: 'Agora estou na frente da catraca.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '14-14': [
    {
      label: '会話② (14-14)',
      lines: [
        { speaker: 'A', ja: 'あ、ピセットです。', pt: 'Ah, é a Piset.' },
        { speaker: 'B', ja: 'あ、ピセットさん、{今|いま}、どこにいますか？', pt: 'Ah, Piset, onde você está agora?' },
        { speaker: 'A', ja: 'えーと、コンビニの{中|なか}にいます。', pt: 'Hmm, estou dentro da loja de conveniência.' },
        { speaker: 'B', ja: '{中|なか}ですね。{今|いま}、そっちに{行|い}きます。', pt: 'Dentro, né. Já vou aí.' },
      ],
    },
  ],
  '14-15': [
    {
      label: '会話③ (14-15)',
      lines: [
        { speaker: 'A', ja: 'もしもし。', pt: 'Alô.' },
        { speaker: 'B', ja: 'もしもし、リリアンさん？', pt: 'Alô, é a Lilian?' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'B', ja: '{今|いま}、どこ？', pt: 'Onde você está?' },
        { speaker: 'A', ja: 'えー、{今|いま}、インフォメーションの{横|よこ}です。', pt: 'Hmm, estou ao lado do balcão de informações.' },
        { speaker: 'B', ja: 'インフォメーションね。わかった。すぐ{行|い}く。', pt: 'Informações, né. Entendi. Já vou.' },
      ],
    },
  ],
  '14-16': [
    {
      label: '会話④ (14-16)',
      lines: [
        { speaker: 'A', ja: 'あのう、チェです。', pt: 'Ah, é o Che.' },
        { speaker: 'B', ja: 'あ、チェさん。{今|いま}、どこにいますか？', pt: 'Ah, Che. Onde você está agora?' },
        { speaker: 'A', ja: '{今|いま}、エスカレーターの{下|した}にいます。', pt: 'Agora estou embaixo da escada rolante.' },
        { speaker: 'B', ja: 'エスカレーターの{下|した}ですね。わかりました。ちょっと{待|ま}っててくださいね。', pt: 'Embaixo da escada rolante, né. Entendi. Espera um pouquinho aí.' },
      ],
    },
  ],
  '14-22': [
    {
      label: '会話① (14-22)',
      setupJa: '{6人|ろくにん}の{人|ひと}が、{町|まち}のいろいろな{場所|ばしょ}を{案内|あんない}してもらっています。',
      setupPt: 'Seis pessoas estão sendo guiadas por vários lugares da cidade.',
      lines: [
        { speaker: 'A', ja: 'ここは、{水元公園|みずもとこうえん}です。', pt: 'Aqui é o Parque Mizumoto.' },
        { speaker: 'B', ja: '{広|ひろ}い{公園|こうえん}ですね。', pt: 'Que parque grande, né.' },
        { speaker: 'A', ja: 'そうですね。', pt: 'Pois é.' },
      ],
    },
  ],
  '14-23': [
    {
      label: '会話② (14-23)',
      lines: [
        { speaker: 'A', ja: 'ここは、{十条商店街|じゅうじょうしょうてんがい}です。', pt: 'Aqui é a galeria comercial Jūjō.' },
        { speaker: 'B', ja: 'ああ、にぎやかな{通|とお}りですね。', pt: 'Ah, que rua movimentada, né.' },
      ],
    },
  ],
  '14-24': [
    {
      label: '会話③ (14-24)',
      lines: [
        { speaker: 'A', ja: 'この{川|かわ}は、{四万十川|しまんとがわ}です。{有名|ゆうめい}な{川|かわ}です。', pt: 'Este rio é o Shimanto. É um rio famoso.' },
        { speaker: 'B', ja: 'わあ、きれいな{水|みず}ですね。', pt: 'Uau, que água limpa, né.' },
      ],
    },
  ],
  '14-25': [
    {
      label: '会話④ (14-25)',
      lines: [
        { speaker: 'A', ja: 'あれは、{何|なん}ですか？　{大|おお}きな{建物|たてもの}ですね。', pt: 'O que é aquilo? Que prédio grande, né.' },
        { speaker: 'B', ja: 'ああ、あれは、{札幌|さっぽろ}ドームです。{野球場|やきゅうじょう}です。', pt: 'Ah, aquilo é o Sapporo Dome. É um estádio de beisebol.' },
        { speaker: 'A', ja: 'へー、{大|おお}きいですね。', pt: 'Nossa, é grande.' },
      ],
    },
  ],
  '14-26': [
    {
      label: '会話⑤ (14-26)',
      lines: [
        { speaker: 'A', ja: 'あ、{古|ふる}いお{寺|てら}がありますね。', pt: 'Ah, tem um templo antigo, né.' },
        { speaker: 'B', ja: '{瑞泉寺|ずいせんじ}です。いいお{寺|てら}でしょう？', pt: 'É o templo Zuisenji. Bonito, não é?' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '14-27': [
    {
      label: '会話⑥ (14-27)',
      lines: [
        { speaker: 'A', ja: '{見|み}て。あれはセンタービル、あれは{住友|すみとも}ビル、あれは{三井|みつい}ビル。', pt: 'Olha. Aquele é o Center Building, aquele é o Sumitomo, aquele é o Mitsui.' },
        { speaker: 'B', ja: '{高|たか}いビルがたくさんありますね。', pt: 'Tem muitos prédios altos, né.' },
        { speaker: 'A', ja: 'そうだね。', pt: 'É mesmo.' },
      ],
    },
  ],
}

const lesson14: Section = {
  id: 'lesson-14',
  level: 'starter',
  titleJa: '第14課 大きな建物ですね',
  titlePt: 'Lição 14 — Que prédio grande, né',
  summaryPt: 'Andar pela cidade · perguntar onde ficam banheiros, ATM etc. (この近くに〜はありますか／〜はどこですか), dizer onde você está pelo telefone usando ponto de referência + posição (改札の前にいます), dar impressões sobre lugares com adjetivo + ですね (にぎやかな通りですね) e ler placas e letreiros da rua (営業中／定休日／24時間営業).',
  studyNotes: [
    {
      title: 'Tópico: Andar pela cidade',
      bodyPt:
        '## Can-do\n' +
        '- Perguntar onde ficam o banheiro, um ATM e outros lugares quando está na rua.\n' +
        '- Dizer ao telefone onde você está.\n' +
        '- Dar suas impressões quando alguém mostra a cidade para você.\n' +
        '- Ler placas de lojas e restaurantes e entender se está aberto ou fechado.',
    },
    {
      title: 'Lugares e instalações da cidade (Seção 1)',
      bodyPt:
        '**Lugares:** トイレ (banheiro), コインロッカー (armário/guarda-volumes), {自動販売機|じどうはんばいき} (máquina de vendas), コンビニ (loja de conveniência), ATM (caixa eletrônico), {喫煙所|きつえんじょ} (área de fumantes), ビル (prédio).\n\n' +
        '**Direções vagas:** あちら／あっち (por ali), この{先|さき} (logo adiante), この{奥|おく} (lá no fundo), {奥|おく} (interior).\n\n' +
        '**Úteis:** {飲|の}み{物|もの} (bebida), すいません (= すみません, casual).',
    },
    {
      title: 'Perguntar se algo existe: この近くに、Nはありますか？ (➊)',
      bodyPt:
        'Estrutura **【lugar】に N（は）ありますか？** — pergunta se algo existe.\n\n' +
        '`この{近|ちか}くに、コンビニはありますか？` = tem uma loja de conveniência aqui perto?\n\n' +
        '- この{近|ちか}く = perto daqui (nas redondezas).\n' +
        '- Forma mais direta de perguntar onde: **〜は、どこにありますか？** / **〜は、どこですか？**\n\n' +
        'Ex.: トイレは、どこですか？ → あちらです。 / コンビニはありますか？ → ええ、この{先|さき}です。 (ou ちょっと、わからないですね。)',
    },
    {
      title: 'Palavras de posição + dizer onde você está: Nの位置にいます (➋)',
      bodyPt:
        '**【位置 posição】:** {上|うえ} (em cima), {下|した} (embaixo), {前|まえ} (na frente), {後|うし}ろ (atrás), {中|なか} (dentro), {横|よこ} (ao lado).\n\n' +
        'Para dizer onde você está (ex.: ao telefone): **【ponto de referência】の【posição】にいます**.\n\n' +
        '`{今|いま}、{改札|かいさつ}の{前|まえ}にいます` = agora estou na frente da catraca.\n\n' +
        '- Pontos de referência comuns: {改札|かいさつ}, コンビニ, インフォメーション, エスカレーター.\n' +
        '- 💡 **〜です** simplifica **〜にいます**: インフォメーションの{前|まえ}です = …{前|まえ}にいます.\n\n' +
        '📌 Telefone: もしもし (alô); そっち (aí, casual de そちら); すぐ{行|い}く (já vou); ちょっと{待|ま}っててください (espera um pouco).',
    },
    {
      title: 'Dar impressões: 【adjetivo】N ですね (➌)',
      bodyPt:
        'Adjetivo **antes** do substantivo (para comentar/dar impressão):\n\n' +
        '| tipo | forma | exemplo |\n|---|---|---|\n' +
        '| ナ-adjetivo | 〜**な** N | にぎやか**な**{通|とお}り |\n' +
        '| イ-adjetivo | 〜**い** N | {広|ひろ}**い**{公園|こうえん} |\n\n' +
        '`にぎやかな{通|とお}りですね` (que rua movimentada) · `{広|ひろ}い{公園|こうえん}ですね` (que parque grande) · `きれいな{水|みず}ですね` (que água limpa).\n\n' +
        '- ⚠️ **きれい** é ナ-adjetivo (apesar do い): きれいな〜.\n' +
        '- ⚠️ **{大|おお}きい** e **{小|ちい}さい** são exceções: aceitam 〜い N **e** 〜な N → {大|おお}きい/{大|おお}きな{建物|たてもの}, {小|ちい}さい/{小|ちい}さな.\n' +
        '- A negativa de **いい** é **よくない**.\n\n' +
        '**Adjetivos (どんなところ):** {古|ふる}い/{新|あたら}しい, {大|おお}きい/{小|ちい}さい, {高|たか}い/{低|ひく}い, にぎやか(な)/{静|しず}か(な), {広|ひろ}い/せまい, きれい(な)/きたない.\n\n' +
        '**Lugares e vocab:** {商店街|しょうてんがい} (galeria comercial), お{寺|てら} (templo), {野球場|やきゅうじょう} (estádio de beisebol), {公園|こうえん} (parque), {川|かわ} (rio), {通|とお}り (rua), {建物|たてもの} (prédio), {有名|ゆうめい}（な） (famoso), たくさん (muitos), 〜でしょう？ (não é?, pede concordância), {見|み}て (olha), そうだね (é mesmo, casual).',
    },
    {
      title: 'Placas e letreiros da rua (Seção 4)',
      bodyPt:
        '**Avisos:** {危険|きけん} (perigo), {注意|ちゅうい} (cuidado), {通行止|つうこうどめ} (passagem fechada), {工事中|こうじちゅう} (em obras), {銀行|ぎんこう} (banco), たばこ (tabaco).\n\n' +
        '**Funcionamento da loja:** {営業中|えいぎょうちゅう} (aberto), {準備中|じゅんびちゅう} (abre em breve), {定休日|ていきゅうび} (dia de folga fixo), {営業時間|えいぎょうじかん} (horário de funcionamento), 24{時間営業|じかんえいぎょう} (aberto 24h), {年中無休|ねんじゅうむきゅう} (aberto o ano todo), {祝|しゅく}（{日|じつ}）/{祭|さい}（{日|じつ}） (feriado).\n\n' +
        '💡 Cuidado: コンビニ pode ser 24{時間営業|じかんえいぎょう}, mas o ATM pode ter horário limitado por banco.',
    },
  ],
  groups: [lesson14Group],
  audios: attachScripts(14, L14_SCRIPTS),
}

const lesson15Group: ExerciseGroup = {
  id: 'iro-s-l15',
  title: '電池がほしいんですが…',
  subtitlePt: 'Lojas, onde comprar algo, andares, pedir ajuda a um funcionário e dar impressões sobre produtos',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l15-1', number: 1, prompt: '「{電池|でんち}」 é:', choices: [{ n: 1, text: 'pilha / bateria' }, { n: 2, text: 'lanterna' }, { n: 3, text: 'marmita' }, { n: 4, text: 'guarda-chuva' }], answer: 1, explanationPt: '{電池|でんち} = pilha/bateria. Item-tema da lição (Seção 1).' },
    { id: 'iro-s-l15-2', number: 2, prompt: '「ほしい」 significa:', choices: [{ n: 1, text: '(eu) quero / tenho vontade de ter' }, { n: 2, text: '(eu) gosto de fazer' }, { n: 3, text: '(eu) sei' }, { n: 4, text: '(eu) tenho' }], answer: 1, explanationPt: 'ほしい = querer (ter algo). Marca o objeto desejado com が, como {好|す}き（な）. (Nota ➊)' },
    { id: 'iro-s-l15-3', number: 3, prompt: 'Em 「{電池|でんち}（　）ほしいんですが、どこで{買|か}えますか？」, a lacuna é:', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'を' }, { n: 3, text: 'で' }, { n: 4, text: 'に' }], answer: 1, translationPt: 'Eu queria (umas) pilhas, onde dá para comprar?', explanationPt: 'Igual a {好|す}き（な）, ほしい marca o objeto desejado com **が**: {電池|でんち}**が**ほしい. Memorize 〜がほしいんですが como bloco. (Nota ➊)' },
    { id: 'iro-s-l15-4', number: 4, prompt: 'A expressão 「〜んですが」 (em 〜がほしいんですが) serve para:', choices: [{ n: 1, text: 'explicar sua situação e pedir ajuda/conselho ao interlocutor' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'recusar educadamente' }, { n: 4, text: 'falar do passado' }], answer: 1, explanationPt: '〜んですが explica seu contexto e abre espaço para o outro ajudar/responder. Aqui: dizer o que quer e perguntar onde comprar. (Nota ➊)' },
    { id: 'iro-s-l15-5', number: 5, prompt: '「どこで{買|か}えますか？」 significa:', choices: [{ n: 1, text: 'onde (eu) posso comprar?' }, { n: 2, text: 'quanto custa?' }, { n: 3, text: 'quando abre?' }, { n: 4, text: 'o que é isto?' }], answer: 1, explanationPt: 'どこで{買|か}えますか？ = onde dá para comprar? Pergunta a LOJA/lugar de compra. (Nota ➊ · Seção 1)' },
    { id: 'iro-s-l15-6', number: 6, prompt: '「{買|か}えます」 (em どこで{買|か}えますか) é:', choices: [{ n: 1, text: 'forma potencial de {買|か}う (poder comprar) — por ora, decore a frase inteira' }, { n: 2, text: 'forma passada de {買|か}う' }, { n: 3, text: 'forma negativa de {買|か}う' }, { n: 4, text: 'um substantivo' }], answer: 1, explanationPt: '{買|か}えます = forma potencial (poder comprar) de {買|か}う. A formação da forma potencial só é estudada no Shokyū 2; aqui, decore どこで{買|か}えますか？ como frase. (Nota ➊)' },
    { id: 'iro-s-l15-7', number: 7, prompt: '「ドラッグストア」 é:', choices: [{ n: 1, text: 'drogaria/farmácia (remédios, cosméticos, higiene)' }, { n: 2, text: 'loja de materiais de construção' }, { n: 3, text: 'loja de 100 ienes' }, { n: 4, text: 'loja de eletrônicos' }], answer: 1, explanationPt: 'ドラッグストア = drogaria: remédios sem receita, cosméticos, shampoo, detergente etc.; algumas vendem comida. (Seção 1 · TIPS)' },
    { id: 'iro-s-l15-8', number: 8, prompt: '「ホームセンター」 é:', choices: [{ n: 1, text: 'loja de materiais de casa/construção (ferramentas, madeira, jardinagem)' }, { n: 2, text: 'drogaria' }, { n: 3, text: 'loja de conveniência' }, { n: 4, text: 'loja de departamentos' }], answer: 1, explanationPt: 'ホームセンター = grande loja de itens para casa/obras: madeira, ferramentas (ドライバー, のこぎり), pregos, jardinagem. Fica em avenidas, com estacionamento grande. (Seção 1 · TIPS)' },
    { id: 'iro-s-l15-9', number: 9, prompt: '「100{円|えん}ショップ」 é:', choices: [{ n: 1, text: 'loja onde (quase) tudo custa 100 ienes' }, { n: 2, text: 'loja que só vende moedas' }, { n: 3, text: 'banco' }, { n: 4, text: 'restaurante de 100 ienes' }], answer: 1, explanationPt: '100{円|えん}ショップ (ou {100均|ひゃっきん}) = quase tudo a 100 ienes (+ imposto): papelaria, louça, cozinha, limpeza, comida, brinquedos. (Seção 1 · TIPS)' },
    { id: 'iro-s-l15-10', number: 10, prompt: '「{懐中電灯|かいちゅうでんとう}」 é:', choices: [{ n: 1, text: 'lanterna' }, { n: 2, text: 'pilha' }, { n: 3, text: 'extensão elétrica' }, { n: 4, text: 'secador' }], answer: 1, explanationPt: '{懐中電灯|かいちゅうでんとう} = lanterna. No diálogo 15-06, comprada em ホームセンター. (Seção 1)' },
    { id: 'iro-s-l15-11', number: 11, prompt: '「{浴衣|ゆかた}」 é:', choices: [{ n: 1, text: 'yukata (quimono leve de verão)' }, { n: 2, text: 'marmita' }, { n: 3, text: 'prendedor de roupa' }, { n: 4, text: 'guarda-chuva' }], answer: 1, explanationPt: '{浴衣|ゆかた} = yukata. No diálogo 15-05, vendido na ショッピングセンター em frente à estação ({駅前|えきまえ}). (Seção 1)' },
    { id: 'iro-s-l15-12', number: 12, prompt: '「{洗濯|せんたく}ばさみ」 é:', choices: [{ n: 1, text: 'prendedor de roupa' }, { n: 2, text: 'máquina de lavar' }, { n: 3, text: 'sabão em pó' }, { n: 4, text: 'varal' }], answer: 1, explanationPt: '{洗濯|せんたく}ばさみ = prendedor de roupa. No diálogo 15-04, comprado em ドラッグストア. (Seção 1)' },
    { id: 'iro-s-l15-13', number: 13, prompt: '「（お）{弁当箱|べんとうばこ}」 é:', choices: [{ n: 1, text: 'marmita (caixa de bentô)' }, { n: 2, text: 'lancheira térmica de bebida' }, { n: 3, text: 'leite de coco' }, { n: 4, text: 'pauzinhos' }], answer: 1, explanationPt: '（お）{弁当箱|べんとうばこ} = marmita. No diálogo 15-07, vendida na 100{円|えん}ショップ (junto com おはし/pauzinhos). (Seção 1)' },
    { id: 'iro-s-l15-14', number: 14, prompt: 'A partícula 「〜とか」 (ex.: ニコニコスーパー**とか**) serve para:', choices: [{ n: 1, text: 'dar um exemplo entre vários (“tipo…”, “…por exemplo”)' }, { n: 2, text: 'indicar negação' }, { n: 3, text: 'marcar o sujeito' }, { n: 4, text: 'indicar passado' }], answer: 1, explanationPt: '〜とか = cita um exemplo dentre outros possíveis (“tipo o Niko Niko Super”). Diálogo 15-08. (Seção 1)' },
    { id: 'iro-s-l15-15', number: 15, prompt: '「{駅前|えきまえ}」 é:', choices: [{ n: 1, text: 'em frente à estação' }, { n: 2, text: 'dentro da estação' }, { n: 3, text: 'atrás da estação' }, { n: 4, text: 'plataforma' }], answer: 1, explanationPt: '{駅前|えきまえ} = (a área) em frente à estação. {駅前|えきまえ}のショッピングセンター = shopping em frente à estação. (Seção 1)' },
    { id: 'iro-s-l15-16', number: 16, prompt: 'A leitura de 「3{階|かい}」 e 「{何階|なんかい}」 é, respectivamente:', choices: [{ n: 1, text: 'さんがい / なんがい (o leitor muda para が)' }, { n: 2, text: 'さんかい / なんかい' }, { n: 3, text: 'さんがい / なんかい' }, { n: 4, text: 'みかい / いくかい' }], answer: 1, translationPt: 'terceiro andar / que andar', explanationPt: 'Contador 〜{階|かい}: 3{階|がい}＝さんがい (também さんかい), {何階|なんがい}. Outros: 1いっかい, 6ろっかい, 8はっかい, 10じゅっかい. (Seção 3 · quadro 階数)' },
    { id: 'iro-s-l15-17', number: 17, prompt: 'Dentro da loja, para saber em que andar fica um item, pergunta-se:', choices: [{ n: 1, text: '〜は、{何階|なんかい}ですか？ / どこですか？ / どこにありますか？' }, { n: 2, text: '〜は、いくらですか？' }, { n: 3, text: '〜は、いつですか？' }, { n: 4, text: '〜は、だれですか？' }], answer: 1, explanationPt: 'Dentro da loja: {何階|なんかい}ですか？ (que andar?) / どこですか？ / どこにありますか？ Também basta 〜がほしいんですが… (Nota ➊ · Seção 3)' },
    { id: 'iro-s-l15-18', number: 18, prompt: 'Expressões do funcionário 「〜でございます」 e 「〜になります」 equivalem a:', choices: [{ n: 1, text: '〜です (forma mais polida usada por funcionários de loja)' }, { n: 2, text: '〜ました (passado)' }, { n: 3, text: '〜ません (negativo)' }, { n: 4, text: '〜ましょう (convite)' }], answer: 1, explanationPt: '🔖 Linguagem de loja: 〜でございます ＝ 〜になります ＝ 〜です (mais polido). Ex.: 4{階|かい}でございます. (Seção 3)' },
    { id: 'iro-s-l15-19', number: 19, prompt: '「ご{案内|あんない}します／ご{案内|あんない}いたします」 significa:', choices: [{ n: 1, text: 'eu lhe acompanho / vou te levar até lá' }, { n: 2, text: 'pode pagar aqui' }, { n: 3, text: 'está esgotado' }, { n: 4, text: 'volte sempre' }], answer: 1, explanationPt: 'ご{案内|あんない}します/いたします = “eu te levo/mostro o caminho” (I’ll show you). こちらでございます/あちらでございます = é por aqui/ali. (Seção 3)' },
    { id: 'iro-s-l15-20', number: 20, prompt: 'Para dar impressão sobre um produto, a estrutura é:', choices: [{ n: 1, text: 'ナ-adjetivo + ですね / イ-adjetivo + いですね (おしゃれですね・{安|やす}いですね)' }, { n: 2, text: 'todos os adjetivos + いですね' }, { n: 3, text: 'adjetivo + ますね' }, { n: 4, text: 'adjetivo + でしたか' }], answer: 1, translationPt: 'que estiloso, né / que barato, né', explanationPt: 'Impressões (Nota ➋): ナA + ですね (おしゃれですね), イA-い + ですね ({安|やす}いですね). ね pede a concordância do outro. (Seção 4)' },
    { id: 'iro-s-l15-21', number: 21, prompt: '「かわいい！」「すてき！」 (sem ですね) são usados:', choices: [{ n: 1, text: 'como exclamação breve; com ですね quando se fala COM alguém' }, { n: 2, text: 'só para perguntar preço' }, { n: 3, text: 'só no passado' }, { n: 4, text: 'só por funcionários' }], answer: 1, explanationPt: 'かわいい！/すてき！ = exclamação curta. 〜ですね é dirigido ao interlocutor (pede empatia); falando sozinho, não se usa ですね. (Nota ➋)' },
    { id: 'iro-s-l15-22', number: 22, prompt: '「きれい」 ao modificar um substantivo vira:', choices: [{ n: 1, text: 'きれい**な** N (é ナ-adjetivo, apesar do い)' }, { n: 2, text: 'きれい**い** N' }, { n: 3, text: 'きれい N' }, { n: 4, text: 'きれく N' }], answer: 1, explanationPt: '⚠️ きれい é ナ-adjetivo. Lista どう？: かっこいい, かわいい, {高|たか}い, {安|やす}い, おもしろい (イ-adj) · きれい(な), すてき(な), おしゃれ(な), {変|へん}(な) (ナ-adj). (Seção 4 · Nota ➋)' },
    { id: 'iro-s-l15-23', number: 23, prompt: '「それに」 significa:', choices: [{ n: 1, text: 'além disso / e ainda' }, { n: 2, text: 'mas / porém' }, { n: 3, text: 'por isso' }, { n: 4, text: 'então' }], answer: 1, explanationPt: 'それに = além disso (acrescenta). Ex.: いいね。それに、{安|やす}いですね (é bom; e ainda, é barato). ⚠️ Contraste: でも = mas ({高|たか}いですね). (Seção 4)' },
    { id: 'iro-s-l15-24', number: 24, prompt: '「{本当|ほんとう}！」 (resposta a um elogio) significa:', choices: [{ n: 1, text: 'é mesmo! / é verdade!' }, { n: 2, text: 'mentira!' }, { n: 3, text: 'não sei' }, { n: 4, text: 'quanto custa?' }], answer: 1, explanationPt: '{本当|ほんとう}！ = é mesmo!/verdade! (concorda animado). Diálogo 15-26: このバッグ、かわいい！→ {本当|ほんとう}！かわいいですね。 (Seção 4)' },
    { id: 'iro-s-l15-25', number: 25, prompt: 'Nas placas de loja, 「{入口|いりぐち}／{出口|でぐち}／{化粧室|けしょうしつ}／{非常口|ひじょうぐち}」 são:', choices: [{ n: 1, text: 'entrada / saída / banheiro / saída de emergência' }, { n: 2, text: 'empurre / puxe / abrir / fechar' }, { n: 3, text: 'subida / descida / aberto / fechado' }, { n: 4, text: 'caixa / informações / elevador / escada' }], answer: 1, explanationPt: 'Placas (Seção 5): {入口|いりぐち} (entrada, お{客様|きゃくさま}{入口|いりぐち}), {出口|でぐち}・EXIT (saída), {化粧室|けしょうしつ} (banheiro), {非常口|ひじょうぐち} (saída de emergência).' },
    { id: 'iro-s-l15-26', number: 26, prompt: 'Nas portas, 「{押|お}（{押|お}す）」 e 「{引|ひ}く」 significam:', choices: [{ n: 1, text: 'empurre (push) / puxe (pull)' }, { n: 2, text: 'puxe / empurre' }, { n: 3, text: 'abrir / fechar' }, { n: 4, text: 'entrada / saída' }], answer: 1, explanationPt: '{押|お}（{押|お}す）= empurre (PUSH), {引|ひ}く = puxe (PULL). Par de opostos em portas. (Seção 5 · Kanji)' },
    { id: 'iro-s-l15-27', number: 27, prompt: 'No elevador/escada rolante, os pares 「{開|ひら}く／{閉|と}じる」 e 「{上|のぼ}り／{下|くだ}り」 são:', choices: [{ n: 1, text: 'abrir / fechar — e — subida / descida' }, { n: 2, text: 'empurrar / puxar — e — entrada / saída' }, { n: 3, text: 'aberto / fechado — e — perigo / cuidado' }, { n: 4, text: 'subir / descer — e — abrir / fechar' }], answer: 1, explanationPt: '{開|ひら}く (abrir) / {閉|と}じる (fechar) — botões 開/閉 do elevador; {上|のぼ}り (subida) / {下|くだ}り (descida) — エスカレーター. (Seção 5)' },
    { id: 'iro-s-l15-28', number: 28, prompt: 'Diálogo 15-05: 「{浴衣|ゆかた}がほしいんですが、どこで{買|か}えますか？」 — onde comprar?', context: 'A：{浴衣|ゆかた}がほしいんですが、どこで{買|か}えますか？ B：{駅前|えきまえ}のショッピングセンターで{買|か}えますよ。2{階|かい}にお{店|みせ}があります。', choices: [{ n: 1, text: 'Na ショッピングセンター em frente à estação — a loja fica no 2º andar' }, { n: 2, text: 'Na ドラッグストア' }, { n: 3, text: 'Na 100{円|えん}ショップ' }, { n: 4, text: 'Na ホームセンター' }], answer: 1, explanationPt: 'B: {駅前|えきまえ}のショッピングセンターで{買|か}えますよ。2{階|かい}にお{店|みせ}があります (no shopping em frente à estação; a loja é no 2º andar). (Seção 1)' },
    { id: 'iro-s-l15-29', number: 29, prompt: 'Diálogo 15-13: 「カメラは、{何階|なんかい}ですか？」 — resposta do funcionário?', context: '{客|きゃく}：あのう、すみません。カメラは、{何階|なんかい}ですか？ {店員|てんいん}：はい、4{階|かい}でございます。', choices: [{ n: 1, text: '4º andar (4{階|かい}でございます)' }, { n: 2, text: '2º andar' }, { n: 3, text: 'lá por ali (あちら)' }, { n: 4, text: 'logo adiante (この{先|さき})' }], answer: 1, explanationPt: 'O {店員|てんいん} responde 4{階|かい}でございます (é no 4º andar) — でございます ＝ です polido. (Seção 3)' },
    { id: 'iro-s-l15-30', number: 30, prompt: 'Diálogo 15-27: 「このジャケット、いいね。」 — o que B acrescenta?', context: 'A：このジャケット、いいね。 B：そうですね。それに、{安|やす}いですね。', choices: [{ n: 1, text: 'Concorda e acrescenta que, além disso, é barata (それに、{安|やす}いですね)' }, { n: 2, text: 'Diz que é cara (でも、{高|たか}いですね)' }, { n: 3, text: 'Diz que é estranha ({変|へん}ですね)' }, { n: 4, text: 'Pergunta o preço (いくらですか)' }], answer: 1, explanationPt: 'B: そうですね。それに、{安|やす}いですね (concorda e ainda elogia o preço). それに acrescenta um ponto positivo. (Seção 4)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 15 (聴解スクリプト)
const L15_SCRIPTS: Record<string, ScriptItem[]> = {
  '15-03': [
    {
      label: '会話① (15-03)',
      setupJa: '{6人|ろくにん}の{人|ひと}が、ほしいものを{買|か}う{場所|ばしょ}を{聞|き}いています。',
      setupPt: 'Seis pessoas perguntam onde comprar o que querem.',
      lines: [
        { speaker: 'A', ja: '{電池|でんち}がほしいんですが、どこで{買|か}えますか？', pt: 'Eu queria umas pilhas, onde dá para comprar?' },
        { speaker: 'B', ja: '{電池|でんち}？　コンビニで{買|か}えますよ。', pt: 'Pilhas? Dá para comprar na loja de conveniência.' },
        { speaker: 'A', ja: 'あ、そうですか。', pt: 'Ah, tá.' },
      ],
    },
  ],
  '15-04': [
    {
      label: '会話② (15-04)',
      lines: [
        { speaker: 'A', ja: '{洗濯|せんたく}ばさみがほしいんですが、どこで{買|か}えますか？', pt: 'Eu queria prendedores de roupa, onde dá para comprar?' },
        { speaker: 'B', ja: 'ドラッグストアで{買|か}えますよ。', pt: 'Dá para comprar na drogaria.' },
        { speaker: 'A', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Muito obrigado.' },
      ],
    },
  ],
  '15-05': [
    {
      label: '会話③ (15-05)',
      lines: [
        { speaker: 'A', ja: '{浴衣|ゆかた}がほしいんですが、どこで{買|か}えますか？', pt: 'Eu queria um yukata, onde dá para comprar?' },
        { speaker: 'B', ja: '{駅前|えきまえ}のショッピングセンターで{買|か}えますよ。2{階|かい}にお{店|みせ}があります。', pt: 'Dá para comprar no shopping em frente à estação. A loja fica no 2º andar.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, tá.' },
      ],
    },
  ],
  '15-06': [
    {
      label: '会話④ (15-06)',
      lines: [
        { speaker: 'A', ja: '{懐中電灯|かいちゅうでんとう}がほしいんですが、どこで{買|か}えますか？', pt: 'Eu queria uma lanterna, onde dá para comprar?' },
        { speaker: 'B', ja: 'ああ、ホームセンターがいいよ。この{近|ちか}くにあるよ。', pt: 'Ah, a loja de materiais para casa é boa. Tem uma aqui perto.' },
        { speaker: 'A', ja: 'そうですか。ありがとうございます。', pt: 'Ah, tá. Muito obrigado.' },
      ],
    },
  ],
  '15-07': [
    {
      label: '会話⑤ (15-07)',
      lines: [
        { speaker: 'A', ja: 'お{弁当箱|べんとうばこ}がほしいんですが、どこで{買|か}えますか？', pt: 'Eu queria uma marmita, onde dá para comprar?' },
        { speaker: 'B', ja: '100{円|えん}ショップにありますよ。お{弁当箱|べんとうばこ}も、おはしも、あります。', pt: 'Tem na loja de 100 ienes. Tem marmita e também pauzinhos.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '15-08': [
    {
      label: '会話⑥ (15-08)',
      lines: [
        { speaker: 'A', ja: 'ココナッツミルクがほしいんですが、どこで{買|か}えますか？', pt: 'Eu queria leite de coco, onde dá para comprar?' },
        { speaker: 'B', ja: 'ああ、{大|おお}きいスーパーにあるよ。ニコニコスーパーとか。', pt: 'Ah, tem nos supermercados grandes. No Niko Niko Super, por exemplo.' },
        { speaker: 'A', ja: 'そうですか。ありがとうございます。', pt: 'Ah, tá. Muito obrigado.' },
      ],
    },
  ],
  '15-12': [
    {
      label: '会話① (15-12)',
      setupJa: '{4人|よにん}のお{客|きゃく}さんが、{店員|てんいん}に{売|う}り{場|ば}を{聞|き}いています。',
      setupPt: 'Quatro clientes perguntam ao funcionário onde fica a seção.',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。ドライヤーは、どこですか？', pt: 'Com licença. Onde fica o secador?' },
        { speaker: 'Funcionário', ja: 'ドライヤーですね。2{階|かい}です。', pt: 'Secador, né. É no 2º andar.' },
        { speaker: 'Cliente', ja: 'あ、どうも。', pt: 'Ah, obrigado.' },
      ],
    },
  ],
  '15-13': [
    {
      label: '会話② (15-13)',
      lines: [
        { speaker: 'Cliente', ja: 'あのう、すみません。カメラは、{何階|なんかい}ですか？', pt: 'Ah, com licença. Em que andar fica a câmera?' },
        { speaker: 'Funcionário', ja: 'はい、4{階|かい}でございます。', pt: 'Sim, é no 4º andar.' },
        { speaker: 'Cliente', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
      ],
    },
  ],
  '15-14': [
    {
      label: '会話③ (15-14)',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。スマホケースがほしいんですが、どこにありますか？', pt: 'Com licença. Eu queria uma capa de celular, onde fica?' },
        { speaker: 'Funcionário', ja: 'あちらでございます。ご{案内|あんない}いたします。', pt: 'É por ali. Eu lhe acompanho.' },
        { speaker: 'Cliente', ja: 'あ、すみません。', pt: 'Ah, obrigado.' },
      ],
    },
  ],
  '15-15': [
    {
      label: '会話④ (15-15)',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。{延長|えんちょう}コードがほしいんですが……。', pt: 'Com licença. Eu queria uma extensão elétrica…' },
        { speaker: 'Funcionário', ja: 'ご{案内|あんない}します。こちらになります。', pt: 'Eu lhe acompanho. É por aqui.' },
        { speaker: 'Cliente', ja: 'はい、ありがとうございます。', pt: 'Sim, muito obrigado.' },
      ],
    },
  ],
  '15-24': [
    {
      label: '会話① (15-24)',
      setupJa: 'ショッピングセンターで、{友|とも}だちと{買|か}い{物|もの}をしながら{話|はな}しています。',
      setupPt: 'Dois amigos conversam enquanto fazem compras no shopping.',
      lines: [
        { speaker: 'A', ja: '{見|み}て、この{傘|かさ}。', pt: 'Olha, este guarda-chuva.' },
        { speaker: 'B', ja: 'おもしろいですね。', pt: 'Que interessante, né.' },
      ],
    },
  ],
  '15-25': [
    {
      label: '会話② (15-25)',
      lines: [
        { speaker: 'A', ja: 'どう？　この{帽子|ぼうし}。', pt: 'E aí? Este chapéu.' },
        { speaker: 'B', ja: 'わあ、かっこいいですね。', pt: 'Uau, que estiloso, né.' },
      ],
    },
  ],
  '15-26': [
    {
      label: '会話③ (15-26)',
      lines: [
        { speaker: 'A', ja: 'このバッグ、かわいい！', pt: 'Esta bolsa, que fofa!' },
        { speaker: 'B', ja: '{本当|ほんとう}！　かわいいですね。', pt: 'É mesmo! Que fofa, né.' },
      ],
    },
  ],
  '15-27': [
    {
      label: '会話④ (15-27)',
      lines: [
        { speaker: 'A', ja: 'このジャケット、いいね。', pt: 'Esta jaqueta, é boa, né.' },
        { speaker: 'B', ja: 'そうですね。それに、{安|やす}いですね。', pt: 'Pois é. E ainda, é barata.' },
      ],
    },
  ],
  '15-28': [
    {
      label: '会話⑤ (15-28)',
      lines: [
        { speaker: 'A', ja: 'このコート、すてき！', pt: 'Este casaco, que lindo!' },
        { speaker: 'B', ja: 'ああ、おしゃれですね。でも、{高|たか}いですね……。', pt: 'Ah, que estiloso, né. Mas é caro…' },
      ],
    },
  ],
}

const lesson15: Section = {
  id: 'lesson-15',
  level: 'starter',
  titleJa: '第15課 電池がほしいんですが…',
  titlePt: 'Lição 15 — Eu queria umas pilhas…',
  summaryPt: 'Nas lojas · dizer o que quer e perguntar onde comprar (電池がほしいんですが、どこで買えますか？), entender em que andar fica um item dentro da loja (カメラは何階ですか？ → 4階でございます), dar impressões sobre produtos enquanto faz compras (おしゃれですね／安いですね) e ler placas e sinais de shopping (入口／出口／化粧室／非常口／押・引く).',
  studyNotes: [
    {
      title: 'Tópico: Nas lojas',
      bodyPt:
        '## Can-do\n' +
        '- Perguntar onde comprar algo e entender a resposta.\n' +
        '- Ler o guia de andares de uma loja.\n' +
        '- Perguntar a um funcionário em que andar/onde fica um item.\n' +
        '- Trocar comentários simples sobre produtos enquanto faz compras.\n' +
        '- Entender as placas e sinais comuns de uma loja/shopping.',
    },
    {
      title: 'Querer algo e perguntar onde comprar: Nがほしいんですが (➊)',
      bodyPt:
        'Estrutura para dizer o que quer e pedir ajuda:\n\n' +
        '`{電池|でんち}がほしいんですが、どこで{買|か}えますか？` = eu queria umas pilhas, onde dá para comprar?\n\n' +
        '- **ほしい** (querer) marca o objeto com **が** (igual a {好|す}き（な）): {電池|でんち}**が**ほしい. Decore 〜がほしいんですが como bloco.\n' +
        '- **〜んですが** explica sua situação e abre espaço para o outro ajudar/responder.\n' +
        '- **どこで{買|か}えますか？** = onde posso comprar? ({買|か}えます = forma potencial de {買|か}う; por ora, decore a frase).\n\n' +
        '💡 Dentro da loja, pergunte ao funcionário: **どこですか？／どこにありますか？／{何階|なんかい}ですか？** — ou só **〜がほしいんですが…** já indica sua intenção.',
    },
    {
      title: 'Onde comprar: lojas e itens (Seção 1 · TIPS)',
      bodyPt:
        '**Lojas:** コンビニ (conveniência), スーパー (supermercado), 100{円|えん}ショップ (loja de 100 ienes / {100均|ひゃっきん}), ドラッグストア (drogaria), ショッピングセンター／ショッピングモール (shopping), ホームセンター (materiais para casa/obras), デパート (loja de departamentos), {家電量販店|かでんりょうはんてん} (loja de eletrônicos).\n\n' +
        '**Itens:** {電池|でんち} (pilha), {洗濯|せんたく}ばさみ (prendedor de roupa), {浴衣|ゆかた} (yukata), {懐中電灯|かいちゅうでんとう} (lanterna), （お）{弁当箱|べんとうばこ} (marmita), ココナッツミルク (leite de coco), {延長|えんちょう}コード (extensão elétrica), スマホケース (capa de celular), ドライヤー (secador), カメラ (câmera).\n\n' +
        '**Úteis:** {駅前|えきまえ} (em frente à estação), お{店|みせ} (loja), 〜とか (…por exemplo / tipo).',
    },
    {
      title: 'Andares e linguagem de loja (Seção 3)',
      bodyPt:
        '**Contador 〜{階|かい} (andar):**\n\n' +
        '| | leitura |\n|---|---|\n' +
        '| 1{階|かい} | いっかい |\n| 2{階|かい} | にかい |\n| 3{階|かい} | さんがい／さんかい |\n| 4{階|かい} | よんかい |\n| 6{階|かい} | ろっかい |\n| 8{階|かい} | はっかい／はちかい |\n| 10{階|かい} | じゅっかい |\n| ？ | {何階|なんがい}／なんかい |\n\n' +
        '🔖 **Linguagem do funcionário (mais polida):** 〜でございます ＝ 〜になります ＝ **〜です**.\n\n' +
        '- `4{階|かい}でございます` = é no 4º andar. · `こちらになります` = é por aqui.\n' +
        '- **ご{案内|あんない}します／ご{案内|あんない}いたします** = eu lhe acompanho / vou te mostrar.\n' +
        '- {何階|なんかい} (que andar), こちら (aqui), あちら (ali).',
    },
    {
      title: 'Dar impressões sobre produtos: ナA-ですね／イA-いですね (➋)',
      bodyPt:
        'Comentar/dar impressão sobre algo enquanto faz compras:\n\n' +
        '| tipo | forma | exemplo |\n|---|---|---|\n' +
        '| ナ-adjetivo | 〜ですね / 〜！ | おしゃれですね · すてき！ |\n' +
        '| イ-adjetivo | 〜いですね / 〜い！ | {安|やす}いですね · かわいい！ |\n\n' +
        '- **ね** pede a concordância/empatia do outro. **〜ですね** é dirigido a alguém; falando sozinho, não se usa.\n' +
        '- かわいい！／すてき！ (sem ですね) = exclamação curta.\n\n' +
        '**Adjetivos どう？:** かっこいい, かわいい, {高|たか}い, {安|やす}い, おもしろい (イ-adj) · きれい(な), すてき(な), おしゃれ(な), {変|へん}(な) (ナ-adj). ⚠️ **きれい** é ナ-adjetivo (apesar do い).\n\n' +
        '**Conectores:** **それに** (além disso, +) · **でも** (mas, −) · **{本当|ほんとう}！** (é mesmo!).\n\n' +
        '**Produtos:** バッグ/かばん, くつ{下|した}, シャツ, ズボン/パンツ, Tシャツ, ワンピース, くつ, ネクタイ, {帽子|ぼうし}, {傘|かさ}, ジャケット, コート.',
    },
    {
      title: 'Placas e sinais de loja/shopping (Seção 5)',
      bodyPt:
        '**Entradas/saídas:** {入口|いりぐち} (entrada · お{客様|きゃくさま}{入口|いりぐち}), {出口|でぐち}・EXIT (saída), {化粧室|けしょうしつ} (banheiro), {非常口|ひじょうぐち} (saída de emergência).\n\n' +
        '**Portas e botões (pares de opostos):** {押|お}（{押|お}す） = empurre (PUSH) ↔ {引|ひ}く = puxe (PULL); {開|ひら}く = abrir ↔ {閉|と}じる = fechar (botões 開/閉 do elevador); {上|のぼ}り = subida ↔ {下|くだ}り = descida (エスカレーター).\n\n' +
        '**Kanji da lição:** {入口|いりぐち}, {出口|でぐち}, 〜{階|かい}, {押|お}す, {引|ひ}く, {安|やす}い.',
    },
  ],
  groups: [lesson15Group],
  audios: attachScripts(15, L15_SCRIPTS),
}

const lesson16Group: ExerciseGroup = {
  id: 'iro-s-l16',
  title: 'これ、いくらですか？',
  subtitlePt: 'Preços, pedir o preço, dizer quantos/quanto quer, caixa da conveniência e entender placas de desconto',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l16-1', number: 1, prompt: '「これ」 (apontando um produto) é:', choices: [{ n: 1, text: 'isto (perto de quem fala)' }, { n: 2, text: 'isso (perto de quem ouve)' }, { n: 3, text: 'aquilo (longe dos dois)' }, { n: 4, text: 'onde' }], answer: 1, explanationPt: 'これ = isto, algo perto do falante. Par com ここ/こちら. (Nota ➊)' },
    { id: 'iro-s-l16-2', number: 2, prompt: '「それ」 é usado para algo:', choices: [{ n: 1, text: 'perto de quem ouve (o interlocutor)' }, { n: 2, text: 'perto de quem fala' }, { n: 3, text: 'longe dos dois' }, { n: 4, text: 'que não se vê' }], answer: 1, explanationPt: 'それ = isso, algo perto do ouvinte. (Nota ➊)' },
    { id: 'iro-s-l16-3', number: 3, prompt: '「あれ」 aponta algo:', choices: [{ n: 1, text: 'longe do falante e do ouvinte' }, { n: 2, text: 'perto do falante' }, { n: 3, text: 'perto do ouvinte' }, { n: 4, text: 'na mão do ouvinte' }], answer: 1, explanationPt: 'あれ = aquilo, longe dos dois. Ex.: あのTシャツ → あれは1,990円です. (Nota ➊)' },
    { id: 'iro-s-l16-4', number: 4, prompt: '「いくら」 significa:', choices: [{ n: 1, text: 'quanto (custa)?' }, { n: 2, text: 'quantos?' }, { n: 3, text: 'quando?' }, { n: 4, text: 'onde?' }], answer: 1, explanationPt: 'いくら = quanto custa? Interrogativo de preço. これ、いくらですか？ (Nota ➊)' },
    { id: 'iro-s-l16-5', number: 5, prompt: 'Para perguntar o preço apontando algo perto de você, diz-se:', choices: [{ n: 1, text: 'これ、いくらですか？' }, { n: 2, text: 'これ、どこですか？' }, { n: 3, text: 'これ、なんですか？' }, { n: 4, text: 'これ、いつですか？' }], answer: 1, translationPt: 'Quanto custa isto?', explanationPt: '（これ／それ／あれ）（は）いくらですか？ = quanto custa? Diálogos 16-07~10. (Nota ➊ · Seção 1)' },
    { id: 'iro-s-l16-6', number: 6, prompt: 'Antes de um substantivo (N), usa-se:', choices: [{ n: 1, text: 'この／その／あの ＋ N (não これ／それ／あれ)' }, { n: 2, text: 'これ／それ／あれ ＋ N' }, { n: 3, text: 'ここ／そこ／あそこ ＋ N' }, { n: 4, text: 'こちら／そちら／あちら ＋ N' }], answer: 1, explanationPt: 'Diante de substantivo: **この／その／あの** + N (このお{菓子|かし}, そのカレンダー, あのTシャツ). これ/それ/あれ ficam sozinhos. (Nota ➋)' },
    { id: 'iro-s-l16-7', number: 7, prompt: '「そのカレンダー、いくらですか？」 significa:', choices: [{ n: 1, text: 'quanto custa esse calendário (aí perto de você)?' }, { n: 2, text: 'quanto custa este calendário (aqui)?' }, { n: 3, text: 'onde fica o calendário?' }, { n: 4, text: 'que calendário é esse?' }], answer: 1, explanationPt: 'そのカレンダー = esse calendário (perto do ouvinte/funcionário). Diálogo 16-11. (Nota ➋)' },
    { id: 'iro-s-l16-8', number: 8, prompt: 'Para recusar educadamente a compra (“então, deixa pra lá”), diz-se:', choices: [{ n: 1, text: 'じゃあ、いいです。／けっこうです。' }, { n: 2, text: 'じゃあ、ください。' }, { n: 3, text: 'じゃあ、お{願|ねが}いします。' }, { n: 4, text: 'じゃあ、それです。' }], answer: 1, explanationPt: '⚠️ いいです／けっこうです aqui = “não, obrigado” (recusa). Diálogo 16-13: {高|たか}い招き猫 → じゃあ、いいです. (Seção 1)' },
    { id: 'iro-s-l16-9', number: 9, prompt: '「〜ください」 (ex.: たい{焼|や}き8つ、ください) serve para:', choices: [{ n: 1, text: 'pedir/comprar algo (me dê ~, por favor)' }, { n: 2, text: 'recusar' }, { n: 3, text: 'perguntar o preço' }, { n: 4, text: 'agradecer' }], answer: 1, explanationPt: '〜ください = me dê ~ / quero ~ (pedido em loja). Também 〜をお{願|ねが}いします. (第6課 · Seção 3)' },
    { id: 'iro-s-l16-10', number: 10, prompt: '「〜ずつ」 (ex.: 2{個|こ}ずつ) significa:', choices: [{ n: 1, text: '~ de cada (mesma quantidade de cada item)' }, { n: 2, text: '~ no total' }, { n: 3, text: 'só ~' }, { n: 4, text: 'mais ou menos ~' }], answer: 1, translationPt: 'dois de cada', explanationPt: '〜ずつ = a mesma quantidade de cada. チョコレートケーキとチーズケーキ、2{個|こ}ずつ ＝ 2 de cada. (Nota ➌)' },
    { id: 'iro-s-l16-11', number: 11, prompt: 'O contador 「{個|こ}」 — leituras de 1{個|こ}, 6{個|こ}, 10{個|こ}, ?{個|こ} são:', choices: [{ n: 1, text: 'いっこ / ろっこ / じゅっこ / なんこ' }, { n: 2, text: 'いちこ / ろくこ / じゅうこ / なんこ' }, { n: 3, text: 'ひとこ / むっこ / とおこ / いくこ' }, { n: 4, text: 'いっこ / ろくこ / じゅっこ / どんこ' }], answer: 1, explanationPt: 'Contador {個|こ}: 1いっこ, 6ろっこ, 8はっこ／はちこ, 10じゅっこ, ?なんこ. Para objetos pequenos. (Seção 3)' },
    { id: 'iro-s-l16-12', number: 12, prompt: 'O contador 「つ」 (ひとつ, ふたつ…) conta:', choices: [{ n: 1, text: 'objetos em geral (1 a 10): ひとつ, ふたつ, みっつ… とお' }, { n: 2, text: 'só pessoas' }, { n: 3, text: 'só dias' }, { n: 4, text: 'só dinheiro' }], answer: 1, explanationPt: 'つ = contador genérico até 10: ひとつ, ふたつ, みっつ, よっつ… やっつ, ここのつ, とお. Ex.: たい{焼|や}き8つ. (Seção 3)' },
    { id: 'iro-s-l16-13', number: 13, prompt: '「g（グラム）」 é a unidade de:', choices: [{ n: 1, text: 'peso (gramas) — ex.: ひき{肉|にく}200g' }, { n: 2, text: 'comprimento' }, { n: 3, text: 'volume' }, { n: 4, text: 'preço' }], answer: 1, explanationPt: 'g＝グラム (gramas). ひき{肉|にく}200グラム、ください. Usado em açougue/peso. (Seção 3)' },
    { id: 'iro-s-l16-14', number: 14, prompt: '「かしこまりました」 (dito pelo funcionário) equivale a:', choices: [{ n: 1, text: 'わかりました (entendido / certo) — forma polida de loja' }, { n: 2, text: 'ありがとう' }, { n: 3, text: 'すみません' }, { n: 4, text: 'いらっしゃいませ' }], answer: 1, explanationPt: '🔖 かしこまりました ＝ わかりました (polido, usado por funcionários ao aceitar pedido). (Seção 3)' },
    { id: 'iro-s-l16-15', number: 15, prompt: 'O sufixo 「〜{屋|や}」 (em {肉屋|にくや}, ケーキ{屋|や}) indica:', choices: [{ n: 1, text: 'loja/estabelecimento que vende aquilo ({肉屋|にくや} = açougue)' }, { n: 2, text: 'a pessoa que come' }, { n: 3, text: 'o preço' }, { n: 4, text: 'o andar' }], answer: 1, explanationPt: '〜{屋|や} = loja de ~: {肉屋|にくや} (açougue), ケーキ{屋|や} (confeitaria), おにぎり{屋|や}, たい{焼|や}き{屋|や}, {惣菜屋|そうざいや}. (Seção 3)' },
    { id: 'iro-s-l16-16', number: 16, prompt: 'No caixa da conveniência, 「こちら、{温|あたた}めますか？」 pergunta:', choices: [{ n: 1, text: 'quer que (eu) esquente isto (no micro-ondas)?' }, { n: 2, text: 'quer um saco?' }, { n: 3, text: 'como vai pagar?' }, { n: 4, text: 'quantos talheres?' }], answer: 1, explanationPt: '{温|あたた}めます（{温|あたた}める）= esquentar. こちら、{温|あたた}めますか？ = esquento isto? Responde はい、お{願|ねが}いします / いえ、けっこうです. (Seção 4)' },
    { id: 'iro-s-l16-17', number: 17, prompt: '「{袋|ふくろ}」 é:', choices: [{ n: 1, text: 'sacola / saco' }, { n: 2, text: 'colher' }, { n: 3, text: 'canudo' }, { n: 4, text: 'pauzinho' }], answer: 1, explanationPt: '{袋|ふくろ} = sacola. {袋|ふくろ}は、どうしますか？ = quer sacola? Responde お{願|ねが}いします / だいじょうぶです. (Seção 4)' },
    { id: 'iro-s-l16-18', number: 18, prompt: 'Os talheres/itens 「スプーン／おはし／フォーク／ストロー」 são:', choices: [{ n: 1, text: 'colher / pauzinhos / garfo / canudo' }, { n: 2, text: 'garfo / colher / faca / guardanapo' }, { n: 3, text: 'colher / copo / garfo / sacola' }, { n: 4, text: 'pauzinhos / colher / prato / canudo' }], answer: 1, explanationPt: 'スプーン (colher), おはし (pauzinhos), フォーク (garfo), ストロー (canudo). スプーンは、いくつ、おつけしますか？ (Seção 4)' },
    { id: 'iro-s-l16-19', number: 19, prompt: '「お{次|つぎ}の{方|かた}、どうぞ」 (funcionário) significa:', choices: [{ n: 1, text: 'o próximo, por favor (chamando o próximo cliente)' }, { n: 2, text: 'volte sempre' }, { n: 3, text: 'pode pagar ali' }, { n: 4, text: 'está esgotado' }], answer: 1, explanationPt: '🔖 お{次|つぎ}の{方|かた}、どうぞ = o próximo da fila, por favor. Linguagem de loja. (Seção 4)' },
    { id: 'iro-s-l16-20', number: 20, prompt: 'Na fala do funcionário, 「こちら」 equivale a:', choices: [{ n: 1, text: 'これ (isto) — forma mais polida' }, { n: 2, text: 'ここ (aqui)' }, { n: 3, text: 'どちら (qual)' }, { n: 4, text: 'あちら (ali)' }], answer: 1, explanationPt: '🔖 こちら ＝ これ (polido). こちら、{温|あたた}めますか？ = esquento isto? (Seção 4)' },
    { id: 'iro-s-l16-21', number: 21, prompt: '「（スプーンは、いくつ）おつけしますか？」 significa:', choices: [{ n: 1, text: 'quantos (de algo) o sr./sra. quer que eu coloque/inclua?' }, { n: 2, text: 'quanto custa?' }, { n: 3, text: 'quer esquentar?' }, { n: 4, text: 'como vai pagar?' }], answer: 1, explanationPt: '🔖 おつけしますか？ = devo incluir/adicionar ~? (Shall I add ~?). スプーンは、いくつ、おつけしますか？ (Seção 4)' },
    { id: 'iro-s-l16-22', number: 22, prompt: '「お{会計|かいけい}、825{円|えん}になります」 significa:', choices: [{ n: 1, text: 'o total fica/dá 825 ienes' }, { n: 2, text: 'são 825 ienes de troco' }, { n: 3, text: 'falta pagar 825 ienes' }, { n: 4, text: '825 ienes de desconto' }], answer: 1, explanationPt: '🔖 お{会計|かいけい}、〜になります = o total é ~. {会計|かいけい} = conta/total. (Seção 4)' },
    { id: 'iro-s-l16-23', number: 23, prompt: 'Para recusar a sacola, o cliente diz:', choices: [{ n: 1, text: 'だいじょうぶです。 (não precisa)' }, { n: 2, text: 'お{願|ねが}いします。' }, { n: 3, text: 'ください。' }, { n: 4, text: 'いくらですか。' }], answer: 1, explanationPt: 'だいじょうぶです = “tá tudo bem (não precisa)”, recusa educada. Também いえ、けっこうです. {袋|ふくろ}は、どうしますか？→ だいじょうぶです. (Seção 4)' },
    { id: 'iro-s-l16-24', number: 24, prompt: '「Suicaでお{願|ねが}いします」 — a partícula で indica:', choices: [{ n: 1, text: 'o meio de pagamento (pago com Suica)' }, { n: 2, text: 'o lugar' }, { n: 3, text: 'a companhia' }, { n: 4, text: 'o tempo' }], answer: 1, translationPt: 'Com o Suica, por favor.', explanationPt: '〜でお{願|ねが}いします = com ~, por favor (meio: で). Suicaで／カードで／{現金|げんきん}で. (Seção 4)' },
    { id: 'iro-s-l16-25', number: 25, prompt: 'São formas de pagamento citadas na lição:', choices: [{ n: 1, text: 'クレジットカード, Edy, PayPay, Suica' }, { n: 2, text: 'スプーン, フォーク, ストロー' }, { n: 3, text: '肉屋, ケーキ屋, おにぎり屋' }, { n: 4, text: '入口, 出口, 非常口' }], answer: 1, explanationPt: 'Pagamento: クレジットカード (cartão de crédito), Edy, PayPay, Suica (IC card). (Seção 4)' },
    { id: 'iro-s-l16-26', number: 26, prompt: '「こちらにタッチしてください」 (com cartão Suica) pede para:', choices: [{ n: 1, text: 'encostar/aproximar o cartão aqui' }, { n: 2, text: 'assinar aqui' }, { n: 3, text: 'inserir a senha' }, { n: 4, text: 'pegar o troco' }], answer: 1, explanationPt: 'タッチする = encostar (tap). こちらにタッチしてください = encoste (o cartão) aqui. Suica paga transporte e compras. (Seção 4)' },
    { id: 'iro-s-l16-27', number: 27, prompt: 'No dinheiro japonês, 「{紙幣|しへい}（お{札|さつ}）」 e 「{硬貨|こうか}（{玉|たま}）」 são, respectivamente:', choices: [{ n: 1, text: 'cédulas (notas) e moedas' }, { n: 2, text: 'moedas e cédulas' }, { n: 3, text: 'cartão e cédulas' }, { n: 4, text: 'troco e desconto' }], answer: 1, explanationPt: '{紙幣|しへい}/お{札|さつ} = cédulas (1万・5千・2千・千{円|えん}); {硬貨|こうか} = moedas (500・100・50・10・5・1{円|えん}{玉|だま}). (TIPS)' },
    { id: 'iro-s-l16-28', number: 28, prompt: '「{招|まね}き{猫|ねこ}」 é:', choices: [{ n: 1, text: 'gatinho da sorte (estatueta com a pata erguida)' }, { n: 2, text: 'um doce' }, { n: 3, text: 'uma loja' }, { n: 4, text: 'um talher' }], answer: 1, explanationPt: '{招|まね}き{猫|ねこ} = maneki-neko, estatueta de gato que “chama” clientes/sorte. Diálogo 16-13, 8,800{円|えん}. (TIPS)' },
    { id: 'iro-s-l16-29', number: 29, prompt: 'Numa placa, 「{二割引|にわりびき}」 significa:', choices: [{ n: 1, text: '20% de desconto (2 “décimos” de desconto)' }, { n: 2, text: '2% de desconto' }, { n: 3, text: '2 ienes de desconto' }, { n: 4, text: '2 vezes o preço' }], answer: 1, translationPt: 'desconto de 20%', explanationPt: '〜{割引|わりびき} = ~ décimos de desconto. {二割引|にわりびき} = 20% off. {表示価格|ひょうじかかく}より{二割引|にわりびき}: 500{円|えん} → 400{円|えん}. (Seção 5)' },
    { id: 'iro-s-l16-30', number: 30, prompt: 'Nas placas de desconto, 「{半額|はんがく}」 / 「〜{円均一|えんきんいつ}」 / 「{値下価格|ねさげかかく}」 significam:', choices: [{ n: 1, text: 'metade do preço / tudo a ~ ienes / preço já rebaixado' }, { n: 2, text: 'preço cheio / sem desconto / esgotado' }, { n: 3, text: 'dobro do preço / só hoje / grátis' }, { n: 4, text: 'desconto de 10% / 5% / 1%' }], answer: 1, explanationPt: '{半額|はんがく} = metade do preço (420→210); 〜{円均一|えんきんいつ} = tudo por ~ ienes (50{円均一|えんきんいつ}); {値下価格|ねさげかかく} = preço rebaixado. Também 〜％{引|びき} / 〜{円引|えんびき}. (Seção 5)' },
    { id: 'iro-s-l16-31', number: 31, prompt: 'Diálogo 16-11: 「そのカレンダー、いくらですか？」 — o que acontece?', context: '{客|きゃく}：すみません。そのカレンダー、いくらですか？ {店員|てんいん}：あ、これは2,040{円|えん}です。 {客|きゃく}：じゃあ、それ、ください。', choices: [{ n: 1, text: 'Custa 2,040 ienes e o cliente decide levar ("それ、ください")' }, { n: 2, text: 'Custa 2,040 ienes mas o cliente recusa' }, { n: 3, text: 'Está esgotado' }, { n: 4, text: 'Custa 230 ienes' }], answer: 1, explanationPt: '2,040{円|えん} → じゃあ、それ、ください (então, esse, por favor) = vai levar. Note それ (perto do funcionário). (Seção 2)' },
    { id: 'iro-s-l16-32', number: 32, prompt: 'Diálogo 16-13: o {招|まね}き{猫|ねこ} custa 8,800{円|えん} — o que o cliente faz?', context: '{客|きゃく}：あのう、これ、いくらですか？ {店員|てんいん}：ああ、その{招|まね}き{猫|ねこ}は……、えっと、8,800{円|えん}です。 {客|きゃく}：そうですか……。じゃあ、いいです。', choices: [{ n: 1, text: 'Recusa educadamente (じゃあ、いいです = deixa pra lá)' }, { n: 2, text: 'Leva o gato' }, { n: 3, text: 'Pede dois' }, { n: 4, text: 'Pergunta o andar' }], answer: 1, explanationPt: '⚠️ じゃあ、いいです = “então, deixa” (recusa), não “então, sim”. O preço {高|たか}い fez o cliente desistir. (Seção 2)' },
    { id: 'iro-s-l16-33', number: 33, prompt: 'Diálogo 16-29 (caixa da conveniência): qual a ordem das perguntas do funcionário?', context: '{店員|てんいん}：お{次|つぎ}の{方|かた}、どうぞ。… こちら、{温|あたた}めますか？ → スプーンは、いくつ、おつけしますか？ → {袋|ふくろ}は、どうしますか？ → お{会計|かいけい}、825{円|えん}になります。', choices: [{ n: 1, text: 'esquentar? → talheres? → sacola? → total/pagamento' }, { n: 2, text: 'pagamento → sacola → esquentar → talheres' }, { n: 3, text: 'sacola → esquentar → pagamento → talheres' }, { n: 4, text: 'talheres → pagamento → esquentar → sacola' }], answer: 1, explanationPt: 'Sequência do caixa: {温|あたた}めますか？→ スプーン…おつけしますか？→ {袋|ふくろ}は、どうしますか？→ お{会計|かいけい}…になります → Suicaで → タッチしてください. (Seção 4)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 16 (聴解スクリプト)
const L16_SCRIPTS: Record<string, ScriptItem[]> = {
  '16-07': [
    {
      label: '会話① (16-07)',
      setupJa: 'お{客|きゃく}さんが、{商品|しょうひん}の{値段|ねだん}を{聞|き}いています。',
      setupPt: 'Clientes perguntam o preço de um produto.',
      lines: [
        { speaker: 'Cliente', ja: 'あのう、これ、いくらですか？', pt: 'Com licença, quanto custa isto?' },
        { speaker: 'Funcionário', ja: '300{円|えん}です。', pt: 'São 300 ienes.' },
      ],
    },
  ],
  '16-08': [
    {
      label: '会話② (16-08)',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。これ、いくらですか？', pt: 'Com licença. Quanto custa isto?' },
        { speaker: 'Funcionário', ja: 'これ？　1,980{円|えん}。', pt: 'Isto? 1.980 ienes.' },
      ],
    },
  ],
  '16-09': [
    {
      label: '会話③ (16-09)',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。これ、いくらですか？', pt: 'Com licença. Quanto custa isto?' },
        { speaker: 'Funcionário', ja: 'これですか？　えっと、2,000{円|えん}です。', pt: 'Isto? Hmm, são 2.000 ienes.' },
      ],
    },
  ],
  '16-10': [
    {
      label: '会話④ (16-10)',
      lines: [
        { speaker: 'Cliente', ja: 'あのう、すみません。これ、いくらですか？', pt: 'Ah, com licença. Quanto custa isto?' },
        { speaker: 'Funcionário', ja: 'はい、これですね。えっと、34,500{円|えん}です。', pt: 'Sim, isto, né. Hmm, são 34.500 ienes.' },
      ],
    },
  ],
  '16-11': [
    {
      label: '会話① (16-11)',
      setupJa: 'お{客|きゃく}さんが、{値段|ねだん}を{聞|き}いて{買|か}い{物|もの}をしています。',
      setupPt: 'Clientes perguntam o preço e fazem a compra.',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。そのカレンダー、いくらですか？', pt: 'Com licença. Quanto custa esse calendário?' },
        { speaker: 'Funcionário', ja: 'あ、これは2,040{円|えん}です。', pt: 'Ah, este aqui é 2.040 ienes.' },
        { speaker: 'Cliente', ja: 'じゃあ、それ、ください。', pt: 'Então, esse, por favor.' },
      ],
    },
  ],
  '16-12': [
    {
      label: '会話② (16-12)',
      lines: [
        { speaker: 'Cliente', ja: 'このお{菓子|かし}、いくらですか？', pt: 'Quanto custa este doce?' },
        { speaker: 'Funcionário', ja: '230{円|えん}です。', pt: 'São 230 ienes.' },
        { speaker: 'Cliente', ja: 'じゃあ、これもお{願|ねが}いします。', pt: 'Então, este também, por favor.' },
      ],
    },
  ],
  '16-13': [
    {
      label: '会話③ (16-13)',
      lines: [
        { speaker: 'Cliente', ja: 'あのう、これ、いくらですか？', pt: 'Ah, quanto custa isto?' },
        { speaker: 'Funcionário', ja: 'ああ、その{招|まね}き{猫|ねこ}は……、えっと、8,800{円|えん}です。', pt: 'Ah, esse maneki-neko… hmm, são 8.800 ienes.' },
        { speaker: 'Cliente', ja: 'そうですか……。じゃあ、いいです。', pt: 'Ah, sei… então, deixa pra lá.' },
      ],
    },
  ],
  '16-14': [
    {
      label: '会話④ (16-14)',
      lines: [
        { speaker: 'Cliente', ja: 'すみません。あのTシャツ、いくらですか？', pt: 'Com licença. Quanto custa aquela camiseta?' },
        { speaker: 'Funcionário', ja: 'あ、あれは1,990{円|えん}です。', pt: 'Ah, aquela é 1.990 ienes.' },
        { speaker: 'Cliente', ja: 'じゃあ、あれ、ください。', pt: 'Então, aquela, por favor.' },
      ],
    },
  ],
  '16-18': [
    {
      label: '会話① (16-18)',
      setupJa: 'お{客|きゃく}さんが、ほしいものと{数|かず}／{量|りょう}を{言|い}って{買|か}い{物|もの}をしています。',
      setupPt: 'Clientes dizem o item e a quantidade que querem comprar.',
      lines: [
        { speaker: 'Funcionário', ja: 'いらっしゃいませ。', pt: 'Bem-vindo(a).' },
        { speaker: 'Cliente', ja: 'たい{焼|や}き8つ、ください。', pt: 'Oito taiyaki, por favor.' },
        { speaker: 'Funcionário', ja: 'はい、たい{焼|や}き8つ。ありがとうございます。', pt: 'Certo, oito taiyaki. Obrigado.' },
      ],
    },
  ],
  '16-19': [
    {
      label: '会話② (16-19)',
      lines: [
        { speaker: 'Funcionário', ja: 'はい、いらっしゃい。', pt: 'Bem-vindo(a).' },
        { speaker: 'Cliente', ja: 'えっと、コロッケ4つと、シュウマイ10{個|こ}、ください。', pt: 'Hmm, quatro croquetes e dez shumai, por favor.' },
        { speaker: 'Funcionário', ja: 'はい、コロッケ4つと、シュウマイ10{個|こ}ね。', pt: 'Certo, quatro croquetes e dez shumai, né.' },
      ],
    },
  ],
  '16-20': [
    {
      label: '会話③ (16-20)',
      lines: [
        { speaker: 'Funcionário', ja: 'いらっしゃいませ。', pt: 'Bem-vindo(a).' },
        { speaker: 'Cliente', ja: 'このひき{肉|にく}200g、ください。', pt: 'Esta carne moída, 200 g, por favor.' },
        { speaker: 'Funcionário', ja: 'はい、200gですね。', pt: 'Certo, 200 g, né.' },
      ],
    },
  ],
  '16-21': [
    {
      label: '会話④ (16-21)',
      lines: [
        { speaker: 'Funcionário', ja: 'いらっしゃいませ。', pt: 'Bem-vindo(a).' },
        { speaker: 'Cliente', ja: 'チョコレートケーキとチーズケーキ、2{個|こ}ずつお{願|ねが}いします。', pt: 'Bolo de chocolate e cheesecake, dois de cada, por favor.' },
        { speaker: 'Funcionário', ja: 'はい、2{個|こ}ずつですね。かしこまりました。', pt: 'Certo, dois de cada, né. Entendido.' },
      ],
    },
  ],
  '16-22': [
    {
      label: '会話⑤ (16-22)',
      lines: [
        { speaker: 'Funcionário', ja: 'いらっしゃいませ。', pt: 'Bem-vindo(a).' },
        { speaker: 'Cliente', ja: 'えーと、{昆布|こんぶ}2つ、たらこ1つ、{梅|うめ}3つ、ください。', pt: 'Hmm, dois de kombu, um de tarako, três de ume, por favor.' },
        { speaker: 'Funcionário', ja: 'はい、{昆布|こんぶ}が2つ、たらこが1つ、{梅|うめ}が3つですね。', pt: 'Certo, dois de kombu, um de tarako, três de ume, né.' },
      ],
    },
  ],
  '16-29': [
    {
      label: '会話 (16-29)',
      setupJa: 'コンビニで{買|か}い{物|もの}をしています。{今|いま}、レジで{会計|かいけい}をしています。',
      setupPt: 'A pessoa faz compras na loja de conveniência. Agora está pagando no caixa.',
      lines: [
        { speaker: 'Funcionário', ja: 'お{次|つぎ}の{方|かた}、どうぞ。', pt: 'O próximo, por favor.' },
        { speaker: 'Cliente', ja: 'お{願|ねが}いします。', pt: 'Por favor.' },
        { speaker: 'Funcionário', ja: 'こちら、{温|あたた}めますか？', pt: 'Quer que eu esquente isto?' },
        { speaker: 'Cliente', ja: 'はい、お{願|ねが}いします。', pt: 'Sim, por favor.' },
        { speaker: 'Funcionário', ja: 'スプーンは、いくつ、おつけしますか？', pt: 'Quantas colheres devo colocar?' },
        { speaker: 'Cliente', ja: 'あ、2つ、お{願|ねが}いします。', pt: 'Ah, duas, por favor.' },
        { speaker: 'Funcionário', ja: '{袋|ふくろ}は、どうしますか？', pt: 'E quanto à sacola?' },
        { speaker: 'Cliente', ja: 'だいじょうぶです。', pt: 'Não precisa.' },
        { speaker: 'Funcionário', ja: 'お{会計|かいけい}、825{円|えん}になります。', pt: 'O total fica em 825 ienes.' },
        { speaker: 'Cliente', ja: 'Suicaでお{願|ねが}いします。', pt: 'Com o Suica, por favor.' },
        { speaker: 'Funcionário', ja: 'こちらにタッチしてください。ありがとうございました。', pt: 'Encoste (o cartão) aqui, por favor. Muito obrigado.' },
      ],
    },
  ],
}

const lesson16: Section = {
  id: 'lesson-16',
  level: 'starter',
  titleJa: '第16課 これ、いくらですか？',
  titlePt: 'Lição 16 — Quanto custa isto?',
  summaryPt: 'Nas lojas · perguntar o preço apontando um produto (これ／そのカレンダー、いくらですか？ → ◯◯円です), dizer o item e a quantidade que quer comprar (たい焼き8つ、ください／2個ずつお願いします), responder às perguntas do caixa da conveniência (温めますか？／スプーンは？／袋は？／支払い) e ler placas de desconto (二割引／半額／〜円均一).',
  studyNotes: [
    {
      title: 'Tópico: Nas lojas (preços e compras)',
      bodyPt:
        '## Can-do\n' +
        '- Entender o preço de um produto exposto.\n' +
        '- Perguntar o preço apontando algo e entender a resposta.\n' +
        '- Dizer o item e a quantidade/peso que quer comprar.\n' +
        '- Responder às perguntas do caixa da conveniência (esquentar, talheres, sacola, pagamento).\n' +
        '- Ler placas de desconto e calcular o preço.',
    },
    {
      title: 'Perguntar o preço: これ／それ／あれ、いくらですか？ (➊)',
      bodyPt:
        'Aponte o produto e pergunte o preço:\n\n' +
        '`これ、いくらですか？` = quanto custa isto?\n\n' +
        '| | objeto | uso |\n|---|---|---|\n' +
        '| こ | これ | perto de **quem fala** |\n' +
        '| そ | それ | perto de **quem ouve** |\n' +
        '| あ | あれ | **longe** dos dois |\n\n' +
        '- **いくら** = quanto custa? Resposta: `〜{円|えん}です` (ex.: 300{円|えん}です).\n' +
        '- Mesma lógica de ここ/そこ/あそこ (→ Lição 8). 💡 Versão casual falada: こっち/そっち/あっち.\n\n' +
        '⚠️ **じゃあ、いいです／けっこうです** numa compra = **recusa** (“deixa pra lá”), não “sim”.',
    },
    {
      title: 'Demonstrativo antes do substantivo: この／その／あの ＋ N (➋)',
      bodyPt:
        'Diante de um substantivo, use **この／その／あの** (não これ/それ/あれ):\n\n' +
        '`そのカレンダー、いくらですか？` = quanto custa esse calendário?\n\n' +
        '| こ・そ・あ | objeto | + N | lugar | direção |\n|---|---|---|---|---|\n' +
        '| こ | これ | この N | ここ | こちら（こっち） |\n' +
        '| そ | それ | その N | そこ | そちら（そっち） |\n' +
        '| あ | あれ | あの N | あそこ | あちら（あっち） |\n\n' +
        'Ex.: あのTシャツ → 店員: あれは1,990{円|えん}です (a referência muda conforme quem fala).',
    },
    {
      title: 'Dizer quanto/quantos: 〜ください e 〜ずつ (➌)',
      bodyPt:
        'Diga o item + a quantidade + **ください** / **お{願|ねが}いします**:\n\n' +
        '- `たい{焼|や}き8つ、ください` · `ひき{肉|にく}200g、ください` · `コロッケ4つと、シュウマイ10{個|こ}、ください`\n\n' +
        '**〜ずつ** = a mesma quantidade **de cada**: `チョコレートケーキとチーズケーキ、2{個|こ}ずつ` ＝ 2 de cada.\n\n' +
        '**Contador {個|こ}** (objetos pequenos):\n\n' +
        '| | leitura | | leitura |\n|---|---|---|---|\n' +
        '| 1{個|こ} | いっこ | 6{個|こ} | ろっこ |\n' +
        '| 2{個|こ} | にこ | 7{個|こ} | ななこ |\n' +
        '| 3{個|こ} | さんこ | 8{個|こ} | はちこ／はっこ |\n' +
        '| 4{個|こ} | よんこ | 9{個|こ} | きゅうこ |\n' +
        '| 5{個|こ} | ごこ | 10{個|こ} | じゅっこ |\n' +
        '| ? | なんこ | g | グラム (peso) |\n\n' +
        '**Contador つ** (genérico, 1–10): ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお.\n\n' +
        '**Lojas 〜{屋|や}:** {肉屋|にくや} (açougue), ケーキ{屋|や} (confeitaria), おにぎり{屋|や}, たい{焼|や}き{屋|や}, {惣菜屋|そうざいや} (comida pronta). 🔖 **かしこまりました** ＝ わかりました (polido).',
    },
    {
      title: 'No caixa da conveniência: temperatura, talheres, sacola, pagamento (Seção 4)',
      bodyPt:
        'O funcionário pergunta, o cliente responde:\n\n' +
        '| funcionário | aceitar | recusar |\n|---|---|---|\n' +
        '| こちら、{温|あたた}めますか？ | はい、お{願|ねが}いします | いえ、けっこうです |\n' +
        '| スプーンは、いくつ、おつけしますか？ | 2つ、お{願|ねが}いします | いえ、けっこうです |\n' +
        '| {袋|ふくろ}は、どうしますか？ | お{願|ねが}いします | だいじょうぶです |\n\n' +
        '- **{温|あたた}める** = esquentar · **{袋|ふくろ}** = sacola · talheres: **スプーン** (colher), **おはし** (pauzinhos), **フォーク** (garfo), **ストロー** (canudo).\n' +
        '- **Pagamento:** お{会計|かいけい}、825{円|えん}になります → **〜でお{願|ねが}いします** (Suicaで／カードで／{現金|げんきん}で). Formas: クレジットカード, Edy, PayPay, Suica. Com IC card: **こちらにタッチしてください** (タッチする = encostar).\n\n' +
        '🔖 **Linguagem de loja:** お{次|つぎ}の{方|かた}、どうぞ (o próximo) · こちら ＝ これ · おつけしますか？ (devo incluir?) · お{会計|かいけい}、〜になります (o total é ~).',
    },
    {
      title: 'Placas de desconto e dinheiro (Seção 5 · TIPS)',
      bodyPt:
        '**Tipos de desconto:**\n\n' +
        '| placa | sentido | exemplo |\n|---|---|---|\n' +
        '| 〜{割引|わりびき} | ~ décimos off | {二割引|にわりびき} = 20% off (500→400) |\n' +
        '| 〜％{引|びき} | ~% off | 10％{引|びき} (19,800→17,820) |\n' +
        '| 〜{円引|えんびき} | ~ ienes off | 50{円引|えんびき} (430→380) |\n' +
        '| {半額|はんがく} | metade do preço | 420→210 |\n' +
        '| {値下価格|ねさげかかく} | preço já rebaixado | 2,979→2,479 |\n' +
        '| 〜{円均一|えんきんいつ} | tudo por ~ ienes | 50{円均一|えんきんいつ} |\n\n' +
        '**Dinheiro japonês:** {紙幣|しへい}（お{札|さつ}） = cédulas (1万・5千・2千・千{円|えん}); {硬貨|こうか} = moedas (500・100・50・10・5・1{円|えん}{玉|だま}). 💡 Muitas lojas (fora das cidades grandes) só aceitam {現金|げんきん} (dinheiro); ande sempre com algum.\n\n' +
        '**Lojas com preço nem sempre visível:** {屋台|やたい} (barraca), {野菜直売所|やさいちょくばいじょ} (venda direta do produtor), フリーマーケット, リサイクルショップ, {土産物屋|みやげものや}.',
    },
  ],
  groups: [lesson16Group],
  audios: attachScripts(16, L16_SCRIPTS),
}

const lesson17Group: ExerciseGroup = {
  id: 'iro-s-l17',
  title: '映画を見に行きました',
  subtitlePt: 'Dias de folga · falar no passado o que fez e suas impressões, ler posts e tabelas de preço, mandar mensagem ao chegar em casa',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-s-l17-1', number: 1, prompt: 'A forma 「〜ました」 (ex.: {映画|えいが}を{見|み}ました) indica:', choices: [{ n: 1, text: 'passado afirmativo (fiz / aconteceu)' }, { n: 2, text: 'futuro' }, { n: 3, text: 'passado negativo' }, { n: 4, text: 'convite' }], answer: 1, explanationPt: '〜ます → 〜ました = passado afirmativo. {見|み}ます → {見|み}ました (vi). (Nota ➊)' },
    { id: 'iro-s-l17-2', number: 2, prompt: 'A forma 「〜ませんでした」 indica:', choices: [{ n: 1, text: 'passado negativo (não fiz)' }, { n: 2, text: 'presente negativo' }, { n: 3, text: 'passado afirmativo' }, { n: 4, text: 'futuro negativo' }], answer: 1, explanationPt: '〜ません → 〜ませんでした = passado negativo. {行|い}きません → {行|い}きませんでした (não fui). (Nota ➊)' },
    { id: 'iro-s-l17-3', number: 3, prompt: '「{映画|えいが}を{見|み}に{行|い}きました」 significa:', choices: [{ n: 1, text: 'fui (ao cinema) ver um filme' }, { n: 2, text: 'vou ver um filme' }, { n: 3, text: 'quero ver um filme' }, { n: 4, text: 'não vi o filme' }], answer: 1, translationPt: 'Fui ver um filme.', explanationPt: 'V-ますstem + に{行|い}く = ir (a algum lugar) para fazer algo. {見|み}に{行|い}きました = fui ver. (Seção 1·2)' },
    { id: 'iro-s-l17-4', number: 4, prompt: '「{何|なに}もしませんでした」 significa:', choices: [{ n: 1, text: 'não fiz nada' }, { n: 2, text: 'fiz tudo' }, { n: 3, text: 'fiz alguma coisa' }, { n: 4, text: 'o que você fez?' }], answer: 1, explanationPt: '{何|なに}も + verbo negativo = nada. {何|なに}もしませんでした = não fiz nada (家でゆっくりしました). (Nota ➋)' },
    { id: 'iro-s-l17-5', number: 5, prompt: '「どこにも{行|い}きませんでした」 significa:', choices: [{ n: 1, text: 'não fui a lugar nenhum' }, { n: 2, text: 'fui a vários lugares' }, { n: 3, text: 'onde você foi?' }, { n: 4, text: 'fui a algum lugar' }], answer: 1, explanationPt: 'どこにも + {行|い}く negativo = a lugar nenhum. どこにも{行|い}きませんでした. ⚠️ Reforça a negação. (Nota ➋)' },
    { id: 'iro-s-l17-6', number: 6, prompt: 'O passado de um ナ-adjetivo / da impressão 「まあまあ」 é:', choices: [{ n: 1, text: '〜でした (まあまあでした · {大変|たいへん}でした)' }, { n: 2, text: '〜かったです' }, { n: 3, text: '〜くなかったです' }, { n: 4, text: '〜ました' }], answer: 1, explanationPt: 'ナA passado: 〜です → 〜でした. まあまあでした (foi mais ou menos), {大変|たいへん}でした (foi difícil). (Nota ➌)' },
    { id: 'iro-s-l17-7', number: 7, prompt: 'O passado do イ-adjetivo 「{楽|たの}しい」 é:', choices: [{ n: 1, text: '{楽|たの}しかったです (tirar い, + かったです)' }, { n: 2, text: '{楽|たの}しいでした' }, { n: 3, text: '{楽|たの}しでした' }, { n: 4, text: '{楽|たの}しません' }], answer: 1, translationPt: 'foi divertido', explanationPt: 'イA passado: 〜いです → 〜かったです. {楽|たの}しい → {楽|たの}しかったです. ⚠️ Nunca 〜いでした. (Nota ➌)' },
    { id: 'iro-s-l17-8', number: 8, prompt: 'O passado de 「いい」 (bom) é, irregularmente:', choices: [{ n: 1, text: 'よかったです' }, { n: 2, text: 'いいかったです' }, { n: 3, text: 'いかったです' }, { n: 4, text: 'いいでした' }], answer: 1, explanationPt: '⚠️ いい é irregular: passado = よかったです (não いかった). Vem de よい. (Nota ➌)' },
    { id: 'iro-s-l17-9', number: 9, prompt: 'Para perguntar a impressão de algo passado, usa-se:', choices: [{ n: 1, text: 'どうでしたか？ (como foi?)' }, { n: 2, text: 'いくらでしたか？' }, { n: 3, text: 'どこでしたか？' }, { n: 4, text: 'だれでしたか？' }], answer: 1, explanationPt: 'どう (como) + でしたか = どうでしたか？ (como foi?). {映画|えいが}はどうでしたか？ (Nota ➌)' },
    { id: 'iro-s-l17-10', number: 10, prompt: 'O passado de um substantivo (N) — 「いい{天気|てんき}」 no passado — é:', choices: [{ n: 1, text: 'いい{天気|てんき}でした (N + でした)' }, { n: 2, text: 'いい{天気|てんき}かったです' }, { n: 3, text: 'いい{天気|てんき}ました' }, { n: 4, text: 'いい{天気|てんき}くなかった' }], answer: 1, explanationPt: 'N passado: 〜です → 〜でした. いい{天気|てんき}でした (estava bom tempo), {母|はは}の{誕生日|たんじょうび}でした. (Nota ➍)' },
    { id: 'iro-s-l17-11', number: 11, prompt: 'O passado negativo do イ-adjetivo 「{多|おお}い」 (em お{客|きゃく}さんは、あまり{多|おお}く___) é:', choices: [{ n: 1, text: '{多|おお}くなかったです (／{多|おお}くありませんでした)' }, { n: 2, text: '{多|おお}いじゃなかったです' }, { n: 3, text: '{多|おお}いでした' }, { n: 4, text: '{多|おお}かったです' }], answer: 1, translationPt: 'não tinha muitos (clientes)', explanationPt: 'イA neg. passado: 〜くないです → 〜くなかったです. {多|おお}くなかったです. Também {多|おお}くありませんでした. (Nota ➎)' },
    { id: 'iro-s-l17-12', number: 12, prompt: 'O passado negativo de um N / ナ-adjetivo (ex.: {休|やす}み / {大変|たいへん}) é:', choices: [{ n: 1, text: '〜じゃなかったです (／〜じゃありませんでした)' }, { n: 2, text: '〜くなかったです' }, { n: 3, text: '〜でした' }, { n: 4, text: '〜かったです' }], answer: 1, explanationPt: 'N／ナA neg. passado: 〜じゃないです → 〜じゃなかったです. {休|やす}みじゃなかったです, {大変|たいへん}じゃなかったです. (Nota ➎)' },
    { id: 'iro-s-l17-13', number: 13, prompt: 'As palavras 「{週末|しゅうまつ}／{土日|どにち}／{昨日|きのう}」 são:', choices: [{ n: 1, text: 'fim de semana / sábado e domingo / ontem' }, { n: 2, text: 'feriado / hoje / amanhã' }, { n: 3, text: 'manhã / tarde / noite' }, { n: 4, text: 'segunda / terça / quarta' }], answer: 1, explanationPt: '{週末|しゅうまつ} (fim de semana), {土日|どにち} (sáb+dom), {昨日|きのう} (ontem), {日曜日|にちようび} (domingo). (Seção 1)' },
    { id: 'iro-s-l17-14', number: 14, prompt: 'Qual lista só tem atividades de folga (verbos no passado)?', choices: [{ n: 1, text: '{運動|うんどう}しました／{掃除|そうじ}しました／{寝|ね}ました／{飲|の}みに{行|い}きました' }, { n: 2, text: '{安|やす}い／{高|たか}い／きれい' }, { n: 3, text: '{大人|おとな}／{高校生|こうこうせい}／{料金|りょうきん}' }, { n: 4, text: '{入口|いりぐち}／{出口|でぐち}／{非常口|ひじょうぐち}' }], answer: 1, explanationPt: 'Atividades: {運動|うんどう}する (exercitar-se), {掃除|そうじ}する (faxina), {洗濯|せんたく}する (lavar roupa), {寝|ね}る (dormir), {飲|の}みに{行|い}く (sair pra beber), ゆっくりする (descansar), {勉強|べんきょう}する. (Seção 1)' },
    { id: 'iro-s-l17-15', number: 15, prompt: 'As palavras de impressão 「すばらしい／つまらない／いまいち（な）」 significam:', choices: [{ n: 1, text: 'maravilhoso / chato / meio fraco (não tão bom)' }, { n: 2, text: 'caro / barato / estranho' }, { n: 3, text: 'grande / pequeno / novo' }, { n: 4, text: 'cedo / tarde / rápido' }], answer: 1, explanationPt: 'すばらしい (maravilhoso), つまらない (chato/sem graça), いまいち（な） (meio fraco). Outras: {楽|たの}しい, おもしろい, よかった, まあまあ, {大変|たいへん}. (Seção 2)' },
    { id: 'iro-s-l17-16', number: 16, prompt: '「ジム／オーケストラ／コンサート／ネットで」 são:', choices: [{ n: 1, text: 'academia / orquestra / show (concerto) / pela internet' }, { n: 2, text: 'piscina / banda / festival / por telefone' }, { n: 3, text: 'parque / coral / cinema / pessoalmente' }, { n: 4, text: 'estádio / DJ / teatro / por carta' }], answer: 1, explanationPt: 'ジム (academia), オーケストラ (orquestra), コンサート (show), ネットで (pela internet). オーケストラのコンサートに{行|い}きました. (Seção 1·2)' },
    { id: 'iro-s-l17-17', number: 17, prompt: 'No post de SNS, 「{家族|かぞく}で{水族館|すいぞくかん}に{行|い}きました。ペンギン、かわいかった！」 — onde a pessoa foi?', choices: [{ n: 1, text: 'ao aquário, com a família (achou os pinguins fofos)' }, { n: 2, text: 'ao zoológico, sozinha' }, { n: 3, text: 'a um show de orquestra' }, { n: 4, text: 'a um restaurante de sushi' }], answer: 1, explanationPt: '{水族館|すいぞくかん} = aquário; {家族|かぞく}で = com a família; ペンギン (pinguim) かわいかった (foi fofo); クラゲ (água-viva) きれいでした. (Seção 3)' },
    { id: 'iro-s-l17-18', number: 18, prompt: '「{気持|きも}ちよかったです」 (de {気持|きも}ちいい) significa:', choices: [{ n: 1, text: 'foi gostoso / agradável / revigorante' }, { n: 2, text: 'foi caro' }, { n: 3, text: 'foi chato' }, { n: 4, text: 'foi difícil' }], answer: 1, explanationPt: '{気持|きも}ちいい = agradável/revigorante; passado {気持|きも}ちよかったです (いい→よかった). さくら{公園|こうえん}に{散歩|さんぽ}…{気持|きも}ちよかったです. (Seção 3)' },
    { id: 'iro-s-l17-19', number: 19, prompt: 'No post 「お{客|きゃく}さんは、あまり{多|おお}くなかったです」 significa:', choices: [{ n: 1, text: 'não tinha muito público (clientes/pessoas)' }, { n: 2, text: 'tinha muita gente' }, { n: 3, text: 'os clientes eram simpáticos' }, { n: 4, text: 'não havia ninguém' }], answer: 1, explanationPt: '{多|おお}い = muitos; あまり〜くなかったです = não muito. お{客|きゃく}さん = público/clientes. でも、とてもよかったです (mas foi muito bom). (Seção 3 · Nota ➎)' },
    { id: 'iro-s-l17-20', number: 20, prompt: 'No post do aniversário, 「85{歳|さい}！まだまだ{元気|げんき}です」 significa:', choices: [{ n: 1, text: '85 anos! Ainda está cheia de energia/saúde' }, { n: 2, text: '85 anos! Já está bem cansada' }, { n: 3, text: '85 ienes! Ainda é caro' }, { n: 4, text: '85 anos! Vai fazer aniversário' }], answer: 1, explanationPt: 'まだまだ = ainda (bastante); {元気|げんき}（な） = com saúde/energia. お{祝|いわ}い (comemoração), {寿司屋|すしや} (rodízio/restaurante de sushi). おいしかった〜！でもちょっと{高|たか}かった. (Seção 3)' },
    { id: 'iro-s-l17-21', number: 21, prompt: 'Na tabela de preços (料金表), 「{大人|おとな}／{高校生|こうこうせい}／{小|しょう}・{中学生|ちゅうがくせい}」 são:', choices: [{ n: 1, text: 'adulto / estudante do ensino médio / estudante do fundamental e ginásio' }, { n: 2, text: 'idoso / criança / bebê' }, { n: 3, text: 'homem / mulher / criança' }, { n: 4, text: 'sócio / visitante / grupo' }], answer: 1, explanationPt: '{大人|おとな} (adulto, {一般|いっぱん}・{大学生|だいがくせい}), {高校生|こうこうせい} ({中人|ちゅうにん}), {小|しょう}・{中学生|ちゅうがくせい} ({小人|しょうにん}). チケット/{入館券|にゅうかんけん}. (Seção 4)' },
    { id: 'iro-s-l17-22', number: 22, prompt: '「{十二歳以上|じゅうにさいいじょう}」 (no preço do onsen) significa:', choices: [{ n: 1, text: '12 anos ou mais (a partir de 12 anos)' }, { n: 2, text: 'menos de 12 anos' }, { n: 3, text: 'exatamente 12 anos' }, { n: 4, text: '12 pessoas ou mais' }], answer: 1, explanationPt: '〜{歳以上|さいいじょう} = de ~ anos para cima. {十二歳以上|じゅうにさいいじょう}{五百円|ごひゃくえん} (12+ = 500 ienes). {料金|りょうきん} = tarifa. (Seção 4)' },
    { id: 'iro-s-l17-23', number: 23, prompt: '「{食|た}べ{放題|ほうだい}／{飲|の}み{放題|ほうだい}」 (no 焼肉屋) significam:', choices: [{ n: 1, text: 'comer à vontade (rodízio) / beber à vontade' }, { n: 2, text: 'meia porção / sem bebida' }, { n: 3, text: 'leva para viagem / serve no local' }, { n: 4, text: 'reserva / fila' }], answer: 1, explanationPt: '〜{放題|ほうだい} = à vontade. {食|た}べ{放題|ほうだい} (rodízio, ALL YOU CAN EAT), {飲|の}み{放題|ほうだい} (bebida liberada). 90{分|ぷん}{食|た}べ{放題|ほうだい}1,980{円|えん}. (Seção 4)' },
    { id: 'iro-s-l17-24', number: 24, prompt: 'Na マンガ{喫茶|きっさ} (café de mangá), 「パック／ブース／{個室|こしつ}」 são:', choices: [{ n: 1, text: 'pacote (de horas) / cabine / sala privativa' }, { n: 2, text: 'bebida / lanche / sobremesa' }, { n: 3, text: 'entrada / saída / banheiro' }, { n: 4, text: 'gibi / revista / jornal' }], answer: 1, explanationPt: 'パック = pacote por horas (3{時間|じかん}パック…); ブース = cabine; {個室|こしつ} = sala privativa. {基本料金|きほんりょうきん}30{分|ぷん}/¥250. (Seção 4 · TIPS)' },
    { id: 'iro-s-l17-25', number: 25, prompt: '「{今|いま}、{家|いえ}に{着|つ}きました」 (mensagem ao amigo) significa:', choices: [{ n: 1, text: 'cheguei em casa agora' }, { n: 2, text: 'vou sair de casa agora' }, { n: 3, text: 'estou esperando em casa' }, { n: 4, text: 'não cheguei em casa' }], answer: 1, explanationPt: '{着|つ}く = chegar; {着|つ}きました = cheguei. {今|いま}、{家|いえ}に{着|つ}きました = acabei de chegar em casa. (Seção 5)' },
    { id: 'iro-s-l17-26', number: 26, prompt: 'Na mensagem, 「ゴジラ、はじめて{見|み}ました。また、いっしょに{行|い}きましょう」 — はじめて e また são:', choices: [{ n: 1, text: 'pela primeira vez / de novo (outra vez)' }, { n: 2, text: 'sozinho / com pressa' }, { n: 3, text: 'ontem / amanhã' }, { n: 4, text: 'talvez / nunca' }], answer: 1, explanationPt: 'はじめて = pela primeira vez; また = de novo. また、いっしょに{映画|えいが}に{行|い}きましょう = vamos de novo juntos. (Seção 5)' },
    { id: 'iro-s-l17-27', number: 27, prompt: 'Os kanji de número 「{百|ひゃく}／{千|せん}／{万|まん}」 lêem-se:', choices: [{ n: 1, text: 'ひゃく (100) / せん (1.000) / まん (10.000)' }, { n: 2, text: 'せん / ひゃく / おく' }, { n: 3, text: 'ひゃく / まん / せん' }, { n: 4, text: 'じゅう / ひゃく / せん' }], answer: 1, explanationPt: '{百|ひゃく}=100, {千|せん}=1.000, {万|まん}=10.000. Ex.: 4{千万円|せんまんえん} (40 milhões). Kanji da lição: {百|ひゃく}, {千|せん}, {万|まん}, 〜{円|えん}, {休|やす}み, {映画|えいが}, {日本語|にほんご}, {勉強|べんきょう}します, {買|か}います. (漢字)' },
    { id: 'iro-s-l17-28', number: 28, prompt: 'Relacionando interrogativos com o uso (resumo da lição): 「いくら／いつ／だれ／どう」 perguntam:', choices: [{ n: 1, text: 'quanto custa / quando / quem / como (estava)' }, { n: 2, text: 'onde / por quê / quantos / qual' }, { n: 3, text: 'quanto / quem / quando / onde' }, { n: 4, text: 'como / quanto / qual / quem' }], answer: 1, explanationPt: 'いくら (quanto custa), いつ (quando), だれ (quem), どう (como). Resumo: いくつ (idade/quantos), どこ, どちら, どんな, {何|なに}/{何|なん}. (Resumo de interrogativos)' },
    { id: 'iro-s-l17-29', number: 29, prompt: '「ゴジラ」 (TIPS) é:', choices: [{ n: 1, text: 'Godzilla — clássica série japonesa de filmes de monstro (1ª de 1954)' }, { n: 2, text: 'um aquário famoso' }, { n: 3, text: 'um prato típico' }, { n: 4, text: 'um café de mangá' }], answer: 1, explanationPt: 'ゴジラ = Godzilla, série de {怪獣特撮映画|かいじゅうとくさつえいが} (filmes de monstro), 1º de 1954. No diálogo, Bayu foi ver ゴジラ. (TIPS)' },
    { id: 'iro-s-l17-30', number: 30, prompt: 'Diálogo 17-02: 「{日曜日|にちようび}は、{何|なに}をしましたか？」 — o que a Tida fez?', context: 'Ａ：ティダーさん、{日曜日|にちようび}は、{何|なに}をしましたか？ Ｂ：{日曜日|にちようび}は、ジムで{運動|うんどう}しました。', choices: [{ n: 1, text: 'Foi à academia se exercitar (ジムで{運動|うんどう}しました)' }, { n: 2, text: 'Foi a um show de orquestra' }, { n: 3, text: 'Dormiu até de tarde' }, { n: 4, text: 'Foi às compras' }], answer: 1, explanationPt: 'ジムで{運動|うんどう}しました = me exercitei na academia. (Seção 1)' },
    { id: 'iro-s-l17-31', number: 31, prompt: 'Diálogo 17-06: 「{週末|しゅうまつ}は、{何|なに}をしましたか？」 — resposta da Andrea?', context: 'Ｂ：{何|なに}もしませんでした。{家|いえ}でゆっくりしました。あ、ネットで、{家族|かぞく}と{話|はな}しました。', choices: [{ n: 1, text: 'Não fez nada de especial; descansou em casa e falou com a família pela internet' }, { n: 2, text: 'Foi viajar com a família' }, { n: 3, text: 'Trabalhou o fim de semana todo' }, { n: 4, text: 'Foi ao cinema' }], answer: 1, explanationPt: '{何|なに}もしませんでした (não fiz nada) + {家|いえ}でゆっくり (relaxei em casa) + ネットで{家族|かぞく}と{話|はな}しました (falei com a família online). (Seção 1)' },
    { id: 'iro-s-l17-32', number: 32, prompt: 'Diálogo 17-10: Bayu foi ver ゴジラ — como foi, segundo ele?', context: 'マリエル：{映画|えいが}…おもしろかったですか？ バユ：まあまあでした。', choices: [{ n: 1, text: 'Mais ou menos (まあまあでした)' }, { n: 2, text: 'Muito divertido' }, { n: 3, text: 'Péssimo / um desastre' }, { n: 4, text: 'Não foi ao cinema' }], answer: 1, explanationPt: 'まあまあでした = foi mais ou menos. Bayu {映画|えいが}を{見|み}に{行|い}きました、「ゴジラ」を{見|み}ました. (Seção 2)' },
    { id: 'iro-s-l17-33', number: 33, prompt: 'Diálogo 17-10: 「カノルさんは、どこに{行|い}きましたか？」 — o que Kanol responde?', context: 'カノル：{私|わたし}は、どこにも{行|い}きませんでした。{家|いえ}で{日本語|にほんご}を{勉強|べんきょう}しました。{全員|ぜんいん}：すごーい！', choices: [{ n: 1, text: 'Não foi a lugar nenhum; ficou em casa estudando japonês (todos: que demais!)' }, { n: 2, text: 'Foi ao festival internacional' }, { n: 3, text: 'Foi ver um filme' }, { n: 4, text: 'Fez faxina e lavou roupa' }], answer: 1, explanationPt: 'どこにも{行|い}きませんでした (não fui a lugar nenhum) + {家|いえ}で{日本語|にほんご}を{勉強|べんきょう}しました. Dewi foi ao {国際|こくさい}フェスティバル e achou とてもよかった/{楽|たの}しかった. (Seção 2 · Nota ➋)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 17 (聴解スクリプト)
const L17_SCRIPTS: Record<string, ScriptItem[]> = {
  '17-01': [
    {
      label: '会話① (17-01)',
      setupJa: '{休|やす}みにしたことについて、6{人|にん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Seis pessoas falam sobre o que fizeram na folga.',
      lines: [
        { speaker: 'A', ja: 'ヘンドラさん、{休|やす}みは、{何|なに}をしましたか？', pt: 'Hendra, o que você fez na folga?' },
        { speaker: 'B', ja: 'えーと、お{風呂|ふろ}と{台所|だいどころ}を{掃除|そうじ}しました。', pt: 'Hmm, limpei o banheiro e a cozinha.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '17-02': [
    {
      label: '会話② (17-02)',
      lines: [
        { speaker: 'A', ja: 'ティダーさん、{日曜日|にちようび}は、{何|なに}をしましたか？', pt: 'Tida, o que você fez no domingo?' },
        { speaker: 'B', ja: '{日曜日|にちようび}は、ジムで{運動|うんどう}しました。', pt: 'No domingo, me exercitei na academia.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
      ],
    },
  ],
  '17-03': [
    {
      label: '会話③ (17-03)',
      lines: [
        { speaker: 'A', ja: '{曹|ソウ}さん、{週末|しゅうまつ}は、{何|なに}をしましたか？', pt: 'Sou, o que você fez no fim de semana?' },
        { speaker: 'B', ja: 'オーケストラのコンサートに{行|い}きました。', pt: 'Fui a um concerto de orquestra.' },
        { speaker: 'A', ja: 'ふーん、いいですね。', pt: 'Hmm, que bom.' },
      ],
    },
  ],
  '17-04': [
    {
      label: '会話④ (17-04)',
      lines: [
        { speaker: 'A', ja: 'マイさん、{昨日|きのう}の{休|やす}みは、{何|なに}をしましたか？', pt: 'Mai, o que você fez na folga de ontem?' },
        { speaker: 'B', ja: '{昨日|きのう}は、さくらモールに{買|か}い{物|もの}に{行|い}きました。{服|ふく}を{買|か}いました。', pt: 'Ontem fui fazer compras no Sakura Mall. Comprei roupa.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '17-05': [
    {
      label: '会話⑤ (17-05)',
      lines: [
        { speaker: 'A', ja: 'ルディさん、{土日|どにち}は、{何|なに}をしましたか？', pt: 'Rudi, o que você fez no sábado e domingo?' },
        { speaker: 'B', ja: '{土曜日|どようび}は、{友|とも}だちと、{飲|の}みに{行|い}きました。', pt: 'No sábado, saí pra beber com os amigos.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: '{日曜日|にちようび}は、{昼|ひる}まで{寝|ね}ました。', pt: 'No domingo, dormi até de tarde.' },
        { speaker: 'A', ja: 'あー。', pt: 'Ahh.' },
      ],
    },
  ],
  '17-06': [
    {
      label: '会話⑥ (17-06)',
      lines: [
        { speaker: 'A', ja: 'アンドレアさん、{週末|しゅうまつ}は、{何|なに}をしましたか？', pt: 'Andrea, o que você fez no fim de semana?' },
        { speaker: 'B', ja: '{何|なに}もしませんでした。{家|いえ}でゆっくりしました。', pt: 'Não fiz nada. Relaxei em casa.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'B', ja: 'あ、ネットで、{家族|かぞく}と{話|はな}しました。', pt: 'Ah, falei com a família pela internet.' },
        { speaker: 'A', ja: 'ああ、いいですね。', pt: 'Ah, que bom.' },
      ],
    },
  ],
  '17-10': [
    {
      label: '会話 (17-10)',
      setupJa: 'バユさん、マリエルさん、デウィさん、カノルさんは、{同|おな}じ{職場|しょくば}で{働|はたら}いています。{休日|きゅうじつ}{明|あ}けに、それぞれがしたことについて{話|はな}しています。',
      setupPt: 'Bayu, Mariel, Dewi e Kanol trabalham no mesmo lugar. Depois da folga, contam o que cada um fez.',
      lines: [
        { speaker: 'マリエル', ja: 'バユさん、{休|やす}みは、どうでしたか？', pt: 'Bayu, como foi a folga?' },
        { speaker: 'バユ', ja: '{映画|えいが}を{見|み}に{行|い}きました。「ゴジラ」を{見|み}ました。', pt: 'Fui ver um filme. Assisti ao “Godzilla”.' },
        { speaker: 'マリエル', ja: 'おもしろかったですか？', pt: 'Foi bom (interessante)?' },
        { speaker: 'バユ', ja: 'まあまあでした。', pt: 'Foi mais ou menos.' },
        { speaker: 'マリエル', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'バユ', ja: 'マリエルさんは？', pt: 'E você, Mariel?' },
        { speaker: 'マリエル', ja: '{私|わたし}は、{一日中|いちにちじゅう}、{掃除|そうじ}と{洗濯|せんたく}をしました。{大変|たいへん}でした。', pt: 'Eu passei o dia todo fazendo faxina e lavando roupa. Foi cansativo.' },
        { speaker: 'バユ', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'マリエル', ja: 'デウィさんは？', pt: 'E a Dewi?' },
        { speaker: 'デウィ', ja: '{私|わたし}は、{友|とも}だちと、{中央公園|ちゅうおうこうえん}の{国際|こくさい}フェスティバルに{行|い}きました。', pt: 'Eu fui com amigos ao festival internacional no Parque Central.' },
        { speaker: 'マリエル', ja: 'へー、どうでしたか？', pt: 'Nossa, como foi?' },
        { speaker: 'デウィ', ja: 'とてもよかったです。{楽|たの}しかったです。', pt: 'Foi muito bom. Foi divertido.' },
        { speaker: 'マリエル', ja: 'カノルさんは、どこに{行|い}きましたか？', pt: 'Kanol, aonde você foi?' },
        { speaker: 'カノル', ja: '{私|わたし}は、どこにも{行|い}きませんでした。{家|いえ}で{日本語|にほんご}を{勉強|べんきょう}しました。', pt: 'Eu não fui a lugar nenhum. Estudei japonês em casa.' },
        { speaker: '全員', ja: 'すごーい！', pt: 'Que demais!' },
      ],
    },
  ],
}

const lesson17: Section = {
  id: 'lesson-17',
  level: 'starter',
  titleJa: '第17課 映画を見に行きました',
  titlePt: 'Lição 17 — Fui ver um filme',
  summaryPt: 'Dias de folga · falar no passado o que fez e o que não fez (映画を見に行きました／何もしませんでした／どこにも行きませんでした), dar impressões no passado (楽しかったです／まあまあでした／いい天気でした／あまり多くなかったです), ler posts simples de SNS e tabelas de preço (大人／高校生／食べ放題／パック) e mandar uma mensagem ao chegar em casa (今、家に着きました).',
  studyNotes: [
    {
      title: 'Tópico: Dias de folga (falar do passado)',
      bodyPt:
        '## Can-do\n' +
        '- Responder de forma simples o que fez na folga.\n' +
        '- Perguntar e responder o que fez e suas impressões.\n' +
        '- Ler um post simples de rede social e entender o que a pessoa fez.\n' +
        '- Ler a tabela de preços de um lugar e saber quanto pagar.\n' +
        '- Mandar uma mensagem curta com suas impressões ao chegar em casa.',
    },
    {
      title: 'Passado dos verbos: V-ました／V-ませんでした (➊)',
      bodyPt:
        'Para falar de fatos passados:\n\n' +
        '| | não-passado | passado |\n|---|---|---|\n' +
        '| afirmativo | V-ます | **V-ました** |\n' +
        '| negativo | V-ません／V-ないです | **V-ませんでした** |\n\n' +
        '- `{映画|えいが}を{見|み}に{行|い}きました` = fui ver um filme · `テレビを{見|み}ました` = assisti TV.\n' +
        '- `{週末|しゅうまつ}は、{何|なに}もしませんでした` = não fiz nada no fim de semana.\n\n' +
        '💡 V-ますstem + に{行|い}く/{来|く}る = ir/vir **para fazer** algo: {買|か}い{物|もの}に{行|い}きました, {飲|の}みに{行|い}きました.',
    },
    {
      title: 'Negação enfática: 何も／どこにも + V-ませんでした (➋)',
      bodyPt:
        'Reforçam uma frase negativa:\n\n' +
        '- **{何|なに}も** + verbo negativo = (não) … **nada**: `{何|なに}もしませんでした` (não fiz nada).\n' +
        '- **どこにも** + {行|い}く negativo = (não foi) **a lugar nenhum**: `どこにも{行|い}きませんでした`.\n\n' +
        'Ex.: A：{連休|れんきゅう}は、どこに{行|い}きましたか？ B：どこにも{行|い}きませんでした。{家|いえ}で{本|ほん}を{読|よ}みました。',
    },
    {
      title: 'Impressões no passado: ナA-でした／イA-かったです／N-でした (➌➍)',
      bodyPt:
        'Para comentar como foi algo:\n\n' +
        '| tipo | não-passado | passado |\n|---|---|---|\n' +
        '| ナ-adjetivo | 〜です | **〜でした** ({大変|たいへん}でした) |\n' +
        '| イ-adjetivo | 〜いです | **〜かったです** ({楽|たの}しかったです) |\n' +
        '| substantivo (N) | 〜です | **〜でした** (いい{天気|てんき}でした) |\n\n' +
        '- ⚠️ **いい** é irregular → passado **よかったです** (nunca いかった).\n' +
        '- ⚠️ Nunca diga 〜いでした; o passado do イ-adjetivo é 〜かったです.\n' +
        '- Perguntar a impressão: **どうでしたか？** (como foi?). Ex.: {映画|えいが}はどうでしたか？ → まあまあでした。\n\n' +
        '**Palavras de impressão:** {楽|たの}しい, おもしろい, いい→よかった, まあまあ, {大変|たいへん}（な）, すばらしい, つまらない, いまいち（な）.',
    },
    {
      title: 'Passado negativo de adjetivo/substantivo: 〜じゃなかったです／〜くなかったです (➎)',
      bodyPt:
        '| tipo | passado negativo | variante |\n|---|---|---|\n' +
        '| N | 〜じゃなかったです | 〜じゃありませんでした |\n' +
        '| ナ-adjetivo | 〜じゃなかったです | 〜じゃありませんでした |\n' +
        '| イ-adjetivo | 〜くなかったです | 〜くありませんでした |\n\n' +
        '- `お{客|きゃく}さんは、あまり{多|おお}くなかったです` = não tinha muito público.\n' +
        '- `{昨日|きのう}は、{休|やす}みじゃなかったです` = ontem não era folga.\n' +
        '- `あまり{大変|たいへん}じゃなかったです` / `あまりおいしくなかったです`.\n\n' +
        '💡 **Resumo de interrogativos:** いくつ (idade/quantos), いくら (quanto custa), いつ (quando), だれ (quem), どう (como), どこ (onde), どちら, どんな, {何|なに}/{何|なん}.',
    },
    {
      title: 'Posts, tabelas de preço e mensagem (Seções 3-5 · TIPS)',
      bodyPt:
        '**SNS (Seção 3):** {家族|かぞく}で (com a família), {水族館|すいぞくかん} (aquário), ペンギン (pinguim), クラゲ (água-viva), コスモス (flor cosmos), {花|はな}, そして (e então), {気持|きも}ちいい→{気持|きも}ちよかった (revigorante), {多|おお}い (muitos), まだまだ (ainda), {元気|げんき}（な） (com energia), お{祝|いわ}い (comemoração), {寿司屋|すしや} (restaurante de sushi).\n\n' +
        '**Tabelas de preço (Seção 4):** チケット, {大人|おとな} (adulto), {高校生|こうこうせい}, {小|しょう}・{中学生|ちゅうがくせい}; {料金|りょうきん} (tarifa), 〜{歳以上|さいいじょう} (de ~ anos p/ cima); {食|た}べ{放題|ほうだい} (rodízio), {飲|の}み{放題|ほうだい} (bebida liberada); パック (pacote), ブース (cabine), {個室|こしつ} (sala privativa).\n\n' +
        '**Mensagem (Seção 5):** {着|つ}く→{着|つ}きました (cheguei), はじめて (pela 1ª vez), また (de novo). `{今|いま}、{家|いえ}に{着|つ}きました。{今日|きょう}は、{楽|たの}しかったです。`\n\n' +
        '**Kanji da lição:** {百|ひゃく}, {千|せん}, {万|まん}, 〜{円|えん}, {休|やす}み, {映画|えいが}, {日本語|にほんご}, {勉強|べんきょう}します, {買|か}います.\n\n' +
        '🔖 **TIPS:** ゴジラ (Godzilla, série de filmes de monstro desde 1954); {水族館|すいぞくかん} (aquários por todo o Japão; {美|ちゅ}ら{海|うみ}, {海遊館|かいゆうかん}); マンガ{喫茶|きっさ}／インターネットカフェ (cabines para ler mangá/usar internet, muitas 24h).',
    },
  ],
  groups: [lesson17Group],
  audios: attachScripts(17, L17_SCRIPTS),
}

// ---- Lição 18 (estrutura por tópico; exercícios em construção) ------
const others: Section[] = [
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
  sections: [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, lesson11, lesson12, lesson13, lesson14, lesson15, lesson16, lesson17, ...others],
}
