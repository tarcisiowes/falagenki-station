import type { Level, Section, StudyNote } from './types'

// =====================================================================
//  Irodori - いろどり: Japanese for Life in Japan (Japan Foundation)
//  Sessão geral "Dicas para a Vida no Japão" (Tips for Life in Japan).
//  Conteúdo a partir de docs/Irodori/tips-for-life/TIPS_all.pdf — as dicas
//  culturais/práticas dos 4 níveis do Irodori (入門/初級1/初級2/中級).
//  Texto original em inglês; tradução/adaptação em pt-BR é autoral.
//  Palavras e exemplos em japonês (romaji do material) preservados.
// =====================================================================

const LEVEL: Level['id'] = 'irodori-tips'

// Monta uma seção (módulo) de dicas: uma StudyNote por lição (título = "Lição N"),
// e dentro dela cada dica vira um subtítulo `## ...` seguido do corpo em pt-BR.
function tipsSection(
  id: string,
  titleJa: string,
  titlePt: string,
  summaryPt: string,
  notes: StudyNote[],
): Section {
  return { id, level: LEVEL, titleJa, titlePt, summaryPt, studyNotes: notes, groups: [] }
}

// ---------------------------------------------------------------------
//  入門 (Starter / A1)
// ---------------------------------------------------------------------
const STARTER_NOTES: StudyNote[] = [
  {
    title: 'Lição 1',
    bodyPt: `## Gestos de cumprimento (ojigi)
No Japão, as pessoas se cumprimentam curvando o tronco a partir da cintura. Isso se chama **ojigi** e serve tanto para cumprimentar quanto para agradecer. Quanto mais profunda a reverência, mais respeito demonstra. Ao encontrar um amigo na rua, basta inclinar levemente a cabeça.

Não é comum abraçar ou beijar o rosto ao se encontrar. No mundo dos negócios às vezes se aperta a mão, mas também não é frequente.

Antes das refeições muitos juntam as palmas das mãos à frente do peito — alguns acham que é um gesto de cumprimento, mas não é.

## "Sayoonara"
**Sayoonara** é a despedida japonesa mais conhecida, mas no dia a dia quase não se usa. Aparece sobretudo entre alunos e professores na escola, ou ao se despedir de alguém que você nunca mais verá. Para quem você encontra sempre, o normal é **shitsureeshimasu** (formal) e **jaa, mata** (casual).

## Quando usar "sumimasen"
**Sumimasen** serve para pedir desculpas. Para agradecer, às vezes se diz **arigatoo (gozaimasu)**, às vezes **sumimasen**.

Use **sumimasen** quando o favor do outro lhe causou algum incômodo — por exemplo, alguém devolve algo que você perdeu ou cede o assento no trem. Aí ele agradece e se desculpa ao mesmo tempo.

Se não há incômodo (um elogio, parabéns), não se usa **sumimasen** para agradecer. Distinguir os dois é difícil, mas não é grosseiro usar **arigatoo (gozaimasu)** no lugar — pode agradecer sempre com **arigatoo** sem problema.`,
  },
  {
    title: 'Lição 2',
    bodyPt: `## Cartão de residência (zairyū card)
O cartão de residência (**zairyū card**) é o documento de identidade dos residentes estrangeiros no Japão. Quem vai morar três meses ou mais recebe um. Traz nome, idade, sexo, nacionalidade/região, endereço no Japão, status de permanência e se a pessoa pode ou não trabalhar — além de foto.

Residentes estrangeiros devem portá-lo sempre. Se pedirem para mostrá-lo e você não estiver com ele, pode dar problema.

## Oden
**Oden** é uma panela de ingredientes cozidos em caldo temperado: nabo (**daikon**), batata, ovo cozido, tendão de boi, alga **kombu**, **konnyaku** (geleia da planta konjac) e **nerimono** (bolinhos de peixe). É especialmente popular no frio. Come-se em restaurantes especializados ou em barracas de rua, com bebida. No inverno também há em lojas de conveniência.

## Abreviações
**Sumaho** é abreviação de **sumaatohon** (smartphone). Abreviar é muito comum no japonês: corta-se o fim da palavra ou combinam-se uma ou duas sílabas de cada parte de um composto. Muitas vêm de palavras estrangeiras, mas também de kanji e de nomes de pessoas. Exemplos: loja de conveniência (**konbini**), ar-condicionado, controle remoto, *family restaurant* (**famiresu**), assédio sexual (**sekuhara**), batata chips, trem local que para em todas as estações, licença-maternidade/paternidade, celebridade.

## Mosquitos (ka)
Mosquitos aparecem no verão. Ao sair, sobretudo ao entardecer, podem picar e deixar a pele com muita coceira. No Japão, porém, raramente transmitem doenças como malária ou dengue — não precisa se preocupar.

Para evitar picadas, use repelente nos braços e pernas. Outra opção é o **katori senkoo** (espiral antimosquito). O tradicional tem cheiro forte e deixa cinzas trabalhosas, mas hoje há versões elétricas e sprays, à venda em drogarias.`,
  },
  {
    title: 'Lição 3',
    bodyPt: `## Os caracteres japoneses
De todas as línguas do mundo, o japonês tem o sistema de escrita mais complexo. Usa vários tipos de caractere: **kanji**, **hiragana**, **katakana** e **romaji** (alfabeto latino).

- **Kanji** (caracteres chineses): originários da China. O japonês escreve-se basicamente com kanji + hiragana, e o kanji carrega o sentido da frase. Um mesmo kanji pode ter várias leituras — em 日曜日 (domingo) o caractere 日 lê-se tanto *nichi* quanto *bi*.
- **Hiragana**: criado no Japão no início da era Heian (794–1185), simplificando kanji. Usa-se nas partes gramaticais (partículas, terminações de verbos e adjetivos).
- **Katakana**: criado na mesma época, a partir de partes de kanji. Usa-se para palavras de origem estrangeira (e-mail, presente, hambúrguer), nomes estrangeiros, onomatopeias, nomes de animais/plantas e gírias.
- **Romaji** (alfabeto latino): aparece em siglas (SNS, DVD), nomes próprios (JR, JAL, NHK, Windows, Facebook) e palavras como *OK*. Hoje é comum grafar nomes de estações e lugares em romaji para estrangeiros.

## Como chamar uma pessoa (~san)
Ao dizer o nome de alguém, normalmente acrescenta-se **~san** depois. É muito prático: serve para qualquer pessoa — homem ou mulher, mais velha ou mais nova, casada ou solteira.

Com nomes japoneses, o comum é o sobrenome + **~san**. O primeiro nome fica para família e amigos próximos, raramente no trabalho. Estrangeiros são chamados pelo nome que preferirem + **~san**.

Há ainda **~kun** (homem da mesma idade ou mais novo, informal), **~chan** (crianças e amigos próximos) e **~sama** (mais polido que ~san; usado por funcionários ao chamar clientes).

## Nomes de era japoneses (gengoo)
Além do calendário gregoriano, o Japão usa nomes de era próprios, os **gengoo**, em documentos oficiais. O sistema existe desde 645; o atual, **Reiwa**, começou em 2019 e é o 248º. O gengoo muda a cada novo Imperador e nomeia eras inteiras (ex.: "clássicos da era Showa", "a recessão da era Heisei").

Saber dizer seu ano de nascimento em gengoo costuma surpreender os japoneses. O primeiro ano de uma era chama-se **gannen**. (Referência: Showa 1 = 1926; Heisei 1 = 1989; Reiwa 1 = 2019.)`,
  },
  {
    title: 'Lição 4',
    bodyPt: `## Grandes cidades do Japão
Tóquio é a capital. Seus 23 distritos têm cerca de 9,6 milhões de habitantes (2020) — a maior população e a maior densidade do país. É o centro político e econômico do Japão.

O país tem várias cidades grandes com poder equivalente ao de uma província: as **cidades designadas por decreto** (20 em 2020). Vale memorizar a localização aproximada das principais: Sapporo, Sendai, Saitama, Tóquio, Kawasaki, Yokohama, Nagoya, Kyoto, Osaka, Kobe, Hiroshima e Fukuoka.

## Perguntar a idade de alguém (eto)
Em algumas culturas nunca se pergunta a idade, sobretudo a de uma mulher; em outras é normal. No Japão há os dois pensamentos, mas você pode ser perguntado com certa frequência — porque a idade ajuda a definir posição superior/inferior, importante na sociedade japonesa (muda as expressões usadas).

Se não quiser dizer a idade verdadeira, dá para brincar: **himitsu desu** ("é segredo") ou **eien no 18-sai** ("tenho 18 para sempre"). Ou devolver: **nansai ni miemasu ka?** ("quantos anos aparento?").

Às vezes perguntam seu **eto** (signo do zodíaco chinês) para deduzir a idade. São 12 animais, um por ano em ordem fixa; como o mesmo animal volta a cada 12 anos, dá para estimar o ano de nascimento. Os 12: rato, boi, tigre, coelho, dragão, serpente, cavalo, cabra, macaco, galo, cão e javali/porco.

## Os mares do Japão
O Japão é um país insular cercado pelo mar. No verão, muita gente vai nadar com amigos e família. Fora Okinawa, a temporada de banho de mar vai mais ou menos de julho a agosto. As praias têm chuveiros e armários pagos, e há os **umi no ie** (quiosques à beira-mar) com refeição e descanso.

Okinawa é a província mais ao sul, quente o ano todo: dá para nadar de maio a outubro. Tem mar azul, praias de coral branco e esportes aquáticos. **Umi no sachi** ("dádivas do mar", frutos do mar) é outro prazer das viagens: perto do mar há portos e mercados de peixe fresquíssimo. Visitou uma cidade litorânea? Prove o fruto do mar local.`,
  },
  {
    title: 'Lição 5',
    bodyPt: `## Comida japonesa (sashimi/sushi, tempura, udon/soba, curry)
- **Sashimi**: peixe cru fresco, fatiado fino, comido com shoyu. É servido com enfeites (**sashimi no tsuma**), como nabo ralado, alga e **shiso**, que você pode comer ou não.
- **Sushi**: sashimi + arroz avinagrado. Tipos: **nigiri-zushi** (bolinho moldado à mão com peixe por cima), **maki-zushi** (enrolado em alga), **chirashi-zushi** (arroz coberto com vários ingredientes) e **oshi-zushi** (prensado). No **kaiten-zushi** o sushi chega numa esteira e sai barato; também há em supermercados e konbini.
- **Tempura**: frutos do mar e legumes empanados em massa de trigo e fritos. O nome viria do português *tempero*. Come-se com molho ou sal, ou sobre arroz/macarrão.
- **Udon e soba**: macarrões típicos — udon é grosso (trigo), soba é de trigo-sarraceno. Servidos quentes na sopa ou gelados com molho. No Japão, sorver o macarrão fazendo barulho é normal (realça o sabor). Variações: **kake** (só na sopa), **zaru** (gelado na esteira de bambu), **kitsune** (com tofu frito), **tsukimi** (com ovo cru), **tempura**.
- **Curry**: chegou via Inglaterra na era Meiji (1868–1912) e ganhou estilo próprio (molho encorpado com trigo, sobre arroz). Tão popular que é quase um prato nacional; fácil de fazer com tabletes de roux ou pacotinhos prontos.

## Donburi-mono (tigela com cobertura)
**Donburi-mono** é arroz com cobertura; o nome leva **~don** após o ingrediente principal. Exemplos: **gyuu-don** (carne com cebola), **katsu-don** (tonkatsu com ovo), **oyako-don** ("pai e filho", frango e ovo; com porco/boi vira **tanin-don**), **kaisen-don** (frutos do mar), **una-don/una-juu** (enguia — há quem coma no Dia do Boi, no auge do verão).

## Comidas que estrangeiros costumam não gostar
Cada um tem seu gosto, mas estes costumam dividir opiniões:
- **Nattō**: soja fermentada, de cheiro forte e fios pegajosos. Café da manhã comum; até japoneses não gostam (menos consumido no Kansai). Estrangeiro que gosta surpreende.
- **Umeboshi**: ameixa em conserva de sal, extremamente azeda. Vai em onigiri, marmita e **ochazuke**.
- **Shiokara**: frutos do mar (com vísceras) curados em sal e fermentados. Muito salgado e de aparência forte.

## Sake japonês
**Sake** (nihonshu) é feito de arroz; há cervejarias por todo o país. Teor alcoólico ~14–16%. Tipos: **junmai-shu** (só arroz, kōji e água, sabor encorpado) e **ginjyoo-shu** (arroz muito polido, aroma frutado). Sabor pode ser **amakuchi** (doce) ou **karakuchi** (seco). Bebe-se gelado (**reeshu**) ou quente (**atsukan**). Vende-se até em konbini e prova-se em izakaya.

## Café da manhã japonês
O tradicional inclui arroz, **missoshiru**, peixe grelhado, ovo, alga, nattō e conservas — mas hoje menos gente come assim todo dia (cresce o estilo ocidental ou simples). A sopa de missô bebe-se segurando a tigela, sem colher; mexa com os hashis se o missô assentou. Ovo cru também é comum: os ovos no Japão são tratados para isso, então é seguro se frescos — misturado com shoyu sobre arroz vira **tamago-kake-gohan** (às vezes "TKG" no cardápio).`,
  },
  {
    title: 'Lição 6',
    bodyPt: `## Hambúrgueres japoneses
Além de redes internacionais (McDonald's, Burger King), há redes japonesas como MOS Burger e Freshness Burger. Oferecem itens próprios: **teriyaki burger**, **tsukimi burger** (com ovo frito), **chicken tatsuta**, **rice burger** (pão de arroz) e, em Okinawa, até hambúrguer de melão-amargo.

## Tíquetes de refeição (meal ticket)
Muitos refeitórios e restaurantes usam o sistema de tíquete: você compra no guichê/máquina antes de comer.
- Vá à máquina (na entrada), insira dinheiro e aperte o botão do prato; pegue o tíquete.
- Aperte o botão/alavanca de troco.
- Entregue o tíquete no balcão e pegue a comida, OU sente-se e entregue ao garçom.

Algumas máquinas não aceitam notas de ¥5.000/¥10.000 — peça troco ao funcionário. Muitas já aceitam pagamento eletrônico.

## Izakaya (bar/restaurante japonês)
Originalmente um lugar de bebida, mas também serve refeição casual (carne, peixe, legumes) a preço razoável; hoje famílias frequentam.
- Diga quantas pessoas; levam você ao lugar.
- Chegam **oshibori** (toalha) e tira-gosto; comece pedindo bebida (cada pessoa pede ao menos uma). Quem não bebe álcool pede refrigerante.
- Veja o cardápio e peça a comida; peça mais sempre chamando o garçom.
- Ao fim, peça a conta (**o-kaikee**); pague no caixa.

## Karaage
**Karaage** é frito numa fina camada de trigo/amido — geralmente frango (coxa sem osso), temperado com shoyu, alho e gengibre, às vezes com limão ou maionese. Com outro ingrediente, leva o nome dele (ex.: **tako no karaage**, polvo).

## Otsumami
Petiscos para acompanhar bebida. O clássico é **edamame**. Outros: **hiya-yakko** (tofu gelado), **tsukemono/oshinko** (conservas), **tako-wasabi**, **eihire** (barbatana de raia), milho com manteiga e batata frita.

## Cerveja
A bebida mais popular do Japão. Marcas líderes: Kirin, Asahi, Suntory, Sapporo. No izakaya muitos começam com cerveja (até em brindes). Tipos: **bin-biiru** (garrafa, boa para dividir) e **nama-biiru** (chope, em copos grande/médio/pequeno; o médio ~350–500 ml). Há **ji-biiru** (cervejas locais) por todo o país — divertido provar em viagens.

## Oshibori e água
Ao entrar num restaurante, costumam trazer primeiro o **oshibori** (toalhinha quente — gelada no verão) e água. A água é gratuita (a de torneira é potável em todo o Japão) e às vezes chamada **ohiya**; refis são grátis. No izakaya a água não vem de imediato (espera-se pedido de bebida), mas se pedir, é grátis. Água quente ou com gás não é comum à refeição (gás costuma ser pago).`,
  },
  {
    title: 'Lição 7',
    bodyPt: `## Casas japonesas
Hoje há menos casas no estilo tradicional, mas a maioria ainda é de madeira. A planta aparece como **2LDK** (2 quartos + sala + cozinha/copa).
- **Genkan** (hall de entrada): há um degrau separando dentro/fora; tire os sapatos antes de subir.
- **Washitsu** (quarto japonês): piso de **tatami**, às vezes com **toko no ma** (alcova) e **oshiire** (armário embutido para futon), portas **fusuma** e janelas com **shooji** (painel de papel). Cada vez mais raro.
- **Banheiro (toilet)**: separado do banho. Quase todos ocidentais, muitos com bidê elétrico; usa-se chinelo próprio do banheiro.
- **Banho (ofuro)**: você se lava fora da banheira; depois entra na água quente para relaxar.
- **Futon**: colchão (**shiki-buton**) + edredom (**kake-buton**) estendidos no chão. Guarde-o todo dia e areje regularmente para não mofar.

## Tipos de moradia
- **Manshon**: prédio grande de concreto armado; compra-se ou aluga-se a unidade. Há **tawaa manshon** (torres).
- **Apaato**: menor, 2–3 andares sem elevador, muitas vezes de madeira; aluguel costuma ser mais barato (mas não há diferença legal clara entre manshon e apaato).
- **Casa**: comum em subúrbios; em geral comprada.
- **Shared house**: quarto privativo + áreas comuns (cozinha, banho); popular entre estudantes e estrangeiros.
- **Dormitório (ryō)**: de empresa ou escola, quarto privativo + áreas comuns; aluguel baixo, às vezes com refeições.

## Sistema de endereços japonês
Escreve-se do maior para o menor: CEP, província (**ken/to/dō/fu**), cidade/distrito (**shi/ku/machi/mura**), nome da área e, por fim, três números (**bloco-lote-prédio**) separados por hífen, lidos com **no** (ex.: 5-6-36 = *go-no-roku-no-sanjuuroku*).

- O Japão tem 47 províncias: só Tóquio é **to**, só Hokkaido é **dō**, Osaka e Kyoto são **fu**, e as outras 43 são **ken**.
- O CEP tem 7 dígitos (3 + 4).
- As ruas japonesas em geral não têm nome (salvo grandes avenidas), por isso o endereço usa o nome da área, não da rua. A numeração nem sempre é em ordem, o que dificulta achar o prédio.`,
  },
  {
    title: 'Lição 8',
    bodyPt: `## Uniformes
Uniformes são usados em muitos lugares (trabalho, escola). Em fábricas, a roupa de trabalho protege e ajuda a distinguir funcionário de visitante, além de dar senso de unidade. Mesmo sem uniforme, alguns setores esperam certo padrão (ex.: num banco, terno azul-escuro/cinza, camisa branca, gravata listrada, sapato preto). Quando não há uniforme, o melhor é perguntar como se vestir.

## Chá (ocha)
**Ocha** pode significar chá-verde ou chá em geral. Tipos comuns:
- **Chá-verde (ryokucha)**: feito em bule ou sachê; quente, mas o gelado em garrafa cresce.
- **Kōcha** (chá preto): fermentado, o "chá" do Ocidente.
- **Mugicha** (chá de cevada): tomado gelado, típico no verão.
- **Matcha** (chá-verde em pó): usado na cerimônia do chá e em doces.
- **Ūroncha** (oolong): chinês, semifermentado, amargo.

Chás em garrafa (exceto o preto) não têm açúcar. **Como preparar** chá-verde no bule: aqueça a água no copo, ponha as folhas no bule, despeje a água do copo no bule, espere as folhas abrirem e sirva.

## Fax
O **fax** transmite imagens por linha telefônica. Caiu em desuso no mundo com a internet, mas no Japão ainda é muito usado, sobretudo em documentos oficiais e na mídia — alguns o consideram mais confiável que e-mail (envia carimbos e manuscritos). Há repartições que ainda não aceitam e-mail e exigem fax.`,
  },
  {
    title: 'Lição 9',
    bodyPt: `## Reunião matinal (chōrei)
Em muitas empresas, os funcionários se reúnem de manhã para se cumprimentar e alinhar o trabalho do dia: é o **chōrei**. Serve para passar avisos e marcar o início do expediente. Algumas empresas incluem o **rajio taisoo** (ginástica transmitida pela NHK, que muitos fazem desde criança) para o corpo se preparar.

## Piscinas públicas
A temporada de piscina ao ar livre é por volta de julho e agosto. As piscinas municipais cobram pouco (algumas centenas de ienes). Em algumas cidades só moradores/trabalhadores locais podem usar; outras são abertas a todos. Confira o horário online antes de ir. Atenção às regras de cada uma (ex.: touca obrigatória, proibição de protetor solar).

## Ir ao cinema
Quase todos os cinemas hoje são **shinekon** (multiplex), com várias salas e assentos marcados; muitos ficam em shoppings. Ingresso de adulto ~¥1.800–1.900 (2020); 3D/IMAX custam mais. Há dias com desconto (Dia do Cinema, Ladies' Day).
- Cheque online o filme, horário e versão (legendada, dublada, 3D/2D).
- Compre o ingresso (na bilheteria ou online — online exige cartão) e escolha o assento.
- Antes do filme há ~15 min de anúncios e trailers; no fim, costuma-se ficar sentado até acenderem as luzes.`,
  },
  {
    title: 'Lição 10',
    bodyPt: `## Palavras "inglesas" criadas no Japão (wasei-eigo)
Algumas palavras em katakana parecem inglês mas só se entendem no Japão — são **wasei-eigo**. Exemplos:
- **Hochikisu** (grampeador): do fabricante americano E. H. Hotchkiss.
- **Gamu-teepu** (fita adesiva larga): em inglês é *duct tape*.
- **Nooto-pasokon** (notebook): *nooto* + *pasokon* (de *personal computer*).
- **Majikku** (caneta marcador permanente): da marca "Magic Ink".
- **Konsento** (tomada elétrica): de *concentric plug* (era Taishō, 1912–1926).
- **Mai~** (de "my"): algo próprio — **mai-kaa** (carro próprio), **mai-hoomu** (casa própria), **mai-baggu** (sacola reutilizável). Confunde estrangeiros.

## Carregar o smartphone na rua
Se a bateria acabar fora de casa:
- Na loja da operadora (docomo, au, Softbank): carregam de graça.
- Em grandes lojas de eletrônicos (Bic Camera, Yamada, Yodobashi) ou Don Quijote: máquinas pagas com moeda.
- Em redes como McDonald's e Starbucks: use a tomada do assento com seu próprio carregador. **Cuidado**: em restaurante comum, sem aviso permitindo, usar a tomada é ilegal.
- No konbini: compre uma bateria portátil.

## Relógio de 24 horas
O Japão usa dois sistemas para a tarde/noite: 1h, 2h, 3h… e o de 24 horas (13h, 14h, 15h…). O de 24 horas é cada vez mais comum em transporte, programação de eventos e comunicações de trabalho, e na escrita. Na conversa, porém, costuma-se usar o de 12 horas. Acostume-se com os dois.`,
  },
  {
    title: 'Lição 11',
    bodyPt: `## Mangá japonês
Diz-se que um terço das publicações no Japão são mangás, lidos por crianças e adultos. Há muitos gêneros (ação, fantasia, romance, esporte, mistério, ficção, comédia, história, culinária, adulto) e até mangás didáticos. Hoje muita gente lê por app no celular, no trem. As obras saem primeiro em revistas (como a *Shonen Jump*) e depois em volumes (**tankōbon**). Fazem sucesso no exterior: NARUTO, One Piece, Attack on Titan, Demon Slayer — e o **cosplay**. O mangá citado no texto é *Dragon Ball*, de Toriyama Akira (Weekly Shonen Jump, 1984–1995), com mais de 250 milhões de cópias.

## Videogames japoneses
Parte importante da cultura pop japonesa, com fãs no mundo todo. A Nintendo lançou o **Famicom** em 1983, levando o videogame às famílias (Super Mario Bros., Dragon Quest, Final Fantasy). Vieram Super Famicom, PlayStation, Sega Saturn, Wii… Hoje há vários modos de jogar — em família com **Pokémon GO**, ou online com amigos em *Animal Crossing* no Nintendo Switch.

## Literatura japonesa
Muitas obras foram traduzidas e são lidas no mundo todo. Destaques: **Murakami Haruki** (n. 1949 — *Norwegian Wood*, *Kafka à Beira-Mar*, *1Q84*); **Natsume Sōseki** (1867–1916 — *Eu Sou um Gato*, *Botchan*, *Kokoro*); ganhadores do Nobel **Kawabata Yasunari** e **Ōe Kenzaburō**; **Akutagawa**, **Mishima**, **Abe Kōbō**, **Yoshimoto Banana**. *O Conto de Genji*, de Murasaki Shikibu, tem mais de mil anos. Para quem aprende japonês, costumam ser acessíveis Akagawa Jirō (mistérios) e Hoshi Shinichi (contos curtíssimos), além das **light novels** (*ranobe*).

## Futebol / Rugby
O futebol é muito popular desde que virou profissional em 1993, com a **J. League** (divisões J1–J3, ~60 times ligados às cidades, como Urawa Red Diamonds e Gamba Osaka). A seleção usa o azul **Samurai Blue**. O rugby cresceu muito após a vitória sobre a África do Sul na Copa de 2015 e a Copa sediada no Japão em 2019 (surgiu o termo **niwaka fan**); a seleção, de listras vermelhas e brancas com flor de cerejeira, é apelidada **Brave Blossoms**. Para jogar, procure times amadores em jornais de bairro e fóruns online.

## Pachinko
**Pachinko** lembra um fliperama vertical: bolinhas caem entre pinos e, se entram em certos buracos, rendem mais bolinhas; um **atari** (grande prêmio) jorra muitas. As bolinhas viram brindes, trocáveis por dinheiro em lojas próximas — por isso é, na prática, parecido com jogo de azar. Há salões por todo o país; jogam dos jovens (proibido a menores de 18) aos idosos. Cuidado para não exagerar.`,
  },
  {
    title: 'Lição 12',
    bodyPt: `## Festival de verão (natsu-matsuri)
Acontecem por todo o Japão de julho a agosto. Famosos: Nebuta (Aomori), Tanabata (Sendai), Gion (Kyoto), Awa Odori (Tokushima). Muitos são organizados por santuários locais. Há barracas (**yatai**) de yakisoba, okonomiyaki, algodão-doce, banana com chocolate, máscaras, tiro ao alvo e pesca de peixinho (**kingyo-sukui**); alguns têm **bon-odori** e fogos. Vá a um perto de casa.

## Montanhas do Japão
70% do território é montanhoso. A cordilheira que vai de Toyama a Shizuoka é os **Alpes Japoneses** (Alpes do Norte, Centrais e do Sul). Na temporada de verão até pessoas comuns sobem (com equipamento; iniciantes, com guia). Há montes fáceis perto das cidades, para bate-volta: Takao e Tsukuba (Kantō), Rokkō (Kansai). Muitas montanhas são vulcânicas — daí as fontes termais ao pé delas, ótimas para relaxar após a subida. As três mais altas: Fuji (3.776 m), Kitadake (3.193 m), Hotakadake (3.190 m).

## Série "Otoko wa Tsurai yo"
Série de filmes ("É duro ser homem") com Atsumi Kiyoshi como **Tora-san**, dirigida por Yamada Yōji. São 50 filmes, de 1969 a 2019 — recorde mundial (Guinness) de série mais longa. Tora-san é um vendedor ambulante excêntrico de Shibamata (Tóquio) que sempre se apaixona e é rejeitado no fim. Os filmes mostram o senso de dever, as emoções e o romance dos japoneses. Disponíveis em streaming (alguns grátis com cadastro).

## Karatê
Arte marcial japonesa de Okinawa; ataca-se com socos e chutes (diferente de judô e aikido). Estilos tradicionais seguem o **sundome** (parar pouco antes de acertar) e valorizam o **kata** (formas) — Shōtōkan, Wadō-ryū, Shitō-ryū, Gōjū-ryū. Há também o **full-contact** (acerta-se o oponente; com ou sem proteção), como o **Kyokushin**. Antes de escolher uma academia, confira bem o estilo, pois são bem diferentes.`,
  },
  {
    title: 'Lição 13',
    bodyPt: `## Ir ao trabalho (commute)
No interior, o carro é essencial; nas cidades, quase todos vão de trem. Em Tóquio e Osaka o **rush** (~7h30–9h) lota os trens para o centro (havia funcionários que empurravam passageiros, hoje menos comum, pois há horários flexíveis e home office). Em Tóquio o trajeto leva ~1 hora em média, e quase 2 horas para quem mora em subúrbios.

## Transporte público
**Trem** — o bilhete é checado na entrada e na saída. Pague com bilhete avulso ou cartão pré-pago (**Suica**, **ICOCA**, PASMO).
- Com cartão: carregue antes, encoste na catraca ao entrar e ao sair (a tarifa é debitada). Se faltar saldo, use a **máquina de ajuste de tarifa** (*seisanki*) antes de sair.
- Com bilhete: veja a tarifa no painel, compre na máquina, insira na catraca ao entrar (pegue de volta) e ao sair (a catraca recolhe). Se errou o valor, faça o **ajuste** (*seisan*) no destino, sem multa.

**Ônibus** — veja se a tarifa é fixa ou por distância.
- Tarifa por distância (entra atrás, sai na frente): pegue o **seiriken** (tíquete numerado); ao descer, pague o valor do seu número no painel, depositando dinheiro + tíquete na máquina. Use o trocador (aceita só nota de ¥1.000) se precisar.
- Tarifa fixa (entra na frente, sai atrás): pague ao entrar.

**Táxi** — mais caro; útil onde falta transporte. Pare um com a placa vermelha (*kūsha*, "livre"); a porta é automática (não toque). Diga o destino ou o endereço (eles usam o GPS). Paga-se pelo taxímetro (extras em pedágio/madrugada/app); **não se dá gorjeta**. É muito raro um táxi enganar o cliente.`,
  },
  {
    title: 'Lição 14',
    bodyPt: `## Armários com moeda (coin lockers)
Há **coin lockers** em estações, terminais, áreas subterrâneas e ruas comerciais — em pouquíssimos países há tantos. O preço depende do tamanho: pequeno ~¥300–400, grande (mala) ~¥600–1.000, em moedas de ¥100. Muitos hoje são sem chave (senha/recibo) ou abrem com cartão de transporte. Alguns funcionam 24 horas.

## Máquinas de venda (vending machines)
Há muitíssimas — em estações, ruas, prédios e rodovias; no interior, às vezes só elas. Vendem principalmente bebidas (frias e, no inverno, quentes — café, chá, sopa de milho/missô), e ainda sorvete, cup noodles, pão, doces, revistas, pilhas, guarda-chuvas etc. Para comprar **cigarros**, é preciso o cartão **taspo** (identificação de adulto).

## ATM (caixa eletrônico)
Permitem sacar com cartão de banco/crédito; estão por toda parte, mas o mais prático é o do **konbini**. Atenção: mesmo aberto 24h, o saque pode ter dias/horários limitados conforme o banco. Alguns ATMs não aceitam cartões emitidos no exterior — os de konbini costumam aceitar.

## Rios do Japão
País longo, estreito e montanhoso: os rios são curtos, íngremes e rápidos. O mais longo é o **Shinano** (367 km). Pela rapidez, chuvas fortes causam enchentes — se mora perto de um rio, verifique o risco e o abrigo de evacuação. A montante há vales turísticos e pesca; a jusante, passeios de barco (Sumida em Tóquio, Arashiyama em Kyoto). O **Shimanto** (Kōchi) é chamado "o último rio cristalino do Japão". Os três mais longos: Shinano (367 km), Tone (322 km), Ishikari (268 km).

## Arranha-céus do Japão
A oeste da estação de Shinjuku (Tóquio) há muitos arranha-céus; o mirante da Prefeitura de Tóquio (202 m) é gratuito. Os prédios mais altos (2020): **Abeno Harukas** (Osaka, 300 m) e Yokohama Landmark Tower (296 m). Incluindo torres: **Tokyo Skytree** (634 m) e Tokyo Tower (333 m), ambas com mirantes. A Torch Tower (390 m), perto da estação de Tóquio, deve ficar pronta em 2027.

## Wabi-sabi
**Wabi-sabi** é o valor japonês de ver beleza no que é simples, despojado, quieto e antigo. Se você acha ótimo um templo simples e velho, entendeu o conceito. Comparado ao dourado e suntuoso **Kinkakuji**, o **Ginkakuji** (madeira marrom) parece modesto, mas transmite uma beleza serena — isso é wabi-sabi. Ao ver templos e jardins que parecem "velhos", lembre-se do conceito.`,
  },
  {
    title: 'Lição 15',
    bodyPt: `## Tipos de loja
- **Konbini** (loja de conveniência): por toda parte, muitas 24h o ano todo. Vendem comida, papelaria, cosméticos, álcool, cigarros, e oferecem serviços: envio/retirada de encomendas, retirada de ingressos, pagamento de contas, cópias/impressão/fax e ATM. Essenciais no cotidiano.
- **Loja de ¥100** (*hyaku-en shop*): quase tudo a ¥100 (sem imposto). Papelaria, utensílios, limpeza, roupa, comida, brinquedos e itens criativos.
- **Drogaria**: remédios sem receita (resfriado, estômago, olhos), suplementos, cosméticos, higiene, limpeza e às vezes comida e álcool.
- **Home center**: materiais de construção e bricolagem (madeira, ferramentas, parafusos), jardinagem, pet, móveis; costumam ficar à beira de estradas no subúrbio.
- **Loja de eletrônicos**: redes que vendem computadores, TVs, geladeiras etc.; muitas dão **cartão de pontos** (descontos depois).

## Como contar andares
O Japão usa o sistema americano: o térreo é o **1º andar**, o seguinte o 2º, e assim por diante. Subsolos: 1º subsolo (**B1**), 2º subsolo (**B2**)…

## Guarda-chuvas (kasa)
Quando chove, muita gente abre o guarda-chuva já à menor garoa; muitos carregam um dobrável na bolsa. O **guarda-chuva de plástico transparente** custa ~¥300–500 no konbini (ou ¥100 na loja de ¥100), então alguns o usam como descartável.

## Palavras para "banheiro"
Há vários termos. Placas comuns: "Toilet", "WC", **o-tearai** (lavar as mãos) e **keshōshitsu** (toucador); **benjo** é direto demais e foi caindo em desuso. Para separar masculino/feminino, usam-se ícones azul/vermelho e os kanji **男/女**. Cada vez mais comuns os **banheiros acessíveis** e **multifuncionais** (sinal verde, porta automática com botões abrir/fechar; com trocador de fraldas etc.) — prioridade a quem precisa, mas qualquer um usa se vazio. Há muitos banheiros públicos (estações, lojas, konbini), em geral gratuitos.

## Botões do elevador
Os elevadores têm os andares e os botões **abrir** e **fechar**. Segura-se o "abrir" enquanto entram/saem pessoas. O "fechar" serve para fechar logo quando ninguém mais vai entrar/sair — no Japão espera-se que quem está perto dos botões o aperte; quem só espera a porta fechar sozinha pode irritar os outros.`,
  },
  {
    title: 'Lição 16',
    bodyPt: `## Cédulas e moedas japonesas
- **Cédulas**: ¥10.000, ¥5.000, ¥2.000 e ¥1.000.
- **Moedas**: ¥500, ¥100, ¥50, ¥10, ¥5 e ¥1.

**Novas cédulas (2024)**, com holograma 3D e figuras históricas: ¥10.000 Shibusawa Eiichi (pai do capitalismo japonês), ¥5.000 Tsuda Umeko (educação feminina), ¥1.000 Kitasato Shibasaburō (medicina). Até 2024 traziam Fukuzawa Yukichi, Higuchi Ichiyō e Noguchi Hideyo. A nota de **¥2.000** (lançada em 2000, Cúpula de Okinawa) quase não circula. As moedas de **¥5 e ¥50** têm furo no centro; a de ¥5 (**go-en**) dá sorte (soa como "destino", *go-en*) e é ofertada em santuários — é a única sem algarismo. Moedas de ¥5 e ¥1 não são aceitas em máquinas. A de ¥500 virou bicolor em 2021.

## Perguntar o preço
Em lojas japonesas o preço quase sempre está visível (etiqueta no produto ou na prateleira). Não é comum pechinchar, exceto em loja de eletrônicos. Há exceções onde falta etiqueta: feiras, venda direta de produtores e lojas de dono. Se não entender o preço falado, peça para escreverem ou digitarem na calculadora.

## Maneki-neko
O **maneki-neko** é a figura de um gato com uma pata erguida em gesto de chamar — acredita-se que traz sorte e clientes, por isso é presente para inaugurações de loja e souvenir popular entre turistas.

## Taiyaki
Doce de massa de trigo recheado com **anko** (pasta de feijão doce), grelhado em forma de **pargo** (*tai*) — daí o nome. Hoje há recheios de chocolate e creme.

## Korokke
**Korokke** é batata cozida e amassada com carne moída e cebola, empanada e frita (há a versão de creme/bechamel). Veio do *croquette* europeu na era Meiji. Barato na seção de prontos do supermercado e no açougue. Sem batata, só carne moída, vira **menchi-katsu**. Servem-se com **soosu** (molho escuro agridoce).

## Onigiri
**Onigiri** (bolinho de arroz) leva recheio, é moldado em triângulo e envolto em alga; também chamado **omusubi** (formato e nome variam por região). No konbini há de ameixa, kombu, salmão, ova de bacalhau, atum etc. Há lojas especializadas. Fácil de fazer em casa com formas vendidas na loja de ¥100.

## Pagamento eletrônico
Por muito tempo o Japão foi de dinheiro (muitas lojas só aceitam cash, há pouca falsificação), mas o **cashless** cresce. Tipos:
- **Cartão de transporte** (Suica, ICOCA, PASMO): encoste no caixa.
- **Cartão de compras pré-pago** (Rakuten Edy, WAON, nanaco): idem.
- **QR code** (PayPay, LINE Pay): escaneia-se um QR ou mostra-se um código de barras no app.

Ainda assim, fora das grandes cidades muitos lugares só aceitam dinheiro — ande sempre com algum em mãos.`,
  },
  {
    title: 'Lição 17',
    bodyPt: `## Godzilla
Famosa série de filmes de monstro com efeitos especiais. O 1º (1954, dir. Honda Ishirō) era sério e mostrava o horror de um teste nuclear. No sucesso, vieram muitos filmes e o papel de Godzilla mudou (lutas com monstros do espaço/do futuro); depois a série foi para Hollywood. Como a personalidade muda muito em cada filme, há elogios e críticas a cada um.

## Aquários
Como o Japão é cercado de mar, há aquários por todo o país (mais de 10 só em Tóquio). Famosos: **Churaumi** (Okinawa) e **Kaiyukan** (Osaka), com tubarões-baleia. Cada aquário tem atrações próprias (peixes locais, águas-vivas, pinguins) e shows de golfinhos.

## Manga-kissa / cybercafé
No **manga-kissa** (café de mangá) você paga por uma cabine para ler quadrinhos e usar a internet, por hora ou pacote. O **cybercafé** é praticamente o mesmo (alguns sem mangás). Costumam ter refil grátis de refrigerante, funcionar 24h, ter cabine barata e chuveiro — por isso muitos viajantes pernoitam ali em vez de hotel, ou ficam quando perdem o último trem.`,
  },
  {
    title: 'Lição 18',
    bodyPt: `## Golden Week
Sequência de feriados do fim de abril ao começo de maio: Dia de Shōwa (29/4), Dia da Constituição (3/5), Dia do Verde (4/5) e Dia das Crianças (5/5), somados a fins de semana e feriados substitutos. A duração varia a cada ano. Tudo fica mais caro e cheio (hotéis, passagens, estradas, pontos turísticos) — planeje cedo. Em setembro há a **Silver Week** (Dia do Respeito aos Idosos + Equinócio de Outono), sempre mais curta.

## Tokyo Disney Resort
Em Urayasu (Chiba), reúne **Tokyo Disneyland** (parecido com os dos EUA/China, com o castelo da Cinderela) e **Tokyo DisneySea** (exclusivo do Japão, tema marítimo). Fica lotado em fins de semana, feriados e férias — a espera pode chegar a horas. Planeje: baixe o app oficial, use FASTPASS e compre ingresso com data marcada (a entrada pode ser restrita quando muito cheio).

## Shinkansen
Trem-bala que liga as cidades a 250–300 km/h. São 9 linhas (2020), outras em obras. De Tóquio a Kyoto em ~2h20. A pontualidade é em segundos (atraso médio de 24 s); é silencioso e confortável, e há carrinho vendendo bebidas e marmitas.

## Subir o Monte Fuji
O **Fuji** é o ponto mais alto do Japão (3.776 m), mas qualquer um pode subir — só no verão (julho e agosto), quando abrem os abrigos. No cume faz ~20 °C a menos: leve agasalho mesmo no verão. Plano popular: pegar o ônibus até a 5ª estação, subir por volta do meio-dia, dormir num abrigo na 8ª/9ª estação e seguir por volta das 2h para ver o **goraikō** (nascer do sol do cume). Dá para ver Tóquio à noite, mar de nuvens e o amanhecer. No cume há santuário, correio, banheiros e máquinas; o ponto mais alto é **Kengamine** (30 min a pé do santuário).

## Animação japonesa (Your Name, Doraemon)
O **anime** tem fãs no mundo todo (muitos aprendem japonês por causa dele). O Japão exporta animação para TV desde os anos 1970, e nos anos 1990 "anime" virou termo da cultura japonesa. Clássicos: *AKIRA*, *Ghost in the Shell*, *Princesa Mononoke*, *A Viagem de Chihiro*, além de séries (Dragon Ball, Gundam, Evangelion, Detetive Conan) e jogos (Pokémon).
- **Your Name** (2016, dir. Shinkai Makoto): ficção sobre um garoto e uma garota que trocam de corpo no tempo/espaço; cenários reais detalhados (a escadaria do Santuário Suga, em Yotsuya) viraram ponto de "peregrinação" de fãs.
- **Doraemon**: mangá de Fujiko F. Fujio; o robô do futuro ajuda o menino Nobita com geringonças mágicas. Personagem amado por todos no Japão e famoso no exterior.

## Dorayaki
Doce com **anko** entre dois discos macios tipo castela. Famoso como a comida favorita do Doraemon. Há em konbini e confeitarias, com versões de creme ou mochi.

## Yokohama
Em Kanagawa, é a 2ª cidade mais populosa (após Tóquio), ~30 min de trem ao sul. Cresceu como porto de comércio exterior, com influência estrangeira — destaque para a **Chinatown** (Chūkagai). Perto do porto há passeios de barco e parques; a área **Minato Mirai 21** é um polo turístico/comercial moderno (Landmark Tower).

## Fontes termais (onsen)
Com tantos vulcões, há **onsen** por toda parte (cerca de 3.000). **Beppu** (Ōita) lidera em número de fontes e vazão; outras famosas: **Kusatsu** (Gunma, água ácida com enxofre) e **Nyūtō Onsenkyō** (Akita, clima de fonte escondida). **Etiqueta de banho**:
- Entra-se sem roupa (salvo onde se exige maiô).
- Lave o corpo na área externa antes de entrar na água.
- Não mergulhe a toalha nem o cabelo na água.
- Se a água estiver quente demais, pergunte aos outros antes de adicionar água fria.
- Só fotografe sem ninguém por perto, e respeite a proibição de câmera.
- Seque-se antes de voltar ao vestiário e não fique tempo demais (pode passar mal).`,
  },
]

// ---------------------------------------------------------------------
//  初級1 (Elementary 1 / A2)
// ---------------------------------------------------------------------
const ELEMENTARY1_NOTES: StudyNote[] = [
  {
    title: 'Lição 1',
    bodyPt: `## Níveis de formalidade
O japonês tem um estilo polido e um estilo casual, escolhidos pela relação entre as pessoas. Como saber quem está em posição superior ou inferior?
- **Idade**: em geral, o mais velho fica em posição superior — por isso podem perguntar sua idade. Entre pessoas de idade parecida ou amigos, isso pesa menos.
- **Senpai e kōhai**: numa organização, quem entrou antes é **senpai**; quem entrou depois, **kōhai**. Numa empresa o senpai pode até ser mais novo. Essa relação costuma pesar mais que a de idade.
- **Status/posição**: status social e profissional importam — professor acima de aluno, presidente acima de funcionário.
- **Cliente e funcionário**: o cliente é tratado como superior, não importa a idade; o funcionário usa linguagem honorífica (**keigo**).

## "Ogenki desu ka?"
Equivale a "How are you?", mas **o-genki desu ka?** se usa após muito tempo sem ver a pessoa — não para um colega de trabalho ou alguém que você vê todo dia.`,
  },
  {
    title: 'Lição 2',
    bodyPt: `## Beisebol (yakyū)
Há anos um dos esportes mais populares. Existem times comunitários infantis e clubes escolares; o torneio de verão do ensino médio (**Kōshien**) é tradição. O profissional tem 12 times: 6 na **Central League** e 6 na **Pacific League**, ligados às suas cidades. Muita gente joga por hobby — em parques se vê crianças e adultos jogando catch.

## Ikebana
**Ikebana** (arranjo floral) é uma arte tradicional: flores, folhas e galhos dispostos num vaso. Há aulas em centros culturais e comunitários; as aulas práticas para iniciantes são uma boa porta de entrada.

## Studio Ghibli
Produtora de animação ligada ao diretor **Miyazaki Hayao**. Seus filmes fazem sucesso dentro e fora do Japão e ganham prêmios internacionais: *Meu Amigo Totoro*, *A Viagem de Chihiro*, *O Castelo Animado*.

## Associações internacionais
Organizações que apoiam estrangeiros na comunidade local e promovem o convívio com moradores: cursos de japonês, festivais de comida internacional, concursos de discurso e eventos de intercâmbio. Vale conhecer a da sua região.`,
  },
  {
    title: 'Lição 3',
    bodyPt: `## O clima no Japão
Por ser um país longo no sentido norte–sul, o clima varia muito:
- **Tóquio**: esquenta no fim de março; verão (jul–ago) muito quente e úmido (perto de 40 °C); inverno (dez–fev) seco e claro, com neve rara.
- **Hokkaido** (norte): verão ameno; inverno rigoroso (abaixo de zero de dia, até ~-20 °C) e com muita neve.
- **Okinawa** (sul): subtropical; dá para nadar de abril a outubro; no inverno raramente abaixo de 10 °C; temporada de tufões de julho a outubro (~10 por ano).
- **Lado do Mar do Japão** (Niigata, Toyama, Ishikawa): verão quente e ensolarado; inverno com muita chuva/neve (vários metros em alguns lugares).

## Tsuyu (estação das chuvas)
Do fim de maio a meados de julho. Sobem a umidade e a temperatura: a comida estraga mais fácil, o mofo cresce na cozinha e no banho, e a roupa demora a secar. O verão de verdade começa quando o tsuyu acaba.

## Sakura e hanami
As flores de cerejeira (rosa-claras) abrem do fim de março a abril — sinal da primavera, coincidindo com o início do ano letivo/fiscal (ligadas a formaturas e recomeços). A previsão anuncia quando vão abrir. O **hanami** é fazer piquenique e beber sob as cerejeiras; em parques populares, alguns chegam de madrugada para garantir lugar (**bashotori**).

## Folhagem de outono (kōyō)
No outono as folhas passam de verde a vermelho, laranja e amarelo. As pessoas vão a montanhas, vales e jardins ver o **kōyō** (out–nov, varia por região e altitude). Diferente do hanami, não se faz piquenique embaixo das árvores.

## Cigarras (semi)
Insetos que cantam alto do alto das árvores; no Japão, seu som é o som do verão. Tipos batizados pelo canto: **min-min zemi**, **tsuku-tsuku-bōshi**, **kana-kana**. O coro chama-se **semi-shigure**, muito usado como efeito sonoro de verão em TV, filmes e anime.`,
  },
  {
    title: 'Lição 4',
    bodyPt: `## Tufões (taifū)
Ciclones tropicais que se formam no mar ao sul e atingem o Japão do verão ao outono, com ventos e chuvas fortes que causam estragos. Podem parar transporte, escolas e empresas — não saia e acompanhe as informações na TV e na internet. Virou moda (por redes sociais) comer **korokke** durante o tufão, e algumas lojas chegam a esgotar.

## Previsão do tempo
Além de tempo, temperatura e chuva, a previsão japonesa traz, conforme a estação e a região: quantidade de pólen, intensidade de raios UV, risco de insolação, facilidade de secar roupa — e até qual prato de panela combina mais com o dia.`,
  },
  {
    title: 'Lição 5',
    bodyPt: `## Academias (sports clubs)
Espaços para exercício e treino, também chamados de sports gym ou fitness club. As grandes têm aparelhos, estúdios e piscina; mensalidade ~¥10.000 (varia por dia/horário de uso). Crescem as academias 24 h só com máquinas (mensalidade ~metade). Há ginásios públicos por algumas centenas de ienes a visita.

## Shopping malls
Reúnem lojas de roupa, calçado, eletrônicos, drogaria, mercado, praça de alimentação, fliperama e cinema — dá para passar o dia inteiro comprando, comendo e se divertindo.

## Estabelecimentos de banho
Além dos onsen de uso diurno (algumas centenas de ienes):
- **Sentō** (casa de banho pública, *ofuroyasan*): tradicional, para quem não tinha banheira em casa; barato (¥500 ou menos). Diminuíram, mas voltam a crescer com banho ao ar livre, sauna e jacuzzi.
- **Kenkō-land** (spa): vários banhos, sauna, salas de descanso e restaurante; ~¥1.000–2.000 (alugam toalha e roupa). Cheios de famílias nas folgas.
- **Super sentō**: meio-termo entre sentō e kenkō-land, mais simples e barato.`,
  },
  {
    title: 'Lição 6',
    bodyPt: `## Semáforos
Há verde, amarelo e vermelho para os veículos (mas o verde é chamado de **ao**, "azul"). Para pedestres há só verde e vermelho; o verde piscando equivale ao amarelo dos carros. Alguns semáforos de pedestre só abrem se você apertar o botão (sempre ou em certos horários).

## Templos e santuários
Há muitos por todo o Japão, alguns Patrimônio Mundial (Templo **Hōryūji**, em Nara; Santuário **Itsukushima**, em Hiroshima). A grande diferença: **templo (otera) é budista; santuário (jinja) é xintoísta**.
- **No templo** você encontra: estátuas de Buda, túmulos, monges, um sino e cheiro de incenso.
- **No santuário** você encontra: o portão **torii**, sacerdotes/miko e visitantes que batem palmas ao rezar.`,
  },
  {
    title: 'Lição 7',
    bodyPt: `## Pontualidade e atrasos
Diz-se que os japoneses são pontuais: chegar 1 minuto atrasado ao trabalho já é mal visto, e evita-se fazer o outro esperar (chega-se na hora ou um pouco antes). Se for atrasar 5–10 min, avise o quanto antes. Mas o senso de tempo varia por geração e lugar; e a pontualidade vale para começar, não tanto para terminar — reuniões e expediente costumam passar do horário, o que surpreende estrangeiros.

## Interrupções no serviço de trens
Os trens são pontualíssimos; por um pequeno atraso o operador já pede desculpas. Podem atrasar ou parar por acidente, mal-estar de passageiro, falha de sinal etc. — acompanhe os avisos (estação e online). Em caso de atraso, dão o **chien-shōmeisho** (atestado de atraso): entregue à sua empresa e você não é considerado atrasado (cada empresa tem sua política). Disponível na estação ou pela internet.`,
  },
  {
    title: 'Lição 8',
    bodyPt: `## Castelos japoneses
Construídos do período Sengoku ao Edo (séc. XVI–XIX), têm altas muralhas de pedra, fossos e torres. Atrações turísticas: o branco **Himeji** (Hyōgo, Patrimônio Mundial), o **Matsumoto** (Nagano, com laca preta) e o **Matsuyama** (Ehime, castelo de montanha). Osaka e Nagoya têm torres reconstruídas em concreto na era Showa (1926–1989), com elevador. Há também parques com ruínas de castelo.

## Outlets
Shopping com produtos vindos direto da fábrica, popular nas folgas; ficam em pontos turísticos, subúrbios e perto de rodovias. No Japão, outlet **não** é lugar de produto com defeito ou de baixa qualidade.

## Luta livre profissional (puroresu)
Mistura de luta e atuação, popular e atraindo também o público feminino. Há grandes organizações em arenas (Tokyo Dome) e pequenas locais (ginásios, estacionamentos de shopping) — muitas dessas gratuitas, diversão para adultos e crianças.`,
  },
  {
    title: 'Lição 9',
    bodyPt: `## Estudar japonês com anime
Muita gente começa a estudar japonês por gostar de **anime**, hoje fácil de achar online (YouTube etc., alguns legendados, ou em serviços pagos). Assistir ajuda a treinar a escuta e a pronúncia com japonês natural — procure suas séries favoritas.

## Aulas de japonês locais
Cidades e associações internacionais oferecem aulas para estrangeiros, grátis ou baratas (muitas com voluntários), 1–2× por semana em centros comunitários. Há vários formatos (turma, grupo, individual) e dias/horários variados; também servem para conhecer moradores e obter informações úteis.`,
  },
  {
    title: 'Lição 10',
    bodyPt: `## Centros comunitários (kōminkan)
Espaço público de educação social e de rede local, com salas japonesas, salas de reunião, salões multiuso, cozinha e oficinas. Sediam, por aluguel baixo, aulas de japonês, de culinária, cursos diversos e atividades de clubes locais. Ótimo para aprender e conhecer gente — procure o mais perto de você.

## Aulas de culinária
Estão entre as aulas mais populares; às vezes em centros comunitários. Empresas de alimentos e de gás criam cursos completos: aulas avulsas de experimentação, pratos regionais, pratos da estação — variam em duração, preço e tipo de comida.

## Caligrafia (shodō)
Arte de escrever kanji com pincel e tinta. No Japão começa na escola primária e é parte importante da educação; no Ano-Novo, os alunos fazem o **kakizome**. Há concursos nas escolas e aulas em centros comunitários, de crianças a adultos.

## Aikidō
Arte marcial japonesa, como o judô e o karatê, fundada por **Ueshiba Morihei**; cerca de 1,6 milhão de praticantes no mundo. Voltada à autodefesa: você desvia do ataque e usa a força do oponente para projetá-lo. Popular entre mulheres e idosos (exige pouca força, não tem competição e dá para praticar por muito tempo).`,
  },
  {
    title: 'Lição 11',
    bodyPt: `## Churrasco (bābekyū)
Grelhar e comer ao ar livre. O churrasco japonês tem particularidades:
- Grelha-se carne com abóbora, cebola e milho, além de camarão, lula e mariscos.
- Cozinha-se e come-se ao mesmo tempo (não se espera tudo ficar pronto).
- No fim costuma-se fazer **yakisoba** ou **yaki-onigiri**.
- Em parques e campings dá para alugar o equipamento; alguns lugares alugam e vendem tudo (equipamento, comida, bebida).
- Crescem os churrascos em terraços nas cidades.

## Pratos prontos no supermercado (sōzai)
Na seção de **sōzai** vendem-se acompanhamentos prontos (frituras como korokke, yakitori, **nimono** e saladas) — leve para casa e coma sem cozinhar. Há os caseiros e os difíceis de fazer em casa. Úteis para quem é ocupado; saem com desconto perto do fechamento.

## Yakitori
Pedaços de frango grelhados no espeto; raramente feito em casa (compra-se em mercado/konbini ou pede-se no izakaya; a casa especializada é **yakitori-ya**). Partes variadas: fígado, **seseri** (pescoço), **sasami** (peito); também **negima** (frango + cebolinha) e **tsukune** (frango moído). Tempera-se com sal ou **tare** (molho de shoyu adocicado).

## Prazos de validade (dois tipos)
Toda comida traz **shōmikigen** ("consumir preferencialmente antes de") ou **shōhikigen** ("data limite"). O **shōmikigen** indica até quando o sabor e a qualidade se mantêm — ainda dá para comer depois. O **shōhikigen** é a data após a qual não é seguro comer (alimentos que estragam rápido).

## Aviso de alérgenos
Por lei, o rótulo deve indicar se contém ovo, leite, trigo, camarão, caranguejo, amendoim e trigo-sarraceno. Mas o ingrediente pode aparecer com outro nome (ovo como "omelete", leite como "sorvete"). Pratos prontos, marmitas e refeições de restaurante não são obrigados a rotular — pergunte ao funcionário.`,
  },
  {
    title: 'Lição 12',
    bodyPt: `## Obento (marmita)
Compra-se em konbini, mercado ou loja de **bentō**, ou faz-se em casa. Acompanhamentos comuns: omelete enrolada, frituras, hambúrguer, salada de batata. Valoriza-se sabor, aparência e cores variadas (tomate vermelho, omelete amarela, verduras, arroz branco, alga/gergelim preto). Há acessórios para enfeitar.

## Tamago-yaki
Omelete enrolada caseira, de café da manhã e de marmita. Bate-se o ovo com sal, shoyu, mirin, açúcar ou dashi e frita-se enrolando na frigideira. No Kantō costuma ser doce; no Kansai, salgada. Variações: cebolinha, espinafre, **shirasu**, **mentaiko**.

## Okonomiyaki
"Panqueca" de repolho, carne, frutos do mar etc. misturados à massa de trigo, feita na chapa. **Kansai**: tudo misturado antes de grelhar. **Hiroshima**: em camadas, sem misturar. Em Osaka/Hiroshima o funcionário faz; em Tóquio o cliente grelha na própria mesa. Também há versão congelada de micro-ondas. Finaliza-se com molho, maionese, **katsuobushi** e alga.

## Sukiyaki
Panela (**nabe**) de fatias finas de boi grelhadas com legumes, temperadas com shoyu e açúcar (acelga, **shirataki**, tofu, enoki, cebolinha); come-se mergulhando em ovo cru. Usa carne de qualidade — caro em restaurante, mas há versão barata em redes de gyū-don.

## Chawan-mushi
Creme de ovo cozido no vapor, servido em refeição de curso ou como acompanhamento. Leva dashi, ovo batido e ingredientes (frango, **kamaboko**, shiitake, enoki, ginkgo, camarão). Come-se de **colher**, como pudim — não use hashi.

## Dashi
O sabor-base da cozinha japonesa, extraído fervendo lentamente **katsuobushi**, **kombu**, sardinha seca ou shiitake. Fazer do zero é trabalhoso, então a maioria usa o **dashi no moto** (instantâneo: pó na água quente).

## Macarrão instantâneo em copo
Pronto em 3–5 min com água quente; criado no Japão em 1971 e consumido no mundo todo (ramen, udon). No **yakisoba** em copo, escorre-se a água depois que o macarrão amolece. Barato e de longa validade — útil para emergências.`,
  },
  {
    title: 'Lição 13',
    bodyPt: `## Banheiros japoneses
- **Estilo japonês (washiki)**: hoje raro (prédios antigos, locais públicos); agacha-se sobre o vaso.
- **Bidê de água morna (washlet)**: comum nos vasos ocidentais; os botões às vezes só vêm em japonês — **おしり** (lava o ânus), **止** (parar), força fraca↔forte, posição frente↔trás e **ビデ** (uso feminino).
- **Dar a descarga** de vários jeitos: botão no painel (**大** = sólidos, **小** = líquidos), botão na parede (洗浄 / 流す), sensor (passe a mão e segure alguns segundos), alavanca no tanque (大⇔小) ou alavanca manual (use a mão, não o pé).
- **Botão de chamada (呼出)**: é de emergência (mal-estar ou queda), **não** de descarga — não confunda.`,
  },
  {
    title: 'Lição 14',
    bodyPt: `## Carimbo pessoal (hanko / inkan)
Necessário para coisas oficiais: entregar documentos em repartições, abrir conta e receber entregas em casa. Há lojas com sobrenomes prontos (algumas centenas de ienes); para sobrenome estrangeiro faz-se sob encomenda (alguns milhares de ienes, conforme material e tamanho). Às vezes a assinatura é aceita, mas certas repartições e bancos só aceitam carimbo. Pode ser feito em alfabeto, katakana ou kanji.

## Férias remuneradas (yūkyū)
Desde 1º/4/2019 é obrigatório tirar férias remuneradas. Dão-se 10 dias por ano a quem (1) trabalhou 6+ meses na mesma empresa e (2) compareceu a 80% dos dias úteis. A empresa é responsável por garantir que cada um tire ao menos 5 dias por ano — vale também para contratados e meio-período. Quem descumpre pode ser punido (prisão ou multa). O Ministério da Saúde, Trabalho e Bem-Estar atende dúvidas em vários idiomas.`,
  },
  {
    title: 'Lição 15',
    bodyPt: `## Ir ao hospital no Japão
Você escolhe o médico conforme o sintoma. Pode ir a uma clínica ou a um hospital geral — neste, sem carta de encaminhamento de uma clínica, paga-se uma taxa extra. Passos: 1) recepção; 2) ficha/questionário; 3) sala de espera; 4) consulta quando chamado; 5) pagamento; 6) receita; 7) levar a receita à farmácia; 8) pagar o remédio (a farmácia em geral fica fora do hospital).

Fora do horário ou em feriado, vá ao plantão; se for grave, chame ambulância (**119**, gratuita) dizendo **"kyūkyūsha o yonde kudasai"**. Há hospitais que arranjam intérprete, e a lista de quem atende estrangeiro está no site da **JNTO** (jnto.go.jp).

Departamentos por sintoma:
| Sintoma | Departamento |
| --- | --- |
| Febre, garganta, tosse, coriza, dor de cabeça/barriga | clínica geral (naika) |
| Fratura, contusão, entorse | ortopedia (seikei-geka) |
| Garganta, nariz, ouvido | otorrino (jibika) |
| Urticária, manchas na pele | dermatologia (hifuka) |
| Problema nos olhos | oftalmologia (ganka) |
| Saúde mental | psicossomática (shinryō-naika) |
| Saúde feminina, gravidez | gineco/obstetrícia (fujinka) |
| Dente | odontologia (shika) |

## Febre do feno (kafunshō)
Alergia ao pólen de cedro e outras plantas: coceira nos olhos, espirros, coriza e nariz entupido. No Japão há muito pólen de cedro de março a maio, e mais gente tem sintomas nessa época. Muitos desenvolvem na vida adulta — alguns estrangeiros têm pela primeira vez no Japão. Trata-se com médico; máscaras e colírio na farmácia/drogaria ajudam.`,
  },
  {
    title: 'Lição 16',
    bodyPt: `## Ombros tensos (katakori)
Queixa muito comum no Japão (top 1–2 incômodos físicos para muita gente). Talvez pareça "típico japonês" porque algumas línguas nem têm a palavra. Ocorre por carregar peso ou ficar na mesma postura por muito tempo (pescoço, ombros, costas, trapézio). Há itens que ajudam: cadeira de massagem, bastão de massagem, faixa de apoio para o ombro, colar e adesivos magnéticos.

## Máscaras
Estrangeiros se surpreendem com tanta gente de máscara. A "etiqueta da tosse" pede que quem tosse/espirra use máscara; muitos também usam para não pegar doença e na época da febre do feno. Há ainda usos não ligados à saúde: evitar conversa, não mostrar o rosto, não se maquiar — e máscaras com cores e estampas viraram acessório.`,
  },
  {
    title: 'Lição 17',
    bodyPt: `## Como sentar num quarto japonês
Várias formas de sentar no tatami:
- **Seiza** (sobre os joelhos): a forma formal, sempre aceitável, mas deixa as pernas dormentes. Se ficar difícil, pergunte **"raku ni shitemo ii desu ka?"** e mude de posição.
- **Agura** (de pernas cruzadas): comum entre homens (e cada vez mais entre mulheres), mas muitos acham que não se deve.
- **Yokozuwari** (pernas para o lado): jeito casual, comum entre mulheres.
- Esticar as pernas, levantar um joelho ou abraçar os joelhos não é comum num quarto japonês.

## Omamori (amuletos)
Comprados em santuários e templos, com pedidos variados: segurança da família, passar na prova, sucesso nos negócios, sorte no amor. Alguns levam de souvenir pela estampa fofa. Não convém guardar por muito tempo: quando o desejo se realiza, devolva o amuleto ao local onde o pegou e faça **orei-mairi** (visita de agradecimento).

## Como se referir aos familiares
Há palavras diferentes para falar do pai (**chichi** / **otōsan**) e da mãe (**haha** / **okāsan**): use **chichi/haha** para a própria família e **otōsan/okāsan** para a de outra pessoa — em situações formais (trabalho, com alguém mais velho). Entre amigos, ou quando o falante é jovem/estudante, ele chama os próprios pais de otōsan/okāsan e os irmãos mais velhos de **oniisan / oneesan**. Não acrescente **-san** a quem é mais novo que você na família: **otōto** (irmão menor), **imōto** (irmã menor), **musuko** (filho), **musume** (filha).`,
  },
  {
    title: 'Lição 18',
    bodyPt: `## Nomes japoneses
Deve-se registrar o nome do bebê na prefeitura em até 14 dias. Escolhe-se pelo significado e pela leitura dos kanji (de bom presságio para o futuro). As modas mudam: antes nomes de menina terminavam em **-ko** e os de menino traziam números de ordem (**ichi** = 1, **ji** = 2); hoje preferem-se nomes de um só kanji (ex.: Ren). Há uma lista limitada de kanji para nomes, mas **não** há limite de leitura — por isso alguns nomes são difíceis de ler (ex.: Kanon, Rizumu).

## Brinde (kanpai)
Diz-se **kanpai!** (os kanji significam "copo cheio" + "esvaziar"). Não precisa esvaziar de fato — basta um gole após o brinde e depois você bebe quando quiser. Numa festa, todos brindam para começar e esperam o brinde para beber. Quem propõe costuma ser o mais graduado ou o convidado de honra; encoste seu copo no dos outros e dê um gole (alguns batem palmas depois).

## Karaokê
Diversão inventada no Japão: cantar suas músicas favoritas, geralmente numa **karaoke box** (sala fechada). Popular com estudantes e com adultos depois da bebida; cresce o **hitori-karaoke** (sozinho). Como usar:
- Defina o nº de pessoas e o tempo (cobrança por tempo, ou "free-time" fixo; pode haver **nomi-hōdai**, bebida à vontade).
- Cadastre-se no balcão (vale virar sócio para preço menor e pontos).
- Peça bebida (sistema **one-drink**: uma por pessoa) e escolha músicas no tablet.
- ~5 min antes do fim, ligam avisando; dá para estender (**enchō**) se ninguém estiver esperando. Pague no balcão ao sair.

## Yosegaki (recado coletivo)
Mensagens escritas para alguém em ocasiões especiais (troca de emprego, aposentadoria, casamento), num cartão colorido assinado por várias pessoas — por exemplo, de quem não pôde ir ao casamento. Usa-se um **shikishi** (papel quadrado e grosso, de borda dourada, o mesmo de autógrafos), que pode virar enfeite de parede.`,
  },
]

// ---------------------------------------------------------------------
//  初級2 (Elementary 2 / A2)
// ---------------------------------------------------------------------
const ELEMENTARY2_NOTES: StudyNote[] = [
  {
    title: 'Lição 1',
    bodyPt: `## J-pop e Perfume
**J-pop** é o termo geral da música pop japonesa (rock, folk, idol, hip hop, techno-pop e, às vezes, **enka** e **ani-son**). Dá para ouvir fácil online (vídeos oficiais no YouTube, ou serviços por assinatura). **Perfume** é um trio feminino de techno-pop famoso pela dança e por shows com tecnologia de ponta.

## Tabe-aruki
Aqui **tabe-aruki** não é "comer andando", e sim experimentar comida em vários restaurantes — pratos famosos numa viagem ou casas do bairro. Pode-se seguir o instinto, guias, ou focar num tipo (ramen, comida estrangeira). Há programas de TV e mangás sobre o tema.

## Ani-son
**Ani-son** ("anime song") é a música de anime (às vezes de tokusatsu/jogos); virou um gênero próprio, popular no karaokê. Como o anime, faz sucesso fora do Japão — há quem conheça muitos ani-son sem conhecer J-pop (ex.: "Voltes V" nas Filipinas). Cantores de ani-son têm fãs no exterior.

## Grupos de estudo de japonês em redes sociais
Dá para estudar japonês de graça em grupos e sites: falantes nativos e professores respondem dúvidas (grupos no Facebook; sites como **HiNative** e **Lang-8**, onde nativos também corrigem frases). É preciso se cadastrar.`,
  },
  {
    title: 'Lição 2',
    bodyPt: `## Barba e bigode no Japão
A barba/bigode masculino muitas vezes não é bem-visto hoje. Tribunais já disseram que usar é escolha de cada um, e há mais atletas com barba — sinal de que a sociedade aceita mais. Mas certos empregos e empresas não permitem. Se mandarem você raspar, pergunte o motivo e converse.

## Amuro Namie
Cantora de Okinawa (estreou em 1992, aposentou-se em 2018), popular pelo canto, dança e moda — nos anos 1990, jovens copiavam seu estilo (as "Amurers"). Sucessos: "Can You Celebrate?", "Chase the Chance", "Hero". Ainda muito ouvida no karaokê.

## Mifune Toshiro e "Os Sete Samurais"
**Mifune Toshiro** (1920–1997) foi um ator premiado (Melhor Ator em Veneza), conhecido no exterior (tem estrela na Calçada da Fama). Filmes famosos: *Rashomon*, *Os Sete Samurais*, *Yojimbo*, *Barba Ruiva*. *Os Sete Samurais* (1954, dir. **Kurosawa Akira**) — camponeses contratam sete samurais contra bandidos — influenciou o cinema mundial. Disponível em streaming.

## Revistas comunitárias
As **komyunitii-shi** (também *taun-jōhōshi* ou *free paper*) são folhetos gratuitos (estações, lojas, konbini) com informações locais: lojas, restaurantes, eventos e atividades de grupos da comunidade. Ajudam a conhecer a região.

## Horas extras
Desde abril de 2019 há limite legal: no máximo 45 h extras por mês e 360 h por ano. Forçar além disso é punível. Hora extra sem registro ou sem pagamento (**saabisu zangyō**) também é ilegal — se ocorrer, procure as autoridades.`,
  },
  {
    title: 'Lição 3',
    bodyPt: `## Teishoku (refeição completa)
**Teishoku** é o prato principal com arroz, missoshiru e acompanhamentos; barato e equilibrado. Variações pelo principal: peixe grelhado, **tonkatsu**, hambúrguer, sashimi, **yakiniku** — e o **asa-teishoku** (café da manhã).

## Okawari e ōmori
**Okawari** é repetir comida/bebida na mesma refeição (alguns teishoku oferecem arroz e missô grátis à vontade). **Ōmori** é porção maior (arroz, ramen, soba), em geral com taxa extra. Há ainda **tokumori/dekamori/megamori** (porções gigantes) e, para menos, **komori** ou **sukuname**; o normal é **namimori/futsū**.

## Café e chá
Ao pedir, leite e açúcar costumam vir à parte. No chá preto podem perguntar se quer com leite ou limão. Para gelado, peça *aisu kōhī* ou *aisu tī* (servidos com gelo); às vezes perguntam "hot" ou "iced".

## Wasabi
**Wasabi** (raiz-forte japonesa) é o condimento verde do sushi/sashimi — picante, "arde no nariz". Vai no **nigiri-zushi**, mas dá para pedir sem: sushi sem wasabi é **sabi-nuki**.

## Regras da bicicleta
A bicicleta é "veículo leve" pela lei de trânsito — andar embriagado é crime. Ande pela esquerda; é permitido na calçada por segurança, mas dando preferência ao pedestre. **Proibido**: andar bêbado, com duas pessoas, segurando guarda-chuva aberto, ou usando celular/fones. Quebrar regra pode dar multa.

## Fumar em restaurantes
As regras ficam mais rígidas: desde abril de 2020 (Tóquio) é proibido fumar em restaurantes com funcionários, contra o fumo passivo. Como o número de fumantes cai, a proibição tende a se espalhar.

## Furai (frituras empanadas)
**Furai** é fruto do mar ou legume empanado e frito (parte da culinária ocidental adaptada desde ~1900): **ebi-furai** (camarão), **aji-furai**, **ika-furai**, **kaki-furai** (ostra), **mikkusu furai**. Carne empanada chama-se **katsu** (tonkatsu, chikin-katsu, menchi-katsu) — mas a fronteira entre furai e katsu não é clara.

## Como pagar a conta no restaurante
Paga-se no caixa ou na mesa, conforme o lugar (na mesa costuma ser mais caro). **Não se dá gorjeta**; restaurantes/hotéis caros às vezes incluem ~10% de serviço. Em grupo, um paga tudo ou divide-se — dividir igualmente é **warikan**, prática comum (no aperto, o restaurante pode recusar dividir).

## Cupons de restaurante
Restaurantes dão cupons de desconto ou de bebida/sobremesa grátis — no caixa, em panfletos, na revista comunitária, distribuídos na estação, ou em sites e apps.

## "Drink bar"
Seção onde você se serve à vontade (*all-you-can-drink*): quentes (café, chá) e gelados (chá gelado, suco), às vezes sopa (pode ser cobrada à parte). Hoje há em cybercafés, karaokê, fast-food e até kaiten-zushi.`,
  },
  {
    title: 'Lição 4',
    bodyPt: `## Ramen
Macarrão japonês de origem chinesa, adaptado e hoje mundial. Pelo caldo: **shōyu** (shoyu), **shio** (sal), **miso** e **tonkotsu** (osso de porco, leitoso). Variações regionais (**gotōchi ramen**): **Hakata** (Fukuoka, macarrão fino em tonkotsu), **Sapporo** (miso com manteiga e milho), **Kitakata** (Fukushima, macarrão grosso ondulado em caldo leve de shoyu).

## Comida regional (gotōchi)
Descobrir especialidades locais é parte da viagem: **toriten** (tempura de frango, Ōita), **kiritanpo-nabe** (Akita), **hitsumabushi** (enguia, Nagoya), **sanuki-udon** (Kagawa), **chanpon** (Nagasaki), **gōyā chanpurū** (Okinawa).

## Shoyu, soosu, tsuyu e tare
- **Shoyu** (molho de soja): o tempero mais usado; para sashimi, sushi e pratos em geral.
- **Soosu**: do inglês "sauce"; molho escuro tipo Worcestershire para frituras (tonkatsu). Outros molhos precisam de nome (tártaro, demi-glace...).
- **Tsuyu**: shoyu + dashi + saquê + mirin; para molhar tempura e soba, e para temperar.
- **Tare**: molho encorpado para mergulhar — **yakiniku no tare**, **goma-dare** (gergelim, do shabu-shabu).

## Temaki-zushi
O **maki-zushi** (enrolado) tem arroz e ingredientes na alga, enrolados. O **temaki-zushi** é a versão em que cada um monta o seu — fácil e popular em festas em casa (atum, salmão, camarão, pepino, abacate, ovo, **kanpyō**, nattō).

## Yaki-imo (batata-doce assada)
Batata-doce assada inteira em fogo baixo; com pedras quentes vira **ishiyaki-imo** (mais doce). No inverno, caminhões a vendem pelas ruas anunciando no alto-falante. Hoje há também assadas em forno elétrico no supermercado (~¥500–700 cada). Dá para pedir por valor: "gohyaku-en bun kudasai" (¥500).

## Shabu-shabu
Fatias finas de carne passadas rapidamente no caldo fervente com hashi (boi no Kansai, porco no Kantō; **buri-shabu** com olho-de-boi no Hokuriku). Mergulhe em **goma-dare** ou **ponzu**. No fim, faz-se o **shime**: udon/ramen no caldo, ou arroz com ovo (canja).`,
  },
  {
    title: 'Lição 5',
    bodyPt: `## Destinos turísticos 1 (Hokkaido / Tóquio / Kyoto / Okinawa)
- **Hokkaido** (norte): natureza (montanhas, lagos, fauna), esqui no inverno, frutos do mar (caranguejo, ouriço, lula, vieira, ova de salmão) e o festival da neve de Sapporo (fevereiro).
- **Tóquio**: capital; cada área tem seu caráter — Shinjuku (movimento, mirante grátis da Prefeitura), Akihabara (anime/eletrônicos), Ueno (museus, zoo), Asakusa (templo tradicional), Odaiba (moderno); Skytree, Palácio Imperial, Disneyland (que fica em Chiba).
- **Kyoto**: capital desde 794; muitos templos/santuários (17 são Patrimônio Mundial, como Kinkakuji, Kiyomizudera, Ryōanji), ruas antigas, culinária e **maiko**.
- **Okinawa** (antiga Ryūkyū, sul): cultura própria, subtropical, mar lindo, mergulho e esportes aquáticos. Voos caros, mais baratos na baixa temporada, antecipados ou em **LCC**.

## Monte Fuji e os Cinco Lagos
A região **Fuji Goko** (lado norte, em Yamanashi) formou-se com a lava barrando um rio; ótima para ver o Fuji, a ~2 h de ônibus de Shinjuku. Lagos **Kawaguchi** e **Yamanaka** (barco, bicicleta), o parque **Fuji-Q Highland** (montanhas-russas) e onsen com vista. Comida típica: udon com água do Fuji e **hōtō** (macarrão grosso com legumes no missô).

## Ônibus rodoviários (highway bus)
Ligam cidades e pontos turísticos pela estrada; mais baratos que Shinkansen/avião (Tóquio–Osaka: avião ¥10.000–20.000, Shinkansen ¥14.000, ônibus ¥3.000–5.000). Muitos viajam à noite e chegam de manhã. Há assentos mais espaçosos por um pouco mais. Compra-se online (ou no balcão, conforme disponibilidade).

## Destinos turísticos 2 (Nikko / Nara / Toyama / Nagano)
- **Nikko** (Tochigi, ~2 h de Tóquio): natureza e história; o santuário **Tōshōgū** (a Tokugawa Ieyasu, Patrimônio Mundial), o portão Yōmeimon e os três macacos (não vejo, não falo, não ouço); Cataratas Kegon, Lago Chūzenji, a estrada Irohazaka (folhagem de outono).
- **Nara**: capital em 710; **Tōdaiji** (Grande Buda), santuário **Kasuga**, e o Parque de Nara com cervos mansos (compre **shika-senbei** para alimentá-los).
- **Toyama**: entre o Mar do Japão e os Alpes do Norte; rota **Tateyama-Kurobe**, ferrovia do desfiladeiro Kurobe; frutos do mar (lula-vaga-lume, camarão-de-vidro, olho-de-boi de inverno).
- **Nagano**: Olimpíadas de Inverno de 1998; montanhas e estações de esqui, montanhismo no verão, onsen, o templo **Zenkōji** e o Jigokudani (macacos no onsen).

## Esqui e estações de esqui
Mais de 500 estações (Chūbu, Tōhoku, Hokkaido). Mesmo de Tóquio dá para ir fácil com excursões de ônibus na temporada (dez–mar), algumas com transporte + lift + aluguel de equipamento/roupa. Iniciante: faça aula primeiro. Muitas ficam perto de onsen.

## Hotéis, ryokan, minshuku e guest houses
- **Hotel**: às vezes cobra por nº de hóspedes (e não por quarto); horários de check-in/out rígidos. O **business hotel** é mais barato (quartos menores).
- **Ryokan**: hospedagem de estilo japonês, geralmente **1 diária + 2 refeições** (jantar e café); banho público interno.
- **Minshuku**: menor, familiar, refeições caseiras; mais barato, com menos serviços; às vezes só reservável por telefone.
- **Guest house**: barata; cama própria em quarto compartilhado (**aibeya**), com salão para conversar com outros hóspedes.`,
  },
  {
    title: 'Lição 6',
    bodyPt: `## Bilhetes do Shinkansen
Compra-se no guichê da JR, em máquinas ou online (online exige cadastro, sem fila). São **dois** bilhetes: o **jōshaken** (passagem) e o **tokkyūken** (taxa de expresso pelo Shinkansen). O tokkyūken tem **assento reservado** (*shitei-seki*) ou **não reservado** (*jiyū-seki*, mais barato, mas pode faltar lugar). Há ainda o **green car** (1ª classe, com bilhete próprio). As vendas abrem às 10h um mês antes; dá para comprar no dia, mas os reservados podem esgotar.

## Destinos turísticos 3 (Osaka / Huis Ten Bosch / Mt. Takao / Jōdogahama)
- **Osaka** (oeste): Castelo de Osaka, a torre **Tsūtenkaku** (Shinsekai), o arranha-céu **Abeno Harukas** (mirante a 300 m, 2014), o Museu do Cup Noodle, o aquário **Kaiyūkan** e o parque **USJ**.
- **Huis Ten Bosch** (Nagasaki): parque temático holandês (cidade, moinhos, flores, iluminação noturna). Parece histórico (houve comércio com a Holanda no período Edo), mas foi construído nos anos 1990.
- **Monte Takao** (oeste de Tóquio, 599 m): natureza perto da cidade, com teleférico/cadeirinha ou trilha de 1–2 h; três estrelas no Guia Michelin (2007), por isso lotado.
- **Jōdogahama** (Iwate): paisagem de rochas, pinheiros e praia; passeio de barco (dá para alimentar gaivotas com **umineko-pan**), banho de mar no verão e pesca.

## Kushi-katsu
**Kushi-katsu** (ou kushi-age): carne, legumes e frutos do mar no espeto, empanados e fritos — especialidade de Osaka (Minami, Shinsekai). O molho é compartilhado: regra do **"não molhar duas vezes"** (não mergulhe de novo depois de morder).

## Takoyaki
Bolinhos de massa de trigo com pedaços de polvo, grelhados numa chapa de cavidades redondas; por cima, molho, **katsuobushi** e alga em pó. Surgiu em Osaka; come-se em restaurantes e barracas de festival.

## Yuba (película de tofu)
Ao ferver leite de soja forma-se uma película fina: a **yuba**. Tipos: **sashimi-yuba** (crua), **maki-yuba** (em camadas), **hoshi-yuba** (seca). Comum na **shōjin-ryōri** (comida vegetariana de templo), logo frequente em Kyoto, Nara e Nikko.`,
  },
  {
    title: 'Lição 7',
    bodyPt: `## Festivais e mikoshi
Nos festivais, o **mikoshi** (andor, tido como o "veículo dos deuses") é carregado pelas ruas por muita gente de **happi/hanten** e **hachimaki**, ao grito de "soiya, soiya" ou "wasshoi". Quem pode carregar varia (só moradores antigos, ou voluntários). Para ajudar, contate os organizadores do cartaz.

## Associação de bairro (chōnaikai)
O **chōnaikai** (ou **jichikai**) é uma organização voluntária de moradores, com mensalidade, que faz limpeza, vigilância, festivais e clubes de idosos/crianças. Nas grandes cidades muitos não participam, mas conviver com vizinhos ajuda — sobretudo em desastres (informação de abrigos, água, recursos).

## Murais e kairanban
Há **murais** (quadros de avisos) pela cidade com mensagens da prefeitura/associação: obras, coleta de lixo, segurança, falecimentos, eventos. Outro meio é o **kairanban** (circular): papéis num suporte passam de casa em casa — ao receber, carimbe/assine e repasse (regras variam por bairro).

## Rádio de prevenção de desastres
Em desastre, alto-falantes na cidade e receptores em casa anunciam avisos, alertas e instruções de evacuação. Em dias normais, dão recados da polícia e de eventos. Em muitas regiões tocam música de fim de tarde (~17h) avisando as crianças para voltarem para casa — também serve de teste do sistema.

## Shows de fogos (hanabi)
No verão, em parques, orlas e margens de rio, com barracas e clima de festival. Os famosos atraem mais de 1 milhão (Sumida em Tóquio, Nagaoka em Niigata) — chegue cedo para um bom lugar; alguns têm assentos reservados.

## Michi-no-eki (estação de estrada)
Como uma área de serviço, mas em rodovias comuns: estacionamento, banheiros, restaurantes e lojas, além de centro turístico com frutas/legumes locais, pratos regionais e souvenirs; alguns têm parque, museu ou onsen.

## Bon-odori
Dança do período **Obon** (agosto, evento budista pelos antepassados): em volta de uma **yagura** (torre), todos dançam em círculo repetindo os mesmos passos — fácil de aprender, qualquer um entra. Há barracas para quem prefere só comer.

## Yukata
Quimono simples de algodão fino, com faixa, sem roupa de baixo; usado no verão e em ryokan. Hoje homens e mulheres usam em festivais e fogos. Preços variam (há kits baratos com faixa e tamancos); há muitos vídeos ensinando a vestir.

## Brechós / feiras de usados (furima)
**Furima** (de "flea market", também **nomi-no-ichi**): vende-se e compra-se usado, popular no Japão. Em parques e estacionamentos:
- Em geral, empresas não vendem; pessoas se inscrevem para um espaço.
- Vendem-se itens usados do dia a dia (roupa, brinquedos), não arte cara nem antiguidades.
- A entrada é grátis.
- É comum o comprador pedir desconto.`,
  },
  {
    title: 'Lição 8',
    bodyPt: `## Festivais de intercâmbio internacional
Os **kokusai kōryū matsuri** são organizados por governos locais e associações para aproximar estrangeiros e japoneses: culinária internacional, música e dança, barracas e concursos de discurso, em parques ou centros culturais. Busque "(cidade) 国際交流フェスティバル" online. É ainda melhor participar como voluntário ou apresentando algo.

## Concursos de discurso em japonês
Os **supīchi-taikai** (ou *benron-taikai*) para estrangeiros vão de grandes nacionais a locais/escolares. O processo: pense na sua experiência de estudar/viver no Japão, escreva o discurso e apresente diante de uma plateia; juízes pontuam e há prêmios (dinheiro, vale-livros, produtos locais). Inscreva-se enviando o texto; leia bem as regras (duração, requisitos de residência) — em geral qualquer não nativo pode participar.

## Concursos de karaokê
Nos concursos de karaokê (também **nodojiman-taikai**) compete-se para ver quem canta melhor. Requisitos variam (grátis ou pagos; com ou sem prêmio). Os grandes nacionais pedem uma gravação na inscrição; os pequenos (festivais locais) aceitam qualquer um, às vezes inscrição na hora.`,
  },
  {
    title: 'Lição 9',
    bodyPt: `## Ano-Novo (Oshōgatsu)
A maior festa anual. No fim de ano e Ano-Novo quase não se trabalha; muitos voltam à terra natal ou viajam.
- **Decorações**: **kadomatsu** (pinheiros no portão), **shimenawa/shimekazari** (corda sagrada) e **kagamimochi** (bolo de arroz para os deuses) dentro de casa.
- **Nengajō** (cartões de Ano-Novo): postados no fim do ano e entregues todos em 1º de janeiro, com a saudação e o signo do ano. Hoje muitos preferem mensagens por LINE/Messenger/redes sociais.

## Osechi e ozōni
- **Osechi-ryōri**: a refeição do Ano-Novo, em caixas de camadas, com pratos de bom presságio — **kazunoko** (ova de arenque = filhos), **kuromame** (feijão preto = trabalhar bem), **kuri-kinton** (dourado = riqueza).
- **Ozōni**: sopa com **mochi**; tempero/ingredientes variam (Kantō: shoyu em caldo claro; Kansai: missô; o mochi é quadrado ou redondo conforme a região).

## Hatsumōde
Primeira visita do ano a um templo/santuário. Os famosos lotam (horas de fila). Dá para fazer na noite de 31/12, oferecendo **osaisen** (oferta em dinheiro) à meia-noite, no fim da contagem regressiva.

## Otoshidama
Dinheiro dado às crianças no Ano-Novo, num envelope (**otoshidama-bukuro** / **pochi-bukuro**). O valor depende da idade e da relação — em geral ¥1.000 a ¥5.000 por criança.

## Dia da Maioridade (Seijin-no-hi)
Feriado na 2ª segunda de janeiro, celebrando quem virou adulto. Os governos locais fazem cerimônias (em salão/ginásio) com discursos e apresentações; reencontrar amigos de escola é o melhor para muitos. Mulheres usam **haregi** (quimono de gala); homens, quimono ou terno. A maioridade era aos 20, mas desde 2022 passou a 18 (cada cidade decide a idade da cerimônia).

## Eventos anuais
- **Hinamatsuri** (3/3): saúde das meninas; expõem-se **hina-ningyō**; come-se chirashi-zushi e **hina-arare**, bebe-se **amazake**.
- **Kodomo-no-hi** (5/5): Dia das Crianças (antigo Tango-no-sekku, dos meninos); **koinobori** e bonecos de maio; **kashiwa-mochi** e **chimaki**; banho de **shōbu** (íris).
- **Tanabata** (7/7): lenda de Orihime e Hikoboshi, separados pela Via Láctea e reunidos só nesse dia. Escrevem-se desejos em tiras (**tanzaku**) penduradas em bambu.
- **Natal**: virou evento comercial (sem feriado nem peso religioso); passa-se com parceiro/amigos, come-se frango e bolo. Logo depois, tudo vira preparação para o Ano-Novo.

## Mochitsuki
Fazer **mochi** socando arroz glutinoso cozido no **usu** (pilão) com o **kine** (mão de pilão), no fim do ano. Hoje costuma ser em eventos de escolas, associações e empresas (**mochitsuki-taikai**), onde às vezes qualquer um pode socar e provar mochi fresquinho.`,
  },
  {
    title: 'Lição 10',
    bodyPt: `## Funerais (sōshiki)
Tem duas cerimônias: o **otsuya** (velório, à noite) e o **kokubetsu-shiki** (no dia seguinte) — vá às duas se era próximo, a uma se não. Vista **mofuku** (luto) ou preto formal (homem, gravata preta — vende-se em konbini e loja de ¥100). Leve **kōden** (dinheiro de pêsames) num **kōden-bukuro** com seu nome (~¥3.000 a ¥10.000, conforme a relação). À família, diga **"go-shūshō-sama desu"**.
Num funeral budista faz-se **shōkō** (oferecer incenso): cumprimente a família, o altar e o monge; depois:
- pegue uma pitada de incenso com polegar, indicador e médio e leve-a à altura da testa;
- deixe cair no incensário;
- repita ~3 vezes (varia por seita), junte as mãos diante do altar e curve-se à família ao voltar.

## Etiqueta de celular
É rude falar ao celular no trem/ônibus — ponha em **manaa mōdo** (silencioso). **Aruki-sumaho** (mexer no celular andando) é perigoso, há cartazes alertando. Usar celular dirigindo carro ou moto é ilegal.

## Festa de casamento
A cerimônia costuma ser em igreja ou santuário; depois há o **hirōen** (recepção), geralmente em hotel, para família e amigos, que levam **go-shūgi** (dinheiro). Quem quer algo casual reserva um restaurante; alguns fazem um **niji-kai** (after). A recepção é mais formal (parentes e VIPs); a festa, mais barata, para amigos que pagam para ir.

## Omimai (visitar quem está internado)
**Não** leve plantas com raiz (a palavra "criar raiz" lembra "ficar de cama"). Muitos hospitais hoje proíbem até buquês (risco de infecção) e têm regras sobre comida — confira antes de ir.

## Festa de casa/prédio novo
A **shinchiku party** / **shinkyo ohirome-kai** celebra a construção de uma casa ou a compra de um apartamento novo (convidam-se amigos, parentes, vizinhos); empresas também fazem ao erguer um prédio. Pode ser formal ou casual. O presente é o **shinchiku-iwai** (ou dinheiro, se não há festa).

## Costumes regionais
Algumas regiões têm costumes próprios em festas: o **otōri** (Ilha Miyako, Okinawa), em que todos bebem **awamori** do mesmo copinho após a fala do "pai"; em Kōchi, o **kenpai/henpai** (oferecer e retribuir saquê no mesmo copo entre níveis). Há também costumes únicos de comida, casamento e funeral por região.

## Praças de alimentação (food court)
Área ampla com vários balcões de autoatendimento (hambúrguer, frango frito, ramen, curry, gyū-don, sushi, takoyaki...), em shoppings, mercados, áreas de serviço e aeroportos. Peça, pague e pegue a comida (às vezes um número num painel ou uma campainha avisa quando fica pronta); ao terminar, devolva a louça ao ponto de coleta.

## Otōshi (couvert)
No izakaya, junto do oshibori vem uma tigelinha de comida que você não pediu: o **otōshi** (ou **tsukidashi**), um por pessoa. Não é grátis — custa ~¥300–500 e funciona como **couvert** (em vez de gorjeta).`,
  },
  {
    title: 'Lição 11',
    bodyPt: `## Tamanhos de roupa
- **Camisas/jaquetas**: letras S, M, L. Do menor ao maior: XS → S → M → L → LL (XL/2L) → 3L (XXL); em roupa esportiva, "O" (Overlarge) = LL. Roupa feminina às vezes usa número: 7≈S, 9≈M, 11≈L, 13≈LL. Atenção: S/M/L variam por país (um L americano pode ser LL no Japão; um L chinês, S/M). Prove e consulte um vendedor.
- **Calças/saias**: cintura em cm (peça para medirem); às vezes em polegadas. Encurtar/ajustar é **o-naoshi** (muitas vezes grátis na loja onde comprou).
- **Calçados**: em cm (do dedão ao calcanhar); largura em EE/EEE/EEEE (mais "E" = mais largo).

## Telefones de emergência
Decore **110** e **119**. A **polícia é o 110** (crime ou acidente — perguntam se é "incidente" ou "acidente"). Os **bombeiros/ambulância é o 119** (incêndio ou ambulância). Vão perguntar onde você está, o que houve, nome e contato — fique calmo. Em dúvida se chama ambulância, em alguns lugares ligue **#7119** para orientação. Ambulância é gratuita.

## Cartões de pontos
Acumulam pontos nas compras, trocáveis por itens ou usados como dinheiro. Alguns valem em muitas lojas (**T Point**, **Ponta**); outros são de uma loja só. Em geral, ~1 ponto (¥1) a cada ¥100; às vezes há promoções de pontos em dobro.

## Balcão de informações do shopping
Os grandes têm balcão (**information**) que tira dúvidas e cuida, junto com a segurança, de crianças e objetos perdidos.

## Liquidações (sēru / bāgen)
Lojas fazem liquidação sobretudo em janeiro e julho (após os bônus), além de aberturas, fechamentos e reformas. Veja no site da loja ou na revista comunitária.

## Feiras em lojas de departamento
Ao longo do ano há feiras temáticas por tempo limitado: produtos de uma região (Feira de Hokkaido, de Kyushu), de **ekiben** (marmitas de estação), ou por data (Valentine's em fevereiro, ingressantes em abril, Dia das Mães em maio) e por estação.`,
  },
  {
    title: 'Lição 12',
    bodyPt: `## Sites e apps de usados (furima)
**Furima** (de "flea market"): compram-se roupas, livros e eletrônicos usados baratos em sites/apps de venda e leilão — **Mercari**, **Yahoo! Auctions**. Para vender: crie conta, fotografe, descreva, defina o preço e clique em **shuppin** (publicar). Regras de pagamento e envio variam — leia as instruções.

## Negociar preço
Em geral não se pechincha em loja (cada item tem etiqueta), mas em **loja de eletrônicos** é comum. Pode haver o aviso "se for ¥1 mais caro que outra loja, fale conosco". Tente: **"ikura made yasuku narimasu ka?"** ("até quanto baixa?"), mostrando o preço de outro site. Às vezes pede-se pontos extras em vez de desconto.`,
  },
  {
    title: 'Lição 13',
    bodyPt: `## Centros culturais e esportivos públicos
Os **centros culturais** (bunka sentā/kaikan, *shimin plaza*), de governos locais, costumam ter sala de concertos/teatro, biblioteca, galeria e balcão de informações turísticas. Os **centros esportivos** (sports center, *shimin taiikukan*) têm ginásio, campo, piscina, dōjō e, às vezes, academia e banho por taxa baixa. São serviços públicos — veja o que há na sua região.

## Bibliotecas
Públicas (municipais, provinciais ou nacionais), as locais são as mais práticas. Têm livros para todas as idades, e muitas têm revistas, mangás, livros em língua estrangeira, CDs e DVDs para emprestar de graça; o catálogo costuma estar online, e há eventos (leituras, sessões de filme). Para usar, faça a carteirinha levando um documento com endereço (zairyū card, carteira de motorista).

## Yasashii Nihongo (japonês fácil)
**Yasashii Nihongo** é um japonês simplificado, mais fácil para não nativos. Características:
- furigana nos kanji ou palavras em hiragana;
- evitar palavras e gramática difíceis;
- frases curtas;
- evitar formas honoríficas.

Usado em avisos de governos locais (sobretudo em desastres) e em sites de notícias, para alcançar o maior número de pessoas.`,
  },
  {
    title: 'Lição 14',
    bodyPt: `## Lavanderia (dry cleaning)
Leve a roupa à **kuriiningu** e busque depois de pronta. Preços variam: roupas comuns custam algumas centenas de ienes; itens que não se lavam em casa (couro, caxemira, pluma, quimono), alguns milhares. Camisa comum leva ~2–3 dias (há serviço no mesmo dia). Muitas também limpam calçados, bolsas e pelúcias, ajustam roupa, alugam futon ou guardam casacos de inverno.

## Serviço de entrega (takuhaibin)
Permite enviar encomendas para quase todo o Japão, com rapidez e precisão. Leve o pacote ao konbini (ou a um posto da transportadora). Escolha **pago no envio** ou **na entrega**; o custo depende do tamanho e da distância, e dá para marcar data/horário. Se você não estiver em casa, deixam um **aviso de ausência** — peça reentrega (telefone ou online), redirecione ao trabalho ou retire no konbini.

## Barbearia e salão de beleza
Há dois tipos legais, sem grande diferença para o cliente:
- **Barbearia (rihatsuten / tokoya)**: poste vermelho-azul-branco na porta; corta, lava e faz a barba; clientes em geral homens; costuma não precisar de reserva.
- **Salão de beleza (biyōin)**: lavar, cortar, colorir, alisar/ondular, unhas, *head spa*, e ajuda para vestir quimono; mais mulheres, mas também homens.

Preços: barbearia independente ~¥3.000–4.000; perto de estação ~¥1.500–2.000 (corte+lavagem+barba); salão ~¥2.000–6.000 só corte (estilista famoso, ¥10.000+). Há cortes rápidos (~10 min) e salões só de corte/cor sem lavagem (~¥1.000). Na barbearia: senha/espera, peça o estilo, corte, lavagem, barba (toalha quente), secagem e pagamento. No salão: **reserve** antes; ficha de cadastro na 1ª vez; mostre uma foto do estilo desejado.

## Serviços públicos para estrangeiros
Muitos governos locais têm um **Gaikokujin Sōdan Center** (centro de consulta para estrangeiros), com atendimento em vários idiomas: orientação sobre problemas do dia a dia, ajuda com formulários e, às vezes, intérprete por conferência (lei, bem-estar, imigração). Alguns usam voluntários que repassam informações e levam pedidos dos estrangeiros ao governo.`,
  },
  {
    title: 'Lição 15',
    bodyPt: `## "Cool Biz"
Antes, trabalhadores usavam terno e gravata mesmo no calor. Em 2005 o Ministério do Meio Ambiente lançou o **Cool Biz**: pôr o ar-condicionado do escritório em 28 °C e deixar a roupa mais leve (reduz CO₂). Vai de junho a setembro — camisa de manga curta, sem gravata nem paletó; alguns usam camisa havaiana ou a okinawana **kariyushi**.

## Sacolas plásticas e "my bag"
As sacolas plásticas eram grátis, mas desde julho de 2020 passaram a ser **pagas** (mercados, konbini, drogarias, lojas, takeout). Cobrar reduz o lixo plástico, a poluição marinha, o CO₂ e o uso de petróleo. Melhor levar a sua sacola reutilizável — **mai baggu** / **eco baggu**.

## Separação do lixo
Na maior parte do Japão é preciso separar o lixo antes da coleta (e nas lixeiras públicas). Em geral:
- **Queimável** (*moeru gomi*): resto de comida, papel, madeira, plásticos, isopor, borracha, couro. Coleta ~2× por semana.
- **Não queimável** (*moenai gomi*): vidro, metal, cerâmica. Coleta ~1×/semana ou quinzenal.
- **Reciclável** (*shigen gomi*): garrafas de vidro, latas, PET, papel usado (jornal, revista, papelão). ~1×/semana; em alguns lugares separa-se ainda mais (PET, lata de aço, de alumínio, vidro claro e colorido). Muitos mercados têm caixas de coleta.
- **Lixo volumoso** (*sodai gomi*): móveis, bicicletas, futon, tapetes — não entram na coleta comum; é preciso solicitar e pagar (telefone/internet). Eletrodomésticos (lavadora, TV, ar, geladeira, secadora, PC) **não** são sodai gomi — vão por empresa específica.

O conteúdo de cada categoria muda por cidade; siga o manual da prefeitura (há versões em outras línguas) para evitar atritos com vizinhos.`,
  },
  {
    title: 'Lição 16',
    bodyPt: `## Desastres naturais e mapas de risco (hazard map)
O Japão tem tufões, terremotos, tsunamis e nevascas, e cada área sofre desastres diferentes. O **hazard map** do governo local prevê onde e quão grave um desastre pode ser, e mostra áreas e rotas de evacuação. Pegue na prefeitura, baixe no site, ou veja o portal do Ministério (MLIT). Saiba quais desastres podem ocorrer onde você mora e para onde evacuar.

## Mochila de emergência
Junte numa mochila o que precisaria num desastre e deixe-a num lugar fácil (entrada de casa): água e comida para vários dias, remédios de uso contínuo, lanterna, bateria portátil, rádio portátil, luvas, kit de primeiros socorros, capa de chuva, dinheiro e valores, passaporte e cópia do cartão do seguro de saúde.

## Magnitude e intensidade (shindo)
A **magnitude** indica o tamanho do terremoto (uma só por evento, escala universal). A **intensidade (shindo)** indica a força do tremor **em cada local** (varia conforme o ponto). No Japão a escala de shindo tem 10 níveis (0 a 7, com 5 e 6 divididos em inferior e superior):
| Nível (shindo) | Efeito |
| --- | --- |
| 0 | Quase ninguém sente; só sismógrafos registram. |
| 1 | Algumas pessoas paradas em ambiente fechado sentem. |
| 2 | Muitas pessoas dentro de casa sentem; lustres balançam. |
| 3 | Quase todos sentem; acorda quem dorme. |
| 4 | Susto geral; objetos pendurados balançam forte. |
| 5 inferior | Medo; difícil andar; livros caem das estantes. |
| 5 superior | TVs/louças caem, vidros quebram, muros tombam; faltam luz/gás/água. |
| 6 inferior | Difícil ficar em pé; móveis se deslocam; prédios podem inclinar. |
| 6 superior | Só se anda rastejando; casas desabam; rachaduras e deslizamentos. |
| 7 | Móveis voam; prédios desabam; a cidade para; a paisagem muda. |

## Divisão regional do Japão
Informações de terremoto e tufão vêm por regiões — saiba como se chama a região onde você mora.

## Simulado de desastre (bōsai kunren)
Empresas e escolas fazem simulados periódicos (também associações, lojas, hotéis, hospitais); se estiver presente, pode participar. Muitos ocorrem em 1º de setembro (Dia da Prevenção). Treina-se evacuação e rota; às vezes uso de extintor, sala de fumaça, carro simulador de terremoto, primeiros socorros e **DEA/AED**. Bombeiros podem dar orientações. Participe e leia os manuais da prefeitura.`,
  },
  {
    title: 'Lição 17',
    bodyPt: `## Wadaiko (tambor japonês)
**Wadaiko** são os tambores tradicionais, de vários tamanhos, usados em festivais e artes cênicas. Cada região tem sua tradição, passada de geração em geração (às vezes aprendida desde a primária). Toca-se em grupo, com vários tambores; há grupos amadores que dão concertos e tocam em festivais.

## Quando te elogiam
Se ouvir **"nihongo ga jōzu desu ne"** ("seu japonês é bom"), pode aceitar com **"hontō desu ka? arigatō"**. Mas, ao serem elogiados, japoneses costumam responder se diminuindo — **"iie, mada mada desu"** ("ainda não sou tão bom") — por valorizarem a **humildade (kenson)**, achando melhor não parecer orgulhoso. Exemplos: oferecer comida deliciosa dizendo que "não é nada de especial"; ou, elogiados sobre o filho/cônjuge, responder com algo modesto ("mas ele não nos obedece"; "em casa ele não serve para nada"). Isso surpreende estrangeiros sem essa tradição.

## Doramas japoneses
A maioria tem 10–12 episódios de ~50 min ("bite-sized"). Às vezes ficam grátis no site da emissora após irem ao ar; com assinatura (Netflix, Hulu, Amazon Prime), assiste-se quando quiser — cada serviço tem seu foco, e quase todos têm teste grátis. **Cuidado ao estudar por doramas**: os de época usam linguagem antiga; os de profissões específicas (polícia, médico), palavras difíceis; os do interior, dialetos. Comece pelos de cotidiano moderno, com legendas.`,
  },
  {
    title: 'Lição 18',
    bodyPt: `## Shokunin (artesão/mestre)
**Shokunin** são pessoas que, após anos de treino, dominam uma técnica avançada e fazem coisas à mão — o mestre de sushi do texto, mas também carpintaria, gesso, laca, bambu, tatami, guarda-chuvas, tempura, doces japoneses etc. O número de jovens que querem ser shokunin vem caindo (são muitos anos de treino árduo como aprendiz). Alguns governos e empresas mantêm escolas de formação de shokunin.

## Festa de despedida (sōbetsu-kai)
Ao ser transferido, mudar de carreira ou se aposentar, costuma-se fazer um breve discurso no último dia; a pessoa recebe buquê, presente ou cartão dos colegas. A festa de despedida (**sōbetsu-kai**) acontece em restaurante/izakaya ou numa sala da empresa. Fazê-la ou não depende da empresa e do tempo de casa.

## Como continuar aprendendo japonês
Terminado o material, continue estudando — ainda mais se mora no Japão. Caminhos: aulas de grupos de intercâmbio locais; estudar sozinho com notícias, doramas e anime; e usar sites/apps (a maioria grátis). O portal **NIHONGO e-na** (nihongo-e-na.com) busca recursos por tema e nível; e o **JF Japanese e-Learning Minato** (minato-jf.jp), da Japan Foundation, tem cursos gratuitos por nível e objetivo (precisa de cadastro). Experimente!`,
  },
]

// ---------------------------------------------------------------------
//  中級 (Pre-Intermediate / B1)
// ---------------------------------------------------------------------
const PRE_INTERMEDIATE_NOTES: StudyNote[] = [
  {
    title: 'Lição 1',
    bodyPt: `## Sumô
Esporte tradicional: dois lutadores se chocam num ringue circular; perde quem sai dele ou toca o chão com algo que não a sola dos pés. Originou-se como rito religioso e hoje é o **kokugi** (esporte nacional). Lutas curtas (segundos). Há 6 torneios por ano (**hon-basho**, 15 dias cada): janeiro/maio/setembro em Tóquio (Kokugikan), março em Osaka, julho em Nagoya, novembro em Fukuoka. Muitos lutadores estrangeiros viraram **yokozuna** (grande campeão), a maioria da Mongólia. Ingressos são difíceis; uma opção é o **chihō jungyō** (turnês regionais), com lutas, fotos e autógrafos.

## Rakugo
Arte cênica em que um único contador (**rakugoka**) interpreta vários personagens sentado, mudando a voz e a direção do rosto, usando só um leque e uma toalha. Histórias em geral cômicas, com um **ochi** (desfecho engraçado). Vê-se em teatros **yose**, em encontros (**rakugo-kai**) e em vídeos online (alguns legendados).

## Nihon ou Nippon?
"日本" tem duas leituras. **Nihon** é a do dia a dia (nihon-go, nihon-ryōri, nihon-bunka). **Nippon** é mais formal/solene (no nome oficial do país, no "NIPPON GINKO" das cédulas, e em torcidas: "Ganbare! Nippon!"). Ao falar, use **nihon**; ao ouvir **nippon**, é o mesmo.

## Festivais de outros países
Em várias cidades há festivais que apresentam culturas estrangeiras (Tailândia, Vietnã, Indonésia, Brasil etc.), em geral em parques no fim de semana. Tem comida típica, produtos, dança e música — quase sempre grátis. Boa chance de encontrar conterrâneos e se ligar à comunidade local.

## Teatro japonês
Há desde artes clássicas — **Kabuki**, **Nō**, **Kyōgen** — até o teatro moderno. **Takarazuka** é uma companhia só de mulheres (que fazem papéis masculinos e femininos), com mais de 100 anos. **Gekidan Shiki** é uma das maiores companhias (de musicais da Disney a produções originais).

## COVID-19
No Japão a doença é chamada **korona**. Espalhou-se na primavera de 2020; em abril/2020 declarou-se "estado de emergência" (saídas restritas, escolas/lojas fechadas, máscaras, distanciamento). Em maio/2023 deixou de ter tratamento especial, passando a ser como a gripe. Hoje a vida voltou quase ao normal e o uso de máscara é opcional (mas pode ser exigido em hospitais e casas de repouso).`,
  },
  {
    title: 'Lição 2',
    bodyPt: `## Apps de mangá
Muito populares: hoje, sobretudo entre jovens, lê-se mais mangá no celular do que em papel. Há propaganda nas redes que mostra só um trecho para atrair leitores. Modelos de leitura grátis: alguns totalmente livres, outros com os primeiros capítulos, "grátis após assistir anúncio" ou "espere e leia" (libera com o tempo). Muitos autores publicam direto nas redes, e os sucessos viram livros. Bom para treinar conversa, kanji e vocabulário.

## Onomatopeias
Palavras que expressam sons, movimentos e sentimentos — usadíssimas. Tipos: **giseigo/giongo** (sons: latido, vento), **gitaigo** (estado/movimento: "à toa", "brilhando") e **gijōgo** (sentimentos: irritação, empolgação, susto). Há até várias para a chuva caindo e uma para o silêncio. Aprendem-se bem em mangá; sites úteis: Hikidasu, Erin, Anime & Manga (Japan Foundation).

## Usos especiais de furigana
Em mangá e letras de música, um kanji às vezes recebe um furigana que **não** é a leitura normal, para indicar um sentido. Ex.: 勇者 ("herói") com a leitura これ ("este"); ou 地球 lido como "planeta", 宇宙 como "céu". Repare como o kanji original e a leitura escolhida se conectam.

## "SLAM DUNK" e mangás de esporte
**SLAM DUNK** (de Inoue Takehiko, Shōnen Jump, 1990–1996) conta Sakuragi Hanamichi, um iniciante total no basquete que cresce junto com o time — não é só esporte, é o drama dos personagens. Em 2022 saiu o filme *THE FIRST SLAM DUNK*. Há muitos mangás esportivos: *Captain Tsubasa* (futebol), *Haikyu!!* (vôlei), *O Príncipe do Tênis*.

## Mangá em outras mídias
Mangás populares viram anime, filmes e doramas com atores (ex.: *Nodame Cantabile*), e até peças e musicais — o chamado **2.5D** ("2D" do mangá encenado em "3D"). Obras como *ONE PIECE*, *Nausicaä* e *Lupin III* já foram encenadas como **kabuki**, unindo mangá e cultura tradicional.

## Touken Ranbu ONLINE
Jogo online (desde 2015) em que espadas japonesas viram personagens (**tōken danshi**); o jogador é um **saniwa** que protege a história. Virou anime, peças e musicais. Despertou interesse por espadas reais em museus e santuários, ajudando a preservá-las.

## Yonezu Kenshi
Cantor e compositor popular. Começou na internet com Vocaloid (como **HACHI**) e estreou com o nome real em 2012. Sucessos: "Lemon", "Fireworks", "Flamingo". Também compõe para outros (o hit "Paprika", do grupo Foorin) e faz temas de filmes (*O Menino e a Garça*). Marca registrada: melodias e letras próprias, capas que ele mesmo desenha e videoclipes autorais.

## Doramas gastronômicos e "Kodoku no Gourmet"
Os **doramas de comida** fazem sucesso. *Kodoku no Gourmet* ("O Gourmet Solitário", de um mangá) acompanha um homem de meia-idade que come sozinho, em silêncio, em vários restaurantes — estilo simples, foco na comida. Outros: *Wakako-zake*, *O Que Você Comeu Ontem?*. Muitos usam restaurantes reais, gerando o **seichi junrei** (peregrinação aos locais) e movimentando os estabelecimentos. Ótima porta de entrada para a cultura gastronômica japonesa.`,
  },
  {
    title: 'Lição 3',
    bodyPt: `## Unidades próprias do Japão
Usam-se metro e litro, mas algumas unidades tradicionais persistem:
- **Jō (畳)**: tamanho de um tatami (no anúncio imobiliário, 1 jō ≈ 1,62 m²). Um quarto de **6 jō** é padrão; **4,5 jō** (*yo-jō-han*) é pequeno. Hoje grafa-se também 帖.
- **Tsubo (坪)**: ~3,3 m² (≈ 2 tatamis), para áreas e terrenos; um 2–3LDK tem ~15–20 tsubo. Preço de terreno às vezes vem por tsubo. Para áreas enormes usa-se "x vezes o Tokyo Dome" (46.755 m²).
- **Gō (合) e shō (升)**: para líquidos e grãos. 1 gō = 180 ml; 1 shō = 10 gō = 1.800 ml. Saquê/shōchū vendem-se em garrafa de 4 gō (720 ml) ou de 1 shō (1.800 ml); arroz mede-se em gō.

## Alugar um quarto
Pontos importantes do sistema imobiliário:
- **Imobiliárias** (*fudōsan*) perto das estações, e sites como **SUUMO** e **HOME'S**.
- **Shikikin** (caução, em geral devolvida, menos o reparo) e **reikin** (luvas ao proprietário, não devolvida) — costumam ser 1–2 meses de aluguel; já há imóveis sem reikin.
- **Contrato**: em geral 2 anos, com **kōshin-ryō** (taxa de renovação, ~1 mês) ao renovar.
- **Fiador** (*hoshōnin*): se não houver, usa-se **empresa de garantia** (com taxa).
- **Direção do quarto**: os voltados ao **sul** (mais sol) são valorizados; ao norte, evitados (frios, roupa não seca) — influencia o aluguel.
- **Unit bath**: banho, vaso e pia num só cômodo (aluguel mais barato). Confira se são separados.
- **Gás**: encanado (*toshi gasu*, mais barato, comum nas cidades) ou de botijão (*propano/LP*, mais caro, comum no interior).
- **Aluguel a estrangeiros**: ainda há recusas, mas cresce a oferta e o atendimento em outras línguas.

## Mudança (procedimentos)
**Antes**: avise o proprietário (~1 mês antes) e marque a vistoria; na prefeitura atual, faça o **tenshutsu-todoke** (saída) e receba o **tenshutsu-shōmeisho**; avise luz/água/gás/internet; faça o reencaminhamento de correspondência no correio. **Depois**: na nova prefeitura, faça o **tennyū-todoke** (entrada) levando o comprovante de saída + zairyū card / My Number, em até **14 dias** (o novo endereço vai no verso do cartão); reative os serviços; atualize o endereço na CNH (delegacia) e em banco/operadora.`,
  },
  {
    title: 'Lição 4',
    bodyPt: `## Problemas em casa
Em imóvel alugado podem surgir vazamentos, ar-condicionado quebrado, ninho de vespa na varanda ou perda de chave. Primeiro, **contate o proprietário ou a administradora** — eles costumam mandar alguém consertar. O contato de emergência está no contrato ou no **guia de entrada** (*nyūkyo no shiori*); às vezes há "suporte 24h". Evite consertar por conta (pode não ser ressarcido ou ser cobrado na saída). Cuidado com panfletos de empresas que cobram muito mais que o anunciado.

## Ninhos de vespa
Da primavera ao outono, vespas fazem ninho em varandas, beirais e na unidade externa do ar-condicionado. Atenção a duas: **ashinagabachi** (marimbondo, corpo fino, pernas penduradas, calmo; ninho tipo chuveiro) e **suzumebachi** (vespa-gigante, grande e agressiva, picada perigosa — pode dar reação alérgica e exigir hospital; ninho redondo e grande). Não remova sozinho: contate o proprietário/administradora; alguns governos locais ajudam ou dão apoio financeiro.

## Conflitos com vizinhos
Em prédios há atritos por **barulho, cheiro e lixo** — diferenças culturais podem causar problemas sem você perceber (paredes finas; festas até tarde, música/instrumento alto, regras de lixo, objetos em área comum). Se for incomodado, **não fale direto** com a pessoa — procure a administradora/proprietário. Se reclamarem de você, mantenha a calma, ouça e diga o que vai fazer ("dō sureba ii desu ka?"); se não sabia ("shiranakatta desu"), explicar costuma resolver. Respeito mútuo constrói boa convivência.`,
  },
  {
    title: 'Lição 5',
    bodyPt: `## Automação em restaurantes
Cada vez mais redes usam máquinas:
- **Recepção**: digite o nº de pessoas na tela; guarde o papel com o número (pode precisar para pagar).
- **Pedido**: por **tablet** na mesa (às vezes muda de idioma) ou por **smartphone** (escaneie o QR ou use o app da rede).
- **Servir**: alguns family restaurants usam **robôs**; confira o prato, pegue e aperte o botão "pronto".
- **Pagamento**: caixas de autoatendimento na saída (escaneie o recibo; dinheiro, cartão, e-money). Na dúvida, peça ajuda ao funcionário.

## Monjayaki
Massa de trigo bem aguada com repolho, **tenkasu**, camarão etc., feita na chapa — típica da **shitamachi** de Tóquio (Tsukishima é famosa). Parecida com okonomiyaki, mas mais líquida e de textura mole/pegajosa. Faz-se um anel com os ingredientes, despeja-se a massa no centro, mistura-se e come-se direto da chapa com a espatulinha (**hagashi**), deixando dourar um pouco.

## Janken (pedra-papel-tesoura)
Jogo de mãos usadíssimo para decidir/escolher. Três formas: **guu** (pedra), **choki** (tesoura), **paa** (papel). Pedra vence tesoura, tesoura vence papel, papel vence pedra. Chama-se "saisho wa guu" (primeiro pedra) e "jankenpon"; empate é **aiko** ("aiko desho"). As chamadas variam por região.

## Cozinha de Okinawa
A antiga **Ryūkyū** teve contato com a China e o Sudeste Asiático, criando uma culinária própria com muito porco e vegetais locais:
- **Soba de Okinawa**: macarrão de trigo grosso em caldo leve de porco e peixe, com **sōki** (costela) ou kamaboko.
- **Champurū**: refogado de tofu, legumes e ovo — o mais famoso é o **gōyā champurū** (melão-amargo).
- **Sata andagi**: bolinhos fritos doces, tipo sonho.
- **Awamori**: shōchū de arroz tailandês (20–60%); envelhecido vira **kūsū**. Também a cerveja **Orion** e drinques com **shikuwasa**.

## Kyūshoku (merenda escolar)
Almoço que a escola serve; em mais de 90% das escolas públicas. O cardápio é planejado por nutricionistas (equilibrado), igual para todos (pão/arroz, prato principal, acompanhamento, leite). Pode ter pratos regionais ou de datas (chirashi-zushi no Hinamatsuri). Os alunos comem na sala e se revezam servindo (**kyūshoku-tōban**).

## Imposto da cidade natal (furusato nōzei)
Sistema em que você **doa** a qualquer cidade do Japão e abate parte do imposto que pagaria ao seu governo local. Em troca recebe **brindes** (carne, frutos do mar, frutas, arroz etc.) — o grande atrativo. Fácil de fazer online, mas é preciso completar certos passos para ter o benefício fiscal.`,
  },
  {
    title: 'Lição 6',
    bodyPt: `## Goro-awase (trocadilho com números)
Lê-se números como sons japoneses para formar palavras. Ex.: 29 = **niku** (carne), então todo dia 29 é o "Dia da Carne". Cada algarismo tem várias leituras (1: ichi/i/hito/hi; 2: ni/futa/fu; 8: hachi/ha/ya; 0: rei/maru/o...). Usos:
- **Datas comemorativas**: 22/11 = "Bom Casal", 9/6 = "Dia do Rock", 31/8 = "Dia dos Vegetais".
- **Telefones**: 4126 ("ii furo", bom banho — hotéis de onsen); 6480 ("mushiba zero", zero cárie — dentistas).
- **Anos históricos**: 794 (capital em Kyoto), 1868 (Restauração Meiji).
- **Senhas/números**: 5963 ("gokurō-san", obrigado pelo esforço), 4649 ("yoroshiku").

## Supermercados de atacado
Vendem alimentos para restaurantes/izakaya, mas qualquer um pode comprar. Quantidades maiores e mais baratas (frango/gyōza por quilo, bebida de 2 L por caixa) e muitos itens de longa duração (congelados, temperos, secos, enlatados) e produtos internacionais. Bom para economizar ou achar comida do seu país.

## Entrega de comida (demae)
**Demae** (pedir comida em casa) é antigo no Japão: soba/sushi entregavam de moto em louça de verdade, recolhida depois (lave e deixe na entrada). Hoje, nas cidades, são populares **Uber Eats** e **Demae-kan**: o restaurante faz e um entregador leva; pede-se por app/site, com muitas opções (bentō, sushi, curry, ramen...). Custa mais que comer no local, mas é prático quando se está ocupado ou com visitas.`,
  },
  {
    title: 'Lição 7',
    bodyPt: `## Centros para crianças (jidōkan)
Locais onde crianças brincam e aprendem, mantidos sobretudo por governos locais, em geral **gratuitos** (alguns só para moradores ou certas idades — confira o site). Têm brinquedos, livros, espaço para se mexer e eventos sazonais. Também apoiam quem cria filhos (encontros entre pais, consultas, palestras, informações locais).

## Times de beisebol profissional
O "Carp" do texto é o **Hiroshima Tōyō Carp**. O Japão tem **12 times** profissionais, cada um ligado a uma cidade/região, com torcida local. Ir ao estádio é ótimo mesmo sem entender muito de beisebol — vale pela atmosfera, pela torcida ritmada e por comer e beber assistindo. (Sedes em 2026 incluem Rakuten/Sendai, Nipponham/Hokkaido, Seibu/Saitama, Hanshin/Hyōgo, ORIX e Buffaloes/Osaka, SoftBank/Fukuoka, Carp/Hiroshima, Lotte/Chiba, Giants e Swallows/Tóquio, DeNA/Yokohama, Chunichi/Nagoya.)`,
  },
  {
    title: 'Lição 8',
    bodyPt: `## Shōgi
Jogo de tabuleiro com mais de 1.000 anos no Japão (origem indiana), parecido com xadrez: dois jogadores movem peças num tabuleiro 9×9 para capturar o "rei" adversário. Regras simples, mas leva tempo para dominar (ajuda raciocínio e concentração). Há profissionais (Habu Yoshiharu, Fujii Sōta) e partidas na TV/online. Para começar, procure clubes/aulas locais (site da Associação Japonesa de Shōgi); não é preciso falar japonês fluente.

## Hello Kitty (Kitty-chan)
Personagem criada em 1974 pela **Sanrio**, reconhecida pelo laço vermelho. Amada por todas as idades no mundo todo; aparece em ~50.000 produtos por ano em 130 países/regiões — um ícone da cultura **kawaii**. No perfil, "nasceu" nos arredores de Londres e adora assar biscoitos e tocar piano.

## Túmulos e cemitérios
No Japão quase sempre se faz **cremação**; as cinzas vão a um túmulo. O tradicional tem um pilar de pedra (**hakaishi**) com o nome/sobrenome ou "Túmulo dos Ancestrais". Muitos ficam em terrenos de **templos** (em áreas residenciais), e no interior há túmulos perto de casas e arrozais — o que surpreende estrangeiros. Há também **reien** (cemitérios), amplos, geridos por governos/empresas em lugares calmos, mantidos como parques e usáveis por qualquer religião. Em grandes cemitérios há túmulos de gente famosa.`,
  },
  {
    title: 'Lição 9',
    bodyPt: `## Exames de proficiência em japonês
Há vários; escolha o que combina com você:
- **JLPT** (Japanese Language Proficiency Test): o mais conhecido do mundo (1,47 milhão de inscritos em 2024). 5 níveis, N5 (fácil) a N1 (difícil); mede leitura e escuta; aprovado/reprovado, às vezes exigido para emprego/estudo/visto. Desde dez/2025 também mostra o nível CEFR (A1–C1). Duas vezes/ano (julho e dezembro).
- **JFT-Basic** (Japan Foundation): mede o japonês do dia a dia (A2); por computador, o ano todo; usado para o visto "Trabalhador com Habilidade Específica (i)".
- **Outros**: EJU (admissão em universidade), BJT (japonês de negócios), OPI/OPIc (fala). Há mais de 20 listados pela Agência de Assuntos Culturais.

## Dialetos japoneses (hōgen)
O país tem dialetos com vocabulário e pronúncia próprios (no passado as pessoas viajavam pouco). No dia a dia usam-se dialeto e **kyōtsūgo** (japonês padrão, base de Tóquio) conforme a situação.
- **Tōhoku** (Akita, Aomori...): mudanças de vogais e muitos sons sonoros; "soou como francês" para alguns; famoso pelo dorama *Oshin*.
- **Kansai** (Osaka, Kyoto): vocabulário e **entonação** bem diferentes (ōkini = obrigado; akan = não pode; nanbo = quanto); muito ouvido pelos comediantes na TV.
- **Kyūshū** (ex.: **Hakata-ben** de Fukuoka): adjetivos terminados em -ka; também o **Satsuma-ben** de Kagoshima, comum em doramas históricos.
- **Okinawa**: separou-se do japonês antes da era Nara — alguns o consideram língua à parte (línguas ryukyuanas), muito variável por ilha; hoje usa-se o **Uchinā Yamatu-guchi** (japonês okinawano).

Obs.: "**-ben**" (Ōsaka-ben etc.) é comum, mas alguns evitam por achar que pode soar pejorativo.`,
  },
  {
    title: 'Lição 10',
    bodyPt: `## Sites de japonês da Japan Foundation (JF)
A JF (que faz o Irodori) mantém vários sites/apps gratuitos:
- **JF Japanese e-Learning Minato** (minato-jf.jp): cursos por nível/objetivo, com cadastro.
- **Marugoto Plus**: pratica o coursebook Marugoto (conversa, gramática, vocabulário, kanji).
- **Erin's Challenge**: aprende com vídeos de ensino médio, legendas em vários idiomas.
- **Hirogaru**: 12 temas (artes marciais, doces, música...) por vídeos e artigos.
- **NHK World-Japan Easy Japanese**: esquetes animados, explicações em 20 idiomas.
- Também: Anime & Manga, Activate Your Japanese!, KANJI Memory Hint, Nihongo e-na.

## Aprendizado em tandem
Duas pessoas ensinam uma à outra a língua que querem aprender (ex.: um vietnamita estudando japonês e um japonês estudando vietnamita), como **iguais**, não professor-aluno. Pode ser presencial (mais informação nas reações) ou online (com pessoas distantes). Cuidado: alguns usam esses encontros para paquera ou para convidar a alguma religião — prefira serviços confiáveis (grupos de intercâmbio, aulas, apps de tandem).

## IA e o aprendizado de japonês
**IA** (inteligência artificial) já se usa em imagens, transcrição de voz e carros autônomos. A **IA generativa** cria texto/imagem a partir do que aprendeu. Para estudar japonês, dá para: pedir correção de frases suas, perguntar o significado de palavras, reescrever em japonês fácil ou traduzir, fotografar um documento difícil e pedir explicação, comparar gramática com exemplos, gerar exercícios e treinar conversa por escrito. É como um professor — mas a IA **nem sempre acerta**, então confira com alguém ou um professor.`,
  },
  {
    title: 'Lição 11',
    bodyPt: `## E-mails golpistas (phishing)
Chegam muitos golpes por e-mail, **SMS** e redes, fingindo ser bancos, cartões, lojas ou transportadoras ("há um problema na sua conta", "tentamos entregar um pacote"). Sinais: endereço estranho do remetente, erros de português/japonês, palavras de pressão ("urgente", "imediatamente"). Em dúvida, busque o título do e-mail online. Regra: **não abrir, não clicar, não responder**. Se caiu (digitou senha/cartão), troque a senha ou bloqueie o cartão; se mandou dinheiro, procure a polícia. Aja rápido e não se culpe.

## Objetos perdidos
No Japão é comum reaver o que se perde (~70% das carteiras voltam ao dono).
- Sabe onde perdeu? Contate logo o achados e perdidos (estação, empresa de ônibus, recepção da loja) e dê o máximo de detalhes.
- Na rua: vá a um **kōban** (posto policial); se não achou, preencha o **registro de perda** e aguarde. Cartões: avise a empresa para bloquear.
- **Achou** algo? Não leve para casa — entregue no kōban ou ao funcionário. Ficar com objeto alheio é crime (apropriação).

## Entrada em shows e eventos
- **Ingressos/QR**: em papel (compra online + impressão no konbini) ou eletrônico (mostra o QR na entrada).
- **Revista de bagagem**: em grandes eventos pode haver checagem; itens proibidos (garrafas, latas, câmeras, bagagem grande) ficam num guarda-volumes.
- **Antirrevenda e conferência de identidade**: a revenda (**tenbai**) é problema; pode haver checagem de ID (de todos ou por sorteio) confrontando o nome da compra e a foto.
- **Assentos**: às vezes só revelados ao escanear o QR (também antirrevenda). **Assento de arena** = cadeiras no piso plano da arena, perto do palco.

## Verificação de identidade
Confirmar que você é quem diz, mostrando documento com nome e endereço. Podem pedir: nome completo, nacionalidade, trabalho/escola, data de nascimento, endereço, telefone (oral, por escrito ou em tela). Documentos (de preferência com foto): **zairyū card** (residentes de médio/longo prazo), **passaporte** (turistas), **My Number Card**, **CNH japonesa**. Como o estrangeiro deve portar sempre o zairyū card, ele é o melhor para mostrar. Exigida ao abrir conta, contratar celular, em repartições, ao receber encomenda nominal e em eventos.

## My Number Card
Cartão IC com foto e um número de **12 dígitos** (My Number), emitido a todos os residentes (estrangeiros de médio/longo prazo também recebem o número ao se registrar; depois solicitam o cartão, no balcão ou pelo celular). Serve como ID com foto, cartão do seguro de saúde (unificado desde dez/2025), e para procedimentos, imposto e abrir conta. Para o estrangeiro nem sempre é obrigatório (há o zairyū card), mas é útil. Em jun/2026 chega o "zairyū card especial", que combina os dois.`,
  },
  {
    title: 'Lição 12',
    bodyPt: `## Kakegoe (exclamações de apoio)
Palavrinhas ditas ao fazer uma ação ou sincronizar com outros — sem sentido específico, mas comuns:
- **Sozinho**, ao levantar peso/sentar: **"yoisho"** (e variações).
- **Em grupo**, ao erguer algo junto: **"se-no"** ou **"ichi-ni-no-san"** (combine o tempo no trabalho).
- **"Ei!" / força num instante**: ao atacar no marcial, abrir uma tampa dura, ou enfim apertar "enviar".
- **Foto**: **"hai, chiizu!"** (mas como termina em "zu" a boca não sorri — daí "ichi tasu ichi wa? ni!").
- Carregar mikoshi: **"wasshoi"**. Quase caindo: **"otto"**.

## Itens úteis das lojas de ¥100
Têm muitos itens engenhosos baratos:
- **Sacos a vácuo para roupa**: tiram o ar e achatam a roupa (viagem/armazenamento).
- **Utensílios de micro-ondas**: cozinham massa, arroz, ovo, legumes — sem fogo, ideais para porção individual.
- **Prendedor de meias**: prende os pares para lavar e secar juntos.
- **Seladores fáceis**: re-selam saquinhos abertos com calor.
- **Esponjas de melamina**: limpam só com água (conhecidas como "Magic Eraser").

## Haniwa (figuras de barro)
Figuras toscas de barro em forma de pessoas, animais e construções, feitas no período Kofun (séc. III–VII) e postas nos **kofun** (túmulos de reis e nobres). Pelo visual peculiar, hoje viram personagens fofos e souvenirs (chaveiros, papelaria em museus).

## Alertas e avisos meteorológicos
A Agência Meteorológica emite, por risco de desastre: **keihō** (alerta, risco sério — proteja a vida), **chūihō** (aviso, risco menor) e **tokubetsu keihō** (alerta especial, perigo extremo, raríssimo). Há de chuva forte, inundação, neve, vento/tempestade. Também: **alertas de tsunami** (saia logo do mar, vá para o alto), **alertas vulcânicos** (níveis 1–5), **alerta sísmico antecipado** (segundos antes do tremor forte) e **alerta de insolação** no verão. Chegam por TV, apps e rádio de prevenção — evite sair e siga as instruções do governo local; instale apps e veja o hazard map.

## Os kanji de idade (才 e 歳)
"~sai" (anos) tem dois kanji: o oficial **歳** (documentos, jornais) e o **才** (originalmente "talento"), usado por ser fácil de escrever — comum em livros infantis e anotações casuais. Em situações oficiais, use **歳**; para crianças ou no informal, **才** serve.`,
  },
  {
    title: 'Lição 13',
    bodyPt: `## Internação (nyūin)
Ficar dias no hospital em tratamento. Leve seus itens (escova, copo, roupa íntima, pijama, chinelo) — alguns hospitais alugam ou têm loja. No Japão a internação tende a ser **mais longa** (apendicite pode dar ~1 semana). **Quartos**: coletivo (~4 pessoas, separadas por cortina, sem custo extra) ou privativo (privacidade, mas com **taxa de leito**, não coberta pelo seguro — salvo se não houver coletivo). Ao sair, paga-se a conta: com seguro japonês você paga só uma parte, e há o **sistema de despesas médicas altas** (reembolso acima de certo valor), também para estrangeiros com visto e seguro. Alguns hospitais oferecem **intérprete médico** (peça antes).

## Sistema educacional japonês
- **Infância (0–6)**: creche (**hoikuen**), jardim (**yōchien**) ou centro certificado.
- **Obrigatório (6–15)**: primária (6 anos) + ginásio (3) = 9 anos; em escola pública, sem mensalidade e com livros grátis.
- **Ensino médio (a partir dos 15)**: 3 anos, não obrigatório, mas ~99% cursam.
- **Superior**: universidade (4 anos), faculdade de 2 anos (**tanki daigaku**) ou escola técnica/profissional (1–4 anos); ~60% dos formandos do médio vão à universidade. Há ainda **kōsen** (5 anos, técnico, após o ginásio).
- **Pós**: mestrado (~2 anos) e doutorado (~3 anos).

## Animais de estimação
Cão e gato são os mais comuns (também coelho, hamster, pássaro, peixe, tartaruga). **Muitos prédios não permitem** — confira as regras antes; ter pet escondido pode levar a despejo ou multa. Mesmo onde é permitido, latido, cheiro e dejetos incomodam vizinhos; pet exige cuidado diário e vacinas. Para viagens, há **pet hotel** e **pet sitter**; e cresce a hospedagem que aceita pets.

## Halloween
Veio de festas europeias (colheita e espíritos). Nos EUA virou evento infantil ("Trick or Treat!"). No Japão popularizou-se nos anos 2000 por parques e lojas; em outubro há decoração laranja e doces de abóbora. Aqui crianças **não** saem de porta em porta — jovens e adultos se fantasiam e se reúnem nas ruas (Shibuya lota, com problemas de segurança). Tornou-se evento de adultos, sem peso religioso.

## Aposentadoria (taishoku)
Como a pensão começa aos **65**, muitos se aposentam nessa idade. Aposentar na idade fixada pela empresa é **teinen taishoku**; alguns saem antes. Há quem se aposente como efetivo aos 60 e siga até 65 como contratado (**reemprego pós-aposentadoria**). Trabalhar na mesma empresa do início ao fim é o **shūshin koyō** (emprego vitalício), hoje menos comum (mais gente troca de emprego ou abre negócio). Algumas pagam **taishokukin** (verba rescisória), conforme a empresa.

## Bolha econômica (Bubble)
De ~1986, o Japão viveu grande euforia ("bolha": preços altos sem valor real). Terras e ações dispararam, empresas lucraram, gastava-se livremente (clientes em clubes de Ginza, marcas de luxo, viagens). Por volta de **1990** veio o estouro: preços despencaram, empresas quebraram, muita gente perdeu o emprego — começou a longa recessão (a "década perdida").

## Expressões metafóricas
Comparações usadas no dia a dia:
- **Fio vermelho do destino** (*akai ito*): pessoas ligadas pelo destino (casais).
- **Abrir as asas** (*hane o nobasu*): relaxar e se divertir à vontade.
- **Cair no pântano** (*numa ni hamaru*): viciar-se em algo (tempo e dinheiro).
- **Jogar lenha na fogueira** (*hi ni abura o sosogu*): piorar uma situação ruim.
- **Cruzar a ponte do arco-íris**: morte de um pet (também "virou estrela", "virou anjo") — modo suave de dizer "morreu".`,
  },
  {
    title: 'Lição 14',
    bodyPt: `## Osusowake (repartir com os outros)
Dar uma porção de algo que se tem em abundância. Em kanji é お裾分け — **suso** é a barra da roupa/o pé da montanha, daí "repartir um pouco da pontinha". Faz-se quando se colhe muito, se recebe um pacote grande da terra natal, ou sobram lembranças — sem esperar retorno. Hoje, com as relações de vizinhança mudadas, ficou menos comum, mas persiste no trabalho, em dormitórios e shared houses.

## Apps de relacionamento (matching apps)
Apps para achar namoro, casamento ou amizades: cria-se um perfil (foto, hobbies), buscam-se pessoas, trocam-se "likes" e mensagens no app. Há vários tipos (casamento sério, amizade, +50, mesmo sexo). Antes mal-vistos, hoje muitos casais se conhecem assim. Há grátis, mas funções extras pedem assinatura. **Segurança**: escolha o app conforme o objetivo; não revele dados pessoais cedo; no 1º encontro, lugar público; desconfie de quem pede dinheiro ou fala de investimento.

## Sites de conselhos
Sites onde se pergunta anonimamente, de graça, e a comunidade responde:
- **Komachi** (Yomiuri): foco feminino — vida cotidiana e relações; quem posta é o **topi-nushi** (autor do tópico).
- **OKWAVE**: Q&A amplo (vida, computador, saúde, dinheiro); o autor escolhe a "melhor resposta".
- **Yahoo! Chiebukuro** (LINE Yahoo): muitos usuários; dúvidas práticas do dia a dia.

Escreva de forma clara e específica, em japonês educado, sem dados que te identifiquem. As respostas são de qualquer um (nem sempre corretas) — compare opiniões e cheque fontes oficiais; ignore respostas agressivas.`,
  },
  {
    title: 'Lição 15',
    bodyPt: `## Vlog
De "video blog": vídeos do cotidiano, hobbies, viagens etc. postados online (sobretudo no YouTube; também Instagram, TikTok, Niconico), em geral grátis. Há de tudo — vida diária, viagem, culinária, e vlogs que mostram a vida no Japão (interior das casas, ruas, refeições, transporte). Os em **japonês** servem para estudar: muitos têm legendas, então mesmo sem confiança na escuta dá para entender — são "material de estudo vivo".

## Efeitos sonoros (na fala/escrita)
Diferente das onomatopeias, imitam **sons e melodias** reais; aparecem na fala, em mangá e nas redes:
- **"jajaan"**: ao revelar/apresentar algo com surpresa (fanfarra).
- **"pinpon"**: "correto/isso!" (acerto de quiz); **"buu"**: "errado" (buzina).
- **"chiin"**: som de sino budista — quando algo é sem graça ou fracassa.
- **"pikōn"**: ao ter uma boa ideia (com a lâmpada acendendo).

## Marcas regionais de alimentos
Muitos alimentos levam o nome da região, com método e qualidade próprios. Carnes: além do **Hida** (Gifu), há **Kobe** (Hyōgo), **Matsuzaka** (Mie), **Ishigaki** (Okinawa) — só carne dentro do padrão usa o nome. Também **frango Hinai jidori** (Akita), **porco kurobuta** (Kagoshima), **melão Yūbari** (Hokkaido), **alho-poró Shimonita** (Gunma). Provar essas marcas é um dos prazeres de viajar.

## Destinos turísticos (4 e 5)
- **Takayama** (Gifu): "Pequena Kyoto de Hida", ruas do período Edo, cervejarias de saquê, festival de Takayama; o amuleto **sarubobo**.
- **Ferrovia Ōigawa** (Shizuoka): trens a vapor (SL) com fumaça preta, vista do rio Ōi e chá; a estação Oku-Ōi Kojō parece flutuar sobre a água.
- **Shimanami Kaidō** (~60 km, Ehime–Hiroshima): pontes ligando ilhas do Mar Interior de Seto; meca do **ciclismo** (a "Blue Line" guia iniciantes).
- **Kagoshima**: o vulcão ativo **Sakurajima**, banho de areia em Ibusuki, o doce **shirokuma**, porco **kurobuta**.
- **Ogasawara** (Tóquio, ~1.000 km ao sul): sem aeroporto — 24 h de balsa; natureza única (Patrimônio Natural da UNESCO, 2011), golfinhos e tartarugas.

## Flores das estações
Cada estação tem suas flores e o costume de sair para vê-las: **primavera** (sakura/hanami, nemophila, glicínia, colza); **verão** (hortênsia, girassol, lavanda de Furano); **outono** (cosmos, folhagem); **inverno** (camélia, narciso; em Okinawa a **kanhi-zakura** floresce já em janeiro, e a ameixeira anuncia a primavera).

## Formas antigas de kanji (kyūjitai)
Após a guerra (1946, lista Tōyō Kanji), simplificaram-se kanji complexos — as novas formas são **shinjitai**; as antigas, **kyūjitai**. Ainda aparecem em nomes oficiais por tradição/imagem de marca (ex.: a Ferrovia Ōigawa escreve 鐵 em vez de 鉄; Universidade Keiō; o jornal Yomiuri).`,
  },
  {
    title: 'Lição 16',
    bodyPt: `## Destinos turísticos (6 e 7)
- **Yamaguchi**: oeste de Honshū, cercada de mar; Yamaguchi foi 3º lugar na lista "52 Places to Go" do New York Times (2024). A ponte **Tsunoshima Ōhashi** (1.780 m, mar esmeralda), o santuário **Motonosumi** (123 torii vermelhos rumo ao mar) e a cidade-castelo **Hagi**.
- **Kanazawa** (Ishikawa): cidade-castelo da família Maeda; o jardim **Kenroku-en** (um dos três grandes), o bairro **Higashi Chaya**, e o peixe nobre **nodoguro**.
- **Matsushima** (Miyagi): uma das "Três Paisagens"; mais de 260 ilhas (que reduziram os danos do terremoto de 2011); passeios de barco, templo **Zuiganji**, **Godaidō**.
- **Tottori**: província menos populosa; as famosas **Dunas de Tottori** (~16 km), com camelo, paraglider e sandboard.

## "Os três xx do Japão"
Costuma-se eleger os três mais famosos de algo (**Nihon sandai ~**). Alguns são de escritos históricos, outros de promoção turística (as listas variam):
| Categoria | Os três |
| --- | --- |
| Três paisagens (三景) | Matsushima (Miyagi), Amanohashidate (Kyoto), Miyajima (Hiroshima) |
| Três jardins (三名園) | Kenroku-en (Kanazawa), Kairaku-en (Mito), Kōraku-en (Okayama) |
| Três cachoeiras (三名瀑) | Kegon (Tochigi), Nachi (Wakayama), Fukuroda (Ibaraki) |
| Três termas (三名泉) | Kusatsu (Gunma), Arima (Hyōgo), Gero (Gifu) |
| Três vistas noturnas (三大夜景) | Hakodate (Hokkaido), Kobe/Maya (Hyōgo), Nagasaki/Inasa (Nagasaki) |`,
  },
  {
    title: 'Lição 17',
    bodyPt: `## Como dispor a comida
Há convenções ao servir: peixe grelhado com a **cabeça à esquerda** e a cauda à direita (mais fácil para destros; e a esquerda é tida como o lado de honra). O **arroz vai à esquerda** e a **sopa de missô à direita**; o prato principal à frente e os acompanhamentos atrás. As louças ficam com o desenho voltado para quem come; os hashis na frente, com a ponta à esquerda. Algumas regras têm razão prática, outras não, e variam por região (há até "debate" sobre que lado do prato leva o arroz no curry). Repare nesses detalhes ao comer fora.

## Assédio (harassment)
No trabalho usa-se muito o termo "harassment":
- **Sekuhara** (sexual): palavras/atos sexuais, comentar a aparência, perguntar sobre namoro.
- **Pawahara** (de poder): superior que humilha o subordinado — gritar, agredir, sobrecarregar, ou não dar trabalho/ensino.
- **Akahara** (acadêmico): de professor a aluno (negar créditos, ignorar, criticar em público).
- **Kasuhara** (do cliente): cliente que insulta ou faz exigências absurdas a funcionários.
- Outros: **aruhara** (forçar a beber), **matahara** (gravidez/maternidade), **sumehara** (cheiro forte), **tekuhara** (zombar de quem não domina tecnologia).

Hoje é fortemente repudiado; empresas e escolas previnem. Se sofrer, **não guarde para si** — procure o canal de apoio, colegas ou amigos.

## Escrita à mão
Mesmo digitando, às vezes é preciso escrever à mão **nome e endereço** (hotel, encomendas) — vale saber. Também é preciso **ler** a letra dos outros, mais difícil que a impressa. Há kanji **abreviados** à mão (próprios do Japão, diferentes do chinês simplificado), comuns em anotações. Idosos às vezes usam escrita cursiva vertical, hoje pouco lida — se tiver dificuldade, fotografe e pergunte a uma IA.

## Atendimento a estrangeiros
Em problemas no trabalho (assédio, salário atrasado, jornada longa, sem folga) há serviços públicos de consulta em vários idiomas:
- **"Check Your Working Conditions"** (Ministério da Saúde, Trabalho e Bem-Estar): telefones de ajuda em línguas estrangeiras, com dias/horários.
- **FRESC** (Foreign Residents Support Center, Tóquio): consulta gratuita reunindo vários ministérios — trabalho, visto, saúde, educação; por telefone/online mesmo fora de Tóquio.
- Muitos governos locais têm associações de intercâmbio ou centros multiculturais. Não enfrente sozinho — procure ajuda cedo.`,
  },
  {
    title: 'Lição 18',
    bodyPt: `## Pensões (nenkin)
Dos **20 aos 59 anos** é obrigatório participar da **kokumin nenkin** (Pensão Nacional); quem trabalha em empresa entra na **kōsei nenkin** (Pensão dos Empregados). Pagando as contribuições, recebe-se pensão mensal a partir dos **65**. Estrangeiros que vivem/trabalham no Japão também participam:
- **Longo prazo**: quem contribuiu **10+ anos** recebe a pensão japonesa aos 65, mesmo se voltar ao país de origem.
- **Curto prazo** (menos de 10 anos): em geral não recebe, mas pode pedir o **pagamento de retirada de quantia fixa** (parte do que pagou).
- Países com **acordo de previdência** com o Japão podem somar os períodos de contribuição. Detalhes no site do Japan Pension Service.

## Tipos de emprego
- **Arubaito** (do alemão *Arbeit*, abreviado **baito**): trabalho curto/de poucas horas, comum entre estudantes; pago por hora, turnos flexíveis, mas sem bônus e instável (geralmente sem seguro social).
- **Paato**: quase igual ao baito, mas associado a quem voltou ao trabalho (ex.: após cuidar de filhos) e fica mais tempo.
- **Seishain** (efetivo): contrato sem prazo, salário mensal, bônus, promoção, seguro e pensão — o mais estável, mas com mais responsabilidade e possível transferência.
- **Keiyaku-shain / shokutaku-shain** (contrato por prazo determinado): condições claras; o *shokutaku* é o recontratado após aposentar.
- **Haken-shain** (terceirizado): registrado numa agência que o envia a empresas; o contrato e o salário (por hora) são com a agência.

Para estrangeiros, o que se pode trabalhar depende do **visto**: estudante precisa de "Permissão para atividade fora do status" (até **28 h/semana**; 8 h/dia nas férias longas); vistos de trabalho só permitem a área do status. Confira com a empresa ou a prefeitura.

## Hōrensō (relatar, comunicar, consultar)
Termo-chave nas empresas: junta **hōkoku** (relatar), **renraku** (comunicar) e **sōdan** (consultar) — e brinca com a palavra **hōrensō** (espinafre). É princípio básico de comunicação no trabalho:
- **Relatar**: informar o chefe sobre o andamento/resultado ("a tarefa X terminou").
- **Comunicar**: compartilhar informação necessária ("ligou o sr. X", "a máquina X falhou").
- **Consultar**: pedir conselho quando não pode decidir sozinho ("posso não cumprir o prazo; o que faço?").

O Japão valoriza compartilhar com o time em vez de decidir sozinho; pouco hōrensō pode soar como "agir por conta própria". Mesmo achando que dá conta, compartilhe — isso facilita o trabalho no Japão.`,
  },
]

export const irodoriTips: Level = {
  id: LEVEL,
  courseId: 'irodori',
  titlePt: 'Dicas para a Vida no Japão',
  descriptionPt:
    'Dicas culturais e práticas para viver no Japão, do material “Tips for Life in Japan” da Japan Foundation (Irodori), traduzidas para o pt-BR. Organizadas pelos 4 níveis do curso (入門 · 初級1 · 初級2 · 中級).',
  sections: [
    tipsSection(
      'tips-starter',
      '入門 — Starter',
      'Dicas · Starter (入門)',
      'Dicas de vida e cultura ligadas às lições do Irodori Starter (入門 / A1).',
      STARTER_NOTES,
    ),
    tipsSection(
      'tips-elementary1',
      '初級1 — Elementary 1',
      'Dicas · Elementary 1 (初級1)',
      'Dicas de vida e cultura ligadas às lições do Irodori Elementary 1 (初級1 / A2).',
      ELEMENTARY1_NOTES,
    ),
    tipsSection(
      'tips-elementary2',
      '初級2 — Elementary 2',
      'Dicas · Elementary 2 (初級2)',
      'Dicas de vida e cultura ligadas às lições do Irodori Elementary 2 (初級2 / A2).',
      ELEMENTARY2_NOTES,
    ),
    tipsSection(
      'tips-pre-intermediate',
      '中級 — Pré-Intermediário',
      'Dicas · Pré-Intermediário (中級)',
      'Dicas de vida e cultura ligadas às lições do Irodori Pré-Intermediário (中級 / B1).',
      PRE_INTERMEDIATE_NOTES,
    ),
  ],
}
