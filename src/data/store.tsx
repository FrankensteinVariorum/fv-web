// import { atom, map } from 'nanostores';
// import NanoStore from 'nanostores';
// import { useStore } from '@nanostores/react';
// export const edition= "1818";
// export const chunk = "1";
//
//
// export function getEdition(select_edition) {
//     let edition = select_edition.value;
//     const SelectOption = atom(edition);
// }
//
// export const availableEditions = [
//     { label: "MS", value: "MS", chunk: [7, 8, 9, 10] },
//     { label: "1818", value: "1818", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
//     { label: "Thomas", value: "Thomas", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
//     { label: "1823", value: "1823", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
//     { label: "1831", value: "1831", chunk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
// ];
//
//
// export const availableChunks: number[] = [];
// const start = (edition == "MS") ? 7 : 1;
// for (let i = start; i <= 10; i++){
//     availableChunks.push(i);
// }
//
//
// //export const teiFile = (await import("../teiFiles/P5-f" + edition + "_C" + chunk + ".xml?raw")).default;
//
// export default async function fetch_tei() {
//     const editions = ["MS", "1818", "Thomas", "1823", "1831"];
//     for (let edition of editions) {
//         for (let chunk = 0; chunk < 10; chunk++) {
//             const filepath = "../teiFiles/P5-f" + edition + "_C" + chunk + ".xml?raw";
//             const teiFile = (await import(filepath)).default;
//         }
//     }
// }