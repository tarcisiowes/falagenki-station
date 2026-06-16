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

// ---------------------------------------------------------------------
//  読解 — Reading
// ---------------------------------------------------------------------
const readM4: ExerciseGroup = {
  id: 'n4-2012-read-m4',
  title: 'もんだい4',
  subtitlePt: 'Compreensão de texto curto',
  instructionJa: 'つぎの(1)から(4)の 文章を 読んで、質問に 答えてください。答えは、1・2・3・4から いちばん いい ものを 一つ えらんでください。',
  instructionPt: 'Leia cada texto curto e responda à pergunta.',
  questions: [
    { id: 'n4-2012-read-26', number: 26, context: '（1）アリさんの {机|つくえ}の {上|うえ}に、このメモと {本|ほん}が {置|お}いて あります。\n\nアリさん\nアリさんから {借|か}りた 本を {置|お}いて おきます。ありがとうございました。アリさんが 借りたいと {言|い}っていた 本も、{一緒|いっしょ}に {置|お}きます。{重|おも}いので、{今日|きょう}は 2{冊|さつ}しか {持|も}ってきませんでした。{来週|らいしゅう}、ほかの 3{冊|さつ}を {持|も}ってきます。\n石川', prompt: '{石川|いしかわ}さんは、{来週|らいしゅう}、{何|なに}を すると {言|い}っていますか。', choices: [{ n: 1, text: 'アリさんに 本を 2冊返します。' }, { n: 2, text: 'アリさんに 本を 3冊返します。' }, { n: 3, text: 'アリさんに 本を 2冊貸します。' }, { n: 4, text: 'アリさんに 本を 3冊貸します。' }], answer: 4, translationPt: 'O que o Ishikawa diz que fará na semana que vem?', explanationPt: 'Ishikawa empresta a Ari os livros que ela queria; hoje trouxe só 2 (pesados) e «来週、ほかの 3冊を 持ってきます» — semana que vem traz/empresta os outros 3 (貸す).' },
    { id: 'n4-2012-read-27', number: 27, context: '（2）{公園|こうえん}の {入口|いりぐち}に、このお{知|し}らせが あります。\n\n【公園で 遊ぶ ときの 注意】\n◆ 公園が 開いている 時間は、午前6時から 午後9時です。これ以外の 時間は 入れません。\n◆ {自転車|じてんしゃ}や オートバイは、公園の 入口に とめてください。中に 入れては いけません。\n◆ 公園の 中で、次の ことを しては いけません。・ボールを 使って 遊ぶこと ・たばこを 吸うこと', prompt: 'このお{知|し}らせから、{公園|こうえん}について わかる ことは {何|なん}ですか。', choices: [{ n: 1, text: '午後10時に 公園に 入っても いいです。' }, { n: 2, text: '入口に オートバイを とめては いけません。' }, { n: 3, text: 'サッカーの 練習を しては いけません。' }, { n: 4, text: 'たばこを 吸っても いいです。' }], answer: 3, translationPt: 'O que se entende sobre o parque por este aviso?', explanationPt: 'Proíbe brincar com bola → futebol (que usa bola) é proibido = opção 3. (1 fecha às 21h; 2 as motos DEVEM ficar na entrada; 4 proíbe fumar.)' },
    { id: 'n4-2012-read-28', number: 28, context: '（3）これは、{山田|やまだ}先生から トムさんに {届|とど}いた メールです。\n\nトムさん\n{明日|あした}（30日）の {約束|やくそく}ですが、{会議|かいぎ}に {出|で}なければ ならなく なりました。それで、すみませんが、約束を 31日の 午後3時に {変|か}えられませんか。トムさんの {都合|つごう}が よければ、オフィスで {待|ま}っています。このメールを {読|よ}んだら、{返事|へんじ}を ください。\n山田', prompt: 'トムさんは、{山田|やまだ}先生に {何|なに}を {知|し}らせなければ なりませんか。', choices: [{ n: 1, text: '約束を 明日に 変えられるかどうか' }, { n: 2, text: '約束を あさってに 変えられるかどうか' }, { n: 3, text: 'トムさんの 明日の 午後の 都合' }, { n: 4, text: 'トムさんの あさっての 午前の 都合' }], answer: 2, translationPt: 'O que o Tom precisa avisar ao professor Yamada?', explanationPt: '明日=30, あさって=31. Yamada quer mudar para o dia 31 (あさって) às 15h. Tom deve avisar se pode mudar para あさって = opção 2.' },
    { id: 'n4-2012-read-29', number: 29, context: '（4）{石田|いしだ}さんは、{川下|かわした}{図書館|としょかん}で {働|はたら}いています。本についての {相談|そうだん}を {受|う}けたり、どこに どの本を {置|お}くのが いいか {考|かんが}えたりします。それから、図書館の {新聞|しんぶん}に よい本の {紹介文|しょうかいぶん}を {書|か}いたり、{小|ちい}さな {子|こ}どもたちに {絵本|えほん}を {読|よ}んだり します。', prompt: '{石田|いしだ}さんの {仕事|しごと}ではない ものは どれですか。', choices: [{ n: 1, text: '相談に 来た人に 本について 紹介します。' }, { n: 2, text: '本を 置く場所は どこが いいか、考えます。' }, { n: 3, text: '新聞に のっている、よい本の 紹介文を さがします。' }, { n: 4, text: '小さな 子どもたちに、いろいろな 絵本を 読みます。' }], answer: 3, translationPt: 'Qual NÃO é tarefa do Ishida?', explanationPt: 'Ele ESCREVE resenhas no jornal (紹介文を 書く), não as PROCURA (さがす). Logo a opção 3 não é tarefa dele.' },
  ],
}

const readM5: ExerciseGroup = {
  id: 'n4-2012-read-m5',
  title: 'もんだい5',
  subtitlePt: 'Compreensão de texto médio',
  instructionJa:
    'つぎの 文章を 読んで、質問に 答えてください。答えは、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n{今年|ことし}の {夏|なつ}、わたしは {家族|かぞく}で {山|やま}の {中|なか}に ある ホテルに {泊|と}まりました。{駅|えき}から ホテルの {近|ちか}くの バス{停|てい}まで バスで 2{時間|じかん}{以上|いじょう}かかりました。バス停から ホテルは、{細|ほそ}い {道|みち}を 30{分|ぷん}{近|ちか}く {歩|ある}きました。①ホテルは {小|ちい}さくて {古|ふる}かったですが、{中|なか}は とても きれいでした。ホテルに {着|つ}くと、{息子|むすこ}は「テレビが {見|み}たい」「ゲームが したい」と {言|い}いました。しかし、ホテルには どちらも ありません。{冷蔵庫|れいぞうこ}も エアコンも ありません。このホテルは {便利|べんり}では ありませんでした。\n{部屋|へや}に {荷物|にもつ}を {置|お}いて {窓|まど}を {開|あ}けると、{湖|みずうみ}から すずしい {風|かぜ}が {入|はい}って きました。{少|すこ}し {休|やす}んでから、まだ {明|あか}るかったので、{散歩|さんぽ}に {出|で}かけました。{空気|くうき}が おいしくて、{景色|けしき}も {美|うつく}しかったです。{夜|よる}は、{星|ほし}が とても きれいでした。わたしたちは {毎日|まいにち}、みんなで {散歩|さんぽ}を したり、{湖|みずうみ}で {泳|およ}いだり、{虫|むし}を とったり、{昼寝|ひるね}を したり しました。\nホテルには 1{週間|しゅうかん} いました。わたしたちは「{楽|たの}しかったね。②こんな {生活|せいかつ}も たまには いいね」と {話|はな}して、{家|いえ}に {帰|かえ}りました。',
  instructionPt: 'Leia o texto (férias em família num hotel simples no meio das montanhas) e responda.',
  questions: [
    { id: 'n4-2012-read-30', number: 30, prompt: 'どんな ①ホテルに {泊|と}まりましたか。', choices: [{ n: 1, text: '山の 中の 大きな ホテル' }, { n: 2, text: '古いが、中は きれいな ホテル' }, { n: 3, text: 'テレビや ゲームが 楽しめる ホテル' }, { n: 4, text: 'いろいろな ものが あって、便利な ホテル' }], answer: 2, translationPt: 'Em que tipo de hotel ficaram?', explanationPt: '«小さくて 古かったですが、中は とても きれいでした» → velho, mas limpo por dentro = opção 2. Não tinha TV/games/geladeira/ar (não era prático).' },
    { id: 'n4-2012-read-31', number: 31, prompt: '{駅|えき}から ホテルまで どうやって {行|い}きましたか。', choices: [{ n: 1, text: '駅から 30分 バスに 乗って、バス停から 2時間以上 歩きました。' }, { n: 2, text: '駅から 30分 バス停まで 歩いて、バスに 2時間以上 乗りました。' }, { n: 3, text: '駅から 2時間以上 バスに 乗って、バス停から 30分以上 歩きました。' }, { n: 4, text: '駅から 2時間以上 バスに 乗って、バス停から 30分 歩きました。' }], answer: 4, translationPt: 'Como foram da estação até o hotel?', explanationPt: '«バスで 2時間以上» depois «30分近く 歩きました» → ônibus 2h+ e caminhada de ~30 min (30分近く ≈ quase 30) = opção 4.' },
    { id: 'n4-2012-read-32', number: 32, prompt: 'ホテルに {着|つ}いてから、{何|なに}を しましたか。', choices: [{ n: 1, text: '部屋に 行かないで、すぐに 湖に 行きました。' }, { n: 2, text: '部屋に 行って、夜まで ずっと 休みました。' }, { n: 3, text: '部屋で テレビを 見てから、星を 見に 外へ 出ました。' }, { n: 4, text: '部屋で 少し 休んでから、散歩に 行きました。' }], answer: 4, translationPt: 'O que fizeram depois de chegar ao hotel?', explanationPt: '«部屋に 荷物を 置いて… 少し 休んでから… 散歩に 出かけました» → descansaram um pouco no quarto e foram passear = opção 4.' },
    { id: 'n4-2012-read-33', number: 33, prompt: '②こんな {生活|せいかつ}とありますが、どんな {生活|せいかつ}ですか。', choices: [{ n: 1, text: '山で 遊んだり、昼寝を したりする 生活' }, { n: 2, text: 'ゲームを したり、虫を とったりする 生活' }, { n: 3, text: '散歩を したり、テレビを 見たりする 生活' }, { n: 4, text: 'おいしい ものを 食べて、何も しない 生活' }], answer: 1, translationPt: 'O que significa "esse tipo de vida"?', explanationPt: 'A vida descrita é na natureza: passear, nadar no lago, pegar insetos, tirar soneca. Opção 1 (brincar na montanha e tirar soneca) combina. (Não havia TV nem games no hotel.)' },
  ],
}

const readM6: ExerciseGroup = {
  id: 'n4-2012-read-m6',
  title: 'もんだい6',
  subtitlePt: 'Busca de informação',
  instructionJa:
    '右の ページの「スポーツ教室」のお知らせを 見て、下の 質問に 答えてください。答えは、1・2・3・4から いちばん いい ものを 一つ えらんでください。\n\n【あおぞら一日スポーツ教室】 5月29日(日) 10:00〜17:00 ／ 場所：あおぞら運動場\nいろいろな スポーツの ルールや やり方を 先生が 教えます。\n\n① 好きな 時間に 始められる:\n・ジョギング 10:00〜12:00 第1運動場 … ただ(grátis)\n・自転車 13:30〜17:00 第1運動場 … ただ（※自転車を 借りる 人は 200円）\n・水泳 10:00〜17:00 プール … 300円\n② グループで 試合をする:\n・サッカー 10:00〜17:00 第2運動場 … 100円\n・バスケットボール 10:00〜17:00 体育館 … 100円\n②午前：ルールややり方を 先生が 教えます（サッカーは 第2運動場、バスケットボールは 体育館に 10:00までに）。午後：グループで 試合（受付は 13:00までに）。初めての 人は ぜひ 午前の 教室から。',
  instructionPt: 'Veja o aviso da “oficina de esportes de um dia” e responda.',
  questions: [
    { id: 'n4-2012-read-34', number: 34, prompt: '{自転車|じてんしゃ}を {借|か}りて {乗|の}りたい {人|ひと}は、いくら {払|はら}わなければ なりませんか。', choices: [{ n: 1, text: 'ただ' }, { n: 2, text: '100円' }, { n: 3, text: '200円' }, { n: 4, text: '300円' }], answer: 3, translationPt: 'Quem quer andar de bicicleta emprestada paga quanto?', explanationPt: 'A atividade de bicicleta é grátis (ただ), mas quem PRECISA pegar a bicicleta emprestada paga 200円 (※). = opção 3.' },
    { id: 'n4-2012-read-35', number: 35, prompt: 'バスケットボールの ルールや、やり{方|かた}を {習|なら}ってから {試合|しあい}に {出|で}たい {人|ひと}は、まず どう しなければ なりませんか。', choices: [{ n: 1, text: '10:00までに 受付に 行きます。' }, { n: 2, text: '10:00までに 体育館に 行きます。' }, { n: 3, text: '13:00までに 受付に 行きます。' }, { n: 4, text: '13:00までに 体育館に 行きます。' }], answer: 2, translationPt: 'Quem quer aprender as regras do basquete e depois jogar a partida deve fazer o quê primeiro?', explanationPt: 'Para aprender as regras (parte da manhã), o basquete é no ginásio (体育館) e deve-se chegar até as 10:00. = opção 2.' },
  ],
}

const reading: Section = {
  id: 'reading',
  level: 'N4-2012',
  titleJa: 'どっかい',
  titlePt: 'Leitura',
  summaryPt:
    'Compreensão de leitura do simulado oficial 2012: textos curtos, texto médio e busca de informação. 10 questões.',
  studyNotes: [
    {
      title: 'Os 3 tipos de questão (読解)',
      bodyPt:
        '- **もんだい4** — textos **curtos** (avisos, memos, e-mails).\n- **もんだい5** — texto **médio**; entenda detalhes e expressões sublinhadas.\n- **もんだい6** — **busca de informação** (folhetos, tabelas, horários).',
    },
  ],
  groups: [readM4, readM5, readM6],
}

// ---------------------------------------------------------------------
//  聴解 — Listening (áudio oficial 2012)
// ---------------------------------------------------------------------
const listening: Section = {
  id: 'listening',
  level: 'N4-2012',
  titleJa: 'ちょうかい',
  titlePt: 'Audição',
  summaryPt:
    'Compreensão auditiva do simulado oficial 2012. Quatro tipos (tarefa, ponto-chave, expressões, resposta rápida). Use o player com os áudios oficiais e acompanhe a transcrição com tradução.',
  studyNotes: [
    {
      title: 'Como estudar com os áudios',
      bodyPt:
        '1. **Ouça primeiro sem ler** e tente responder.\n2. Use o player para **reduzir a velocidade** e o **A–B** para repetir trechos.\n3. Depois leia a **transcrição** com furigana e ative a **tradução pt-BR**.\n4. Marque “Mostrar respostas” e compare. Áudios oficiais (JLPT 2012).',
    },
  ],
  groups: [],
  audios: [
    {
      id: 'n4-2012-listening-q1',
      title: 'もんだい１ — Compreensão de tarefa',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e descubra o que a pessoa precisa fazer. (8 itens + exemplo)',
      src: '/audio/N4-2012/N4Q1.mp3',
      script: [
        { label: '例', setupJa: '{男|おとこ}の{人|ひと}が{女|おんな}の{人|ひと}に{電話|でんわ}を しています。{男|おとこ}の{人|ひと}は、{何|なに}を{買|か}って{帰|かえ}りますか。', setupPt: 'Um homem liga para uma mulher. O que ele vai comprar na volta?', lines: [
          { speaker: 'M', ja: 'これから{帰|かえ}るけど、{何|なに}か{買|か}って{帰|かえ}ろうか。', pt: 'Estou indo para casa; quer que eu compre algo?' },
          { speaker: 'F', ja: 'あ、ありがとう。えっとね、{牛乳|ぎゅうにゅう}。それから。', pt: 'Ah, obrigada. Então... leite. E...' },
          { speaker: 'M', ja: 'ちょっと{待|ま}って、{牛乳|ぎゅうにゅう}は 1{本|ぽん}でいいの？', pt: 'Espera, leite é uma caixa só?' },
          { speaker: 'F', ja: 'えっと、2{本|ほん}お{願|ねが}い。それから、チーズ。', pt: 'Hmm, duas, por favor. E queijo.' },
          { speaker: 'M', ja: 'あれ、チーズはまだ たくさん あったよね。', pt: 'Ué, ainda tinha bastante queijo, né?' },
          { speaker: 'F', ja: 'ごめん、{今日|きょう}のお{昼|ひる}に{全部|ぜんぶ}{食|た}べたの。', pt: 'Desculpa, comi tudo no almoço de hoje.' },
          { speaker: 'M', ja: '{分|わ}かった。じゃ、{買|か}って{帰|かえ}るね。', pt: 'Entendi. Então compro na volta.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{何|なに}を{買|か}って{帰|かえ}りますか。', answer: 4 },
        { label: '1番', setupJa: '{男|おとこ}の{人|ひと}と{女|おんな}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}は、{何|なに}で{美術館|びじゅつかん}へ{行|い}きますか。', setupPt: 'Conversam. Como o homem vai ao museu?', lines: [
          { speaker: 'M', ja: '{美術館|びじゅつかん}に{行|い}きたいんですけど、{何|なに}で{行|い}くのが{便利|べんり}ですか。', pt: 'Quero ir ao museu; como é mais prático ir?' },
          { speaker: 'F', ja: '{車|くるま}で{行|い}けば 10{分|ぷん}ですよ。', pt: 'De carro são 10 minutos.' },
          { speaker: 'M', ja: 'そうですか。{電車|でんしゃ}かバスでも{行|い}けますか。', pt: 'Ah. Dá para ir de trem ou ônibus também?' },
          { speaker: 'F', ja: 'うーん、{行|い}けますけど、{時間|じかん}が かかりますよ。{自転車|じてんしゃ}は{持|も}っていますか。', pt: 'Dá, mas demora. Você tem bicicleta?' },
          { speaker: 'M', ja: 'はい。', pt: 'Tenho.' },
          { speaker: 'F', ja: 'じゃあ、{自転車|じてんしゃ}のほうが{便利|べんり}ですよ。', pt: 'Então a bicicleta é mais prática.' },
          { speaker: 'M', ja: 'そうですか。{分|わ}かりました。じゃ、そうします。', pt: 'Entendi. Então vou assim.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{何|なに}で{美術館|びじゅつかん}へ{行|い}きますか。', answer: 1 },
        { label: '2番', setupJa: '{男|おとこ}の{学生|がくせい}と{女|おんな}の{学生|がくせい}が{話|はな}しています。{男|おとこ}の{学生|がくせい}は、{何|なに}を{買|か}いますか。', setupPt: 'Sobre um presente de aniversário. O que o rapaz vai comprar?', lines: [
          { speaker: 'M', ja: '{来週|らいしゅう}、{佐藤|さとう}さんの{誕生日|たんじょうび}だね。もうプレゼント、{買|か}った？', pt: 'Semana que vem é aniversário da Sato. Já comprou presente?' },
          { speaker: 'F', ja: 'うん。かばん、{買|か}った。', pt: 'Sim, comprei uma bolsa.' },
          { speaker: 'M', ja: 'そうか。{僕|ぼく}はまだ{決|き}められなくて{困|こま}っているんだ。', pt: 'Ah. Eu ainda não consegui decidir.' },
          { speaker: 'F', ja: 'そう。じゃあ、カップはどう？{佐藤|さとう}さん、コーヒーが{好|す}きで、よく{飲|の}んでいるよ。', pt: 'Que tal uma xícara? A Sato gosta de café, bebe sempre.' },
          { speaker: 'M', ja: 'うーん、でも、カップはもう たくさん{持|も}っているかもしれないな。', pt: 'Hmm, mas ela talvez já tenha muitas xícaras.' },
          { speaker: 'F', ja: 'じゃあ、タオルはどう？よくスポーツを しているから。', pt: 'Então uma toalha? Ela pratica esporte.' },
          { speaker: 'M', ja: 'そうだね。じゃあ、そうしよう。ありがとう。', pt: 'É verdade. Então vou de toalha. Obrigado.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}は、{何|なに}を{買|か}いますか。', answer: 4 },
        { label: '3番', setupJa: '{男|おとこ}の{人|ひと}と{女|おんな}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、チケットを{何枚|なんまい}{予約|よやく}しますか。', setupPt: 'Conversam. Quantos ingressos a mulher vai reservar?', lines: [
          { speaker: 'M', ja: '{来月|らいげつ}のコンサートのチケット、{予約|よやく}してくれる？', pt: 'Pode reservar os ingressos do show do mês que vem?' },
          { speaker: 'F', ja: 'うん、いいよ。{何枚|なんまい}？', pt: 'Claro. Quantos?' },
          { speaker: 'M', ja: '{僕|ぼく}たち{二人|ふたり}と、{友達|ともだち}{四人|よにん}。', pt: 'Nós dois e quatro amigos.' },
          { speaker: 'F', ja: 'じゃあ、6{枚|まい}ね。', pt: 'Então seis.' },
          { speaker: 'M', ja: 'あ、そうだ、ごめん。{一人|ひとり}{都合|つごう}が{悪|わる}くなったから、{五人|ごにん}だ。', pt: 'Ah, desculpa. Um não pode mais vir, então são cinco.' },
          { speaker: 'F', ja: 'あ、そう。{分|わ}かった。', pt: 'Ah, tá. Entendi.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、チケットを{何枚|なんまい}{予約|よやく}しますか。', answer: 3 },
        { label: '4番', setupJa: '{女|おんな}の{人|ひと}と{男|おとこ}の{人|ひと}が{写真|しゃしん}について{話|はな}しています。{女|おんな}の{人|ひと}は、どの{写真|しゃしん}を{送|おく}りますか。', setupPt: 'Falam sobre fotos. Quais fotos ela vai enviar?', lines: [
          { speaker: 'F', ja: '{国|くに}の{両親|りょうしん}に{写真|しゃしん}を{送|おく}りたいんだけど、どれがいいと{思|おも}う？', pt: 'Quero mandar fotos aos meus pais no meu país; quais você acha boas?' },
          { speaker: 'M', ja: 'この{海|うみ}の{写真|しゃしん}は{顔|かお}が{小|ちい}さくて よく{見|み}えないね。', pt: 'Nesta foto do mar o rosto fica pequeno e não dá para ver bem.' },
          { speaker: 'F', ja: 'うん。じゃ、だめだね。この{山|やま}の{写真|しゃしん}はどう？', pt: 'É. Então não serve. E esta da montanha?' },
          { speaker: 'M', ja: 'うん、これ、いいね。', pt: 'Essa está boa.' },
          { speaker: 'F', ja: 'じゃ、これ 1{枚|まい}。もう 1{枚|まい}は、この、{私|わたし}の{部屋|へや}の{写真|しゃしん}は？', pt: 'Então essa, uma. A outra: esta do meu quarto?' },
          { speaker: 'M', ja: '{部屋|へや}があまり きれいじゃないから やめたほうがいいよ。それより、{大学|だいがく}の{前|まえ}でとった{写真|しゃしん}がいいよ。', pt: 'O quarto não está muito arrumado, melhor não. Em vez disso, aquela tirada em frente à universidade.' },
          { speaker: 'F', ja: 'そうだね。この 2{枚|まい}にしよう。', pt: 'Tem razão. Vou com essas duas.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、どの{写真|しゃしん}を{送|おく}りますか。', answer: 4 },
        { label: '5番', setupJa: '{男|おとこ}の{留学生|りゅうがくせい}と{女|おんな}の{人|ひと}が{話|はな}しています。{男|おとこ}の{留学生|りゅうがくせい}は、{何|なに}を{持|も}っていきますか。', setupPt: 'Um estudante estrangeiro e uma mulher conversam. O que ele vai levar (visita ao hospital)?', lines: [
          { speaker: 'M', ja: '{友達|ともだち}がけがをして、{入院|にゅういん}しているんです。お{見舞|みま}いに{行|い}きたいんですが、{日本|にほん}では{何|なに}を{持|も}っていきますか。', pt: 'Um amigo se machucou e está internado. Quero visitá-lo; no Japão o que se costuma levar?' },
          { speaker: 'F', ja: 'そうですね。よく{花|はな}や{果物|くだもの}を{持|も}っていきます。{病院|びょういん}では{時間|じかん}が たくさん あるから、{本|ほん}もいいと{思|おも}いますよ。', pt: 'Bem, costuma-se levar flores ou frutas. No hospital há muito tempo livre, então livro também é bom.' },
          { speaker: 'M', ja: 'ああ、いいですね。{本|ほん}{読|よ}むのが{好|す}きだから、そうします。', pt: 'Ah, boa. Ele gosta de ler, então vou levar.' },
          { speaker: 'F', ja: 'あ、それから、{若|わか}い{人|ひと}なら{音楽|おんがく}のＣＤもいいと{思|おも}いますよ。', pt: 'Ah, e para gente jovem, um CD de música também é bom.' },
          { speaker: 'M', ja: 'うーん、でも、{音楽|おんがく}は あまり{聴|き}きませんから。', pt: 'Hmm, mas ele não ouve muita música.' },
        ], questionJa: '{男|おとこ}の{留学生|りゅうがくせい}は、{何|なに}を{持|も}っていきますか。', answer: 3 },
        { label: '6番', setupJa: '{会社|かいしゃ}で{男|おとこ}の{人|ひと}と{女|おんな}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は{今日|きょう}、このあと{何|なに}をしますか。', setupPt: 'Na empresa. O que a mulher fará hoje em seguida?', lines: [
          { speaker: 'M', ja: 'ちょっと、いい？{今|いま}{部長|ぶちょう}から{電話|でんわ}があって、{資料|しりょう}のコピーを{頼|たの}まれたんだ。お{願|ねが}いしてもいい？', pt: 'Posso? O chefe ligou agora e pediu cópias do material. Pode fazer?' },
          { speaker: 'F', ja: '{分|わ}かりました。{明日|あした}の{会議|かいぎ}の{資料|しりょう}ですね。', pt: 'Certo. É o material da reunião de amanhã, né?' },
          { speaker: 'M', ja: 'うん。それから、{会議室|かいぎしつ}の{準備|じゅんび}だけど、いすを{並|なら}べておいてくれる？', pt: 'Sim. E sobre a preparação da sala de reunião: pode arrumar as cadeiras?' },
          { speaker: 'F', ja: 'はい。でも、{会議室|かいぎしつ}は{今|いま}、{使|つか}っています。', pt: 'Sim. Mas a sala está em uso agora.' },
          { speaker: 'M', ja: 'そうか。じゃあ、それは{明日|あした}だね。', pt: 'Ah. Então isso fica para amanhã.' },
        ], questionJa: '{女|おんな}の{人|ひと}は{今日|きょう}、このあと{何|なに}をしますか。', answer: 2 },
        { label: '7番', setupJa: '{教室|きょうしつ}で、{先生|せんせい}が{話|はな}しています。{学生|がくせい}は{明日|あした}、{何時|なんじ}にどこに{集|あつ}まらなければ なりませんか。', setupPt: 'Na sala, o professor fala. A que horas e onde os alunos se reúnem amanhã?', lines: [
          { speaker: 'M', ja: 'えー、これから、{明日|あした}のバス{旅行|りょこう}について{連絡|れんらく}します。{明日|あした}は、{朝|あさ}8{時半|じはん}までに{来|き}てください。いつもは 9{時|じ}からですが、30{分|ぷん}{早|はや}いので、{間違|まちが}えないでくださいね。{学校|がっこう}の{体育館|たいいくかん}の{前|まえ}に{集|あつ}まってください。いいですか。{教室|きょうしつ}じゃなくて、{体育館|たいいくかん}の{前|まえ}ですよ。', pt: 'Aviso sobre a excursão de ônibus de amanhã: cheguem até as 8h30. Normalmente é às 9h, mas é 30 min mais cedo, então não se confundam. Reúnam-se em frente ao ginásio da escola. Entenderam? Não é na sala, é em frente ao ginásio.' },
        ], questionJa: '{学生|がくせい}は{明日|あした}、{何時|なんじ}にどこに{集|あつ}まりますか。', answer: 2 },
        { label: '8番', setupJa: '{図書館|としょかん}で{男|おとこ}の{人|ひと}と{係|かか}りの{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}はこのあと どのボタンを{押|お}しますか。', setupPt: 'Na biblioteca, um homem fala com a funcionária. Que botão ele aperta em seguida?', lines: [
          { speaker: 'M', ja: 'すみません。ちょっと、コピーの{仕方|しかた}を{教|おし}えてもらえませんか。{青|あお}いボタンを{押|お}したんですが、{字|じ}が{小|ちい}さくなってしまったんです。', pt: 'Com licença, pode me ensinar a copiar? Apertei o botão azul, mas a letra ficou pequena.' },
          { speaker: 'F', ja: '{字|じ}を{大|おお}きくするなら、{赤|あか}いボタンを{押|お}してください。', pt: 'Para aumentar a letra, aperte o botão vermelho.' },
          { speaker: 'M', ja: 'あ、はい。それから、もう{少|すこ}し{濃|こ}くしたいんです。', pt: 'Ah, sim. E queria deixar um pouco mais escuro.' },
          { speaker: 'F', ja: 'じゃあ、{黄色|きいろ}いボタンを{押|お}してください。{薄|うす}くするときは、{白|しろ}いボタンです。', pt: 'Então aperte o botão amarelo. Para clarear, é o branco.' },
          { speaker: 'M', ja: 'そうですか。どうもありがとうございます。', pt: 'Entendi. Muito obrigado.' },
        ], questionJa: '{男|おとこ}の{人|ひと}はこのあと、{字|じ}を{大|おお}きくする どのボタンを{押|お}しますか。', answer: 1 },
      ],
    },
    {
      id: 'n4-2012-listening-q2',
      title: 'もんだい２ — Compreensão de ponto-chave',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e escolha a informação específica pedida. (7 itens + exemplo)',
      src: '/audio/N4-2012/N4Q2.mp3',
      script: [
        { label: '例', setupJa: '{女|おんな}の{人|ひと}と{男|おとこ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は、どうして{引|ひ}っ{越|こ}しを しますか。', setupPt: 'Conversam. Por que a mulher vai se mudar?', lines: [
          { speaker: 'F', ja: '{来週|らいしゅう}の{日曜日|にちようび}、{引|ひ}っ{越|こ}しを{手伝|てつだ}ってくれない？', pt: 'Pode me ajudar na mudança domingo que vem?' },
          { speaker: 'M', ja: 'いいけど、また{引|ひ}っ{越|こ}すんだね。{部屋|へや}が{狭|せま}いの？', pt: 'Claro, mas vai se mudar de novo? O quarto é apertado?' },
          { speaker: 'F', ja: 'ううん。{部屋|へや}の{大|おお}きさも{場所|ばしょ}も{問題|もんだい}ないんだけど、{建物|たてもの}が{古|ふる}くて{嫌|いや}なんだ。{最近|さいきん}、{近所|きんじょ}の{人|ひと}と{友達|ともだち}になったから、{残念|ざんねん}なんだけど。', pt: 'Não. Tamanho e localização não são problema, mas o prédio é velho e não gosto. Pena que virei amiga dos vizinhos há pouco.' },
          { speaker: 'M', ja: 'そうなんだ。', pt: 'Ah, entendi.' },
        ], questionJa: '{女|おんな}の{人|ひと}は、どうして{引|ひ}っ{越|こ}しを しますか。', answer: 3 },
        { label: '1番', setupJa: '{男|おとこ}の{学生|がくせい}と{女|おんな}の{学生|がくせい}が{話|はな}しています。{女|おんな}の{学生|がくせい}は、だれと{住|す}んでいますか。', setupPt: 'Conversam. Com quem a estudante mora?', lines: [
          { speaker: 'M', ja: '{山田|やまだ}さん、{新|あたら}しい{生活|せいかつ}はどう？', pt: 'Yamada, como está a vida nova?' },
          { speaker: 'F', ja: 'はい、{毎日|まいにち}{楽|たの}しいです。', pt: 'Está divertida todos os dias.' },
          { speaker: 'M', ja: 'ご{両親|りょうしん}と{一緒|いっしょ}じゃなくて、{寂|さび}しくない？', pt: 'Não fica solitária longe dos seus pais?' },
          { speaker: 'F', ja: 'ええ、{少|すこ}し。でも、{弟|おとうと}と{一緒|いっしょ}に{住|す}んでいるので、{大丈夫|だいじょうぶ}です。', pt: 'Um pouco. Mas moro com meu irmão mais novo, então tudo bem.' },
          { speaker: 'M', ja: 'そうなんだ。{兄弟|きょうだい}は{弟|おとうと}さん{一人|ひとり}？', pt: 'Ah. Seu único irmão é ele?' },
          { speaker: 'F', ja: '{姉|あね}もいます。{姉|あね}は{両親|りょうしん}と{一緒|いっしょ}に{住|す}んでいます。', pt: 'Tenho uma irmã mais velha também. Ela mora com nossos pais.' },
        ], questionJa: '{女|おんな}の{学生|がくせい}は、だれと{住|す}んでいますか。', answer: 4 },
        { label: '2番', setupJa: '{大学|だいがく}で、{女|おんな}の{学生|がくせい}が{男|おとこ}の{学生|がくせい}と{話|はな}しています。{女|おんな}の{学生|がくせい}は、いつ、{男|おとこ}の{学生|がくせい}に{相談|そうだん}しますか。', setupPt: 'Na faculdade. Quando ela vai se aconselhar com o veterano?', lines: [
          { speaker: 'F', ja: '{先輩|せんぱい}、{相談|そうだん}したいことが あるんですが、{今|いま}、いいですか。', pt: 'Veterano, queria conversar sobre uma coisa; tem tempo agora?' },
          { speaker: 'M', ja: 'ごめん。{今|いま}から{授業|じゅぎょう}が あるんだ。', pt: 'Desculpa, tenho aula agora.' },
          { speaker: 'F', ja: 'そうですか。じゃ、{今日|きょう}の{夕方|ゆうがた}はどうですか。', pt: 'Ah. Então e hoje no fim da tarde?' },
          { speaker: 'M', ja: '6{時|じ}から{約束|やくそく}があるけど、4{時|じ}{頃|ごろ}なら{大丈夫|だいじょうぶ}だよ。', pt: 'Tenho compromisso às 18h, mas por volta das 16h tudo bem.' },
          { speaker: 'F', ja: '4{時|じ}ですね。', pt: 'Às 16h, então.' },
          { speaker: 'M', ja: 'あ、{明日|あした}の{昼|ひる}でもいいよ。', pt: 'Ah, amanhã de tarde também pode.' },
          { speaker: 'F', ja: 'すみません。{明日|あした}は{用事|ようじ}が あるんです。', pt: 'Desculpe, amanhã tenho compromisso.' },
          { speaker: 'M', ja: 'そう。じゃあ、やっぱり{今日|きょう}にしよう。', pt: 'Tá. Então fica para hoje mesmo.' },
        ], questionJa: '{女|おんな}の{学生|がくせい}は、いつ{相談|そうだん}しますか。', answer: 2 },
        { label: '3番', setupJa: '{学校|がっこう}で、{男|おとこ}の{先生|せんせい}と{女|おんな}の{留学生|りゅうがくせい}が{話|はな}しています。{女|おんな}の{留学生|りゅうがくせい}は、どうしてアルバイトが したいですか。', setupPt: 'Por que a estudante estrangeira quer fazer um trabalho de meio período?', lines: [
          { speaker: 'M', ja: 'もうすぐ{冬休|ふゆやす}みですね。どこかへ{旅行|りょこう}に{行|い}きますか。', pt: 'Logo são as férias de inverno. Vai viajar para algum lugar?' },
          { speaker: 'F', ja: 'いいえ。{冬休|ふゆやす}みは、デパートでアルバイトを するつもりです。', pt: 'Não. Nas férias pretendo trabalhar numa loja de departamentos.' },
          { speaker: 'M', ja: 'あ、そうですか。', pt: 'Ah, é?' },
          { speaker: 'F', ja: '{日本人|にほんじん}の{働|はたら}き{方|かた}が{知|し}りたいんです。', pt: 'É que quero conhecer o jeito de trabalhar dos japoneses.' },
          { speaker: 'M', ja: 'いい{経験|けいけん}に なりますね。{日本語|にほんご}も{上手|じょうず}に なると{思|おも}いますよ。', pt: 'Vai ser uma boa experiência. E seu japonês deve melhorar.' },
        ], questionJa: '{女|おんな}の{留学生|りゅうがくせい}は、どうしてアルバイトが したいですか。', answer: 3 },
        { label: '4番', setupJa: '{天気予報|てんきよほう}を{聞|き}いています。{何曜日|なんようび}に、{一日中|いちにちじゅう}{雨|あめ}が{降|ふ}ると{言|い}っていますか。', setupPt: 'Previsão do tempo. Em que dia vai chover o dia todo?', lines: [
          { speaker: 'M', ja: '{東京|とうきょう}の{月曜日|げつようび}から 1{週間|しゅうかん}の{天気予報|てんきよほう}です。{月曜日|げつようび}と{火曜日|かようび}は{晴|は}れるでしょう。{水曜日|すいようび}は、{午前中|ごぜんちゅう}は{晴|は}れますが、{午後|ごご}から{曇|くも}って、{夜|よる}には{雨|あめ}になるでしょう。{木曜日|もくようび}は{一日|いちにち}ずっと{雨|あめ}に なるでしょう。{金曜日|きんようび}と{土日|どにち}は{晴|は}れて、いい{天気|てんき}に なるでしょう。', pt: 'Previsão de Tóquio para a semana. Segunda e terça, sol. Quarta, sol de manhã, nublado à tarde e chuva à noite. Quinta, chuva o dia inteiro. Sexta e fim de semana, sol e tempo bom.' },
        ], questionJa: '{何曜日|なんようび}に、{一日中|いちにちじゅう}{雨|あめ}が{降|ふ}りますか。', answer: 3 },
        { label: '5番', setupJa: '{女|おんな}の{人|ひと}と{男|おとこ}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}は、{最近|さいきん}、どのぐらい{本|ほん}を{読|よ}んでいますか。', setupPt: 'Conversam. Quanto o homem tem lido ultimamente?', lines: [
          { speaker: 'F', ja: '{山田|やまだ}さんは、よく{本|ほん}を{読|よ}みますか。', pt: 'Yamada, você lê bastante?' },
          { speaker: 'M', ja: 'うーん、{子供|こども}のときは{月|つき}に 10{冊|さつ}{以上|いじょう}{読|よ}んでいましたが、{最近|さいきん}は{全然|ぜんぜん}{読|よ}んでいませんね。', pt: 'Hmm, quando criança lia mais de 10 por mês, mas ultimamente não leio nada.' },
          { speaker: 'F', ja: 'そうですか。', pt: 'Ah, é?' },
          { speaker: 'M', ja: 'ええ、{仕事|しごと}が{忙|いそが}しいんです。{田中|たなか}さんはどうですか。', pt: 'É que o trabalho está corrido. E você, Tanaka?' },
          { speaker: 'F', ja: '{最近|さいきん}は、{専門|せんもん}の{本|ほん}を{月|つき}に 3{冊|さつ}ぐらい{読|よ}んでいます。', pt: 'Ultimamente leio uns 3 livros da minha área por mês.' },
          { speaker: 'M', ja: 'そうですか。{私|わたし}も{月|つき}に 1{冊|さつ}ぐらいは{読|よ}みたいんですが。', pt: 'Que bom. Eu queria ler ao menos 1 por mês...' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{最近|さいきん}、どのぐらい{本|ほん}を{読|よ}んでいますか。', answer: 1 },
        { label: '6番', setupJa: '{男|おとこ}の{学生|がくせい}と{女|おんな}の{学生|がくせい}が{話|はな}しています。{女|おんな}の{学生|がくせい}は、{子供|こども}のとき、{何|なに}に なりたかったですか。', setupPt: 'Conversam. O que a estudante queria ser quando criança?', lines: [
          { speaker: 'M', ja: '{田中|たなか}さんは、{将来|しょうらい}、どんな{仕事|しごと}が したいですか。', pt: 'Tanaka, que profissão quer ter no futuro?' },
          { speaker: 'F', ja: '{将来|しょうらい}は、{小学校|しょうがっこう}の{先生|せんせい}に なりたいです。', pt: 'Quero ser professora de escola primária.' },
          { speaker: 'M', ja: '{先生|せんせい}ですか。{子供|こども}のときからですか。', pt: 'Professora? Desde criança?' },
          { speaker: 'F', ja: '{子供|こども}のときは、ピアニストに なりたかったんです。', pt: 'Quando criança, eu queria ser pianista.' },
          { speaker: 'M', ja: '{音楽|おんがく}が{好|す}きだったんですね。{私|わたし}は{子供|こども}のとき、{警察官|けいさつかん}に なるのが{夢|ゆめ}でした。', pt: 'Gostava de música, né. Eu, quando criança, sonhava em ser policial.' },
          { speaker: 'F', ja: '{警察官|けいさつかん}ですか。', pt: 'Policial?' },
          { speaker: 'M', ja: 'でも、{最近|さいきん}は、{看護師|かんごし}に なりたいんです。', pt: 'Mas agora quero ser enfermeiro.' },
        ], questionJa: '{女|おんな}の{学生|がくせい}は、{子供|こども}のとき、{何|なに}に なりたかったですか。', answer: 2 },
        { label: '7番', setupJa: '{港|みなと}で、{船|ふね}の{案内|あんない}を{聞|き}いています。{次|つぎ}の{船|ふね}は、{何時|なんじ}に{出発|しゅっぱつ}しますか。', setupPt: 'No porto, ouvindo o aviso do barco. A que horas parte o próximo barco?', lines: [
          { speaker: 'F', ja: '{皆様|みなさま}、もうすぐ、{次|つぎ}の{船|ふね}が{出発|しゅっぱつ}します。{船|ふね}は、{近|ちか}くの{島|しま}を 30{分|ぷん}で{回|まわ}ります。{海|うみ}からの{美|うつく}しい{景色|けしき}を{楽|たの}しむことができます。{出発|しゅっぱつ}は 10{時|じ}20{分|ぷん}の{予定|よてい}です。{出発|しゅっぱつ}まで 10{分|ぷん}です。チケットは{船|ふね}の{中|なか}で{買|か}うことができます。{皆様|みなさま}、{乗|の}ってみませんか。', pt: 'Senhores, logo parte o próximo barco. Ele dá a volta na ilha próxima em 30 min, com bela vista do mar. A partida está prevista para as 10h20 — faltam 10 minutos. Os bilhetes podem ser comprados no barco. Não querem embarcar?' },
        ], questionJa: '{次|つぎ}の{船|ふね}は、{何時|なんじ}に{出発|しゅっぱつ}しますか。', answer: 3 },
      ],
    },
    {
      id: 'n4-2012-listening-q3',
      title: 'もんだい３ — Expressões em situação',
      descriptionPt: 'Olhe a cena e escolha o que a pessoa deve dizer. (5 itens + exemplo, 3 opções lidas no áudio)',
      src: '/audio/N4-2012/N4Q3.mp3',
      script: [
        { label: '例', setupJa: 'レストランでお{店|みせ}の{人|ひと}を{呼|よ}びます。{何|なん}と{言|い}いますか。', setupPt: 'No restaurante, você chama o atendente. O que diz?', lines: [
          { speaker: '1', ja: 'いらっしゃいませ。', pt: '1. Bem-vindo. (é o atendente)' },
          { speaker: '2', ja: '{失礼|しつれい}しました。', pt: '2. Desculpe o incômodo.' },
          { speaker: '3', ja: 'すみません。', pt: '3. Com licença! (chamando)' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 3 },
        { label: '1番', setupJa: 'お{土産|みやげ}を{買|か}いました。{先輩|せんぱい}にあげます。{何|なん}と{言|い}いますか。', setupPt: 'Você comprou uma lembrança e vai dá-la ao veterano. O que diz?', lines: [
          { speaker: '1', ja: 'これ、お{土産|みやげ}です。どうぞ。', pt: '1. Aqui, uma lembrança. Aceite, por favor.' },
          { speaker: '2', ja: 'お{土産|みやげ}、{頂|いただ}きます。', pt: '2. Aceito a lembrança. (recebendo)' },
          { speaker: '3', ja: 'お{土産|みやげ}を{買|か}っておきます。', pt: '3. Vou comprar uma lembrança (de antemão).' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 1 },
        { label: '2番', setupJa: '{明日|あした}、{二人|ふたり}で{映画|えいが}に{行|い}きたいです。{何|なん}と{言|い}いますか。', setupPt: 'Você quer ir ao cinema com a pessoa amanhã. O que diz?', lines: [
          { speaker: '1', ja: '{明日|あした}、{映画|えいが}に{誘|さそ}いましょう。', pt: '1. Vamos convidar (alguém) para o cinema amanhã.' },
          { speaker: '2', ja: '{明日|あした}、{映画|えいが}を{見|み}に{行|い}きませんか。', pt: '2. Amanhã, não quer ir ver um filme (comigo)?' },
          { speaker: '3', ja: '{明日|あした}、{映画|えいが}に{行|い}きたいそうですよ。', pt: '3. Dizem que ele quer ir ao cinema amanhã.' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 2 },
        { label: '3番', setupJa: '{黒板|こくばん}の{字|じ}が{小|ちい}さくて、{読|よ}めません。{先生|せんせい}に{何|なん}と{言|い}いますか。', setupPt: 'A letra no quadro está pequena e você não consegue ler. O que diz ao professor?', lines: [
          { speaker: '1', ja: 'すいません、よく{見|み}えません。', pt: '1. Desculpe, não dá para ver bem.' },
          { speaker: '2', ja: 'すいません、{読|よ}んでもいいですか。', pt: '2. Desculpe, posso ler?' },
          { speaker: '3', ja: 'すいません、{書|か}きましょうか。', pt: '3. Desculpe, quer que eu escreva?' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 1 },
        { label: '4番', setupJa: '{先生|せんせい}に{今|いま}、{相談|そうだん}したいです。{何|なん}と{言|い}いますか。', setupPt: 'Você quer falar com o professor agora. O que diz?', lines: [
          { speaker: '1', ja: 'あのう、いつでしょうか。', pt: '1. Hum, quando seria?' },
          { speaker: '2', ja: 'ちょっと よろしいでしょうか。', pt: '2. Tem um minutinho? (posso falar?)' },
          { speaker: '3', ja: '{相談|そうだん}してくださいませんか。', pt: '3. Poderia se aconselhar (comigo)? (errado aqui)' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 2 },
        { label: '5番', setupJa: '{友達|ともだち}のペンを{借|か}りたいです。{何|なん}と{言|い}いますか。', setupPt: 'Você quer pegar emprestada a caneta do amigo. O que diz?', lines: [
          { speaker: '1', ja: 'ペン、{貸|か}してもらえる？', pt: '1. Pode me emprestar a caneta?' },
          { speaker: '2', ja: 'ペン、{取|と}ってあげる。', pt: '2. Eu pego a caneta para você.' },
          { speaker: '3', ja: 'ペン、{使|つか}ってくれる？', pt: '3. Você usa a caneta para mim? (sem sentido aqui)' },
        ], questionJa: '{何|なん}と{言|い}いますか。', answer: 1 },
      ],
    },
    {
      id: 'n4-2012-listening-q4',
      title: 'もんだい４ — Resposta rápida',
      descriptionPt: 'Ouça a fala e escolha a resposta mais natural. (8 itens + exemplo, 3 opções)',
      src: '/audio/N4-2012/N4Q4.mp3',
      script: [
        { label: '例', setupJa: 'ジュース{買|か}いに{行|い}きますけど、{何|なに}か{買|か}ってきましょうか。', setupPt: 'Vou comprar suco; quer que eu traga algo?', lines: [
          { speaker: '1', ja: 'ええ、いいですよ。', pt: '1. Sim, tudo bem.' },
          { speaker: '2', ja: 'そうですか。おいしそうですね。', pt: '2. Ah é? Parece gostoso.' },
          { speaker: '3', ja: 'あ、コーヒー、お{願|ねが}いします。', pt: '3. Ah, um café, por favor.' },
        ], questionJa: 'どれが いいですか。', answer: 3 },
        { label: '1番', setupJa: 'どこに{行|い}くんですか。', setupPt: 'Aonde você vai?', lines: [
          { speaker: '1', ja: 'いってらっしゃい。', pt: '1. Vá com cuidado. (quem fica diz)' },
          { speaker: '2', ja: 'ちょっと{食事|しょくじ}に{行|い}ってきます。', pt: '2. Vou ali comer rapidinho.' },
          { speaker: '3', ja: '{気|き}をつけてください。', pt: '3. Tome cuidado.' },
        ], questionJa: 'どれが いいですか。', answer: 2 },
        { label: '2番', setupJa: 'ねえ、{京都|きょうと}、{行|い}ったことある？', setupPt: 'Ei, você já foi a Kyoto?', lines: [
          { speaker: '1', ja: '{行|い}かなかったよ。', pt: '1. Não fui.' },
          { speaker: '2', ja: 'そう、{行|い}ったんだ。', pt: '2. Ah, então você foi.' },
          { speaker: '3', ja: 'うん、1{回|かい}あるよ。', pt: '3. Sim, uma vez.' },
        ], questionJa: 'どれが いいですか。', answer: 3 },
        { label: '3番', setupJa: 'どうして{昨日|きのう}、{授業|じゅぎょう}を{休|やす}んだんですか。', setupPt: 'Por que você faltou à aula ontem?', lines: [
          { speaker: '1', ja: '{休|やす}むかもしれません。', pt: '1. Talvez eu falte.' },
          { speaker: '2', ja: '{風邪|かぜ}をひいてしまいました。', pt: '2. É que peguei um resfriado.' },
          { speaker: '3', ja: 'ゆっくり{休|やす}んでください。', pt: '3. Descanse bem.' },
        ], questionJa: 'どれが いいですか。', answer: 2 },
        { label: '4番', setupJa: '{夏休|なつやす}みに{国|くに}へ{帰|かえ}ったら、{何|なに}をしますか。', setupPt: 'Quando voltar ao seu país nas férias, o que vai fazer?', lines: [
          { speaker: '1', ja: '{友達|ともだち}に{会|あ}うつもりです。', pt: '1. Pretendo encontrar meus amigos.' },
          { speaker: '2', ja: '{母|はは}に{会|あ}いました。', pt: '2. Encontrei minha mãe.' },
          { speaker: '3', ja: '{来月|らいげつ}にします。', pt: '3. Deixo para o mês que vem.' },
        ], questionJa: 'どれが いいですか。', answer: 1 },
        { label: '5番', setupJa: '{学校|がっこう}を{休|やす}むときは{電話|でんわ}してください。', setupPt: 'Quando faltar à escola, ligue, por favor.', lines: [
          { speaker: '1', ja: 'いつ{休|やす}むんですか。', pt: '1. Quando você vai faltar?' },
          { speaker: '2', ja: 'はい、{連絡|れんらく}します。', pt: '2. Sim, vou avisar.' },
          { speaker: '3', ja: '{電話|でんわ}を{待|ま}っています。', pt: '3. Estou esperando sua ligação.' },
        ], questionJa: 'どれが いいですか。', answer: 2 },
        { label: '6番', setupJa: 'あのう、その{本|ほん}を{取|と}ってくれませんか。', setupPt: 'Com licença, pode me passar aquele livro?', lines: [
          { speaker: '1', ja: 'ありがとう。', pt: '1. Obrigado.' },
          { speaker: '2', ja: 'もらいましたよ。', pt: '2. Eu recebi.' },
          { speaker: '3', ja: 'え、どれですか。', pt: '3. Ah, qual deles?' },
        ], questionJa: 'どれが いいですか。', answer: 3 },
        { label: '7番', setupJa: 'ジョンさん、{日本語|にほんご}が{話|はな}せますか。', setupPt: 'John, você consegue falar japonês?', lines: [
          { speaker: '1', ja: '{勉強|べんきょう}してください。', pt: '1. Estude, por favor.' },
          { speaker: '2', ja: '{分|わ}かりました。', pt: '2. Entendi.' },
          { speaker: '3', ja: '{少|すこ}しなら できます。', pt: '3. Um pouco, sim.' },
        ], questionJa: 'どれが いいですか。', answer: 3 },
        { label: '8番', setupJa: 'あ、{田中|たなか}さん、{黒板|こくばん}を{消|け}しておいてくれませんか。', setupPt: 'Ah, Tanaka, pode apagar o quadro (para depois)?', lines: [
          { speaker: '1', ja: 'はい、すぐにやります。', pt: '1. Sim, faço já.' },
          { speaker: '2', ja: 'きれいになりましたね。', pt: '2. Ficou limpo, né.' },
          { speaker: '3', ja: 'ここに{置|お}きましょう。', pt: '3. Vamos deixar aqui.' },
        ], questionJa: 'どれが いいですか。', answer: 1 },
      ],
    },
  ],
}

export const n4_2012: Level = {
  id: 'N4-2012',
  courseId: 'jlpt',
  titlePt: 'N4 — Simulado 2012',
  descriptionPt:
    'Segunda leva de prática do N4: simulado completo a partir do Official Practice Workbook 2012 do JLPT (Japan Foundation), com gabarito oficial, explicações em pt-BR e áudio oficial na audição.',
  sections: [vocabulary, grammar, reading, listening],
}
