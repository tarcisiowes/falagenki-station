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

// ---- Lições 5 a 18 (estrutura por tópico; exercícios em construção) ------
const others: Section[] = [
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
    'Primeiro nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A1: cumprimentar e se comunicar de forma simples no dia a dia. São 9 tópicos em 18 lições (課), organizadas por módulos, com os áudios oficiais. As explicações são em português.',
  sections: [lesson0, lesson1, lesson2, lesson3, lesson4, ...others],
}
