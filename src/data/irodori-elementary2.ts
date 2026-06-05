import type { ExerciseGroup, Level, ScriptItem, Section, StudyNote } from './types'
import { ELEMENTARY2_AUDIO } from './irodori-elementary2-audio'

// =====================================================================
//  Irodori — いろどり: Japanese for Life in Japan (Japan Foundation)
//  Parte "Elementary 2" (初級2 / A2): 9 tópicos, 18 lições (課).
//  Estrutura por módulos (lições), com os áudios oficiais por lição.
//  Explicações e traduções em pt-BR são autorais. Ilustrações oficiais
//  servidas de /images/irodori/elementary2/.
// =====================================================================

// Liga transcrições (script) a faixas específicas de uma lição, pelo código (ex.: '01-06').
function attachScripts(n: number, scripts: Record<string, ScriptItem[]>): typeof ELEMENTARY2_AUDIO[number] {
  return (ELEMENTARY2_AUDIO[n] ?? []).map((t) => {
    const code = t.id.replace('iro-e2-', '')
    return scripts[code] ? { ...t, script: scripts[code] } : t
  })
}

const IMG = '/images/irodori/elementary2'

function canDoNotes(topicPt: string, candos: string[], extra?: string): StudyNote[] {
  return [
    {
      title: `Tópico: ${topicPt}`,
      bodyPt:
        `Esta lição faz parte do tópico **${topicPt}**.\n\n## O que você vai conseguir fazer (Can-do)\n` +
        candos.map((c) => `- ${c}`).join('\n') +
        (extra ? `\n\n${extra}` : '') +
        `\n\n> ⏳ Os exercícios desta lição ainda estão em construção. Os **áudios oficiais já estão disponíveis** na aba “Áudios” para você praticar ouvindo e repetindo (shadowing).`,
    },
  ]
}

function scaffold(
  n: number,
  topicPt: string,
  titleJa: string,
  titlePt: string,
  candos: string[],
): Section {
  return {
    id: `lesson-${n}`,
    level: 'elementary2',
    titleJa: `第${n}課 ${titleJa}`,
    titlePt: `Lição ${n} — ${titlePt}`,
    summaryPt: `${topicPt} · ${titlePt}`,
    studyNotes: canDoNotes(topicPt, candos),
    groups: [],
    audios: ELEMENTARY2_AUDIO[n],
  }
}

// ---- Lição 1: 先週、日本に来たばかりです (tópico 私の周りの人たち) --------------
const lesson1Group: ExerciseGroup = {
  id: 'iro-e2-l1',
  title: '先週、日本に来たばかりです',
  subtitlePt: 'Apresentar a equipe · autoapresentação detalhada · falar da cidade natal',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l1-1', number: 1, prompt: '「N1 という N2」 (ex.: 「{東京|とうきょう}イン」というホテル) serve para:', choices: [{ n: 1, text: 'apresentar/explicar algo que o ouvinte talvez não conheça (uma ~ chamada N1)' }, { n: 2, text: 'comparar duas coisas' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'negar algo' }], answer: 1, explanationPt: '「N1 という N2」 introduz ou explica algo que o ouvinte não conhece ou ouve pela primeira vez: 〜という{町|まち} (uma cidade chamada ~), 〜という{店|みせ}, 〜という{人|ひと}. (文法ノート ❶)' },
    { id: 'iro-e2-l1-2', number: 2, prompt: '「ホアは「{花|はな}」という{意味|いみ}です」 significa:', choices: [{ n: 1, text: '“Hoa” quer dizer “flor”.' }, { n: 2, text: 'Hoa gosta de flores.' }, { n: 3, text: 'Hoa comprou uma flor.' }, { n: 4, text: 'O nome dela não é Hoa.' }], answer: 1, translationPt: '“Hoa” significa “flor”.', explanationPt: '〜という{意味|いみ}です explica o significado de uma palavra/nome. (文法ノート ❶)' },
    { id: 'iro-e2-l1-3', number: 3, prompt: '「{先週|せんしゅう}、{日本|にほん}に{来|き}たばかりです」 — 「V- たばかりです」 expressa:', choices: [{ n: 1, text: 'que faz pouco tempo que algo aconteceu (acabei de chegar)' }, { n: 2, text: 'que vai acontecer em breve' }, { n: 3, text: 'que acontece sempre' }, { n: 4, text: 'que nunca aconteceu' }], answer: 1, translationPt: 'Acabei de chegar ao Japão na semana passada.', explanationPt: '「V(forma タ) + ばかりです」 = faz pouco tempo desde a ação. Liga-se à forma タ: {来|き}た→{来|き}たばかり. (文法ノート ❷)' },
    { id: 'iro-e2-l1-4', number: 4, prompt: '「V- たばかり」 liga-se a qual forma do verbo?', choices: [{ n: 1, text: 'à forma タ (passado): {始|はじ}めた→{始|はじ}めたばかり, {着|つ}いた→{着|つ}いたばかり' }, { n: 2, text: 'à forma de dicionário' }, { n: 3, text: 'à forma ます' }, { n: 4, text: 'à forma テ' }], answer: 1, explanationPt: 'Usa-se a forma タ + ばかり: {食|た}べた→{食|た}べたばかり, {帰|かえ}った→{帰|かえ}ったばかり. 【例】さっき{空港|くうこう}に{着|つ}いたばかりです。(文法ノート ❷)' },
    { id: 'iro-e2-l1-5', number: 5, prompt: '「ベトナムでは、ホテルで{働|はたら}いていました」 — 「V- ていました」 indica:', choices: [{ n: 1, text: 'uma situação/ocupação no passado (eu trabalhava…)' }, { n: 2, text: 'o que faço agora' }, { n: 3, text: 'um plano para o futuro' }, { n: 4, text: 'um pedido' }], answer: 1, translationPt: 'No Vietnã, eu trabalhava num hotel.', explanationPt: 'No 初級1 vimos V-ています (situação atual). 「V- ていました」 = situação no passado; aqui, a ocupação num período anterior. (文法ノート ❸)' },
    { id: 'iro-e2-l1-6', number: 6, prompt: '「{国|くに}ではどんな{仕事|しごと}をしていましたか？」 pergunta:', choices: [{ n: 1, text: 'que trabalho você fazia no seu país (passado)' }, { n: 2, text: 'que trabalho você faz hoje' }, { n: 3, text: 'que trabalho você quer fazer' }, { n: 4, text: 'onde fica seu país' }], answer: 1, explanationPt: '〜をしていましたか？ pergunta sobre a ocupação no passado. Resposta: ツアーガイドの{仕事|しごと}をしていました (eu era guia turístico). (文法ノート ❸)' },
    { id: 'iro-e2-l1-7', number: 7, prompt: '「ジョグジャカルタという{大|おお}きい{町|まち}があります。ウォノソボは、そこから、バスで4{時間|じかん}です」 — 「そこ」 se refere a:', choices: [{ n: 1, text: 'Yogyakarta (lugar citado na frase anterior)' }, { n: 2, text: 'Wonosobo' }, { n: 3, text: 'o ônibus' }, { n: 4, text: 'a Indonésia inteira' }], answer: 1, explanationPt: 'それ／そこ no uso de contexto (文脈指示) retomam algo já mencionado. Aqui そこ = Yogyakarta. (文法ノート ❹)' },
    { id: 'iro-e2-l1-8', number: 8, prompt: '「{私|わたし}の{町|まち}は、ストロマトライトが{有名|ゆうめい}です」 「それは{何|なん}ですか？」 — 「それ」 aponta:', choices: [{ n: 1, text: 'a coisa que a outra pessoa acabou de mencionar (estromatólito)' }, { n: 2, text: 'a cidade de quem pergunta' }, { n: 3, text: 'algo que ninguém citou' }, { n: 4, text: 'o futuro' }], answer: 1, explanationPt: 'それ retoma o que o interlocutor disse antes. それは{何|なん}ですか？ = o que é isso (que você mencionou)? (文法ノート ❹)' },
    { id: 'iro-e2-l1-9', number: 9, prompt: '📌 「〜と{申|もう}します」 / 「〜と{呼|よ}んでください」 (autoapresentação) significam:', choices: [{ n: 1, text: 'meu nome é ~ (humilde) / chame-me de ~' }, { n: 2, text: 'eu conheço ~ / venha aqui' }, { n: 3, text: 'eu moro em ~ / espere' }, { n: 4, text: 'eu gosto de ~ / vá embora' }], answer: 1, explanationPt: '〜と{申|もう}します = forma humilde de 〜といいます (meu nome é…). 〜と{呼|よ}んでください = chame-me de…. (Atividade 2 · 自己紹介)' },
    { id: 'iro-e2-l1-10', number: 10, prompt: '{方位|ほうい} (pontos cardeais): 「{北|きた}／{南|みなみ}／{東|ひがし}／{西|にし}」 lêem-se e significam:', choices: [{ n: 1, text: 'きた (norte) / みなみ (sul) / ひがし (leste) / にし (oeste)' }, { n: 2, text: 'みなみ (norte) / きた (sul) / にし (leste) / ひがし (oeste)' }, { n: 3, text: 'ひがし (norte) / にし (sul) / きた (leste) / みなみ (oeste)' }, { n: 4, text: 'きた (sul) / みなみ (norte) / ひがし (oeste) / にし (leste)' }], answer: 1, explanationPt: '{北|きた} norte, {南|みなみ} sul, {東|ひがし} leste, {西|にし} oeste. Ex.: ベトナムの{南|みなみ}にあります (fica no sul do Vietnã). (Atividade 3 · ことばの準備)' },
    { id: 'iro-e2-l1-11', number: 11, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_01_yama.png`, imageAlt: 'montanha com pico nevado', choices: [{ n: 1, text: '{山|やま} (montanha)' }, { n: 2, text: '{海|うみ} (mar)' }, { n: 3, text: '{湖|みずうみ} (lago)' }, { n: 4, text: '{島|しま} (ilha)' }], answer: 1, explanationPt: '{山|やま} = montanha. (Atividade 3 · ことばの準備 · 自然)' },
    { id: 'iro-e2-l1-12', number: 12, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_02_kawa.png`, imageAlt: 'rio', choices: [{ n: 1, text: '{川|かわ} (rio)' }, { n: 2, text: '{森|もり} (floresta)' }, { n: 3, text: '{砂漠|さばく} (deserto)' }, { n: 4, text: '{山|やま} (montanha)' }], answer: 1, explanationPt: '{川|かわ} = rio. (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-13', number: 13, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_03_umi.png`, imageAlt: 'mar com praia', choices: [{ n: 1, text: '{海|うみ} (mar)' }, { n: 2, text: '{川|かわ} (rio)' }, { n: 3, text: '{湖|みずうみ} (lago)' }, { n: 4, text: '{森|もり} (floresta)' }], answer: 1, explanationPt: '{海|うみ} = mar. (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-14', number: 14, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_04_shima.png`, imageAlt: 'ilha vista de cima', choices: [{ n: 1, text: '{島|しま} (ilha)' }, { n: 2, text: '{山|やま} (montanha)' }, { n: 3, text: '{砂漠|さばく} (deserto)' }, { n: 4, text: '{高原|こうげん} (planalto)' }], answer: 1, explanationPt: '{島|しま} = ilha. (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-15', number: 15, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_05_mori.png`, imageAlt: 'floresta densa', choices: [{ n: 1, text: '{森|もり} (floresta)' }, { n: 2, text: '{海|うみ} (mar)' }, { n: 3, text: '{川|かわ} (rio)' }, { n: 4, text: '{砂漠|さばく} (deserto)' }], answer: 1, explanationPt: '{森|もり} = floresta (mata densa, tipo selva). (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-16', number: 16, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_06_soogen.png`, imageAlt: 'campo / pradaria verde plana', choices: [{ n: 1, text: '{草原|そうげん} (campo / pradaria)' }, { n: 2, text: '{砂漠|さばく} (deserto)' }, { n: 3, text: '{島|しま} (ilha)' }, { n: 4, text: '{海|うみ} (mar)' }], answer: 1, explanationPt: '{草原|そうげん} = campo/pradaria (planície coberta de grama). (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-17', number: 17, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_07_sabaku.png`, imageAlt: 'deserto com dunas de areia', choices: [{ n: 1, text: '{砂漠|さばく} (deserto)' }, { n: 2, text: '{草原|そうげん} (campo)' }, { n: 3, text: '{森|もり} (floresta)' }, { n: 4, text: '{川|かわ} (rio)' }], answer: 1, explanationPt: '{砂漠|さばく} = deserto. (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-18', number: 18, prompt: 'Que palavra japonesa (自然) nomeia esta paisagem?', image: `${IMG}/Z_01_3_08_koogen.png`, imageAlt: 'planalto / terras altas com montanha ao fundo', choices: [{ n: 1, text: '{高原|こうげん} (planalto / terras altas)' }, { n: 2, text: '{草原|そうげん} (campo)' }, { n: 3, text: '{島|しま} (ilha)' }, { n: 4, text: '{砂漠|さばく} (deserto)' }], answer: 1, explanationPt: '{高原|こうげん} = planalto (campo em região alta). Ex.: ウォノソボは{高原|こうげん}の{町|まち}です. (Atividade 3 · 自然)' },
    { id: 'iro-e2-l1-19', number: 19, prompt: '「{出身|しゅっしん}はどちらですか？」 pergunta:', choices: [{ n: 1, text: 'de onde você é / qual é sua origem' }, { n: 2, text: 'onde você mora agora' }, { n: 3, text: 'para onde você vai' }, { n: 4, text: 'que horas são' }], answer: 1, explanationPt: '{出身|しゅっしん} = origem/naturalidade. Resposta: ベトナムのホーチミン{出身|しゅっしん}です / 〜から{来|き}ました. (Atividade 3)' },
    { id: 'iro-e2-l1-20', number: 20, prompt: 'Sobre a cidade natal: 「{都会|とかい}／{首都|しゅと}／{観光地|かんこうち}／{観光客|かんこうきゃく}」 significam:', choices: [{ n: 1, text: 'metrópole / capital / ponto turístico / turista' }, { n: 2, text: 'campo / vila / praia / morador' }, { n: 3, text: 'montanha / rio / mar / ilha' }, { n: 4, text: 'norte / sul / leste / oeste' }], answer: 1, explanationPt: '{都会|とかい} metrópole, {首都|しゅと} capital, {観光地|かんこうち} ponto turístico, {観光客|かんこうきゃく} turista. にぎやか = animada/movimentada. (Atividade 3)' },
    { id: 'iro-e2-l1-21', number: 21, prompt: 'No trabalho, 「{紹介|しょうかい}する／{主任|しゅにん}／パート／{担当|たんとう}」 significam:', context: 'Apresentação da equipe a uma nova funcionária.', image: `${IMG}/Z_01_1_01_sutaffushookai.png`, imageAlt: 'colega apresentando a equipe a uma nova funcionária', choices: [{ n: 1, text: 'apresentar / chefe de seção / (funcionário de) meio-período / responsável por' }, { n: 2, text: 'demitir / estagiário / gerente / cliente' }, { n: 3, text: 'contratar / diretor / sócio / visitante' }, { n: 4, text: 'pagar / caixa / dono / fornecedor' }], answer: 1, explanationPt: '{紹介|しょうかい}する apresentar, {主任|しゅにん} chefe de seção, パート meio-período, 〜が{担当|たんとう}です = ~ é o(a) responsável. {手続|てつづ}き = trâmites. (Atividade 1)' },
    { id: 'iro-e2-l1-22', number: 22, prompt: 'Os kanji 「{山|やま}／{川|かわ}／{海|うみ}／{島|しま}／{森|もり}」 lêem-se:', choices: [{ n: 1, text: 'やま / かわ / うみ / しま / もり' }, { n: 2, text: 'かわ / やま / しま / うみ / もり' }, { n: 3, text: 'やま / かわ / しま / うみ / はやし' }, { n: 4, text: 'さん / せん / かい / とう / しん' }], answer: 1, explanationPt: '{山|やま} montanha, {川|かわ} rio, {海|うみ} mar, {島|しま} ilha, {森|もり} floresta. (漢字のことば)' },
    { id: 'iro-e2-l1-23', number: 23, prompt: 'Os kanji 「{客|きゃく}／{観光地|かんこうち}／{意味|いみ}／{経験|けいけん}」 lêem-se:', choices: [{ n: 1, text: 'きゃく (cliente) / かんこうち (ponto turístico) / いみ (significado) / けいけん (experiência)' }, { n: 2, text: 'かく / かんこうじ / いあじ / きょうけん' }, { n: 3, text: 'きゃく / みこうち / いみ / けいけん' }, { n: 4, text: 'きゃく / かんこうち / いみ / けいげん' }], answer: 1, explanationPt: '{客|きゃく} cliente/hóspede, {観光地|かんこうち} ponto turístico, {意味|いみ} significado, {経験|けいけん} experiência. (漢字のことば)' },
    { id: 'iro-e2-l1-24', number: 24, prompt: '聴解 01-01: 「マデさん、みんなを{紹介|しょうかい}しますね。こちらは、{主任|しゅにん}の{川崎|かわさき}さん」 — quem é Kawasaki e do que ele cuida?', context: 'Ａ（{横田|よこた}）：…{仕事|しごと}のことは、{川崎|かわさき}さんに{聞|き}いてください。', choices: [{ n: 1, text: 'É o {主任|しゅにん} (chefe de seção); responde sobre o trabalho.' }, { n: 2, text: 'É de meio-período; cuida das folgas.' }, { n: 3, text: 'É o mais novo da empresa.' }, { n: 4, text: 'É um cliente.' }], answer: 1, explanationPt: '{主任|しゅにん}の{川崎|かわさき}さん; {仕事|しごと}のことは{川崎|かわさき}さんに{聞|き}いてください = sobre o trabalho, pergunte ao Kawasaki. (聴解 01-01)' },
    { id: 'iro-e2-l1-25', number: 25, prompt: '聴解 01-02: sobre 渡辺さん — o que se diz dela?', context: 'Ａ：この{会社|かいしゃ}では、いちばん{長|なが}いです。{何|なん}でも{知|し}ってるから…', choices: [{ n: 1, text: 'É a que está há mais tempo na empresa; sabe de tudo (pergunte a ela as coisas da empresa).' }, { n: 2, text: 'Chegou na semana passada.' }, { n: 3, text: 'Trabalha só às sextas.' }, { n: 4, text: 'É a chefe de seção.' }], answer: 1, explanationPt: 'いちばん{長|なが}い = a mais antiga (há mais tempo). {会社|かいしゃ}のいろいろなことは{渡辺|わたなべ}さんに{聞|き}いてください. (聴解 01-02)' },
    { id: 'iro-e2-l1-26', number: 26, prompt: '聴解 01-03: sobre 林（リン）さん — qual a informação correta?', context: 'Ａ：{林|リン}さんは{中国|ちゅうごく}{出身|しゅっしん}で、{去年|きょねん}からここで{働|はたら}いてます。', choices: [{ n: 1, text: 'É da China e trabalha aqui desde o ano passado; escreve-se 「林」 e lê-se Lin.' }, { n: 2, text: 'É do Japão e começou hoje.' }, { n: 3, text: 'É chefe de seção.' }, { n: 4, text: 'Trabalha de meio-período.' }], answer: 1, explanationPt: '{中国|ちゅうごく}{出身|しゅっしん}, {去年|きょねん}から{働|はたら}いてます. 「{林|はやし}」と{書|か}いてリンです (escreve-se Hayashi, lê-se Lin). (聴解 01-03)' },
    { id: 'iro-e2-l1-27', number: 27, prompt: '聴解 01-04: sobre パートの{山下|やました}さん — o que ela faz?', context: 'Ａ：{毎日|まいにち}、{午後|ごご}3{時|じ}までで、{金曜日|きんようび}がお{休|やす}み。{休|やす}みとか、{手続|てつづ}きのことは…', choices: [{ n: 1, text: 'Meio-período até as 15h, folga às sextas; é responsável por folgas e trâmites.' }, { n: 2, text: 'Trabalha de noite e cuida das vendas.' }, { n: 3, text: 'É a mais antiga da empresa.' }, { n: 4, text: 'É a chefe de seção.' }], answer: 1, explanationPt: 'パート, {午後|ごご}3{時|じ}まで, {金曜日|きんようび}お{休|やす}み; {休|やす}み・{手続|てつづ}きは{山下|やました}さんが{担当|たんとう}. (聴解 01-04)' },
    { id: 'iro-e2-l1-28', number: 28, prompt: '会話 (01-05/06) — autoapresentação da ホア: o que ela diz sobre origem, chegada e estudo de japonês?', context: '…ベトナムのダナンという{町|まち}から{来|き}ました。{先週|せんしゅう}、{日本|にほん}に{来|き}たばかりです。{日本語|にほんご}は…1{年|ねん}{勉強|べんきょう}しました。', image: `${IMG}/Z_01_2_01_jikoshookai.png`, imageAlt: 'pessoa se apresentando diante de colegas', choices: [{ n: 1, text: 'É de Da Nang (Vietnã), chegou na semana passada e estudou japonês 1 ano antes de vir.' }, { n: 2, text: 'É de Hanói, mora há 10 anos e nunca estudou japonês.' }, { n: 3, text: 'É da China e chegou ontem.' }, { n: 4, text: 'É do Japão e estuda vietnamita.' }], answer: 1, explanationPt: 'ダナンという{町|まち}から{来|き}ました, {先週|せんしゅう}{来|き}たばかり, {日本|にほん}に{来|く}る{前|まえ}に1{年|ねん}{勉強|べんきょう}しました. (会話 01-05/06 · 文法 ❶❷)' },
    { id: 'iro-e2-l1-29', number: 29, prompt: '会話 (01-05/06) — qual era o trabalho da ホア no Vietnã e qual o hobby dela?', context: 'Ｑ：ベトナムは、どんな{仕事|しごと}をしていましたか？／{趣味|しゅみ}は{何|なん}ですか？', choices: [{ n: 1, text: 'Trabalhava num hotel; o hobby é ouvir música (J-POP, especialmente Perfume).' }, { n: 2, text: 'Era professora; gosta de esportes.' }, { n: 3, text: 'Era cozinheira; gosta de pintura.' }, { n: 4, text: 'Era guia turística; gosta de cinema.' }], answer: 1, explanationPt: 'ホテルで{働|はたら}いていました (V-ていました, passado). {趣味|しゅみ}は{音楽|おんがく}を{聞|き}くこと, J-POP, {特|とく}にPerfume. (会話 01-06 · 文法 ❸)' },
    { id: 'iro-e2-l1-30', number: 30, prompt: '聴解 01-10 (フィリピン・セブ): como é descrita a cidade?', context: 'Ｂ：セブです。{有名|ゆうめい}な{観光地|かんこうち}です。…{海|うみ}がきれいなところですね。…{飛行機|ひこうき}で5{時間|じかん}ぐらいです。', choices: [{ n: 1, text: 'Ponto turístico famoso de mar bonito; muitos turistas; ~5h de avião do Japão.' }, { n: 2, text: 'Uma metrópole com muitos prédios altos.' }, { n: 3, text: 'Um planalto com plantações de chá.' }, { n: 4, text: 'Um deserto tranquilo.' }], answer: 1, explanationPt: 'セブ = {観光地|かんこうち}, {海|うみ}がきれい, {観光客|かんこうきゃく}が{大勢|おおぜい}{来|き}ます, {飛行機|ひこうき}で5{時間|じかん}. (聴解 01-10)' },
    { id: 'iro-e2-l1-31', number: 31, prompt: '聴解 01-11 (モンゴル・ウランバートル): o que a pessoa esclarece sobre a cidade?', context: 'Ａ：{写真|しゃしん}でよく{見|み}る、{白|しろ}くて{丸|まる}いテントに{住|す}んでるの？ Ｂ：{違|ちが}います。…', choices: [{ n: 1, text: 'Não mora em tenda — Ulan Bator é a capital, uma metrópole com muitos prédios altos.' }, { n: 2, text: 'Sim, mora numa tenda branca e redonda.' }, { n: 3, text: 'É uma ilha turística.' }, { n: 4, text: 'É uma vila à beira-mar.' }], answer: 1, explanationPt: 'ウランバートルは{首都|しゅと}だから{都会|とかい}; {高|たか}いビルも{多|おお}い. Desfaz o estereótipo da tenda (ゲル). (聴解 01-11)' },
    { id: 'iro-e2-l1-32', number: 32, prompt: '聴解 01-12 (ベトナム・ホーチミン): como Nyan descreve a cidade?', context: 'Ｂ：ベトナムの{南|みなみ}にある、とても{大|おお}きい{町|まち}です。…{首都|しゅと}ではないけど、とてもにぎやかです。', choices: [{ n: 1, text: 'Cidade grande no sul do Vietnã; não é a capital, mas é muito animada, com bons restaurantes baratos.' }, { n: 2, text: 'É a capital do Vietnã, pequena e tranquila.' }, { n: 3, text: 'É um planalto frio.' }, { n: 4, text: 'É uma ilha deserta.' }], answer: 1, explanationPt: 'ホーチミン: ベトナムの{南|みなみ}, とても{大|おお}きい, {首都|しゅと}ではない, にぎやか, {安|やす}くておいしいレストラン. (聴解 01-12 · 文法 ❹)' },
    { id: 'iro-e2-l1-33', number: 33, prompt: '聴解 01-13 (インドネシア・ウォノソボ): que tipo de lugar é?', context: 'Ｂ：ジャワ{島|とう}に、ジョグジャカルタという{大|おお}きい{町|まち}があります。そこから、バスで4{時間|じかん}…{高原|こうげん}の{町|まち}です。お{茶|ちゃ}の{畑|はたけ}が…', choices: [{ n: 1, text: 'Cidade de planalto na ilha de Java, ~4h de ônibus de Yogyakarta; tem muitas plantações de chá e é pacata.' }, { n: 2, text: 'Uma metrópole litorânea movimentada.' }, { n: 3, text: 'A capital da Indonésia.' }, { n: 4, text: 'Um deserto com dunas.' }], answer: 1, explanationPt: 'ウォノソボ: ジャワ{島|とう}, ジョグジャカルタからバスで4{時間|じかん} (そこ=Yogyakarta), {高原|こうげん}の{町|まち}, お{茶|ちゃ}の{畑|はたけ}, のんびり. (聴解 01-13 · 文法 ❹)' },
    { id: 'iro-e2-l1-34', number: 34, prompt: '会話 01-16 (modelo «出身地について»): a pessoa diz que sua cidade fica onde e a que distância do Japão?', context: 'Ｂ：ベトナムのホーチミン（という{町|まち}）です。…ベトナムの{南|みなみ}にあります。…{飛行機|ひこうき}で6{時間|じかん}{半|はん}ぐらいです。', choices: [{ n: 1, text: 'Ho Chi Minh, no sul do Vietnã; cerca de 6h30 de avião.' }, { n: 2, text: 'Hanói, no norte; 2h de trem.' }, { n: 3, text: 'Cebu, nas Filipinas; 5h de avião.' }, { n: 4, text: 'Tóquio; ao lado.' }], answer: 1, explanationPt: 'Modelo de fala sobre a cidade natal: {出身|しゅっしん} → ベトナムの{南|みなみ} → {飛行機|ひこうき}で6{時間|じかん}{半|はん}. (会話 01-16)' },
    { id: 'iro-e2-l1-35', number: 35, prompt: 'Leitura (SNS) — sobre o post de TARO: o que se entende?', context: 'TARO：…でも、{日本人|にほんじん}じゃありません。タイ{人|じん}です。{今|いま}は、バンコクの{大学|だいがく}で{日本語|にほんご}を{勉強|べんきょう}しています。サッカー、アニメ、ねこが{好|す}きです。', choices: [{ n: 1, text: 'É tailandês, estuda japonês numa universidade em Bangkok; gosta de futebol, anime e gatos.' }, { n: 2, text: 'É japonês e mora em Tóquio.' }, { n: 3, text: 'É nepalês e trabalha num restaurante indiano.' }, { n: 4, text: 'É vietnamita e trabalhava num hotel.' }], answer: 1, explanationPt: 'TARO: タイ{人|じん}, バンコクの{大学|だいがく}で{日本語|にほんご}{勉強|べんきょう}, サッカー・アニメ・ねこが{好|す}き. (Atividade 4 · 読む)' },
    { id: 'iro-e2-l1-36', number: 36, prompt: 'Leitura (SNS) — sobre o post de YAH: qual alternativa está correta?', context: 'YAH：ネパール{人|じん}です。{日本|にほん}に2{年|ねん}{住|す}んでいます。{東京|とうきょう}にあるインド{料理|りょうり}の{店|みせ}で{働|はたら}いています。…しゅみは{食|た}べ{歩|ある}きです。', choices: [{ n: 1, text: 'É nepalês, mora há 2 anos no Japão, trabalha num restaurante indiano em Tóquio; o hobby é sair para comer (food tour).' }, { n: 2, text: 'É tailandês e estuda em Bangkok.' }, { n: 3, text: 'Acabou de chegar ao Japão.' }, { n: 4, text: 'Trabalha como guia turístico no Vietnã.' }], answer: 1, explanationPt: 'YAH: ネパール{人|じん}, {日本|にほん}に2{年|ねん}{住|す}んでいます (V-ています, situação atual), {東京|とうきょう}のインド{料理|りょうり}の{店|みせ}で{働|はたら}いています, しゅみは{食|た}べ{歩|ある}き. (Atividade 4 · 読む)' },
    { id: 'iro-e2-l1-37', number: 37, prompt: '「{首都|しゅと}ではないけど、とてもにぎやかです」 — o conectivo 「けど」 liga as frases com sentido de:', choices: [{ n: 1, text: 'mas / embora (contraste entre as duas partes)' }, { n: 2, text: 'porque (motivo)' }, { n: 3, text: 'e então (sequência)' }, { n: 4, text: 'se (condição)' }], answer: 1, explanationPt: '〜けど = mas/embora; une frases de sentido oposto (não é capital, MAS é animada). Liga-se à forma comum ou polida. (文法ノート ❺)' },
    { id: 'iro-e2-l1-38', number: 38, prompt: '「ウランバートルは{首都|しゅと}だから、{都会|とかい}です」 / 「お{茶|ちゃ}の{畑|はたけ}がたくさんあって、のんびりしています」 — 「から」 e 「て」 indicam, respectivamente:', choices: [{ n: 1, text: 'motivo (porque/já que) · encadeamento/causa (e, e por isso)' }, { n: 2, text: 'contraste · condição' }, { n: 3, text: 'tempo · lugar' }, { n: 4, text: 'pergunta · negação' }], answer: 1, explanationPt: '〜から = motivo (como é a capital, é metrópole). 〜て encadeia frases / dá causa (há plantações de chá, e é pacato). (文法ノート ❺)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 1 (聴解スクリプト)
const hoaSelfIntro: ScriptItem[] = [
  {
    label: '会話 — 自己紹介 (01-05 / 01-06)',
    setupJa: 'ホアさんが、{新|あたら}しい{職場|しょくば}で{自己|じこ}{紹介|しょうかい}をします。そのあと、{仕事|しごと}と{趣味|しゅみ}について{答|こた}えます。',
    setupPt: 'Hoa faz sua autoapresentação no novo trabalho e depois responde sobre trabalho e hobby.',
    lines: [
      { speaker: 'ホア', ja: 'はじめまして。グエン・ティ・ホアと{申|もう}します。ホアと{呼|よ}んでください。ホアは「{花|はな}」という{意味|いみ}です。ベトナムのダナンという{町|まち}から{来|き}ました。{先週|せんしゅう}、{日本|にほん}に{来|き}たばかりです。{日本語|にほんご}は、{日本|にほん}に{来|く}る{前|まえ}に、1{年|ねん}{勉強|べんきょう}しました。まだ、{日本|にほん}のことはよくわかりませんが、{一生懸命|いっしょうけんめい}がんばります。どうぞよろしくお{願|ねが}いします。', pt: 'Muito prazer. Meu nome é Nguyen Thi Hoa. Pode me chamar de Hoa. “Hoa” quer dizer “flor”. Vim de uma cidade chamada Da Nang, no Vietnã. Acabei de chegar ao Japão na semana passada. Estudei japonês por 1 ano antes de vir. Ainda não entendo bem as coisas do Japão, mas vou me esforçar ao máximo. Muito obrigada.' },
      { speaker: '同僚', ja: 'あのう、ベトナムは、どんな{仕事|しごと}をしていましたか？', pt: 'Ah… que trabalho você fazia no Vietnã?' },
      { speaker: 'ホア', ja: 'ホテルで{働|はたら}いていました。', pt: 'Eu trabalhava num hotel.' },
      { speaker: '同僚', ja: '{趣味|しゅみ}は{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
      { speaker: 'ホア', ja: '{趣味|しゅみ}？ えっと、{音楽|おんがく}を{聞|き}くことです。J-POPが{好|す}きです。{特|とく}に、Perfumeが{好|す}きです。', pt: 'Hobby? Hmm, é ouvir música. Gosto de J-POP. Em especial, gosto do Perfume.' },
    ],
  },
]

const L1_SCRIPTS: Record<string, ScriptItem[]> = {
  '01-01': [
    {
      label: '① みんなを紹介しますね (01-01)',
      setupJa: '{横田|よこた}さんが、{新|あたら}しいスタッフのマデさんに、{職場|しょくば}の{人|ひと}を{紹介|しょうかい}します。①は{主任|しゅにん}の{川崎|かわさき}さん。',
      setupPt: 'Yokota apresenta os colegas à nova funcionária Madê. ① Kawasaki, o chefe de seção.',
      lines: [
        { speaker: '横田', ja: 'マデさん、みんなを{紹介|しょうかい}しますね。こちらは、{主任|しゅにん}の{川崎|かわさき}さん。{仕事|しごと}のことは、{川崎|かわさき}さんに{聞|き}いてください。', pt: 'Madê, vou apresentar todo mundo. Este é o Kawasaki, o chefe de seção. Sobre o trabalho, pergunte a ele.' },
        { speaker: '川崎', ja: '{川崎|かわさき}です。よろしくお{願|ねが}いします。', pt: 'Sou o Kawasaki. Prazer.' },
      ],
    },
  ],
  '01-02': [
    {
      label: '② 渡辺さん (01-02)',
      setupPt: '② Watanabe — a pessoa há mais tempo na empresa.',
      lines: [
        { speaker: '横田', ja: 'こちらは、{渡辺|わたなべ}さん。この{会社|かいしゃ}では、いちばん{長|なが}いです。{何|なん}でも{知|し}ってるから、{会社|かいしゃ}のいろいろなことは、{渡辺|わたなべ}さんに{聞|き}いてください。', pt: 'Esta é a Watanabe. É a que está há mais tempo nesta empresa. Como sabe de tudo, sobre as coisas da empresa, pergunte a ela.' },
        { speaker: '渡辺', ja: '{渡辺|わたなべ}です。{私|わたし}でよかったら、いつでも{聞|き}いてください。', pt: 'Sou a Watanabe. Se eu puder ajudar, pergunte quando quiser.' },
      ],
    },
  ],
  '01-03': [
    {
      label: '③ 林さん (01-03)',
      setupPt: '③ Lin (Rin) — da China, trabalha aqui desde o ano passado.',
      lines: [
        { speaker: '横田', ja: 'こちらは{林|リン}さん。{林|リン}さんは{中国|ちゅうごく}{出身|しゅっしん}で、{去年|きょねん}からここで{働|はたら}いてます。{日本|にほん}の{生活|せいかつ}のこととか、いろいろ{聞|き}くといいです。', pt: 'Este é o Lin. Ele é da China e trabalha aqui desde o ano passado. Sobre a vida no Japão e outras coisas, vale a pena perguntar a ele.' },
        { speaker: '林', ja: '「{林|はやし}」と{書|か}いてリンです。よろしく。', pt: 'Escreve-se “林” (Hayashi) e lê-se Lin. Prazer.' },
      ],
    },
  ],
  '01-04': [
    {
      label: '④ 山下さん (01-04)',
      setupPt: '④ Yamashita — meio-período (パート); responsável por folgas e trâmites.',
      lines: [
        { speaker: '横田', ja: 'それから、こちらは、パートの{山下|やました}さん。{山下|やました}さんは、{毎日|まいにち}、{午後|ごご}3{時|じ}までで、{金曜日|きんようび}がお{休|やす}み。{休|やす}みとか、{手続|てつづ}きのことは、{山下|やました}さんが{担当|たんとう}です。', pt: 'E esta é a Yamashita, de meio-período. Trabalha todo dia até as 15h e folga às sextas. Folgas e trâmites são com ela.' },
        { speaker: '山下', ja: '{山下|やました}です。よろしくお{願|ねが}いします。', pt: 'Sou a Yamashita. Prazer.' },
      ],
    },
  ],
  '01-05': hoaSelfIntro,
  '01-06': hoaSelfIntro,
  '01-10': [
    {
      label: '① フィリピン・セブ (01-10)',
      setupJa: '4{人|にん}の{人|ひと}が、{出身地|しゅっしんち}について{話|はな}しています。',
      setupPt: 'Quatro pessoas falam sobre sua cidade natal. ① Cebu, Filipinas.',
      lines: [
        { speaker: 'A', ja: 'あのう、{出身|しゅっしん}は？', pt: 'Hum, de onde você é?' },
        { speaker: 'B', ja: 'フィリピンです。', pt: 'Das Filipinas.' },
        { speaker: 'A', ja: 'フィリピンのどこですか？', pt: 'De que parte das Filipinas?' },
        { speaker: 'B', ja: 'セブです。{有名|ゆうめい}な{観光地|かんこうち}です。{知|し}ってますか？', pt: 'De Cebu. É um ponto turístico famoso. Conhece?' },
        { speaker: 'A', ja: 'ああ、セブ{島|とう}？ {海|うみ}がきれいなところですね。', pt: 'Ah, a ilha de Cebu? É um lugar de mar bonito, né?' },
        { speaker: 'B', ja: 'はい。{観光客|かんこうきゃく}が{大勢|おおぜい}{来|き}ます。{日本|にほん}のお{客|きゃく}さんも{多|おお}いですよ。', pt: 'Sim. Vem muito turista. Vêm também muitos visitantes do Japão.' },
        { speaker: 'A', ja: '{日本|にほん}から、どのぐらいかかりますか？', pt: 'Quanto tempo leva do Japão?' },
        { speaker: 'B', ja: '{飛行機|ひこうき}で5{時間|じかん}ぐらいです。ぜひ、{一度|いちど}{行|い}ってみてください。', pt: 'Umas 5 horas de avião. Vá conhecer um dia!' },
      ],
    },
  ],
  '01-11': [
    {
      label: '② モンゴル・ウランバートル (01-11)',
      setupPt: '② Ulan Bator, Mongólia — capital, metrópole.',
      lines: [
        { speaker: 'A', ja: 'ポルさん、{出身|しゅっしん}は？', pt: 'Pol, de onde você é?' },
        { speaker: 'B', ja: 'モンゴルのウランバートルです。', pt: 'De Ulan Bator, na Mongólia.' },
        { speaker: 'A', ja: 'ああ、モンゴル！ じゃ、{写真|しゃしん}でよく{見|み}る、{白|しろ}くて{丸|まる}いテントに{住|す}んでるの？', pt: 'Ah, Mongólia! Então você mora naquelas tendas brancas e redondas que a gente vê em foto?' },
        { speaker: 'B', ja: '{違|ちが}います。ウランバートルは{首都|しゅと}だから、{都会|とかい}ですよ。{高|たか}いビルも{多|おお}いです。', pt: 'Não. Ulan Bator é a capital, então é uma metrópole. Tem muitos prédios altos também.' },
        { speaker: 'A', ja: 'へー、そうなんだ。', pt: 'Nossa, sei.' },
      ],
    },
  ],
  '01-12': [
    {
      label: '③ ベトナム・ホーチミン (01-12)',
      setupPt: '③ Ho Chi Minh, Vietnã — cidade grande, animada.',
      lines: [
        { speaker: 'A', ja: 'ニャンさんは、ベトナムのホーチミン{出身|しゅっしん}ですよね？', pt: 'Nyan, você é de Ho Chi Minh, no Vietnã, né?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: 'ホーチミンは、どんなところですか？', pt: 'Como é Ho Chi Minh?' },
        { speaker: 'B', ja: 'ベトナムの{南|みなみ}にある、とても{大|おお}きい{町|まち}です。', pt: 'É uma cidade muito grande, no sul do Vietnã.' },
        { speaker: 'A', ja: '{首都|しゅと}ですか？', pt: 'É a capital?' },
        { speaker: 'B', ja: 'いいえ、{首都|しゅと}ではないけど、とてもにぎやかです。{安|やす}くておいしいレストランがたくさんあります。とても、いいところです。', pt: 'Não, não é a capital, mas é muito animada. Tem muitos restaurantes baratos e gostosos. É um lugar muito bom.' },
        { speaker: 'A', ja: 'へー、{一度|いちど}{行|い}ってみたいですね。', pt: 'Nossa, queria conhecer um dia.' },
      ],
    },
  ],
  '01-13': [
    {
      label: '④ インドネシア・ウォノソボ (01-13)',
      setupPt: '④ Wonosobo, Indonésia — cidade de planalto, com plantações de chá.',
      lines: [
        { speaker: 'A', ja: 'サンティさんは、インドネシアのどちらからですか？', pt: 'Santi, de que parte da Indonésia você é?' },
        { speaker: 'B', ja: 'ウォノソボという{町|まち}から{来|き}ました。', pt: 'Vim de uma cidade chamada Wonosobo.' },
        { speaker: 'A', ja: 'ウォノソボ？ どこにあるんですか？', pt: 'Wonosobo? Onde fica?' },
        { speaker: 'B', ja: 'ジャワ{島|とう}に、ジョグジャカルタという{大|おお}きい{町|まち}があります。そこから、バスで4{時間|じかん}ぐらいです。', pt: 'Na ilha de Java tem uma cidade grande chamada Yogyakarta. De lá, são umas 4 horas de ônibus.' },
        { speaker: 'A', ja: 'へー、どんなところですか？', pt: 'Nossa, como é o lugar?' },
        { speaker: 'B', ja: 'そうですね。{高原|こうげん}の{町|まち}です。お{茶|ちゃ}の{畑|はたけ}がたくさんあって、のんびりしています。', pt: 'Bem… é uma cidade de planalto. Tem muitas plantações de chá e é bem pacata.' },
        { speaker: 'A', ja: 'ふーん。', pt: 'Hmm, entendi.' },
      ],
    },
  ],
  '01-16': [
    {
      label: '会話 — 出身地について (01-16)',
      setupPt: 'Modelo de conversa para falar sobre a cidade natal.',
      lines: [
        { speaker: 'A', ja: '{出身|しゅっしん}はどちらですか？', pt: 'De onde você é?' },
        { speaker: 'B', ja: 'ベトナムのホーチミン（という{町|まち}）です。', pt: 'Sou de (uma cidade chamada) Ho Chi Minh, no Vietnã.' },
        { speaker: 'A', ja: 'ホーチミンは、どんなところですか？', pt: 'Como é Ho Chi Minh?' },
        { speaker: 'B', ja: 'とても{大|おお}きい{町|まち}です。{安|やす}くておいしいレストランがたくさんあって、にぎやかです。', pt: 'É uma cidade muito grande. Tem muitos restaurantes baratos e gostosos, e é animada.' },
        { speaker: 'A', ja: 'どこにありますか？', pt: 'Onde fica?' },
        { speaker: 'B', ja: 'ベトナムの{南|みなみ}にあります。', pt: 'Fica no sul do Vietnã.' },
        { speaker: 'A', ja: '{日本|にほん}からどのぐらいかかりますか？', pt: 'Quanto tempo leva do Japão?' },
        { speaker: 'B', ja: '{飛行機|ひこうき}で6{時間|じかん}{半|はん}ぐらいです。', pt: 'Cerca de 6 horas e meia de avião.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é mesmo?' },
      ],
    },
  ],
}

const lesson1: Section = {
  id: 'lesson-1',
  level: 'elementary2',
  titleJa: '第1課 先週、日本に来たばかりです',
  titlePt: 'Lição 1 — Acabei de chegar ao Japão na semana passada',
  summaryPt:
    'As pessoas ao meu redor · entender a apresentação da equipe num novo trabalho (主任／パート／担当), fazer uma autoapresentação detalhada (〜と申します／「花」という意味です／先週、日本に来たばかりです／ホテルで働いていました) e falar da cidade natal (出身／とても大きい町です／ベトナムの南／飛行機で6時間半).',
  studyNotes: [
    {
      title: 'Tópico: As pessoas ao meu redor (私の周りの人たち)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Entender o nome e a função dos colegas quando lhe apresentam a equipe num novo trabalho.\n' +
        '- Fazer uma autoapresentação um pouco mais detalhada ao se cumprimentar pela primeira vez.\n' +
        '- Falar de forma simples sobre sua cidade natal.\n' +
        '- Escrever uma autoapresentação simples numa rede social.\n\n' +
        '💡 1ª lição do **初級2 (Elementary 2, A2)**. Pergunta de abertura: {日本|にほん}に{来|き}たとき、どんなことを{話|はな}すと{自分|じぶん}のことをよくわかってもらえると{思|おも}いますか？ (o que dizer para que entendam bem quem você é?). Personagem: グエン・ティ・ホア (Hoa), recém-chegada de ダナン (Da Nang), Vietnã.',
    },
    {
      title: 'N1 という N2 (➊)',
      bodyPt:
        'Usa-se **「N1 という N2」** para apresentar/explicar algo que o ouvinte talvez não conheça ou ouça pela primeira vez:\n\n' +
        '- `ホアは「{花|はな}」という{意味|いみ}です` = “Hoa” quer dizer “flor”.\n' +
        '- Também em `〜という{町|まち}` (uma cidade chamada ~), `〜という{店|みせ}` (uma loja chamada ~), `〜という{人|ひと}` (uma pessoa chamada ~).\n\n' +
        '【例】`ベトナムのダナンという{町|まち}から{来|き}ました` (vim de uma cidade chamada Da Nang). · `{今|いま}は、「{東京|とうきょう}イン」というホテルで{働|はたら}いています` (trabalho num hotel chamado Tokyo Inn).',
    },
    {
      title: 'V- たばかりです — “acabei de…” (➋)',
      bodyPt:
        '**V(forma タ) + ばかりです** indica que **passou pouco tempo** desde que algo aconteceu:\n\n' +
        '- `{先週|せんしゅう}、{日本|にほん}に{来|き}たばかりです` = acabei de chegar ao Japão na semana passada.\n' +
        '- Liga-se à **forma タ** (passado): {来|き}た→{来|き}たばかり, {始|はじ}めた→{始|はじ}めたばかり, {着|つ}いた→{着|つ}いたばかり.\n\n' +
        '【例】A: `{日本語|にほんご}はもう{習|なら}いましたか？` B: `いいえ、{最近|さいきん}、{始|はじ}めたばかりです` (não, comecei agora há pouco). · `さっき{空港|くうこう}に{着|つ}いたばかりです` (acabei de chegar ao aeroporto).',
    },
    {
      title: 'V- ていました — situação no passado (➌)',
      bodyPt:
        'No **初級1** vimos **V-ています** para situação atual ({働|はたら}いています = trabalho / estou trabalhando).\n\n' +
        '**V- ていました** expressa uma **situação no passado** — aqui, a ocupação que se tinha num certo período:\n\n' +
        '- `ベトナムでは、ホテルで{働|はたら}いていました` = no Vietnã, eu trabalhava num hotel.\n\n' +
        '【例】A: `{国|くに}ではどんな{仕事|しごと}をしていましたか？` (que trabalho fazia no seu país?) B: `ツアーガイドの{仕事|しごと}をしていました` (eu era guia turístico).',
    },
    {
      title: 'それ／そこ — referência ao que já se disse (文脈指示) (➍)',
      bodyPt:
        'No **入門** vimos それ／そこ apontando algo perto do ouvinte. Aqui, それ／そこ retomam **algo já mencionado na conversa** (uso “de contexto”, 文脈指示):\n\n' +
        '- `ジャワ{島|とう}に、ジョグジャカルタという{大|おお}きい{町|まち}があります。ウォノソボは、そこから、バスで4{時間|じかん}ぐらいです` → **そこ** = Yogyakarta (citada antes).\n\n' +
        '【例】A: `{私|わたし}の{町|まち}は、ストロマトライトが{有名|ゆうめい}です` B: `それは{何|なん}ですか？` (o que é isso?).',
    },
    {
      title: 'Unir duas frases: 〜て / 〜から / 〜けど (➎)',
      bodyPt:
        'Três conectivos para **juntar duas frases numa só** (2つの{文|ぶん}を1つにする):\n\n' +
        '- **〜て** — encadeia ou dá causa/motivo: `お{茶|ちゃ}の{畑|はたけ}がたくさんあって、のんびりしています` (há muitas plantações de chá, e é pacato).\n' +
        '- **〜から** — porque / já que (motivo): `ウランバートルは{首都|しゅと}だから、{都会|とかい}です` (como Ulan Bator é a capital, é uma metrópole).\n' +
        '- **〜けど** — mas / embora (contraste): `{首都|しゅと}ではないけど、とてもにぎやかです` (não é a capital, mas é muito animada).\n\n' +
        '💡 〜から e 〜けど ligam-se à forma polida OU comum ({首都|しゅと}だから／{首都|しゅと}だけど) e podem unir frases de sinal oposto (afirmativa + negativa). (文法ノート ❺)',
    },
    {
      title: 'Vocabulário, Kanji e expressões',
      bodyPt:
        '**Apresentar a equipe:** {紹介|しょうかい}する (apresentar), {主任|しゅにん} (chefe de seção), パート (meio-período), この{会社|かいしゃ}でいちばん{長|なが}い (o mais antigo na empresa), 〜が{担当|たんとう}です (~ é o responsável), {手続|てつづ}き (trâmites).\n\n' +
        '**Autoapresentação:** 〜と{申|もう}します (humilde de 〜といいます), 〜と{呼|よ}んでください (chame-me de ~), {出身|しゅっしん} (origem/naturalidade), {趣味|しゅみ} (hobby), {一生懸命|いっしょうけんめい} (com todo empenho), がんばります (vou me esforçar).\n\n' +
        '**Cidade natal:** {方位|ほうい} = {北|きた}／{南|みなみ}／{東|ひがし}／{西|にし}. Natureza: {山|やま}, {川|かわ}, {海|うみ}, {島|しま}, {森|もり}, {草原|そうげん}, {砂漠|さばく}, {高原|こうげん}. Cidade: {大|おお}きい{町|まち}, にぎやか, {都会|とかい}, {観光地|かんこうち}, {観光客|かんこうきゃく}, {首都|しゅと}.\n\n' +
        '**Kanji da lição:** {山|やま}, {川|かわ}, {海|うみ}, {島|しま}, {森|もり}, {客|きゃく}, {観光地|かんこうち}, {意味|いみ}, {経験|けいけん}.',
    },
  ],
  groups: [lesson1Group],
  audios: attachScripts(1, L1_SCRIPTS),
}

// ---- Lição 2: まじめそうな人ですね (tópico 私の周りの人たち) -------------------
const lesson2Group: ExerciseGroup = {
  id: 'iro-e2-l2',
  title: 'まじめそうな人ですね',
  subtitlePt: 'Descrever/identificar pessoas pela aparência e pelo jeito · falar de um famoso de quem você gosta',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l2-1', number: 1, prompt: '「{江口|えぐち}さんは、{髪|かみ}が{短|みじか}いです」 — o padrão 「N1 は N2 が ＡＤＪ です」 serve para:', choices: [{ n: 1, text: 'descrever uma característica da pessoa (N1) por meio de uma parte/traço (N2)' }, { n: 2, text: 'comparar dois lugares' }, { n: 3, text: 'pedir um favor' }, { n: 4, text: 'falar do futuro' }], answer: 1, explanationPt: 'N1 = pessoa, N2 = parte do corpo/traço: {髪|かみ}が{長|なが}い／{短|みじか}い, {背|せ}が{高|たか}い／{低|ひく}い. Visto no 初級1 (田中さんは{目|め}が{大|おお}きいです). (文法ノート ❶)' },
    { id: 'iro-e2-l2-2', number: 2, prompt: 'Para transformar a característica em qualificador de pessoa («a pessoa de cabelo curto»), diz-se:', choices: [{ n: 1, text: '{髪|かみ}が{短|みじか}い{人|ひと} / {背|せ}が{高|たか}い{人|ひと}' }, { n: 2, text: '{人|ひと}は{髪|かみ}が{短|みじか}いです' }, { n: 3, text: '{髪|かみ}の{短|みじか}くて{人|ひと}' }, { n: 4, text: '{短|みじか}い{髪|かみ}を{人|ひと}' }], answer: 1, explanationPt: '〜です vira forma comum + {人|ひと}: {髪|かみ}が{短|みじか}い{人|ひと} (a pessoa de cabelo curto), {背|せ}が{高|たか}い{人|ひと} (a pessoa alta). (文法ノート ❶)' },
    { id: 'iro-e2-l2-3', number: 3, prompt: '「ナインさんは、{帽子|ぼうし}をかぶっている{人|ひと}です」 — 「V- ている + {人|ひと}」 expressa:', choices: [{ n: 1, text: 'a pessoa que está (de chapéu / fazendo algo) — descreve aparência ou ação' }, { n: 2, text: 'a pessoa que vai fazer algo amanhã' }, { n: 3, text: 'a pessoa que já foi embora' }, { n: 4, text: 'um pedido para usar chapéu' }], answer: 1, explanationPt: 'V-ている na forma comum qualifica {人|ひと}: {帽子|ぼうし}をかぶっている{人|ひと} (a pessoa de chapéu), コピーをしている{人|ひと} (a pessoa tirando cópia). (文法ノート ❷)' },
    { id: 'iro-e2-l2-4', number: 4, prompt: 'O 「V- ている」 tem dois usos. Quais são?', choices: [{ n: 1, text: '① estado resultante de uma ação ({帽子|ぼうし}をかぶっている = está de chapéu) · ② ação em andamento (コピーをしている = está tirando cópia)' }, { n: 2, text: '① futuro · ② passado' }, { n: 3, text: '① ordem · ② proibição' }, { n: 4, text: '① pergunta · ② resposta' }], answer: 1, explanationPt: '①状態 (resultado de uma ação: vestir → estar vestido — roupa/acessório: {着|き}ている, はいている, かけている). ②動作の進行 (ação em curso: コピーをしている, {本|ほん}を{読|よ}んでいる). (文法ノート ❷)' },
    { id: 'iro-e2-l2-5', number: 5, prompt: '「{原|はら}さんは、…{本|ほん}を{読|よ}んでいる{人|ひと}ですよ」 — a partícula final 「よ」 serve para:', choices: [{ n: 1, text: 'dar/enfatizar uma informação nova ao ouvinte' }, { n: 2, text: 'pedir desculpa' }, { n: 3, text: 'fazer uma pergunta' }, { n: 4, text: 'negar' }], answer: 1, explanationPt: '文末の「よ」 transmite informação nova que o ouvinte ainda não sabe (visto no 入門). (文法ノート ❸)' },
    { id: 'iro-e2-l2-6', number: 6, prompt: 'E a partícula final 「ね」 (ex.: 「まじめそうな{人|ひと}ですね」) serve para:', choices: [{ n: 1, text: 'buscar concordância/empatia ou confirmar algo com o ouvinte' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'indicar passado' }, { n: 4, text: 'contar quantidade' }], answer: 1, explanationPt: '「ね」 pede concordância/confirmação ou expressa empatia (入門). Compare: ですよ (informo) × ですね (não é? / concordamos). (文法ノート ❸)' },
    { id: 'iro-e2-l2-7', number: 7, prompt: '「{演技|えんぎ}が{上手|じょうず}だし、{本当|ほんとう}にかっこいいです」 — 「S し、〜」 serve para:', choices: [{ n: 1, text: 'enumerar razões/motivos de uma opinião (é bom em atuar, E ainda por cima é bonito)' }, { n: 2, text: 'comparar dois lugares' }, { n: 3, text: 'marcar condição (se…)' }, { n: 4, text: 'pedir permissão' }], answer: 1, explanationPt: '〜し lista razões/fundamentos de uma impressão. 【例】かっこいいし、{歌|うた}もダンスも{上手|じょうず}だし (é bonito, e canta e dança bem). (文法ノート ❹)' },
    { id: 'iro-e2-l2-8', number: 8, prompt: 'Que característica esta pessoa tem?', image: `${IMG}/Z_02_1_01_kamiganagai.png`, imageAlt: 'mulher de cabelo comprido', choices: [{ n: 1, text: '{髪|かみ}が{長|なが}い (cabelo comprido)' }, { n: 2, text: '{髪|かみ}が{短|みじか}い (cabelo curto)' }, { n: 3, text: '{背|せ}が{高|たか}い (alta)' }, { n: 4, text: 'ひげをはやしている (tem barba)' }], answer: 1, explanationPt: '{髪|かみ}が{長|なが}い = (ter) cabelo comprido. (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-9', number: 9, prompt: 'Que característica esta pessoa tem?', image: `${IMG}/Z_02_1_02_kamigamijikai.png`, imageAlt: 'mulher de cabelo curto', choices: [{ n: 1, text: '{髪|かみ}が{短|みじか}い (cabelo curto)' }, { n: 2, text: '{髪|かみ}が{長|なが}い (cabelo comprido)' }, { n: 3, text: 'めがねをかけている (usa óculos)' }, { n: 4, text: '{背|せ}が{低|ひく}い (baixa)' }], answer: 1, explanationPt: '{髪|かみ}が{短|みじか}い = (ter) cabelo curto. (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-10', number: 10, prompt: 'O que esta ilustração (com a régua de altura) mostra?', image: `${IMG}/Z_02_1_03_segatakai.png`, imageAlt: 'homem alto ao lado de régua de 190 cm', choices: [{ n: 1, text: '{背|せ}が{高|たか}い (ser alto)' }, { n: 2, text: '{背|せ}が{低|ひく}い (ser baixo)' }, { n: 3, text: '{座|すわ}っている (estar sentado)' }, { n: 4, text: '{髪|かみ}が{長|なが}い (cabelo comprido)' }], answer: 1, explanationPt: '{背|せ}が{高|たか}い = ser alto (de estatura). Oposto: {背|せ}が{低|ひく}い. (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-11', number: 11, prompt: 'Que ação/estado esta ilustração mostra?', image: `${IMG}/Z_02_1_04_suwaru.png`, imageAlt: 'mulher sentada numa cadeira', choices: [{ n: 1, text: '{座|すわ}っている ({座|すわ}る — estar sentado)' }, { n: 2, text: '{立|た}っている ({立|た}つ — estar em pé)' }, { n: 3, text: 'くつをはいている (calçar sapato)' }, { n: 4, text: '{歩|ある}いている (estar andando)' }], answer: 1, explanationPt: '{座|すわ}っている = estar sentado (de {座|すわ}る, V-ている = estado). (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-12', number: 12, prompt: 'Que ação/estado esta ilustração mostra?', image: `${IMG}/Z_02_1_05_tatsu.png`, imageAlt: 'mulher em pé', choices: [{ n: 1, text: '{立|た}っている ({立|た}つ — estar em pé)' }, { n: 2, text: '{座|すわ}っている ({座|すわ}る — estar sentado)' }, { n: 3, text: '{泣|な}いている (estar chorando)' }, { n: 4, text: '{寝|ね}ている (estar deitado/dormindo)' }], answer: 1, explanationPt: '{立|た}っている = estar em pé (de {立|た}つ). (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-13', number: 13, prompt: 'O que esta mulher está usando/fazendo? (escolha a descrição correta)', image: `${IMG}/Z_02_1_06_josee.png`, imageAlt: 'mulher de chapéu, vestido amarelo, brincos e sapatos', choices: [{ n: 1, text: '{帽子|ぼうし}をかぶっている・ワンピースを{着|き}ている・ピアスをしている (chapéu, vestido, brincos)' }, { n: 2, text: 'めがねをかけている・ネクタイをしている (óculos e gravata)' }, { n: 3, text: 'ひげをはやしている (tem barba)' }, { n: 4, text: 'ズボンをはいている・シャツを{着|き}ている (calça e camisa)' }], answer: 1, explanationPt: '{帽子|ぼうし}をかぶる (pôr chapéu), ワンピースを{着|き}る (vestir vestido), ピアスをする (pôr brinco), くつをはく (calçar sapato). (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-14', number: 14, prompt: 'O que este homem está usando? (escolha a descrição correta)', image: `${IMG}/Z_02_1_07_dansee.png`, imageAlt: 'homem de óculos, barba, camisa branca e gravata azul', choices: [{ n: 1, text: 'めがねをかけている・ひげをはやしている・ネクタイをしている (óculos, barba, gravata)' }, { n: 2, text: 'ワンピースを{着|き}ている・ピアスをしている (vestido e brincos)' }, { n: 3, text: '{帽子|ぼうし}をかぶっている (está de chapéu)' }, { n: 4, text: '{座|すわ}っている (está sentado)' }], answer: 1, explanationPt: 'めがねをかける (usar óculos), ひげをはやす (deixar barba), ネクタイをする (pôr gravata), シャツを{着|き}る, ズボンをはく. (Atividade 1 · ことばの準備)' },
    { id: 'iro-e2-l2-15', number: 15, prompt: 'Qual verbo combina com cada item de vestuário?', choices: [{ n: 1, text: 'シャツ・ワンピース→{着|き}る / くつ・ズボン→はく / {帽子|ぼうし}→かぶる / めがね→かける / ネクタイ・ピアス→する' }, { n: 2, text: 'tudo usa apenas {着|き}る' }, { n: 3, text: 'シャツ→はく / くつ→かぶる / {帽子|ぼうし}→{着|き}る' }, { n: 4, text: 'めがね→はく / ズボン→かける' }], answer: 1, explanationPt: 'Verbos de vestir: {着|き}る (tronco: camisa/vestido), はく (pernas/pés: calça/sapato), かぶる (cabeça: chapéu), かける (óculos), する (gravata/brinco/acessórios). (Atividade 1)' },
    { id: 'iro-e2-l2-16', number: 16, prompt: '「{写真|しゃしん}はまじめそうですけど、{本当|ほんとう}はおもしろい{人|ひと}です」 — 「〜そう」 (まじめそう) significa:', choices: [{ n: 1, text: 'aparenta ser ~ / parece ~ (impressão pela aparência)' }, { n: 2, text: 'definitivamente é ~' }, { n: 3, text: 'quer ser ~' }, { n: 4, text: 'foi ~ no passado' }], answer: 1, translationPt: 'Na foto parece sério, mas na verdade é uma pessoa divertida.', explanationPt: '〜そう (visto no 初級1 第12課) = dar a impressão de ~. まじめそう = parece sério; こわそう = parece assustador; うれしそう = parece feliz. (形に注目)' },
    { id: 'iro-e2-l2-17', number: 17, prompt: 'Os adjetivos de jeito/personalidade 「やさしい／こわい／まじめ（な）／おもしろい」 significam:', choices: [{ n: 1, text: 'gentil / assustador(a) (severo) / sério(a) / divertido(a)' }, { n: 2, text: 'alto / baixo / magro / gordo' }, { n: 3, text: 'caro / barato / novo / velho' }, { n: 4, text: 'norte / sul / leste / oeste' }], answer: 1, explanationPt: 'やさしい gentil, こわい assustador/temível, まじめ（な） sério/aplicado, おもしろい divertido/interessante. Também: うれしい (feliz), さびしい (solitário), {元気|げんき}（な） (animado). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l2-18', number: 18, prompt: '「{見|み}た{目|め}はこわそうだけど、やさしい{人|ひと}です」 significa:', choices: [{ n: 1, text: 'pela aparência parece assustador, mas é uma pessoa gentil' }, { n: 2, text: 'é assustador e também rude' }, { n: 3, text: 'é bonito e gentil' }, { n: 4, text: 'parece gentil, mas é assustador' }], answer: 1, explanationPt: '{見|み}た{目|め} = aparência. こわそうだけど (parece temível, MAS) + やさしい{人|ひと} (pessoa gentil). 〜けど marca o contraste. (Atividade 2)' },
    { id: 'iro-e2-l2-19', number: 19, prompt: '聴解 02-03: 「{加藤|かとう}さん」 é identificado como qual pessoa?', context: 'Ｂ：ほら、あそこで、コピーをしてる{人|ひと}です。', choices: [{ n: 1, text: 'A pessoa que está tirando cópia ali.' }, { n: 2, text: 'A pessoa de chapéu vermelho.' }, { n: 3, text: 'A pessoa sentada lendo um livro.' }, { n: 4, text: 'A pessoa alta de óculos.' }], answer: 1, explanationPt: 'コピーをしてる{人|ひと} = a pessoa tirando cópia (V-ている, ação em curso). (聴解 02-03)' },
    { id: 'iro-e2-l2-20', number: 20, prompt: '聴解 02-04: como 「{江口|えぐち}さん」 é descrito?', context: 'Ｂ：あの{髪|かみ}が{短|みじか}くて、ひげをはやしてる{人|ひと}です。', choices: [{ n: 1, text: 'A pessoa de cabelo curto e com barba.' }, { n: 2, text: 'A pessoa de cabelo comprido.' }, { n: 3, text: 'A pessoa de vestido amarelo.' }, { n: 4, text: 'A pessoa que está sentada.' }], answer: 1, explanationPt: '{髪|かみ}が{短|みじか}くて (cabelo curto, 〜くて liga adjetivos) + ひげをはやしてる (com barba). (聴解 02-04)' },
    { id: 'iro-e2-l2-21', number: 21, prompt: '聴解 02-05: 「{原|はら}さん」 é qual pessoa?', context: 'Ｂ：ああ、{座|すわ}って、{本|ほん}を{読|よ}んでる{人|ひと}ですよ。Ａ：ああ、あの{男|おとこ}の{人|ひと}ですね。', choices: [{ n: 1, text: 'O homem que está sentado lendo um livro.' }, { n: 2, text: 'A mulher de cabelo comprido.' }, { n: 3, text: 'A pessoa tirando cópia.' }, { n: 4, text: 'A pessoa de chapéu.' }], answer: 1, explanationPt: '{座|すわ}って、{本|ほん}を{読|よ}んでる{人|ひと} (sentado, lendo livro); あの{男|おとこ}の{人|ひと} (aquele homem). (聴解 02-05)' },
    { id: 'iro-e2-l2-22', number: 22, prompt: '聴解 02-06: como 「ナインさん」 é localizado?', context: 'Ｂ：ナインさん？ あの{帽子|ぼうし}をかぶってる{人|ひと}ですよ。Ａ：ああ、あの{赤|あか}いジャンパーの{人|ひと}ですね。', choices: [{ n: 1, text: 'A pessoa de chapéu, com a jaqueta (jumper) vermelha.' }, { n: 2, text: 'A pessoa de gravata azul.' }, { n: 3, text: 'A pessoa sentada lendo.' }, { n: 4, text: 'A pessoa de cabelo curto e barba.' }], answer: 1, explanationPt: '{帽子|ぼうし}をかぶってる{人|ひと} (de chapéu) + {赤|あか}いジャンパー (jaqueta vermelha). (聴解 02-06)' },
    { id: 'iro-e2-l2-23', number: 23, prompt: '会話 02-09 (modelo «explicar qual pessoa é»): como se descreve 「{加藤|かとう}さん」?', context: 'Ｂ：あそこでコピーをしている{人|ひと}です。あの{髪|かみ}が{短|みじか}くて、ひげをはやしている{人|ひと}です。', choices: [{ n: 1, text: 'A pessoa que está tirando cópia ali — de cabelo curto e barba.' }, { n: 2, text: 'A pessoa de vestido amarelo e chapéu.' }, { n: 3, text: 'A pessoa alta sentada.' }, { n: 4, text: 'A pessoa de gravata.' }], answer: 1, explanationPt: 'Modelo de identificação juntando ação (コピーをしている) + aparência ({髪|かみ}が{短|みじか}くて、ひげをはやしている). (会話 02-09)' },
    { id: 'iro-e2-l2-24', number: 24, prompt: '聴解 02-11: o que se diz da pessoa da foto (o(a) namorado(a), {恋人|こいびと})?', context: 'Ｂ：{写真|しゃしん}はまじめそうですけど、{本当|ほんとう}はおもしろい{人|ひと}ですよ。', choices: [{ n: 1, text: 'Na foto parece sério, mas na verdade é uma pessoa divertida.' }, { n: 2, text: 'É um bebê muito fofo.' }, { n: 3, text: 'Parece gentil, mas é severo no trabalho.' }, { n: 4, text: 'Anda muito ocupado ultimamente.' }], answer: 1, explanationPt: '{恋人|こいびと} = namorado(a). まじめそう (parece sério) けど、{本当|ほんとう}はおもしろい (mas na verdade é divertido). (聴解 02-11)' },
    { id: 'iro-e2-l2-25', number: 25, prompt: '聴解 02-12: por que 「{山本|やまもと}さん」 está feliz e como é o bebê?', context: 'Ｂ：この{間|あいだ}、{孫|まご}が{生|う}まれたんです。…Ａ：{元気|げんき}そうな{赤|あか}ちゃんですね。Ｂ：…{毎日|まいにち}、{夜|よる}{泣|な}いて、{大変|たいへん}ですけどね。', choices: [{ n: 1, text: 'Nasceu o neto ({孫|まご}); o bebê parece saudável, mas chora à noite (é puxado).' }, { n: 2, text: 'Ganhou um prêmio; o bebê é calmo.' }, { n: 3, text: 'Casou; não tem filhos.' }, { n: 4, text: 'Comprou um cachorro.' }], answer: 1, explanationPt: '{孫|まご} = neto(a) (filho do filho). {元気|げんき}そうな{赤|あか}ちゃん (bebê que parece saudável); {夜|よる}{泣|な}いて{大変|たいへん} (chora à noite, é difícil). (聴解 02-12)' },
    { id: 'iro-e2-l2-26', number: 26, prompt: '聴解 02-13: como é 「{村田|むらた}さん」 (que virou {主任|しゅにん})?', context: 'Ｂ：{見|み}た{目|め}はこわそうだけど、やさしい{人|ひと}だよ。…でも、{仕事|しごと}のときは、きびしいけどね。', choices: [{ n: 1, text: 'Parece assustador, mas é gentil — embora seja rígido no trabalho.' }, { n: 2, text: 'É divertido e nada exigente.' }, { n: 3, text: 'É tímido e quieto.' }, { n: 4, text: 'Está sempre ocupado.' }], answer: 1, explanationPt: '{見|み}た{目|め}はこわそうだけど、やさしい (parece temível, mas é gentil); {仕事|しごと}のときはきびしい (no trabalho é rígido). (聴解 02-13)' },
    { id: 'iro-e2-l2-27', number: 27, prompt: '聴解 02-14: o que se comenta sobre 「{小川|おがわ}さん」?', context: 'Ａ：{最近|さいきん}、とっても{忙|いそが}しそうですね。Ｂ：{毎日|まいにち}、{遅|おそ}くまで{仕事|しごと}を…{仕事|しごと}がとても{多|おお}いと{言|い}ってました。Ａ：…{心配|しんぱい}ですね。', choices: [{ n: 1, text: 'Anda muito ocupado(a), trabalha até tarde todo dia; tem muito trabalho (preocupante).' }, { n: 2, text: 'Está de férias e descansando.' }, { n: 3, text: 'Mudou de emprego.' }, { n: 4, text: 'Está sempre alegre e tranquilo.' }], answer: 1, explanationPt: '{忙|いそが}しそう (parece ocupado), {遅|おそ}くまで{仕事|しごと} (trabalha até tarde), {心配|しんぱい} (preocupante). (聴解 02-14)' },
    { id: 'iro-e2-l2-28', number: 28, prompt: '会話 02-16/02-17 (modelos): qual estrutura aparece ao falar de alguém ausente?', context: '①Ｂ：{写真|しゃしん}はまじめそうですけど、{本当|ほんとう}はおもしろい{人|ひと}です。 ②Ｂ：{見|み}た{目|め}はこわそうだけど、やさしい{人|ひと}です。', choices: [{ n: 1, text: '«aparência (〜そう) + けど + como a pessoa realmente é» — contraste entre o que parece e o que é.' }, { n: 2, text: 'só perguntas sobre preço.' }, { n: 3, text: 'instruções de como chegar a um lugar.' }, { n: 4, text: 'pedidos de desculpa.' }], answer: 1, explanationPt: 'Modelo: まじめそう／こわそう (impressão) + けど + {本当|ほんとう}は…／やさしい{人|ひと} (realidade). (会話 02-16/02-17)' },
    { id: 'iro-e2-l2-29', number: 29, prompt: '聴解 02-18: por que 樋田 (Hida) gosta de 「{安室|あむろ}{奈美恵|なみえ}」 e o que se diz dela?', context: 'Ｂ：…かっこいいし、{歌|うた}もダンスも{上手|じょうず}だし。…テレビで{見|み}て、{好|す}きになりました。（マイク：でも、{引退|いんたい}したよね。）', choices: [{ n: 1, text: 'É bonita e canta e dança bem; gostou ao vê-la na TV. Já se aposentou (引退), mas ele ainda gosta.' }, { n: 2, text: 'É atriz de cinema antigo; gosta por causa de um filme.' }, { n: 3, text: 'É uma colega de trabalho.' }, { n: 4, text: 'Ele não gosta de cantores.' }], answer: 1, explanationPt: '{安室|あむろ}{奈美恵|なみえ} = cantora. かっこいいし、{歌|うた}もダンスも{上手|じょうず}だし (〜し lista razões). {引退|いんたい}する = aposentar-se. きっかけ: テレビで{見|み}て. (聴解 02-18 · 文法 ❹)' },
    { id: 'iro-e2-l2-30', number: 30, prompt: '聴解 02-18: por que マイク (Mike) gosta de 「{三船|みふね}{敏郎|としろう}」?', context: 'マイク：…{好|す}きになったきっかけは、{映画|えいが}{祭|さい}で「{七人|しちにん}の{侍|さむらい}」という{映画|えいが}を{見|み}たことです。{演技|えんぎ}が{上手|じょうず}だし、{本当|ほんとう}にかっこいいんです。', choices: [{ n: 1, text: 'É um ator japonês famoso; gostou ao ver o filme «Os Sete Samurais» num festival — atua bem e é muito atraente.' }, { n: 2, text: 'É um cantor de J-POP atual.' }, { n: 3, text: 'É um jogador de futebol.' }, { n: 4, text: 'É um youtuber.' }], answer: 1, explanationPt: '{三船|みふね}{敏郎|としろう} = ator. きっかけ: {映画|えいが}{祭|さい}で「{七人|しちにん}の{侍|さむらい}」を{見|み}たこと. {演技|えんぎ}が{上手|じょうず}だし、かっこいい. (聴解 02-18)' },
    { id: 'iro-e2-l2-31', number: 31, prompt: '会話 02-20 (modelo «falar do famoso favorito»): como se diz o motivo (きっかけ) de ter começado a gostar?', context: 'Ｂ：…{好|す}きになったきっかけは、「{七人|しちにん}の{侍|さむらい}」という{映画|えいが}を{見|み}たことです。／「{七人|しちにん}の{侍|さむらい}」という{映画|えいが}を{見|み}て、{好|す}きになりました。', choices: [{ n: 1, text: '«きっかけは、〜を{見|み}たことです» ou «〜を{見|み}て、{好|す}きになりました» — o que te fez começar a gostar.' }, { n: 2, text: 'só dizendo o preço do ingresso.' }, { n: 3, text: 'pedindo para repetir.' }, { n: 4, text: 'recusando um convite.' }], answer: 1, explanationPt: 'きっかけ = o estopim/motivo inicial. Padrões: 〜きっかけは…ことです / 〜を{見|み}て、{好|す}きになりました. (会話 02-20)' },
    { id: 'iro-e2-l2-32', number: 32, prompt: 'Vocabulário (Atividade 3) — 「かっこいい／かわいい／{歌|うた}が{上手|じょうず}／{演技|えんぎ}が{上手|じょうず}／ダンスが{上手|じょうず}」 significam:', choices: [{ n: 1, text: 'estiloso(a)/atraente / fofo(a) / canta bem / atua bem / dança bem' }, { n: 2, text: 'feio / velho / lento / fraco / pobre' }, { n: 3, text: 'alto / baixo / magro / gordo / careca' }, { n: 4, text: 'caro / barato / longe / perto / grande' }], answer: 1, explanationPt: 'かっこいい (estiloso/charmoso), かわいい (fofo), {歌|うた}／{演技|えんぎ}／ダンスが{上手|じょうず} (bom em cantar/atuar/dançar). (Atividade 3 · ことばの準備)' },
    { id: 'iro-e2-l2-33', number: 33, prompt: 'Vocabulário — 「きっかけ／{引退|いんたい}する／{映画|えいが}{祭|さい}／{世界中|せかいじゅう}／ファン」 significam:', choices: [{ n: 1, text: 'estopim/motivo inicial / aposentar-se / festival de cinema / no mundo todo / fã' }, { n: 2, text: 'ingresso / estrear / cinema / cidade / ator' }, { n: 3, text: 'ensaio / cantar / palco / país / diretor' }, { n: 4, text: 'hobby / dançar / show / bairro / plateia' }], answer: 1, explanationPt: 'きっかけ (gatilho/motivo), {引退|いんたい}する (aposentar-se), {映画|えいが}{祭|さい} (festival de cinema), {世界中|せかいじゅう} (no mundo inteiro), ファン (fã). (Atividade 3)' },
    { id: 'iro-e2-l2-34', number: 34, prompt: '読む (entrevista «{町|まち}のおとなりさん», モウ・モウ・アウンさん): de onde ela é e o que faz no Japão?', context: 'ミャンマーのヤンゴンから{来|き}たモウ・モウ・アウンと{申|もう}します。{先月|せんげつ}、{日本|にほん}に{来|き}たばかりです。{介護|かいご}の{仕事|しごと}をしています。', choices: [{ n: 1, text: 'É de Yangon (Mianmar), chegou no mês passado e trabalha com cuidados a idosos (介護).' }, { n: 2, text: 'É do Vietnã e é guia turística.' }, { n: 3, text: 'É do Japão e estuda birmanês.' }, { n: 4, text: 'É da China e trabalha numa fábrica.' }], answer: 1, explanationPt: 'ヤンゴンから{来|き}た, {先月|せんげつ}{来|き}たばかり (acabou de chegar — 文法 ❷ da L1), {介護|かいご}の{仕事|しごと}. (Atividade 4 · 読む)' },
    { id: 'iro-e2-l2-35', number: 35, prompt: '読む: como モウさん descreve sua cidade natal, ヤンゴン?', context: 'ミャンマーでいちばん{大|おお}きい{町|まち}です。「シュエダゴン・パゴダ」という{黄金|おうごん}のパゴダが{有名|ゆうめい}です。にぎやかで、おもしろい{町|まち}です。', choices: [{ n: 1, text: 'A maior cidade de Mianmar; famosa por um pagode dourado; animada e interessante.' }, { n: 2, text: 'Uma vila pequena e tranquila no campo.' }, { n: 3, text: 'Uma cidade de planalto com plantações de chá.' }, { n: 4, text: 'Uma ilha turística de praias.' }], answer: 1, explanationPt: 'ミャンマーでいちばん{大|おお}きい{町|まち}; {黄金|おうごん}のパゴダ (pagode dourado) が{有名|ゆうめい}; にぎやか. (Atividade 4 · 読む)' },
    { id: 'iro-e2-l2-36', number: 36, prompt: '読む: o que モウさん gosta de fazer e o que se surpreendeu no Japão?', context: '{釣|つ}りです。…{休|やす}みの{日|ひ}には、よく{友|とも}だちとキャンプをしたり、ハイキングをしたりします。…{町|まち}が{夜|よる}とても{明|あか}るくて、びっくりしました。', choices: [{ n: 1, text: 'Gosta de pescar, acampar e fazer trilha; surpreendeu-se que a cidade é muito iluminada à noite.' }, { n: 2, text: 'Gosta de cozinhar; surpreendeu-se com o frio.' }, { n: 3, text: 'Gosta de games; surpreendeu-se com o trânsito.' }, { n: 4, text: 'Gosta de cantar; surpreendeu-se com a comida cara.' }], answer: 1, explanationPt: '{釣|つ}り (pesca), キャンプ／ハイキングをしたりします (〜たり〜たり, acampar/trilha). {町|まち}が{夜|よる}{明|あか}るくてびっくり (surpresa com a cidade iluminada à noite). (Atividade 4 · 読む)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 2 (聴解スクリプト)
const L2_SCRIPTS: Record<string, ScriptItem[]> = {
  '02-03': [
    {
      label: '① どの人ですか？ — 加藤さん (02-03)',
      setupJa: 'いろいろな{場所|ばしょ}で、{人|ひと}を{探|さが}しています。',
      setupPt: 'Em vários lugares, alguém procura uma pessoa. ① Procurando Kato.',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。{加藤|かとう}さん、いますか？', pt: 'Com licença, o Kato está?' },
        { speaker: 'B', ja: '{加藤|かとう}さん？ ああ、あそこにいますよ。', pt: 'O Kato? Ah, está ali.' },
        { speaker: 'A', ja: 'え、どの{人|ひと}ですか？', pt: 'Ah, qual deles?' },
        { speaker: 'B', ja: 'ほら、あそこで、コピーをしてる{人|ひと}です。', pt: 'Olha, é aquele que está tirando cópia ali.' },
        { speaker: 'A', ja: 'ああ、わかりました。ありがとうございます。', pt: 'Ah, entendi. Obrigado(a).' },
      ],
    },
  ],
  '02-04': [
    {
      label: '② 江口さん (02-04)',
      setupPt: '② Procurando Eguchi.',
      lines: [
        { speaker: 'A', ja: 'すみません。{江口|えぐち}さんはどの{人|ひと}ですか？', pt: 'Com licença, qual é o Eguchi?' },
        { speaker: 'B', ja: 'あの{髪|かみ}が{短|みじか}くて、ひげをはやしてる{人|ひと}です。', pt: 'É aquele de cabelo curto e com barba.' },
        { speaker: 'A', ja: 'ああ、わかりました。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '02-05': [
    {
      label: '③ 原さん (02-05)',
      setupPt: '③ Procurando Hara.',
      lines: [
        { speaker: 'A', ja: '{原|はら}さん、いますか？', pt: 'A Hara está?' },
        { speaker: 'B', ja: 'ああ、{座|すわ}って、{本|ほん}を{読|よ}んでる{人|ひと}ですよ。', pt: 'Ah, é aquela pessoa sentada lendo um livro.' },
        { speaker: 'A', ja: 'ああ、あの{男|おとこ}の{人|ひと}ですね。', pt: 'Ah, aquele homem, né?' },
        { speaker: 'B', ja: 'ええ。', pt: 'Isso.' },
      ],
    },
  ],
  '02-06': [
    {
      label: '④ ナインさん (02-06)',
      setupPt: '④ Procurando Nain.',
      lines: [
        { speaker: 'A', ja: 'あのう、ナインさんはどの{人|ひと}ですか？', pt: 'Hum, qual é o Nain?' },
        { speaker: 'B', ja: 'ナインさん？ あの{帽子|ぼうし}をかぶってる{人|ひと}ですよ。', pt: 'O Nain? É aquele de chapéu.' },
        { speaker: 'A', ja: 'ああ、あの{赤|あか}いジャンパーの{人|ひと}ですね。', pt: 'Ah, aquele da jaqueta vermelha, né?' },
        { speaker: 'B', ja: 'そうです。', pt: 'Isso mesmo.' },
      ],
    },
  ],
  '02-09': [
    {
      label: '会話 — どの人か説明 (02-09)',
      setupPt: 'Modelo: explicar a alguém qual é a pessoa procurada.',
      lines: [
        { speaker: 'A', ja: '{加藤|かとう}さんは、どの{人|ひと}ですか？', pt: 'Qual deles é o Kato?' },
        { speaker: 'B', ja: 'あそこでコピーをしている{人|ひと}です。あの{髪|かみ}が{短|みじか}くて、ひげをはやしている{人|ひと}です。', pt: 'É o que está tirando cópia ali. Aquele de cabelo curto e barba.' },
        { speaker: 'A', ja: 'ああ、わかりました。ありがとうございます。', pt: 'Ah, entendi. Obrigado(a).' },
      ],
    },
  ],
  '02-11': [
    {
      label: '① その写真、だれですか？ — 恋人 (02-11)',
      setupPt: 'Falando de pessoas. ① Sobre a foto do(a) namorado(a).',
      lines: [
        { speaker: 'A', ja: 'その{写真|しゃしん}、だれですか？', pt: 'Quem é nessa foto?' },
        { speaker: 'B', ja: 'ああ、{恋人|こいびと}です。', pt: 'Ah, é meu/minha namorado(a).' },
        { speaker: 'A', ja: 'へー。まじめそうな{人|ひと}ですね。', pt: 'Nossa. Parece uma pessoa séria.' },
        { speaker: 'B', ja: '{写真|しゃしん}はまじめそうですけど、{本当|ほんとう}はおもしろい{人|ひと}ですよ。', pt: 'Na foto parece sério, mas na verdade é uma pessoa divertida.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é mesmo?' },
      ],
    },
  ],
  '02-12': [
    {
      label: '② 山本さん — 孫 (02-12)',
      setupPt: '② Yamamoto fala do neto recém-nascido.',
      lines: [
        { speaker: 'A', ja: '{山本|やまもと}さん、とてもうれしそうですね。', pt: 'Yamamoto, você parece muito feliz.' },
        { speaker: 'B', ja: 'ああ、この{間|あいだ}、{孫|まご}が{生|う}まれたんです。', pt: 'Ah, outro dia nasceu meu neto.' },
        { speaker: 'A', ja: 'まご？', pt: 'Neto?' },
        { speaker: 'B', ja: '{娘|むすめ}の{子|こ}どもです。ほら、{見|み}てください。', pt: 'É o filho da minha filha. Olha, veja.' },
        { speaker: 'A', ja: 'ああ、{元気|げんき}そうな{赤|あか}ちゃんですね。', pt: 'Ah, que bebê saudável!' },
        { speaker: 'B', ja: 'ええ、とてもかわいいです。{毎日|まいにち}、{夜|よる}{泣|な}いて、{大変|たいへん}ですけどね。', pt: 'Sim, é muito fofo. Mas chora toda noite, é puxado.' },
      ],
    },
  ],
  '02-13': [
    {
      label: '③ 村田さん (02-13)',
      setupPt: '③ Sobre Murata, que virou chefe de seção.',
      lines: [
        { speaker: 'A', ja: '{今度|こんど}、{主任|しゅにん}になった{村田|むらた}さん、どんな{人|ひと}ですか？', pt: 'O Murata, que agora virou chefe de seção, como é ele?' },
        { speaker: 'B', ja: '{見|み}た{目|め}はこわそうだけど、やさしい{人|ひと}だよ。', pt: 'Pela aparência parece assustador, mas é uma pessoa gentil.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é mesmo?' },
        { speaker: 'B', ja: 'でも、{仕事|しごと}のときは、きびしいけどね。', pt: 'Mas no trabalho ele é rígido, viu.' },
        { speaker: 'A', ja: 'えー！', pt: 'Eita!' },
      ],
    },
  ],
  '02-14': [
    {
      label: '④ 小川さん (02-14)',
      setupPt: '④ Sobre Ogawa, que anda ocupado.',
      lines: [
        { speaker: 'A', ja: '{小川|おがわ}さん、{最近|さいきん}、とっても{忙|いそが}しそうですね。', pt: 'O Ogawa anda muito ocupado ultimamente, né?' },
        { speaker: 'B', ja: '{毎日|まいにち}、{遅|おそ}くまで{仕事|しごと}をしていますよね。{仕事|しごと}がとても{多|おお}いと{言|い}ってました。', pt: 'Trabalha até tarde todo dia. Ele disse que tem muito trabalho.' },
        { speaker: 'A', ja: 'そうですか。{心配|しんぱい}ですね。', pt: 'Ah, é? Que preocupante.' },
      ],
    },
  ],
  '02-16': [
    {
      label: '① 写真の人について話す (02-16)',
      setupPt: 'Modelo ①: falar da pessoa de uma foto.',
      lines: [
        { speaker: 'A', ja: 'その{写真|しゃしん}、だれですか？', pt: 'Quem é nessa foto?' },
        { speaker: 'B', ja: '{恋人|こいびと}です。', pt: 'É meu/minha namorado(a).' },
        { speaker: 'A', ja: 'まじめそうな{人|ひと}ですね。', pt: 'Parece uma pessoa séria.' },
        { speaker: 'B', ja: '{写真|しゃしん}はまじめそうですけど、{本当|ほんとう}はおもしろい{人|ひと}です。', pt: 'Na foto parece sério, mas na verdade é divertido.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é mesmo?' },
      ],
    },
  ],
  '02-17': [
    {
      label: '② その場にいない人について話す (02-17)',
      setupPt: 'Modelo ②: falar de alguém que não está presente.',
      lines: [
        { speaker: 'A', ja: '{村田|むらた}さんは、どんな{人|ひと}ですか？', pt: 'Como é o Murata?' },
        { speaker: 'B', ja: '{見|み}た{目|め}はこわそうだけど、やさしい{人|ひと}です。', pt: 'Pela aparência parece assustador, mas é gentil.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '02-18': [
    {
      label: '会話 — 好きな有名人 (02-18)',
      setupJa: 'マイクさんと{樋田|ひだ}さんが、{好|す}きな{歌手|かしゅ}・{好|す}きな{俳優|はいゆう}について{話|はな}しています。',
      setupPt: 'Mike e Hida conversam sobre a cantora/o ator favoritos.',
      lines: [
        { speaker: 'マイク', ja: '{樋田|ひだ}さん、{日本|にほん}の{歌手|かしゅ}、だれか{知|し}ってる？', pt: 'Hida, você conhece algum cantor japonês?' },
        { speaker: '樋田', ja: '{私|わたし}は{安室|あむろ}{奈美恵|なみえ}が{好|す}きです。', pt: 'Eu gosto da Amuro Namie.' },
        { speaker: 'マイク', ja: 'へー、でも、{引退|いんたい}したよね。', pt: 'Ah, mas ela se aposentou, né?' },
        { speaker: '樋田', ja: 'はい。でも、{今|いま}でも{好|す}きです。かっこいいし、{歌|うた}もダンスも{上手|じょうず}だし。', pt: 'Sim. Mas ainda gosto. Ela é estilosa, e canta e dança bem.' },
        { speaker: 'マイク', ja: '{安室|あむろ}{奈美恵|なみえ}は、アジアではとても{有名|ゆうめい}なんです。', pt: 'A Amuro Namie é muito famosa na Ásia.' },
        { speaker: '樋田', ja: '{私|わたし}は、テレビで{見|み}て、{好|す}きになりました。', pt: 'Eu comecei a gostar ao vê-la na TV.' },
        { speaker: '樋田', ja: 'マイクさんは、だれか{好|す}きな{歌手|かしゅ}、いる？', pt: 'E você, Mike, tem algum cantor favorito?' },
        { speaker: 'マイク', ja: '{歌手|かしゅ}じゃないですけど、ぼくは{三船|みふね}{敏郎|としろう}が{好|す}きです。', pt: 'Não é cantor, mas eu gosto do Mifune Toshiro.' },
        { speaker: '樋田', ja: 'えっ、{三船|みふね}{敏郎|としろう}！？ それ、だれですか？', pt: 'Quê, Mifune Toshiro!? Quem é esse?' },
        { speaker: 'マイク', ja: '{日本|にほん}の{有名|ゆうめい}な{俳優|はいゆう}です。', pt: 'É um ator japonês famoso.' },
        { speaker: '樋田', ja: 'そんな{古|ふる}い{人|ひと}、よく{知|し}ってるね。', pt: 'Você conhece uma pessoa tão antiga, hein.' },
        { speaker: 'マイク', ja: 'はい。{好|す}きになったきっかけは、{映画|えいが}{祭|さい}で「{七人|しちにん}の{侍|さむらい}」という{映画|えいが}を{見|み}たことです。{演技|えんぎ}が{上手|じょうず}だし、{本当|ほんとう}にかっこいいんです。', pt: 'Sim. Comecei a gostar quando vi o filme «Os Sete Samurais» num festival de cinema. Ele atua muito bem e é realmente atraente.' },
        { speaker: '樋田', ja: 'そうなんですか。', pt: 'Ah, é mesmo?' },
        { speaker: 'マイク', ja: '{今|いま}でも、{世界中|せかいじゅう}にファンがたくさんいます。', pt: 'Até hoje, ele tem muitos fãs no mundo todo.' },
      ],
    },
  ],
  '02-20': [
    {
      label: '会話 — 好きな有名人 (modelo) (02-20)',
      setupPt: 'Modelo: falar do seu famoso favorito e do que fez você começar a gostar.',
      lines: [
        { speaker: 'A', ja: '{好|す}きな{俳優|はいゆう}がいますか？', pt: 'Você tem algum ator favorito?' },
        { speaker: 'B', ja: '{私|わたし}は{三船|みふね}{敏郎|としろう}が{好|す}きです。{好|す}きになったきっかけは、「{七人|しちにん}の{侍|さむらい}」という{映画|えいが}を{見|み}たことです。{演技|えんぎ}が{上手|じょうず}だし、{本当|ほんとう}にかっこいいです。', pt: 'Eu gosto do Mifune Toshiro. Comecei a gostar quando vi o filme «Os Sete Samurais». Ele atua bem e é muito atraente.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
}

const lesson2: Section = {
  id: 'lesson-2',
  level: 'elementary2',
  titleJa: '第2課 まじめそうな人ですね',
  titlePt: 'Lição 2 — Parece uma pessoa séria',
  summaryPt:
    'As pessoas ao meu redor · identificar/descrever uma pessoa pela aparência e pelo jeito (髪が短い人／帽子をかぶっている人／座って本を読んでいる人), falar de alguém ausente (見た目はこわそうだけど、やさしい人) e falar de um famoso de quem gosta e do que fez você começar a gostar (演技が上手だし／好きになったきっかけは…).',
  studyNotes: [
    {
      title: 'Tópico: As pessoas ao meu redor (私の周りの人たち)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ao procurar alguém, descrever as características da pessoa ou identificá-la ouvindo a descrição.\n' +
        '- Falar sobre a aparência e o jeito de alguém que não está presente.\n' +
        '- Falar de forma simples sobre um famoso de quem gosta — por que gosta e como começou a gostar.\n' +
        '- Ler uma entrevista simples que apresenta uma pessoa e entender o conteúdo.\n\n' +
        '💡 Pergunta de abertura: あなたのいちばん{仲|なか}のいい{友|とも}だちは、どんな{人|ひと}ですか？ (como é o seu melhor amigo?).',
    },
    {
      title: 'Descrever características: N1 は N2 が ＡＤＪ です (➊)',
      bodyPt:
        'Para descrever a **característica física** de uma pessoa, usa-se **N1（pessoa）は N2（parte／traço）が ＡＤＪ です**:\n\n' +
        '- `{江口|えぐち}さんは、{髪|かみ}が{短|みじか}いです` = o Eguchi tem cabelo curto.\n' +
        '- {髪|かみ}が{長|なが}い／{短|みじか}い (cabelo comprido/curto), {背|せ}が{高|たか}い／{低|ひく}い (alto/baixo).\n\n' +
        '🔁 Para **qualificar a pessoa**, ponha a forma comum + {人|ひと}: `{髪|かみ}が{短|みじか}い{人|ひと}` (a pessoa de cabelo curto), `{背|せ}が{高|たか}い{人|ひと}` (a pessoa alta). (Visto no 初級1 第1課.)',
    },
    {
      title: 'V- ている + 人 — aparência e ação (➋)',
      bodyPt:
        '**V- ている** (forma comum) descreve um **estado** ou uma **ação em curso**, e pode qualificar {人|ひと}:\n\n' +
        '- ① **estado** (resultado de uma ação): `{帽子|ぼうし}をかぶっている{人|ひと}` (a pessoa de chapéu). Para roupa/acessório: {着|き}ている (tronco), はいている (pernas/pés), かけている (óculos).\n' +
        '- ② **ação em curso**: `コピーをしている{人|ひと}` (a pessoa tirando cópia), `{本|ほん}を{読|よ}んでいる{人|ひと}` (a pessoa lendo).\n\n' +
        '💡 ナインさんは{帽子|ぼうし}をかぶっています → {帽子|ぼうし}をかぶっている{人|ひと} (a forma comum qualifica {人|ひと}). (文法ノート ❷)',
    },
    {
      title: 'Partículas finais よ / ね (➌)',
      bodyPt:
        'No fim da frase:\n\n' +
        '- **よ** — passa uma **informação nova** ao ouvinte: `{座|すわ}って、{本|ほん}を{読|よ}んでいる{人|ひと}ですよ` (é aquele que está lendo sentado — te informo).\n' +
        '- **ね** — busca **concordância/confirmação** ou expressa empatia: `まじめそうな{人|ひと}ですね` (parece sério, não é?).\n\n' +
        '(Ambas vistas no 入門.) (文法ノート ❸)',
    },
    {
      title: 'S し、〜 — enumerar razões (➍)',
      bodyPt:
        '**〜し** lista **razões/fundamentos** de uma opinião ou impressão:\n\n' +
        '- `{演技|えんぎ}が{上手|じょうず}だし、{本当|ほんとう}にかっこいいです` = atua bem, e (ainda por cima) é muito atraente.\n' +
        '- `かっこいいし、{歌|うた}もダンスも{上手|じょうず}だし` = é estiloso, e canta e dança bem.\n\n' +
        '💡 Liga-se à forma comum (aqui, de adjetivos). Pode encadear vários motivos. (文法ノート ❹)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Aparência:** {髪|かみ}が{長|なが}い／{短|みじか}い, {背|せ}が{高|たか}い／{低|ひく}い, {座|すわ}る／{立|た}つ. **Roupa/acessório (+verbo):** {着|き}る (シャツ・ワンピース), はく (くつ・ズボン), かぶる ({帽子|ぼうし}), かける (めがね), する (ネクタイ・ピアス), はやす (ひげ). **Cores:** {赤|あか}い, {白|しろ}い, {黄色|きいろ}い, {青|あお}い, {黒|くろ}い.\n\n' +
        '**Jeito/personalidade:** やさしい (gentil), こわい (assustador/severo), まじめ（な） (sério), おもしろい (divertido), うれしい (feliz), さびしい (solitário), {元気|げんき}（な）. Aparência × realidade com **〜そう** (まじめそう, こわそう) + けど.\n\n' +
        '**Famosos:** かっこいい, かわいい, {歌|うた}／{演技|えんぎ}／ダンスが{上手|じょうず}, {歌手|かしゅ} (cantor), {俳優|はいゆう} (ator), {引退|いんたい}する, きっかけ, {映画|えいが}{祭|さい}, {世界中|せかいじゅう}, ファン.\n\n' +
        '**Kanji da lição:** {写真|しゃしん}, {歌|うた}, {歌手|かしゅ}, {上手|じょうず}（な）, {明|あか}るい, {長|なが}い, {短|みじか}い, {着|き}る, {立|た}つ, {泣|な}く.',
    },
  ],
  groups: [lesson2Group],
  audios: attachScripts(2, L2_SCRIPTS),
}

// ---- Lição 3: アレルギーがあるので、食べられないんです (tópico レストランで) ------
const lesson3Group: ExerciseGroup = {
  id: 'iro-e2-l3',
  title: 'アレルギーがあるので、食べられないんです',
  subtitlePt: 'Ler um cardápio · dizer o que não pode comer e por quê · pedir no restaurante · reservar por telefone',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l3-1', number: 1, prompt: '「{今日|きょう}は{自転車|じてんしゃ}で{来|き}たので、{飲|の}めないんです」 — 「S1 ので、S2」 serve para:', choices: [{ n: 1, text: 'dar a razão/motivo de algo (vim de bicicleta, por isso não posso beber)' }, { n: 2, text: 'marcar condição (se…)' }, { n: 3, text: 'comparar dois lugares' }, { n: 4, text: 'pedir permissão' }], answer: 1, translationPt: 'Como vim de bicicleta hoje, não posso beber.', explanationPt: '〜ので liga-se à forma comum (来た→{来|き}たので) e a なので com substantivo/ナA (ベジタリアンなので). É um jeito mais educado/suave de dar razão que から. (文法ノート ❶)' },
    { id: 'iro-e2-l3-2', number: 2, prompt: '「{食|た}べられないんです」 / 「{飲|の}めないんです」 — o 「〜んです」 no fim serve para:', choices: [{ n: 1, text: 'explicar a situação/circunstância (dar o contexto do que se diz)' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'fazer pergunta de sim/não' }, { n: 4, text: 'indicar futuro' }], answer: 1, explanationPt: '〜んです adiciona tom de explicação. {食|た}べられない (potencial negativo de {食|た}べる) + んです = é que não posso comer. Combina com 〜ので: アレルギーがあるので、{食|た}べられないんです. (Atividade 2)' },
    { id: 'iro-e2-l3-3', number: 3, prompt: '「おすし、わさび、{入|はい}ってますよね」 — a parte 「〜よね」 serve para:', choices: [{ n: 1, text: 'confirmar com o outro algo que você acha que é o caso (tem wasabi, né?)' }, { n: 2, text: 'dar uma informação totalmente nova' }, { n: 3, text: 'pedir desculpa' }, { n: 4, text: 'recusar' }], answer: 1, explanationPt: '〜よね confirma algo que você supõe ser verdade. Compare: 〜ますか？ (não sei) × 〜ますよね？ (acho que sim, confirmo). (文法ノート ❷)' },
    { id: 'iro-e2-l3-4', number: 4, prompt: 'No restaurante: 「テーブルと{座敷|ざしき}がございますが…」 「テーブルでお{願|ねが}いします」 — o 「N で」 da resposta indica:', choices: [{ n: 1, text: 'a opção escolhida (escolho a mesa / fico com a mesa)' }, { n: 2, text: 'o local de onde se vem' }, { n: 3, text: 'o meio de transporte' }, { n: 4, text: 'a causa' }], answer: 1, explanationPt: '「N で」 comunica a escolha: テーブルで（お{願|ねが}いします）, それで, {普通|ふつう}で（だいじょうぶです）. (文法ノート ❸)' },
    { id: 'iro-e2-l3-5', number: 5, prompt: '「{人気|にんき}があるのは、お{刺身|さしみ}{定食|ていしょく}です」 — o padrão 「〜のは、N です」 serve para:', choices: [{ n: 1, text: 'destacar/apresentar algo como informação nova (o que faz sucesso é o teishoku de sashimi)' }, { n: 2, text: 'fazer pergunta' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'negar' }], answer: 1, explanationPt: '［V-る／ＡＤＪ］のは、N です destaca N. Usado para recomendar: {人気|にんき}があるのは…／おすすめは…. (文法ノート ❹)' },
    { id: 'iro-e2-l3-6', number: 6, prompt: 'No cardápio do {定食屋|ていしょくや}: 「{定食|ていしょく}／{日替|ひが}わり／{大盛|おおも}り／おかわり{自由|じゆう}／{平日|へいじつ}のみ」 significam:', choices: [{ n: 1, text: 'prato feito / do dia / porção grande / refil à vontade / só em dias úteis' }, { n: 2, text: 'sobremesa / picante / pequeno / sem refil / fim de semana' }, { n: 3, text: 'bebida / quente / médio / grátis / feriado' }, { n: 4, text: 'entrada / doce / grande / pago / todo dia' }], answer: 1, explanationPt: '{定食|ていしょく} (prato feito, com ごはん+みそ汁), {日替|ひが}わり (que muda a cada dia), {大盛|おおも}り (porção grande), おかわり{自由|じゆう} (refil livre), {平日|へいじつ}のみ (só dias úteis). (Atividade 1 · メニュー)' },
    { id: 'iro-e2-l3-7', number: 7, prompt: '🧮 「からあげ{定食|ていしょく}（¥580）のご{飯|はん}を{大盛|おおも}り（+¥50）にして、ホットコーヒー（¥150）をつける」 — quanto fica?', choices: [{ n: 1, text: '¥780' }, { n: 2, text: '¥730' }, { n: 3, text: '¥580' }, { n: 4, text: '¥630' }], answer: 1, explanationPt: '580 + 50 (大盛り) + 150 (コーヒー) = ¥780. (Atividade 1 · cálculo de cardápio)' },
    { id: 'iro-e2-l3-8', number: 8, prompt: 'Que alimento/material é este? (alergias e restrições)', image: `${IMG}/Z_03_2_01_niku.png`, imageAlt: 'porco, vaca e cortes de carne', choices: [{ n: 1, text: '{肉|にく} ({豚肉|ぶたにく}・{牛肉|ぎゅうにく}) — carne (de porco / de vaca)' }, { n: 2, text: '{魚|さかな} — peixe' }, { n: 3, text: '{卵|たまご} — ovo' }, { n: 4, text: 'ナッツ — nozes' }], answer: 1, explanationPt: '{肉|にく} = carne; {豚肉|ぶたにく} (porco), {牛肉|ぎゅうにく} (vaca). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-9', number: 9, prompt: 'Que alimento é este?', image: `${IMG}/Z_03_2_02_sakana.png`, imageAlt: 'peixe', choices: [{ n: 1, text: '{魚|さかな} — peixe' }, { n: 2, text: '{肉|にく} — carne' }, { n: 3, text: 'エビ・カニ — camarão/caranguejo' }, { n: 4, text: '{卵|たまご} — ovo' }], answer: 1, explanationPt: '{魚|さかな} = peixe (生の{魚|さかな} = peixe cru). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-10', number: 10, prompt: 'Que alimento é este? (causa comum de alergia)', image: `${IMG}/Z_03_2_03_ebikani.png`, imageAlt: 'camarão e caranguejo', choices: [{ n: 1, text: 'エビ・カニ — camarão e caranguejo' }, { n: 2, text: '{魚|さかな} — peixe' }, { n: 3, text: '{肉|にく} — carne' }, { n: 4, text: 'ナッツ — nozes' }], answer: 1, explanationPt: 'エビ (camarão) ・カニ (caranguejo) — crustáceos, alérgeno comum. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-11', number: 11, prompt: 'Que alimento é este?', image: `${IMG}/Z_03_2_04_tamago.png`, imageAlt: 'ovos', choices: [{ n: 1, text: '{卵|たまご} — ovo' }, { n: 2, text: '{牛乳|ぎゅうにゅう} — leite' }, { n: 3, text: 'ナッツ — nozes' }, { n: 4, text: 'ねぎ — cebolinha' }], answer: 1, explanationPt: '{卵|たまご} = ovo. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-12', number: 12, prompt: 'Que alimento é este? (alérgeno comum)', image: `${IMG}/Z_03_2_05_nattsu.png`, imageAlt: 'amêndoa, castanha de caju e amendoim', choices: [{ n: 1, text: 'ナッツ — nozes / castanhas' }, { n: 2, text: '{卵|たまご} — ovo' }, { n: 3, text: 'わさび — wasabi' }, { n: 4, text: 'ねぎ — cebolinha' }], answer: 1, explanationPt: 'ナッツ = nozes/castanhas (amêndoa, caju, amendoim). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-13', number: 13, prompt: 'Que condimento japonês é este (raiz ralada, verde, picante)?', image: `${IMG}/Z_03_2_06_wasabi.png`, imageAlt: 'raiz de wasabi e pasta ralada', choices: [{ n: 1, text: 'わさび — wasabi (raiz-forte japonesa)' }, { n: 2, text: 'ねぎ — cebolinha' }, { n: 3, text: 'みりん — mirin' }, { n: 4, text: 'お{酒|さけ} — bebida alcoólica' }], answer: 1, explanationPt: 'わさび = wasabi. Comum no sushi; pede-se «わさび{抜|ぬ}きで» (sem wasabi) para tirar. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-14', number: 14, prompt: 'Que bebida/material é este?', image: `${IMG}/Z_03_2_09_gyuunyuu.png`, imageAlt: 'caixa de leite e copo de leite', choices: [{ n: 1, text: '{牛乳|ぎゅうにゅう} — leite' }, { n: 2, text: 'お{酒|さけ} — bebida alcoólica' }, { n: 3, text: 'コーヒー — café' }, { n: 4, text: '{卵|たまご} — ovo' }], answer: 1, explanationPt: '{牛乳|ぎゅうにゅう} = leite. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-15', number: 15, prompt: 'Outros itens da lista: 「ねぎ／みりん／お{酒|さけ}／コーヒー」 significam:', choices: [{ n: 1, text: 'cebolinha / mirin (saquê doce de cozinha) / bebida alcoólica / café' }, { n: 2, text: 'arroz / sal / água / chá' }, { n: 3, text: 'cenoura / açúcar / suco / leite' }, { n: 4, text: 'alho / vinagre / refrigerante / sopa' }], answer: 1, explanationPt: 'ねぎ (cebolinha), みりん (mirin, condimento), お{酒|さけ} (álcool), コーヒー (café). Itens que alguém pode não poder consumir. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l3-16', number: 16, prompt: 'Razões para não poder comer/beber: 「{宗教上|しゅうきょうじょう}の{理由|りゆう}／{苦手|にがて}／アレルギー／ベジタリアン」 significam:', choices: [{ n: 1, text: 'motivo religioso / não curtir (ter aversão) / alergia / vegetariano' }, { n: 2, text: 'falta de dinheiro / pressa / dieta / jejum' }, { n: 3, text: 'cansaço / preguiça / medo / vergonha' }, { n: 4, text: 'feriado / festa / viagem / trabalho' }], answer: 1, explanationPt: '{宗教上|しゅうきょうじょう}の{理由|りゆう} (motivo religioso), {苦手|にがて} (não gostar/aversão), アレルギー (alergia), ベジタリアン (vegetariano). (Atividade 2)' },
    { id: 'iro-e2-l3-17', number: 17, prompt: '「わさび{抜|ぬ}きでお{願|ねが}いします」 — 「〜{抜|ぬ}き」 significa:', choices: [{ n: 1, text: 'sem ~ / tirando o ~ (sem wasabi, por favor)' }, { n: 2, text: 'com bastante ~' }, { n: 3, text: 'ao lado de ~' }, { n: 4, text: 'em vez de ~' }], answer: 1, explanationPt: '〜{抜|ぬ}き = sem (retirando) tal ingrediente. わさび{抜|ぬ}きで = sem wasabi. (Atividade 2)' },
    { id: 'iro-e2-l3-18', number: 18, prompt: 'Dentro do restaurante (店の中): 「カウンター／{座敷|ざしき}／テーブル／{禁煙|きんえん}／（お）{会計|かいけい}」 significam:', choices: [{ n: 1, text: 'balcão / sala de tatame / mesa / proibido fumar / a conta (caixa)' }, { n: 2, text: 'cozinha / banheiro / entrada / saída / estoque' }, { n: 3, text: 'cardápio / garçom / cliente / gorjeta / reserva' }, { n: 4, text: 'prato / copo / talher / guardanapo / toalha' }], answer: 1, explanationPt: 'カウンター (balcão), {座敷|ざしき} (sala de tatame), テーブル (mesa), {禁煙|きんえん} (proibido fumar; {店内|てんない}{禁煙|きんえん} = não-fumante no estabelecimento), （お）{会計|かいけい}／レジ (conta/caixa). (Atividade 3 · ことばの準備)' },
    { id: 'iro-e2-l3-19', number: 19, prompt: 'Expressões educadas do funcionário (店の人の丁寧な表現) — qual conjunto está correto?', context: 'Atendimento ao cliente num restaurante.', image: `${IMG}/Z_03_3_04_rejide.png`, imageAlt: 'cliente pagando no caixa do restaurante', choices: [{ n: 1, text: 'よろしいですか？(＝いいですか) ／ 〜がございます(＝あります) ／ お{決|き}まりですか？(＝{決|き}まりましたか) ／ いかがですか？(＝どうですか) ／ かしこまりました(＝わかりました)' }, { n: 2, text: 'são todas formas casuais entre amigos' }, { n: 3, text: 'significam todas “não temos”' }, { n: 4, text: 'são saudações de despedida' }], answer: 1, explanationPt: 'Keigo de atendimento: よろしいですか／ございます／お{決|き}まりですか／いかがですか／かしこまりました／お{客|きゃく}{様|さま}／〜{名様|めいさま}／どうなさいますか. (Atividade 3 · 会話)' },
    { id: 'iro-e2-l3-20', number: 20, prompt: 'Ao pedir: 「{大盛|おおも}り／{少|すく}なめ／{普通|ふつう}」 (quantidade de arroz) e 「{別々|べつべつ}／ごいっしょ」 (conta) significam:', choices: [{ n: 1, text: 'porção grande / menor / normal — e conta separada / junta' }, { n: 2, text: 'quente / gelado / morno — e à vista / a prazo' }, { n: 3, text: 'doce / salgado / azedo — e aqui / para viagem' }, { n: 4, text: 'cru / cozido / frito — e com / sem gelo' }], answer: 1, explanationPt: 'ご{飯|はん}の{量|りょう}: {大盛|おおも}り (grande), {少|すく}なめ (menos), {普通|ふつう} (normal). {会計|かいけい}: {別々|べつべつ} (separado), ごいっしょ (junto). (Atividade 3)' },
    { id: 'iro-e2-l3-21', number: 21, prompt: 'Ao reservar por telefone, o funcionário pergunta tipicamente:', choices: [{ n: 1, text: 'お{日|ひ}にち (data), {何名様|なんめいさま} (quantas pessoas), お{時間|じかん} (horário), お{名前|なまえ}とお{電話番号|でんわばんごう} (nome e telefone)' }, { n: 2, text: 'idade, profissão, endereço e salário' }, { n: 3, text: 'comida favorita e hobby' }, { n: 4, text: 'meio de transporte e clima' }], answer: 1, explanationPt: 'Reserva: お{日|ひ}にち→{何名様|なんめいさま}→お{時間|じかん}→お{名前|なまえ}・お{電話番号|でんわばんごう}→{確認|かくにん} (おまちがいないでしょうか). (Atividade 4 · 予約)' },
    { id: 'iro-e2-l3-22', number: 22, prompt: '「{予約|よやく}したいんですけど…」 — começar assim ao telefone serve para:', choices: [{ n: 1, text: 'introduzir educadamente o pedido (eu gostaria de fazer uma reserva…)' }, { n: 2, text: 'cancelar uma reserva' }, { n: 3, text: 'reclamar da comida' }, { n: 4, text: 'pedir a conta' }], answer: 1, explanationPt: 'V-たいんですけど… = introduz o pedido de forma suave. 〜けど deixa a frase em aberto (educado). (Atividade 4)' },
    { id: 'iro-e2-l3-23', number: 23, prompt: 'Lendo um cupom (クーポン): 「{半額|はんがく}／10%OFF／{有効期限|ゆうこうきげん}」 significam:', choices: [{ n: 1, text: 'metade do preço / 10% de desconto / data de validade' }, { n: 2, text: 'dobro do preço / 10% de gorjeta / horário de funcionamento' }, { n: 3, text: 'grátis / 10 ienes / endereço' }, { n: 4, text: 'reserva / entrega / cardápio' }], answer: 1, explanationPt: '{半額|はんがく} (metade do preço), 10%OFF (10% de desconto), {有効期限|ゆうこうきげん} (validade — até quando usar). (Atividade 5 · クーポン)' },
    { id: 'iro-e2-l3-24', number: 24, prompt: '聴解 03-03: por que a pessoa não pode comer carne nem peixe?', context: 'Ｂ：{私|わたし}、ベジタリアンなので、{肉|にく}とか{魚|さかな}はだめなんです。（Ａ：じゃあ、{豆腐|とうふ}{料理|りょうり}はだいじょうぶ？ Ｂ：はい。）', choices: [{ n: 1, text: 'É vegetariana — não come carne nem peixe (mas prato de tofu, tudo bem).' }, { n: 2, text: 'Tem alergia a frutos do mar.' }, { n: 3, text: 'Veio de bicicleta.' }, { n: 4, text: 'É por motivo religioso.' }], answer: 1, explanationPt: 'ベジタリアンなので (なので = razão, com substantivo), {肉|にく}とか{魚|さかな}はだめ. {豆腐|とうふ}{料理|りょうり} (prato de tofu) tudo bem. (聴解 03-03 · 文法 ❶)' },
    { id: 'iro-e2-l3-25', number: 25, prompt: '聴解 03-04: por que a pessoa não pode beber (álcool/cerveja)?', context: 'Ｂ：あの、{今日|きょう}は{自転車|じてんしゃ}で{来|き}たので、{飲|の}めないんです。…じゃあ、ウーロン{茶|ちゃ}、お{願|ねが}いします。', choices: [{ n: 1, text: 'Veio de bicicleta hoje (não pode beber álcool); pede chá oolong.' }, { n: 2, text: 'É vegetariana.' }, { n: 3, text: 'Tem alergia a ovo.' }, { n: 4, text: 'É menor de idade.' }], answer: 1, explanationPt: '{自転車|じてんしゃ}で{来|き}たので、{飲|の}めない (não pode beber álcool — dirigir bicleta). Pede ソフトドリンク (ウーロン{茶|ちゃ}). (聴解 03-04 · 文法 ❶)' },
    { id: 'iro-e2-l3-26', number: 26, prompt: '聴解 03-05: por que a pessoa não come camarão (エビ)?', context: 'Ｂ：あ……はい。アレルギーがあるので、{食|た}べられないんです。よかったら、どうぞ。', choices: [{ n: 1, text: 'Tem alergia, então não pode comer (oferece ao outro).' }, { n: 2, text: 'Não gosta do sabor.' }, { n: 3, text: 'É vegetariana.' }, { n: 4, text: 'Já está satisfeita.' }], answer: 1, explanationPt: 'アレルギーがあるので、{食|た}べられない. よかったら、どうぞ = se quiser, fique à vontade. (聴解 03-05 · 文法 ❶)' },
    { id: 'iro-e2-l3-27', number: 27, prompt: '聴解 03-06: o que a pessoa pede em relação ao wasabi do sushi?', context: 'Ａ：すみません、おすし、わさび、{入|はい}ってますよね。{苦手|にがて}なんです。Ｂ：あ、わさび{抜|ぬ}きもできますよ。', choices: [{ n: 1, text: 'Não gosta de wasabi (苦手) e pede sem wasabi (わさび抜きで).' }, { n: 2, text: 'Quer mais wasabi.' }, { n: 3, text: 'Tem alergia a peixe.' }, { n: 4, text: 'Quer trocar de prato.' }], answer: 1, explanationPt: '{入|はい}ってますよね (confirma, 〜よね), {苦手|にがて}なんです (não curto), わさび{抜|ぬ}きで (sem wasabi). (聴解 03-06 · 文法 ❷)' },
    { id: 'iro-e2-l3-28', number: 28, prompt: '聴解 03-07: por que a pessoa não pode comer o porco do okonomiyaki?', context: 'Ａ：あの、お{好|この}み{焼|や}きに{豚肉|ぶたにく}、{入|はい}ってますか？ …{宗教上|しゅうきょうじょう}の{理由|りゆう}で{食|た}べられないので、{入|い}れないでください。', choices: [{ n: 1, text: 'Por motivo religioso não pode comer; pede para não colocar (入れないでください).' }, { n: 2, text: 'É alérgica a porco.' }, { n: 3, text: 'É vegetariana.' }, { n: 4, text: 'Não gosta de okonomiyaki.' }], answer: 1, explanationPt: '{宗教上|しゅうきょうじょう}の{理由|りゆう}で{食|た}べられないので、{入|い}れないでください (não coloque, por favor). (聴解 03-07 · 文法 ❶)' },
    { id: 'iro-e2-l3-29', number: 29, prompt: '会話 03-14 (pedir no restaurante): o que o funcionário pergunta e o que Ishii pede de início?', context: '店員：{何名様|なんめいさま}ですか？…{当店|とうてん}、{全席|ぜんせき}{禁煙|きんえん}ですが…／ご{注文|ちゅうもん}、お{決|き}まりですか？ 石井：おすすめは{何|なん}ですか？', choices: [{ n: 1, text: 'Pergunta nº de pessoas e avisa que é tudo não-fumante; Ishii pergunta a recomendação e pede o teishoku de sashimi (人気がある).' }, { n: 2, text: 'Pergunta o endereço; Ishii pede a conta.' }, { n: 3, text: 'Pergunta a reserva; Ishii vai embora.' }, { n: 4, text: 'Pergunta a sobremesa; Ishii pede só água.' }], answer: 1, explanationPt: '{何名様|なんめいさま}, {全席|ぜんせき}{禁煙|きんえん}, テーブル席; おすすめ→{人気|にんき}があるのはお{刺身|さしみ}{定食|ていしょく} (文法 ❹), ご{飯|はん}{大盛|おおも}り. (聴解 03-14)' },
    { id: 'iro-e2-l3-30', number: 30, prompt: '会話 03-14: o que Charles (シャール) faz, já que não gosta de peixe cru?', context: 'シャール：{私|わたし}はこの{魚|さかな}が{苦手|にがて}なんですが…ほかに{何|なに}がありますか？ 店員：フライなどはいかがですか？…シャール：じゃあ、それを。', choices: [{ n: 1, text: 'Diz que não curte o peixe e pede a sugestão alternativa (定食 de frito misto), arroz normal e café gelado.' }, { n: 2, text: 'Pede o mesmo que Ishii.' }, { n: 3, text: 'Não pede nada.' }, { n: 4, text: 'Pede uma reserva.' }], answer: 1, explanationPt: 'この{魚|さかな}が{苦手|にがて}なんですが…ほかに{何|なに}が? → ミックスフライ{定食|ていしょく}, ご{飯|はん}{普通|ふつう}, アイスコーヒー. (聴解 03-14)' },
    { id: 'iro-e2-l3-31', number: 31, prompt: '会話 03-14 (会計): como eles dividem a conta e o que recebem do funcionário?', context: '店員：ごいっしょでよろしいですか？ シャール：{別々|べつべつ}でお{願|ねが}いします。…こちら、クーポンです。{次回|じかい}、お{使|つか}いください。', choices: [{ n: 1, text: 'Pagam separadamente (別々); recebem um cupom para usar na próxima vez.' }, { n: 2, text: 'Pagam juntos; recebem um brinde.' }, { n: 3, text: 'Não pagam.' }, { n: 4, text: 'Pedem entrega.' }], answer: 1, explanationPt: '{別々|べつべつ}でお{願|ねが}いします (separado). お{刺身|さしみ}{定食|ていしょく}800{円|えん}・ミックスフライ{定食|ていしょく}650{円|えん}. クーポンを{次回|じかい}{使|つか}う. (聴解 03-14)' },
    { id: 'iro-e2-l3-32', number: 32, prompt: '会話 03-19 (reserva por telefone): que dados Nat informa?', context: '店員：お{日|ひ}にちは？／{何名様|なんめいさま}ですか？／お{名前|なまえ}とお{電話番号|でんわばんごう}を… ナット：{来週|らいしゅう}の{水曜日|すいようび}の{夜|よる}／6{人|にん}／7{時|じ}／ナット／090-1234-5678', choices: [{ n: 1, text: 'Quarta-feira da semana que vem à noite (dia 9), 6 pessoas, 19h, nome Nat, telefone 090-1234-5678.' }, { n: 2, text: 'Hoje de manhã, 2 pessoas, sem telefone.' }, { n: 3, text: 'Sábado, 10 pessoas, almoço.' }, { n: 4, text: 'Não conseguiu reservar.' }], answer: 1, explanationPt: 'Reserva: {来週|らいしゅう}の{水曜日|すいようび} (9日) の{夜|よる} 19{時|じ}, 6{名様|めいさま}, ナット, 090-1234-5678. Confirma com おまちがいないでしょうか. (聴解 03-19)' },
    { id: 'iro-e2-l3-33', number: 33, prompt: '「かしこまりました」 (resposta do funcionário) significa:', choices: [{ n: 1, text: 'entendido / pois não (forma muito educada de わかりました)' }, { n: 2, text: 'não temos isso' }, { n: 3, text: 'está fechado' }, { n: 4, text: 'pode pagar depois' }], answer: 1, explanationPt: 'かしこまりました = forma respeitosa de わかりました, usada por atendentes ao aceitar um pedido. (Atividade 2/3)' },
    { id: 'iro-e2-l3-34', number: 34, prompt: 'Os kanji 「{注文|ちゅうもん}／{会計|かいけい}／{予約|よやく}／{電話番号|でんわばんごう}」 lêem-se:', choices: [{ n: 1, text: 'ちゅうもん (pedido) / かいけい (conta) / よやく (reserva) / でんわばんごう (telefone)' }, { n: 2, text: 'ちゅうぶん / かいけい / よやく / でんわばんごう' }, { n: 3, text: 'ちゅうもん / あいけい / よあく / でんわごう' }, { n: 4, text: 'すいもん / かいさん / ようやく / でんき' }], answer: 1, explanationPt: '{注文|ちゅうもん} pedido, {会計|かいけい} conta, {予約|よやく} reserva, {電話番号|でんわばんごう} número de telefone. (漢字のことば)' },
    { id: 'iro-e2-l3-35', number: 35, prompt: 'Os kanji 「ご{飯|はん}／{牛乳|ぎゅうにゅう}／{生|なま}／{禁煙|きんえん}／{自由|じゆう}／〜{様|さま}」 lêem-se:', choices: [{ n: 1, text: 'ごはん (arroz/refeição) / ぎゅうにゅう (leite) / なま (cru) / きんえん (proibido fumar) / じゆう (livre) / さま (sufixo honorífico)' }, { n: 2, text: 'ごはん / ぎゅうにゅう / せい / きんえん / じゆう / よう' }, { n: 3, text: 'ごめし / うしちち / なま / きんけむり / じゆう / さま' }, { n: 4, text: 'ごはん / ぎゅうにく / いき / きんえん / みずから / さま' }], answer: 1, explanationPt: 'ご{飯|はん}, {牛乳|ぎゅうにゅう}, {生|なま} (cru), {禁煙|きんえん}, {自由|じゆう} (おかわり{自由|じゆう}), 〜{様|さま} (お{客|きゃく}{様|さま}). (漢字のことば)' },
    { id: 'iro-e2-l3-36', number: 36, prompt: '会話 03-09/03-11 (modelos «dizer o que não pode comer»): qual estrutura aparece?', context: '①「{苦手|にがて}なんです／アレルギーがあるので、{食|た}べられないんです」 ②「{宗教上|しゅうきょうじょう}の{理由|りゆう}で{食|た}べられないので、{入|い}れないでください／わさび{抜|ぬ}きでお{願|ねが}いします」', choices: [{ n: 1, text: '«razão (ので/んです) + não posso comer» e, ao pedido, «〜抜きで／入れないでください».' }, { n: 2, text: 'só perguntar o preço.' }, { n: 3, text: 'pedir a conta separada.' }, { n: 4, text: 'reservar mesa.' }], answer: 1, explanationPt: 'Modelos: dizer o motivo + {食|た}べられないんです; ao garçom, pedir わさび{抜|ぬ}きで / {入|い}れないでください. (会話 03-09〜03-12)' },
    { id: 'iro-e2-l3-37', number: 37, prompt: '会話 03-16〜03-18 (modelos no restaurante): que três cenas eles cobrem?', context: '① {店|みせ}に{入|はい}る ② {注文|ちゅうもん}する ③ {会計|かいけい}する', choices: [{ n: 1, text: 'entrar no restaurante (nº de pessoas, mesa/tatame), pedir (recomendação, quantidade de arroz, bebida) e pagar (junto/separado).' }, { n: 2, text: 'só fazer reserva por telefone.' }, { n: 3, text: 'reclamar e ir embora.' }, { n: 4, text: 'pedir entrega em casa.' }], answer: 1, explanationPt: 'Modelos: ①{入|はい}る (何名様/テーブル) ②{注文|ちゅうもん} (おすすめ/{大盛|おおも}り/飲み物) ③{会計|かいけい} (ごいっしょ/{別々|べつべつ}). (会話 03-16〜03-18)' },
    { id: 'iro-e2-l3-38', number: 38, prompt: '会話 03-20 (modelo de reserva): qual é a ordem das informações?', context: '① 日にち ② 人数 ③ 時間 ④ 連絡先（名前・電話番号）⑤ 確認', choices: [{ n: 1, text: 'data → nº de pessoas → horário → contato (nome e telefone) → confirmação.' }, { n: 2, text: 'preço → pagamento → entrega.' }, { n: 3, text: 'cardápio → bebida → sobremesa.' }, { n: 4, text: 'endereço → idade → profissão.' }], answer: 1, explanationPt: 'Reserva por telefone: お{日|ひ}にち→{何名様|なんめいさま}→お{時間|じかん}→お{名前|なまえ}・お{電話番号|でんわばんごう}→{確認|かくにん}. (会話 03-20)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 3 (聴解スクリプト)
const L3_SCRIPTS: Record<string, ScriptItem[]> = {
  '03-03': [
    {
      label: '① わさび抜きでお願いします — ベジタリアン (03-03)',
      setupJa: 'レストランで、{食|た}べ{物|もの}の{話|はなし}をしています。それぞれ、{食|た}べられない{理由|りゆう}は{何|なに}でしょうか。',
      setupPt: 'Num restaurante, falam de comida. Por que cada um não pode comer? ① vegetariana.',
      lines: [
        { speaker: 'A', ja: '{何|なに}{食|た}べる？ ここのお{刺身|さしみ}、おいしいよ。', pt: 'O que você vai comer? O sashimi daqui é gostoso.' },
        { speaker: 'B', ja: '{私|わたし}、ベジタリアンなので、{肉|にく}とか{魚|さかな}はだめなんです。', pt: 'Eu sou vegetariana, então carne e peixe não dá.' },
        { speaker: 'A', ja: 'じゃあ、{豆腐|とうふ}{料理|りょうり}はだいじょうぶ？', pt: 'Então, prato de tofu pode?' },
        { speaker: 'B', ja: 'はい、だいじょうぶです。', pt: 'Sim, pode.' },
      ],
    },
  ],
  '03-04': [
    {
      label: '② 自転車で来た (03-04)',
      setupPt: '② Veio de bicicleta — não pode beber álcool.',
      lines: [
        { speaker: 'A', ja: 'じゃあ、{先|さき}に{飲|の}み{物|もの}、{注文|ちゅうもん}しましょう。ビールでいいですか？', pt: 'Então, vamos pedir as bebidas primeiro. Cerveja, pode?' },
        { speaker: 'B', ja: 'あの、{今日|きょう}は{自転車|じてんしゃ}で{来|き}たので、{飲|の}めないんです。', pt: 'Ah, hoje vim de bicicleta, então não posso beber.' },
        { speaker: 'A', ja: 'そっかそっか。ソフトドリンクのメニューはここですよ。', pt: 'Ah, entendi. O cardápio de refrigerantes é aqui.' },
        { speaker: 'B', ja: 'そうですね……。じゃあ、ウーロン{茶|ちゃ}、お{願|ねが}いします。', pt: 'Deixa ver… Então, um chá oolong, por favor.' },
      ],
    },
  ],
  '03-05': [
    {
      label: '③ アレルギー (03-05)',
      setupPt: '③ Tem alergia (a camarão).',
      lines: [
        { speaker: 'A', ja: 'あれ？ エビ、{食|た}べないんですか？', pt: 'Ué? Você não come camarão?' },
        { speaker: 'B', ja: 'あ……はい。アレルギーがあるので、{食|た}べられないんです。よかったら、どうぞ。', pt: 'Ah… é. Tenho alergia, então não posso comer. Se quiser, pode pegar.' },
        { speaker: 'A', ja: 'そうですか。ほかの{料理|りょうり}はだいじょうぶですか？', pt: 'Ah, sei. Os outros pratos, tudo bem?' },
        { speaker: 'B', ja: 'ええ。おいしいです。', pt: 'Sim. Estão gostosos.' },
      ],
    },
  ],
  '03-06': [
    {
      label: '④ 苦手 — わさび抜き (03-06)',
      setupPt: '④ Não gosta de wasabi — pede sem wasabi.',
      lines: [
        { speaker: 'A', ja: 'すみません、おすし、わさび、{入|はい}ってますよね。{苦手|にがて}なんです。', pt: 'Com licença, o sushi tem wasabi, né? É que eu não curto.' },
        { speaker: 'B', ja: 'あ、わさび{抜|ぬ}きもできますよ。', pt: 'Ah, dá para fazer sem wasabi também.' },
        { speaker: 'A', ja: 'じゃあ、わさび{抜|ぬ}きでお{願|ねが}いします。', pt: 'Então, sem wasabi, por favor.' },
        { speaker: 'B', ja: 'かしこまりました。', pt: 'Pois não.' },
      ],
    },
  ],
  '03-07': [
    {
      label: '⑤ 宗教上の理由 (03-07)',
      setupPt: '⑤ Por motivo religioso — pede para não colocar porco.',
      lines: [
        { speaker: 'A', ja: 'あの、お{好|この}み{焼|や}きに{豚肉|ぶたにく}、{入|はい}ってますか？', pt: 'Hum, o okonomiyaki tem carne de porco?' },
        { speaker: 'B', ja: 'はい。', pt: 'Tem.' },
        { speaker: 'A', ja: 'すみません、{宗教上|しゅうきょうじょう}の{理由|りゆう}で{食|た}べられないので、{入|い}れないでください。', pt: 'Desculpe, por motivo religioso não posso comer, então não coloque, por favor.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '03-09': [
    {
      label: '会話 — いっしょに行った人と話す (03-09)',
      setupPt: 'Modelo: dizer a quem está com você o que não pode comer.',
      lines: [
        { speaker: 'A', ja: 'お{料理|りょうり}、おいしいですよ。どうですか？', pt: 'A comida está gostosa. Que tal?' },
        { speaker: 'B', ja: 'すみません、お{肉|にく}は{苦手|にがて}なんです。{私|わたし}、アレルギーがあるので、{食|た}べられないんです。', pt: 'Desculpe, carne eu não curto. Eu tenho alergia, então não posso comer.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '03-11': [
    {
      label: '会話 — 店の人と話す（お好み焼き）(03-11)',
      setupPt: 'Modelo: pedir ao garçom (okonomiyaki com porco).',
      lines: [
        { speaker: 'A', ja: 'すみません、お{好|この}み{焼|や}きに{豚肉|ぶたにく}、{入|はい}ってますか？', pt: 'Com licença, o okonomiyaki tem carne de porco?' },
        { speaker: 'B', ja: 'はい、{入|はい}ってます。', pt: 'Sim, tem.' },
        { speaker: 'A', ja: '{宗教上|しゅうきょうじょう}の{理由|りゆう}で{食|た}べられないので、{入|い}れないでください。', pt: 'Por motivo religioso não posso comer, então não coloque, por favor.' },
      ],
    },
  ],
  '03-12': [
    {
      label: '会話 — 店の人と話す（おすし）(03-12)',
      setupPt: 'Modelo: pedir ao garçom (sushi sem wasabi).',
      lines: [
        { speaker: 'A', ja: 'すみません、おすし、わさび、{入|はい}ってますよね。', pt: 'Com licença, o sushi tem wasabi, né?' },
        { speaker: 'B', ja: 'はい。', pt: 'Tem.' },
        { speaker: 'A', ja: 'わさび{抜|ぬ}きでお{願|ねが}いします。', pt: 'Sem wasabi, por favor.' },
      ],
    },
  ],
  '03-14': [
    {
      label: '会話① 入口で (03-14)',
      setupJa: 'シャールさんと{石井|いしい}さんは、{会社|かいしゃ}の{昼休|ひるやす}みに、{数人|すうにん}でレストランに{来|き}ました。',
      setupPt: 'Charles e Ishii vão a um restaurante no horário de almoço. ① na entrada.',
      lines: [
        { speaker: '店員', ja: 'いらっしゃいませ。お{客様|きゃくさま}、{何名様|なんめいさま}ですか？', pt: 'Sejam bem-vindos. Quantas pessoas?' },
        { speaker: '石井', ja: '2{人|にん}です。', pt: 'Duas.' },
        { speaker: '店員', ja: '2{名様|めいさま}ですね。{当店|とうてん}、{全席|ぜんせき}{禁煙|きんえん}ですが、よろしいですか？', pt: 'Duas pessoas, certo. Nosso restaurante é todo não-fumante, tudo bem?' },
        { speaker: '石井', ja: 'はい。', pt: 'Sim.' },
        { speaker: '店員', ja: 'テーブルと{座敷|ざしき}がございますが――。', pt: 'Temos mesa e sala de tatame…' },
        { speaker: '石井', ja: 'テーブルでお{願|ねが}いします。', pt: 'Mesa, por favor.' },
        { speaker: '店員', ja: 'こちらへどうぞ。', pt: 'Por aqui, por favor.' },
      ],
    },
    {
      label: '会話② 席で — 注文 (03-14)',
      setupPt: '② à mesa, fazendo o pedido.',
      lines: [
        { speaker: '店員', ja: 'ご{注文|ちゅうもん}、お{決|き}まりですか？', pt: 'Já escolheram o pedido?' },
        { speaker: '石井', ja: 'あのう、おすすめは{何|なん}ですか？', pt: 'Hum, qual é a recomendação?' },
        { speaker: '店員', ja: 'そうですね――。{人気|にんき}があるのは、お{刺身|さしみ}{定食|ていしょく}です。', pt: 'Bem… o que faz sucesso é o teishoku de sashimi.' },
        { speaker: '石井', ja: 'じゃあ、それにします。ご{飯|はん}{大盛|おおも}りにできますか？', pt: 'Então fico com ele. Pode pôr arroz em porção grande?' },
        { speaker: '店員', ja: 'はい。お{刺身|さしみ}{定食|ていしょく}、ご{飯|はん}{大盛|おおも}りですね。', pt: 'Sim. Teishoku de sashimi, arroz grande, certo.' },
        { speaker: 'シャール', ja: '{私|わたし}はこの{魚|さかな}が{苦手|にがて}なんですが――ほかに{何|なに}がありますか？', pt: 'Eu não curto muito esse peixe… tem outra coisa?' },
        { speaker: '店員', ja: 'そうですね、フライなどはいかがですか？ ミックスフライ{定食|ていしょく}がありますので。', pt: 'Bem, que tal um frito? Temos o teishoku de frito misto.' },
        { speaker: 'シャール', ja: 'じゃあ、それを。ご{飯|はん}は{普通|ふつう}でいいです。あと、アイスコーヒーもお{願|ねが}いします。', pt: 'Então esse. Arroz normal, tá bom. E um café gelado também, por favor.' },
        { speaker: '店員', ja: 'いつお{持|も}ちしますか？', pt: 'Quando devo trazer (o café)?' },
        { speaker: 'シャール', ja: '{先|さき}にお{願|ねが}いします。', pt: 'Antes, por favor.' },
      ],
    },
    {
      label: '会話③ レジで — 会計 (03-14)',
      setupPt: '③ no caixa, pagando.',
      lines: [
        { speaker: '石井', ja: 'お{会計|かいけい}、お{願|ねが}いします。', pt: 'A conta, por favor.' },
        { speaker: '店員', ja: 'はい。ごいっしょでよろしいですか？', pt: 'Sim. Vão pagar juntos?' },
        { speaker: 'シャール', ja: '{別々|べつべつ}でお{願|ねが}いします。', pt: 'Separado, por favor.' },
        { speaker: '店員', ja: 'かしこまりました。お{刺身|さしみ}{定食|ていしょく}のお{客様|きゃくさま}、800{円|えん}になります。ミックスフライ{定食|ていしょく}のお{客様|きゃくさま}、650{円|えん}になります。……ありがとうございました。こちら、クーポンです。{次回|じかい}、お{使|つか}いください。', pt: 'Pois não. Cliente do teishoku de sashimi, são 800 ienes. Cliente do frito misto, 650 ienes. …Obrigado. Aqui está um cupom. Use na próxima vez.' },
      ],
    },
  ],
  '03-16': [
    {
      label: '会話 — 店に入る (modelo) (03-16)',
      setupPt: 'Modelo ①: entrar no restaurante.',
      lines: [
        { speaker: '店員', ja: 'お{客様|きゃくさま}、{何名様|なんめいさま}ですか？', pt: 'Quantas pessoas?' },
        { speaker: '客', ja: '2{人|にん}です。', pt: 'Duas.' },
        { speaker: '店員', ja: 'テーブルと{座敷|ざしき}がございますが――。', pt: 'Temos mesa e sala de tatame…' },
        { speaker: '客', ja: 'テーブルでお{願|ねが}いします。', pt: 'Mesa, por favor.' },
        { speaker: '店員', ja: 'こちらへどうぞ。', pt: 'Por aqui, por favor.' },
      ],
    },
  ],
  '03-17': [
    {
      label: '会話 — 注文する (modelo) (03-17)',
      setupPt: 'Modelo ②: fazer o pedido.',
      lines: [
        { speaker: '店員', ja: 'ご{注文|ちゅうもん}、お{決|き}まりですか？ おすすめは{何|なん}ですか？', pt: 'Já escolheram? — Qual é a recomendação?' },
        { speaker: '店員', ja: '{人気|にんき}があるのは、お{刺身|さしみ}{定食|ていしょく}です。', pt: 'O que faz sucesso é o teishoku de sashimi.' },
        { speaker: '客', ja: 'じゃあ、それにします。／この{魚|さかな}が{苦手|にがて}なんですが、ほかに{何|なに}がありますか？', pt: 'Então fico com ele. / Não curto esse peixe; tem outra coisa?' },
        { speaker: '店員', ja: 'ミックスフライ{定食|ていしょく}はいかがですか？ ご{飯|はん}の{量|りょう}は、どうなさいますか？', pt: 'Que tal o teishoku de frito misto? E a quantidade de arroz?' },
        { speaker: '客', ja: 'ご{飯|はん}、{大盛|おおも}りでお{願|ねが}いします。あと、アイスコーヒーもお{願|ねが}いします。', pt: 'Arroz em porção grande, por favor. E um café gelado também.' },
      ],
    },
  ],
  '03-18': [
    {
      label: '会話 — 会計する (modelo) (03-18)',
      setupPt: 'Modelo ③: pagar a conta.',
      lines: [
        { speaker: '客', ja: 'お{会計|かいけい}、お{願|ねが}いします。', pt: 'A conta, por favor.' },
        { speaker: '店員', ja: 'ごいっしょでよろしいですか？', pt: 'Vão pagar juntos?' },
        { speaker: '客', ja: 'はい。／{別々|べつべつ}でお{願|ねが}いします。', pt: 'Sim. / Separado, por favor.' },
      ],
    },
  ],
  '03-19': [
    {
      label: '会話 — 電話で予約 (03-19)',
      setupJa: 'ナットさんがレストランに{電話|でんわ}をして、{予約|よやく}をしています。',
      setupPt: 'Nat liga para um restaurante para fazer uma reserva.',
      lines: [
        { speaker: '店員', ja: 'はい、お{電話|でんわ}ありがとうございます。「レストランさくら」でございます。', pt: 'Alô, obrigado pela ligação. Aqui é o «Restaurante Sakura».' },
        { speaker: 'ナット', ja: 'あのう、{予約|よやく}をしたいんですけど――。', pt: 'Hum, eu gostaria de fazer uma reserva…' },
        { speaker: '店員', ja: 'ご{予約|よやく}ですね。お{日|ひ}にちは、お{決|き}まりですか？', pt: 'Uma reserva, certo. A data já está decidida?' },
        { speaker: 'ナット', ja: '{来週|らいしゅう}の{水曜日|すいようび}の{夜|よる}です。', pt: 'Quarta-feira da semana que vem, à noite.' },
        { speaker: '店員', ja: '9{日|か}ですね。{何名様|なんめいさま}ですか？', pt: 'Dia 9, certo. Quantas pessoas?' },
        { speaker: 'ナット', ja: '6{人|にん}です。', pt: 'Seis.' },
        { speaker: '店員', ja: 'お{時間|じかん}は？', pt: 'E o horário?' },
        { speaker: 'ナット', ja: '7{時|じ}ぐらい、だいじょうぶですか？', pt: 'Por volta das 7, pode ser?' },
        { speaker: '店員', ja: '9{日|か}の{水曜日|すいようび}、19{時|じ}ですね。お{名前|なまえ}とお{電話番号|でんわばんごう}をお{願|ねが}いします。', pt: 'Quarta, dia 9, às 19h, certo. Seu nome e telefone, por favor.' },
        { speaker: 'ナット', ja: 'ナットです。{電話番号|でんわばんごう}は、090-1234-5678です。', pt: 'Nat. O telefone é 090-1234-5678.' },
        { speaker: '店員', ja: 'それでは、ナット{様|さま}、9{日|か}の{水曜日|すいようび}、19{時|じ}から6{名様|めいさま}で、おまちがいないでしょうか？', pt: 'Então, sr. Nat, quarta dia 9, a partir das 19h, 6 pessoas — está tudo certo?' },
        { speaker: 'ナット', ja: 'はい。', pt: 'Sim.' },
        { speaker: '店員', ja: 'それでは、お{待|ま}ちしております。ご{予約|よやく}ありがとうございました。', pt: 'Então, ficamos no aguardo. Obrigado pela reserva.' },
      ],
    },
  ],
  '03-20': [
    {
      label: '会話 — 電話で予約 (modelo) (03-20)',
      setupPt: 'Modelo: fazer uma reserva por telefone (data → pessoas → horário → contato → confirmação).',
      lines: [
        { speaker: '客', ja: 'あのう、{予約|よやく}したいんですけど……。', pt: 'Hum, eu gostaria de fazer uma reserva…' },
        { speaker: '店員', ja: 'ご{予約|よやく}ですね。お{日|ひ}にちは、お{決|き}まりですか？', pt: 'Uma reserva, certo. A data já está decidida?' },
        { speaker: '客', ja: '{来週|らいしゅう}の{水曜日|すいようび}の{夜|よる}です。', pt: 'Quarta-feira da semana que vem, à noite.' },
        { speaker: '店員', ja: '{何名様|なんめいさま}ですか？', pt: 'Quantas pessoas?' },
        { speaker: '客', ja: '6{人|にん}です。', pt: 'Seis.' },
        { speaker: '店員', ja: 'お{時間|じかん}は？ お{名前|なまえ}とお{電話番号|でんわばんごう}をお{願|ねが}いします。', pt: 'E o horário? Seu nome e telefone, por favor.' },
        { speaker: '客', ja: '7{時|じ}です。ナットです。090-1234-5678です。', pt: 'Às 7. Nat. 090-1234-5678.' },
        { speaker: '店員', ja: 'それでは、9{日|か}の{水曜日|すいようび}、19{時|じ}から6{名様|めいさま}で、おまちがいないでしょうか？', pt: 'Então, quarta dia 9, a partir das 19h, 6 pessoas — está tudo certo?' },
      ],
    },
  ],
}

const lesson3: Section = {
  id: 'lesson-3',
  level: 'elementary2',
  titleJa: '第3課 アレルギーがあるので、食べられないんです',
  titlePt: 'Lição 3 — Não posso comer porque tenho alergia',
  summaryPt:
    'No restaurante · ler um cardápio de 定食屋 (定食／日替わり／大盛り／おかわり自由), dizer o que não pode comer e por quê (アレルギーがあるので食べられないんです／わさび抜きでお願いします), pedir no restaurante (人気があるのは…／テーブルで／別々で) e fazer uma reserva por telefone.',
  studyNotes: [
    {
      title: 'Tópico: No restaurante (レストランで)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ler um cardápio e entender nomes de pratos, preços e serviços.\n' +
        '- Dizer a quem come com você ou ao garçom o que você não pode comer e por quê.\n' +
        '- Transmitir ao garçom pedidos de assento, conta etc.\n' +
        '- Fazer uma reserva em restaurante por telefone.\n' +
        '- Ver um cupom de restaurante e extrair as informações necessárias.\n\n' +
        '💡 Pergunta de abertura: {食|た}べられないものか、{苦手|にがて}な{食|た}べ{物|もの}はありますか？ (há algo que você não pode comer ou não gosta?).',
    },
    {
      title: 'S1 ので、S2 — dar a razão (➊)',
      bodyPt:
        '**〜ので** liga duas frases marcando **causa/motivo**:\n\n' +
        '- `{今日|きょう}は{自転車|じてんしゃ}で{来|き}たので、{飲|の}めないんです` = como vim de bicicleta, não posso beber.\n' +
        '- `アレルギーがあるので、{食|た}べられないんです` = como tenho alergia, não posso comer.\n\n' +
        '🔧 Liga-se à **forma comum**: {来|き}た→{来|き}たので, ある→あるので. Com substantivo/ナA usa-se **なので**: `ベジタリアンなので`.\n\n' +
        '💡 É um modo mais **educado/suave** de dar motivo do que 〜から. Combina muito com 〜んです (explicar). (文法ノート ❶)',
    },
    {
      title: 'S よね — confirmar (➋)',
      bodyPt:
        '**〜よね** confirma com o interlocutor algo que **você supõe ser verdade**:\n\n' +
        '- `おすし、わさび、{入|はい}ってますよね` = o sushi tem wasabi, né? (acho que tem, confirmo).\n\n' +
        '↔️ Compare: `{入|はい}ってますか？` (não sei se tem) × `{入|はい}ってますよね？` (acho que tem). (文法ノート ❷)',
    },
    {
      title: 'N で — comunicar a escolha (➌)',
      bodyPt:
        'Quando lhe oferecem opções, responde-se com **「N で」** para dizer o que escolheu:\n\n' +
        '- `テーブルと{座敷|ざしき}がございますが…` → `テーブルでお{願|ねが}いします` (escolho a mesa).\n' +
        '- `それで`（{決|き}めます）, `{普通|ふつう}で`（だいじょうぶです）.\n\n' +
        '💡 Costuma vir com お{願|ねが}いします／だいじょうぶです／いいです, mas pode aparecer sozinho. (文法ノート ❸)',
    },
    {
      title: '〜のは、N です — destacar / recomendar (➍)',
      bodyPt:
        'O padrão **「［V-る／ＡＤＪ］のは、N です」** destaca N como **informação nova**:\n\n' +
        '- `{人気|にんき}があるのは、お{刺身|さしみ}{定食|ていしょく}です` = o que faz sucesso é o teishoku de sashimi.\n\n' +
        '💡 Muito usado para **recomendar** ({人気|にんき}があるのは…／おすすめは…). (文法ノート ❹)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Cardápio:** {定食|ていしょく} (prato feito), {日替|ひが}わり (do dia), {大盛|おおも}り／{少|すく}なめ／{普通|ふつう} (porção grande/menor/normal), おかわり{自由|じゆう} (refil livre), {平日|へいじつ}のみ, ホット／アイス.\n\n' +
        '**Não posso comer:** {肉|にく}（{豚肉|ぶたにく}・{牛肉|ぎゅうにく}）, {魚|さかな}, エビ・カニ, {卵|たまご}, ナッツ, わさび, ねぎ, みりん, {牛乳|ぎゅうにゅう}, お{酒|さけ}, コーヒー. Razões: {宗教上|しゅうきょうじょう}の{理由|りゆう}, {苦手|にがて}, アレルギー, ベジタリアン. 〜{抜|ぬ}き (sem ~).\n\n' +
        '**No restaurante:** カウンター, {座敷|ざしき}, テーブル, {禁煙|きんえん}, （お）{会計|かいけい}／レジ, {注文|ちゅうもん}, {予約|よやく}, おすすめ, {人気|にんき}, {別々|べつべつ}／ごいっしょ, クーポン, {半額|はんがく}, {有効期限|ゆうこうきげん}. Keigo do funcionário: お{客様|きゃくさま}, 〜{名様|めいさま}, よろしいですか, ございます, お{決|き}まりですか, いかがですか, どうなさいますか, かしこまりました.\n\n' +
        '**Kanji da lição:** {注文|ちゅうもん}, {会計|かいけい}, {予約|よやく}, {電話番号|でんわばんごう}, 〜{様|さま}, ご{飯|はん}, {牛乳|ぎゅうにゅう}, {生|なま}, {禁煙|きんえん}, {自由|じゆう}.',
    },
  ],
  groups: [lesson3Group],
  audios: attachScripts(3, L3_SCRIPTS),
}

// ---- Lição 4: しょうゆをつけないで食べてください (tópico レストランで) -----------
const lesson4Group: ExerciseGroup = {
  id: 'iro-e2-l4',
  title: 'しょうゆをつけないで食べてください',
  subtitlePt: 'Recomendar um restaurante · entender e explicar como se come um prato · apresentar um prato do seu país · ler avaliações',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l4-1', number: 1, prompt: '「ラーメンなら、あそこがいちばんおいしいよ」 — 「〜なら」 serve para:', choices: [{ n: 1, text: 'retomar um tema e dar uma sugestão sobre ele (se é (sobre) ramen, então…)' }, { n: 2, text: 'marcar o passado' }, { n: 3, text: 'proibir algo' }, { n: 4, text: 'contar quantidade' }], answer: 1, explanationPt: '〜なら retoma o assunto trazido pelo outro e introduz a recomendação. Antes de なら vem o tema: ラーメンなら, それなら, この{近|ちか}くなら. (文法ノート ❶)' },
    { id: 'iro-e2-l4-2', number: 2, prompt: 'Qual sequência usa 「なら」 corretamente (responder a um pedido de recomendação)?', context: 'A: この{辺|へん}で、どこかいい{店|みせ}、ありませんか？', choices: [{ n: 1, text: 'それなら、{最近|さいきん}できた「みさきカフェ」はどう？' }, { n: 2, text: 'それから、みさきカフェを{食|た}べた' }, { n: 3, text: 'それより、カフェじゃない' }, { n: 4, text: 'それでも、カフェます' }], answer: 1, explanationPt: 'それなら = se é assim / nesse caso (retoma o pedido e sugere). (文法ノート ❶ · 聴解 04-02)' },
    { id: 'iro-e2-l4-3', number: 3, prompt: '「しょうゆをつけ**ないで**{食|た}べてください」 / 「つゆに**つけて**{食|た}べてください」 — 「V-て／V-ないで + {食|た}べる」 indica:', choices: [{ n: 1, text: 'o modo de comer — fazendo / sem fazer algo (coma com / sem molho)' }, { n: 2, text: 'o horário da refeição' }, { n: 3, text: 'o preço do prato' }, { n: 4, text: 'o lugar onde comer' }], answer: 1, translationPt: 'Coma sem passar shoyu. / Coma molhando no caldo.', explanationPt: 'V-て{食|た}べる = comer fazendo (つけて/混ぜて/かけて). V-ないで{食|た}べる = comer sem fazer (つけないで/むかないで). (文法ノート ❷)' },
    { id: 'iro-e2-l4-4', number: 4, prompt: '「{一度|いちど}に、そんなにたくさんお{肉|にく}を{入|い}れないでくださいね」 — 「V-ないでください」 serve para:', choices: [{ n: 1, text: 'pedir para NÃO fazer algo (por favor, não coloque)' }, { n: 2, text: 'pedir para fazer algo' }, { n: 3, text: 'perguntar se pode fazer' }, { n: 4, text: 'contar uma ação passada' }], answer: 1, explanationPt: 'V-ないでください = pedido negativo educado (não faça ~). Casual: 〜ないで／〜ちゃだめ. (文法ノート ❸)' },
    { id: 'iro-e2-l4-5', number: 5, prompt: '「うどんは、まだ{入|い}れちゃだめ」 — 「〜ちゃだめ」 significa:', choices: [{ n: 1, text: 'não pode fazer ~ ainda (forma casual de proibição)' }, { n: 2, text: 'pode fazer ~ à vontade' }, { n: 3, text: 'tem que fazer ~ agora' }, { n: 4, text: 'já fez ~' }], answer: 1, explanationPt: '〜ちゃだめ (= 〜てはだめ／〜てはいけない) = não pode/não deve. {入|い}れちゃだめ = não pode pôr (ainda). (文法ノート ❸)' },
    { id: 'iro-e2-l4-6', number: 6, prompt: '「お{肉|にく}と{野菜|やさい}を{食|た}べてから、{入|い}れましょう」 — 「V-てから」 indica:', choices: [{ n: 1, text: 'a ordem das ações (depois de comer ~, então coloque)' }, { n: 2, text: 'a razão' }, { n: 3, text: 'a condição' }, { n: 4, text: 'a proibição' }], answer: 1, explanationPt: 'V-てから = depois de fazer ~ (sequência). {食|た}べてから{入|い}れる = colocar depois de comer. (文法ノート ❹)' },
    { id: 'iro-e2-l4-7', number: 7, prompt: '「とてもおいしかったです**が**、{私|わたし}には{量|りょう}が{多|おお}かったです」 — o 「が」 aqui liga as frases com sentido de:', choices: [{ n: 1, text: 'mas / porém (contraste — versão mais formal de けど)' }, { n: 2, text: 'porque (motivo)' }, { n: 3, text: 'e então (sequência)' }, { n: 4, text: 'se (condição)' }], answer: 1, explanationPt: '〜が (no fim de frase) = mas/porém, ligando ideias contrastantes; mais formal que 〜けど. (文法ノート ❺)' },
    { id: 'iro-e2-l4-8', number: 8, prompt: 'Que ação (modo de comer, 食べ方) esta ilustração mostra?', image: `${IMG}/Z_04_2_01_tsukeru.png`, imageAlt: 'hashi molhando um alimento num pratinho de molho', choices: [{ n: 1, text: 'つける — molhar / mergulhar (no molho)' }, { n: 2, text: '{混|ま}ぜる — misturar' }, { n: 3, text: 'むく — descascar' }, { n: 4, text: '{焼|や}く — grelhar' }], answer: 1, explanationPt: 'つける = molhar no molho (たれ／つゆにつける). Oposto na lição: つけないで{食|た}べる. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-9', number: 9, prompt: 'Que ação esta ilustração mostra?', image: `${IMG}/Z_04_2_02_mazeru1.png`, imageAlt: 'mãos misturando comida numa tigela com hashi', choices: [{ n: 1, text: '{混|ま}ぜる — misturar' }, { n: 2, text: 'つける — molhar' }, { n: 3, text: 'のせる — colocar por cima' }, { n: 4, text: '{巻|ま}く — enrolar' }], answer: 1, explanationPt: '{混|ま}ぜる = misturar. よく{混|ま}ぜて{食|た}べてください = misture bem e coma. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-10', number: 10, prompt: 'Que ação esta ilustração mostra?', image: `${IMG}/Z_04_2_03_kakeru.png`, imageAlt: 'derramar molho/tempero sobre o alimento', choices: [{ n: 1, text: 'かける — derramar / regar por cima' }, { n: 2, text: '{入|い}れる — pôr dentro' }, { n: 3, text: 'むく — descascar' }, { n: 4, text: '{煮|に}る — cozinhar (em caldo)' }], answer: 1, explanationPt: 'かける = jogar/regar por cima ({塩|しお}をかける, ソースをかける). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-11', number: 11, prompt: 'Que ação esta ilustração mostra?', image: `${IMG}/Z_04_2_04_ireru.png`, imageAlt: 'colocar um ingrediente dentro de um recipiente', choices: [{ n: 1, text: '{入|い}れる — pôr dentro / adicionar' }, { n: 2, text: 'かける — regar por cima' }, { n: 3, text: 'のせる — colocar em cima' }, { n: 4, text: 'つける — molhar' }], answer: 1, explanationPt: '{入|い}れる = pôr dentro/adicionar (ミルクを{入|い}れる, お{肉|にく}を{入|い}れる). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-12', number: 12, prompt: 'Que ação esta ilustração mostra (enrolar sushi na alga)?', image: `${IMG}/Z_04_2_05_maku.png`, imageAlt: 'enrolar temaki/sushi na folha de nori, em 3 passos', choices: [{ n: 1, text: '{巻|ま}く — enrolar' }, { n: 2, text: 'のせる — colocar em cima' }, { n: 3, text: 'むく — descascar' }, { n: 4, text: '{混|ま}ぜる — misturar' }], answer: 1, explanationPt: '{巻|ま}く = enrolar. のりで{巻|ま}いて{食|た}べる = enrolar na alga e comer. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-13', number: 13, prompt: 'Que ação esta ilustração mostra?', image: `${IMG}/Z_04_2_06_noseru.png`, imageAlt: 'colocar um ingrediente por cima de outro', choices: [{ n: 1, text: 'のせる — colocar/pôr por cima' }, { n: 2, text: '{入|い}れる — pôr dentro' }, { n: 3, text: 'つける — molhar' }, { n: 4, text: '{揚|あ}げる — fritar' }], answer: 1, explanationPt: 'のせる = colocar por cima. のりの{上|うえ}にご{飯|はん}と{刺身|さしみ}をのせる. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-14', number: 14, prompt: 'Que ação esta ilustração mostra (com a banana)?', image: `${IMG}/Z_04_2_07_muku.png`, imageAlt: 'descascar uma banana', choices: [{ n: 1, text: 'むく — descascar' }, { n: 2, text: '{切|き}る — cortar' }, { n: 3, text: '{巻|ま}く — enrolar' }, { n: 4, text: 'のせる — colocar em cima' }], answer: 1, explanationPt: 'むく = descascar ({皮|かわ}をむく). {焼|や}きいもは{皮|かわ}をむいて／むかないで{食|た}べる. (Atividade 2 · ことばの準備)' },
    { id: 'iro-e2-l4-15', number: 15, prompt: 'Temperos (調味料): 「{砂糖|さとう}／{塩|しお}／こしょう／スパイス／たれ/{油|あぶら}」 significam:', choices: [{ n: 1, text: 'açúcar / sal / pimenta(-do-reino) / especiaria / molho / óleo' }, { n: 2, text: 'arroz / peixe / ovo / leite / pão / água' }, { n: 3, text: 'doce / salgado / azedo / amargo / picante / suave' }, { n: 4, text: 'colher / faca / prato / copo / panela / fogão' }], answer: 1, explanationPt: '{砂糖|さとう} açúcar, {塩|しお} sal, こしょう pimenta, スパイス especiaria, たれ molho, ソース sauce, {油|あぶら} óleo. (Atividade 4 · 調味料)' },
    { id: 'iro-e2-l4-16', number: 16, prompt: 'Modos de preparo (調理方法): 「{焼|や}く／{煮|に}る／ゆでる／{蒸|む}す／{揚|あ}げる／{炒|いた}める」 significam:', choices: [{ n: 1, text: 'grelhar/assar / cozinhar em caldo / ferver / cozinhar no vapor / fritar (imerso) / refogar' }, { n: 2, text: 'cortar / lavar / servir / guardar / esquentar / esfriar' }, { n: 3, text: 'misturar / molhar / enrolar / descascar / temperar / provar' }, { n: 4, text: 'comprar / pedir / pagar / reservar / entregar / embrulhar' }], answer: 1, explanationPt: '{焼|や}く (grelhar/assar), {煮|に}る (cozinhar em caldo), ゆでる (ferver em água), {蒸|む}す (vapor), {揚|あ}げる (fritar imerso), {炒|いた}める (refogar). (Atividade 4 · 調理方法)' },
    { id: 'iro-e2-l4-17', number: 17, prompt: 'Ao pedir recomendação de restaurante, vocabulário útil: 「おすすめ／{看板|かんばん}／この{辺|へん}／{夫婦|ふうふ}／{本物|ほんもの}」 significam:', choices: [{ n: 1, text: 'recomendação / placa (do estabelecimento) / por aqui (esta região) / casal / autêntico (de verdade)' }, { n: 2, text: 'cardápio / garçom / longe / família / falso' }, { n: 3, text: 'reserva / conta / perto / amigo / barato' }, { n: 4, text: 'sobremesa / bebida / cozinha / cliente / caro' }], answer: 1, explanationPt: 'おすすめ (recomendação), {看板|かんばん} (placa), この{辺|へん}／このあたり (por aqui), {夫婦|ふうふ} (casal), {本物|ほんもの} (autêntico). (Atividade 1 · ことば)' },
    { id: 'iro-e2-l4-18', number: 18, prompt: 'Em avaliações de restaurante (口コミ), os pontos 「{味|あじ}／{量|りょう}／{値段|ねだん}／サービス」 e 「{満足|まんぞく}／リーズナブル／ボリューム」 significam:', choices: [{ n: 1, text: 'sabor / quantidade / preço / serviço — e satisfeito / com preço razoável / volume (porção)' }, { n: 2, text: 'cor / cheiro / peso / cor — e triste / caro / pequeno' }, { n: 3, text: 'mesa / cadeira / luz / som — e rápido / lento / quente' }, { n: 4, text: 'entrada / prato / sobremesa / bebida — e doce / salgado / azedo' }], answer: 1, explanationPt: '{味|あじ} (sabor), {量|りょう} (quantidade), {値段|ねだん} (preço), サービス (serviço). {満足|まんぞく}（な） (satisfeito), リーズナブル（な） (razoável no preço), ボリューム (volume/porção). (Atividade 5 · 口コミ)' },
    { id: 'iro-e2-l4-19', number: 19, prompt: '聴解 04-01 (recomendar): que loja é recomendada para ramen e por quê?', context: 'Ｂ：ラーメン、おれのおすすめは「{千歩|せんぽ}」かなあ。…ラーメンなら、あそこがいちばんおいしいよ。', choices: [{ n: 1, text: '«Senpo» — para ramen, é a mais gostosa (fica no esquina da galeria comercial).' }, { n: 2, text: '«Misaki Café» — famoso pelas sobremesas.' }, { n: 3, text: 'Um restaurante vietnamita.' }, { n: 4, text: '«Heibee» — comida da região.' }], answer: 1, explanationPt: 'ラーメンなら「{千歩|せんぽ}」がいちばんおいしい (なら, 文法 ❶). {商店街|しょうてんがい}の{角|かど}の{店|みせ}. (聴解 04-01)' },
    { id: 'iro-e2-l4-20', number: 20, prompt: '聴解 04-02 (recomendar): por que «Misaki Café» é sugerido para ir com a namorada?', context: 'Ｂ：それなら、{最近|さいきん}、{新|あたら}しくできた「みさきカフェ」はどう？ {女性|じょせい}にすごく{人気|にんき}があるのよ。…きれいだし、デザートもすごくおいしいよ。', choices: [{ n: 1, text: 'É novo, faz muito sucesso com as mulheres, é bonito e tem sobremesas ótimas.' }, { n: 2, text: 'É barato e serve ramen.' }, { n: 3, text: 'É um izakaya tradicional.' }, { n: 4, text: 'Fica muito longe.' }], answer: 1, explanationPt: 'それなら…「みさきカフェ」 (なら). {新|あたら}しくできた, {女性|じょせい}に{人気|にんき}, きれいだし、デザートもおいしい (〜し). {地図|ちず}を{送|おく}る. (聴解 04-02)' },
    { id: 'iro-e2-l4-21', number: 21, prompt: '聴解 04-03 (recomendar): o que se diz do restaurante vietnamita?', context: 'Ｂ：「{庵|あん}」っていう{店|みせ}で、ベトナム{人|じん}の{夫婦|ふうふ}がやっていて、{本物|ほんもの}のベトナム{料理|りょうり}が{食|た}べられるそうです。', choices: [{ n: 1, text: 'Chama-se «An», é tocado por um casal vietnamita e serve comida vietnamita autêntica.' }, { n: 2, text: 'É uma rede famosa de ramen.' }, { n: 3, text: 'Fica dentro da estação.' }, { n: 4, text: 'Só abre nos fins de semana.' }], answer: 1, explanationPt: '「{庵|あん}」, ベトナム{人|じん}の{夫婦|ふうふ}がやっている, {本物|ほんもの}のベトナム{料理|りょうり}. 〜そうです (ouvi dizer). (聴解 04-03)' },
    { id: 'iro-e2-l4-22', number: 22, prompt: '聴解 04-08/04-09 (como comer): o que dizem do soba misturado e do shumai?', context: '①Ａ：{混|ま}ぜそば…よく{混|ま}ぜて{食|た}べてください。 ②Ａ：このシュウマイは{味|あじ}がついてますから、しょうゆをつけないで{食|た}べてください。', choices: [{ n: 1, text: 'Misture bem o soba; o shumai já é temperado, então coma sem shoyu.' }, { n: 2, text: 'Coma o soba sem mexer; ponha muito shoyu no shumai.' }, { n: 3, text: 'Frite os dois antes.' }, { n: 4, text: 'Descasque e enrole.' }], answer: 1, explanationPt: 'よく{混|ま}ぜて{食|た}べて (混ぜる). {味|あじ}がついてますから、しょうゆをつけないで{食|た}べて (〜ないで). (聴解 04-08/04-09)' },
    { id: 'iro-e2-l4-23', number: 23, prompt: '聴解 04-10/04-11 (como comer): tempura de legumes e o tomate?', context: '③Ａ：{野菜|やさい}の{天|てん}ぷらは、つゆにつけて。エビはつゆにつけないで、{塩|しお}をかけて{食|た}べてください。 ④Ａ：このトマト、{何|なに}もかけないで、そのまま{食|た}べて。', choices: [{ n: 1, text: 'Legumes: molhe no caldo; camarão: sem caldo, com sal por cima. Tomate: sem nada, ao natural (そのまま).' }, { n: 2, text: 'Tudo com bastante shoyu.' }, { n: 3, text: 'Tudo frito de novo.' }, { n: 4, text: 'Tudo misturado.' }], answer: 1, explanationPt: 'つゆにつけて／つけないで, {塩|しお}をかけて, {何|なに}もかけないで、そのまま (como está). (聴解 04-10/04-11)' },
    { id: 'iro-e2-l4-24', number: 24, prompt: '聴解 04-12/04-13/04-14: temaki, batata-doce assada e café?', context: '⑤のりの{上|うえ}にご{飯|はん}と{刺身|さしみ}をのせて、{巻|ま}いて{食|た}べます。 ⑥{焼|や}きいも：{私|わたし}は、むかないで{食|た}べます。 ⑦コーヒー：{砂糖|さとう}、お{願|ねが}いします。ミルクは{入|い}れないでください。', choices: [{ n: 1, text: 'Temaki: pôr arroz e sashimi na alga e enrolar. Batata: comer sem descascar. Café: com açúcar, sem leite.' }, { n: 2, text: 'Temaki frito; batata com casca tirada; café puro.' }, { n: 3, text: 'Tudo cru.' }, { n: 4, text: 'Tudo com molho.' }], answer: 1, explanationPt: 'のせて{巻|ま}いて (のせる/巻く), むかないで{食|た}べる (むく), ミルクは{入|い}れないでください. (聴解 04-12〜14)' },
    { id: 'iro-e2-l4-25', number: 25, prompt: '会話 04-16 (しゃぶしゃぶ): o que Arai avisa sobre colocar a carne?', context: '新井：{一度|いちど}に、そんなにたくさんお{肉|にく}を{入|い}れないでくださいね。…お{肉|にく}を1{枚|まい}ずつ{取|と}って、お{湯|ゆ}の{中|なか}で…しゃぶしゃぶして{食|た}べるんです。', choices: [{ n: 1, text: 'Não colocar muita carne de uma vez; pegar 1 fatia por vez e balançar na água quente.' }, { n: 2, text: 'Colocar toda a carne junta e ferver bastante.' }, { n: 3, text: 'Comer a carne crua.' }, { n: 4, text: 'Fritar a carne primeiro.' }], answer: 1, explanationPt: 'たくさんお{肉|にく}を{入|い}れないでください (proibição, 文法 ❸); 1{枚|まい}ずつ {取|と}って、しゃぶしゃぶして{食|た}べる. (聴解 04-16)' },
    { id: 'iro-e2-l4-26', number: 26, prompt: '会話 04-16 (しゃぶしゃぶ): quando se pode colocar o udon?', context: '新井：うどんは、まだ{入|い}れちゃだめ。お{肉|にく}と{野菜|やさい}を{食|た}べてから、{入|い}れましょう。', choices: [{ n: 1, text: 'Ainda não pode (入れちゃだめ); colocar depois de comer a carne e os legumes (食べてから).' }, { n: 2, text: 'Colocar o udon primeiro de tudo.' }, { n: 3, text: 'Não colocar udon nunca.' }, { n: 4, text: 'Colocar junto com a carne.' }], answer: 1, explanationPt: 'まだ{入|い}れちゃだめ (proibição casual, ❸); {食|た}べてから{入|い}れましょう (sequência, ❹). たれ: ポン{酢|ず}とごまだれ. (聴解 04-16)' },
    { id: 'iro-e2-l4-27', number: 27, prompt: '聴解 04-26 (apresentar prato): o que é a フェイジョアーダ?', context: 'これはフェイジョアーダです。ブラジルの{家庭|かてい}{料理|りょうり}です。{豆|まめ}、{豚肉|ぶたにく}、{牛肉|ぎゅうにく}を{煮|に}て{作|つく}ります。ご{飯|はん}といっしょに{食|た}べてください。', choices: [{ n: 1, text: 'Comida caseira brasileira; feita cozinhando feijão, carne de porco e de vaca; come-se com arroz.' }, { n: 2, text: 'Uma sobremesa chinesa frita.' }, { n: 3, text: 'Uma salada indonésia.' }, { n: 4, text: 'Um prato nepalês cozido no vapor.' }], answer: 1, explanationPt: 'フェイジョアーダ = ブラジルの{家庭|かてい}{料理|りょうり}; {豆|まめ}・{豚肉|ぶたにく}・{牛肉|ぎゅうにく}を{煮|に}て{作|つく}る; ご{飯|はん}といっしょに. (聴解 04-26)' },
    { id: 'iro-e2-l4-28', number: 28, prompt: '聴解 04-27/04-28 (apresentar prato): モモ (Nepal) e ガドガド (Indonésia)?', context: '②モモ：{皮|かわ}の{中|なか}に{野菜|やさい}と{肉|にく}を{入|い}れて、{蒸|む}します。{餃子|ぎょうざ}に{似|に}ています。たれをつけて{食|た}べる。 ③ガドガド：ゆでた{野菜|やさい}やゆで{卵|たまご}…ピーナッツのソースをかけて{食|た}べます。', choices: [{ n: 1, text: 'Momo: massa recheada com legumes e carne, cozida no vapor (parece guioza), com molho. Gado-gado: salada de legumes cozidos e ovo, com molho de amendoim.' }, { n: 2, text: 'Ambos são doces fritos.' }, { n: 3, text: 'Ambos são sopas.' }, { n: 4, text: 'Ambos se comem crus.' }], answer: 1, explanationPt: 'モモ: {皮|かわ}の{中|なか}に{野菜|やさい}と{肉|にく}→{蒸|む}す, {餃子|ぎょうざ}に{似|に}ている, たれをつけて. ガドガド: ゆでた{野菜|やさい}・ゆで{卵|たまご}, ピーナッツソースをかけて. (聴解 04-27/04-28)' },
    { id: 'iro-e2-l4-29', number: 29, prompt: '聴解 04-29 (apresentar prato): o que é 麻花 (China)?', context: 'これは{中国|ちゅうごく}のお{菓子|かし}で、{麻花|マーホア}といいます。{小麦粉|こむぎこ}に{水|みず}、{砂糖|さとう}などを{入|い}れて、{油|あぶら}で{揚|あ}げます。ちょっと{固|かた}いです。', choices: [{ n: 1, text: 'Um doce chinês feito de farinha de trigo com água e açúcar, frito no óleo; é meio durinho.' }, { n: 2, text: 'Um prato de carne cozida.' }, { n: 3, text: 'Uma salada fresca.' }, { n: 4, text: 'Uma sopa de legumes.' }], answer: 1, explanationPt: '{麻花|マーホア} = お{菓子|かし} chinês; {小麦粉|こむぎこ}＋{水|みず}・{砂糖|さとう}→{油|あぶら}で{揚|あ}げる; {固|かた}い. (聴解 04-29)' },
    { id: 'iro-e2-l4-30', number: 30, prompt: '会話 04-30 (modelo «apresentar prato do seu país»): que estrutura aparece?', context: 'これは（ネパールの）モモという{料理|りょうり}です。…{餃子|ぎょうざ}に{似|に}ています。{家庭|かてい}{料理|りょうり}です。{皮|かわ}の{中|なか}に{野菜|やさい}と{肉|にく}を{入|い}れて、{蒸|む}します。たれをつけて、{食|た}べます。', choices: [{ n: 1, text: '«これは〜という料理です» + «〜に似ています» + materiais/preparo (〜を入れて、蒸します) + modo de comer (〜をつけて食べます).' }, { n: 2, text: 'só dizer o preço do prato.' }, { n: 3, text: 'pedir a conta.' }, { n: 4, text: 'fazer uma reserva.' }], answer: 1, explanationPt: 'Modelo de apresentação: nome (〜という{料理|りょうり}), semelhança (〜に{似|に}ている), material/preparo, 食べ方. (会話 04-30)' },
    { id: 'iro-e2-l4-31', number: 31, prompt: '「{餃子|ぎょうざ}に{似|に}ています」 significa:', choices: [{ n: 1, text: 'é/parece (parecido) com guioza' }, { n: 2, text: 'é diferente de guioza' }, { n: 3, text: 'é melhor que guioza' }, { n: 4, text: 'não tem guioza' }], answer: 1, explanationPt: 'N に{似|に}ています = parece-se com N / é semelhante a N. (Atividade 4)' },
    { id: 'iro-e2-l4-32', number: 32, prompt: '読む (口コミ): qual ponto cada avaliação comenta — as categorias são:', choices: [{ n: 1, text: '{味|あじ} (sabor), {量|りょう} (quantidade), {値段|ねだん} (preço), サービス・その{他|た} (serviço e outros)' }, { n: 2, text: 'cor, cheiro, peso e tamanho' }, { n: 3, text: 'mesa, cadeira, música e luz' }, { n: 4, text: 'entrada, prato principal, sobremesa e bebida' }], answer: 1, explanationPt: 'As avaliações (口コミ) costumam comentar {味|あじ}／{量|りょう}／{値段|ねだん}／サービス. Ex.: ボリューム満点 (porção farta), リーズナブル (preço justo). (Atividade 5 · 読む)' },
    { id: 'iro-e2-l4-33', number: 33, prompt: 'Os kanji 「{塩|しお}／{油|あぶら}／{量|りょう}／{焼|や}く／{切|き}る／{入|い}れる」 lêem-se:', choices: [{ n: 1, text: 'しお (sal) / あぶら (óleo) / りょう (quantidade) / やく (grelhar) / きる (cortar) / いれる (pôr)' }, { n: 2, text: 'しお / ゆ / りょう / しょう / せつ / にゅう' }, { n: 3, text: 'えん / あぶら / りょう / やく / きる / いれる' }, { n: 4, text: 'しお / あぶら / かず / やく / きる / はいる' }], answer: 1, explanationPt: '{塩|しお}, {油|あぶら}, {量|りょう}, {焼|や}く, {切|き}る, {入|い}れる. Também: 〜{方|かた} (modo de), 〜{屋|や} (loja), {満足|まんぞく}. (漢字のことば)' },
    { id: 'iro-e2-l4-34', number: 34, prompt: '「{定食屋|ていしょくや}／ラーメン{屋|や}」 — o sufixo 「〜{屋|や}」 significa:', choices: [{ n: 1, text: 'loja / estabelecimento (que vende ou serve aquilo)' }, { n: 2, text: 'pessoa / cliente' }, { n: 3, text: 'preço / conta' }, { n: 4, text: 'cidade / bairro' }], answer: 1, explanationPt: '〜{屋|や} = loja/casa especializada. {定食屋|ていしょくや} (casa de teishoku), ラーメン{屋|や} (casa de ramen), パン{屋|や} (padaria). (漢字 · 大切なことば)' },
    { id: 'iro-e2-l4-35', number: 35, prompt: '「この{料理|りょうり}の{食|た}べ{方|かた}を{教|おし}えてください」 — 「V-{方|かた}」 (ます-stem + 方) significa:', choices: [{ n: 1, text: 'o modo/jeito de fazer ~ (como comer / como fazer)' }, { n: 2, text: 'a pessoa que faz ~' }, { n: 3, text: 'o lugar de ~' }, { n: 4, text: 'a hora de ~' }], answer: 1, explanationPt: 'V(ますstem)+{方|かた} = modo de fazer: {食|た}べ{方|かた} (modo de comer), {作|つく}り{方|かた} (modo de fazer), {飲|の}み{方|かた}. (漢字 · Atividade 2)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 4 (聴解スクリプト)
const L4_SCRIPTS: Record<string, ScriptItem[]> = {
  '04-01': [
    {
      label: '① どこかいい店？ — ラーメン (04-01)',
      setupJa: 'おすすめの{店|みせ}について、{人|ひと}が{質問|しつもん}しています。',
      setupPt: 'Pedindo recomendação de restaurante. ① ramen.',
      lines: [
        { speaker: 'A', ja: 'おいしいラーメンが{食|た}べたいんですけど、どこがいいですか？', pt: 'Quero comer um ramen gostoso. Qual é bom?' },
        { speaker: 'B', ja: 'ラーメン、おれのおすすめは「{千歩|せんぽ}」かなあ。', pt: 'Ramen… minha recomendação é o «Senpo».' },
        { speaker: 'A', ja: 'あ、あの{商店街|しょうてんがい}にある{最初|さいしょ}の{角|かど}の{店|みせ}ですか？', pt: 'Ah, aquele da primeira esquina, na galeria comercial?' },
        { speaker: 'B', ja: 'そうそう。ラーメンなら、あそこがいちばんおいしいよ。', pt: 'Isso. Para ramen, aquele é o mais gostoso.' },
        { speaker: 'A', ja: 'じゃあ、{今度|こんど}{行|い}ってみます。', pt: 'Então vou lá qualquer dia.' },
      ],
    },
  ],
  '04-02': [
    {
      label: '② 彼女と食事に行く店 — みさきカフェ (04-02)',
      setupPt: '② lugar para ir comer com a namorada.',
      lines: [
        { speaker: 'A', ja: '{今度|こんど}、{彼女|かのじょ}と{食事|しょくじ}に{行|い}きたいんですけど、この{辺|へん}で、どこかいい{店|みせ}、ありませんか？', pt: 'Quero ir comer com minha namorada; tem algum lugar bom por aqui?' },
        { speaker: 'B', ja: 'そうねえ――。それなら、{最近|さいきん}、{新|あたら}しくできた「みさきカフェ」はどう？ {女性|じょせい}にすごく{人気|にんき}があるのよ。', pt: 'Deixa ver… Nesse caso, que tal o «Misaki Café», que abriu recentemente? Faz muito sucesso com as mulheres.' },
        { speaker: 'A', ja: 'どんな{店|みせ}ですか？', pt: 'Como é o lugar?' },
        { speaker: 'B', ja: 'きれいだし、デザートもすごくおいしいよ。', pt: 'É bonito, e as sobremesas são ótimas.' },
        { speaker: 'A', ja: 'へー、どこにありますか？', pt: 'Nossa, onde fica?' },
        { speaker: 'B', ja: '{待|ま}って、じゃあ、{今|いま}、{地図|ちず}{送|おく}るね。', pt: 'Espera, vou te mandar o mapa agora.' },
      ],
    },
  ],
  '04-03': [
    {
      label: '③ ベトナム料理 — 庵 (04-03)',
      setupPt: '③ restaurante vietnamita.',
      lines: [
        { speaker: 'A', ja: 'あのう、この{近|ちか}くにベトナム{料理|りょうり}の{店|みせ}、ないですか？', pt: 'Hum, não tem um restaurante vietnamita perto daqui?' },
        { speaker: 'B', ja: 'うーん、この{近|ちか}くにはないですけど、「{庵|あん}」っていう{店|みせ}で、ベトナム{人|じん}の{夫婦|ふうふ}がやっていて、{本物|ほんもの}のベトナム{料理|りょうり}が{食|た}べられるそうです。', pt: 'Hmm, bem perto não tem, mas tem um chamado «An», tocado por um casal vietnamita; dizem que serve comida vietnamita de verdade.' },
        { speaker: 'A', ja: 'へー、そうなんですか。{知|し}りませんでした。じゃあ、{今度|こんど}{行|い}ってみます。', pt: 'Nossa, é mesmo? Não sabia. Então vou lá um dia.' },
      ],
    },
  ],
  '04-04': [
    {
      label: '④ 土地の料理 — 平兵衛 (04-04)',
      setupPt: '④ comida típica da região.',
      lines: [
        { speaker: 'A', ja: 'すみません、この{土地|とち}の{料理|りょうり}が{食|た}べたいんですが、この{近|ちか}くに、おすすめの{店|みせ}がありますか？', pt: 'Com licença, quero comer a comida típica daqui; tem algum lugar recomendado por perto?' },
        { speaker: 'B', ja: 'そうですね、この{近|ちか}くなら、「{平兵衛|へいべえ}」がおすすめです。とり{天|てん}がおいしいし、ほかにもいろいろなメニューがありますよ。', pt: 'Bem, por aqui eu recomendo o «Heibee». O tempura de frango é gostoso, e tem vários outros pratos.' },
        { speaker: 'A', ja: 'それ、どこですか？', pt: 'Onde fica?' },
        { speaker: 'B', ja: 'ここから{歩|ある}いて10{分|ぷん}ぐらいの{所|ところ}にあります。', pt: 'Fica a uns 10 minutos a pé daqui.' },
        { speaker: 'A', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Obrigado.' },
      ],
    },
  ],
  '04-08': [
    {
      label: '① 混ぜそば (04-08)',
      setupJa: '{食|た}べ{方|かた}・{飲|の}み{方|かた}について、{説明|せつめい}を{聞|き}いています。',
      setupPt: 'Ouvindo explicações de como comer/beber. ① soba misturado.',
      lines: [
        { speaker: 'A', ja: '{混|ま}ぜそば、お{待|ま}たせしました！ よく{混|ま}ぜて{食|た}べてください。', pt: 'O soba misturado, desculpe a espera! Misture bem e coma.' },
        { speaker: 'B', ja: 'はい。', pt: 'Tá.' },
      ],
    },
  ],
  '04-09': [
    {
      label: '② シュウマイ (04-09)',
      setupPt: '② shumai (já temperado).',
      lines: [
        { speaker: 'A', ja: 'このシュウマイは{味|あじ}がついてますから、しょうゆをつけないで{食|た}べてください。', pt: 'Este shumai já vem temperado, então coma sem passar shoyu.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '04-10': [
    {
      label: '③ 天ぷら (04-10)',
      setupPt: '③ tempura (caldo / sal).',
      lines: [
        { speaker: 'A', ja: 'こちらの{野菜|やさい}の{天|てん}ぷらは、つゆにつけて{食|た}べてください。エビはつゆにつけないで、{塩|しお}をかけて{食|た}べてください。', pt: 'Este tempura de legumes, coma molhando no caldo. O camarão, coma sem o caldo, com sal por cima.' },
        { speaker: 'B', ja: 'はい。', pt: 'Tá.' },
      ],
    },
  ],
  '04-11': [
    {
      label: '④ トマト (04-11)',
      setupPt: '④ tomate (ao natural).',
      lines: [
        { speaker: 'A', ja: 'このトマト、{何|なに}もかけないで、そのまま{食|た}べて。', pt: 'Este tomate, coma assim mesmo, sem pôr nada.' },
        { speaker: 'B', ja: 'はい――。あ、{甘|あま}くておいしい。', pt: 'Tá… Ah, é doce e gostoso.' },
      ],
    },
  ],
  '04-12': [
    {
      label: '⑤ 手巻きずし (04-12)',
      setupPt: '⑤ temaki-zushi.',
      lines: [
        { speaker: 'A', ja: '{手巻|てま}きずしは、のりの{上|うえ}にご{飯|はん}と{刺身|さしみ}をのせて、{巻|ま}いて{食|た}べます。', pt: 'O temaki: coloque arroz e sashimi sobre a alga, enrole e coma.' },
        { speaker: 'B', ja: 'こうですか。', pt: 'Assim?' },
      ],
    },
  ],
  '04-13': [
    {
      label: '⑥ 焼きいも (04-13)',
      setupPt: '⑥ batata-doce assada.',
      lines: [
        { speaker: 'A', ja: '{焼|や}きいもは、{皮|かわ}をむいて{食|た}べますか？', pt: 'A batata-doce assada, você descasca para comer?' },
        { speaker: 'B', ja: '{私|わたし}は、むかないで{食|た}べます。', pt: 'Eu como sem descascar.' },
        { speaker: 'A', ja: 'へー、そうですか。', pt: 'Ah, é?' },
      ],
    },
  ],
  '04-14': [
    {
      label: '⑦ コーヒー (04-14)',
      setupPt: '⑦ café.',
      lines: [
        { speaker: 'A', ja: 'コーヒーに{砂糖|さとう}とミルク、{入|い}れますか？', pt: 'Você põe açúcar e leite no café?' },
        { speaker: 'B', ja: '{砂糖|さとう}、お{願|ねが}いします。ミルクは{入|い}れないでください。', pt: 'Açúcar, por favor. Leite, não coloque.' },
      ],
    },
  ],
  '04-16': [
    {
      label: '会話 — しゃぶしゃぶの食べ方 (04-16)',
      setupJa: '{新井|あらい}さんが、はじめてしゃぶしゃぶを{食|た}べるフンさん・ドックさんに、{食|た}べ{方|かた}を{説明|せつめい}しています。',
      setupPt: 'Arai explica a Fun e Dok, que vão comer shabu-shabu pela primeira vez, como se come.',
      lines: [
        { speaker: 'ドック', ja: 'お{肉|にく}、もう{入|い}れてもいいですか？', pt: 'Já posso colocar a carne?' },
        { speaker: '新井', ja: 'どうぞ。あ！ {一度|いちど}に、そんなにたくさんお{肉|にく}を{入|い}れないでくださいね。', pt: 'Pode. Ah! Não coloque tanta carne de uma vez.' },
        { speaker: '新井', ja: 'しゃぶしゃぶは、お{肉|にく}を1{枚|まい}ずつ{取|と}って、お{湯|ゆ}の{中|なか}で、こうやって2、3{回|かい}しゃぶしゃぶして{食|た}べるんです。', pt: 'No shabu-shabu, pega-se 1 fatia de carne por vez e, na água quente, balança assim 2, 3 vezes antes de comer.' },
        { speaker: 'ドック', ja: 'へー、こうですか？', pt: 'Nossa, assim?' },
        { speaker: '新井', ja: 'そうそう。あ、スープには{塩|しお}が{入|はい}ってますから、たれをつけて{食|た}べてください。', pt: 'Isso. Ah, o caldo já tem sal, então coma passando no molho (tare).' },
        { speaker: 'フン', ja: 'これは、どれがいいですか？', pt: 'E destes, qual é melhor?' },
        { speaker: '新井', ja: 'ポン{酢|ず}とごまだれがあります。{私|わたし}はポン{酢|ず}が{好|す}きですけど、{両方|りょうほう}{試|ため}してみてください。', pt: 'Tem ponzu e molho de gergelim. Eu gosto do ponzu, mas experimente os dois.' },
        { speaker: 'フン', ja: 'うどんを{入|い}れてもいいですか？', pt: 'Posso colocar o udon?' },
        { speaker: '新井', ja: 'うどんは、まだ{入|い}れちゃだめ。お{肉|にく}と{野菜|やさい}を{食|た}べてから、{入|い}れましょう。', pt: 'O udon, ainda não pode. Vamos colocar depois de comer a carne e os legumes.' },
        { speaker: 'フン', ja: 'そうなんですか。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '04-26': [
    {
      label: '① フェイジョアーダ（ブラジル）(04-26)',
      setupJa: '{国際|こくさい}{交流|こうりゅう}パーティーで、{自分|じぶん}の{国|くに}の{料理|りょうり}を{紹介|しょうかい}しています。',
      setupPt: 'Numa festa de intercâmbio, cada um apresenta um prato do seu país. ① Brasil.',
      lines: [
        { speaker: 'Narração', ja: 'これはフェイジョアーダです。ブラジルの{家庭|かてい}{料理|りょうり}です。{豆|まめ}、{豚肉|ぶたにく}、{牛肉|ぎゅうにく}を{煮|に}て{作|つく}ります。ブラジル{人|じん}はよく{食|た}べます。ご{飯|はん}といっしょに{食|た}べてください。', pt: 'Esta é a feijoada. É um prato caseiro brasileiro. Faz-se cozinhando feijão, carne de porco e carne de vaca. Os brasileiros comem bastante. Coma junto com arroz.' },
      ],
    },
  ],
  '04-27': [
    {
      label: '② モモ（ネパール）(04-27)',
      setupPt: '② Nepal.',
      lines: [
        { speaker: 'Narração', ja: 'これはモモです。ネパールの{料理|りょうり}です。{皮|かわ}の{中|なか}に、{野菜|やさい}と{肉|にく}を{入|い}れて、{蒸|む}します。{餃子|ぎょうざ}に{似|に}ています。たれをつけて{食|た}べると、おいしいですよ。', pt: 'Este é o momo. É um prato nepalês. Coloca-se legumes e carne dentro da massa e cozinha-se no vapor. Parece guioza. Fica gostoso comendo com molho.' },
      ],
    },
  ],
  '04-28': [
    {
      label: '③ ガドガド（インドネシア）(04-28)',
      setupPt: '③ Indonésia.',
      lines: [
        { speaker: 'Narração', ja: 'これはインドネシアのガドガドというサラダです。ゆでた{野菜|やさい}やゆで{卵|たまご}などが{入|はい}っています。ピーナッツのソースをかけて{食|た}べます。このソースは{甘辛|あまから}いです。', pt: 'Esta é uma salada indonésia chamada gado-gado. Leva legumes cozidos, ovo cozido, etc. Come-se com molho de amendoim por cima. Esse molho é agridoce/apimentado.' },
      ],
    },
  ],
  '04-29': [
    {
      label: '④ 麻花（中国）(04-29)',
      setupPt: '④ China.',
      lines: [
        { speaker: 'Narração', ja: 'これは{中国|ちゅうごく}のお{菓子|かし}で、{麻花|マーホア}といいます。{小麦粉|こむぎこ}に{水|みず}、{砂糖|さとう}などを{入|い}れて、{油|あぶら}で{揚|あ}げます。ちょっと{固|かた}いです。', pt: 'Este é um doce chinês chamado mahua. Mistura-se água e açúcar à farinha de trigo e frita-se no óleo. É um pouco durinho.' },
      ],
    },
  ],
  '04-30': [
    {
      label: '会話 — 自分の国の料理を紹介 (modelo) (04-30)',
      setupPt: 'Modelo: apresentar um prato do seu país (nome → semelhança → material/preparo → modo de comer).',
      lines: [
        { speaker: '客', ja: 'これはネパールのモモという{料理|りょうり}です。{餃子|ぎょうざ}に{似|に}ています。{家庭|かてい}{料理|りょうり}です。', pt: 'Este é um prato nepalês chamado momo. Parece guioza. É comida caseira.' },
        { speaker: '客', ja: '{皮|かわ}の{中|なか}に、{野菜|やさい}と{肉|にく}を{入|い}れて、{蒸|む}します。たれをつけて、{食|た}べます。', pt: 'Coloca-se legumes e carne dentro da massa e cozinha-se no vapor. Come-se com molho.' },
      ],
    },
  ],
}

const lesson4: Section = {
  id: 'lesson-4',
  level: 'elementary2',
  titleJa: '第4課 しょうゆをつけないで食べてください',
  titlePt: 'Lição 4 — Coma sem passar shoyu',
  summaryPt:
    'No restaurante · ouvir a indicação de um restaurante recomendado (ラーメンなら…がいちばんおいしい), entender e explicar como se come um prato (つけて／つけないで食べてください・よく混ぜて食べてください), apresentar um prato do seu país (餃子に似ています・皮の中に〜を入れて蒸します) e ler avaliações na internet (味／量／値段／サービス).',
  studyNotes: [
    {
      title: 'Tópico: No restaurante (レストランで)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ouvir a indicação de um restaurante recomendado e entender suas características.\n' +
        '- Ouvir e entender a explicação de como comer um prato.\n' +
        '- Perguntar e responder sobre como se come um prato.\n' +
        '- Apresentar de forma simples um prato do seu país (características, ingredientes, modo de comer).\n' +
        '- Ler avaliações de restaurantes na internet e extrair informações como sabor e preço.\n\n' +
        '💡 Pergunta de abertura: ほかの{国|くに}の{人|ひと}に{紹介|しょうかい}したい{料理|りょうり}がありますか？ (há um prato que você quer apresentar a estrangeiros?).',
    },
    {
      title: '〜なら — retomar o tema e sugerir (➊)',
      bodyPt:
        '**〜なら** retoma o assunto que o outro trouxe e introduz uma **sugestão/opinião** sobre ele:\n\n' +
        '- `ラーメンなら、あそこがいちばんおいしいよ` = (se é) ramen, aquele ali é o mais gostoso.\n' +
        '- `それなら、「みさきカフェ」はどう？` = nesse caso, que tal o «Misaki Café»?\n' +
        '- `この{近|ちか}くなら、「{平兵衛|へいべえ}」がおすすめです` = (se for) por aqui, recomendo o «Heibee».\n\n' +
        '💡 Antes de なら vem o **tema** (substantivo ou frase). (文法ノート ❶)',
    },
    {
      title: 'V-て / V-ないで + 食べる — modo de comer (➋)',
      bodyPt:
        'Para dizer **como** comer/beber algo:\n\n' +
        '- **V-て{食|た}べる** (fazendo): `つゆにつけて{食|た}べる`, `よく{混|ま}ぜて{食|た}べる`, `{塩|しお}をかけて{食|た}べる`, `のせて{巻|ま}いて{食|た}べる`.\n' +
        '- **V-ないで{食|た}べる** (sem fazer): `しょうゆをつけないで{食|た}べる`, `{皮|かわ}をむかないで{食|た}べる`, `{何|なに}もかけないで、そのまま{食|た}べる`.\n\n' +
        '🍽️ Verbos de preparo na mesa: つける (molhar), {混|ま}ぜる (misturar), かける (regar), {入|い}れる (pôr), {巻|ま}く (enrolar), のせる (pôr em cima), むく (descascar). (文法ノート ❷)',
    },
    {
      title: 'V-ないでください / 〜ちゃだめ — proibir (➌)',
      bodyPt:
        'Para pedir que **NÃO** se faça algo:\n\n' +
        '- **V-ないでください** (educado): `たくさんお{肉|にく}を{入|い}れないでください` (não coloque muita carne).\n' +
        '- **〜ちゃだめ** (casual, = 〜てはいけない): `うどんは、まだ{入|い}れちゃだめ` (o udon ainda não pode pôr).\n\n' +
        '(文法ノート ❸)',
    },
    {
      title: 'V-てから — ordem das ações (➍)',
      bodyPt:
        '**V-てから** = **depois de** fazer ~ (sequência de ações):\n\n' +
        '- `お{肉|にく}と{野菜|やさい}を{食|た}べてから、{入|い}れましょう` = vamos colocar depois de comer a carne e os legumes.\n\n' +
        '(文法ノート ❹)',
    },
    {
      title: '〜が — contraste (➎)',
      bodyPt:
        '**〜が** (no fim de uma frase) liga duas ideias em **contraste** (mas/porém) — é mais **formal** que 〜けど:\n\n' +
        '- `とてもおいしかったですが、{私|わたし}には{量|りょう}が{多|おお}かったです` = estava muito gostoso, mas para mim a porção foi grande.\n' +
        '- `お{店|みせ}は{新|あたら}しくてきれいですが、お{昼|ひる}は{混|こ}んでいます` = a loja é nova e bonita, mas no almoço fica lotada.\n\n' +
        '(文法ノート ❺)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Modo de comer (食べ方):** つける, {混|ま}ぜる, かける, {入|い}れる, {巻|ま}く, のせる, むく, そのまま (ao natural).\n\n' +
        '**Temperos (調味料):** {砂糖|さとう}, {塩|しお}, こしょう, スパイス, ソース, たれ, {油|あぶら}. **Preparo (調理方法):** {焼|や}く (grelhar), {煮|に}る (cozinhar em caldo), ゆでる (ferver), {蒸|む}す (vapor), {揚|あ}げる (fritar), {炒|いた}める (refogar).\n\n' +
        '**Recomendar/avaliar:** おすすめ, {看板|かんばん}, この{辺|へん}, {夫婦|ふうふ}, {本物|ほんもの}, 〜に{似|に}ている (parecer-se com), {味|あじ}／{量|りょう}／{値段|ねだん}／サービス, {満足|まんぞく}（な）, リーズナブル（な）, ボリューム.\n\n' +
        '**Kanji da lição:** {塩|しお}, {油|あぶら}, {量|りょう}, 〜{方|かた} (modo de), 〜{屋|や} (loja), {満足|まんぞく}, {切|き}る, {焼|や}く, {入|い}れる.',
    },
  ],
  groups: [lesson4Group],
  audios: attachScripts(4, L4_SCRIPTS),
}

// ---- Lição 5: 早く予約したほうがいいですよ (tópico 旅行に行こう) -----------------
const lesson5Group: ExerciseGroup = {
  id: 'iro-e2-l5',
  title: '早く予約したほうがいいですよ',
  subtitlePt: 'Entender a apresentação de um destino turístico · planejar uma viagem com um amigo · pedir e dar conselhos de viagem',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l5-1', number: 1, prompt: '「{海|うみ}で{泳|およ}げます」「ボートに{乗|の}れます」「お{土産|みやげ}が{買|か}えます」 — essas formas (可能形/V-られる) expressam:', choices: [{ n: 1, text: 'o que é possível fazer ali (dá para nadar / pode andar de barco / pode comprar)' }, { n: 2, text: 'o que já foi feito' }, { n: 3, text: 'uma ordem' }, { n: 4, text: 'uma proibição' }], answer: 1, explanationPt: 'Forma potencial: {泳|およ}ぐ→{泳|およ}げる, {乗|の}る→{乗|の}れる, {買|か}う→{買|か}える, {見|み}る→{見|み}られる, {遊|あそ}ぶ→{遊|あそ}べる. (文法ノート ❶)' },
    { id: 'iro-e2-l5-2', number: 2, prompt: 'Qual é a forma potencial correta de 「{見|み}る／{遊|あそ}ぶ／{行|い}く」?', choices: [{ n: 1, text: '{見|み}られる / {遊|あそ}べる / {行|い}ける' }, { n: 2, text: '{見|み}れる / {遊|あそ}ぶれる / {行|い}くる' }, { n: 3, text: '{見|み}させる / {遊|あそ}ばせる / {行|い}かせる' }, { n: 4, text: '{見|み}ない / {遊|あそ}ばない / {行|い}かない' }], answer: 1, explanationPt: 'II {見|み}る→{見|み}られる; I {遊|あそ}ぶ→{遊|あそ}べる, {行|い}く→{行|い}ける. Ex.: バスで{行|い}けます. (文法ノート ❶)' },
    { id: 'iro-e2-l5-3', number: 3, prompt: '「{景色|けしき}がきれいなところ」「{遊|あそ}べるところ」 — usar 「ＡＤＪ/V + ところ／{名詞|めいし}」 serve para:', choices: [{ n: 1, text: 'descrever um lugar pela sua característica (um lugar de paisagem bonita / um lugar onde dá para brincar)' }, { n: 2, text: 'dizer a hora' }, { n: 3, text: 'pedir permissão' }, { n: 4, text: 'contar quantidade' }], answer: 1, explanationPt: 'Modificação de substantivo: {景色|けしき}がきれいな{所|ところ}, {遊|あそ}べる{所|ところ}, {自然|しぜん}が{豊|ゆた}かな{町|まち}. (文法ノート ❷)' },
    { id: 'iro-e2-l5-4', number: 4, prompt: '「{湖|みずうみ}と{富士山|ふじさん}がいっしょに{見|み}られて、すごくきれいだ**そうです**よ」 — 「〜そうです」 (após forma comum) significa:', choices: [{ n: 1, text: 'dizem que ~ / ouvi que ~ (informação ouvida de outra pessoa — 伝聞)' }, { n: 2, text: 'parece que vai ~ (pela aparência)' }, { n: 3, text: 'quero ~' }, { n: 4, text: 'tenho que ~' }], answer: 1, explanationPt: '［forma comum］+ そうです = transmite o que se ouviu (hearsay): きれいだそうです (dizem que é bonito), {雨|あめ}が{降|ふ}るそうです. (文法ノート ❸)' },
    { id: 'iro-e2-l5-5', number: 5, prompt: '「バスで{安|やす}くて{便利|べんり}だ**って**{先輩|せんぱい}が{言|い}ってました」「うどんがおいしい**って**{聞|き}きました」 — 「〜って」 é:', choices: [{ n: 1, text: 'forma casual de 〜と (citar / relatar o que se ouviu)' }, { n: 2, text: 'uma pergunta' }, { n: 3, text: 'uma negação' }, { n: 4, text: 'uma ordem' }], answer: 1, explanationPt: '〜って = 〜と (citação) na fala. 〜って{言|い}ってました / 〜って{聞|き}きました = (alguém) disse que / ouvi que. (文法ノート ❸)' },
    { id: 'iro-e2-l5-6', number: 6, prompt: '「{何|なに}で{行|い}っ**たらいいですか**？」「どんなところに{泊|と}まっ**たらいいですか**？」 — 「V-たらいいですか」 serve para:', choices: [{ n: 1, text: 'pedir conselho/orientação (o que é melhor fazer? como devo fazer?)' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'recusar' }, { n: 4, text: 'falar do passado' }], answer: 1, explanationPt: 'V-たらいいですか pergunta o que/como é melhor fazer (pedir conselho): {何|なに}を{食|た}べたらいいですか, {何|なに}を{準備|じゅんび}したらいいですか. (文法ノート ❹)' },
    { id: 'iro-e2-l5-7', number: 7, prompt: '「{早|はや}く{予約|よやく}し**たほうがいいですよ**」 — 「V-たほうがいい」 serve para:', choices: [{ n: 1, text: 'dar um conselho (é melhor reservar logo)' }, { n: 2, text: 'pedir permissão' }, { n: 3, text: 'dizer o que já foi feito' }, { n: 4, text: 'comparar preços' }], answer: 1, translationPt: 'É melhor reservar logo.', explanationPt: 'V(forma タ)+ほうがいい = aconselhar (é melhor fazer). {上着|うわぎ}を{持|も}って{行|い}ったほうがいいですよ. (文法ノート ❺)' },
    { id: 'iro-e2-l5-8', number: 8, prompt: '「{日曜日|にちようび}は{行|い}か**ないほうがいい**ですよ」 — 「V-ないほうがいい」 significa:', choices: [{ n: 1, text: 'é melhor NÃO fazer (é melhor não ir no domingo)' }, { n: 2, text: 'é melhor ir no domingo' }, { n: 3, text: 'tem que ir no domingo' }, { n: 4, text: 'pode ir no domingo' }], answer: 1, explanationPt: 'V-ないほうがいい = é melhor não fazer (conselho negativo). {混|こ}むから、{行|い}かないほうがいい. (文法ノート ❺)' },
    { id: 'iro-e2-l5-9', number: 9, prompt: 'Descrever um lugar (どんなところ): 「{自然|しぜん}が{豊|ゆた}か(な)／{混|こ}んでいる／{古|ふる}い{町|まち}／{海外|かいがい}からの{観光客|かんこうきゃく}に{人気|にんき}がある」 significam:', choices: [{ n: 1, text: 'rico em natureza / lotado (cheio de gente) / cidade antiga / popular entre turistas estrangeiros' }, { n: 2, text: 'pobre / vazio / cidade nova / desconhecido' }, { n: 3, text: 'quente / frio / grande / pequeno' }, { n: 4, text: 'caro / barato / longe / perto' }], answer: 1, explanationPt: '{自然|しぜん}が{豊|ゆた}か (natureza farta), {混|こ}んでいる (lotado), {古|ふる}い{町|まち} (cidade antiga), {観光客|かんこうきゃく}に{人気|にんき}がある (popular com turistas). (Atividade 1 · ことば)' },
    { id: 'iro-e2-l5-10', number: 10, prompt: 'Tipo de hospedagem — qual é uma POUSADA japonesa tradicional (com onsen, grande)?', image: `${IMG}/Z_05_3_02_ryokan.png`, imageAlt: 'grande pousada japonesa tradicional (ryokan)', choices: [{ n: 1, text: '{旅館|りょかん} — ryokan (pousada tradicional)' }, { n: 2, text: 'ホテル — hotel (estilo ocidental)' }, { n: 3, text: '{民宿|みんしゅく} — pousada familiar pequena' }, { n: 4, text: '{船|ふね} — navio' }], answer: 1, explanationPt: '{旅館|りょかん} = pousada japonesa tradicional (tatame, onsen). ホテル = hotel ocidental. (Atividade 3 · ことばの準備)' },
    { id: 'iro-e2-l5-11', number: 11, prompt: 'E esta hospedagem pequena, tipo casa de família?', image: `${IMG}/Z_05_3_03_minshuku.png`, imageAlt: 'pequena pousada familiar (minshuku)', choices: [{ n: 1, text: '{民宿|みんしゅく} — pousada familiar (casa pequena)' }, { n: 2, text: '{旅館|りょかん} — pousada tradicional grande' }, { n: 3, text: 'ホテル — hotel' }, { n: 4, text: '{飛行機|ひこうき} — avião' }], answer: 1, explanationPt: '{民宿|みんしゅく} = hospedagem pequena, tocada por uma família ({家族|かぞく}でやってる{小|ちい}さな{宿|やど}); costuma ser mais barata. (Atividade 3 · ことばの準備)' },
    { id: 'iro-e2-l5-12', number: 12, prompt: 'Que meio de transporte (交通手段) é este?', image: `${IMG}/Z_05_3_06_fune.png`, imageAlt: 'navio / balsa', choices: [{ n: 1, text: '{船|ふね} — navio / barco' }, { n: 2, text: '{電車|でんしゃ} — trem' }, { n: 3, text: '{飛行機|ひこうき} — avião' }, { n: 4, text: '{車|くるま} — carro' }], answer: 1, explanationPt: '{船|ふね} = navio/barco. (Atividade 3 · 交通手段)' },
    { id: 'iro-e2-l5-13', number: 13, prompt: 'Que meio de transporte é este?', image: `${IMG}/Z_05_3_07_hikooki.png`, imageAlt: 'avião', choices: [{ n: 1, text: '{飛行機|ひこうき} — avião' }, { n: 2, text: '{船|ふね} — navio' }, { n: 3, text: 'バス — ônibus' }, { n: 4, text: '{電車|でんしゃ} — trem' }], answer: 1, explanationPt: '{飛行機|ひこうき} = avião. Outros: バス (ônibus), {電車|でんしゃ} (trem), {車|くるま} (carro). (Atividade 3 · 交通手段)' },
    { id: 'iro-e2-l5-14', number: 14, prompt: 'Que meio de transporte é este?', image: `${IMG}/Z_05_3_05_densha.png`, imageAlt: 'trem', choices: [{ n: 1, text: '{電車|でんしゃ} — trem' }, { n: 2, text: '{車|くるま} — carro' }, { n: 3, text: '{船|ふね} — navio' }, { n: 4, text: '{飛行機|ひこうき} — avião' }], answer: 1, explanationPt: '{電車|でんしゃ} = trem. {日光|にっこう}までなら、{電車|でんしゃ}で{行|い}けます. (Atividade 3 · 交通手段)' },
    { id: 'iro-e2-l5-15', number: 15, prompt: 'O que é este item (準備するもの, para a praia)?', image: `${IMG}/Z_05_3_14_mizugi.png`, imageAlt: 'maiô e sunga (trajes de banho)', choices: [{ n: 1, text: '{水着|みずぎ} — traje de banho (maiô/sunga)' }, { n: 2, text: '{帽子|ぼうし} — chapéu' }, { n: 3, text: '{手袋|てぶくろ} — luvas' }, { n: 4, text: 'サングラス — óculos de sol' }], answer: 1, explanationPt: '{水着|みずぎ} = roupa de banho. Para nadar ({泳|およ}ぐ) / snorkeling. (Atividade 3 · 準備するもの)' },
    { id: 'iro-e2-l5-16', number: 16, prompt: 'O que é este item (準備するもの, para o frio/neve)?', image: `${IMG}/Z_05_3_11_tebukuro.png`, imageAlt: 'par de luvas', choices: [{ n: 1, text: '{手袋|てぶくろ} — luvas' }, { n: 2, text: '{水着|みずぎ} — traje de banho' }, { n: 3, text: 'サングラス — óculos de sol' }, { n: 4, text: 'スキー{板|いた} — esqui (pranchas)' }], answer: 1, explanationPt: '{手袋|てぶくろ} = luvas. Para esqui: {帽子|ぼうし}と{手袋|てぶくろ}は{自分|じぶん}で{買|か}ったほうがいい. (Atividade 3 · 準備するもの)' },
    { id: 'iro-e2-l5-17', number: 17, prompt: 'O que é este item de esqui?', image: `${IMG}/Z_05_3_09_sukii-ita.png`, imageAlt: 'pranchas de esqui', choices: [{ n: 1, text: 'スキー{板|いた} — esqui (pranchas)' }, { n: 2, text: '{水着|みずぎ} — traje de banho' }, { n: 3, text: '{帽子|ぼうし} — chapéu' }, { n: 4, text: '{船|ふね} — navio' }], answer: 1, explanationPt: 'スキー{板|いた} = pranchas de esqui. スキー{板|いた}とウェアはスキー{場|じょう}で{借|か}りられる. (Atividade 3 · 準備するもの)' },
    { id: 'iro-e2-l5-18', number: 18, prompt: 'Vocabulário de viagem: 「{行|い}き{先|さき}／{出発|しゅっぱつ}する／レンタサイクル／{温泉|おんせん}／{露天風呂|ろてんぶろ}」 significam:', choices: [{ n: 1, text: 'destino / partir (sair) / aluguel de bicicleta / fonte termal (onsen) / banho ao ar livre' }, { n: 2, text: 'chegada / parar / aluguel de carro / piscina / chuveiro' }, { n: 3, text: 'mapa / esperar / táxi / lago / sauna' }, { n: 4, text: 'bilhete / voltar / metrô / rio / banheira' }], answer: 1, explanationPt: '{行|い}き{先|さき} (destino), {出発|しゅっぱつ}する (partir), レンタサイクル (aluguel de bike), {温泉|おんせん} (fonte termal), {露天風呂|ろてんぶろ} (banho ao ar livre). (Atividades 2-4)' },
    { id: 'iro-e2-l5-19', number: 19, prompt: '聴解 05-03 (北海道): como é descrita?', context: 'Ｂ：{自然|しぜん}も{豊|ゆた}かだし、{食|た}べ{物|もの}もおいしいし…{特|とく}に{魚|さかな}がおいしくて、{新鮮|しんせん}な…{食|た}べられます。', choices: [{ n: 1, text: 'Rica em natureza, comida gostosa — em especial peixe fresco.' }, { n: 2, text: 'Lotada e quente, boa para nadar.' }, { n: 3, text: 'Cidade antiga com muitos templos.' }, { n: 4, text: 'Capital com muitas lojas.' }], answer: 1, explanationPt: '{北海道|ほっかいどう}: {自然|しぜん}が{豊|ゆた}か, {食|た}べ{物|もの}（{魚|さかな}）がおいしい, {新鮮|しんせん}. (聴解 05-03)' },
    { id: 'iro-e2-l5-20', number: 20, prompt: '聴解 05-04 (東京): o que se diz?', context: 'Ｂ：やっぱり{人|ひと}が{多|おお}いかな。{電車|でんしゃ}も{混|こ}んでいて…でも、{遊|あそ}ぶところがいろいろあるから、{一日中|いちにちじゅう}{遊|あそ}べるよ。', choices: [{ n: 1, text: 'Tem muita gente, trens lotados, mas há muitas opções de lazer (dá para se divertir o dia todo).' }, { n: 2, text: 'É tranquila e tem natureza farta.' }, { n: 3, text: 'É fria e boa para esquiar.' }, { n: 4, text: 'Tem praias para nadar.' }], answer: 1, explanationPt: '{東京|とうきょう}: {人|ひと}が{多|おお}い, {電車|でんしゃ}が{混|こ}む, {遊|あそ}ぶところが{多|おお}く{一日中|いちにちじゅう}{遊|あそ}べる. (聴解 05-04)' },
    { id: 'iro-e2-l5-21', number: 21, prompt: '聴解 05-05 (沖縄): o que se pode fazer?', context: 'Ｂ：{暖|あたた}かいから、{春|はる}から{秋|あき}まで{泳|およ}げます。シュノーケリングもできますよ。…{大|おお}きい{水族館|すいぞくかん}があって、きれいな{魚|さかな}が{見|み}られますよ。', choices: [{ n: 1, text: 'É quente; dá para nadar da primavera ao outono, fazer snorkeling, e ver peixes bonitos no grande aquário.' }, { n: 2, text: 'É fria; dá para esquiar.' }, { n: 3, text: 'Tem muitos templos antigos.' }, { n: 4, text: 'É uma metrópole movimentada.' }], answer: 1, explanationPt: '{沖縄|おきなわ}: {暖|あたた}かい, {泳|およ}げる, シュノーケリング, {水族館|すいぞくかん}できれいな{魚|さかな}が{見|み}られる (potencial, ❶). (聴解 05-05)' },
    { id: 'iro-e2-l5-22', number: 22, prompt: '聴解 05-06 (京都): o que se diz?', context: 'Ｂ：{古|ふる}い{町|まち}で、お{寺|てら}とか{神社|じんじゃ}がたくさん{見|み}られるよ。…いろいろな{日本|にほん}のお{土産|みやげ}が{買|か}えるし、{海外|かいがい}からの{観光客|かんこうきゃく}にもすごく{人気|にんき}があるよね。', choices: [{ n: 1, text: 'Cidade antiga; dá para ver muitos templos e santuários, comprar várias lembranças e é muito popular entre turistas estrangeiros.' }, { n: 2, text: 'Fria e boa para esquiar.' }, { n: 3, text: 'Quente, boa para nadar.' }, { n: 4, text: 'Cheia de prédios altos modernos.' }], answer: 1, explanationPt: '{京都|きょうと}: {古|ふる}い{町|まち}, お{寺|てら}・{神社|じんじゃ}が{見|み}られる, お{土産|みやげ}が{買|か}える, {観光客|かんこうきゃく}に{人気|にんき}. (聴解 05-06)' },
    { id: 'iro-e2-l5-23', number: 23, prompt: '会話 05-08 (planejar viagem): para onde Diana e Sofia decidem ir e por quê?', context: 'ディアナ：{景色|けしき}がきれいなところがいいです。 ソフィア：{富士山|ふじさん}の{近|ちか}くはどうですか？ きれいな{湖|みずうみ}があります…すごくきれいだそうですよ。', choices: [{ n: 1, text: 'Perto do Monte Fuji — porque Diana quer um lugar de paisagem bonita, e dizem que o lago + Fuji juntos são lindos.' }, { n: 2, text: 'Okinawa, para nadar.' }, { n: 3, text: 'Tóquio, para compras.' }, { n: 4, text: 'Hokkaido, pela comida.' }], answer: 1, explanationPt: '{景色|けしき}がきれいなところ (❷) → {富士山|ふじさん}の{近|ちか}く; きれいだそうです (hearsay ❸). (聴解 05-08)' },
    { id: 'iro-e2-l5-24', number: 24, prompt: '会話 05-08: o que decidem fazer lá e como vão?', context: 'ソフィア：{湖|みずうみ}でボートに{乗|の}れます。…うどんがおいしいって{聞|き}きました。…バスで{行|い}けますよ。{安|やす}くて{便利|べんり}だって{先輩|せんぱい}が…{新宿|しんじゅく}からです。', choices: [{ n: 1, text: 'Andar de barco no lago e comer udon; vão de ônibus (barato e prático, saindo de Shinjuku).' }, { n: 2, text: 'Esquiar; vão de avião.' }, { n: 3, text: 'Fazer compras; vão de navio.' }, { n: 4, text: 'Ver templos; vão a pé.' }], answer: 1, explanationPt: 'ボートに{乗|の}れる; うどんがおいしいって{聞|き}いた (❸); バスで{行|い}ける, {安|やす}くて{便利|べんり}だって (❸), {新宿|しんじゅく}から{出発|しゅっぱつ}. Diana não anda de bike (自転車{乗|の}れない). (聴解 05-08)' },
    { id: 'iro-e2-l5-25', number: 25, prompt: '聴解 05-15 (conselho · 日光): o que se aconselha para ir a Nikko ver as folhas de outono?', context: 'Ｂ：{日光|にっこう}までなら、{電車|でんしゃ}で{行|い}けますよ。…{秋|あき}の{日光|にっこう}は、かなり{寒|さむ}いですよ。…{厚|あつ}い{上着|うわぎ}を{持|も}って{行|い}ったほうがいいですよ。', choices: [{ n: 1, text: 'Ir de trem; e como o outono em Nikko é bem frio, é melhor levar um casaco grosso.' }, { n: 2, text: 'Ir de avião; levar traje de banho.' }, { n: 3, text: 'Ir de navio; não levar nada.' }, { n: 4, text: 'Não ir, é perigoso.' }], answer: 1, explanationPt: '{電車|でんしゃ}で{行|い}ける; {寒|さむ}いから{厚|あつ}い{上着|うわぎ}を{持|も}って{行|い}ったほうがいい (❺). (聴解 05-15)' },
    { id: 'iro-e2-l5-26', number: 26, prompt: '聴解 05-16 (conselho · 京都/旅館): que conselho de hospedagem é dado a Nadia?', context: 'Ｂ：{安|やす}いところがいいなら、{民宿|みんしゅく}もいいよ。…{夏休|なつやす}みの{時期|じき}はすごく{混|こ}むから、{早|はや}く{計画|けいかく}を{立|た}てて、{予約|よやく}したほうがいいよ。', choices: [{ n: 1, text: 'Se quer barato, o minshuku também é bom; e como lota nas férias de verão, é melhor planejar e reservar logo.' }, { n: 2, text: 'Só hotéis caros valem a pena.' }, { n: 3, text: 'Não reservar, ir de última hora.' }, { n: 4, text: 'Acampar é o melhor.' }], answer: 1, explanationPt: '{安|やす}いなら{民宿|みんしゅく}もいい; {混|こ}むから{早|はや}く{予約|よやく}したほうがいい (❺ + título 早く予約したほうがいい). (聴解 05-16)' },
    { id: 'iro-e2-l5-27', number: 27, prompt: '聴解 05-17 (conselho · 富山): o que se recomenda comer e que aviso é dado?', context: 'Ｂ：{富山|とやま}はやっぱりおすしですね。「{白|しろ}えび」という{店|みせ}…でも、できれば、{日曜日|にちようび}は{行|い}かないほうがいいですよ。…{混|こ}むんですよ。', choices: [{ n: 1, text: 'Sushi (a loja «Shiroebi»); mas é melhor não ir no domingo, porque lota (fila de ~1h).' }, { n: 2, text: 'Ramen; ir só no domingo.' }, { n: 3, text: 'Tempura; nunca tem fila.' }, { n: 4, text: 'Nada de especial.' }], answer: 1, explanationPt: 'おすし「{白|しろ}えび」; {日曜日|にちようび}は{行|い}かないほうがいい (conselho negativo ❺), {混|こ}むから. (聴解 05-17)' },
    { id: 'iro-e2-l5-28', number: 28, prompt: '聴解 05-18 (conselho · 白馬スキー): o que se deve preparar para esquiar?', context: 'Ｂ：スキー{板|いた}とかウェアはスキー{場|じょう}で{借|か}りられるから、だいじょうぶ…でも、{帽子|ぼうし}と{手袋|てぶくろ}は、{自分|じぶん}で{買|か}ったほうがいいよ。…{高|たか}いから、こっちで{買|か}って…。', choices: [{ n: 1, text: 'Esquis e roupa dá para alugar na estação de esqui; mas chapéu e luvas é melhor comprar por conta (e antes, pois lá é caro).' }, { n: 2, text: 'Levar traje de banho e protetor solar.' }, { n: 3, text: 'Não precisa de nada.' }, { n: 4, text: 'Comprar tudo na estação de esqui.' }], answer: 1, explanationPt: 'スキー{板|いた}・ウェアは{借|か}りられる; {帽子|ぼうし}と{手袋|てぶくろ}は{買|か}ったほうがいい (❺), {高|たか}いからこっちで{買|か}って. (聴解 05-18)' },
    { id: 'iro-e2-l5-29', number: 29, prompt: '読む (口コミ de viagem): a avaliação de あやの (5★ «きれいな富士山に満足») e a de saji («露天風呂でゆっくり») diferem em quê?', context: 'あやの：{湖|みずうみ}がきれいだし…{写真|しゃしん}をいっぱい{撮|と}りました。 saji：ロープウェイに{乗|の}りました。{天気|てんき}が{悪|わる}くて、{富士山|ふじさん}がぜんぜん{見|み}られませんでした。', choices: [{ n: 1, text: 'Ayano ficou satisfeita (lago bonito, tirou muitas fotos); saji teve tempo ruim e não conseguiu ver o Fuji.' }, { n: 2, text: 'Ambos viram o Fuji perfeitamente.' }, { n: 3, text: 'Nenhum dos dois gostou.' }, { n: 4, text: 'Ambos reclamaram do preço.' }], answer: 1, explanationPt: 'あやの: 満足 (湖きれい, 写真). saji: {天気|てんき}が{悪|わる}くて{富士山|ふじさん}がぜんぜん{見|み}られなかった (まったく〜ない). (Atividade 4 · 読む)' },
    { id: 'iro-e2-l5-30', number: 30, prompt: 'Vocabulário de avaliação: 「{日帰|ひがえ}り／まったく〜ない／{寄|よ}る／{意外|いがい}に／{楽|たの}しむ」 significam:', choices: [{ n: 1, text: 'bate e volta (sem pernoite) / não ~ de jeito nenhum / passar (dar uma parada) / surpreendentemente / aproveitar' }, { n: 2, text: 'pernoite / sempre / ir embora / como esperado / cansar' }, { n: 3, text: 'viagem longa / às vezes / chegar / talvez / dormir' }, { n: 4, text: 'reserva / nunca / sair / certamente / comprar' }], answer: 1, explanationPt: '{日帰|ひがえ}り (bate-volta), まったく〜ない (nada/de jeito nenhum), {寄|よ}る (dar uma parada), {意外|いがい}に (surpreendentemente), {楽|たの}しむ (aproveitar). (Atividade 4 · 読む)' },
    { id: 'iro-e2-l5-31', number: 31, prompt: 'Os kanji 「{自然|しぜん}／{交通|こうつう}／{旅館|りょかん}／{計画|けいかく}／{東京|とうきょう}」 lêem-se:', choices: [{ n: 1, text: 'しぜん (natureza) / こうつう (transporte/trânsito) / りょかん (pousada) / けいかく (plano) / とうきょう (Tóquio)' }, { n: 2, text: 'しぜん / こうつう / たびかん / けいかく / とうけい' }, { n: 3, text: 'じねん / こうつう / りょかん / けかく / とうきょう' }, { n: 4, text: 'しぜん / まじわり / りょかん / はかりかく / ひがしきょう' }], answer: 1, explanationPt: '{自然|しぜん}, {交通|こうつう}, {旅館|りょかん}, {計画|けいかく}, {東京|とうきょう}. (漢字のことば)' },
    { id: 'iro-e2-l5-32', number: 32, prompt: 'Os kanji 「{船|ふね}／{自転車|じてんしゃ}／{遊|あそ}ぶ／{調|しら}べる／{出発|しゅっぱつ}する」 lêem-se:', choices: [{ n: 1, text: 'ふね (navio) / じてんしゃ (bicicleta) / あそぶ (brincar/divertir-se) / しらべる (pesquisar/verificar) / しゅっぱつする (partir)' }, { n: 2, text: 'ふね / じてんしゃ / ゆうぶ / ちょうべる / でぱつする' }, { n: 3, text: 'せん / じどうしゃ / あそぶ / しらべる / すいはつする' }, { n: 4, text: 'ふね / じてんしゃ / あそぶ / しらべる / でほつする' }], answer: 1, explanationPt: '{船|ふね}, {自転車|じてんしゃ}, {遊|あそ}ぶ, {調|しら}べる ({船|ふね}の{時間|じかん}を{調|しら}べる), {出発|しゅっぱつ}する. (漢字のことば)' },
    { id: 'iro-e2-l5-33', number: 33, prompt: '会話 05-10〜12 / 05-20〜22 (modelos): que estruturas aparecem ao planejar e ao aconselhar viagem?', context: 'Planejar: {行|い}き{先|さき}→すること→{行|い}き{方|かた}. Aconselhar: {何|なに}で{行|い}ったらいいですか？→〜たほうがいいですよ.', choices: [{ n: 1, text: '«景色がきれいなところがいい / バスで行けます / 〜って聞きました» (planejar) e «〜たらいいですか / 〜たほうがいいですよ» (aconselhar).' }, { n: 2, text: 'só perguntar o preço da passagem.' }, { n: 3, text: 'reservar um restaurante.' }, { n: 4, text: 'pedir a conta.' }], answer: 1, explanationPt: 'Modelos: planejar (行き先/すること/行き方) e aconselhar (V-たらいいですか / V-たほうがいい). (会話 05-10〜12 / 05-20〜22)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 5 (聴解スクリプト)
const L5_SCRIPTS: Record<string, ScriptItem[]> = {
  '05-03': [
    {
      label: '① 北海道 (05-03)',
      setupJa: '{日本|にほん}の{観光地|かんこうち}について、4{人|にん}の{人|ひと}が{質問|しつもん}しています。',
      setupPt: 'Quatro pessoas conversam sobre destinos turísticos do Japão. ① Hokkaido.',
      lines: [
        { speaker: 'A', ja: '{昨日|きのう}、テレビで{北海道|ほっかいどう}の{番組|ばんぐみ}を{見|み}たんです。きれいなところですね。', pt: 'Ontem vi um programa sobre Hokkaido na TV. É um lugar bonito, né?' },
        { speaker: 'B', ja: 'ええ、{自然|しぜん}も{豊|ゆた}かだし、{食|た}べ{物|もの}もおいしいし、とてもいいところです。{特|とく}に{魚|さかな}がおいしくて、{新鮮|しんせん}なおすしが{食|た}べられます。', pt: 'Sim, a natureza é farta, a comida é gostosa, é um ótimo lugar. Em especial o peixe é gostoso — dá para comer sushi bem fresco.' },
        { speaker: 'A', ja: 'へー。いつか{行|い}ってみたいです。', pt: 'Nossa. Quero ir lá um dia.' },
      ],
    },
  ],
  '05-04': [
    {
      label: '② 東京 (05-04)',
      setupPt: '② Tóquio.',
      lines: [
        { speaker: 'A', ja: '{太田|おおた}さん、{前|まえ}に{東京|とうきょう}に{住|す}んでいたそうですね。どんなところですか？', pt: 'Ota, ouvi que você morava em Tóquio. Como é lá?' },
        { speaker: 'B', ja: 'うーん、やっぱり{人|ひと}が{多|おお}いかな。{電車|でんしゃ}も{混|こ}んでいて、ラッシュのときはすごく{大変|たいへん}です。', pt: 'Hmm, no fim tem muita gente. Os trens ficam lotados, e na hora do rush é bem puxado.' },
        { speaker: 'B', ja: 'でも、{遊|あそ}ぶところがいろいろあるから、{一日中|いちにちじゅう}{遊|あそ}べるよ。', pt: 'Mas tem muitos lugares para se divertir, dá para curtir o dia todo.' },
        { speaker: 'A', ja: 'へー、いいね。', pt: 'Nossa, que legal.' },
      ],
    },
  ],
  '05-05': [
    {
      label: '③ 沖縄 (05-05)',
      setupPt: '③ Okinawa.',
      lines: [
        { speaker: 'A', ja: 'いつか{沖縄|おきなわ}に{行|い}ってみたいんです。{海|うみ}がきれいですよね。', pt: 'Quero ir a Okinawa um dia. O mar é lindo, né?' },
        { speaker: 'B', ja: 'ええ、きれいですよ。それに{暖|あたた}かいから、{春|はる}から{秋|あき}まで{泳|およ}げます。シュノーケリングもできますよ。', pt: 'Sim, é lindo. E como é quente, dá para nadar da primavera ao outono. Dá para fazer snorkeling também.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'É mesmo?' },
        { speaker: 'B', ja: 'あと、{大|おお}きい{水族館|すいぞくかん}があって、きれいな{魚|さかな}が{見|み}られますよ。', pt: 'Tem também um aquário grande, onde dá para ver peixes bonitos.' },
        { speaker: 'A', ja: '{行|い}きたいですね。', pt: 'Quero ir!' },
      ],
    },
  ],
  '05-06': [
    {
      label: '④ 京都 (05-06)',
      setupPt: '④ Kyoto.',
      lines: [
        { speaker: 'A', ja: '{北村|きたむら}さん、{京都|きょうと}はどんなところですか？ {一度|いちど}{行|い}ってみたいんです。', pt: 'Kitamura, como é Kyoto? Queria ir uma vez.' },
        { speaker: 'B', ja: 'そうですね。{古|ふる}い{町|まち}で、お{寺|てら}とか{神社|じんじゃ}がたくさん{見|み}られるよ。', pt: 'Bem, é uma cidade antiga; dá para ver muitos templos e santuários.' },
        { speaker: 'B', ja: 'あと、いろいろな{日本|にほん}のお{土産|みやげ}が{買|か}えるし、{海外|かいがい}からの{観光客|かんこうきゃく}にもすごく{人気|にんき}があるよね。', pt: 'E dá para comprar várias lembranças japonesas, e é muito popular entre turistas estrangeiros.' },
        { speaker: 'A', ja: 'そうなんですか。ありがとうございます。', pt: 'É mesmo? Obrigado.' },
      ],
    },
  ],
  '05-08': [
    {
      label: '会話 — 旅行の計画 (05-08)',
      setupJa: 'ディアナさんとソフィアさんが、{来月|らいげつ}いっしょに{行|い}く1{泊|ぱく}2{日|か}の{旅行|りょこう}の{行|い}き{先|さき}を{相談|そうだん}しています。',
      setupPt: 'Diana e Sofia decidem o destino de uma viagem de 2 dias e 1 noite no mês que vem.',
      lines: [
        { speaker: 'ディアナ', ja: '{行|い}き{先|さき}はどこにしますか？', pt: 'Aonde vamos?' },
        { speaker: 'ソフィア', ja: 'ディアナさんは、どんなところがいいですか？', pt: 'Diana, que tipo de lugar você prefere?' },
        { speaker: 'ディアナ', ja: '{私|わたし}は、{景色|けしき}がきれいなところがいいです。', pt: 'Eu prefiro um lugar de paisagem bonita.' },
        { speaker: 'ソフィア', ja: 'じゃあ、{富士山|ふじさん}の{近|ちか}くはどうですか？ きれいな{湖|みずうみ}があります。{湖|みずうみ}と{富士山|ふじさん}がいっしょに{見|み}られて、すごくきれいだそうですよ。', pt: 'Então, que tal perto do Monte Fuji? Tem um lago bonito. Dizem que ver o lago e o Fuji juntos é lindo.' },
        { speaker: 'ディアナ', ja: 'いいですね。そこで{何|なに}をしますか？', pt: 'Que bom. O que fazemos lá?' },
        { speaker: 'ソフィア', ja: '{湖|みずうみ}でボートに{乗|の}れます。あと、レンタサイクルがあります。', pt: 'Dá para andar de barco no lago. E tem aluguel de bicicleta.' },
        { speaker: 'ディアナ', ja: '{私|わたし}、{自転車|じてんしゃ}{乗|の}れないんですけど――。あ、うどんがおいしいって{聞|き}きました。', pt: 'É que eu não sei andar de bicicleta… Ah, ouvi dizer que o udon é gostoso.' },
        { speaker: 'ディアナ', ja: 'どうやって{行|い}きますか？', pt: 'Como vamos?' },
        { speaker: 'ソフィア', ja: 'バスで{行|い}けますよ。{安|やす}くて{便利|べんり}だって{先輩|せんぱい}が{言|い}ってました。{新宿|しんじゅく}からですね。', pt: 'Dá para ir de ônibus. Um veterano disse que é barato e prático. Sai de Shinjuku.' },
        { speaker: 'ディアナ', ja: 'それなら{便利|べんり}ですね。{楽|たの}しみですね。', pt: 'Assim é prático. Que ansiedade boa!' },
      ],
    },
  ],
  '05-15': [
    {
      label: '① アドバイス — 日光 (05-15)',
      setupJa: '4{人|にん}の{人|ひと}が、{旅行|りょこう}のアドバイスをもらっています。',
      setupPt: 'Quatro pessoas pedem conselhos de viagem. ① Nikko (folhas de outono).',
      lines: [
        { speaker: 'A', ja: '{今度|こんど}、{日光|にっこう}に{紅葉|こうよう}を{見|み}に{行|い}くんですけど、{何|なに}で{行|い}ったらいいですか？', pt: 'Vou a Nikko ver as folhas de outono. Como é melhor ir?' },
        { speaker: 'B', ja: '{日光|にっこう}までなら、{電車|でんしゃ}で{行|い}けますよ。{時間|じかん}もあまりかかりません。', pt: 'Até Nikko dá para ir de trem. Não demora muito.' },
        { speaker: 'B', ja: '{秋|あき}の{日光|にっこう}は、かなり{寒|さむ}いですよ。{厚|あつ}い{上着|うわぎ}を{持|も}って{行|い}ったほうがいいですよ。', pt: 'O outono em Nikko é bem frio. É melhor levar um casaco grosso.' },
        { speaker: 'A', ja: 'そうなんですか。ありがとうございます。', pt: 'É mesmo? Obrigado.' },
      ],
    },
  ],
  '05-16': [
    {
      label: '② アドバイス — 京都・宿 (05-16)',
      setupPt: '② Kyoto — onde se hospedar.',
      lines: [
        { speaker: 'B', ja: '{日本|にほん}の{旅館|りょかん}に{泊|と}まってみたいんですけど、{高|たか}いですか？', pt: 'Eu queria me hospedar num ryokan japonês; é caro?' },
        { speaker: 'A', ja: 'うーん、{安|やす}いところもあるし、{高|たか}いところもあるし、いろいろ。', pt: 'Hmm, tem lugares baratos e caros, varia.' },
        { speaker: 'B', ja: 'どんなところに{泊|と}まったらいいですか？', pt: 'Em que tipo de lugar é melhor ficar?' },
        { speaker: 'A', ja: '{安|やす}いところがいいなら、{民宿|みんしゅく}もいいよ。{家族|かぞく}でやってる{小|ちい}さな{宿|やど}。', pt: 'Se quer barato, o minshuku também é bom. É uma hospedagem pequena, tocada por uma família.' },
        { speaker: 'A', ja: 'あ、でも、{夏休|なつやす}みの{時期|じき}はすごく{混|こ}むから、{早|はや}く{計画|けいかく}を{立|た}てて、{予約|よやく}したほうがいいよ。', pt: 'Ah, mas nas férias de verão lota muito, então é melhor planejar logo e reservar.' },
        { speaker: 'B', ja: 'そうですね。{調|しら}べてみます。', pt: 'É verdade. Vou pesquisar.' },
      ],
    },
  ],
  '05-17': [
    {
      label: '③ アドバイス — 富山 (05-17)',
      setupPt: '③ Toyama — o que comer.',
      lines: [
        { speaker: 'A', ja: '{今度|こんど}、{富山|とやま}に{行|い}くんですけど、{富山|とやま}では、{何|なに}を{食|た}べたらいいですか？', pt: 'Vou a Toyama. O que é melhor comer lá?' },
        { speaker: 'B', ja: 'そうですね。{富山|とやま}はやっぱりおすしですね。「{白|しろ}えび」という{店|みせ}が、{安|やす}いし、おすすめです。', pt: 'Bem, em Toyama é sushi, sem dúvida. A loja chamada «Shiroebi» é barata e recomendo.' },
        { speaker: 'A', ja: '「{白|しろ}えび」ですね。{行|い}ってみます。', pt: '«Shiroebi», certo. Vou lá.' },
        { speaker: 'B', ja: 'でも、できれば、{日曜日|にちようび}は{行|い}かないほうがいいですよ。すごく{混|こ}むんですよ。1{時間|じかん}ぐらい{並|なら}びますよ。', pt: 'Mas, se puder, é melhor não ir no domingo. Lota muito — fica-se na fila uns 1 hora.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
      ],
    },
  ],
  '05-18': [
    {
      label: '④ アドバイス — 白馬・スキー (05-18)',
      setupPt: '④ Hakuba — esqui (o que preparar).',
      lines: [
        { speaker: 'B', ja: '{長野|ながの}にスキーに{行|い}ってきたんだ。ナムさんは、スキー、したことある？', pt: 'Fui esquiar em Nagano. Nam, você já esquiou?' },
        { speaker: 'A', ja: 'ないです。でも、{道具|どうぐ}とか{何|なに}も{持|も}ってないんです。{何|なに}を{準備|じゅんび}したらいいですか？', pt: 'Não. E não tenho nenhum equipamento. O que é melhor preparar?' },
        { speaker: 'B', ja: 'スキー{板|いた}とかウェアはスキー{場|じょう}で{借|か}りられるから、だいじょうぶだよ。', pt: 'Esquis e roupa dá para alugar na estação de esqui, então tudo bem.' },
        { speaker: 'B', ja: 'うん、でも、{帽子|ぼうし}と{手袋|てぶくろ}は、{自分|じぶん}で{買|か}ったほうがいいよ。{高|たか}いから、こっちで{買|か}って、{持|も}って{行|い}ったほうがいいと{思|おも}うよ。', pt: 'É, mas chapéu e luvas é melhor comprar por conta. Como lá é caro, acho melhor comprar aqui e levar.' },
        { speaker: 'A', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
}

const lesson5: Section = {
  id: 'lesson-5',
  level: 'elementary2',
  titleJa: '第5課 早く予約したほうがいいですよ',
  titlePt: 'Lição 5 — É melhor reservar logo',
  summaryPt:
    'Vamos viajar · entender a apresentação de um destino (海で泳げます／きれいな魚が見られます), planejar uma viagem com um amigo (景色がきれいなところがいい／きれいだそうです／バスで行けるって聞きました) e pedir e dar conselhos (何で行ったらいいですか／厚い上着を持って行ったほうがいいですよ／早く予約したほうがいい).',
  studyNotes: [
    {
      title: 'Tópico: Vamos viajar (旅行に行こう)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ouvir uma breve apresentação de pontos turísticos do Japão e entender como são e o que se pode fazer.\n' +
        '- Discutir planos de viagem com um amigo.\n' +
        '- Pedir ou dar conselhos sobre uma viagem em planejamento.\n' +
        '- Ler avaliações em site de viagem e entender o conteúdo geral.\n\n' +
        '💡 Pergunta de abertura: {日本|にほん}の{観光地|かんこうち}で{行|い}ってみたいところがありますか？ (há um destino turístico do Japão que você quer visitar?).',
    },
    {
      title: 'Forma potencial (可能形) — o que se pode fazer (➊)',
      bodyPt:
        'A **forma potencial** diz o que é **possível** fazer:\n\n' +
        '- `{海|うみ}で{泳|およ}げます`, `ボートに{乗|の}れます`, `お{土産|みやげ}が{買|か}えます`, `きれいな{魚|さかな}が{見|み}られます`, `{一日中|いちにちじゅう}{遊|あそ}べます`.\n\n' +
        '🔧 Grupo I: う→える ({泳|およ}ぐ→{泳|およ}げる, {行|い}く→{行|い}ける, {買|か}う→{買|か}える, {遊|あそ}ぶ→{遊|あそ}べる). Grupo II: る→られる ({見|み}る→{見|み}られる). (文法ノート ❶)',
    },
    {
      title: 'Modificar substantivo: 〜ところ / 名詞修飾 (➋)',
      bodyPt:
        'Coloca-se o adjetivo/verbo (forma comum) **antes** do substantivo para descrevê-lo:\n\n' +
        '- `{景色|けしき}がきれいな{所|ところ}` (um lugar de paisagem bonita), `{遊|あそ}べる{所|ところ}` (um lugar onde dá para se divertir), `{自然|しぜん}が{豊|ゆた}かな{町|まち}`.\n\n' +
        '(文法ノート ❷)',
    },
    {
      title: '〜そうです / 〜って — transmitir o que se ouviu (伝聞) (➌)',
      bodyPt:
        'Para repassar uma **informação ouvida** de outra pessoa:\n\n' +
        '- **［forma comum］+ そうです**: `すごくきれいだそうですよ` (dizem que é lindo), `{前|まえ}に{東京|とうきょう}に{住|す}んでいたそうですね`.\n' +
        '- **〜って** (casual, = 〜と): `{安|やす}くて{便利|べんり}だって{言|い}ってました` (disse que é barato e prático), `おいしいって{聞|き}きました` (ouvi que é gostoso).\n\n' +
        '(文法ノート ❸)',
    },
    {
      title: 'V-たらいいですか — pedir conselho (➍)',
      bodyPt:
        '**V-たらいいですか** pergunta o que/como é **melhor fazer** (pedir orientação):\n\n' +
        '- `{何|なに}で{行|い}ったらいいですか？` (como é melhor ir?), `どんなところに{泊|と}まったらいいですか？`, `{何|なに}を{準備|じゅんび}したらいいですか？`.\n\n' +
        '(文法ノート ❹)',
    },
    {
      title: 'V-たほうがいい / V-ないほうがいい — dar conselho (➎)',
      bodyPt:
        'Para **aconselhar**:\n\n' +
        '- **V(タ)+ほうがいい** (é melhor fazer): `{早|はや}く{予約|よやく}したほうがいいですよ`, `{厚|あつ}い{上着|うわぎ}を{持|も}って{行|い}ったほうがいいですよ`.\n' +
        '- **V-ないほうがいい** (é melhor não): `{日曜日|にちようび}は{行|い}かないほうがいいですよ` (lota muito).\n\n' +
        '(文法ノート ❺)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Como é o lugar:** {自然|しぜん}が{豊|ゆた}か（な）, {混|こ}んでいる／{混|こ}んでいない, {食|た}べ{物|もの}がおいしい, {寒|さむ}い／{暖|あたた}かい, {古|ふる}い{町|まち}, {観光客|かんこうきゃく}に{人気|にんき}がある.\n\n' +
        '**Viagem:** {行|い}き{先|さき} (destino), {出発|しゅっぱつ}する, レンタサイクル, {温泉|おんせん}, {露天風呂|ろてんぶろ}. Hospedagem: ホテル, {旅館|りょかん}, {民宿|みんしゅく}. Transporte: バス, {電車|でんしゃ}, {船|ふね}, {飛行機|ひこうき}, {車|くるま}. Preparar: スキー{板|いた}, スキーウェア, {手袋|てぶくろ}, {帽子|ぼうし}, サングラス, {水着|みずぎ}.\n\n' +
        '**Kanji da lição:** {自然|しぜん}, {交通|こうつう}, {船|ふね}, {自転車|じてんしゃ}, {旅館|りょかん}, {東京|とうきょう}, {計画|けいかく}, {遊|あそ}ぶ, {調|しら}べる, {出発|しゅっぱつ}する.',
    },
  ],
  groups: [lesson5Group],
  audios: attachScripts(5, L5_SCRIPTS),
}

// ---- Lição 6: いろいろなところに行けて、よかったです (tópico 旅行に行こう) ---------
const lesson6Group: ExerciseGroup = {
  id: 'iro-e2-l6',
  title: 'いろいろなところに行けて、よかったです',
  subtitlePt: 'Ler bilhetes e avisos de trem · falar dos planos de viagem · entender anúncios de estação · falar das impressões da viagem',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l6-1', number: 1, prompt: '「{明日|あした}は、{中禅寺湖|ちゅうぜんじこ}に{行|い}くつもりです」 — 「V-るつもりです」 expressa:', choices: [{ n: 1, text: 'uma intenção/plano (pretendo ir ao lago Chuzenji amanhã)' }, { n: 2, text: 'algo que já aconteceu' }, { n: 3, text: 'uma proibição' }, { n: 4, text: 'um pedido' }], answer: 1, explanationPt: 'V(dicionário)+つもりです = intenção/plano de fazer. {行|い}くつもりです (pretendo ir). (文法ノート ❶)' },
    { id: 'iro-e2-l6-2', number: 2, prompt: '「ゆばも{食|た}べてみたいです」 — 「V-てみたい」 significa:', choices: [{ n: 1, text: 'quero experimentar/tentar fazer (quero experimentar comer yuba)' }, { n: 2, text: 'já comi' }, { n: 3, text: 'não quero comer' }, { n: 4, text: 'tenho que comer' }], answer: 1, explanationPt: 'V-てみたい = querer experimentar (fazer para ver como é). {食|た}べてみたい, {入|はい}ってみたい. (文法ノート ❶)' },
    { id: 'iro-e2-l6-3', number: 3, prompt: '「いろいろなところに{行|い}けて、よかったです」 — 「V-て、よかった」 expressa:', choices: [{ n: 1, text: 'satisfação/alegria por ter conseguido fazer algo (que bom que pude ir)' }, { n: 2, text: 'arrependimento' }, { n: 3, text: 'uma ordem' }, { n: 4, text: 'uma dúvida' }], answer: 1, translationPt: 'Que bom que pude ir a vários lugares.', explanationPt: 'V-て + よかった = avaliar positivamente um fato. {行|い}けて（potencial）、よかった; {泳|およ}げて、{楽|たの}しかった. (文法ノート ❷)' },
    { id: 'iro-e2-l6-4', number: 4, prompt: '「ショーが{見|み}られなくて、{残念|ざんねん}でした」 — 「V-なくて、{残念|ざんねん}」 expressa:', choices: [{ n: 1, text: 'pena/decepção por NÃO ter conseguido fazer algo (foi uma pena não poder ver o show)' }, { n: 2, text: 'alegria' }, { n: 3, text: 'um plano' }, { n: 4, text: 'uma recomendação' }], answer: 1, explanationPt: 'V-なくて + {残念|ざんねん}／{大変|たいへん} = avaliar/reagir a algo que não deu certo. {見|み}られなくて、{残念|ざんねん}. (文法ノート ❷)' },
    { id: 'iro-e2-l6-5', number: 5, prompt: '「{道|みち}を{歩|ある}いているとき、リスを{見|み}ました」 — 「〜とき」 indica:', choices: [{ n: 1, text: 'o momento/situação em que algo acontece (quando estava andando…)' }, { n: 2, text: 'a razão' }, { n: 3, text: 'a proibição' }, { n: 4, text: 'o destino' }], answer: 1, explanationPt: '［V／ＡＤＪ + とき］= quando. {歩|ある}いているとき (enquanto andava), {着|つ}いたとき, {子|こ}どものとき. (文法ノート ❸)' },
    { id: 'iro-e2-l6-6', number: 6, prompt: '「さいたま{新都心|しんとしん}に{行|い}きたいんですけど、{何|なん}{番線|ばんせん}に{行|い}けばいいですか？」 — 「V-ばいいですか」 serve para:', choices: [{ n: 1, text: 'perguntar o que/como é melhor fazer (a qual plataforma devo ir?)' }, { n: 2, text: 'dar uma ordem' }, { n: 3, text: 'recusar' }, { n: 4, text: 'falar do passado' }], answer: 1, explanationPt: 'V-ばいいですか pergunta a melhor opção/como proceder: {何番線|なんばんせん}に{行|い}けばいいですか, どこで{乗|の}り{換|か}えればいいですか. (Atividade 3)' },
    { id: 'iro-e2-l6-7', number: 7, prompt: 'No bilhete de Shinkansen (新幹線の切符), os campos 「{出発駅|しゅっぱつえき}／{行|い}き{先|さき}／{到着時刻|とうちゃくじこく}／{料金|りょうきん}／〜{号車|ごうしゃ}／〜{席|せき}」 significam:', choices: [{ n: 1, text: 'estação de partida / destino / horário de chegada / tarifa / vagão nº / assento' }, { n: 2, text: 'nome / idade / endereço / telefone / data / hora' }, { n: 3, text: 'comida / bebida / preço / serviço / mesa / cadeira' }, { n: 4, text: 'norte / sul / leste / oeste / cima / baixo' }], answer: 1, explanationPt: '{出発駅|しゅっぱつえき} (partida), {行|い}き{先|さき} (destino), {到着時刻|とうちゃくじこく} (chegada), {料金|りょうきん} (tarifa), 〜{号車|ごうしゃ} (vagão), 〜{席|せき} (assento). (Atividade 1 · 切符)' },
    { id: 'iro-e2-l6-8', number: 8, prompt: 'Em avisos/anúncios de estação: 「{運転|うんてん}{見合|みあ}わせ／{遅|おく}れ／{信号|しんごう}{故障|こしょう}／{人身|じんしん}{事故|じこ}」 significam:', choices: [{ n: 1, text: 'suspensão do serviço / atraso / falha de sinalização / acidente com vítima (atropelamento)' }, { n: 2, text: 'pontualidade / desconto / promoção / reforma' }, { n: 3, text: 'partida / chegada / embarque / desembarque' }, { n: 4, text: 'reserva / cancelamento / reembolso / fila' }], answer: 1, explanationPt: '{運転|うんてん}{見合|みあ}わせ (serviço suspenso), {遅|おく}れ (atraso), {信号|しんごう}{故障|こしょう} (falha de sinal), {人身|じんしん}{事故|じこ} (acidente com pessoa). (Atividades 1 e 3)' },
    { id: 'iro-e2-l6-9', number: 9, prompt: 'Vocabulário de trem (Atividade 3): 「{指定席|していせき}／{自由席|じゆうせき}／〜{号車|ごうしゃ}／〜{行|ゆ}き／〜{番線|ばんせん}」 significam:', choices: [{ n: 1, text: 'assento reservado / assento livre (não reservado) / vagão nº / com destino a ~ / plataforma nº' }, { n: 2, text: 'janela / corredor / porta / saída / entrada' }, { n: 3, text: 'manhã / tarde / noite / hoje / amanhã' }, { n: 4, text: 'ida / volta / atraso / cancelamento / espera' }], answer: 1, explanationPt: '{指定席|していせき} (reservado), {自由席|じゆうせき} (livre), 〜{号車|ごうしゃ} (vagão), 〜{行|ゆ}き (destino), 〜{番線|ばんせん} (plataforma), 〜{方面|ほうめん} (direção), グリーン{車|しゃ} (vagão verde). (Atividade 3 · ことば)' },
    { id: 'iro-e2-l6-10', number: 10, prompt: 'Que ação (no trem) esta ilustração mostra?', image: `${IMG}/Z_06_3_12_norikaeru.png`, imageAlt: 'pessoa passando de um trem para outro', choices: [{ n: 1, text: '{乗|の}り{換|か}える — baldear / trocar de trem' }, { n: 2, text: '{見送|みおく}る — despedir-se (ver partir)' }, { n: 3, text: '{到着|とうちゃく}する — chegar' }, { n: 4, text: '{泳|およ}ぐ — nadar' }], answer: 1, explanationPt: '{乗|の}り{換|か}える = baldear/trocar de trem. {岡山|おかやま}{駅|えき}で{乗|の}り{換|か}えます. (Atividade 3 · ことばの準備)' },
    { id: 'iro-e2-l6-11', number: 11, prompt: 'Que meio de transporte turístico é este (sobe a encosta da montanha)?', image: `${IMG}/Z_06_4_09_keeburukaa.png`, imageAlt: 'bondinho/funicular subindo a montanha', choices: [{ n: 1, text: 'ケーブルカー — bondinho / funicular' }, { n: 2, text: '{船|ふね} — navio' }, { n: 3, text: '{電車|でんしゃ} — trem' }, { n: 4, text: '{飛行機|ひこうき} — avião' }], answer: 1, explanationPt: 'ケーブルカー = funicular (sobe encostas). No 高尾山, a ケーブルカー estava lotada (混んでいて). (Atividade 4)' },
    { id: 'iro-e2-l6-12', number: 12, prompt: 'Que animal a pessoa viu na montanha?', image: `${IMG}/Z_06_4_12_risu.png`, imageAlt: 'pessoa olhando um esquilo numa árvore', choices: [{ n: 1, text: 'リス — esquilo' }, { n: 2, text: 'ウミネコ — gaivota' }, { n: 3, text: '{魚|さかな} — peixe' }, { n: 4, text: '{猫|ねこ} — gato' }], answer: 1, explanationPt: 'リス = esquilo. {道|みち}を{歩|ある}いているとき、リスを{見|み}ました (〜とき, ❸). (Atividade 4 · 高尾山)' },
    { id: 'iro-e2-l6-13', number: 13, prompt: 'O que é isto (onde se entra para relaxar nas águas termais)?', image: `${IMG}/Z_06_2_06_onsen.png`, imageAlt: 'banho de águas termais (onsen)', choices: [{ n: 1, text: '{温泉|おんせん} — fonte termal (onsen)' }, { n: 2, text: '{湖|みずうみ} — lago' }, { n: 3, text: '{滝|たき} — cachoeira' }, { n: 4, text: '{海|うみ} — mar' }], answer: 1, explanationPt: '{温泉|おんせん} = fonte termal. {温泉|おんせん}に{入|はい}りたいんですけど…. (Atividade 2)' },
    { id: 'iro-e2-l6-14', number: 14, prompt: 'Que meio de transporte é este (sobre a água)?', image: `${IMG}/Z_06_4_06_fune.png`, imageAlt: 'barco / navio', choices: [{ n: 1, text: '{船|ふね} — barco / navio' }, { n: 2, text: 'ケーブルカー — funicular' }, { n: 3, text: '{電車|でんしゃ} — trem' }, { n: 4, text: '{車|くるま} — carro' }], answer: 1, explanationPt: '{船|ふね} = barco. {浄土|じょうど}ヶ{浜|はま}で{船|ふね}に{乗|の}れた (potencial). (Atividade 4 · 浄土ヶ浜)' },
    { id: 'iro-e2-l6-15', number: 15, prompt: 'Impressões de viagem (旅行はどうだった): 「よかった／{楽|たの}しかった／{残念|ざんねん}だった／{感動|かんどう}した／{気持|きも}ちよかった」 significam:', choices: [{ n: 1, text: 'foi bom / foi divertido / foi uma pena / fiquei emocionado / foi gostoso/agradável' }, { n: 2, text: 'foi caro / foi barato / foi longe / foi perto / foi rápido' }, { n: 3, text: 'fiquei com fome / com sono / com frio / com calor / cansado' }, { n: 4, text: 'norte / sul / leste / oeste / centro' }], answer: 1, explanationPt: 'よかった, {楽|たの}しかった, {残念|ざんねん}だった (foi uma pena), {感動|かんどう}した (emocionou), {気持|きも}ちよかった (foi gostoso), びっくりした／{驚|おどろ}いた. (Atividade 4 · ことばの準備)' },
    { id: 'iro-e2-l6-16', number: 16, prompt: '会話 06-01 (encontro na hospedagem): o que Ed fez hoje e o que pretende fazer?', context: 'エド：{今日|きょう}は、{東照宮|とうしょうぐう}に{行|い}きました。{明日|あした}は、{中禅寺湖|ちゅうぜんじこ}に{行|い}くつもりです。…そばを{食|た}べました。ゆばも{食|た}べてみたいです。', choices: [{ n: 1, text: 'Hoje foi ao Toshogu; amanhã pretende ir ao lago Chuzenji. Comeu soba e quer experimentar yuba.' }, { n: 2, text: 'Hoje foi ao lago; amanhã volta para casa.' }, { n: 3, text: 'Não fez nada e vai embora.' }, { n: 4, text: 'Foi a Tóquio fazer compras.' }], answer: 1, explanationPt: '{東照宮|とうしょうぐう}（hoje）, {中禅寺湖|ちゅうぜんじこ}に{行|い}くつもり (❶), ゆばも{食|た}べてみたい (❶); ゆばは{日光|にっこう}の{名物|めいぶつ}. (聴解 06-01)' },
    { id: 'iro-e2-l6-17', number: 17, prompt: '聴解 06-07 (anúncio de atraso): o que o anúncio informava, segundo a outra pessoa?', context: 'Ｂ：えっと、{電車|でんしゃ}が30{分|ぷん}{遅|おく}れるそうです。…{信号|しんごう}{故障|こしょう}だって。…{信号|しんごう}が{壊|こわ}れたんです。', choices: [{ n: 1, text: 'O trem vai atrasar uns 30 minutos por falha de sinalização (o sinal quebrou).' }, { n: 2, text: 'O trem chegou adiantado.' }, { n: 3, text: 'O trem foi cancelado por neve.' }, { n: 4, text: 'Mudou de plataforma.' }], answer: 1, explanationPt: '{電車|でんしゃ}が30{分|ぷん}{遅|おく}れる (atraso), {信号|しんごう}{故障|こしょう}（だって, hearsay）= {信号|しんごう}が{壊|こわ}れた. (聴解 06-07)' },
    { id: 'iro-e2-l6-18', number: 18, prompt: '聴解 06-08 (não entendeu o anúncio, pergunta ao funcionário): como ir a さいたま新都心?', context: '{駅員|えきいん}：{京浜東北線|けいひんとうほくせん}は{運転|うんてん}を{見合|みあ}わせています。さいたま{新都心|しんとしん}なら、{埼京線|さいきょうせん}で…8{番線|ばんせん}から{乗|の}って、{北与野|きたよの}{駅|えき}まで…。', choices: [{ n: 1, text: 'A linha Keihin-Tohoku está suspensa; pegar a linha Saikyo na plataforma 8 até a estação Kita-Yono.' }, { n: 2, text: 'Esperar o próximo trem na mesma plataforma.' }, { n: 3, text: 'Ir a pé até o destino.' }, { n: 4, text: 'Pegar um táxi.' }], answer: 1, explanationPt: '{京浜東北線|けいひんとうほくせん}{運転|うんてん}{見合|みあ}わせ → {埼京線|さいきょうせん}、8{番線|ばんせん}、{北与野|きたよの}{駅|えき}まで. {何番線|なんばんせん}に{行|い}けばいい (〜ば). (聴解 06-08)' },
    { id: 'iro-e2-l6-19', number: 19, prompt: '聴解 06-10 (impressões · 大阪): o que a pessoa diz?', context: '{大阪城|おおさかじょう}とか{通天閣|つうてんかく}とか、いろいろなところに{行|い}けて、よかったです。…たこ{焼|や}きを{食|た}べました。…あべのハルカスに{登|のぼ}りました。すごく{高|たか}くて、びっくりしました。', choices: [{ n: 1, text: 'Pôde ir a vários lugares (Castelo de Osaka, Tsutenkaku); comeu takoyaki; subiu o Abeno Harukas e se surpreendeu com a altura.' }, { n: 2, text: 'Não conseguiu sair do hotel.' }, { n: 3, text: 'Só viu o aquário.' }, { n: 4, text: 'Achou tudo chato.' }], answer: 1, explanationPt: 'いろいろなところに{行|い}けて、よかった (❷ + título); たこ{焼|や}き; あべのハルカスに{登|のぼ}って びっくり. (聴解 06-10)' },
    { id: 'iro-e2-l6-20', number: 20, prompt: '聴解 06-11 (impressões · 浄土ヶ浜): o que a pessoa fez e como foi?', context: '{海|うみ}も{空|そら}もすてきでした。{海|うみ}で{泳|およ}げたし、{船|ふね}に{乗|の}れたし、{楽|たの}しかったです。…ウミネコが{近|ちか}くに{来|き}たとき、ちょっとこわかったです。', choices: [{ n: 1, text: 'Mar e céu lindos; pôde nadar e andar de barco (foi divertido); levou um susto quando as gaivotas chegaram perto.' }, { n: 2, text: 'Choveu o tempo todo, não fez nada.' }, { n: 3, text: 'Só foi a um museu.' }, { n: 4, text: 'Esquiou a montanha.' }], answer: 1, explanationPt: '{泳|およ}げた・{船|ふね}に{乗|の}れた (potencial), {楽|たの}しかった; ウミネコが{近|ちか}くに{来|き}たとき (〜とき ❸) こわかった. (聴解 06-11)' },
    { id: 'iro-e2-l6-21', number: 21, prompt: '聴解 06-12 (impressões · 高尾山): o que aconteceu com o funicular?', context: 'ケーブルカーがすごく{混|こ}んでいて、{大変|たいへん}でした。だから、ケーブルカーはあきらめて、{歩|ある}いて{登|のぼ}りました。{疲|つか}れたけど、{景色|けしき}がきれいで、{気持|きも}ちよかったです。', choices: [{ n: 1, text: 'O funicular estava muito lotado, então desistiu dele e subiu a pé; cansou, mas a paisagem era bonita (agradável).' }, { n: 2, text: 'O funicular estava vazio e foi rápido.' }, { n: 3, text: 'Não subiu a montanha.' }, { n: 4, text: 'Foi de carro até o topo.' }], answer: 1, explanationPt: 'ケーブルカーが{混|こ}んでいて{大変|たいへん} → あきらめて{歩|ある}いて{登|のぼ}った; {景色|けしき}がきれいで{気持|きも}ちよかった. {頂上|ちょうじょう}で{写真|しゃしん}. (聴解 06-12)' },
    { id: 'iro-e2-l6-22', number: 22, prompt: '聴解 06-13 (impressões · ハウステンボス): o que foi bom e o que foi pena?', context: 'オランダの{町並|まちな}みや{花畑|はなばたけ}がすてきでした。{夜|よる}のイルミネーションを{見|み}ました。…でも、ショーが{見|み}られなくて、{残念|ざんねん}でした。{時間|じかん}がなかったので。', choices: [{ n: 1, text: 'As ruas estilo holandês, os campos de flores e a iluminação noturna foram lindos; mas foi pena não ver o show (faltou tempo).' }, { n: 2, text: 'Não viu nada, choveu.' }, { n: 3, text: 'Viu o show, mas não a iluminação.' }, { n: 4, text: 'Ficou só no hotel.' }], answer: 1, explanationPt: '{町並|まちな}み・{花畑|はなばたけ}・イルミネーションすてき; ショーが{見|み}られなくて、{残念|ざんねん} (❷); {日帰|ひがえ}り. (聴解 06-13)' },
    { id: 'iro-e2-l6-23', number: 23, prompt: '読む/書く (SNS · じゃこ天): o que a pessoa postou sobre a viagem a Osaka?', context: '{大阪|おおさか}に{行|い}って{来|き}ました。…いろいろなところに{行|い}けて、{楽|たの}しかったです。あと、インスタントラーメンの{博物館|はくぶつかん}で、{自分|じぶん}のラーメンを{作|つく}りました！', choices: [{ n: 1, text: 'Foi a Osaka, pôde ir a vários lugares (divertido), e no museu do lámen instantâneo fez o próprio lámen.' }, { n: 2, text: 'Foi a Okinawa nadar.' }, { n: 3, text: 'Ficou em casa o feriado todo.' }, { n: 4, text: 'Não gostou de Osaka.' }], answer: 1, explanationPt: 'SNS: {大阪|おおさか}, いろいろなところに{行|い}けて{楽|たの}しかった (❷), インスタントラーメンの{博物館|はくぶつかん}で{自分|じぶん}のラーメンを{作|つく}った. (Atividade 5 · 書く)' },
    { id: 'iro-e2-l6-24', number: 24, prompt: 'Os kanji 「{運転|うんてん}／{事故|じこ}／{故障|こしょう}／{指定|してい}／{週末|しゅうまつ}」 lêem-se:', choices: [{ n: 1, text: 'うんてん (operação/condução) / じこ (acidente) / こしょう (avaria/pane) / してい (designação/reserva) / しゅうまつ (fim de semana)' }, { n: 2, text: 'うんてん / じこ / ふるしょう / さだめ / しゅうまつ' }, { n: 3, text: 'うんでん / ことこ / こしょう / してい / しゅうばん' }, { n: 4, text: 'はこび / じこ / こわれ / していせき / まつ' }], answer: 1, explanationPt: '{運転|うんてん}, {事故|じこ}, {故障|こしょう}, {指定|してい}（{指定席|していせき}）, {週末|しゅうまつ}. (漢字のことば)' },
    { id: 'iro-e2-l6-25', number: 25, prompt: 'Os kanji 「{絵|え}／{空|そら}／{泳|およ}ぐ／{光|ひか}る／{到着|とうちゃく}する」 lêem-se:', choices: [{ n: 1, text: 'え (desenho/quadro) / そら (céu) / およぐ (nadar) / ひかる (brilhar) / とうちゃくする (chegar)' }, { n: 2, text: 'え / くう / すいぐ / こうる / とうちゃくする' }, { n: 3, text: 'かい / そら / およぐ / ひかる / いたるちゃく' }, { n: 4, text: 'え / そら / えいぐ / ひかる / とうつき' }], answer: 1, explanationPt: '{絵|え}, {空|そら}, {泳|およ}ぐ, {光|ひか}る (きらきら{光|ひか}る), {到着|とうちゃく}する. (漢字のことば)' },
    { id: 'iro-e2-l6-26', number: 26, prompt: '聴解 06-05/06-06 (anúncios): que informação se extrai?', context: 'アナウンス：…{自由席|じゆうせき}は5{号車|ごうしゃ}〜7{号車|ごうしゃ}、グリーン{車|しゃ}は1{号車|ごうしゃ}…／…もうすぐ{岡山|おかやま}です。{岡山|おかやま}{駅|えき}で{乗|の}り{換|か}えます。', choices: [{ n: 1, text: 'Onde ficam os vagões (assento livre 5–7, vagão verde 1) e onde baldear (em Okayama).' }, { n: 2, text: 'O preço do bilhete.' }, { n: 3, text: 'O cardápio do vagão-restaurante.' }, { n: 4, text: 'O horário de funcionamento das lojas.' }], answer: 1, explanationPt: 'Anúncios dão nº de vagão ({自由席|じゆうせき}/グリーン{車|しゃ}) e onde {乗|の}り{換|か}える ({岡山|おかやま}{駅|えき}). (聴解 06-05/06-06)' },
    { id: 'iro-e2-l6-27', number: 27, prompt: 'Vocabulário de viagem: 「{名物|めいぶつ}／1{泊|ぱく}／{見送|みおく}る／{頂上|ちょうじょう}／きらきら{光|ひか}る」 significam:', choices: [{ n: 1, text: 'especialidade local / uma diária (1 pernoite) / ver partir (despedir) / cume (topo) / brilhar/cintilar' }, { n: 2, text: 'lembrança / passagem / chegar / base / escurecer' }, { n: 3, text: 'comida / hotel / embarcar / encosta / apagar' }, { n: 4, text: 'mapa / bilhete / atrasar / vale / piscar' }], answer: 1, explanationPt: '{名物|めいぶつ} (especialidade), 〜{泊|はく} (pernoites), {見送|みおく}る (ver partir), {頂上|ちょうじょう} (cume), きらきら{光|ひか}る (cintilar). (Atividades 2/3/4)' },
    { id: 'iro-e2-l6-28', number: 28, prompt: '会話 06-03 / 06-16〜18 (modelos): que estruturas aparecem ao falar de planos e de impressões de viagem?', context: 'Planos: {今日|きょう}は〜に{行|い}きました／{明日|あした}は〜に{行|い}くつもりです／〜も{食|た}べてみたいです. Impressões: 〜に{行|い}けて、よかったです／〜が{見|み}られなくて、{残念|ざんねん}でした.', choices: [{ n: 1, text: '«今日は〜／明日は〜つもり／〜てみたい» (planos) e «〜て、よかった／〜なくて、残念» (impressões).' }, { n: 2, text: 'só perguntar o preço do bilhete.' }, { n: 3, text: 'reservar um restaurante.' }, { n: 4, text: 'pedir a conta.' }], answer: 1, explanationPt: 'Modelos: planos (今日/明日, つもり, てみたい) e impressões (〜て、よかった / 〜なくて、残念). (会話 06-03 / 06-16〜18)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 6 (聴解スクリプト)
const L6_SCRIPTS: Record<string, ScriptItem[]> = {
  '06-01': [
    {
      label: '会話 — 旅行先で (06-01)',
      setupJa: 'エドさんは{日光|にっこう}に{旅行|りょこう}に{来|き}ています。ゲストハウスで、{同|おな}じ{部屋|へや}になった{坂本|さかもと}さんと{話|はな}しています。',
      setupPt: 'Ed está viajando em Nikko. Conversa com Sakamoto, que ficou no mesmo quarto da guest house.',
      lines: [
        { speaker: '坂本', ja: 'こんばんは。{外国|がいこく}の{方|かた}ですね？ {坂本|さかもと}といいます。', pt: 'Boa noite. Você é estrangeiro, né? Meu nome é Sakamoto.' },
        { speaker: 'エド', ja: '{私|わたし}はエドです。フィリピンですが、{今|いま}は{日本|にほん}に{住|す}んでます。', pt: 'Eu sou o Ed. Sou das Filipinas, mas agora moro no Japão.' },
        { speaker: '坂本', ja: '{日光|にっこう}は{旅行|りょこう}ですか？ {今日|きょう}は、どこに{行|い}きましたか？', pt: 'Está em Nikko a passeio? O que fez hoje?' },
        { speaker: 'エド', ja: '{今日|きょう}は、{東照宮|とうしょうぐう}に{行|い}きました。{明日|あした}は、{中禅寺湖|ちゅうぜんじこ}に{行|い}くつもりです。', pt: 'Hoje fui ao Toshogu. Amanhã pretendo ir ao lago Chuzenji.' },
        { speaker: '坂本', ja: 'ぼくも{今日|きょう}、{中禅寺湖|ちゅうぜんじこ}に{行|い}ってきましたよ。すごくきれいでした。', pt: 'Eu também fui ao lago Chuzenji hoje. Estava lindíssimo.' },
        { speaker: '坂本', ja: 'おいしいものは、{何|なに}か{食|た}べましたか？', pt: 'Comeu alguma coisa gostosa?' },
        { speaker: 'エド', ja: 'はい。そばを{食|た}べました。ゆばも{食|た}べてみたいです。', pt: 'Sim. Comi soba. Quero experimentar yuba também.' },
        { speaker: '坂本', ja: 'あぁ、{日光|にっこう}の{名物|めいぶつ}ですからね。', pt: 'Ah, é a especialidade de Nikko.' },
        { speaker: 'エド', ja: 'あと、{温泉|おんせん}に{入|はい}りたいんですけど、どこか{入|はい}ったらいいですか？', pt: 'E queria entrar num onsen; onde é bom ir?' },
        { speaker: '坂本', ja: '{中禅寺湖|ちゅうぜんじこ}のホテルで、お{風呂|ふろ}に{入|はい}れるところがあると{思|おも}いますよ。ちょっと{調|しら}べてみましょうか。', pt: 'Acho que num hotel do lago Chuzenji dá para usar o banho. Quer que eu pesquise?' },
        { speaker: 'エド', ja: 'はい！ ぜひお{願|ねが}いします。', pt: 'Sim! Por favor.' },
      ],
    },
  ],
  '06-07': [
    {
      label: '会話 — 遅れのアナウンス (06-07)',
      setupJa: '{駅|えき}のホームで、{高知|こうち}{行|ゆ}きの{電車|でんしゃ}を{待|ま}っています。アナウンスがわからなくて、{周|まわ}りの{人|ひと}に{聞|き}いています。',
      setupPt: 'Na plataforma, esperando o trem para Kochi. Não entendeu o anúncio e pergunta a alguém.',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。{今|いま}のアナウンス、{何|なん}と{言|い}ってましたか？', pt: 'Com licença. O que dizia o anúncio agora?' },
        { speaker: 'B', ja: 'えっと、{電車|でんしゃ}が30{分|ぷん}{遅|おく}れるそうです。', pt: 'Hum, dizem que o trem vai atrasar 30 minutos.' },
        { speaker: 'A', ja: 'え、30{分|ぷん}も{遅|おく}れるんですか？', pt: 'Quê, 30 minutos de atraso?' },
        { speaker: 'B', ja: 'そう。{信号|しんごう}{故障|こしょう}だって{言|い}ってますね。{信号|しんごう}が{壊|こわ}れたんです。', pt: 'É. Disseram que é falha de sinal. O sinal quebrou.' },
        { speaker: 'A', ja: 'そうなんですね。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '06-08': [
    {
      label: '会話 — 乗り換えのアナウンス (06-08)',
      setupJa: '{乗|の}っていた{電車|でんしゃ}が、{途中|とちゅう}の{駅|えき}で{止|と}まってしまいました。アナウンスがわからなかったので、{駅員|えきいん}に{質問|しつもん}しています。',
      setupPt: 'O trem parou numa estação no meio do caminho. Não entendeu o anúncio e pergunta ao funcionário.',
      lines: [
        { speaker: '駅員', ja: '{人身|じんしん}{事故|じこ}の{影響|えいきょう}で、{京浜東北線|けいひんとうほくせん}は{運転|うんてん}を{見合|みあ}わせています。', pt: 'Por causa de um acidente com vítima, a linha Keihin-Tohoku está com o serviço suspenso.' },
        { speaker: 'A', ja: 'すみません。さいたま{新都心|しんとしん}に{行|い}きたいんですけど、どうしたらいいですか？', pt: 'Com licença. Quero ir a Saitama-Shintoshin; o que faço?' },
        { speaker: '駅員', ja: 'さいたま{新都心|しんとしん}なら、{埼京線|さいきょうせん}で{行|い}けますよ。8{番線|ばんせん}から{乗|の}って、{北与野|きたよの}{駅|えき}まで{行|い}ってください。', pt: 'Para Saitama-Shintoshin dá para ir pela linha Saikyo. Pegue na plataforma 8 e vá até a estação Kita-Yono.' },
        { speaker: 'A', ja: '{北与野|きたよの}{駅|えき}ですね。そこから{歩|ある}くんですか？', pt: 'Estação Kita-Yono, certo. De lá vou a pé?' },
        { speaker: '駅員', ja: 'はい。ご{利用|りよう}ください。', pt: 'Sim. Pode usar essa rota.' },
      ],
    },
  ],
  '06-10': [
    {
      label: '① 大阪 (06-10)',
      setupJa: '{週末|しゅうまつ}、{近|ちか}くの{地域|ちいき}の{観光地|かんこうち}に{行|い}った4{人|にん}の{人|ひと}が、その{感想|かんそう}を{話|はな}しています。',
      setupPt: 'Quatro pessoas falam das impressões de um passeio no fim de semana. ① Osaka.',
      lines: [
        { speaker: 'A', ja: '{大阪|おおさか}の{旅|たび}、どうでした？', pt: 'E a viagem a Osaka, como foi?' },
        { speaker: 'B', ja: '{大阪城|おおさかじょう}とか{通天閣|つうてんかく}とか、いろいろなところに{行|い}けて、よかったです。たこ{焼|や}きも{食|た}べました。おいしかったです。', pt: 'Pude ir a vários lugares, como o Castelo de Osaka e o Tsutenkaku — que bom. Comi takoyaki também. Estava gostoso.' },
        { speaker: 'B', ja: 'あと、あべのハルカスに{登|のぼ}りました。すごく{高|たか}くて、びっくりしました。', pt: 'E subi o Abeno Harukas. É altíssimo, fiquei impressionado.' },
        { speaker: 'A', ja: 'そうなんですか。{私|わたし}、まだ{行|い}ったことないんですよ。', pt: 'É mesmo? Eu ainda não fui lá.' },
      ],
    },
  ],
  '06-11': [
    {
      label: '② 浄土ヶ浜 (06-11)',
      setupPt: '② Jodogahama.',
      lines: [
        { speaker: 'A', ja: '{週末|しゅうまつ}は{何|なに}をしてたの？', pt: 'O que você fez no fim de semana?' },
        { speaker: 'B', ja: '{友|とも}だちと{浄土|じょうど}ヶ{浜|はま}に{行|い}って{来|き}ました。{海|うみ}も{空|そら}もすてきでした。{海|うみ}で{泳|およ}げたし、{船|ふね}に{乗|の}れたし、{楽|たの}しかったです。', pt: 'Fui a Jodogahama com amigos. O mar e o céu estavam lindos. Pude nadar no mar e andar de barco — foi divertido.' },
        { speaker: 'A', ja: 'よかったね。', pt: 'Que bom!' },
        { speaker: 'B', ja: '{船|ふね}では、{海|うみ}にパンを{投|な}げるんですよ。', pt: 'No barco, a gente joga pão no mar.' },
        { speaker: 'A', ja: 'ああ、ウミネコね。{楽|たの}しかった？', pt: 'Ah, para as gaivotas, né. Foi divertido?' },
        { speaker: 'B', ja: 'ウミネコが{近|ちか}くに{来|き}たとき、ちょっとこわかったです。でも、おもしろかったです。', pt: 'Quando as gaivotas chegaram perto, foi meio assustador. Mas foi divertido.' },
      ],
    },
  ],
  '06-12': [
    {
      label: '③ 高尾山 (06-12)',
      setupPt: '③ Monte Takao.',
      lines: [
        { speaker: 'A', ja: '{週末|しゅうまつ}、{高尾山|たかおさん}に{行|い}ったんです。', pt: 'No fim de semana fui ao Monte Takao.' },
        { speaker: 'B', ja: 'へー、どうでしたか？', pt: 'Nossa, como foi?' },
        { speaker: 'A', ja: 'ケーブルカーがすごく{混|こ}んでいて、{大変|たいへん}でした。だから、ケーブルカーはあきらめて、{歩|ある}いて{登|のぼ}りました。', pt: 'O funicular estava lotadíssimo, foi puxado. Por isso desisti dele e subi a pé.' },
        { speaker: 'A', ja: '{疲|つか}れたけど、{景色|けしき}がきれいで、{気持|きも}ちよかったです。{頂上|ちょうじょう}で、{写真|しゃしん}をたくさん{撮|と}りました。', pt: 'Cansei, mas a paisagem era bonita, foi agradável. No topo, tirei muitas fotos.' },
        { speaker: 'A', ja: 'あ、それから、{道|みち}を{歩|ある}いているとき、リスを{見|み}ました。', pt: 'Ah, e quando estava andando pelo caminho, vi um esquilo.' },
        { speaker: 'B', ja: 'そうなんですか。{自然|しぜん}が{豊|ゆた}かなんですね。', pt: 'É mesmo? A natureza é farta, né.' },
      ],
    },
  ],
  '06-13': [
    {
      label: '④ ハウステンボス (06-13)',
      setupPt: '④ Huis Ten Bosch.',
      lines: [
        { speaker: 'A', ja: '{連休|れんきゅう}はどうだった？ どこか{行|い}った？', pt: 'Como foi o feriado prolongado? Foi a algum lugar?' },
        { speaker: 'B', ja: 'はい、{友|とも}だちと2{人|にん}でハウステンボスに{行|い}って{来|き}ました。オランダの{町並|まちな}みや{花畑|はなばたけ}がすてきでした。', pt: 'Sim, fui à Huis Ten Bosch com um amigo. As ruas estilo holandês e os campos de flores estavam lindos.' },
        { speaker: 'B', ja: 'あと、{夜|よる}のイルミネーションを{見|み}ました。{滝|たき}がきらきら{光|ひか}って、すごくきれいでした。', pt: 'E vi a iluminação noturna. A cascata cintilava, estava lindíssima.' },
        { speaker: 'A', ja: 'あー、イルミネーション、きれいだよね。', pt: 'Ah, iluminação é linda mesmo.' },
        { speaker: 'B', ja: 'でも、ショーが{見|み}られなくて、{残念|ざんねん}でした。{時間|じかん}がなかったので。', pt: 'Mas foi pena não conseguir ver o show. Porque faltou tempo.' },
        { speaker: 'A', ja: '{泊|と}まらなかったの？', pt: 'Não pernoitou?' },
        { speaker: 'B', ja: 'はい。{日帰|ひがえ}りでした。', pt: 'Não. Foi bate e volta.' },
      ],
    },
  ],
}

const lesson6: Section = {
  id: 'lesson-6',
  level: 'elementary2',
  titleJa: '第6課 いろいろなところに行けて、よかったです',
  titlePt: 'Lição 6 — Que bom que pude ir a vários lugares',
  summaryPt:
    'Vamos viajar · ler bilhetes de trem, avisos e painéis da estação (出発駅／到着時刻／運転見合わせ), falar de forma simples dos planos de viagem (明日は中禅寺湖に行くつもりです／ゆばも食べてみたいです), entender anúncios e perguntar quando não entender (何番線に行けばいいですか) e falar das impressões da viagem (いろいろなところに行けて、よかったです／ショーが見られなくて、残念でした).',
  studyNotes: [
    {
      title: 'Tópico: Vamos viajar (旅行に行こう)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ler passagem de trem, avisos no vagão e painéis da estação para extrair informações.\n' +
        '- Falar de forma simples sobre seus planos de viagem a alguém que conheceu na viagem.\n' +
        '- Entender anúncios na estação/trem e perguntar a quem está perto quando não entender.\n' +
        '- Falar de forma simples sobre suas impressões da viagem.\n' +
        '- Escrever um post simples nas redes sobre a experiência e as impressões da viagem.\n\n' +
        '💡 Pergunta de abertura: どんなところに{旅行|りょこう}に{行|い}ったことがありますか？ どうでしたか？ (onde você já viajou? como foi?).',
    },
    {
      title: 'V-るつもりです / V-てみたいです — planos e vontades (➊)',
      bodyPt:
        '- **V(dicionário)+つもりです** = pretendo/planejo fazer: `{中禅寺湖|ちゅうぜんじこ}に{行|い}くつもりです`.\n' +
        '- **V-てみたいです** = quero experimentar/tentar: `ゆばも{食|た}べてみたいです`, `{温泉|おんせん}に{入|はい}ってみたいです`.\n\n' +
        '(文法ノート ❶)',
    },
    {
      title: 'V-て / V-なくて + 感想 — reagir ao que aconteceu (➋)',
      bodyPt:
        'Liga-se o fato (forma テ / negativo なくて) à **impressão/reação**:\n\n' +
        '- **V-て、よかった** (que bom que…): `いろいろなところに{行|い}けて、よかったです`, `{海|うみ}で{泳|およ}げて、{楽|たの}しかったです`.\n' +
        '- **V-なくて、{残念|ざんねん}** (foi pena que não…): `ショーが{見|み}られなくて、{残念|ざんねん}でした`.\n\n' +
        '💡 Muito usado com a forma potencial ({行|い}けて, {見|み}られなくて). (文法ノート ❷)',
    },
    {
      title: '〜とき — quando (➌)',
      bodyPt:
        '**［V／ＡＤＪ + とき］** = quando / no momento em que:\n\n' +
        '- `{道|みち}を{歩|ある}いているとき、リスを{見|み}ました` (quando andava pelo caminho, vi um esquilo).\n' +
        '- `ウミネコが{近|ちか}くに{来|き}たとき、こわかったです`.\n\n' +
        '(文法ノート ❸)',
    },
    {
      title: 'Perguntar quando não se entende: V-ばいいですか',
      bodyPt:
        'Quando não entende um anúncio ou não sabe como proceder, pergunte a quem está por perto:\n\n' +
        '- `さいたま{新都心|しんとしん}に{行|い}きたいんですけど、{何番線|なんばんせん}に{行|い}けばいいですか？`.\n' +
        '- `{今|いま}のアナウンス、{何|なん}と{言|い}ってましたか？` (o que dizia o anúncio?).\n\n' +
        '💡 V-ばいいですか pede a melhor forma de proceder.',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Bilhete/painel:** {出発駅|しゅっぱつえき}, {行|い}き{先|さき}, {出発日|しゅっぱつび}, {到着時刻|とうちゃくじこく}, {料金|りょうきん}, 〜{号車|ごうしゃ}, 〜{番線|ばんせん}, {運転|うんてん}{見合|みあ}わせ, {遅|おく}れ.\n\n' +
        '**Trem:** {指定席|していせき}, {自由席|じゆうせき}, グリーン{車|しゃ}, 〜{行|ゆ}き, 〜{方面|ほうめん}, {発車|はっしゃ}／{到着|とうちゃく}, {乗|の}り{換|か}える, {見送|みおく}る, {信号|しんごう}{故障|こしょう}, {人身|じんしん}{事故|じこ}.\n\n' +
        '**Viagem/impressões:** {名物|めいぶつ}, 〜{泊|はく}, {頂上|ちょうじょう}, {滝|たき}, きらきら{光|ひか}る, {感動|かんどう}する, {残念|ざんねん}（な）, {気持|きも}ちいい, {日帰|ひがえ}り.\n\n' +
        '**Kanji da lição:** {運転|うんてん}, {事故|じこ}, {故障|こしょう}, {指定|してい}, {週末|しゅうまつ}, {絵|え}, {空|そら}, {泳|およ}ぐ, {光|ひか}る, {到着|とうちゃく}する.',
    },
  ],
  groups: [lesson6Group],
  audios: attachScripts(6, L6_SCRIPTS),
}

// ---- Lições 7-18 (estrutura por tópico; exercícios em construção) ------------
const sections: Section[] = [
  // Tópico 1 — As pessoas ao meu redor (私の周りの人たち)
  lesson1,
  lesson2,
  // Tópico 2 — No restaurante (レストランで)
  lesson3,
  lesson4,
  // Tópico 3 — Vamos viajar (旅行に行こう)
  lesson5,
  lesson6,
  // Tópico 4 — Eventos da comunidade (地域のイベント)
  scaffold(7, 'Eventos da comunidade', '雨が降ったら、ホールでやります', 'Se chover, será no salão', [
    'Extrair as informações principais de avisos no mural do bairro ou na caixa de correio.',
    'Perguntar sobre eventos e avisos da comunidade e entender as respostas.',
    'Ouvir um aviso de evento na transmissão local e entender as informações principais.',
    'Ao ser convidado para um evento da comunidade, perguntar sobre ele e entender as respostas.',
  ]),
  scaffold(8, 'Eventos da comunidade', '屋台はどこかわかりますか？', 'Você sabe onde ficam as barracas?', [
    'Ver a programação de um evento e extrair horários, atrações e informações principais.',
    'No local do evento, perguntar a funcionários sobre horário e lugar e entender as respostas.',
    'Perguntar ao responsável sobre requisitos e como se inscrever no evento que quer participar.',
    'Ouvir anúncios de orientação e avisos no local do evento e entender o conteúdo geral.',
    'Ler um post simples de um amigo que participou do evento e entender o conteúdo.',
    'Escrever um post simples nas redes sobre o evento de que participou.',
  ]),
  // Tópico 5 — Eventos anuais e etiqueta (年中行事とマナー)
  scaffold(9, 'Eventos anuais e etiqueta', '成人の日は、何をするんですか？', 'O que se faz no Dia da Maioridade?', [
    'Ouvir e entender o que se faz e o que se come nos eventos anuais do Japão.',
    'Falar de forma simples sobre o que fez nas férias (ano-novo etc.) e como foi.',
    'Apresentar de forma simples festas e eventos do seu país.',
    'Ler um artigo sobre um evento da comunidade de que participou e entender o conteúdo geral.',
    'Escrever e enviar uma mensagem de felicitações de ano-novo.',
  ]),
  scaffold(10, 'Eventos anuais e etiqueta', 'どんな服を着て行けばいいですか？', 'Que roupa devo vestir para ir?', [
    'Perguntar sobre etiqueta e costumes de casamento, funeral etc. no Japão e entender as respostas.',
    'Perguntar e comentar sobre diferenças de etiqueta/costumes entre o Japão e seu país.',
    'Falar de forma simples sobre um episódio de experiência intercultural.',
    'Ler posts na internet sobre diferenças de etiqueta/costumes e entender o conteúdo geral.',
  ]),
  // Tópico 6 — Comprar bem (上手な買い物)
  scaffold(11, 'Comprar bem', 'ポイントカードを忘れてしまいました', 'Esqueci o cartão de pontos', [
    'Numa loja de roupas, dizer cor, tamanho etc. e comprar o que quer.',
    'Avisar quem está por perto quando houver um problema durante as compras.',
    'Ao perder algo, descrever o objeto e o lugar onde o perdeu.',
    'Ouvir anúncios internos de um shopping etc. e entender o conteúdo geral.',
  ]),
  scaffold(12, 'Comprar bem', 'この掃除機は軽くて動かしやすいですよ', 'Este aspirador é leve e fácil de manusear', [
    'Quando quer comprar algo, consultar alguém sobre o que comprar e onde.',
    'Usar um app/site de brechó (flea market) para comprar eletroeletrônicos e outros itens.',
    'Ler tabela comparativa e etiquetas de preço de eletroeletrônicos na loja e extrair informações.',
    'Ao comprar um eletroeletrônico, perguntar ao vendedor sobre o produto ou pedir desconto.',
  ]),
  // Tópico 7 — Serviços diversos (さまざまなサービス)
  scaffold(13, 'Serviços diversos', 'いろいろな資料を展示してあります', 'Há vários materiais expostos', [
    'Ao ser guiado por um local, ouvir e entender o que há ali e o que se pode fazer.',
    'Ouvir e entender explicações de como usar a academia e outros locais públicos.',
    'Na biblioteca, perguntar sobre uso e regras e entender as respostas.',
    'Ler o guia de uso da biblioteca em japonês simples para estrangeiros e entender.',
    'Ver e entender placas como “proibido fotografar” em estabelecimentos.',
  ]),
  scaffold(14, 'Serviços diversos', '前髪は、もう少し短く切ってもらえますか？', 'Pode cortar a franja um pouco mais curta?', [
    'Ao usar serviços como entrega (takkyūbin) ou lavanderia, ouvir a explicação e entender como usar.',
    'Ler o aviso de ausência dos Correios e entender como pedir a reentrega.',
    'No salão/barbearia, transmitir como quer o corte de cabelo.',
    'Na associação de intercâmbio etc., ouvir e entender que serviços há para estrangeiros.',
  ]),
  // Tópico 8 — Natureza e meio ambiente (自然と環境)
  scaffold(15, 'Natureza e meio ambiente', '会議室の電気がついたままでした', 'As luzes da sala de reunião ficaram acesas', [
    'Ver um cartaz sobre atividades ecológicas afixado no trabalho etc. e entender os pontos de atenção.',
    'Falar do que faz pelo meio ambiente, ou ouvir e entender o que os outros fazem.',
    'Ler a explicação de como separar/descartar o lixo e entender quando jogar cada tipo.',
    'Perguntar como descartar o lixo e entender a resposta.',
  ]),
  scaffold(16, 'Natureza e meio ambiente', '地震が来ても、あわてて動かないでください', 'Mesmo com terremoto, não se desespere', [
    'Ouvir notícias/anúncios de desastre e entender o que houve e o que fazer.',
    'Ouvir explicações e instruções de simulado de prevenção e entender o procedimento e os cuidados.',
    'Ouvir e entender o conteúdo geral do que fazer em caso de terremoto num simulado.',
    'Em caso de desastre, perguntar a quem está perto e obter as informações necessárias.',
    'Ler um folheto de prevenção de desastres em japonês simples para estrangeiros e entender.',
  ]),
  // Tópico 9 — Minha vida (私の人生)
  scaffold(17, 'Minha vida', '日本語が前より話せるようになりました', 'Agora consigo falar japonês melhor que antes', [
    'Falar de forma simples sobre o que viveu e como sua vida mudou desde que chegou ao Japão.',
    'Falar de forma simples aos colegas sobre como o trabalho anda ultimamente.',
    'Escrever e enviar uma mensagem simples de novidades a quem lhe ensinou japonês.',
  ]),
  scaffold(18, 'Minha vida', '将来、自分の会社を作ろうと思います', 'No futuro, pretendo abrir minha própria empresa', [
    'Falar de forma simples sobre seus sonhos e desejos para o futuro.',
    'Ouvir e entender o conteúdo geral da experiência e dos conselhos de quem vive há muito no Japão.',
    'Numa festa de despedida etc., agradecer incluindo alguns episódios breves.',
  ]),
]

export const irodoriElementary2: Level = {
  id: 'elementary2',
  courseId: 'irodori',
  titlePt: 'Irodori — Elementary 2 (初級2 · A2)',
  descriptionPt:
    'Terceiro nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A2 (continuação do Elementary 1): manter conversas curtas e básicas sobre temas do dia a dia. São 9 tópicos em 18 lições (課), organizadas por módulos, com os áudios oficiais. As explicações são em português.',
  sections,
}
