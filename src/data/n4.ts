import type { Level, Section } from './types'

// =====================================================================
//  N4 — Conteúdo fiel ao material oficial de exemplo do JLPT N4
//  Respostas conferidas pelo gabarito oficial (正答表).
// =====================================================================

const vocabulary: Section = {
  id: 'vocabulary',
  level: 'N4',
  titleJa: 'げんごちしき（もじ・ごい）',
  titlePt: 'Vocabulário e Escrita',
  summaryPt:
    'Conhecimento da língua: leitura de kanji, escrita, escolha da palavra certa, frases equivalentes e uso correto da palavra. 35 questões, 30 minutos no exame.',
  studyNotes: [
    {
      title: 'O que muda do N5 para o N4',
      bodyPt:
        'O vocabulário do N4 é maior e mais abstrato (sentimentos, opiniões, ações do cotidiano). Surge um quinto tipo de questão:\n\n- **もんだい1** — ler kanji (escolher a leitura).\n- **もんだい2** — escrever (escolher o kanji correto).\n- **もんだい3** — escolher a palavra de vocabulário que completa a frase.\n- **もんだい4** — frase de sentido equivalente.\n- **もんだい5** — escolher a frase em que a palavra dada é **usada corretamente** (uso/colocação).',
    },
    {
      title: 'Kanji e leituras que aparecem aqui',
      bodyPt:
        '| Palavra | Leitura | Significado |\n|---|---|---|\n| 楽しい | たのしい | divertido |\n| 味 | あじ | sabor |\n| 不便 | ふべん | inconveniente |\n| 以外 | いがい | exceto/além de |\n| 急行 | きゅうこう | (trem) expresso |\n| 反対 | はんたい | contra/oposto |\n\nCuidado com vogais longas (きゅう**う**, きゅうこ**う**) e com dakuten (はんたい × はんだい).',
    },
    {
      title: 'Verbos e palavras úteis do N4',
      bodyPt:
        '- **さそう** = convidar (alguém para sair). `デートに さそう`\n- **くらべる** = comparar. `3つを くらべて えらぶ`\n- **るす** = ausente de casa. `田中さんは るすです`\n- **見つかる** = ser encontrado (intransitivo). `かぎが まだ 見つかりません`\n- **ゆにゅう** (輸入) = importar × **ゆしゅつ** (輸出) = exportar.',
    },
  ],
  groups: [
    {
      id: 'n4-vocab-m1',
      title: 'もんだい１',
      subtitlePt: 'Leitura de kanji',
      instructionJa: 'の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'Como se lê a palavra destacada em hiragana? Escolha a melhor entre 1, 2, 3 e 4.',
      example: {
        prompt: 'これは 一つ [[千円]]です。',
        choices: [{ n: 1, text: 'せいえん' }, { n: 2, text: 'せいねん' }, { n: 3, text: 'せんえん' }, { n: 4, text: 'せんねん' }],
        answer: 3,
        note: '千円 = せんえん (mil ienes).',
      },
      questions: [
        { id: 'n4-vocab-1', number: 1, prompt: '今日は とても [[楽しかった]]ですね。', choices: [{ n: 1, text: 'いそがしかった' }, { n: 2, text: 'すずしかった' }, { n: 3, text: 'たのしかった' }, { n: 4, text: 'かなしかった' }], answer: 3, translationPt: 'Hoje foi muito divertido, né?', explanationPt: '楽しい = たのしい (divertido). いそがしい=ocupado, すずしい=fresco, かなしい=triste.' },
        { id: 'n4-vocab-2', number: 2, prompt: 'わたしは この [[味]]が すきです。', choices: [{ n: 1, text: 'かたち' }, { n: 2, text: 'いろ' }, { n: 3, text: 'におい' }, { n: 4, text: 'あじ' }], answer: 4, translationPt: 'Eu gosto deste sabor.', explanationPt: '味 = あじ (sabor/gosto). かたち=forma, いろ=cor, におい=cheiro.' },
        { id: 'n4-vocab-3', number: 3, prompt: 'この あたりは ちょっと [[不便]]ですね。', choices: [{ n: 1, text: 'ふべん' }, { n: 2, text: 'ぶべん' }, { n: 3, text: 'ふへん' }, { n: 4, text: 'ぶへん' }], answer: 1, translationPt: 'Esta região é um pouco inconveniente, né?', explanationPt: '不便 = ふべん (inconveniente). Sem dakuten; 便 aqui é べん.' },
        { id: 'n4-vocab-4', number: 4, prompt: 'やさいを [[切って]] ください。', choices: [{ n: 1, text: 'とって' }, { n: 2, text: 'きって' }, { n: 3, text: 'あらって' }, { n: 4, text: 'もって' }], answer: 2, translationPt: 'Corte os legumes, por favor.', explanationPt: '切る = きる (cortar); te-form 切って.' },
        { id: 'n4-vocab-5', number: 5, prompt: 'はやしさん[[以外]]は みんな 来ました。', choices: [{ n: 1, text: 'にそと' }, { n: 2, text: 'にがい' }, { n: 3, text: 'いそと' }, { n: 4, text: 'いがい' }], answer: 4, translationPt: 'Todos vieram, exceto o Hayashi.', explanationPt: '以外 = いがい (exceto/fora de). 〜以外は = exceto 〜.' },
        { id: 'n4-vocab-6', number: 6, prompt: 'まどから ずっと [[雲]]を 見て いました。', choices: [{ n: 1, text: 'ほし' }, { n: 2, text: 'ゆき' }, { n: 3, text: 'くも' }, { n: 4, text: 'そら' }], answer: 3, translationPt: 'Fiquei o tempo todo olhando as nuvens pela janela.', explanationPt: '雲 = くも (nuvem). ほし=estrela, ゆき=neve, そら=céu.' },
        { id: 'n4-vocab-7', number: 7, prompt: 'その 電車は [[急行]]ですよ。', choices: [{ n: 1, text: 'きゅこ' }, { n: 2, text: 'きゅこう' }, { n: 3, text: 'きゅうこ' }, { n: 4, text: 'きゅうこう' }], answer: 4, translationPt: 'Aquele trem é expresso!', explanationPt: '急行 = きゅうこう (trem expresso). Duas vogais longas: きゅ**う**こ**う**.' },
        { id: 'n4-vocab-8', number: 8, prompt: 'これは [[写さないで]] ください。', choices: [{ n: 1, text: 'おさないで' }, { n: 2, text: 'うつさないで' }, { n: 3, text: 'けさないで' }, { n: 4, text: 'おとさないで' }], answer: 2, translationPt: 'Por favor, não fotografe/copie isto.', explanationPt: '写す = うつす (fotografar/copiar); negativo 写さないで.' },
        { id: 'n4-vocab-9', number: 9, prompt: 'その いけんには [[反対]]です。', choices: [{ n: 1, text: 'はんたい' }, { n: 2, text: 'ほんたい' }, { n: 3, text: 'はんだい' }, { n: 4, text: 'ほんだい' }], answer: 1, translationPt: 'Sou contra essa opinião.', explanationPt: '反対 = はんたい (oposição/contra). 〜に 反対です = sou contra 〜.' },
      ],
    },
    {
      id: 'n4-vocab-m2',
      title: 'もんだい２',
      subtitlePt: 'Escrita (escolha o kanji correto)',
      instructionJa: 'の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'Como se escreve a palavra destacada? Escolha a melhor entre 1, 2, 3 e 4.',
      example: {
        prompt: 'ちょっと [[くち]]を あけて ください。',
        choices: [{ n: 1, text: '口' }, { n: 2, text: '自' }, { n: 3, text: '目' }, { n: 4, text: '回' }],
        answer: 1,
        note: 'くち = 口 (boca).',
      },
      questions: [
        { id: 'n4-vocab-10', number: 10, prompt: '[[くろい]] くつしたが ほしいです。', choices: [{ n: 1, text: '白い' }, { n: 2, text: '黒い' }, { n: 3, text: '赤い' }, { n: 4, text: '青い' }], answer: 2, translationPt: 'Quero meias pretas.', explanationPt: 'くろい = 黒い (preto). 白い=branco, 赤い=vermelho, 青い=azul.' },
        { id: 'n4-vocab-11', number: 11, prompt: 'なつやすみの [[けいかく]]は まだ きまって いません。', choices: [{ n: 1, text: '計書' }, { n: 2, text: '訂画' }, { n: 3, text: '計画' }, { n: 4, text: '訂書' }], answer: 3, translationPt: 'O plano das férias de verão ainda não foi decidido.', explanationPt: 'けいかく = 計画 (plano). 計 (calcular) + 画 (planejar).' },
        { id: 'n4-vocab-12', number: 12, prompt: 'わたしは [[いしゃ]]に なりたいです。', choices: [{ n: 1, text: '匠員' }, { n: 2, text: '医員' }, { n: 3, text: '匠者' }, { n: 4, text: '医者' }], answer: 4, translationPt: 'Quero ser médico.', explanationPt: 'いしゃ = 医者 (médico). 医 (medicina) + 者 (pessoa).' },
        { id: 'n4-vocab-13', number: 13, prompt: 'あしたの [[よる]] かぞくと 出かけます。', choices: [{ n: 1, text: '夜' }, { n: 2, text: '昼' }, { n: 3, text: '夕' }, { n: 4, text: '朝' }], answer: 1, translationPt: 'Amanhã à noite vou sair com a família.', explanationPt: 'よる = 夜 (noite). 昼=tarde/meio-dia, 夕=anoitecer, 朝=manhã.' },
        { id: 'n4-vocab-14', number: 14, prompt: 'かさを [[かして]] ください。', choices: [{ n: 1, text: '貨して' }, { n: 2, text: '資して' }, { n: 3, text: '貸して' }, { n: 4, text: '質して' }], answer: 3, translationPt: 'Me empreste o guarda-chuva, por favor.', explanationPt: 'かす = 貸す (emprestar); te-form 貸して.' },
        { id: 'n4-vocab-15', number: 15, prompt: 'あしたは サッカーの [[しあい]]が あります。', choices: [{ n: 1, text: '誡会' }, { n: 2, text: '誡合' }, { n: 3, text: '試会' }, { n: 4, text: '試合' }], answer: 4, translationPt: 'Amanhã tem jogo de futebol.', explanationPt: 'しあい = 試合 (partida/jogo). 試 + 合.' },
      ],
    },
    {
      id: 'n4-vocab-m3',
      title: 'もんだい３',
      subtitlePt: 'Vocabulário no contexto',
      instructionJa: '（ ）に なにを いれますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'O que entra em （　）? Escolha a palavra mais adequada entre 1, 2, 3 e 4.',
      example: {
        prompt: 'ざっしが ２（　） あります。',
        choices: [{ n: 1, text: 'さつ' }, { n: 2, text: 'まい' }, { n: 3, text: 'だい' }, { n: 4, text: 'ひき' }],
        answer: 1,
        note: '〜さつ = contador para livros/revistas.',
      },
      questions: [
        { id: 'n4-vocab-16', number: 16, prompt: 'さとうさんが けがを したと 聞いて、みんな （　）しました。', choices: [{ n: 1, text: 'しんぱい' }, { n: 2, text: 'けいけん' }, { n: 3, text: 'しつれい' }, { n: 4, text: 'おじぎ' }], answer: 1, translationPt: 'Ao ouvir que a Sato se machucou, todos ficaram preocupados.', explanationPt: 'しんぱいする = preocupar-se. Combina com “ouvir que alguém se machucou”.' },
        { id: 'n4-vocab-17', number: 17, prompt: 'わたしには、しょうらい かしゅに なると いう （　）が あります。', choices: [{ n: 1, text: 'けしき' }, { n: 2, text: 'ゆめ' }, { n: 3, text: 'おもいで' }, { n: 4, text: 'せわ' }], answer: 2, translationPt: 'Eu tenho o sonho de me tornar cantor no futuro.', explanationPt: 'ゆめ = sonho/objetivo. けしき=paisagem, おもいで=lembrança, せわ=cuidado.' },
        { id: 'n4-vocab-18', number: 18, prompt: 'リーさんも こんどの パーティーに （　） 来て くださいね。', choices: [{ n: 1, text: 'ひじょうに' }, { n: 2, text: 'ぜひ' }, { n: 3, text: 'じゅうぶん' }, { n: 4, text: 'いつも' }], answer: 2, translationPt: 'Lee, venha sem falta à festa desta vez, viu?', explanationPt: 'ぜひ = sem falta/por favor (com convite/pedido). ひじょうに=extremamente.' },
        { id: 'n4-vocab-19', number: 19, prompt: 'これから きかいの つかいかたを （　）しますから、よく 聞いて ください。', choices: [{ n: 1, text: 'じゅんび' }, { n: 2, text: 'りよう' }, { n: 3, text: 'せつめい' }, { n: 4, text: 'せいさん' }], answer: 3, translationPt: 'Agora vou explicar como usar a máquina, então ouçam bem.', explanationPt: 'せつめいする = explicar. Combina com “つかいかた” (modo de usar).' },
        { id: 'n4-vocab-20', number: 20, prompt: 'はが わるいので、（　） ものは 食べられません。', choices: [{ n: 1, text: 'きびしい' }, { n: 2, text: 'かたい' }, { n: 3, text: 'はやい' }, { n: 4, text: 'ふかい' }], answer: 2, translationPt: 'Como estou com problema nos dentes, não consigo comer coisas duras.', explanationPt: 'かたい = duro. Faz sentido com “não consigo comer” por causa do dente.' },
        { id: 'n4-vocab-21', number: 21, prompt: 'もりさんを デートに （　）が、行けないと 言われました。', choices: [{ n: 1, text: 'さそいました' }, { n: 2, text: 'つたえました' }, { n: 3, text: 'あんないしました' }, { n: 4, text: 'しょうかいしました' }], answer: 1, translationPt: 'Convidei o Mori para um encontro, mas ele disse que não podia ir.', explanationPt: 'さそう = convidar (para sair/fazer algo). デートに さそう = chamar para um encontro.' },
        { id: 'n4-vocab-22', number: 22, prompt: 'わたしの むすこは、1年で 5（　）くらい せが 高く なりました。', choices: [{ n: 1, text: 'グラム' }, { n: 2, text: 'ばん' }, { n: 3, text: 'けん' }, { n: 4, text: 'センチ' }], answer: 4, translationPt: 'Meu filho cresceu cerca de 5 cm em um ano.', explanationPt: 'センチ (cm) é a unidade de altura. グラム=grama, けん=casas, ばん=ordinal.' },
        { id: 'n4-vocab-23', number: 23, prompt: 'お店で 3だいの パソコンを （　）、いちばん かるい パソコンを えらびました。', choices: [{ n: 1, text: 'かたづけて' }, { n: 2, text: 'かぞえて' }, { n: 3, text: 'くらべて' }, { n: 4, text: 'はらって' }], answer: 3, translationPt: 'Comparei 3 notebooks na loja e escolhi o mais leve.', explanationPt: 'くらべる = comparar. Faz sentido antes de “escolher o mais leve”.' },
        { id: 'n4-vocab-24', number: 24, prompt: 'たなかさんの いえの 電気が ついて いませんね。たなかさんは （　）の ようです。', choices: [{ n: 1, text: 'うそ' }, { n: 2, text: 'じゆう' }, { n: 3, text: 'ちゅうし' }, { n: 4, text: 'るす' }], answer: 4, translationPt: 'A luz da casa do Tanaka está apagada. Parece que ele não está em casa.', explanationPt: 'るす = ausente de casa. Luz apagada → parece estar fora.' },
        { id: 'n4-vocab-25', number: 25, prompt: 'へやの かぎを さがして いますが、まだ （　）。', choices: [{ n: 1, text: '見つかりません' }, { n: 2, text: 'つかまえません' }, { n: 3, text: 'しりません' }, { n: 4, text: 'さわりません' }], answer: 1, translationPt: 'Estou procurando a chave do quarto, mas ainda não a achei.', explanationPt: '見つかる = ser encontrado. まだ 見つかりません = ainda não apareceu/foi achada.' },
      ],
    },
    {
      id: 'n4-vocab-m4',
      title: 'もんだい４',
      subtitlePt: 'Frases de sentido equivalente',
      instructionJa: 'の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'Escolha a frase com sentido quase igual à frase dada.',
      questions: [
        { id: 'n4-vocab-26', number: 26, prompt: 'おとうとは あの きっさてんで [[アルバイトを して います]]。', choices: [{ n: 1, text: 'おとうとは あの きっさてんで まって います。' }, { n: 2, text: 'おとうとは あの きっさてんで はたらいて います。' }, { n: 3, text: 'おとうとは あの きっさてんで コーヒーを 飲んで います。' }, { n: 4, text: 'おとうとは あの きっさてんで 友だちと 話して います。' }], answer: 2, translationPt: 'Meu irmão mais novo trabalha (de meio período) naquele café.', explanationPt: 'アルバイトを する = trabalhar (bico) = はたらく (trabalhar).' },
        { id: 'n4-vocab-27', number: 27, prompt: 'わたしは [[すいえい]]が すきです。', choices: [{ n: 1, text: 'わたしは はしるのが すきです。' }, { n: 2, text: 'わたしは およぐのが すきです。' }, { n: 3, text: 'わたしは ごはんを 食べるのが すきです。' }, { n: 4, text: 'わたしは 本を 読むのが すきです。' }], answer: 2, translationPt: 'Eu gosto de natação.', explanationPt: 'すいえい (natação) = およぐこと (nadar). はしる=correr.' },
        { id: 'n4-vocab-28', number: 28, prompt: 'それを 聞いて [[びっくりしました]]。', choices: [{ n: 1, text: 'それを 聞いて わらいました。' }, { n: 2, text: 'それを 聞いて こまりました。' }, { n: 3, text: 'それを 聞いて おこりました。' }, { n: 4, text: 'それを 聞いて おどろきました。' }], answer: 4, translationPt: 'Ao ouvir aquilo, me assustei/surpreendi.', explanationPt: 'びっくりする = おどろく (surpreender-se). わらう=rir, こまる=ficar em apuros, おこる=ficar bravo.' },
        { id: 'n4-vocab-29', number: 29, prompt: 'あの 人は [[うつくしい]]ですね。', choices: [{ n: 1, text: 'あの 人は きれいですね。' }, { n: 2, text: 'あの 人は 元気ですね。' }, { n: 3, text: 'あの 人は おもしろいですね。' }, { n: 4, text: 'あの 人は わかいですね。' }], answer: 1, translationPt: 'Aquela pessoa é bonita, né?', explanationPt: 'うつくしい = きれい (belo/bonito). 元気=animado, わかい=jovem.' },
        { id: 'n4-vocab-30', number: 30, prompt: 'この 国は こめを [[ゆにゅうして]] います。', choices: [{ n: 1, text: 'この 国は こめを ほかの 国に うって います。' }, { n: 2, text: 'この 国は こめを ほかの 国から もらって います。' }, { n: 3, text: 'この 国は こめを ほかの 国から 買って います。' }, { n: 4, text: 'この 国は こめを ほかの 国に あげて います。' }], answer: 3, translationPt: 'Este país importa arroz.', explanationPt: 'ゆにゅうする (importar) = 買う (comprar) de outro país. うる=vender (=exportar).' },
      ],
    },
    {
      id: 'n4-vocab-m5',
      title: 'もんだい５',
      subtitlePt: 'Uso correto da palavra',
      instructionJa: 'つぎの ことばの つかいかたで いちばん いい ものを １・２・３・４から ひとつ えらんで ください。',
      instructionPt: 'Escolha a frase em que a palavra dada está usada corretamente.',
      questions: [
        { id: 'n4-vocab-31', number: 31, prompt: '「さいきん」（= recentemente）', choices: [{ n: 1, text: 'さいきん りょうりが できたので、いっしょに 食べましょう。' }, { n: 2, text: 'さいきん しゅくだいを 出して ください。' }, { n: 3, text: 'きむらさんは さいきん けっこんした そうです。' }, { n: 4, text: 'さいきん 電車が 来ますから、いそいで えきに 行きましょう。' }], answer: 3, translationPt: 'Dizem que o Kimura se casou recentemente.', explanationPt: 'さいきん = recentemente (passado recente). Frase 3: “casou-se recentemente”. As outras pedem palavras como “já/em breve”.' },
        { id: 'n4-vocab-32', number: 32, prompt: '「おと」（= som）', choices: [{ n: 1, text: 'ラジオの おとが 大きいので、もう 少し 小さく して ください。' }, { n: 2, text: '日本語の おとが じょうずに なりたいので、毎日 たくさん 話します。' }, { n: 3, text: '店の 人に 大きな おとで 名前を よばれました。' }, { n: 4, text: 'すずきさんが ギターで ゆうめいな おとを ひいて くれました。' }], answer: 1, translationPt: 'O som do rádio está alto, abaixe um pouco.', explanationPt: 'おと = som (de objetos). Frase 1: volume do rádio. Para voz humana usa-se こえ; para música, きょく.' },
        { id: 'n4-vocab-33', number: 33, prompt: '「けんがく」（= visita de observação）', choices: [{ n: 1, text: 'かばんが ほしいので、デパートに 行って けんがくします。' }, { n: 2, text: 'わからない かんじは じしょで けんがくして ください。' }, { n: 3, text: '先生や 友だちと こうじょうを けんがくしました。' }, { n: 4, text: 'まいばん テレビで ニュースを けんがくして います。' }], answer: 3, translationPt: 'Visitamos a fábrica com o professor e os amigos.', explanationPt: 'けんがく = visita para observar/aprender (fábrica, museu). Frase 3 é o uso certo.' },
        { id: 'n4-vocab-34', number: 34, prompt: '「かざる」（= decorar/enfeitar）', choices: [{ n: 1, text: 'やまだ先生は テストの おしらせを きょうしつに かざりました。' }, { n: 2, text: 'おきゃくさんが 来ますから、へやに 花を かざりましょう。' }, { n: 3, text: '天気が わるいので、せんたくものは うちの 中に かざります。' }, { n: 4, text: 'こっちの エアコンは、となりの へやの かべに かざって ください。' }], answer: 2, translationPt: 'Vamos enfeitar o quarto com flores porque virão visitas.', explanationPt: 'かざる = decorar/enfeitar. Frase 2: enfeitar com flores. As outras pedem はる/ほす/つける.' },
        { id: 'n4-vocab-35', number: 35, prompt: '「こうじ」（= obra/construção）', choices: [{ n: 1, text: 'はが いたかったので、はいしゃで こうじを して もらいました。' }, { n: 2, text: 'この セーターは 古いですが、こうじを して、ずっと きて います。' }, { n: 3, text: 'ほんだなが こわれて しまったので、こうじを しました。' }, { n: 4, text: 'この みちは こうじを して いるので、とおれません。' }], answer: 4, translationPt: 'Esta rua está em obras, então não dá para passar.', explanationPt: 'こうじ = obra (de construção em vias, prédios). Frase 4 é o uso certo. Conserto de objeto seria しゅうり.' },
      ],
    },
  ],
}

const grammar: Section = {
  id: 'grammar',
  level: 'N4',
  titleJa: 'げんごちしき（ぶんぽう）',
  titlePt: 'Gramática',
  summaryPt:
    'Gramática do N4: partículas e expressões mais complexas, formas como させる (causativo), passiva, 〜なら, 〜のに, montagem de frases (★) e gramática no texto. Bloco Gramática + Leitura (60 min).',
  studyNotes: [
    {
      title: 'Estruturas-chave do N4',
      bodyPt:
        '- **Causativo 〜（さ）せる**: fazer/deixar alguém fazer. `両親を 心配させる` = fazer os pais se preocuparem.\n- **Passiva 〜（ら）れる / によって**: `じしょは 外国人によって 作られた` = o dicionário foi feito por estrangeiros.\n- **〜のに (para)**: `切るのに 2時間 かかった` = levou 2h para cortar.\n- **〜なら (se for o caso de)**: `あさってなら だいじょうぶ` = se for depois de amanhã, tudo bem.\n- **〜かもしれません**: pode ser que. `遅れるかもしれません`.\n- **〜そうです (parece)**: `席が 空きそうです` = parece que vai vagar.',
    },
    {
      title: 'Dar e receber (あげる・くれる・もらう)',
      bodyPt:
        'No N4 isso é muito cobrado:\n\n| Forma | Quem para quem | Ideia |\n|---|---|---|\n| **〜てあげる** | eu → outro | faço algo para alguém |\n| **〜てくれる** | outro → eu | alguém faz algo para mim |\n| **〜てもらう** | eu recebo de outro | peço/recebo a ação |\n\nEx.: `ともだちに 泳ぎ方を 教えてもらいました` = pedi/recebi do amigo o ensino de como nadar.',
    },
    {
      title: 'Advérbios que combinam com negativa',
      bodyPt:
        'Alguns advérbios “puxam” uma forma negativa:\n\n- **なかなか〜ない** = de jeito nenhum / custa a 〜. `バスが なかなか 来なかった` = o ônibus custou a chegar.\n- **あまり〜ない** = não muito.\n- **ぜんぜん〜ない** = nada/de modo algum.',
    },
  ],
  groups: [
    {
      id: 'n4-grammar-m1',
      title: 'もんだい１',
      subtitlePt: 'Partículas e expressões',
      instructionJa: '（ ）に 何を 入れますか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。',
      instructionPt: 'O que entra em （　）? Escolha a melhor opção entre 1, 2, 3 e 4.',
      example: {
        prompt: '{私|わたし}は {毎朝|まいあさ} {新聞|しんぶん} （　） {読|よ}みます。',
        choices: [{ n: 1, text: 'が' }, { n: 2, text: 'の' }, { n: 3, text: 'を' }, { n: 4, text: 'で' }],
        answer: 3,
        note: '新聞を 読みます = leio o jornal (を marca o objeto direto).',
      },
      questions: [
        { id: 'n4-grammar-1', number: 1, prompt: 'きのうの しゅくだいは {少|すく}なかったので、（　）{終|お}わりました。', choices: [{ n: 1, text: '20{分|ぷん}' }, { n: 2, text: '20{分|ぷん}しか' }, { n: 3, text: '20{分|ぷん}で' }, { n: 4, text: '20{分|ぷん}を' }], answer: 3, translationPt: 'A lição de ontem era pouca, então terminei em 20 minutos.', explanationPt: '〜で indica o tempo necessário: 20分で 終わる = terminar em 20 min.' },
        { id: 'n4-grammar-2', number: 2, prompt: 'この ロボットは {人|ひと}（　）{会話|かいわ}することが できます。', choices: [{ n: 1, text: 'や' }, { n: 2, text: 'を' }, { n: 3, text: 'へ' }, { n: 4, text: 'と' }], answer: 4, translationPt: 'Este robô consegue conversar com pessoas.', explanationPt: '〜と 会話する = conversar **com**. 会話/話す pedem a partícula と.' },
        { id: 'n4-grammar-3', number: 3, prompt: '{弟|おとうと}は {小|ちい}さいとき よく けがを して、{両親|りょうしん}（　）{心配|しんぱい}させました。', choices: [{ n: 1, text: 'で' }, { n: 2, text: 'を' }, { n: 3, text: 'の' }, { n: 4, text: 'や' }], answer: 2, translationPt: 'Quando pequeno, meu irmão se machucava muito e fazia os pais se preocuparem.', explanationPt: 'Causativo: 両親を 心配させる = fazer os pais se preocuparem. A pessoa que sente a emoção leva を.' },
        { id: 'n4-grammar-4', number: 4, prompt: 'ホテルの {朝|あさ}ご{飯|はん}の パンが とても おいしかったので、{八|やっ}つ（　）{食|た}べました。', choices: [{ n: 1, text: 'も' }, { n: 2, text: 'に' }, { n: 3, text: 'が' }, { n: 4, text: 'で' }], answer: 1, translationPt: 'O pão do café da manhã do hotel era tão gostoso que comi até oito.', explanationPt: '数 + も = enfatiza uma quantidade grande: 八つも = oito (nada menos que).' },
        { id: 'n4-grammar-5', number: 5, prompt: 'この {日本語|にほんご}の じしょは、150{年前|ねんまえ}に {外国人|がいこくじん}（　）{作|つく}られました。', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'を' }, { n: 3, text: 'について' }, { n: 4, text: 'によって' }], answer: 4, translationPt: 'Este dicionário de japonês foi feito por estrangeiros há 150 anos.', explanationPt: 'Na voz passiva, o agente (quem fez) é marcado por によって: 外国人によって 作られた.' },
        { id: 'n4-grammar-6', number: 6, prompt: 'Ａ{市|し}の {運動場|うんどうじょう}は （　）{使|つか}えますが、{予約|よやく}が ひつようです。', choices: [{ n: 1, text: 'だれでも' }, { n: 2, text: 'だれを' }, { n: 3, text: 'だれに' }, { n: 4, text: 'だれが' }], answer: 1, translationPt: 'O ginásio da cidade A qualquer um pode usar, mas precisa de reserva.', explanationPt: 'だれでも = qualquer pessoa. 〜でも dá o sentido de “seja quem for”.' },
        { id: 'n4-grammar-7', number: 7, prompt: '{前田|まえだ}「リーさん、いつも （　）{国|くに}の かぞくに れんらくしますか。」リー「メールを {書|か}くことが {多|おお}いです。」', choices: [{ n: 1, text: 'どのぐらい' }, { n: 2, text: 'どの' }, { n: 3, text: 'どうやって' }, { n: 4, text: 'どういう' }], answer: 3, translationPt: '“Lee, como você costuma contatar sua família no seu país?” “Costumo escrever e-mail.”', explanationPt: 'どうやって = de que maneira/por qual meio. A resposta (e-mail) é um meio.' },
        { id: 'n4-grammar-8', number: 8, prompt: '{娘|むすめ}は {先月|せんげつ} {高校|こうこう}を {卒業|そつぎょう}しました。（　）{大学|だいがく}の {入学式|にゅうがくしき}です。', choices: [{ n: 1, text: 'だんだん' }, { n: 2, text: 'あまり' }, { n: 3, text: 'だいたい' }, { n: 4, text: 'もうすぐ' }], answer: 4, translationPt: 'Minha filha se formou no ensino médio no mês passado. Logo é a cerimônia de ingresso na faculdade.', explanationPt: 'もうすぐ = logo, em breve. Combina com um evento futuro próximo.' },
        { id: 'n4-grammar-9', number: 9, prompt: '{今朝|けさ}は {駅|えき}に {行|い}く バスが （　）{来|こ}なかったので、タクシーで {行|い}きました。', choices: [{ n: 1, text: 'やっと' }, { n: 2, text: 'なかなか' }, { n: 3, text: 'きっと' }, { n: 4, text: 'いつか' }], answer: 2, translationPt: 'Hoje de manhã o ônibus para a estação custava a chegar, então fui de táxi.', explanationPt: 'なかなか〜ない = custar a / não 〜 de jeito nenhum. Combina com 来なかった.' },
        { id: 'n4-grammar-10', number: 10, context: '{山下|やました}「{南|みなみ}さん、あしたか あさって、カラオケに {行|い}かない？」', prompt: '{南|みなみ}「あ、いいね。あしたは {都合|つごう}が {悪|わる}いけど、あさって（　）だいじょうぶだよ。」', choices: [{ n: 1, text: 'なのに' }, { n: 2, text: 'だから' }, { n: 3, text: 'でも' }, { n: 4, text: 'なら' }], answer: 4, translationPt: '“Amanhã não dá, mas se for depois de amanhã, tudo bem.”', explanationPt: '〜なら = se for o caso de 〜. あさってなら = se for depois de amanhã.' },
        { id: 'n4-grammar-11', number: 11, prompt: '{私|わたし}は （　）{間|あいだ}、スーパーで アルバイトを して いました。', choices: [{ n: 1, text: '{夏休|なつやす}みに' }, { n: 2, text: '{夏休|なつやす}みで' }, { n: 3, text: '{夏休|なつやす}みの' }, { n: 4, text: '{夏休|なつやす}み' }], answer: 3, translationPt: 'Durante as férias de verão eu trabalhava num mercado.', explanationPt: '名詞 + の + 間 = durante 〜. 夏休みの 間 = durante as férias.' },
        { id: 'n4-grammar-12', number: 12, prompt: '{先週|せんしゅう} {庭|にわ}の {木|き}の えだを {切|き}りました。ぜんぶ （　）2{時間|じかん} かかりました。', choices: [{ n: 1, text: '{切|き}ったり' }, { n: 2, text: '{切|き}るのに' }, { n: 3, text: '{切|き}りに' }, { n: 4, text: '{切|き}るか どうか' }], answer: 2, translationPt: 'Semana passada cortei os galhos da árvore do quintal. Para cortar tudo levei 2 horas.', explanationPt: '動詞 + のに = para (fazer algo) / no esforço de. 切るのに 2時間 = 2h para cortar.' },
        { id: 'n4-grammar-13', number: 13, context: '{木村|きむら}「{山田|やまだ}さん、あしたの {午後|ごご}、サッカーの {練習|れんしゅう}に {行|い}きますか。」', prompt: '{山田|やまだ}「ええ、{行|い}きます。でも、{午前中|ごぜんちゅう}に {用事|ようじ}が あるので、（　）。」', choices: [{ n: 1, text: '{遅|おく}れないで ください' }, { n: 2, text: '{遅|おく}れないほうが いいです' }, { n: 3, text: '{遅|おく}れるかもしれません' }, { n: 4, text: '{遅|おく}れては いけません' }], answer: 3, translationPt: '“Vou sim. Mas tenho um compromisso de manhã, então talvez eu me atrase.”', explanationPt: '〜かもしれません = pode ser que. Como tem compromisso antes, “talvez se atrase”.' },
        { id: 'n4-grammar-14', number: 14, context: '（{食堂|しょくどう}で）{森|もり}「{空|あ}いて いる {席|せき}が ありませんね。」', prompt: '{田中|たなか}「ええ。あ、でも、あそこの {席|せき}が （　）よ。」{森|もり}「{本当|ほんとう}ですね。{空|あ}くまで、{少|すこ}し {待|ま}ちましょう。」', choices: [{ n: 1, text: '{空|あ}きそうです' }, { n: 2, text: '{空|あ}きました' }, { n: 3, text: '{空|あ}いて います' }, { n: 4, text: '{空|あ}いたようです' }], answer: 1, translationPt: '“Aquele lugar parece que vai vagar.” “É mesmo. Vamos esperar um pouco até vagar.”', explanationPt: '〜そうです (com raiz-ます) = parece que vai 〜. 空きそう = parece que vai vagar (ainda não vagou, por isso “esperar até vagar”).' },
        { id: 'n4-grammar-15', number: 15, context: '（{会議室|かいぎしつ}で）{林|はやし}「{上田|うえだ}さん、{会議|かいぎ}の じゅんびは {終|お}わりましたか。てつだいましょうか。」', prompt: '{上田|うえだ}「ありがとうございます。じゃあ、いすが {一|ひと}つ {足|た}りないので、となりの {会議室|かいぎしつ}から （　）。」', choices: [{ n: 1, text: '{持|も}って こなくても いいですか' }, { n: 2, text: '{持|も}って きて もらえますか' }, { n: 3, text: '{持|も}って こないと いけませんか' }, { n: 4, text: '{持|も}って きて いませんか' }], answer: 2, translationPt: '“Falta uma cadeira, então você poderia trazer da sala ao lado?”', explanationPt: '〜てもらえますか = você poderia (fazer para mim)? Pedido educado. Ueda pede que Hayashi traga a cadeira.' },
      ],
    },
    {
      id: 'n4-grammar-m2',
      title: 'もんだい２',
      subtitlePt: 'Montagem de frases (qual fica no ★)',
      instructionJa: '★ に 入る ものは どれですか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。',
      instructionPt: 'Reordene os 4 pedaços para formar a frase correta e indique qual fica na posição ★.',
      questions: [
        { id: 'n4-grammar-16', number: 16, prompt: '{先月|せんげつ}まで {花屋|はなや}が あった ＿＿ ＿★ ＿＿ ＿＿ おいしいです。', choices: [{ n: 1, text: 'できた' }, { n: 2, text: 'りんごの ケーキが' }, { n: 3, text: 'きっさてんは' }, { n: 4, text: '{場所|ばしょ}に' }], answer: 1, translationPt: 'O café que abriu no lugar onde havia uma floricultura até o mês passado tem um bolo de maçã delicioso.', explanationPt: 'Ordem: あった【場所に できた きっさてんは】りんごの ケーキが おいしい. No ★ (2ª posição) fica できた (opção 1).' },
        { id: 'n4-grammar-17', number: 17, prompt: 'きのうの {夜|よる} {家|いえ}に {帰|かえ}ってから、かぎを ＿＿ ＿＿ ＿★ ＿＿ 、{覚|おぼ}えて いません。', choices: [{ n: 1, text: 'どこ' }, { n: 2, text: '{置|お}いた' }, { n: 3, text: 'に' }, { n: 4, text: 'か' }], answer: 2, translationPt: 'Não me lembro onde coloquei a chave depois de chegar em casa ontem à noite.', explanationPt: 'Ordem: かぎを【どこ に 置いた か】覚えて いません. No ★ (3ª posição) fica 置いた (opção 2).' },
        { id: 'n4-grammar-18', number: 18, prompt: '{私|わたし}は ピアノを ＿＿ ＿＿ ＿★ ＿＿ {時間|じかん}が ありません。', choices: [{ n: 1, text: 'ひくのが' }, { n: 2, text: 'ひく' }, { n: 3, text: '{最近|さいきん} いそがしくて' }, { n: 4, text: '{好|す}きですが' }], answer: 3, translationPt: 'Gosto de tocar piano, mas ando ocupado e não tenho tempo de tocar.', explanationPt: 'Ordem: ピアノを【ひくのが 好きですが 最近 いそがしくて ひく】時間が ありません. No ★ (3ª posição) fica 最近 いそがしくて (opção 3).' },
        { id: 'n4-grammar-19', number: 19, prompt: '{私|わたし}は 20さいの たんじょうびに そふが ＿＿ ＿＿ ＿★ ＿＿ います。', choices: [{ n: 1, text: '{大切|たいせつ}に' }, { n: 2, text: 'くれた' }, { n: 3, text: '{使|つか}って' }, { n: 4, text: 'カメラを' }], answer: 1, translationPt: 'Uso com cuidado a câmera que meu avô me deu no meu aniversário de 20 anos.', explanationPt: 'Ordem: そふが【くれた カメラを 大切に 使って】います. No ★ (3ª posição) fica 大切に (opção 1).' },
        { id: 'n4-grammar-20', number: 20, context: '{林|はやし}「{来週|らいしゅう}、{野球|やきゅう}の {試合|しあい}を {見|み}に {行|い}こうと {思|おも}って いるんですが、リーさんも いっしょに どうですか。」', prompt: 'リー「えっ、{野球|やきゅう}の {試合|しあい}ですか。いいですね。 ＿＿ ＿＿ ＿★ ＿＿ です。」', choices: [{ n: 1, text: 'ぜひ {行|い}きたい' }, { n: 2, text: 'ことが ない' }, { n: 3, text: '{見|み}に {行|い}った' }, { n: 4, text: 'ので' }], answer: 4, translationPt: '“Nunca fui ver um jogo de beisebol, então quero muito ir.”', explanationPt: 'Ordem: 【見に 行った ことが ない ので ぜひ 行きたい】です. No ★ (3ª posição) fica ので (opção 4). 〜たことがない = nunca fiz.' },
      ],
    },
    {
      id: 'n4-grammar-m3',
      title: 'もんだい３',
      subtitlePt: 'Gramática dentro do texto',
      instructionJa: '21 から 25 に 何を 入れますか。文章の 意味を 考えて、１・２・３・４から いちばん いい ものを 一つ えらんで ください。',
      instructionPt: 'Leia a redação “Natação” (de uma estudante intercambista) e escolha a expressão que melhor completa cada lacuna (21 a 25).',
      questions: [
        { id: 'n4-grammar-21', number: 21, context: '【{水泳|すいえい} — チン・メイキ】\n{私|わたし}の しゅみは {水泳|すいえい}です。{毎週|まいしゅう} プールで {泳|およ}いで います。＿21＿、{半年前|はんとしまえ}までは {泳|およ}ぐことが できませんでした。', prompt: '＿21＿ に 入る ことば', choices: [{ n: 1, text: 'それに' }, { n: 2, text: 'だから' }, { n: 3, text: 'しかし' }, { n: 4, text: 'たとえば' }], answer: 3, translationPt: '“Nado toda semana na piscina. No entanto, até meio ano atrás eu não sabia nadar.”', explanationPt: 'しかし = porém/no entanto. Contrasta “nado agora” com “antes não sabia”.' },
        { id: 'n4-grammar-22', number: 22, context: '{半年前|はんとしまえ}、{夏休|なつやす}みに {友|とも}だちと {海|うみ}に {行|い}きました。ともだちは {遠|とお}くまで {泳|およ}いで いきました。けれども、{私|わたし}＿22＿ {泳|およ}げませんでした。', prompt: '＿22＿ に 入る ことば', choices: [{ n: 1, text: 'は' }, { n: 2, text: 'なら' }, { n: 3, text: 'でも' }, { n: 4, text: 'より' }], answer: 1, translationPt: '“A amiga nadou para longe. Mas eu não consegui nadar.”', explanationPt: 'は marca o tópico em contraste: 私は (quanto a mim) não consegui — opondo-se à amiga.' },
        { id: 'n4-grammar-23', number: 23, context: '{次|つぎ}の {週|しゅう}から {町|まち}の プールで {泳|およ}ぐ {練習|れんしゅう}を {始|はじ}めました。{水泳|すいえい}の {上手|じょうず}な ともだちに {泳|およ}ぎ{方|かた}を ＿23＿。', prompt: '＿23＿ に 入る ことば', choices: [{ n: 1, text: '{教|おし}えて いました' }, { n: 2, text: '{教|おし}えて あげました' }, { n: 3, text: '{教|おし}えて くれました' }, { n: 4, text: '{教|おし}えて もらいました' }], answer: 4, translationPt: '“Pedi/recebi de uma amiga boa em natação que me ensinasse a nadar.”', explanationPt: '〜てもらう = recebo a ação de alguém. 教えてもらいました = pedi/recebi que (ela) me ensinasse.' },
        { id: 'n4-grammar-24', number: 24, context: '{難|むずか}しかったですが、{毎週|まいしゅう} ともだちと {練習|れんしゅう}しました。それで {少|すこ}しずつ ＿24＿。{今|いま}は {一人|ひとり}で {練習|れんしゅう}して います。', prompt: '＿24＿ に 入る ことば', choices: [{ n: 1, text: '{泳|およ}いで おきました' }, { n: 2, text: '{泳|およ}げるように なりました' }, { n: 3, text: '{泳|およ}いで しまいました' }, { n: 4, text: '{泳|およ}げることに なりました' }], answer: 2, translationPt: '“E assim, aos poucos passei a conseguir nadar.”', explanationPt: '〜ようになりました = passei a (conseguir) 〜. 泳げるようになりました = passei a saber nadar.' },
        { id: 'n4-grammar-25', number: 25, context: '{泳|およ}ぐのは とても {楽|たの}しいです。{次|つぎ}に {海|うみ}に {行|い}くまでに たくさん ＿25＿。', prompt: '＿25＿ に 入る ことば', choices: [{ n: 1, text: '{練習|れんしゅう}するためです' }, { n: 2, text: '{練習|れんしゅう}したようです' }, { n: 3, text: '{練習|れんしゅう}したいです' }, { n: 4, text: '{練習|れんしゅう}するそうです' }], answer: 3, translationPt: '“Até a próxima vez que eu for ao mar, quero treinar bastante.”', explanationPt: '〜たいです = quero 〜. Encerra a redação com o desejo da autora: 練習したいです.' },
      ],
    },
  ],
}

const reading: Section = {
  id: 'reading',
  level: 'N4',
  titleJa: 'どっかい',
  titlePt: 'Leitura',
  summaryPt:
    'Leitura do N4: textos curtos, um texto médio (redação com perguntas sobre “por quê”) e busca de informação num folheto com condições. Bloco Gramática + Leitura (60 min).',
  studyNotes: [
    {
      title: 'Estratégia para a leitura do N4',
      bodyPt:
        '- **Textos curtos (もんだい4)**: avisos, bilhetes, pequenos relatos. A pergunta costuma testar um detalhe (o que fazer, por quê).\n- **Texto médio (もんだい5)**: uma redação. As perguntas de **「どうして／なぜ」** (por quê) pedem a causa que aparece no texto, muitas vezes perto de palavras sublinhadas.\n- **Busca de informação (もんだい6)**: um folheto/tabela. Liste as **condições** do enunciado (mês, dia da semana, horário, preço) e elimine o que não atende.',
    },
    {
      title: 'Palavras úteis na leitura',
      bodyPt:
        '| Japonês | Português |\n|---|---|\n| お知らせ | aviso/comunicado |\n| 忘れ物 | objeto esquecido |\n| 見学 | visita de observação |\n| 楽しみ | algo que se aprecia / expectativa |\n| 〜なければならない | tenho que 〜 |\n| 〜てくれる | alguém faz (algo) por mim |\n| 料金 | tarifa/preço |',
    },
  ],
  groups: [
    {
      id: 'n4-reading-m4',
      title: 'もんだい４',
      subtitlePt: 'Textos curtos',
      instructionJa: 'つぎの (1)から (4)の 文章を 読んで、質問に 答えて ください。',
      instructionPt: 'Leia os textos curtos (1) a (4) e responda à pergunta. Escolha a melhor opção entre 1, 2, 3 e 4.',
      questions: [
        { id: 'n4-reading-26', number: 26, context: '(1) Aviso na sala de uma escola de japonês:\n\n【{忘|わす}れ{物|もの}が ありました】\nQuem esqueceu, venha buscar na sala dos professores.\n① {辞書|じしょ}（estava na sala 103）\n② {帽子|ぼうし}（estava no refeitório）\nDe 5/12 (seg) a 7/12 (qua) é período de provas, então **não se pode entrar na sala dos professores**. Avise o professor da sua turma na sala de aula.', prompt: '{試験|しけん}{中|ちゅう}の 3{日間|にちかん}に {忘|わす}れ{物|もの}を {取|と}りに {行|い}きたい {人|ひと}は、どうしなければ なりませんか。', choices: [{ n: 1, text: '{試験|しけん}が {終|お}わるまで {待|ま}ちます。' }, { n: 2, text: '{先生|せんせい}たちの {部屋|へや}へ {取|と}りに {行|い}きます。' }, { n: 3, text: '{忘|わす}れ{物|もの}が あった {場所|ばしょ}へ {取|と}りに {行|い}きます。' }, { n: 4, text: '{教室|きょうしつ}で、{自分|じぶん}の クラスの {先生|せんせい}に {話|はな}します。' }], answer: 4, translationPt: 'Durante os 3 dias de prova, o que a pessoa precisa fazer para pegar o objeto esquecido?', explanationPt: 'No período de provas não se pode entrar na sala dos professores; o aviso manda avisar o professor da turma na sala — opção 4.' },
        { id: 'n4-reading-27', number: 27, context: '(2) Sorvete:\nO sorvete é gostoso no verão, mas eu como às vezes até no inverno frio. No verão como todo dia, por isso só compro os baratos; já no inverno compro os caros. Comer um bom sorvete num quarto aquecido — [[esse é o meu prazer]].', prompt: '{私|わたし}の {楽|たの}しみは {何|なに}ですか。', choices: [{ n: 1, text: '{冬|ふゆ}に {暖|あたた}かい {部屋|へや}で {毎日|まいにち} アイスクリームを {食|た}べること' }, { n: 2, text: '{冬|ふゆ}に {暖|あたた}かい {部屋|へや}で {高|たか}い アイスクリームを {食|た}べること' }, { n: 3, text: '{夏|なつ}に {毎日|まいにち} アイスクリームを {食|た}べること' }, { n: 4, text: '{夏|なつ}に {高|たか}い アイスクリームを {食|た}べること' }], answer: 2, translationPt: 'Qual é o prazer dele(a)?', explanationPt: 'O prazer é comer um sorvete **caro** num quarto **aquecido** — situação de inverno (no inverno compra os caros). Opção 2.' },
        { id: 'n4-reading-28', number: 28, context: '(3) Bilhete na mesa do prof. Takada:\n\nProf. Takada,\nO Sr. Hayashi, da fábrica de missô, ligou. As visitas em janeiro podem ser dia 19 (qui) às 10h ou 11h, e dia 26 (qui) às 14h ou 15h.\nEle disse que quando o **dia e o horário** da visita forem decididos, quer um telefonema. Disse também que gostaria de saber o **número de pessoas** que vão. — Himaru', prompt: 'この メモを {読|よ}んで、{高田|たかだ}{先生|せんせい}は {林|はやし}さんに {何|なに}を {知|し}らせなければ なりませんか。', choices: [{ n: 1, text: '{工場|こうじょう}{見学|けんがく}に {行|い}く {人|ひと}の {数|かず}だけ' }, { n: 2, text: '{工場|こうじょう}{見学|けんがく}に {行|い}く {日|ひ}と {時間|じかん}だけ' }, { n: 3, text: '{工場|こうじょう}{見学|けんがく}に {行|い}く {日|ひ}と {時間|じかん}と、{行|い}く {人|ひと}の {数|かず}' }, { n: 4, text: '{工場|こうじょう}{見学|けんがく}に {行|い}く {日|ひ}と {時間|じかん}が、いつごろ {決|き}まるか' }], answer: 3, translationPt: 'O que o prof. Takada precisa informar ao Sr. Hayashi?', explanationPt: 'O bilhete pede dois dados: o dia/horário escolhido **e** o número de pessoas — opção 3.' },
        { id: 'n4-reading-29', number: 29, context: '(4) Borracha preta:\nOntem comprei pela primeira vez uma borracha preta. A pessoa do caixa me explicou: “As brancas, com o uso, ficam sujas de preto e muita gente não gosta; por isso fizeram as pretas.” Como eu comprei porque achei a cor bacana, achei engraçado ouvir esse motivo.', prompt: '「{私|わたし}」は どうして {黒|くろ}い {消|け}しゴムを {買|か}いましたか。', choices: [{ n: 1, text: '{黒|くろ}い {消|け}しゴムは、{使|つか}った {後|あと}で {消|け}しゴムが {黒|くろ}く {汚|よご}れないから' }, { n: 2, text: '{黒|くろ}い {消|け}しゴムを {買|か}う {人|ひと}が {多|おお}いと {店|みせ}の {人|ひと}に {聞|き}いたから' }, { n: 3, text: '{黒|くろ}い {消|け}しゴムのほうが {字|じ}を きれいに {消|け}せるから' }, { n: 4, text: '{黒|くろ}い {消|け}しゴムは、{色|いろ}が かっこいいと {思|おも}ったから' }], answer: 4, translationPt: 'Por que “eu” comprei a borracha preta?', explanationPt: 'O texto diz: “comprei porque achei a cor bacana”. A explicação do caixa só foi um detalhe curioso. Opção 4.' },
      ],
    },
    {
      id: 'n4-reading-m5',
      title: 'もんだい５',
      subtitlePt: 'Texto médio (redação)',
      instructionJa: 'つぎの 文章を 読んで、質問に 答えて ください。',
      instructionPt: 'Leia a redação “A pessoa que encontrei na Estação de Tóquio” e responda às perguntas.',
      questions: [
        { id: 'n4-reading-30', number: 30, context: '【{東京駅|とうきょうえき}で {会|あ}った {人|ひと} — ケイティ・ワン】\nSemana passada fui à casa de uma amiga. No caminho, eu precisava baldear o trem na Estação de Tóquio, mas a estação é grande demais e eu não achava onde ficava o trem para a baldeação. Por isso, fiquei indo e voltando dentro da estação com um bilhete na mão. ①Quando eu estava aflita pensando “e agora?”, uma mulher chamada Yamada me dirigiu a palavra.', prompt: 'なぜ ①「どうしよう。」と {思|おも}いましたか。', choices: [{ n: 1, text: '{友達|ともだち}が {見|み}つからないから' }, { n: 2, text: '{間違|まちが}えて {東京駅|とうきょうえき}で {電車|でんしゃ}を {降|お}りて しまったから' }, { n: 3, text: '{乗|の}りたい {電車|でんしゃ}の {場所|ばしょ}が わからないから' }, { n: 4, text: '{知|し}らない {女|おんな}の {人|ひと}に {声|こえ}を かけられたから' }], answer: 3, translationPt: 'Por que ela pensou “e agora?”', explanationPt: 'Ela estava aflita porque **não achava onde ficava o trem** para baldear — opção 3.' },
        { id: 'n4-reading-31', number: 31, context: 'A Sra. Yamada disse que, enquanto tomava chá num café dentro da estação, viu “eu” indo e voltando. Perguntou “o que houve?”, eu respondi “não acho onde fica o trem” e ela foi comigo até o trem que eu pegaria.', prompt: 'なぜ {山田|やまだ}さんは「{私|わたし}」に {声|こえ}を かけましたか。', choices: [{ n: 1, text: '「{私|わたし}」が {行|い}ったり {来|き}たりして いるのを {見|み}たから' }, { n: 2, text: '「{私|わたし}」と {一緒|いっしょ}に お{茶|ちゃ}を {飲|の}みたいと {思|おも}ったから' }, { n: 3, text: '「{私|わたし}」を {山田|やまだ}さんの {友達|ともだち}と {間違|まちが}えたから' }, { n: 4, text: '「{私|わたし}」が {落|お}とした メモを {拾|ひろ}ったから' }], answer: 1, translationPt: 'Por que a Sra. Yamada falou com “eu”?', explanationPt: 'Porque ela viu “eu” indo e voltando (perdida) dentro da estação — opção 1.' },
        { id: 'n4-reading-32', number: 32, context: 'A Sra. Yamada estava em Tóquio a trabalho e disse que voltaria a Kyoto agora. Perguntei “e o seu horário, está tudo bem?”. Ela respondeu: “Há muitos shinkansen para Kyoto, o próximo serve. Quando eu morava no exterior, várias pessoas foram gentis comigo.” ②Eu agradeci dizendo “muito obrigada mesmo”.', prompt: 'なぜ ②お{礼|れい}を {言|い}いましたか。', choices: [{ n: 1, text: '{山田|やまだ}さんが、{京都|きょうと}に {行|い}く {新幹線|しんかんせん}が たくさん あると 「{私|わたし}」に {教|おし}えて くれたから' }, { n: 2, text: '{山田|やまだ}さんが、{帰|かえ}りが {遅|おそ}くなるかもしれないのに、「{私|わたし}」を {案内|あんない}して くれたから' }, { n: 3, text: '{山田|やまだ}さんが、「{私|わたし}」が {乗|の}る {予定|よてい}の {電車|でんしゃ}の {時間|じかん}のことを {心配|しんぱい}して くれたから' }, { n: 4, text: '{山田|やまだ}さんが、「{私|わたし}」の {国|くに}の いろいろな {人|ひと}に {親切|しんせつ}に して くれたと {聞|き}いたから' }], answer: 2, translationPt: 'Por que ela agradeceu?', explanationPt: 'A Yamada a acompanhou mesmo correndo o risco de chegar mais tarde em casa — por essa gentileza ela agradeceu. Opção 2.' },
        { id: 'n4-reading-33', number: 33, context: 'Ao entrar no trem e ficar sozinha, lembrei das palavras da Sra. Yamada e meu coração ficou aquecido. E pensei: “Eu também quero ser como a Sra. Yamada e （　）.”', prompt: '（　）に {入|い}れるのに、いちばん いい {文|ぶん}は どれですか。', choices: [{ n: 1, text: '{仕事|しごと}を {頑張|がんば}ろう' }, { n: 2, text: '{外国|がいこく}に {住|す}んでみたい' }, { n: 3, text: '{困|こま}って いる {人|ひと}に {親切|しんせつ}に しよう' }, { n: 4, text: '{東京駅|とうきょうえき}のことを よく {知|し}りたい' }], answer: 3, translationPt: 'Qual frase melhor completa a lacuna?', explanationPt: 'A autora foi ajudada e quer retribuir: “ser gentil com quem está em apuros” — opção 3, coerente com o tema.' },
      ],
    },
    {
      id: 'n4-reading-m6',
      title: 'もんだい６',
      subtitlePt: 'Busca de informação',
      instructionJa: '右の ページの お知らせを 見て、下の 質問に 答えて ください。',
      instructionPt: 'Use o folheto “Vamos aproveitar a primavera” (青野市) para responder. Escolha a melhor opção.',
      questions: [
        { id: 'n4-reading-34', number: 34, context: 'Folheto «春を楽しもう» (cidade de Aono) — eventos de março/abril:\n① Jantar — 500円 — 5/3(dom) — Escola Hanamura — 11h–14h\n② Concerto — 800円 — 11/3(sáb) — Templo Sakura — 14h–16h\n③ Concerto — 950円 — 8/4(sáb) — Ginásio Municipal — 17h–19h\n④ Passeio de ônibus — 800円 — 15/4(sáb) — Praia Higashikawa — 8h–14h\n⑤ Festival — grátis — 23/4(dom) — Parque Leste — 17h–21h\n⑥ Concerto — 1.200円 — 29/4(sáb) — Restaurante “Kurokawa” — 12h–14h\n\nHames e Maria querem ir: evento **de abril**, **dentro de um estabelecimento**, ouvindo música, com **refeição no almoço**.', prompt: 'ハメスさんたちが {選|えら}べるのは、どれですか。', choices: [{ n: 1, text: '②' }, { n: 2, text: '③' }, { n: 3, text: '⑤' }, { n: 4, text: '⑥' }], answer: 4, translationPt: 'Qual evento Hames e Maria podem escolher?', explanationPt: 'Abril + música + almoço dentro do local → ⑥ (restaurante, 12h–14h, com piano). ③ é à noite sem refeição. Opção 4.' },
        { id: 'n4-reading-35', number: 35, context: '(mesmo folheto da questão anterior)\nGina quer ir num **sábado**, **não pode** ir a eventos cujo horário de encontro seja **antes das 13h**, e quer **tarifa de até 1.000円**.\nHorários de encontro: ① 11h · ② 13h50 · ③ 16h50 · ④ 8h · ⑤ depois das 17h · ⑥ 11h50.', prompt: 'ジーナさんが {選|えら}べるのは、どれですか。', choices: [{ n: 1, text: '②と③' }, { n: 2, text: '②と③と④' }, { n: 3, text: '②と③と⑤' }, { n: 4, text: '③と⑤' }], answer: 1, translationPt: 'Quais eventos Gina pode escolher?', explanationPt: 'Sábados: ②③④⑥. Encontro ≥13h elimina ④(8h) e ⑥(11h50). Até 1.000円 elimina ⑥(1.200) — restam ② (800円) e ③ (950円). Opção 1.' },
      ],
    },
  ],
}

const listening: Section = {
  id: 'listening',
  level: 'N4',
  titleJa: 'ちょうかい',
  titlePt: 'Audição',
  summaryPt:
    'Compreensão auditiva do N4. Quatro tipos: compreensão de tarefa, de ponto-chave, expressões em situação e respostas rápidas. Ouça os áudios oficiais e acompanhe a transcrição com tradução. 35 minutos no exame.',
  studyNotes: [
    {
      title: 'Como estudar com os áudios',
      bodyPt:
        '1. **Ouça sem ler** e tente responder.\n2. Use o player para reduzir a velocidade (0,75×) e o **A–B** para repetir trechos.\n3. Leia a **transcrição oficial** com furigana; ative a **tradução pt-BR**.\n4. Marque “Mostrar respostas” e confira.\n\nNo N4 os diálogos são mais longos e há mudanças de ideia no meio da conversa — preste atenção em “あ、ごめん”, “やっぱり”, “でも”, que costumam alterar a resposta certa.',
    },
    {
      title: 'Os 4 tipos de questão',
      bodyPt:
        '- **もんだい1 (Compreensão de tarefa)**: o que a pessoa **precisa fazer**.\n- **もんだい2 (Ponto-chave)**: uma **informação específica** (motivo, horário, lugar).\n- **もんだい3 (Expressões)**: o que **dizer** numa situação (3 opções).\n- **もんだい4 (Resposta rápida)**: a **resposta** mais natural a uma fala (3 opções).',
    },
  ],
  groups: [],
  audios: [
    {
      id: 'n4-listening-q1',
      title: 'もんだい１ — Compreensão de tarefa',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e descubra o que a pessoa precisa fazer. (8 itens + exemplo)',
      src: '/audio/N4/N4Q1.mp3',
      script: [
        { label: '例', setupJa: '{男|おとこ}の{人|ひと}が {女|おんな}の{人|ひと}に{電話|でんわ}をしています。{男|おとこ}の{人|ひと}は{何|なに}を{買|か}って{帰|かえ}りますか。', setupPt: 'Um homem telefona para uma mulher. O que ele vai comprar antes de voltar?', lines: [
          { speaker: 'M', ja: 'これから{帰|かえ}るけど、{何|なに}か{買|か}って{帰|かえ}ろうか。', pt: 'Vou voltar agora; quer que eu compre alguma coisa?' },
          { speaker: 'F', ja: 'あ、ありがとう。えっとね、{牛乳|ぎゅうにゅう}。それから。', pt: 'Ah, obrigada. Então… leite. E…' },
          { speaker: 'M', ja: 'ちょっと{待|ま}って、{牛乳|ぎゅうにゅう}は 1{本|ぽん}でいいの？', pt: 'Peraí, leite é uma caixa só?' },
          { speaker: 'F', ja: 'えっと、2{本|ほん}お{願|ねが}い。それから、チーズ。', pt: 'Hmm, duas, por favor. E queijo.' },
          { speaker: 'M', ja: 'あれ、チーズはまだたくさんあったよね。', pt: 'Ué, ainda tinha bastante queijo, não tinha?' },
          { speaker: 'F', ja: 'ごめん、{今日|きょう}のお{昼|ひる}に{全部|ぜんぶ}{食|た}べたの。', pt: 'Desculpa, comi tudo no almoço de hoje.' },
          { speaker: 'M', ja: '{分|わ}かった。じゃ、{買|か}って{帰|かえ}るね。', pt: 'Entendi. Então compro e levo.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は{何|なに}を{買|か}って{帰|かえ}りますか。', answer: 4 },
        { label: '1番', setupJa: '{本屋|ほんや}で{店|みせ}の{人|ひと}と {女|おんな}の{人|ひと}が{話|はな}しています。{店|みせ}の{人|ひと}は{何|なに}を{使|つか}って{絵本|えほん}を{包|つつ}みますか。', setupPt: 'Numa livraria. Com o quê o vendedor vai embrulhar o livro ilustrado?', lines: [
          { speaker: 'M', ja: 'いらっしゃいませ。', pt: 'Bem-vinda.' },
          { speaker: 'F', ja: 'この{絵本|えほん}を{下|くだ}さい。{贈|おく}り{物|もの}なので、きれいに{包|つつ}んでくれませんか。', pt: 'Quero este livro ilustrado. É presente, pode embrulhar bonito?' },
          { speaker: 'M', ja: 'はい。{包|つつ}む{紙|かみ}は 2{種類|しゅるい}あります。こちらの{船|ふね}の{絵|え}と{花|はな}の{絵|え}とどちらがいいでしょうか。', pt: 'Claro. Temos 2 tipos de papel. Prefere o do desenho de barco ou o de flores?' },
          { speaker: 'F', ja: '{船|ふね}の{絵|え}がいいです。リボンもつけてください。', pt: 'O de barco. Coloque uma fita também, por favor.' },
          { speaker: 'M', ja: 'はい。{細|ほそ}いのと{太|ふと}いのがありますが、どちらにしますか。', pt: 'Certo. Tem fina e grossa; qual prefere?' },
          { speaker: 'F', ja: 'そうですね。{細|ほそ}いのにします。', pt: 'Então… a fina.' },
        ], questionJa: '{店|みせ}の{人|ひと}は{何|なに}を{使|つか}って{絵本|えほん}を{包|つつ}みますか。', answer: 1 },
        { label: '2番', setupJa: '{先生|せんせい}の{部屋|へや}で {男|おとこ}の{学生|がくせい}と{先生|せんせい}が{話|はな}しています。{男|おとこ}の{学生|がくせい}はいつまでに{本|ほん}を{返|かえ}さなければなりませんか。', setupPt: 'Na sala da professora. Até quando o aluno deve devolver o livro?', lines: [
          { speaker: 'M', ja: '{先生|せんせい}、この{本|ほん}を{借|か}りてもいいですか。', pt: 'Professora, posso pegar este livro emprestado?' },
          { speaker: 'F', ja: 'いいですよ。', pt: 'Pode.' },
          { speaker: 'M', ja: 'いつまでに{返|かえ}さなければなりませんか。', pt: 'Até quando preciso devolver?' },
          { speaker: 'F', ja: 'ええと、{今日|きょう}は{七日|なのか}ですね、{再来週|さらいしゅう}の{金曜日|きんようび}、えっと、23{日|にち}に{授業|じゅぎょう}で{使|つか}いたいですから、{授業|じゅぎょう}の{前|まえ}の{日|ひ}までに{返|かえ}してください。', pt: 'Hoje é dia 7. Vou usar na aula na sexta da semana depois da próxima, dia 23, então devolva até o dia anterior à aula.' },
          { speaker: 'M', ja: 'はい。{木曜日|もくようび}ですね。', pt: 'Certo. Quinta-feira, então.' },
          { speaker: 'F', ja: 'あ、すみません、その{前|まえ}の{日|ひ}までにお{願|ねが}いします。{再来週|さらいしゅう}の{木曜日|もくようび}は、{学校|がっこう}に{来|き}ません。', pt: 'Ah, desculpe, até o dia anterior a esse. Nessa quinta eu não venho à escola.' },
          { speaker: 'M', ja: 'はい。{分|わ}かりました。', pt: 'Tá, entendi.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}はいつまでに{本|ほん}を{返|かえ}さなければなりませんか。', answer: 3 },
        { label: '3番', setupJa: '{日本語|にほんご}{学校|がっこう}で{先生|せんせい}が{話|はな}しています。{留学生|りゅうがくせい}は{小学校|しょうがっこう}に{何|なに}を{持|も}っていかなければなりませんか。', setupPt: 'O professor fala. O que os intercambistas precisam levar à escola primária?', lines: [
          { speaker: 'M', ja: 'えー、{来週|らいしゅう}、みなみ{小学校|しょうがっこう}へ{行|い}って、{折|お}り{紙|がみ}を{子供|こども}たちに{習|なら}いますね。{皆|みな}さんは、{自分|じぶん}の{国|くに}について{写真|しゃしん}を{見|み}せながら{話|はな}しますね。{写真|しゃしん}を{忘|わす}れないようにしてください。あ、{折|お}り{紙|がみ}は{小学校|しょうがっこう}にあるものを{使|つか}います。それから、{小学校|しょうがっこう}の{建物|たてもの}に{入|はい}るときには、{靴|くつ}を{脱|ぬ}がなければなりませんから、スリッパを{持|も}っていってください。お{昼|ひる}ごはんは{必要|ひつよう}ありません。{小学校|しょうがっこう}が{準備|じゅんび}してくれます。', pt: 'Na semana que vem vamos à escola Minami aprender origami com as crianças. Vocês vão falar sobre o país de vocês mostrando fotos — não esqueçam as fotos. O origami usaremos o da escola. Ao entrar no prédio é preciso tirar os sapatos, então levem chinelos. Almoço não precisa: a escola prepara.' },
        ], questionJa: '{留学生|りゅうがくせい}は{小学校|しょうがっこう}に{何|なに}を{持|も}っていかなければなりませんか。', answer: 2 },
        { label: '4番', setupJa: '{日本語|にほんご}{学校|がっこう}で{事務所|じむしょ}の{人|ひと}と {男|おとこ}の{学生|がくせい}が{話|はな}しています。{男|おとこ}の{学生|がくせい}は{何|なに}を{書|か}きますか。', setupPt: 'Na secretaria. O que o aluno vai escrever?', lines: [
          { speaker: 'F', ja: 'キムさん、こんにちは。どうしましたか。', pt: 'Olá, Kim. O que houve?' },
          { speaker: 'M', ja: 'あの、{先週|せんしゅう}{引|ひ}っ{越|こ}しをしたんですが。', pt: 'É que eu me mudei semana passada.' },
          { speaker: 'F', ja: 'そうですか。じゃ、この{紙|かみ}に{名前|なまえ}と{新|あたら}しい{住所|じゅうしょ}と{電話|でんわ}{番号|ばんごう}を{書|か}いてください。', pt: 'Entendi. Então escreva neste papel o nome, o novo endereço e o telefone.' },
          { speaker: 'M', ja: 'はい。あのう、{電話|でんわ}{番号|ばんごう}も{書|か}かなければなりませんか。{変|か}わったのは{住所|じゅうしょ}だけです。', pt: 'Tá. Preciso escrever o telefone também? Só mudou o endereço.' },
          { speaker: 'F', ja: 'じゃ、{電話|でんわ}{番号|ばんごう}はいいです。それから、クラスは、{来週|らいしゅう}{新|あたら}しいクラスに{変|か}わりますから、{書|か}かないでください。', pt: 'Então o telefone não precisa. E a turma muda semana que vem, então não escreva.' },
          { speaker: 'M', ja: 'はい。', pt: 'Certo.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}は{何|なに}を{書|か}きますか。', answer: 4 },
        { label: '5番', setupJa: '{会社|かいしゃ}で {女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{電話|でんわ}で{話|はな}しています。{女|おんな}の{人|ひと}はどこから{資料|しりょう}を{持|も}っていきますか。', setupPt: 'Na empresa, ao telefone. De onde a mulher vai pegar o material?', lines: [
          { speaker: 'F', ja: 'はい、{鈴木|すずき}です。', pt: 'Alô, é a Suzuki.' },
          { speaker: 'M', ja: 'あ、もしもし。{木村|きむら}だけど、ごめん、{急|いそ}いで{会議室|かいぎしつ}まで{資料|しりょう}を{持|も}ってきてもらえる？', pt: 'Alô, é o Kimura. Desculpa, pode trazer rápido um material até a sala de reunião?' },
          { speaker: 'F', ja: 'はい。', pt: 'Sim.' },
          { speaker: 'M', ja: '{僕|ぼく}の{机|つくえ}の{引|ひ}き{出|だ}しに{入|はい}っているんだ。', pt: 'Está na gaveta da minha mesa.' },
          { speaker: 'F', ja: 'はい。', pt: 'Tá.' },
          { speaker: 'M', ja: 'ええと、{多分|たぶん}、{引|ひ}き{出|だ}しの{下|した}から 2{番目|ばんめ}に{入|はい}っていると{思|おも}う。{茶色|ちゃいろ}い{封筒|ふうとう}に{入|はい}っているからすぐ{分|わ}かると{思|おも}うよ。', pt: 'Acho que está na 2ª gaveta de baixo para cima. Está num envelope marrom, deve achar fácil.' },
          { speaker: 'F', ja: 'はい、{分|わ}かりました。{下|した}から 2{番目|ばんめ}ですね。', pt: 'Tá, entendi. 2ª de baixo, certo.' },
          { speaker: 'M', ja: 'あ、ごめん。そのもう{一|ひと}つ{上|うえ}だ。', pt: 'Ah, desculpa. É uma acima dessa.' },
          { speaker: 'F', ja: 'はい、{急|いそ}いで{持|も}っていきます。', pt: 'Ok, levo rápido.' },
        ], questionJa: '{女|おんな}の{人|ひと}はどこから{資料|しりょう}を{持|も}っていきますか。', answer: 3 },
        { label: '6番', setupJa: 'コンビニで {男|おとこ}の{店員|てんいん}と {女|おんな}の{店員|てんいん}が{話|はな}しています。{女|おんな}の{店員|てんいん}はこれから{何|なに}をしなければなりませんか。', setupPt: 'Numa loja de conveniência. O que a funcionária precisa fazer agora?', lines: [
          { speaker: 'M', ja: '{田中|たなか}さん、ごくろうさま。{田中|たなか}さんの{仕事|しごと}は 3{時|じ}までだから、そろそろ{終|お}わりだね。{店|みせ}の{中|なか}の{掃除|そうじ}は{終|お}わった？', pt: 'Tanaka, bom trabalho. Seu turno vai até as 3h, já está quase no fim. A limpeza de dentro da loja terminou?' },
          { speaker: 'F', ja: 'はい。', pt: 'Sim.' },
          { speaker: 'M', ja: '{店|みせ}の{前|まえ}は{昼|ひる}に{掃除|そうじ}したからまだきれいだね。じゃ、{最後|さいご}にごみ{箱|ばこ}のごみを{店|みせ}の{裏|うら}に{持|も}っていって。ごみを{置|お}いておくところは{分|わ}かる？', pt: 'A frente foi limpa ao meio-dia, ainda está limpa. Então, por último, leve o lixo da lixeira para os fundos. Sabe onde deixar o lixo?' },
          { speaker: 'F', ja: 'はい。あのう、すみません、まだ、{窓|まど}の{掃除|そうじ}が{終|お}わっていないんです。', pt: 'Sei. Ah, desculpe, ainda não terminei de limpar as janelas.' },
          { speaker: 'M', ja: 'それは、{僕|ぼく}がやるからいいよ。じゃ、{今|いま}{頼|たの}んだことをやってから{帰|かえ}ってね。', pt: 'As janelas eu faço, não tem problema. Então faça o que pedi agora e depois pode ir.' },
          { speaker: 'F', ja: 'はい。', pt: 'Tá.' },
        ], questionJa: '{女|おんな}の{店員|てんいん}はこれから{何|なに}をしなければなりませんか。', answer: 3 },
        { label: '7番', setupJa: '{大学|だいがく}で{先生|せんせい}が{話|はな}しています。このクラスの{留学生|りゅうがくせい}はどこでテキストを{買|か}いますか。', setupPt: 'Na faculdade. Onde os intercambistas desta turma compram o material?', lines: [
          { speaker: 'M', ja: 'この{授業|じゅぎょう}では「{日本語|にほんご}1」というテキストを{使|つか}います。{駅前|えきまえ}の{本屋|ほんや}や{大学|だいがく}の{中|なか}の{本屋|ほんや}などには{売|う}っていませんから、{私|わたし}が{皆|みな}さんのテキストを{頼|たの}んでおきます。{来週|らいしゅう}の{授業|じゅぎょう}の{前|まえ}に、{事務所|じむしょ}でお{金|かね}を{払|はら}って、テキストをもらってください。{今|いま}、{食堂|しょくどう}の{前|まえ}でも{日本語|にほんご}のテキストを{売|う}っていますけれど、この{授業|じゅぎょう}で{使|つか}うものはありません。{似|に}ている{名前|なまえ}のテキストがありますから、{間違|まちが}えないようにしてください。', pt: 'Nesta aula usamos o material “Nihongo 1”. Ele não é vendido nas livrarias da estação nem na da faculdade, então eu encomendo para vocês. Antes da aula da semana que vem, paguem na secretaria e peguem o material. Agora também vendem materiais de japonês em frente ao refeitório, mas o desta aula não está lá. Há materiais de nome parecido, cuidado para não confundir.' },
        ], questionJa: 'このクラスの{留学生|りゅうがくせい}はどこでテキストを{買|か}いますか。', answer: 3 },
        { label: '8番', setupJa: '{町|まち}の{体育館|たいいくかん}で {男|おとこ}の{人|ひと}と{受付|うけつけ}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}は、{来週|らいしゅう}の{日曜日|にちようび}{体育館|たいいくかん}に{何|なに}を{持|も}ってこなければなりませんか。', setupPt: 'No ginásio. O que o homem precisa levar no domingo que vem?', lines: [
          { speaker: 'M', ja: 'すみません。{来週|らいしゅう}の{日曜日|にちようび}、{体育館|たいいくかん}で{卓球|たっきゅう}がしたいんですが。', pt: 'Com licença. Domingo que vem quero jogar tênis de mesa no ginásio.' },
          { speaker: 'F', ja: 'はい。{卓球|たっきゅう}は、{一人|ひとり}2{時間|じかん}、300{円|えん}ですが、{何時間|なんじかん}しますか。', pt: 'Certo. Tênis de mesa custa 300 ienes por 2 horas por pessoa. Quantas horas vai jogar?' },
          { speaker: 'M', ja: '2{時間|じかん}です。', pt: 'Duas horas.' },
          { speaker: 'F', ja: 'では、こちらに{名前|なまえ}と、{利用|りよう}{時間|じかん}のところに 2{時間|じかん}と{書|か}いてください。', pt: 'Então escreva aqui seu nome e, no campo de tempo de uso, “2 horas”.' },
          { speaker: 'M', ja: 'あのう、お{金|かね}は{今日|きょう}{払|はら}いますか。', pt: 'O pagamento é hoje?' },
          { speaker: 'F', ja: 'あ、{利用|りよう}するとき、お{願|ねが}いします。', pt: 'Ah, na hora de usar, por favor.' },
          { speaker: 'M', ja: 'はい。', pt: 'Certo.' },
          { speaker: 'F', ja: 'それから、{卓球|たっきゅう}をするとき、{体育館|たいいくかん}で{履|は}く{靴|くつ}が{必要|ひつよう}です。{卓球|たっきゅう}の{道具|どうぐ}はこちらにありますので、{自由|じゆう}に{使|つか}ってください。', pt: 'E para jogar você precisa de tênis próprio para usar dentro do ginásio. Os equipamentos de tênis de mesa ficam aqui, use à vontade.' },
          { speaker: 'M', ja: 'はい。ありがとうございます。', pt: 'Certo. Obrigado.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{来週|らいしゅう}の{日曜日|にちようび}{体育館|たいいくかん}に{何|なに}を{持|も}ってこなければなりませんか。', answer: 1 },
      ],
    },
    {
      id: 'n4-listening-q2',
      title: 'もんだい２ — Compreensão de ponto-chave',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e escolha a informação específica (motivo, horário, lugar). (7 itens + exemplo)',
      src: '/audio/N4/N4Q2.mp3',
      script: [
        { label: '例', setupJa: '{女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、どうして{引|ひ}っ{越|こ}しをしますか。', setupPt: 'Conversam. Por que a mulher vai se mudar?', lines: [
          { speaker: 'F', ja: '{来週|らいしゅう}の{日曜日|にちようび}、{引|ひ}っ{越|こ}しを{手伝|てつだ}ってくれない？', pt: 'Domingo que vem, pode me ajudar na mudança?' },
          { speaker: 'M', ja: 'いいけど、また{引|ひ}っ{越|こ}すんだね。{部屋|へや}が{狭|せま}いの？', pt: 'Pode, mas você vai se mudar de novo. O quarto é apertado?' },
          { speaker: 'F', ja: 'ううん。{部屋|へや}の{大|おお}きさも{場所|ばしょ}も{問題|もんだい}ないんだけど、{建物|たてもの}が{古|ふる}くて{嫌|いや}なんだ。{最近|さいきん}、{近所|きんじょ}の{人|ひと}と{友達|ともだち}になったから、{残念|ざんねん}なんだけど。', pt: 'Não. O tamanho e a localização estão ótimos, mas o prédio é velho e não gosto. Pena, porque fiz amizade com os vizinhos.' },
          { speaker: 'M', ja: 'そうなんだ。', pt: 'Ah, é.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、どうして{引|ひ}っ{越|こ}しをしますか。', answer: 3 },
        { label: '1番', setupJa: '{男|おとこ}の{人|ひと}と {女|おんな}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、{昨日|きのう}{友達|ともだち}と{一緒|いっしょ}に{何|なに}をしたと{言|い}っていますか。', setupPt: 'O que a mulher diz que fez ontem com a amiga?', lines: [
          { speaker: 'M', ja: '{昨日|きのう}はいい{天気|てんき}でしたね。どこかに{出掛|でか}けましたか。', pt: 'Ontem fez tempo bom, né. Você saiu para algum lugar?' },
          { speaker: 'F', ja: 'ええ、{友達|ともだち}と{海|うみ}の{近|ちか}くの{店|みせ}に{行|い}って、{食事|しょくじ}をしました。{学生|がくせい}のとき、よく{一緒|いっしょ}に{山|やま}に{登|のぼ}っていた{友達|ともだち}なんですが、{久|ひさ}しぶりに{会|あ}ったんです。', pt: 'Sim, fui com uma amiga a um restaurante perto do mar e comemos. É uma amiga com quem eu subia montanha na época de estudante; reencontrei depois de muito tempo.' },
          { speaker: 'M', ja: 'じゃ、{話|はな}すことがたくさんあったでしょう。', pt: 'Então tinham muito o que conversar.' },
          { speaker: 'F', ja: 'ええ。{今度|こんど}また{二人|ふたり}で{山|やま}に{登|のぼ}ることにしました。', pt: 'Sim. Decidimos subir a montanha juntas de novo numa próxima.' },
          { speaker: 'M', ja: 'そうですか。{昨日|きのう}は{暑|あつ}かったから、{海|うみ}で{泳|およ}いだんですか。', pt: 'Que bom. Ontem fez calor; vocês nadaram no mar?' },
          { speaker: 'F', ja: 'いえ。{泳|およ}いだり、{海岸|かいがん}を{散歩|さんぽ}したりしたかったんですけど、{友達|ともだち}に{用事|ようじ}ができてしまって、{食事|しょくじ}のあと、すぐに{帰|かえ}りました。{残念|ざんねん}です。', pt: 'Não. Eu queria nadar e passear pela praia, mas a amiga teve um compromisso e voltamos logo depois de comer. Que pena.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、{昨日|きのう}{友達|ともだち}と{一緒|いっしょ}に{何|なに}をしたと{言|い}っていますか。', answer: 1 },
        { label: '2番', setupJa: '{教室|きょうしつ}で{先生|せんせい}が{学生|がくせい}に{話|はな}しています。{学生|がくせい}は、{工場|こうじょう}で{何|なに}を{作|つく}っているときに、{見学|けんがく}をしますか。', setupPt: 'O professor fala. Os alunos vão visitar a fábrica enquanto se produz o quê?', lines: [
          { speaker: 'M', ja: '{来週|らいしゅう}はクラスで{工場|こうじょう}の{見学|けんがく}に{行|い}きます。ジュースで{有名|ゆうめい}な{会社|かいしゃ}の{工場|こうじょう}ですが、アイスクリームやキャンディー、それからクッキーも{作|つく}っているんですよ。{本当|ほんとう}はジュースを{作|つく}るときに、{見学|けんがく}したかったんですが、{来週|らいしゅう}はジュースは{作|つく}られていないそうなので、{皆|みな}さんはアイスクリームを{見|み}ることになりました。{見学|けんがく}のあと、クッキーのお{土産|みやげ}がもらえるそうです。', pt: 'Semana que vem visitaremos uma fábrica. É de uma empresa famosa por sucos, mas que também faz sorvete, balas e biscoitos. Na verdade eu queria ver a produção de suco, mas semana que vem não estarão fazendo suco, então vamos ver o sorvete. Depois da visita ganharemos biscoitos de lembrança.' },
        ], questionJa: '{学生|がくせい}は、{工場|こうじょう}で{何|なに}を{作|つく}っているときに、{見学|けんがく}をしますか。', answer: 2 },
        { label: '3番', setupJa: '{授業|じゅぎょう}のあとで、{男|おとこ}の{学生|がくせい}と {女|おんな}の{学生|がくせい}が{廊下|ろうか}で{話|はな}しています。{男|おとこ}の{学生|がくせい}は、いつ{山本|やまもと}さんに{手紙|てがみ}を{渡|わた}しますか。', setupPt: 'Depois da aula. Quando o rapaz vai entregar a carta à Yamamoto?', lines: [
          { speaker: 'M', ja: '{森|もり}さん、この{手紙|てがみ}を{山本|やまもと}さんに{渡|わた}してくれない？', pt: 'Mori, pode entregar esta carta à Yamamoto?' },
          { speaker: 'F', ja: 'え、{何|なに}？', pt: 'Hã, o quê?' },
          { speaker: 'M', ja: 'あのう、{僕|ぼく}、{山本|やまもと}さんのことが{好|す}きで、{僕|ぼく}の{気持|きも}ちを{手紙|てがみ}に{書|か}いたんだけど、なかなか{渡|わた}せないんだ。{朝|あさ}、{教室|きょうしつ}で{渡|わた}そうと{思|おも}ったんだけど、{恥|は}ずかしくてだめで、{今|いま}、{山本|やまもと}さんが{教室|きょうしつ}を{出|で}たときもやっぱり{渡|わた}せなかったんだ。', pt: 'É que… eu gosto da Yamamoto e escrevi o que sinto numa carta, mas não consigo entregar. De manhã pensei em entregar na sala, mas fiquei com vergonha; e agora, quando ela saiu da sala, de novo não consegui.' },
          { speaker: 'F', ja: '{自分|じぶん}で{渡|わた}したほうがいいよ。{山本|やまもと}さんなら{授業|じゅぎょう}のあと、いつも 30{分|ぷん}ぐらい{図書館|としょかん}にいるよ。', pt: 'É melhor você mesmo entregar. A Yamamoto, depois da aula, costuma ficar uns 30 min na biblioteca.' },
          { speaker: 'M', ja: '{図書館|としょかん}は{人|ひと}が{多|おお}いから、{恥|は}ずかしいよ。', pt: 'Na biblioteca tem muita gente, dá vergonha.' },
          { speaker: 'F', ja: 'じゃ、{出|で}てきたときはどう？', pt: 'Então quando ela sair de lá?' },
          { speaker: 'M', ja: 'う―ん。', pt: 'Hmm…' },
          { speaker: 'F', ja: 'がんばって。', pt: 'Coragem!' },
          { speaker: 'M', ja: 'うん、{行|い}ってみる。{外|そと}で{待|ま}って、{自分|じぶん}で{渡|わた}すよ。', pt: 'Tá, vou tentar. Espero do lado de fora e entrego eu mesmo.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}は、いつ{山本|やまもと}さんに{手紙|てがみ}を{渡|わた}しますか。', answer: 4 },
        { label: '4番', setupJa: 'ラジオを{聞|き}いています。さくら{動物園|どうぶつえん}はオープンの{日|ひ}にどうなりますか。オープンの{日|ひ}です。', setupPt: 'Ouvindo o rádio. Como fica o Zoológico Sakura no dia da inauguração?', lines: [
          { speaker: 'F', ja: '{今月|こんげつ}{二十日|はつか}{金曜日|きんようび}に、さくら{公園|こうえん}の{隣|となり}にさくら{動物園|どうぶつえん}がオープンします。{動物園|どうぶつえん}は{毎日|まいにち} 10{時|じ}から{夕方|ゆうがた} 5{時|じ}までですが、オープンの{日|ひ}は{午後|ごご} 8{時|じ}まで{開|あ}いているそうです。お{仕事|しごと}のあとにお{子|こ}さんと{一緒|いっしょ}にいかがでしょうか。{休|やす}みは{毎週|まいしゅう}{木曜|もくよう}です。チケットは 600{円|えん}で、{中学生|ちゅうがくせい}は 500{円|えん}、{小学生|しょうがくせい}{以下|いか}のお{子|こ}さんはただです。{毎月|まいつき}{初|はじ}めの{土曜日|どようび}には、チケットが{安|やす}くなって、300{円|えん}で{入|はい}れます。ぜひ、{行|い}ってみてください。', pt: 'Dia 20 deste mês, sexta, abre o Zoológico Sakura ao lado do Parque Sakura. O zoológico funciona das 10h às 17h, mas no dia da inauguração fica aberto até as 20h. Que tal ir com as crianças depois do trabalho? Fecha às quintas. O ingresso é 600 ienes (ginásio 500; crianças até o primário, grátis). No primeiro sábado de cada mês o ingresso fica mais barato, 300 ienes. Visitem!' },
        ], questionJa: 'さくら{動物園|どうぶつえん}はオープンの{日|ひ}にどうなりますか。', answer: 2 },
        { label: '5番', setupJa: '{女|おんな}の{留学生|りゅうがくせい}と {男|おとこ}の{留学生|りゅうがくせい}が{話|はな}しています。{女|おんな}の{留学生|りゅうがくせい}は、{日本|にほん}の{自動販売機|じどうはんばいき}について、どんなことに{驚|おどろ}いたと{言|い}っていますか。', setupPt: 'A intercambista (mulher) ficou surpresa com o quê nas máquinas automáticas do Japão?', lines: [
          { speaker: 'F', ja: 'ねえ、{日本|にほん}に{来|き}て、{日本|にほん}の{自動販売機|じどうはんばいき}に{驚|おどろ}かなかった？', pt: 'Ei, ao chegar no Japão, você não se surpreendeu com as máquinas automáticas?' },
          { speaker: 'M', ja: '{驚|おどろ}いた。{公園|こうえん}、{病院|びょういん}、{海|うみ}、どこに{行|い}ってもあるから、すごいよ。', pt: 'Me surpreendi. Tem em parque, hospital, praia, em todo lugar. Impressionante.' },
          { speaker: 'F', ja: '{私|わたし}が{驚|おどろ}いたのは{種類|しゅるい}だよ。{私|わたし}の{国|くに}では、{売|う}っているのは{飲|の}み{物|もの}がほとんどだよ。', pt: 'O que me surpreendeu foi a variedade. No meu país elas vendem quase só bebidas.' },
          { speaker: 'M', ja: '{日本|にほん}ではバナナや{花|はな}、{服|ふく}も{見|み}たことがある。', pt: 'No Japão já vi vendendo banana, flores e até roupa.' },
          { speaker: 'F', ja: 'うん。', pt: 'Pois é.' },
          { speaker: 'M', ja: '{言葉|ことば}を{話|はな}す{自動販売機|じどうはんばいき}もあって、{東京|とうきょう}では{東京|とうきょう}の{言葉|ことば}を、{大阪|おおさか}では{大阪|おおさか}の{言葉|ことば}を{話|はな}すんだよ。', pt: 'Também tem máquina que fala, em Tóquio no dialeto de Tóquio e em Osaka no de Osaka.' },
          { speaker: 'F', ja: '{店員|てんいん}みたいだね。{日本|にほん}では{外|そと}に{置|お}いてあっても、{中|なか}のお{金|かね}が{盗|ぬす}まれたりしないから、{自動販売機|じどうはんばいき}がたくさんあるのかもしれないね。', pt: 'Parece um atendente. No Japão, mesmo na rua, ninguém rouba o dinheiro de dentro; talvez por isso haja tantas.' },
        ], questionJa: '{女|おんな}の{留学生|りゅうがくせい}は、{日本|にほん}の{自動販売機|じどうはんばいき}について、どんなことに{驚|おどろ}いたと{言|い}っていますか。', answer: 2 },
        { label: '6番', setupJa: 'スーパーで{客|きゃく}と{店|みせ}の{人|ひと}が{話|はな}しています。{卵|たまご}が{安|やす}くなる{時間|じかん}は、{何時|なんじ}から{何時|なんじ}までですか。', setupPt: 'No mercado. De que horas a que horas os ovos ficam mais baratos?', lines: [
          { speaker: 'F', ja: 'すみません、こちらのお{店|みせ}のホームページに、{今日|きょう}は「{卵|たまご}が{安|やす}い」と{書|か}いてあったんですが、{売|う}り{場|ば}はどこですか。', pt: 'Com licença, no site da loja dizia que hoje “os ovos estão baratos”. Onde fica a seção?' },
          { speaker: 'M', ja: 'あそこですが、すみません、お{客様|きゃくさま}。{卵|たまご}が{安|やす}くなるサービスは、{夕方|ゆうがた}の 1{時間|じかん}だけなんです。', pt: 'Fica ali, mas, senhora, a promoção dos ovos é só por 1 hora ao fim da tarde.' },
          { speaker: 'F', ja: 'えっ、{何時|なんじ}からですか。もう{終|お}わってしまいましたか。', pt: 'Ah, a partir de que horas? Já terminou?' },
          { speaker: 'M', ja: 'いえ、まだです。{今|いま}、ちょうど 5{時|じ}ですから、{始|はじ}まるまで 30{分|ぷん}あります。', pt: 'Não, ainda não. Agora são exatamente 17h, faltam 30 min para começar.' },
          { speaker: 'F', ja: '{分|わ}かりました。', pt: 'Entendi.' },
        ], questionJa: '{卵|たまご}が{安|やす}くなる{時間|じかん}は、{何時|なんじ}から{何時|なんじ}までですか。', answer: 4 },
        { label: '7番', setupJa: '{会社|かいしゃ}で {女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{花見|はなみ}の{場所|ばしょ}について{話|はな}しています。{男|おとこ}の{人|ひと}は、どうして{東公園|ひがしこうえん}がいいと{言|い}っていますか。', setupPt: 'Sobre onde ver as cerejeiras. Por que o homem prefere o Parque Leste?', lines: [
          { speaker: 'F', ja: '{土曜日|どようび}、{仕事|しごと}の{帰|かえ}りに{花見|はなみ}に{行|い}かない？', pt: 'Sábado, na volta do trabalho, vamos ver as cerejeiras?' },
          { speaker: 'M', ja: 'いいね。', pt: 'Boa ideia.' },
          { speaker: 'F', ja: 'どこがいい？', pt: 'Onde é melhor?' },
          { speaker: 'M', ja: '{東公園|ひがしこうえん}がいいよ。{桜|さくら}は{東公園|ひがしこうえん}と{北公園|きたこうえん}が{有名|ゆうめい}だけど、{北公園|きたこうえん}は{毎年|まいとし}すごく{込|こ}むんだよ。{公園|こうえん}の{中|なか}に{食|た}べ{物|もの}の{店|みせ}がたくさん{出|で}ていて、{歩|ある}いていても、なかなか{前|まえ}に{進|すす}めないんだ。', pt: 'O Parque Leste. As cerejeiras famosas são as do Leste e do Norte, mas o do Norte lota muito todo ano. Tem muitas barracas de comida e nem dá para andar direito.' },
          { speaker: 'F', ja: 'お{祭|まつ}りみたいで、にぎやかで{楽|たの}しそうだけど、ちょっと{疲|つか}れるね。', pt: 'Parece festa, animado e divertido, mas cansa um pouco.' },
          { speaker: 'M', ja: '{東公園|ひがしこうえん}も{人|ひと}は{多|おお}いんだけど、{池|いけ}があって、{舟|ふね}に{乗|の}って{桜|さくら}が{見|み}られるから{楽|たの}しいよ。', pt: 'O Leste também tem bastante gente, mas tem um lago e dá para ver as cerejeiras de barco. É legal.' },
          { speaker: 'F', ja: '{面白|おもしろ}そう。{東公園|ひがしこうえん}は{会社|かいしゃ}からは{歩|ある}いて{行|い}ける？', pt: 'Parece interessante. Dá para ir a pé da empresa até o Leste?' },
          { speaker: 'M', ja: 'えっと、{歩|ある}くのは{無理|むり}だけど、バスなら 15{分|ふん}で{着|つ}くよ。', pt: 'A pé é impossível, mas de ônibus chega em 15 min.' },
          { speaker: 'F', ja: 'じゃ、{東公園|ひがしこうえん}に{行|い}こう。', pt: 'Então vamos ao Parque Leste.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、どうして{東公園|ひがしこうえん}がいいと{言|い}っていますか。', answer: 3 },
      ],
    },
    {
      id: 'n4-listening-q3',
      title: 'もんだい３ — Expressões em situação',
      descriptionPt: 'Olhe a cena e escolha o que a pessoa (seta →) deve dizer. (5 itens + exemplo, 3 opções cada)',
      src: '/audio/N4/N4Q3.mp3',
      script: [
        { label: '例', setupJa: 'レストランでお{店|みせ}の{人|ひと}を{呼|よ}びます。{何|なん}と{言|い}いますか。', setupPt: 'No restaurante, você chama o garçom. O que diz?', lines: [
          { speaker: '1', ja: 'いらっしゃいませ。', pt: '1. Bem-vindo. (fala do atendente)' },
          { speaker: '2', ja: '{失礼|しつれい}しました。', pt: '2. Desculpe o incômodo.' },
          { speaker: '3', ja: 'すみません。', pt: '3. Com licença / Ô, garçom.' },
        ], questionJa: '', answer: 3 },
        { label: '1番', setupJa: '{友達|ともだち}がかわいいネックレスをしています。{買|か}った{店|みせ}が{知|し}りたいです。{何|なん}と{言|い}いますか。', setupPt: 'A amiga usa um colar bonito; você quer saber onde ela comprou. O que diz?', lines: [
          { speaker: '1', ja: 'どの{店|みせ}で{買|か}うつもりですか。', pt: '1. Em que loja você pretende comprar?' },
          { speaker: '2', ja: 'それはどこで{買|か}ったんですか。', pt: '2. Onde você comprou isso?' },
          { speaker: '3', ja: '{買|か}ったかどうか{教|おし}えてください。', pt: '3. Diga-me se comprou ou não.' },
        ], questionJa: '', answer: 2 },
        { label: '2番', setupJa: '{机|つくえ}の{下|した}に{自分|じぶん}の{消|け}しゴムが{落|お}ちました。{友達|ともだち}に{取|と}ってもらいたいです。{何|なん}と{言|い}いますか。', setupPt: 'Sua borracha caiu debaixo da mesa; você quer que o amigo pegue. O que diz?', lines: [
          { speaker: '1', ja: 'あ、{消|け}しゴムを{取|と}ってあげようか。', pt: '1. Ah, quer que eu pegue a borracha (para você)?' },
          { speaker: '2', ja: 'ごめん、{消|け}しゴムを{拾|ひろ}ってくれる？', pt: '2. Desculpa, você pega a borracha (para mim)?' },
          { speaker: '3', ja: 'ねえ、{消|け}しゴムが{落|お}ちたそうだよ。', pt: '3. Ei, dizem que a borracha caiu.' },
        ], questionJa: '', answer: 2 },
        { label: '3番', setupJa: 'エレベーターの{中|なか}です。ほかの{人|ひと}が{降|お}りたあとで{降|お}ります。{何|なん}と{言|い}いますか。', setupPt: 'No elevador, você desce depois das outras pessoas. O que diz?', lines: [
          { speaker: '1', ja: 'どうぞお{先|さき}に。', pt: '1. Por favor, pode ir/descer primeiro.' },
          { speaker: '2', ja: '{前|まえ}へ{行|い}きます。', pt: '2. Vou para frente.' },
          { speaker: '3', ja: 'あとでお{願|ねが}いします。', pt: '3. Por favor, depois.' },
        ], questionJa: '', answer: 1 },
        { label: '4番', setupJa: '{友達|ともだち}がかばんを{閉|し}めるのを{忘|わす}れています。{何|なん}と{言|い}いますか。', setupPt: 'O amigo esqueceu de fechar a bolsa. O que você diz?', lines: [
          { speaker: '1', ja: 'かばんを{開|あ}けておいてね。', pt: '1. Deixe a bolsa aberta, viu.' },
          { speaker: '2', ja: 'かばんが{閉|し}まったままだよ。', pt: '2. A bolsa está fechada (continua fechada).' },
          { speaker: '3', ja: 'かばんが{開|あ}いているよ。', pt: '3. Sua bolsa está aberta!' },
        ], questionJa: '', answer: 3 },
        { label: '5番', setupJa: '{読|よ}み{方|かた}が{知|し}りたいです。{何|なん}と{言|い}いますか。', setupPt: 'Você quer saber como (algo) se lê. O que diz?', lines: [
          { speaker: '1', ja: 'どうやって{書|か}いたんですか。', pt: '1. Como você escreveu isso?' },
          { speaker: '2', ja: '{何|なん}と{書|か}いてあるんですか。', pt: '2. O que está escrito aqui? (como se lê)' },
          { speaker: '3', ja: '{何|なに}を{書|か}いておきましょうか。', pt: '3. O que devo deixar escrito?' },
        ], questionJa: '', answer: 2 },
      ],
    },
    {
      id: 'n4-listening-q4',
      title: 'もんだい４ — Respostas rápidas',
      descriptionPt: 'Sem imagem. Ouça a fala e escolha a resposta mais natural. (8 itens + exemplo, 3 opções cada)',
      src: '/audio/N4/N4Q4.mp3',
      script: [
        { label: '例', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'ジュース{買|か}いに{行|い}きますけど、{何|なに}か{買|か}ってきましょうか。', pt: 'Vou comprar suco; quer que eu traga algo?' },
          { speaker: '1', ja: 'ええ、いいですよ。', pt: '1. Sim, pode ser.' },
          { speaker: '2', ja: 'そうですか。おいしそうですね。', pt: '2. Ah é? Parece gostoso.' },
          { speaker: '3', ja: 'あ、コーヒー、お{願|ねが}いします。', pt: '3. Ah, um café, por favor.' },
        ], questionJa: '', answer: 3 },
        { label: '1番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: 'よかったら、お{茶|ちゃ}をもう{一杯|いっぱい}いかがですか。', pt: 'Se quiser, aceita mais uma xícara de chá?' },
          { speaker: '1', ja: 'すみません。いただきます。', pt: '1. Obrigado(a), aceito.' },
          { speaker: '2', ja: 'もう{一杯|いっぱい}どうぞ。', pt: '2. Tome mais uma. (você oferecendo)' },
          { speaker: '3', ja: 'いえ、どういたしまして。', pt: '3. Não, de nada.' },
        ], questionJa: '', answer: 1 },
        { label: '2番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: '{山本|やまもと}さん、{忙|いそが}しそうだけど、{今|いま}ちょっと{話|はな}せる？', pt: 'Yamamoto, você parece ocupada, mas dá para conversar um pouco agora?' },
          { speaker: '1', ja: '{話|はな}していませんよ。', pt: '1. Não estou conversando.' },
          { speaker: '2', ja: 'あ、{今|いま}は、{手伝|てつだ}えないんですね。', pt: '2. Ah, então agora você não pode ajudar.' },
          { speaker: '3', ja: 'はい。{何|なん}ですか。', pt: '3. Sim. O que foi?' },
        ], questionJa: '', answer: 3 },
        { label: '3番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: 'リンさん、もうすぐ{森|もり}さんの{誕生日|たんじょうび}だね。プレゼントは、{何|なに}にしようか。', pt: 'Lin, logo é o aniversário do Mori. O que vamos dar de presente?' },
          { speaker: '1', ja: 'それがいいね。', pt: '1. Esse é bom.' },
          { speaker: '2', ja: 'プレゼントをあげようよ。', pt: '2. Vamos dar um presente.' },
          { speaker: '3', ja: 'んー、Ｔシャツはどう？', pt: '3. Hmm, que tal uma camiseta?' },
        ], questionJa: '', answer: 3 },
        { label: '4番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'あ、その{資料|しりょう}、あとで{使|つか}うから、まだ{片付|かたづ}けなくてもいいですよ。', pt: 'Ah, esse material eu uso depois, então ainda não precisa guardar.' },
          { speaker: '1', ja: 'じゃ、ここに{置|お}いておきます。', pt: '1. Então deixo aqui.' },
          { speaker: '2', ja: 'いえ、{僕|ぼく}はもう{使|つか}いませんよ。', pt: '2. Não, eu já não vou usar.' },
          { speaker: '3', ja: 'すぐ{片付|かたづ}けましょうか。', pt: '3. Guardo agora mesmo?' },
        ], questionJa: '', answer: 1 },
        { label: '5番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: '{先輩|せんぱい}、あの、{大学|だいがく}の{授業|じゅぎょう}の{選|えら}び{方|かた}について{教|おし}えてもらえませんか。', pt: 'Veterano, pode me ensinar como escolher as disciplinas da faculdade?' },
          { speaker: '1', ja: 'それは、あげられないよ。', pt: '1. Isso eu não posso te dar.' },
          { speaker: '2', ja: 'うん、{何|なん}でも{聞|き}いて。', pt: '2. Claro, pergunte o que quiser.' },
          { speaker: '3', ja: 'ぜひ、お{願|ねが}いするよ。', pt: '3. Por favor, conto com você.' },
        ], questionJa: '', answer: 2 },
        { label: '6番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'あ、{山田|やまだ}さん。けがはもうよくなりましたか。', pt: 'Ah, Yamada. O machucado já melhorou?' },
          { speaker: '1', ja: 'あまりしませんでした。', pt: '1. Não fiz muito.' },
          { speaker: '2', ja: 'それはよかったです。', pt: '2. Que bom (por você).' },
          { speaker: '3', ja: 'すっかり{治|なお}りました。', pt: '3. Sarou completamente.' },
        ], questionJa: '', answer: 3 },
        { label: '7番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: 'リーさん、{大学|だいがく}を{卒業|そつぎょう}したら、どうするか{決|き}まりましたか。', pt: 'Lee, já decidiu o que vai fazer depois de se formar?' },
          { speaker: '1', ja: '{卒業|そつぎょう}できることになりました。', pt: '1. Ficou decidido que vou poder me formar.' },
          { speaker: '2', ja: '{国|くに}に{帰|かえ}って、{貿易|ぼうえき}の{仕事|しごと}をします。', pt: '2. Vou voltar ao meu país e trabalhar com comércio exterior.' },
          { speaker: '3', ja: '{銀行|ぎんこう}で{働|はたら}いたことがあります。', pt: '3. Já trabalhei num banco.' },
        ], questionJa: '', answer: 2 },
        { label: '8番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'ねえ、ここにあった{会議|かいぎ}の{資料|しりょう}を{知|し}らない？', pt: 'Ei, você sabe do material da reunião que estava aqui?' },
          { speaker: '1', ja: 'え、ないんですか。', pt: '1. Ué, não está aí?' },
          { speaker: '2', ja: 'じゃ、{教|おし}えてください。', pt: '2. Então me diga.' },
          { speaker: '3', ja: '{分|わ}かりませんでした。', pt: '3. Não consegui entender.' },
        ], questionJa: '', answer: 1 },
      ],
    },
  ],
}

export const n4: Level = {
  id: 'N4',
  titlePt: 'JLPT N4 — Básico-intermediário',
  descriptionPt:
    'O segundo nível do JLPT. Amplia o japonês básico: mais kanji, gramática (causativo, passiva, dar/receber) e textos um pouco maiores. As quatro áreas trazem exercícios, explicações em português e os áudios oficiais com transcrição.',
  sections: [vocabulary, grammar, reading, listening],
}
