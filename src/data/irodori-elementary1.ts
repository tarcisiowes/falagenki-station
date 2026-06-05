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

// ---- Lição 8: 野球、したことありますか？ (tópico いっしょに出かける) ------------
const lesson8Group: ExerciseGroup = {
  id: 'iro-e1-l8',
  title: '野球、したことありますか？',
  subtitlePt: 'Sair junto · convidar perguntando experiência (もう{行|い}きましたか／V-たことがありますか) e propondo (V-に{行|い}きませんか), combinar a ordem das ações (Nの{前|まえ}に／Nのあとで) e dar impressões sobre o que se fez (パンダがかわいかったです)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l8-1', number: 1, prompt: '「{新|あたら}しいアウトレットモール、もう{行|い}きましたか？」 (もうV-ました) — o que もう indica (Nota ➊)?', choices: [{ n: 1, text: 'já / até agora: pergunta se a ação JÁ foi feita' }, { n: 2, text: 'ainda não' }, { n: 3, text: 'nunca' }, { n: 4, text: 'de novo' }], answer: 1, translationPt: 'Você já foi ao novo outlet?', explanationPt: 'もう = já. もうV-ましたか？ pergunta se algo já foi feito, quando se espera que seja natural fazê-lo (ex.: {昼|ひる}ご{飯|はん}、もう{食|た}べましたか？). (Nota ➊)' },
    { id: 'iro-e1-l8-2', number: 2, prompt: 'Como se responde a 「もうV-ましたか？」 (Nota ➊)?', choices: [{ n: 1, text: 'sim → はい、V-ました; não → いいえ、まだです' }, { n: 2, text: 'sim → いいえ; não → はい' }, { n: 3, text: 'sempre com ありがとう' }, { n: 4, text: 'sempre com まだV-ます' }], answer: 1, explanationPt: 'はい、V-ました (já fiz) / いいえ、まだです (ainda não). Ex.: ポートタワー、もう{登|のぼ}りましたか？→ いいえ……. (Nota ➊)' },
    { id: 'iro-e1-l8-3', number: 3, prompt: '「プロレスを{見|み}たことがありますか？」 (V-たことがあります) serve para (Nota ➋):', choices: [{ n: 1, text: 'perguntar/dizer sobre uma experiência (já fez alguma vez?)' }, { n: 2, text: 'perguntar a hora' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'falar do futuro' }], answer: 1, translationPt: 'Você já assistiu (alguma vez) a luta livre?', explanationPt: 'V (タ-forma) + ことがあります = ter a experiência de. Resposta: あります (já) / ないです・ありません (nunca). Na fala, o が pode cair: 〜たことあります. (Nota ➋)' },
    { id: 'iro-e1-l8-4', number: 4, prompt: 'Como se forma a タ-forma a partir da テ-forma (Nota ➋)?', choices: [{ n: 1, text: 'troca-se て／で por た／だ ({見|み}て→{見|み}た, {飲|の}んで→{飲|の}んだ, {行|い}って→{行|い}った)' }, { n: 2, text: 'acrescenta-se ます' }, { n: 3, text: 'tira-se o último som' }, { n: 4, text: 'troca-se る por た sempre' }], answer: 1, explanationPt: 'A タ-forma indica passado/perfeito; faz-se mudando o て／で da テ-forma para た／だ. 1ºgr: 〜って→った, 〜んで→んだ, 〜いて→いた; exceção {行|い}く→{行|い}った. (Nota ➋ · tabela)' },
    { id: 'iro-e1-l8-5', number: 5, prompt: 'Qual a diferença entre 「もうV-ましたか？」 (➊) e 「V-たことがありますか？」 (➋)?', choices: [{ n: 1, text: 'もうV-ました = quando se espera que a ação seja feita naturalmente; V-たことがあります = só perguntar se tem ou não a experiência' }, { n: 2, text: 'são exatamente iguais' }, { n: 3, text: 'a primeira é futuro, a segunda é presente' }, { n: 4, text: 'a primeira é casual, a segunda é errada' }], answer: 1, explanationPt: 'もうV-ましたか？ pressupõe algo esperado/natural; V-たことがありますか？ simplesmente pergunta se a pessoa já teve aquela experiência. (Notas ➊/➋)' },
    { id: 'iro-e1-l8-6', number: 6, prompt: '「いっしょに{食|た}べに{行|い}きませんか？」 (V-に{行|い}きませんか) — como se forma o “para fazer” (Nota ➌)?', choices: [{ n: 1, text: 'マス-forma sem ます + に + {行|い}く ({食|た}べに{行|い}く, {飲|の}みに{行|い}く, {見|み}に{行|い}く)' }, { n: 2, text: 'forma de dicionário + に' }, { n: 3, text: 'タ-forma + に' }, { n: 4, text: 'テ-forma + に' }], answer: 1, translationPt: 'Não quer ir comer junto (comigo)?', explanationPt: 'V-ませんか？ é convite (visto no 入門). Tira-se ます da マス-forma e põe-se に+{行|い}く para indicar o objetivo de ir: {食|た}べに{行|い}く, {見|み}に{行|い}く. Casual: V-に{行|い}かない？ (Nota ➌)' },
    { id: 'iro-e1-l8-7', number: 7, prompt: 'Exemplo de convite (Nota ➌): 「プロレス、いっしょに{見|み}に{行|い}きませんか？」 — boa resposta de aceite:', choices: [{ n: 1, text: 'いいですね。{行|い}きましょう。' }, { n: 2, text: 'いいえ、まだです。' }, { n: 3, text: 'すみません、{遅|おく}れます。' }, { n: 4, text: 'どういたしまして。' }], answer: 1, explanationPt: 'Aceite típico: いいですね。{行|い}きましょう。/ ぜひ。 Casual: {今度|こんど}、{映画|えいが}{見|み}に{行|い}かない？→ ぜひ。 (Nota ➌)' },
    { id: 'iro-e1-l8-8', number: 8, prompt: '「{食事|しょくじ}の{前|まえ}に、お{金|かね}をおろしたいんですが…」 (Nの{前|まえ}に、〜) significa que (Nota ➍):', choices: [{ n: 1, text: 'a ação acontece ANTES de N (sacar dinheiro antes da refeição)' }, { n: 2, text: 'a ação acontece depois de N' }, { n: 3, text: 'a ação acontece durante N' }, { n: 4, text: 'N não acontece' }], answer: 1, translationPt: 'Antes da refeição, eu queria sacar dinheiro…', explanationPt: 'Nの{前|まえ}に、〜 = antes de N, fazer a ação seguinte. N pode ser {食事|しょくじ}, {買|か}い{物|もの}, {映画|えいが}, {仕事|しごと}, {勉強|べんきょう}, {学校|がっこう}. (Nota ➍)' },
    { id: 'iro-e1-l8-9', number: 9, prompt: '「{買|か}い{物|もの}のあとで、ゲームコーナーに{行|い}きませんか？」 (Nのあと（で）、〜) significa (Nota ➍):', choices: [{ n: 1, text: 'a ação acontece DEPOIS de N (ir ao fliperama depois das compras)' }, { n: 2, text: 'a ação acontece antes de N' }, { n: 3, text: 'a ação acontece em vez de N' }, { n: 4, text: 'N é cancelado' }], answer: 1, translationPt: 'Depois das compras, não quer ir ao fliperama?', explanationPt: 'Nのあと（で）、〜 = depois de N, fazer a ação seguinte; で pode cair (Nのあと、〜). Ex.: {映画|えいが}の{前|まえ}に、カフェでお{茶|ちゃ}を…/ {仕事|しごと}のあとで、ボウリング…. (Nota ➍)' },
    { id: 'iro-e1-l8-10', number: 10, prompt: '「ジョギングシューズを{買|か}いたいんですが…」 (V-たいんですが…) serve para (Nota ➎):', choices: [{ n: 1, text: 'comunicar um desejo e, com isso, pedir algo ao outro (ex.: ir junto à loja)' }, { n: 2, text: 'recusar um convite' }, { n: 3, text: 'descrever o passado' }, { n: 4, text: 'dar uma ordem' }], answer: 1, translationPt: 'Eu queria comprar um tênis de corrida, mas…', explanationPt: 'V-たいんですが… transmite o desejo e espera uma reação do outro. A Lição 6 viu Nに{行|い}きたいんですが…; aqui o verbo é qualquer um. Pode continuar a frase: Tシャツを{買|か}いたいんですが、あのお{店|みせ}、{見|み}てもいいですか？ (Nota ➎)' },
    { id: 'iro-e1-l8-11', number: 11, prompt: 'Vocabulário (Atividade 1): 「{試合|しあい}／やる／メンバー／{足|た}りない／{無理|むり}（な）」 significam:', choices: [{ n: 1, text: 'partida/jogo ／ fazer/praticar ／ membro ／ faltar/não bastar ／ impossível/sem chance' }, { n: 2, text: 'treino ／ assistir ／ técnico ／ sobrar ／ fácil' }, { n: 3, text: 'time ／ ganhar ／ torcida ／ chegar ／ possível' }, { n: 4, text: 'esporte ／ correr ／ juiz ／ pagar ／ caro' }], answer: 1, explanationPt: '{試合|しあい} (partida), やる (fazer/jogar), メンバー (membro/jogador), {足|た}りない (faltar: メンバーが{足|た}りなくて), {無理|むり}（な） (impossível). Também アジア (Ásia), すごく (muito). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l8-12', number: 12, prompt: 'Adjetivos de impressão (Atividade 3): 「すごかった／すばらしかった／おもしろかった／{難|むずか}しかった／{感動|かんどう}した／かわいかった／{楽|たの}しかった」 significam:', choices: [{ n: 1, text: 'foi incrível ／ foi maravilhoso ／ foi interessante ／ foi difícil ／ me emocionei ／ era fofo ／ foi divertido' }, { n: 2, text: 'foi chato ／ foi caro ／ foi fácil ／ foi longe ／ dormi ／ era feio ／ foi cansativo' }, { n: 3, text: 'foi rápido ／ foi barato ／ foi curto ／ foi perto ／ chorei ／ era grande ／ foi tranquilo' }, { n: 4, text: 'todos significam “foi bom”' }], answer: 1, explanationPt: 'すごかった, すばらしかった, おもしろかった, {難|むずか}しかった, {感動|かんどう}した, かわいかった, {楽|たの}しかった — impressões (イA no passado: 〜かった). (Atividade 3)' },
    { id: 'iro-e1-l8-13', number: 13, prompt: 'Vocabulário da Atividade 3: 「パンダ／サル／{現代|げんだい}／{作品|さくひん}／ホラー{映画|えいが}」 significam:', choices: [{ n: 1, text: 'panda ／ macaco ／ moderno/contemporâneo ／ obra (de arte) ／ filme de terror' }, { n: 2, text: 'urso ／ pássaro ／ antigo ／ livro ／ comédia' }, { n: 3, text: 'gato ／ peixe ／ futuro ／ música ／ desenho' }, { n: 4, text: 'cachorro ／ tigre ／ atual ／ quadro ／ romance' }], answer: 1, explanationPt: 'パンダ (panda), サル (macaco), {現代|げんだい} (contemporâneo), {作品|さくひん} (obra), ホラー{映画|えいが} (filme de terror). (Atividade 3 · ことば)' },
    { id: 'iro-e1-l8-14', number: 14, prompt: 'Impressões negativas (Atividade 3): 「つまらない／{退屈|たいくつ}（な）／いまいち（な）／よくわかりませんでした」 significam:', choices: [{ n: 1, text: 'sem graça/chato ／ entediante ／ mais ou menos/nada de mais ／ não entendi bem' }, { n: 2, text: 'divertido ／ animado ／ ótimo ／ entendi tudo' }, { n: 3, text: 'caro ／ longe ／ difícil ／ não fui' }, { n: 4, text: 'fácil ／ perto ／ bonito ／ adorei' }], answer: 1, explanationPt: 'つまらない (sem graça), {退屈|たいくつ}（な） (entediante), いまいち（な） (nada de mais), よくわかりませんでした (não entendi bem). (Atividade 3 · flowchart)' },
    { id: 'iro-e1-l8-15', number: 15, prompt: 'Os kanji 「お{金|かね}／{食事|しょくじ}／〜{店|てん}／{試合|しあい}」 lêem-se:', choices: [{ n: 1, text: 'おかね (dinheiro) ／ しょくじ (refeição) ／ 〜てん (loja, sufixo) ／ しあい (partida)' }, { n: 2, text: 'おきん ／ しょくじ ／ 〜みせ ／ しごう' }, { n: 3, text: 'おかね ／ たべじ ／ 〜てん ／ しあい' }, { n: 4, text: 'おかね ／ しょくじ ／ 〜てん ／ ためし' }], answer: 1, explanationPt: 'お{金|かね} (dinheiro), {食事|しょくじ} (refeição), 〜{店|てん} (sufixo “loja”: スポーツ{店|てん}), {試合|しあい} (partida). (漢字のことば)' },
    { id: 'iro-e1-l8-16', number: 16, prompt: 'Os kanji 「{博物館|はくぶつかん}／{動物園|どうぶつえん}／{登|のぼ}る」 lêem-se:', choices: [{ n: 1, text: 'はくぶつかん (museu) ／ どうぶつえん (zoológico) ／ のぼる (subir)' }, { n: 2, text: 'はくぶつかん ／ どうぶつえん ／ とうる' }, { n: 3, text: 'はくもつかん ／ どうもつえん ／ のぼる' }, { n: 4, text: 'ばくぶつかん ／ どうぶつその ／ のぼる' }], answer: 1, explanationPt: '{博物館|はくぶつかん} (museu), {動物園|どうぶつえん} (zoológico), {登|のぼ}る (subir; {富士山|ふじさん}に{登|のぼ}る). (漢字のことば)' },
    { id: 'iro-e1-l8-17', number: 17, prompt: 'Os kanji 「{楽|たの}しい／{難|むずか}しい」 lêem-se:', choices: [{ n: 1, text: 'たのしい (divertido) ／ むずかしい (difícil)' }, { n: 2, text: 'らくしい ／ なんしい' }, { n: 3, text: 'たのしい ／ かたしい' }, { n: 4, text: 'がくしい ／ むずかしい' }], answer: 1, explanationPt: '{楽|たの}しい (divertido), {難|むずか}しい (difícil). Kanji da lição: お{金|かね}・{食事|しょくじ}・〜{店|てん}・{博物館|はくぶつかん}・{動物園|どうぶつえん}・{試合|しあい}・{楽|たの}しい・{難|むずか}しい・{登|のぼ}る. (漢字)' },
    { id: 'iro-e1-l8-18', number: 18, prompt: '📌 TIPS — {日本|にほん}の{城|しろ} (castelos): quando e como eram construídos?', choices: [{ n: 1, text: 'do período {戦国|せんごく} ao {江戸|えど} (séc. XVI–XIX); marcados por muros altos de pedra ({石垣}), fossos ({堀}) e torre de menagem ({天守閣})' }, { n: 2, text: 'no séc. XX, todos de concreto' }, { n: 3, text: 'na era Heian, de papel' }, { n: 4, text: 'nunca existiram no Japão' }], answer: 1, explanationPt: 'Construídos do {戦国|せんごく}{時代|じだい} ao {江戸|えど}{時代|じだい} (~séc. XVI a XIX); {石垣}, {堀}, {天守閣}. Famosos: {姫路城} (Patrimônio Mundial), {松本城}, {松山城}. (TIPS)' },
    { id: 'iro-e1-l8-19', number: 19, prompt: '📌 TIPS — {城|しろ}: o que dá para fazer ao visitar um castelo hoje?', choices: [{ n: 1, text: 'subir ao {天守閣} e conhecer a história local pelos materiais expostos; há muitos {城址公園|じょうしこうえん} (parques sobre ruínas de castelo)' }, { n: 2, text: 'só ver de fora, é proibido entrar' }, { n: 3, text: 'morar dentro' }, { n: 4, text: 'nada, estão todos fechados' }], answer: 1, explanationPt: '{天守閣}に{上|のぼ}ったり、{展示|てんじ}{資料|しりょう}でその{土地|とち}の{歴史|れきし}に{触|ふ}れたり. {大阪城}/{名古屋城} têm torre reconstruída em concreto (era 昭和) com elevador. (TIPS)' },
    { id: 'iro-e1-l8-20', number: 20, prompt: '📌 TIPS — アウトレットモール no Japão: o que é (e o que NÃO é)?', choices: [{ n: 1, text: 'shopping com lojas que vendem produtos direto das fábricas; NÃO é lugar de mercadoria com defeito/baratíssima' }, { n: 2, text: 'lugar que só vende produtos com defeito' }, { n: 3, text: 'um mercado de rua' }, { n: 4, text: 'uma fábrica fechada ao público' }], answer: 1, explanationPt: 'アウトレットモール: lojas de fabricantes (sobretudo de roupa) vendendo direto; ficam em pontos turísticos/subúrbios/beira de rodovia. No Japão NÃO significa produto com defeito barato. (TIPS)' },
    { id: 'iro-e1-l8-21', number: 21, prompt: '📌 TIPS — プロレス (luta livre profissional) no Japão:', choices: [{ n: 1, text: 'mistura luta e show; popular (cresce o público feminino); grandes ligas em arenas como o Tokyo Dome, e ligas locais em ginásios/estacionamentos, muitas vezes de graça' }, { n: 2, text: 'é proibida no Japão' }, { n: 3, text: 'só acontece no Tokyo Dome e é caríssima' }, { n: 4, text: 'é só para crianças' }], answer: 1, explanationPt: 'プロレス = luta + elemento de espetáculo; muitas {団体|だんたい}: as メジャー usam grandes arenas ({東京}ドーム), as locais usam ginásios/estacionamentos, com entrada muitas vezes gratuita ({観戦|かんせん}{無料|むりょう}). (TIPS)' },
    { id: 'iro-e1-l8-22', number: 22, prompt: 'Diálogo 08-01: A convida B para o novo outlet. O que B responde?', context: 'A：{新|あたら}しいアウトレットモール、もう{行|い}きましたか？ B：いえ、まだです。 A：{今度|こんど}、みんなで{行|い}きます。いっしょに{行|い}きませんか？ B：ありがとうございます。ぜひ。', choices: [{ n: 1, text: 'Ainda não foi (まだです) e aceita o convite (ぜひ)' }, { n: 2, text: 'Já foi e recusa' }, { n: 3, text: 'Não gosta de outlet' }, { n: 4, text: 'Vai sozinho' }], answer: 1, explanationPt: 'もう{行|い}きましたか？ (➊) → いいえ、まだです; convite いっしょに{行|い}きませんか？ (➌) → ぜひ (aceita). (Atividade 1 · 聴解スクリプト)' },
    { id: 'iro-e1-l8-23', number: 23, prompt: 'Diálogo 08-02: sobre o restaurante asiático “Palm Kitchen”, o que acontece?', context: 'A：「パームキッチン」っていうアジアレストラン、{行|い}ったことありますか？ B：いいえ、ありません。 A：すごくおいしいですよ。{今度|こんど}、いっしょに{食|た}べに{行|い}きませんか？', choices: [{ n: 1, text: 'B nunca foi; A diz que é muito gostoso e convida para irem comer juntos — B aceita' }, { n: 2, text: 'B já foi e não gostou' }, { n: 3, text: 'A recusa o convite de B' }, { n: 4, text: 'B não pode comer comida asiática' }], answer: 1, explanationPt: '{行|い}ったことありますか？ (➋) → ありません; {食|た}べに{行|い}きませんか？ (➌, マス+に) → いいですね。ぜひ、{行|い}きましょう。 (Atividade 1)' },
    { id: 'iro-e1-l8-24', number: 24, prompt: 'Diálogo 08-03: sobre a luta livre (プロレス), o que A propõe?', context: 'A：プロレスを{見|み}たことがありますか？ B：いいえ、{見|み}たことないです。 A：{今度|こんど}の{日曜日|にちようび}、{市民|しみん}{体育館|たいいくかん}で{試合|しあい}がありますよ。いっしょに{見|み}に{行|い}きませんか？', choices: [{ n: 1, text: 'B nunca assistiu; há um jogo no ginásio municipal no domingo e A convida para irem ver — B aceita' }, { n: 2, text: 'B já assistiu muitas vezes' }, { n: 3, text: 'A não gosta de luta livre' }, { n: 4, text: 'Não há jogo nenhum' }], answer: 1, explanationPt: '{見|み}たことがありますか？ → {見|み}たことないです; {見|み}に{行|い}きませんか？ (➌) → へー、いいですね。{行|い}きましょう。 (Atividade 1)' },
    { id: 'iro-e1-l8-25', number: 25, prompt: 'Diálogo 08-04: A convida B para a Port Tower. Por que B hesita?', context: 'A：ポートタワー、もう{登|のぼ}りましたか？ B：いいえ……。 A：じゃあ、{今度|こんど}、{行|い}きませんか？　{景色|けしき}がきれいですよ。 B：すみません。{私|わたし}、{高|たか}いところはちょっと……。', choices: [{ n: 1, text: 'B não subiu ainda, mas tem medo/desconforto de lugares altos ({高|たか}いところはちょっと)' }, { n: 2, text: 'B já subiu e adorou' }, { n: 3, text: 'A torre está fechada' }, { n: 4, text: 'B prefere o museu' }], answer: 1, explanationPt: 'もう{登|のぼ}りましたか？ (➊) → いいえ; recusa indireta {高|たか}いところはちょっと……(não curto lugares altos). (Atividade 1)' },
    { id: 'iro-e1-l8-26', number: 26, prompt: 'Diálogo 08-05: A pergunta se B já conhece a cidade. Aonde B já foi e aonde não?', context: 'A：もう、この{町|まち}のいろいろなところに{行|い}きましたか？ B：えーと、{博物館|はくぶつかん}とお{城|しろ}には{行|い}きました。 A：{動物園|どうぶつえん}は？ B：まだです。{行|い}きたいです。', choices: [{ n: 1, text: 'Já foi ao museu e ao castelo; ao zoológico ainda não, mas quer ir' }, { n: 2, text: 'Já foi a todos os lugares' }, { n: 3, text: 'Não foi a lugar nenhum' }, { n: 4, text: 'Só foi ao zoológico' }], answer: 1, explanationPt: '{博物館|はくぶつかん}とお{城|しろ}には{行|い}きました; {動物園|どうぶつえん}は まだです。{行|い}きたいです → A：{今度|こんど}いっしょに{行|い}きましょう。 (Atividade 1)' },
    { id: 'iro-e1-l8-27', number: 27, prompt: 'Diálogo 08-06: A chama B para jogar beisebol. Por quê, e o que B responde?', context: 'A：{野球|やきゅう}、したことある？ B：え、ないです。 A：{今度|こんど}の{日曜日|にちようび}、いっしょにやらない？　メンバーが{足|た}りなくて……。 B：えー、{無理|むり}です。{野球|やきゅう}、ぜんぜんわかりません。', choices: [{ n: 1, text: 'Faltam jogadores (メンバーが{足|た}りなくて); B nunca jogou e diz que é impossível ({無理|むり}), não entende nada de beisebol' }, { n: 2, text: 'B é jogador profissional' }, { n: 3, text: 'Sobram jogadores' }, { n: 4, text: 'B aceita na hora' }], answer: 1, explanationPt: 'したことある？ (➋ casual) → ないです; convite やらない？ (➌ casual) com motivo メンバーが{足|た}りなくて; recusa {無理|むり}です. A insiste: だいじょうぶ. (Atividade 1)' },
    { id: 'iro-e1-l8-28', number: 28, prompt: 'Diálogo 08-12 (no shopping): qual a ordem que ヒルニ／ソック／アニタ combinam?', context: 'アニタ：{何|なに}か{食|た}べませんか？→フードコート。 ソック：{食事|しょくじ}の{前|まえ}に、お{金|かね}をおろしたいんですが…→ATM。 ヒルニ：ジョギングシューズを{買|か}いたいんですが…→スポーツ{店|てん}。 ソック：{買|か}い{物|もの}のあとで、ゲームコーナー。', choices: [{ n: 1, text: 'Sacar dinheiro (ATM) → comer → comprar tênis → fliperama → (antes, banheiro)' }, { n: 2, text: 'Fliperama primeiro, depois comer' }, { n: 3, text: 'Só vão ao cinema' }, { n: 4, text: 'Vão direto para casa' }], answer: 1, explanationPt: 'Usam Nの{前|まえ}に／Nのあとで (➍) e V-たいんですが (➎): {食事|しょくじ}の{前|まえ}に ATM; depois フードコート; {買|か}い{物|もの}のあとで ゲームコーナー; その{前|まえ}に トイレ. (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l8-29', number: 29, prompt: 'Diálogo 08-12: como ソック pede para sacar dinheiro e ir ao fliperama?', context: 'ソック：あ、{食事|しょくじ}の{前|まえ}に、お{金|かね}をおろしたいんですが……。 …ソック：{買|か}い{物|もの}のあとで、ゲームコーナーに{行|い}きませんか？', choices: [{ n: 1, text: 'お{金|かね}をおろしたいんですが… (➎, desejo) e {買|か}い{物|もの}のあとで…{行|い}きませんか？ (➍+➌)' }, { n: 2, text: 'com もうV-ました' }, { n: 3, text: 'com V-たことがあります' }, { n: 4, text: 'dando uma ordem' }], answer: 1, explanationPt: 'おろしたいんですが… expressa o desejo (➎); {買|か}い{物|もの}のあとで marca a ordem (➍) + {行|い}きませんか？ convida (➌). (Atividade 2)' },
    { id: 'iro-e1-l8-30', number: 30, prompt: 'Diálogo 08-16: A e B falam do zoológico (どうでしたか). Qual a impressão de B?', context: 'A：{動物園|どうぶつえん}、どうでしたか？ B：{楽|たの}しかったです。パンダがかわいかったです。 A：{私|わたし}はサルがよかったです。 B：ああ、サルもかわいかったですね。また{行|い}きたいです。', choices: [{ n: 1, text: 'Foi divertido; o panda era fofo; quer ir de novo' }, { n: 2, text: 'Foi chato e cansativo' }, { n: 3, text: 'Não viu nenhum animal' }, { n: 4, text: 'Foi difícil de entender' }], answer: 1, explanationPt: '{楽|たの}しかった / パンダがかわいかった (impressões em 〜かった); また{行|い}きたいです. (Atividade 3 · 聴解スクリプト)' },
    { id: 'iro-e1-l8-31', number: 31, prompt: 'Diálogos 08-17/08-18/08-19: que impressões dão a exposição, a luta livre e o filme?', context: '② {展覧会|てんらんかい}：ちょっと{難|むずか}しかったです。よくわかりませんでした。 ③ プロレス：はじめてでしたけど、とてもおもしろかったです。…すごかったです。 ④ {映画|えいが}：{感動|かんどう}しました。{本当|ほんとう}にすばらしかったです。', choices: [{ n: 1, text: 'Exposição: meio difícil/não entendeu bem; luta livre: muito interessante/incrível; filme: emocionante/maravilhoso' }, { n: 2, text: 'Todos acharam tudo chato' }, { n: 3, text: 'Exposição: fácil; luta: entediante; filme: ruim' }, { n: 4, text: 'Ninguém deu opinião' }], answer: 1, explanationPt: '{展覧会|てんらんかい}: {難|むずか}しかった/よくわかりませんでした; プロレス: おもしろかった/すごかった; {映画|えいが}: {感動|かんどう}した/すばらしかった (→ {今度|こんど}はホラー{映画|えいが}). (Atividade 3)' },
    { id: 'iro-e1-l8-32', number: 32, prompt: 'Pergunta de abertura da lição: 「{友|とも}だちを{誘|さそ}って、どんなところに{行|い}きますか？」 quer dizer:', choices: [{ n: 1, text: 'A que tipo de lugares você convida seus amigos para ir?' }, { n: 2, text: 'Você gosta de jogar beisebol?' }, { n: 3, text: 'Onde fica o zoológico?' }, { n: 4, text: 'A que horas você acorda?' }], answer: 1, translationPt: 'Convidando os amigos, a que tipo de lugar você vai?', explanationPt: '{友|とも}だちを{誘|さそ}って (convidando amigos), どんなところに{行|い}きますか (a que lugar vai). Tema: いっしょに{出|で}かける. (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 8
const L8_SCRIPTS: Record<string, ScriptItem[]> = {
  '08-01': [
    {
      label: '会話① (08-01) — もう行きましたか',
      setupJa: '6{人|にん}の{人|ひと}が、{知|し}り{合|あ}いを{誘|さそ}っています。',
      setupPt: 'Seis pessoas estão convidando um conhecido para algum lugar.',
      lines: [
        { speaker: 'A', ja: '{新|あたら}しいアウトレットモール、もう{行|い}きましたか？', pt: 'Você já foi ao novo outlet?' },
        { speaker: 'B', ja: 'いえ、まだです。', pt: 'Não, ainda não.' },
        { speaker: 'A', ja: '{今度|こんど}、みんなで{行|い}きます。いっしょに{行|い}きませんか？', pt: 'Da próxima vez vamos todos juntos. Não quer ir com a gente?' },
        { speaker: 'B', ja: 'ありがとうございます。ぜひ。', pt: 'Obrigado(a). Com certeza.' },
      ],
    },
  ],
  '08-02': [
    {
      label: '会話② (08-02) — もう行きましたか',
      lines: [
        { speaker: 'A', ja: '「パームキッチン」っていうアジアレストラン、{行|い}ったことありますか？', pt: 'Você já foi a um restaurante asiático chamado “Palm Kitchen”?' },
        { speaker: 'B', ja: 'いいえ、ありません。', pt: 'Não, nunca fui.' },
        { speaker: 'A', ja: 'すごくおいしいですよ。{今度|こんど}、いっしょに{食|た}べに{行|い}きませんか？', pt: 'É muito gostoso. Da próxima vez, não quer ir comer comigo?' },
        { speaker: 'B', ja: 'いいですね。ぜひ、{行|い}きましょう。', pt: 'Que bom. Vamos sim, com certeza.' },
      ],
    },
  ],
  '08-03': [
    {
      label: '会話③ (08-03) — もう行きましたか',
      lines: [
        { speaker: 'A', ja: 'プロレスを{見|み}たことがありますか？', pt: 'Você já assistiu a luta livre?' },
        { speaker: 'B', ja: 'いいえ、{見|み}たことないです。', pt: 'Não, nunca assisti.' },
        { speaker: 'A', ja: '{今度|こんど}の{日曜日|にちようび}、{市民|しみん}{体育館|たいいくかん}で{試合|しあい}がありますよ。いっしょに{見|み}に{行|い}きませんか？', pt: 'Domingo que vem tem um jogo no ginásio municipal. Não quer ir ver comigo?' },
        { speaker: 'B', ja: 'へー、いいですね。{行|い}きましょう。', pt: 'Nossa, que bom. Vamos.' },
      ],
    },
  ],
  '08-04': [
    {
      label: '会話④ (08-04) — もう行きましたか',
      lines: [
        { speaker: 'A', ja: 'ポートタワー、もう{登|のぼ}りましたか？', pt: 'Você já subiu na Port Tower?' },
        { speaker: 'B', ja: 'いいえ……。', pt: 'Não…' },
        { speaker: 'A', ja: 'じゃあ、{今度|こんど}、{行|い}きませんか？　{景色|けしき}がきれいですよ。', pt: 'Então, não quer ir da próxima vez? A vista é linda.' },
        { speaker: 'B', ja: 'すみません。{私|わたし}、{高|たか}いところはちょっと……。', pt: 'Desculpe. Eu… lugares altos não me agradam muito.' },
      ],
    },
  ],
  '08-05': [
    {
      label: '会話⑤ (08-05) — もう行きましたか',
      lines: [
        { speaker: 'A', ja: 'もう、この{町|まち}のいろいろなところに{行|い}きましたか？', pt: 'Você já foi a vários lugares desta cidade?' },
        { speaker: 'B', ja: 'えーと、{博物館|はくぶつかん}とお{城|しろ}には{行|い}きました。', pt: 'Hã, ao museu e ao castelo eu já fui.' },
        { speaker: 'A', ja: '{動物園|どうぶつえん}は？', pt: 'E ao zoológico?' },
        { speaker: 'B', ja: 'まだです。{行|い}きたいです。', pt: 'Ainda não. Quero ir.' },
        { speaker: 'A', ja: 'じゃあ、{今度|こんど}いっしょに{行|い}きましょう。', pt: 'Então, vamos juntos da próxima vez.' },
      ],
    },
  ],
  '08-06': [
    {
      label: '会話⑥ (08-06) — もう行きましたか',
      lines: [
        { speaker: 'A', ja: '{野球|やきゅう}、したことある？', pt: 'Você já jogou beisebol?' },
        { speaker: 'B', ja: 'え、ないです。', pt: 'Hã, nunca.' },
        { speaker: 'A', ja: '{今度|こんど}の{日曜日|にちようび}、いっしょにやらない？　メンバーが{足|た}りなくて……。', pt: 'Domingo que vem, não joga com a gente? Estão faltando jogadores…' },
        { speaker: 'B', ja: 'えー、{無理|むり}です。{野球|やきゅう}、ぜんぜんわかりません。', pt: 'Ah, é impossível. Não entendo nada de beisebol.' },
        { speaker: 'A', ja: 'だいじょうぶ、だいじょうぶ。', pt: 'Relaxa, relaxa.' },
      ],
    },
  ],
  '08-12': [
    {
      label: '会話 (08-12) — このあと、どうしますか？',
      setupJa: 'ヒルニさんとソックさんとアニタさんは{友|とも}だちです。{休|やす}みの{日|ひ}に、ショッピングモールに{来|き}ています。',
      setupPt: 'Hiruni, Sok e Anita são amigos. Estão num shopping no dia de folga.',
      lines: [
        { speaker: '（ト書き）', ja: '（{歩|ある}きながら）', pt: '(Andando.)' },
        { speaker: 'アニタ', ja: 'このあと、どうしますか？', pt: 'E agora, o que vamos fazer?' },
        { speaker: 'ヒルニ', ja: 'お{腹|なか}がすきましたね。{何|なに}か{食|た}べませんか？', pt: 'Deu fome, né. Não querem comer alguma coisa?' },
        { speaker: 'アニタ', ja: 'じゃあ、フードコートに{行|い}きましょう。', pt: 'Então vamos à praça de alimentação.' },
        { speaker: 'ソック', ja: 'あ、{食事|しょくじ}の{前|まえ}に、お{金|かね}をおろしたいんですが……。', pt: 'Ah, antes de comer eu queria sacar dinheiro…' },
        { speaker: 'アニタ', ja: 'あそこにATMがありますよ。', pt: 'Ali tem um caixa eletrônico.' },
        { speaker: '（ト書き）', ja: '（フードコートで）', pt: '(Na praça de alimentação.)' },
        { speaker: 'ヒルニ', ja: 'このあと、ジョギングシューズを{買|か}いたいんですが……。', pt: 'Depois eu queria comprar um tênis de corrida…' },
        { speaker: 'アニタ', ja: 'じゃあ、スポーツ{店|てん}に{行|い}きましょう。', pt: 'Então vamos à loja de esportes.' },
        { speaker: 'ソック', ja: '{買|か}い{物|もの}のあとで、ゲームコーナーに{行|い}きませんか？', pt: 'Depois das compras, não querem ir ao fliperama?' },
        { speaker: 'アニタ', ja: 'いいですね。', pt: 'Boa ideia.' },
        { speaker: '（ト書き）', ja: '-------------------', pt: '———' },
        { speaker: 'ヒルニ', ja: 'じゃ、{行|い}きましょうか。', pt: 'Então, vamos indo?' },
        { speaker: 'ソック', ja: 'あ、その{前|まえ}に、ちょっとトイレ。', pt: 'Ah, antes disso, só um instante no banheiro.' },
      ],
    },
  ],
  '08-16': [
    {
      label: '会話① (08-16) — どうでしたか',
      setupJa: '{行|い}ったところについて、4{人|よにん}の{人|ひと}が{感想|かんそう}を{話|はな}しています。',
      setupPt: 'Quatro pessoas contam suas impressões sobre lugares aonde foram.',
      lines: [
        { speaker: 'A', ja: '{動物園|どうぶつえん}、どうでしたか？', pt: 'E o zoológico, como foi?' },
        { speaker: 'B', ja: '{楽|たの}しかったです。パンダがかわいかったです。', pt: 'Foi divertido. O panda era uma graça.' },
        { speaker: 'A', ja: '{私|わたし}はサルがよかったです。', pt: 'Eu gostei foi dos macacos.' },
        { speaker: 'B', ja: 'ああ、サルもかわいかったですね。また{行|い}きたいです。', pt: 'Ah, os macacos também eram fofos, né. Quero ir de novo.' },
      ],
    },
  ],
  '08-17': [
    {
      label: '会話② (08-17) — どうでしたか',
      lines: [
        { speaker: 'A', ja: '{今日|きょう}の{展覧会|てんらんかい}、どうでしたか？', pt: 'E a exposição de hoje, como foi?' },
        { speaker: 'B', ja: 'うーん。ちょっと{難|むずか}しかったです。', pt: 'Hmm. Foi um pouco difícil.' },
        { speaker: 'A', ja: 'あー、{現代|げんだい}の{作品|さくひん}はねえ。', pt: 'Ah, as obras contemporâneas, né…' },
        { speaker: 'B', ja: 'よくわかりませんでした。', pt: 'Não entendi muito bem.' },
      ],
    },
  ],
  '08-18': [
    {
      label: '会話③ (08-18) — どうでしたか',
      lines: [
        { speaker: 'A', ja: 'プロレス、どうでしたか？', pt: 'E a luta livre, como foi?' },
        { speaker: 'B', ja: 'はじめてでしたけど、とてもおもしろかったです。', pt: 'Foi a primeira vez, mas foi muito interessante.' },
        { speaker: 'A', ja: 'そうですか。それはよかったです。', pt: 'É mesmo? Que bom.' },
        { speaker: 'B', ja: 'ほんと、すごかったです。また{見|み}たいです。', pt: 'Sério, foi incrível. Quero ver de novo.' },
      ],
    },
  ],
  '08-19': [
    {
      label: '会話④ (08-19) — どうでしたか',
      lines: [
        { speaker: 'A', ja: '{映画|えいが}、よかったですね。', pt: 'O filme foi bom, né.' },
        { speaker: 'B', ja: '{感動|かんどう}しました。{本当|ほんとう}にすばらしかったです。', pt: 'Me emocionei. Foi realmente maravilhoso.' },
        { speaker: 'A', ja: 'じゃあ、また{行|い}きましょう。', pt: 'Então, vamos de novo.' },
        { speaker: 'B', ja: '{今度|こんど}は、ホラー{映画|えいが}を{見|み}に{行|い}きましょう。', pt: 'Da próxima, vamos ver um filme de terror.' },
        { speaker: 'A', ja: 'えー。', pt: 'Eee…' },
      ],
    },
  ],
}

const lesson8: Section = {
  id: 'lesson-8',
  level: 'elementary1',
  titleJa: '第8課 野球、したことありますか？',
  titlePt: 'Lição 8 — Você já jogou beisebol?',
  summaryPt: 'Sair junto · convidar alguém perguntando experiência (もう{行|い}きましたか／プロレスを{見|み}たことがありますか) e propondo (いっしょに{食|た}べに{行|い}きませんか), combinar a ordem das ações (Nの{前|まえ}に／Nのあとで) e dar impressões sobre eventos (パンダがかわいかったです／とてもおもしろかったです).',
  studyNotes: [
    {
      title: 'Tópico: Sair junto (いっしょに出かける)',
      bodyPt:
        '## Can-do\n' +
        '- Convidar para comer, fazer compras ou ir a eventos, perguntando a experiência/interesse do outro.\n' +
        '- Conversar sobre o que fazer a seguir e aonde ir quando estão juntos na rua.\n' +
        '- Transmitir suas impressões sobre um evento do qual participaram juntos.\n\n' +
        '💡 Pergunta de abertura: {友|とも}だちを{誘|さそ}って、どんなところに{行|い}きますか？ (a que lugares você convida os amigos?).',
    },
    {
      title: 'Já fez? / Experiência: もうV-ました ／ V-たことがあります (➊➋)',
      bodyPt:
        '**もうV-ましたか？** = já fez? (もう = já). Usa-se quando se espera que a ação seja natural. Resposta: `はい、V-ました` / `いいえ、まだです`.\n\n' +
        '- `{新|あたら}しいアウトレットモール、もう{行|い}きましたか？`\n\n' +
        '**V-たことがあります** = ter a experiência de (já fez alguma vez?). Usa a **タ-forma** + ことがあります.\n\n' +
        '- `プロレスを{見|み}たことがありますか？` → `いいえ、{見|み}たことないです`.\n' +
        '- タ-forma: troca-se て／で da テ-forma por た／だ ({見|み}て→{見|み}た, {飲|の}んで→{飲|の}んだ, {行|い}って→{行|い}った).\n\n' +
        'Diferença: もうV-ました (algo esperado/natural) × V-たことがあります (só saber se tem ou não a experiência).',
    },
    {
      title: 'Convidar: V-に行きませんか？ (➌)',
      bodyPt:
        'Convite com objetivo. Tira-se **ます** da マス-forma e põe-se **に + {行|い}く**:\n\n' +
        '- {食|た}べに{行|い}く (ir comer), {飲|の}みに{行|い}く (ir beber), {見|み}に{行|い}く (ir ver).\n' +
        '- `いっしょに{食|た}べに{行|い}きませんか？` → `いいですね。{行|い}きましょう。`\n\n' +
        'Casual: `V-に{行|い}かない？` (ex.: {映画|えいが}{見|み}に{行|い}かない？).',
    },
    {
      title: 'Ordem das ações: Nの前に／Nのあと(で) ／ desejo: V-たいんですが… (➍➎)',
      bodyPt:
        '**Nの{前|まえ}に、〜** = antes de N; **Nのあと（で）、〜** = depois de N (o で pode cair). N: {食事|しょくじ}, {買|か}い{物|もの}, {映画|えいが}, {仕事|しごと}, {勉強|べんきょう}, {学校|がっこう}…\n\n' +
        '- `{食事|しょくじ}の{前|まえ}に、お{金|かね}をおろしたいんですが…` / `{買|か}い{物|もの}のあとで、ゲームコーナーに{行|い}きませんか？`\n\n' +
        '**V-たいんですが…** = comunica um desejo e, com isso, pede algo. A Lição 6 viu Nに{行|い}きたいんですが…; aqui, com qualquer verbo: `ジョギングシューズを{買|か}いたいんですが…`.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Convite (Ativ. 1):** アジア (Ásia), すごく (muito), {試合|しあい} (partida), やる (fazer/jogar), メンバー (jogador), {足|た}りない (faltar), {無理|むり}（な） (impossível). **Lugares (a–h):** {動物園|どうぶつえん}, お{城|しろ}, レストラン, {博物館|はくぶつかん}, アウトレットモール, プロレス, タワー, {野球|やきゅう}.\n\n' +
        '**Impressões (Ativ. 3):** すごかった, すばらしかった, おもしろかった, {難|むずか}しかった, {感動|かんどう}した, かわいかった, {楽|たの}しかった; (negativas) つまらない, {退屈|たいくつ}（な）, いまいち（な）, よくわかりませんでした. **Outras:** パンダ, サル, {現代|げんだい}, {作品|さくひん}, ホラー{映画|えいが}.\n\n' +
        '**Kanji da lição:** お{金|かね}, {食事|しょくじ}, 〜{店|てん}, {博物館|はくぶつかん}, {動物園|どうぶつえん}, {試合|しあい}, {楽|たの}しい, {難|むずか}しい, {登|のぼ}る.\n\n' +
        '📌 **TIPS:** **{日本|にほん}の{城|しろ}** (castelos do {戦国|せんごく} ao {江戸|えど}; {石垣}/{堀}/{天守閣}; {姫路城}/{松本城}/{松山城}; dá para subir ao {天守閣} e ver a história local); **アウトレットモール** (lojas direto da fábrica; NÃO é produto com defeito barato); **プロレス** (luta + show; ligas grandes em arenas e ligas locais em ginásios/estacionamentos, muitas vezes de graça).',
    },
  ],
  groups: [lesson8Group],
  audios: attachScripts(8, L8_SCRIPTS),
}

// ---- Lição 9: 読み方を教えてもらえませんか？ (tópico 日本語学習) ---------------
const lesson9Group: ExerciseGroup = {
  id: 'iro-e1-l9',
  title: '読み方を教えてもらえませんか？',
  subtitlePt: 'Aprender japonês · dizer por qual meio estudou (アニメで{勉強|べんきょう}しました), comentar pontos fortes/fracos (N1はN2が…／読むのは難しいでも会話は得意), pedir ajuda com 〜てもらえませんか e perguntar “como se…” com V-方',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l9-1', number: 1, prompt: '「アニメで{日本語|にほんご}を{勉強|べんきょう}しました」 — que sentido de で é esse (Nota ➊)?', choices: [{ n: 1, text: 'meio/método: estudou POR MEIO de anime' }, { n: 2, text: 'lugar onde estudou' }, { n: 3, text: 'companhia (com quem)' }, { n: 4, text: 'motivo' }], answer: 1, translationPt: 'Estudei japonês com (por meio de) anime.', explanationPt: 'A partícula で marca lugar ({学校|がっこう}で), mas também meio/método. Já visto no 入門 para transporte (バスで). Aqui: o meio de estudar — {本|ほん}で, ラジオで, ネットで, アプリで. (Nota ➊)' },
    { id: 'iro-e1-l9-2', number: 2, prompt: 'Para perguntar especificamente o MEIO (não o lugar), qual palavra se usa (Nota ➊)?', choices: [{ n: 1, text: 'どうやって ({日本語|にほんご}を{勉強|べんきょう}しましたか)' }, { n: 2, text: 'どこで' }, { n: 3, text: 'いつ' }, { n: 4, text: 'だれと' }], answer: 1, explanationPt: 'どこで…？ pode ser respondido com lugar OU meio; para perguntar só o meio/método, usa-se どうやって (como/de que forma). (Nota ➊)' },
    { id: 'iro-e1-l9-3', number: 3, prompt: '「{日本語|にほんご}は{文字|もじ}が{難|むずか}しいです」 (N1はN2が…) — o que cada parte indica (Nota ➋)?', choices: [{ n: 1, text: 'N1 ({日本語|にほんご}) é o tema; N2 ({文字|もじ}) é o aspecto específico avaliado' }, { n: 2, text: 'N1 e N2 são a mesma coisa' }, { n: 3, text: 'N1 é o lugar, N2 o tempo' }, { n: 4, text: 'são dois temas sem relação' }], answer: 1, translationPt: 'No japonês, os caracteres é que são difíceis.', explanationPt: 'N1は (tema) + N2が + adjetivo: detalha qual parte do tema é assim. N2: {文字|もじ}, {文法|ぶんぽう}, {発音|はつおん}, ou um verbo. (Nota ➋)' },
    { id: 'iro-e1-l9-4', number: 4, prompt: 'E quando o N2 é um verbo? Ex.: 「{日本語|にほんご}は{話|はな}すのが{大変|たいへん}です」 (Nota ➋)', choices: [{ n: 1, text: 'usa-se V (辞書形) + の + が ({話|はな}す→{話|はな}すのが)' }, { n: 2, text: 'usa-se V-ます + が' }, { n: 3, text: 'usa-se V-て + が' }, { n: 4, text: 'usa-se V-た + が' }], answer: 1, translationPt: 'No japonês, falar é que é difícil.', explanationPt: 'Para usar verbo na parte N2が, acrescenta-se の à forma de dicionário: {話|はな}すのが{大変|たいへん}, {読|よ}むのが{難|むずか}しい. (Nota ➋)' },
    { id: 'iro-e1-l9-5', number: 5, prompt: '「{読|よ}むのは{少|すこ}し{難|むずか}しいです。でも、{会話|かいわ}は{得意|とくい}です」 (N1は〜。でも、N2は〜) serve para (Nota ➌):', choices: [{ n: 1, text: 'contrastar duas características (uma difícil, a outra boa)' }, { n: 2, text: 'dar um motivo' }, { n: 3, text: 'pôr ações em ordem' }, { n: 4, text: 'fazer um pedido' }], answer: 1, translationPt: 'Ler é um pouco difícil; mas conversação eu mando bem.', explanationPt: 'O は marca contraste (N1は〜 / N2は〜). Sem contraste seria {読|よ}むのが…/{会話|かいわ}が…; ao contrastar, が vira は. でも reforça o contraste. (Nota ➌)' },
    { id: 'iro-e1-l9-6', number: 6, prompt: 'Exemplo de contraste (Nota ➌): 「ひらがなは{好|す}きです。カタカナは{苦手|にがて}です」 significa:', choices: [{ n: 1, text: 'Gosto de hiragana, mas katakana não vai bem' }, { n: 2, text: 'Gosto de hiragana e de katakana' }, { n: 3, text: 'Não gosto de nenhum dos dois' }, { n: 4, text: 'Hiragana e katakana são iguais' }], answer: 1, explanationPt: 'ひらがなは{好|す}き / カタカナは{苦手|にがて} — dois は em contraste. Outro ex.: {英語|えいご}は{文法|ぶんぽう}は{簡単|かんたん}です。でも、{単語|たんご}を{覚|おぼ}えるのは{大変|たいへん}です. (Nota ➌)' },
    { id: 'iro-e1-l9-7', number: 7, prompt: '「{日本語|にほんご}をチェックしてもらえませんか？」 (V-てもらえませんか) é (Nota ➍):', choices: [{ n: 1, text: 'um jeito mais educado de pedir algo do que V-てください' }, { n: 2, text: 'uma ordem ríspida' }, { n: 3, text: 'uma recusa' }, { n: 4, text: 'uma forma de agradecer' }], answer: 1, translationPt: 'Você poderia checar o meu japonês?', explanationPt: 'V-てもらえませんか？ pede algo com mais polidez que V-てください. Liga-se à テ-forma: {教|おし}えて、{見|み}せて、{貸|か}して、{説明|せつめい}して、{書|か}いて、{言|い}って、{話|はな}して…もらえませんか. (Nota ➍)' },
    { id: 'iro-e1-l9-8', number: 8, prompt: 'Exemplos de pedido educado (Nota ➍):', choices: [{ n: 1, text: 'この{漢字|かんじ}の{読|よ}み{方|かた}を{教|おし}えてもらえませんか？／ {新|あたら}しい{教科書|きょうかしょ}、ちょっと{見|み}せてもらえませんか？' }, { n: 2, text: 'チェックしてください！ (ordem)' }, { n: 3, text: 'チェックしましたか？' }, { n: 4, text: 'チェックしたいです' }], answer: 1, explanationPt: '{教|おし}えてもらえませんか／{見|み}せてもらえませんか — pedidos educados com 〜てもらえませんか. (Nota ➍)' },
    { id: 'iro-e1-l9-9', number: 9, prompt: '「この{書類|しょるい}の{書|か}き{方|かた}がよくわかりません」 (V-方) significa (Nota ➎):', choices: [{ n: 1, text: 'a MANEIRA de fazer: {書|か}き{方|かた} = como escrever/preencher' }, { n: 2, text: 'a pessoa que escreve' }, { n: 3, text: 'o lugar de escrever' }, { n: 4, text: 'o momento de escrever' }], answer: 1, translationPt: 'Não entendo bem como preencher este documento.', explanationPt: 'V-方 = maneira de fazer. Forma: マス-forma sem ます + 方. Ex.: {読|よ}み{方|かた} (como ler), し{方|かた}/やり{方|かた} (como fazer), {行|い}き{方|かた} (como ir), {使|つか}い{方|かた} (como usar), {食|た}べ{方|かた} (como comer). (Nota ➎)' },
    { id: 'iro-e1-l9-10', number: 10, prompt: 'Qual frase usa V-方 corretamente (Nota ➎)?', choices: [{ n: 1, text: 'この{辞書|じしょ}の{使|つか}い{方|かた}を{教|おし}えてください' }, { n: 2, text: 'この{辞書|じしょ}の{使|つか}う{方|かた}を…' }, { n: 3, text: 'この{辞書|じしょ}の{使|つか}って{方|かた}を…' }, { n: 4, text: 'この{辞書|じしょ}の{使|つか}った{方|かた}を…' }], answer: 1, explanationPt: '{使|つか}う→マス stem {使|つか}い+{方|かた} = {使|つか}い{方|かた} (como usar). Outro: {日本語|にほんご}のいい{練習|れんしゅう}のし{方|かた}がありますか？ (Nota ➎)' },
    { id: 'iro-e1-l9-11', number: 11, prompt: 'Vocabulário (Atividade 1): 「どれぐらい／{上手|じょうず}（な）／2{年間|ねんかん}／{自分|じぶん}で／まだまだです／そんなことないです」 significam:', choices: [{ n: 1, text: 'quanto (tempo) ／ habilidoso/bom ／ por 2 anos (〜{間|かん} = durante) ／ por conta própria ／ ainda longe (modéstia) ／ que isso/não é bem assim' }, { n: 2, text: 'onde ／ ruim ／ 2 meses ／ com amigos ／ acabei ／ é verdade' }, { n: 3, text: 'quando ／ rápido ／ 2 dias ／ na escola ／ comecei ／ obrigado' }, { n: 4, text: 'quem ／ difícil ／ 2 vezes ／ sozinho em casa ／ desisti ／ de nada' }], answer: 1, explanationPt: 'どれぐらい (quanto tempo), {上手|じょうず}（な） (bom/habilidoso), 2{年間|ねんかん} (por 2 anos, 〜{間|かん}=período), {自分|じぶん}で (por conta própria), まだまだです / そんなことないです (respostas modestas a um elogio). (Atividade 1 · 確認)' },
    { id: 'iro-e1-l9-12', number: 12, prompt: 'Vocabulário sobre estudar (Atividade 2): 「{簡単|かんたん}（な）／{大変|たいへん}（な）／まあまあ（な）／{似|に}ている／{違|ちが}う」 significam:', choices: [{ n: 1, text: 'fácil/simples ／ difícil/trabalhoso ／ mais ou menos ／ parecer-se/ser parecido ／ ser diferente' }, { n: 2, text: 'difícil ／ fácil ／ ótimo ／ ser igual ／ combinar' }, { n: 3, text: 'caro ／ barato ／ pouco ／ copiar ／ mudar' }, { n: 4, text: 'longo ／ curto ／ nada ／ esquecer ／ lembrar' }], answer: 1, explanationPt: '{簡単|かんたん}（な） (fácil), {大変|たいへん}（な） (difícil/cansativo), まあまあ（な） (mais ou menos), {似|に}ている (ser parecido: モンゴル{語|ご}と{似|に}ている), {違|ちが}う (ser diferente: ベトナム{語|ご}とぜんぜん{違|ちが}う). (Atividade 2 · ことば)' },
    { id: 'iro-e1-l9-13', number: 13, prompt: 'Aspectos do japonês (Atividade 2): 「{得意|とくい}（な）／{苦手|にがて}（な）／{文法|ぶんぽう}／{発音|はつおん}／{文字|もじ}／{会話|かいわ}／{覚|おぼ}える」 significam:', choices: [{ n: 1, text: 'mandar bem em ／ não ir bem em/ter dificuldade ／ gramática ／ pronúncia ／ caractere/escrita ／ conversação ／ memorizar' }, { n: 2, text: 'odiar ／ adorar ／ leitura ／ sotaque ／ palavra ／ fala ／ esquecer' }, { n: 3, text: 'fácil ／ difícil ／ frase ／ voz ／ letra ／ diálogo ／ entender' }, { n: 4, text: 'caro ／ barato ／ texto ／ som ／ número ／ aula ／ repetir' }], answer: 1, explanationPt: '{得意|とくい}（な） (bom em), {苦手|にがて}（な） (fraco em), {文法|ぶんぽう} (gramática), {発音|はつおん} (pronúncia), {文字|もじ} (caractere: ひらがな/カタカナ/{漢字|かんじ}), {会話|かいわ} (conversação), {覚|おぼ}える (memorizar). (Atividade 2 · ことば)' },
    { id: 'iro-e1-l9-14', number: 14, prompt: 'Tipos de ajuda (Atividade 3, a–d): 「{漢字|かんじ}を{教|おし}える／{辞書|じしょ}を{貸|か}す／{本|ほん}を{見|み}せる／{日本語|にほんご}をチェックする」 significam:', choices: [{ n: 1, text: 'ensinar o kanji ／ emprestar o dicionário ／ mostrar o livro ／ revisar/checar o japonês' }, { n: 2, text: 'ler o kanji ／ comprar o dicionário ／ esconder o livro ／ traduzir o japonês' }, { n: 3, text: 'apagar o kanji ／ devolver o dicionário ／ rasgar o livro ／ falar japonês' }, { n: 4, text: 'copiar o kanji ／ pegar o dicionário ／ vender o livro ／ escrever em japonês' }], answer: 1, explanationPt: '{漢字|かんじ}を{教|おし}える, {辞書|じしょ}を{貸|か}す, {本|ほん}を{見|み}せる, {日本語|にほんご}をチェックする — tipos de ajuda pedida. (Atividade 3)' },
    { id: 'iro-e1-l9-15', number: 15, prompt: 'Mais tipos de ajuda (Atividade 3, e–h) + vocab: 「{説明|せつめい}する／{紙|かみ}に{書|か}く／{簡単|かんたん}なことばで{言|い}う／ゆっくり{話|はな}す／{書類|しょるい}／{教科書|きょうかしょ}／{自信|じしん}がありません」 significam:', choices: [{ n: 1, text: 'explicar ／ escrever no papel ／ dizer em palavras simples ／ falar devagar ／ documento ／ livro didático ／ não estou seguro/confiante' }, { n: 2, text: 'perguntar ／ ler o papel ／ falar rápido ／ gritar ／ carta ／ caderno ／ tenho certeza' }, { n: 3, text: 'repetir ／ rasgar ／ traduzir ／ sussurrar ／ jornal ／ revista ／ estou pronto' }, { n: 4, text: 'cancelar ／ guardar ／ resumir ／ cantar ／ recibo ／ dicionário ／ acabei' }], answer: 1, explanationPt: '{説明|せつめい}する, {紙|かみ}に{書|か}く, {簡単|かんたん}なことばで{言|い}う, ゆっくり{話|はな}す; メール, {書類|しょるい} (documento), {教科書|きょうかしょ} (livro didático), {自信|じしん}がありません (não estou confiante). (Atividade 3 · ことば)' },
    { id: 'iro-e1-l9-16', number: 16, prompt: 'Vocabulário do fórum (Atividade 4): 「{練習|れんしゅう}／{探|さが}す／{何回|なんかい}も／{教室|きょうしつ}／{無料|むりょう}／{先生|せんせい}」 significam:', choices: [{ n: 1, text: 'prática/treino ／ procurar ／ várias vezes ／ aula/turma ／ gratuito ／ professor' }, { n: 2, text: 'prova ／ achar ／ uma vez ／ escola ／ pago ／ aluno' }, { n: 3, text: 'tarefa ／ esconder ／ nunca ／ sala ／ caro ／ diretor' }, { n: 4, text: 'jogo ／ comprar ／ sempre ／ clube ／ barato ／ amigo' }], answer: 1, explanationPt: '{練習|れんしゅう} (treino), {探|さが}す (procurar), {何回|なんかい}も (várias vezes), {教室|きょうしつ} (aula), {無料|むりょう} (gratuito), {先生|せんせい} (professor). (Atividade 4 · 大切なことば)' },
    { id: 'iro-e1-l9-17', number: 17, prompt: 'Os kanji 「{高校|こうこう}／{大学|だいがく}／{練習|れんしゅう}／{漢字|かんじ}」 lêem-se:', choices: [{ n: 1, text: 'こうこう (ensino médio) ／ だいがく (universidade) ／ れんしゅう (treino) ／ かんじ (kanji)' }, { n: 2, text: 'こうこう ／ だいがく ／ れんしゅう ／ かんもじ' }, { n: 3, text: 'たかこう ／ おおがく ／ れんしゅう ／ かんじ' }, { n: 4, text: 'こうこう ／ だいがく ／ ねんしゅう ／ かんじ' }], answer: 1, explanationPt: '{高校|こうこう} (ensino médio), {大学|だいがく} (universidade), {練習|れんしゅう} (prática), {漢字|かんじ} (kanji). (漢字のことば)' },
    { id: 'iro-e1-l9-18', number: 18, prompt: 'Os kanji 「{無料|むりょう}／{言|い}う／{書|か}く／{貸|か}す」 lêem-se:', choices: [{ n: 1, text: 'むりょう (gratuito) ／ いう (dizer) ／ かく (escrever) ／ かす (emprestar)' }, { n: 2, text: 'むりょう ／ いう ／ かく ／ かりる' }, { n: 3, text: 'ぶりょう ／ ゆう ／ しょく ／ かす' }, { n: 4, text: 'むりょう ／ いう ／ がく ／ たす' }], answer: 1, explanationPt: '{無料|むりょう} (gratuito), {言|い}う (dizer), {書|か}く (escrever), {貸|か}す (emprestar). (漢字のことば)' },
    { id: 'iro-e1-l9-19', number: 19, prompt: 'Os kanji 「{教|おし}える／{説明|せつめい}する」 lêem-se:', choices: [{ n: 1, text: 'おしえる (ensinar) ／ せつめいする (explicar)' }, { n: 2, text: 'きょうえる ／ せつめいする' }, { n: 3, text: 'おしえる ／ せきめいする' }, { n: 4, text: 'おそわる ／ せつめいする' }], answer: 1, explanationPt: '{教|おし}える (ensinar), {説明|せつめい}する (explicar). Kanji da lição: {高校|こうこう}・{大学|だいがく}・{練習|れんしゅう}・{漢字|かんじ}・{無料|むりょう}・{言|い}う・{書|か}く・{貸|か}す・{教|おし}える・{説明|せつめい}する. (漢字)' },
    { id: 'iro-e1-l9-20', number: 20, prompt: '📌 TIPS — estudar japonês com アニメ:', choices: [{ n: 1, text: 'muitos começam a estudar por gostar de anime; dá para assistir on-line (YouTube, serviços pagos), alguns com legenda, e melhorar audição/pronúncia ouvindo japonês natural' }, { n: 2, text: 'é proibido usar anime para estudar' }, { n: 3, text: 'anime não tem áudio em japonês' }, { n: 4, text: 'só serve para crianças' }], answer: 1, explanationPt: 'Anime japonês tem fãs no mundo todo; muitos começam o estudo por causa dele. Hoje se assiste fácil pela internet (legendas, serviços pagos) e treina-se {聴解|ちょうかい}/{発音|はつおん} com o japonês natural. (TIPS)' },
    { id: 'iro-e1-l9-21', number: 21, prompt: '📌 TIPS — {地域|ちいき}の{日本語|にほんご}{教室|きょうしつ} (aulas comunitárias de japonês):', choices: [{ n: 1, text: 'oferecidas por prefeituras/associações para estrangeiros; gratuitas ou bem baratas (voluntários), 1–2×/semana em centros comunitários; também servem para conhecer gente e obter informação útil' }, { n: 2, text: 'são caríssimas e particulares' }, { n: 3, text: 'só existem em Tóquio' }, { n: 4, text: 'são só on-line e pagas' }], answer: 1, explanationPt: 'Há muitas {日本語|にほんご}{教室|きょうしつ} por {市区町村|しくちょうそん}/{国際交流協会|こくさいこうりゅうきょうかい}; geridas por voluntários (無料 ou bem baratas), 1–2×/semana em {公民館}/centros comunitários; formatos variados (turma, grupo, individual) e ótimas para {交流|こうりゅう} local. (TIPS)' },
    { id: 'iro-e1-l9-22', number: 22, prompt: 'Diálogo 09-01: onde e por quanto tempo B estudou japonês?', context: 'A：どこで{日本語|にほんご}を{勉強|べんきょう}しましたか？ B：{日本語|にほんご}{学校|がっこう}で{勉強|べんきょう}しました。 A：どれぐらい{勉強|べんきょう}しましたか？ B：1{年|ねん}ぐらいです。', choices: [{ n: 1, text: 'Numa escola de japonês, por cerca de 1 ano' }, { n: 2, text: 'Com anime, por 2 anos' }, { n: 3, text: 'No ensino médio, por 3 anos' }, { n: 4, text: 'Sozinho, com livros' }], answer: 1, explanationPt: '{日本語|にほんご}{学校|がっこう}で (lugar/meio, Nota ➊) ; どれぐらい→1{年|ねん}ぐらい (〜{間|かん}/período). (Atividade 1 · 聴解スクリプト)' },
    { id: 'iro-e1-l9-23', number: 23, prompt: 'Diálogo 09-02: B é elogiado pelo japonês. Como aprendeu?', context: 'A：{日本語|にほんご}、{上手|じょうず}ね。 B：いえ、まだまだです。 A：どこで{勉強|べんきょう}したの？ B：アニメで{勉強|べんきょう}しました。{日本|にほん}のアニメをたくさん{見|み}ました。', choices: [{ n: 1, text: 'Com anime — assistiu a muitos animes japoneses (responde ao elogio com modéstia: まだまだです)' }, { n: 2, text: 'Numa escola de japonês' }, { n: 3, text: 'No ensino médio' }, { n: 4, text: 'Com um professor particular' }], answer: 1, explanationPt: '{上手|じょうず}ね (elogio) → まだまだです (modéstia); アニメで{勉強|べんきょう}しました (で = meio, Nota ➊). (Atividade 1)' },
    { id: 'iro-e1-l9-24', number: 24, prompt: 'Diálogo 09-03: onde e por quanto tempo B estudou?', context: 'A：{日本語|にほんご}できますか？ B：はい、{少|すこ}し。 A：どこで{勉強|べんきょう}しましたか？ B：{高校|こうこう}で、2{年間|ねんかん}{勉強|べんきょう}しました。', choices: [{ n: 1, text: 'No ensino médio, por 2 anos' }, { n: 2, text: 'Numa escola de japonês, por 1 ano' }, { n: 3, text: 'Com anime' }, { n: 4, text: 'Sozinho, por 2 anos' }], answer: 1, explanationPt: '{高校|こうこう}で、2{年間|ねんかん}{勉強|べんきょう}しました (lugar で + 〜{間|かん} período). (Atividade 1)' },
    { id: 'iro-e1-l9-25', number: 25, prompt: 'Diálogo 09-04: como B estudou japonês?', context: 'A：どこで{日本語|にほんご}を{勉強|べんきょう}しましたか？ B：{自分|じぶん}で{勉強|べんきょう}しました。 A：{自分|じぶん}で？ B：はい、{本|ほん}で{勉強|べんきょう}しました。 A：すごいですね。 B：いえ、そんなことないです。', choices: [{ n: 1, text: 'Por conta própria, estudando por livros (e responde ao elogio com そんなことないです)' }, { n: 2, text: 'Numa escola de japonês' }, { n: 3, text: 'No ensino médio' }, { n: 4, text: 'Com anime e rádio' }], answer: 1, explanationPt: '{自分|じぶん}で (por conta própria) + {本|ほん}で{勉強|べんきょう}しました (で = meio, Nota ➊); すごいですね → そんなことないです (modéstia). (Atividade 1)' },
    { id: 'iro-e1-l9-26', number: 26, prompt: 'Diálogos 09-09/09-10: o que B acha do estudo de japonês?', context: '① B：{大変|たいへん}です。{日本語|にほんご}は{文字|もじ}が{難|むずか}しいです。でも、ひらがなは{好|す}きです。 ② B：とてもおもしろいです。{読|よ}むのは{少|すこ}し{難|むずか}しいです。でも、{会話|かいわ}は{得意|とくい}です。', choices: [{ n: 1, text: '① É difícil; os caracteres são difíceis, mas gosta de hiragana. ② É interessante; ler é meio difícil, mas conversação manda bem' }, { n: 2, text: 'Os dois acham tudo fácil' }, { n: 3, text: 'Os dois desistiram' }, { n: 4, text: 'Os dois só falam de kanji' }], answer: 1, explanationPt: '① {文字|もじ}が{難|むずか}しい (N1はN2が, ➋) + でも、ひらがなは{好|す}き (contraste, ➌). ② {読|よ}むのは{難|むずか}しい。でも、{会話|かいわ}は{得意|とくい} (➋+➌). (Atividade 2 · 聴解スクリプト)' },
    { id: 'iro-e1-l9-27', number: 27, prompt: 'Diálogos 09-11/09-12: o que B diz sobre a gramática e a pronúncia?', context: '③ B：{日本語|にほんご}は{文法|ぶんぽう}が{簡単|かんたん}です。モンゴル{語|ご}と{似|に}ていますから。でも、{話|はな}すのが{大変|たいへん}です。 ④ B：{発音|はつおん}が{苦手|にがて}です。ベトナム{語|ご}とぜんぜん{違|ちが}いますから。でも、{漢字|かんじ}はおもしろいです。', choices: [{ n: 1, text: '③ A gramática é fácil (parecida com o mongol), mas falar é difícil. ④ A pronúncia é difícil (bem diferente do vietnamita), mas kanji é interessante' }, { n: 2, text: 'Os dois acham a gramática difícil' }, { n: 3, text: 'Os dois adoram a pronúncia' }, { n: 4, text: 'Nenhum fala de gramática' }], answer: 1, explanationPt: '③ {文法|ぶんぽう}が{簡単|かんたん}…{似|に}ています + でも、{話|はな}すのが{大変|たいへん}. ④ {発音|はつおん}が{苦手|にがて}…{違|ちが}います + でも、{漢字|かんじ}はおもしろい (➋/➌, motivo com から). (Atividade 2)' },
    { id: 'iro-e1-l9-28', number: 28, prompt: 'Diálogos 09-19/09-20: que ajuda cada pessoa pede?', context: '① A：この{漢字|かんじ}がわかりません。{読|よ}み{方|かた}を{教|おし}えてもらえませんか？ ② A：{私|わたし}のメール、{日本語|にほんご}をチェックしてもらえませんか？ちょっと{自信|じしん}がありません。', choices: [{ n: 1, text: '① Pede para ensinarem a leitura do kanji. ② Pede para checarem o japonês do e-mail (não está confiante)' }, { n: 2, text: '① Pede dinheiro. ② Pede para traduzir' }, { n: 3, text: '① Pede um dicionário. ② Pede o livro' }, { n: 4, text: 'Nenhum pede nada' }], answer: 1, explanationPt: '{読|よ}み{方|かた} (V-方, ➎) を{教|おし}えてもらえませんか (➍); {日本語|にほんご}をチェックしてもらえませんか + {自信|じしん}がありません. (Atividade 3 · 聴解スクリプト)' },
    { id: 'iro-e1-l9-29', number: 29, prompt: 'Diálogos 09-21/09-22: que ajuda cada pessoa pede?', context: '③ A：この{書類|しょるい}の{書|か}き{方|かた}がよくわかりません。もう{一度|いちど}{説明|せつめい}してもらえませんか？ ④ A：それ、{新|あたら}しい{教科書|きょうかしょ}ですか？ちょっと、{見|み}せてもらえませんか？', choices: [{ n: 1, text: '③ Pede para explicarem de novo como preencher o documento. ④ Pede para mostrarem o livro didático novo' }, { n: 2, text: '③ Pede para escreverem por ele. ④ Pede para comprarem o livro' }, { n: 3, text: '③ Pede um dicionário. ④ Pede para guardarem o livro' }, { n: 4, text: 'Nenhum pede ajuda' }], answer: 1, explanationPt: '{書|か}き{方|かた} (V-方, ➎) + もう{一度|いちど}{説明|せつめい}してもらえませんか (➍); {見|み}せてもらえませんか → どうぞ. (Atividade 3)' },
    { id: 'iro-e1-l9-30', number: 30, prompt: 'Fórum on-line (Atividade 4): o que a pessoa (akutk***) pergunta?', context: 'Q：{日本語|にほんご}を{勉強|べんきょう}しています。{聞|き}くのが{難|むずか}しいです。いい{練習|れんしゅう}のし{方|かた}がありますか？{教|おし}えてください。', choices: [{ n: 1, text: 'Tem dificuldade em ouvir/entender e pergunta se há uma boa forma de praticar (いい{練習|れんしゅう}のし{方|かた})' }, { n: 2, text: 'Pergunta onde comprar livros' }, { n: 3, text: 'Pergunta o preço de uma aula' }, { n: 4, text: 'Pede para corrigirem um texto' }], answer: 1, explanationPt: '{聞|き}くのが{難|むずか}しい (N2が com verbo+の, ➋); いい{練習|れんしゅう}のし{方|かた} (V-方, ➎). (Atividade 4 · leitura do fórum)' },
    { id: 'iro-e1-l9-31', number: 31, prompt: 'Fórum on-line (Atividade 4): que conselhos as 4 respostas dão?', context: '① ドラマやアニメをたくさん{見|み}る。 ② {日本人|にほんじん}の{友|とも}だちを{作|つく}ってたくさんおしゃべりする。 ③ {教科書|きょうかしょ}の{会話|かいわ}を{電車|でんしゃ}の{中|なか}で{何回|なんかい}もシャドーイングする。 ④ {市|し}や{町|まち}のボランティア{教室|きょうしつ}（{無料|むりょう}）に{毎週|まいしゅう}{行|い}って{先生|せんせい}と{話|はな}す。', choices: [{ n: 1, text: '① ver muitas séries/animes; ② fazer amigos japoneses e conversar muito; ③ fazer shadowing dos diálogos do livro no trem; ④ ir às aulas voluntárias gratuitas e conversar' }, { n: 2, text: 'Todos dizem para parar de estudar' }, { n: 3, text: 'Todos recomendam só ler kanji' }, { n: 4, text: 'Ninguém respondeu' }], answer: 1, explanationPt: 'Conselhos: ドラマ/アニメを{見|み}る; {友|とも}だちを{作|つく}っておしゃべり; {何回|なんかい}もシャドーイング; ボランティア{教室|きょうしつ}（{無料|むりょう}）で{先生|せんせい}と{話|はな}す. (Atividade 4 · leitura)' },
    { id: 'iro-e1-l9-32', number: 32, prompt: 'Pergunta de abertura da lição: 「{日本語|にほんご}の{勉強|べんきょう}はどうですか？{何|なに}がおもしろいですか？{何|なに}が{難|むずか}しいですか？」 quer dizer:', choices: [{ n: 1, text: 'Como vai seu estudo de japonês? O que você acha interessante? O que acha difícil?' }, { n: 2, text: 'Onde você estuda japonês?' }, { n: 3, text: 'Quem é o seu professor?' }, { n: 4, text: 'Quantas horas você dorme?' }], answer: 1, translationPt: 'Como está indo seu estudo de japonês? O que é interessante? O que é difícil?', explanationPt: '{勉強|べんきょう}はどうですか (como vai o estudo), {何|なに}がおもしろい/{難|むずか}しい. Tema: {日本語|にほんご}{学習|がくしゅう} (aprender japonês). (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 9
const L9_SCRIPTS: Record<string, ScriptItem[]> = {
  '09-01': [
    {
      label: '会話① (09-01) — どこで勉強しましたか',
      setupJa: '{日本語|にほんご}の{学習経験|がくしゅうけいけん}について、4{人|よにん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Quatro pessoas falam sobre sua experiência aprendendo japonês.',
      lines: [
        { speaker: 'A', ja: 'どこで{日本語|にほんご}を{勉強|べんきょう}しましたか？', pt: 'Onde você estudou japonês?' },
        { speaker: 'B', ja: '{日本語|にほんご}{学校|がっこう}で{勉強|べんきょう}しました。', pt: 'Estudei numa escola de japonês.' },
        { speaker: 'A', ja: 'どれぐらい{勉強|べんきょう}しましたか？', pt: 'Por quanto tempo estudou?' },
        { speaker: 'B', ja: '1{年|ねん}ぐらいです。', pt: 'Mais ou menos 1 ano.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '09-02': [
    {
      label: '会話② (09-02) — どこで勉強しましたか',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}、{上手|じょうず}ね。', pt: 'Seu japonês é bom, hein.' },
        { speaker: 'B', ja: 'いえ、まだまだです。', pt: 'Que nada, ainda estou longe.' },
        { speaker: 'A', ja: 'どこで{勉強|べんきょう}したの？', pt: 'Onde você estudou?' },
        { speaker: 'B', ja: 'アニメで{勉強|べんきょう}しました。{日本|にほん}のアニメをたくさん{見|み}ました。', pt: 'Estudei com anime. Assisti a muitos animes japoneses.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
      ],
    },
  ],
  '09-03': [
    {
      label: '会話③ (09-03) — どこで勉強しましたか',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}できますか？', pt: 'Você fala japonês?' },
        { speaker: 'B', ja: 'はい、{少|すこ}し。', pt: 'Sim, um pouco.' },
        { speaker: 'A', ja: 'どこで{勉強|べんきょう}しましたか？', pt: 'Onde estudou?' },
        { speaker: 'B', ja: '{高校|こうこう}で、2{年間|ねんかん}{勉強|べんきょう}しました。', pt: 'No ensino médio, por 2 anos.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '09-04': [
    {
      label: '会話④ (09-04) — どこで勉強しましたか',
      lines: [
        { speaker: 'A', ja: 'どこで{日本語|にほんご}を{勉強|べんきょう}しましたか？', pt: 'Onde você estudou japonês?' },
        { speaker: 'B', ja: '{自分|じぶん}で{勉強|べんきょう}しました。', pt: 'Estudei por conta própria.' },
        { speaker: 'A', ja: '{自分|じぶん}で？', pt: 'Sozinho(a)?' },
        { speaker: 'B', ja: 'はい、{本|ほん}で{勉強|べんきょう}しました。', pt: 'Sim, estudei por livros.' },
        { speaker: 'A', ja: 'すごいですね。', pt: 'Que demais.' },
        { speaker: 'B', ja: 'いえ、そんなことないです。', pt: 'Que isso, nem tanto.' },
      ],
    },
  ],
  '09-09': [
    {
      label: '会話① (09-09) — 勉強はどうですか',
      setupJa: '{日本語|にほんご}の{勉強|べんきょう}について、4{人|よにん}の{人|ひと}が{話|はな}しています。',
      setupPt: 'Quatro pessoas falam sobre o estudo de japonês.',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}の{勉強|べんきょう}はどうですか？', pt: 'Como vai o estudo de japonês?' },
        { speaker: 'B', ja: '{大変|たいへん}です。', pt: 'É puxado.' },
        { speaker: 'A', ja: 'ああ。', pt: 'Ah…' },
        { speaker: 'B', ja: '{日本語|にほんご}は{文字|もじ}が{難|むずか}しいです。', pt: 'No japonês, os caracteres são difíceis.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'É mesmo?' },
        { speaker: 'B', ja: 'でも、ひらがなは{好|す}きです。かわいいですから。', pt: 'Mas eu gosto de hiragana. Porque é fofo.' },
      ],
    },
  ],
  '09-10': [
    {
      label: '会話② (09-10) — 勉強はどうですか',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}の{勉強|べんきょう}はどうですか？', pt: 'Como vai o estudo de japonês?' },
        { speaker: 'B', ja: 'とてもおもしろいです。', pt: 'É muito interessante.' },
        { speaker: 'A', ja: '{難|むずか}しくないですか？', pt: 'Não é difícil?' },
        { speaker: 'B', ja: '{読|よ}むのは{少|すこ}し{難|むずか}しいです。でも、{会話|かいわ}は{得意|とくい}です。', pt: 'Ler é um pouco difícil. Mas conversação eu mando bem.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, sei.' },
      ],
    },
  ],
  '09-11': [
    {
      label: '会話③ (09-11) — 勉強はどうですか',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}の{勉強|べんきょう}はどうですか？　{難|むずか}しくないですか？', pt: 'Como vai o estudo de japonês? Não é difícil?' },
        { speaker: 'B', ja: 'だいじょうぶです。{難|むずか}しくないです。', pt: 'Tranquilo. Não é difícil.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, é?' },
        { speaker: 'B', ja: '{日本語|にほんご}は{文法|ぶんぽう}が{簡単|かんたん}です。モンゴル{語|ご}と{似|に}ていますから。', pt: 'No japonês, a gramática é fácil. Porque é parecida com o mongol.' },
        { speaker: 'A', ja: 'へー。', pt: 'Nossa.' },
        { speaker: 'B', ja: 'でも、{話|はな}すのが{大変|たいへん}です。', pt: 'Mas falar é puxado.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é assim?' },
      ],
    },
  ],
  '09-12': [
    {
      label: '会話④ (09-12) — 勉強はどうですか',
      lines: [
        { speaker: 'A', ja: '{日本語|にほんご}の{勉強|べんきょう}はどうですか？', pt: 'Como vai o estudo de japonês?' },
        { speaker: 'B', ja: 'まあまあです。', pt: 'Mais ou menos.' },
        { speaker: 'A', ja: 'まあまあ？', pt: 'Mais ou menos?' },
        { speaker: 'B', ja: '{私|わたし}は{日本語|にほんご}の{発音|はつおん}が{苦手|にがて}です。ベトナム{語|ご}とぜんぜん{違|ちが}いますから。', pt: 'Eu tenho dificuldade com a pronúncia do japonês. Porque é totalmente diferente do vietnamita.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é assim?' },
        { speaker: 'B', ja: 'でも、{漢字|かんじ}はおもしろいです。たくさん{覚|おぼ}えたいです。', pt: 'Mas kanji é interessante. Quero memorizar muitos.' },
        { speaker: 'A', ja: 'そうですか。', pt: 'Ah, que bom.' },
      ],
    },
  ],
  '09-19': [
    {
      label: '会話① (09-19) — チェックしてもらえませんか',
      setupJa: '4{人|よにん}の{人|ひと}が、{手伝|てつだ}いを{頼|たの}んでいます。',
      setupPt: 'Quatro pessoas estão pedindo ajuda a alguém.',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。', pt: 'Ãhn, com licença.' },
        { speaker: 'B', ja: 'はい、{何|なん}ですか？', pt: 'Sim, o que foi?' },
        { speaker: 'A', ja: 'この{漢字|かんじ}がわかりません。{読|よ}み{方|かた}を{教|おし}えてもらえませんか？', pt: 'Não entendo este kanji. Você poderia me ensinar a leitura?' },
        { speaker: 'B', ja: 'これですか？　「いとう」です。', pt: 'Este aqui? É “Itō”.' },
        { speaker: 'A', ja: 'ああ、いとうさんですね。ありがとうございます。', pt: 'Ah, “Itō-san”, né. Obrigado(a).' },
      ],
    },
  ],
  '09-20': [
    {
      label: '会話② (09-20) — チェックしてもらえませんか',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。', pt: 'Ãhn, com licença.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: '{私|わたし}のメール、{日本語|にほんご}をチェックしてもらえませんか？　ちょっと{自信|じしん}がありません。', pt: 'Você poderia checar o japonês do meu e-mail? Estou um pouco inseguro(a).' },
        { speaker: 'B', ja: 'いいですよ。えーと……。', pt: 'Claro. Deixa ver…' },
      ],
    },
  ],
  '09-21': [
    {
      label: '会話③ (09-21) — チェックしてもらえませんか',
      lines: [
        { speaker: 'A', ja: 'すみません。この{書類|しょるい}の{書|か}き{方|かた}がよくわかりません。もう{一度|いちど}{説明|せつめい}してもらえませんか？', pt: 'Com licença. Não entendo bem como preencher este documento. Você poderia explicar mais uma vez?' },
        { speaker: 'B', ja: 'えーと、これはですねえ……。', pt: 'Hã, então, isto aqui é o seguinte…' },
      ],
    },
  ],
  '09-22': [
    {
      label: '会話④ (09-22) — チェックしてもらえませんか',
      lines: [
        { speaker: 'A', ja: 'すみません。', pt: 'Com licença.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: 'それ、{新|あたら}しい{教科書|きょうかしょ}ですか？', pt: 'Isso é o livro didático novo?' },
        { speaker: 'B', ja: 'そうですよ。', pt: 'É sim.' },
        { speaker: 'A', ja: 'ちょっと、{見|み}せてもらえませんか？', pt: 'Você poderia me mostrar um pouquinho?' },
        { speaker: 'B', ja: 'どうぞ。', pt: 'Pois não.' },
      ],
    },
  ],
}

const lesson9: Section = {
  id: 'lesson-9',
  level: 'elementary1',
  titleJa: '第9課 読み方を教えてもらえませんか？',
  titlePt: 'Lição 9 — Pode me ensinar a leitura?',
  summaryPt: 'Aprender japonês · dizer por qual meio estudou (アニメで{勉強|べんきょう}しました), comentar pontos fortes e fracos (N1はN2が…／{読|よ}むのは{難|むずか}しいでも{会話|かいわ}は{得意|とくい}), pedir ajuda educadamente (チェックしてもらえませんか) e perguntar “como se faz” com V-方 ({読|よ}み{方|かた}／{書|か}き{方|かた}).',
  studyNotes: [
    {
      title: 'Tópico: Aprender japonês (日本語学習)',
      bodyPt:
        '## Can-do\n' +
        '- Falar de forma simples sobre sua experiência aprendendo japonês.\n' +
        '- Dar impressões e comentários sobre o estudo de japonês.\n' +
        '- Pedir ajuda a outra pessoa quando tem dificuldade com o japonês.\n' +
        '- Ler um fórum on-line sobre estudo de japonês e entender os métodos recomendados.\n\n' +
        '💡 Pergunta de abertura: {日本語|にほんご}の{勉強|べんきょう}はどうですか？{何|なに}がおもしろいですか？{何|なに}が{難|むずか}しいですか？',
    },
    {
      title: 'Meio: N で ＜手段＞ (➊)',
      bodyPt:
        'A partícula **で** marca o **meio/método** (além de lugar e transporte):\n\n' +
        '- `アニメで{日本語|にほんご}を{勉強|べんきょう}しました` (estudei por meio de anime); também {本|ほん}で, ラジオで, ネットで, アプリで.\n\n' +
        'A pergunta `どこで…？` pode ser respondida com lugar ou meio. Para perguntar só o **meio**, use **どうやって** (como).',
    },
    {
      title: 'Detalhar: N1はN2が… ／ contraste: N1は〜。でも、N2は〜 (➋➌)',
      bodyPt:
        '**N1はN2が + adjetivo** = o tema é N1; o aspecto avaliado é N2:\n\n' +
        '- `{日本語|にほんご}は{文字|もじ}が{難|むずか}しいです`. Com verbo, use V (辞書形)+の+が: `{日本語|にほんご}は{話|はな}すのが{大変|たいへん}です`.\n\n' +
        '**N1は〜。（でも、）N2は〜** = contrasta duas características (o が vira **は**); でも reforça:\n\n' +
        '- `{読|よ}むのは{難|むずか}しいです。でも、{会話|かいわ}は{得意|とくい}です` / `ひらがなは{好|す}きです。カタカナは{苦手|にがて}です`.',
    },
    {
      title: 'Pedir educado: V-てもらえませんか？ ／ maneira: V-方 (➍➎)',
      bodyPt:
        '**V-てもらえませんか？** = pedir algo de forma **mais educada** que V-てください (liga à テ-forma):\n\n' +
        '- `{日本語|にほんご}をチェックしてもらえませんか？` / `{読|よ}み{方|かた}を{教|おし}えてもらえませんか？` / `{見|み}せてもらえませんか？`\n\n' +
        '**V-方** = a **maneira de** fazer (マス-forma sem ます + 方):\n\n' +
        '- `{書|か}き{方|かた}` (como escrever), `{読|よ}み{方|かた}` (como ler), し{方|かた}/やり{方|かた} (como fazer), `{行|い}き{方|かた}` (como ir), `{使|つか}い{方|かた}` (como usar), `{食|た}べ{方|かた}` (como comer).',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Experiência (Ativ. 1):** どれぐらい (quanto tempo), {上手|じょうず}（な） (bom), 2{年間|ねんかん} (〜{間|かん}=período), {自分|じぶん}で (por conta própria), まだまだです / そんなことないです (respostas modestas a elogio).\n\n' +
        '**Estudar (Ativ. 2):** {簡単|かんたん}（な）, {大変|たいへん}（な）, まあまあ（な）, {似|に}ている, {違|ちが}う, {得意|とくい}（な）, {苦手|にがて}（な）, {文法|ぶんぽう}, {発音|はつおん}, {文字|もじ} (ひらがな/カタカナ/{漢字|かんじ}), {会話|かいわ}, {覚|おぼ}える. **Ajuda (Ativ. 3):** {漢字|かんじ}を{教|おし}える, {辞書|じしょ}を{貸|か}す, {本|ほん}を{見|み}せる, チェックする, {説明|せつめい}する, {紙|かみ}に{書|か}く, {簡単|かんたん}なことばで{言|い}う, ゆっくり{話|はな}す; メール, {書類|しょるい}, {教科書|きょうかしょ}, {自信|じしん}がありません. **Fórum (Ativ. 4):** {練習|れんしゅう}, {探|さが}す, {何回|なんかい}も, {教室|きょうしつ}, {無料|むりょう}, {先生|せんせい}.\n\n' +
        '**Kanji da lição:** {高校|こうこう}, {大学|だいがく}, {練習|れんしゅう}, {漢字|かんじ}, {無料|むりょう}, {言|い}う, {書|か}く, {貸|か}す, {教|おし}える, {説明|せつめい}する.\n\n' +
        '📌 **TIPS:** **アニメで{勉強|べんきょう}** (muitos começam pelo anime; on-line, com legendas; treina {聴解|ちょうかい}/{発音|はつおん}); **{地域|ちいき}の{日本語|にほんご}{教室|きょうしつ}** (aulas de prefeituras/associações, gratuitas ou baratas, por voluntários, 1–2×/semana em {公民館}; bom para {交流|こうりゅう} local).',
    },
  ],
  groups: [lesson9Group],
  audios: attachScripts(9, L9_SCRIPTS),
}

// ---- Lição 10: 日本語教室に参加したいんですが… (tópico 日本語学習) ----------
const lesson10Group: ExerciseGroup = {
  id: 'iro-e1-l10',
  title: '日本語教室に参加したいんですが…',
  subtitlePt: 'Aprender japonês · perguntar num guichê sobre um curso (V-てみたいんですが…), falar de frequência (週に1回), oferecer ajuda (V-ましょうか), pedir o sentido de uma palavra (〜はどういう意味ですか) e dizer quando algo se deu (Nのとき)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l10-1', number: 1, prompt: '「{合気道|あいきどう}をやってみたいんですが…」 (V-てみたいんですが…) serve para (Nota ➊):', choices: [{ n: 1, text: 'dizer que quer EXPERIMENTAR algo novo (pela 1ª vez) e perguntar/consultar sobre isso' }, { n: 2, text: 'dizer que já fez aquilo muitas vezes' }, { n: 3, text: 'recusar um convite' }, { n: 4, text: 'dar uma ordem' }], answer: 1, translationPt: 'Eu queria experimentar fazer aikidô…', explanationPt: 'V-てみたいんですが… comunica o desejo de tentar algo novo pela primeira vez e abre espaço para perguntar/consultar o interlocutor. Aqui a pessoa nunca fez aikidô e quer experimentar. (Nota ➊)' },
    { id: 'iro-e1-l10-2', number: 2, prompt: 'Diferença entre V-たいんですが… (Lição 8) e V-てみたいんですが… (Nota ➊):', choices: [{ n: 1, text: 'V-たいんですが… = quero fazer; V-てみたいんですが… = quero EXPERIMENTAR/tentar (algo novo)' }, { n: 2, text: 'são exatamente iguais' }, { n: 3, text: 'V-てみたい é mais ríspido' }, { n: 4, text: 'V-てみたい é só passado' }], answer: 1, explanationPt: 'Na Lição 8 vimos V-たいんですが… (transmitir um desejo e pedir um favor). V-てみたいんですが… acrescenta a ideia de “experimentar pela primeira vez”: {書道教室|しょどうきょうしつ}に{参加|さんか}してみたいんですが…. (Nota ➊)' },
    { id: 'iro-e1-l10-3', number: 3, prompt: 'Como se forma V-てみたい (Nota ➊)?', choices: [{ n: 1, text: 'テ-forma do verbo + みたい (やって→やってみたい、{参加|さんか}して→{参加|さんか}してみたい)' }, { n: 2, text: 'forma de dicionário + みたい' }, { n: 3, text: 'forma マス + みたい' }, { n: 4, text: 'forma タ + みたい' }], answer: 1, explanationPt: 'V-てみる liga-se à テ-forma (やって、{参加|さんか}して、{食|た}べて…) + みたい(んですが…). Ex.: 「{書道教室|しょどうきょうしつ}に{参加|さんか}してみたいんですが…」「{体験教室|たいけんきょうしつ}ですか？それとも{毎週|まいしゅう}のコースですか？」 (Nota ➊)' },
    { id: 'iro-e1-l10-4', number: 4, prompt: '「{日本語|にほんご}クラスは{週|しゅう}に1{回|かい}です」 (【期間】に〜回) expressa (Nota ➋):', choices: [{ n: 1, text: 'frequência: quantas vezes em cada período (1 vez por semana)' }, { n: 2, text: 'a duração total do curso' }, { n: 3, text: 'o horário de início' }, { n: 4, text: 'o preço' }], answer: 1, translationPt: 'A aula de japonês é uma vez por semana.', explanationPt: '【período】に〜{回|かい} indica frequência. Antes de に vêm períodos: {週|しゅう}／〜{週間|しゅうかん}、{月|つき}／〜か{月|げつ}、{年|ねん}／〜{年|ねん}. 〜{回|かい} vem depois do número (1{回|かい}、2{回|かい}…). (Nota ➋)' },
    { id: 'iro-e1-l10-5', number: 5, prompt: 'Sobre 【期間】に〜回 (Nota ➋), o que também é verdade?', choices: [{ n: 1, text: 'o に às vezes é omitido; com 〜ぐらい indica frequência aproximada ({月|つき}に2{回|かい}、4{年|ねん}に1{回|かい})' }, { n: 2, text: 'o に nunca pode ser omitido' }, { n: 3, text: '〜回 vem sempre antes do número' }, { n: 4, text: 'só funciona com horas' }], answer: 1, explanationPt: 'O に de 【期間】に pode ser omitido; {回|かい}+ぐらい dá frequência aproximada. Ex.: {月|つき}に2{回|かい}、{国際交流会|こくさいこうりゅうかい}があります／オリンピックは4{年|ねん}に1{回|かい}あります. (Nota ➋)' },
    { id: 'iro-e1-l10-6', number: 6, prompt: '「{教室|きょうしつ}のチラシを{持|も}って{来|き}ましょうか？」 (V-ましょうか？) serve para (Nota ➌):', choices: [{ n: 1, text: 'OFERECER-SE para fazer algo pelo outro (quer que eu traga o folheto?)' }, { n: 2, text: 'pedir permissão para sair' }, { n: 3, text: 'recusar um pedido' }, { n: 4, text: 'perguntar o preço' }], answer: 1, translationPt: 'Quer que eu traga o folheto da aula?', explanationPt: 'V-ましょうか？ oferece ajuda/serviço ao outro. Aqui, oferecer-se para trazer o folheto a quem quer informação. Forma: V-ます → V-ましょうか？ ({持|も}って{来|き}ます→{持|も}って{来|き}ましょうか？). (Nota ➌)' },
    { id: 'iro-e1-l10-7', number: 7, prompt: 'Exemplo de oferta com V-ましょうか？ (Nota ➌):', choices: [{ n: 1, text: 'よかったら、{手伝|てつだ}いましょうか？ → ありがとうございます。' }, { n: 2, text: '{手伝|てつだ}ってください！ (ordem)' }, { n: 3, text: '{手伝|てつだ}いましたか？' }, { n: 4, text: '{手伝|てつだ}いたいです' }], answer: 1, explanationPt: 'よかったら、{手伝|てつだ}いましょうか？ = se quiser, eu ajudo? — oferta. A resposta típica é o agradecimento: ありがとうございます。 (Nota ➌)' },
    { id: 'iro-e1-l10-8', number: 8, prompt: '「すみません。「ぼご」は、どういう{意味|いみ}ですか？」 (聞き返し / asking again) é usada para (Nota ➍):', choices: [{ n: 1, text: 'pedir de novo o SENTIDO de uma palavra que não se entendeu' }, { n: 2, text: 'pedir desculpas por um erro' }, { n: 3, text: 'agradecer pela ajuda' }, { n: 4, text: 'encerrar a conversa' }], answer: 1, translationPt: 'Com licença. O que significa “bogo”?', explanationPt: 'Há dois tipos de 聞き返し: ① perguntar o que a pessoa disse, e ② perguntar o sentido. Esta lição trata do ②: cita-se a palavra e usa-se 「〜はどういう{意味|いみ}ですか？」. (Nota ➍)' },
    { id: 'iro-e1-l10-9', number: 9, prompt: 'Outras formas de “asking again” (Nota ➍):', choices: [{ n: 1, text: '「〜は{何|なん}ですか？」, ou repetir a palavra desconhecida com entonação ascendente (「どうぎ？」)' }, { n: 2, text: 'falar mais alto a própria frase' }, { n: 3, text: 'mudar de assunto' }, { n: 4, text: 'responder “はい” sem entender' }], answer: 1, explanationPt: 'Além de 〜はどういう{意味|いみ}ですか？, dá para usar 〜は{何|なん}ですか？ ou simplesmente repetir a palavra que não se entendeu com entonação subindo (どうぎ？). (Nota ➍)' },
    { id: 'iro-e1-l10-10', number: 10, prompt: 'No exemplo 「{合気道|あいきどう}の{道着|どうぎ}、{持|も}ってますか？」「どうぎ？」「{合気道|あいきどう}の{服|ふく}です」, o que aconteceu (Nota ➍)?', choices: [{ n: 1, text: 'B não entendeu 「{道着|どうぎ}」 e repetiu com entonação ascendente; A explicou o sentido' }, { n: 2, text: 'B recusou emprestar o dôgi' }, { n: 3, text: 'A pediu desculpas' }, { n: 4, text: 'os dois falaram de comida' }], answer: 1, explanationPt: 'Repetir a palavra com entonação ascendente (「どうぎ？」) é uma forma de 聞き返し; A então explica: 「{合気道|あいきどう}の{服|ふく}です」. (Nota ➍)' },
    { id: 'iro-e1-l10-11', number: 11, prompt: '「{高校|こうこう}のとき、{少|すこ}し{日本語|にほんご}を{勉強|べんきょう}しました」 (Nのとき、〜) significa (Nota ➎):', choices: [{ n: 1, text: 'indica QUANDO algo aconteceu: quando eu estava no ensino médio, estudei um pouco de japonês' }, { n: 2, text: 'indica onde a pessoa estudou' }, { n: 3, text: 'indica com quem estudou' }, { n: 4, text: 'indica por quanto tempo' }], answer: 1, translationPt: 'Quando eu estava no ensino médio, estudei um pouco de japonês.', explanationPt: 'Nのとき、〜 marca o momento em que a ação da oração seguinte ocorre. {高校|こうこう}のとき = quando (eu) estava no ensino médio. (Nota ➎)' },
    { id: 'iro-e1-l10-12', number: 12, prompt: 'Como 「とき」 se liga a adjetivos (Nota ➎)?', choices: [{ n: 1, text: 'ナA + な + とき ({暇|ひま}なとき) ／ イA + い + とき ({若|わか}いとき) ／ N + の + とき ({高校|こうこう}のとき)' }, { n: 2, text: 'sempre com の, inclusive adjetivos' }, { n: 3, text: 'adjetivos não podem usar とき' }, { n: 4, text: 'ナA + の + とき' }], answer: 1, explanationPt: 'Esta lição mostra só com substantivo (Nのとき), mas とき também liga a adjetivos: ナA-なとき ({暇|ひま}なとき), イA-いとき ({若|わか}いとき). (Nota ➎)' },
    { id: 'iro-e1-l10-13', number: 13, prompt: 'Exemplos de 〜とき (Nota ➎):', choices: [{ n: 1, text: '{買|か}い{物|もの}のとき、お{店|みせ}の{人|ひと}と{日本語|にほんご}で{話|はな}します ／ {暇|ひま}なとき、{日本|にほん}のドラマを{見|み}ます ／ {若|わか}いとき、いろいろな{国|くに}のことばを{習|なら}いました' }, { n: 2, text: '{買|か}い{物|もの}とき／{暇|ひま}とき／{若|わか}とき' }, { n: 3, text: '{買|か}い{物|もの}でとき／{暇|ひま}でとき' }, { n: 4, text: '{買|か}い{物|もの}にとき／{暇|ひま}にとき' }], answer: 1, explanationPt: '{買|か}い{物|もの}のとき (N+の), {暇|ひま}なとき (ナA+な), {若|わか}いとき (イA+い). (Nota ➎ · 例)' },
    { id: 'iro-e1-l10-14', number: 14, prompt: 'Vocabulário (Atividade 2): 「{参加|さんか}する／クラス／{必要|ひつよう}（な）／{最初|さいしょ}／{空|あ}いている／{払|はら}う」 significam:', choices: [{ n: 1, text: 'participar/inscrever-se ／ turma/aula ／ necessário ／ no começo/primeiro ／ ter vaga (estar livre) ／ pagar' }, { n: 2, text: 'sair ／ professor ／ proibido ／ no fim ／ estar cheio ／ receber' }, { n: 3, text: 'faltar ／ sala ／ caro ／ ontem ／ fechar ／ comprar' }, { n: 4, text: 'desistir ／ prova ／ grátis ／ depois ／ abrir ／ devolver' }], answer: 1, explanationPt: '{参加|さんか}する (participar), クラス (turma), {必要|ひつよう}（な） (necessário: {服|ふく}は{必要|ひつよう}ですか？), {最初|さいしょ} (no começo), {空|あ}いている (ter vaga/estar livre: まだ{空|あ}いていますか？), {払|はら}う (pagar: 800{円|えん}{払|はら}ってください). (Atividade 2 · ことば)' },
    { id: 'iro-e1-l10-15', number: 15, prompt: 'Mais vocabulário (Atividade 2): 「{少々|しょうしょう}お{待|ま}ちください／もういっぱいです／{興味|きょうみ}がある／それとも／{用意|ようい}する／{全部|ぜんぶ}」 significam:', choices: [{ n: 1, text: 'aguarde um momento ／ já está lotado/cheio ／ ter interesse ／ ou (então) ／ preparar/providenciar ／ tudo' }, { n: 2, text: 'venha aqui ／ tem vaga ／ não gostar ／ e ／ esquecer ／ nada' }, { n: 3, text: 'sente-se ／ está aberto ／ desistir ／ mas ／ vender ／ metade' }, { n: 4, text: 'desculpe ／ acabou ／ pagar ／ porque ／ comprar ／ um pouco' }], answer: 1, explanationPt: '{少々|しょうしょう}お{待|ま}ちください (aguarde um momento), もういっぱいです (já está cheio/lotado), {興味|きょうみ}がある (ter interesse: {書道|しょどう}に{興味|きょうみ}があります), それとも (ou então), {用意|ようい}する (preparar/providenciar: {全部|ぜんぶ}こちらで{用意|ようい}します), {全部|ぜんぶ} (tudo). (Atividade 2 · ことば)' },
    { id: 'iro-e1-l10-16', number: 16, prompt: 'Vocabulário do cartaz/cursos (Atividade 1): 「{公民館|こうみんかん}／{書道|しょどう}／{合気道|あいきどう}／{体験教室|たいけんきょうしつ}／{費用|ひよう}／{問|と}い{合|あ}わせ」 significam:', choices: [{ n: 1, text: 'centro comunitário ／ caligrafia ／ aikidô ／ aula experimental ／ custo/despesa ／ contato (para informações)' }, { n: 2, text: 'biblioteca ／ pintura ／ judô ／ aula regular ／ horário ／ inscrição' }, { n: 3, text: 'ginásio ／ origami ／ karatê ／ prova ／ desconto ／ endereço' }, { n: 4, text: 'escola ／ chá ／ sumô ／ palestra ／ data ／ telefone' }], answer: 1, explanationPt: '{公民館|こうみんかん} (centro comunitário), {書道|しょどう} (caligrafia), {合気道|あいきどう} (aikidô), {体験教室|たいけんきょうしつ} (aula experimental/avulsa), {費用|ひよう} (custo), {問|と}い{合|あ}わせ (contato p/ informações). Também: {毎月|まいつき}/{第3|だいさん}〜 (toda 3ª…), {日時|にちじ} (data e hora), テキスト{代|だい} (custo do material, 〜{代|だい}). (Atividade 1)' },
    { id: 'iro-e1-l10-17', number: 17, prompt: 'Os kanji 「{午前|ごぜん}／{午後|ごご}／{教科書|きょうかしょ}／{教室|きょうしつ}」 lêem-se:', choices: [{ n: 1, text: 'ごぜん (de manhã) ／ ごご (de tarde) ／ きょうかしょ (livro didático) ／ きょうしつ (sala/aula)' }, { n: 2, text: 'ごぜん ／ ごご ／ きょうかしょ ／ きょうしゅう' }, { n: 3, text: 'うまえ ／ うしろ ／ おしえがき ／ きょうしつ' }, { n: 4, text: 'ごぜん ／ ごこう ／ きょうかぼん ／ きょうしつ' }], answer: 1, explanationPt: '{午前|ごぜん} (manhã/a.m.), {午後|ごご} (tarde/p.m.), {教科書|きょうかしょ} (livro didático), {教室|きょうしつ} (sala de aula). (漢字のことば)' },
    { id: 'iro-e1-l10-18', number: 18, prompt: 'Os kanji 「{先生|せんせい}／{全部|ぜんぶ}／〜{回|かい}」 lêem-se:', choices: [{ n: 1, text: 'せんせい (professor) ／ ぜんぶ (tudo) ／ 〜かい (〜vezes)' }, { n: 2, text: 'せんせい ／ ぜんぶ ／ 〜まわり' }, { n: 3, text: 'さきいき ／ ぜんぶん ／ 〜かい' }, { n: 4, text: 'せんせい ／ ぜんぶ ／ 〜ど' }], answer: 1, explanationPt: '{先生|せんせい} (professor), {全部|ぜんぶ} (tudo/o total), 〜{回|かい} (contador de vezes: 1{回|かい}、5{回|かい}). (漢字のことば)' },
    { id: 'iro-e1-l10-19', number: 19, prompt: 'Os kanji 「{参加|さんか}する／{用意|ようい}する」 lêem-se e significam:', choices: [{ n: 1, text: 'さんかする (participar) ／ よういする (preparar/providenciar)' }, { n: 2, text: 'さんかする ／ ようじする' }, { n: 3, text: 'さんがする ／ よういする' }, { n: 4, text: 'まいかする ／ もちいする' }], answer: 1, explanationPt: '{参加|さんか}する (participar), {用意|ようい}する (preparar/providenciar). Kanji da lição: {午前|ごぜん}・{午後|ごご}・{教科書|きょうかしょ}・{教室|きょうしつ}・{先生|せんせい}・{全部|ぜんぶ}・〜{回|かい}・{参加|さんか}する・{用意|ようい}する. (漢字)' },
    { id: 'iro-e1-l10-20', number: 20, prompt: '📌 TIPS — {公民館|こうみんかん} (centros comunitários):', choices: [{ n: 1, text: 'espaços públicos do bairro (salas, cozinha etc.) que se alugam barato; oferecem aulas (japonês, culinária), cursos e atividades de grupos locais — ótimos para aprender e conhecer gente' }, { n: 2, text: 'são hotéis caros para turistas' }, { n: 3, text: 'são lojas de conveniência' }, { n: 4, text: 'só funcionam à noite e são particulares' }], answer: 1, explanationPt: '{公民館|こうみんかん} = instalação pública de educação social do bairro (salas japonesas, de reunião, cozinha, oficina…). Aluga-se barato; abriga {日本語教室|にほんごきょうしつ}, {料理教室|りょうりきょうしつ}, cursos e clubes. Bom para estudar e criar laços locais. (TIPS)' },
    { id: 'iro-e1-l10-21', number: 21, prompt: '📌 TIPS — {料理教室|りょうりきょうしつ} (aulas de culinária):', choices: [{ n: 1, text: 'são populares no Japão; há em centros comunitários e também de empresas de alimentos/gás; variam (aula avulsa, pratos regionais, sazonais) em duração, preço e tipo de comida' }, { n: 2, text: 'só existem em restaurantes de luxo' }, { n: 3, text: 'são sempre gratuitas e diárias' }, { n: 4, text: 'só ensinam pratos estrangeiros' }], answer: 1, explanationPt: 'Aulas de culinária estão entre os passatempos mais populares; ocorrem em {公民館}/centros comunitários ou por empresas de alimentos/gás. Há aula avulsa ({体験教室|たいけんきょうしつ}), de {郷土料理|きょうどりょうり} regional, sazonais — variando em dias, preço e prato. (TIPS)' },
    { id: 'iro-e1-l10-22', number: 22, prompt: '📌 TIPS — {書道|しょどう} (caligrafia):', choices: [{ n: 1, text: 'arte de escrever kanji com pincel e tinta; ensinada desde o primário (tarefa de {書|か}き{初|ぞ}め no Ano-Novo, concursos na escola); há aulas em centros comunitários para crianças e adultos' }, { n: 2, text: 'é uma dança tradicional' }, { n: 3, text: 'é proibida a estrangeiros' }, { n: 4, text: 'usa-se apenas computador' }], answer: 1, explanationPt: '{書道|しょどう} = escrever caracteres com pincel ({筆|ふで}) e tinta ({墨|すみ}), valorizando a beleza. No Japão entra no currículo desde o {小学校|しょうがっこう} (tarefa de {書|か}き{初|ぞ}め no Ano-Novo, concursos). Muitas aulas em {公民館}, de crianças a adultos. (TIPS)' },
    { id: 'iro-e1-l10-23', number: 23, prompt: '📌 TIPS — {合気道|あいきどう} (aikidô):', choices: [{ n: 1, text: 'arte marcial japonesa (como judô e karatê), fundada por Ueshiba Morihei; usa a força do oponente para se defender, sem competições e sem exigir muita força — popular entre mulheres e idosos' }, { n: 2, text: 'é um esporte com bola' }, { n: 3, text: 'foi inventada nos EUA' }, { n: 4, text: 'exige muita força física e tem campeonatos' }], answer: 1, explanationPt: '{合気道|あいきどう} = arte marcial ({武道|ぶどう}) ao lado de {柔道|じゅうどう}/{空手|からて}, criada por {植芝盛平|うえしばもりへい} a partir de artes marciais antigas (~1,6 milhão de praticantes no mundo). Técnica de {護身|ごしん} (defesa) usando a força do oponente; sem {試合|しあい}, sem exigir força — popular entre mulheres e idosos. (TIPS)' },
    { id: 'iro-e1-l10-24', number: 24, prompt: 'Diálogo 10-01 (guichê): quando há aula de japonês e em que horário?', context: 'A：{日本語教室|にほんごきょうしつ}に{参加|さんか}したいんですが……。いつありますか？ B：{水曜日|すいようび}の{教室|きょうしつ}と、{土曜日|どようび}の{教室|きょうしつ}があります。 A：{何時|なんじ}からですか？ B：{水曜日|すいようび}は{夜|よる}の7{時|じ}から8{時半|じはん}、{土曜日|どようび}は{朝|あさ}の10{時|じ}から11{時半|じはん}です。', choices: [{ n: 1, text: 'Há turma de quarta (noite, 19h–20h30) e de sábado (manhã, 10h–11h30)' }, { n: 2, text: 'Só de domingo à tarde' }, { n: 3, text: 'Toda noite, das 18h às 20h' }, { n: 4, text: 'Só de manhã, de segunda a sexta' }], answer: 1, explanationPt: '{水曜日|すいようび}は{夜|よる}の7{時|じ}〜8{時半|じはん}、{土曜日|どようび}は{朝|あさ}の10{時|じ}〜11{時半|じはん}. A escolhe a turma da noite. (Atividade 2 · 聴解スクリプト 10-01)' },
    { id: 'iro-e1-l10-25', number: 25, prompt: 'Diálogo 10-02 (合気道): a roupa de aikidô é necessária no começo?', context: 'A：{合気道|あいきどう}をやってみたいんですが……。 … A：えーと、{合気道|あいきどう}の{服|ふく}は{必要|ひつよう}ですか？ B：{服|ふく}ですか？　{最初|さいしょ}はTシャツでもだいじょうぶですよ。あとは{先生|せんせい}に{聞|き}いてください。', choices: [{ n: 1, text: 'No começo pode ser de camiseta; o resto, perguntar ao professor' }, { n: 2, text: 'É obrigatório comprar a roupa antes' }, { n: 3, text: 'Não pode treinar de camiseta' }, { n: 4, text: 'A roupa é emprestada pela escola' }], answer: 1, explanationPt: '{最初|さいしょ}はTシャツでもだいじょうぶ (no começo, camiseta serve); あとは{先生|せんせい}に{聞|き}いてください. Note a oferta/consulta 「やってみたいんですが…」 (➊). (Atividade 2 · 10-02)' },
    { id: 'iro-e1-l10-26', number: 26, prompt: 'Diálogo 10-03 (料理教室): o que B responde sobre dia e preço?', context: 'B：{料理教室|りょうりきょうしつ}ですね。{少々|しょうしょう}お{待|ま}ちください。あ、{金曜日|きんようび}のクラスは、もういっぱいです。{木曜日|もくようび}のクラスでもいいですか？ A：はい。だいじょうぶです。あのう、いくらですか？ B：1{回|かい}800{円|えん}{払|はら}ってください。', choices: [{ n: 1, text: 'A turma de sexta está lotada; oferece a de quinta; custa 800 ienes por aula' }, { n: 2, text: 'A turma de sexta tem vaga; é grátis' }, { n: 3, text: 'Não há turmas disponíveis' }, { n: 4, text: 'Custa 800 ienes por mês' }], answer: 1, explanationPt: '{金曜日|きんようび}はもういっぱい→{木曜日|もくようび}でもいいですか？; 1{回|かい}800{円|えん}{払|はら}ってください (frequência/preço por vez, ➋ + {払|はら}う). (Atividade 2 · 10-03)' },
    { id: 'iro-e1-l10-27', number: 27, prompt: 'Diálogo 10-04 (書道): A quer a aula experimental — precisa levar material?', context: 'A：{私|わたし}は{書道|しょどう}に{興味|きょうみ}があります。{書道教室|しょどうきょうしつ}に{参加|さんか}してみたいんですが……。 B：{体験教室|たいけんきょうしつ}ですか？　それとも{毎週|まいしゅう}のコースですか？ A：{体験教室|たいけんきょうしつ}です。…{道具|どうぐ}は{必要|ひつよう}ですか？ B：{全部|ぜんぶ}こちらで{用意|ようい}しますから、だいじょうぶですよ。', choices: [{ n: 1, text: 'Quer a aula experimental; não precisa de material — a escola providencia tudo' }, { n: 2, text: 'Quer o curso semanal; precisa comprar tudo' }, { n: 3, text: 'Precisa trazer o próprio pincel e tinta' }, { n: 4, text: 'Não há aula experimental' }], answer: 1, explanationPt: '{参加|さんか}してみたいんですが (➊); {体験教室|たいけんきょうしつ} ou {毎週|まいしゅう}のコース (それとも = ou); {道具|どうぐ}は{全部|ぜんぶ}こちらで{用意|ようい}します (a escola prepara tudo). (Atividade 2 · 10-04)' },
    { id: 'iro-e1-l10-28', number: 28, prompt: 'Diálogo 10-06 (Sunil↔Yuliya): como é a aula de japonês da Yuliya?', context: 'スニル：{週|しゅう}に{何回|なんかい}ありますか？ ユーリヤ：{私|わたし}のクラスは{週|しゅう}に1{回|かい}です。{火曜日|かようび}の{夜|よる}です。… スニル：いくらですか？ ユーリヤ：ただです。でも、{教科書|きょうかしょ}は{自分|じぶん}で{買|か}います。', choices: [{ n: 1, text: '1 vez por semana, terça à noite; é de graça, mas o livro é por conta própria' }, { n: 2, text: '3 vezes por semana; paga 800 ienes' }, { n: 3, text: 'Só aos sábados de manhã; o livro é grátis' }, { n: 4, text: 'Todo dia; é muito caro' }], answer: 1, explanationPt: '{週|しゅう}に1{回|かい} (frequência, ➋), {火曜日|かようび}の{夜|よる}; ただ (de graça) でも {教科書|きょうかしょ}は{自分|じぶん}で{買|か}います. (Atividade 3 · 聴解スクリプト 10-06)' },
    { id: 'iro-e1-l10-29', number: 29, prompt: 'Diálogo 10-06: no fim, o que a Yuliya se oferece para fazer?', context: 'ユーリヤ：{今度|こんど}、{教室|きょうしつ}のチラシを{持|も}って{来|き}ましょうか？ スニル：ありがとうございます。じゃあ、お{願|ねが}いします。', choices: [{ n: 1, text: 'Oferece-se para trazer o folheto da aula (V-ましょうか？) e Sunil aceita agradecendo' }, { n: 2, text: 'Pede que Sunil traga o folheto' }, { n: 3, text: 'Recusa-se a ajudar' }, { n: 4, text: 'Pergunta o preço do folheto' }], answer: 1, explanationPt: 'チラシを{持|も}って{来|き}ましょうか？ = oferta (➌). Resposta: ありがとうございます。じゃあ、お{願|ねが}いします (aceita). (Atividade 3 · 10-06)' },
    { id: 'iro-e1-l10-30', number: 30, prompt: 'Diálogo 10-09 (entrevista 岩本↔プイ): o que acontece com a palavra 「{母語|ぼご}」 e onde Pui já estudou?', context: '{岩本|いわもと}：{母語|ぼご}は？ プイ：すみません。「ぼご」は、どういう{意味|いみ}ですか？ {岩本|いわもと}：…{子|こ}どものときからいつも{使|つか}っていることばです。 プイ：ああ、タイ{語|ご}です。 …プイ：{高校|こうこう}のとき、{少|すこ}し{勉強|べんきょう}しました。それから、{国|くに}の{日本語学校|にほんごがっこう}で{半年|はんとし}、{勉強|べんきょう}しました。', choices: [{ n: 1, text: 'Pui não entendeu “bogo” e perguntou o sentido (➍); estudou um pouco no ensino médio e meio ano numa escola de japonês no seu país' }, { n: 2, text: 'Pui sabia a palavra; nunca estudou japonês' }, { n: 3, text: 'Pui recusou responder; estudou na universidade 3 anos' }, { n: 4, text: 'Pui é professor; estudou só com anime' }], answer: 1, explanationPt: '「ぼご」はどういう{意味|いみ}ですか？ (聞き返し, ➍); {高校|こうこう}のとき{少|すこ}し{勉強|べんきょう}しました (Nのとき, ➎) + {国|くに}の{日本語学校|にほんごがっこう}で{半年|はんとし}. (Atividade 4 · 聴解スクリプト 10-09)' },
    { id: 'iro-e1-l10-31', number: 31, prompt: 'Atividade 1 (cartaz “ときわだより” do {公民館|こうみんかん}): o que dá para ler nele?', context: 'O folheto lista cursos do centro comunitário: {料理教室|りょうりきょうしつ}, {書道教室|しょどうきょうしつ}, {合気道|あいきどう}の{体験教室|たいけんきょうしつ}, にほんごきょうしつ — cada um com {日時|にちじ} (曜日・時間), {場所|ばしょ}, {費用|ひよう} e {問|と}い{合|あ}わせ.', choices: [{ n: 1, text: 'O dia/horário, o local e o custo de cada curso (e o contato para informações)' }, { n: 2, text: 'Só o nome dos professores' }, { n: 3, text: 'O cardápio do restaurante do bairro' }, { n: 4, text: 'A previsão do tempo' }], answer: 1, explanationPt: 'No cartaz ({公民館}/「ときわだより」) lê-se {日時|にちじ} (曜日・時間), {場所|ばしょ}, {費用|ひよう} (com テキスト{代|だい}/問い合わせ). Objetivo (Can-do 31): captar local, data e horário. (Atividade 1)' },
    { id: 'iro-e1-l10-32', number: 32, prompt: 'Pergunta de abertura da lição: 「あなたは{習|なら}い{事|ごと}をしたことがありますか？{何|なに}をしたことがありますか？」 quer dizer:', choices: [{ n: 1, text: 'Você já fez algum curso/atividade (de aprendizado)? O que você já fez?' }, { n: 2, text: 'Onde você mora agora?' }, { n: 3, text: 'Quantas vezes por semana você trabalha?' }, { n: 4, text: 'Você gosta de cozinhar?' }], answer: 1, translationPt: 'Você já fez algum curso/atividade? O que você já fez?', explanationPt: '{習|なら}い{事|ごと} = curso/atividade de aprendizado (culinária, caligrafia, esporte…). 〜したことがありますか (experiência, Lição 8). Tema: {日本語学習|にほんごがくしゅう}. (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 10
const L10_SCRIPTS: Record<string, ScriptItem[]> = {
  '10-01': [
    {
      label: '会話① (10-01) — 日本語教室はいつ？',
      setupJa: '{受付|うけつけ}で、{習|なら}い{事|ごと}について{質問|しつもん}しています。',
      setupPt: 'No balcão de atendimento, alguém pergunta sobre um curso.',
      lines: [
        { speaker: 'A', ja: 'すみません。', pt: 'Com licença.' },
        { speaker: 'B', ja: 'はい。', pt: 'Pois não.' },
        { speaker: 'A', ja: '{日本語教室|にほんごきょうしつ}に{参加|さんか}したいんですが……。いつありますか？', pt: 'Eu queria participar da aula de japonês… Quando tem?' },
        { speaker: 'B', ja: '{日本語教室|にほんごきょうしつ}ですね？　{水曜日|すいようび}の{教室|きょうしつ}と、{土曜日|どようび}の{教室|きょうしつ}があります。', pt: 'Aula de japonês, né? Tem a turma de quarta e a de sábado.' },
        { speaker: 'A', ja: '{何時|なんじ}からですか？', pt: 'A partir de que horas?' },
        { speaker: 'B', ja: '{水曜日|すいようび}は{夜|よる}の7{時|じ}から8{時半|じはん}、{土曜日|どようび}は{朝|あさ}の10{時|じ}から11{時半|じはん}です。', pt: 'Quarta é das 19h às 20h30 (à noite); sábado é das 10h às 11h30 (de manhã).' },
        { speaker: 'A', ja: 'じゃあ、{夜|よる}のクラスがいいです。', pt: 'Então prefiro a turma da noite.' },
      ],
    },
  ],
  '10-02': [
    {
      label: '会話② (10-02) — 合気道をやってみたいんですが',
      lines: [
        { speaker: 'A', ja: 'すみません。{合気道|あいきどう}をやってみたいんですが……。', pt: 'Com licença. Eu queria experimentar fazer aikidô…' },
        { speaker: 'B', ja: 'あ、{合気道教室|あいきどうきょうしつ}ですね。', pt: 'Ah, a aula de aikidô, né.' },
        { speaker: 'A', ja: 'まだ、{空|あ}いていますか？', pt: 'Ainda tem vaga?' },
        { speaker: 'B', ja: 'だいじょうぶですよ。', pt: 'Tem sim, sem problema.' },
        { speaker: 'A', ja: 'えーと、{合気道|あいきどう}の{服|ふく}は{必要|ひつよう}ですか？', pt: 'Hum… a roupa de aikidô é necessária?' },
        { speaker: 'B', ja: '{服|ふく}ですか？　{最初|さいしょ}はTシャツでもだいじょうぶですよ。あとは{先生|せんせい}に{聞|き}いてください。', pt: 'A roupa? No começo pode ser de camiseta, tudo bem. O resto, pergunte ao professor.' },
      ],
    },
  ],
  '10-03': [
    {
      label: '会話③ (10-03) — 料理教室に参加したいんですが',
      lines: [
        { speaker: 'A', ja: 'すみません。この{料理教室|りょうりきょうしつ}に{参加|さんか}したいんですが……。', pt: 'Com licença. Eu queria participar desta aula de culinária…' },
        { speaker: 'B', ja: '{料理教室|りょうりきょうしつ}ですね。{少々|しょうしょう}お{待|ま}ちください。あ、{金曜日|きんようび}のクラスは、もういっぱいです。{木曜日|もくようび}のクラスでもいいですか？', pt: 'Aula de culinária, né. Aguarde um momento. Ah, a turma de sexta já está lotada. Pode ser a de quinta?' },
        { speaker: 'A', ja: 'はい。だいじょうぶです。あのう、いくらですか？', pt: 'Sim, tudo bem. Ah… quanto custa?' },
        { speaker: 'B', ja: '1{回|かい}800{円|えん}{払|はら}ってください。', pt: 'Pague 800 ienes por aula.' },
      ],
    },
  ],
  '10-04': [
    {
      label: '会話④ (10-04) — 書道教室に参加してみたいんですが',
      lines: [
        { speaker: 'A', ja: 'すみません。{私|わたし}は{書道|しょどう}に{興味|きょうみ}があります。{書道教室|しょどうきょうしつ}に{参加|さんか}してみたいんですが……。', pt: 'Com licença. Eu tenho interesse em caligrafia. Queria experimentar a aula de caligrafia…' },
        { speaker: 'B', ja: '{体験教室|たいけんきょうしつ}ですか？　それとも{毎週|まいしゅう}のコースですか？', pt: 'Aula experimental? Ou o curso semanal?' },
        { speaker: 'A', ja: '{体験教室|たいけんきょうしつ}です。いつありますか？', pt: 'A aula experimental. Quando tem?' },
        { speaker: 'B', ja: '{次|つぎ}は5{月|がつ}14{日|にち}の{日曜日|にちようび}です。', pt: 'A próxima é no domingo, dia 14 de maio.' },
        { speaker: 'A', ja: 'そうですか。{道具|どうぐ}は{必要|ひつよう}ですか？', pt: 'Entendi. Preciso levar material/instrumentos?' },
        { speaker: 'B', ja: '{全部|ぜんぶ}こちらで{用意|ようい}しますから、だいじょうぶですよ。', pt: 'Nós providenciamos tudo aqui, então não se preocupe.' },
      ],
    },
  ],
  '10-06': [
    {
      label: '会話 (10-06) — 日本語のクラスはどうですか？',
      setupJa: 'スニルさんとユーリヤさんは{会社|かいしゃ}の{同僚|どうりょう}です。スニルさんがユーリヤさんに、{日本語教室|にほんごきょうしつ}について{質問|しつもん}しています。',
      setupPt: 'Sunil e Yuliya são colegas de trabalho. Sunil pergunta à Yuliya sobre a aula de japonês.',
      lines: [
        { speaker: 'スニル', ja: 'ユーリヤさん、ちょっといいですか？', pt: 'Yuliya, tem um minutinho?' },
        { speaker: 'ユーリヤ', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'スニル', ja: '{今|いま}、{日本語|にほんご}の{教室|きょうしつ}に{行|い}っていますか？', pt: 'Você está indo a alguma aula de japonês agora?' },
        { speaker: 'ユーリヤ', ja: 'はい。{本町公民館|もとまちこうみんかん}の{日本語教室|にほんごきょうしつ}で{勉強|べんきょう}しています。', pt: 'Sim. Estudo na aula de japonês do centro comunitário de Motomachi.' },
        { speaker: 'スニル', ja: '{私|わたし}も、もっと{日本語|にほんご}を{勉強|べんきょう}したいんですが、クラスはどうですか？', pt: 'Eu também queria estudar mais japonês — como é a aula?' },
        { speaker: 'ユーリヤ', ja: '{楽|たの}しいですよ。', pt: 'É divertida!' },
        { speaker: 'スニル', ja: '{週|しゅう}に{何回|なんかい}ありますか？', pt: 'Quantas vezes por semana tem?' },
        { speaker: 'ユーリヤ', ja: '{私|わたし}のクラスは{週|しゅう}に1{回|かい}です。{火曜日|かようび}の{夜|よる}です。', pt: 'Minha turma é uma vez por semana. Terça à noite.' },
        { speaker: 'スニル', ja: '{何時|なんじ}からですか？', pt: 'A partir de que horas?' },
        { speaker: 'ユーリヤ', ja: '7{時|じ}から8{時半|じはん}です。{土曜日|どようび}の{午前|ごぜん}のクラスもありますよ。', pt: 'Das 19h às 20h30. Também tem turma de sábado de manhã.' },
        { speaker: 'スニル', ja: 'いくらですか？', pt: 'Quanto custa?' },
        { speaker: 'ユーリヤ', ja: 'ただです。でも、{教科書|きょうかしょ}は{自分|じぶん}で{買|か}います。', pt: 'É de graça. Mas o livro a gente compra por conta própria.' },
        { speaker: 'スニル', ja: 'そうですか。{先生|せんせい}は、どんな{先生|せんせい}ですか？', pt: 'Ah, sei. E os professores, como são?' },
        { speaker: 'ユーリヤ', ja: 'いろいろな{先生|せんせい}がいます。みんな{親切|しんせつ}ですよ。', pt: 'Há vários professores. Todos são gentis.' },
        { speaker: 'スニル', ja: 'へー。', pt: 'Nossa…' },
        { speaker: 'ユーリヤ', ja: '{今度|こんど}、{教室|きょうしつ}のチラシを{持|も}って{来|き}ましょうか？', pt: 'Da próxima vez, quer que eu traga o folheto da aula?' },
        { speaker: 'スニル', ja: 'ありがとうございます。じゃあ、お{願|ねが}いします。', pt: 'Obrigado. Então, por favor.' },
      ],
    },
  ],
  '10-09': [
    {
      label: '会話 (10-09) — 高校のとき、少し勉強しました',
      setupJa: 'プイさんは、{日本語教室|にほんごきょうしつ}の{申|もう}し{込|こ}みに{来|き}ています。{日本語教室|にほんごきょうしつ}の{事務|じむ}の{岩本|いわもと}さんと{話|はな}しています。',
      setupPt: 'Pui veio se inscrever na aula de japonês. Conversa com Iwamoto, da secretaria.',
      lines: [
        { speaker: '岩本', ja: 'お{名前|なまえ}は？', pt: 'Seu nome?' },
        { speaker: 'プイ', ja: 'プイです。', pt: 'Sou o Pui.' },
        { speaker: '岩本', ja: 'プイさん、お{国|くに}は？', pt: 'Pui, de que país você é?' },
        { speaker: 'プイ', ja: 'タイです。', pt: 'Da Tailândia.' },
        { speaker: '岩本', ja: '{母語|ぼご}は？', pt: 'E sua língua materna?' },
        { speaker: 'プイ', ja: 'すみません。「ぼご」は、どういう{意味|いみ}ですか？', pt: 'Desculpe. O que significa “bogo”?' },
        { speaker: '岩本', ja: 'あ、「{母語|ぼご}」は、{子|こ}どものときからいつも{使|つか}っていることばです。mother tongueです。', pt: 'Ah, “bogo” é a língua que você usa desde criança. É a mother tongue.' },
        { speaker: 'プイ', ja: 'ああ、タイ{語|ご}です。', pt: 'Ah, é o tailandês.' },
        { speaker: '岩本', ja: '{英語|えいご}はできますか？', pt: 'Você fala inglês?' },
        { speaker: 'プイ', ja: '{少|すこ}し、できます。', pt: 'Um pouco.' },
        { speaker: '岩本', ja: 'そうですか。{日本語|にほんご}は、{前|まえ}に、どこで{勉強|べんきょう}しましたか？', pt: 'Entendi. E japonês, onde você estudou antes?' },
        { speaker: 'プイ', ja: '{高校|こうこう}のとき、{少|すこ}し{勉強|べんきょう}しました。それから、{国|くに}の{日本語学校|にほんごがっこう}で{半年|はんとし}、{勉強|べんきょう}しました。', pt: 'Quando estava no ensino médio, estudei um pouco. Depois, estudei meio ano numa escola de japonês no meu país.' },
        { speaker: '岩本', ja: 'どんなとき、{日本語|にほんご}を{使|つか}いますか？', pt: 'Em que situações você usa japonês?' },
        { speaker: 'プイ', ja: '{仕事|しごと}のとき、{会社|かいしゃ}の{人|ひと}と{少|すこ}し{話|はな}します。あと、ときどきテレビを{見|み}ます。', pt: 'No trabalho, falo um pouco com o pessoal da empresa. Além disso, às vezes assisto à TV.' },
        { speaker: '岩本', ja: 'ここでは、どんなことを{勉強|べんきょう}したいですか？', pt: 'Aqui, o que você gostaria de estudar?' },
        { speaker: 'プイ', ja: 'もっと{会話|かいわ}を{勉強|べんきょう}したいです。{日本人|にほんじん}とたくさん{話|はな}したいです。{日本人|にほんじん}の{友|とも}だちがほしいです。', pt: 'Quero estudar mais conversação. Quero falar bastante com japoneses. Quero ter amigos japoneses.' },
        { speaker: '岩本', ja: 'そうですか。わかりました。', pt: 'Entendi. Está bem.' },
      ],
    },
  ],
}

const lesson10: Section = {
  id: 'lesson-10',
  level: 'elementary1',
  titleJa: '第10課 日本語教室に参加したいんですが…',
  titlePt: 'Lição 10 — Queria participar da aula de japonês…',
  summaryPt: 'Aprender japonês · perguntar num guichê sobre um curso da comunidade (〜に{参加|さんか}したいんですが／V-てみたいんですが…), falar de frequência ({週|しゅう}に1{回|かい}), oferecer ajuda (チラシを{持|も}って{来|き}ましょうか), pedir o sentido de uma palavra (「ぼご」はどういう{意味|いみ}ですか) e dizer quando algo se deu ({高校|こうこう}のとき).',
  studyNotes: [
    {
      title: 'Tópico: Aprender japonês (日本語学習)',
      bodyPt:
        '## Can-do\n' +
        '- Ver o cartaz de cursos de um centro comunitário ({公民館|こうみんかん}) e captar local, data e horário.\n' +
        '- Perguntar num guichê sobre um curso de interesse e entender a resposta.\n' +
        '- Perguntar a um amigo (ou responder) sobre as aulas de japonês da região.\n' +
        '- Responder a uma entrevista simples sobre histórico e desejos de estudo.\n\n' +
        '💡 Pergunta de abertura: あなたは{習|なら}い{事|ごと}をしたことがありますか？{何|なに}をしたことがありますか？',
    },
    {
      title: 'Experimentar: V-てみたいんですが… (➊)',
      bodyPt:
        '**V-てみたいんですが…** = dizer que quer **experimentar** algo novo (pela 1ª vez) e abrir espaço para perguntar/consultar:\n\n' +
        '- `{合気道|あいきどう}をやってみたいんですが…` / `{書道教室|しょどうきょうしつ}に{参加|さんか}してみたいんですが…`\n\n' +
        'Compare com **V-たいんですが…** (Lição 8 — só transmitir desejo + pedir favor). Liga-se à **テ-forma** + みたい. Resposta comum no guichê: `{体験教室|たいけんきょうしつ}ですか？それとも{毎週|まいしゅう}のコースですか？`',
    },
    {
      title: 'Frequência: 【期間】に〜回 (➋) ／ Oferecer: V-ましょうか？ (➌)',
      bodyPt:
        '**【período】に〜{回|かい}** = frequência (quantas vezes por período):\n\n' +
        '- `{日本語|にほんご}クラスは{週|しゅう}に1{回|かい}です`. Períodos antes de に: {週|しゅう}/〜{週間|しゅうかん}, {月|つき}/〜か{月|げつ}, {年|ねん}/〜{年|ねん}. O に pode ser omitido; com 〜ぐらい dá frequência aproximada ({月|つき}に2{回|かい}, 4{年|ねん}に1{回|かい}).\n\n' +
        '**V-ましょうか？** = **oferecer-se** para fazer algo pelo outro (V-ます→V-ましょうか？):\n\n' +
        '- `{教室|きょうしつ}のチラシを{持|も}って{来|き}ましょうか？` / `よかったら、{手伝|てつだ}いましょうか？`',
    },
    {
      title: 'Pedir o sentido: 聞き返し (➍) ／ Quando: Nのとき、〜 (➎)',
      bodyPt:
        '**聞き返し (asking again)** — pedir de novo o **sentido** de uma palavra (≠ pedir que repitam o que disse):\n\n' +
        '- `すみません。「ぼご」は、どういう{意味|いみ}ですか？` (também `〜は{何|なん}ですか？`, ou repetir a palavra com entonação ascendente: 「どうぎ？」).\n\n' +
        '**Nのとき、〜** = indicar **quando** algo se deu: `{高校|こうこう}のとき、{少|すこ}し{勉強|べんきょう}しました`. Liga-se também a adjetivos: ナA-**な**とき ({暇|ひま}なとき), イA-**い**とき ({若|わか}いとき).',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Guichê/cursos (Ativ. 1–2):** {参加|さんか}する, クラス, {必要|ひつよう}（な）, {最初|さいしょ}, {空|あ}いている (ter vaga), {払|はら}う, {少々|しょうしょう}お{待|ま}ちください, もういっぱいです, {興味|きょうみ}がある, それとも (ou então), {用意|ようい}する, {全部|ぜんぶ}, {道具|どうぐ}, {体験教室|たいけんきょうしつ}. **Cartaz (Ativ. 1):** {公民館|こうみんかん}, {日時|にちじ} (曜日・時間), {場所|ばしょ}, {費用|ひよう}, テキスト{代|だい} (〜{代|だい}), {問|と}い{合|あ}わせ, {毎月|まいつき}/{第3|だいさん}〜. **Entrevista (Ativ. 4):** {母語|ぼご}, {意味|いみ}, {前|まえ}に, {半年|はんとし}, {会話|かいわ}.\n\n' +
        '**Kanji da lição:** {午前|ごぜん}, {午後|ごご}, {教科書|きょうかしょ}, {教室|きょうしつ}, {先生|せんせい}, {全部|ぜんぶ}, 〜{回|かい}, {参加|さんか}する, {用意|ようい}する.\n\n' +
        '📌 **TIPS:** **{公民館|こうみんかん}** (espaço público do bairro, aluguel barato, abriga aulas/cursos — bom para aprender e fazer laços); **{料理教室|りょうりきょうしつ}** (populares; avulsas, regionais, sazonais; variam em dias/preço); **{書道|しょどう}** (pincel+tinta; ensinado desde o primário, {書|か}き{初|ぞ}め de Ano-Novo); **{合気道|あいきどう}** ({武道|ぶどう} de {植芝盛平|うえしばもりへい}; defesa com a força do oponente, sem competição — popular entre mulheres e idosos).',
    },
  ],
  groups: [lesson10Group],
  audios: attachScripts(10, L10_SCRIPTS),
}

// ---- Lição 11: 肉と野菜は私が買って行きます (tópico おいしい料理) ----------
const lesson11Group: ExerciseGroup = {
  id: 'iro-e1-l11',
  title: '肉と野菜は私が買って行きます',
  subtitlePt: 'Comida gostosa · combinar quem leva o quê ({買|か}って{行|い}きます), perguntar/escolher entre opções (N1とN2、どっち／どれ・Nのほうがいい・{何|なん}でもいい) e checar ingredientes/validade ({卵|たまご}を{使|つか}ってますか／いつまでもちますか)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l11-1', number: 1, prompt: '「{肉|にく}と{野菜|やさい}は、{私|わたし}が{買|か}って{行|い}きますよ」 (V-て{行|い}く／{来|く}る) significa (Nota ➊):', choices: [{ n: 1, text: 'fazer V primeiro e ir/vir mantendo esse estado — aqui, COMPRAR e levar (a carne e os legumes)' }, { n: 2, text: 'querer comprar carne e legumes' }, { n: 3, text: 'já ter comprado ontem' }, { n: 4, text: 'pedir que outro compre' }], answer: 1, translationPt: 'A carne e os legumes eu compro e levo.', explanationPt: 'V-て{行|い}く／{来|く}る = realizar V e então ir/vir com aquilo. Liga-se à テ-forma + {行|い}く／{来|く}る. Nesta lição, dividir o que cada um leva ao churrasco. (Nota ➊)' },
    { id: 'iro-e1-l11-2', number: 2, prompt: 'Exemplos com V-て{行|い}く (levar — ir) (Nota ➊):', choices: [{ n: 1, text: '{持|も}って{行|い}く (levar) ／ {買|か}って{行|い}く (comprar e levar) ／ {作|つく}って{行|い}く (preparar e levar)' }, { n: 2, text: '{持|も}って{来|く}る ／ {買|か}って{来|く}る ／ {作|つく}って{来|く}る' }, { n: 3, text: '{持|も}つ ／ {買|か}う ／ {作|つく}る' }, { n: 4, text: '{持|も}ちたい ／ {買|か}いたい ／ {作|つく}りたい' }], answer: 1, explanationPt: 'Com 〜{行|い}く o ponto de chegada é “lá”: {持|も}って{行|い}く, {買|か}って{行|い}く, {作|つく}って{行|い}く. Ex.: {明日|あした}のパーティー、{私|わたし}はデザートを{持|も}って{行|い}きます. (Nota ➊)' },
    { id: 'iro-e1-l11-3', number: 3, prompt: 'E com V-て{来|く}る (Nota ➊)? Ex.: 「{国|くに}の{料理|りょうり}を{作|つく}って{来|き}ました」', choices: [{ n: 1, text: 'fiz V em outro lugar e VIM (trouxe): fiz um prato do meu país e trouxe' }, { n: 2, text: 'vou fazer amanhã' }, { n: 3, text: 'quero fazer um prato' }, { n: 4, text: 'alguém fez para mim' }], answer: 1, explanationPt: 'Com 〜{来|く}る o movimento é “para cá”: {作|つく}って{来|き}ました (fiz e trouxe), {飲|の}み{物|もの}を{買|か}って{来|き}ましたよ (comprei bebida e trouxe). (Nota ➊ · 例)' },
    { id: 'iro-e1-l11-4', number: 4, prompt: '「N1とN2、どっちがいいですか？」 vs 「…どれがいいですか？」 — qual a diferença (Nota ➋)?', choices: [{ n: 1, text: 'どっち para escolher entre 2 opções; どれ para 3 ou mais' }, { n: 2, text: 'どっち para 3+; どれ para 2' }, { n: 3, text: 'são totalmente iguais' }, { n: 4, text: 'どっち só no passado' }], answer: 1, translationPt: 'Qual você prefere, …?', explanationPt: 'どっち／どれ pedem escolha dentro de um conjunto limitado: どっち = 2 opções ({塩|しお}とたれ、どっち), どれ = 3+ (お{茶|ちゃ}、いろいろ…どれ). Comparando, lista-se N1とN2 (às vezes N1とN2と). (Nota ➋)' },
    { id: 'iro-e1-l11-5', number: 5, prompt: '「どっち」 é (Nota ➋):', choices: [{ n: 1, text: 'a forma casual de どちら (qual)' }, { n: 2, text: 'a forma mais formal de どちら' }, { n: 3, text: 'uma palavra para “onde”' }, { n: 4, text: 'uma palavra para “quando”' }], answer: 1, explanationPt: 'どっち = jeito casual de どちら. Ex. formal: ジュースとお{茶|ちゃ}と、どちらがいいですか？ (Nota ➋)' },
    { id: 'iro-e1-l11-6', number: 6, prompt: 'Qual usa どれ corretamente (3+ opções) (Nota ➋)?', choices: [{ n: 1, text: 'アイスはチョコとバニラとストロベリー{味|あじ}があります。どれがいいですか？' }, { n: 2, text: '{肉|にく}と{魚|さかな}、どれがいいですか？' }, { n: 3, text: 'チョコとバニラ、どれがいいですか？' }, { n: 4, text: 'これ、どっち{味|あじ}が3つありますか？' }], answer: 1, explanationPt: 'Três sabores (チョコ/バニラ/ストロベリー) → どれ. Com só duas opções ({肉|にく}と{魚|さかな}) usa-se どっち. (Nota ➋ · 例)' },
    { id: 'iro-e1-l11-7', number: 7, prompt: '「{塩|しお}のほうがいいです」 (Nのほうがいいです) serve para (Nota ➌):', choices: [{ n: 1, text: 'escolher UMA entre DUAS opções (prefiro o sal)' }, { n: 2, text: 'dizer que tanto faz' }, { n: 3, text: 'recusar as duas' }, { n: 4, text: 'pedir as duas' }], answer: 1, translationPt: 'Prefiro com sal.', explanationPt: 'Nのほうがいいです escolhe uma de duas; N é a opção escolhida. Ex.: {肉|にく}と{魚|さかな}、どっち？→{肉|にく}のほうがいいです. (Nota ➌)' },
    { id: 'iro-e1-l11-8', number: 8, prompt: 'Sobre 「のほうが」 (Nota ➌):', choices: [{ n: 1, text: 'pode ser omitido, virando só 「Nがいいです」 ({肉|にく}がいいです)' }, { n: 2, text: 'nunca pode ser omitido' }, { n: 3, text: 'só se usa com verbos' }, { n: 4, text: 'transforma a frase em pergunta' }], answer: 1, explanationPt: 'のほうが pode cair: 「{肉|にく}のほうがいいです」 = 「{肉|にく}がいいです」. (Nota ➌)' },
    { id: 'iro-e1-l11-9', number: 9, prompt: '「{何|なん}でもいいです」 (【疑問詞】でもいいです) significa (Nota ➍):', choices: [{ n: 1, text: 'não ter preferência especial — qualquer coisa serve' }, { n: 2, text: 'não querer nada' }, { n: 3, text: 'querer tudo' }, { n: 4, text: 'não entender a pergunta' }], answer: 1, translationPt: 'Qualquer um(a) está bom.', explanationPt: '【疑問詞】+でもいいです indica ausência de preferência. {何|なに}が{食|た}べたい？→{何|なん}でもいいです (qualquer coisa). (Nota ➍)' },
    { id: 'iro-e1-l11-10', number: 10, prompt: 'Outras formas de 【疑問詞】でも (Nota ➍):', choices: [{ n: 1, text: 'どっちでも (tanto faz) ／ いつでも (a qualquer hora) ／ だれでも (qualquer pessoa) ／ どこでも (em qualquer lugar) ／ いくつでも (quantos forem)' }, { n: 2, text: 'どっちも{だめ|だめ} ／ いつも ／ だれも ／ どこも ／ いくつも' }, { n: 3, text: 'なにか ／ いつか ／ だれか ／ どこか' }, { n: 4, text: 'なにも ／ いつも ／ だれも ／ どこも (todos negativos)' }], answer: 1, explanationPt: '疑問詞+でも: {何|なん}でも, どっちでも, いつでも, だれでも, どこでも, いくつでも. Ex.: いくつ{買|か}いましょうか？→いくつでもいいです. (Nota ➍)' },
    { id: 'iro-e1-l11-11', number: 11, prompt: 'Vocabulário do churrasco (Atividade 1): 「{肉|にく}／{野菜|やさい}／シーフード／{果物|くだもの}」 e exemplos:', choices: [{ n: 1, text: 'carne ({牛肉|ぎゅうにく}/{豚肉|ぶたにく}/{鶏肉|とりにく}/ソーセージ) ／ legumes ／ frutos do mar ({魚|さかな}/エビ/イカ/ホタテ) ／ frutas (りんご/バナナ)' }, { n: 2, text: 'peixe ／ arroz ／ pão ／ doces' }, { n: 3, text: 'bebida ／ sobremesa ／ molho ／ sal' }, { n: 4, text: 'copo ／ prato ／ hashi ／ saco de lixo' }], answer: 1, explanationPt: '{肉|にく} (carne: {牛肉|ぎゅうにく}/{豚肉|ぶたにく}/{鶏肉|とりにく}/ソーセージ), {野菜|やさい} (legumes), シーフード ({魚|さかな}/エビ/イカ/ホタテ), {果物|くだもの} (りんご/バナナ). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l11-12', number: 12, prompt: 'Mais itens do churrasco (Atividade 1): 「{焼|や}きそば／おにぎり／{焼肉|やきにく}のたれ・ソース／お{菓子|かし}／コップ／お{皿|さら}／わりばし／ごみ{袋|ぶくろ}」 significam:', choices: [{ n: 1, text: 'yakisoba ／ onigiri ／ molho de churrasco/molho ／ salgadinhos/doces ／ copo ／ prato ／ hashi descartável ／ saco de lixo' }, { n: 2, text: 'sopa ／ pão ／ açúcar ／ fruta ／ garrafa ／ panela ／ colher ／ guardanapo' }, { n: 3, text: 'arroz ／ peixe ／ sal ／ bolo ／ taça ／ tigela ／ garfo ／ toalha' }, { n: 4, text: 'macarrão ／ bolinho ／ pimenta ／ bala ／ jarra ／ bandeja ／ faca ／ caixa' }], answer: 1, explanationPt: '{焼|や}きそば (yakisoba), おにぎり (bolinho de arroz), {焼肉|やきにく}のたれ／ソース (molho de churrasco/molho), お{菓子|かし} (doces/salgadinhos), コップ (copo), お{皿|さら} (prato), わりばし (hashi descartável), ごみ{袋|ぶくろ} (saco de lixo). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l11-13', number: 13, prompt: 'Vocabulário (Ativ. 1–2): 「{準備|じゅんび}／{飲|の}み{物|もの}／デザート／{焼|や}く／{売|う}る／{両方|りょうほう}」 significam:', choices: [{ n: 1, text: 'preparação ／ bebida ／ sobremesa ／ grelhar/assar ／ vender ／ ambos/os dois' }, { n: 2, text: 'limpeza ／ comida ／ entrada ／ ferver ／ comprar ／ nenhum' }, { n: 3, text: 'festa ／ água ／ doce ／ cortar ／ guardar ／ metade' }, { n: 4, text: 'reunião ／ chá ／ fruta ／ congelar ／ trocar ／ um' }], answer: 1, explanationPt: '{準備|じゅんび} (preparação), {飲|の}み{物|もの} (bebida), デザート (sobremesa), {焼|や}く (grelhar/assar), {売|う}る (vender: ケーキ、{売|う}ってますよ), {両方|りょうほう} (ambos: {両方|りょうほう}{買|か}いましょう). (Atividades 1–2)' },
    { id: 'iro-e1-l11-14', number: 14, prompt: 'Vocabulário de alergias (Atividade 3): 「エビ／カニ／{卵|たまご}／ピーナッツ・{落花生|らっかせい}／そば・そば{粉|こ}／{小麦|こむぎ}・{小麦粉|こむぎこ}／{乳製品|にゅうせいひん}」 significam:', choices: [{ n: 1, text: 'camarão ／ caranguejo ／ ovo ／ amendoim ／ trigo-sarraceno (soba)/farinha de soba ／ trigo/farinha de trigo ／ laticínios ({牛乳|ぎゅうにゅう}/バター/チーズ/ヨーグルト)' }, { n: 2, text: 'peixe ／ lula ／ leite ／ castanha ／ arroz ／ milho ／ carne' }, { n: 3, text: 'frango ／ porco ／ queijo ／ noz ／ aveia ／ centeio ／ frutas' }, { n: 4, text: 'polvo ／ ostra ／ manteiga ／ soja ／ macarrão ／ pão ／ ovos' }], answer: 1, explanationPt: 'エビ (camarão), カニ (caranguejo), {卵|たまご} (ovo), ピーナッツ/{落花生|らっかせい} (amendoim), そば/そば{粉|こ} (soba/farinha), {小麦|こむぎ}/{小麦粉|こむぎこ} (trigo/farinha), {乳製品|にゅうせいひん} (laticínios). (Atividade 3 · ことば)' },
    { id: 'iro-e1-l11-15', number: 15, prompt: 'Vocabulário (Atividade 3): 「{使|つか}ってる／{入|はい}ってる／もつ／{今日中|きょうじゅう}／{消費期限|しょうひきげん}／ハラル／コーナー／{商品|しょうひん}／すべて」 significam:', choices: [{ n: 1, text: 'estar usando (conter) ／ estar dentro (conter) ／ durar/conservar ／ até hoje (no decorrer de hoje) ／ prazo de validade (consumo) ／ halal ／ seção/setor ／ produto ／ tudo/todos' }, { n: 2, text: 'comprar ／ sair ／ estragar ／ amanhã ／ preço ／ vegano ／ caixa ／ folheto ／ nada' }, { n: 3, text: 'cozinhar ／ entrar ／ acabar ／ ontem ／ marca ／ kosher ／ corredor ／ receita ／ alguns' }, { n: 4, text: 'vender ／ cair ／ aquecer ／ semana ／ código ／ orgânico ／ prateleira ／ amostra ／ poucos' }], answer: 1, explanationPt: '{使|つか}ってる ({卵|たまご}を{使|つか}ってますか), {入|はい}ってる (エビが{入|はい}ってますか), もつ (durar/conservar: {明日|あした}までもちますか), {今日中|きょうじゅう}に (no decorrer de hoje), {消費期限|しょうひきげん} (validade de consumo), ハラル (halal — comida permitida a muçulmanos), コーナー (seção), {商品|しょうひん} (produto), すべて (tudo). (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l11-16', number: 16, prompt: 'Rótulo de alimentos (Atividade 4): 「{食品表示|しょくひんひょうじ}／{原材料名|げんざいりょうめい}／アレルギー{物質|ぶっしつ}／{乳成分|にゅうせいぶん}／{大豆|だいず}／{含|ふく}む」 significam:', choices: [{ n: 1, text: 'rótulo/informação do alimento ／ nome dos ingredientes ／ substância alergênica ／ derivado de leite ／ soja ／ conter/incluir' }, { n: 2, text: 'preço ／ marca ／ aditivo ／ açúcar ／ trigo ／ retirar' }, { n: 3, text: 'receita ／ modo de uso ／ corante ／ sal ／ arroz ／ ferver' }, { n: 4, text: 'validade ／ peso ／ conservante ／ óleo ／ farinha ／ misturar' }], answer: 1, explanationPt: '{食品表示|しょくひんひょうじ} (rótulo/informações), {原材料名|げんざいりょうめい} (lista de ingredientes), アレルギー{物質|ぶっしつ} (alérgenos), {乳成分|にゅうせいぶん} (derivado de leite), {大豆|だいず} (soja), {含|ふく}む (conter). Também {消費期限|しょうひきげん} (validade de consumo) vs {賞味期限|しょうみきげん} (validade de sabor). (Atividade 4)' },
    { id: 'iro-e1-l11-17', number: 17, prompt: 'Os kanji 「{飲|の}み{物|もの}／お{茶|ちゃ}／お{酒|さけ}／{材料|ざいりょう}／{野菜|やさい}」 lêem-se:', choices: [{ n: 1, text: 'のみもの (bebida) ／ おちゃ (chá) ／ おさけ (bebida alcoólica) ／ ざいりょう (ingredientes) ／ やさい (legumes)' }, { n: 2, text: 'のみぶつ ／ おちゃ ／ おしゅ ／ ざいりょう ／ のさい' }, { n: 3, text: 'いんもつ ／ おさ ／ おさけ ／ さいりょう ／ やさい' }, { n: 4, text: 'のみもの ／ おちゃ ／ おさけ ／ ざいりょう ／ やさく' }], answer: 1, explanationPt: '{飲|の}み{物|もの} (bebida), お{茶|ちゃ} (chá), お{酒|さけ} (bebida alcoólica), {材料|ざいりょう} (ingredientes/material), {野菜|やさい} (legumes). (漢字のことば)' },
    { id: 'iro-e1-l11-18', number: 18, prompt: 'Os kanji 「{牛肉|ぎゅうにく}／{豚肉|ぶたにく}／{皿|さら}」 lêem-se:', choices: [{ n: 1, text: 'ぎゅうにく (carne bovina) ／ ぶたにく (carne suína) ／ さら (prato)' }, { n: 2, text: 'ぎゅうにく ／ とんにく ／ さら' }, { n: 3, text: 'うしにく ／ ぶたにく ／ べい' }, { n: 4, text: 'ぎゅうじく ／ ぶたじく ／ さら' }], answer: 1, explanationPt: '{牛肉|ぎゅうにく} (carne de boi), {豚肉|ぶたにく} (carne de porco), {皿|さら} (prato; お{皿|さら}). (漢字のことば)' },
    { id: 'iro-e1-l11-19', number: 19, prompt: 'Os kanji 「{売|う}る／{持|も}って{行|い}く」 lêem-se e significam:', choices: [{ n: 1, text: 'うる (vender) ／ もっていく (levar)' }, { n: 2, text: 'ばいる ／ もっていく' }, { n: 3, text: 'うる ／ じこう' }, { n: 4, text: 'かう ／ もってくる' }], answer: 1, explanationPt: '{売|う}る (vender), {持|も}って{行|い}く (levar). Kanji da lição: {飲|の}み{物|もの}・お{茶|ちゃ}・お{酒|さけ}・{材料|ざいりょう}・{野菜|やさい}・{牛肉|ぎゅうにく}・{豚肉|ぶたにく}・{皿|さら}・{売|う}る・{持|も}って{行|い}く. (漢字)' },
    { id: 'iro-e1-l11-20', number: 20, prompt: '📌 TIPS — バーベキュー (churrasco no Japão):', choices: [{ n: 1, text: 'grelha-se carne com legumes (abóbora, cebola, milho) e frutos do mar; cozinha-se e come-se ao mesmo tempo; yakisoba/yaki-onigiri por último; muitas vezes alugam-se equipamentos em parques/áreas, e há locais que fornecem tudo' }, { n: 2, text: 'só se come depois de tudo pronto e nunca tem legumes' }, { n: 3, text: 'é proibido em parques' }, { n: 4, text: 'só existe em restaurantes fechados' }], answer: 1, explanationPt: 'No churrasco japonês: além de carne, {野菜|やさい} (かぼちゃ/たまねぎ/とうもろこし) e シーフード (エビ/イカ/{貝|かい}); grelha-se e come-se ao mesmo tempo; ao final {焼|や}きそば/{焼|や}きおにぎり; costuma-se alugar equipamento em {公園|こうえん}/キャンプ{場|じょう}; há locais que fornecem tudo (手ぶら). (TIPS)' },
    { id: 'iro-e1-l11-21', number: 21, prompt: '📌 TIPS — スーパーの{惣菜|そうざい}コーナー (seção de pratos prontos do supermercado):', choices: [{ n: 1, text: 'vende pratos já prontos (frituras, {焼|や}き{鳥|とり}, {煮物|にもの}, saladas) para comer sem cozinhar; útil para quem tem pressa; perto do fechamento há liquidação ({割引|わりびき})' }, { n: 2, text: 'só vende ingredientes crus' }, { n: 3, text: 'só funciona de madrugada' }, { n: 4, text: 'é uma seção de roupas' }], answer: 1, explanationPt: '{惣菜|そうざい}コーナー = pratos prontos ({揚|あ}げ{物|もの}/からあげ/コロッケ, {焼|や}き{鳥|とり}, {煮物|にもの}, サラダ). Bom para quem não tem tempo ou quer equilibrar a dieta; perto do {閉店|へいてん} há {割引|わりびき}セール. (TIPS)' },
    { id: 'iro-e1-l11-22', number: 22, prompt: 'Diálogo 11-03 (planejando o churrasco): quem leva a carne e os legumes?', context: '{長谷川|はせがわ}：{来週|らいしゅう}のバーベキューですけど、{準備|じゅんび}はどうしますか？だれが{何|なに}を{持|も}って{行|い}きますか？ {楊|ヨウ}：{肉|にく}と{野菜|やさい}は、{私|わたし}が{買|か}って{行|い}きますよ。 マルコ：{私|わたし}も{手伝|てつだ}いましょうか？ {楊|ヨウ}：だいじょうぶです。', choices: [{ n: 1, text: 'Yō compra e leva a carne e os legumes; recusa a ajuda de Marco (だいじょうぶです)' }, { n: 2, text: 'Marco leva a carne; Yō leva bebida' }, { n: 3, text: 'Ninguém leva carne' }, { n: 4, text: 'Hasegawa compra tudo' }], answer: 1, explanationPt: '{肉|にく}と{野菜|やさい}は{私|わたし}が{買|か}って{行|い}きます (V-て{行|い}く, ➊); {手伝|てつだ}いましょうか？ (oferta) → だいじょうぶです. (Atividade 1 · 聴解スクリプト 11-03)' },
    { id: 'iro-e1-l11-23', number: 23, prompt: 'Diálogo 11-04: Marco fica com as bebidas. Por que ele vai levar também chá?', context: '{楊|ヨウ}：マルコさんは{飲|の}み{物|もの}をお{願|ねが}いします。 マルコ：ビールとワインでいいですか？ ノイ：{私|わたし}はお{酒|さけ}がだめですから……。 マルコ：あ、じゃあ、お{茶|ちゃ}も{買|か}って{行|い}きますね。', choices: [{ n: 1, text: 'Noi não pode beber álcool, então Marco também leva chá' }, { n: 2, text: 'Acabou a cerveja' }, { n: 3, text: 'Ninguém gosta de vinho' }, { n: 4, text: 'Noi pediu mais cerveja' }], answer: 1, explanationPt: 'ノイ：お{酒|さけ}がだめですから… → マルコ：お{茶|ちゃ}も{買|か}って{行|い}きますね (V-て{行|い}く, ➊). (Atividade 1 · 11-04)' },
    { id: 'iro-e1-l11-24', number: 24, prompt: 'Diálogo 11-05: o que Hasegawa leva, e o que decidem sobre copos e pratos?', context: '{長谷川|はせがわ}：{私|わたし}はおにぎりを{作|つく}って{行|い}きますね。 {楊|ヨウ}：じゃあ、{長谷川|はせがわ}さんはおにぎりをお{願|ねが}いします。 マルコ：コップやお{皿|さら}は、どうしますか？ {長谷川|はせがわ}：それは、バーベキュー{場|じょう}にありますから、だいじょうぶです。', choices: [{ n: 1, text: 'Hasegawa prepara e leva onigiri; copos/pratos não precisam (já há no local do churrasco)' }, { n: 2, text: 'Hasegawa leva copos e pratos' }, { n: 3, text: 'Ninguém leva onigiri' }, { n: 4, text: 'Vão comprar pratos novos' }], answer: 1, explanationPt: 'おにぎりを{作|つく}って{行|い}きます (V-て{行|い}く, ➊); コップ/お{皿|さら} → バーベキュー{場|じょう}にありますから、だいじょうぶ. (Atividade 1 · 11-05)' },
    { id: 'iro-e1-l11-25', number: 25, prompt: 'Diálogo 11-06: o que Noi leva, e o que surpreende Hasegawa?', context: 'ノイ：{私|わたし}は、{何|なに}を{持|も}って{行|い}きましょうか？ {長谷川|はせがわ}：デザートはどうですか？ ノイ：じゃあ、バナナを{持|も}って{行|い}きます。{焼|や}いて{食|た}べましょう。 {長谷川|はせがわ}：え、バナナ？{焼|や}くんですか？ ノイ：はい。おいしいですよ。', choices: [{ n: 1, text: 'Noi leva banana como sobremesa e propõe grelhar — o que surpreende Hasegawa' }, { n: 2, text: 'Noi leva cerveja' }, { n: 3, text: 'Noi não leva nada' }, { n: 4, text: 'Hasegawa não gosta de sobremesa' }], answer: 1, explanationPt: '{何|なに}を{持|も}って{行|い}きましょうか？ (oferta com V-ましょうか); バナナを{持|も}って{行|い}きます…{焼|や}いて{食|た}べましょう → え、バナナ？{焼|や}くんですか？ (surpresa). (Atividade 1 · 11-06)' },
    { id: 'iro-e1-l11-26', number: 26, prompt: 'Diálogo 11-10 (supermercado): o que decidem sobre carne e yakitori?', context: '{中村|なかむら}：{何|なに}が{食|た}べたいですか？ {張|チョウ}：{何|なん}でもいいです。 マリアナ：{私|わたし}は{肉|にく}がいいです！ {中村|なかむら}：じゃあ、からあげを{買|か}って{行|い}きましょう。 …{中村|なかむら}：{塩|しお}とたれ、どっちがいいですか？ {張|チョウ}：{塩|しお}のほうがいいです。', choices: [{ n: 1, text: 'Mariana quer carne; compram karaage; para o yakitori, escolhem o de sal (塩のほうがいい)' }, { n: 2, text: 'Compram só legumes; yakitori com molho' }, { n: 3, text: 'Ninguém quer carne' }, { n: 4, text: 'Zhang escolhe o de molho (たれ)' }], answer: 1, explanationPt: '{何|なん}でもいいです (➍); {私|わたし}は{肉|にく}がいいです; {塩|しお}とたれ、どっち (➋) → {塩|しお}のほうがいいです (➌). (Atividade 2 · 聴解スクリプト 11-10)' },
    { id: 'iro-e1-l11-27', number: 27, prompt: 'Diálogo 11-10: o que decidem sobre bebida e sobremesa?', context: '{中村|なかむら}：お{茶|ちゃ}、いろいろありますね。どれがいいですか？ マリアナ：ウーロン{茶|ちゃ}にしましょう。 {張|チョウ}：お{酒|さけ}もいいですか？ … {中村|なかむら}：チョコレートケーキとチーズケーキ、どっちがいいですか？ {張|チョウ}：{私|わたし}はどっちでもいいです。 マリアナ：じゃあ、{両方|りょうほう}{買|か}いましょう！', choices: [{ n: 1, text: 'Chá: escolhem oolong (どれ→ウーロン茶); também levam cerveja; das duas tortas, Zhang diz “tanto faz” e compram as duas' }, { n: 2, text: 'Não levam bebida; só uma torta' }, { n: 3, text: 'Escolhem só a torta de chocolate' }, { n: 4, text: 'Não compram sobremesa' }], answer: 1, explanationPt: 'お{茶|ちゃ}…どれがいいですか (3+, ➋) → ウーロン{茶|ちゃ}; チョコ vs チーズ、どっち (➋) → どっちでもいいです (➍) → {両方|りょうほう}{買|か}いましょう. (Atividade 2 · 11-10)' },
    { id: 'iro-e1-l11-28', number: 28, prompt: 'Diálogo 11-17: B pergunta sobre o ovo. Qual a resposta?', context: 'B：あのう、この{料理|りょうり}、{卵|たまご}を{使|つか}ってますか？ A：{卵|たまご}？これは{使|つか}ってませんよ。 B：あ、じゃあ、だいじょうぶです。いただきます！', choices: [{ n: 1, text: 'O prato NÃO leva ovo, então B pode comer' }, { n: 2, text: 'O prato leva ovo; B não pode comer' }, { n: 3, text: 'B é alérgico a camarão' }, { n: 4, text: 'O prato está vencido' }], answer: 1, explanationPt: '{卵|たまご}を{使|つか}ってますか？ → {使|つか}ってませんよ (não usa). B então come. (Atividade 3 · 聴解スクリプト 11-17)' },
    { id: 'iro-e1-l11-29', number: 29, prompt: 'Diálogo 11-18: B pergunta sobre camarão na pizza. O que acontece?', context: 'B：このピザ、エビが{入|はい}ってますか？ A：エビ、{入|はい}ってるよ。 B：じゃあ、{私|わたし}はだめです。エビのアレルギーですから。', choices: [{ n: 1, text: 'A pizza leva camarão; B não pode comer (é alérgico a camarão)' }, { n: 2, text: 'A pizza não leva camarão; B pode comer' }, { n: 3, text: 'B é alérgico a ovo' }, { n: 4, text: 'A pizza está vencida' }], answer: 1, explanationPt: 'エビが{入|はい}ってますか？ → {入|はい}ってるよ (tem); B：エビのアレルギーですから (alérgico) → だめです. (Atividade 3 · 11-18)' },
    { id: 'iro-e1-l11-30', number: 30, prompt: 'Diálogos 11-19 e 11-20: validade do sashimi e o ramen é halal?', context: '① A：このお{刺身|さしみ}、{明日|あした}までもちますか？ B：お{刺身|さしみ}は、{今日中|きょうじゅう}に{食|た}べてください。 ② A：このラーメン、ハラルですか？ B：そうですよ。このコーナーの{商品|しょうひん}は、すべてハラルですよ。', choices: [{ n: 1, text: '① O sashimi deve ser comido ainda hoje (não dura até amanhã). ② Sim, é halal — toda a seção é halal' }, { n: 2, text: '① O sashimi dura uma semana. ② Não é halal' }, { n: 3, text: '① Pode comer amanhã. ② Não sabe se é halal' }, { n: 4, text: '① Está estragado. ② É só para hoje' }], answer: 1, explanationPt: '① {明日|あした}までもちますか？ → {今日中|きょうじゅう}に{食|た}べてください (só hoje). ② ハラルですか？ → そうですよ；コーナーの{商品|しょうひん}はすべてハラル. (Atividade 3 · 11-19/11-20)' },
    { id: 'iro-e1-l11-31', number: 31, prompt: 'Rótulos (Atividade 4): quem pode comer o quê? ① レトルトカレー (乳成分・小麦・大豆・鶏肉・りんご・バナナ); ② エビピラフおにぎり ({卵|たまご}・乳製品・小麦・えび・かに・鶏肉); ③ チョコレート (乳成分・大豆・りんご・バナナ).', context: 'A = alérgico a ovo ({卵|たまご}); B = alérgico a trigo ({小麦|こむぎ}); C = alérgico a camarão (エビ).', choices: [{ n: 1, text: 'A: ①○ ②× ③○ ／ B: ①× ②× ③○ ／ C: ①○ ②× ③○' }, { n: 2, text: 'Todos podem comer tudo' }, { n: 3, text: 'Ninguém pode comer nada' }, { n: 4, text: 'A: ①× ②○ ③× ／ B: ①○ ②○ ③× ／ C: ①× ②○ ③○' }], answer: 1, explanationPt: '① curry tem 小麦 (B×), mas não 卵/エビ (A○, C○). ② onigiri tem 卵・小麦・えび (A×, B×, C×). ③ chocolate só 乳成分/大豆/りんご/バナナ (A○, B○, C○). (Atividade 4 · {食品表示|しょくひんひょうじ})' },
    { id: 'iro-e1-l11-32', number: 32, prompt: 'Pergunta de abertura da lição: 「だれかの{家|いえ}に{集|あつ}まってパーティーをすることがありますか？そのとき、どんなものを{食|た}べたり{飲|の}んだりしますか？」 quer dizer:', choices: [{ n: 1, text: 'Você às vezes se reúne na casa de alguém para uma festa? Nessas horas, o que costuma comer e beber?' }, { n: 2, text: 'Onde você faz compras?' }, { n: 3, text: 'Quantas vezes por semana você cozinha?' }, { n: 4, text: 'Qual é o seu prato favorito do restaurante?' }], answer: 1, translationPt: 'Você costuma se reunir na casa de alguém para festas? O que come e bebe nessas ocasiões?', explanationPt: '〜することがありますか (costuma…?), {食|た}べたり{飲|の}んだり (fazer coisas como comer e beber). Tema: おいしい{料理|りょうり}. (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 11
const L11_SCRIPTS: Record<string, ScriptItem[]> = {
  '11-03': [
    {
      label: '会話① (11-03) — 肉と野菜は私が買って行きます',
      setupJa: '4{人|よにん}は{会社|かいしゃ}の{同僚|どうりょう}です。{休|やす}みの{日|ひ}にバーベキューをすることになりました。その{準備|じゅんび}について{話|はな}しています。',
      setupPt: 'Os quatro são colegas de trabalho. Vão fazer um churrasco no dia de folga e conversam sobre os preparativos.',
      lines: [
        { speaker: '長谷川', ja: '{来週|らいしゅう}のバーベキューですけど、{準備|じゅんび}はどうしますか？だれが{何|なに}を{持|も}って{行|い}きますか？', pt: 'Sobre o churrasco da semana que vem — como fazemos os preparativos? Quem leva o quê?' },
        { speaker: '楊', ja: '{肉|にく}と{野菜|やさい}は、{私|わたし}が{買|か}って{行|い}きますよ。', pt: 'A carne e os legumes eu compro e levo.' },
        { speaker: 'マルコ', ja: '{楊|ヨウ}さん、いいですか？{私|わたし}も{手伝|てつだ}いましょうか？', pt: 'Yō, tudo bem? Quer que eu ajude também?' },
        { speaker: '楊', ja: 'だいじょうぶです。', pt: 'Não precisa, obrigado.' },
      ],
    },
  ],
  '11-04': [
    {
      label: '会話② (11-04) — 飲み物をお願いします',
      lines: [
        { speaker: '楊', ja: 'じゃあ、マルコさんは{飲|の}み{物|もの}をお{願|ねが}いします。', pt: 'Então, Marco, fica com as bebidas, por favor.' },
        { speaker: 'マルコ', ja: 'いいですよ。ビールとワインでいいですか？', pt: 'Pode deixar. Cerveja e vinho está bom?' },
        { speaker: 'ノイ', ja: 'あのう、すみません。{私|わたし}はお{酒|さけ}がだめですから……。', pt: 'Ahn, desculpa. É que eu não posso beber álcool…' },
        { speaker: 'マルコ', ja: 'あ、じゃあ、お{茶|ちゃ}も{買|か}って{行|い}きますね。', pt: 'Ah, então levo chá também.' },
        { speaker: 'ノイ', ja: 'ありがとうございます。', pt: 'Muito obrigada.' },
      ],
    },
  ],
  '11-05': [
    {
      label: '会話③ (11-05) — おにぎりを作って行きます',
      lines: [
        { speaker: '長谷川', ja: 'じゃあ、{私|わたし}はおにぎりを{作|つく}って{行|い}きますね。', pt: 'Então eu faço uns onigiris e levo.' },
        { speaker: '楊', ja: 'いいですねえ。じゃあ、{長谷川|はせがわ}さんはおにぎりをお{願|ねが}いします。', pt: 'Que bom! Então, Hasegawa, fica com os onigiris, por favor.' },
        { speaker: 'マルコ', ja: 'コップやお{皿|さら}は、どうしますか？', pt: 'E os copos e pratos, como ficam?' },
        { speaker: '長谷川', ja: 'それは、バーベキュー{場|じょう}にありますから、だいじょうぶです。', pt: 'Isso tem no local do churrasco, então não precisa.' },
      ],
    },
  ],
  '11-06': [
    {
      label: '会話④ (11-06) — バナナを持って行きます',
      lines: [
        { speaker: 'ノイ', ja: '{私|わたし}は、{何|なに}を{持|も}って{行|い}きましょうか？', pt: 'E eu, o que eu levo?' },
        { speaker: '長谷川', ja: 'じゃあ、ノイさん、デザートはどうですか？', pt: 'Então, Noi, que tal a sobremesa?' },
        { speaker: 'ノイ', ja: 'そうですねえ、じゃあ、バナナを{持|も}って{行|い}きます。{焼|や}いて{食|た}べましょう。', pt: 'Deixa ver… então levo banana. Vamos grelhar e comer.' },
        { speaker: '長谷川', ja: 'え、バナナ？{焼|や}くんですか？', pt: 'Hã, banana? Vai grelhar?' },
        { speaker: 'ノイ', ja: 'はい。おいしいですよ。', pt: 'Sim. Fica gostoso!' },
      ],
    },
  ],
  '11-10': [
    {
      label: '会話 (11-10) — どっちがいいですか？',
      setupJa: '{張|チョウ}さんと{中村|なかむら}さんとマリアナさんは{友|とも}だちです。{家|いえ}でパーティーをするために、スーパーに{買|か}い{物|もの}に{来|き}ています。',
      setupPt: 'Zhang, Nakamura e Mariana são amigos. Foram ao supermercado fazer compras para uma festa em casa.',
      lines: [
        { speaker: '中村', ja: 'じゃあ、{何|なに}を{買|か}って{行|い}きましょうか？', pt: 'Então, o que vamos comprar e levar?' },
        { speaker: '張', ja: 'そうですねえ……。', pt: 'Hmm, deixa ver…' },
        { speaker: '中村', ja: '{何|なに}が{食|た}べたいですか？', pt: 'O que você quer comer?' },
        { speaker: '張', ja: '{何|なん}でもいいです。', pt: 'Qualquer coisa serve.' },
        { speaker: 'マリアナ', ja: '{私|わたし}は{肉|にく}がいいです！', pt: 'Eu prefiro carne!' },
        { speaker: '中村', ja: 'じゃあ、からあげを{買|か}って{行|い}きましょう。', pt: 'Então vamos comprar karaage e levar.' },
        { speaker: 'マリアナ', ja: 'うーん。{焼|や}き{鳥|とり}もいいですねえ。', pt: 'Hmm. Yakitori também seria bom.' },
        { speaker: '中村', ja: '{焼|や}き{鳥|とり}も{買|か}いますか？{塩|しお}とたれ、どっちがいいですか？', pt: 'Compramos yakitori também? Com sal ou com molho, qual você prefere?' },
        { speaker: '張', ja: '{塩|しお}のほうがいいです。', pt: 'Prefiro com sal.' },
        { speaker: '中村', ja: 'じゃあ、{塩|しお}にしましょう。', pt: 'Então vai de sal.' },
        { speaker: '中村', ja: '{飲|の}み{物|もの}は{何|なに}がいいですか？', pt: 'E de bebida, o que vocês querem?' },
        { speaker: 'マリアナ', ja: 'お{茶|ちゃ}がいいです。', pt: 'Chá seria bom.' },
        { speaker: '中村', ja: 'お{茶|ちゃ}、いろいろありますね。どれがいいですか？', pt: 'Chá tem de vários tipos, né. Qual deles?' },
        { speaker: 'マリアナ', ja: 'ウーロン{茶|ちゃ}にしましょう。', pt: 'Vamos de chá oolong.' },
        { speaker: '張', ja: 'お{酒|さけ}もいいですか？', pt: 'Pode bebida alcoólica também?' },
        { speaker: '中村', ja: 'いいですよ。', pt: 'Pode sim.' },
        { speaker: '張', ja: 'じゃあ、ビール。', pt: 'Então, cerveja.' },
        { speaker: '中村', ja: 'デザートはどうしますか？', pt: 'E a sobremesa?' },
        { speaker: 'マリアナ', ja: 'あそこでケーキ、{売|う}ってますよ。{買|か}って{行|い}きましょう。', pt: 'Ali estão vendendo bolo. Vamos comprar e levar.' },
        { speaker: '中村', ja: 'チョコレートケーキとチーズケーキ、どっちがいいですか？', pt: 'Bolo de chocolate ou cheesecake, qual vocês preferem?' },
        { speaker: '張', ja: '{私|わたし}はどっちでもいいです。', pt: 'Para mim tanto faz.' },
        { speaker: 'マリアナ', ja: 'じゃあ、{両方|りょうほう}{買|か}いましょう！', pt: 'Então vamos comprar os dois!' },
      ],
    },
  ],
  '11-17': [
    {
      label: '会話① (11-17) — 卵を使ってますか？',
      lines: [
        { speaker: 'A', ja: 'さあ、どうぞ。', pt: 'Vamos, sirva-se.' },
        { speaker: 'B', ja: 'あのう、この{料理|りょうり}、{卵|たまご}を{使|つか}ってますか？', pt: 'Ahn, este prato leva ovo?' },
        { speaker: 'A', ja: '{卵|たまご}？これは{使|つか}ってませんよ。', pt: 'Ovo? Este aqui não leva.' },
        { speaker: 'B', ja: 'あ、じゃあ、だいじょうぶです。いただきます！', pt: 'Ah, então tudo bem. Itadakimasu!' },
      ],
    },
  ],
  '11-18': [
    {
      label: '会話② (11-18) — エビが入ってますか？',
      lines: [
        { speaker: 'A', ja: 'よかったら、ピザ、どう？', pt: 'Se quiser, que tal uma pizza?' },
        { speaker: 'B', ja: 'このピザ、エビが{入|はい}ってますか？', pt: 'Esta pizza leva camarão?' },
        { speaker: 'A', ja: 'エビ、{入|はい}ってるよ。', pt: 'Tem camarão, sim.' },
        { speaker: 'B', ja: 'じゃあ、{私|わたし}はだめです。エビのアレルギーですから。', pt: 'Então não dá para mim. É que tenho alergia a camarão.' },
        { speaker: 'A', ja: 'そうなんだ……。', pt: 'Ah, é mesmo…' },
      ],
    },
  ],
  '11-19': [
    {
      label: '会話③ (11-19) — 明日までもちますか？',
      lines: [
        { speaker: 'A', ja: 'すみません。このお{刺身|さしみ}、{明日|あした}までもちますか？', pt: 'Com licença. Este sashimi dura até amanhã?' },
        { speaker: 'B', ja: 'あ、お{刺身|さしみ}は、{今日中|きょうじゅう}に{食|た}べてください。', pt: 'Ah, o sashimi, coma ainda hoje, por favor.' },
        { speaker: 'A', ja: 'そうですか。{明日|あした}はだめですか？', pt: 'Entendi. Amanhã não pode?' },
        { speaker: 'B', ja: 'ちょっと{無理|むり}ですね。', pt: 'Aí já não dá, não.' },
      ],
    },
  ],
  '11-20': [
    {
      label: '会話④ (11-20) — ハラルですか？',
      lines: [
        { speaker: 'A', ja: 'すみません。このラーメン、ハラルですか？', pt: 'Com licença. Este ramen é halal?' },
        { speaker: 'B', ja: 'そうですよ。', pt: 'É sim.' },
        { speaker: 'A', ja: 'あ、よかった。', pt: 'Ah, que bom.' },
        { speaker: 'B', ja: 'このコーナーの{商品|しょうひん}は、すべてハラルですよ。', pt: 'Os produtos desta seção são todos halal.' },
        { speaker: 'A', ja: 'へー、そうなんですか。', pt: 'Nossa, é mesmo?' },
      ],
    },
  ],
}

const lesson11: Section = {
  id: 'lesson-11',
  level: 'elementary1',
  titleJa: '第11課 肉と野菜は私が買って行きます',
  titlePt: 'Lição 11 — Eu compro e levo a carne e os legumes',
  summaryPt: 'Comida gostosa · combinar quem leva o quê a um churrasco ({肉|にく}と{野菜|やさい}は{私|わたし}が{買|か}って{行|い}きます), perguntar/escolher entre opções (N1とN2、どっち／どれ・{塩|しお}のほうがいい・{何|なん}でもいい) e checar ingredientes/validade ({卵|たまご}を{使|つか}ってますか／{明日|あした}までもちますか／ハラルですか).',
  studyNotes: [
    {
      title: 'Tópico: Comida gostosa (おいしい料理)',
      bodyPt:
        '## Can-do\n' +
        '- Conversar sobre quem leva o quê ao fazer, por exemplo, um churrasco ({バーベキュー}).\n' +
        '- Conversar sobre o que comprar ao fazer, por exemplo, uma festa em casa.\n' +
        '- Perguntar a um funcionário sobre ingredientes e validade dos alimentos e entender a resposta.\n' +
        '- Ler o rótulo dos alimentos ({食品表示|しょくひんひょうじ}) e conferir se não contém algo que não pode comer.\n\n' +
        '💡 Pergunta de abertura: だれかの{家|いえ}に{集|あつ}まってパーティーをすることがありますか？そのとき、どんなものを{食|た}べたり{飲|の}んだりしますか？',
    },
    {
      title: 'Levar/trazer: V-て行きます／来ます (➊)',
      bodyPt:
        '**V-て{行|い}く／{来|く}る** = fazer V primeiro e então ir/vir mantendo aquilo (liga-se à テ-forma):\n\n' +
        '- com 〜{行|い}く (o destino é “lá”): `{肉|にく}と{野菜|やさい}は{私|わたし}が{買|か}って{行|い}きます`, {持|も}って{行|い}く, {作|つく}って{行|い}く.\n' +
        '- com 〜{来|く}る (o movimento é “para cá”): `{国|くに}の{料理|りょうり}を{作|つく}って{来|き}ました`, {飲|の}み{物|もの}を{買|か}って{来|き}ました.\n\n' +
        'Útil para dividir quem leva o quê (持ち物の分担) num churrasco/festa.',
    },
    {
      title: 'Escolher: N1とN2どっち／どれ (➋) ／ Nのほうがいい (➌)',
      bodyPt:
        '**N1とN2、どっちがいいですか？ ／ S。どれがいいですか？** — pedir escolha num conjunto limitado:\n\n' +
        '- **どっち** = 2 opções ({塩|しお}とたれ、どっち); **どれ** = 3 ou mais (お{茶|ちゃ}…どれ). どっち = casual de どちら.\n\n' +
        '**Nのほうがいいです** — escolher uma de duas; N é a escolhida (`{塩|しお}のほうがいいです`). O のほうが pode cair → `Nがいいです` (`{肉|にく}がいいです`).',
    },
    {
      title: 'Sem preferência: 【疑問詞】でもいいです (➍)',
      bodyPt:
        '**【疑問詞】+でもいいです** = não ter preferência/pedido especial:\n\n' +
        '- `{何|なに}が{食|た}べたいですか？` → `{何|なん}でもいいです` (qualquer coisa).\n\n' +
        'Outras: {何|なん}でも (qualquer coisa), どっちでも (tanto faz), いつでも (a qualquer hora), だれでも (qualquer pessoa), どこでも (em qualquer lugar), いくつでも (quantos forem). > Obs.: a estrutura para perguntar ingredientes ({卵|たまご}を{使|つか}ってますか？) é tratada na **Lição 12 (➎)**.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Churrasco (Ativ. 1):** {肉|にく} ({牛肉|ぎゅうにく}/{豚肉|ぶたにく}/{鶏肉|とりにく}/ソーセージ), {野菜|やさい}, シーフード ({魚|さかな}/エビ/イカ/ホタテ), {果物|くだもの}, {焼|や}きそば, おにぎり, {焼肉|やきにく}のたれ／ソース, お{菓子|かし}, ソフトドリンク, お{酒|さけ}, コップ, お{皿|さら}, わりばし, ごみ{袋|ぶくろ}; {準備|じゅんび}, {飲|の}み{物|もの}, デザート, {焼|や}く. **Compras (Ativ. 2):** {売|う}る, {両方|りょうほう}. **Alergias/ingredientes (Ativ. 3):** エビ, カニ, {卵|たまご}, ピーナッツ/{落花生|らっかせい}, そば, {小麦|こむぎ}, {乳製品|にゅうせいひん}, {使|つか}ってる, {入|はい}ってる, もつ, {今日中|きょうじゅう}, {消費期限|しょうひきげん}, ハラル, コーナー, {商品|しょうひん}, すべて. **Rótulo (Ativ. 4):** {食品表示|しょくひんひょうじ}, {原材料名|げんざいりょうめい}, アレルギー{物質|ぶっしつ}, {乳成分|にゅうせいぶん}, {大豆|だいず}, {含|ふく}む.\n\n' +
        '**Kanji da lição:** {飲|の}み{物|もの}, お{茶|ちゃ}, お{酒|さけ}, {材料|ざいりょう}, {野菜|やさい}, {牛肉|ぎゅうにく}, {豚肉|ぶたにく}, {皿|さら}, {売|う}る, {持|も}って{行|い}く.\n\n' +
        '📌 **TIPS:** **バーベキュー** (carne + legumes + frutos do mar; grelha-se e come-se ao mesmo tempo; {焼|や}きそば/{焼|や}きおにぎり no fim; aluga-se equipamento, há locais que fornecem tudo); **スーパーの{惣菜|そうざい}コーナー** (pratos prontos — {揚|あ}げ{物|もの}, {焼|や}き{鳥|とり}, {煮物|にもの}, saladas; bom para quem tem pressa; {割引|わりびき} perto do fechamento).',
    },
  ],
  groups: [lesson11Group],
  audios: attachScripts(11, L11_SCRIPTS),
}

// ---- Lição 12: お弁当、おいしそうですね (tópico おいしい料理) ----------
const lesson12Group: ExerciseGroup = {
  id: 'iro-e1-l12',
  title: 'お弁当、おいしそうですね',
  subtitlePt: 'Comida gostosa · dar impressão pela aparência (おいし{そう}ですね／{辛|から}{そう}な{料理|りょうり}), comentar ao provar ({甘|あま}くておいしい・{食|た}べてみてください), explicar sabor/ingredientes ({甘|あま}くなくて…／〜が{入|はい}ってます) e perguntar com cuidado ({味|あじ}は、うすくないですか？)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l12-1', number: 1, prompt: '「そのお{弁当|べんとう}、おいしそうですね」 (〜そうです) serve para (Nota ➊):', choices: [{ n: 1, text: 'dar um juízo intuitivo a partir da APARÊNCIA (parece gostoso)' }, { n: 2, text: 'afirmar que já provou e estava gostoso' }, { n: 3, text: 'pedir para provar' }, { n: 4, text: 'dizer que cozinhou aquilo' }], answer: 1, translationPt: 'Esse bentô parece delicioso, né.', explanationPt: '〜そうです expressa impressão intuitiva pela aparência: おいしそう (parece gostoso), {辛|から}そう (parece picante). Pela aparência não se sabe o sabor real — só provando. (Nota ➊)' },
    { id: 'iro-e1-l12-2', number: 2, prompt: 'Como adjetivos ligam-se a 〜そうです (Nota ➊)?', choices: [{ n: 1, text: 'イA tira o い ({辛|から}い→{辛|から}そう); ナA tira o な ({元気|げんき}な→{元気|げんき}そう)' }, { n: 2, text: 'mantêm o い e o な' }, { n: 3, text: 'usa-se sempre a forma de dicionário + そう' }, { n: 4, text: 'só substantivos podem usar そう' }], answer: 1, explanationPt: 'イA: tira 〜い (おいしい→おいしそう, {辛|から}い→{辛|から}そう). ナA: tira 〜な ({元気|げんき}そう, {大変|たいへん}そう). Esta lição foca イA, mas também vale para ナA. (Nota ➊)' },
    { id: 'iro-e1-l12-3', number: 3, prompt: '「それ、{辛|から}そうな{料理|りょうり}ですね」 (〜そうなN) — o que esta forma faz (Nota ➋)?', choices: [{ n: 1, text: 'usa 〜そう para qualificar um substantivo (um prato que PARECE picante)' }, { n: 2, text: 'transforma a frase em pergunta' }, { n: 3, text: 'indica passado' }, { n: 4, text: 'nega o adjetivo' }], answer: 1, translationPt: 'Esse prato parece picante, né.', explanationPt: '〜そう também modifica substantivo: 〜そうなN. 「それ、{辛|から}そうな{料理|りょうり}ですね」 = 「その{料理|りょうり}、{辛|から}そうですね」. Ex.: おいしそうなケーキですね. (Nota ➋)' },
    { id: 'iro-e1-l12-4', number: 4, prompt: '「この{卵焼|たまごや}き、{甘|あま}くて、おいしいですね」 (イA-くて、〜) — o que 〜くて acrescenta aqui (Nota ➌)?', choices: [{ n: 1, text: 'além de listar, o 1º adjetivo dá o MOTIVO do seguinte (é gostoso PORQUE é doce)' }, { n: 2, text: 'indica ordem temporal' }, { n: 3, text: 'faz um pedido' }, { n: 4, text: 'expressa dúvida' }], answer: 1, translationPt: 'Este tamagoyaki é docinho e gostoso.', explanationPt: 'Na Lição 5 vimos 〜くて ligando 2+ adjetivos. Aqui 〜くて também marca motivo: o motivo de おいしい é {甘|あま}い. Ex.: {梅干|うめぼ}しはすっぱくて、{苦手|にがて}です. (Nota ➌)' },
    { id: 'iro-e1-l12-5', number: 5, prompt: 'E na forma negativa? 「{茶碗蒸|ちゃわんむ}し、{甘|あま}くなくて、おいしいですよ」 (Nota ➌)', choices: [{ n: 1, text: 'イA-くなくて、〜 = é gostoso PORQUE não é doce (motivo negativo)' }, { n: 2, text: 'é gostoso apesar de ser doce' }, { n: 3, text: 'não é gostoso nem doce' }, { n: 4, text: 'quer ficar doce' }], answer: 1, translationPt: 'O chawanmushi não é doce e (por isso) é gostoso.', explanationPt: 'A negativa de 〜くて é 〜くなくて. O motivo de {茶碗蒸|ちゃわんむ}しがおいしい é {甘|あま}くない. Ex.: この{料理|りょうり}は{辛|から}くなくて、{子|こ}どもも{食|た}べることができます. (Nota ➌)' },
    { id: 'iro-e1-l12-6', number: 6, prompt: '「よかったら、この{卵焼|たまごや}き、{食|た}べてみてください」 (V-てみます) significa (Nota ➍):', choices: [{ n: 1, text: 'experimentar algo novo para ver como é — aqui, oferecer comida (experimente comer)' }, { n: 2, text: 'olhar a comida sem comer' }, { n: 3, text: 'já ter comido antes' }, { n: 4, text: 'recusar a comida' }], answer: 1, translationPt: 'Se quiser, experimente comer este tamagoyaki.', explanationPt: 'V-てみます (V-てみる) = experimentar algo novo para saber como é. Aqui, V-てみてください oferece comida. (Nota ➍)' },
    { id: 'iro-e1-l12-7', number: 7, prompt: 'Variações de V-てみます (Nota ➍):', choices: [{ n: 1, text: '{行|い}ってみませんか？／{行|い}ってみる？／{行|い}ってみたい／{作|つく}ってみます — e liga-se ao V-てみたいんですが… da Lição 10' }, { n: 2, text: 'só existe a forma 〜てみてください' }, { n: 3, text: '〜てみる é uma negação' }, { n: 4, text: '〜てみる só se usa no passado' }], answer: 1, explanationPt: 'V-てみます tem várias formas: {行|い}ってみませんか？, {行|い}ってみる？, {行|い}ってみたい, {作|つく}ってみます. Relaciona-se a V-てみたいんですが… (Lição 10, querer experimentar pela 1ª vez). Ex.: {今度|こんど}、おすしを{作|つく}ってみます. (Nota ➍)' },
    { id: 'iro-e1-l12-8', number: 8, prompt: 'Verbos intransitivos (自動詞) vs transitivos (他動詞) (Nota ➎):', choices: [{ n: 1, text: '他動詞 = alguém faz a ação de propósito (ご{飯|はん}を{食|た}べる, ドアを{閉|し}める); 自動詞 = foca o evento, não quem faz ({雨|あめ}が{降|ふ}る, ドアが{閉|し}まる)' }, { n: 2, text: 'são a mesma coisa' }, { n: 3, text: '自動詞 sempre leva を' }, { n: 4, text: '他動詞 nunca tem sujeito' }], answer: 1, explanationPt: '他動詞 (transitivo): ação intencional de alguém, padrão ({人|ひと}が)NをV. 自動詞 (intransitivo): foca o acontecimento, padrão NがV. Pares: {入|はい}る/{入|い}れる, {焼|や}ける/{焼|や}く, {煮|に}える/{煮|に}る. (Nota ➎)' },
    { id: 'iro-e1-l12-9', number: 9, prompt: '「{鶏肉|とりにく}とか、エビとかが{入|はい}ってます」 vs 「{銀杏|ぎんなん}も{入|い}れますよ」 (Nota ➎):', choices: [{ n: 1, text: '〜が{入|はい}っています (自動詞+ている) descreve objetivamente o que TEM no prato; 〜を{入|い}れます (他動詞) = pôr de propósito' }, { n: 2, text: 'os dois significam exatamente o mesmo' }, { n: 3, text: '{入|はい}っている é mais educado que {入|い}れる' }, { n: 4, text: '{入|い}れる descreve um estado' }], answer: 1, translationPt: 'Tem frango, camarão… / Às vezes também ponho ginkgo.', explanationPt: '自動詞 のテ形+います = estado: 〜が{入|はい}っています (o que o prato contém, objetivo). 他動詞 〜を{入|い}れます = pôr intencionalmente. Ex.: すき{焼|や}きには{牛肉|ぎゅうにく}、{豆腐|とうふ}、ねぎが{入|はい}っています／ときどき、しいたけを{入|い}れます. (Nota ➎)' },
    { id: 'iro-e1-l12-10', number: 10, prompt: '「{味|あじ}は、うすくないですか？」 (イA-くないですか？) é usada para (Nota ➏):', choices: [{ n: 1, text: 'mostrar PREOCUPAÇÃO e checar se está tudo bem (não está sem graça/fraco demais pra você?)' }, { n: 2, text: 'afirmar que o sabor é forte' }, { n: 3, text: 'reclamar da comida' }, { n: 4, text: 'recusar o prato' }], answer: 1, translationPt: 'O sabor não está fraco demais pra você?', explanationPt: 'イA-くないですか？ checa, com preocupação, se está ok. Aqui pergunta sobre o sabor, com receio de que para quem não está acostumado a comida japonesa pareça {味|あじ}がうすい. (Nota ➏)' },
    { id: 'iro-e1-l12-11', number: 11, prompt: 'Outros exemplos de イA-くないですか？ (Nota ➏):', choices: [{ n: 1, text: '{難|むずか}しくないですか？ (não está difícil demais?) ／ {寒|さむ}くないですか？ (não está frio demais?) ／ わさび、{辛|から}くないですか？' }, { n: 2, text: 'おいしいです ／ {暑|あつ}いです ／ {辛|から}いです (afirmações)' }, { n: 3, text: '{難|むずか}しいですね ／ {寒|さむ}いですね (concordância)' }, { n: 4, text: '{難|むずか}しくない ／ {寒|さむ}くない (negações simples)' }], answer: 1, explanationPt: '〜くないですか？: {難|むずか}しくないですか？, {寒|さむ}くないですか？, わさび、{辛|から}くないですか？ → だいじょうぶです。わさび、{大好|だいす}きですから. (Nota ➏)' },
    { id: 'iro-e1-l12-12', number: 12, prompt: 'Vocabulário de sabor (Atividade 1): 「{甘|あま}い／{辛|から}い／すっぱい／しょっぱい／{苦|にが}い」 significam:', choices: [{ n: 1, text: 'doce ／ picante/apimentado ／ azedo ／ salgado ／ amargo' }, { n: 2, text: 'salgado ／ doce ／ amargo ／ azedo ／ picante' }, { n: 3, text: 'quente ／ frio ／ forte ／ fraco ／ insosso' }, { n: 4, text: 'gostoso ／ ruim ／ leve ／ pesado ／ fresco' }], answer: 1, explanationPt: '{甘|あま}い (doce), {辛|から}い (picante), すっぱい (azedo), しょっぱい (salgado), {苦|にが}い (amargo). (Atividade 1 · ことば【味】)' },
    { id: 'iro-e1-l12-13', number: 13, prompt: 'Mais sobre sabor (Atividade 1): 「{味|あじ}がこい／{味|あじ}がうすい／おいしい／まずい」 significam:', choices: [{ n: 1, text: 'sabor forte/concentrado ／ sabor fraco/sem graça ／ gostoso ／ ruim (sem gosto)' }, { n: 2, text: 'sabor fraco ／ sabor forte ／ ruim ／ gostoso' }, { n: 3, text: 'doce ／ amargo ／ quente ／ frio' }, { n: 4, text: 'salgado ／ azedo ／ caro ／ barato' }], answer: 1, explanationPt: '{味|あじ}がこい (sabor forte/concentrado) ↔ {味|あじ}がうすい (sabor fraco/aguado); おいしい (gostoso) ↔ まずい (ruim). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l12-14', number: 14, prompt: 'Vocabulário (Atividade 2): 「もう1つ／お{腹|なか}がいっぱい／どんどん／{苦手|にがて}（な）／{似|に}ている」 significam:', choices: [{ n: 1, text: 'mais um ／ estar de barriga cheia ／ à vontade/sem parar (coma mais!) ／ não ir bem com/não curtir ／ ser parecido com' }, { n: 2, text: 'só um ／ estar com fome ／ devagar ／ adorar ／ ser diferente' }, { n: 3, text: 'menos um ／ estar satisfeito ／ rápido ／ odiar ／ ser igual' }, { n: 4, text: 'nenhum ／ estar cheio ／ pouco ／ gostar ／ combinar' }], answer: 1, explanationPt: 'もう1つ (mais um), お{腹|なか}がいっぱい (de barriga cheia), どんどん{食|た}べてください (coma à vontade), {苦手|にがて}（な） (não curtir/não ir bem com), {似|に}ている (ser parecido: バインセオに{似|に}ています). (Atividade 2 · 大切なことば)' },
    { id: 'iro-e1-l12-15', number: 15, prompt: 'Vocabulário (Atividade 3 · 茶碗蒸し): 「だし／プリン／きのこ／{銀杏|ぎんなん}／いいにおい／{入|い}れる」 significam:', choices: [{ n: 1, text: 'caldo (dashi) ／ pudim ／ cogumelo ／ ginkgo (gingko) ／ cheiro bom ／ pôr/colocar' }, { n: 2, text: 'molho ／ bolo ／ legume ／ noz ／ cheiro ruim ／ tirar' }, { n: 3, text: 'sopa ／ gelatina ／ erva ／ semente ／ sabor ／ misturar' }, { n: 4, text: 'sal ／ creme ／ raiz ／ fruta ／ vapor ／ cortar' }], answer: 1, explanationPt: 'だし (caldo japonês), プリン (pudim — 茶碗蒸し parece pudim mas não é doce), きのこ (cogumelo), {銀杏|ぎんなん} (ginkgo), いいにおい (cheiro bom), {入|い}れる (pôr — 他動詞). (Atividade 3 · ことば)' },
    { id: 'iro-e1-l12-16', number: 16, prompt: 'Vocabulário do modo de preparo (Atividade 4 · カップ焼きそば): 「{調理方法|ちょうりほうほう}／フタ／{取|と}り{出|だ}す／めん／{熱湯|ねっとう}／{注|そそ}ぐ／お{湯|ゆ}／{捨|す}てる／かける／{混|ま}ぜる」 significam:', choices: [{ n: 1, text: 'modo de preparo ／ tampa ／ retirar/tirar ／ macarrão ／ água fervente ／ despejar/verter ／ água quente ／ jogar fora/descartar ／ pôr por cima (polvilhar) ／ misturar' }, { n: 2, text: 'ingredientes ／ copo ／ guardar ／ arroz ／ água gelada ／ ferver ／ chá ／ guardar ／ cortar ／ bater' }, { n: 3, text: 'receita ／ prato ／ abrir ／ molho ／ vapor ／ provar ／ caldo ／ lavar ／ aquecer ／ enrolar' }, { n: 4, text: 'embalagem ／ filme ／ furar ／ tempero ／ gelo ／ secar ／ leite ／ encher ／ servir ／ dobrar' }], answer: 1, explanationPt: '{調理方法|ちょうりほうほう} (modo de preparo), フタ (tampa), {取|と}り{出|だ}す (retirar), めん (macarrão), {熱湯|ねっとう} (água fervente), {注|そそ}ぐ (verter), お{湯|ゆ} (água quente), {捨|す}てる (descartar), かける (polvilhar/pôr por cima), {混|ま}ぜる (misturar). (Atividade 4 · 大切なことば)' },
    { id: 'iro-e1-l12-17', number: 17, prompt: 'Os kanji 「{卵|たまご}／{料理|りょうり}／お{湯|ゆ}／{調理方法|ちょうりほうほう}／{少|すこ}し」 lêem-se:', choices: [{ n: 1, text: 'たまご (ovo) ／ りょうり (prato/culinária) ／ おゆ (água quente) ／ ちょうりほうほう (modo de preparo) ／ すこし (um pouco)' }, { n: 2, text: 'たまご ／ りょうり ／ おゆ ／ ちょうりほうほう ／ しょうし' }, { n: 3, text: 'らん ／ りょうり ／ おとう ／ ちょうりかた ／ すこし' }, { n: 4, text: 'たまご ／ りょうじ ／ おゆ ／ ちょうりほうほう ／ すくなし' }], answer: 1, explanationPt: '{卵|たまご} (ovo), {料理|りょうり} (prato/culinária), お{湯|ゆ} (água quente), {調理方法|ちょうりほうほう} (modo de preparo), {少|すこ}し (um pouco). (漢字のことば)' },
    { id: 'iro-e1-l12-18', number: 18, prompt: 'Os kanji 「{味|あじ}／{甘|あま}い／{辛|から}い」 lêem-se:', choices: [{ n: 1, text: 'あじ (sabor) ／ あまい (doce) ／ からい (picante)' }, { n: 2, text: 'み ／ かんい ／ しんい' }, { n: 3, text: 'あじ ／ あまい ／ つらい' }, { n: 4, text: 'み ／ あまい ／ からい' }], answer: 1, explanationPt: '{味|あじ} (sabor), {甘|あま}い (doce), {辛|から}い (picante). Obs.: {辛|から}い (picante) e {辛|つら}い (penoso) usam o mesmo kanji com leituras diferentes. (漢字のことば)' },
    { id: 'iro-e1-l12-19', number: 19, prompt: 'O kanji 「{苦手|にがて}（な）」 lê-se e significa:', choices: [{ n: 1, text: 'にがて — não ir bem com algo / não curtir (relaciona-se a {苦|にが}い = amargo)' }, { n: 2, text: 'くて — fácil' }, { n: 3, text: 'にがて — favorito' }, { n: 4, text: 'くるて — difícil de achar' }], answer: 1, explanationPt: '{苦手|にがて}（な） = não ir bem com / não gostar muito de (mesmo kanji de {苦|にが}い, amargo). Kanji da lição: {卵|たまご}・{料理|りょうり}・お{湯|ゆ}・{調理方法|ちょうりほうほう}・{少|すこ}し・{味|あじ}・{甘|あま}い・{辛|から}い・{苦手|にがて}（な）. (漢字)' },
    { id: 'iro-e1-l12-20', number: 20, prompt: '📌 TIPS — お{弁当|べんとう} (Obento):', choices: [{ n: 1, text: 'compra-se em conbini/supermercado/loja de bentô, ou faz-se em casa; sabor E aparência importam — equilibra-se a cor (tomate vermelho, tamagoyaki amarelo, legumes verdes, arroz branco, nori/gergelim preto); há muitos “acessórios de bentô”' }, { n: 2, text: 'só se compra em restaurantes caros' }, { n: 3, text: 'nunca se faz em casa' }, { n: 4, text: 'só pode ter arroz branco' }], answer: 1, explanationPt: 'お{弁当|べんとう}: compra-se ou faz-se em casa; pratos comuns são {卵焼|たまごや}き, からあげ, ハンバーグ, ポテトサラダ. Valoriza-se {見|み}た{目|め} (aparência) e o equilíbrio de cores. Há vários お{弁当|べんとう}グッズ para enfeitar. (TIPS)' },
    { id: 'iro-e1-l12-21', number: 21, prompt: '📌 TIPS — {卵焼|たまごや}き (Tamago-yaki):', choices: [{ n: 1, text: 'omelete enrolada, prato caseiro clássico (café da manhã e bentô); temperos variam — no Kantō costuma ser docinho (açúcar), no Kansai não-doce (com dashi); pode levar cebolinha, espinafre, shirasu, mentaiko' }, { n: 2, text: 'é uma sobremesa gelada' }, { n: 3, text: 'só se come em restaurantes' }, { n: 4, text: 'é sempre salgado e nunca leva nada dentro' }], answer: 1, explanationPt: '{卵焼|たまごや}き = omelete enrolada, {定番|ていばん} caseiro (café da manhã, bentô). No {関東|かんとう} tende a ser doce (açúcar); no {関西|かんさい}, não-doce (dashi). Variações com ねぎ, ほうれん{草|そう}, しらす, {明太子|めんたいこ}. (TIPS)' },
    { id: 'iro-e1-l12-22', number: 22, prompt: '📌 TIPS — お{好|この}み{焼|や}き (Okonomiyaki):', choices: [{ n: 1, text: 'panqueca salgada com repolho, carne, frutos do mar etc. na massa de farinha e água; estilo Kansai mistura tudo antes; Hiroshima vai em camadas; em Osaka/Hiroshima o garçom prepara, em Tóquio costuma-se grelhar na chapa da mesa' }, { n: 2, text: 'é um bolo doce de aniversário' }, { n: 3, text: 'é feito só de arroz' }, { n: 4, text: 'nunca leva repolho' }], answer: 1, explanationPt: 'お{好|この}み{焼|や}き = panqueca japonesa (repolho/carne/frutos do mar + massa de {小麦粉|こむぎこ} e água, na {鉄板|てっぱん}). Kansai: mistura antes; Hiroshima: em camadas. Em {大阪|おおさか}/{広島|ひろしま} o funcionário faz; em {東京|とうきょう} grelha-se na mesa. (TIPS)' },
    { id: 'iro-e1-l12-23', number: 23, prompt: 'Diálogo 12-03: A elogia o bentô de B. O que B responde e A decide?', context: 'A：そのお{弁当|べんとう}、おいしそうですね。 B：あ、これですか？おいしいですよ。{駅前|えきまえ}のコンビニで{買|か}いました。 A：へー。じゃ、{今度|こんど}、{買|か}ってみます。', choices: [{ n: 1, text: 'O bentô “parece gostoso”; B comprou na conbini perto da estação; A vai experimentar comprar ({買|か}ってみます)' }, { n: 2, text: 'B fez o bentô em casa; A não quer' }, { n: 3, text: 'A acha o bentô feio' }, { n: 4, text: 'B vai dar o bentô para A' }], answer: 1, explanationPt: 'おいしそうですね (〜そう, ➊); {駅前|えきまえ}のコンビニで{買|か}いました; {買|か}ってみます (V-てみます, ➍). (Atividade 1 · 聴解スクリプト 12-03)' },
    { id: 'iro-e1-l12-24', number: 24, prompt: 'Diálogo 12-04: A acha o prato de B picante. É mesmo?', context: 'A：わー、それ、{辛|から}そうな{料理|りょうり}ですね。 B：これですか？{私|わたし}の{国|くに}のカレーです。あまり{辛|から}くないですよ。 A：そうなんですか。', choices: [{ n: 1, text: 'Pela aparência parece picante (辛そうな料理), mas é um curry do país de B e não é muito picante' }, { n: 2, text: 'É picantíssimo' }, { n: 3, text: 'É um doce' }, { n: 4, text: 'B não sabe o que é' }], answer: 1, explanationPt: '{辛|から}そうな{料理|りょうり} (〜そうなN, ➋) pela aparência; mas あまり{辛|から}くないですよ (não muito picante). (Atividade 1 · 12-04)' },
    { id: 'iro-e1-l12-25', number: 25, prompt: 'Diálogos 12-05 e 12-06: o que A diz sobre a bebida e sobre a tangerina?', context: '③ B：これは、チョコレートバニラクリームラテ。 A：へー、{甘|あま}そうですね。 ④ A：みかん、1つどう？うちの{庭|にわ}でとれたのよ。 B：でも、まだ、ちょっとすっぱそうですね。 A：そんなことないわよ。{甘|あま}いわよ。 B：あ、{本当|ほんとう}だ。{甘|あま}い。', choices: [{ n: 1, text: '③ o latte “parece doce” (甘そう). ④ a tangerina “parece azeda” (すっぱそう), mas na verdade está doce' }, { n: 2, text: '③ o latte é amargo. ④ a tangerina é azeda mesmo' }, { n: 3, text: '③ A não quer o latte. ④ B não come a tangerina' }, { n: 4, text: 'Os dois falam de carne' }], answer: 1, explanationPt: '{甘|あま}そう / すっぱそう = impressão pela aparência (➊). A tangerina ainda meio verde parece azeda, mas そんなことない…{甘|あま}い (na verdade doce — só provando se sabe). (Atividade 1 · 12-05/12-06)' },
    { id: 'iro-e1-l12-26', number: 26, prompt: 'Diálogo 12-10: A oferece tamagoyaki. O que B faz e acha?', context: 'A：よかったら、この{卵焼|たまごや}き、{食|た}べてみてください。 B：ありがとうございます。……あ、{甘|あま}くておいしいですね。 A：もう1つどうですか？ B：じゃあ、もう1ついただきます。', choices: [{ n: 1, text: 'B experimenta (食べてみてください); acha “docinho e gostoso” (甘くておいしい) e aceita mais um' }, { n: 2, text: 'B recusa provar' }, { n: 3, text: 'B acha salgado demais' }, { n: 4, text: 'B já estava cheio' }], answer: 1, explanationPt: '{食|た}べてみてください (V-てみます, ➍); {甘|あま}くておいしい (motivo com 〜くて, ➌); もう1ついただきます. (Atividade 2 · 聴解スクリプト 12-10)' },
    { id: 'iro-e1-l12-27', number: 27, prompt: 'Diálogo 12-11: B prova o okonomiyaki. Aceita mais?', context: 'A：お{好|この}み{焼|や}き、どう？おいしい？ B：はい、おいしいです。{私|わたし}の{国|くに}のバインセオに{似|に}ています。 A：もう{少|すこ}し{食|た}べる？ B：あ、だいじょうぶです。もうお{腹|なか}がいっぱいです。', choices: [{ n: 1, text: 'Acha gostoso (parecido com o bánh xèo do país dele); recusa mais, pois já está de barriga cheia' }, { n: 2, text: 'Não gostou' }, { n: 3, text: 'Aceita mais três porções' }, { n: 4, text: 'Nunca tinha comido nada parecido' }], answer: 1, explanationPt: 'バインセオに{似|に}ています (ser parecido); もう{少|すこ}し{食|た}べる？ → だいじょうぶです。もうお{腹|なか}がいっぱい (recusa educada). (Atividade 2 · 12-11)' },
    { id: 'iro-e1-l12-28', number: 28, prompt: 'Diálogo 12-12: B oferece umeboshi. O que A acha?', context: 'B：これ？{梅干|うめぼ}し。{食|た}べてみる？ A：はい。 B：どう？ A：う、……すみません。すっぱくて、ちょっと{苦手|にがて}です。', choices: [{ n: 1, text: 'A prova, mas acha azedo e diz que não curte muito (すっぱくて、ちょっと苦手)' }, { n: 2, text: 'A adora e pede mais' }, { n: 3, text: 'A recusa provar' }, { n: 4, text: 'A acha doce' }], answer: 1, explanationPt: '{食|た}べてみる？ (V-てみる, ➍); すっぱくて、ちょっと{苦手|にがて}です (motivo com 〜くて, ➌, recusa educada). (Atividade 2 · 12-12)' },
    { id: 'iro-e1-l12-29', number: 29, prompt: 'Diálogo 12-13: comendo sukiyaki, qual o problema de A com o ovo?', context: 'A：すき{焼|や}き、おいしいですね。 B：よかった。どんどん{食|た}べてください。 …B：{卵|たまご}は{使|つか}わないんですか？ A：あ、{生|なま}の{卵|たまご}はちょっとだめです。すみません。', choices: [{ n: 1, text: 'A gosta do sukiyaki, mas não come ovo CRU (生の卵はちょっとだめ)' }, { n: 2, text: 'A não gosta de sukiyaki' }, { n: 3, text: 'A quer mais ovo cru' }, { n: 4, text: 'B não tem ovo' }], answer: 1, explanationPt: 'どんどん{食|た}べてください (coma à vontade); {生|なま}の{卵|たまご}はちょっとだめです (não come ovo cru). (Atividade 2 · 12-13)' },
    { id: 'iro-e1-l12-30', number: 30, prompt: 'Diálogo 12-18: o que é o 茶碗蒸し e o que tem dentro?', context: 'ラン：これは{何|なん}ですか？ {森|もり}：{茶碗蒸|ちゃわんむ}し。{卵|たまご}の{料理|りょうり}です。プリンに{似|に}てますけど、{甘|あま}くなくて、おいしいですよ。だしを{使|つか}います。 …ラン：{中|なか}に{何|なに}が{入|はい}ってますか？ {森|もり}：{鶏肉|とりにく}とか、エビとか、きのことかが{入|はい}ってます。ときどき、{銀杏|ぎんなん}も{入|い}れますよ。', choices: [{ n: 1, text: 'É um prato de ovo, parecido com pudim mas não doce (e por isso gostoso); leva dashi, e dentro tem frango, camarão, cogumelo (às vezes ginkgo)' }, { n: 2, text: 'É uma sobremesa bem doce, sem ovo' }, { n: 3, text: 'É uma sopa de carne picante' }, { n: 4, text: 'É feito só de arroz' }], answer: 1, explanationPt: '{卵|たまご}の{料理|りょうり}; プリンに{似|に}てますけど{甘|あま}くなくて、おいしい (〜くなくて motivo, ➌); {鶏肉|とりにく}とか…が{入|はい}ってます (自動詞, ➎), {銀杏|ぎんなん}も{入|い}れます (他動詞). {味|あじ}は、うすくないですか？ (➏). (Atividade 3 · 聴解スクリプト 12-18)' },
    { id: 'iro-e1-l12-31', number: 31, prompt: 'Atividade 4 (modo de preparo do カップ焼きそば): qual a ordem correta dos passos?', context: 'Passos: tirar os sachês (かやく/ソース/ふりかけ) → pôr a かやく sobre o macarrão → verter água fervente até a linha → esperar 3 min → escorrer a água quente → pôr a ソース e misturar → pôr a ふりかけ.', choices: [{ n: 1, text: 'tirar os sachês → かやく no macarrão → verter água fervente → esperar 3 min → escorrer a água → pôr o molho e misturar → polvilhar o furikake' }, { n: 2, text: 'verter água fervente → esperar → tirar os sachês → comer' }, { n: 3, text: 'pôr o molho → misturar → verter água → esperar' }, { n: 4, text: 'escorrer a água → pôr a かやく → verter água → esperar' }], answer: 1, explanationPt: 'Ordem: ①{取|と}り{出|だ}す os sachês → ②かやくを{入|い}れる → ③{熱湯|ねっとう}を{注|そそ}ぐ → ④3{分|ぷん}{待|ま}つ → ⑤お{湯|ゆ}を{捨|す}てる → ⑥ソースをかけて{混|ま}ぜる → ⑦ふりかけをかける. (Atividade 4 · {作|つく}り{方|かた})' },
    { id: 'iro-e1-l12-32', number: 32, prompt: 'Pergunta de abertura da lição: 「{日本|にほん}の{食|た}べ{物|もの}を{食|た}べたことがありますか？どうでしたか？」 quer dizer:', choices: [{ n: 1, text: 'Você já comeu comida japonesa? Como foi (o que achou)?' }, { n: 2, text: 'Você gosta de cozinhar comida japonesa?' }, { n: 3, text: 'Onde se compra comida japonesa?' }, { n: 4, text: 'Quantas vezes por semana você come fora?' }], answer: 1, translationPt: 'Você já experimentou comida japonesa? Como foi?', explanationPt: '〜を{食|た}べたことがありますか (experiência, Lição 8); どうでしたか (como foi/o que achou). Tema: おいしい{料理|りょうり}. (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 12
const L12_SCRIPTS: Record<string, ScriptItem[]> = {
  '12-03': [
    {
      label: '会話① (12-03) — おいしそうですね',
      setupJa: '{職場|しょくば}の{昼休|ひるやす}みに、ほかの{人|ひと}が{持|も}って{来|き}た{食|た}べ{物|もの}を{見|み}て{話|はな}しています。',
      setupPt: 'No almoço do trabalho, comentam sobre a comida que outra pessoa trouxe.',
      lines: [
        { speaker: 'A', ja: 'そのお{弁当|べんとう}、おいしそうですね。', pt: 'Esse bentô parece delicioso, né.' },
        { speaker: 'B', ja: 'あ、これですか？おいしいですよ。{駅前|えきまえ}のコンビニで{買|か}いました。', pt: 'Ah, este? É gostoso, sim. Comprei na conbini em frente à estação.' },
        { speaker: 'A', ja: 'へー。じゃ、{今度|こんど}、{買|か}ってみます。', pt: 'Nossa. Então, da próxima vez, vou experimentar comprar.' },
      ],
    },
  ],
  '12-04': [
    {
      label: '会話② (12-04) — 辛そうな料理ですね',
      lines: [
        { speaker: 'A', ja: 'わー、それ、{辛|から}そうな{料理|りょうり}ですね。', pt: 'Uau, esse prato parece picante, né.' },
        { speaker: 'B', ja: 'これですか？{私|わたし}の{国|くに}のカレーです。あまり{辛|から}くないですよ。', pt: 'Este? É um curry do meu país. Não é muito picante, não.' },
        { speaker: 'A', ja: 'そうなんですか。', pt: 'Ah, é mesmo?' },
      ],
    },
  ],
  '12-05': [
    {
      label: '会話③ (12-05) — 甘そうですね',
      lines: [
        { speaker: 'A', ja: 'それ、{何|なん}ですか？', pt: 'Isso, o que é?' },
        { speaker: 'B', ja: 'これ？これは、チョコレートバニラクリームラテ。', pt: 'Isto? É um latte de chocolate, baunilha e creme.' },
        { speaker: 'A', ja: 'へー、{甘|あま}そうですね。', pt: 'Nossa, parece doce, né.' },
      ],
    },
  ],
  '12-06': [
    {
      label: '会話④ (12-06) — ちょっとすっぱそうですね',
      lines: [
        { speaker: 'A', ja: 'みかん、1つどう？うちの{庭|にわ}でとれたのよ。', pt: 'Quer uma tangerina? Foi colhida no nosso quintal.' },
        { speaker: 'B', ja: 'じゃあ、いただきます。でも、まだ、ちょっとすっぱそうですね。', pt: 'Então, aceito. Mas ainda parece um pouquinho azeda, né.' },
        { speaker: 'A', ja: 'そんなことないわよ。{甘|あま}いわよ。', pt: 'Que nada. Está doce!' },
        { speaker: 'B', ja: 'あ、{本当|ほんとう}だ。{甘|あま}い。', pt: 'Ah, é verdade. Está doce.' },
      ],
    },
  ],
  '12-10': [
    {
      label: '会話① (12-10) — 甘くておいしいですね',
      setupJa: '4{人|よにん}の{人|ひと}が、ほかの{人|ひと}といっしょにご{飯|はん}を{食|た}べています。',
      setupPt: 'Quatro pessoas estão fazendo uma refeição com outra pessoa.',
      lines: [
        { speaker: 'A', ja: 'よかったら、この{卵焼|たまごや}き、{食|た}べてみてください。', pt: 'Se quiser, experimente este tamagoyaki.' },
        { speaker: 'B', ja: 'ありがとうございます。……あ、{甘|あま}くておいしいですね。', pt: 'Obrigado(a). …Ah, é docinho e gostoso, né.' },
        { speaker: 'A', ja: 'もう1つどうですか？', pt: 'Que tal mais um?' },
        { speaker: 'B', ja: 'じゃあ、もう1ついただきます。', pt: 'Então, aceito mais um.' },
      ],
    },
  ],
  '12-11': [
    {
      label: '会話② (12-11) — もうお腹がいっぱいです',
      lines: [
        { speaker: 'A', ja: 'お{好|この}み{焼|や}き、どう？おいしい？', pt: 'E o okonomiyaki? Está gostoso?' },
        { speaker: 'B', ja: 'はい、おいしいです。{私|わたし}の{国|くに}のバインセオに{似|に}ています。', pt: 'Sim, está gostoso. Parece o bánh xèo do meu país.' },
        { speaker: 'A', ja: 'もう{少|すこ}し{食|た}べる？', pt: 'Quer comer mais um pouco?' },
        { speaker: 'B', ja: 'あ、だいじょうぶです。もうお{腹|なか}がいっぱいです。', pt: 'Ah, estou bem. Já estou de barriga cheia.' },
      ],
    },
  ],
  '12-12': [
    {
      label: '会話③ (12-12) — すっぱくて、ちょっと苦手です',
      lines: [
        { speaker: 'A', ja: 'それ、{何|なん}ですか？', pt: 'Isso, o que é?' },
        { speaker: 'B', ja: 'これ？{梅干|うめぼ}し。{食|た}べてみる？', pt: 'Isto? Umeboshi. Quer experimentar?' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'B', ja: 'どう？', pt: 'E aí, que tal?' },
        { speaker: 'A', ja: 'う、……すみません。すっぱくて、ちょっと{苦手|にがて}です。', pt: 'Ai… desculpa. É azedo, não curto muito.' },
        { speaker: 'B', ja: 'あ、そう。', pt: 'Ah, é?' },
      ],
    },
  ],
  '12-13': [
    {
      label: '会話④ (12-13) — 生の卵はちょっとだめです',
      lines: [
        { speaker: 'A', ja: 'すき{焼|や}き、おいしいですね。', pt: 'O sukiyaki está gostoso, né.' },
        { speaker: 'B', ja: 'よかった。どんどん{食|た}べてください。', pt: 'Que bom. Coma à vontade.' },
        { speaker: 'A', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'B', ja: '{卵|たまご}は{使|つか}わないんですか？', pt: 'Você não usa o ovo?' },
        { speaker: 'A', ja: 'あ、{生|なま}の{卵|たまご}はちょっとだめです。すみません。', pt: 'Ah, ovo cru eu não como muito bem. Desculpa.' },
      ],
    },
  ],
  '12-18': [
    {
      label: '会話 (12-18) — 卵の料理です（茶碗蒸し）',
      setupJa: '{森|もり}さんとランさんが、{和食|わしょく}のレストランで{食事|しょくじ}をしています。',
      setupPt: 'Mori e Lan estão comendo num restaurante de comida japonesa.',
      lines: [
        { speaker: 'ラン', ja: 'これは{何|なん}ですか？', pt: 'O que é isto?' },
        { speaker: '森', ja: '{茶碗蒸|ちゃわんむ}し。{卵|たまご}の{料理|りょうり}です。プリンに{似|に}てますけど、{甘|あま}くなくて、おいしいですよ。だしを{使|つか}います。', pt: 'Chawanmushi. É um prato de ovo. Parece pudim, mas não é doce — é gostoso. Leva dashi.' },
        { speaker: 'ラン', ja: 'だし？', pt: 'Dashi?' },
        { speaker: '森', ja: 'えーと、まあ、{日本|にほん}のスープかな。', pt: 'Ahn… é tipo um caldo japonês.' },
        { speaker: 'ラン', ja: 'へー。{中|なか}に{何|なに}が{入|はい}ってますか？', pt: 'Ah. O que tem dentro?' },
        { speaker: '森', ja: '{鶏肉|とりにく}とか、エビとか、きのことかが{入|はい}ってます。ときどき、{銀杏|ぎんなん}も{入|い}れますよ。', pt: 'Tem frango, camarão, cogumelo… Às vezes também se põe ginkgo.' },
        { speaker: 'ラン', ja: 'わあ、いいにおい。いただきます。', pt: 'Uau, que cheiro bom. Itadakimasu.' },
        { speaker: '森', ja: '{味|あじ}は、うすくないですか？', pt: 'O sabor não está fraco demais pra você?' },
        { speaker: 'ラン', ja: 'おいしいです。', pt: 'Está gostoso.' },
        { speaker: '森', ja: 'よかった。', pt: 'Que bom.' },
      ],
    },
  ],
}

const lesson12: Section = {
  id: 'lesson-12',
  level: 'elementary1',
  titleJa: '第12課 お弁当、おいしそうですね',
  titlePt: 'Lição 12 — O bentô parece delicioso, né',
  summaryPt: 'Comida gostosa · comentar a impressão pela aparência (おいし{そう}ですね／{辛|から}{そう}な{料理|りょうり}), dar a impressão ao provar ({甘|あま}くておいしい・{食|た}べてみてください), explicar sabor e ingredientes ({甘|あま}くなくて、おいしい／{鶏肉|とりにく}が{入|はい}ってます／{銀杏|ぎんなん}を{入|い}れます) e perguntar com cuidado ({味|あじ}は、うすくないですか？).',
  studyNotes: [
    {
      title: 'Tópico: Comida gostosa (おいしい料理)',
      bodyPt:
        '## Can-do\n' +
        '- Dizer a impressão sobre a aparência de um alimento.\n' +
        '- Comentar sobre um alimento recomendado depois de prová-lo.\n' +
        '- Perguntar e responder sobre sabor, ingredientes etc. de um prato.\n' +
        '- Ler o modo de preparo de um alimento instantâneo e entender os passos.\n\n' +
        '💡 Pergunta de abertura: {日本|にほん}の{食|た}べ{物|もの}を{食|た}べたことがありますか？どうでしたか？',
    },
    {
      title: 'Aparência: 〜そうです (➊) ／ 〜そうなN (➋)',
      bodyPt:
        '**ナA-／イA- そうです** = juízo intuitivo pela **aparência** (não se confirma o sabor sem provar):\n\n' +
        '- `おいしそうですね`, `{辛|から}そうですね`, `{甘|あま}そう`, `すっぱそう`. Forma: イA tira 〜い ({辛|から}い→{辛|から}そう); ナA tira 〜な ({元気|げんき}そう, {大変|たいへん}そう).\n\n' +
        '**ナA-／イA- そうなN** = qualifica substantivo: `{辛|から}そうな{料理|りょうり}` (= `その{料理|りょうり}、{辛|から}そうですね`), `おいしそうなケーキ`.',
    },
    {
      title: 'Motivo: イA-くて／くなくて (➌) ／ Experimentar: V-てみます (➍)',
      bodyPt:
        '**イA-くて、〜 ／ イA-くなくて、〜** — o adjetivo anterior dá o **motivo** do seguinte:\n\n' +
        '- `{甘|あま}くて、おいしい` (gostoso porque é doce); negativo: `{甘|あま}くなくて、おいしい` (gostoso porque não é doce); `すっぱくて、{苦手|にがて}です`.\n\n' +
        '**V-てみます (V-てみる)** = experimentar algo novo p/ ver como é: `{食|た}べてみてください` (oferta), `{食|た}べてみる？`, `{作|つく}ってみます`. Liga-se a V-てみたいんですが… (Lição 10).',
    },
    {
      title: 'Intransitivo/transitivo (➎) ／ Perguntar com cuidado: 〜くないですか？ (➏)',
      bodyPt:
        '**自動詞／他動詞** — pares como {入|はい}る/{入|い}れる, {焼|や}ける/{焼|や}く, {煮|に}える/{煮|に}る:\n\n' +
        '- 自動詞 (NがV): foca o evento — `〜が{入|はい}っています` descreve **o que o prato contém** (objetivo).\n' +
        '- 他動詞 (NをV): ação intencional — `〜を{入|い}れます` (pôr de propósito).\n\n' +
        '**イA-くないですか？** = perguntar com **preocupação**, checando se está ok: `{味|あじ}は、うすくないですか？`, `{難|むずか}しくないですか？`, `{寒|さむ}くないですか？`.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Sabor (Ativ. 1):** {甘|あま}い, {辛|から}い, すっぱい, しょっぱい, {苦|にが}い, {味|あじ}がこい, {味|あじ}がうすい, おいしい, まずい. **Provar/comentar (Ativ. 2):** もう1つ, お{腹|なか}がいっぱい, どんどん, {苦手|にがて}（な）, {似|に}ている. **Prato/ingredientes (Ativ. 3):** {茶碗蒸|ちゃわんむ}し, だし, プリン, きのこ, {銀杏|ぎんなん}, いいにおい, {入|い}れる, {生|なま}の{卵|たまご}. **Modo de preparo (Ativ. 4):** {調理方法|ちょうりほうほう}, フタ, {取|と}り{出|だ}す, めん, {熱湯|ねっとう}, {注|そそ}ぐ, お{湯|ゆ}, {捨|す}てる, かける, {混|ま}ぜる.\n\n' +
        '**Kanji da lição:** {卵|たまご}, {料理|りょうり}, お{湯|ゆ}, {調理方法|ちょうりほうほう}, {少|すこ}し, {味|あじ}, {甘|あま}い, {辛|から}い, {苦手|にがて}（な）.\n\n' +
        '📌 **TIPS:** **お{弁当|べんとう}** (compra-se ou faz-se em casa; valoriza sabor E aparência/cores; há お{弁当|べんとう}グッズ); **{卵焼|たまごや}き** (omelete enrolada caseira; {関東|かんとう} doce com açúcar, {関西|かんさい} com dashi); **お{好|この}み{焼|や}き** (panqueca de repolho/carne/frutos do mar; Kansai mistura antes, Hiroshima em camadas).',
    },
  ],
  groups: [lesson12Group],
  audios: attachScripts(12, L12_SCRIPTS),
}

// ---- Lição 13: あと10分ぐらいで終わりそうです (tópico 仕事の連絡) ----------
const lesson13Group: ExerciseGroup = {
  id: 'iro-e1-l13',
  title: 'あと10分ぐらいで終わりそうです',
  subtitlePt: 'Comunicação no trabalho · relatar um problema ({電気|でんき}がつかない{んですが}…), prever o andamento ({終|お}わり{そう}です／どのぐらいかかり{そう}ですか), perguntar como usar uma máquina ({使|つか}い{方|かた}を{教|おし}えてもらえませんか／したいときは、どうすればいいですか) e explicar pela condicional ({押|お}す{と}、〜)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l13-1', number: 1, prompt: '「{会議室|かいぎしつ}の{電気|でんき}がつかないんですが…」 (〜んですが…) serve para (Nota ➊):', choices: [{ n: 1, text: 'explicar a própria situação (um problema) e, com isso, pedir que o outro tome providência' }, { n: 2, text: 'elogiar o ambiente de trabalho' }, { n: 3, text: 'recusar uma tarefa' }, { n: 4, text: 'dar uma ordem direta' }], answer: 1, translationPt: 'A luz da sala de reunião não acende…', explanationPt: '〜んですが… explica uma situação/problema para receber instruções do outro. Aqui relata-se um problema no trabalho. (Nota ➊)' },
    { id: 'iro-e1-l13-2', number: 2, prompt: 'Que formas verbais ligam-se a 〜んですが… nesta lição (Nota ➊)?', choices: [{ n: 1, text: 'forma de dicionário ({音|おと}がする), forma タ ({なくなった}) e forma ナイ ({つかない}) — além de V-たいんですが… das Lições 8/10' }, { n: 2, text: 'só a forma マス' }, { n: 3, text: 'só substantivos' }, { n: 4, text: 'só a forma て' }], answer: 1, explanationPt: 'Nas Lições 8 e 10 vimos só V-たいんですが…／V-てみたいんですが…. Aqui 〜んですが… liga-se à forma de dicionário, タ e ナイ: {変|へん}な{音|おと}がするんですが…／トイレットペーパーがなくなったんですが…／{電気|でんき}がつかないんですが…. (Nota ➊)' },
    { id: 'iro-e1-l13-3', number: 3, prompt: 'Como se forma a ナイ-form (forma negativa, Nota ➊)?', choices: [{ n: 1, text: 'G1: -u → -anai ({買|か}う→{買|か}わない, {動|うご}く→{動|うご}かない); G2: tira る ({見|み}る→{見|み}ない); G3: する→しない, {来|く}る→{来|こ}ない' }, { n: 2, text: 'sempre acrescenta ません no fim' }, { n: 3, text: 'troca o い final por く' }, { n: 4, text: 'acrescenta だ' }], answer: 1, explanationPt: 'ナイ形: G1 -u→-anai (verbos em -う ganham w: {買|か}う→{買|か}わない); G2 tira る ({食|た}べる→{食|た}べない); G3 irregular (する→しない, {来|く}る→{来|こ}ない). Expressa negação. (Nota ➊)' },
    { id: 'iro-e1-l13-4', number: 4, prompt: '「どのぐらいかかりそうですか？」「あと10{分|ぷん}ぐらいで{終|お}わりそうです」 (V-そうです) serve para (Nota ➋):', choices: [{ n: 1, text: 'expressar uma PREVISÃO/expectativa — aqui, sobre o andamento do trabalho' }, { n: 2, text: 'descrever a aparência de uma comida' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'pedir desculpas' }], answer: 1, translationPt: 'Quanto tempo deve levar? / Devo terminar em uns 10 minutos.', explanationPt: 'V-そうです = previsão/expectativa. Aqui pergunta-se e responde-se sobre o progresso do trabalho: かかりそうですか／{終|お}わりそうです. (Nota ➋)' },
    { id: 'iro-e1-l13-5', number: 5, prompt: 'Como V-そうです (previsão) se forma, e qual a diferença para o 〜そうです da Lição 12 (Nota ➋)?', choices: [{ n: 1, text: 'liga-se à forma マス sem ます ({終|お}わります→{終|お}わりそう, できます→できそう); na Lição 12 ligava-se a ADJETIVO (おいしそう) p/ aparência' }, { n: 2, text: 'liga-se à forma de dicionário + そう' }, { n: 3, text: 'é igual ao da Lição 12, sem diferença' }, { n: 4, text: 'só se usa com substantivos' }], answer: 1, explanationPt: 'Aqui そうです liga-se à マス-form sem ます: {終|お}わり+そう, でき+そう. Na Lição 12, そうです ligava-se a adjetivo (おいしそう) para juízo pela aparência. (Nota ➋)' },
    { id: 'iro-e1-l13-6', number: 6, prompt: 'Em 「あと10{分|ぷん}ぐらいで{終|お}わりそうです」, para que serve o で depois do tempo (Nota ➋)?', choices: [{ n: 1, text: 'indica o INTERVALO de tempo previsto (em uns 10 minutos)' }, { n: 2, text: 'indica o lugar' }, { n: 3, text: 'indica o instrumento' }, { n: 4, text: 'nega o verbo' }], answer: 1, translationPt: 'Devo terminar em uns 10 minutos.', explanationPt: 'で após o tempo marca o intervalo/prazo: 10{分|ぷん}ぐらいで (em uns 10 min). Ex.: あと10{分|ぷん}ぐらいで{終|お}わりそうです. (Nota ➋)' },
    { id: 'iro-e1-l13-7', number: 7, prompt: '「{両面|りょうめん}コピーしたいときは、どうすればいいですか？」 (V-たいとき、〜) serve para (Nota ➌):', choices: [{ n: 1, text: 'dizer o que se quer fazer e PEDIR CONSELHO sobre como fazê-lo (o que devo fazer para…?)' }, { n: 2, text: 'contar quando um fato aconteceu no passado' }, { n: 3, text: 'recusar ajuda' }, { n: 4, text: 'dar uma ordem ao outro' }], answer: 1, translationPt: 'Quando quero fazer cópia frente e verso, o que devo fazer?', explanationPt: 'V-たいとき、どうすればいいですか？ transmite o desejo e pede conselho. どうすれば aqui é tratado como uma frase fixa (retomada no 初級2). Na Lição 10, 〜とき indicava quando algo ocorreu. (Nota ➌)' },
    { id: 'iro-e1-l13-8', number: 8, prompt: '「このスタートボタンを{押|お}すと、コピーが{始|はじ}まります」 (V-ると、〜) expressa (Nota ➍):', choices: [{ n: 1, text: 'o RESULTADO que ocorre ao realizar certa ação — aqui, explicar como usar uma máquina' }, { n: 2, text: 'um desejo' }, { n: 3, text: 'uma previsão de tempo' }, { n: 4, text: 'um pedido de desculpas' }], answer: 1, translationPt: 'Ao apertar este botão de start, a cópia começa.', explanationPt: 'V-ると、〜 descreve o que acontece como resultado de uma ação. 〜と liga-se à forma de dicionário. Usado para explicar uso de máquinas/objetos: ボタンを{押|お}すと、カラーになります／{手|て}をかざすと、{水|みず}が{流|なが}れます. (Nota ➍)' },
    { id: 'iro-e1-l13-9', number: 9, prompt: 'A：「コピー{機|き}、{使|つか}ったことないですか？」 B：「はい、ないです」 — por que B responde はい (Nota ➎)?', choices: [{ n: 1, text: 'a pergunta é NEGATIVA; concordando com ela (de fato nunca usei), responde-se はい + frase negativa' }, { n: 2, text: 'はい sempre significa “sim, já usei”' }, { n: 3, text: 'B se enganou na resposta' }, { n: 4, text: 'はい aqui significa “não sei”' }], answer: 1, translationPt: 'Você nunca usou a copiadora? — Não (isso mesmo), nunca usei.', explanationPt: 'A pergunta negativa 「{使|つか}ったことないですか？」: se o conteúdo está correto (nunca usei), responde-se はい seguido de frase negativa (ないです). Diferente do português, onde se diria “não”. (Nota ➎)' },
    { id: 'iro-e1-l13-10', number: 10, prompt: 'E para DISCORDAR de uma pergunta negativa como 「{前|まえ}に{使|つか}ったことないですか？」 (Nota ➎)?', choices: [{ n: 1, text: 'responde-se いいえ + frase afirmativa (いいえ、{前|まえ}に{一度|いちど}{使|つか}ったことがあります)' }, { n: 2, text: 'responde-se はい + frase afirmativa' }, { n: 3, text: 'não se pode responder' }, { n: 4, text: 'responde-se sempre だめです' }], answer: 1, translationPt: 'Você nunca usou antes? — Não (errado), já usei uma vez.', explanationPt: 'Se a pergunta negativa está errada (na verdade já usei), responde-se いいえ + afirmativa: いいえ。{私|わたし}は、{前|まえ}に{一度|いちど}{使|つか}ったことがあります. (Nota ➎)' },
    { id: 'iro-e1-l13-11', number: 11, prompt: 'Vocabulário (Atividade 1): 「コーヒーマシーン／パソコン／とりあえず」 significam:', choices: [{ n: 1, text: 'máquina de café ／ computador (PC) ／ por enquanto/provisoriamente' }, { n: 2, text: 'cafeteria ／ celular ／ definitivamente' }, { n: 3, text: 'xícara de café ／ teclado ／ imediatamente' }, { n: 4, text: 'máquina de café ／ impressora ／ rapidamente' }], answer: 1, explanationPt: 'コーヒーマシーン (máquina de café), パソコン (computador), とりあえず (por enquanto/provisoriamente: とりあえず、{再起動|さいきどう}してみて). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l13-12', number: 12, prompt: 'Atividade 1 — os problemas relatados (a–d) são:', choices: [{ n: 1, text: '{電気|でんき}がつかない (a luz não acende) ／ {変|へん}な{音|おと}がする (faz um barulho estranho) ／ {動|うご}かない (não funciona) ／ トイレットペーパーがなくなる (acabar o papel higiênico)' }, { n: 2, text: 'a luz acende ／ silêncio ／ funciona bem ／ sobra papel' }, { n: 3, text: 'falta café ／ falta água ／ falta luz ／ falta papel' }, { n: 4, text: 'a porta abre ／ a janela fecha ／ o PC liga ／ a máquina para' }], answer: 1, explanationPt: 'a. {電気|でんき}がつかない, b. {変|へん}な{音|おと}がする, c. {動|うご}かない, d. トイレットペーパーがなくなる. São os 4 problemas dos diálogos 13-01~13-04. (Atividade 1)' },
    { id: 'iro-e1-l13-13', number: 13, prompt: 'Atividade 1 — as instruções dadas (ア–エ) foram:', choices: [{ n: 1, text: '{業者|ぎょうしゃ}に{電話|でんわ}する (ligar para a empresa/técnico) ／ {再起動|さいきどう}する (reiniciar) ／ {管理室|かんりしつ}に{連絡|れんらく}する (avisar a sala de administração) ／ {倉庫|そうこ}から{取|と}って{来|く}る (pegar no estoque)' }, { n: 2, text: 'ir embora ／ chamar a polícia ／ esperar ／ comprar outro' }, { n: 3, text: 'desligar tudo ／ abrir a janela ／ limpar ／ trocar a luz' }, { n: 4, text: 'pedir desculpa ／ tirar folga ／ almoçar ／ descansar' }], answer: 1, explanationPt: 'ア. {業者|ぎょうしゃ}に{電話|でんわ}する, イ. {再起動|さいきどう}する, ウ. {管理室|かんりしつ}に{連絡|れんらく}する, エ. {倉庫|そうこ}から{取|と}って{来|く}る. (Atividade 1)' },
    { id: 'iro-e1-l13-14', number: 14, prompt: 'Vocabulário (Atividade 2): 「できる」 (como em 「もうすぐできます」) significa, no contexto de trabalho:', choices: [{ n: 1, text: 'ficar pronto / terminar (uma tarefa)' }, { n: 2, text: 'conseguir comprar' }, { n: 3, text: 'poder sair' }, { n: 4, text: 'aprender algo novo' }], answer: 1, explanationPt: 'できる aqui = ficar pronto/terminar (finish): もうすぐできます (já vai ficar pronto). (Atividade 2 · ことば)' },
    { id: 'iro-e1-l13-15', number: 15, prompt: 'Atividade 2 — as respostas sobre o andamento do trabalho (a–d) são:', choices: [{ n: 1, text: 'やり{方|かた}がわかりません (não sei como fazer) ／ だいじょうぶです (está tudo bem) ／ もう{終|お}わりました (já terminei) ／ もうすぐ{終|お}わります (termino logo)' }, { n: 2, text: 'já comprei ／ vou almoçar ／ vou para casa ／ estou de folga' }, { n: 3, text: 'não vou ／ vou esperar ／ vou perguntar ／ vou ligar' }, { n: 4, text: 'está quebrado ／ está sujo ／ está pronto ／ está caro' }], answer: 1, explanationPt: 'a. やり{方|かた}がわかりません, b. だいじょうぶです, c. もう{終|お}わりました, d. もうすぐ{終|お}わります. (Atividade 2)' },
    { id: 'iro-e1-l13-16', number: 16, prompt: 'Vocabulário (Atividade 3 · copiadora): 「{原稿|げんこう}／セットする／{枚数|まいすう}／{数字|すうじ}／{両面|りょうめん}／{片面|かためん}／{白黒|しろくろ}／できるだけ」 significam:', choices: [{ n: 1, text: 'original (documento) ／ posicionar/colocar ／ número de cópias ／ número(s) ／ frente e verso ／ um lado só ／ preto e branco ／ o máximo possível' }, { n: 2, text: 'cópia ／ tirar ／ folha ／ letra ／ colorido ／ dois lados ／ cor ／ de vez em quando' }, { n: 3, text: 'papel ／ guardar ／ peso ／ senha ／ duplo ／ simples ／ cinza ／ sempre' }, { n: 4, text: 'imagem ／ apagar ／ quantidade ／ código ／ frente ／ verso ／ claro ／ nunca' }], answer: 1, explanationPt: '{原稿|げんこう} (original/documento), セットする (posicionar), {枚数|まいすう} (nº de cópias), {数字|すうじ} (número), {両面|りょうめん} (frente e verso), {片面|かためん} (só um lado), {白黒|しろくろ} (preto e branco), できるだけ (o máximo possível). (Atividade 3 · ことば)' },
    { id: 'iro-e1-l13-17', number: 17, prompt: 'Atividade 3 (13-17) — na ordem para tirar cópia, quais os 3 passos básicos que {大森|おおもり} explica?', context: '{大森|おおもり}：ここに{原稿|げんこう}をセットして、それから{枚数|まいすう}を{数字|すうじ}で{入|い}れて、それから、このスタートボタンを{押|お}すと、コピーが{始|はじ}まります。', choices: [{ n: 1, text: '① pôr o original (セット) → ② digitar o número de cópias (数字で入れる) → ③ apertar o botão start (スタートボタンを押す)' }, { n: 2, text: '① apertar start → ② pôr o original → ③ digitar o número' }, { n: 3, text: '① escolher cor → ② fechar a tampa → ③ pagar' }, { n: 4, text: '① ligar a máquina → ② esperar → ③ pegar o papel' }], answer: 1, explanationPt: 'Ordem: ①{原稿|げんこう}をセットする → ②{枚数|まいすう}を{数字|すうじ}で{入|い}れる → ③スタートボタンを{押|お}すと、コピーが{始|はじ}まる (V-ると, ➍). (Atividade 3 · 聴解スクリプト 13-17)' },
    { id: 'iro-e1-l13-18', number: 18, prompt: 'Atividade 3 (13-17) — qual a recomendação FINAL de {大森|おおもり} sobre a cópia colorida?', context: '{大森|おおもり}：でも、カラーコピーは{高|たか}いから、できるだけ{白黒|しろくろ}にしてください。', choices: [{ n: 1, text: 'como a cópia colorida é cara, usar o preto e branco o máximo possível (できるだけ白黒に)' }, { n: 2, text: 'usar sempre cópia colorida' }, { n: 3, text: 'nunca tirar cópia frente e verso' }, { n: 4, text: 'desligar a máquina depois de usar' }], answer: 1, explanationPt: 'A カラーコピー é cara, então できるだけ{白黒|しろくろ}にしてください (faça preto e branco o quanto possível). É o 注意 (cuidado) final do diálogo. (Atividade 3 · 13-17)' },
    { id: 'iro-e1-l13-19', number: 19, prompt: 'Vocabulário (Atividade 4 · 会話1): 「{資料|しりょう}／{戻|もど}す／{扉|とびら}／{開|あ}ける／{棚|たな}」 significam:', choices: [{ n: 1, text: 'material/documentos ／ devolver/recolocar ／ porta ／ abrir ／ prateleira' }, { n: 2, text: 'reunião ／ guardar ／ janela ／ fechar ／ mesa' }, { n: 3, text: 'arquivo ／ jogar fora ／ gaveta ／ trancar ／ armário' }, { n: 4, text: 'cópia ／ levar ／ parede ／ empurrar ／ chão' }], answer: 1, explanationPt: '{資料|しりょう} (material), {戻|もど}す (devolver), {扉|とびら} (porta), {開|あ}ける (abrir), {棚|たな} (prateleira). (Atividade 4 · 会話1 · ことば)' },
    { id: 'iro-e1-l13-20', number: 20, prompt: 'Vocabulário (Atividade 4 · 会話2): 「{丸|まる}い／{四角|しかく}い／{列|れつ}／スペース／あける／{入口|いりぐち}」 significam:', choices: [{ n: 1, text: 'redondo(a) ／ quadrado(a) ／ fileira/coluna ／ espaço ／ deixar (espaço) livre ／ entrada' }, { n: 2, text: 'grande ／ pequeno ／ linha ／ lugar ／ fechar ／ saída' }, { n: 3, text: 'comprido ／ curto ／ pilha ／ canto ／ encher ／ porta' }, { n: 4, text: 'largo ／ estreito ／ par ／ vão ／ ocupar ／ corredor' }], answer: 1, explanationPt: '{丸|まる}い (redondo), {四角|しかく}い (quadrado), {列|れつ} (fileira: 3{列|れつ} = 3 fileiras), スペース (espaço), あける (deixar livre), {入口|いりぐち} (entrada). (Atividade 4 · 会話2 · ことば)' },
    { id: 'iro-e1-l13-21', number: 21, prompt: 'Vocabulário (Atividade 4 · 会話3): 「{会議|かいぎ}／セッティング／コの{字|じ}／{人数分|にんずうぶん}／{部|ぶ}／{頼|たの}む／いいです」 significam:', choices: [{ n: 1, text: 'reunião ／ arrumação/montagem ／ em forma de “U” (コの字) ／ para o número de pessoas ／ cópia/exemplar (contador 〜部) ／ pedir/encarregar ／ “não precisa” (recusa educada)' }, { n: 2, text: 'almoço ／ limpeza ／ em círculo ／ por pessoa ／ parte ／ comprar ／ “tudo bem, pode” ' }, { n: 3, text: 'aula ／ decoração ／ em fila ／ metade ／ página ／ ajudar ／ “sim, claro”' }, { n: 4, text: 'festa ／ preparo ／ em zigue-zague ／ o dobro ／ caixa ／ entregar ／ “de nada”' }], answer: 1, explanationPt: '{会議|かいぎ} (reunião), セッティング (montagem/arrumação), コの{字|じ} (em U), {人数分|にんずうぶん} (para o nº de pessoas), 〜{部|ぶ} (contador de cópias: 1{部|ぶ}), {頼|たの}む (pedir/encarregar), いいです (aqui = “não precisa”, recusa educada). (Atividade 4 · 会話3 · ことば)' },
    { id: 'iro-e1-l13-22', number: 22, prompt: 'Vocabulário (Atividade 5 · e-mail): 「{件名|けんめい}／{変更|へんこう}／お{知|し}らせ／{都合|つごう}が{悪|わる}い／{注意|ちゅうい}（する）」 significam:', choices: [{ n: 1, text: 'assunto (do e-mail) ／ alteração/mudança ／ aviso/comunicado ／ não dar certo (não poder/estar indisponível) ／ prestar atenção/cuidado' }, { n: 2, text: 'remetente ／ confirmação ／ convite ／ estar ocupado ／ ignorar' }, { n: 3, text: 'data ／ cancelamento ／ pergunta ／ estar livre ／ avisar' }, { n: 4, text: 'destinatário ／ resposta ／ anexo ／ ter pressa ／ corrigir' }], answer: 1, explanationPt: '{件名|けんめい} (assunto), {変更|へんこう} (alteração), お{知|し}らせ (aviso), {都合|つごう}が{悪|わる}い (não dar certo/estar indisponível), {注意|ちゅうい}（する） (prestar atenção). (Atividade 5 · 大切なことば)' },
    { id: 'iro-e1-l13-23', number: 23, prompt: 'Os kanji 「コピー{機|き}／{数字|すうじ}／{電気|でんき}／{音|おと}／{机|つくえ}／{都合|つごう}」 lêem-se:', choices: [{ n: 1, text: 'コピーき (copiadora) ／ すうじ (número) ／ でんき (luz/eletricidade) ／ おと (som/barulho) ／ つくえ (mesa/escrivaninha) ／ つごう (disponibilidade/conveniência)' }, { n: 2, text: 'コピーき ／ かずじ ／ でんき ／ おん ／ き ／ とごう' }, { n: 3, text: 'コピーき ／ すうじ ／ でんき ／ おと ／ つくえ ／ みやこあい' }, { n: 4, text: 'コピーき ／ すうじ ／ でんけ ／ ね ／ つくえ ／ つごう' }], answer: 1, explanationPt: 'コピー{機|き}, {数字|すうじ}, {電気|でんき}, {音|おと}, {机|つくえ}, {都合|つごう}. (漢字のことば)' },
    { id: 'iro-e1-l13-24', number: 24, prompt: 'Os kanji 「{悪|わる}い／{動|うご}く／{使|つか}う／{終|お}わる／お{願|ねが}いします」 lêem-se:', choices: [{ n: 1, text: 'わるい (ruim/mau) ／ うごく (mover/funcionar) ／ つかう (usar) ／ おわる (terminar) ／ おねがいします (por favor)' }, { n: 2, text: 'あくい ／ どうく ／ しよう ／ しゅうわる ／ おねがいします' }, { n: 3, text: 'わるい ／ うごく ／ つかう ／ おわる ／ おがんいします' }, { n: 4, text: 'にくい ／ うごく ／ つかう ／ すえわる ／ おねがいします' }], answer: 1, explanationPt: '{悪|わる}い, {動|うご}く, {使|つか}う, {終|お}わる, お{願|ねが}いします. Kanji da lição: コピー{機|き}・{数字|すうじ}・{電気|でんき}・{音|おと}・{机|つくえ}・{都合|つごう}・{悪|わる}い・{動|うご}く・{使|つか}う・{終|お}わる・お{願|ねが}いします. (漢字)' },
    { id: 'iro-e1-l13-25', number: 25, prompt: 'Diálogo 13-01: A relata um problema. Qual é, e o que B pede?', context: 'A：あのう、トイレットペーパーがなくなったんですが……。 B：あ、そう？じゃあ、{倉庫|そうこ}にあるから、{取|と}って{来|き}てくれる？', choices: [{ n: 1, text: 'Acabou o papel higiênico (なくなった + んですが); B pede para A ir pegar no estoque ({倉庫|そうこ}から{取|と}って{来|く}る)' }, { n: 2, text: 'A luz não acende; B manda reiniciar' }, { n: 3, text: 'O PC travou; B chama o técnico' }, { n: 4, text: 'B vai comprar papel' }], answer: 1, explanationPt: 'トイレットペーパーがなくなったんですが… (forma タ + んですが, ➊); {倉庫|そうこ}にあるから、{取|と}って{来|き}てくれる？ (instrução エ). (Atividade 1 · 聴解スクリプト 13-01)' },
    { id: 'iro-e1-l13-26', number: 26, prompt: 'Diálogo 13-02: qual o problema e qual a instrução?', context: 'A：すみません、コーヒーマシーンから{変|へん}な{音|おと}がするんですが……。 B：{本当|ほんとう}？じゃあ、{業者|ぎょうしゃ}に{電話|でんわ}してくれる？', choices: [{ n: 1, text: 'A máquina de café faz um barulho estranho ({変|へん}な{音|おと}がする); B manda ligar para o técnico/empresa ({業者|ぎょうしゃ}に{電話|でんわ})' }, { n: 2, text: 'Acabou o café; B manda comprar mais' }, { n: 3, text: 'A luz piscou; B manda avisar a administração' }, { n: 4, text: 'A máquina está limpa; nada a fazer' }], answer: 1, explanationPt: '{変|へん}な{音|おと}がするんですが… (forma de dicionário + んですが, ➊); {業者|ぎょうしゃ}に{電話|でんわ}してくれる？ (instrução ア). (Atividade 1 · 13-02)' },
    { id: 'iro-e1-l13-27', number: 27, prompt: 'Diálogo 13-03: o PC não funciona. O que B sugere primeiro?', context: 'A：パソコンが{動|うご}かないんですが……。 B：うーん、とりあえず、{再起動|さいきどう}してみて。', choices: [{ n: 1, text: 'Por enquanto (とりあえず), tentar reiniciar o computador ({再起動|さいきどう}してみて)' }, { n: 2, text: 'Comprar um PC novo' }, { n: 3, text: 'Ligar para a administração' }, { n: 4, text: 'Ir pegar papel no estoque' }], answer: 1, translationPt: 'O computador não funciona… — Hum, por ora, tenta reiniciar.', explanationPt: 'パソコンが{動|うご}かないんですが… (forma ナイ + んですが, ➊); とりあえず、{再起動|さいきどう}してみて (V-てみて, Lição 12; instrução イ). (Atividade 1 · 13-03)' },
    { id: 'iro-e1-l13-28', number: 28, prompt: 'Diálogo 13-09: A pergunta sobre o andamento. Como B prevê o término?', context: 'A：もう{終|お}わりましたか？ B：あ、まだです。 A：どのぐらいかかりそうですか？ B：あと10{分|ぷん}ぐらいで{終|お}わりそうです。', choices: [{ n: 1, text: 'Ainda não terminou; deve terminar em uns 10 minutos (あと10分ぐらいで終わりそうです)' }, { n: 2, text: 'Já terminou tudo' }, { n: 3, text: 'Não sabe fazer' }, { n: 4, text: 'Vai levar o dia inteiro' }], answer: 1, explanationPt: 'まだです (ainda não); どのぐらいかかりそうですか？／あと10{分|ぷん}ぐらいで{終|お}わりそうです (V-そうです previsão + で intervalo, ➋). (Atividade 2 · 聴解スクリプト 13-09)' },
    { id: 'iro-e1-l13-29', number: 29, prompt: 'Diálogo 13-20 (会話1): onde A deve guardar o {資料|しりょう}?', context: 'A：この{資料|しりょう}、どうしますか？ B：キャビネットに{戻|もど}しといて。 A：ええと、キャビネットのどこですか？ B：{上|うえ}の{右|みぎ}の{扉|とびら}を{開|あ}けて、{棚|たな}のいちばん{下|した}。', choices: [{ n: 1, text: 'No armário (キャビネット): abrir a porta de cima à direita e pôr na prateleira mais de baixo ({上|うえ}の{右|みぎ}の{扉|とびら}…{棚|たな}のいちばん{下|した})' }, { n: 2, text: 'Na gaveta de baixo à esquerda' }, { n: 3, text: 'Em cima da mesa' }, { n: 4, text: 'Jogar fora' }], answer: 1, explanationPt: 'キャビネットに{戻|もど}しといて (戻しておいて); {上|うえ}の{右|みぎ}の{扉|とびら}を{開|あ}けて、{棚|たな}のいちばん{下|した} (abrir a porta superior direita, prateleira mais baixa). (Atividade 4 · 会話1 · 13-20)' },
    { id: 'iro-e1-l13-30', number: 30, prompt: 'Diálogo 13-21 (会話2): como arrumar as mesas?', context: 'A：テーブルは、どうやって{並|なら}べますか？ B：{丸|まる}いテーブルを9{個|こ}{出|だ}して、3つずつ3{列|れつ}に{並|なら}べてください。…{後|うし}ろにスペースをあけてください。…{入口|いりぐち}の{横|よこ}…に、{四角|しかく}い{長|なが}いテーブルを1つ{置|お}いてください。', choices: [{ n: 1, text: 'Pôr 9 mesas redondas em 3 fileiras de 3, deixar espaço atrás e colocar 1 mesa retangular comprida ao lado da entrada' }, { n: 2, text: 'Empilhar todas as mesas num canto' }, { n: 3, text: 'Usar só uma mesa redonda no centro' }, { n: 4, text: 'Pôr as mesas em círculo na entrada' }], answer: 1, explanationPt: '{丸|まる}いテーブルを9{個|こ}、3つずつ3{列|れつ}; {後|うし}ろにスペースをあける; {入口|いりぐち}の{横|よこ}に{四角|しかく}い{長|なが}いテーブルを1つ. (Atividade 4 · 会話2 · 13-21)' },
    { id: 'iro-e1-l13-31', number: 31, prompt: 'Diálogo 13-22 (会話3): quem faz o quê na preparação da reunião — e as bebidas?', context: '{上司|じょうし}：アリさんは、{部屋|へや}のセッティング…{机|つくえ}をコの{字|じ}に{並|なら}べて…パソコンとプロジェクタを{準備|じゅんび}…{西村|にしむら}さんは、{資料|しりょう}を{人数分|にんずうぶん}コピーして、{机|つくえ}の{上|うえ}に1{部|ぶ}ずつ{並|なら}べて… {西村|にしむら}：{飲|の}み{物|もの}は{用意|ようい}しますか？ {上司|じょうし}：それは、{外|そと}のお{店|みせ}に{頼|たの}んだから、いいです。', choices: [{ n: 1, text: 'Ali arruma a sala (mesas em U + PC e projetor); Nishimura copia o material para todos e põe 1 por mesa; bebidas não precisam (já foram pedidas na loja de fora)' }, { n: 2, text: 'Ali faz as cópias; Nishimura arruma a sala; bebidas devem ser compradas' }, { n: 3, text: 'Os dois arrumam a sala; ninguém cuida do material' }, { n: 4, text: 'Ali traz as bebidas; Nishimura não faz nada' }], answer: 1, explanationPt: 'アリ→{部屋|へや}のセッティング ({机|つくえ}をコの{字|じ}に{並|なら}べる, パソコンとプロジェクタ); {西村|にしむら}→{資料|しりょう}を{人数分|にんずうぶん}コピー、{机|つくえ}に1{部|ぶ}ずつ; {飲|の}み{物|もの}は{外|そと}のお{店|みせ}に{頼|たの}んだから、いいです (não precisa). (Atividade 4 · 会話3 · 13-22)' },
    { id: 'iro-e1-l13-32', number: 32, prompt: 'Pergunta de abertura da lição: 「どんな{仕事|しごと}が{得意|とくい}ですか？どんな{仕事|しごと}が{苦手|にがて}ですか？」 quer dizer:', choices: [{ n: 1, text: 'Em que tipo de trabalho você é bom (tem facilidade)? E em qual você não vai bem?' }, { n: 2, text: 'Que horas você começa e termina o trabalho?' }, { n: 3, text: 'Onde fica o seu local de trabalho?' }, { n: 4, text: 'Quantas pessoas trabalham com você?' }], answer: 1, translationPt: 'Que tipo de trabalho você faz bem? E qual você não curte/não vai bem?', explanationPt: '{得意|とくい}（な） = ter facilidade/ser bom em; {苦手|にがて}（な） = não ir bem/não curtir (Lição 12). Tema: {仕事|しごと}の{連絡|れんらく} (comunicação no trabalho). (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 13
const L13_SCRIPTS: Record<string, ScriptItem[]> = {
  '13-01': [
    {
      label: '① (13-01) — トイレットペーパーがなくなったんですが',
      setupJa: '{職場|しょくば}で{困|こま}ったことが{起|お}こりました。',
      setupPt: 'Aconteceu um problema no trabalho.',
      lines: [
        { speaker: 'A', ja: 'あのう、トイレットペーパーがなくなったんですが……。', pt: 'Ãh… acabou o papel higiênico…' },
        { speaker: 'B', ja: 'あ、そう？じゃあ、{倉庫|そうこ}にあるから、{取|と}って{来|き}てくれる？', pt: 'Ah, é? Então, tem no estoque — pode ir pegar?' },
      ],
    },
  ],
  '13-02': [
    {
      label: '② (13-02) — 変な音がするんですが',
      lines: [
        { speaker: 'A', ja: 'すみません、コーヒーマシーンから{変|へん}な{音|おと}がするんですが……。', pt: 'Com licença, a máquina de café está fazendo um barulho estranho…' },
        { speaker: 'B', ja: '{本当|ほんとう}？じゃあ、{業者|ぎょうしゃ}に{電話|でんわ}してくれる？', pt: 'Sério? Então, pode ligar para a empresa (técnico)?' },
      ],
    },
  ],
  '13-03': [
    {
      label: '③ (13-03) — パソコンが動かないんですが',
      lines: [
        { speaker: 'A', ja: 'パソコンが{動|うご}かないんですが……。', pt: 'O computador não está funcionando…' },
        { speaker: 'B', ja: 'うーん、とりあえず、{再起動|さいきどう}してみて。', pt: 'Hum… por enquanto, tenta reiniciar.' },
      ],
    },
  ],
  '13-04': [
    {
      label: '④ (13-04) — 電気がつかないんですが',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません、{会議室|かいぎしつ}の{電気|でんき}がつかないんですが……。', pt: 'Ãh, com licença, a luz da sala de reunião não acende…' },
        { speaker: 'B', ja: 'じゃあ、{管理室|かんりしつ}に{連絡|れんらく}してください。', pt: 'Então, por favor avise a sala de administração.' },
      ],
    },
  ],
  '13-07': [
    {
      label: '① (13-07) — だいじょうぶです',
      setupJa: '{仕事|しごと}をしているとき、{上司|じょうし}に{話|はな}しかけられました。',
      setupPt: 'Enquanto trabalha, o superior puxa conversa.',
      lines: [
        { speaker: 'A', ja: 'どう？だいじょうぶ？', pt: 'E aí? Está tudo bem?' },
        { speaker: 'B', ja: 'はい、だいじょうぶです。', pt: 'Sim, está tudo bem.' },
        { speaker: 'A', ja: 'そう。わからないこと、ある？', pt: 'Tá. Tem alguma coisa que você não entende?' },
        { speaker: 'B', ja: 'いえ、ありません。', pt: 'Não, não tenho.' },
      ],
    },
  ],
  '13-08': [
    {
      label: '② (13-08) — このやり方がよくわからないんですが',
      lines: [
        { speaker: 'A', ja: 'どうですか？', pt: 'Como está indo?' },
        { speaker: 'B', ja: 'あのう、すみません。', pt: 'Ãh… com licença.' },
        { speaker: 'A', ja: 'はい。', pt: 'Pois não.' },
        { speaker: 'B', ja: 'このやり{方|かた}がよくわからないんですが……。', pt: 'É que eu não entendo bem como se faz isto…' },
        { speaker: 'A', ja: 'ああ、これはですね……', pt: 'Ah, isto aqui é o seguinte…' },
      ],
    },
  ],
  '13-09': [
    {
      label: '③ (13-09) — あと10分ぐらいで終わりそうです',
      lines: [
        { speaker: 'A', ja: 'もう{終|お}わりましたか？', pt: 'Já terminou?' },
        { speaker: 'B', ja: 'あ、まだです。', pt: 'Ah, ainda não.' },
        { speaker: 'A', ja: 'どのぐらいかかりそうですか？', pt: 'Quanto tempo deve levar?' },
        { speaker: 'B', ja: 'あと10{分|ぷん}ぐらいで{終|お}わりそうです。', pt: 'Devo terminar em mais uns 10 minutos.' },
      ],
    },
  ],
  '13-10': [
    {
      label: '④ (13-10) — はい、終わりました',
      lines: [
        { speaker: 'A', ja: 'できた？', pt: 'Ficou pronto?' },
        { speaker: 'B', ja: 'はい、{終|お}わりました。', pt: 'Sim, terminei.' },
        { speaker: 'A', ja: 'お、{早|はや}いね。', pt: 'Oh, que rápido.' },
        { speaker: 'B', ja: 'これでいいですか？', pt: 'Está bom assim?' },
        { speaker: 'A', ja: 'うん、OK。お{疲|つか}れさま。', pt: 'Sim, OK. Bom trabalho.' },
      ],
    },
  ],
  '13-17': [
    {
      label: '会話 (13-17) — コピー機の使い方',
      setupJa: '{黄|コウ}さんは、{職場|しょくば}で{大森|おおもり}さんにコピー{機|き}の{使|つか}い{方|かた}を{教|おし}えてもらっています。',
      setupPt: 'Huang está aprendendo com Omori como usar a copiadora no trabalho.',
      lines: [
        { speaker: '黄', ja: 'すみません。コピー{機|き}の{使|つか}い{方|かた}を{教|おし}えてもらえませんか？', pt: 'Com licença. Poderia me ensinar como usar a copiadora?' },
        { speaker: '大森', ja: 'いいですよ。{使|つか}ったこと、ないですか？', pt: 'Pode ser. Você nunca usou?' },
        { speaker: '黄', ja: 'はい、ないです。', pt: 'Não, nunca.' },
        { speaker: '大森', ja: 'そうですか。じゃあ、{説明|せつめい}しますね。ここに{原稿|げんこう}をセットして、それから{枚数|まいすう}を{数字|すうじ}で{入|い}れて、それから、このスタートボタンを{押|お}すと、コピーが{始|はじ}まります。', pt: 'Entendi. Então vou explicar. Coloca o original aqui, depois digita o número de cópias, e então, ao apertar este botão de start, a cópia começa.' },
        { speaker: '黄', ja: 'はい、わかりました。えーと、{両面|りょうめん}コピーしたいときは、どうすればいいですか？', pt: 'Sim, entendi. Hum… quando eu quero copiar frente e verso, o que devo fazer?' },
        { speaker: '大森', ja: '{原稿|げんこう}が{片面|かためん}のときは、このボタン。{原稿|げんこう}も{両面|りょうめん}のときは、このボタンを{押|お}します。', pt: 'Quando o original é só de um lado, este botão. Quando o original também é frente e verso, aperta este botão.' },
        { speaker: '黄', ja: 'はい、わかりました。あと、カラーコピーは、できますか？', pt: 'Sim, entendi. E também, dá para fazer cópia colorida?' },
        { speaker: '大森', ja: 'カラーコピー？このボタンを{押|お}すと、カラーになりますよ。', pt: 'Cópia colorida? Ao apertar este botão, fica colorida.' },
        { speaker: '黄', ja: 'このボタンですね。', pt: 'É este botão, né.' },
        { speaker: '大森', ja: 'でも、カラーコピーは{高|たか}いから、できるだけ{白黒|しろくろ}にしてください。', pt: 'Mas a cópia colorida é cara, então use o preto e branco o máximo possível.' },
        { speaker: '黄', ja: 'わかりました。ありがとうございます。', pt: 'Entendi. Muito obrigado.' },
      ],
    },
  ],
  '13-20': [
    {
      label: '会話1 (13-20) — キャビネットに戻す',
      setupJa: '{職場|しょくば}で、{指示|しじ}を{聞|き}いています。{資料|しりょう}をキャビネットに{戻|もど}します。',
      setupPt: 'No trabalho, recebendo instruções. Vai devolver o material ao armário.',
      lines: [
        { speaker: 'A', ja: 'この{資料|しりょう}、どうしますか？', pt: 'O que faço com este material?' },
        { speaker: 'B', ja: 'キャビネットに{戻|もど}しといて。', pt: 'Devolve para o armário.' },
        { speaker: 'A', ja: 'ええと、キャビネットのどこですか？', pt: 'Hum, em que parte do armário?' },
        { speaker: 'B', ja: '{上|うえ}の{右|みぎ}の{扉|とびら}を{開|あ}けて、{棚|たな}のいちばん{下|した}。', pt: 'Abre a porta de cima à direita, na prateleira mais de baixo.' },
        { speaker: 'A', ja: 'わかりました。{右|みぎ}のいちばん{下|した}ですね。', pt: 'Entendi. A de baixo, do lado direito, né.' },
      ],
    },
  ],
  '13-21': [
    {
      label: '会話2 (13-21) — テーブルの並べ方',
      setupJa: 'パーティー{会場|かいじょう}のセッティングをします。',
      setupPt: 'Vai montar o salão de uma festa.',
      lines: [
        { speaker: 'A', ja: 'テーブルは、どうやって{並|なら}べますか？', pt: 'Como arrumo as mesas?' },
        { speaker: 'B', ja: '{丸|まる}いテーブルを9{個|こ}{出|だ}して、3つずつ3{列|れつ}に{並|なら}べてください。', pt: 'Tira 9 mesas redondas e arruma em 3 fileiras de 3.' },
        { speaker: 'A', ja: '{横|よこ}に3つ{並|なら}べて3{列|れつ}ですね。', pt: 'Três lado a lado, em 3 fileiras, né.' },
        { speaker: 'B', ja: 'そうです。で、{後|うし}ろにスペースをあけてください。あと、{入口|いりぐち}の{横|よこ}、{入|はい}って{左|ひだり}に、{四角|しかく}い{長|なが}いテーブルを1つ{置|お}いてください。', pt: 'Isso. E deixe um espaço atrás. Além disso, ao lado da entrada, à esquerda de quem entra, coloque uma mesa retangular comprida.' },
        { speaker: 'A', ja: 'はい。', pt: 'Certo.' },
      ],
    },
  ],
  '13-22': [
    {
      label: '会話3 (13-22) — 会議の準備',
      setupJa: '{会議|かいぎ}の{準備|じゅんび}をします。',
      setupPt: 'Vão preparar a reunião.',
      lines: [
        { speaker: 'アリ', ja: '{会議|かいぎ}の{準備|じゅんび}は、どうしますか？', pt: 'Como fazemos a preparação da reunião?' },
        { speaker: '上司', ja: 'アリさんは、{部屋|へや}のセッティング、{西村|にしむら}さんは、{資料|しりょう}の{準備|じゅんび}をお{願|ねが}いします。アリさんは、{部屋|へや}の{机|つくえ}をコの{字|じ}に{並|なら}べて、それからパソコンとプロジェクタを{準備|じゅんび}してください。{西村|にしむら}さんは、{資料|しりょう}を{人数分|にんずうぶん}コピーして、{机|つくえ}の{上|うえ}に1{部|ぶ}ずつ{並|なら}べてください。', pt: 'Ali, cuida da arrumação da sala; Nishimura, do preparo do material, por favor. Ali, arruma as mesas da sala em forma de U e depois prepara o computador e o projetor. Nishimura, copia o material para o número de pessoas e põe 1 cópia em cada mesa.' },
        { speaker: '西村', ja: '{飲|の}み{物|もの}は{用意|ようい}しますか？', pt: 'Preparo as bebidas?' },
        { speaker: '上司', ja: 'それは、{外|そと}のお{店|みせ}に{頼|たの}んだから、いいです。', pt: 'Isso já encomendei numa loja de fora, então não precisa.' },
      ],
    },
  ],
}

const lesson13: Section = {
  id: 'lesson-13',
  level: 'elementary1',
  titleJa: '第13課 あと10分ぐらいで終わりそうです',
  titlePt: 'Lição 13 — Parece que termino em uns 10 minutos',
  summaryPt: 'Comunicação no trabalho · relatar um problema ao superior ({電気|でんき}がつかないんですが…), prever o andamento do trabalho ({終|お}わりそうです／どのぐらいかかりそうですか), perguntar como usar uma máquina ({使|つか}い{方|かた}を{教|おし}えてもらえませんか／したいときは、どうすればいいですか / {押|お}すと、〜) e ler um e-mail de aviso.',
  studyNotes: [
    {
      title: 'Tópico: Comunicação no trabalho (仕事の連絡)',
      bodyPt:
        '## Can-do\n' +
        '- Transmitir ao superior a situação quando há um problema no trabalho.\n' +
        '- Responder de forma simples quando perguntam o andamento do trabalho.\n' +
        '- Perguntar como usar uma máquina no trabalho e entender a resposta.\n' +
        '- Ouvir e entender explicações e instruções sobre como fazer o trabalho.\n' +
        '- Ler um e-mail simples de aviso no trabalho e entender o conteúdo.\n\n' +
        '💡 Pergunta de abertura: どんな{仕事|しごと}が{得意|とくい}ですか？どんな{仕事|しごと}が{苦手|にがて}ですか？',
    },
    {
      title: 'Relatar um problema: 〜んですが… (➊)',
      bodyPt:
        '**[forma simples]+んですが…** = explicar a própria situação (um problema) para que o outro tome providência:\n\n' +
        '- forma de dicionário: `{変|へん}な{音|おと}がするんですが…`; forma タ: `トイレットペーパーがなくなったんですが…`; forma ナイ: `{電気|でんき}がつかないんですが…`.\n' +
        '- Nas Lições 8/10 só vimos V-たいんですが…／V-てみたいんですが…; aqui amplia-se para dicionário, タ e ナイ.\n\n' +
        '**ナイ形:** G1 -u→-anai ({買|か}う→{買|か}わない, {動|うご}く→{動|うご}かない); G2 tira る ({見|み}る→{見|み}ない); G3 する→しない, {来|く}る→{来|こ}ない.',
    },
    {
      title: 'Prever o andamento: V-そうです (➋)',
      bodyPt:
        '**V(マス sem ます)+そうです** = previsão/expectativa (≠ Lição 12, onde そう vinha de adjetivo p/ aparência):\n\n' +
        '- `{終|お}わりそうです` (parece que vai terminar), `できそうですか？` (acha que consegue?).\n' +
        '- Para o prazo, usa-se **【tempo】+で**, marcando o intervalo: `あと10{分|ぷん}ぐらいで{終|お}わりそうです`.\n\n' +
        'Pergunta típica do andamento: `どのぐらいかかりそうですか？`.',
    },
    {
      title: 'Pedir e explicar como usar: V-たいとき、どうすればいいですか？ (➌) ／ V-ると、〜 (➍)',
      bodyPt:
        '**V-たいとき、どうすればいいですか？** = dizer o que se quer fazer e pedir conselho: `{両面|りょうめん}コピーしたいときは、どうすればいいですか？`. どうすれば é tratado como frase fixa (retomado no 初級2). Pedido geral: `{使|つか}い{方|かた}を{教|おし}えてもらえませんか？`.\n\n' +
        '**V-ると、〜** = o resultado de uma ação (explicar uso de máquina/objeto); 〜と liga-se à forma de dicionário: `このボタンを{押|お}すと、コピーが{始|はじ}まります`／`{手|て}をかざすと、{水|みず}が{流|なが}れます`.',
    },
    {
      title: 'Responder a pergunta negativa: はい＋否定文 ／ いいえ＋肯定文 (➎)',
      bodyPt:
        'Diferente do português, a resposta segue o **conteúdo** da pergunta, não o sim/não:\n\n' +
        '- Pergunta negativa correta (concordo): **はい** + frase negativa → `{使|つか}ったことないですか？` → `はい、ないです`.\n' +
        '- Pergunta negativa errada (discordo): **いいえ** + frase afirmativa → `いいえ。{前|まえ}に{一度|いちど}{使|つか}ったことがあります`.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Problemas/instruções (Ativ. 1):** {電気|でんき}がつかない, {変|へん}な{音|おと}がする, {動|うご}かない, トイレットペーパーがなくなる; {業者|ぎょうしゃ}に{電話|でんわ}する, {再起動|さいきどう}する, {管理室|かんりしつ}に{連絡|れんらく}する, {倉庫|そうこ}から{取|と}って{来|く}る; コーヒーマシーン, パソコン, とりあえず. **Andamento (Ativ. 2):** やり{方|かた}がわかりません, だいじょうぶです, もう{終|お}わりました, もうすぐ{終|お}わります, できる. **Copiadora (Ativ. 3):** {原稿|げんこう}, セットする, {枚数|まいすう}, {数字|すうじ}, {入|い}れる, {両面|りょうめん}, {片面|かためん}, カラー, {白黒|しろくろ}, できるだけ; {拡大|かくだい}, {縮小|しゅくしょう}, ソート, ホチキス{止|ど}め. **Preparar a sala (Ativ. 4):** {資料|しりょう}, {戻|もど}す, {扉|とびら}, {開|あ}ける, {棚|たな}, {丸|まる}い, {四角|しかく}い, {列|れつ}, スペース, あける, {入口|いりぐち}, {会議|かいぎ}, コの{字|じ}, {人数分|にんずうぶん}, 〜{部|ぶ}, {頼|たの}む. **E-mail (Ativ. 5):** {件名|けんめい}, {変更|へんこう}, お{知|し}らせ, {都合|つごう}が{悪|わる}い, {注意|ちゅうい}（する）.\n\n' +
        '**Kanji da lição:** コピー{機|き}, {数字|すうじ}, {電気|でんき}, {音|おと}, {机|つくえ}, {都合|つごう}, {悪|わる}い, {動|うご}く, {使|つか}う, {終|お}わる, お{願|ねが}いします.\n\n' +
        '📌 **TIPS — {日本|にほん}のトイレ:** **{和式|わしき}トイレ** (vaso japonês, no chão; raro hoje, ainda visto em prédios antigos/locais públicos); **{温水洗浄|おんすいせんじょう}{便座|べんざ}** (bidê de água morna — botões só em japonês: 「おしり」 lava, 「{止|と}」 para, 「{弱|じゃく}〜{強|きょう}」 força, 「{前|まえ}〜{後|うし}ろ」 posição, 「ビデ」 feminino); **{水|みず}を{流|なが}す** (dar descarga de vários jeitos — botão no painel 大/小, botão na parede 「{洗浄|せんじょう}」「{流|なが}す」, sensor de mão, alavanca de girar/empurrar 大↔小); ⚠ 「{呼出|よびだし}」 é botão de EMERGÊNCIA — não confundir com a descarga.',
    },
  ],
  groups: [lesson13Group],
  audios: attachScripts(13, L13_SCRIPTS),
}

// ---- Lição 14: 休みを取ってもいいでしょうか？ (tópico 仕事の連絡) ----------
const lesson14Group: ExerciseGroup = {
  id: 'iro-e1-l14',
  title: '休みを取ってもいいでしょうか？',
  subtitlePt: 'Comunicação no trabalho · avisar atraso/folga ({道|みち}が{混|こ}んでいて…／それで、{遅|おく}れます), pedir permissão (トイレに{行|い}ってきてもいいですか／{早退|そうたい}してもいいでしょうか) e justificar com obrigação/motivo ({役所|やくしょ}に{行|い}かなければならないんです／{友|とも}だちが{来|く}るんです)',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l14-1', number: 1, prompt: '「{道|みち}が{混|こ}んでいて、ぜんぜん{動|うご}きません」 — para que serve 〜で／〜くて／〜て aqui (Nota ➊)?', choices: [{ n: 1, text: 'unir duas frases numa só, em que a 1ª dá o MOTIVO/CAUSA da 2ª' }, { n: 2, text: 'só listar ações na ordem do tempo' }, { n: 3, text: 'fazer um pedido' }, { n: 4, text: 'transformar em pergunta' }], answer: 1, translationPt: 'O trânsito está parado e (por isso) não anda nada.', explanationPt: '〜で／〜くて／〜て une duas orações; conforme o sentido, a 1ª expressa o motivo/causa da 2ª. Também serve para justificar e pedir desculpa. (Nota ➊)' },
    { id: 'iro-e1-l14-2', number: 2, prompt: 'Como o motivo (Nota ➊) muda conforme a classe da palavra?', choices: [{ n: 1, text: 'N+で ({事故|じこ}で) ／ ナA+で ({仕事|しごと}が{大変|たいへん}で) ／ イA+くて ({具合|ぐあい}が{悪|わる}くて) ／ V+テ-form ({熱|ねつ}があって)' }, { n: 2, text: 'todas usam apenas 〜くて' }, { n: 3, text: 'todas usam apenas 〜で' }, { n: 4, text: 'só substantivos podem dar motivo' }], answer: 1, explanationPt: 'Substantivo: Nで ({事故|じこ}で); ナA: 〜で ({大変|たいへん}で); イA: 〜くて ({悪|わる}くて); verbo: テ-form ({熱|ねつ}があって、{会社|かいしゃ}を{休|やす}みました). Na Lição 7 só vimos N e V. (Nota ➊)' },
    { id: 'iro-e1-l14-3', number: 3, prompt: 'Em 「{道|みち}が{混|こ}んでいて」 e 「{昨日|きのう}は、{休|やす}んですみませんでした」, o que se observa (Nota ➊)?', choices: [{ n: 1, text: 'V-ている vira V-ていて ({混|こ}んでいる→{混|こ}んでいて); e 〜て serve para justificar ao pedir desculpa ({休|やす}んで＋すみません)' }, { n: 2, text: 'são erros de conjugação' }, { n: 3, text: 'V-ている nunca muda' }, { n: 4, text: '〜て não pode aparecer com すみません' }], answer: 1, translationPt: 'O trânsito está parado… / Desculpe por ter faltado ontem.', explanationPt: '{混|こ}んでいる→{混|こ}んでいて (V-ている→V-ていて). E 〜て liga o motivo ao pedido de desculpa: {休|やす}んで、すみませんでした／{遅|おそ}くなって、{申|もう}し{訳|わけ}ありません. (Nota ➊)' },
    { id: 'iro-e1-l14-4', number: 4, prompt: '「これから{病院|びょういん}に{行|い}きます。それで、{少|すこ}し{遅刻|ちこく}します」 — o que faz それで (Nota ➋)?', choices: [{ n: 1, text: 'é o conectivo “por isso/então”: a frase 1 (S1) é o motivo da frase 2 (S2)' }, { n: 2, text: 'significa “mas/porém”' }, { n: 3, text: 'significa “depois disso”, sem relação de causa' }, { n: 4, text: 'introduz uma pergunta' }], answer: 1, translationPt: 'Vou ao hospital agora. Por isso, vou me atrasar um pouco.', explanationPt: 'それで liga duas frases: S1 (motivo) → それで → S2 (consequência). Ex.: {家|いえ}に{財布|さいふ}を{忘|わす}れました。これから{取|と}りに{帰|かえ}ります。それで、{少|すこ}し{遅|おく}れます. (Nota ➋)' },
    { id: 'iro-e1-l14-5', number: 5, prompt: '「トイレに{行|い}ってきてもいいですか？」 (V-てもいいですか？) serve para (Nota ➌):', choices: [{ n: 1, text: 'pedir permissão; liga-se à テ-form. Permissão: どうぞ／わかりました／いいです(よ)' }, { n: 2, text: 'recusar um pedido' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'expressar obrigação' }], answer: 1, translationPt: 'Posso ir ao banheiro?', explanationPt: 'V-てもいいですか？ pede permissão, sobre a テ-form. Aceita-se com どうぞ／わかりました／いいですよ; recusa-se com あとにして／あとにしてもらえませんか. (Nota ➌)' },
    { id: 'iro-e1-l14-6', number: 6, prompt: '「{明日|あした}の{午後|ごご}、{早退|そうたい}してもいいでしょうか？」 (V-てもいいでしょうか？) é (Nota ➍):', choices: [{ n: 1, text: 'um jeito mais EDUCADO de pedir permissão — troca 〜ですか？ por 〜でしょうか？' }, { n: 2, text: 'uma ordem ao superior' }, { n: 3, text: 'uma recusa educada' }, { n: 4, text: 'uma pergunta sobre o futuro do tempo' }], answer: 1, translationPt: 'Eu poderia sair mais cedo amanhã à tarde?', explanationPt: 'V-てもいいでしょうか？ = pedir permissão com mais polidez. Vem de 〜てもいいですか？ trocando o final 〜ですか？ por 〜でしょうか？. (Nota ➍)' },
    { id: 'iro-e1-l14-7', number: 7, prompt: '「{役所|やくしょ}に{行|い}かなければならないんです」 (V-なければなりません) expressa (Nota ➎):', choices: [{ n: 1, text: 'algo que é PRECISO fazer, independente da vontade (tenho que ir); forma-se trocando 〜ない da ナイ-form por 〜なければなりません' }, { n: 2, text: 'algo que se pode ou não fazer' }, { n: 3, text: 'uma proibição' }, { n: 4, text: 'um desejo' }], answer: 1, translationPt: 'É que eu tenho que ir à prefeitura.', explanationPt: 'V-なければなりません = obrigação (preciso fazer). Da ナイ-form, troca-se 〜ない por 〜なければなりません ({行|い}かない→{行|い}かなければなりません). Forma simples: 〜なければならない. (Nota ➎)' },
    { id: 'iro-e1-l14-8', number: 8, prompt: '「{東京|とうきょう}から、{国|くに}の{友|とも}だちが{来|く}るんです」 (〜んです①) serve para (Nota ➏):', choices: [{ n: 1, text: 'explicar a situação/motivo ao outro; difere de 〜んですが… por NÃO terminar com が…' }, { n: 2, text: 'fazer um pedido formal' }, { n: 3, text: 'dar uma ordem' }, { n: 4, text: 'negar um fato' }], answer: 1, translationPt: 'É que um amigo do meu país vem de Tóquio.', explanationPt: '〜んです explica a situação/motivo (aqui, o motivo de pedir folga). Diferente de 〜んですが… (que pede resposta), 〜んです não tem が… no fim. Liga-se à forma de dicionário ou a 〜なければならない. (Nota ➏)' },
    { id: 'iro-e1-l14-9', number: 9, prompt: 'Atividade 1 — os motivos dos avisos (a–f) são:', choices: [{ n: 1, text: '{道|みち}が{混|こ}んでいる (trânsito parado) ／ せきがひどい (tosse forte) ／ {熱|ねつ}がある (estar com febre) ／ {財布|さいふ}を{忘|わす}れた (esqueceu a carteira) ／ {病院|びょういん}に{行|い}く (ir ao hospital) ／ {家|いえ}に{帰|かえ}る (voltar para casa)' }, { n: 2, text: 'almoçar ／ dormir ／ viajar ／ comprar ／ estudar ／ trabalhar' }, { n: 3, text: 'chuva ／ neve ／ calor ／ frio ／ vento ／ sol' }, { n: 4, text: 'reunião ／ folga ／ feriado ／ atraso ／ hora extra ／ pausa' }], answer: 1, explanationPt: 'a. {道|みち}が{混|こ}んでいる, b. せきがひどい, c. {熱|ねつ}がある, d. {財布|さいふ}を{忘|わす}れた, e. {病院|びょういん}に{行|い}く, f. {家|いえ}に{帰|かえ}る. (Atividade 1)' },
    { id: 'iro-e1-l14-10', number: 10, prompt: 'Atividade 1 — a tarefa pede marcar A ou B para cada ligação. O que são A e B?', choices: [{ n: 1, text: 'A = {遅刻|ちこく} (vai se atrasar) ／ B = {休|やす}む (vai faltar/tirar o dia)' }, { n: 2, text: 'A = sair mais cedo ／ B = hora extra' }, { n: 3, text: 'A = férias ／ B = demissão' }, { n: 4, text: 'A = comprar ／ B = vender' }], answer: 1, explanationPt: 'Marca-se A para {遅刻|ちこく} (atraso) e B para {休|やす}む (faltar). Os 4 telefonemas (14-01~04) são avisos de atraso ou de falta ao trabalho. (Atividade 1)' },
    { id: 'iro-e1-l14-11', number: 11, prompt: 'Vocabulário (Atividade 1): 「これから／{遅|おそ}くなる／みなさん／{伝|つた}える／{遅刻|ちこく}する／あとで／{申|もう}し{訳|わけ}ありません」 significam:', choices: [{ n: 1, text: 'agora/a partir de agora ／ atrasar-se ／ todos/o pessoal ／ transmitir/avisar ／ atrasar-se ／ mais tarde ／ desculpe (formal)' }, { n: 2, text: 'antes ／ adiantar-se ／ ninguém ／ esquecer ／ faltar ／ agora ／ obrigado' }, { n: 3, text: 'depois ／ chegar cedo ／ chefe ／ ligar ／ sair ／ ontem ／ de nada' }, { n: 4, text: 'hoje ／ correr ／ cliente ／ ouvir ／ descansar ／ amanhã ／ com licença' }], answer: 1, explanationPt: 'これから (a partir de agora), {遅|おそ}くなる (atrasar), みなさん (todos), {伝|つた}える (avisar/transmitir), {遅刻|ちこく}する (chegar atrasado), あとで (mais tarde), {申|もう}し{訳|わけ}ありません (desculpe — formal). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l14-12', number: 12, prompt: 'Atividade 2 — as permissões pedidas (a–d) são:', choices: [{ n: 1, text: 'お{祈|いの}りに{行|い}く (ir rezar) ／ たばこを{吸|す}う (fumar) ／ {飲|の}み{物|もの}を{買|か}う (comprar bebida) ／ トイレに{行|い}く (ir ao banheiro)' }, { n: 2, text: 'almoçar ／ dormir ／ telefonar ／ sair cedo' }, { n: 3, text: 'rezar ／ comer ／ vender ／ entrar' }, { n: 4, text: 'descansar ／ beber ／ comprar ／ voltar' }], answer: 1, explanationPt: 'a. お{祈|いの}りに{行|い}く, b. たばこを{吸|す}う, c. {飲|の}み{物|もの}を{買|か}う, d. トイレに{行|い}く. (Atividade 2)' },
    { id: 'iro-e1-l14-13', number: 13, prompt: 'Vocabulário (Atividade 2): 「{休憩|きゅうけい}（する）／{戻|もど}る」 significam:', choices: [{ n: 1, text: 'fazer uma pausa/descanso ／ voltar/retornar' }, { n: 2, text: 'trabalhar ／ sair' }, { n: 3, text: 'almoçar ／ entrar' }, { n: 4, text: 'dormir ／ chegar' }], answer: 1, explanationPt: '{休憩|きゅうけい}（する） (fazer pausa), {戻|もど}る (voltar): 15{分|ふん}で{戻|もど}ります. (Atividade 2 · ことば)' },
    { id: 'iro-e1-l14-14', number: 14, prompt: 'Atividade 3 — as permissões pedidas ao superior (a–c) são:', choices: [{ n: 1, text: '{遅刻|ちこく}する (chegar atrasado) ／ {早退|そうたい}する (sair mais cedo) ／ {休|やす}みを{取|と}る (tirar folga)' }, { n: 2, text: 'fazer hora extra ／ almoçar ／ viajar' }, { n: 3, text: 'pedir demissão ／ mudar de equipe ／ faltar' }, { n: 4, text: 'comprar ／ vender ／ entregar' }], answer: 1, explanationPt: 'a. {遅刻|ちこく}する, b. {早退|そうたい}する, c. {休|やす}みを{取|と}る. Também se marca 〇 (permitiu) ou × (não permitiu). (Atividade 3)' },
    { id: 'iro-e1-l14-15', number: 15, prompt: 'Vocabulário (Atividade 3): 「{社長|しゃちょう}／{役所|やくしょ}／{用事|ようじ}／{済|す}む／{主任|しゅにん}／{来月|らいげつ}／できたら」 significam:', choices: [{ n: 1, text: 'presidente/diretor ／ prefeitura/repartição pública ／ compromisso/afazer ／ ficar resolvido/terminar ／ encarregado (chefe de equipe) ／ mês que vem ／ se possível' }, { n: 2, text: 'cliente ／ banco ／ reunião ／ começar ／ gerente ／ semana que vem ／ talvez' }, { n: 3, text: 'colega ／ hospital ／ folga ／ falhar ／ diretor ／ ano que vem ／ de jeito nenhum' }, { n: 4, text: 'chefe ／ escola ／ tarefa ／ adiar ／ secretário ／ hoje ／ com certeza' }], answer: 1, explanationPt: '{社長|しゃちょう} (presidente), {役所|やくしょ} (repartição pública), {用事|ようじ} (compromisso/afazer), {済|す}む (resolver-se): {用事|ようじ}は{済|す}みましたか, {主任|しゅにん} (encarregado), {来月|らいげつ} (mês que vem), できたら (se possível). (Atividade 3 · ことば)' },
    { id: 'iro-e1-l14-16', number: 16, prompt: 'Atividade 3 — as frases-chave 「ちょっと、いいでしょうか？」 e 「{別|べつ}にかまいません」 significam:', choices: [{ n: 1, text: '“Com licença, posso falar/incomodar um instante?” ／ “Por mim, tudo bem / não tem problema.”' }, { n: 2, text: '“Estou ocupado.” ／ “Não pode de jeito nenhum.”' }, { n: 3, text: '“Que horas são?” ／ “Não sei.”' }, { n: 4, text: '“Obrigado.” ／ “De nada.”' }], answer: 1, explanationPt: 'ちょっと、いいでしょうか？ = pedir um momento de atenção (interromper educadamente). {別|べつ}にかまいません = “tudo bem, não há problema” (conceder permissão). (Atividade 3)' },
    { id: 'iro-e1-l14-17', number: 17, prompt: 'Vocabulário (Atividade 4 · {休暇届|きゅうかとどけ}): 「{休暇届|きゅうかとどけ}／{出|だ}す／フォーム／{所属|しょぞく}／チーム／{総務|そうむ}／{氏名|しめい}／ハンコ／{期間|きかん}」 significam:', choices: [{ n: 1, text: 'pedido de folga/licença ／ entregar/submeter ／ formulário ／ lotação/setor ／ equipe ／ administração geral ／ nome (completo) ／ carimbo pessoal ／ período' }, { n: 2, text: 'atestado ／ guardar ／ ficha ／ cargo ／ time ／ vendas ／ apelido ／ assinatura ／ data' }, { n: 3, text: 'recibo ／ assinar ／ planilha ／ andar ／ grupo ／ RH ／ sobrenome ／ selo postal ／ prazo' }, { n: 4, text: 'contrato ／ enviar ／ modelo ／ filial ／ turma ／ contabilidade ／ código ／ digital ／ duração' }], answer: 1, explanationPt: '{休暇届|きゅうかとどけ} (pedido de folga), {出|だ}す (entregar), フォーム (formulário), {所属|しょぞく} (lotação/setor), チーム (equipe), {総務|そうむ} (administração geral), {氏名|しめい} (nome completo), ハンコ (carimbo), {期間|きかん} (período). (Atividade 4 · ことば)' },
    { id: 'iro-e1-l14-18', number: 18, prompt: 'Vocabulário (Atividade 4): 「{理由|りゆう}／{普通|ふつう}／{私用|しよう}／{休|やす}み{中|ちゅう}／{連絡先|れんらくさき}／{備考|びこう}／いる」 significam:', choices: [{ n: 1, text: 'motivo ／ comum/normal ／ assunto particular ／ durante a folga ／ contato ／ observações ／ ser necessário/precisar' }, { n: 2, text: 'data ／ especial ／ trabalho ／ depois da folga ／ endereço ／ título ／ existir (pessoa)' }, { n: 3, text: 'período ／ raro ／ uso público ／ antes da folga ／ telefone ／ resumo ／ entrar' }, { n: 4, text: 'nome ／ urgente ／ feriado ／ na folga ／ e-mail ／ anexo ／ haver' }], answer: 1, explanationPt: '{理由|りゆう} (motivo), {普通|ふつう} (normal/comum), {私用|しよう} (assunto particular), {休|やす}み{中|ちゅう} (durante a folga; 〜中=durante), {連絡先|れんらくさき} (contato), {備考|びこう} (observações), いる (ser necessário/precisar). (Atividade 4 · ことば)' },
    { id: 'iro-e1-l14-19', number: 19, prompt: 'Os kanji 「{用事|ようじ}／{氏名|しめい}／{理由|りゆう}／{連絡先|れんらくさき}／{別|べつ}に」 lêem-se:', choices: [{ n: 1, text: 'ようじ (afazer/compromisso) ／ しめい (nome completo) ／ りゆう (motivo) ／ れんらくさき (contato) ／ べつに (em especial/em particular)' }, { n: 2, text: 'ようじ ／ うじな ／ りよし ／ れんらくさき ／ わかに' }, { n: 3, text: 'もちごと ／ しめい ／ りゆう ／ つれらくさき ／ べつに' }, { n: 4, text: 'ようじ ／ しめい ／ りゆう ／ れんらくさき ／ ほかに' }], answer: 1, explanationPt: '{用事|ようじ}, {氏名|しめい}, {理由|りゆう}, {連絡先|れんらくさき}, {別|べつ}に. (漢字のことば)' },
    { id: 'iro-e1-l14-20', number: 20, prompt: 'Os kanji 「{早|はや}く／{吸|す}う／{取|と}る／{帰|かえ}る／{伝|つた}える」 lêem-se:', choices: [{ n: 1, text: 'はやく (cedo/rápido) ／ すう (inalar/fumar) ／ とる (tirar/pegar) ／ かえる (voltar para casa) ／ つたえる (transmitir/avisar)' }, { n: 2, text: 'はやく ／ きゅう ／ しゅる ／ きする ／ でんえる' }, { n: 3, text: 'そうく ／ すう ／ とる ／ かえる ／ つたえる' }, { n: 4, text: 'はやく ／ すう ／ とる ／ おかえる ／ つだえる' }], answer: 1, explanationPt: '{早|はや}く, {吸|す}う, {取|と}る, {帰|かえ}る, {伝|つた}える. Kanji da lição: {用事|ようじ}・{氏名|しめい}・{理由|りゆう}・{連絡先|れんらくさき}・{別|べつ}に・{早|はや}く・{吸|す}う・{取|と}る・{帰|かえ}る・{伝|つた}える. (漢字)' },
    { id: 'iro-e1-l14-21', number: 21, prompt: 'Diálogo 14-01: por que Anisa liga para o trabalho?', context: 'アニサ：すみません。{家|いえ}に{財布|さいふ}を{忘|わす}れました。これから{取|と}りに{帰|かえ}ります。それで、{少|すこ}し{遅|おく}れます。', choices: [{ n: 1, text: 'Esqueceu a carteira em casa; vai voltar para pegá-la e, por isso, vai se atrasar um pouco ({遅|おく}れます)' }, { n: 2, text: 'Está doente e vai faltar o dia todo' }, { n: 3, text: 'Vai ao hospital por causa de tosse' }, { n: 4, text: 'Quer sair mais cedo' }], answer: 1, explanationPt: '{財布|さいふ}を{忘|わす}れました…{取|と}りに{帰|かえ}ります。それで、{少|すこ}し{遅|おく}れます (motivo + それで, ➋). Depois: {遅|おそ}くなって、{申|もう}し{訳|わけ}ありません. (Atividade 1 · 聴解スクリプト 14-01)' },
    { id: 'iro-e1-l14-22', number: 22, prompt: 'Diálogo 14-02: qual o problema de Miguel?', context: 'ミゲル：{今|いま}、バスの{中|なか}です。{道|みち}が{混|こ}んでいて、ぜんぜん{動|うご}きません。…{今日|きょう}は{遅|おそ}くなりそうです。みなさんに{伝|つた}えてください。', choices: [{ n: 1, text: 'Está no ônibus; o trânsito está parado ({混|こ}んでいて{動|うご}かない) e hoje deve chegar atrasado — pede que avisem a todos' }, { n: 2, text: 'Está com febre e vai faltar' }, { n: 3, text: 'Esqueceu a carteira' }, { n: 4, text: 'Quer sair mais cedo para rezar' }], answer: 1, explanationPt: '{道|みち}が{混|こ}んでいて (motivo, V-ていて, ➊); {遅|おそ}くなりそうです (V-そうです previsão, Lição 13); みなさんに{伝|つた}えてください. (Atividade 1 · 14-02)' },
    { id: 'iro-e1-l14-23', number: 23, prompt: 'Diálogo 14-04: por que Wang ({王|オウ}) vai faltar?', context: '{王|オウ}：{熱|ねつ}があります。それで、{今日|きょう}は1{日|にち}、{休|やす}みたいんですが……。 {田村|たむら}：そうですか。わかりました。ゆっくり{休|やす}んでください。', choices: [{ n: 1, text: 'Está com febre; por isso quer tirar o dia de folga ({休|やす}みたいんですが…) — e é autorizado' }, { n: 2, text: 'Vai se atrasar por causa do trânsito' }, { n: 3, text: 'Quer sair mais cedo para ir à prefeitura' }, { n: 4, text: 'Esqueceu a carteira em casa' }], answer: 1, explanationPt: '{熱|ねつ}があります。それで、{今日|きょう}は1{日|にち}{休|やす}みたいんですが… (motivo + それで, ➋; V-たいんですが…). 田村: ゆっくり{休|やす}んでください. No dia seguinte: {休|やす}んですみませんでした. (Atividade 1 · 14-04)' },
    { id: 'iro-e1-l14-24', number: 24, prompt: 'Diálogo 14-09: A pede para sair e comprar uma bebida. Qual a resposta?', context: 'A：あのう、ちょっと{飲|の}み{物|もの}を{買|か}ってきてもいいですか？ B：え、{今|いま}？あとにして。', choices: [{ n: 1, text: 'O pedido é NEGADO: “Agora? Deixa para depois” (あとにして)' }, { n: 2, text: 'É autorizado na hora (どうぞ)' }, { n: 3, text: 'B também quer uma bebida' }, { n: 4, text: 'B manda comprar duas' }], answer: 1, translationPt: 'Posso ir comprar uma bebida? — O quê, agora? Deixa para depois.', explanationPt: 'V-てもいいですか？ (➌) pedindo permissão; resposta de RECUSA: あとにして (deixe para depois). (Atividade 2 · 14-09)' },
    { id: 'iro-e1-l14-25', number: 25, prompt: 'Diálogo 14-11: A pede para ir rezar. O que combina?', context: 'A：あのう、すみません。{今|いま}、お{祈|いの}りに{行|い}ってもいいですか？15{分|ふん}で{戻|もど}ります。 B：わかりました。', choices: [{ n: 1, text: 'Pede permissão para ir rezar agora e avisa que volta em 15 minutos (15{分|ふん}で{戻|もど}ります); é autorizado' }, { n: 2, text: 'Pede para fumar e é recusado' }, { n: 3, text: 'Pede para ir ao banheiro e B diz “depois”' }, { n: 4, text: 'Vai faltar o dia todo' }], answer: 1, explanationPt: 'お{祈|いの}りに{行|い}ってもいいですか？ (➌); 15{分|ふん}で{戻|もど}ります (で = intervalo, Lição 13); わかりました (permissão). (Atividade 2 · 14-11)' },
    { id: 'iro-e1-l14-26', number: 26, prompt: 'Diálogo 14-14: Bank pede ao {社長|しゃちょう} para sair mais cedo. Qual o motivo, e a resposta?', context: 'バンク：{明日|あした}の{午後|ごご}、{早退|そうたい}してもいいでしょうか？ちょっと、{役所|やくしょ}に{行|い}かなければならないんです。 {社長|しゃちょう}：わかりました。だいじょうぶですよ。', choices: [{ n: 1, text: 'Pede educadamente para sair cedo amanhã à tarde porque tem que ir à prefeitura ({役所|やくしょ}に{行|い}かなければならない); é autorizado' }, { n: 2, text: 'Quer faltar a semana toda; é recusado' }, { n: 3, text: 'Está com febre e vai ao hospital' }, { n: 4, text: 'Quer almoçar mais cedo' }], answer: 1, explanationPt: '{早退|そうたい}してもいいでしょうか？ (pedido educado, ➍); {役所|やくしょ}に{行|い}かなければならないんです (obrigação ➎ + んです ➏). Depois: {早|はや}く{帰|かえ}ってすみませんでした. (Atividade 3 · 聴解スクリプト 14-14)' },
    { id: 'iro-e1-l14-27', number: 27, prompt: 'Diálogo 14-15: Monika pede folga ao {主任|しゅにん}. Por quê, e qual a resposta?', context: 'モニカ：{来月|らいげつ}20{日|か}の{月曜日|げつようび}、{休|やす}みを{取|と}ってもいいでしょうか？{東京|とうきょう}から、{国|くに}の{友|とも}だちが{来|く}るんです。…{町|まち}を{案内|あんない}したくて……。 {主任|しゅにん}：……あ、{別|べつ}にかまいませんよ。', choices: [{ n: 1, text: 'Pede folga na segunda dia 20 do mês que vem porque um amigo do país dela vem de Tóquio ({友|とも}だちが{来|く}るんです) e quer mostrar a cidade; é autorizado ({別|べつ}にかまいません)' }, { n: 2, text: 'Quer sair mais cedo por estar doente' }, { n: 3, text: 'Vai à prefeitura resolver um documento' }, { n: 4, text: 'O pedido é recusado' }], answer: 1, explanationPt: '{休|やす}みを{取|と}ってもいいでしょうか？ (➍); {友|とも}だちが{来|く}るんです ({来|く}る + んです, ➏); {案内|あんない}したくて (motivo com 〜て, ➊). {主任|しゅにん}: {別|べつ}にかまいませんよ (permissão). (Atividade 3 · 14-15)' },
    { id: 'iro-e1-l14-28', number: 28, prompt: 'Diálogo 14-19: ao preencher o {休暇届|きゅうかとどけ}, o que escrever em 「{理由|りゆう}」 numa folga comum, e até quando entregar?', context: 'A：「{理由|りゆう}」ですが、{普通|ふつう}の{休|やす}みのときは、「{私用|しよう}」と{書|か}いてください。…「{私|わたし}」という{漢字|かんじ}に、「{用事|ようじ}」の「{用|よう}」です。…{休|やす}みの{前|まえ}の{日|ひ}までに{出|だ}してください。', choices: [{ n: 1, text: 'Escrever 「{私用|しよう}」 (= {私|わたし} + o {用|よう} de {用事|ようじ}); e entregar até o dia anterior à folga' }, { n: 2, text: 'Deixar o motivo em branco e entregar no próprio dia' }, { n: 3, text: 'Escrever o nome da doença e entregar depois' }, { n: 4, text: 'Escrever 「{総務|そうむ}」 e entregar no fim do mês' }], answer: 1, explanationPt: 'Em {理由|りゆう}, numa folga comum, escreve-se {私用|しよう} ({私|わたし}＋{用事|ようじ}の{用|よう}). Entrega-se {休|やす}みの{前|まえ}の{日|ひ}までに (até a véspera). 所属→nome do setor, 氏名→nome+ハンコ, 期間→datas. (Atividade 4 · 聴解スクリプト 14-19)' },
    { id: 'iro-e1-l14-29', number: 29, prompt: 'Atividade 4 — na ordem do formulário {休暇届|きゅうかとどけ}, o que vai em cada campo?', context: 'Campos do formulário: {所属|しょぞく} → {氏名|しめい}（＋ハンコ）→ {期間|きかん} → {理由|りゆう} → {連絡先|れんらくさき} → {備考|びこう}.', choices: [{ n: 1, text: '{所属|しょぞく}=setor／equipe; {氏名|しめい}=nome (com carimbo ao lado); {期間|きかん}=de quando a quando / quantos dias; {理由|りゆう}={私用|しよう}; {連絡先|れんらくさき}=contato na folga; {備考|びこう}=normalmente nada' }, { n: 2, text: '{所属|しょぞく}=nome; {氏名|しめい}=setor; {期間|きかん}=motivo; {理由|りゆう}=datas; {連絡先|れんらくさき}=observações; {備考|びこう}=carimbo' }, { n: 3, text: 'Todos os campos pedem o telefone' }, { n: 4, text: 'Só se preenche o nome e a data' }], answer: 1, explanationPt: 'Ordem: {所属|しょぞく} (nome do setor/{総務|そうむ}) → {氏名|しめい} (nome + ハンコ ao lado) → {期間|きかん} (de quando a quando, nº de dias) → {理由|りゆう} ({私用|しよう}) → {連絡先|れんらくさき} (contato durante a folga) → {備考|びこう} (numa folga comum, nada). (Atividade 4 · 14-19)' },
    { id: 'iro-e1-l14-30', number: 30, prompt: '📌 TIPS — {印鑑|いんかん}／ハンコ (carimbo pessoal) no Japão:', choices: [{ n: 1, text: 'usado em muitas situações (documentos na repartição, abrir conta, receber entregas, {確認印|かくにんいん} no trabalho); há lojas que vendem sobrenomes comuns por algumas centenas de ienes; para nome estrangeiro encomenda-se (a partir de ~2.000 ienes); às vezes a assinatura basta, mas nem sempre' }, { n: 2, text: 'é proibido para estrangeiros' }, { n: 3, text: 'só pode ser feito em kanji' }, { n: 4, text: 'substitui o passaporte' }], answer: 1, explanationPt: 'ハンコ é usado em vários momentos (役所, banco, entregas, {確認印|かくにんいん}). Sobrenomes japoneses comuns custam algumas centenas de ienes; nomes estrangeiros são encomendados (~2.000円+), podendo ser em alfabeto/katakana/kanji. Às vezes サイン (assinatura) basta, mas depende do órgão. (TIPS)' },
    { id: 'iro-e1-l14-31', number: 31, prompt: '📌 TIPS — {有給休暇|ゆうきゅうきゅうか} (férias remuneradas):', choices: [{ n: 1, text: 'desde 1/abr/2019 é obrigatório tirar; com 6+ meses na empresa e 80%+ de presença ganham-se 10 dias/ano; a empresa deve garantir ao menos 5 dias usados por ano; vale também para contratados/part-time conforme tempo e horas' }, { n: 2, text: 'só executivos têm direito' }, { n: 3, text: 'é descontado do salário' }, { n: 4, text: 'estrangeiros não têm direito a folga remunerada' }], answer: 1, explanationPt: '{有給休暇|ゆうきゅうきゅうか}: obrigatório desde 1/4/2019. Com 6+ meses de casa e ≥80% de presença → 10 dias/ano; a empresa deve assegurar ≥5 dias gozados/ano. Vale para {契約社員|けいやくしゃいん}/{派遣|はけん}/parte conforme tempo e horas. O {厚生労働省|こうせいろうどうしょう} atende em vários idiomas. (TIPS)' },
    { id: 'iro-e1-l14-32', number: 32, prompt: 'Pergunta de abertura da lição: 「どんなときに{仕事|しごと}を{休|やす}みますか？」 quer dizer:', choices: [{ n: 1, text: 'Em que situações/ocasiões você falta ao trabalho?' }, { n: 2, text: 'Quantos dias de folga você tem por ano?' }, { n: 3, text: 'A que horas você começa a trabalhar?' }, { n: 4, text: 'Onde você trabalha?' }], answer: 1, translationPt: 'Em que tipo de ocasião você tira folga do trabalho?', explanationPt: 'どんなときに〜 = em que ocasião/situação. Tema: {仕事|しごと}の{連絡|れんらく} (avisar atraso, folga, pedir permissão, preencher {休暇届|きゅうかとどけ}). (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 14
const L14_SCRIPTS: Record<string, ScriptItem[]> = {
  '14-01': [
    {
      label: '① (14-01) — 少し遅れます（財布を忘れた）',
      setupJa: '4{人|よにん}の{人|ひと}が、{遅刻|ちこく}や{休|やす}みの{連絡|れんらく}をするために、{職場|しょくば}に{電話|でんわ}をかけています。',
      setupPt: 'Quatro pessoas ligam para o trabalho para avisar atraso ou falta.',
      lines: [
        { speaker: '会社の人', ja: 'はい、{北浦和|きたうらわ}フーズです。', pt: 'Alô, aqui é a Kitaurawa Foods.' },
        { speaker: 'アニサ', ja: 'もしもし、あのう、アニサです。', pt: 'Alô, ãh, é a Anisa.' },
        { speaker: '会社の人', ja: 'ああ、アニサさん。', pt: 'Ah, Anisa.' },
        { speaker: 'アニサ', ja: 'すみません。{家|いえ}に{財布|さいふ}を{忘|わす}れました。これから{取|と}りに{帰|かえ}ります。それで、{少|すこ}し{遅|おく}れます。', pt: 'Desculpe. Esqueci a carteira em casa. Vou voltar agora para pegá-la. Por isso, vou me atrasar um pouco.' },
        { speaker: '会社の人', ja: 'ああ、わかりました。', pt: 'Ah, entendi.' },
        { speaker: 'アニサ', ja: '（あとで）おはようございます。{遅|おそ}くなって、{申|もう}し{訳|わけ}ありません。', pt: '(Mais tarde) Bom dia. Desculpe pelo atraso.' },
      ],
    },
  ],
  '14-02': [
    {
      label: '② (14-02) — 道が混んでいて（遅くなりそう）',
      lines: [
        { speaker: 'ミゲル', ja: 'もしもし、ミゲルです。', pt: 'Alô, é o Miguel.' },
        { speaker: '会社の人', ja: 'あ、ミゲルさん。', pt: 'Ah, Miguel.' },
        { speaker: 'ミゲル', ja: '{今|いま}、バスの{中|なか}です。{道|みち}が{混|こ}んでいて、ぜんぜん{動|うご}きません。', pt: 'Estou no ônibus agora. O trânsito está parado e não anda nada.' },
        { speaker: '会社の人', ja: 'そうですか。', pt: 'Ah, é?' },
        { speaker: 'ミゲル', ja: 'すみませんが、{今日|きょう}は{遅|おそ}くなりそうです。みなさんに{伝|つた}えてください。', pt: 'Desculpe, mas hoje devo me atrasar. Por favor, avise a todos.' },
        { speaker: '会社の人', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '14-03': [
    {
      label: '③ (14-03) — せきがひどくて（病院に行く）',
      lines: [
        { speaker: 'フエン', ja: 'えっと、フエンです。あのう、{昨日|きのう}からせきがひどくて、これから{病院|びょういん}に{行|い}きます。それで、{少|すこ}し{遅刻|ちこく}します。', pt: 'Ãh, é a Fuen. É que estou com uma tosse forte desde ontem e vou ao hospital agora. Por isso, vou me atrasar um pouco.' },
        { speaker: '会社の人', ja: 'わかりました。', pt: 'Entendi.' },
        { speaker: 'フエン', ja: 'またあとで、{連絡|れんらく}します。', pt: 'Depois eu aviso de novo.' },
      ],
    },
  ],
  '14-04': [
    {
      label: '④ (14-04) — 熱があって（1日休みたい）',
      lines: [
        { speaker: '王', ja: 'おはようございます。{王|オウ}です。', pt: 'Bom dia. É o Wang.' },
        { speaker: '田村', ja: '{田村|たむら}です。{王|オウ}さん、どうしましたか？', pt: 'Aqui é o Tamura. Wang, o que houve?' },
        { speaker: '王', ja: '{熱|ねつ}があります。それで、{今日|きょう}は1{日|にち}、{休|やす}みたいんですが……。', pt: 'Estou com febre. Por isso, hoje eu queria tirar o dia de folga…' },
        { speaker: '田村', ja: 'そうですか。わかりました。ゆっくり{休|やす}んでください。', pt: 'Ah, é? Entendi. Descanse bastante.' },
        { speaker: '王', ja: '（{次|つぎ}の{日|ひ}）{昨日|きのう}は、{休|やす}んですみませんでした。', pt: '(No dia seguinte) Desculpe por ter faltado ontem.' },
      ],
    },
  ],
  '14-08': [
    {
      label: '① (14-08) — トイレに行ってきてもいいですか',
      setupJa: '4{人|よにん}の{人|ひと}が、{職場|しょくば}で、{周|まわ}りの{人|ひと}に{話|はな}しかけています。',
      setupPt: 'Quatro pessoas falam com um colega no trabalho.',
      lines: [
        { speaker: 'A', ja: 'あのう、ちょっとトイレに{行|い}ってきてもいいですか？', pt: 'Ãh, posso ir rapidinho ao banheiro?' },
        { speaker: 'B', ja: 'どうぞ。', pt: 'Pode ir.' },
      ],
    },
  ],
  '14-09': [
    {
      label: '② (14-09) — 飲み物を買ってきてもいいですか（あとにして）',
      lines: [
        { speaker: 'A', ja: 'あのう、ちょっと{飲|の}み{物|もの}を{買|か}ってきてもいいですか？', pt: 'Ãh, posso ir comprar uma bebida rapidinho?' },
        { speaker: 'B', ja: 'え、{今|いま}？あとにして。', pt: 'O quê, agora? Deixa para depois.' },
      ],
    },
  ],
  '14-10': [
    {
      label: '③ (14-10) — たばこを吸ってきてもいいですか（いいよ）',
      lines: [
        { speaker: 'A', ja: 'じゃあ、{今|いま}から{休憩|きゅうけい}。', pt: 'Então, pausa a partir de agora.' },
        { speaker: 'B', ja: 'ちょっと{外|そと}でたばこを{吸|す}ってきてもいいですか？', pt: 'Posso ir fumar um cigarro lá fora?' },
        { speaker: 'A', ja: 'ああ、いいよ。', pt: 'Ah, pode.' },
      ],
    },
  ],
  '14-11': [
    {
      label: '④ (14-11) — お祈りに行ってもいいですか（15分で戻ります）',
      lines: [
        { speaker: 'A', ja: 'あのう、すみません。{今|いま}、お{祈|いの}りに{行|い}ってもいいですか？15{分|ふん}で{戻|もど}ります。', pt: 'Ãh, com licença. Posso ir rezar agora? Volto em 15 minutos.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '14-14': [
    {
      label: '会話① (14-14) — 早退してもいいでしょうか（役所）',
      setupJa: '{休|やす}みを{取|と}ったり{早退|そうたい}したりするために、{上司|じょうし}に{相談|そうだん}しています。',
      setupPt: 'As pessoas conversam com o superior para tirar folga ou sair mais cedo.',
      lines: [
        { speaker: 'バンク', ja: '{社長|しゃちょう}、ちょっと、いいでしょうか？', pt: 'Presidente, posso falar um instante?' },
        { speaker: '社長', ja: 'はい、バンクさん、{何|なん}ですか？', pt: 'Sim, Bank, o que foi?' },
        { speaker: 'バンク', ja: 'あのう、{明日|あした}の{午後|ごご}、{早退|そうたい}してもいいでしょうか？ちょっと、{役所|やくしょ}に{行|い}かなければならないんです。', pt: 'Ãh, eu poderia sair mais cedo amanhã à tarde? É que tenho que ir à prefeitura.' },
        { speaker: '社長', ja: 'わかりました。だいじょうぶですよ。', pt: 'Entendi. Sem problema.' },
        { speaker: 'バンク', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
        { speaker: 'バンク', ja: '（{早退|そうたい}した{次|つぎ}の{日|ひ}）{昨日|きのう}は、{早|はや}く{帰|かえ}ってすみませんでした。', pt: '(No dia seguinte) Desculpe por ter saído mais cedo ontem.' },
        { speaker: '社長', ja: '{用事|ようじ}は{済|す}みましたか？', pt: 'Resolveu o que precisava?' },
        { speaker: 'バンク', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '14-15': [
    {
      label: '会話② (14-15) — 休みを取ってもいいでしょうか（友だちが来る）',
      lines: [
        { speaker: 'モニカ', ja: '{主任|しゅにん}、あのう、すみません。', pt: 'Chefe, ãh, com licença.' },
        { speaker: '主任', ja: 'ああ、モニカさん、どうしましたか？', pt: 'Ah, Monika, o que houve?' },
        { speaker: 'モニカ', ja: 'ええと、{来月|らいげつ}20{日|か}の{月曜日|げつようび}、{休|やす}みを{取|と}ってもいいでしょうか？{東京|とうきょう}から、{国|くに}の{友|とも}だちが{来|く}るんです。できたら、{町|まち}を{案内|あんない}したくて……。', pt: 'Hum, eu poderia tirar folga na segunda, dia 20 do mês que vem? É que um amigo do meu país vem de Tóquio. Se possível, eu queria mostrar a cidade a ele…' },
        { speaker: '主任', ja: 'そうですか。ちょっと{待|ま}ってくださいね。……あ、{別|べつ}にかまいませんよ。', pt: 'Ah, é? Espere um instante. …Ah, por mim, tudo bem.' },
        { speaker: 'モニカ', ja: 'ありがとうございます。', pt: 'Muito obrigada.' },
        { speaker: 'モニカ', ja: '（{休|やす}んだ{次|つぎ}の{日|ひ}）{昨日|きのう}は、お{休|やす}み、ありがとうございました。', pt: '(No dia seguinte) Obrigada pela folga de ontem.' },
        { speaker: '主任', ja: 'ああ。{楽|たの}しかったですか？', pt: 'Ah. Foi divertido?' },
        { speaker: 'モニカ', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
  '14-19': [
    {
      label: '会話 (14-19) — 休暇届の書き方',
      setupJa: '{会社|かいしゃ}の{人|ひと}に、{休暇届|きゅうかとどけ}の{書|か}き{方|かた}を{聞|き}いています。',
      setupPt: 'A pessoa pergunta a um colega como preencher o pedido de folga.',
      lines: [
        { speaker: 'A', ja: 'お{休|やす}みを{取|と}るときには、{休暇届|きゅうかとどけ}を{出|だ}してください。このフォームです。', pt: 'Quando for tirar folga, entregue o pedido de folga. É este formulário.' },
        { speaker: 'B', ja: 'えっと、どこに{何|なに}を{書|か}きますか？', pt: 'Hum, o que escrevo em cada lugar?' },
        { speaker: 'A', ja: 'いちばん{上|うえ}の「{所属|しょぞく}」のところには、{自分|じぶん}の{所属|しょぞく}チームの{名前|なまえ}を{書|か}いてください。', pt: 'No campo “lotação”, lá em cima, escreva o nome da sua equipe.' },
        { speaker: 'B', ja: 'じゃあ、{私|わたし}は「{総務|そうむ}」ですね。', pt: 'Então, no meu caso é “administração geral”, né.' },
        { speaker: 'A', ja: 'はい。それから、その{下|した}の「{氏名|しめい}」のところに{名前|なまえ}を{書|か}きます。それから、{名前|なまえ}の{横|よこ}にハンコを{押|お}してください。あ、ハンコ、{持|も}ってますか？', pt: 'Sim. Depois, no campo “nome”, abaixo, escreva o nome. E ao lado do nome, carimbe. Ah, você tem carimbo?' },
        { speaker: 'B', ja: 'はい、{作|つく}りました。', pt: 'Tenho, mandei fazer.' },
        { speaker: 'A', ja: 'そうですか。で、「{期間|きかん}」のところは、いつからいつまで{何日間|なんにちかん}{休|やす}みたいかを{書|か}きます。', pt: 'Que bom. No campo “período”, escreve de quando até quando e quantos dias quer de folga.' },
        { speaker: 'A', ja: 'その{下|した}の「{理由|りゆう}」ですが、{普通|ふつう}の{休|やす}みのときは、「{私用|しよう}」と{書|か}いてください。', pt: 'No campo “motivo”, abaixo, numa folga comum escreva “assunto particular” (shiyō).' },
        { speaker: 'B', ja: 'しよう？', pt: 'Shiyō?' },
        { speaker: 'A', ja: '「{私|わたし}」という{漢字|かんじ}に、「{用事|ようじ}」の「{用|よう}」です。それから、ここに{休|やす}み{中|ちゅう}の{連絡先|れんらくさき}を{書|か}いてください。', pt: 'O kanji de “watashi” com o “yō” de “yōji”. Depois, escreva aqui o contato durante a folga.' },
        { speaker: 'B', ja: 'えーと、いちばん{下|した}は{何|なん}ですか？', pt: 'Hum, e o de baixo de tudo, o que é?' },
        { speaker: 'A', ja: '「{備考|びこう}」のところは、{普通|ふつう}の{休|やす}みのときは、{何|なに}もいりません。', pt: 'O campo “observações”, numa folga comum, não precisa de nada.' },
        { speaker: 'B', ja: 'わかりました。いつまでに{出|だ}しますか？', pt: 'Entendi. Até quando preciso entregar?' },
        { speaker: 'A', ja: '{休|やす}みの{前|まえ}の{日|ひ}までに{出|だ}してください。', pt: 'Entregue até o dia anterior à folga.' },
      ],
    },
  ],
}

const lesson14: Section = {
  id: 'lesson-14',
  level: 'elementary1',
  titleJa: '第14課 休みを取ってもいいでしょうか？',
  titlePt: 'Lição 14 — Posso tirar uma folga?',
  summaryPt: 'Comunicação no trabalho · avisar atraso/falta por telefone com o motivo ({道|みち}が{混|こ}んでいて…／それで、{遅|おく}れます), pedir permissão (トイレに{行|い}ってきてもいいですか／{早退|そうたい}してもいいでしょうか) e justificar com obrigação ou situação ({役所|やくしょ}に{行|い}かなければならないんです／{友|とも}だちが{来|く}るんです), além de preencher o {休暇届|きゅうかとどけ}.',
  studyNotes: [
    {
      title: 'Tópico: Comunicação no trabalho (仕事の連絡)',
      bodyPt:
        '## Can-do\n' +
        '- Avisar o trabalho por telefone sobre folga ou atraso.\n' +
        '- Pedir permissão a quem está por perto ao deixar o posto de trabalho.\n' +
        '- Pedir permissão com antecedência quando quer tirar folga.\n' +
        '- Perguntar como preencher um formulário (pedido de folga) e entender a resposta.\n\n' +
        '💡 Pergunta de abertura: どんなときに{仕事|しごと}を{休|やす}みますか？',
    },
    {
      title: 'Motivo: Nで／ナA-で／イA-くて／V-て (➊) ／ S1。それで、S2 (➋)',
      bodyPt:
        '**[motivo]で／くて／て、[consequência]** une duas frases, a 1ª como **causa/motivo** da 2ª:\n\n' +
        '- N: `{事故|じこ}で`; ナA: `{大変|たいへん}で`; イA: `{具合|ぐあい}が{悪|わる}くて`; V (テ-form): `{熱|ねつ}があって`. V-ている→V-ていて (`{道|みち}が{混|こ}んでいて`). Também justifica ao pedir desculpa: `{休|やす}んで、すみませんでした`.\n\n' +
        '**S1。それで、S2** — o conectivo それで (“por isso/então”) marca S1 como motivo de S2: `{病院|びょういん}に{行|い}きます。それで、{少|すこ}し{遅刻|ちこく}します`.',
    },
    {
      title: 'Pedir permissão: V-てもいいですか？ (➌) ／ V-てもいいでしょうか？ (➍)',
      bodyPt:
        '**V-てもいいですか？** = pedir permissão (sobre a テ-form): `トイレに{行|い}ってきてもいいですか？`. Concede-se com `どうぞ／わかりました／いいですよ`; recusa-se com `あとにして／あとにしてもらえませんか`.\n\n' +
        '**V-てもいいでしょうか？** = versão mais **educada** (troca 〜ですか？ por 〜でしょうか？): `{明日|あした}の{午後|ごご}、{早退|そうたい}してもいいでしょうか？`.',
    },
    {
      title: 'Obrigação e motivo: V-なければなりません (➎) ／ ～んです① (➏)',
      bodyPt:
        '**V-なければなりません** = obrigação (preciso fazer, independe da vontade). Da ナイ-form, troca-se 〜ない por 〜なければなりません ({行|い}かない→{行|い}かなければなりません); forma simples 〜なければならない.\n\n' +
        '**～んです①** = explicar a situação/motivo, **sem** o が… final (≠ 〜んですが…): `{友|とも}だちが{来|く}るんです`／`{役所|やくしょ}に{行|い}かなければならないんです`.',
    },
    {
      title: 'Vocabulário, Kanji e TIPS',
      bodyPt:
        '**Atraso/falta (Ativ. 1):** {道|みち}が{混|こ}んでいる, せきがひどい, {熱|ねつ}がある, {財布|さいふ}を{忘|わす}れた, {病院|びょういん}に{行|い}く, {家|いえ}に{帰|かえ}る; これから, {遅|おそ}くなる, みなさん, {伝|つた}える, {遅刻|ちこく}する, あとで, {申|もう}し{訳|わけ}ありません. **Permissão ao colega (Ativ. 2):** お{祈|いの}りに{行|い}く, たばこを{吸|す}う, {飲|の}み{物|もの}を{買|か}う, トイレに{行|い}く; {休憩|きゅうけい}（する）, {戻|もど}る. **Permissão ao superior (Ativ. 3):** {遅刻|ちこく}する, {早退|そうたい}する, {休|やす}みを{取|と}る; {社長|しゃちょう}, {役所|やくしょ}, {用事|ようじ}, {済|す}む, {主任|しゅにん}, {来月|らいげつ}, できたら; ちょっと、いいでしょうか？／{別|べつ}にかまいません. **{休暇届|きゅうかとどけ} (Ativ. 4):** {出|だ}す, フォーム, {所属|しょぞく}, チーム, {総務|そうむ}, {氏名|しめい}, ハンコ, {期間|きかん}, {理由|りゆう}, {普通|ふつう}, {私用|しよう}, {休|やす}み{中|ちゅう}, {連絡先|れんらくさき}, {備考|びこう}, いる.\n\n' +
        '**Kanji da lição:** {用事|ようじ}, {氏名|しめい}, {理由|りゆう}, {連絡先|れんらくさき}, {別|べつ}に, {早|はや}く, {吸|す}う, {取|と}る, {帰|かえ}る, {伝|つた}える.\n\n' +
        '📌 **TIPS — {日本|にほん}の{生活|せいかつ}:** **{印鑑|いんかん}／ハンコ** (carimbo pessoal usado em documentos, banco, entregas, {確認印|かくにんいん}; sobrenome comum por centenas de ienes, nome estrangeiro encomendado a partir de ~2.000円; às vezes a assinatura basta); **{有給休暇|ゆうきゅうきゅうか}** (férias remuneradas obrigatórias desde 1/4/2019 — 6+ meses e ≥80% de presença = 10 dias/ano; empresa deve garantir ≥5 dias/ano; vale para contratados/part-time; {厚生労働省|こうせいろうどうしょう} atende em vários idiomas).',
    },
  ],
  groups: [lesson14Group],
  audios: attachScripts(14, L14_SCRIPTS),
}

// ---- Lição 15: 熱があってのどが痛いんです (tópico 健康な生活) ----------
const lesson15Group: ExerciseGroup = {
  id: 'iro-e1-l15',
  title: '熱があってのどが痛いんです',
  subtitlePt: 'Vida saudável · explicar sintomas ({熱|ねつ}があって、のどが{痛|いた}いんです), entender instruções do médico ({人|ひと}に{会|あ}わないでください／{辛|から}いものは{食|た}べないでください), o uso do remédio ({熱|ねつ}を{下|さ}げる{薬|くすり}／{食|た}べたあと、{飲|の}んでください／つらいとき{飲|の}んでください) e preencher o {問診票|もんしんひょう}',
  instructionJa: 'いみや ばめんに あう ものを えらんで ください。',
  instructionPt: 'Escolha o significado ou a resposta adequada à situação.',
  questions: [
    { id: 'iro-e1-l15-1', number: 1, prompt: '「{昨日|きのう}から38{度|ど}の{熱|ねつ}があって、のどがすごく{痛|いた}いんです」 (〜んです②) serve para (Nota ➊):', choices: [{ n: 1, text: 'explicar a própria situação ao outro — aqui, descrever os sintomas ao médico' }, { n: 2, text: 'dar uma ordem ao médico' }, { n: 3, text: 'recusar o atendimento' }, { n: 4, text: 'pedir um favor formal' }], answer: 1, translationPt: 'Estou com 38 graus de febre desde ontem e a garganta dói muito.', explanationPt: '〜んです explica a situação. Na Lição 14 era o motivo de atraso/folga; aqui, os sintomas no hospital. Vários sintomas ligam-se pela テ-form ({熱|ねつ}があって、〜{痛|いた}いんです). (Nota ➊)' },
    { id: 'iro-e1-l15-2', number: 2, prompt: 'Como 〜んです se liga a cada classe de palavra (Nota ➊)?', choices: [{ n: 1, text: 'N／ナA → なんです ({風邪|かぜ}なんです); イA → いんです (のどが{痛|いた}いんです); V → るんです／たんです／ないんです' }, { n: 2, text: 'todas viram 〜なんです' }, { n: 3, text: 'todas viram 〜いんです' }, { n: 4, text: 'só verbos podem levar んです' }], answer: 1, explanationPt: 'N: {風邪|かぜ}なんです; ナA: {大変|たいへん}なんです; イA: {痛|いた}いんです; V dic.: {熱|ねつ}があるんです; V タ: {足|あし}をくじいたんです; V ナイ: せきが{止|と}まらないんです. (Nota ➊)' },
    { id: 'iro-e1-l15-3', number: 3, prompt: 'Diferença entre 「どうしましたか？」 e 「どうしたんですか？」 (Nota ➊):', choices: [{ n: 1, text: 'どうしたんですか？ = quando se ESTRANHA algo e se quer explicação; どうしましたか？ = quando perguntar é natural (ex.: médico ao paciente)' }, { n: 2, text: 'são exatamente iguais' }, { n: 3, text: 'どうしましたか？ é mais rude' }, { n: 4, text: 'どうしたんですか？ só se usa por escrito' }], answer: 1, explanationPt: 'どうしたんですか？ pede explicação quando algo parece diferente/preocupante. どうしましたか？ usa-se quando a pergunta é esperada (médico→paciente). (Nota ➊)' },
    { id: 'iro-e1-l15-4', number: 4, prompt: '「できるだけ{人|ひと}に{会|あ}わないでください」 (V-ないでください) serve para (Nota ➋):', choices: [{ n: 1, text: 'instruir/pedir para NÃO fazer algo; liga-se à ナイ-form do verbo' }, { n: 2, text: 'pedir para fazer algo' }, { n: 3, text: 'expressar um desejo' }, { n: 4, text: 'descrever uma ação passada' }], answer: 1, translationPt: 'Por favor, evite ao máximo encontrar pessoas.', explanationPt: 'V-ないでください = instrução/pedido negativo (não faça). Liga-se à ナイ-form ({会|あ}わない→{会|あ}わないでください). Variações conforme a relação: V-ないで／V-ないでくれる？／V-ないでもらえませんか？. (Nota ➋)' },
    { id: 'iro-e1-l15-5', number: 5, prompt: '「こちらは、せきを{抑|おさ}える{薬|くすり}です」 (V普通形＋N) — o que o verbo faz aqui (Nota ➌)?', choices: [{ n: 1, text: 'qualifica o substantivo {薬|くすり} (um remédio QUE controla a tosse); o verbo vem antes do N, na forma simples (dicionário)' }, { n: 2, text: 'é o verbo principal da frase' }, { n: 3, text: 'indica passado' }, { n: 4, text: 'transforma em pergunta' }], answer: 1, translationPt: 'Este é um remédio que controla a tosse.', explanationPt: 'V (forma simples) + N qualifica o substantivo: 「これは{薬|くすり}です」＋「この{薬|くすり}は、せきを{抑|おさ}えます」→「これは、せきを{抑|おさ}える{薬|くすり}です」. Usa-se a forma de dicionário ({抑|おさ}える). (Nota ➌)' },
    { id: 'iro-e1-l15-6', number: 6, prompt: 'Expressões típicas para a função do remédio (Nota ➌):', choices: [{ n: 1, text: '{熱|ねつ}を{下|さ}げる ({薬|くすり}) ／ せき・{鼻水|はなみず}を{抑|おさ}える ／ {胃|い}を{守|まも}る' }, { n: 2, text: '{熱|ねつ}を{上|あ}げる ／ せきを{出|だ}す ／ {胃|い}を{壊|こわ}す' }, { n: 3, text: '{薬|くすり}を{買|か}う ／ {病院|びょういん}に{行|い}く ／ {医者|いしゃ}に{会|あ}う' }, { n: 4, text: '{食|た}べる ／ {飲|の}む ／ {寝|ね}る' }], answer: 1, explanationPt: 'Funções comuns: {熱|ねつ}を{下|さ}げる{薬|くすり} (baixa a febre), せき／{鼻水|はなみず}を{抑|おさ}える{薬|くすり} (controla tosse/coriza), {胃|い}を{守|まも}る{薬|くすり} (protege o estômago). (Nota ➌)' },
    { id: 'iro-e1-l15-7', number: 7, prompt: '「{寝|ね}る{前|まえ}に{飲|の}んでください」／「{飲|の}んだあと、{運転|うんてん}しないでください」 (V-る{前|まえ}に／V-たあと) indicam (Nota ➍):', choices: [{ n: 1, text: 'a ORDEM das ações; {前|まえ}に liga-se à forma de dicionário, あと à forma タ' }, { n: 2, text: 'o lugar das ações' }, { n: 3, text: 'o motivo das ações' }, { n: 4, text: 'a frequência das ações' }], answer: 1, translationPt: 'Tome antes de dormir. / Depois de tomar, não dirija.', explanationPt: 'V-る{前|まえ}に、〜 (antes de) e V-たあと、〜 (depois de) indicam ordem. {前|まえ}に → forma de dicionário ({寝|ね}る{前|まえ}に); あと → forma タ ({飲|の}んだあと). Na Lição 8 vimos Nの{前|まえ}に／あと. (Nota ➍)' },
    { id: 'iro-e1-l15-8', number: 8, prompt: '「{痛|いた}くてがまんできないときに、{飲|の}んでください」 (〜とき（に）) e sua formação (Nota ➎):', choices: [{ n: 1, text: 'indica o momento/situação; N のとき ／ ナA なとき ／ イA いとき ／ V る・た・ないとき' }, { n: 2, text: 'indica lugar; sempre com で' }, { n: 3, text: 'indica motivo; sempre com から' }, { n: 4, text: 'só se liga a substantivos' }], answer: 1, translationPt: 'Tome quando a dor ficar insuportável.', explanationPt: '〜とき indica o momento/situação. {風邪|かぜ}のとき, {大変|たいへん}なとき, {痛|いた}いとき, {熱|ねつ}があるとき, くじいたとき, がまんできないとき. Para tópico: 〜ときは、〜. Lição 10 (N/adj), Lição 13 (V-たいとき), aqui amplia para verbos. (Nota ➎)' },
    { id: 'iro-e1-l15-9', number: 9, prompt: 'Vocabulário de sintomas (Atividade 1): 「のどが{痛|いた}い／お{腹|なか}が{痛|いた}い／{熱|ねつ}がある／せきが{出|で}る／{鼻水|はなみず}が{出|で}る／{吐|は}き{気|け}がする／{食欲|しょくよく}がない／{目|め}がかゆい／{足|あし}をくじいた／{頭|あたま}をぶつけた」 significam:', choices: [{ n: 1, text: 'dor de garganta ／ dor de barriga ／ ter febre ／ ter tosse ／ ter coriza (nariz escorrendo) ／ ter enjoo/náusea ／ sem apetite ／ olho coçando ／ torceu o pé ／ bateu a cabeça' }, { n: 2, text: 'tontura ／ dor nas costas ／ ter frio ／ espirro ／ sangramento ／ fome ／ cansaço ／ olho seco ／ quebrou o braço ／ caiu' }, { n: 3, text: 'enxaqueca ／ azia ／ calafrio ／ chiado ／ catarro ／ sede ／ insônia ／ olho vermelho ／ machucou a mão ／ desmaiou' }, { n: 4, text: 'febre ／ cólica ／ suor ／ rouquidão ／ alergia ／ apetite ／ sono ／ visão turva ／ corte ／ queimadura' }], answer: 1, explanationPt: 'のどが{痛|いた}い, お{腹|なか}が{痛|いた}い, {熱|ねつ}がある, せきが{出|で}る, {鼻水|はなみず}が{出|で}る, {吐|は}き{気|け}がする, {食欲|しょくよく}がない, {目|め}がかゆい, {足|あし}をくじいた ({くじ}く), {頭|あたま}をぶつけた ({ぶつ}ける). (Atividade 1 · 【症状】)' },
    { id: 'iro-e1-l15-10', number: 10, prompt: 'Vocabulário (Atividade 1): 「おととい／{転|ころ}ぶ／レントゲンを{撮|と}る／1{週間|しゅうかん}／{花粉症|かふんしょう}」 significam:', choices: [{ n: 1, text: 'anteontem ／ cair/tombar ／ tirar um raio-X ／ uma semana ／ alergia a pólen (rinite alérgica)' }, { n: 2, text: 'ontem ／ correr ／ tirar foto ／ um mês ／ gripe' }, { n: 3, text: 'amanhã ／ escorregar ／ medir ／ um dia ／ resfriado' }, { n: 4, text: 'hoje ／ levantar ／ examinar ／ um ano ／ asma' }], answer: 1, explanationPt: 'おととい (anteontem), {転|ころ}ぶ (cair), レントゲンを{撮|と}る (tirar raio-X), 1{週間|しゅうかん} (uma semana), {花粉症|かふんしょう} (alergia a pólen). (Atividade 1 · ことば)' },
    { id: 'iro-e1-l15-11', number: 11, prompt: 'Atividade 2 (会話1, recepção) — em que ordem se falou (a-c)?', context: '{郭|カク}：この{病院|びょういん}、はじめてなんですが…。 {受付|うけつけ}：{保険証|ほけんしょう}はお{持|も}ちですか？ … {受付|うけつけ}：{今日|きょう}はどうされましたか？ {郭|カク}：{熱|ねつ}があるんです。 {受付|うけつけ}：では、こちらの{問診票|もんしんひょう}を{記入|きにゅう}してお{待|ま}ちください。', choices: [{ n: 1, text: 'a. {保険証|ほけんしょう} (carteirinha do seguro) → c. {症状|しょうじょう} (sintoma: {熱|ねつ}がある) → b. {問診票|もんしんひょう} (preencher a ficha)' }, { n: 2, text: 'b. {問診票|もんしんひょう} → a. {保険証|ほけんしょう} → c. {症状|しょうじょう}' }, { n: 3, text: 'c. {症状|しょうじょう} → b. {問診票|もんしんひょう} → a. {保険証|ほけんしょう}' }, { n: 4, text: 'a. {保険証|ほけんしょう} → b. {問診票|もんしんひょう} → c. {症状|しょうじょう}' }], answer: 1, explanationPt: 'Ordem na recepção: pedem o {保険証|ほけんしょう} → perguntam o {症状|しょうじょう} (どうされましたか→{熱|ねつ}があるんです) → mandam preencher o {問診票|もんしんひょう}. (Atividade 2 · 会話1 · 聴解スクリプト 15-10)' },
    { id: 'iro-e1-l15-12', number: 12, prompt: 'Atividade 2 (会話2, 15-11) — o que o médico mandou FAZER (○) e NÃO fazer (×)?', context: '{医者|いしゃ}：{薬|くすり}を{飲|の}んで、よく{寝|ね}てください。{今週|こんしゅう}は{仕事|しごと}を{休|やす}んで、できるだけ{人|ひと}に{会|あ}わないでください。{食|た}べ{物|もの}は…やわらかいものにしてください。{辛|から}いものは、あまり{食|た}べないでください。', choices: [{ n: 1, text: '○: {薬|くすり}を{飲|の}む, {寝|ね}る, やわらかいものを{食|た}べる ／ ×: {仕事|しごと}に{行|い}く, {人|ひと}に{会|あ}う, {辛|から}いものを{食|た}べる' }, { n: 2, text: '○: {仕事|しごと}に{行|い}く, {辛|から}いものを{食|た}べる ／ ×: {寝|ね}る, {薬|くすり}を{飲|の}む' }, { n: 3, text: 'tudo ○' }, { n: 4, text: 'tudo ×' }], answer: 1, explanationPt: 'FAZER (○): {薬|くすり}を{飲|の}む, よく{寝|ね}る, やわらかいものを{食|た}べる. NÃO (×): {仕事|しごと}に{行|い}く, {人|ひと}に{会|あ}う ({会|あ}わないでください ➋), {辛|から}いものを{食|た}べる. (Atividade 2 · 会話2 · 15-11)' },
    { id: 'iro-e1-l15-13', number: 13, prompt: 'Atividade 2 (会話3, 15-12) — o que {郭|カク} RECEBE na recepção ao final?', context: '{受付|うけつけ}：こちらは{診察券|しんさつけん}です。…こちらが{処方|しょほう}せんです。{薬局|やっきょく}に{行|い}って、{薬|くすり}をもらってください。', choices: [{ n: 1, text: 'o {診察券|しんさつけん} (cartão de consulta) e o {処方|しょほう}せん (receita) — o remédio se pega na {薬局|やっきょく} (farmácia)' }, { n: 2, text: 'o remédio e o {問診票|もんしんひょう}' }, { n: 3, text: 'só o {保険証|ほけんしょう}' }, { n: 4, text: 'nada' }], answer: 1, explanationPt: 'Na recepção recebe o {診察券|しんさつけん} (próxima vez é só entregá-lo) e o {処方|しょほう}せん (leva à {薬局|やっきょく} para pegar o {薬|くすり}). {会計|かいけい} 3.200円; お{大事|だいじ}に. (Atividade 2 · 会話3 · 15-12)' },
    { id: 'iro-e1-l15-14', number: 14, prompt: 'Vocabulário (Atividade 2): 「{記入|きにゅう}する／{医者|いしゃ}／38{度|ど}5{分|ぶ}／{口|くち}／インフルエンザ／{検査|けんさ}する／A{型|がた}／{熱|ねつ}が{下|さ}がる／おかゆ／{薬局|やっきょく}／もらう／お{大事|だいじ}に」 significam:', choices: [{ n: 1, text: 'preencher ／ médico ／ 38,5 graus ／ boca ／ gripe (influenza) ／ examinar ／ tipo A ／ a febre baixar ／ canja/mingau de arroz ／ farmácia ／ receber ／ “melhoras!”' }, { n: 2, text: 'assinar ／ enfermeiro ／ 38 graus ／ nariz ／ resfriado ／ medir ／ tipo B ／ a febre subir ／ sopa ／ hospital ／ dar ／ “obrigado”' }, { n: 3, text: 'rasurar ／ paciente ／ 35 graus ／ garganta ／ alergia ／ operar ／ grupo A ／ suar ／ arroz ／ clínica ／ comprar ／ “com licença”' }, { n: 4, text: 'copiar ／ dentista ／ 40 graus ／ olho ／ febre ／ vacinar ／ classe A ／ tossir ／ chá ／ posto ／ pegar ／ “tchau”' }], answer: 1, explanationPt: '{記入|きにゅう}する (preencher), {医者|いしゃ} (médico), 38{度|ど}5{分|ぶ} (38,5°C), {口|くち} (boca), インフルエンザ (gripe/influenza), {検査|けんさ}する (examinar), A{型|がた} (tipo A), {熱|ねつ}が{下|さ}がる (febre baixar), おかゆ (canja), {薬局|やっきょく} (farmácia), もらう (receber), お{大事|だいじ}に (melhoras). (Atividade 2 · ことば)' },
    { id: 'iro-e1-l15-15', number: 15, prompt: 'No diálogo, as formas 「お{持|も}ちですか？」 e 「どうされましたか？」 são:', choices: [{ n: 1, text: 'versões mais educadas (敬語) de 「{持|も}っていますか？」 e 「どうしましたか？」' }, { n: 2, text: 'versões mais informais que o normal' }, { n: 3, text: 'erros de gramática' }, { n: 4, text: 'formas do passado' }], answer: 1, explanationPt: 'お{持|も}ちですか？ = forma educada de {持|も}っていますか？; どうされましたか？ = forma educada de どうしましたか？. Comuns na recepção do hospital. (Atividade 2 · notas do diálogo)' },
    { id: 'iro-e1-l15-16', number: 16, prompt: 'Atividade 3 — no {問診票|もんしんひょう} (ficha), o que se preenche em cada item (pelo 記入例)?', context: 'Itens: {氏名|しめい}（フリガナ）, {性別|せいべつ}, {生年月日|せいねんがっぴ}, {住所|じゅうしょ}, ①{今日|きょう}はどうしましたか, ②いつから, ③{大|おお}きな{病気|びょうき}, ④アレルギー, ⑤{薬|くすり}, ⑥お{酒|さけ}, ⑦たばこ, ⑧{妊娠|にんしん}.', choices: [{ n: 1, text: 'dados pessoais (nome com leitura, sexo, data de nascimento, endereço) e respostas de saúde: sintoma, desde quando, doenças graves, alergia, remédios em uso, álcool, tabaco, gravidez (só mulheres)' }, { n: 2, text: 'apenas o nome e o telefone' }, { n: 3, text: 'os dados do médico e da farmácia' }, { n: 4, text: 'o preço da consulta e a forma de pagamento' }], answer: 1, explanationPt: 'O {問診票|もんしんひょう} pede dados pessoais ({氏名|しめい}＋フリガナ, {性別|せいべつ}, {生年月日|せいねんがっぴ}, {住所|じゅうしょ}) e respostas: ①sintoma, ②desde quando, ③doenças graves, ④alergia, ⑤remédios, ⑥álcool, ⑦tabaco, ⑧gravidez. (Atividade 3 · 記入例)' },
    { id: 'iro-e1-l15-17', number: 17, prompt: 'Vocabulário (Atividade 3): 「ふりがな／{性別|せいべつ}／{病気|びょうき}にかかる／{現在|げんざい}／{女性|じょせい}／{妊娠|にんしん}する」 significam:', choices: [{ n: 1, text: 'leitura em hiragana ／ sexo/gênero ／ adoecer/ficar doente ／ atualmente ／ mulher (sexo feminino) ／ engravidar' }, { n: 2, text: 'apelido ／ idade ／ curar-se ／ antigamente ／ homem ／ casar' }, { n: 3, text: 'assinatura ／ tipo sanguíneo ／ vacinar ／ no futuro ／ criança ／ nascer' }, { n: 4, text: 'sobrenome ／ peso ／ internar ／ ontem ／ idoso ／ amamentar' }], answer: 1, explanationPt: 'ふりがな (leitura em hiragana), {性別|せいべつ} (sexo), {病気|びょうき}にかかる (adoecer), {現在|げんざい} (atualmente), {女性|じょせい} (mulher), {妊娠|にんしん}する (engravidar). (Atividade 3 · 大切なことば)' },
    { id: 'iro-e1-l15-18', number: 18, prompt: 'Atividade 4 — os 4 remédios (a-d) servem para:', choices: [{ n: 1, text: '{熱|ねつ}を{下|さ}げる (baixar a febre) ／ せきを{抑|おさ}える (conter a tosse) ／ {痛|いた}み{止|ど}め (analgésico/contra a dor) ／ くしゃみ・{鼻水|はなみず}を{抑|おさ}える (conter espirro e coriza)' }, { n: 2, text: 'subir a febre ／ provocar tosse ／ causar dor ／ dar espirro' }, { n: 3, text: 'dormir ／ comer ／ digerir ／ relaxar' }, { n: 4, text: 'vitamina ／ antibiótico ／ vacina ／ soro' }], answer: 1, explanationPt: 'a. {熱|ねつ}を{下|さ}げる, b. せきを{抑|おさ}える, c. {痛|いた}み{止|ど}め, d. くしゃみ・{鼻水|はなみず}を{抑|おさ}える. (Atividade 4)' },
    { id: 'iro-e1-l15-19', number: 19, prompt: 'Atividade 4 — sobre QUANDO tomar e os cuidados (注意点 ア-エ):', choices: [{ n: 1, text: 'ア. {間|あいだ}を6{時間|じかん}ぐらいあける ／ イ. 38{度|ど}5{分|ぶ}{以上|いじょう}のとき ／ ウ. {胃|い}を{守|まも}る{薬|くすり}といっしょに{飲|の}む ／ エ. {運転|うんてん}しない' }, { n: 2, text: 'tomar a cada hora ／ só de manhã ／ com suco ／ pode dirigir' }, { n: 3, text: 'tomar em jejum ／ à noite ／ com leite ／ correr' }, { n: 4, text: 'não tomar ／ só à tarde ／ sem água ／ nadar' }], answer: 1, explanationPt: 'Cuidados: ア. dar ~6h de intervalo entre doses, イ. (解熱剤) quando ≥38,5°C, ウ. tomar com o {薬|くすり} que protege o {胃|い}, エ. não dirigir (causa sono). Horários: 1{日|にち}〜{回|かい}, {食後|しょくご}／{寝|ね}る{前|まえ}, つらいとき, がまんできないとき. (Atividade 4)' },
    { id: 'iro-e1-l15-20', number: 20, prompt: 'Vocabulário (Atividade 4): 「{食後|しょくご}／{眠|ねむ}い／{解熱剤|げねつざい}／こっち」 significam:', choices: [{ n: 1, text: 'depois da refeição ／ com sono/sonolento ／ antitérmico (remédio para baixar febre) ／ este aqui (informal de こちら)' }, { n: 2, text: 'antes da refeição ／ com fome ／ analgésico ／ aquele' }, { n: 3, text: 'em jejum ／ cansado ／ vitamina ／ lá' }, { n: 4, text: 'durante a refeição ／ acordado ／ antibiótico ／ aqui dentro' }], answer: 1, explanationPt: '{食後|しょくご} (após a refeição), {眠|ねむ}い (sonolento), {解熱剤|げねつざい} (antitérmico — {熱|ねつ}を{下|さ}げる{薬|くすり}), こっち (este aqui, informal de こちら). (Atividade 4 · ことば)' },
    { id: 'iro-e1-l15-21', number: 21, prompt: 'Atividade 5 (bula, {薬|くすり}の{説明|せつめい}) — 「{用法|ようほう}」 e 「{用量|ようりょう}」 significam:', choices: [{ n: 1, text: 'modo de usar (como/quando tomar) ／ dose (quanto tomar)' }, { n: 2, text: 'preço ／ validade' }, { n: 3, text: 'fabricante ／ composição' }, { n: 4, text: 'efeito ／ contraindicação' }], answer: 1, translationPt: 'Como usar / Quanto usar.', explanationPt: '{用法|ようほう} = modo de uso (como e quando tomar); {用量|ようりょう} = dose (quantidade). Na bula procura-se: A. que remédio é, B. quando e quantos tomar, C. cuidados. (Atividade 5 · 大切なことば)' },
    { id: 'iro-e1-l15-22', number: 22, prompt: 'Os kanji 「{熱|ねつ}／{薬|くすり}／{病気|びょうき}／{病院|びょういん}／{医者|いしゃ}／{住所|じゅうしょ}」 lêem-se:', choices: [{ n: 1, text: 'ねつ (febre) ／ くすり (remédio) ／ びょうき (doença) ／ びょういん (hospital) ／ いしゃ (médico) ／ じゅうしょ (endereço)' }, { n: 2, text: 'ねつ ／ やく ／ びょうき ／ びょういん ／ いしゃ ／ じゅうしょ' }, { n: 3, text: 'ねっ ／ くすり ／ やまいき ／ びょういん ／ いもの ／ すみしょ' }, { n: 4, text: 'ねつ ／ くすり ／ びょうき ／ びょうけ ／ いしゃ ／ じゅうじょ' }], answer: 1, explanationPt: '{熱|ねつ}, {薬|くすり}, {病気|びょうき}, {病院|びょういん}, {医者|いしゃ}, {住所|じゅうしょ}. (漢字のことば)' },
    { id: 'iro-e1-l15-23', number: 23, prompt: 'Os kanji 「〜{才|さい}／{痛|いた}い／{眠|ねむ}い／{寝|ね}る／{記入|きにゅう}する」 lêem-se:', choices: [{ n: 1, text: 'さい (anos de idade) ／ いたい (doer/dolorido) ／ ねむい (com sono) ／ ねる (dormir/deitar) ／ きにゅうする (preencher)' }, { n: 2, text: 'さい ／ つうい ／ みんい ／ しんる ／ きにゅうする' }, { n: 3, text: 'ねん ／ いたい ／ ねむい ／ ねる ／ きにゅうする' }, { n: 4, text: 'さい ／ いたい ／ ねむい ／ じゃる ／ きじゅうする' }], answer: 1, explanationPt: '〜{才|さい} (anos de idade), {痛|いた}い (doer), {眠|ねむ}い (com sono), {寝|ね}る (dormir), {記入|きにゅう}する (preencher). Kanji da lição: {熱|ねつ}・{薬|くすり}・{病気|びょうき}・{病院|びょういん}・{医者|いしゃ}・{住所|じゅうしょ}・〜{才|さい}・{痛|いた}い・{眠|ねむ}い・{寝|ね}る・{記入|きにゅう}する. (漢字)' },
    { id: 'iro-e1-l15-24', number: 24, prompt: 'Diálogo 15-03: qual o sintoma e desde quando?', context: 'A：{今日|きょう}はどうしましたか？ B：お{腹|なか}が{痛|いた}くて、{吐|は}き{気|け}がするんです。 A：いつからですか？ B：おとといからです。', choices: [{ n: 1, text: 'Dor de barriga e enjoo (お{腹|なか}が{痛|いた}くて、{吐|は}き{気|け}がする), desde anteontem (おととい)' }, { n: 2, text: 'Febre e tosse, desde hoje' }, { n: 3, text: 'Dor de garganta, há uma semana' }, { n: 4, text: 'Torceu o pé ontem' }], answer: 1, explanationPt: 'お{腹|なか}が{痛|いた}くて、{吐|は}き{気|け}がするんです (sintomas ligados por テ-form + んです, ➊); おとといからです. (Atividade 1 · 聴解スクリプト 15-03)' },
    { id: 'iro-e1-l15-25', number: 25, prompt: 'Diálogo 15-04: quais os sintomas de B?', context: 'B：{昨日|きのう}から38{度|ど}の{熱|ねつ}があって、のどがすごく{痛|いた}いんです。 A：ご{飯|はん}は{食|た}べてますか？ B：いえ、{食欲|しょくよく}がなくて……。', choices: [{ n: 1, text: 'Febre de 38° desde ontem, garganta muito dolorida e sem apetite ({食欲|しょくよく}がない)' }, { n: 2, text: 'Só um pouco de coriza' }, { n: 3, text: 'Dor de barriga e enjoo' }, { n: 4, text: 'Olho coçando e espirro' }], answer: 1, explanationPt: '{熱|ねつ}があって、のどが{痛|いた}いんです (➊); {食欲|しょくよく}がなくて (sem apetite, motivo com 〜くて). (Atividade 1 · 15-04)' },
    { id: 'iro-e1-l15-26', number: 26, prompt: 'Diálogo 15-05: o que aconteceu com B?', context: 'B：{昨日|きのう}、{道|みち}で{転|ころ}んで、{足|あし}をくじいたんです。 A：…ここをこうすると、{痛|いた}いですか？ B：{痛|いた}い！ A：ああ、じゃあ、レントゲン{撮|と}ってみましょうか。', choices: [{ n: 1, text: 'Caiu na rua ontem e torceu o pé ({足|あし}をくじいた); o médico sugere tirar um raio-X (レントゲン)' }, { n: 2, text: 'Está com febre alta' }, { n: 3, text: 'Tem alergia a pólen' }, { n: 4, text: 'Bateu a cabeça' }], answer: 1, explanationPt: '{転|ころ}んで、{足|あし}をくじいたんです (forma タ + んです, ➊); レントゲン{撮|と}ってみましょうか (V-てみましょうか, sugestão). (Atividade 1 · 15-05)' },
    { id: 'iro-e1-l15-27', number: 27, prompt: 'Diálogo 15-11 (診察室): qual o diagnóstico e a principal orientação?', context: '{医者|いしゃ}：インフルエンザですね。A{型|がた}です。{薬|くすり}を{飲|の}んで、よく{寝|ね}てください。…{今週|こんしゅう}は{仕事|しごと}を{休|やす}んで、できるだけ{人|ひと}に{会|あ}わないでください。', choices: [{ n: 1, text: 'É gripe (influenza) tipo A; tomar o remédio, descansar, faltar ao trabalho esta semana e evitar contato com pessoas ({人|ひと}に{会|あ}わないでください)' }, { n: 2, text: 'É só um resfriado leve; pode trabalhar normalmente' }, { n: 3, text: 'É alergia; tomar anti-histamínico' }, { n: 4, text: 'Torceu o pé; tirar raio-X' }], answer: 1, explanationPt: 'インフルエンザ A{型|がた}; {薬|くすり}を{飲|の}んでよく{寝|ね}て; {仕事|しごと}を{休|やす}んで{人|ひと}に{会|あ}わないでください (➋); {食|た}べ{物|もの}はやわらかいもの; {辛|から}いものは{食|た}べないで. (Atividade 2 · 15-11)' },
    { id: 'iro-e1-l15-28', number: 28, prompt: 'Diálogo 15-14: para que serve o remédio e quando tomá-lo?', context: 'A：こちらは、せきを{抑|おさ}える{薬|くすり}です。1{日|にち}3{回|かい}、{食後|しょくご}に{飲|の}んでください。…{飲|の}むと、{眠|ねむ}くなります。{飲|の}んだあと、{運転|うんてん}しないでくださいね。', choices: [{ n: 1, text: 'É um remédio que controla a tosse (せきを{抑|おさ}える{薬|くすり}); tomar 3x ao dia depois das refeições; dá sono, então não dirigir depois de tomar' }, { n: 2, text: 'É antitérmico; tomar só quando a febre passar de 38,5°' }, { n: 3, text: 'É analgésico; tomar quando a dor for insuportável' }, { n: 4, text: 'É para alergia; tomar antes de dormir' }], answer: 1, explanationPt: 'せきを{抑|おさ}える{薬|くすり} (V普通形+N, ➌); 1{日|にち}3{回|かい}、{食後|しょくご}に; {飲|の}んだあと、{運転|うんてん}しないでください (V-たあと ➍ + V-ないでください ➋). (Atividade 4 · 15-14)' },
    { id: 'iro-e1-l15-29', number: 29, prompt: 'Diálogo 15-16: o que é o {解熱剤|げねつざい} e quando tomá-lo?', context: 'A：こちらは{解熱剤|げねつざい}です。{熱|ねつ}を{下|さ}げるお{薬|くすり}です。{熱|ねつ}が{高|たか}くてつらいとき、{飲|の}んでください。38{度|ど}5{分|ぶ}{以上|いじょう}ですね。…6{時間|じかん}ぐらい{間|あいだ}をあけてください。', choices: [{ n: 1, text: 'É um antitérmico (baixa a febre); tomar quando a febre estiver alta e incômoda (≥38,5°), com ~6h de intervalo entre as doses' }, { n: 2, text: 'É para tosse; tomar 3x ao dia' }, { n: 3, text: 'É analgésico; tomar com o remédio do estômago' }, { n: 4, text: 'É para alergia; tomar antes de dormir' }], answer: 1, explanationPt: '{解熱剤|げねつざい} = {熱|ねつ}を{下|さ}げる{薬|くすり} (➌); {熱|ねつ}が{高|たか}くてつらいとき (〜とき ➎), 38{度|ど}5{分|ぶ}{以上|いじょう}; 6{時間|じかん}ぐらい{間|あいだ}をあける. (Atividade 4 · 15-16)' },
    { id: 'iro-e1-l15-30', number: 30, prompt: 'Diálogo 15-17: quando tomar o {痛|いた}み{止|ど}め e com o quê?', context: 'A：これは{痛|いた}み{止|ど}めです。{痛|いた}くてがまんできないときに、{飲|の}んでください。…{飲|の}むときは、こっちの{胃|い}を{守|まも}る{薬|くすり}といっしょに{飲|の}んでください。', choices: [{ n: 1, text: 'É um analgésico; tomar quando a dor ficar insuportável (がまんできないとき), junto com o remédio que protege o estômago ({胃|い}を{守|まも}る{薬|くすり})' }, { n: 2, text: 'É antitérmico; tomar sozinho' }, { n: 3, text: 'É para tosse; tomar antes das refeições' }, { n: 4, text: 'É para alergia; tomar 3x ao dia' }], answer: 1, explanationPt: '{痛|いた}み{止|ど}め; {痛|いた}くてがまんできないときに (〜とき ➎); こっちの{胃|い}を{守|まも}る{薬|くすり}といっしょに (➌). (Atividade 4 · 15-17)' },
    { id: 'iro-e1-l15-31', number: 31, prompt: 'Atividade 2 (会話3) — o valor da consulta e o que fazer na próxima vez:', context: '{受付|うけつけ}：お{会計|かいけい}は3,200{円|えん}になります。こちらは{診察券|しんさつけん}です。{次|つぎ}からは、これを{受付|うけつけ}に{出|だ}してください。', choices: [{ n: 1, text: 'A consulta custa 3.200 ienes; o {診察券|しんさつけん} deve ser apresentado na recepção nas próximas vezes' }, { n: 2, text: 'A consulta é grátis; não precisa de cartão' }, { n: 3, text: 'Custa 32.000 ienes e paga-se na farmácia' }, { n: 4, text: 'Deve-se trazer o {問診票|もんしんひょう} toda vez' }], answer: 1, explanationPt: '{会計|かいけい} 3.200{円|えん}; {診察券|しんさつけん} (cartão de consulta) → {次|つぎ}からは{受付|うけつけ}に{出|だ}す. Termina com お{大事|だいじ}に. (Atividade 2 · 会話3 · 15-12)' },
    { id: 'iro-e1-l15-32', number: 32, prompt: 'Pergunta de abertura da lição: 「{最近|さいきん}、{病院|びょういん}に{行|い}きましたか？どんな{症状|しょうじょう}でしたか？」 quer dizer:', choices: [{ n: 1, text: 'Você foi ao médico recentemente? Quais eram os sintomas?' }, { n: 2, text: 'Onde fica o hospital mais próximo?' }, { n: 3, text: 'Quanto custa uma consulta?' }, { n: 4, text: 'Você tem plano de saúde?' }], answer: 1, translationPt: 'Foi ao hospital recentemente? Que sintomas você tinha?', explanationPt: '{最近|さいきん} (recentemente), どんな{症状|しょうじょう} (que sintomas). Tema: {健康|けんこう}な{生活|せいかつ} (vida saudável). (Abertura)' },
  ],
}

// Transcrições oficiais (聴解スクリプト) da Lição 15
const L15_SCRIPTS: Record<string, ScriptItem[]> = {
  '15-03': [
    {
      label: '① (15-03) — お腹が痛くて、吐き気がするんです',
      setupJa: '{病院|びょういん}で、4{人|よにん}の{人|ひと}が{医者|いしゃ}と{話|はな}しています。',
      setupPt: 'No hospital, quatro pessoas conversam com o médico.',
      lines: [
        { speaker: 'A', ja: '{今日|きょう}はどうしましたか？', pt: 'O que houve hoje?' },
        { speaker: 'B', ja: 'お{腹|なか}が{痛|いた}くて、{吐|は}き{気|け}がするんです。', pt: 'Estou com dor de barriga e enjoo.' },
        { speaker: 'A', ja: 'いつからですか？', pt: 'Desde quando?' },
        { speaker: 'B', ja: 'おとといからです。', pt: 'Desde anteontem.' },
      ],
    },
  ],
  '15-04': [
    {
      label: '② (15-04) — のどがすごく痛いんです',
      lines: [
        { speaker: 'A', ja: '{今日|きょう}はどうしましたか？', pt: 'O que houve hoje?' },
        { speaker: 'B', ja: '{昨日|きのう}から38{度|ど}の{熱|ねつ}があって、のどがすごく{痛|いた}いんです。', pt: 'Estou com 38 graus de febre desde ontem e a garganta dói muito.' },
        { speaker: 'A', ja: 'そうですか。ご{飯|はん}は{食|た}べてますか？', pt: 'Entendi. Você está comendo?' },
        { speaker: 'B', ja: 'いえ、{食欲|しょくよく}がなくて……。', pt: 'Não, estou sem apetite…' },
      ],
    },
  ],
  '15-05': [
    {
      label: '③ (15-05) — 足をくじいたんです',
      lines: [
        { speaker: 'A', ja: '{今日|きょう}はどうしましたか？', pt: 'O que houve hoje?' },
        { speaker: 'B', ja: '{昨日|きのう}、{道|みち}で{転|ころ}んで、{足|あし}をくじいたんです。', pt: 'Ontem caí na rua e torci o pé.' },
        { speaker: 'A', ja: 'ちょっと{触|さわ}りますよ。ここをこうすると、{痛|いた}いですか？', pt: 'Vou tocar um pouco. Quando faço assim aqui, dói?' },
        { speaker: 'B', ja: '{痛|いた}い！', pt: 'Dói!' },
        { speaker: 'A', ja: 'ああ、じゃあ、レントゲン{撮|と}ってみましょうか。', pt: 'Ah, então, vamos tirar um raio-X.' },
      ],
    },
  ],
  '15-06': [
    {
      label: '④ (15-06) — 目がかゆくて、鼻水も出るんです',
      lines: [
        { speaker: 'A', ja: 'どうされましたか？', pt: 'O que houve?' },
        { speaker: 'B', ja: '1{週間|しゅうかん}ぐらい{前|まえ}から、{目|め}がかゆくて、{鼻水|はなみず}も{出|で}るんです。', pt: 'Há mais ou menos uma semana, meus olhos coçam e também escorre o nariz.' },
        { speaker: 'A', ja: '{花粉症|かふんしょう}がありますか？', pt: 'Você tem alergia a pólen?' },
        { speaker: 'B', ja: 'わかりません。', pt: 'Não sei.' },
      ],
    },
  ],
  '15-10': [
    {
      label: '会話1 (15-10) — 受付で',
      setupJa: '{郭|カク}さんは{具合|ぐあい}が{悪|わる}いので、{近所|きんじょ}の{病院|びょういん}に{来|き}ました。',
      setupPt: 'Guo está passando mal e foi ao hospital do bairro. Na recepção.',
      lines: [
        { speaker: '郭', ja: 'すみません。この{病院|びょういん}、はじめてなんですが……。', pt: 'Com licença. É a primeira vez que venho a este hospital…' },
        { speaker: '受付の人', ja: 'はい、{保険証|ほけんしょう}はお{持|も}ちですか？', pt: 'Sim. Você tem a carteirinha do seguro?' },
        { speaker: '郭', ja: 'はい。', pt: 'Tenho.' },
        { speaker: '受付の人', ja: '{今日|きょう}はどうされましたか？', pt: 'O que houve hoje?' },
        { speaker: '郭', ja: '{熱|ねつ}があるんです。', pt: 'Estou com febre.' },
        { speaker: '受付の人', ja: 'わかりました。では、こちらの{問診票|もんしんひょう}を{記入|きにゅう}してお{待|ま}ちください。', pt: 'Entendi. Então, preencha esta ficha e aguarde.' },
      ],
    },
  ],
  '15-11': [
    {
      label: '会話2 (15-11) — 診察室で（インフルエンザ）',
      setupJa: '{診察室|しんさつしつ}で。',
      setupPt: 'Na sala de consulta.',
      lines: [
        { speaker: '医者', ja: '{今日|きょう}はどうしましたか？', pt: 'O que houve hoje?' },
        { speaker: '郭', ja: '{昨日|きのう}の{夜|よる}から、{熱|ねつ}が38{度|ど}5{分|ぶ}あるんです。', pt: 'Desde ontem à noite estou com 38,5 graus de febre.' },
        { speaker: '医者', ja: 'そうですか。ちょっとのどを{見|み}せてください。{口|くち}を{開|あ}けて……のどは{痛|いた}くないですか？', pt: 'Entendi. Deixe-me ver a garganta. Abra a boca… A garganta não está doendo?' },
        { speaker: '郭', ja: 'ちょっと{痛|いた}いです。', pt: 'Está doendo um pouco.' },
        { speaker: '医者', ja: 'そう。インフルエンザの{検査|けんさ}、してみましょう。', pt: 'Certo. Vamos fazer o teste de gripe.' },
        { speaker: '医者', ja: '（しばらくして）インフルエンザですね。A{型|がた}です。', pt: '(Depois de um tempo) É gripe (influenza). Tipo A.' },
        { speaker: '郭', ja: 'ええー！', pt: 'O quê?!' },
        { speaker: '医者', ja: '{薬|くすり}を{出|だ}しますね。それを{飲|の}んで、よく{寝|ね}てください。{熱|ねつ}はすぐ{下|さ}がります。でも、{今週|こんしゅう}は{仕事|しごと}を{休|やす}んで、できるだけ{人|ひと}に{会|あ}わないでください。', pt: 'Vou receitar um remédio. Tome-o e durma bem. A febre baixa logo. Mas, esta semana, falte ao trabalho e evite ao máximo encontrar pessoas.' },
        { speaker: '郭', ja: 'そうですか……。わかりました。', pt: 'Ah… Entendi.' },
        { speaker: '医者', ja: '{食|た}べ{物|もの}は、うどんとか、おかゆとか、やわらかいものにしてください。', pt: 'Quanto à comida, prefira coisas macias, como udon ou canja.' },
        { speaker: '郭', ja: '{辛|から}いものを{食|た}べてもいいですか？', pt: 'Posso comer comida apimentada?' },
        { speaker: '医者', ja: 'あー、{辛|から}いものは、あまり{食|た}べないでください。', pt: 'Ah, comida apimentada é melhor não comer muito.' },
        { speaker: '郭', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '15-12': [
    {
      label: '会話3 (15-12) — 受付で（会計・処方せん）',
      setupJa: '{受付|うけつけ}で。',
      setupPt: 'Na recepção.',
      lines: [
        { speaker: '受付の人', ja: '{郭|カク}さん。', pt: 'Sr. Guo.' },
        { speaker: '郭', ja: 'はい。', pt: 'Sim.' },
        { speaker: '受付の人', ja: 'お{会計|かいけい}は3,200{円|えん}になります。こちらは{診察券|しんさつけん}です。{次|つぎ}からは、これを{受付|うけつけ}に{出|だ}してください。', pt: 'A consulta fica 3.200 ienes. Este é o cartão de consulta. Da próxima vez, apresente-o na recepção.' },
        { speaker: '郭', ja: 'はい。', pt: 'Sim.' },
        { speaker: '受付の人', ja: 'こちらが{処方|しょほう}せんです。{薬局|やっきょく}に{行|い}って、{薬|くすり}をもらってください。', pt: 'Esta é a receita. Vá à farmácia e pegue o remédio.' },
        { speaker: '郭', ja: 'ありがとうございます。', pt: 'Muito obrigado.' },
        { speaker: '受付の人', ja: 'お{大事|だいじ}に。', pt: 'Melhoras.' },
      ],
    },
  ],
  '15-14': [
    {
      label: '① (15-14) — せきを抑える薬',
      setupJa: '4{人|よにん}の{人|ひと}が、{病院|びょういん}に{行|い}ったあと、{薬局|やっきょく}で{薬|くすり}の{説明|せつめい}を{受|う}けています。',
      setupPt: 'Quatro pessoas recebem, na farmácia, a explicação do remédio depois de ir ao hospital.',
      lines: [
        { speaker: 'A', ja: 'こちらは、せきを{抑|おさ}える{薬|くすり}です。1{日|にち}3{回|かい}、{食後|しょくご}に{飲|の}んでください。', pt: 'Este é um remédio para conter a tosse. Tome 3 vezes ao dia, após as refeições.' },
        { speaker: 'B', ja: '{食後|しょくご}？', pt: 'Após as refeições?' },
        { speaker: 'A', ja: 'ご{飯|はん}を{食|た}べたあとです。', pt: 'É depois de comer.' },
        { speaker: 'B', ja: 'はい、わかりました。', pt: 'Sim, entendi.' },
        { speaker: 'A', ja: '{飲|の}むと、{眠|ねむ}くなります。{飲|の}んだあと、{運転|うんてん}しないでくださいね。', pt: 'Ele dá sono. Depois de tomar, não dirija, ok?' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '15-15': [
    {
      label: '② (15-15) — アレルギーの薬',
      lines: [
        { speaker: 'A', ja: 'これは、アレルギーの{薬|くすり}です。くしゃみや{鼻水|はなみず}を{抑|おさ}えます。', pt: 'Este é um remédio para alergia. Contém o espirro e a coriza.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: '1{日|にち}1{回|かい}、{寝|ね}る{前|まえ}に{飲|の}んでください。', pt: 'Tome 1 vez ao dia, antes de dormir.' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
      ],
    },
  ],
  '15-16': [
    {
      label: '③ (15-16) — 解熱剤',
      lines: [
        { speaker: 'A', ja: 'こちらは{解熱剤|げねつざい}です。', pt: 'Este é um antitérmico.' },
        { speaker: 'B', ja: 'え？', pt: 'Hã?' },
        { speaker: 'A', ja: '{熱|ねつ}を{下|さ}げるお{薬|くすり}です。{熱|ねつ}が{高|たか}くてつらいとき、{飲|の}んでください。38{度|ど}5{分|ぶ}{以上|いじょう}ですね。', pt: 'É um remédio para baixar a febre. Tome quando a febre estiver alta e incômoda. Acima de 38,5 graus, ok?' },
        { speaker: 'B', ja: 'わかりました。', pt: 'Entendi.' },
        { speaker: 'A', ja: '{薬|くすり}を{飲|の}むときは、6{時間|じかん}ぐらい{間|あいだ}をあけてください。', pt: 'Ao tomar o remédio, dê um intervalo de cerca de 6 horas.' },
      ],
    },
  ],
  '15-17': [
    {
      label: '④ (15-17) — 痛み止め',
      lines: [
        { speaker: 'A', ja: 'これは{痛|いた}み{止|ど}めです。{痛|いた}くてがまんできないときに、{飲|の}んでください。', pt: 'Este é um analgésico. Tome quando a dor ficar insuportável.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
        { speaker: 'A', ja: 'それと、{飲|の}むときは、こっちの{胃|い}を{守|まも}る{薬|くすり}といっしょに{飲|の}んでください。', pt: 'E, ao tomar, tome junto com este remédio que protege o estômago.' },
        { speaker: 'B', ja: 'はい。', pt: 'Sim.' },
      ],
    },
  ],
}

const lesson15: Section = {
  id: 'lesson-15',
  level: 'elementary1',
  titleJa: '第15課 熱があってのどが痛いんです',
  titlePt: 'Lição 15 — Estou com febre e a garganta dói',
  summaryPt: 'Vida saudável · explicar sintomas ao médico ({熱|ねつ}があって、のどが{痛|いた}いんです), entender as instruções dele ({人|ひと}に{会|あ}わないでください), o uso do remédio ({熱|ねつ}を{下|さ}げる{薬|くすり}／ご{飯|はん}を{食|た}べたあと、{飲|の}んでください／つらいとき{飲|の}んでください) e preencher o {問診票|もんしんひょう}.',
  studyNotes: [
    {
      title: 'Tópico: Vida saudável (健康な生活)',
      bodyPt:
        '## Can-do\n' +
        '- Explicar de forma simples os próprios sintomas no hospital.\n' +
        '- Ouvir e entender as instruções do médico.\n' +
        '- Preencher os campos necessários do {問診票|もんしんひょう} (ficha) na recepção.\n' +
        '- Ouvir a explicação de um remédio e entender uso e cuidados.\n' +
        '- Ler a bula de um remédio e entender uso e dose.\n\n' +
        '💡 Pergunta de abertura: {最近|さいきん}、{病院|びょういん}に{行|い}きましたか？どんな{症状|しょうじょう}でしたか？',
    },
    {
      title: 'Explicar a situação: ～んです② (➊)',
      bodyPt:
        '**～んです** explica a situação ao outro — aqui, os **sintomas** ao médico. Liga-se a todas as classes:\n\n' +
        '- N／ナA → **なんです** ({風邪|かぜ}なんです); イA → **いんです** (のどが{痛|いた}いんです); V → **るんです／たんです／ないんです** ({熱|ねつ}があるんです／{足|あし}をくじいたんです／{止|と}まらないんです).\n' +
        '- Vários sintomas ligam-se pela テ-form: `{熱|ねつ}があって、のどが{痛|いた}いんです`.\n\n' +
        '**どうしましたか？** (pergunta esperada: médico→paciente) vs **どうしたんですか？** (estranhar algo e pedir explicação).',
    },
    {
      title: 'Instrução negativa: V-ないでください (➋)',
      bodyPt:
        '**V-ないでください** = instrução/pedido para **não** fazer algo (liga-se à ナイ-form):\n\n' +
        '- `できるだけ{人|ひと}に{会|あ}わないでください`／`{辛|から}いものは{食|た}べないでください`/`{運転|うんてん}しないでください`.\n\n' +
        'Conforme a relação: V-ないで／V-ないでくれる？／V-ないでもらえませんか？.',
    },
    {
      title: 'Qualificar substantivo: V(普通形)+N (➌)',
      bodyPt:
        'O verbo na **forma simples** (dicionário) vem **antes** do substantivo e o qualifica (≠ português, que usa “que…”):\n\n' +
        '- 「これは{薬|くすり}です」＋「この{薬|くすり}は、せきを{抑|おさ}えます」 → 「これは、せきを{抑|おさ}える{薬|くすり}です」.\n' +
        '- Funções do remédio: `{熱|ねつ}を{下|さ}げる`, `せき／{鼻水|はなみず}を{抑|おさ}える`, `{胃|い}を{守|まも}る`. (Forma simples não-passado afirmativa = forma de dicionário.)',
    },
    {
      title: 'Ordem e momento: V-る前に／V-たあと (➍) ／ ～とき（に） (➎)',
      bodyPt:
        '**V-る{前|まえ}に、〜 ／ V-たあと、〜** = ordem das ações ({前|まえ}に → dicionário; あと → forma タ): `{寝|ね}る{前|まえ}に{飲|の}んでください`／`{飲|の}んだあと、{運転|うんてん}しないでください`. (Lição 8 viu Nの{前|まえ}に／あと.)\n\n' +
        '**～とき（に）、〜** = momento/situação: N のとき ／ ナA なとき ／ イA いとき ／ V る・た・ないとき. `{痛|いた}くてがまんできないとき{飲|の}んでください`. Para tópico: 〜ときは、〜.',
    },
    {
      title: 'Vocabulário, Kanji e formulários',
      bodyPt:
        '**Sintomas (Ativ. 1):** のど／お{腹|なか}が{痛|いた}い, {熱|ねつ}がある, せき／{鼻水|はなみず}が{出|で}る, {吐|は}き{気|け}がする, {食欲|しょくよく}がない, {目|め}がかゆい, {足|あし}をくじく, {頭|あたま}をぶつける; おととい, {転|ころ}ぶ, レントゲンを{撮|と}る, {花粉症|かふんしょう}. **Hospital (Ativ. 2):** {保険証|ほけんしょう}, {問診票|もんしんひょう}, {記入|きにゅう}する, {医者|いしゃ}, {検査|けんさ}する, インフルエンザ, A{型|がた}, {熱|ねつ}が{下|さ}がる, {診察券|しんさつけん}, {処方|しょほう}せん, {薬局|やっきょく}, お{大事|だいじ}に; お{持|も}ちですか／どうされましたか (educado). **Ficha (Ativ. 3):** ふりがな, {性別|せいべつ}, {病気|びょうき}にかかる, {現在|げんざい}, {女性|じょせい}, {妊娠|にんしん}する. **Remédios (Ativ. 4):** {熱|ねつ}を{下|さ}げる, せき／{鼻水|はなみず}を{抑|おさ}える, {痛|いた}み{止|ど}め, {食後|しょくご}, {眠|ねむ}い, {解熱剤|げねつざい}, {胃|い}を{守|まも}る, {間|あいだ}をあける. **Bula (Ativ. 5):** {用法|ようほう}, {用量|ようりょう}.\n\n' +
        '**Kanji da lição:** {熱|ねつ}, {薬|くすり}, {病気|びょうき}, {病院|びょういん}, {医者|いしゃ}, {住所|じゅうしょ}, 〜{才|さい}, {痛|いた}い, {眠|ねむ}い, {寝|ね}る, {記入|きにゅう}する.',
    },
  ],
  groups: [lesson15Group],
  audios: attachScripts(15, L15_SCRIPTS),
}

// ---- Lições 16-18 (estrutura por tópico; exercícios em construção) ----------
const others: Section[] = [
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
  sections: [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7, lesson8, lesson9, lesson10, lesson11, lesson12, lesson13, lesson14, lesson15, ...others],
}
