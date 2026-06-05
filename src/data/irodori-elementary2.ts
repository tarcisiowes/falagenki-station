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

// ---- Lições 4-18 (estrutura por tópico; exercícios em construção) ------------
const sections: Section[] = [
  // Tópico 1 — As pessoas ao meu redor (私の周りの人たち)
  lesson1,
  lesson2,
  // Tópico 2 — No restaurante (レストランで)
  lesson3,
  scaffold(4, 'No restaurante', 'しょうゆをつけないで食べてください', 'Coma sem passar shoyu', [
    'Ouvir a indicação de um restaurante recomendado e entender suas características.',
    'Ouvir e entender a explicação de como comer um prato.',
    'Perguntar e responder sobre como se come um prato.',
    'Apresentar de forma simples um prato do seu país — características, ingredientes, modo de comer.',
    'Ler avaliações de restaurantes na internet e extrair informações como sabor e preço.',
  ]),
  // Tópico 3 — Vamos viajar (旅行に行こう)
  scaffold(5, 'Vamos viajar', '早く予約したほうがいいですよ', 'É melhor reservar logo', [
    'Ouvir uma breve apresentação de pontos turísticos do Japão e entender como são e o que se pode fazer.',
    'Discutir planos de viagem com um amigo.',
    'Pedir ou dar conselhos sobre uma viagem em planejamento.',
    'Ler avaliações em site de viagem e entender o conteúdo geral.',
  ]),
  scaffold(6, 'Vamos viajar', 'いろいろなところに行けて、よかったです', 'Que bom que pude ir a vários lugares', [
    'Ler passagem de trem, avisos no vagão e quadros da estação para extrair informações.',
    'Falar de forma simples sobre seus planos de viagem a alguém que conheceu na viagem.',
    'Entender anúncios na estação/trem e perguntar a quem está perto quando não entender.',
    'Falar de forma simples sobre suas impressões da viagem.',
    'Escrever um post simples nas redes sobre a experiência e impressões da viagem.',
  ]),
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
