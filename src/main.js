import "https://esm.sh/preact@10.26.9/debug";
import { h, render } from 'https://esm.sh/preact@10.26.9';
import { useEffect, useState } from 'https://esm.sh/preact@10.26.9/hooks';
import htm from 'https://esm.sh/htm@3.1.1';

import { impureSetTheme, DEFAULT_UI_STATE } from "./utils.js";
import { Rules } from "./rules.js";

const html = htm.bind(h);

function Navbar({ ui, setUI }) {
    const setTheme = theme => setUI({ ...ui, theme });
    const setTab = tab => setUI({ ...ui, tab });

    const displayTheme = currTheme => ui.theme === currTheme ? "d-none" : "";

    return html`
        <nav class="d-flex justify-content-between">
            <button class="btn header" onclick=${() => setTab("rules")}>Regras</button>
            <button class="btn header" onclick=${() => setTab("classes")}>Classes</button>
            <button class="btn header" onclick=${() => setTab("spells")}>Magias</button>
            <button class="btn header" onclick=${() => setTab("sheet")}>Ficha</button>
            <button class="btn header ${displayTheme("light")}" onclick=${() => setTheme("light")}>Claro ☀️</button>
            <button class="btn header ${displayTheme("dark")}" onclick=${() => setTheme("dark")}>Escuro 🌙</button>
        </nav>
        <hr />`;
}

function App() {
    const [uiState, setUIState] = useState({ ...DEFAULT_UI_STATE });
    useEffect(() => impureSetTheme(uiState.theme), [uiState.theme]);

    return html`
        <${Navbar} ui=${uiState} setUI=${setUIState} />
        ${JSON.stringify(uiState)}
        <br/>
        <${Rules} />`;
}

render(
    html`<${App} />`,
    document.body
);