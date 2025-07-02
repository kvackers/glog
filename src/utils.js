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

export const SPELLS = [
    {
        name: 'Animorfar', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            "Você toma a forma de um [animal] até o seu tamanho, incluindo suas habilidades naturais. Você mantém seus " +
            "PVs atuais, testes de ataque e de resistência mas não pode usar nenhuma habilidade que precisa de forma humana, " +
            "como lançar magias.",
            "Se investir 4 dados ou mais nessa magia, o efeito dura 1 dia."
        ], duration: '[dados] x 10 minutos'
    },
    {
        name: 'Apoteóse dos Cordyceps', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            "Você crava seu Sigilo em um fungo parasita, que você engole. Se morrer e for comido, uma criatura aleatória que te " +
            "consumiu vai ser infectada com seu parasita e morrer em 1d6 dias se não curada. Ao morrer, você toma controle do corpo.",
            "Você mantém seus poderes e estatísticas mentais mas assume as capacidades físicas do novo corpo, que vai progressivamente " +
            "decair ao longo de [soma] dias, quando o processo começa novamente.",
            "Toda vez que esse processo acontece tem uma chance de 1-em-6 que você reencarne como uma mosca."
        ], duration: 'Sigilo'
    },
    {
        name: 'Assustar Besta', school: 'Animorfose',
        description: [
            "Você produz um som extremamente alto e irritante, uma sequência extremamente brilhante e desagradavel de luzes " +
            "piscantes e um cheiro repugnante. Criaturas animalísticas ou despreparadas que conseguem te perceber devem fazer um " +
            "Teste ou ficarem Assustadas."
        ], range: 'Voz'
    },
    {
        name: 'Braço Tentáculo', school: 'Animorfose', description: [
            'Você transforma uma de suas mãos em um tentáculo longo e agarra algo. Então, escolha uma das ações:',
            'Agarrar: O alvo toma [soma] dano e não pode se mover no próximo turno.\n' +
            'Jogar: O alvo é empurrado 10 metros em uma direção. Toma [soma] dano e fica Caído.\n' +
            'Arrastar: Você puxa o alvo na sua direção, ou é puxado na direção dele, se o alvo for mais pesado.',
            'Se investir 4 dados ou mais e escrever seu Sigilo, suas mãos estão permanentemente transformadas. Você ' +
            'pode então usar as habilidades supracitadas sem gastar DMs, tendo dano de 1d6.'
        ], range: '10 metros'
    },
    {
        name: 'Chamada do [Animal]', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            "Você invoca [dados] DV de [animal], ou um enxame de [soma] PV se forem criaturas de 0 DV. Eles chegam depois de " +
            "10 minutos, vindo atrás de você. Você pode dirigir suas ações.",
            "Se investir 4 dados ou mais nessa magia, os efeitos se tornam permanentes e eles se tornam parte do seu grupo."
        ], duration: '[dados] horas'
    },
    {
        name: 'Charme [Animal]', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            'Você pode encantar até [dados] DV de [animais], as vítimas encantadas sem teste. Você também ganha a habilidade de ' +
            'ter comunicação limitada e, apesar dos animais não poderem ser diretamente comandados, vão estar geralmente inclinados ' +
            'a te ajudar.',
            'Se investir 4 dados ou mais nessa magia, o efeito se torna permanente e os alvos se tornam Seguidores.'
        ], range: '20 metros', duration: '[dados] x 10 minutos'
    },
    {
        name: 'Contorção', school: 'Animorfose',
        description: [
            "Você pode se esconder em espaços pequenos, ou se enfiar por lugares muito apertados com facilidade.",
            "Se investir 4 dados ou mais nessa magia e inscrever seu Sigilo, o efeito se torna permanente."
        ], duration: '[dados] x 10 minutos'
    },
    {
        name: 'Dar Aspecto de [Animal]', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            "Você traça seu Sigilo em um alvo e deixa um [animal] morder o Sigilo. Se a vítima sobreviver sem a ajuda de " +
            "remédios, seu corpo se torna mais bestial e eles tomam [dados] aspectos ou habilidades do animal em questão."
        ], duration: 'Sigilo'
    },
    {
        name: 'Enxame de Moscas', school: 'Animorfose',
        description: [
            'Crie um enxame de moscas de 10 metros. Nela, ações que dependem em visão são feitas com desvantagem. Criaturas ' +
            'vivas com 50% PV ou menos devem fazer um Teste a cada Rodada que passam nela ou contraem uma Doença.',
            'Se investir 4 dados ou mais e inscrever seu Sigilo, o efeito se torna permanente e te segue.'
        ], range: '1 hora', duration: '[soma] rodadas'
    },
    {
        name: 'Fiadeira Sedosa', school: 'Animorfose', description: [
            "Você desenvolve fiadeiras capazes de ejetar fios de 10 metros - com aspecto de cordas - de teia de areia. " +
            "Pela duração da magia você pode fazer as seguintes ações:",
            "Laçar: Faça um ataque a distância contra um alvo. Em sucesso, ele está paralisado.",
            "Prender: Se ancore a uma superfície adjacente com uma corda de 2 a 10 metros.",
            "Encasule: Tome 10 minutos para encasular um objeto parado em um casulo de seda.",
            "Se investir 4 dados ou mais e escrever seu Sigilo, o efeito se torna permanente."
        ], duration: '[dados] x 10 minutos'
    },
    {
        name: 'Maldição do [Animal]', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            "Uma criatura alvo da qual você pessoalmente tirou sangue é amaldiçoada com ataques constantes de [animais]." +
            "Ao longo da magia, [animal] vai atacar o alvo de qualquer sombra próxima. Toda vez que [animal] morrer, outro vai " +
            "aparecer imediatamente. A cada hora, um [animal] a mais vai aparecer. O alvo pode evitar isso estando em um espaço " +
            "sem nenhuma sombra. Quando o tempo acabar, todos os [animais] somem. Os [animais] dispersam em sombras quando mortos, " +
            "deixando nenhum rastro pra trás.",
            "Se investir 4 dados ou mais e inscrever seu Sigilo, o efeito se torna permanente."
        ], duration: '[dados] x horas'
    },
    {
        name: 'Nove Vidas', school: 'Animorfose', description: [
            "Você tatua seu Sigilo sobre seu coração. Nas próximas [dado] vezes que você tomar dano que te levaria a " +
            "0 PV ou menos, invés de Morrer ganhe 1 ponto de Destruição."
        ], duration: 'Sigilo'
    },
    {
        name: 'Possuir Pet', school: 'Animorfose',
        description: [
            "Controle completamente um animal no seu grupo. Você pode falar através dele mas não lançar magias. " +
            "Seu corpo real se torna cego e molenga.",
            "Se investir 4 dados ou mais nessa magia e inscrever seu Sigilo, o efeito se torna permanente e você pode " +
            "lançar magias na sua nova forma."
        ], range: 'Visão', duration: '[dados] x 10 minutos'
    },
    {
        name: 'Presas Venenosas', school: 'Animorfose',
        description: [
            'Você desenvolve quelíceras, que terminam em presas nos dois lados de sua boca, e que podem ser usadas para ' +
            'envenenar em um ataque com sucesso. Inimigos infectados sofrem 1d6 dano de veneno e devem fazer um teste contra ' +
            'um dos efeitos abaixo, determinado ao acaso (rolando 1d[dados * 2]):',
            '1. Halucinações\n' +
            '2. Movimentos Incontroláveis\n' +
            '3. Envenenamento\n' +
            '4. Sono\n' +
            '5. Evenenamento\n' +
            '6. Morte súbita em 1d6 rodadas\n' +
            '7. Pasmo\n' +
            '8. Morte instantânea',
            'Se investir 4 ou mais dados e escrever seu Sigilo, o efeito se torna permanente.'
        ], duration: '10 minutos'
    },
    {
        name: 'Reflexos Felinos', school: 'Animorfose',
        description: [
            "Você tem reações muito rápidas, mais rápidas que o olho pode ver. Você pode fazer uma manobra de combate - como " +
            "desarmar, trocar posições, empurrar, etc. - de graça sempre que for atacado.",
            "Com 4 dados, a magia te dá uma ação extra na sua Rodada."
        ], duration: '[soma] rodadas'
    },
    {
        name: 'Sentidos Apurados', school: 'Animorfose',
        description: [
            "Escolha [dados] das seguintes opções:",
            "Pode cheirar tão distante quanto vê.\nPode ouvir tão distante quanto vê.\n" +
            "Pode ver perfeitamente em penumbra e sombras.\nGanha visão arcana.",
            "Se investir 4 dados ou mais nessa magia e inscrever seu Sigilo, o efeito se torna permanente."
        ], duration: '1 hora'
    },
    {
        name: 'Singularidade de Propósito', school: 'Animorfose',
        description: [
            "Você nomeia uma tarefa específica. [soma] criaturas que consentiram ao efeito tem vantagem em todos os Testes " +
            "relacionados à tarefa, e desvantagem em todas as outras. A tarefa deve ser realisticamente capaz de ser feita em " +
            "um dia.",
            "Se investir 4 dados ou mais e escrever seu Sigilo em um colar que você veste, o efeito se torna permanente."
        ], range: '20 metros', duration: '1 hora'
    },
    {
        name: 'Spray de Tinta', school: 'Animorfose',
        description: [
            "Todos em um Cone ficam Cegos por [soma] rodadas ou até gastarem uma ação limpando seus olhos. Também cobre a " +
            "área afetada com tinta que não é facilmente removida."
        ], range: '10 m',
    },
    {
        name: 'Tarantella', school: 'Animorfose', description: [
            'Você dança freneticamente, como se estivesse sendo afetado pelo veneno da aranha tarantella. Todos que veem a ' +
            "dança devem fazer um Teste de Vontade ou dançar até você parar. Criaturas dançantes tem desvantagem em todos os " +
            "testes e ganham 1 nível de exaustão por 30 minutos de dança.",
            "Você pode proteger [dados] outras criaturas dos efeitos da sua magia."
        ]
    },
    {
        name: 'Teia', school: 'Animorfose',
        description: [
            'Preenche o espaço entre 1 + [dados] pontos dentro do espaço com teias grossas e pegajosas, prendendo qualquer ' +
            'criatura que a tocar. Aranhas e quem lançou a magia podem livremente andar e passar pelo espaço, e criaturas ' +
            'grandes podem quebrar a teia com um pouco de esforço. A teia é altamente inflamável.',
            'Se investir 4 ou mais dados, pode ver tudo que toca na teia, mesmo se estiver em outro lugar.'
        ], range: '20 metros'
    },
    {
        name: 'Zoofobia', school: 'Animorfose',
        warning: '[animal] deve ser substituído por uma espécie específica quando a magia for encontrada pela primeira vez',
        description: [
            '[soma] criaturas ficam Assustadas com [animais] ou coisas que parecem [animais].',
            'Se investir 4 dados ou mais e só usar a magia em uma criatura, o efeito se torna permanente.'
        ], range: 'Visão', duration: '[dados] x 10 minutos'
    },
];