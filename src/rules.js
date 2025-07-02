import "https://esm.sh/preact@10.26.9/debug";
import { h } from 'https://esm.sh/preact@10.26.9';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(h);

export function Rules() {
    return html`
        <h2>Como Jogar?</h2>
        <p>O mestre (GM) descreve uma situação e diz o que a sua personagem faria nesse contexto. Se achar necessário, o mestre
        pode pedir que você role um dado de 20 lados (d20) e adicione um número da sua ficha de personagem para ver se
        a personagem tem sucesso na ação.</p>

        <p>Se a situação for <strong>fácil</strong>, o resultado precisa ser maior que 10 para ter sucesso. 
        Se for <strong>normal</strong>, tem que ser maior que 15, e se for <strong>difícil</strong>, tem que ser maior que 20.</p>

        <p>Às vezes, o GM pode dizer que a situação te dá <strong>vantagem</strong> ou <strong>desvantagem</strong>.
        Rolar com vantagem significa que você rola duas vezes e escolhe o melhor resultado.
        Já com desvantagem, você rola duas vezes e escolhe o pior resultado.</p>
        
        <h2>Criando uma Personagem</h2>
        <p>Você tem três atributos principais:
        <strong>Força (FOR)</strong>, <strong>Destreza (DES)</strong> e <strong>Vontade (VON)</strong>. 
        Role <strong>1d6 + 2</strong> para determinar o valor de cada.</p>

        <p>Força determina sua resistência e quanto você consegue carregar,
        Destreza determina sua habilidade em combate e Vontade determina sua resistência a adversidade e quantos poderes
        você pode ter.</p>

        <p>Você tem tantos <strong>Pontos de Vida (PV)</strong> quanto sua FOR.</p>

        <p>Você tem um <strong>Inventório</strong> tão grande quanto o dobro de sua FOR,
        e uma <strong>Psique</strong> tão grande quanto o dobre de sua VON.</p>

        <p>Escolha uma <strong>Classe</strong>, adicione o equipamento inicial ao seu Inventório e as <strong>Perícias</strong>
        e <strong>Magias</strong> (se houverem) à sua Psique. Tome nota das Habilidades.</p>

        <p>Dê à sua personagem 1 ou 2 <strong>Crenças</strong>, que você deve adicionar à sua Psique. Crenças são qualquer coisa
        que impulsione a personagem a ir se aventurar: coisas pelas quais vale a pena morrer.</p>
        
        <h2>Perícias e Crenças</h2>
        <p>Uma <strong>Perícia</strong> pode ser qualquer conhecimento, e é guardada na sua Psique. Quando pedirem para rolar uma ação,
        se uma Perícia puder plausivelmente te ajudar, o desafio fica mais fácil.
        Testes difíceis se tornam normais, normais se tornam fáceis e fáceis viram sucessos.</p>

        <details class="pb-3">
        <summary class="header"><strong>Exemplo: Usando uma Perícia</strong></summary>
        
        <p>Alice tem uma perícia chamada "Moradora do Pântano". Quando tenta barganhar com um troll, o GM pede que ela faça um
        teste de Vontade difícil. Mas ela argumenta que sua Perícia iria fazê-la mais amigável ao monstro. 
        O GM concorda e agora Alice faz um teste normal de Vontade, só precisando rolar 15 invés de 20.</p>
        </details>

        <p>Uma <strong>Crença</strong> é qualquer coisa pela qual valha a pena morrer, e é guardada na sua Psique.
        Se você tomar um risco mortal por uma Crença durante o jogo, você vai ser recompensado quando <strong>Festejar</strong>.</p>

        <details class="pb-3">
        <summary class="header"><strong>Exemplo: Usando uma Crença</strong></summary>
        
        <p>Bruno está lutando com um troll perigoso. Alice decide sair de seu esconderijo para ajudá-lo pois sua personagem
        acredita em altruismo. No fim da anvetura, Alice pode remover um Trauma de sua Psique ou ganhar um novo seguidor
        que ficou impressionado pela suas Crenças.</p>
    
        </details>
        
        <h2>Inventório e Psique</h2>
        <p>Seu <strong>Inventório</strong> tem tantos espaços quanto o dobro de sua Força.</p>

        <p>Esses espaços podem ser preenchidos com objetos. Itens pequenos como poços, adagas e munição podem ser agrupados
        no seu Inventório em grupos de 10. Se carregar mais que sua capacidade, você fica <strong>Caído</strong>.</p>

        <p>Sua <strong>Psique</strong> tem tantos espaços quanto o dobro de sua Vontade.</p>

        <p>Esses espaços podem ser preenchidos com Perícias, Níveis de Classes, Magias, Seguidores e Crenças. 
        Se carregar mais que sua capacidade, você fica <strong>Atordoado</strong>. Você só pode remover coisas de sua Psique
        quando <strong>Festejar</strong>.</p>
        
        <h2>Combate</h2>
        <p><strong>Ordem do Turno:</strong> Você vai antes dos monstros, a menos que eles o tenha surpreendido. Quando em grupo,
        quem vai primeiro fica a critério dos jogadores.</p>

        <p><strong>Sua Rodada:</strong> Você pode andar pra perto, falar e fazer uma outra ação, como lançar uma magia ou atacar.</p>

        <p><strong>Atacar:</strong> O GM vai dizer se o alvo é fácil, normal ou díficil de atingir. Role Destreza.
        Se tiver sucesso, role o dano de sua arma e o GM vai subtrair da vida do monstro. Se o monstro tiver 0 ou menos PV, ele morre.</p>
        
        <p>Se o ataque rolar 20, vai dar o dobro do dano.</p>

        <p><strong>Defender:</strong> O GM vai dizer se o ataque é fácil, normal ou difícil de esquivar. Role Destreza.
        Se rolar 1, toma o dobro do dano.</p>

        <details class="pb-3">
        <summary class="header"><strong>Exemplo: Combate</strong></summary>
        
        <p>Bruno está lutando com um troll perigoso. Ele vai primeiro. No seu turno, ele grita para Alice deixar de covardia,
        ataca o troll com sua espada, e vai para a borda de um precípio, tentando atrair o monstro para uma posição precária.</p>

        <p>O GM fala para ele fazer um ataque normal, então ele rola 1d20 + DES esperando conseguir mais que 15. O resulto é 18,
        então o ataque é um sucesso! A espada dá 1d8 de dano ao troll, que entra em fúria.</p>

        <p>Agora é a vez do troll! O GM anuncia que o monstro persegue Bruno até a borda do precípio e tenta bater nele com sua
        clava. Ela precisa desviar! Ela rola 1d20 + DES e consegue 15! Não é o suficiente para desviar do troll.</p>

        <p>O GM rola o dano do monstro: 8. Bruno perde esse tanto de pontos de vida, chega a 0 PV e começa a <strong>Morrer</strong>.</p>
        </details>
        
        <h2>Morte, Cicatrizes, Traumas e Cura</h2>
        <p><strong>Morrer:</strong> Quando você atingir 0 PV, você fica Caído e começa a morrer.
        Se tomar dano enquanto você está Morrendo, você morre. Se você recuperar qualquer quantidade de PV enquanto estiver
        morrendo, você para de Morrer.</p>

        <p>Nas suas próximas 3 rodadas, você pode tentar <strong>Estabilizar</strong> invés de fazer outra coisa. Faça um teste
        difícil de Força. Em sucesso, você ganha 1 PV. Um aliado pode gastar a rodada dele fazendo um teste difícil de Vontade
        para a mesma coisa, se conseguir te alcançar e tiver Perícias ou Ferramentas apropriadas.</p>
        
        <p>Se você se recuperar de Morrer, você ganha uma Cicatriz. Se você morrer, todos seus companheiros ganham um Trauma.</p>
        
        <p><strong>Cicatrizes:</strong> Cicatrizes ocupam espaços de Inventório e só podem ser removidos por meios mágicos.
        Anote o que causou a Cicatriz. Enquanto você a tiver, você tem vantagem contra aquela coisa.</p>
        
        <p><strong>Traumas:</strong> Traumas ocupam espaços de Psique e só podem ser removidos ao arriscar sua própria vida
        por uma de suas Crenças. Anote o que causou o Trauma. Enquanto você o tiver, você tem desvantagem contra aquela coisa.</p>
        
        <p><strong>Descanso Curto:</strong> Um descanso de 30 minutos recupera 1 dado de vida e consome 1 ração ou 1 dose de água.</p>
        
        <p><strong>Descanso Longo:</strong> Um descanso de 8 horas recupera todos os PVs e consome 1 ração por pessoa.
        Descansos longos precisam de abrigo e calor.</p>

        <h2>Exploração</h2>
        <p>Tempo é gerenciado diferente dentro de masmorras ou quando você está viajando a céu aberto.</p>

        <p>Masmorras são divididas em salas. Dentro de uma masmorra, qualquer ação que valha a pena, como investigar uma
        sala ou lutar dura 10 minutos. Você rola apra ver se suas tochas apagam a cada 10 minutos, e o GM rola por encontros
        aleatórios a cada 30 minutos.</p>

        <p>Você pode cruzar 10 salas seguras que já tenha explorado por 10 minutos, ou 3 se quiser ser discreto.</p>

        <p>O mundo fora de uma masmorra (os Ermos) é dividido em hexágonos. Qualquer ação que valha a pena como atravessar
        ou explorar um hexágono dura 6 horas do dia (Madrugada, Dia, Tarde e Noite). O GM rola para encontros sempre que você
        entrar em um novo lugar, explorar um lugar ou descansar.</p>
        
        <h2>Armas Corpo-a-corpo</h2>
        <p><strong>Improvisada (garrafa, cadeira):</strong> 1d4 de dano, pode ser lançada.</p>
        <p><strong>Leve (adaga, dardo):</strong> 1d6 de dano, pode ser lançada, pode ser usada na mão não-principal.</p>
        <p><strong>Média (espada, machado):</strong> 1d8 de dano, 1d10 com duas mãos.</p>
        <p><strong>Pesada (espada longa, machado de guerra):</strong> 1d12 de dano, precisa de duas mãos.</p>
        <p><strong>Mastros (lanças, alabardas):</strong> 1d8 de dano, precisa de duas mãos, dá vantagem para desviar de ataques corpo-a-corpo de criaturas que você atingiu nesse turno.</p>

        <p>Se usar duas armas, quando rolar acima de 20 com sua arma principal, também pode fazer um teste de ataque com a outra mão.</p>
        
        <h2>Armas a Distância</h2>
        <p><strong>Leve (dardos):</strong> 1 de dano, pode atacar duas vezes.</p>
        <p><strong>Média (funda):</strong> 1d4 de dano.</p>
        <p><strong>Pesada (arcos):</strong> 1d6 de dano, precisa de duas mãos.</p>
        <p><strong>Mecânica (besta, musquete):</strong> 1d12 de dano, precisa de duas mãos e recarregar leva uma ação.</p>

        <h2>Armadura</h2>
        <p>Cada ponto de Armadura reduz dano físico em 1, até um total de 3 (armadura completa). Um escudo pode te dar 1 ponto 
        de redução de dano a mais.</p>
        <p>Você não pode nadar, pular ou fazer ações furtivas se estiver com armadura completa.</p>
        
        <h2>Tesouros</h2>
        <p>De maneira geral, objetos e valores podem ser divididos em 6 grandes faixas:</p>
        <ul>
            <li>
                <p><strong>Básico:</strong> Gastos pequenos do dia a dia, e valores que seriam confiados até
                mesmo a uma criança.</p>
                
                <p>Ex.: uma refeição, uma noite na pousada, fofoca, uma tocha, etc.</p>
            </li>
            <li>
                <p><strong>Mundano:</strong> Objetos do dia a dia produzidos em massa ou de baixo valor agregado.</p>
                
                <p>Ex.: uma faca, uma pá, 20 metros de corda, uma tarefa pequena, etc.</p>
            </li>
            <li>
                <p><strong>Artesanal:</strong> Objetos criados por artesãos e pequenos luxos.</p>
                
                <p>Ex.: uma espada, um elmo, uma couraça, um cavalo, um item de luxo, uma propina, etc.</p>
            </li>
            <li>
                <p><strong>Valioso:</strong> Objetos de valor ou raridade considerável, trabalho qualificado ou items
                mágicos menores.</p>
                
                <p>Ex.: uma poção, um pergaminho, veneno, um empregado, uma licença real, um objeto de mithral, etc.</p>
            </li>
            <li>
                <p><strong>Tesouro:</strong> Objetos de muito valor, geralmente com propriedades arcanas ou
                extra-dimensionais.</p>
                
                <p>Ex.: uma arma encantada, a escritura de uma casa, uma profecia, subir de nível.</p>
            </li>
            <li>
                <p><strong>Nacional:</strong> Objetos de valor cultural inmensuráveis, ou quantias que não tem preço.
                Geralmente podem ser usados pra fins políticos ou para trocar favores, mas não podem ser vendidos ou
                trocado diretamente.</p>
                
                <p>Ex.: a Coroa do Reino, a Espada da Rainha Passada e Futura, o Cetro da Rainha das Fadas.</p>
            </li>
        </ul>

        <p>Uma bolsa de moedas ocupa um espaço de Inventório.</p>

        <p>Quando estiver em uma cidade, você pode trocar items por outros na mesma categoria (à discrição do mestre,
        só dizer o que você está procurando).</p>

        <p>Quatro objetos de uma dada categoria tem um valor aproximado de um objeto na próxima categoria.</p>
        
        <h2>Progressão</h2>
        <p>Você sobe de nível quando gasta o equivalente de 
        um <strong>Tesouro</strong> ao <strong>Festejar</strong>. Quando subir de nível:</p>
        <ul>
            <li>Aumente seu PV em +2 (a um máximo de 20).</li>
            <li>Aumente um de seus atributos em 1 (a um máximo de 10).</li>
            <li>Ganhe o próximo nível de sua classe <strong>ou</strong> ganhe o primeiro nível (A) de outra classe (tendo 4 templates no máximo).</li>
        </ul>
        
        <h2>Festejar!</h2>
        <p>Quando voltar à cidade, está na hora de gastar sua recompensa! Escolha uma dessas atividades:</p>

        <details class="pb-3">
        <summary class="header"><strong>Celebre e ganhe Seguidores</strong></summary>
        
        <p>Vai beber e espalhar suas façanhas! Para cada objeto <strong>Valioso</strong> gasto de tal maneira, você ganha uma ressaca
        e um amigo aleatório na cidade. Esse amigo está disposto a fazer favores, mas vai continuar na cidade.</p>

        <p>Se gastar o equivalente de um <strong>Tesouro</strong>, um de seus amigos se torna um <strong>Seguidor</strong> e vai com
        você em suas aventuras, agindo como uma personagem sem classe (até subir de nível). Seguidores ocupam espaços na Psique.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Treine</strong></summary>
        
        <p>Novas experiências deixam você reavaliar o que você sabia e reconsiderar novas coisas. Role 1d6 e se rolar
        6, você pode trocar uma Perícia à sua escolha.</p>

        <p>Para cada objeto <strong>Valioso</strong> gasto nos seus preparos, você pode rerolar um dos seus atributos, guardando
        o maior valor.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Crie um Objeto</strong></summary>
        
        <p>Você precisa de materiais (como o couro do monstro que você matou) para criar algum objeto e gastar
        tanto quanto queira nas ferramentas. Os objetos criados podem ser qualquer coisa que possa ser feita
        primariamente com os materiais dados.</p>

        <p>Se você usar ferramentas mundanas, o objeto vai ser mundano. Se gastar o equivalente de um objeto
        <strong>Valioso</strong> com as ferramentas, o objeto vai ser especial (ainda que mundano), e se gastar
        o equivalente de um <strong>Tesouro</strong>, o objeto vai ser mágico.</p>

        <p>Discuta o que você quer com o GM.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Construa uma Casa</strong></summary>
        
        <p>Gastar um objeto <strong>Valioso</strong> dessa maneira vai gerar 1 móvel mundano.</p>

        <p>Se gastar o equivalente de um <strong>Tesouro</strong>, você também se torna o dono de uma estrutura
        da forma que você quiser com uma área de 100 m².</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Estude um Grimório</strong></summary>
        
        <p>Você precisa de um <strong>Grimório</strong> e um quantidade de materiais arcanos equivalente a
        um <strong>Tesouro</strong> para estudar magia.</p>

        <p>Quando estudar, escolha qual livro está estudando, ganhe o conhecido contido nele e role para escolher
        uma das magias dele. Se já souber a magia, role de novo.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Adestre uma Besta Capturada</strong></summary>
        
        <p>Você precisa ter capturado uma Besta Selvagem. Gaste um objeto <strong>Valioso</strong> para cada
        um dos Dados de Vida dela para fazê-la um de seus seguidores.</p>

        <p>Cada objeto <strong>Valioso</strong> a mais ensina a besta um comando de uma palavra. Caso não houver, ela
        só age para comer ou para se defender.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Faça um Pacto</strong></summary>
        
        <p>Você precisa ter um livro apropriado ou uma maneira de contatar a Entidade em questão. Para cada 
        objeto <strong>Valioso</strong> gasto nesse ritual, receba uma <strong>Obrigação</strong> e
        uma <strong>Recompensa</strong> oferecida pela criatura.</p>

        <p>Você se torna servo da Entidade até a <strong>Obrigação</strong> ser concluída e perde sua alma
        caso a falhe.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Construa um Constructo</strong></summary>
        
        <p>Você deve ter um manual de instruções ou ajuda qualificada. Cada Constructo tem instruções específicas
        na sua descrição, mas sempre precisa de magia e muitos <strong>Tesouros</strong>.</p>

        <p>Em um sucesso, você ganha um Seguidor muito poderoso. É esperado que a Equipe se junte para criar um Constructo.</p>
        </details>

        <details class="pb-3">
        <summary class="header"><strong>Ligue um Elemental a Você</strong></summary>
        
        <p>Você precisa ter a alma de um Espírito Elemental e gastar o equivalente de um <strong>Tesouro</strong> em materiais
        arcanos. Role de acordo com a descrição do Elemental. Você também ganha um Dado de Magia.</p>
        </details>

        <p>E, independente do resto, se tiver tomado um risco mortal por uma de suas Crenças, você pode
        remover um de seus Traumas, ganhar uma nova Perícia relacionada a sua ação arriscada ou ganhar um novo Seguidor.</p>

        <h2>Seguidores</h2>
        <p>Você ganha <strong>Seguidores</strong> ao Festejar, e um Seguidor ocupa um espaço de Psique.</p>
        <p>Role 1d6 para cada um dos atributos deles. Seguidores podem carregar 3 objetos e tem 2 PV.
        Eles podem ganhar uma Classe do mesmo jeito que uma personagem normal, e se o fizerem,
        ganham +2 para todos seus atributos, PV e Inventório.</p>
        
        <h2>Usar Magias</h2>
        <p>Algumas classes podem lançar magias. Elas tem Dados de Magia (DM)</p>

        <p><strong>Lançando Magias:</strong> Quando for lançar uma magia, escolha quandos DMs quer investir nela.
        O resultado vai depender no número de dados e a soma deles.</p>

        <p>Se um DM rolar 1, 2 ou 3, você não o perde. Caso contrário, você perde ele até ter um Descanso Completo.
        Você não pode lançar magias sem DMs.</p>

        <p>Cada vez que rolar dois números iguais, você fica mais próximo de uma <strong>Catástrofe</strong>.</p>

        <p><strong>Catástrofe:</strong> Cada vez que rola dois números iguais em um DM, você ganha 1 ponto de Destruição.
        Role um d20. Se rolar igual ou abaixo de seu pontos de Destruição, você ativa uma Catástrofe e reseta seus pontos
        de Destruição.</p>

        <p><strong>Sigilos:</strong> Algumas magias mencionam um <strong>Sigilo</strong>. É o seu símbolo único.
        Uma magia lançada com um Sigilo leva 10 minutos para lançar, mas dura para sempre (a menos que alguém deliberadamente
        a cancele).</p>

        <p>Você tem tantos Sigilos quanto níveis.</p>
        
        <h2>Condições</h2>
        <ul>
            <li class="pb-2"><strong>Assustado:</strong> Você não pode interagir com a fonte do medo até que tenha gasto 1 Turno inteiro sem a ver.
            Role 1d6:
            <ol>
                <li>Segure o que estiver segurando.</li>
                <li>Grite</li>
                <li>Fique Caído</li>
                <li>Paralise o aliado ou objeto mais próximo</li>
                <li>Fuja</li>
                <li>Fique Pasmo por um turno</li>
            </ol></li>
            <li class="pb-2"><strong>Atordoado:</strong> Você pode agir <strong>ou</strong> se mover na sua Rodada.</li>
            <li class="pb-2"><strong>Caído:</strong> Combate corpo-a-corpo é difícil. Desviar de ataques a distância é fácil. Levantar usa todo seu movimento.</li>
            <li class="pb-2"><strong>Cego:</strong> Todos os testes de Destreza são difíceis.</li>
            <li class="pb-2"><strong>Confuso:</strong> Você pode agir <strong>ou</strong> se mover na sua Rodada.</li>
            <li class="pb-2"><strong>Encantado:</strong> Você falha todos os testes contra o Encantador. Se atacar, machucar ou dizer algo ruim contra ele, tome 1d4 de dano psíquico.</li> 
            <li class="pb-2"><strong>Envenenado:</strong> Desvantagem em todos os seus testes. Venenos específicos podem ter efeitos específicos.</li>         
            <li class="pb-2"><strong>Exausto:</strong> Você pode agir <strong>ou</strong> se mover na sua Rodada.</li>
            <li class="pb-2"><strong>Invisível:</strong> Atacar e desviar é fácil. Ninguém te vê.</li>
            <li class="pb-2"><strong>Paralisado:</strong> Você não pode se mover. Role 1d6, se rolar de 1 a 3, não pode atacar,
             caso contrário, não pode esquivar.</li>
            <li class="pb-2"><strong>(Não) Respirando:</strong> Você pode segurar seu fôlego por tantas Rodadas quanto sua Força.
            Se tomar dano, faço um teste de Força. Se falhar, você começa a Morrer.</li>       
            <li class="pb-2"><strong>Pasmo:</strong> Você perde sua Rodada. Todos os testes são difíceis.</li>
        </ul>`;
}