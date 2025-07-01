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

        <p>Se a situação for <strong>fácil</strong>, o resultado precisa ser maior que 10 para ter sucesso. Se for normal, tem que ser maior que 15,
        e se for difícil, tem que ser maior que 20.</p>

        <!-- 
        The referee describes a situation and you tell what your character would do in that context.
        The referee might ask you to roll a d20-faced die and add a number from your character sheet to see
        if your character succeeds in its action.
        
        If the situation is easy, the result must beat 10 to succeed, if it’s normal, it has to beat 15, and if it’s hard, 20.
        Either way, the referee describes the new situation, and so on.

        Sometimes, the referee might tell you that the situation gives you advantage or disadvantage.
        Rolling with advantage means you roll twice and choose the best result. Disadvantage is the opposite.

        That’s it! -->
        
        <h2>Criando uma Personagem</h2>
        <p>blah blah</p>
        
        <h2>Perícias e Crenças</h2>
        <p>blah blah</p>
        
        <h2>Inventório e Psique</h2>
        <p>blah blah</p>
        
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