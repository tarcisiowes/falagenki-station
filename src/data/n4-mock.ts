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

// ---------------------------------------------------------------------
//  言語知識（文法）・読解 — Grammar
// ---------------------------------------------------------------------
const gramM1: ExerciseGroup = {
  id: 'n4-mock-gram-m1',
  title: 'もんだい1',
  subtitlePt: 'Forma gramatical (preencher a lacuna)',
  instructionJa: '（　）に 何を 入れますか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a melhor forma.',
  questions: [
    { id: 'n4-mock-gram-1', number: 1, prompt: '{雨|あめ}が ふって いる（　）、しあいは ちゅうしに なりました。', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'し' }], answer: 1, translationPt: 'Como está chovendo, o jogo foi cancelado.', explanationPt: '〜ので = porque/como (razão objetiva). のに = embora (contraste).' },
    { id: 'n4-mock-gram-2', number: 2, prompt: 'まいにち れんしゅうして、じょうずに {泳|およ}げる（　）なりました。', choices: [{ n: 1, text: 'ように' }, { n: 2, text: 'ことに' }, { n: 3, text: 'ために' }, { n: 4, text: 'そうに' }], answer: 1, translationPt: 'Treinando todo dia, passei a nadar bem.', explanationPt: '〜ように なる = passar a (conseguir) ~ (mudança de capacidade): 泳げるように なった.' },
    { id: 'n4-mock-gram-3', number: 3, prompt: 'ねつが あるなら、びょういんへ {行|い}った（　）が いいですよ。', choices: [{ n: 1, text: 'ほう' }, { n: 2, text: 'こと' }, { n: 3, text: 'もの' }, { n: 4, text: 'ところ' }], answer: 1, translationPt: 'Se está com febre, é melhor ir ao hospital.', explanationPt: '〜た ほうが いい = é melhor fazer ~ (conselho): 行った ほうが いい.' },
    { id: 'n4-mock-gram-4', number: 4, prompt: 'そらが くらいです。ゆうがた {雨|あめ}が ふる（　）。', choices: [{ n: 1, text: 'かもしれません' }, { n: 2, text: 'はずでした' }, { n: 3, text: 'ところです' }, { n: 4, text: 'ことです' }], answer: 1, translationPt: 'O céu está escuro. Talvez chova de tardinha.', explanationPt: '〜かもしれない = talvez/é possível que ~ (incerteza).' },
    { id: 'n4-mock-gram-5', number: 5, prompt: 'この えいがは こどもでも たのしめる（　）。', choices: [{ n: 1, text: 'でしょう' }, { n: 2, text: 'ましょう' }, { n: 3, text: 'ください' }, { n: 4, text: 'ません' }], answer: 1, translationPt: 'Este filme provavelmente até crianças conseguem curtir.', explanationPt: '〜でしょう = provavelmente/deve ser (suposição).' },
    { id: 'n4-mock-gram-6', number: 6, prompt: 'ここに ごみを {捨|す}てない（　）ください。', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'と' }, { n: 3, text: 'ば' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Por favor, não jogue lixo aqui.', explanationPt: '〜ないで ください = por favor, não faça ~: 捨てないで ください.' },
    { id: 'n4-mock-gram-7', number: 7, prompt: 'ばんごはんを {食|た}べて（　）、おふろに {入|はい}ります。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'まで' }, { n: 3, text: 'のに' }, { n: 4, text: 'ても' }], answer: 1, translationPt: 'Depois de jantar, tomo banho.', explanationPt: '〜てから = depois de fazer ~: 食べてから 入る.' },
    { id: 'n4-mock-gram-8', number: 8, prompt: 'この みせは ねだんも {安|やす}い（　）、てんいんも しんせつです。', choices: [{ n: 1, text: 'し' }, { n: 2, text: 'ので' }, { n: 3, text: 'のに' }, { n: 4, text: 'から' }], answer: 1, translationPt: 'Nesta loja o preço é barato e além disso os funcionários são gentis.', explanationPt: '〜し = enumera qualidades/razões: 安いし、しんせつだ.' },
    { id: 'n4-mock-gram-9', number: 9, prompt: 'まどを {開|あ}けた（　）、つめたい かぜが {入|はい}って きた。', choices: [{ n: 1, text: 'ら' }, { n: 2, text: 'ば' }, { n: 3, text: 'ても' }, { n: 4, text: 'のに' }], answer: 1, translationPt: 'Quando abri a janela, entrou um vento frio.', explanationPt: '〜たら = quando/ao fazer ~ (depois disso aconteceu algo): 開けたら 入って きた.' },
    { id: 'n4-mock-gram-10', number: 10, prompt: '{妹|いもうと}に えいごを {教|おし}えて（　）。', choices: [{ n: 1, text: 'あげました' }, { n: 2, text: 'もらいました' }, { n: 3, text: 'くれました' }, { n: 4, text: 'おきました' }], answer: 1, translationPt: 'Ensinei inglês para a minha irmã mais nova.', explanationPt: '〜て あげる = fazer algo POR alguém (eu → outro): 教えて あげました.' },
    { id: 'n4-mock-gram-11', number: 11, prompt: 'わからない ことを {先生|せんせい}に {教|おし}えて（　）。', choices: [{ n: 1, text: 'あげました' }, { n: 2, text: 'もらいました' }, { n: 3, text: 'やりました' }, { n: 4, text: 'いきました' }], answer: 2, translationPt: 'Pedi ao professor que me ensinasse o que eu não sabia.', explanationPt: '〜て もらう = receber o favor de alguém (outro → eu): 教えて もらいました.' },
    { id: 'n4-mock-gram-12', number: 12, prompt: '{旅行|りょこう}の まえに、ホテルを よやくして（　）。', choices: [{ n: 1, text: 'おきます' }, { n: 2, text: 'みます' }, { n: 3, text: 'しまいます' }, { n: 4, text: 'いきます' }], answer: 1, translationPt: 'Antes da viagem, vou reservar o hotel (de antemão).', explanationPt: '〜て おく = fazer ~ de antemão/deixar preparado: よやくして おきます.' },
    { id: 'n4-mock-gram-13', number: 13, prompt: 'たくさん べんきょうした（　）、しけんに おちて しまった。', choices: [{ n: 1, text: 'のに' }, { n: 2, text: 'ので' }, { n: 3, text: 'から' }, { n: 4, text: 'し' }], answer: 1, translationPt: 'Embora eu tenha estudado muito, fui reprovado na prova.', explanationPt: '〜のに = embora/apesar de (resultado inesperado): 勉強したのに 落ちた.' },
    { id: 'n4-mock-gram-14', number: 14, prompt: 'この {本|ほん}は おもしろそうですが、まだ {読|よ}んで（　）。', choices: [{ n: 1, text: 'いません' }, { n: 2, text: 'ありません' }, { n: 3, text: 'みません' }, { n: 4, text: 'おきません' }], answer: 1, translationPt: 'Este livro parece interessante, mas ainda não li.', explanationPt: 'まだ 〜て いない = ainda não fez ~: まだ 読んで いません.' },
    { id: 'n4-mock-gram-15', number: 15, prompt: 'もし あした {晴|は}れれ（　）、こうえんへ {行|い}きましょう。', choices: [{ n: 1, text: 'ば' }, { n: 2, text: 'たら' }, { n: 3, text: 'と' }, { n: 4, text: 'なら' }], answer: 1, translationPt: 'Se amanhã fizer sol, vamos ao parque.', explanationPt: 'Forma condicional 〜ば: 晴れる → 晴れれば (se fizer sol).' },
  ],
}

const gramM2: ExerciseGroup = {
  id: 'n4-mock-gram-m2',
  title: 'もんだい2',
  subtitlePt: 'Montagem da frase (★)',
  instructionJa: '★に 入る ものは どれですか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'Ordene os fragmentos. Qual entra na posição ★? (A explicação mostra a frase montada.)',
  questions: [
    { id: 'n4-mock-gram-16', number: 16, prompt: 'わたしは ＿＿ ＿＿ ★ ＿＿ あります。', choices: [{ n: 1, text: 'ことが' }, { n: 2, text: '{行|い}った' }, { n: 3, text: '{日本|にほん}' }, { n: 4, text: 'に' }], answer: 2, translationPt: 'Eu já fui ao Japão.', explanationPt: 'Ordem: 日本 に 行った ことが あります (〜た ことが ある = já fez). ★ = 行った (2).' },
    { id: 'n4-mock-gram-17', number: 17, prompt: 'あした ＿＿ ＿＿ ★ ＿＿ つもりです。', choices: [{ n: 1, text: 'する' }, { n: 2, text: 'で' }, { n: 3, text: '{勉強|べんきょう}' }, { n: 4, text: '{図書館|としょかん}' }], answer: 3, translationPt: 'Amanhã pretendo estudar na biblioteca.', explanationPt: 'Ordem: 図書館 で 勉強 する つもりです. ★ = 勉強 (3).' },
    { id: 'n4-mock-gram-18', number: 18, prompt: 'すみません、＿＿ ＿＿ ★ ＿＿ ください。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'つかいかた' }, { n: 3, text: 'これの' }, { n: 4, text: '{教|おし}えて' }], answer: 1, translationPt: 'Com licença, ensine-me como usar isto.', explanationPt: 'Ordem: これの つかいかた を 教えて ください. ★ = を (1).' },
    { id: 'n4-mock-gram-19', number: 19, prompt: 'A「なつやすみは どうでしたか。」B「＿＿ ＿＿ ★ ＿＿。」', choices: [{ n: 1, text: 'より' }, { n: 2, text: 'おもった' }, { n: 3, text: 'たのしかった' }, { n: 4, text: 'ずっと' }], answer: 4, translationPt: '— Como foram as férias? — Foram muito mais divertidas do que eu pensava.', explanationPt: 'Ordem: おもった より ずっと たのしかった (〜より ずっと = muito mais que). ★ = ずっと (4).' },
    { id: 'n4-mock-gram-20', number: 20, prompt: '＿＿ ＿＿ ★ ＿＿ わすれないで ください。', choices: [{ n: 1, text: 'のを' }, { n: 2, text: 'もって' }, { n: 3, text: 'かさを' }, { n: 4, text: '{来|く}る' }], answer: 4, translationPt: 'Não esqueça de trazer o guarda-chuva.', explanationPt: 'Ordem: かさを もって 来る のを わすれないで ください. ★ = 来る (4).' },
  ],
}

const gramM3: ExerciseGroup = {
  id: 'n4-mock-gram-m3',
  title: 'もんだい3',
  subtitlePt: 'Gramática no texto (cloze)',
  instructionJa:
    '21から25に 何を 入れますか。文章の 意味を 考えて、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n【わたしの まちの こうえん】\nわたしの まちには、おおきな こうえんが あります。その こうえんは いえから あるいて 10ぷん【21】ところに あります。やすみの 日には、たくさんの {人|ひと}が さんぽや うんどうを して います。せんしゅうは、ともだち【22】いっしょに、こうえんで しゃしんを とりました。こうえんの {花|はな}が とても きれいだった【23】、いい しゃしんが とれました。【24】、こうえんには レストランも あって、しょくじも できます。これ【25】、もっと いろいろな きせつに この こうえんへ 行きたいです。',
  instructionPt: 'Leia o texto (sobre o parque do bairro) e escolha o que melhor preenche cada lacuna 21–25.',
  questions: [
    { id: 'n4-mock-gram-21', number: 21, prompt: '【21】', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'に' }, { n: 3, text: 'で' }, { n: 4, text: 'を' }], answer: 1, translationPt: '...fica num lugar a 10 minutos a pé de casa.', explanationPt: '「あるいて 10ぷんの ところ」 — の liga a expressão de tempo ao substantivo ところ.' },
    { id: 'n4-mock-gram-22', number: 22, prompt: '【22】', choices: [{ n: 1, text: 'と' }, { n: 2, text: 'を' }, { n: 3, text: 'に' }, { n: 4, text: 'が' }], answer: 1, translationPt: 'Tirei fotos junto com um amigo.', explanationPt: '〜と いっしょに = junto COM ~: ともだちと いっしょに.' },
    { id: 'n4-mock-gram-23', number: 23, prompt: '【23】', choices: [{ n: 1, text: 'ので' }, { n: 2, text: 'のに' }, { n: 3, text: 'ても' }, { n: 4, text: 'なら' }], answer: 1, translationPt: 'Como as flores estavam lindas, saíram boas fotos.', explanationPt: '〜ので = porque (razão): きれいだったので.' },
    { id: 'n4-mock-gram-24', number: 24, prompt: '【24】', choices: [{ n: 1, text: 'それに' }, { n: 2, text: 'でも' }, { n: 3, text: 'しかし' }, { n: 4, text: 'では' }], answer: 1, translationPt: 'Além disso, no parque há um restaurante e dá para fazer refeições.', explanationPt: 'それに = além disso (acrescenta informação). でも/しかし = mas.' },
    { id: 'n4-mock-gram-25', number: 25, prompt: '【25】', choices: [{ n: 1, text: 'からも' }, { n: 2, text: 'までも' }, { n: 3, text: 'でも' }, { n: 4, text: 'だけも' }], answer: 1, translationPt: 'De agora em diante também quero ir a esse parque em várias estações.', explanationPt: 'これからも = de agora em diante também (これから + も).' },
  ],
}

const grammar: Section = {
  id: 'grammar',
  level: 'N4-mock',
  titleJa: 'げんごちしき（ぶんぽう）',
  titlePt: 'Gramática',
  summaryPt:
    'Simulado autoral N4 (gramática): forma gramatical, montagem de frases (★) e gramática no texto. 25 questões originais.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (文法)',
      bodyPt:
        '- **もんだい1** — escolher a **forma** que preenche a lacuna `（　）`.\n- **もんだい2** — **ordenar** 4 fragmentos; responder qual fica na posição **★**.\n- **もんだい3** — **cloze**: preencher as lacunas de um texto pensando no sentido.',
    },
  ],
  groups: [gramM1, gramM2, gramM3],
}

// ---------------------------------------------------------------------
//  読解 — Reading
// ---------------------------------------------------------------------
const readM4: ExerciseGroup = {
  id: 'n4-mock-read-m4',
  title: 'もんだい4',
  subtitlePt: 'Compreensão de texto curto',
  instructionJa: 'つぎの (1)から(3)の ぶんしょうを 読んで、しつもんに こたえてください。',
  instructionPt: 'Leia cada texto curto e responda à pergunta.',
  questions: [
    { id: 'n4-mock-read-26', number: 26, context: '（1）リンさんへ\nあしたの かいぎは 10じからですが、9じはんに きて、へやの じゅんびを てつだって ください。よろしく おねがいします。 — やまだ', prompt: 'リンさんは あした 9じはんに {何|なに}を しますか。', choices: [{ n: 1, text: 'かいぎに でます。' }, { n: 2, text: 'へやの じゅんびを てつだいます。' }, { n: 3, text: 'やまださんに れんらくします。' }, { n: 4, text: '10じに きます。' }], answer: 2, translationPt: 'O que a Lin faz amanhã às 9h30?', explanationPt: 'A reunião é às 10h, mas pede chegar às 9h30 para «へやの じゅんびを てつだって» (ajudar a preparar a sala).' },
    { id: 'n4-mock-read-27', number: 27, context: '（2）【おしらせ】\nこの エレベーターは こしょうの ため、きょうは つかえません。かいだんを つかって ください。ごめいわくを おかけします。', prompt: 'きょう、どうやって うえの かいへ {行|い}きますか。', choices: [{ n: 1, text: 'エレベーターで 行きます。' }, { n: 2, text: 'かいだんで 行きます。' }, { n: 3, text: 'うえの かいへは 行けません。' }, { n: 4, text: 'となりの ビルへ 行きます。' }], answer: 2, translationPt: 'Como ir ao andar de cima hoje?', explanationPt: 'O elevador está quebrado (こしょう); o aviso pede «かいだんを つかって ください» (use a escada).' },
    { id: 'n4-mock-read-28', number: 28, context: '（3）わたしは まいあさ ジョギングを して います。はじめは 15ふんだけでしたが、いまは 1じかん はしれる ように なりました。あさ はしると、一日 げんきに すごせます。', prompt: 'この {人|ひと}について、ただしいのは どれですか。', choices: [{ n: 1, text: 'いまは 15ふんだけ はしります。' }, { n: 2, text: 'よる ジョギングを します。' }, { n: 3, text: 'いまは 1じかん はしれます。' }, { n: 4, text: 'ジョギングが きらいです。' }], answer: 3, translationPt: 'O que está correto sobre essa pessoa?', explanationPt: 'Começou com 15 min, mas «いまは 1じかん はしれる ように なりました» (agora consegue correr 1 hora). Corre de manhã.' },
  ],
}

const readM5: ExerciseGroup = {
  id: 'n4-mock-read-m5',
  title: 'もんだい5',
  subtitlePt: 'Compreensão de texto médio',
  instructionJa:
    'つぎの ぶんしょうを 読んで、しつもんに こたえてください。\n\nせんしゅう、わたしは はじめて 一人で りょうりを つくりました。{母|はは}に でんわして、つくりかたを 聞きながら、カレーを つくりました。やさいを 切るのに 時間が かかって、たいへんでしたが、できあがった カレーは とても おいしかったです。かぞくも「おいしい」と 言って くれました。これからは、もっと いろいろな りょうりに ちょうせんしたいです。',
  instructionPt: 'Leia o texto (a primeira vez cozinhando sozinho) e responda.',
  questions: [
    { id: 'n4-mock-read-29', number: 29, prompt: 'この {人|ひと}は どうやって カレーを つくりましたか。', choices: [{ n: 1, text: '母と いっしょに つくりました。' }, { n: 2, text: '母に でんわで 聞きながら つくりました。' }, { n: 3, text: '本を 見ながら つくりました。' }, { n: 4, text: '一人で レシピを かんがえました。' }], answer: 2, translationPt: 'Como essa pessoa fez o curry?', explanationPt: '«母に でんわして、つくりかたを 聞きながら» = perguntando à mãe por telefone enquanto cozinhava.' },
    { id: 'n4-mock-read-30', number: 30, prompt: 'カレーを つくって、どう おもいましたか。', choices: [{ n: 1, text: 'やさいを 切るのは かんたんだった。' }, { n: 2, text: 'たいへんだったが、おいしく できた。' }, { n: 3, text: 'かぞくは たべなかった。' }, { n: 4, text: 'もう つくりたくない。' }], answer: 2, translationPt: 'O que achou de ter feito o curry?', explanationPt: 'Cortar os legumes deu trabalho (たいへん), «でも… とても おいしかった» — deu trabalho, mas ficou gostoso.' },
  ],
}

const readM6: ExerciseGroup = {
  id: 'n4-mock-read-m6',
  title: 'もんだい6',
  subtitlePt: 'Busca de informação',
  instructionJa:
    '右の あんないを 見て、しつもんに こたえてください。\n\n【スポーツクラブ あおぞら】\n・かいいんに なる：にゅうかいきん 3000円 ＋ まいつき 5000円\n・がくせい かいいん：まいつき 3000円\n・1日だけ つかう（ビジター）：2000円\n・プールも つかう {人|ひと}：＋1000円／つき\n※ どようび・にちようびは ビジターは つかえません。',
  instructionPt: 'Veja o quadro da academia “Aozora” e responda.',
  questions: [
    { id: 'n4-mock-read-31', number: 31, prompt: 'がくせいの {田中|たなか}さんが かいいんに なって、プールも つかいたいです。まいつき いくら はらいますか。', choices: [{ n: 1, text: '3000円' }, { n: 2, text: '4000円' }, { n: 3, text: '5000円' }, { n: 4, text: '6000円' }], answer: 2, translationPt: 'O Tanaka (estudante) vira sócio e quer usar a piscina. Quanto paga por mês?', explanationPt: 'Sócio estudante = 3000円/mês + piscina 1000円/mês = 4000円. (A taxa de adesão é só uma vez, não mensal.)' },
    { id: 'n4-mock-read-32', number: 32, prompt: '{山田|やまだ}さんは どようびに 1日だけ つかいたいです。できますか。', choices: [{ n: 1, text: 'はい、2000円で つかえます。' }, { n: 2, text: 'いいえ、どようびは ビジターは つかえません。' }, { n: 3, text: 'はい、3000円で つかえます。' }, { n: 4, text: 'はい、プールだけ つかえます。' }], answer: 2, translationPt: 'O Yamada quer usar só 1 dia, no sábado. Pode?', explanationPt: 'O ※ avisa: «どようび・にちようびは ビジターは つかえません» (visitante não pode usar aos sábados/domingos).' },
  ],
}

const reading: Section = {
  id: 'reading',
  level: 'N4-mock',
  titleJa: 'どっかい',
  titlePt: 'Leitura',
  summaryPt:
    'Simulado autoral N4 (leitura): textos curtos, texto médio e busca de informação. 7 questões originais.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (読解)',
      bodyPt:
        '- **もんだい4** — textos **curtos** (avisos, e-mails).\n- **もんだい5** — texto **médio**; entenda detalhes e a opinião.\n- **もんだい6** — **busca de informação** (folhetos, tabelas).',
    },
  ],
  groups: [readM4, readM5, readM6],
}

// ---------------------------------------------------------------------
//  聴解 — Listening (roteiro/texto; sem áudio por enquanto)
// ---------------------------------------------------------------------
const listenM1: ExerciseGroup = {
  id: 'n4-mock-listen-m1',
  title: 'もんだい1',
  subtitlePt: 'Compreensão de tarefa (pelo roteiro)',
  instructionJa: 'かいわを 読んで、しつもんに こたえてください。',
  instructionPt: 'Leia o diálogo (roteiro de áudio) e descubra o que a pessoa faz.',
  questions: [
    { id: 'n4-mock-listen-1', number: 1, context: 'おとこの{人|ひと}と おんなの{人|ひと}が はなして います。\nM：レポート、もう おわった？\nF：ううん、まだ。これから としょかんで {本|ほん}を かりて、それから かく。\nM：てつだおうか。\nF：ありがとう。じゃあ、{本|ほん}を いっしょに さがして。', prompt: '二人は はじめに {何|なに}を しますか。', choices: [{ n: 1, text: 'レポートを かく' }, { n: 2, text: '本を さがす' }, { n: 3, text: 'ごはんを たべる' }, { n: 4, text: 'いえに かえる' }], answer: 2, translationPt: 'O que os dois fazem primeiro?', explanationPt: 'Ela vai pegar livros na biblioteca e ele se oferece para ajudar a procurar: «本を いっしょに さがして» — primeiro procuram os livros.' },
    { id: 'n4-mock-listen-2', number: 2, context: 'てんいんと きゃくが はなして います。\nF：すみません、この シャツの {白|しろ}いのは ありますか。\nM：{白|しろ}は いま ありません。{青|あお}と {黒|くろ}は ありますよ。\nF：じゃあ、{黒|くろ}を ください。', prompt: 'きゃくは どの シャツを かいますか。', choices: [{ n: 1, text: '白い シャツ' }, { n: 2, text: '青い シャツ' }, { n: 3, text: '黒い シャツ' }, { n: 4, text: '赤い シャツ' }], answer: 3, translationPt: 'Qual camisa o cliente compra?', explanationPt: 'A branca está em falta; ela escolhe a preta: «黒を ください».' },
    { id: 'n4-mock-listen-3', number: 3, context: '{先生|せんせい}が はなして います。\nM：あしたは えんそくです。9じに がっこうに あつまって ください。おべんとうと のみものを もって きて ください。かさは いりません。', prompt: 'あした、{何|なに}を もって いきますか。', choices: [{ n: 1, text: 'おべんとうと かさ' }, { n: 2, text: 'おべんとうと のみもの' }, { n: 3, text: 'のみものと かさ' }, { n: 4, text: 'きょうかしょ' }], answer: 2, translationPt: 'O que levar amanhã?', explanationPt: '«おべんとうと のみものを もって きて» (marmita e bebida); «かさは いりません» (não precisa de guarda-chuva).' },
  ],
}

const listenM2: ExerciseGroup = {
  id: 'n4-mock-listen-m2',
  title: 'もんだい2',
  subtitlePt: 'Compreensão de ponto-chave (pelo roteiro)',
  instructionJa: 'かいわを 読んで、しつもんに こたえてください。',
  instructionPt: 'Leia o diálogo e escolha a informação específica pedida.',
  questions: [
    { id: 'n4-mock-listen-4', number: 4, context: 'おんなの{人|ひと}と おとこの{人|ひと}が はなして います。\nF：しゅうまつ、どこか {行|い}きましたか。\nM：{山|やま}に のぼる つもりでしたが、あめだったので、いえで えいがを {見|み}ました。', prompt: 'おとこの{人|ひと}は しゅうまつ {何|なに}を しましたか。', choices: [{ n: 1, text: '山に のぼった' }, { n: 2, text: 'いえで えいがを 見た' }, { n: 3, text: 'かいものを した' }, { n: 4, text: 'はたらいた' }], answer: 2, translationPt: 'O que o homem fez no fim de semana?', explanationPt: 'Pretendia subir a montanha, mas choveu, então «いえで えいがを 見ました» (viu filme em casa).' },
    { id: 'n4-mock-listen-5', number: 5, context: 'おとこの{人|ひと}と おんなの{人|ひと}が はなして います。\nM：あたらしい かばん、いいですね。たかかったでしょう。\nF：いいえ、セールで やすく かいました。5000円でした。\nM：へえ、やすいですね。', prompt: 'かばんは いくらでしたか。', choices: [{ n: 1, text: '500円' }, { n: 2, text: '5000円' }, { n: 3, text: '15000円' }, { n: 4, text: '50000円' }], answer: 2, translationPt: 'Quanto custou a bolsa?', explanationPt: 'Ela comprou na promoção: «5000円でした».' },
    { id: 'n4-mock-listen-6', number: 6, context: 'おんなの{人|ひと}と おとこの{人|ひと}が でんわで はなして います。\nF：もしもし、いま どこ？ えいがは 3じからだよ。\nM：ごめん、でんしゃが おくれて いて、3じ15ふんに つくと おもう。\nF：わかった、えきの まえで まってるね。', prompt: 'おとこの{人|ひと}は {何時|なんじ}に えきに つきますか。', choices: [{ n: 1, text: '3じ' }, { n: 2, text: '3じ15ふん' }, { n: 3, text: '3じはん' }, { n: 4, text: '2じ' }], answer: 2, translationPt: 'A que horas o homem chega à estação?', explanationPt: 'O trem está atrasado: «3じ15ふんに つくと おもう» (acho que chego às 3h15).' },
  ],
}

const listenM3: ExerciseGroup = {
  id: 'n4-mock-listen-m3',
  title: 'もんだい3',
  subtitlePt: 'Expressões em situação',
  instructionJa: 'ばめんを 読んで、なんと 言うか えらんでください。',
  instructionPt: 'Leia a situação e escolha o que dizer.',
  questions: [
    { id: 'n4-mock-listen-7', number: 7, prompt: 'ともだちが びょうきです。{何|なん}と 言いますか。', choices: [{ n: 1, text: 'おだいじに。' }, { n: 2, text: 'おめでとう。' }, { n: 3, text: 'いただきます。' }], answer: 1, translationPt: 'Seu amigo está doente. O que diz?', explanationPt: 'おだいじに = melhoras/cuide-se. おめでとう=parabéns, いただきます=antes de comer.' },
    { id: 'n4-mock-listen-8', number: 8, prompt: 'かいものの あと、お{金|かね}を はらいます。てんいんに {何|なん}と 言いますか。', choices: [{ n: 1, text: 'ぜんぶで いくらですか。' }, { n: 2, text: 'いらっしゃいませ。' }, { n: 3, text: 'おつかれさまです。' }], answer: 1, translationPt: 'Depois de escolher, você vai pagar. O que diz ao atendente?', explanationPt: 'ぜんぶで いくらですか = quanto é no total? いらっしゃいませ é o que o atendente diz.' },
    { id: 'n4-mock-listen-9', number: 9, prompt: 'あいての なまえが わかりません。{何|なん}と 聞きますか。', choices: [{ n: 1, text: 'お{名前|なまえ}は {何|なん}ですか。' }, { n: 2, text: 'おいくつですか。' }, { n: 3, text: 'いつですか。' }], answer: 1, translationPt: 'Você não sabe o nome da pessoa. O que pergunta?', explanationPt: 'お名前は 何ですか = qual é o seu nome? おいくつ=quantos anos, いつ=quando.' },
  ],
}

const listenM4: ExerciseGroup = {
  id: 'n4-mock-listen-m4',
  title: 'もんだい4',
  subtitlePt: 'Resposta rápida',
  instructionJa: 'はじめの ことばを 読んで、いちばん いい へんじを えらんでください。',
  instructionPt: 'Leia a fala e escolha a resposta mais natural.',
  questions: [
    { id: 'n4-mock-listen-10', number: 10, prompt: 'しゅうまつ、{何|なに}を しましたか。', choices: [{ n: 1, text: 'ともだちと あいました。' }, { n: 2, text: 'げんきです。' }, { n: 3, text: 'そうですね。' }], answer: 1, translationPt: 'O que você fez no fim de semana?', explanationPt: 'Pergunta sobre uma ação no passado → «ともだちと あいました» (encontrei amigos).' },
    { id: 'n4-mock-listen-11', number: 11, prompt: 'この いすを つかっても いいですか。', choices: [{ n: 1, text: 'ええ、どうぞ。' }, { n: 2, text: 'いいえ、ちがいます。' }, { n: 3, text: 'こちらこそ。' }], answer: 1, translationPt: 'Posso usar esta cadeira?', explanationPt: 'Pedido de permissão 〜てもいいですか → «ええ、どうぞ» (claro, à vontade).' },
    { id: 'n4-mock-listen-12', number: 12, prompt: 'あした、てつだって くれませんか。', choices: [{ n: 1, text: 'はい、いいですよ。' }, { n: 2, text: 'はい、そうです。' }, { n: 3, text: 'どういたしまして。' }], answer: 1, translationPt: 'Amanhã, você poderia me ajudar?', explanationPt: 'Pedido 〜てくれませんか → aceitar: «はい、いいですよ».' },
    { id: 'n4-mock-listen-13', number: 13, prompt: 'おそく なって、すみません。', choices: [{ n: 1, text: 'だいじょうぶですよ。' }, { n: 2, text: 'おめでとうございます。' }, { n: 3, text: 'いってきます。' }], answer: 1, translationPt: 'Desculpe pelo atraso.', explanationPt: 'Resposta a um pedido de desculpas → «だいじょうぶですよ» (tudo bem).' },
  ],
}

const listenAudios = [
  { id: 'n4-mock-listening-q1', title: 'もんだい１ — Compreensão de tarefa', src: '/audio/N4-mock/N4Q1.mp3' },
  { id: 'n4-mock-listening-q2', title: 'もんだい２ — Compreensão de ponto-chave', src: '/audio/N4-mock/N4Q2.mp3' },
  { id: 'n4-mock-listening-q3', title: 'もんだい３ — Expressões em situação', src: '/audio/N4-mock/N4Q3.mp3' },
  { id: 'n4-mock-listening-q4', title: 'もんだい４ — Resposta rápida', src: '/audio/N4-mock/N4Q4.mp3' },
].map((t) => ({
  ...t,
  descriptionPt: 'Áudio sintetizado por voz (TTS). O roteiro, as perguntas e as respostas estão na aba “Exercícios”.',
  script: [],
}))

const listening: Section = {
  id: 'listening',
  level: 'N4-mock',
  titleJa: 'ちょうかい',
  titlePt: 'Audição',
  summaryPt:
    'Simulado autoral N4 (audição). Quatro tipos (tarefa, ponto-chave, expressões, resposta rápida), 13 itens. Áudio sintetizado por voz (TTS) na aba “Áudios”; o roteiro e as perguntas ficam na aba “Exercícios”.',
  studyNotes: [
    {
      title: 'Áudio (TTS) + roteiro',
      bodyPt:
        'Esta leva é autoral. O **áudio** de 聴解 é **sintetizado por voz (TTS)** — ouça na aba **“Áudios”**. O **roteiro**, as **perguntas** e as **respostas** estão na aba **“Exercícios”** (com explicações em pt-BR). Os quatro tipos seguem o formato do exame.',
    },
  ],
  groups: [listenM1, listenM2, listenM3, listenM4],
  audios: listenAudios,
}

export const n4_mock: Level = {
  id: 'N4-mock',
  courseId: 'jlpt',
  titlePt: 'N4 — Simulado autoral',
  descriptionPt:
    'Simulado de prática do N4 com questões originais (autorais) no formato JLPT, para treinar além dos simulados oficiais. Explicações em pt-BR. A audição tem áudio sintetizado por voz (TTS).',
  sections: [vocabulary, grammar, reading, listening],
}
