import {
  buildGenki2Audios,
  genki2Group,
  genki2Question,
  genki2QuestionAudio,
} from './genki-2-lesson-utils'
import type { Question, ScriptItem, Section, StudyNote } from './types'

const LESSON = 18

const q = (
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extras: Partial<Pick<Question, 'assessment' | 'audio' | 'context' | 'helpPt' | 'translationPt'>> = {},
) => genki2Question(LESSON, id, number, prompt, choices, answer, explanationPt, extras)

const audio = (code: string, title: string) => genki2QuestionAudio(LESSON, code, title)

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situações da lição',
    bodyPt: 'John substitui um colega no restaurante, resolve um acidente com uma cliente e conversa com o gerente depois do expediente. A lição ensina a descrever estados e mudanças, falar de ações concluídas ou lamentáveis, explicar relações automáticas de causa e efeito, realizar duas ações ao mesmo tempo e expressar arrependimento.',
    helpPt: 'Acompanhe os três diálogos como um turno de trabalho: preparar o restaurante, resolver um problema e refletir sobre estudo e trabalho. Cada cena introduz uma estrutura que reaparece nos exercícios.',
  },
  {
    title: '1. Pares transitivo e intransitivo',
    bodyPt: 'O verbo transitivo descreve alguém agindo sobre algo e normalmente usa `を`: `たけしさんが{電気|でんき}をつけました。` O intransitivo descreve a mudança sofrida pela coisa e usa `が`: `{電気|でんき}がつきました。` Pares centrais: `開ける／開く`, `閉める／閉まる`, `入れる／入る`, `出す／出る`, `つける／つく`, `消す／消える`, `壊す／壊れる`, `汚す／汚れる`, `落とす／落ちる` e `沸かす／沸く`.',
    helpPt: 'Pergunte “alguém fez isso com o objeto?” Se sim, use o transitivo com `を`. Se o foco é “o que aconteceu com a coisa?”, use o intransitivo com `が`. Memorize cada par dentro de duas frases, não como palavras isoladas.',
  },
  {
    title: '2. Verbo intransitivo + ている',
    bodyPt: 'Com verbo de atividade, `ている` mostra a ação em andamento: `ウディさんは窓を開けています。` Com um intransitivo de mudança, mostra o estado que resultou dela: `窓が開いています。` Assim, `パソコンが壊れています` significa que o computador está quebrado, não que está quebrando naquele instante.',
    helpPt: 'Imagine uma fotografia tirada depois da mudança. A porta abriu; na fotografia, `ドアが開いている`. Para enfatizar a pessoa executando a ação agora, use o par transitivo: `メアリーさんがドアを開けている`.',
  },
  {
    title: '3. 〜てしまう',
    bodyPt: '`てしまう` tem dois usos ligados a um resultado completo: concluir totalmente (`本を読んでしまいました`) ou relatar algo involuntário/lamentável (`電車にかばんを忘れてしまいました`). Na fala, `てしまう` contrai para `ちゃう`, e `でしまう` para `じゃう`: `食べちゃった`, `飲んじゃった`.',
    helpPt: 'O contexto decide entre “terminei” e “acabei fazendo”. Procure sinais de intenção: um plano levado até o fim favorece conclusão; acidente, perda, esquecimento ou desculpa favorecem arrependimento.',
  },
  {
    title: '4. 〜と — resultado automático ou recorrente',
    bodyPt: 'Use predicado em forma curta não passada + `と` quando A leva regularmente ou inevitavelmente a B: `このスイッチを押すと、電気がつきます。` Também descreve hábitos e relações de causa e efeito: `秋になると木が赤くなります。` O evento B acontece no momento de A ou depois dele; a oração antes de `と` permanece no presente curto.',
    helpPt: 'Pense em um botão: sempre que A acontece, B se segue. Para pedido, convite, ordem ou decisão voluntária específica, prefira `たら` ou outra estrutura; `と` soa como regra, mecanismo ou consequência previsível.',
  },
  {
    title: '5. Radical verbal + ながら',
    bodyPt: '`ながら` liga duas ações simultâneas feitas pelo mesmo sujeito. Retire `ます` e acrescente `ながら`: `音楽を聞きながら、日本語を勉強します。` A ação depois de `ながら` costuma ser a principal e carrega tempo e polidez.',
    helpPt: 'Teste o sujeito: se uma pessoa faz A e outra faz B, `ながら` não serve. Compare `メアリーが買い物をするとき、たけしは掃除する` (sujeitos diferentes) com `たけしは歌いながら掃除する` (mesmo sujeito).',
  },
  {
    title: '6. 〜ばよかったです — arrependimento',
    bodyPt: '`〜ばよかった` significa “eu deveria ter feito”. A forma negativa `〜なければよかった` significa “eu não deveria ter feito”. Forme `ば` a partir da forma curta presente: `食べる→食べれば`, `行く→行けば`, `買う→買えば`, `する→すれば`, `くる→くれば`. Na negativa, troque `ない` por `なければ`: `行かなければ`.',
    helpPt: 'Defina primeiro o fato real. Se você não fez X e lamenta, use X afirmativo + `ばよかった`. Se fez X e lamenta, use X negativo + `なければよかった`.',
  },
  {
    title: 'Vocabulário e leitura',
    bodyPt: 'Vocabulário de estados e trabalho: `カーテン`, `冷蔵庫`, `スイッチ`, `しょう油`, `タオル`, `スカート`, `日記`, `携帯電話`, `桜`, `虫`, `家賃`, `外`, `後`, `夕方`, `開く`, `閉まる`, `壊れる`, `汚れる`, `落ちる`, `沸く`, `頼む`, `押す`, `落とす`, `沸かす`, `片付ける` e `お疲れ様`. A leitura apresenta a rotina universitária de Hashimoto, seus gastos, empregos, clube, namoro e arrependimento antes das provas.',
    helpPt: 'Organize o vocabulário por cena: abrir/fechar e ligar/desligar; acidente e limpeza; fim do expediente; moradia e vida universitária. Para os pares verbais, sempre escreva também a partícula `を` ou `が`.',
  },
]

const dialogueOne: ScriptItem[] = [{
  label: '会話 I',
  lines: [
    { speaker: '店長', ja: 'ジョン、今日は{森田|もりた}くん、かぜで{来|こ}られないそうだ。{夕方|ゆうがた}になると{忙|いそが}しくなるから、{頼|たの}むよ。', pt: 'John, parece que Morita está resfriado e não consegue vir hoje. No fim da tarde fica movimentado, então conto com você.' },
    { speaker: 'ジョン', ja: 'はい。がんばります。', pt: 'Sim. Vou me esforçar.' },
    { speaker: '店長', ja: 'まず、{冷蔵庫|れいぞうこ}に{野菜|やさい}が{入|はい}っているから、{出|だ}しておいて。それから、{外|そと}の{電気|でんき}はついている？', pt: 'Primeiro, há verduras na geladeira; deixe-as para fora. Depois, a luz de fora está acesa?' },
    { speaker: 'ジョン', ja: 'いいえ、ついていません。つけましょうか。', pt: 'Não, não está. Quer que eu acenda?' },
    { speaker: '店長', ja: 'うん。そこのスイッチを{押|お}すとつくよ。', pt: 'Sim. Quando aperta esse interruptor, ela acende.' },
    { speaker: 'ジョン', ja: 'はい。', pt: 'Certo.' },
  ],
}]

const dialogueTwo: ScriptItem[] = [{
  label: '会話 II',
  lines: [
    { speaker: '客', ja: 'すみません。しょう油を{落|お}としちゃったんです。ごめんなさい。', pt: 'Com licença. Acabei derrubando o molho de soja. Desculpe.' },
    { speaker: 'ジョン', ja: 'いいえ、{大丈夫|だいじょうぶ}です。あっ、スカートが{汚|よご}れてしまいましたね。', pt: 'Não se preocupe. Ah, sua saia acabou ficando suja.' },
    { speaker: '客', ja: '{本当|ほんとう}だ。どうしよう。', pt: 'É verdade. O que vou fazer?' },
    { speaker: 'ジョン', ja: '{今|いま}すぐ、タオルを{持|も}ってきます。', pt: 'Vou trazer uma toalha agora mesmo.' },
  ],
}]

const dialogueThree: ScriptItem[] = [{
  label: '会話 III',
  lines: [
    { speaker: '店長', ja: '{今日|きょう}はジョンのおかげで、{助|たす}かったよ。', pt: 'Hoje você me ajudou muito, John.' },
    { speaker: 'ジョン', ja: 'いいえ。でも{本当|ほんとう}に{忙|いそが}しかったですね。', pt: 'Não foi nada. Mas hoje estava realmente corrido.' },
    { speaker: '店長', ja: 'あしたは{学校|がっこう}があるんだろう。アルバイトをしながら{学校|がっこう}に{行|い}くのは{大変|たいへん}だね。', pt: 'Você tem aula amanhã, não é? É difícil estudar enquanto mantém um trabalho.' },
    { speaker: 'ジョン', ja: 'ええ、{時々|ときどき}、{遅刻|ちこく}しちゃうんですよ。', pt: 'Sim. Às vezes acabo me atrasando.' },
    { speaker: '店長', ja: 'ぼくも{学生|がくせい}の{時|とき}はよく{授業|じゅぎょう}をサボったよ。もっと{勉強|べんきょう}すればよかったなあ。{後|あと}はぼくが{片付|かたづ}けるから。', pt: 'Quando eu era estudante, faltava muito às aulas. Eu deveria ter estudado mais. Eu termino de arrumar o resto.' },
    { speaker: 'ジョン', ja: 'すみません。じゃあ、お{先|さき}に{失礼|しつれい}します。お{疲|つか}れさまでした。', pt: 'Desculpe. Então, com licença, vou indo antes. Obrigado pelo trabalho de hoje.' },
    { speaker: '店長', ja: 'お{疲|つか}れさま。', pt: 'Obrigado pelo trabalho.' },
  ],
}]

const reading: ScriptItem[] = [{
  label: '橋本くんの大学生活',
  lines: [
    { speaker: 'ナレーション', ja: '{橋本|はしもと}くんは{大学|だいがく}{三年生|さんねんせい}だ。{大学|だいがく}の{近|ちか}くのワンルームマンションに{住|す}んでいる。{家賃|やちん}は{一か月|いっかげつ}{五万円|ごまんえん}だ。{食費|しょくひ}、{電気代|でんきだい}などを{入|い}れて、{一か月|いっかげつ}の{生活費|せいかつひ}は{十万円|じゅうまんえん}ぐらいだ。{毎月|まいつき}、{両親|りょうしん}が{七万円|ななまんえん}{送|おく}ってくれる。', pt: 'Hashimoto está no terceiro ano da universidade e mora em um apartamento de um cômodo perto dela. O aluguel é 50 mil ienes; com alimentação e eletricidade, gasta cerca de 100 mil por mês. Seus pais enviam 70 mil ienes mensalmente.' },
    { speaker: 'ナレーション', ja: '{今|いま}、{家庭教師|かていきょうし}をしたり、{大学|だいがく}の{食堂|しょくどう}でアルバイトをしたりしている。{家庭教師|かていきょうし}は{一週間|いっしゅうかん}に{一回|いっかい}、{食堂|しょくどう}は{三日|みっか}だ。{時々|ときどき}、{引|ひ}っ{越|こ}しなどの{力仕事|ちからしごと}もする。アルバイトをしながら{勉強|べんきょう}するのは{大変|たいへん}だ。{時々|ときどき}{遅刻|ちこく}したり、{授業|じゅぎょう}をサボったりしてしまう。', pt: 'Ele trabalha como professor particular e no refeitório da universidade. Dá aula uma vez por semana e trabalha no refeitório três dias; às vezes também faz serviços pesados de mudança. É difícil conciliar trabalho e estudo, e ele acaba chegando atrasado ou faltando à aula.' },
    { speaker: 'ナレーション', ja: '{橋本|はしもと}くんは{空手|からて}のサークルに{入|はい}っている。{一週間|いっしゅうかん}に{三日|みっか}、{練習|れんしゅう}をする。また、{時々|ときどき}サークルのみんなと{飲|の}みに{行|い}く。「お{酒|さけ}は{好|す}きじゃないから、{初|はじ}めはあまり{行|い}きたくなかったんです。でも、そのおかげで、{先輩|せんぱい}たちと{親|した}しくなれましたよ。{今|いま}の{彼女|かのじょ}にも{会|あ}えたんですよ。」', pt: 'Hashimoto participa do clube de caratê e treina três dias por semana. Às vezes sai para beber com o grupo. No começo não queria ir porque não gosta de álcool, mas isso o aproximou dos veteranos e permitiu que conhecesse sua atual namorada.' },
    { speaker: 'ナレーション', ja: '{来週|らいしゅう}から{試験|しけん}が{始|はじ}まる。{同|おな}じクラスの{友|とも}だちにノートを{貸|か}してもらって、{図書館|としょかん}で{勉強|べんきょう}するつもりだ。「もっと{早|はや}く{勉強|べんきょう}を{始|はじ}めればよかった」と{思|おも}っている。{橋本|はしもと}くんは{今|いま}、{試験|しけん}が{終|お}わってから、サークルのみんなと{旅行|りょこう}に{行|い}くのを{楽|たの}しみにしている。', pt: 'As provas começam na próxima semana. Ele pretende pegar emprestado o caderno de um colega e estudar na biblioteca; lamenta não ter começado mais cedo. Agora espera viajar com o clube depois das provas.' },
  ],
}]

for (const item of [...dialogueOne, ...dialogueTwo]) {
  for (const line of item.lines) {
    line.ja = line.ja
      .replace('\u4eca\u65e5', '{\u4eca\u65e5|\u304d\u3087\u3046}')
      .replace('\u3057\u3087\u3046\u6cb9', '\u3057\u3087\u3046{\u6cb9|\u3086}')
  }
}

const dialogueQuestions = [
  q('dialogue-1', 1, 'Por que Morita não pode trabalhar hoje?', ['Está viajando', 'Está resfriado', 'Tem prova', 'Perdeu o trem'], 2, 'O gerente diz `かぜで来られないそうだ`.', { audio: audio('K18_01', 'Diálogo I — preparação do restaurante') }),
  q('dialogue-2', 2, 'O que John deve retirar da geladeira?', ['Toalhas', 'Verduras', 'Sobremesas', 'Bebidas'], 2, '`冷蔵庫に野菜が入っているから、出しておいて`.', { audio: audio('K18_01', 'Diálogo I — preparação do restaurante') }),
  q('dialogue-3', 3, 'Como se acende a luz de fora?', ['Abrindo a porta', 'Apertando o interruptor', 'Ligando para o gerente', 'Puxando o fio'], 2, '`スイッチを押すとつく` descreve o mecanismo.', { audio: audio('K18_01', 'Diálogo I — preparação do restaurante') }),
  q('dialogue-4', 4, 'O que a cliente derrubou?', ['Sopa', 'Molho de soja', 'Café', 'Água'], 2, 'Ela diz `しょう油を落としちゃった`.', { audio: audio('K18_03', 'Diálogo II — acidente com a cliente') }),
  q('dialogue-5', 5, 'O que John vai buscar?', ['Uma saia', 'Uma toalha', 'Um telefone', 'Um prato'], 2, 'John responde `今すぐ、タオルを持ってきます`.', { audio: audio('K18_03', 'Diálogo II — acidente com a cliente') }),
  q('dialogue-6', 6, 'Que dificuldade John menciona?', ['Não entende clientes', 'Às vezes se atrasa para a aula', 'Não sabe cozinhar', 'Perde o salário'], 2, 'Ele diz `時々、遅刻しちゃう`.', { audio: audio('K18_05', 'Diálogo III — depois do expediente') }),
  q('dialogue-7', 7, 'Do que o gerente se arrepende?', ['De ter trabalhado no restaurante', 'De não ter estudado mais', 'De ter faltado ao trabalho', 'De ter contratado John'], 2, '`もっと勉強すればよかった` expressa esse arrependimento.', { audio: audio('K18_05', 'Diálogo III — depois do expediente') }),
  q('dialogue-8', 8, 'Quem terminará de arrumar o restaurante?', ['John', 'Morita', 'O gerente', 'A cliente'], 3, 'O gerente diz `後はぼくが片付けるから`.', { audio: audio('K18_05', 'Diálogo III — depois do expediente') }),
]

const grammarQuestions = [
  q('grammar-1', 9, '“Takeshi acendeu a luz.”', ['たけしさんが電気がつきました', 'たけしさんが電気をつけました', '電気をつきました', '電気がつけています'], 2, 'O agente age sobre a luz: transitivo `つける` com `を`.'),
  q('grammar-2', 10, '“A luz acendeu.”', ['電気をつけました', '電気がつきました', '電気につけました', '電気をつきました'], 2, 'A luz é o elemento que muda: intransitivo `つく` com `が`.'),
  q('grammar-3', 11, 'Par correto de “abrir algo / algo abrir”:', ['開く／開ける', '開ける／開く', '閉まる／開く', '入れる／出す'], 2, '`開ける` é transitivo; `開く` é intransitivo.'),
  q('grammar-4', 12, 'Par correto de “tirar / sair”:', ['出す／出る', '出る／出す', '入れる／入る', '落とす／出る'], 1, '`出す` age sobre algo; `出る` descreve algo saindo.'),
  q('grammar-5', 13, 'コンピューター（　）壊れました。', ['を', 'が', 'に', 'で'], 2, '`壊れる` é intransitivo; o computador recebe `が`.'),
  q('grammar-6', 14, '弟がコンピューター（　）壊しました。', ['を', 'が', 'に', 'から'], 1, '`壊す` é transitivo; o objeto recebe `を`.'),
  q('grammar-7', 15, '“A janela está aberta.”', ['窓を開けています', '窓が開いています', '窓が開けます', '窓を開いています'], 2, 'Intransitivo + `ている` mostra o estado resultante.'),
  q('grammar-8', 16, 'ウディさんは窓を開けています。', ['A janela está aberta, sem foco em quem', 'Uday está abrindo a janela', 'Uday fechou a janela', 'A janela abriu sozinha'], 2, 'Transitivo `開ける` + `ている` descreve a ação em andamento.'),
  q('grammar-9', 17, 'このパソコンは壊れています。', ['Está quebrando algo', 'Está quebrado', 'Vai quebrar algo', 'Foi consertado'], 2, '`壊れている` é o estado que resultou da quebra.'),
  q('grammar-10', 18, '本を読んでしまいました。', ['Comecei a ler', 'Terminei de ler o livro', 'Pretendo ler', 'Não li'], 2, 'Neste contexto, `てしまう` enfatiza conclusão total.'),
  q('grammar-11', 19, '電車にかばんを忘れてしまいました。', ['Deixei a bolsa no trem sem querer', 'Guardei a bolsa no trem', 'Quero esquecer a bolsa', 'Levei a bolsa'], 1, 'A estrutura marca um resultado involuntário e lamentável.'),
  q('grammar-12', 20, 'Contração casual de `食べてしまった`:', ['食べてた', '食べちゃった', '食べじゃった', '食べといた'], 2, '`てしまう` contrai para `ちゃう`.'),
  q('grammar-13', 21, 'Contração casual de `飲んでしまった`:', ['飲んちゃった', '飲んじゃった', '飲みました', '飲んでた'], 2, '`でしまう` contrai para `じゃう`.'),
  q('grammar-14', 22, 'このスイッチを押すと、（　）。', ['電気がつきます', '電気をつけてください', '電気がつきましょう', '電気がつきたいです'], 1, '`と` combina com resultado automático, não com pedido ou convite.'),
  q('grammar-15', 23, 'Antes de `と` condicional, o verbo fica normalmente:', ['na forma passada', 'na forma curta não passada', 'na forma `て`', 'no imperativo'], 2, 'A primeira oração usa forma curta presente mesmo quando B relata um hábito passado.'),
  q('grammar-16', 24, '秋になると、木が（　）。', ['赤くなります', '赤くしましょう', '赤くなりたいです', '赤くなってください'], 1, 'A mudança sazonal é recorrente e natural.'),
  q('grammar-17', 25, 'Qual consequência é inadequada depois de `と` neste uso?', ['春になります', '道が込みます', '一緒に行きましょう', '電気がつきます'], 3, 'Convites voluntários como `〜ましょう` não combinam com o resultado automático de `と`.'),
  q('grammar-18', 26, '聞きます → forma antes de `ながら`:', ['聞くながら', '聞きながら', '聞いてながら', '聞けながら'], 2, 'Use o radical de `聞きます`: `聞き + ながら`.'),
  q('grammar-19', 27, '音楽を聞きながら、日本語を勉強します。', ['Estudo e depois ouço', 'Estudo japonês enquanto ouço música', 'Ouço sem estudar', 'Estudarei se houver música'], 2, 'As duas ações são simultâneas e têm o mesmo sujeito.'),
  q('grammar-20', 28, 'Qual frase viola a regra de `ながら`?', ['歌いながら料理する', '歩きながら話す', 'メアリーが買い物をしながら、たけしが掃除する', '働きながら学校に行く'], 3, '`ながら` exige o mesmo sujeito nas duas ações.'),
  q('grammar-21', 29, '行く → forma `ば`:', ['行かば', '行きば', '行けば', '行ったらば'], 3, 'Verbo u: troque a mora final para a coluna `e` e acrescente `ば`.'),
  q('grammar-22', 30, '食べる → forma `ば`:', ['食べらば', '食べれば', '食べけば', '食べてば'], 2, 'Verbo ru: retire `る` e acrescente `れば`.'),
  q('grammar-23', 31, 'する／くる → formas `ば`:', ['しば／きば', 'すれば／くれば', 'せば／これば', 'したら／きたら'], 2, 'As formas são `すれば` e `くれば`.'),
  q('grammar-24', 32, '“Eu deveria ter estudado mais.”', ['もっと勉強すればよかった', 'もっと勉強しなければよかった', 'もっと勉強してしまう', 'もっと勉強すると'], 1, 'Não estudou o suficiente e lamenta: afirmativo `すればよかった`.'),
  q('grammar-25', 33, '“Eu não deveria ter terminado com ela.”', ['彼女と別れればよかった', '彼女と別れなければよかった', '彼女と別れてもいい', '彼女と別れると'], 2, 'Fez a ação e lamenta: negativa `なければよかった`.'),
  q('grammar-26', 34, '買わない → forma condicional negativa:', ['買わないば', '買わなければ', '買えなければ', '買わなかったらば'], 2, 'Troque o `ない` final por `なければ`.'),
]

const vocabularyReadingQuestions = [
  q('vocabulary-1', 35, '{冷蔵庫|れいぞうこ}', ['geladeira', 'interruptor', 'cortina', 'aluguel'], 1, '`冷蔵庫` é geladeira.'),
  q('vocabulary-2', 36, '{携帯電話|けいたいでんわ}', ['telefone fixo', 'celular', 'diário', 'carregador'], 2, '`携帯電話` significa telefone celular.'),
  q('vocabulary-3', 37, '{家賃|やちん}', ['conta de luz', 'aluguel', 'salário', 'alimentação'], 2, '`家賃` é o valor pago pela moradia.'),
  q('vocabulary-4', 38, '{片付|かたづ}ける', ['arrumar; colocar em ordem', 'quebrar', 'derrubar', 'ferver'], 1, '`片付ける` é arrumar e guardar.'),
  q('vocabulary-5', 39, 'お{疲|つか}れさまでした。', ['Boa viagem', 'Obrigado pelo trabalho de hoje', 'Parabéns', 'Desculpe o atraso'], 2, 'Expressão usada ao reconhecer o trabalho e encerrar o expediente.'),
  q('reading-1', 40, 'Quanto Hashimoto gasta aproximadamente por mês?', ['50 mil ienes', '70 mil ienes', '100 mil ienes', '170 mil ienes'], 3, 'O texto diz `一か月の生活費は、十万円ぐらい`.', { audio: audio('Y18', 'Leitura — A vida universitária de Hashimoto') }),
  q('reading-2', 41, 'Quanto os pais enviam a Hashimoto todo mês?', ['30 mil', '50 mil', '70 mil', '100 mil'], 3, '`毎月、両親が七万円送ってくれる`.', { audio: audio('Y18', 'Leitura — A vida universitária de Hashimoto') }),
  q('reading-3', 42, 'Quais trabalhos ele faz regularmente?', ['Professor particular e refeitório', 'Restaurante e hotel', 'Loja e biblioteca', 'Construção e hospital'], 1, 'Ele é professor particular e trabalha no refeitório; mudanças são ocasionais.', { audio: audio('Y18', 'Leitura — A vida universitária de Hashimoto') }),
  q('reading-4', 43, 'Que atividade de clube Hashimoto pratica?', ['Futebol', 'Caratê', 'Música', 'Teatro'], 2, '`空手のサークル` é o clube de caratê.', { audio: audio('Y18', 'Leitura — A vida universitária de Hashimoto') }),
  q('reading-5', 44, 'Que resultado positivo veio das saídas com o clube?', ['Conseguiu emprego', 'Aprendeu a beber', 'Aproximou-se dos veteranos e conheceu a namorada', 'Mudou de apartamento'], 3, 'O texto usa `そのおかげで` para apresentar os dois resultados.', { audio: audio('Y18', 'Leitura — A vida universitária de Hashimoto') }),
  q('reading-6', 45, 'Do que Hashimoto se arrepende antes das provas?', ['De entrar no clube', 'De não começar a estudar mais cedo', 'De morar sozinho', 'De trabalhar no refeitório'], 2, '`もっと早く勉強を始めればよかった`.', { audio: audio('Y18', 'Leitura — A vida universitária de Hashimoto') }),
]

const listeningQuestions = [
  q('listening-a1', 46, 'W18-A: Por que Yui voltou sem jantar?', ['O restaurante estava fechado', 'Perdeu o dinheiro', 'Os amigos cancelaram', 'Não estava com fome'], 1, 'Ela foi comer com amigos, mas o estabelecimento não estava aberto.', { audio: audio('W18_A', 'Workbook W18-A — comida que acabou') }),
  q('listening-a2', 47, 'W18-A: Quem comeu o macarrão instantâneo?', ['A mãe', 'O pai', 'Yui', 'O vizinho'], 2, '`お父さんが食べちゃったよ`.', { audio: audio('W18_A', 'Workbook W18-A — comida que acabou') }),
  q('listening-a3', 48, 'W18-A: O que aconteceu com o bolo de Yui?', ['O pai comeu sozinho', 'Todos comeram no dia anterior', 'Foi dado aos vizinhos', 'Ainda está na geladeira'], 2, 'A mãe lembra que todos terminaram o bolo ontem.', { audio: audio('W18_A', 'Workbook W18-A — comida que acabou') }),
  q('listening-a4', 49, 'W18-A: A quem foram dados os biscoitos?', ['Aos colegas', 'Às crianças vizinhas', 'Ao pai', 'À professora'], 2, '`隣の子供にあげちゃった`.', { audio: audio('W18_A', 'Workbook W18-A — comida que acabou') }),
  q('listening-a5', 50, 'W18-A: Qual é o arrependimento final de Yui?', ['Deveria ter comprado comida na loja de conveniência antes de voltar', 'Não deveria ter saído', 'Deveria ter ligado ao pai', 'Não deveria ter comprado bolo'], 1, 'Ela conclui `家に帰る前に、コンビニで食べるものを買えばよかった`.', { audio: audio('W18_A', 'Workbook W18-A — comida que acabou') }),
  q('listening-b1', 51, 'W18-B: Por que o cliente liga ao suporte?', ['A internet está lenta', 'O computador parece quebrado', 'Esqueceu a senha', 'Perdeu o arquivo'], 2, 'Ele diz `コンピューターが壊れてしまった`.', { audio: audio('W18_B', 'Workbook W18-B — suporte do computador') }),
  q('listening-b2', 52, 'W18-B: Como estão a luz vermelha e a tela?', ['As duas ligadas', 'Luz desligada e tela apagada', 'Luz ligada e tela quebrada', 'As duas piscando'], 2, 'A luz não está acesa e a tela está apagada.', { audio: audio('W18_B', 'Workbook W18-B — suporte do computador') }),
  q('listening-b3', 53, 'W18-B: Por que o problema é urgente?', ['Há uma prova agora', 'Precisa fazer a tarefa até amanhã', 'Vai viajar', 'O chefe está esperando'], 2, '`明日までに宿題を作らなきゃいけない`.', { audio: audio('W18_B', 'Workbook W18-B — suporte do computador') }),
  q('listening-b4', 54, 'W18-B: Qual era a causa real?', ['O computador estava sem tomada', 'O usuário não tinha apertado o interruptor', 'A tela estava quebrada', 'O arquivo estava corrompido'], 2, 'Ao apertar o interruptor, o computador liga.', { audio: audio('W18_B', 'Workbook W18-B — suporte do computador') }),
  q('listening-c1', 55, 'W18-C: Quando Tanaka frequenta a escola de inglês?', ['Antes do trabalho', 'Depois que o trabalho termina', 'Somente aos domingos', 'Durante o almoço'], 2, '`仕事が終わってから英語の学校に行っている`.', { audio: audio('W18_C', 'Workbook W18-C — estudar trabalhando') }),
  q('listening-c2', 56, 'W18-C: O que aconteceu em Londres?', ['Perdeu o passaporte', 'Perdeu o voo por não conseguir usar inglês', 'Conseguiu emprego', 'Conheceu o professor'], 2, 'Ele não conseguiu se comunicar em inglês e perdeu o avião.', { audio: audio('W18_C', 'Workbook W18-C — estudar trabalhando') }),
  q('listening-c3', 57, 'W18-C: Que frase em inglês Tanaka tentou usar?', ['Where is my hotel?', 'I have to take flight 521.', 'Please call my teacher.', 'I lost my luggage.'], 2, 'A gravação cita literalmente `I have to take flight 521`.', { audio: audio('W18_C', 'Workbook W18-C — estudar trabalhando') }),
  q('listening-c4', 58, 'W18-C: Do que Tanaka se arrepende?', ['De ter ido a Londres', 'De não ter estudado mais quando era estudante', 'De trabalhar demais', 'De começar inglês aos quarenta'], 2, '`学生の時にもっと勉強しておけばよかった`.', { audio: audio('W18_C', 'Workbook W18-C — estudar trabalhando') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K18_01: dialogueOne,
  K18_02: dialogueOne,
  K18_03: dialogueTwo,
  K18_04: dialogueTwo,
  K18_05: dialogueThree,
  K18_06: dialogueThree,
  Y18: reading,
}

export const genki2Lesson18: Section = {
  id: 'lesson-18',
  level: 'genki-2',
  titleJa: '第18課 ジョンさんのアルバイト',
  titlePt: 'Lição 18 — O trabalho de meio período de John',
  summaryPt: 'Estados e mudanças, pares transitivos/intransitivos, てしまう, condição と, ações simultâneas com ながら, arrependimento com ばよかった, leitura e compreensão oral.',
  studyNotes,
  groups: [
    genki2Group(LESSON, 'dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    genki2Group(LESSON, 'grammar', '文法', 'gramática e uso em contexto', grammarQuestions),
    genki2Group(LESSON, 'reading', '読み書き', 'vocabulário e leitura de Hashimoto', vocabularyReadingQuestions),
    genki2Group(LESSON, 'listening', '聞く練習', 'compreensão oral do workbook', listeningQuestions),
  ],
  audios: buildGenki2Audios({
    lesson: LESSON,
    scripts,
    dialogueCodes: ['K18_01', 'K18_03', 'K18_05'],
    dialogueSupportCodes: ['K18_02', 'K18_04', 'K18_06'],
    vocabularyCodes: ['K18_07', 'K18_08'],
  }),
}
