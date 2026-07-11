import type { AudioTrack, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-1/lesson-5'
const q = (id: string, number: number, prompt: string, choices: string[], answer: number, explanationPt: string, options: Partial<Pick<Question, 'audio' | 'helpPt'>> = {}): Question => ({ id: `genki-1-l5-${id}`, number, prompt, choices: choices.map((text, i) => ({ n: i + 1, text })), answer, explanationPt, ...options })
const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({ id: `genki-1-l5-${id}`, title, subtitlePt, instructionJa: '', instructionPt: `Pratique ${subtitlePt.toLowerCase()} com base na Lição 5.`, questions })
const qa = (file: string, title: string) => ({ src: `${BASE}/${file}.mp3`, title })

const studyNotes: StudyNote[] = [
  { title: 'Objetivos e diálogos', bodyPt: `A lição acompanha Robert e Ken em Okinawa, uma compra de camisetas e a conversa de Robert com Takeshi depois da viagem. Você aprenderá a descrever pessoas, lugares e experiências, falar de gostos, fazer convites e contar objetos.`, helpPt: 'Use a viagem como fio narrativo: clima no presente, experiência no passado, gostos para escolher atividades e contadores ao comprar lembranças.' },
  { title: '1. Adjetivos no presente', bodyPt: `Há adjetivos い e な. No afirmativo polido, ambos terminam em です. No negativo, retire o い final do adjetivo い e acrescente くないです; com adjetivos な, use じゃないです.

| Tipo | Afirmativo | Negativo |
| --- | --- | --- |
| い: さむい | さむいです | さむくないです |
| な: 元気（な） | 元気です | 元気じゃないです |

Não diga \`さむいじゃないです\`. A forma negativa em ありません também é possível, mas é mais formal.`, helpPt: 'Teste visual: se a palavra termina no い que faz parte do adjetivo, troque esse い por くない. Se aparece com （な） no vocabulário, mantenha a palavra e troque apenas です por じゃないです.' },
  { title: '2. いい é irregular e os intensificadores', bodyPt: `Fora do afirmativo presente, いい muda para よ: いいです → よくないです → よかったです → よくなかったです. Compostos como かっこいい seguem a mesma mudança: かっこよくないです.

Use とても／すごく para “muito” e ちょっと para “um pouco”: 沖縄の海は とても きれいです。この部屋は ちょっと 暑いです。`, helpPt: 'Pense que a família inteira de いい usa a raiz よ, exceto a forma básica いい. Isso evita formas incorretas como いくない.' },
  { title: '3. Adjetivos no passado', bodyPt: `Nos adjetivos い, troque い por かったです; no negativo, troque くない por くなかったです. Adjetivos な seguem o padrão dos substantivos.

| Tipo | Afirmativo | Negativo |
| --- | --- | --- |
| い: さむい | さむかったです | さむくなかったです |
| な: 元気（な） | 元気でした | 元気じゃなかったです |

テストは 難しかったですか。— いいえ、ぜんぜん 難しくなかったです。`, helpPt: 'Localize primeiro o tipo do adjetivo; depois escolha a “trilha い” (かった／くなかった) ou a “trilha な” (でした／じゃなかった).' },
  { title: '4. Adjetivo antes de substantivo', bodyPt: `O adjetivo い vem diretamente antes do substantivo: おもしろい映画. O adjetivo な exige な: きれいな写真. O な usado antes do substantivo desaparece antes de です: この町は にぎやかです。`, helpPt: 'Imagine な como uma ponte necessária somente entre o adjetivo な e o substantivo. Se não há substantivo logo depois, a ponte não aparece.' },
  { title: '5. 好き（な）／きらい（な）', bodyPt: `Use X は Y が 好きです／きらいです. O item de que se gosta recebe が: ロバートさんは 日本語のクラスが 好きです。 Para intensidade, use 大好き／大きらい. Como modificadores: 私の好きな本. Em contraste, は pode substituir が.`, helpPt: 'Em português pensamos “gostar de Y”; em japonês, memorize a moldura inteira Y が 好き. 好き funciona gramaticalmente como adjetivo な, não como verbo.' },
  { title: '6. 〜ましょう／〜ましょうか', bodyPt: `Retire ます e acrescente ましょう para “vamos...” e ましょうか para “vamos...?” ou “quer que eu...?”: 一緒に図書館で勉強しましょう。あそこでコーヒーを飲みましょうか。`, helpPt: 'ましょう propõe um plano. Com か, você entrega a decisão ao interlocutor; sem か, a proposta soa mais decidida.' },
  { title: '7. Contadores', bodyPt: `Em japonês, o número costuma vir depois do objeto com sua palavra contadora: Tシャツを 三枚 買いました。 枚 conta objetos finos e planos. Outros contadores mudam conforme a categoria; consulte a tabela do Genki quando o objeto for novo.`, helpPt: 'Aprenda número + contador como uma unidade sonora. Para folhas, fotos, camisas e outros itens planos, comece com 枚: 一枚、二枚、三枚.' },
  { title: 'Notas de expressão', bodyPt: `忙しい descreve pessoas; para lugares movimentados, use にぎやか. そうですね concorda ou ganha tempo; そうですか, com entonação descendente, reage a informação nova. A entonação ascendente pode mostrar dúvida ou surpresa.` },
  { title: 'Leitura e escrita — りょこう', bodyPt: `Kanji: 山 川 元 気 天 私 今 田 女 男 見 行 食 飲. Na primeira leitura, Moe descreve Viena, um castelo, um concerto e os cafés. Na segunda, Robert envia de Okinawa um cartão-postal à antiga mãe anfitriã, contando que nadou com amigos e subiu uma montanha.`, helpPt: 'Nas leituras de viagem, sublinhe expressões de tempo (今、きのう、今日、まいにち) antes dos verbos. Isso separa rapidamente estado presente e acontecimentos passados.' },
]

const dialogue = [
  q('d1',1,'沖縄の天気は どうですか。',['寒いです','いいです','雨です','涼しいです'],2,'Robert diz いい天気ですね。'),
  q('d2',2,'Robert acha a água do mar:',['muito fria','um pouco quente','muito bonita','muito perigosa'],3,'Ele diz きれいな海ですね。'),
  q('d3',3,'Robert gosta de qual esporte?',['natação','surfe','tênis','beisebol'],2,'Ele responde サーフィンが好きです。'),
  q('d4',4,'Por que Ken recusa o surfe?',['é caro','é longe','é difícil','está ocupado'],3,'Ken diz 難しくないですか。'),
  q('d5',5,'Quanto custa a camiseta?',['1.080 ienes','1.800 ienes','8.100 ienes','18.000 ienes'],2,'O atendente diz 千八百円です。'),
  q('d6',6,'Qual tamanho Robert procura?',['S','M','L','LL'],3,'Ele pergunta Lサイズがありますか。'),
  q('d7',7,'Quantas camisetas Robert compra?',['uma','duas','três','quatro'],2,'Ele pede Lサイズを二枚ください。'),
  q('d8',8,'Como foi a viagem de Robert?',['楽しかったです','難しかったです','静かでした','高かったです'],1,'Takeshi pergunta se a viagem foi divertida e Robert confirma.'),
  q('d9',9,'O hotel era caro?',['sim, muito','não, não era muito caro','era grátis','o diálogo não diz'],2,'Robert responde いいえ、あまり高くなかったです。'),
  q('d10',10,'Robert entrega a Takeshi:',['uma foto','uma camiseta','uma lembrança','um livro'],3,'Ele diz これ、おみやげです。'),
]

const adjectiveForms = [
  q('a1',11,'さむいです → presente negativo',['さむいじゃないです','さむくないです','さむかったです','さむくありませんでした'],2,'Adjetivo い: troque い por くないです.',{helpPt:'Separe さむ + い; substitua apenas o い final por くないです.'}),
  q('a2',12,'元気です → presente negativo',['元気くないです','元気じゃないです','元気なじゃないです','元気ません'],2,'Adjetivo な segue o padrão nominal.'),
  q('a3',13,'いいです → presente negativo',['いくないです','いいじゃないです','よくないです','よかったです'],3,'いい muda para よ nas formas conjugadas.'),
  q('a4',14,'かっこいいです → presente negativo',['かっこいくないです','かっこよくないです','かっこじゃないです','かっこよかったです'],2,'Compostos terminados em いい também usam よ.'),
  q('a5',15,'暑いです → passado afirmativo',['暑いでした','暑かったです','暑くないです','暑くなかったです'],2,'い → かったです.'),
  q('a6',16,'難しいです → passado negativo',['難しいじゃなかったです','難しくなかったです','難しかったです','難しくないでした'],2,'い → くなかったです.'),
  q('a7',17,'静かです → passado afirmativo',['静かかったです','静かでした','静かなでした','静かですた'],2,'Adjetivo な usa でした.'),
  q('a8',18,'にぎやかです → passado negativo',['にぎやかくなかったです','にぎやかじゃなかったです','にぎやかなかったです','にぎやかませんでした'],2,'Adjetivo な usa じゃなかったです.'),
  q('a9',19,'いいです → passado afirmativo',['いいかったです','よかったです','よいでした','よくなかったです'],2,'Passado de いい: よかったです.'),
  q('a10',20,'いいです → passado negativo',['いくなかったです','よくないでした','よくなかったです','いいじゃなかったです'],3,'Passado negativo: よくなかったです.'),
  q('a11',21,'沖縄の海は（　）きれいです。 “muito”',['あまり','ぜんぜん','とても','ちょっとも'],3,'とても intensifica uma afirmação.'),
  q('a12',22,'この部屋は（　）暑いです。 “um pouco”',['ちょっと','たくさん','あまり','ぜんぜん'],1,'ちょっと significa um pouco.'),
  q('a13',23,'ホテルは あまり（　）。',['高いでした','高くなかったです','高いじゃなかったです','高かったです'],2,'あまり combina com negativo; no passado: 高くなかったです.'),
  q('a14',24,'テストは ぜんぜん（　）。',['難しかったです','難しくなかったです','難しいです','難しいでした'],2,'ぜんぜん normalmente acompanha forma negativa.'),
  q('a15',25,'昨日は いい天気（　）。',['です','でした','かったです','じゃないです'],2,'いい天気 é um sintagma nominal; o passado é でした.'),
  q('a16',26,'今日は ひま（　）。 negativa',['くないです','じゃないです','なじゃないです','ありませんか'],2,'ひま é adjetivo な.'),
]

const modificationLikes = [
  q('m1',27,'“um filme interessante”',['おもしろいな映画','おもしろい映画','おもしろく映画','おもしろ映画'],2,'Adjetivo い vem diretamente antes do substantivo.'),
  q('m2',28,'“uma foto bonita”',['きれい写真','きれいの写真','きれいな写真','きれいい写真'],3,'Adjetivo な exige な antes do substantivo.'),
  q('m3',29,'ここは とても（　）町です。',['にぎやか','にぎやかな','にぎやかの','にぎやかい'],2,'にぎやか é adjetivo な.'),
  q('m4',30,'昨日、（　）映画を 見ました。',['おもしろかった','おもしろい','おもしろな','おもしろく'],2,'O modificador do substantivo fica na forma de dicionário, mesmo que a ação seja passada.'),
  q('m5',31,'私は スポーツ（　）好きです。',['を','で','が','に'],3,'O objeto de afeto recebe が.'),
  q('m6',32,'山下先生は 魚（　）きらいです。',['が','を','と','へ'],1,'きらい também seleciona が.'),
  q('m7',33,'“Gosto muito de café.”',['コーヒーが大好きです。','コーヒーを大好きます。','コーヒーは大きらいです。','コーヒーで好きです。'],1,'大好き expressa gostar muito.'),
  q('m8',34,'好きでも きらいでも（　）。',['あります','ないです','好きです','きらいです'],2,'A expressão neutra é 好きでもきらいでもないです.'),
  q('m9',35,'“meu livro favorito”',['私の好き本','私が好きの本','私の好きな本','私の好きい本'],3,'好き é adjetivo な ao modificar 本.'),
  q('m10',36,'私は 野菜は 好きですが、肉は（　）。',['好きです','きらいです','好きなです','きらいなです'],2,'は contrasta os dois itens.'),
]

const invitationsCounters = [
  q('i1',37,'勉強します → “vamos estudar”',['勉強しましょう','勉強しますか','勉強したい','勉強でしょう'],1,'Troque ます por ましょう.'),
  q('i2',38,'飲みます → “vamos beber?”',['飲みません','飲みましょうか','飲みましたか','飲みですか'],2,'ましょうか transforma a proposta em pergunta.'),
  q('i3',39,'一緒に 図書館で（　）。',['勉強しましょう','勉強でした','勉強じゃないです','勉強が好き'],1,'ましょう propõe uma ação conjunta.'),
  q('i4',40,'あそこで コーヒーを（　）。 “vamos?”',['飲みます','飲みませんか','飲みましょうか','飲みました'],3,'A forma-alvo da lição é 飲みましょうか.'),
  q('i5',41,'「荷物を 持ちましょうか。」 pode significar:',['Você trouxe a bagagem?','Quer que eu carregue a bagagem?','Não carregue a bagagem.','A bagagem é pesada.'],2,'ましょうか também oferece ajuda.'),
  q('c1',42,'Tシャツを（　）買いました。 “três”',['三人','三本','三枚','三時'],3,'枚 conta itens finos e planos.'),
  q('c2',43,'写真を 一（　）撮りました。',['枚','人','冊','台'],1,'Fotos usam 枚.'),
  q('c3',44,'「二枚」 lê-se:',['にまい','にんまい','ふたまい','にほん'],1,'二枚 = にまい.'),
  q('c4',45,'Onde costuma aparecer número + contador?',['antes do tópico は','depois do objeto com を','depois de です apenas','antes do verbo com に obrigatório'],2,'O padrão básico é objetoを + número/contador + verbo.'),
  q('c5',46,'Lサイズを（　）ください。 “duas unidades”',['二枚','二人','二時','二本'],1,'Camisetas são contadas com 枚.'),
]

const kanjiReading = [
  q('k1',47,'山',['rio','montanha','campo','céu'],2,'山 significa montanha.'),
  q('k2',48,'川',['rio','homem','mulher','agora'],1,'川 significa rio.'),
  q('k3',49,'元気',['tempo/clima','saudável, bem-disposto','viagem','comida'],2,'元気 é estar bem/saudável.'),
  q('k4',50,'天気',['clima','eletricidade','popularidade','céu noturno'],1,'天気 significa tempo/clima.'),
  q('k5',51,'今',['eu','hoje','agora','campo'],3,'今 significa agora.'),
  q('k6',52,'女の人／男の人',['criança/adulto','mulher/homem','mãe/pai','professora/aluno'],2,'女 é mulher e 男 é homem.'),
  q('k7',53,'旅行',['banco','refeição','viagem','opinião'],3,'旅行 significa viagem.'),
  q('k8',54,'食べる／飲む',['ver/ir','comer/beber','comprar/vender','ler/escrever'],2,'食 = comer; 飲 = beber.'),
  q('r1',55,'Em Viena, Moe viu:',['um templo','um castelo antigo','o Monte Fuji','um jogo'],2,'きのうは おしろを 見ました。'),
  q('r2',56,'À noite, Moe foi:',['a um concerto de música clássica','ao balé','ao McDonald’s','ao cinema'],1,'よるは クラシックのコンサートに 行きました。'),
  q('r3',57,'Nos cafés de Viena, Moe consome diariamente:',['cerveja e pão','café e bolo','chá e arroz','suco e peixe'],2,'Ela bebe café e come bolo.'),
  q('r4',58,'Onde Robert está ao escrever o cartão?',['Viena','Tokyo','Okinawa','México'],3,'今、私は おきなわに います。'),
  q('r5',59,'O que Robert fez ontem?',['nadou no mar com amigos','subiu uma montanha','comprou camisetas','viu um castelo'],1,'きのうは 友だちと いっしょに 海で およぎました。'),
  q('r6',60,'Com quem Robert foi à montanha hoje?',['Ken e Takeshi','um homem japonês e uma mulher mexicana','Moe e Mary','sozinho'],2,'O cartão menciona 日本人の男の人 e メキシコ人の女の人.'),
]

const listening = [
  q('l1',61,'W05-A: a casa é nova ou antiga?',['nova','antiga'],2,'A opção marcada é “antiga”.',{audio:qa('W05_A','Workbook W05-A — Imóvel')}),
  q('l2',62,'W05-A: a casa é limpa?',['sim','não'],1,'A opção marcada é “limpa”.',{audio:qa('W05_A','Workbook W05-A — Imóvel')}),
  q('l3',63,'W05-A: a casa é silenciosa?',['sim','não'],1,'A opção marcada é “silenciosa”.',{audio:qa('W05_A','Workbook W05-A — Imóvel')}),
  q('l4',64,'W05-A: os quartos são grandes?',['sim','não'],2,'A opção marcada é “não grandes”.',{audio:qa('W05_A','Workbook W05-A — Imóvel')}),
  q('l5',65,'W05-A: há muitos quartos?',['sim','não'],1,'A opção marcada é “muitos”.',{audio:qa('W05_A','Workbook W05-A — Imóvel')}),
  q('l6',66,'W05-A: qual é o aluguel mensal?',['90.400 ienes','94.000 ienes','49.000 ienes','19.400 ienes'],2,'O áudio informa 94.000 ienes por mês.',{audio:qa('W05_A','Workbook W05-A — Imóvel')}),
  q('l7',67,'W05-B: quem a srta. Suzuki escolhe para o encontro?',['吉田','川口','中山'],1,'A resposta indicada é 吉田.',{audio:qa('W05_B','Workbook W05-B — Quem é meu par?')}),
  q('l8',68,'W05-C: Mary gosta de J-pop?',['gosta','não gosta','odeia'],1,'A tabela marca A: gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l9',69,'W05-C: Mary gosta de rock?',['gosta','não gosta','odeia'],2,'A tabela marca B: não gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l10',70,'W05-C: o que Mary acha de música clássica?',['gosta','não gosta','odeia'],3,'A tabela marca C: odeia.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l11',71,'W05-C: Mary gosta de animação?',['gosta','não gosta','odeia'],1,'A tabela marca A: gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l12',72,'W05-C: Takeshi gosta de J-pop?',['gosta','não gosta','odeia'],2,'A tabela marca B: não gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l13',73,'W05-C: Takeshi gosta de rock?',['gosta','não gosta','odeia'],1,'A tabela marca A: gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l14',74,'W05-C: Takeshi gosta de música clássica?',['gosta','não gosta','odeia'],1,'A tabela marca A: gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l15',75,'W05-C: Takeshi gosta de animação?',['gosta','não gosta','odeia'],1,'A tabela marca A: gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
  q('l16',76,'W05-C: Takeshi gosta de filmes de terror?',['gosta','não gosta','odeia'],1,'A tabela marca A: gosta.',{audio:qa('W05_C','Workbook W05-C — Entrevista')}),
]

const scripts: Record<string, ScriptItem[]> = {
  K05_01: [{ label: '会話 I', lines: [{ speaker: 'R', ja: 'いい天気ですね。', pt: 'Tempo bom, não é?' }, { speaker: 'K', ja: 'そうですね。でも、ちょっと暑いですね。', pt: 'Sim. Mas está um pouco quente.' }, { speaker: 'R', ja: 'ええ。わあ、きれいな海！', pt: 'É. Uau, que mar bonito!' }, { speaker: 'K', ja: '泳ぎましょう。', pt: 'Vamos nadar.' }, { speaker: 'K', ja: 'ロバートさんは どんなスポーツが 好きですか。', pt: 'De que tipo de esporte você gosta, Robert?' }, { speaker: 'R', ja: 'サーフィンが 好きです。あした 一緒に やりましょうか。', pt: 'Gosto de surfe. Vamos praticar juntos amanhã?' }, { speaker: 'K', ja: 'でも、難しくないですか。', pt: 'Mas não é difícil?' }, { speaker: 'R', ja: '大丈夫ですよ。', pt: 'Não tem problema.' }] }],
  K05_03: [{ label: '会話 II', lines: [{ speaker: 'R', ja: 'すみません。このTシャツは、いくらですか。', pt: 'Com licença. Quanto custa esta camiseta?' }, { speaker: '店員', ja: '千八百円です。', pt: 'Custa 1.800 ienes.' }, { speaker: 'R', ja: 'あのう、Lサイズが ありますか。', pt: 'Bem... tem tamanho L?' }, { speaker: '店員', ja: 'はい、ありますよ。', pt: 'Sim, temos.' }, { speaker: 'R', ja: 'じゃ、Lサイズを 二枚 ください。', pt: 'Então, duas do tamanho L, por favor.' }] }],
  K05_05: [{ label: '会話 III', lines: [{ speaker: 'T', ja: 'ロバートさん、旅行は 楽しかったですか。', pt: 'Robert, a viagem foi divertida?' }, { speaker: 'R', ja: 'ええ。沖縄の海は すごく きれいでしたよ。', pt: 'Sim. O mar de Okinawa estava muito bonito.' }, { speaker: 'T', ja: 'よかったですね。ぼくも 海が 大好きです。ホテルは 高かったですか。', pt: 'Que bom. Eu também adoro o mar. O hotel era caro?' }, { speaker: 'R', ja: 'いいえ、あまり 高くなかったです。これ、おみやげです。', pt: 'Não, não era muito caro. Isto é uma lembrança.' }, { speaker: 'T', ja: 'ありがとう。', pt: 'Obrigado.' }, { speaker: 'R', ja: 'たけしさんのデートは どうでしたか。', pt: 'Como foi seu encontro, Takeshi?' }] }],
  Y05_1: [{ label: 'たのしいりょこう', lines: [{ speaker: 'Moe', ja: '今、ウィーンにいます。ここは ちょっと さむいです。ウィーンは とても きれいな まちです。', pt: 'Agora estou em Viena. Aqui está um pouco frio. Viena é uma cidade muito bonita.' }, { speaker: 'Moe', ja: 'きのうは おしろを 見ました。ふるかったですが、とても きれいでした。たくさん しゃしんを とりました。', pt: 'Ontem vi um castelo. Era antigo, mas muito bonito. Tirei muitas fotos.' }, { speaker: 'Moe', ja: 'よるは クラシックの コンサートに 行きました。よかったです。', pt: 'À noite fui a um concerto de música clássica. Foi bom.' }, { speaker: 'Moe', ja: 'ウィーンには カフェが たくさん あります。まいにち カフェで コーヒーを 飲みます。ケーキも 食べます。すごく おいしいです。', pt: 'Há muitos cafés em Viena. Todos os dias bebo café num café e também como bolo. É muito gostoso.' }] }],
  Y05_2: [{ label: 'ロバートのはがき', lines: [{ speaker: 'Robert', ja: 'おかあさん、お元気ですか。今、私は おきなわに います。ここは あついですが、いい天気です。', pt: 'Mãe, tudo bem? Agora estou em Okinawa. Aqui está quente, mas o tempo está bom.' }, { speaker: 'Robert', ja: 'きのうは 友だちと いっしょに 海で およぎました。今日は 日本人の 男の人と メキシコ人の 女の人と 山に 行きました。', pt: 'Ontem nadei no mar com amigos. Hoje fui à montanha com um homem japonês e uma mulher mexicana.' }, { speaker: 'Robert', ja: 'たいへんでしたが、とても きれいでした。まいにち たのしいです。おきなわの 食べ物も 大好きです。では、お元気で。', pt: 'Foi puxado, mas muito bonito. Divirto-me todos os dias. Também adoro a comida de Okinawa. Cuide-se.' }] }],
}

const files = [...Array.from({ length: 16 }, (_, i) => `K05_${String(i + 1).padStart(2, '0')}`), 'Y05_1', 'Y05_2', 'W05_A', 'W05_B', 'W05_C']
const audios: AudioTrack[] = files.map((file) => ({ id: `genki-1-l5-audio-${file.toLowerCase()}`, title: file === 'K05_01' ? 'Diálogo I — na praia' : file === 'K05_03' ? 'Diálogo II — camisetas' : file === 'K05_05' ? 'Diálogo III — depois da viagem' : file === 'Y05_1' ? 'Leitura — uma viagem divertida' : file === 'Y05_2' ? 'Leitura — cartão de Robert' : file.startsWith('W05') ? `Workbook — ${file.slice(-1)}` : `Textbook — ${file}`, descriptionPt: file.startsWith('Y05') ? 'Leitura integral da seção de leitura e escrita.' : file.startsWith('W05') ? 'Compreensão oral do workbook.' : 'Áudio do diálogo, vocabulário ou prática correspondente.', src: `${BASE}/${file}.mp3`, script: scripts[file] ?? [] }))

export const genki1Lesson5: Section = {
  id: 'lesson-5', level: 'genki-1', titleJa: '第5課　沖縄旅行', titlePt: 'Lição 5 — Uma viagem a Okinawa', summaryPt: 'Adjetivos no presente e passado, gostos, convites, contadores, kanji e leituras de viagem.', studyNotes,
  groups: [group('dialogue', '会話', 'compreensão dos diálogos', dialogue), group('adjective-forms', '文法 1・2', 'formas dos adjetivos', adjectiveForms), group('modification-likes', '文法 3・4', 'modificação e gostos', modificationLikes), group('invitations-counters', '文法 5・6', 'convites e contadores', invitationsCounters), group('kanji-reading', '読み書き', 'kanji e leitura', kanjiReading), group('listening', '聞く練習', 'compreensão oral do workbook', listening)], audios,
}
