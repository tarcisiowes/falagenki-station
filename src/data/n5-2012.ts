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

export const n5_2012: Level = {
  id: 'N5-2012',
  courseId: 'jlpt',
  titlePt: 'N5 — Simulado 2012',
  descriptionPt:
    'Segunda leva de prática do N5: simulado a partir do Official Practice Workbook 2012 do JLPT (Japan Foundation), com gabarito oficial e explicações em pt-BR. (Em construção: outras seções serão adicionadas.)',
  sections: [vocabulary],
}
