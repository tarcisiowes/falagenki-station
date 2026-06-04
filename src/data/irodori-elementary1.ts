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

// ---- Lições 2-18 (estrutura por tópico; exercícios em construção) ----------
const others: Section[] = [
  scaffold(2, 'Quem eu sou agora', 'ゲームをするのが好きです', 'Gosto de jogar videogame', [
    'Falar de forma simples sobre seus hobbies e do que gosta.',
    'Perguntar e responder como se passa os dias de folga.',
    'Ler uma apresentação de funcionários afixada numa loja/local e entender família, hobbies etc.',
    'Escrever de forma simples sobre seus hobbies e folgas para uma apresentação de equipe no trabalho.',
  ]),
  scaffold(3, 'Estações e clima', '冬はとても寒くなります', 'O inverno fica muito frio', [
    'Assistir a um vídeo curto sobre as quatro estações do Japão e entender as características de cada estação.',
    'Falar de forma simples sobre as características das estações do seu país.',
    'Falar de forma simples sobre sua estação preferida e o motivo.',
  ]),
  scaffold(4, 'Estações e clima', '昨日はすごい雨でしたね', 'Ontem choveu muito, né', [
    'Cumprimentar puxando assunto sobre o tempo/clima.',
    'Ouvir a previsão do tempo e entender o conteúdo geral.',
    'Ler um post curto de rede social sobre o tempo e entender o conteúdo.',
  ]),
  scaffold(5, 'Minha cidade', 'とてもにぎやかで便利です', 'É muito movimentado e prático', [
    'Falar de forma simples suas impressões sobre a cidade onde mora.',
    'Perguntar sobre lugares recomendados da cidade e entender a resposta.',
    'Ler o mapa-guia da cidade e captar informações sobre pontos e lojas.',
  ]),
  scaffold(6, 'Minha cidade', '郵便局はどう行ったらいいですか？', 'Como faço para ir ao correio?', [
    'Perguntar o caminho a outra pessoa e entender a resposta.',
    'Perguntar o caminho por telefone e entender a resposta.',
    'Indicar o caminho até o destino, por exemplo quando lhe dão carona.',
  ]),
  scaffold(7, 'Sair junto', '道に迷ってちょっと遅れます', 'Me perdi e vou me atrasar um pouco', [
    'Perguntar e entender o horário e local de encontro.',
    'Combinar e decidir o horário e local do encontro.',
    'Ler uma mensagem do parceiro avisando de atraso e entender.',
    'Escrever uma mensagem avisando que vai se atrasar para o encontro.',
  ]),
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
  sections: [lesson1, ...others],
}
