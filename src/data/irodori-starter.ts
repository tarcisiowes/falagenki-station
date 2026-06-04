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

// ---- Lições 6 a 18 (estrutura por tópico; exercícios em construção) ------
const others: Section[] = [
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
    'Primeiro nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A1: cumprimentar e se comunicar de forma simples no dia a dia. São 9 tópicos em 18 lições (課), organizadas por módulos, com os áudios oficiais. As explicações são em português.',
  sections: [lesson0, lesson1, lesson2, lesson3, lesson4, lesson5, ...others],
}
