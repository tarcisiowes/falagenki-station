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

export const n5_2012: Level = {
  id: 'N5-2012',
  courseId: 'jlpt',
  titlePt: 'N5 — Simulado 2012',
  descriptionPt:
    'Segunda leva de prática do N5: simulado a partir do Official Practice Workbook 2012 do JLPT (Japan Foundation), com gabarito oficial e explicações em pt-BR. (Em construção: 読解 e 聴解 serão adicionados.)',
  sections: [vocabulary, grammar],
}
