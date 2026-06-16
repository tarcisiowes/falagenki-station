import type { ExerciseGroup, Level, Section } from './types'

// =====================================================================
//  N4 — Leva autoral (Simulado de prática)
//  Questões ORIGINAIS no formato JLPT N4 (não copiam material oficial),
//  para prática extra. Japonês, respostas e explicações pt-BR autorais.
//  Audição: por enquanto sem áudio (compreensão pelo roteiro/texto).
// =====================================================================

const vocabM1: ExerciseGroup = {
  id: 'n4-mock-vocab-m1',
  title: 'もんだい1',
  subtitlePt: 'Leitura de kanji',
  instructionJa: '＿＿の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se lê (em hiragana) a palavra sublinhada? Escolha a melhor opção.',
  questions: [
    { id: 'n4-mock-vocab-1', number: 1, prompt: '{来月|らいげつ}の {会議|かいぎ}で [[発表]]します。', choices: [{ n: 1, text: 'はっぴょう' }, { n: 2, text: 'はつびょう' }, { n: 3, text: 'はっひょう' }, { n: 4, text: 'はつぴょう' }], answer: 1, translationPt: 'Vou apresentar na reunião do mês que vem.', explanationPt: '発表 = はっぴょう (apresentação). Tem っ (pausa) e ぴょう.' },
    { id: 'n4-mock-vocab-2', number: 2, prompt: 'この {道|みち}は よる [[危険]]です。', choices: [{ n: 1, text: 'きけん' }, { n: 2, text: 'きげん' }, { n: 3, text: 'ぎけん' }, { n: 4, text: 'きへん' }], answer: 1, translationPt: 'Esta rua é perigosa à noite.', explanationPt: '危険 = きけん (perigoso). Sem dakuten.' },
    { id: 'n4-mock-vocab-3', number: 3, prompt: '{旅行|りょこう}の [[計画]]を たてます。', choices: [{ n: 1, text: 'けいかく' }, { n: 2, text: 'けいが' }, { n: 3, text: 'けかく' }, { n: 4, text: 'けいがく' }], answer: 1, translationPt: 'Vou fazer o plano da viagem.', explanationPt: '計画 = けいかく (plano). 計 (けい) + 画 (かく).' },
    { id: 'n4-mock-vocab-4', number: 4, prompt: '{田中|たなか}さんは [[親切]]な {人|ひと}です。', choices: [{ n: 1, text: 'しんせつ' }, { n: 2, text: 'しんせち' }, { n: 3, text: 'じんせつ' }, { n: 4, text: 'しんぜつ' }], answer: 1, translationPt: 'O Tanaka é uma pessoa gentil.', explanationPt: '親切 = しんせつ (gentil/atencioso).' },
    { id: 'n4-mock-vocab-5', number: 5, prompt: '{電車|でんしゃ}が [[遅れて]] います。', choices: [{ n: 1, text: 'おくれて' }, { n: 2, text: 'はなれて' }, { n: 3, text: 'わかれて' }, { n: 4, text: 'つかれて' }], answer: 1, translationPt: 'O trem está atrasado.', explanationPt: '遅れる = おくれる (atrasar). はなれる=afastar, わかれる=separar, つかれる=cansar.' },
    { id: 'n4-mock-vocab-6', number: 6, prompt: '[[最近]]、とても いそがしいです。', choices: [{ n: 1, text: 'さいきん' }, { n: 2, text: 'さいごん' }, { n: 3, text: 'ざいきん' }, { n: 4, text: 'さいぎん' }], answer: 1, translationPt: 'Ultimamente estou muito ocupado.', explanationPt: '最近 = さいきん (recentemente/ultimamente).' },
    { id: 'n4-mock-vocab-7', number: 7, prompt: 'この りょうりは [[味]]が いいです。', choices: [{ n: 1, text: 'あじ' }, { n: 2, text: 'いろ' }, { n: 3, text: 'におい' }, { n: 4, text: 'かたち' }], answer: 1, translationPt: 'Esta comida tem um bom sabor.', explanationPt: '味 = あじ (sabor). いろ=cor, におい=cheiro, かたち=forma.' },
    { id: 'n4-mock-vocab-8', number: 8, prompt: 'かれは [[親]]と {一緒|いっしょ}に すんで います。', choices: [{ n: 1, text: 'おや' }, { n: 2, text: 'こ' }, { n: 3, text: 'あに' }, { n: 4, text: 'とも' }], answer: 1, translationPt: 'Ele mora junto com os pais.', explanationPt: '親 = おや (pais/genitor). こ=filho, あに=irmão mais velho, とも=amigo.' },
    { id: 'n4-mock-vocab-9', number: 9, prompt: 'じかんが ありません。[[急いで]] ください。', choices: [{ n: 1, text: 'いそいで' }, { n: 2, text: 'およいで' }, { n: 3, text: 'ぬいで' }, { n: 4, text: 'さわいで' }], answer: 1, translationPt: 'Não há tempo. Apresse-se, por favor.', explanationPt: '急ぐ = いそぐ (apressar-se); te-form 急いで. およぐ=nadar, ぬぐ=tirar (roupa), さわぐ=fazer barulho.' },
  ],
}

const vocabM2: ExerciseGroup = {
  id: 'n4-mock-vocab-m2',
  title: 'もんだい2',
  subtitlePt: 'Escrita correta (kanji)',
  instructionJa: '＿＿の ことばは どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se escreve a palavra sublinhada em kanji? Escolha a melhor opção.',
  questions: [
    { id: 'n4-mock-vocab-10', number: 10, prompt: 'この くすりは [[あんぜん]]です。', choices: [{ n: 1, text: '安全' }, { n: 2, text: '安金' }, { n: 3, text: '案全' }, { n: 4, text: '安会' }], answer: 1, translationPt: 'Este remédio é seguro.', explanationPt: 'あんぜん = 安全 (seguro/segurança). 安 (あん) + 全 (ぜん).' },
    { id: 'n4-mock-vocab-11', number: 11, prompt: 'もうすぐ [[しゅっぱつ]]の じかんです。', choices: [{ n: 1, text: '出発' }, { n: 2, text: '出登' }, { n: 3, text: '山発' }, { n: 4, text: '出廃' }], answer: 1, translationPt: 'Logo é a hora da partida.', explanationPt: 'しゅっぱつ = 出発 (partida). 出 (しゅつ→しゅっ) + 発 (ぱつ).' },
    { id: 'n4-mock-vocab-12', number: 12, prompt: 'ちちは [[こうじょう]]で はたらいて います。', choices: [{ n: 1, text: '工場' }, { n: 2, text: '工湯' }, { n: 3, text: '土場' }, { n: 4, text: '工陽' }], answer: 1, translationPt: 'Meu pai trabalha numa fábrica.', explanationPt: 'こうじょう = 工場 (fábrica). 工 (こう) + 場 (じょう).' },
    { id: 'n4-mock-vocab-13', number: 13, prompt: 'むすこが [[びょうき]]に なりました。', choices: [{ n: 1, text: '病気' }, { n: 2, text: '痛気' }, { n: 3, text: '病汽' }, { n: 4, text: '疲気' }], answer: 1, translationPt: 'Meu filho ficou doente.', explanationPt: 'びょうき = 病気 (doença). 病 (びょう) + 気 (き).' },
    { id: 'n4-mock-vocab-14', number: 14, prompt: 'ともだちを かぞくに [[しょうかい]]しました。', choices: [{ n: 1, text: '紹介' }, { n: 2, text: '招介' }, { n: 3, text: '紹会' }, { n: 4, text: '招会' }], answer: 1, translationPt: 'Apresentei meu amigo à família.', explanationPt: 'しょうかい = 紹介 (apresentar alguém). 招 (しょう, convidar) é parecido, mas errado.' },
    { id: 'n4-mock-vocab-15', number: 15, prompt: '[[うんどう]]は からだに いいです。', choices: [{ n: 1, text: '運動' }, { n: 2, text: '連動' }, { n: 3, text: '運働' }, { n: 4, text: '連働' }], answer: 1, translationPt: 'Exercício faz bem ao corpo.', explanationPt: 'うんどう = 運動 (exercício físico). 運 (うん) + 動 (どう). 連 é parecido com 運.' },
  ],
}

const vocabM3: ExerciseGroup = {
  id: 'n4-mock-vocab-m3',
  title: 'もんだい3',
  subtitlePt: 'Vocabulário (preencher a lacuna)',
  instructionJa: '（　）に なにを いれますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a palavra mais adequada.',
  questions: [
    { id: 'n4-mock-vocab-16', number: 16, prompt: 'かれは いつも （　）を つくので、しんようできない。', choices: [{ n: 1, text: 'うそ' }, { n: 2, text: 'ゆめ' }, { n: 3, text: 'きもち' }, { n: 4, text: 'やくそく' }], answer: 1, translationPt: 'Ele sempre mente, então não dá para confiar.', explanationPt: 'うそを つく = mentir. ゆめ=sonho, きもち=sentimento, やくそく=promessa.' },
    { id: 'n4-mock-vocab-17', number: 17, prompt: 'この きかいの （　）を せつめいします。', choices: [{ n: 1, text: 'つかいかた' }, { n: 2, text: 'つくりかた' }, { n: 3, text: 'いきかた' }, { n: 4, text: 'よみかた' }], answer: 1, translationPt: 'Vou explicar o modo de usar esta máquina.', explanationPt: 'つかいかた = modo de usar. つくりかた=modo de fazer, いきかた=como ir, よみかた=leitura.' },
    { id: 'n4-mock-vocab-18', number: 18, prompt: 'ねだんが たかいので、{買|か}うのを （　）ことに しました。', choices: [{ n: 1, text: 'やめる' }, { n: 2, text: 'はじめる' }, { n: 3, text: 'つづける' }, { n: 4, text: 'おぼえる' }], answer: 1, translationPt: 'Como o preço é alto, decidi desistir de comprar.', explanationPt: 'やめる = desistir/parar de. はじめる=começar, つづける=continuar, おぼえる=memorizar.' },
    { id: 'n4-mock-vocab-19', number: 19, prompt: '{電車|でんしゃ}の {中|なか}に かさを （　）しまいました。', choices: [{ n: 1, text: 'わすれて' }, { n: 2, text: 'おぼえて' }, { n: 3, text: 'おちて' }, { n: 4, text: 'すてて' }], answer: 1, translationPt: 'Acabei esquecendo o guarda-chuva no trem.', explanationPt: 'わすれる = esquecer (deixar). 〜て しまう = acabar fazendo (sem querer).' },
    { id: 'n4-mock-vocab-20', number: 20, prompt: '{試験|しけん}に （　）ように、まいにち べんきょうします。', choices: [{ n: 1, text: 'ごうかくする' }, { n: 2, text: 'しっぱいする' }, { n: 3, text: 'おちる' }, { n: 4, text: 'やめる' }], answer: 1, translationPt: 'Estudo todos os dias para passar na prova.', explanationPt: 'ごうかくする = ser aprovado/passar. しっぱい=falhar, おちる=ser reprovado.' },
    { id: 'n4-mock-vocab-21', number: 21, prompt: 'かのじょは ピアノが （　）です。プロみたいです。', choices: [{ n: 1, text: 'じょうず' }, { n: 2, text: 'へた' }, { n: 3, text: 'きらい' }, { n: 4, text: 'むり' }], answer: 1, translationPt: 'Ela toca piano muito bem. Parece profissional.', explanationPt: 'じょうず = habilidoso/bom em. へた=ruim, きらい=detestar, むり=impossível.' },
    { id: 'n4-mock-vocab-22', number: 22, prompt: '{山田|やまだ}さんは （　）な {人|ひと}です。やくそくを かならず まもります。', choices: [{ n: 1, text: 'まじめ' }, { n: 2, text: 'げんき' }, { n: 3, text: 'ゆうめい' }, { n: 4, text: 'ひま' }], answer: 1, translationPt: 'O Yamada é uma pessoa séria/dedicada. Cumpre sempre as promessas.', explanationPt: 'まじめ = sério/responsável. げんき=animado, ゆうめい=famoso, ひま=ocioso.' },
    { id: 'n4-mock-vocab-23', number: 23, prompt: '{雨|あめ}が ふって きたので、（　）を さしました。', choices: [{ n: 1, text: 'かさ' }, { n: 2, text: 'ぼうし' }, { n: 3, text: 'めがね' }, { n: 4, text: 'てぶくろ' }], answer: 1, translationPt: 'Começou a chover, então abri o guarda-chuva.', explanationPt: 'かさを さす = abrir/segurar o guarda-chuva. ぼうし=chapéu, めがね=óculos, てぶくろ=luvas.' },
    { id: 'n4-mock-vocab-24', number: 24, prompt: 'この もんだいの （　）が わかりません。{教|おし}えて ください。', choices: [{ n: 1, text: 'こたえ' }, { n: 2, text: 'しつもん' }, { n: 3, text: 'へんじ' }, { n: 4, text: 'けっか' }], answer: 1, translationPt: 'Não sei a resposta desta questão. Me ensine, por favor.', explanationPt: 'こたえ = resposta (de uma questão). しつもん=pergunta, へんじ=resposta a um chamado, けっか=resultado.' },
    { id: 'n4-mock-vocab-25', number: 25, prompt: '{試験|しけん}の （　）は らいしゅう わかります。', choices: [{ n: 1, text: 'けっか' }, { n: 2, text: 'こたえ' }, { n: 3, text: 'もんだい' }, { n: 4, text: 'せつめい' }], answer: 1, translationPt: 'O resultado da prova sai na semana que vem.', explanationPt: 'けっか = resultado. こたえ=resposta, もんだい=questão, せつめい=explicação.' },
  ],
}

const vocabM4: ExerciseGroup = {
  id: 'n4-mock-vocab-m4',
  title: 'もんだい4',
  subtitlePt: 'Frase de sentido equivalente',
  instructionJa: '＿＿の ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Escolha a frase com sentido mais parecido com a frase sublinhada.',
  questions: [
    { id: 'n4-mock-vocab-26', number: 26, prompt: 'かれは いま [[しょくじ]]を して います。', choices: [{ n: 1, text: 'かれは いま ねて います。' }, { n: 2, text: 'かれは いま ごはんを たべて います。' }, { n: 3, text: 'かれは いま べんきょうして います。' }, { n: 4, text: 'かれは いま はたらいて います。' }], answer: 2, translationPt: 'Ele está fazendo uma refeição agora.', explanationPt: 'しょくじ = refeição → «ごはんを たべて います» (está comendo).' },
    { id: 'n4-mock-vocab-27', number: 27, prompt: 'この {車|くるま}は [[ゆうめい]]です。', choices: [{ n: 1, text: 'みんな この 車を しって います。' }, { n: 2, text: 'この 車は たかいです。' }, { n: 3, text: 'この 車は あたらしいです。' }, { n: 4, text: 'この 車は はやいです。' }], answer: 1, translationPt: 'Este carro é famoso.', explanationPt: 'ゆうめい (famoso) ≈ todos o conhecem: «みんな しって います».' },
    { id: 'n4-mock-vocab-28', number: 28, prompt: 'この へやは [[きたない]]です。', choices: [{ n: 1, text: 'この へやは ひろいです。' }, { n: 2, text: 'この へやは くらいです。' }, { n: 3, text: 'この へやは よごれて います。' }, { n: 4, text: 'この へやは せまいです。' }], answer: 3, translationPt: 'Este quarto está sujo.', explanationPt: 'きたない (sujo) ≈ «よごれて います» (está sujo). ひろい=amplo, くらい=escuro, せまい=apertado.' },
    { id: 'n4-mock-vocab-29', number: 29, prompt: '{田中|たなか}さんに [[あやまりました]]。', choices: [{ n: 1, text: '田中さんに「ありがとう」と いいました。' }, { n: 2, text: '田中さんに「ごめんなさい」と いいました。' }, { n: 3, text: '田中さんに「おめでとう」と いいました。' }, { n: 4, text: '田中さんに「さようなら」と いいました。' }], answer: 2, translationPt: 'Pedi desculpas ao Tanaka.', explanationPt: 'あやまる = pedir desculpa → disse «ごめんなさい».' },
    { id: 'n4-mock-vocab-30', number: 30, prompt: 'この {仕事|しごと}は [[かんたん]]です。', choices: [{ n: 1, text: 'この 仕事は たいへんです。' }, { n: 2, text: 'この 仕事は やさしいです。' }, { n: 3, text: 'この 仕事は おもしろいです。' }, { n: 4, text: 'この 仕事は いそがしいです。' }], answer: 2, translationPt: 'Este trabalho é simples.', explanationPt: 'かんたん (simples/fácil) ≈ やさしい (fácil). たいへん=difícil/penoso (oposto).' },
  ],
}

const vocabM5: ExerciseGroup = {
  id: 'n4-mock-vocab-m5',
  title: 'もんだい5',
  subtitlePt: 'Uso correto da palavra',
  instructionJa: 'つぎの ことばの つかいかたで いちばん いい ものを 1・2・3・4から ひとつ えらんでください。',
  instructionPt: 'Escolha a frase em que a palavra dada é usada corretamente.',
  questions: [
    { id: 'n4-mock-vocab-31', number: 31, prompt: '「つごう」 (= disponibilidade/conveniência de horário)', choices: [{ n: 1, text: 'きょうは つごうが わるいので、行けません。' }, { n: 2, text: 'この くつは つごうが いいです。' }, { n: 3, text: 'へやの つごうを そうじしました。' }, { n: 4, text: 'つごうな りょうりを たべました。' }], answer: 1, translationPt: 'Hoje não posso ir porque estou indisponível.', explanationPt: 'つごう = disponibilidade/agenda. 都合が悪い = estar indisponível. (Para objetos usa-se 便利/ちょうどいい.)' },
    { id: 'n4-mock-vocab-32', number: 32, prompt: '「しゅみ」 (= hobby, passatempo)', choices: [{ n: 1, text: 'わたしの しゅみは おんがくを きく ことです。' }, { n: 2, text: 'あさ しゅみを たべます。' }, { n: 3, text: 'でんしゃで しゅみへ 行きます。' }, { n: 4, text: 'あたまが しゅみです。' }], answer: 1, translationPt: 'Meu hobby é ouvir música.', explanationPt: 'しゅみ = passatempo: «meu hobby é ~». As outras frases não fazem sentido.' },
    { id: 'n4-mock-vocab-33', number: 33, prompt: '「なれる」 (= acostumar-se)', choices: [{ n: 1, text: '日本の せいかつに なれました。' }, { n: 2, text: 'コップに 水を なれます。' }, { n: 3, text: '本を なれて よみます。' }, { n: 4, text: 'ともだちに プレゼントを なれます。' }], answer: 1, translationPt: 'Acostumei-me com a vida no Japão.', explanationPt: '〜に なれる = acostumar-se com ~: 生活に なれました.' },
    { id: 'n4-mock-vocab-34', number: 34, prompt: '「ねっしん」 (= dedicado, com empenho)', choices: [{ n: 1, text: 'かれは ねっしんに べんきょうします。' }, { n: 2, text: 'きょうは ねっしんな てんきです。' }, { n: 3, text: 'この りょうりは ねっしんです。' }, { n: 4, text: 'へやが ねっしんに なりました。' }], answer: 1, translationPt: 'Ele estuda com afinco.', explanationPt: 'ねっしん = empenhado/dedicado (descreve atitude de pessoas): 熱心に 勉強する.' },
    { id: 'n4-mock-vocab-35', number: 35, prompt: '「とどける」 (= entregar, levar até)', choices: [{ n: 1, text: 'おとした さいふを こうばんに とどけました。' }, { n: 2, text: 'まいあさ パンを とどけて たべます。' }, { n: 3, text: '本を とどけて よみます。' }, { n: 4, text: 'みずを とどけて のみます。' }], answer: 1, translationPt: 'Levei (entreguei) a carteira perdida ao posto policial.', explanationPt: 'とどける = entregar/levar algo a um lugar ou pessoa: 交番に 届ける (levar ao kōban).' },
  ],
}

const vocabulary: Section = {
  id: 'vocabulary',
  level: 'N4-mock',
  titleJa: 'げんごちしき（もじ・ごい）',
  titlePt: 'Vocabulário e Escrita',
  summaryPt:
    'Simulado autoral N4 (caracteres e vocabulário): leitura, escrita, vocabulário, frases equivalentes e uso. 35 questões originais.',
  studyNotes: [
    {
      title: 'Sobre esta leva (autoral)',
      bodyPt:
        'Questões **originais** (autorais) no **formato do JLPT N4**, para prática extra — não reproduzem material oficial. Cinco partes da seção もじ・ごい:\n\n- **もんだい1** — leitura do kanji.\n- **もんだい2** — escrita em kanji.\n- **もんだい3** — vocabulário na lacuna `（　）`.\n- **もんだい4** — frase de sentido equivalente.\n- **もんだい5** — uso correto da palavra (用法).',
    },
  ],
  groups: [vocabM1, vocabM2, vocabM3, vocabM4, vocabM5],
}

export const n4_mock: Level = {
  id: 'N4-mock',
  courseId: 'jlpt',
  titlePt: 'N4 — Simulado autoral',
  descriptionPt:
    'Simulado de prática do N4 com questões originais (autorais) no formato JLPT, para treinar além dos simulados oficiais. Explicações em pt-BR. (Em construção: 文法・読解 e 聴解 serão adicionados.)',
  sections: [vocabulary],
}
