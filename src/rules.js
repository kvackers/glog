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

        <!-- -->
        
        <h2>Combate</h2>
        <p>blah blah</p>
        
        <h2>Morte, Cicatrizes, Traumas e Cura</h2>
        <p>blah blah</p>
        
        <h2>Exploração</h2>
        <p>blah blah</p>
        
        <h2>Armas Corpo-a-corpo</h2>
        <p>blah blah</p>
        
        <h2>Armas a Distância</h2>
        <p>blah blah</p>
        
        <h2>Tesouros</h2>
        <p>blah blah</p>
        
        <h2>Progressão</h2>
        <p>blah blah</p>
        
        <h2>Festejar!</h2>
        <p>blah blah</p>
        
        <h2>Seguidores</h2>
        <p>blah blah</p>
        
        <h2>Usar Magias</h2>
        <p>blah blah</p>
        
        <h2>Condições</h2>
        <p>blah blah</p>`;
}