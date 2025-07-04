import { DEFAULT_SHEET } from "./utils.js";

const Ajv = window.ajv7
const ajv = new Ajv();

const SCHEMA = {
    title: "Savedata",
    type: "object",
    properties: {
        name: { type: "string" },
        belief: { type: "string" },
        classes: {
            type: "object",
            patternProperties: {
                "^.*$": { type: "integer", minimum: 0, maximum: 4 }
            }
        },
        nonTemplateLevels: { type: "integer", minimum: 0 },
        str: { type: "integer", minimum: 0 },
        dex: { type: "integer", minimum: 0 },
        will: { type: "integer", minimum: 0 },
        health: { type: "integer", minimum: 0 },
        maxHealth: { type: "integer", minimum: 0 },
        spellDice: { type: "integer", minimum: 0 },
        maxSpellDice: { type: "integer", minimum: 0 },
        doomPoints: { type: "integer", minimum: 0 },
        inventoryCapacity: { type: "integer", minimum: 0 },
        inventory: { type: "array", items: { type: "string" } },
        psycheCapacity: { type: "integer", minimum: 0 },
        psyche: { type: "array", items: { type: "string" } },
        notes: { type: "string" },
    },
    required: Object.keys(DEFAULT_SHEET)
};

export function validateSave(data) {
    const validate = ajv.compile(SCHEMA);
    const valid = validate(data);

    if (!valid) {
        console.log(validate.errors);
        throw new Error("Invalid Save");
    }

    return data;
}

export function loadSave() {
    const data = localStorage.getItem("database");
    if (data === null) {
        return DEFAULT_SHEET;
    }

    try {
        const sheet = JSON.parse(data);
        return validateSave(sheet);
    } catch (e) {
        return DEFAULT_SHEET;
    }
}