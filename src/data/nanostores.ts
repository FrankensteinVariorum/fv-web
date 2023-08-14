import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent'

// show/hide options
const defaultShow = {
    showVariants: true,
    showText: true,
    showNote: true,
};
export const showState = persistentAtom('showLocale', defaultShow, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export function onVariantsChanged() {
    showState.set({
        showVariants: !showState.get().showVariants,
        showText: showState.get().showText,
        showNote: showState.get().showNote,
    });
}
export function onTextChanged() {
    showState.set({
        showVariants: showState.get().showVariants,
        // showAnnotations: showState.get().showAnnotations,
        showText: !showState.get().showText,
        showNote: showState.get().showNote,
    });
}

export function onNoteChanged() {
    showState.set({
        showVariants: showState.get().showVariants,
        showText: showState.get().showText,
        showNote: !showState.get().showNote,
    });
}


// current edition, chapter, collation chunk, and chapters for side panel link
const defaultUnitLink = {
    edition: 'MS',
    chunk: 'C08',
    fMSChp: 'box_c56_from_chapter_1',
    f1818Chp: 'vol_1_chapter_i',
    fThomasChp: 'vol_1_chapter_i',
    f1823Chp: 'vol_1_chapter_i',
    f1831Chp: 'chapter_ii',
};
export const unitLinkState = atom(defaultUnitLink)

const defaultApp: string = '6'
export const appState = persistentAtom('appLocale', defaultApp, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

const defaultFont: number = 1 // 1em
export const fontState = persistentAtom('fontLocale', defaultFont, {
    encode: JSON.stringify,
    decode: JSON.parse,
})

export function increaseFont() {
    fontState.set(fontState.get() + 0.1);
}

export function decreaseFont() {
    fontState.set(fontState.get() - 0.1);
}
