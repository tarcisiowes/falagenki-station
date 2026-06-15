import type { ExerciseGroup, Level, Section } from './types'

// =====================================================================
//  N5 — Leva 2 (Simulado 2012)
//  Conteúdo fiel ao "Japanese-Language Proficiency Test Official Practice
//  Workbook" (2012) do JLPT (Japan Foundation / JEES).
//  Fonte: docs/jlpt-source/N5-2012 (PDFs + MP3 oficiais, jlpt.jp).
//  Respostas conferidas pelo gabarito oficial (正答表 / N5answer.pdf).
//  Traduções e explicações em pt-BR são autorais.
// =====================================================================

const vocabM1: ExerciseGroup = {
  id: 'n5-2012-vocab-m1',
  title: 'もんだい1',
  subtitlePt: 'Leitura de kanji',
  instructionJa: '＿＿の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se lê (em hiragana) a palavra sublinhada? Escolha a melhor opção entre 1 e 4.',
  example: {
    prompt: '[[大きな]] えが あります。',
    choices: [{ n: 1, text: 'おおきな' }, { n: 2, text: 'おきな' }, { n: 3, text: 'だいきな' }, { n: 4, text: 'たいきな' }],
    answer: 1,
    note: '大きな = おおきな (grande). Atenção ao お longo: おお.',
  },
  questions: [
    { id: 'n5-2012-vocab-1', number: 1, prompt: '[[先週]] デパートに かいものに いきました。', choices: [{ n: 1, text: 'せんしゅ' }, { n: 2, text: 'せんしゅう' }, { n: 3, text: 'ぜんしゅ' }, { n: 4, text: 'ぜんしゅう' }], answer: 2, translationPt: 'Semana passada fui fazer compras no shopping/loja de departamentos.', explanationPt: '先週 = せんしゅう (semana passada). Sem dakuten (せん, não ぜん) e com う longo (しゅう).' },
    { id: 'n5-2012-vocab-2', number: 2, prompt: 'ごはんの [[後]]で さんぽします。', choices: [{ n: 1, text: 'つぎ' }, { n: 2, text: 'うしろ' }, { n: 3, text: 'まえ' }, { n: 4, text: 'あと' }], answer: 4, translationPt: 'Depois da refeição vou passear.', explanationPt: '〜の 後で = あとで (depois de). 後 também se lê うしろ (atrás, no espaço), mas aqui é tempo: あと.' },
    { id: 'n5-2012-vocab-3', number: 3, prompt: 'もう いちど [[言って]] ください。', choices: [{ n: 1, text: 'いって' }, { n: 2, text: 'きって' }, { n: 3, text: 'まって' }, { n: 4, text: 'たって' }], answer: 1, translationPt: 'Diga mais uma vez, por favor.', explanationPt: '言う = いう (dizer); na te-form, 言って = いって. きって=cortar, まって=esperar, たって=ficar de pé.' },
    { id: 'n5-2012-vocab-4', number: 4, prompt: 'ちかくに [[山]]が あります。', choices: [{ n: 1, text: 'かわ' }, { n: 2, text: 'やま' }, { n: 3, text: 'いけ' }, { n: 4, text: 'うみ' }], answer: 2, translationPt: 'Há uma montanha por perto.', explanationPt: '山 = やま (montanha). かわ=rio, いけ=lago/açude, うみ=mar.' },
    { id: 'n5-2012-vocab-5', number: 5, prompt: 'この ホテルは へやが [[多い]]です。', choices: [{ n: 1, text: 'すくない' }, { n: 2, text: 'おおい' }, { n: 3, text: 'せまい' }, { n: 4, text: 'ひろい' }], answer: 2, translationPt: 'Este hotel tem muitos quartos.', explanationPt: '多い = おおい (muito/numeroso). すくない=pouco, せまい=apertado, ひろい=amplo.' },
    { id: 'n5-2012-vocab-6', number: 6, prompt: 'ともだちと いっしょに [[学校]]に いきます。', choices: [{ n: 1, text: 'がこう' }, { n: 2, text: 'がこお' }, { n: 3, text: 'がっこう' }, { n: 4, text: 'がっこお' }], answer: 3, translationPt: 'Vou à escola junto com um amigo.', explanationPt: '学校 = がっこう (escola). Tem っ (pausa) e う longo: がっこう.' },
    { id: 'n5-2012-vocab-7', number: 7, prompt: 'えんぴつが [[六本]] あります。', choices: [{ n: 1, text: 'ろくぼん' }, { n: 2, text: 'ろくぽん' }, { n: 3, text: 'ろっぼん' }, { n: 4, text: 'ろっぽん' }], answer: 4, translationPt: 'Há seis lápis.', explanationPt: '六本 = ろっぽん (seis objetos longos). 六 vira ろっ e 本 vira ぽん (som p) neste contador.' },
    { id: 'n5-2012-vocab-8', number: 8, prompt: 'この [[新聞]]は いくらですか。', choices: [{ n: 1, text: 'しんむん' }, { n: 2, text: 'しんぶん' }, { n: 3, text: 'しむん' }, { n: 4, text: 'しぶん' }], answer: 2, translationPt: 'Quanto custa este jornal?', explanationPt: '新聞 = しんぶん (jornal). Com ん (しん) e ぶ (com dakuten).' },
    { id: 'n5-2012-vocab-9', number: 9, prompt: 'この カメラは [[安い]]です。', choices: [{ n: 1, text: 'たかい' }, { n: 2, text: 'やすい' }, { n: 3, text: 'おもい' }, { n: 4, text: 'かるい' }], answer: 2, translationPt: 'Esta câmera é barata.', explanationPt: '安い = やすい (barato). たかい=caro/alto, おもい=pesado, かるい=leve.' },
    { id: 'n5-2012-vocab-10', number: 10, prompt: 'かさは [[外]]に あります。', choices: [{ n: 1, text: 'いえ' }, { n: 2, text: 'なか' }, { n: 3, text: 'そと' }, { n: 4, text: 'にわ' }], answer: 3, translationPt: 'O guarda-chuva está lá fora.', explanationPt: '外 = そと (fora/lado de fora). なか=dentro, いえ=casa, にわ=quintal.' },
  ],
}

const vocabM2: ExerciseGroup = {
  id: 'n5-2012-vocab-m2',
  title: 'もんだい2',
  subtitlePt: 'Escrita correta (kanji/katakana)',
  instructionJa: '＿＿の ことばは どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se escreve a palavra sublinhada (em kanji ou katakana)? Escolha a melhor opção.',
  questions: [
    { id: 'n5-2012-vocab-11', number: 11, prompt: 'けさ [[しゃわー]]を あびました。', choices: [{ n: 1, text: 'シャワー' }, { n: 2, text: 'シャウー' }, { n: 3, text: 'ツャワー' }, { n: 4, text: 'ツャウー' }], answer: 1, translationPt: 'Hoje de manhã tomei banho de chuveiro.', explanationPt: 'シャワー (shower = chuveiro). Cuidado: シャ (não ツャ) e ワ (não ウ).' },
    { id: 'n5-2012-vocab-12', number: 12, prompt: 'コーヒーを [[のみました]]。', choices: [{ n: 1, text: '飯みました' }, { n: 2, text: '飲みました' }, { n: 3, text: '飮みました' }, { n: 4, text: '餃みました' }], answer: 2, translationPt: 'Bebi café.', explanationPt: 'のむ = 飲む (beber); passado 飲みました. 飯 (めし/はん) = arroz/refeição é um kanji parecido, mas errado aqui.' },
    { id: 'n5-2012-vocab-13', number: 13, prompt: 'あたらしい [[くるま]]を かいました。', choices: [{ n: 1, text: '卓' }, { n: 2, text: '東' }, { n: 3, text: '車' }, { n: 4, text: '軍' }], answer: 3, translationPt: 'Comprei um carro novo.', explanationPt: 'くるま = 車 (carro). 東=leste, 軍=exército, 卓=mesa — kanji de forma parecida.' },
    { id: 'n5-2012-vocab-14', number: 14, prompt: 'この ぼうしは [[1000えん]]です。', choices: [{ n: 1, text: '1000内' }, { n: 2, text: '1000用' }, { n: 3, text: '1000冊' }, { n: 4, text: '1000円' }], answer: 4, translationPt: 'Este chapéu custa 1000 ienes.', explanationPt: 'えん = 円 (iene). 内=dentro, 用=uso, 冊=contador de livros.' },
    { id: 'n5-2012-vocab-15', number: 15, prompt: 'しゅくだいが [[はんぶん]] おわりました。', choices: [{ n: 1, text: '羊分' }, { n: 2, text: '美分' }, { n: 3, text: '平分' }, { n: 4, text: '半分' }], answer: 4, translationPt: 'Terminei metade da lição de casa.', explanationPt: 'はんぶん = 半分 (metade). 羊 (ovelha) é parecido com 半, mas errado.' },
    { id: 'n5-2012-vocab-16', number: 16, prompt: 'わたしの うちに [[きませんか]]。', choices: [{ n: 1, text: '来ませんか' }, { n: 2, text: '釆ませんか' }, { n: 3, text: '木ませんか' }, { n: 4, text: '未ませんか' }], answer: 1, translationPt: 'Não quer vir à minha casa?', explanationPt: 'くる = 来る (vir); 来ませんか = não quer vir? 木=árvore, 未=ainda não — formas parecidas.' },
    { id: 'n5-2012-vocab-17', number: 17, prompt: 'きのう たなかさんと [[あいました]]。', choices: [{ n: 1, text: '見いました' }, { n: 2, text: '書いました' }, { n: 3, text: '会いました' }, { n: 4, text: '話いました' }], answer: 3, translationPt: 'Ontem encontrei o Tanaka.', explanationPt: 'あう = 会う (encontrar-se); 会いました. 見る=ver, 書く=escrever, 話す=falar.' },
    { id: 'n5-2012-vocab-18', number: 18, prompt: 'いもうとと [[おなじ]] ふくを かいました。', choices: [{ n: 1, text: '同じ' }, { n: 2, text: '回じ' }, { n: 3, text: '円じ' }, { n: 4, text: '固じ' }], answer: 1, translationPt: 'Comprei a mesma roupa que a da minha irmã mais nova.', explanationPt: 'おなじ = 同じ (igual/mesmo). 回 (vez) é parecido, mas errado.' },
  ],
}

const vocabM3: ExerciseGroup = {
  id: 'n5-2012-vocab-m3',
  title: 'もんだい3',
  subtitlePt: 'Vocabulário (preencher a lacuna)',
  instructionJa: '（　）に なにを いれますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a palavra mais adequada.',
  example: {
    prompt: 'あそこで バスに （　）。',
    choices: [{ n: 1, text: 'のりました' }, { n: 2, text: 'あがりました' }, { n: 3, text: 'つきました' }, { n: 4, text: 'はいりました' }],
    answer: 1,
    note: 'バスに のる = pegar/subir no ônibus → のりました.',
  },
  questions: [
    { id: 'n5-2012-vocab-19', number: 19, prompt: 'わたしの へやは この （　）の ２かいです。', choices: [{ n: 1, text: 'エレベーター' }, { n: 2, text: 'プール' }, { n: 3, text: 'エアコン' }, { n: 4, text: 'アパート' }], answer: 4, translationPt: 'Meu quarto fica no 2º andar deste prédio (apartamento).', explanationPt: 'アパート = prédio de apartamentos (onde se mora). プール=piscina, エアコン=ar-condicionado.' },
    { id: 'n5-2012-vocab-20', number: 20, prompt: 'さとうさんは ギターを じょうずに （　）。', choices: [{ n: 1, text: 'うたいます' }, { n: 2, text: 'ききます' }, { n: 3, text: 'ひきます' }, { n: 4, text: 'あそびます' }], answer: 3, translationPt: 'O Sato toca violão muito bem.', explanationPt: 'ギターを ひく = tocar violão → ひきます. うたう=cantar, きく=ouvir, あそぶ=brincar.' },
    { id: 'n5-2012-vocab-21', number: 21, prompt: 'テーブルに おさらと はしを （　） ください。', choices: [{ n: 1, text: 'ならべて' }, { n: 2, text: 'とって' }, { n: 3, text: 'たべて' }, { n: 4, text: 'あらって' }], answer: 1, translationPt: 'Arrume os pratos e os hashis na mesa, por favor.', explanationPt: 'ならべる = pôr em ordem/arrumar (lado a lado). とる=pegar, たべる=comer, あらう=lavar.' },
    { id: 'n5-2012-vocab-22', number: 22, prompt: 'けさ そうじを したから へやは （　）です。', choices: [{ n: 1, text: 'きれい' }, { n: 2, text: 'きたない' }, { n: 3, text: 'あかるい' }, { n: 4, text: 'くらい' }], answer: 1, translationPt: 'Como limpei de manhã, o quarto está limpo.', explanationPt: 'そうじ (limpeza) → へやは きれい (limpo/arrumado). きたない=sujo, あかるい=claro, くらい=escuro.' },
    { id: 'n5-2012-vocab-23', number: 23, prompt: 'きょうは 500（　） およぎました。', choices: [{ n: 1, text: 'ど' }, { n: 2, text: 'ばん' }, { n: 3, text: 'メートル' }, { n: 4, text: 'グラム' }], answer: 3, translationPt: 'Hoje nadei 500 metros.', explanationPt: 'メートル = metro (distância). ど=graus, ばん=número/ordem, グラム=grama (peso).' },
    { id: 'n5-2012-vocab-24', number: 24, prompt: 'えきから たいしかんまでの （　）を かいて ください。', choices: [{ n: 1, text: 'しゃしん' }, { n: 2, text: 'ちず' }, { n: 3, text: 'てがみ' }, { n: 4, text: 'きっぷ' }], answer: 2, translationPt: 'Desenhe o mapa da estação até a embaixada, por favor.', explanationPt: 'ちず = mapa (かく = desenhar). しゃしん=foto, てがみ=carta, きっぷ=bilhete.' },
    { id: 'n5-2012-vocab-25', number: 25, prompt: 'うるさいから テレビを （　） ください。', choices: [{ n: 1, text: 'けして' }, { n: 2, text: 'つけて' }, { n: 3, text: 'しめて' }, { n: 4, text: 'あけて' }], answer: 1, translationPt: 'Está barulhento, então desligue a TV, por favor.', explanationPt: 'けす = desligar → けして. つける=ligar, しめる=fechar, あける=abrir.' },
    { id: 'n5-2012-vocab-26', number: 26, prompt: 'きょうは （　）が ふって います。', choices: [{ n: 1, text: 'くもり' }, { n: 2, text: 'はれ' }, { n: 3, text: 'かぜ' }, { n: 4, text: 'ゆき' }], answer: 4, translationPt: 'Hoje está nevando.', explanationPt: '〜が ふる (cair, do céu) combina com ゆき (neve) ou あめ (chuva). くもり=nublado, はれ=sol, かぜ=vento.' },
    { id: 'n5-2012-vocab-27', number: 27, prompt: 'はこに りんごが （　） あります。', choices: [{ n: 1, text: 'よっつ' }, { n: 2, text: 'いつつ' }, { n: 3, text: 'むっつ' }, { n: 4, text: 'ななつ' }], answer: 2, translationPt: 'Há cinco maçãs na caixa.', explanationPt: 'Pela imagem há 5 maçãs → いつつ (cinco, contagem nativa). よっつ=4, むっつ=6, ななつ=7.' },
    { id: 'n5-2012-vocab-28', number: 28, prompt: 'めがねは つくえの （　）に あります。', choices: [{ n: 1, text: 'そば' }, { n: 2, text: 'よこ' }, { n: 3, text: 'した' }, { n: 4, text: 'うえ' }], answer: 4, translationPt: 'Os óculos estão em cima da mesa.', explanationPt: 'Pela imagem, os óculos estão sobre a mesa → うえ (em cima). そば/よこ=ao lado, した=embaixo.' },
  ],
}

const vocabM4: ExerciseGroup = {
  id: 'n5-2012-vocab-m4',
  title: 'もんだい4',
  subtitlePt: 'Frase de sentido equivalente',
  instructionJa: '＿＿の ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Escolha a frase com sentido mais parecido com a frase sublinhada.',
  example: {
    prompt: 'ここは [[でぐち]]です。いりぐちは あちらです。',
    choices: [{ n: 1, text: 'あちらから でて ください。' }, { n: 2, text: 'あちらから おりて ください。' }, { n: 3, text: 'あちらから はいって ください。' }, { n: 4, text: 'あちらから わたって ください。' }],
    answer: 3,
    note: 'でぐち=saída, いりぐち=entrada. Pela entrada se 入る (はいって).',
  },
  questions: [
    { id: 'n5-2012-vocab-29', number: 29, prompt: 'まいばん くにの かぞくに [[でんわします]]。', choices: [{ n: 1, text: 'よるは ときどき くにの かぞくに でんわします。' }, { n: 2, text: 'あさは ときどき くにの かぞくに でんわします。' }, { n: 3, text: 'よるは いつも くにの かぞくに でんわします。' }, { n: 4, text: 'あさは いつも くにの かぞくに でんわします。' }], answer: 3, translationPt: 'Toda noite ligo para a família no meu país.', explanationPt: 'まいばん = toda noite = よる + いつも (sempre). Por isso “よるは いつも”.' },
    { id: 'n5-2012-vocab-30', number: 30, prompt: 'この まちは [[ゆうめいな たてもの]]が あります。', choices: [{ n: 1, text: 'この まちには ゆうめいな ビルが あります。' }, { n: 2, text: 'この まちには ゆうめいな おちゃが あります。' }, { n: 3, text: 'この まちには ゆうめいな ケーキが あります。' }, { n: 4, text: 'この まちには ゆうめいな こうえんが あります。' }], answer: 1, translationPt: 'Esta cidade tem prédios/construções famosos.', explanationPt: 'たてもの = construção/prédio = ビル (edifício). おちゃ=chá, ケーキ=bolo, こうえん=parque.' },
    { id: 'n5-2012-vocab-31', number: 31, prompt: 'その えいがは [[おもしろくなかった]]です。', choices: [{ n: 1, text: 'その えいがは たのしかったです。' }, { n: 2, text: 'その えいがは つまらなかったです。' }, { n: 3, text: 'その えいがは みじかかったです。' }, { n: 4, text: 'その えいがは ながかったです。' }], answer: 2, translationPt: 'Aquele filme não foi interessante.', explanationPt: 'おもしろくない (não interessante) = つまらない (chato/sem graça). みじかい=curto, ながい=longo.' },
    { id: 'n5-2012-vocab-32', number: 32, prompt: 'たんじょうびは [[6がつ15にち]]です。', choices: [{ n: 1, text: '6がつ15にちに けっこんしました。' }, { n: 2, text: '6がつ15にちに テストが はじまりました。' }, { n: 3, text: '6がつ15にちに うまれました。' }, { n: 4, text: '6がつ15にちに くにへ かえりました。' }], answer: 3, translationPt: 'Meu aniversário é 15 de junho.', explanationPt: 'たんじょうび (aniversário) = dia em que うまれる (nascer) → うまれました. けっこん=casar, かえる=voltar.' },
    { id: 'n5-2012-vocab-33', number: 33, prompt: '[[にねんまえ]]に きょうとへ いきました。', choices: [{ n: 1, text: 'きのう きょうとへ いきました。' }, { n: 2, text: 'おととい きょうとへ いきました。' }, { n: 3, text: 'きょねん きょうとへ いきました。' }, { n: 4, text: 'おととし きょうとへ いきました。' }], answer: 4, translationPt: 'Há dois anos fui a Kyoto.', explanationPt: '2ねんまえ = dois anos atrás = おととし (ano retrasado). きのう=ontem, おととい=anteontem, きょねん=ano passado.' },
  ],
}

const vocabulary: Section = {
  id: 'vocabulary',
  level: 'N5-2012',
  titleJa: 'げんごちしき（もじ・ごい）',
  titlePt: 'Vocabulário e Escrita',
  summaryPt:
    'Conhecimento da língua (caracteres e vocabulário) do simulado oficial 2012: leitura de kanji, escrita correta, escolha da palavra e frases equivalentes. 33 questões.',
  studyNotes: [
    {
      title: 'Sobre esta leva (Simulado 2012)',
      bodyPt:
        'Estas questões vêm do **Official Practice Workbook (2012)** do JLPT N5, publicado pela Japan Foundation — mesmo formato da prova real. Os **gabaritos** seguem o 正答表 oficial; as **traduções e explicações** em pt-BR são autorais.\n\nA seção もじ・ごい tem quatro partes:\n\n- **もんだい1** — ler o kanji sublinhado e escolher a **leitura em hiragana**.\n- **もんだい2** — ver a palavra em hiragana e escolher a **escrita em kanji/katakana**.\n- **もんだい3** — preencher a lacuna `（　）` com a **palavra** adequada.\n- **もんだい4** — escolher a frase de **sentido equivalente**.',
    },
  ],
  groups: [vocabM1, vocabM2, vocabM3, vocabM4],
}

// ---------------------------------------------------------------------
//  言語知識（文法）・読解 — Grammar
// ---------------------------------------------------------------------
const gramM1: ExerciseGroup = {
  id: 'n5-2012-gram-m1',
  title: 'もんだい1',
  subtitlePt: 'Forma gramatical (preencher a lacuna)',
  instructionJa: '（　）に 何を 入れますか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a melhor partícula/forma.',
  example: {
    prompt: 'これ（　）えんぴつです。',
    choices: [{ n: 1, text: 'に' }, { n: 2, text: 'を' }, { n: 3, text: 'は' }, { n: 4, text: 'や' }],
    answer: 3,
    note: 'これは えんぴつです (Isto é um lápis). Tópico = は.',
  },
  questions: [
    { id: 'n5-2012-gram-1', number: 1, prompt: '日本（　）ラーメンは おいしいです。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'の' }, { n: 3, text: 'を' }, { n: 4, text: 'へ' }], answer: 2, translationPt: 'O lámen do Japão é gostoso.', explanationPt: '日本の ラーメン = lámen do Japão (の liga dois substantivos: posse/origem).' },
    { id: 'n5-2012-gram-2', number: 2, prompt: 'わたしには きょうだいが 二人 います。弟（　）妹です。', choices: [{ n: 1, text: 'は' }, { n: 2, text: 'も' }, { n: 3, text: 'と' }, { n: 4, text: 'か' }], answer: 3, translationPt: 'Tenho dois irmãos: um irmão mais novo e uma irmã mais nova.', explanationPt: '弟と妹 = irmão E irmã (と liga substantivos numa lista completa).' },
    { id: 'n5-2012-gram-3', number: 3, prompt: '山下「田中さん（　）きのう どこかに 出かけましたか。」田中「いいえ、いえに いました。」', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'は' }, { n: 3, text: 'を' }, { n: 4, text: 'に' }], answer: 2, translationPt: '— Tanaka, você saiu para algum lugar ontem? — Não, fiquei em casa.', explanationPt: '田中さんは = o Tanaka (tópico/sujeito da pergunta). は marca o tema.' },
    { id: 'n5-2012-gram-4', number: 4, prompt: '（タクシーで）A「つぎの かどを 右（　）まがって ください。」B「わかりました。」', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'や' }, { n: 3, text: 'か' }, { n: 4, text: 'に' }], answer: 4, translationPt: '(No táxi) — Vire à direita na próxima esquina. — Entendi.', explanationPt: '右に まがる = virar para a direita (に indica direção/destino do movimento).' },
    { id: 'n5-2012-gram-5', number: 5, prompt: 'きのう、わたしは ひとり（　）えいがを 見に 行きました。', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'を' }, { n: 3, text: 'で' }, { n: 4, text: 'は' }], answer: 3, translationPt: 'Ontem fui ver um filme sozinho.', explanationPt: 'ひとりで = sozinho (で indica modo/condição em que a ação ocorre).' },
    { id: 'n5-2012-gram-6', number: 6, prompt: '山下「今日 パーティーが ありますから、田中さん（　）来て ください。」田中「ありがとうございます。」', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'も' }, { n: 3, text: 'や' }, { n: 4, text: 'で' }], answer: 2, translationPt: '— Hoje tem festa, então venha você também, Tanaka. — Obrigado.', explanationPt: '田中さんも = o Tanaka também (も = também).' },
    { id: 'n5-2012-gram-7', number: 7, prompt: '田中「この ぼうしは 山田さん（　）ですか。」山田「はい。」', choices: [{ n: 1, text: 'や' }, { n: 2, text: 'は' }, { n: 3, text: 'の' }, { n: 4, text: 'か' }], answer: 3, translationPt: '— Este chapéu é do Yamada? — Sim.', explanationPt: '山田さんの = do Yamada (の indica posse; aqui "o (chapéu) do Yamada").' },
    { id: 'n5-2012-gram-8', number: 8, prompt: '駅まで タクシーで 1000円（　）です。', choices: [{ n: 1, text: 'ぐらい' }, { n: 2, text: 'など' }, { n: 3, text: 'ごろ' }, { n: 4, text: 'も' }], answer: 1, translationPt: 'Até a estação, de táxi, custa uns 1000 ienes.', explanationPt: '1000円ぐらい = cerca de 1000 ienes (ぐらい = aprox. quantidade). ごろ é aprox. de tempo (hora).' },
    { id: 'n5-2012-gram-9', number: 9, prompt: 'A「さようなら。」B「さようなら。また（　）。」', choices: [{ n: 1, text: 'おととい' }, { n: 2, text: '今日' }, { n: 3, text: '来週' }, { n: 4, text: '今月' }], answer: 3, translationPt: '— Tchau. — Tchau. Até a semana que vem.', explanationPt: 'また + tempo futuro = até... 来週 (semana que vem). おととい=anteontem (passado).' },
    { id: 'n5-2012-gram-10', number: 10, prompt: 'わたしの 母は 50さいです。父は 55さいです。母は 父（　）5さい わかいです。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まで' }, { n: 3, text: 'より' }, { n: 4, text: 'のほうが' }], answer: 3, translationPt: 'Minha mãe tem 50 anos; meu pai, 55. A mãe é 5 anos mais nova que o pai.', explanationPt: 'AはBより〜 = A é mais 〜 que B (より = do que, na comparação).' },
    { id: 'n5-2012-gram-11', number: 11, prompt: '子ども「いただきます。」母「あ、食べる（　）手を あらいましょう。」', choices: [{ n: 1, text: 'まえに' }, { n: 2, text: 'のまえに' }, { n: 3, text: 'あとに' }, { n: 4, text: 'のあとに' }], answer: 1, translationPt: '— Vou comer! — Ah, antes de comer vamos lavar as mãos.', explanationPt: 'verbo (dicionário) + まえに = antes de fazer algo: 食べる まえに. Com substantivo seria 〜の まえに.' },
    { id: 'n5-2012-gram-12', number: 12, prompt: 'A「東京でも 雪が ふりますか。」B「ええ、ふりますよ。でも、きょねんは あまり（　）。」', choices: [{ n: 1, text: 'ふりませんでした' }, { n: 2, text: 'ふりません' }, { n: 3, text: 'ふりました' }, { n: 4, text: 'ふります' }], answer: 1, translationPt: '— Em Tóquio também neva? — Sim, neva. Mas ano passado não nevou muito.', explanationPt: 'きょねん (ano passado) pede passado; あまり〜ない = não muito → passado negativo ふりませんでした.' },
    { id: 'n5-2012-gram-13', number: 13, prompt: '（川で）A「見て ください。小さな 魚が たくさん（　）よ。」B「ほんとうですね。30ぴき くらい いますね。」', choices: [{ n: 1, text: 'およぎます' }, { n: 2, text: 'およぎません' }, { n: 3, text: 'およぎました' }, { n: 4, text: 'およいで います' }], answer: 4, translationPt: '(No rio) — Olha! Tem muitos peixinhos nadando. — É mesmo, devem ser uns 30.', explanationPt: 'およいで います = estão nadando (て+いる = ação em andamento, cena atual).' },
    { id: 'n5-2012-gram-14', number: 14, prompt: '中川「山田さんの その カメラは いいですね。どこで かいましたか。」山田「いえ、これは 兄に（　）。」', choices: [{ n: 1, text: 'あげました' }, { n: 2, text: 'もらいました' }, { n: 3, text: 'うりました' }, { n: 4, text: 'かいました' }], answer: 2, translationPt: '— Que câmera boa, Yamada. Onde comprou? — Não, esta eu ganhei do meu irmão.', explanationPt: '兄に もらいました = ganhei do meu irmão (Aに もらう = receber de A). あげる=dar, うる=vender.' },
    { id: 'n5-2012-gram-15', number: 15, prompt: 'たまごりょうりの じょうずな 作りかたを（　）読みました。', choices: [{ n: 1, text: '何に' }, { n: 2, text: '何も' }, { n: 3, text: '何かへ' }, { n: 4, text: '何かで' }], answer: 4, translationPt: 'Li em algum lugar um bom modo de preparar pratos com ovo.', explanationPt: '何かで = em algo / em alguma fonte (livro, site...). で indica meio/lugar onde se leu.' },
    { id: 'n5-2012-gram-16', number: 16, prompt: '（電話で）本田「はい、本田です。」北山「あ、北山花子です。すみません、（　）。」本田「はい。ちょっと まって くださいね。」', choices: [{ n: 1, text: 'ひろこさんを おねがいします' }, { n: 2, text: 'ひろこさんを ください' }, { n: 3, text: 'ひろこさんと 話しますか' }, { n: 4, text: 'ひろこさんと 話しませんか' }], answer: 1, translationPt: '(Ao telefone) — Alô, é a casa dos Honda. — Ah, aqui é a Hanako Kitayama. Por favor, queria falar com a Hiroko. — Sim, um momento.', explanationPt: '〜を おねがいします = ao telefone, "queria falar com 〜, por favor". ください seria para objetos.' },
  ],
}

const gramM2: ExerciseGroup = {
  id: 'n5-2012-gram-m2',
  title: 'もんだい2',
  subtitlePt: 'Montagem da frase (★)',
  instructionJa: '★に 入る ものは どれですか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'Ordene os fragmentos. Qual entra na posição ★? (A explicação mostra a frase montada.)',
  example: {
    prompt: 'A「＿＿ ＿＿ ★ ＿＿ か。」B「山田さんです。」',
    choices: [{ n: 1, text: 'です' }, { n: 2, text: 'は' }, { n: 3, text: 'あの 人' }, { n: 4, text: 'だれ' }],
    answer: 1,
    note: 'Ordem: あの人 は だれ です か → ★ = です (1).',
  },
  questions: [
    { id: 'n5-2012-gram-17', number: 17, prompt: '（店で）田中「すみません。くだもの ＿＿ ＿＿ ★ ＿＿ か。」店の人「こちらです。」', choices: [{ n: 1, text: 'どこ' }, { n: 2, text: 'あります' }, { n: 3, text: 'は' }, { n: 4, text: 'に' }], answer: 4, translationPt: '(Na loja) — Com licença, onde ficam as frutas? — Por aqui.', explanationPt: 'Ordem: くだもの は どこ に あります か (は3・どこ1・に4・あります2). ★ = に (4).' },
    { id: 'n5-2012-gram-18', number: 18, prompt: 'A「山下さんは？」B「となりの へやで ＿＿ ＿＿ ★ ＿＿ して います。」', choices: [{ n: 1, text: 'れんしゅう' }, { n: 2, text: 'の' }, { n: 3, text: 'ギター' }, { n: 4, text: 'を' }], answer: 1, translationPt: '— E o Yamashita? — Está praticando violão na sala ao lado.', explanationPt: 'Ordem: ギター の れんしゅう を して います (ギター3・の2・れんしゅう1・を4). ★ = れんしゅう (1).' },
    { id: 'n5-2012-gram-19', number: 19, prompt: 'A「会社 ＿＿ ＿＿ ★ ＿＿ 行って いますか。」B「わたしは あるいて 行って います。」', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'は' }, { n: 3, text: 'へ' }, { n: 4, text: '何' }], answer: 4, translationPt: '— Como você vai ao trabalho? — Eu vou a pé.', explanationPt: 'Ordem: 会社 へ は 何 で 行って いますか (へ3・は2・何4・で1). ★ = 何 (4).' },
    { id: 'n5-2012-gram-20', number: 20, prompt: '山田「ジョンさん、しゅくだいは ぜんぶ おわりましたか。」ジョン「いいえ、まだです。ここ ＿＿ ＿＿ ★ ＿＿、さいごの もんだいが むずかしいです。」', choices: [{ n: 1, text: 'は' }, { n: 2, text: 'かんたんでした' }, { n: 3, text: 'が' }, { n: 4, text: 'まで' }], answer: 2, translationPt: '— John, terminou toda a lição? — Não, ainda não. Até aqui foi fácil, mas a última questão é difícil.', explanationPt: 'Ordem: ここ まで は かんたんでした が (まで4・は1・かんたんでした2・が3). ★ = かんたんでした (2).' },
    { id: 'n5-2012-gram-21', number: 21, prompt: '（本屋で）ヤン「わたしは この 本を 買います。アンナさんは どんな 本が いいですか。」アンナ「わたしは もう 少し ＿＿ ＿＿ ★ ＿＿ が いいです。」', choices: [{ n: 1, text: '本' }, { n: 2, text: 'かんたんな' }, { n: 3, text: 'の' }, { n: 4, text: '日本語' }], answer: 2, translationPt: '(Na livraria) — Vou levar este livro. E você, Anna, que tipo de livro quer? — Eu prefiro um livro em japonês um pouco mais fácil.', explanationPt: 'Ordem: もう少し かんたんな 日本語 の 本 が いいです (かんたんな2・日本語4・の3・本1). ★ = かんたんな (2).' },
  ],
}

const gramM3: ExerciseGroup = {
  id: 'n5-2012-gram-m3',
  title: 'もんだい3',
  subtitlePt: 'Gramática no texto (cloze)',
  instructionJa:
    '22から26に 何を 入れますか。ぶんしょうの いみを かんがえて、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n【日本で べんきょうして いる 学生が「すきな 店」の ぶんしょうを 書いて、クラスの みんなの 前で 読みました。】\n\n（1）ケンさんの ぶんしょう：わたしは すしが すきです。日本には たくさん すし屋が あります。わたしの 国には すし屋が ありませんから、今 とても うれしいです。日本に【22】、いろいろな 店で 食べました。学校の 前の 店は、安くて おいしいです。すしが すきな 人は、いっしょに【23】。\n\n（2）ミンジさんの ぶんしょう：わたしは えきの ちかくの 本屋が すきです。えきの ちかくの 本屋は【24】 大きい お店です。外国の 本も 売って います。わたしの 国の 本も【25】。そして、外国の すきな りょうりの 本も 多いです。【26】、本は いつも えきの ちかくの 本屋で 買います。みなさんは すきな 本屋が ありますか。',
  instructionPt:
    'Leia os dois textos (estudantes apresentando sua "loja favorita") e escolha o que melhor preenche cada lacuna 22–26.',
  questions: [
    { id: 'n5-2012-gram-22', number: 22, prompt: '【22】', choices: [{ n: 1, text: '行くから' }, { n: 2, text: '行ってから' }, { n: 3, text: '来るから' }, { n: 4, text: '来てから' }], answer: 4, translationPt: 'Depois que vim ao Japão, comi (sushi) em vários lugares.', explanationPt: '日本に 来てから = depois que vim ao Japão (movimento até onde se fala = 来る; 〜てから = depois de).' },
    { id: 'n5-2012-gram-23', number: 23, prompt: '【23】', choices: [{ n: 1, text: '行きましたか' }, { n: 2, text: '行きませんか' }, { n: 3, text: '行って いましたか' }, { n: 4, text: '行って いませんか' }], answer: 2, translationPt: 'Quem gosta de sushi, vamos juntos?', explanationPt: '〜ませんか = convite ("não quer...?/vamos?"). いっしょに 行きませんか = vamos juntos?' },
    { id: 'n5-2012-gram-24', number: 24, prompt: '【24】', choices: [{ n: 1, text: 'か' }, { n: 2, text: 'と' }, { n: 3, text: 'の' }, { n: 4, text: 'は' }], answer: 4, translationPt: 'A livraria perto da estação é uma loja grande.', explanationPt: 'Retoma o tema com は: 本屋は ... 大きい お店です. は marca o tópico da frase.' },
    { id: 'n5-2012-gram-25', number: 25, prompt: '【25】', choices: [{ n: 1, text: 'います' }, { n: 2, text: '読みます' }, { n: 3, text: 'あります' }, { n: 4, text: 'します' }], answer: 3, translationPt: 'Também há livros do meu país.', explanationPt: 'Para objetos/coisas que existem usa-se あります. 本も あります = também há livros.' },
    { id: 'n5-2012-gram-26', number: 26, prompt: '【26】', choices: [{ n: 1, text: 'だから' }, { n: 2, text: 'では' }, { n: 3, text: 'それから' }, { n: 4, text: 'でも' }], answer: 1, translationPt: 'Por isso, sempre compro livros na livraria perto da estação.', explanationPt: 'だから = por isso (conclusão a partir do que foi dito). では=então, それから=e depois, でも=mas.' },
  ],
}

const grammar: Section = {
  id: 'grammar',
  level: 'N5-2012',
  titleJa: 'げんごちしき（ぶんぽう）',
  titlePt: 'Gramática',
  summaryPt:
    'Conhecimento da língua (gramática) do simulado oficial 2012: forma gramatical, montagem de frases (★) e gramática no texto. 26 questões.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (文法)',
      bodyPt:
        '- **もんだい1** — escolher a **partícula/forma** que preenche a lacuna `（　）`.\n- **もんだい2** — **ordenar** 4 fragmentos; responder qual fica na posição **★** (a explicação mostra a frase montada).\n- **もんだい3** — **cloze**: preencher as lacunas de um texto pensando no sentido geral.',
    },
  ],
  groups: [gramM1, gramM2, gramM3],
}

// ---------------------------------------------------------------------
//  読解 — Reading
// ---------------------------------------------------------------------
const readM4: ExerciseGroup = {
  id: 'n5-2012-read-m4',
  title: 'もんだい4',
  subtitlePt: 'Compreensão de texto curto',
  instructionJa: 'つぎの (1)から(3)の ぶんしょうを 読んで、しつもんに こたえてください。こたえは、1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'Leia cada texto curto e responda à pergunta.',
  questions: [
    { id: 'n5-2012-read-27', number: 27, context: '（1）わたしは 今日、友だちと 買い物に 行きました。3か月前に 見た えいがの DVDが ほしかったからです。買った DVDは、友だちや 姉と いっしょに 見ます。', prompt: '「わたし」は 今日、何を しましたか。', choices: [{ n: 1, text: '友だちと えいがを 見に 行きました。' }, { n: 2, text: '友だちと DVDを 買いに 行きました。' }, { n: 3, text: '姉と えいがを 見に 行きました。' }, { n: 4, text: '姉と DVDを 買いに 行きました。' }], answer: 2, translationPt: 'O que “eu” fiz hoje? — Fui comprar um DVD com amigos.', explanationPt: 'O texto diz 今日、友だちと 買い物に 行きました e que o objetivo era o DVD. Assistir (com a irmã/amigos) será depois, não foi hoje.' },
    { id: 'n5-2012-read-28', number: 28, context: '（2）わたしの へやには、テーブルが 一つと いすが 二つと 本だなが 一つ あります。本が たくさん ありますから、もっと 大きい 本だなが ほしいです。 ※ No original as 4 opções são imagens de quartos; aqui foram descritas em texto.', prompt: '今の へやは どれですか。（descrições do quarto）', choices: [{ n: 1, text: 'Mesa, 2 cadeiras e 2 estantes.' }, { n: 2, text: 'Mesa, 2 cadeiras, 1 estante e livros empilhados no chão.' }, { n: 3, text: 'Mesa, 2 cadeiras e 1 estante.' }, { n: 4, text: 'Mesa, 1 cadeira e 1 estante.' }], answer: 3, translationPt: 'Como é o quarto agora?', explanationPt: 'O texto diz テーブル×1, いす×2, 本だな×1 (a pessoa ainda quer uma estante maior, mas só tem uma). Logo: 1 mesa, 2 cadeiras e 1 estante.' },
    { id: 'n5-2012-read-29', number: 29, context: '（3）森さんの 机の 上に、山口先生の メモと 本が あります。\n\n森さん\nクラスで 使う 本を 中川先生に かりました。\n5ページを 25枚 コピーして ください。\nコピーは 南さんに わたして ください。\n本は、わたしが あした かえしますから、わたしの 机の 上に おいて ください。\n山口', prompt: '森さんは コピーを した あとで、本を どうしますか。', choices: [{ n: 1, text: 'クラスで 使います。' }, { n: 2, text: '南さんに わたします。' }, { n: 3, text: '中川先生に かえします。' }, { n: 4, text: '山口先生の 机の 上に おきます。' }], answer: 4, translationPt: 'Depois de tirar as cópias, o que o Mori faz com o livro?', explanationPt: 'A memo pede: コピーは 南さんに わたす, mas o 本 deve ser deixado na mesa do(a) Yamaguchi (本は…わたしの 机の 上に おいて ください). Quem devolve ao Nakagawa é o próprio Yamaguchi.' },
  ],
}

const readM5: ExerciseGroup = {
  id: 'n5-2012-read-m5',
  title: 'もんだい5',
  subtitlePt: 'Compreensão de texto médio',
  instructionJa:
    'つぎの ぶんしょうを 読んで、しつもんに こたえてください。こたえは、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\nきのうの 夜は おそくまで しごとを しました。とても つかれました。しごとの あと、電車で 帰りました。家の 近くの 駅で 電車を おりました。外は 雨でしたが、わたしは かさが ありませんでした。とても こまりました。\n駅の 人が わたしを 見て、「あの はこの 中の かさを 使って ください。」と 言いました。はこの 中には かさが 3本 ありました。わたしは「えっ、いいんですか。」と 聞きました。駅の 人は「あれは みんなの かさです。お金は いりません。あした、あの はこに かえして ください。」と 言いました。わたしは「わかりました。ありがとうございます。」と 言って、かさを かりて 帰りました。',
  instructionPt: 'Leia o texto e responda. (Cheguei à estação na chuva, sem guarda-chuva, e o funcionário me emprestou um da “caixa de todos”.)',
  questions: [
    { id: 'n5-2012-read-30', number: 30, prompt: 'どうして こまりましたか。', choices: [{ n: 1, text: 'おそい 時間に 駅に 着いたから' }, { n: 2, text: 'しごとが たくさん あったから' }, { n: 3, text: 'とても つかれたから' }, { n: 4, text: 'かさが なかったから' }], answer: 4, translationPt: 'Por que ficou em apuros? — Porque não tinha guarda-chuva.', explanationPt: 'O texto diz 外は 雨でしたが、わたしは かさが ありませんでした。とても こまりました — estava chovendo e a pessoa não tinha guarda-chuva.' },
    { id: 'n5-2012-read-31', number: 31, prompt: '「わたし」は、あした どうしますか。', choices: [{ n: 1, text: 'かさを はこの 中に 入れます。' }, { n: 2, text: 'かさを 駅の 人に わたします。' }, { n: 3, text: 'お金を はこの 中に 入れます。' }, { n: 4, text: 'お金を 駅の 人に わたします。' }], answer: 1, translationPt: 'O que “eu” faz amanhã? — Devolve o guarda-chuva à caixa.', explanationPt: 'O funcionário disse あした、あの はこに かえして ください e que não precisa pagar (お金は いりません). Logo: amanhã devolve o guarda-chuva na caixa.' },
  ],
}

const readM6: ExerciseGroup = {
  id: 'n5-2012-read-m6',
  title: 'もんだい6',
  subtitlePt: 'Busca de informação',
  instructionJa:
    '右の ページを 見て、下の しつもんに こたえてください。こたえは、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n【スーパー「あらきや」 朝8:00〜夜9:00】\n・6月11日(月)〜14日(木)：さとう 128円／トイレットペーパー 490円\n・6月15日(金)〜18日(月)：しょうゆ 198円／ティッシュペーパー 290円\n・毎週 安い：月・火＝くだもの・魚・ジュース／水・木＝とうふ・にく・やさい／金・土＝パン・ぎゅうにゅう・魚・やさい',
  instructionPt: 'Veja o folheto do mercado “Arakiya” e responda.',
  questions: [
    { id: 'n5-2012-read-32', number: 32, prompt: 'あらきやで トイレットペーパーと にくと やさいを 同じ 日に 買いたいです。いつが 安いですか。', choices: [{ n: 1, text: '6月11日(月)と 12日(火)' }, { n: 2, text: '6月13日(水)と 14日(木)' }, { n: 3, text: '6月15日(金)と 16日(土)' }, { n: 4, text: '6月17日(日)と 18日(月)' }], answer: 2, translationPt: 'Quero comprar papel higiênico, carne e verduras no mesmo dia, barato. Quando?', explanationPt: 'Papel higiênico está barato de 11 a 14 (seg–qui); carne (にく) e verduras (やさい) são baratas toda 水・木 (qua/qui). A interseção é 13(qua) e 14(qui).' },
  ],
}

const reading: Section = {
  id: 'reading',
  level: 'N5-2012',
  titleJa: 'どっかい',
  titlePt: 'Leitura',
  summaryPt:
    'Compreensão de leitura do simulado oficial 2012: textos curtos, texto médio e busca de informação. 6 questões.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (読解)',
      bodyPt:
        '- **もんだい4** — textos **curtos** (avisos, memos, e-mails); responda à pergunta sobre o conteúdo.\n- **もんだい5** — texto **médio**; entenda o motivo/a ação descrita.\n- **もんだい6** — **busca de informação** (folhetos, tabelas, horários): ache o dado que satisfaz as condições.',
    },
  ],
  groups: [readM4, readM5, readM6],
}

// ---------------------------------------------------------------------
//  聴解 — Listening (áudio oficial 2012)
// ---------------------------------------------------------------------
const listening: Section = {
  id: 'listening',
  level: 'N5-2012',
  titleJa: 'ちょうかい',
  titlePt: 'Audição',
  summaryPt:
    'Compreensão auditiva do simulado oficial 2012. Quatro tipos (tarefa, ponto-chave, expressões, resposta rápida). Use o player com os áudios oficiais e acompanhe a transcrição com tradução.',
  studyNotes: [
    {
      title: 'Como estudar com os áudios',
      bodyPt:
        '1. **Ouça primeiro sem ler** e tente responder.\n2. Use o player para **reduzir a velocidade** (0,75×) e o **A–B** para repetir trechos.\n3. Depois leia a **transcrição** com furigana e ative a **tradução pt-BR**.\n4. Por fim, marque “Mostrar respostas” e compare. Áudios oficiais (JLPT 2012).',
    },
  ],
  groups: [],
  audios: [
    {
      id: 'n5-2012-listening-q1',
      title: 'もんだい１ — Compreensão de tarefa',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e descubra o que a pessoa precisa fazer. (7 itens + exemplo)',
      src: '/audio/N5-2012/N5Q1.mp3',
      script: [
        { label: '例', setupJa: 'クラスで{先生|せんせい}が{話|はな}しています。{学生|がくせい}は、{今日|きょう}{家|いえ}で、どこを{勉強|べんきょう}しますか。', setupPt: 'Numa sala, a professora fala. Onde o aluno vai estudar em casa hoje?', lines: [
          { speaker: 'F', ja: 'では、{今日|きょう}は 20ページまで{終|お}わりましたから、21ページは{宿題|しゅくだい}ですね。', pt: 'Bom, hoje terminamos até a página 20, então a página 21 é tarefa.' },
          { speaker: 'M', ja: '{全部|ぜんぶ}ですか。', pt: 'A página inteira?' },
          { speaker: 'F', ja: 'いえ、21ページの 1{番|ばん}です。2{番|ばん}は、クラスでします。', pt: 'Não, o exercício 1 da página 21. O 2 fazemos em aula.' },
        ], questionJa: '{学生|がくせい}は、{今日|きょう}{家|いえ}で、どこを{勉強|べんきょう}しますか。', answer: 3 },
        { label: '1番', setupJa: '{靴下|くつした}の{店|みせ}で、{女|おんな}の{人|ひと}と{店|みせ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、どの{靴下|くつした}を{買|か}いますか。', setupPt: 'Numa loja de meias, a mulher e o atendente conversam. Quais meias ela compra?', lines: [
          { speaker: 'F', ja: '{子供|こども}の{靴下|くつした}、ありますか。', pt: 'Tem meias infantis?' },
          { speaker: 'M', ja: 'はい。{長|なが}いのですか、{短|みじか}いのですか。', pt: 'Sim. Compridas ou curtas?' },
          { speaker: 'F', ja: '{長|なが}いのです。', pt: 'Compridas.' },
          { speaker: 'M', ja: 'はい。{果物|くだもの}の{絵|え}と{動物|どうぶつ}の{絵|え}があります。どちらがいいですか。', pt: 'Certo. Tem estampa de frutas e de animais. Qual prefere?' },
          { speaker: 'F', ja: 'そうですね、{動物|どうぶつ}のを{下|くだ}さい。', pt: 'Hmm, me dê a de animais.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、どの{靴下|くつした}を{買|か}いますか。', answer: 2 },
        { label: '2番', setupJa: '{病院|びょういん}で、{医者|いしゃ}と{女|おんな}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、{一日|いちにち}に{何回|なんかい}{薬|くすり}を{飲|の}みますか。', setupPt: 'No hospital, o médico e a mulher conversam. Quantas vezes por dia ela toma o remédio?', lines: [
          { speaker: 'M', ja: 'この{薬|くすり}は、{朝|あさ}と{夜|よる}、ご{飯|はん}を{食|た}べたあとで{飲|の}んでください。', pt: 'Tome este remédio de manhã e à noite, depois das refeições.' },
          { speaker: 'F', ja: '{昼|ひる}ご{飯|はん}のあとは？', pt: 'E depois do almoço?' },
          { speaker: 'M', ja: '{昼|ひる}は{飲|の}まないでください。', pt: 'No almoço, não tome.' },
          { speaker: 'F', ja: 'はい。', pt: 'Sim.' },
          { speaker: 'M', ja: '{四日間|よっかかん}{飲|の}んでくださいね。', pt: 'Tome por quatro dias.' },
          { speaker: 'F', ja: '{分|わ}かりました。', pt: 'Entendi.' },
        ], questionJa: '{一日|いちにち}に{何回|なんかい}{薬|くすり}を{飲|の}みますか。', answer: 2 },
        { label: '3番', setupJa: 'デパートで、{女|おんな}の{人|ひと}と{店|みせ}の{人|ひと}が{話|はな}しています。{店|みせ}の{人|ひと}は、どのかばんを{取|と}りますか。', setupPt: 'Na loja de departamentos, a mulher e o atendente conversam. Qual bolsa ele pega?', lines: [
          { speaker: 'F', ja: 'すみません、その{上|うえ}の{黒|くろ}いかばんを{取|と}ってください。', pt: 'Com licença, pegue aquela bolsa preta de cima.' },
          { speaker: 'M', ja: 'どちらですか。この{小|ちい}さいのですか。', pt: 'Qual? Esta pequena?' },
          { speaker: 'F', ja: 'いいえ。{大|おお}きいのです。', pt: 'Não, a grande.' },
          { speaker: 'M', ja: 'はい。', pt: 'Certo.' },
        ], questionJa: '{店|みせ}の{人|ひと}は、どのかばんを{取|と}りますか。', answer: 3 },
        { label: '4番', setupJa: '{教室|きょうしつ}で、{先生|せんせい}が{話|はな}しています。{学生|がくせい}は、{机|つくえ}の{上|うえ}に{何|なに}を{置|お}きますか。', setupPt: 'Na sala, o professor fala. O que os alunos põem sobre a mesa?', lines: [
          { speaker: 'M', ja: '{今|いま}からテストをします。このテストでは、{辞書|じしょ}を{使|つか}う{問題|もんだい}がありますから、{机|つくえ}の{上|うえ}に{辞書|じしょ}を{出|だ}してください。{鉛筆|えんぴつ}と{消|け}しゴムも{出|だ}してください。{時計|とけい}は、かばんの{中|なか}に{入|い}れてください。', pt: 'Vamos fazer a prova. Nela há questões que usam dicionário, então ponham o dicionário sobre a mesa. Ponham também lápis e borracha. O relógio, guardem na bolsa.' },
          { speaker: 'F', ja: '{先生|せんせい}、ノートはどうしますか。', pt: 'Professor, e o caderno?' },
          { speaker: 'M', ja: 'ノートもかばんの{中|なか}に{入|い}れてください。', pt: 'O caderno também, guardem na bolsa.' },
        ], questionJa: '{机|つくえ}の{上|うえ}に{何|なに}を{置|お}きますか。', answer: 3 },
        { label: '5番', setupJa: 'バスの{中|なか}で、{旅行会社|りょこうがいしゃ}の{人|ひと}が{学生|がくせい}に{話|はな}しています。{学生|がくせい}は、{始|はじ}めに{何|なに}をしますか。', setupPt: 'No ônibus, a guia fala aos alunos. O que eles fazem primeiro?', lines: [
          { speaker: 'F', ja: '{皆|みな}さん、ホテルに{着|つ}きました。{今|いま}から 1{階|かい}のレストランで{晩|ばん}ご{飯|はん}を{食|た}べます。{晩|ばん}ご{飯|はん}は 7{時|じ}からです。{今|いま}6{時|じ}50{分|ぷん}ですから、すぐに{行|い}ってください。{皆|みな}さんの{荷物|にもつ}は、ホテルの{人|ひと}が{部屋|へや}に{持|も}っていきます。{晩|ばん}ご{飯|はん}のあとは、テレビを{見|み}たり、{買|か}い{物|もの}をしたりしてください。', pt: 'Pessoal, chegamos ao hotel. Agora vamos jantar no restaurante do 1º andar. O jantar é às 19h. São 18h50, então vão logo. A bagagem o pessoal do hotel leva aos quartos. Depois do jantar, assistam TV, façam compras etc.' },
        ], questionJa: '{学生|がくせい}は、{始|はじ}めに{何|なに}をしますか。', answer: 1 },
        { label: '6番', setupJa: '{男|おとこ}の{人|ひと}と{女|おんな}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}は、{何|なに}を{持|も}っていきますか。', setupPt: 'Um homem e uma mulher conversam. O que o homem vai levar?', lines: [
          { speaker: 'M', ja: '{来週|らいしゅう}の{日曜日|にちようび}、{海|うみ}へ{行|い}きますね。{何|なに}を{持|も}っていきましょうか。', pt: 'Domingo que vem vamos à praia. O que levamos?' },
          { speaker: 'F', ja: '{私|わたし}はおにぎりを{持|も}っていきます。', pt: 'Eu levo onigiri.' },
          { speaker: 'M', ja: 'じゃあ{僕|ぼく}は。', pt: 'Então eu...?' },
          { speaker: 'F', ja: '{飲|の}み{物|もの}とお{菓子|かし}をお{願|ねが}いします。', pt: 'Bebida e doces, por favor.' },
          { speaker: 'M', ja: 'はい。{飲|の}み{物|もの}とお{菓子|かし}ですね。', pt: 'Ok, bebida e doces.' },
          { speaker: 'F', ja: 'あ、{飲|の}み{物|もの}は{重|おも}いですね。{海|うみ}に{着|つ}いてから{買|か}いましょう。', pt: 'Ah, bebida é pesada. Compramos quando chegarmos à praia.' },
          { speaker: 'M', ja: 'そうですね。', pt: 'É verdade.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{何|なに}を{持|も}っていきますか。', answer: 4 },
        { label: '7番', setupJa: 'バス{停|てい}で、{女|おんな}の{人|ひと}とバス{会社|がいしゃ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、{何番|なんばん}のバスに{乗|の}りますか。', setupPt: 'No ponto, a mulher e o funcionário da empresa de ônibus conversam. Que ônibus ela pega?', lines: [
          { speaker: 'F', ja: 'すみません、1{番|ばん}のバスはみどり{駅|えき}に{行|い}きますか。', pt: 'Com licença, o ônibus 1 vai à estação Midori?' },
          { speaker: 'M', ja: 'いいえ、みどり{駅|えき}に{行|い}くバスは 3{番|ばん}と 5{番|ばん}と 7{番|ばん}ですよ。', pt: 'Não. Os que vão à Midori são o 3, o 5 e o 7.' },
          { speaker: 'F', ja: 'そうですか。', pt: 'Ah, sim.' },
          { speaker: 'M', ja: 'あ、でも、{今日|きょう}は{日曜日|にちようび}ですから、5{番|ばん}のバスはありません。', pt: 'Mas hoje é domingo, então não tem o 5.' },
          { speaker: 'F', ja: 'そうですか。', pt: 'Entendi.' },
          { speaker: 'M', ja: 'それから、3{番|ばん}は{朝|あさ}と{夕方|ゆうがた}のバスですから、{今|いま}の{時間|じかん}は 7{番|ばん}ですね。', pt: 'E o 3 só de manhã e à tardinha, então a esta hora é o 7.' },
          { speaker: 'F', ja: '{分|わ}かりました。ありがとうございます。', pt: 'Entendi, obrigada.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、{何番|なんばん}のバスに{乗|の}りますか。', answer: 4 },
      ],
    },
    {
      id: 'n5-2012-listening-q2',
      title: 'もんだい２ — Compreensão de ponto-chave',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e escolha a informação específica pedida. (6 itens + exemplo)',
      src: '/audio/N5-2012/N5Q2.mp3',
      script: [
        { label: '例', setupJa: '{男|おとこ}の{人|ひと}と{女|おんな}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}は{昨日|きのう}、どこへ{行|い}きましたか。', setupPt: 'Conversam. Onde o homem foi ontem?', lines: [
          { speaker: 'M', ja: '{山田|やまだ}さん、{昨日|きのう}どこかへ{行|い}きましたか。', pt: 'Yamada, foi a algum lugar ontem?' },
          { speaker: 'F', ja: '{図書館|としょかん}へ{行|い}きました。', pt: 'Fui à biblioteca.' },
          { speaker: 'M', ja: '{駅|えき}のそばの{図書館|としょかん}ですか。', pt: 'A biblioteca perto da estação?' },
          { speaker: 'F', ja: 'はい。', pt: 'Sim.' },
          { speaker: 'M', ja: '{僕|ぼく}は{山川|やまかわ}デパートへ{行|い}って、{買|か}い{物|もの}をしました。', pt: 'Eu fui à loja Yamakawa e fiz compras.' },
          { speaker: 'F', ja: 'え、{私|わたし}も{昨日|きのう}の{夜|よる}、{山川|やまかわ}デパートのレストランへ{行|い}きましたよ。', pt: 'Ah, eu também fui ontem à noite ao restaurante da Yamakawa.' },
          { speaker: 'M', ja: 'そうですか。', pt: 'É mesmo?' },
        ], questionJa: '{男|おとこ}の{人|ひと}は{昨日|きのう}、どこへ{行|い}きましたか。', answer: 3 },
        { label: '1番', setupJa: '{大学|だいがく}で、{男|おとこ}の{学生|がくせい}と{女|おんな}の{学生|がくせい}が{話|はな}しています。{女|おんな}の{学生|がくせい}は、{今日|きょう}、{何時間|なんじかん}{勉強|べんきょう}しますか。', setupPt: 'Na faculdade, dois estudantes conversam. Quantas horas ela vai estudar hoje?', lines: [
          { speaker: 'M', ja: '{山田|やまだ}さんはいつも{何時間|なんじかん}ぐらい{勉強|べんきょう}しますか。', pt: 'Yamada, quantas horas você costuma estudar?' },
          { speaker: 'F', ja: 'うーん、{毎日|まいにち}3{時間|じかん}ぐらいです。', pt: 'Hmm, umas 3 horas por dia.' },
          { speaker: 'M', ja: 'えっ、{私|わたし}は{毎日|まいにち}1{時間|じかん}です。', pt: 'Nossa, eu estudo 1 hora por dia.' },
          { speaker: 'F', ja: 'あ、でも、{明日|あした}はテストがありますから、{今日|きょう}は 4{時間|じかん}{勉強|べんきょう}します。', pt: 'Ah, mas amanhã tem prova, então hoje vou estudar 4 horas.' },
          { speaker: 'M', ja: 'そうですか。', pt: 'Entendi.' },
        ], questionJa: '{女|おんな}の{学生|がくせい}は、{今日|きょう}、{何時間|なんじかん}{勉強|べんきょう}しますか。', answer: 4 },
        { label: '2番', setupJa: '{男|おとこ}の{人|ひと}と{女|おんな}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}の{電話番号|でんわばんごう}は{何番|なんばん}ですか。', setupPt: 'Conversam. Qual é o telefone da mulher?', lines: [
          { speaker: 'M', ja: 'あのう、{山田|やまだ}さんの{電話番号|でんわばんごう}は、512-7734ですね？', pt: 'O telefone da Yamada é 512-7734, certo?' },
          { speaker: 'F', ja: 'いいえ、7734じゃなくて 7743です。', pt: 'Não, não é 7734, é 7743.' },
          { speaker: 'M', ja: 'え、ちょっと{待|ま}ってください。メモします。512の。', pt: 'Espere, vou anotar. 512...' },
          { speaker: 'F', ja: '7743です。', pt: '7743.' },
          { speaker: 'M', ja: 'はい。ありがとうございました。', pt: 'Certo. Obrigado.' },
        ], questionJa: '{女|おんな}の{人|ひと}の{電話番号|でんわばんごう}は{何番|なんばん}ですか。', answer: 3 },
        { label: '3番', setupJa: '{女|おんな}の{学生|がくせい}と{男|おとこ}の{学生|がくせい}が{話|はな}しています。{男|おとこ}の{学生|がくせい}は、だれと{住|す}んでいますか。', setupPt: 'Conversam. Com quem o rapaz mora?', lines: [
          { speaker: 'F', ja: '{山田|やまだ}さんは、お{父|とう}さんとお{母|かあ}さんと、{一緒|いっしょ}に{住|す}んでいますか。', pt: 'Yamada, você mora com seu pai e sua mãe?' },
          { speaker: 'M', ja: 'いえ、{両親|りょうしん}は{遠|とお}くに{住|す}んでいます。', pt: 'Não, meus pais moram longe.' },
          { speaker: 'F', ja: 'そうですか。', pt: 'Ah, entendi.' },
          { speaker: 'M', ja: 'いま、{姉|あね}と{一緒|いっしょ}に{住|す}んでいます。', pt: 'Agora moro com minha irmã mais velha.' },
          { speaker: 'F', ja: '{兄弟|きょうだい}は{一人|ひとり}ですか。', pt: 'Você tem só ela de irmã?' },
          { speaker: 'M', ja: 'あ、{弟|おとうと}もいますよ。{弟|おとうと}は{両親|りょうしん}と{一緒|いっしょ}です。', pt: 'Ah, tenho um irmão mais novo também. Ele está com meus pais.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}は、だれと{住|す}んでいますか。', answer: 2 },
        { label: '4番', setupJa: '{学校|がっこう}で{男|おとこ}の{学生|がくせい}と{女|おんな}の{学生|がくせい}が{話|はな}しています。{二人|ふたり}はどこで{昼|ひる}ご{飯|はん}を{食|た}べますか。', setupPt: 'Na escola, dois estudantes conversam. Onde vão almoçar?', lines: [
          { speaker: 'M', ja: 'もう 1{時|じ}ですね。{何|なに}か{食|た}べませんか。', pt: 'Já é 1h. Vamos comer algo?' },
          { speaker: 'F', ja: 'そうですね。でも{今日|きょう}は{土曜日|どようび}だから、{学校|がっこう}の{食堂|しょくどう}や{喫茶店|きっさてん}は{休|やす}みですよ。', pt: 'Vamos. Mas hoje é sábado, então o refeitório e o café da escola estão fechados.' },
          { speaker: 'M', ja: 'じゃ、パン{屋|や}でパンを{買|か}って、{教室|きょうしつ}で{食|た}べましょうか。', pt: 'Então compramos pão na padaria e comemos na sala?' },
          { speaker: 'F', ja: 'そうですね。', pt: 'Boa ideia.' },
        ], questionJa: '{二人|ふたり}はどこで{昼|ひる}ご{飯|はん}を{食|た}べますか。', answer: 4 },
        { label: '5番', setupJa: '{教室|きょうしつ}で、{先生|せんせい}が{学生|がくせい}に{話|はな}しています。{学生|がくせい}は{何|なに}で{名前|なまえ}を{書|か}きますか。', setupPt: 'Na sala, a professora fala aos alunos. Com o que escrevem o nome?', lines: [
          { speaker: 'F', ja: 'はい、じゃあちょっと{聞|き}いてください。えー、{来月|らいげつ}のバス{旅行|りょこう}に{行|い}きたい{人|ひと}は、この{紙|かみ}に、ボールペンで{名前|なまえ}を{書|か}いてください。{鉛筆|えんぴつ}じゃなくて、ボールペンですよ。{黒|くろ}で{書|か}いてください。{赤|あか}で{書|か}かないでくださいね。', pt: 'Ouçam um instante. Quem quer ir na excursão de ônibus do mês que vem, escreva o nome neste papel com caneta esferográfica. Não a lápis, com caneta. Em preto. Não escrevam em vermelho.' },
        ], questionJa: '{学生|がくせい}は{何|なに}で{名前|なまえ}を{書|か}きますか。', answer: 1 },
        { label: '6番', setupJa: '{女|おんな}の{学生|がくせい}と{男|おとこ}の{学生|がくせい}が{話|はな}しています。{二人|ふたり}は{明日|あした}どこで{会|あ}いますか。', setupPt: 'Conversam. Onde vão se encontrar amanhã?', lines: [
          { speaker: 'F', ja: '{明日|あした}の{夜|よる}、{一緒|いっしょ}にサッカーを{見|み}に{行|い}きませんか。', pt: 'Amanhã à noite, vamos ver futebol juntos?' },
          { speaker: 'M', ja: 'いいですね。どこで{会|あ}いましょうか。', pt: 'Boa. Onde nos encontramos?' },
          { speaker: 'F', ja: '5{時|じ}に{駅|えき}で{会|あ}いませんか。', pt: 'Às 17h na estação?' },
          { speaker: 'M', ja: '{駅|えき}は{人|ひと}が{多|おお}いですよ。', pt: 'A estação tem muita gente.' },
          { speaker: 'F', ja: 'そうですね。じゃあ、{駅|えき}の{前|まえ}の{喫茶店|きっさてん}はどうですか。', pt: 'É mesmo. Então no café em frente à estação?' },
          { speaker: 'M', ja: 'はい、そうしましょう。あ、サッカーを{見|み}てから{近|ちか}くのレストランで{晩|ばん}ご{飯|はん}を{食|た}べませんか。', pt: 'Sim, vamos assim. Ah, depois do futebol, jantamos num restaurante perto?' },
          { speaker: 'F', ja: 'ええ。じゃ、{明日|あした}5{時|じ}に{会|あ}いましょう。', pt: 'Sim. Então amanhã às 17h.' },
        ], questionJa: '{二人|ふたり}は{明日|あした}どこで{会|あ}いますか。', answer: 3 },
      ],
    },
    {
      id: 'n5-2012-listening-q3',
      title: 'もんだい３ — Expressões em situação',
      descriptionPt: 'Olhe a cena e escolha o que a pessoa deve dizer. (5 itens + exemplo, 3 opções lidas no áudio)',
      src: '/audio/N5-2012/N5Q3.mp3',
      script: [
        { label: '例', setupJa: 'レストランでお{店|みせ}の{人|ひと}を{呼|よ}びます。{何|なん}と{言|い}いますか。', setupPt: 'No restaurante, você chama o atendente. O que diz?', lines: [
          { speaker: '1', ja: 'いらっしゃいませ。', pt: '1. Bem-vindo. (é o atendente que diz)' },
          { speaker: '2', ja: '{失礼|しつれい}しました。', pt: '2. Desculpe o incômodo.' },
          { speaker: '3', ja: 'すみません。', pt: '3. Com licença! (chamando)' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 3 },
        { label: '1番', setupJa: 'ご{飯|はん}を{食|た}べました。{何|なん}と{言|い}いますか。', setupPt: 'Você terminou de comer. O que diz?', lines: [
          { speaker: '1', ja: 'ごちそうさまでした。', pt: '1. Obrigado pela refeição. (ao terminar)' },
          { speaker: '2', ja: 'いただきます。', pt: '2. Vou comer. (antes de comer)' },
          { speaker: '3', ja: 'どういたしまして。', pt: '3. De nada.' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 1 },
        { label: '2番', setupJa: '{電車|でんしゃ}の{中|なか}です。{女|おんな}の{人|ひと}が{来|き}ました。{何|なん}と{言|い}いますか。', setupPt: 'Você está no trem. Uma mulher chegou (em pé). O que diz?', lines: [
          { speaker: '1', ja: 'どうもありがとう。', pt: '1. Muito obrigado.' },
          { speaker: '2', ja: '{初|はじ}めまして。', pt: '2. Prazer em conhecê-lo.' },
          { speaker: '3', ja: 'ここ、どうぞ。', pt: '3. Sente-se aqui, por favor.' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 3 },
        { label: '3番', setupJa: '{家|うち}へ{帰|かえ}ります。{友達|ともだち}に{何|なん}と{言|い}いますか。', setupPt: 'Você vai para casa. O que diz a um amigo (que fica)?', lines: [
          { speaker: '1', ja: 'いってきます。', pt: '1. Já vou (e volto). (ao sair de casa)' },
          { speaker: '2', ja: 'じゃ、また。', pt: '2. Então, até mais.' },
          { speaker: '3', ja: 'ただいま。', pt: '3. Cheguei. (ao chegar em casa)' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 2 },
        { label: '4番', setupJa: '{郵便局|ゆうびんきょく}で{切手|きって}を{買|か}います。{何|なん}と{言|い}いますか。', setupPt: 'No correio, você vai comprar selos. O que diz?', lines: [
          { speaker: '1', ja: '{切手|きって}を{買|か}いませんか。', pt: '1. Não quer comprar selos?' },
          { speaker: '2', ja: '{切手|きって}をどうぞ。', pt: '2. Aqui, selos. (oferecendo)' },
          { speaker: '3', ja: '{切手|きって}を{下|くだ}さい。', pt: '3. Me dê selos, por favor.' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 3 },
        { label: '5番', setupJa: '{友達|ともだち}は{鉛筆|えんぴつ}がありません。{友達|ともだち}に{何|なん}と{言|い}いますか。', setupPt: 'Seu amigo está sem lápis. O que você diz a ele?', lines: [
          { speaker: '1', ja: '{鉛筆|えんぴつ}、{借|か}りましょうか。', pt: '1. Quer que eu peça um lápis emprestado?' },
          { speaker: '2', ja: '{鉛筆|えんぴつ}、{使|つか}いますか。', pt: '2. Quer usar (meu) lápis?' },
          { speaker: '3', ja: '{鉛筆|えんぴつ}、{貸|か}してください。', pt: '3. Me empreste um lápis, por favor.' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 2 },
      ],
    },
    {
      id: 'n5-2012-listening-q4',
      title: 'もんだい４ — Resposta rápida',
      descriptionPt: 'Ouça a fala e escolha a resposta mais natural. (6 itens + exemplo, 3 opções)',
      src: '/audio/N5-2012/N5Q4.mp3',
      script: [
        { label: '例', setupJa: 'お{国|くに}はどちらですか。', setupPt: 'De que país você é?', lines: [
          { speaker: '1', ja: 'あちらです。', pt: '1. É por ali.' },
          { speaker: '2', ja: 'アメリカです。', pt: '2. Sou dos Estados Unidos.' },
          { speaker: '3', ja: '{部屋|へや}です。', pt: '3. É um quarto.' },
        ], questionJa: 'どれが いいですか。', answer: 2 },
        { label: '1番', setupJa: '{今日|きょう}は{何日|なんにち}ですか。', setupPt: 'Que dia (do mês) é hoje?', lines: [
          { speaker: '1', ja: '{三日|みっか}です。', pt: '1. É dia 3.' },
          { speaker: '2', ja: '3{週間|しゅうかん}です。', pt: '2. São 3 semanas.' },
          { speaker: '3', ja: '3{時|じ}です。', pt: '3. São 3 horas.' },
        ], questionJa: 'どれが いいですか。', answer: 1 },
        { label: '2番', setupJa: 'すみません、{図書館|としょかん}はどこですか。', setupPt: 'Com licença, onde fica a biblioteca?', lines: [
          { speaker: '1', ja: 'あそこです。', pt: '1. É ali.' },
          { speaker: '2', ja: '6{時|じ}までです。', pt: '2. É até as 6h.' },
          { speaker: '3', ja: '{本|ほん}を{借|か}ります。', pt: '3. Vou pegar um livro emprestado.' },
        ], questionJa: 'どれが いいですか。', answer: 1 },
        { label: '3番', setupJa: '{明日|あした}、{何時|なんじ}に{学校|がっこう}に{来|き}ますか。', setupPt: 'Amanhã, a que horas você vem à escola?', lines: [
          { speaker: '1', ja: 'バスで{来|き}ます。', pt: '1. Venho de ônibus.' },
          { speaker: '2', ja: '9{時半|じはん}です。', pt: '2. Às 9h30.' },
          { speaker: '3', ja: '6{人|にん}です。', pt: '3. São 6 pessoas.' },
        ], questionJa: 'どれが いいですか。', answer: 2 },
        { label: '4番', setupJa: '{田中|たなか}さん、その{荷物|にもつ}を{持|も}ちましょうか。', setupPt: 'Tanaka, quer que eu carregue essa bagagem?', lines: [
          { speaker: '1', ja: 'どういたしまして。', pt: '1. De nada.' },
          { speaker: '2', ja: '{持|も}ちませんでした。', pt: '2. Não carreguei.' },
          { speaker: '3', ja: 'ありがとうございます。', pt: '3. Muito obrigado.' },
        ], questionJa: 'どれが いいですか。', answer: 3 },
        { label: '5番', setupJa: 'ちょっと{休|やす}みませんか。', setupPt: 'Vamos descansar um pouco?', lines: [
          { speaker: '1', ja: '{日曜日|にちようび}です。', pt: '1. É domingo.' },
          { speaker: '2', ja: 'お{元気|げんき}ですか。', pt: '2. Como vai?' },
          { speaker: '3', ja: 'そうしましょう。', pt: '3. Vamos sim.' },
        ], questionJa: 'どれが いいですか。', answer: 3 },
        { label: '6番', setupJa: 'それは、{何|なん}の{本|ほん}ですか。', setupPt: 'Que livro é esse?', lines: [
          { speaker: '1', ja: '{料理|りょうり}の{本|ほん}です。', pt: '1. É um livro de culinária.' },
          { speaker: '2', ja: '{私|わたし}の{本|ほん}です。', pt: '2. É o meu livro.' },
          { speaker: '3', ja: 'はい、そうです。', pt: '3. Sim, é isso.' },
        ], questionJa: 'どれが いいですか。', answer: 1 },
      ],
    },
  ],
}

export const n5_2012: Level = {
  id: 'N5-2012',
  courseId: 'jlpt',
  titlePt: 'N5 — Simulado 2012',
  descriptionPt:
    'Segunda leva de prática do N5: simulado completo a partir do Official Practice Workbook 2012 do JLPT (Japan Foundation), com gabarito oficial, explicações em pt-BR e áudio oficial na audição.',
  sections: [vocabulary, grammar, reading, listening],
}
