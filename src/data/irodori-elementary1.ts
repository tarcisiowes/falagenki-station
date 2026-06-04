import type { ExerciseGroup, Level, ScriptItem, Section, StudyNote } from './types'
import { ELEMENTARY1_AUDIO } from './irodori-elementary1-audio'

// Liga transcrições (script) a faixas específicas de uma lição, pelo código (ex.: '01-06').
function attachScripts(n: number, scripts: Record<string, ScriptItem[]>): typeof ELEMENTARY1_AUDIO[number] {
  return (ELEMENTARY1_AUDIO[n] ?? []).map((t) => {
    const code = t.id.replace('iro-e1-', '')
    return scripts[code] ? { ...t, script: scripts[code] } : t
  })
}

// =====================================================================
//  Irodori — いろどり: Japanese for Life in Japan (Japan Foundation)
//  Parte "Elementary 1" (初級1 / A2): 9 tópicos, 18 lições (課).
//  Estrutura por módulos (lições), com os áudios oficiais por lição.
//  Explicações e traduções em pt-BR são autorais.
// =====================================================================

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
    level: 'elementary1',
    titleJa: `第${n}課 ${titleJa}`,
    titlePt: `Lição ${n} — ${titlePt}`,
    summaryPt: `${topicPt} · ${titlePt}`,
    studyNotes: canDoNotes(topicPt, candos),
    groups: [],
    audios: ELEMENTARY1_AUDIO[n],
  }
}

// ---- Lição 1: レストランで働いています (tópico 今の私) ----------------------
const lesson1Group: ExerciseGroup = {
  id: 'iro-e1-l1',
  title: 'レストランで働いています',
  subtitlePt: 'Quem eu sou agora · cumprimentar quem não se vê há tempos, falar há quanto tempo está no Japão e do que faz aqui',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l1-1', number: 1, prompt: 'O japonês tem dois estilos de fala: 丁寧体 (polido) e 普通体 (casual). O que distingue o 丁寧体?', choices: [{ n: 1, text: 'termina com です／ます (formal, mostra respeito)' }, { n: 2, text: 'nunca usa です／ます' }, { n: 3, text: 'só se usa por escrito' }, { n: 4, text: 'é usado só com crianças' }], answer: 1, explanationPt: '丁寧体 (teineitai) = estilo polido, com です／ます no fim; usado com quem não se conhece bem ou com superiores. 普通体 (futsūtai) = casual, sem です／ます, com amigos/família. (Nota ➊)' },
    { id: 'iro-e1-l1-2', number: 2, prompt: '「お{久|ひさ}しぶりです」 (vs o casual 「{久|ひさ}しぶり」) usa-se com:', choices: [{ n: 1, text: 'pessoas com quem se deve ter formalidade (não íntimas / superiores)' }, { n: 2, text: 'só com amigos íntimos' }, { n: 3, text: 'só com crianças' }, { n: 4, text: 'ninguém, é errado' }], answer: 1, translationPt: 'Quanto tempo! / Há quanto tempo!', explanationPt: 'お{久|ひさ}しぶりです = forma polida; {久|ひさ}しぶり = casual. Ambas significam “quanto tempo sem se ver”. (Atividade 1 · Nota ➊)' },
    { id: 'iro-e1-l1-3', number: 3, prompt: '「お{元気|げんき}ですか？」 e a casual 「{元気|げんき}？」 significam:', choices: [{ n: 1, text: 'Como vai? / Tudo bem? (você está bem?)' }, { n: 2, text: 'Quantos anos você tem?' }, { n: 3, text: 'Onde você mora?' }, { n: 4, text: 'O que você faz?' }], answer: 1, explanationPt: 'お{元気|げんき}ですか？ (polido) / {元気|げんき}？ (casual) = você está bem/com saúde? Resposta típica: はい、おかげさまで。 (Atividade 1)' },
    { id: 'iro-e1-l1-4', number: 4, prompt: '「はい、おかげさまで」 (resposta a お元気ですか？) significa:', choices: [{ n: 1, text: 'Sim, estou bem, obrigado(a) (graças a você/aos cuidados)' }, { n: 2, text: 'Não, não estou bem' }, { n: 3, text: 'Não sei ainda' }, { n: 4, text: 'Com licença' }], answer: 1, explanationPt: 'おかげさまで = expressão de cortesia ao agradecer por estar bem (“graças a Deus / a você”). No casual: うん、{元気|げんき}。 (Atividade 1)' },
    { id: 'iro-e1-l1-5', number: 5, prompt: '「{日本|にほん}に{来|き}て1{年|ねん}になります」 (【período】になります) significa:', choices: [{ n: 1, text: 'já faz 1 ano que vim ao Japão (passagem de tempo)' }, { n: 2, text: 'vou ao Japão por 1 ano' }, { n: 3, text: 'cheguei ao Japão em 1 ano' }, { n: 4, text: 'fico 1 ano no Japão' }], answer: 1, translationPt: 'Já faz um ano que vim ao Japão.', explanationPt: '【período】になります indica o tempo decorrido. Usa-se com 〜か{月|げつ}／〜{年|ねん}. (Nota ➋)' },
    { id: 'iro-e1-l1-6', number: 6, prompt: 'Em 「{日本|にほん}に{来|き}て1{年|ねん}になります」, a parte 「{来|き}て」 (forma テ) marca:', choices: [{ n: 1, text: 'o ponto de início do período (desde que vim ao Japão)' }, { n: 2, text: 'o futuro' }, { n: 3, text: 'um pedido' }, { n: 4, text: 'uma negação' }], answer: 1, explanationPt: 'A forma テ do verbo antes de 〜になります marca o início da contagem: {日本|にほん}に{来|き}て = desde que vim ao Japão. {仕事|しごと}を{始|はじ}めて3か{月|げつ}になります. (Nota ➋)' },
    { id: 'iro-e1-l1-7', number: 7, prompt: 'Qual leitura está certa para a contagem de meses 「1か{月|げつ}／6か{月|げつ}／10か{月|げつ}」?', choices: [{ n: 1, text: 'いっかげつ／ろっかげつ／じゅっかげつ' }, { n: 2, text: 'いちかげつ／ろくかげつ／じゅうかげつ' }, { n: 3, text: 'ひとかげつ／むいかげつ／とおかげつ' }, { n: 4, text: 'いっこ／ろっこ／じゅっこ' }], answer: 1, explanationPt: '〜か{月|げつ} (meses): 1=いっかげつ, 2=にかげつ, 3=さんかげつ, 6=ろっかげつ, 8=はちかげつ, 10=じゅっかげつ. (Atividade 2 · tabela)' },
    { id: 'iro-e1-l1-8', number: 8, prompt: '「{去年|きょねん}の9{月|がつ}に{来|き}ました」 (【ponto no tempo】（に）来ました) expressa:', choices: [{ n: 1, text: 'o momento em que algo aconteceu (vim em setembro do ano passado)' }, { n: 2, text: 'há quanto tempo está no Japão' }, { n: 3, text: 'quanto tempo vai ficar' }, { n: 4, text: 'aonde quer ir' }], answer: 1, translationPt: 'Vim em setembro do ano passado.', explanationPt: '【時点】（に）{来|き}ました indica quando o fato ocorreu (passado). Usa-se com expressões de passado. (Nota ➌)' },
    { id: 'iro-e1-l1-9', number: 9, prompt: '⚠️ Com quais palavras NÃO se usa a partícula 「に」 ao dizer quando algo aconteceu?', choices: [{ n: 1, text: '{去年|きょねん}／{先月|せんげつ}／{先週|せんしゅう} (ano passado/mês passado/semana passada)' }, { n: 2, text: '9{月|がつ}／{日曜日|にちようび}' }, { n: 3, text: '3{時|じ}／2020{年|ねん}' }, { n: 4, text: 'todas exigem に' }], answer: 1, explanationPt: '⚠️ {去年|きょねん}、{先月|せんげつ}、{先週|せんしゅう} (e {昨日|きのう}、{今日|きょう}) não levam に: {先月|せんげつ}、{来|き}ました. Mas datas/horas sim: 9{月|がつ}に、{日曜日|にちようび}に. (Nota ➌)' },
    { id: 'iro-e1-l1-10', number: 10, prompt: '「{働|はたら}いています」 / 「{勉強|べんきょう}しています」 (V-ています①) expressa:', choices: [{ n: 1, text: 'situação/estado atual — aqui, a ocupação (estou trabalhando / estudando)' }, { n: 2, text: 'algo que vai fazer amanhã' }, { n: 3, text: 'algo que já terminou' }, { n: 4, text: 'um pedido' }], answer: 1, explanationPt: 'V-ています = forma テ + います, indica estado/situação atual. Para ocupação: {働|はたら}いています, {仕事|しごと}をしています, {勉強|べんきょう}しています. (Nota ➍)' },
    { id: 'iro-e1-l1-11', number: 11, prompt: 'Na fala do dia a dia, 「{働|はたら}いています」 vira frequentemente:', choices: [{ n: 1, text: '{働|はたら}いてます (cai o い de ～ています)' }, { n: 2, text: '{働|はたら}いていました' }, { n: 3, text: '{働|はたら}きます' }, { n: 4, text: '{働|はたら}いてください' }], answer: 1, explanationPt: 'Na fala omite-se o い: 〜ています → 〜てます. O casual de 〜ています é 〜ている (e na fala 〜てる). (Nota ➍)' },
    { id: 'iro-e1-l1-12', number: 12, prompt: '「もう{慣|な}れましたか？」 — 「{慣|な}れる」 significa:', choices: [{ n: 1, text: 'acostumar-se / habituar-se (já se acostumou?)' }, { n: 2, text: 'cansar-se' }, { n: 3, text: 'mudar-se' }, { n: 4, text: 'trabalhar' }], answer: 1, explanationPt: '{慣|な}れる = acostumar-se. もう{慣|な}れましたか？ = já se acostumou? Respostas: はい / はい、なんとか / まだ、ちょっと……. (Atividade 2)' },
    { id: 'iro-e1-l1-13', number: 13, prompt: 'As palavras 「もう／まだ／ちょうど／なんとか」 significam:', choices: [{ n: 1, text: 'já / ainda (não) / exatamente / mais ou menos (de algum jeito)' }, { n: 2, text: 'sempre / nunca / talvez / muito' }, { n: 3, text: 'aqui / ali / hoje / amanhã' }, { n: 4, text: 'e / mas / por isso / então' }], answer: 1, explanationPt: 'もう (já), まだ (ainda/ainda não), ちょうど (exatamente: ちょうど{半年|はんとし}), なんとか (mais ou menos, “de algum jeito”). (Atividade 2)' },
    { id: 'iro-e1-l1-14', number: 14, prompt: 'Na lista de profissões (Atividade 3), qual conjunto está correto?', choices: [{ n: 1, text: 'レストランで{働|はたら}く／{工場|こうじょう}で{働|はたら}く／{介護|かいご}の{仕事|しごと}をする／{野菜|やさい}を{作|つく}る' }, { n: 2, text: '{映画|えいが}を{見|み}る／{温泉|おんせん}に{入|はい}る' }, { n: 3, text: '{掃除|そうじ}する／{洗濯|せんたく}する' }, { n: 4, text: '{大人|おとな}／{高校生|こうこうせい}' }], answer: 1, explanationPt: 'Profissões: レストラン／ホテル／{工場|こうじょう}で{働|はたら}く (trabalhar em restaurante/hotel/fábrica), {介護|かいご}／{建設|けんせつ}の{仕事|しごと}をする (cuidados/construção), {野菜|やさい}を{作|つく}る (cultivar legumes). (Atividade 3)' },
    { id: 'iro-e1-l1-15', number: 15, prompt: '「{専門学校|せんもんがっこう}に{通|かよ}う」 / 「{日本語学校|にほんごがっこう}で{勉強|べんきょう}する」 / 「{主婦|しゅふ}・{主夫|しゅふ}」 significam:', choices: [{ n: 1, text: 'frequentar escola técnica / estudar na escola de japonês / dona(o) de casa' }, { n: 2, text: 'trabalhar em fábrica / cultivar legumes / cuidar de idosos' }, { n: 3, text: 'ir ao hospital / ao correio / ao banco' }, { n: 4, text: 'cozinhar / lavar / limpar' }], answer: 1, explanationPt: '{専門学校|せんもんがっこう}に{通|かよ}う = frequentar escola técnica ({通|かよ}う = frequentar/ir regularmente); {主婦|しゅふ} (dona de casa) / {主夫|しゅふ} (dono de casa). (Atividade 3)' },
    { id: 'iro-e1-l1-16', number: 16, prompt: 'Para dar impressões do trabalho/vida (仕事や生活はどう？), qual lista é só de impressões?', choices: [{ n: 1, text: '{忙|いそが}しい／{大変|たいへん}／{疲|つか}れる／まあまあ／{楽|たの}しい／おもしろい／みんな{親切|しんせつ}／{勉強|べんきょう}になる' }, { n: 2, text: 'レストラン／ホテル／{工場|こうじょう}' }, { n: 3, text: '{去年|きょねん}／{先月|せんげつ}／{先週|せんしゅう}' }, { n: 4, text: 'いっかげつ／にかげつ／さんかげつ' }], answer: 1, explanationPt: 'Impressões: {忙|いそが}しい (ocupado), {大変|たいへん} (difícil/puxado), {疲|つか}れる (cansa), まあまあ (mais ou menos), {楽|たの}しい (divertido), おもしろい (interessante), みんな{親切|しんせつ} (todos gentis), {勉強|べんきょう}になる (aprendo muito). (Atividade 3)' },
    { id: 'iro-e1-l1-17', number: 17, prompt: 'Os kanji 「{学生|がくせい}／{学校|がっこう}／{生活|せいかつ}」 lêem-se:', choices: [{ n: 1, text: 'がくせい (estudante) / がっこう (escola) / せいかつ (vida/cotidiano)' }, { n: 2, text: 'がくせい / がくこう / いきかつ' }, { n: 3, text: 'まなぶ / まなこう / うむかつ' }, { n: 4, text: 'がくしょう / がっこう / せいかつ' }], answer: 1, explanationPt: '{学生|がくせい} (estudante), {学校|がっこう} (escola), {生活|せいかつ} (vida/cotidiano). Kanji da lição. (漢字)' },
    { id: 'iro-e1-l1-18', number: 18, prompt: 'Os kanji 「{去年|きょねん}／{先週|せんしゅう}／{仕事|しごと}」 lêem-se:', choices: [{ n: 1, text: 'きょねん (ano passado) / せんしゅう (semana passada) / しごと (trabalho)' }, { n: 2, text: 'きょねん / さきしゅう / じこと' }, { n: 3, text: 'こねん / せんしゅう / しじ' }, { n: 4, text: 'きょとし / せんしゅう / つかえごと' }], answer: 1, explanationPt: '{去年|きょねん} (ano passado), {先週|せんしゅう} (semana passada), {仕事|しごと} (trabalho/serviço). (漢字)' },
    { id: 'iro-e1-l1-19', number: 19, prompt: 'Os kanji 「{元気|げんき}（な）／{忙|いそが}しい／{働|はたら}く／{作|つく}る」 lêem-se:', choices: [{ n: 1, text: 'げんき (bem/saúde) / いそがしい (ocupado) / はたらく (trabalhar) / つくる (fazer)' }, { n: 2, text: 'げんき / ぼうしい / どうく / さくる' }, { n: 3, text: 'もとき / いそがしい / はたらく / つくる' }, { n: 4, text: 'げんき / いそがしい / うごく / なおる' }], answer: 1, explanationPt: '{元気|げんき}（な） (com saúde/energia), {忙|いそが}しい (ocupado), {働|はたら}く (trabalhar), {作|つく}る (fazer/produzir). (漢字)' },
    { id: 'iro-e1-l1-20', number: 20, prompt: '📌 TIPS 「{目上|めうえ}」と「{目下|めした}」: o que significam?', choices: [{ n: 1, text: 'pessoa de posição superior / inferior (idade, cargo, hierarquia)' }, { n: 2, text: 'cliente / funcionário' }, { n: 3, text: 'pai / filho' }, { n: 4, text: 'professor / aluno apenas' }], answer: 1, explanationPt: '{目上|めうえ} = quem está acima (mais velho, chefe, veterano); {目下|めした} = quem está abaixo. Influencia o uso de 丁寧体／普通体: com {目上|めうえ} usa-se o estilo polido. (TIPS)' },
    { id: 'iro-e1-l1-21', number: 21, prompt: '📌 TIPS — sobre a saudação 「お{元気|げんき}ですか？」 no Japão:', choices: [{ n: 1, text: 'não se usa todo dia; mais para quem você não vê há um tempo' }, { n: 2, text: 'usa-se toda vez que encontra alguém, mesmo diariamente' }, { n: 3, text: 'é uma despedida' }, { n: 4, text: 'só se usa por escrito' }], answer: 1, explanationPt: 'お{元気|げんき}ですか？ não é um cumprimento diário no Japão; pergunta-se a quem não se vê há algum tempo. No dia a dia usam-se おはようございます／こんにちは. (TIPS)' },
    { id: 'iro-e1-l1-22', number: 22, prompt: 'Diálogo 01-01 (festa, dois conhecidos): qual estilo os dois usam?', context: 'Ａ：あ、お{久|ひさ}しぶりです。 Ｂ：お{久|ひさ}しぶりです。 Ａ：お{元気|げんき}ですか？ Ｂ：はい。おかげさまで。', choices: [{ n: 1, text: 'os dois usam o estilo polido (丁寧体) — não são íntimos' }, { n: 2, text: 'os dois usam o casual' }, { n: 3, text: 'um usa polido e o outro casual' }, { n: 4, text: 'nenhum cumprimenta' }], answer: 1, explanationPt: 'Conhecidos não íntimos → ambos no 丁寧体: お{久|ひさ}しぶりです／お{元気|げんき}ですか？. (Atividade 1 · Nota ➊)' },
    { id: 'iro-e1-l1-23', number: 23, prompt: 'Diálogo 01-02 (dois amigos jovens): como soa a conversa?', context: 'Ａ：あ、{久|ひさ}しぶり。 Ｂ：{久|ひさ}しぶり。 Ａ：{元気|げんき}？ Ｂ：うん。{元気|げんき}。', choices: [{ n: 1, text: 'os dois usam o casual (普通体) — são amigos próximos' }, { n: 2, text: 'os dois usam o polido' }, { n: 3, text: 'um é chefe do outro' }, { n: 4, text: 'estão se conhecendo agora' }], answer: 1, explanationPt: 'Amigos da mesma idade → 普通体: {久|ひさ}しぶり／{元気|げんき}？／うん、{元気|げんき}。 (Atividade 1 · Nota ➊)' },
    { id: 'iro-e1-l1-24', number: 24, prompt: 'Diálogo 01-03 (veterano e novato): por que os estilos são diferentes?', context: 'Ａ：あ、{久|ひさ}しぶり。 Ｂ：お{久|ひさ}しぶりです。 Ａ：{元気|げんき}？ Ｂ：はい。おかげさまで。', choices: [{ n: 1, text: 'A (superior) fala casual; B (subordinado/mais novo) responde no polido' }, { n: 2, text: 'os dois usam casual' }, { n: 3, text: 'os dois usam polido' }, { n: 4, text: 'B é o chefe de A' }], answer: 1, explanationPt: 'A está em posição superior ({先輩|せんぱい}/chefe) e usa 普通体; B, mais novo, responde no 丁寧体. Reflete {目上|めうえ}・{目下|めした}. (Atividade 1 · Notas ➊ · TIPS)' },
    { id: 'iro-e1-l1-25', number: 25, prompt: 'Diálogo 01-06: 「{日本|にほん}に{来|き}て、どのぐらいになりますか？」 — o que a pessoa responde?', context: 'Ｂ：1{年|ねん}になります。 Ａ：そうですか。{日本|にほん}の{生活|せいかつ}に、もう{慣|な}れましたか？ Ｂ：はい。', choices: [{ n: 1, text: 'Faz 1 ano (1{年|ねん}になります) e já se acostumou (はい)' }, { n: 2, text: 'Faz meio ano e ainda não se acostumou' }, { n: 3, text: 'Veio no mês passado' }, { n: 4, text: 'Veio em setembro do ano passado' }], answer: 1, explanationPt: '1{年|ねん}になります = já faz 1 ano. もう{慣|な}れましたか？ → はい (já se acostumou). (Atividade 2 · Nota ➋)' },
    { id: 'iro-e1-l1-26', number: 26, prompt: 'Diálogo 01-07: há quanto tempo a pessoa está no Japão e está acostumada?', context: 'Ｂ：ちょうど{半年|はんとし}です。 Ａ：そうですか。{日本|にほん}に{慣|な}れましたか？ Ｂ：はい、なんとか。', choices: [{ n: 1, text: 'Exatamente meio ano; mais ou menos acostumada (なんとか)' }, { n: 2, text: 'Um ano; totalmente acostumada' }, { n: 3, text: 'Um mês; nada acostumada' }, { n: 4, text: 'Dois anos; muito acostumada' }], answer: 1, explanationPt: 'ちょうど{半年|はんとし} = exatamente meio ano. はい、なんとか = me viro / mais ou menos. (Atividade 2)' },
    { id: 'iro-e1-l1-27', number: 27, prompt: 'Diálogo 01-08: 「{日本|にほん}に{来|き}て、どのぐらいですか？」 — resposta?', context: 'Ｂ：{去年|きょねん}の9{月|がつ}に{来|き}ました。 Ａ：そうですか。もう{慣|な}れましたか？ Ｂ：はい、おかげさまで。', choices: [{ n: 1, text: 'Veio em setembro do ano passado; já se acostumou (おかげさまで)' }, { n: 2, text: 'Faz 1 ano; ainda não' }, { n: 3, text: 'Veio no mês passado' }, { n: 4, text: 'Faz meio ano' }], answer: 1, explanationPt: '{去年|きょねん}の9{月|がつ}に{来|き}ました (ponto no tempo, Nota ➌). はい、おかげさまで = sim, já me acostumei, obrigado(a). (Atividade 2)' },
    { id: 'iro-e1-l1-28', number: 28, prompt: 'Diálogo 01-09: a pessoa chegou recentemente — o que diz sobre se acostumar?', context: 'Ｂ：{私|わたし}は、{先月|せんげつ}、{来|き}ました。 Ａ：そうですか。{少|すこ}し{慣|な}れましたか？ Ｂ：まだ、ちょっと……。', choices: [{ n: 1, text: 'Veio no mês passado e ainda não se acostumou (まだ、ちょっと……)' }, { n: 2, text: 'Veio há 1 ano e já se acostumou' }, { n: 3, text: 'Veio em setembro e está totalmente adaptada' }, { n: 4, text: 'Mora no Japão há 10 anos' }], answer: 1, explanationPt: '{先月|せんげつ}、{来|き}ました (sem に, Nota ➌). まだ、ちょっと…… = ainda não muito / ainda estou me adaptando. (Atividade 2)' },
    { id: 'iro-e1-l1-29', number: 29, prompt: 'Diálogo 01-18: 「{日本|にほん}では、{何|なに}をしていますか？」 — o que a pessoa faz e como é?', context: 'Ｂ：レストランで{働|はたら}いています。 Ａ：{仕事|しごと}はどうですか？ Ｂ：とても{忙|いそが}しいです。', choices: [{ n: 1, text: 'Trabalha num restaurante; é muito corrido (とても{忙|いそが}しい)' }, { n: 2, text: 'Cultiva legumes; é cansativo' }, { n: 3, text: 'Trabalha numa fábrica; aprende muito' }, { n: 4, text: 'É estudante de escola técnica' }], answer: 1, explanationPt: 'レストランで{働|はたら}いています (V-ています①, Nota ➍). とても{忙|いそが}しいです = muito ocupado/corrido. (Atividade 3)' },
    { id: 'iro-e1-l1-30', number: 30, prompt: 'Diálogo 01-19: o que a pessoa faz e qual a impressão do trabalho?', context: 'Ｂ：{野菜|やさい}を{作|つく}っています。 Ａ：{仕事|しごと}はどうですか？ Ｂ：うーん、{疲|つか}れます。でも、みんな{親切|しんせつ}です。', choices: [{ n: 1, text: 'Cultiva legumes; cansa, mas todos são gentis ({親切|しんせつ})' }, { n: 2, text: 'Trabalha em restaurante; é tranquilo' }, { n: 3, text: 'É dona de casa; é divertido' }, { n: 4, text: 'Estuda programação' }], answer: 1, explanationPt: '{野菜|やさい}を{作|つく}っています = cultivo legumes. {疲|つか}れます (cansa), でも、みんな{親切|しんせつ}です (mas todos são gentis). (Atividade 3)' },
    { id: 'iro-e1-l1-31', number: 31, prompt: 'Diálogo 01-20: 「{介護|かいご}の{仕事|しごと}をしています」 — como a pessoa descreve o trabalho?', context: 'Ｂ：{介護|かいご}の{仕事|しごと}をしています。 Ａ：{仕事|しごと}はどうですか？ Ｂ：{毎日|まいにち}、{大変|たいへん}です。でも、{楽|たの}しいです。', choices: [{ n: 1, text: 'Cuida de idosos; é puxado todo dia, mas divertido' }, { n: 2, text: 'Trabalha em fábrica; é entediante' }, { n: 3, text: 'É estudante; é fácil' }, { n: 4, text: 'Cultiva legumes; cansa' }], answer: 1, explanationPt: '{介護|かいご}の{仕事|しごと} = trabalho de cuidados (a idosos). {毎日|まいにち}{大変|たいへん}ですが{楽|たの}しい = puxado todo dia, mas gratificante. (Atividade 3)' },
    { id: 'iro-e1-l1-32', number: 32, prompt: 'Diálogo 01-23: 「{学生|がくせい}です。{専門学校|せんもんがっこう}に{通|かよ}っています」 — o que estuda e que acha?', context: 'Ａ：{何|なに}を{勉強|べんきょう}していますか？ Ｂ：プログラミングを{勉強|べんきょう}しています。 Ａ：{勉強|べんきょう}はどうですか？ Ｂ：とてもおもしろいです。', choices: [{ n: 1, text: 'Estuda programação numa escola técnica; acha muito interessante' }, { n: 2, text: 'Estuda japonês; acha difícil' }, { n: 3, text: 'Trabalha em hotel; é cansativo' }, { n: 4, text: 'É dona de casa; é tranquilo' }], answer: 1, explanationPt: '{学生|がくせい}です、{専門学校|せんもんがっこう}に{通|かよ}っています (frequenta escola técnica), プログラミングを{勉強|べんきょう}しています, とてもおもしろいです (muito interessante). (Atividade 3)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 1 (聴解スクリプト)
const L1_SCRIPTS: Record<string, ScriptItem[]> = {
  '01-01': [
    {
      label: '会話① (01-01)',
      setupJa: '{久|ひさ}しぶりに{会|あ}った2{人|ふたり}が、あいさつをしています。（{知|し}り{合|あ}い）',
      setupPt: 'Duas pessoas que não se viam há tempos se cumprimentam. (conhecidos, estilo polido)',
      lines: [
        { speaker: 'A', ja: 'あ、お{久|ひさ}しぶりです。', pt: 'Ah, quanto tempo!' },
        { speaker: 'B', ja: 'お{久|ひさ}しぶりです。', pt: 'Quanto tempo!' },
        { speaker: 'A', ja: 'お{元気|げんき}ですか？', pt: 'Como vai?' },
        { speaker: 'B', ja: 'はい。おかげさまで。', pt: 'Vou bem, obrigado(a).' },
      ],
    },
  ],
  '01-02': [
    {
      label: '会話② (01-02)',
      setupJa: '{同年代|どうねんだい}の{親|した}しい{友|とも}だち{同士|どうし}。（{普通体|ふつうたい}）',
      setupPt: 'Amigos próximos da mesma idade. (estilo casual)',
      lines: [
        { speaker: 'A', ja: 'あ、{久|ひさ}しぶり。', pt: 'Ah, quanto tempo!' },
        { speaker: 'B', ja: '{久|ひさ}しぶり。', pt: 'Quanto tempo!' },
        { speaker: 'A', ja: '{元気|げんき}？', pt: 'Tudo bem?' },
        { speaker: 'B', ja: 'うん。{元気|げんき}。', pt: 'Sim, tudo bem.' },
      ],
    },
  ],
  '01-03': [
    {
      label: '会話③ (01-03)',
      setupJa: '{先輩|せんぱい}と{後輩|こうはい}。Ａ（{目上|めうえ}）は{普通体|ふつうたい}、Ｂは{丁寧体|ていねいたい}。',
      setupPt: 'Veterano e novato. A (superior) fala casual; B responde no polido.',
      lines: [
        { speaker: 'A', ja: 'あ、{久|ひさ}しぶり。', pt: 'Ah, quanto tempo!' },
        { speaker: 'B', ja: 'お{久|ひさ}しぶりです。', pt: 'Quanto tempo, senhor(a).' },
        { speaker: 'A', ja: '{元気|げんき}？', pt: 'Tudo bem?' },
        { speaker: 'B', ja: 'はい。おかげさまで。', pt: 'Sim, obrigado(a).' },
      ],
    },
  ],
  '01-06': [
    {
      label: '会話① (01-06)',
      setupJa: '4{人|にん}の{人|ひと}が、{自分|じぶん}のことを{話|はな}しています。',
      setupPt: 'Quatro pessoas falam sobre si mesmas (há quanto tempo estão no Japão).',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}に{来|き}て、どのぐらいになりますか？', pt: 'Há quanto tempo você veio para o Japão?' },
        { speaker: 'B', ja: '1{年|ねん}になります。', pt: 'Já faz 1 ano.' },
        { speaker: 'A', ja: 'そうですか。{日本|にほん}の{生活|せいかつ}に、もう{慣|な}れましたか？', pt: 'Ah, sei. Já se acostumou com a vida no Japão?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '01-07': [
    {
      label: '会話② (01-07)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}に{来|き}て、どのぐらいですか？', pt: 'Há quanto tempo você está no Japão?' },
        { speaker: 'B', ja: 'ちょうど{半年|はんとし}です。', pt: 'Exatamente meio ano.' },
        { speaker: 'A', ja: 'そうですか。{日本|にほん}に{慣|な}れましたか？', pt: 'Ah, sei. Já se acostumou com o Japão?' },
        { speaker: 'B', ja: 'はい、なんとか。', pt: 'Mais ou menos, sim.' },
      ],
    },
  ],
  '01-08': [
    {
      label: '会話③ (01-08)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}に{来|き}て、どのぐらいですか？', pt: 'Há quanto tempo você está no Japão?' },
        { speaker: 'B', ja: '{去年|きょねん}の9{月|がつ}に{来|き}ました。', pt: 'Vim em setembro do ano passado.' },
        { speaker: 'A', ja: 'そうですか。もう{慣|な}れましたか？', pt: 'Ah, sei. Já se acostumou?' },
        { speaker: 'B', ja: 'はい、おかげさまで。', pt: 'Sim, graças a Deus.' },
      ],
    },
  ],
  '01-09': [
    {
      label: '会話④ (01-09)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}に{来|き}て、どのぐらいになりますか？', pt: 'Há quanto tempo você veio para o Japão?' },
        { speaker: 'B', ja: '{私|わたし}は、{先月|せんげつ}、{来|き}ました。', pt: 'Eu vim no mês passado.' },
        { speaker: 'A', ja: 'そうですか。{少|すこ}し{慣|な}れましたか？', pt: 'Ah, sei. Já se acostumou um pouco?' },
        { speaker: 'B', ja: 'まだ、ちょっと……。', pt: 'Ainda não, um pouco…' },
      ],
    },
  ],
  '01-18': [
    {
      label: '会話① (01-18)',
      setupJa: '{日本|にほん}でしていることについて、6{人|にん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Seis pessoas falam sobre o que fazem no Japão.',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、{何|なに}をしていますか？', pt: 'O que você faz no Japão?' },
        { speaker: 'B', ja: 'レストランで{働|はたら}いています。', pt: 'Trabalho num restaurante.' },
        { speaker: 'A', ja: '{仕事|しごと}はどうですか？', pt: 'E o trabalho, como é?' },
        { speaker: 'B', ja: 'とても{忙|いそが}しいです。', pt: 'É muito corrido.' },
      ],
    },
  ],
  '01-19': [
    {
      label: '会話② (01-19)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、{何|なに}をしていますか？', pt: 'O que você faz no Japão?' },
        { speaker: 'B', ja: '{働|はたら}いています。', pt: 'Eu trabalho.' },
        { speaker: 'A', ja: 'そうですか。どんな{仕事|しごと}ですか？', pt: 'Ah, sei. Que tipo de trabalho?' },
        { speaker: 'B', ja: '{野菜|やさい}を{作|つく}っています。', pt: 'Cultivo legumes.' },
        { speaker: 'A', ja: '{仕事|しごと}はどうですか？', pt: 'E o trabalho, como é?' },
        { speaker: 'B', ja: 'うーん、{疲|つか}れます。でも、みんな{親切|しんせつ}です。', pt: 'Hmm, cansa. Mas todos são gentis.' },
      ],
    },
  ],
  '01-20': [
    {
      label: '会話③ (01-20)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、{何|なに}をしていますか？', pt: 'O que você faz no Japão?' },
        { speaker: 'B', ja: '{働|はたら}いています。', pt: 'Eu trabalho.' },
        { speaker: 'A', ja: 'そうですか。どんな{仕事|しごと}ですか？', pt: 'Ah, sei. Que tipo de trabalho?' },
        { speaker: 'B', ja: '{介護|かいご}の{仕事|しごと}をしています。', pt: 'Trabalho com cuidados a idosos.' },
        { speaker: 'A', ja: '{仕事|しごと}はどうですか？', pt: 'E o trabalho, como é?' },
        { speaker: 'B', ja: '{毎日|まいにち}、{大変|たいへん}です。でも、{楽|たの}しいです。', pt: 'É puxado todo dia. Mas é gratificante.' },
      ],
    },
  ],
  '01-21': [
    {
      label: '会話④ (01-21)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、{何|なに}をしていますか？', pt: 'O que você faz no Japão?' },
        { speaker: 'B', ja: '{工場|こうじょう}で{働|はたら}いています。', pt: 'Trabalho numa fábrica.' },
        { speaker: 'A', ja: '{仕事|しごと}はどうですか？', pt: 'E o trabalho, como é?' },
        { speaker: 'B', ja: 'まあまあです。でも、{勉強|べんきょう}になります。', pt: 'Mais ou menos. Mas aprendo muito.' },
      ],
    },
  ],
  '01-22': [
    {
      label: '会話⑤ (01-22)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、{何|なに}をしていますか？', pt: 'O que você faz no Japão?' },
        { speaker: 'B', ja: '{主婦|しゅふ}です。', pt: 'Sou dona de casa.' },
        { speaker: 'A', ja: 'そうですか。{日本|にほん}の{生活|せいかつ}はどうですか？', pt: 'Ah, sei. E a vida no Japão, como é?' },
        { speaker: 'B', ja: '{楽|たの}しいです。', pt: 'É divertida.' },
      ],
    },
  ],
  '01-23': [
    {
      label: '会話⑥ (01-23)',
      lines: [
        { speaker: 'A', ja: '{日本|にほん}では、{何|なに}をしていますか？', pt: 'O que você faz no Japão?' },
        { speaker: 'B', ja: '{学生|がくせい}です。{専門学校|せんもんがっこう}に{通|かよ}っています。', pt: 'Sou estudante. Frequento uma escola técnica.' },
        { speaker: 'A', ja: '{何|なに}を{勉強|べんきょう}していますか？', pt: 'O que você estuda?' },
        { speaker: 'B', ja: 'プログラミングを{勉強|べんきょう}しています。', pt: 'Estudo programação.' },
        { speaker: 'A', ja: 'そうですか。{勉強|べんきょう}はどうですか？', pt: 'Ah, sei. E os estudos, como vão?' },
        { speaker: 'B', ja: 'とてもおもしろいです。', pt: 'É muito interessante.' },
      ],
    },
  ],
}

const lesson1: Section = {
  id: 'lesson-1',
  level: 'elementary1',
  titleJa: '第1課 レストランで働いています',
  titlePt: 'Lição 1 — Trabalho num restaurante',
  summaryPt: 'Quem eu sou agora · cumprimentar quem não se vê há tempos distinguindo o estilo polido e o casual (お久しぶりです／久しぶり), dizer há quanto tempo está no Japão (日本に来て1年になります／去年の9月に来ました) e falar do que faz aqui e como é (レストランで働いています／とても忙しいです).',
  studyNotes: [
    {
      title: 'Tópico: Quem eu sou agora (今の私)',
      bodyPt:
        '## Can-do\n' +
        '- Cumprimentar uma pessoa que você não vê há muito tempo.\n' +
        '- Falar de forma simples sobre como você tem passado, quando alguém próximo pergunta.\n' +
        '- Falar de forma simples sobre o trabalho que você faz no Japão.\n\n' +
        '💡 Esta é a 1ª lição do **初級1 (Elementary 1, A2)** — o nível seguinte ao 入門 (Starter). Pergunta de abertura: {日本|にほん}に{行|い}ったら、したい{仕事|しごと}がありますか？ (há um trabalho que você quer fazer no Japão?).',
    },
    {
      title: 'Estilo polido × casual: 丁寧体・普通体 (➊)',
      bodyPt:
        'O japonês tem **dois estilos de fala**, escolhidos conforme a relação e a situação:\n\n' +
        '| | termina com | usa-se com |\n|---|---|---|\n' +
        '| **丁寧体** (polido) | です／ます | quem você não conhece bem, {目上|めうえ} (superiores) |\n' +
        '| **普通体** (casual) | sem です／ます | amigos, família, {目下|めした} |\n\n' +
        '- Polido: `お{久|ひさ}しぶりです。お{元気|げんき}ですか？` · Casual: `{久|ひさ}しぶり。{元気|げんき}？`\n' +
        '- Resposta: polido `はい、おかげさまで。` · casual `うん、{元気|げんき}。`\n\n' +
        '⚠️ Usar casual com quem se deve formalidade soa rude. No **初級1/2 a meta é dominar o 丁寧体**; do casual, basta **entender** o que dizem.',
    },
    {
      title: 'Tempo decorrido: 【período】になります (➋)',
      bodyPt:
        'Para dizer **quanto tempo faz**:\n\n' +
        '- `{日本|にほん}に{来|き}て1{年|ねん}になります` = já faz 1 ano que vim ao Japão.\n' +
        '- Usa-se com expressões de duração: 〜か{月|げつ} (meses), 〜{年|ねん} (anos).\n' +
        '- O **início** da contagem vem na forma テ: `{日本|にほん}に{来|き}て` (desde que vim), `{仕事|しごと}を{始|はじ}めて3か{月|げつ}になります`.\n\n' +
        '🔢 Meses: 1=いっかげつ, 2=にかげつ, 3=さんかげつ, 4=よんかげつ, 6=ろっかげつ, 8=はちかげつ, 10=じゅっかげつ. Anos: 1=いちねん, 4=よねん, 7=ななねん/しちねん, 9=きゅうねん.',
    },
    {
      title: 'Momento no tempo: 【時点】（に）来ました (➌)',
      bodyPt:
        'Para dizer **quando** algo aconteceu (passado):\n\n' +
        '- `{去年|きょねん}の9{月|がつ}に{来|き}ました` = vim em setembro do ano passado.\n\n' +
        '⚠️ A partícula **に** NÃO entra com {去年|きょねん} (ano passado), {先月|せんげつ} (mês passado), {先週|せんしゅう} (semana passada), {昨日|きのう}, {今日|きょう}:\n' +
        '- `{先月|せんげつ}、{来|き}ました` (sem に) · mas `9{月|がつ}に`, `{日曜日|にちようび}に` (com に).\n\n' +
        '🕘 Momentos passados: {先週|せんしゅう} (semana passada), {先月|せんげつ} (mês passado), {去年|きょねん} (ano passado).',
    },
    {
      title: 'Situação atual / ocupação: V-ています① (➍)',
      bodyPt:
        '**Forma テ do verbo + います** indica um estado/situação atual. Aqui, a **ocupação**:\n\n' +
        '- `{働|はたら}いています` (trabalho), `{仕事|しごと}をしています`, `{勉強|べんきょう}しています`, `{野菜|やさい}を{作|つく}っています`, `{専門学校|せんもんがっこう}に{通|かよ}っています`.\n\n' +
        '🗣️ Na fala omite-se o **い**: 〜ています → **〜てます**. O casual é 〜ている (na fala, 〜てる).\n\n' +
        '**Profissões (Atividade 3):** レストラン／ホテル／{工場|こうじょう}で{働|はたら}く, {介護|かいご}／{建設|けんせつ}の{仕事|しごと}をする, {野菜|やさい}を{作|つく}る, {日本語学校|にほんごがっこう}で{勉強|べんきょう}する, {専門学校|せんもんがっこう}に{通|かよ}う, {主婦|しゅふ}／{主夫|しゅふ}.\n\n' +
        '**Impressões:** {忙|いそが}しい, {大変|たいへん}, {疲|つか}れる, まあまあ, {楽|たの}しい, おもしろい, みんな{親切|しんせつ}, {勉強|べんきょう}になる.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Vocabulário:** もう (já), まだ (ainda/ainda não), ちょうど (exatamente), なんとか (mais ou menos, “me viro”), {慣|な}れる (acostumar-se), {生活|せいかつ} (vida), {毎日|まいにち} (todo dia), {学生|がくせい} (estudante), プログラミング (programação). Reação: そうですか (ah, sei).\n\n' +
        '**Kanji da lição:** {学生|がくせい}, {学校|がっこう}, {生活|せいかつ}, {去年|きょねん}, {先週|せんしゅう}, {仕事|しごと}, {元気|げんき}（な）, {忙|いそが}しい, {働|はたら}く, {作|つく}る.\n\n' +
        '📌 **TIPS:** **{目上|めうえ}・{目下|めした}** — quem está acima (idade/cargo) e abaixo na hierarquia; define o uso de 丁寧体／普通体. **A saudação お{元気|げんき}ですか？** não é diária no Japão — usa-se com quem não se vê há um tempo (no dia a dia: おはようございます／こんにちは).',
    },
  ],
  groups: [lesson1Group],
  audios: attachScripts(1, L1_SCRIPTS),
}

// ---- Lição 2: ゲームをするのが好きです (tópico 今の私) ----------------------
const lesson2Group: ExerciseGroup = {
  id: 'iro-e1-l2',
  title: 'ゲームをするのが好きです',
  subtitlePt: 'Quem eu sou agora · falar de hobbies e do que gosta, contar como passa as folgas, ler e escrever uma apresentação de funcionário',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l2-1', number: 1, prompt: '「{趣味|しゅみ}は{映画|えいが}を{見|み}ることです」 (V-ることです) — para que serve 「こと」 depois do verbo?', choices: [{ n: 1, text: 'nominaliza o verbo (transforma “ver” em “ver/o ato de ver”)' }, { n: 2, text: 'indica passado' }, { n: 3, text: 'indica negação' }, { n: 4, text: 'indica um pedido' }], answer: 1, translationPt: 'Meu hobby é ver filmes.', explanationPt: 'こト no fim da forma de dicionário nominaliza o verbo: {見|み}る → {見|み}ること. {趣味|しゅみ}は〜ことです diz qual é o hobby. (Nota ➊)' },
    { id: 'iro-e1-l2-2', number: 2, prompt: 'Com verbos terminados em する (ex.: {料理|りょうり}する), como se diz “meu hobby é cozinhar”?', choices: [{ n: 1, text: '{趣味|しゅみ}は{料理|りょうり}をすることです (ou {趣味|しゅみ}は{料理|りょうり}です)' }, { n: 2, text: 'só {趣味|しゅみ}は{料理|りょうり}するです' }, { n: 3, text: '{趣味|しゅみ}は{料理|りょうり}してです' }, { n: 4, text: '{趣味|しゅみ}は{料理|りょうり}ますです' }], answer: 1, explanationPt: 'Com する-verbos cabem as duas formas: {料理|りょうり}をすることです ou simplesmente {料理|りょうり}です. (Nota ➊)' },
    { id: 'iro-e1-l2-3', number: 3, prompt: '「ゲームをするのが{好|す}きです」 (V-るのが好きです) — qual o papel de 「の」?', choices: [{ n: 1, text: 'nominaliza o verbo, como faz こと (gostar de jogar)' }, { n: 2, text: 'marca o sujeito da frase principal' }, { n: 3, text: 'indica posse' }, { n: 4, text: 'indica destino' }], answer: 1, translationPt: 'Gosto de jogar videogame.', explanationPt: 'の (como こと) nominaliza a forma de dicionário: ゲームをする → ゲームをするの. No 入門 vimos Nが{好|す}きです; com verbo, acrescenta-se の. (Nota ➋)' },
    { id: 'iro-e1-l2-4', number: 4, prompt: 'Como fica a forma negativa de 「V-るのが{好|す}きです」?', choices: [{ n: 1, text: '〜のは{好|す}きじゃないです／〜のは{好|す}きじゃありません' }, { n: 2, text: '〜のが{好|す}きでした' }, { n: 3, text: '〜のを{好|す}きません' }, { n: 4, text: '〜のは{好|す}きくないです' }], answer: 1, explanationPt: 'Negativo: {出|で}かけるのは、あまり{好|す}きじゃないです／じゃありません (não gosto muito de sair). ⚠️ a partícula muda para は. (Nota ➋)' },
    { id: 'iro-e1-l2-5', number: 5, prompt: 'Em 「{友|とも}だちと{体育館|たいいくかん}でバドミントンをします」 (【人】と【場所】で V), o que marcam と e で?', choices: [{ n: 1, text: 'と = com quem; で = onde (a ordem entre eles é livre)' }, { n: 2, text: 'と = onde; で = com quem' }, { n: 3, text: 'と = quando; で = como' }, { n: 4, text: 'と = objeto; で = meio' }], answer: 1, explanationPt: 'と indica a pessoa com quem se faz; で indica o lugar. A ordem pode variar: {体育館|たいいくかん}で{友|とも}だちと… também vale. (Nota ➌)' },
    { id: 'iro-e1-l2-6', number: 6, prompt: '「バドミントンをして、ご{飯|はん}を{食|た}べます」 (V1-て、V2) expressa:', choices: [{ n: 1, text: 'ações em sequência/ordem (jogar e depois comer)' }, { n: 2, text: 'duas ações ao mesmo tempo' }, { n: 3, text: 'uma ação que não aconteceu' }, { n: 4, text: 'uma ordem ao ouvinte' }], answer: 1, translationPt: 'Jogamos badminton e depois comemos.', explanationPt: 'A forma テ liga ações na ordem em que ocorrem. Serve para hábitos, passado e planos: {昨日|きのう}は…{食|た}べました／〜{食|た}べたいです. (Nota ➍)' },
    { id: 'iro-e1-l2-7', number: 7, prompt: '「いけばなを{習|なら}っています」 (V-ています②) — que sentido tem aqui?', choices: [{ n: 1, text: 'hábito / algo repetido por um período (estou aprendendo ikebana)' }, { n: 2, text: 'ação única terminada' }, { n: 3, text: 'ordem' }, { n: 4, text: 'desejo' }], answer: 1, explanationPt: 'V-ています também indica hábito/atividade repetida num período: いけばなを{習|なら}っています, {毎朝|まいあさ}ジョギングをしています. (Na L1 era ocupação.) (Nota ➎)' },
    { id: 'iro-e1-l2-8', number: 8, prompt: '「{日本語|にほんご}、{英語|えいご}ができます」 (Nができます) significa:', choices: [{ n: 1, text: 'sei/consigo (falar) japonês, inglês — capacidade' }, { n: 2, text: 'vou estudar japonês e inglês' }, { n: 3, text: 'gosto de japonês e inglês' }, { n: 4, text: 'não sei japonês nem inglês' }], answer: 1, translationPt: 'Sei falar japonês e inglês.', explanationPt: 'Nができます = ter a capacidade/saber. Línguas usam 〜{語|ご}: {日本語|にほんご}, {英語|えいご}. Também para esportes/instrumentos: テニスができます. (Nota ➏)' },
    { id: 'iro-e1-l2-9', number: 9, prompt: 'Na lista de hobbies (Atividade 1), qual conjunto está correto?', choices: [{ n: 1, text: '{映画|えいが}を{見|み}る／{音楽|おんがく}を{聞|き}く／{本|ほん}を{読|よ}む／{写真|しゃしん}を{撮|と}る／ピアノを{弾|ひ}く' }, { n: 2, text: 'レストランで{働|はたら}く／{野菜|やさい}を{作|つく}る' }, { n: 3, text: '{去年|きょねん}／{先月|せんげつ}／{先週|せんしゅう}' }, { n: 4, text: '{温泉|おんせん}に{入|はい}る／{富士山|ふじさん}に{登|のぼ}る' }], answer: 1, explanationPt: 'Hobbies: {映画|えいが}を{見|み}る, {音楽|おんがく}を{聞|き}く, {本|ほん}を{読|よ}む, おいしいものを{食|た}べる, {写真|しゃしん}を{撮|と}る, ピアノ／ギターを{弾|ひ}く, おしゃべりをする, {料理|りょうり}をする, {旅行|りょこう}をする, テニスをする, ゲームをする, {寝|ね}る. (Atividade 1)' },
    { id: 'iro-e1-l2-10', number: 10, prompt: 'As palavras 「たいてい／{毎週|まいしゅう}／{夕方|ゆうがた}／{本当|ほんとう}に／{特|とく}に」 significam:', choices: [{ n: 1, text: 'geralmente / toda semana / fim de tarde / de verdade / especialmente' }, { n: 2, text: 'às vezes / todo mês / de manhã / talvez / só' }, { n: 3, text: 'nunca / todo ano / à noite / muito / também' }, { n: 4, text: 'sempre / todo dia / meio-dia / pouco / agora' }], answer: 1, explanationPt: 'たいてい (geralmente), {毎週|まいしゅう} (toda semana), {夕方|ゆうがた} (fim de tarde), {本当|ほんとう}に (de verdade), {特|とく}に (especialmente). Também: いろいろ（な） (vários), {特|とく}にない (nada em especial). (Atividades 1·2)' },
    { id: 'iro-e1-l2-11', number: 11, prompt: 'No diálogo, o homem usa 「ぼく」 para “eu”. Sobre 「ぼく」:', choices: [{ n: 1, text: 'é um “eu” geralmente usado por homens (informal)' }, { n: 2, text: 'é usado só por mulheres' }, { n: 3, text: 'significa “você”' }, { n: 4, text: 'é a forma mais formal de “eu”' }], answer: 1, explanationPt: 'ぼく = “eu”, em geral usado por homens, em tom informal. Mais neutro/formal: {私|わたし}. (Atividade 2 · vocab)' },
    { id: 'iro-e1-l2-12', number: 12, prompt: 'As palavras 「{体育館|たいいくかん}／{出|で}かける／キャッチボール／お{子|こ}さん」 significam:', choices: [{ n: 1, text: 'ginásio (esportivo) / sair / jogar bola (catch) / seu(s) filho(s)' }, { n: 2, text: 'biblioteca / chegar / futebol / esposa' }, { n: 3, text: 'piscina / dormir / tênis / amigo' }, { n: 4, text: 'parque / voltar / corrida / pai' }], answer: 1, explanationPt: '{体育館|たいいくかん} (ginásio), {出|で}かける (sair), キャッチボール (jogar bola/catch), お{子|こ}さん (forma respeitosa de “seu filho”). (Atividade 2)' },
    { id: 'iro-e1-l2-13', number: 13, prompt: 'A contagem de pessoas 「1{人|にん}／2{人|にん}／4{人|にん}」 lê-se:', choices: [{ n: 1, text: 'ひとり / ふたり / よにん' }, { n: 2, text: 'いちにん / ににん / よんにん' }, { n: 3, text: 'ひとり / ふたり / よんにん' }, { n: 4, text: 'いちり / にり / しにん' }], answer: 1, explanationPt: '⚠️ Irregulares: 1{人|ひとり}, 2{人|ふたり}; depois 3にん, 4{人|よにん} (não よんにん), 7ななにん/しちにん. {何人|なんにん}？ = quantas pessoas? (Atividade 3 · tabela)' },
    { id: 'iro-e1-l2-14', number: 14, prompt: 'No texto de apresentação, 「{夫|おっと}と{娘|むすめ}の3{人家族|にんかぞく}です」 significa:', choices: [{ n: 1, text: 'é uma família de 3 — ela, o marido e a filha' }, { n: 2, text: 'tem 3 filhos' }, { n: 3, text: 'mora sozinha' }, { n: 4, text: 'tem marido e 3 cachorros' }], answer: 1, explanationPt: '{夫|おっと} (marido), {娘|むすめ} (filha), 〜{人家族|にんかぞく} (família de 〜 pessoas). A あきさん também tem um cachorro ({犬|いぬ}). (Atividade 3 · leitura)' },
    { id: 'iro-e1-l2-15', number: 15, prompt: 'As palavras de leitura 「{習|なら}う／キャンプ／つり／{中国語|ちゅうごくご}」 significam:', choices: [{ n: 1, text: 'aprender / acampamento / pesca / chinês (língua)' }, { n: 2, text: 'ensinar / viagem / natação / coreano' }, { n: 3, text: 'comprar / festa / corrida / inglês' }, { n: 4, text: 'vender / parque / leitura / espanhol' }], answer: 1, explanationPt: '{習|なら}う (aprender), キャンプ (acampar), つり (pescar), {中国語|ちゅうごくご} (chinês). Línguas usam 〜{語|ご}: {英語|えいご}, {中国語|ちゅうごくご}. (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l2-16', number: 16, prompt: 'Os kanji 「{人|ひと}／{家族|かぞく}／{夕方|ゆうがた}」 lêem-se:', choices: [{ n: 1, text: 'ひと (pessoa) / かぞく (família) / ゆうがた (fim de tarde)' }, { n: 2, text: 'じん / かぞく / ゆうほう' }, { n: 3, text: 'ひと / いえぞく / ゆうがた' }, { n: 4, text: 'にん / やから / せきほう' }], answer: 1, explanationPt: '{人|ひと} (pessoa; em contagem 〜{人|にん} e nacionalidade 〜{人|じん}), {家族|かぞく} (família), {夕方|ゆうがた} (fim de tarde/anoitecer). (漢字)' },
    { id: 'iro-e1-l2-17', number: 17, prompt: 'Os kanji 「{英語|えいご}／{音楽|おんがく}／{習|なら}う／{話|はな}す」 lêem-se:', choices: [{ n: 1, text: 'えいご (inglês) / おんがく (música) / ならう (aprender) / はなす (falar)' }, { n: 2, text: 'えいご / おんらく / しゅう / わす' }, { n: 3, text: 'えいかい / おんがく / ならう / はなす' }, { n: 4, text: 'えいご / ねいらく / ならう / はなす' }], answer: 1, explanationPt: '{英語|えいご} (inglês), {音楽|おんがく} (música), {習|なら}う (aprender), {話|はな}す (falar). Outros kanji: {犬|いぬ}, {出|で}かける. (漢字)' },
    { id: 'iro-e1-l2-18', number: 18, prompt: '📌 TIPS — 「いけばな」 é:', choices: [{ n: 1, text: 'arranjo floral japonês (arte de dispor flores)' }, { n: 2, text: 'um esporte de raquete' }, { n: 3, text: 'um prato típico' }, { n: 4, text: 'um instrumento musical' }], answer: 1, explanationPt: 'いけばな (生け花) = arte japonesa do arranjo floral. A フローリさん a aprende ({習|なら}っています). (TIPS)' },
    { id: 'iro-e1-l2-19', number: 19, prompt: '📌 TIPS — 「ジブリ」 (que o Eco menciona) é:', choices: [{ n: 1, text: 'Studio Ghibli — famoso estúdio japonês de animação' }, { n: 2, text: 'um time de beisebol' }, { n: 3, text: 'uma rede de restaurantes' }, { n: 4, text: 'um parque de Tóquio' }], answer: 1, explanationPt: 'スタジオジブリ (Studio Ghibli) = estúdio de animação (Totoro, A Viagem de Chihiro etc.). Eco gosta dos {映画|えいが} da Ghibli. (TIPS)' },
    { id: 'iro-e1-l2-20', number: 20, prompt: '📌 TIPS — o 「{国際交流協会|こくさいこうりゅうきょうかい}」 (onde estão os cartazes de funcionários) é:', choices: [{ n: 1, text: 'associação de intercâmbio internacional (apoia estrangeiros na região)' }, { n: 2, text: 'uma escola de japonês particular' }, { n: 3, text: 'uma loja de conveniência' }, { n: 4, text: 'um hospital público' }], answer: 1, explanationPt: '{国際交流協会|こくさいこうりゅうきょうかい} = associação de intercâmbio internacional, presente em muitas cidades, com apoio e eventos para estrangeiros. (TIPS)' },
    { id: 'iro-e1-l2-21', number: 21, prompt: 'Diálogo 02-04: 「{趣味|しゅみ}は{何|なん}ですか？」 — o que a pessoa responde?', context: 'Ｂ：{趣味|しゅみ}？うーん、{音楽|おんがく}を{聞|き}くことです。あと、ゲームをするのが{好|す}きです。', choices: [{ n: 1, text: 'Ouvir música; e também gosta de jogar videogame' }, { n: 2, text: 'Viajar; gosta de ir a vários países' }, { n: 3, text: 'Cozinhar; adora comer coisas gostosas' }, { n: 4, text: 'Dormir; gosta de ficar à toa em casa' }], answer: 1, explanationPt: '{音楽|おんがく}を{聞|き}くことです (V-ることです) + あと、ゲームをするのが{好|す}きです (V-るのが好きです). (Atividade 1 · Notas ➊➋)' },
    { id: 'iro-e1-l2-22', number: 22, prompt: 'Diálogo 02-06: 「{趣味|しゅみ}は{料理|りょうり}をすることです」 — o que mais a pessoa diz gostar?', context: 'Ｂ：{料理|りょうり}をすることです。{私|わたし}はおいしいものを{食|た}べるのが{大好|だいす}きです。', choices: [{ n: 1, text: 'Adora comer coisas gostosas (おいしいものを{食|た}べるのが{大好|だいす}き)' }, { n: 2, text: 'Adora viajar' }, { n: 3, text: 'Adora dormir' }, { n: 4, text: 'Adora jogar tênis' }], answer: 1, explanationPt: '{料理|りょうり}をすることです (hobby = cozinhar) + おいしいものを{食|た}べるのが{大好|だいす}きです (adora comer bem). (Atividade 1)' },
    { id: 'iro-e1-l2-23', number: 23, prompt: 'Diálogo 02-09: 「{好|す}きなことは{何|なん}ですか？」 — resposta?', context: 'Ｂ：{特|とく}にないですね。{好|す}きなことは、{寝|ね}ること。{家|いえ}でごろごろするのが{好|す}きです。', choices: [{ n: 1, text: 'Nada em especial; gosta de dormir e de ficar à toa em casa' }, { n: 2, text: 'Adora esportes' }, { n: 3, text: 'Gosta de conversar com as pessoas' }, { n: 4, text: 'Gosta de tirar fotos' }], answer: 1, explanationPt: '{特|とく}にない (nada em especial), {寝|ね}ること (dormir), {家|いえ}でごろごろする (ficar à toa em casa). (Atividade 1)' },
    { id: 'iro-e1-l2-24', number: 24, prompt: 'Diálogo 02-13: como a Huong ({フオン}) passa as folgas?', context: 'フオン：{私|わたし}は、たいてい{友|とも}だちと{体育館|たいいくかん}でバドミントンをします。{私|わたし}はスポーツが{大好|だいす}きです。', choices: [{ n: 1, text: 'Joga badminton com amigos no ginásio; adora esportes' }, { n: 2, text: 'Fica em casa vendo anime' }, { n: 3, text: 'Vai ao parque com os filhos' }, { n: 4, text: 'Dorme o dia todo' }], answer: 1, explanationPt: '{友|とも}だちと{体育館|たいいくかん}でバドミントンをします (【人】と【場所】で, Nota ➌). スポーツが{大好|だいす}き. (Atividade 2)' },
    { id: 'iro-e1-l2-25', number: 25, prompt: 'Diálogo 02-13: a Huong detalha a rotina das folgas. O que ela faz?', context: 'フオン：{毎週|まいしゅう}、{夕方|ゆうがた}までバドミントンをして、そのあと、みんなでご{飯|はん}を{食|た}べます。{本当|ほんとう}に{楽|たの}しいです。', choices: [{ n: 1, text: 'Joga badminton até o fim da tarde e depois todos comem juntos' }, { n: 2, text: 'Treina sozinha e vai embora' }, { n: 3, text: 'Só assiste aos jogos' }, { n: 4, text: 'Cozinha em casa o dia inteiro' }], answer: 1, explanationPt: 'バドミントンをして、そのあと、ご{飯|はん}を{食|た}べます (V1-て、V2 em sequência, Nota ➍). {本当|ほんとう}に{楽|たの}しい. (Atividade 2)' },
    { id: 'iro-e1-l2-26', number: 26, prompt: 'Diálogo 02-13: como o Eco passa as folgas e o que diz sobre sair?', context: 'エコ：たいてい{家|いえ}でアニメを{見|み}ます。…{出|で}かけるのは、あまり{好|す}きじゃありません。うちで、ゆっくりするのが{好|す}きです。', choices: [{ n: 1, text: 'Vê anime em casa; não gosta muito de sair, prefere relaxar em casa' }, { n: 2, text: 'Joga badminton no ginásio' }, { n: 3, text: 'Vai ao parque jogar bola' }, { n: 4, text: 'Viaja toda folga' }], answer: 1, explanationPt: '{家|いえ}でアニメを{見|み}ます; {出|で}かけるのは、あまり{好|す}きじゃありません (negativo de V-るのが好き, Nota ➋); especialmente {映画|えいが} da ジブリ. (Atividade 2)' },
    { id: 'iro-e1-l2-27', number: 27, prompt: 'Diálogo 02-13: o que o Ishikawa ({石川}) faz nas folgas e por quê?', context: '石川：ぼくは、{子|こ}どもと{公園|こうえん}。…キャッチボール。ぼくは、{野球|やきゅう}が{好|す}きでね。{見|み}るのもするのも。', choices: [{ n: 1, text: 'Vai ao parque jogar bola com os filhos; gosta de beisebol (ver e jogar)' }, { n: 2, text: 'Fica em casa vendo anime' }, { n: 3, text: 'Joga badminton com amigos' }, { n: 4, text: 'Não faz nada' }], answer: 1, explanationPt: '{子|こ}どもと{公園|こうえん}でキャッチボール; {野球|やきゅう}が{好|す}き、{見|み}るのもするのも (gosta de ver e de jogar). Filhos: 8{歳|さい}と5{歳|さい}. (Atividade 2)' },
    { id: 'iro-e1-l2-28', number: 28, prompt: 'Leitura (Atividade 3) — a あきさん: o que diz a apresentação dela?', context: '{夫|おっと}と{娘|むすめ}の3{人家族|にんかぞく}です。{趣味|しゅみ}は、おいしいものを{食|た}べること。{休|やす}みの{日|ひ}は、たいてい{犬|いぬ}のジローと{公園|こうえん}にいます。', choices: [{ n: 1, text: 'Família de 3; hobby é comer bem; nas folgas vai ao parque com o cão Jiro' }, { n: 2, text: 'Mora sozinha; hobby é ciclismo' }, { n: 3, text: 'É filipina; aprende ikebana' }, { n: 4, text: 'Adora pescar e acampar' }], answer: 1, explanationPt: '{夫|おっと}と{娘|むすめ}の3{人家族|にんかぞく}; {趣味|しゅみ}はおいしいものを{食|た}べること; {犬|いぬ}のジローと{公園|こうえん}に. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l2-29', number: 29, prompt: 'Leitura (Atividade 3) — o たかしさん: o que ele gosta e estuda?', context: 'アウトドアが{大好|だいす}き。{趣味|しゅみ}はサイクリング、キャンプ、つり。{休|やす}みの{日|ひ}は、よく{海|うみ}や{山|やま}に{行|い}きます。{今|いま}、{中国語|ちゅうごくご}を{勉強|べんきょう}しています。', choices: [{ n: 1, text: 'Adora atividades ao ar livre (ciclismo, camping, pesca); estuda chinês' }, { n: 2, text: 'Gosta de cozinhar; aprende ikebana' }, { n: 3, text: 'Tem uma família de 3; passeia com o cão' }, { n: 4, text: 'Fala 4 idiomas' }], answer: 1, explanationPt: 'アウトドア{大好|だいす}き: サイクリング、キャンプ、つり; {海|うみ}や{山|やま}に{行|い}く; {中国語|ちゅうごくご}を{勉強|べんきょう}しています. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l2-30', number: 30, prompt: 'Leitura (Atividade 3) — a フローリさん: que línguas ela diz saber?', context: '{趣味|しゅみ}は{料理|りょうり}、いけばなを{習|なら}っています。{日本語|にほんご}、{英語|えいご}、フィリピノ{語|ご}、スペイン{語|ご}（{少|すこ}し）ができます。', choices: [{ n: 1, text: 'Japonês, inglês, filipino e um pouco de espanhol (Nができます)' }, { n: 2, text: 'Só japonês' }, { n: 3, text: 'Chinês e coreano' }, { n: 4, text: 'Nenhuma língua' }], answer: 1, explanationPt: '{日本語|にほんご}、{英語|えいご}、フィリピノ{語|ご}、スペイン{語|ご}（{少|すこ}し）ができます (Nができます, Nota ➏). Hobby: {料理|りょうり}; aprende いけばな. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l2-31', number: 31, prompt: 'Atividade 4: o que se pede para escrever?', choices: [{ n: 1, text: 'uma autoapresentação ({自己紹介|じこしょうかい}) com hobby, folgas e o que estuda, para o mural do trabalho' }, { n: 2, text: 'um e-mail de reclamação' }, { n: 3, text: 'uma receita de comida' }, { n: 4, text: 'um pedido de folga' }], answer: 1, explanationPt: '{自己紹介|じこしょうかい} para o mural ({掲示板|けいじばん}) do trabalho: {趣味|しゅみ}・{好|す}きなこと, {休|やす}みの{日|ひ}, {勉強|べんきょう}／{習|なら}っていること, etc. (Atividade 4)' },
    { id: 'iro-e1-l2-32', number: 32, prompt: 'Pergunta de abertura da lição: 「{休|やす}みの{日|ひ}はどんなことをして{過|す}ごしますか？」 quer dizer:', choices: [{ n: 1, text: 'Como você passa os dias de folga?' }, { n: 2, text: 'Onde você trabalha?' }, { n: 3, text: 'Há quanto tempo está no Japão?' }, { n: 4, text: 'Qual é a sua profissão?' }], answer: 1, explanationPt: '{過|す}ごす = passar (o tempo). どんなことをして{過|す}ごしますか = como você passa (as folgas)? Tema da lição: hobbies e folgas. (Abertura)' },
  ],
}

// Transcrições oficiais dos diálogos da Lição 2 (聴解スクリプト)
const L2_SCRIPTS: Record<string, ScriptItem[]> = {
  '02-03': [
    {
      label: '会話① (02-03)',
      setupJa: '{趣味|しゅみ}について、7{人|にん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Sete pessoas falam sobre seus hobbies.',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: '{映画|えいが}を{見|み}ることです。あと、{本|ほん}を{読|よ}むのも{好|す}きです。', pt: 'É ver filmes. E também gosto de ler livros.' },
        { speaker: 'A', ja: '{私|わたし}もです。', pt: 'Eu também.' },
      ],
    },
  ],
  '02-04': [
    {
      label: '会話② (02-04)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: '{趣味|しゅみ}？　うーん、{音楽|おんがく}を{聞|き}くことです。あと、ゲームをするのが{好|す}きです。', pt: 'Hobby? Hmm, é ouvir música. E também gosto de jogar videogame.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
      ],
    },
  ],
  '02-05': [
    {
      label: '会話③ (02-05)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: '{旅行|りょこう}です。いろいろな{国|くに}に{行|い}くのが{好|す}きです。', pt: 'É viajar. Gosto de ir a vários países.' },
        { speaker: 'A', ja: 'いいですね。', pt: 'Que bom.' },
      ],
    },
  ],
  '02-06': [
    {
      label: '会話④ (02-06)',
      lines: [
        { speaker: 'A', ja: '{趣味|しゅみ}は{何|なん}ですか？', pt: 'Qual é o seu hobby?' },
        { speaker: 'B', ja: '{料理|りょうり}をすることです。{私|わたし}はおいしいものを{食|た}べるのが{大好|だいす}きです。', pt: 'É cozinhar. Eu adoro comer coisas gostosas.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '02-07': [
    {
      label: '会話⑤ (02-07)',
      lines: [
        { speaker: 'A', ja: '{好|す}きなことは{何|なん}ですか？', pt: 'Do que você gosta?' },
        { speaker: 'B', ja: '{好|す}きなこと？　おしゃべりです。{人|ひと}と{話|はな}すのが{大好|だいす}きです。', pt: 'Do que eu gosto? De bater papo. Adoro conversar com as pessoas.' },
        { speaker: 'A', ja: '{私|わたし}もです。', pt: 'Eu também.' },
      ],
    },
  ],
  '02-08': [
    {
      label: '会話⑥ (02-08)',
      lines: [
        { speaker: 'A', ja: '{好|す}きなことは{何|なん}ですか？', pt: 'Do que você gosta?' },
        { speaker: 'B', ja: 'テニスが{好|す}きです。テニスは、するのも{見|み}るのも{大好|だいす}きです。', pt: 'Gosto de tênis. Adoro tanto jogar quanto assistir tênis.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '02-09': [
    {
      label: '会話⑦ (02-09)',
      lines: [
        { speaker: 'A', ja: '{好|す}きなことは{何|なん}ですか？', pt: 'Do que você gosta?' },
        { speaker: 'B', ja: '{特|とく}にないですね。{好|す}きなことは、{寝|ね}ること。{家|いえ}でごろごろするのが{好|す}きです。', pt: 'Nada em especial. O que gosto é de dormir. Gosto de ficar à toa em casa.' },
        { speaker: 'A', ja: 'ああ……。', pt: 'Ahh…' },
      ],
    },
  ],
  '02-13': [
    {
      label: '会話 (02-13)',
      setupJa: '{会社|かいしゃ}の{休|やす}み{時間|じかん}に、エコさんとフオンさんと{石川|いしかわ}さんが、{休|やす}みの{日|ひ}の{過|す}ごし{方|かた}について{話|はな}しています。',
      setupPt: 'No intervalo do trabalho, Eco, Huong e Ishikawa conversam sobre como passam as folgas.',
      lines: [
        { speaker: 'エコ', ja: 'フオンさんは、{休|やす}みの{日|ひ}は{何|なに}をしますか？', pt: 'Huong, o que você faz nas folgas?' },
        { speaker: 'フオン', ja: '{私|わたし}は、たいてい{友|とも}だちと{体育館|たいいくかん}でバドミントンをします。{私|わたし}はスポーツが{大好|だいす}きです。', pt: 'Eu, geralmente, jogo badminton com amigos no ginásio. Adoro esportes.' },
        { speaker: '石川', ja: 'へえ、バドミントン。どこで？', pt: 'Nossa, badminton. Onde?' },
        { speaker: 'フオン', ja: '{市|し}の{体育館|たいいくかん}でします。{毎週|まいしゅう}、{夕方|ゆうがた}までバドミントンをして、そのあと、みんなでご{飯|はん}を{食|た}べます。{本当|ほんとう}に{楽|たの}しいです。', pt: 'No ginásio municipal. Toda semana jogo até o fim da tarde e depois todos comemos juntos. É muito divertido.' },
        { speaker: 'エコ', ja: 'いいですね。', pt: 'Que bom.' },
        { speaker: '石川', ja: 'エコさんは？', pt: 'E você, Eco?' },
        { speaker: 'エコ', ja: 'ぼくは、{休|やす}みの{日|ひ}は、たいてい{家|いえ}でアニメを{見|み}ます。', pt: 'Eu, nas folgas, geralmente vejo anime em casa.' },
        { speaker: 'フオン', ja: 'どこにも{出|で}かけませんか？', pt: 'Você não sai pra lugar nenhum?' },
        { speaker: 'エコ', ja: '{出|で}かけるのは、あまり{好|す}きじゃありません。うちで、ゆっくりするのが{好|す}きです。', pt: 'Não gosto muito de sair. Gosto de relaxar em casa.' },
        { speaker: '石川', ja: 'どんなアニメを{見|み}るの？', pt: 'Que tipo de anime você vê?' },
        { speaker: 'エコ', ja: '{日本|にほん}のアニメです。{特|とく}に、ジブリの{映画|えいが}が{好|す}きです。', pt: 'Anime japonês. Gosto especialmente dos filmes da Ghibli.' },
        { speaker: 'フオン', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'エコ', ja: '{石川|いしかわ}さんは、{休|やす}みの{日|ひ}は{何|なに}をしますか？', pt: 'Ishikawa, o que você faz nas folgas?' },
        { speaker: '石川', ja: 'うーん、ぼくは、{子|こ}どもと{公園|こうえん}。', pt: 'Hmm, eu vou ao parque com os filhos.' },
        { speaker: 'フオン', ja: 'そうですか。{公園|こうえん}で{何|なに}をしますか？', pt: 'Ah, sei. E o que fazem no parque?' },
        { speaker: '石川', ja: 'キャッチボール。ぼくは、{野球|やきゅう}が{好|す}きでね。{見|み}るのもするのも。', pt: 'Jogamos bola (catch). Eu gosto de beisebol, sabe. Tanto de ver quanto de jogar.' },
        { speaker: 'フオン', ja: 'そうですか。お{子|こ}さんは{何歳|なんさい}ですか？', pt: 'Ah, sei. Quantos anos têm seus filhos?' },
        { speaker: '石川', ja: '8{歳|さい}と5{歳|さい}。{子|こ}どもとキャッチボール、{楽|たの}しいよ。', pt: '8 e 5 anos. Jogar bola com os filhos é divertido.' },
      ],
    },
  ],
}

const lesson2: Section = {
  id: 'lesson-2',
  level: 'elementary1',
  titleJa: '第2課 ゲームをするのが好きです',
  titlePt: 'Lição 2 — Gosto de jogar videogame',
  summaryPt: 'Quem eu sou agora · falar de hobbies e do que gosta nominalizando verbos (趣味は映画を見ることです／ゲームをするのが好きです), contar como passa as folgas (友だちと体育館でバドミントンをして、ご飯を食べます), dizer o que aprende e o que sabe (いけばなを習っています／日本語ができます), e ler/escrever uma apresentação de funcionário.',
  studyNotes: [
    {
      title: 'Tópico: Quem eu sou agora (今の私)',
      bodyPt:
        '## Can-do\n' +
        '- Falar de forma simples sobre seus hobbies e do que gosta.\n' +
        '- Perguntar e responder como você passa os dias de folga.\n' +
        '- Ler uma apresentação de funcionários (mural de loja/local) e entender família, hobbies etc.\n' +
        '- Escrever de forma simples uma autoapresentação (hobbies, folgas) para o mural do trabalho.\n\n' +
        '💡 Pergunta de abertura: {休|やす}みの{日|ひ}はどんなことをして{過|す}ごしますか？ (como você passa os dias de folga?).',
    },
    {
      title: 'Nominalizar verbos: V-ることです / V-るのが好きです (➊➋)',
      bodyPt:
        'Para falar de hobby/gosto a partir de um **verbo**, transforma-se o verbo em substantivo:\n\n' +
        '- **V-る + こと**: `{趣味|しゅみ}は{映画|えいが}を{見|み}ることです` = meu hobby é ver filmes.\n' +
        '- **V-る + の + が{好|す}きです**: `ゲームをするのが{好|す}きです` = gosto de jogar.\n\n' +
        '- こと e の fazem o mesmo papel (nominalizar). Com する-verbos: {料理|りょうり}をすることです **ou** {料理|りょうり}です.\n' +
        '- ⚠️ Negativo de 〜のが{好|す}きです → **〜のは{好|す}きじゃないです／じゃありません** (a partícula vira は): {出|で}かけるのは、あまり{好|す}きじゃないです.',
    },
    {
      title: 'Onde e com quem: 【人】と【場所】で V (➌)',
      bodyPt:
        'Para dizer **com quem** e **onde** se faz algo:\n\n' +
        '- **と** = com quem · **で** = onde. A ordem é livre.\n' +
        '- `{友|とも}だちと{体育館|たいいくかん}でバドミントンをします` = jogo badminton com amigos no ginásio.\n\n' +
        'Ex.: A：どこでサッカーをしますか？ B：{公園|こうえん}でします。 A：だれとしますか？ B：{会社|かいしゃ}の{友|とも}だちとです。',
    },
    {
      title: 'Ações em sequência: V1-て、V2 (➍)',
      bodyPt:
        'A **forma テ** liga duas (ou mais) ações na ordem em que acontecem:\n\n' +
        '- `バドミントンをして、ご{飯|はん}を{食|た}べます` = jogo badminton e depois como.\n' +
        '- Duas frases (バドミントンをします。そのあと、ご{飯|はん}を{食|た}べます) viram uma só.\n\n' +
        '💡 Serve para hábitos, passado (〜{食|た}べました) e planos/desejos (〜{食|た}べたいです). 🔖 Veja a tabela da **forma テ** na Lição 1.',
    },
    {
      title: 'Hábito e capacidade: V-ています② / Nができます (➎➏)',
      bodyPt:
        '- **V-ています②** = hábito/atividade repetida num período (na L1 era ocupação): `いけばなを{習|なら}っています`, `{毎朝|まいあさ}ジョギングをしています`, `{週|しゅう}に1{回|かい}、{中国語|ちゅうごくご}を{勉強|べんきょう}しています`.\n' +
        '- **Nができます** = ter capacidade/saber: `{日本語|にほんご}、{英語|えいご}ができます`. Línguas usam **〜{語|ご}** ({日本語|にほんご}, {英語|えいご}, {中国語|ちゅうごくご}). Também esportes/instrumentos: テニスができます、ピアノもできます.\n\n' +
        '🔢 Pessoas: 1{人|ひとり}, 2{人|ふたり}, 3さんにん, 4{人|よにん}, 7ななにん/しちにん; {何人|なんにん}？. Família: 〜{人家族|にんかぞく}.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Hobbies:** {映画|えいが}を{見|み}る, {音楽|おんがく}を{聞|き}く, {本|ほん}を{読|よ}む, おいしいものを{食|た}べる, {写真|しゃしん}を{撮|と}る, ピアノ／ギターを{弾|ひ}く, おしゃべりをする, {料理|りょうり}をする, {旅行|りょこう}をする, テニスをする, ゲームをする, {寝|ね}る.\n\n' +
        '**Vocabulário:** たいてい (geralmente), {毎週|まいしゅう}, {夕方|ゆうがた}, {本当|ほんとう}に, {特|とく}に, {特|とく}にない, いろいろ（な）, ぼく (“eu”, masc. informal), {出|で}かける, {体育館|たいいくかん}, キャッチボール, お{子|こ}さん, {習|なら}う, キャンプ, つり.\n\n' +
        '**Kanji da lição:** {人|ひと}, 〜{人|にん}, 〜{人|じん}, {犬|いぬ}, {家族|かぞく}, {夕方|ゆうがた}, {英語|えいご}, {音楽|おんがく}, {習|なら}う, {話|はな}す, {出|で}かける.\n\n' +
        '📌 **TIPS:** {野球|やきゅう} (beisebol, muito popular no Japão); **いけばな** (生け花, arranjo floral); **スタジオジブリ** (Studio Ghibli, estúdio de animação); **{国際交流協会|こくさいこうりゅうきょうかい}** (associação de intercâmbio internacional, com apoio a estrangeiros).',
    },
  ],
  groups: [lesson2Group],
  audios: attachScripts(2, L2_SCRIPTS),
}

// ---- Lição 3: 冬はとても寒くなります (tópico 季節と天気) --------------------
const lesson3Group: ExerciseGroup = {
  id: 'iro-e1-l3',
  title: '冬はとても寒くなります',
  subtitlePt: 'Estações e clima · descrever mudanças do tempo (暖かくなります), comparar estações (いちばん好きです), dizer do que gosta/não gosta no clima e dar o motivo (すずしいですから)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l3-1', number: 1, prompt: '「{春|はる}は{暖|あたた}かくなります」 (〜なります) expressa:', choices: [{ n: 1, text: 'mudança / “passar a ficar” (vai ficando quente)' }, { n: 2, text: 'uma ordem ao ouvinte' }, { n: 3, text: 'algo que não muda nunca' }, { n: 4, text: 'um desejo' }], answer: 1, translationPt: 'Na primavera fica (mais) quente.', explanationPt: 'なります（なる）indica mudança; aqui, a mudança do clima/estação. (Nota ➊)' },
    { id: 'iro-e1-l3-2', number: 2, prompt: 'Como se liga なります a um adjetivo-イ como {暖|あたた}かい?', choices: [{ n: 1, text: 'troca い por く: {暖|あたた}かい → {暖|あたた}かくなります' }, { n: 2, text: 'mantém い: {暖|あたた}かいなります' }, { n: 3, text: 'usa に: {暖|あたた}かいになります' }, { n: 4, text: 'usa の: {暖|あたた}かいのなります' }], answer: 1, explanationPt: 'イ-adjetivo: い→く + なります — {暖|あたた}かくなります, すずしくなります, {寒|さむ}くなります. (Nota ➊)' },
    { id: 'iro-e1-l3-3', number: 3, prompt: 'Com substantivo ou ナ-adjetivo, qual a forma de なります? Ex.: 「{学校|がっこう}が{休|やす}み___なります」', choices: [{ n: 1, text: 'に — N／ナA + に + なります ({休|やす}みになります)' }, { n: 2, text: 'く — {休|やす}みくなります' }, { n: 3, text: 'が — {休|やす}みがなります' }, { n: 4, text: 'を — {休|やす}みをなります' }], answer: 1, translationPt: 'A escola entra de férias.', explanationPt: 'N／ナA usam に: {学校|がっこう}が{休|やす}みになります, {公園|こうえん}がきれいになりました. (Nota ➊)' },
    { id: 'iro-e1-l3-4', number: 4, prompt: '「{秋|あき}がいちばん{好|す}きです」 — o que いちばん acrescenta?', choices: [{ n: 1, text: '“o mais / mais que tudo” (superlativo) — gosto mais do outono' }, { n: 2, text: 'um número de telefone' }, { n: 3, text: 'negação' }, { n: 4, text: '“primeiro lugar” no sentido literal só' }], answer: 1, translationPt: 'Gosto mais do outono (de todos).', explanationPt: 'いちばん = literalmente “o primeiro”; diante de adjetivo significa “o mais/mais que tudo”. Ex.: 8{月|がつ}がいちばん{暑|あつ}いです. (Nota ➋)' },
    { id: 'iro-e1-l3-5', number: 5, prompt: '「{暑|あつ}いのが{好|す}きです。{寒|さむ}いのが{苦手|にがて}です」 (イA-いのが好きです／苦手です) — papel de 「の」?', choices: [{ n: 1, text: 'nominaliza o adjetivo (o calor / o frio) — como já vimos com verbos na L2' }, { n: 2, text: 'marca posse' }, { n: 3, text: 'indica lugar' }, { n: 4, text: 'indica passado' }], answer: 1, translationPt: 'Gosto do calor. Não curto o frio.', explanationPt: 'の nominaliza o イ-adjetivo: {暑|あつ}い+の = “o (clima) quente”. {苦手|にがて} = não curto/não sou bom com — mais suave que {好|す}きじゃない. (Nota ➌)' },
    { id: 'iro-e1-l3-6', number: 6, prompt: 'Qual é a forma negativa usual de 「〜のが{好|す}きです」 (ex.: frio)?', choices: [{ n: 1, text: '{寒|さむ}いのは{好|す}きじゃないです／{好|す}きじゃありません (が → は)' }, { n: 2, text: '{寒|さむ}いのが{好|す}きくないです' }, { n: 3, text: '{寒|さむ}いのを{好|す}きません' }, { n: 4, text: '{寒|さむ}いのが{好|す}きでした' }], answer: 1, explanationPt: 'No negativo, が costuma virar は: {寒|さむ}いのはあまり{好|す}きじゃないです. (Nota ➌)' },
    { id: 'iro-e1-l3-7', number: 7, prompt: '「もみじの{景色|けしき}がきれいですから。」 — o que から indica no fim da frase?', choices: [{ n: 1, text: 'motivo / razão (“porque…”)' }, { n: 2, text: 'a partir de um ponto no tempo' }, { n: 3, text: 'origem/lugar de onde' }, { n: 4, text: 'uma ordem' }], answer: 1, translationPt: 'Porque a paisagem dos bordos é linda.', explanationPt: 'から no fim da frase dá o motivo. Antes de から vão frases com adjetivo+です (e também frases com verbo). (Nota ➍)' },
    { id: 'iro-e1-l3-8', number: 8, prompt: '「{暑|あつ}いのが{大好|だいす}きですから、{夏|なつ}が{好|す}きです」 (S1から、S2) — o que から faz aqui?', choices: [{ n: 1, text: 'liga duas frases: S1 é o motivo de S2 (“como…, por isso…”)' }, { n: 2, text: 'só enfeita a frase' }, { n: 3, text: 'indica tempo decorrido' }, { n: 4, text: 'transforma em pergunta' }], answer: 1, translationPt: 'Como adoro o calor, gosto do verão.', explanationPt: 'から também conecta frases: S1から、S2 — S1 é a razão de S2. Liga frases de N, adjetivo e verbo. (Nota ❺)' },
    { id: 'iro-e1-l3-9', number: 9, prompt: '「{海|うみ}や{山|やま}で{遊|あそ}ぶ」 (N1やN2) — qual a diferença de や para と?', choices: [{ n: 1, text: 'や lista exemplos (mar, montanha… entre outros), não a lista completa' }, { n: 2, text: 'や significa “ou exclusivo”' }, { n: 3, text: 'や só liga adjetivos' }, { n: 4, text: 'や e と são idênticos em tudo' }], answer: 1, translationPt: 'Brincar no mar, na montanha (etc.).', explanationPt: 'や liga substantivos como と, mas dando **exemplos** (pode haver outros: rio, floresta…). Pode-se acrescentar など: N1やN2など. (Nota ➏)' },
    { id: 'iro-e1-l3-10', number: 10, prompt: '「ぶどうとか{梨|なし}とか」 (N1とか（N2とか）) — quando se usa とか?', choices: [{ n: 1, text: 'para dar exemplos, em tom coloquial (até com um só item: N1とか)' }, { n: 2, text: 'só na escrita formal' }, { n: 3, text: 'para negar' }, { n: 4, text: 'para contar pessoas' }], answer: 1, translationPt: '…uva, pera, essas coisas.', explanationPt: 'とか dá exemplos; mais coloquial que や e cabe mesmo com um só item ({北海道|ほっかいどう}とか). Pode vir após adjetivo/verbo e no meio ou fim da frase. (Nota ➐)' },
    { id: 'iro-e1-l3-11', number: 11, prompt: 'Vocabulário das estações — qual conjunto está certo?', choices: [{ n: 1, text: '{暑|あつ}い (quente) ／ すずしい (fresco) ／ {寒|さむ}い (frio) ／ {暖|あたた}かい (morno/ameno)' }, { n: 2, text: '{暑|あつ}い (frio) ／ すずしい (quente) ／ {寒|さむ}い (morno) ／ {暖|あたた}かい (fresco)' }, { n: 3, text: '{暑|あつ}い (úmido) ／ すずしい (seco) ／ {寒|さむ}い (chuvoso) ／ {暖|あたた}かい (ventoso)' }, { n: 4, text: 'todos significam “bonito”' }], answer: 1, explanationPt: '{暑|あつ}い (quente, sobre o tempo), すずしい (fresco/agradável), {寒|さむ}い (frio), {暖|あたた}かい (ameno/morno). (Atividade 1)' },
    { id: 'iro-e1-l3-12', number: 12, prompt: 'As expressões 「じめじめする／{蒸|む}し{暑|あつ}い／{雨|あめ}が{降|ふ}る／{雪|ゆき}が{降|ふ}る」 significam:', choices: [{ n: 1, text: 'estar úmido/abafado ／ quente e abafado ／ chover ／ nevar' }, { n: 2, text: 'estar seco ／ frio e seco ／ ventar ／ trovejar' }, { n: 3, text: 'estar fresco ／ ameno ／ amanhecer ／ anoitecer' }, { n: 4, text: 'florescer ／ cair folhas ／ cantar ／ dormir' }], answer: 1, explanationPt: 'じめじめする (úmido/mofado), {蒸|む}し{暑|あつ}い (calor abafado), {雨|あめ}が{降|ふ}る (chover), {雪|ゆき}が{降|ふ}る (nevar). (Atividade 1)' },
    { id: 'iro-e1-l3-13', number: 13, prompt: '「{桜|さくら}の{花|はな}が{咲|さ}く／もみじがきれい／セミが{鳴|な}く」 descrevem, respectivamente:', choices: [{ n: 1, text: 'cerejeiras florescem (primavera) ／ bordos bonitos (outono) ／ cigarras cantam (verão)' }, { n: 2, text: 'neva ／ chove ／ venta' }, { n: 3, text: 'verão ／ inverno ／ primavera' }, { n: 4, text: 'comer ／ beber ／ dormir' }], answer: 1, explanationPt: '{桜|さくら}が{咲|さ}く = primavera; もみじ (bordo) que fica きれい = outono; セミ (cigarra) que {鳴|な}く = verão. (Atividade 1)' },
    { id: 'iro-e1-l3-14', number: 14, prompt: 'As palavras 「{同|おな}じ／40{度|ど}／マイナス／{短|みじか}い」 significam:', choices: [{ n: 1, text: 'igual/mesmo ／ 40 graus ／ negativo (minus) ／ curto' }, { n: 2, text: 'diferente ／ 14 graus ／ positivo ／ longo' }, { n: 3, text: 'parecido ／ 40% ／ metade ／ baixo' }, { n: 4, text: 'novo ／ 40 anos ／ meio ／ alto' }], answer: 1, explanationPt: '{同|おな}じ (igual), 〜{度|ど} (graus), マイナス (negativo, de temperatura), {短|みじか}い (curto). (Atividade 2 · 大切なことば)' },
    { id: 'iro-e1-l3-15', number: 15, prompt: 'A reação 「そうなんですか」 (no diálogo) expressa:', choices: [{ n: 1, text: 'surpresa/interesse ao saber de algo novo (“Ah, é mesmo?/Que interessante”)' }, { n: 2, text: 'discordância forte' }, { n: 3, text: 'uma ordem' }, { n: 4, text: 'um pedido de desculpas' }], answer: 1, explanationPt: 'そうなんですか reage com surpresa/interesse a uma informação nova; そうですか é mais neutro (“ah, sei”). (Atividade 2 · vocab)' },
    { id: 'iro-e1-l3-16', number: 16, prompt: 'As palavras 「どうして／ぶどう／{梨|なし}」 significam:', choices: [{ n: 1, text: 'por quê ／ uva ／ pera' }, { n: 2, text: 'como ／ maçã ／ pêssego' }, { n: 3, text: 'quando ／ laranja ／ caqui' }, { n: 4, text: 'onde ／ morango ／ melão' }], answer: 1, explanationPt: 'どうして (por quê), ぶどう (uva), {梨|なし} (pera). どうして pergunta o motivo — respondido com 〜から. (Atividade 3 · vocab)' },
    { id: 'iro-e1-l3-17', number: 17, prompt: 'Os kanji 「{季節|きせつ}／{春|はる}／{夏|なつ}」 lêem-se:', choices: [{ n: 1, text: 'きせつ (estação do ano) ／ はる (primavera) ／ なつ (verão)' }, { n: 2, text: 'きせつ ／ あき ／ ふゆ' }, { n: 3, text: 'じせつ ／ はる ／ なつ' }, { n: 4, text: 'きせつ ／ はな ／ なつ' }], answer: 1, explanationPt: '{季節|きせつ} (estação do ano), {春|はる} (primavera), {夏|なつ} (verão). (漢字)' },
    { id: 'iro-e1-l3-18', number: 18, prompt: 'Os kanji 「{秋|あき}／{冬|ふゆ}／{花|はな}」 lêem-se:', choices: [{ n: 1, text: 'あき (outono) ／ ふゆ (inverno) ／ はな (flor)' }, { n: 2, text: 'なつ ／ はる ／ はな' }, { n: 3, text: 'あき ／ ふゆ ／ か' }, { n: 4, text: 'しゅう ／ とう ／ はな' }], answer: 1, explanationPt: '{秋|あき} (outono), {冬|ふゆ} (inverno), {花|はな} (flor). (漢字)' },
    { id: 'iro-e1-l3-19', number: 19, prompt: 'Os kanji 「{同|おな}じ／{暑|あつ}い／{寒|さむ}い」 lêem-se:', choices: [{ n: 1, text: 'おなじ (igual) ／ あつい (quente) ／ さむい (frio)' }, { n: 2, text: 'どうじ ／ あつい ／ さむい' }, { n: 3, text: 'おなじ ／ しょい ／ かんい' }, { n: 4, text: 'おなじ ／ あつい ／ さぶい' }], answer: 1, explanationPt: '{同|おな}じ (igual/mesmo), {暑|あつ}い (quente), {寒|さむ}い (frio). Kanji da lição: {季節|きせつ}・{春|はる}・{夏|なつ}・{秋|あき}・{冬|ふゆ}・{花|はな}・{同|おな}じ・{暑|あつ}い・{寒|さむ}い. (漢字)' },
    { id: 'iro-e1-l3-20', number: 20, prompt: '📌 TIPS — sobre o clima do Japão ({日本|にほん}の{気候|きこう}):', choices: [{ n: 1, text: 'varia muito de região para região, pois o país é longo e estreito no sentido norte-sul' }, { n: 2, text: 'é igual em todo o país o ano inteiro' }, { n: 3, text: 'não tem estações definidas' }, { n: 4, text: 'é tropical em todas as regiões' }], answer: 1, explanationPt: 'O Japão é um arquipélago longo (norte-sul), então o clima muda muito conforme a região (Hokkaido frio, Okinawa quente). (TIPS)' },
    { id: 'iro-e1-l3-21', number: 21, prompt: '📌 TIPS — o que é o 「{梅雨|つゆ}」?', choices: [{ n: 1, text: 'a estação das chuvas (fim de maio a meados de julho), úmida e abafada' }, { n: 2, text: 'um festival de verão' }, { n: 3, text: 'a época das cerejeiras' }, { n: 4, text: 'uma montanha famosa' }], answer: 1, explanationPt: '{梅雨|つゆ} = estação chuvosa do fim de maio a meados de julho; sobe a umidade, mofo e comida estragam mais fácil. Depois dela começa o verão de verdade. (TIPS)' },
    { id: 'iro-e1-l3-22', number: 22, prompt: '📌 TIPS — o que é 「{花見|はなみ}」?', choices: [{ n: 1, text: 'apreciar as cerejeiras em flor (piquenique sob as {桜|さくら}), típico da primavera' }, { n: 2, text: 'ver a primeira neve do ano' }, { n: 3, text: 'observar a lua de outono' }, { n: 4, text: 'um campeonato de beisebol' }], answer: 1, explanationPt: '{花見|はなみ} = apreciar as {桜|さくら} (cerejeiras), que florescem do fim de março a abril, fazendo piquenique sob as árvores. Coincide com o início do ano letivo/fiscal. (TIPS)' },
    { id: 'iro-e1-l3-23', number: 23, prompt: '📌 TIPS — sobre o clima de 「{北海道|ほっかいどう}」 (norte) e 「{沖縄|おきなわ}」 (sul):', choices: [{ n: 1, text: 'Hokkaido tem verão fresco e inverno rigoroso com muita neve; Okinawa é subtropical, quente o ano todo' }, { n: 2, text: 'Hokkaido é tropical; Okinawa tem neve no inverno' }, { n: 3, text: 'os dois têm o mesmo clima de Tóquio' }, { n: 4, text: 'nenhum dos dois tem inverno' }], answer: 1, explanationPt: '{北海道|ほっかいどう} (norte): verão fresco, inverno muito frio e com neve. {沖縄|おきなわ} (sul): subtropical, quente o ano todo, com temporada de tufões (jul–out). (TIPS)' },
    { id: 'iro-e1-l3-24', number: 24, prompt: 'Pergunta de abertura da lição: 「あなたの{国|くに}にはどんな{季節|きせつ}がありますか？」 quer dizer:', choices: [{ n: 1, text: 'Que estações há no seu país?' }, { n: 2, text: 'Qual é a sua comida preferida?' }, { n: 3, text: 'Onde você mora?' }, { n: 4, text: 'Quantos anos você tem?' }], answer: 1, explanationPt: 'どんな{季節|きせつ}がありますか = que estações existem? Tema da lição: estações e clima ({季節|きせつ}と{天気|てんき}). (Abertura)' },
    { id: 'iro-e1-l3-25', number: 25, prompt: 'Narração 03-03: o que o vídeo diz sobre a primavera ({春|はる})?', context: '{春|はる}は{桜|さくら}の{花|はな}が{咲|さ}きます。{暖|あたた}かくなります。', choices: [{ n: 1, text: 'As cerejeiras florescem e o tempo fica mais quente' }, { n: 2, text: 'Cai muita neve e fica frio' }, { n: 3, text: 'As cigarras cantam e a escola entra de férias' }, { n: 4, text: 'Chove muito e fica abafado' }], answer: 1, explanationPt: '{桜|さくら}の{花|はな}が{咲|さ}きます + {暖|あたた}かくなります (〜くなります, Nota ➊). (Atividade 1 · 聴解スクリプト)' },
    { id: 'iro-e1-l3-26', number: 26, prompt: 'Narração 03-03: o que diz sobre verão ({夏|なつ}) e inverno ({冬|ふゆ})?', context: '{夏|なつ}は{暑|あつ}いです。セミが{鳴|な}きます。{学校|がっこう}が{休|やす}みになります。… {冬|ふゆ}は{寒|さむ}いです。{雪|ゆき}が{降|ふ}ります。', choices: [{ n: 1, text: 'Verão: calor, cigarras, férias escolares; inverno: frio e neve' }, { n: 2, text: 'Verão: neve; inverno: cerejeiras' }, { n: 3, text: 'Verão: fresco; inverno: abafado' }, { n: 4, text: 'Verão: chuvas; inverno: florada' }], answer: 1, explanationPt: '{夏|なつ}: {暑|あつ}い・セミが{鳴|な}く・{学校|がっこう}が{休|やす}みになります (Nに+なります). {冬|ふゆ}: {寒|さむ}い・{雪|ゆき}が{降|ふ}る. (Atividade 1)' },
    { id: 'iro-e1-l3-27', number: 27, prompt: 'Diálogo 03-05: como é o clima do país do Joey ({ジョーイ})?', context: 'Ｂ：{一年中|いちねんじゅう}{夏|なつ}です。ずっと{暑|あつ}いです。', choices: [{ n: 1, text: 'É verão o ano inteiro; faz calor o tempo todo' }, { n: 2, text: 'Tem quatro estações bem marcadas' }, { n: 3, text: 'Tem estação chuvosa e seca' }, { n: 4, text: 'O inverno é muito longo' }], answer: 1, explanationPt: '{一年中|いちねんじゅう}{夏|なつ} (verão o ano todo), ずっと{暑|あつ}い. (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l3-28', number: 28, prompt: 'Diálogo 03-06: como é o clima do país da Tam ({タム})?', context: 'Ｂ：{雨季|うき}と{乾季|かんき}があります。{乾季|かんき}はとても{暑|あつ}いです。…でも、{雨季|うき}は{少|すこ}しすずしくなります。', choices: [{ n: 1, text: 'Tem estação chuvosa e seca; a seca é muito quente e a chuvosa fica um pouco mais fresca' }, { n: 2, text: 'É verão o ano todo' }, { n: 3, text: 'Tem inverno com 40 graus negativos' }, { n: 4, text: 'É igual ao Japão, com quatro estações' }], answer: 1, explanationPt: '{雨季|うき}と{乾季|かんき}; {乾季|かんき}=muito quente; {雨季|うき}は{少|すこ}しすずしくなります (〜くなります) + {雨|あめ}がたくさん{降|ふ}ります. (Atividade 2)' },
    { id: 'iro-e1-l3-29', number: 29, prompt: 'Diálogo 03-07: como é o clima do país do Bayar ({バヤル})?', context: 'Ｂ：{日本|にほん}と{同|おな}じです。{四季|しき}があります。…{夏|なつ}は40{度|ど}、{冬|ふゆ}はマイナス40{度|ど}になります。', choices: [{ n: 1, text: 'Igual ao Japão (quatro estações), mas extremo: verão a 40°C e inverno a −40°C' }, { n: 2, text: 'É verão o ano todo' }, { n: 3, text: 'Só tem estação chuvosa e seca' }, { n: 4, text: 'O inverno dura de outubro a maio' }], answer: 1, explanationPt: '{日本|にほん}と{同|おな}じ・{四季|しき}があります; {夏|なつ}は40{度|ど}、{冬|ふゆ}はマイナス40{度|ど}になります (Nに+なります). (Atividade 2)' },
    { id: 'iro-e1-l3-30', number: 30, prompt: 'Diálogo 03-08: como é o clima do país do Chin ({陳})?', context: 'Ｂ：{私|わたし}の{国|くに}にも{四季|しき}があります。でも、{夏|なつ}はとても{短|みじか}いです。{冬|ふゆ}がとても{長|なが}いです。10{月|がつ}ごろから5{月|がつ}ごろまで{冬|ふゆ}です。', choices: [{ n: 1, text: 'Tem quatro estações, mas o verão é curto e o inverno longo (de outubro a maio), com muita neve' }, { n: 2, text: 'É verão o ano todo' }, { n: 3, text: 'O verão chega a 40°C' }, { n: 4, text: 'Só tem estação chuvosa e seca' }], answer: 1, explanationPt: '{夏|なつ}は{短|みじか}い・{冬|ふゆ}が{長|なが}い (10{月|がつ}〜5{月|がつ}); {雪|ゆき}がたくさん{降|ふ}る・とても{寒|さむ}い. (Atividade 2)' },
    { id: 'iro-e1-l3-31', number: 31, prompt: 'Diálogo 03-12: qual estação Aram ({アラム}) prefere e por quê?', context: 'アラム：{秋|あき}がいちばん{好|す}きです。…{私|わたし}は{暑|あつ}いのが{苦手|にがて}ですから。{秋|あき}はすずしいですから{好|す}きです。', choices: [{ n: 1, text: 'O outono — porque não curte o calor e o outono é fresco' }, { n: 2, text: 'O verão — porque adora o calor' }, { n: 3, text: 'O inverno — por causa da neve' }, { n: 4, text: 'A primavera — pelas cerejeiras' }], answer: 1, explanationPt: '{秋|あき}がいちばん{好|す} (いちばん, Nota ➋); {暑|あつ}いのが{苦手|にがて} (イA-いのが苦手, Nota ➌); すずしいですから (motivo, Nota ➍). (Atividade 3 · 聴解スクリプト)' },
    { id: 'iro-e1-l3-32', number: 32, prompt: 'Diálogo 03-12: a Meri ({メリ}) e o Kawano ({川野}) preferem o quê e por quê?', context: 'メリ：{暑|あつ}いのが{大好|だいす}きですから、{夏|なつ}が{好|す}きです。…川野：{私|わたし}も{秋|あき}が{好|す}きですね。もみじの{景色|けしき}がきれいですから。それに、{果物|くだもの}もおいしいですよね。ぶどうとか{梨|なし}とか。', choices: [{ n: 1, text: 'Meri prefere o verão (adora calor); Kawano prefere o outono (paisagem dos bordos + frutas como uva e pera)' }, { n: 2, text: 'Os dois preferem o inverno' }, { n: 3, text: 'Meri prefere o outono; Kawano, a primavera' }, { n: 4, text: 'Nenhum dos dois tem estação preferida' }], answer: 1, explanationPt: 'メリ: {暑|あつ}いのが{大好|だいす}きですから、{夏|なつ} (S1から、S2, Nota ❺). 川野: {秋|あき}; もみじの{景色|けしき}がきれいですから (Nota ➍); {果物|くだもの}…ぶどうとか{梨|なし}とか (N1とか, Nota ➐). (Atividade 3)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 3
const L3_SCRIPTS: Record<string, ScriptItem[]> = {
  '03-03': [
    {
      label: 'ナレーション (03-03) · 日本の四季',
      setupJa: '{日本|にほん}を{紹介|しょうかい}する{映像|えいぞう}を{見|み}ています。',
      setupPt: 'Você assiste a um vídeo que apresenta o Japão (as quatro estações).',
      lines: [
        { speaker: 'Narração', ja: '{春|はる}は{桜|さくら}の{花|はな}が{咲|さ}きます。{暖|あたた}かくなります。', pt: 'Na primavera, as cerejeiras florescem. Fica mais quente.' },
        { speaker: 'Narração', ja: '{梅雨|つゆ}は{雨|あめ}がたくさん{降|ふ}ります。じめじめしています。', pt: 'Na estação das chuvas (tsuyu) chove muito. Fica úmido e abafado.' },
        { speaker: 'Narração', ja: '{夏|なつ}は{暑|あつ}いです。セミが{鳴|な}きます。{学校|がっこう}が{休|やす}みになります。', pt: 'No verão faz calor. As cigarras cantam. As escolas entram de férias.' },
        { speaker: 'Narração', ja: '{秋|あき}はすずしくなります。もみじがきれいです。', pt: 'No outono fica mais fresco. Os bordos (momiji) ficam bonitos.' },
        { speaker: 'Narração', ja: '{冬|ふゆ}は{寒|さむ}いです。{雪|ゆき}が{降|ふ}ります。', pt: 'No inverno faz frio. Cai neve.' },
      ],
    },
  ],
  '03-05': [
    {
      label: '会話① (03-05) · ジョーイさん',
      setupJa: '{自分|じぶん}の{国|くに}の{季節|きせつ}や{気候|きこう}について、4{人|よにん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Quatro pessoas falam sobre as estações e o clima de seus países.',
      lines: [
        { speaker: 'A', ja: 'ジョーイさんの{国|くに}には、どんな{季節|きせつ}がありますか？', pt: 'Joey, que estações há no seu país?' },
        { speaker: 'B', ja: '{一年中|いちねんじゅう}{夏|なつ}です。ずっと{暑|あつ}いです。', pt: 'É verão o ano inteiro. Faz calor o tempo todo.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '03-06': [
    {
      label: '会話② (03-06) · タムさん',
      lines: [
        { speaker: 'A', ja: 'タムさんの{国|くに}には、どんな{季節|きせつ}がありますか？', pt: 'Tam, que estações há no seu país?' },
        { speaker: 'B', ja: '{雨季|うき}と{乾季|かんき}があります。', pt: 'Há estação chuvosa e estação seca.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'B', ja: '{乾季|かんき}はとても{暑|あつ}いです。', pt: 'A estação seca é muito quente.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: 'でも、{雨季|うき}は{少|すこ}しすずしくなります。{雨|あめ}がたくさん{降|ふ}ります。', pt: 'Mas a estação chuvosa fica um pouco mais fresca. Chove muito.' },
      ],
    },
  ],
  '03-07': [
    {
      label: '会話③ (03-07) · バヤルさん',
      lines: [
        { speaker: 'A', ja: 'バヤルさんの{国|くに}には、どんな{季節|きせつ}がありますか？', pt: 'Bayar, que estações há no seu país?' },
        { speaker: 'B', ja: '{日本|にほん}と{同|おな}じです。{四季|しき}があります。でも、{夏|なつ}はとても{暑|あつ}いです。{冬|ふゆ}はとても{寒|さむ}いです。', pt: 'É igual ao Japão. Tem as quatro estações. Mas o verão é muito quente. O inverno é muito frio.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'B', ja: '{夏|なつ}は40{度|ど}、{冬|ふゆ}はマイナス40{度|ど}になります。', pt: 'No verão chega a 40 graus; no inverno, a 40 graus negativos.' },
        { speaker: 'A', ja: 'へー、そうなんですか。', pt: 'Nossa, é mesmo?' },
      ],
    },
  ],
  '03-08': [
    {
      label: '会話④ (03-08) · 陳さん',
      lines: [
        { speaker: 'A', ja: '{陳|チン}さんの{国|くに}には、どんな{季節|きせつ}がありますか？', pt: 'Chin, que estações há no seu país?' },
        { speaker: 'B', ja: '{私|わたし}の{国|くに}にも{四季|しき}があります。でも、{夏|なつ}はとても{短|みじか}いです。{冬|ふゆ}がとても{長|なが}いです。10{月|がつ}ごろから5{月|がつ}ごろまで{冬|ふゆ}です。', pt: 'No meu país também há quatro estações. Mas o verão é muito curto. O inverno é muito longo: é inverno de outubro até por volta de maio.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
        { speaker: 'B', ja: '{雪|ゆき}がたくさん{降|ふ}ります。とても{寒|さむ}いです。', pt: 'Cai muita neve. Faz muito frio.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'É mesmo?' },
      ],
    },
  ],
  '03-12': [
    {
      label: '会話 (03-12) · 好きな季節',
      setupJa: '{川野|かわの}さんとメリさんとアラムさんが、{好|す}きな{季節|きせつ}について{話|はな}しています。',
      setupPt: 'Kawano, Meri e Aram conversam sobre suas estações preferidas.',
      lines: [
        { speaker: '川野', ja: 'アラムさん、{好|す}きな{季節|きせつ}はいつですか？', pt: 'Aram, qual é a sua estação preferida?' },
        { speaker: 'アラム', ja: 'そうですね。{秋|あき}がいちばん{好|す}きです。', pt: 'Deixa ver… Gosto mais do outono.' },
        { speaker: '川野', ja: 'どうしてですか？', pt: 'Por quê?' },
        { speaker: 'アラム', ja: '{私|わたし}は{暑|あつ}いのが{苦手|にがて}ですから。{秋|あき}はすずしいですから{好|す}きです。メリさんは？', pt: 'Porque não curto o calor. Como o outono é fresco, eu gosto. E você, Meri?' },
        { speaker: 'メリ', ja: '{私|わたし}は{暑|あつ}いのが{大好|だいす}きですから、{夏|なつ}が{好|す}きです。', pt: 'Eu adoro o calor, então gosto do verão.' },
        { speaker: '川野', ja: 'へー、そうですか。', pt: 'Nossa, é mesmo?' },
        { speaker: 'メリ', ja: '{海|うみ}や{山|やま}で{遊|あそ}ぶのも{楽|たの}しいです。{川野|かわの}さんは？　どの{季節|きせつ}が{好|す}きですか？', pt: 'Também é divertido brincar no mar e na montanha. E você, Kawano? Que estação prefere?' },
        { speaker: '川野', ja: '{私|わたし}も{秋|あき}が{好|す}きですね。', pt: 'Eu também gosto do outono.' },
        { speaker: 'アラム', ja: 'どうしてですか？', pt: 'Por quê?' },
        { speaker: '川野', ja: 'もみじの{景色|けしき}がきれいですから。', pt: 'Porque a paisagem dos bordos (momiji) é linda.' },
        { speaker: 'アラム', ja: 'そうですね。', pt: 'É verdade.' },
        { speaker: '川野', ja: 'それに、{果物|くだもの}もおいしいですよね。ぶどうとか{梨|なし}とか。', pt: 'Além disso, as frutas também são gostosas, né? Uva, pera, essas coisas.' },
      ],
    },
  ],
}

const lesson3: Section = {
  id: 'lesson-3',
  level: 'elementary1',
  titleJa: '第3課 冬はとても寒くなります',
  titlePt: 'Lição 3 — O inverno fica muito frio',
  summaryPt: 'Estações e clima · descrever mudanças do tempo com 〜なります (暖かくなります／休みになります), comparar com いちばん (秋がいちばん好きです), dizer do que gosta/não gosta no clima (暑いのが好きです／苦手です), dar o motivo com から (すずしいですから) e listar exemplos com や／とか (海や山／ぶどうとか梨とか).',
  studyNotes: [
    {
      title: 'Tópico: Estações e clima (季節と天気)',
      bodyPt:
        '## Can-do\n' +
        '- Assistir a um vídeo curto sobre as quatro estações do Japão e entender as características de cada estação.\n' +
        '- Falar de forma simples sobre as características das estações do seu país.\n' +
        '- Falar de forma simples sobre sua estação preferida e o motivo.\n\n' +
        '💡 Pergunta de abertura: あなたの{国|くに}にはどんな{季節|きせつ}がありますか？ (que estações há no seu país?).',
    },
    {
      title: 'Mudança do tempo: 〜なります (➊)',
      bodyPt:
        '**なります（なる）** indica **mudança** (“passar a ficar / tornar-se”). Nesta lição, mudanças de clima:\n\n' +
        '- **イA**: い → **く** + なります — `{暖|あたた}かくなります`, `すずしくなります`, `{寒|さむ}くなります`.\n' +
        '- **N / ナA**: + **に** + なります — `{学校|がっこう}が{休|やす}みになります`, `{公園|こうえん}がきれいになりました`.\n\n' +
        'Ex.: A：ちょっと、すずしくなりましたね。 B：そうですね。',
    },
    {
      title: 'Comparar e gostar do clima: いちばん / イA-いのが好きです・苦手です (➋➌)',
      bodyPt:
        '- **いちばん + adjetivo** = “o mais / mais que tudo”: `{秋|あき}がいちばん{好|す}きです`, `8{月|がつ}がいちばん{暑|あつ}いです`.\n' +
        '- **イA-い + の + が{好|す}きです／{苦手|にがて}です**: o **の** nominaliza o adjetivo (como na L2 com verbos): `{暑|あつ}いのが{好|す}きです`, `{寒|さむ}いのが{苦手|にがて}です`.\n' +
        '- **{苦手|にがて}** = “não curto / não vou muito com” — mais suave que {好|す}きじゃない.\n' +
        '- ⚠️ Negativo: が → は — `{寒|さむ}いのはあまり{好|す}きじゃないです／じゃありません`.',
    },
    {
      title: 'Dar o motivo: 〜から / S1から、S2 (➍❺)',
      bodyPt:
        '**から** indica **motivo/razão**:\n\n' +
        '- No **fim da frase**: `{秋|あき}が{好|す}きです。もみじの{景色|けしき}がきれいですから。` (responde a どうして？).\n' +
        '- **Ligando frases** — `S1から、S2` (S1 é o motivo de S2): `{暑|あつ}いのが{大好|だいす}きですから、{夏|なつ}が{好|す}きです`.\n\n' +
        'Antes de から cabem frases de N, adjetivo (です) e verbo: `{果物|くだもの}がおいしいですから、{秋|あき}が{好|す}きです`.',
    },
    {
      title: 'Listar exemplos: N1やN2 / N1とか（N2とか） (➏➐)',
      bodyPt:
        '- **や** liga substantivos dando **exemplos** (não a lista toda): `{海|うみ}や{山|やま}で{遊|あそ}ぶのも{楽|たの}しいです` (pode haver rio, floresta…). Cabe など: N1やN2など.\n' +
        '- **とか** também dá exemplos, em tom **coloquial**, e vale mesmo com um só item: `ぶどうとか{梨|なし}とか`, `{北海道|ほっかいどう}とか`.\n\n' +
        'Diferença: や é mais neutro; とか é mais de fala e pode vir após adjetivo/verbo, no meio ou no fim da frase.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Estações/tempo:** {暑|あつ}い (quente), すずしい (fresco), {寒|さむ}い (frio), {暖|あたた}かい (ameno), じめじめする／{蒸|む}し{暑|あつ}い (úmido/abafado), {雨|あめ}が{降|ふ}る (chover), {雪|ゆき}が{降|ふ}る (nevar), {桜|さくら}の{花|はな}が{咲|さ}く (cerejeiras florescem), もみじがきれい (bordos bonitos), セミが{鳴|な}く (cigarras cantam).\n\n' +
        '**Vocabulário:** {四季|しき} (quatro estações), {梅雨|つゆ} (estação das chuvas), {雨季|うき}／{乾季|かんき} (estação chuvosa/seca), {同|おな}じ (igual), 〜{度|ど} (graus), マイナス (negativo), {短|みじか}い (curto), {長|なが}い (longo), {景色|けしき} (paisagem), {果物|くだもの} (frutas), ぶどう (uva), {梨|なし} (pera), どうして (por quê), そうなんですか (“é mesmo?”), 〜よね (confirmar que o outro concorda).\n\n' +
        '**Kanji da lição:** {季節|きせつ}, {春|はる}, {夏|なつ}, {秋|あき}, {冬|ふゆ}, {花|はな}, {同|おな}じ, {暑|あつ}い, {寒|さむ}い.\n\n' +
        '📌 **TIPS:** **{日本|にほん}の{気候|きこう}** (clima varia muito norte↔sul: Tóquio, Niigata/{日本海側|にほんかいがわ}, {北海道|ほっかいどう} frio com neve, {沖縄|おきなわ} subtropical); **{梅雨|つゆ}** (chuvas de fim de maio a meados de julho); **{桜|さくら}と{花見|はなみ}** (apreciar as cerejeiras na primavera).',
    },
  ],
  groups: [lesson3Group],
  audios: attachScripts(3, L3_SCRIPTS),
}

// ---- Lição 4: 昨日はすごい雨でしたね (tópico 季節と天気) --------------------
const lesson4Group: ExerciseGroup = {
  id: 'iro-e1-l4',
  title: '昨日はすごい雨でしたね',
  subtitlePt: 'Estações e clima · puxar conversa sobre o tempo (いい天気ですね), entender a previsão do tempo (晴れるでしょう) e ler posts de rede social sobre o clima',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l4-1', number: 1, prompt: '「{今日|きょう}はいい{天気|てんき}ですね」 — que sentido tem o ね no fim (Nota ➊)?', choices: [{ n: 1, text: 'busca/mostra empatia (共感) — “né?, não é?” sobre algo que os dois percebem' }, { n: 2, text: 'indica passado' }, { n: 3, text: 'transforma em ordem' }, { n: 4, text: 'indica dúvida total sobre o fato' }], answer: 1, translationPt: 'Que tempo bom hoje, né?', explanationPt: 'ね no fim pede/mostra empatia (共感). O tempo é assunto fácil para puxar conversa, porque os dois compartilham a mesma percepção. (Nota ➊)' },
    { id: 'iro-e1-l4-2', number: 2, prompt: 'Esse ね de empatia é diferente do ね do 『{入門|にゅうもん}』 (Starter). Lá, ね servia para:', choices: [{ n: 1, text: 'confirmar algo com o outro — コピー20{枚|まい}ですね (são 20 cópias, certo?)' }, { n: 2, text: 'mostrar empatia sobre o tempo' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'negar o que o outro disse' }], answer: 1, explanationPt: 'No Starter, ね confirmava uma informação (コピー20{枚|まい}ですね). Aqui o uso é outro: empatia/共感. (Nota ➊)' },
    { id: 'iro-e1-l4-3', number: 3, prompt: 'Falar do tempo de agora vs. do passado (Nota ➋). Como fica o イ-adjetivo {暑|あつ}い no passado?', choices: [{ n: 1, text: '{暑|あつ}いです (agora) → {暑|あつ}かったです (passado)' }, { n: 2, text: '{暑|あつ}いです → {暑|あつ}いでした' }, { n: 3, text: '{暑|あつ}いです → {暑|あつ}くでした' }, { n: 4, text: '{暑|あつ}いです → {暑|あつ}いました' }], answer: 1, translationPt: 'Estava (fazia) calor.', explanationPt: 'Tempo de agora = não-passado (非過去); tempo passado = passado (過去). イA: {暑|あつ}いです→{暑|あつ}かったです. (Nota ➋)' },
    { id: 'iro-e1-l4-4', number: 4, prompt: 'Ainda no passado (Nota ➋): como ficam o substantivo {雨|あめ} e o ナ-adjetivo {大変|たいへん}?', choices: [{ n: 1, text: '{雨|あめ}でした ／ {大変|たいへん}でした' }, { n: 2, text: '{雨|あめ}かったです ／ {大変|たいへん}かったです' }, { n: 3, text: '{雨|あめ}いでした ／ {大変|たいへん}いでした' }, { n: 4, text: '{雨|あめ}ました ／ {大変|たいへん}ました' }], answer: 1, translationPt: 'Foi chuva (choveu). / Foi difícil.', explanationPt: 'N e ナA: 〜です→〜でした ({雨|あめ}でした, {大変|たいへん}でした). Verbo: 〜ます→〜ました ({降|ふ}ります→{降|ふ}りました). (Nota ➋ · tabela)' },
    { id: 'iro-e1-l4-5', number: 5, prompt: '「{今|いま}も{少|すこ}し{雨|あめ}が{降|ふ}っています」 (V-ています③) descreve:', choices: [{ n: 1, text: 'o estado/tempo atual (está chovendo agora)' }, { n: 2, text: 'uma profissão' }, { n: 3, text: 'algo que vai acontecer amanhã' }, { n: 4, text: 'um hábito de toda semana' }], answer: 1, translationPt: 'Agora ainda está chovendo um pouco.', explanationPt: 'V-ています③ = estado atual do tempo. (Na L1 era profissão; na L2, hábito.) (Nota ➌)' },
    { id: 'iro-e1-l4-6', number: 6, prompt: 'Quais expressões de tempo com V-ています convém memorizar (Nota ➌)?', choices: [{ n: 1, text: '{晴|は}れています (está ensolarado) ／ くもっています (nublado) ／ {雨|あめ}・{雪|ゆき}が{降|ふ}っています (chovendo/nevando)' }, { n: 2, text: '{晴|は}れました ／ くもります ／ {降|ふ}るでしょう' }, { n: 3, text: '{晴|は}れるでしょう ／ くもりでした ／ {雨|あめ}です' }, { n: 4, text: '{暑|あつ}いです ／ {寒|さむ}いです ／ いい{天気|てんき}です' }], answer: 1, explanationPt: 'Estado do tempo: {晴|は}れています, くもっています, {雨|あめ}／{雪|ゆき}が{降|ふ}っています, {風|かぜ}が{吹|ふ}いています. (Nota ➌)' },
    { id: 'iro-e1-l4-7', number: 7, prompt: '「{明日|あした}は{晴|は}れるでしょう」 (〜でしょう, Nota ➍) — o que expressa でしょう aqui?', choices: [{ n: 1, text: 'previsão/probabilidade (típico da previsão do tempo)' }, { n: 2, text: 'certeza absoluta' }, { n: 3, text: 'um convite' }, { n: 4, text: 'uma ordem' }], answer: 1, translationPt: 'Amanhã deve fazer sol (vai abrir o tempo).', explanationPt: '〜でしょう = previsão/suposição, muito usado na previsão do tempo ({天気予報|てんきよほう}). Em conversa é pouco usado. (Nota ➍)' },
    { id: 'iro-e1-l4-8', number: 8, prompt: 'A que formas でしょう se liga (Nota ➍)?', choices: [{ n: 1, text: 'N／ナA／イA-い／V-る + でしょう — {晴|は}れでしょう, {寒|さむ}いでしょう, {晴|は}れるでしょう, やむでしょう' }, { n: 2, text: 'só a substantivos' }, { n: 3, text: 'só à forma です no passado' }, { n: 4, text: 'só a verbos no passado' }], answer: 1, explanationPt: 'N/ナA/イA: 〜です→〜でしょう ({晴|は}れでしょう, {寒|さむ}いでしょう); verbo na forma de dicionário: {晴|は}れるでしょう, やむでしょう. (Nota ➍)' },
    { id: 'iro-e1-l4-9', number: 9, prompt: 'Vocabulário do tempo — qual conjunto está certo?', choices: [{ n: 1, text: '{晴|は}れ／いい{天気|てんき} (sol/bom tempo) ／ くもり (nublado) ／ {雨|あめ} (chuva)' }, { n: 2, text: '{晴|は}れ (chuva) ／ くもり (sol) ／ {雨|あめ} (neve)' }, { n: 3, text: '{晴|は}れ (neve) ／ くもり (vento) ／ {雨|あめ} (trovão)' }, { n: 4, text: 'todos significam “vento”' }], answer: 1, explanationPt: '{晴|は}れ／{晴|は}れる／いい{天気|てんき} (sol/limpo), くもり／くもる (nublado), {雨|あめ}／{雨|あめ}が{降|ふ}る (chuva/chover). (Atividade 1)' },
    { id: 'iro-e1-l4-10', number: 10, prompt: 'Continuando o vocabulário do tempo — qual está certo?', choices: [{ n: 1, text: '{雪|ゆき}／{雪|ゆき}が{降|ふ}る (neve/nevar) ／ {風|かぜ}／{風|かぜ}が{吹|ふ}く (vento/ventar) ／ {雷|かみなり}／{雷|かみなり}が{鳴|な}る (trovão/trovejar)' }, { n: 2, text: '{雪|ゆき} (chuva) ／ {風|かぜ} (sol) ／ {雷|かみなり} (neblina)' }, { n: 3, text: '{雪|ゆき} (vento) ／ {風|かぜ} (trovão) ／ {雷|かみなり} (neve)' }, { n: 4, text: 'todos significam “chuva”' }], answer: 1, explanationPt: '{雪|ゆき}が{降|ふ}る (nevar), {風|かぜ}が{吹|ふ}く (ventar), {雷|かみなり}が{鳴|な}る (trovejar). (Atividade 1)' },
    { id: 'iro-e1-l4-11', number: 11, prompt: 'As palavras 「だいぶ／{嫌|いや}になる／ゆうべ／{本当|ほんとう}ですね」 significam:', choices: [{ n: 1, text: 'bastante ／ ficar insuportável/chato ／ ontem à noite ／ “é verdade, né”' }, { n: 2, text: 'pouco ／ ficar feliz ／ amanhã ／ “não é bem assim”' }, { n: 3, text: 'talvez ／ melhorar ／ hoje ／ “não sei”' }, { n: 4, text: 'sempre ／ acabar ／ semana passada ／ “com certeza não”' }], answer: 1, explanationPt: 'だいぶ (bastante), {嫌|いや}になる (ficar chato/insuportável), ゆうべ (ontem à noite), {本当|ほんとう}ですね (é verdade, né). (Atividade 2 · vocab)' },
    { id: 'iro-e1-l4-12', number: 12, prompt: 'Na previsão do tempo, 「1{日|にち}／やむ／ただ／{強|つよ}い／{服装|ふくそう}／お{出|で}かけください」 significam:', choices: [{ n: 1, text: 'o dia todo ／ parar (a chuva) ／ porém ／ forte ／ roupa/traje ／ “saia (de casa)” (cortês)' }, { n: 2, text: 'um dia ／ começar ／ portanto ／ fraco ／ comida ／ “fique em casa”' }, { n: 3, text: 'meio-dia ／ continuar ／ além disso ／ frio ／ guarda-chuva ／ “durma”' }, { n: 4, text: 'à noite ／ cair ／ por isso ／ quente ／ sapato ／ “coma”' }], answer: 1, explanationPt: '1{日|にち} (o dia todo), やむ (a chuva parar), ただ (porém/só que), {強|つよ}い (forte), {服装|ふくそう} (traje/roupa), お{出|で}かけください (saia, por favor). (Atividade 2 · vocab)' },
    { id: 'iro-e1-l4-13', number: 13, prompt: 'No tema das redes sociais, 「{台風|たいふう}／{外|そと}／{死|し}ぬ／{町|まち}／{触|さわ}る／{冷|つめ}たい」 significam:', choices: [{ n: 1, text: 'tufão ／ (lado de) fora ／ morrer ／ cidade/bairro ／ tocar/encostar ／ gelado/frio (ao toque)' }, { n: 2, text: 'vento ／ dentro ／ dormir ／ campo ／ ver ／ quente' }, { n: 3, text: 'chuva ／ rua ／ correr ／ casa ／ ouvir ／ molhado' }, { n: 4, text: 'neve ／ céu ／ viver ／ loja ／ pegar ／ seco' }], answer: 1, explanationPt: '{台風|たいふう} (tufão), {外|そと} (fora), {死|し}ぬ (morrer), {町|まち} (cidade), {触|さわ}る (tocar), {冷|つめ}たい (gelado). (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l4-14', number: 14, prompt: 'Os kanji 「{天気|てんき}／{今|いま}／{晴|は}れ」 lêem-se:', choices: [{ n: 1, text: 'てんき (tempo/clima) ／ いま (agora) ／ はれ (tempo bom/sol)' }, { n: 2, text: 'てんき ／ こん ／ せい' }, { n: 3, text: 'てんけ ／ いま ／ はれ' }, { n: 4, text: 'あまけ ／ きん ／ ひ' }], answer: 1, explanationPt: '{天気|てんき} (tempo), {今|いま} (agora), {晴|は}れ (tempo bom). (漢字)' },
    { id: 'iro-e1-l4-15', number: 15, prompt: 'Os kanji 「{昨日|きのう}／{明日|あした}／{毎日|まいにち}」 lêem-se:', choices: [{ n: 1, text: 'きのう (ontem) ／ あした (amanhã) ／ まいにち (todo dia)' }, { n: 2, text: 'さくじつ ／ みょうにち ／ まいひ' }, { n: 3, text: 'きのう ／ あす ／ まいび' }, { n: 4, text: 'こんじつ ／ あした ／ まいにち' }], answer: 1, explanationPt: '{昨日|きのう} (ontem), {明日|あした} (amanhã), {毎日|まいにち} (todo dia). (漢字)' },
    { id: 'iro-e1-l4-16', number: 16, prompt: 'Os kanji 「{雨|あめ}／{雪|ゆき}／{風|かぜ}／{強|つよ}い」 lêem-se:', choices: [{ n: 1, text: 'あめ (chuva) ／ ゆき (neve) ／ かぜ (vento) ／ つよい (forte)' }, { n: 2, text: 'あめ ／ ゆき ／ ふう ／ きょうい' }, { n: 3, text: 'う ／ せつ ／ かぜ ／ つよい' }, { n: 4, text: 'あめ ／ ゆき ／ かぜ ／ ごうい' }], answer: 1, explanationPt: '{雨|あめ} (chuva), {雪|ゆき} (neve), {風|かぜ} (vento), {強|つよ}い (forte). Kanji da lição: {天気|てんき}・{今|いま}・{晴|は}れ・{昨日|きのう}・{明日|あした}・{毎日|まいにち}・{雨|あめ}・{雪|ゆき}・{風|かぜ}・{強|つよ}い. (漢字)' },
    { id: 'iro-e1-l4-17', number: 17, prompt: '📌 TIPS — sobre o {台風|たいふう} (tufão) no Japão:', choices: [{ n: 1, text: 'vem do verão ao outono, com vento e chuva fortes; pode parar transporte/escolas — virou costume online comer croquete (コロッケ) em dia de tufão' }, { n: 2, text: 'acontece só no inverno e traz neve' }, { n: 3, text: 'é um festival de primavera' }, { n: 4, text: 'nunca causa danos' }], answer: 1, explanationPt: '{台風|たいふう}: do verão ao outono, vento/chuva fortes, às vezes para transporte e escolas. Curiosidade: comer コロッケ (croquete) em dia de tufão virou “moda” em redes/fóruns. (TIPS)' },
    { id: 'iro-e1-l4-18', number: 18, prompt: '📌 TIPS — sobre a previsão do tempo ({天気予報|てんきよほう}) no Japão:', choices: [{ n: 1, text: 'além de tempo/temperatura/chuva, traz pólen, raios UV, risco de insolação, dica de roupa, de secar a roupa etc., com ícones' }, { n: 2, text: 'só informa a temperatura' }, { n: 3, text: 'não existe no Japão' }, { n: 4, text: 'só sai em jornal impresso' }], answer: 1, explanationPt: 'A {天気予報|てんきよほう} japonesa dá muita informação extra (pólen, UV, insolação, traje, secagem de roupa, qual nabe combina com o dia), por ícones. (TIPS)' },
    { id: 'iro-e1-l4-19', number: 19, prompt: 'Diálogo 04-03: como está o tempo e o que A comenta?', context: 'A：おはようございます。{今日|きょう}はいい{天気|てんき}ですね。 B：そうですね。いい{天気|てんき}ですね。 A：だいぶ{暖|あたた}かくなりましたね。 B：{本当|ほんとう}ですね。', choices: [{ n: 1, text: 'Está um bom tempo (sol); A comenta que esquentou bastante' }, { n: 2, text: 'Está chovendo muito todo dia' }, { n: 3, text: 'Está nevando pela primeira vez' }, { n: 4, text: 'Está com calor desde de manhã' }], answer: 1, explanationPt: 'いい{天気|てんき}ですね (empatia, ね) + だいぶ{暖|あたた}かくなりました (〜なりました, mudança no passado). (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l4-20', number: 20, prompt: 'Diálogo 04-04: do que A reclama?', context: 'A：{毎日|まいにち}、よく{降|ふ}りますね。 B：{本当|ほんとう}ですね。 A：{嫌|いや}になりますね。 B：そうですね。', choices: [{ n: 1, text: 'Da chuva: chove muito todo dia e isso já está chato/cansativo' }, { n: 2, text: 'Do calor que faz desde de manhã' }, { n: 3, text: 'Do tufão que parou os trens' }, { n: 4, text: 'Do frio do amanhecer' }], answer: 1, explanationPt: '{毎日|まいにち}、よく{降|ふ}りますね + {嫌|いや}になりますね (fica insuportável/chato). (Atividade 2)' },
    { id: 'iro-e1-l4-21', number: 21, prompt: 'Diálogo 04-05: sobre o que A e B conversam?', context: 'A：おはようございます。{朝|あさ}から{暑|あつ}いですね。 B：そうですね。ゆうべも{暑|あつ}かったですね。', choices: [{ n: 1, text: 'Do calor: já está quente de manhã, e ontem à noite (ゆうべ) também estava' }, { n: 2, text: 'Do bom tempo ensolarado' }, { n: 3, text: 'Da chuva diária' }, { n: 4, text: 'Da neve' }], answer: 1, explanationPt: '{朝|あさ}から{暑|あつ}いですね (não-passado) + ゆうべも{暑|あつ}かったですね (passado de イA, Nota ➋). (Atividade 2)' },
    { id: 'iro-e1-l4-22', number: 22, prompt: 'Diálogo 04-06: sobre o tempo de ontem ({昨日|きのう})?', context: 'A：{昨日|きのう}はすごい{雨|あめ}でしたね。 B：ええ、{風|かぜ}もすごかったですね。 A：{大変|たいへん}でしたね。 B：{本当|ほんとう}ですね。', choices: [{ n: 1, text: 'Ontem choveu muito e ventou muito; foi difícil' }, { n: 2, text: 'Ontem fez sol o dia todo' }, { n: 3, text: 'Ontem nevou pela primeira vez' }, { n: 4, text: 'Ontem esfriou de repente' }], answer: 1, explanationPt: '{昨日|きのう}はすごい{雨|あめ}でした (N+でした) + {風|かぜ}もすごかったです (イA passado) + {大変|たいへん}でした. (Atividade 2 · Nota ➋)' },
    { id: 'iro-e1-l4-23', number: 23, prompt: 'Previsão 04-11: como está o tempo HOJE ({今日|きょう})?', context: '{今日|きょう}は{雨|あめ}の1{日|にち}でした。{今|いま}も{少|すこ}し{降|ふ}っています。', choices: [{ n: 1, text: 'Choveu o dia todo e agora ainda chove um pouco' }, { n: 2, text: 'Fez sol o dia todo' }, { n: 3, text: 'Nevou a manhã inteira' }, { n: 4, text: 'Ventou muito sem chuva' }], answer: 1, explanationPt: '{雨|あめ}の1{日|にち}でした (passado) + {今|いま}も{少|すこ}し{降|ふ}っています (V-ています③, estado atual, Nota ➌). (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l4-24', number: 24, prompt: 'Previsão 04-11: o que se prevê para AMANHÃ ({明日|あした})?', context: 'でも、この{雨|あめ}は{夜中|よなか}にはやんで、{明日|あした}は{晴|は}れるでしょう。ただ、{明日|あした}は1{日|にち}、{風|かぜ}が{強|つよ}くなります。{寒|さむ}い1{日|にち}になります。', choices: [{ n: 1, text: 'A chuva para de madrugada, amanhã deve fazer sol, mas com vento forte o dia todo e frio' }, { n: 2, text: 'Vai chover ainda mais forte' }, { n: 3, text: 'Vai nevar e parar o transporte' }, { n: 4, text: 'Vai fazer muito calor' }], answer: 1, explanationPt: '{夜中|よなか}にはやんで + {明日|あした}は{晴|は}れるでしょう (V-る+でしょう, previsão, Nota ➍) + {風|かぜ}が{強|つよ}くなります + {寒|さむ}い1{日|にち}になります. (Atividade 2)' },
    { id: 'iro-e1-l4-25', number: 25, prompt: 'Previsão 04-11: que conselho a previsão dá no fim?', context: '{暖|あたた}かい{服装|ふくそう}でお{出|で}かけください。', choices: [{ n: 1, text: 'Saia (de casa) com roupa quente/agasalhada' }, { n: 2, text: 'Não saia de casa de jeito nenhum' }, { n: 3, text: 'Leve guarda-chuva grande' }, { n: 4, text: 'Use roupa leve por causa do calor' }], answer: 1, explanationPt: '{暖|あたた}かい{服装|ふくそう}でお{出|で}かけください = saia agasalhado (porque o dia será frio e ventoso). お〜ください = pedido cortês. (Atividade 2)' },
    { id: 'iro-e1-l4-26', number: 26, prompt: 'SNS ① ({山田|やまだ}{拓也|たくや}): o que ele posta?', context: '{台風|たいふう}が{来|き}てます。{今日|きょう}は{学校|がっこう}が{休|やす}みになりました。{今|いま}、{外|そと}はすごい{雨|あめ}がふっています。{風|かぜ}もつよいです。{夜|よる}はうちでコロッケを{食|た}べます。', choices: [{ n: 1, text: 'Tem tufão; a escola foi suspensa; lá fora chove e venta forte; à noite vai comer croquete em casa' }, { n: 2, text: 'Está um dia ensolarado e foi à escola normalmente' }, { n: 3, text: 'Viu neve pela primeira vez' }, { n: 4, text: 'Comprou um casaco novo' }], answer: 1, explanationPt: '{台風|たいふう}が{来|き}てます; {学校|がっこう}が{休|やす}みになりました; {外|そと}はすごい{雨|あめ}; コロッケを{食|た}べます (liga ao TIPS do tufão+croquete). (Atividade 3 · leitura)' },
    { id: 'iro-e1-l4-27', number: 27, prompt: 'SNS ② ({海|うみ}いちご): o que o post diz?', context: '{今|いま}の{気温|きおん}、37{度|ど}。あっっっっつーー！{死|し}ぬー！アイス{食|た}べたい！', choices: [{ n: 1, text: 'Está 37°C, calor insuportável (“tô morrendo!”), quer comer sorvete' }, { n: 2, text: 'Está nevando e muito frio' }, { n: 3, text: 'Está chovendo por causa do tufão' }, { n: 4, text: 'Esfriou e comprou um casaco' }], answer: 1, explanationPt: '{気温|きおん}37{度|ど} + あつーー！+ {死|し}ぬー！(exagero coloquial de “tô morrendo de calor”) + アイス{食|た}べたい. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l4-28', number: 28, prompt: 'SNS ③ (ナディア・アマンダ): o que ela conta?', context: '{雪|ゆき}がふりました。はじめて{雪|ゆき}を{見|み}ました。{町|まち}がまっしろになりました。とってもきれい！はじめて{雪|ゆき}をさわりました。とても{冷|つめ}たかったです。', choices: [{ n: 1, text: 'Nevou; ela viu e tocou neve pela 1ª vez; a cidade ficou toda branca; estava muito gelada' }, { n: 2, text: 'Fez 37°C e ela quer sorvete' }, { n: 3, text: 'Tem tufão e a escola fechou' }, { n: 4, text: 'Esfriou e ela comprou um casaco' }], answer: 1, explanationPt: '{雪|ゆき}がふりました; はじめて{雪|ゆき}を{見|み}た／さわった; {町|まち}がまっしろになりました (〜になりました); とても{冷|つめ}たかった (イA passado). (Atividade 3)' },
    { id: 'iro-e1-l4-29', number: 29, prompt: 'SNS ④ (ミケニャア): o que o post diz?', context: 'すずしくなりましたね。{今日|きょう}は{新|あたら}しいコートを{買|か}いました。', choices: [{ n: 1, text: 'O tempo esfriou (ficou fresco); hoje comprou um casaco novo' }, { n: 2, text: 'Está calor de 37°C' }, { n: 3, text: 'Tem tufão e muita chuva' }, { n: 4, text: 'Viu neve pela primeira vez' }], answer: 1, explanationPt: 'すずしくなりました (〜くなりました, ficou fresco) + {新|あたら}しいコートを{買|か}いました. Resposta: 朝ちょっとさむかったよね. (Atividade 3)' },
    { id: 'iro-e1-l4-30', number: 30, prompt: 'Pergunta de abertura da lição: 「どんな{天気|てんき}が{好|す}きですか？」 quer dizer:', choices: [{ n: 1, text: 'De que tipo de tempo você gosta?' }, { n: 2, text: 'Como está o tempo hoje?' }, { n: 3, text: 'Onde você mora?' }, { n: 4, text: 'Que estações há no seu país?' }], answer: 1, translationPt: 'De que tempo você gosta?', explanationPt: 'どんな{天気|てんき}が{好|す}きですか = de que tipo de tempo você gosta? Tema: {季節|きせつ}と{天気|てんき} (estações e clima). (Abertura)' },
    { id: 'iro-e1-l4-31', number: 31, prompt: 'A lição 4 tem 3 atividades. Quais são os objetivos (Can-do)?', choices: [{ n: 1, text: '1) cumprimentar falando do tempo; 2) entender a previsão do tempo; 3) ler posts de rede social sobre o clima' }, { n: 2, text: '1) pedir comida; 2) marcar consulta; 3) escrever currículo' }, { n: 3, text: '1) falar de hobbies; 2) contar a família; 3) apresentar-se' }, { n: 4, text: '1) dar direções; 2) comprar passagem; 3) reclamar' }], answer: 1, explanationPt: 'Can-do 11 ({朝|あさ}から{暑|あつ}いですね): saudar falando do tempo; 12 ({明日|あした}は{晴|は}れるでしょう): entender a previsão; 13 ({台風|たいふう}が{来|き}てます): ler posts de SNS sobre o clima. (Estrutura da lição)' },
    { id: 'iro-e1-l4-32', number: 32, prompt: 'No diálogo 3 (Atividade 1), a resposta empática mais comum a 「いい{天気|てんき}ですね」 é:', choices: [{ n: 1, text: 'そうですね。 / {本当|ほんとう}ですね。 (concordando com empatia)' }, { n: 2, text: 'いいえ、ちがいます。' }, { n: 3, text: 'すみません。' }, { n: 4, text: 'はじめまして。' }], answer: 1, explanationPt: 'A 〜ですね de empatia costuma ser respondida com そうですね／{本当|ほんとう}ですね (concordância). (Atividade 1 · Nota ➊)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 4
const L4_SCRIPTS: Record<string, ScriptItem[]> = {
  '04-03': [
    {
      label: '会話① (04-03)',
      setupJa: '{近所|きんじょ}の{人|ひと}や{知|し}り{合|あ}いと{会|あ}ったときに、あいさつをしています。',
      setupPt: 'As pessoas se cumprimentam ao encontrar um vizinho ou conhecido.',
      lines: [
        { speaker: 'A', ja: 'おはようございます。{今日|きょう}はいい{天気|てんき}ですね。', pt: 'Bom dia. Que tempo bom hoje, né?' },
        { speaker: 'B', ja: 'そうですね。いい{天気|てんき}ですね。', pt: 'É mesmo. Que tempo bom.' },
        { speaker: 'A', ja: 'だいぶ{暖|あたた}かくなりましたね。', pt: 'Esquentou bastante, né?' },
        { speaker: 'B', ja: '{本当|ほんとう}ですね。', pt: 'É verdade.' },
      ],
    },
  ],
  '04-04': [
    {
      label: '会話② (04-04)',
      lines: [
        { speaker: 'A', ja: '{毎日|まいにち}、よく{降|ふ}りますね。', pt: 'Todo dia chove bastante, né?' },
        { speaker: 'B', ja: '{本当|ほんとう}ですね。', pt: 'É verdade.' },
        { speaker: 'A', ja: '{嫌|いや}になりますね。', pt: 'Já está ficando insuportável, né?' },
        { speaker: 'B', ja: 'そうですね。', pt: 'Pois é.' },
      ],
    },
  ],
  '04-05': [
    {
      label: '会話③ (04-05)',
      lines: [
        { speaker: 'A', ja: 'おはようございます。{朝|あさ}から{暑|あつ}いですね。', pt: 'Bom dia. Já está quente desde de manhã, né?' },
        { speaker: 'B', ja: 'そうですね。ゆうべも{暑|あつ}かったですね。', pt: 'Pois é. Ontem à noite também estava quente.' },
        { speaker: 'A', ja: 'そうですね。', pt: 'É mesmo.' },
      ],
    },
  ],
  '04-06': [
    {
      label: '会話④ (04-06)',
      lines: [
        { speaker: 'A', ja: '{昨日|きのう}はすごい{雨|あめ}でしたね。', pt: 'Ontem choveu muito, né?' },
        { speaker: 'B', ja: 'ええ、{風|かぜ}もすごかったですね。', pt: 'É, e o vento também estava forte.' },
        { speaker: 'A', ja: '{大変|たいへん}でしたね。', pt: 'Foi complicado, né?' },
        { speaker: 'B', ja: '{本当|ほんとう}ですね。', pt: 'É verdade.' },
      ],
    },
  ],
  '04-11': [
    {
      label: '天気予報 (04-11)',
      setupJa: '{夕方|ゆうがた}、テレビで{天気予報|てんきよほう}を{見|み}ています。',
      setupPt: 'No fim da tarde, você assiste à previsão do tempo na TV.',
      lines: [
        { speaker: 'Previsão', ja: '{今日|きょう}は{雨|あめ}の1{日|にち}でした。{今|いま}も{少|すこ}し{降|ふ}っています。', pt: 'Hoje foi um dia de chuva. Agora ainda chove um pouco.' },
        { speaker: 'Previsão', ja: 'でも、この{雨|あめ}は{夜中|よなか}にはやんで、{明日|あした}は{晴|は}れるでしょう。', pt: 'Mas essa chuva deve parar de madrugada, e amanhã deve fazer sol.' },
        { speaker: 'Previsão', ja: 'ただ、{明日|あした}は1{日|にち}、{風|かぜ}が{強|つよ}くなります。', pt: 'Só que amanhã o vento fica forte o dia todo.' },
        { speaker: 'Previsão', ja: '{寒|さむ}い1{日|にち}になります。{暖|あたた}かい{服装|ふくそう}でお{出|で}かけください。', pt: 'Será um dia frio. Saia agasalhado, por favor.' },
      ],
    },
  ],
}

const lesson4: Section = {
  id: 'lesson-4',
  level: 'elementary1',
  titleJa: '第4課 昨日はすごい雨でしたね',
  titlePt: 'Lição 4 — Ontem choveu muito, né',
  summaryPt: 'Estações e clima · puxar conversa sobre o tempo com 〜ね de empatia (いい天気ですね), distinguir presente e passado (暑いです／暑かったです・雨でした), descrever o tempo atual com V-ています (雨が降っています), entender a previsão do tempo com 〜でしょう (明日は晴れるでしょう) e ler posts de rede social sobre o clima.',
  studyNotes: [
    {
      title: 'Tópico: Estações e clima (季節と天気)',
      bodyPt:
        '## Can-do\n' +
        '- Cumprimentar/puxar conversa falando do tempo.\n' +
        '- Ouvir a previsão do tempo e entender o conteúdo geral.\n' +
        '- Ler um post curto de rede social sobre o tempo e entender o conteúdo.\n\n' +
        '💡 Pergunta de abertura: どんな{天気|てんき}が{好|す}きですか？ (de que tempo você gosta?).',
    },
    {
      title: 'O 〜ね de empatia (共感) (➊)',
      bodyPt:
        'No fim da frase, **ね** busca ou mostra **empatia** com o ouvinte — “né?, não é?”:\n\n' +
        '- `{今日|きょう}はいい{天気|てんき}ですね` (que tempo bom, né?). Resposta: `そうですね。／{本当|ほんとう}ですね。`\n' +
        '- O tempo é assunto fácil para começar conversa, porque os dois compartilham a mesma percepção.\n\n' +
        '⚠️ É diferente do **ね de confirmação** do Starter (`コピー20{枚|まい}ですね` = são 20 cópias, certo?).',
    },
    {
      title: 'Presente × passado: 非過去・過去 (➋)',
      bodyPt:
        'Tempo de **agora** → não-passado; tempo **passado** → passado:\n\n' +
        '| | não-passado | passado |\n' +
        '|---|---|---|\n' +
        '| **N** | {雨|あめ}です | {雨|あめ}でした |\n' +
        '| **ナA** | {大変|たいへん}です | {大変|たいへん}でした |\n' +
        '| **イA** | {暑|あつ}いです | {暑|あつ}かったです |\n' +
        '| **V** | {降|ふ}ります | {降|ふ}りました |\n\n' +
        '⚠️ イA no passado é **〜かったです** (não 〜いでした). Revisão do Starter.',
    },
    {
      title: 'O tempo agora: V-ています③ / a previsão: 〜でしょう (➌➍)',
      bodyPt:
        '- **V-ています③** = estado atual do tempo: `{今|いま}も{少|すこ}し{雨|あめ}が{降|ふ}っています`. Memorize: {晴|は}れています, くもっています, {雨|あめ}／{雪|ゆき}が{降|ふ}っています, {風|かぜ}が{吹|ふ}いています. (Na L1 era profissão; na L2, hábito.)\n' +
        '- **〜でしょう** = previsão/suposição, típico da previsão do tempo: `{明日|あした}は{晴|は}れるでしょう`. Liga-se a **N／ナA／イA-い／V-る** ({晴|は}れでしょう, {寒|さむ}いでしょう, {晴|は}れるでしょう, やむでしょう). Em conversa é pouco usado; aqui basta **entender** a previsão.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Tempo:** {晴|は}れ／{晴|は}れる／いい{天気|てんき} (sol), くもり／くもる (nublado), {雨|あめ}／{雨|あめ}が{降|ふ}る (chuva), {雪|ゆき}／{雪|ゆき}が{降|ふ}る (neve), {風|かぜ}／{風|かぜ}が{吹|ふ}く (vento), {雷|かみなり}／{雷|かみなり}が{鳴|な}る (trovão).\n\n' +
        '**Vocabulário:** だいぶ (bastante), {嫌|いや}になる (ficar chato/insuportável), ゆうべ (ontem à noite), {本当|ほんとう}ですね (é verdade, né), 1{日|にち} (o dia todo), やむ (a chuva parar), ただ (porém), {強|つよ}い (forte), {服装|ふくそう} (traje), お{出|で}かけください (saia, por favor), {台風|たいふう} (tufão), {外|そと} (fora), {死|し}ぬ (morrer), {町|まち} (cidade), {触|さわ}る (tocar), {冷|つめ}たい (gelado), {気温|きおん} (temperatura), コート (casaco), コロッケ (croquete).\n\n' +
        '**Kanji da lição:** {天気|てんき}, {今|いま}, {晴|は}れ, {昨日|きのう}, {明日|あした}, {毎日|まいにち}, {雨|あめ}, {雪|ゆき}, {風|かぜ}, {強|つよ}い.\n\n' +
        '📌 **TIPS:** **{台風|たいふう}** (tufão, do verão ao outono; vira costume online comer コロッケ no dia de tufão); **{天気予報|てんきよほう}** (a previsão japonesa traz pólen, UV, insolação, dica de roupa e de secar a roupa etc., por ícones).',
    },
  ],
  groups: [lesson4Group],
  audios: attachScripts(4, L4_SCRIPTS),
}

// ---- Lição 5: とてもにぎやかで便利です (tópico 私の町) ----------------------
const lesson5Group: ExerciseGroup = {
  id: 'iro-e1-l5',
  title: 'とてもにぎやかで便利です',
  subtitlePt: 'Minha cidade · descrever a cidade ligando adjetivos (にぎやかで便利です／緑が多くて静かです), contrastar com けど (不便だけどきれい) e dizer o que dá para fazer num lugar (花を見ることができます)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l5-1', number: 1, prompt: '「とてもにぎやかで、{便利|べんり}です」 — como se ligam dois adjetivos numa frase só (Nota ➊)?', choices: [{ n: 1, text: 'N／ナA → 〜で; イA → 〜くて (にぎやか**で**、{便利|べんり}です)' }, { n: 2, text: 'sempre com から' }, { n: 3, text: 'sempre com けど' }, { n: 4, text: 'sempre com の' }], answer: 1, translationPt: 'É muito movimentado e prático.', explanationPt: 'Para encadear: N e ナA usam 〜で ({田舎|いなか}で…, にぎやかで…); juntam duas frases numa. (Nota ➊)' },
    { id: 'iro-e1-l5-2', number: 2, prompt: 'E com イ-adjetivo? Ex.: 「{緑|みどり}が{多|おお}い」 + 「{静|しず}かです」', choices: [{ n: 1, text: '{緑|みどり}が{多|おお}**くて**、{静|しず}かです (イA: い→くて)' }, { n: 2, text: '{緑|みどり}が{多|おお}いで、{静|しず}かです' }, { n: 3, text: '{緑|みどり}が{多|おお}いだけど、{静|しず}かです' }, { n: 4, text: '{緑|みどり}が{多|おお}いから、{静|しず}かです' }], answer: 1, translationPt: 'Tem muito verde e é tranquilo.', explanationPt: 'イA liga com 〜くて: {多|おお}い→{多|おお}くて, やさしい→やさしくて ({人|ひと}がやさしくて、{住|す}みやすいです). (Nota ➊)' },
    { id: 'iro-e1-l5-3', number: 3, prompt: '「{場所|ばしょ}は{不便|ふべん}だけど、きれいですよ」 — o que けど expressa (Nota ➋)?', choices: [{ n: 1, text: 'contraste: um lado negativo, o outro positivo (“é X, mas Y”)' }, { n: 2, text: 'motivo' }, { n: 3, text: 'ordem cronológica' }, { n: 4, text: 'condição' }], answer: 1, translationPt: 'O lugar é mal localizado, mas é bonito.', explanationPt: 'けど liga duas frases em contraste — uma avaliação positiva e outra negativa. (Nota ➋)' },
    { id: 'iro-e1-l5-4', number: 4, prompt: 'A que formas けど se liga (Nota ➋)?', choices: [{ n: 1, text: 'N／ナA → 〜だけど; イA → 〜いけど ({不便|ふべん}**だ**けど, {古|ふる}**い**けど, {遠|とお}**い**けど)' }, { n: 2, text: 'sempre N+けど, sem だ' }, { n: 3, text: 'só a verbos' }, { n: 4, text: 'イA vira くけど' }], answer: 1, explanationPt: 'N/ナA: 〜だけど ({都会|とかい}だけど…, {静|しず}かだけど…); イA: 〜いけど ({建物|たてもの}は{古|ふる}いけど…, ちょっと{遠|とお}いけど…). (Nota ➋)' },
    { id: 'iro-e1-l5-5', number: 5, prompt: '「{一年中|いちねんじゅう}、いろいろな{花|はな}を{見|み}ることができます」 (V-ることができます) significa:', choices: [{ n: 1, text: 'dá para / é possível (ver flores o ano todo)' }, { n: 2, text: 'tenho que ver flores' }, { n: 3, text: 'não posso ver flores' }, { n: 4, text: 'quero ver flores' }], answer: 1, translationPt: 'Dá para ver vários tipos de flor o ano todo.', explanationPt: 'V (辞書形) + ことができます = ser possível/poder. Usado para descrever o que dá para fazer num lugar. (Nota ➌)' },
    { id: 'iro-e1-l5-6', number: 6, prompt: 'できます tem dois usos. Qual é o desta lição (Nota ➌)?', choices: [{ n: 1, text: '② possibilidade pela situação (ex.: {丘|おか}から{海|うみ}を{見渡|みわた}すことができます) — descrição de cidade/ponto turístico' }, { n: 2, text: '① só capacidade pessoal ({日本語|にほんご}ができます)' }, { n: 3, text: 'indicar passado' }, { n: 4, text: 'fazer um pedido' }], answer: 1, explanationPt: 'できます: ① capacidade ({日本語|にほんご}ができます); ② algo possível pela situação ({冬|ふゆ}はスキーができます). Aqui é o ②, p/ descrever lugares: {地元|じもと}の{料理|りょうり}を{食|た}べることができます. (Nota ➌)' },
    { id: 'iro-e1-l5-7', number: 7, prompt: 'Vocabulário “como é a cidade?” — qual conjunto está certo?', choices: [{ n: 1, text: '{便利|べんり}（な） (prático) ／ {不便|ふべん}（な） (inconveniente) ／ にぎやか（な） (movimentado) ／ {静|しず}か（な） (tranquilo)' }, { n: 2, text: '{便利|べんり} (caro) ／ {不便|ふべん} (barato) ／ にぎやか (vazio) ／ {静|しず}か (barulhento)' }, { n: 3, text: '{便利|べんり} (longe) ／ {不便|ふべん} (perto) ／ にぎやか (velho) ／ {静|しず}か (novo)' }, { n: 4, text: 'todos significam “bonito”' }], answer: 1, explanationPt: '{便利|べんり}（な）, {不便|ふべん}（な）, にぎやか（な）, {静|しず}か（な） — pares opostos sobre a cidade. (Atividade 1)' },
    { id: 'iro-e1-l5-8', number: 8, prompt: 'Mais vocabulário da cidade: 「{緑|みどり}が{多|おお}い／{緑|みどり}が{少|すく}ない／{人|ひと}がやさしい・{親切|しんせつ}（な）／{人|ひと}が{冷|つめ}たい」 significam:', choices: [{ n: 1, text: 'tem muito verde ／ tem pouco verde ／ gente gentil/atenciosa ／ gente fria' }, { n: 2, text: 'muito caro ／ barato ／ gente alegre ／ gente triste' }, { n: 3, text: 'muita loja ／ pouca loja ／ gente alta ／ gente baixa' }, { n: 4, text: 'muito sol ／ pouca chuva ／ gente rápida ／ gente lenta' }], answer: 1, explanationPt: '{緑|みどり}が{多|おお}い／{少|すく}ない (muito/pouco verde), {人|ひと}がやさしい／{親切|しんせつ}（な） (gentil/atencioso), {人|ひと}が{冷|つめ}たい (frio/distante). (Atividade 1)' },
    { id: 'iro-e1-l5-9', number: 9, prompt: 'As palavras 「{田舎|いなか}／{都会|とかい}／{景色|けしき}がきれい（な）」 significam:', choices: [{ n: 1, text: 'interior/campo ／ cidade grande ／ paisagem bonita' }, { n: 2, text: 'cidade grande ／ interior ／ paisagem feia' }, { n: 3, text: 'praia ／ montanha ／ rua movimentada' }, { n: 4, text: 'norte ／ sul ／ centro' }], answer: 1, explanationPt: '{田舎|いなか} (interior/zona rural), {都会|とかい} (cidade grande/urbano), {景色|けしき}がきれい（な） (paisagem bonita). (Atividade 1)' },
    { id: 'iro-e1-l5-10', number: 10, prompt: 'As palavras 「{確|たし}かに／{住|す}みやすい／{店|みせ}」 significam:', choices: [{ n: 1, text: 'de fato/realmente ／ bom de morar/confortável ／ loja' }, { n: 2, text: 'talvez ／ difícil de morar ／ casa' }, { n: 3, text: 'nunca ／ caro ／ rua' }, { n: 4, text: 'sempre ／ perigoso ／ parque' }], answer: 1, explanationPt: '{確|たし}かに (de fato, concordando), {住|す}みやすい (confortável de morar), {店|みせ} (loja/restaurante). (Atividade 1 · vocab)' },
    { id: 'iro-e1-l5-11', number: 11, prompt: 'Adjetivos para descrever lugares (Atividade 2): qual conjunto está certo?', choices: [{ n: 1, text: '{安|やす}い (barato) ／ おもしろい (interessante) ／ きれい（な） (bonito) ／ {広|ひろ}い (amplo)' }, { n: 2, text: '{安|やす}い (caro) ／ おもしろい (chato) ／ きれい (sujo) ／ {広|ひろ}い (apertado)' }, { n: 3, text: '{安|やす}い (longe) ／ おもしろい (perto) ／ きれい (velho) ／ {広|ひろ}い (novo)' }, { n: 4, text: 'todos significam “famoso”' }], answer: 1, explanationPt: '{安|やす}い (barato), おもしろい (interessante/divertido), きれい（な） (bonito/limpo), {広|ひろ}い (amplo/espaçoso). (Atividade 2)' },
    { id: 'iro-e1-l5-12', number: 12, prompt: 'Mais adjetivos de lugar (Atividade 2): 「{不便|ふべん}（な）／{遠|とお}い／{古|ふる}い／{人|ひと}が{多|おお}い」 significam:', choices: [{ n: 1, text: 'mal localizado ／ longe ／ velho/antigo ／ tem muita gente' }, { n: 2, text: 'prático ／ perto ／ novo ／ vazio' }, { n: 3, text: 'bonito ／ amplo ／ barato ／ silencioso' }, { n: 4, text: 'famoso ／ tranquilo ／ caro ／ limpo' }], answer: 1, explanationPt: '{不便|ふべん}（な） (mal localizado), {遠|とお}い (longe), {古|ふる}い (velho), {人|ひと}が{多|おお}い (cheio de gente). (Atividade 2)' },
    { id: 'iro-e1-l5-13', number: 13, prompt: 'As palavras 「どこか／ところ／{建物|たてもの}／おすすめ／ぜひ／{行|い}ってみる／{知|し}っている／{休憩所|きゅうけいじょ}」 significam:', choices: [{ n: 1, text: 'algum lugar ／ lugar ／ prédio/construção ／ recomendação ／ com certeza/sem falta ／ ir experimentar ／ conhecer/saber ／ área de descanso' }, { n: 2, text: 'ninguém ／ tempo ／ rua ／ proibido ／ talvez ／ voltar ／ esquecer ／ banheiro' }, { n: 3, text: 'sempre ／ pessoa ／ carro ／ caro ／ nunca ／ correr ／ perguntar ／ cozinha' }, { n: 4, text: 'aqui ／ hora ／ loja ／ barato ／ rápido ／ parar ／ ver ／ quarto' }], answer: 1, explanationPt: 'どこか (algum lugar), ところ (lugar), {建物|たてもの} (prédio), おすすめ (recomendação), ぜひ (sem falta), {行|い}ってみる (ir experimentar), {知|し}っている/{知|し}る (conhecer), {休憩所|きゅうけいじょ} (área de descanso). (Atividade 2 · vocab)' },
    { id: 'iro-e1-l5-14', number: 14, prompt: 'No mapa da cidade (Atividade 3), 「{美|うつく}しい／{砂浜|すなはま}／{有名|ゆうめい}（な）／{泳|およ}ぐ／{丘|おか}／{見渡|みわた}す／{夕日|ゆうひ}」 significam:', choices: [{ n: 1, text: 'belo ／ praia (de areia) ／ famoso ／ nadar ／ colina ／ avistar/ter vista de ／ pôr do sol' }, { n: 2, text: 'feio ／ montanha ／ desconhecido ／ correr ／ vale ／ esconder ／ nascer do sol' }, { n: 3, text: 'velho ／ rio ／ caro ／ voar ／ ponte ／ atravessar ／ lua' }, { n: 4, text: 'novo ／ lago ／ barato ／ andar ／ ilha ／ entrar ／ estrela' }], answer: 1, explanationPt: '{美|うつく}しい (belo), {砂浜|すなはま} (praia de areia), {有名|ゆうめい}（な） (famoso), {泳|およ}ぐ (nadar), {丘|おか} (colina), {見渡|みわた}す (avistar do alto), {夕日|ゆうひ} (pôr do sol). (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l5-15', number: 15, prompt: 'Os kanji 「{町|まち}／{店|みせ}／{食堂|しょくどう}」 lêem-se:', choices: [{ n: 1, text: 'まち (cidade/bairro) ／ みせ (loja) ／ しょくどう (refeitório/restaurante popular)' }, { n: 2, text: 'ちょう ／ てん ／ しょくどう' }, { n: 3, text: 'まち ／ みせ ／ しょくほり' }, { n: 4, text: 'むら ／ みせ ／ たべどう' }], answer: 1, explanationPt: '{町|まち} (cidade/bairro), {店|みせ} (loja), {食堂|しょくどう} (refeitório/restaurante). (漢字)' },
    { id: 'iro-e1-l5-16', number: 16, prompt: 'Os kanji 「{便利|べんり}（な）／{不便|ふべん}（な）／{静|しず}か（な）／{有名|ゆうめい}（な）」 lêem-se:', choices: [{ n: 1, text: 'べんり (prático) ／ ふべん (inconveniente) ／ しずか (tranquilo) ／ ゆうめい (famoso)' }, { n: 2, text: 'べんり ／ ふべん ／ せいか ／ ゆうめい' }, { n: 3, text: 'びんり ／ ふびん ／ しずか ／ ゆうみょう' }, { n: 4, text: 'べんり ／ ふべん ／ しずか ／ ありめい' }], answer: 1, explanationPt: '{便利|べんり}（な）, {不便|ふべん}（な）, {静|しず}か（な）, {有名|ゆうめい}（な）. (漢字)' },
    { id: 'iro-e1-l5-17', number: 17, prompt: 'Os kanji 「{多|おお}い／{少|すく}ない／{遠|とお}い」 lêem-se:', choices: [{ n: 1, text: 'おおい (muito) ／ すくない (pouco) ／ とおい (longe)' }, { n: 2, text: 'たい ／ しょうない ／ えんい' }, { n: 3, text: 'おおい ／ すこない ／ とおい' }, { n: 4, text: 'おおい ／ すくない ／ えんい' }], answer: 1, explanationPt: '{多|おお}い (muito), {少|すく}ない (pouco), {遠|とお}い (longe). Kanji da lição: {町|まち}・{店|みせ}・{食堂|しょくどう}・{便利|べんり}・{不便|ふべん}・{静|しず}か・{有名|ゆうめい}・{多|おお}い・{少|すく}ない・{遠|とお}い. (漢字)' },
    { id: 'iro-e1-l5-18', number: 18, prompt: '📌 TIPS — sobre as スポーツクラブ (academias) no Japão:', choices: [{ n: 1, text: 'também chamadas ジム/フィットネスクラブ/スポーツセンター; têm máquinas, estúdio, piscina; mensalidade ~10.000 ienes; há academias 24h só de máquinas e centros públicos baratos' }, { n: 2, text: 'são gratuitas para todos' }, { n: 3, text: 'só existem em Tóquio' }, { n: 4, text: 'funcionam só no verão' }], answer: 1, explanationPt: 'スポーツクラブ (academia): também ジム/フィットネスクラブ/スポーツセンター; máquinas, estúdio, piscina; ~10.000 ienes/mês; há 24h só de máquinas (metade do preço) e centros públicos por algumas centenas de ienes. (TIPS)' },
    { id: 'iro-e1-l5-19', number: 19, prompt: '📌 TIPS — o que é uma ショッピングモール?', choices: [{ n: 1, text: 'um grande complexo com lojas, supermercado, praça de alimentação, fliperama, cinema etc. — dá para passar o dia todo' }, { n: 2, text: 'um templo budista' }, { n: 3, text: 'uma estação de trem' }, { n: 4, text: 'um banho público' }], answer: 1, explanationPt: 'ショッピングモール: prédio grande com lojas variadas, eletrônicos, drogaria, supermercado, praça de alimentação, fliperama, cinema; lugar para curtir a folga o dia todo. (TIPS)' },
    { id: 'iro-e1-l5-20', number: 20, prompt: '📌 TIPS — sobre os {入浴施設|にゅうよくしせつ} (estabelecimentos de banho) japoneses:', choices: [{ n: 1, text: 'incluem {銭湯|せんとう} (banho público tradicional, barato), {健康|けんこう}ランド (spa com muitos banhos/saunas, mais caro) e スーパー{銭湯|せんとう} (meio-termo)' }, { n: 2, text: 'são só piscinas ao ar livre' }, { n: 3, text: 'são bibliotecas com banho' }, { n: 4, text: 'não existem mais no Japão' }], answer: 1, explanationPt: '{入浴施設|にゅうよくしせつ}: {銭湯|せんとう} (banho público tradicional, ≤500 ienes), {健康|けんこう}ランド (spa com banhos/saunas/restaurante, 1.000–2.000 ienes) e スーパー{銭湯|せんとう} (intermediário). Muitos têm {休憩所|きゅうけいじょ}/{食堂|しょくどう}. (TIPS)' },
    { id: 'iro-e1-l5-21', number: 21, prompt: 'Diálogo 05-03: o que B acha da cidade?', context: 'B：そうですねえ……。とてもにぎやかで、{便利|べんり}です。…でも、{緑|みどり}がちょっと{少|すく}ないですね。 A：ああ、{確|たし}かに。', choices: [{ n: 1, text: 'É movimentada e prática, mas tem pouco verde' }, { n: 2, text: 'É tranquila e tem muito verde' }, { n: 3, text: 'É no interior e longe de tudo' }, { n: 4, text: 'A gente é fria e a cidade é feia' }], answer: 1, explanationPt: 'にぎやかで、{便利|べんり}です (ligação 〜で, Nota ➊) + でも、{緑|みどり}が{少|すく}ない. A concorda: {確|たし}かに. (Atividade 1 · 聴解スクリプト)' },
    { id: 'iro-e1-l5-22', number: 22, prompt: 'Diálogo 05-04: o que B diz da cidade?', context: 'B：えっと、{人|ひと}がやさしくて、{住|す}みやすいです。それに、{景色|けしき}がきれいです。', choices: [{ n: 1, text: 'A gente é gentil, é confortável de morar e a paisagem é bonita' }, { n: 2, text: 'É movimentada mas a gente é fria' }, { n: 3, text: 'Tem pouco verde e é mal localizada' }, { n: 4, text: 'É no interior e tem poucos ônibus' }], answer: 1, explanationPt: '{人|ひと}がやさしくて、{住|す}みやすいです (イA→くて, Nota ➊) + {景色|けしき}がきれいです. (Atividade 1)' },
    { id: 'iro-e1-l5-23', number: 23, prompt: 'Diálogo 05-05: como B descreve a cidade?', context: 'B：{都会|とかい}ですね。{人|ひと}も{店|みせ}も{多|おお}くて、にぎやかですね。…うーん、でも、{人|ひと}がちょっと{冷|つめ}たいです。', choices: [{ n: 1, text: 'É urbana, com muita gente e lojas (movimentada), mas a gente é meio fria' }, { n: 2, text: 'É tranquila e a gente é gentil' }, { n: 3, text: 'É no interior, com muito verde' }, { n: 4, text: 'É bonita mas mal localizada' }], answer: 1, explanationPt: '{都会|とかい}; {人|ひと}も{店|みせ}も{多|おお}くて、にぎやか (〜くて); でも、{人|ひと}がちょっと{冷|つめ}たい. (Atividade 1)' },
    { id: 'iro-e1-l5-24', number: 24, prompt: 'Diálogo 05-06: o que B fala da cidade?', context: 'B：{緑|みどり}が{多|おお}くて、{静|しず}かでいいですね。…でも、バスが{少|すく}なくて、ちょっと{不便|ふべん}です。', choices: [{ n: 1, text: 'Tem muito verde e é tranquila (bom), mas há poucos ônibus e é meio mal servida' }, { n: 2, text: 'É movimentada e prática' }, { n: 3, text: 'A gente é fria e a cidade é cheia' }, { n: 4, text: 'É bonita e bem localizada' }], answer: 1, explanationPt: '{緑|みどり}が{多|おお}くて、{静|しず}かで… (〜くて, 〜で) + でも、バスが{少|すく}なくて、{不便|ふべん}です. (Atividade 1)' },
    { id: 'iro-e1-l5-25', number: 25, prompt: 'Diálogo 05-10: que lugar B recomenda e como ele é?', context: 'B：じゃあ、「{南|みなみ}スポーツセンター」とかはどう？ … {建物|たてもの}は{古|ふる}いけど、{安|やす}くていいわよ。', choices: [{ n: 1, text: 'O “Minami Sports Center” — o prédio é velho, mas é barato e bom' }, { n: 2, text: 'Um shopping novo e caro' }, { n: 3, text: 'Um parque longe e bonito' }, { n: 4, text: 'Um banho público famoso' }], answer: 1, explanationPt: '{南|みなみ}スポーツセンター; {建物|たてもの}は{古|ふる}いけど、{安|やす}くていい (けど contraste, Nota ➋ + 〜くて). (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l5-26', number: 26, prompt: 'Diálogo 05-11: o que é a “マリンモール” e como B a descreve?', context: 'B：ショッピングモール。いろんな{店|みせ}とか、レストランとか、スーパーとかがあるところ。おもしろいけど、{日曜日|にちようび}は{人|ひと}が{多|おお}いかな。', choices: [{ n: 1, text: 'Um shopping (lojas, restaurantes, supermercado); é legal, mas no domingo fica cheio' }, { n: 2, text: 'Uma academia barata e velha' }, { n: 3, text: 'Um templo tranquilo' }, { n: 4, text: 'Uma praia famosa' }], answer: 1, explanationPt: 'ショッピングモール (lojas/restaurantes/supermercado); おもしろいけど、{日曜日|にちようび}は{人|ひと}が{多|おお}い (けど, Nota ➋). A：{一度|いちど}{行|い}ってみます. (Atividade 2)' },
    { id: 'iro-e1-l5-27', number: 27, prompt: 'Diálogo 05-12: como é a “たちばな{公園|こうえん}”?', context: 'B：ここから{自転車|じてんしゃ}で20{分|ふん}くらい。{場所|ばしょ}は{不便|ふべん}だけど、きれいですよ。…ぜひ{行|い}ってみてください。', choices: [{ n: 1, text: 'Fica a ~20 min de bike; é mal localizada, mas é bonita — vale a pena ir' }, { n: 2, text: 'Fica ao lado da estação e é movimentada' }, { n: 3, text: 'É uma academia 24h' }, { n: 4, text: 'É um shopping cheio aos domingos' }], answer: 1, explanationPt: '{自転車|じてんしゃ}で20{分|ふん}; {場所|ばしょ}は{不便|ふべん}だけど、きれい (ナA→だけど, Nota ➋); ぜひ{行|い}ってみてください. (Atividade 2)' },
    { id: 'iro-e1-l5-28', number: 28, prompt: 'Diálogo 05-13: o que é a “ゆうゆう{館|かん}” e como B a descreve?', context: 'B：{広|ひろ}くておすすめです。…お{風呂|ふろ}ですよ。{食堂|しょくどう}や{休憩所|きゅうけいじょ}もあって、1{日|にち}ゆっくりできますよ。…ちょっと{遠|とお}いけど、バスがあります。', choices: [{ n: 1, text: 'É um banho público (ofurô) amplo e recomendado; tem refeitório e descanso, dá para passar o dia; é longe mas tem ônibus' }, { n: 2, text: 'É um shopping novo no centro' }, { n: 3, text: 'É um parque com muitas flores' }, { n: 4, text: 'É uma academia barata' }], answer: 1, explanationPt: 'お{風呂|ふろ} (banho); {広|ひろ}くておすすめ; {食堂|しょくどう}や{休憩所|きゅうけいじょ}もあって、1{日|にち}ゆっくりできます (V-ること…/できます); ちょっと{遠|とお}いけど、バスがあります (けど). (Atividade 2)' },
    { id: 'iro-e1-l5-29', number: 29, prompt: 'Mapa (Atividade 3) — “もみじ{庵|あん}”: o que dá para fazer lá?', context: 'もみじ{庵|あん}：いろは{町|ちょう}の{名物|めいぶつ}「いろはそば」を{食|た}べることができる。{安|やす}くておいしいと{評判|ひょうばん}。', choices: [{ n: 1, text: 'Comer o prato típico “iroha soba”; é barato e bem avaliado' }, { n: 2, text: 'Nadar no mar' }, { n: 3, text: 'Ver o pôr do sol do alto da colina' }, { n: 4, text: 'Ver flores o ano todo' }], answer: 1, explanationPt: '「いろはそば」を{食|た}べることができる (V-ることができる, Nota ➌); {安|やす}くておいしい. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l5-30', number: 30, prompt: 'Mapa (Atividade 3) — “{花山公園|はなやまこうえん}”: o que se destaca?', context: '{花山公園|はなやまこうえん}：80haの{公園|こうえん}の{中|なか}には、バーベキュー{場|じょう}やサイクリングコースなどがある。{一年中|いちねんじゅう}、いろいろな{花|はな}を{見|み}ることができる。', choices: [{ n: 1, text: 'Parque grande com churrasqueira e ciclovia; dá para ver várias flores o ano todo' }, { n: 2, text: 'Restaurante de soba típico' }, { n: 3, text: 'Praia para nadar no verão' }, { n: 4, text: 'Mirante do pôr do sol' }], answer: 1, explanationPt: 'バーベキュー{場|じょう}・サイクリングコース; {一年中|いちねんじゅう}いろいろな{花|はな}を{見|み}ることができる (V-ることができる, Nota ➌). (Atividade 3)' },
    { id: 'iro-e1-l5-31', number: 31, prompt: 'Mapa (Atividade 3) — “やしが{浜|はま}” e “{夕日|ゆうひ}の{丘|おか}{展望台|てんぼうだい}”: o que oferecem?', context: 'やしが{浜|はま}：{長|なが}くて{美|うつく}しい{砂浜|すなはま}が{有名|ゆうめい}。{夏|なつ}はたくさんの{人|ひと}が{泳|およ}ぎに{来|く}る。 {夕日|ゆうひ}の{丘|おか}{展望台|てんぼうだい}：{丘|おか}の{上|うえ}から{海|うみ}と{町|まち}を{見渡|みわた}すことができる。{夕日|ゆうひ}が{美|うつく}しい。', choices: [{ n: 1, text: 'A praia: areia longa e bonita, gente vem nadar no verão; o mirante: vista do mar e da cidade do alto, pôr do sol lindo' }, { n: 2, text: 'Os dois são restaurantes de soba' }, { n: 3, text: 'Os dois são academias' }, { n: 4, text: 'Os dois são shoppings' }], answer: 1, explanationPt: 'やしが{浜|はま}: {砂浜|すなはま}・{泳|およ}ぐ; {展望台|てんぼうだい}: {海|うみ}と{町|まち}を{見渡|みわた}すことができる (Nota ➌), {夕日|ゆうひ}が{美|うつく}しい. (Atividade 3)' },
    { id: 'iro-e1-l5-32', number: 32, prompt: 'Pergunta de abertura da lição: 「あなたの{住|す}んでいる{町|まち}は、どんなところですか？」 quer dizer:', choices: [{ n: 1, text: 'Como é a cidade onde você mora?' }, { n: 2, text: 'De que tempo você gosta?' }, { n: 3, text: 'Qual é o seu hobby?' }, { n: 4, text: 'Que estações há no seu país?' }], answer: 1, translationPt: 'Como é o lugar onde você mora?', explanationPt: '{住|す}んでいる{町|まち}はどんなところ = como é a cidade em que mora? Tema: {私|わたし}の{町|まち} (minha cidade). (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 5
const L5_SCRIPTS: Record<string, ScriptItem[]> = {
  '05-03': [
    {
      label: '会話① (05-03)',
      setupJa: '{今|いま}{住|す}んでいる{町|まち}について、4{人|よにん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Quatro pessoas falam sobre a cidade em que moram agora.',
      lines: [
        { speaker: 'A', ja: 'この{町|まち}には{慣|な}れましたか？', pt: 'Você já se acostumou com esta cidade?' },
        { speaker: 'B', ja: 'はい。おかげさまで。', pt: 'Sim, graças a Deus.' },
        { speaker: 'A', ja: 'どうですか？　この{町|まち}は。', pt: 'E aí, como é esta cidade?' },
        { speaker: 'B', ja: 'そうですねえ……。とてもにぎやかで、{便利|べんり}です。', pt: 'Deixa ver… É bem movimentada e prática.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, é?' },
        { speaker: 'B', ja: 'でも、{緑|みどり}がちょっと{少|すく}ないですね。', pt: 'Mas tem pouco verde, né.' },
        { speaker: 'A', ja: 'ああ、{確|たし}かに。', pt: 'Ah, é mesmo.' },
      ],
    },
  ],
  '05-04': [
    {
      label: '会話② (05-04)',
      lines: [
        { speaker: 'A', ja: 'この{町|まち}には{慣|な}れた？', pt: 'Já se acostumou com esta cidade?' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: 'どう？　この{町|まち}は。', pt: 'E aí, como é?' },
        { speaker: 'B', ja: 'えっと、{人|ひと}がやさしくて、{住|す}みやすいです。それに、{景色|けしき}がきれいです。', pt: 'Hã, a gente é gentil e é confortável de morar. Além disso, a paisagem é bonita.' },
        { speaker: 'A', ja: 'それはよかった。', pt: 'Que bom.' },
      ],
    },
  ],
  '05-05': [
    {
      label: '会話③ (05-05)',
      lines: [
        { speaker: 'A', ja: 'どう？　この{町|まち}は。', pt: 'E aí, como é esta cidade?' },
        { speaker: 'B', ja: '{都会|とかい}ですね。{人|ひと}も{店|みせ}も{多|おお}くて、にぎやかですね。', pt: 'É bem urbana. Tem muita gente e muitas lojas, é movimentada.' },
        { speaker: 'A', ja: 'そう。', pt: 'É mesmo.' },
        { speaker: 'B', ja: 'うーん、でも、{人|ひと}がちょっと{冷|つめ}たいです。', pt: 'Hmm, mas a gente é meio fria.' },
        { speaker: 'A', ja: 'そ、そう。', pt: 'A-ah, é…' },
      ],
    },
  ],
  '05-06': [
    {
      label: '会話④ (05-06)',
      lines: [
        { speaker: 'A', ja: 'この{町|まち}はどうですか？', pt: 'Como é esta cidade?' },
        { speaker: 'B', ja: 'この{町|まち}ですか？　{緑|みどり}が{多|おお}くて、{静|しず}かでいいですね。', pt: 'Esta cidade? Tem muito verde e é tranquila, é boa.' },
        { speaker: 'A', ja: 'そうですね。', pt: 'Pois é.' },
        { speaker: 'B', ja: 'でも、バスが{少|すく}なくて、ちょっと{不便|ふべん}です。', pt: 'Mas tem poucos ônibus, é meio mal servida.' },
        { speaker: 'A', ja: 'あー、そうですよね。', pt: 'Ah, é verdade.' },
      ],
    },
  ],
  '05-10': [
    {
      label: '会話① (05-10)',
      setupJa: '{町|まち}のおすすめの{場所|ばしょ}について、4{人|よにん}の{人|ひと}が{職場|しょくば}の{人|ひと}に{質問|しつもん}しています。',
      setupPt: 'Quatro pessoas perguntam a um colega de trabalho sobre lugares recomendados da cidade.',
      lines: [
        { speaker: 'A', ja: '{休|やす}みの{日|ひ}にどこか{行|い}きたいんですが、いいところがありますか？', pt: 'Queria ir a algum lugar na folga; tem um lugar bom?' },
        { speaker: 'B', ja: 'そうね……。スポーツは{好|す}き？', pt: 'Hmm… Você gosta de esporte?' },
        { speaker: 'A', ja: 'はい。', pt: 'Gosto.' },
        { speaker: 'B', ja: 'じゃあ、「{南|みなみ}スポーツセンター」とかはどう？', pt: 'Então, que tal o “Minami Sports Center”?' },
        { speaker: 'A', ja: 'スポーツセンター？', pt: 'Centro esportivo?' },
        { speaker: 'B', ja: '{建物|たてもの}は{古|ふる}いけど、{安|やす}くていいわよ。', pt: 'O prédio é velho, mas é barato e bom.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '05-11': [
    {
      label: '会話② (05-11)',
      lines: [
        { speaker: 'A', ja: '{休|やす}みの{日|ひ}にどこか{行|い}きたいんですが、いいところがありますか？', pt: 'Queria ir a algum lugar na folga; tem um lugar bom?' },
        { speaker: 'B', ja: 'そうだなあ。この{町|まち}の{人|ひと}は「マリンモール」によく{行|い}くよ。', pt: 'Deixa ver… O pessoal daqui costuma ir ao “Marine Mall”.' },
        { speaker: 'A', ja: 'え、それは{何|なん}ですか？', pt: 'Ah, e o que é isso?' },
        { speaker: 'B', ja: 'ショッピングモール。いろんな{店|みせ}とか、レストランとか、スーパーとかがあるところ。おもしろいけど、{日曜日|にちようび}は{人|ひと}が{多|おお}いかな。', pt: 'Um shopping. Um lugar com várias lojas, restaurantes, supermercado. É legal, mas no domingo fica cheio.' },
        { speaker: 'A', ja: 'そうですか。{一度|いちど}{行|い}ってみます。', pt: 'Ah, sei. Vou lá um dia desses.' },
      ],
    },
  ],
  '05-12': [
    {
      label: '会話③ (05-12)',
      lines: [
        { speaker: 'A', ja: '{休|やす}みの{日|ひ}にどこか{行|い}きたいんですが、いいところがありますか？', pt: 'Queria ir a algum lugar na folga; tem um lugar bom?' },
        { speaker: 'B', ja: 'そうですね……。「たちばな{公園|こうえん}」はどうですか？', pt: 'Deixa ver… Que tal o “Parque Tachibana”?' },
        { speaker: 'A', ja: 'たちばな{公園|こうえん}ですか？', pt: 'Parque Tachibana?' },
        { speaker: 'B', ja: 'ここから{自転車|じてんしゃ}で20{分|ぷん}くらい。{場所|ばしょ}は{不便|ふべん}だけど、きれいですよ。', pt: 'Fica a uns 20 minutos de bicicleta daqui. É mal localizado, mas é bonito.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: 'ぜひ{行|い}ってみてください。', pt: 'Vá lá, não deixe de ir.' },
      ],
    },
  ],
  '05-13': [
    {
      label: '会話④ (05-13)',
      lines: [
        { speaker: 'A', ja: '{休|やす}みの{日|ひ}にどこか{行|い}きたいんですが、いいところがありますか？', pt: 'Queria ir a algum lugar na folga; tem um lugar bom?' },
        { speaker: 'B', ja: 'ぼくが{好|す}きなのは、「ゆうゆう{館|かん}」ですね。{広|ひろ}くておすすめです。{知|し}ってますか？', pt: 'O que eu gosto é o “Yuyu-kan”. É amplo e recomendo. Você conhece?' },
        { speaker: 'A', ja: 'いえ、それ、{何|なん}ですか？', pt: 'Não, o que é isso?' },
        { speaker: 'B', ja: 'お{風呂|ふろ}ですよ。', pt: 'É um banho público (ofurô).' },
        { speaker: 'A', ja: 'えっ、お{風呂|ふろ}？', pt: 'Hã, banho?' },
        { speaker: 'B', ja: '{食堂|しょくどう}や{休憩所|きゅうけいじょ}もあって、1{日|にち}ゆっくりできますよ。', pt: 'Tem refeitório e área de descanso também, dá para relaxar o dia todo.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: 'ちょっと{遠|とお}いけど、バスがあります。', pt: 'É meio longe, mas tem ônibus.' },
      ],
    },
  ],
}

const lesson5: Section = {
  id: 'lesson-5',
  level: 'elementary1',
  titleJa: '第5課 とてもにぎやかで便利です',
  titlePt: 'Lição 5 — É muito movimentado e prático',
  summaryPt: 'Minha cidade · descrever a cidade ligando adjetivos com 〜で／〜くて (にぎやかで便利です／緑が多くて静かです), contrastar duas avaliações com けど (場所は不便だけどきれいです), dizer o que é possível fazer num lugar com V-ることができます (花を見ることができます) e ler um mapa-guia da cidade.',
  studyNotes: [
    {
      title: 'Tópico: Minha cidade (私の町)',
      bodyPt:
        '## Can-do\n' +
        '- Falar de forma simples suas impressões sobre a cidade onde mora.\n' +
        '- Perguntar sobre lugares recomendados da cidade e entender a resposta.\n' +
        '- Ler o mapa-guia da cidade e captar informações sobre pontos e lojas.\n\n' +
        '💡 Pergunta de abertura: あなたの{住|す}んでいる{町|まち}は、どんなところですか？ (como é a cidade onde você mora?).',
    },
    {
      title: 'Ligar adjetivos: N で／ナA-で／イA-くて (➊)',
      bodyPt:
        'Para juntar duas frases (qualidades) numa só:\n\n' +
        '- **N / ナA → 〜で**: `この{町|まち}は、とてもにぎやかで、{便利|べんり}です` / `ここは{田舎|いなか}で、のんびりしています`.\n' +
        '- **イA → 〜くて** (い→くて): `{緑|みどり}が{多|おお}くて、{静|しず}かでいいですね` / `{人|ひと}がやさしくて、{住|す}みやすいです`.\n\n' +
        'Pode misturar: `バスが{少|すく}なくて、ちょっと{不便|ふべん}です`.',
    },
    {
      title: 'Contraste: N だ／ナA-だ／イA-い + けど (➋)',
      bodyPt:
        '**けど** liga duas frases que se **contrastam** (uma avaliação positiva, outra negativa):\n\n' +
        '- **N / ナA → 〜だけど**: `{場所|ばしょ}は{不便|ふべん}だけど、きれいですよ` / `{都会|とかい}だけど、{緑|みどり}が{多|おお}いですね`.\n' +
        '- **イA → 〜いけど**: `{建物|たてもの}は{古|ふる}いけど、{安|やす}くていい` / `ちょっと{遠|とお}いけど、バスがあります`.',
    },
    {
      title: 'O que dá para fazer: V-ることができます (➌)',
      bodyPt:
        '**できます (できる)** tem dois sentidos:\n\n' +
        '- ① **capacidade pessoal**: `{私|わたし}は{日本語|にほんご}ができます`.\n' +
        '- ② **possibilidade pela situação** (foco desta lição, p/ descrever cidade/pontos turísticos): `{冬|ふゆ}はスキーができます`.\n\n' +
        'Com **verbo**, usa-se **V (辞書形) + ことができます**: `{一年中|いちねんじゅう}、いろいろな{花|はな}を{見|み}ることができます`, `{丘|おか}の{上|うえ}から{海|うみ}と{町|まち}を{見渡|みわた}すことができます`.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Como é a cidade:** {便利|べんり}（な）／{不便|ふべん}（な） (prático/mal servido), にぎやか（な）／{静|しず}か（な） (movimentado/tranquilo), {緑|みどり}が{多|おお}い／{少|すく}ない (muito/pouco verde), {人|ひと}がやさしい・{親切|しんせつ}（な）／{人|ひと}が{冷|つめ}たい (gentil/frio), {田舎|いなか}／{都会|とかい} (interior/cidade grande), {景色|けしき}がきれい（な） (paisagem bonita).\n\n' +
        '**Lugares (Ativ. 2):** {安|やす}い, おもしろい, きれい（な）, {広|ひろ}い, {古|ふる}い, {遠|とお}い, {人|ひと}が{多|おお}い, どこか, ところ, {建物|たてもの}, おすすめ, ぜひ, {行|い}ってみる, {知|し}っている／{知|し}る, {休憩所|きゅうけいじょ}, スポーツセンター, ショッピングモール. **Mapa (Ativ. 3):** {美|うつく}しい, {砂浜|すなはま}, {有名|ゆうめい}（な）, {泳|およ}ぐ, {丘|おか}, {見渡|みわた}す, {夕日|ゆうひ}.\n\n' +
        '**Kanji da lição:** {町|まち}, {店|みせ}, {食堂|しょくどう}, {便利|べんり}, {不便|ふべん}, {静|しず}か, {有名|ゆうめい}, {多|おお}い, {少|すく}ない, {遠|とお}い.\n\n' +
        '📌 **TIPS:** **スポーツクラブ** (academias: ジム/フィットネス/センter; ~10.000 ienes/mês; há 24h e públicas baratas); **ショッピングモール** (passar o dia: lojas, comida, cinema); **{入浴施設|にゅうよくしせつ}** ({銭湯|せんとう}, {健康|けんこう}ランド, スーパー{銭湯|せんとう}).',
    },
  ],
  groups: [lesson5Group],
  audios: attachScripts(5, L5_SCRIPTS),
}

// ---- Lição 6: 郵便局はどう行ったらいいですか？ (tópico 私の町) -----------------
const lesson6Group: ExerciseGroup = {
  id: 'iro-e1-l6',
  title: '郵便局はどう行ったらいいですか？',
  subtitlePt: 'Minha cidade · pedir caminho (どう行ったらいいですか／〜に行きたいんですが…), dar instruções ligando ações com V-て、〜てください (まっすぐ行って、信号を左に曲がってください) e corrigir com N1じゃなくて、N2',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l6-1', number: 1, prompt: '「マルイチデパートに{行|い}きたいんですが……」 — para que serve 〜んですが… no fim da frase (Nota ➊)?', choices: [{ n: 1, text: 'explicar a própria situação e pedir ajuda (aqui: que não sabe o caminho)' }, { n: 2, text: 'dar uma ordem firme' }, { n: 3, text: 'recusar um pedido' }, { n: 4, text: 'contar o passado' }], answer: 1, translationPt: 'Queria ir ao Maruichi Depato, mas… (pode me ajudar?)', explanationPt: 'Pôr 〜んですが… no fim deixa a frase mais suave: você explica a situação (quer chegar a um lugar e não sabe como) e, assim, pede ajuda/o caminho. Fala-se baixando a entonação. (Nota ➊)' },
    { id: 'iro-e1-l6-2', number: 2, prompt: 'Quais são as formas de pedir um caminho ensinadas na lição (Nota ➊)?', choices: [{ n: 1, text: '{駅|えき}はどこですか？／{駅|えき}は、どう{行|い}ったらいいですか？／{駅|えき}に{行|い}きたいんですが…。' }, { n: 2, text: 'só {駅|えき}です。' }, { n: 3, text: '{駅|えき}を{行|い}きました。' }, { n: 4, text: '{駅|えき}が{好|す}きです。' }], answer: 1, explanationPt: 'Três jeitos: 「〜はどこですか？」 (onde fica?), 「〜は、どう{行|い}ったらいいですか？」 (como faço para ir?) e 「〜に{行|い}きたいんですが…」 (queria ir a…, mas…). (Nota ➊)' },
    { id: 'iro-e1-l6-3', number: 3, prompt: '「この{道|みち}をまっすぐ{行|い}って、2つ{目|め}の{信号|しんごう}を{左|ひだり}に{曲|ま}がってください」 — o que a forma V-て、〜 faz aqui (Nota ➋)?', choices: [{ n: 1, text: 'liga ações em ordem (vá reto E depois vire à esquerda); termina em 〜てください (instrução)' }, { n: 2, text: 'indica motivo' }, { n: 3, text: 'compara dois lugares' }, { n: 4, text: 'expressa desejo' }], answer: 1, translationPt: 'Siga reto por esta rua e, no segundo sinal, vire à esquerda.', explanationPt: 'A テ-forma (Lição 2) liga duas ou mais ações em sequência; em instruções de caminho fecha com 〜てください. (Nota ➋)' },
    { id: 'iro-e1-l6-4', number: 4, prompt: 'Dá para indicar caminho SEM 〜てください? (Nota ➋)', choices: [{ n: 1, text: 'Sim: 「あの{信号|しんごう}を{右|みぎ}に{曲|ま}がって、そのあと、ずっとまっすぐですよ」' }, { n: 2, text: 'Não, é obrigatório 〜てください' }, { n: 3, text: 'Só com から' }, { n: 4, text: 'Só por escrito' }], answer: 1, explanationPt: 'Pode-se descrever o trajeto sem 〜てください, como 「…{曲|ま}がって、そのあと、ずっとまっすぐですよ」 ou 「…{渡|わた}って、すぐ{右|みぎ}に{曲|ま}がったところにあります」. (Nota ➋)' },
    { id: 'iro-e1-l6-5', number: 5, prompt: 'Numa carona, qual é a dica para dar o caminho (Nota ➋)?', choices: [{ n: 1, text: 'primeiro dizer a localização geral e, ao se aproximar, usar um prédio/ponto de referência ({白|しろ}くて{大|おお}きな{家|いえ})' }, { n: 2, text: 'dar todas as ruas de uma vez no começo' }, { n: 3, text: 'não falar nada até chegar' }, { n: 4, text: 'só dizer o CEP' }], answer: 1, explanationPt: 'Quem recebe carona dá primeiro a área aproximada ({小島|こじま}{高校|こうこう}の{近|ちか}く) e, ao chegar perto, usa um marco visível ({白|しろ}くて{大|おお}きな{家|いえ}) para orientar. (Nota ➋)' },
    { id: 'iro-e1-l6-6', number: 6, prompt: '「1つ{目|め}じゃなくて、2つ{目|め}です」 (N1じゃなくて、N2) serve para (Nota ➌):', choices: [{ n: 1, text: 'corrigir: negar N1 e acertar com N2 (“não é o 1º, é o 2º”)' }, { n: 2, text: 'somar N1 e N2' }, { n: 3, text: 'dar dois exemplos iguais' }, { n: 4, text: 'pedir desculpa' }], answer: 1, translationPt: 'Não é o primeiro, é o segundo.', explanationPt: 'N1じゃなくて、N2 corrige o que o outro disse: nega N1 e dá o certo, N2. 〜じゃなくて é a forma de ligação de 〜じゃない（です）. (Nota ➌)' },
    { id: 'iro-e1-l6-7', number: 7, prompt: 'Outro exemplo de correção (Nota ➌): 「{市立|しりつ}{博物館|はくぶつかん}じゃなくて、{科学|かがく}{博物館|はくぶつかん}です」 significa:', choices: [{ n: 1, text: 'Não é o museu municipal, é o museu de ciências' }, { n: 2, text: 'É o museu municipal e o de ciências' }, { n: 3, text: 'O museu municipal fica perto do de ciências' }, { n: 4, text: 'Não há museu nenhum' }], answer: 1, explanationPt: '{市立|しりつ}{博物館|はくぶつかん} (museu municipal) じゃなくて、{科学|かがく}{博物館|はくぶつかん} (museu de ciências) — corrige a suposição do interlocutor. (Nota ➌)' },
    { id: 'iro-e1-l6-8', number: 8, prompt: 'Vocabulário 【{町|まち}にあるもの】 (coisas da cidade): qual conjunto está certo?', choices: [{ n: 1, text: '{信号|しんごう} (semáforo) ／ {横断歩道|おうだんほどう} (faixa de pedestres) ／ {角|かど} (esquina) ／ {交差点|こうさてん} (cruzamento)' }, { n: 2, text: '{信号|しんごう} (ponte) ／ {横断歩道|おうだんほどう} (rua) ／ {角|かど} (sinal) ／ {交差点|こうさてん} (esquina)' }, { n: 3, text: '{信号|しんごう} (loja) ／ {横断歩道|おうだんほどう} (banco) ／ {角|かど} (parque) ／ {交差点|こうさてん} (rio)' }, { n: 4, text: 'todos significam “rua”' }], answer: 1, explanationPt: '{信号|しんごう} (semáforo), {横断歩道|おうだんほどう} (faixa de pedestres), {角|かど} (esquina), {交差点|こうさてん} (cruzamento). Também {道|みち} (rua) e {橋|はし} (ponte). (Atividade 1 · ことばの準備)' },
    { id: 'iro-e1-l6-9', number: 9, prompt: 'Vocabulário 【{道案内|みちあんない}】 (dar direções): 「まっすぐ{行|い}く／{左|ひだり}に{曲|ま}がる／{右|みぎ}に{曲|ま}がる」 significam:', choices: [{ n: 1, text: 'seguir reto ／ virar à esquerda ／ virar à direita' }, { n: 2, text: 'parar ／ voltar ／ atravessar' }, { n: 3, text: 'subir ／ descer ／ entrar' }, { n: 4, text: 'correr ／ andar ／ esperar' }], answer: 1, explanationPt: 'まっすぐ{行|い}く (ir reto), {左|ひだり}に{曲|ま}がる (virar à esquerda), {右|みぎ}に{曲|ま}がる (virar à direita). (Atividade 1 · 道案内)' },
    { id: 'iro-e1-l6-10', number: 10, prompt: 'Mais 【{道案内|みちあんない}】: 「{道|みち}を{渡|わた}る／{橋|はし}を{渡|わた}る／1つ{目|め}の{角|かど}／2つ{目|め}の{角|かど}」 significam:', choices: [{ n: 1, text: 'atravessar a rua ／ atravessar a ponte ／ a 1ª esquina ／ a 2ª esquina' }, { n: 2, text: 'subir a rua ／ descer a ponte ／ a 1ª loja ／ a 2ª loja' }, { n: 3, text: 'entrar na rua ／ sair da ponte ／ o 1º andar ／ o 2º andar' }, { n: 4, text: 'limpar a rua ／ pintar a ponte ／ a 1ª casa ／ a 2ª casa' }], answer: 1, explanationPt: '{道|みち}を{渡|わた}る / {橋|はし}を{渡|わた}る (atravessar a rua/ponte), 1つ{目|め}・2つ{目|め}・3つ{目|め}の{角|かど} (a 1ª/2ª/3ª esquina). 〜{目|め} = contagem ordinal. (Atividade 1 · 道案内)' },
    { id: 'iro-e1-l6-11', number: 11, prompt: 'Vocabulário 【{建物|たてもの}・{場所|ばしょ}】: qual conjunto está certo?', choices: [{ n: 1, text: '{銀行|ぎんこう} (banco) ／ コンビニ (loja de conveniência) ／ {神社|じんじゃ} (santuário xintoísta) ／ お{寺|てら} (templo budista)' }, { n: 2, text: '{銀行|ぎんこう} (hospital) ／ コンビニ (escola) ／ {神社|じんじゃ} (banco) ／ お{寺|てら} (parque)' }, { n: 3, text: '{銀行|ぎんこう} (correio) ／ コンビニ (delegacia) ／ {神社|じんじゃ} (ponte) ／ お{寺|てら} (rua)' }, { n: 4, text: 'todos significam “prédio”' }], answer: 1, explanationPt: '{銀行|ぎんこう} (banco), コンビニ (conveniência), {神社|じんじゃ} (santuário xintoísta), お{寺|てら} (templo budista). (Atividade 2 · ことばの準備)' },
    { id: 'iro-e1-l6-12', number: 12, prompt: 'Mais 【{建物|たてもの}・{場所|ばしょ}】: 「{学校|がっこう}／{駐車場|ちゅうしゃじょう}／{公園|こうえん}／{郵便局|ゆうびんきょく}／{交番|こうばん}／{病院|びょういん}」 significam:', choices: [{ n: 1, text: 'escola ／ estacionamento ／ parque ／ correio ／ posto policial ／ hospital' }, { n: 2, text: 'banco ／ garagem ／ praça ／ banco ／ bombeiros ／ farmácia' }, { n: 3, text: 'loja ／ ponte ／ rio ／ templo ／ prefeitura ／ clínica' }, { n: 4, text: 'igreja ／ rua ／ jardim ／ banco ／ escola ／ mercado' }], answer: 1, explanationPt: '{学校|がっこう} (escola), {駐車場|ちゅうしゃじょう} (estacionamento), {公園|こうえん} (parque), {郵便局|ゆうびんきょく} (correio), {交番|こうばん} (posto policial / koban), {病院|びょういん} (hospital). (Atividade 2)' },
    { id: 'iro-e1-l6-13', number: 13, prompt: 'Prédios por cor: 「{黒|くろ}いビル／{白|しろ}いビル／{青|あお}いビル」 significam:', choices: [{ n: 1, text: 'prédio preto ／ prédio branco ／ prédio azul' }, { n: 2, text: 'prédio alto ／ prédio baixo ／ prédio largo' }, { n: 3, text: 'prédio novo ／ prédio velho ／ prédio caro' }, { n: 4, text: 'prédio perto ／ prédio longe ／ prédio grande' }], answer: 1, explanationPt: '{黒|くろ}いビル (preto), {白|しろ}いビル (branco), {青|あお}いビル (azul). Cores servem de ponto de referência ao dar direções. (Atividade 2)' },
    { id: 'iro-e1-l6-14', number: 14, prompt: 'Palavras de apoio (Atividade 1 · vocab): 「ずっと／{市立|しりつ}／すぐ／{曲|ま}がったところ」 significam:', choices: [{ n: 1, text: 'sem virar/sempre reto ／ municipal ／ logo/já ／ no ponto onde virou' }, { n: 2, text: 'nunca ／ particular ／ devagar ／ antes de virar' }, { n: 3, text: 'às vezes ／ nacional ／ longe ／ depois da ponte' }, { n: 4, text: 'rápido ／ estadual ／ perto ／ na esquina seguinte' }], answer: 1, explanationPt: 'ずっと (em frente sem virar), {市立|しりつ} (municipal), すぐ (logo/imediatamente), {曲|ま}がったところ (no lugar onde se vira). (Atividade 1 · 確認)' },
    { id: 'iro-e1-l6-15', number: 15, prompt: 'Palavras do diálogo por telefone (06-12): 「そちら／{北口|きたぐち}／〜と〜の{間|あいだ}／そうすると／{見|み}える／お{待|ま}ちしております」 significam:', choices: [{ n: 1, text: 'aí (onde você está) ／ saída norte ／ entre ~ e ~ ／ aí então/feito isso ／ ver/ficar visível ／ estaremos esperando (formal)' }, { n: 2, text: 'lá longe ／ saída sul ／ ao lado de ／ por isso ／ ouvir ／ até logo' }, { n: 3, text: 'aqui ／ entrada ／ em frente a ／ no entanto ／ chegar ／ obrigado' }, { n: 4, text: 'cá ／ portão ／ atrás de ／ assim ／ entrar ／ desculpe' }], answer: 1, explanationPt: 'そちら (aí, do lado do interlocutor), {北口|きたぐち} (saída norte), 〜と〜の{間|あいだ} (entre ~ e ~), そうすると (feito isso, aí), {見|み}える (avistar-se), お{待|ま}ちしております (estaremos esperando — keigo). (Atividade 2 · 確認)' },
    { id: 'iro-e1-l6-16', number: 16, prompt: 'Palavras do diálogo da carona (06-13): 「どの{辺|へん}？／{高校|こうこう}／{送|おく}る／{大|おお}きな／{入|はい}る／ここでいいです」 significam:', choices: [{ n: 1, text: 'por que região? ／ ensino médio ／ levar (de carro) ／ grande ／ virar/entrar ／ aqui está bom (pode parar)' }, { n: 2, text: 'quando? ／ faculdade ／ buscar ／ pequeno ／ sair ／ aqui não pode' }, { n: 3, text: 'quanto? ／ escola ／ esperar ／ alto ／ subir ／ vamos lá' }, { n: 4, text: 'quem? ／ creche ／ mandar carta ／ largo ／ descer ／ está longe' }], answer: 1, explanationPt: 'どの{辺|へん}？ (por que região fica?), {高校|こうこう} (ensino médio), {送|おく}る (levar alguém/dar carona até em casa), {大|おお}きな (grande), {入|はい}る (entrar/virar para dentro), ここでいいです (pode parar aqui). (Atividade 3)' },
    { id: 'iro-e1-l6-17', number: 17, prompt: 'Os kanji 「{道|みち}／{右|みぎ}／{左|ひだり}／{公園|こうえん}」 lêem-se:', choices: [{ n: 1, text: 'みち (rua) ／ みぎ (direita) ／ ひだり (esquerda) ／ こうえん (parque)' }, { n: 2, text: 'どう ／ みぎ ／ さ ／ こうえん' }, { n: 3, text: 'みち ／ ゆう ／ ひだり ／ おおぞの' }, { n: 4, text: 'どう ／ う ／ ひだり ／ くうえん' }], answer: 1, explanationPt: '{道|みち} (rua), {右|みぎ} (direita), {左|ひだり} (esquerda), {公園|こうえん} (parque). (漢字のことば)' },
    { id: 'iro-e1-l6-18', number: 18, prompt: 'Os kanji 「{銀行|ぎんこう}／{近|ちか}く／お{寺|てら}／{車|くるま}」 lêem-se:', choices: [{ n: 1, text: 'ぎんこう (banco) ／ ちかく (perto) ／ おてら (templo) ／ くるま (carro)' }, { n: 2, text: 'ぎんこう ／ きんく ／ おじ ／ しゃ' }, { n: 3, text: 'どうこう ／ ちかく ／ おてら ／ くるま' }, { n: 4, text: 'ぎんこう ／ ちかく ／ おでら ／ くろ' }], answer: 1, explanationPt: '{銀行|ぎんこう} (banco), {近|ちか}く (perto), お{寺|てら} (templo), {車|くるま} (carro). (漢字のことば)' },
    { id: 'iro-e1-l6-19', number: 19, prompt: 'Os kanji 「{神社|じんじゃ}／{送|おく}る」 lêem-se:', choices: [{ n: 1, text: 'じんじゃ (santuário xintoísta) ／ おくる (enviar/levar)' }, { n: 2, text: 'しんしゃ ／ そうる' }, { n: 3, text: 'かみしゃ ／ おくる' }, { n: 4, text: 'じんじゃ ／ はこぶ' }], answer: 1, explanationPt: '{神社|じんじゃ} (santuário xintoísta), {送|おく}る (enviar; levar/dar carona). Kanji da lição: {道|みち}・{右|みぎ}・{左|ひだり}・{公園|こうえん}・{銀行|ぎんこう}・{近|ちか}く・お{寺|てら}・{車|くるま}・{神社|じんじゃ}・{送|おく}る. (漢字)' },
    { id: 'iro-e1-l6-20', number: 20, prompt: '📌 TIPS — sobre os {信号|しんごう} (semáforos) no Japão:', choices: [{ n: 1, text: 'a luz verde dos carros é chamada de “{青|あお}” (azul); há semáforos só de pedestres, alguns com botão (押しボタン式) que só fica verde se apertado' }, { n: 2, text: 'só existem luzes vermelha e amarela' }, { n: 3, text: 'pedestres nunca têm semáforo próprio' }, { n: 4, text: 'todos os semáforos são automáticos e iguais' }], answer: 1, explanationPt: 'No Japão a luz verde do carro é chamada de {青|あお} (azul). Semáforos de pedestres têm verde e vermelho (o verde piscando = como o amarelo do carro); alguns são de botão (押しボタン式), permanente ou só em certos horários. (TIPS)' },
    { id: 'iro-e1-l6-21', number: 21, prompt: '📌 TIPS — qual a diferença principal entre お{寺|てら} e {神社|じんじゃ}?', choices: [{ n: 1, text: 'お{寺|てら} é budista; {神社|じんじゃ} é xintoísta (神道)' }, { n: 2, text: 'os dois são cristãos' }, { n: 3, text: 'お{寺|てら} é xintoísta e {神社|じんじゃ} é budista' }, { n: 4, text: 'não há nenhuma diferença' }], answer: 1, explanationPt: 'お{寺|てら} = templo budista (仏教); {神社|じんじゃ} = santuário xintoísta (神道). Ambos têm arquitetura tradicional de madeira e atraem turistas; alguns são Patrimônio Mundial ({法隆寺}, {厳島神社}). (TIPS)' },
    { id: 'iro-e1-l6-22', number: 22, prompt: '📌 TIPS — o que normalmente se vê numa お{寺|てら} (templo)?', choices: [{ n: 1, text: 'estátuas de Buda ({仏像}), túmulos (お{墓|はか}), monges (お{坊|ぼう}さん), um sino ({鐘}), cheiro de incenso (お{線香|せんこう})' }, { n: 2, text: 'um {鳥居|とりい} (portal) e sacerdotes xintoístas' }, { n: 3, text: 'caixas eletrônicos e lojas' }, { n: 4, text: 'semáforos e faixas de pedestres' }], answer: 1, explanationPt: 'No templo: {仏像} (estátuas de Buda), お{墓|はか} (túmulos), お{坊|ぼう}さん (monges), {鐘} (sino), お{線香|せんこう}のにおい (cheiro de incenso). (TIPS)' },
    { id: 'iro-e1-l6-23', number: 23, prompt: '📌 TIPS — o que normalmente se vê num {神社|じんじゃ} (santuário)?', choices: [{ n: 1, text: 'um {鳥居|とりい} (portal), {神主|かんぬし}さん／{巫女|みこ}さん (sacerdote/sacerdotisa), pessoas batendo palmas (パンパン) ao rezar (お{参|まい}り)' }, { n: 2, text: 'estátuas de Buda e monges' }, { n: 3, text: 'túmulos e cheiro de incenso' }, { n: 4, text: 'caixas eletrônicos e estacionamento' }], answer: 1, explanationPt: 'No santuário: {鳥居|とりい} (portal), {神主|かんぬし}さん／{巫女|みこ}さん (sacerdote/miko), e quem faz お{参|まい}り bate palmas (パンパン). (TIPS)' },
    { id: 'iro-e1-l6-24', number: 24, prompt: 'Diálogo 06-05: como B explica onde fica o ponto de ônibus ({バス停|てい})?', context: 'A：すみません。バス{停|てい}はどこですか？ B：{次|つぎ}の{角|かど}を{右|みぎ}に{曲|ま}がってください。 A：{次|つぎ}の{角|かど}を{右|みぎ}ですね。 B：はい。', choices: [{ n: 1, text: 'Vire à direita na próxima esquina' }, { n: 2, text: 'Siga reto até a ponte' }, { n: 3, text: 'Vire à esquerda no segundo sinal' }, { n: 4, text: 'Atravesse a rua e volte' }], answer: 1, explanationPt: '{次|つぎ}の{角|かど}を{右|みぎ}に{曲|ま}がってください (V-てください, Nota ➋). A confirma: {次|つぎ}の{角|かど}を{右|みぎ}ですね. (Atividade 1 · 聴解スクリプト)' },
    { id: 'iro-e1-l6-25', number: 25, prompt: 'Diálogo 06-06: B explica o caminho até o {郵便局|ゆうびんきょく} e corrige A. O que acontece?', context: 'B：この{道|みち}をまっすぐ{行|い}って、2つ{目|め}の{信号|しんごう}を{左|ひだり}に{曲|ま}がってください。 A：1つ{目|め}の{信号|しんごう}を{左|ひだり}ですね。 B：いえ、1つ{目|め}じゃなくて、2つ{目|め}です。', choices: [{ n: 1, text: 'Reto e virar à esquerda no SEGUNDO sinal — B corrige: não é o 1º, é o 2º' }, { n: 2, text: 'Virar no primeiro sinal mesmo' }, { n: 3, text: 'Atravessar a ponte e virar à direita' }, { n: 4, text: 'Seguir sempre reto sem virar' }], answer: 1, explanationPt: 'まっすぐ{行|い}って、2つ{目|め}の{信号|しんごう}を{左|ひだり}に (V-て, Nota ➋); correção 1つ{目|め}じゃなくて、2つ{目|め}です (Nota ➌). (Atividade 1)' },
    { id: 'iro-e1-l6-26', number: 26, prompt: 'Diálogo 06-07: como chegar à マルイチデパート?', context: 'A：すみません。マルイチデパートに{行|い}きたいんですが……。 B：ああ、あの{信号|しんごう}を{右|みぎ}に{曲|ま}がって、そのあと、ずっとまっすぐですよ。', choices: [{ n: 1, text: 'Virar à direita naquele sinal e depois seguir sempre reto' }, { n: 2, text: 'Virar à esquerda na primeira esquina' }, { n: 3, text: 'Atravessar a ponte e virar à direita' }, { n: 4, text: 'Voltar e pegar o ônibus' }], answer: 1, explanationPt: 'A pede com 〜に{行|い}きたいんですが… (Nota ➊); B responde sem 〜てください: {曲|ま}がって、そのあと、ずっとまっすぐ (Nota ➋). (Atividade 1)' },
    { id: 'iro-e1-l6-27', number: 27, prompt: 'Diálogo 06-08: A procura o museu; B confirma qual e dá o caminho. O que acontece?', context: 'B：{博物館|はくぶつかん}？　{市立|しりつ}{博物館|はくぶつかん}ですか？ A：いえ、{市立|しりつ}{博物館|はくぶつかん}じゃなくて{科学|かがく}{博物館|はくぶつかん}です。 B：…ここをまっすぐ{行|い}って、{橋|はし}を{渡|わた}って、すぐ{右|みぎ}に{曲|ま}がったところにあります。', choices: [{ n: 1, text: 'É o museu de CIÊNCIAS (não o municipal): reto, atravessar a ponte e logo virar à direita' }, { n: 2, text: 'É o museu municipal, ao lado da estação' }, { n: 3, text: 'Não existe esse museu na cidade' }, { n: 4, text: 'Virar à esquerda e seguir reto' }], answer: 1, explanationPt: 'Correção {市立|しりつ}…じゃなくて{科学|かがく}{博物館|はくぶつかん} (Nota ➌); caminho まっすぐ{行|い}って、{橋|はし}を{渡|わた}って、…{曲|ま}がったところにあります (V-て + sem てください, Nota ➋). (Atividade 1)' },
    { id: 'iro-e1-l6-28', number: 28, prompt: 'Diálogo 06-12 (por telefone): a partir da {北口|きたぐち} da estação, qual o início do caminho?', context: 'A：{駅|えき}の{前|まえ}の{道|みち}を{渡|わた}って、{銀行|ぎんこう}とコンビニの{間|あいだ}の{道|みち}をまっすぐ{行|い}ってください。それから、1つ{目|め}の{信号|しんごう}を{右|みぎ}に{曲|ま}がってください。', choices: [{ n: 1, text: 'Atravessar a rua em frente à estação e seguir reto pela rua entre o banco e a conveniência; depois virar à direita no 1º sinal' }, { n: 2, text: 'Pegar o ônibus na saída sul' }, { n: 3, text: 'Virar à esquerda logo na saída' }, { n: 4, text: 'Atravessar a ponte e parar' }], answer: 1, explanationPt: '{道|みち}を{渡|わた}って、{銀行|ぎんこう}とコンビニの{間|あいだ}の{道|みち}をまっすぐ{行|い}って (V-て + 〜と〜の{間|あいだ}); depois 1つ{目|め}の{信号|しんごう}を{右|みぎ}に. (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l6-29', number: 29, prompt: 'Diálogo 06-12: como A indica o destino final (a loja アジア食材バグース)?', context: 'A：その{道|みち}をまっすぐ{行|い}って、2つ{目|め}の{角|かど}を{左|ひだり}に{曲|ま}がってください。…そうすると、{黒|くろ}いビルが{見|み}えます。その{隣|となり}です。', choices: [{ n: 1, text: 'Reto e virar à esquerda na 2ª esquina; aí aparece um prédio preto — é ao lado dele' }, { n: 2, text: 'É dentro da própria estação' }, { n: 3, text: 'É em frente a um prédio branco' }, { n: 4, text: 'É ao lado do banco' }], answer: 1, explanationPt: '2つ{目|め}の{角|かど}を{左|ひだり}に; そうすると、{黒|くろ}いビルが{見|み}えます (そうすると = aí então; {見|み}える); その{隣|となり}です. Fecha com お{待|ま}ちしております. (Atividade 2)' },
    { id: 'iro-e1-l6-30', number: 30, prompt: 'Diálogo 06-13 (carona): onde {ロー} mora e como ele dá a referência?', context: 'ロー：{小島町|こじまちょう}です。{小島|こじま}{高校|こうこう}の{近|ちか}くです。…ロー：この{先|さき}に、{白|しろ}くて{大|おお}きな{家|いえ}があります。その{角|かど}を{右|みぎ}に{入|はい}ってください。', choices: [{ n: 1, text: 'Em Kojima-cho, perto da Escola Kojima; usa como referência uma casa branca e grande e manda virar à direita naquela esquina' }, { n: 2, text: 'No centro, ao lado da estação' }, { n: 3, text: 'Perto do museu de ciências' }, { n: 4, text: 'Em frente ao correio' }], answer: 1, explanationPt: 'Primeiro a área geral ({小島|こじま}{高校|こうこう}の{近|ちか}く) e, ao chegar perto, o marco visível {白|しろ}くて{大|おお}きな{家|いえ} (イA-くて + ナA/grande); その{角|かど}を{右|みぎ}に{入|はい}って (Nota ➋). (Atividade 3 · 聴解スクリプト)' },
    { id: 'iro-e1-l6-31', number: 31, prompt: 'Diálogo 06-13: ao chegar, o que {ロー} diz para o carro parar, e como se despedem?', context: 'ロー：あ、ここでいいです。 {斉藤|さいとう}：え、ここ？ ロー：はい。ここです。…ロー：{今日|きょう}は、ありがとうございました。 {斉藤|さいとう}：じゃ、お{疲|つか}れさま。お{休|やす}み。', choices: [{ n: 1, text: '“ここでいいです” (pode parar aqui); depois agradece e se despedem com お{疲|つか}れさま／お{休|やす}みなさい' }, { n: 2, text: 'Pede para continuar até a próxima esquina' }, { n: 3, text: 'Reclama que erraram o caminho' }, { n: 4, text: 'Pede para voltar à estação' }], answer: 1, explanationPt: 'ここでいいです = “aqui está bom (pode parar)”. Despedida entre colegas: お{疲|つか}れさま / お{休|やす}み(なさい) / {失礼|しつれい}します. (Atividade 3)' },
    { id: 'iro-e1-l6-32', number: 32, prompt: 'Pergunta de abertura da lição: 「ほかの{人|ひと}に{道|みち}を{聞|き}いたり、{聞|き}かれたりしたことがありますか？」 quer dizer:', choices: [{ n: 1, text: 'Você já perguntou o caminho a alguém, ou já foi perguntado?' }, { n: 2, text: 'Você sabe dirigir na sua cidade?' }, { n: 3, text: 'Você mora perto de um templo?' }, { n: 4, text: 'Você gosta de viajar de carro?' }], answer: 1, translationPt: 'Você já pediu informação de caminho a alguém, ou alguém já te pediu?', explanationPt: '{聞|き}いたり、{聞|き}かれたりした (〜たり〜たり, ativa e passiva de {聞|き}く) ことがありますか = já teve a experiência de perguntar/ser perguntado o caminho. Tema: {私|わたし}の{町|まち}. (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 6
const L6_SCRIPTS: Record<string, ScriptItem[]> = {
  '06-05': [
    {
      label: '会話① (06-05) — バス停',
      setupJa: '{目的地|もくてきち}への{行|い}き{方|かた}がわかりません。{人|ひと}に{道|みち}を{聞|き}いています。',
      setupPt: 'A pessoa não sabe como chegar ao destino e pergunta o caminho a alguém.',
      lines: [
        { speaker: 'A', ja: 'すみません。バス{停|てい}はどこですか？', pt: 'Com licença. Onde fica o ponto de ônibus?' },
        { speaker: 'B', ja: '{次|つぎ}の{角|かど}を{右|みぎ}に{曲|ま}がってください。', pt: 'Vire à direita na próxima esquina.' },
        { speaker: 'A', ja: '{次|つぎ}の{角|かど}を{右|みぎ}ですね。', pt: 'Na próxima esquina, à direita, né.' },
        { speaker: 'B', ja: 'はい。', pt: 'Isso.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Obrigado(a).' },
      ],
    },
  ],
  '06-06': [
    {
      label: '会話② (06-06) — 郵便局',
      lines: [
        { speaker: 'A', ja: 'すみません。{郵便局|ゆうびんきょく}はどう{行|い}ったらいいですか？', pt: 'Com licença. Como faço para ir ao correio?' },
        { speaker: 'B', ja: 'この{道|みち}をまっすぐ{行|い}って、2つ{目|め}の{信号|しんごう}を{左|ひだり}に{曲|ま}がってください。', pt: 'Siga reto por esta rua e, no segundo sinal, vire à esquerda.' },
        { speaker: 'A', ja: '1つ{目|め}の{信号|しんごう}を{左|ひだり}ですね。', pt: 'No primeiro sinal, à esquerda, né.' },
        { speaker: 'B', ja: 'いえ、1つ{目|め}じゃなくて、2つ{目|め}です。', pt: 'Não, não é o primeiro, é o segundo.' },
        { speaker: 'A', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '06-07': [
    {
      label: '会話③ (06-07) — マルイチデパート',
      lines: [
        { speaker: 'A', ja: 'すみません。マルイチデパートに{行|い}きたいんですが……。', pt: 'Com licença. Eu queria ir ao Maruichi Depato, mas…' },
        { speaker: 'B', ja: 'ああ、あの{信号|しんごう}を{右|みぎ}に{曲|ま}がって、そのあと、ずっとまっすぐですよ。', pt: 'Ah, vire à direita naquele sinal e, depois, é sempre reto.' },
        { speaker: 'A', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Obrigado(a).' },
      ],
    },
  ],
  '06-08': [
    {
      label: '会話④ (06-08) — 科学博物館',
      lines: [
        { speaker: 'A', ja: 'すみません。{博物館|はくぶつかん}はどこですか？', pt: 'Com licença. Onde fica o museu?' },
        { speaker: 'B', ja: '{博物館|はくぶつかん}？　{市立|しりつ}{博物館|はくぶつかん}ですか？', pt: 'Museu? O museu municipal?' },
        { speaker: 'A', ja: 'いえ、{市立|しりつ}{博物館|はくぶつかん}じゃなくて{科学|かがく}{博物館|はくぶつかん}です。', pt: 'Não, não é o municipal, é o museu de ciências.' },
        { speaker: 'B', ja: 'ああ、{科学|かがく}{博物館|はくぶつかん}は、ここをまっすぐ{行|い}って、{橋|はし}を{渡|わた}って、すぐ{右|みぎ}に{曲|ま}がったところにあります。', pt: 'Ah, o museu de ciências fica indo reto por aqui, atravessando a ponte e logo virando à direita.' },
        { speaker: 'A', ja: 'えっと、{橋|はし}を{渡|わた}って、{右|みぎ}ですね。', pt: 'Hã, atravessar a ponte e à direita, né.' },
        { speaker: 'B', ja: 'はい、そうです。', pt: 'Isso, exato.' },
        { speaker: 'A', ja: 'ありがとうございます。', pt: 'Obrigado(a).' },
      ],
    },
  ],
  '06-12': [
    {
      label: '会話 (06-12) — 電話で道をたずねる',
      setupJa: '{今|いま}、{駅|えき}にいます。{店|みせ}に{電話|でんわ}をして、その{店|みせ}への{行|い}き{方|かた}を{聞|き}いています。',
      setupPt: 'A pessoa está na estação e liga para a loja perguntando como chegar até ela.',
      lines: [
        { speaker: 'A（店）', ja: 'はい。アジア{食材|しょくざい}バグースです。', pt: 'Alô. Aqui é a (loja de) ingredientes asiáticos Bagus.' },
        { speaker: 'B（客）', ja: 'すみません。そちらに{行|い}きたいんですが、どう{行|い}ったらいいですか？{今|いま}、さくら{駅|えき}の{北口|きたぐち}にいます。', pt: 'Com licença. Eu queria ir até aí, como faço para chegar? Estou agora na saída norte da estação Sakura.' },
        { speaker: 'A（店）', ja: '{駅|えき}の{北口|きたぐち}ですね。{駅|えき}の{前|まえ}の{道|みち}を{渡|わた}って、{銀行|ぎんこう}とコンビニの{間|あいだ}の{道|みち}をまっすぐ{行|い}ってください。', pt: 'Saída norte da estação, né. Atravesse a rua em frente à estação e siga reto pela rua entre o banco e a loja de conveniência.' },
        { speaker: 'B（客）', ja: 'はい。', pt: 'Certo.' },
        { speaker: 'A（店）', ja: 'それから、1つ{目|め}の{信号|しんごう}を{右|みぎ}に{曲|ま}がってください。', pt: 'Depois, vire à direita no primeiro sinal.' },
        { speaker: 'B（客）', ja: '{右|みぎ}ですね。', pt: 'À direita, né.' },
        { speaker: 'A（店）', ja: 'はい。その{道|みち}をまっすぐ{行|い}って、2つ{目|め}の{角|かど}を{左|ひだり}に{曲|ま}がってください。', pt: 'Isso. Siga reto por essa rua e vire à esquerda na segunda esquina.' },
        { speaker: 'B（客）', ja: 'はい。', pt: 'Certo.' },
        { speaker: 'A（店）', ja: 'そうすると、{黒|くろ}いビルが{見|み}えます。その{隣|となり}です。', pt: 'Aí então você vê um prédio preto. É ao lado dele.' },
        { speaker: 'B（客）', ja: '{黒|くろ}いビルの{隣|となり}ですね。わかりました。ありがとうございます。', pt: 'Ao lado do prédio preto, né. Entendi. Obrigado(a).' },
        { speaker: 'A（店）', ja: 'お{待|ま}ちしております。', pt: 'Estaremos esperando (você).' },
      ],
    },
  ],
  '06-13': [
    {
      label: '会話 (06-13) — 車で送ってもらう（斉藤・ロー）',
      setupJa: '{斉藤|さいとう}さんとローさんは、{会社|かいしゃ}の{先輩|せんぱい}と{後輩|こうはい}です。{仕事|しごと}のあと、{斉藤|さいとう}さんがローさんを{車|くるま}で{送|おく}ってくれることになりました。',
      setupPt: 'Saito e Loh são, respectivamente, veterano e calouro na empresa. Depois do trabalho, Saito vai levar Loh de carro até em casa.',
      lines: [
        { speaker: '斉藤', ja: 'ローさん、{今|いま}、{帰|かえ}る？', pt: 'Loh, você está indo embora agora?' },
        { speaker: 'ロー', ja: 'はい。', pt: 'Sim.' },
        { speaker: '斉藤', ja: '{家|いえ}はどの{辺|へん}？', pt: 'Sua casa fica por que região?' },
        { speaker: 'ロー', ja: '{小島町|こじまちょう}です。{小島|こじま}{高校|こうこう}の{近|ちか}くです。', pt: 'É em Kojima-cho. Perto da Escola (de Ensino Médio) Kojima.' },
        { speaker: '斉藤', ja: 'じゃあ、{車|くるま}で{家|いえ}まで{送|おく}るよ。', pt: 'Então eu te levo de carro até em casa.' },
        { speaker: 'ロー', ja: 'あー、すみません。ありがとうございます。', pt: 'Ah, desculpe (o incômodo). Muito obrigado.' },
        { speaker: '（ト書き）', ja: '（{目的地|もくてきち}に{近|ちか}づく）', pt: '(Aproximando-se do destino.)' },
        { speaker: '斉藤', ja: 'もうすぐ{小島|こじま}{高校|こうこう}だけど……。', pt: 'Já estamos chegando na Escola Kojima…' },
        { speaker: 'ロー', ja: 'あ、{次|つぎ}の{信号|しんごう}を{左|ひだり}に{曲|ま}がってください。', pt: 'Ah, vire à esquerda no próximo sinal.' },
        { speaker: '斉藤', ja: '{信号|しんごう}を{左|ひだり}ね。', pt: 'No sinal, à esquerda, né.' },
        { speaker: '（ト書き）', ja: '（{曲|ま}がる）', pt: '(Vira.)' },
        { speaker: 'ロー', ja: 'この{先|さき}に、{白|しろ}くて{大|おお}きな{家|いえ}があります。その{角|かど}を{右|みぎ}に{入|はい}ってください。', pt: 'Mais adiante tem uma casa branca e grande. Vire à direita naquela esquina.' },
        { speaker: '斉藤', ja: 'OK。', pt: 'OK.' },
        { speaker: '（ト書き）', ja: '（{曲|ま}がる）', pt: '(Vira.)' },
        { speaker: 'ロー', ja: 'あ、ここでいいです。', pt: 'Ah, pode parar aqui.' },
        { speaker: '斉藤', ja: 'え、ここ？', pt: 'Ué, aqui?' },
        { speaker: 'ロー', ja: 'はい。ここです。', pt: 'Sim. É aqui.' },
        { speaker: '（ト書き）', ja: '（{止|と}まる）', pt: '(Para o carro.)' },
        { speaker: 'ロー', ja: '{今日|きょう}は、ありがとうございました。', pt: 'Muito obrigado por hoje.' },
        { speaker: '斉藤', ja: 'じゃ、お{疲|つか}れさま。お{休|やす}み。', pt: 'Então, bom descanso. Boa noite.' },
        { speaker: 'ロー', ja: 'お{休|やす}みなさい。{失礼|しつれい}します。', pt: 'Boa noite. Com licença (até logo).' },
      ],
    },
  ],
}

const lesson6: Section = {
  id: 'lesson-6',
  level: 'elementary1',
  titleJa: '第6課 郵便局はどう行ったらいいですか？',
  titlePt: 'Lição 6 — Como faço para ir ao correio?',
  summaryPt: 'Minha cidade · pedir caminho ({郵便局|ゆうびんきょく}はどう{行|い}ったらいいですか／マルイチデパートに{行|い}きたいんですが…), dar instruções ligando ações com V-て、〜てください (まっすぐ{行|い}って、{信号|しんごう}を{左|ひだり}に{曲|ま}がってください), corrigir com N1じゃなくて、N2 (1つ{目|め}じゃなくて、2つ{目|め}です) e orientar numa carona usando pontos de referência.',
  studyNotes: [
    {
      title: 'Tópico: Minha cidade (私の町)',
      bodyPt:
        '## Can-do\n' +
        '- Perguntar o caminho a outra pessoa e entender a resposta.\n' +
        '- Perguntar o caminho por telefone e entender a resposta.\n' +
        '- Indicar o caminho até o destino, por exemplo quando lhe dão carona.\n\n' +
        '💡 Pergunta de abertura: ほかの{人|ひと}に{道|みち}を{聞|き}いたり、{聞|き}かれたりしたことがありますか？ (você já pediu informação de caminho, ou já te perguntaram?).',
    },
    {
      title: 'Pedir o caminho: 〜んですが… / どう行ったらいいですか (➊)',
      bodyPt:
        'Pôr **〜んですが…** no fim deixa o pedido mais suave: você **explica sua situação** e pede ajuda. Fala-se baixando a entonação no fim.\n\n' +
        'Três formas de perguntar o caminho:\n\n' +
        '- `{駅|えき}は**どこ**ですか？` (onde fica a estação?)\n' +
        '- `{駅|えき}は、**どう{行|い}ったらいいですか**？` (como faço para ir à estação?)\n' +
        '- `{駅|えき}に**{行|い}きたいんですが**…。` (queria ir à estação, mas… → pode me ajudar?)',
    },
    {
      title: 'Dar o caminho: V-て、〜（てください） (➋)',
      bodyPt:
        'A **テ-forma** (Lição 2) liga duas ou mais ações **em ordem**; em direções, costuma fechar com **〜てください**:\n\n' +
        '- `この{道|みち}をまっすぐ{行|い}っ**て**、2つ{目|め}の{信号|しんごう}を{左|ひだり}に{曲|ま}がっ**てください**`.\n\n' +
        'Também dá para indicar **sem 〜てください**:\n\n' +
        '- `あの{信号|しんごう}を{右|みぎ}に{曲|ま}がって、そのあと、ずっとまっすぐですよ`\n' +
        '- `…{橋|はし}を{渡|わた}って、すぐ{右|みぎ}に{曲|ま}がったところにあります`.\n\n' +
        '🚗 **Numa carona:** diga primeiro a **área geral** ({小島|こじま}{高校|こうこう}の{近|ちか}く) e, ao chegar perto, um **marco visível** ({白|しろ}くて{大|おお}きな{家|いえ}).',
    },
    {
      title: 'Corrigir: N1じゃなくて、N2 (➌)',
      bodyPt:
        'Usa-se para **corrigir** o que o outro disse: **nega N1 e dá o certo, N2**.\n\n' +
        '- `1つ{目|め}**じゃなくて**、2つ{目|め}です` (não é o 1º, é o 2º).\n' +
        '- `{市立|しりつ}{博物館|はくぶつかん}**じゃなくて**、{科学|かがく}{博物館|はくぶつかん}です`.\n\n' +
        '**〜じゃなくて** é a forma de ligação de **〜じゃない（です）**.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Na cidade ({町|まち}にあるもの):** {信号|しんごう} (semáforo), {横断歩道|おうだんほどう} (faixa de pedestres), {角|かど} (esquina), {交差点|こうさてん} (cruzamento), {道|みち} (rua), {橋|はし} (ponte).\n\n' +
        '**Dar direções ({道案内|みちあんない}):** まっすぐ{行|い}く (ir reto), {左|ひだり}／{右|みぎ}に{曲|ま}がる (virar à esquerda/direita), {道|みち}／{橋|はし}を{渡|わた}る (atravessar a rua/ponte), 1つ{目|め}・2つ{目|め}・3つ{目|め}の{角|かど} (1ª/2ª/3ª esquina).\n\n' +
        '**Prédios e lugares ({建物|たてもの}・{場所|ばしょ}):** {銀行|ぎんこう} (banco), コンビニ (conveniência), {神社|じんじゃ} (santuário), お{寺|てら} (templo), {学校|がっこう} (escola), {駐車場|ちゅうしゃじょう} (estacionamento), {公園|こうえん} (parque), {郵便局|ゆうびんきょく} (correio), {交番|こうばん} (posto policial), {病院|びょういん} (hospital), {黒|くろ}い／{白|しろ}い／{青|あお}いビル (prédio preto/branco/azul). **Outras:** ずっと, {市立|しりつ}, すぐ, {曲|ま}がったところ; そちら, {北口|きたぐち}, 〜と〜の{間|あいだ}, そうすると, {見|み}える, お{待|ま}ちしております; {高校|こうこう}, {送|おく}る, {大|おお}きな, {入|はい}る.\n\n' +
        '**Kanji da lição:** {道|みち}, {右|みぎ}, {左|ひだり}, {公園|こうえん}, {銀行|ぎんこう}, {近|ちか}く, お{寺|てら}, {車|くるま}, {神社|じんじゃ}, {送|おく}る.\n\n' +
        '📌 **TIPS:** **{信号|しんごう}** (a luz verde do carro é chamada de {青|あお}; semáforos de pedestres, alguns com botão 押しボタン式); **お{寺|てら}と{神社|じんじゃ}** (templo budista 仏教 × santuário xintoísta 神道; no templo há {仏像}/お{墓|はか}/お{坊|ぼう}さん/{鐘}/お{線香|せんこう}, no santuário {鳥居|とりい}/{神主|かんぬし}さん・{巫女|みこ}さん/お{参|まい}り com palmas パンパン).',
    },
  ],
  groups: [lesson6Group],
  audios: attachScripts(6, L6_SCRIPTS),
}

// ---- Lição 7: 道に迷ってちょっと遅れます (tópico いっしょに出かける) ------------
const lesson7Group: ExerciseGroup = {
  id: 'iro-e1-l7',
  title: '道に迷ってちょっと遅れます',
  subtitlePt: 'Sair junto · combinar encontro propondo hora/local (6{時|じ}はどうですか／6{時半|じはん}でもいいですか) e avisar atraso dando o motivo com Nで／V-て (事故で{電車|でんしゃ}が{止|と}まりました／{道|みち}に{迷|まよ}って、ちょっとおくれます)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l7-1', number: 1, prompt: '「6{時|じ}はどうですか？」 (Nはどうですか？) serve para (Nota ➊):', choices: [{ n: 1, text: 'propor algo e ver se o outro concorda (aqui: hora/local de encontro)' }, { n: 2, text: 'perguntar o motivo' }, { n: 3, text: 'recusar um convite' }, { n: 4, text: 'descrever o passado' }], answer: 1, translationPt: 'Que tal às 6 horas?', explanationPt: 'Nはどうですか？ propõe algo e pergunta se está bom. N é uma palavra de tempo ou lugar. Usado aqui para combinar o encontro. (Nota ➊)' },
    { id: 'iro-e1-l7-2', number: 2, prompt: 'O que pode entrar no N de 「Nはどうですか？」 (Nota ➊)?', choices: [{ n: 1, text: 'palavra de tempo ou lugar (6{時|じ}、ホテルのロビー…)' }, { n: 2, text: 'só verbos' }, { n: 3, text: 'só adjetivos' }, { n: 4, text: 'nada, N é fixo' }], answer: 1, explanationPt: 'Ex.: 「ホテルのロビーはどうですか？」 (que tal o lobby do hotel?). N = tempo ou lugar. (Nota ➊)' },
    { id: 'iro-e1-l7-3', number: 3, prompt: '「6{時半|じはん}でもいいですか？」 (Nでもいいですか？) serve para (Nota ➋):', choices: [{ n: 1, text: 'propor uma alternativa e perguntar se pode (contraproposta)' }, { n: 2, text: 'confirmar o que já foi decidido' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'agradecer' }], answer: 1, translationPt: 'Pode ser às 6 e meia (no lugar)?', explanationPt: 'Nでもいいですか？ apresenta um plano B e pergunta se convém. Aqui: o outro propôs 6{時|じ}, e a pessoa sugere 6{時半|じはん} por não poder no horário. (Nota ➋)' },
    { id: 'iro-e1-l7-4', number: 4, prompt: 'Exemplo de contraproposta (Nota ➋): 「「{平和|へいわ}の{鳥|とり}」の{像|ぞう}の{前|まえ}はどうですか？」「ちょっとわかりません。{駅|えき}の{改札|かいさつ}でもいいですか？」', choices: [{ n: 1, text: 'B não conhece o ponto sugerido e propõe a catraca da estação no lugar' }, { n: 2, text: 'B aceita o ponto sugerido' }, { n: 3, text: 'B recusa o encontro' }, { n: 4, text: 'B pergunta a hora' }], answer: 1, explanationPt: 'ちょっとわかりません + {駅|えき}の{改札|かいさつ}でもいいですか？ = não sei (onde fica), pode ser a catraca da estação? (Nota ➋)' },
    { id: 'iro-e1-l7-5', number: 5, prompt: '「{事故|じこ}で{電車|でんしゃ}が{止|と}まりました」 (Nで、〜) — o que で indica aqui (Nota ➌)?', choices: [{ n: 1, text: 'causa/motivo: o trem parou POR CAUSA de um acidente' }, { n: 2, text: 'lugar onde aconteceu' }, { n: 3, text: 'meio de transporte' }, { n: 4, text: 'companhia (com quem)' }], answer: 1, translationPt: 'Os trens pararam por causa de um acidente.', explanationPt: 'Nで marca a causa/motivo da frase seguinte. A partícula で liga-se a substantivos: {事故|じこ}で = por causa de acidente. (Nota ➌)' },
    { id: 'iro-e1-l7-6', number: 6, prompt: '「ねぼうして、{今|いま}、{起|お}きました」 (V-て、〜) — o que a テ-forma indica aqui (Nota ➌)?', choices: [{ n: 1, text: 'motivo: acordei agora PORQUE dormi demais' }, { n: 2, text: 'só a ordem das ações' }, { n: 3, text: 'um pedido' }, { n: 4, text: 'uma comparação' }], answer: 1, translationPt: 'Dormi demais e acordei agora.', explanationPt: 'Além de ligar ações em ordem (Lição 2), a テ-forma também pode indicar causa/motivo: ねぼうして = porque dormi demais. (Nota ➌)' },
    { id: 'iro-e1-l7-7', number: 7, prompt: 'Exemplos de motivo (Nota ➌): 「{渋滞|じゅうたい}で、30{分|ぷん}ぐらい{遅|おく}れます」「{道|みち}に{迷|まよ}って、ちょっと{遅|おく}れます」 significam:', choices: [{ n: 1, text: 'Vou atrasar ~30 min por causa do trânsito ／ Vou atrasar um pouco porque me perdi' }, { n: 2, text: 'Cheguei adiantado ／ Não vou mais' }, { n: 3, text: 'Estou no trânsito ／ Conheço o caminho' }, { n: 4, text: 'Vou de carro ／ Vou a pé' }], answer: 1, explanationPt: '{渋滞|じゅうたい}で (Nで, por congestionamento), {道|みち}に{迷|まよ}って (V-て, por ter se perdido) — ambos dão o motivo do atraso. (Nota ➌)' },
    { id: 'iro-e1-l7-8', number: 8, prompt: '「それ、{何|なん}ですか？」 usa-se quando (nota do diálogo 07-05):', choices: [{ n: 1, text: 'você não entendeu/não conhece o que o outro disse e pergunta de novo' }, { n: 2, text: 'você quer recusar' }, { n: 3, text: 'você quer agradecer' }, { n: 4, text: 'você quer marcar a hora' }], answer: 1, explanationPt: 'それ、{何|なん}ですか？ = expressão para perguntar de novo o que o interlocutor disse quando não se sabe o que é (no diálogo, o tal 「{平和|へいわ}の{鳥|とり}」の{像|ぞう}). (Atividade 2 · nota)' },
    { id: 'iro-e1-l7-9', number: 9, prompt: 'Vocabulário (Atividade 1): 「{集合|しゅうごう}（する）／では／{案内|あんない}する／{待|ま}ち{合|あ}わせ」 significam:', choices: [{ n: 1, text: 'reunir-se/encontro ／ então/sendo assim ／ guiar/mostrar ／ encontro marcado' }, { n: 2, text: 'separar ／ porém ／ esperar ／ despedida' }, { n: 3, text: 'começar ／ por isso ／ acompanhar ／ atraso' }, { n: 4, text: 'sair ／ mas ／ avisar ／ reunião' }], answer: 1, explanationPt: '{集合|しゅうごう}（する） (reunir-se, ponto de encontro), では (então), {案内|あんない}する (guiar/conduzir), {待|ま}ち{合|あ}わせ (encontro combinado). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l7-10', number: 10, prompt: 'Mais vocabulário (Atividade 1): 「イベント／{始|はじ}まる／スタッフ／30{分前|ぷんまえ}」 significam:', choices: [{ n: 1, text: 'evento ／ começar ／ equipe/staff ／ 30 minutos antes (〜{前|まえ} = antes de)' }, { n: 2, text: 'festa ／ terminar ／ chefe ／ 30 minutos depois' }, { n: 3, text: 'show ／ abrir ／ cliente ／ meia hora' }, { n: 4, text: 'reunião ／ atrasar ／ visitante ／ pontual' }], answer: 1, explanationPt: 'イベント (evento), {始|はじ}まる (começar), スタッフ (equipe), 30{分前|ぷんまえ} (30 min antes); 〜{前|まえ} = antes de. (Atividade 1 · ことば)' },
    { id: 'iro-e1-l7-11', number: 11, prompt: 'Vocabulário do diálogo (Atividade 2): 「{平和|へいわ}／{鳥|とり}／{像|ぞう}」 significam:', choices: [{ n: 1, text: 'paz ／ pássaro ／ estátua' }, { n: 2, text: 'guerra ／ peixe ／ prédio' }, { n: 3, text: 'cidade ／ árvore ／ ponte' }, { n: 4, text: 'tempo ／ animal ／ fonte' }], answer: 1, explanationPt: '{平和|へいわ} (paz), {鳥|とり} (pássaro), {像|ぞう} (estátua) — o ponto de encontro era a estátua 「{平和|へいわ}の{鳥|とり}」. (Atividade 2 · ことば)' },
    { id: 'iro-e1-l7-12', number: 12, prompt: 'Palavras-chave (大切なことば, Atividade 3): 「{事故|じこ}／ねぼうする／{今|いま}から／{急|いそ}ぐ／{先|さき}に」 significam:', choices: [{ n: 1, text: 'acidente ／ dormir demais/perder a hora ／ a partir de agora ／ apressar-se ／ antes/primeiro' }, { n: 2, text: 'problema ／ acordar cedo ／ até agora ／ descansar ／ depois' }, { n: 3, text: 'atraso ／ sonhar ／ logo ／ correr ／ junto' }, { n: 4, text: 'pressa ／ cochilar ／ ontem ／ parar ／ sozinho' }], answer: 1, explanationPt: '{事故|じこ} (acidente), ねぼうする (dormir além da conta), {今|いま}から (a partir de agora), {急|いそ}ぐ (apressar-se), {先|さき}に (antes, na frente). (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l7-13', number: 13, prompt: 'Mais palavras-chave (Atividade 3): 「{道|みち}に{迷|まよ}う／{遅|おく}れる／{着|つ}く／まちがえる／{待|ま}つ／{始|はじ}める」 significam:', choices: [{ n: 1, text: 'perder-se/se perder ／ atrasar-se ／ chegar ／ errar/confundir ／ esperar ／ começar (algo)' }, { n: 2, text: 'achar o caminho ／ adiantar-se ／ sair ／ acertar ／ correr ／ terminar' }, { n: 3, text: 'andar ／ parar ／ voltar ／ lembrar ／ desistir ／ abrir' }, { n: 4, text: 'dirigir ／ esperar ／ entrar ／ avisar ／ chamar ／ fechar' }], answer: 1, explanationPt: '{道|みち}に{迷|まよ}う (perder-se), {遅|おく}れる (atrasar-se), {着|つ}く (chegar), まちがえる (errar/confundir), {待|ま}つ (esperar), {始|はじ}める (começar). (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l7-14', number: 14, prompt: 'Os kanji 「{時間|じかん}／{場所|ばしょ}／{駅|えき}／{受付|うけつけ}」 lêem-se:', choices: [{ n: 1, text: 'じかん (tempo/hora) ／ ばしょ (lugar) ／ えき (estação) ／ うけつけ (recepção/guichê)' }, { n: 2, text: 'じかん ／ ばしょ ／ えき ／ じゅふ' }, { n: 3, text: 'ときま ／ ばしょ ／ えき ／ うけつけ' }, { n: 4, text: 'じかん ／ じょうしょ ／ えき ／ うけづけ' }], answer: 1, explanationPt: '{時間|じかん} (tempo/hora), {場所|ばしょ} (lugar), {駅|えき} (estação), {受付|うけつけ} (recepção). (漢字のことば)' },
    { id: 'iro-e1-l7-15', number: 15, prompt: 'Os kanji 「{門|もん}／{電車|でんしゃ}／{待|ま}つ／{止|と}まる」 lêem-se:', choices: [{ n: 1, text: 'もん (portão) ／ でんしゃ (trem) ／ まつ (esperar) ／ とまる (parar)' }, { n: 2, text: 'もん ／ でんしゃ ／ たつ ／ しまる' }, { n: 3, text: 'かど ／ でんしゃ ／ まつ ／ とまる' }, { n: 4, text: 'もん ／ でんちゃ ／ まつ ／ どまる' }], answer: 1, explanationPt: '{門|もん} (portão), {電車|でんしゃ} (trem), {待|ま}つ (esperar), {止|と}まる (parar). (漢字のことば)' },
    { id: 'iro-e1-l7-16', number: 16, prompt: 'Os kanji 「{着|つ}く／{急|いそ}ぐ」 lêem-se:', choices: [{ n: 1, text: 'つく (chegar) ／ いそぐ (apressar-se)' }, { n: 2, text: 'きく ／ きゅうぐ' }, { n: 3, text: 'ちゃくく ／ いそぐ' }, { n: 4, text: 'つく ／ おそぐ' }], answer: 1, explanationPt: '{着|つ}く (chegar), {急|いそ}ぐ (apressar-se). Kanji da lição: {時間|じかん}・{場所|ばしょ}・{駅|えき}・{受付|うけつけ}・{門|もん}・{電車|でんしゃ}・{待|ま}つ・{止|と}まる・{着|つ}く・{急|いそ}ぐ. (漢字)' },
    { id: 'iro-e1-l7-17', number: 17, prompt: '📌 TIPS — {遅刻|ちこく} (atrasos): como costuma ser a pontualidade no Japão?', choices: [{ n: 1, text: 'é levada muito a sério; chegar 1 min atrasado ao trabalho já conta como atraso, e evita-se fazer o outro esperar (chega-se na hora ou um pouco antes)' }, { n: 2, text: 'atrasos de até 1 hora são normais' }, { n: 3, text: 'ninguém liga para horário' }, { n: 4, text: 'só importa o horário de saída' }], answer: 1, explanationPt: 'Diz-se que os japoneses são “{時間|じかん}に{正確|せいかく}” (pontuais). 1 minuto de atraso no {始業|しぎょう}{時間|じかん} pode contar como {遅刻|ちこく}; chega-se no horário ou um pouco antes para não fazer o outro esperar. (TIPS)' },
    { id: 'iro-e1-l7-18', number: 18, prompt: '📌 TIPS — {遅刻|ちこく}: se você vai se atrasar (mesmo 5–10 min), qual é a etiqueta?', choices: [{ n: 1, text: 'avisar o outro o quanto antes, para não deixá-lo preocupado nem irritado' }, { n: 2, text: 'não avisar, pois é pouco tempo' }, { n: 3, text: 'só avisar depois de chegar' }, { n: 4, text: 'cancelar o encontro' }], answer: 1, explanationPt: 'Mesmo 5 ou 10 min: a etiqueta é avisar cedo (早目に{連絡|れんらく}). O ponto é não deixar o outro {心配|しんぱい} (preocupado) nem イライラ (irritado). O senso de tempo, porém, varia por geração/região/situação. (TIPS)' },
    { id: 'iro-e1-l7-19', number: 19, prompt: '📌 TIPS — {電車|でんしゃ}の{運行|うんこう}トラブル: o que pode parar/atrasar os trens japoneses?', choices: [{ n: 1, text: '{人身事故|じんしんじこ} (acidente com pessoa), {急病人|きゅうびょうにん} (passageiro passando mal), problemas com passageiros, {信号|しんごう}{故障|こしょう} (falha de sinal) etc.; há aviso por alto-falante e na internet' }, { n: 2, text: 'os trens japoneses nunca atrasam' }, { n: 3, text: 'só o mau tempo' }, { n: 4, text: 'falta de maquinistas apenas' }], answer: 1, explanationPt: 'A ferrovia anuncia (estação/trem/internet). Causas: {人身事故}, {急病人}, {乗客|じょうきゃく}トラブル, {信号|しんごう}{故障|こしょう}; o tempo de restabelecimento ({復旧|ふっきゅう}) varia. (TIPS)' },
    { id: 'iro-e1-l7-20', number: 20, prompt: '📌 TIPS — o que é o {遅延証明書|ちえんしょうめいしょ} (certificado de atraso)?', choices: [{ n: 1, text: 'documento emitido pela ferrovia quando o trem atrasa; apresentado à empresa, o atraso não é contado contra você (regras variam por empresa)' }, { n: 2, text: 'uma multa por chegar atrasado' }, { n: 3, text: 'um bilhete de desconto' }, { n: 4, text: 'um aviso de greve' }], answer: 1, explanationPt: 'O {遅延証明書|ちえんしょうめいしょ} prova o atraso do trem; entregue à empresa, você não é tratado como atrasado (手続き varia por empresa). Pode-se pegar na estação ou baixar pela internet. (TIPS)' },
    { id: 'iro-e1-l7-21', number: 21, prompt: 'Diálogo 07-01: que horas e onde é o encontro?', context: 'A：すみません。{明日|あした}は{何時|なんじ}にどこですか？ B：{明日|あした}は、{朝|あさ}8{時|じ}に{会社|かいしゃ}の{門|もん}の{前|まえ}{集合|しゅうごう}ね。 A：わかりました。8{時|じ}に{門|もん}の{前|まえ}ですね。', choices: [{ n: 1, text: 'Às 8h, em frente ao portão da empresa' }, { n: 2, text: 'Às 10h, na recepção' }, { n: 3, text: 'Às 6h30, na catraca da estação' }, { n: 4, text: 'Às 16h30, no hall' }], answer: 1, explanationPt: '{朝|あさ}8{時|じ}に{会社|かいしゃ}の{門|もん}の{前|まえ}{集合|しゅうごう} → 8h / portão da empresa (d). (Atividade 1 · 聴解スクリプト)' },
    { id: 'iro-e1-l7-22', number: 22, prompt: 'Diálogo 07-02: que horas e onde?', context: 'A：では、{金曜日|きんようび}の10{時|じ}に{来|き}てください。 B：…{場所|ばしょ}はどこですか？ A：{受付|うけつけ}に{来|き}てください。そのあと、{部屋|へや}に{案内|あんない}します。', choices: [{ n: 1, text: 'Sexta, às 10h, na recepção ({受付|うけつけ})' }, { n: 2, text: 'Sábado, às 8h, no portão' }, { n: 3, text: 'Sexta, às 6h, no hall' }, { n: 4, text: 'Domingo, às 17h, na estação' }], answer: 1, explanationPt: '{金曜日|きんようび}の10{時|じ}; {受付|うけつけ}に{来|き}てください → 10h / recepção (b). Depois 部屋に{案内|あんない}します. (Atividade 1)' },
    { id: 'iro-e1-l7-23', number: 23, prompt: 'Diálogo 07-03: que horas e onde?', context: 'A：{明日|あした}の{待|ま}ち{合|あ}わせは、{何時|なんじ}にどこにしますか？ B：じゃあ、6{時半|じはん}に、{駅|えき}の{改札|かいさつ}でいい？ A：はい。6{時半|じはん}に{駅|えき}ですね。', choices: [{ n: 1, text: 'Às 6h30, na catraca da estação ({駅|えき}の{改札|かいさつ})' }, { n: 2, text: 'Às 8h, no portão' }, { n: 3, text: 'Às 10h, na recepção' }, { n: 4, text: 'Às 17h, no hall' }], answer: 1, explanationPt: '6{時半|じはん}に{駅|えき}の{改札|かいさつ} → 6h30 / catraca da estação (a). (Atividade 1)' },
    { id: 'iro-e1-l7-24', number: 24, prompt: 'Diálogo 07-04: o evento começa às 17h; a que horas e onde a equipe (スタッフ) deve ir?', context: 'A：10{日|か}のイベント、{何時|なんじ}からですか？ B：17{時|じ}に{始|はじ}まりますが、スタッフは30{分前|ぷんまえ}にホールに{来|き}てください。 A：えーと、じゃあ4{時半|じはん}ですね。', choices: [{ n: 1, text: 'Às 16h30 (30 min antes das 17h), no hall ({ホール})' }, { n: 2, text: 'Às 17h, na recepção' }, { n: 3, text: 'Às 8h, no portão' }, { n: 4, text: 'Às 6h30, na estação' }], answer: 1, explanationPt: 'Evento 17{時|じ}; スタッフは30{分前|ぷんまえ}にホール → 16h30 (4{時半|じはん}) / hall (c). (Atividade 1)' },
    { id: 'iro-e1-l7-25', number: 25, prompt: 'Diálogo 07-05: que hora ベト/{李|リ}/{佐藤|さとう} acabam combinando, e por quê?', context: '{佐藤|さとう}：6{時|じ}はどうですか？ {李|リ}：6{時|じ}はちょっと{早|はや}いです。6{時半|じはん}でもいいですか？ ベト：6{時半|じはん}？　いいですよ。', choices: [{ n: 1, text: '6h30 — 6h era cedo demais para o Li, que propôs 6h30 (Nでもいいですか)' }, { n: 2, text: '6h, como o Sato propôs' }, { n: 3, text: '7h, sugerido pela Vet' }, { n: 4, text: '5h30, pedido do Li' }], answer: 1, explanationPt: '6{時|じ}はどうですか (➊) → 6{時|じ}はちょっと{早|はや}い + 6{時半|じはん}でもいいですか (➋). Combinam 6{時半|じはん}. (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l7-26', number: 26, prompt: 'Diálogo 07-05: onde combinam de se encontrar e por quê?', context: '{佐藤|さとう}：{駅前|えきまえ}の「{平和|へいわ}の{鳥|とり}」の{像|ぞう}の{前|まえ}にしましょう。 ベト：え？　それ、{何|なん}ですか？ {李|リ}：{私|わたし}もわかりません。{駅|えき}の{改札|かいさつ}でもいいですか？', choices: [{ n: 1, text: 'Na catraca da estação — ninguém sabia onde ficava a estátua “Heiwa-no-tori”' }, { n: 2, text: 'Em frente à estátua, como o Sato propôs' }, { n: 3, text: 'No portão da empresa' }, { n: 4, text: 'Na recepção do hotel' }], answer: 1, explanationPt: 'Sato propõe a estátua; ベト/{李|リ} não a conhecem (それ、{何|なん}ですか？ / わかりません) e mudam para {駅|えき}の{改札|かいさつ} (➋). Fica 6{時半|じはん} na catraca. (Atividade 2)' },
    { id: 'iro-e1-l7-27', number: 27, prompt: 'Mensagem ① (Atividade 3 · leitura): por que a pessoa vai se atrasar?', context: 'すみません。{事故|じこ}で{電車|でんしゃ}が{止|と}まりました。／（{相手|あいて}）わかりました／また{連絡|れんらく}します。', choices: [{ n: 1, text: 'O trem parou por causa de um acidente; avisa que dará notícia depois' }, { n: 2, text: 'Dormiu demais e acabou de acordar' }, { n: 3, text: 'Se perdeu no caminho' }, { n: 4, text: 'Errou o horário' }], answer: 1, explanationPt: '{事故|じこ}で{電車|でんしゃ}が{止|と}まりました (Nで, motivo, Nota ➌). Quem espera responde わかりました; また{連絡|れんらく}します. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l7-28', number: 28, prompt: 'Mensagem ② (Atividade 3): por que a pessoa vai se atrasar e o que pede?', context: 'ごめん！ねぼうして、いま{起|お}きました〜／いまから{急|いそ}いで{行|い}きます　{先|さき}にはじめてください', choices: [{ n: 1, text: 'Dormiu demais e acabou de acordar; vai correndo e pede para começarem sem ela' }, { n: 2, text: 'O trem parou; vai esperar' }, { n: 3, text: 'Se perdeu; já está chegando' }, { n: 4, text: 'Errou o horário; vai ao café' }], answer: 1, explanationPt: 'ねぼうして、いま{起|お}きました (V-て, motivo, Nota ➌); いまから{急|いそ}いで{行|い}きます; {先|さき}にはじめてください. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l7-29', number: 29, prompt: 'Mensagem ③ (Atividade 3): qual o motivo e a situação?', context: 'すみません。{道|みち}に{迷|まよ}って、ちょっとおくれます。／（{相手|あいて}）だいじょうぶですか？／{大丈夫|だいじょうぶ}です。もうすぐ{着|つ}きます。', choices: [{ n: 1, text: 'Se perdeu e vai atrasar um pouco; está quase chegando' }, { n: 2, text: 'O trem parou por acidente' }, { n: 3, text: 'Dormiu demais' }, { n: 4, text: 'Errou o horário em 30 min' }], answer: 1, explanationPt: '{道|みち}に{迷|まよ}って、ちょっとおくれます (V-て, motivo); もうすぐ{着|つ}きます (já chega). (Atividade 3 · leitura)' },
    { id: 'iro-e1-l7-30', number: 30, prompt: 'Mensagem ④ (Atividade 3): qual o motivo do atraso e o que o outro responde?', context: 'すみません。{時間|じかん}をまちがえました。30{分|ぷん}おくれます／（{相手|あいて}）え〜！／カフェで{待|ま}ってます', choices: [{ n: 1, text: 'Errou o horário e vai atrasar 30 min; o outro vai esperar no café' }, { n: 2, text: 'O trem parou; o outro foi embora' }, { n: 3, text: 'Se perdeu; o outro está chegando' }, { n: 4, text: 'Dormiu demais; o outro começou sozinho' }], answer: 1, explanationPt: '{時間|じかん}をまちがえました (errei o horário) + 30{分|ぷん}おくれます; resposta カフェで{待|ま}ってます. (Atividade 3 · leitura)' },
    { id: 'iro-e1-l7-31', number: 31, prompt: 'Na Atividade 4 (escrever a mensagem de atraso), que partes a mensagem-modelo tem?', context: '（{例|れい}）すみません。{時間|じかん}をまちがえて、30{分|ぷん}おくれます。', choices: [{ n: 1, text: 'palavra de desculpa (謝ることば) + motivo (理由) + de quanto é o atraso (時間：どのぐらい？)' }, { n: 2, text: 'só a hora de chegada' }, { n: 3, text: 'só um pedido de desculpas' }, { n: 4, text: 'o endereço do local' }], answer: 1, explanationPt: 'Modelo: すみません ({謝|あやま}ることば) + {時間|じかん}をまちがえて ({理由|りゆう}, V-て motivo) + 30{分|ぷん}おくれます ({時間|じかん}：quanto). (Atividade 4)' },
    { id: 'iro-e1-l7-32', number: 32, prompt: 'Pergunta de abertura da lição: 「{待|ま}ち{合|あ}わせはどんな{場所|ばしょ}でしますか？あなたは{約束|やくそく}の{時間|じかん}ちょうどに{行|い}きますか？」 quer dizer:', choices: [{ n: 1, text: 'Em que tipo de lugar você marca encontros? Você chega exatamente na hora combinada?' }, { n: 2, text: 'Você gosta de chegar atrasado?' }, { n: 3, text: 'Você anda de trem todo dia?' }, { n: 4, text: 'Onde fica a estação mais próxima?' }], answer: 1, translationPt: 'Em que lugares você costuma marcar encontros? Você chega bem na hora combinada?', explanationPt: '{待|ま}ち{合|あ}わせ (encontro), どんな{場所|ばしょ} (que tipo de lugar), {約束|やくそく}の{時間|じかん}ちょうど (bem na hora combinada). Tema: いっしょに{出|で}かける. (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 7
const L7_SCRIPTS: Record<string, ScriptItem[]> = {
  '07-01': [
    {
      label: '会話① (07-01) — 何時にどこ',
      setupJa: '{待|ま}ち{合|あ}わせの{時間|じかん}や{場所|ばしょ}について、4{人|にん}の{人|ひと}が{質問|しつもん}しています。',
      setupPt: 'Quatro pessoas perguntam sobre o horário e o local de encontro.',
      lines: [
        { speaker: 'A', ja: 'すみません。{明日|あした}は{何時|なんじ}にどこですか？', pt: 'Com licença. Amanhã é a que horas e onde?' },
        { speaker: 'B', ja: '{明日|あした}は、{朝|あさ}8{時|じ}に{会社|かいしゃ}の{門|もん}の{前|まえ}{集合|しゅうごう}ね。', pt: 'Amanhã, encontro às 8h da manhã em frente ao portão da empresa, viu.' },
        { speaker: 'A', ja: 'わかりました。8{時|じ}に{門|もん}の{前|まえ}ですね。', pt: 'Entendi. Às 8h, em frente ao portão, né.' },
        { speaker: 'B', ja: 'じゃあ、また{明日|あした}。', pt: 'Então, até amanhã.' },
      ],
    },
  ],
  '07-02': [
    {
      label: '会話② (07-02) — 何時にどこ',
      lines: [
        { speaker: 'A', ja: 'では、{金曜日|きんようび}の10{時|じ}に{来|き}てください。', pt: 'Então, venha na sexta-feira às 10h.' },
        { speaker: 'B', ja: '{金曜日|きんようび}の10{時|じ}ですね。えーと、{場所|ばしょ}はどこですか？', pt: 'Sexta-feira às 10h, né. Hã, e onde é o lugar?' },
        { speaker: 'A', ja: '{受付|うけつけ}に{来|き}てください。そのあと、{部屋|へや}に{案内|あんない}します。', pt: 'Venha à recepção. Depois eu te levo até a sala.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '07-03': [
    {
      label: '会話③ (07-03) — 何時にどこ',
      lines: [
        { speaker: 'A', ja: '{明日|あした}の{待|ま}ち{合|あ}わせは、{何時|なんじ}にどこにしますか？', pt: 'O encontro de amanhã, a que horas e onde vamos marcar?' },
        { speaker: 'B', ja: 'じゃあ、6{時半|じはん}に、{駅|えき}の{改札|かいさつ}でいい？', pt: 'Então, às 6h30, na catraca da estação, pode ser?' },
        { speaker: 'A', ja: 'はい。6{時半|じはん}に{駅|えき}ですね。', pt: 'Sim. Às 6h30, na estação, né.' },
        { speaker: 'B', ja: 'じゃあ、また。', pt: 'Então, até.' },
      ],
    },
  ],
  '07-04': [
    {
      label: '会話④ (07-04) — 何時にどこ',
      lines: [
        { speaker: 'A', ja: 'あのう、10{日|か}のイベント、{何時|なんじ}からですか？', pt: 'Ãhn, o evento do dia 10, a partir de que horas é?' },
        { speaker: 'B', ja: '17{時|じ}に{始|はじ}まりますが、スタッフは30{分前|ぷんまえ}にホールに{来|き}てください。', pt: 'Começa às 17h, mas a equipe deve chegar ao hall 30 minutos antes.' },
        { speaker: 'A', ja: 'えーと、じゃあ4{時半|じはん}ですね。わかりました。', pt: 'Hã, então é 4h30 (16h30), né. Entendi.' },
        { speaker: 'B', ja: 'よろしくお{願|ねが}いします。', pt: 'Conto com você.' },
      ],
    },
  ],
  '07-05': [
    {
      label: '会話 (07-05) — 明日、何時にしますか？',
      setupJa: 'ベトさんと{李|リ}さんと{佐藤|さとう}さんの3{人|にん}は、{会社|かいしゃ}の{同僚|どうりょう}です。{休|やす}みの{日|ひ}に、いっしょに{食事|しょくじ}に{行|い}くことにしました。',
      setupPt: 'Vet, Li e Sato são colegas de trabalho. Decidiram sair para comer juntos no dia de folga.',
      lines: [
        { speaker: 'ベト', ja: '{明日|あした}、{何時|なんじ}にしますか？', pt: 'Amanhã, que horas marcamos?' },
        { speaker: '佐藤', ja: '6{時|じ}はどうですか？', pt: 'Que tal às 6h?' },
        { speaker: '李', ja: '6{時|じ}はちょっと{早|はや}いです。6{時半|じはん}でもいいですか？', pt: 'Às 6h é um pouco cedo. Pode ser às 6h30?' },
        { speaker: 'ベト', ja: '6{時半|じはん}？　いいですよ。', pt: '6h30? Pode ser.' },
        { speaker: '佐藤', ja: 'じゃあ、そうしましょう。{待|ま}ち{合|あ}わせして、いっしょに{行|い}きますか？', pt: 'Então vamos assim. Marcamos de nos encontrar e vamos juntos?' },
        { speaker: '李', ja: 'そうしましょう。どこにしますか？', pt: 'Vamos. Onde marcamos?' },
        { speaker: '佐藤', ja: 'じゃあ、{駅前|えきまえ}の「{平和|へいわ}の{鳥|とり}」の{像|ぞう}の{前|まえ}にしましょう。', pt: 'Então, vamos em frente à estátua “Heiwa-no-tori”, na frente da estação.' },
        { speaker: 'ベト', ja: 'え？　それ、{何|なん}ですか？', pt: 'Ué? O que é isso?' },
        { speaker: '李', ja: '{私|わたし}もわかりません。{駅|えき}の{改札|かいさつ}でもいいですか？', pt: 'Eu também não sei. Pode ser na catraca da estação?' },
        { speaker: '佐藤', ja: 'じゃあ、そうしましょう。6{時半|じはん}に{駅|えき}の{改札|かいさつ}{集合|しゅうごう}で。', pt: 'Então vamos assim. Encontro às 6h30 na catraca da estação.' },
        { speaker: 'ベト', ja: 'はい。', pt: 'Certo.' },
        { speaker: '李', ja: 'わかりました。', pt: 'Entendido.' },
      ],
    },
  ],
}

const lesson7: Section = {
  id: 'lesson-7',
  level: 'elementary1',
  titleJa: '第7課 道に迷ってちょっと遅れます',
  titlePt: 'Lição 7 — Me perdi e vou me atrasar um pouco',
  summaryPt: 'Sair junto · combinar encontro propondo e contrapondo hora/local (6{時|じ}はどうですか／6{時半|じはん}でもいいですか), ler mensagens de aviso de atraso e avisar o atraso dando o motivo com Nで／V-て ({事故|じこ}で{電車|でんしゃ}が{止|と}まりました／{道|みち}に{迷|まよ}って、ちょっとおくれます).',
  studyNotes: [
    {
      title: 'Tópico: Sair junto (いっしょに出かける)',
      bodyPt:
        '## Can-do\n' +
        '- Perguntar e entender o horário e o local de encontro.\n' +
        '- Combinar e decidir o horário e o local do encontro.\n' +
        '- Ler uma mensagem do parceiro avisando que vai se atrasar e entender.\n' +
        '- Escrever uma mensagem avisando que vai se atrasar para o encontro.\n\n' +
        '💡 Pergunta de abertura: {待|ま}ち{合|あ}わせはどんな{場所|ばしょ}でしますか？あなたは{約束|やくそく}の{時間|じかん}ちょうどに{行|い}きますか？ (em que lugares você marca encontros? chega bem na hora?).',
    },
    {
      title: 'Propor: N はどうですか？ (➊)',
      bodyPt:
        'Serve para **propor algo** e ver se o outro concorda. N é uma palavra de **tempo ou lugar**.\n\n' +
        '- `6{時|じ}はどうですか？` (que tal às 6h?)\n' +
        '- `ホテルのロビーはどうですか？` (que tal o lobby do hotel?)\n\n' +
        'Nesta lição, usa-se para combinar a **hora e o local** do encontro.',
    },
    {
      title: 'Contrapropor: N でもいいですか？ (➋)',
      bodyPt:
        'Apresenta uma **alternativa** (plano B) e pergunta se convém. N = tempo ou lugar.\n\n' +
        '- O outro propôs 6{時|じ}; você responde `6{時|じ}はちょっと{早|はや}いです。6{時半|じはん}でもいいですか？`\n' +
        '- `ちょっとわかりません。{駅|えき}の{改札|かいさつ}でもいいですか？` (não sei onde fica; pode ser a catraca?).',
    },
    {
      title: 'Dar o motivo: N で、〜 ／ V-て、〜 (➌)',
      bodyPt:
        'Indica **causa/motivo** da frase seguinte.\n\n' +
        '- **Substantivo + で**: `{事故|じこ}で{電車|でんしゃ}が{止|と}まりました` (o trem parou por causa de um acidente); `{渋滞|じゅうたい}で、30{分|ぷん}ぐらい{遅|おく}れます`.\n' +
        '- **Verbo na テ-forma**: `ねぼうして、{今|いま}、{起|お}きました` (acordei agora porque dormi demais); `{道|みち}に{迷|まよ}って、ちょっと{遅|おく}れます`.\n\n' +
        'Além de ligar ações em ordem (Lição 2), a テ-forma também marca razão/causa.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Encontro (Ativ. 1–2):** {集合|しゅうごう}（する） (reunir-se), では (então), {案内|あんない}する (guiar), {待|ま}ち{合|あ}わせ (encontro), イベント (evento), {始|はじ}まる (começar), スタッフ (equipe), 30{分前|ぷんまえ} (30 min antes); {平和|へいわ} (paz), {鳥|とり} (pássaro), {像|ぞう} (estátua). 「それ、{何|なん}ですか？」 = perguntar de novo o que não entendeu.\n\n' +
        '**Atraso (大切なことば, Ativ. 3):** {事故|じこ} (acidente), ねぼうする (perder a hora dormindo), {今|いま}から (a partir de agora), {急|いそ}ぐ (apressar-se), {先|さき}に (antes), {始|はじ}める (começar algo), {道|みち}に{迷|まよ}う (perder-se), {遅|おく}れる (atrasar-se), {着|つ}く (chegar), {時間|じかん} (tempo/hora), まちがえる (errar/confundir), {待|ま}つ (esperar).\n\n' +
        '**Kanji da lição:** {時間|じかん}, {場所|ばしょ}, {駅|えき}, {受付|うけつけ}, {門|もん}, {電車|でんしゃ}, {待|ま}つ, {止|と}まる, {着|つ}く, {急|いそ}ぐ.\n\n' +
        '📌 **TIPS:** **{遅刻|ちこく}** (pontualidade levada a sério: 1 min de atraso já conta; avise cedo mesmo 5–10 min, para não preocupar/irritar o outro); **{電車|でんしゃ}の{運行|うんこう}トラブル** (atrasos por {人身事故}/{急病人}/{信号|しんごう}{故障|こしょう}; a ferrovia avisa por alto-falante e internet; o **{遅延証明書|ちえんしょうめいしょ}** comprova o atraso do trem para a empresa).',
    },
  ],
  groups: [lesson7Group],
  audios: attachScripts(7, L7_SCRIPTS),
}

// ---- Lições 8-18 (estrutura por tópico; exercícios em construção) ----------
const others: Section[] = [
  scaffold(8, 'Sair junto', '野球、したことありますか？', 'Você já jogou beisebol?', [
    'Convidar para refeição, compras ou eventos, perguntando a experiência/interesse do outro.',
    'Conversar sobre o que fazer a seguir e aonde ir quando estão juntos na rua.',
    'Transmitir ao outro suas impressões sobre um evento do qual participaram juntos.',
  ]),
  scaffold(9, 'Aprender japonês', '読み方を教えてもらえませんか？', 'Pode me ensinar a leitura?', [
    'Falar de forma simples sobre sua experiência aprendendo japonês.',
    'Dar impressões e comentários sobre o estudo de japonês.',
    'Pedir ajuda a outra pessoa quando tem dificuldade com o japonês.',
    'Ler um fórum on-line sobre estudo de japonês e entender os métodos recomendados.',
  ]),
  scaffold(10, 'Aprender japonês', '日本語教室に参加したいんですが…', 'Queria participar da aula de japonês…', [
    'Ver o cartaz de cursos de um centro comunitário e captar local, data e horário.',
    'Perguntar num guichê sobre um curso de interesse e entender a resposta.',
    'Perguntar e responder a um amigo sobre as aulas de japonês da região.',
    'Responder a uma entrevista simples sobre histórico e desejos de estudo.',
  ]),
  scaffold(11, 'Comida gostosa', '肉と野菜は私が買って行きます', 'Eu levo a carne e os legumes', [
    'Conversar sobre quem leva o quê ao fazer, por exemplo, um churrasco.',
    'Conversar sobre o que comprar ao fazer, por exemplo, uma festa em casa.',
    'Perguntar a um funcionário sobre ingredientes e validade dos alimentos e entender.',
    'Ler o rótulo dos alimentos e conferir se não contém algo que não pode comer.',
  ]),
  scaffold(12, 'Comida gostosa', 'お弁当、おいしそうですね', 'O bentô parece delicioso, né', [
    'Dizer a impressão sobre a aparência de um alimento.',
    'Comentar sobre um alimento recomendado depois de prová-lo.',
    'Perguntar e responder sobre sabor, ingredientes etc. de um prato.',
    'Ler o modo de preparo de um alimento instantâneo e entender os passos.',
  ]),
  scaffold(13, 'Comunicação no trabalho', 'あと10分ぐらいで終わりそうです', 'Parece que termino em uns 10 minutos', [
    'Transmitir ao superior a situação quando há um problema no trabalho.',
    'Responder de forma simples quando perguntam o andamento do trabalho.',
    'Perguntar como usar uma máquina no trabalho e entender a resposta.',
    'Ouvir e entender explicações e instruções sobre como fazer o trabalho.',
    'Ler um e-mail simples de aviso no trabalho e entender o conteúdo.',
  ]),
  scaffold(14, 'Comunicação no trabalho', '休みを取ってもいいでしょうか？', 'Posso tirar uma folga?', [
    'Avisar por telefone o trabalho sobre folga ou atraso.',
    'Pedir permissão a quem está por perto ao deixar o posto de trabalho.',
    'Pedir permissão com antecedência quando quer tirar folga.',
    'Perguntar como preencher um formulário (pedido de folga) e entender a resposta.',
  ]),
  scaffold(15, 'Vida saudável', '熱があってのどが痛いんです', 'Estou com febre e a garganta dói', [
    'Transmitir de forma simples seus sintomas no hospital.',
    'Ouvir e entender as instruções do médico.',
    'Preencher os campos necessários de uma ficha no balcão do hospital.',
    'Ouvir a explicação de um remédio e entender uso e cuidados.',
    'Ler a bula de um remédio e entender uso e dose.',
  ]),
  scaffold(16, 'Vida saudável', '食べすぎないようにしています', 'Procuro não comer demais', [
    'Dar conselhos a quem está passando mal, ou ouvir e entender conselhos.',
    'Falar sobre o que faz para cuidar da própria saúde.',
    'Ver notícia de uma doença em circulação e entender o geral (nome, sintomas, prevenção).',
    'Ver um cartaz sobre doença no hospital e entender sintomas e prevenção.',
  ]),
  scaffold(17, 'Convívio', '兄がくれたお守りです', 'É um amuleto que meu irmão me deu', [
    'Trocar cumprimentos básicos ao visitar a casa de alguém.',
    'Explicar de forma simples o que é uma lembrança ao entregá-la.',
    'Falar sobre seus pertences — onde comprou, quem deu etc.',
    'Escrever um e-mail simples de agradecimento a quem o recebeu/ajudou.',
  ]),
  scaffold(18, 'Convívio', '何かプレゼントをあげませんか？', 'Que tal darmos algum presente?', [
    'Dar os parabéns por aniversário, casamento etc.',
    'Conversar sobre o que dar ao escolher um presente para alguém.',
    'Agradecer e comentar ao receber um presente.',
    'Ler um post de aniversário que um amigo publicou nas redes e entender.',
    'Escrever uma mensagem de felicitação ou despedida num cartão.',
  ]),
]

export const irodoriElementary1: Level = {
  id: 'elementary1',
  courseId: 'irodori',
  titlePt: 'Irodori — Elementary 1 (初級1 · A2)',
  descriptionPt:
    'Segundo nível do Irodori (いろどり: Japonês para a vida no Japão, da Japan Foundation). Nível A2: manter conversas curtas e básicas sobre temas do dia a dia. São 9 tópicos em 18 lições (課), organizadas por módulos, com os áudios oficiais. As explicações são em português.',
  sections: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, ...others],
}
