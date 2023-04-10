import { useState } from 'react';
import Layout from '../../layouts/Layout.astro';
import Tei, { TeiBaseStyle } from 'astro-tei';
import EditionSelector from './EditionSelector';
import Paging from './Paging';
import Header from '../Header';
import OptionsSelector from './OptionsSelector';
import { edition, chunk, teiFilePath } from '../../data/store';

export default function MyComponent() {
  const $teiFilePath = useStore(teiFilePath);
  const [teiFile, setTeiFile] = useState(null);

  const loadTeiFile = async () => {
    const file = (await import($teiFilePath.value)).default;
    setTeiFile(file);
  };

  if (!teiFile) {
    loadTeiFile();
    return null; // or some loading indicator
  }

  return (
    <section id='viewer'>
      <div id='viewer__controls'>
        <div><EditionSelector client:load/></div>
        <div><Paging client:load/></div>
        <OptionsSelector/>
      </div>
      <Header edition={edition.get()}/>

      <div id="viewer__contents" class="viewer__cols">
        <aside id="viewer__marginalia"></aside>
        <Tei data={teiFile} />
        <aside id="viewer_variations"></aside>
      </div>

      <hr className='line' />
      <footer id="viewer_pagination_controls">
        <EditionSelector client:load/>
        <Paging client:load/>
      </footer>
    </section>
  );
}


