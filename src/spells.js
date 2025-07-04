import "https://esm.sh/preact@10.26.9/debug";
import { h } from 'https://esm.sh/preact@10.26.9';
import { useState } from 'https://esm.sh/preact@10.26.9/hooks';
import htm from 'https://esm.sh/htm@3.1.1';
import { SPELL_SCHOOLS, SPELLS } from "./utils.js";

const html = htm.bind(h);

function compileText(element) {
    if (typeof element === "string") {
        return html`<p>${element}</p>`;
    } else if (typeof element === "object" && element.ol) {
        return html`
            <ol>
                ${element.ol.map(li => html`<li>${li}</li>`)}
            </ol>`;
    } else if (typeof element === "object" && element.ul) {
        return html`
            <ul>
                ${element.ul.map(li => html`<li>${li}</li>`)}
            </ul>`;
    }
}

function Spell({ spell }) {
    const { name, warning, description, range, duration } = spell;

    const rangeElem = range ? html`<p><strong>Alcance:</strong> ${range}</p>` : "";
    const durationElem = duration ? html`<p><strong>Duração:</strong> ${duration}</p>` : "";
    const warningElem = warning ? html`<p><em>${warning}</em></p>` : "";
    const descriptionElems = description ? description.map(compileText) : '';

    return html`
        <details class="pb-3">
            <summary class="header"><strong>${name}</strong></summary>
            <div class="d-flex justify-content-between">
                ${rangeElem}
                ${durationElem}
            </div>
            ${warningElem}
            ${descriptionElems}
        </details>`;
}

function SpellsBySchools() {
    const [school, setSchool] = useState("Animorfose");

    return html`
    <div class="btn-group w-100 mt-2" role="group">
            <button class="btn btn-outline-secondary header mb-1 w-33"
                    onclick=${() => setSchool("Animorfose")}>
                Animorfose
            </button>
            <button class="btn btn-outline-secondary header mb-1  w-33"
                    onclick=${() => setSchool("Apotropaísmo")}>
                Apotropaísmo
            </button>
            <button class="btn btn-outline-secondary header mb-1  w-33"
                    onclick=${() => setSchool("Arcana Ardilosa")}>
                Arcana Ardilosa
            </button>            
    </div>
    <div class="btn-group w-100" role="group">
            <button class="btn btn-outline-secondary header mb-1 w-25"
                    onclick=${() => setSchool("Elementalismo")}>
                Elementalismo
            </button>
            <button class="btn btn-outline-secondary header mb-1  w-25"
                    onclick=${() => setSchool("Fisiúrgia")}>
                Fisiúrgia
            </button>
            <button class="btn btn-outline-secondary header mb-1  w-25"
                    onclick=${() => setSchool("Hekafísica")}>
                Hekafísica
            </button>   
            <button class="btn btn-outline-secondary header mb-1  w-25"
                    onclick=${() => setSchool("Psicomancia")}>
                Psicomancia
            </button>            
    </div>
    <div class="btn-group w-100 mb-2" role="group">
            <button class="btn btn-outline-secondary header mb-1 w-33"
                    onclick=${() => setSchool("Translocação")}>
                Translocação
            </button>
            <button class="btn btn-outline-secondary header mb-1  w-33"
                    onclick=${() => setSchool("Truques")}>
                Truques
            </button>
            <button class="btn btn-outline-secondary header mb-1  w-33"
                    onclick=${() => setSchool("Vivimancia")}>
                Vivimancia
            </button>            
    </div>
    
    <p>
        <span class="header"><strong>${school}: </strong></span> 
        ${SPELL_SCHOOLS.filter(e => e.school === school)[0].description}
    </p>
    <p>Na descrição de magias, [dados] se refere ao número de DMs investidos e [soma] à soma desses dados
        quando rolados.</p>
    ${SPELLS.filter(sp => sp.school === school).map(sp => html`<${Spell} spell=${sp} />`)}`;
}

export function Spells() {
    const [spellUI, setSpellUI] = useState({ alpha: false })

    const spellHeader = spellUI.alpha ? "Magias em ordem alfabética " : "Magias por Escola ";
    const toggleSpellType = () => setSpellUI({ ...spellUI, alpha: !spellUI.alpha });

    const spellElems = spellUI.alpha ? html`
        <p>Na descrição de magias, [dados] se refere ao número de DMs investidos e [soma] à soma desses dados
        quando rolados.</p>
        ${SPELLS.map(sp => html`<${Spell} spell=${sp} />`)}` :
        html`<${SpellsBySchools} />`;

    return html`
        <div class="d-flex justify-content-between">
            <h2>${spellHeader}</h2>
            <button type="button" class="btn btn-outline-secondary" onclick=${toggleSpellType}>🔄</button>
        </div>
        ${spellElems}

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