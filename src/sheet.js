import "https://esm.sh/preact@10.26.9/debug";
import { h } from 'https://esm.sh/preact@10.26.9';
import { useState, useEffect } from 'https://esm.sh/preact@10.26.9/hooks';
import htm from 'https://esm.sh/htm@3.1.1';
import { CLASSES, DEFAULT_SHEET } from "./utils.js";
import { loadSave, validateSave } from "./save.js";

const html = htm.bind(h);

function ClassDisplay({ sheet, setSheet }) {
    const changeClassName = (oldClassName, newClassName) => {
        const newClasses = { ...sheet.classes };
        newClasses[newClassName] = newClasses[oldClassName];
        delete newClasses[oldClassName];

        setSheet({ ...sheet, classes: newClasses });
    };

    const incrementClassLevel = className => {
        const newClasses = { ...sheet.classes };
        let totalLevel = Object.entries(newClasses).map(tp => tp[1]).reduce((acc, elem) => acc + elem);
        if (totalLevel >= 4) { return; }

        newClasses[className] += 1;
        totalLevel = Object.entries(newClasses).map(tp => tp[1]).reduce((acc, elem) => acc + elem);
        if (totalLevel >= 4 && '-' in newClasses && newClasses['-'] == 0) {
            delete newClasses['-'];
        }

        setSheet({ ...sheet, classes: newClasses });
    };

    const decrementClassLevel = className => {
        const newClasses = { ...sheet.classes };
        if (newClasses[className] < 2) {
            if (Object.keys(newClasses).length > 1) {
                delete newClasses[className];
            } else if (newClasses[className] === 1) {
                newClasses[className] = 0;
            }
        } else {
            newClasses[className] -= 1;
        }

        setSheet({ ...sheet, classes: newClasses });
    }

    const classElems = Object.entries(sheet.classes).map(([className, level]) => {
        return html`
        <div class="input-group mb-2">
            <select class="form-select"
                value=${className}
                onChange=${event => changeClassName(className, event.target.value)}>
                <option>-</option>
                ${CLASSES.map(k => html`<option value=${k}>${k}</option>`)}
            </select>
            <input type="number" class="form-control" min=0 max=4 disabled
                value=${level} />
            <button class="btn btn-success"
                onClick=${() => incrementClassLevel(className)}>
                +
            </button>
            <button class="btn btn-danger"
                onClick=${() => decrementClassLevel(className)}>
                -
            </button>
        </div>`;
    });

    return html`${classElems}`;
}

export function Sheet() {
    const [sheet, setSheet] = useState(loadSave());
    useEffect(() => {
        localStorage.setItem('database', JSON.stringify(sheet))
    }, [sheet]);

    const setName = name => setSheet({ ...sheet, name });
    const setBelief = belief => setSheet({ ...sheet, belief });

    const setSTR = str => {
        const strDelta = str - sheet.str;
        const maxHealth = sheet.maxHealth + strDelta;
        const inventoryCapacity = sheet.inventoryCapacity + strDelta;

        setSheet({ ...sheet, str, maxHealth, inventoryCapacity });
    };

    const totalClassLevel = Object.entries(sheet.classes).map(tp => tp[1]).reduce((acc, elem) => acc + elem);
    const addDummyClass = () => {
        const totalLevel = Object.entries(sheet.classes).map(tp => tp[1]).reduce((acc, elem) => acc + elem);
        if (totalLevel >= 4) {
            return;
        }

        const newClasses = { ...sheet.classes, '-': 0 };
        setSheet({ ...sheet, classes: newClasses });
    };

    const setNonTemplateLevels = ntLevels => setSheet({ ...sheet, nonTemplateLevels: ntLevels });

    const setDEX = dex => setSheet({ ...sheet, dex });
    const setWILL = will => {
        const willDelta = will - sheet.will;
        const psycheCapacity = sheet.psycheCapacity + willDelta;
        setSheet({ ...sheet, will, psycheCapacity });
    }

    const setHealth = health => setSheet({ ...sheet, health });
    const setMaxHealth = maxHealth => setSheet({ ...sheet, maxHealth });

    const setSpellDice = spellDice => setSheet({ ...sheet, spellDice });
    const setMaxSpellDice = maxSpellDice => setSheet({ ...sheet, maxSpellDice });

    const setDoomPoints = doomPoints => setSheet({ ...sheet, doomPoints });

    const setInventory = inv => setSheet({ ...sheet, inventory: inv.split('\n').filter(s => s.length > 0) });
    const setExtraInventorySlots = extra => {
        const inventoryCapacity = sheet.str + 2 * extra;
        setSheet({ ...sheet, inventoryCapacity });
    };

    const setPsyche = psyche => setSheet({ ...sheet, psyche: psyche.split('\n').filter(s => s.length > 0) });
    const setExtraPsycheSlots = extra => {
        const psycheCapacity = sheet.will + 2 * extra;
        setSheet({ ...sheet, psycheCapacity });
    }

    const setNotes = notes => setSheet({ ...sheet, notes });

    const [text, setText] = useState('')
    const [portFlags, setPortFlags] = useState({ success: false, clipboard: false });
    const exportSave = () => {
        const handler = (clipboard) => {
            setText(JSON.stringify(sheet, null, 2))
            setPortFlags({ ...portFlags, success: true, clipboard });
            setTimeout(() => {
                setPortFlags({ ...portFlags, sucess: false, clipboard: false })
            }, 3000);
        }

        navigator.clipboard.writeText(text)
            .then(() => handler(true))
            .catch(() => handler(false));
    }

    const importSave = text => {
        try {
            const data = JSON.parse(text);
            const sheet = validateSave(data);
            setSheet(sheet);
        }
        catch (e) {
            console.log(e);
            setPortFlags({ ...portFlags, success: false, error: true });
            setTimeout(() => {
                setPortFlags({ ...portFlags, error: false })
            }, 3000);
        }
    }

    const clearSheet = () => {
        const consent = confirm("Continuar vai deletar todos os dados da ficha de maneira irreversível.\nDeseja continuar?");
        if (!consent) { return; }

        setSheet({ ...DEFAULT_SHEET });
    }

    return html`
    <div class="input-group mb-2">
        <span class="input-group-text">Nome</span>
        <input type="text" class="form-control"
               value=${sheet.name}
               onChange=${event => setName(event.target.value)} />
    </div>
    <div class="input-group">
        <span class="input-group-text">Crença</span>
        <input type="text" class="form-control"
               value=${sheet.belief}
               onChange=${event => setBelief(event.target.value)} />
    </div>

    <hr />  

    <div class="mb-2">
        <span>Classes (Nível ${totalClassLevel + sheet.nonTemplateLevels})</span>
        <${ClassDisplay} sheet=${sheet} setSheet=${setSheet} />
        <div class="input-group my-2">
            <span class="input-group-text">Níveis Extras</span>
            <input type="number" class="form-control"
                value=${totalClassLevel + sheet.nonTemplateLevels}
                onChange=${event => setNonTemplateLevels(+event.target.value)} />
        </div>
        
        <button class="btn btn-outline-secondary w-100 ${totalClassLevel >= 4 ? 'd-none' : ''}"
                onClick=${addDummyClass}>
            Adicionar Classe
        </button>
    </div>

    <hr />

    <div class="d-flex justify-content-between mb-2">
        <div class="input-group" style="width: 49%">
            <span class="input-group-text">PV</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.health}
                   onChange=${event => setHealth(+event.target.value)} />
            <span class="input-group-text">/</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.maxHealth}
                   onChange=${event => setMaxHealth(+event.target.value)} />
        </div>
        <div class="input-group" style="width: 49%;">
            <span class="input-group-text">DM</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.spellDice}
                   onChange=${event => setSpellDice(+event.target.value)} />
            <span class="input-group-text">/</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.maxSpellDice}
                   onChange=${event => setMaxSpellDice(+event.target.value)} />
        </div>
    </div>
    <div class="d-flex justify-content-between mb-2">
        <div class="input-group" style="width: 49%;">
            <span class="input-group-text">FOR</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.str}
                   onChange=${event => setSTR(+event.target.value)} />
        </div>
        <div class="input-group" style="width: 49%;">
            <span class="input-group-text">DES</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.dex}
                   onChange=${event => setDEX(+event.target.value)} />
        </div>
    </div>
    <div class="d-flex justify-content-between">
        <div class="input-group" style="width: 49%;">
            <span class="input-group-text">VON</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.will}
                   onChange=${event => setWILL(+event.target.value)} />
        </div>
        <div class="input-group" style="width: 49%;">
            <span class="input-group-text">Destruição</span>
            <input type="number" class="form-control" min=0 max=20
                   value=${sheet.doomPoints}
                   onChange=${event => setDoomPoints(+event.target.value)} />
        </div>
    </div>

    <hr />

    <details class="mb-3">
        <summary>Inventório (2 x ${sheet.inventoryCapacity === sheet.str ? "FOR" : "FOR + " + (sheet.inventoryCapacity - sheet.str)
        }: ${sheet.inventoryCapacity})</summary >

        <div class="input-group my-2">
            <span class="input-group-text">Espaços Extras</span>
            <input type="text" class="form-control"
                value=${sheet.inventoryCapacity - sheet.str}
                onChange=${event => setExtraInventorySlots(+event.target.value)} />
        </div>

        <span>Inventório (${sheet.inventory.length} / ${sheet.inventoryCapacity})</span>
        <textarea class="form-control mb-2" aria-label="With textarea"
                  rows=${sheet.inventoryCapacity}
                  value=${sheet.inventory.slice(0, sheet.inventoryCapacity).join('\n')}
                  onChange=${event => setInventory(event.target.value)}></textarea>

        <span>Sobrecarga (${sheet.inventory.length - sheet.inventoryCapacity} itens)</span>
        <textarea class="form-control" aria-label="With textarea" disabled
                  rows=${Math.max(2, sheet.inventory.length - sheet.inventoryCapacity)}
                  value=${sheet.inventory.slice(sheet.inventoryCapacity).join('\n')}></textarea>
    </details>
    <details class="mb-3">
        <summary>Psique (2 x ${sheet.psycheCapacity === sheet.will ? "VON" : "VON + " + (sheet.psycheCapacity - sheet.will)
        }: ${sheet.psycheCapacity})</summary >

        <div class="input-group my-2">
            <span class="input-group-text">Espaços Extras</span>
            <input type="text" class="form-control"
                value=${sheet.psycheCapacity - sheet.will}
                onChange=${event => setExtraPsycheSlots(+event.target.value)} />
        </div>

        <span>Inventório (${sheet.psyche.length} / ${sheet.psycheCapacity})</span>
        <textarea class="form-control mb-2" aria-label="With textarea"
                  rows=${sheet.psycheCapacity}
                  value=${sheet.psyche.slice(0, sheet.psycheCapacity).join('\n')}
                  onChange=${event => setPsyche(event.target.value)}></textarea>

        <span>Sobrecarga (${sheet.psyche.length - sheet.psycheCapacity} itens)</span>
        <textarea class="form-control" aria-label="With textarea" disabled
                  rows=${Math.max(2, sheet.psyche.length - sheet.psycheCapacity)}
                  value=${sheet.psyche.slice(sheet.psycheCapacity).join('\n')}></textarea>
    </details>

    <hr />

    <details>
        <summary>Anotações</summary>
        <textarea class="form-control" aria-label="With textarea"
            rows=5
            value=${sheet.notes}
            onChange=${event => setNotes(event.target.value)}></textarea>
    </details>

    <hr />

    <details>
        <summary>Exportar e Importar</summary>
        <div class="d-flex justify-content-between my-2">
            <button class="btn btn-outline-secondary w-49" onClick=${exportSave}>Exportar Save</button>
            <button class="btn btn-outline-secondary w-49" onClick=${() => importSave(text)}>Importar Save</button>
        </div>
        <div class="alert alert-success ${portFlags.success ? "" : "d-none"}">
            Exportação feita com sucesso. ${portFlags.clipboard ? "O texto deve estar disponível na sua área de transferência." : ""}
        </div>
        <div class="alert alert-warning ${portFlags.error ? "" : "d-none"}">
            Algo de errado aconteceu durante a importação. Favor contatar o administrador.
        </div>
        <textarea class="form-control" aria-label="With textarea"
            rows=20
            value=${text}
            onChange=${event => setText(event.target.value)}></textarea>
    </details>

    <hr />

    <button class="btn btn-outline-secondary w-100 mb-3"
            onClick=${clearSheet}>
        Limpar Ficha
    </button>
`;
}
