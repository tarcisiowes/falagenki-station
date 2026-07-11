import type { AudioTrack, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-1/lesson-4'
const q = (id: string, number: number, prompt: string, choices: string[], answer: number, explanationPt: string, options: Partial<Pick<Question, 'audio' | 'helpPt'>> = {}): Question => ({ id: `genki-1-l4-${id}`, number, prompt, choices: choices.map((text, i) => ({ n: i + 1, text })), answer, explanationPt, ...options })
const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({ id: `genki-1-l4-${id}`, title, subtitlePt, instructionJa: '', instructionPt: `Pratique ${subtitlePt.toLowerCase()} com base na Lição 4.`, questions })
const qa = (file: string, title: string) => ({ src: `${BASE}/${file}.mp3`, title })

const studyNotes: StudyNote[] = [
  { title: 'Objetivos e diálogos', bodyPt: `A lição acompanha o primeiro encontro de Mary e Takeshi. Mary pergunta onde fica o McDonald's, mas Takeshi espera por uma hora em frente ao Mos Burger. Ela passa o dia sozinha, visita uma livraria, um templo e um parque, tira muitas fotos e depois descobre o desencontro por telefone.

Você aprenderá a localizar pessoas e objetos, narrar acontecimentos passados, indicar duração, companhia e quantidade, além de ler kanji de dias da semana e posições.`, helpPt: `Ao estudar o diálogo, desenhe dois pontos no mapa: マクドナルド e モスバーガー. A confusão espacial ajuda a fixar 前 e o passado verbal.` },
  { title: '1. あります e います', bodyPt: `Use \`あります\` para coisas não vivas, eventos e posse; use \`います\` para pessoas e outros seres vivos.

- \`あそこに ホテルが あります。\` - Há um hotel ali.
- \`あそこに 留学生が います。\` - Há um estudante internacional ali.
- \`テレビが ありません。\` - Não tenho televisão.
- \`火曜日に テストが あります。\` - Haverá uma prova na terça-feira.

Padrão básico: \`lugar に + coisa/pessoa が + あります/います\`.`, helpPt: `Pergunte “respira e se move por conta própria?” Se sim, comece com います; se não, use あります. Eventos como provas e festivais usam あります.` },
  { title: '2. Localização relativa', bodyPt: `Para localizar X em relação a Y: \`X は Y の posição です\`.

- \`ホテルの 前\` - em frente ao hotel;
- \`テーブルの 下\` - embaixo da mesa;
- \`かばんの 中\` - dentro da bolsa;
- \`図書館の となり\` - ao lado da biblioteca;
- \`スーパーと 病院の 間\` - entre o supermercado e o hospital.

Outras palavras: \`右・左・後ろ・上・近く\`. Para uma ação nesse local, use \`で\`: \`店の前で 待ちました\`.`, helpPt: `Leia da direita para a esquerda: \`ホテル の 前\` = “a frente do hotel”. A partícula の cola o ponto de referência à posição.` },
  { title: '3. Passado de です', bodyPt: `| Tempo | Afirmativo | Negativo |
| --- | --- | --- |
| presente | \`です\` | \`じゃないです\` |
| passado | \`でした\` | \`じゃなかったです\` |

- \`山下先生は 学生でした。\` - O professor Yamashita era estudante.
- \`日本の映画じゃなかったです。\` - Não era um filme japonês.`, helpPt: `Para substantivos, trate でした e じゃなかったです como blocos completos. Não use ました diretamente depois de substantivo.` },
  { title: '4. Passado dos verbos', bodyPt: `A forma polida afirmativa termina em \`ました\`; a negativa, em \`ませんでした\`.

- \`帰ります → 帰りました\`;
- \`食べません → 食べませんでした\`;
- \`勉強します → 勉強しました\`.

As regras de grupo da Lição 3 continuam válidas.`, helpPt: `Comece pela forma em ます que você já conhece e troque apenas o final: ます → ました; ません → ませんでした.` },
  { title: '5. も com partículas', bodyPt: `\`も\` substitui \`は・が・を\`: \`かばんも 買いました\`. Com outras partículas, vem depois delas: \`大阪にも 行きました\`, \`カフェでも 読みました\`.

O elemento marcado compartilha a ação ou característica mencionada antes.` },
  { title: '6. Duração', bodyPt: `A duração aparece sem partícula: \`一時間 待ちました\`. Use \`ぐらい\` para aproximação e \`半\` para meia unidade: \`三時間ぐらい\`, \`一時間半\`.

Compare horário \`七時に\` com duração \`七時間\` sem に.`, helpPt: `Se responde “a que horas?”, use に. Se responde “por quanto tempo?”, não use partícula.` },
  { title: '7. たくさん e 8. と', bodyPt: `\`たくさん\` expressa grande quantidade e pode vir antes ou depois do objeto com partícula: \`写真を たくさん 撮りました\`.

\`と\` conecta substantivos (“A e B”) ou marca companhia: \`ソラさんと 韓国に 行きます\`.`, helpPt: `No sentido de companhia, associe と a “junto com”. Para listas, と liga itens completos e explícitos.` },
  { title: 'Leitura e escrita - dias, posições e fim de semana', bodyPt: `Kanji: \`日 本 人 月 火 水 木 金 土 曜 上 下 中 半\`.

No texto \`メアリーさんのしゅうまつ\`, Mary vai ao parque e ao restaurante com amigos na sexta; no sábado vai sozinha ao templo, compra doces e tira fotos; no domingo lê uma revista, almoça com a mãe anfitriã, estuda japonês e escreve um relatório.`, helpPt: `Para ordenar a leitura, marque primeiro sexta, sábado e domingo. Depois associe cada verbo no passado ao dia correspondente.` },
]

const dialogue = [
  q('d1',1,'マクドナルドは どこですか。',['ホテルの前','ホテルの後ろ','本屋の中','公園のとなり'],1,'O desconhecido diz que fica em frente ao hotel.'),
  q('d2',2,'たけしさんは デートに 来ましたか。',['はい','いいえ'],2,'Takeshi não apareceu no local em que Mary esperava.'),
  q('d3',3,'メアリーさんは 一人で どこに 行きましたか。',['学校と図書館','本屋とお寺','銀行と郵便局','東京と大阪'],2,'Ela foi sozinha a uma livraria e a um templo.'),
  q('d4',4,'お寺で 何を しましたか。',['本を読みました','写真をたくさん撮りました','勉強しました','昼ご飯を食べました'],2,'Mary tirou muitas fotos no templo.'),
  q('d5',5,'たけしさんは どこで 待ちましたか。',['McDonald’sの前','Mos Burgerの前','ホテルの前','駅の中'],2,'Ele esperou em frente ao Mos Burger.'),
  q('d6',6,'たけしさんは どのくらい 待ちましたか。',['30分','1時間','2時間','3時間'],2,'Ele esperou uma hora.'),
  q('d7',7,'二人が 会えなかった理由は?', ['horário diferente','dia diferente','restaurante diferente','cidade diferente'],3,'Mary estava no McDonald’s e Takeshi no Mos Burger.'),
  q('d8',8,'「ごめんなさい」 expressa:', ['convite','pedido de desculpas','agradecimento','localização'],2,'Takeshi pede desculpas pelo engano.'),
]

const existenceLocation = [
  q('e1',9,'机の上に 本が（　）。',['あります','います','でした','します'],1,'Livro é não vivo: あります.'),
  q('e2',10,'教室に 学生が（　）。',['あります','います','します','でした'],2,'Pessoas usam います.'),
  q('e3',11,'明日 テストが（　）。',['います','あります','でした','食べます'],2,'Eventos usam あります.'),
  q('e4',12,'私は 自転車が（　）。',['います','あります','です','行きます'],2,'Posse de coisa usa あります.'),
  q('e5',13,'銀行は 図書館の（　）です。',['となり','中で','あります','います'],1,'となり significa ao lado.'),
  q('e6',14,'かさは テーブルの（　）です。',['下','間','右に','近くで'],1,'下 significa embaixo.'),
  q('e7',15,'スマホは かばんの（　）です。',['前','中','左','となり'],2,'中 significa dentro.'),
  q('e8',16,'レストランは スーパーと 病院の（　）です。',['上','下','間','後ろ'],3,'間 significa entre.'),
  q('e9',17,'“à direita de X”',['Xの左','Xの右','Xの中','Xの下'],2,'右 é direita.'),
  q('e10',18,'“atrás de X”',['Xの前','Xの後ろ','Xの上','Xの近く'],2,'後ろ é atrás.'),
  q('e11',19,'ホテルの前（　）待ちました。',['に','で','を','が'],2,'A espera ocorreu nesse lugar: で.'),
  q('e12',20,'Existência segue qual padrão?', ['coisaは lugarをあります','lugarに coisaが あります','lugarで coisaを います','coisaが lugarへです'],2,'Lugar に + entidade が + verbo de existência.'),
]

const past = [
  q('p1',21,'学生です → passado', ['学生でした','学生ました','学生じゃないです','学生でしました'],1,'Passado afirmativo nominal usa でした.'),
  q('p2',22,'日本の映画じゃないです → passado', ['日本の映画でした','日本の映画じゃなかったです','日本の映画ませんでした','日本の映画ないでした'],2,'Passado negativo nominal usa じゃなかったです.'),
  q('p3',23,'帰ります → passado', ['帰りました','帰りでした','帰りません','帰るました'],1,'ます muda para ました.'),
  q('p4',24,'食べません → passado negativo', ['食べなかったです','食べませんでした','食べました','食べじゃなかったです'],2,'ません muda para ませんでした.'),
  q('p5',25,'昨日 日本語を（　）。',['勉強します','勉強しました','勉強しません','勉強です'],2,'昨日 exige interpretação passada.'),
  q('p6',26,'昨日 テレビを（　）。 negativa', ['見ました','見ませんでした','見ません','見るでした'],2,'Passado negativo: 見ませんでした.'),
  q('p7',27,'先週 京都に 行きました。',['Vou a Kyoto na próxima semana.','Fui a Kyoto na semana passada.','Não fui a Kyoto.','Vou sempre a Kyoto.'],2,'先週 + 行きました indica passado.'),
  q('p8',28,'山下先生は さくら大学の 学生でした。',['é estudante','era estudante','não era estudante','será estudante'],2,'でした é passado afirmativo.'),
  q('p9',29,'来ます → passado negativo', ['来ませんでした','来なかったでした','来ました','来じゃなかったです'],1,'来ませんでした é a forma polida.'),
  q('p10',30,'しました → presente afirmativo', ['します','しません','するです','でした'],1,'Retire o marcador passado した: します.'),
]

const quantityCompanion = [
  q('q1',31,'大阪（　）行きました。 “também a Osaka”',['に','にも','もに','をも'],2,'も segue に: にも.'),
  q('q2',32,'カフェ（　）本を 読みました。 “também no café”',['もで','でも','にも','をも'],2,'も segue で: でも.'),
  q('q3',33,'一時間（　）待ちました。',['に','で','を','sem partícula'],4,'Duração aparece sem partícula.'),
  q('q4',34,'“cerca de três horas”',['三時に','三時間ぐらい','三時間に','三時ぐらいで'],2,'時間 marca duração e ぐらい aproxima.'),
  q('q5',35,'“uma hora e meia”',['一時半','一時間半','一半時間','一時間に半'],2,'一時間半 é duração de 1h30.'),
  q('q6',36,'写真を（　）撮りました。 “muitas”',['たくさん','ときどき','あまり','全然'],1,'たくさん expressa grande quantidade.'),
  q('q7',37,'日本語（　）英語を 話します。',['も','と','で','に'],2,'と liga os dois idiomas.'),
  q('q8',38,'ソラさん（　）韓国に 行きます。 “com Sora”',['も','と','を','が'],2,'と marca companhia.'),
  q('q9',39,'けんさんは うちで 本を 読みました。カフェ（　）読みました。',['にも','でも','をも','とも'],2,'O segundo local também recebe で + も.'),
  q('q10',40,'Duração responde:', ['いつ','何時','どのくらい','どこ'],3,'どのくらい pergunta por quanto tempo/quanto.'),
]

const kanjiReading = [
  q('k1',41,'月曜日',['domingo','segunda','terça','sexta'],2,'月曜日 é segunda-feira.'),
  q('k2',42,'金曜日',['quarta','quinta','sexta','sábado'],3,'金曜日 é sexta-feira.'),
  q('k3',43,'土曜日',['segunda','sábado','domingo','quinta'],2,'土曜日 é sábado.'),
  q('k4',44,'“dentro” em kanji',['上','下','中','半'],3,'中 significa meio/dentro.'),
  q('k5',45,'“embaixo” em kanji',['上','下','中','半'],2,'下 significa embaixo.'),
  q('r1',46,'Na sexta, Mary foi primeiro:', ['ao templo','ao parque','à biblioteca','à escola'],2,'Ela foi ao parque com amigos.'),
  q('r2',47,'No sábado, Mary foi ao templo:', ['com amigos','com a mãe','sozinha','com Takeshi'],3,'O texto diz 一人で.'),
  q('r3',48,'O que Mary comprou no sábado?', ['livros','doces japoneses','sapatos','uma câmera'],2,'Ela comprou おまんじゅう.'),
  q('r4',49,'No domingo à tarde, Mary:', ['foi a Osaka','estudou japonês e escreveu relatório','viu filme','trabalhou'],2,'Essas são as últimas atividades do texto.'),
  q('r5',50,'Ordem das atividades: parque → restaurante → templo → doces →', ['filme','estudo de japonês','trabalho','viagem'],2,'A sequência termina com estudo.'),
]

const listening = [
  q('l1',51,'W04-A: quem é Ken na foto?', ['a','b','c','d'],1,'Ken está marcado como a.',{audio:qa('W04_A','Workbook W04-A - Foto da festa')}),
  q('l2',52,'W04-A: quem é Rika?', ['a','b','c','d'],4,'Rika está marcada como d.',{audio:qa('W04_A','Workbook W04-A - Foto da festa')}),
  q('l3',53,'W04-A: quem é Mike?', ['b','c','d','e'],4,'Mike está marcado como e.',{audio:qa('W04_A','Workbook W04-A - Foto da festa')}),
  q('l4',54,'W04-A: quem é Takeshi?', ['a','b','c','f'],2,'Takeshi está marcado como b.',{audio:qa('W04_A','Workbook W04-A - Foto da festa')}),
  q('l5',55,'W04-A: quem é a mãe?', ['c','d','e','f'],4,'A mãe está marcada como f.',{audio:qa('W04_A','Workbook W04-A - Foto da festa')}),
  q('l6',56,'W04-A: quem é o pai?', ['a','b','c','f'],3,'O pai está marcado como c.',{audio:qa('W04_A','Workbook W04-A - Foto da festa')}),
  q('l7',57,'W04-B: o que o pai fez ontem?', ['estudou','viu TV','tirou fotos','foi a Tokyo'],2,'Ele viu televisão.',{audio:qa('W04_B','Workbook W04-B - Conversa em casa')}),
  q('l8',58,'W04-B: o que o pai fez hoje?', ['trabalhou','foi ao templo','leu revista','fez compras'],1,'A resposta preenchida indica trabalho.',{audio:qa('W04_B','Workbook W04-B - Conversa em casa')}),
  q('l9',59,'W04-B: o que Mary e o pai farão amanhã?', ['ver filme','jogar tênis','ir à biblioteca','estudar'],2,'Eles jogarão tênis.',{audio:qa('W04_B','Workbook W04-B - Conversa em casa')}),
  q('l10',60,'W04-C: qual é a data?', ['10/9','13/9','14/9','18/9'],3,'A data é 14 de setembro.',{audio:qa('W04_C','Workbook W04-C - Sala de aula')}),
  q('l11',61,'W04-C: qual é o dia da semana?', ['domingo','segunda','terça','quarta'],2,'É segunda-feira.',{audio:qa('W04_C','Workbook W04-C - Sala de aula')}),
  q('l12',62,'W04-C: quem estudou?', ['Sora e Mary','Mary e Robert','Sora e Robert','todos'],1,'As marcas aparecem para Sora e Mary.',{audio:qa('W04_C','Workbook W04-C - Sala de aula')}),
  q('l13',63,'W04-C: quem tirou fotos?', ['Sora','Mary','Robert','todos'],3,'Robert tirou fotos.',{audio:qa('W04_C','Workbook W04-C - Sala de aula')}),
  q('l14',64,'W04-C: quem leu um livro?', ['Sora','Mary','Robert','ninguém'],2,'Mary leu um livro.',{audio:qa('W04_C','Workbook W04-C - Sala de aula')}),
  q('l15',65,'W04-C: quem foi a Tokyo e fez compras?', ['Sora','Mary','Robert','Sora e Mary'],3,'Robert realizou as duas atividades.',{audio:qa('W04_C','Workbook W04-C - Sala de aula')}),
]

const scripts: Record<string, ScriptItem[]> = {
  K04_01: [{
    label: '{会話|かいわ} I',
    setupJa: '{第4課|だいよんか} {初|はじ}めてのデート。{会話|かいわ} I。',
    setupPt: 'Lição 4 — O primeiro encontro. Diálogo I.',
    lines: [
      { speaker: 'M', ja: 'すみません。マクドナルドは どこですか。', pt: 'Com licença. Onde fica o McDonald’s?' },
      { speaker: 'H', ja: 'あそこに ホテルが ありますね。', pt: 'Há um hotel ali.' },
      { speaker: 'H', ja: 'マクドナルドは あのホテルの {前|まえ}ですよ。', pt: 'O McDonald’s fica em frente àquele hotel.' },
      { speaker: 'M', ja: 'ありがとうございます。', pt: 'Muito obrigada.' },
    ],
  }],
  K04_03: [{
    label: '{会話|かいわ} II',
    setupJa: '{二|に}。',
    setupPt: 'Diálogo II.',
    lines: [
      { speaker: 'M', ja: 'ただいま。', pt: 'Cheguei.' },
      { speaker: 'F', ja: 'おかえりなさい。{映画|えいが}は どうでしたか。', pt: 'Bem-vinda de volta. Como foi o filme?' },
      { speaker: 'M', ja: '{見|み}ませんでした。たけしさんは {来|き}ませんでした。', pt: 'Não o vi. Takeshi não veio.' },
      { speaker: 'F', ja: 'えっ、どうしてですか。', pt: 'Hã? Por quê?' },
      { speaker: 'M', ja: 'わかりません。だから、{一人|ひとり}で {本屋|ほんや}と お{寺|てら}に {行|い}きました。', pt: 'Não sei. Por isso, fui sozinha a uma livraria e a um templo.' },
      { speaker: 'F', ja: '{人|ひと}が たくさん いましたか。', pt: 'Havia muita gente?' },
      { speaker: 'M', ja: 'はい。お{寺|てら}で {写真|しゃしん}を たくさん {撮|と}りました。', pt: 'Sim. Tirei muitas fotos no templo.' },
      { speaker: 'M', ja: '{公園|こうえん}にも {行|い}きました。', pt: 'Também fui a um parque.' },
      { speaker: 'F', ja: 'そうですか。', pt: 'Entendo.' },
    ],
  }],
  K04_05: [{
    label: '{会話|かいわ} III',
    setupJa: '{三|さん}。',
    setupPt: 'Diálogo III.',
    lines: [
      { speaker: 'T', ja: 'もしもし、メアリーさん。', pt: 'Alô, Mary.' },
      { speaker: 'M', ja: 'あっ、たけしさん。{今日|きょう} {来|き}ませんでしたね。', pt: 'Ah, Takeshi. Você não veio hoje, não é?' },
      { speaker: 'T', ja: '{行|い}きましたよ。モスバーガーの {前|まえ}で {一時間|いちじかん} {待|ま}ちました。', pt: 'Fui sim. Esperei uma hora em frente ao Mos Burger.' },
      { speaker: 'M', ja: 'モスバーガーじゃないですよ。マクドナルドですよ。', pt: 'Não era Mos Burger. Era McDonald’s.' },
      { speaker: 'T', ja: 'マクドナルド……ごめんなさい！', pt: 'McDonald’s... desculpe!' },
    ],
  }],
  Y04: [{
    label: 'III　メアリーさんのしゅうまつ',
    setupJa: '{読|よ}み{書|か}き{編|へん} {第4課|だいよんか} III　メアリーさんのしゅうまつ。',
    setupPt: 'Seção de leitura e escrita, Lição 4, III — O fim de semana de Mary.',
    lines: [
      { speaker: 'N', ja: '{金曜日|きんようび}に {日本人|にほんじん}の ともだちと こうえんに いきました。', pt: 'Na sexta-feira, fui ao parque com amigos japoneses.' },
      { speaker: 'N', ja: 'こうえんで ともだちと はなしました。', pt: 'Conversei com meus amigos no parque.' },
      { speaker: 'N', ja: 'それから、レストランへ いきました。', pt: 'Depois disso, fui a um restaurante.' },
      { speaker: 'N', ja: 'たくさん たべました。', pt: 'Comi bastante.' },
      { speaker: 'N', ja: '{土曜日|どようび}は {一人|ひとり}で おてらへ いきました。', pt: 'No sábado, fui sozinha a um templo.' },
      { speaker: 'N', ja: 'たくさん みせが ありました。', pt: 'Havia muitas lojas.' },
      { speaker: 'N', ja: 'みせで おまんじゅうを かいました。', pt: 'Comprei manju em uma loja.' },
      { speaker: 'N', ja: '{日曜日|にちようび}は おそく おきました。', pt: 'No domingo, acordei tarde.' },
      { speaker: 'N', ja: 'おかあさんも おそく おきました。', pt: 'Minha mãe anfitriã também acordou tarde.' },
      { speaker: 'N', ja: 'わたしは あさ、ざっしを よみました。', pt: 'De manhã, li uma revista.' },
      { speaker: 'N', ja: 'それから、おかあさんと ひるごはんを たべました。', pt: 'Depois, almocei com minha mãe anfitriã.' },
      { speaker: 'N', ja: 'ごごは {日本語|にほんご}を べんきょうしました。', pt: 'À tarde, estudei japonês.' },
      { speaker: 'N', ja: 'レポートも かきました。', pt: 'Também escrevi um relatório.' },
    ],
  }],
}

type FullAudioTranscript = NonNullable<AudioTrack['transcript']>

function fullTranscript(items: ScriptItem[]): FullAudioTranscript {
  return { kind: 'full', source: 'source-aligned', reviewed: true, items }
}

const fullTranscripts: Partial<Record<string, FullAudioTranscript>> = {
  K04_01: fullTranscript(scripts.K04_01),
  K04_03: fullTranscript(scripts.K04_03),
  K04_05: fullTranscript(scripts.K04_05),
  Y04: fullTranscript(scripts.Y04),
}
const files=[...Array.from({length:19},(_,i)=>`K04_${String(i+1).padStart(2,'0')}`),'Y04','W04_A','W04_B','W04_C']
const audios: AudioTrack[]=files.map(file=>{const transcript=fullTranscripts[file];return{id:`genki-1-l4-audio-${file.toLowerCase()}`,title:file==='K04_01'?'Diálogo I - localização':file==='K04_03'?'Diálogo II - o dia de Mary':file==='K04_05'?'Diálogo III - o desencontro':file==='Y04'?'Leitura - O fim de semana de Mary':file.startsWith('W04')?`Workbook - ${file.slice(-1)}`:`Textbook - ${file}`,descriptionPt:file==='Y04'?'Leitura integral do texto da Lição 4.':file.startsWith('W04')?'Compreensão oral do workbook.':'Áudio do diálogo, vocabulário ou prática correspondente.',src:`${BASE}/${file}.mp3`,script:transcript?.items??[],transcript}})

export const genki1Lesson4: Section={id:'lesson-4',level:'genki-1',titleJa:'第4課　初めてのデート',titlePt:'Lição 4 - O primeiro encontro',summaryPt:'Existência, localização, passado, duração, quantidade, companhia, kanji de dias e leitura do fim de semana.',studyNotes,groups:[group('dialogue','会話','compreensão dos diálogos',dialogue),group('existence-location','文法 1・2','existência e localização',existenceLocation),group('past','文法 3・4','formas do passado',past),group('quantity-companion','文法 5〜8','duração, quantidade e companhia',quantityCompanion),group('kanji-reading','読み書き','kanji e leitura',kanjiReading),group('listening','聞く練習','compreensão oral do workbook',listening)],audios}
