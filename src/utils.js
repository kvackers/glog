function readThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return "dark";
    } else {
        return "light";
    }
}

export function impureSetTheme(preference) {
    const html = document.querySelector('html');
    if (preference === "dark") {
        html.setAttribute("data-bs-theme", "dark");
    } else {
        html.setAttribute("data-bs-theme", "");
    }
}

export const DEFAULT_UI_STATE = {
    theme: readThemePreference(),
    tab: "rules"
};

export const SACRAMENTS = [
    {
        name: "Untar a espada do Conquistador",
        powers: [
            "Você pode gastar um DM quando ataca e adicionar a soma aos seus teste de ataque e ao dano.",
            "Quando atingir um inimigo com uma arma ou tomar dano de uma arma, você ganha 1 DM pro próximo turno.",
        ],
        spells: [
            "Bainha de Sangue",
            "Curar",
            "Nove Vidas",
            "Reflexos Felinos"
        ]
    },
    {
        name: "Se banhar no Elemento Sagrado",
        powers: [
            "Escolha qual é o Elemento Sagrado. Você o molda como argila",
            "Se o seu corpo estiver coberto pelo Elemento Sagrado você ganha 1 DM de graça.",
        ],
        spells: [
            "Capa Elemental", "Elementomorfose", "Explosão Elemental", "Parede Elemental"
        ]
    },
    {
        name: "Comunhão com a Besta Sagrada",
        powers: [
            "Escolha qual animal é a Besta Sagrada. Você pode falar com esse animal",
            "Contanto que você aja como a Besta Sagrada você ganha 1 DM de graça."
        ],
        spells: [
            "Animorfar", "Dar Aspecto de [Animal]", "Charme Animal", "Chamada do Animal"
        ]
    },
    {
        name: "Declamar as 100 Sabedorias",
        powers: [
            "Se for rolar por uma nova magia, role duas vezes e escolha. Você pode fazer isso de maneira retroativa para seus outros Sacramentos.",
            "Cada sessão você ganha 1 DM de graça (que não volta depois de expirado)."
        ],
        spells: [
            "Projeção Espacial", "Destruição Profetizada", "Rito do Sétimo Dia", "Amuleto da Mão Aberta"
        ]
    },
]

export const SPELL_SCHOOLS = [
    { school: "Animorfose", description: 'Magias relacionadas a se tornar como uma espécie animal' },
    { school: "Apotropaísmo", description: 'Magias que estudam selos e proteção contra o mal' },
    { school: "Arcana Ardilosa", description: 'Maldições antigas e magias da natureza' },
    { school: "Elementalismo", description: 'Magias que lidam com os espíritos da terra' },
    { school: "Fisiúrgia", description: 'Remédios, curas tradicionais e magias de sangue' },
    { school: "Translocação", description: 'A manipulação paradoxical do espaço e do tempo' },
    { school: "Truques", description: 'A arte de encantar objetos do dia-a-dia de modo utilitário' },
    { school: "Vivimancia", description: 'A ciência da carne, crescimento e evolução' }
]

export const SPELLS = [
    {
        "name": "Aço Leal",
        "school": "Apotropaísmo",
        "description": [
            "Você encanta uma arma para flutuar no ar ao seu lado e te proteger. Como uma ação livre, sempre que for atacado a arma contraataca. Ela ataca como se você a empunhasse. A magia acaba quando sua duração expirar ou depois de [dados] golpes com sucesso.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, não tem número máximo de golpes."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Água ao Vinho",
        "school": "Fisiúrgia",
        "description": [
            "Você torna [dados] rações de água em um alcóolico de baixa qualidade.",
            "Alternativamente, dá [soma] pontos de dano de veneno a uma criatura tocada, teste para tomar metade, e a deixa bêbada (envenenada) por [soma] horas."
        ],
        "range": "Toque"
    },
    {
        "name": "Alterar Gravidade",
        "school": "Translocação",
        "description": [
            "Você deve lançar essa magia em uma área fechada com um teto sólido.",
            "A área tem sua gravidade alterada ou em direção ou magnitude, que você especifica pela duração. O efeito acontece gradualmente, então pessoas tem uma chance de fazer um teste para se manter no lugar, se apropriado.",
            {
                "ul": [
                    "Se diminuir a gravidade, você pode pular mais alto e mais longe, mas efetivamente qualquer ação precisa de um teste de DES",
                    "Se aumentar a gravidade, todos precisam fazer um teste de FOR ou ficam Caídos, podendo repetir o teste periodicamente para levantar."
                ]
            },
            "Se investir 4 dados ou mais, o efeito se torna permanente."
        ],
        "range": "20 metros",
        "duration": "[soma] rodadas"
    },
    {
        "name": "Amuleto da Mão Aberta",
        "school": "Apotropaísmo",
        "description": [
            "Traceje uma mão em um item e complete a mão com seu Sigilo para criar um amuleto contra maldições. Quando o dono do amuleto falhar um teste contra magias hostis, eles podem rolar novamente. Se o teste passar dessa vez, uma rachadura aparece no amuleto. O amuleto quebra depois de [dados] rachaduras."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Animorfar",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "Você toma a forma de um [animal] até o seu tamanho, incluindo suas habilidades naturais. Você mantém seus PVs atuais, testes de ataque e de resistência mas não pode usar nenhuma habilidade que precisa de forma humana, como lançar magias.",
            "Se investir 4 dados ou mais nessa magia, o efeito dura 1 dia."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Apoteóse dos Cordyceps",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "Você crava seu Sigilo em um fungo parasita, que você engole. Se morrer e for comido, uma criatura aleatória que te consumiu vai ser infectada com seu parasita e morrer em 1d6 dias se não curada. Ao morrer, você toma controle do corpo.",
            "Você mantém seus poderes e estatísticas mentais mas assume as capacidades físicas do novo corpo, que vai progressivamente decair ao longo de [soma] dias, quando o processo começa novamente.",
            "Toda vez que esse processo acontece tem uma chance de 1-em-6 que você reencarne como uma mosca."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Armadilha de Ladrões",
        "school": "Apotropaísmo",
        "description": [
            "Você marca um objeto com seu Sigilo. Se alguém o tocar sem seu consentimento, jatos de tinta azul explodem dele em todas as direções. Criaturas adjacentes tomam [soma] danos e ficam manchados por [dados] dias.",
            "Se investir 4 ou mais dados, você pode brevemente ver os rostos das pessoas afetadas."
        ],
        "range": "Toque",
        "duration": "Sigilo"
    },
    {
        "name": "Armadura de Lixo",
        "school": "Truques",
        "description": [
            "Items aleatórios que você carrega se agrupam ao seu redor fazendo uma armadura improvisada.",
            "Você precisa ter itens no seu Inventório para a magia funcionar. O dano que você recebe é reduzido por [dados]. Cada vez que tomar dano, role 1d6 e se rolar 1, sacrifique um item do seu Inventório (pilhas contam como um item, Cicatrizes não contam)."
        ],
        "duration": "1 hora"
    },
    {
        "name": "Assustar Besta",
        "school": "Animorfose",
        "description": [
            "Você produz um som extremamente alto e irritante, uma sequência extremamente brilhante e desagradavel de luzes piscantes e um cheiro repugnante. Criaturas animalísticas ou despreparadas que conseguem te perceber devem fazer um Teste ou ficarem Assustadas."
        ],
        "range": "Voz"
    },
    {
        "name": "Aura de Intoxicação",
        "school": "Fisiúrgia",
        "description": [
            "Todos na aura ficam bêbados (envenenados). Eles podem fazer um teste a cada rodada em batalha.",
            "Você pode escolher [dados] x 2 criaturas para isentar do efeito da aura."
        ],
        "range": "10 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Aura de Renovação",
        "school": "Fisiúrgia",
        "description": [
            "Você se senta e canta uma música de vida. Se você se mexer ou parar de cantar, a magia acaba. Personagens dentro do seu alcance vão ter a duração de todas as magias que afetam eles se extender até a duração da música."
        ],
        "range": "10 metros",
        "duration": "[dados] horas"
    },
    {
        "name": "Bainha de Sangue",
        "school": "Fisiúrgia",
        "description": [
            "Você toma [dados] dano e extrai seu sangue para forjar uma arma corpo-a-corpo de uma mão. Esse dano não pode te deixar com menos de 1 PV.",
            "A arma dá 1d8 + Número de Cicatrizes de dano. Você (e só você) tem vantagens nos seus testes de ataque com essa arma.",
            "Se investir 4 dados ou mais, a arma se torna permanente."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Bala de Veneno",
        "school": "Vivimancia",
        "description": [
            "Você conjura uma esfera de veneno líquido e joga em uma criatura. Essa criatura precisa fazer um teste de resistência. Se falhar toma [soma] dano de veneno, se passar toma [dados] dano.",
            "Se a criatura já estiver ferida, agora ela está envenenada."
        ],
        "range": "20 metros",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Barganhar",
        "school": "Translocação",
        "description": [
            "Você instantaneamente troca um objeto que você está segurando em sua mão com um objeto que a criatura alvo está segurando na mão dela."
        ],
        "range": "[dados] x 10 metros"
    },
    {
        "name": "Barreira de Vento",
        "school": "Elementalismo",
        "description": [
            "Você invoca ventos para defletir pequenos mísseis como flechas e lanças. A magia se move com você e pode abrigar [dados] pessoas. Mísseis que saem de dentro da barreira também são impedidos."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Bater no Peito",
        "school": "Vivimancia",
        "description": [
            "Você bate no peito violentamente enquanto grita. Você toma [dados] pontos de dano e seus ataques corpo-a-corpo vão inflingir [soma] pontos de dano extra.",
            "Você vai precisar comer [dados] rações extra hoje."
        ],
        "duration": "10 minutos"
    },
    {
        "name": "Beijo da Serpente",
        "school": "Vivimancia",
        "description": [
            "Depois de lançar a magia, você cresce presas longas e ocas, que podem ser usadas como arma natural (1d6 de dano).",
            "Essas presas podem tirar o veneno de alguém envenenado, e armazer o veneno para distribuir depois por um ataque."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Bode Expiatório",
        "school": "Apotropaísmo",
        "description": [
            "Você traceja seu Sigilo no alvo e em um animal pelo menos do tamanho de uma cabra. Se os dois estiverem próximos quando uma magia hostil atingir o alvo, os primeiros [dados] de magia hostil afetando o alvo vão afetar o bode expiatório."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Braço Tentáculo",
        "school": "Animorfose",
        "description": [
            "Você transforma uma de suas mãos em um tentáculo longo e agarra algo. Então, escolha uma das ações:",
            "Agarrar: O alvo toma [soma] dano e não pode se mover no próximo turno.\nJogar: O alvo é empurrado 10 metros em uma direção. Toma [soma] dano e fica Caído.\nArrastar: Você puxa o alvo na sua direção, ou é puxado na direção dele, se o alvo for mais pesado.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, suas mãos estão permanentemente transformadas. Você pode então usar as habilidades supracitadas sem gastar DMs, tendo dano de 1d6."
        ],
        "range": "10 metros"
    },
    {
        "name": "Caminhada das Sombras",
        "school": "Arcana Ardilosa",
        "description": [
            "Você liga duas sombras que você pode ver dentro do seu alcance em um portal. Se alguém pisar em uma, sai da outra. Cada sombra precisa ser maior que a coisa a usando para atravessar.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "range": "20 metros",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Capa Elemental",
        "school": "Elementalismo",
        "description": [
            "Na presença de uma quantidade significativa de um elemento, você convida seu espírito para uma carona. Para alguns, parece como uma capa feita do elemento, e para outros, parece como uma criatura estranha andando nas costas. Para a duração da magia, você é imune ao elemento e escolhe [dados] opções:",
            {
                "ol": [
                    "Você está invisível nesse elemento",
                    "Criaturas adjacentes a você tomam [dados] dano no seu turno",
                    "Você tem [soma] PV temporário",
                    "Você deixa uma trilha do elemento, que ou causa dano ou é difícil de se cruzar"
                ]
            },
            "Se a magia acabar naturalmente, o espírito fica onde você o deixou e pode modificar a área nos próximos dias."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Carruagem do Vento",
        "school": "Elementalismo",
        "description": [
            "Um tumulto de elementais do vento, prismáticos e cacófonos, levantam você e seus companheiros e os movimentam na direção que você quiser. Nenhuma ação sútil ou comunicação pode acontecer enquanto estiverem na carruagem."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Castigar os Iníquos",
        "school": "Apotropaísmo",
        "description": [
            "A magia deve ser lançada em um lugar onde o céu é visível. Você proclama um pecado capital que acha que o alvo está cometendo.",
            "Se culpado, o alvo toma [dados] x 2 pontos de danos enquanto é atingido por um raio dos céus.",
            "Caso não seja, ou uma outra criatura em alcance seja significativamente mais pecador que o alvo, você toma [soma] pontos de dano e não pode lançar magias por um dia."
        ],
        "range": "40 metros"
    },
    {
        "name": "Chamada do [Animal]",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "Você invoca [dados] DV de [animal], ou um enxame de [soma] PV se forem criaturas de 0 DV. Eles chegam depois de 10 minutos, vindo atrás de você. Você pode dirigir suas ações.",
            "Se investir 4 dados ou mais nessa magia, os efeitos se tornam permanentes e eles se tornam parte do seu grupo."
        ],
        "duration": "[dados] horas"
    },
    {
        "name": "Chamado de Retorno",
        "school": "Translocação",
        "description": [
            "Um contêiner marcado com seu Sigilo se transporta para sua posição atual. A capacidade desse contêiner é [dados] itens significantes."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Chamar Destruição",
        "school": "Apotropaísmo",
        "description": [
            "Você ganha [soma] pontos de Destruição. Se você rolar uma Catástrofe, acontece a uma criatura inteligente que você consiga ver."
        ],
        "range": "Visão"
    },
    {
        "name": "Chamas da Verdade",
        "school": "Apotropaísmo",
        "description": [
            "Você toca uma vela, tocha ou lanterna acesa, fazendo ela produzir uma luz vermelha sombria e profunda. [dados] das coisas a seguir brilham vermelho brilhante quando essa luz os iluminar:",
            {
                "ol": [
                    "Magia de ilusão",
                    "Portas escondidas e armadilhas",
                    "Mentiras",
                    "Pessoas que desejam te machucar"
                ]
            },
            "Se investir 4 ou mais dados e escrever seu Sigilo na fonte de luz, escolha uma das coisas e o efeito se torna permanente."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Charme [Animal]",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "Você pode encantar até [dados] DV de [animais], as vítimas encantadas sem teste. Você também ganha a habilidade de ter comunicação limitada e, apesar dos animais não poderem ser diretamente comandados, vão estar geralmente inclinados a te ajudar.",
            "Se investir 4 dados ou mais nessa magia, o efeito se torna permanente e os alvos se tornam Seguidores."
        ],
        "range": "20 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Círculo de Areia",
        "school": "Apotropaísmo",
        "description": [
            "Você regula a temperatura em uma área. Você toma 10 minutos para traçar um círculo em areia e o completar com Sigilo. O círculo pode ter até [dados] x 6 metros de diâmetro. Uma vez completo, a temperatura dentro do círculo muda por [soma] x 5 ºC para cima ou para baixo.",
            "Cada 30 graus abaixo de zero causa 1d6 de dano frio por hora, enquanto cada 30 graus acima de 40 ºC causa 1d6 de dano de fogo."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Cobre à Veneno",
        "school": "Fisiúrgia",
        "description": [
            "Você transforma até [soma] porta-moedas de moedas de cobre ou objeto de cobre equivalente em um veneno verde, cristalino e solúvel em água. Uma dose desse veneno ocupa um espaço no Inventório, dissolve em um copo d'água e faz 1d6 de dano para quem beber por dose, teste para dar metade."
        ],
        "range": "Toque"
    },
    {
        "name": "Coincidência Espacial",
        "school": "Translocação",
        "description": [
            "Você, junto com [dados] companheiros, pode ocupar o mesmo espaço que outro espaço físico, que deve ser grande o suficiente para conter a maior pessoa afetada (alvos que não consintam precisam ser fisicamente forçadas a entrar em um objeto e podem fazer um teste de resistência contra a magia).",
            "Enquanto dentro de um objeto, personagens não podem se mover, mas percebem os eventos ao seu redor como se filtrado por uma névoa.",
            "Os alvos podem entrar e sair de objetos como desejarem enquanto a magia durar, mas precisa ser um ato deliberado. Alvos sempre saem por onde entraram (ou seja, não pode usar essa magia para andar através de paredes) e sempre saem do objeto quando a magia acaba."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Comandar Ferro",
        "school": "Truques",
        "description": [
            "Você fala com a voz da forja. Um objeto de metal é animado e precisa imediatamente obedecer uma ordem de [dados] verbos.",
            "A ordem precisa ser feita em um gesto. Objetos mágicos podem fazer um teste de resistência."
        ],
        "range": "20 metros"
    },
    {
        "name": "Comandar Moedas",
        "school": "Truques",
        "description": [
            "Todas as moedas em alcance se levantam e obedecem seus comandos de uma palavra. Elas podem fazer muitas coisas, mas não tem mente própria e são fracas."
        ],
        "range": "10 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Contorção",
        "school": "Animorfose",
        "description": [
            "Você pode se esconder em espaços pequenos, ou se enfiar por lugares muito apertados com facilidade.",
            "Se investir 4 dados ou mais nessa magia e inscrever seu Sigilo, o efeito se torna permanente."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Contra Olhos Intrometidos",
        "school": "Apotropaísmo",
        "description": [
            "Você sela uma área de [dados] x 2 metros de raio ao seu redor contra intromissões. Criaturas fora da área devem fazer um Teste ou se tornam fisicamente incapazes de olhar para a área, até mesmo na visão periférica.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente no local."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Corda Sangrenta",
        "school": "Fisiúrgia",
        "description": [
            "Você drena seu sangue em uma corda e cria 10 metros por ponto de dano auto inflingido. A corda conta como mágica.",
            "Se lançar essa magia com 3 dados ou mais, você pode fazer a corda aperecer me qualquer ponto que você possa ver, contanto que consiga alcançar o outro lado."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Cortar o Vento",
        "school": "Elementalismo",
        "description": [
            "Você toca uma arma e grita como os ventos uivantes. Pela duração da magia, você faz um ataque a distância com a arma encantada até 20 metros de distância, e pode ter como alvo [dados] criaturas com cada ataque contanto que as criaturas estejam adjacentes entre si."
        ],
        "duration": "10 minutos"
    },
    {
        "name": "Crescendo da Vida",
        "school": "Arcana Ardilosa",
        "description": [
            "Você revitaliza um pequeno animal ou planta que está morrendo e uma pequena estrela começa a te orbitar. Pela duração da magia, você pode salvar a vida de alguém ao dar um bônus de [dados] x 2 em um teste de resistência, teste de esquiva ou teste para parar de Morrer. Isso consome a estrela."
        ],
        "range": "Toque",
        "duration": "Até o amanhecer"
    },
    {
        "name": "Cura Milagrosa",
        "school": "Fisiúrgia",
        "description": [
            "Você toca uma criatura próxima para milagrosamente curar suas feridas. Escolha [dados] dos efeitos abaixo (a mesma opção pode ser escolhida várias vezes):",
            {
                "ul": [
                    "O alvo pode tentar se estabilizar com vantagem",
                    "Se o alvo não estiver Morrendo, ele ganha 3 PV",
                    "O alvo pode tentar um Teste para se recuperar de um veneno",
                    "O alvo pode tentar um Teste para se recuperar de uma doença"
                ]
            }
        ],
        "range": "Toque"
    },
    {
        "name": "Dar Aspecto de [Animal]",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "Você traça seu Sigilo em um alvo e deixa um [animal] morder o Sigilo. Se a vítima sobreviver sem a ajuda de remédios, seu corpo se torna mais bestial e eles tomam [dados] aspectos ou habilidades do animal em questão."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "De Volta ao Remetente",
        "school": "Apotropaísmo",
        "description": [
            "Você torna até [soma] DV de constructos ou criaturas invocadas contra seus criadores / invocadores, baseado em um teste.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "range": "Visão",
        "duration": "10 minutos"
    },
    {
        "name": "Deflexão",
        "school": "Apotropaísmo",
        "description": [
            "Você pode defletir os próximos [dados] ataques não-mágicos do qual você é alvo para outra criatura dentro de alcance de toque. Você pode lançar essa magia como uma reação a um ataque. Se não houverem alvos, a magia não tem efeito."
        ],
        "duration": "[soma] rodadas"
    },
    {
        "name": "Desconexão",
        "school": "Translocação",
        "description": [
            "Você desconecta [dados] coisas do tamanho de humanos de qualquer superfície. O menor empurrão faz objetos desconectados saírem deslizando sobre qualquer superfície no chão como se fosse gelo. Qualquer interação por e com tais objetos precisa de um teste ou o objeto (ou criatura) caí e saí deslizando."
        ],
        "range": "20 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Desintegrar",
        "school": "Translocação",
        "description": [
            "[dados] objetos não mágicos do tamanho de uma espada ou menor, ou um objeto de massa equivalente, que você possa ver dentro alcance desintegra.",
            "Alternativamente, a criatura alvo toma [soma] dano ao longo de 3 rodadas, e você precisa se concentrar nesse efeito. Você não pode fazer outras Ações enquanto estiver usando esse efeito."
        ],
        "range": "10 metros"
    },
    {
        "name": "Despacho contra Maldições",
        "school": "Apotropaísmo",
        "description": [
            "Misture óleo e água em um prato raso enquanto roga ao Destino, Sorte e aos Deuses para salvar uma vítima de uma maldição ou alguma magia negativa. A vítima pode ser uma criatura, objeto ou área. Role 1d4. Se o resultado for menor ou igual a [dados] a maldição vai ser curada. Se não, só vai ser curada depois que a vítima (ou lançador da magia, se a vítima for um item ou local) cumprir um ato específico determinado pelo GM."
        ]
    },
    {
        "name": "Destruição Profetizada",
        "school": "Apotropaísmo",
        "description": [
            "Você faz uma proclamação audaz sobre o futuro de alguém e seu Sigilo os marga em algum lugar discreto. Você fala [dados] maneiras que o alvo NÃO vai morrer. Pela duração da magia, se o alvo fosse morrer de uma dessas causas, você pode decidir ou acabar a magia ou ganhar 1 ponto de Destruição. Se uma Catástrofe acontecer, o alvo que a sofrerá, e não você.",
            "Se investir 4 dados ou mais, o efeito se torna permanente."
        ],
        "duration": "1 dia"
    },
    {
        "name": "Disco Flutuante",
        "school": "Translocação",
        "description": [
            "Um disco flutuante aparece do seu lado. Sempre flutua na altura do seu umbigo (quando você está em pé) e nunca força peso no chão abaixo dele. Vai automaticamente te seguir, sempre estando dentro de 2 metros de você.",
            "Pode subir escadas e atravessar água. Tem um inventório de [soma] espaços."
        ],
        "range": "Toque",
        "duration": "1 dia"
    },
    {
        "name": "Disfarce",
        "school": "Arcana Ardilosa",
        "description": [
            "Você cobre um objeto de ilusões, fazendo ele aparecer como um outro objeto da mesma categoria: uma fruta parece outra, uma mesa parece outro móvel, etc.",
            "Isso só se aplica às propriedades visuais do objeto. O tamanho máximo do objeto depende do número de dados investido:",
            {
                "ol": [
                    "Tamanho de humano",
                    "Tamanho de uma carruagem",
                    "Tamanho de uma taverna",
                    "Tamanho de um barco ou de uma ponte"
                ]
            }
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Drenagem Vascular",
        "school": "Fisiúrgia",
        "description": [
            "Você cria um conduíte vermelho brilhante da sua palma e usa para fazer um ataque a distância. Se atingir um alvo vivo, dá 1d6 de dano ao alvo e você recupera [dados] PVs. Você pode tentar um ataque a cada rodada."
        ],
        "range": "Um chicote",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Elementomorfose",
        "school": "Elementalismo",
        "description": [
            "Dependendo do número de dados que investir, você converte:",
            {
                "ul": [
                    "Um punho ou parte corporal menor",
                    "Um membro",
                    "Metade do seu corpo",
                    "Seu corpo inteiro e seu equipamento"
                ]
            },
            "no elemento em questão. Você também aumenta o dado de dano de ataques desarmados em um passo com a parte do corpo modificada, e dá dano do tipo relevante."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Embelezar",
        "school": "Fisiúrgia",
        "description": [
            "Você faz um objeto ou criatura mais bonito. Poeira cai, cravos desaparecem, dentes esbranqueiam e varniz parece novo.",
            "Pela duração, o alvo tem vantagem em testes de reação e tem mais facilidade em barganhar.",
            "Se investir 4 dados ou mais, a duração se torna permanente."
        ],
        "range": "Toque",
        "duration": "[soma] horas"
    },
    {
        "name": "Engraxar",
        "school": "Truques",
        "description": [
            "Você causa uma área de [dados] x 16 metros quadrados ou [dados] objetos ficarem cobertos em uma graxa escorregadia e inflamável. Para se mover através da área ou segurar um objeto engraxado, você precisa fazer um teste de resistência. Em falha, solte o objeto ou fique Caído.",
            "Se a graxa for acendida, ela causa 1d6 de dano de fogo a cada rodada por [dados] rodadas antes de queimar completamente."
        ],
        "range": "20 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Enxame de Moscas",
        "school": "Animorfose",
        "description": [
            "Crie um enxame de moscas de 10 metros. Nela, ações que dependem em visão são feitas com desvantagem. Criaturas vivas com 50% PV ou menos devem fazer um Teste a cada Rodada que passam nela ou contraem uma Doença.",
            "Se investir 4 dados ou mais e inscrever seu Sigilo, o efeito se torna permanente e te segue."
        ],
        "range": "1 hora",
        "duration": "[soma] rodadas"
    },
    {
        "name": "Equivalência Voluminosa",
        "school": "Translocação",
        "description": [
            "Você transforma um espaço em outro espaço, equivalente à sua escolha.",
            "Engrave seu sigilo em todas as aberturas de um contêiner ou prédio vazio. Quando a magia for lançada essas aberturas se tornam portais levando a dimensão de bolso do mesmo volume que o espaço original.",
            "Essa dimensão tem a forma e subdivisões que você quiser, mas tem que ter as mesmas aberturas que o espaço original. Também é feito do mesmo material que o contêiner original.",
            "O tipo de espaço que pode ser convertido depende da quantidade de dados investidos:",
            {
                "ul": [
                    "Um baú, uma mala ou menor",
                    "Uma sala de 10 metros x 10 metros ou menor",
                    "Uma casa de 4 quartos ou menor",
                    "Qualquer prédio"
                ]
            },
            "Se o prédio ou contêiner for destruído, ou seu sigilo apagado, a dimensão é destruída e os conteúdos são espalhados perto ou dentro do espaço original."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Escada de Yakuv",
        "school": "Elementalismo",
        "description": [
            "Você cria um arco de eletricidade entre dois pontos que estão até [dados] x 40 metros de distância. O arco é uma barreira semi-sólida. Escalar a escada não é perigosa, mas correr através dela dá [soma] dano elétrico. O arco apoia o peso de uma pessoa mas não de um veículo ou montaria."
        ],
        "duration": "10 minutos"
    },
    {
        "name": "Espelho de Heka",
        "school": "Apotropaísmo",
        "description": [
            "Traceje seu Sigilo em um espelho de mão, e ele o defenderá: todo que lançar uma magia hostil enquanto ver sua própria imagem no espelho vai ter a magia ricocheteando de volta pra ele.",
            "Segurar o espelho não impede ações mas precisa de uma mão livre e um mínimo de esforço. O espelho reflete [dados] magias antes de perder seus poderes.",
            "Refletir uma magia refletida por outro Espelho de Heka provoca uma Catástrofe para as duas criaturas segurando os espelhos."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Estática",
        "school": "Translocação",
        "description": [
            "Um alvo tocado fica preso no tempo, imóvel (relativo a superfície do mundo) e invincível pela duração da magia. Criaturas podem fazer um teste para resistir a magia."
        ],
        "range": "Toque",
        "duration": "[soma] rodadas"
    },
    {
        "name": "Excambion",
        "school": "Truques",
        "description": [
            "Você troca as propriedades de dois objetos inanimados em alcance. Cada objeto tem as quatro seguintes Propriedades, como determinadas pelo GM e que são obviamente visiveis para você durante o processo de lançamento:",
            {
                "ul": [
                    "Propósito: o que objeto foi feito para fazer?",
                    "Material: qual é o material mais importante do objeto?",
                    "Tamanho: qual é o tamanho aproximado do objeto?",
                    "Benção: o objeto é mágico ou tocado por mágica? amaldiçoado? abençoado?"
                ]
            },
            "Você pode selecionar até [dados] propriedades e as trocar entre os objetos alvo. Se investir 4 dados ou mais e escrever seu Sigilo nos objetos, o efeito se torna permanente."
        ],
        "range": "20 metros",
        "duration": "[dados] horas"
    },
    {
        "name": "Explodir Álcool",
        "school": "Truques",
        "description": [
            "O líquido alcóolico alvo explode, infligindo [soma] dado de impacto para todos por perto. O alcance da explosão depende da quantidade, sendo 4 metros se for menos que um barril e 10 se for pelo menos um barril. Um teste de resistência divide o dano em dois."
        ],
        "range": "30 metros"
    },
    {
        "name": "Explosão Elemental",
        "school": "Elementalismo",
        "description": [
            "Você detona uma explosão de elemento que causa [soma] dano do elemento apropriado a todos em um raio de 10 metros"
        ],
        "range": "30 metros"
    },
    {
        "name": "Fala da Tormenta",
        "school": "Elementalismo",
        "description": [
            "Você comenta o tempo, mas somente através de um comando de [soma] palavras. Qualquer modificação do tempo vai causar retribuição no futuro.",
            "Se investir 4 dados ou mais, o efeito se torna permanente mas uma Catástrofe acontece."
        ],
        "duration": "[dados] horas"
    },
    {
        "name": "Falar com Pássaros",
        "school": "Arcana Ardilosa",
        "description": [
            "Você desenha seu Sigilo na cabeça de uma criatura. Contanto que o Sigilo não seja apagado (por água) o alvo pode falar com pássaros e os pássaros podem o responder. Se tem um humanóide andando por perto, tem uma chance de [soma] x 10% que um pássaro aleatório na área sabe onde ele está e se está fazendo algo estranho. A maioria dos pássaros é neurótico mas facilmente subornado.",
            "Se a soma for maior que 10, a magia também invoca um bando de pássaros com [soma] PV que podem ser induzidos a ajudar a criatura com o sigilo."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Falar com Sangue",
        "school": "Fisiúrgia",
        "description": [
            "Você pode falar com o sangue de todos os seres vivos. Sangue é o trono da Alma Animal, e ele sabe de sexo, violência, instintos e desejos.",
            "Se [soma] for menor que 5, você fala com seu sangue - talvez ele saiba coisas que você não percebeu.",
            "Se [soma] for menor que 10, você fala com o sangue de outros seres vivos ou sangue derramado até 24 horas atrás.",
            "Caso contrário, você pode dar um novo desejo ao dono do sangue com quem falou."
        ],
        "duration": "[soma] minutos"
    },
    {
        "name": "Fazer as Malas",
        "school": "Truques",
        "description": [
            "Objetos dentro do alcance, na sua linha de visão são arrumados com esmero. Você precisa nomear os objetos ou sua categoria geral (\"aquelas moedas\", \"o conteúdo daquela sala\").",
            "Se um contêiner não for provido, os objetos vão ser empilhados em cubos compactos, com os objetos maiores e mais estáveis no fundo.",
            "Os objetos precisam se mexer livremente e objetos não vão se levantar mais que 2 metros do chão durante o processo."
        ],
        "range": "[dados] x 2 m"
    },
    {
        "name": "Fiadeira Sedosa",
        "school": "Animorfose",
        "description": [
            "Você desenvolve fiadeiras capazes de ejetar fios de 10 metros - com aspecto de cordas - de teia de areia. Pela duração da magia você pode fazer as seguintes ações:",
            "Laçar: Faça um ataque a distância contra um alvo. Em sucesso, ele está paralisado.",
            "Prender: Se ancore a uma superfície adjacente com uma corda de 2 a 10 metros.",
            "Encasule: Tome 10 minutos para encasular um objeto parado em um casulo de seda.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Fissura Magnética",
        "school": "Elementalismo",
        "description": [
            "Você cria uma linha de força magnética invisível entre dois pontos no alcance. A linha pode passar por objetos sólidos. Tudo que passar pela linha enquanto usar armadura metálica toma [soma] dano e precisa passar em um teste de resistência ou fica Caído.",
            "Criaturas feitas de aço, ou com implantes de metal ou piercings ou componentes delicados, tomam [soma] + [dados] dano e ficam Caídos."
        ],
        "range": "20 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Fluxo de Calor",
        "school": "Translocação",
        "description": [
            "Você olha para [dados] + 1 objetos para transferir calor entre eles.",
            "Por exemplo, transferir o calor de uma tocha a uma criatura para [soma] dano, ou o frio de uma geleira para apagar uma fogueira. Você não pode amplificar o calor."
        ],
        "range": "40 metros"
    },
    {
        "name": "Focar Luz",
        "school": "Translocação",
        "description": [
            "Você foca toda a luz ao seu redor em um único ponto.",
            {
                "ul": [
                    "Se estiver de dia ou perto de uma fonte de luz mágica poderosa, isso causa [dados] + [soma] dano de fogo e o alvo deve fazer um teste de resistência ou ficar Cego por uma Rodada",
                    "Se estiver uma noite estrelada ou no mar astral, isso causa [soma] dano psíquico e o alvo deve fazer um teste de resistência ou ficar Assustado",
                    "Caso contrário, dá [dados] dano de fogo e o alvo deve fazer um teste de resistência ou ficar Atordoado por uma rodada"
                ]
            }
        ],
        "range": "Visão"
    },
    {
        "name": "Fumigar",
        "school": "Vivimancia",
        "description": [
            "Uma nuvem de gás tóxica sai do lançador. Cada criatura que respira em alcance até o tamanho de um gato tomam [soma] pontos de dano, dissipando em fumaça se mortos dessa maneira.",
            "Demais criaturas que respiram tomam [dados] pontos de dano. Criaturas excepcionais ou mágicas podem fazer um teste para tomar metade do dano."
        ],
        "range": "10 metros"
    },
    {
        "name": "Geas",
        "school": "Arcana Ardilosa",
        "description": [
            "Você amaldiçoa uma vítima com um Geas, uma maldição que força a seguir um comando inescápavel. O comando pode ser uma tarefa longa ou difícil, mas tem que ser possível. A vítima pode fazer um teste para resistir, mas se falhar, seu Sigilo aparece nela instantaneamente.",
            "Desse ponto em diante, todo dia que não é gasto para preencher o geas faz a vítima sofrer um dos seguintes malefícios:",
            {
                "ul": [
                    "Perca de um poder ou habilidade",
                    "Perca de saúde (-1d6 para um atributo)",
                    "Perca de saúde (doença)",
                    "Perca de energia (fatiga e exaustão)",
                    "Perca de meios (dinheiro ou propriedade)",
                    "um de seus amigos ou parentes próximos sofre um malefício aleatório"
                ]
            },
            "Para cada dia que a vítima trabalha para preencher o geas, um desses malefícios se resolve como se nunca esteve lá.",
            "Um efeito colateral é que a vítima é empoderada para fazer a tarefa: ela ganha algum pequeno poder para ajudá-la a conquistar a tarefa, à discrição do mestre.",
            "Se a tarefa se tornar impossível, uma Catástrofe acontece para o lançador e a vítima. Se qualquer um deles morrer, isso não impede o geas, já que é preso à alma.",
            "Se investir 4 dados ou mais, o efeito se torna permanente."
        ],
        "duration": "[dados] semanas"
    },
    {
        "name": "Hibernação",
        "school": "Fisiúrgia",
        "description": [
            "O alvo cai em um sono mágico e não pode ser acordado por nada menos vigoroso que um tapa (uma ação padrão). Alvos pegos de surpresa não fazem um teste. Enquanto dorme, o alvo parece pálido, com lábios azulados; não precisa comer ou beber, e se estava Morrendo, não está mais pela duração da magia.",
            "Se investir 4 ou mais dados e inscrever seu Sigilo, o efeito se torna permanente e você decide a única condição que vai causar o alvo a acordar (ex.: beijo do amor verdadeiro)."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Imagem Espelhada",
        "school": "Translocação",
        "description": [
            "Você cria 1 + [dados] imagens ilusórias de si mesmo, que se movem como você se move e sempre estão dentro de 2 metros de você. Elas estão constantemente passando por dentro da outra, então é impossível dizer quem é quem.",
            "Quando um ataque for te atingir, role 1d6 para ver se o ataque atinge você ou uma imagem. Se rolar menor ou igual que o número de imagens, o ataque atinge uma imagem invés de você. Se o ataque causaria dano, a imagem some. Efeitos de área (como o sopro de um dragão) dissipam todas as imagens."
        ],
        "duration": "10 minutos"
    },
    {
        "name": "Intenções do Chefe",
        "school": "Truques",
        "description": [
            "Ao tocar um prato de comida, você pode codificar uma mensagem secreta na comida de [dados] + [soma] palavras. Qualquer um que comer a comida vai ouvir a mensagem."
        ],
        "duration": "1 dia"
    },
    {
        "name": "Invocar Água",
        "school": "Elementalismo",
        "description": [
            "Você grita o brado do azul profundo enquanto toca um contêiner. Toda a água dentro do alcance é imediatamente puxado para dentro do contêiner (potencialmente o transbordando)."
        ],
        "range": "[dados] x 10 metros"
    },
    {
        "name": "Laço Arcano",
        "school": "Truques",
        "description": [
            "Você comanda uma corda a amarrar [dados] criaturas juntas. As vítimas tem que estar dentro do alcance da corda e podem evitar ser amarradas se passarem em um teste de resistência."
        ],
        "range": "10 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Lâmina de Grama",
        "school": "Arcana Ardilosa",
        "description": [
            "Você pode usar qualquer objeto ou parte do corpo como uma lâmina. Tal objeto conta como uma espada e dá [dados]d6 de dano."
        ],
        "range": "Toque",
        "duration": "1 hora"
    },
    {
        "name": "Lareira Interna",
        "school": "Fisiúrgia",
        "description": [
            "Você consome um naco de carvão e seu interior fica comfortavelmente quentinho. Você se torna imune a condições ambientais fria e toma metade de dano de ataques congelantes."
        ],
        "duration": "[soma] horas"
    },
    {
        "name": "Leite e Mel",
        "school": "Fisiúrgia",
        "description": [
            "Você prepara uma mistura de leite, mel (e algumas outras coisas) antes de lançar essa magia, que, se bebida quente, faz quem toma dormir por [soma] horas.",
            "Todas as tentativas de acordar o alvo menos vigorosas que algo que daria dano falham, mas o alvo vai acordar com [dados] PV bônus pro dia e vão ter se recuperado de [dados] doenças e/ou venenos."
        ],
        "range": "Toque",
        "duration": "[soma] horas"
    },
    {
        "name": "Leitura de Objetos",
        "school": "Truques",
        "description": [
            "Você pode ler as impressões psíquicas em objetos causados pela história do item. Mecanicamente, você pode fazer [dados] perguntas de um verbo para o GM sobre a história."
        ],
        "range": "Toque"
    },
    {
        "name": "Levitação",
        "school": "Translocação",
        "description": [
            "Você solta [dados] objetos de tamanho menor ou equivalente de um humano das amarras da gravidade. Você decide a altura que o objeto vai flutuar por padrão, até um máximo de [dados] x 4 metros. Quando a magia acabar, o objeto cai gentilmente ao chão.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "range": "20 metros",
        "duration": "10 minutos"
    },
    {
        "name": "Luz de Aviso",
        "school": "Apotropaísmo",
        "description": [
            "Você marca uma sala como proibida. Quando lançar a magia você a marca com seu Sigilo e nomeia [dados] categorias de pessoas que podem ignorar seu selo. Se uma criatura não autorizada entrar a sala proibida, as fontes de luz nessa sala e todas as salas adjacentes começam a piscar na cor de sua escolha por [dados] horas e a magia acaba.",
            "Sim, essa magia é muito usada para festas."
        ],
        "range": "Toque",
        "duration": "Sigilo"
    },
    {
        "name": "Maldição do [Animal]",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "Uma criatura alvo da qual você pessoalmente tirou sangue é amaldiçoada com ataques constantes de [animais].Ao longo da magia, [animal] vai atacar o alvo de qualquer sombra próxima. Toda vez que [animal] morrer, outro vai aparecer imediatamente. A cada hora, um [animal] a mais vai aparecer. O alvo pode evitar isso estando em um espaço sem nenhuma sombra. Quando o tempo acabar, todos os [animais] somem. Os [animais] dispersam em sombras quando mortos, deixando nenhum rastro pra trás.",
            "Se investir 4 dados ou mais e inscrever seu Sigilo, o efeito se torna permanente."
        ],
        "duration": "[dados] x horas"
    },
    {
        "name": "Mão Branca da Disciplina",
        "school": "Apotropaísmo",
        "description": [
            "Uma de suas mãos se torna tão dura e resistente como aço. Não se torna mais pesada, nem dá dano extra, mas é completamente invulnerável. Você pode usar pra ripostar ataques de armas e manejar qualquer coisa.",
            "Mecânicamente, ganhe [dados] pontos de armadura. Se investir 4 dados ou mais, o efeito se torna permanente."
        ],
        "duration": "10 minutos"
    },
    {
        "name": "Mão na Corda",
        "school": "Truques",
        "description": [
            "Você amarra uma corda ao redor da sua cintura e faz ela agir como uma terceira mão, controlada mentalmente mas semi-senciente. A corda pode empunhar uma arma leve e fazer um ataque extra em combate.",
            "Se investir 4 dados ou mais e inscrever seu Sigilo, o efeito se torna permanente."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Mensagem do Vento",
        "school": "Elementalismo",
        "description": [
            "O vento carrega suas mensagens para seus companheiros em alcance, como se os seus companheiros estivessem do seu lado."
        ],
        "range": "40 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Metal para Chama",
        "school": "Elementalismo",
        "description": [
            "Você muda um objeto de metal para fogo. O objeto mantém sua massa e forma mas causa [dados]d4 de dano para tudo que o toca quando transforma e [dados] dano a cada turno subsequente de contato. Se usado como arma dá [dados]d4 de dano de fogo.",
            "Se investir 4 dados ou mais, e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "range": "20 metros",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Missa da Candelária",
        "school": "Truques",
        "description": [
            "Você conjura [soma] velas flutuantes acesas ao seu redor. Cada uma se comporta como uma vela normal, mas não podem ser apagadas, têm tamanho constante e vão queimar até mesmo debaixo d'água.",
            "Elas podem ser facilmente coladas em uma superfície sólida imóvel, e se forem, duram 1 hora. As velas só iluminam 4 metros."
        ],
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Morte à Vida",
        "school": "Fisiúrgia",
        "description": [
            "Você traz um cadáver de volta à vida. O corpo não tem nenhuma parte ou órgão que não tinha antes de voltar a vida, mas está milagrosamente vivo por [dados] dias caso não tenha órgãos vitais.",
            "O finado volta com 1 PV, nível 0 e guardando leito até que se recupere pela mesma quantidade de tempo que passou morto. Depois, ele vai recuperar 1 template de classe por semana, até [dados] templates. Não pode subir de nível até se recuperar.",
            "Depois de lançar a magia você está em choque e precisa rolar 1d4. Se rolar mais que [dados], você entra em coma pelo resto da sessão. Se rolar 4, você ativa uma Catástrofe."
        ],
        "range": "Toque"
    },
    {
        "name": "Nó Universal",
        "school": "Truques",
        "description": [
            "Você faz um nó com um pedaço de corda e [dados] objetos não vivos se fecham e/ou se trancam. Se o objeto for uma porta, baú ou objeto similar, vão bater, dando [soma] dano para qualquer criatura com partes no caminho, e as prendendo. São necessários pelo menos [dados] rodadas para arrombar um tal objeto.",
            "Alternativamente, você faz um nó e o desata. [dados] objetos não vivos se abrem e/ou se destrancam."
        ],
        "range": "20 metros",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Nove Vidas",
        "school": "Animorfose",
        "description": [
            "Você tatua seu Sigilo sobre seu coração. Nas próximas [dado] vezes que você tomar dano que te levaria a 0 PV ou menos, invés de Morrer ganhe 1 ponto de Destruição."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "O Truque da Corda",
        "school": "Truques",
        "description": [
            "Você toca uma corda e ela imediatamente se levanta e se prende em um escaninho entre dimensões. Até [dados] pessoas podem ocupar o escaninho confortavelmente, com o dobro se comforto não for um problema.",
            "Depois que quem lançou a magia entrar no escaninho, a magia não acaba até ele sair. O lançador da magia também pode puxar a corda pra dentro do escaninho (e jogá-la pra fora de novo)."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Onda de Trovão",
        "school": "Elementalismo",
        "description": [
            "Você chama a fúria da tempestade em uma explosão de luz e trovão. Tudo em um raio de 10 metros toma [soma] dano de impacto."
        ]
    },
    {
        "name": "Órbita",
        "school": "Translocação",
        "description": [
            "O item alvo flutua gentilmente no ar, orbitando um objeto maior ou seu corpo (se for maior) pela duração. Enquanto o item orbitar, ele pode ser perturbado e pego com facilidade e não tem peso."
        ],
        "range": "Toque",
        "duration": "[dados] horas"
    },
    {
        "name": "Os 10 Selos",
        "school": "Apotropaísmo",
        "description": [
            "Quando aprender essa magia, role 1d10 para saber qual dos selos você tem:",
            {
                "ol": [
                    "Ácido",
                    "Impacto",
                    "Frio",
                    "Elétrico",
                    "Fogo",
                    "Psíquico",
                    "Mágico",
                    "Veneno",
                    "Cortante",
                    "Radiante"
                ]
            },
            "Você põe seu Sigilo em uma criatura ou objeto, que pode então, absorver até [dados] + [soma] pontos de dano do tipo do selo sem ser machucado.",
            "Contanto que tenha absorvido dano, seu ataque sem armas (se houver) inflige [dados] dano extra do tipo do selo.",
            "Em qualquer ponto da duração, você pode soltar todo o dano armazenado, danificando tudo em um raio de 4 metros. Tem uma chance de 1 em 6 de isso acontecer toda vez que o objeto ou criatura for atingida.",
            "Se souber mais de um selo, você lançar até [dado] deles com o mesmo Sigilo."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Palma Vazia",
        "school": "Apotropaísmo",
        "description": [
            "Você solta uma mão gigante (do tamanho de um pônei) feita de força vital azul da sua própria mão. A mão pode ser usada para atacar qualquer um na sua área de alcance por 1d8 + [soma] de dano, ou pode fazer qualquer outra coisa que uma mão gigante pode fazer.",
            "Ela não pode se mover mais que 10 metros de distância de você, tem [soma] de FOR e de PV.",
            "Se investir 4 dados ou mais, a duração vira até você fazer um Descanso Longo."
        ],
        "range": "10 metros",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Parede Elemental",
        "school": "Elementalismo",
        "description": [
            "Você pode rearranjar um cubo de 4 metros do elemento em questão, moldando o material conforme quiser. Se estiver horizontal, a parede deve estar ancorada em no mínimo dois lados.",
            "Atravesar a parede (se possível) fora de um buraco ou abertura dá [soma] dano do elemento apropriado."
        ],
        "range": "10 metros"
    },
    {
        "name": "Passo do Vento",
        "school": "Elementalismo",
        "description": [
            "Você se move até 20 metros como uma ação livre. Seu movimento é tão rápido que parece instantâneo. Efeitos extras dependem do número de dados investidos:",
            {
                "ol": [
                    "Você ignora placas de pressão (e mecanismos similares), assim como terreno difícil ou perigoso.",
                    "Você pode subir em paredes ou no teto contanto que pare em um lugar que pode ficar normalmente",
                    "Você pode se mover sobre superfícies que não apoiam seu peso",
                    "Você pode se mover por espaços muito apertados sem ser parado"
                ]
            },
            "Você também pode lançar essa magia como reação a qualquer ataque corpo-a-corpo feito contra você, até mesmo fora da sua rodada."
        ]
    },
    {
        "name": "Pedras Cozidas",
        "school": "Arcana Ardilosa",
        "description": [
            "Você põe seu Sigilo em [soma] pedras, e depois as cozinha em leite. Cada uma delas então pode ser usada para curar um 1 PV de uma criatura, ou ser atirada como uma pedra mágica de uma funda com um bônus de [dados].",
            "Alternativamente, cozinhe as pedras por 24 horas para produzir uma bebida que dá vantagem em um teste de resistência contra doença, maldição nas próximas 24 horas ou no próximo teste de Catástrofe."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Pele de Pedra",
        "school": "Elementalismo",
        "description": [
            "Sua pele se torna tão dura quanto pedra. Sua destreza se torna 0, mas você absorbe [soma] + [dados] dano que você receberia. Ataques com martelos ignoram esse efeito."
        ],
        "duration": "[dados] rodadas"
    },
    {
        "name": "Piscadas Espacias",
        "school": "Translocação",
        "description": [
            "Seu sigilo aparece no chão abaixo dos seus pés. Para a duração dessa magia, você teleporta de volta ao seu Sigilo no fim de cada rodada."
        ],
        "range": "Toque",
        "duration": "[dados] x 2 rodadas"
    },
    {
        "name": "Portal",
        "school": "Translocação",
        "description": [
            "Você põe um Sigilo de Portal em duas portas e, ao lançar a magia, as conecta de tal formas que se tornam a mesma porta enquanto os Sigilos durarem.",
            "O portal pode ser usado [dados] vezes antes de quebrar, mas se investir 4 dados ou mais, o efeito é permanente.",
            "Se uma das portas for danificada o suficiente, tem uma chance de [dados] em 6 que alguém passando pelo portal NÂO vai se peder no mar astral"
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Portal Vivo",
        "school": "Translocação",
        "description": [
            "Você escreve seu Sigilo em um ser vivo",
            "Ao lançar essa magia, você e [dados] companheiros podem entrar no corpo do alvo como se fosse uma porta e sair de qualquer membro ou orifício até [dados] rodadas depois. A criatura precisa fazer um teste ou tomar 1d[dados] dano por viajante, mas esse dano nunca vai o matar."
        ]
    },
    {
        "name": "Possuir Pet",
        "school": "Animorfose",
        "description": [
            "Controle completamente um animal no seu grupo. Você pode falar através dele mas não lançar magias. Seu corpo real se torna cego e molenga.",
            "Se investir 4 dados ou mais nessa magia e inscrever seu Sigilo, o efeito se torna permanente e você pode lançar magias na sua nova forma."
        ],
        "range": "Visão",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Preguiça",
        "school": "Vivimancia",
        "description": [
            "Todos dentro do alcance ficam letárgicos, fazendo atingir, esquivar e fugir deles uma tarefa fácil.",
            "Criaturas com [dados] DV ou menos são afetadas automaticamente, e as demais podem fazer um teste para resistir.",
            "Você pode isentar [dados] criaturas do efeito, e a magia pode ser lançada em mecanismos ou outras coisas que envolvam um progresso ou mudança."
        ],
        "range": "Visão",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Presas Venenosas",
        "school": "Animorfose",
        "description": [
            "Você desenvolve quelíceras, que terminam em presas nos dois lados de sua boca, e que podem ser usadas para envenenar em um ataque com sucesso. Inimigos infectados sofrem 1d6 dano de veneno e devem fazer um teste contra um dos efeitos abaixo, determinado ao acaso (rolando 1d[dados * 2]):",
            {
                "ol": [
                    "Halucinações",
                    "Movimentos Incontroláveis",
                    "Envenenamento",
                    "Sono",
                    "Envenenamento",
                    "Morte súbita em 1d6 rodadas",
                    "Pasmo",
                    "Morte instantânea"
                ]
            },
            "Se investir 4 ou mais dados e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "duration": "10 minutos"
    },
    {
        "name": "Princípio de Corte",
        "school": "Apotropaísmo",
        "description": [
            "Você encanta uma arma com lâmina para cortar materiais mais fortes que ela. Ignore qualquer dureza, resistência ou redução de dano.",
            "Com 2 DM você pode cortar materias mágicos ou encantados, com 3 pode cortar efeitos de força (como barreiras mágicas) e com 4 pode destruir artefatos e conceitos abstratos."
        ],
        "range": "Toque",
        "duration": "10 minutos"
    },
    {
        "name": "Projeção Espacial",
        "school": "Translocação",
        "description": [
            "Você se teleporta para um lugar que possa ver, e quando a magia acabar, se teleporta pro lugar onde lançou a magia."
        ],
        "range": "Visão",
        "duration": "[dados] rodadas"
    },
    {
        "name": "Queimadura Calórica",
        "school": "Vivimancia",
        "description": [
            "Você solta vapor do seu corpo enquanto você perde peso. Você pode fazer 1 + [dados] ataques corpo-a-corpo esse turno.",
            "Você precisa comer [dados] rações extras hoje. Se tem espaços de inventório ocupados por Músculos, pode perder Músculos invés de comer rações extras."
        ]
    },
    {
        "name": "Reanimar",
        "school": "Fisiúrgia",
        "description": [
            "Bata suas palmas no peito de uma criatura que morreu nos últimos [dados] turnos. Role 1d6. O alvo:",
            {
                "ol": [
                    "Continua morto",
                    "Continua morto",
                    "Ganha [dados] PV",
                    "Ganha [dados] x 2 PV",
                    "Ganha [soma] PV",
                    "Ganha [soma] + [dados] PV"
                ]
            }
        ],
        "range": "Toque"
    },
    {
        "name": "Redimensionar",
        "school": "Translocação",
        "description": [
            "A parte do corpo alvo ou objeto (não maior que uma perna nem menor que uma ervilha) muda suas dimensões, ficando até a metade ou dobro de seu tamanho em cada eixo. Se o alvo for parte de uma criatura, ela pode fazer um teste de resistência para evitar o efeito.",
            "Se 4 ou mais dados forem investidos e escrever seu Sigilo no alvo, o efeito se torna permanente. Você não precisa escrever seu Sigilo se o alvo for si mesmo."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Reflexos Felinos",
        "school": "Animorfose",
        "description": [
            "Você tem reações muito rápidas, mais rápidas que o olho pode ver. Você pode fazer uma manobra de combate - como desarmar, trocar posições, empurrar, etc. - de graça sempre que for atacado.",
            "Com 4 dados, a magia te dá uma ação extra na sua Rodada."
        ],
        "duration": "[soma] rodadas"
    },
    {
        "name": "Restorar",
        "school": "Fisiúrgia",
        "description": [
            "Você temporariamente remove ou cura [dados] mutações ou transformações mágicas afetando uma criatura. Alvos que não consintam podem fazer um teste para negar o efeito.",
            "Se investir 4 ou mais dados, a duração é permanente."
        ],
        "range": "Toque",
        "duration": "[soma] horas"
    },
    {
        "name": "Retribuição Kármica",
        "school": "Apotropaísmo",
        "description": [
            "Uma criatura que te causou algum mal sofrem alguma pequena inconveniência que, dentre outras coisas, causa 1d4 de dano.",
            "Para cada vez que a inconveniência for irônica, aumente o dado de dano, até um máximo de [dados] vezes.",
            "Se investir 4 dados ou mais e a conveniência for irônica em pelo menos 4 vezes, você pode decidir que ela é mortal: o alvo faz um teste ou morre."
        ],
        "range": "60 metros"
    },
    {
        "name": "Revisitação",
        "school": "Translocação",
        "description": [
            "Você precisa ter marcado um locar com seu Sigilo para lançar essa magia.",
            "[dados] pessoas são transportados para o local do seu Sigilo. O sigilo precisa ser inscrito sob luz solar e vai ser destruído se movido do local onde foi engravado."
        ],
        "range": "Toque"
    },
    {
        "name": "Rito do Sétimo Dia",
        "school": "Apotropaísmo",
        "description": [
            "Você faz um rito que abençoa [dados] criaturas com uma benção dentre as seguintes:",
            {
                "ol": [
                    "Rerolar um teste de resistência na próxima semana",
                    "Fazer seu grupo evitar um encontro perigoso por pouco",
                    "Escapar um acidente por pura sorte",
                    "Ganhar um leve consolo de suas aflições"
                ]
            },
            "O rito só pode ser feito uma vez por semana, por grupo."
        ],
        "duration": "1 semana"
    },
    {
        "name": "Roubar Membro",
        "school": "Vivimancia",
        "description": [
            "Você troca partes corporais com uma criatura, desde que vocês dois tenham as partes escolhidas (olhos, nariz, mãos, etc.). Criaturas que não consistam podem fazer um teste de resistência para evitar.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente."
        ],
        "range": "Toque",
        "duration": "[soma] x 10 minutos"
    },
    {
        "name": "Sacrifício ao Sol",
        "school": "Apotropaísmo",
        "description": [
            "Você atira um alvo vivo, o ateando em fogo. Você tem um bônus de [soma] ao seu teste de ataque enquanto o faz, e, se o alvo quiser, ele toma [soma] dano de fogo extra.",
            "Se a vítima sacrificial morrer, ela se imola em uma bola de fogo massiva que dá [soma] x [DV] de dano de fogo para tudo em seu alcance. Isso ignora resistências e imunidades de criaturas mortas-vivas ou \"da noite\"."
        ]
    },
    {
        "name": "Salvação",
        "school": "Fisiúrgia",
        "description": [
            "Você toca um alvo e, pela duração da magia, você rola testes de resistência no lugar do alvo, adicionando um bônus de +[dados] aos testes. Se falhar, o alvo não pode ser salvo e é amaldiçoado pelo resto do dia.",
            "Se você investir 4 dados ou mais e inscrever seu Sigilo no alvo, os efeitos se tornam permanentes."
        ],
        "range": "Toque",
        "duration": "10 minutos"
    },
    {
        "name": "Salvação do Vento",
        "school": "Elementalismo",
        "description": [
            "A magia pode ser lançada instantaneamente quando um objeto ou criatura cai. Você faz um pedido desesperado para os espíritos do ar pegarem [dados] pessoas ou objetos.",
            "Tem uma chance de 1 em 6 que o espírito peça um favor em troca depois de freiar a queda."
        ],
        "range": "20 metros"
    },
    {
        "name": "Sede de Sangue",
        "school": "Vivimancia",
        "description": [
            "A magia acorda a besta interior, criando garras e presas, dando um bônus de [dados] para ataque, dano e armadura. Alvos que não consintam podem fazer um teste para resistir o efeito.",
            "Qualquer criatura assim precisa atacar um combatente a cada rodada com um ataque corpo-a-corpo.",
            "Quando a magia acabar, o alvo faz um teste de resistência e desmaia se o falhar."
        ],
        "range": "20 metros",
        "duration": "10 minutos"
    },
    {
        "name": "Selo de Retribuição",
        "school": "Apotropaísmo",
        "description": [
            "Ponha seu Sigilo em um lugar ou portal para protegê-lo e atacar qualquer um tolo o suficiente para o violar. O selo para todos de passar, formando uma barreira visível e opalescente. Quando destruído - ao dar [soma] dano - ele causa [dados] d6 de dano para todos na área, com um teste para tomar metade.",
            "Você pode especificar o dano elemental do selo, e um grupo de pessoas isentas do dano do selo.",
            "O selo é bem visível."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Selo do Rei das Maravilhas",
        "school": "Apotropaísmo",
        "description": [
            "Você escreve seu Sigilo em um objeto, e então circunscreve o Selo do Rei das Maravilhas. Segurando o objeto, você pode prender uma aberração, celestial, elemental ou fada para o item. Criaturas de um nível maior que [dados] podem tentar um teste para resistir. Se passarem, o objeto não é apropriado para essa criatura específica, mas pode ser usado para outras.",
            "Uma vez que a vítima por presa, pode negociar os termos da sua liberdade: geralmente um serviço é o suficiente, mas acordos mais complexos são comuns.",
            "Uma vez que a vítima sair nada a prende além do conhecimento que você pode tentar prender o traidor de novo cada rodada de combate até que estejam presos de novos."
        ],
        "range": "20 metros",
        "duration": "Sigilo"
    },
    {
        "name": "Sentidos Apurados",
        "school": "Animorfose",
        "description": [
            "Escolha [dados] das seguintes opções:",
            "Pode cheirar tão distante quanto vê.\nPode ouvir tão distante quanto vê.\nPode ver perfeitamente em penumbra e sombras.\nGanha visão arcana.",
            "Se investir 4 dados ou mais nessa magia e inscrever seu Sigilo, o efeito se torna permanente."
        ],
        "duration": "1 hora"
    },
    {
        "name": "Singularidade de Propósito",
        "school": "Animorfose",
        "description": [
            "Você nomeia uma tarefa específica. [soma] criaturas que consentiram ao efeito tem vantagem em todos os Testes relacionados à tarefa, e desvantagem em todas as outras. A tarefa deve ser realisticamente capaz de ser feita em um dia.",
            "Se investir 4 dados ou mais e escrever seu Sigilo em um colar que você veste, o efeito se torna permanente."
        ],
        "range": "20 metros",
        "duration": "1 hora"
    },
    {
        "name": "Spray de Tinta",
        "school": "Animorfose",
        "description": [
            "Todos em um Cone ficam Cegos por [soma] rodadas ou até gastarem uma ação limpando seus olhos. Também cobre a área afetada com tinta que não é facilmente removida."
        ],
        "range": "10 m"
    },
    {
        "name": "Tarantella",
        "school": "Animorfose",
        "description": [
            "Você dança freneticamente, como se estivesse sendo afetado pelo veneno da aranha tarantella. Todos que veem a dança devem fazer um Teste de Vontade ou dançar até você parar. Criaturas dançantes tem desvantagem em todos os testes e ganham 1 nível de exaustão por 30 minutos de dança.",
            "Você pode proteger [dados] outras criaturas dos efeitos da sua magia."
        ]
    },
    {
        "name": "Teia",
        "school": "Animorfose",
        "description": [
            "Preenche o espaço entre 1 + [dados] pontos dentro do espaço com teias grossas e pegajosas, prendendo qualquer criatura que a tocar. Aranhas e quem lançou a magia podem livremente andar e passar pelo espaço, e criaturas grandes podem quebrar a teia com um pouco de esforço. A teia é altamente inflamável.",
            "Se investir 4 ou mais dados, pode ver tudo que toca na teia, mesmo se estiver em outro lugar."
        ],
        "range": "20 metros"
    },
    {
        "name": "Teletransporte",
        "school": "Translocação",
        "description": [
            "[dados] criaturas, de mãos dadas, você incluso, teleportam para um lugar que você consiga ver. Role 1d20, se rolar menos que [dados], escolha se:",
            {
                "ul": [
                    "cada criatura ganha uma mutação aleatória",
                    "toma 1d4 criaturas",
                    "se perde no mar astral"
                ]
            },
            "Alternativamente, se estiver em uma masmorra, você pode se teleportar para uma sala aleatória em segurança."
        ],
        "range": "Visão"
    },
    {
        "name": "Toca nos Espinhos",
        "school": "Arcana Ardilosa",
        "description": [
            "A magia cava uma toca debaixo de um espinhal ou outro arbusto, e, apesar de ser minimalista e vazio, é um refúgio quente e seguro. A entrada é somente para os seus olhos, mas você pode guiar até [dados] pessoas.",
            "A saída dos fundos leva 1d6 quilômetros na direção de sua escolha. Você não sabe exatamente aonde, mas a saída está escondida por vegetação. A toca se demole depois de 1 um dia ou quando você sair dela.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente e qualquer número de pessoas pode usá-la com você."
        ],
        "duration": "1 dia"
    },
    {
        "name": "Transcendência",
        "school": "Vivimancia",
        "description": [
            "Você grava seu Sigilo no seu corpo e faz uma declaração sobre seu corpo, dizendo [dados] fatos.",
            "Você não pode adicionar membros (mas pode trocar um membro por outro), massa ou te fazer imune a algum tipo de dano, nem fazer declarações comparativas (mais, menos, tanto quanto, etc.). Os fatos agora são verdadeiros."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Transmitir Fôlego",
        "school": "Translocação",
        "description": [
            "[dados] criaturas não precisam respirar para sobreviver pela duração dessa magia.",
            "No lugar disso, você inscreve uma runa e a atmosfera ao redor dela é magicamente transmitida para os pulmões das criaturas selecionadas durante o lançamento da magia.",
            "Se investir 4 dados ou mais e usar um Sigilo, o efeito se torna permanente."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Transplante",
        "school": "Vivimancia",
        "description": [
            "Você pode transplantar até [dados] partes orgânicas soltas (braços, pernas, orelhas, etc.) em um alvo e ter essas partes funcionarem pela duração.",
            "Alvos que não consintam podem fazer um teste para resistir. Quando acabar a duração, o alvo toma [dados] pontos de dano não letal para cada parte transplantada, que apodrece.",
            "A duração da magia poder ser permanente se escrever seu Sigilo no alvo."
        ],
        "range": "Toque",
        "duration": "[dados] horas"
    },
    {
        "name": "Tudo Adjacente",
        "school": "Translocação",
        "description": [
            "Você está adjacente a tudo e todos na sua linha de visão. Você consegue interagir com tudo que você vê, mas por consequência, você é afetado como se estivesse em todos os lugares ao mesmo tempo.",
            "Em termos de combate em grade, você é afetado por todos os efeitos de área, mas não sofre múltiplos efeitos da mesma fonte.",
            "Obviamente lançar essa magia quando pode-se ver estrelas é instantaneamente fatal."
        ],
        "duration": "[dados] rodadas"
    },
    {
        "name": "Último Juramento",
        "school": "Fisiúrgia",
        "description": [
            "Você abre os conduítes da vida de seus aliados enquanto você faz um juramento de dever. Todos os aliados em alcance, mas não você mesmo, são curados [soma] PV. Você toma [dados] dano para cada aliado curado dessa maneira."
        ],
        "range": "10 metros"
    },
    {
        "name": "Velocidade",
        "school": "Vivimancia",
        "description": [
            "Você escreve seu Sigilo em uma pessoa ou mecanismo e em qualquer ponto do futuro, quando ver o alvo, pode acelerar seus movimentos deixando ele fazer [dados] ações adicionais em um turno.",
            "Em seguida, role 1d6. Se rolar 1, o alvo fica Exausto se for uma pessoa, e quebra se for um mecanismo."
        ],
        "duration": "Sigilo"
    },
    {
        "name": "Vidência",
        "school": "Arcana Ardilosa",
        "description": [
            "Você conjura um olho flutuante intangível em um ponto no espaço que você determina dentro do alcance, que não precisa estar na sua linha de visão. Enquanto manter concentração, pode enxergar por esse sensor com seus sentidos normais.",
            "A magia precisa de algum meio - geralmente um espelho, uma piscina ou lago quieto, nuvens ou uma fogueira. Se investir dois dados ou mais, o sensor cresce uma orelha e se investir 3 dados ou mais, o sensor se torna capaz de fala.",
            "Se usar uma bola de cristal de verdade, o alcance é infinito. Bolas de Cristal são muito raras então nunca são vendidas, mas tem o valor de um Tesouro."
        ],
        "range": "[dados] x 20 metros",
        "duration": "[dados] x 10 metros"
    },
    {
        "name": "Vigor",
        "school": "Fisiúrgia",
        "description": [
            "Você imbuí uma criatura ou um objeto com vida. Ela ganha [dados] x 2 PVs temporários."
        ],
        "range": "Toque",
        "duration": "1 dia"
    },
    {
        "name": "Vigor do Touro Alado",
        "school": "Vivimancia",
        "description": [
            "Você imbui [dados] criaturas com energia não natural, os dando os benefícios de uma noite de sono ruim. Eles se recuperam de Exaustão, mas usuários de Magia não recuperam seus DMs.",
            "Cada um deles ganham [dados] PVs temporários, mas tomam [dados] pontos de dano quando acordarem de um descanso de verdade."
        ],
        "range": "Toque"
    },
    {
        "name": "Virar Arte",
        "school": "Truques",
        "description": [
            "Um alvo que falhar um teste de resistência vira um objeto de arte pela duração. Você pode escolher o tipo de arte, mas deve manter as dimensões do alvo e ser evocativo dos traços originais.",
            "Dano ou mudanças feitas na obra acabam a magia, mas se retém no alvo. Investir 4 dados ou mais e assinar seu Sigilo fazem o efeito ser permanente."
        ],
        "range": "Toque",
        "duration": "[dados] x 10 minutos"
    },
    {
        "name": "Zoofobia",
        "school": "Animorfose",
        "warning": "[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez",
        "description": [
            "[soma] criaturas ficam Assustadas com [animais] ou coisas que parecem [animais].",
            "Se investir 4 dados ou mais e só usar a magia em uma criatura, o efeito se torna permanente."
        ],
        "range": "Visão",
        "duration": "[dados] x 10 minutos"
    }
];