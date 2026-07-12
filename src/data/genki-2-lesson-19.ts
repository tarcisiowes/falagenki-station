import { genki2AudioSourceByCode } from './genki-2-audio-source'
import type { AudioTrack, AudioTrackKind, ExerciseGroup, Question, ScriptItem, Section, StudyNote } from './types'

const BASE = '/audio/genki/genki-2/lesson-19'
const lessonPrefix = 'genki-2-l19'
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
  instructionPt: `Resolva as questões de ${subtitlePt.toLowerCase()}, confirme a evidência e envie os itens à revisão espaçada.`,
  questions,
})

const studyNotes: StudyNote[] = [
  {
    title: 'Objetivos e situação da lição',
    bodyPt: 'Takeshi recebe o chefe após uma viagem, acompanha-o a um restaurante e o leva para casa. A lição trabalha linguagem honorífica, instruções respeitosas, agradecimento por favores, avaliação com 〜てよかった e expectativas com 〜はず. As leituras apresentam uma carta de agradecimento e um e-mail formal.',
    helpPt: 'Acompanhe sempre quem pratica a ação. A linguagem honorífica eleva o sujeito da ação; ela não serve para elevar quem fala nem membros do próprio grupo diante de alguém de fora.',
  },
  {
    title: '1. Verbos honoríficos',
    bodyPt: 'Use formas honoríficas para descrever a ação de alguém que merece respeito. Formas especiais importantes: {行|い}く／{来|く}る／いる → いらっしゃる; {言|い}う → おっしゃる; する → なさる; くれる → くださる; {食|た}べる／{飲|の}む → {召|め}し{上|あ}がる; {見|み}る → ご{覧|らん}になる; {寝|ね}る → お{休|やす}みになる. Para muitos outros verbos, use お + radical de ます + になる: {先生|せんせい}はこの{本|ほん}をお{読|よ}みになりました。',
    helpPt: 'Primeiro identifique o sujeito. Se é professor, chefe, cliente ou convidado respeitado, escolha a forma honorífica. Verbos em 〜さる fazem a forma polida em 〜さいます: いらっしゃいます, おっしゃいます, なさいます e くださいます.',
  },
  {
    title: '2. Conselhos e instruções respeitosos',
    bodyPt: 'お + radical de ます + ください convida respeitosamente o interlocutor a fazer algo: こちらでお{待|ま}ちください. Compostos sino-japoneses costumam usar ご: ご{注意|ちゅうい}ください. Formas especiais incluem ご{覧|らん}ください, お{召|め}し{上|あ}がりください e お{休|やす}みください.',
    helpPt: 'Essa construção normalmente beneficia o próprio ouvinte, como “aguarde”, “veja” ou “sirva-se”. Para pedir que o ouvinte faça algo para você, use uma forma de pedido como 〜ていただけませんか; por exemplo, {塩|しお}を{取|と}っていただけませんか。',
  },
  {
    title: '3. 〜てくれてありがとう',
    bodyPt: 'Forma て + くれてありがとう agradece uma ação feita para você ou seu grupo: {迎|むか}えに{来|き}てくれてありがとう. Para alguém de status mais alto ou em contexto formal, use 〜てくださってありがとうございました. Para uma ajuda contínua, 〜てくださってありがとうございます é natural.',
    helpPt: 'Pense em duas escolhas: relação próxima → くれてありがとう; relação respeitosa → くださってありがとうございます／ありがとうございました. O tempo do agradecimento acompanha a situação, não apenas o tempo do verbo antes de くださる.',
  },
  {
    title: '4. 〜てよかったです',
    bodyPt: 'Forma て + よかった expressa satisfação ou alívio por algo ter acontecido: {日本|にほん}に{行|い}ってよかったです. Para algo que não aconteceu, use 〜なくてよかった: {雨|あめ}が{降|ふ}らなくてよかったです.',
    helpPt: 'Não traduza mecanicamente como “foi bom e...”. A construção avalia retrospectivamente um acontecimento inteiro: “que bom que...” ou “ainda bem que...”.',
  },
  {
    title: '5. 〜はずです',
    bodyPt: 'Forma curta + はず expressa uma expectativa ou conclusão baseada em informação disponível: {田中|たなか}さんは{来|く}るはずです. Adjetivo い liga diretamente; adjetivo な usa な; substantivo usa の: おもしろいはず, {元気|げんき}なはず, {日本人|にほんじん}のはず. A negação pode vir antes de はず. 〜はずでした indica que algo era esperado, mas não ocorreu como previsto.',
    helpPt: 'Use はず quando há uma razão concreta: horário, plano, evidência ou conhecimento compartilhado. Não significa dever ou obrigação; para “deve fazer”, escolha 〜なければいけません ou outra expressão apropriada.',
  },
  {
    title: 'Campo de auxílio — formas respeitosas além do verbo',
    bodyPt: 'Substantivos e adjetivos podem receber お／ご: お{名前|なまえ}, お{仕事|しごと}, お{忙|いそが}しい, ご{両親|りょうしん}, ご{親切|しんせつ}. Também há substituições úteis: {家|いえ} → お{宅|たく}; {子供|こども} → お{子|こ}さん; だれ → どなた／どちら{様|さま}; どこ → どちら; どうですか → いかがですか. Em お{決|き}まりになりましたらお{呼|よ}びください, 〜ましたら é a forma condicional polida de 〜たら.',
    helpPt: 'Em vez de decorar tudo de uma vez, reescreva uma frase neutra em três camadas: escolha honorífica de vocabulário, forma honorífica do verbo e terminação polida. Depois confira se você elevou a pessoa certa.',
  },
  {
    title: 'Vocabulário essencial',
    bodyPt: 'Pessoas e contexto: {奥様|おくさま}, お{子|こ}さん, {中学生|ちゅうがくせい}, {部長|ぶちょう}, {出張|しゅっちょう}. Interação: お{礼|れい}, {話|はなし}, {悩|なや}み, {間違|まちが}い, {仲|なか}がいい, {送|おく}る, {呼|よ}ぶ, {寄|よ}る, ごちそうする, {遠慮|えんりょ}する, {招待|しょうたい}する. Conectores: それで indica consequência, そして acrescenta informação e それから marca sequência posterior.',
    helpPt: 'Reconstrua o último diálogo com quatro verbos: {送|おく}る → ごちそうする → {寄|よ}る → {遠慮|えんりょ}する. Em seguida, troque Takeshi e o chefe de papel e ajuste o registro.',
  },
  {
    title: 'Leitura e escrita — cartas e e-mails',
    bodyPt: 'Kanji-alvo: {春|はる}, {秋|あき}, {冬|ふゆ}, {花|はな}, {様|さま}, {不|ふ}, {姉|あね}, {兄|あに}, {漢|かん}, {卒|そつ}, {工|こう}, {研|けん}, {究|きゅう}, {質|しつ}, {問|もん}, {多|おお}. A carta de Jean agradece à família anfitriã e anuncia o retorno ao Japão; o e-mail de Maria apresenta sua formação e faz perguntas formais sobre pós-graduação, prova, bolsa e trabalho.',
    helpPt: 'Leia cada texto pela função dos parágrafos: saudação e relação → motivo → detalhes → pedido ou plano → encerramento. Isso facilita tanto a compreensão quanto a escrita de uma mensagem própria.',
  },
]

const dialogueQuestions = [
  q('d1', 1, 'Por que Takeshi está esperando o chefe?', ['Para levá-lo a uma reunião', 'Para recebê-lo após uma viagem de negócios', 'Para pedir férias', 'Para entregar um relatório'], 2, 'Takeshi diz {部長|ぶちょう}、{出張|しゅっちょう}お{疲|つか}れさまでした.', { audio: questionAudio('K19_01', 'K19-01 — Recebendo o chefe') }),
  q('d2', 2, 'A que horas o chefe deveria ter saído de Seattle?', ['À uma', 'Às duas', 'Às três', 'Às cinco'], 1, '{一時|いちじ}に{出|で}るはずだった indica que a saída prevista era à uma.', { audio: questionAudio('K19_01', 'K19-01 — Recebendo o chefe') }),
  q('d3', 3, 'O que aconteceu com o plano da viagem?', ['O voo saiu cedo', 'O chefe perdeu a mala', 'Houve atraso', 'Takeshi chegou ao aeroporto errado'], 3, 'O chefe explica {遅|おく}れちゃってね.', { audio: questionAudio('K19_01', 'K19-01 — Recebendo o chefe') }),
  q('d4', 4, 'O que o chefe quer fazer antes de voltar para casa?', ['Telefonar para a esposa', 'Comer alguma coisa', 'Voltar ao escritório', 'Comprar uma passagem'], 2, 'Ele está com fome e aceita {何|なに}か{召|め}し{上|あ}がってからお{帰|かえ}りになる.', { audio: questionAudio('K19_01', 'K19-01 — Recebendo o chefe') }),
  q('d5', 5, 'O que a atendente pede primeiro aos dois clientes?', ['Que façam o pedido', 'Que esperem um pouco', 'Que paguem', 'Que mudem de restaurante'], 2, 'Ela diz {少々|しょうしょう}お{待|ま}ちください.', { audio: questionAudio('K19_03', 'K19-03 — No restaurante') }),
  q('d6', 6, 'O que eles devem fazer quando decidirem o pedido?', ['Ir ao balcão', 'Chamar a atendente', 'Escrever o endereço', 'Telefonar ao chefe'], 2, 'お{決|き}まりになりましたらお{呼|よ}びください significa “quando tiverem decidido, chamem”.', { audio: questionAudio('K19_03', 'K19-03 — No restaurante') }),
  q('d7', 7, 'Por que Takeshi agradece ao chefe?', ['Porque foi buscá-lo', 'Porque recebeu uma refeição', 'Porque recebeu um presente', 'Porque ganhou folga'], 2, '{今日|きょう}はごちそうしてくださってありがとうございました agradece a refeição paga pelo chefe.', { audio: questionAudio('K19_05', 'K19-05 — Na casa do chefe') }),
  q('d8', 8, 'Por que Takeshi inicialmente recusa entrar na casa?', ['Está doente', 'Acha que é tarde e que a esposa do chefe já está dormindo', 'Precisa voltar ao restaurante', 'Não conhece a família'], 2, 'Ele diz que já está tarde e que a {奥様|おくさま} provavelmente está descansando.', { audio: questionAudio('K19_05', 'K19-05 — Na casa do chefe') }),
  q('d9', 9, 'Como a conversa termina?', ['Takeshi entra na casa', 'O chefe vai ao escritório', 'Takeshi recusa por hoje e manda lembranças à esposa', 'A esposa telefona'], 3, '{今日|きょう}は{遠慮|えんりょ}しておきます e よろしくお{伝|つた}えください encerram a visita com cortesia.', { audio: questionAudio('K19_05', 'K19-05 — Na casa do chefe') }),
]

const grammarQuestions = [
  q('g1', 10, '“O chefe está no escritório.” em linguagem honorífica:', ['{部長|ぶちょう}はオフィスにおります', '{部長|ぶちょう}はオフィスにいらっしゃいます', '{部長|ぶちょう}はオフィスにいたします', '{部長|ぶちょう}はオフィスにいただきます'], 2, 'いらっしゃる é a forma honorífica de {行|い}く／{来|く}る／いる.'),
  q('g2', 11, '{先生|せんせい}はそう（　）。', ['{申|もう}しました', 'おっしゃいました', 'いただきました', 'まいりました'], 2, 'おっしゃる eleva a ação de {言|い}う praticada pelo professor.'),
  q('g3', 12, '{先生|せんせい}はこの{本|ほん}を（　）。', ['お{読|よ}みになりました', 'お{読|よ}みしました', '{読|よ}んでくださいました', '{読|よ}ませました'], 1, 'Para muitos verbos, use お + radical de ます + になる.'),
  q('g4', 13, 'Forma polida correta de いらっしゃる:', ['いらっしゃります', 'いらっしゃいます', 'いらっしゃています', 'いらっしゃられます'], 2, 'Verbos honoríficos em 〜さる usam 〜さいます na forma polida.'),
  q('g5', 14, '“O professor verá o filme.” em linguagem honorífica:', ['{先生|せんせい}は{映画|えいが}を{拝見|はいけん}します', '{先生|せんせい}は{映画|えいが}をご{覧|らん}になります', '{先生|せんせい}は{映画|えいが}をお{見|み}します', '{先生|せんせい}は{映画|えいが}をいただきます'], 2, 'ご{覧|らん}になる é a forma honorífica de {見|み}る; {拝見|はいけん}する é humilde e descreve a própria ação.'),
  q('g6', 15, 'A linguagem honorífica eleva principalmente:', ['O objeto da frase', 'O sujeito que pratica a ação', 'Quem fala, sempre', 'O tempo verbal'], 2, 'A forma honorífica demonstra respeito ao agente da ação.'),
  q('g7', 16, 'Qual frase é inadequada se eu estiver falando de mim?', ['{先生|せんせい}はいらっしゃいます', '{社長|しゃちょう}がおっしゃいました', '{私|わたし}は{昼|ひる}ご{飯|はん}を{召|め}し{上|あ}がります', '{部長|ぶちょう}がお{帰|かえ}りになりました'], 3, 'Não se usa {召|め}し{上|あ}がる para elevar a própria ação.'),
  q('g8', 17, '{社長|しゃちょう}はもうお（　）になりました。', ['{帰|かえ}り', '{帰|かえ}る', '{帰|かえ}って', '{帰|かえ}った'], 1, 'A construção usa o radical de ます: {帰|かえ}ります → お{帰|かえ}りになる.'),
  q('g9', 18, '“O professor dormiu cedo.” em linguagem honorífica:', ['{先生|せんせい}は{早|はや}くお{休|やす}みになりました', '{先生|せんせい}は{早|はや}く{寝|ね}ていただきました', '{先生|せんせい}は{早|はや}くお{寝|ね}しました', '{先生|せんせい}は{早|はや}くおります'], 1, 'お{休|やす}みになる é uma forma honorífica consagrada para {寝|ね}る.'),
  q('g10', 19, 'お{客様|きゃくさま}はすしを（　）。', ['いただきます', '{召|め}し{上|あ}がります', 'おります', 'まいります'], 2, '{召|め}し{上|あ}がる eleva {食|た}べる／{飲|の}む quando o sujeito é respeitado.'),
  q('g11', 20, 'Instrução respeitosa: “Por favor, espere aqui.”', ['ここで{待|ま}っていただけませんか', 'ここでお{待|ま}ちください', 'ここでお{待|ま}ちになります', 'ここで{待|ま}ちなさいました'], 2, 'お + radical de ます + ください produz uma instrução respeitosa.'),
  q('g12', 21, 'Aviso formal: “Por favor, tenha cuidado.”', ['お{注意|ちゅうい}ください', 'ご{注意|ちゅうい}ください', 'ご{注意|ちゅうい}になります', '{注意|ちゅうい}してあげます'], 2, 'O composto sino-japonês {注意|ちゅうい} recebe ご: ご{注意|ちゅうい}ください.'),
  q('g13', 22, 'Para pedir que alguém passe o sal para você, a melhor opção é:', ['{塩|しお}をお{取|と}りください', '{塩|しお}を{取|と}っていただけませんか', '{塩|しお}をご{覧|らん}ください', '{塩|しお}をお{休|やす}みください'], 2, 'O favor beneficia quem fala; por isso, uma forma de pedido é mais natural que o conselho respeitoso.'),
  q('g14', 23, '“Por favor, veja este documento.” em forma respeitosa:', ['この{書類|しょるい}をお{見|み}ください', 'この{書類|しょるい}をご{覧|らん}ください', 'この{書類|しょるい}を{見|み}てあげてください', 'この{書類|しょるい}をご{覧|らん}します'], 2, 'A instrução especial correspondente a ご{覧|らん}になる é ご{覧|らん}ください.'),
  q('g15', 24, 'Agradecimento natural a um amigo: “Obrigado por vir me buscar.”', ['{迎|むか}えに{来|き}てくれてありがとう', '{迎|むか}えに{来|き}てあげてありがとう', '{迎|むか}えに{来|き}てもらってください', '{迎|むか}えに{来|き}るはずです'], 1, '〜てくれてありがとう agradece informalmente uma ação feita para mim.'),
  q('g16', 25, 'Agradecimento formal por uma refeição já concluída:', ['ごちそうしてくれてありがとう', 'ごちそうしてくださってありがとうございました', 'ごちそうしていただいてください', 'ごちそうするはずでした'], 2, 'くださる respeita o agente; ありがとうございました marca o agradecimento formal pela ação concluída.'),
  q('g17', 26, 'Agradecimento por apoio contínuo de um professor:', ['いつも{教|おし}えてくださってありがとうございます', 'いつも{教|おし}えてくれてあげます', 'いつもお{教|おし}えくださいました', 'いつも{教|おし}えるはずです'], 1, 'ありがとうございます é natural quando a bondade continua no presente.'),
  q('g18', 27, '{日本|にほん}に（　）よかったです。', ['{行|い}く', '{行|い}って', '{行|い}ったら', '{行|い}けば'], 2, 'Forma て + よかった avalia positivamente uma experiência passada.'),
  q('g19', 28, '{雨|あめ}が（　）よかったです。', ['{降|ふ}って', '{降|ふ}らなくて', '{降|ふ}らないでください', '{降|ふ}るはずで'], 2, 'Para “ainda bem que não choveu”, use a forma negativa em 〜なくて.'),
  q('g20', 29, '〜てよかった expressa:', ['Uma obrigação futura', 'Satisfação ou alívio por um acontecimento', 'Um pedido formal', 'Uma comparação'], 2, 'A construção equivale a “que bom que...” ou “ainda bem que...”.'),
  q('g21', 30, '{田中|たなか}さんは{九時|くじ}に（　）はずです。', ['{来|く}る', '{来|き}て', '{来|き}たら', '{来|こ}よう'], 1, 'Verbo em forma curta presente liga diretamente a はず.'),
  q('g22', 31, 'あの{人|ひと}は{日本人|にほんじん}（　）はずです。', ['だ', 'な', 'の', 'で'], 3, 'Substantivo recebe の antes de はず.'),
  q('g23', 32, '{木村|きむら}さんは{元気|げんき}（　）はずです。', ['だ', 'な', 'の', 'に'], 2, 'Adjetivo な mantém な antes de はず.'),
  q('g24', 33, '{今日|きょう}は{日曜日|にちようび}だから、{銀行|ぎんこう}は（　）はずです。', ['{開|あ}く', '{開|あ}いている', '{開|あ}いていない', '{開|あ}ける'], 3, 'A informação “é domingo” sustenta a expectativa negativa de que o banco não esteja aberto.'),
  q('g25', 34, '{一時|いちじ}に{出|で}るはずでしたが、{遅|おく}れました。', ['Saiu exatamente à uma', 'Era esperado sair à uma, mas houve atraso', 'Deve sair à uma amanhã', 'Foi obrigado a sair à uma'], 2, '〜はずでした apresenta uma expectativa anterior que não se confirmou.'),
  q('g26', 35, 'Qual afirmação sobre はず é correta?', ['Significa sempre obrigação', 'Expressa expectativa baseada em evidência ou plano', 'Só pode ser usado no passado', 'Só se liga a verbos'], 2, 'はず indica o que se espera logicamente; não equivale a “ter de”.'),
]

const vocabularyReadingQuestions = [
  q('v1', 36, '{部長|ぶちょう}／{出張|しゅっちょう}', ['diretor de escola/férias', 'gerente de departamento/viagem de negócios', 'cliente/reserva', 'colega/mudança'], 2, 'São o cargo do chefe e o motivo de sua viagem.'),
  q('v2', 37, '{遠慮|えんりょ}する', ['aceitar imediatamente', 'conter-se ou recusar por ora', 'convidar formalmente', 'ficar com raiva'], 2, 'Takeshi usa {遠慮|えんりょ}しておきます para recusar a visita com cortesia.'),
  q('v3', 38, '{仲|なか}がいい', ['ser sério', 'dar-se bem ou ter relação próxima', 'ser popular romanticamente', 'estar preocupado'], 2, '{仲|なか}がいい descreve uma boa relação entre pessoas.'),
  q('v4', 39, 'ごちそうする', ['levar alguém de carro', 'pagar ou oferecer uma refeição a alguém', 'mudar de residência', 'chamar pelo nome'], 2, 'No diálogo, o chefe oferece a refeição a Takeshi.'),
  q('v5', 40, 'お{礼|れい}／{種類|しゅるい}', ['agradecimento/tipo ou variedade', 'preocupação/erro', 'personalidade/conversa', 'endereço/telefone'], 1, 'São “expressão de gratidão” e “tipo/variedade”.'),
  q('v6', 41, '{送|おく}る／{寄|よ}る', ['mandar/chegar atrasado', 'acompanhar ou levar/parar em algum lugar', 'convidar/mudar-se', 'decidir/chamar'], 2, 'Takeshi leva o chefe até em casa; o chefe o convida a passar lá dentro.'),
  q('r1', 42, 'Y19-1: de onde Jean escreve e sobre qual cidade pergunta?', ['De Tóquio; pergunta sobre Paris', 'De Paris; pergunta sobre Tóquio', 'De Seattle; pergunta sobre Quioto', 'De Shizuoka; pergunta sobre Paris'], 2, 'A carta começa パリではさむい{日|ひ}がつづいていますが、{東京|とうきょう}はいかがですか.', { audio: questionAudio('Y19_1', 'Y19-1 — Carta de agradecimento') }),
  q('r2', 43, 'Y19-1: por que Jean demorou a escrever?', ['Perdeu o endereço', 'Estava ocupado com as aulas da universidade', 'Ficou doente', 'Mudou-se para o Japão'], 2, 'Ele diz que as aulas da universidade o deixaram ocupado e que já se passaram três meses.', { audio: questionAudio('Y19_1', 'Y19-1 — Carta de agradecimento') }),
  q('r3', 44, 'Y19-1: como a mãe anfitriã o ajudou?', ['Ensinou tênis', 'Ajudou seu japonês e ensinou sobre a vida no Japão', 'Pagou a universidade', 'Encontrou um emprego'], 2, 'お{母|かあ}さんのおかげで、{日本語|にほんご}が{上手|じょうず}になりました.', { audio: questionAudio('Y19_1', 'Y19-1 — Carta de agradecimento') }),
  q('r4', 45, 'Y19-1: quando Jean pretende voltar ao Japão?', ['Neste inverno', 'Ao se formar na universidade no próximo ano', 'Daqui a três meses', 'Não pretende voltar'], 2, '{来年大学|らいねんだいがく}を{卒業|そつぎょう}したら、もう{一度日本|いちどにほん}にもどるつもりです.', { audio: questionAudio('Y19_1', 'Y19-1 — Carta de agradecimento') }),
  q('r5', 46, 'Y19-2: o que Maria estuda atualmente?', ['Engenharia elétrica', 'Política, com foco nas relações entre EUA e Japão', 'Literatura japonesa', 'Medicina'], 2, 'Ela é aluna do quarto ano e diz que seu curso principal é política.', { audio: questionAudio('Y19_2', 'Y19-2 — E-mail de Maria') }),
  q('r6', 47, 'Y19-2: o que Maria pretende estudar no Japão?', ['Política internacional na pós-graduação', 'Japonês no ensino médio', 'Engenharia na graduação', 'Arte em uma escola técnica'], 1, 'Ela pretende estudar {国際政治|こくさいせいじ} em uma pós-graduação japonesa.', { audio: questionAudio('Y19_2', 'Y19-2 — E-mail de Maria') }),
  q('r7', 48, 'Y19-2: por que Maria escreve a Pak?', ['Pak é professor de política', 'Ela ouviu que Pak pesquisa engenharia elétrica numa pós-graduação japonesa', 'Pak oferece emprego', 'Ela quer vender um livro'], 2, 'A experiência de Pak pode ajudá-la a entender o ingresso e a vida acadêmica no Japão.', { audio: questionAudio('Y19_2', 'Y19-2 — E-mail de Maria') }),
  q('r8', 49, 'Y19-2: quais são os três temas principais das perguntas?', ['Moradia, turismo e casamento', 'Prova de japonês, bolsa de estudos e trabalho de meio período', 'Visto, passagem e clima', 'Kanji, tênis e culinária'], 2, 'Maria pergunta como Pak estudou para a prova, como solicitar bolsa e se é difícil encontrar trabalho.', { audio: questionAudio('Y19_2', 'Y19-2 — E-mail de Maria') }),
]

const listeningQuestions = [
  q('l1', 50, 'W19-A: Yamada mora em Shizuoka há quinze anos.', ['Verdadeiro', 'Falso'], 2, 'Ela morou em Tóquio por quinze anos e mudou-se para Shizuoka no ano retrasado.', { audio: questionAudio('W19_A', 'W19-A — Entrevista com a escritora Yamada') }),
  q('l2', 51, 'W19-A: Yamada pensa em várias coisas enquanto passeia.', ['Verdadeiro', 'Falso'], 1, 'Ela diz {午後|ごご}は{散歩|さんぽ}しながらいろいろ{考|かんが}えます.', { audio: questionAudio('W19_A', 'W19-A — Entrevista com a escritora Yamada') }),
  q('l3', 52, 'W19-A: Yamada trabalha o dia inteiro.', ['Verdadeiro', 'Falso'], 2, 'Ela geralmente trabalha de manhã; à tarde, passeia e pensa.', { audio: questionAudio('W19_A', 'W19-A — Entrevista com a escritora Yamada') }),
  q('l4', 53, 'W19-A: por volta de que horas Yamada dorme?', ['Sete', 'Oito', 'Nove', 'Onze'], 3, '{九時|くじ}ごろですね confirma que ela se deita por volta das nove.', { audio: questionAudio('W19_A', 'W19-A — Entrevista com a escritora Yamada') }),
  q('l5', 54, 'W19-A: quando morava em Tóquio, Yamada via filmes com frequência.', ['Verdadeiro', 'Falso'], 1, '{東京|とうきょう}にいた{時|とき}はよく{映画|えいが}を{見|み}た confirma a afirmação.', { audio: questionAudio('W19_A', 'W19-A — Entrevista com a escritora Yamada') }),
  q('l6', 55, 'W19-A: qual é a opinião de Yamada sobre a mudança?', ['Quer voltar imediatamente a Tóquio', 'Acha que foi bom mudar-se para Shizuoka', 'Não gosta da comida', 'Nunca mais vai a Tóquio'], 2, 'Ao visitar Tóquio, ela pensa que foi bom ter se mudado para Shizuoka.', { audio: questionAudio('W19_A', 'W19-A — Entrevista com a escritora Yamada') }),
  q('l7', 56, 'W19-B 1: onde se ouve o aviso e o que ele pede?', ['Banco — escrever dados', 'Plataforma — tomar cuidado', 'Restaurante — chamar o atendente', 'Agência — esperar'], 2, 'O aviso anuncia que as portas do trem fecharão e diz ご{注意|ちゅうい}ください.', { audio: questionAudio('W19_B', 'W19-B — Avisos e diálogos curtos') }),
  q('l8', 57, 'W19-B 2: onde se ouve o diálogo e o que ele pede?', ['Restaurante — chamar após decidir o pedido', 'Banco — comer', 'Plataforma — esperar', 'Agência — escrever o telefone'], 1, 'O menu e ご{注文|ちゅうもん}がお{決|き}まりになりましたらお{呼|よ}びください identificam o restaurante.', { audio: questionAudio('W19_B', 'W19-B — Avisos e diálogos curtos') }),
  q('l9', 58, 'W19-B 3: onde se ouve o diálogo e o que ele pede?', ['Sala de jantar — comer', 'Agência de viagens — esperar', 'Banco — tomar cuidado', 'Restaurante — escrever o endereço'], 2, 'A pessoa pede reserva de ryokan e o atendente responde お{待|ま}ちください.', { audio: questionAudio('W19_B', 'W19-B — Avisos e diálogos curtos') }),
  q('l10', 59, 'W19-B 4: onde se ouve a fala e o que ela pede?', ['Na casa de alguém à mesa — comer', 'No banco — esperar', 'Na plataforma — chamar', 'Na agência — tomar cuidado'], 1, '{何|なに}もありませんが、どうぞお{召|め}し{上|あ}がりください é uma oferta humilde de comida à mesa.', { audio: questionAudio('W19_B', 'W19-B — Avisos e diálogos curtos') }),
  q('l11', 60, 'W19-B 5: onde se ouve o diálogo e o que ele pede?', ['Restaurante — escolher o menu', 'Banco — escrever nome, endereço e telefone', 'Plataforma — esperar', 'Casa — comer'], 2, 'O cliente quer enviar dinheiro à China e precisa preencher seus dados no banco.', { audio: questionAudio('W19_B', 'W19-B — Avisos e diálogos curtos') }),
  q('l12', 61, 'W19-C: qual relação anterior o príncipe tinha com a cidade?', ['Nasceu lá', 'Estudou em uma escola local durante o ensino médio', 'Trabalhou na prefeitura', 'Sua família mora em Tóquio'], 2, '{高校|こうこう}の{時|とき}、この{町|まち}の{学校|がっこう}に{留学|りゅうがく}していた.', { audio: questionAudio('W19_C', 'W19-C — Visita do príncipe') }),
  q('l13', 62, 'W19-C: o que o príncipe fez depois de chegar à estação às dez?', ['Foi diretamente a Tóquio', 'Foi à escola e conversou com estudantes', 'Almoçou com a família anfitriã', 'Viu um filme'], 2, 'Depois da estação, ele foi à escola e conversou com alunos do ensino médio.', { audio: questionAudio('W19_C', 'W19-C — Visita do príncipe') }),
  q('l14', 63, 'W19-C: a que horas começou o almoço com os estudantes?', ['Onze', 'Meio-dia', 'Doze e meia', 'Duas'], 3, '{十二時半|じゅうにじはん}からいっしょに{昼|ひる}ご{飯|はん}を{召|め}し{上|あ}がりました.', { audio: questionAudio('W19_C', 'W19-C — Visita do príncipe') }),
  q('l15', 64, 'W19-C: o que o príncipe fez depois do almoço?', ['Ouviu uma canção dos alunos e assistiu à prática de caratê', 'Fez compras e viu um filme', 'Visitou a estação e almoçou', 'Voltou ao país'], 1, 'A reportagem enumera a canção e a prática de caratê com 〜たり〜たり.', { audio: questionAudio('W19_C', 'W19-C — Visita do príncipe') }),
  q('l16', 65, 'W19-C: qual sequência está correta?', ['Às duas encontrou a família anfitriã; às cinco voltou a Tóquio de shinkansen', 'Às duas foi a Tóquio; às cinco almoçou', 'Às duas chegou à estação; às cinco viu caratê', 'Às duas voltou ao país; às cinco encontrou estudantes'], 1, 'Os dois horários fecham a linha do tempo da visita à cidade.', { audio: questionAudio('W19_C', 'W19-C — Visita do príncipe') }),
  q('l17', 66, 'W19-C: qual resumo final é correto?', ['Ele não gostou da visita e ficará no Japão', 'Lamentou ter pouco tempo, ficou feliz por visitar a cidade e volta ao seu país nesta tarde', 'Vai morar com a família anfitriã', 'Parte para Shizuoka amanhã'], 2, 'A reportagem combina {残念|ざんねん}, 〜てよかった e o plano de retorno nesta tarde.', { audio: questionAudio('W19_C', 'W19-C — Visita do príncipe') }),
]

const scripts: Record<string, ScriptItem[]> = {
  K19_01: [{ label: '{会話|かいわ} I', lines: [
    { speaker: 'Anúncio', ja: '{第十九課|だいじゅうきゅうか}　{出迎|でむか}え　{会話|かいわ}{一|いち}', pt: 'Lição 19: Recebendo o chefe. Diálogo I.' },
    { speaker: 'Takeshi', ja: '{部長|ぶちょう}、{出張|しゅっちょう}お{疲|つか}れさまでした。', pt: 'Chefe, a viagem de negócios deve ter sido cansativa.' },
    { speaker: 'Chefe', ja: '{木村|きむら}くん、{迎|むか}えに{来|き}てくれてありがとう。', pt: 'Kimura, obrigado por vir me buscar.' },
    { speaker: 'Chefe', ja: '{本当|ほんとう}はシアトルを{一時|いちじ}に{出|で}るはずだったんだけど、{遅|おく}れちゃってね。', pt: 'Na verdade, eu deveria ter saído de Seattle à uma, mas houve um atraso.' },
    { speaker: 'Takeshi', ja: 'じゃあ、お{疲|つか}れになったでしょう。', pt: 'Então o senhor deve estar cansado.' },
    { speaker: 'Chefe', ja: '{大丈夫|だいじょうぶ}だけど、ちょっとおなかがすいてるんだ。', pt: 'Estou bem, mas estou com um pouco de fome.' },
    { speaker: 'Takeshi', ja: 'じゃあ、{何|なに}か{召|め}し{上|あ}がってから、お{帰|かえ}りになりますか。', pt: 'Então, gostaria de comer alguma coisa antes de voltar para casa?' },
    { speaker: 'Chefe', ja: 'うん。そうしようか。', pt: 'Sim. Vamos fazer isso.' },
  ] }],
  K19_03: [{ label: '{会話|かいわ} II', lines: [
    { speaker: 'Anúncio', ja: '{二|に}', pt: 'Diálogo II.' },
    { speaker: 'Atendente', ja: 'いらっしゃいませ。{何名様|なんめいさま}ですか。', pt: 'Bem-vindos. Para quantas pessoas?' },
    { speaker: 'Takeshi', ja: '{二人|ふたり}です。', pt: 'Duas pessoas.' },
    { speaker: 'Atendente', ja: '{少々|しょうしょう}お{待|ま}ちください。', pt: 'Aguardem um momento, por favor.' },
    { speaker: 'Atendente', ja: 'こちらへどうぞ。', pt: 'Por aqui, por favor.' },
    { speaker: 'Atendente', ja: 'お{決|き}まりになりましたらお{呼|よ}びください。', pt: 'Quando tiverem decidido o pedido, chamem-me, por favor.' },
  ] }],
  K19_05: [{ label: '{会話|かいわ} III', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}', pt: 'Diálogo III.' },
    { speaker: 'Chefe', ja: 'うちまで{送|おく}ってくれてありがとう。', pt: 'Obrigado por me trazer até em casa.' },
    { speaker: 'Takeshi', ja: 'いいえ。{今日|きょう}はごちそうしてくださってありがとうございました。', pt: 'De nada. Obrigado por me pagar a refeição hoje.' },
    { speaker: 'Chefe', ja: 'ゆっくり{話|はなし}ができてよかったよ。ちょっとうちに{寄|よ}らない？', pt: 'Que bom que pudemos conversar com calma. Não quer entrar um pouco?' },
    { speaker: 'Takeshi', ja: 'いえ、もう{遅|おそ}いし、{奥様|おくさま}もお{休|やす}みになっているでしょうから。', pt: 'Não, já está tarde, e sua esposa provavelmente já está dormindo.' },
    { speaker: 'Chefe', ja: 'この{時間|じかん}ならまだ{起|お}きているはずだよ。', pt: 'A esta hora, ela ainda deve estar acordada.' },
    { speaker: 'Takeshi', ja: 'でも、{今日|きょう}は{遠慮|えんりょ}しておきます。{奥様|おくさま}によろしくお{伝|つた}えください。', pt: 'Mesmo assim, hoje vou recusar. Dê minhas lembranças à sua esposa, por favor.' },
  ] }],
  Y19_1: [{ label: 'お{礼|れい}の{手紙|てがみ}', lines: [
    { speaker: 'Anúncio', ja: '{読み書き編|よみかきへん}　{第十九課|だいじゅうきゅうか}　{二|に}　お{礼|れい}の{手紙|てがみ}　B', pt: 'Parte de leitura e escrita, lição 19, seção II: Carta de agradecimento. Seção B.' },
    { speaker: 'Jean', ja: '{小野|おの}{様|さま}', pt: 'Prezado(a) Ono,' },
    { speaker: 'Jean', ja: 'パリではさむい{日|ひ}がつづいていますが、{東京|とうきょう}はいかがですか。', pt: 'Em Paris, os dias frios continuam. Como está Tóquio?' },
    { speaker: 'Jean', ja: 'もっと{早|はや}く{手紙|てがみ}を{書|か}こうと{思|おも}っていたのですが、{大学|だいがく}の{授業|じゅぎょう}でいそがしくて、{日本|にほん}を{出|で}てから{三|さん}か{月|げつ}もたってしまいました。', pt: 'Eu pretendia escrever mais cedo, mas estive ocupado com as aulas da universidade, e já se passaram três meses desde que saí do Japão.' },
    { speaker: 'Jean', ja: '{留学中|りゅうがくちゅう}はたいへんお{世話|せわ}になりました。', pt: 'Muito obrigado por tudo que fizeram por mim durante meu intercâmbio.' },
    { speaker: 'Jean', ja: 'はじめは{日本語|にほんご}がわからなくて、{不安|ふあん}でした。', pt: 'No começo, eu não entendia japonês e estava inseguro.' },
    { speaker: 'Jean', ja: 'でもお{母|かあ}さんのおかげで、{日本語|にほんご}が{上手|じょうず}になりました。', pt: 'Mas, graças à mãe da família, meu japonês melhorou.' },
    { speaker: 'Jean', ja: '{日本語|にほんご}や{日本|にほん}の{生活|せいかつ}についていろいろ{教|おし}えてくださってどうもありがとうございました。', pt: 'Muito obrigado por me ensinar tantas coisas sobre o japonês e a vida no Japão.' },
    { speaker: 'Jean', ja: 'お{姉|ねえ}さんといっしょにテニスをしたり、お{兄|にい}さんとしょうぎをしたりしたことを{今|いま}も{思|おも}い{出|だ}します。', pt: 'Ainda me lembro de jogar tênis com sua irmã mais velha e shogi com seu irmão mais velho.' },
    { speaker: 'Jean', ja: 'お{父|とう}さんが{作|つく}ってくれたカレーもなつかしいです。', pt: 'Também sinto saudade do curry que o pai da família fez para mim.' },
    { speaker: 'Jean', ja: '{日本|にほん}に{行|い}って{本当|ほんとう}によかったと{思|おも}います。', pt: 'Acho que foi realmente muito bom ter ido ao Japão.' },
    { speaker: 'Jean', ja: '{私|わたし}はこの{冬休|ふゆやす}みに{自分|じぶん}で{漢字|かんじ}を{勉強|べんきょう}しようと{思|おも}っています。', pt: 'Nestas férias de inverno, pretendo estudar kanji por conta própria.' },
    { speaker: 'Jean', ja: '{来年大学|らいねんだいがく}を{卒業|そつぎょう}したら、もう{一度日本|いちどにほん}にもどるつもりです。', pt: 'Quando me formar na universidade no próximo ano, pretendo voltar ao Japão mais uma vez.' },
    { speaker: 'Jean', ja: 'その{時|とき}、{会|あ}えるのを{楽|たの}しみにしています。', pt: 'Estou ansioso para encontrá-los nessa ocasião.' },
    { speaker: 'Jean', ja: 'それでは、みな{様|さま}によろしくおつたえください。', pt: 'Bem, então, dê minhas lembranças a todos, por favor.' },
    { speaker: 'Jean', ja: 'お{体|からだ}を{大切|たいせつ}になさってください。', pt: 'Por favor, cuidem-se bem.' },
    { speaker: 'Jean', ja: '{十二月十日|じゅうにがつとおか}　ジャン・ベルナール', pt: '10 de dezembro. Jean Bernard.' },
  ] }],
  Y19_2: [{ label: 'マリアさんのメール', lines: [
    { speaker: 'Anúncio', ja: '{三|さん}　マリアさんのメール　A', pt: 'Seção III: O e-mail de Maria. Seção A.' },
    { speaker: 'Maria', ja: 'パク・スーマン{様|さま}', pt: 'Prezado Park Soo-man,' },
    { speaker: 'Maria', ja: '{突然|とつぜん}のメールで{失礼|しつれい}します。{私|わたし}はマリア・ロペスと{言|い}います。', pt: 'Desculpe-me por escrever de repente. Meu nome é Maria Lopez.' },
    { speaker: 'Maria', ja: '{友人|ゆうじん}のモハメッドさんの{紹介|しょうかい}でメールを{書|か}いています。', pt: 'Escrevo por indicação do meu amigo Mohammed.' },
    { speaker: 'Maria', ja: '{私|わたし}は{今|いま}、カリフォルニア{大学|だいがく}の{四年生|よねんせい}です。', pt: 'Atualmente, sou aluna do quarto ano da Universidade da Califórnia.' },
    { speaker: 'Maria', ja: '{卒業|そつぎょう}したら、{日本|にほん}の{大学院|だいがくいん}で{国際政治|こくさいせいじ}を{勉強|べんきょう}しようと{思|おも}っています。', pt: 'Quando me formar, pretendo estudar política internacional em uma pós-graduação no Japão.' },
    { speaker: 'Maria', ja: '{私|わたし}の{専攻|せんこう}は{政治|せいじ}で、{大学|だいがく}では{特|とく}にアメリカと{日本|にほん}の{関係|かんけい}について{勉強|べんきょう}しました。', pt: 'Meu curso principal é política; na universidade, estudei especialmente as relações entre os Estados Unidos e o Japão.' },
    { speaker: 'Maria', ja: 'パクさんは{日本|にほん}の{大学院|だいがくいん}で{電気工学|でんきこうがく}を{研究|けんきゅう}していらっしゃると{聞|き}きました。', pt: 'Ouvi dizer que você pesquisa engenharia elétrica em uma pós-graduação japonesa.' },
    { speaker: 'Maria', ja: '{日本|にほん}の{大学院|だいがくいん}について{教|おし}えていただけないでしょうか。', pt: 'Poderia me contar sobre a pós-graduação no Japão?' },
    { speaker: 'Maria', ja: '{大学院|だいがくいん}に{入|はい}る{前|まえ}に、{日本語|にほんご}の{試験|しけん}を{受|う}けなければいけないと{聞|き}きましたが、パクさんは{試験|しけん}のためにどんな{勉強|べんきょう}をなさいましたか。', pt: 'Ouvi que é preciso fazer uma prova de japonês antes de entrar na pós-graduação. Como você estudou para essa prova?' },
    { speaker: 'Maria', ja: 'また、{日本|にほん}は{生活費|せいかつひ}が{高|たか}いそうなので、{奨学金|しょうがくきん}の{申|もう}し{込|こ}みをしたいのですが、どうしたらいいでしょうか。', pt: 'Além disso, como ouvi que o custo de vida no Japão é alto, gostaria de solicitar uma bolsa. O que devo fazer?' },
    { speaker: 'Maria', ja: 'もし{奨学金|しょうがくきん}がもらえなかったら、アルバイトを{探|さが}そうと{思|おも}っています。', pt: 'Se eu não conseguir uma bolsa, pretendo procurar um trabalho de meio período.' },
    { speaker: 'Maria', ja: '{留学生|りゅうがくせい}がアルバイトを{見|み}つけるのはむずかしいでしょうか。', pt: 'É difícil para um estudante estrangeiro encontrar trabalho de meio período?' },
    { speaker: 'Maria', ja: '{質問|しつもん}が{多|おお}くなってしまって、{申|もう}し{訳|わけ}ありません。', pt: 'Desculpe por ter acabado fazendo tantas perguntas.' },
    { speaker: 'Maria', ja: 'お{忙|いそが}しいと{思|おも}いますが、どうぞよろしくお{願|ねが}いします。', pt: 'Imagino que esteja ocupado, mas agradeço desde já por sua atenção.' },
    { speaker: 'Maria', ja: 'マリア・ロペス', pt: 'Maria Lopez.' },
  ] }],
}

scripts.K19_02 = scripts.K19_01
scripts.K19_04 = scripts.K19_03
scripts.K19_06 = scripts.K19_05

const specialTitles: Record<string, string> = {
  K19_01: 'Diálogo I — recebendo o chefe', K19_02: 'Diálogo I — repetição guiada',
  K19_03: 'Diálogo II — no restaurante', K19_04: 'Diálogo II — repetição guiada',
  K19_05: 'Diálogo III — na casa do chefe', K19_06: 'Diálogo III — repetição guiada',
  Y19_1: 'Leitura — carta de agradecimento', Y19_2: 'Leitura — e-mail de Maria',
  W19_A: 'Workbook A — entrevista com Yamada', W19_B: 'Workbook B — avisos e diálogos curtos',
  W19_C: 'Workbook C — visita do príncipe',
}
const audioCodes = [
  ...Array.from({ length: 17 }, (_, index) => `K19_${String(index + 1).padStart(2, '0')}`),
  'Y19_1', 'Y19_2', 'W19_A', 'W19_B', 'W19_C',
]
const kindForCode = (code: string): AudioTrackKind => {
  if (code.startsWith('Y')) return 'reading'
  if (code.startsWith('W')) return 'workbook'
  if (/^K19_0[135]$/.test(code)) return 'dialogue'
  if (/^K19_0[246]$/.test(code)) return 'dialogue-support'
  if (/^K19_0[78]$/.test(code)) return 'vocabulary'
  return 'drill'
}
const exerciseIdsForCode = (code: string): string[] => {
  const ids = code === 'K19_01' || code === 'K19_02' ? ['d1', 'd2', 'd3', 'd4']
    : code === 'K19_03' || code === 'K19_04' ? ['d5', 'd6']
      : code === 'K19_05' || code === 'K19_06' ? ['d7', 'd8', 'd9']
        : code === 'K19_07' || code === 'K19_08' ? ['v1', 'v2', 'v3', 'v4', 'v5', 'v6']
          : /^K19_(09|10|11|12)$/.test(code) ? Array.from({ length: 10 }, (_, index) => `g${index + 1}`)
            : code === 'K19_13' ? ['g11', 'g12', 'g13', 'g14']
              : code === 'K19_14' ? ['g15', 'g16', 'g17']
                : code === 'K19_15' ? ['g18', 'g19', 'g20']
                  : /^K19_(16|17)$/.test(code) ? ['g21', 'g22', 'g23', 'g24', 'g25', 'g26']
                    : code === 'Y19_1' ? ['r1', 'r2', 'r3', 'r4']
                      : code === 'Y19_2' ? ['r5', 'r6', 'r7', 'r8']
                        : code === 'W19_A' ? ['l1', 'l2', 'l3', 'l4', 'l5', 'l6']
                          : code === 'W19_B' ? ['l7', 'l8', 'l9', 'l10', 'l11']
                            : code === 'W19_C' ? ['l12', 'l13', 'l14', 'l15', 'l16', 'l17'] : []
  return ids.map((id) => `${lessonPrefix}-${id}`)
}
const groupIdForKind = (kind: AudioTrackKind) => kind === 'dialogue' || kind === 'dialogue-support'
  ? `${lessonPrefix}-dialogue`
  : kind === 'reading' || kind === 'vocabulary'
    ? `${lessonPrefix}-vocabulary-reading`
    : kind === 'workbook'
      ? `${lessonPrefix}-listening`
      : `${lessonPrefix}-grammar`

const audios: AudioTrack[] = audioCodes.map((code) => {
  const metadata = genki2AudioSourceByCode[code]
  const kind = kindForCode(code)
  const script = scripts[code] ?? []
  const activity = metadata?.sourceActivityPt ?? `Faixa ${code}`
  const source = metadata?.material === 'workbook' ? 'Workbook' : 'Textbook'
  const purposePt = kind === 'dialogue' ? 'Compreender o diálogo integral e reconhecer escolhas honoríficas, agradecimento e expectativa em contexto.'
    : kind === 'dialogue-support' ? 'Repetir o diálogo em blocos, reproduzindo ritmo e nível de respeito.'
      : kind === 'reading' ? code === 'Y19_1'
        ? 'Acompanhar integralmente uma carta de agradecimento e identificar lembranças, favores e planos.'
        : 'Acompanhar integralmente um e-mail formal e identificar apresentação, perguntas e encerramento.'
        : kind === 'workbook' ? code === 'W19_A'
          ? 'Julgar afirmações a partir de uma entrevista com linguagem honorífica.'
          : code === 'W19_B'
            ? 'Relacionar cinco avisos ou diálogos ao local e à instrução respeitosa correta.'
            : 'Reconstruir a linha do tempo de uma visita e converter formas honoríficas em ações compreendidas.'
          : kind === 'vocabulary' ? 'Fixar pronúncia e significado do vocabulário de relações, cortesia e visitas.'
            : `Produzir oralmente a ${activity.toLowerCase()} e comparar com o modelo.`
  const workbookInstructions = code === 'W19_A'
    ? ['Leia as seis afirmações antes de ouvir.', 'Ouça e marque verdadeiro ou falso.', 'Na segunda audição, anote a frase que corrige cada item falso.']
    : code === 'W19_B'
      ? ['Leia a lista de locais e pedidos.', 'Ouça cada item e escolha primeiro o local.', 'Ouça novamente e associe a instrução respeitosa.']
      : ['Leia a tabela de horários.', 'Ouça e complete mentalmente a linha do tempo.', 'Confirme as três afirmações finais e resolva as questões vinculadas.']
  return {
    id: trackId(code), code, kind, language: 'ja', title: specialTitles[code] ?? activity,
    descriptionPt: `${activity}. ${purposePt}`, purposePt,
    instructionsPt: kind === 'workbook'
      ? workbookInstructions
      : kind === 'reading'
        ? ['Ouça uma vez acompanhando apenas o japonês.', 'Ative furigana somente para confirmar leituras desconhecidas.', 'Ative a tradução por linha, reconte cada parágrafo e responda às questões vinculadas.']
        : kind === 'vocabulary'
          ? ['Antecipe a palavra antes do modelo.', 'Repita preservando vogais longas e consoantes duplas.', 'Use cada item em uma frase respeitosa própria.']
          : ['Ouça sem tradução e identifique o sujeito respeitado.', 'Produza ou repita durante a pausa.', 'Confira forma, partícula e nível de polidez antes de avançar.'],
    sourceRefPt: `${source} Genki II, 3ª ed., p. ${metadata?.sourcePage ?? '—'}`,
    sourceActivityPt: activity, sourcePage: metadata?.sourcePage,
    practiceTaskPt: kind === 'reading' ? 'Resuma cada parágrafo em português, depois reconte em japonês usando três expressões do texto.'
      : kind === 'workbook' ? 'Resolva as questões vinculadas sem transcrição; na segunda audição, registre a evidência exata de cada resposta.'
        : kind === 'vocabulary' ? 'Faça recuperação ativa nos dois sentidos e crie uma frase com o item que errar.'
          : kind === 'drill' || kind === 'dialogue-support' ? 'Produza durante as pausas e repita os itens em que forma honorífica ou registro divergir do modelo.'
            : 'Represente um dos papéis, depois troque o interlocutor e ajuste o nível de respeito.',
    exerciseGroupIds: [groupIdForKind(kind)],
    exerciseIds: exerciseIdsForCode(code),
    src: `${BASE}/${code}.mp3`, script,
    transcript: script.length ? { kind: 'full', source: 'source-aligned', reviewed: true, items: script } : undefined,
  }
})

export const genki2Lesson19: Section = {
  id: 'lesson-19', level: 'genki-2', titleJa: '第19課　出迎え',
  titlePt: 'Lição 19 — Recebendo o chefe',
  summaryPt: 'Linguagem honorífica, instruções respeitosas, agradecimento por favores, 〜てよかった, 〜はず, vocabulário de visitas, cartas e e-mails formais e compreensão auditiva.',
  studyNotes,
  groups: [
    group('dialogue', '会話', 'compreensão dos três diálogos', dialogueQuestions),
    group('grammar', '文法 1〜5', 'linguagem honorífica, agradecimento, avaliação e expectativa', grammarQuestions),
    group('vocabulary-reading', '読み書き', 'vocabulário, kanji, carta e e-mail', vocabularyReadingQuestions),
    group('listening', '聞く練習', 'compreensão auditiva do workbook', listeningQuestions),
  ],
  audios,
}
