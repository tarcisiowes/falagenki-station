import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-13'
const lessonPrefix = 'genki-2-l13'

const trackId = (code: string) => `${lessonPrefix}-audio-${code.toLowerCase()}`
const questionAudio = (code: string, title: string) => ({ trackId: trackId(code), src: `${BASE}/${code}.mp3`, title })
const q = (
  id: string,
  number: number,
  prompt: string,
  choices: string[],
  answer: number,
  explanationPt: string,
  extra: Partial<Pick<Question, 'audio' | 'context' | 'translationPt' | 'helpPt'>> = {},
): Question => ({
  id: `${lessonPrefix}-${id}`,
  number,
  prompt,
  choices: choices.map((text, index) => ({ n: index + 1, text })),
  answer,
  explanationPt,
  helpPt: extra.helpPt ?? `Estratégia prática: ${explanationPt}`,
  ...extra,
})
const group = (id: string, title: string, subtitlePt: string, questions: Question[]): ExerciseGroup => ({
  id: `${lessonPrefix}-${id}`,
  title,
  subtitlePt,
  instructionJa: '',
  instructionPt: `Resolva as questões de ${subtitlePt.toLowerCase()} e confira a explicação antes de enviar a resposta à revisão.`,
  questions,
})

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situação da lição',
    bodyPt: 'John liga para o restaurante Little Asia, faz uma entrevista e começa a trabalhar. A lição ensina a dizer o que é possível fazer, apresentar vários motivos, comunicar primeiras impressões e falar da frequência de um trabalho de meio período.',
    helpPt: 'Use os três diálogos como uma sequência real: marcar a entrevista, explicar por que você serve para a vaga e recomendar algo ao cliente.',
  },
  {
    title: '1. Verbos potenciais',
    bodyPt: 'A forma potencial expressa capacidade ou possibilidade. Verbos ru: 食べる→食べられる. Verbos u mudam a última mora da coluna u para e + る: 行く→行ける, 読む→読める, 話す→話せる. Irregulares: する→できる e くる→こられる. O objeto costuma ser marcado por が: 日本語が話せます. Também existe dicionário + ことができる: 犬を飼うことができません.',
    helpPt: 'Atalho: nos verbos u, “empurre” o som final para a vogal e e acrescente る. Para distinguir possibilidade de ação real, compare 日本語を話します (falo) e 日本語が話せます (consigo falar).',
  },
  {
    title: '2. 〜し — vários motivos',
    bodyPt: 'Use predicado em forma curta + し para listar dois ou mais motivos: 日本語はおもしろいし、先生はいいし、授業が大好きです. Com substantivos e adjetivos な afirmativos no presente, preserve だ: 学生だし、親切だし. Um único し sugere que há outros motivos não mencionados.',
    helpPt: 'Pense em し como “além disso”. Ele não precisa concluir a frase; pode responder sozinho e deixar o restante implícito: 安いし…。',
  },
  {
    title: '3. 〜そうです — aparência e impressão',
    bodyPt: 'Para uma impressão sem prova conclusiva, retire い do adjetivo い e acrescente そうです: おいしい→おいしそうです. Em adjetivos な, retire な: 元気そうです. いい é irregular: よさそうです. No negativo, ない vira なさ: 難しくなさそうです. Antes de substantivo, そう funciona como adjetivo な: 暖かそうなセーター.',
    helpPt: 'Use antes de confirmar. Ao ver um prato, おいしそう; depois de provar, おいしい. Não use きれいそう quando a beleza já é diretamente visível.',
  },
  {
    title: '4. 〜てみる — tentar para descobrir',
    bodyPt: 'Forma て + みる indica experimentar uma ação e observar o resultado: このカレーを食べてみます. みる conjuga como verbo ru: 読んでみました, 聞いてみませんか.',
    helpPt: 'Não é “tentar com esforço”, mas “fazer para ver como é”. Para uma habilidade difícil, use ようとする em lições posteriores; aqui a ideia é experimentar.',
  },
  {
    title: '5. なら — contraste e condição limitada',
    bodyPt: 'XならY diz que Y vale para X, mas não necessariamente para tudo: チリなら行ったことがあります. Também restringe uma capacidade: ひらがななら読めます. Partículas に, で e から podem aparecer antes de なら; は, が e を não.',
    helpPt: 'Imagine a pergunta ampla sendo estreitada: “japonês?” → “se for hiragana, sim”. なら reaproveita o tópico e define o caso em que a resposta vale.',
  },
  {
    title: '6. Frequência por período',
    bodyPt: 'O padrão período + に + quantidade expressa frequência: 一週間に三回 “três vezes por semana”; 一日に三時間 “três horas por dia”; 一か月に三日か四日 “três ou quatro dias por mês”.',
    helpPt: 'Leia literalmente como “dentro de um período, esta quantidade”. A pergunta usa 何回, 何日 ou 何時間 conforme o que se conta.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Vaga e trabalho: アルバイト, 募集, 広告, 店長, 興味, 働く, 始める. Capacidade: 外国語, 運転, 楽器, 料理, 上手. Impressão: 人気, おいしそう, 暖かそう, 高そう. Experiência: 珍しい, 不安, 気分が悪い, 一生に一度.',
    helpPt: 'Agrupe por cena: telefone e entrevista; experiência profissional; atendimento no restaurante; reação a comida desconhecida.',
  },
  {
    title: 'Leitura e escrita — experiências interessantes no Japão',
    bodyPt: 'Kanji-alvo: 物 鳥 料 理 特 安 飯 肉 悪 体 同 着 空 港 昼 海. Amy relata ter comidoすっぽん sem saber; depois, três estudantes descrevem pontualidade dos trens, táxis automáticos e a variedade das lojas de conveniência.',
    helpPt: 'Na leitura de Amy, marque a mudança emocional: curiosidade → desconfiança → descoberta → avaliação final. Na mesa-redonda, associe cada surpresa ao país de origem do falante.',
  },
]

const dialogueQuestions = [
  q('d1', 1, 'Por que John liga para o Little Asia?', ['Para reservar uma mesa', 'Porque viu um anúncio de vaga', 'Para pedir comida', 'Para falar com o professor'], 2, 'John diz アルバイト募集の広告を見たんですが.', { audio: questionAudio('K13_01', 'K13-01 — John liga para o restaurante') }),
  q('d2', 2, 'Quando John pode ir ao restaurante?', ['Hoje', 'Amanhã', 'Na próxima semana', 'Somente no domingo'], 2, 'Ele não pode hoje, mas diz que amanhã consegue ir.', { audio: questionAudio('K13_01', 'K13-01 — John liga para o restaurante') }),
  q('d3', 3, 'Qual horário é combinado para a entrevista?', ['Meio-dia', 'Uma da tarde', 'Três da tarde', 'Sete da noite'], 2, 'O gerente propõe あしたの一時ごろ.', { audio: questionAudio('K13_01', 'K13-01 — John liga para o restaurante') }),
  q('d4', 4, 'John apresenta quais motivos para se interessar pelo emprego?', ['É perto e paga muito', 'Parece interessante, permite conhecer pessoas e usar japonês', 'É fácil e não exige japonês', 'O professor mandou'], 2, 'Ele usa し para listar 面白そう, 人に会える e 日本語も使える.', { audio: questionAudio('K13_03', 'K13-03 — Entrevista no restaurante') }),
  q('d5', 5, 'Que experiência de trabalho John já teve no Japão?', ['Restaurante', 'Hotel', 'Loja de conveniência', 'Escola'], 3, 'コンビニのアルバイトならしたことがあります.', { audio: questionAudio('K13_03', 'K13-03 — Entrevista no restaurante') }),
  q('d6', 6, 'Com que frequência John trabalha no Little Asia?', ['Um dia por semana', 'Três dias por semana', 'Todos os dias', 'Três dias por mês'], 2, '一週間に三日働いています.', { audio: questionAudio('K13_05', 'K13-05 — Professor Yamashita no restaurante') }),
  q('d7', 7, 'Qual prato John recomenda?', ['Sushi', 'Curry', 'Soba', 'Tempura'], 2, 'このカレーが一番人気がありますよ.', { audio: questionAudio('K13_05', 'K13-05 — Professor Yamashita no restaurante') }),
  q('d8', 8, 'O que o professor decide fazer?', ['Pedir outra recomendação', 'Experimentar o curry', 'Ir embora', 'Cozinhar'], 2, '食べてみます indica que ele vai experimentar.', { audio: questionAudio('K13_05', 'K13-05 — Professor Yamashita no restaurante') }),
]

const grammarQuestions = [
  q('g1', 9, '食べる → forma potencial', ['食べれる', '食べられる', '食べさせる', '食べたい'], 2, 'Verbo ru: retire る e acrescente られる.'),
  q('g2', 10, '行く → forma potencial', ['行かれる', '行ける', '行きれる', '行こう'], 2, 'Verbo u: く passa para け + る.'),
  q('g3', 11, '読む → forma potencial', ['読まれる', '読める', '読みられる', '読もう'], 2, 'む passa para め + る.'),
  q('g4', 12, '話す → forma potencial', ['話せる', '話される', '話しれる', '話そう'], 1, 'す passa para せ + る.'),
  q('g5', 13, 'する／くる → potenciais', ['すれる／きれる', 'できる／こられる', 'しられる／くられる', 'しよう／こよう'], 2, 'As duas formas são irregulares.'),
  q('g6', 14, '“Consigo falar japonês.”', ['日本語を話します', '日本語が話せます', '日本語に話せます', '日本語が話したいです'], 2, 'Na construção potencial, が é comum para a capacidade.'),
  q('g7', 15, '“Não se pode criar cachorro neste apartamento.”', ['このアパートでは犬を飼うことができません', '犬が飼いません', '犬を飼いたくありません', '犬に飼われません'], 1, 'Dicionário + ことができる também expressa possibilidade.'),
  q('g8', 16, '日本語はおもしろい（　）、先生はいい（　）、授業が好きです。', ['から／から', 'し／し', 'ので／まで', 'なら／なら'], 2, 'し enumera mais de um motivo.'),
  q('g9', 17, '山下先生は親切（　）、教えるのが上手（　）。', ['し／し', 'だし／だし', 'なし／なし', 'でし／でし'], 2, 'Adjetivo な afirmativo no presente mantém だ antes de し.'),
  q('g10', 18, '学生（　）、お金がない（　）、高い物は買えません。', ['し／し', 'だし／し', 'なし／だし', 'で／から'], 2, 'Substantivo usa だし; adjetivo い usa diretamente し.'),
  q('g11', 19, 'Um único し ao final costuma indicar que:', ['a frase é pergunta', 'há outros motivos implícitos', 'a ação terminou', 'a informação é citada'], 2, 'Um motivo com し é apresentado como parte de uma lista não esgotada.'),
  q('g12', 20, 'おいしい → “parece gostoso”', ['おいしいそうです', 'おいしそうです', 'おいしくそうです', 'おいしなそうです'], 2, 'Retire o い final antes de そう.'),
  q('g13', 21, '元気な → “parece bem/disposto”', ['元気なそうです', '元気そうです', '元気だそうです', '元気くそうです'], 2, 'Retire な e acrescente そう.'),
  q('g14', 22, 'いい → “parece bom”', ['いそうです', 'いいそうです', 'よさそうです', 'よそうです'], 3, 'いい usa a base irregular よさ antes de そう.'),
  q('g15', 23, '難しくない → “não parece difícil”', ['難しくないそうです', '難しくなさそうです', '難しいなそうです', '難しくそうじゃないです'], 2, 'ない muda para なさ antes de そう.'),
  q('g16', 24, '“um suéter que parece quente”', ['暖かいそうなセーター', '暖かそうなセーター', '暖かそうのセーター', '暖かくそうなセーター'], 2, 'そう é adjetivo な ao modificar substantivo.'),
  q('g17', 25, 'このカレーを食べて（　）。 “vou experimentar”', ['います', 'みます', 'あります', 'おきます'], 2, 'Forma て + みる é experimentar para descobrir.'),
  q('g18', 26, '“Tente perguntar a um amigo japonês.”', ['日本人の友達に聞いてみてください', '聞いてあります', '聞くそうです', '聞けません'], 1, '聞いてみる combina tentativa e observação do resultado.'),
  q('g19', 27, 'ブラジルは行ったことがありませんが、チリ（　）行ったことがあります。', ['まで', 'なら', 'しか', 'そう'], 2, 'なら restringe a resposta ao Chile.'),
  q('g20', 28, '日本語が読めますか。—ひらがな（　）読めます。', ['し', 'なら', 'そう', 'でも'], 2, '“Se for hiragana, consigo.”'),
  q('g21', 29, 'Qual partícula não pode permanecer imediatamente antes de なら?', ['に', 'で', 'から', 'を'], 4, 'は, が e を não ficam antes de なら; に, で e から podem ficar.'),
  q('g22', 30, '“Três vezes por semana”', ['一週間を三回', '一週間に三回', '三週間に一回', '一週間で三日'], 2, 'Período + に + frequência.'),
  q('g23', 31, '一日に三時間ぐらいゲームをします。', ['Jogo três vezes ao dia', 'Jogo cerca de três horas por dia', 'Jogo a cada três dias', 'Jogo às três horas'], 2, '三時間 é duração dentro de 一日.'),
  q('g24', 32, '一か月に三日か四日、アルバイトをします。', ['Trabalho três ou quatro dias por mês', 'Trabalho três meses', 'Trabalho quatro horas por dia', 'Trabalho uma vez por semana'], 1, 'O período é um mês e a quantidade é três ou quatro dias.'),
]

const vocabularyReadingQuestions = [
  q('v1', 33, 'アルバイト募集', ['vaga/recrutamento para trabalho de meio período', 'salário anual', 'entrevista escolar', 'restaurante fechado'], 1, '募集 é recrutamento; アルバイト é trabalho de meio período.'),
  q('v2', 34, '興味がある', ['ter experiência', 'ter interesse', 'ter tempo', 'ter medo'], 2, '興味がある significa ter interesse em algo.'),
  q('v3', 35, '運転する', ['cozinhar', 'dirigir', 'traduzir', 'vestir'], 2, '運転 é direção de veículo.'),
  q('v4', 36, '人気がある', ['ser barato', 'ser popular', 'ser raro', 'ser seguro'], 2, '人気がある é ter popularidade.'),
  q('v5', 37, '{物|もの}／{鳥|とり}／{肉|にく}', ['coisa/pássaro/carne', 'corpo/mar/arroz', 'porto/almoço/roupa', 'comida/porto/animal'], 1, 'São leituras e sentidos dos kanji da lição.'),
  q('v6', 38, '{料理|りょうり}／{料金|りょうきん}', ['viagem/salário', 'culinária/tarifa', 'material/aula', 'razão/gratuito'], 2, '料 aparece em culinária e tarifa.'),
  q('v7', 39, '{不安|ふあん}／{気分|きぶん}が{悪|わる}い', ['seguro/com fome', 'ansioso/sentir-se mal', 'popular/cansado', 'raro/feliz'], 2, 'Vocabulário emocional da leitura de Amy.'),
  q('v8', 40, '{一生|いっしょう}に{一度|いちど}', ['uma vez por dia', 'uma vez na vida', 'pela primeira vez no Japão', 'todo mês'], 2, 'A expressão significa uma experiência única na vida.'),
  q('r1', 41, 'De quais comidas japonesas Amy gosta especialmente?', ['Sushi e soba', 'Tempura e yakitori', 'Curry e ramen', 'Umeboshi e nori'], 2, 'Ela abre o texto com 特に天ぷらや焼き鳥が好きです.', { audio: questionAudio('Y13_1', 'Y13-1 — Experiência de Amy com comida japonesa') }),
  q('r2', 42, 'Por que Amy quase não comia comida japonesa em seu país?', ['Era proibida', 'Era cara', 'Ela não gostava', 'Não havia restaurantes'], 2, '国では日本料理は安くないから、あまり食べられませんでした.', { audio: questionAudio('Y13_1', 'Y13-1 — Experiência de Amy com comida japonesa') }),
  q('r3', 43, 'Que carne havia no nabe?', ['Frango', 'Porco', 'Tartaruga suppon', 'Peixe'], 3, 'A família revela: これはすっぽんですよ.', { audio: questionAudio('Y13_1', 'Y13-1 — Experiência de Amy com comida japonesa') }),
  q('r4', 44, 'Qual é a conclusão de Amy?', ['Quer comer de novo', 'Foi interessante, mas não quer comer tartaruga novamente', 'A comida era ruim', 'Vai abrir um restaurante'], 2, 'Ela reconhece que foi uma experiência interessante, porém diz もうかめを食べたくないです.', { audio: questionAudio('Y13_1', 'Y13-1 — Experiência de Amy com comida japonesa') }),
  q('r5', 45, 'O que surpreendeu Oliver?', ['A comida cara', 'A pontualidade dos trens', 'Os táxis baratos', 'As praias'], 2, 'Na Inglaterra os trens atrasam; no Japão chegam no horário.', { audio: questionAudio('Y13_2', 'Y13-2 — Mesa-redonda de estudantes internacionais') }),
  q('r6', 46, 'Por que Amelia se surpreendeu com o táxi?', ['Não havia motorista', 'A porta era automática e não se dava gorjeta', 'Era gratuito', 'Só aceitava cartão'], 2, 'Ela destaca ドアが自動 e チップもいりません.', { audio: questionAudio('Y13_2', 'Y13-2 — Mesa-redonda de estudantes internacionais') }),
  q('r7', 47, 'O que Wati costuma comprar na loja de conveniência?', ['Roupa', 'Bentô e sobremesa', 'Livros', 'Passagem'], 2, '時々、昼にコンビニでお弁当とデザートを買います.', { audio: questionAudio('Y13_2', 'Y13-2 — Mesa-redonda de estudantes internacionais') }),
  q('r8', 48, 'Que produto inesperado o amigo de Oliver encontrou no konbini?', ['Guarda-chuva', 'Roupa de banho', 'Remédio', 'Bicicleta'], 2, 'O amigo esqueceu a roupa de banho e comprou uma no konbini.', { audio: questionAudio('Y13_2', 'Y13-2 — Mesa-redonda de estudantes internacionais') }),
]

const listeningQuestions = [
  q('l1', 49, 'W13-A: que língua Nakayama fala?', ['Chinês', 'Inglês', 'Francês', 'Coreano'], 2, 'Ela estudou um ano nos Estados Unidos.', { audio: questionAudio('W13_A', 'W13-A — Entrevistas de emprego') }),
  q('l2', 50, 'W13-A: Nakayama dirige carro?', ['Sim', 'Não; apenas consegue andar de moto', 'Somente caminhão', 'Não é informado'], 2, 'バイクなら乗れますが、車は運転できません.', { audio: questionAudio('W13_A', 'W13-A — Entrevistas de emprego') }),
  q('l3', 51, 'W13-A: em quais dias Nakayama pode trabalhar?', ['Segunda, quarta e sábado', 'Terça e quinta', 'Sábado e domingo', 'Todos os dias'], 1, '月曜日と水曜日と土曜日は大丈夫です.', { audio: questionAudio('W13_A', 'W13-A — Entrevistas de emprego') }),
  q('l4', 52, 'W13-A: o que Murano consegue fazer em chinês?', ['Falar fluentemente', 'Ler um pouco, mas não falar muito', 'Somente escrever', 'Nada'], 2, '中国語は読めるんですが、あまり話せないんです.', { audio: questionAudio('W13_A', 'W13-A — Entrevistas de emprego') }),
  q('l5', 53, 'W13-A: quando Murano pode trabalhar?', ['Dias úteis', 'Sábado e domingo', 'Só segunda', 'Só quarta'], 2, '土曜日と日曜日なら来られます.', { audio: questionAudio('W13_A', 'W13-A — Entrevistas de emprego') }),
  q('l6', 54, 'W13-B: por que Ken não pode ir ao trabalho?', ['Está doente', 'A irmã vem visitá-lo', 'Tem prova', 'Vai viajar'], 2, '妹が来るから、うちにいなきゃいけない.', { audio: questionAudio('W13_B', 'W13-B — Ken procura um substituto') }),
  q('l7', 55, 'W13-B: qual é o trabalho?', ['Cozinheiro', 'Professor de inglês', 'Motorista', 'Vendedor'], 2, 'Ken responde 英語の先生.', { audio: questionAudio('W13_B', 'W13-B — Ken procura um substituto') }),
  q('l8', 56, 'W13-B: quem Robert indica?', ['Yui', 'Naomi', 'Sora', 'Mary'], 2, '友だちの直美ならできると思う.', { audio: questionAudio('W13_B', 'W13-B — Ken procura um substituto') }),
  q('l9', 57, 'W13-C: primeira impressão sobre o relógio suíço?', ['Parece barato', 'Parece caro', 'Parece quebrado', 'Parece leve'], 2, 'でも、高そうですね.', { audio: questionAudio('W13_C', 'W13-C — Compras on-line') }),
  q('l10', 58, 'W13-C: o relógio é comprado?', ['Sim', 'Não, custa 258.000 ienes', 'Não, não funciona', 'Sim, é presente'], 2, '高すぎて買えませんよ.', { audio: questionAudio('W13_C', 'W13-C — Compras on-line') }),
  q('l11', 59, 'W13-C: para quem é o suéter?', ['Para a mãe', 'Para o pai', 'Para o professor', 'Para John'], 2, 'O homem decide comprá-lo para o aniversário do pai.', { audio: questionAudio('W13_C', 'W13-C — Compras on-line') }),
  q('l12', 60, 'W13-C: por que compram a máquina de exercícios?', ['É gratuita', 'Permite se exercitar em casa e custa menos que o clube', 'É japonesa', 'É pequena'], 2, 'うちで運動でき、スポーツクラブより安い.', { audio: questionAudio('W13_C', 'W13-C — Compras on-line') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K13_01: [{ label: '{会話|かいわ} I', lines: [
    { speaker: 'Anúncio', ja: '{第十三課|だいじゅうさんか}　アルバイト{探|さが}し　{会話|かいわ}{一|いち}', pt: 'Lição 13: Procurando um trabalho de meio período. Diálogo I.' },
    { speaker: 'Gerente', ja: 'はい、「リトル・アジア」です。', pt: 'Alô, aqui é o Little Asia.' },
    { speaker: 'John', ja: '{私|わたし}、ジョン・ワンと{申|もう}します。アルバイト{募集|ぼしゅう}の{広告|こうこく}を{見|み}たんですが。', pt: 'Meu nome é John Wang. Vi o anúncio de vaga para trabalho de meio período.' },
    { speaker: 'Gerente', ja: 'そうですか。じゃあ、{会|あ}って、{話|はな}しましょうか。{今日|きょう}{店|みせ}に{来|こ}られますか。', pt: 'Entendo. Então, que tal nos encontrarmos para conversar? Você consegue vir ao restaurante hoje?' },
    { speaker: 'John', ja: '{今日|きょう}はちょっと{行|い}けないんですが、あしたなら{行|い}けると{思|おも}います。', pt: 'Hoje não consigo ir, mas acho que amanhã consigo.' },
    { speaker: 'Gerente', ja: 'そうですか。{今日|きょう}はだめですか。じゃあ、あしたの{一時|いちじ}ごろはどうですか。', pt: 'Entendo. Hoje não dá... Então, que tal por volta de uma hora amanhã?' },
    { speaker: 'John', ja: '{一時|いちじ}ですね。わかりました。', pt: 'Uma hora, certo? Entendi.' },
  ] }],
  K13_03: [{ label: '{会話|かいわ} II', lines: [
    { speaker: 'Anúncio', ja: '{二|に}', pt: 'Diálogo II.' },
    { speaker: 'Gerente', ja: 'ワンさんはどうしてこのアルバイトに{興味|きょうみ}があるんですか。', pt: 'Sr. Wang, por que você se interessa por este trabalho?' },
    { speaker: 'John', ja: 'おもしろそうですから。いろいろな{人|ひと}に{会|あ}えるし、{日本語|にほんご}も{使|つか}えるし。', pt: 'Porque parece interessante. Posso conhecer várias pessoas e também usar japonês.' },
    { speaker: 'Gerente', ja: '{日本|にほん}で{働|はたら}いたことがありますか。', pt: 'Você já trabalhou no Japão?' },
    { speaker: 'John', ja: 'はい。コンビニのアルバイトならしたことがあります。', pt: 'Sim. Já trabalhei meio período em loja de conveniência.' },
    { speaker: 'Gerente', ja: 'あしたから{始|はじ}められますか。', pt: 'Você consegue começar amanhã?' },
    { speaker: 'John', ja: 'はい。よろしくお{願|ねが}いします。', pt: 'Sim. Conto com sua orientação.' },
    { speaker: 'Gerente', ja: 'がんばってください。', pt: 'Dê o seu melhor.' },
  ] }],
  K13_05: [{ label: '{会話|かいわ} III', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}', pt: 'Diálogo III.' },
    { speaker: 'John', ja: 'いらっしゃいませ。あ、{山下先生|やましたせんせい}。', pt: 'Bem-vindo. Ah, professor Yamashita.' },
    { speaker: 'Prof. Yamashita', ja: 'ジョンさん。ここでアルバイトをしているんですか。', pt: 'John, você trabalha meio período aqui?' },
    { speaker: 'John', ja: 'ええ。{一週間|いっしゅうかん}に{三日|みっか}{働|はたら}いています。', pt: 'Sim. Trabalho três dias por semana.' },
    { speaker: 'Prof. Yamashita', ja: 'そうですか。どれがおいしいですか。', pt: 'Entendo. Qual é gostoso?' },
    { speaker: 'John', ja: 'このカレーが{一番人気|いちばんにんき}がありますよ。', pt: 'Este curry é o mais popular.' },
    { speaker: 'Prof. Yamashita', ja: 'おいしそうですね。じゃあ、{食|た}べてみます。', pt: 'Parece gostoso. Então, vou experimentar.' },
  ] }],
  Y13_1: [{ label: '{日本|にほん}のおもしろい{経験|けいけん}', lines: [
    { speaker: 'Anúncio', ja: '{読み書き編|よみかきへん}　{第十三課|だいじゅうさんか}　{二|に}　{日本|にほん}のおもしろい{経験|けいけん}　B', pt: 'Parte de leitura e escrita, lição 13, seção II: Experiências interessantes no Japão. Seção B.' },
    { speaker: 'Amy', ja: '{私|わたし}は{日本料理|にほんりょうり}が{大好|だいす}きです。{特|とく}に{天|てん}ぷらや{焼|や}き{鳥|とり}が{好|す}きです。', pt: 'Eu adoro comida japonesa. Gosto especialmente de tempura e yakitori.' },
    { speaker: 'Amy', ja: '{国|くに}では{日本料理|にほんりょうり}は{安|やす}くないから、あまり{食|た}べられませんでした。{今|いま}、{毎日|まいにち}{食|た}べられるので、とてもうれしいです。', pt: 'No meu país, comida japonesa não é barata, por isso eu quase não conseguia comê-la. Agora posso comer todos os dias e fico muito feliz.' },
    { speaker: 'Amy', ja: '{日本|にほん}にはめずらしい{食|た}べ{物|もの}がたくさんあります。{国|くに}では、うめぼし、のりなどを{見|み}たことも{聞|き}いたこともありませんでした。', pt: 'Há muitas comidas raras no Japão. No meu país, eu nunca tinha visto nem ouvido falar de coisas como umeboshi e nori.' },
    { speaker: 'Amy', ja: '{私|わたし}はめずらしい{物|もの}に{興味|きょうみ}があるので、おいしそうな{食|た}べ{物|もの}は、なんでも{食|た}べてみます。', pt: 'Como me interesso por coisas diferentes, experimento qualquer comida que pareça gostosa.' },
    { speaker: 'Amy', ja: 'ある{日|ひ}、ホストファミリーと{晩|ばん}ご{飯|はん}を{食|た}べに{行|い}きました。なべの{中|なか}に{野菜|やさい}や{肉|にく}がたくさんありました。', pt: 'Um dia, saí para jantar com minha família anfitriã. Havia muitos legumes e carne dentro da panela.' },
    { speaker: 'Amy', ja: '{私|わたし}は「これは{何|なん}の{肉|にく}？{鳥|とり}の{肉|にく}？」と{聞|き}きました。お{父|とう}さんは「{食|た}べてみて。おいしいから」と{言|い}いました。', pt: 'Perguntei: “Que carne é esta? É frango?”. O pai disse: “Experimente. É gostosa”.' },
    { speaker: 'Pai anfitrião', ja: '「どう？おいしい？」', pt: '“E então? Está gostoso?”' },
    { speaker: 'Amy', ja: '「はい、とても。でも、{何|なん}ですか？」', pt: '“Sim, muito. Mas o que é?”' },
    { speaker: 'Amy', ja: 'みんなはニヤニヤして、{何|なに}も{言|い}いません。{私|わたし}はちょっと{不安|ふあん}になりました。', pt: 'Todos sorriram de modo estranho e não disseram nada. Fiquei um pouco apreensiva.' },
    { speaker: 'Amy', ja: 'でも、おなかがすいていたし、おいしかったので、たくさん{食|た}べました。', pt: 'Mas eu estava com fome e a comida era gostosa, então comi bastante.' },
    { speaker: 'Amy', ja: '「ごちそうさま。」', pt: '“Obrigada pela refeição.”' },
    { speaker: 'Pai anfitrião', ja: '「エイミーさん、{実|じつ}は、これはすっぽんですよ。」', pt: '“Amy, na verdade isto é suppon.”' },
    { speaker: 'Amy', ja: '「すっぽん？」', pt: '“Suppon?”' },
    { speaker: 'Pai anfitrião', ja: '「すっぽんはかめです。」', pt: '“Suppon é uma tartaruga.”' },
    { speaker: 'Amy', ja: '「えっ！……」{私|わたし}は{気分|きぶん}が{悪|わる}くなりました。', pt: '“O quê?!” Eu passei a me sentir mal.' },
    { speaker: 'Amy', ja: 'お{父|とう}さんはすっぽんは{体|からだ}によくて、{高|たか}い{食|た}べ{物|もの}だと{言|い}っていました。', pt: 'O pai disse que suppon faz bem à saúde e é uma comida cara.' },
    { speaker: 'Amy', ja: 'これは{一生|いっしょう}に{一度|いちど}のとてもおもしろい{経験|けいけん}でした。', pt: 'Foi uma experiência muito interessante, daquelas que acontecem uma vez na vida.' },
    { speaker: 'Amy', ja: '{国|くに}に{帰|かえ}って、{友|とも}だちに「かめを{食|た}べたことがある」と{言|い}えます。', pt: 'Quando voltar ao meu país, poderei dizer aos amigos que já comi tartaruga.' },
    { speaker: 'Amy', ja: 'かめはおいしかったです。でも、やっぱり、もうかめを{食|た}べたくないです。', pt: 'A tartaruga estava gostosa. Mas, pensando bem, não quero comer tartaruga novamente.' },
  ] }],
  Y13_2: [{ label: '{留学生座談会|りゅうがくせいざだんかい}', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}　{留学生座談会|りゅうがくせいざだんかい}　B', pt: 'Seção III: Mesa-redonda com estudantes internacionais. Seção B.' },
    { speaker: 'Entrevistador', ja: 'きょうは{留学生|りゅうがくせい}に{日本|にほん}の{経験|けいけん}について{聞|き}きたいと{思|おも}います。{三人|さんにん}は{同|おな}じ{大学|だいがく}で{勉強|べんきょう}しています。みなさん、{日本|にほん}に{来|き}て{何|なに}にびっくりしましたか。', pt: 'Hoje queremos perguntar a estudantes internacionais sobre suas experiências no Japão. Os três estudam na mesma universidade. O que os surpreendeu quando vieram ao Japão?' },
    { speaker: 'Oliver', ja: 'そうですね。{電車|でんしゃ}にびっくりしましたね。イギリスでは{電車|でんしゃ}はよく{遅|おく}れますが、{日本|にほん}ではいつも{時間通|じかんどお}りです。', pt: 'Bem... Fiquei surpreso com os trens. Na Inglaterra, eles atrasam bastante, mas no Japão são sempre pontuais.' },
    { speaker: 'Oliver', ja: '{先月|せんげつ}{電車|でんしゃ}が{三分|さんぷん}{遅|おそ}く{着|つ}いたんです。その{時|とき}、「すみません」と{電車|でんしゃ}のアナウンスがありました。すごくびっくりしました。', pt: 'No mês passado, o trem chegou três minutos atrasado. Naquele momento houve um anúncio pedindo desculpas. Fiquei muito surpreso.' },
    { speaker: 'Amelia', ja: '{私|わたし}はタクシーにびっくりしました。{初|はじ}めて{日本|にほん}に{来|き}て、{空港|くうこう}からホテルまでタクシーに{乗|の}りました。', pt: 'Eu me surpreendi com os táxis. Quando vim ao Japão pela primeira vez, peguei um táxi do aeroporto até o hotel.' },
    { speaker: 'Amelia', ja: '{日本|にほん}のタクシーはすごいですね。ドアが{自動|じどう}だし、チップもいりません。', pt: 'Os táxis japoneses são incríveis. A porta é automática e não se dá gorjeta.' },
    { speaker: 'Wati', ja: '{私|わたし}はコンビニにびっくりしました。{日本|にほん}のコンビニにはいろいろなデザートがあります。', pt: 'Eu me surpreendi com as lojas de conveniência. Nos konbini japoneses há vários tipos de sobremesa.' },
    { speaker: 'Wati', ja: '{時々|ときどき}、{昼|ひる}にコンビニでお{弁当|べんとう}とデザートを{買|か}います。コンビニのプリンを{食|た}べたことがありますか。{世界|せかい}で{一番|いちばん}おいしいと{思|おも}います。', pt: 'Às vezes compro bentô e sobremesa no konbini no almoço. Já provaram o pudim de konbini? Acho que é o mais gostoso do mundo.' },
    { speaker: 'Oliver', ja: 'コンビニは{便利|べんり}ですね。{友|とも}だちと{海|うみ}に{遊|あそ}びに{行|い}ったんですが、{友|とも}だちが{水着|みずぎ}を{忘|わす}れたんです。', pt: 'Konbini é conveniente. Fui à praia com amigos, mas um deles esqueceu a roupa de banho.' },
    { speaker: 'Oliver', ja: 'でも{近|ちか}くのコンビニで{水着|みずぎ}が{買|か}えました。コンビニは{本当|ほんとう}に “convenient” だと{思|おも}いました。', pt: 'Mas ele conseguiu comprar uma roupa de banho no konbini próximo. Achei que konbini é realmente “convenient”.' },
  ] }],
}

scripts.K13_02 = scripts.K13_01
scripts.K13_04 = scripts.K13_03
scripts.K13_06 = scripts.K13_05

const dialogueTitles: Record<string, string> = {
  K13_01: 'Diálogo I — telefonema para o Little Asia',
  K13_02: 'Diálogo I — repetição guiada',
  K13_03: 'Diálogo II — entrevista de emprego',
  K13_04: 'Diálogo II — repetição guiada',
  K13_05: 'Diálogo III — atendimento ao professor Yamashita',
  K13_06: 'Diálogo III — repetição guiada',
  Y13_1: 'Leitura — a experiência de Amy com suppon',
  Y13_2: 'Leitura — mesa-redonda de estudantes internacionais',
  W13_A: 'Workbook A — entrevistas de emprego',
  W13_B: 'Workbook B — procurando um substituto',
  W13_C: 'Workbook C — compras on-line',
}

const audioCodes = [
  ...Array.from({ length: 17 }, (_, index) => `K13_${String(index + 1).padStart(2, '0')}`),
  'Y13_1', 'Y13_2', 'W13_A', 'W13_B', 'W13_C',
]

const kindForCode = (code: string): AudioTrackKind => {
  if (code.startsWith('Y')) return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (/^K13_0[135]$/.test(code)) return 'dialogue'
  if (/^K13_0[246]$/.test(code)) return 'dialogue-support'
  if (/^K13_0[78]$/.test(code)) return 'vocabulary'
  return 'drill'
}

const audios: AudioTrack[] = audioCodes.map((code) => {
  const metadata = genki2AudioSourceByCode[code]
  const kind = kindForCode(code)
  const script = scripts[code] ?? []
  const activity = metadata?.sourceActivityPt ?? `Faixa ${code}`
  const source = metadata?.material === 'workbook' ? 'Workbook' : 'Textbook'
  const purposePt = kind === 'dialogue'
    ? 'Compreender a conversa completa e reconhecer as estruturas da lição em contexto.'
    : kind === 'dialogue-support'
      ? 'Repetir o diálogo em blocos e consolidar ritmo, pronúncia e respostas automáticas.'
      : kind === 'reading'
        ? 'Acompanhar a leitura integral, relacionando grafia, furigana, sentido e organização do texto.'
        : kind === 'workbook'
          ? 'Resolver a tarefa de compreensão auditiva do workbook e justificar cada resposta com uma pista do áudio.'
          : kind === 'vocabulary'
            ? 'Fixar a pronúncia e o significado do vocabulário essencial da lição.'
            : `Executar oralmente a ${activity.toLowerCase()} e comparar forma, partículas e entonação com o modelo.`
  return {
    id: trackId(code),
    code,
    kind,
    language: 'ja',
    title: dialogueTitles[code] ?? activity,
    descriptionPt: `${activity}. ${purposePt}`,
    purposePt,
    instructionsPt: kind === 'workbook'
      ? ['Leia a tarefa correspondente antes de tocar.', 'Ouça uma vez sem pausar e registre sua hipótese.', 'Ouça novamente, localize a evidência e responda às questões vinculadas.']
      : ['Ouça uma vez acompanhando apenas a situação.', 'Repita em voz alta, imitando ritmo e entonação.', 'Faça a prática vinculada e envie o resultado à revisão.'],
    sourceRefPt: `${source} Genki II, 3ª ed., p. ${metadata?.sourcePage ?? '—'}`,
    sourceActivityPt: activity,
    sourcePage: metadata?.sourcePage,
    practiceTaskPt: kind === 'reading'
      ? 'Pause ao fim de cada parágrafo, resuma a ideia em português e releia a frase japonesa sem olhar a tradução.'
      : kind === 'workbook'
        ? 'Responda às perguntas sem transcrição; depois repita o trecho que contém a evidência e confira a explicação.'
        : kind === 'vocabulary'
          ? 'Diga o significado antes da resposta gravada e produza uma frase curta com cada palavra que ainda não estiver automática.'
          : kind === 'drill' || kind === 'dialogue-support'
            ? 'Use as pausas para produzir a forma solicitada antes do modelo; repita apenas os itens em que forma ou partícula divergir.'
            : 'Ouça sem texto, reconte a situação em três frases e represente um dos papéis acompanhando a transcrição.' ,
    src: `${BASE}/${code}.mp3`,
    script,
    transcript: script.length ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script } : undefined,
  }
})

export const genki2Lesson13: Section = {
  id: 'lesson-13',
  level: 'genki-2',
  titleJa: '第13課　アルバイト探し',
  titlePt: 'Lição 13 — Procurando um trabalho de meio período',
  summaryPt: 'Capacidade e possibilidade, vários motivos, aparência, experimentação, contraste com なら, frequência, entrevistas, experiências no Japão e compreensão auditiva.',
  studyNotes,
  groups: [
    group('dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    group('grammar', '文法 1〜6', 'formas potenciais e demais pontos gramaticais', grammarQuestions),
    group('vocabulary-reading', '読み書き', 'vocabulário, kanji e compreensão das leituras', vocabularyReadingQuestions),
    group('listening', '聞く練習', 'compreensão auditiva do workbook', listeningQuestions),
  ],
  audios,
}
