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

// ---- Lição 7: 雨が降ったら、ホールでやります (tópico 地域のイベント) --------------
const lesson7Group: ExerciseGroup = {
  id: 'iro-e2-l7',
  title: '雨が降ったら、ホールでやります',
  subtitlePt: 'Ler avisos do bairro · entender perguntas e respostas sobre eventos · entender anúncios da rádio local · perguntar sobre um evento ao qual foi convidado',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l7-1', number: 1, prompt: '「{雨|あめ}が{降|ふ}ったら、{中|なか}のホールでやります」 — 「〜たら」 (condição hipotética) significa:', choices: [{ n: 1, text: 'se ~ (caso aconteça): se chover, fazemos no salão coberto' }, { n: 2, text: 'porque ~' }, { n: 3, text: 'embora ~' }, { n: 4, text: 'enquanto ~' }], answer: 1, translationPt: 'Se chover, será no salão (coberto).', explanationPt: '〜たら hipotético: supõe um fato que talvez aconteça. {雨|あめ}が{降|ふ}ったら, {忙|いそが}しかったら, {分|わ}からなかったら. Forma: passado comum + ら. (文法ノート ❶)' },
    { id: 'iro-e2-l7-2', number: 2, prompt: '「{盆踊|ぼんおど}りが{終|お}わったら、いっしょに{居酒屋|いざかや}に{行|い}きましょう」 — aqui o 「〜たら」 tem o outro sentido:', choices: [{ n: 1, text: 'depois que ~ (fato que vai acontecer): quando o bon-odori terminar, vamos ao izakaya' }, { n: 2, text: 'se por acaso ~ (duvidoso)' }, { n: 3, text: 'antes de ~' }, { n: 4, text: 'sem ~' }], answer: 1, explanationPt: '〜たら também marca «depois que (algo certo) acontecer»: {終|お}わったら, {駅|えき}に{着|つ}いたら. (Diferente do hipotético da Q1.) (文法ノート ❶)' },
    { id: 'iro-e2-l7-3', number: 3, prompt: '「コンサートが{開催|かいさい}されます」「{販売会|はんばいかい}が{行|おこな}われます」 — essas formas (受身/passivo) são usadas porque:', choices: [{ n: 1, text: 'o evento é o sujeito do anúncio (estilo formal de avisos/transmissões)' }, { n: 2, text: 'pedem para o ouvinte fazer algo' }, { n: 3, text: 'indicam o passado' }, { n: 4, text: 'expressam dúvida' }], answer: 1, explanationPt: 'Em anúncios formais, o evento vira sujeito: 〜が{開催|かいさい}される (será realizado), 〜が{行|おこな}われる, 〜が{予定|よてい}されている. Passivo 受身①. (文法ノート ❷)' },
    { id: 'iro-e2-l7-4', number: 4, prompt: '「{盆踊|ぼんおど}りは{簡単|かんたん}だから、だれでも{踊|おど}れますよ」「{浴衣|ゆかた}は1{人|ひと}りで{着|き}られますか？」 — 「{踊|おど}れる／{着|き}られる」 são:', choices: [{ n: 1, text: 'forma potencial — conseguir/poder fazer (qualquer um consegue dançar / consegue vestir sozinho?)' }, { n: 2, text: 'forma passiva' }, { n: 3, text: 'forma de pedido' }, { n: 4, text: 'forma negativa' }], answer: 1, explanationPt: 'Potencial: {踊|おど}る→{踊|おど}れる, {着|き}る→{着|き}られる, {飲|の}む→{飲|の}める. だれでも{踊|おど}れる (qualquer um consegue dançar). (文法ノート ❸)' },
    { id: 'iro-e2-l7-5', number: 5, prompt: '「{訓練|くんれん}には、{必|かなら}ず{参加|さんか}しなければなりません」 — 「V-なければなりません」 significa:', choices: [{ n: 1, text: 'tem de / é obrigatório fazer (é preciso participar)' }, { n: 2, text: 'não precisa fazer' }, { n: 3, text: 'é melhor não fazer' }, { n: 4, text: 'pode fazer' }], answer: 1, explanationPt: 'V-なければなりません = obrigação (tem de). {必|かなら}ず{参加|さんか}しなければなりません = é obrigatório participar. (Atividade 1 · お知らせ)' },
    { id: 'iro-e2-l7-6', number: 6, prompt: 'Avisos do bairro: 「{断水|だんすい}／{防災|ぼうさい}{訓練|くんれん}／おみこし／ボランティア」 significam:', choices: [{ n: 1, text: 'corte de água / simulado de prevenção de desastres / mikoshi (santuário portátil) / trabalho voluntário' }, { n: 2, text: 'falta de luz / aula de culinária / desfile de moda / passeio' }, { n: 3, text: 'mudança / reunião / show / feira' }, { n: 4, text: 'reforma / exame / leilão / sorteio' }], answer: 1, explanationPt: '{断水|だんすい} (corte de água, {水道|すいどう}{工事|こうじ}), {防災|ぼうさい}{訓練|くんれん} (simulado de desastre, さくら{小学校|しょうがっこう}{校庭|こうてい}), おみこし (santuário portátil de festa), ボランティア (海岸のごみ拾い). (Atividade 1)' },
    { id: 'iro-e2-l7-7', number: 7, prompt: 'Que evento (お知らせ) esta ilustração mostra?', image: `${IMG}/Z_07_3_02_konsaato.png`, imageAlt: 'concerto / apresentação musical', choices: [{ n: 1, text: 'コンサート — concerto' }, { n: 2, text: '{花火|はなび}{大会|たいかい} — festival de fogos' }, { n: 3, text: '{野菜|やさい}の{販売会|はんばいかい} — venda de legumes' }, { n: 4, text: 'カラオケ{大会|たいかい} — concurso de karaokê' }], answer: 1, explanationPt: 'コンサート = concerto (ex.: 「ピアノの{夕|ゆう}べ」コンサートが{開催|かいさい}されます). (Atividade 3 · 放送)' },
    { id: 'iro-e2-l7-8', number: 8, prompt: 'Que evento esta ilustração mostra?', image: `${IMG}/Z_07_3_03_hanabitaikai.png`, imageAlt: 'festival de fogos de artifício', choices: [{ n: 1, text: '{花火|はなび}{大会|たいかい} — festival de fogos de artifício' }, { n: 2, text: 'コンサート — concerto' }, { n: 3, text: '{盆踊|ぼんおど}り — bon-odori' }, { n: 4, text: 'フリーマーケット — feira de pulgas' }], answer: 1, explanationPt: '{花火|はなび}{大会|たいかい} = festival de fogos. {午後|ごご}7{時|じ}30{分|ぷん}から{花火|はなび}{大会|たいかい}が{予定|よてい}されています. (Atividade 3 · 放送)' },
    { id: 'iro-e2-l7-9', number: 9, prompt: 'Que evento esta ilustração mostra?', image: `${IMG}/Z_07_3_04_yasaihanbai.png`, imageAlt: 'venda de legumes frescos numa banca', choices: [{ n: 1, text: '{野菜|やさい}の{販売会|はんばいかい} — feira/venda de legumes' }, { n: 2, text: 'カラオケ{大会|たいかい} — karaokê' }, { n: 3, text: 'コンサート — concerto' }, { n: 4, text: '{花火|はなび}{大会|たいかい} — fogos' }], answer: 1, explanationPt: '{野菜|やさい}の{販売会|はんばいかい} = venda de legumes. {地元|じもと}の{農家|のうか}が{生産|せいさん}した{新鮮|しんせん}な{夏野菜|なつやさい}の{販売会|はんばいかい}. (Atividade 3 · 放送)' },
    { id: 'iro-e2-l7-10', number: 10, prompt: 'Que evento esta ilustração mostra?', image: `${IMG}/Z_07_3_05_karaoketaikai.png`, imageAlt: 'concurso de karaokê', choices: [{ n: 1, text: 'カラオケ{大会|たいかい} — concurso de karaokê' }, { n: 2, text: 'ブラスバンドの{演奏|えんそう} — apresentação de banda' }, { n: 3, text: '{野菜|やさい}の{販売会|はんばいかい} — venda de legumes' }, { n: 4, text: '{盆踊|ぼんおど}り — bon-odori' }], answer: 1, explanationPt: 'カラオケ{大会|たいかい} = concurso/festival de karaokê. (Atividade 3 · 放送)' },
    { id: 'iro-e2-l7-11', number: 11, prompt: 'Que evento esta ilustração mostra (músicos com instrumentos de sopro)?', image: `${IMG}/Z_07_3_06_burasubando.png`, imageAlt: 'banda marcial / fanfarra tocando', choices: [{ n: 1, text: 'ブラスバンドの{演奏|えんそう} — apresentação de banda (metais)' }, { n: 2, text: 'コンサート de piano' }, { n: 3, text: '{花火|はなび}{大会|たいかい} — fogos' }, { n: 4, text: 'カラオケ{大会|たいかい} — karaokê' }], answer: 1, explanationPt: 'ブラスバンドの{演奏|えんそう} = apresentação de banda (instrumentos de sopro/metais). (Atividade 3 · 放送)' },
    { id: 'iro-e2-l7-12', number: 12, prompt: '聴解 07-01 (ガス点検): o que a pessoa precisa fazer e quando?', context: 'Ｂ：ガス{会社|がいしゃ}の{人|ひと}が{家|いえ}に{来|き}て、ガスをチェックするんですよ。…{来週|らいしゅう}の{月曜日|げつようび}の14{時|じ}から15{時|じ}の{間|あいだ}…その{間|あいだ}は、{家|いえ}にいてください。', choices: [{ n: 1, text: 'É uma inspeção de gás; precisa ficar em casa na próxima segunda, entre 14h e 15h.' }, { n: 2, text: 'Precisa ir à companhia de gás às 15h.' }, { n: 3, text: 'É uma feira de pulgas no domingo.' }, { n: 4, text: 'É um corte de água.' }], answer: 1, explanationPt: 'ガス{点検|てんけん}: {家|いえ}にいてください, {月曜日|げつようび}14〜15{時|じ}の{間|あいだ}, 15{分|ふん}で{終|お}わる. (聴解 07-01)' },
    { id: 'iro-e2-l7-13', number: 13, prompt: '聴解 07-03 (花火大会): onde e quando é, e o que acontece se chover?', context: 'Ｂ：{中央|ちゅうおう}{海岸|かいがん}。…7{時|じ}に{始|はじ}まって…{雨|あめ}が{降|ふ}ったら、{日曜日|にちようび}にやるよ。{日曜日|にちようび}も{雨|あめ}だったら{中止|ちゅうし}だけど。', choices: [{ n: 1, text: 'Na praia central, começa às 19h; se chover, passa para domingo — e se chover no domingo também, é cancelado.' }, { n: 2, text: 'No salão coberto, sem horário definido.' }, { n: 3, text: 'Cancelado se fizer sol.' }, { n: 4, text: 'Só acontece se chover.' }], answer: 1, explanationPt: '{中央|ちゅうおう}{海岸|かいがん}, 7{時|じ}; {雨|あめ}が{降|ふ}ったら{日曜日|にちようび} (〜たら hipotético), {日曜日|にちようび}も{雨|あめ}だったら{中止|ちゅうし}. (聴解 07-03)' },
    { id: 'iro-e2-l7-14', number: 14, prompt: '聴解 07-04 (フリーマーケット): quando e onde acontece, e o que vendem?', context: 'Ｂ：{毎月|まいつき}、{第|だい}2{土曜日|どようび}に、{市役所|しやくしょ}の{広場|ひろば}でやってますよ。…{服|ふく}が{多|おお}いけど、{食器|しょっき}とか、おもちゃとか…天気が悪かったら、{中|なか}のホールでやります。', choices: [{ n: 1, text: 'Todo 2º sábado do mês, na praça da prefeitura; vendem roupas, louças, brinquedos etc.; se o tempo estiver ruim, é no salão coberto.' }, { n: 2, text: 'Só em dezembro, na estação.' }, { n: 3, text: 'Vendem só comida.' }, { n: 4, text: 'É cancelado se chover.' }], answer: 1, explanationPt: '{毎月|まいつき}{第|だい}2{土曜日|どようび}, {市役所|しやくしょ}の{広場|ひろば}; {服|ふく}・{食器|しょっき}・おもちゃ; {天気|てんき}が{悪|わる}かったら{中|なか}のホール (〜たら). (聴解 07-04)' },
    { id: 'iro-e2-l7-15', number: 15, prompt: '聴解 07-06 (放送 · コンサート): que informação o anúncio dá?', context: '7{月|がつ}14{日|か}…「ひかりホール」において、「ピアノの{夕|ゆう}べ」コンサートが{開催|かいさい}されます。{入場|にゅうじょう}{無料|むりょう}。', choices: [{ n: 1, text: 'Dia 14/7 haverá um concerto de piano no Hikari Hall; entrada gratuita.' }, { n: 2, text: 'Haverá um festival de fogos na praia.' }, { n: 3, text: 'Haverá uma feira de legumes.' }, { n: 4, text: 'A água será cortada.' }], answer: 1, explanationPt: 'コンサートが{開催|かいさい}されます (passivo ❷), {入場|にゅうじょう}{無料|むりょう} (entrada grátis). {市役所|しやくしょ}・{市民|しみん}センターで{販売|はんばい}{中|ちゅう}. (聴解 07-06)' },
    { id: 'iro-e2-l7-16', number: 16, prompt: '聴解 07-09 (放送 · 野菜販売): o que será vendido e por quem?', context: '「あおぞら{広場|ひろば}」において、{地元|じもと}の{農家|のうか}が{生産|せいさん}した{新鮮|しんせん}な{夏野菜|なつやさい}の{販売会|はんばいかい}が{行|おこな}われます。', choices: [{ n: 1, text: 'Venda de legumes de verão frescos, produzidos por agricultores locais, na praça Aozora.' }, { n: 2, text: 'Um concerto de piano gratuito.' }, { n: 3, text: 'Um treino de dança no centro comunitário.' }, { n: 4, text: 'Fogos de artifício.' }], answer: 1, explanationPt: '{地元|じもと}の{農家|のうか}が{生産|せいさん}した{夏野菜|なつやさい}の{販売会|はんばいかい}が{行|おこな}われます (passivo ❷). (聴解 07-09)' },
    { id: 'iro-e2-l7-17', number: 17, prompt: '会話 07-11 (盆踊りに誘う): o que é o 盆踊り e quem pode participar?', context: '{杉村|すぎむら}：{日本|にほん}の{祭|まつ}りです。{輪|わ}になって、{音楽|おんがく}に{合|あ}わせて、みんなで{踊|おど}るんですよ。{踊|おど}れない{人|ひと}は、だれでも{参加|さんか}できますよ。', choices: [{ n: 1, text: 'É uma festa japonesa: forma-se um círculo e todos dançam ao som da música; qualquer um pode participar (mesmo quem não sabe dançar).' }, { n: 2, text: 'É uma corrida só para profissionais.' }, { n: 3, text: 'É uma prova de canto individual.' }, { n: 4, text: 'É proibido para iniciantes.' }], answer: 1, explanationPt: '{輪|わ}になって{音楽|おんがく}に{合|あ}わせて{踊|おど}る; だれでも{参加|さんか}できる ({踊|おど}れない{人|ひと}も). {簡単|かんたん}だから、だれでも{踊|おど}れる (potencial ❸). (聴解 07-11)' },
    { id: 'iro-e2-l7-18', number: 18, prompt: '会話 07-11: o que Sugimura propõe sobre a roupa e o horário?', context: '{杉村|すぎむら}：{娘|むすめ}たちの{浴衣|ゆかた}があるから、{貸|か}しましょうか？ …うちに5{時|じ}に{来|き}てください。…{盆踊|ぼんおど}りが{終|お}わったら、いっしょに{居酒屋|いざかや}に{行|い}きましょう。', choices: [{ n: 1, text: 'Empresta um yukata das filhas; combinam de ir à casa dele às 17h; depois do bon-odori, vão juntos ao izakaya.' }, { n: 2, text: 'Cada um leva a própria roupa formal; encontram-se na estação.' }, { n: 3, text: 'Não há roupa especial nem encontro.' }, { n: 4, text: 'Vão embora antes de começar.' }], answer: 1, explanationPt: '{浴衣|ゆかた}を{貸|か}す, うちに5{時|じ}, {終|お}わったら{居酒屋|いざかや}へ (〜たら «depois que», ❶). (聴解 07-11)' },
    { id: 'iro-e2-l7-19', number: 19, prompt: 'Vocabulário do festival: 「{浴衣|ゆかた}／{寄付|きふ}／{輪|わ}になる／{音楽|おんがく}に{合|あ}わせて／{軍手|ぐんて}」 significam:', choices: [{ n: 1, text: 'yukata (quimono de verão) / doação (contribuição) / formar um círculo / ao som da música / luvas de trabalho' }, { n: 2, text: 'casaco / pagamento / fila / sem música / chapéu' }, { n: 3, text: 'sapato / reserva / fileira / em silêncio / guarda-chuva' }, { n: 4, text: 'máscara / ingresso / par / com pressa / toalha' }], answer: 1, explanationPt: '{浴衣|ゆかた} (yukata), {寄付|きふ} (doação — お{祭|まつ}りの{寄付|きふ}), {輪|わ}になる (formar círculo), {音楽|おんがく}に{合|あ}わせて (ao som), {軍手|ぐんて} (luvas de trabalho, p/ a ボランティア). (Atividades 1/2/4)' },
    { id: 'iro-e2-l7-20', number: 20, prompt: 'Os kanji 「お{知|し}らせ／{今月|こんげつ}／{水道|すいどう}／{工事|こうじ}／{広場|ひろば}／{場合|ばあい}」 lêem-se:', choices: [{ n: 1, text: 'おしらせ (aviso) / こんげつ (este mês) / すいどう (água encanada) / こうじ (obra) / ひろば (praça) / ばあい (caso/situação)' }, { n: 2, text: 'おしらせ / いまつき / みずどう / こうじ / こうじょう / じょうごう' }, { n: 3, text: 'おちらせ / こんげつ / すいみち / たくじ / ひろば / ばごう' }, { n: 4, text: 'しらせ / きんげつ / すいどう / くじ / ひろじょう / ばあい' }], answer: 1, explanationPt: 'お{知|し}らせ (aviso), {今月|こんげつ}, {水道|すいどう}, {工事|こうじ}, {広場|ひろば}, {場合|ばあい} ({雨|あめ}の{場合|ばあい} = em caso de chuva). (漢字のことば)' },
    { id: 'iro-e2-l7-21', number: 21, prompt: 'Os kanji 「{中止|ちゅうし}／{条件|じょうけん}／〜{以上|いじょう}／{開|ひら}く／{生産|せいさん}する」 lêem-se:', choices: [{ n: 1, text: 'ちゅうし (cancelamento) / じょうけん (condição) / いじょう (acima de) / ひらく (abrir/realizar) / せいさんする (produzir)' }, { n: 2, text: 'ちゅうし / じょうけん / いか / あく / うむさんする' }, { n: 3, text: 'なかどめ / じょうけん / いじょう / ひらく / せいさんする' }, { n: 4, text: 'ちゅうし / すじけん / いじょう / かいく / なまさんする' }], answer: 1, explanationPt: '{中止|ちゅうし} (cancelar), {条件|じょうけん} (condição), 〜{以上|いじょう} (~ ou mais), {開|ひら}く (abrir/realizar — {花火|はなび}{大会|たいかい}が{開|ひら}かれる), {生産|せいさん}する (produzir). (漢字のことば)' },
    { id: 'iro-e2-l7-22', number: 22, prompt: '会話 07-13〜15 (modelos «perguntar sobre o evento»): que tipos de pergunta aparecem?', context: 'イベントの{内容|ないよう}（{何|なん}ですか？）／{着|き}る{物|もの}・{持|も}ち{物|もの}（{何|なに}を{着|き}て{行|い}ったらいいですか？）／{集合|しゅうごう}{時間|じかん}（{何時|なんじ}にどこに{行|い}ったらいいですか？）', choices: [{ n: 1, text: 'sobre o conteúdo do evento, o que vestir/levar e o horário/local de encontro (V-たらいいですか).' }, { n: 2, text: 'só sobre o preço do ingresso.' }, { n: 3, text: 'só reclamações.' }, { n: 4, text: 'só pedidos de desculpa.' }], answer: 1, explanationPt: 'Ao ser convidado, pergunta-se {内容|ないよう}, {着|き}る{物|もの}/{持|も}ち{物|もの}, {集合|しゅうごう}{時間|じかん}/{場所|ばしょ} (〜たらいいですか). (会話 07-13〜15)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 7 (聴解スクリプト)
const L7_SCRIPTS: Record<string, ScriptItem[]> = {
  '07-01': [
    {
      label: '① ガス点検 (07-01)',
      setupJa: '{地域|ちいき}のチラシなどのお{知|し}らせについて、{人|ひと}が{質問|しつもん}しています。',
      setupPt: 'Perguntando sobre um aviso recebido. ① inspeção de gás.',
      lines: [
        { speaker: 'A', ja: 'すみません。この{紙|かみ}、ポストに{入|はい}ってたんですけど、{何|なん}ですか？', pt: 'Com licença. Este papel estava na caixa de correio; o que é?' },
        { speaker: 'B', ja: 'ああ、ガス{点検|てんけん}のお{知|し}らせですね。ガス{会社|がいしゃ}の{人|ひと}が{家|いえ}に{来|き}て、ガスをチェックするんですよ。', pt: 'Ah, é um aviso de inspeção de gás. Um funcionário da companhia vem em casa checar o gás.' },
        { speaker: 'A', ja: 'いつですか？', pt: 'Quando?' },
        { speaker: 'B', ja: '{来週|らいしゅう}の{月曜日|げつようび}の14{時|じ}から15{時|じ}の{間|あいだ}ですね。その{間|あいだ}は、{家|いえ}にいてください。15{分|ふん}ぐらいで{終|お}わりますから。', pt: 'Na próxima segunda, entre 14h e 15h. Nesse intervalo, fique em casa. Termina em uns 15 minutos.' },
        { speaker: 'A', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Obrigado.' },
      ],
    },
  ],
  '07-02': [
    {
      label: '② お祭りの寄付 (07-02)',
      setupPt: '② contribuição para a festa.',
      lines: [
        { speaker: 'A', ja: 'すみません。この{封筒|ふうとう}と{手紙|てがみ}、{何|なん}ですか？', pt: 'Com licença. Este envelope e esta carta, o que são?' },
        { speaker: 'B', ja: 'ああ、お{祭|まつ}りの{寄付|きふ}のお{願|ねが}いですね。もうすぐ{祭|まつ}りがあるんですよ。その{祭|まつ}りのために、1{人|ひと}り500{円|えん}、お{金|かね}を{払|はら}うんです。', pt: 'Ah, é um pedido de doação para a festa. Logo vai ter a festa. Para ela, cada pessoa paga 500 ienes.' },
        { speaker: 'A', ja: 'どうやって{払|はら}いますか？', pt: 'Como se paga?' },
        { speaker: 'B', ja: 'この{封筒|ふうとう}に500{円|えん}{入|い}れて、{名前|なまえ}と{住所|じゅうしょ}を{書|か}いて、{祭|まつ}りのとき{出|だ}すんです。', pt: 'Coloca-se 500 ienes neste envelope, escreve nome e endereço, e entrega na hora da festa.' },
        { speaker: 'A', ja: 'みんな、{払|はら}うんですか？', pt: 'Todo mundo paga?' },
        { speaker: 'B', ja: '{寄付|きふ}ですから、{払|はら}いたい{人|ひと}だけでいいですよ。', pt: 'É doação, então só quem quiser pagar, tudo bem.' },
      ],
    },
  ],
  '07-03': [
    {
      label: '③ 花火大会 (07-03)',
      setupPt: '③ festival de fogos.',
      lines: [
        { speaker: 'A', ja: 'あのう、{土曜日|どようび}の{夜|よる}、{町|まち}で{花火|はなび}{大会|たいかい}があると{聞|き}きました。{場所|ばしょ}はどこですか？', pt: 'Ouvi que vai ter festival de fogos na cidade sábado à noite. Onde é?' },
        { speaker: 'B', ja: '{中央|ちゅうおう}{海岸|かいがん}。ここから{歩|ある}いて15{分|ふん}ぐらいだけど、わかる？', pt: 'Na praia central. Uns 15 minutos a pé daqui — sabe onde é?' },
        { speaker: 'A', ja: 'あ、はい。', pt: 'Ah, sim.' },
        { speaker: 'B', ja: '7{時|じ}に{始|はじ}まって、1{時間|じかん}ぐらいだと{思|おも}うよ。', pt: 'Começa às 19h e dura uns 1 hora, acho.' },
        { speaker: 'A', ja: 'わかりました。{雨|あめ}のときは、どうなりますか？', pt: 'Entendi. E se chover?' },
        { speaker: 'B', ja: '{雨|あめ}が{降|ふ}ったら、{日曜日|にちようび}にやるよ。{日曜日|にちようび}も{雨|あめ}だったら{中止|ちゅうし}だけど。', pt: 'Se chover, passa para domingo. Se chover no domingo também, é cancelado.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '07-04': [
    {
      label: '④ フリーマーケット (07-04)',
      setupPt: '④ feira de pulgas (flea market).',
      lines: [
        { speaker: 'A', ja: 'あのう、{市役所|しやくしょ}でフリーマーケットがあるそうですね。', pt: 'Ouvi que vai ter uma feira de pulgas na prefeitura.' },
        { speaker: 'B', ja: 'ええ。{毎月|まいつき}、{第|だい}2{土曜日|どようび}に、{市役所|しやくしょ}の{広場|ひろば}でやってますよ。', pt: 'Sim. Todo 2º sábado do mês, na praça da prefeitura.' },
        { speaker: 'A', ja: 'どんなものを{売|う}ってますか？', pt: 'O que vendem?' },
        { speaker: 'B', ja: '{服|ふく}が{多|おお}いけど、{食器|しょっき}とか、おもちゃとか、いろいろあると{思|おも}いますよ。', pt: 'Tem bastante roupa, mas também louças, brinquedos, várias coisas.' },
        { speaker: 'A', ja: '天気が{悪|わる}かったら、どうなりますか？', pt: 'E se o tempo estiver ruim?' },
        { speaker: 'B', ja: '{雨|あめ}が{降|ふ}ったら、{中|なか}のホールでやります。', pt: 'Se chover, fazemos no salão coberto.' },
        { speaker: 'A', ja: 'ありがとうございます。{行|い}ってみます。', pt: 'Obrigado. Vou lá.' },
      ],
    },
  ],
  '07-06': [
    {
      label: '① 放送 — コンサート (07-06)',
      setupJa: '{町内|ちょうない}{放送|ほうそう}で、イベントのお{知|し}らせが{流|なが}れています。',
      setupPt: 'Anúncio de evento na transmissão do bairro. ① concerto.',
      lines: [
        { speaker: 'Narração', ja: 'さくら{市民|しみん}センターからお{知|し}らせします。7{月|がつ}14{日|か}、{日曜日|にちようび}、さくら{市民|しみん}センターの「ひかりホール」において、「ピアノの{夕|ゆう}べ」コンサートが{開催|かいさい}されます。{入場|にゅうじょう}{無料|むりょう}。{皆様|みなさま}のご{来場|らいじょう}をお{待|ま}ちしています。', pt: 'Comunicado do Centro Cívico Sakura. No dia 14/7, domingo, no «Hikari Hall» do Centro Cívico Sakura, será realizado o concerto «Noite de Piano». Entrada gratuita. Aguardamos a presença de todos.' },
      ],
    },
  ],
  '07-08': [
    {
      label: '③ 放送 — ふるさとまつり (07-08)',
      setupPt: '③ festival da cidade (furusato matsuri).',
      lines: [
        { speaker: 'Narração', ja: '{市役所|しやくしょ}から、「ふるさとまつり」についてお{知|し}らせします。{本日|ほんじつ}、{午後|ごご}1{時|じ}から、「ふるさとまつり」が{開|ひら}かれます。カラオケ{大会|たいかい}やブラスバンドの{演奏|えんそう}などの{楽|たの}しいイベント。{午後|ごご}7{時|じ}30{分|ぷん}からは、{花火|はなび}{大会|たいかい}が{予定|よてい}されています。{皆様|みなさま}、お{誘|さそ}い{合|あ}わせの{上|うえ}、お{出|で}かけください。', pt: 'Da prefeitura, sobre o «Furusato Matsuri». Hoje, a partir das 13h, será realizado o «Furusato Matsuri». Haverá eventos divertidos como concurso de karaokê e apresentação de banda. A partir das 19h30 está previsto um festival de fogos. Venham todos, tragam os amigos.' },
      ],
    },
  ],
  '07-09': [
    {
      label: '④ 放送 — 野菜の販売会 (07-09)',
      setupPt: '④ venda de legumes.',
      lines: [
        { speaker: 'Narração', ja: '{町役場|まちやくば}から、{野菜|やさい}の{販売会|はんばいかい}についてお{知|し}らせします。{明日|あす}、7{月|がつ}28{日|にち}、{日曜日|にちようび}、{午前|ごぜん}8{時|じ}30{分|ぷん}から、「あおぞら{広場|ひろば}」において、{地元|じもと}の{農家|のうか}が{生産|せいさん}した{新鮮|しんせん}な{夏野菜|なつやさい}の{販売会|はんばいかい}が{行|おこな}われます。{皆様|みなさま}のご{来場|らいじょう}をお{待|ま}ちしています。', pt: 'Da prefeitura municipal, sobre a venda de legumes. Amanhã, 28/7, domingo, a partir das 8h30, na praça «Aozora», será realizada a venda de legumes de verão frescos produzidos por agricultores locais. Aguardamos a presença de todos.' },
      ],
    },
  ],
  '07-11': [
    {
      label: '会話 — 盆踊りに誘う (07-11)',
      setupJa: '{杉村|すぎむら}さんが、{同|おな}じ{会社|かいしゃ}のジーナさん・ラウラさんを{盆踊|ぼんおど}りに{誘|さそ}っています。',
      setupPt: 'Sugimura convida as colegas de empresa Gina e Laura para o bon-odori.',
      lines: [
        { speaker: '杉村', ja: '{今度|こんど}の{土曜日|どようび}、{盆踊|ぼんおど}りがありますけど、{知|し}ってますか？', pt: 'Sábado que vem vai ter bon-odori; vocês conhecem?' },
        { speaker: 'ジーナ', ja: 'ぼんおどり？ {何|なん}ですか？', pt: 'Bon-odori? O que é?' },
        { speaker: '杉村', ja: '{日本|にほん}の{祭|まつ}りです。{輪|わ}になって、{音楽|おんがく}に{合|あ}わせて、みんなで{踊|おど}るんですよ。{踊|おど}れない{人|ひと}は、だれでも{参加|さんか}できますよ。', pt: 'É uma festa japonesa. Forma-se um círculo e todos dançam ao som da música. Qualquer um pode participar, mesmo quem não sabe dançar.' },
        { speaker: 'ジーナ', ja: 'でも、{私|わたし}、{一度|いちど}もやったことないです。', pt: 'Mas eu nunca fiz isso.' },
        { speaker: '杉村', ja: '{簡単|かんたん}だから、だれでも{踊|おど}れますよ。わからなかったら{教|おし}えるから、だいじょうぶ。', pt: 'É simples, qualquer um consegue dançar. Se não souber, eu ensino, fica tranquila.' },
        { speaker: 'ジーナ', ja: 'じゃあ、{行|い}ってみます。{何|なに}を{着|き}て{行|い}ったらいいですか？', pt: 'Então vou. O que devo vestir?' },
        { speaker: '杉村', ja: '{何|なん}でもいいですよ。あ、でも、{娘|むすめ}たちの{浴衣|ゆかた}があるから、{貸|か}しましょうか？', pt: 'Qualquer coisa serve. Ah, mas tenho os yukatas das minhas filhas; quer que eu empreste?' },
        { speaker: 'ジーナ', ja: 'でも、1{人|ひと}りで{着|き}られますか？', pt: 'Mas eu consigo vestir sozinha?' },
        { speaker: '杉村', ja: '{私|わたし}が{手伝|てつだ}うから、だいじょうぶ。{盆踊|ぼんおど}りの{前|まえ}に、うちで{浴衣|ゆかた}を{着|き}てから{行|い}きましょう。うちに5{時|じ}に{来|き}てください。', pt: 'Eu ajudo, fica tranquila. Antes do bon-odori, vamos vestir o yukata na minha casa e ir. Venha à minha casa às 17h.' },
        { speaker: '杉村', ja: '6{時|じ}から{始|はじ}まりますよ。{盆踊|ぼんおど}りが{終|お}わったら、いっしょに{居酒屋|いざかや}に{行|い}きましょう。', pt: 'Começa às 18h. Quando o bon-odori terminar, vamos juntos ao izakaya.' },
        { speaker: 'ラウラ', ja: '{楽|たの}しみです。', pt: 'Estou ansiosa!' },
      ],
    },
  ],
}

const lesson7: Section = {
  id: 'lesson-7',
  level: 'elementary2',
  titleJa: '第7課 雨が降ったら、ホールでやります',
  titlePt: 'Lição 7 — Se chover, será no salão',
  summaryPt:
    'Eventos da comunidade · ler avisos do mural do bairro ou da caixa de correio (断水／防災訓練／お祭り／ボランティア), entender perguntas e respostas sobre eventos (雨が降ったら、中のホールでやります), entender anúncios da rádio local (コンサートが開催されます) e, ao ser convidado, perguntar sobre o evento (盆踊り？ 何ですか／何を着て行ったらいいですか).',
  studyNotes: [
    {
      title: 'Tópico: Eventos da comunidade (地域のイベント)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Extrair as informações principais de avisos no mural do bairro ou na caixa de correio.\n' +
        '- Perguntar sobre eventos e avisos da comunidade e entender as respostas.\n' +
        '- Ouvir um aviso de evento na transmissão local e entender as informações principais.\n' +
        '- Ao ser convidado para um evento da comunidade, perguntar sobre ele e entender as respostas.\n\n' +
        '💡 Pergunta de abertura: {地域|ちいき}のお{祭|まつ}りや{行事|ぎょうじ}に{参加|さんか}したことがありますか？ (você já participou de festas/eventos da comunidade?).',
    },
    {
      title: '〜たら — “se” e “depois que” (➊)',
      bodyPt:
        '**〜たら** (forma comum do passado + ら) tem dois usos:\n\n' +
        '- **condição hipotética** (se ~ acontecer): `{雨|あめ}が{降|ふ}ったら、{中|なか}のホールでやります` (se chover, fazemos no salão). `{忙|いそが}しかったら…`, `わからなかったら、{教|おし}えます`.\n' +
        '- **fato que vai acontecer** (depois que ~): `{盆踊|ぼんおど}りが{終|お}わったら、{居酒屋|いざかや}に{行|い}きましょう` (quando o bon-odori acabar, vamos ao izakaya). `{駅|えき}に{着|つ}いたら…`.\n\n' +
        '(文法ノート ❶)',
    },
    {
      title: 'Passivo 受身① — eventos em avisos (➋)',
      bodyPt:
        'Em **avisos e transmissões formais**, o evento vira o sujeito (forma passiva):\n\n' +
        '- `コンサートが{開催|かいさい}されます` (será realizado um concerto), `{販売会|はんばいかい}が{行|おこな}われます`, `{花火|はなび}{大会|たいかい}が{予定|よてい}されています`, `{練習|れんしゅう}が{開|ひら}かれます`.\n\n' +
        '🔧 〜する→〜される; {行|おこな}う→{行|おこな}われる; {開|ひら}く→{開|ひら}かれる. (文法ノート ❷)',
    },
    {
      title: 'Forma potencial 可能形 + だれでも〜 (➌)',
      bodyPt:
        'A **forma potencial** diz o que se consegue fazer:\n\n' +
        '- `だれでも{踊|おど}れますよ` (qualquer um consegue dançar), `1{人|ひと}りで{着|き}られますか？` (consegue vestir sozinho?), `お{酒|さけ}、{飲|の}めますか？`.\n\n' +
        '💡 Também: 〜なければなりません (ter de — {必|かなら}ず{参加|さんか}しなければなりません). (文法ノート ❸)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Avisos do bairro:** {断水|だんすい} (corte de água), {水道|すいどう}{工事|こうじ}, {防災|ぼうさい}{訓練|くんれん} (simulado de desastre), {校庭|こうてい}, {雨天|うてん}の{場合|ばあい} (em caso de chuva), {寄付|きふ} (doação), {申|もう}し{込|こ}む (inscrever-se), {持|も}ち{物|もの}, {軍手|ぐんて}.\n\n' +
        '**Eventos:** コンサート, {花火|はなび}{大会|たいかい}, {野菜|やさい}の{販売会|はんばいかい}, カラオケ{大会|たいかい}, ブラスバンドの{演奏|えんそう}, {盆踊|ぼんおど}り, {浴衣|ゆかた}, おみこし, フリーマーケット, ガス{点検|てんけん}.\n\n' +
        '**Anúncios:** {開催|かいさい}する／される, {行|おこな}う／{行|おこな}われる, {入場|にゅうじょう}{無料|むりょう}, {集合|しゅうごう}, {中止|ちゅうし}.\n\n' +
        '**Kanji da lição:** お{知|し}らせ, {今月|こんげつ}, {水道|すいどう}, {工事|こうじ}, {広場|ひろば}, {場合|ばあい}, {中止|ちゅうし}, {条件|じょうけん}, 〜{以上|いじょう}, {開|ひら}く, {生産|せいさん}する.',
    },
  ],
  groups: [lesson7Group],
  audios: attachScripts(7, L7_SCRIPTS),
}

// ---- Lição 8: 屋台はどこかわかりますか？ (tópico 地域のイベント) --------------
const lesson8Group: ExerciseGroup = {
  id: 'iro-e2-l8',
  title: '屋台はどこかわかりますか？',
  subtitlePt: 'Ler a programação de um festival · perguntar horário/lugar a funcionários · perguntar requisitos e inscrição · entender anúncios e regras do local · ler e escrever um post sobre o evento',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l8-1', number: 1, prompt: 'O título da lição 「{屋台|やたい}はどこかわかりますか？」 contém um padrão de pergunta embutida. O que ela significa?', choices: [{ n: 1, text: 'Você sabe onde ficam as barracas (de comida)?' }, { n: 2, text: 'As barracas já fecharam?' }, { n: 3, text: 'Quanto custam as barracas?' }, { n: 4, text: 'Quem cuida das barracas?' }], answer: 1, translationPt: 'Você sabe onde ficam as barracas?', explanationPt: '[疑問詞] + frase (forma comum) + か + わかりますか = pergunta embutida: «sabe onde/quando/o que…?». {屋台|やたい}はどこか + わかりますか. (文法ノート ❸)' },
    { id: 'iro-e2-l8-2', number: 2, prompt: 'Que atração de festival esta ilustração mostra (barraca de comida)?', image: `${IMG}/Z_08_1_01_yatai.png`, imageAlt: 'barraca de takoyaki num festival', choices: [{ n: 1, text: '{屋台|やたい} — barraca (de comida) de rua' }, { n: 2, text: 'ステージ — palco' }, { n: 3, text: 'ファッションショー — desfile de moda' }, { n: 4, text: 'スタンプラリー — caça ao carimbo' }], answer: 1, explanationPt: '{屋台|やたい} = barraca de comida de rua (ex.: たこ{焼|や}き). (Atividade 1 · チラシ)' },
    { id: 'iro-e2-l8-3', number: 3, prompt: 'Que parte do evento esta ilustração mostra?', image: `${IMG}/Z_08_1_02_suteeji.png`, imageAlt: 'palco montado ao ar livre com cadeiras', choices: [{ n: 1, text: 'ステージ — palco (onde acontecem as apresentações)' }, { n: 2, text: '{屋台|やたい} — barraca de comida' }, { n: 3, text: '{観光|かんこう}{紹介|しょうかい}コーナー — estande de turismo' }, { n: 4, text: 'スタンプラリー — caça ao carimbo' }], answer: 1, explanationPt: 'ステージ = palco. As パフォーマンス (apresentações) acontecem na ステージ. (Atividade 1)' },
    { id: 'iro-e2-l8-4', number: 4, prompt: '「ステージで、いろいろなパフォーマンスがあります」 — パフォーマンス significa:', image: `${IMG}/Z_08_1_03_pafoomansu.png`, imageAlt: 'pessoas se apresentando num palco', choices: [{ n: 1, text: 'apresentação / performance (música, dança etc.)' }, { n: 2, text: 'inscrição' }, { n: 3, text: 'bilheteria' }, { n: 4, text: 'estacionamento' }], answer: 1, explanationPt: 'パフォーマンス = apresentação/performance no palco. (Atividade 1)' },
    { id: 'iro-e2-l8-5', number: 5, prompt: 'Que estande esta ilustração mostra (mapas e folhetos de pontos turísticos)?', image: `${IMG}/Z_08_1_04_kankooshookaikoonaa.png`, imageAlt: 'estande com cartazes e folhetos turísticos', choices: [{ n: 1, text: '{観光|かんこう}{紹介|しょうかい}コーナー — estande de divulgação turística' }, { n: 2, text: '{屋台|やたい} — barraca de comida' }, { n: 3, text: 'カラオケ{大会|たいかい} — concurso de karaokê' }, { n: 4, text: 'ステージ — palco' }], answer: 1, explanationPt: '{観光|かんこう}{紹介|しょうかい}コーナー = estande de divulgação turística (apresenta pontos turísticos da região). (Atividade 1)' },
    { id: 'iro-e2-l8-6', number: 6, prompt: 'Que atividade do palco esta ilustração mostra (pessoa falando ao microfone diante de jurados)?', image: `${IMG}/Z_08_1_05_supiichikontesuto.png`, imageAlt: 'concurso de discurso com participante ao microfone', choices: [{ n: 1, text: 'スピーチコンテスト — concurso de discurso' }, { n: 2, text: 'カラオケ{大会|たいかい} — concurso de karaokê' }, { n: 3, text: 'ファッションショー — desfile de moda' }, { n: 4, text: '{合気道|あいきどう}のデモンストレーション — demonstração de aikidô' }], answer: 1, explanationPt: 'スピーチコンテスト = concurso de discurso. (Atividade 1 / 2)' },
    { id: 'iro-e2-l8-7', number: 7, prompt: 'Que evento do palco esta ilustração mostra (pessoa cantando ao microfone)?', image: `${IMG}/Z_08_1_06_karaoketaikai.png`, imageAlt: 'concurso de karaokê', choices: [{ n: 1, text: 'カラオケ{大会|たいかい} — concurso de karaokê' }, { n: 2, text: 'スピーチコンテスト — concurso de discurso' }, { n: 3, text: 'パフォーマンス de dança' }, { n: 4, text: 'スタンプラリー — caça ao carimbo' }], answer: 1, explanationPt: 'カラオケ{大会|たいかい} = concurso de karaokê. (Atividade 1 / 3)' },
    { id: 'iro-e2-l8-8', number: 8, prompt: 'Que demonstração esta ilustração mostra (arte marcial)?', image: `${IMG}/Z_08_1_07_aikidoo.png`, imageAlt: 'demonstração de aikidô', choices: [{ n: 1, text: '{合気道|あいきどう}のデモンストレーション — demonstração de aikidô' }, { n: 2, text: 'ファッションショー — desfile de moda' }, { n: 3, text: '{屋台|やたい} — barraca de comida' }, { n: 4, text: 'カラオケ{大会|たいかい} — karaokê' }], answer: 1, explanationPt: '{合気道|あいきどう}のデモンストレーション = demonstração de aikidô (arte marcial japonesa). (Atividade 1)' },
    { id: 'iro-e2-l8-9', number: 9, prompt: 'Que atividade esta ilustração mostra (crianças experimentando brincadeiras do mundo)?', image: `${IMG}/Z_08_1_08_asobitaiken.png`, imageAlt: 'experiência de brincadeiras de vários países', choices: [{ n: 1, text: '{世界|せかい}の{遊|あそ}び{体験|たいけん} — experiência de brincadeiras do mundo' }, { n: 2, text: 'スピーチコンテスト — concurso de discurso' }, { n: 3, text: 'ステージ — palco' }, { n: 4, text: '{観光|かんこう}{紹介|しょうかい}コーナー — estande turístico' }], answer: 1, explanationPt: '{世界|せかい}の{遊|あそ}び{体験|たいけん} = experiência de brincadeiras de vários países. {体験|たいけん} = experimentar/vivenciar. (Atividade 1)' },
    { id: 'iro-e2-l8-10', number: 10, prompt: 'Que apresentação esta ilustração mostra (modelos desfilando)?', image: `${IMG}/Z_08_1_09_fasshonshoo.png`, imageAlt: 'desfile de moda com trajes típicos', choices: [{ n: 1, text: 'ファッションショー — desfile de moda' }, { n: 2, text: 'カラオケ{大会|たいかい} — karaokê' }, { n: 3, text: '{合気道|あいきどう}のデモンストレーション — aikidô' }, { n: 4, text: '{屋台|やたい} — barraca' }], answer: 1, explanationPt: 'ファッションショー = desfile de moda. (Atividade 1)' },
    { id: 'iro-e2-l8-11', number: 11, prompt: 'Que atividade esta ilustração mostra (juntar carimbos pelos estandes)?', image: `${IMG}/Z_08_1_10_sutanpurarii.png`, imageAlt: 'cartão de caça ao carimbo (stamp rally)', choices: [{ n: 1, text: 'スタンプラリー — caça ao carimbo (visitar estandes para juntar carimbos)' }, { n: 2, text: '{観光|かんこう}{紹介|しょうかい}コーナー — estande turístico' }, { n: 3, text: 'パフォーマンス — apresentação' }, { n: 4, text: '{屋台|やたい} — barraca' }], answer: 1, explanationPt: 'スタンプラリー = caça ao carimbo: percorrer os estandes juntando carimbos. (Atividade 1)' },
    { id: 'iro-e2-l8-12', number: 12, prompt: '聴解 08-03: 「スピーチコンテストは、もう{始|はじ}まりましたか？」 — qual a resposta do funcionário?', context: 'Ａ：すみません、スピーチコンテストは、もう{始|はじ}まりましたか？／Ｂ：いいえ、まだです。2{時|じ}からですよ。', choices: [{ n: 1, text: 'Ainda não começou; começa às 14h.' }, { n: 2, text: 'Já começou e já terminou.' }, { n: 3, text: 'Foi cancelado.' }, { n: 4, text: 'Começou às 14h e ainda está acontecendo.' }], answer: 1, explanationPt: 'もう{始|はじ}まりましたか？ → いいえ、まだです (ainda não). 2{時|じ}から. もう〜ましたか / まだです. (文法ノート ❶, 聴解 08-03)' },
    { id: 'iro-e2-l8-13', number: 13, prompt: '聴解 08-04: 「{受|う}け{付|つ}けは、もう{終|お}わりましたか？」 — resposta:', context: 'Ａ：すみません、カラオケ{大会|たいかい}の{受|う}け{付|つ}けは、もう{終|お}わりましたか？／Ｂ：はい、もう{終|お}わりました。', choices: [{ n: 1, text: 'Sim, as inscrições já terminaram (もう終わりました).' }, { n: 2, text: 'Não, ainda nem começaram.' }, { n: 3, text: 'Estão acontecendo agora.' }, { n: 4, text: 'Começam às 14h.' }], answer: 1, explanationPt: 'もう{終|お}わりましたか？ → はい、もう{終|お}わりました (já terminou). {受|う}け{付|つ}け = recepção/inscrição. (文法ノート ❶, 聴解 08-04)' },
    { id: 'iro-e2-l8-14', number: 14, prompt: '聴解 08-05: 「カンボジア{料理|りょうり}の{屋台|やたい}はどこか、わかりますか？」 — que caminho o funcionário indica?', context: 'Ｂ：カンボジア{料理|りょうり}ですね。この{道|みち}をまっすぐ{行|い}って、つきあたりを{右|みぎ}に{曲|ま}がってください。', choices: [{ n: 1, text: 'Seguir reto e virar à direita no fim da rua.' }, { n: 2, text: 'Voltar e virar à esquerda.' }, { n: 3, text: 'A barraca já fechou.' }, { n: 4, text: 'Subir as escadas e seguir reto.' }], answer: 1, explanationPt: 'どこか、わかりますか (pergunta embutida ❸). この{道|みち}をまっすぐ{行|い}って、つきあたりを{右|みぎ}に{曲|ま}がる. (聴解 08-05)' },
    { id: 'iro-e2-l8-15', number: 15, prompt: '聴解 08-06: sobre a フリーマーケット, o que a pessoa fica sabendo?', context: 'Ａ：フリーマーケットは、もう{終|お}わりましたか？／Ｂ：今日は、もう{終|お}わりました。／Ａ：{明日|あした}は、{何時|なんじ}からか、わかりますか？／Ｂ：{朝|あさ}10{時|じ}からですよ。', choices: [{ n: 1, text: 'Hoje a feira já acabou; amanhã começa às 10h da manhã.' }, { n: 2, text: 'Hoje começa às 10h.' }, { n: 3, text: 'A feira foi cancelada.' }, { n: 4, text: 'A feira é só à noite.' }], answer: 1, explanationPt: '今日は、もう{終|お}わりました; {明日|あした}は{何時|なんじ}からか、わかりますか → {朝|あさ}10{時|じ}から. Pergunta embutida com {何時|なんじ}…か. (聴解 08-06)' },
    { id: 'iro-e2-l8-16', number: 16, prompt: '「スピーチコンテストは、まだやっていますか？」 — 「まだ + V-ています」 indica:', choices: [{ n: 1, text: 'ainda está acontecendo / continua em andamento' }, { n: 2, text: 'já terminou' }, { n: 3, text: 'ainda não começou' }, { n: 4, text: 'nunca aconteceu' }], answer: 1, explanationPt: 'まだ + V-ています = ainda está fazendo / continua. (≠ まだ V-ていません = ainda não fez.) (文法ノート ❷)' },
    { id: 'iro-e2-l8-17', number: 17, prompt: '聴解 08-14 (カラオケ大会の参加条件): quem pode participar do concurso de karaokê?', context: '{係|かかり}の{人|ひと}：{中学生|ちゅうがくせい}{以上|いじょう}の{方|かた}なら、どなたでも{参加|さんか}できます。ただ、プロの{方|かた}はご{遠慮|えんりょ}ください。', choices: [{ n: 1, text: 'Qualquer pessoa do ginásio (中学生) para cima; profissionais não podem.' }, { n: 2, text: 'Só crianças menores de 12 anos.' }, { n: 3, text: 'Só cantores profissionais.' }, { n: 4, text: 'Ninguém pode se inscrever no dia.' }], answer: 1, explanationPt: '{中学生|ちゅうがくせい}{以上|いじょう}なら、どなたでも{参加|さんか}できる; プロの{方|かた}はご{遠慮|えんりょ}ください (profissionais, por favor abstenham-se). ご{遠慮|えんりょ}ください = pedido formal de «não, por favor». (聴解 08-14)' },
    { id: 'iro-e2-l8-18', number: 18, prompt: '聴解 08-14: além de quem pode participar, que condições o funcionário explica?', context: '{係|かかり}の{人|ひと}：{参加費|さんかひ}は1000{円|えん}です。カラオケがある{曲|きょく}だけです。この{申込書|もうしこみしょ}に{書|か}いてください。{先着順|せんちゃくじゅん}です。', choices: [{ n: 1, text: 'Taxa de 1000 ienes; só músicas que existam no karaokê; preencher a ficha; por ordem de chegada.' }, { n: 2, text: 'Entrada gratuita; qualquer música; sem ficha; por sorteio.' }, { n: 3, text: 'Só para profissionais; 5000 ienes.' }, { n: 4, text: 'Não há inscrição.' }], answer: 1, explanationPt: '{参加費|さんかひ}1000{円|えん}; カラオケにある{曲|きょく}だけ; {申込書|もうしこみしょ}に{記入|きにゅう}; {先着順|せんちゃくじゅん} (por ordem de chegada). (聴解 08-14)' },
    { id: 'iro-e2-l8-19', number: 19, prompt: '「プロの{方|かた}はご{遠慮|えんりょ}ください」「{写真|しゃしん}は{遠慮|えんりょ}してください」 — ご{遠慮|えんりょ}ください significa:', choices: [{ n: 1, text: 'pedido educado para NÃO fazer algo (abstenha-se, por favor)' }, { n: 2, text: 'por favor, fique à vontade para fazer' }, { n: 3, text: 'é obrigatório fazer' }, { n: 4, text: 'faça mais tarde' }], answer: 1, explanationPt: 'ご{遠慮|えんりょ}ください = «por favor, abstenha-se / evite» (proibição educada). Forma keigo usada em avisos. (Atividade 3 / 4)' },
    { id: 'iro-e2-l8-20', number: 20, prompt: 'Onde acontece o evento? Esta ilustração representa:', image: `${IMG}/Z_08_4_01_kaijoo.png`, imageAlt: 'vista geral do local do evento (recinto)', choices: [{ n: 1, text: '{会場|かいじょう} — o local/recinto do evento' }, { n: 2, text: '{受付|うけつけ} — recepção' }, { n: 3, text: '{屋台|やたい} — barraca' }, { n: 4, text: 'ステージ — palco' }], answer: 1, explanationPt: '{会場|かいじょう} = local/recinto onde o evento acontece. (Atividade 4 · 場内アナウンス)' },
    { id: 'iro-e2-l8-21', number: 21, prompt: '聴解 08-20 (場内アナウンス): que regra é anunciada sobre o cigarro?', context: 'アナウンス：{会場内|かいじょうない}は、{禁煙|きんえん}です。たばこは、{決|き}められた{場所|ばしょ}でお{願|ねが}いします。', choices: [{ n: 1, text: 'É proibido fumar no recinto; fume apenas nos locais designados.' }, { n: 2, text: 'Pode fumar em qualquer lugar.' }, { n: 3, text: 'É proibido comer.' }, { n: 4, text: 'É proibido tirar fotos.' }], answer: 1, explanationPt: '{会場内|かいじょうない}は{禁煙|きんえん} (proibido fumar); たばこは{決|き}められた{場所|ばしょ}で. (聴解 08-20)' },
    { id: 'iro-e2-l8-22', number: 22, prompt: 'Que regra do local esta placa indica?', image: `${IMG}/Z_08_4_04_tabako.png`, imageAlt: 'placa de proibido fumar', choices: [{ n: 1, text: '{禁煙|きんえん} — proibido fumar' }, { n: 2, text: '{写真|しゃしん}{禁止|きんし} — proibido fotografar' }, { n: 3, text: '{飲食|いんしょく}{禁止|きんし} — proibido comer/beber' }, { n: 4, text: '{携帯|けいたい}{電話|でんわ}{禁止|きんし} — proibido celular' }], answer: 1, explanationPt: '{禁煙|きんえん} = proibido fumar. (Atividade 4)' },
    { id: 'iro-e2-l8-23', number: 23, prompt: '聴解 08-21 (場内アナウンス): que regra sobre foto/vídeo e celular é dada?', context: 'アナウンス：{写真|しゃしん}{撮影|さつえい}はできますが、{動画|どうが}の{撮影|さつえい}はご{遠慮|えんりょ}ください。{携帯|けいたい}{電話|でんわ}はマナーモードにしてください。', choices: [{ n: 1, text: 'Pode tirar fotos, mas não filmar vídeos; deixe o celular no modo silencioso.' }, { n: 2, text: 'Pode filmar, mas não fotografar.' }, { n: 3, text: 'Celulares são proibidos no recinto.' }, { n: 4, text: 'Fotos e vídeos são livres.' }], answer: 1, explanationPt: '{写真|しゃしん}OKだが{動画|どうが}はご{遠慮|えんりょ}ください; {携帯|けいたい}はマナーモードに. (聴解 08-21)' },
    { id: 'iro-e2-l8-24', number: 24, prompt: 'Que regra esta ilustração indica (foto x vídeo)?', image: `${IMG}/Z_08_4_02_shashindooga.png`, imageAlt: 'foto permitida, vídeo proibido', choices: [{ n: 1, text: '{写真|しゃしん}はOK、{動画|どうが}はだめ — foto pode, vídeo não' }, { n: 2, text: 'tudo proibido' }, { n: 3, text: 'tudo permitido' }, { n: 4, text: 'só vídeo permitido' }], answer: 1, explanationPt: '{写真|しゃしん}{撮影|さつえい}OK、{動画|どうが}{撮影|さつえい}はご{遠慮|えんりょ}ください. (Atividade 4)' },
    { id: 'iro-e2-l8-25', number: 25, prompt: '聴解 08-22 (場内アナウンス): que regra sobre comida/bebida é anunciada?', context: 'アナウンス：{飲食物|いんしょくぶつ}の{持|も}ち{込|こ}みはご{遠慮|えんりょ}ください。お{食事|しょくじ}は、ロビーでお{願|ねが}いします。', choices: [{ n: 1, text: 'Não traga comida/bebida de fora; faça as refeições no saguão (ロビー).' }, { n: 2, text: 'Pode comer em qualquer lugar.' }, { n: 3, text: 'É proibido comer no evento todo.' }, { n: 4, text: 'Só pode beber água.' }], answer: 1, explanationPt: '{飲食物|いんしょくぶつ}の{持|も}ち{込|こ}みはご{遠慮|えんりょ}ください; お{食事|しょくじ}はロビーで. {持|も}ち{込|こ}み = trazer de fora. (聴解 08-22)' },
    { id: 'iro-e2-l8-26', number: 26, prompt: 'Que regra esta ilustração indica?', image: `${IMG}/Z_08_4_03_inshoku.png`, imageAlt: 'placa de proibido comer e beber', choices: [{ n: 1, text: '{飲食|いんしょく}{禁止|きんし} — proibido comer e beber (neste lugar)' }, { n: 2, text: '{禁煙|きんえん} — proibido fumar' }, { n: 3, text: '{写真|しゃしん}{禁止|きんし} — proibido fotografar' }, { n: 4, text: '{携帯|けいたい}{禁止|きんし} — proibido celular' }], answer: 1, explanationPt: '{飲食|いんしょく}{禁止|きんし} = proibido comer/beber ali; お{食事|しょくじ}はロビーで. (Atividade 4)' },
    { id: 'iro-e2-l8-27', number: 27, prompt: '聴解 08-23 (場内アナウンス): que aviso é dado sobre a venda de bolo (ロールケーキ)?', context: 'アナウンス：{本日|ほんじつ}、{大変|たいへん}{人気|にんき}のロールケーキは、{販売|はんばい}を{終了|しゅうりょう}いたしました。お{買|か}い{求|もと}めの{方|かた}は、{列|れつ}に{並|なら}んでお{待|ま}ちください。', choices: [{ n: 1, text: 'A venda do popular rolo de bolo já encerrou; quem quiser comprar deve entrar na fila e aguardar.' }, { n: 2, text: 'O bolo está em promoção.' }, { n: 3, text: 'O bolo é distribuído de graça.' }, { n: 4, text: 'A venda começa às 14h.' }], answer: 1, explanationPt: '{販売|はんばい}を{終了|しゅうりょう}いたしました (a venda encerrou — keigo); {列|れつ}に{並|なら}んでお{待|ま}ちください. (聴解 08-23)' },
    { id: 'iro-e2-l8-28', number: 28, prompt: '聴解 08-36 (SNSの{投稿|とうこう} · Daniel Martin): o que ele conta sobre o festival?', context: 'ダニエル：{昨日|きのう}、{国際|こくさい}{交流|こうりゅう}フェスティバルに{行|い}ってきました。いろいろな{国|くに}の{屋台|やたい}が{出|で}ていて、とてもおいしかったです。ステージのパフォーマンスも{楽|たの}しかったです。', choices: [{ n: 1, text: 'Foi ao Festival de Intercâmbio Internacional; havia barracas de vários países (muito gostosas) e as apresentações do palco foram divertidas.' }, { n: 2, text: 'Não conseguiu entrar no festival.' }, { n: 3, text: 'O festival foi cancelado pela chuva.' }, { n: 4, text: 'Só assistiu pela TV.' }], answer: 1, explanationPt: 'Post de quem participou: {屋台|やたい}が{出|で}ていて、おいしかった; ステージのパフォーマンスも{楽|たの}しかった. Modelo para a Atividade 6 (escrever seu próprio post). (聴解 08-36)' },
    { id: 'iro-e2-l8-29', number: 29, prompt: 'Vocabulário do evento: 「{受付|うけつけ}／{申込書|もうしこみしょ}／{参加費|さんかひ}／{先着順|せんちゃくじゅん}／{持|も}ち{込|こ}み」 significam:', choices: [{ n: 1, text: 'recepção/inscrição / ficha de inscrição / taxa de participação / por ordem de chegada / trazer (algo) de fora' }, { n: 2, text: 'saída / recibo / desconto / por sorteio / devolução' }, { n: 3, text: 'palco / ingresso / gorjeta / fila única / empréstimo' }, { n: 4, text: 'mapa / cardápio / troco / reserva / entrega' }], answer: 1, explanationPt: '{受付|うけつけ} (recepção), {申込書|もうしこみしょ} (ficha de inscrição), {参加費|さんかひ} (taxa), {先着順|せんちゃくじゅん} (ordem de chegada), {持|も}ち{込|こ}み (trazer de fora). (Atividades 2/3/4)' },
    { id: 'iro-e2-l8-30', number: 30, prompt: 'Os kanji 「{来年|らいねん}／{会場|かいじょう}／{世界|せかい}／{体験|たいけん}／{国際|こくさい}{交流|こうりゅう}」 lêem-se:', choices: [{ n: 1, text: 'らいねん (ano que vem) / かいじょう (recinto) / せかい (mundo) / たいけん (experiência) / こくさいこうりゅう (intercâmbio internacional)' }, { n: 2, text: 'らいねん / あいば / せいかい / からだけん / くにさいこうりゅう' }, { n: 3, text: 'きねん / かいじょう / せかい / たいけん / こくさいまじわり' }, { n: 4, text: 'らいげつ / えじょう / よがい / ていけん / こくさいこうりゅう' }], answer: 1, explanationPt: '{来年|らいねん}, {会場|かいじょう}, {世界|せかい}, {体験|たいけん}, {国際|こくさい}{交流|こうりゅう}. (漢字のことば)' },
    { id: 'iro-e2-l8-31', number: 31, prompt: 'Os kanji 「{禁止|きんし}／{紙|かみ}／{始|はじ}まる／{申|もう}し{込|こ}む／{交流|こうりゅう}」 lêem-se:', choices: [{ n: 1, text: 'きんし (proibição) / かみ (papel) / はじまる (começar) / もうしこむ (inscrever-se) / こうりゅう (intercâmbio)' }, { n: 2, text: 'きんし / し / しまる / さるこむ / こうりゅう' }, { n: 3, text: 'きんとめ / かみ / はじまる / しんこむ / まじりゅう' }, { n: 4, text: 'きんし / がみ / おわる / もうしこむ / ながれ' }], answer: 1, explanationPt: '{禁止|きんし}, {紙|かみ}, {始|はじ}まる, {申|もう}し{込|こ}む, {交流|こうりゅう}. (漢字のことば)' },
    { id: 'iro-e2-l8-32', number: 32, prompt: 'Resumo do padrão central da lição: para perguntar a um funcionário onde/quando algo acontece, qual estrutura você usa?', choices: [{ n: 1, text: '[疑問詞]…か + わかりますか／教えてください — ex.: 屋台はどこか、わかりますか／何時からか、教えてください' }, { n: 2, text: '〜たいです (querer fazer)' }, { n: 3, text: '〜たことがあります (já fez)' }, { n: 4, text: '〜なければなりません (ter de)' }], answer: 1, explanationPt: 'Pergunta embutida: [疑問詞] + frase comum + か + わかりますか／{教|おし}えてください. {屋台|やたい}はどこか/{何時|なんじ}からか + わかりますか. (文法ノート ❸)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 8 (聴解スクリプト)
const L8_SCRIPTS: Record<string, ScriptItem[]> = {
  '08-03': [
    {
      label: '① スピーチコンテスト (08-03)',
      setupJa: 'イベントの{会場|かいじょう}で、{係|かかり}の{人|ひと}に{時間|じかん}や{場所|ばしょ}を{聞|き}いています。',
      setupPt: 'No local do evento, perguntando horário e lugar a um funcionário. ① concurso de discurso.',
      lines: [
        { speaker: 'A', ja: 'すみません、スピーチコンテストは、もう{始|はじ}まりましたか？', pt: 'Com licença, o concurso de discurso já começou?' },
        { speaker: 'B', ja: 'いいえ、まだです。2{時|じ}からですよ。', pt: 'Não, ainda não. Começa às 14h.' },
        { speaker: 'A', ja: 'そうですか。ありがとうございます。', pt: 'Ah, sei. Obrigado.' },
      ],
    },
  ],
  '08-04': [
    {
      label: '② カラオケ大会の受け付け (08-04)',
      setupPt: '② recepção/inscrição do concurso de karaokê.',
      lines: [
        { speaker: 'A', ja: 'すみません、カラオケ{大会|たいかい}の{受|う}け{付|つ}けは、もう{終|お}わりましたか？', pt: 'Com licença, as inscrições para o concurso de karaokê já terminaram?' },
        { speaker: 'B', ja: 'はい、もう{終|お}わりました。', pt: 'Sim, já terminaram.' },
        { speaker: 'A', ja: 'そうですか。{残念|ざんねん}です。', pt: 'Ah, sei. Que pena.' },
      ],
    },
  ],
  '08-05': [
    {
      label: '③ カンボジア料理の屋台 (08-05)',
      setupPt: '③ procurando a barraca de comida cambojana.',
      lines: [
        { speaker: 'A', ja: 'すみません、カンボジア{料理|りょうり}の{屋台|やたい}はどこか、わかりますか？', pt: 'Com licença, você sabe onde fica a barraca de comida cambojana?' },
        { speaker: 'B', ja: 'カンボジア{料理|りょうり}ですね。この{道|みち}をまっすぐ{行|い}って、つきあたりを{右|みぎ}に{曲|ま}がってください。', pt: 'Comida cambojana, certo? Siga reto por esta rua e, no fim, vire à direita.' },
        { speaker: 'A', ja: 'まっすぐ{行|い}って、{右|みぎ}ですね。ありがとうございます。', pt: 'Reto e à direita, então. Obrigado.' },
      ],
    },
  ],
  '08-06': [
    {
      label: '④ フリーマーケット (08-06)',
      setupPt: '④ feira de pulgas.',
      lines: [
        { speaker: 'A', ja: 'すみません、フリーマーケットは、もう{終|お}わりましたか？', pt: 'Com licença, a feira de pulgas já acabou?' },
        { speaker: 'B', ja: '今日は、もう{終|お}わりました。', pt: 'Por hoje, já acabou.' },
        { speaker: 'A', ja: '{明日|あした}は、{何時|なんじ}からか、わかりますか？', pt: 'Você sabe a que horas começa amanhã?' },
        { speaker: 'B', ja: '{朝|あさ}10{時|じ}からですよ。', pt: 'Às 10h da manhã.' },
        { speaker: 'A', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Obrigado.' },
      ],
    },
  ],
  '08-14': [
    {
      label: 'カラオケ大会の参加条件 (08-14)',
      setupJa: 'ヨスさんが、{係|かかり}の{人|ひと}にカラオケ{大会|たいかい}の{参加|さんか}について{聞|き}いています。',
      setupPt: 'Yos pergunta ao funcionário sobre como participar do concurso de karaokê.',
      lines: [
        { speaker: 'ヨス', ja: 'すみません、このカラオケ{大会|たいかい}は、だれでも{参加|さんか}できますか？', pt: 'Com licença, qualquer um pode participar deste concurso de karaokê?' },
        { speaker: '係の人', ja: '{中学生|ちゅうがくせい}{以上|いじょう}の{方|かた}なら、どなたでも{参加|さんか}できます。ただ、プロの{方|かた}はご{遠慮|えんりょ}ください。', pt: 'Qualquer pessoa do ginásio para cima pode participar. Só pedimos que profissionais se abstenham.' },
        { speaker: 'ヨス', ja: 'お{金|かね}はかかりますか？', pt: 'Tem alguma taxa?' },
        { speaker: '係の人', ja: '{参加費|さんかひ}は1000{円|えん}です。{歌|うた}える{曲|きょく}は、カラオケにある{曲|きょく}だけです。', pt: 'A taxa de participação é 1000 ienes. As músicas permitidas são só as que existem no karaokê.' },
        { speaker: 'ヨス', ja: 'どうやって{申|もう}し{込|こ}めばいいですか？', pt: 'Como eu faço a inscrição?' },
        { speaker: '係の人', ja: 'この{申込書|もうしこみしょ}に{名前|なまえ}と{曲名|きょくめい}を{書|か}いてください。{先着順|せんちゃくじゅん}ですから、{早|はや}めにお{願|ねが}いします。', pt: 'Preencha nome e nome da música nesta ficha. É por ordem de chegada, então faça logo, por favor.' },
        { speaker: 'ヨス', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '08-20': [
    {
      label: '① 場内アナウンス — 禁煙 (08-20)',
      setupJa: 'イベント{会場|かいじょう}で、{場内|じょうない}アナウンスが{流|なが}れています。',
      setupPt: 'No recinto do evento, anúncios internos. ① proibido fumar.',
      lines: [
        { speaker: 'Narração', ja: '{皆様|みなさま}にお{願|ねが}いいたします。{会場内|かいじょうない}は、{禁煙|きんえん}です。たばこは、{決|き}められた{場所|ばしょ}でお{願|ねが}いします。', pt: 'Solicitamos a todos: o recinto é livre de fumo. Por favor, fume apenas nos locais designados.' },
      ],
    },
  ],
  '08-21': [
    {
      label: '② 場内アナウンス — 写真・動画・携帯 (08-21)',
      setupPt: '② foto, vídeo e celular.',
      lines: [
        { speaker: 'Narração', ja: '{皆様|みなさま}にお{願|ねが}いいたします。{写真|しゃしん}の{撮影|さつえい}はできますが、{動画|どうが}の{撮影|さつえい}はご{遠慮|えんりょ}ください。また、{携帯|けいたい}{電話|でんわ}はマナーモードにしてください。', pt: 'Solicitamos a todos: fotos são permitidas, mas pedimos que não filmem vídeos. Além disso, deixem o celular no modo silencioso.' },
      ],
    },
  ],
  '08-22': [
    {
      label: '③ 場内アナウンス — 飲食 (08-22)',
      setupPt: '③ comida e bebida.',
      lines: [
        { speaker: 'Narração', ja: '{皆様|みなさま}にお{願|ねが}いいたします。{飲食物|いんしょくぶつ}の{持|も}ち{込|こ}みはご{遠慮|えんりょ}ください。お{食事|しょくじ}は、ロビーでお{願|ねが}いします。', pt: 'Solicitamos a todos: não tragam comidas e bebidas de fora. As refeições devem ser feitas no saguão.' },
      ],
    },
  ],
  '08-23': [
    {
      label: '④ 場内アナウンス — ロールケーキ販売 (08-23)',
      setupPt: '④ venda de rolo de bolo (roll cake).',
      lines: [
        { speaker: 'Narração', ja: '{本日|ほんじつ}、{大変|たいへん}{人気|にんき}のロールケーキは、{販売|はんばい}を{終了|しゅうりょう}いたしました。お{買|か}い{求|もと}めの{方|かた}は、{列|れつ}に{並|なら}んでお{待|ま}ちください。', pt: 'Hoje, a venda do nosso popular rolo de bolo já se encerrou. Quem desejar comprar, por favor entre na fila e aguarde.' },
      ],
    },
  ],
  '08-36': [
    {
      label: 'SNSの投稿 — ダニエル・マルティン (08-36)',
      setupJa: 'ダニエルさんが、フェスティバルについてSNSに{投稿|とうこう}しています。',
      setupPt: 'Daniel posta nas redes sociais sobre o festival.',
      lines: [
        { speaker: 'ダニエル', ja: '{昨日|きのう}、{国際|こくさい}{交流|こうりゅう}フェスティバルに{行|い}ってきました。いろいろな{国|くに}の{屋台|やたい}が{出|で}ていて、とてもおいしかったです。ステージのパフォーマンスも{楽|たの}しかったです。{来年|らいねん}もまた{行|い}きたいです。', pt: 'Ontem fui ao Festival de Intercâmbio Internacional. Havia barracas de vários países e estava tudo muito gostoso. As apresentações do palco também foram divertidas. Quero ir de novo no ano que vem.' },
      ],
    },
  ],
}

const lesson8: Section = {
  id: 'lesson-8',
  level: 'elementary2',
  titleJa: '第8課 屋台はどこかわかりますか？',
  titlePt: 'Lição 8 — Você sabe onde ficam as barracas?',
  summaryPt:
    'Eventos da comunidade · ler a programação de um festival e extrair horários e atrações (屋台／ステージ／パフォーマンス／スピーチコンテスト), perguntar a funcionários no local onde/quando algo acontece (屋台はどこか、わかりますか／もう始まりましたか), perguntar requisitos e como se inscrever (だれでも参加できますか／参加費は？) e entender anúncios e regras do recinto (会場内は禁煙です／動画の撮影はご遠慮ください), além de ler e escrever um post sobre o evento.',
  studyNotes: [
    {
      title: 'Tópico: Eventos da comunidade (地域のイベント)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ver a programação de um evento e extrair horários, atrações e informações principais.\n' +
        '- No local do evento, perguntar a funcionários sobre horário e lugar e entender as respostas.\n' +
        '- Perguntar ao responsável sobre requisitos e como se inscrever no evento que quer participar.\n' +
        '- Ouvir anúncios de orientação e avisos no local do evento e entender o conteúdo geral.\n' +
        '- Ler e escrever um post simples nas redes sobre o evento de que participou.\n\n' +
        '💡 Cenário: a 「{国際|こくさい}{交流|こうりゅう}フェスティバル」 (Festival de Intercâmbio Internacional), com {屋台|やたい} (barracas), ステージ (palco) e várias パフォーマンス.',
    },
    {
      title: 'もう〜ました / まだ〜ていません — já / ainda não (➊)',
      bodyPt:
        'Para perguntar se algo **já aconteceu**:\n\n' +
        '- `スピーチコンテストは、もう{始|はじ}まりましたか？` → `はい、もう{始|はじ}まりました` (já começou) / `いいえ、まだです` (ainda não).\n' +
        '- `{受|う}け{付|つ}けは、もう{終|お}わりましたか？` → `はい、もう{終|お}わりました`.\n\n' +
        '🔧 **もう** + V-ました = «já»; resposta negativa = **まだです** ou **まだ V-ていません** (ainda não). (文法ノート ❶)',
    },
    {
      title: 'まだ V-ています — ainda está acontecendo (➋)',
      bodyPt:
        'Para dizer que algo **continua em andamento**:\n\n' +
        '- `スピーチコンテストは、まだやっていますか？` → `はい、まだやっています` (ainda está acontecendo).\n\n' +
        '⚠️ Não confunda: **まだ V-ています** = ainda está fazendo (continua) ≠ **まだ V-ていません** = ainda não fez. (文法ノート ❷)',
    },
    {
      title: 'Pergunta embutida: [疑問詞]…か + わかりますか (➌)',
      bodyPt:
        'Para perguntar com jeito «sabe onde/quando/o que…?», embute-se a pergunta com **か**:\n\n' +
        '- `{屋台|やたい}は[[どこか]]、わかりますか？` (sabe onde ficam as barracas?).\n' +
        '- `{明日|あした}は、[[{何時|なんじ}からか]]、わかりますか？` (sabe a que horas é amanhã?).\n' +
        '- `だれが{来|く}るか／{何|なに}があるか、{知|し}っていますか？`\n\n' +
        '🔧 Estrutura: **[疑問詞] + frase na forma comum + か** + わかりますか／{知|し}っていますか／{教|おし}えてください. (文法ノート ❸)',
    },
    {
      title: 'Avisos do recinto: keigo ご遠慮ください / お願いいたします',
      bodyPt:
        'Anúncios do local (場内アナウンス) usam fórmulas educadas:\n\n' +
        '- `{皆様|みなさま}にお{願|ねが}いいたします` (solicitamos a todos…) abre o aviso.\n' +
        '- `〜はご{遠慮|えんりょ}ください` = «por favor, abstenha-se de ~» (proibição educada): {動画|どうが}の{撮影|さつえい}／{飲食物|いんしょくぶつ}の{持|も}ち{込|こ}み／プロの{方|かた}.\n' +
        '- `〜でお{願|ねが}いします` = «façam em ~, por favor»: たばこは{決|き}められた{場所|ばしょ}で.\n' +
        '- `{会場内|かいじょうない}は{禁煙|きんえん}です`, `{携帯|けいたい}はマナーモードに`.',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Programação/atrações:** {屋台|やたい} (barraca), ステージ (palco), パフォーマンス, {観光|かんこう}{紹介|しょうかい}コーナー, スピーチコンテスト, カラオケ{大会|たいかい}, {合気道|あいきどう}のデモンストレーション, {世界|せかい}の{遊|あそ}び{体験|たいけん}, ファッションショー, スタンプラリー.\n\n' +
        '**Inscrição:** {受付|うけつけ}, {申込書|もうしこみしょ}, {申|もう}し{込|こ}む, {参加費|さんかひ}, {参加|さんか}{条件|じょうけん}, 〜{以上|いじょう}, {先着順|せんちゃくじゅん}, ご{遠慮|えんりょ}ください.\n\n' +
        '**Regras do local:** {会場|かいじょう}, {禁煙|きんえん}, {禁止|きんし}, {撮影|さつえい}, {動画|どうが}, {飲食|いんしょく}, {持|も}ち{込|こ}み, マナーモード, {販売|はんばい}{終了|しゅうりょう}, {列|れつ}に{並|なら}ぶ.\n\n' +
        '**Kanji da lição:** {来年|らいねん}, {会場|かいじょう}, {世界|せかい}, {体験|たいけん}, {国際|こくさい}, {交流|こうりゅう}, {禁止|きんし}, {紙|かみ}, {始|はじ}まる, {申|もう}し{込|こ}む.',
    },
  ],
  groups: [lesson8Group],
  audios: attachScripts(8, L8_SCRIPTS),
}

// ---- Lição 9: 成人の日は、何をするんですか？ (tópico 年中行事とマナー) --------------
const lesson9Group: ExerciseGroup = {
  id: 'iro-e2-l9',
  title: '成人の日は、何をするんですか？',
  subtitlePt: 'Conhecer os eventos anuais do Japão (年中行事) · falar do que fez nas férias de ano-novo · apresentar festas do seu país · ler um relato de evento · escrever felicitações de ano-novo',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l9-1', number: 1, prompt: 'O título 「{成人|せいじん}の{日|ひ}は、{何|なに}をするんですか？」 usa 「〜んですか」. Que nuance ele dá?', choices: [{ n: 1, text: 'pergunta pedindo uma explicação sobre algo que se acabou de notar/saber (o que se faz, afinal, no Dia da Maioridade?)' }, { n: 2, text: 'ordem para fazer algo' }, { n: 3, text: 'convite' }, { n: 4, text: 'dúvida sobre o passado' }], answer: 1, translationPt: 'O que se faz no Dia da Maioridade?', explanationPt: '〜んですか pede explicação sobre algo que despertou interesse: {何|なに}をするんですか？／このおすしは、ひな{祭|まつ}りに{食|た}べるんですか？ (文法ノート ❶)' },
    { id: 'iro-e2-l9-2', number: 2, prompt: 'Que evento anual (年中行事) esta ilustração mostra?', image: `${IMG}/Z_09_1_01_oshoogatsu.png`, imageAlt: 'família comemorando o Ano-Novo japonês', choices: [{ n: 1, text: 'お{正月|しょうがつ} — Ano-Novo (1º de janeiro)' }, { n: 2, text: 'ひな{祭|まつ}り — Festival das Meninas' }, { n: 3, text: 'こどもの{日|ひ} — Dia das Crianças' }, { n: 4, text: 'クリスマス — Natal' }], answer: 1, explanationPt: 'お{正月|しょうがつ} (1月1日) = Ano-Novo japonês. (Atividade 1 · 年中行事)' },
    { id: 'iro-e2-l9-3', number: 3, prompt: 'Que evento esta ilustração mostra (jovens de 20 anos, muitas de quimono)?', image: `${IMG}/Z_09_1_02_seejinnohi.png`, imageAlt: 'jovens em traje formal no Dia da Maioridade', choices: [{ n: 1, text: '{成人|せいじん}の{日|ひ} — Dia da Maioridade (2ª segunda de janeiro)' }, { n: 2, text: 'お{正月|しょうがつ} — Ano-Novo' }, { n: 3, text: '七夕 — Tanabata' }, { n: 4, text: 'こどもの{日|ひ} — Dia das Crianças' }], answer: 1, explanationPt: '{成人|せいじん}の{日|ひ} (1月第2月曜日) celebra quem fez 20 {歳|さい}. {成人式|せいじんしき}で{着物|きもの}を{着|き}て{写真|しゃしん}を{撮|と}る. (Atividade 1)' },
    { id: 'iro-e2-l9-4', number: 4, prompt: 'Que evento esta ilustração mostra (bonecas em exposição)?', image: `${IMG}/Z_09_1_03_hinamatsuri.png`, imageAlt: 'bonecas hina expostas em degraus', choices: [{ n: 1, text: 'ひな{祭|まつ}り — Festival das Meninas (3 de março)' }, { n: 2, text: 'こどもの{日|ひ} — Dia das Crianças' }, { n: 3, text: '七夕 — Tanabata' }, { n: 4, text: 'お{正月|しょうがつ} — Ano-Novo' }], answer: 1, explanationPt: 'ひな{祭|まつ}り (3月3日): {人形|にんぎょう}を{飾|かざ}り, ちらしずしや{甘酒|あまざけ}を{食|た}べる/{飲|の}む. (Atividade 1)' },
    { id: 'iro-e2-l9-5', number: 5, prompt: 'Que evento esta ilustração mostra (carpas de tecido / capacete)?', image: `${IMG}/Z_09_1_04_kodomonohi.png`, imageAlt: 'bandeiras de carpa (koinobori) do Dia das Crianças', choices: [{ n: 1, text: 'こどもの{日|ひ} — Dia das Crianças (5 de maio)' }, { n: 2, text: 'ひな{祭|まつ}り — Festival das Meninas' }, { n: 3, text: 'クリスマス — Natal' }, { n: 4, text: '{成人|せいじん}の{日|ひ} — Dia da Maioridade' }], answer: 1, explanationPt: 'こどもの{日|ひ} (5月5日): こいのぼり (bandeiras de carpa) e capacetes. (Atividade 1)' },
    { id: 'iro-e2-l9-6', number: 6, prompt: 'Que evento esta ilustração mostra (tiras de papel num galho de bambu)?', image: `${IMG}/Z_09_1_05_tanabata.png`, imageAlt: 'decoração de Tanabata com tanzaku no bambu', choices: [{ n: 1, text: '七夕 — Tanabata (7 de julho)' }, { n: 2, text: 'お{正月|しょうがつ} — Ano-Novo' }, { n: 3, text: 'ひな{祭|まつ}り — Festival das Meninas' }, { n: 4, text: 'クリスマス — Natal' }], answer: 1, explanationPt: '七夕 (7月7日): {短冊|たんざく} (tiras de papel) com {願|ねが}い{事|ごと} (desejos) presas ao {笹|ささ} (bambu). (Atividade 1, 聴解 09-03)' },
    { id: 'iro-e2-l9-7', number: 7, prompt: 'Que evento esta ilustração mostra (árvore enfeitada, presentes)?', image: `${IMG}/Z_09_1_06_kurisumasu.png`, imageAlt: 'família comemorando o Natal', choices: [{ n: 1, text: 'クリスマス — Natal (25 de dezembro)' }, { n: 2, text: '七夕 — Tanabata' }, { n: 3, text: 'こどもの{日|ひ} — Dia das Crianças' }, { n: 4, text: '{成人|せいじん}の{日|ひ} — Dia da Maioridade' }], answer: 1, explanationPt: 'クリスマス (12月25日). No Japão: フライドチキンやケーキを{食|た}べる, {恋人|こいびと}とデート. (Atividade 1, 聴解 09-06)' },
    { id: 'iro-e2-l9-8', number: 8, prompt: '聴解 09-05 (成人の日): segundo o diálogo, o que é o 成人の日 e o que se faz nele?', context: 'Ｂ：20{歳|さい}になった{人|ひと}を、お{祝|いわ}いするんだよ。{市|し}のホールで{成人式|せいじんしき}があって、{市長|しちょう}さんの{話|はなし}を{聞|き}いたり……。みんなおしゃれをして、{特|とく}に{女性|じょせい}は{着物|きもの}を{着|き}て{写真|しゃしん}を{撮|と}ったり、{友|とも}だちと{久|ひさ}しぶりに{会|あ}ったりして、{盛|も}り{上|あ}がるんだよ。', choices: [{ n: 1, text: 'Celebra quem completou 20 anos; há a cerimônia (成人式) com discurso do prefeito, e as pessoas se arrumam, vestem quimono, tiram fotos e reencontram amigos.' }, { n: 2, text: 'É uma festa só para crianças pequenas.' }, { n: 3, text: 'É um feriado de fim de ano com fogos.' }, { n: 4, text: 'É um dia de jejum.' }], answer: 1, explanationPt: '20{歳|さい}になった{人|ひと}をお{祝|いわ}いする; {成人式|せいじんしき}・{市長|しちょう}の{話|はなし}; {着物|きもの}を{着|き}て{写真|しゃしん}, {友|とも}だちと{再会|さいかい}. (聴解 09-05)' },
    { id: 'iro-e2-l9-9', number: 9, prompt: '聴解 09-04 (ひな祭り): o que se come e bebe nesse dia, segundo o diálogo?', context: 'Ａ：ちらしずしですよ。{今日|きょう}はひな{祭|まつ}りだから、{家|いえ}で{作|つく}って{来|き}たんです。…ひな{祭|まつ}りには、{甘酒|あまざけ}を{飲|の}んだりもしますよ。…{甘酒|あまざけ}は、お{酒|さけ}じゃなくて、お{米|こめ}から{作|つく}った{飲|の}み{物|もの}です。アルコールは{入|はい}ってない…。', choices: [{ n: 1, text: 'Come-se chirashizushi e bebe-se amazake — que não é bebida alcoólica, é feita de arroz e não tem álcool.' }, { n: 2, text: 'Come-se frango frito e bebe-se cerveja.' }, { n: 3, text: 'Não se come nada de especial.' }, { n: 4, text: 'Bebe-se só saquê forte.' }], answer: 1, explanationPt: 'ひな{祭|まつ}り: ちらしずし; {甘酒|あまざけ} (お{米|こめ}から{作|つく}った, アルコールなし); {人形|にんぎょう}を{飾|かざ}る. (聴解 09-04)' },
    { id: 'iro-e2-l9-10', number: 10, prompt: '聴解 09-03 (七夕): o que se faz com o 短冊 (tira de papel)?', context: 'Ｂ：7{月|がつ}7{日|なのか}は七夕っていって、こうして{笹|ささ}の{葉|は}に{飾|かざ}りをつけて{飾|かざ}るんです。…この{紙|かみ}、{短冊|たんざく}っていうんですけど、これに{願|ねが}い{事|ごと}を{書|か}いて、この{笹|ささ}につけるんです。', choices: [{ n: 1, text: 'Escreve-se um desejo (願い事) no tanzaku e prende-se no bambu (笹).' }, { n: 2, text: 'Joga-se o papel fora depois de ler.' }, { n: 3, text: 'Come-se o papel como doce.' }, { n: 4, text: 'Dá-se o papel de presente.' }], answer: 1, explanationPt: '七夕: {短冊|たんざく}に{願|ねが}い{事|ごと}を{書|か}いて{笹|ささ}につける. Ex.: 「{日本語|にほんご}がもっと{上手|じょうず}になりたい」. (聴解 09-03)' },
    { id: 'iro-e2-l9-11', number: 11, prompt: '聴解 09-06 (クリスマス): segundo o diálogo, como costuma ser o Natal no Japão?', context: 'Ｂ：フライドチキンを{食|た}べたり……。{恋人|こいびと}がいる{人|ひと}は、{恋人|こいびと}とデートしたりとか。{町|まち}のイルミネーションがきれいだしね。…{日本|にほん}では、{必|かなら}ず{家族|かぞく}といっしょに、というのはないなあ。', choices: [{ n: 1, text: 'Come-se frango frito, casais saem em encontros e admira-se a iluminação da cidade; não é necessariamente em família.' }, { n: 2, text: 'É sempre passado em família, como em muitos países.' }, { n: 3, text: 'É um dia de trabalho normal, sem nada.' }, { n: 4, text: 'Só se come bolo de arroz (mochi).' }], answer: 1, explanationPt: 'No Japão: フライドチキン, {恋人|こいびと}とデート, {町|まち}のイルミネーション; {必|かなら}ず{家族|かぞく}と…ではない (diferente de outros países). (聴解 09-06)' },
    { id: 'iro-e2-l9-12', number: 12, prompt: '「{乗|の}り{物|もの}に3つ[[しか]]{乗|の}れませんでした」 — 「N しか + (verbo negativo)」 significa:', choices: [{ n: 1, text: 'só / apenas (e nada além disso) — só consegui ir em 3 brinquedos' }, { n: 2, text: 'muitos / vários' }, { n: 3, text: 'mais de' }, { n: 4, text: 'nem um' }], answer: 1, explanationPt: 'N しか + verbo NEGATIVO = «só ~» (com tom de pouco/limitado). 3つしか{乗|の}れなかった = só 3 (queria mais). (文法ノート ❷)' },
    { id: 'iro-e2-l9-13', number: 13, prompt: '「{今年|ことし}は、1{日|にち}[[だけ]]{実家|じっか}に{帰|かえ}りました」 — qual a diferença entre 「だけ」 e 「しか」?', choices: [{ n: 1, text: 'だけ vem com verbo afirmativo e é neutro («só 1 dia»); しか vem com verbo negativo e ressalta que é pouco/insuficiente' }, { n: 2, text: 'são exatamente iguais e intercambiáveis sempre' }, { n: 3, text: 'だけ significa «muito» e しか «pouco»' }, { n: 4, text: 'だけ só se usa com pessoas' }], answer: 1, explanationPt: '1{日|にち}だけ{帰|かえ}りました (afirmativo, neutro) ≈ 1{日|にち}しか{帰|かえ}りませんでした (negativo, «só, e foi pouco»). (文法ノート ❷❸)' },
    { id: 'iro-e2-l9-14', number: 14, prompt: '「いっしょに{買|か}い{物|もの}をしたりして、{楽|たの}しかったです」 — 「V-たりして、〜」 indica:', choices: [{ n: 1, text: 'citar uma ou mais ações como exemplo do que se fez (fazer compras etc.) e ligar ao resultado/impressão' }, { n: 2, text: 'uma ordem' }, { n: 3, text: 'algo que vai fazer no futuro' }, { n: 4, text: 'uma proibição' }], answer: 1, explanationPt: 'V-たりして = «fazer coisas como ~» (exemplo de atividades), aqui ligado a 「{楽|たの}しかった」. (文法ノート ❹)' },
    { id: 'iro-e2-l9-15', number: 15, prompt: '「{甥|おい}や{姪|めい}にお{年玉|としだま}をあげ[[なくてはならない]]し、{大変|たいへん}でした」 — 「V-なくてはならない／なくちゃならない」 significa:', choices: [{ n: 1, text: 'tem de / é preciso fazer (não dá para deixar de fazer): tenho de dar otoshidama aos sobrinhos' }, { n: 2, text: 'não precisa fazer' }, { n: 3, text: 'é proibido fazer' }, { n: 4, text: 'é melhor não fazer' }], answer: 1, explanationPt: 'V-なくてはならない (coloquial なくちゃならない) = obrigação. お{年玉|としだま}をあげなくてはならない = tenho de dar. (文法ノート ❺)' },
    { id: 'iro-e2-l9-16', number: 16, prompt: '「DVDもたくさん[[{見|み}られ]]ました」「{実家|じっか}の{母|はは}の{料理|りょうり}を[[{食|た}べられ]]てよかった」 — essas formas são:', choices: [{ n: 1, text: 'forma potencial (可能形) — consegui ver muitos DVDs / pude comer a comida da minha mãe' }, { n: 2, text: 'forma passiva de sofrimento' }, { n: 3, text: 'forma de pedido' }, { n: 4, text: 'forma causativa' }], answer: 1, explanationPt: 'Potencial: {見|み}る→{見|み}られる, {食|た}べる→{食|た}べられる. ⚠️ Grupo 2 tem a mesma forma do passivo — distingue-se pelo contexto. (文法ノート ❻)' },
    { id: 'iro-e2-l9-17', number: 17, prompt: '聴解 09-08 (お正月休みの会話 · ナン): o que Nan conta que fez nas férias de Ano-Novo?', context: 'ナン：{東京|とうきょう}に{住|す}んでいる{友|とも}だちのところに{行|い}きました。いっしょにディズニーランドに{行|い}きました…{待|ま}ち{時間|じかん}がとても{長|なが}くて、{乗|の}り{物|もの}に3つしか{乗|の}れませんでした。…{友|とも}だちと{久|ひさ}しぶりに{会|あ}えて、よかったです。いっしょに{買|か}い{物|もの}をしたりして、{楽|たの}しかったです。', choices: [{ n: 1, text: 'Foi à casa de amigos em Tóquio e à Disneylândia; a fila era longa e só conseguiu ir em 3 brinquedos, mas reencontrou os amigos e fez compras — foi divertido.' }, { n: 2, text: 'Ficou em casa o tempo todo descansando.' }, { n: 3, text: 'Voltou para a terra natal por uma semana.' }, { n: 4, text: 'Trabalhou durante todo o feriado.' }], answer: 1, explanationPt: 'ナン: {東京|とうきょう}の{友|とも}だち; ディズニーランド ({乗|の}り{物|もの}3つしか, しか+neg ❷); {久|ひさ}しぶりに{会|あ}えた; {買|か}い{物|もの}したりして (❹) {楽|たの}しかった. (聴解 09-08)' },
    { id: 'iro-e2-l9-18', number: 18, prompt: '聴解 09-08 (山口): o que Yamaguchi conta sobre o Ano-Novo dele?', context: '山口：ぼくはお{正月|しょうがつ}は、ずっと{家|いえ}でごろごろしてました。…{今年|ことし}は、1{日|にち}{実家|じっか}に{帰|かえ}りました。{親戚|しんせき}が{集|あつ}まって、{甥|おい}や{姪|めい}にお{年玉|としだま}をあげなくてはならないし、{大変|たいへん}でした。でも、{久|ひさ}しぶりに{実家|じっか}の{母|はは}の{料理|りょうり}を{食|た}べられてよかったです。', choices: [{ n: 1, text: 'Ficou em casa descansando; voltou um dia à casa dos pais, onde a parentada se reuniu e ele teve de dar otoshidama aos sobrinhos (foi cansativo), mas pôde comer a comida da mãe.' }, { n: 2, text: 'Viajou ao exterior por uma semana.' }, { n: 3, text: 'Foi à Disneylândia com amigos.' }, { n: 4, text: 'Não fez absolutamente nada.' }], answer: 1, explanationPt: '山口: {家|いえ}でごろごろ; 1{日|にち}{実家|じっか}へ; {親戚|しんせき}{集|あつ}まる, お{年玉|としだま}をあげなくては (❺); {母|はは}の{料理|りょうり}を{食|た}べられて (❻) よかった. (聴解 09-08)' },
    { id: 'iro-e2-l9-19', number: 19, prompt: 'Que costume de festa/evento esta ilustração mostra (voltar à terra natal com malas)?', image: `${IMG}/Z_09_3_01_inakanikaeru.png`, imageAlt: 'pessoa voltando à terra natal com bagagem', choices: [{ n: 1, text: '{田舎|いなか}に{帰|かえ}る — voltar à terra natal' }, { n: 2, text: '{寺|てら}に{行|い}く — ir ao templo' }, { n: 3, text: 'パーティーをする — fazer uma festa' }, { n: 4, text: '{飾|かざ}りを{飾|かざ}る — pôr enfeites' }], answer: 1, explanationPt: '{田舎|いなか}に{帰|かえ}る = voltar à terra natal (comum em お{正月|しょうがつ}/{春節|しゅんせつ}). (Atividade 3)' },
    { id: 'iro-e2-l9-20', number: 20, prompt: 'Que costume esta ilustração mostra (pendurar enfeites)?', image: `${IMG}/Z_09_3_02_kazari.png`, imageAlt: 'pessoa pendurando enfeites/decorações', choices: [{ n: 1, text: '{飾|かざ}りを{飾|かざ}る — pôr/pendurar enfeites' }, { n: 2, text: '{田舎|いなか}に{帰|かえ}る — voltar à terra natal' }, { n: 3, text: 'プレゼントをあげる — dar presentes' }, { n: 4, text: '{歌|うた}ったり{踊|おど}ったりする — cantar e dançar' }], answer: 1, explanationPt: '{飾|かざ}りを{飾|かざ}る = pôr enfeites. No {春節|しゅんせつ}: {赤|あか}い{飾|かざ}り ({赤|あか}はおめでたい{色|いろ}). (Atividade 3, 聴解 09-15)' },
    { id: 'iro-e2-l9-21', number: 21, prompt: 'Que costume esta ilustração mostra (comida especial na mesa)?', image: `${IMG}/Z_09_3_03_tokubetsunaryoori.png`, imageAlt: 'mesa com pratos especiais de festa', choices: [{ n: 1, text: '{特別|とくべつ}な{料理|りょうり}を{食|た}べる — comer pratos especiais' }, { n: 2, text: '{寺|てら}に{行|い}く — ir ao templo' }, { n: 3, text: '{飾|かざ}りを{飾|かざ}る — pôr enfeites' }, { n: 4, text: '{歌|うた}ったり{踊|おど}ったりする — cantar e dançar' }], answer: 1, explanationPt: '{特別|とくべつ}な{料理|りょうり}を{食|た}べる = comer pratos especiais da data (ex.: {餃子|ぎょうざ} no {春節|しゅんせつ}, クトゥパット na レバラン). (Atividade 3)' },
    { id: 'iro-e2-l9-22', number: 22, prompt: 'Que costume esta ilustração mostra (pessoas cantando e dançando)?', image: `${IMG}/Z_09_3_05_utauodoru.png`, imageAlt: 'pessoas cantando e dançando numa festa', choices: [{ n: 1, text: '{歌|うた}ったり{踊|おど}ったりする — cantar e dançar' }, { n: 2, text: '{田舎|いなか}に{帰|かえ}る — voltar à terra natal' }, { n: 3, text: '{特別|とくべつ}な{料理|りょうり}を{食|た}べる — comer pratos especiais' }, { n: 4, text: 'プレゼントをあげる — dar presentes' }], answer: 1, explanationPt: '{歌|うた}ったり{踊|おど}ったりする = cantar e dançar (V-たり V-たりする). (Atividade 3)' },
    { id: 'iro-e2-l9-23', number: 23, prompt: 'Que costume esta ilustração mostra (entregar presentes / dinheiro)?', image: `${IMG}/Z_09_3_07_purezentoyaokane.png`, imageAlt: 'dar presentes e dinheiro (otoshidama)', choices: [{ n: 1, text: 'プレゼントやお{金|かね}をあげる — dar presentes ou dinheiro (ex.: お{年玉|としだま})' }, { n: 2, text: '{寺|てら}に{行|い}く — ir ao templo' }, { n: 3, text: '{飾|かざ}りを{飾|かざ}る — pôr enfeites' }, { n: 4, text: '{田舎|いなか}に{帰|かえ}る — voltar à terra natal' }], answer: 1, explanationPt: 'プレゼントやお{金|かね}をあげる. No Japão, お{年玉|としだま} (dinheiro de Ano-Novo) dado às crianças. (Atividade 3, 聴解 09-08)' },
    { id: 'iro-e2-l9-24', number: 24, prompt: '聴解 09-15 (中国のお正月 · 春節): o que Song explica sobre o 春節?', context: '{宋|そう}：{旧暦|きゅうれき}のお{正月|しょうがつ}は、だいたい2{月|がつ}ごろです。「{春節|しゅんせつ}」といいます。1{週間|しゅうかん}ぐらいお{休|やす}みになるので、{田舎|いなか}に{帰|かえ}る{人|ひと}が{多|おお}いです。…{赤|あか}い{飾|かざ}りを{飾|かざ}ります。{赤|あか}はおめでたい{色|いろ}なんです。あとは、{餃子|ぎょうざ}を{食|た}べたりします。', choices: [{ n: 1, text: 'É o Ano-Novo do calendário lunar (por volta de fevereiro); muita gente volta à terra natal na semana de folga, põem-se enfeites vermelhos (cor auspiciosa) e comem-se gyoza.' }, { n: 2, text: 'É comemorado em abril com guerra de água.' }, { n: 3, text: 'Não tem comida nem decoração especial.' }, { n: 4, text: 'É um feriado de um único dia.' }], answer: 1, explanationPt: '{春節|しゅんせつ}: {旧暦|きゅうれき}のお{正月|しょうがつ}（2{月|がつ}ごろ); {田舎|いなか}に{帰|かえ}る{人|ひと}が{多|おお}い (❼); {赤|あか}い{飾|かざ}り; {餃子|ぎょうざ}. (聴解 09-15)' },
    { id: 'iro-e2-l9-25', number: 25, prompt: '聴解 09-16 (タイのお正月 · ソンクラーン): o que Tongchai explica?', context: 'トンチャイ：タイのお{正月|しょうがつ}は4{月|がつ}で、「ソンクラーン」といいます。…「{水|みず}かけ{祭|まつ}り」ともいわれています。{町|まち}を{歩|ある}きながら、みんなで{水|みず}をかけ{合|あ}います。…{最近|さいきん}は{外国人|がいこくじん}もたくさん{参加|さんか}しています。', choices: [{ n: 1, text: 'O Ano-Novo tailandês é em abril, chamado Songkran («festa da água»): andando pela cidade, todos jogam água uns nos outros; hoje muitos estrangeiros participam.' }, { n: 2, text: 'É comemorado comendo gyoza em casa.' }, { n: 3, text: 'É um dia de jejum sem festa.' }, { n: 4, text: 'Acontece em dezembro com neve.' }], answer: 1, explanationPt: 'ソンクラーン (4{月|がつ}, {水|みず}かけ{祭|まつ}り): {町|まち}を{歩|ある}きながら (❽) {水|みず}をかけ{合|あ}う; {外国人|がいこくじん}も{参加|さんか}. (聴解 09-16)' },
    { id: 'iro-e2-l9-26', number: 26, prompt: '「{年|とし}[[によって]]{違|ちが}います」 — 「N によって」 aqui significa:', choices: [{ n: 1, text: 'varia conforme / depende de (a data muda dependendo do ano)' }, { n: 2, text: 'por causa de (motivo)' }, { n: 3, text: 'por meio de (instrumento)' }, { n: 4, text: 'junto com' }], answer: 1, explanationPt: 'N によって = «varia conforme/depende de». {年|とし}によって{違|ちが}います (a data muda conforme o ano); {国|くに}によって{習慣|しゅうかん}が{違|ちが}う. (文法ノート ❾)' },
    { id: 'iro-e2-l9-27', number: 27, prompt: '「{田舎|いなか}に{帰|かえ}る{人|ひと}が{多|おお}いです」「{海外|かいがい}に{旅行|りょこう}する{人|ひと}もいます」 — essas frases mostram:', choices: [{ n: 1, text: 'uma frase comum modificando 人 (人 que faz ~): «há muita gente que volta à terra natal» / «há também gente que viaja ao exterior»' }, { n: 2, text: 'ordens diretas' }, { n: 3, text: 'comparação de preços' }, { n: 4, text: 'o passado de uma ação única' }], answer: 1, explanationPt: 'S(普通形) + {人|ひと} = «pessoa(s) que ~». 〜{人|ひと}が{多|おお}い (muitos que ~); 〜{人|ひと}もいる (há também quem ~). (文法ノート ❼)' },
    { id: 'iro-e2-l9-28', number: 28, prompt: '聴解 09-20 (modelo · インドネシアのお祭り): o que se diz sobre a レバラン?', context: 'A：インドネシアでは、レバランがいちばん{大|おお}きいお{祭|まつ}りです。レバランは、{断食|だんじき}{明|あ}けのお{祭|まつ}りです。…{年|とし}によって{違|ちが}います。…{田舎|いなか}に{帰|かえ}って、{家族|かぞく}でお{祝|いわ}いします。{海外|かいがい}に{旅行|りょこう}する{人|ひと}もいます。クトゥパットという{特別|とくべつ}な{料理|りょうり}…を{食|た}べます。', choices: [{ n: 1, text: 'É a maior festa da Indonésia, o fim do jejum (Ramadã); a data varia conforme o ano; volta-se à terra natal para comemorar em família (há quem viaje) e come-se ketupat.' }, { n: 2, text: 'É uma festa de fogos de artifício em julho.' }, { n: 3, text: 'É o Dia da Maioridade japonês.' }, { n: 4, text: 'É um concurso de karaokê.' }], answer: 1, explanationPt: 'Modelo p/ apresentar festa do seu país: レバラン = {断食|だんじき}{明|あ}け; {年|とし}によって{違|ちが}う (❾); {田舎|いなか}に{帰|かえ}って{家族|かぞく}でお{祝|いわ}い (❼); クトゥパット. (聴解 09-20)' },
    { id: 'iro-e2-l9-29', number: 29, prompt: '聴解 09-22 / Atividade 4 (餅つき大会): o relato lido é sobre qual evento?', image: `${IMG}/Z_09_4_01_mochitsuki.png`, imageAlt: 'evento de socar arroz para fazer mochi (mochitsuki)', choices: [{ n: 1, text: 'um 餅つき大会 — evento comunitário de socar arroz para fazer mochi' }, { n: 2, text: 'um concurso de karaokê' }, { n: 3, text: 'um festival de fogos' }, { n: 4, text: 'um desfile de moda' }], answer: 1, explanationPt: '{餅|もち}つき{大会|たいかい}が{行|おこな}われました (passivo): socar o arroz (つく{人|ひと}と{混|ま}ぜる{人|ひと}). Comentários: はじめてお{餅|もち}を{食|た}べた／{韓国|かんこく}と{日本|にほん}のお{餅|もち}は{似|に}ている. (Atividade 4, 聴解 09-22)' },
    { id: 'iro-e2-l9-30', number: 30, prompt: 'Vocabulário do tópico: 「{親戚|しんせき}／{甥|おい}・{姪|めい}／お{年玉|としだま}／{久|ひさ}しぶり／{実家|じっか}」 significam:', choices: [{ n: 1, text: 'parentes / sobrinho e sobrinha / dinheiro de Ano-Novo (para crianças) / depois de muito tempo / casa dos pais (terra natal)' }, { n: 2, text: 'vizinhos / filho e filha / mesada / de novo / apartamento' }, { n: 3, text: 'amigos / primos / gorjeta / cedo / escritório' }, { n: 4, text: 'colegas / avós / herança / tarde / hotel' }], answer: 1, explanationPt: '{親戚|しんせき} (parentes), {甥|おい}/{姪|めい} (sobrinho/sobrinha), お{年玉|としだま} (dinheiro de Ano-Novo), {久|ひさ}しぶり (depois de muito tempo), {実家|じっか} (casa dos pais). (聴解 09-08)' },
    { id: 'iro-e2-l9-31', number: 31, prompt: 'Os kanji 「{今年|ことし}／{昨年|さくねん}／{毎年|まいとし}／{正月|しょうがつ}／{祭|まつ}り」 lêem-se:', choices: [{ n: 1, text: 'ことし (este ano) / さくねん (ano passado) / まいとし (todo ano) / しょうがつ (Ano-Novo) / まつり (festa)' }, { n: 2, text: 'いまとし / さくねん / まいねん / せいげつ / さいり' }, { n: 3, text: 'こんねん / きのねん / ごとし / しょうがつ / さいり' }, { n: 4, text: 'ことし / さくとし / まいとし / まさつき / まつり' }], answer: 1, explanationPt: '{今年|ことし}, {昨年|さくねん}, {毎年|まいとし}, {正月|しょうがつ}, {祭|まつ}り. (漢字のことば)' },
    { id: 'iro-e2-l9-32', number: 32, prompt: 'Os kanji 「{文化|ぶんか}／〜{式|しき}／{大人|おとな}／{米|こめ}／{特別|とくべつ}（な）」 lêem-se:', choices: [{ n: 1, text: 'ぶんか (cultura) / しき (cerimônia: 成人式・結婚式) / おとな (adulto) / こめ (arroz) / とくべつ (especial)' }, { n: 2, text: 'ぶんか / しき / だいじん / べい / とくべつ' }, { n: 3, text: 'もじか / しき / おとな / こめ / どくべつ' }, { n: 4, text: 'ぶんか / じょう / たいじん / まい / とくべち' }], answer: 1, explanationPt: '{文化|ぶんか}, 〜{式|しき} ({成人式|せいじんしき}, {結婚式|けっこんしき}), {大人|おとな}, {米|こめ}, {特別|とくべつ}（な). (漢字のことば)' },
    { id: 'iro-e2-l9-33', number: 33, prompt: 'Para apresentar uma festa do seu país (Atividade 3), que perguntas-modelo costumam aparecer?', choices: [{ n: 1, text: '〜には、どんなお{祭|まつ}りがありますか／いつですか／どんなことをするんですか／{何|なに}を{食|た}べますか' }, { n: 2, text: 'いくらですか／どこで{買|か}えますか' }, { n: 3, text: 'だれが{来|き}ますか／なぜ{来|き}ませんか' }, { n: 4, text: 'もう{終|お}わりましたか／まだですか' }], answer: 1, explanationPt: 'Apresentar/perguntar sobre festas: どんなお{祭|まつ}り／いつ／どんなことをするんですか／{何|なに}を{食|た}べますか. Respostas usam ❼〜❾. (会話 09-20)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 9 (聴解スクリプト)
const L9_SCRIPTS: Record<string, ScriptItem[]> = {
  '09-03': [
    {
      label: '① 七夕 (09-03)',
      setupJa: '{年中|ねんちゅう}{行事|ぎょうじ}について、{人|ひと}が{説明|せつめい}しています。',
      setupPt: 'Explicando um evento anual. ① Tanabata.',
      lines: [
        { speaker: 'A', ja: 'これ、{何|なん}ですか？', pt: 'O que é isto?' },
        { speaker: 'B', ja: '七夕の{飾|かざ}りですよ。', pt: 'É um enfeite de Tanabata.' },
        { speaker: 'A', ja: '七夕ですか？', pt: 'Tanabata?' },
        { speaker: 'B', ja: '7{月|がつ}7{日|なのか}は七夕っていって、こうして{笹|ささ}の{葉|は}に{飾|かざ}りをつけて{飾|かざ}るんです。', pt: 'Dia 7 de julho é o Tanabata; a gente prende enfeites assim nas folhas de bambu.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: 'あと、この{紙|かみ}、{短冊|たんざく}っていうんですけど、これに{願|ねが}い{事|ごと}を{書|か}いて、この{笹|ささ}につけるんです。パイさんも{書|か}きますか？', pt: 'E este papel, chamado tanzaku — você escreve um desejo nele e prende no bambu. Quer escrever também, Pai?' },
        { speaker: 'A', ja: 'はい。じゃあ、{私|わたし}は「{日本語|にほんご}がもっと{上手|じょうず}になりたい」と{書|か}きます。', pt: 'Sim. Então vou escrever «quero ficar melhor em japonês».' },
      ],
    },
  ],
  '09-04': [
    {
      label: '② ひな祭り (09-04)',
      setupPt: '② Festival das Meninas (Hina Matsuri).',
      lines: [
        { speaker: 'A', ja: 'みなさん、どうぞ。', pt: 'Pessoal, sirvam-se.' },
        { speaker: 'B', ja: 'わあ、すごい。いただきます。これは{何|なん}の{料理|りょうり}ですか？', pt: 'Uau, que coisa! Vou comer. Que prato é este?' },
        { speaker: 'A', ja: 'ちらしずしですよ。{今日|きょう}はひな{祭|まつ}りだから、{家|いえ}で{作|つく}って{来|き}たんです。', pt: 'É chirashizushi. Hoje é Hina Matsuri, então fiz em casa e trouxe.' },
        { speaker: 'B', ja: 'ああ、ひな{祭|まつ}り、{知|し}っています。{人形|にんぎょう}を{飾|かざ}るんですよね。このおすしは、ひな{祭|まつ}りに{食|た}べるんですか？', pt: 'Ah, Hina Matsuri, eu conheço. É quando se expõem as bonecas, né? Esse sushi se come no Hina Matsuri?' },
        { speaker: 'A', ja: 'そう。あと、ひな{祭|まつ}りには、{甘酒|あまざけ}を{飲|の}んだりもしますよ。{甘酒|あまざけ}もありますけど、{飲|の}みますか？', pt: 'Isso. E no Hina Matsuri também se bebe amazake. Tem amazake aqui, quer beber?' },
        { speaker: 'B', ja: 'え、{甘酒|あまざけ}って、お{酒|さけ}ですよね？', pt: 'Hã, amazake é bebida alcoólica, não é?' },
        { speaker: 'A', ja: '{甘酒|あまざけ}は、お{酒|さけ}じゃなくて、お{米|こめ}から{作|つく}った{飲|の}み{物|もの}です。この{甘酒|あまざけ}は、アルコールは{入|はい}ってないから、だいじょうぶですよ。', pt: 'Amazake não é álcool, é uma bebida feita de arroz. Este aqui não tem álcool, pode ficar tranquilo.' },
        { speaker: 'B', ja: 'そうなんですか。じゃあ、いただきます。', pt: 'Ah, é? Então vou provar.' },
      ],
    },
  ],
  '09-05': [
    {
      label: '③ 成人の日 (09-05)',
      setupPt: '③ Dia da Maioridade (Seijin no Hi).',
      lines: [
        { speaker: 'A', ja: '{昨日|きのう}、{駅前|えきまえ}に、{着物|きもの}を{着|き}た{若|わか}い{人|ひと}がたくさんいたんですけど、{何|なに}かお{祭|まつ}りですか？', pt: 'Ontem havia muitos jovens de quimono em frente à estação; era alguma festa?' },
        { speaker: 'B', ja: 'ああ、{昨日|きのう}は{成人|せいじん}の{日|ひ}だったから。', pt: 'Ah, é que ontem foi o Dia da Maioridade.' },
        { speaker: 'A', ja: '{成人|せいじん}の{日|ひ}？', pt: 'Dia da Maioridade?' },
        { speaker: 'B', ja: '20{歳|さい}になった{人|ひと}を、お{祝|いわ}いするんだよ。', pt: 'É quando se celebra quem completou 20 anos.' },
        { speaker: 'A', ja: 'へー、{何|なに}をするんですか？', pt: 'Nossa, e o que se faz?' },
        { speaker: 'B', ja: '{市|し}のホールで{成人式|せいじんしき}があって、{市長|しちょう}さんの{話|はなし}を{聞|き}いたり……。', pt: 'Há a cerimônia da maioridade no salão da cidade, ouve-se o discurso do prefeito…' },
        { speaker: 'A', ja: 'それだけなんですか？', pt: 'Só isso?' },
        { speaker: 'B', ja: 'うん。でも、まあ、みんなおしゃれをして、{特|とく}に{女性|じょせい}は{着物|きもの}を{着|き}て{写真|しゃしん}を{撮|と}ったり、あと{小学校|しょうがっこう}や{中学校|ちゅうがっこう}の{友|とも}だちと{久|ひさ}しぶりに{会|あ}ったりして、{盛|も}り{上|あ}がるんだよ。', pt: 'Sim. Mas todo mundo se arruma; as mulheres, em especial, vestem quimono e tiram fotos, reencontram amigos do primário e do ginásio — fica animado.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, que interessante.' },
      ],
    },
  ],
  '09-06': [
    {
      label: '④ クリスマス (09-06)',
      setupPt: '④ Natal.',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、クリスマスには{何|なに}をしますか？', pt: 'No Japão, o que se faz no Natal?' },
        { speaker: 'B', ja: 'そうだなあ、フライドチキンを{食|た}べたり……。', pt: 'Hmm, come-se frango frito…' },
        { speaker: 'A', ja: 'フライドチキンですか？', pt: 'Frango frito?' },
        { speaker: 'B', ja: 'うん。あと、{恋人|こいびと}がいる{人|ひと}は、{恋人|こいびと}とデートしたりとか。{町|まち}のイルミネーションがきれいだしね。', pt: 'É. E quem tem namorado(a) sai num encontro. A iluminação da cidade fica bonita também.' },
        { speaker: 'A', ja: 'へー、{私|わたし}の{国|くに}では、{必|かなら}ず{家族|かぞく}といっしょに{過|す}ごしますけど……。', pt: 'Nossa, no meu país a gente passa sempre em família…' },
        { speaker: 'B', ja: 'うーん、{日本|にほん}では、そういうのはないなあ。{子|こ}どもが{小|ちい}さいときは、いっしょにケーキを{食|た}べたりしたけど、{今|いま}はあまり。', pt: 'É, no Japão não é bem assim. Quando os filhos são pequenos, comem bolo juntos, mas agora nem tanto.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, entendi.' },
      ],
    },
  ],
  '09-08': [
    {
      label: 'お正月休みの会話 (09-08)',
      setupJa: 'お{正月|しょうがつ}{休|やす}みが{終|お}わって、ナンさん・{三浦|みうら}さん・{山口|やまぐち}さんが{会社|かいしゃ}で{話|はな}しています。',
      setupPt: 'Acabadas as férias de Ano-Novo, Nan, Miura e Yamaguchi conversam no trabalho.',
      lines: [
        { speaker: '山口', ja: 'あけましておめでとうございます。', pt: 'Feliz Ano-Novo!' },
        { speaker: 'ナン', ja: 'あけましておめでとうございます。', pt: 'Feliz Ano-Novo!' },
        { speaker: '三浦', ja: 'おめでとうございます。ナンさん、お{正月休|しょうがつやす}みは、どうでしたか？', pt: 'Feliz Ano-Novo. Nan, como foram suas férias de Ano-Novo?' },
        { speaker: 'ナン', ja: '{東京|とうきょう}に{住|す}んでいる{友|とも}だちのところに{行|い}きました。いっしょにディズニーランドに{行|い}っていて、すごく{遊|あそ}んでいて、びっくりしました。{待|ま}ち{時間|じかん}がとても{長|なが}くて、{乗|の}り{物|もの}に3つしか{乗|の}れませんでした。', pt: 'Fui à casa de uns amigos que moram em Tóquio. Fomos juntos à Disneylândia e nos divertimos muito. Mas a fila era enorme: só consegui ir em 3 brinquedos.' },
        { speaker: '三浦', ja: 'ああ、それは{大変|たいへん}でしたね。', pt: 'Ah, que trabalheira.' },
        { speaker: 'ナン', ja: 'はい。でも、{友|とも}だちと{久|ひさ}しぶりに{会|あ}えて、よかったです。いっしょに{買|か}い{物|もの}をしたりして、{楽|たの}しかったです。', pt: 'Sim. Mas reencontrei os amigos depois de muito tempo, foi ótimo. A gente fez compras e tal, foi divertido.' },
        { speaker: '三浦', ja: 'いい{休|やす}みでしたね。', pt: 'Boas férias, então.' },
        { speaker: 'ナン', ja: '{三浦|みうら}さんは？', pt: 'E você, Miura?' },
        { speaker: '三浦', ja: 'ぼくは、お{正月|しょうがつ}はずっと{家|いえ}でごろごろしてました。でも、ゆっくりできてよかったです。DVDもたくさん{見|み}られましたし。', pt: 'Eu passei o Ano-Novo todo de boa em casa. Mas pude descansar, foi bom. Vi muitos DVDs também.' },
        { speaker: '三浦', ja: '{山口|やまぐち}さんは、{今年|ことし}も{実家|じっか}ですか？', pt: 'Yamaguchi, este ano você também foi para a casa dos pais?' },
        { speaker: '山口', ja: '{今年|ことし}は、1{日|にち}{帰|かえ}りました。でも、{親戚|しんせき}が{集|あつ}まって、{毎年|まいとし}1{回|かい}{大変|たいへん}になりますよ。{甥|おい}や{姪|めい}にお{年玉|としだま}をあげなくてはならないし、{大変|たいへん}でした。', pt: 'Este ano voltei por um dia. Mas a parentada se reúne, e todo ano é um perrengue. Tenho de dar otoshidama aos sobrinhos — foi cansativo.' },
        { speaker: 'ナン', ja: 'お{年玉|としだま}って{何|なん}ですか？', pt: 'O que é otoshidama?' },
        { speaker: '山口', ja: 'お{正月|しょうがつ}に{子|こ}どもにあげるお{金|かね}。', pt: 'É o dinheiro que se dá às crianças no Ano-Novo.' },
        { speaker: 'ナン', ja: 'ああ……。', pt: 'Ah, sei…' },
        { speaker: '山口', ja: 'まあ、{久|ひさ}しぶりに、{実家|じっか}の{母|はは}の{料理|りょうり}を{食|た}べられてよかったですけどね。', pt: 'Mas, enfim, pude comer a comida da minha mãe depois de muito tempo, isso foi bom.' },
      ],
    },
  ],
  '09-15': [
    {
      label: '① 中国のお正月（春節）(09-15)',
      setupJa: '{後藤|ごとう}さんが、{宋|そう}さん・トンチャイさんに、{自分|じぶん}の{国|くに}のお{正月|しょうがつ}について{聞|き}いています。',
      setupPt: 'Gotō pergunta a Song e a Tongchai sobre o Ano-Novo de seus países. ① China (Festival da Primavera).',
      lines: [
        { speaker: '後藤', ja: '{中国|ちゅうごく}では、お{正月|しょうがつ}をお{祝|いわ}いしますか？', pt: 'Na China se comemora o Ano-Novo?' },
        { speaker: '宋', ja: '{中国|ちゅうごく}は、{旧暦|きゅうれき}のお{正月|しょうがつ}のほうが{大切|たいせつ}です。', pt: 'Na China, o Ano-Novo do calendário lunar é o mais importante.' },
        { speaker: '後藤', ja: '{旧暦|きゅうれき}？', pt: 'Calendário lunar?' },
        { speaker: '宋', ja: 'はい。{旧暦|きゅうれき}のお{正月|しょうがつ}は、だいたい2{月|がつ}ごろです。「{春節|しゅんせつ}」といいます。1{週間|しゅうかん}ぐらいお{休|やす}みになるので、{田舎|いなか}に{帰|かえ}る{人|ひと}が{多|おお}いです。', pt: 'Sim. O Ano-Novo lunar é por volta de fevereiro. Chama-se «Festival da Primavera». Como há cerca de uma semana de folga, muita gente volta à terra natal.' },
        { speaker: '後藤', ja: 'へー。', pt: 'Nossa.' },
        { speaker: '宋', ja: 'でも、そのラッシュがすごいので、{最近|さいきん}では{海外|かいがい}に{旅行|りょこう}する{人|ひと}もいます。', pt: 'Mas o trânsito/lotação é enorme, então ultimamente há quem viaje ao exterior.' },
        { speaker: '後藤', ja: '「{春節|しゅんせつ}」は、どんなふうに{祝|いわ}うんですか？', pt: 'E como se comemora o Festival da Primavera?' },
        { speaker: '宋', ja: '{赤|あか}い{飾|かざ}りを{飾|かざ}ります。{赤|あか}はおめでたい{色|いろ}なんです。あとは、{餃子|ぎょうざ}を{食|た}べたりします。', pt: 'Põem-se enfeites vermelhos. O vermelho é uma cor auspiciosa. E também se comem gyoza.' },
        { speaker: '後藤', ja: 'そうなんですか。', pt: 'Ah, interessante.' },
      ],
    },
  ],
  '09-16': [
    {
      label: '② タイのお正月（ソンクラーン）(09-16)',
      setupPt: '② Tailândia (Songkran).',
      lines: [
        { speaker: '後藤', ja: 'タイはどうですか？', pt: 'E na Tailândia?' },
        { speaker: 'トンチャイ', ja: 'タイのお{正月|しょうがつ}は4{月|がつ}で、「ソンクラーン」といいます。', pt: 'O Ano-Novo tailandês é em abril e se chama «Songkran».' },
        { speaker: '宋', ja: 'あ、{名前|なまえ}は{聞|き}いたことあるかも。', pt: 'Ah, acho que já ouvi esse nome.' },
        { speaker: 'トンチャイ', ja: '「ソンクラーン」は「{水|みず}かけ{祭|まつ}り」ともいわれています。{町|まち}を{歩|ある}きながら、みんなで{水|みず}をかけ{合|あ}います。', pt: 'O Songkran também é chamado de «festa da água». Andando pela cidade, todos jogam água uns nos outros.' },
        { speaker: '後藤', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'トンチャイ', ja: 'それがおもしろくて、{最近|さいきん}は{外国人|がいこくじん}もたくさん{参加|さんか}しています。', pt: 'É tão divertido que ultimamente muitos estrangeiros também participam.' },
        { speaker: '後藤', ja: '{水|みず}をかけ{合|あ}うんですね。おもしろそうですね。', pt: 'Jogam água uns nos outros, então. Parece divertido.' },
        { speaker: 'トンチャイ', ja: 'はい。{日本|にほん}でも、{東京|とうきょう}で「ソンクラーン」のお{祭|まつ}りがあるそうですよ。', pt: 'Sim. Dizem que no Japão também há uma festa de Songkran em Tóquio.' },
      ],
    },
  ],
  '09-20': [
    {
      label: '会話モデル — インドネシアのお祭り（レバラン）(09-20)',
      setupJa: '{自分|じぶん}の{国|くに}のお{祭|まつ}りや{行事|ぎょうじ}について{紹介|しょうかい}しています。',
      setupPt: 'Modelo: apresentar uma festa/evento do próprio país (Indonésia, Lebaran).',
      lines: [
        { speaker: 'A', ja: 'インドネシアには、どんなお{祭|まつ}りがありますか？', pt: 'Que festas existem na Indonésia?' },
        { speaker: 'B', ja: 'インドネシアでは、レバランがいちばん{大|おお}きいお{祭|まつ}りです。レバランは、{断食|だんじき}{明|あ}けのお{祭|まつ}りです。', pt: 'Na Indonésia, a Lebaran é a maior festa. A Lebaran é a festa do fim do jejum (Ramadã).' },
        { speaker: 'A', ja: 'いつですか？', pt: 'Quando é?' },
        { speaker: 'B', ja: '{年|とし}によって{違|ちが}います。だいたい、{時期|じき}は{毎年|まいとし}{変|か}わります。', pt: 'Varia conforme o ano. A época muda todos os anos.' },
        { speaker: 'A', ja: 'どんなことをするんですか？', pt: 'O que se faz?' },
        { speaker: 'B', ja: '{田舎|いなか}に{帰|かえ}って、{家族|かぞく}でお{祝|いわ}いします。{海外|かいがい}に{旅行|りょこう}する{人|ひと}もいます。', pt: 'Volta-se à terra natal e comemora-se em família. Há também quem viaje ao exterior.' },
        { speaker: 'A', ja: '{何|なに}を{食|た}べますか？', pt: 'O que se come?' },
        { speaker: 'B', ja: 'クトゥパットという{特別|とくべつ}な{料理|りょうり}や、クッキーなどのお{菓子|かし}を{食|た}べます。', pt: 'Come-se um prato especial chamado ketupat e doces como biscoitos.' },
      ],
    },
  ],
}

const lesson9: Section = {
  id: 'lesson-9',
  level: 'elementary2',
  titleJa: '第9課 成人の日は、何をするんですか？',
  titlePt: 'Lição 9 — O que se faz no Dia da Maioridade?',
  summaryPt:
    'Eventos anuais e etiqueta · conhecer os 年中行事 do Japão (お正月／成人の日／ひな祭り／こどもの日／七夕／クリスマス) e o que se faz e come em cada um, falar do que fez nas férias de Ano-Novo (ディズニーランドに行きました／実家に帰りました), apresentar festas do próprio país (レバラン／春節／ソンクラーン) e ler/escrever um relato e mensagens de felicitação de Ano-Novo.',
  studyNotes: [
    {
      title: 'Tópico: Eventos anuais e etiqueta (年中行事とマナー)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ouvir e entender o que se faz e o que se come nos eventos anuais do Japão.\n' +
        '- Falar de forma simples sobre o que fez nas férias (Ano-Novo etc.) e como foi.\n' +
        '- Apresentar de forma simples festas e eventos do seu país.\n' +
        '- Ler um relato sobre um evento da comunidade e entender o conteúdo geral.\n' +
        '- Escrever e enviar uma mensagem de felicitação de Ano-Novo.\n\n' +
        '💡 年中行事 (eventos do calendário anual): お{正月|しょうがつ}, {成人|せいじん}の{日|ひ}, ひな{祭|まつ}り, こどもの{日|ひ}, 七夕, クリスマス.',
    },
    {
      title: '〜んです / 〜んですか — explicar e perguntar (➊)',
      bodyPt:
        '**〜んですか** pede uma explicação sobre algo que despertou interesse; **〜んです** dá a explicação:\n\n' +
        '- `{成人|せいじん}の{日|ひ}は、{何|なに}をするんですか？` → `20{歳|さい}になった{人|ひと}を、お{祝|いわ}いするんです`.\n' +
        '- `このおすしは、ひな{祭|まつ}りに{食|た}べるんですか？`\n\n' +
        '🔧 Liga-se à forma comum (V/A普通形); com な-adj/nome: 〜なんです. (文法ノート ❶)',
    },
    {
      title: 'しか + negativo / だけ — “só” (➋➌)',
      bodyPt:
        'Duas formas de dizer **“só / apenas”**:\n\n' +
        '- **N しか + verbo NEGATIVO** = só ~ (com tom de pouco/insuficiente): `{乗|の}り{物|もの}に3つしか{乗|の}れませんでした` (só consegui ir em 3 brinquedos).\n' +
        '- **N だけ** (verbo afirmativo, neutro): `1{日|にち}だけ{帰|かえ}りました` (voltei só 1 dia).\n\n' +
        '⚠️ しか **sempre** com verbo negativo; だけ é neutro. (文法ノート ❷❸)',
    },
    {
      title: 'V-たりして / V-なくてはならない / 可能形 (➍➎➏)',
      bodyPt:
        'Expressões para contar o que se fez nas férias:\n\n' +
        '- **V-たりして、〜** — citar ações como exemplo: `{買|か}い{物|もの}をしたりして、{楽|たの}しかったです`. (❹)\n' +
        '- **V-なくてはならない / なくちゃならない** — ter de: `お{年玉|としだま}をあげなくてはならない`. (❺)\n' +
        '- **可能形 (V-れる/られる)** — conseguir/poder: `DVDもたくさん{見|み}られました`, `{母|はは}の{料理|りょうり}を{食|た}べられてよかった`. ⚠️ No grupo 2, potencial e passivo têm a mesma forma. (❻)',
    },
    {
      title: 'S普通形+人 / V-ながら / Nによって (➐➑➒)',
      bodyPt:
        'Para apresentar costumes de cada país:\n\n' +
        '- **S(普通形) + {人|ひと}** — “pessoa que ~”: `{田舎|いなか}に{帰|かえ}る{人|ひと}が{多|おお}いです` (muitos voltam à terra natal), `{海外|かいがい}に{旅行|りょこう}する{人|ひと}もいます` (há também quem viaje). (❼)\n' +
        '- **V-ながら、〜** — fazer duas coisas ao mesmo tempo: `{町|まち}を{歩|ある}きながら、{水|みず}をかけ{合|あ}います`. (❽)\n' +
        '- **N によって** — varia conforme/depende de: `{年|とし}によって{違|ちが}います`. (❾)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**年中行事:** お{正月|しょうがつ}, {成人|せいじん}の{日|ひ}/{成人式|せいじんしき}, ひな{祭|まつ}り ({人形|にんぎょう}・ちらしずし・{甘酒|あまざけ}), こどもの{日|ひ}, 七夕 ({短冊|たんざく}・{願|ねが}い{事|ごと}・{笹|ささ}), クリスマス.\n\n' +
        '**O que se faz:** {田舎|いなか}に{帰|かえ}る, {飾|かざ}りを{飾|かざ}る, {特別|とくべつ}な{料理|りょうり}を{食|た}べる, パーティーをする, {歌|うた}ったり{踊|おど}ったりする, {寺|てら}に{行|い}く, プレゼントやお{金|かね}をあげる, お{祝|いわ}いする.\n\n' +
        '**Família/Ano-Novo:** {親戚|しんせき}, {甥|おい}/{姪|めい}, お{年玉|としだま}, {実家|じっか}, {久|ひさ}しぶり, あけましておめでとうございます, {旧暦|きゅうれき}, {断食|だんじき}{明|あ}け.\n\n' +
        '**Kanji da lição:** {今年|ことし}, {昨年|さくねん}, {毎年|まいとし}, {文化|ぶんか}, {祭|まつ}り, {正月|しょうがつ}, 〜{式|しき}, {大人|おとな}, {米|こめ}, {特別|とくべつ}（な).',
    },
  ],
  groups: [lesson9Group],
  audios: attachScripts(9, L9_SCRIPTS),
}

// ---- Lição 10: どんな服を着て行けばいいですか？ (tópico 年中行事とマナー) --------------
const lesson10Group: ExerciseGroup = {
  id: 'iro-e2-l10',
  title: 'どんな服を着て行けばいいですか？',
  subtitlePt: 'Perguntar etiqueta e costumes (casamento, funeral, visita ao hospital) · comparar costumes Japão × seu país · contar um episódio intercultural · ler posts sobre diferenças de etiqueta',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l10-1', number: 1, prompt: 'O título 「どんな{服|ふく}を{着|き}て{行|い}けばいいですか？」 usa 「V-ばいいですか」. O que se pede com isso?', choices: [{ n: 1, text: 'um conselho sobre o que fazer / como agir (que roupa devo vestir para ir?)' }, { n: 2, text: 'permissão para faltar' }, { n: 3, text: 'o preço de uma roupa' }, { n: 4, text: 'uma ordem' }], answer: 1, translationPt: 'Que roupa devo vestir para ir?', explanationPt: 'V-ばいいですか pede orientação sobre o que/como fazer. {着|き}て{行|い}けばいいですか／いくら{持|も}って{行|い}けばいいですか. (文法ノート ❶)' },
    { id: 'iro-e2-l10-2', number: 2, prompt: 'Que ocasião esta ilustração representa?', image: `${IMG}/Z_10_1_01_osooshiki.png`, imageAlt: 'cena de funeral com altar budista', choices: [{ n: 1, text: 'お{葬式|そうしき} — um funeral' }, { n: 2, text: '{結婚式|けっこんしき} — um casamento' }, { n: 3, text: 'お{見舞|みま}い — visita a um doente' }, { n: 4, text: '{新築|しんちく}{祝|いわ}い — festa de casa nova' }], answer: 1, explanationPt: 'お{葬式|そうしき} = funeral. (Atividade 1 · 会話1)' },
    { id: 'iro-e2-l10-3', number: 3, prompt: '聴解 10-01 (お葬式): que roupa se deve usar num funeral, segundo o diálogo?', context: 'Ｂ：{普通|ふつう}は、{黒|くろ}いスーツに、{黒|くろ}いネクタイですね。シャツは{白|しろ}いやつ。…{黒|くろ}いスーツに、ネクタイを{着|つ}ければいいですよ。', choices: [{ n: 1, text: 'Terno preto, gravata preta e camisa branca (roupa escura/discreta).' }, { n: 2, text: 'Terno claro e gravata colorida.' }, { n: 3, text: 'Roupa casual, jeans.' }, { n: 4, text: 'Quimono branco.' }], answer: 1, explanationPt: 'Funeral: {黒|くろ}いスーツ + {黒|くろ}いネクタイ + {白|しろ}いシャツ ({地味|じみ}/{暗|くら}い{色|いろ}). (聴解 10-01)' },
    { id: 'iro-e2-l10-4', number: 4, prompt: 'O que é o objeto desta ilustração, levado a um funeral?', image: `${IMG}/Z_10_1_07_koodenbukuro.png`, imageAlt: 'envelope especial para dinheiro de pêsames', choices: [{ n: 1, text: '{香典袋|こうでんぶくろ} — envelope especial para o dinheiro de pêsames (お{香典|こうでん})' }, { n: 2, text: 'お{年玉|としだま}の{袋|ふくろ} — envelope de dinheiro de Ano-Novo' }, { n: 3, text: '{招待状|しょうたいじょう} — convite' }, { n: 4, text: 'レシート — recibo' }], answer: 1, explanationPt: '{香典袋|こうでんぶくろ} = envelope próprio (お{葬式用|そうしきよう}) para a お{香典|こうでん} (dinheiro de pêsames). (聴解 10-01)' },
    { id: 'iro-e2-l10-5', number: 5, prompt: '聴解 10-01: o que se faz com a お{香典|こうでん} (dinheiro de pêsames)?', context: 'Ａ：「お{香典|こうでん}」っていって、お{金|かね}を{持|も}って{行|い}くんだけど、だいたい3,000{円|えん}ぐらい…。「{香典袋|こうでんぶくろ}」っていう、お{葬式用|そうしきよう}の{封筒|ふうとう}を{買|か}って、それに{入|い}れて、{封筒|ふうとう}には{自分|じぶん}の{名前|なまえ}を{書|か}いて。', choices: [{ n: 1, text: 'Levam-se cerca de 3.000 ienes num envelope próprio de funeral (香典袋), com o seu nome escrito nele.' }, { n: 2, text: 'Entrega-se o dinheiro solto na mão.' }, { n: 3, text: 'Não se leva dinheiro nenhum.' }, { n: 4, text: 'Paga-se por aplicativo.' }], answer: 1, explanationPt: 'お{香典|こうでん}: ~3,000{円|えん}, no {香典袋|こうでんぶくろ}, com {自分|じぶん}の{名前|なまえ}. (聴解 10-01)' },
    { id: 'iro-e2-l10-6', number: 6, prompt: 'Que ocasião esta ilustração representa?', image: `${IMG}/Z_10_1_10_kekkonshiki.png`, imageAlt: 'cerimônia/festa de casamento', choices: [{ n: 1, text: '{結婚式|けっこんしき} — um casamento' }, { n: 2, text: 'お{葬式|そうしき} — um funeral' }, { n: 3, text: 'お{見舞|みま}い — visita a um doente' }, { n: 4, text: '{成人式|せいじんしき} — cerimônia da maioridade' }], answer: 1, explanationPt: '{結婚式|けっこんしき} = casamento; a festa é o {披露宴|ひろうえん}, anunciada no {招待状|しょうたいじょう}. (Atividade 1 · 会話2)' },
    { id: 'iro-e2-l10-7', number: 7, prompt: '聴解 10-02 (結婚式パーティー): que roupa convém para a festa de casamento num restaurante?', context: 'Ｂ：レストランのパーティーね。だったら、カジュアルだけど、ちょっとおしゃれな{感|かん}じのワンピースとかがいいよね。', choices: [{ n: 1, text: 'Um vestido (one-piece) elegante, não muito casual.' }, { n: 2, text: 'Terno preto e gravata preta (como em funeral).' }, { n: 3, text: 'Jeans e camiseta.' }, { n: 4, text: 'Quimono de luto.' }], answer: 1, explanationPt: '{披露宴|ひろうえん} em restaurante: おしゃれな{感|かん}じのワンピース (カジュアルすぎない). (聴解 10-02)' },
    { id: 'iro-e2-l10-8', number: 8, prompt: 'Por que NÃO se deve usar este vestido (branco) numa festa de casamento?', image: `${IMG}/Z_10_1_12_shiroiwanpiisu.png`, imageAlt: 'vestido branco', choices: [{ n: 1, text: 'Porque o branco é a cor da noiva (花嫁の色) — convidadas evitam branco.' }, { n: 2, text: 'Porque branco é cor de luto.' }, { n: 3, text: 'Porque é muito caro.' }, { n: 4, text: 'Porque é casual demais.' }], answer: 1, explanationPt: '{白|しろ}い{服|ふく}はだめ — {白|しろ}は{花嫁|はなよめ}の{色|いろ} (cor da noiva). (聴解 10-02)' },
    { id: 'iro-e2-l10-9', number: 9, prompt: 'Que situação esta ilustração representa?', image: `${IMG}/Z_10_1_15_omimai.png`, imageAlt: 'pessoa visitando alguém internado no hospital', choices: [{ n: 1, text: 'お{見舞|みま}い — visitar alguém doente/internado' }, { n: 2, text: 'お{葬式|そうしき} — funeral' }, { n: 3, text: '{結婚式|けっこんしき} — casamento' }, { n: 4, text: '{新築|しんちく}{祝|いわ}い — festa de casa nova' }], answer: 1, explanationPt: 'お{見舞|みま}い = visita a quem está doente/internado ({入院|にゅういん}). Ex.: {同僚|どうりょう}が{足|あし}の{骨|ほね}を{折|お}って{入院|にゅういん}した. (Atividade 1 · 会話3)' },
    { id: 'iro-e2-l10-10', number: 10, prompt: '聴解 10-03: por que um vaso de planta (鉢植え) NÃO é bom presente de お見舞い?', image: `${IMG}/Z_10_1_16_hachiue.png`, imageAlt: 'planta num vaso (hachiue)', choices: [{ n: 1, text: 'Porque «criar raiz» (根が張る) lembra «ficar de cama/acamado» (寝付く) — má associação para um doente.' }, { n: 2, text: 'Porque flores são proibidas em hospitais sempre.' }, { n: 3, text: 'Porque é caro demais.' }, { n: 4, text: 'Porque murcha rápido.' }], answer: 1, explanationPt: '{鉢植|はちう}え→「{根|ね}が{張|は}る」→「{寝付|ねつ}く」(ficar acamado) — imagem ruim p/ doente, por isso 持って行っちゃだめ. (聴解 10-03)' },
    { id: 'iro-e2-l10-11', number: 11, prompt: '聴解 10-03: então qual é o melhor jeito de escolher um presente de お見舞い?', context: 'Ａ：{花束|はなたば}や{果物|くだもの}もだめな{病院|びょういん}もありますね。{最近|さいきん}、{病院|びょういん}は{厳|きび}しいんですよ。Ｂ：じゃあ、どうすればいいですか？ Ａ：{本人|ほんにん}にほしいものを{聞|き}くのがいちばんですよ。', choices: [{ n: 1, text: 'Perguntar à própria pessoa (本人) o que ela quer — alguns hospitais até proíbem flores/frutas.' }, { n: 2, text: 'Levar sempre um vaso de planta.' }, { n: 3, text: 'Não visitar.' }, { n: 4, text: 'Levar bebida alcoólica.' }], answer: 1, explanationPt: '{本人|ほんにん}にほしいものを{聞|き}くのがいちばん (hoje muitos {病院|びょういん} são {厳|きび}しい — proíbem {花束|はなたば}/{果物|くだもの}). (聴解 10-03)' },
    { id: 'iro-e2-l10-12', number: 12, prompt: 'Que presentes de お見舞い costumam ser bem-vindos (quando o hospital permite)?', image: `${IMG}/Z_10_1_17_hanataba.png`, imageAlt: 'buquê de flores', choices: [{ n: 1, text: '{花束|はなたば} (buquê) ou {果物|くだもの}・お{菓子|かし} (frutas/doces) — diferente do {鉢植|はちう}え' }, { n: 2, text: 'um vaso de planta com raiz' }, { n: 3, text: 'dinheiro de pêsames' }, { n: 4, text: 'bebida alcoólica' }], answer: 1, explanationPt: '{花束|はなたば} (cortado, ≠ {鉢植|はちう}え) ou {果物|くだもの}/お{菓子|かし}, quando o {病院|びょういん} permite. (Atividade 1)' },
    { id: 'iro-e2-l10-13', number: 13, prompt: 'Que ocasião esta ilustração representa (festa numa casa nova)?', image: `${IMG}/Z_10_1_19_shinchikuiwai.png`, imageAlt: 'festa de inauguração de casa nova', choices: [{ n: 1, text: '{新築|しんちく}{祝|いわ}い — festa de inauguração de casa nova' }, { n: 2, text: 'お{葬式|そうしき} — funeral' }, { n: 3, text: '{成人式|せいじんしき} — cerimônia da maioridade' }, { n: 4, text: 'お{見舞|みま}い — visita a doente' }], answer: 1, explanationPt: '{新築|しんちく}{祝|いわ}い = festa de casa nova. No diálogo, a ilha tem um costume especial de beber: a 「オトーリ」. (Atividade 1 · 会話4)' },
    { id: 'iro-e2-l10-14', number: 14, prompt: '聴解 10-04 (新築祝い · 「オトーリ」): como funciona esse costume de beber e como se recusa?', context: 'Ｂ：「オトーリ」っていって、はじめにだれかがあいさつしてから、{小|ちい}さいコップにお{酒|さけ}を{入|い}れて{飲|の}みます。そのあと、そのコップを、{順番|じゅんばん}に{全員|ぜんいん}が{飲|の}んでは、{次|つぎ}の{人|ひと}にまわします。…Ｂ：「もう{飲|の}めません」って{言|い}えば、だいじょうぶですよ。', choices: [{ n: 1, text: 'Passa-se um copo de saquê em ordem por todos, repetidamente; para recusar, basta dizer «もう飲めません».' }, { n: 2, text: 'Cada um bebe sozinho o quanto quiser, sem regra.' }, { n: 3, text: 'É proibido beber álcool.' }, { n: 4, text: 'Bebe-se só uma vez e acabou.' }], answer: 1, explanationPt: 'オトーリ: あいさつ→{小|ちい}さいコップを{順番|じゅんばん}に{全員|ぜんいん}が{飲|の}んでまわす, くり{返|かえ}す; 「もう{飲|の}めません」で{断|ことわ}れる. (聴解 10-04)' },
    { id: 'iro-e2-l10-15', number: 15, prompt: 'Como se pede educadamente uma orientação de etiqueta a alguém?', context: '「{結婚|けっこん}パーティーには、どんな{服|ふく}を{着|き}て{行|い}けばいいか、{教|おし}えてもらえませんか？」', choices: [{ n: 1, text: '[疑問詞]…V-ばいいか + 教えてもらえませんか — “poderia me dizer que ~ devo ~?”' }, { n: 2, text: '〜たことがありますか (já fez?)' }, { n: 3, text: '〜てもいいですか (posso?)' }, { n: 4, text: '〜つもりです (pretendo)' }], answer: 1, explanationPt: 'Pergunta embutida + pedido educado: 「どんな{服|ふく}を{着|き}て{行|い}けばいいか、{教|おし}えてもらえませんか？」. (文法ノート ❶)' },
    { id: 'iro-e2-l10-16', number: 16, prompt: '「{信号|しんごう}が{赤|あか}のときは、{横断歩道|おうだんほどう}を{渡|わた}っ[[てはいけません]]よ」 — 「V-てはいけません／ちゃだめ」 indica:', choices: [{ n: 1, text: 'proibição — não se pode/não deve fazer (não pode atravessar no sinal vermelho)' }, { n: 2, text: 'obrigação — tem de fazer' }, { n: 3, text: 'permissão — pode fazer' }, { n: 4, text: 'conselho — é melhor fazer' }], answer: 1, explanationPt: 'V-てはいけません (coloquial 〜ちゃだめ) = proibição. {赤信号|あかしんごう}を{渡|わた}ってはいけません. (文法ノート ❷)' },
    { id: 'iro-e2-l10-17', number: 17, prompt: '聴解 10-08 (マナー · 信号): qual é a diferença de costume que aparece no diálogo?', context: 'Ｂ：{私|わたし}の{国|くに}では、{車|くるま}がいないときは、みんな{渡|わた}ります。Ａ：{赤信号|あかしんごう}を{渡|わた}るの？ それはよくないですよ。…{子|こ}どもがまねをしないように、ルールは{守|まも}らなくちゃ。', choices: [{ n: 1, text: 'No país de B atravessam no vermelho se não vem carro; em A dizem que as regras devem ser seguidas para as crianças não imitarem.' }, { n: 2, text: 'Nos dois países é proibido atravessar a rua.' }, { n: 3, text: 'Os carros é que devem parar sempre.' }, { n: 4, text: 'Ninguém liga para o sinal.' }], answer: 1, explanationPt: '{赤信号|あかしんごう}を{渡|わた}ってはいけない (❷); {子|こ}どもがまねをしないように、ルールを{守|まも}らなくちゃ (❹ ように + ❸ なくちゃ). (聴解 10-08)' },
    { id: 'iro-e2-l10-18', number: 18, prompt: '聴解 10-09 (マナー · トイレ): que diferença de costume sobre o papel higiênico aparece?', image: `${IMG}/Z_10_2_04_toirettopeepaa.png`, imageAlt: 'papel higiênico no vaso sanitário', choices: [{ n: 1, text: 'No Japão joga-se o papel usado no vaso (流す); no país de A jogam no lixo para o vaso não entupir (つまらないように).' }, { n: 2, text: 'No Japão joga-se o papel no lixo.' }, { n: 3, text: 'Não se usa papel higiênico.' }, { n: 4, text: 'O papel é reciclado.' }], answer: 1, explanationPt: '{日本|にほん}: 使った{紙|かみ}もトイレに{流|なが}す; A国: トイレがつまらないように{紙|かみ}はごみ{箱|ばこ}に{捨|す}てる (❹ ように). (聴解 10-09)' },
    { id: 'iro-e2-l10-19', number: 19, prompt: '聴解 10-10 (マナー · バス): que costume sobre celular no ônibus aparece?', context: 'Ａ：でも、だれも{電話|でんわ}で{話|はな}さないですね。どうしてですか？ Ｂ：え、バスの{中|なか}では、{話|はな}しちゃだめだよね。Ａ：{私|わたし}の{国|くに}では、みんな{普通|ふつう}に{電話|でんわ}で{話|はな}しています。', choices: [{ n: 1, text: 'No Japão não se fala ao telefone no ônibus (話しちゃだめ); no país de A todos falam normalmente.' }, { n: 2, text: 'No Japão é obrigatório falar alto.' }, { n: 3, text: 'É proibido usar ônibus.' }, { n: 4, text: 'Só se pode mandar mensagem em pé.' }], answer: 1, explanationPt: 'バスの{中|なか}で{電話|でんわ}で{話|はな}しちゃだめ (❷); A国ではみんな{話|はな}している → {不思議|ふしぎ}/{習慣|しゅうかん}の{違|ちが}い. (聴解 10-10)' },
    { id: 'iro-e2-l10-20', number: 20, prompt: '「{食器|しょっき}は{自分|じぶん}で{片付|かたづ}け[[なくちゃ]]」 — 「V-なくちゃ／なくちゃならない」 significa:', choices: [{ n: 1, text: 'tem de fazer (forma coloquial de 〜なくてはならない): tenho de recolher a louça sozinho' }, { n: 2, text: 'não precisa fazer' }, { n: 3, text: 'é proibido fazer' }, { n: 4, text: 'pode deixar para depois' }], answer: 1, explanationPt: 'V-なくちゃ(ならない) = 〜なくてはならない coloquial (obrigação). {自分|じぶん}で{片付|かたづ}けなくちゃ. (文法ノート ❸)' },
    { id: 'iro-e2-l10-21', number: 21, prompt: '聴解 10-11 (マナー · フードコート): que diferença sobre recolher a louça aparece, e por quê?', context: 'Ｂ：{食|た}べ{終|お}わったあとは、{自分|じぶん}で{片付|かたづ}けるんですか？ Ａ：フードコートは、そうだね。Ｂ：{私|わたし}の{国|くに}では、それは{掃除|そうじ}の{人|ひと}の{仕事|しごと}です。…Ａ：{次|つぎ}の{人|ひと}がすぐに{席|せき}に{座|すわ}れるように、かな？', choices: [{ n: 1, text: 'No Japão, na praça de alimentação cada um recolhe a própria louça — para o próximo poder se sentar logo (席に座れるように); no país de B isso é trabalho da limpeza.' }, { n: 2, text: 'Ninguém recolhe a louça em lugar nenhum.' }, { n: 3, text: 'A louça é descartável.' }, { n: 4, text: 'Come-se em pé.' }], answer: 1, explanationPt: 'フードコートでは{自分|じぶん}で{片付|かたづ}ける (❸ なくちゃ); {次|つぎ}の{人|ひと}が{席|せき}に{座|すわ}れるように (❹). B国では{掃除|そうじ}の{人|ひと}の{仕事|しごと}. (聴解 10-11)' },
    { id: 'iro-e2-l10-22', number: 22, prompt: '「{子|こ}どもがまねをしない[[ように]]、ルールを{守|まも}る」「{次|つぎ}の{人|ひと}が{席|せき}に{座|すわ}れる[[ように]]」 — 「V-ように、〜」 expressa:', choices: [{ n: 1, text: 'finalidade/objetivo — para que (algo aconteça/não aconteça): seguir as regras para as crianças não imitarem' }, { n: 2, text: 'causa passada' }, { n: 3, text: 'comparação' }, { n: 4, text: 'condição hipotética' }], answer: 1, explanationPt: 'V(辞書形/ない形) + ように、〜 = «para que ~». まねをしないように／つまらないように／{座|すわ}れるように. (文法ノート ❹)' },
    { id: 'iro-e2-l10-23', number: 23, prompt: 'Que episódio (異文化体験) esta ilustração ajuda a contar?', image: `${IMG}/Z_10_3_03_juusuonomu.png`, imageAlt: 'pessoa bebendo um suco no supermercado antes de pagar', choices: [{ n: 1, text: 'beber um suco do mercado ANTES de pagar — no Japão isso é mal visto (泥棒と同じイメージ)' }, { n: 2, text: 'pagar antes de pegar o produto' }, { n: 3, text: 'devolver um produto' }, { n: 4, text: 'pedir desconto' }], answer: 1, explanationPt: 'No 聴解 10-15, Roy bebe a {juice|ジュース} antes de pagar e é {怒|おこ}られる/{注意|ちゅうい}される: no Japão é como ser {泥棒|どろぼう} (ladrão). (Atividade 3 · 会話)' },
    { id: 'iro-e2-l10-24', number: 24, prompt: '聴解 10-15 (異文化体験): como a situação do suco é vista no Japão e no país da Linda?', context: 'Ａ（{小林|こばやし}）：{日本|にほん}では、お{金|かね}を{払|はら}う{前|まえ}にジュースを{飲|の}むのは、{泥棒|どろぼう}と{同|おな}じイメージだなあ。… リンダ：{私|わたし}の{国|くに}でも、よくありません。{小|ちい}さい{子|こ}どもには、{先|さき}にお{菓子|かし}の{袋|ふくろ}を{開|あ}けて、あとからお{金|かね}を{払|はら}います。', choices: [{ n: 1, text: 'No Japão é mal visto (como roubo); no país de Linda também não é bom, mas com crianças pequenas abrem o doce antes e pagam depois.' }, { n: 2, text: 'Nos dois países é totalmente normal.' }, { n: 3, text: 'Nos dois países é crime grave punido com prisão.' }, { n: 4, text: 'Só no Japão é permitido.' }], answer: 1, explanationPt: '{日本|にほん}: {払|はら}う{前|まえ}に{飲|の}む=泥棒イメージ; リンダの{国|くに}: よくないが{子|こ}どもには{先|さき}にお{菓子|かし}。{同|おな}じ{普通|ふつう}でも{国|くに}によって{違|ちが}う. (聴解 10-15)' },
    { id: 'iro-e2-l10-25', number: 25, prompt: '聴解 10-14 (Atividade 2 · 習慣の違い): como se conversa sobre uma diferença de costume?', context: 'Ａ：{日本|にほん}では、バスの{中|なか}で、だれも{電話|でんわ}で{話|はな}さないですね。Ｂ：そうですね。Ａ：どうしてですか？ {私|わたし}の{国|くに}では、みんな{電話|でんわ}で{話|はな}しています。Ｂ：どうしてかなあ……。Ａ：{不思議|ふしぎ}ですね。', choices: [{ n: 1, text: 'Aponta-se o costume japonês, compara-se com o do próprio país e comenta-se que é curioso (不思議ですね).' }, { n: 2, text: 'Discute-se o preço da passagem.' }, { n: 3, text: 'Pede-se desculpa por falar alto.' }, { n: 4, text: 'Marca-se um encontro.' }], answer: 1, explanationPt: 'Comparar costumes: 「{日本|にほん}では〜ですね」「{私|わたし}の{国|くに}では〜」「{不思議|ふしぎ}ですね」. (会話 10-14)' },
    { id: 'iro-e2-l10-26', number: 26, prompt: '「{同|おな}じ{普通|ふつう}でも、{国|くに}によって{違|ちが}うんですね」 — a lição mostra que costumes e etiqueta:', choices: [{ n: 1, text: 'variam de país para país (国によって違う) — o que é normal num lugar pode ser estranho em outro' }, { n: 2, text: 'são iguais no mundo todo' }, { n: 3, text: 'mudam conforme o preço' }, { n: 4, text: 'só existem no Japão' }], answer: 1, explanationPt: '{国|くに}によって{習慣|しゅうかん}・マナーが{違|ちが}う. Tema central: comparar e respeitar diferenças (異文化). (Atividade 3)' },
    { id: 'iro-e2-l10-27', number: 27, prompt: 'Vocabulário de cerimônias: 「{地味|じみ}（な）／お{香典|こうでん}／{披露宴|ひろうえん}／{招待状|しょうたいじょう}／{花嫁|はなよめ}」 significam:', choices: [{ n: 1, text: 'discreto/sóbrio / dinheiro de pêsames / banquete de recepção (casamento) / convite / noiva' }, { n: 2, text: 'chamativo / gorjeta / despedida / recibo / madrinha' }, { n: 3, text: 'caro / mesada / reunião / cartão de visita / dama de honra' }, { n: 4, text: 'simples / herança / velório / panfleto / sogra' }], answer: 1, explanationPt: '{地味|じみ}（な) (sóbrio), お{香典|こうでん} (pêsames), {披露宴|ひろうえん} (banquete), {招待状|しょうたいじょう} (convite), {花嫁|はなよめ} (noiva). (Atividade 1)' },
    { id: 'iro-e2-l10-28', number: 28, prompt: 'Vocabulário de visita ao hospital: 「お{見舞|みま}い／{同僚|どうりょう}／{骨|ほね}を{折|お}る／{入院|にゅういん}する／{鉢植|はちう}え」 significam:', choices: [{ n: 1, text: 'visita a doente / colega de trabalho / quebrar um osso / internar-se / planta em vaso' }, { n: 2, text: 'mudança / vizinho / torcer o pé / sair do hospital / buquê' }, { n: 3, text: 'festa / chefe / cortar / consultar / fruta' }, { n: 4, text: 'velório / parente / machucar / operar / doce' }], answer: 1, explanationPt: 'お{見舞|みま}い (visita), {同僚|どうりょう} (colega), {骨|ほね}を{折|お}る (quebrar osso), {入院|にゅういん}する (internar), {鉢植|はちう}え (planta em vaso). (会話3)' },
    { id: 'iro-e2-l10-29', number: 29, prompt: 'Vocabulário de regras/maneiras: 「ルールを{守|まも}る／{貼|は}り{紙|がみ}／つまる／{臭|くさ}い／{席|せき}」 significam:', choices: [{ n: 1, text: 'seguir as regras / cartaz colado (aviso) / entupir / fedido / assento' }, { n: 2, text: 'quebrar as regras / placa de neon / encher / cheiroso / palco' }, { n: 3, text: 'criar regras / outdoor / esvaziar / barulhento / fila' }, { n: 4, text: 'ignorar regras / convite / vazar / molhado / saída' }], answer: 1, explanationPt: 'ルールを{守|まも}る (seguir regras), {貼|は}り{紙|がみ} (aviso colado), つまる (entupir), {臭|くさ}い (fedido), {席|せき} (assento). (Atividade 2)' },
    { id: 'iro-e2-l10-30', number: 30, prompt: 'Os kanji 「{服|ふく}／{袋|ふくろ}／{自分|じぶん}／{店長|てんちょう}／{全員|ぜんいん}」 lêem-se:', choices: [{ n: 1, text: 'ふく (roupa) / ふくろ (saco/envelope) / じぶん (si mesmo) / てんちょう (gerente da loja) / ぜんいん (todos)' }, { n: 2, text: 'ふく / たい / じぶん / てんちょう / ぜんいん' }, { n: 3, text: 'ふく / ふくろ / じぶん / みせちょう / ぜんいん' }, { n: 4, text: 'ぼう / ふくろ / じふん / てんなが / ぜんいん' }], answer: 1, explanationPt: '{服|ふく}, {袋|ふくろ}, {自分|じぶん}, {店長|てんちょう}, {全員|ぜんいん}. (漢字のことば)' },
    { id: 'iro-e2-l10-31', number: 31, prompt: 'Os kanji 「{習慣|しゅうかん}／{普通|ふつう}／{暗|くら}い／{怒|おこ}る／{入院|にゅういん}する」 lêem-se:', choices: [{ n: 1, text: 'しゅうかん (costume) / ふつう (normal) / くらい (escuro) / おこる (ficar bravo) / にゅういんする (internar-se)' }, { n: 2, text: 'しゅうかん / ふつう / あんい / いかる / にゅういんする' }, { n: 3, text: 'れんしゅう / ふつう / くらい / どる / にゅういん' }, { n: 4, text: 'しゅうかん / ぼつう / くらい / おこる / じゅいん' }], answer: 1, explanationPt: '{習慣|しゅうかん}, {普通|ふつう}, {暗|くら}い, {怒|おこ}る ({怒|おこ}られる = ser repreendido), {入院|にゅういん}する. (漢字のことば)' },
    { id: 'iro-e2-l10-32', number: 32, prompt: 'Resumo: para perguntar a alguém como se comportar num evento (etiqueta), o padrão central da lição é:', choices: [{ n: 1, text: 'どんな{服|ふく}を{着|き}て{行|い}けばいいですか／{何|なに}を{持|も}って{行|い}けばいいか、{教|おし}えてもらえませんか (V-ばいいですか)' }, { n: 2, text: 'もう{始|はじ}まりましたか (já começou?)' }, { n: 3, text: '〜たことがあります (já fiz)' }, { n: 4, text: '〜によって{違|ちが}います (varia conforme)' }], answer: 1, explanationPt: 'Padrão central: V-ばいいですか / [疑問詞]…ばいいか + {教|おし}えてもらえませんか (pedir orientação de etiqueta). (文法ノート ❶)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 10 (聴解スクリプト)
const L10_SCRIPTS: Record<string, ScriptItem[]> = {
  '10-01': [
    {
      label: '会話1 — お葬式 (10-01)',
      setupJa: '{日本|にほん}のマナーや{習慣|しゅうかん}について{質問|しつもん}しています。① お{葬式|そうしき}。',
      setupPt: 'Perguntando sobre etiqueta/costumes japoneses. ① Funeral.',
      lines: [
        { speaker: 'A', ja: '{明日|あした}の{磯村|いそむら}さんのお{葬式|そうしき}、{行|い}く？', pt: 'Você vai ao funeral do Sr. Isomura amanhã?' },
        { speaker: 'B', ja: 'はい。それで、あの、お{葬式|そうしき}には、どんな{服|ふく}を{着|き}て{行|い}けばいいですか？', pt: 'Vou. E, ahn, que roupa devo vestir para um funeral?' },
        { speaker: 'A', ja: '{普通|ふつう}は、{黒|くろ}いスーツに、{黒|くろ}いネクタイですね。シャツは{白|しろ}いやつ。{持|も}ってる？', pt: 'Normalmente, terno preto com gravata preta. A camisa, uma branca. Você tem?' },
        { speaker: 'B', ja: 'シャツはありますが、{黒|くろ}いスーツにネクタイはないです……。', pt: 'Camisa eu tenho, mas terno preto e gravata, não…' },
        { speaker: 'A', ja: 'ネクタイは、100{円|えん}ショップでも{買|か}えるよ。{黒|くろ}いスーツに、ネクタイを{着|つ}ければいいよ。', pt: 'Gravata dá para comprar até em loja de 100 ienes. É só pôr a gravata com o terno preto.' },
        { speaker: 'B', ja: '{探|さが}してみます。あと、{何|なに}を{持|も}って{行|い}けばいいですか？', pt: 'Vou procurar. E o que mais devo levar?' },
        { speaker: 'A', ja: '「お{香典|こうでん}」っていって、お{金|かね}を{持|も}って{行|い}くんだけど、だいたい3,000{円|えん}ぐらいかな。「{香典袋|こうでんぶくろ}」っていう、お{葬式用|そうしきよう}の{封筒|ふうとう}を{買|か}って、それに{入|い}れて、{封筒|ふうとう}には{自分|じぶん}の{名前|なまえ}を{書|か}いて。', pt: 'Leva-se dinheiro, a chamada «okōden», uns 3.000 ienes. Compra-se um envelope próprio de funeral, o «kōdenbukuro», põe-se o dinheiro dentro e escreve-se o seu nome no envelope.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '10-02': [
    {
      label: '会話2 — 結婚式のパーティー (10-02)',
      setupPt: '② Festa de casamento.',
      lines: [
        { speaker: 'A', ja: 'あのう、ちょっといいですか？', pt: 'Ahn, posso falar um instante?' },
        { speaker: 'B', ja: 'はい、{何|なに}？', pt: 'Sim, o que é?' },
        { speaker: 'A', ja: '{今度|こんど}、{友|とも}だちの{結婚式|けっこんしき}のパーティーがあるんですけど……。それで、どんな{服|ふく}を{着|き}て{行|い}けばいいか、{教|おし}えてもらえませんか？', pt: 'Vou a uma festa de casamento de um amigo… Poderia me dizer que roupa devo vestir?' },
        { speaker: 'B', ja: '{結婚式|けっこんしき}のパーティーって、{披露宴|ひろうえん}？ ホテルでやるの？', pt: 'Festa de casamento, é o banquete (hirōen)? É num hotel?' },
        { speaker: 'A', ja: 'えっと、これは{招待状|しょうたいじょう}で……。', pt: 'Hmm, está aqui no convite…' },
        { speaker: 'B', ja: 'ああ、レストランのパーティーね。だったら、カジュアルだけど、ちょっとおしゃれな{感|かん}じのワンピースとかがいいよね。', pt: 'Ah, é festa num restaurante. Então, casual mas um vestido com um toque elegante fica bom.' },
        { speaker: 'A', ja: 'ワンピースですね。', pt: 'Um vestido, então.' },
        { speaker: 'B', ja: 'でも、{白|しろ}い{服|ふく}はだめ。{白|しろ}は、{花嫁|はなよめ}の{色|いろ}だからね。', pt: 'Mas roupa branca, não. O branco é a cor da noiva.' },
        { speaker: 'A', ja: 'へー、そうなんですね。ありがとうございます。', pt: 'Nossa, é mesmo. Obrigada.' },
      ],
    },
  ],
  '10-03': [
    {
      label: '会話3 — お見舞い (10-03)',
      setupPt: '③ Visita a um doente (omimai).',
      lines: [
        { speaker: 'A', ja: 'まあ、きれいなお{花|はな}ですね。', pt: 'Que flores bonitas!' },
        { speaker: 'B', ja: 'はい、{今|いま}からお{見舞|みま}いに{行|い}くんです。', pt: 'Sim, vou agora visitar alguém no hospital.' },
        { speaker: 'A', ja: 'お{見舞|みま}い？', pt: 'Visita a um doente?' },
        { speaker: 'B', ja: '{会社|かいしゃ}の{同僚|どうりょう}が、{足|あし}の{骨|ほね}を{折|お}って、{入院|にゅういん}してるんです。', pt: 'Um colega de trabalho quebrou a perna e está internado.' },
        { speaker: 'A', ja: 'あら、{大変|たいへん}ですね。でも、お{見舞|みま}いなら、その{花|はな}はよくないですよ。', pt: 'Ai, que pena. Mas, para uma visita ao hospital, essas flores não são boas.' },
        { speaker: 'B', ja: 'え、どうしてですか？', pt: 'Hã, por quê?' },
        { speaker: 'A', ja: '{鉢植|はちう}えの{花|はな}は、「{根|ね}が{張|は}る」→「{寝付|ねつ}く」イメージになるから、お{見舞|みま}いには{持|も}って{行|い}っちゃだめなんです。', pt: 'Planta em vaso lembra «criar raiz», que vira «ficar acamado» — por isso não se leva em visita ao hospital.' },
        { speaker: 'B', ja: 'そうなんですか。じゃあ、{花束|はなたば}ならいいですか？', pt: 'Ah, é? Então um buquê pode?' },
        { speaker: 'A', ja: 'うーん、{最近|さいきん}は、{花|はな}は{全部|ぜんぶ}だめな{病院|びょういん}も{多|おお}いですよ。', pt: 'Hmm, ultimamente há muitos hospitais que proíbem todo tipo de flor.' },
        { speaker: 'B', ja: 'じゃあ、お{菓子|かし}や{果物|くだもの}はいいですか？', pt: 'E doces ou frutas, podem?' },
        { speaker: 'A', ja: 'そうね、それもだめな{病院|びょういん}もありますね。{最近|さいきん}、{病院|びょういん}は{厳|きび}しいんですよ。', pt: 'Pois é, há hospitais que também não deixam. Hoje em dia os hospitais são rígidos.' },
        { speaker: 'B', ja: 'じゃあ、どうすればいいですか？', pt: 'Então o que eu faço?' },
        { speaker: 'A', ja: '{本人|ほんにん}にほしいものを{聞|き}くのがいちばんですよ。', pt: 'O melhor é perguntar à própria pessoa o que ela quer.' },
      ],
    },
  ],
  '10-04': [
    {
      label: '会話4 — 新築祝い・「オトーリ」 (10-04)',
      setupPt: '④ Festa de casa nova; o costume de beber «otōri».',
      lines: [
        { speaker: 'A', ja: 'あのう、{明日|あした}の{下地|しもじ}さんのうちのパーティー、{砂川|すながわ}さんも{行|い}きますか？', pt: 'Ahn, você também vai à festa na casa do Sr. Shimoji amanhã, Sr. Sunagawa?' },
        { speaker: 'B', ja: 'ああ、{下地|しもじ}さんの{家|いえ}の{新築|しんちく}{祝|いわ}い。{行|い}きますよ。タンさんも？', pt: 'Ah, a festa de casa nova do Shimoji. Vou, sim. Você também vai, Tan?' },
        { speaker: 'A', ja: 'はい。パーティーでは、{何|なに}をするんですか？', pt: 'Vou. O que se faz na festa?' },
        { speaker: 'B', ja: 'みんなでお{酒|さけ}を{飲|の}んで、{料理|りょうり}を{食|た}べて、ときどき{歌|うた}ったり、{踊|おど}ったり……。', pt: 'Todo mundo bebe, come, de vez em quando canta, dança…' },
        { speaker: 'A', ja: 'そうですか。{楽|たの}しそうですね。', pt: 'Ah, parece divertido.' },
        { speaker: 'B', ja: 'あの、この{島|しま}には、お{酒|さけ}を{飲|の}むとき、{特別|とくべつ}な{習慣|しゅうかん}があるんですよ。', pt: 'Olha, nesta ilha há um costume especial na hora de beber.' },
        { speaker: 'A', ja: '{特別|とくべつ}な{習慣|しゅうかん}？', pt: 'Um costume especial?' },
        { speaker: 'B', ja: 'はい。「オトーリ」っていって、はじめにだれかがあいさつしてから、{小|ちい}さいコップにお{酒|さけ}を{入|い}れて{飲|の}みます。そのあと、そのコップを、{順番|じゅんばん}に{全員|ぜんいん}が{飲|の}んでは、{次|つぎ}の{人|ひと}にまわします。またみんなで{順番|じゅんばん}にお{酒|さけ}を{飲|の}んで……ってくり{返|かえ}します。', pt: 'Sim. É a «otōri»: primeiro alguém faz um discurso, depois põe-se saquê num copinho e bebe-se. Em seguida o copo passa, em ordem, por todos, e cada um repassa ao próximo. E todos bebem de novo, em ordem… repetindo isso.' },
        { speaker: 'A', ja: 'それは、たくさんお{酒|さけ}を{飲|の}まなければなりませんね。', pt: 'Então a gente tem de beber bastante, né.' },
        { speaker: 'B', ja: 'いえ、「もう{飲|の}めません」って{言|い}えば、だいじょうぶですよ。', pt: 'Não; é só dizer «não consigo mais beber» que está tudo bem.' },
      ],
    },
  ],
  '10-08': [
    {
      label: 'マナー① — 信号・横断歩道 (10-08)',
      setupJa: '{日本|にほん}と{自分|じぶん}の{国|くに}のマナーの{違|ちが}いについて{話|はな}しています。',
      setupPt: 'Conversando sobre diferenças de etiqueta entre o Japão e o próprio país. ① Sinal/faixa de pedestres.',
      lines: [
        { speaker: 'A', ja: 'あ、だめだめ。まだ{信号|しんごう}は{赤|あか}ですよ。', pt: 'Ei, não, não. O sinal ainda está vermelho.' },
        { speaker: 'B', ja: 'え、でも{車|くるま}はいませんよ。', pt: 'Hã, mas não vem carro nenhum.' },
        { speaker: 'A', ja: '{信号|しんごう}が{赤|あか}のときは、{横断歩道|おうだんほどう}を{渡|わた}ってはいけませんよ。', pt: 'Quando o sinal está vermelho, não se pode atravessar a faixa.' },
        { speaker: 'B', ja: 'そうなんですか。{私|わたし}の{国|くに}では、{車|くるま}がいないときは、みんな{渡|わた}ります。', pt: 'Ah, é? No meu país, quando não vem carro, todo mundo atravessa.' },
        { speaker: 'A', ja: '{赤信号|あかしんごう}を{渡|わた}るの？ それはよくないですよ。', pt: 'Atravessar no vermelho? Isso não é bom.' },
        { speaker: 'B', ja: 'どうしてですか？ {車|くるま}は{来|き}ていません。', pt: 'Por quê? Não vem carro.' },
        { speaker: 'A', ja: 'うーん、でも、{子|こ}どもがまねをしないように、ルールは{守|まも}らなくちゃ。', pt: 'Hmm, mas a gente tem de seguir as regras, para as crianças não imitarem.' },
        { speaker: 'B', ja: '{日本人|にほんじん}は、まじめですね……。', pt: 'Os japoneses são bem certinhos, hein…' },
      ],
    },
  ],
  '10-09': [
    {
      label: 'マナー② — トイレの紙 (10-09)',
      setupPt: '② Papel higiênico no banheiro.',
      lines: [
        { speaker: 'A', ja: 'あのう、いいですか？', pt: 'Ahn, posso perguntar?' },
        { speaker: 'B', ja: '{何|なに}？', pt: 'O quê?' },
        { speaker: 'A', ja: 'トイレに、「トイレットペーパーはトイレに{流|なが}してください」っていう{貼|は}り{紙|がみ}があったんですが……。', pt: 'No banheiro tinha um aviso colado dizendo «jogue o papel higiênico no vaso»…' },
        { speaker: 'B', ja: 'うん。', pt: 'Sim.' },
        { speaker: 'A', ja: '{使|つか}った{紙|かみ}も、トイレに{流|なが}していいんですか？', pt: 'O papel usado também pode jogar no vaso?' },
        { speaker: 'B', ja: 'もちろん。そうしなかったら、どうするの？', pt: 'Claro. Se não, o que você faria?' },
        { speaker: 'A', ja: '{私|わたし}の{国|くに}では、トイレがつまらないように、{紙|かみ}はごみ{箱|ばこ}に{捨|す}てます。', pt: 'No meu país, para o vaso não entupir, a gente joga o papel no lixo.' },
        { speaker: 'B', ja: 'へー、そうなの。でも、それじゃあ{臭|くさ}くない？', pt: 'Nossa, é? Mas assim não fica fedido?' },
        { speaker: 'A', ja: 'そうですね、ときどき{臭|くさ}いです。{流|なが}せるのは、いいですね。', pt: 'É, às vezes fica. Poder jogar no vaso é bom mesmo.' },
      ],
    },
  ],
  '10-10': [
    {
      label: 'マナー③ — バスの中の電話 (10-10)',
      setupPt: '③ Falar ao telefone no ônibus.',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、バスの{中|なか}で、みんなスマホを{見|み}ていますね。', pt: 'No Japão, no ônibus, todo mundo fica olhando o celular.' },
        { speaker: 'B', ja: 'そうですね。', pt: 'É verdade.' },
        { speaker: 'A', ja: 'でも、だれも{電話|でんわ}で{話|はな}さないですね。どうしてですか？', pt: 'Mas ninguém fala ao telefone. Por quê?' },
        { speaker: 'B', ja: 'え、バスの{中|なか}では、{話|はな}しちゃだめだよね。', pt: 'Ué, no ônibus não se pode falar ao telefone, né.' },
        { speaker: 'A', ja: '{私|わたし}の{国|くに}では、みんな{普通|ふつう}に{電話|でんわ}で{話|はな}しています。', pt: 'No meu país, todo mundo fala ao telefone normalmente.' },
        { speaker: 'B', ja: 'へー、うるさくない？', pt: 'Nossa, não fica barulhento?' },
        { speaker: 'A', ja: 'でも、こうして2{人|り}で{話|はな}すのはいいんですよね？ どうして{電話|でんわ}だけ、いけませんか？', pt: 'Mas conversar entre duas pessoas, assim, pode, né? Por que só ao telefone não pode?' },
        { speaker: 'B', ja: '{確|たし}かにねえ。どうしてかなあ……。', pt: 'É, realmente. Por que será…' },
        { speaker: 'A', ja: '{不思議|ふしぎ}ですね。', pt: 'Que curioso.' },
      ],
    },
  ],
  '10-11': [
    {
      label: 'マナー④ — 食器を片付ける (10-11)',
      setupPt: '④ Recolher a própria louça (praça de alimentação).',
      lines: [
        { speaker: 'A', ja: 'あ、{食器|しょっき}は{自分|じぶん}で{片付|かたづ}けなくちゃ。', pt: 'Ah, a gente tem de recolher a própria louça.' },
        { speaker: 'B', ja: 'あ、はい……。{食|た}べ{終|お}わったあとは、{自分|じぶん}で{片付|かたづ}けるんですか？', pt: 'Ah, sim… Depois de comer, a gente mesmo recolhe?' },
        { speaker: 'A', ja: 'フードコートは、そうだね。', pt: 'Na praça de alimentação, é assim.' },
        { speaker: 'B', ja: '{私|わたし}の{国|くに}では、それは{掃除|そうじ}の{人|ひと}の{仕事|しごと}です。', pt: 'No meu país, isso é trabalho da equipe de limpeza.' },
        { speaker: 'A', ja: 'へー、そうなの？', pt: 'Nossa, é?' },
        { speaker: 'B', ja: 'どうして{日本|にほん}では、{掃除|そうじ}の{人|ひと}が{片付|かたづ}けませんか？', pt: 'Por que no Japão a limpeza não recolhe?' },
        { speaker: 'A', ja: 'うーん、{次|つぎ}の{人|ひと}がすぐに{席|せき}に{座|すわ}れるように、かな？', pt: 'Hmm, para o próximo poder se sentar logo, talvez?' },
        { speaker: 'B', ja: 'そうですか……。めんどくさいですね。', pt: 'Ah, sei… Dá trabalho, hein.' },
      ],
    },
  ],
  '10-14': [
    {
      label: '会話モデル — 習慣の違い (10-14)',
      setupJa: '{習慣|しゅうかん}やマナーの{違|ちが}いについて{話|はな}しています。',
      setupPt: 'Modelo: conversar sobre diferenças de costume/etiqueta.',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、バスの{中|なか}で、だれも{電話|でんわ}で{話|はな}さないですね。', pt: 'No Japão, ninguém fala ao telefone no ônibus.' },
        { speaker: 'B', ja: 'そうですね。', pt: 'É verdade.' },
        { speaker: 'A', ja: 'どうしてですか？ {私|わたし}の{国|くに}では、みんな{電話|でんわ}で{話|はな}しています。', pt: 'Por quê? No meu país, todos falam ao telefone.' },
        { speaker: 'B', ja: 'どうしてかなあ……。', pt: 'Por que será…' },
        { speaker: 'A', ja: '{不思議|ふしぎ}ですね。', pt: 'Que curioso.' },
      ],
    },
  ],
  '10-15': [
    {
      label: '会話 — 異文化体験（レジの前でジュース）(10-15)',
      setupJa: 'ロイさんが、{小林|こばやし}さん・リンダさんに、{昨日|きのう}の{出来事|できごと}について{話|はな}しています。',
      setupPt: 'Roy conta a Kobayashi e Linda um episódio do dia anterior (beber suco antes de pagar).',
      lines: [
        { speaker: 'ロイ', ja: '{昨日|きのう}、スーパーでレジに{並|なら}びました。すごく{混|こ}んでいました。のどが{渇|かわ}いたから、かごのジュースを{飲|の}みました。そのあと、レジでお{金|かね}を{払|はら}うとき「これも{飲|の}みました」と{言|い}って、{空|から}のボトルを{出|だ}しました。そうしたら、レジの{人|ひと}にすごく{怒|おこ}られました。', pt: 'Ontem fiquei na fila do caixa no mercado. Estava muito cheio. Como fiquei com sede, bebi um suco do carrinho. Depois, ao pagar, falei «bebi isto também» e entreguei a garrafa vazia. Aí o caixa ficou muito bravo comigo.' },
        { speaker: '小林', ja: 'え、お{金|かね}を{払|はら}わないで、ジュース{飲|の}んだの？', pt: 'Hã, você bebeu o suco sem ter pago?' },
        { speaker: 'ロイ', ja: 'はい。', pt: 'Sim.' },
        { speaker: '小林', ja: 'ああ、それはだめだよ。ちゃんとお{金|かね}を{払|はら}ってから{飲|の}まなきゃ。', pt: 'Ah, isso não pode. Tem de pagar direitinho antes de beber.' },
        { speaker: 'ロイ', ja: 'はい。お{店|みせ}の{店長|てんちょう}さんに「{今日|きょう}から{気|き}をつけて」と{注意|ちゅうい}されました。', pt: 'É. O gerente da loja me advertiu: «a partir de hoje, tome cuidado».' },
        { speaker: '小林', ja: '{日本|にほん}では、お{金|かね}を{払|はら}う{前|まえ}にジュースを{飲|の}むのは、{泥棒|どろぼう}と{同|おな}じイメージだなあ。', pt: 'No Japão, beber o suco antes de pagar passa a mesma imagem de um ladrão.' },
        { speaker: 'ロイ', ja: 'そうなんですか。でも、{私|わたし}の{国|くに}では{普通|ふつう}です。', pt: 'Ah, é? Mas no meu país é normal.' },
        { speaker: '小林', ja: 'へー、そうなの？ リンダさんの{国|くに}では、どう？', pt: 'Nossa, é? E no seu país, Linda?' },
        { speaker: 'リンダ', ja: '{私|わたし}の{国|くに}でも、よくありません。{小|ちい}さい{子|こ}どもには、{先|さき}にお{菓子|かし}の{袋|ふくろ}を{開|あ}けて、{子|こ}どもにあげて、あとからお{金|かね}を{払|はら}います。', pt: 'No meu país também não é bom. Mas, com crianças pequenas, abre-se o pacote de doce antes, dá-se à criança e paga-se depois.' },
        { speaker: 'ロイ', ja: 'そうですよね。{日本|にほん}はきびしいですね。', pt: 'Pois é. O Japão é rígido.' },
        { speaker: '小林', ja: 'そうかなあ。{私|わたし}は、すごくびっくりしたけど。', pt: 'Será? Eu fiquei foi muito espantado.' },
        { speaker: 'リンダ', ja: '{同|おな}じ{普通|ふつう}でも、{国|くに}によって{違|ちが}うんですね。', pt: 'Mesmo sendo «normal», varia de país para país, né.' },
        { speaker: 'ロイ', ja: 'そうですね。{難|むずか}しいですね。', pt: 'É verdade. É complicado.' },
      ],
    },
  ],
}

const lesson10: Section = {
  id: 'lesson-10',
  level: 'elementary2',
  titleJa: '第10課 どんな服を着て行けばいいですか？',
  titlePt: 'Lição 10 — Que roupa devo vestir para ir?',
  summaryPt:
    'Eventos anuais e etiqueta · perguntar sobre etiqueta e costumes de funeral, casamento e visita ao hospital (どんな服を着て行けばいいですか／何を持って行けばいいか教えてもらえませんか), comparar costumes do Japão e do seu país (バスの中で電話で話しちゃだめ／国によって違う) e contar um episódio de experiência intercultural (払う前にジュースを飲む).',
  studyNotes: [
    {
      title: 'Tópico: Eventos anuais e etiqueta (年中行事とマナー)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Perguntar sobre etiqueta e costumes de casamento, funeral etc. no Japão e entender as respostas.\n' +
        '- Perguntar e comentar sobre diferenças de etiqueta/costumes entre o Japão e seu país.\n' +
        '- Falar de forma simples sobre um episódio de experiência intercultural.\n' +
        '- Ler posts na internet sobre diferenças de etiqueta/costumes e entender o conteúdo geral.\n\n' +
        '💡 Situações: お{葬式|そうしき} (funeral), {結婚式|けっこんしき} (casamento), お{見舞|みま}い (visita ao hospital), {新築|しんちく}{祝|いわ}い (casa nova) e regras do dia a dia (信号, トイレ, バス, フードコート).',
    },
    {
      title: 'V-ばいいですか — pedir orientação (➊)',
      bodyPt:
        '**V-ばいいですか** pergunta o que/como se deve fazer:\n\n' +
        '- `どんな{服|ふく}を{着|き}て{行|い}けばいいですか？`, `{何|なに}を{持|も}って{行|い}けばいいですか？`, `どうすればいいですか？`.\n' +
        '- Pergunta embutida + pedido educado: `どんな{服|ふく}を{着|き}て{行|い}けばいいか、{教|おし}えてもらえませんか？`.\n\n' +
        '🔧 Forma ば: grupo 1 -u→-eば ({行|い}く→{行|い}けば), grupo 2 -る→-れば ({着|き}る→{着|き}れば — aqui {着|つ}ければ), irreg. する→すれば, {来|く}る→{来|く}れば. (文法ノート ❶)',
    },
    {
      title: 'Proibição e obrigação: V-てはいけません / V-なくちゃ (➋➌)',
      bodyPt:
        '- **V-てはいけません / V-ちゃだめ** = proibição (não pode/não deve): `{赤信号|あかしんごう}を{渡|わた}ってはいけません`, `バスの{中|なか}で{話|はな}しちゃだめ`.\n' +
        '- **V-なくちゃ / V-なくちゃならない** = obrigação coloquial (tem de): `{食器|しょっき}は{自分|じぶん}で{片付|かたづ}けなくちゃ`, `ルールは{守|まも}らなくちゃ`.\n\n' +
        '🔧 なくちゃ vem de 〜なくては(ならない); ちゃだめ vem de 〜てはだめ. (文法ノート ❷❸)',
    },
    {
      title: 'V-ように、〜 — finalidade (➍)',
      bodyPt:
        '**V(辞書形/ない形) + ように、〜** indica a finalidade/objetivo (“para que ~”):\n\n' +
        '- `{子|こ}どもがまねをしないように、ルールを{守|まも}る` (seguir as regras para as crianças não imitarem).\n' +
        '- `トイレがつまらないように、{紙|かみ}はごみ{箱|ばこ}に{捨|す}てる`, `{次|つぎ}の{人|ひと}が{席|せき}に{座|すわ}れるように`.\n\n' +
        '💡 Costuma vir com verbos de potencial ou negativos antes de ように. (文法ノート ❹)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Cerimônias:** お{葬式|そうしき}, {香典|こうでん}/{香典袋|こうでんぶくろ}, {地味|じみ}（な), {結婚式|けっこんしき}/{披露宴|ひろうえん}, {招待状|しょうたいじょう}, {花嫁|はなよめ}, ワンピース, お{見舞|みま}い, {同僚|どうりょう}, {骨|ほね}を{折|お}る, {鉢植|はちう}え, {花束|はなたば}, {本人|ほんにん}, {新築|しんちく}{祝|いわ}い.\n\n' +
        '**Regras/maneiras:** ルールを{守|まも}る, {貼|は}り{紙|がみ}, {信号|しんごう}, {横断歩道|おうだんほどう}を{渡|わた}る, つまる, {臭|くさ}い, {席|せき}, {掃除|そうじ}, {泥棒|どろぼう}, {怒|おこ}られる, {注意|ちゅうい}される, {不思議|ふしぎ}, {習慣|しゅうかん}.\n\n' +
        '**Kanji da lição:** {服|ふく}, {袋|ふくろ}, {自分|じぶん}, {店長|てんちょう}, {全員|ぜんいん}, {習慣|しゅうかん}, {普通|ふつう}, {暗|くら}い, {怒|おこ}る, {入院|にゅういん}する.',
    },
  ],
  groups: [lesson10Group],
  audios: attachScripts(10, L10_SCRIPTS),
}

// ---- Lição 11: ポイントカードを忘れてしまいました (tópico 上手な買い物) --------------
const lesson11Group: ExerciseGroup = {
  id: 'iro-e2-l11',
  title: 'ポイントカードを忘れてしまいました',
  subtitlePt: 'Comprar roupa/sapato dizendo cor e tamanho · avisar quem está por perto quando há um problema · ao perder algo, descrever objeto e lugar · entender anúncios internos de um shopping',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l11-1', number: 1, prompt: 'O título 「ポイントカードを{忘|わす}れて[[しまいました]]」 usa 「V-てしまいました」. Que nuance ela dá aqui?', choices: [{ n: 1, text: 'arrependimento / algo indesejado que aconteceu (acabei esquecendo o cartão de pontos)' }, { n: 2, text: 'algo que se quer muito fazer' }, { n: 3, text: 'uma ordem educada' }, { n: 4, text: 'algo que vai acontecer no futuro' }], answer: 1, translationPt: 'Acabei esquecendo o cartão de pontos.', explanationPt: 'V-てしまいました marca conclusão com pesar/arrependimento. {忘|わす}れてしまいました = «acabei esquecendo» (sem querer). (文法ノート ❻)' },
    { id: 'iro-e2-l11-2', number: 2, prompt: 'Vocabulário de cores: 「{赤|あか}／{青|あお}／{緑|みどり}／{黄色|きいろ}／{黒|くろ}／{白|しろ}／グレー／{茶色|ちゃいろ}」 são, na ordem:', choices: [{ n: 1, text: 'vermelho / azul / verde / amarelo / preto / branco / cinza / marrom' }, { n: 2, text: 'rosa / azul / roxo / laranja / preto / branco / bege / marrom' }, { n: 3, text: 'vermelho / verde / azul / amarelo / cinza / branco / preto / bege' }, { n: 4, text: 'laranja / azul / verde / amarelo / preto / branco / cinza / vermelho' }], answer: 1, explanationPt: '{赤|あか} (vermelho), {青|あお} (azul), {緑|みどり} (verde), {黄色|きいろ} (amarelo), {黒|くろ} (preto), {白|しろ} (branco), グレー (cinza), {茶色|ちゃいろ} (marrom); também ベージュ, ピンク, カーキ. (Atividade 1)' },
    { id: 'iro-e2-l11-3', number: 3, prompt: 'O que esta ilustração mostra (tabela de tamanhos de roupa)?', image: `${IMG}/Z_11_1_01_fukunosaizu.png`, imageAlt: 'tamanhos de roupa S, M, L, XL', choices: [{ n: 1, text: '{服|ふく}のサイズ — tamanhos de roupa (S / M / L / XL / フリー)' }, { n: 2, text: 'cores de roupa' }, { n: 3, text: 'preços' }, { n: 4, text: 'tamanhos de sapato' }], answer: 1, explanationPt: '{服|ふく}のサイズ: S / M / L / XL / フリー (tamanho único). (Atividade 1)' },
    { id: 'iro-e2-l11-4', number: 4, prompt: 'O que esta ilustração mostra (números como 24cm, 24,5cm, 25cm)?', image: `${IMG}/Z_11_1_02_kutsunosaizu.png`, imageAlt: 'tamanhos de sapato em centímetros', choices: [{ n: 1, text: 'くつのサイズ — tamanhos de sapato (em cm)' }, { n: 2, text: 'tamanhos de roupa' }, { n: 3, text: 'preços dos sapatos' }, { n: 4, text: 'cores de sapato' }], answer: 1, explanationPt: 'No Japão o número do calçado é em cm: 24cm, 24.5cm, 25cm. (Atividade 1)' },
    { id: 'iro-e2-l11-5', number: 5, prompt: 'O que a pessoa está fazendo nesta ilustração, antes de comprar a roupa?', image: `${IMG}/Z_11_1_04_shichaku.png`, imageAlt: 'pessoa experimentando roupa num provador', choices: [{ n: 1, text: '{試着|しちゃく}する — experimentar/provar a roupa (no 試着室)' }, { n: 2, text: 'pagar na caixa' }, { n: 3, text: 'devolver a roupa' }, { n: 4, text: 'lavar a roupa' }], answer: 1, explanationPt: '{試着|しちゃく}する = provar a roupa, no {試着室|しちゃくしつ} (provador). 「{着|き}てみてもいいですか？」. (Atividade 1/2)' },
    { id: 'iro-e2-l11-6', number: 6, prompt: '「このセーター、{着|き}て[[みてもいいですか]]？」 — 「V-てみてもいいですか」 serve para:', choices: [{ n: 1, text: 'pedir permissão para experimentar/tentar fazer algo (posso provar esta blusa?)' }, { n: 2, text: 'recusar uma oferta' }, { n: 3, text: 'reclamar de um produto' }, { n: 4, text: 'pedir desconto' }], answer: 1, explanationPt: 'V-てみる (tentar) + てもいいですか (posso?) = «posso experimentar ~?». {着|き}てみてもいいですか. Resposta da loja: 「どうぞ」/「ご{試着|しちゃく}できますよ」. (文法ノート ❶)' },
    { id: 'iro-e2-l11-7', number: 7, prompt: '聴解 11-03 (洋服売り場): que informações a vendedora dá ao cliente?', context: '{店員|てんいん}：いらっしゃいませ。ただいま、{全品|ぜんぴん}10%オフです。…よろしければ、ご{試着|しちゃく}もできますよ。', choices: [{ n: 1, text: 'Todos os itens estão com 10% de desconto e o cliente pode experimentar (試着).' }, { n: 2, text: 'A loja vai fechar.' }, { n: 3, text: 'Não há descontos hoje.' }, { n: 4, text: 'Só se pode pagar em dinheiro.' }], answer: 1, explanationPt: 'ただいま{全品|ぜんぴん}10%オフ; よろしければご{試着|しちゃく}できます (keigo da loja: ごゆっくりごらんください, ご{案内|あんない}いたします). (聴解 11-03)' },
    { id: 'iro-e2-l11-8', number: 8, prompt: '「この{色|いろ}はちょっと{派手|はで}[[すぎます]]」 — 「A-すぎます」 significa:', choices: [{ n: 1, text: 'demais / excessivamente (esta cor é chamativa demais)' }, { n: 2, text: 'um pouco / mais ou menos' }, { n: 3, text: 'nada / de jeito nenhum' }, { n: 4, text: 'o suficiente / na medida' }], answer: 1, explanationPt: 'A-すぎる = «~ demais». {派手|はで}（な)→{派手|はで}すぎます; {大|おお}きい→{大|おお}きすぎます; {高|たか}い→{高|たか}すぎます. ⚠️ tira-se o い/な antes de すぎる. (文法ノート ❷)' },
    { id: 'iro-e2-l11-9', number: 9, prompt: '「もうちょっと{大|おお}きい[[の]]、ありますか？」「{黒|くろ}い[[の]]、ありますか？」 — esse 「の」:', choices: [{ n: 1, text: 'substitui o substantivo já conhecido (= «um maior», «um preto») para não repetir セーター etc.' }, { n: 2, text: 'marca posse' }, { n: 3, text: 'transforma o verbo em pergunta' }, { n: 4, text: 'indica razão' }], answer: 1, explanationPt: '[adjetivo] + の = «um(a) ~» (pronome que substitui o nome). {大|おお}きいの, {黒|くろ}いの, ほかの{色|いろ}の. (文法ノート ❸)' },
    { id: 'iro-e2-l11-10', number: 10, prompt: 'Para comprar uma roupa, a sequência de frases-modelo da lição é (試着 → サイズ/色 → 決める):', choices: [{ n: 1, text: '「{着|き}てみてもいいですか？」→「Mサイズ／{黒|くろ}、ありますか？」「もうちょっと{大|おお}きいの、ありますか？」→「このベージュにします」' }, { n: 2, text: '「もう{始|はじ}まりましたか？」→「いくらですか？」→「{帰|かえ}ります」' }, { n: 3, text: '「どうしましたか？」→「{薬|くすり}をください」→「お{大事|だいじ}に」' }, { n: 4, text: '「いただきます」→「ごちそうさま」→「また{来|き}ます」' }], answer: 1, explanationPt: 'Fluxo de compra: ① {試着|しちゃく}「{着|き}てみてもいいですか？」② サイズ/色「Mサイズ、ありますか／もうちょっと{大|おお}きいの」③ {決|き}める「これにします」. (Atividade 3)' },
    { id: 'iro-e2-l11-11', number: 11, prompt: 'O que esta ilustração representa (mapa de um grande centro de compras)?', image: `${IMG}/Z_11_2_01_shoppingumooru.png`, imageAlt: 'mapa de shopping mall com setores', choices: [{ n: 1, text: 'ショッピングモール — um shopping/centro de compras (com {駐輪場|ちゅうりんじょう}, インフォメーション, フードコート etc.)' }, { n: 2, text: 'uma estação de trem' }, { n: 3, text: 'um hospital' }, { n: 4, text: 'uma escola' }], answer: 1, explanationPt: 'ショッピングモール: {駐輪場|ちゅうりんじょう} (bicicletário), {入口|いりぐち}, インフォメーション, レジ, フードコート, サービスカウンター. (Atividade · Seção 2)' },
    { id: 'iro-e2-l11-12', number: 12, prompt: 'O que aconteceu nesta cena (problema durante as compras)?', image: `${IMG}/Z_11_2_04_jitensha.png`, imageAlt: 'pessoa procurando a bicicleta que sumiu do bicicletário', choices: [{ n: 1, text: '{自転車|じてんしゃ}を{盗|ぬす}まれた／{移動|いどう}された — a bicicleta foi roubada ou removida do bicicletário' }, { n: 2, text: 'a bicicleta foi consertada' }, { n: 3, text: 'comprou uma bicicleta nova' }, { n: 4, text: 'emprestou a bicicleta' }], answer: 1, explanationPt: '{自転車|じてんしゃ}を{盗|ぬす}まれた (passivo) ou あっちの{駐輪場|ちゅうりんじょう}に{移動|いどう}された. (Atividade · Seção 2, 聴解 11-14)' },
    { id: 'iro-e2-l11-13', number: 13, prompt: '「{自転車|じてんしゃ}を{盗|ぬす}[[まれ]]ました」「バッグを[[とら]]れました」 — essa forma (受身/passivo) é usada porque:', choices: [{ n: 1, text: 'a pessoa SOFREU a ação de outro (alguém roubou a bicicleta/a bolsa dela)' }, { n: 2, text: 'a pessoa fez a ação ela mesma' }, { n: 3, text: 'é uma ordem' }, { n: 4, text: 'é algo que vai acontecer' }], answer: 1, explanationPt: 'Passivo 受身②: NをV-(ら)れる, quando se sofre a ação de alguém. {盗|ぬす}む→{盗|ぬす}まれる, とる→とられる, {移動|いどう}する→{移動|いどう}される. (文法ノート ❹)' },
    { id: 'iro-e2-l11-14', number: 14, prompt: '「もしかしたら、バッグを[[とられたかもしれません]]」 — 「かもしれません」 significa:', choices: [{ n: 1, text: 'talvez / pode ser que (talvez tenham levado a bolsa)' }, { n: 2, text: 'com certeza / definitivamente' }, { n: 3, text: 'não é possível' }, { n: 4, text: 'já aconteceu, sem dúvida' }], answer: 1, explanationPt: '〜かもしれません = «talvez / pode ser». Combina com もしかしたら (quem sabe). とられたかもしれません. (文法ノート ❺)' },
    { id: 'iro-e2-l11-15', number: 15, prompt: 'O que esta ilustração mostra (objeto comum de ser esquecido na hora de pagar)?', image: `${IMG}/Z_11_2_05_pointokaado.png`, imageAlt: 'cartão de pontos (point card)', choices: [{ n: 1, text: 'ポイントカード — cartão de pontos (também: {会員証|かいいんしょう})' }, { n: 2, text: '{招待状|しょうたいじょう} — convite' }, { n: 3, text: '{香典袋|こうでんぶくろ} — envelope de pêsames' }, { n: 4, text: '{財布|さいふ} — carteira' }], answer: 1, explanationPt: 'ポイントカード (cartão de pontos), também {会員証|かいいんしょう}. 「ポイントカードはお{持|も}ちですか？」→「{忘|わす}れてしまいました」. (聴解 11-19)' },
    { id: 'iro-e2-l11-16', number: 16, prompt: '聴解 11-17 (トラブル · バッグ): o que a pessoa percebe e o que decide fazer?', context: 'Ａ：さっき、ここにバッグを{置|お}いたんですけど、ないんです。…もしかしたら、とられたかもしれません。Ｂ：インフォメーションに{行|い}ってみますか？', choices: [{ n: 1, text: 'Percebe que a bolsa que deixou ali sumiu (talvez levada) e decide ir à informação.' }, { n: 2, text: 'Encontra a bolsa na fila do caixa.' }, { n: 3, text: 'Compra uma bolsa nova.' }, { n: 4, text: 'Deixa a bolsa de propósito.' }], answer: 1, explanationPt: 'さっき{置|お}いたバッグがない→とられたかもしれません (❺)→インフォメーションに{行|い}く. (聴解 11-17)' },
    { id: 'iro-e2-l11-17', number: 17, prompt: 'Quando você está com um amigo e algo seu some, como avisa (Atividade 3 ①)?', context: '「さっき、ここに[[バッグ]]を{置|お}いたんですけど、ないんです。もしかしたら、とられたかもしれません。」', choices: [{ n: 1, text: 'Descreve o objeto e o lugar onde o deixou, e diz que talvez tenha sido levado.' }, { n: 2, text: 'Pede para o amigo pagar a conta.' }, { n: 3, text: 'Vai embora sem falar nada.' }, { n: 4, text: 'Pede desconto à loja.' }], answer: 1, explanationPt: 'Avisar uma perda: o que ({objeto|もの}) + onde ({場所|ばしょ}) + とられた/なくなったかもしれません. (Atividade 3 ①)' },
    { id: 'iro-e2-l11-18', number: 18, prompt: 'O que esta pessoa está sentindo nesta cena (mal-estar no shopping)?', image: `${IMG}/Z_11_2_03_onakagaitai.png`, imageAlt: 'pessoa passando mal, com dor de barriga', choices: [{ n: 1, text: '{急|きゅう}にお{腹|なか}が{痛|いた}くなった — passou mal de repente (dor de barriga)' }, { n: 2, text: 'está com fome' }, { n: 3, text: 'está com frio' }, { n: 4, text: 'está feliz' }], answer: 1, explanationPt: '{体調不良|たいちょうふりょう}: {急|きゅう}にお{腹|なか}が{痛|いた}くなった. Pede ajuda: 「{救急車|きゅうきゅうしゃ}を{呼|よ}んでください」/「ソファに{座|すわ}ってください」. (聴解 11-18)' },
    { id: 'iro-e2-l11-19', number: 19, prompt: '聴解 11-18 (トラブル · 体調不良): o que a pessoa diz e o que lhe oferecem?', context: 'Ａ：すみません、{急|きゅう}にお{腹|なか}が{痛|いた}くなって……。Ｂ：こちらのソファに{座|すわ}ってください。だいじょうぶですか？', choices: [{ n: 1, text: 'Diz que passou mal de repente (dor de barriga); oferecem que se sente no sofá e perguntam se está bem.' }, { n: 2, text: 'Pede para experimentar uma roupa.' }, { n: 3, text: 'Quer trocar um produto.' }, { n: 4, text: 'Pergunta o preço.' }], answer: 1, explanationPt: '{急|きゅう}にお{腹|なか}が{痛|いた}くなって→こちらのソファに{座|すわ}ってください/{救急車|きゅうきゅうしゃ}を{呼|よ}ぶ. (聴解 11-18)' },
    { id: 'iro-e2-l11-20', number: 20, prompt: '聴解 11-19 (トラブル · ポイントカード): o que acontece no caixa?', context: 'Ａ：ポイントカードはお{持|も}ちですか？ Ｂ：すみません、ポイントカード、{忘|わす}れてしまいました。Ａ：{次回|じかい}お{持|も}ちください。', choices: [{ n: 1, text: 'O caixa pergunta pelo cartão de pontos; a pessoa esqueceu e pedem que traga da próxima vez.' }, { n: 2, text: 'A pessoa ganha um cartão novo na hora.' }, { n: 3, text: 'O cartão foi roubado.' }, { n: 4, text: 'O caixa cancela a compra.' }], answer: 1, explanationPt: 'ポイントカードはお{持|も}ちですか→{忘|わす}れてしまいました (❻)→{次回|じかい}お{持|も}ちください. (聴解 11-19)' },
    { id: 'iro-e2-l11-21', number: 21, prompt: 'Vocabulário de problemas: 「{盗|ぬす}む／{停|と}める／{移動|いどう}する／{急|きゅう}に／さっき」 significam:', choices: [{ n: 1, text: 'roubar / estacionar (a bici) / mover/remover / de repente / há pouco (agora há pouco)' }, { n: 2, text: 'comprar / lavar / guardar / devagar / depois' }, { n: 3, text: 'achar / consertar / trocar / sempre / ontem' }, { n: 4, text: 'devolver / pagar / emprestar / nunca / amanhã' }], answer: 1, explanationPt: '{盗|ぬす}む (roubar), {停|と}める (estacionar), {移動|いどう}する (mover), {急|きゅう}に (de repente), さっき (há pouco). (Atividade · Seção 2)' },
    { id: 'iro-e2-l11-22', number: 22, prompt: 'Vocabulário do shopping: 「{駐輪場|ちゅうりんじょう}／インフォメーション／サービスカウンター／{会員証|かいいんしょう}／{財布|さいふ}」 significam:', choices: [{ n: 1, text: 'bicicletário / balcão de informações / balcão de atendimento / carteirinha de sócio / carteira (de dinheiro)' }, { n: 2, text: 'estacionamento de carro / saída / caixa / ingresso / bolsa' }, { n: 3, text: 'praça de alimentação / entrada / provador / recibo / chave' }, { n: 4, text: 'banheiro / elevador / vitrine / convite / sacola' }], answer: 1, explanationPt: '{駐輪場|ちゅうりんじょう} (bicicletário), インフォメーション, サービスカウンター, {会員証|かいいんしょう} (carteirinha), {財布|さいふ} (carteira). (Seção 2)' },
    { id: 'iro-e2-l11-23', number: 23, prompt: 'Os kanji 「{色|いろ}／{赤|あか}／{青|あお}／{黒|くろ}／{白|しろ}」 lêem-se:', choices: [{ n: 1, text: 'いろ (cor) / あか (vermelho) / あお (azul) / くろ (preto) / しろ (branco)' }, { n: 2, text: 'いろ / せき / せい / こく / はく' }, { n: 3, text: 'しょく / あか / あお / くろ / しろ' }, { n: 4, text: 'いろ / あか / みどり / くろ / しろ' }], answer: 1, explanationPt: '{色|いろ}, {赤|あか}, {青|あお}, {黒|くろ}, {白|しろ}. (漢字のことば)' },
    { id: 'iro-e2-l11-24', number: 24, prompt: 'Os kanji 「{女性|じょせい}／{男性|だんせい}／{急|きゅう}に／{営業|えいぎょう}する／{案内|あんない}する」 lêem-se:', choices: [{ n: 1, text: 'じょせい (mulher) / だんせい (homem) / きゅうに (de repente) / えいぎょうする (funcionar/abrir — comércio) / あんないする (guiar/orientar)' }, { n: 2, text: 'じょせい / だんせい / いそぎに / えいぎょうする / あんないする' }, { n: 3, text: 'おんなせい / おとこせい / きゅうに / えいぎょう / あんない' }, { n: 4, text: 'じょせい / だんせい / きゅうに / えいごうする / あんしんする' }], answer: 1, explanationPt: '{女性|じょせい}, {男性|だんせい}, {急|きゅう}に, {営業|えいぎょう}する ({夜|よる}11{時|じ}まで{営業|えいぎょう}), {案内|あんない}する (レジまでご{案内|あんない}). (漢字のことば)' },
    { id: 'iro-e2-l11-25', number: 25, prompt: 'Resumo: como se avisa educadamente, no shopping, que algo seu sumiu ou que você esqueceu o cartão?', choices: [{ n: 1, text: '「〜を{盗|ぬす}まれました／とられたかもしれません」「ポイントカード、{忘|わす}れてしまいました」 (passivo + かもしれません + てしまいました)' }, { n: 2, text: '「もう{始|はじ}まりましたか？」' }, { n: 3, text: '「{着|き}てみてもいいですか？」' }, { n: 4, text: '「{年|とし}によって{違|ちが}います」' }], answer: 1, explanationPt: 'Avisar problema: 受身 ({盗|ぬす}まれる) + かもしれません + てしまいました. (文法ノート ❹❺❻)' },
  ],
}

// Resumos das faixas de áudio da Lição 11 (situação + falas-chave citadas; não verbatim)
const L11_SCRIPTS: Record<string, ScriptItem[]> = {
  '11-03': [
    {
      label: '会話 — 洋服売り場（セーター）(11-03) · resumo',
      setupJa: '{客|きゃく}が{洋服|ようふく}{売|う}り{場|ば}でセーターを{選|えら}び、{店員|てんいん}に{試着|しちゃく}・サイズ・{色|いろ}を{聞|き}いています。',
      setupPt: 'Resumo: cliente escolhe uma blusa; vendedora avisa do desconto e oferece o provador; cliente pede outra cor (a atual é chamativa demais) e um tamanho maior. Decide ficar com a peça.',
      lines: [
        { speaker: '店員', ja: 'ただいま、{全品|ぜんぴん}10%オフです。よろしければ、ご{試着|しちゃく}もできますよ。', pt: 'No momento, todos os itens com 10% de desconto. Se quiser, pode experimentar.' },
        { speaker: '客', ja: 'この{色|いろ}はちょっと{派手|はで}すぎます。ほかの{色|いろ}、ありませんか？ もうちょっと{大|おお}きいの、ありますか？', pt: 'Esta cor é chamativa demais. Não tem outra cor? E um tamanho um pouco maior?' },
      ],
    },
  ],
  '11-17': [
    {
      label: 'トラブル① — バッグがない (11-17) · resumo',
      setupJa: 'いっしょに{来|き}た{人|ひと}に、なくなったものを{伝|つた}えています。',
      setupPt: 'Resumo: a pessoa nota que a bolsa que deixou ali sumiu — talvez tenham levado — e decidem ir ao balcão de informações.',
      lines: [
        { speaker: 'A', ja: 'さっき、ここにバッグを{置|お}いたんですけど、ないんです。もしかしたら、とられたかもしれません。', pt: 'Agora há pouco deixei a bolsa aqui e ela sumiu. Talvez tenham levado.' },
        { speaker: 'B', ja: 'インフォメーションに{行|い}ってみますか？', pt: 'Vamos tentar ir ao balcão de informações?' },
      ],
    },
  ],
  '11-18': [
    {
      label: 'トラブル② — 体調不良 (11-18) · resumo',
      setupPt: 'Resumo: a pessoa passa mal de repente (dor de barriga); oferecem que se sente no sofá e cogita-se chamar uma ambulância.',
      lines: [
        { speaker: 'A', ja: 'すみません、{急|きゅう}にお{腹|なか}が{痛|いた}くなって……。', pt: 'Com licença, de repente comecei a sentir dor de barriga…' },
        { speaker: 'B', ja: 'こちらのソファに{座|すわ}ってください。{救急車|きゅうきゅうしゃ}を{呼|よ}びますか？', pt: 'Sente-se neste sofá, por favor. Quer que eu chame uma ambulância?' },
      ],
    },
  ],
  '11-19': [
    {
      label: 'トラブル③ — ポイントカードを忘れた (11-19) · resumo',
      setupPt: 'Resumo: no caixa, o cliente percebe que esqueceu o cartão de pontos; pedem que o traga na próxima vez.',
      lines: [
        { speaker: '店員', ja: 'ポイントカードはお{持|も}ちですか？', pt: 'Está com o cartão de pontos?' },
        { speaker: '客', ja: 'すみません、ポイントカード、{忘|わす}れてしまいました。', pt: 'Desculpe, acabei esquecendo o cartão de pontos.' },
        { speaker: '店員', ja: '{次回|じかい}お{持|も}ちください。', pt: 'Traga da próxima vez, por favor.' },
      ],
    },
  ],
}

const lesson11: Section = {
  id: 'lesson-11',
  level: 'elementary2',
  titleJa: '第11課 ポイントカードを忘れてしまいました',
  titlePt: 'Lição 11 — Acabei esquecendo o cartão de pontos',
  summaryPt:
    'Comprar bem · numa loja de roupas, dizer cor e tamanho e experimentar (着てみてもいいですか／もうちょっと大きいの、ありますか), avisar quem está por perto quando surge um problema nas compras (自転車を盗まれました／急にお腹が痛くなって), ao perder algo descrever o objeto e o lugar (とられたかもしれません) e entender anúncios e avisos internos do shopping.',
  studyNotes: [
    {
      title: 'Tópico: Comprar bem (上手な買い物)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Numa loja de roupas, dizer cor, tamanho etc. e comprar o que quer.\n' +
        '- Avisar quem está por perto quando houver um problema durante as compras.\n' +
        '- Ao perder algo, descrever o objeto e o lugar onde o perdeu.\n' +
        '- Ouvir anúncios internos de um shopping etc. e entender o conteúdo geral.\n\n' +
        '💡 Cenário: uma ショッピングモール (shopping), com {洋服|ようふく}{売|う}り{場|ば}, {試着室|しちゃくしつ}, {駐輪場|ちゅうりんじょう}, インフォメーション e サービスカウンター.',
    },
    {
      title: 'V-てみてもいいですか / A-すぎます / A+の (➊➋➌)',
      bodyPt:
        'Na loja de roupas:\n\n' +
        '- **V-てみてもいいですか** — pedir para experimentar: `{着|き}てみてもいいですか？` (resposta: どうぞ／ご{試着|しちゃく}できますよ). (❶)\n' +
        '- **A-すぎます** — “~ demais”: `{派手|はで}すぎます`, `{大|おお}きすぎます`, `{高|たか}すぎます` (tira-se い/な antes de すぎる). (❷)\n' +
        '- **[adjetivo] + の** — “um(a) ~” (substitui o nome): `もうちょっと{大|おお}きいの、ありますか？`, `{黒|くろ}いの`. (❸)',
    },
    {
      title: 'Passivo 受身② / かもしれません / V-てしまいました (➍➎➏)',
      bodyPt:
        'Para avisar um problema durante as compras:\n\n' +
        '- **Passivo 受身② (Nを V-(ら)れる)** — sofrer a ação de alguém: `{自転車|じてんしゃ}を{盗|ぬす}まれました`, `バッグをとられました`, `{駐輪場|ちゅうりんじょう}に{移動|いどう}されました`. (❹)\n' +
        '- **〜かもしれません** — talvez/pode ser (com もしかしたら): `とられたかもしれません`. (❺)\n' +
        '- **V-てしまいました** — conclusão com pesar/sem querer: `ポイントカード、{忘|わす}れてしまいました`. (❻)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Cores:** {赤|あか}, {青|あお}, {緑|みどり}, {黄色|きいろ}, {黒|くろ}, {白|しろ}, ベージュ, ピンク, {茶色|ちゃいろ}, グレー, カーキ.\n\n' +
        '**Loja/compra:** サイズ (S/M/L/XL/フリー), 〜cm, {試着|しちゃく}する, {試着室|しちゃくしつ}, {全品|ぜんぴん}, 〜オフ, {派手|はで}（な), {地味|じみ}（な), {営業|えいぎょう}する, レジ.\n\n' +
        '**Problemas:** {盗|ぬす}む/{盗|ぬす}まれる, とられる, {停|と}める, {移動|いどう}する, {急|きゅう}に, {体調不良|たいちょうふりょう}, {救急車|きゅうきゅうしゃ}, {駐輪場|ちゅうりんじょう}, インフォメーション, ポイントカード/{会員証|かいいんしょう}, {財布|さいふ}, {忘|わす}れる.\n\n' +
        '**Kanji da lição:** {色|いろ}, {赤|あか}, {青|あお}, {黒|くろ}, {白|しろ}, {女性|じょせい}, {男性|だんせい}, {急|きゅう}に, {営業|えいぎょう}する, {案内|あんない}する.',
    },
  ],
  groups: [lesson11Group],
  audios: attachScripts(11, L11_SCRIPTS),
}

// ---- Lição 12: この掃除機は軽くて動かしやすいですよ (tópico 上手な買い物) --------------
const lesson12Group: ExerciseGroup = {
  id: 'iro-e2-l12',
  title: 'この掃除機は軽くて動かしやすいですよ',
  subtitlePt: 'Pedir conselho sobre o que/onde comprar · usar app de brechó (フリマ) para comprar eletrônicos · ler tabela comparativa e etiquetas de preço · perguntar ao vendedor ou pedir desconto',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l12-1', number: 1, prompt: 'O título 「この{掃除機|そうじき}は{軽|かる}くて{動|うご}かし[[やすい]]ですよ」 — 「V-やすい」 significa:', choices: [{ n: 1, text: 'fácil de fazer (este aspirador é leve e fácil de manusear)' }, { n: 2, text: 'difícil de fazer' }, { n: 3, text: 'caro' }, { n: 4, text: 'pesado' }], answer: 1, translationPt: 'Este aspirador é leve e fácil de manusear.', explanationPt: 'V-ます (radical) + やすい = «fácil de ~». {動|うご}かす→{動|うご}かしやすい. (≠ V-にくい = difícil de ~). (文法ノート ❷)' },
    { id: 'iro-e2-l12-2', number: 2, prompt: 'Que eletrodoméstico esta ilustração mostra?', image: `${IMG}/Z_12_1_01_reezooko.png`, imageAlt: 'geladeira', choices: [{ n: 1, text: '{冷蔵庫|れいぞうこ} — geladeira' }, { n: 2, text: '{洗濯機|せんたくき} — máquina de lavar' }, { n: 3, text: '{電子|でんし}レンジ — micro-ondas' }, { n: 4, text: '{掃除機|そうじき} — aspirador' }], answer: 1, explanationPt: '{冷蔵庫|れいぞうこ} = geladeira. (Atividade 1 · 電気製品)' },
    { id: 'iro-e2-l12-3', number: 3, prompt: 'Que eletrodoméstico esta ilustração mostra?', image: `${IMG}/Z_12_1_02_sentakuki.png`, imageAlt: 'máquina de lavar roupa', choices: [{ n: 1, text: '{洗濯機|せんたくき} — máquina de lavar roupa' }, { n: 2, text: '{冷蔵庫|れいぞうこ} — geladeira' }, { n: 3, text: '{炊飯器|すいはんき} — panela de arroz' }, { n: 4, text: '{扇風機|せんぷうき} — ventilador' }], answer: 1, explanationPt: '{洗濯機|せんたくき} = máquina de lavar roupa. (Atividade 1)' },
    { id: 'iro-e2-l12-4', number: 4, prompt: 'Que eletrodoméstico esta ilustração mostra?', image: `${IMG}/Z_12_1_03_suihanki.png`, imageAlt: 'panela elétrica de arroz', choices: [{ n: 1, text: '{炊飯器|すいはんき} — panela elétrica de arroz' }, { n: 2, text: 'ポット — garrafa térmica/chaleira' }, { n: 3, text: '{電子|でんし}レンジ — micro-ondas' }, { n: 4, text: '{洗濯機|せんたくき} — máquina de lavar' }], answer: 1, explanationPt: '{炊飯器|すいはんき} = panela de arroz (ex.: IHジャー, 5.5{合|ごう}). (Atividade 1)' },
    { id: 'iro-e2-l12-5', number: 5, prompt: 'Que eletrodoméstico esta ilustração mostra?', image: `${IMG}/Z_12_1_04_denshirenji.png`, imageAlt: 'forno de micro-ondas', choices: [{ n: 1, text: '{電子|でんし}レンジ — (forno de) micro-ondas' }, { n: 2, text: '{炊飯器|すいはんき} — panela de arroz' }, { n: 3, text: '{冷蔵庫|れいぞうこ} — geladeira' }, { n: 4, text: 'テレビ — televisão' }], answer: 1, explanationPt: '{電子|でんし}レンジ = micro-ondas. (Atividade 1)' },
    { id: 'iro-e2-l12-6', number: 6, prompt: 'Que eletrodoméstico esta ilustração mostra (tema do título da lição)?', image: `${IMG}/Z_12_1_05_soojiki.png`, imageAlt: 'aspirador de pó', choices: [{ n: 1, text: '{掃除機|そうじき} — aspirador de pó' }, { n: 2, text: '{扇風機|せんぷうき} — ventilador' }, { n: 3, text: 'ドライヤー — secador' }, { n: 4, text: 'アイロン — ferro de passar' }], answer: 1, explanationPt: '{掃除機|そうじき} = aspirador. コードレス{掃除機|そうじき} (sem fio). (Atividade 1 / Seção 3)' },
    { id: 'iro-e2-l12-7', number: 7, prompt: 'Que eletrodoméstico esta ilustração mostra?', image: `${IMG}/Z_12_1_12_senpuuki.png`, imageAlt: 'ventilador', choices: [{ n: 1, text: '{扇風機|せんぷうき} — ventilador' }, { n: 2, text: '{掃除機|そうじき} — aspirador' }, { n: 3, text: 'エアコン — ar-condicionado' }, { n: 4, text: 'ストーブ — aquecedor' }], answer: 1, explanationPt: '{扇風機|せんぷうき} = ventilador. (Atividade 1)' },
    { id: 'iro-e2-l12-8', number: 8, prompt: 'Que aparelho esta ilustração mostra?', image: `${IMG}/Z_12_1_11_iyahon.png`, imageAlt: 'fones de ouvido (earphones)', choices: [{ n: 1, text: 'イヤホン — fones de ouvido (ex.: ワイヤレス = sem fio)' }, { n: 2, text: 'スピーカー — caixa de som' }, { n: 3, text: 'スマホ — smartphone' }, { n: 4, text: 'パソコン — computador' }], answer: 1, explanationPt: 'イヤホン = fones de ouvido. ワイヤレス (wireless), {音|おと}がいい, {耳|みみ}が{痛|いた}くならない. (Atividade 2/3)' },
    { id: 'iro-e2-l12-9', number: 9, prompt: '「{使|つか}いやすい」⇔「{使|つか}い[[にくい]]」 — 「V-にくい」 significa:', choices: [{ n: 1, text: 'difícil de fazer (difícil de usar)' }, { n: 2, text: 'fácil de fazer' }, { n: 3, text: 'impossível de fazer' }, { n: 4, text: 'caro' }], answer: 1, explanationPt: 'V-にくい = «difícil de ~» (oposto de V-やすい). {分|わ}かりやすい⇔{分|わ}かりにくい, {読|よ}みやすい⇔{読|よ}みにくい. (文法ノート ❷)' },
    { id: 'iro-e2-l12-10', number: 10, prompt: '「{軽|かる}[[くて]]、{動|うご}かしやすい」 — o 「〜くて」 aqui:', choices: [{ n: 1, text: 'liga dois predicados (leve E fácil de manusear) — forma て do adjetivo-い' }, { n: 2, text: 'indica proibição' }, { n: 3, text: 'indica passado' }, { n: 4, text: 'indica condição' }], answer: 1, explanationPt: 'い-adj → 〜くて liga qualidades: {軽|かる}い→{軽|かる}くて; {安|やす}くて{いい|いい}. (Forma て de adjetivos, retomada nesta lição.)' },
    { id: 'iro-e2-l12-11', number: 11, prompt: '「{手元|てもと}に{届|とど}く[[まで]]、2{日|か}しかかかりませんでした」 — 「V-るまで、〜」 indica:', choices: [{ n: 1, text: 'a duração até algo terminar/acontecer (até chegar às minhas mãos, levou só 2 dias)' }, { n: 2, text: 'a razão' }, { n: 3, text: 'a finalidade' }, { n: 4, text: 'uma proibição' }], answer: 1, explanationPt: 'V(辞書形) + まで = «até ~ (acontecer)», marcando duração. {届|とど}くまで2{日|か}, {終|お}わるまで{待|ま}つ. (文法ノート ❶)' },
    { id: 'iro-e2-l12-12', number: 12, prompt: '「セーシバの{掃除機|そうじき}のほうが、スギシタより{軽|かる}くて、{動|うご}かしやすいですよ」 — qual o padrão de comparação?', choices: [{ n: 1, text: '(N1より) N2のほうが〜 — N2 é mais ~ (que N1); pergunta-se com N1とN2と、どちらが〜か' }, { n: 2, text: 'N1もN2も〜 — tanto N1 como N2' }, { n: 3, text: 'N1かN2 — N1 ou N2' }, { n: 4, text: 'N1のN2 — N2 de N1' }], answer: 1, explanationPt: 'Comparação: 「AとBと、どちらが〜ですか？」→「(Aより) Bのほうが〜です」. {軽|かる}い・{使|つか}いやすい. (文法ノート ❸)' },
    { id: 'iro-e2-l12-13', number: 13, prompt: '聴解 12-08〜09 (相談): como se pede conselho sobre o que/onde comprar um eletrônico?', context: '「イヤホンがほしいんですけど、{何|なに}がいいですか？」「{電子|でんし}レンジがほしいんですけど、どこで{買|か}ったらいいですか？」', choices: [{ n: 1, text: '「〜がほしいんですけど、{何|なに}がいいですか／どこで{買|か}ったらいいですか？」 e ouve-se a recomendação.' }, { n: 2, text: '「もう{始|はじ}まりましたか？」' }, { n: 3, text: '「{着|き}てみてもいいですか？」' }, { n: 4, text: '「{道|みち}を{教|おし}えてください」' }], answer: 1, explanationPt: 'Pedir conselho de compra: 〜がほしいんですけど + {何|なに}がいいですか／どこで{買|か}ったらいいですか. Resposta com 〜し、〜し. (会話 12-08〜09)' },
    { id: 'iro-e2-l12-14', number: 14, prompt: '聴解 12-08 (相談 · イヤホン): por que recomendam aquele fone? Como as razões são ligadas?', context: '「[BOSAN]のワイヤレスがいいですよ。{音|おと}がいい[[し]]、{耳|みみ}も{痛|いた}くならない[[し]]。」', choices: [{ n: 1, text: 'Recomendam o fone sem fio da BOSAN porque o som é bom E não machuca o ouvido — razões ligadas com 〜し、〜し.' }, { n: 2, text: 'Recomendam porque é o mais caro.' }, { n: 3, text: 'Não recomendam nenhum.' }, { n: 4, text: 'Recomendam só pela cor.' }], answer: 1, explanationPt: '〜し、〜し enumera razões: {音|おと}がいいし、{耳|みみ}も{痛|いた}くならないし. Também p/ loja: {商品|しょうひん}が{多|おお}いし、{店員|てんいん}が{親切|しんせつ}だし. (会話 12-08)' },
    { id: 'iro-e2-l12-15', number: 15, prompt: '「{商品|しょうひん}が{多|おお}い[[し]]、{店員|てんいん}が{親切|しんせつ}だ[[し]]」 — 「〜し、〜し」 serve para:', choices: [{ n: 1, text: 'enumerar várias razões/qualidades (tem muitos produtos, e os vendedores são atenciosos…)' }, { n: 2, text: 'comparar dois itens' }, { n: 3, text: 'indicar o passado' }, { n: 4, text: 'dar uma ordem' }], answer: 1, explanationPt: '〜し liga razões/qualidades (forma comum + し). {安|やす}いし、{近|ちか}いし. (Usado nas recomendações da Atividade 3.)' },
    { id: 'iro-e2-l12-16', number: 16, prompt: 'Numa フリマアプリ (app de brechó), quais são as duas formas de procurar um produto (ex.: 炊飯器)?', choices: [{ n: 1, text: '① digitar o nome do produto ({商品名|しょうひんめい}を{入力|にゅうりょく}) ou ② buscar por categoria (カテゴリー — ex.: {家電|かでん})' }, { n: 2, text: 'ligar para a loja ou ir pessoalmente' }, { n: 3, text: 'só por sorteio' }, { n: 4, text: 'perguntar a um amigo' }], answer: 1, explanationPt: 'フリマアプリ: ① {商品名|しょうひんめい}{検索|けんさく}, ② カテゴリー ({家電|かでん}・スマホ・カメラ etc.). (Seção 2)' },
    { id: 'iro-e2-l12-17', number: 17, prompt: 'Para refinar a busca (絞り込み) numa フリマアプリ, que critérios costumam aparecer?', choices: [{ n: 1, text: '{価格|かかく} (preço), {状態|じょうたい} (estado/condição) e {配送料|はいそうりょう} (frete)' }, { n: 2, text: 'cor, sabor e cheiro' }, { n: 3, text: 'idade e altura' }, { n: 4, text: 'dia e hora' }], answer: 1, explanationPt: '{絞|しぼ}り{込|こ}み = refinar busca por {価格|かかく}/{状態|じょうたい}/{配送料|はいそうりょう}. {状態|じょうたい}: {新品|しんぴん}/きれい. (Seção 2)' },
    { id: 'iro-e2-l12-18', number: 18, prompt: 'Numa tabela comparativa (比較表) de aspiradores, que itens se comparam?', image: `${IMG}/Z_12_1_05_soojiki.png`, imageAlt: 'aspirador comparado em tabela', choices: [{ n: 1, text: 'メーカー (fabricante), {値段|ねだん} (preço), {重|おも}さ (peso) e {機能|きのう}/{特徴|とくちょう} (funções) — para decidir qual é melhor' }, { n: 2, text: 'só a cor' }, { n: 3, text: 'só o nome da loja' }, { n: 4, text: 'a data de fabricação apenas' }], answer: 1, explanationPt: '{比較表|ひかくひょう}: メーカー, {値段|ねだん}, {重|おも}さ, {連続|れんぞく}{使用|しよう}/{充電|じゅうでん}, {機能|きのう}. Decidir com 〜のほうが{軽|かる}くて{使|つか}いやすい. (Seção 3)' },
    { id: 'iro-e2-l12-19', number: 19, prompt: '聴解 / etiqueta de preço: 「9,500{円|えん}（{税別|ぜいべつ}）」「{今週|こんしゅう}{限|かぎ}りの{特別|とくべつ}{価格|かかく}」 significam:', choices: [{ n: 1, text: '9.500 ienes (sem impostos / antes do imposto); preço especial só nesta semana.' }, { n: 2, text: '9.500 ienes com tudo incluído, válido sempre.' }, { n: 3, text: 'desconto de 9.500 ienes.' }, { n: 4, text: 'preço só para sócios.' }], answer: 1, explanationPt: '{税別|ぜいべつ} = preço antes do {消費税|しょうひぜい} (imposto); {今週|こんしゅう}{限|かぎ}り = só esta semana; {広告|こうこく}の{品|しな} = item em oferta. (Seção 1/3 · etiqueta)' },
    { id: 'iro-e2-l12-20', number: 20, prompt: 'O que esta ilustração mostra (loja grande de eletroeletrônicos)?', image: `${IMG}/Z_12_4_01_kadenryoohanten.png`, imageAlt: 'loja de departamentos de eletroeletrônicos', choices: [{ n: 1, text: '{家電量販店|かでんりょうはんてん}／{電気屋|でんきや} — loja de eletroeletrônicos (ex.: {国道沿|こくどうぞ}い = à beira da rodovia)' }, { n: 2, text: 'um supermercado' }, { n: 3, text: 'uma farmácia' }, { n: 4, text: 'um banco' }], answer: 1, explanationPt: '{電気屋|でんきや}/{家電量販店|かでんりょうはんてん} = loja de eletroeletrônicos. {国道沿|こくどうぞ}いにある, {開店|かいてん}したばかり. (Atividade 2/3)' },
    { id: 'iro-e2-l12-21', number: 21, prompt: 'Vocabulário de eletrodomésticos (家電): 「{冷蔵庫|れいぞうこ}／{洗濯機|せんたくき}／{炊飯器|すいはんき}／{扇風機|せんぷうき}／ドライヤー」 são:', choices: [{ n: 1, text: 'geladeira / máquina de lavar / panela de arroz / ventilador / secador de cabelo' }, { n: 2, text: 'micro-ondas / aspirador / chaleira / ar-condicionado / ferro' }, { n: 3, text: 'TV / computador / tablet / caixa de som / fones' }, { n: 4, text: 'fogão / pia / armário / cama / mesa' }], answer: 1, explanationPt: '{冷蔵庫|れいぞうこ}, {洗濯機|せんたくき}, {炊飯器|すいはんき}, {扇風機|せんぷうき}, ドライヤー (também: {掃除機|そうじき}, {電子|でんし}レンジ, ポット, アイロン, スピーカー, エアコン). (Atividade 1)' },
    { id: 'iro-e2-l12-22', number: 22, prompt: 'Vocabulário de compra: 「メーカー／{送料無料|そうりょうむりょう}／{状態|じょうたい}／{配送料|はいそうりょう}／{重|おも}さ」 significam:', choices: [{ n: 1, text: 'fabricante / frete grátis / estado (do produto) / taxa de entrega / peso' }, { n: 2, text: 'loja / desconto / cor / garantia / altura' }, { n: 3, text: 'modelo / parcela / tamanho / nota fiscal / largura' }, { n: 4, text: 'marca / troco / sabor / recibo / velocidade' }], answer: 1, explanationPt: 'メーカー (fabricante), {送料無料|そうりょうむりょう} (frete grátis), {状態|じょうたい} (estado), {配送料|はいそうりょう} (frete), {重|おも}さ (peso). Também: ワイヤレス, {充電|じゅうでん}, {連続|れんぞく}. (Atividades)' },
    { id: 'iro-e2-l12-23', number: 23, prompt: 'Os kanji 「{商品|しょうひん}／{値段|ねだん}／{価格|かかく}／{消費税|しょうひぜい}／{税別|ぜいべつ}」 lêem-se:', choices: [{ n: 1, text: 'しょうひん (produto) / ねだん (preço) / かかく (preço/valor) / しょうひぜい (imposto sobre consumo) / ぜいべつ (sem imposto)' }, { n: 2, text: 'しょうひん / ちだん / かかく / しょうひぜい / ぜいべつ' }, { n: 3, text: 'あきしな / ねだん / かかく / しょうひぜい / ぜいわけ' }, { n: 4, text: 'しょうひん / ねだん / かかく / きえひぜい / ぜいべつ' }], answer: 1, explanationPt: '{商品|しょうひん}, {値段|ねだん}, {価格|かかく}, {消費税|しょうひぜい}, {税別|ぜいべつ}. (漢字のことば)' },
    { id: 'iro-e2-l12-24', number: 24, prompt: 'Os kanji 「{店員|てんいん}／{親切|しんせつ}（な）／{重|おも}い／{軽|かる}い／{変|か}わる」 lêem-se:', choices: [{ n: 1, text: 'てんいん (vendedor) / しんせつ (atencioso) / おもい (pesado) / かるい (leve) / かわる (mudar)' }, { n: 2, text: 'てんいん / しんせつ / じゅうい / けいい / へんわる' }, { n: 3, text: 'みせいん / おやきり / おもい / かるい / かわる' }, { n: 4, text: 'てんいん / しんせつ / おもい / かるい / かえる' }], answer: 1, explanationPt: '{店員|てんいん}, {親切|しんせつ}（な), {重|おも}い, {軽|かる}い, {変|か}わる (ボタンを{押|お}すと{変|か}わる). (漢字のことば)' },
    { id: 'iro-e2-l12-25', number: 25, prompt: 'Resumo: para recomendar um produto a alguém, que estruturas a lição ensina?', choices: [{ n: 1, text: '〜のほうが{軽|かる}くて{使|つか}いやすいですよ／{音|おと}がいいし、{安|やす}いし (comparação + V-やすい + 〜し)' }, { n: 2, text: 'もう{終|お}わりましたか' }, { n: 3, text: '〜てはいけません' }, { n: 4, text: '〜たことがあります' }], answer: 1, explanationPt: 'Recomendar: comparar (Bのほうが〜), qualidade ({軽|かる}くて{使|つか}いやすい ❷), enumerar razões (〜し). (文法ノート ❷❸)' },
  ],
}

// Resumos das faixas de áudio da Lição 12 (situação + falas-chave citadas; não verbatim)
const L12_SCRIPTS: Record<string, ScriptItem[]> = {
  '12-08': [
    {
      label: '相談① — イヤホンを買いたい (12-08) · resumo',
      setupJa: '{買|か}いたい{電気製品|でんきせいひん}について、ほかの{人|ひと}に{相談|そうだん}しています。',
      setupPt: 'Resumo: a pessoa quer comprar fones de ouvido e pergunta qual é bom; recomendam o modelo sem fio da BOSAN, enumerando as razões.',
      lines: [
        { speaker: 'A', ja: 'イヤホンがほしいんですけど、{何|なに}がいいですか？', pt: 'Quero comprar fones de ouvido; qual é bom?' },
        { speaker: 'B', ja: '[BOSAN]のワイヤレスがいいですよ。{音|おと}がいいし、{耳|みみ}も{痛|いた}くならないし。', pt: 'O sem fio da BOSAN é bom. O som é ótimo e não machuca o ouvido.' },
      ],
    },
  ],
  '12-09': [
    {
      label: '相談② — 電子レンジをどこで買う (12-09) · resumo',
      setupPt: 'Resumo: a pessoa quer um micro-ondas e pergunta onde comprar; recomendam a loja de eletrônicos recém-inaugurada, porque tem muitos produtos e os vendedores são atenciosos.',
      lines: [
        { speaker: 'A', ja: '{電子|でんし}レンジがほしいんですけど、どこで{買|か}ったらいいですか？', pt: 'Quero um micro-ondas; onde é bom comprar?' },
        { speaker: 'B', ja: '{新|あたら}しくできた「○○デンキ」がいいですよ。{商品|しょうひん}が{多|おお}いし、{店員|てんいん}が{親切|しんせつ}だし。', pt: 'A «○○ Denki» que abriu há pouco é boa. Tem muitos produtos e os vendedores são atenciosos.' },
      ],
    },
  ],
}

const lesson12: Section = {
  id: 'lesson-12',
  level: 'elementary2',
  titleJa: '第12課 この掃除機は軽くて動かしやすいですよ',
  titlePt: 'Lição 12 — Este aspirador é leve e fácil de manusear',
  summaryPt:
    'Comprar bem · pedir conselho sobre o que comprar e onde (イヤホンがほしいんですけど、何がいいですか), usar um app de brechó (フリマ) para procurar eletrônicos (商品名検索／カテゴリー／絞り込み), ler tabela comparativa e etiquetas de preço (税別／今週限りの特別価格) e recomendar/decidir com comparação (セーシバのほうが軽くて動かしやすい).',
  studyNotes: [
    {
      title: 'Tópico: Comprar bem (上手な買い物)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Quando quer comprar algo, consultar alguém sobre o que comprar e onde.\n' +
        '- Usar um app/site de brechó (flea market) para comprar eletroeletrônicos e outros itens.\n' +
        '- Ler tabela comparativa e etiquetas de preço de eletroeletrônicos na loja e extrair informações.\n' +
        '- Ao comprar um eletroeletrônico, perguntar ao vendedor sobre o produto ou pedir desconto.\n\n' +
        '💡 電気製品/家電: {冷蔵庫|れいぞうこ}, {洗濯機|せんたくき}, {掃除機|そうじき}, {電子|でんし}レンジ, {炊飯器|すいはんき}, {扇風機|せんぷうき}, イヤホン, パソコン etc.',
    },
    {
      title: 'V-るまで、〜 (➊)',
      bodyPt:
        '**V(辞書形) + まで、〜** marca a duração **até** algo acontecer/terminar:\n\n' +
        '- `{手元|てもと}に{届|とど}くまで、2{日|か}しかかかりませんでした` (até chegar às minhas mãos, levou só 2 dias).\n' +
        '- `{終|お}わるまで{待|ま}ってください`.\n\n' +
        '🔧 Liga-se ao verbo na forma de dicionário. (文法ノート ❶)',
    },
    {
      title: 'V-やすい / V-にくい (➋)',
      bodyPt:
        '**V(radical ます) + やすい/にくい** = fácil / difícil de fazer:\n\n' +
        '- `{動|うご}かしやすい` (fácil de manusear), `{使|つか}いやすい`⇔`{使|つか}いにくい`, `{分|わ}かりやすい`⇔`{分|わ}かりにくい`.\n\n' +
        '💡 Liga-se com adjetivo て: `{軽|かる}くて{動|うご}かしやすい` (leve E fácil de manusear). (文法ノート ❷)',
    },
    {
      title: 'Comparação: N1よりN2のほうが〜 (➌)',
      bodyPt:
        'Para comparar dois itens:\n\n' +
        '- **Pergunta:** `AとBと、どちらが〜ですか？` (qual dos dois é mais ~?).\n' +
        '- **Resposta:** `(Aより) Bのほうが〜です` — `セーシバの{掃除機|そうじき}のほうが、スギシタより{軽|かる}くて{動|うご}かしやすいですよ`.\n\n' +
        '💡 Enumerar razões com **〜し、〜し**: `{音|おと}がいいし、{安|やす}いし`. (文法ノート ❸)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Eletro/家電:** {冷蔵庫|れいぞうこ}, {洗濯機|せんたくき}, {掃除機|そうじき}, {電子|でんし}レンジ, {炊飯器|すいはんき}, ポット, テレビ, パソコン, タブレット, スマホ, エアコン, イヤホン, {扇風機|せんぷうき}, ストーブ, ドライヤー, アイロン, スピーカー.\n\n' +
        '**Compra/comparação:** メーカー, ワイヤレス, {値段|ねだん}/{価格|かかく}, {重|おも}さ, {連続|れんぞく}, {充電|じゅうでん}, {機能|きのう}, {送料無料|そうりょうむりょう}, {状態|じょうたい}, {配送料|はいそうりょう}, {税別|ぜいべつ}, {広告|こうこく}の{品|しな}, フリマアプリ, {家電量販店|かでんりょうはんてん}/{電気屋|でんきや}, {国道沿|こくどうぞ}い, {絞|しぼ}り{込|こ}む.\n\n' +
        '**Kanji da lição:** {商品|しょうひん}, {値段|ねだん}, {価格|かかく}, {消費税|しょうひぜい}, {税別|ぜいべつ}, {店員|てんいん}, {親切|しんせつ}（な), {重|おも}い, {軽|かる}い, {変|か}わる.',
    },
  ],
  groups: [lesson12Group],
  audios: attachScripts(12, L12_SCRIPTS),
}

// ---- Lição 13: いろいろな資料を展示してあります (tópico さまざまなサービス) --------------
const lesson13Group: ExerciseGroup = {
  id: 'iro-e2-l13',
  title: 'いろいろな資料を展示してあります',
  subtitlePt: 'Ouvir e entender o que há num local e o que se pode fazer · entender explicações de uso de academia e locais públicos · perguntar regras na biblioteca · ler o guia de uso · entender placas',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l13-1', number: 1, prompt: 'O título 「いろいろな{資料|しりょう}を{展示|てんじ}して[[あります]]」 — 「V-てあります」 indica:', choices: [{ n: 1, text: 'estado resultante de algo feito de propósito (vários materiais estão expostos)' }, { n: 2, text: 'algo que está acontecendo agora' }, { n: 3, text: 'uma obrigação' }, { n: 4, text: 'algo que vai acontecer' }], answer: 1, translationPt: 'Há vários materiais expostos.', explanationPt: 'V-てある = estado resultante de uma ação proposital. {展示|てんじ}してある (está exposto), {置|お}いてある (está colocado). (文法ノート ❷)' },
    { id: 'iro-e2-l13-2', number: 2, prompt: 'Que local público esta ilustração mostra?', image: `${IMG}/Z_13_1_02_toshokan.png`, imageAlt: 'biblioteca com estantes de livros', choices: [{ n: 1, text: '{図書館|としょかん} — biblioteca' }, { n: 2, text: '{美術館|びじゅつかん} — museu de arte' }, { n: 3, text: '{体育館|たいいくかん} — ginásio' }, { n: 4, text: 'プール — piscina' }], answer: 1, explanationPt: '{図書館|としょかん} = biblioteca. {本|ほん}だけじゃなくて、CDやDVDもただで{借|か}りられる. (Atividade 1)' },
    { id: 'iro-e2-l13-3', number: 3, prompt: 'Que local esta ilustração mostra?', image: `${IMG}/Z_13_1_03_bijutsukan.png`, imageAlt: 'museu de arte com quadros nas paredes', choices: [{ n: 1, text: '{美術館|びじゅつかん} — museu de arte' }, { n: 2, text: '{図書館|としょかん} — biblioteca' }, { n: 3, text: '{体育館|たいいくかん} — ginásio' }, { n: 4, text: 'ホール — salão de eventos' }], answer: 1, explanationPt: '{美術館|びじゅつかん} = museu de arte ({絵|え}が{展示|てんじ}してある). (Atividade 1)' },
    { id: 'iro-e2-l13-4', number: 4, prompt: 'Que local esta ilustração mostra (objetos antigos expostos)?', image: `${IMG}/Z_13_1_04_minzokushiryookan.png`, imageAlt: 'museu de objetos folclóricos/etnográficos', choices: [{ n: 1, text: '{民族|みんぞく}{資料館|しりょうかん} — museu etnográfico (de materiais folclóricos)' }, { n: 2, text: '{図書館|としょかん} — biblioteca' }, { n: 3, text: 'プール — piscina' }, { n: 4, text: 'スポーツジム — academia' }], answer: 1, explanationPt: '{民族|みんぞく}{資料館|しりょうかん}: {昔|むかし}{使|つか}っていた{道具|どうぐ}など、いろいろな{資料|しりょう}を{展示|てんじ}してある. (Atividade 1)' },
    { id: 'iro-e2-l13-5', number: 5, prompt: 'Que local esta ilustração mostra?', image: `${IMG}/Z_13_1_05_taiikukan.png`, imageAlt: 'ginásio esportivo coberto', choices: [{ n: 1, text: '{体育館|たいいくかん} — ginásio esportivo' }, { n: 2, text: 'プール — piscina' }, { n: 3, text: '{美術館|びじゅつかん} — museu de arte' }, { n: 4, text: 'ホール — salão' }], answer: 1, explanationPt: '{体育館|たいいくかん} = ginásio (esportes em ambiente fechado). (Atividade 1)' },
    { id: 'iro-e2-l13-6', number: 6, prompt: 'Que local esta ilustração mostra?', image: `${IMG}/Z_13_1_06_supootsujimu.png`, imageAlt: 'academia de ginástica com aparelhos', choices: [{ n: 1, text: 'スポーツジム — academia de ginástica' }, { n: 2, text: '{図書館|としょかん} — biblioteca' }, { n: 3, text: '{入浴|にゅうよく}{施設|しせつ} — casa de banho' }, { n: 4, text: 'プラネタリウム — planetário' }], answer: 1, explanationPt: 'スポーツジム = academia. Regras de uso: {室内|しつない}のくつ、はじめての{人|ひと}はオリエンテーション. (Atividade 1 / Seção 2)' },
    { id: 'iro-e2-l13-7', number: 7, prompt: 'Que local esta ilustração mostra?', image: `${IMG}/Z_13_1_07_puuru.png`, imageAlt: 'piscina pública', choices: [{ n: 1, text: 'プール — piscina' }, { n: 2, text: '{入浴|にゅうよく}{施設|しせつ} — casa de banho (onsen)' }, { n: 3, text: '{体育館|たいいくかん} — ginásio' }, { n: 4, text: 'ホール — salão' }], answer: 1, explanationPt: 'プール = piscina. (Atividade 1)' },
    { id: 'iro-e2-l13-8', number: 8, prompt: 'Que local esta ilustração mostra (banho público)?', image: `${IMG}/Z_13_1_08_ofuro.png`, imageAlt: 'casa de banho público / onsen', choices: [{ n: 1, text: 'お{風呂|ふろ}／{入浴|にゅうよく}{施設|しせつ} — casa de banho público (onsen)' }, { n: 2, text: 'プール — piscina' }, { n: 3, text: '{図書館|としょかん} — biblioteca' }, { n: 4, text: '{美術館|びじゅつかん} — museu de arte' }], answer: 1, explanationPt: '{入浴|にゅうよく}{施設|しせつ}: お{風呂|ふろ}に{入|はい}るときは{別|べつ}の{券|けん}, タオル/シャンプーは{有料|ゆうりょう}, {休憩室|きゅうけいしつ}は{無料|むりょう}. (Seção 2, 13-09)' },
    { id: 'iro-e2-l13-9', number: 9, prompt: 'Que local esta ilustração mostra (projeção de estrelas)?', image: `${IMG}/Z_13_1_10_puranetariumu.png`, imageAlt: 'planetário', choices: [{ n: 1, text: 'プラネタリウム — planetário' }, { n: 2, text: '{美術館|びじゅつかん} — museu de arte' }, { n: 3, text: 'プール — piscina' }, { n: 4, text: 'インフォメーションコーナー — balcão de informações' }], answer: 1, explanationPt: 'プラネタリウム = planetário. Outros: ホール, {物産|ぶっさん}コーナー, インフォメーションコーナー. (Atividade 1)' },
    { id: 'iro-e2-l13-10', number: 10, prompt: '「この{建物|たてもの}は、2{年前|ねんまえ}に[[{建|た}てられました]]」 — essa forma (受身/passivo) é usada porque:', choices: [{ n: 1, text: 'o prédio é o sujeito (não importa quem o construiu): «o prédio foi construído há 2 anos»' }, { n: 2, text: 'a pessoa construiu o prédio ela mesma' }, { n: 3, text: 'é uma ordem' }, { n: 4, text: 'é algo que vai acontecer' }], answer: 1, explanationPt: 'Passivo 受身④ p/ coisas como sujeito: {建|た}てる→{建|た}てられる ({建物|たてもの}が{建|た}てられた), {作|つく}る→{作|つく}られる (1970{年|ねん}に{作|つく}られた{作品|さくひん}). (文法ノート ❶)' },
    { id: 'iro-e2-l13-11', number: 11, prompt: '「パンフレットが{置|お}いて[[あります]]」「{資料|しりょう}を{展示|てんじ}して[[あります]]」 — a diferença entre 「〜てある」 e 「〜ている」:', choices: [{ n: 1, text: '〜てある = estado resultante de algo feito DE PROPÓSITO por alguém (foi colocado/exposto e continua assim)' }, { n: 2, text: '〜てある indica uma ação em andamento' }, { n: 3, text: '〜てある indica o futuro' }, { n: 4, text: '〜てある é uma ordem' }], answer: 1, explanationPt: 'V-てある: alguém fez de propósito e o resultado permanece. {置|お}いてある, {展示|てんじ}してある, {書|か}いてある, {貼|は}ってある. (文法ノート ❷)' },
    { id: 'iro-e2-l13-12', number: 12, prompt: '「{本|ほん}[[だけじゃなくて]]、CDとか、DVDもただで{借|か}りられます」 — 「〜だけじゃなくて」 significa:', choices: [{ n: 1, text: 'não só ~ (mas também): não só livros, mas também CDs e DVDs' }, { n: 2, text: 'apenas ~ (e nada mais)' }, { n: 3, text: 'em vez de ~' }, { n: 4, text: 'por causa de ~' }], answer: 1, explanationPt: '〜だけじゃなくて、〜も = «não só ~, mas também ~». {本|ほん}だけじゃなくて、CD・DVDも. ただで = de graça. (文法ノート ❸)' },
    { id: 'iro-e2-l13-13', number: 13, prompt: '聴解 13-03 (さくらトピアの案内): Rick é levado pela colega Nogawa pela 文化施設. O que se diz sobre o local?', context: '{野川|のがわ}：この「さくらトピア」は、2{年前|ねんまえ}にできた{新|あたら}しい{施設|しせつ}なんです。…インフォメーションコーナーでは、{市内|しない}の{施設|しせつ}や{観光地|かんこうち}のパンフレットがもらえますよ。', choices: [{ n: 1, text: 'É uma instalação cultural nova (de 2 anos atrás); no balcão de informações dá para pegar folhetos de locais e pontos turísticos da cidade.' }, { n: 2, text: 'É um prédio muito antigo, prestes a fechar.' }, { n: 3, text: 'É uma loja de departamentos.' }, { n: 4, text: 'É um hospital.' }], answer: 1, explanationPt: 'さくらトピア = {文化施設|ぶんかしせつ}, 2{年前|ねんまえ}にできた; インフォメーションコーナーでパンフレットがもらえる. (聴解 13-03)' },
    { id: 'iro-e2-l13-14', number: 14, prompt: '聴解 13-03: o que se pode fazer na biblioteca da さくらトピア?', context: '{図書館|としょかん}には、{外国語|がいこくご}の{本|ほん}もあります。{本|ほん}だけじゃなくて、CDやDVDも、ただで{借|か}りられます。', choices: [{ n: 1, text: 'Há livros em língua estrangeira; e não só livros — CDs e DVDs também podem ser emprestados de graça.' }, { n: 2, text: 'Só se pode ler no local, nada é emprestado.' }, { n: 3, text: 'É preciso pagar para entrar.' }, { n: 4, text: 'Só há livros em japonês.' }], answer: 1, explanationPt: '{外国語|がいこくご}の{本|ほん}もある; {本|ほん}だけじゃなくてCD・DVDもただで{借|か}りられる (❸). (聴解 13-03)' },
    { id: 'iro-e2-l13-15', number: 15, prompt: '聴解 13-07 (スポーツジムの受付): que regra/orientação aparece para quem usa a academia pela 1ª vez?', context: 'はじめての{方|かた}には、オリエンテーションがあります。{室内|しつない}{用|よう}のくつが{必要|ひつよう}です。', choices: [{ n: 1, text: 'Quem usa pela primeira vez passa por uma orientação; é preciso ter um tênis de uso interno.' }, { n: 2, text: 'Pode entrar de qualquer calçado, sem regra.' }, { n: 3, text: 'A academia é só para sócios profissionais.' }, { n: 4, text: 'Não há limite de horário nem orientação.' }], answer: 1, explanationPt: 'ジム: はじめての{人|ひと}はオリエンテーション; {室内|しつない}{用|よう}のくつが{必要|ひつよう}; {料金|りょうきん}・{利用時間|りようじかん}の{規則|きそく}あり. (聴解 13-07)' },
    { id: 'iro-e2-l13-16', number: 16, prompt: '聴解 13-09 (入浴施設の受付): que regras de uso aparecem?', context: 'お{風呂|ふろ}に{入|はい}るときは、{別|べつ}の{券|けん}（チケット）を{買|か}ってください。タオルやシャンプーは{売店|ばいてん}で{販売|はんばい}しています。{休憩室|きゅうけいしつ}は{無料|むりょう}でご{利用|りよう}いただけます。', choices: [{ n: 1, text: 'Para o banho compra-se um bilhete à parte; toalha/xampu são vendidos (à parte); a sala de descanso é gratuita.' }, { n: 2, text: 'Tudo é gratuito, inclusive toalha e xampu.' }, { n: 3, text: 'Não se pode usar a sala de descanso.' }, { n: 4, text: 'É preciso reservar com 1 mês de antecedência.' }], answer: 1, explanationPt: '{入浴|にゅうよく}{施設|しせつ}: お{風呂|ふろ}は{別|べつ}の{券|けん}; タオル/シャンプーは{有料|ゆうりょう} ({売店|ばいてん}); {休憩室|きゅうけいしつ}は{無料|むりょう}. (聴解 13-09)' },
    { id: 'iro-e2-l13-17', number: 17, prompt: 'O que é necessário fazer para usar o computador/impressora da biblioteca (聴解 13-10)?', image: `${IMG}/Z_13_3_04_riyookaado.png`, imageAlt: 'cartão de usuário da biblioteca', choices: [{ n: 1, text: 'Fazer um {利用者|りようしゃ}カード (cartão de usuário) com nome, endereço e telefone; uso de até 60 min, impressão grátis até 10 folhas.' }, { n: 2, text: 'Pagar 600 ienes por hora.' }, { n: 3, text: 'Não é permitido usar computador na biblioteca.' }, { n: 4, text: 'Só professores podem usar.' }], answer: 1, explanationPt: '{利用者|りようしゃ}カードを{作|つく}る ({名前|なまえ}/{住所|じゅうしょ}/{電話番号|でんわばんごう}); インターネット・プリンターが{無料|むりょう}; 1{人|り}60{分|ぷん}まで; プリントアウトは10{枚|まい}まで{無料|むりょう}. (聴解 13-10)' },
    { id: 'iro-e2-l13-18', number: 18, prompt: 'Vocabulário de locais públicos: 「{図書館|としょかん}／{美術館|びじゅつかん}／{民族|みんぞく}{資料館|しりょうかん}／{体育館|たいいくかん}／{入浴|にゅうよく}{施設|しせつ}」 são:', choices: [{ n: 1, text: 'biblioteca / museu de arte / museu etnográfico / ginásio esportivo / casa de banho' }, { n: 2, text: 'livraria / cinema / zoológico / estádio / piscina' }, { n: 3, text: 'escola / teatro / aquário / academia / sauna' }, { n: 4, text: 'prefeitura / galeria / planetário / quadra / spa' }], answer: 1, explanationPt: '{図書館|としょかん}, {美術館|びじゅつかん}, {民族|みんぞく}{資料館|しりょうかん}, {体育館|たいいくかん}, {入浴|にゅうよく}{施設|しせつ} (também ホール, スポーツジム, プール, プラネタリウム, {物産|ぶっさん}コーナー). (Atividade 1)' },
    { id: 'iro-e2-l13-19', number: 19, prompt: 'Vocabulário de uso de serviços: 「{料金|りょうきん}／{利用|りよう}する／{規則|きそく}／{無料|むりょう}／{展示|てんじ}する」 significam:', choices: [{ n: 1, text: 'tarifa/preço / utilizar / regra / gratuito / expor (em exposição)' }, { n: 2, text: 'desconto / reservar / horário / pago / vender' }, { n: 3, text: 'multa / alugar / mapa / caro / guardar' }, { n: 4, text: 'recibo / devolver / fila / barato / consertar' }], answer: 1, explanationPt: '{料金|りょうきん} (tarifa), {利用|りよう}する (usar), {規則|きそく} (regra), {無料|むりょう} (grátis), {展示|てんじ}する (expor). Também: {自由|じゆう}に, {建|た}てる, {歴史|れきし}. (Atividades)' },
    { id: 'iro-e2-l13-20', number: 20, prompt: 'Os kanji 「{市|し}／{料金|りょうきん}／{図書館|としょかん}／{道具|どうぐ}／{必要|ひつよう}（な)」 lêem-se:', choices: [{ n: 1, text: 'し (cidade/município) / りょうきん (tarifa) / としょかん (biblioteca) / どうぐ (instrumento/utensílio) / ひつよう (necessário)' }, { n: 2, text: 'いち / りょうきん / としょかん / みちぐ / ひつよう' }, { n: 3, text: 'し / りょうごん / ずしょかん / どうぐ / ひっよう' }, { n: 4, text: 'し / りょうきん / としょかん / どうぐ / ひすよう' }], answer: 1, explanationPt: '{市|し}, {料金|りょうきん}, {図書館|としょかん}, {道具|どうぐ}, {必要|ひつよう}（な). (漢字のことば)' },
    { id: 'iro-e2-l13-21', number: 21, prompt: 'Os kanji 「{借|か}りる／{返|かえ}す／{開|あ}く／{閉|し}まる／{利用|りよう}する」 lêem-se:', choices: [{ n: 1, text: 'かりる (pegar emprestado) / かえす (devolver) / あく (abrir) / しまる (fechar) / りようする (utilizar)' }, { n: 2, text: 'かりる / かえす / ひらく / とじる / りようする' }, { n: 3, text: 'しゃくる / へんす / あく / しまる / りようする' }, { n: 4, text: 'かりる / かえす / あく / しまる / さようする' }], answer: 1, explanationPt: '{借|か}りる (emprestar-se), {返|かえ}す (devolver), {開|あ}く (abrir), {閉|し}まる (fechar — {夜|よる}8{時|じ}に{閉|し}まる), {利用|りよう}する. (漢字のことば)' },
    { id: 'iro-e2-l13-22', number: 22, prompt: 'Resumo: para descrever o que há e o que se pode fazer num local público, a lição usa:', choices: [{ n: 1, text: '〜が{展示|てんじ}してあります／〜が{置|お}いてあります (estado), 〜が{建|た}てられました (passivo), 〜だけじゃなくて〜も' }, { n: 2, text: 'もう{始|はじ}まりましたか' }, { n: 3, text: '〜てみてもいいですか' }, { n: 4, text: '〜なくちゃならない' }], answer: 1, explanationPt: 'Descrever local/serviço: V-てある (❷) + 受身 ({建|た}てられた ❶) + 〜だけじゃなくて (❸). (文法ノート ❶❷❸)' },
  ],
}

// Resumos das faixas de áudio da Lição 13 (situação + falas-chave citadas; não verbatim)
const L13_SCRIPTS: Record<string, ScriptItem[]> = {
  '13-03': [
    {
      label: '会話 — 文化施設「さくらトピア」の案内 (13-03) · resumo',
      setupJa: 'リックさんが、{同僚|どうりょう}の{野川|のがわ}さんに、{市|し}の{文化施設|ぶんかしせつ}「さくらトピア」を{案内|あんない}してもらっています。',
      setupPt: 'Resumo: Nogawa mostra a Rick o centro cultural «Sakura Topia» (novo, de 2 anos atrás) e explica o que há em cada andar: balcão de informações, biblioteca (livros, CDs e DVDs grátis) e museu etnográfico.',
      lines: [
        { speaker: '野川', ja: 'この「さくらトピア」は、2{年前|ねんまえ}にできた{新|あたら}しい{施設|しせつ}なんです。', pt: 'Este «Sakura Topia» é uma instalação nova, de 2 anos atrás.' },
        { speaker: '野川', ja: '{本|ほん}だけじゃなくて、CDやDVDも、ただで{借|か}りられますよ。', pt: 'Não só livros — CDs e DVDs também podem ser emprestados de graça.' },
      ],
    },
  ],
  '13-07': [
    {
      label: '① スポーツジムの利用説明 (13-07) · resumo',
      setupJa: '{公共|こうきょう}{施設|しせつ}を、はじめて{利用|りよう}する{人|ひと}が、{利用方法|りようほうほう}の{説明|せつめい}を{聞|き}いています。',
      setupPt: 'Resumo: explicação de como usar a academia a quem vai pela primeira vez — passa por uma orientação e precisa de tênis de uso interno.',
      lines: [
        { speaker: '係', ja: 'はじめての{方|かた}には、オリエンテーションがあります。{室内|しつない}{用|よう}のくつが{必要|ひつよう}です。', pt: 'Quem vem pela primeira vez passa por uma orientação. É preciso ter um tênis de uso interno.' },
      ],
    },
  ],
  '13-09': [
    {
      label: '③ 入浴施設の受付 (13-09) · resumo',
      setupPt: 'Resumo: na casa de banho, o banho exige um bilhete à parte; toalha e xampu são vendidos no quiosque; a sala de descanso é gratuita.',
      lines: [
        { speaker: '係', ja: 'お{風呂|ふろ}に{入|はい}るときは、{別|べつ}の{券|けん}を{買|か}ってください。{休憩室|きゅうけいしつ}は{無料|むりょう}でご{利用|りよう}いただけます。', pt: 'Para entrar no banho, compre um bilhete à parte. A sala de descanso é de uso gratuito.' },
      ],
    },
  ],
  '13-10': [
    {
      label: '④ 図書館の利用者カード (13-10) · resumo',
      setupPt: 'Resumo: para usar internet e impressora da biblioteca, faz-se um cartão de usuário (nome, endereço, telefone); uso livre de até 60 min, impressão grátis até 10 folhas.',
      lines: [
        { speaker: '係', ja: 'インターネットとプリンターが{無料|むりょう}で{使|つか}えます。まず{利用者|りようしゃ}カードを{作|つく}りますので、お{名前|なまえ}やご{住所|じゅうしょ}を{書|か}いてください。', pt: 'Internet e impressora são de uso gratuito. Primeiro vamos fazer um cartão de usuário, então escreva seu nome e endereço.' },
        { speaker: '係', ja: '1{人|り}60{分|ぷん}までお{使|つか}いください。プリントアウトは{無料|むりょう}ですが、1{人|り}10{枚|まい}までとなっています。', pt: 'Use por até 60 minutos por pessoa. A impressão é gratuita, mas até 10 folhas por pessoa.' },
      ],
    },
  ],
}

const lesson13: Section = {
  id: 'lesson-13',
  level: 'elementary2',
  titleJa: '第13課 いろいろな資料を展示してあります',
  titlePt: 'Lição 13 — Há vários materiais expostos',
  summaryPt:
    'Serviços diversos · ao ser guiado por um local, entender o que há ali e o que se pode fazer (2年前にできた／本だけじゃなくてCDも借りられる), entender explicações de uso de academia e locais públicos (はじめての方にはオリエンテーション), perguntar regras na biblioteca (利用者カード／60分まで) e entender placas e o guia de uso.',
  studyNotes: [
    {
      title: 'Tópico: Serviços diversos (さまざまなサービス)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ao ser guiado por um local, ouvir e entender o que há ali e o que se pode fazer.\n' +
        '- Ouvir e entender explicações de como usar a academia e outros locais públicos.\n' +
        '- Na biblioteca, perguntar sobre uso e regras e entender as respostas.\n' +
        '- Ler o guia de uso da biblioteca em japonês simples para estrangeiros e entender.\n' +
        '- Ver e entender placas como “proibido fotografar” em estabelecimentos.\n\n' +
        '💡 公共施設: ホール, {図書館|としょかん}, {美術館|びじゅつかん}, {民族|みんぞく}{資料館|しりょうかん}, {体育館|たいいくかん}, スポーツジム, プール, {入浴|にゅうよく}{施設|しせつ}, プラネタリウム.',
    },
    {
      title: 'Passivo 受身④ — coisas como sujeito (➊)',
      bodyPt:
        'Quando a **coisa** é o sujeito (não importa quem fez), usa-se o passivo:\n\n' +
        '- `この{建物|たてもの}は、2{年前|ねんまえ}に{建|た}てられました` (este prédio foi construído há 2 anos).\n' +
        '- `この{作品|さくひん}は、1970{年|ねん}に{作|つく}られました`, `{昔|むかし}から{使|つか}われています`.\n\n' +
        '🔧 {建|た}てる→{建|た}てられる, {作|つく}る→{作|つく}られる, {使|つか}う→{使|つか}われる. (文法ノート ❶)',
    },
    {
      title: 'V-てある — estado resultante (➋)',
      bodyPt:
        '**V-てある** descreve o **estado** deixado por uma ação proposital:\n\n' +
        '- `{資料|しりょう}が{展示|てんじ}してあります` (os materiais estão expostos), `パンフレットが{置|お}いてあります`, `{紙|かみ}に{書|か}いてあります`.\n\n' +
        '⚠️ V-てある (alguém preparou, e fica assim) ≠ V-ている (em andamento) e ≠ passivo. (文法ノート ❷)',
    },
    {
      title: '〜だけじゃなくて — não só ~ (➌)',
      bodyPt:
        '**〜だけじゃなくて、〜も** = “não só ~, mas também ~”:\n\n' +
        '- `{本|ほん}だけじゃなくて、CDとか、DVDも、ただで{借|か}りられます`.\n' +
        '- `{日本人|にほんじん}だけじゃなくて、{外国人|がいこくじん}も{利用|りよう}できます`.\n\n' +
        '💡 ただ／{無料|むりょう} = de graça. (文法ノート ❸)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Locais:** ホール, {図書館|としょかん}, {美術館|びじゅつかん}, {民族|みんぞく}{資料館|しりょうかん}, {体育館|たいいくかん}, スポーツジム, プール, {入浴|にゅうよく}{施設|しせつ}, インフォメーションコーナー, プラネタリウム, {物産|ぶっさん}コーナー.\n\n' +
        '**Uso/regras:** {利用|りよう}する, {利用者|りようしゃ}カード, {料金|りょうきん}, {規則|きそく}, {無料|むりょう}/{有料|ゆうりょう}, {自由|じゆう}に, オリエンテーション, {展示|てんじ}する, {借|か}りる/{返|かえ}す, {休憩室|きゅうけいしつ}, {歴史|れきし}, {建|た}てる.\n\n' +
        '**Kanji da lição:** {市|し}, {料金|りょうきん}, {図書館|としょかん}, {道具|どうぐ}, 〜{点|てん}, {必要|ひつよう}（な), {借|か}りる, {返|かえ}す, {開|あ}く, {閉|し}まる, {利用|りよう}する.',
    },
  ],
  groups: [lesson13Group],
  audios: attachScripts(13, L13_SCRIPTS),
}

// ---- Lição 14: 前髪は、もう少し短く切ってもらえますか？ (tópico さまざまなサービス) --------------
const lesson14Group: ExerciseGroup = {
  id: 'iro-e2-l14',
  title: '前髪は、もう少し短く切ってもらえますか？',
  subtitlePt: 'Usar serviços (entrega, lavanderia, banco) e entender como funcionam · no salão/barbearia, dizer o corte que quer · conhecer serviços para estrangeiros',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l14-1', number: 1, prompt: 'O título 「{前髪|まえがみ}は、もう{少|すこ}し{短|みじか}く{切|き}って[[もらえますか]]？」 — 「V-てもらえますか」 serve para:', choices: [{ n: 1, text: 'pedir educadamente um serviço/favor (pode cortar a franja um pouco mais curta?)' }, { n: 2, text: 'oferecer ajuda a alguém' }, { n: 3, text: 'recusar um pedido' }, { n: 4, text: 'descrever o passado' }], answer: 1, translationPt: 'Pode cortar a franja um pouco mais curta?', explanationPt: 'V-てもらえますか/もらえませんか = pedido educado de serviço. {切|き}ってもらえますか, {直|なお}してもらえますか. (Atividade · 美容院)' },
    { id: 'iro-e2-l14-2', number: 2, prompt: 'Que serviço/loja esta ilustração mostra?', image: `${IMG}/Z_14_1_06_kuriininguten.png`, imageAlt: 'lavanderia / tinturaria (dry cleaner)', choices: [{ n: 1, text: 'クリーニング{店|てん} — lavanderia/tinturaria (dry cleaner)' }, { n: 2, text: 'コインランドリー — lavanderia self-service' }, { n: 3, text: '{美容院|びよういん} — salão de beleza' }, { n: 4, text: '{銀行|ぎんこう} — banco' }], answer: 1, explanationPt: 'クリーニング{店|てん} = tinturaria. シミ (mancha), シミ{抜|ぬ}き (tirar mancha, {別料金|べつりょうきん}). (Atividade 1 · 会話1)' },
    { id: 'iro-e2-l14-3', number: 3, prompt: 'Que serviço/loja esta ilustração mostra?', image: `${IMG}/Z_14_1_07_koinrandorii.png`, imageAlt: 'lavanderia self-service com máquinas', choices: [{ n: 1, text: 'コインランドリー — lavanderia self-service' }, { n: 2, text: 'クリーニング{店|てん} — tinturaria' }, { n: 3, text: '{銀行|ぎんこう} — banco' }, { n: 4, text: '{郵便局|ゆうびんきょく} — correio' }], answer: 1, explanationPt: 'コインランドリー = lavanderia self-service (com máquinas a fichas). (Atividade 1)' },
    { id: 'iro-e2-l14-4', number: 4, prompt: 'Que serviço/loja esta ilustração mostra?', image: `${IMG}/Z_14_1_05_biyooin.png`, imageAlt: 'salão de beleza (cabeleireiro)', choices: [{ n: 1, text: '{美容院|びよういん} — salão de beleza' }, { n: 2, text: '{理髪店|りはつてん}／{床屋|とこや} — barbearia' }, { n: 3, text: 'クリーニング{店|てん} — tinturaria' }, { n: 4, text: '{病院|びょういん} — hospital' }], answer: 1, explanationPt: '{美容院|びよういん} = salão de beleza ({理髪店|りはつてん}/{床屋|とこや} = barbearia). カット, シャンプー, パーマ, カラー. (Atividade 1 · Seção 3)' },
    { id: 'iro-e2-l14-5', number: 5, prompt: 'Que serviço/loja esta ilustração mostra?', image: `${IMG}/Z_14_1_04_rihatsuten.png`, imageAlt: 'barbearia com cadeira e poste listrado', choices: [{ n: 1, text: '{理髪店|りはつてん}／{床屋|とこや} — barbearia' }, { n: 2, text: '{美容院|びよういん} — salão de beleza' }, { n: 3, text: '{銀行|ぎんこう} — banco' }, { n: 4, text: '{自転車店|じてんしゃてん} — bicicletaria' }], answer: 1, explanationPt: '{理髪店|りはつてん}/{床屋|とこや} = barbearia (バリカン, ひげ{剃|そ}り). (Atividade 1 · Seção 3)' },
    { id: 'iro-e2-l14-6', number: 6, prompt: 'Que serviço/loja esta ilustração mostra?', image: `${IMG}/Z_14_1_09_jitenshaten.png`, imageAlt: 'bicicletaria (loja de conserto de bicicletas)', choices: [{ n: 1, text: '{自転車店|じてんしゃてん} — bicicletaria (conserto de bicicleta)' }, { n: 2, text: '{中古車店|ちゅうこしゃてん} — loja de carros usados' }, { n: 3, text: 'クリーニング{店|てん} — tinturaria' }, { n: 4, text: '{銀行|ぎんこう} — banco' }], answer: 1, explanationPt: '{自転車店|じてんしゃてん}: {空気|くうき}を{入|い}れる, タイヤ, {油|あぶら}を{差|さ}す. (Atividade 1 · 会話2)' },
    { id: 'iro-e2-l14-7', number: 7, prompt: 'Que serviço esta ilustração mostra (entrega de encomendas)?', image: `${IMG}/Z_14_1_15_takuhaibin.png`, imageAlt: 'serviço de entrega de encomendas (takkyūbin)', choices: [{ n: 1, text: '{宅配便|たくはいびん} — serviço de entrega de encomendas' }, { n: 2, text: '{郵便局|ゆうびんきょく} — correio' }, { n: 3, text: '{銀行|ぎんこう} — banco' }, { n: 4, text: 'コインランドリー — lavanderia' }], answer: 1, explanationPt: '{宅配便|たくはいびん} = entrega de encomendas. {着払|ちゃくばら}い (paga quem recebe) / {元払|もとばら}い (paga quem envia), {伝票|でんぴょう}, お{届|とど}け{先|さき}. (Atividade 1 · 会話3)' },
    { id: 'iro-e2-l14-8', number: 8, prompt: 'Que serviço/loja esta ilustração mostra?', image: `${IMG}/Z_14_1_01_ginkoo.png`, imageAlt: 'banco (caixa eletrônico/ATM)', choices: [{ n: 1, text: '{銀行|ぎんこう} — banco (ATM)' }, { n: 2, text: '{郵便局|ゆうびんきょく} — correio' }, { n: 3, text: '{美容院|びよういん} — salão de beleza' }, { n: 4, text: '{図書館|としょかん} — biblioteca' }], answer: 1, explanationPt: '{銀行|ぎんこう}のATM: お{引|ひ}き{出|だ}し (saque), キャッシュカード, {暗証番号|あんしょうばんごう} (senha), {金額|きんがく}, {両替|りょうがえ}. (Atividade 1 · 会話4)' },
    { id: 'iro-e2-l14-9', number: 9, prompt: '聴解 14-02 (クリーニング店): o que a atendente recomenda para a calça com mancha?', context: '{店員|てんいん}：このシミは、{普通|ふつう}のクリーニングでは{落|お}ちないので、シミ{抜|ぬ}きをおすすめします。シミ{抜|ぬ}きは{別料金|べつりょうきん}になります。', choices: [{ n: 1, text: 'Recomenda a remoção de mancha (シミ抜き), que tem cobrança à parte (別料金).' }, { n: 2, text: 'Recomenda jogar a calça fora.' }, { n: 3, text: 'Diz que não há nada a fazer.' }, { n: 4, text: 'Recomenda lavar em casa.' }], answer: 1, explanationPt: 'シミは{普通|ふつう}のクリーニングでは{落|お}ちない→シミ{抜|ぬ}き ({別料金|べつりょうきん}); お{渡|わた}し (entrega) em alguns dias. (聴解 14-02)' },
    { id: 'iro-e2-l14-10', number: 10, prompt: '聴解 14-03 (自転車店): a pessoa veio encher o pneu; o que o dono faz “de quebra” (ついでに)?', context: '{店員|てんいん}：{空気|くうき}を{入|い}れますね。ついでに、{油|あぶら}を{差|さ}しておきましょうか。', choices: [{ n: 1, text: 'Enche o pneu de ar e, de quebra, lubrifica (油を差す) a bicicleta.' }, { n: 2, text: 'Vende uma bicicleta nova.' }, { n: 3, text: 'Cobra uma taxa alta pelo ar.' }, { n: 4, text: 'Recusa o serviço.' }], answer: 1, explanationPt: '{空気|くうき}を{入|い}れる + ついでに{油|あぶら}を{差|さ}す (de quebra). タイヤ, キャップ, はずす. (聴解 14-03)' },
    { id: 'iro-e2-l14-11', number: 11, prompt: '聴解 14-04 (宅配便): qual a diferença entre 着払い e 元払い ao enviar uma encomenda?', context: '{店員|てんいん}：お{支払|しはら}いは、{着払|ちゃくばら}いと{元払|もとばら}いのどちらにしますか？', choices: [{ n: 1, text: '着払い = quem recebe paga; 元払い = quem envia paga (na hora).' }, { n: 2, text: '着払い = mais caro; 元払い = grátis.' }, { n: 3, text: 'São a mesma coisa.' }, { n: 4, text: '着払い = só para o exterior.' }], answer: 1, explanationPt: '{着払|ちゃくばら}い (paga o destinatário) vs {元払|もとばら}い (paga o remetente); {午前中|ごぜんちゅう} etc. p/ horário; お{預|あず}かりします. (聴解 14-04)' },
    { id: 'iro-e2-l14-12', number: 12, prompt: '聴解 14-05 (ATM): que passos aparecem para sacar dinheiro?', context: '「お{引|ひ}き{出|だ}し」をタッチ→キャッシュカードを{入|い}れる→{暗証番号|あんしょうばんごう}（4{桁|けた}）を{入力|にゅうりょく}する→{金額|きんがく}を{入|い}れる。', choices: [{ n: 1, text: 'Tocar em «saque», inserir o cartão, digitar a senha (4 dígitos) e o valor.' }, { n: 2, text: 'Só inserir o cartão e pronto.' }, { n: 3, text: 'Falar com o caixa humano.' }, { n: 4, text: 'Digitar nome e endereço.' }], answer: 1, explanationPt: 'ATM: お{引|ひ}き{出|だ}し→キャッシュカード→{暗証番号|あんしょうばんごう}4{桁|けた}{入力|にゅうりょく}→{金額|きんがく}; {利用明細|りようめいさい} (extrato), {両替|りょうがえ}. (聴解 14-05)' },
    { id: 'iro-e2-l14-13', number: 13, prompt: 'Você recebeu um aviso de ausência (不在連絡票) do 宅配便. Que formas há para pedir a reentrega (再配達)?', choices: [{ n: 1, text: 'ir ao correio buscar, preencher o papel e pôr no correio, pela internet, por telefone — escolhendo onde/quando receber (自宅/勤め先)' }, { n: 2, text: 'só esperar; não dá para fazer nada' }, { n: 3, text: 'pagar uma multa na loja' }, { n: 4, text: 'devolver a encomenda ao remetente' }], answer: 1, explanationPt: '{再配達|さいはいたつ}: {郵便局|ゆうびんきょく}で{受|う}け{取|と}る／{紙|かみ}をポストに／インターネット／{電話|でんわ}. {不在|ふざい}, お{勤|つと}め{先|さき} (trabalho). (Seção 2)' },
    { id: 'iro-e2-l14-14', number: 14, prompt: '聴解 14-07 (美容院): como o cliente diz o corte que quer?', context: '{客|きゃく}：ボリュームを{少|すく}なくして、{長|なが}さも{少|すこ}し{短|みじか}くしてください。…{上|うえ}は3cmぐらい、まわりは5mmぐらいにしてください。', choices: [{ n: 1, text: 'Pede para reduzir o volume e deixar um pouco mais curto: ~3 cm em cima e ~5 mm nas laterais.' }, { n: 2, text: 'Pede para deixar bem comprido.' }, { n: 3, text: 'Pede para pintar de loiro.' }, { n: 4, text: 'Pede só lavagem, sem corte.' }], answer: 1, explanationPt: 'Salão: ボリュームを{少|すく}なくして、{短|みじか}くして; {上|うえ}は3cm、まわりは5mmにして; こんな{感|かん}じに. (聴解 14-07)' },
    { id: 'iro-e2-l14-15', number: 15, prompt: '「{全体的|ぜんたいてき}に{短|みじか}[[く]]{切|き}ってください」「まわりは5mm[[に]]してください」 — para dizer COMO fazer algo, usa-se:', choices: [{ n: 1, text: 'い-adj → 〜く + V; な-adj/N → 〜に + する/V (cortar curto / deixar em 5 mm)' }, { n: 2, text: '〜たり〜たりする' }, { n: 3, text: '〜てしまう' }, { n: 4, text: '〜かもしれない' }], answer: 1, explanationPt: 'A-く + V: {短|みじか}く{切|き}る, {少|すく}なくする; N/なA-に + する: 5mmにする, きれいにする. (文法ノート ❶)' },
    { id: 'iro-e2-l14-16', number: 16, prompt: 'Para pedir um corte específico ao cabeleireiro, o padrão central da lição é:', choices: [{ n: 1, text: '〜く／〜に + {切|き}ってもらえますか／してください (短く切ってもらえますか／5mmにしてください)' }, { n: 2, text: '〜はもう{始|はじ}まりましたか' }, { n: 3, text: '〜を{盗|ぬす}まれました' }, { n: 4, text: '〜たことがあります' }], answer: 1, explanationPt: 'Pedido de corte: A-く/N-に + {切|き}ってもらえますか／してください. (Atividade 2 · 希望を伝える)' },
    { id: 'iro-e2-l14-17', number: 17, prompt: '「{外国|がいこく}の{方|かた}[[のために]]、いろいろなサービスがあります」 — 「N のために、〜」 significa:', choices: [{ n: 1, text: 'para (o benefício de) ~: há vários serviços para os estrangeiros' }, { n: 2, text: 'por causa de ~ (culpa de)' }, { n: 3, text: 'em vez de ~' }, { n: 4, text: 'apesar de ~' }], answer: 1, explanationPt: 'N のために = «para (o bem de) ~». {外国|がいこく}の{方|かた}のために, {家族|かぞく}のために, {健康|けんこう}のために. (文法ノート ❷)' },
    { id: 'iro-e2-l14-18', number: 18, prompt: '聴解 14-13 (外国の方のためのサービス): que tipos de serviço para estrangeiros são apresentados?', image: `${IMG}/Z_14_4_01_gaikokugo-soodan.png`, imageAlt: 'balcão de consulta em língua estrangeira', choices: [{ n: 1, text: 'consulta em língua estrangeira (外国語相談), intérprete no hospital (通訳), guia de vida e aulas de japonês (日本語教室)' }, { n: 2, text: 'só serviços de táxi' }, { n: 3, text: 'só venda de comida' }, { n: 4, text: 'só serviços bancários' }], answer: 1, explanationPt: '{外国|がいこく}の{方|かた}のために: {外国語|がいこくご}{相談|そうだん} ({無料|むりょう}), {病院|びょういん}の{通訳|つうやく}, {生活|せいかつ}ガイドブック, {日本語|にほんご}{教室|きょうしつ}. (聴解 14-13)' },
    { id: 'iro-e2-l14-19', number: 19, prompt: 'Vocabulário de serviços: 「{宅配便|たくはいびん}／{着払|ちゃくばら}い／{暗証番号|あんしょうばんごう}／{再配達|さいはいたつ}／{両替|りょうがえ}」 significam:', choices: [{ n: 1, text: 'entrega de encomendas / pagamento na entrega / senha (PIN) / reentrega / troca de dinheiro (trocar nota)' }, { n: 2, text: 'correio / desconto / número de série / devolução / câmbio de moeda estrangeira' }, { n: 3, text: 'táxi / gorjeta / código de barras / cancelamento / saque' }, { n: 4, text: 'mudança / parcela / RG / entrega expressa / depósito' }], answer: 1, explanationPt: '{宅配便|たくはいびん}, {着払|ちゃくばら}い, {暗証番号|あんしょうばんごう}, {再配達|さいはいたつ}, {両替|りょうがえ}. Também: シミ{抜|ぬ}き, {空気入|くうきい}れ, {利用明細|りようめいさい}, {不在|ふざい}. (Atividades)' },
    { id: 'iro-e2-l14-20', number: 20, prompt: 'Vocabulário do salão: 「{前髪|まえがみ}／{長|なが}さ／{全体的|ぜんたいてき}に／バリカン／シャンプー{台|だい}」 significam:', choices: [{ n: 1, text: 'franja / comprimento / no geral (de modo geral) / máquina de cortar cabelo / lavatório (do salão)' }, { n: 2, text: 'pente / cor / às vezes / secador / espelho' }, { n: 3, text: 'cabelo / peso / nunca / tesoura / cadeira' }, { n: 4, text: 'barba / largura / sempre / pincel / toalha' }], answer: 1, explanationPt: '{前髪|まえがみ} (franja), {長|なが}さ (comprimento), {全体的|ぜんたいてき}に (no geral), バリカン (máquina), シャンプー{台|だい} (lavatório). Também: {鏡|かがみ}, ひげ{剃|そ}り, こんな{感|かん}じ. (Seção 3)' },
    { id: 'iro-e2-l14-21', number: 21, prompt: 'Os kanji 「{外国|がいこく}／{情報|じょうほう}／{相談|そうだん}／{質問|しつもん}／{窓口|まどぐち}」 lêem-se:', choices: [{ n: 1, text: 'がいこく (exterior/estrangeiro) / じょうほう (informação) / そうだん (consulta) / しつもん (pergunta) / まどぐち (guichê/balcão)' }, { n: 2, text: 'がいこく / じょうほう / そうだん / しつもん / そうこう' }, { n: 3, text: 'そとくに / じょうほう / あいだん / しつもん / まどぐち' }, { n: 4, text: 'がいこく / せいほう / そうだん / しちもん / まどぐち' }], answer: 1, explanationPt: '{外国|がいこく}, {情報|じょうほう}, {相談|そうだん}, {質問|しつもん}, {窓口|まどぐち} (10{番|ばん}の{窓口|まどぐち}). (漢字のことば)' },
    { id: 'iro-e2-l14-22', number: 22, prompt: 'Os kanji 「{郵便局|ゆうびんきょく}／{近所|きんじょ}／{自動|じどう}／{洗|あら}う／{入力|にゅうりょく}する」 lêem-se:', choices: [{ n: 1, text: 'ゆうびんきょく (correio) / きんじょ (vizinhança) / じどう (automático) / あらう (lavar) / にゅうりょくする (digitar/inserir)' }, { n: 2, text: 'ゆうびんきょく / きんじょ / じどう / せんう / にゅうりょくする' }, { n: 3, text: 'ゆうびんきょく / ちかじょ / じどう / あらう / いりりょくする' }, { n: 4, text: 'ゆうびんつぼね / きんじょ / みずどう / あらう / にゅうりょく' }], answer: 1, explanationPt: '{郵便局|ゆうびんきょく}, {近所|きんじょ}, {自動|じどう} ({自動|じどう}で{出|で}る), {洗|あら}う ({髪|かみ}を{洗|あら}う), {入力|にゅうりょく}する. (漢字のことば)' },
    { id: 'iro-e2-l14-23', number: 23, prompt: 'Resumo: nesta lição, para usar serviços e fazer pedidos, aprende-se principalmente:', choices: [{ n: 1, text: 'V-てもらえますか (pedir serviço), A-く/N-に + V (短く切る), N のために (para estrangeiros etc.)' }, { n: 2, text: '〜たら / 受身 / かもしれない' }, { n: 3, text: '〜んです / しか / だけ' }, { n: 4, text: '〜てある / だけじゃなくて' }], answer: 1, explanationPt: 'Núcleo da L14: pedir serviços (V-てもらえますか), instruir como fazer (A-く/N-に+V ❶) e serviços «para ~» (Nのために ❷).' },
  ],
}

// Resumos das faixas de áudio da Lição 14 (situação + falas-chave citadas; não verbatim)
const L14_SCRIPTS: Record<string, ScriptItem[]> = {
  '14-02': [
    {
      label: '会話1 — クリーニング店 (14-02) · resumo',
      setupJa: 'シミのついたズボンを{持|も}って、クリーニング{店|てん}に{来|き}ました。',
      setupPt: 'Resumo: o cliente leva uma calça manchada à tinturaria; a atendente diz que a mancha não sai na lavagem comum e recomenda a remoção de mancha (com taxa à parte).',
      lines: [
        { speaker: '店員', ja: 'このシミは、{普通|ふつう}のクリーニングでは{落|お}ちないので、シミ{抜|ぬ}きをおすすめします。シミ{抜|ぬ}きは{別料金|べつりょうきん}になります。', pt: 'Esta mancha não sai na lavagem comum, então recomendo a remoção de mancha. A remoção de mancha tem cobrança à parte.' },
      ],
    },
  ],
  '14-04': [
    {
      label: '会話3 — 宅配便 (14-04) · resumo',
      setupPt: 'Resumo: a pessoa vai enviar uma encomenda numa loja de conveniência; a atendente pergunta a forma de pagamento (paga quem envia ou quem recebe) e quando deve chegar.',
      lines: [
        { speaker: '店員', ja: 'お{支払|しはら}いは、{着払|ちゃくばら}いと{元払|もとばら}いのどちらにしますか？', pt: 'O pagamento será na entrega (着払い) ou agora pelo remetente (元払い)?' },
      ],
    },
  ],
  '14-07': [
    {
      label: '会話 — 美容院 (14-07) · resumo',
      setupJa: '{美容院|びよういん}で、どのような{髪型|かみがた}にしたいか{伝|つた}えています。',
      setupPt: 'Resumo: no salão, o cliente pede corte e shampoo, e explica o corte que quer (menos volume, mais curto; ~3 cm em cima, ~5 mm nas laterais).',
      lines: [
        { speaker: '客', ja: 'カットとシャンプー、お{願|ねが}いします。ボリュームを{少|すく}なくして、{長|なが}さも{少|すこ}し{短|みじか}くしてください。', pt: 'Corte e shampoo, por favor. Diminua o volume e deixe o comprimento um pouco mais curto.' },
        { speaker: '客', ja: '{前髪|まえがみ}は、もう{少|すこ}し{短|みじか}く{切|き}ってもらえますか？', pt: 'Pode cortar a franja um pouco mais curta?' },
      ],
    },
  ],
  '14-13': [
    {
      label: '会話 — 外国の方のためのサービス (14-13) · resumo',
      setupJa: 'ディアンティさんが、{担当|たんとう}の{人|ひと}に、{外国|がいこく}の{方|かた}{向|む}けのサービスについて{聞|き}いています。',
      setupPt: 'Resumo: Dianti pergunta sobre serviços para estrangeiros; há consulta gratuita em língua estrangeira (com hora marcada), intérprete no hospital, guia de vida e aulas de japonês.',
      lines: [
        { speaker: '担当の人', ja: 'ここで、{外国語|がいこくご}で{無料|むりょう}で{相談|そうだん}ができますよ。{病院|びょういん}に{行|い}くときの、{外国語|がいこくご}の{通訳|つうやく}も{紹介|しょうかい}しています。', pt: 'Aqui dá para fazer consulta gratuita em língua estrangeira. Também indicamos intérprete para quando você vai ao hospital.' },
      ],
    },
  ],
}

const lesson14: Section = {
  id: 'lesson-14',
  level: 'elementary2',
  titleJa: '第14課 前髪は、もう少し短く切ってもらえますか？',
  titlePt: 'Lição 14 — Pode cortar a franja um pouco mais curta?',
  summaryPt:
    'Serviços diversos · usar serviços (tinturaria, bicicletaria, entrega, ATM) e entender como funcionam (シミ抜き／着払い／お引き出し), pedir a reentrega de uma encomenda (再配達), no salão/barbearia dizer o corte que quer (短く切ってもらえますか／5mmにしてください) e conhecer serviços para estrangeiros (外国の方のために).',
  studyNotes: [
    {
      title: 'Tópico: Serviços diversos (さまざまなサービス)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ao usar serviços como entrega (takkyūbin) ou lavanderia, ouvir a explicação e entender como usar.\n' +
        '- Entender um aviso de ausência e pedir a reentrega de uma encomenda.\n' +
        '- No salão/barbearia, dizer que tipo de corte/penteado quer.\n' +
        '- Conhecer e entender serviços oferecidos para estrangeiros (consulta, intérprete, aulas de japonês).\n\n' +
        '💡 Lojas/serviços: {銀行|ぎんこう}, {郵便局|ゆうびんきょく}, クリーニング{店|てん}, コインランドリー, {自転車店|じてんしゃてん}, {宅配便|たくはいびん}, {美容院|びよういん}/{理髪店|りはつてん}, スマホ{修理店|しゅうりてん}.',
    },
    {
      title: 'A-く / N-に + V — dizer COMO fazer (➊)',
      bodyPt:
        'Para instruir **como** algo deve ficar:\n\n' +
        '- **い-adj → 〜く + V:** `{全体的|ぜんたいてき}に{短|みじか}く{切|き}ってください`, `{長|なが}さを{短|みじか}くする`.\n' +
        '- **な-adj / N → 〜に + する/V:** `まわりは5mmにしてください`, `ボリュームを{少|すく}なくする`, `きれいにする`.\n\n' +
        '💡 Pedido de serviço: junta-se com **V-てもらえますか / 〜てください**: `{短|みじか}く{切|き}ってもらえますか？`. (文法ノート ❶)',
    },
    {
      title: 'N のために、〜 — para (o bem de) ~ (➋)',
      bodyPt:
        '**N のために、〜** indica o beneficiário/objetivo:\n\n' +
        '- `{外国|がいこく}の{方|かた}のために、いろいろなサービスがあります` (há vários serviços para os estrangeiros).\n' +
        '- `{家族|かぞく}のために{働|はたら}く`, `{健康|けんこう}のために{歩|ある}く`.\n\n' +
        '💡 Com verbo: V(辞書形)+ために = «a fim de ~». (文法ノート ❷)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Tinturaria/bici:** シミ, シミ{抜|ぬ}き, {別料金|べつりょうきん}, お{渡|わた}し, {空気|くうき}を{入|い}れる, タイヤ, {油|あぶら}を{差|さ}す, ついでに.\n\n' +
        '**Entrega/ATM:** {宅配便|たくはいびん}, {着払|ちゃくばら}い/{元払|もとばら}い, {伝票|でんぴょう}, お{届|とど}け{先|さき}, {再配達|さいはいたつ}, {不在|ふざい}, お{引|ひ}き{出|だ}し, キャッシュカード, {暗証番号|あんしょうばんごう}, {金額|きんがく}, {両替|りょうがえ}, {利用明細|りようめいさい}.\n\n' +
        '**Salão:** カット, シャンプー, パーマ, カラー, {前髪|まえがみ}, {長|なが}さ, {全体的|ぜんたいてき}に, バリカン, シャンプー{台|だい}, こんな{感|かん}じ.\n\n' +
        '**Kanji da lição:** {外国|がいこく}, {情報|じょうほう}, {相談|そうだん}, {質問|しつもん}, {窓口|まどぐち}, {郵便局|ゆうびんきょく}, {近所|きんじょ}, {自動|じどう}, {洗|あら}う, {入力|にゅうりょく}する.',
    },
  ],
  groups: [lesson14Group],
  audios: attachScripts(14, L14_SCRIPTS),
}

// ---- Lição 15: 会議室の電気がついたままでした (tópico 自然と環境) --------------
const lesson15Group: ExerciseGroup = {
  id: 'iro-e2-l15',
  title: '会議室の電気がついたままでした',
  subtitlePt: 'Entender cartazes de ações ecológicas · falar do que faz pelo meio ambiente · entender como separar/descartar o lixo · perguntar como jogar o lixo',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l15-1', number: 1, prompt: 'O título 「{会議室|かいぎしつ}の{電気|でんき}がついた[[まま]]でした」 — 「V-たまま」 indica:', choices: [{ n: 1, text: 'um estado que continua sem mudar, quando já deveria ter terminado (as luzes ficaram acesas)' }, { n: 2, text: 'algo que vai acontecer' }, { n: 3, text: 'uma ação repetida' }, { n: 4, text: 'uma ordem' }], answer: 1, translationPt: 'As luzes da sala de reunião ficaram acesas.', explanationPt: 'V(た形) + まま = estado que permanece sem mudança (devia ter sido desfeito). {電気|でんき}がついたまま, {窓|まど}が{開|あ}いたまま. (文法ノート ❶)' },
    { id: 'iro-e2-l15-2', number: 2, prompt: '「エアコンをつけた[[まま]]、{寝|ね}てしまいました」「そのままでいいです」 — 「まま」 expressa:', choices: [{ n: 1, text: 'permanecer no mesmo estado (dormi com o ar-condicionado ligado / pode deixar como está)' }, { n: 2, text: 'mudar de estado' }, { n: 3, text: 'fazer algo de propósito' }, { n: 4, text: 'algo proibido' }], answer: 1, explanationPt: 'まま = sem alterar o estado. エアコンをつけたまま{寝|ね}る, そのまま{食|た}べる (comer sem cozinhar/temperar). V-たまま、〜 também liga a próxima ação nesse estado. (文法ノート ❶)' },
    { id: 'iro-e2-l15-3', number: 3, prompt: 'Que ação ecológica esta cena (sala de reunião) lembra evitar?', image: `${IMG}/Z_15_2_08_kaigishitsu.png`, imageAlt: 'sala de reunião com luzes/ar-condicionado', choices: [{ n: 1, text: 'deixar {電気|でんき} (luz) ou エアコン ligados sem uso — lembre de {消|け}す (apagar) ao sair' }, { n: 2, text: 'abrir as janelas sempre' }, { n: 3, text: 'usar mais papel' }, { n: 4, text: 'aumentar o ar-condicionado' }], answer: 1, explanationPt: '{節電|せつでん}: {部屋|へや}の{電気|でんき}を{消|け}す, エアコンをつけたまま{帰|かえ}らない. (Seção 1 · エコの貼り紙)' },
    { id: 'iro-e2-l15-4', number: 4, prompt: 'Cartazes de economia no trabalho: 「{節電中|せつでんちゅう}／クールビズ{実施中|じっしちゅう}／{両面|りょうめん}{印刷|いんさつ}しよう／レジ{袋|ぶくろ}{有料化|ゆうりょうか}」 significam:', choices: [{ n: 1, text: 'economizando energia / Cool Biz em vigor / vamos imprimir frente e verso / sacola plástica passa a ser paga' }, { n: 2, text: 'manutenção / festa em curso / proibido imprimir / sacola grátis' }, { n: 3, text: 'corte de luz / reforma / só impressão colorida / desconto' }, { n: 4, text: 'aquecimento ligado / reunião / não economize / sacola obrigatória' }], answer: 1, explanationPt: '{節電中|せつでんちゅう}, クールビズ, {両面|りょうめん}{印刷|いんさつ}, レジ{袋|ぶくろ}{有料化|ゆうりょうか} (→マイバッグ). 3{階|かい}までは{階段|かいだん}で. (Seção 1)' },
    { id: 'iro-e2-l15-5', number: 5, prompt: '聴解 15-03 (環境のために): o que a pessoa faz com o ar-condicionado, e por quê?', context: 'エアコンの{温度|おんど}は、28{度|ど}に{設定|せってい}するようにしてます。{節電|せつでん}のためです。', choices: [{ n: 1, text: 'Procura deixar o ar-condicionado em 28°C, para economizar energia (節電).' }, { n: 2, text: 'Deixa o ar em 16°C para gelar.' }, { n: 3, text: 'Nunca usa ar-condicionado.' }, { n: 4, text: 'Liga o ar e sai.' }], answer: 1, explanationPt: 'エアコンを28{度|ど}に{設定|せってい}するようにする (procuro fazer ~); {節電|せつでん}のため. (聴解 15-03)' },
    { id: 'iro-e2-l15-6', number: 6, prompt: '「28{度|ど}に{設定|せってい}する[[ようにしてます]]」「ペットボトルを{買|か}わない[[ようにしてます]]」 — 「V-ようにする」 indica:', choices: [{ n: 1, text: 'esforçar-se para fazer (ou não fazer) algo como hábito' }, { n: 2, text: 'conseguir fazer pela primeira vez' }, { n: 3, text: 'pedir um favor' }, { n: 4, text: 'algo que já terminou' }], answer: 1, explanationPt: 'V(辞書形/ない形) + ようにする = empenhar-se para (não) fazer algo habitualmente. {設定|せってい}するように, {買|か}わないように. (revisão · Elementary 1 L16)' },
    { id: 'iro-e2-l15-7', number: 7, prompt: '「マイストローは、ごみを{減|へ}らす[[のにいい]]んです」 — 「V-るのにいい」 significa:', choices: [{ n: 1, text: 'é bom/útil PARA fazer algo (a canudo reutilizável é boa para reduzir o lixo)' }, { n: 2, text: 'é proibido fazer' }, { n: 3, text: 'é difícil de fazer' }, { n: 4, text: 'já foi feito' }], answer: 1, explanationPt: 'V(辞書形) + のに + いい/{使|つか}う/{役立|やくだ}つ = adequado/útil para ~. ごみを{減|へ}らすのにいい, {荷物|にもつ}を{包|つつ}むのに{使|つか}う. (文法ノート ❷)' },
    { id: 'iro-e2-l15-8', number: 8, prompt: 'Que objeto reutilizável esta ilustração mostra (bom para reduzir lixo)?', image: `${IMG}/Z_15_2_10_maisutoroo.png`, imageAlt: 'canudo reutilizável (my straw)', choices: [{ n: 1, text: 'マイストロー — canudo reutilizável (próprio)' }, { n: 2, text: 'レジ{袋|ぶくろ} — sacola plástica' }, { n: 3, text: 'ペットボトル — garrafa PET' }, { n: 4, text: '{乾電池|かんでんち} — pilha' }], answer: 1, explanationPt: 'マイストロー/マイバッグ (próprio) = bom para reduzir lixo (ごみを{減|へ}らすのにいい). (Seção 2/3)' },
    { id: 'iro-e2-l15-9', number: 9, prompt: 'O lixo no Japão é separado por tipo. Que categoria recebe um {果物|くだもの}の{皮|かわ} (casca de fruta)?', image: `${IMG}/Z_15_3_01_kudamononokawa.png`, imageAlt: 'casca de fruta (resto de comida)', choices: [{ n: 1, text: '{燃|も}えるごみ（{可燃|かねん}ごみ） — lixo queimável' }, { n: 2, text: '{資源|しげん}ごみ — reciclável' }, { n: 3, text: '{燃|も}えないごみ（{不燃|ふねん}ごみ） — não queimável' }, { n: 4, text: '{粗大|そだい}ごみ — lixo volumoso' }], answer: 1, explanationPt: '{果物|くだもの}の{皮|かわ} (resto de comida) = {燃|も}えるごみ ({可燃|かねん}). (Seção 2 · ごみの{分別|ぶんべつ})' },
    { id: 'iro-e2-l15-10', number: 10, prompt: 'Em que categoria entra um {割|わ}れたコップ (copo quebrado), e que cuidado se tem?', image: `${IMG}/Z_15_3_02_waretakoppu.png`, imageAlt: 'copo de vidro quebrado', choices: [{ n: 1, text: '{燃|も}えないごみ（{不燃|ふねん}） — envolver no papel e escrever 「{危険|きけん}」 (perigo)' }, { n: 2, text: '{資源|しげん}ごみ — reciclável' }, { n: 3, text: '{燃|も}えるごみ — queimável' }, { n: 4, text: '{粗大|そだい}ごみ — volumoso' }], answer: 1, explanationPt: '{割|わ}れたコップ/ガラス = {燃|も}えないごみ; {紙|かみ}に{包|つつ}んで「{危険|きけん}」と{書|か}く. (Seção 2)' },
    { id: 'iro-e2-l15-11', number: 11, prompt: 'Em que categoria entra um {牛乳|ぎゅうにゅう}パック (caixa de leite) lavado e seco?', image: `${IMG}/Z_15_3_03_gyuunyuupakku.png`, imageAlt: 'caixa de leite vazia', choices: [{ n: 1, text: '{資源|しげん}ごみ — reciclável (abrir, lavar, secar e amarrar)' }, { n: 2, text: '{燃|も}えるごみ — queimável' }, { n: 3, text: '{燃|も}えないごみ — não queimável' }, { n: 4, text: '{粗大|そだい}ごみ — volumoso' }], answer: 1, explanationPt: '{牛乳|ぎゅうにゅう}パック = {資源|しげん}ごみ: {開|ひら}いて、{洗|あら}って、{乾|かわ}かして、ひもでしばる. (Seção 2)' },
    { id: 'iro-e2-l15-12', number: 12, prompt: 'Em que categoria entra uma ペットボトル (garrafa PET), e como prepará-la?', image: `${IMG}/Z_15_3_05_pettobotoru.png`, imageAlt: 'garrafa PET vazia', choices: [{ n: 1, text: '{資源|しげん}ごみ — tirar rótulo e tampa e amassar (つぶす)' }, { n: 2, text: '{燃|も}えるごみ — queimável' }, { n: 3, text: '{粗大|そだい}ごみ — volumoso' }, { n: 4, text: '{危険|きけん}ごみ — perigoso' }], answer: 1, explanationPt: 'ペットボトル = {資源|しげん}ごみ: ラベルとキャップをはずして、つぶす. (Seção 2)' },
    { id: 'iro-e2-l15-13', number: 13, prompt: 'Como se descarta {料理|りょうり}に{使|つか}った{油|あぶら} (óleo de cozinha usado)?', image: `${IMG}/Z_15_3_06_abura.png`, imageAlt: 'óleo de cozinha usado numa panela', choices: [{ n: 1, text: '{燃|も}えるごみ — embeber num pano/papel ou solidificar (固める) e jogar, sem despejar na pia' }, { n: 2, text: 'jogar direto na pia' }, { n: 3, text: '{資源|しげん}ごみ — reciclável' }, { n: 4, text: '{粗大|そだい}ごみ — volumoso' }], answer: 1, explanationPt: '{油|あぶら} = {燃|も}えるごみ: {布|ぬの}や{紙|かみ}にしみこませる、または{固|かた}める. (Seção 2)' },
    { id: 'iro-e2-l15-14', number: 14, prompt: 'Em que categoria entra uma {乾電池|かんでんち} (pilha usada)?', image: `${IMG}/Z_15_3_07_kandenchi.png`, imageAlt: 'pilhas usadas', choices: [{ n: 1, text: '{燃|も}えないごみ／{有害|ゆうがい}ごみ — não queimável / perigoso (coletado à parte)' }, { n: 2, text: '{燃|も}えるごみ — queimável' }, { n: 3, text: '{資源|しげん}ごみ — papel reciclável' }, { n: 4, text: '{粗大|そだい}ごみ — volumoso' }], answer: 1, explanationPt: '{乾電池|かんでんち} = {燃|も}えないごみ/{有害|ゆうがい}ごみ (recolhido separadamente). (Seção 2)' },
    { id: 'iro-e2-l15-15', number: 15, prompt: 'Como se joga fora um {自転車|じてんしゃ} (bicicleta velha)?', image: `${IMG}/Z_15_3_08_jitensha.png`, imageAlt: 'bicicleta velha (lixo volumoso)', choices: [{ n: 1, text: '{粗大|そだい}ごみ — ligar para o centro de coleta e marcar o dia de jogar' }, { n: 2, text: '{燃|も}えるごみ — queimável' }, { n: 3, text: '{資源|しげん}ごみ — reciclável de papel' }, { n: 4, text: 'pode deixar em qualquer lugar' }], answer: 1, explanationPt: '{自転車|じてんしゃ} = {粗大|そだい}ごみ: {受付|うけつけ}センターに{電話|でんわ}して、{捨|す}てる{日|ひ}を{決|き}める. (Seção 2)' },
    { id: 'iro-e2-l15-16', number: 16, prompt: 'As 4 grandes categorias de lixo da lição são:', image: `${IMG}/Z_15_2_05_bunbetsu.png`, imageAlt: 'separação do lixo em categorias', choices: [{ n: 1, text: '{燃|も}えるごみ（{可燃|かねん}） / {燃|も}えないごみ（{不燃|ふねん}） / {資源|しげん}ごみ / {粗大|そだい}ごみ' }, { n: 2, text: 'comida / roupa / papel / metal' }, { n: 3, text: 'grande / pequeno / caro / barato' }, { n: 4, text: 'casa / rua / escritório / loja' }], answer: 1, explanationPt: '{分別|ぶんべつ}: A {資源|しげん}ごみ, B {可燃|かねん}（{燃|も}えるごみ), C {不燃|ふねん}（{燃|も}えないごみ), D {粗大|そだい}ごみ. (Seção 2)' },
    { id: 'iro-e2-l15-17', number: 17, prompt: 'Vocabulário de descarte: 「{分|わ}ける／つぶす／{水|みず}を{切|き}る／しばる／ラベル」 significam:', choices: [{ n: 1, text: 'separar / amassar / escorrer a água / amarrar / rótulo' }, { n: 2, text: 'juntar / lavar / encher / soltar / tampa' }, { n: 3, text: 'cortar / secar / molhar / dobrar / etiqueta de preço' }, { n: 4, text: 'queimar / enterrar / despejar / colar / saco' }], answer: 1, explanationPt: '{分|わ}ける (separar), つぶす (amassar), {水|みず}を{切|き}る (escorrer), しばる (amarrar), ラベル (rótulo). Também: {種類|しゅるい}, {中身|なかみ}, {危険|きけん}, しみこませる, {固|かた}める. (Seção 2)' },
    { id: 'iro-e2-l15-18', number: 18, prompt: 'Vocabulário de meio ambiente: 「{節電|せつでん}／{節水|せっすい}／リサイクル／もったいない／マイバッグ」 significam:', choices: [{ n: 1, text: 'economia de energia / economia de água / reciclagem / que desperdício! / sacola reutilizável (própria)' }, { n: 2, text: 'gasto de luz / poluição / lixo / muito bom / mochila' }, { n: 3, text: 'apagão / enchente / coleta / caro / bolsa de mão' }, { n: 4, text: 'aquecedor / torneira / fábrica / barato / carrinho' }], answer: 1, explanationPt: '{節電|せつでん}, {節水|せっすい}, リサイクル, もったいない (que desperdício), マイバッグ. Também: {両面|りょうめん}{印刷|いんさつ}, {水|みず}を{止|と}める. (Seção 1/2)' },
    { id: 'iro-e2-l15-19', number: 19, prompt: 'Os kanji 「{温度|おんど}／{危険|きけん}／〜{種類|しゅるい}／{消|け}す／{捨|す}てる」 lêem-se:', choices: [{ n: 1, text: 'おんど (temperatura) / きけん (perigo) / しゅるい (tipo/espécie) / けす (apagar) / すてる (jogar fora)' }, { n: 2, text: 'おんど / きけん / しゅるい / きす / すてる' }, { n: 3, text: 'うんど / きけん / たねるい / けす / すてる' }, { n: 4, text: 'おんど / あぶけん / しゅるい / けす / ほてる' }], answer: 1, explanationPt: '{温度|おんど}, {危険|きけん}, {種類|しゅるい}, {消|け}す, {捨|す}てる. (漢字のことば)' },
    { id: 'iro-e2-l15-20', number: 20, prompt: 'Os kanji 「{出|だ}す／{分|わ}ける／{燃|も}える／{決|き}める／{設定|せってい}する」 lêem-se:', choices: [{ n: 1, text: 'だす (pôr para fora/jogar) / わける (separar) / もえる (queimar) / きめる (decidir) / せっていする (configurar/ajustar)' }, { n: 2, text: 'だす / ぶんける / もえる / けめる / せっていする' }, { n: 3, text: 'でる / わける / ねんえる / きめる / せってい' }, { n: 4, text: 'だす / わける / もえる / きめる / せつじょうする' }], answer: 1, explanationPt: '{出|だ}す ({ごみ|ごみ}を{出|だ}す), {分|わ}ける, {燃|も}える, {決|き}める ({捨|す}てる{日|ひ}を{決|き}める), {設定|せってい}する. (漢字のことば)' },
    { id: 'iro-e2-l15-21', number: 21, prompt: 'Resumo: nesta lição, para falar de meio ambiente e lixo, aprende-se principalmente:', choices: [{ n: 1, text: 'V-たまま (電気がついたまま), V-ようにする (節電するように), V-るのにいい (減らすのにいい) + 分別 do lixo' }, { n: 2, text: '〜てもらえますか / Nのために' }, { n: 3, text: '〜てある / だけじゃなくて' }, { n: 4, text: 'もう〜ました / まだ〜ていません' }], answer: 1, explanationPt: 'Núcleo da L15: V-たまま (❶), V-るのにいい (❷), ようにする (revisão) e separar o lixo ({分別|ぶんべつ}).' },
  ],
}

// Resumos das faixas de áudio da Lição 15 (situação + falas-chave citadas; não verbatim)
const L15_SCRIPTS: Record<string, ScriptItem[]> = {
  '15-03': [
    {
      label: '① 環境のために — エアコンの温度 (15-03) · resumo',
      setupJa: '{環境|かんきょう}のために{気|き}をつけていることを{話|はな}しています。',
      setupPt: 'Resumo: a pessoa procura deixar o ar-condicionado em 28°C, para economizar energia.',
      lines: [
        { speaker: 'A', ja: 'エアコンの{温度|おんど}は、28{度|ど}に{設定|せってい}するようにしてます。{節電|せつでん}のためです。', pt: 'Procuro deixar o ar-condicionado em 28°C. É para economizar energia.' },
      ],
    },
  ],
  '15-06': [
    {
      label: '④ 環境のために — マイストロー (15-06) · resumo',
      setupPt: 'Resumo: a pessoa anda com canudo próprio (my straw), porque é bom para reduzir o lixo.',
      lines: [
        { speaker: 'A', ja: 'マイストローを{持|も}ち{歩|ある}くようにしてます。ごみを{減|へ}らすのにいいんです。', pt: 'Procuro andar com meu próprio canudo. É bom para reduzir o lixo.' },
      ],
    },
  ],
  '15-08': [
    {
      label: '会話モデル — 環境のために気をつけていること (15-08) · resumo',
      setupPt: 'Resumo: ao ser perguntada o que faz pelo meio ambiente, a pessoa cita seus hábitos (ar em 28°C por economia; canudo próprio para reduzir lixo) usando 〜ようにする / 〜のにいい.',
      lines: [
        { speaker: 'A', ja: '{環境|かんきょう}のために、{何|なに}か{気|き}をつけていますか？', pt: 'Você cuida de alguma coisa pelo meio ambiente?' },
        { speaker: 'B', ja: 'エアコンの{温度|おんど}は28{度|ど}に{設定|せってい}するようにしてます。{節電|せつでん}のためです。', pt: 'Procuro deixar o ar-condicionado em 28°C. É para economizar energia.' },
      ],
    },
  ],
}

const lesson15: Section = {
  id: 'lesson-15',
  level: 'elementary2',
  titleJa: '第15課 会議室の電気がついたままでした',
  titlePt: 'Lição 15 — As luzes da sala de reunião ficaram acesas',
  summaryPt:
    'Natureza e meio ambiente · entender cartazes de ações ecológicas no trabalho (節電中／両面印刷しよう／レジ袋有料化), falar do que se faz pelo meio ambiente (28度に設定するようにしてます／節電のため), entender como separar e descartar o lixo (燃えるごみ／資源ごみ／粗大ごみ) e perguntar como jogar cada tipo.',
  studyNotes: [
    {
      title: 'Tópico: Natureza e meio ambiente (自然と環境)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ver um cartaz sobre atividades ecológicas afixado no trabalho etc. e entender os pontos de atenção.\n' +
        '- Falar do que faz pelo meio ambiente, ou ouvir e entender o que os outros fazem.\n' +
        '- Ler a explicação de como separar/descartar o lixo e entender quando jogar cada tipo.\n' +
        '- Perguntar como descartar o lixo e entender a resposta.\n\n' +
        '💡 エコ: {節電|せつでん}, {節水|せっすい}, リサイクル, {分別|ぶんべつ}, マイバッグ/マイストロー, {両面|りょうめん}{印刷|いんさつ}, クールビズ.',
    },
    {
      title: 'V-たまま — estado que permanece (➊)',
      bodyPt:
        '**V(た形) + まま** descreve um estado que **continua sem mudar**, geralmente quando já deveria ter sido desfeito:\n\n' +
        '- `{会議室|かいぎしつ}の{電気|でんき}がついたままでした` (as luzes ficaram acesas), `{窓|まど}が{開|あ}いたまま`, `{水|みず}を{出|だ}したまま`.\n' +
        '- `エアコンをつけたまま{寝|ね}てしまった` (V-たまま、〜 = fazer a próxima ação nesse estado).\n' +
        '- `そのままでいいです` (pode deixar como está). (文法ノート ❶)',
    },
    {
      title: 'V-るのにいい / V-ようにする (➋ + revisão)',
      bodyPt:
        '- **V(辞書形) + のにいい/{使|つか}う/{役立|やくだ}つ** — adequado/útil PARA fazer algo: `マイストローは、ごみを{減|へ}らすのにいいんです`, `{風呂敷|ふろしき}は{荷物|にもつ}を{包|つつ}むのに{使|つか}う`. (❷)\n' +
        '- **V-ようにする** (revisão) — empenhar-se em (não) fazer algo como hábito: `28{度|ど}に{設定|せってい}するようにする`, `ペットボトルを{買|か}わないようにする`.',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Ações eco:** {節電|せつでん}, {節水|せっすい}, {電気|でんき}を{消|け}す, {水|みず}を{止|と}める, {両面|りょうめん}{印刷|いんさつ}, マイバッグ/マイストロー, リサイクル, もったいない, {温度|おんど}を{設定|せってい}する, クールビズ.\n\n' +
        '**Lixo/分別:** {燃|も}えるごみ（{可燃|かねん}), {燃|も}えないごみ（{不燃|ふねん}), {資源|しげん}ごみ, {粗大|そだい}ごみ, {分|わ}ける, {種類|しゅるい}, つぶす, {水|みず}を{切|き}る, しばる, ひも, {中身|なかみ}, ラベル, {危険|きけん}, しみこませる, {固|かた}める, {包|つつ}む.\n\n' +
        '**Kanji da lição:** {温度|おんど}, {危険|きけん}, 〜{種類|しゅるい}, {消|け}す, {捨|す}てる, {出|だ}す, {分|わ}ける, {燃|も}える, {決|き}める, {設定|せってい}する.',
    },
  ],
  groups: [lesson15Group],
  audios: attachScripts(15, L15_SCRIPTS),
}

// ---- Lição 16: 地震が来ても、あわてて動かないでください (tópico 自然と環境) --------------
const lesson16Group: ExerciseGroup = {
  id: 'iro-e2-l16',
  title: '地震が来ても、あわてて動かないでください',
  subtitlePt: 'Entender notícias/anúncios de desastre · entender instruções de simulado de prevenção · entender o que fazer num terremoto · em caso de desastre, perguntar e obter informações',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l16-1', number: 1, prompt: 'O título 「{地震|じしん}が{来|き}て[[も]]、あわてて{動|うご}かないでください」 — 「V-ても」 significa:', choices: [{ n: 1, text: 'mesmo que / ainda que (mesmo que venha um terremoto, não se mexa apressado)' }, { n: 2, text: 'porque ~' }, { n: 3, text: 'enquanto ~' }, { n: 4, text: 'depois que ~' }], answer: 1, translationPt: 'Mesmo com terremoto, não se mexa com pressa.', explanationPt: 'V-ても = «mesmo que ~». {地震|じしん}が{来|き}ても, {雨|あめ}が{降|ふ}っても. + あわてて{動|うご}かないでください (não se desespere). (título · revisão)' },
    { id: 'iro-e2-l16-2', number: 2, prompt: 'Que desastre natural esta ilustração mostra?', image: `${IMG}/Z_16_1_01_taifuu.png`, imageAlt: 'tufão (vento e chuva fortes)', choices: [{ n: 1, text: '{台風|たいふう} — tufão ({台風|たいふう}が{来|く}る)' }, { n: 2, text: '{地震|じしん} — terremoto' }, { n: 3, text: '{津波|つなみ} — tsunami' }, { n: 4, text: '{大雪|おおゆき} — nevasca' }], answer: 1, explanationPt: '{台風|たいふう} = tufão; {台風|たいふう}が{来|く}る. (Atividade 1 · 災害)' },
    { id: 'iro-e2-l16-3', number: 3, prompt: 'Que desastre esta ilustração mostra?', image: `${IMG}/Z_16_1_02_jishin.png`, imageAlt: 'terremoto (objetos caindo, casa tremendo)', choices: [{ n: 1, text: '{地震|じしん} — terremoto ({地震|じしん}が{起|お}こる／{揺|ゆ}れる)' }, { n: 2, text: '{台風|たいふう} — tufão' }, { n: 3, text: '{火事|かじ} — incêndio' }, { n: 4, text: '{大雪|おおゆき} — nevasca' }], answer: 1, explanationPt: '{地震|じしん} = terremoto; {地震|じしん}が{起|お}こる, {揺|ゆ}れる. (Atividade 1)' },
    { id: 'iro-e2-l16-4', number: 4, prompt: 'Que desastre esta ilustração mostra?', image: `${IMG}/Z_16_1_03_kaji.png`, imageAlt: 'incêndio (fogo e fumaça)', choices: [{ n: 1, text: '{火事|かじ}／{火災|かさい} — incêndio ({火事|かじ}になる／{火|ひ}が{出|で}る)' }, { n: 2, text: '{地震|じしん} — terremoto' }, { n: 3, text: '{津波|つなみ} — tsunami' }, { n: 4, text: '{台風|たいふう} — tufão' }], answer: 1, explanationPt: '{火事|かじ}/{火災|かさい} = incêndio; {火事|かじ}になる, {火|ひ}が{出|で}る. (Atividade 1)' },
    { id: 'iro-e2-l16-5', number: 5, prompt: 'Que desastre esta ilustração mostra?', image: `${IMG}/Z_16_1_04_yuki.png`, imageAlt: 'neve acumulada (nevasca)', choices: [{ n: 1, text: '{大雪|おおゆき} — nevasca ({雪|ゆき}が{積|つ}もる)' }, { n: 2, text: '{台風|たいふう} — tufão' }, { n: 3, text: '{地震|じしん} — terremoto' }, { n: 4, text: '{火事|かじ} — incêndio' }], answer: 1, explanationPt: '{大雪|おおゆき} = nevasca; {雪|ゆき}が{積|つ}もる. (Atividade 1)' },
    { id: 'iro-e2-l16-6', number: 6, prompt: 'Que desastre esta ilustração mostra?', image: `${IMG}/Z_16_1_05_tsunami.png`, imageAlt: 'tsunami (onda gigante)', choices: [{ n: 1, text: '{津波|つなみ} — tsunami ({津波|つなみ}が{来|く}る)' }, { n: 2, text: '{大雪|おおゆき} — nevasca' }, { n: 3, text: '{火事|かじ} — incêndio' }, { n: 4, text: '{台風|たいふう} — tufão' }], answer: 1, explanationPt: '{津波|つなみ} = tsunami; {津波|つなみ}が{来|く}る → {海岸|かいがん}から{離|はな}れる. (Atividade 1)' },
    { id: 'iro-e2-l16-7', number: 7, prompt: 'O que é o 「{緊急|きんきゅう}{地震|じしん}{速報|そくほう}」?', image: `${IMG}/Z_16_1_08_kinkyuusokuhoo.png`, imageAlt: 'alerta de terremoto na TV/celular', choices: [{ n: 1, text: 'o alerta antecipado de terremoto (na TV/celular), para se preparar' }, { n: 2, text: 'a previsão do tempo de amanhã' }, { n: 3, text: 'um anúncio de evento' }, { n: 4, text: 'uma propaganda' }], answer: 1, explanationPt: '{緊急|きんきゅう}{地震|じしん}{速報|そくほう} = alerta de terremoto; ouvir notícias/{放送|ほうそう} e entender o que houve e o que fazer. (Seção 1)' },
    { id: 'iro-e2-l16-8', number: 8, prompt: '聴解 16-07 (避難訓練1 · 地震): que instruções são dadas quando “começa” o terremoto?', context: '{放送|ほうそう}：{震度|しんど}5の{地震|じしん}が{発生|はっせい}しました。Ａ：そこのドアを{開|あ}けて！ {全員|ぜんいん}、ヘルメットをかぶって！ {姿勢|しせい}を{低|ひく}くして！', choices: [{ n: 1, text: 'Abrir a porta, todos porem o capacete e abaixarem o corpo (proteger-se).' }, { n: 2, text: 'Correr para a rua imediatamente.' }, { n: 3, text: 'Usar o elevador.' }, { n: 4, text: 'Continuar trabalhando normalmente.' }], answer: 1, explanationPt: 'No tremor: ドアを{開|あ}ける, ヘルメットをかぶる, {姿勢|しせい}を{低|ひく}くする. Depois: {揺|ゆ}れがおさまったら{避難|ひなん}; エレベーターは{使|つか}わない, {階段|かいだん}で. (聴解 16-07)' },
    { id: 'iro-e2-l16-9', number: 9, prompt: '「{急|いそ}げ！」「こっちに{集|あつ}まれ！」「{走|はし}るな！」 — essas formas (命令形/命令の否定) são usadas porque:', choices: [{ n: 1, text: 'são ordens fortes e diretas, próprias de emergências/treinos: «depressa! / juntem-se! / não corram!»' }, { n: 2, text: 'são pedidos educados' }, { n: 3, text: 'são convites' }, { n: 4, text: 'indicam o passado' }], answer: 1, explanationPt: 'Imperativo 命令形: {急|いそ}ぐ→{急|いそ}げ, {集|あつ}まる→{集|あつ}まれ, {逃|に}げる→{逃|に}げろ, する→しろ, {来|く}る→{来|こ}い. Proibição V-るな: {走|はし}る→{走|はし}るな. (文法ノート ❶)' },
    { id: 'iro-e2-l16-10', number: 10, prompt: 'Como se forma a proibição forte (命令形の否定) de um verbo, como em 「{走|はし}るな」?', choices: [{ n: 1, text: 'verbo na forma de dicionário + な: {行|い}く→{行|い}くな, {食|た}べる→{食|た}べるな, する→するな' }, { n: 2, text: 'verbo + ました' }, { n: 3, text: 'verbo + たい' }, { n: 4, text: 'verbo + ましょう' }], answer: 1, explanationPt: 'V(辞書形) + な = proibição forte. {走|はし}るな, {行|い}くな. (≠ {走|はし}れ/{行|い}け = ordem afirmativa.) (文法ノート ❶)' },
    { id: 'iro-e2-l16-11', number: 11, prompt: '聴解 16-08 (避難訓練2 · 火事): num incêndio no trabalho, que papéis aparecem?', context: '{上司|じょうし}：{火災|かさい}を{確認|かくにん}したら、{青木|あおき}さん、119{番|ばん}に{連絡|れんらく}してください。エルデネさんは、{初期|しょき}{消火|しょうか}をお{願|ねが}いします。', choices: [{ n: 1, text: 'Confirmar o fogo, ligar para o 119, e alguém faz o combate inicial (初期消火) com o extintor; verificar quem não conseguiu escapar.' }, { n: 2, text: 'Todos voltam a trabalhar.' }, { n: 3, text: 'Ninguém faz nada.' }, { n: 4, text: 'Apenas abrem as janelas.' }], answer: 1, explanationPt: '{火災|かさい}{確認|かくにん}→119{番|ばん}に{連絡|れんらく}, {初期|しょき}{消火|しょうか} ({消火器|しょうかき}), {逃|に}げ{遅|おく}れた{人|ひと}がいないか{確認|かくにん}. (聴解 16-08)' },
    { id: 'iro-e2-l16-12', number: 12, prompt: 'Que equipamento é este, usado no combate inicial ao fogo (初期消火)?', image: `${IMG}/Z_16_2_03_shooka.png`, imageAlt: 'extintor de incêndio', choices: [{ n: 1, text: '{消火器|しょうかき} — extintor de incêndio' }, { n: 2, text: '{火災|かさい}{報知器|ほうちき} — alarme de incêndio' }, { n: 3, text: '{防災|ぼうさい}ずきん — capuz de proteção' }, { n: 4, text: '{給水車|きゅうすいしゃ} — caminhão-pipa' }], answer: 1, explanationPt: '{消火器|しょうかき} = extintor. Partes: {安全|あんぜん}ピン, レバー, ホース. (Seção 2 · 防災訓練4)' },
    { id: 'iro-e2-l16-13', number: 13, prompt: '聴解 16-10 (消火器の使い方): qual a ordem correta de usar o extintor?', context: '①{安全|あんぜん}ピンを{抜|ぬ}く → ②ホースを{火|ひ}に{向|む}ける → ③レバーを{握|にぎ}る → ④{噴射|ふんしゃ}する。', choices: [{ n: 1, text: 'Tirar o pino de segurança → apontar a mangueira para o fogo → apertar a alavanca → jorrar.' }, { n: 2, text: 'Apertar a alavanca antes de tirar o pino.' }, { n: 3, text: 'Jogar o extintor no fogo.' }, { n: 4, text: 'Apontar para o teto.' }], answer: 1, explanationPt: '{消火器|しょうかき}: {安全|あんぜん}ピンを{抜|ぬ}く→{火|ひ}に{向|む}ける ({先|さき}を{狙|ねら}う)→レバーを{握|にぎ}る→{噴射|ふんしゃ}; 5m〜手前から. (聴解 16-10)' },
    { id: 'iro-e2-l16-14', number: 14, prompt: '聴解 16-09 (煙体験): num exercício de fumaça, que cuidados se deve ter?', context: '{煙|けむり}が{充満|じゅうまん}しています。{姿勢|しせい}を{低|ひく}くして{進|すす}んでください。タオルやハンカチを{口|くち}に{当|あ}てて、できるだけ{煙|けむり}を{吸|す}わないようにしてください。', choices: [{ n: 1, text: 'Abaixar o corpo e avançar, cobrir a boca com toalha/lenço e procurar não respirar a fumaça.' }, { n: 2, text: 'Correr em pé respirando fundo.' }, { n: 3, text: 'Parar e esperar a fumaça passar.' }, { n: 4, text: 'Abrir todas as janelas e gritar.' }], answer: 1, explanationPt: '{煙体験|けむりたいけん}: {姿勢|しせい}を{低|ひく}くする, {口|くち}にハンカチ, {煙|けむり}を{吸|す}わないようにする, {声|こえ}をかけ{合|あ}う, {床|ゆか}に{近|ちか}く. (聴解 16-09)' },
    { id: 'iro-e2-l16-15', number: 15, prompt: '「できるだけ{煙|けむり}を{吸|す}わない[[ようにしてください]]」 — qual a diferença para 「{吸|す}わないでください」?', choices: [{ n: 1, text: '〜ないようにする = esforçar-se/tomar cuidado para NÃO fazer (como precaução); 〜ないでください = ordem direta de não fazer agora' }, { n: 2, text: 'são exatamente iguais' }, { n: 3, text: '〜ないようにする significa «faça»' }, { n: 4, text: '〜ないでください é mais educado e suave' }], answer: 1, explanationPt: 'V-ないようにする (empenhar-se em não ~, precaução) ≠ V-ないでください (não faça ~, direto). {煙|けむり}を{吸|す}わないように. (文法ノート ❷)' },
    { id: 'iro-e2-l16-16', number: 16, prompt: '聴解 (地震が起こったとき): segundo a lição, qual é uma ação SEGURA durante um terremoto?', choices: [{ n: 1, text: 'proteger-se sob a mesa ({机|つくえ}の{下|した}に{隠|かく}れる) e ficar longe de coisas que caem facilmente ({倒|たお}れやすいもの)' }, { n: 2, text: 'correr para fora correndo no susto' }, { n: 3, text: 'usar o elevador para descer rápido' }, { n: 4, text: 'acender uma vela' }], answer: 1, explanationPt: '{地震|じしん}が{起|お}こったら、あわてて{動|うご}かない; {机|つくえ}の{下|した}に{隠|かく}れる, {倒|たお}れやすいものから{離|はな}れる. (Seção · 地震が起こったとき)' },
    { id: 'iro-e2-l16-17', number: 17, prompt: '聴解 16-22〜23 (災害のあと): após um tufão/terremoto, sobre o que as pessoas conversam?', context: 'Ａ：お{店|みせ}が{開|あ}いていないので、{食|た}べるものがなくて、{困|こま}ってます。Ｂ：これ、{会社|かいしゃ}にあった{非常食|ひじょうしょく}。…{断水|だんすい}、まだ{続|つづ}きそうだよ。{給水車|きゅうすいしゃ}が{来|く}るって。', choices: [{ n: 1, text: 'Falta de comida (recebem 非常食), falta de água (断水) e onde pegar água (給水車); também banho provisório.' }, { n: 2, text: 'Sobre uma festa de aniversário.' }, { n: 3, text: 'Sobre compras de roupas novas.' }, { n: 4, text: 'Sobre um filme no cinema.' }], answer: 1, explanationPt: 'Pós-desastre: {非常食|ひじょうしょく} (comida de emergência), {断水|だんすい} (falta de água), {給水車|きゅうすいしゃ} (caminhão-pipa), {避難所|ひなんじょ}, {仮設|かせつ}のお{風呂|ふろ}. (聴解 16-22〜23)' },
    { id: 'iro-e2-l16-18', number: 18, prompt: 'O que é o objeto desta ilustração, usado para proteger a cabeça em desastres?', image: `${IMG}/Z_16_2_01_boosaizukin.png`, imageAlt: 'capuz de proteção contra desastres', choices: [{ n: 1, text: '{防災|ぼうさい}ずきん — capuz/touca de proteção (protege a cabeça)' }, { n: 2, text: '{消火器|しょうかき} — extintor' }, { n: 3, text: '{給水車|きゅうすいしゃ} — caminhão-pipa' }, { n: 4, text: '{非常食|ひじょうしょく} — comida de emergência' }], answer: 1, explanationPt: '{防災|ぼうさい}ずきん = capuz de proteção (cabeça). Também: ヘルメット, {非常食|ひじょうしょく}, {懐中電灯|かいちゅうでんとう}. (Seção 2)' },
    { id: 'iro-e2-l16-19', number: 19, prompt: 'Que aparelho é este, que avisa quando há fumaça/incêndio?', image: `${IMG}/Z_16_2_12_kasaihoochiki.png`, imageAlt: 'detector/alarme de incêndio no teto', choices: [{ n: 1, text: '{火災|かさい}{報知器|ほうちき} — alarme/detector de incêndio' }, { n: 2, text: '{消火器|しょうかき} — extintor' }, { n: 3, text: 'エアコン — ar-condicionado' }, { n: 4, text: '{緊急|きんきゅう}{速報|そくほう} — alerta de emergência' }], answer: 1, explanationPt: '{火災|かさい}{報知器|ほうちき} = detector de incêndio. (Seção 2)' },
    { id: 'iro-e2-l16-20', number: 20, prompt: 'Vocabulário de desastres: 「{台風|たいふう}／{地震|じしん}／{津波|つなみ}／{避難|ひなん}／{避難所|ひなんじょ}」 significam:', choices: [{ n: 1, text: 'tufão / terremoto / tsunami / evacuação (refugiar-se) / abrigo (local de refúgio)' }, { n: 2, text: 'chuva / vento / maré / fuga / hospital' }, { n: 3, text: 'neve / trovão / onda / passeio / escola' }, { n: 4, text: 'enchente / raio / corrente / viagem / prefeitura' }], answer: 1, explanationPt: '{台風|たいふう}, {地震|じしん}, {津波|つなみ}, {避難|ひなん} (refugiar-se), {避難所|ひなんじょ} (abrigo). Também: {火事|かじ}, {大雪|おおゆき}, {揺|ゆ}れる. (Atividade 1)' },
    { id: 'iro-e2-l16-21', number: 21, prompt: 'Vocabulário de prevenção: 「{防災|ぼうさい}{訓練|くんれん}／{消火器|しょうかき}／{初期|しょき}{消火|しょうか}／{非常食|ひじょうしょく}／{断水|だんすい}」 significam:', choices: [{ n: 1, text: 'simulado de desastre / extintor / combate inicial ao fogo / comida de emergência / corte de água' }, { n: 2, text: 'evacuação / mangueira / fogueira / lanche / chuva' }, { n: 3, text: 'aula / alarme / incêndio / banquete / inundação' }, { n: 4, text: 'reunião / capacete / fumaça / mercado / vazamento' }], answer: 1, explanationPt: '{防災|ぼうさい}{訓練|くんれん}, {消火器|しょうかき}, {初期|しょき}{消火|しょうか}, {非常食|ひじょうしょく}, {断水|だんすい}. Também: {給水車|きゅうすいしゃ}, {緊急|きんきゅう}{速報|そくほう}, {煙体験|けむりたいけん}. (Seções)' },
    { id: 'iro-e2-l16-22', number: 22, prompt: 'Os kanji 「{地震|じしん}／{台風|たいふう}／{外|そと}／{声|こえ}／{危|あぶ}ない」 lêem-se:', choices: [{ n: 1, text: 'じしん (terremoto) / たいふう (tufão) / そと (fora) / こえ (voz) / あぶない (perigoso)' }, { n: 2, text: 'じしん / たいふう / がい / せい / きない' }, { n: 3, text: 'ちしん / だいふう / そと / こえ / あぶない' }, { n: 4, text: 'じしん / たいふう / そと / こえ / きけんない' }], answer: 1, explanationPt: '{地震|じしん}, {台風|たいふう}, {外|そと} ({外|そと}に{出|で}ない), {声|こえ} ({声|こえ}をかけ{合|あ}う), {危|あぶ}ない. (漢字のことば)' },
    { id: 'iro-e2-l16-23', number: 23, prompt: 'Os kanji 「{大切|たいせつ}（な)／{心配|しんぱい}（な)／{集|あつ}まる／{進|すす}む」 lêem-se:', choices: [{ n: 1, text: 'たいせつ (importante) / しんぱい (preocupação) / あつまる (juntar-se) / すすむ (avançar)' }, { n: 2, text: 'だいせつ / しんぱい / しゅうまる / しんむ' }, { n: 3, text: 'たいせつ / こころはい / あつまる / すすむ' }, { n: 4, text: 'たいせつ / しんぱい / あつまる / すずむ' }], answer: 1, explanationPt: '{大切|たいせつ}（な), {心配|しんぱい}（な), {集|あつ}まる ({中庭|なかにわ}に{集|あつ}まる), {進|すす}む ({姿勢|しせい}を{低|ひく}くして{進|すす}む). (漢字のことば)' },
    { id: 'iro-e2-l16-24', number: 24, prompt: 'Resumo: nesta lição (desastres), aprende-se principalmente:', choices: [{ n: 1, text: 'V-ても (地震が来ても), o 命令形/V-るな para ordens em emergência (急げ／走るな) e V-ないようにする (煙を吸わないように)' }, { n: 2, text: '〜てもらえますか / Nのために' }, { n: 3, text: '〜てある / だけじゃなくて' }, { n: 4, text: 'もう〜ました / まだ〜ていません' }], answer: 1, explanationPt: 'Núcleo da L16: V-ても (título), 命令形+V-るな (❶), V-ないようにしてください (❷); + vocabulário de 災害/防災.' },
  ],
}

// Resumos das faixas de áudio da Lição 16 (situação + falas-chave citadas; não verbatim)
const L16_SCRIPTS: Record<string, ScriptItem[]> = {
  '16-07': [
    {
      label: '防災訓練1 — 地震 (16-07) · resumo',
      setupJa: '{職場|しょくば}で、{地震|じしん}の{避難|ひなん}{訓練|くんれん}をしています。',
      setupPt: 'Resumo: simulado de terremoto no trabalho. No tremor: abrir a porta, pôr capacete, abaixar-se; depois evacuar pela escada (sem elevador), reunir-se no pátio e fazer a chamada.',
      lines: [
        { speaker: '放送', ja: '{震度|しんど}5の{地震|じしん}が{発生|はっせい}しました。', pt: 'Ocorreu um terremoto de intensidade 5.' },
        { speaker: 'A', ja: 'そこのドアを{開|あ}けて！ {全員|ぜんいん}、ヘルメットをかぶって！ {姿勢|しせい}を{低|ひく}くして！', pt: 'Abram aquela porta! Todos, ponham o capacete! Abaixem-se!' },
        { speaker: 'A', ja: 'エレベーターは{使|つか}わないで。{階段|かいだん}で{下|お}りて。', pt: 'Não usem o elevador. Desçam pela escada.' },
      ],
    },
  ],
  '16-08': [
    {
      label: '防災訓練2 — 火事 (16-08) · resumo',
      setupPt: 'Resumo: simulado de incêndio no trabalho. Confirmado o fogo: ligar para o 119, fazer o combate inicial com o extintor e verificar se não há ninguém preso.',
      lines: [
        { speaker: '上司', ja: '{火災|かさい}を{確認|かくにん}したら、119{番|ばん}に{連絡|れんらく}してください。{初期|しょき}{消火|しょうか}をお{願|ねが}いします。', pt: 'Ao confirmar o incêndio, liguem para o 119. Façam o combate inicial ao fogo, por favor.' },
      ],
    },
  ],
  '16-09': [
    {
      label: '防災訓練3 — 煙体験 (16-09) · resumo',
      setupJa: '{地域|ちいき}の{防災|ぼうさい}{訓練|くんれん}で、{煙体験|けむりたいけん}のやり{方|かた}の{説明|せつめい}を{聞|き}いています。',
      setupPt: 'Resumo: simulado de fumaça. Abaixar o corpo, cobrir a boca com lenço, não respirar a fumaça, avançar para a saída e ir avisando uns aos outros.',
      lines: [
        { speaker: '説明', ja: '{姿勢|しせい}を{低|ひく}くして{進|すす}んでください。できるだけ{煙|けむり}を{吸|す}わないようにしてください。', pt: 'Avancem abaixados. Procurem não respirar a fumaça o máximo possível.' },
      ],
    },
  ],
  '16-10': [
    {
      label: '防災訓練4 — 消火器の使い方 (16-10) · resumo',
      setupPt: 'Resumo: como usar o extintor — tirar o pino de segurança, apontar a mangueira para a base do fogo, apertar a alavanca e jorrar (a alguns metros de distância).',
      lines: [
        { speaker: '説明', ja: '{安全|あんぜん}ピンを{抜|ぬ}いて、ホースを{火|ひ}に{向|む}けて、レバーを{握|にぎ}って{噴射|ふんしゃ}します。', pt: 'Tire o pino de segurança, aponte a mangueira para o fogo, aperte a alavanca e jorre.' },
      ],
    },
  ],
}

const lesson16: Section = {
  id: 'lesson-16',
  level: 'elementary2',
  titleJa: '第16課 地震が来ても、あわてて動かないでください',
  titlePt: 'Lição 16 — Mesmo com terremoto, não se desespere',
  summaryPt:
    'Natureza e meio ambiente · entender notícias e alertas de desastre (緊急地震速報／台風・地震・津波), entender instruções de simulados de prevenção (避難訓練／消火器／煙体験), saber o que fazer num terremoto (机の下に隠れる) e, depois de um desastre, perguntar a quem está perto e obter informações (断水／給水車／避難所).',
  studyNotes: [
    {
      title: 'Tópico: Natureza e meio ambiente (自然と環境)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Ouvir notícias/anúncios de desastre e entender o que houve e o que fazer.\n' +
        '- Ouvir explicações e instruções de simulado de prevenção e entender o procedimento e os cuidados.\n' +
        '- Ouvir e entender o conteúdo geral do que fazer em caso de terremoto num simulado.\n' +
        '- Em caso de desastre, perguntar a quem está perto e obter as informações necessárias.\n' +
        '- Ler um folheto de prevenção de desastres em japonês simples para estrangeiros e entender.\n\n' +
        '💡 災害: {台風|たいふう}, {地震|じしん}, {火事|かじ}, {大雪|おおゆき}, {津波|つなみ}; 防災: {避難|ひなん}, {消火器|しょうかき}, {非常食|ひじょうしょく}, {給水車|きゅうすいしゃ}.',
    },
    {
      title: 'Imperativo 命令形 / V-るな — ordens fortes (➊)',
      bodyPt:
        'Em emergências/treinos (e ao torcer), usam-se formas **imperativas** fortes:\n\n' +
        '- **Ordem afirmativa (命令形):** `{急|いそ}げ！`, `{集|あつ}まれ！`, `{逃|に}げろ！` (グ1 -e: {行|い}く→{行|い}け; グ2 -ろ: {食|た}べる→{食|た}べろ; する→しろ, {来|く}る→{来|こ}い).\n' +
        '- **Ordem negativa (禁止 V-るな):** `{走|はし}るな！`, `{行|い}くな！` (forma de dicionário + な).\n\n' +
        '💡 V-てください / V-ないで também instruem; o 命令形 é mais firme. Torcida: {行|い}け！がんばれ！ (文法ノート ❶)',
    },
    {
      title: 'V-ないようにしてください / V-ても (➋ + título)',
      bodyPt:
        '- **V-ないようにしてください** — tomar cuidado/empenhar-se para NÃO fazer (precaução): `{煙|けむり}を{吸|す}わないようにしてください`, `{転|ころ}ばないように`. Diferente de **V-ないでください** (ordem direta de não fazer). (文法ノート ❷)\n' +
        '- **V-ても** (título, revisão) — «mesmo que ~»: `{地震|じしん}が{来|き}ても、あわてて{動|うご}かないでください`, `{雨|あめ}が{降|ふ}っても{行|い}きます`.',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Desastres:** {台風|たいふう}, {地震|じしん} ({揺|ゆ}れる/{起|お}こる), {火事|かじ}/{火災|かさい}, {大雪|おおゆき}, {津波|つなみ}, {緊急|きんきゅう}{地震|じしん}{速報|そくほう}, {避難|ひなん}, {避難所|ひなんじょ}.\n\n' +
        '**Prevenção:** {防災|ぼうさい}{訓練|くんれん}, {避難|ひなん}{訓練|くんれん}, {消火器|しょうかき} ({安全|あんぜん}ピン/レバー/ホース), {初期|しょき}{消火|しょうか}, 119{番|ばん}, {煙体験|けむりたいけん}, {姿勢|しせい}を{低|ひく}くする, {机|つくえ}の{下|した}に{隠|かく}れる, {防災|ぼうさい}ずきん, {火災|かさい}{報知器|ほうちき}.\n\n' +
        '**Pós-desastre:** {非常食|ひじょうしょく}, {断水|だんすい}, {給水車|きゅうすいしゃ}, {仮設|かせつ}のお{風呂|ふろ}.\n\n' +
        '**Kanji da lição:** {地震|じしん}, {台風|たいふう}, {外|そと}, {声|こえ}, {危|あぶ}ない, {大切|たいせつ}（な), {心配|しんぱい}（な), {集|あつ}まる, {進|すす}む.',
    },
  ],
  groups: [lesson16Group],
  audios: attachScripts(16, L16_SCRIPTS),
}

// ---- Lição 17: 日本語が前より話せるようになりました (tópico 私の人生) --------------
const lesson17Group: ExerciseGroup = {
  id: 'iro-e2-l17',
  title: '日本語が前より話せるようになりました',
  subtitlePt: 'Falar das mudanças recentes na vida · falar do trabalho e do japonês comparando antes e agora · escrever uma mensagem de novidades ao professor',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e2-l17-1', number: 1, prompt: 'O título 「{日本語|にほんご}が{前|まえ}より{話|はな}せる[[ようになりました]]」 — 「V-(可能形)ようになりました」 indica:', choices: [{ n: 1, text: 'uma mudança: passou a conseguir fazer algo que antes não conseguia (passei a falar japonês mais que antes)' }, { n: 2, text: 'algo que sempre soube fazer' }, { n: 3, text: 'uma ordem' }, { n: 4, text: 'algo que vai parar de fazer' }], answer: 1, translationPt: 'Passei a falar japonês mais do que antes.', explanationPt: 'V(可能形) + ようになりました = «passei a conseguir ~» (mudança). {話|はな}せる→{話|はな}せるようになった. {前|まえ}より = mais que antes. (文法ノート ❶)' },
    { id: 'iro-e2-l17-2', number: 2, prompt: '「{最近|さいきん}は、ほかの{人|ひと}に{教|おし}えられるようになりました」 — o que mudou?', choices: [{ n: 1, text: 'antes não conseguia, mas agora consegue ensinar os outros (passou a conseguir)' }, { n: 2, text: 'parou de ensinar' }, { n: 3, text: 'sempre ensinou' }, { n: 4, text: 'foi obrigada a ensinar' }], answer: 1, explanationPt: '{教|おし}える→{教|おし}えられる (potencial) + ようになった = passou a conseguir ensinar. ⚠️ Com わかる/できる: 「{日本語|にほんご}が{少|すこ}しわかるようになった」. (文法ノート ❶)' },
    { id: 'iro-e2-l17-3', number: 3, prompt: '「{買|か}い{物|もの}に{困|こま}ら[[なくなりました]]」 — 「V-なくなりました」 indica:', image: `${IMG}/Z_17_1_02_kaimono.png`, imageAlt: 'pessoa fazendo compras com facilidade', choices: [{ n: 1, text: 'deixou de ~ (mudança): parou de ter problemas para fazer compras' }, { n: 2, text: 'passou a ter problemas' }, { n: 3, text: 'nunca teve problemas' }, { n: 4, text: 'precisa fazer compras' }], answer: 1, explanationPt: 'V-なくなる = «deixar de ~». {困|こま}る→{困|こま}らなくなった (não tem mais problemas). Liga-se à ない-form (ない→なく). (文法ノート ❶)' },
    { id: 'iro-e2-l17-4', number: 4, prompt: 'Para mudanças com substantivo/adjetivo, usa-se 「〜になる／〜くなる」. Quais estão certos?', choices: [{ n: 1, text: '{友|とも}だちが{増|ふ}えました／{元気|げんき}になりました／{仕事|しごと}が{楽|たの}しくなりました／すし{職人|しょくにん}になりたい' }, { n: 2, text: '{友|とも}だちが{増|ふ}えるだ／{元気|げんき}くなる／{楽|たの}しいになる' }, { n: 3, text: '{友|とも}だちを{増|ふ}える／{元気|げんき}でなる' }, { n: 4, text: 'nenhuma das anteriores' }], answer: 1, explanationPt: 'Nになる ({職人|しょくにん}になる), なAになる ({元気|げんき}になる), いA→くなる ({楽|たの}しくなる), V-ようになる. (文法ノート ❶ · 変化のまとめ)' },
    { id: 'iro-e2-l17-5', number: 5, prompt: '「{日本語|にほんご}が[[{前|まえ}より]]{話|はな}せるようになりました」 — 「前より」 significa:', choices: [{ n: 1, text: 'mais do que antes (comparação com o estado anterior)' }, { n: 2, text: 'antes de ~' }, { n: 3, text: 'graças a ~' }, { n: 4, text: 'em vez de antes' }], answer: 1, explanationPt: '{前|まえ}より = «mais que antes». {前|まえ}より{話|はな}せる, {前|まえ}より{仕事|しごと}が{早|はや}くできる. (文法ノート ❶)' },
    { id: 'iro-e2-l17-6', number: 6, prompt: 'Que atividade esta ilustração mostra (entrou nessa roda e fez amigos)?', image: `${IMG}/Z_17_1_03_wadaiko.png`, imageAlt: 'grupo tocando tambor japonês (wadaiko)', choices: [{ n: 1, text: '{和太鼓|わだいこ}のサークルに{入|はい}る — entrar num clube de tambor japonês (e fazer amigos)' }, { n: 2, text: 'assistir a um drama' }, { n: 3, text: 'fazer compras' }, { n: 4, text: 'mandar e-mail' }], answer: 1, explanationPt: '{和太鼓|わだいこ} (tambor japonês); サークルに{入|はい}る (entrar no clube), {誘|さそ}う (convidar), おかげで (graças a). (Atividade 1)' },
    { id: 'iro-e2-l17-7', number: 7, prompt: 'Que mudança esta ilustração ajuda a contar (agora entende e ri das falas)?', image: `${IMG}/Z_17_1_01_dorama.png`, imageAlt: 'pessoa assistindo a um drama e rindo', choices: [{ n: 1, text: 'ドラマの[[セリフ]]がわかって{笑|わら}えるようになった — passou a entender as falas (セリフ) do drama e rir' }, { n: 2, text: 'parou de ver TV' }, { n: 3, text: 'comprou uma TV nova' }, { n: 4, text: 'não gosta de drama' }], answer: 1, explanationPt: 'ドラマ (drama), セリフ (falas/diálogos), {笑|わら}う (rir), うまい (ser bom em), ほとんど (quase tudo). (Atividade 1)' },
    { id: 'iro-e2-l17-8', number: 8, prompt: '聴解 17-10 (仕事について): como a pessoa descreve a mudança no trabalho?', context: 'はじめは、やり{方|かた}がわからないことが{多|おお}かったですが、{今|いま}は、だいぶわかるようになりました。', choices: [{ n: 1, text: 'No começo havia muita coisa que não sabia fazer, mas agora passou a entender bastante.' }, { n: 2, text: 'O trabalho ficou impossível.' }, { n: 3, text: 'Nunca teve dificuldade.' }, { n: 4, text: 'Decidiu largar o trabalho.' }], answer: 1, explanationPt: 'はじめはやり{方|かた}がわからない→{今|いま}はだいぶわかるようになった (mudança ❶). (聴解 17-10)' },
    { id: 'iro-e2-l17-9', number: 9, prompt: '聴解 17-11 (日本語について): que mudanças no japonês a pessoa relata?', context: 'みんなが{私|わたし}に{言|い}っていることは、だいたいわかるようになりました。それから、{前|まえ}より{話|はな}せるようになりました。', choices: [{ n: 1, text: 'Passou a entender quase tudo o que lhe dizem e a falar mais do que antes.' }, { n: 2, text: 'Esqueceu todo o japonês.' }, { n: 3, text: 'Só entende a escrita.' }, { n: 4, text: 'Não houve mudança.' }], answer: 1, explanationPt: 'みんなの{話|はなし}がわかるようになった; {前|まえ}より{話|はな}せるようになった. はじめは{知|し}らないことばが{多|おお}くて{大変|たいへん}でした. (聴解 17-11)' },
    { id: 'iro-e2-l17-10', number: 10, prompt: 'Termos de trabalho que apareceram: 「{締|し}め{日|び}」「{納期|のうき}」 significam:', choices: [{ n: 1, text: 'dia de fechamento (prazo de corte) / prazo de entrega' }, { n: 2, text: 'dia de folga / hora do almoço' }, { n: 3, text: 'salário / bônus' }, { n: 4, text: 'feriado / reunião' }], answer: 1, explanationPt: '{締|し}め{日|び} (data de fechamento), {納期|のうき} (prazo de entrega). No começo a pessoa não entendia esses termos. (Seção 2 · 知らないことば)' },
    { id: 'iro-e2-l17-11', number: 11, prompt: 'Onde a personagem Tila conversa com o chefe Nakata sobre o trabalho e o japonês?', image: `${IMG}/Z_17_2_01_shokudoo.png`, imageAlt: 'refeitório/cantina da empresa', choices: [{ n: 1, text: 'no {食堂|しょくどう} (refeitório), durante o {昼休|ひるやす}み (intervalo do almoço)' }, { n: 2, text: 'numa loja de roupas' }, { n: 3, text: 'num hospital' }, { n: 4, text: 'num templo' }], answer: 1, explanationPt: 'ティラさんが{昼休|ひるやす}みに、{上司|じょうし}の{中田|なかた}さんと{食堂|しょくどう}で{仕事|しごと}や{日本語|にほんご}について{話|はな}す. (Seção 2)' },
    { id: 'iro-e2-l17-12', number: 12, prompt: '聴解 17-13 (近況報告のメッセージ): que tipo de mensagem se escreve ao professor de japonês?', image: `${IMG}/Z_17_1_04_meeru.png`, imageAlt: 'mensagem no celular', choices: [{ n: 1, text: 'uma mensagem de novidades (近況) contando como está a vida/trabalho/japonês, com agradecimento (感謝)' }, { n: 2, text: 'um pedido de reembolso' }, { n: 3, text: 'uma reclamação de produto' }, { n: 4, text: 'um convite para festa' }], answer: 1, explanationPt: '{近況報告|きんきょうほうこく}のメッセージ: {仕事|しごと}/{生活|せいかつ}/{日本語|にほんご}の{変化|へんか} + {感謝|かんしゃ}. {友|とも}だちリクエストを{承認|しょうにん}する. (Seção 3)' },
    { id: 'iro-e2-l17-13', number: 13, prompt: 'Vocabulário de SNS/mensagem: 「{友|とも}だちリクエスト／{承認|しょうにん}する／{授業|じゅぎょう}／{感謝|かんしゃ}する」 significam:', choices: [{ n: 1, text: 'pedido de amizade / aceitar (aprovar) / aula / agradecer (ser grato)' }, { n: 2, text: 'curtida / bloquear / festa / reclamar' }, { n: 3, text: 'mensagem / apagar / prova / desculpar-se' }, { n: 4, text: 'foto / compartilhar / nota / convidar' }], answer: 1, explanationPt: '{友|とも}だちリクエスト, {承認|しょうにん}する (aprovar), {授業|じゅぎょう} (aula), {感謝|かんしゃ}する (agradecer). (Seção 3)' },
    { id: 'iro-e2-l17-14', number: 14, prompt: 'Vocabulário de mudança/adaptação: 「{慣|な}れる／{増|ふ}える／{困|こま}る／{苦労|くろう}する／おかげで」 significam:', choices: [{ n: 1, text: 'acostumar-se / aumentar / ter dificuldade/aperto / passar por dificuldades / graças a' }, { n: 2, text: 'esquecer / diminuir / descansar / brincar / por causa de (culpa)' }, { n: 3, text: 'aprender / mudar / pagar / viajar / apesar de' }, { n: 4, text: 'cansar / sumir / comprar / dormir / em vez de' }], answer: 1, explanationPt: '{慣|な}れる (acostumar), {増|ふ}える (aumentar), {困|こま}る (ter dificuldade), {苦労|くろう}する (passar aperto), おかげで (graças a). (Atividades)' },
    { id: 'iro-e2-l17-15', number: 15, prompt: 'Vocabulário de hobby/comunicação: 「{和太鼓|わだいこ}／サークル／{誘|さそ}う／やりとり／〜{以外|いがい}」 significam:', choices: [{ n: 1, text: 'tambor japonês / clube (círculo) / convidar / troca (de mensagens/comunicação) / além de ~' }, { n: 2, text: 'piano / fila / recusar / silêncio / dentro de ~' }, { n: 3, text: 'violão / time / cobrar / encontro / antes de ~' }, { n: 4, text: 'flauta / aula / pagar / despedida / depois de ~' }], answer: 1, explanationPt: '{和太鼓|わだいこ}, サークル (clube), {誘|さそ}う (convidar), やりとり (troca/comunicação), 〜{以外|いがい} (além de). (Atividade 1)' },
    { id: 'iro-e2-l17-16', number: 16, prompt: 'Os kanji 「{最近|さいきん}／{授業|じゅぎょう}／{問題|もんだい}／{大変|たいへん}（な)／{困|こま}る」 lêem-se:', choices: [{ n: 1, text: 'さいきん (recentemente) / じゅぎょう (aula) / もんだい (problema) / たいへん (difícil/duro) / こまる (ter dificuldade)' }, { n: 2, text: 'さいきん / じゅぎょう / もんだい / だいへん / くるしる' }, { n: 3, text: 'もとちか / じゅぎょう / といだい / たいへん / こまる' }, { n: 4, text: 'さいきん / じゅごう / もんだい / たいへん / なやる' }], answer: 1, explanationPt: '{最近|さいきん}, {授業|じゅぎょう}, {問題|もんだい}, {大変|たいへん}（な), {困|こま}る. (漢字のことば)' },
    { id: 'iro-e2-l17-17', number: 17, prompt: 'Os kanji 「{違|ちが}う／{慣|な}れる／{増|ふ}える／{笑|わら}う／{苦労|くろう}する」 lêem-se:', choices: [{ n: 1, text: 'ちがう (ser diferente) / なれる (acostumar-se) / ふえる (aumentar) / わらう (rir) / くろうする (penar/esforçar-se)' }, { n: 2, text: 'いう / なれる / ぞうえる / わらう / くろうする' }, { n: 3, text: 'ちがう / かんれる / ふえる / しょうう / くろうする' }, { n: 4, text: 'ちがう / なれる / ふえる / わらう / にがろうする' }], answer: 1, explanationPt: '{違|ちが}う ({文化|ぶんか}が{違|ちが}う), {慣|な}れる, {増|ふ}える, {笑|わら}う, {苦労|くろう}する. (漢字のことば)' },
    { id: 'iro-e2-l17-18', number: 18, prompt: 'Resumo: para contar mudanças (antes × agora), a lição reúne as formas:', choices: [{ n: 1, text: 'Nになる / なAになる / いA-くなる / V-(可能形)ようになる / V-るようになる / V-なくなる (+ 前より)' }, { n: 2, text: '〜てもらえますか / Nのために' }, { n: 3, text: '命令形 / V-るな' }, { n: 4, text: '〜たまま / 〜のにいい' }], answer: 1, explanationPt: 'Mudanças (変化): {職人|しょくにん}になる, {元気|げんき}になる, {楽|たの}しくなる, {話|はな}せるようになる, {使|つか}うようになる, {困|こま}らなくなる; {前|まえ}より. (文法ノート ❶)' },
  ],
}

// Resumos das faixas de áudio da Lição 17 (situação + falas-chave citadas; não verbatim)
const L17_SCRIPTS: Record<string, ScriptItem[]> = {
  '17-06': [
    {
      label: '会話モデル — 最近の生活の変化 (17-06) · resumo',
      setupJa: '{最近|さいきん}の{生活|せいかつ}の{変化|へんか}について{話|はな}しています。',
      setupPt: 'Resumo: ao ser perguntada se já se acostumou ao Japão, a pessoa conta as mudanças — agora tem hobby, mais amigos, não tem mais problemas nas compras e passou a aproveitar mais a vida.',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}には、もう{慣|な}れましたか？', pt: 'Já se acostumou ao Japão?' },
        { speaker: 'B', ja: 'はい、おかげさまで。{前|まえ}は{毎日|まいにち}{仕事|しごと}だけでしたけど、{今|いま}は{趣味|しゅみ}も{楽|たの}しめるようになりました。', pt: 'Sim, graças a você. Antes era só trabalho todo dia, mas agora passei a aproveitar também os hobbies.' },
      ],
    },
  ],
  '17-10': [
    {
      label: '会話 — 仕事や日本語について（ティラ×中田）(17-10) · resumo',
      setupJa: 'ティラさんが、{昼休|ひるやす}みに、{上司|じょうし}の{中田|なかた}さんと{食堂|しょくどう}で{話|はな}しています。',
      setupPt: 'Resumo: no almoço, Tila conta ao chefe Nakata como mudou no trabalho (antes não sabia como fazer, agora entende bastante) e no japonês (passou a entender quase tudo e a falar mais que antes).',
      lines: [
        { speaker: 'ティラ', ja: 'はじめは、やり{方|かた}がわからないことが{多|おお}かったですが、{今|いま}は、だいぶわかるようになりました。', pt: 'No começo havia muita coisa que eu não sabia fazer, mas agora passei a entender bastante.' },
        { speaker: 'ティラ', ja: '{前|まえ}より{話|はな}せるようになりました。', pt: 'Passei a falar mais do que antes.' },
      ],
    },
  ],
}

const lesson17: Section = {
  id: 'lesson-17',
  level: 'elementary2',
  titleJa: '第17課 日本語が前より話せるようになりました',
  titlePt: 'Lição 17 — Passei a falar japonês mais do que antes',
  summaryPt:
    'Minha vida · falar das mudanças recentes na vida (前は仕事だけでしたけど、今は趣味も楽しめるようになりました／買い物に困らなくなりました), comparar antes e agora no trabalho e no japonês (はじめは…が、今は…ようになりました) e escrever uma mensagem de novidades (近況) ao professor de japonês.',
  studyNotes: [
    {
      title: 'Tópico: Minha vida (私の人生)',
      bodyPt:
        '## O que você vai conseguir fazer (Can-do)\n' +
        '- Falar de forma simples sobre as mudanças recentes na sua vida.\n' +
        '- Falar sobre o trabalho e o japonês comparando como era antes e como é agora.\n' +
        '- Escrever uma mensagem ao professor de japonês contando as novidades (近況).\n\n' +
        '💡 Foco em **variação/mudança** (変化): antes × agora, com 「〜ようになりました」e 「前より」.',
    },
    {
      title: 'Mudança: V-(可能形)ようになりました (➊)',
      bodyPt:
        '**V(可能形) + ようになりました** = passou a conseguir fazer algo (antes não):\n\n' +
        '- `{日本語|にほんご}が{前|まえ}より{話|はな}せるようになりました`, `ほかの{人|ひと}に{教|おし}えられるようになりました`.\n' +
        '- ⚠️ Com **わかる/できる** (já potenciais): `{日本語|にほんご}が{少|すこ}しわかるようになりました`, `{仕事|しごと}が{早|はや}くできるようになりました`.\n' +
        '- **V-るようになる** (mudança de hábito/gosto): `{料理|りょうり}にしょうゆを{使|つか}うようになりました`. (文法ノート ❶)',
    },
    {
      title: 'Mudança: 〜なる / V-なくなる (➊ · resumo)',
      bodyPt:
        'Outras formas de marcar **mudança**:\n\n' +
        '- **N になる** (`すし{職人|しょくにん}になりたい`), **なA になる** (`{元気|げんき}になりました`), **いA → くなる** (`{仕事|しごと}が{楽|たの}しくなりました`).\n' +
        '- **V-なくなりました** — deixou de ~: `{生活|せいかつ}に{困|こま}らなくなりました` (ない→なく + なる).\n\n' +
        '💡 Comparação com o passado: **{前|まえ}より** (mais que antes). (文法ノート ❶)',
    },
    {
      title: 'Vocabulário e Kanji',
      bodyPt:
        '**Mudança/vida:** {慣|な}れる, {増|ふ}える, {困|こま}る/{困|こま}らなくなる, {苦労|くろう}する, おかげで, {変化|へんか}, {趣味|しゅみ}, {最近|さいきん}.\n\n' +
        '**Hobby/SNS:** {和太鼓|わだいこ}, サークル, {入|はい}る, {誘|さそ}う, やりとり, 〜{以外|いがい}, ドラマ, セリフ, うまい, ほとんど, {友|とも}だちリクエスト, {承認|しょうにん}する, {近況|きんきょう}, {感謝|かんしゃ}する.\n\n' +
        '**Trabalho:** やり{方|かた}, {締|し}め{日|び}, {納期|のうき}, {上司|じょうし}, {食堂|しょくどう}, {昼休|ひるやす}み.\n\n' +
        '**Kanji da lição:** {最近|さいきん}, {授業|じゅぎょう}, {問題|もんだい}, {大変|たいへん}（な), {困|こま}る, {違|ちが}う, {慣|な}れる, {増|ふ}える, {笑|わら}う, {苦労|くろう}する.',
    },
  ],
  groups: [lesson17Group],
  audios: attachScripts(17, L17_SCRIPTS),
}

// ---- Lição 18 (estrutura por tópico; exercícios em construção) -----------
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
  lesson7,
  lesson8,
  // Tópico 5 — Eventos anuais e etiqueta (年中行事とマナー)
  lesson9,
  lesson10,
  // Tópico 6 — Comprar bem (上手な買い物)
  lesson11,
  lesson12,
  // Tópico 7 — Serviços diversos (さまざまなサービス)
  lesson13,
  lesson14,
  // Tópico 8 — Natureza e meio ambiente (自然と環境)
  lesson15,
  lesson16,
  // Tópico 9 — Minha vida (私の人生)
  lesson17,
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
