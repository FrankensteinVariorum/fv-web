import { atom, map } from 'nanostores';
import { useStore } from '@nanostores/react';


export const SelectOption = atom("1818");

export const availableEditions = [
    { label: "MS", value: "MS", chunk: [7, 8, 9, 10] },
    { label: "1818", value: "1818", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "Thomas", value: "Thomas", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1823", value: "1823", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    { label: "1831", value: "1831", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
];



// export default function availableChunks() {
//     const edition = useStore(SelectOption);
//     const availableChunks = new Map();
//     const start = (edition == "MS") ? 7 : 1;
//     for (let i = start; i <= 10; i++){
//         availableChunks.set(i, i);
//     }
//     return availableChunks;
// }

export type availableChunk = {
    key: string;
    value: string;
}

export const availableChunks = map<Record<string, availableChunk>>({});

export const edition= "1818";
export const chunk = "1";

//export const teiFile = (await import("../teiFiles/P5-f" + edition + "_C" + chunk + ".xml?raw")).default;
