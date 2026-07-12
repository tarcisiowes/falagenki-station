import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-15'
const lessonPrefix = 'genki-2-l15'
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
  instructionPt: `Resolva as questões de ${subtitlePt.toLowerCase()}, confira a explicação e envie os itens à revisão.`,
  questions,
})

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situação da lição',
    bodyPt: 'Mary e Takeshi planejam uma viagem à casa de Yui em Nagano, escolhem atividades ao chegar e pedem informações para visitar o templo Zenkōji. A lição trabalha propostas, intenções, preparativos e descrições detalhadas de pessoas, objetos e lugares.',
    helpPt: 'Use a viagem como fio condutor: decidir juntos → registrar uma intenção → preparar com antecedência → descrever o destino.',
  },
  {
    title: '1. Forma volitiva',
    bodyPt: 'A forma volitiva equivale a “vamos...” ou “vou...”. Verbos ru: 食べる→食べよう. Verbos u mudam a última mora da coluna u para o + う: 行く→行こう, 読む→読もう, 話す→話そう. Irregulares: する→しよう e くる→こよう. A pergunta volitiva + か propõe uma ação conjunta: 休もうか.',
    helpPt: 'Nos verbos u, troque o som final por sua versão com o e alongue com う. É a mesma direção sonora de 書く→書こう, 待つ→待とう.',
  },
  {
    title: '2. Volitiva + と思っています',
    bodyPt: 'Volitiva + と思っています descreve uma decisão ou plano já considerado: 日本に行こうと思っています. と思います pode registrar uma decisão tomada naquele momento; と思っています sugere uma intenção mantida. Para planos definidos, a expressão curta presente + 予定です também é comum.',
    helpPt: 'Compare: 行きたい é desejo; 行こうと思っています é intenção; 行く予定です é programação mais concreta.',
  },
  {
    title: '3. 〜ておく — preparar antecipadamente',
    bodyPt: 'Forma て + おく descreve uma ação feita antes de algo: 電車の時間を調べておきます. Na fala, ておく pode contrair para とく: 予約しとく. Conjuga-se おく: しておきました, しておかなきゃいけません.',
    helpPt: 'Pergunte “para que evento futuro isto serve?”. Se existe uma finalidade posterior, ておく apresenta a ação como preparação.',
  },
  {
    title: '4. Orações que qualificam substantivos',
    bodyPt: 'Uma frase curta vem diretamente antes do substantivo: きのう買った本, 彼がくれた本, つくえの上にある本, 日本で買えない本. O sujeito interno usa が, não は. Todo o bloco funciona como um único sintagma nominal e pode ocupar qualquer posição na frase.',
    helpPt: 'Leia da direita para a esquerda: encontre o substantivo principal e pergunte “qual?”. A oração imediatamente anterior responde sem pronome relativo.',
  },
  {
    title: 'Expressões úteis da lição',
    bodyPt: 'Na fala casual, partículas podem cair: 今度の休み、予定ある？; ている contrai para てる: 思ってる; ていた para てた: 言ってた. けど ou が pode preparar o contexto sem contraste forte. 見える é algo estar espontaneamente visível; 見られる é ter capacidade/oportunidade de assistir. O sufixo 目 indica posição numa série: 三回目, 二日目.',
    helpPt: 'Primeiro reconheça a forma completa; depois aceite a contração. Para 見える, imagine a cena entrando nos olhos; para 見られる, imagine uma possibilidade controlada.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Viagem: 旅行, 予定, 観光, 案内所, 地図, 割引券, 美術館, 旅館, 予約. Lugares: 長野, 善光寺, 広島, 宮島, 沖縄, 嵐山, 嵯峨野, 渋谷. Descrição: 有名, 景色, 自然, 混んでいる, 地下, 通る, 建物.',
    helpPt: 'Monte uma miniagenda de viagem usando cinco verbos: 調べる, 予約する, 行く, 見る, 食べる; marque quais ações precisam de ておく.',
  },
  {
    title: 'Leitura e escrita — meus lugares favoritos',
    bodyPt: 'Kanji-alvo: 死 意 味 注 夏 魚 寺 広 足 転 借 走 場 建 地 通. Quatro textos apresentam Hiroshima e Miyajima, Okinawa, Arashiyama/Sagano e Shibuya, combinando história, natureza, atividades, transporte e recomendações.',
    helpPt: 'Para cada lugar, extraia quatro itens: por que é famoso, o que fazer, melhor época/condição e um cuidado prático.',
  },
]

const dialogueQuestions = [
  q('d1', 1, 'Para onde Mary pretende ir nas férias?', ['Tóquio', 'Casa de Yui em Nagano', 'Hiroshima', 'Okinawa'], 2, 'ゆいさんの長野のうちに行こうと思ってる.', { audio: questionAudio('K15_01', 'K15-01 — Planejando a viagem') }),
  q('d2', 2, 'Por que Mary convida Takeshi?', ['Yui pediu que o convidasse', 'Ele tem carro', 'Ela não fala japonês', 'A passagem é gratuita'], 1, 'ゆいさんが「たけしくんも誘って」と言ってたから.', { audio: questionAudio('K15_01', 'K15-01 — Planejando a viagem') }),
  q('d3', 3, 'Que preparação Takeshi fará?', ['Reservará hotel', 'Verificará os horários dos trens', 'Comprará comida', 'Ligará para Yui'], 2, '電車の時間、調べておくよ.', { audio: questionAudio('K15_01', 'K15-01 — Planejando a viagem') }),
  q('d4', 4, 'Que preparação Mary fará?', ['Ligará para Yui', 'Alugará bicicleta', 'Comprará mapa', 'Fará o dever'], 1, '私、ゆいさんに電話しておく.', { audio: questionAudio('K15_01', 'K15-01 — Planejando a viagem') }),
  q('d5', 5, 'Por que fazem um pouco de turismo ao chegar?', ['O trem atrasou', 'Chegaram cedo', 'Está chovendo', 'Yui pediu'], 2, '早く着いたから、ちょっと観光しない？', { audio: questionAudio('K15_03', 'K15-03 — Na estação de Nagano') }),
  q('d6', 6, 'Onde decidem ir?', ['Museu', 'Templo Zenkōji', 'Castelo', 'Onsen'], 2, '善光寺はどう？有名なお寺だよ.', { audio: questionAudio('K15_03', 'K15-03 — Na estação de Nagano') }),
  q('d7', 7, 'O que decidem comer no almoço?', ['Curry', 'Soba', 'Sushi', 'Tempura'], 2, '長野はそばがおいしいから、そばを食べようよ.', { audio: questionAudio('K15_03', 'K15-03 — Na estação de Nagano') }),
  q('d8', 8, 'Além do mapa, o que o atendente oferece?', ['Passagem de trem', 'Cupons de desconto para o museu', 'Comida', 'Reserva de hotel'], 2, '美術館の割引券を oferece.', { audio: questionAudio('K15_05', 'K15-05 — No centro de informações') }),
]

const grammarQuestions = [
  q('g1', 9, '食べる → volitiva', ['食べろう', '食べよう', '食べおう', '食べたい'], 2, 'Verbo ru: retire る e acrescente よう.'),
  q('g2', 10, '行く → volitiva', ['行きよう', '行こう', '行けよう', '行くよう'], 2, 'く passa para こ + う.'),
  q('g3', 11, '読む → volitiva', ['読みよう', '読もう', '読めよう', '読んどう'], 2, 'む passa para も + う.'),
  q('g4', 12, '話す → volitiva', ['話しょう', '話そう', '話せよう', '話しよう'], 2, 'す passa para そ + う.'),
  q('g5', 13, '待つ → volitiva', ['待ちよう', '待とう', '待つよう', '待てよう'], 2, 'つ passa para と + う.'),
  q('g6', 14, 'する／くる → volitivas', ['すよう／きよう', 'しよう／こよう', 'そう／くよう', 'できよう／こられよう'], 2, 'As formas irregulares são しよう e こよう.'),
  q('g7', 15, '“Vamos tomar café?” (casual)', ['コーヒーを飲む？', 'コーヒーを飲もうか。', 'コーヒーを飲みたい。', 'コーヒーを飲んだら。'], 2, 'Volitiva + か propõe uma ação conjunta.'),
  q('g8', 16, 'Resposta afirmativa natural a 休もうか:', ['うん、そうしよう', 'はい、休みますか', 'いいえ、休もう', 'そうでした'], 1, 'そうしよう significa “sim, vamos fazer isso”.'),
  q('g9', 17, '日本に（　）と思っています。 “Estou pensando em ir.”', ['行く', '行こう', '行って', '行ける'], 2, 'A intenção usa volitiva + と思っています.'),
  q('g10', 18, 'Diferença mais adequada:', ['行きたい = desejo; 行こうと思っています = intenção', 'São sempre idênticos', '行きたい é programação fixa', '行こう é passado'], 1, 'たい expressa vontade; volitiva + pensamento apresenta decisão/plano.'),
  q('g11', 19, 'Para uma decisão tomada agora, é comum usar:', ['volitiva + と思います', 'passado + しか', 'forma て + あります', 'potencial + そう'], 1, 'と思います pode registrar uma decisão do momento.'),
  q('g12', 20, '“Tenho programação de ir amanhã.”', ['あした行こうと思いました', 'あした行く予定です', 'あした行っておきます', 'あした行けそうです'], 2, 'Forma curta presente + 予定です apresenta plano definido.'),
  q('g13', 21, 'あした試験があるので、今晩勉強して（　）。', ['みます', 'おきます', 'あります', 'しまいます'], 2, 'Estudar hoje é preparação para a prova de amanhã.'),
  q('g14', 22, '友だちが来るから、部屋を掃除して（　）なきゃいけません。', ['おか', 'み', 'あり', 'しまい'], 1, 'Negativa de おく dentro da obrigação: おかなきゃ.'),
  q('g15', 23, 'Contração oral de ホテルを予約しておく:', ['予約してる', '予約しとく', '予約したる', '予約しようく'], 2, 'ておく contrai para とく.'),
  q('g16', 24, '電車の時間を調べておきました。', ['Experimentei verificar', 'Verifiquei antecipadamente', 'Esqueci de verificar', 'Consigo verificar'], 2, 'ておく marca preparação concluída.'),
  q('g17', 25, '“o livro que comprei ontem”', ['きのう本を買った', 'きのう買った本', '本がきのう買った', 'きのうの買う本'], 2, 'A oração curta vem imediatamente antes de 本.'),
  q('g18', 26, '“o livro que meu namorado me deu”', ['彼はくれた本', '彼がくれた本', '彼をくれた本', '彼の本がくれた'], 2, 'O sujeito interno usa が.'),
  q('g19', 27, 'つくえの上にある本', ['o livro que está sobre a mesa', 'a mesa que está no livro', 'o livro comprado', 'o livro que não existe'], 1, 'A oração locativa qualifica 本.'),
  q('g20', 28, '日本で買えない本', ['livro vendido no Japão', 'livro que não se pode comprar no Japão', 'livro japonês barato', 'livro que comprei'], 2, 'A potencial negativa 買えない qualifica 本.'),
  q('g21', 29, 'Qual partícula marca o sujeito dentro da oração relativa?', ['は', 'が', 'を', 'まで'], 2, 'O livro ensina が, não は, dentro da oração qualificadora.'),
  q('g22', 30, '部屋の窓から海が（　）。 “O mar é visível.”', ['見られます', '見えます', '見せます', '見ています'], 2, '見える descreve visibilidade espontânea.'),
  q('g23', 31, 'どこであの映画が（　）か。 “Onde se pode assistir?”', ['見えます', '見られます', '見せます', '見ました'], 2, '見られる expressa possibilidade/oportunidade de assistir.'),
]

const vocabularyReadingQuestions = [
  q('v1', 32, '{予定|よてい}／{予約|よやく}', ['plano/reserva', 'mapa/desconto', 'templo/museu', 'praia/ilha'], 1, '予定 é programação; 予約 é reserva.'),
  q('v2', 33, '{案内所|あんないじょ}', ['agência bancária', 'centro de informações', 'estação de trem', 'hospedagem'], 2, 'É onde Takeshi pede mapa e ônibus.'),
  q('v3', 34, '{割引券|わりびきけん}', ['cupom de desconto', 'passaporte', 'cartão postal', 'bilhete único'], 1, '割引 = desconto; 券 = bilhete/cupom.'),
  q('v4', 35, '{旅館|りょかん}', ['restaurante', 'pousada tradicional japonesa', 'templo', 'universidade'], 2, 'Hospedagem japonesa tradicional.'),
  q('v5', 36, '{景色|けしき}／{自然|しぜん}', ['trânsito/cidade', 'paisagem/natureza', 'moda/loja', 'história/paz'], 2, 'Vocabulário para descrever lugares.'),
  q('r1', 37, 'Quando e onde a primeira bomba atômica foi lançada?', ['Tóquio, 1945-08-09', 'Hiroshima, 1945-08-06', 'Nagasaki, 1944-08-06', 'Osaka, 1945-07-07'], 2, 'O texto informa 広島 e 1945年8月6日.', { audio: questionAudio('Y15_1', 'Y15-1 — Hiroshima e Miyajima') }),
  q('r2', 38, 'O que visitantes fazem no Museu Memorial da Paz?', ['Compram roupas', 'Leem e veem fotos sobre a bomba e pensam no significado da paz', 'Nadam', 'Visitam cervos'], 2, 'O museu reúne leitura, fotos e reflexão sobre paz.', { audio: questionAudio('Y15_1', 'Y15-1 — Hiroshima e Miyajima') }),
  q('r3', 39, 'Qual cuidado é indicado em Miyajima?', ['Não entrar no mar', 'Cervos famintos podem se aproximar de quem carrega comida', 'Não fotografar o santuário', 'Usar bicicleta'], 2, '食べ物を持っている人は注意したほうがいい.', { audio: questionAudio('Y15_1', 'Y15-1 — Hiroshima e Miyajima') }),
  q('r4', 40, 'Por que Okinawa permite esportes o ano todo?', ['Não chove', 'Fica ao sul e é quente até no inverno', 'Há muitas academias', 'É barata'], 2, '日本の一番南にあって、冬も暖かい.', { audio: questionAudio('Y15_2', 'Y15-2 — Okinawa') }),
  q('r5', 41, 'O que a autora pretende fazer numa próxima viagem de inverno?', ['Ver baleias', 'Escalar montanha', 'Visitar templo', 'Comprar roupas'], 1, 'De dezembro a abril é possível ver baleias.', { audio: questionAudio('Y15_2', 'Y15-2 — Okinawa') }),
  q('r6', 42, 'Que alternativa é sugerida para quem não quer caminhar em Sagano?', ['Táxi', 'Alugar bicicleta', 'Ônibus', 'Ficar no hotel'], 2, '歩きたくない人は自転車を借りたほうがいい.', { audio: questionAudio('Y15_3', 'Y15-3 — Arashiyama e Sagano') }),
  q('r7', 43, 'O que se vê do trem turístico de Sagano?', ['Mar e praia', 'Paisagem de montanhas e rio', 'Cidade subterrânea', 'Templo Zenkōji'], 2, '列車から見える山と川の景色.', { audio: questionAudio('Y15_3', 'Y15-3 — Arashiyama e Sagano') }),
  q('r8', 44, 'Onde as pessoas costumam se encontrar em Shibuya?', ['No museu', 'Diante da estátua de Hachikō', 'Dentro da 109', 'No aeroporto'], 2, '駅を出てハチ公の前で待ち合わせをします.', { audio: questionAudio('Y15_4', 'Y15-4 — Shibuya') }),
  q('r9', 45, 'Qual vantagem existe em dias de chuva?', ['A 109 fecha', 'Pode-se ir da estação à 109 pelo subterrâneo', 'O cruzamento fica vazio', 'As roupas ficam grátis'], 2, '地下を通って行けるので便利です.', { audio: questionAudio('Y15_4', 'Y15-4 — Shibuya') }),
]

const listeningQuestions = [
  q('l1', 46, 'W15-A: de quem era o rádio?', ['Do avô de Tom', 'Da irmã', 'Do professor', 'Da namorada'], 1, 'おじいさんが若い時使っていたラジオ.', { audio: questionAudio('W15_A', 'W15-A — Objetos no quarto de Tom') }),
  q('l2', 47, 'W15-A: quem fez o cachecol?', ['A mãe', 'A irmã', 'A namorada', 'Tom'], 2, '妹が編んだマフラー.', { audio: questionAudio('W15_A', 'W15-A — Objetos no quarto de Tom') }),
  q('l3', 48, 'W15-A: onde foi tirada a foto?', ['Tóquio', 'Kyoto', 'Nagano', 'Hiroshima'], 2, '僕の彼女と京都で撮った写真.', { audio: questionAudio('W15_A', 'W15-A — Objetos no quarto de Tom') }),
  q('l4', 49, 'W15-A: que livro precisa ser devolvido amanhã?', ['Japonês', 'História emprestado pelo professor', 'Viagem', 'Arte'], 2, '先生に借りた歴史の本.', { audio: questionAudio('W15_A', 'W15-A — Objetos no quarto de Tom') }),
  q('l5', 50, 'W15-B: plano inicial de Sora para as férias', ['Ir a Hiroshima', 'Ficar em casa estudando', 'Ir a Okinawa', 'Trabalhar'], 2, 'うちで勉強しようと思っているんだ.', { audio: questionAudio('W15_B', 'W15-B — Planejando Hiroshima') }),
  q('l6', 51, 'W15-B: Sora já foi a Hiroshima?', ['Sim', 'Ainda não', 'Nasceu lá', 'Não é informado'], 2, 'まだ行ったことがない.', { audio: questionAudio('W15_B', 'W15-B — Planejando Hiroshima') }),
  q('l7', 52, 'W15-B: o que Mary fará antes da viagem?', ['Pesquisar Hiroshima em livro e perguntar ao pai sobre pousada barata', 'Fazer dever de Sora', 'Comprar passagem de avião', 'Reservar museu'], 1, 'Ela usa 調べておく e 聞いておく.', { audio: questionAudio('W15_B', 'W15-B — Planejando Hiroshima') }),
  q('l8', 53, 'W15-B: o que Sora precisa fazer antes?', ['Lavar roupa', 'Fazer o dever', 'Comprar mapa', 'Trabalhar'], 2, '私は宿題をしておかなきゃ.', { audio: questionAudio('W15_B', 'W15-B — Planejando Hiroshima') }),
  q('l9', 54, 'W15-C: até que horas a piscina pode ser usada?', ['Até 10h', 'Até 22h', '24 horas', 'Até 18h'], 2, '夜十時まで泳げるプール.', { audio: questionAudio('W15_C', 'W15-C — Anúncio da Universidade Sakura') }),
  q('l10', 55, 'W15-C: há shopping dentro do campus?', ['Sim', 'Não; fica perto da universidade', 'Não existe shopping', 'Fica em outra cidade'], 2, '大学の近くにショッピングモールがある.', { audio: questionAudio('W15_C', 'W15-C — Anúncio da Universidade Sakura') }),
  q('l11', 56, 'W15-C: o que existe no shopping?', ['Apenas roupas', 'Restaurantes internacionais, supermercado 24h e café', 'Templo e museu', 'Dormitório'], 2, 'O anúncio lista os três serviços.', { audio: questionAudio('W15_C', 'W15-C — Anúncio da Universidade Sakura') }),
  q('l12', 57, 'W15-C: quem estuda japonês na universidade?', ['Muitos intercambistas', 'Somente japoneses', 'Crianças', 'Ninguém'], 1, '日本語を勉強している留学生がたくさんいます.', { audio: questionAudio('W15_C', 'W15-C — Anúncio da Universidade Sakura') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K15_01: [{ label: '{会話|かいわ} I', lines: [
    { speaker: 'Anúncio', ja: '{第十五課|だいじゅうごか}　{長野旅行|ながのりょこう}　{会話|かいわ}{一|いち}', pt: 'Lição 15: Viagem a Nagano. Diálogo I.' },
    { speaker: 'Mary', ja: 'たけしくん、{今度|こんど}の{休|やす}み、{予定|よてい}ある？', pt: 'Takeshi, você tem planos para as próximas férias?' },
    { speaker: 'Takeshi', ja: 'ううん。{別|べつ}に。どうして？', pt: 'Não, nada em especial. Por quê?' },
    { speaker: 'Mary', ja: 'ゆいさんの{長野|ながの}のうちに{行|い}こうと{思|おも}ってるんだけど、{一緒|いっしょ}に{行|い}かない？', pt: 'Estou pensando em ir à casa de Yui em Nagano. Quer ir junto?' },
    { speaker: 'Takeshi', ja: 'いいの？', pt: 'Tudo bem?' },
    { speaker: 'Mary', ja: 'うん。ゆいさんが、「たけしくんも{誘|さそ}って」と{言|い}ってたから。', pt: 'Sim. Yui disse para convidar você também.' },
    { speaker: 'Takeshi', ja: 'じゃあ、{行|い}く。{電車|でんしゃ}の{時間|じかん}、{調|しら}べておくよ。', pt: 'Então vou. Vou verificar os horários dos trens antes.' },
    { speaker: 'Mary', ja: 'ありがとう。じゃあ、{私|わたし}、ゆいさんに{電話|でんわ}しておく。', pt: 'Obrigada. Então vou ligar para Yui antecipadamente.' },
  ] }],
  K15_03: [{ label: '{会話|かいわ} II', lines: [
    { speaker: 'Anúncio', ja: '{二|に}', pt: 'Diálogo II.' },
    { speaker: 'Takeshi', ja: '{早|はや}く{着|つ}いたから、ちょっと{観光|かんこう}しない？', pt: 'Como chegamos cedo, quer fazer um pouco de turismo?' },
    { speaker: 'Mary', ja: 'うん。どこに{行|い}く？', pt: 'Sim. Aonde vamos?' },
    { speaker: 'Takeshi', ja: '{善光寺|ぜんこうじ}はどう？{有名|ゆうめい}なお{寺|てら}だよ。', pt: 'Que tal o templo Zenkōji? É um templo famoso.' },
    { speaker: 'Mary', ja: 'いいね。{昼|ひる}ご{飯|はん}は{何|なに}にする？', pt: 'Boa. O que vamos comer no almoço?' },
    { speaker: 'Takeshi', ja: '{長野|ながの}はそばがおいしいから、そばを{食|た}べようよ。', pt: 'Como o soba de Nagano é gostoso, vamos comer soba.' },
  ] }],
  K15_05: [{ label: '{会話|かいわ} III', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}', pt: 'Diálogo III.' },
    { speaker: 'Takeshi', ja: 'すみません、{善光寺|ぜんこうじ}に{行|い}くバスはどれですか。', pt: 'Com licença, qual ônibus vai ao templo Zenkōji?' },
    { speaker: 'Atendente', ja: '{善光寺|ぜんこうじ}なら、{十一番|じゅういちばん}のバスですよ。', pt: 'Para Zenkōji, é o ônibus número 11.' },
    { speaker: 'Takeshi', ja: 'ありがとうございます。この{地図|ちず}、もらってもいいですか。', pt: 'Muito obrigado. Posso ficar com este mapa?' },
    { speaker: 'Atendente', ja: 'ええ、どうぞ。それから、これ、{美術館|びじゅつかん}の{割引券|わりびきけん}ですが、よかったらどうぞ。', pt: 'Sim, claro. E estes são cupons de desconto para o museu de arte; pegue-os se quiser.' },
    { speaker: 'Mary', ja: 'この{美術館|びじゅつかん}、あした{行|い}く{予定|よてい}なんです。どうもありがとうございます。', pt: 'Estamos planejando ir a este museu amanhã. Muito obrigada.' },
    { speaker: 'Atendente', ja: '{気|き}をつけて。', pt: 'Boa viagem; cuidem-se.' },
  ] }],
  Y15_1: [{ label: '{広島|ひろしま}と{宮島|みやじま}', lines: [
    { speaker: 'Anúncio', ja: '{読み書き編|よみかきへん}　{第十五課|だいじゅうごか}　{二|に}　{私|わたし}が{好|す}きな{所|ところ}　B　{一|いち}　{広島|ひろしま}と{宮島|みやじま}', pt: 'Parte de leitura e escrita, lição 15: Meu lugar favorito. Texto 1, Hiroshima e Miyajima.' },
    { speaker: 'N', ja: '{広島|ひろしま}は{私|わたし}が{生|う}まれた{町|まち}です。{広島|ひろしま}には{原爆|げんばく}ドームがあります。', pt: 'Hiroshima é a cidade onde nasci. Em Hiroshima fica a Cúpula da Bomba Atômica.' },
    { speaker: 'N', ja: '{一九四五年八月六日|せんきゅうひゃくよんじゅうごねんはちがつむいか}、{広島|ひろしま}に{世界|せかい}で{初|はじ}めて{原爆|げんばく}が{落|お}とされました。', pt: 'Em 6 de agosto de 1945, a primeira bomba atômica do mundo foi lançada sobre Hiroshima.' },
    { speaker: 'N', ja: 'この{原爆|げんばく}で{二十万人|にじゅうまんにん}の{人|ひと}が{死|し}にました。', pt: 'Duzentas mil pessoas morreram em consequência dessa bomba.' },
    { speaker: 'N', ja: '{広島|ひろしま}の{人|ひと}は{原爆|げんばく}を{忘|わす}れてはいけないと{思|おも}い、{原爆|げんばく}ドームを{残|のこ}しました。', pt: 'Os moradores de Hiroshima acharam que a bomba não deveria ser esquecida e preservaram a cúpula.' },
    { speaker: 'N', ja: '{近|ちか}くには{平和記念資料館|へいわきねんしりょうかん}があり、{原爆|げんばく}について{読|よ}んだり、{写真|しゃしん}を{見|み}たりできます。', pt: 'Nas proximidades há o Museu Memorial da Paz, onde se pode ler e ver fotografias sobre a bomba.' },
    { speaker: 'N', ja: 'ここに{来|き}た{人|ひと}は、{平和|へいわ}の{意味|いみ}について{考|かんが}えます。', pt: 'Quem vem aqui pensa sobre o significado da paz.' },
    { speaker: 'N', ja: '{広島|ひろしま}の{近|ちか}くには{宮島|みやじま}があります。{宮島|みやじま}は{小|ちい}さい{島|しま}で、{有名|ゆうめい}な{神社|じんじゃ}があります。', pt: 'Perto de Hiroshima fica Miyajima, uma pequena ilha com um santuário famoso.' },
    { speaker: 'N', ja: 'この{神社|じんじゃ}は{海|うみ}の{近|ちか}くにあるので、{天気|てんき}がいい{日|ひ}は、{海|うみ}の{青|あお}い{色|いろ}と{神社|じんじゃ}の{赤|あか}い{色|いろ}、そして{山|やま}の{緑|みどり}がとてもきれいです。', pt: 'Como o santuário fica perto do mar, em dias de tempo bom o azul do mar, o vermelho do santuário e o verde das montanhas formam uma paisagem belíssima.' },
    { speaker: 'N', ja: 'この{島|しま}には{鹿|しか}がたくさんいます。{鹿|しか}はたいていおなかがすいているので、{食|た}べ{物|もの}を{持|も}っている{人|ひと}は{注意|ちゅうい}したほうがいいでしょう。', pt: 'Há muitos cervos na ilha. Como normalmente estão com fome, quem carrega comida deve tomar cuidado.' },
  ] }],
  Y15_2: [{ label: '{沖縄|おきなわ}', lines: [
    { speaker: 'N', ja: '{私|わたし}は{今|いま}まで{日本|にほん}のいろいろな{所|ところ}に{行|い}きましたが、その{中|なか}で{沖縄|おきなわ}が{一番好|いちばんす}きです。', pt: 'Já visitei vários lugares no Japão, mas Okinawa é meu favorito.' },
    { speaker: 'N', ja: '{沖縄|おきなわ}はエメラルドグリーンの{海|うみ}と{白|しろ}いビーチで{有名|ゆうめい}です。{世界|せかい}のビーチの{中|なか}で{一番|いちばん}きれいだと{思|おも}います。', pt: 'Okinawa é famosa pelo mar verde-esmeralda e praias brancas. Acho que são as mais bonitas do mundo.' },
    { speaker: 'N', ja: '{沖縄|おきなわ}は{日本|にほん}の{一番南|いちばんみなみ}にあって、{冬|ふゆ}も{暖|あたた}かいです。だから、ゴルフなどのスポーツが{一年中|いちねんじゅう}{楽|たの}しめます。', pt: 'Okinawa fica no extremo sul do Japão e é quente até no inverno. Por isso, é possível praticar esportes como golfe o ano todo.' },
    { speaker: 'N', ja: '{今年|ことし}の{夏|なつ}、{私|わたし}は{沖縄|おきなわ}で{初|はじ}めてダイビングをしてみました。', pt: 'Neste verão experimentei mergulhar em Okinawa pela primeira vez.' },
    { speaker: 'N', ja: '{海|うみ}の{中|なか}にはいろいろな{色|いろ}の{魚|さかな}がたくさん{泳|およ}いでいて、{本当|ほんとう}に{感動|かんどう}しました。', pt: 'Muitos peixes de várias cores nadavam no mar, e fiquei realmente emocionado.' },
    { speaker: 'N', ja: '{十二月|じゅうにがつ}から{四月|しがつ}まではくじらが{見|み}られるので、{今度|こんど}は{冬|ふゆ}に{行|い}こうと{思|おも}っています。', pt: 'Como se podem ver baleias de dezembro a abril, pretendo ir no inverno da próxima vez.' },
  ] }],
  Y15_3: [{ label: '{京都|きょうと}（{嵐山|あらしやま}・{嵯峨野|さがの}）', lines: [
    { speaker: 'N', ja: '{京都|きょうと}には{古|ふる}いお{寺|てら}がたくさんありますが、{私|わたし}がよく{行|い}く{所|ところ}は{嵐山|あらしやま}です。', pt: 'Kyoto tem muitos templos antigos, mas o lugar que visito com frequência é Arashiyama.' },
    { speaker: 'N', ja: '{嵐山|あらしやま}にはお{寺|てら}も{自然|しぜん}もあります。{嵐山|あらしやま}は{人気|にんき}があって、{紅葉|こうよう}の{時|とき}は{特|とく}に{混|こ}んでいます。', pt: 'Arashiyama tem templos e natureza. É popular e fica especialmente cheia na época das folhas de outono.' },
    { speaker: 'N', ja: '{嵐山|あらしやま}の{近|ちか}くに{嵯峨野|さがの}があります。{嵯峨野|さがの}は{広|ひろ}いので、{足|あし}が{疲|つか}れるかもしれません。', pt: 'Perto de Arashiyama fica Sagano. Como é ampla, suas pernas podem se cansar.' },
    { speaker: 'N', ja: '{歩|ある}きたくない{人|ひと}は{自転車|じてんしゃ}を{借|か}りたほうがいいでしょう。', pt: 'Quem não quiser caminhar deve alugar uma bicicleta.' },
    { speaker: 'N', ja: '{嵯峨野|さがの}には{竹|たけ}がたくさんあり、{竹|たけ}で{作|つく}ったおみやげを{売|う}っています。', pt: 'Há muito bambu em Sagano e vendem lembranças feitas de bambu.' },
    { speaker: 'N', ja: '{嵯峨野|さがの}からトロッコ{列車|れっしゃ}が{走|はし}っています。{列車|れっしゃ}から{見|み}える{山|やま}と{川|かわ}の{景色|けしき}はとてもきれいです。', pt: 'Um trem turístico parte de Sagano. A paisagem das montanhas e do rio vista do trem é muito bonita.' },
  ] }],
  Y15_4: [{ label: '{東京|とうきょう}（{渋谷|しぶや}）', lines: [
    { speaker: 'N', ja: '{渋谷|しぶや}は{若者|わかもの}のファッションで{有名|ゆうめい}な{場所|ばしょ}で、おしゃれな{店|みせ}やカフェがたくさんあります。', pt: 'Shibuya é famosa pela moda jovem e tem muitas lojas e cafés elegantes.' },
    { speaker: 'N', ja: '{私|わたし}はよく{友|とも}だちと{渋谷|しぶや}に{買|か}い{物|もの}に{行|い}きます。{駅|えき}を{出|で}てハチ{公|こう}の{前|まえ}で{友|とも}だちと{待|ま}ち{合|あ}わせをします。', pt: 'Costumo ir às compras em Shibuya com amigos. Saio da estação e encontro meus amigos diante de Hachikō.' },
    { speaker: 'N', ja: '{左|ひだり}の{写真|しゃしん}が{犬|いぬ}のハチ{公|こう}です。ハチ{公|こう}は{死|し}んだ{主人|しゅじん}を{毎日|まいにち}ここで{待|ま}っていて、{有名|ゆうめい}になりました。', pt: 'A foto à esquerda mostra o cão Hachikō. Ele ficou famoso por esperar aqui todos os dias seu dono falecido.' },
    { speaker: 'N', ja: 'ハチ{公|こう}の{話|はなし}は{映画|えいが}にもなりました。{今|いま}はたくさんの{人|ひと}がここに{来|き}て、ハチ{公|こう}と{写真|しゃしん}をとります。', pt: 'A história de Hachikō também virou filme. Hoje muitas pessoas vêm tirar fotos com ele.' },
    { speaker: 'N', ja: 'この{建物|たてもの}は SHIBUYA109 で、{若者|わかもの}に{人気|にんき}がある{服|ふく}を{売|う}っています。', pt: 'Este prédio é a SHIBUYA109, que vende roupas populares entre os jovens.' },
    { speaker: 'N', ja: 'ハチ{公|こう}の{前|まえ}からスクランブル{交差点|こうさてん}を{渡|わた}って SHIBUYA109 まで{歩|ある}きます。ここはいつもにぎやかです。', pt: 'Da estátua de Hachikō, atravessamos o cruzamento scramble e caminhamos até a SHIBUYA109. A área está sempre movimentada.' },
    { speaker: 'N', ja: '{雨|あめ}の{日|ひ}は{駅|えき}から SHIBUYA109 まで{地下|ちか}を{通|とお}って{行|い}けるので{便利|べんり}です。', pt: 'Em dias de chuva é conveniente poder ir da estação à SHIBUYA109 pelo subterrâneo.' },
  ] }],
}

scripts.K15_02 = scripts.K15_01
scripts.K15_04 = scripts.K15_03
scripts.K15_06 = scripts.K15_05

const specialTitles: Record<string, string> = {
  K15_01: 'Diálogo I — planejando a viagem', K15_02: 'Diálogo I — repetição guiada',
  K15_03: 'Diálogo II — na estação de Nagano', K15_04: 'Diálogo II — repetição guiada',
  K15_05: 'Diálogo III — no centro de informações', K15_06: 'Diálogo III — repetição guiada',
  Y15_1: 'Leitura — Hiroshima e Miyajima', Y15_2: 'Leitura — Okinawa',
  Y15_3: 'Leitura — Arashiyama e Sagano', Y15_4: 'Leitura — Shibuya',
  W15_A: 'Workbook A — objetos no quarto de Tom', W15_B: 'Workbook B — planejando Hiroshima',
  W15_C: 'Workbook C — Universidade Sakura',
}
const audioCodes = [...Array.from({ length: 16 }, (_, index) => `K15_${String(index + 1).padStart(2, '0')}`), 'Y15_1', 'Y15_2', 'Y15_3', 'Y15_4', 'W15_A', 'W15_B', 'W15_C']
const kindForCode = (code: string): AudioTrackKind => {
  if (code.startsWith('Y')) return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (/^K15_0[135]$/.test(code)) return 'dialogue'
  if (/^K15_0[246]$/.test(code)) return 'dialogue-support'
  if (/^K15_0[78]$/.test(code)) return 'vocabulary'
  return 'drill'
}
const audios: AudioTrack[] = audioCodes.map((code) => {
  const metadata = genki2AudioSourceByCode[code]
  const kind = kindForCode(code)
  const script = scripts[code] ?? []
  const activity = metadata?.sourceActivityPt ?? `Faixa ${code}`
  const source = metadata?.material === 'workbook' ? 'Workbook' : 'Textbook'
  const purposePt = kind === 'dialogue' ? 'Compreender o diálogo integral e reconhecer decisão, intenção e preparação em contexto.'
    : kind === 'dialogue-support' ? 'Repetir o diálogo com pausas e automatizar propostas e planos.'
      : kind === 'reading' ? 'Acompanhar a leitura integral e extrair história, atividade, recomendação e cuidado de cada lugar.'
        : kind === 'workbook' ? 'Resolver a tarefa auditiva e justificar respostas com informações explícitas.'
          : kind === 'vocabulary' ? 'Fixar pronúncia e significado do vocabulário de viagem e descrição.'
            : `Produzir oralmente a ${activity.toLowerCase()} antes da resposta gravada.`
  return {
    id: trackId(code), code, kind, language: 'ja', title: specialTitles[code] ?? activity,
    descriptionPt: `${activity}. ${purposePt}`, purposePt,
    instructionsPt: kind === 'workbook'
      ? ['Leia a tarefa indicada.', 'Ouça sem pausar e marque uma primeira resposta.', 'Ouça novamente, anote a evidência e conclua as questões vinculadas.']
      : ['Ouça uma vez sem tradução.', 'Repita preservando contrações e entonação.', 'Reconte o plano ou descrição sem olhar o texto.'],
    sourceRefPt: `${source} Genki II, 3ª ed., p. ${metadata?.sourcePage ?? '—'}`,
    sourceActivityPt: activity, sourcePage: metadata?.sourcePage,
    practiceTaskPt: kind === 'reading' ? 'Crie uma ficha do lugar com quatro campos: destaque, atividade, época/condição e cuidado; depois releia o trecho em voz alta.'
      : kind === 'workbook' ? 'Responda sem transcrição, identifique a oração qualificadora ou preparação que comprova cada item e repita-a.'
        : kind === 'vocabulary' ? 'Antecipe a palavra japonesa e use cada item ainda difícil em um plano de viagem.'
          : kind === 'drill' || kind === 'dialogue-support' ? 'Fale durante a pausa; repita itens em que a forma volitiva, ておく ou a oração relativa divergir.'
            : 'Divida o diálogo em decisão, preparação e ação; represente um personagem sem ler a tradução.',
    src: `${BASE}/${code}.mp3`, script,
    transcript: script.length ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script } : undefined,
  }
})

export const genki2Lesson15: Section = {
  id: 'lesson-15', level: 'genki-2', titleJa: '第15課　長野旅行',
  titlePt: 'Lição 15 — Viagem a Nagano',
  summaryPt: 'Forma volitiva, intenções, preparativos com ておく, orações relativas, planos de viagem, lugares favoritos e compreensão auditiva.',
  studyNotes,
  groups: [
    group('dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    group('grammar', '文法 1〜4', 'propostas, intenções, preparativos e orações relativas', grammarQuestions),
    group('vocabulary-reading', '読み書き', 'vocabulário, kanji e compreensão das leituras', vocabularyReadingQuestions),
    group('listening', '聞く練習', 'compreensão auditiva do workbook', listeningQuestions),
  ],
  audios,
}
