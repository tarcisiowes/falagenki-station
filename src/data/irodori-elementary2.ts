import type { Level, Section, StudyNote } from './types'
import { ELEMENTARY2_AUDIO } from './irodori-elementary2-audio'

// =====================================================================
//  Irodori — いろどり: Japanese for Life in Japan (Japan Foundation)
//  Parte "Elementary 2" (初級2 / A2): 9 tópicos, 18 lições (課).
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
    level: 'elementary2',
    titleJa: `第${n}課 ${titleJa}`,
    titlePt: `Lição ${n} — ${titlePt}`,
    summaryPt: `${topicPt} · ${titlePt}`,
    studyNotes: canDoNotes(topicPt, candos),
    groups: [],
    audios: ELEMENTARY2_AUDIO[n],
  }
}

// ---- Lições 1-18 (estrutura por tópico; exercícios em construção) ------------
const sections: Section[] = [
  // Tópico 1 — As pessoas ao meu redor (私の周りの人たち)
  scaffold(1, 'As pessoas ao meu redor', '先週、日本に来たばかりです', 'Acabei de chegar ao Japão na semana passada', [
    'Entender o nome e a função dos colegas quando lhe apresentam a equipe num novo trabalho.',
    'Fazer uma autoapresentação um pouco mais detalhada ao se cumprimentar pela primeira vez.',
    'Falar de forma simples sobre sua cidade natal.',
    'Escrever uma autoapresentação simples numa comunidade de rede social.',
  ]),
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
