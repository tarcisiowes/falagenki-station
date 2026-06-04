import type { Level, Section } from './types'

// =====================================================================
//  N5 — Conteúdo fiel ao material oficial de exemplo do JLPT N5
//  Respostas conferidas pelo gabarito oficial (正答表).
// =====================================================================

const vocabulary: Section = {
  id: 'vocabulary',
  level: 'N5',
  titleJa: 'げんごちしき（もじ・ごい）',
  titlePt: 'Vocabulário e Escrita',
  summaryPt:
    'Conhecimento da língua: leitura de kanji, escrita correta (kanji/katakana), escolha da palavra certa e frases de sentido equivalente. 35 questões, 25 minutos no exame.',
  studyNotes: [
    {
      title: 'O que cai nesta parte',
      bodyPt:
        'Esta seção (もじ・ごい = caracteres e vocabulário) tem quatro tipos de questão:\n\n- **もんだい1** — você lê uma palavra escrita em **kanji** e escolhe a **leitura em hiragana**.\n- **もんだい2** — você vê uma palavra em **hiragana** e escolhe como ela se escreve em **kanji ou katakana**.\n- **もんだい3** — preencher a lacuna `（　）` com a **palavra de vocabulário** mais adequada.\n- **もんだい4** — escolher a frase com **sentido parecido** à frase dada.',
    },
    {
      title: 'Dicas de leitura (kanji do N5)',
      bodyPt:
        'Muitos kanji têm leituras diferentes conforme a palavra. Exemplos que aparecem aqui:\n\n| Kanji | Leitura | Significado |\n|---|---|---|\n| 雨 | あめ | chuva |\n| 中 | なか | dentro/meio |\n| 火（よう日） | か | terça (dia de fogo) |\n| 空 | そら | céu |\n| 魚 | さかな | peixe |\n| 半分 | はんぶん | metade |\n| 間 | あいだ | entre/intervalo |\n\nObserve as **leituras alteradas por dakuten** (ひゃく → びゃく, ぶん → ふん) — são pegadinhas comuns.',
    },
    {
      title: 'Katakana — empréstimos do inglês',
      bodyPt:
        'Palavras estrangeiras vão em **katakana**. Cuidado com ソ/ツ e シ/ン, que confundem:\n\n- `ワイシャツ` (white shirt = camisa social) — não `ワイシャソ`.\n- `プール` (pool = piscina), `エレベーター`, `テーブル`, `カメラ`.',
    },
  ],
  groups: [
    {
      id: 'n5-vocab-m1',
      title: 'もんだい１',
      subtitlePt: 'Leitura de kanji (escolha a leitura em hiragana)',
      instructionJa: 'の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'Como se lê a palavra destacada em hiragana? Escolha a melhor entre 1, 2, 3 e 4.',
      example: {
        prompt: 'しゃしんは かばんの [[下]]に ありました。',
        choices: [
          { n: 1, text: 'ちだ' },
          { n: 2, text: 'しだ' },
          { n: 3, text: 'ちた' },
          { n: 4, text: 'した' },
        ],
        answer: 4,
        note: '下（した）= embaixo. A foto estava embaixo da bolsa.',
      },
      questions: [
        { id: 'n5-vocab-1', number: 1, prompt: 'あしたは [[雨]]ですか。', choices: [{ n: 1, text: 'ゆき' }, { n: 2, text: 'はれ' }, { n: 3, text: 'くもり' }, { n: 4, text: 'あめ' }], answer: 4, translationPt: 'Amanhã vai ter chuva?', explanationPt: '雨 = あめ (chuva). ゆき=neve, はれ=tempo bom, くもり=nublado.' },
        { id: 'n5-vocab-2', number: 2, prompt: 'きょうしつで [[書いて]] ください。', choices: [{ n: 1, text: 'かいて' }, { n: 2, text: 'きいて' }, { n: 3, text: 'はいて' }, { n: 4, text: 'ひいて' }], answer: 1, translationPt: 'Escreva na sala de aula, por favor.', explanationPt: '書く = かく (escrever); na te-form, 書いて = かいて.' },
        { id: 'n5-vocab-3', number: 3, prompt: 'しゃしんは はこの [[中]]に あります。', choices: [{ n: 1, text: 'そば' }, { n: 2, text: 'そと' }, { n: 3, text: 'なか' }, { n: 4, text: 'よこ' }], answer: 3, translationPt: 'A foto está dentro da caixa.', explanationPt: '中 = なか (dentro). そと=fora, そば=ao lado, よこ=ao lado/horizontal.' },
        { id: 'n5-vocab-4', number: 4, prompt: 'この いすは [[小さい]]です。', choices: [{ n: 1, text: 'ちいさい' }, { n: 2, text: 'ちさい' }, { n: 3, text: 'しいさい' }, { n: 4, text: 'しさい' }], answer: 1, translationPt: 'Esta cadeira é pequena.', explanationPt: '小さい = ちいさい (pequeno). Atenção ao い longo: ちい, não ち.' },
        { id: 'n5-vocab-5', number: 5, prompt: 'あしたは [[火よう日]]です。', choices: [{ n: 1, text: 'どようび' }, { n: 2, text: 'すいようび' }, { n: 3, text: 'かようび' }, { n: 4, text: 'にちようび' }], answer: 3, translationPt: 'Amanhã é terça-feira.', explanationPt: '火よう日 = かようび (terça). 火=か aqui. ど=sábado, すい=quarta, にち=domingo.' },
        { id: 'n5-vocab-6', number: 6, prompt: 'きれいな [[空]]ですね。', choices: [{ n: 1, text: 'いえ' }, { n: 2, text: 'うみ' }, { n: 3, text: 'にわ' }, { n: 4, text: 'そら' }], answer: 4, translationPt: 'Que céu bonito, né?', explanationPt: '空 = そら (céu). いえ=casa, うみ=mar, にわ=jardim/quintal.' },
        { id: 'n5-vocab-7', number: 7, prompt: 'せいとは [[百人]] います。', choices: [{ n: 1, text: 'ひゃくにん' }, { n: 2, text: 'びゃくにん' }, { n: 3, text: 'ひゃくじん' }, { n: 4, text: 'びゃくじん' }], answer: 1, translationPt: 'Há cem alunos.', explanationPt: '百人 = ひゃくにん (cem pessoas). Sem dakuten (não びゃく); 人 aqui é にん.' },
        { id: 'n5-vocab-8', number: 8, prompt: '[[魚]]が たくさん いますよ。', choices: [{ n: 1, text: 'ねこ' }, { n: 2, text: 'とり' }, { n: 3, text: 'いぬ' }, { n: 4, text: 'さかな' }], answer: 4, translationPt: 'Tem muitos peixes!', explanationPt: '魚 = さかな (peixe). ねこ=gato, とり=pássaro, いぬ=cachorro.' },
        { id: 'n5-vocab-9', number: 9, prompt: 'パンを [[半分]] ともだちに あげました。', choices: [{ n: 1, text: 'はんふん' }, { n: 2, text: 'はんぶん' }, { n: 3, text: 'ほんぶん' }, { n: 4, text: 'ほんふん' }], answer: 2, translationPt: 'Dei metade do pão para um amigo.', explanationPt: '半分 = はんぶん (metade). 分 vira ぶん (com dakuten) depois de 半 はん.' },
        { id: 'n5-vocab-10', number: 10, prompt: 'ぎんこうと スーパーの [[間]]に ほそい みちが あります。', choices: [{ n: 1, text: 'あいた' }, { n: 2, text: 'となり' }, { n: 3, text: 'あいだ' }, { n: 4, text: 'どなり' }], answer: 3, translationPt: 'Entre o banco e o mercado há uma rua estreita.', explanationPt: '間 = あいだ (entre, no espaço entre dois pontos). となり=vizinho de.' },
        { id: 'n5-vocab-11', number: 11, prompt: 'たまごを [[三つ]] とって ください。', choices: [{ n: 1, text: 'いつつ' }, { n: 2, text: 'みっつ' }, { n: 3, text: 'さんつ' }, { n: 4, text: 'ごつ' }], answer: 2, translationPt: 'Pegue três ovos, por favor.', explanationPt: '三つ = みっつ (três, contagem nativa). いつつ=cinco. Não existe さんつ/ごつ.' },
        { id: 'n5-vocab-12', number: 12, prompt: 'きょうは [[元気]]が いいですね。', choices: [{ n: 1, text: 'けんき' }, { n: 2, text: 'げんき' }, { n: 3, text: 'でんき' }, { n: 4, text: 'てんき' }], answer: 2, translationPt: 'Hoje você está bem-disposto, né?', explanationPt: '元気 = げんき (saúde/ânimo). でんき=eletricidade, てんき=tempo/clima.' },
      ],
    },
    {
      id: 'n5-vocab-m2',
      title: 'もんだい２',
      subtitlePt: 'Escrita (escolha o kanji/katakana correto)',
      instructionJa: 'の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'Como se escreve a palavra destacada? Escolha a melhor entre 1, 2, 3 e 4.',
      example: {
        prompt: 'この みちは [[くるま]]が おおいです。',
        choices: [{ n: 1, text: '運' }, { n: 2, text: '里' }, { n: 3, text: '車' }, { n: 4, text: '軍' }],
        answer: 3,
        note: 'くるま = 車 (carro).',
      },
      questions: [
        { id: 'n5-vocab-13', number: 13, prompt: 'この [[わいしゃつ]]を ください。', choices: [{ n: 1, text: 'ウイシャソ' }, { n: 2, text: 'ウイシャツ' }, { n: 3, text: 'ワイシャソ' }, { n: 4, text: 'ワイシャツ' }], answer: 4, translationPt: 'Me dê esta camisa social.', explanationPt: 'ワイシャツ (camisa social). ワ (não ウ) e ツ (não ソ).' },
        { id: 'n5-vocab-14', number: 14, prompt: 'わたしの くには [[かわ]]が おおいです。', choices: [{ n: 1, text: '花' }, { n: 2, text: '山' }, { n: 3, text: '川' }, { n: 4, text: '木' }], answer: 3, translationPt: 'No meu país há muitos rios.', explanationPt: 'かわ = 川 (rio). 花=flor, 山=montanha, 木=árvore.' },
        { id: 'n5-vocab-15', number: 15, prompt: 'ヤンさんの [[がっこう]]は どこですか。', choices: [{ n: 1, text: '宇校' }, { n: 2, text: '学校' }, { n: 3, text: '宇枚' }, { n: 4, text: '学枚' }], answer: 2, translationPt: 'Onde fica a escola do Yan?', explanationPt: 'がっこう = 学校. 学 (estudar) + 校 (escola).' },
        { id: 'n5-vocab-16', number: 16, prompt: 'この ざっしを [[みて]] ください。', choices: [{ n: 1, text: '見て' }, { n: 2, text: '買て' }, { n: 3, text: '貝て' }, { n: 4, text: '目て' }], answer: 1, translationPt: 'Olhe esta revista.', explanationPt: 'みる = 見る (ver/olhar); te-form 見て.' },
        { id: 'n5-vocab-17', number: 17, prompt: 'この カメラは [[たかい]]ですね。', choices: [{ n: 1, text: '高い' }, { n: 2, text: '安い' }, { n: 3, text: '古い' }, { n: 4, text: '新い' }], answer: 1, translationPt: 'Esta câmera é cara, né?', explanationPt: 'たかい = 高い (caro/alto). 安い=barato, 古い=velho.' },
        { id: 'n5-vocab-18', number: 18, prompt: 'きのうは [[かいしゃ]]を やすみました。', choices: [{ n: 1, text: '公仕' }, { n: 2, text: '公社' }, { n: 3, text: '会仕' }, { n: 4, text: '会社' }], answer: 4, translationPt: 'Ontem faltei ao trabalho (à empresa).', explanationPt: 'かいしゃ = 会社 (empresa). 会 + 社.' },
        { id: 'n5-vocab-19', number: 19, prompt: 'まだ [[いわないで]] ください。', choices: [{ n: 1, text: '行わないで' }, { n: 2, text: '立わないで' }, { n: 3, text: '言わないで' }, { n: 4, text: '食わないで' }], answer: 3, translationPt: 'Por favor, ainda não conte.', explanationPt: 'いう = 言う (dizer); forma negativa 言わないで.' },
        { id: 'n5-vocab-20', number: 20, prompt: '[[らいげつ]] けっこんします。', choices: [{ n: 1, text: '今月' }, { n: 2, text: '来月' }, { n: 3, text: '来週' }, { n: 4, text: '今週' }], answer: 2, translationPt: 'Vou me casar no mês que vem.', explanationPt: 'らいげつ = 来月 (próximo mês). 来=que vem, 月=mês. 来週=próxima semana.' },
      ],
    },
    {
      id: 'n5-vocab-m3',
      title: 'もんだい３',
      subtitlePt: 'Vocabulário no contexto (preencha a lacuna)',
      instructionJa: '（ ）に なにが はいりますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'O que entra em （　）? Escolha a palavra mais adequada entre 1, 2, 3 e 4.',
      example: {
        prompt: 'あそこで タクシーに （　）。',
        choices: [{ n: 1, text: 'のりました' }, { n: 2, text: 'あがりました' }, { n: 3, text: 'つきました' }, { n: 4, text: 'はいりました' }],
        answer: 1,
        note: 'タクシーに のる = pegar/entrar no táxi.',
      },
      questions: [
        { id: 'n5-vocab-21', number: 21, prompt: 'わたしの へやは この アパートの ２（　）です。', choices: [{ n: 1, text: 'ほん' }, { n: 2, text: 'さつ' }, { n: 3, text: 'だい' }, { n: 4, text: 'かい' }], answer: 4, translationPt: 'Meu quarto fica no 2º andar deste prédio.', explanationPt: '〜かい = andar (2かい = 2º andar). ほん/さつ/だい são outros contadores (objetos longos/livros/máquinas).' },
        { id: 'n5-vocab-22', number: 22, prompt: 'その ナイフで りんごを （　） ください。', choices: [{ n: 1, text: 'おきて' }, { n: 2, text: 'つけて' }, { n: 3, text: 'しめて' }, { n: 4, text: 'きって' }], answer: 4, translationPt: 'Corte a maçã com essa faca.', explanationPt: 'きる = cortar → きって. Combina com ナイフ (faca).' },
        { id: 'n5-vocab-23', number: 23, prompt: '（　）を わすれましたから、じかんが わかりません。', choices: [{ n: 1, text: 'じしょ' }, { n: 2, text: 'ちず' }, { n: 3, text: 'とけい' }, { n: 4, text: 'さいふ' }], answer: 3, translationPt: 'Esqueci o relógio, então não sei as horas.', explanationPt: 'とけい = relógio. Sem ele não dá para saber as horas (じかん).' },
        { id: 'n5-vocab-24', number: 24, prompt: 'わたしの うちは えきに ちかいですから、（　）です。', choices: [{ n: 1, text: 'べんり' }, { n: 2, text: 'じょうぶ' }, { n: 3, text: 'いっぱい' }, { n: 4, text: 'へた' }], answer: 1, translationPt: 'Minha casa é perto da estação, então é conveniente.', explanationPt: 'べんり = conveniente/prático. Perto da estação → prático.' },
        { id: 'n5-vocab-25', number: 25, prompt: 'なつやすみは まいにち （　）で およぎました。', choices: [{ n: 1, text: 'レストラン' }, { n: 2, text: 'プール' }, { n: 3, text: 'エレベーター' }, { n: 4, text: 'ビル' }], answer: 2, translationPt: 'Nas férias de verão nadei todos os dias na piscina.', explanationPt: 'およぐ (nadar) acontece na プール (piscina).' },
        { id: 'n5-vocab-26', number: 26, prompt: 'しらない ことばが ありましたから、せんせいに （　）しました。', choices: [{ n: 1, text: 'しつもん' }, { n: 2, text: 'べんきょう' }, { n: 3, text: 'れんしゅう' }, { n: 4, text: 'じゅぎょう' }], answer: 1, translationPt: 'Como havia uma palavra que eu não sabia, perguntei ao professor.', explanationPt: 'しつもんする = fazer pergunta. Ao professor (せんせいに) se faz uma pergunta.' },
        { id: 'n5-vocab-27', number: 27, prompt: 'この へやは あついですから、（　）を あけましょう。', choices: [{ n: 1, text: 'おふろ' }, { n: 2, text: 'まど' }, { n: 3, text: 'エアコン' }, { n: 4, text: 'テーブル' }], answer: 2, translationPt: 'Este quarto está quente, vamos abrir a janela.', explanationPt: 'あける (abrir) combina com まど (janela). Ar-condicionado se liga (つける), não se abre.' },
        { id: 'n5-vocab-28', number: 28, prompt: 'きのうは がっこうで たくさん かんじを （　）。', choices: [{ n: 1, text: 'うりました' }, { n: 2, text: 'もちました' }, { n: 3, text: 'おぼえました' }, { n: 4, text: 'こまりました' }], answer: 3, translationPt: 'Ontem memorizei muitos kanji na escola.', explanationPt: 'おぼえる = memorizar/aprender. Combina com かんじ.' },
        { id: 'n5-vocab-29', number: 29, prompt: 'この コーヒーは、さとうを たくさん いれましたから、（　）です。', choices: [{ n: 1, text: 'わかい' }, { n: 2, text: 'くろい' }, { n: 3, text: 'まるい' }, { n: 4, text: 'あまい' }], answer: 4, translationPt: 'Pus muito açúcar neste café, então ele está doce.', explanationPt: 'さとう (açúcar) deixa o café あまい (doce).' },
        { id: 'n5-vocab-30', number: 30, prompt: 'つよい かぜが （　） います。', choices: [{ n: 1, text: 'ふいて' }, { n: 2, text: 'いそいで' }, { n: 3, text: 'とんで' }, { n: 4, text: 'はしって' }], answer: 1, translationPt: 'Está ventando forte.', explanationPt: 'かぜが ふく = o vento sopra → ふいて います. いそぐ=apressar, とぶ=voar, はしる=correr.' },
      ],
    },
    {
      id: 'n5-vocab-m4',
      title: 'もんだい４',
      subtitlePt: 'Frases de sentido equivalente',
      instructionJa: 'の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
      instructionPt: 'Existe uma frase com sentido quase igual à frase dada. Escolha a melhor entre 1, 2, 3 e 4.',
      questions: [
        { id: 'n5-vocab-31', number: 31, prompt: 'これは [[りょうしんの]] しゃしんです。', choices: [{ n: 1, text: 'これは そふと そぼの しゃしんです。' }, { n: 2, text: 'これは ちちと ははの しゃしんです。' }, { n: 3, text: 'これは あにと おとうとの しゃしんです。' }, { n: 4, text: 'これは あねと いもうとの しゃしんです。' }], answer: 2, translationPt: 'Esta é uma foto dos meus pais.', explanationPt: 'りょうしん = pais = ちち (pai) + はは (mãe). そふ/そぼ=avós, あに/おとうと=irmãos.' },
        { id: 'n5-vocab-32', number: 32, prompt: 'この ダンスは [[やさしい]]です。', choices: [{ n: 1, text: 'この ダンスは かんたんです。' }, { n: 2, text: 'この ダンスは たいへんです。' }, { n: 3, text: 'この ダンスは たのしいです。' }, { n: 4, text: 'この ダンスは つまらないです。' }], answer: 1, translationPt: 'Esta dança é fácil.', explanationPt: 'やさしい (fácil) = かんたん (simples/fácil). たいへん=difícil/penoso.' },
        { id: 'n5-vocab-33', number: 33, prompt: 'ふくを [[せんたくしました]]。', choices: [{ n: 1, text: 'ふくを ぬぎました。' }, { n: 2, text: 'ふくを わたしました。' }, { n: 3, text: 'ふくを あらいました。' }, { n: 4, text: 'ふくを きました。' }], answer: 3, translationPt: 'Lavei a roupa.', explanationPt: 'せんたくする (lavar roupa) = あらう (lavar). ぬぐ=tirar, きる=vestir.' },
        { id: 'n5-vocab-34', number: 34, prompt: 'この へやは [[くらい]]ですね。', choices: [{ n: 1, text: 'この へやは あかるいですね。' }, { n: 2, text: 'この へやは あかるくないですね。' }, { n: 3, text: 'この へやは しずかじゃ ないですね。' }, { n: 4, text: 'この へやは しずかですね。' }], answer: 2, translationPt: 'Este quarto é escuro, né?', explanationPt: 'くらい (escuro) = あかるくない (não claro). É o oposto de あかるい.' },
        { id: 'n5-vocab-35', number: 35, prompt: 'リーさんは もりさんに ペンを [[かしました]]。', choices: [{ n: 1, text: 'リーさんは もりさんに ペンを もらいました。' }, { n: 2, text: 'もりさんは リーさんに ペンを もらいました。' }, { n: 3, text: 'リーさんは もりさんに ペンを かりました。' }, { n: 4, text: 'もりさんは リーさんに ペンを かりました。' }], answer: 4, translationPt: 'O Lee emprestou uma caneta ao Mori.', explanationPt: 'かす = emprestar (dar emprestado). Se o Lee emprestou ao Mori, então o Mori かりました (pegou emprestado) do Lee.' },
      ],
    },
  ],
}

const grammar: Section = {
  id: 'grammar',
  level: 'N5',
  titleJa: 'げんごちしき（ぶんぽう）',
  titlePt: 'Gramática',
  summaryPt:
    'Conhecimento da língua (gramática): escolha de partículas e formas verbais, montagem de frases (questões com ★) e gramática dentro de um texto. Parte do bloco Gramática + Leitura (50 min).',
  studyNotes: [
    {
      title: 'Partículas essenciais do N5',
      bodyPt:
        'As partículas marcam a função das palavras na frase. As mais cobradas:\n\n| Partícula | Uso principal | Exemplo |\n|---|---|---|\n| は | tópico | `わたしは がくせいです` |\n| が | sujeito / com 会う, 好き | `田中さんに 会います` (com に) |\n| を | objeto direto; ponto de partida de sair | `家を 出ます` (saio de casa) |\n| に | destino, hora, alvo de 会う | `くにへ/に かえります` |\n| で | meio/instrumento, local de ação | `ひこうきで 帰ります` |\n| や | lista incompleta (entre outros) | `かばんや くつ` |\n| も | também | `わたしも` |\n\nDica: **〜に 会う** (encontrar alguém) usa sempre に, nunca を.',
    },
    {
      title: 'Formas verbais úteis aqui',
      bodyPt:
        '- **〜ながら** (fazer ao mesmo tempo): usa a raiz-ます. `コーヒーを 飲みながら しんぶんを 読みます` = leio o jornal tomando café.\n- **〜ませんか** (convite): `来ませんか` = não quer vir?\n- **〜じゃありませんでした** (passado negativo de na-adj/nome): `好きじゃありませんでした` = não gostava.\n- **〜てください** (pedido): `書いてください` = por favor, escreva.',
    },
    {
      title: 'Como resolver as questões com ★',
      bodyPt:
        'Na もんだい２ você reordena 4 pedaços para formar a frase correta e indica **qual pedaço fica na posição ★**. Estratégia:\n\n- Monte a frase inteira que faz sentido.\n- Conte as posições até o ★.\n\nExemplo: `あの人 / は / だれ / です` → `あの人 は だれ ★です か` — na ★ fica `です` (opção 1).',
    },
  ],
  groups: [
    {
      id: 'n5-grammar-m1',
      title: 'もんだい１',
      subtitlePt: 'Partículas e formas (preencha a lacuna)',
      instructionJa: '（ ）に 何を 入れますか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。',
      instructionPt: 'O que entra em （　）? Escolha a melhor opção entre 1, 2, 3 e 4.',
      example: {
        prompt: 'これ （　） えんぴつです。',
        choices: [{ n: 1, text: 'に' }, { n: 2, text: 'を' }, { n: 3, text: 'は' }, { n: 4, text: 'や' }],
        answer: 3,
        note: 'これは えんぴつです = Isto é um lápis. (は marca o tópico)',
      },
      questions: [
        { id: 'n5-grammar-1', number: 1, prompt: '{私|わたし}は あしたの ひこうき（　）{国|くに}へ {帰|かえ}ります。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'で' }, { n: 3, text: 'か' }, { n: 4, text: 'を' }], answer: 2, translationPt: 'Vou voltar ao meu país no avião de amanhã.', explanationPt: 'で indica o **meio de transporte**: ひこうきで = de avião.' },
        { id: 'n5-grammar-2', number: 2, prompt: '{先週|せんしゅう} デパートで かばん（　）くつなどを {買|か}いました。', choices: [{ n: 1, text: 'は' }, { n: 2, text: 'も' }, { n: 3, text: 'へ' }, { n: 4, text: 'や' }], answer: 4, translationPt: 'Semana passada comprei bolsa, sapato etc. na loja de departamentos.', explanationPt: 'や lista exemplos não exaustivos: かばんや くつなど = bolsa, sapato, entre outros.' },
        { id: 'n5-grammar-3', number: 3, prompt: '{私|わたし}は {毎朝|まいあさ} ７{時|じ}ごろ {家|いえ}（　）{出|で}ます。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'と' }, { n: 3, text: 'が' }, { n: 4, text: 'で' }], answer: 1, translationPt: 'Saio de casa por volta das 7h toda manhã.', explanationPt: '〜を 出る = sair **de** (ponto de partida). 家を 出ます = saio de casa.' },
        { id: 'n5-grammar-4', number: 4, prompt: 'きのう スーパーで {田中|たなか}さん（　）{会|あ}いました。', choices: [{ n: 1, text: 'を' }, { n: 2, text: 'の' }, { n: 3, text: 'で' }, { n: 4, text: 'に' }], answer: 4, translationPt: 'Ontem encontrei o Tanaka no mercado.', explanationPt: '〜に 会う = encontrar alguém. Sempre に, nunca を.' },
        { id: 'n5-grammar-5', number: 5, prompt: '{私|わたし}の うちの ほんだなは、きょねん {父|ちち}（　）{作|つく}りました。', choices: [{ n: 1, text: 'や' }, { n: 2, text: 'が' }, { n: 3, text: 'を' }, { n: 4, text: 'で' }], answer: 2, translationPt: 'A estante da minha casa foi o meu pai que fez ano passado.', explanationPt: 'が marca **quem** fez a ação: 父が 作りました = foi o pai quem fez.' },
        { id: 'n5-grammar-6', number: 6, prompt: '{今日|きょう} やおやで りんごを {買|か}いました。{五|いつ}つ（　）300{円|えん}でした。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'と' }, { n: 3, text: 'で' }, { n: 4, text: 'や' }], answer: 3, translationPt: 'Hoje comprei maçãs na quitanda. Cinco saíram por 300 ienes.', explanationPt: 'で indica quantidade/limite por um preço: 五つで 300円 = cinco por 300 ienes.' },
        { id: 'n5-grammar-7', number: 7, prompt: 'きのう（　）{少|すこ}し {寒|さむ}かったですが、{今日|きょう}（　）{寒|さむ}くないです。', choices: [{ n: 1, text: 'は／は' }, { n: 2, text: 'に／に' }, { n: 3, text: 'も／も' }, { n: 4, text: 'を／を' }], answer: 1, translationPt: 'Ontem fez um pouco de frio, mas hoje não está frio.', explanationPt: 'は/は marca **contraste**: ontem (sim) × hoje (não).' },
        { id: 'n5-grammar-8', number: 8, prompt: '{南町|みなみまち}は、{海|うみ}が きれい（　）、{静|しず}かです。', choices: [{ n: 1, text: 'も' }, { n: 2, text: 'や' }, { n: 3, text: 'で' }, { n: 4, text: 'と' }], answer: 3, translationPt: 'Minamimachi tem um mar bonito e é tranquila.', explanationPt: 'で é a forma-て de adjetivos-な/nomes para **ligar** duas qualidades: きれいで、静かです.' },
        { id: 'n5-grammar-9', number: 9, prompt: '{前川|まえかわ}「{林|はやし}さん、（　）に ある カメラは {林|はやし}さんのですか。」{林|はやし}「いいえ。{田中|たなか}さんのですよ。」', choices: [{ n: 1, text: 'そこ' }, { n: 2, text: 'どこ' }, { n: 3, text: 'その' }, { n: 4, text: 'どの' }], answer: 1, translationPt: '“Hayashi, a câmera que está aí é sua?” “Não, é do Tanaka.”', explanationPt: 'そこ = aí (perto do ouvinte). Antes de に precisa ser pronome de lugar (そこ), não そ+nome (その).' },
        { id: 'n5-grammar-10', number: 10, prompt: 'Ａ「{先週|せんしゅう} はじめて スキーを しました。」Ｂ「そうですか。（　）でしたか。」Ａ「とても {楽|たの}しかったです。」', choices: [{ n: 1, text: 'いくつ' }, { n: 2, text: 'いかが' }, { n: 3, text: 'どなた' }, { n: 4, text: 'どちら' }], answer: 2, translationPt: '“Esquiei pela primeira vez semana passada.” “Ah é? E como foi?” “Foi muito divertido.”', explanationPt: 'いかが = como (foi)? Pergunta sobre impressão. いくつ=quantos, どなた=quem, どちら=qual/onde.' },
        { id: 'n5-grammar-11', number: 11, prompt: '{森|もり}「ケンさん、{大学|だいがく}の じゅぎょうは {始|はじ}まりましたか。」ケン「いいえ、（　）です。{来週|らいしゅう} {始|はじ}まります。」', choices: [{ n: 1, text: 'よく' }, { n: 2, text: 'もう' }, { n: 3, text: 'ちょっと' }, { n: 4, text: 'まだ' }], answer: 4, translationPt: '“Ken, as aulas da faculdade já começaram?” “Não, ainda não. Começam semana que vem.”', explanationPt: 'まだです = ainda não. Combina com 来週 始まります (começam só na semana que vem).' },
        { id: 'n5-grammar-12', number: 12, prompt: '（びょういんで）いしゃ「{今日|きょう}から {一週間|いっしゅうかん} {薬|くすり}を {飲|の}んで、{来週|らいしゅう}の {月曜日|げつようび}に（　）{来|き}て ください。」', choices: [{ n: 1, text: 'たくさん' }, { n: 2, text: 'あまり' }, { n: 3, text: 'また' }, { n: 4, text: 'だんだん' }], answer: 3, translationPt: '(No hospital) Médico: “Tome o remédio por uma semana e volte de novo na segunda que vem.”', explanationPt: 'また 来てください = venha **de novo**. Combina com a ideia de retorno.' },
        { id: 'n5-grammar-13', number: 13, prompt: '{父|ちち}は {毎朝|まいあさ} コーヒーを（　）ながら {新聞|しんぶん}を {読|よ}みます。', choices: [{ n: 1, text: '{飲|の}む' }, { n: 2, text: '{飲|の}み' }, { n: 3, text: '{飲|の}んで' }, { n: 4, text: '{飲|の}んだ' }], answer: 2, translationPt: 'Meu pai lê o jornal todas as manhãs enquanto toma café.', explanationPt: '〜ながら usa a **raiz-ます**: 飲み + ながら = 飲みながら (enquanto bebe).' },
        { id: 'n5-grammar-14', number: 14, prompt: '{私|わたし}は {小|ちい}さいとき、なっとうが {好|す}き（　）でした。', choices: [{ n: 1, text: 'ない' }, { n: 2, text: 'じゃない' }, { n: 3, text: 'ありません' }, { n: 4, text: 'じゃありません' }], answer: 4, translationPt: 'Quando eu era pequeno, não gostava de natto.', explanationPt: '好き é adjetivo-な. Passado negativo polido = 好きじゃありませんでした (じゃありません + でした).' },
        { id: 'n5-grammar-15', number: 15, prompt: '（ケーキ{屋|や}で）{店|みせ}の{人|ひと}「いらっしゃいませ。」{山下|やました}「すみません、いちごの ケーキを {二|ふた}つ（　）。」{店|みせ}の{人|ひと}「はい。800{円|えん}です。」', choices: [{ n: 1, text: 'ありますか' }, { n: 2, text: 'どうぞ' }, { n: 3, text: 'ください' }, { n: 4, text: 'ほしいですか' }], answer: 3, translationPt: '(Na confeitaria) “Duas tortas de morango, por favor.”', explanationPt: '〜を ください = me dê / quero comprar. É como o cliente pede o produto.' },
        { id: 'n5-grammar-16', number: 16, prompt: 'リー「{日曜日|にちようび}に、{私|わたし}の {家|いえ}で アンさんと べんきょうを します。キムさんも（　）。」キム「あ、{行|い}きたいです。」', choices: [{ n: 1, text: '{来|き}ませんか' }, { n: 2, text: '{来|き}て いますか' }, { n: 3, text: '{来|き}ませんでしたか' }, { n: 4, text: '{来|き}て いましたか' }], answer: 1, translationPt: '“No domingo vou estudar com a Ann na minha casa. Kim, você não quer vir também?” “Ah, quero ir!”', explanationPt: '〜ませんか = convite (não quer...?). 来ませんか = não quer vir? A resposta 行きたいです confirma.' },
      ],
    },
    {
      id: 'n5-grammar-m2',
      title: 'もんだい２',
      subtitlePt: 'Montagem de frases (qual fica no ★)',
      instructionJa: '★ に 入る ものは どれですか。１・２・３・４から いちばん いい ものを 一つ えらんで ください。',
      instructionPt: 'Reordene os 4 pedaços para formar a frase correta e indique qual fica na posição ★.',
      questions: [
        { id: 'n5-grammar-17', number: 17, context: '（タクシーの {中|なか}で）', prompt: 'Ａ「すみません、つぎの ＿＿ ＿★＿ ＿＿ ＿＿ まがって ください。」Ｂ「はい、わかりました。」', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'しんごう' }, { n: 3, text: '{右|みぎ}' }, { n: 4, text: 'を' }], answer: 4, translationPt: '(No táxi) “Por favor, vire à direita no próximo sinal.”', explanationPt: 'Ordem correta: つぎの【しんごう を 右 に】まがって. No ★ (2ª posição) fica を (opção 4).' },
        { id: 'n5-grammar-18', number: 18, prompt: '{私|わたし}は {日曜日|にちようび}に {兄|あに} ＿＿ ＿＿ ＿★＿ ＿＿ {出|で}かけました。', choices: [{ n: 1, text: 'の' }, { n: 2, text: 'と' }, { n: 3, text: '{子|こ}ども' }, { n: 4, text: 'いっしょに' }], answer: 2, translationPt: 'No domingo saí junto com o filho do meu irmão.', explanationPt: 'Ordem: 兄【の 子ども と いっしょに】出かけました. No ★ (3ª posição) fica と (opção 2).' },
        { id: 'n5-grammar-19', number: 19, prompt: 'きのう {買|か}った おかしは ＿＿ ＿＿ ＿★＿ ＿＿ でした。', choices: [{ n: 1, text: '{色|いろ}' }, { n: 2, text: 'きれい' }, { n: 3, text: 'が' }, { n: 4, text: 'まるくて' }], answer: 3, translationPt: 'O doce que comprei ontem era redondo e de cor bonita.', explanationPt: 'Ordem: おかしは【まるくて 色 が きれい】でした. No ★ (3ª posição) fica が (opção 3).' },
        { id: 'n5-grammar-20', number: 20, prompt: '{駅|えき}の ＿＿ ＿＿ ＿★＿ ＿＿ で ざっしを {買|か}いました。', choices: [{ n: 1, text: 'に' }, { n: 2, text: 'ある' }, { n: 3, text: '{近|ちか}く' }, { n: 4, text: '{本屋|ほんや}' }], answer: 2, translationPt: 'Comprei uma revista na livraria que fica perto da estação.', explanationPt: 'Ordem: 駅の【近く に ある 本屋】で. No ★ (3ª posição) fica ある (opção 2).' },
        { id: 'n5-grammar-21', number: 21, prompt: '{先週|せんしゅう} ＿＿ ＿＿ ＿★＿ ＿＿ の こうちゃは とても おいしかったです。', choices: [{ n: 1, text: 'もらった' }, { n: 2, text: 'ともだち' }, { n: 3, text: '{外国|がいこく}' }, { n: 4, text: 'に' }], answer: 1, translationPt: 'O chá-preto que ganhei de um amigo do exterior na semana passada estava muito gostoso.', explanationPt: 'Ordem: 先週【外国 の ともだち に もらった】... espera — a ordem certa é 【ともだち に 外国... 】. A leitura natural é 「外国の ともだちに もらった」: ともだち に もらった + 外国. No ★ (3ª posição) fica もらった (opção 1).' },
      ],
    },
    {
      id: 'n5-grammar-m3',
      title: 'もんだい３',
      subtitlePt: 'Gramática dentro do texto',
      instructionJa: '22 から 26 に 何を 入れますか。ぶんしょうの いみを かんがえて、１・２・３・４から いちばん いい ものを 一つ えらんで ください。',
      instructionPt: 'Leia as duas redações e escolha a expressão que melhor completa cada lacuna (22 a 26), pensando no sentido do texto.',
      questions: [
        { id: 'n5-grammar-22', number: 22, context: '【Redação da Nin】\n{私|わたし}の {好|す}きな {飲|の}み{物|もの}は くだものの ジュースです。{大好|だいす}きな ジュースは すいかジュースです。{私|わたし}の {国|くに}では いろいろな {店|みせ}に あります。＿22＿、{日本|にほん}では {売|う}って いる {店|みせ}を {知|し}りません。', prompt: '＿22＿ に 入る ことば', choices: [{ n: 1, text: 'だから' }, { n: 2, text: 'でも' }, { n: 3, text: 'いつも' }, { n: 4, text: 'もっと' }], answer: 2, translationPt: '“No meu país tem em várias lojas. Mas, no Japão, não conheço loja que venda.”', explanationPt: 'でも = mas/porém. Liga duas ideias contrastantes (lá tem / aqui não).' },
        { id: 'n5-grammar-23', number: 23, context: '（continuação da redação da Nin）\nみなさんは {何|なん}の ジュースが {好|す}きですか。{好|す}きな ジュースを ＿23＿。', prompt: '＿23＿ に 入る ことば', choices: [{ n: 1, text: '{教|おし}えて ください' }, { n: 2, text: '{教|おし}えたいです' }, { n: 3, text: '{教|おし}えますよ' }, { n: 4, text: '{教|おし}えて います' }], answer: 1, translationPt: '“Me contem qual suco vocês gostam.”', explanationPt: 'Ela pergunta à classe → 教えてください = por favor, me digam.' },
        { id: 'n5-grammar-24', number: 24, context: '【Redação da Mei】\n{先週|せんしゅう}の {土曜日|どようび}は いい {天気|てんき}でした。{昼|ひる}に {買|か}い{物|もの}を してから、きっさてんに ＿24＿。{名前|なまえ}は 「はな」です。', prompt: '＿24＿ に 入る ことば', choices: [{ n: 1, text: '{入|はい}るからです' }, { n: 2, text: '{入|はい}ったからです' }, { n: 3, text: '{入|はい}ります' }, { n: 4, text: '{入|はい}りました' }], answer: 4, translationPt: '“Depois de fazer compras à tarde, entrei num café.”', explanationPt: 'O texto está no passado (でした, してから) → 入りました (entrei).' },
        { id: 'n5-grammar-25', number: 25, context: '（continuação da redação da Mei）\n「はな」＿25＿ コーヒーは {安|やす}かったです。', prompt: '＿25＿ に 入る ことば', choices: [{ n: 1, text: 'から' }, { n: 2, text: 'と' }, { n: 3, text: 'の' }, { n: 4, text: 'より' }], answer: 3, translationPt: '“O café do (café) Hana estava barato.”', explanationPt: 'の liga nome + nome: 「はな」の コーヒー = o café do Hana.' },
        { id: 'n5-grammar-26', number: 26, context: '（continuação da redação da Mei）\n{来週|らいしゅう}も 「はな」に コーヒーを ＿26＿。', prompt: '＿26＿ に 入る ことば', choices: [{ n: 1, text: '{飲|の}んで {行|い}きます' }, { n: 2, text: '{飲|の}んで {来|き}ます' }, { n: 3, text: '{飲|の}みに {行|い}きます' }, { n: 4, text: '{飲|の}みに {来|き}ます' }], answer: 3, translationPt: '“Semana que vem também vou ao Hana tomar café.”', explanationPt: '〜に 行きます (ir com o objetivo de): 飲みに 行きます = vou (até lá) para beber.' },
      ],
    },
  ],
}

const reading: Section = {
  id: 'reading',
  level: 'N5',
  titleJa: 'どっかい',
  titlePt: 'Leitura',
  summaryPt:
    'Compreensão de leitura: textos curtos do dia a dia (avisos, bilhetes, redações) e busca de informação em quadros. Faz parte do bloco Gramática + Leitura (50 min).',
  studyNotes: [
    {
      title: 'Estratégia para a leitura do N5',
      bodyPt:
        '- **Leia a pergunta primeiro**: saber o que procurar (quem, quando, o quê, por quê) evita reler tudo.\n- **Textos curtos** (もんだい4): avisos e bilhetes. Foque em datas, horários e ordens (〜てください).\n- **Texto médio** (もんだい5): uma redação. Atenção às palavras sublinhadas — as perguntas costumam ser sobre elas.\n- **Busca de informação** (もんだい6): tabela/folheto. Aplique as condições do enunciado (preço, tempo) e elimine o que não atende.',
    },
    {
      title: 'Palavras de tempo frequentes',
      bodyPt:
        '| Japonês | Português |\n|---|---|\n| けさ | esta manhã |\n| ゆうべ | ontem à noite |\n| まいあさ | toda manhã |\n| らいしゅう | semana que vem |\n| ごぜん / ごご | de manhã / de tarde |\n| 〜まえに | antes de 〜 |\n| 〜てから | depois de 〜 |',
    },
  ],
  groups: [
    {
      id: 'n5-reading-m4',
      title: 'もんだい４',
      subtitlePt: 'Textos curtos',
      instructionJa: 'つぎの （1）から （3）の ぶんしょうを 読んで、しつもんに こたえて ください。',
      instructionPt: 'Leia os textos curtos (1) a (3) e responda à pergunta. Escolha a melhor opção entre 1, 2, 3 e 4.',
      questions: [
        { id: 'n5-reading-27', number: 27, context: '（1）\nわたしは {毎朝|まいあさ} ご{飯|はん}と なっとうか、パンと たまごを {食|た}べて、{学校|がっこう}へ {行|い}きます。でも、けさは なにも {食|た}べませんでした。バナナを {学校|がっこう}へ {持|も}っていきました。{起|お}きた {時間|じかん}が おそかったからです。', prompt: 'けさ「わたし」は {学校|がっこう}へ {行|い}く {前|まえ}に、{何|なに}を {食|た}べましたか。', choices: [{ n: 1, text: 'ご{飯|はん}と なっとうを {食|た}べました。' }, { n: 2, text: 'パンと たまごを {食|た}べました。' }, { n: 3, text: 'なにも {食|た}べませんでした。' }, { n: 4, text: 'バナナを {食|た}べました。' }], answer: 3, translationPt: 'O que “eu” comi esta manhã antes de ir à escola?', explanationPt: 'O texto diz “けさは なにも 食べませんでした” (esta manhã não comi nada). A banana foi **levada** para a escola, não comida antes.' },
        { id: 'n5-reading-28', number: 28, context: '（2）（{大学|だいがく}で）\n「{日本語|にほんご}1」と 「{日本語|にほんご}2」の クラスの みなさんへ\n{今日|きょう} {出川|でがわ}{先生|せんせい}は お{昼|ひる}まで お{休|やす}みです。{午前|ごぜん}の「{日本語|にほんご}1」の クラスは ありません。{午後|ごご}の「{日本語|にほんご}2」の クラスは あります。\n・「{日本語|にほんご}1」の しゅくだいは {来週|らいしゅう} {出|だ}して ください。', prompt: '{大学|だいがく}は「{日本語|にほんご}1」の クラスの {学生|がくせい}に {何|なに}が {言|い}いたいですか。', choices: [{ n: 1, text: '{今日|きょう} クラスは ありません。しゅくだいは {午後|ごご} {出|だ}して ください。' }, { n: 2, text: '{今日|きょう} クラスは ありません。しゅくだいは {来週|らいしゅう} {出|だ}して ください。' }, { n: 3, text: '{今日|きょう} クラスが ありますが、しゅくだいは {来週|らいしゅう} {出|だ}して ください。' }, { n: 4, text: '{今日|きょう} クラスが ありますから、しゅくだいを {出|だ}して ください。' }], answer: 2, translationPt: 'O que a universidade quer dizer aos alunos da turma “Japonês 1”?', explanationPt: 'A aula da manhã (Japonês 1) **não há** hoje, e a lição deve ser entregue **na semana que vem** (来週).' },
        { id: 'n5-reading-29', number: 29, context: '（3）（{会社|かいしゃ}で）ボゴさんの {机|つくえ}の {上|うえ}に、この メモと にもつが あります。\n\nボゴさん\n10{時|じ}ごろ ゆうびんきょくの {人|ひと}が この にもつを とりに {来|き}ますから、にもつと お{金|かね}を わたして ください。お{金|かね}は {中西|なかにし}さんが {持|も}って います。ゆうびんきょくの {人|ひと}が {来|く}る {前|まえ}に もらいに {行|い}って ください。よろしく おねがいします。 {多田|ただ}', prompt: 'この メモを {読|よ}んで、ボゴさんは はじめに {何|なに}を しますか。', choices: [{ n: 1, text: '{中西|なかにし}さんに お{金|かね}を もらいます。' }, { n: 2, text: '{中西|なかにし}さんに にもつと お{金|かね}を わたします。' }, { n: 3, text: 'ゆうびんきょくの {人|ひと}に にもつを もらいます。' }, { n: 4, text: 'ゆうびんきょくの {人|ひと}に にもつと お{金|かね}を わたします。' }], answer: 1, translationPt: 'Lendo o bilhete, o que Bogo faz primeiro?', explanationPt: 'O bilhete pede para pegar o dinheiro com a Nakanishi **antes** de o carteiro chegar. Portanto, **primeiro** ele recebe o dinheiro da Nakanishi.' },
      ],
    },
    {
      id: 'n5-reading-m5',
      title: 'もんだい５',
      subtitlePt: 'Texto médio (redação)',
      instructionJa: 'つぎの ぶんしょうを 読んで、しつもんに こたえて ください。',
      instructionPt: 'Leia a redação e responda às perguntas. Escolha a melhor opção entre 1, 2, 3 e 4.',
      questions: [
        { id: 'n5-reading-30', number: 30, context: '【「まちがえました」 — チン・シュン】\nわたしは きのうの {日曜日|にちようび}、{友|とも}だちと サッカーを しました。{朝|あさ}から ゆうがたまで しましたから、とても つかれました。ゆうべは ばんご{飯|はん}を {食|た}べた あとで、すぐに ねました。ですから、{今日|きょう}の かんじテストの べんきょうが できませんでした。\n①けさは ５{時|じ}に {起|お}きました。シャワーを あびて、{朝|あさ}ご{飯|はん}を {食|た}べました。それから、すぐ かんじの テキストの 41ページから 60ページまで べんきょうしました。それから {学校|がっこう}へ {行|い}きました。', prompt: 'どうして ①けさは ５{時|じ}に {起|お}きましたか。', choices: [{ n: 1, text: '{朝|あさ}から ゆうがたまで サッカーを したかったから' }, { n: 2, text: 'かんじテストの べんきょうが したかったから' }, { n: 3, text: 'シャワーを あびて、{朝|あさ}ご{飯|はん}を {食|た}べたかったから' }, { n: 4, text: '{学校|がっこう}へ {行|い}って、べんきょうが したかったから' }], answer: 2, translationPt: 'Por que ela acordou às 5h esta manhã?', explanationPt: 'Na véspera não conseguiu estudar para a prova de kanji (べんきょうが できませんでした), então acordou cedo para **estudar** — opção 2.' },
        { id: 'n5-reading-31', number: 31, context: '（continuação da redação）\nとても いそがしい {朝|あさ}でした。しかし、きょうしつで かんじを べんきょうしている {人|ひと}は いませんでした。②まちがえました。テストは {今日|きょう}ではなくて、あしたでした。', prompt: 'チンさんは {何|なに}を ②まちがえましたか。', choices: [{ n: 1, text: 'かんじの テキスト' }, { n: 2, text: 'かんじの テキストの ページ' }, { n: 3, text: 'かんじの テストが ある {日|ひ}' }, { n: 4, text: 'かんじの テストを する きょうしつ' }], answer: 3, translationPt: 'O que a Chin confundiu/errou?', explanationPt: 'O texto explica: “a prova não era hoje, era amanhã”. Ela errou **o dia da prova** — opção 3.' },
      ],
    },
    {
      id: 'n5-reading-m6',
      title: 'もんだい６',
      subtitlePt: 'Busca de informação',
      instructionJa: '右の ページを 見て、下の しつもんに こたえて ください。',
      instructionPt: 'Use o quadro de rotas para responder. Escolha a melhor opção entre 1, 2, 3 e 4.',
      questions: [
        { id: 'n5-reading-32', number: 32, context: 'Paburo quer ir à Universidade Takagi. Sai da estação Hanada ou Itokawa. O custo da estação até a universidade deve ser **até 500 ienes**, e ele prefere o **menor tempo**.\n\n① Terani → ônibus 45min + 1min a pé = 46min · 300円\n② Hanada → trem 25min + 5min a pé = 30min · 550円\n③ Hanada → metrô 30min + 10min a pé = 40min · 450円\n④ Itokawa → trem 25min + 10min a pé = 35min · 430円', prompt: 'パブロさんは どの {行|い}き{方|かた}で {行|い}きますか。', choices: [{ n: 1, text: '①（46{分|ぷん}・300{円|えん}）' }, { n: 2, text: '②（30{分|ぷん}・550{円|えん}）' }, { n: 3, text: '③（40{分|ぷん}・450{円|えん}）' }, { n: 4, text: '④（35{分|ぷん}・430{円|えん}）' }], answer: 4, translationPt: 'Qual trajeto Paburo escolhe?', explanationPt: 'Condição: até 500円 → elimina ② (550円). Entre ①(46min), ③(40min) e ④(35min), o mais rápido é ④ (35min, 430円).' },
      ],
    },
  ],
}

const listening: Section = {
  id: 'listening',
  level: 'N5',
  titleJa: 'ちょうかい',
  titlePt: 'Audição',
  summaryPt:
    'Compreensão auditiva. Quatro tipos: compreensão de tarefa, de ponto-chave, expressões em situação e respostas rápidas. Ouça os áudios oficiais com o player e acompanhe a transcrição com tradução. 30 minutos no exame.',
  studyNotes: [
    {
      title: 'Como estudar com os áudios',
      bodyPt:
        '1. **Ouça primeiro sem ler** e tente responder mentalmente.\n2. Use o player para **diminuir a velocidade** (0,75×) e o botão **A–B** para repetir um trecho difícil.\n3. Depois leia a **transcrição oficial** com furigana; ative a **tradução pt-BR** para conferir.\n4. Por fim, marque “Mostrar respostas” e compare.',
    },
    {
      title: 'Os 4 tipos de questão',
      bodyPt:
        '- **もんだい1 (Compreensão de tarefa)**: ouça a pergunta, depois o diálogo, e descubra **o que a pessoa vai fazer**.\n- **もんだい2 (Ponto-chave)**: foque na **informação específica** pedida (quando, quantos, por quê).\n- **もんだい3 (Expressões)**: olhe a cena e escolha **o que dizer** naquela situação (3 opções).\n- **もんだい4 (Resposta rápida)**: ouça uma fala e escolha a **resposta** mais natural (3 opções).',
    },
  ],
  groups: [],
  audios: [
    {
      id: 'n5-listening-q1',
      title: 'もんだい１ — Compreensão de tarefa',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e descubra o que a pessoa precisa fazer. (7 itens + exemplo)',
      src: '/audio/N5/N5Q1.mp3',
      script: [
        { label: '例', setupJa: 'クラスで{先生|せんせい}が{話|はな}しています。{学生|がくせい}は、{今日|きょう}うちで、どこを{勉強|べんきょう}しますか。', setupPt: 'Numa sala, a professora fala. Onde o aluno vai estudar em casa hoje?', lines: [
          { speaker: 'F', ja: 'では、{今日|きょう}は 20ページまで {終|お}わりましたから、21ページは {宿題|しゅくだい}ですね。', pt: 'Então, hoje terminamos até a página 20, então a página 21 é tarefa de casa.' },
          { speaker: 'M', ja: '{全部|ぜんぶ}ですか。', pt: 'A página toda?' },
          { speaker: 'F', ja: 'いえ、21ページの 1{番|ばん}です。2{番|ばん}は、クラスでします。', pt: 'Não, é o exercício 1 da página 21. O 2 a gente faz em aula.' },
        ], questionJa: '{学生|がくせい}は、{今日|きょう}うちで、どこを{勉強|べんきょう}しますか。', answer: 3 },
        { label: '1番', setupJa: '{男|おとこ}の{人|ひと}と {女|おんな}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}はどこへ{行|い}きますか。', setupPt: 'Um homem e uma mulher conversam. Para onde o homem vai?', lines: [
          { speaker: 'M', ja: 'すみません、{喫茶店|きっさてん}「みどり」はどこですか。', pt: 'Com licença, onde fica o café “Midori”?' },
          { speaker: 'F', ja: '{喫茶店|きっさてん}「みどり」ですね。あそこに{交差点|こうさてん}がありますね。', pt: 'O café “Midori”? Ali tem um cruzamento, viu?' },
          { speaker: 'M', ja: 'はい。', pt: 'Sim.' },
          { speaker: 'F', ja: 'あの{交差点|こうさてん}を {左|ひだり}に{曲|ま}がってください。{道|みち}の {左側|ひだりがわ}に{銀行|ぎんこう}があります。{喫茶店|きっさてん}「みどり」は {銀行|ぎんこう}のとなりですよ。', pt: 'Vire à esquerda naquele cruzamento. Do lado esquerdo da rua há um banco. O café “Midori” é ao lado do banco.' },
          { speaker: 'M', ja: '{分|わ}かりました。ありがとうございます。', pt: 'Entendi. Obrigado.' },
        ], questionJa: '{男|おとこ}の{人|ひと}はどこへ{行|い}きますか。', answer: 3 },
        { label: '2番', setupJa: '{会社|かいしゃ}で {女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}はどの{雑誌|ざっし}を {女|おんな}の{人|ひと}に{渡|わた}しますか。', setupPt: 'Na empresa, uma mulher e um homem conversam. Qual revista o homem entrega a ela?', lines: [
          { speaker: 'F', ja: '{木村|きむら}さん、すみません、{木村|きむら}さんの{後|うし}ろにある{雑誌|ざっし}を{取|と}ってください。', pt: 'Kimura, por favor, pegue a revista que está atrás de você.' },
          { speaker: 'M', ja: '{時計|とけい}の{雑誌|ざっし}ですか。{車|くるま}の{雑誌|ざっし}ですか。', pt: 'A revista de relógios? Ou a de carros?' },
          { speaker: 'F', ja: '{時計|とけい}の{雑誌|ざっし}です。', pt: 'A de relógios.' },
          { speaker: 'M', ja: 'いちばん {新|あたら}しい、8{月|がつ}のですか。', pt: 'A mais nova, de agosto?' },
          { speaker: 'F', ja: 'いいえ、7{月|がつ}のをお{願|ねが}いします。', pt: 'Não, a de julho, por favor.' },
          { speaker: 'M', ja: 'はい。', pt: 'Certo.' },
        ], questionJa: '{男|おとこ}の{人|ひと}はどの{雑誌|ざっし}を {女|おんな}の{人|ひと}に{渡|わた}しますか。', answer: 1 },
        { label: '3番', setupJa: '{学校|がっこう}で{先生|せんせい}が{話|はな}しています。{学生|がくせい}は、{次|つぎ}、{何日|なんにち}に{学校|がっこう}に{来|き}ますか。', setupPt: 'Na escola a professora fala. Em que dia os alunos voltam à escola?', lines: [
          { speaker: 'F', ja: '{皆|みな}さん、{明日|あした}から{休|やす}みですね。{休|やす}みは {四日|よっか}から {九日|ここのか}まで {六日間|むいかかん}です。{十日|とおか}はテストをします。{休|やす}まないでください。では、{六日間|むいかかん}ゆっくり{休|やす}んで、また{学校|がっこう}に{来|き}てください。', pt: 'Pessoal, a partir de amanhã são férias. As férias vão do dia 4 ao dia 9, seis dias. No dia 10 teremos prova. Não faltem. Descansem bem por seis dias e voltem à escola.' },
        ], questionJa: '{学生|がくせい}は、{次|つぎ}、{何日|なんにち}に{学校|がっこう}に{来|き}ますか。', answer: 4 },
        { label: '4番', setupJa: 'うちで {女|おんな}の{学生|がくせい}と {男|おとこ}の{学生|がくせい}が{話|はな}しています。{男|おとこ}の{学生|がくせい}は{冷蔵庫|れいぞうこ}から{何|なに}を{出|だ}しますか。', setupPt: 'Em casa, uma estudante e um estudante conversam. O que o rapaz vai tirar da geladeira?', lines: [
          { speaker: 'F', ja: 'あ、12{時|じ}ですね。お{昼|ひる}ご{飯|はん}を{食|た}べましょう。{私|わたし}が{作|つく}りますよ。', pt: 'Ah, são 12h. Vamos almoçar. Eu cozinho.' },
          { speaker: 'M', ja: '{何|なに}かしましょうか。', pt: 'Quer que eu ajude em algo?' },
          { speaker: 'F', ja: 'ありがとう。じゃ、{冷蔵庫|れいぞうこ}から {卵|たまご}を 2{個|こ}と {牛乳|ぎゅうにゅう}を{出|だ}してください。', pt: 'Obrigada. Então tire da geladeira 2 ovos e o leite.' },
          { speaker: 'M', ja: 'はい。', pt: 'Ok.' },
          { speaker: 'F', ja: 'それから {魚|さかな}も{出|だ}してください。あ、すみません、{卵|たまご}は 3{個|こ}お{願|ねが}いします。', pt: 'E tire o peixe também. Ah, desculpa, os ovos podem ser 3.' },
          { speaker: 'M', ja: 'はい。', pt: 'Certo.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}は{冷蔵庫|れいぞうこ}から{何|なに}を{出|だ}しますか。', answer: 2 },
        { label: '5番', setupJa: '{日本語|にほんご}{学校|がっこう}で {女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は{何曜日|なんようび}のクラスで{勉強|べんきょう}しますか。', setupPt: 'Numa escola de japonês, conversam. Em que dia da semana ela vai estudar?', lines: [
          { speaker: 'F', ja: 'すみません。1{週間|しゅうかん}に 1{回|かい}、{日本語|にほんご}で{話|はな}す{練習|れんしゅう}をしたいです。{夜|よる}のクラスはありますか。', pt: 'Com licença. Quero praticar conversação em japonês uma vez por semana. Tem turma à noite?' },
          { speaker: 'M', ja: 'はい、{夜|よる}のクラスは{毎週|まいしゅう}{月曜日|げつようび}、{火曜日|かようび}、{木曜日|もくようび}、{金曜日|きんようび}です。{夜|よる}6{時|じ}からです。', pt: 'Sim, as turmas da noite são toda segunda, terça, quinta e sexta, a partir das 18h.' },
          { speaker: 'F', ja: 'うーん、{火曜日|かようび}と{金曜日|きんようび}は{仕事|しごと}が6{時|じ}に{終|お}わりません。', pt: 'Hmm, terça e sexta meu trabalho não termina às 18h.' },
          { speaker: 'M', ja: 'そうですか。では、{月曜日|げつようび}がいいですよ。{木曜日|もくようび}のクラスは{話|はな}す{時間|じかん}が {短|みじか}いです。', pt: 'Entendi. Então segunda é melhor. A turma de quinta tem pouco tempo de fala.' },
          { speaker: 'F', ja: '{分|わ}かりました。じゃ、{来週|らいしゅう}から{勉強|べんきょう}したいです。', pt: 'Entendi. Então quero começar semana que vem.' },
        ], questionJa: '{女|おんな}の{人|ひと}は{何曜日|なんようび}のクラスで{勉強|べんきょう}しますか。', answer: 1 },
        { label: '6番', setupJa: '{日本語|にほんご}{学校|がっこう}で{先生|せんせい}が{学生|がくせい}に{話|はな}しています。{学生|がくせい}は{明日|あした}の{午前|ごぜん}どの{教室|きょうしつ}に{行|い}きますか。', setupPt: 'O professor fala aos alunos. A que sala eles vão amanhã de manhã?', lines: [
          { speaker: 'M', ja: '{明日|あした}の{午前|ごぜん}は、クラスに{日本人|にほんじん}の{学生|がくせい}が{来|き}ますから、{広|ひろ}い{教室|きょうしつ}で{授業|じゅぎょう}をします。2{階|かい}の 4{番|ばん}の{教室|きょうしつ}に{来|き}てください。{午後|ごご}は 1{階|かい}の 3{番|ばん}の{教室|きょうしつ}で{授業|じゅぎょう}をします。', pt: 'Amanhã de manhã virão alunos japoneses, então a aula será numa sala grande. Venham à sala nº 4 do 2º andar. À tarde a aula é na sala nº 3 do 1º andar.' },
        ], questionJa: '{学生|がくせい}は{明日|あした}の{午前|ごぜん}どの{教室|きょうしつ}に{行|い}きますか。', answer: 4 },
        { label: '7番', setupJa: '{女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は{何|なに}を{持|も}っていきますか。', setupPt: 'Conversam sobre uma festa. O que a mulher vai levar?', lines: [
          { speaker: 'F', ja: '{佐藤|さとう}さん、{日曜日|にちようび}、{佐藤|さとう}さんのうちでパーティーをしますね。{何|なに}か{持|も}っていきましょうか。{飲|の}み{物|もの}はどうですか。', pt: 'Sato, domingo tem festa na sua casa, né? Quer que eu leve algo? Que tal bebidas?' },
          { speaker: 'M', ja: 'ありがとうございます。{飲|の}み{物|もの}はたくさんありますから、{食|た}べ{物|もの}がいいです。じゃ、おにぎりを{持|も}ってきてください。{私|わたし}はスパゲティを{作|つく}ります。', pt: 'Obrigado. Bebida já tem bastante, então comida é melhor. Pode trazer onigiri. Eu faço o espaguete.' },
          { speaker: 'F', ja: '{分|わ}かりました。', pt: 'Combinado.' },
          { speaker: 'M', ja: 'それから、カメラはありますか。', pt: 'E você tem câmera?' },
          { speaker: 'F', ja: 'はい。', pt: 'Tenho.' },
          { speaker: 'M', ja: 'パーティーのとき、{使|つか}いたいですから、{貸|か}してください。', pt: 'Quero usar na festa, então me empreste, por favor.' },
          { speaker: 'F', ja: 'はい、いいですよ。', pt: 'Claro, sem problema.' },
        ], questionJa: '{女|おんな}の{人|ひと}は{何|なに}を{持|も}っていきますか。', answer: 3 },
      ],
    },
    {
      id: 'n5-listening-q2',
      title: 'もんだい２ — Compreensão de ponto-chave',
      descriptionPt: 'Ouça a pergunta, depois o diálogo, e escolha a informação específica pedida. (6 itens + exemplo)',
      src: '/audio/N5/N5Q2.mp3',
      script: [
        { label: '例', setupJa: '{男|おとこ}の{人|ひと}と {女|おんな}の{人|ひと}が{話|はな}しています。{男|おとこ}の{人|ひと}は、{昨日|きのう}どこへ{行|い}きましたか。', setupPt: 'Conversam. Onde o homem foi ontem?', lines: [
          { speaker: 'M', ja: '{山田|やまだ}さん、{昨日|きのう}どこかへ{行|い}きましたか。', pt: 'Yamada, você foi a algum lugar ontem?' },
          { speaker: 'F', ja: '{図書館|としょかん}へ{行|い}きました。', pt: 'Fui à biblioteca.' },
          { speaker: 'M', ja: '{僕|ぼく}は{山川|やまかわ}デパートへ{行|い}って、{買|か}い{物|もの}をしました。', pt: 'Eu fui à loja Yamakawa e fiz compras.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{昨日|きのう}どこへ{行|い}きましたか。', answer: 3 },
        { label: '1番', setupJa: 'うちで {女|おんな}の{人|ひと}と {男|おとこ}の{人|ひと}が{話|はな}しています。{女|おんな}の{人|ひと}は{何|なん}のジュースを{作|つく}りましたか。', setupPt: 'Em casa conversam. Que suco a mulher fez?', lines: [
          { speaker: 'F', ja: 'くだもののジュースを{作|つく}りました。どうぞ{飲|の}んでください。', pt: 'Fiz um suco de frutas. Tome, por favor.' },
          { speaker: 'M', ja: 'いただきます。これは{何|なん}のジュースですか。', pt: 'Vou tomar. Que suco é este?' },
          { speaker: 'F', ja: 'りんごと、それから、みかんとバナナを{少|すこ}し{入|い}れました。', pt: 'Maçã e, além disso, pus um pouco de mexerica e banana.' },
        ], questionJa: '{女|おんな}の{人|ひと}は{何|なん}のジュースを{作|つく}りましたか。', answer: 4 },
        { label: '2番', setupJa: '{女|おんな}の{学生|がくせい}と {男|おとこ}の{学生|がくせい}が{話|はな}しています。{男|おとこ}の{学生|がくせい}はお{兄|にい}さんが{何人|なんにん}いますか。', setupPt: 'Conversam. Quantos irmãos mais velhos o rapaz tem?', lines: [
          { speaker: 'F', ja: '{中山|なかやま}さん、{中山|なかやま}さんの{家族|かぞく}は{何人|なんにん}ですか。', pt: 'Nakayama, quantas pessoas há na sua família?' },
          { speaker: 'M', ja: '4{人|にん}です。{両親|りょうしん}と、{兄|あに}が{一人|ひとり}と{僕|ぼく}です。', pt: 'Quatro. Meus pais, um irmão mais velho e eu.' },
          { speaker: 'F', ja: 'お{兄|にい}さんは{学生|がくせい}ですか。', pt: 'Seu irmão é estudante?' },
          { speaker: 'M', ja: 'いえ、{会社員|かいしゃいん}です。{結婚|けっこん}して、{子供|こども}が{二人|ふたり}いますよ。', pt: 'Não, é assalariado. É casado e tem dois filhos.' },
        ], questionJa: '{男|おとこ}の{学生|がくせい}はお{兄|にい}さんが{何人|なんにん}いますか。', answer: 1 },
        { label: '3番', setupJa: '{会社|かいしゃ}で{話|はな}しています。{男|おとこ}の{人|ひと}は{何|なに}で{会社|かいしゃ}に{来|き}ていますか。', setupPt: 'Na empresa. Como o homem vem ao trabalho?', lines: [
          { speaker: 'F', ja: '{加藤|かとう}さん、{加藤|かとう}さんのうちはどちらですか。', pt: 'Kato, onde fica a sua casa?' },
          { speaker: 'M', ja: 'みなみ{町|まち}です。', pt: 'No bairro Minami.' },
          { speaker: 'F', ja: '{私|わたし}もみなみ{町|まち}ですよ。でも、{駅|えき}や{電車|でんしゃ}で{全然|ぜんぜん}{加藤|かとう}さんに{会|あ}いませんね。{電車|でんしゃ}じゃなくてバスで{会社|かいしゃ}に{来|き}ていますか。', pt: 'Eu também sou de Minami! Mas nunca te encontro na estação ou no trem. Você vem de ônibus, não de trem?' },
          { speaker: 'M', ja: 'いえ、{僕|ぼく}は{自転車|じてんしゃ}です。{前|まえ}は{車|くるま}で{来|き}ていましたが、{車|くるま}はいろいろお{金|かね}がかかりますから、{今|いま}は{乗|の}っていません。', pt: 'Não, eu venho de bicicleta. Antes vinha de carro, mas carro dá muito gasto, então agora não uso.' },
        ], questionJa: '{男|おとこ}の{人|ひと}は、{何|なに}で{会社|かいしゃ}に{来|き}ていますか。', answer: 3 },
        { label: '4番', setupJa: '{電話|でんわ}で{話|はな}しています。{二人|ふたり}は{今日|きょう}{一緒|いっしょ}に{何|なに}をしますか。', setupPt: 'Ao telefone. O que os dois vão fazer juntos hoje?', lines: [
          { speaker: 'F', ja: '{今日|きょう}うちで{映画|えいが}を{見|み}ませんか。{面白|おもしろ}い DVD を{借|か}りましたよ。', pt: 'Quer ver um filme em casa hoje? Aluguei um DVD legal.' },
          { speaker: 'M', ja: 'ああ。{今日|きょう}は{今|いま}から{友達|ともだち}とバスケットボールをして、それから、みんなと{一緒|いっしょ}にラーメンを{食|た}べに{行|い}きます。でも{午後|ごご}は{大丈夫|だいじょうぶ}です。', pt: 'Ah. Hoje agora vou jogar basquete com amigos e depois comer lámen com todo mundo. Mas de tarde estou livre.' },
          { speaker: 'F', ja: 'じゃ、{午後|ごご}{来|き}てください。', pt: 'Então venha de tarde.' },
        ], questionJa: '{二人|ふたり}は{今日|きょう}{一緒|いっしょ}に{何|なに}をしますか。', answer: 1 },
        { label: '5番', setupJa: '{大学|だいがく}で{話|はな}しています。{日本|にほん}から {男|おとこ}の{留学生|りゅうがくせい}の{国|くに}まで、{飛行機|ひこうき}で{何時間|なんじかん}かかりますか。', setupPt: 'Na faculdade. Quantas horas de avião do Japão até o país do estudante estrangeiro?', lines: [
          { speaker: 'F', ja: 'ジョージさん、{冬休|ふゆやす}みに{国|くに}へ{帰|かえ}りますか。', pt: 'George, vai voltar ao seu país nas férias de inverno?' },
          { speaker: 'M', ja: 'はい。', pt: 'Sim.' },
          { speaker: 'F', ja: '{日本|にほん}からジョージさんの{国|くに}まで、{飛行機|ひこうき}でどのぐらいですか。5{時間|じかん}か 6{時間|じかん}ぐらいですか。', pt: 'Do Japão até seu país, quanto tempo de avião? Umas 5 ou 6 horas?' },
          { speaker: 'M', ja: 'もっと{早|はや}いですよ。3{時間半|じかんはん}です。', pt: 'É mais rápido. São 3 horas e meia.' },
        ], questionJa: '{日本|にほん}から {男|おとこ}の{留学生|りゅうがくせい}の{国|くに}まで、{飛行機|ひこうき}で{何時間|なんじかん}かかりますか。', answer: 2 },
        { label: '6番', setupJa: '{電話|でんわ}で {女|おんな}の{学生|がくせい}が{話|はな}しています。{今晩|こんばん}、{何|なん}の{店|みせ}にご{飯|はん}を{食|た}べに{行|い}きますか。', setupPt: 'Ao telefone. Em que tipo de restaurante eles vão jantar hoje à noite?', lines: [
          { speaker: 'F', ja: 'もしもし、{森|もり}さん？ {大田|おおた}です。{今晩|こんばん}クラスのみんなとご{飯|はん}を{食|た}べに{行|い}きますね。{今朝|けさ}{学校|がっこう}では、{駅|えき}の{前|まえ}のカレー{屋|や}に{来|き}てくださいと{言|い}いましたが、{今日|きょう}は{店|みせ}が{休|やす}みです。だから、ピザ{屋|や}に{行|い}きます。{先週|せんしゅう}{一緒|いっしょ}に{行|い}ったすし{屋|や}の{前|まえ}のビルです。1{階|かい}にそば{屋|や}があるビルで、ビルの3{階|がい}です。', pt: 'Alô, Mori? É a Ota. Hoje à noite vamos jantar com a turma. De manhã eu disse para ir ao curry perto da estação, mas hoje ele está fechado. Então vamos à pizzaria. É no prédio em frente ao sushi onde fomos semana passada. No prédio que tem uma casa de soba no térreo, no 3º andar.' },
        ], questionJa: '{今晩|こんばん}、{何|なん}の{店|みせ}にご{飯|はん}を{食|た}べに{行|い}きますか。', answer: 2 },
      ],
    },
    {
      id: 'n5-listening-q3',
      title: 'もんだい３ — Expressões em situação',
      descriptionPt: 'Olhe a cena e escolha o que a pessoa (seta →) deve dizer. (5 itens + exemplo, 3 opções cada)',
      src: '/audio/N5/N5Q3.mp3',
      script: [
        { label: '例', setupJa: 'レストランでお{店|みせ}の{人|ひと}を{呼|よ}びます。{何|なん}と{言|い}いますか。', setupPt: 'No restaurante, você chama o garçom. O que diz?', lines: [
          { speaker: '1', ja: 'いらっしゃいませ。', pt: '1. Bem-vindo. (é o que o atendente diz)' },
          { speaker: '2', ja: '{失礼|しつれい}しました。', pt: '2. Desculpe o incômodo.' },
          { speaker: '3', ja: 'すみません。', pt: '3. Com licença / Ô, garçom.' },
        ], questionJa: '', answer: 3 },
        { label: '1番', setupJa: '{山|やま}を{歩|ある}いています。{友達|ともだち}と{一緒|いっしょ}に{休|やす}みたいです。{何|なん}と{言|い}いますか。', setupPt: 'Caminhando na montanha, você quer descansar junto com o amigo. O que diz?', lines: [
          { speaker: '1', ja: 'あまり{休|やす}みません。', pt: '1. Não descanso muito.' },
          { speaker: '2', ja: '{今|いま}、{休|やす}んでいますか。', pt: '2. Você está descansando agora?' },
          { speaker: '3', ja: '{少|すこ}し{休|やす}みましょう。', pt: '3. Vamos descansar um pouco.' },
        ], questionJa: '', answer: 3 },
        { label: '2番', setupJa: '{友達|ともだち}にチョコレートをあげます。{何|なん}と{言|い}いますか。', setupPt: 'Você vai oferecer chocolate ao amigo. O que diz?', lines: [
          { speaker: '1', ja: 'どんなチョコレートですか。', pt: '1. Que tipo de chocolate é?' },
          { speaker: '2', ja: 'チョコレート、あげませんか。', pt: '2. Não dá chocolate (a alguém)?' },
          { speaker: '3', ja: 'チョコレート、いかがですか。', pt: '3. Aceita um chocolate?' },
        ], questionJa: '', answer: 3 },
        { label: '3番', setupJa: 'エレベーターに{乗|の}りたいです。{何|なん}と{言|い}いますか。', setupPt: 'Você quer entrar no elevador (que alguém segura). O que diz?', lines: [
          { speaker: '1', ja: 'あ、{乗|の}ります。', pt: '1. Ah, eu vou entrar.' },
          { speaker: '2', ja: 'さあ、{乗|の}りましょう。', pt: '2. Vamos, entremos.' },
          { speaker: '3', ja: 'すぐ{乗|の}ってください。', pt: '3. Entre logo, por favor.' },
        ], questionJa: '', answer: 1 },
        { label: '4番', setupJa: '{前|まえ}に{自転車|じてんしゃ}があります。{友達|ともだち}は{見|み}ていません。{何|なん}と{言|い}いますか。', setupPt: 'Há uma bicicleta à frente; o amigo não a viu. O que você diz?', lines: [
          { speaker: '1', ja: '{見|み}ませんよ。', pt: '1. Eu não vejo.' },
          { speaker: '2', ja: '{危|あぶ}ないですよ。', pt: '2. Cuidado, é perigoso!' },
          { speaker: '3', ja: '{痛|いた}いですよ。', pt: '3. Está doendo.' },
        ], questionJa: '', answer: 2 },
        { label: '5番', setupJa: 'レストランでコーヒーが{来|き}ません。{長|なが}い{時間|じかん}{待|ま}っています。{店|みせ}の{人|ひと}に{何|なん}と{言|い}いますか。', setupPt: 'O café não chega; você espera há muito tempo. O que diz ao garçom?', lines: [
          { speaker: '1', ja: 'コーヒーを{持|も}ってきますよ。', pt: '1. Eu trago o café.' },
          { speaker: '2', ja: 'コーヒーはまだですか。', pt: '2. O café ainda não veio?' },
          { speaker: '3', ja: 'コーヒーを{飲|の}みませんか。', pt: '3. Não quer tomar café?' },
        ], questionJa: '', answer: 2 },
      ],
    },
    {
      id: 'n5-listening-q4',
      title: 'もんだい４ — Respostas rápidas',
      descriptionPt: 'Sem imagem. Ouça a fala e escolha a resposta mais natural. (6 itens + exemplo, 3 opções cada)',
      src: '/audio/N5/N5Q4.mp3',
      script: [
        { label: '例', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'お{国|くに}はどちらですか。', pt: 'De que país você é?' },
          { speaker: '1', ja: 'あちらです。', pt: '1. É para lá.' },
          { speaker: '2', ja: 'アメリカです。', pt: '2. Dos Estados Unidos.' },
          { speaker: '3', ja: '{部屋|へや}です。', pt: '3. É o quarto.' },
        ], questionJa: '', answer: 2 },
        { label: '1番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'リーさん、リーさんはいつ{日本|にほん}に{来|き}ましたか。', pt: 'Lee, quando você veio ao Japão?' },
          { speaker: '1', ja: '{去年|きょねん}です。', pt: '1. Ano passado.' },
          { speaker: '2', ja: '5{時間|じかん}です。', pt: '2. Cinco horas.' },
          { speaker: '3', ja: '3か{月|げつ}です。', pt: '3. Três meses.' },
        ], questionJa: '', answer: 1 },
        { label: '2番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: '{昼|ひる}ご{飯|はん}はもう{食|た}べましたか。', pt: 'Você já almoçou?' },
          { speaker: '1', ja: 'そうしましょう。', pt: '1. Vamos fazer assim.' },
          { speaker: '2', ja: '{食堂|しょくどう}ですよ。', pt: '2. É no refeitório.' },
          { speaker: '3', ja: 'いえ、{今|いま}からです。', pt: '3. Não, vou agora.' },
        ], questionJa: '', answer: 3 },
        { label: '3番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: 'おいしいクッキーですね。どこで{買|か}いましたか。', pt: 'Que biscoito gostoso. Onde você comprou?' },
          { speaker: '1', ja: 'デパートで{買|か}いましょう。', pt: '1. Vamos comprar na loja.' },
          { speaker: '2', ja: 'はい、そうです。', pt: '2. Sim, isso mesmo.' },
          { speaker: '3', ja: 'わたしが{作|つく}りました。', pt: '3. Fui eu que fiz.' },
        ], questionJa: '', answer: 3 },
        { label: '4番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'あした{京都|きょうと}に{行|い}きますね。{何時|なんじ}の{飛行機|ひこうき}に{乗|の}りますか。', pt: 'Amanhã você vai a Kyoto, né? Que avião (de que horas) vai pegar?' },
          { speaker: '1', ja: 'はい、{飛行機|ひこうき}で{行|い}きますよ。', pt: '1. Sim, vou de avião.' },
          { speaker: '2', ja: '4{時半|じはん}の{飛行機|ひこうき}です。', pt: '2. O avião das 4h30.' },
          { speaker: '3', ja: '1{時間|じかん}ぐらい{乗|の}ります。', pt: '3. Fico umas 1 hora no voo.' },
        ], questionJa: '', answer: 2 },
        { label: '5番', setupJa: '', setupPt: '', lines: [
          { speaker: 'F', ja: 'すみません。{田中|たなか}さんの{電話|でんわ}{番号|ばんごう}を{知|し}っていますか。', pt: 'Com licença. Você sabe o número do Tanaka?' },
          { speaker: '1', ja: 'はい、{分|わ}かりますよ。', pt: '1. Sim, eu sei.' },
          { speaker: '2', ja: 'え、{知|し}りませんでした。', pt: '2. Ué, eu não sabia.' },
          { speaker: '3', ja: '{電話|でんわ}をしていません。', pt: '3. Não estou telefonando.' },
        ], questionJa: '', answer: 1 },
        { label: '6番', setupJa: '', setupPt: '', lines: [
          { speaker: 'M', ja: '{夏休|なつやす}みはどこかへ{出掛|でか}けましたか。', pt: 'Você saiu para algum lugar nas férias de verão?' },
          { speaker: '1', ja: '{旅行|りょこう}しましょう。', pt: '1. Vamos viajar.' },
          { speaker: '2', ja: 'どこへも{行|い}きませんでした。', pt: '2. Não fui a lugar nenhum.' },
          { speaker: '3', ja: '{外国|がいこく}から{来|き}ました。', pt: '3. Vim do exterior.' },
        ], questionJa: '', answer: 2 },
      ],
    },
  ],
}

export const n5: Level = {
  id: 'N5',
  titlePt: 'JLPT N5 — Iniciante',
  descriptionPt:
    'O primeiro nível do JLPT. Avalia o japonês básico do dia a dia: hiragana, katakana, kanji elementares e frases simples. Aqui você tem as quatro áreas do exame com exercícios, explicações em português e os áudios oficiais com transcrição.',
  sections: [vocabulary, grammar, reading, listening],
}
