import { atom } from 'nanostores';

const defaultShow = {
    showVariants: true,
    showAnnotations: false,
    showText: true
};
export const showState = atom(defaultShow);

// showState.subscribe((state) => {
//     localStorage.setItem('showState', JSON.stringify(state));
// });

export function onVariantsChanged() {
    showState.set({
        showVariants: !showState.get().showVariants,
        showAnnotations: showState.get().showAnnotations,
        showText: showState.get().showText
    });
}
export function onAnnotationChanged() {
    showState.set({
        showVariants: showState.get().showVariants,
        showAnnotations: !showState.get().showAnnotations,
        showText: showState.get().showText
    });

}
export function onTextChanged() {
    showState.set({
        showVariants: showState.get().showVariants,
        showAnnotations: showState.get().showAnnotations,
        showText: !showState.get().showText,
    });
}

// export function getAvailableChunks(select_edition?: String){
//     const availableChunks: number[] = [];
//     const start = (select_edition == "MS") ? 12 : 11;
//     for (let i = start; i <= 15; i++){
//         availableChunks.push(i);
//     }
//     return availableChunks;
// }


// const chunkFormat = chunk.get().toString().length == 1 ? '0' + chunk.get().toString() : chunk.get();
// export const teiFilePath = atom(`../../teiFiles/P5-f${edition.get()}_C${chunkFormat}.xml?raw`);



