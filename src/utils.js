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
    tab: "spells",//"rules"
};

export const SPELL_SCHOOLS = [
    { school: "Animorfose", description: 'Magias relacionadas a se tornar como uma espécie animal' },
    { school: "Apotropaísmo", description: 'Magias que estudam selos e proteção contra maldições e o mal' },
    { school: "Elementalismo", description: 'Magias que lidam com os espíritos da terra' },
    { school: "Fisiúrgia", description: 'Remédios e curas tradicionais' },
    { school: "Translocação", description: 'A manipulação paradoxical do espaço e do tempo' },
    { school: "Truques", description: 'A arte de encantar objetos do dia-a-dia de modo utilitário' },
]

export const SPELLS = [
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
        "name": "Assustar Besta",
        "school": "Animorfose",
        "description": [
            "Você produz um som extremamente alto e irritante, uma sequência extremamente brilhante e desagradavel de luzes piscantes e um cheiro repugnante. Criaturas animalísticas ou despreparadas que conseguem te perceber devem fazer um Teste ou ficarem Assustadas."
        ],
        "range": "Voz"
    },
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
        "name": "Círculo de Areia",
        "school": "Apotropaísmo",
        "description": [
            "Você regula a temperatura em uma área. Você toma 10 minutos para traçar um círculo em areia e o completar com Sigilo. O círculo pode ter até [dados] x 6 metros de diâmetro. Uma vez completo, a temperatura dentro do círculo muda por [soma] x 5 ºC para cima ou para baixo.",
            "Cada 30 graus abaixo de zero causa 1d6 de dano frio por hora, enquanto cada 30 graus acima de 40 ºC causa 1d6 de dano de fogo."
        ],
        "duration": "Sigilo"
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
        "name": "Nove Vidas",
        "school": "Animorfose",
        "description": [
            "Você tatua seu Sigilo sobre seu coração. Nas próximas [dado] vezes que você tomar dano que te levaria a 0 PV ou menos, invés de Morrer ganhe 1 ponto de Destruição."
        ],
        "duration": "Sigilo"
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
        "name": "Reflexos Felinos",
        "school": "Animorfose",
        "description": [
            "Você tem reações muito rápidas, mais rápidas que o olho pode ver. Você pode fazer uma manobra de combate - como desarmar, trocar posições, empurrar, etc. - de graça sempre que for atacado.",
            "Com 4 dados, a magia te dá uma ação extra na sua Rodada."
        ],
        "duration": "[soma] rodadas"
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
        "name": "Sacrifício ao Sol",
        "school": "Apotropaísmo",
        "description": [
            "Você atira um alvo vivo, o ateando em fogo. Você tem um bônus de [soma] ao seu teste de ataque enquanto o faz, e, se o alvo quiser, ele toma [soma] dano de fogo extra.",
            "Se a vítima sacrificial morrer, ela se imola em uma bola de fogo massiva que dá [soma] x [DV] de dano de fogo para tudo em seu alcance. Isso ignora resistências e imunidades de criaturas mortas-vivas ou \"da noite\"."
        ]
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
]