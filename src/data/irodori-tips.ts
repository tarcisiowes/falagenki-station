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
const ELEMENTARY1_NOTES: StudyNote[] = []

// ---------------------------------------------------------------------
//  初級2 (Elementary 2 / A2)
// ---------------------------------------------------------------------
const ELEMENTARY2_NOTES: StudyNote[] = []

// ---------------------------------------------------------------------
//  中級 (Pre-Intermediate / B1)
// ---------------------------------------------------------------------
const PRE_INTERMEDIATE_NOTES: StudyNote[] = []

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
