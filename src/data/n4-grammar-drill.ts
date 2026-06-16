import type { ExerciseGroup, Level, Section, StudyNote } from './types'

// =====================================================================
//  N4 — Gramática (Treino)
//  Drill autoral baseado em docs/jlpt-source/gramatica_n4_referencia.html
//  98 pontos de gramática em 20 temas; >= 5 exercícios por ponto,
//  no formato もんだい de preencher a lacuna （　）.
//  Cada もんだい (grupo) cobre um tema; a numeração é contínua na seção.
// =====================================================================

const instructionJa =
  '（　）に {入|い}れるのに いちばん いい ものを、１・２・３・４から {一|ひと}つ えらんで ください。'
const instructionPt = 'Escolha a opção que melhor preenche （　）, entre 1, 2, 3 e 4.'

const studyNotes: StudyNote[] = [
  {
    title: 'Como usar este treino',
    bodyPt:
      'Treino de gramática do N4 organizado nos mesmos temas do material de referência. Cada **もんだい** cobre um tema; para cada ponto de gramática há **5 frases** diferentes para você escolher a forma correta.\n\n- Foque na **forma** que completa a frase (conjugação, partícula ou expressão).\n- Leia a **tradução** e a **explicação** de cada item depois de responder.\n- Use o botão de **furigana** para treinar a leitura dos kanji.',
  },
  {
    title: '1. Formas verbais fundamentais',
    bodyPt:
      'As bases da conjugação dos verbos no N4:\n\n- **て形** (forma -te): liga ações e é a base de muitas estruturas. G1 う/つ/る→って, む/ぶ/ぬ→んで, く→いて, ぐ→いで, す→して; G2 tira る+て; する→して, 来る→来て; exceção 行く→行って.\n- **可能形** (potencial, “conseguir”): G1 -u→-eる (飲む→飲める); G2 る→られる; する→できる, 来る→来られる. O objeto costuma vir com が.\n- **意向形** (volitivo, “vamos/vou”): G1 -u→-おう (帰る→帰ろう); G2 る→よう (見る→見よう); する→しよう, 来る→来よう.\n- **受身形** (passiva): G1 -u→-areru (呼ぶ→呼ばれる); G2 る→られる; する→される. O agente leva に.\n- **使役形** (causativo, “fazer/deixar fazer”): G1 -u→-aseru (読む→読ませる); G2 る→させる; する→させる, 来る→来させる.\n- **命令形** (imperativo): G1 -u→-e (待つ→待て); G2 る→ろ (起きる→起きろ); する→しろ, 来る→来い.\n- **禁止形** (proibição): forma de dicionário + な (入る→入るな).',
  },
]

const groups: ExerciseGroup[] = [
  {
    id: 'n4g-t1',
    title: 'もんだい１',
    subtitlePt: '1. Formas verbais (て形・可能・意向・受身・使役・命令・禁止)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 1. て形 (forma -te) ——
      { id: 'n4g-p1-1', number: 1, prompt: '{朝|あさ} {早|はや}く（　）、{顔|かお}を {洗|あら}います。', choices: [{ n: 1, text: '{起|お}きる' }, { n: 2, text: '{起|お}きて' }, { n: 3, text: '{起|お}きた' }, { n: 4, text: '{起|お}きます' }], answer: 2, translationPt: 'Acordo cedo de manhã e lavo o rosto.', explanationPt: 'A forma て liga duas ações em sequência: 起きて、洗います. G2 tira る e acrescenta て.' },
      { id: 'n4g-p1-2', number: 2, prompt: '{暑|あつ}いですから、{窓|まど}を（　）ください。', choices: [{ n: 1, text: '{開|あ}ける' }, { n: 2, text: '{開|あ}けて' }, { n: 3, text: '{開|あ}けた' }, { n: 4, text: '{開|あ}け' }], answer: 2, translationPt: 'Está quente, então abra a janela, por favor.', explanationPt: '〜てください (pedido) usa a forma て: 開けてください.' },
      { id: 'n4g-p1-3', number: 3, prompt: '{本|ほん}を（　）、レポートを {書|か}きます。', choices: [{ n: 1, text: '{読|よ}みて' }, { n: 2, text: '{読|よ}むで' }, { n: 3, text: '{読|よ}んで' }, { n: 4, text: '{読|よ}みで' }], answer: 3, translationPt: 'Leio o livro e escrevo o relatório.', explanationPt: 'Forma て de G1 terminado em む: む→んで. 読む→読んで.' },
      { id: 'n4g-p1-4', number: 4, prompt: '{学校|がっこう}に（　）、{友|とも}だちに {会|あ}いました。', choices: [{ n: 1, text: '{行|い}きて' }, { n: 2, text: '{行|い}いて' }, { n: 3, text: '{行|い}て' }, { n: 4, text: '{行|い}って' }], answer: 4, translationPt: 'Fui à escola e encontrei meus amigos.', explanationPt: 'Exceção da forma て: 行く→行って (não 行いて).' },
      { id: 'n4g-p1-5', number: 5, prompt: '{毎朝|まいあさ} ジョギングを（　）、シャワーを {浴|あ}びます。', choices: [{ n: 1, text: 'して' }, { n: 2, text: 'しって' }, { n: 3, text: 'すて' }, { n: 4, text: 'した' }], answer: 1, translationPt: 'Toda manhã eu corro e tomo banho.', explanationPt: 'Forma て de する→して.' },

      // —— 2. 可能形 (potencial) ——
      { id: 'n4g-p2-1', number: 6, prompt: '{私|わたし}は {日本語|にほんご}が {少|すこ}し（　）。', choices: [{ n: 1, text: '{話|はな}します' }, { n: 2, text: '{話|はな}せます' }, { n: 3, text: '{話|はな}されます' }, { n: 4, text: '{話|はな}せれます' }], answer: 2, translationPt: 'Eu consigo falar um pouco de japonês.', explanationPt: 'Potencial de G1: 話す→話せる. Note que o objeto leva が.' },
      { id: 'n4g-p2-2', number: 7, prompt: 'この {漢字|かんじ}は {難|むずか}しくて（　）。', choices: [{ n: 1, text: '{読|よ}めません' }, { n: 2, text: '{読|よ}みません' }, { n: 3, text: '{読|よ}まれません' }, { n: 4, text: '{読|よ}めます' }], answer: 1, translationPt: 'Este kanji é difícil e não consigo lê-lo.', explanationPt: 'Potencial negativo: 読む→読める→読めません.' },
      { id: 'n4g-p2-3', number: 8, prompt: '{私|わたし}は からい {食|た}べ{物|もの}が（　）。', choices: [{ n: 1, text: '{食|た}べます' }, { n: 2, text: '{食|た}べられます' }, { n: 3, text: '{食|た}べれます' }, { n: 4, text: '{食|た}べさせます' }], answer: 2, translationPt: 'Eu consigo comer comida apimentada.', explanationPt: 'Potencial de G2: 食べる→食べられます (食べれます é coloquial, evitado na prova).' },
      { id: 'n4g-p2-4', number: 9, prompt: '{田中|たなか}さんは {料理|りょうり}が じょうずで、なんでも（　）。', choices: [{ n: 1, text: 'します' }, { n: 2, text: 'できます' }, { n: 3, text: 'されます' }, { n: 4, text: 'でけます' }], answer: 2, translationPt: 'O Tanaka cozinha bem e consegue fazer de tudo.', explanationPt: 'Potencial de する→できる.' },
      { id: 'n4g-p2-5', number: 10, prompt: 'あしたの パーティーに（　）か。', choices: [{ n: 1, text: '{来|き}ます' }, { n: 2, text: '{来|こ}られます' }, { n: 3, text: '{来|こ}れます' }, { n: 4, text: '{来|こ}させます' }], answer: 2, translationPt: 'Você consegue vir à festa de amanhã?', explanationPt: 'Potencial de 来る→来られます (こられます).' },

      // —— 3. 意向形 (volitivo) ——
      { id: 'n4g-p3-1', number: 11, prompt: '{今度|こんど} {一緒|いっしょ}に {映画|えいが}を（　）。', choices: [{ n: 1, text: '{見|み}る' }, { n: 2, text: '{見|み}よう' }, { n: 3, text: '{見|み}ろう' }, { n: 4, text: '{見|み}たい' }], answer: 2, translationPt: 'Da próxima vez, vamos ver um filme juntos.', explanationPt: 'Volitivo de G2: 見る→見よう (“vamos/vou”).' },
      { id: 'n4g-p3-2', number: 12, prompt: 'つかれたね。そろそろ {家|いえ}に（　）。', choices: [{ n: 1, text: '{帰|かえ}る' }, { n: 2, text: '{帰|かえ}ろう' }, { n: 3, text: '{帰|かえ}よう' }, { n: 4, text: '{帰|かえ}ろ' }], answer: 2, translationPt: 'Estou cansado. Vamos voltar para casa logo.', explanationPt: 'Volitivo de G1: 帰る→帰ろう (-u→-おう).' },
      { id: 'n4g-p3-3', number: 13, prompt: 'あしたから {毎日|まいにち} {運動|うんどう}（　）。', choices: [{ n: 1, text: 'しよう' }, { n: 2, text: 'すよう' }, { n: 3, text: 'しろう' }, { n: 4, text: 'そう' }], answer: 1, translationPt: 'A partir de amanhã, vou me exercitar todo dia.', explanationPt: 'Volitivo de する→しよう.' },
      { id: 'n4g-p3-4', number: 14, prompt: 'のどが かわいたから、{何|なに}か（　）。', choices: [{ n: 1, text: '{飲|の}もう' }, { n: 2, text: '{飲|の}みよう' }, { n: 3, text: '{飲|の}むう' }, { n: 4, text: '{飲|の}も' }], answer: 1, translationPt: 'Estou com sede, então vou beber alguma coisa.', explanationPt: 'Volitivo de G1: 飲む→飲もう (-u→-おう).' },
      { id: 'n4g-p3-5', number: 15, prompt: 'みんなで また ここに（　）。', choices: [{ n: 1, text: '{来|こ}よう' }, { n: 2, text: '{来|き}よう' }, { n: 3, text: '{来|こ}ろう' }, { n: 4, text: '{来|こ}よ' }], answer: 1, translationPt: 'Vamos voltar aqui todos juntos de novo.', explanationPt: 'Volitivo de 来る→来よう (こよう).' },

      // —— 4. 受身形 (passiva) ——
      { id: 'n4g-p4-1', number: 16, prompt: '{授業中|じゅぎょうちゅう}、{先生|せんせい}に {名前|なまえ}を（　）。', choices: [{ n: 1, text: '{呼|よ}んだ' }, { n: 2, text: '{呼|よ}ばれた' }, { n: 3, text: '{呼|よ}ばせた' }, { n: 4, text: '{呼|よ}べた' }], answer: 2, translationPt: 'Durante a aula, fui chamado pelo professor.', explanationPt: 'Passiva de G1: 呼ぶ→呼ばれる. O agente (quem chamou) leva に.' },
      { id: 'n4g-p4-2', number: 17, prompt: '{大切|たいせつ}な ケーキを {弟|おとうと}に（　）。', choices: [{ n: 1, text: '{食|た}べた' }, { n: 2, text: '{食|た}べさせた' }, { n: 3, text: '{食|た}べられた' }, { n: 4, text: '{食|た}べれた' }], answer: 3, translationPt: 'Meu bolo importante foi comido pelo meu irmão (e isso me incomodou).', explanationPt: 'Passiva “de incômodo” de G2: 食べる→食べられる.' },
      { id: 'n4g-p4-3', number: 18, prompt: 'この {歌|うた}は {世界中|せかいじゅう}で（　）います。', choices: [{ n: 1, text: '{歌|うた}って' }, { n: 2, text: '{歌|うた}わせて' }, { n: 3, text: '{歌|うた}えて' }, { n: 4, text: '{歌|うた}われて' }], answer: 4, translationPt: 'Esta música é cantada no mundo inteiro.', explanationPt: 'Passiva de G1: 歌う→歌われる.' },
      { id: 'n4g-p4-4', number: 19, prompt: 'こんでいる {電車|でんしゃ}の {中|なか}で、{足|あし}を（　）。', choices: [{ n: 1, text: 'ふんだ' }, { n: 2, text: 'ふまれた' }, { n: 3, text: 'ふませた' }, { n: 4, text: 'ふめた' }], answer: 2, translationPt: 'No trem lotado, pisaram no meu pé.', explanationPt: 'Passiva de G1: ふむ→ふまれる.' },
      { id: 'n4g-p4-5', number: 20, prompt: 'じゅぎょうに おくれて、{先生|せんせい}に（　）。', choices: [{ n: 1, text: '{注意|ちゅうい}した' }, { n: 2, text: '{注意|ちゅうい}された' }, { n: 3, text: '{注意|ちゅうい}させた' }, { n: 4, text: '{注意|ちゅうい}できた' }], answer: 2, translationPt: 'Cheguei atrasado à aula e fui repreendido pelo professor.', explanationPt: 'Passiva de する→される: 注意する→注意される.' },

      // —— 5. 使役形 (causativo) ——
      { id: 'n4g-p5-1', number: 21, prompt: '{母|はは}は {弟|おとうと}に {部屋|へや}を（　）。', choices: [{ n: 1, text: 'そうじした' }, { n: 2, text: 'そうじさせた' }, { n: 3, text: 'そうじされた' }, { n: 4, text: 'そうじできた' }], answer: 2, translationPt: 'Minha mãe fez meu irmão limpar o quarto.', explanationPt: 'Causativo de する→させる. A pessoa mandada leva に.' },
      { id: 'n4g-p5-2', number: 22, prompt: '{先生|せんせい}は {学生|がくせい}に {教科書|きょうかしょ}を（　）。', choices: [{ n: 1, text: '{読|よ}んだ' }, { n: 2, text: '{読|よ}ませた' }, { n: 3, text: '{読|よ}まれた' }, { n: 4, text: '{読|よ}めた' }], answer: 2, translationPt: 'O professor fez os alunos lerem o livro didático.', explanationPt: 'Causativo de G1: 読む→読ませる.' },
      { id: 'n4g-p5-3', number: 23, prompt: '{天気|てんき}が いいから、{子|こ}どもを {外|そと}で（　）。', choices: [{ n: 1, text: 'あそばせる' }, { n: 2, text: 'あそばれる' }, { n: 3, text: 'あそべる' }, { n: 4, text: 'あそぶ' }], answer: 1, translationPt: 'Está bom tempo, então vou deixar as crianças brincarem lá fora.', explanationPt: 'Causativo de G1: あそぶ→あそばせる (fazer/deixar fazer).' },
      { id: 'n4g-p5-4', number: 24, prompt: '{親|おや}は {子|こ}どもに {野菜|やさい}を（　）。', choices: [{ n: 1, text: '{食|た}べさせる' }, { n: 2, text: '{食|た}べられる' }, { n: 3, text: '{食|た}べさす' }, { n: 4, text: '{食|た}べる' }], answer: 1, translationPt: 'Os pais fazem os filhos comerem verduras.', explanationPt: 'Causativo de G2: 食べる→食べさせる.' },
      { id: 'n4g-p5-5', number: 25, prompt: '{部長|ぶちょう}は {部下|ぶか}を {会議|かいぎ}に {早|はや}く（　）。', choices: [{ n: 1, text: '{来|こ}させた' }, { n: 2, text: '{来|こ}られた' }, { n: 3, text: '{来|き}た' }, { n: 4, text: '{来|こ}させられた' }], answer: 1, translationPt: 'O chefe fez o subordinado vir cedo à reunião.', explanationPt: 'Causativo de 来る→来させる (こさせる).' },

      // —— 6. 命令形 (imperativo) ——
      { id: 'n4g-p6-1', number: 26, prompt: '「{早|はや}く（　）！」と {母|はは}が {言|い}った。', choices: [{ n: 1, text: '{起|お}きる' }, { n: 2, text: '{起|お}きろ' }, { n: 3, text: '{起|お}きれ' }, { n: 4, text: '{起|お}きよ' }], answer: 2, translationPt: '“Levanta logo!”, disse minha mãe.', explanationPt: 'Imperativo de G2: 起きる→起きろ (る→ろ).' },
      { id: 'n4g-p6-2', number: 27, prompt: '{試合|しあい}で せんしゅに「（　）！」と さけんだ。', choices: [{ n: 1, text: 'がんばる' }, { n: 2, text: 'がんばろ' }, { n: 3, text: 'がんばれ' }, { n: 4, text: 'がんばりろ' }], answer: 3, translationPt: 'No jogo, gritei para o atleta: “Força!”.', explanationPt: 'Imperativo de G1: がんばる→がんばれ (-u→-e).' },
      { id: 'n4g-p6-3', number: 28, prompt: '「ちょっと（　）！」と {彼|かれ}が {大|おお}きな {声|こえ}で {言|い}った。', choices: [{ n: 1, text: '{待|ま}て' }, { n: 2, text: '{待|ま}てろ' }, { n: 3, text: '{待|ま}ちろ' }, { n: 4, text: '{待|ま}と' }], answer: 1, translationPt: '“Espera aí!”, disse ele em voz alta.', explanationPt: 'Imperativo de G1: 待つ→待て (つ→て).' },
      { id: 'n4g-p6-4', number: 29, prompt: '「{宿題|しゅくだい}を（　）」と {父|ちち}に {言|い}われた。', choices: [{ n: 1, text: 'しろ' }, { n: 2, text: 'しれ' }, { n: 3, text: 'すろ' }, { n: 4, text: 'され' }], answer: 1, translationPt: '“Faça a lição”, me disse meu pai.', explanationPt: 'Imperativo de する→しろ.' },
      { id: 'n4g-p6-5', number: 30, prompt: '{犬|いぬ}に「（　）！」と {命令|めいれい}する。', choices: [{ n: 1, text: '{来|こ}い' }, { n: 2, text: '{来|こ}ろ' }, { n: 3, text: '{来|こ}え' }, { n: 4, text: '{来|こ}よ' }], answer: 1, translationPt: 'Dou a ordem ao cachorro: “Vem!”.', explanationPt: 'Imperativo de 来る→来い (こい).' },

      // —— 7. 禁止形 (proibição 〜な) ——
      { id: 'n4g-p7-1', number: 31, prompt: 'あぶないですから、ここに（　）。', choices: [{ n: 1, text: '{入|はい}りな' }, { n: 2, text: '{入|はい}れな' }, { n: 3, text: '{入|はい}るな' }, { n: 4, text: '{入|はい}らな' }], answer: 3, translationPt: 'É perigoso, então não entre aqui.', explanationPt: 'Proibição: forma de dicionário + な. 入る→入るな.' },
      { id: 'n4g-p7-2', number: 32, prompt: 'だいじょうぶだよ。そんなに（　）。', choices: [{ n: 1, text: 'しんぱいするな' }, { n: 2, text: 'しんぱいしな' }, { n: 3, text: 'しんぱいされな' }, { n: 4, text: 'しんぱいしろな' }], answer: 1, translationPt: 'Está tudo bem. Não se preocupe tanto.', explanationPt: 'Proibição: する→するな (dicionário + な).' },
      { id: 'n4g-p7-3', number: 33, prompt: 'あぶないから、{道|みち}で（　）。', choices: [{ n: 1, text: 'あそびな' }, { n: 2, text: 'あそぶな' }, { n: 3, text: 'あそべな' }, { n: 4, text: 'あそばな' }], answer: 2, translationPt: 'É perigoso, então não brinque na rua.', explanationPt: 'Proibição: あそぶ→あそぶな (forma de dicionário + な).' },
      { id: 'n4g-p7-4', number: 34, prompt: 'ここで {写真|しゃしん}を（　）。きんしです。', choices: [{ n: 1, text: 'とるな' }, { n: 2, text: 'とれな' }, { n: 3, text: 'とりな' }, { n: 4, text: 'とらな' }], answer: 1, translationPt: 'Não tire fotos aqui. É proibido.', explanationPt: 'Proibição: とる→とるな (forma de dicionário + な).' },
      { id: 'n4g-p7-5', number: 35, prompt: 'うそを（　）！', choices: [{ n: 1, text: 'つけな' }, { n: 2, text: 'つきな' }, { n: 3, text: 'つくな' }, { n: 4, text: 'つかな' }], answer: 3, translationPt: 'Não minta!', explanationPt: 'Proibição: つく→つくな (forma de dicionário + な).' },
    ],
  },
  // —— próximos temas (2..20) serão acrescentados aqui ——
]

const grammarDrill: Section = {
  id: 'grammar',
  level: 'N4G',
  titleJa: 'ぶんぽうドリル',
  titlePt: 'Gramática — Treino',
  summaryPt:
    'Treino dos 98 pontos de gramática do N4, organizados em 20 temas. Para cada ponto, 5 frases de preencher a lacuna com a forma correta — conjugações, partículas e expressões.',
  studyNotes,
  groups,
}

export const n4GrammarDrill: Level = {
  id: 'N4G',
  courseId: 'jlpt',
  titlePt: 'N4 Gramática — Treino',
  descriptionPt:
    'Sessão de treino focada na gramática do N4: 98 pontos em 20 temas (formas verbais, condicionais, dar/receber, comparação, obrigação e mais), com pelo menos 5 exercícios por ponto e explicação em português.',
  sections: [grammarDrill],
}
