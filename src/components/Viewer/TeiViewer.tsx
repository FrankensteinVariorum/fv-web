import { useStore } from '@nanostores/react';
// import Tei from 'astro-tei';
import { processTei } from 'astro-tei';
import Tei from '../tei/tei'
import { teiFilePath } from '../../data/store';


export default function TeiViewer() {
    const $teiFile = useStore(teiFilePath);
    const tei = processTei($teiFile);
    // const teiDom = jdom.window.document;
    // const tei = jdom.serialize();
    const elements = tei.documentElement.getAttribute("data-elements").split(",");

    return (
        <Tei doc={tei} elements={elements} client:only="react" />
    );
}
