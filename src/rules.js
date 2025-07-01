import "https://esm.sh/preact@10.26.9/debug";
import { h, render } from 'https://esm.sh/preact@10.26.9';
import { useState } from 'https://esm.sh/preact@10.26.9/hooks';
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
        <p>blah blah</p>

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
        <p>Cada objeto que você encontra tem um certo valor dado pelo GM:</p>
        <ul>
            <li>Mundano (uma bolsa de moedas de cobre)</li>
            <li>Útil (uma bolsa de moedas de prata)</li>
            <li>Valioso (uma bolsa de moedas de ouro)</li>
            <li>Tesouro (uma bolsa de moedas de pedras preciosas)</li>
        </ul>

        <p>Uma bolsa de moedas ocupa um espaço de Inventório.</p>
        <p>Quando estiver em uma cidade, você pode trocar items por outros na mesma categoria (à discrição do mestre,
        só dizer o que você está procurando).</p>
        <p>Alternativamente, 4 objetos de uma dada categoria tem um valor aproximado de um objeto na próxima categoria.</p>
        
        <h2>Progressão</h2>
        <p>Você sobe de nível quando gasta o equivalente de 
        um <strong>Tesouro</strong> ao <strong>Festejar</strong>. Quando subir de nível:</p>
        <ul>
            <li>Aumente seu PV em +2 (a um máximo de 20).</li>
            <li>Aumente um de seus atributos em 1 (a um máximo de 10).</li>
            <li>Ganhe o próximo nível de sua classe <strong>ou</strong> ganhe o primeiro nível (A) de outra classe (tendo 4 templates no máximo).</li>
        </ul>
        
        <h2>Festejar!</h2>
        <p>blah blah</p>
        
        <h2>Seguidores</h2>
        <p>Você ganha <strong>Seguidores</strong> ao Festejar, e um Seguidor ocupa um espaço de Psique.</p>
        <p>Role 1d6 para cada um dos atributos deles. Seguidores podem carregar 3 objetos e tem 2 PV.
        Eles podem ganhar uma Classe do mesmo jeito que uma personagem normal, e se o fizerem,
        ganham +2 para todos seus atributos, PV e Inventório.</p>
        
        <h2>Usar Magias</h2>
        <p>blah blah</p>
        
        <h2>Condições</h2>
        <p>blah blah</p>`;
}