import type { ExerciseGroup, Level, Section } from './types'

// =====================================================================
//  N5 — Leva autoral (Simulado de prática)
//  Questões ORIGINAIS no formato JLPT N5 (não copiam material oficial),
//  para prática extra. Enunciados japoneses, respostas e explicações em
//  pt-BR são autorais. Nível de vocabulário/kanji/gramática do N5.
//  Audição: por enquanto sem áudio (compreensão pelo roteiro/texto);
//  TTS pode ser adicionado depois.
// =====================================================================

const vocabM1: ExerciseGroup = {
  id: 'n5-mock-vocab-m1',
  title: 'もんだい1',
  subtitlePt: 'Leitura de kanji',
  instructionJa: '＿＿の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se lê (em hiragana) a palavra sublinhada? Escolha a melhor opção.',
  example: {
    prompt: 'まいにち [[水]]を のみます。',
    choices: [{ n: 1, text: 'みず' }, { n: 2, text: 'すい' }, { n: 3, text: 'みづ' }, { n: 4, text: 'ひ' }],
    answer: 1,
    note: '水 = みず (água).',
  },
  questions: [
    { id: 'n5-mock-vocab-1', number: 1, prompt: '[[父]]は びょういんで はたらいて います。', choices: [{ n: 1, text: 'はは' }, { n: 2, text: 'ちち' }, { n: 3, text: 'あに' }, { n: 4, text: 'あね' }], answer: 2, translationPt: 'Meu pai trabalha no hospital.', explanationPt: '父 = ちち (meu pai). はは=mãe, あに=irmão mais velho, あね=irmã mais velha.' },
    { id: 'n5-mock-vocab-2', number: 2, prompt: 'きょうは [[天気]]が いいです。', choices: [{ n: 1, text: 'てんき' }, { n: 2, text: 'でんき' }, { n: 3, text: 'てんぎ' }, { n: 4, text: 'げんき' }], answer: 1, translationPt: 'Hoje o tempo está bom.', explanationPt: '天気 = てんき (tempo/clima). でんき=eletricidade, げんき=ânimo/saúde.' },
    { id: 'n5-mock-vocab-3', number: 3, prompt: '[[駅]]まで あるいて いきます。', choices: [{ n: 1, text: 'みち' }, { n: 2, text: 'まち' }, { n: 3, text: 'えき' }, { n: 4, text: 'むら' }], answer: 3, translationPt: 'Vou a pé até a estação.', explanationPt: '駅 = えき (estação). みち=rua, まち=cidade, むら=vila.' },
    { id: 'n5-mock-vocab-4', number: 4, prompt: 'この [[本]]は おもしろいです。', choices: [{ n: 1, text: 'ほん' }, { n: 2, text: 'ぽん' }, { n: 3, text: 'ぼん' }, { n: 4, text: 'もと' }], answer: 1, translationPt: 'Este livro é interessante.', explanationPt: '本 = ほん (livro). Sem dakuten/handakuten aqui.' },
    { id: 'n5-mock-vocab-5', number: 5, prompt: '[[母]]は りょうりが じょうずです。', choices: [{ n: 1, text: 'はは' }, { n: 2, text: 'ちち' }, { n: 3, text: 'あね' }, { n: 4, text: 'そぼ' }], answer: 1, translationPt: 'Minha mãe cozinha bem.', explanationPt: '母 = はは (minha mãe). ちち=pai, あね=irmã mais velha, そぼ=avó.' },
    { id: 'n5-mock-vocab-6', number: 6, prompt: 'がっこうは 9[[時]]に はじまります。', choices: [{ n: 1, text: 'じ' }, { n: 2, text: 'とき' }, { n: 3, text: 'ふん' }, { n: 4, text: 'ぷん' }], answer: 1, translationPt: 'A escola começa às 9 horas.', explanationPt: '〜時 = 〜じ (horas). 9時 = くじ. ふん/ぷん = minutos.' },
    { id: 'n5-mock-vocab-7', number: 7, prompt: '[[新しい]] くつを かいました。', choices: [{ n: 1, text: 'あたらしい' }, { n: 2, text: 'あたらい' }, { n: 3, text: 'あらたしい' }, { n: 4, text: 'あだらしい' }], answer: 1, translationPt: 'Comprei sapatos novos.', explanationPt: '新しい = あたらしい (novo). Cuidado com a ordem das sílabas: あ-た-ら-し-い.' },
    { id: 'n5-mock-vocab-8', number: 8, prompt: '[[車]]で かいしゃへ いきます。', choices: [{ n: 1, text: 'くるま' }, { n: 2, text: 'くろま' }, { n: 3, text: 'ぐるま' }, { n: 4, text: 'くらま' }], answer: 1, translationPt: 'Vou de carro para a empresa.', explanationPt: '車 = くるま (carro).' },
    { id: 'n5-mock-vocab-9', number: 9, prompt: 'まいあさ がっこうへ [[行きます]]。', choices: [{ n: 1, text: 'いきます' }, { n: 2, text: 'ゆきます' }, { n: 3, text: 'おきます' }, { n: 4, text: 'きます' }], answer: 1, translationPt: 'Vou à escola toda manhã.', explanationPt: '行く = いく (ir); 行きます = いきます. おきる=acordar, くる=vir.' },
    { id: 'n5-mock-vocab-10', number: 10, prompt: 'えんぴつが [[五]]ほん あります。', choices: [{ n: 1, text: 'ご' }, { n: 2, text: 'ろく' }, { n: 3, text: 'よん' }, { n: 4, text: 'さん' }], answer: 1, translationPt: 'Há cinco lápis.', explanationPt: '五 = ご (cinco). 五本 = ごほん. ろく=6, よん=4, さん=3.' },
  ],
}

const vocabM2: ExerciseGroup = {
  id: 'n5-mock-vocab-m2',
  title: 'もんだい2',
  subtitlePt: 'Escrita correta (kanji)',
  instructionJa: '＿＿の ことばは どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se escreve a palavra sublinhada em kanji? Escolha a melhor opção.',
  questions: [
    { id: 'n5-mock-vocab-11', number: 11, prompt: 'なつやすみに [[やま]]に のぼりました。', choices: [{ n: 1, text: '川' }, { n: 2, text: '山' }, { n: 3, text: '田' }, { n: 4, text: '出' }], answer: 2, translationPt: 'Nas férias de verão subi a montanha.', explanationPt: 'やま = 山 (montanha). 川=rio, 田=arrozal, 出=sair.' },
    { id: 'n5-mock-vocab-12', number: 12, prompt: 'こうえんに [[ひと]]が おおいです。', choices: [{ n: 1, text: '入' }, { n: 2, text: '人' }, { n: 3, text: '八' }, { n: 4, text: '大' }], answer: 2, translationPt: 'Há muita gente no parque.', explanationPt: 'ひと = 人 (pessoa). 入 (entrar) é parecido, mas errado.' },
    { id: 'n5-mock-vocab-13', number: 13, prompt: 'はこの [[なか]]に ほんが あります。', choices: [{ n: 1, text: '中' }, { n: 2, text: '申' }, { n: 3, text: '虫' }, { n: 4, text: '仲' }], answer: 1, translationPt: 'Há um livro dentro da caixa.', explanationPt: 'なか = 中 (dentro/meio). 虫=inseto, 仲=relação — formas parecidas.' },
    { id: 'n5-mock-vocab-14', number: 14, prompt: '[[おおきい]] こえで はなして ください。', choices: [{ n: 1, text: '木い' }, { n: 2, text: '本い' }, { n: 3, text: '大きい' }, { n: 4, text: '太きい' }], answer: 3, translationPt: 'Fale com voz alta (grande), por favor.', explanationPt: 'おおきい = 大きい (grande). 太い (ふとい) = grosso é parecido.' },
    { id: 'n5-mock-vocab-15', number: 15, prompt: '[[しろい]] シャツを きて います。', choices: [{ n: 1, text: '白い' }, { n: 2, text: '百い' }, { n: 3, text: '自い' }, { n: 4, text: '目い' }], answer: 1, translationPt: 'Estou de camisa branca.', explanationPt: 'しろい = 白い (branco). 百=cem, 自=próprio, 目=olho — lookalikes.' },
    { id: 'n5-mock-vocab-16', number: 16, prompt: 'まいにち ごはんを [[たべます]]。', choices: [{ n: 1, text: '食べます' }, { n: 2, text: '飲べます' }, { n: 3, text: '会べます' }, { n: 4, text: '行べます' }], answer: 1, translationPt: 'Como arroz/refeição todos os dias.', explanationPt: 'たべる = 食べる (comer). 飲む (のむ) = beber é parecido no sentido.' },
    { id: 'n5-mock-vocab-17', number: 17, prompt: 'ごはんの まえに [[て]]を あらいます。', choices: [{ n: 1, text: '手' }, { n: 2, text: '毛' }, { n: 3, text: '才' }, { n: 4, text: '足' }], answer: 1, translationPt: 'Lavo as mãos antes da refeição.', explanationPt: 'て = 手 (mão). 毛=pelo, 足=pé — confusões comuns.' },
    { id: 'n5-mock-vocab-18', number: 18, prompt: 'いま [[おかね]]が ありません。', choices: [{ n: 1, text: 'お全' }, { n: 2, text: 'お金' }, { n: 3, text: 'お会' }, { n: 4, text: 'お今' }], answer: 2, translationPt: 'Agora não tenho dinheiro.', explanationPt: 'おかね = お金 (dinheiro). 全/会/今 são kanji de forma parecida.' },
  ],
}

const vocabM3: ExerciseGroup = {
  id: 'n5-mock-vocab-m3',
  title: 'もんだい3',
  subtitlePt: 'Vocabulário (preencher a lacuna)',
  instructionJa: '（　）に なにを いれますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a palavra mais adequada.',
  questions: [
    { id: 'n5-mock-vocab-19', number: 19, prompt: 'あついですから、まどを （　）ください。', choices: [{ n: 1, text: 'あけて' }, { n: 2, text: 'しめて' }, { n: 3, text: 'けして' }, { n: 4, text: 'つけて' }], answer: 1, translationPt: 'Está quente, então abra a janela, por favor.', explanationPt: 'まどを あける = abrir a janela. しめる=fechar, けす=apagar, つける=ligar.' },
    { id: 'n5-mock-vocab-20', number: 20, prompt: 'この もんだいは （　）です。よく わかりません。', choices: [{ n: 1, text: 'やさしい' }, { n: 2, text: 'むずかしい' }, { n: 3, text: 'たのしい' }, { n: 4, text: 'あかるい' }], answer: 2, translationPt: 'Esta questão é difícil. Não entendo bem.', explanationPt: 'むずかしい = difícil (combina com “não entendo”). やさしい=fácil, たのしい=divertido, あかるい=claro.' },
    { id: 'n5-mock-vocab-21', number: 21, prompt: 'ともだちに てがみを （　）。', choices: [{ n: 1, text: 'かきます' }, { n: 2, text: 'よみます' }, { n: 3, text: 'ききます' }, { n: 4, text: 'はなします' }], answer: 1, translationPt: 'Escrevo uma carta para um amigo.', explanationPt: 'てがみを かく = escrever uma carta. よむ=ler, きく=ouvir, はなす=falar.' },
    { id: 'n5-mock-vocab-22', number: 22, prompt: '（　）で でんしゃの きっぷを かいます。', choices: [{ n: 1, text: 'ぎんこう' }, { n: 2, text: 'えき' }, { n: 3, text: 'びょういん' }, { n: 4, text: 'がっこう' }], answer: 2, translationPt: 'Compro o bilhete de trem na estação.', explanationPt: 'きっぷ (bilhete) compra-se na えき (estação). ぎんこう=banco, びょういん=hospital.' },
    { id: 'n5-mock-vocab-23', number: 23, prompt: 'のどが かわきましたから、（　）を のみます。', choices: [{ n: 1, text: 'ごはん' }, { n: 2, text: 'みず' }, { n: 3, text: 'パン' }, { n: 4, text: 'にく' }], answer: 2, translationPt: 'Estou com sede, então vou beber água.', explanationPt: 'のむ (beber) combina com みず (água). ごはん/パン/にく são comidas (食べる).' },
    { id: 'n5-mock-vocab-24', number: 24, prompt: 'へやが くらいですから、でんきを （　）。', choices: [{ n: 1, text: 'つけます' }, { n: 2, text: 'けします' }, { n: 3, text: 'あけます' }, { n: 4, text: 'しめます' }], answer: 1, translationPt: 'O quarto está escuro, então vou acender a luz.', explanationPt: 'でんきを つける = acender a luz. けす=apagar, あける=abrir, しめる=fechar.' },
    { id: 'n5-mock-vocab-25', number: 25, prompt: 'まいにち にほんごを （　）して います。', choices: [{ n: 1, text: 'べんきょう' }, { n: 2, text: 'りょこう' }, { n: 3, text: 'さんぽ' }, { n: 4, text: 'せんたく' }], answer: 1, translationPt: 'Estudo japonês todos os dias.', explanationPt: 'べんきょうする = estudar. りょこう=viagem, さんぽ=passeio, せんたく=lavar roupa.' },
    { id: 'n5-mock-vocab-26', number: 26, prompt: 'この うたは にほんで とても （　）です。', choices: [{ n: 1, text: 'ゆうめい' }, { n: 2, text: 'げんき' }, { n: 3, text: 'べんり' }, { n: 4, text: 'しんせつ' }], answer: 1, translationPt: 'Esta música é muito famosa no Japão.', explanationPt: 'ゆうめい = famoso. げんき=animado, べんり=prático, しんせつ=gentil.' },
    { id: 'n5-mock-vocab-27', number: 27, prompt: 'あさ おきてから、（　）を みがきます。', choices: [{ n: 1, text: 'かお' }, { n: 2, text: 'は' }, { n: 3, text: 'て' }, { n: 4, text: 'あし' }], answer: 2, translationPt: 'De manhã, depois de acordar, escovo os dentes.', explanationPt: 'はを みがく = escovar os dentes. かお=rosto, て=mão, あし=pé.' },
    { id: 'n5-mock-vocab-28', number: 28, prompt: 'さとうを いれましたから、コーヒーは （　）です。', choices: [{ n: 1, text: 'からい' }, { n: 2, text: 'あまい' }, { n: 3, text: 'にがい' }, { n: 4, text: 'たかい' }], answer: 2, translationPt: 'Como pus açúcar, o café está doce.', explanationPt: 'さとう (açúcar) deixa o café あまい (doce). からい=picante, にがい=amargo, たかい=caro.' },
    { id: 'n5-mock-vocab-29', number: 29, prompt: 'つかれましたから、ちょっと （　）。', choices: [{ n: 1, text: 'やすみます' }, { n: 2, text: 'はたらきます' }, { n: 3, text: 'はしります' }, { n: 4, text: 'およぎます' }], answer: 1, translationPt: 'Estou cansado, então vou descansar um pouco.', explanationPt: 'やすむ = descansar (combina com “cansado”). はたらく=trabalhar, はしる=correr, およぐ=nadar.' },
    { id: 'n5-mock-vocab-30', number: 30, prompt: 'この みせは やさいが （　）です。', choices: [{ n: 1, text: 'やすい' }, { n: 2, text: 'みじかい' }, { n: 3, text: 'おそい' }, { n: 4, text: 'はやい' }], answer: 1, translationPt: 'Nesta loja os legumes são baratos.', explanationPt: 'やすい = barato. みじかい=curto, おそい=lento/tarde, はやい=rápido/cedo.' },
  ],
}

const vocabM4: ExerciseGroup = {
  id: 'n5-mock-vocab-m4',
  title: 'もんだい4',
  subtitlePt: 'Frase de sentido equivalente',
  instructionJa: '＿＿の ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Escolha a frase com sentido mais parecido com a frase sublinhada.',
  questions: [
    { id: 'n5-mock-vocab-31', number: 31, prompt: 'ここは [[でぐち]]です。', choices: [{ n: 1, text: 'ここから はいります。' }, { n: 2, text: 'ここから でます。' }, { n: 3, text: 'ここで まちます。' }, { n: 4, text: 'ここで かいます。' }], answer: 2, translationPt: 'Aqui é a saída.', explanationPt: 'でぐち = saída → でる (sair): «ここから でます». いりぐち (entrada) seria はいる.' },
    { id: 'n5-mock-vocab-32', number: 32, prompt: 'きのうは [[ひまでした]]。', choices: [{ n: 1, text: 'きのうは いそがしかったです。' }, { n: 2, text: 'きのうは じかんが ありました。' }, { n: 3, text: 'きのうは びょうきでした。' }, { n: 4, text: 'きのうは あめでした。' }], answer: 2, translationPt: 'Ontem eu estava livre (de folga).', explanationPt: 'ひま = ter tempo livre → «じかんが ありました». いそがしい=ocupado (oposto).' },
    { id: 'n5-mock-vocab-33', number: 33, prompt: 'この みせは [[ゆうめいです]]。', choices: [{ n: 1, text: 'この みせは おおきいです。' }, { n: 2, text: 'この みせは あたらしいです。' }, { n: 3, text: 'この みせは みんな しって います。' }, { n: 4, text: 'この みせは とおいです。' }], answer: 3, translationPt: 'Esta loja é famosa.', explanationPt: 'ゆうめい (famoso) ≈ todos a conhecem: «みんな しって います».' },
    { id: 'n5-mock-vocab-34', number: 34, prompt: 'たなかさんは [[えいごの きょうし]]です。', choices: [{ n: 1, text: 'たなかさんは えいごを ならって います。' }, { n: 2, text: 'たなかさんは えいごを おしえて います。' }, { n: 3, text: 'たなかさんは えいごが すきです。' }, { n: 4, text: 'たなかさんは えいごを はなしません。' }], answer: 2, translationPt: 'O Tanaka é professor de inglês.', explanationPt: 'きょうし = professor → おしえる (ensinar): «えいごを おしえて います». ならう=aprender (o aluno).' },
    { id: 'n5-mock-vocab-35', number: 35, prompt: 'へやを [[そうじしました]]。', choices: [{ n: 1, text: 'へやを きれいに しました。' }, { n: 2, text: 'へやを よごしました。' }, { n: 3, text: 'へやで ねました。' }, { n: 4, text: 'へやを でました。' }], answer: 1, translationPt: 'Limpei o quarto.', explanationPt: 'そうじする (limpar) → «きれいに しました» (deixei limpo). よごす=sujar (oposto).' },
  ],
}

const vocabulary: Section = {
  id: 'vocabulary',
  level: 'N5-mock',
  titleJa: 'げんごちしき（もじ・ごい）',
  titlePt: 'Vocabulário e Escrita',
  summaryPt:
    'Simulado autoral N5 (caracteres e vocabulário): leitura de kanji, escrita, vocabulário e frases equivalentes. 35 questões originais para prática.',
  studyNotes: [
    {
      title: 'Sobre esta leva (autoral)',
      bodyPt:
        'Estas questões são **originais** (autorais), feitas no **formato do JLPT N5** para prática extra — não reproduzem o material oficial. Mesmos quatro tipos da seção もじ・ごい:\n\n- **もんだい1** — ler o kanji sublinhado e escolher a **leitura**.\n- **もんだい2** — escolher a **escrita em kanji**.\n- **もんだい3** — preencher a lacuna `（　）` com a **palavra** adequada.\n- **もんだい4** — escolher a frase de **sentido equivalente**.',
    },
  ],
  groups: [vocabM1, vocabM2, vocabM3, vocabM4],
}

// ---------------------------------------------------------------------
//  言語知識（文法）・読解 — Grammar
// ---------------------------------------------------------------------
const gramM1: ExerciseGroup = {
  id: 'n5-mock-gram-m1',
  title: 'もんだい1',
  subtitlePt: 'Forma gramatical (preencher a lacuna)',
  instructionJa: '（　）に 何を 入れますか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a melhor partícula/forma.',
  questions: [
    { id: 'n5-mock-gram-1', number: 1, prompt: 'わたしは まいにち コーヒー（　）{飲|の}みます。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'が' }, { n: 3, text: 'に' }, { n: 4, text: 'で' }], answer: 1, translationPt: 'Eu bebo café todos os dias.', explanationPt: 'を marca o objeto direto do verbo: コーヒーを 飲む (beber café).' },
    { id: 'n5-mock-gram-2', number: 2, prompt: 'これは {日本語|にほんご}（　）{本|ほん}です。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'の' }, { n: 3, text: 'に' }, { n: 4, text: 'へ' }], answer: 2, translationPt: 'Este é um livro de japonês.', explanationPt: 'の liga dois substantivos: 日本語の 本 (livro de japonês).' },
    { id: 'n5-mock-gram-3', number: 3, prompt: '{図書館|としょかん}（　）{本|ほん}を {読|よ}みます。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'に' }, { n: 3, text: 'で' }, { n: 4, text: 'へ' }], answer: 3, translationPt: 'Leio livros na biblioteca.', explanationPt: 'で marca o lugar onde a ação acontece: 図書館で 読む.' },
    { id: 'n5-mock-gram-4', number: 4, prompt: 'あさ 7{時|じ}（　）おきます。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'を' }, { n: 3, text: 'で' }, { n: 4, text: 'と' }], answer: 1, translationPt: 'Acordo às 7 da manhã.', explanationPt: 'に marca o ponto no tempo (hora): 7時に おきる.' },
    { id: 'n5-mock-gram-5', number: 5, prompt: '{電車|でんしゃ}（　）{学校|がっこう}へ {行|い}きます。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'を' }, { n: 3, text: 'で' }, { n: 4, text: 'が' }], answer: 3, translationPt: 'Vou para a escola de trem.', explanationPt: 'で marca o meio de transporte: 電車で 行く.' },
    { id: 'n5-mock-gram-6', number: 6, prompt: '{田中|たなか}さん（　）いっしょに えいがを {見|み}ます。', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'を' }, { n: 3, text: 'が' }, { n: 4, text: 'に' }], answer: 1, translationPt: 'Vou ver um filme junto com o Tanaka.', explanationPt: '〜と いっしょに = junto com 〜. 田中さんと いっしょに.' },
    { id: 'n5-mock-gram-7', number: 7, prompt: 'へやに だれ（　）いますか。', choices: [{ n: 1, text: 'か' }, { n: 2, text: 'も' }, { n: 3, text: 'が' }, { n: 4, text: 'を' }], answer: 3, translationPt: 'Tem alguém no quarto?', explanationPt: 'だれが いますか = quem está (existe)? が marca o sujeito de いる.' },
    { id: 'n5-mock-gram-8', number: 8, prompt: 'わたしは すし（　）{好|す}きです。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'が' }, { n: 3, text: 'に' }, { n: 4, text: 'で' }], answer: 2, translationPt: 'Eu gosto de sushi.', explanationPt: 'Com 好き usa-se が: すしが 好きです.' },
    { id: 'n5-mock-gram-9', number: 9, prompt: 'この レストランは {安|やす}い（　）、おいしいです。', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'でも' }, { n: 3, text: 'し' }, { n: 4, text: 'が' }], answer: 3, translationPt: 'Este restaurante é barato e (além disso) gostoso.', explanationPt: '〜し = enumera qualidades/razões: 安いし、おいしい (é barato e gostoso).' },
    { id: 'n5-mock-gram-10', number: 10, prompt: 'あした {雨|あめ}（　）、{出|で}かけません。', choices: [{ n: 1, text: 'だから' }, { n: 2, text: 'でも' }, { n: 3, text: 'まで' }, { n: 4, text: 'より' }], answer: 1, translationPt: 'Amanhã, como vai chover, não vou sair.', explanationPt: 'substantivo + だから = porque é ~: 雨だから (porque é chuva/vai chover).' },
    { id: 'n5-mock-gram-11', number: 11, prompt: 'テレビを {見|み}（　）、ごはんを {食|た}べます。', choices: [{ n: 1, text: 'ながら' }, { n: 2, text: 'たり' }, { n: 3, text: 'ても' }, { n: 4, text: 'ので' }], answer: 1, translationPt: 'Como vendo TV (ao mesmo tempo).', explanationPt: 'verbo (masu sem masu) + ながら = enquanto/ao mesmo tempo: 見ながら 食べる.' },
    { id: 'n5-mock-gram-12', number: 12, prompt: 'しゅくだいを し（　）から、あそびます。', choices: [{ n: 1, text: 'て' }, { n: 2, text: 'た' }, { n: 3, text: 'ない' }, { n: 4, text: 'ます' }], answer: 1, translationPt: 'Depois de fazer a lição, vou brincar.', explanationPt: '〜てから = depois de fazer ~: してから あそぶ.' },
    { id: 'n5-mock-gram-13', number: 13, prompt: 'わたしは すしを {食|た}べた こと（　）あります。', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'を' }, { n: 3, text: 'に' }, { n: 4, text: 'で' }], answer: 1, translationPt: 'Eu já comi sushi (tenho a experiência).', explanationPt: '〜た ことが ある = já fez algo (experiência): 食べた ことが ある.' },
    { id: 'n5-mock-gram-14', number: 14, prompt: 'ここで {写真|しゃしん}を {撮|と}っても （　）ですか。', choices: [{ n: 1, text: 'いい' }, { n: 2, text: 'ある' }, { n: 3, text: 'する' }, { n: 4, text: 'なる' }], answer: 1, translationPt: 'Posso tirar foto aqui?', explanationPt: '〜ても いいですか = posso ~? (pedir permissão): 撮っても いいですか.' },
    { id: 'n5-mock-gram-15', number: 15, prompt: 'きょうは {寒|さむ}いですから、コートを {着|き}た （　）が いいですよ。', choices: [{ n: 1, text: 'まえ' }, { n: 2, text: 'ほう' }, { n: 3, text: 'こと' }, { n: 4, text: 'とき' }], answer: 2, translationPt: 'Hoje está frio, então é melhor vestir um casaco.', explanationPt: '〜た ほうが いい = é melhor fazer ~: 着た ほうが いい.' },
  ],
}

const gramM2: ExerciseGroup = {
  id: 'n5-mock-gram-m2',
  title: 'もんだい2',
  subtitlePt: 'Montagem da frase (★)',
  instructionJa: '★に 入る ものは どれですか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'Ordene os fragmentos. Qual entra na posição ★? (A explicação mostra a frase montada.)',
  questions: [
    { id: 'n5-mock-gram-16', number: 16, prompt: 'わたしは ＿＿ ＿＿ ★ ＿＿ {好|す}きです。', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'ねこ' }, { n: 3, text: 'より' }, { n: 4, text: 'いぬ' }], answer: 4, translationPt: 'Eu gosto mais de cachorro do que de gato.', explanationPt: 'Ordem: ねこ より いぬ が 好きです. ★ = いぬ (4).' },
    { id: 'n5-mock-gram-17', number: 17, prompt: 'すみません、＿＿ ＿＿ ★ ＿＿ ありますか。', choices: [{ n: 1, text: 'は' }, { n: 2, text: 'トイレ' }, { n: 3, text: 'この' }, { n: 4, text: 'ちかくに' }], answer: 2, translationPt: 'Com licença, tem banheiro aqui perto?', explanationPt: 'Ordem: この ちかくに トイレ は ありますか. ★ = トイレ (2).' },
    { id: 'n5-mock-gram-18', number: 18, prompt: '{妹|いもうと}は ＿＿ ＿＿ ★ ＿＿ います。', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'して' }, { n: 3, text: 'しゅくだいを' }, { n: 4, text: 'へや' }], answer: 3, translationPt: 'Minha irmã mais nova está fazendo a lição no quarto.', explanationPt: 'Ordem: へや で しゅくだいを して います. ★ = しゅくだいを (3).' },
    { id: 'n5-mock-gram-19', number: 19, prompt: 'なつやすみに ＿＿ ＿＿ ★ ＿＿ か。', choices: [{ n: 1, text: 'なに' }, { n: 2, text: 'する' }, { n: 3, text: 'を' }, { n: 4, text: 'つもりです' }], answer: 2, translationPt: 'O que você pretende fazer nas férias de verão?', explanationPt: 'Ordem: なに を する つもりです か. ★ = する (2).' },
    { id: 'n5-mock-gram-20', number: 20, prompt: '{漢字|かんじ}は ＿＿ ＿＿ ★ ＿＿ です。', choices: [{ n: 1, text: 'むずかしい' }, { n: 2, text: 'おぼえる' }, { n: 3, text: 'のが' }, { n: 4, text: 'とても' }], answer: 4, translationPt: 'Kanji é muito difícil de memorizar.', explanationPt: 'Ordem: おぼえる のが とても むずかしい. ★ = とても (4).' },
  ],
}

const gramM3: ExerciseGroup = {
  id: 'n5-mock-gram-m3',
  title: 'もんだい3',
  subtitlePt: 'Gramática no texto (cloze)',
  instructionJa:
    '21から25に 何を 入れますか。文章の 意味を 考えて、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n【リンさんの 作文】\nはじめまして。わたしは リンです。{中国|ちゅうごく}【21】{来|き}ました。いま、日本の {大学|だいがく}で べんきょうして います。日本語は すこし むずかしい【22】、たのしいです。まいにち {友|とも}だち【23】日本語で {話|はな}します。やすみの 日は、よく {公園|こうえん}【24】{行|い}きます。日本の せいかつは とても たのしいです。【25】、もっと 日本語が じょうずに なりたいです。',
  instructionPt: 'Leia a redação da Lin (uma autoapresentação) e escolha o que melhor preenche cada lacuna 21–25.',
  questions: [
    { id: 'n5-mock-gram-21', number: 21, prompt: '【21】', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まで' }, { n: 3, text: 'へ' }, { n: 4, text: 'を' }], answer: 1, translationPt: 'Vim da China.', explanationPt: '〜から 来ました = vim de ~ (ponto de origem): 中国から 来ました.' },
    { id: 'n5-mock-gram-22', number: 22, prompt: '【22】', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'から' }, { n: 3, text: 'が' }, { n: 4, text: 'し' }], answer: 3, translationPt: 'O japonês é um pouco difícil, mas é divertido.', explanationPt: '〜が = mas (contraste): むずかしいが、たのしい (difícil, mas divertido).' },
    { id: 'n5-mock-gram-23', number: 23, prompt: '【23】', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'と' }, { n: 3, text: 'に' }, { n: 4, text: 'が' }], answer: 2, translationPt: 'Falo em japonês com meus amigos.', explanationPt: '〜と 話す = conversar COM ~: 友だちと 話します.' },
    { id: 'n5-mock-gram-24', number: 24, prompt: '【24】', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'に' }, { n: 3, text: 'で' }, { n: 4, text: 'から' }], answer: 2, translationPt: 'Nos dias de folga, costumo ir ao parque.', explanationPt: '〜に 行く = ir A (destino): 公園に 行きます.' },
    { id: 'n5-mock-gram-25', number: 25, prompt: '【25】', choices: [{ n: 1, text: 'でも' }, { n: 2, text: 'それから' }, { n: 3, text: 'だから' }, { n: 4, text: 'では' }], answer: 3, translationPt: 'Por isso, quero ficar ainda melhor em japonês.', explanationPt: 'だから = por isso (conclusão). A vida é divertida, por isso quer estudar mais.' },
  ],
}

const grammar: Section = {
  id: 'grammar',
  level: 'N5-mock',
  titleJa: 'げんごちしき（ぶんぽう）',
  titlePt: 'Gramática',
  summaryPt:
    'Simulado autoral N5 (gramática): forma gramatical, montagem de frases (★) e gramática no texto. 25 questões originais.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (文法)',
      bodyPt:
        '- **もんだい1** — escolher a **partícula/forma** que preenche a lacuna `（　）`.\n- **もんだい2** — **ordenar** 4 fragmentos; responder qual fica na posição **★**.\n- **もんだい3** — **cloze**: preencher as lacunas de um texto pensando no sentido.',
    },
  ],
  groups: [gramM1, gramM2, gramM3],
}

// ---------------------------------------------------------------------
//  読解 — Reading
// ---------------------------------------------------------------------
const readM4: ExerciseGroup = {
  id: 'n5-mock-read-m4',
  title: 'もんだい4',
  subtitlePt: 'Compreensão de texto curto',
  instructionJa: 'つぎの (1)から(3)の ぶんしょうを 読んで、しつもんに こたえてください。',
  instructionPt: 'Leia cada texto curto e responda à pergunta.',
  questions: [
    { id: 'n5-mock-read-26', number: 26, context: '（1）クラスの みなさんへ\nあしたは テストが あります。きょうかしょの 10ページから 20ページまでです。えんぴつと けしゴムを もって きて ください。じしょは つかいません。 — たなか', prompt: 'あした、{何|なに}を もって きますか。', choices: [{ n: 1, text: 'じしょと えんぴつ' }, { n: 2, text: 'えんぴつと けしゴム' }, { n: 3, text: 'きょうかしょと じしょ' }, { n: 4, text: 'ペンと けしゴム' }], answer: 2, translationPt: 'O que trazer amanhã?', explanationPt: 'O aviso pede «えんぴつと けしゴムを もって きて ください» (lápis e borracha); o dicionário NÃO será usado.' },
    { id: 'n5-mock-read-27', number: 27, context: '（2）リンさんへ\nあした いっしょに ひるごはんを たべませんか。12じに えきの まえで あいましょう。レストランは わたしが よやくします。へんじを ください。 — ヤン', prompt: 'メールを 読んで、リンさんは {何|なに}を しますか。', choices: [{ n: 1, text: 'レストランを よやくします。' }, { n: 2, text: 'ヤンさんに へんじを します。' }, { n: 3, text: '12じに うちで まちます。' }, { n: 4, text: 'ひとりで ひるごはんを たべます。' }], answer: 2, translationPt: 'Lendo o e-mail, o que a Lin vai fazer?', explanationPt: 'A mensagem termina com «へんじを ください» (me responda). Quem reserva o restaurante é o Yan.' },
    { id: 'n5-mock-read-28', number: 28, context: '（3）この としょかんは ごぜん 9じから ごご 5じまでです。日よう日は やすみです。本は 2しゅうかん かりる ことが できます。', prompt: 'この としょかんに ついて、ただしいのは どれですか。', choices: [{ n: 1, text: '日よう日も あいて います。' }, { n: 2, text: '本は 1かげつ かりられます。' }, { n: 3, text: 'ごご 6じまで あいて います。' }, { n: 4, text: '日よう日は しまって います。' }], answer: 4, translationPt: 'O que está correto sobre esta biblioteca?', explanationPt: '«日よう日は やすみです» = fecha aos domingos. Abre 9h–17h; empréstimo por 2 semanas.' },
  ],
}

const readM5: ExerciseGroup = {
  id: 'n5-mock-read-m5',
  title: 'もんだい5',
  subtitlePt: 'Compreensão de texto médio',
  instructionJa:
    'つぎの ぶんしょうを 読んで、しつもんに こたえてください。\n\nわたしは せんしゅうの 日よう日に かぞくと うみへ 行きました。あさ 早く うちを 出て、車で 3じかん かかりました。うみは とても きれいで、たくさん およぎました。ひるごはんは うみの 近くの レストランで さかなを たべました。とても おいしかったです。ごご、すこし さんぽを してから、うちへ かえりました。つかれましたが、たのしい 一日でした。',
  instructionPt: 'Leia o texto (um passeio de domingo à praia com a família) e responda.',
  questions: [
    { id: 'n5-mock-read-29', number: 29, prompt: 'この {人|ひと}は うみで {何|なに}を しましたか。', choices: [{ n: 1, text: 'さかなを つりました。' }, { n: 2, text: 'およぎました。' }, { n: 3, text: 'ねました。' }, { n: 4, text: 'かいものを しました。' }], answer: 2, translationPt: 'O que essa pessoa fez na praia?', explanationPt: '«たくさん およぎました» = nadou bastante. (Comeu peixe no restaurante, mas não pescou.)' },
    { id: 'n5-mock-read-30', number: 30, prompt: 'ひるごはんに {何|なに}を たべましたか。', choices: [{ n: 1, text: 'にく' }, { n: 2, text: 'やさい' }, { n: 3, text: 'さかな' }, { n: 4, text: 'パン' }], answer: 3, translationPt: 'O que comeu no almoço?', explanationPt: '«レストランで さかなを たべました» = comeu peixe.' },
  ],
}

const readM6: ExerciseGroup = {
  id: 'n5-mock-read-m6',
  title: 'もんだい6',
  subtitlePt: 'Busca de informação',
  instructionJa:
    '右の あんないを 見て、しつもんに こたえてください。\n\n【あおぞら りょうり きょうしつ】\n・わしょく（comida japonesa）：月よう日 10:00〜12:00 … 2000円\n・パン：水よう日 14:00〜16:00 … 1500円\n・ケーキ：土よう日 13:00〜15:00 … 2500円\n・こども りょうり：日よう日 10:00〜12:00 … 1000円\n※ はじめての 人は 500円 やすく なります。',
  instructionPt: 'Veja o aviso da “oficina de culinária Aozora” e responda.',
  questions: [
    { id: 'n5-mock-read-31', number: 31, prompt: '{田中|たなか}さんは はじめてです。土よう日の ケーキの きょうしつに {行|い}きます。いくら はらいますか。', choices: [{ n: 1, text: '1000円' }, { n: 2, text: '1500円' }, { n: 3, text: '2000円' }, { n: 4, text: '2500円' }], answer: 3, translationPt: 'O Tanaka é iniciante e vai à oficina de bolo de sábado. Quanto paga?', explanationPt: 'Bolo = 2500円, mas iniciante tem 500円 de desconto → 2000円.' },
  ],
}

const reading: Section = {
  id: 'reading',
  level: 'N5-mock',
  titleJa: 'どっかい',
  titlePt: 'Leitura',
  summaryPt:
    'Simulado autoral N5 (leitura): textos curtos, texto médio e busca de informação. 6 questões originais.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (読解)',
      bodyPt:
        '- **もんだい4** — textos **curtos** (avisos, e-mails).\n- **もんだい5** — texto **médio**; entenda o conteúdo.\n- **もんだい6** — **busca de informação** (folhetos, tabelas).',
    },
  ],
  groups: [readM4, readM5, readM6],
}

// ---------------------------------------------------------------------
//  聴解 — Listening (roteiro/texto; sem áudio por enquanto)
// ---------------------------------------------------------------------
const listenM1: ExerciseGroup = {
  id: 'n5-mock-listen-m1',
  title: 'もんだい1',
  subtitlePt: 'Compreensão de tarefa (pelo roteiro)',
  instructionJa: 'かいわを 読んで、しつもんに こたえてください。',
  instructionPt: 'Leia o diálogo (roteiro de áudio) e descubra o que a pessoa faz.',
  questions: [
    { id: 'n5-mock-listen-1', number: 1, context: 'おとこの{人|ひと}と おんなの{人|ひと}が はなして います。\nF：あした パーティーが ありますね。{何|なに}を もって いきましょうか。\nM：のみものは ぼくが かいます。たなかさんは おかしを おねがいします。\nF：わかりました。', prompt: 'おんなの{人|ひと}は {何|なに}を もって いきますか。', choices: [{ n: 1, text: 'のみもの' }, { n: 2, text: 'おかし' }, { n: 3, text: 'りょうり' }, { n: 4, text: 'はな' }], answer: 2, translationPt: 'O que a mulher vai levar?', explanationPt: 'O homem cuida das bebidas e pede à mulher os doces: «おかしを おねがいします».' },
    { id: 'n5-mock-listen-2', number: 2, context: 'せんせいが はなして います。\nM：あした 9じに きょうしつに きて ください。はじめに テストを します。テストの あとで、ビデオを みます。', prompt: 'がくせいは あした はじめに {何|なに}を しますか。', choices: [{ n: 1, text: 'ビデオを みる' }, { n: 2, text: 'テストを する' }, { n: 3, text: 'そうじを する' }, { n: 4, text: 'うたを うたう' }], answer: 2, translationPt: 'O que os alunos fazem primeiro amanhã?', explanationPt: '«はじめに テストを します» = primeiro a prova; o vídeo é depois.' },
    { id: 'n5-mock-listen-3', number: 3, context: 'みせの{人|ひと}と おんなの{人|ひと}が はなして います。\nF：すみません、この くろい かばんは いくらですか。\nM：3000円です。あおいのは 2500円ですよ。\nF：じゃ、あおいのを ください。', prompt: 'おんなの{人|ひと}は どの かばんを かいますか。', choices: [{ n: 1, text: 'くろい かばん' }, { n: 2, text: 'あおい かばん' }, { n: 3, text: 'あかい かばん' }, { n: 4, text: 'しろい かばん' }], answer: 2, translationPt: 'Qual bolsa a mulher compra?', explanationPt: 'Ela escolhe a azul: «あおいのを ください» (a azul, 2500円).' },
  ],
}

const listenM2: ExerciseGroup = {
  id: 'n5-mock-listen-m2',
  title: 'もんだい2',
  subtitlePt: 'Compreensão de ponto-chave (pelo roteiro)',
  instructionJa: 'かいわを 読んで、しつもんに こたえてください。',
  instructionPt: 'Leia o diálogo e escolha a informação específica pedida.',
  questions: [
    { id: 'n5-mock-listen-4', number: 4, context: 'おとこの{人|ひと}と おんなの{人|ひと}が はなして います。\nM：きのう どこへ {行|い}きましたか。\nF：デパートへ {行|い}きました。くつを かいました。\nM：えいがは みませんでしたか。\nF：いいえ、じかんが ありませんでした。', prompt: 'おんなの{人|ひと}は きのう {何|なに}を かいましたか。', choices: [{ n: 1, text: 'ふく' }, { n: 2, text: 'くつ' }, { n: 3, text: '本' }, { n: 4, text: 'とけい' }], answer: 2, translationPt: 'O que a mulher comprou ontem?', explanationPt: '«くつを かいました» = comprou sapatos. Não viu filme (sem tempo).' },
    { id: 'n5-mock-listen-5', number: 5, context: 'おんなの{人|ひと}と おとこの{人|ひと}が はなして います。\nF：たなかさんの たんじょうびは いつですか。\nM：6がつ 15にちです。\nF：そうですか。わたしは 7がつ 20にちです。', prompt: 'たなかさんの たんじょうびは いつですか。', choices: [{ n: 1, text: '6がつ15にち' }, { n: 2, text: '7がつ15にち' }, { n: 3, text: '6がつ20にち' }, { n: 4, text: '7がつ20にち' }], answer: 1, translationPt: 'Quando é o aniversário do Tanaka?', explanationPt: 'Ele diz «6がつ 15にち». 7月20日 é o aniversário dela.' },
    { id: 'n5-mock-listen-6', number: 6, context: 'がくせいが はなして います。\nM：やまださんは {何|なに}で がっこうへ きますか。\nF：いつも じてんしゃです。でも、あめの 日は バスで きます。\nM：きょうは あめですね。', prompt: 'おんなの{人|ひと}は きょう {何|なに}で がっこうへ きましたか。', choices: [{ n: 1, text: 'じてんしゃ' }, { n: 2, text: 'バス' }, { n: 3, text: 'でんしゃ' }, { n: 4, text: 'あるいて' }], answer: 2, translationPt: 'Como a mulher veio à escola hoje?', explanationPt: 'Normalmente de bicicleta, mas em dia de chuva vai de ônibus — e hoje está chovendo.' },
  ],
}

const listenM3: ExerciseGroup = {
  id: 'n5-mock-listen-m3',
  title: 'もんだい3',
  subtitlePt: 'Expressões em situação',
  instructionJa: 'ばめんを 読んで、なんと 言うか えらんでください。',
  instructionPt: 'Leia a situação e escolha o que dizer.',
  questions: [
    { id: 'n5-mock-listen-7', number: 7, prompt: 'ともだちの いえに {入|はい}ります。{何|なん}と 言いますか。', choices: [{ n: 1, text: 'おじゃまします。' }, { n: 2, text: 'おだいじに。' }, { n: 3, text: 'いってきます。' }], answer: 1, translationPt: 'Você entra na casa de um amigo. O que diz?', explanationPt: 'Ao entrar na casa de alguém: «おじゃまします» (com licença). おだいじに=melhoras, いってきます=já volto (ao sair).' },
    { id: 'n5-mock-listen-8', number: 8, prompt: 'みせで この ふくを かいたいです。みせの{人|ひと}に {何|なん}と 言いますか。', choices: [{ n: 1, text: 'これを ください。' }, { n: 2, text: 'これを どうぞ。' }, { n: 3, text: 'これは いりません。' }], answer: 1, translationPt: 'Você quer comprar esta roupa. O que diz ao atendente?', explanationPt: '«これを ください» = me dê isto (quero comprar). どうぞ=tome (oferecendo), いりません=não preciso.' },
    { id: 'n5-mock-listen-9', number: 9, prompt: 'あさ、{学校|がっこう}で せんせいに あいました。{何|なん}と 言いますか。', choices: [{ n: 1, text: 'おはようございます。' }, { n: 2, text: 'おやすみなさい。' }, { n: 3, text: 'さようなら。' }], answer: 1, translationPt: 'De manhã você encontra o professor na escola. O que diz?', explanationPt: 'De manhã: «おはようございます». おやすみなさい=boa noite (ao dormir), さようなら=adeus.' },
  ],
}

const listenM4: ExerciseGroup = {
  id: 'n5-mock-listen-m4',
  title: 'もんだい4',
  subtitlePt: 'Resposta rápida',
  instructionJa: 'はじめの ことばを 読んで、いちばん いい へんじを えらんでください。',
  instructionPt: 'Leia a fala e escolha a resposta mais natural.',
  questions: [
    { id: 'n5-mock-listen-10', number: 10, prompt: 'お{名前|なまえ}は？', choices: [{ n: 1, text: 'たなかです。' }, { n: 2, text: 'にほんです。' }, { n: 3, text: 'がくせいです。' }], answer: 1, translationPt: 'Qual é o seu nome?', explanationPt: 'お名前は？ pergunta o nome → «たなかです».' },
    { id: 'n5-mock-listen-11', number: 11, prompt: 'いっしょに ひるごはんを たべませんか。', choices: [{ n: 1, text: 'はい、たべました。' }, { n: 2, text: 'いいですね、たべましょう。' }, { n: 3, text: 'いいえ、ちがいます。' }], answer: 2, translationPt: 'Vamos almoçar juntos?', explanationPt: 'Convite 〜ませんか → aceitar: «いいですね、たべましょう».' },
    { id: 'n5-mock-listen-12', number: 12, prompt: 'これは だれの かさですか。', choices: [{ n: 1, text: 'わたしのです。' }, { n: 2, text: 'あそこです。' }, { n: 3, text: '3000円です。' }], answer: 1, translationPt: 'De quem é este guarda-chuva?', explanationPt: 'だれの〜 pergunta o dono → «わたしのです» (é meu).' },
    { id: 'n5-mock-listen-13', number: 13, prompt: 'どうも ありがとう。', choices: [{ n: 1, text: 'どういたしまして。' }, { n: 2, text: 'はじめまして。' }, { n: 3, text: 'おめでとう。' }], answer: 1, translationPt: 'Muito obrigado.', explanationPt: 'Resposta a um agradecimento: «どういたしまして» (de nada).' },
  ],
}

const listenAudios = [
  { id: 'n5-mock-listening-q1', title: 'もんだい１ — Compreensão de tarefa', src: '/audio/N5-mock/N5Q1.mp3' },
  { id: 'n5-mock-listening-q2', title: 'もんだい２ — Compreensão de ponto-chave', src: '/audio/N5-mock/N5Q2.mp3' },
  { id: 'n5-mock-listening-q3', title: 'もんだい３ — Expressões em situação', src: '/audio/N5-mock/N5Q3.mp3' },
  { id: 'n5-mock-listening-q4', title: 'もんだい４ — Resposta rápida', src: '/audio/N5-mock/N5Q4.mp3' },
].map((t) => ({
  ...t,
  descriptionPt: 'Áudio sintetizado por voz (TTS). O roteiro, as perguntas e as respostas estão na aba “Exercícios”.',
  script: [],
}))

const listening: Section = {
  id: 'listening',
  level: 'N5-mock',
  titleJa: 'ちょうかい',
  titlePt: 'Audição',
  summaryPt:
    'Simulado autoral N5 (audição). Quatro tipos (tarefa, ponto-chave, expressões, resposta rápida), 13 itens. Áudio sintetizado por voz (TTS) na aba “Áudios”; o roteiro e as perguntas ficam na aba “Exercícios”.',
  studyNotes: [
    {
      title: 'Áudio (TTS) + roteiro',
      bodyPt:
        'Esta leva é autoral. O **áudio** de 聴解 é **sintetizado por voz (TTS)** — ouça na aba **“Áudios”**. O **roteiro**, as **perguntas** e as **respostas** estão na aba **“Exercícios”** (com explicações em pt-BR). Os quatro tipos seguem o formato do exame: tarefa, ponto-chave, expressões e resposta rápida.',
    },
  ],
  groups: [listenM1, listenM2, listenM3, listenM4],
  audios: listenAudios,
}

export const n5_mock: Level = {
  id: 'N5-mock',
  courseId: 'jlpt',
  titlePt: 'N5 — Simulado autoral',
  descriptionPt:
    'Simulado de prática do N5 com questões originais (autorais) no formato JLPT, para treinar além dos simulados oficiais. Explicações em pt-BR. A audição tem áudio sintetizado por voz (TTS).',
  sections: [vocabulary, grammar, reading, listening],
}
