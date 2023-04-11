import { atom, map } from 'nanostores';

export const chunk = atom("12");
export const edition = atom("MS");

export const availableEditions = ["MS", "1818", "Thomas", "1823", "1831"];

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



