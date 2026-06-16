import type { ExerciseGroup, Level, Section } from './types'

// =====================================================================
//  N4 — Leva 2 (Simulado 2012)
//  Conteúdo fiel ao "Japanese-Language Proficiency Test Official Practice
//  Workbook" (2012) do JLPT (Japan Foundation / JEES).
//  Fonte: docs/jlpt-source/N4-2012 (PDFs + MP3 oficiais, jlpt.jp).
//  Respostas conferidas pelo gabarito oficial (正答表 / N4answer.pdf).
//  Traduções e explicações em pt-BR são autorais.
//  Obs.: em もんだい2 (escolha de kanji) alguns distratores são kanji-sósia
//  reproduzidos com melhor esforço; enunciado e resposta seguem o oficial.
// =====================================================================

const vocabM1: ExerciseGroup = {
  id: 'n4-2012-vocab-m1',
  title: 'もんだい1',
  subtitlePt: 'Leitura de kanji',
  instructionJa: '＿＿の ことばは ひらがなで どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se lê (em hiragana) a palavra sublinhada? Escolha a melhor opção.',
  example: {
    prompt: 'わたしの せんもんは [[文学]]です。',
    choices: [{ n: 1, text: 'いがく' }, { n: 2, text: 'かがく' }, { n: 3, text: 'ぶんがく' }, { n: 4, text: 'すうがく' }],
    answer: 3,
    note: '文学 = ぶんがく (literatura).',
  },
  questions: [
    { id: 'n4-2012-vocab-1', number: 1, prompt: 'くつに [[石]]が {入|はい}って いました。', choices: [{ n: 1, text: 'いし' }, { n: 2, text: 'すな' }, { n: 3, text: 'くさ' }, { n: 4, text: 'えだ' }], answer: 1, translationPt: 'Tinha entrado uma pedra no sapato.', explanationPt: '石 = いし (pedra). すな=areia, くさ=grama, えだ=galho.' },
    { id: 'n4-2012-vocab-2', number: 2, prompt: 'にほんで いろいろな [[経験]]を しました。', choices: [{ n: 1, text: 'けいけん' }, { n: 2, text: 'けいげん' }, { n: 3, text: 'けいけ' }, { n: 4, text: 'けけん' }], answer: 1, translationPt: 'Tive várias experiências no Japão.', explanationPt: '経験 = けいけん (experiência). Sem dakuten (けん, não げん).' },
    { id: 'n4-2012-vocab-3', number: 3, prompt: '[[店員]]に トイレが どこに あるか {聞|き}きました。', choices: [{ n: 1, text: 'てにん' }, { n: 2, text: 'てんにん' }, { n: 3, text: 'ていん' }, { n: 4, text: 'てんいん' }], answer: 4, translationPt: 'Perguntei ao atendente onde ficava o banheiro.', explanationPt: '店員 = てんいん (atendente/vendedor). 店=てん + 員=いん.' },
    { id: 'n4-2012-vocab-4', number: 4, prompt: 'きょうは [[食堂]]が こんで いました。', choices: [{ n: 1, text: 'しゅくど' }, { n: 2, text: 'しょくどう' }, { n: 3, text: 'しょくど' }, { n: 4, text: 'しゅくどう' }], answer: 2, translationPt: 'Hoje o refeitório estava cheio.', explanationPt: '食堂 = しょくどう (refeitório/cantina). しょく + どう (ô longo).' },
    { id: 'n4-2012-vocab-5', number: 5, prompt: 'この まどから [[港]]が {見|み}えます。', choices: [{ n: 1, text: 'うみ' }, { n: 2, text: 'みなと' }, { n: 3, text: 'みずうみ' }, { n: 4, text: 'いけ' }], answer: 2, translationPt: 'Desta janela dá para ver o porto.', explanationPt: '港 = みなと (porto). うみ=mar, みずうみ=lago, いけ=açude.' },
    { id: 'n4-2012-vocab-6', number: 6, prompt: 'この [[小説]]は おもしろかったです。', choices: [{ n: 1, text: 'しょせつ' }, { n: 2, text: 'しょうぜつ' }, { n: 3, text: 'しょうせつ' }, { n: 4, text: 'しょぜつ' }], answer: 3, translationPt: 'Este romance foi interessante.', explanationPt: '小説 = しょうせつ (romance). しょう (ô longo) + せつ (sem dakuten).' },
    { id: 'n4-2012-vocab-7', number: 7, prompt: 'まいばん [[日記]]を {書|か}いて います。', choices: [{ n: 1, text: 'にっき' }, { n: 2, text: 'にちき' }, { n: 3, text: 'にっきい' }, { n: 4, text: 'にちきい' }], answer: 1, translationPt: 'Toda noite escrevo no diário.', explanationPt: '日記 = にっき (diário). Com っ (pausa): にっき.' },
    { id: 'n4-2012-vocab-8', number: 8, prompt: '[[夕方]]、{雨|あめ}が ふりました。', choices: [{ n: 1, text: 'ゆうほう' }, { n: 2, text: 'ゆうがた' }, { n: 3, text: 'ゆうほお' }, { n: 4, text: 'ゆうがだ' }], answer: 2, translationPt: 'No fim da tarde choveu.', explanationPt: '夕方 = ゆうがた (anoitecer/fim da tarde). ゆう + がた.' },
    { id: 'n4-2012-vocab-9', number: 9, prompt: 'もうすぐ [[秋]]ですね。', choices: [{ n: 1, text: 'ふゆ' }, { n: 2, text: 'なつ' }, { n: 3, text: 'はる' }, { n: 4, text: 'あき' }], answer: 4, translationPt: 'Logo será outono, né?', explanationPt: '秋 = あき (outono). ふゆ=inverno, なつ=verão, はる=primavera.' },
  ],
}

const vocabM2: ExerciseGroup = {
  id: 'n4-2012-vocab-m2',
  title: 'もんだい2',
  subtitlePt: 'Escrita correta (kanji)',
  instructionJa: '＿＿の ことばは どう かきますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Como se escreve a palavra sublinhada em kanji? Escolha a melhor opção.',
  example: {
    prompt: 'ふねで [[にもつ]]を おくります。',
    choices: [{ n: 1, text: '近ります' }, { n: 2, text: '逆ります' }, { n: 3, text: '辺ります' }, { n: 4, text: '送ります' }],
    answer: 4,
    note: 'おくる = 送る (enviar). (No original o alvo é “おくります”.)',
  },
  questions: [
    { id: 'n4-2012-vocab-10', number: 10, prompt: 'すずきさんは [[あおい]] シャツを {着|き}て います。', choices: [{ n: 1, text: '青い' }, { n: 2, text: '黒い' }, { n: 3, text: '赤い' }, { n: 4, text: '白い' }], answer: 1, translationPt: 'O Suzuki está de camisa azul.', explanationPt: 'あおい = 青い (azul). 黒い=preto, 赤い=vermelho, 白い=branco.' },
    { id: 'n4-2012-vocab-11', number: 11, prompt: 'かいぎの [[ばしょ]]を {教|おし}えて ください。', choices: [{ n: 1, text: '揚炉' }, { n: 2, text: '場炉' }, { n: 3, text: '揚所' }, { n: 4, text: '場所' }], answer: 4, translationPt: 'Diga-me o local da reunião, por favor.', explanationPt: 'ばしょ = 場所 (lugar/local). 場 (ば) + 所 (しょ).' },
    { id: 'n4-2012-vocab-12', number: 12, prompt: 'わたしの いえは {駅|えき}から [[あるいて]] 5{分|ふん}です。', choices: [{ n: 1, text: '走いて' }, { n: 2, text: '起いて' }, { n: 3, text: '歩いて' }, { n: 4, text: '通いて' }], answer: 3, translationPt: 'Minha casa fica a 5 minutos a pé da estação.', explanationPt: 'あるく = 歩く (andar a pé); te-form 歩いて. 走る (はしる) = correr é parecido, mas errado.' },
    { id: 'n4-2012-vocab-13', number: 13, prompt: 'ちかてつが できて [[べんり]]に なりました。', choices: [{ n: 1, text: '使利' }, { n: 2, text: '便理' }, { n: 3, text: '便里' }, { n: 4, text: '便利' }], answer: 4, translationPt: 'Ficou prático depois que fizeram o metrô.', explanationPt: 'べんり = 便利 (conveniente/prático). 便 (べん) + 利 (り).' },
    { id: 'n4-2012-vocab-14', number: 14, prompt: 'とても [[ねむかった]]ので、コーヒーを {飲|の}みました。', choices: [{ n: 1, text: '睡かった' }, { n: 2, text: '眠むかった' }, { n: 3, text: '眼かった' }, { n: 4, text: '眠かった' }], answer: 4, translationPt: 'Como estava com muito sono, tomei café.', explanationPt: 'ねむい = 眠い (sonolento); passado 眠かった. Cuidado com a okurigana (眠かった, não 眠むかった) e com 眼 (め, olho).' },
    { id: 'n4-2012-vocab-15', number: 15, prompt: 'きょうは [[ゆき]]が ふって います。', choices: [{ n: 1, text: '雪' }, { n: 2, text: '電' }, { n: 3, text: '雷' }, { n: 4, text: '雲' }], answer: 1, translationPt: 'Hoje está nevando.', explanationPt: 'ゆき = 雪 (neve). 電=eletricidade, 雷=trovão, 雲=nuvem — todos com o radical 雨 (chuva).' },
  ],
}

const vocabM3: ExerciseGroup = {
  id: 'n4-2012-vocab-m3',
  title: 'もんだい3',
  subtitlePt: 'Vocabulário (preencher a lacuna)',
  instructionJa: '（　）に なにを いれますか。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a palavra mais adequada.',
  example: {
    prompt: 'スーパーで もらった （　）を {見|み}ると、{何|なに}を {買|か}ったか わかります。',
    choices: [{ n: 1, text: 'レジ' }, { n: 2, text: 'レシート' }, { n: 3, text: 'おつり' }, { n: 4, text: 'さいふ' }],
    answer: 2,
    note: 'レシート = recibo (mostra o que se comprou). レジ=caixa, おつり=troco.',
  },
  questions: [
    { id: 'n4-2012-vocab-16', number: 16, prompt: 'けさ せんたくした {服|ふく}が まだ （　） いません。', choices: [{ n: 1, text: 'ひえて' }, { n: 2, text: 'おちて' }, { n: 3, text: 'ぬれて' }, { n: 4, text: 'かわいて' }], answer: 4, translationPt: 'A roupa que lavei de manhã ainda não secou.', explanationPt: 'かわく = secar → まだ かわいて いません (ainda não secou). ひえる=esfriar, ぬれる=molhar.' },
    { id: 'n4-2012-vocab-17', number: 17, prompt: 'スミスさんは いつも （　） {勉強|べんきょう}して います。', choices: [{ n: 1, text: 'だいじに' }, { n: 2, text: 'たいせつに' }, { n: 3, text: 'ねっしんに' }, { n: 4, text: 'まっすぐに' }], answer: 3, translationPt: 'O Smith sempre estuda com afinco.', explanationPt: 'ねっしんに = com empenho/afinco. だいじに/たいせつに=com cuidado, まっすぐに=reto/diretamente.' },
    { id: 'n4-2012-vocab-18', number: 18, prompt: 'わたしは にほんの まんがに （　）が あります。', choices: [{ n: 1, text: 'きぶん' }, { n: 2, text: 'きょうみ' }, { n: 3, text: 'こころ' }, { n: 4, text: 'しゅみ' }], answer: 2, translationPt: 'Tenho interesse por mangá japonês.', explanationPt: '〜に きょうみが ある = ter interesse por. きぶん=humor, こころ=coração, しゅみ=hobby.' },
    { id: 'n4-2012-vocab-19', number: 19, prompt: 'わたしは テニスの （　）を よく {知|し}りません。', choices: [{ n: 1, text: 'アイディア' }, { n: 2, text: 'ルール' }, { n: 3, text: 'あんない' }, { n: 4, text: 'せつめい' }], answer: 2, translationPt: 'Não conheço bem as regras do tênis.', explanationPt: 'ルール = regras. アイディア=ideia, あんない=orientação/guia, せつめい=explicação.' },
    { id: 'n4-2012-vocab-20', number: 20, prompt: 'りょこうの にもつは もう （　） できましたか。', choices: [{ n: 1, text: 'やくそく' }, { n: 2, text: 'りよう' }, { n: 3, text: 'せわ' }, { n: 4, text: 'ようい' }], answer: 4, translationPt: 'Já preparou a bagagem da viagem?', explanationPt: 'ようい (する) = preparar/aprontar. やくそく=promessa, りよう=uso, せわ=cuidado.' },
    { id: 'n4-2012-vocab-21', number: 21, prompt: '{弟|おとうと}と （　）して {母|はは}に あげる プレゼントを えらびました。', choices: [{ n: 1, text: 'さんか' }, { n: 2, text: 'あんない' }, { n: 3, text: 'そうだん' }, { n: 4, text: 'へんじ' }], answer: 3, translationPt: 'Conversei (me aconselhei) com meu irmão e escolhi o presente para a mãe.', explanationPt: 'そうだん (する) = consultar/discutir com alguém. さんか=participar, あんない=guiar, へんじ=resposta.' },
    { id: 'n4-2012-vocab-22', number: 22, prompt: 'この にもつを あそこに （　） ください。', choices: [{ n: 1, text: 'はこんで' }, { n: 2, text: 'つたえて' }, { n: 3, text: 'ひろって' }, { n: 4, text: 'むかえて' }], answer: 1, translationPt: 'Leve esta bagagem para ali, por favor.', explanationPt: 'はこぶ = transportar/levar → はこんで. つたえる=transmitir, ひろう=catar, むかえる=receber/buscar.' },
    { id: 'n4-2012-vocab-23', number: 23, prompt: 'この きかいは つかいかたを まちがえると とても （　）です。', choices: [{ n: 1, text: 'けっこう' }, { n: 2, text: 'きけん' }, { n: 3, text: 'じゆう' }, { n: 4, text: 'あんぜん' }], answer: 2, translationPt: 'Esta máquina é muito perigosa se você errar o modo de usar.', explanationPt: 'きけん = perigoso. あんぜん=seguro (oposto), じゆう=livre, けっこう=bastante/ok.' },
    { id: 'n4-2012-vocab-24', number: 24, prompt: '{入口|いりぐち}の {前|まえ}には {車|くるま}を （　） ください。', choices: [{ n: 1, text: 'やめないで' }, { n: 2, text: 'しめないで' }, { n: 3, text: 'とめないで' }, { n: 4, text: 'きめないで' }], answer: 3, translationPt: 'Não estacione o carro em frente à entrada.', explanationPt: '車を とめる = estacionar o carro → とめないで (não estacione). やめる=parar de fazer, しめる=fechar, きめる=decidir.' },
  ],
}

const vocabM4: ExerciseGroup = {
  id: 'n4-2012-vocab-m4',
  title: 'もんだい4',
  subtitlePt: 'Frase de sentido equivalente',
  instructionJa: '＿＿の ぶんと だいたい おなじ いみの ぶんが あります。1・2・3・4から いちばん いい ものを ひとつ えらんでください。',
  instructionPt: 'Escolha a frase com sentido mais parecido com a frase sublinhada.',
  example: {
    prompt: '{電車|でんしゃ}の {中|なか}で [[さわがないで]] ください。',
    choices: [{ n: 1, text: '電車の 中で ものを たべないで ください。' }, { n: 2, text: '電車の 中で うるさく しないで ください。' }, { n: 3, text: '電車の 中で たばこを すわないで ください。' }, { n: 4, text: '電車の 中で きたなく しないで ください。' }],
    answer: 2,
    note: 'さわぐ = fazer barulho/bagunça = うるさく する.',
  },
  questions: [
    { id: 'n4-2012-vocab-25', number: 25, prompt: 'バスが [[しゅっぱつしました]]。', choices: [{ n: 1, text: 'バスが とまりました。' }, { n: 2, text: 'バスが つきました。' }, { n: 3, text: 'バスが でました。' }, { n: 4, text: 'バスが まがりました。' }], answer: 3, translationPt: 'O ônibus partiu.', explanationPt: 'しゅっぱつする (partir) = でる (sair) → でました. とまる=parar, つく=chegar, まがる=virar.' },
    { id: 'n4-2012-vocab-26', number: 26, prompt: 'もっと [[ていねいに]] {書|か}いて ください。', choices: [{ n: 1, text: 'もっと おおきく かいて ください。' }, { n: 2, text: 'もっと きれいに かいて ください。' }, { n: 3, text: 'もっと ふとく かいて ください。' }, { n: 4, text: 'もっと かんたんに かいて ください。' }], answer: 2, translationPt: 'Escreva com mais capricho, por favor.', explanationPt: 'ていねいに (caprichado/com esmero) ≈ きれいに (caprichado/bonito). おおきく=grande, ふとく=grosso, かんたんに=simples.' },
    { id: 'n4-2012-vocab-27', number: 27, prompt: '{兄|あに}は [[えが うまい]]です。', choices: [{ n: 1, text: 'あには えが じょうずです。' }, { n: 2, text: 'あには えが きらいです。' }, { n: 3, text: 'あには えが へたです。' }, { n: 4, text: 'あには えが すきです。' }], answer: 1, translationPt: 'Meu irmão mais velho desenha bem.', explanationPt: 'うまい (habilidoso) = じょうず. へた=ruim (oposto), きらい=detestar, すき=gostar.' },
    { id: 'n4-2012-vocab-28', number: 28, prompt: 'きのうは [[ねぼうしました]]。', choices: [{ n: 1, text: 'きのうは ねるのが おそく なって しまいました。' }, { n: 2, text: 'きのうは はやく ねて しまいました。' }, { n: 3, text: 'きのうは おきるのが おそく なって しまいました。' }, { n: 4, text: 'きのうは はやく おきて しまいました。' }], answer: 3, translationPt: 'Ontem acordei tarde (dormi demais).', explanationPt: 'ねぼうする = acordar tarde sem querer = おきるのが おそく なる. (Não é dormir tarde.)' },
    { id: 'n4-2012-vocab-29', number: 29, prompt: 'たなかさんは {先生|せんせい}に [[ほめられました]]。', choices: [{ n: 1, text: '先生は たなかさんに「気を つけてね」と 言いました。' }, { n: 2, text: '先生は たなかさんに「とても よかったですよ」と 言いました。' }, { n: 3, text: '先生は たなかさんに「ちょっと 休みましょう」と 言いました。' }, { n: 4, text: '先生は たなかさんに「たいへんですね」と 言いました。' }], answer: 2, translationPt: 'O Tanaka foi elogiado pelo professor.', explanationPt: 'ほめる = elogiar → o professor disse algo positivo: «とても よかったですよ» (foi muito bom).' },
  ],
}

const vocabM5: ExerciseGroup = {
  id: 'n4-2012-vocab-m5',
  title: 'もんだい5',
  subtitlePt: 'Uso correto da palavra',
  instructionJa: 'つぎの ことばの つかいかたで いちばん いい ものを 1・2・3・4から ひとつ えらんでください。',
  instructionPt: 'Escolha a frase em que a palavra dada é usada corretamente.',
  questions: [
    { id: 'n4-2012-vocab-30', number: 30, prompt: '「るす」 (= ausente de casa)', choices: [{ n: 1, text: 'さいきん いそがしくて、しごとが るすに なりません。' }, { n: 2, text: 'あの デパートは きょうは るすです。' }, { n: 3, text: 'この ひこうきには るすの せきが ありません。' }, { n: 4, text: 'ともだちの いえに 行ったら るすでした。' }], answer: 4, translationPt: 'Quando fui à casa do meu amigo, ele não estava (ausente).', explanationPt: 'るす = não estar em casa/ausente. Frase 4: «fui à casa do amigo e ele estava ausente». As outras pedem palavras como 終わる/休み/空いて.' },
    { id: 'n4-2012-vocab-31', number: 31, prompt: '「しんせつ」 (= gentil, atencioso)', choices: [{ n: 1, text: 'この りょうりは からだに とても しんせつですよ。' }, { n: 2, text: 'コンビニは {何|なん}でも {買|か}えるので とても しんせつです。' }, { n: 3, text: 'この びょういんの おいしゃさんは とても しんせつですよ。' }, { n: 4, text: 'わたしの {母|はは}は にわの {花|はな}に とても しんせつです。' }], answer: 3, translationPt: 'O médico deste hospital é muito atencioso.', explanationPt: 'しんせつ descreve pessoas gentis. Frase 3: «o médico é muito gentil». As outras pediam いい/べんり.' },
    { id: 'n4-2012-vocab-32', number: 32, prompt: '「にがい」 (= amargo)', choices: [{ n: 1, text: 'かぜを ひいたので、こえが にがいです。' }, { n: 2, text: 'くらい みちを {一人|ひとり}で あるくのは にがいです。' }, { n: 3, text: 'にもつが おもかったので、うでが にがいです。' }, { n: 4, text: 'この くすりは とても にがいです。' }], answer: 4, translationPt: 'Este remédio é muito amargo.', explanationPt: 'にがい = sabor amargo. Frase 4: «o remédio é amargo». As outras pediam へん/こわい/いたい.' },
    { id: 'n4-2012-vocab-33', number: 33, prompt: '「わる」 (= quebrar/partir)', choices: [{ n: 1, text: 'おさらを おとして、わって しまいました。' }, { n: 2, text: 'しんぶんを わって、かばんに 入れました。' }, { n: 3, text: 'ようふくを わって、母に おこられました。' }, { n: 4, text: 'この ジャムを 三本の びんに わって ください。' }], answer: 1, translationPt: 'Derrubei o prato e o quebrei.', explanationPt: 'わる = quebrar (algo rígido: prato, copo). Frase 1: «derrubei e quebrei o prato». Para jornal/roupa usa-se やぶる; para dividir, わける.' },
    { id: 'n4-2012-vocab-34', number: 34, prompt: '「ちこく」 (= atraso, chegar atrasado)', choices: [{ n: 1, text: 'あの とけいは ちょっと ちこくして います。' }, { n: 2, text: 'じゅぎょうに ちこくして すみません。' }, { n: 3, text: '10{時|じ}の でんしゃに ちこくして しまいました。' }, { n: 4, text: 'れんらくが ちこくして すみません。' }], answer: 2, translationPt: 'Desculpe por chegar atrasado à aula.', explanationPt: 'ちこく = chegar atrasado (a um compromisso/aula). Frase 2: «desculpe o atraso na aula». Para relógio usa-se おくれる; para perder o trem, のりおくれる.' },
  ],
}

const vocabulary: Section = {
  id: 'vocabulary',
  level: 'N4-2012',
  titleJa: 'げんごちしき（もじ・ごい）',
  titlePt: 'Vocabulário e Escrita',
  summaryPt:
    'Conhecimento da língua (caracteres e vocabulário) do simulado oficial 2012: leitura de kanji, escrita, vocabulário, frases equivalentes e uso correto. 34 questões.',
  studyNotes: [
    {
      title: 'Sobre esta leva (Simulado 2012)',
      bodyPt:
        'Questões do **Official Practice Workbook (2012)** do JLPT N4 (Japan Foundation) — mesmo formato da prova real. **Gabarito** pelo 正答表 oficial; **traduções e explicações** em pt-BR autorais.\n\nA seção もじ・ごい do N4 tem cinco partes:\n\n- **もんだい1** — ler o kanji sublinhado e escolher a **leitura**.\n- **もんだい2** — escolher a **escrita em kanji** da palavra em hiragana.\n- **もんだい3** — preencher a lacuna `（　）` com a **palavra** adequada.\n- **もんだい4** — escolher a frase de **sentido equivalente**.\n- **もんだい5** — escolher a frase em que a palavra é **usada corretamente** (用法).',
    },
  ],
  groups: [vocabM1, vocabM2, vocabM3, vocabM4, vocabM5],
}

// ---------------------------------------------------------------------
//  言語知識（文法）・読解 — Grammar
// ---------------------------------------------------------------------
const gramM1: ExerciseGroup = {
  id: 'n4-2012-gram-m1',
  title: 'もんだい1',
  subtitlePt: 'Forma gramatical (preencher a lacuna)',
  instructionJa: '（　）に 何を 入れますか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'O que entra na lacuna （　）? Escolha a melhor partícula/forma.',
  example: {
    prompt: 'わたしは {毎朝|まいあさ} {新聞|しんぶん}（　）{読|よ}みます。',
    choices: [{ n: 1, text: 'が' }, { n: 2, text: 'の' }, { n: 3, text: 'を' }, { n: 4, text: 'で' }],
    answer: 3,
    note: '新聞を 読む (ler jornal); を marca o objeto.',
  },
  questions: [
    { id: 'n4-2012-gram-1', number: 1, prompt: 'わたしの {父|ちち}は {中国語|ちゅうごくご}も {英語|えいご}（　）{話|はな}せます。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'で' }, { n: 3, text: 'も' }, { n: 4, text: 'が' }], answer: 3, translationPt: 'Meu pai fala chinês e inglês também.', explanationPt: '中国語も 英語も = chinês também, inglês também. O segundo も marca mais um item da lista.' },
    { id: 'n4-2012-gram-2', number: 2, prompt: 'これは わたしが {米|こめ}（　）{作|つく}った パンです。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'で' }, { n: 3, text: 'が' }, { n: 4, text: 'から' }], answer: 4, translationPt: 'Este é um pão que eu fiz a partir de arroz.', explanationPt: '原料 (matéria-prima que se transforma) usa から: 米から 作る (fazer a partir do arroz). で seria material que ainda se reconhece.' },
    { id: 'n4-2012-gram-3', number: 3, prompt: '{男|おとこ}の{子|こ}の {顔|かお}は {父親|ちちおや}より {母親|ははおや}（　）にる という {話|はなし}を {聞|き}いた。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'が' }, { n: 3, text: 'も' }, { n: 4, text: 'の' }], answer: 1, translationPt: 'Ouvi dizer que o rosto do menino se parece mais com a mãe do que com o pai.', explanationPt: 'Aに にる = parecer-se COM A (に marca com quem se parece).' },
    { id: 'n4-2012-gram-4', number: 4, prompt: '{妹|いもうと}は おしゃべりだ。{静|しず}かなのは {食事|しょくじ}の とき（　）だ。', choices: [{ n: 1, text: 'しか' }, { n: 2, text: 'だけ' }, { n: 3, text: 'が' }, { n: 4, text: 'の' }], answer: 2, translationPt: 'Minha irmã é tagarela. O único momento em que fica quieta é na refeição.', explanationPt: '〜だけ = somente/único. 食事の ときだけ = só na hora da refeição.' },
    { id: 'n4-2012-gram-5', number: 5, prompt: 'A「{誕生日|たんじょうび}に {田中|たなか}さんから {何|なに}を もらったんですか。」B「田中さん（　）{腕時計|うでどけい}を もらいました。」', choices: [{ n: 1, text: 'からが' }, { n: 2, text: 'からに' }, { n: 3, text: 'からで' }, { n: 4, text: 'からは' }], answer: 4, translationPt: '— O que você ganhou do Tanaka no aniversário? — Do Tanaka eu ganhei um relógio de pulso.', explanationPt: '〜から もらう = receber de alguém; com は (tópico/contraste): 田中さんからは.' },
    { id: 'n4-2012-gram-6', number: 6, prompt: '（{会社|かいしゃ}で）A「すみません。{山田|やまだ}さんは どこですか。」B「山田さんは {会議中|かいぎちゅう}ですが、{会議|かいぎ}は 11{時半|じはん}（　）{終|お}わると {思|おも}いますよ。」', choices: [{ n: 1, text: 'までは' }, { n: 2, text: 'までには' }, { n: 3, text: 'までも' }, { n: 4, text: 'までにも' }], answer: 2, translationPt: '(Na empresa) — O Yamada está onde? — Está em reunião, mas acho que ela termina até as 11h30.', explanationPt: '〜までに = até (prazo) de um acontecimento pontual (終わる). Com は: 11時半までには.' },
    { id: 'n4-2012-gram-7', number: 7, prompt: '{学生|がくせい}「{先生|せんせい}、この {言葉|ことば}は（　）{意味|いみ}ですか。」先生「『やさしい』と いう {意味|いみ}です。」', choices: [{ n: 1, text: 'どうやって' }, { n: 2, text: 'どのぐらい' }, { n: 3, text: 'どういう' }, { n: 4, text: 'どう' }], answer: 3, translationPt: '— Professor, que sentido tem esta palavra? — Significa "fácil/gentil".', explanationPt: 'どういう + substantivo = "que tipo de ~": どういう 意味 (que sentido).' },
    { id: 'n4-2012-gram-8', number: 8, prompt: 'チャン「{古川|ふるかわ}さん、この じゅぎょうの レポート、{終|お}わりましたか。」古川「はい、{一週間|いっしゅうかん} かかりましたが、きのうの {夜|よる}、（　）{終|お}わりました。」', choices: [{ n: 1, text: 'やっと' }, { n: 2, text: 'ずっと' }, { n: 3, text: 'もっと' }, { n: 4, text: 'きっと' }], answer: 1, translationPt: '— Furukawa, terminou o relatório da aula? — Sim, levei uma semana, mas ontem à noite finalmente terminei.', explanationPt: 'やっと = enfim/finalmente (algo difícil se concretiza). ずっと=o tempo todo, もっと=mais, きっと=com certeza.' },
    { id: 'n4-2012-gram-9', number: 9, prompt: 'A「あした いっしょに ドライブに {行|い}きませんか。」B「（　）、ごめんなさい、あしたは アルバイトが あるんです。」', choices: [{ n: 1, text: '行きたいから' }, { n: 2, text: '行きたいけれど' }, { n: 3, text: '行きたいし' }, { n: 4, text: '行きたくて' }], answer: 2, translationPt: '— Amanhã vamos passear de carro? — Eu queria ir, mas desculpa, amanhã tenho trabalho de meio período.', explanationPt: '〜けれど = mas (contraste). "Queria ir, mas não posso".' },
    { id: 'n4-2012-gram-10', number: 10, prompt: '{子|こ}ども「ねえ、ゲームを しても いい？」{母親|ははおや}「しゅくだいを（　）あとでね。」', choices: [{ n: 1, text: 'して いた' }, { n: 2, text: 'して いる' }, { n: 3, text: 'したら' }, { n: 4, text: 'した' }], answer: 4, translationPt: '— Mãe, posso jogar videogame? — Depois de fazer a lição, viu.', explanationPt: '〜た あとで = depois de fazer ~. しゅくだいを した あとで = depois de fazer a lição.' },
    { id: 'n4-2012-gram-11', number: 11, prompt: 'この すいかは（　）すぎて、れいぞうこに {入|はい}らない。', choices: [{ n: 1, text: '大き' }, { n: 2, text: '大きい' }, { n: 3, text: '大きく' }, { n: 4, text: '大きくて' }], answer: 1, translationPt: 'Esta melancia é grande demais e não cabe na geladeira.', explanationPt: 'い-adjetivo + すぎる: tira o い → 大き + すぎる = grande demais.' },
    { id: 'n4-2012-gram-12', number: 12, prompt: 'A「{誕生日|たんじょうび} おめでとうございます。これ、プレゼントです。どうぞ。」B「ありがとうございます。{大切|たいせつ}に（　）。」', choices: [{ n: 1, text: 'します' }, { n: 2, text: 'なります' }, { n: 3, text: 'います' }, { n: 4, text: 'あります' }], answer: 1, translationPt: '— Parabéns pelo aniversário. Aqui, um presente. — Obrigado. Vou guardar com carinho.', explanationPt: '大切に します = vou cuidar/guardar com carinho (〜に する = decidir tratar de tal modo).' },
    { id: 'n4-2012-gram-13', number: 13, prompt: 'A「きのうは ひっこしを（　）、どうも ありがとうございました。」B「いいえ、どういたしまして。」', choices: [{ n: 1, text: '手伝って' }, { n: 2, text: '手伝ったので' }, { n: 3, text: '手伝って くれて' }, { n: 4, text: '手伝ったから' }], answer: 3, translationPt: '— Obrigado por ter me ajudado na mudança ontem. — De nada.', explanationPt: '〜て くれて ありがとう = obrigado por (fazer algo) por mim. 手伝って くれて = por ter me ajudado.' },
    { id: 'n4-2012-gram-14', number: 14, prompt: '{今日|きょう}、わたしは えんぴつと {消|け}しゴムを {忘|わす}れたので、となりの {人|ひと}に {貸|か}して（　）。', choices: [{ n: 1, text: 'やりました' }, { n: 2, text: 'あげました' }, { n: 3, text: 'くれました' }, { n: 4, text: 'もらいました' }], answer: 4, translationPt: 'Hoje esqueci o lápis e a borracha, então pedi emprestado ao colega ao lado.', explanationPt: '〜て もらう = receber o favor de alguém. 貸して もらいました = pedi (e recebi) emprestado.' },
    { id: 'n4-2012-gram-15', number: 15, prompt: 'わたしの {本|ほん}だなには（　）{読|よ}んで いない まんがが たくさん あります。', choices: [{ n: 1, text: '買うあいだ' }, { n: 2, text: '買ったまま' }, { n: 3, text: '買いそうで' }, { n: 4, text: '買って いる' }], answer: 2, translationPt: 'Na minha estante há muitos mangás que comprei mas (deixei) sem ler.', explanationPt: '〜たまま = no estado de ter feito (sem mudar): 買ったまま 読んで いない = comprado e deixado sem ler.' },
  ],
}

const gramM2: ExerciseGroup = {
  id: 'n4-2012-gram-m2',
  title: 'もんだい2',
  subtitlePt: 'Montagem da frase (★)',
  instructionJa: '★に 入る ものは どれですか。1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'Ordene os fragmentos. Qual entra na posição ★? (A explicação mostra a frase montada.)',
  example: {
    prompt: 'つくえの ＿＿ ＿＿ ★ ＿＿ あります。',
    choices: [{ n: 1, text: 'が' }, { n: 2, text: 'に' }, { n: 3, text: '上' }, { n: 4, text: 'ペン' }],
    answer: 4,
    note: 'Ordem: つくえの 上 に ペン が あります → ★ = ペン (4).',
  },
  questions: [
    { id: 'n4-2012-gram-16', number: 16, prompt: 'A「コンサートには もう {間|ま}に{合|あ}わないですね。」B「{今|いま}すぐ ＿＿ ＿＿ ★ ＿＿ {行|い}こう。」', choices: [{ n: 1, text: 'タクシーに' }, { n: 2, text: 'タクシーで' }, { n: 3, text: '間に合うかもしれないから' }, { n: 4, text: '乗れば' }], answer: 3, translationPt: '— Não vamos mais conseguir chegar a tempo no show. — Vamos agora; se pegarmos um táxi talvez dê tempo.', explanationPt: 'Ordem: 今すぐ タクシーに 乗れば 間に合うかもしれないから 行こう. ★ = 間に合うかもしれないから (3).' },
    { id: 'n4-2012-gram-17', number: 17, prompt: '{山田|やまだ}「{田中|たなか}さん、これから {食事|しょくじ}でも どうですか。」田中「すみません。ちょうど ＿＿ ＿＿ ★ ＿＿ です。」', choices: [{ n: 1, text: 'なん' }, { n: 2, text: 'ところ' }, { n: 3, text: '食べた' }, { n: 4, text: '今' }], answer: 2, translationPt: '— Tanaka, que tal comermos algo agora? — Desculpe, acabei de comer agorinha.', explanationPt: 'Ordem: ちょうど 今 食べた ところ なん です (acabei de comer). ★ = ところ (2).' },
    { id: 'n4-2012-gram-18', number: 18, prompt: 'A「あしたは {大事|だいじ}な おきゃくさまに {会|あ}うから、＿＿ ＿＿ ★ ＿＿ いけませんよ。」B「わかりました。あしたは {新|あたら}しい くつを はいて {来|き}ます。」', choices: [{ n: 1, text: 'くつ' }, { n: 2, text: 'は' }, { n: 3, text: 'そんな' }, { n: 4, text: 'で' }], answer: 4, translationPt: '— Amanhã vamos receber um cliente importante, então não pode ir com esse tipo de sapato. — Entendi, amanhã venho de sapato novo.', explanationPt: 'Ordem: そんな くつ で は いけません. ★ = で (4).' },
    { id: 'n4-2012-gram-19', number: 19, prompt: '{今日|きょう}は、{風|かぜ}が ＿＿ ＿＿ ★ ＿＿ {出|で}かけたくない。', choices: [{ n: 1, text: 'し' }, { n: 2, text: 'だから' }, { n: 3, text: '{寒|さむ}そう' }, { n: 4, text: '{強|つよ}い' }], answer: 3, translationPt: 'Hoje o vento está forte e parece que vai fazer frio, então não quero sair.', explanationPt: 'Ordem: 風が 強い し 寒そう だから 出かけたくない. ★ = 寒そう (3).' },
    { id: 'n4-2012-gram-20', number: 20, prompt: '{田中|たなか}「{山田|やまだ}さん。{東京|とうきょう}の {大学|だいがく}に {行|い}く ことを、もう ご{両親|りょうしん}に {話|はな}しましたか。」山田「いいえ。でも、もし {両親|りょうしん}に ＿＿ ＿＿ ★ ＿＿ つもりです。」', choices: [{ n: 1, text: '{反対|はんたい}' }, { n: 2, text: 'する' }, { n: 3, text: '{東京|とうきょう}で {勉強|べんきょう}' }, { n: 4, text: 'されても' }], answer: 3, translationPt: '— Yamada, você já contou aos seus pais que vai para a universidade em Tóquio? — Não. Mas, mesmo que eles sejam contra, pretendo estudar em Tóquio.', explanationPt: 'Ordem: もし 両親に 反対 されても 東京で勉強 する つもりです. ★ = 東京で勉強 (3).' },
  ],
}

const gramM3: ExerciseGroup = {
  id: 'n4-2012-gram-m3',
  title: 'もんだい3',
  subtitlePt: 'Gramática no texto (cloze)',
  instructionJa:
    '21から25に 何を 入れますか。文章の 意味を 考えて、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n【下の 文章は「家族」に ついての 作文です。】\n\n「ポチ」　{林|はやし} {明|あきら}\n\nわたしの {家|いえ}には「ポチ」と いう {名前|なまえ}の {犬|いぬ}が います。一か月前に {父|ちち}が もらって きました。わたしたちは ポチを 家の 中で【21】。ポチが 好きな ところは テレビの 前の ソファーです。ポチは とても かわいいのですが、{何|なん}でも かむので 少し こまって います。先週は 本当に こまりました。ポチが 父の けいたいでんわを【22】からです。\nわたしは {兄弟|きょうだい}が いないので、ずっと さびしかったです。しかし、ポチを かってからは【23】。わたしたちは いつも いっしょです。ポチは わたしが 家を 出る とき、いつも げんかんまで 出て きます。【24】、{元気|げんき}が ない ときは、そばに 来て くれます。ポチ【25】わたしたちの {大切|たいせつ}な {家族|かぞく}の {一員|いちいん}です。',
  instructionPt: 'Leia a redação "Pochi" (sobre a família, do cão da casa) e escolha o que melhor preenche cada lacuna 21–25.',
  questions: [
    { id: 'n4-2012-gram-21', number: 21, prompt: '【21】', choices: [{ n: 1, text: 'かうでしょう' }, { n: 2, text: 'かって います' }, { n: 3, text: 'かって いますか' }, { n: 4, text: 'かって いました' }], answer: 2, translationPt: 'Criamos o Pochi dentro de casa.', explanationPt: 'Fato atual e contínuo → 〜て います: 家の 中で かって います (criamos/temos dentro de casa).' },
    { id: 'n4-2012-gram-22', number: 22, prompt: '【22】', choices: [{ n: 1, text: 'こわした ところだ' }, { n: 2, text: 'こわされて いる' }, { n: 3, text: 'こわして しまった' }, { n: 4, text: 'こわされた' }], answer: 3, translationPt: '...porque o Pochi acabou quebrando o celular do pai.', explanationPt: '〜て しまった = acabou fazendo (algo indesejado/concluído). ポチが…こわして しまった.' },
    { id: 'n4-2012-gram-23', number: 23, prompt: '【23】', choices: [{ n: 1, text: 'さびしく なります' }, { n: 2, text: 'さびしく なくなりました' }, { n: 3, text: 'さびしく なるかもしれません' }, { n: 4, text: 'さびしく なくなったそうです' }], answer: 2, translationPt: 'Depois que passei a criá-lo, deixei de me sentir sozinho.', explanationPt: 'さびしく なくなりました = deixou de ser solitário (mudança já ocorrida, sobre si mesmo).' },
    { id: 'n4-2012-gram-24', number: 24, prompt: '【24】', choices: [{ n: 1, text: 'それに' }, { n: 2, text: 'たとえば' }, { n: 3, text: 'だから' }, { n: 4, text: 'それなら' }], answer: 1, translationPt: 'Além disso, quando estou sem ânimo, ele vem para o meu lado.', explanationPt: 'それに = além disso (acrescenta mais um ponto positivo). たとえば=por exemplo, だから=por isso.' },
    { id: 'n4-2012-gram-25', number: 25, prompt: '【25】', choices: [{ n: 1, text: 'が' }, { n: 2, text: 'で' }, { n: 3, text: 'と' }, { n: 4, text: 'は' }], answer: 4, translationPt: 'O Pochi é um membro importante da nossa família.', explanationPt: 'Tópico/definição: ポチは … 一員です (o Pochi é um membro). は marca o tema.' },
  ],
}

const grammar: Section = {
  id: 'grammar',
  level: 'N4-2012',
  titleJa: 'げんごちしき（ぶんぽう）',
  titlePt: 'Gramática',
  summaryPt:
    'Conhecimento da língua (gramática) do simulado oficial 2012: forma gramatical, montagem de frases (★) e gramática no texto. 25 questões.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (文法)',
      bodyPt:
        '- **もんだい1** — escolher a **forma/partícula** que preenche a lacuna `（　）`.\n- **もんだい2** — **ordenar** 4 fragmentos; responder qual fica na posição **★** (a explicação mostra a frase montada).\n- **もんだい3** — **cloze**: preencher as lacunas de um texto pensando no sentido geral.',
    },
  ],
  groups: [gramM1, gramM2, gramM3],
}

export const n4_2012: Level = {
  id: 'N4-2012',
  courseId: 'jlpt',
  titlePt: 'N4 — Simulado 2012',
  descriptionPt:
    'Segunda leva de prática do N4: simulado a partir do Official Practice Workbook 2012 do JLPT (Japan Foundation), com gabarito oficial e explicações em pt-BR. (Em construção: 読解 e 聴解 serão adicionados.)',
  sections: [vocabulary, grammar],
}
