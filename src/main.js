import "https://esm.sh/preact@10.26.9/debug";
import { h, render } from 'https://esm.sh/preact@10.26.9';
import { useEffect, useState } from 'https://esm.sh/preact@10.26.9/hooks';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(h);

function App() {
    return html`Oie`;
}

render(
    html`<${App} />`,
    document.body
);