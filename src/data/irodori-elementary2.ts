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

// ---- Lições 2-18 (estrutura por tópico; exercícios em construção) ------------
const sections: Section[] = [
  // Tópico 1 — As pessoas ao meu redor (私の周りの人たち)
  lesson1,
  scaffold(2, 'As pessoas ao meu redor', 'まじめそうな人ですね', 'Parece uma pessoa séria', [
    'Descrever as características de uma pessoa, ou identificá-la ouvindo suas características, ao procurar alguém.',
    'Falar sobre a aparência e o jeito de alguém que não está presente.',
    'Falar de forma simples sobre um famoso de quem gosta — por que gosta e como começou a gostar.',
    'Ler uma entrevista simples que apresenta uma pessoa e entender o conteúdo.',
  ]),
  // Tópico 2 — No restaurante (レストランで)
  scaffold(3, 'No restaurante', 'アレルギーがあるので、食べられないんです', 'Não posso comer porque tenho alergia', [
    'Ler um cardápio e entender nomes de pratos, preços e serviços.',
    'Dizer a quem come com você ou ao garçom o que você não pode comer e por quê.',
    'Transmitir ao garçom seus pedidos de assento, comanda etc.',
    'Fazer uma reserva em restaurante por telefone.',
    'Ver um cupom de restaurante e extrair as informações necessárias.',
  ]),
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
