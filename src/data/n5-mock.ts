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

export const n5_mock: Level = {
  id: 'N5-mock',
  courseId: 'jlpt',
  titlePt: 'N5 — Simulado autoral',
  descriptionPt:
    'Simulado de prática do N5 com questões originais (autorais) no formato JLPT, para treinar além dos simulados oficiais. Explicações em pt-BR. (Em construção: 文法・読解 e 聴解 serão adicionados.)',
  sections: [vocabulary],
}
