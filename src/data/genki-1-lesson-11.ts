import type {AudioTrack,ExerciseGroup,Question,ScriptItem,Section,StudyNote} from './types'
const B='/audio/genki/genki-1/lesson-11',q=(id:string,n:number,p:string,c:string[],a:number,e:string,o:Partial<Pick<Question,'audio'|'helpPt'>>={}):Question=>({id:`genki-1-l11-${id}`,number:n,prompt:p,choices:c.map((text,i)=>({n:i+1,text})),answer:a,explanationPt:e,...o}),g=(id:string,t:string,s:string,questions:Question[]):ExerciseGroup=>({id:`genki-1-l11-${id}`,title:t,subtitlePt:s,instructionJa:'',instructionPt:`Pratique ${s.toLowerCase()} com base na Lição 11.`,questions}),au=(f:string,t:string)=>({src:`${B}/${f}.mp3`,title:t})
const studyNotes:StudyNote[]=[
{title:'Objetivos e diálogos',bodyPt:'Depois das férias, Mary e Yui contam suas atividades. Mary apresenta John, que fala sobre Cairns, e Yui o convida a visitar Nagano. A lição trabalha desejos, exemplos de ações, experiências e listas abertas.',helpPt:'たい, たり e ことがある partem de bases diferentes: base de ます + たい; passado curto + り; passado curto + ことがある.'},
{title:'1. 〜たい',bodyPt:'Base de ます + たいです: 映画を見たいです。 O objeto pode receber を ou が. たい conjuga como adjetivo い: 会いたくない, 買いたかった. Desejo duradouro: たいと思っています. Para o desejo de outra pessoa, cite o que ela disse ou use たがっている.',helpPt:'たい expressa principalmente o desejo do falante ou pergunta diretamente ao interlocutor. Evite afirmar a mente de terceiros como fato.'},
{title:'2. 〜たり〜たりする',bodyPt:'Passado curto + り lista ações como exemplos, sem ordem nem exaustividade: 買い物をしたり、晩ご飯を食べたりします。 O する final recebe tempo e polaridade: しました／しません.'},
{title:'3. 〜たことがある',bodyPt:'Passado curto + ことがある descreve experiência em algum momento: 富士山に登ったことがあります。 Negativa: 休んだことがありません. Resposta curta: はい、あります／いいえ、ありません.',helpPt:'Não use ことがあります sem o verbo ao repetir a frase completa; a resposta curta isolada, porém, é あります.'},
{title:'4. AやB',bodyPt:'や liga exemplos de substantivos e sugere que há outros: 京都や奈良に行きました. と apresenta lista fechada; や apresenta lista aberta.'},
{title:'Leitura e escrita — 友だち・メンバー募集',bodyPt:'Kanji: 手 紙 好 近 明 病 院 映 画 歌 市 所 勉 強 有 旅. Quatro anúncios procuram voluntários, parceiros de atividades ao ar livre, companhia para cinema e integrantes de banda. Cada perfil combina interesses, rotina e meta futura.',helpPt:'Leia anúncios procurando quatro campos: quem escreve, atividade, frequência/local e objetivo. Isso transforma texto corrido em ficha.'}]
const dialogue=[q('d1',1,'O que Mary fez em Hokkaido?',['trabalhou','zoológico e compras','esqui','nada'],2,'動物園に行ったり、買い物をしたり.'),q('d2',2,'Como foram as férias de Yui?',['ótimas','razoáveis; dirigiu um dia e trabalhou','viajou ao exterior','ficou doente'],2,'まあまあ; drive e trabalho diário.'),q('d3',3,'Quem Mary apresenta?',['Ken','John','Robert','Takeshi'],2,'こちらはジョンさんです.'),q('d4',4,'Quando John veio ao Japão?',['ontem','mês passado','ano passado','hoje'],2,'先月、日本に来ました.'),q('d5',5,'De onde John é?',['Sydney','Cairns','London','Nagano'],2,'オーストラリアのケアンズ.'),q('d6',6,'Yui já foi a Cairns?',['sim','não','morou lá','não é dito'],2,'いいえ、ありません.'),q('d7',7,'Pelo que Cairns é famosa?',['kabuki','Great Barrier Reef','neve','templos'],2,'グレートバリアリーフ.'),q('d8',8,'Qual cidade Yui convida John a visitar?',['Tokyo','Nagano','Kyoto','Seul'],2,'長野へ遊びに来てください.')]
const grammar=[q('t1',9,'見ます → “quero ver”',['見たいです','見たです','見てほしい','見るたい'],1,'Base 見 + たい.'),q('t2',10,'行きます → “não quero ir”',['行きない','行きたくない','行かないたい','行きませんたい'],2,'たい como adjetivo い.'),q('t3',11,'買いたい → passado',['買いたかった','買いたいだった','買ってほしかった','買いたくた'],1,'い→かった.'),q('t4',12,'“Tenho vontade de estudar no exterior há algum tempo.”',['留学したいと思っています','留学したと思います','留学してたい','留学するつもりだった'],1,'たいと思っています.'),q('t5',13,'Desejo observado de Mary usar quimono:',['着物を着たいです','着物を着たがっています','着物が着ます','着物を着るほしい'],2,'Terceira pessoa: たがっている.'),q('t6',14,'Objeto com たい pode usar:',['somente を','somente が','を ou が','apenas に'],3,'Ambas as partículas são possíveis.'),q('t7',15,'“Quero conhecer essa pessoa.”',['あの人に会いたい','あの人を会いたい','あの人が会うたい','あの人へ会って'],1,'会う seleciona に.'),q('t8',16,'たい conjuga como:',['verbo u','adjetivo い','substantivo','adjetivo な'],2,'Negativo たくない, passado たかった.'),
q('a1',17,'買い物を（　）、晩ご飯を（　）します。',['して・食べて','したり・食べたり','するや・食べるや','した・食べた'],2,'Passado curto + り.'),q('a2',18,'読む → forma たり',['読んだり','読みたり','読んでり','読むたり'],1,'読んだ + り.'),q('a3',19,'行く → forma たり',['行いたり','行ったり','行きたり','行ってり'],2,'行った + り.'),q('a4',20,'週末、勉強したり、友だちと話したり（　）。 passado',['します','しました','するでした','していましたり'],2,'O する final recebe o passado.'),q('a5',21,'A lista たり implica:',['ordem rígida','lista completa','exemplos sem ordem obrigatória','uma única ação'],3,'Ações são exemplos.'),q('a6',22,'Negativa futura da lista termina em:',['したりしません','しなかったり','していませんたり','しないでした'],1,'Conjugue o する final.'),
q('e1',23,'富士山に（　）ことがあります。',['登る','登った','登って','登り'],2,'Experiência usa passado curto.'),q('e2',24,'“Nunca faltei à aula.”',['授業を休まないことがあります','授業を休んだことがありません','授業を休みませんでした','まだ休んでいません'],2,'〜たことがありません.'),q('e3',25,'ヨーロッパに行ったことがありますか。—はい、（　）。',['ことがあります','あります','行きます','いました'],2,'Resposta curta: あります.'),q('e4',26,'“Já comi sushi alguma vez.”',['すしを食べたことがあります','すしをもう食べました','すしを食べてあります','すしが食べたりします'],1,'Experiência ao longo da vida.'),q('e5',27,'Qual não expressa expectativa de fazê-lo futuramente?',['まだ〜ていません','〜たことがありません','〜たい','〜つもり'],2,'ことがありません descreve experiência até agora sem implicar plano.'),q('e6',28,'する → experiência',['したことがあります','することがありました','してことがあります','しことがあります'],1,'Passado curto de する = した.'),
q('y1',29,'京都（　）奈良に行きました。 “entre outros”',['と','や','も','で'],2,'や cria lista aberta.'),q('y2',30,'AとB sugere:',['exemplos','lista completa','alternativa','comparação'],2,'と enumera de forma fechada.'),q('y3',31,'大学の近くに 何がありますか。',['銀行や本屋があります','銀行とだけ','銀行がや本屋','銀行たり本屋'],1,'Substantivos exemplificativos com や.'),q('y4',32,'や corresponde melhor a:',['A ou B','A e B, entre outros','A mais que B','nem A nem B'],2,'Lista não exaustiva.')]
const kanjiReading=[q('k1',33,'手紙',['mão','carta','papel','mapa'],2,'手紙 = carta.'),q('k2',34,'病院／映画館',['hospital/cinema','escola/empresa','mercado/estação','cidade/viagem'],1,'院 e 映画.'),q('k3',35,'勉強／旅行',['trabalho/descanso','estudo/viagem','filme/música','doença/cidade'],2,'Vocabulário dos anúncios.'),q('k4',36,'Quem procura voluntários?',['Hirokun','Yuu','Sadako','Kaorin'],1,'Primeiro anúncio, Hirokun.'),q('k5',37,'Quem gosta de atividades ao ar livre?',['Yuu','Sadako','Kaorin','John'],1,'Segundo anúncio.'),q('k6',38,'Sadako procura companhia para:',['banda','filmes de terror','montanhismo','voluntariado'],2,'映画について話しませんか.'),q('k7',39,'Kaorin toca:',['piano','guitarra','violino','bateria'],2,'ギターをひくのが好き.'),q('k8',40,'Meta futura de Kaorin:',['professora','cantora','médica','pintora'],2,'将来は歌手になりたい.')]
const listening=[q('l1',41,'W11-A: Ryota fez:',['esqui e onsen','praia e compras','nada','trabalho'],1,'長野でスキー e 温泉.',{audio:au('W11_A','Workbook W11-A — Férias')}),q('l2',42,'Próxima viagem de Ryota:',['Australia','montanha em Nagano','trabalho','praia'],2,'山に登るつもり.',{audio:au('W11_A','Workbook W11-A — Férias')}),q('l3',43,'Kanna fez na Australia:',['esqui','praia e compras','camping','nada'],2,'散歩 e 買い物.',{audio:au('W11_A','Workbook W11-A — Férias')}),q('l4',44,'Próximas férias de Kanna:',['trabalho de meio período','esqui','drive','zoológico'],1,'お金がないからアルバイト.',{audio:au('W11_A','Workbook W11-A — Férias')}),q('l5',45,'Ken planeja:',['camping e drive','trabalho','London','compras'],1,'山にキャンプ e ドライブ.',{audio:au('W11_A','Workbook W11-A — Férias')}),q('l6',46,'W11-B diálogo 1: comerão:',['pizza','sushi','pasta','curry'],3,'Ele oferece fazer pasta em casa.',{audio:au('W11_B','Workbook W11-B — Planos')}),q('l7',47,'W11-B hoje:',['museu e kabuki','compras e kabuki','zoológico e museu','só compras'],2,'Museu fecha segunda; fazem compras e kabuki.',{audio:au('W11_B','Workbook W11-B — Planos')}),q('l8',48,'W11-B amanhã:',['compras','museu e zoológico','kabuki','nada'],2,'明日は美術館と動物園.',{audio:au('W11_B','Workbook W11-B — Planos')}),q('l9',49,'W11-C: Mary queria ser:',['cantora','presidente de empresa','professora','rica'],2,'社長になりたかった.',{audio:au('W11_C','Workbook W11-C — Infância')}),q('l10',50,'Tom queria ser:',['cantor','rico','professor','ator'],1,'歌手になりたかった; agora quer ser rico.',{audio:au('W11_C','Workbook W11-C — Infância')}),q('l11',51,'Professor queria ser professor desde criança?',['sim','não','não lembra','não é dito'],2,'あまりなりたくなかった.',{audio:au('W11_C','Workbook W11-C — Infância')}),q('l12',52,'O professor às vezes pensa em:',['viajar','pedir demissão','casar','cantar'],2,'時々辞めたいと思います.',{audio:au('W11_C','Workbook W11-C — Infância')})]
const scripts:Record<string,ScriptItem[]>={
K11_01:[{label:'{会話|かいわ} I',lines:[
{speaker:'Anúncio',ja:'{第十一課|だいじゅういっか}　{休|やす}みのあと　{会話|かいわ}{一|いち}',pt:'Lição 11: Depois das férias. Diálogo I.'},
{speaker:'Y',ja:'メアリーさん、{久|ひさ}しぶりですね。{休|やす}みはどうでしたか。',pt:'Mary, há quanto tempo! Como foram as férias?'},
{speaker:'M',ja:'すごく{楽|たの}しかったです。{北海道|ほっかいどう}で{動物園|どうぶつえん}に{行|い}ったり、{買|か}い{物|もの}をしたりしました。',pt:'Foram muito divertidas. Em Hokkaido, fui ao zoológico, fiz compras e outras coisas.'},
{speaker:'Y',ja:'いいですね。{私|わたし}も{旅行|りょこう}したいです。',pt:'Que bom. Eu também quero viajar.'},
{speaker:'M',ja:'ゆいさんの{休|やす}みは{楽|たの}しかったですか。',pt:'As suas férias foram divertidas, Yui?'},
{speaker:'Y',ja:'まあまあでした。{一日|いちにち}だけドライブに{行|い}きましたが、{毎日|まいにち}アルバイトをしていました。',pt:'Foram mais ou menos. Saí para dirigir só um dia, mas trabalhei meio período todos os dias.'},
]}],
K11_03:[{label:'{会話|かいわ} II',lines:[
{speaker:'Anúncio',ja:'{二|に}',pt:'Diálogo II.'},
{speaker:'M',ja:'ゆいさん、{友|とも}だちを{紹介|しょうかい}します。こちらはジョンさんです。',pt:'Yui, vou apresentar um amigo. Este é John.'},
{speaker:'M',ja:'ジョンさんは{先月|せんげつ}、{日本|にほん}に{来|き}ました。',pt:'John veio ao Japão no mês passado.'},
{speaker:'J',ja:'{初|はじ}めまして。',pt:'Muito prazer.'},
{speaker:'Y',ja:'{初|はじ}めまして、{山川|やまかわ}ゆいです。',pt:'Muito prazer. Sou Yui Yamakawa.'},
]}],
K11_05:[{label:'{会話|かいわ} III',lines:[
{speaker:'Anúncio',ja:'{三|さん}',pt:'Diálogo III.'},
{speaker:'Y',ja:'ジョンさん、{出身|しゅっしん}はどこですか。',pt:'John, de onde você é?'},
{speaker:'J',ja:'オーストラリアのケアンズです。',pt:'Sou de Cairns, na Austrália.'},
{speaker:'Y',ja:'そうですか。',pt:'Entendo.'},
{speaker:'J',ja:'ゆいさんはケアンズに{行|い}ったことがありますか。',pt:'Yui, você já foi a Cairns?'},
{speaker:'Y',ja:'いいえ、ありません。',pt:'Não, nunca fui.'},
{speaker:'J',ja:'{山|やま}や{海|うみ}があって、きれいな{所|ところ}ですよ。グレートバリアリーフで{有名|ゆうめい}です。',pt:'Há montanhas e mar, e é um lugar bonito. É famoso pela Grande Barreira de Corais.'},
{speaker:'J',ja:'ゆいさんはどこの{出身|しゅっしん}ですか。',pt:'De onde você é, Yui?'},
{speaker:'Y',ja:'{長野|ながの}です。{今度|こんど}{遊|あそ}びに{来|き}てください。{食|た}べ{物|もの}もおいしいですよ。',pt:'Sou de Nagano. Venha passear lá um dia. A comida também é gostosa.'},
{speaker:'J',ja:'ぜひ、{行|い}きたいです。',pt:'Quero muito ir.'},
]}],
Y11_1:[
{label:'B-1 — いっしょにボランティアをしませんか',lines:[
{speaker:'Anúncio',ja:'{読み書き編|よみかきへん}　{第十一課|だいじゅういっか}　{二|に}　{友|とも}だち・メンバー{募集|ぼしゅう}　B',pt:'Parte de leitura e escrita, lição 11, seção II: Procura-se amigos e membros. Seção B.'},
{speaker:'Título',ja:'いっしょにボランティアをしませんか',pt:'Que tal fazermos voluntariado juntos?'},
{speaker:'Autor',ja:'つくば{市|し}のボランティアサークルです。',pt:'Somos um círculo de voluntariado da cidade de Tsukuba.'},
{speaker:'Autor',ja:'{週末|しゅうまつ}に{近所|きんじょ}の{病院|びょういん}でボランティアをしています。',pt:'Nos fins de semana, fazemos voluntariado em um hospital do bairro.'},
{speaker:'Autor',ja:'{子|こ}どもに{勉強|べんきょう}を{教|おし}えたり、いっしょに{歌|うた}を{歌|うた}ったりしています。',pt:'Ensinamos crianças e cantamos com elas, entre outras atividades.'},
{speaker:'Autor',ja:'{子|こ}どもが{大好|だいす}きな{人|ひと}、ボランティアを{始|はじ}めませんか。',pt:'Se você adora crianças, que tal começar a fazer voluntariado?'},
{speaker:'Autor',ja:'ひろクン',pt:'Hiro-kun'},
]},
{label:'B-2 — アウトドアが{好|す}きな{人|ひと}',lines:[
{speaker:'Título',ja:'アウトドアが{好|す}きな{人|ひと}',pt:'Pessoa que gosta de atividades ao ar livre.'},
{speaker:'Autor',ja:'{会社員|かいしゃいん}です。{川口市|かわぐちし}に{住|す}んでいます。',pt:'Sou funcionário de uma empresa. Moro na cidade de Kawaguchi.'},
{speaker:'Autor',ja:'アウトドアが{好|す}きで、{休|やす}みの{日|ひ}には{車|くるま}で{近|ちか}くの{山|やま}や{川|かわ}に{行|い}きます。',pt:'Gosto de atividades ao ar livre e, nos dias de folga, vou de carro a montanhas e rios próximos.'},
{speaker:'Autor',ja:'{将来|しょうらい}は{外国|がいこく}の{山|やま}に{登|のぼ}りたいと{思|おも}っています。',pt:'No futuro, quero escalar montanhas de outros países.'},
{speaker:'Autor',ja:'{山|やま}に{登|のぼ}るのが{好|す}きな{人|ひと}、メールください。',pt:'Se você gosta de escalar montanhas, mande-me um e-mail.'},
{speaker:'Autor',ja:'ゆう',pt:'Yuu'},
]},
{label:'B-3 — {映画|えいが}について{話|はな}しませんか？',lines:[
{speaker:'Título',ja:'{映画|えいが}について{話|はな}しませんか？',pt:'Vamos conversar sobre filmes?'},
{speaker:'Autor',ja:'22{歳|さい}の{大学生|だいがくせい}です。ホラー{映画|えいが}が{大好|だいす}きです。',pt:'Sou uma universitária de 22 anos. Adoro filmes de terror.'},
{speaker:'Autor',ja:'{週末|しゅうまつ}はバイトがあるから、いつも{平日|へいじつ}に{一人|ひとり}で{映画|えいが}を{見|み}に{行|い}きます。',pt:'Como trabalho meio período nos fins de semana, sempre vou sozinha ao cinema nos dias de semana.'},
{speaker:'Autor',ja:'いっしょに{映画|えいが}を{見|み}て、{話|はな}しませんか？',pt:'Quer assistir a filmes e conversar comigo?'},
{speaker:'Autor',ja:'{将来|しょうらい}はホラー{映画|えいが}を{作|つく}りたいです。',pt:'No futuro, quero fazer filmes de terror.'},
{speaker:'Autor',ja:'{貞子|さだこ}',pt:'Sadako'},
]},
{label:'B-4 — いっしょにバンドをやりませんか',lines:[
{speaker:'Título',ja:'いっしょにバンドをやりませんか',pt:'Que tal formarmos uma banda juntos?'},
{speaker:'Autor',ja:'ロックが{好|す}きな{明|あか}るい{女|おんな}の{子|こ}です。',pt:'Sou uma garota alegre que gosta de rock.'},
{speaker:'Autor',ja:'ギターをひくのが{好|す}きで、{将来|しょうらい}は{歌手|かしゅ}になりたいと{思|おも}っています。',pt:'Gosto de tocar guitarra e, no futuro, quero ser cantora.'},
{speaker:'Autor',ja:'{私|わたし}といっしょにバンドをやりませんか。',pt:'Quer formar uma banda comigo?'},
{speaker:'Autor',ja:'それからコンサートもいっしょに{行|い}きましょう！',pt:'E também vamos a shows juntos!' },
{speaker:'Autor',ja:'カオリン',pt:'Kaorin'},
]},
],
Y11_2:[{label:'E — メッセージ',lines:[
{speaker:'Anúncio',ja:'E',pt:'Seção E.'},
{speaker:'Eba',ja:'はじめまして。',pt:'Muito prazer.'},
{speaker:'Eba',ja:'{私|わたし}はメキシコ{人|じん}の{留学生|りゅうがくせい}です。{一月|いちがつ}に{日本|にほん}に{来|き}ました。',pt:'Sou uma estudante mexicana de intercâmbio. Vim ao Japão em janeiro.'},
{speaker:'Eba',ja:'{今|いま}、{日本語|にほんご}や{日本文化|にほんぶんか}を{勉強|べんきょう}しています。',pt:'Agora estudo língua e cultura japonesas.'},
{speaker:'Eba',ja:'{私|わたし}もアウトドアが{大好|だいす}きで、{山|やま}に{登|のぼ}ったり、つりをしたりするのが{好|す}きです。{旅行|りょこう}も{好|す}きです。',pt:'Eu também adoro atividades ao ar livre e gosto de escalar montanhas, pescar e fazer coisas assim. Também gosto de viajar.'},
{speaker:'Eba',ja:'{日本|にほん}では、まだあまり{旅行|りょこう}していませんが、これからいろいろな{所|ところ}に{行|い}くつもりです。',pt:'Ainda não viajei muito pelo Japão, mas pretendo visitar vários lugares daqui para a frente.'},
{speaker:'Eba',ja:'{古|ふる}いお{寺|てら}や{神社|じんじゃ}を{見|み}たいと{思|おも}っています。{日本|にほん}の{有名|ゆうめい}なお{祭|まつ}りも{見|み}たいです。',pt:'Quero ver templos antigos e santuários. Também quero conhecer festivais famosos do Japão.'},
{speaker:'Eba',ja:'{日本人|にほんじん}の{友|とも}だちをたくさん{作|つく}って、{日本語|にほんご}でいろいろなことを{話|はな}したいと{思|おも}っています。',pt:'Quero fazer muitos amigos japoneses e conversar sobre várias coisas em japonês.'},
{speaker:'Eba',ja:'よかったら、お{返事|へんじ}ください。',pt:'Se quiser, por favor, responda.'},
{speaker:'Eba',ja:'エバ',pt:'Eba'},
]}],
}
const fs=[...Array.from({length:14},(_,i)=>`K11_${String(i+1).padStart(2,'0')}`),'Y11_1','Y11_2','W11_A','W11_B','W11_C'],audios:AudioTrack[]=fs.map(f=>{
const script=scripts[f]??[]
return {id:`genki-1-l11-audio-${f.toLowerCase()}`,title:f==='K11_01'?'Diálogo I — depois das férias':f==='K11_03'?'Diálogo II — apresentação de John':f==='K11_05'?'Diálogo III — cidades de origem':f==='Y11_1'?'Leitura — anúncios de amigos e membros':f==='Y11_2'?'Leitura — mensagem de Eba':f.startsWith('W11')?`Workbook — ${f.slice(-1)}`:`Textbook — ${f}`,descriptionPt:f.startsWith('Y11')?'Leitura integral da seção de anúncios e mensagens.':f.startsWith('W11')?'Compreensão oral do workbook.':'Áudio do diálogo, vocabulário ou prática correspondente.',src:`${B}/${f}.mp3`,script,transcript:script.length?{kind:'full' as const,source:'source-aligned' as const,reviewed:true,items:script}:undefined}
})
export const genki1Lesson11:Section={id:'lesson-11',level:'genki-1',titleJa:'第11課　休みのあと',titlePt:'Lição 11 — Depois das férias',summaryPt:'Desejos, ações exemplificativas, experiências, listas com や, kanji, anúncios e compreensão oral.',studyNotes,groups:[g('dialogue','会話','compreensão dos diálogos',dialogue),g('grammar','文法 1〜4','desejos, exemplos e experiências',grammar),g('kanji-reading','読み書き','kanji e leitura',kanjiReading),g('listening','聞く練習','compreensão oral do workbook',listening)],audios}
