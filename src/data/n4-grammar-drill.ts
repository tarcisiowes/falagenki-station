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
  {
    title: '6. Conectores e conjunções',
    bodyPt:
      'Ligações entre frases:\n\n- **〜から**: porque (razão subjetiva); aceita pedido/volição depois. 寒いから閉めて.\n- **〜ので**: porque (mais suave/objetivo, educado). Substantivo/na-adj + な + ので: 日曜日なので.\n- **〜のに**: apesar de (resultado contrário, frustração). 勉強したのに落ちた. Substantivo/na-adj + な + のに.\n- **〜ても／でも**: mesmo que. 降っても行く; 高くても; 日曜日でも.\n- **〜が／けど**: mas (contraste). 安いが、おいしくない.\n- **〜ながら**: enquanto (duas ações do mesmo sujeito). 聞きながら勉強する.\n- **〜あいだに**: durante o período em que (faz algo num ponto; sujeitos podem diferir). 寝ているあいだに.',
  },
  {
    title: '7. Nominalização e modificação de substantivos',
    bodyPt:
      'Transformar frases em substantivos e modificar nomes:\n\n- **〜の／こと**: nominalizador. 話すのは難しい; 趣味は読むこと. Com percepção (見る・聞く) use の: 歌うのを聞いた.\n- **普通形+名詞**: oração relativa em forma plana. 昨日買った本; 歌っている人. O sujeito interno usa が.\n- **〜という**: N chamado X / o fato de que. 「さくら」という店; 来ないということ.\n- **〜かどうか**: se … ou não (pergunta sim/não embutida). 来るかどうか分からない. Substantivo/na-adj sem だ: 必要かどうか.',
  },
  {
    title: '8. Dar e receber (あげる・くれる・もらう)',
    bodyPt:
      'O sistema depende da direção do favor:\n\n- **あげる**: eu (ou meu grupo) dou a outro. 友だちにあげた.\n- **くれる**: outro dá a mim (ou meu grupo). 友だちがくれた.\n- **もらう**: eu recebo de outro (doador com に/から). 友だちにもらった.\n- **Educado**: いただく = humilde de もらう (先生にいただく); くださる = honorífico de くれる (先生がくださる). Com て: 〜ていただく / 〜てくださる.',
  },
  {
    title: '9. Comparação',
    bodyPt:
      'Comparar e indicar o máximo:\n\n- **〜より**: do que (marca o padrão). 電車はバスより速い.\n- **〜ほうが**: o lado … / prefiro; 〜たほうがいい (conselho). 電車のほうが速い; 休んだほうがいい.\n- **〜ほど〜ない**: não tão … quanto. 今日は昨日ほど寒くない.\n- **〜の中で〜がいちばん**: o mais … (superlativo). クラスで彼がいちばん背が高い.',
  },
  {
    title: '10. Experiência e listagem',
    bodyPt:
      '- **〜たことがある**: já fez alguma vez (experiência). 日本に行ったことがある; negativo たことがない.\n- **〜たり〜たりする**: fazer coisas como ~ e ~ (lista não exaustiva). 見たり、読んだりする.\n- **〜とか**: tipo / ou (exemplos casuais). 映画とか見る.',
  },
  {
    title: '11. Obrigação, permissão e proibição',
    bodyPt:
      'Obrigação, dispensa e pedido negativo (base: forma ない):\n\n- **〜なければならない / 〜なくてはいけない / 〜ないといけない**: ter que (as três = obrigação). 出さなければならない.\n- **〜なくてもいい**: não precisa. 来なくてもいい.\n- **〜ないでください**: por favor, não faça. 撮らないでください.\n- **〜ないで**: sem fazer (modo). 食べないで行った.\n- **〜なくて**: causa negativa (por não…). お金がなくて買えなかった.',
  },
  {
    title: '12. Grau, tendência e continuidade',
    bodyPt:
      '- **〜がる**: (3ª pessoa) mostra sinais de um sentimento. ほしい→ほしがる; 寒い→寒がる.\n- **〜たがる**: (3ª pessoa) quer fazer. 遊びたがる; negativo 話したがらない.\n- **〜続ける**: continuar a fazer. 走り続ける; 降り続ける.',
  },
  {
    title: '13. Explicação e conselho',
    bodyPt:
      '- **〜んです／のです**: dar explicação/contexto. 頭が痛いんです; どうしたんですか.\n- **〜の？**: pergunta casual (busca explicação). もう食べたの？ Substantivo/na-adj + な + の.\n- **〜ないほうがいい**: é melhor não fazer. 吸わないほうがいい.\n- **〜たらどうですか**: que tal ~? (sugestão). 休んだらどうですか.',
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
  {
    id: 'n4g-t6',
    title: 'もんだい６',
    subtitlePt: '6. Conectores (〜から・〜ので・〜のに・〜ても・〜が・〜ながら・〜あいだに)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 34. 〜から ——
      { id: 'n4g-p34-1', number: 166, prompt: '{時間|じかん}が ない（　）、{急|いそ}ごう。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Como não temos tempo, vamos nos apressar.', explanationPt: '〜から = porque (razão); aceita volição depois (急ごう).' },
      { id: 'n4g-p34-2', number: 167, prompt: '{寒|さむ}い（　）、{窓|まど}を {閉|し}めて ください。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'たり' }], answer: 1, translationPt: 'Como está frio, feche a janela, por favor.', explanationPt: '〜から + pedido (ください): apresenta a razão.' },
      { id: 'n4g-p34-3', number: 168, prompt: 'もう {遅|おそ}い（　）、{帰|かえ}ります。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Já está tarde, então vou para casa.', explanationPt: '〜から = motivo da decisão.' },
      { id: 'n4g-p34-4', number: 169, prompt: 'あぶない（　）、さわらないで ください。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'É perigoso, então não toque.', explanationPt: '〜から explica o porquê do pedido.' },
      { id: 'n4g-p34-5', number: 170, prompt: 'テストが ある（　）、{今夜|こんや}は {勉強|べんきょう}する。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Tem prova, então hoje à noite vou estudar.', explanationPt: '〜から = razão (subjetiva) para a ação.' },

      // —— 35. 〜ので ——
      { id: 'n4g-p35-1', number: 171, prompt: '{電車|でんしゃ}が {遅|おく}れた（　）、{遅刻|ちこく}しました。', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Cheguei atrasado porque o trem atrasou.', explanationPt: '〜ので = porque (tom mais suave/objetivo, comum em explicações educadas).' },
      { id: 'n4g-p35-2', number: 172, prompt: '{今日|きょう}は {日曜日|にちようび}（　）、{店|みせ}は {休|やす}みです。', choices: [{ n: 1, text: 'なので' }, { n: 2, text: 'だので' }, { n: 3, text: 'のので' }, { n: 4, text: 'でので' }], answer: 1, translationPt: 'Como hoje é domingo, a loja está fechada.', explanationPt: 'Substantivo + な + ので: 日曜日なので.' },
      { id: 'n4g-p35-3', number: 173, prompt: '{頭|あたま}が {痛|いた}い（　）、{先|さき}に {帰|かえ}っても いいですか。', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'たり' }], answer: 1, translationPt: 'Estou com dor de cabeça, posso ir embora antes?', explanationPt: '〜ので suaviza o pedido (motivo apresentado de forma educada).' },
      { id: 'n4g-p35-4', number: 174, prompt: 'ここは {静|しず}か（　）、{勉強|べんきょう}しやすいです。', choices: [{ n: 1, text: 'なので' }, { n: 2, text: 'だので' }, { n: 3, text: 'のので' }, { n: 4, text: 'でので' }], answer: 1, translationPt: 'Aqui é silencioso, então é fácil estudar.', explanationPt: 'na-adjetivo + な + ので: 静かなので.' },
      { id: 'n4g-p35-5', number: 175, prompt: '{道|みち}が こんでいた（　）、{時間|じかん}が かかりました。', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Como a rua estava congestionada, demorou.', explanationPt: '〜ので = causa apresentada de forma objetiva.' },

      // —— 36. 〜のに ——
      { id: 'n4g-p36-1', number: 176, prompt: 'たくさん {勉強|べんきょう}した（　）、{試験|しけん}に {落|お}ちた。', choices: [{ n: 1, text: 'のに' }, { n: 2, text: 'ので' }, { n: 3, text: 'から' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Apesar de ter estudado muito, fui reprovado.', explanationPt: '〜のに = apesar de (resultado contrário ao esperado, com frustração).' },
      { id: 'n4g-p36-2', number: 177, prompt: '{約束|やくそく}した（　）、{彼|かれ}は {来|こ}なかった。', choices: [{ n: 1, text: 'のに' }, { n: 2, text: 'ので' }, { n: 3, text: 'から' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Apesar de ter prometido, ele não veio.', explanationPt: '〜のに contrasta a expectativa (prometeu) com o fato (não veio).' },
      { id: 'n4g-p36-3', number: 178, prompt: 'もう {春|はる}（　）、まだ {寒|さむ}い。', choices: [{ n: 1, text: 'なのに' }, { n: 2, text: 'なので' }, { n: 3, text: 'だから' }, { n: 4, text: 'でも' }], answer: 1, translationPt: 'Apesar de já ser primavera, ainda está frio.', explanationPt: 'Substantivo + な + のに: 春なのに.' },
      { id: 'n4g-p36-4', number: 179, prompt: 'この レストランは {安|やす}い（　）、おいしい。', choices: [{ n: 1, text: 'のに' }, { n: 2, text: 'ので' }, { n: 3, text: 'から' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Apesar de ser barato, este restaurante é gostoso.', explanationPt: '〜のに = contraste inesperado (barato, mas bom).' },
      { id: 'n4g-p36-5', number: 180, prompt: '{一生懸命|いっしょうけんめい} {作|つく}った（　）、だれも {食|た}べて くれなかった。', choices: [{ n: 1, text: 'のに' }, { n: 2, text: 'ので' }, { n: 3, text: 'から' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Apesar de eu ter feito com todo empenho, ninguém comeu.', explanationPt: '〜のに transmite frustração/decepção.' },

      // —— 37. 〜ても／でも ——
      { id: 'n4g-p37-1', number: 181, prompt: '{雨|あめ}が {降|ふ}っ（　）、ピクニックに {行|い}きます。', choices: [{ n: 1, text: 'ても' }, { n: 2, text: 'から' }, { n: 3, text: 'のに' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Mesmo que chova, vamos ao piquenique.', explanationPt: '〜ても = mesmo que (condição sem efeito no resultado). 降る→降っても.' },
      { id: 'n4g-p37-2', number: 182, prompt: 'この かばんは {高|たか}く（　）、{買|か}います。', choices: [{ n: 1, text: 'ても' }, { n: 2, text: 'から' }, { n: 3, text: 'のに' }, { n: 4, text: 'ので' }], answer: 1, translationPt: 'Mesmo que esta bolsa seja cara, eu compro.', explanationPt: 'Adjetivo-i + くても: 高い→高くても.' },
      { id: 'n4g-p37-3', number: 183, prompt: '{日曜日|にちようび}（　）、{働|はたら}きます。', choices: [{ n: 1, text: 'でも' }, { n: 2, text: 'だと' }, { n: 3, text: 'なら' }, { n: 4, text: 'から' }], answer: 1, translationPt: 'Mesmo que seja domingo, eu trabalho.', explanationPt: 'Substantivo + でも: 日曜日でも (mesmo sendo domingo).' },
      { id: 'n4g-p37-4', number: 184, prompt: 'いくら {呼|よ}ん（　）、へんじが ない。', choices: [{ n: 1, text: 'でも' }, { n: 2, text: 'から' }, { n: 3, text: 'のに' }, { n: 4, text: 'ば' }], answer: 1, translationPt: 'Por mais que eu chame, não há resposta.', explanationPt: 'いくら〜ても = por mais que. 呼ぶ→呼んでも.' },
      { id: 'n4g-p37-5', number: 185, prompt: '{薬|くすり}を {飲|の}ん（　）、よく ならない。', choices: [{ n: 1, text: 'でも' }, { n: 2, text: 'から' }, { n: 3, text: 'のに' }, { n: 4, text: 'ば' }], answer: 1, translationPt: 'Mesmo tomando remédio, não melhoro.', explanationPt: '〜ても = mesmo fazendo X, o resultado esperado não vem. 飲む→飲んでも.' },

      // —— 38. 〜が／けど ——
      { id: 'n4g-p38-1', number: 186, prompt: 'この {店|みせ}は {安|やす}い（　）、あまり おいしくない。', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'から' }, { n: 3, text: 'ので' }, { n: 4, text: 'ば' }], answer: 1, translationPt: 'Esta loja é barata, mas não é muito gostosa.', explanationPt: '〜が = mas (contraste neutro entre duas frases).' },
      { id: 'n4g-p38-2', number: 187, prompt: 'すみません（　）、{道|みち}を {教|おし}えて ください。', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'から' }, { n: 3, text: 'ので' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Com licença, mas pode me indicar o caminho?', explanationPt: 'すみませんが = uso de が como introdução educada.' },
      { id: 'n4g-p38-3', number: 188, prompt: '{日本語|にほんご}は {難|むずか}しい（　）、おもしろい。', choices: [{ n: 1, text: 'けど' }, { n: 2, text: 'から' }, { n: 3, text: 'ので' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Japonês é difícil, mas é interessante.', explanationPt: '〜けど = mas (versão coloquial de が).' },
      { id: 'n4g-p38-4', number: 189, prompt: '{電話|でんわ}した（　）、だれも {出|で}なかった。', choices: [{ n: 1, text: 'けど' }, { n: 2, text: 'から' }, { n: 3, text: 'ので' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Liguei, mas ninguém atendeu.', explanationPt: '〜けど liga duas frases em contraste.' },
      { id: 'n4g-p38-5', number: 190, prompt: '{映画|えいが}を {見|み}に {行|い}きたい（　）、{時間|じかん}が ない。', choices: [{ n: 1, text: 'けど' }, { n: 2, text: 'から' }, { n: 3, text: 'ので' }, { n: 4, text: 'ば' }], answer: 1, translationPt: 'Quero ir ver um filme, mas não tenho tempo.', explanationPt: '〜けど = mas (contraste simples).' },

      // —— 39. 〜ながら ——
      { id: 'n4g-p39-1', number: 191, prompt: '{音楽|おんがく}を {聞|き}き（　）{勉強|べんきょう}する。', choices: [{ n: 1, text: 'ながら' }, { n: 2, text: 'あいだに' }, { n: 3, text: 'たり' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Estudo enquanto ouço música.', explanationPt: '動詞ます形+ながら = duas ações ao mesmo tempo (mesmo sujeito).' },
      { id: 'n4g-p39-2', number: 192, prompt: '{歩|ある}き（　）、{話|はな}しましょう。', choices: [{ n: 1, text: 'ながら' }, { n: 2, text: 'あいだに' }, { n: 3, text: 'たり' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Vamos conversar enquanto andamos.', explanationPt: '〜ながら liga duas ações simultâneas.' },
      { id: 'n4g-p39-3', number: 193, prompt: 'テレビを {見|み}（　）、ごはんを {食|た}べる。', choices: [{ n: 1, text: 'ながら' }, { n: 2, text: 'あいだに' }, { n: 3, text: 'たり' }, { n: 4, text: 'から' }], answer: 1, translationPt: 'Como vendo TV.', explanationPt: '〜ながら: ação secundária + principal ao mesmo tempo.' },
      { id: 'n4g-p39-4', number: 194, prompt: 'コーヒーを {飲|の}み（　）、{新聞|しんぶん}を {読|よ}む。', choices: [{ n: 1, text: 'ながら' }, { n: 2, text: 'あいだに' }, { n: 3, text: 'たり' }, { n: 4, text: 'ので' }], answer: 1, translationPt: 'Leio o jornal enquanto tomo café.', explanationPt: '〜ながら = duas ações simultâneas do mesmo sujeito.' },
      { id: 'n4g-p39-5', number: 195, prompt: '{彼|かれ}は {働|はたら}き（　）、{大学|だいがく}に {通|かよ}っている。', choices: [{ n: 1, text: 'ながら' }, { n: 2, text: 'あいだに' }, { n: 3, text: 'たり' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Ele frequenta a faculdade enquanto trabalha.', explanationPt: '〜ながら também indica duas atividades mantidas em paralelo na vida.' },

      // —— 40. 〜あいだに ——
      { id: 'n4g-p40-1', number: 196, prompt: '{母|はは}が {寝|ね}ている（　）、{宿題|しゅくだい}を した。', choices: [{ n: 1, text: 'あいだに' }, { n: 2, text: 'ながら' }, { n: 3, text: 'たり' }, { n: 4, text: 'ので' }], answer: 1, translationPt: 'Fiz a lição enquanto minha mãe dormia.', explanationPt: '〜あいだに = durante o período em que (sujeitos diferentes), faço algo num ponto.' },
      { id: 'n4g-p40-2', number: 197, prompt: '{夏休|なつやす}みの（　）、{本|ほん}を ５さつ {読|よ}んだ。', choices: [{ n: 1, text: 'あいだに' }, { n: 2, text: 'ながら' }, { n: 3, text: 'うえに' }, { n: 4, text: 'ために' }], answer: 1, translationPt: 'Durante as férias de verão, li 5 livros.', explanationPt: '名詞+の+あいだに: 夏休みのあいだに.' },
      { id: 'n4g-p40-3', number: 198, prompt: '{留守|るす}の（　）、だれかが {来|き}たようだ。', choices: [{ n: 1, text: 'あいだに' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ために' }, { n: 4, text: 'ように' }], answer: 1, translationPt: 'Enquanto eu estava fora, parece que alguém veio.', explanationPt: '〜あいだに marca o intervalo em que o evento ocorre.' },
      { id: 'n4g-p40-4', number: 199, prompt: '{電車|でんしゃ}を {待|ま}っている（　）、{雨|あめ}が {降|ふ}ってきた。', choices: [{ n: 1, text: 'あいだに' }, { n: 2, text: 'ながら' }, { n: 3, text: 'たり' }, { n: 4, text: 'ので' }], answer: 1, translationPt: 'Enquanto esperava o trem, começou a chover.', explanationPt: '〜あいだに: um evento pontual dentro de um período.' },
      { id: 'n4g-p40-5', number: 200, prompt: '{赤|あか}ちゃんが ねている（　）、{家事|かじ}を します。', choices: [{ n: 1, text: 'あいだに' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ために' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Enquanto o bebê dorme, faço as tarefas de casa.', explanationPt: '〜あいだに = aproveitar o período (bebê dorme) para fazer algo.' },
    ],
  },
  {
    id: 'n4g-t7',
    title: 'もんだい７',
    subtitlePt: '7. Nominalização e modificação (〜の・こと・普通形+名詞・〜という・〜かどうか)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 41. 〜の／こと ——
      { id: 'n4g-p41-1', number: 201, prompt: '{日本語|にほんご}を {話|はな}す（　）は {難|むずか}しい。', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'もの' }, { n: 3, text: 'とき' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Falar japonês é difícil.', explanationPt: '〜の nominaliza o verbo (話すの = o ato de falar).' },
      { id: 'n4g-p41-2', number: 202, prompt: '{私|わたし}の しゅみは {本|ほん}を {読|よ}む（　）です。', choices: [{ n: 1, text: 'こと' }, { n: 2, text: 'もの' }, { n: 3, text: 'とき' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Meu hobby é ler livros.', explanationPt: '趣味は〜こと: usa こと para definir uma atividade.' },
      { id: 'n4g-p41-3', number: 203, prompt: '{彼|かれ}が {歌|うた}う（　）を {聞|き}いた。', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'とき' }, { n: 3, text: 'もの' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Ouvi ele cantar.', explanationPt: 'Com verbos de percepção (聞く・見る), usa-se の: 歌うのを聞いた.' },
      { id: 'n4g-p41-4', number: 204, prompt: '{外国語|がいこくご}を {学|まな}ぶ（　）は {楽|たの}しい。', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'もの' }, { n: 3, text: 'とき' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'Aprender uma língua estrangeira é divertido.', explanationPt: '〜の (ou こと) nominaliza a ação para virar sujeito.' },
      { id: 'n4g-p41-5', number: 205, prompt: '{毎日|まいにち} {運動|うんどう}する（　）が {大切|たいせつ}です。', choices: [{ n: 1, text: 'こと' }, { n: 2, text: 'もの' }, { n: 3, text: 'とき' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Fazer exercício todo dia é importante.', explanationPt: '〜ことが大切 = é importante (fazer algo); こと para afirmações gerais.' },

      // —— 42. 普通形＋名詞 ——
      { id: 'n4g-p42-1', number: 206, prompt: '{昨日|きのう}（　）{本|ほん}は おもしろい。', choices: [{ n: 1, text: '{買|か}った' }, { n: 2, text: '{買|か}いました' }, { n: 3, text: '{買|か}って' }, { n: 4, text: '{買|か}う' }], answer: 1, translationPt: 'O livro que comprei ontem é interessante.', explanationPt: 'A oração que modifica 名詞 usa forma plana: 買った本.' },
      { id: 'n4g-p42-2', number: 207, prompt: 'あそこで（　）{人|ひと}は {姉|あね}です。', choices: [{ n: 1, text: '{歌|うた}っている' }, { n: 2, text: '{歌|うた}います' }, { n: 3, text: '{歌|うた}って' }, { n: 4, text: '{歌|うた}い' }], answer: 1, translationPt: 'A pessoa que está cantando ali é minha irmã.', explanationPt: 'Forma plana modifica 人: 歌っている人.' },
      { id: 'n4g-p42-3', number: 208, prompt: 'これは {母|はは}が（　）{料理|りょうり}です。', choices: [{ n: 1, text: '{作|つく}った' }, { n: 2, text: '{作|つく}りました' }, { n: 3, text: '{作|つく}って' }, { n: 4, text: '{作|つく}り' }], answer: 1, translationPt: 'Este é o prato que minha mãe fez.', explanationPt: '母が作った料理: oração relativa em forma plana (sujeito interno com が).' },
      { id: 'n4g-p42-4', number: 209, prompt: '{昨日|きのう} {私|わたし}が（　）{映画|えいが}は {悲|かな}しかった。', choices: [{ n: 1, text: '{見|み}た' }, { n: 2, text: '{見|み}ました' }, { n: 3, text: '{見|み}て' }, { n: 4, text: '{見|み}る' }], answer: 1, translationPt: 'O filme que vi ontem era triste.', explanationPt: '私が見た映画: modificação com forma plana no passado.' },
      { id: 'n4g-p42-5', number: 210, prompt: '{日本語|にほんご}が（　）{人|ひと}を さがして います。', choices: [{ n: 1, text: '{話|はな}せる' }, { n: 2, text: '{話|はな}せます' }, { n: 3, text: '{話|はな}せて' }, { n: 4, text: '{話|はな}せ' }], answer: 1, translationPt: 'Estou procurando uma pessoa que saiba falar japonês.', explanationPt: '話せる人: potencial em forma plana modifica 人.' },

      // —— 43. 〜という ——
      { id: 'n4g-p43-1', number: 211, prompt: '「ホア」（　）{名前|なまえ}です。', choices: [{ n: 1, text: 'という' }, { n: 2, text: 'といって' }, { n: 3, text: 'と{思|おも}う' }, { n: 4, text: 'とは' }], answer: 1, translationPt: 'É um nome chamado “Hoa”.', explanationPt: 'XというN = N chamado/de nome X (「ホア」という名前).' },
      { id: 'n4g-p43-2', number: 212, prompt: '{彼|かれ}が {来|こ}ない（　）ことを {聞|き}いた。', choices: [{ n: 1, text: 'という' }, { n: 2, text: 'と{思|おも}う' }, { n: 3, text: 'と{言|い}って' }, { n: 4, text: 'について' }], answer: 1, translationPt: 'Ouvi (a notícia) de que ele não vem.', explanationPt: '〜ということ = o fato/conteúdo de que… (彼が来ないということ).' },
      { id: 'n4g-p43-3', number: 213, prompt: 'これは「{絵馬|えま}」（　）ものです。', choices: [{ n: 1, text: 'という' }, { n: 2, text: 'といって' }, { n: 3, text: 'と{思|おも}う' }, { n: 4, text: 'とは' }], answer: 1, translationPt: 'Isto é o que se chama “ema”.', explanationPt: '「絵馬」というもの = a coisa chamada ema (apresenta um termo novo).' },
      { id: 'n4g-p43-4', number: 214, prompt: '{駅|えき}の {近|ちか}くに「さくら」（　）{店|みせ}が あります。', choices: [{ n: 1, text: 'という' }, { n: 2, text: 'といって' }, { n: 3, text: 'と{思|おも}う' }, { n: 4, text: 'について' }], answer: 1, translationPt: 'Perto da estação tem uma loja chamada “Sakura”.', explanationPt: 'XというN: dá o nome próprio de algo (「さくら」という店).' },
      { id: 'n4g-p43-5', number: 215, prompt: '{日本|にほん}に「{富士山|ふじさん}」（　）{山|やま}が あります。', choices: [{ n: 1, text: 'という' }, { n: 2, text: 'と{思|おも}う' }, { n: 3, text: 'と{言|い}って' }, { n: 4, text: 'とは' }], answer: 1, translationPt: 'No Japão há uma montanha chamada “Fuji”.', explanationPt: '〜という apresenta o nome de algo que o ouvinte talvez não conheça.' },

      // —— 44. 〜かどうか ——
      { id: 'n4g-p44-1', number: 216, prompt: '{彼|かれ}が {来|く}る（　）{分|わ}からない。', choices: [{ n: 1, text: 'かどうか' }, { n: 2, text: 'かどう' }, { n: 3, text: 'どうか' }, { n: 4, text: 'ように' }], answer: 1, translationPt: 'Não sei se ele vem ou não.', explanationPt: '〜かどうか = se… ou não (pergunta sim/não embutida).' },
      { id: 'n4g-p44-2', number: 217, prompt: 'この {答|こた}えが {正|ただ}しい（　）、たしかめて ください。', choices: [{ n: 1, text: 'かどうか' }, { n: 2, text: 'かどう' }, { n: 3, text: 'だろうか' }, { n: 4, text: 'について' }], answer: 1, translationPt: 'Verifique se esta resposta está correta ou não.', explanationPt: '正しいかどうか確かめる = checar se está certo ou não.' },
      { id: 'n4g-p44-3', number: 218, prompt: 'あした {晴|は}れる（　）、わかりません。', choices: [{ n: 1, text: 'かどうか' }, { n: 2, text: 'かどう' }, { n: 3, text: 'ように' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Não sei se amanhã vai fazer sol.', explanationPt: '〜かどうかわからない = não saber se (acontece) ou não.' },
      { id: 'n4g-p44-4', number: 219, prompt: 'よやくが ひつよう（　）、{聞|き}いて みます。', choices: [{ n: 1, text: 'かどうか' }, { n: 2, text: 'なかどうか' }, { n: 3, text: 'だかどうか' }, { n: 4, text: 'のかどうか' }], answer: 1, translationPt: 'Vou perguntar se é necessário reservar ou não.', explanationPt: 'Substantivo/na-adjetivo + かどうか (sem だ): 必要かどうか.' },
      { id: 'n4g-p44-5', number: 220, prompt: '{彼女|かのじょ}が {元気|げんき}（　）、しんぱいです。', choices: [{ n: 1, text: 'かどうか' }, { n: 2, text: 'なかどうか' }, { n: 3, text: 'だかどうか' }, { n: 4, text: 'について' }], answer: 1, translationPt: 'Estou preocupado se ela está bem ou não.', explanationPt: '元気かどうか: na-adjetivo + かどうか.' },
    ],
  },
  {
    id: 'n4g-t8',
    title: 'もんだい８',
    subtitlePt: '8. Dar e receber (あげる・くれる・もらう・いただく・くださる)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 45. あげる ——
      { id: 'n4g-p45-1', number: 221, prompt: '{私|わたし}は {友|とも}だちに プレゼントを（　）。', choices: [{ n: 1, text: 'あげた' }, { n: 2, text: 'くれた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'された' }], answer: 1, translationPt: 'Dei um presente para meu amigo.', explanationPt: 'あげる = eu dou a outra pessoa (私→友だち).' },
      { id: 'n4g-p45-2', number: 222, prompt: '{妹|いもうと}に {古|ふる}い {本|ほん}を（　）。', choices: [{ n: 1, text: 'あげる' }, { n: 2, text: 'くれる' }, { n: 3, text: 'もらう' }, { n: 4, text: 'させる' }], answer: 1, translationPt: 'Vou dar um livro velho para minha irmã.', explanationPt: 'あげる: direção de mim para o outro (に marca quem recebe).' },
      { id: 'n4g-p45-3', number: 223, prompt: '{母|はは}の {日|ひ}に {花|はな}を（　）つもりだ。', choices: [{ n: 1, text: 'あげる' }, { n: 2, text: 'くれる' }, { n: 3, text: 'もらう' }, { n: 4, text: 'いる' }], answer: 1, translationPt: 'Pretendo dar flores no Dia das Mães.', explanationPt: 'あげる = oferecer/dar algo a alguém.' },
      { id: 'n4g-p45-4', number: 224, prompt: '{田中|たなか}さんは {山田|やまだ}さんに {本|ほん}を（　）。', choices: [{ n: 1, text: 'あげた' }, { n: 2, text: 'くれた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'された' }], answer: 1, translationPt: 'O Tanaka deu um livro para o Yamada.', explanationPt: 'Entre terceiros, do ponto de vista de quem dá: あげる (田中→山田).' },
      { id: 'n4g-p45-5', number: 225, prompt: '{私|わたし}は {犬|いぬ}に えさを（　）。', choices: [{ n: 1, text: 'あげる' }, { n: 2, text: 'くれる' }, { n: 3, text: 'もらう' }, { n: 4, text: 'する' }], answer: 1, translationPt: 'Dou comida ao cachorro.', explanationPt: 'あげる para dar a alguém/algo fora de mim.' },

      // —— 46. くれる ——
      { id: 'n4g-p46-1', number: 226, prompt: '{友|とも}だちが {私|わたし}に プレゼントを（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'された' }], answer: 1, translationPt: 'Meu amigo me deu um presente.', explanationPt: 'くれる = o outro dá para mim (友だち→私).' },
      { id: 'n4g-p46-2', number: 227, prompt: '{父|ちち}が {時計|とけい}を（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'させた' }], answer: 1, translationPt: 'Meu pai me deu um relógio.', explanationPt: 'くれる: alguém dá a mim (sem precisar dizer 私に).' },
      { id: 'n4g-p46-3', number: 228, prompt: '{先生|せんせい}が {妹|いもうと}に {本|ほん}を（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'された' }], answer: 1, translationPt: 'O professor deu um livro para a minha irmã.', explanationPt: 'くれる também serve para dar a alguém do meu grupo (妹).' },
      { id: 'n4g-p46-4', number: 229, prompt: 'だれが あなたに これを（　）か。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'した' }], answer: 1, translationPt: 'Quem te deu isto?', explanationPt: 'くれる: foco em quem deu algo a você/mim.' },
      { id: 'n4g-p46-5', number: 230, prompt: '{祖母|そぼ}が おこづかいを（　）。', choices: [{ n: 1, text: 'くれた' }, { n: 2, text: 'あげた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'させた' }], answer: 1, translationPt: 'Minha avó me deu uma mesada.', explanationPt: 'くれる = doação na direção de mim/meu grupo.' },

      // —— 47. もらう ——
      { id: 'n4g-p47-1', number: 231, prompt: '{私|わたし}は {友|とも}だちに プレゼントを（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'された' }], answer: 1, translationPt: 'Recebi um presente do meu amigo.', explanationPt: 'もらう = eu recebo (友だちに/から もらう).' },
      { id: 'n4g-p47-2', number: 232, prompt: '{先生|せんせい}（　）アドバイスを もらった。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'を' }, { n: 3, text: 'へ' }, { n: 4, text: 'で' }], answer: 1, translationPt: 'Recebi um conselho do professor.', explanationPt: 'もらう: o doador leva に ou から (先生から もらった).' },
      { id: 'n4g-p47-3', number: 233, prompt: 'たんじょうびに {何|なに}を（　）か。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'した' }], answer: 1, translationPt: 'O que você ganhou no aniversário?', explanationPt: 'もらう = receber algo (de alguém).' },
      { id: 'n4g-p47-4', number: 234, prompt: '{兄|あに}に {古|ふる}い パソコンを（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'された' }], answer: 1, translationPt: 'Ganhei um computador velho do meu irmão.', explanationPt: 'もらう: eu recebo do irmão (兄に もらった).' },
      { id: 'n4g-p47-5', number: 235, prompt: '{店|みせ}の {人|ひと}に {地図|ちず}を（　）。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'あげた' }, { n: 3, text: 'くれた' }, { n: 4, text: 'した' }], answer: 1, translationPt: 'Recebi um mapa da pessoa da loja.', explanationPt: 'もらう = receber (店の人に もらった).' },

      // —— 48. いただく／くださる ——
      { id: 'n4g-p48-1', number: 236, prompt: '{先生|せんせい}に {本|ほん}を（　）。', choices: [{ n: 1, text: 'いただきました' }, { n: 2, text: 'くださいました' }, { n: 3, text: 'あげました' }, { n: 4, text: 'さしあげました' }], answer: 1, translationPt: 'Recebi um livro do professor (humilde).', explanationPt: 'いただく = forma humilde de もらう (receber de um superior).' },
      { id: 'n4g-p48-2', number: 237, prompt: '{先生|せんせい}が {本|ほん}を（　）。', choices: [{ n: 1, text: 'くださいました' }, { n: 2, text: 'いただきました' }, { n: 3, text: 'もらいました' }, { n: 4, text: 'あげました' }], answer: 1, translationPt: 'O professor me deu um livro (honorífico).', explanationPt: 'くださる = forma honorífica de くれる (superior dá a mim).' },
      { id: 'n4g-p48-3', number: 238, prompt: '{部長|ぶちょう}に おみやげを（　）。', choices: [{ n: 1, text: 'いただいた' }, { n: 2, text: 'くださった' }, { n: 3, text: 'あげた' }, { n: 4, text: 'させた' }], answer: 1, translationPt: 'Recebi uma lembrança do chefe (humilde).', explanationPt: 'いただく: eu recebo de alguém de posição superior.' },
      { id: 'n4g-p48-4', number: 239, prompt: '{社長|しゃちょう}が {手紙|てがみ}を（　）。', choices: [{ n: 1, text: 'くださった' }, { n: 2, text: 'いただいた' }, { n: 3, text: 'もらった' }, { n: 4, text: 'あげた' }], answer: 1, translationPt: 'O presidente da empresa me deu uma carta (honorífico).', explanationPt: 'くださる = honorífico de くれる.' },
      { id: 'n4g-p48-5', number: 240, prompt: '{先生|せんせい}に {日本語|にほんご}を {教|おし}えて（　）。', choices: [{ n: 1, text: 'いただいた' }, { n: 2, text: 'くださった' }, { n: 3, text: 'もらった' }, { n: 4, text: 'あげた' }], answer: 1, translationPt: 'Tive o professor me ensinando japonês (humilde).', explanationPt: '〜ていただく = forma humilde de 〜てもらう (先生に 教えていただいた).' },
    ],
  },
  {
    id: 'n4g-t9',
    title: 'もんだい９',
    subtitlePt: '9. Comparação (〜より・〜ほうが・〜ほど・〜がいちばん)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 49. 〜より ——
      { id: 'n4g-p49-1', number: 241, prompt: '{電車|でんしゃ}は バス（　）{速|はや}い。', choices: [{ n: 1, text: 'より' }, { n: 2, text: 'ほど' }, { n: 3, text: 'から' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'O trem é mais rápido que o ônibus.', explanationPt: 'AはB+より = A é mais … que B (より marca o termo de comparação).' },
      { id: 'n4g-p49-2', number: 242, prompt: '{今日|きょう}は {昨日|きのう}（　）{暑|あつ}い。', choices: [{ n: 1, text: 'より' }, { n: 2, text: 'ほど' }, { n: 3, text: 'から' }, { n: 4, text: 'しか' }], answer: 1, translationPt: 'Hoje está mais quente que ontem.', explanationPt: '〜より = do que (compara com ontem).' },
      { id: 'n4g-p49-3', number: 243, prompt: '{飛行機|ひこうき}は {船|ふね}（　）{高|たか}い。', choices: [{ n: 1, text: 'より' }, { n: 2, text: 'ほど' }, { n: 3, text: 'から' }, { n: 4, text: 'だけ' }], answer: 1, translationPt: 'O avião é mais caro que o navio.', explanationPt: '〜より indica o padrão inferior na comparação.' },
      { id: 'n4g-p49-4', number: 244, prompt: 'この {問題|もんだい}は {思|おも}った（　）{難|むずか}しい。', choices: [{ n: 1, text: 'より' }, { n: 2, text: 'ほど' }, { n: 3, text: 'から' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'Este problema é mais difícil do que eu pensava.', explanationPt: '思ったより = mais … do que se esperava.' },
      { id: 'n4g-p49-5', number: 245, prompt: '{弟|おとうと}は {私|わたし}（　）{背|せ}が {高|たか}い。', choices: [{ n: 1, text: 'より' }, { n: 2, text: 'ほど' }, { n: 3, text: 'から' }, { n: 4, text: 'しか' }], answer: 1, translationPt: 'Meu irmão é mais alto que eu.', explanationPt: '〜より compara a altura (eu = padrão).' },

      // —— 50. 〜ほうが ——
      { id: 'n4g-p50-1', number: 246, prompt: 'こっちの（　）いいと {思|おも}う。', choices: [{ n: 1, text: 'ほうが' }, { n: 2, text: 'よりが' }, { n: 3, text: 'ほどが' }, { n: 4, text: 'ためが' }], answer: 1, translationPt: 'Acho que este aqui é melhor.', explanationPt: '〜ほうがいい = este lado é melhor (escolha/preferência).' },
      { id: 'n4g-p50-2', number: 247, prompt: '{歩|ある}くより {電車|でんしゃ}の（　）{速|はや}い。', choices: [{ n: 1, text: 'ほうが' }, { n: 2, text: 'よりが' }, { n: 3, text: 'ほどが' }, { n: 4, text: 'だけが' }], answer: 1, translationPt: 'O trem é mais rápido do que ir a pé.', explanationPt: 'AよりBのほうが… = B é mais … que A.' },
      { id: 'n4g-p50-3', number: 248, prompt: '{疲|つか}れたなら、{休|やす}んだ（　）いいですよ。', choices: [{ n: 1, text: 'ほうが' }, { n: 2, text: 'よりが' }, { n: 3, text: 'ほどが' }, { n: 4, text: 'ことが' }], answer: 1, translationPt: 'Se está cansado, é melhor descansar.', explanationPt: '〜たほうがいい = conselho (é melhor fazer).' },
      { id: 'n4g-p50-4', number: 249, prompt: 'たばこは すわない（　）いい。', choices: [{ n: 1, text: 'ほうが' }, { n: 2, text: 'よりが' }, { n: 3, text: 'ほどが' }, { n: 4, text: 'ことが' }], answer: 1, translationPt: 'É melhor não fumar.', explanationPt: '〜ないほうがいい = é melhor não fazer.' },
      { id: 'n4g-p50-5', number: 250, prompt: '{肉|にく}より {魚|さかな}の（　）{好|す}きです。', choices: [{ n: 1, text: 'ほうが' }, { n: 2, text: 'よりが' }, { n: 3, text: 'ほどが' }, { n: 4, text: 'しか' }], answer: 1, translationPt: 'Gosto mais de peixe do que de carne.', explanationPt: 'AよりBのほうが好き = preferir B a A.' },

      // —— 51. 〜ほど ——
      { id: 'n4g-p51-1', number: 251, prompt: '{今日|きょう}は {昨日|きのう}（　）{寒|さむ}くない。', choices: [{ n: 1, text: 'ほど' }, { n: 2, text: 'より' }, { n: 3, text: 'ほうが' }, { n: 4, text: 'だけ' }], answer: 1, translationPt: 'Hoje não está tão frio quanto ontem.', explanationPt: 'BほどA+ない = não tão … quanto B (今日は昨日ほど寒くない).' },
      { id: 'n4g-p51-2', number: 252, prompt: '{思|おも}った（　）{難|むずか}しくなかった。', choices: [{ n: 1, text: 'ほど' }, { n: 2, text: 'より' }, { n: 3, text: 'ほうが' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'Não foi tão difícil quanto eu pensava.', explanationPt: '思ったほど〜ない = não tão … quanto se esperava.' },
      { id: 'n4g-p51-3', number: 253, prompt: 'この {町|まち}は {東京|とうきょう}（　）にぎやかでは ない。', choices: [{ n: 1, text: 'ほど' }, { n: 2, text: 'より' }, { n: 3, text: 'ほうが' }, { n: 4, text: 'しか' }], answer: 1, translationPt: 'Esta cidade não é tão movimentada quanto Tóquio.', explanationPt: '〜ほど〜ない compara mostrando que A fica abaixo de B.' },
      { id: 'n4g-p51-4', number: 254, prompt: '{私|わたし}は {兄|あに}（　）{背|せ}が {高|たか}くない。', choices: [{ n: 1, text: 'ほど' }, { n: 2, text: 'より' }, { n: 3, text: 'ほうが' }, { n: 4, text: 'だけ' }], answer: 1, translationPt: 'Não sou tão alto quanto meu irmão.', explanationPt: '兄ほど高くない = não tão alto quanto o irmão.' },
      { id: 'n4g-p51-5', number: 255, prompt: '{今年|ことし}の {夏|なつ}は {去年|きょねん}（　）{暑|あつ}くない。', choices: [{ n: 1, text: 'ほど' }, { n: 2, text: 'より' }, { n: 3, text: 'ほうが' }, { n: 4, text: 'まで' }], answer: 1, translationPt: 'O verão deste ano não está tão quente quanto o do ano passado.', explanationPt: '〜ほど〜ない = o grau de A não chega ao de B.' },

      // —— 52. 〜がいちばん ——
      { id: 'n4g-p52-1', number: 256, prompt: 'クラスの {中|なか}で {彼|かれ}が（　）{背|せ}が {高|たか}い。', choices: [{ n: 1, text: 'いちばん' }, { n: 2, text: 'もっと' }, { n: 3, text: 'より' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'Na turma, ele é o mais alto.', explanationPt: '〜の中で〜がいちばん = o superlativo (o mais …).' },
      { id: 'n4g-p52-2', number: 257, prompt: '{果物|くだもの}の {中|なか}で りんごが（　）{好|す}きだ。', choices: [{ n: 1, text: 'いちばん' }, { n: 2, text: 'もっと' }, { n: 3, text: 'より' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'Dentre as frutas, gosto mais de maçã.', explanationPt: '〜の中で〜がいちばん好き = gostar mais de … (entre um grupo).' },
      { id: 'n4g-p52-3', number: 258, prompt: '{一年|いちねん}で {二月|にがつ}が（　）{寒|さむ}い。', choices: [{ n: 1, text: 'いちばん' }, { n: 2, text: 'もっと' }, { n: 3, text: 'より' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'No ano, fevereiro é o mais frio.', explanationPt: '〜で〜がいちばん = o superlativo dentro de um período/conjunto.' },
      { id: 'n4g-p52-4', number: 259, prompt: 'スポーツの {中|なか}で サッカーが（　）おもしろい。', choices: [{ n: 1, text: 'いちばん' }, { n: 2, text: 'もっと' }, { n: 3, text: 'より' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'Entre os esportes, futebol é o mais interessante.', explanationPt: 'いちばん = número um / o mais … (superlativo).' },
      { id: 'n4g-p52-5', number: 260, prompt: 'この {店|みせ}で この ケーキが（　）{人気|にんき}が ある。', choices: [{ n: 1, text: 'いちばん' }, { n: 2, text: 'もっと' }, { n: 3, text: 'より' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'Nesta loja, este bolo é o mais popular.', explanationPt: '〜でいちばん = o mais … (aqui, o mais popular).' },
    ],
  },
  {
    id: 'n4g-t10',
    title: 'もんだい１０',
    subtitlePt: '10. Experiência e listagem (〜たことがある・〜たり〜たり・〜とか)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 53. 〜たことがある ——
      { id: 'n4g-p53-1', number: 261, prompt: '{私|わたし}は {日本|にほん}に {行|い}った（　）。', choices: [{ n: 1, text: 'ことがある' }, { n: 2, text: 'ことにする' }, { n: 3, text: 'ことになる' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Já fui ao Japão.', explanationPt: '〜たことがある = ter a experiência de já ter feito algo.' },
      { id: 'n4g-p53-2', number: 262, prompt: 'すしを {食|た}べた（　）。', choices: [{ n: 1, text: 'ことがない' }, { n: 2, text: 'ことにする' }, { n: 3, text: 'つもりがない' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Nunca comi sushi.', explanationPt: '〜たことがない = nunca fez (sem experiência).' },
      { id: 'n4g-p53-3', number: 263, prompt: '{富士山|ふじさん}に {登|のぼ}った（　）か。', choices: [{ n: 1, text: 'ことがあります' }, { n: 2, text: 'ことにします' }, { n: 3, text: 'ことになります' }, { n: 4, text: 'ところです' }], answer: 1, translationPt: 'Você já subiu o Monte Fuji?', explanationPt: '〜たことがありますか = pergunta sobre experiência.' },
      { id: 'n4g-p53-4', number: 264, prompt: '{有名|ゆうめい}な {歌手|かしゅ}に {会|あ}った（　）。', choices: [{ n: 1, text: 'ことがある' }, { n: 2, text: 'ことにする' }, { n: 3, text: 'ことになる' }, { n: 4, text: 'ものだ' }], answer: 1, translationPt: 'Já encontrei um cantor famoso.', explanationPt: '〜たことがある relata uma experiência marcante do passado.' },
      { id: 'n4g-p53-5', number: 265, prompt: 'かんじを {習|なら}った（　）が、もう わすれた。', choices: [{ n: 1, text: 'ことがある' }, { n: 2, text: 'ことにする' }, { n: 3, text: 'ことになる' }, { n: 4, text: 'ところだ' }], answer: 1, translationPt: 'Já estudei kanji uma vez, mas já esqueci.', explanationPt: '〜たことがある = experiência prévia (mesmo que esquecida).' },

      // —— 54. 〜たり〜たりする ——
      { id: 'n4g-p54-1', number: 266, prompt: '{週末|しゅうまつ}は {買|か}い{物|もの}を し（　）、{映画|えいが}を {見|み}たり する。', choices: [{ n: 1, text: 'たり' }, { n: 2, text: 'ても' }, { n: 3, text: 'ながら' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'No fim de semana faço compras, vejo filme, essas coisas.', explanationPt: '〜たり〜たりする = listar ações representativas (não exaustivo).' },
      { id: 'n4g-p54-2', number: 267, prompt: '{休|やす}みの {日|ひ}は {寝|ね}たり {本|ほん}を {読|よ}ん（　）した。', choices: [{ n: 1, text: 'だり' }, { n: 2, text: 'でも' }, { n: 3, text: 'ながら' }, { n: 4, text: 'だら' }], answer: 1, translationPt: 'No dia de folga, dormi, li, coisas assim.', explanationPt: '〜だり (após verbo em ん): 読む→読んだり.' },
      { id: 'n4g-p54-3', number: 268, prompt: 'パーティーで {歌|うた}っ（　）{踊|おど}ったり した。', choices: [{ n: 1, text: 'たり' }, { n: 2, text: 'ても' }, { n: 3, text: 'ながら' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Na festa, cantamos, dançamos, essas coisas.', explanationPt: '〜たり〜たりする: dá exemplos de várias ações.' },
      { id: 'n4g-p54-4', number: 269, prompt: '{休|やす}みは そうじを し（　）、せんたくを したり する。', choices: [{ n: 1, text: 'たり' }, { n: 2, text: 'ても' }, { n: 3, text: 'ながら' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'Na folga, faço faxina, lavo roupa, essas coisas.', explanationPt: '〜たり〜たりする lista atividades típicas.' },
      { id: 'n4g-p54-5', number: 270, prompt: '{子|こ}どもが {泣|な}い（　）{笑|わら}ったり して いる。', choices: [{ n: 1, text: 'たり' }, { n: 2, text: 'ても' }, { n: 3, text: 'ながら' }, { n: 4, text: 'たら' }], answer: 1, translationPt: 'A criança ora chora, ora ri.', explanationPt: '〜たり〜たりする também mostra ações alternadas.' },

      // —— 55. 〜とか ——
      { id: 'n4g-p55-1', number: 271, prompt: '{週末|しゅうまつ}は {映画|えいが}（　）{見|み}る。', choices: [{ n: 1, text: 'とか' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ばかり' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'No fim de semana vejo filme, essas coisas.', explanationPt: '〜とか = dar um exemplo de forma casual (filme, por exemplo).' },
      { id: 'n4g-p55-2', number: 272, prompt: 'お{茶|ちゃ}とか コーヒー（　）{飲|の}みたい。', choices: [{ n: 1, text: 'とか' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ばかり' }, { n: 4, text: 'しか' }], answer: 1, translationPt: 'Queria beber chá, café, sei lá.', explanationPt: 'AとかBとか = listar exemplos informalmente.' },
      { id: 'n4g-p55-3', number: 273, prompt: 'なつやすみは {海|うみ}とか {山|やま}（　）{行|い}きたい。', choices: [{ n: 1, text: 'とか' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ばかり' }, { n: 4, text: 'より' }], answer: 1, translationPt: 'Nas férias quero ir à praia, montanha, esse tipo de lugar.', explanationPt: '〜とか apresenta opções/exemplos casuais.' },
      { id: 'n4g-p55-4', number: 274, prompt: 'ひまな {時|とき}は ゲーム（　）する。', choices: [{ n: 1, text: 'とか' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ばかり' }, { n: 4, text: 'ほど' }], answer: 1, translationPt: 'Quando tenho tempo livre, jogo videogame, essas coisas.', explanationPt: '〜とか = exemplo informal de atividade.' },
      { id: 'n4g-p55-5', number: 275, prompt: '{朝|あさ}ごはんは パン（　）{食|た}べます。', choices: [{ n: 1, text: 'とか' }, { n: 2, text: 'ながら' }, { n: 3, text: 'ばかり' }, { n: 4, text: 'より' }], answer: 1, translationPt: 'No café da manhã como pão, essas coisas.', explanationPt: '〜とか suaviza, dando pão como um exemplo.' },
    ],
  },
  {
    id: 'n4g-t11',
    title: 'もんだい１１',
    subtitlePt: '11. Obrigação e proibição (〜なければならない・〜なくてはいけない・〜ないといけない・〜なくてもいい・〜ないでください・〜ないで・〜なくて)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 56. 〜なければならない ——
      { id: 'n4g-p56-1', number: 276, prompt: 'あしたまでに レポートを {出|だ}さ（　）。', choices: [{ n: 1, text: 'なければならない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないでください' }, { n: 4, text: 'なくて' }], answer: 1, translationPt: 'Tenho que entregar o relatório até amanhã.', explanationPt: '〜なければならない = obrigação (出す→出さなければならない).' },
      { id: 'n4g-p56-2', number: 277, prompt: '{薬|くすり}を {飲|の}ま（　）。', choices: [{ n: 1, text: 'なければなりません' }, { n: 2, text: 'なくてもいいです' }, { n: 3, text: 'ないでください' }, { n: 4, text: 'なくて' }], answer: 1, translationPt: 'Preciso tomar o remédio.', explanationPt: '〜なければなりません = ter que (forma polida).' },
      { id: 'n4g-p56-3', number: 278, prompt: '{毎日|まいにち} {学校|がっこう}に {行|い}か（　）。', choices: [{ n: 1, text: 'なければならない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないでください' }, { n: 4, text: 'なくて' }], answer: 1, translationPt: 'Tenho que ir à escola todo dia.', explanationPt: '〜なければならない: dever/necessidade.' },
      { id: 'n4g-p56-4', number: 279, prompt: '{約束|やくそく}を {守|まも}ら（　）。', choices: [{ n: 1, text: 'なければならない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないでください' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Tenho que cumprir a promessa.', explanationPt: '〜なければならない = obrigação necessária.' },
      { id: 'n4g-p56-5', number: 280, prompt: '{食|た}べる {前|まえ}に {手|て}を {洗|あら}わ（　）。', choices: [{ n: 1, text: 'なければなりません' }, { n: 2, text: 'なくてもいいです' }, { n: 3, text: 'ないでください' }, { n: 4, text: 'なくて' }], answer: 1, translationPt: 'Preciso lavar as mãos antes de comer.', explanationPt: '〜なければなりません = é necessário (lavar as mãos).' },

      // —— 57. 〜なくてはいけない ——
      { id: 'n4g-p57-1', number: 281, prompt: 'もう {行|い}か（　）。', choices: [{ n: 1, text: 'なくてはいけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Já tenho que ir.', explanationPt: '〜なくてはいけない = ter que fazer (行かなくてはいけない).' },
      { id: 'n4g-p57-2', number: 282, prompt: '{宿題|しゅくだい}を し（　）。', choices: [{ n: 1, text: 'なくてはいけません' }, { n: 2, text: 'なくてもいいです' }, { n: 3, text: 'てはいけません' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Preciso fazer a lição.', explanationPt: '〜なくてはいけません = obrigação (polido).' },
      { id: 'n4g-p57-3', number: 283, prompt: '{朝|あさ} {早|はや}く {起|お}き（　）。', choices: [{ n: 1, text: 'なくてはいけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Tenho que acordar cedo.', explanationPt: '〜なくてはいけない: necessidade.' },
      { id: 'n4g-p57-4', number: 284, prompt: '{熱|ねつ}が あるから、{病院|びょういん}に {行|い}か（　）。', choices: [{ n: 1, text: 'なくてはいけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Como estou com febre, tenho que ir ao hospital.', explanationPt: '〜なくてはいけない = é preciso (dada a situação).' },
      { id: 'n4g-p57-5', number: 285, prompt: 'ルールを {覚|おぼ}え（　）。', choices: [{ n: 1, text: 'なくてはいけません' }, { n: 2, text: 'なくてもいいです' }, { n: 3, text: 'てはいけません' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Preciso memorizar as regras.', explanationPt: '〜なくてはいけません: obrigação.' },

      // —— 58. 〜ないといけない ——
      { id: 'n4g-p58-1', number: 286, prompt: '{早|はや}く {寝|ね}（　）。', choices: [{ n: 1, text: 'ないといけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないで' }, { n: 4, text: 'てはいけない' }], answer: 1, translationPt: 'Tenho que dormir cedo.', explanationPt: '〜ないといけない = tem que (寝ないといけない).' },
      { id: 'n4g-p58-2', number: 287, prompt: '{予約|よやく}し（　）か。', choices: [{ n: 1, text: 'ないといけません' }, { n: 2, text: 'なくてもいいです' }, { n: 3, text: 'ないでください' }, { n: 4, text: 'てはいけません' }], answer: 1, translationPt: 'Preciso fazer reserva?', explanationPt: '〜ないといけませんか = pergunta se é necessário.' },
      { id: 'n4g-p58-3', number: 288, prompt: 'あしたは {早|はや}く {家|いえ}を {出|で}（　）。', choices: [{ n: 1, text: 'ないといけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないで' }, { n: 4, text: 'てはいけない' }], answer: 1, translationPt: 'Amanhã tenho que sair de casa cedo.', explanationPt: '〜ないといけない: necessidade.' },
      { id: 'n4g-p58-4', number: 289, prompt: '{野菜|やさい}も {食|た}べ（　）よ。', choices: [{ n: 1, text: 'ないといけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないで' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Você tem que comer verduras também, viu.', explanationPt: '〜ないといけない = é preciso (comer verduras).' },
      { id: 'n4g-p58-5', number: 290, prompt: 'へやを {出|で}る {時|とき}は {電気|でんき}を {消|け}さ（　）。', choices: [{ n: 1, text: 'ないといけない' }, { n: 2, text: 'なくてもいい' }, { n: 3, text: 'ないで' }, { n: 4, text: 'てはいけない' }], answer: 1, translationPt: 'Ao sair do quarto, tenho que apagar a luz.', explanationPt: '〜ないといけない: dever/necessidade.' },

      // —— 59. 〜なくてもいい ——
      { id: 'n4g-p59-1', number: 291, prompt: 'あしたは {来|こ}（　）です。', choices: [{ n: 1, text: 'なくてもいい' }, { n: 2, text: 'なければならない' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Amanhã você não precisa vir.', explanationPt: '〜なくてもいい = não precisa fazer (来なくてもいい).' },
      { id: 'n4g-p59-2', number: 292, prompt: '{急|いそ}が（　）よ。{時間|じかん}は たくさん ある。', choices: [{ n: 1, text: 'なくてもいい' }, { n: 2, text: 'なければならない' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Não precisa ter pressa. Tem tempo de sobra.', explanationPt: '〜なくてもいい: dispensa a ação.' },
      { id: 'n4g-p59-3', number: 293, prompt: '{全部|ぜんぶ} {食|た}べ（　）です。', choices: [{ n: 1, text: 'なくてもいい' }, { n: 2, text: 'なければならない' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Não precisa comer tudo.', explanationPt: '〜なくてもいい = não é obrigatório.' },
      { id: 'n4g-p59-4', number: 294, prompt: 'しゅくだいは {今日|きょう} {出|だ}さ（　）。', choices: [{ n: 1, text: 'なくてもいい' }, { n: 2, text: 'なければならない' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Não precisa entregar a lição hoje.', explanationPt: '〜なくてもいい: a ação é dispensável.' },
      { id: 'n4g-p59-5', number: 295, prompt: '{心配|しんぱい}し（　）よ。だいじょうぶだから。', choices: [{ n: 1, text: 'なくてもいい' }, { n: 2, text: 'なければならない' }, { n: 3, text: 'てはいけない' }, { n: 4, text: 'ないで' }], answer: 1, translationPt: 'Não precisa se preocupar. Está tudo bem.', explanationPt: '〜なくてもいい = não há necessidade.' },

      // —— 60. 〜ないでください ——
      { id: 'n4g-p60-1', number: 296, prompt: 'ここで {写真|しゃしん}を {撮|と}ら（　）。', choices: [{ n: 1, text: 'ないでください' }, { n: 2, text: 'てください' }, { n: 3, text: 'なくてください' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'Por favor, não tire fotos aqui.', explanationPt: '〜ないでください = pedido para NÃO fazer (撮らないでください).' },
      { id: 'n4g-p60-2', number: 297, prompt: '{心配|しんぱい}し（　）。', choices: [{ n: 1, text: 'ないでください' }, { n: 2, text: 'てください' }, { n: 3, text: 'なくてください' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'Por favor, não se preocupe.', explanationPt: '〜ないでください: pedido negativo educado.' },
      { id: 'n4g-p60-3', number: 298, prompt: 'しばふに {入|はい}ら（　）。', choices: [{ n: 1, text: 'ないでください' }, { n: 2, text: 'てください' }, { n: 3, text: 'なくてください' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'Por favor, não pise na grama.', explanationPt: '〜ないでください = peça para não fazer algo.' },
      { id: 'n4g-p60-4', number: 299, prompt: 'ここに {物|もの}を {置|お}か（　）。', choices: [{ n: 1, text: 'ないでください' }, { n: 2, text: 'てください' }, { n: 3, text: 'なくてください' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Por favor, não coloque coisas aqui.', explanationPt: '〜ないでください: proibição educada (pedido).' },
      { id: 'n4g-p60-5', number: 300, prompt: 'としょかんでは {大|おお}きな {声|こえ}を {出|だ}さ（　）。', choices: [{ n: 1, text: 'ないでください' }, { n: 2, text: 'てください' }, { n: 3, text: 'なくてください' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'Na biblioteca, por favor, não fale alto.', explanationPt: '〜ないでください = peça para a pessoa não fazer.' },

      // —— 61. 〜ないで ——
      { id: 'n4g-p61-1', number: 301, prompt: '{朝|あさ}ごはんを {食|た}べ（　）{学校|がっこう}に {行|い}った。', choices: [{ n: 1, text: 'ないで' }, { n: 2, text: 'なくて' }, { n: 3, text: 'ないと' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Fui à escola sem tomar café.', explanationPt: '〜ないで = fazer (B) sem fazer (A); modo da ação. 食べないで行った.' },
      { id: 'n4g-p61-2', number: 302, prompt: 'じしょを {使|つか}わ（　）{読|よ}んで みて。', choices: [{ n: 1, text: 'ないで' }, { n: 2, text: 'なくて' }, { n: 3, text: 'ないと' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Tente ler sem usar o dicionário.', explanationPt: '〜ないで indica o modo (sem usar dicionário).' },
      { id: 'n4g-p61-3', number: 303, prompt: '{昨日|きのう}は {寝|ね}（　）{勉強|べんきょう}した。', choices: [{ n: 1, text: 'ないで' }, { n: 2, text: 'なくて' }, { n: 3, text: 'ないと' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Ontem estudei sem dormir.', explanationPt: '〜ないで = sem fazer A, realizar B (寝ないで勉強した).' },
      { id: 'n4g-p61-4', number: 304, prompt: 'でんきを {消|け}さ（　）{出|で}かけた。', choices: [{ n: 1, text: 'ないで' }, { n: 2, text: 'なくて' }, { n: 3, text: 'ないと' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Saí sem apagar a luz.', explanationPt: '〜ないで: estado/modo em que a ação ocorre (sem apagar).' },
      { id: 'n4g-p61-5', number: 305, prompt: 'さとうを {入|い}れ（　）コーヒーを {飲|の}む。', choices: [{ n: 1, text: 'ないで' }, { n: 2, text: 'なくて' }, { n: 3, text: 'ないと' }, { n: 4, text: 'ながら' }], answer: 1, translationPt: 'Tomo café sem colocar açúcar.', explanationPt: '〜ないで = sem fazer A (sem pôr açúcar).' },

      // —— 62. 〜なくて ——
      { id: 'n4g-p62-1', number: 306, prompt: 'お{金|かね}が（　）、{買|か}えなかった。', choices: [{ n: 1, text: 'なくて' }, { n: 2, text: 'ないで' }, { n: 3, text: 'ないと' }, { n: 4, text: 'なくても' }], answer: 1, translationPt: 'Por não ter dinheiro, não pude comprar.', explanationPt: '〜なくて = causa negativa (não havia dinheiro, por isso…). ない→なくて.' },
      { id: 'n4g-p62-2', number: 307, prompt: 'バスが {来|こ}（　）、{遅刻|ちこく}した。', choices: [{ n: 1, text: 'なくて' }, { n: 2, text: 'ないで' }, { n: 3, text: 'ないと' }, { n: 4, text: 'なくても' }], answer: 1, translationPt: 'O ônibus não veio, e me atrasei.', explanationPt: '〜なくて liga uma causa negativa ao resultado (atrasei).' },
      { id: 'n4g-p62-3', number: 308, prompt: '{言葉|ことば}が {分|わ}から（　）、こまった。', choices: [{ n: 1, text: 'なくて' }, { n: 2, text: 'ないで' }, { n: 3, text: 'ないと' }, { n: 4, text: 'なくても' }], answer: 1, translationPt: 'Não entendi as palavras e fiquei sem saber o que fazer.', explanationPt: '〜なくて = por não (entender), aconteceu a dificuldade.' },
      { id: 'n4g-p62-4', number: 309, prompt: '{子|こ}どもが {帰|かえ}って {来|こ}（　）、しんぱいした。', choices: [{ n: 1, text: 'なくて' }, { n: 2, text: 'ないで' }, { n: 3, text: 'ないと' }, { n: 4, text: 'なくても' }], answer: 1, translationPt: 'A criança não voltava, e fiquei preocupado.', explanationPt: '〜なくて + emoção (preocupação): causa negativa.' },
      { id: 'n4g-p62-5', number: 310, prompt: '{宿題|しゅくだい}が {終|お}わら（　）、{寝|ね}られなかった。', choices: [{ n: 1, text: 'なくて' }, { n: 2, text: 'ないで' }, { n: 3, text: 'ないと' }, { n: 4, text: 'なくても' }], answer: 1, translationPt: 'A lição não terminava, e não consegui dormir.', explanationPt: '〜なくて = causa (não terminou) → consequência (não dormi).' },
    ],
  },
  {
    id: 'n4g-t12',
    title: 'もんだい１２',
    subtitlePt: '12. Grau e continuidade (〜がる・〜たがる・〜続ける)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 63. 〜がる ——
      { id: 'n4g-p63-1', number: 311, prompt: '{弟|おとうと}は {新|あたら}しい ゲームを ほし（　）いる。', choices: [{ n: 1, text: 'がって' }, { n: 2, text: 'そうで' }, { n: 3, text: 'すぎて' }, { n: 4, text: 'くて' }], answer: 1, translationPt: 'Meu irmão está querendo o jogo novo.', explanationPt: '〜がる para sentimento de 3ª pessoa: ほしい→ほしがる (ほしがっている).' },
      { id: 'n4g-p63-2', number: 312, prompt: '{子|こ}どもが {寒|さむ}（　）いる。', choices: [{ n: 1, text: 'がって' }, { n: 2, text: 'そうで' }, { n: 3, text: 'すぎて' }, { n: 4, text: 'くて' }], answer: 1, translationPt: 'A criança está com (cara de) frio.', explanationPt: '形容詞語幹+がる: 寒い→寒がる (mostra sinais de frio).' },
      { id: 'n4g-p63-3', number: 313, prompt: '{妹|いもうと}は あの {人形|にんぎょう}を ほし（　）いる。', choices: [{ n: 1, text: 'がって' }, { n: 2, text: 'そうで' }, { n: 3, text: 'すぎて' }, { n: 4, text: 'くて' }], answer: 1, translationPt: 'Minha irmã está querendo aquela boneca.', explanationPt: 'ほしい→ほしがる: desejo de outra pessoa.' },
      { id: 'n4g-p63-4', number: 314, prompt: 'みんなが {彼女|かのじょ}の {成功|せいこう}を うらやまし（　）いる。', choices: [{ n: 1, text: 'がって' }, { n: 2, text: 'そうで' }, { n: 3, text: 'すぎて' }, { n: 4, text: 'くて' }], answer: 1, translationPt: 'Todos estão com inveja do sucesso dela.', explanationPt: '〜がる expressa o sentimento aparente de terceiros.' },
      { id: 'n4g-p63-5', number: 315, prompt: '{犬|いぬ}が {水|みず}を {怖|こわ}（　）いる。', choices: [{ n: 1, text: 'がって' }, { n: 2, text: 'そうで' }, { n: 3, text: 'すぎて' }, { n: 4, text: 'くて' }], answer: 1, translationPt: 'O cachorro está com medo de água.', explanationPt: '怖い→怖がる: demonstra medo (terceiro).' },

      // —— 64. 〜たがる ——
      { id: 'n4g-p64-1', number: 316, prompt: '{子|こ}どもは {外|そと}で {遊|あそ}び（　）いる。', choices: [{ n: 1, text: 'たがって' }, { n: 2, text: 'たくて' }, { n: 3, text: 'たいで' }, { n: 4, text: 'そうで' }], answer: 1, translationPt: 'A criança está querendo brincar lá fora.', explanationPt: '動詞ます形+たがる: vontade de 3ª pessoa (遊びたがっている).' },
      { id: 'n4g-p64-2', number: 317, prompt: '{彼|かれ}は {何|なに}も {話|はな}し（　）ない。', choices: [{ n: 1, text: 'たがら' }, { n: 2, text: 'たく' }, { n: 3, text: 'たい' }, { n: 4, text: 'たがり' }], answer: 1, translationPt: 'Ele não quer falar nada.', explanationPt: '〜たがらない = (3ª pessoa) não quer fazer (話したがらない).' },
      { id: 'n4g-p64-3', number: 318, prompt: 'むすこは {薬|くすり}を {飲|の}み（　）ない。', choices: [{ n: 1, text: 'たがら' }, { n: 2, text: 'たく' }, { n: 3, text: 'たい' }, { n: 4, text: 'たがり' }], answer: 1, translationPt: 'Meu filho não quer tomar o remédio.', explanationPt: '〜たがらない: recusa/falta de vontade de terceiro.' },
      { id: 'n4g-p64-4', number: 319, prompt: '{妹|いもうと}は {新|あたら}しい {服|ふく}を {買|か}い（　）いる。', choices: [{ n: 1, text: 'たがって' }, { n: 2, text: 'たくて' }, { n: 3, text: 'たいで' }, { n: 4, text: 'そうで' }], answer: 1, translationPt: 'Minha irmã está querendo comprar roupa nova.', explanationPt: '〜たがる = querer (3ª pessoa), forma contínua たがっている.' },
      { id: 'n4g-p64-5', number: 320, prompt: '{学生|がくせい}たちは {早|はや}く {帰|かえ}り（　）いる。', choices: [{ n: 1, text: 'たがって' }, { n: 2, text: 'たくて' }, { n: 3, text: 'たいで' }, { n: 4, text: 'そうで' }], answer: 1, translationPt: 'Os alunos estão querendo ir embora cedo.', explanationPt: '〜たがる expressa o desejo observável de outros.' },

      // —— 65. 〜続ける ——
      { id: 'n4g-p65-1', number: 321, prompt: '３{時間|じかん}も {走|はし}り（　）。', choices: [{ n: 1, text: '{続|つづ}けた' }, { n: 2, text: '{始|はじ}めた' }, { n: 3, text: '{終|お}わった' }, { n: 4, text: 'すぎた' }], answer: 1, translationPt: 'Corri sem parar por 3 horas.', explanationPt: '動詞ます形+続ける = continuar fazendo (走り続ける).' },
      { id: 'n4g-p65-2', number: 322, prompt: '{彼|かれ}は {朝|あさ}から {本|ほん}を {読|よ}み（　）いる。', choices: [{ n: 1, text: '{続|つづ}けて' }, { n: 2, text: '{始|はじ}めて' }, { n: 3, text: '{終|お}わって' }, { n: 4, text: 'すぎて' }], answer: 1, translationPt: 'Ele está lendo sem parar desde de manhã.', explanationPt: '〜続ける: ação que prossegue (読み続けている).' },
      { id: 'n4g-p65-3', number: 323, prompt: 'あきらめないで {努力|どりょく}し（　）ことが {大切|たいせつ}だ。', choices: [{ n: 1, text: '{続|つづ}ける' }, { n: 2, text: '{始|はじ}める' }, { n: 3, text: '{終|お}わる' }, { n: 4, text: 'すぎる' }], answer: 1, translationPt: 'É importante continuar se esforçando sem desistir.', explanationPt: '〜続ける = manter a ação (努力し続ける).' },
      { id: 'n4g-p65-4', number: 324, prompt: '{雨|あめ}が {一日中|いちにちじゅう} {降|ふ}り（　）。', choices: [{ n: 1, text: '{続|つづ}けた' }, { n: 2, text: '{始|はじ}めた' }, { n: 3, text: '{終|お}わった' }, { n: 4, text: 'すぎた' }], answer: 1, translationPt: 'Choveu sem parar o dia inteiro.', explanationPt: '〜続ける também vale para fenômenos (降り続ける).' },
      { id: 'n4g-p65-5', number: 325, prompt: '{彼女|かのじょ}は {十年|じゅうねん} {日本語|にほんご}を {教|おし}え（　）いる。', choices: [{ n: 1, text: '{続|つづ}けて' }, { n: 2, text: '{始|はじ}めて' }, { n: 3, text: '{終|お}わって' }, { n: 4, text: 'すぎて' }], answer: 1, translationPt: 'Ela ensina japonês há 10 anos sem parar.', explanationPt: '〜続ける = continuar a ação por longo tempo.' },
    ],
  },
  {
    id: 'n4g-t13',
    title: 'もんだい１３',
    subtitlePt: '13. Explicação e conselho (〜んです・〜の？・〜ないほうがいい・〜たらどうですか)',
    instructionJa,
    instructionPt,
    questions: [
      // —— 66. 〜んです／のです ——
      { id: 'n4g-p66-1', number: 326, prompt: 'どうした（　）か。', choices: [{ n: 1, text: 'んです' }, { n: 2, text: 'ようです' }, { n: 3, text: 'でしょう' }, { n: 4, text: 'そうです' }], answer: 1, translationPt: 'O que aconteceu? (quero entender)', explanationPt: '〜んですか = pedir explicação sobre uma situação.' },
      { id: 'n4g-p66-2', number: 327, prompt: '{頭|あたま}が {痛|いた}い（　）。', choices: [{ n: 1, text: 'んです' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'でしょう' }, { n: 4, text: 'そうです' }], answer: 1, translationPt: 'É que estou com dor de cabeça.', explanationPt: '〜んです = dar a explicação/razão de algo.' },
      { id: 'n4g-p66-3', number: 328, prompt: 'どうして {学校|がっこう}を {休|やす}んだ（　）か。', choices: [{ n: 1, text: 'んです' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'でしょう' }, { n: 4, text: 'らしいです' }], answer: 1, translationPt: 'Por que você faltou à escola?', explanationPt: '〜んですか pede a razão de um fato.' },
      { id: 'n4g-p66-4', number: 329, prompt: '{道|みち}が こんで いた（　）。それで {遅|おく}れました。', choices: [{ n: 1, text: 'んです' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'でしょう' }, { n: 4, text: 'つもりです' }], answer: 1, translationPt: 'É que a rua estava congestionada. Por isso me atrasei.', explanationPt: '〜んです apresenta a explicação de uma situação.' },
      { id: 'n4g-p66-5', number: 330, prompt: 'この {店|みせ}、{安|やす}くて おいしい（　）よ。', choices: [{ n: 1, text: 'んです' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'でしょう' }, { n: 4, text: 'ようです' }], answer: 1, translationPt: 'É que esta loja é barata e gostosa, viu.', explanationPt: '〜んです reforça/explica a informação dada.' },

      // —— 67. 〜の？ ——
      { id: 'n4g-p67-1', number: 331, prompt: 'もう {食|た}べた（　）？', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'ます' }, { n: 3, text: 'ましょう' }, { n: 4, text: 'よ' }], answer: 1, translationPt: 'Já comeu?', explanationPt: '〜の？ = pergunta casual (busca explicação/confirmação).' },
      { id: 'n4g-p67-2', number: 332, prompt: 'どこに {行|い}く（　）？', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'ます' }, { n: 3, text: 'でしょう' }, { n: 4, text: 'わ' }], answer: 1, translationPt: 'Onde você vai?', explanationPt: '動詞(普通形)+の？ = pergunta informal.' },
      { id: 'n4g-p67-3', number: 333, prompt: '{元気|げんき}が ない（　）？ どうしたの。', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'ます' }, { n: 3, text: 'ましょう' }, { n: 4, text: 'よ' }], answer: 1, translationPt: 'Você está sem ânimo? O que houve?', explanationPt: '〜の？ = perguntar de forma próxima/casual.' },
      { id: 'n4g-p67-4', number: 334, prompt: 'これは {誰|だれ}の かさな（　）？', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'ます' }, { n: 3, text: 'だ' }, { n: 4, text: 'よ' }], answer: 1, translationPt: 'Esse guarda-chuva é de quem?', explanationPt: 'Substantivo + な + の？: かさなの？.' },
      { id: 'n4g-p67-5', number: 335, prompt: 'あした {来|こ}ない（　）？', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'ます' }, { n: 3, text: 'ましょう' }, { n: 4, text: 'わ' }], answer: 1, translationPt: 'Você não vem amanhã?', explanationPt: '〜の？ = pergunta casual (aqui na forma negativa).' },

      // —— 68. 〜ないほうがいい ——
      { id: 'n4g-p68-1', number: 336, prompt: 'たばこは {吸|す}わ（　）。', choices: [{ n: 1, text: 'ないほうがいい' }, { n: 2, text: 'たほうがいい' }, { n: 3, text: 'なくてもいい' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'É melhor não fumar.', explanationPt: '〜ないほうがいい = conselho para NÃO fazer (吸わないほうがいい).' },
      { id: 'n4g-p68-2', number: 337, prompt: 'むりを し（　）よ。', choices: [{ n: 1, text: 'ないほうがいい' }, { n: 2, text: 'たほうがいい' }, { n: 3, text: 'なくてもいい' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'É melhor não se esforçar demais.', explanationPt: '〜ないほうがいい: recomendar evitar algo.' },
      { id: 'n4g-p68-3', number: 338, prompt: '{熱|ねつ}が ある {時|とき}は、おふろに {入|はい}ら（　）。', choices: [{ n: 1, text: 'ないほうがいい' }, { n: 2, text: 'たほうがいい' }, { n: 3, text: 'なくてもいい' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'Quando está com febre, é melhor não tomar banho de banheira.', explanationPt: '〜ないほうがいい = aconselhar a não fazer.' },
      { id: 'n4g-p68-4', number: 339, prompt: '{夜|よる} {遅|おそ}く コーヒーを {飲|の}ま（　）。', choices: [{ n: 1, text: 'ないほうがいい' }, { n: 2, text: 'たほうがいい' }, { n: 3, text: 'なくてもいい' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'É melhor não tomar café tarde da noite.', explanationPt: '〜ないほうがいい: sugestão para evitar.' },
      { id: 'n4g-p68-5', number: 340, prompt: 'あぶないから、{一人|ひとり}で {行|い}か（　）。', choices: [{ n: 1, text: 'ないほうがいい' }, { n: 2, text: 'たほうがいい' }, { n: 3, text: 'なくてもいい' }, { n: 4, text: 'ないと' }], answer: 1, translationPt: 'É perigoso, então é melhor não ir sozinho.', explanationPt: '〜ないほうがいい = conselho de cautela.' },

      // —— 69. 〜たらどうですか ——
      { id: 'n4g-p69-1', number: 341, prompt: '{少|すこ}し {休|やす}ん（　）。', choices: [{ n: 1, text: 'だらどうですか' }, { n: 2, text: 'てもいいですか' }, { n: 3, text: 'ましょうか' }, { n: 4, text: 'ませんか' }], answer: 1, translationPt: 'Que tal descansar um pouco?', explanationPt: '〜たらどうですか = sugerir que a pessoa faça algo (休んだらどうですか).' },
      { id: 'n4g-p69-2', number: 342, prompt: '{先生|せんせい}に {聞|き}い（　）。', choices: [{ n: 1, text: 'たらどう' }, { n: 2, text: 'てもどう' }, { n: 3, text: 'ましょうか' }, { n: 4, text: 'ませんか' }], answer: 1, translationPt: 'Que tal perguntar ao professor?', explanationPt: '〜たらどう？ = versão casual de 〜たらどうですか.' },
      { id: 'n4g-p69-3', number: 343, prompt: 'つかれて いるなら、{早|はや}く {寝|ね}（　）。', choices: [{ n: 1, text: 'たらどうですか' }, { n: 2, text: 'てもいいですか' }, { n: 3, text: 'ましょうか' }, { n: 4, text: 'ませんか' }], answer: 1, translationPt: 'Se está cansado, que tal dormir cedo?', explanationPt: '〜たらどうですか sugere uma solução.' },
      { id: 'n4g-p69-4', number: 344, prompt: '{医者|いしゃ}に {行|い}っ（　）。', choices: [{ n: 1, text: 'たらどうですか' }, { n: 2, text: 'てもいいですか' }, { n: 3, text: 'ましょうか' }, { n: 4, text: 'ませんか' }], answer: 1, translationPt: 'Que tal ir ao médico?', explanationPt: '〜たらどうですか = propor uma ação ao interlocutor.' },
      { id: 'n4g-p69-5', number: 345, prompt: 'わからないなら、{先生|せんせい}に {相談|そうだん}し（　）。', choices: [{ n: 1, text: 'たらどうですか' }, { n: 2, text: 'てもいいですか' }, { n: 3, text: 'ましょうか' }, { n: 4, text: 'ませんか' }], answer: 1, translationPt: 'Se não entende, que tal consultar o professor?', explanationPt: '〜たらどうですか = dar uma sugestão educada.' },
    ],
  },
  // —— próximos temas (14..20) serão acrescentados aqui ——
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
