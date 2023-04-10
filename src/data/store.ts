import { atom, map } from 'nanostores';
import NanoStore from 'nanostores';
import { useStore } from '@nanostores/react';

export const chunk = atom("11");
export const edition = atom("1818");

export const availableEditions = [
    { label: "MS", value: "MS"},
    { label: "1818", value: "1818"},
    { label: "Thomas", value: "Thomas"},
    { label: "1823", value: "1823"},
    { label: "1831", value: "1831"},
];

export function getAvailableChunks(select_edition?: String){
    const availableChunks: number[] = [];
    const start = (select_edition == "MS") ? 12 : 11;
    for (let i = start; i <= 15; i++){
        availableChunks.push(i);
    }
    return availableChunks;
}

const chunkFormat = chunk.get().toString().length == 1 ? '0' + chunk.get().toString() : chunk.get();
export const teiFilePath = atom(`../../teiFiles/P5-f${edition.get()}_C${chunkFormat}.xml?raw`);

// export default async function fetch_tei() {
//     const editions = ["MS", "1818", "Thomas", "1823", "1831"];
//     for (let edition of editions) {
//         for (let chunk = 0; chunk < 10; chunk++) {
//             const filepath = "../teiFiles/P5-f" + edition + "_C" + chunk + ".xml?raw";
//             const teiFile = (await import(filepath)).default;
//         }
//     }
// }

// export const teiFile = (await import(/* @vite-ignore */ "./../teiFiles/P5-f" + edition + "_C" + chunk + ".xml?raw")).default;
