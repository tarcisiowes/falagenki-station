import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-16'
const lessonPrefix = 'genki-2-l16'
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
  instructionPt: `Resolva as questões de ${subtitlePt.toLowerCase()}, justifique a escolha e envie os itens à revisão.`,
  questions,
})

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situação da lição',
    bodyPt: 'John se desculpa por faltar à aula, pede prazo para um dever perdido, procura a pasta na estação e depois explica como o funcionário o ajudou. A lição trabalha favores, pedidos em diferentes graus de polidez, desejos, orações temporais e desculpas.',
    helpPt: 'A mesma pasta atravessa toda a lição. Observe a mudança de registro: professor → funcionário desconhecido → professor novamente.',
  },
  {
    title: '1. 〜てあげる・〜てくれる・〜てもらう',
    bodyPt: 'Forma て + あげる descreve uma ação que faço em benefício de outra pessoa: 私は友だちに宿題を手伝ってあげました. 〜てくれる descreve alguém fazendo algo por mim/meu grupo: 駅員さんが探してくれました. 〜てもらう coloca o beneficiário como sujeito: 私は駅員さんに探してもらいました. A direção psicológica é a mesma dos verbos de dar/receber da Lição 14.',
    helpPt: 'Desenhe a seta do favor. Para mim: くれる. De mim para alguém: あげる. Câmera no beneficiário que “recebeu a ação”: もらう. Evite てあげる para superiores porque pode soar condescendente.',
  },
  {
    title: '2. Pedidos com 〜ていただけませんか',
    bodyPt: 'A escala de pedidos vai de polido a casual: 〜ていただけませんか; 〜てくれませんか; 〜てくれない？; forma て sozinha. 手伝っていただけませんか é adequado para professor, chefe ou desconhecido; ちょっと待ってくれませんか serve em contexto neutro; それ取ってくれない？ entre próximos.',
    helpPt: 'Escolha pelo relacionamento, não pela dificuldade do favor. Quanto maior a distância/status, mais longa a forma costuma ser.',
  },
  {
    title: '3. 〜といい — esperança',
    bodyPt: 'Forma curta presente + といいですね／といいね deseja algo bom para outra pessoa: いい仕事が見つかるといいですね. Para o próprio bem, use といいんですが／といいんだけど: 試験がやさしいといいんですが. Quando a ação está sob seu controle, use potencial para expressar esperança: 大学に行けるといいんですが.',
    helpPt: 'ですね envia o desejo ao outro; んですが torna o desejo pessoal mais modesto. Não use como simples decisão: para “vou estudar”, escolha intenção/plano.',
  },
  {
    title: '4. 〜時 — quando',
    bodyPt: 'Oração A em forma curta + 時 introduz o momento de B. Use presente em A se, no momento de B, A ainda é atual/futura: チベットに行く時、ビザを取ります. Use passado se A já terminou: 中国に行った時、ウーロン茶を買いました. Estados usam presente: さびしい時. Adjetivo な recebe な; substantivo recebe の: 元気な時, 子供の時.',
    helpPt: 'Coloque-se exatamente no instante de B. Se A ainda não acabou/aconteceu, presente; se A já ficou para trás, passado. A escolha não depende do tempo global da frase.',
  },
  {
    title: '5. 〜てすみませんでした／〜なくてごめん',
    bodyPt: 'Forma て + すみませんでした pede desculpa por algo feito: 遅くなってすみませんでした. Para algo não feito, transforme ない em なくて: 宿題を持ってこなくてすみませんでした. Em registro casual, use 〜てごめん／〜なくてごめん.',
    helpPt: 'A desculpa nomeia a causa antes de すみません. Fez algo inadequado: て. Deixou de fazer: なくて.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Problema e busca: 忘れ物, 朝寝坊, 乗り遅れる, ファイル, 駅員, 探す, 見つかる, 大きさ. Favores: 手伝う, 連れていく, 貸す, 紹介する. Desculpa e desejo: 失礼します, 困る, 遅くなる, 〜といい. Vida doméstica: 掃除, 洗濯, アイロンをかける.',
    helpPt: 'Reconstrua a sequência da pasta usando cinco verbos: 忘れる → なくす → 探す → 見つかる → 手伝ってもらう.',
  },
  {
    title: 'Leitura e escrita — o mangá Doraemon',
    bodyPt: 'Kanji-alvo: 供 世 界 全 部 始 週 考 開 屋 方 運 動 教 室 以. O texto apresenta Doraemon, os dispositivos “Ankipan” e “Dokodemo Door”, explica sua popularidade e conclui que Nobita precisa estudar por conta própria.',
    helpPt: 'Divida o texto em quatro partes: personagem e mundo; episódio do Ankipan; motivos da popularidade; desfecho e circulação internacional.',
  },
]

const dialogueQuestions = [
  q('d1', 1, 'Por que John faltou à aula?', ['Ficou doente', 'Dormiu demais e perdeu o trem', 'Perdeu a pasta', 'Foi trabalhar'], 2, '朝寝坊して、電車に乗り遅れたんです.', { audio: questionAudio('K16_01', 'K16-01 — No escritório do professor') }),
  q('d2', 2, 'Quantas vezes isso já aconteceu?', ['Primeira', 'Segunda', 'Terceira', 'Quarta'], 3, 'もう三回目ですよ.', { audio: questionAudio('K16_01', 'K16-01 — No escritório do professor') }),
  q('d3', 3, 'Que favor John pede ao professor?', ['Cancelar a prova', 'Esperar o dever até amanhã', 'Procurar a pasta', 'Dar outro dever'], 2, '宿題をあしたまで待っていただけませんか.', { audio: questionAudio('K16_01', 'K16-01 — No escritório do professor') }),
  q('d4', 4, 'O que o professor deseja?', ['Que John durma cedo', 'Que a pasta seja encontrada', 'Que a aula termine', 'Que o trem chegue'], 2, '見つかるといいですね.', { audio: questionAudio('K16_01', 'K16-01 — No escritório do professor') }),
  q('d5', 5, 'Como John descreve a pasta?', ['Vermelha e pequena', 'Azul e aproximadamente deste tamanho', 'Preta e grande', 'Branca e fina'], 2, '青くてこのぐらいの大きさです.', { audio: questionAudio('K16_03', 'K16-03 — No achados e perdidos') }),
  q('d6', 6, 'Quando John acha que esqueceu a pasta?', ['Ao entrar no trem', 'Ao descer do trem', 'Na sala de aula', 'Em casa'], 2, '電車を降りる時、忘れたと思う.', { audio: questionAudio('K16_03', 'K16-03 — No achados e perdidos') }),
  q('d7', 7, 'Quem encontrou a pasta?', ['Professor', 'Takeshi', 'Funcionário da estação', 'Mary'], 3, '駅員さんが探してくれたんです.', { audio: questionAudio('K16_05', 'K16-05 — Devolvendo o dever') }),
  q('d8', 8, 'Por que o dever ficou bem feito?', ['O professor ajudou', 'O funcionário da estação ajudou John', 'John copiou', 'Mary corrigiu'], 2, '駅員さんに宿題を手伝ってもらいましたから.', { audio: questionAudio('K16_05', 'K16-05 — Devolvendo o dever') }),
]

const grammarQuestions = [
  q('g1', 9, '私は友だちに宿題を手伝って（　）。', ['くれました', 'あげました', 'もらいました', 'いただきました'], 2, 'O favor parte de mim para o amigo: てあげる.'),
  q('g2', 10, '駅員さんが私のファイルを探して（　）。', ['あげました', 'くれました', 'もらいました', 'おきました'], 2, 'O funcionário fez a ação em meu benefício: てくれる.'),
  q('g3', 11, '私は駅員さんにファイルを探して（　）。', ['あげました', 'くれました', 'もらいました', 'みました'], 3, 'O beneficiário é sujeito e recebe a ação: てもらう.'),
  q('g4', 12, 'ジョンは私をパーティーに連れていって（　）。', ['くれました', 'あげました', 'もらいました', 'しまいました'], 1, 'John fez o favor para mim: てくれる.'),
  q('g5', 13, '私はサラに日本の歌を教えて（　）。', ['くれました', 'あげました', 'もらいました', 'いただきました'], 2, 'Eu ensino em benefício de Sarah: てあげる.'),
  q('g6', 14, 'Por que 先生に説明してあげます pode soar inadequado?', ['É gramaticalmente impossível', 'Pode soar condescendente ao superior', 'Falta objeto', 'あげる só se usa com objetos'], 2, 'A ideia explícita de “fazer para ele” pode parecer superioridade.'),
  q('g7', 15, 'Pedido mais polido ao professor:', ['待って。', '待ってくれない？', '待ってくれませんか。', '待っていただけませんか。'], 4, 'いただけませんか é o grau mais polido apresentado.'),
  q('g8', 16, 'Pedido neutro/polido para alguém da família anfitriã:', ['ちょっと待ってくれませんか', 'ちょっと待て', '待とうか', '待ったらどう'], 1, 'てくれませんか é apropriado nesse contexto.'),
  q('g9', 17, 'Pedido casual entre amigos:', ['それを取っていただけませんか', 'それ取ってくれない？', 'それを取りますか', 'それを取ったらどう'], 2, 'てくれない？ é casual.'),
  q('g10', 18, '手伝って（　）。 “Poderia me ajudar?”', ['いただけませんか', 'あげませんか', 'ほしいです', 'そうです'], 1, 'Forma て + いただけませんか.'),
  q('g11', 19, 'いいアルバイトが見つかる（　）。 desejo para outra pessoa', ['といいですね', 'といいんですが', 'たらどうですか', 'かもしれません'], 1, 'といいですね deseja boa sorte ao outro.'),
  q('g12', 20, '試験がやさしい（　）。 desejo para si', ['といいですね', 'といいんですが', 'とあげます', 'てもらいます'], 2, 'といいんですが apresenta desejo pessoal modestamente.'),
  q('g13', 21, '雨が降らない（　）。 “Espero que não chova.”', ['といいね', 'たらどう', 'しかない', 'ときでした'], 1, 'A forma curta negativa pode vir antes de といい.'),
  q('g14', 22, '“Espero conseguir entrar na universidade.”', ['大学に行くといいんですが', '大学に行けるといいんですが', '大学に行ってあげます', '大学に行った時です'], 2, 'Uma ação sob seu controle é formulada como possibilidade: 行ける.'),
  q('g15', 23, 'チベットに（　）時、ビザを取ります。', ['行った', '行く', '行っている', '行けた'], 2, 'Ao obter o visto, a ida ainda é futura; use presente.'),
  q('g16', 24, '中国に（　）時、ウーロン茶を買いました。 viagem já realizada', ['行く', '行った', '行こう', '行ける'], 2, 'No momento da compra, chegar à China já ocorreu.'),
  q('g17', 25, '寝る時、電気を消します。 Ordem dos eventos:', ['Dormir e depois apagar', 'Apagar e depois dormir', 'Ações simultâneas sempre', 'Não há relação temporal'], 2, 'No momento de apagar, 寝る ainda está por acontecer.'),
  q('g18', 26, '出かける時、ドアにかぎをかけました。', ['Trancou antes de sair', 'Trancou depois de voltar', 'Esqueceu a chave', 'Ainda vai trancar'], 1, 'Mesmo com frase principal passada, 出かける fica presente porque sair ainda era futuro naquele instante.'),
  q('g19', 27, '“Quando estou sozinho”', ['一人だ時', '一人の時', '一人な時', '一人で時'], 2, 'Substantivo recebe の antes de 時.'),
  q('g20', 28, '“Quando estou saudável/bem”', ['元気だ時', '元気な時', '元気の時', '元気く時'], 2, 'Adjetivo な recebe な.'),
  q('g21', 29, 'テレビを見ている時、電話がありました。', ['A ligação veio durante o programa', 'A ligação veio depois', 'A TV estava desligada', 'A ação é potencial'], 1, 'Uma ação em andamento usa ている antes de 時.'),
  q('g22', 30, '汚い言葉を使って（　）。 pedido formal de desculpas', ['すみませんでした', 'くれませんか', 'といいですね', 'もらいました'], 1, 'Forma て nomeia a ação pela qual se pede desculpa.'),
  q('g23', 31, '宿題を持ってこ（　）すみませんでした。', ['ないで', 'なくて', 'なかったら', 'ないし'], 2, 'Para uma omissão, ない muda para なくて.'),
  q('g24', 32, '“Desculpe por esquecer nosso encontro.” (casual)', ['約束を忘れてごめん', '約束を忘れたらどう', '約束を忘れてくれない', '約束を忘れるといい'], 1, 'Forma て + ごめん é casual.'),
  q('g25', 33, '“Desculpe por não avisar mais cedo.”', ['もっと早く言ってごめん', 'もっと早く言わなくてごめん', 'もっと早く言わないといい', 'もっと早く言ってもらう'], 2, 'O não fazer usa なくて.'),
  q('g26', 34, 'Qual sequência de pedidos vai do mais polido ao mais casual?', ['てくれない→ていただけませんか→てください', 'ていただけませんか→てくれませんか→てくれない', 'て形→ていただけませんか→てくれませんか', 'Todas têm o mesmo grau'], 2, 'É a escala apresentada na explicação da lição.'),
]

const vocabularyReadingQuestions = [
  q('v1', 35, '{忘|わす}れ{物|もの}／{朝寝坊|あさねぼう}', ['achados e perdidos/acordar cedo', 'objeto esquecido/dormir demais', 'dever/atraso', 'arquivo/estação'], 2, 'Vocabulário central do primeiro diálogo.'),
  q('v2', 36, '{乗|の}り{遅|おく}れる', ['chegar cedo', 'perder o transporte por atraso', 'descer do trem', 'trocar de linha'], 2, 'John acorda tarde e perde o trem.'),
  q('v3', 37, '{探|さが}す／{見|み}つかる', ['procurar/ser encontrado', 'esquecer/lembrar', 'dar/receber', 'abrir/fechar'], 1, '探す é ação de procurar; 見つかる é algo ser encontrado.'),
  q('v4', 38, '{駅員|えきいん}／{大|おお}きさ', ['passageiro/cor', 'funcionário da estação/tamanho', 'professor/formato', 'motorista/peso'], 2, 'Termos usados no balcão de achados e perdidos.'),
  q('r1', 39, 'De onde Doraemon veio?', ['Do espaço', 'Do futuro', 'De outro país', 'Da escola'], 2, '未来から来たロボットです.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r2', 40, 'O que Doraemon guarda no bolso?', ['Livros', 'Dispositivos secretos convenientes', 'Comida comum', 'Dinheiro'], 2, '未来のいろいろな便利な「ひみつ道具」.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r3', 41, 'Como funciona o Ankipan?', ['A pessoa dorme sobre ele', 'Copia o conteúdo no pão e o come', 'Ele escreve sozinho', 'É uma porta'], 2, '覚えたいことをこのパンに写して、食べてみて.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r4', 42, 'Por que Nobita esquece o conteúdo?', ['O pão não funcionava', 'Fica com dor de barriga e vai ao banheiro', 'Doraemon o engana', 'Não come tudo'], 2, 'O desfecho ensina que ele precisa estudar por conta própria.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r5', 43, 'O que faz a Dokodemo Door?', ['Volta no tempo', 'Leva ao lugar imaginado ao abrir a porta', 'Faz a lição', 'Torna alguém forte'], 2, 'A porta se abre para o lugar em que a pessoa pensou.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r6', 44, 'Por que crianças gostam de Doraemon?', ['Ele é rico', 'Ajuda o fraco Nobita e oferece sonhos/dispositivos', 'Ele dá provas fáceis', 'Ele mora na escola'], 2, 'O texto destaca sonhos, ajuda e gentileza.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r7', 45, 'Quando o mangá começou e quando virou programa de TV?', ['1960/1963', '1970/1973', '1980/1983', '2000/2003'], 2, '1970年に雑誌で始まり、73年にはテレビ番組になりました.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
  q('r8', 46, 'Onde o programa também pode ser visto?', ['Somente no Japão', 'Em países como Singapura e Vietnã', 'Somente nos EUA', 'Somente no Brasil'], 2, '日本以外の国でも見られます.', { audio: questionAudio('Y16', 'Y16 — O mangá Doraemon') }),
]

const listeningQuestions = [
  q('l1', 47, 'W16-A: quem fará o café da manhã?', ['Hanako', 'Taro', 'Os dois', 'Ninguém'], 2, 'Taro promete 僕が毎日おいしい朝ご飯を作ってあげる.', { audio: questionAudio('W16_A', 'W16-A — Dividindo tarefas do casal') }),
  q('l2', 48, 'W16-A: quem acordará o parceiro com café?', ['Hanako', 'Taro', 'Os dois', 'Não é combinado'], 2, 'Taro diz 毎朝コーヒーで花子さんを起こしてあげる.', { audio: questionAudio('W16_A', 'W16-A — Dividindo tarefas do casal') }),
  q('l3', 49, 'W16-A: quem fará a limpeza?', ['Hanako', 'Taro', 'Os dois', 'Empresa'], 2, 'Taro responde 僕がしてあげるから.', { audio: questionAudio('W16_A', 'W16-A — Dividindo tarefas do casal') }),
  q('l4', 50, 'W16-A: quais tarefas Hanako aceita?', ['Cozinhar e limpar', 'Compras e passar camisa', 'Acordar Taro e lavar', 'Somente lavar'], 2, 'Ela aceita compras e passar a camisa.' , { audio: questionAudio('W16_A', 'W16-A — Dividindo tarefas do casal') }),
  q('l5', 51, 'W16-A: quem deve lavar a roupa?', ['Hanako', 'Taro', 'Os dois', 'Não é dito'], 2, 'Hanako aceita passar, mas diz 洗濯はしてね a Taro.', { audio: questionAudio('W16_A', 'W16-A — Dividindo tarefas do casal') }),
  q('l6', 52, 'W16-B: por que os pais anfitriões falam devagar?', ['Yuka pediu uma aula', 'O inglês de Yuka era fraco', 'Eles não falam inglês', 'Estão cansados'], 2, '私は英語が下手なので、いつもゆっくり話してくれます.', { audio: questionAudio('W16_B', 'W16-B — Vídeo de intercâmbio de Yuka') }),
  q('l7', 53, 'W16-B: que favores John faz para Yuka?', ['Empresta roupa e ensina música', 'Leva a festas e apresenta amigos', 'Faz o dever dela', 'Cozinha'], 2, '連れていってくれたり、友達を紹介してくれたりします.', { audio: questionAudio('W16_B', 'W16-B — Vídeo de intercâmbio de Yuka') }),
  q('l8', 54, 'W16-B: como Yuka ajuda John?', ['Ensina música', 'Ajuda no dever de japonês', 'Empresta roupa', 'Fala inglês devagar'], 2, '私はよく宿題を手伝ってあげます.', { audio: questionAudio('W16_B', 'W16-B — Vídeo de intercâmbio de Yuka') }),
  q('l9', 55, 'W16-B: o que Sarah e Yuka fazem uma pela outra?', ['Sarah empresta roupas; Yuka ensina canções japonesas', 'Sarah cozinha; Yuka limpa', 'As duas estudam inglês', 'Nada'], 1, 'サラは服を貸してくれ、私は日本の歌を教えてあげます.', { audio: questionAudio('W16_B', 'W16-B — Vídeo de intercâmbio de Yuka') }),
  q('l10', 56, 'W16-B: o que Yuka pede aos alunos da Sakura?', ['Que enviem dinheiro', 'Que interessados participem de um videochat', 'Que viajem agora', 'Que escrevam prova'], 2, '興味がある人はビデオチャットに参加してくれませんか.', { audio: questionAudio('W16_B', 'W16-B — Vídeo de intercâmbio de Yuka') }),
  q('l11', 57, 'W16-C: qual desejo profissional Rie menciona?', ['Fazer um concerto na China', 'Parar de cantar', 'Ser atriz', 'Mudar aos EUA'], 1, '今年は中国でコンサートができるといいですね.', { audio: questionAudio('W16_C', 'W16-C — Entrevista de aniversário de Rie') }),
  q('l12', 58, 'W16-C: qual é a posição de Rie sobre casamento agora?', ['Vai casar com Saijo', 'Os dois são jovens e ela quer priorizar o trabalho', 'Já se casou', 'Não conhece Saijo'], 2, '西城さんとは今はいい友達; 今はもっと仕事をしたい.', { audio: questionAudio('W16_C', 'W16-C — Entrevista de aniversário de Rie') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K16_01: [{ label: '{会話|かいわ} I', lines: [
    { speaker: 'Anúncio', ja: '{第十六課|だいじゅうろっか}　{忘|わす}れ{物|もの}　{会話|かいわ}{一|いち}', pt: 'Lição 16: Objetos esquecidos. Diálogo I.' },
    { speaker: 'John', ja: '{失礼|しつれい}します。{先生|せんせい}、{今日授業|きょうじゅぎょう}に{来|こ}られなくてすみませんでした。', pt: 'Com licença. Professor, desculpe por não ter conseguido vir à aula hoje.' },
    { speaker: 'Prof. Yamashita', ja: 'どうしたんですか。', pt: 'O que aconteceu?' },
    { speaker: 'John', ja: '{実|じつ}は、{朝寝坊|あさねぼう}して、{電車|でんしゃ}に{乗|の}り{遅|おく}れたんです。すみません。', pt: 'Na verdade, dormi demais e perdi o trem. Desculpe.' },
    { speaker: 'Prof. Yamashita', ja: 'もう{三回目|さんかいめ}ですよ。もっと{早|はや}く{寝|ね}たらどうですか。', pt: 'Já é a terceira vez. Que tal dormir mais cedo?' },
    { speaker: 'John', ja: 'はい。あのう、{先生|せんせい}、{宿題|しゅくだい}をあしたまで{待|ま}っていただけませんか。{宿題|しゅくだい}を{入|い}れたファイルがないんです。', pt: 'Sim. Bem, professor, poderia esperar pelo dever até amanhã? Não encontro a pasta em que coloquei o dever.' },
    { speaker: 'Prof. Yamashita', ja: '{困|こま}りましたね。{見|み}つかるといいですね。', pt: 'Isso é um problema. Espero que você a encontre.' },
  ] }],
  K16_03: [{ label: '{会話|かいわ} II', lines: [
    { speaker: 'Anúncio', ja: '{二|に}', pt: 'Diálogo II.' },
    { speaker: 'John', ja: 'すみません。ファイルをなくしたんですが。', pt: 'Com licença. Perdi uma pasta.' },
    { speaker: 'Funcionário', ja: 'どんなファイルですか。', pt: 'Como é a pasta?' },
    { speaker: 'John', ja: '{青|あお}くてこのぐらいの{大|おお}きさです。{電車|でんしゃ}を{降|お}りる{時|とき}、{忘|わす}れたと{思|おも}うんですが。', pt: 'É azul e mais ou menos deste tamanho. Acho que a esqueci quando desci do trem.' },
    { speaker: 'Funcionário', ja: 'ええと……ちょっと{待|ま}ってください。{電話|でんわ}して{聞|き}いてみます。', pt: 'Bem... Espere um momento. Vou telefonar e perguntar.' },
  ] }],
  K16_05: [{ label: '{会話|かいわ} III', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}', pt: 'Diálogo III.' },
    { speaker: 'Prof. Yamashita', ja: 'ジョンさん、ファイルはありましたか。', pt: 'John, encontrou a pasta?' },
    { speaker: 'John', ja: 'はい、{駅員|えきいん}さんが{探|さが}してくれたんです。', pt: 'Sim. Um funcionário da estação a procurou para mim.' },
    { speaker: 'Prof. Yamashita', ja: 'よかったですね。', pt: 'Que bom.' },
    { speaker: 'John', ja: 'これ、{宿題|しゅくだい}です。{遅|おそ}くなってすみませんでした。', pt: 'Aqui está o dever. Desculpe pelo atraso.' },
    { speaker: 'Prof. Yamashita', ja: 'いいえ。よくできていますね。', pt: 'Tudo bem. Está muito bem feito.' },
    { speaker: 'John', ja: 'ええ、{駅員|えきいん}さんに{宿題|しゅくだい}を{手伝|てつだ}ってもらいましたから。', pt: 'Sim, porque pedi ao funcionário da estação que me ajudasse no dever.' },
  ] }],
  Y16: [{ label: 'まんが「ドラえもん」', lines: [
    { speaker: 'Anúncio', ja: '{読み書き編|よみかきへん}　{第十六課|だいじゅうろっか}　{二|に}　まんが「ドラえもん」　B', pt: 'Parte de leitura e escrita, lição 16, seção II: O mangá Doraemon. Seção B.' },
    { speaker: 'N', ja: '{子供|こども}の{時|とき}、「{空|そら}を{飛|と}んでみたい」「{違|ちが}う{世界|せかい}に{行|い}ってみたい」と{思|おも}いませんでしたか。', pt: 'Quando criança, você nunca pensou “quero tentar voar” ou “quero conhecer outro mundo”?' },
    { speaker: 'N', ja: 'まんが「ドラえもん」の{中|なか}で、そんな{夢|ゆめ}がかないます。', pt: 'No mangá Doraemon, esses sonhos se realizam.' },
    { speaker: 'N', ja: 'ドラえもんは{未来|みらい}から{来|き}たロボットです。', pt: 'Doraemon é um robô que veio do futuro.' },
    { speaker: 'N', ja: '{未来|みらい}のいろいろな{便利|べんり}な「ひみつ{道具|どうぐ}」をポケットの{中|なか}に{持|も}っていて、{小学生|しょうがくせい}ののび{太|た}くんが{困|こま}った{時|とき}、その{道具|どうぐ}を{使|つか}って{助|たす}けてくれます。', pt: 'Ele guarda no bolso vários dispositivos secretos e convenientes do futuro e os usa para ajudar o estudante Nobita quando ele está em apuros.' },
    { speaker: 'N', ja: 'ある{日|ひ}、のび{太|た}くんはテストがあるのを{忘|わす}れて、ぜんぜん{勉強|べんきょう}しませんでした。', pt: 'Certo dia, Nobita esqueceu que teria uma prova e não estudou nada.' },
    { speaker: 'N', ja: '{困|こま}ったのび{太|た}くんはドラえもんに{言|い}いました。', pt: 'Em apuros, Nobita falou com Doraemon.' },
    { speaker: 'Nobita', ja: '「ドラえもん、{助|たす}けてよ。{次|つぎ}のテストは{自分|じぶん}で{勉強|べんきょう}するから。」', pt: '“Doraemon, me ajude. Para a próxima prova, vou estudar sozinho.”' },
    { speaker: 'N', ja: 'ドラえもんはポケットからパンのようなものを{出|だ}して、のび{太|た}くんにあげました。', pt: 'Doraemon tirou do bolso algo parecido com pão e deu a Nobita.' },
    { speaker: 'Doraemon', ja: '「これは『アンキパン』だよ。{覚|おぼ}えたいことをこのパンに{写|うつ}して、{食|た}べてみて。{覚|おぼ}えられるから。」', pt: '“Isto é o Ankipan. Copie no pão o que quer memorizar e experimente comê-lo. Você vai conseguir lembrar.”' },
    { speaker: 'N', ja: 'のび{太|た}くんはパンに{写|うつ}して、{全部|ぜんぶ}{食|た}べました。もうテストは{大丈夫|だいじょうぶ}です。', pt: 'Nobita copiou tudo no pão e comeu. Agora a prova não seria problema.' },
    { speaker: 'N', ja: 'のび{太|た}くんはうれしそうに{学校|がっこう}に{行|い}きました。', pt: 'Nobita foi feliz para a escola.' },
    { speaker: 'N', ja: '「ドラえもん」は{一九七〇年|せんきゅうひゃくななじゅうねん}に{雑誌|ざっし}で{始|はじ}まりました。{七三年|ななじゅうさんねん}にはテレビ{番組|ばんぐみ}になり、{今|いま}も{毎週|まいしゅう}{続|つづ}いています。', pt: 'Doraemon começou em uma revista em 1970. Em 1973 virou programa de televisão e continua semanalmente até hoje.' },
    { speaker: 'N', ja: 'どうしてドラえもんは{人気|にんき}があるのでしょうか。', pt: 'Por que Doraemon é popular?' },
    { speaker: 'N', ja: 'それは、ドラえもんが{夢|ゆめ}をたくさんくれるからです。', pt: 'Porque Doraemon oferece muitos sonhos.' },
    { speaker: 'N', ja: '{例|たと}えば、「どこでもドア」。{行|い}きたい{所|ところ}を{考|かんが}えて、このドアを{開|あ}けます。', pt: 'Por exemplo, a “Porta para Qualquer Lugar”. Você pensa no lugar aonde quer ir e abre a porta.' },
    { speaker: 'N', ja: 'すると、ドアの{向|む}こうには、その{場所|ばしょ}があるのです。', pt: 'Então, do outro lado da porta, está esse lugar.' },
    { speaker: 'N', ja: 'このドアであなたの{部屋|へや}から、どこでも{行|い}きたい{所|ところ}に{行|い}けます。', pt: 'Com essa porta, você pode ir do seu quarto a qualquer lugar que quiser.' },
    { speaker: 'N', ja: 'あなたもこんな「ひみつ{道具|どうぐ}」があるといいと{思|おも}いませんか。', pt: 'Você também não gostaria de ter um dispositivo secreto assim?' },
    { speaker: 'N', ja: 'また、ドラえもんは{弱|よわ}い{子供|こども}の{味方|みかた}です。', pt: 'Além disso, Doraemon é aliado das crianças fracas.' },
    { speaker: 'N', ja: 'のび{太|た}くんは{勉強|べんきょう}もあまりできないし、けんかも{弱|よわ}いし、{運動|うんどう}もできません。', pt: 'Nobita não é muito bom nos estudos, é fraco em brigas e também não é bom em esportes.' },
    { speaker: 'N', ja: 'でも、ドラえもんはいつものび{太|た}くんを{助|たす}けてくれます。{子供|こども}たちは、そんなやさしいドラえもんが{大好|だいす}きなのです。', pt: 'Mas Doraemon sempre ajuda Nobita. As crianças adoram esse Doraemon gentil.' },
    { speaker: 'N', ja: 'そして、ドラえもんはのび{太|た}くんにいろいろなことを{教|おし}えてくれます。「アンキパン」の{話|はなし}に{戻|もど}りましょう。', pt: 'Doraemon também ensina muitas coisas a Nobita. Voltemos à história do Ankipan.' },
    { speaker: 'N', ja: '……{教室|きょうしつ}ではテストが{始|はじ}まりました。でも、のび{太|た}くんは{何|なに}も{覚|おぼ}えていません。', pt: 'A prova começou na sala, mas Nobita não lembrava de nada.' },
    { speaker: 'N', ja: 'のび{太|た}くんはテストの{前|まえ}に、おなかが{痛|いた}くなって、トイレに{行|い}ったのです。', pt: 'Antes da prova, Nobita sentiu dor de barriga e foi ao banheiro.' },
    { speaker: 'N', ja: 'やっぱり{自分|じぶん}で{勉強|べんきょう}しなければいけないのです。', pt: 'No fim das contas, é preciso estudar por conta própria.' },
    { speaker: 'N', ja: 'ドラえもんのテレビ{番組|ばんぐみ}は、シンガポールやベトナムなど、{日本以外|にほんいがい}の{国|くに}でも{見|み}られます。', pt: 'O programa de Doraemon pode ser visto também fora do Japão, em países como Singapura e Vietnã.' },
    { speaker: 'N', ja: 'あなたの{国|くに}にもドラえもんが{来|く}るかもしれません。', pt: 'Doraemon talvez também chegue ao seu país.' },
  ] }],
}

scripts.K16_02 = scripts.K16_01
scripts.K16_04 = scripts.K16_03
scripts.K16_06 = scripts.K16_05

const specialTitles: Record<string, string> = {
  K16_01: 'Diálogo I — no escritório do professor', K16_02: 'Diálogo I — repetição guiada',
  K16_03: 'Diálogo II — no achados e perdidos', K16_04: 'Diálogo II — repetição guiada',
  K16_05: 'Diálogo III — devolvendo o dever', K16_06: 'Diálogo III — repetição guiada',
  Y16: 'Leitura — o mangá Doraemon', W16_A: 'Workbook A — tarefas do casal',
  W16_B: 'Workbook B — vídeo de intercâmbio de Yuka', W16_C: 'Workbook C — entrevista de Rie Gotoh',
}
const audioCodes = [...Array.from({ length: 17 }, (_, index) => `K16_${String(index + 1).padStart(2, '0')}`), 'Y16', 'W16_A', 'W16_B', 'W16_C']
const kindForCode = (code: string): AudioTrackKind => {
  if (code.startsWith('Y')) return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (/^K16_0[135]$/.test(code)) return 'dialogue'
  if (/^K16_0[246]$/.test(code)) return 'dialogue-support'
  if (/^K16_0[78]$/.test(code)) return 'vocabulary'
  return 'drill'
}
const audios: AudioTrack[] = audioCodes.map((code) => {
  const metadata = genki2AudioSourceByCode[code]
  const kind = kindForCode(code)
  const script = scripts[code] ?? []
  const activity = metadata?.sourceActivityPt ?? `Faixa ${code}`
  const source = metadata?.material === 'workbook' ? 'Workbook' : 'Textbook'
  const purposePt = kind === 'dialogue' ? 'Compreender o diálogo integral e reconhecer favor, pedido, desejo, tempo e desculpa em contexto.'
    : kind === 'dialogue-support' ? 'Repetir o diálogo em blocos e ajustar o grau de polidez ao interlocutor.'
      : kind === 'reading' ? 'Acompanhar a leitura integral e reconstruir personagem, episódio, explicação e conclusão.'
        : kind === 'workbook' ? 'Resolver a atividade auditiva e identificar quem beneficia quem em cada ação.'
          : kind === 'vocabulary' ? 'Fixar pronúncia e significado do vocabulário de favores, busca e desculpas.'
            : `Responder oralmente à ${activity.toLowerCase()} antes do modelo.`
  return {
    id: trackId(code), code, kind, language: 'ja', title: specialTitles[code] ?? activity,
    descriptionPt: `${activity}. ${purposePt}`, purposePt,
    instructionsPt: kind === 'workbook'
      ? ['Leia o enunciado da página indicada.', 'Ouça uma vez e desenhe mentalmente as setas dos favores.', 'Ouça de novo, anote a evidência e responda às questões.']
      : ['Ouça sem tradução e identifique os interlocutores.', 'Repita com o grau de polidez do original.', 'Reconte a cadeia de favores ou eventos sem olhar o texto.'],
    sourceRefPt: `${source} Genki II, 3ª ed., p. ${metadata?.sourcePage ?? '—'}`,
    sourceActivityPt: activity, sourcePage: metadata?.sourcePage,
    practiceTaskPt: kind === 'reading' ? 'Divida o texto em quatro partes, resuma cada uma e reconte o episódio do Ankipan em ordem.'
      : kind === 'workbook' ? 'Responda sem transcrição, indique a direção de cada favor e repita a frase que confirma sua escolha.'
        : kind === 'vocabulary' ? 'Antecipe a palavra, repita o modelo e use-a numa frase sobre um objeto perdido ou um favor.'
          : kind === 'drill' || kind === 'dialogue-support' ? 'Produza durante a pausa; repita itens em que beneficiário, partícula, tempo ou nível de polidez divergir.'
            : 'Represente um papel e troque o interlocutor; adapte o pedido para registro casual e polido.',
    src: `${BASE}/${code}.mp3`, script,
    transcript: script.length ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script } : undefined,
  }
})

export const genki2Lesson16: Section = {
  id: 'lesson-16', level: 'genki-2', titleJa: '第16課　忘れ物',
  titlePt: 'Lição 16 — Objetos esquecidos',
  summaryPt: 'Favores, pedidos polidos e casuais, desejos com といい, orações temporais, desculpas, achados e perdidos, Doraemon e compreensão auditiva.',
  studyNotes,
  groups: [
    group('dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    group('grammar', '文法 1〜5', 'favores, pedidos, desejos, tempo e desculpas', grammarQuestions),
    group('vocabulary-reading', '読み書き', 'vocabulário, kanji e compreensão da leitura', vocabularyReadingQuestions),
    group('listening', '聞く練習', 'compreensão auditiva do workbook', listeningQuestions),
  ],
  audios,
}
