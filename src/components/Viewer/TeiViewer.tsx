import { useStore } from '@nanostores/react';
import Tei from 'astro-tei';
import { teiFilePath } from '../../data/store';

export default function TeiViewer() {
  const $teiFile = useStore(teiFilePath);
  return (
    <Tei data={$teiFile} />
  );
}
