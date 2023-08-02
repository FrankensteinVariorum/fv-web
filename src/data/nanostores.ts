import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'

// show/hide options
const defaultShow = {
    showVariants: true,
    // showAnnotations: false,
    showText: true
};
export const showState = persistentAtom('showLocale', defaultShow, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export function onVariantsChanged() {
    showState.set({
        showVariants: !showState.get().showVariants,
        showAnnotations: showState.get().showAnnotations,
        showText: showState.get().showText
    });
}
// export function onAnnotationChanged() {
//     showState.set({
//         showVariants: showState.get().showVariants,
//         showAnnotations: !showState.get().showAnnotations,
//         showText: showState.get().showText
//     });
// }
export function onTextChanged() {
    showState.set({
        showVariants: showState.get().showVariants,
        showAnnotations: showState.get().showAnnotations,
        showText: !showState.get().showText,
    });
}

// current edition, chapter, collation chunk, and chapters for side panel link
const defaultUnitLink = {
    edition: '1818',
    chunk: 'CO1',
    f1818Chp: 'vol_1_preface',
    f1823Chp: 'vol_1_preface',
    f1831Chp: 'preface',
    fThomasChp: 'vol_1_preface',
    fMSChp: 'box_c56_chapt_2'
};
export const unitLinkState = atom(defaultUnitLink)


const defaultApp: string = '6'
export const appState = persistentAtom('appLocale', defaultApp, {
    encode: JSON.stringify,
    decode: JSON.parse,
})


// const chunkFormat = chunk.get().toString().length == 1 ? '0' + chunk.get().toString() : chunk.get();



