import type { AudioTrack, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-1/lesson-6'
const q = (id: string, number: number, prompt: string, choices: string[], answer: number, explanationPt: string, options: Partial<Pick<Question, 'audio' | 'helpPt'>> = {}): Question => ({ id: `genki-1-l6-${id}`, number, prompt, choices: choices.map((text, i) => ({ n: i + 1, text })), answer, explanationPt, ...options })
const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({ id: `genki-1-l6-${id}`, title, subtitlePt, instructionJa: '', instructionPt: `Pratique ${subtitlePt.toLowerCase()} com base na Lição 6.`, questions })
const qa = (file: string, title: string) => ({ src: `${BASE}/${file}.mp3`, title })

const studyNotes: StudyNote[] = [
  { title: 'Objetivos e diálogos', bodyPt: 'A lição acompanha um dia difícil de Robert: ele dorme na aula, esquece o livro, descobre que haverá prova e ajuda uma senhora no ônibus. Você aprenderá a fazer pedidos, encadear ações, pedir permissão, expressar regras, explicar motivos e oferecer ajuda.', helpPt: 'A forma て é a peça central. Primeiro domine como produzi-la; depois acrescente finais como ください, もいいです e はいけません.' },
  { title: '1. Forma て', bodyPt: `Verbos ru: retire る e acrescente て: 食べる → 食べて.

Verbos u:

- う・つ・る → って: 会う → 会って, 待つ → 待って, とる → とって;
- む・ぶ・ぬ → んで: 読む → 読んで, 遊ぶ → 遊んで;
- く → いて: 書く → 書いて; exceção 行く → 行って;
- ぐ → いで: 泳ぐ → 泳いで;
- す → して: 話す → 話して.

Irregulares: する → して; くる → きて.`, helpPt: 'Memorize pelo som final, não pela forma em ます. O ritmo うつる→って, むぶぬ→んで funciona como uma cantiga e reduz a carga de memória.' },
  { title: '2. 〜てください', bodyPt: 'Forma て + ください faz um pedido polido: 教科書を読んでください。ちょっと教えてください。 Entre familiares e amigos muito próximos, a forma て sozinha pode funcionar como pedido.', helpPt: 'ください não muda a conjugação anterior: primeiro produza corretamente a forma て completa e só então encaixe ください.' },
  { title: '3. Duas ou mais ações', bodyPt: 'A forma て liga ações em sequência. Apenas o último verbo marca o tempo: 図書館に行って、本を借ります。今日は六時に起きて、勉強しました。 A forma て também pode indicar o modo ou a situação ligada à ação seguinte.', helpPt: 'Leia como setas: 行って → 借ります. O último verbo é o “relógio” da frase; ele decide se toda a sequência é presente/futura ou passada.' },
  { title: '4. 〜てもいいです', bodyPt: 'Forma て + もいいです concede permissão. Como pergunta, pede permissão: トイレに行ってもいいですか。 Respostas naturais: はい、いいですよ ou どうぞ. Na fala casual, o も pode ser omitido.', helpPt: 'Associe もいい a “mesmo fazendo, está tudo bem”. Não diga apenas ても: é necessário completar com いいです.' },
  { title: '5. 〜てはいけません', bodyPt: 'Forma て + はいけません expressa proibição forte, comum em regras: ここで写真を撮ってはいけません。 Diferente de てもいい, o は não pode ser omitido.', helpPt: 'Use em placas, regulamentos e fala de autoridade. Para um pedido pessoal mais suave, a Lição 8 apresentará ないでください.' },
  { title: '6. 〜から', bodyPt: 'Uma oração terminada em から apresenta razão: 私は今晩勉強します。あしたテストがありますから。 A razão também pode vir primeiro: あしたテストがありますから、今晩勉強します。', helpPt: 'から equivale a “porque/pois”. Procure qual parte responde “por quê?” e coloque から no fim dessa razão.' },
  { title: '7. 〜ましょうか como oferta', bodyPt: 'Além de convite, ましょうか oferece assistência: 荷物を持ちましょうか。やりましょうか。 O sentido vem do contexto: se a ação beneficia a outra pessoa, a frase é uma oferta.', helpPt: 'Convite: “vamos fazer juntos?”. Oferta: “quer que eu faça?”. Observe quem executará e quem recebe o benefício.' },
  { title: 'Leitura e escrita — 私のすきなレストラン', bodyPt: 'Kanji: 東 西 南 北 口 出 右 左 分 先 生 大 学 外 国. Naomi descreve o restaurante italiano Mangiare: saia pela saída sul da estação, siga à direita por cerca de cinco minutos. O chef Antonio é italiano, a comida é deliciosa e barata, e muitos estrangeiros frequentam o local.', helpPt: 'Direções formam pares visuais: 東/西, 南/北 e 右/左. Pratique dizendo uma saída (南口) e uma direção (右へ) na mesma frase.' },
]

const dialogue = [
  q('d1',1,'O que Robert faz durante a aula?',['lê','dorme','come','fala ao telefone'],2,'O professor pede que ele acorde e proíbe dormir na aula.'),
  q('d2',2,'O que Robert esqueceu?',['o caderno','o dever','o livro didático','a mochila'],3,'Ele diz 教科書を忘れました。'),
  q('d3',3,'Por que deve trazer o livro?',['é caro','usa todos os dias','há uma foto','Sora pediu'],2,'O professor explica 毎日使いますから。'),
  q('d4',4,'O que Robert pede emprestado a Sora?',['dinheiro','o caderno','um livro','um lápis'],2,'Ele pergunta ノートを借りてもいいですか。'),
  q('d5',5,'Quando haverá prova?',['hoje','amanhã','sexta','semana que vem'],2,'Sora avisa あしたテストがあります。'),
  q('d6',6,'Por que Robert não sabia da prova?',['dormiu','faltou na sexta','esqueceu o livro','Sora não contou'],2,'Sora diz 金曜日に休みましたから。'),
  q('d7',7,'Para onde vai o ônibus?',['estação','universidade','Hospital Sakura','aeroporto'],3,'A senhora pergunta se ele vai ao さくら病院.'),
  q('d8',8,'Robert oferece primeiro:',['o assento','dinheiro','um mapa','comida'],1,'Ele diz どうぞ座ってください。'),
  q('d9',9,'Por que a senhora não se senta?',['vai descer logo','está esperando alguém','o assento está molhado','prefere ficar em pé'],1,'Ela diz すぐ降りますから。'),
  q('d10',10,'O que Robert finalmente oferece?',['chamar um táxi','segurar a bagagem','abrir a janela','comprar passagem'],2,'Ele pergunta 荷物を持ちましょうか。'),
]

const teForm = [
  q('t1',11,'食べる → forma て',['食べって','食べて','食べいて','食べんで'],2,'Verbo ru: る → て.'),
  q('t2',12,'見る → forma て',['見て','見って','見して','見んで'],1,'Verbo ru: 見て.'),
  q('t3',13,'会う → forma て',['会いて','会って','会んで','会して'],2,'う → って.'),
  q('t4',14,'待つ → forma て',['待いて','待ちて','待って','待んで'],3,'つ → って.'),
  q('t5',15,'とる → forma て',['とて','とって','といて','とんで'],2,'Verbo u terminado em る: って.'),
  q('t6',16,'読む → forma て',['読って','読いて','読んで','読して'],3,'む → んで.'),
  q('t7',17,'遊ぶ → forma て',['遊んで','遊って','遊いて','遊して'],1,'ぶ → んで.'),
  q('t8',18,'死ぬ → forma て',['死って','死んで','死いて','死して'],2,'ぬ → んで.'),
  q('t9',19,'書く → forma て',['書って','書んで','書いて','書いで'],3,'く → いて.'),
  q('t10',20,'行く → forma て',['行いて','行いで','行って','行んで'],3,'行く é a exceção: 行って.',{helpPt:'Esta é a única exceção principal desta tabela; memorize 行って como bloco.'}),
  q('t11',21,'泳ぐ → forma て',['泳いて','泳いで','泳って','泳んで'],2,'ぐ → いで.'),
  q('t12',22,'話す → forma て',['話いて','話んで','話して','話って'],3,'す → して.'),
  q('t13',23,'する → forma て',['すて','して','しって','すって'],2,'Irregular: して.'),
  q('t14',24,'くる → forma て',['くって','くて','きて','きって'],3,'Irregular: きて.'),
  q('t15',25,'帰る → forma て',['帰て','帰って','帰いて','帰んで'],2,'帰る é verbo u, portanto 帰って.'),
  q('t16',26,'起きる → forma て',['起きって','起きて','起いて','起きんで'],2,'起きる é verbo ru.'),
  q('t17',27,'急ぐ → forma て',['急いで','急いて','急って','急んで'],1,'ぐ → いで.'),
  q('t18',28,'持つ → forma て',['持ちて','持いて','持って','持んで'],3,'つ → って.'),
]

const requestsSequence = [
  q('s1',29,'教科書を 読んで（　）。',['います','ください','もいい','はいけませんか'],2,'〜てください faz pedido polido.'),
  q('s2',30,'“Por favor, espere um pouco.”',['ちょっと待ちます。','ちょっと待ってください。','ちょっと待ってもいいです。','ちょっと待ってはいけません。'],2,'待つ → 待って + ください.'),
  q('s3',31,'“Por favor, venha amanhã.”',['あした来てください。','あした来ってください。','あした来るください。','あした来ますください。'],1,'くる → きて.'),
  q('s4',32,'図書館に 行って、本を（　）。',['借ります','借りて','借りましたて','借る'],1,'O último verbo finaliza a sequência.'),
  q('s5',33,'今日は 六時に（　）、勉強しました。',['起きます','起きて','起きると','起きでした'],2,'A primeira ação usa forma て.'),
  q('s6',34,'食堂に（　）、昼ご飯を 食べましょう。',['行きます','行って','行いて','行くて'],2,'行く tem forma て irregular: 行って.'),
  q('s7',35,'昨日、映画を 見て、家に（　）。',['帰りました','帰って','帰りますて','帰りて'],1,'O último verbo recebe o passado.'),
  q('s8',36,'Qual verbo determina o tempo da sequência em て?',['o primeiro','todos separadamente','o último','nenhum'],3,'A flexão final determina o tempo da sequência.'),
  q('s9',37,'バスに（　）、会社に 行きます。',['乗って','乗りて','乗いて','乗んで'],1,'乗る é verbo u: 乗って.'),
  q('s10',38,'教科書を（　）、すみません。 “esqueci e peço desculpas”',['忘れて','忘れって','忘れます','忘れんで'],1,'忘れる é verbo ru: 忘れて.'),
]

const permissionRules = [
  q('p1',39,'トイレに 行って（　）ですか。',['はいい','もいい','ください','から'],2,'〜てもいいですか pede permissão.'),
  q('p2',40,'“Você pode usar este livro.”',['この本を使ってもいいです。','この本を使ってはいけません。','この本を使ってくださいか。','この本がいいです。'],1,'〜てもいいです concede permissão.'),
  q('p3',41,'写真を 撮ってもいいですか。 —（　）。',['はい、いいですよ','いいえ、どうぞ','はい、いけません','撮ってくださいか'],1,'いいですよ concede permissão.'),
  q('p4',42,'“Pode entrar.” resposta curta e natural:',['どうぞ','だめです','から','すみませんから'],1,'どうぞ significa “fique à vontade”.'),
  q('p5',43,'ここで 写真を 撮って（　）。 “é proibido”',['もいいです','ください','はいけません','ましょうか'],3,'〜てはいけません expressa proibição.'),
  q('p6',44,'クラスで 寝て（　）。',['もいいです','はいけません','ください','からです'],2,'Não se pode dormir na aula.'),
  q('p7',45,'図書館で 大きい声で 話して（　）。',['はいけません','もいいです','ましょう','います'],1,'Regra de biblioteca: proibição.'),
  q('p8',46,'Qual partícula pode cair na fala casual em 〜てもいい?',['て','も','いい','です e て'],2,'O livro observa que も pode ser omitido.'),
  q('p9',47,'Qual elemento não pode ser omitido em 〜てはいけません?',['て','は','いけません','nenhum deles'],2,'O は da construção de proibição é obrigatório.'),
  q('p10',48,'ノートを 借りて（　）ですか。',['はだめ','もいい','ください','から'],2,'Robert pede permissão para pegar o caderno emprestado.'),
]

const reasonOffer = [
  q('r1',49,'今晩 勉強します。あした テストが あります（　）。',['まで','から','でも','を'],2,'から encerra a razão.'),
  q('r2',50,'タクシーは 高いです（　）、バスに 乗りましょう。',['から','まで','と','を'],1,'O táxi ser caro justifica pegar o ônibus.'),
  q('r3',51,'“Porque estou ocupado, não irei.”',['忙しいですから、行きません。','忙しいですが、行きます。','忙しくてください。','忙しいを行きません。'],1,'A razão com から pode vir antes da situação.'),
  q('r4',52,'Robert não sabia da prova porque:',['金曜日に休みましたから','毎日勉強しますから','教科書がありますから','バスに乗りますから'],1,'Ele faltou na sexta-feira.'),
  q('o1',53,'荷物を（　）ましょうか。',['持ち','持って','持つ','持ちます'],1,'Use a base de ます: 持ちます → 持ちましょうか.'),
  q('o2',54,'「やりましょうか。」 como oferta:',['Vamos fazer juntos?','Quer que eu faça?','É proibido fazer.','Você fez?'],2,'Em contexto de ajuda, ましょうか oferece ação do falante.'),
  q('o3',55,'Uma pessoa tenta abrir uma garrafa. Você diz:',['開けましょうか。','開けてはいけません。','開けましたか。','開けるから。'],1,'ましょうか oferece ajuda.'),
  q('o4',56,'A senhora carrega uma bolsa pesada. Melhor oferta:',['荷物を持ちましょうか。','荷物を持ってはいけません。','荷物が好きですか。','荷物を持ちました。'],1,'É a oferta usada no diálogo.'),
]

const kanjiReading = [
  q('k1',57,'東口／西口',['saída sul/norte','saída leste/oeste','entrada direita/esquerda','Tokyo/Kansai'],2,'東 = leste; 西 = oeste.'),
  q('k2',58,'南／北',['sul/norte','leste/oeste','direita/esquerda','dentro/fora'],1,'南 = sul; 北 = norte.'),
  q('k3',59,'出口',['entrada','saída','população','estação'],2,'出 = sair; 口 = abertura/entrada.'),
  q('k4',60,'右／左',['cima/baixo','direita/esquerda','frente/trás','leste/oeste'],2,'右 = direita; 左 = esquerda.'),
  q('k5',61,'五分',['cinco horas','cinco minutos','cinco pessoas','cinco dias'],2,'分 é o contador de minutos.'),
  q('k6',62,'外国人',['universitário','estrangeiro','adulto','professor'],2,'外国 = país estrangeiro; 人 = pessoa.'),
  q('k7',63,'Onde fica o Mangiare?',['saída norte, esquerda','saída sul, cinco minutos à direita','saída leste, dez minutos','dentro da estação'],2,'南口を出て、右へ五分ぐらいです。'),
  q('k8',64,'Quem é o chef?',['Naomi, japonesa','Antonio, italiano','Robert, americano','Yamashita, japonês'],2,'O chef é o italiano Antonio.'),
  q('k9',65,'O que Naomi costuma consumir?',['vinho e pizza','café e bolo','chá e arroz','cerveja e peixe'],1,'ワインを飲んで、ピザを食べます。'),
  q('k10',66,'Por que muitos estrangeiros vão ao restaurante?',['é grande','fica na estação','a comida é barata','há música'],3,'りょうりは やすいですから、外国人も たくさん きます。'),
]

const listening = [
  q('l1',67,'W06-A: o café da manhã começa às 6h30?',['verdadeiro','falso'],2,'Começa às 7h30.',{audio:qa('W06_A','Workbook W06-A — Albergue')}),
  q('l2',68,'W06-A: é proibido fumar nos quartos?',['verdadeiro','falso'],1,'Deve-se fumar do lado de fora.',{audio:qa('W06_A','Workbook W06-A — Albergue')}),
  q('l3',69,'W06-A: pode tomar banho de manhã?',['verdadeiro','falso'],1,'O funcionário concede permissão.',{audio:qa('W06_A','Workbook W06-A — Albergue')}),
  q('l4',70,'W06-A: não há lavanderia no prédio?',['verdadeiro','falso'],2,'Há uma lavanderia no cômodo ao lado.',{audio:qa('W06_A','Workbook W06-A — Albergue')}),
  q('l5',71,'W06-B: Robert pediu para fechar a cortina?',['sim','não'],2,'Ele pediu カーテンを開けてください.',{audio:qa('W06_B','Workbook W06-B — Quarto inteligente')}),
  q('l6',72,'W06-B: ele pediu para ligar a televisão?',['sim','não'],1,'テレビをつけてください.',{audio:qa('W06_B','Workbook W06-B — Quarto inteligente')}),
  q('l7',73,'W06-B: ele pediu para comprar ingresso de show?',['sim','não'],1,'明日のライブのチケットを買ってください.',{audio:qa('W06_B','Workbook W06-B — Quarto inteligente')}),
  q('l8',74,'W06-B: qual horário ele perguntou?',['Japão','London','New York','Okinawa'],2,'今のロンドンの時間を教えてください.',{audio:qa('W06_B','Workbook W06-B — Quarto inteligente')}),
  q('l9',75,'W06-B: para quem pediu uma ligação?',['Sora','mãe','professor','Ken'],2,'お母さんに電話してください.',{audio:qa('W06_B','Workbook W06-B — Quarto inteligente')}),
  q('l10',76,'W06-C: quando Yui não pode?',['sábado','domingo','segunda','sexta'],1,'No sábado ela trabalha.',{audio:qa('W06_C','Workbook W06-C — Piquenique')}),
  q('l11',77,'W06-C: por que Yui não pode?',['prova','trabalho de meio período','visita de amiga','viagem'],2,'土曜日はアルバイトがありますから.',{audio:qa('W06_C','Workbook W06-C — Piquenique')}),
  q('l12',78,'W06-C: por que Sora não pode no sábado?',['uma amiga vem visitá-la','vai trabalhar','tem prova','vai viajar'],1,'友だちが来ますから.',{audio:qa('W06_C','Workbook W06-C — Piquenique')}),
  q('l13',79,'W06-C: por que Robert não pode no domingo?',['trabalho','estuda para prova de segunda','recebe amigo','vai ao hospital'],2,'日曜日は家で勉強します。月曜日にテストがありますから.',{audio:qa('W06_C','Workbook W06-C — Piquenique')}),
  q('l14',80,'W06-C: quando decidem fazer o piquenique?',['neste sábado','neste domingo','na próxima semana','amanhã'],3,'Eles concluem 来週行きましょうか.',{audio:qa('W06_C','Workbook W06-C — Piquenique')}),
]

const scripts: Record<string, ScriptItem[]> = {
  K06_01: [{ label: '{会話|かいわ} I', lines: [
    { speaker: '山下先生', ja: 'ロバートさん、{次|つぎ}のページを{読|よ}んでください。', pt: 'Robert, leia a próxima página, por favor.' },
    { speaker: 'R', ja: '……', pt: '……' },
    { speaker: '山下先生', ja: 'ロバートさん、{起|お}きてください。クラスで{寝|ね}てはいけませんよ。', pt: 'Robert, acorde. Não se pode dormir na aula.' },
    { speaker: 'R', ja: '{先生|せんせい}、{教科書|きょうかしょ}を{忘|わす}れました。', pt: 'Professor, esqueci o livro didático.' },
    { speaker: '山下先生', ja: '{教科書|きょうかしょ}を{持|も}ってきてくださいね。{毎日|まいにち}{使|つか}いますから。', pt: 'Traga o livro didático, está bem? Nós o usamos todos os dias.' },
    { speaker: 'R', ja: 'はい、すみません。', pt: 'Sim, desculpe.' },
  ] }],
  K06_03: [{ label: '{会話|かいわ} II', lines: [
    { speaker: 'S', ja: 'ロバートさん、{今日|きょう}は{大変|たいへん}でしたね。', pt: 'Robert, hoje foi difícil, não foi?' },
    { speaker: 'R', ja: 'ええ。{後|あと}でソラさんのノートを{借|か}りてもいいですか。', pt: 'Sim. Posso pegar seu caderno emprestado depois?' },
    { speaker: 'S', ja: 'いいですよ。', pt: 'Pode.' },
    { speaker: 'R', ja: 'ありがとう。すぐ{返|かえ}します。', pt: 'Obrigado. Devolvo logo.' },
    { speaker: 'S', ja: 'ロバートさん、あしたテストがありますよ。', pt: 'Robert, haverá uma prova amanhã.' },
    { speaker: 'R', ja: 'えっ、{本当|ほんとう}ですか。', pt: 'O quê? Sério?' },
    { speaker: 'S', ja: 'ええ。ロバートさん、{金曜日|きんようび}に{休|やす}みましたからね。', pt: 'Sim. É porque você faltou na sexta-feira.' },
    { speaker: 'R', ja: 'じゃあ、{今日|きょう}は{家|いえ}に{帰|かえ}って、{勉強|べんきょう}します。', pt: 'Então, hoje vou para casa e estudo.' },
  ] }],
  K06_05: [{ label: '{会話|かいわ} III', lines: [
    { speaker: 'おばあさん', ja: 'あの、すみません。このバスはさくら{病院|びょういん}へ{行|い}きますか。', pt: 'Com licença. Este ônibus vai ao Hospital Sakura?' },
    { speaker: 'R', ja: 'ええ、{行|い}きますよ。……あの、どうぞ{座|すわ}ってください。', pt: 'Sim. Bem... sente-se, por favor.' },
    { speaker: 'おばあさん', ja: 'いいえ、けっこうです。すぐ{降|お}りますから。', pt: 'Não, obrigada. Vou descer logo.' },
    { speaker: 'R', ja: 'そうですか。じゃあ、{荷物|にもつ}を{持|も}ちましょうか。', pt: 'Entendo. Então, quer que eu segure sua bagagem?' },
    { speaker: 'おばあさん', ja: 'あ、どうもすみません。', pt: 'Ah, muito obrigada.' },
  ] }],
  Y06: [{ label: '{私|わたし}のすきなレストラン', lines: [
    { speaker: 'Naomi', ja: '{私|わたし}のすきなレストランは、イタリアりょうりのマンジャーレです。', pt: 'Meu restaurante favorito é o Mangiare, de culinária italiana.' },
    { speaker: 'Naomi', ja: 'えきの{南口|みなみぐち}を{出|で}て、{右|みぎ}へ{五分|ごふん}ぐらいです。', pt: 'Saindo pela saída sul da estação, fica a cerca de cinco minutos à direita.' },
    { speaker: 'Naomi', ja: 'ちいさいレストランです。', pt: 'É um restaurante pequeno.' },
    { speaker: 'Naomi', ja: 'シェフはイタリア{人|じん}のアントニオさんです。', pt: 'O chef é Antonio, um italiano.' },
    { speaker: 'Naomi', ja: 'アントニオさんはとてもおもしろい{人|ひと}です。', pt: 'Antonio é uma pessoa muito interessante.' },
    { speaker: 'Naomi', ja: 'アントニオさんのりょうりはとてもおいしいです。', pt: 'A comida de Antonio é muito gostosa.' },
    { speaker: 'Naomi', ja: '{私|わたし}はよくマンジャーレに{行|い}きます。', pt: 'Vou muito ao Mangiare.' },
    { speaker: 'Naomi', ja: 'マンジャーレでワインを{飲|の}んで、ピザを{食|た}べます。', pt: 'No Mangiare, bebo vinho e como pizza.' },
    { speaker: 'Naomi', ja: 'アイスクリームもおいしいです。', pt: 'O sorvete também é gostoso.' },
    { speaker: 'Naomi', ja: 'ここでいつもたくさん{食|た}べます。', pt: 'Sempre como bastante aqui.' },
    { speaker: 'Naomi', ja: 'りょうりはやすいですから、{外国人|がいこくじん}もたくさんきます。', pt: 'Como a comida é barata, muitos estrangeiros também vêm.' },
    { speaker: 'Naomi', ja: 'みなさんもきてください。', pt: 'Venham vocês também.' },
  ] }],
}

const files = [...Array.from({ length: 15 }, (_, i) => `K06_${String(i + 1).padStart(2, '0')}`), 'Y06', 'W06_A', 'W06_B', 'W06_C']
const audios: AudioTrack[] = files.map((file) => ({ id: `genki-1-l6-audio-${file.toLowerCase()}`, title: file === 'K06_01' ? 'Diálogo I — em aula' : file === 'K06_03' ? 'Diálogo II — depois da aula' : file === 'K06_05' ? 'Diálogo III — no ônibus' : file === 'Y06' ? 'Leitura — meu restaurante favorito' : file.startsWith('W06') ? `Workbook — ${file.slice(-1)}` : `Textbook — ${file}`, descriptionPt: file === 'Y06' ? 'Leitura integral da seção de leitura e escrita.' : file.startsWith('W06') ? 'Compreensão oral do workbook.' : 'Áudio do diálogo, vocabulário ou prática correspondente.', src: `${BASE}/${file}.mp3`, script: scripts[file] ?? [], transcript: scripts[file] ? { kind: 'full', source: 'source-aligned', reviewed: true, items: scripts[file] } : undefined }))

export const genki1Lesson6: Section = { id: 'lesson-6', level: 'genki-1', titleJa: '第6課　ロバートさんの一日', titlePt: 'Lição 6 — Um dia na vida de Robert', summaryPt: 'Forma て, pedidos, sequências, permissão, proibição, razões, ofertas, kanji e leitura de restaurante.', studyNotes, groups: [group('dialogue', '会話', 'compreensão dos diálogos', dialogue), group('te-form', '文法 1', 'conjugação da forma て', teForm), group('requests-sequence', '文法 2・3', 'pedidos e sequência de ações', requestsSequence), group('permission-rules', '文法 4・5', 'permissão e proibição', permissionRules), group('reason-offer', '文法 6・7', 'razões e ofertas de ajuda', reasonOffer), group('kanji-reading', '読み書き', 'kanji e leitura', kanjiReading), group('listening', '聞く練習', 'compreensão oral do workbook', listening)], audios }
