import "https://esm.sh/preact@10.26.9/debug";
import { h } from 'https://esm.sh/preact@10.26.9';
import { useState } from 'https://esm.sh/preact@10.26.9/hooks';
import htm from 'https://esm.sh/htm@3.1.1';
import { SACRAMENTS } from "./utils.js";

const html = htm.bind(h);

function Sacrament({ sacrament }) {
    return html`
    <details>
        <summary>${sacrament.name}</summary>
        ${sacrament.powers.map(p => html`<p>${p}</p>`)}

        <p>Role 1d4 e aprenda a magia rolada. Se já a souber, rerole:</p>
        <ol>
            ${sacrament.spells.map(s => html`<li>${s}</li>`)}
        </ol>
    </details>`
}

export function Classes() {
    const [klass, setClass] = useState("wizardA");

    const isActive = name => name === klass ? "active" : "";
    const displayClass = name => name === klass ? "" : "d-none";
    const makeActive = name => setClass(name);

    return html`
        <ul class="nav nav-pills">
        <li class="nav-item">
                <a class="nav-link ${isActive("wizardA")}" href="#"
                   onclick=${() => makeActive("wizardA")}>
                   Arcanista
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("geralA")}" href="#"
                   onclick=${() => makeActive("geralA")}>
                   Bárbaro
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("wizardB")}" href="#"
                   onclick=${() => makeActive("wizardB")}>
                   Clérigo
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("faunaA")}" href="#"
                   onclick=${() => makeActive("faunaA")}>
                   Elfo
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("fighterA")}" href="#"
                   onclick=${() => makeActive("fighterA")}>
                   Guerreiro
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("geralB")}" href="#"
                   onclick=${() => makeActive("geralB")}>
                   Ladino
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("fighterB")}" href="#"
                   onclick=${() => makeActive("fighterB")}>
                   Ogro
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link ${isActive("faunaB")}" href="#"
                   onclick=${() => makeActive("faunaB")}>
                   Profundo
                </a>
            </li>
        </ul>
        <hr />
        
        <section class="${displayClass("fighterA")} pb-3">
            <h2>Guerreiro</h2>

            <h4>Equipamento Inicial:</h4>
            <p>Escolha três vezes das opções abaixo:</p>
            <ul>
                <li>1 arma à sua escolha</li>
                <li>12 unidades de munição</li>
                <li>Uma peça de armadura</li>
                <li>Um escudo</li>
            </ul>

            <h4>Perícias Iniciais</h4>
            <p>Escolha uma das opções abaixo:</p>
            <ul>
                <li>Infantaria Imperial</li>
                <li>Marinha Imperial</li>
                <li>Nobre Charmoso</li>
                <li>Batedor de Caravanas</li>
                <li>Guardacostas Mercernário</li>
            </ul>

            <h4>Templates</h4>
            <p>Para cada Template de Guerreiro que você tem, você ganha 1 ponto de <strong>Resiliência</strong></p>

            <ol type="A">
                <li>Experiência com Armas, Riposte</li>
                <li>Aura Experiente, Pelotão</li>
                <li>Truques de Batalha</li>
                <li>Maestria com Armas</li>
            </ol>

            <h4>Experiência com Armas</h4>
            <p>Você pode usar Força ou Destreza para seus testes de ataque corpo-a-corpo. Quando não atingir um ataque corpo-a-corpo, o alvo toma dano igual a seus pontos de <strong>Resiliência</strong></p>

            <h4>Riposte</h4>
            <p>Uma vez por batalha, você pode destruir uma arma ou escudo que está segurando para se proteger ou proteger um aliado adjacente do dano de um ataque.</p>

            <h4>Aura Experiente</h4>
            <p>Você projeta uma aura intimidadora que deixa pessoas saber que é um guerreiro experiente. A qualquer momento, você pode decidir como criaturas fracas reagem a você:</p>
            <ul>
                <li>Elas evitam lutar com você a menos que você as ataque</li>
                <li>Elas juntam em você e ignoram seus colegas de equipe</li>
            </ul>

            <p>Criaturas fracas sendo criaturas com menos que 4 x <strong>Resiliência</strong></p>

            <h4>Pelotão</h4>
            <p>Sua liderança é lendária. Seus seguidores tem PV bônus igual a sua <strong>Resiliência</strong> e também tem sua Perícia inicial.</p>

            <h4>Truques de Batalha</h4>
            <p>Suas armas corpo-a-corpo tem efeitos diferentes em acertos dependendo do dano que você dá com ela:</p>
            <ul>
                <li><strong>Impacto:</strong> Criaturas fracas ficam Caídas</li>
                <li><strong>Perfurante:</strong> Criaturas fracas que estão Caídas, Surpresas, Pasmas ou Atordoadas morrem</li>
                <li><strong>Cortante:</strong> Você inflinge <strong>Resiliência</strong> de dano a um alvo adjacente.</li>
            </ul>

            <h4>Maestria com Armas</h4>
            <p>Você pode fazer um ataque a mais por rodada</p>
        </section>
        
        <section class="${displayClass("fighterB")} pb-3">
            <h2>Ogro</h2>

            <h4>Equipamento Inicial:</h4>
            <ul>
                <li>1 Arma Pesada</li>
                <li>2 Rações</li>
                <li>1 Panela Grande</li>
            </ul>

            <h4>Perícias Iniciais</h4>
            <p><strong>Destruir</strong> e uma das opções abaixo:</p>
            <ul>
                <li>Comida</li>
                <li>Goblins</li>
                <li>Intimidação</li>
            </ul>

            <h4>Templates</h4>
            <p>Para cada Template de Ogro que você tem, você cresce, ganhando 1 espaço de Inventório preenchido com <strong>Músculos</strong>.</p>

            <p>Esses Templates contam como Templates Raciais.</p>

            <ol type="A">
                <li>Bulking, Esmagar</li>
                <li>Enorme, Intimidar</li>
                <li>Lanchinho</li>
                <li>Metabolismo Avançado</li>
            </ol>

            <h4>Bulking</h4>
            <p>Para cada espaço de Inventório que tiver preenchido por <strong>Músculos</strong>, ganhe 1 PV a mais.</p>

            <p>Você pode comer qualquer objeto maior que uma galinha e menos duro que aço como uma Ração. Cada vez que Festejar e cada vez que comer pelo menos 10 rações antes de descansar durante uma aventura, você ganha uma camada de <strong>Músculos</strong> em seu Inventório.</p>

            <p>Se comer menos Rações em um dia que o número de <strong>Músculos</strong> que tiver, você perde 1 camada de <strong>Músculos</strong>. Esse é o único jeito de remover <strong>Músculos</strong></p>

            <p>Você não pode escolher esse Template se já tiver um Template Racial.</p>

            <h4>Esmagar</h4>
            <p>Quando você usa armas de impacto, seu dado de dano aumenta em 1 passo por padrão, e mais uma vez para cada 5 espaços de Inventório preenchido por <strong>Músculos</strong>.</p>

            <h4>Enorme</h4>
            <p>Você pode carregar tantos itens pesados quantos Templates de Ogro que você tem sem que ocupem um espaço de Inventório. Um item pesado é qualquer coisa maior ou mais pesado que um adulto humano mediano.</p>

            <h4>Intimidar</h4>
            <p>Uma vez por encontro, você pode dar um comando de uma palavra para um humanóide menor que você. A criatura pode escolher ficar Caído invés de obedecer a ordem. Você ainda pode fazer outras ações durante seu turno.</p>

            <h4>Lanchinho</h4>
            <p>Você toma metade de dano da última coisa que você comeu e, se foi um objeto, seus testes para destruir coisas como ela são fáceis. Se foi um item mágico, você ganha seus poderes.</p>

            <h4>Metabolismo Avançado</h4>
            <p>Você pode comer e digerir qualquer coisa menos dura que diamante como Ração. Você pode preencher sua Psique com <strong>Músculos</strong></p>
        </section>
        
        <section class="${displayClass("wizardA")} pb-3">
            <h2>Arcanista</h2>

            <h4>Equipamento Inicial:</h4>
            <ul>
                <li>1 Chapéu Estranho <strong>ou</strong> 1 Vestimenta Excêntrica</li>
                <li>Materiais de Escrita</li>
                <li>1 Grimório</li>
            </ul>

            <h4>Perícias Iniciais</h4>
            <p>Escolha uma das opções abaixo:</p>
            <ul>
                <li>Diplomado</li>
                <li>Alquimista</li>
                <li>Charlatão</li>
                <li>Recluso Herege</li>
            </ul>

            <h4>Templates</h4>
            <p>Para cada Template de Arcanista que você tem, você ganha 1 Dado de Magia, 1 Sigilo para usar e 1 <strong>Estudo</strong>.</p>

            <ol type="A">
                <li>Magia Arcana, Análise Literária</li>
                <li>Laboratório Alquêmico</li>
                <li>Pesquisa Fragmentada</li>
                <li>Truque de Mágica</li>
            </ol>

            <h4>Magia Arcana</h4>
            <p>Escolha 3 escolas de magia, e uma Magia de cada uma delas. Você sabe essas Magias (e são guardadas na sua Psique). Você ganha mais 3 espaços de Inventório de Psique.</p>

            <p>Escolha 1 escola de Magia, você é fisicamente incapaz de aprender Magias dessa escola e desaprende todas as Magias que souber dessa escola.</p>

            <p>É impossível escolher esse Template se você tem o Template "Magia Divina".</p>

            <h4>Análise Literária</h4>
            <p>Tendo acesso a um Grimório, você pode gastar 1 <strong>Estudo</strong> para analisá-lo. Isso dá algum pequeno poder e lhe ensina uma magia aleatória.</p>

            <h4>Laboratório Alquêmico</h4>
            <p>Tendo espaço, preparo e os demais pré-requisitos, uma vez por dia você pode gastar uma quantia Mundana de materiais arcanos e sintetizar uma magia em uma Poção.</p>

            <p>O comportamento da poção (como interage com quem bebe ou em que ou no que é derramada) é determinada na hora da preparação.</p>

            <p>Magias da escola Arcana Ardiloso não podem ser sintetizadas.</p>

            <h4>Pesquisa Fragmentada</h4>
            <p>Em uma cidade, para cada quantia Valiosa de materiais que você gastar em sua pesquisa, você aumenta sua chance de sintetizar um Grimório em 20%, como determinado em um d10.</p>

            <p>Se rolar 1 e não for um sucesso, você ganha 1d4 pontos de Destruição.</p>

            <h4>Passe de Mágica</h4>
            <p>Escolha uma Magia que você saiba. Você pode lançá-la como se tivesse investido 1 DM sem gastar 1 DM.</p>
        </section>
        
        <section class="${displayClass("wizardB")} pb-3">
            <h2>Clérigo</h2>

            <h4>Equipamento Inicial:</h4>
            <ul>
                <li>1 Vestimentas Santas</li>
                <li>1 Incensório</li>
                <li>1 Livro Sagrado</li>
            </ul>

            <h4>Perícias Iniciais</h4>
            <p><strong>As Escrituras Sagradas</strong> e uma das opções abaixo:</p>
            <ul>
                <li>Linguas Mortas</li>
                <li>Pregação</li>
                <li>Inquisição</li>
            </ul>

            <h4>Templates</h4>
            <p>Para cada Template de Clérigo que você ter, escolha 1 <strong>Sacramento</strong>.</p>

            <ol type="A">
                <li>Magia Divina, Pequenos Ritos</li>
                <li>Patente Divina</li>
                <li>Auto-de-fé</li>
                <li>Ligação Divina</li>
            </ol>

            <h4>Sacramentos</h4>
            <div class="pb-3">
                ${SACRAMENTS.map(s => html`<${Sacrament} sacrament=${s} />`)}
            </div>

            <h4>Magia Divina</h4>
            <p>Escolha 2 Magias das escolas de Fisiúrgia, Apotropaísmo ou Truques. Você sabe essas Magias (e as guarda na sua Psique). Você ganha 3 espaços de Psique a mais.</p>

            <p>Hereges (Arcanistas, Profundos e Infernais) podem escolher esse template.</p>

            <h4>Pequenos Ritos</h4>
            <p>Você pode fazer os seguintes ritos:</p>
            <ul>
                <li class="pb-1"><strong>Missa:</strong> Ao começar um dia, você pode gastar 30 minutos a fazer uma missa. Todos que ouvem ganham um bônus de +1 em testes de Vontade durante o dia.</li>
                <li class="pb-1"><strong>Batismo:</strong> Você abençoa um bebê, uma pessoa que voltou dos mortos na última semana. Essa pessoa ganha PV temporários igual ao seu número de <strong>Sacramentos</strong>.</li>
                <li class="pb-1"><strong>Casamento:</strong> Você junta duas pessoas em um laço matrimonial. Enquanto essas pessoas estiverem adjacentes, toda vez que um deles chegue a 0 PV, pode drenar 1 PV do outro.</li>
                <li class="pb-1"><strong>Funeral:</strong> Você toca um corpo morto e faz uma pregação de 10 minutos, garantindo que não possa ser usado para fins necromânticos.</li>
            </ul>

            <p>Nenhum dos ritos afeta hereges.</p>

            <h4>Patente Divina</h4>
            <p>Pessoas sentem sua aura divina e você comanda respeito na Igreja. Você sempre pode pedir abrigo para você e seus companheiros (não hereges) em igrejas e monastérios, e pessoas religiosas vão estar predispostas a te ajudar.</p>

            <h4>Auto-de-fé</h4>
            <p>Você pode queimar uma pessoa sofrendo uma Catástrofe ou Maldição em uma fogueira até que tenha 1 PV. Quando o fizer, role 1d5. Se rolar mais que 1, a Maldição ou Catástrofe passa como se nunca tivesse acontecido.</p>

            <p>A pessoa queimada ganha um Trauma (Fogo), uma Cicatriz (Fogo) e permanentemente perde 1d4 PV (nunca abaixando o máximo para menos de 1).</p>

            <h4>Ligação Divina</h4>
            <p>Você pode gastar 10 minutos para fazer um pedido direto para as divindades e pedir orientação. Mecanicamente, faça uma pergunta pro GM e ele vai responder de maneira honesta.</p>

            <p>Depois disso, a cada nascer do sol que você ver, role 1d4. Se rolar 4, você pode usar habilidade de novo. Caso contrário, o limite que precisa rolar diminui em 1 a cada nascer do sol.</p>
        </section>
        
        <section class="${displayClass("geralA")} pb-3">
            <h2>Bárbaro</h2>

            <h4>Equipamento Inicial:</h4>
            <p>Um <strong>Objeto de Casa</strong></p>

            <h4>Perícias Iniciais</h4>
            <p><strong>Terras Estrangeiras</strong> e uma das opções abaixo:</p>
            <ul>
                <li>Explorador</li>
                <li>Diplomata</li>
                <li>Refugiado</li>
            </ul>

            <h4>Templates</h4>
            <p>Para cada Template de Bárbaro que você ter, você ganha um <strong>Objeto de Casa</strong> a mais (ou seja, você ganha um segundo no Nível 1).</p>

            <ol type="A">
                <li>Contexto Cultural, Forasteiro</li>
                <li>Como Você Faz</li>
                <li>Parágono, -1 Desvantagem Cultural</li>
                <li>Sincretismo, -1 Desvantagem Cultural</li>
            </ol>

            <h4>Objeto de Casa</h4>
            <p>Um <strong>Objeto de Casa</strong> pode ser uma arma, uma peça de armadura, ou uma ferramenta com um propósito específico (que pode ser social). Aos locais, parece estranho e exótico.</p>

            <p>Nas suas mãos, uma Arma de casa tem um dado de dano um passo maior que o equivalente local, uma peça de armadura dá +1 de proteção e você tem vantagem quando usa uma ferramenta de casa.</p>

            <p>Você só pode escolher esse Template se não tiver Templates anteriores, ou se seus Templates anteriores forem raciais.</p>

            <h4>Contexto Cultural</h4>
            <p>Você se encontra em uma cultura com expectativas muito diferentes do normal. Assim, você consegue fazer coisas que parecem milagrosas para certas pessoas e coisas que parecem muito burras para outras. Role 5 vezes em cada tabela abaixo e escolha 4 resultados, lembrando que os resultados são relativos ao mundo que você se encontra agora.</p>

            <details class="pb-3">
                <summary>1d20 Vantagens</summary>

                <ol>
                    <li>Você consegue falar com cavalos <strong>ou</strong> árvores <strong>ou</strong> pessoas inconscientes.</li>
                    <li>Você tem Perícia em Alquemia</li>
                    <li>Você tem Perícia em Matemática</li>
                    <li>Você consegue lutar perfeitamente no escuro, ler lábios e sinais</li>
                    <li>Você sempre consegue dizer quando alguém está mentindo</li>
                    <li>Você consegue ver o nível de uma criatura ao ver ela lutar</li>
                    <li>Você tem Perícia em Economia <strong>ou</strong> Política</li>
                    <li>Você sempre pode prever o tempo</li>
                    <li>Você sabe os poderes e fraquezas de anjos e demônios que encontrar</li>
                    <li>Você encanta e é encantado por fazendeiros <strong>ou</strong> mercantes <strong>ou</strong> ou nobres</li>
                    <li>Você sempre pode disaparecer em uma multidão</li>
                    <li>Você consegue andar na água</li>
                    <li>Você pode mudar sua apresentação de gênero a vontade</li>
                    <li>Você não deixa rastros e não tem cheiro</li>
                    <li>Você pode ver perfeitamente na luz das estrelas</li>
                    <li>Você está imune a maioria das loucuras</li>
                    <li>Você consegue dormir confortavelmente na maioria das circunstâncias</li>
                    <li>Você pode identificar a hierarquia social com uma vista rápida</li>
                    <li>Você reconhece o autor de textos escritos quando o ver em pessoa</li>
                    <li>No momento mais conveniente, o GM vai anunciar que um NPC acha que você é a alma gêmea dele</li>
                </ol>
            </details>

            <details class="pb-3">
                <summary>1d20 Desvantagens</summary>

                <ol>
                    <li>Você não entende advogados <strong>ou</strong> nobres <strong>ou</strong> bêbados</li>
                    <li>Você não entende educação e cortesia</li>
                    <li>Você não entende reprodução sexual</li>
                    <li>Você é incapaz de introspecção</li>
                    <li>Você não entende arte</li>
                    <li>Você é não reconhece rostos</li>
                    <li>Você não entende guerra</li>
                    <li>Você não consegue compreender religião</li>
                    <li>Você não consegue entender leis</li>
                    <li>Você tem um juramento contra mercantes <strong>ou</strong> nobres <strong>ou</strong> vagabundos</li>
                    <li>Você se perde em florestas</li>
                    <li>Você vai afogar na areia</li>
                    <li>Você tem um juramento contra couro, pelo e fios de arcos</li>
                    <li>Você considera Traição tão chulo que você nem consideraria isso como opção</li>
                    <li>Pássaros <strong>ou</strong> cachorros <strong>ou</strong> rios te odeiam</li>
                    <li>Ódio é infeccioso para você</li>
                    <li>Você precisa dormir sem ser visto</li>
                    <li>Você tem medo daqueles em posição de autoridade social</li>
                    <li>Você considera falta de educação acreditar que alguém é culpado de algo que não tem testemunhas</li>
                    <li>No pior possível momento, o GM vai te dizer que um NPC é sua alma gêmea</li>
                </ol>
            </details>

            <h4>Forasteiro</h4>
            <p>É óbvio para todos que te veem que você não é daqui. Você sempre pode encontrar alguém pra te explicar o que está acontecendo, achar pessoas que querem ajuda descartável e pessoas interessadas em culturas estrangeiras. Ou seja, você sempre consegue achar alguém que não te considera uma ameaça em grupos grandes (três ou mais).</p>

            <h4>Como Você Faz</h4>
            <p>Você consegue consertar um <strong>Objeto de Casa</strong> quebrado em um Descanso Longo. Seus seguidores ganham os mesmos benefícios que você se usarem um de seus <strong>Objetos de Casa</strong>.</p>

            <h4>Parágono</h4>
            <p>Escolha dois benefícios dos abaixos que batem com Perícias que você tenha:</p>
            <ul>
                <li>Se você tiver Perícia em Terras Estrangeiras, você ganha um <strong>Objeto de Casa</strong> toda vez que Festejar</li>
                <li>Se você tiver Perícia em Explorador, você não precisa mais comer</li>
                <li>Se você tiver Perícia em Diplomata, você não pode mais ser atacado por criaturas inteligentes se você e seus companheiros não forem hostis.</li>
                <li>Se você tiver Perícia em Refugiado, você ganha 1 PV por Cicatriz que tiver</li>
                <li>Se você tiver Perícia em Alquemia, você pode criar uma Poção Aleatória toda vez que fizer um Descanso Longo</li>
                <li>Se você tiver Perícia em Matemática, você tem sucesso em qualquer teste de DES que fizer com 10 minutos de preparo</li>
                <li>Se você tiver Perícia em Economia, você ganha um saco de ouro toda vez que Festejar. Você só pode gastar esse ouro com favores políticos.</li>
                <li>Se você tiver Perícia em Política, escolha uma ideologia. Seus ataques e os de seus seguidores dão 1d6 mais dano se atacarem em nome da ideologia.</li>
            </ul>
            
            <h4>Sincretismo</h4>
            <p>Você pode escolher o Template A de outra classe e tratar como se fosse simultaneamente um Template dessa classe e de outra.</p>
        </section>`;
}