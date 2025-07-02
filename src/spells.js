import "https://esm.sh/preact@10.26.9/debug";
import { h, render } from 'https://esm.sh/preact@10.26.9';
import { useState } from 'https://esm.sh/preact@10.26.9/hooks';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(h);

export function Spells() {
    return html`
        <h2>Catástrofe</h2>
        <p>Você mexeu com forças além das suas habilidades e eventualmente seus experimentos iam falhar.</p>
        
        <p>Na primeira vez que você receber uma <strong>Catástrofe</strong>, você recebe <strong>O Último Aviso</strong>.
        Nas demais vezes, role 1d12 para ver sua Catástrofe da tabela abaixo, rerrolando se já tiver tido esse efeito.</p>
        
        <ol>
            <li>
                <p><strong>Último Aviso:</strong> Pelo resto dessa sessão e na próxima, você não pode usar nenhuma ferramenta
                ou dizer frases com mais de 1 palavra.</p>
            </li>
            <li>
                <p><strong>Mutação Arcana:</strong> Você desenvolve uma mutação que precisa de esforço para esconder.
                Se gastar tempo demais em uma cidade, ou ter seu disfarce revelado para uma pessoa que não é um amigo ou Seguidor,
                você chama a atenção de algum grupo que quer te capturar.</p>
            </li>
            <li>
                <p><strong>Selo Mágico:</strong> Você se selou contra magia. Quando lançar uma magia, seus DMs são sempre
                gastos.</p>
            </li>
            <li>
                <p><strong>Preço da Segurança:</strong> Para cada magia na sua Psique, você deve usar outro espaço para
                guardar as "instruções de verdade" para usá-las. Você não consegue lançar Magias sem elas.</p>
            </li>
            <li>
                <p><strong>Alarme Arcano:</strong> Toda vez que você lançar uma magia, todos os seres inteligentes
                em um raio de 100 metros sabem a sua localização, como se uma sirene tivesse tocado.</p>
            </li>
            <li>
                <p><strong>Descivilizado:</strong> Humanóides te deixam desconfortável. Você deve rolar um teste
                de Vontade (Normal) toda vez que encontrar um que você não conheça.</p>
            </li>
            <li>
                <p><strong>Algemas Arcanas:</strong> Seus punhos estão colados magicamente.</p>
            </li>
            <li>
                <p><strong>Farol Antimagia:</strong> A área ao seu redor é completamente selada de mágica.
                Nenhuma magia te afeta e você não consegue lançar Magias. Fadas te evitam, agentes divinos e infernais
                te odeiam.</p>
            </li>
            <li>
                <p><strong>Revelação:</strong> Os céus se abrem pra você e você vê vistas de dimensões e cores
                que mortais jamais deveriam ver.</p>

                <p>Escolha 7 espaços da sua Psique (ou todos caso tenha menos) e role 1d6 para cada espaço.
                Caso role de 1 a 3, preencha aquele espaço com Trauma (Catástrofe).</p>
            </li>
            <li>
                <p><strong>Indetecção:</strong> Você é quase inperceptível: ninguém tenta interagir com você,
                e você não consegue interagir com nada que tenha significância. Você pode falar, mas não vai
                ser lembrado.</p>

                <p>Personagens que já se aventuraram com você se lembram que você existe e "sumiu". Você pode
                tentar fazer um teste de Vontade com desvantagem por personagem para passar uma mensagem.</p>
            </li>
            <li>
                <p><strong>Gosmificação:</strong> Você simplesmente não consegue manter uma forma.
                Você se tornou uma gosma. Você tem 3 espaços de Inventório e não consegue falar.</p>
            </li>
            <li>
                <p><strong>Deslocamento Forçado:</strong> Você tropeça entre os limites do espaço e tempo e desaparece.
                Você retorna sem memórias, pelado e sem nenhum item em um lugar aleatório 1d4 anos depois.</p>
            </li>
        </ol>
        
        <p>De maneira geral, Catástrofes podem ser revertidas com intervenção eclesiástica.
        Mas tudo tem seu preço, e cada Catástrofe aumenta os requisitos necessários para serem revertidas.</p>
        
        <p>Uma personagem que já teve 12 Catástrofes automaticamente morre se for ter uma 13ª.</strong>`;
}