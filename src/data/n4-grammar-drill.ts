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
  {
    title: '2. Derivados da forma -te',
    bodyPt:
      'Estruturas que se montam sobre a forma て:\n\n- **〜てある**: estado resultante de uma ação proposital (verbo transitivo). 花が飾ってある = há flores arranjadas.\n- **〜ておく**: fazer com antecedência / deixar pronto. 買っておく = comprar de antemão.\n- **〜てしまう**: completar de vez ou arrependimento. 忘れてしまった = acabei esquecendo.\n- **〜てみる**: experimentar/tentar fazer. 食べてみる = experimentar comer.\n- **〜ていく**: continuar fazendo rumo ao futuro / afastar-se. 持っていく = levar.\n- **〜てくる**: mudança até agora / aproximar-se / ir e voltar. 買ってくる = ir comprar e voltar.\n- **〜てから**: depois de fazer. 食べてから = depois de comer.\n- **〜てもいい**: permissão. 〜てはいけない: proibição.\n- **Dar/receber com て**: 〜てあげる (eu faço para outro), 〜てくれる (outro faz para mim), 〜てもらう (recebo a ação, agente com に), 〜てほしい (quero que o outro faça).',
  },
  {
    title: '3. Condicionais (と・ば・たら・なら)',
    bodyPt:
      'As quatro condicionais do N4 e quando usar cada uma:\n\n- **〜と**: resultado natural/automático e habitual (sempre que A, então B). Não aceita pedido, convite ou permissão no final. 押すと開く.\n- **〜ば**: condição hipotética, com foco na condição. Forma: G1 -eば (行く→行けば), adjetivo-i 〜ければ (安い→安ければ). 安ければ買う.\n- **〜たら**: a mais usada na fala — “quando/se A acontecer, B”. Aceita pedido e volição no final. 着いたら電話する.\n- **〜なら**: “se é o caso de A (que você disse/pretende)”, costuma dar conselho sobre o tema. 京都に行くなら、お寺がいい.',
  },
  {
    title: '4. Aparência, inferência e certeza',
    bodyPt:
      'Graus de certeza e inferência:\n\n- **〜ようだ**: “parece que”, julgamento baseado nos próprios indícios. 雨が降っているようだ (a rua está molhada). Com substantivo: 名詞+の+ようだ.\n- **〜でしょう／だろう**: provavelmente; ou, com entonação de pergunta, “né?” (buscar concordância). 晴れるでしょう.\n- **〜はずだ**: “deve ser”, expectativa lógica fundamentada. 約束したから来るはずだ.\n- **〜はずがない**: “é impossível que”, negação lógica forte. そんなこと言うはずがない.',
  },
  {
    title: '5. Propósito, intenção e plano',
    bodyPt:
      'Propósito, esforço, mudança e plano:\n\n- **〜ために**: propósito (verbo volitivo / 名詞+の) ou causa. 勉強するために来た.\n- **〜ように**: para que (resultado), com verbo potencial, negativo ou sujeito diferente. 見えるように前に座った; 忘れないように.\n- **〜ようにする**: esforçar-se para fazer / criar hábito. 毎日食べるようにする.\n- **〜ようになる**: passar a (mudança de capacidade ou hábito). 読めるようになった.\n- **〜（よ）うと思う**: pretender / estar pensando em (意向形+と思う). 旅行しようと思う.',
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
  {
    id: 'n4g-t2',
    title: 'もんだい２',
    subtitlePt: '2. Derivados da forma -te (〜てある・ておく・てしまう・てみる・ていく・てくる・てから・授受)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 8. 〜てある ——
      { id: 'n4g-p8-1', number: 36, prompt: 'テーブルに {花|はな}が（　）。だれかが {飾|かざ}ったようだ。', choices: [{ n: 1, text: '{飾|かざ}ってある' }, { n: 2, text: '{飾|かざ}っている' }, { n: 3, text: '{飾|かざ}っておく' }, { n: 4, text: '{飾|かざ}ってしまう' }], answer: 1, translationPt: 'Há flores arranjadas na mesa. Parece que alguém as colocou.', explanationPt: '〜てある = estado que permanece após uma ação proposital (usa verbo transitivo).' },
      { id: 'n4g-p8-2', number: 37, prompt: 'ホテルは もう（　）から、{安心|あんしん}してください。', choices: [{ n: 1, text: '{予約|よやく}してある' }, { n: 2, text: '{予約|よやく}している' }, { n: 3, text: '{予約|よやく}しておく' }, { n: 4, text: '{予約|よやく}される' }], answer: 1, translationPt: 'O hotel já está reservado, então fique tranquilo.', explanationPt: '〜てある indica que a ação (reservar) foi feita e o resultado continua.' },
      { id: 'n4g-p8-3', number: 38, prompt: 'かべに {町|まち}の {地図|ちず}が（　）。', choices: [{ n: 1, text: 'はってある' }, { n: 2, text: 'はっている' }, { n: 3, text: 'はっておく' }, { n: 4, text: 'はります' }], answer: 1, translationPt: 'Há um mapa da cidade colado na parede.', explanationPt: '〜てある: o resultado de “alguém colou o mapa” permanece visível.' },
      { id: 'n4g-p8-4', number: 39, prompt: '{机|つくえ}の {上|うえ}に メモが（　）。', choices: [{ n: 1, text: '{置|お}いてある' }, { n: 2, text: '{置|お}いている' }, { n: 3, text: '{置|お}きます' }, { n: 4, text: '{置|お}いた' }], answer: 1, translationPt: 'Há um bilhete (deixado) sobre a mesa.', explanationPt: '〜てある = estado resultante intencional (alguém deixou ali de propósito).' },
      { id: 'n4g-p8-5', number: 40, prompt: '{窓|まど}が {開|あ}けて（　）。さむいから {閉|し}めてください。', choices: [{ n: 1, text: 'ある' }, { n: 2, text: 'いる' }, { n: 3, text: 'おく' }, { n: 4, text: 'みる' }], answer: 1, translationPt: 'A janela está aberta (alguém a abriu). Está frio, feche, por favor.', explanationPt: '開ける é transitivo → 開けてある: a janela foi aberta de propósito e continua assim.' },

      // —— 9. 〜ておく ——
      { id: 'n4g-p9-1', number: 41, prompt: 'パーティーの {前|まえ}に {飲|の}み{物|もの}を {買|か}って（　）。', choices: [{ n: 1, text: 'おく' }, { n: 2, text: 'ある' }, { n: 3, text: 'いく' }, { n: 4, text: 'みる' }], answer: 1, translationPt: 'Vou comprar as bebidas antes da festa (deixar comprado).', explanationPt: '〜ておく = fazer com antecedência, preparar para depois.' },
      { id: 'n4g-p9-2', number: 42, prompt: '{使|つか}った {後|あと}は、もとの {場所|ばしょ}に {戻|もど}して（　）ください。', choices: [{ n: 1, text: 'おいて' }, { n: 2, text: 'あって' }, { n: 3, text: 'いて' }, { n: 4, text: 'みて' }], answer: 1, translationPt: 'Depois de usar, deixe de volta no lugar original, por favor.', explanationPt: '〜ておく: deixar num estado preparado para o futuro.' },
      { id: 'n4g-p9-3', number: 43, prompt: '{会議|かいぎ}の {資料|しりょう}を {読|よ}んで（　）ください。あした {使|つか}いますから。', choices: [{ n: 1, text: 'おいて' }, { n: 2, text: 'しまって' }, { n: 3, text: 'みて' }, { n: 4, text: 'いて' }], answer: 1, translationPt: 'Leia o material da reunião com antecedência. Vamos usá-lo amanhã.', explanationPt: '〜ておく = preparar-se de antemão (ler antes).' },
      { id: 'n4g-p9-4', number: 44, prompt: '{旅行|りょこう}の {前|まえ}に ホテルを {予約|よやく}して（　）。', choices: [{ n: 1, text: 'おいた' }, { n: 2, text: 'みた' }, { n: 3, text: 'いった' }, { n: 4, text: 'あった' }], answer: 1, translationPt: 'Reservei o hotel antes da viagem.', explanationPt: '〜ておく (passado おいた) = providenciei com antecedência.' },
      { id: 'n4g-p9-5', number: 45, prompt: 'ビールは {冷|ひ}やして（　）ね。あとで {飲|の}むから。', choices: [{ n: 1, text: 'おいて' }, { n: 2, text: 'しまって' }, { n: 3, text: 'いて' }, { n: 4, text: 'あって' }], answer: 1, translationPt: 'Deixa a cerveja gelando, viu? Porque vamos beber depois.', explanationPt: '〜ておく: deixar preparado de antemão (pôr para gelar).' },

      // —— 10. 〜てしまう ——
      { id: 'n4g-p10-1', number: 46, prompt: '{宿題|しゅくだい}は ぜんぶ やって（　）。だから {今|いま}は {自由|じゆう}だ。', choices: [{ n: 1, text: 'しまった' }, { n: 2, text: 'おいた' }, { n: 3, text: 'あった' }, { n: 4, text: 'いた' }], answer: 1, translationPt: 'Terminei toda a lição (de uma vez). Por isso agora estou livre.', explanationPt: '〜てしまう = completar totalmente (sentido de conclusão).' },
      { id: 'n4g-p10-2', number: 47, prompt: '{電車|でんしゃ}に かさを {忘|わす}れて（　）。', choices: [{ n: 1, text: 'しまった' }, { n: 2, text: 'おいた' }, { n: 3, text: 'みた' }, { n: 4, text: 'あった' }], answer: 1, translationPt: 'Acabei esquecendo o guarda-chuva no trem.', explanationPt: '〜てしまう = ação não intencional / arrependimento.' },
      { id: 'n4g-p10-3', number: 48, prompt: '{大切|たいせつ}な おさらを {落|お}として（　）、{割|わ}れた。', choices: [{ n: 1, text: 'しまって' }, { n: 2, text: 'おいて' }, { n: 3, text: 'あって' }, { n: 4, text: 'いて' }], answer: 1, translationPt: 'Acabei deixando o prato importante cair, e ele quebrou.', explanationPt: '〜てしまう indica algo indesejado que aconteceu.' },
      { id: 'n4g-p10-4', number: 49, prompt: 'その {本|ほん}は もう {読|よ}んで（　）から、かして あげるよ。', choices: [{ n: 1, text: 'しまった' }, { n: 2, text: 'おく' }, { n: 3, text: 'みる' }, { n: 4, text: 'くる' }], answer: 1, translationPt: 'Esse livro eu já terminei de ler, então te empresto.', explanationPt: '〜てしまう (conclusão): já li por completo.' },
      { id: 'n4g-p10-5', number: 50, prompt: 'ケーキを ぜんぶ {一人|ひとり}で {食|た}べて（　）。', choices: [{ n: 1, text: 'しまった' }, { n: 2, text: 'おいた' }, { n: 3, text: 'あった' }, { n: 4, text: 'きた' }], answer: 1, translationPt: 'Acabei comendo o bolo todo sozinho.', explanationPt: '〜てしまう: ação completa, muitas vezes com arrependimento.' },

      // —— 11. 〜てみる ——
      { id: 'n4g-p11-1', number: 51, prompt: '{新|あたら}しい ラーメン{屋|や}に {行|い}って（　）。おいしいか どうか {知|し}りたい。', choices: [{ n: 1, text: 'みる' }, { n: 2, text: 'おく' }, { n: 3, text: 'ある' }, { n: 4, text: 'しまう' }], answer: 1, translationPt: 'Vou experimentar a nova casa de ramen. Quero saber se é boa.', explanationPt: '〜てみる = experimentar fazer (para ver como é).' },
      { id: 'n4g-p11-2', number: 52, prompt: 'この {服|ふく}を {着|き}て（　）もいいですか。', choices: [{ n: 1, text: 'みて' }, { n: 2, text: 'おいて' }, { n: 3, text: 'あって' }, { n: 4, text: 'しまって' }], answer: 1, translationPt: 'Posso experimentar (vestir) esta roupa?', explanationPt: '〜てみる = experimentar. 着てみてもいいですか = posso experimentar vestir?' },
      { id: 'n4g-p11-3', number: 53, prompt: '{分|わ}からない {言葉|ことば}は、じしょで {調|しら}べて（　）ください。', choices: [{ n: 1, text: 'みて' }, { n: 2, text: 'あって' }, { n: 3, text: 'しまって' }, { n: 4, text: 'いて' }], answer: 1, translationPt: 'As palavras que não entender, tente procurar no dicionário.', explanationPt: '〜てみる: tentar fazer (procurar) para ver o resultado.' },
      { id: 'n4g-p11-4', number: 54, prompt: '{一度|いちど} {日本|にほん}の おんせんに {入|はい}って（　）です。', choices: [{ n: 1, text: 'みたい' }, { n: 2, text: 'おきたい' }, { n: 3, text: 'ありたい' }, { n: 4, text: 'しまいたい' }], answer: 1, translationPt: 'Quero experimentar entrar num onsen japonês ao menos uma vez.', explanationPt: '〜てみたい = querer experimentar fazer.' },
      { id: 'n4g-p11-5', number: 55, prompt: '{作|つく}り{方|かた}が {分|わ}からなかったが、{自分|じぶん}で {作|つく}って（　）。', choices: [{ n: 1, text: 'みた' }, { n: 2, text: 'おいた' }, { n: 3, text: 'あった' }, { n: 4, text: 'いた' }], answer: 1, translationPt: 'Eu não sabia como fazer, mas tentei fazer sozinho.', explanationPt: '〜てみる (passado みた) = experimentei/tentei fazer.' },

      // —— 12. 〜ていく ——
      { id: 'n4g-p12-1', number: 56, prompt: 'あしたは {遠足|えんそく}だから、お{弁当|べんとう}を {持|も}って（　）。', choices: [{ n: 1, text: 'いく' }, { n: 2, text: 'くる' }, { n: 3, text: 'おく' }, { n: 4, text: 'みる' }], answer: 1, translationPt: 'Amanhã é excursão, então vou levar marmita.', explanationPt: '〜ていく: levar / fazer afastando-se de quem fala.' },
      { id: 'n4g-p12-2', number: 57, prompt: 'これから {寒|さむ}く なって（　）でしょう。', choices: [{ n: 1, text: 'いく' }, { n: 2, text: 'くる' }, { n: 3, text: 'ある' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'De agora em diante deve ir ficando cada vez mais frio.', explanationPt: '〜ていく: mudança que continua rumo ao futuro.' },
      { id: 'n4g-p12-3', number: 58, prompt: '{毎朝|まいあさ}、{子|こ}どもを {学校|がっこう}まで {連|つ}れて（　）。', choices: [{ n: 1, text: 'いく' }, { n: 2, text: 'くる' }, { n: 3, text: 'みる' }, { n: 4, text: 'しまう' }], answer: 1, translationPt: 'Toda manhã levo a criança até a escola.', explanationPt: '〜ていく: ação que se afasta do falante (levar para lá).' },
      { id: 'n4g-p12-4', number: 59, prompt: 'これからも {日本語|にほんご}の {勉強|べんきょう}を {続|つづ}けて（　）つもりだ。', choices: [{ n: 1, text: 'いく' }, { n: 2, text: 'くる' }, { n: 3, text: 'ある' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'Pretendo continuar estudando japonês daqui em diante.', explanationPt: '〜ていく: continuar fazendo rumo ao futuro.' },
      { id: 'n4g-p12-5', number: 60, prompt: '{鳥|とり}が {空|そら}を {飛|と}んで（　）。', choices: [{ n: 1, text: 'いった' }, { n: 2, text: 'きた' }, { n: 3, text: 'あった' }, { n: 4, text: 'おいた' }], answer: 1, translationPt: 'O pássaro foi voando (afastando-se).', explanationPt: '〜ていく: movimento que se afasta de quem observa.' },

      // —— 13. 〜てくる ——
      { id: 'n4g-p13-1', number: 61, prompt: 'ちょっと コンビニに {行|い}って（　）。すぐ {戻|もど}るよ。', choices: [{ n: 1, text: 'くる' }, { n: 2, text: 'いく' }, { n: 3, text: 'おく' }, { n: 4, text: 'みる' }], answer: 1, translationPt: 'Vou ali na conveniência e já volto.', explanationPt: '〜てくる: ir e voltar (para perto de quem fala).' },
      { id: 'n4g-p13-2', number: 62, prompt: '{最近|さいきん}、{日本語|にほんご}が {少|すこ}しずつ {分|わ}かって（　）。', choices: [{ n: 1, text: 'きた' }, { n: 2, text: 'いった' }, { n: 3, text: 'あった' }, { n: 4, text: 'おいた' }], answer: 1, translationPt: 'Ultimamente fui entendendo japonês aos poucos (até agora).', explanationPt: '〜てくる: mudança que vem ocorrendo até o presente.' },
      { id: 'n4g-p13-3', number: 63, prompt: '{雨|あめ}が {降|ふ}って（　）。かさを {持|も}って いない。', choices: [{ n: 1, text: 'きた' }, { n: 2, text: 'いった' }, { n: 3, text: 'おいた' }, { n: 4, text: 'あった' }], answer: 1, translationPt: 'Começou a chover (chegou até nós). Não estou com guarda-chuva.', explanationPt: '〜てくる: surgimento/aproximação de um fenômeno.' },
      { id: 'n4g-p13-4', number: 64, prompt: 'スーパーで {牛乳|ぎゅうにゅう}を {買|か}って（　）ください。', choices: [{ n: 1, text: 'きて' }, { n: 2, text: 'いって' }, { n: 3, text: 'あって' }, { n: 4, text: 'しまって' }], answer: 1, translationPt: 'Compre leite no mercado (e traga), por favor.', explanationPt: '〜てくる: fazer algo e voltar trazendo.' },
      { id: 'n4g-p13-5', number: 65, prompt: 'なにも {食|た}べていないので、だんだん おなかが すいて（　）。', choices: [{ n: 1, text: 'きた' }, { n: 2, text: 'いった' }, { n: 3, text: 'おいた' }, { n: 4, text: 'みた' }], answer: 1, translationPt: 'Como não comi nada, aos poucos fui ficando com fome.', explanationPt: '〜てくる: mudança gradual até o momento atual.' },

      // —— 14. 〜てから ——
      { id: 'n4g-p14-1', number: 66, prompt: '{手|て}を {洗|あら}って（　）、ごはんを {食|た}べます。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まで' }, { n: 3, text: 'ながら' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Lavo as mãos e só depois como.', explanationPt: '〜てから = depois de fazer (sequência clara de ações).' },
      { id: 'n4g-p14-2', number: 67, prompt: '{大学|だいがく}を {卒業|そつぎょう}して（　）、{日本|にほん}に {来|き}ました。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まで' }, { n: 3, text: 'ても' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Vim ao Japão depois de me formar na faculdade.', explanationPt: '〜てから marca o que ocorreu antes na ordem temporal.' },
      { id: 'n4g-p14-3', number: 68, prompt: '{映画|えいが}が {終|お}わって（　）、お{茶|ちゃ}を {飲|の}みに {行|い}こう。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まえに' }, { n: 3, text: 'あいだに' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Depois que o filme acabar, vamos tomar um chá.', explanationPt: '〜てから: a próxima ação só ocorre após a primeira.' },
      { id: 'n4g-p14-4', number: 69, prompt: 'よく {考|かんが}えて（　）、{返事|へんじ}を します。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ても' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'Vou responder depois de pensar bem.', explanationPt: '〜てから: a segunda ação só acontece depois da primeira.' },
      { id: 'n4g-p14-5', number: 70, prompt: '{朝|あさ} {起|お}きて（　）、まず {水|みず}を {一杯|いっぱい} {飲|の}む。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まえに' }, { n: 3, text: 'ながら' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Depois de acordar de manhã, primeiro bebo um copo de água.', explanationPt: '〜てから = logo depois de (acordar).' },

      // —— 15. 〜てもいい ——
      { id: 'n4g-p15-1', number: 71, prompt: 'ここに {座|すわ}って（　）ですか。', choices: [{ n: 1, text: 'もいい' }, { n: 2, text: 'はいけない' }, { n: 3, text: 'もらう' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'Posso me sentar aqui?', explanationPt: '〜てもいい(ですか) = pedir ou dar permissão.' },
      { id: 'n4g-p15-2', number: 72, prompt: 'もう {帰|かえ}って（　）よ。{仕事|しごと}は {終|お}わったから。', choices: [{ n: 1, text: 'もいい' }, { n: 2, text: 'はだめ' }, { n: 3, text: 'ならない' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'Já pode ir embora. O trabalho acabou.', explanationPt: '〜てもいい = está permitido (pode fazer).' },
      { id: 'n4g-p15-3', number: 73, prompt: 'すみません、このペンを {使|つか}って（　）ですか。', choices: [{ n: 1, text: 'もいい' }, { n: 2, text: 'はいけない' }, { n: 3, text: 'みる' }, { n: 4, text: 'しまう' }], answer: 1, translationPt: 'Com licença, posso usar esta caneta?', explanationPt: '〜てもいいですか = pedido educado de permissão.' },
      { id: 'n4g-p15-4', number: 74, prompt: '{写真|しゃしん}を {撮|と}って（　）か。— ええ、どうぞ。', choices: [{ n: 1, text: 'もいいです' }, { n: 2, text: 'はいけません' }, { n: 3, text: 'ください' }, { n: 4, text: 'おきます' }], answer: 1, translationPt: 'Posso tirar uma foto? — Pode, à vontade.', explanationPt: '〜てもいいですか pede permissão; どうぞ a concede.' },
      { id: 'n4g-p15-5', number: 75, prompt: 'テストは {鉛筆|えんぴつ}で {書|か}いて（　）ですか。', choices: [{ n: 1, text: 'もいい' }, { n: 2, text: 'はいけない' }, { n: 3, text: 'おく' }, { n: 4, text: 'ある' }], answer: 1, translationPt: 'Posso escrever a prova a lápis?', explanationPt: '〜てもいい = permissão.' },

      // —— 16. 〜てはいけない ——
      { id: 'n4g-p16-1', number: 76, prompt: 'ここで {写真|しゃしん}を {撮|と}って（　）。', choices: [{ n: 1, text: 'はいけません' }, { n: 2, text: 'もいいです' }, { n: 3, text: 'ください' }, { n: 4, text: 'みます' }], answer: 1, translationPt: 'Não se pode tirar foto aqui.', explanationPt: '〜てはいけない = proibição (não pode fazer).' },
      { id: 'n4g-p16-2', number: 77, prompt: '{授業中|じゅぎょうちゅう}に {寝|ね}て（　）。', choices: [{ n: 1, text: 'はいけない' }, { n: 2, text: 'もいい' }, { n: 3, text: 'ほしい' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'Não se pode dormir durante a aula.', explanationPt: '〜てはいけない: algo proibido.' },
      { id: 'n4g-p16-3', number: 78, prompt: 'しけんの {時|とき}、となりの {人|ひと}と {話|はな}して（　）。', choices: [{ n: 1, text: 'はいけません' }, { n: 2, text: 'もいいです' }, { n: 3, text: 'ください' }, { n: 4, text: 'あります' }], answer: 1, translationPt: 'Durante a prova, não se pode conversar com a pessoa ao lado.', explanationPt: '〜てはいけません = proibição (registro formal).' },
      { id: 'n4g-p16-4', number: 79, prompt: 'この {川|かわ}で {泳|およ}いで（　）。あぶないですよ。', choices: [{ n: 1, text: 'はいけません' }, { n: 2, text: 'もいいです' }, { n: 3, text: 'ほしいです' }, { n: 4, text: 'みたいです' }], answer: 1, translationPt: 'Não se pode nadar neste rio. É perigoso.', explanationPt: '〜てはいけない: regra/proibição.' },
      { id: 'n4g-p16-5', number: 80, prompt: 'ここに {車|くるま}を {止|と}めて（　）。ちゅうしゃじょうは あちらです。', choices: [{ n: 1, text: 'はいけません' }, { n: 2, text: 'もいいです' }, { n: 3, text: 'ください' }, { n: 4, text: 'おきます' }], answer: 1, translationPt: 'Não pode estacionar o carro aqui. O estacionamento é ali.', explanationPt: '〜てはいけません = é proibido.' },

      // —— 17. 〜てあげる ——
      { id: 'n4g-p17-1', number: 81, prompt: '{私|わたし}は {友|とも}だちに {道|みち}を {教|おし}えて（　）。', choices: [{ n: 1, text: 'あげた' }, { n: 2, text: 'くれた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'ほしい' }], answer: 1, translationPt: 'Mostrei o caminho para o meu amigo.', explanationPt: '〜てあげる = fazer algo em benefício de outro (eu → outro).' },
      { id: 'n4g-p17-2', number: 82, prompt: '{荷物|にもつ}が {重|おも}そうですね。{持|も}って（　）か。', choices: [{ n: 1, text: 'あげましょう' }, { n: 2, text: 'くれましょう' }, { n: 3, text: 'もらいましょう' }, { n: 4, text: 'ほしいです' }], answer: 1, translationPt: 'Sua bagagem parece pesada. Quer que eu a carregue?', explanationPt: '〜てあげましょうか = oferecer-se para fazer algo por alguém.' },
      { id: 'n4g-p17-3', number: 83, prompt: '{妹|いもうと}に {絵本|えほん}を {読|よ}んで（　）。', choices: [{ n: 1, text: 'あげた' }, { n: 2, text: 'くれた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'ほしい' }], answer: 1, translationPt: 'Li um livro ilustrado para a minha irmã mais nova.', explanationPt: '〜てあげる: eu faço algo para outra pessoa.' },
      { id: 'n4g-p17-4', number: 84, prompt: 'おばあさんの {荷物|にもつ}を {駅|えき}まで {運|はこ}んで（　）。', choices: [{ n: 1, text: 'あげた' }, { n: 2, text: 'くれた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'ほしかった' }], answer: 1, translationPt: 'Carreguei a bagagem da senhora até a estação.', explanationPt: '〜てあげる = ação feita em benefício do outro.' },
      { id: 'n4g-p17-5', number: 85, prompt: '{友|とも}だちが {元気|げんき}が ないので、{話|はなし}を {聞|き}いて（　）。', choices: [{ n: 1, text: 'あげた' }, { n: 2, text: 'くれた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'ほしい' }], answer: 1, translationPt: 'Como meu amigo estava pra baixo, escutei o que ele tinha a dizer.', explanationPt: '〜てあげる: fazer algo pensando no bem do outro.' },

      // —— 18. 〜てくれる ——
      { id: 'n4g-p18-1', number: 86, prompt: '{母|はは}が ケーキを {作|つく}って（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'みた' }], answer: 1, translationPt: 'Minha mãe fez um bolo para mim.', explanationPt: '〜てくれる = outra pessoa faz algo em meu benefício (outro → eu).' },
      { id: 'n4g-p18-2', number: 87, prompt: '{友|とも}だちが {車|くるま}で {駅|えき}まで {送|おく}って（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'おいた' }], answer: 1, translationPt: 'Meu amigo me levou de carro até a estação.', explanationPt: '〜てくれる: o outro faz algo por mim.' },
      { id: 'n4g-p18-3', number: 88, prompt: 'いそがしいのに {手伝|てつだ}って（　）ありがとう。', choices: [{ n: 1, text: 'くれて' }, { n: 2, text: 'あげて' }, { n: 3, text: 'もらって' }, { n: 4, text: 'みて' }], answer: 1, translationPt: 'Obrigado por me ajudar mesmo estando ocupado.', explanationPt: '〜てくれて ありがとう = agradecer por algo que fizeram por mim.' },
      { id: 'n4g-p18-4', number: 89, prompt: '{先生|せんせい}が しゅくだいの まちがいを {直|なお}して（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'ほしい' }, { n: 4, text: 'おいた' }], answer: 1, translationPt: 'O professor corrigiu os erros da minha lição (para mim).', explanationPt: '〜てくれる: alguém de fora faz algo em meu favor.' },
      { id: 'n4g-p18-5', number: 90, prompt: 'すみません、{誰|だれ}か {写真|しゃしん}を {撮|と}って（　）か。', choices: [{ n: 1, text: 'くれません' }, { n: 2, text: 'あげません' }, { n: 3, text: 'もらいません' }, { n: 4, text: 'ほしくない' }], answer: 1, translationPt: 'Com licença, alguém poderia tirar uma foto (para mim)?', explanationPt: '〜てくれませんか = pedir educadamente que façam algo por mim.' },

      // —— 19. 〜てもらう ——
      { id: 'n4g-p19-1', number: 91, prompt: '{私|わたし}は {友|とも}だちに しゅくだいを {手伝|てつだ}って（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'みた' }], answer: 1, translationPt: 'Recebi ajuda do meu amigo na lição (pedi a ele).', explanationPt: '〜てもらう = receber a ação de alguém; o agente leva に.' },
      { id: 'n4g-p19-2', number: 92, prompt: '{先生|せんせい}に {名前|なまえ}の {読|よ}み{方|かた}を {教|おし}えて（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'ほしい' }], answer: 1, translationPt: 'Pedi ao professor que me ensinasse a leitura do nome.', explanationPt: '〜てもらう: eu recebo o benefício da ação (に marca quem faz).' },
      { id: 'n4g-p19-3', number: 93, prompt: '{病院|びょういん}で {医者|いしゃ}に みて（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'おいた' }], answer: 1, translationPt: 'Fui examinado pelo médico no hospital (pedi que me examinasse).', explanationPt: '〜てもらう: receber o serviço/ação de alguém.' },
      { id: 'n4g-p19-4', number: 94, prompt: '{読|よ}めない かんじを {友|とも}だちに {書|か}いて（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'みた' }], answer: 1, translationPt: 'Pedi ao meu amigo que escrevesse o kanji que eu não conseguia ler.', explanationPt: '〜てもらう = conseguir que alguém faça algo por você.' },
      { id: 'n4g-p19-5', number: 95, prompt: 'すみません、{写真|しゃしん}を {撮|と}って（　）んですが。', choices: [{ n: 1, text: 'もらいたい' }, { n: 2, text: 'あげたい' }, { n: 3, text: 'くれたい' }, { n: 4, text: 'おきたい' }], answer: 1, translationPt: 'Com licença, eu gostaria que tirassem uma foto (minha).', explanationPt: '〜てもらいたい = querer receber a ação de alguém.' },

      // —— 20. 〜てほしい ——
      { id: 'n4g-p20-1', number: 96, prompt: '{学生|がくせい}には もっと {日本語|にほんご}を {勉強|べんきょう}して（　）。', choices: [{ n: 1, text: 'ほしい' }, { n: 2, text: 'たい' }, { n: 3, text: 'あげる' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'Quero que os alunos estudem mais japonês.', explanationPt: '〜てほしい = querer que OUTRA pessoa faça algo (≠ 〜たい, que é o próprio falante).' },
      { id: 'n4g-p20-2', number: 97, prompt: 'ちょっと {待|ま}って（　）んですが、いいですか。', choices: [{ n: 1, text: 'ほしい' }, { n: 2, text: 'たい' }, { n: 3, text: 'みたい' }, { n: 4, text: 'おきたい' }], answer: 1, translationPt: 'Eu queria que você esperasse um pouco, tudo bem?', explanationPt: '〜てほしい: desejo dirigido à ação de outra pessoa.' },
      { id: 'n4g-p20-3', number: 98, prompt: '{子|こ}どもには {元気|げんき}に {育|そだ}って（　）。', choices: [{ n: 1, text: 'ほしい' }, { n: 2, text: 'たい' }, { n: 3, text: 'あげたい' }, { n: 4, text: 'おきたい' }], answer: 1, translationPt: 'Quero que meus filhos cresçam com saúde.', explanationPt: '〜てほしい = querer que o outro (a criança) faça/seja algo.' },
      { id: 'n4g-p20-4', number: 99, prompt: '{彼|かれ}に {本当|ほんとう}の ことを {言|い}って（　）。', choices: [{ n: 1, text: 'ほしい' }, { n: 2, text: 'たい' }, { n: 3, text: 'あげる' }, { n: 4, text: 'もらう' }], answer: 1, translationPt: 'Quero que ele diga a verdade.', explanationPt: '〜てほしい: desejo de que outra pessoa realize a ação.' },
      { id: 'n4g-p20-5', number: 100, prompt: 'みんなに この ニュースを {知|し}って（　）。', choices: [{ n: 1, text: 'ほしい' }, { n: 2, text: 'たい' }, { n: 3, text: 'あげる' }, { n: 4, text: 'おく' }], answer: 1, translationPt: 'Quero que todos fiquem sabendo desta notícia.', explanationPt: '〜てほしい = querer que outros façam (saibam) algo.' },
    ],
  },
  {
    id: 'n4g-t3',
    title: 'もんだい３',
    subtitlePt: '3. Condicionais (〜と・〜ば・〜たら・〜なら)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 21. 〜と ——
      { id: 'n4g-p21-1', number: 101, prompt: 'このボタンを {押|お}す（　）、ドアが {開|あ}きます。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'なら' }, { n: 3, text: 'ても' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Quando você aperta este botão, a porta abre.', explanationPt: '〜と = resultado natural e automático (sempre que A, então B).' },
      { id: 'n4g-p21-2', number: 102, prompt: '{春|はる}に なる（　）、さくらが さきます。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'なら' }, { n: 3, text: 'のに' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Quando chega a primavera, as cerejeiras florescem.', explanationPt: '〜と para fenômenos naturais e habituais.' },
      { id: 'n4g-p21-3', number: 103, prompt: 'あの かどを {右|みぎ}に {曲|ま}がる（　）、{銀行|ぎんこう}が あります。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'なら' }, { n: 3, text: 'ても' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Virando aquela esquina à direita, tem um banco.', explanationPt: '〜と em instruções de caminho (o resultado é certo).' },
      { id: 'n4g-p21-4', number: 104, prompt: '１に１を {足|た}す（　）、２に なります。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'なら' }, { n: 3, text: 'ても' }, { n: 4, text: 'けれど' }], answer: 1, translationPt: 'Somando 1 mais 1, dá 2.', explanationPt: '〜と para verdades e relações sempre válidas.' },
      { id: 'n4g-p21-5', number: 105, prompt: 'この {道|みち}を まっすぐ {行|い}く（　）、{駅|えき}に {着|つ}きます。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'なら' }, { n: 3, text: 'のに' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Seguindo reto por esta rua, você chega à estação.', explanationPt: '〜と: consequência natural e garantida.' },

      // —— 22. 〜ば ——
      { id: 'n4g-p22-1', number: 106, prompt: '{時間|じかん}が あれ（　）、てつだいます。', choices: [{ n: 1, text: 'ば' }, { n: 2, text: 'たら' }, { n: 3, text: 'ても' }, { n: 4, text: 'と' }], answer: 1, translationPt: 'Se eu tiver tempo, ajudo.', explanationPt: 'Condicional ば: ある→あれば.' },
      { id: 'n4g-p22-2', number: 107, prompt: 'この くすりを {飲|の}め（　）、よく なりますよ。', choices: [{ n: 1, text: 'ば' }, { n: 2, text: 'ても' }, { n: 3, text: 'のに' }, { n: 4, text: 'たり' }], answer: 1, translationPt: 'Se tomar este remédio, você vai melhorar.', explanationPt: 'Condicional ば: 飲む→飲めば (G1 -む→-めば).' },
      { id: 'n4g-p22-3', number: 108, prompt: '{値段|ねだん}が {安|やす}けれ（　）、{買|か}います。', choices: [{ n: 1, text: 'ば' }, { n: 2, text: 'たら' }, { n: 3, text: 'ても' }, { n: 4, text: 'と' }], answer: 1, translationPt: 'Se o preço for barato, eu compro.', explanationPt: 'Condicional ば de adjetivo-i: 安い→安ければ.' },
      { id: 'n4g-p22-4', number: 109, prompt: 'もっと {早|はや}く {起|お}きれ（　）、{電車|でんしゃ}に {間|ま}に {合|あ}ったのに。', choices: [{ n: 1, text: 'ば' }, { n: 2, text: 'たら' }, { n: 3, text: 'ても' }, { n: 4, text: 'と' }], answer: 1, translationPt: 'Se eu tivesse acordado mais cedo, teria pego o trem...', explanationPt: 'Condicional ば: 起きる→起きれば (G2 る→れば).' },
      { id: 'n4g-p22-5', number: 110, prompt: 'ここを {押|お}せ（　）、{音|おと}が {出|で}ます。', choices: [{ n: 1, text: 'ば' }, { n: 2, text: 'たら' }, { n: 3, text: 'ても' }, { n: 4, text: 'と' }], answer: 1, translationPt: 'Se apertar aqui, sai som.', explanationPt: 'Condicional ば: 押す→押せば (G1 -す→-せば).' },

      // —— 23. 〜たら ——
      { id: 'n4g-p23-1', number: 111, prompt: '{日本|にほん}に {着|つ}い（　）、{電話|でんわ}します。', choices: [{ n: 1, text: 'たら' }, { n: 2, text: 'と' }, { n: 3, text: 'ば' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Quando eu chegar no Japão, ligo.', explanationPt: '〜たら para um evento futuro pontual seguido de ação (着いたら電話する).' },
      { id: 'n4g-p23-2', number: 112, prompt: 'もし お{金|かね}が あっ（　）、{旅行|りょこう}したい。', choices: [{ n: 1, text: 'たら' }, { n: 2, text: 'と' }, { n: 3, text: 'ば' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Se eu tivesse dinheiro, gostaria de viajar.', explanationPt: '〜たら: condição hipotética (もし…あったら).' },
      { id: 'n4g-p23-3', number: 113, prompt: '{駅|えき}に {着|つ}い（　）、メールを ください。', choices: [{ n: 1, text: 'たら' }, { n: 2, text: 'ると' }, { n: 3, text: 'れば' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Quando chegar à estação, me mande um e-mail.', explanationPt: '〜たら combina com pedido (ください) no final — 〜と não pode.' },
      { id: 'n4g-p23-4', number: 114, prompt: '{宿題|しゅくだい}が {終|お}わっ（　）、あそびに {行|い}こう。', choices: [{ n: 1, text: 'たら' }, { n: 2, text: 'ると' }, { n: 3, text: 'ても' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Quando a lição acabar, vamos sair para brincar.', explanationPt: '〜たら + volição (行こう). 〜と não aceita volição no final.' },
      { id: 'n4g-p23-5', number: 115, prompt: '{家|いえ}に {帰|かえ}っ（　）、だれも いなかった。', choices: [{ n: 1, text: 'たら' }, { n: 2, text: 'ると' }, { n: 3, text: 'れば' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Quando cheguei em casa, não havia ninguém.', explanationPt: '〜たら também marca uma descoberta inesperada no passado (帰ったら、いなかった).' },

      // —— 24. 〜なら ——
      { id: 'n4g-p24-1', number: 116, prompt: '{京都|きょうと}に {行|い}く（　）、おてらが いいですよ。', choices: [{ n: 1, text: 'なら' }, { n: 2, text: 'と' }, { n: 3, text: 'たら' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Se você vai a Kyoto, os templos são uma boa.', explanationPt: '〜なら = dado que (você vai a Kyoto), eu recomendo… (conselho sobre o tema).' },
      { id: 'n4g-p24-2', number: 117, prompt: '{日本語|にほんご}を {勉強|べんきょう}する（　）、この {本|ほん}が いいです。', choices: [{ n: 1, text: 'なら' }, { n: 2, text: 'と' }, { n: 3, text: 'れば' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Se for estudar japonês, este livro é bom.', explanationPt: '〜なら para dar conselho com base no que o outro pretende fazer.' },
      { id: 'n4g-p24-3', number: 118, prompt: 'Ａ「あたまが いたいんです。」Ｂ「ねつが ある（　）、{早|はや}く {帰|かえ}った {方|ほう}が いいですよ。」', choices: [{ n: 1, text: 'なら' }, { n: 2, text: 'と' }, { n: 3, text: 'たら' }, { n: 4, text: 'ても' }], answer: 1, translationPt: '“Estou com dor de cabeça.” “Se está com febre, é melhor ir para casa logo.”', explanationPt: '〜なら responde ao que o interlocutor disse (dado isso, então…).' },
      { id: 'n4g-p24-4', number: 119, prompt: 'パソコンを {買|か}う（　）、あの {店|みせ}が {安|やす}いですよ。', choices: [{ n: 1, text: 'なら' }, { n: 2, text: 'と' }, { n: 3, text: 'れば' }, { n: 4, text: 'ので' }], answer: 1, translationPt: 'Se for comprar um computador, aquela loja é barata.', explanationPt: '〜なら: supondo esse objetivo, segue o conselho.' },
      { id: 'n4g-p24-5', number: 120, prompt: '{温泉|おんせん}に {行|い}く（　）、{箱根|はこね}が おすすめです。', choices: [{ n: 1, text: 'なら' }, { n: 2, text: 'と' }, { n: 3, text: 'たら' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Se for a um onsen, recomendo Hakone.', explanationPt: '〜なら apresenta o tema e, em seguida, a recomendação.' },
    ],
  },
  {
    id: 'n4g-t4',
    title: 'もんだい４',
    subtitlePt: '4. Aparência e certeza (〜ようだ・〜でしょう・〜はずだ・〜はずがない)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 25. 〜ようだ ——
      { id: 'n4g-p25-1', number: 121, prompt: '{外|そと}は {雨|あめ}が {降|ふ}っている（　）。{道|みち}が ぬれている。', choices: [{ n: 1, text: 'ようだ' }, { n: 2, text: 'ように' }, { n: 3, text: 'ような' }, { n: 4, text: 'ようと' }], answer: 1, translationPt: 'Parece que está chovendo lá fora. A rua está molhada.', explanationPt: '〜ようだ = inferência baseada em indícios (a rua molhada).' },
      { id: 'n4g-p25-2', number: 122, prompt: '{彼|かれ}は {忙|いそが}しい（　）です。{毎日|まいにち} おそくまで {働|はたら}いています。', choices: [{ n: 1, text: 'よう' }, { n: 2, text: 'ため' }, { n: 3, text: 'まま' }, { n: 4, text: 'つもり' }], answer: 1, translationPt: 'Ele parece estar ocupado. Trabalha até tarde todo dia.', explanationPt: '〜ようです = parece que, com base em evidências.' },
      { id: 'n4g-p25-3', number: 123, prompt: '{誰|だれ}か {来|き}た（　）。げんかんで {音|おと}が した。', choices: [{ n: 1, text: 'ようだ' }, { n: 2, text: 'ように' }, { n: 3, text: 'ような' }, { n: 4, text: 'ようなら' }], answer: 1, translationPt: 'Parece que alguém chegou. Ouvi um som na entrada.', explanationPt: '〜ようだ: julgamento a partir de um indício (o som).' },
      { id: 'n4g-p25-4', number: 124, prompt: '{彼女|かのじょ}は {病気|びょうき}の（　）です。{顔色|かおいろ}が とても {悪|わる}い。', choices: [{ n: 1, text: 'よう' }, { n: 2, text: 'そう' }, { n: 3, text: 'まま' }, { n: 4, text: 'つもり' }], answer: 1, translationPt: 'Ela parece estar doente. Está com a aparência muito abatida.', explanationPt: 'Com substantivo: 名詞+の+ようだ (病気のようだ). Julgamento por evidência (a aparência).' },
      { id: 'n4g-p25-5', number: 125, prompt: 'このへやは だれも {使|つか}っていない（　）。ほこりが いっぱいだ。', choices: [{ n: 1, text: 'ようだ' }, { n: 2, text: 'ように' }, { n: 3, text: 'ようと' }, { n: 4, text: 'ようなら' }], answer: 1, translationPt: 'Parece que ninguém usa este quarto. Está cheio de poeira.', explanationPt: '〜ようだ = inferência por evidência (a poeira).' },

      // —— 26. 〜でしょう／だろう ——
      { id: 'n4g-p26-1', number: 126, prompt: 'あしたは {晴|は}れる（　）。', choices: [{ n: 1, text: 'でしょう' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'ています' }, { n: 4, text: 'ください' }], answer: 1, translationPt: 'Amanhã provavelmente vai fazer sol.', explanationPt: '〜でしょう = previsão/probabilidade (sem certeza total).' },
      { id: 'n4g-p26-2', number: 127, prompt: 'これ、おいしい（　）？— うん、とても。', choices: [{ n: 1, text: 'でしょう' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'ますか' }, { n: 4, text: 'ように' }], answer: 1, translationPt: 'Isso é gostoso, né? — Sim, muito.', explanationPt: '〜でしょう？ (com entonação) = buscar a concordância do ouvinte (“né?”).' },
      { id: 'n4g-p26-3', number: 128, prompt: '{彼|かれ}は たぶん {来|こ}ない（　）。', choices: [{ n: 1, text: 'でしょう' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'ています' }, { n: 4, text: 'つもり' }], answer: 1, translationPt: 'Ele provavelmente não vem.', explanationPt: 'たぶん〜でしょう = conjectura (provavelmente).' },
      { id: 'n4g-p26-4', number: 129, prompt: 'あの {人|ひと}は {学生|がくせい}（　）。{若|わか}いし、{本|ほん}を たくさん {持|も}っている。', choices: [{ n: 1, text: 'でしょう' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'でした' }, { n: 4, text: 'ください' }], answer: 1, translationPt: 'Aquela pessoa deve ser estudante. É jovem e carrega muitos livros.', explanationPt: '〜でしょう = suposição com base em pistas.' },
      { id: 'n4g-p26-5', number: 130, prompt: 'この {問題|もんだい}は {学生|がくせい}には {難|むずか}しい（　）。', choices: [{ n: 1, text: 'だろう' }, { n: 2, text: 'だった' }, { n: 3, text: 'ました' }, { n: 4, text: 'ように' }], answer: 1, translationPt: 'Este problema deve ser difícil para os alunos.', explanationPt: 'だろう = forma plana de でしょう (conjectura).' },

      // —— 27. 〜はずだ ——
      { id: 'n4g-p27-1', number: 131, prompt: '{彼|かれ}は {今日|きょう} {来|く}る（　）。{約束|やくそく}したから。', choices: [{ n: 1, text: 'はずだ' }, { n: 2, text: 'つもりだ' }, { n: 3, text: 'ようだ' }, { n: 4, text: 'そうだ' }], answer: 1, translationPt: 'Ele deve vir hoje. Porque combinamos.', explanationPt: '〜はずだ = expectativa lógica baseada em fato (a promessa).' },
      { id: 'n4g-p27-2', number: 132, prompt: 'かぎを かけたから、だいじょうぶな（　）。', choices: [{ n: 1, text: 'はずだ' }, { n: 2, text: 'つもりだ' }, { n: 3, text: 'ことだ' }, { n: 4, text: 'ものだ' }], answer: 1, translationPt: 'Tranquei a porta, então deve estar tudo bem.', explanationPt: '〜はずだ: conclusão lógica (na-adjetivo + な + はずだ).' },
      { id: 'n4g-p27-3', number: 133, prompt: '{田中|たなか}さんは {英語|えいご}の {先生|せんせい}だから、{英語|えいご}が {上手|じょうず}な（　）。', choices: [{ n: 1, text: 'はずだ' }, { n: 2, text: 'つもりだ' }, { n: 3, text: 'そうだ' }, { n: 4, text: 'ままだ' }], answer: 1, translationPt: 'O Tanaka é professor de inglês, então deve ser bom em inglês.', explanationPt: '〜はずだ = é de se esperar (dada a premissa).' },
      { id: 'n4g-p27-4', number: 134, prompt: '{新幹線|しんかんせん}は {速|はや}いから、３{時|じ}には {着|つ}く（　）です。', choices: [{ n: 1, text: 'はず' }, { n: 2, text: 'つもり' }, { n: 3, text: 'よう' }, { n: 4, text: 'まま' }], answer: 1, translationPt: 'O shinkansen é rápido, então deve chegar às 3 horas.', explanationPt: '〜はずです: previsão lógica fundamentada.' },
      { id: 'n4g-p27-5', number: 135, prompt: '７{時|じ}の {電車|でんしゃ}に {乗|の}ったから、もうすぐ {着|つ}く（　）。', choices: [{ n: 1, text: 'はずだ' }, { n: 2, text: 'つもりだ' }, { n: 3, text: 'ことにする' }, { n: 4, text: 'ようにする' }], answer: 1, translationPt: 'Peguei o trem das 7h, então já deve estar chegando.', explanationPt: '〜はずだ: dedução natural a partir de um fato.' },

      // —— 28. 〜はずがない ——
      { id: 'n4g-p28-1', number: 136, prompt: '{彼|かれ}が そんな ひどい ことを {言|い}う（　）。', choices: [{ n: 1, text: 'はずがない' }, { n: 2, text: 'はずだ' }, { n: 3, text: 'かもしれない' }, { n: 4, text: 'でしょう' }], answer: 1, translationPt: 'Não tem como ele dizer uma coisa tão cruel.', explanationPt: '〜はずがない = é impossível/improvável (negação lógica forte).' },
      { id: 'n4g-p28-2', number: 137, prompt: 'こんなに {簡単|かんたん}な {問題|もんだい}、まちがえる（　）。', choices: [{ n: 1, text: 'はずがない' }, { n: 2, text: 'はずだ' }, { n: 3, text: 'そうだ' }, { n: 4, text: 'ようだ' }], answer: 1, translationPt: 'Não tem como eu errar uma questão tão fácil.', explanationPt: '〜はずがない: nega que algo seja possível.' },
      { id: 'n4g-p28-3', number: 138, prompt: 'まじめな {彼女|かのじょ}が うそを つく（　）。', choices: [{ n: 1, text: 'はずがない' }, { n: 2, text: 'はずだ' }, { n: 3, text: 'つもりだ' }, { n: 4, text: 'だろう' }], answer: 1, translationPt: 'Não tem como ela, que é tão séria, mentir.', explanationPt: '〜はずがない = impossível (dado o caráter dela).' },
      { id: 'n4g-p28-4', number: 139, prompt: '{昼|ひる}{間|ま}に {星|ほし}が {見|み}える（　）。', choices: [{ n: 1, text: 'はずがない' }, { n: 2, text: 'はずだ' }, { n: 3, text: 'ようだ' }, { n: 4, text: 'かもしれない' }], answer: 1, translationPt: 'Não há como ver estrelas em pleno dia.', explanationPt: '〜はずがない: impossibilidade lógica.' },
      { id: 'n4g-p28-5', number: 140, prompt: '{三日前|みっかまえ}に {買|か}った ぎゅうにゅうが もう {悪|わる}くなる（　）。', choices: [{ n: 1, text: 'はずがない' }, { n: 2, text: 'はずだ' }, { n: 3, text: 'そうだ' }, { n: 4, text: 'でしょう' }], answer: 1, translationPt: 'Não tem como o leite que comprei há 3 dias já ter estragado.', explanationPt: '〜はずがない nega a possibilidade com base no raciocínio.' },
    ],
  },
  {
    id: 'n4g-t5',
    title: 'もんだい５',
    subtitlePt: '5. Propósito e mudança (〜ために・〜ように・〜ようにする・〜ようになる・〜ようと思う)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 29. 〜ために ——
      { id: 'n4g-p29-1', number: 141, prompt: '{健康|けんこう}の（　）、{毎日|まいにち} {歩|ある}いています。', choices: [{ n: 1, text: 'ために' }, { n: 2, text: 'ように' }, { n: 3, text: 'そうに' }, { n: 4, text: 'ような' }], answer: 1, translationPt: 'Caminho todo dia pela saúde.', explanationPt: '名詞+の+ために = com o propósito de (a saúde).' },
      { id: 'n4g-p29-2', number: 142, prompt: '{日本語|にほんご}を {勉強|べんきょう}する（　）、{日本|にほん}に {来|き}ました。', choices: [{ n: 1, text: 'ために' }, { n: 2, text: 'ように' }, { n: 3, text: 'ところ' }, { n: 4, text: 'ばかり' }], answer: 1, translationPt: 'Vim ao Japão para estudar japonês.', explanationPt: '動詞(辞書形)+ために = propósito (mesmo sujeito, verbo volitivo).' },
      { id: 'n4g-p29-3', number: 143, prompt: '{車|くるま}を {買|か}う（　）、お{金|かね}を ためています。', choices: [{ n: 1, text: 'ために' }, { n: 2, text: 'ように' }, { n: 3, text: 'のに' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Estou juntando dinheiro para comprar um carro.', explanationPt: '〜ために = objetivo da ação (juntar dinheiro com esse fim).' },
      { id: 'n4g-p29-4', number: 144, prompt: '{家族|かぞく}の（　）、いっしょうけんめい {働|はたら}きます。', choices: [{ n: 1, text: 'ために' }, { n: 2, text: 'ように' }, { n: 3, text: 'みたいに' }, { n: 4, text: 'そうに' }], answer: 1, translationPt: 'Trabalho com todas as forças pela minha família.', explanationPt: '名詞+の+ために = em benefício de / para (a família).' },
      { id: 'n4g-p29-5', number: 145, prompt: '{日本|にほん}の {文化|ぶんか}を {学|まな}ぶ（　）、{京都|きょうと}に {行|い}った。', choices: [{ n: 1, text: 'ために' }, { n: 2, text: 'ように' }, { n: 3, text: 'ところ' }, { n: 4, text: 'ばかり' }], answer: 1, translationPt: 'Fui a Kyoto para aprender sobre a cultura japonesa.', explanationPt: '動詞(辞書形)+ために = propósito com verbo volitivo (学ぶ).' },

      // —— 30. 〜ように ——
      { id: 'n4g-p30-1', number: 146, prompt: 'よく {見|み}える（　）、{前|まえ}に {座|すわ}った。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ために' }, { n: 3, text: 'ような' }, { n: 4, text: 'ようと' }], answer: 1, translationPt: 'Sentei na frente para conseguir enxergar bem.', explanationPt: '〜ように com verbo potencial (見える): para que eu consiga ver.' },
      { id: 'n4g-p30-2', number: 147, prompt: '{忘|わす}れない（　）、メモを した。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ために' }, { n: 3, text: 'ような' }, { n: 4, text: 'ようと' }], answer: 1, translationPt: 'Anotei para não esquecer.', explanationPt: '〜ように com forma negativa (忘れない): para que não aconteça.' },
      { id: 'n4g-p30-3', number: 148, prompt: '{子|こ}どもでも {読|よ}める（　）、ひらがなで {書|か}いた。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ために' }, { n: 3, text: 'みたいに' }, { n: 4, text: 'そうに' }], answer: 1, translationPt: 'Escrevi em hiragana para que até crianças consigam ler.', explanationPt: '〜ように (potencial 読める) indica o resultado pretendido.' },
      { id: 'n4g-p30-4', number: 149, prompt: '{風邪|かぜ}が {早|はや}く {治|なお}る（　）、くすりを {飲|の}んだ。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ために' }, { n: 3, text: 'ような' }, { n: 4, text: 'ようで' }], answer: 1, translationPt: 'Tomei remédio para que o resfriado sare logo.', explanationPt: '〜ように com verbo não volitivo (治る): para que algo ocorra.' },
      { id: 'n4g-p30-5', number: 150, prompt: '{後|うし}ろの {人|ひと}にも {聞|き}こえる（　）、{大|おお}きな {声|こえ}で {話|はな}した。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ために' }, { n: 3, text: 'みたいに' }, { n: 4, text: 'ようと' }], answer: 1, translationPt: 'Falei alto para que as pessoas de trás também ouçam.', explanationPt: '〜ように com potencial 聞こえる: para que possam ouvir.' },

      // —— 31. 〜ようにする ——
      { id: 'n4g-p31-1', number: 151, prompt: '{毎日|まいにち} {野菜|やさい}を {食|た}べる（　）しています。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ことに' }, { n: 3, text: 'ために' }, { n: 4, text: 'ような' }], answer: 1, translationPt: 'Procuro comer verduras todo dia.', explanationPt: '〜ようにする = esforçar-se / cuidar para fazer algo regularmente.' },
      { id: 'n4g-p31-2', number: 152, prompt: '{健康|けんこう}の ために、エレベーターを {使|つか}わない（　）しています。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ことに' }, { n: 3, text: 'ために' }, { n: 4, text: 'そうに' }], answer: 1, translationPt: 'Pela saúde, procuro não usar o elevador.', explanationPt: '〜ない+ようにする = esforçar-se para NÃO fazer algo.' },
      { id: 'n4g-p31-3', number: 153, prompt: 'これからは {遅刻|ちこく}しない（　）します。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ことに' }, { n: 3, text: 'ような' }, { n: 4, text: 'ために' }], answer: 1, translationPt: 'De agora em diante vou me esforçar para não me atrasar.', explanationPt: '〜ようにする: tentar mudar/manter um comportamento.' },
      { id: 'n4g-p31-4', number: 154, prompt: '{毎朝|まいあさ} {早|はや}く {起|お}きる（　）しています。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ことに' }, { n: 3, text: 'ために' }, { n: 4, text: 'みたいに' }], answer: 1, translationPt: 'Procuro acordar cedo toda manhã.', explanationPt: '〜ようにしている = manter o hábito de (acordar cedo).' },
      { id: 'n4g-p31-5', number: 155, prompt: '{水|みず}を たくさん {飲|の}む（　）しています。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ことに' }, { n: 3, text: 'ために' }, { n: 4, text: 'そうに' }], answer: 1, translationPt: 'Procuro beber bastante água.', explanationPt: '〜ようにする = empenhar-se para fazer algo (como hábito).' },

      // —— 32. 〜ようになる ——
      { id: 'n4g-p32-1', number: 156, prompt: '{勉強|べんきょう}して、{漢字|かんじ}が {読|よ}める（　）。', choices: [{ n: 1, text: 'ようになった' }, { n: 2, text: 'ようにした' }, { n: 3, text: 'ことにした' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Estudei e passei a conseguir ler kanji.', explanationPt: '〜ようになる com potencial = passar a conseguir (mudança).' },
      { id: 'n4g-p32-2', number: 157, prompt: '{最近|さいきん}、{毎朝|まいあさ} {早|はや}く {起|お}きる（　）。', choices: [{ n: 1, text: 'ようになった' }, { n: 2, text: 'ことにする' }, { n: 3, text: 'ようにする' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Ultimamente passei a acordar cedo toda manhã.', explanationPt: '〜ようになる = mudança de hábito/estado que se consolidou.' },
      { id: 'n4g-p32-3', number: 158, prompt: '{練習|れんしゅう}して、{自転車|じてんしゃ}に {乗|の}れる（　）。', choices: [{ n: 1, text: 'ようになった' }, { n: 2, text: 'ようにした' }, { n: 3, text: 'ことになった' }, { n: 4, text: 'ばかりだ' }], answer: 1, translationPt: 'Treinei e passei a conseguir andar de bicicleta.', explanationPt: '〜ようになる: aquisição de uma capacidade (乗れる→乗れるようになった).' },
      { id: 'n4g-p32-4', number: 159, prompt: '{日本|にほん}に {来|き}てから、なっとうが {食|た}べられる（　）。', choices: [{ n: 1, text: 'ようになった' }, { n: 2, text: 'ようにした' }, { n: 3, text: 'ことにした' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Depois que vim ao Japão, passei a conseguir comer natto.', explanationPt: '〜ようになる indica mudança (antes não conseguia, agora sim).' },
      { id: 'n4g-p32-5', number: 160, prompt: 'むすこは {野菜|やさい}を {食|た}べる（　）。{前|まえ}は きらいだった。', choices: [{ n: 1, text: 'ようになった' }, { n: 2, text: 'ようにした' }, { n: 3, text: 'ことにした' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Meu filho passou a comer verduras. Antes ele odiava.', explanationPt: '〜ようになる: mudança de comportamento ao longo do tempo.' },

      // —— 33. 〜（よ）うと思う ——
      { id: 'n4g-p33-1', number: 161, prompt: '{週末|しゅうまつ}、{旅行|りょこう}（　）と {思|おも}っています。', choices: [{ n: 1, text: 'しよう' }, { n: 2, text: 'する' }, { n: 3, text: 'したい' }, { n: 4, text: 'すれば' }], answer: 1, translationPt: 'Estou pensando em viajar no fim de semana.', explanationPt: '意向形+と思う (しようと思う) = pretender / estar pensando em fazer.' },
      { id: 'n4g-p33-2', number: 162, prompt: '{来年|らいねん}、Ｎ３を {受|う}け（　）と {思|おも}っています。', choices: [{ n: 1, text: 'よう' }, { n: 2, text: 'る' }, { n: 3, text: 'たい' }, { n: 4, text: 'れば' }], answer: 1, translationPt: 'Pretendo prestar o N3 ano que vem.', explanationPt: '意向形 受けよう+と思う = ter a intenção de.' },
      { id: 'n4g-p33-3', number: 163, prompt: 'これから まいにち {運動|うんどう}（　）と {思|おも}う。', choices: [{ n: 1, text: 'しよう' }, { n: 2, text: 'する' }, { n: 3, text: 'したい' }, { n: 4, text: 'すると' }], answer: 1, translationPt: 'Pretendo me exercitar todo dia daqui pra frente.', explanationPt: '〜（よ）うと思う = decisão/intenção do falante.' },
      { id: 'n4g-p33-4', number: 164, prompt: 'なつやすみに {国|くに}に {帰|かえ}ろう（　）{思|おも}っています。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'に' }, { n: 3, text: 'で' }, { n: 4, text: 'が' }], answer: 1, translationPt: 'Estou pensando em voltar para o meu país nas férias de verão.', explanationPt: 'A intenção (帰ろう) liga-se a 思う pela partícula と.' },
      { id: 'n4g-p33-5', number: 165, prompt: '{新|あたら}しい パソコンを {買|か}（　）と {思|おも}っている。', choices: [{ n: 1, text: 'おう' }, { n: 2, text: 'う' }, { n: 3, text: 'いたい' }, { n: 4, text: 'えば' }], answer: 1, translationPt: 'Estou pensando em comprar um computador novo.', explanationPt: '意向形 買おう+と思う = pretender comprar.' },
    ],
  },
  // —— próximos temas (6..20) serão acrescentados aqui ——
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
