import type {AudioTrack,ExerciseGroup,Question,ScriptItem,Section,StudyNote} from './types'
const B='/audio/genki/genki-1/lesson-10',q=(id:string,n:number,p:string,c:string[],a:number,e:string,o:Partial<Pick<Question,'audio'|'helpPt'>>={}):Question=>({id:`genki-1-l10-${id}`,number:n,prompt:p,choices:c.map((text,i)=>({n:i+1,text})),answer:a,explanationPt:e,...o}),g=(id:string,t:string,s:string,questions:Question[]):ExerciseGroup=>({id:`genki-1-l10-${id}`,title:t,subtitlePt:s,instructionJa:'',instructionPt:`Pratique ${s.toLowerCase()} com base na Lição 10.`,questions}),au=(f:string,t:string)=>({src:`${B}/${f}.mp3`,title:t})
const studyNotes:StudyNote[]=[
{title:'Objetivos e diálogos',bodyPt:'Mary compara Hokkaido e Kyushu e planeja as férias; no hotel, pergunta como chegar ao zoológico de Asahiyama e reserva um passeio. A lição trabalha comparação, planos, mudanças, lugares indefinidos e meios.',helpPt:'Em comparações, não confie só na ordem. Marque visualmente Aのほうが como vencedor da propriedade e Bより como referência.'},
{title:'1. Comparação entre dois itens',bodyPt:'Aのほうが Bより + propriedade: 中国のほうが日本より大きいです。 Pergunta: AとBとどちら／どっちのほうが…？ Resposta nomeia o item com のほうが.'},
{title:'2. Superlativo',bodyPt:'Em grupo de três ou mais: categoria の中で Xがいちばん + propriedade. カナダとフランスと日本の中で、どこがいちばん寒いですか。 Use どれ/何/だれ/いつ/どこ conforme a categoria, não どちら.',helpPt:'Dois itens pedem どちら; três ou mais pedem uma pergunta comum + いちばん.'},
{title:'3. Adjetivo/substantivo + の',bodyPt:'Quando o substantivo está claro, の evita repetição: 赤いセーター→赤いの, 好きなケーキ→好きなの, メアリーさんのかばん→メアリーさんの. Refere-se sobretudo a coisas.'},
{title:'4. 〜つもりだ',bodyPt:'Forma curta presente + つもりです expressa intenção: テニスをするつもりです。 Negativa: 来ないつもりです。 つもりでした pode indicar plano original que não se realizou.',helpPt:'つもり descreve decisão/intenção mais firme que simples previsão. Use forma não passada mesmo para um plano futuro.'},
{title:'5. Adjetivo + なる',bodyPt:'Mudança: adjetivo い troca い por くなる (寒くなる); adjetivo な recebe になる (静かになる); substantivo recebe になる (会社員になる). 前より pode indicar “mais que antes”.'},
{title:'6. どこかに／どこにも',bodyPt:'どこか = algum lugar; だれか = alguém; 何か = algo. Com negativas, どこにも／だれにも／何も + negativo. Partículas に・へ・で ficam antes de か/も: どこかへ, だれかに.',helpPt:'は・が・を costumam desaparecer; outras partículas permanecem. Visualize “pergunta + partícula + か/も”.'},
{title:'7. で como meio',bodyPt:'で marca transporte, instrumento, língua ou meio: バスで行く, はしで食べる, 日本語で話す, テレビで見る.'},
{title:'Leitura e escrita — かさじぞう',bodyPt:'Kanji: 住 正 年 売 買 町 長 道 雪 立 自 夜 朝 持. No conto, um casal pobre faz chapéus de palha. O velho não consegue vendê-los e, na neve, cobre estátuas de Jizo; à noite elas levam comida para o Ano-Novo.',helpPt:'Contos repetem ações e consequências. Organize: fazer → tentar vender → dar aos Jizo → receber comida.'}]
const dialogue=[q('d1',1,'Mary pretende ir a:',['Tokyo ou Osaka','Hokkaido ou Kyushu','Seul','London'],2,'北海道か九州に行くつもり.'),q('d2',2,'Qual Takeshi recomenda no inverno?',['Kyushu','Hokkaido','nenhum','Shikoku'],2,'冬は北海道のほうがおもしろい.'),q('d3',3,'Takeshi viajará?',['sim, Hokkaido','sim, Kyushu','não, não tem dinheiro','ainda decide'],3,'お金がないから、どこにも行きません.'),q('d4',4,'O que Mary promete?',['ingresso','lembrança','dinheiro','hotel'],2,'おみやげを買ってきます.'),q('d5',5,'Quanto leva ao zoológico?',['30 min','1h','2h30','4h'],3,'電車とバスで二時間半ぐらい.'),q('d6',6,'Quais dias têm excursão?',['sexta/sábado','sábado/domingo','domingo/segunda','todo dia'],2,'土曜日と日曜日.'),q('d7',7,'Preço do passeio:',['2.800','4.800','6.000','14.000'],2,'四千八百円.'),q('d8',8,'Qual passeio Mary reserva?',['sábado','domingo','ambos','nenhum'],1,'土曜日のをお願いします.')]
const comparison=[q('c1',9,'“China é maior que Japão.”',['中国より日本のほうが大きい','中国のほうが日本より大きい','中国が日本の中で大きい','日本と中国が大きい'],2,'AのほうがBより.'),q('c2',10,'日本とカナダと（　）が寒いですか。',['どちらのほう','どっち','どちら','どちらの中'],1,'Dois itens usam どちらのほう.'),q('c3',11,'Resposta “Canadá é mais frio”',['カナダより寒い','カナダのほうが寒い','カナダがいちばん二つ','カナダの中で'],2,'Item preferido + のほうが.'),q('c4',12,'Três países: qual é o mais frio?',['どちらのほうが','どこがいちばん','どっちがより','何のほうが'],2,'Grupo amplo usa どこ + いちばん.'),q('c5',13,'季節の中で（　）がいちばん好きですか。',['どちら','いつ','何','だれ'],2,'Estações/tempo: いつ.'),q('c6',14,'“Outono é o que mais gosto.”',['秋のほうが好き','秋がいちばん好き','秋より好き','秋の中でどちら'],2,'Xがいちばん.'),q('c7',15,'Qual estrutura não é usada com 3+ itens?',['の中で','いちばん','どちらのほう','どこが'],3,'どちら compara dois.'),q('c8',16,'新幹線 é mais rápido que ônibus:',['新幹線のほうがバスより速い','バスのほうが新幹線より速い','新幹線がいちばん二つ','新幹線より速いバス'],1,'AのほうがBより.'),q('n1',17,'“o suéter vermelho” sem repetir suéter:',['赤いな','赤いの','赤の','赤いこと'],2,'Adjetivo い + の.'),q('n2',18,'“o bolo de que gosto”',['好きの','好きなの','好きだの','好きいの'],2,'Adjetivo な + な + の.'),q('n3',19,'“o de Mary” (bolsa já conhecida)',['メアリーさんの','メアリーさんな','メアリーさんもの','メアリーさんこと'],1,'N1の substitui N2.'),q('n4',20,'の substitutivo refere-se principalmente a:',['pessoas','coisas','verbos','lugares apenas'],2,'Para pessoas, 人 é normalmente preferido.')]
const planChange=[q('p1',21,'“Pretendo jogar tênis.”',['テニスをするつもりです','したつもりです','しているつもりだっただけ','しますつもり'],1,'Curta presente + つもり.'),q('p2',22,'“Não pretendo vir.”',['来ないつもりです','来ませんつもり','来なかったつもり','来なくてつもり'],1,'Negativa curta presente.'),q('p3',23,'Planejava ir ao templo, mas não fui:',['行くつもりです','行くつもりでした','行ったつもりです','行かないつもりでした'],2,'つもりでした = intenção original.'),q('p4',24,'冬休みに 北海道に（　）。',['行ったつもりです','行くつもりです','行きますつもり','行ってつもり'],2,'Plano futuro usa forma presente curta.'),q('ch1',25,'暖かい → “ficar quente”',['暖かいになる','暖かくなる','暖かになる','暖かくにする'],2,'い→く + なる.'),q('ch2',26,'静か → “ficar silencioso”',['静かくなる','静かになる','静かななる','静かでなる'],2,'Adjetivo な + に.'),q('ch3',27,'会社員 → “tornar-se funcionário”',['会社員くなる','会社員になる','会社員でなる','会社員ななる'],2,'Substantivo + に.'),q('ch4',28,'日本語が（　）。 “ficou divertido”',['楽しいになりました','楽しくなりました','楽しかったになります','楽しみなりました'],2,'い→くなりました.'),q('ch5',29,'日本語が（　）。 “passei a gostar”',['好きくなりました','好きになりました','好きでなりました','好きなりました'],2,'好き é adjetivo な.'),q('ch6',30,'前より 上手に なりました。',['ficou pior','ficou melhor que antes','é o melhor','pretende melhorar'],2,'前より estabelece comparação com antes.'),q('ch7',31,'寒い → mudança negativa “não ficou frio”',['寒くなりませんでした','寒いになりません','寒くないなりました','寒かったです'],1,'寒くなる no passado negativo.'),q('ch8',32,'先生（　）つもりです。 “pretendo tornar-me”',['くなる','になる','をなる','でなる'],2,'Substantivo + になる.')]
const indefMeans=[q('i1',33,'どこ（　）行きましたか。 “algum lugar”',['も','かへ','へか','をか'],2,'Partícula へ antes de か.'),q('i2',34,'どこ（　）行きませんでした。 “lugar nenhum”',['にも','かに','もを','何も'],1,'どこにも + negativo.'),q('i3',35,'だれ（　）会いましたか。 “alguém”',['かに','にか','もに','がか'],1,'だれかに: か vem antes de に? Fonte mostra だれかに; logo か + に.'),q('i4',36,'だれ（　）会いませんでした。',['かに','にも','もに','をも'],2,'だれにも + negativo.'),q('m1',37,'バス（　）駅まで行きました。',['に','で','を','が'],2,'で marca transporte.'),q('m2',38,'はし（　）ご飯を食べます。',['を','で','に','が'],2,'Instrumento com で.'),q('m3',39,'日本語（　）話しましょう。',['を','で','に','へ'],2,'Idioma/meio com で.'),q('m4',40,'テレビ（　）映画を見ました。',['を','で','に','へ'],2,'Meio de exibição com で.')]
const kanjiReading=[q('k1',41,'売る／買う',['dar/receber','vender/comprar','ir/voltar','fazer/carregar'],2,'売 = vender; 買 = comprar.'),q('k2',42,'雪／夜／朝',['chuva/tarde/manhã','neve/noite/manhã','inverno/noite/dia','branco/ano/noite'],2,'Kanji do conto.'),q('k3',43,'Por que o velho vai à cidade?',['comprar arroz','vender chapéus','visitar família','ver neve'],2,'Ele tenta vender chapéus.'),q('k4',44,'O que faz com os Jizo?',['vende-os','coloca chapéus neles','leva para casa','pinta'],2,'Protege as estátuas da neve.'),q('k5',45,'O que acontece à noite?',['a neve para','os Jizo levam comida','o casal viaja','o velho vende tudo'],2,'Recebem comida para o Ano-Novo.'),q('k6',46,'Mensagem central do conto:',['competição','generosidade recompensada','viagem','estudo'],2,'O gesto desinteressado é recompensado.')]
const listening=[q('l1',47,'W10-A: Mary ficará em Hokkaido por:',['3 dias','1 semana','2 semanas','1 mês'],2,'一週間ぐらい.',{audio:au('W10_A','Workbook W10-A — Férias')}),q('l2',48,'W10-A: Robert ficará em London:',['22/12 a 23/1','1 semana','até 3/1','2 semanas'],1,'Datas informadas no áudio.',{audio:au('W10_A','Workbook W10-A — Férias')}),q('l3',49,'W10-A: Takeshi fará:',['viagem','trabalho','não viajará e estará livre','esqui'],3,'Sem dinheiro e sem trabalho.',{audio:au('W10_A','Workbook W10-A — Férias')}),q('l4',50,'W10-A: Sora ficará em Hokkaido:',['1 semana','2 semanas','1 mês','3 dias'],2,'二週間ぐらい.',{audio:au('W10_A','Workbook W10-A — Férias')}),q('l5',51,'W10-B: maior universidade:',['Hanaoka','Sakura','Tsushima'],1,'花岡大学がいちばん大きい.',{audio:au('W10_B','Workbook W10-B — Universidades')}),q('l6',52,'W10-B: mais barata:',['Hanaoka','Sakura','Tsushima'],2,'Sakura custa cerca de 700 mil.',{audio:au('W10_B','Workbook W10-B — Universidades')}),q('l7',53,'W10-B: mais próxima:',['Hanaoka','Sakura','Tsushima'],3,'Tsushima fica a 30 min de ônibus.',{audio:au('W10_B','Workbook W10-B — Universidades')}),q('l8',54,'W10-C: Yui voltou de Tokyo em:',['11/12','15/12','22/12','23/1'],2,'O diário diz 12月15日に帰った.',{audio:au('W10_C','Workbook W10-C — Diário de viagem')})]
const scripts:Record<string,ScriptItem[]>={
K10_01:[{label:'{会話|かいわ} I',lines:[
{speaker:'Anúncio',ja:'{第十課|だいじゅっか}　{冬休|ふゆやす}みの{予定|よてい}　{会話|かいわ}{一|いち}',pt:'Lição 10: Planos para as férias de inverno. Diálogo I.'},
{speaker:'M',ja:'{寒|さむ}くなりましたね。',pt:'Ficou frio, não é?'},
{speaker:'T',ja:'ええ。メアリーさん、{冬休|ふゆやす}みはどうしますか。',pt:'Sim. Mary, o que você vai fazer nas férias de inverno?'},
{speaker:'M',ja:'{北海道|ほっかいどう}か{九州|きゅうしゅう}に{行|い}くつもりですが、まだ{決|き}めていません。',pt:'Pretendo ir a Hokkaido ou Kyushu, mas ainda não decidi.'},
{speaker:'T',ja:'いいですね。',pt:'Que bom.'},
{speaker:'M',ja:'{北海道|ほっかいどう}と{九州|きゅうしゅう}とどっちのほうがいいと{思|おも}いますか。',pt:'Qual dos dois você acha melhor, Hokkaido ou Kyushu?'},
{speaker:'T',ja:'{冬|ふゆ}は{北海道|ほっかいどう}のほうがおもしろいと{思|おも}います。ぼくの{友|とも}だちは{食|た}べ{物|もの}もおいしいと{言|い}っていましたよ。',pt:'Acho Hokkaido mais interessante no inverno. Meu amigo também disse que a comida de lá é gostosa.'},
{speaker:'M',ja:'そうですか。ところで、たけしさんはどこかに{行|い}きますか。',pt:'Entendo. A propósito, Takeshi, você vai a algum lugar?'},
{speaker:'T',ja:'お{金|かね}がないから、どこにも{行|い}きません。',pt:'Como não tenho dinheiro, não vou a lugar nenhum.'},
{speaker:'M',ja:'そうですか。じゃあ、たけしさんにおみやげを{買|か}ってきますよ。',pt:'Entendo. Então vou trazer uma lembrança para você.'},
{speaker:'T',ja:'わあ、ありがとう。',pt:'Uau, obrigado.'},
]}],
K10_03:[{label:'{会話|かいわ} II',lines:[
{speaker:'Anúncio',ja:'{二|に}',pt:'Diálogo II.'},
{speaker:'M',ja:'すみません。ここから{旭山動物園|あさひやまどうぶつえん}までどのぐらいかかりますか。',pt:'Com licença. Quanto tempo leva daqui até o Zoológico de Asahiyama?'},
{speaker:'H',ja:'そうですね。{電車|でんしゃ}とバスで{二時間半|にじかんはん}ぐらいです。',pt:'Vejamos. Cerca de duas horas e meia de trem e ônibus.'},
{speaker:'M',ja:'{時間|じかん}がかかりますね。',pt:'Leva bastante tempo, não é?'},
{speaker:'H',ja:'{土曜日|どようび}と{日曜日|にちようび}はバスツアーがありますが……。',pt:'Há passeios de ônibus aos sábados e domingos...'},
{speaker:'M',ja:'そうですか。いくらですか。',pt:'É mesmo? Quanto custa?'},
{speaker:'H',ja:'{四千八百円|よんせんはっぴゃくえん}です。',pt:'São 4.800 ienes.'},
{speaker:'M',ja:'いいですね。じゃあ、ツアーの{予約|よやく}をお{願|ねが}いします。',pt:'Ótimo. Então, gostaria de reservar o passeio.'},
{speaker:'M',ja:'{土曜日|どようび}のをお{願|ねが}いします。',pt:'O de sábado, por favor.'},
]}],
Y10:[{label:'B — かさじぞう',lines:[
{speaker:'Anúncio',ja:'{読み書き編|よみかきへん}　{第十課|だいじゅっか}　{二|に}　かさじぞう　B　かさじぞう',pt:'Parte de leitura e escrita, lição 10, seção II: Kasajizo. Seção B: Kasajizo.'},
{speaker:'N',ja:'むかしむかし、{山|やま}の{中|なか}におじいさんとおばあさんが{住|す}んでいました。',pt:'Era uma vez um senhor e uma senhora que moravam nas montanhas.'},
{speaker:'N',ja:'おじいさんとおばあさんはうちでかさを{作|つく}っていました。',pt:'O senhor e a senhora faziam chapéus de palha em casa.'},
{speaker:'N',ja:'あしたはお{正月|しょうがつ}です。{新|あたら}しい{年|とし}がはじまります。',pt:'Amanhã é Ano-Novo. Um novo ano vai começar.'},
{speaker:'N',ja:'でも、おじいさんとおばあさんはお{金|かね}がなかったから、お{正月|しょうがつ}のおもちもありませんでした。',pt:'Mas, como eles não tinham dinheiro, também não tinham bolinhos de arroz para o Ano-Novo.'},
{speaker:'N',ja:'{二人|ふたり}はかさを{売|う}って、おもちを{買|か}うつもりでした。',pt:'Os dois pretendiam vender os chapéus e comprar bolinhos de arroz.'},
{speaker:'N',ja:'おじいさんはかさを{持|も}って、{町|まち}に{売|う}りに{行|い}きました。',pt:'O senhor levou os chapéus à cidade para vendê-los.'},
{speaker:'N',ja:'でも、だれもかさを{買|か}いませんでした。おじいさんはかなしくなりました。',pt:'Mas ninguém comprou os chapéus. O senhor ficou triste.'},
{speaker:'N',ja:'おじいさんは{長|なが}い{山道|やまみち}を{歩|ある}いて{帰|かえ}りました。{雪|ゆき}がたくさんふっていました。',pt:'O senhor voltou a pé pelo longo caminho da montanha. Nevava muito.'},
{speaker:'N',ja:'「あっ！　おじぞうさんだ！」',pt:'“Ah! São estátuas de Jizo!”'},
{speaker:'N',ja:'{雪|ゆき}の{中|なか}におじぞうさんが{六|むっ}つ{立|た}っていました。',pt:'Havia seis estátuas de Jizo de pé na neve.'},
{speaker:'N',ja:'おじいさんは「おじぞうさん、さむくないですか。」と{聞|き}きました。',pt:'O senhor perguntou: “Senhores Jizo, vocês não estão com frio?”'},
{speaker:'N',ja:'おじぞうさんは{何|なに}も{言|い}いませんでした。',pt:'Os Jizo não disseram nada.'},
{speaker:'N',ja:'「どうぞかさを{使|つか}ってください。」',pt:'“Por favor, usem estes chapéus.”'},
{speaker:'N',ja:'おじいさんはおじぞうさんのあたまの{上|うえ}にかさをかぶせました。',pt:'O senhor colocou um chapéu na cabeça de cada Jizo.'},
{speaker:'N',ja:'「{一|ひと}つ、{二|ふた}つ、{三|みっ}つ、{四|よっ}つ、{五|いつ}つ。」',pt:'“Um, dois, três, quatro, cinco.”'},
{speaker:'N',ja:'かさは{五|いつ}つでした。{一人|ひとり}のおじぞうさんはかさがありませんでした。',pt:'Havia cinco chapéus. Um dos Jizo ficou sem chapéu.'},
{speaker:'N',ja:'おじいさんは{自分|じぶん}のかさをとりました。',pt:'O senhor tirou o próprio chapéu.'},
{speaker:'N',ja:'「このかさは{古|ふる}いですが、どうぞ。」と{言|い}って、おじぞうさんにかぶせました。',pt:'Ele disse: “Este chapéu é velho, mas fique com ele”, e o colocou no Jizo.'},
{speaker:'N',ja:'うちに{帰|かえ}って、おじいさんはおばあさんにおじぞうさんの{話|はなし}をしました。',pt:'Ao voltar para casa, o senhor contou à senhora sobre os Jizo.'},
{speaker:'N',ja:'おばあさんは「おじいさん、いいことをしましたね。」と{言|い}いました。',pt:'A senhora disse: “Você fez uma boa ação.”'},
{speaker:'N',ja:'その{夜|よる}おそく、おじいさんはだれかの{声|こえ}を{聞|き}きました。',pt:'Mais tarde naquela noite, o senhor ouviu a voz de alguém.'},
{speaker:'N',ja:'「おじいさん、おじいさん。」',pt:'“Senhor, senhor.”'},
{speaker:'N',ja:'おじいさんは{戸|と}を{開|あ}けて、びっくりしました。',pt:'O senhor abriu a porta e ficou surpreso.'},
{speaker:'N',ja:'{六人|ろくにん}のおじぞうさんが{立|た}っていました。',pt:'Os seis Jizo estavam ali.'},
{speaker:'N',ja:'おじぞうさんはお{正月|しょうがつ}のおもちをたくさん{持|も}っていました。',pt:'Os Jizo tinham trazido muitos bolinhos de arroz para o Ano-Novo.'},
{speaker:'N',ja:'お{正月|しょうがつ}の{朝|あさ}になりました。',pt:'Chegou a manhã de Ano-Novo.'},
{speaker:'N',ja:'おじいさんとおばあさんはおもちをたくさん{食|た}べました。{二人|ふたり}はとてもしあわせでした。',pt:'O senhor e a senhora comeram muitos bolinhos de arroz. Os dois ficaram muito felizes.'},
]}],
}
const fs=[...Array.from({length:15},(_,i)=>`K10_${String(i+1).padStart(2,'0')}`),'Y10','W10_A','W10_B','W10_C'],audios:AudioTrack[]=fs.map(f=>{
const script=scripts[f]??[]
return {id:`genki-1-l10-audio-${f.toLowerCase()}`,title:f==='K10_01'?'Diálogo I — férias de inverno':f==='K10_03'?'Diálogo II — reserva do passeio':f==='Y10'?'Leitura — Kasajizo':f.startsWith('W10')?`Workbook — ${f.slice(-1)}`:`Textbook — ${f}`,descriptionPt:f==='Y10'?'Leitura integral do conto.':f.startsWith('W10')?'Compreensão oral do workbook.':'Áudio do diálogo, vocabulário ou prática correspondente.',src:`${B}/${f}.mp3`,script,transcript:script.length?{kind:'full' as const,source:'source-aligned' as const,reviewed:true,items:script}:undefined}
})
export const genki1Lesson10:Section={id:'lesson-10',level:'genki-1',titleJa:'第10課　冬休みの予定',titlePt:'Lição 10 — Planos para as férias de inverno',summaryPt:'Comparações, superlativos, substituição com の, intenções, mudanças, indefinidos, meios, kanji, conto e escuta.',studyNotes,groups:[g('dialogue','会話','compreensão dos diálogos',dialogue),g('comparison','文法 1〜3','comparações e substituição com の',comparison),g('plan-change','文法 4・5','planos e mudanças',planChange),g('indef-means','文法 6・7','indefinidos e meios',indefMeans),g('kanji-reading','読み書き','kanji e leitura',kanjiReading),g('listening','聞く練習','compreensão oral do workbook',listening)],audios}
