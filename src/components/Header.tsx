import React from 'react';
import {sources} from '../data/units.json'
import variations from '../assets/images/intensity_legend.svg';
import EditionDot from './helpers/EditionDot.js';

interface SourceProps {
    source: string | undefined;
}

export default function Header({source}: SourceProps) {
    const sourceLabels = sources.map((s) =>
        <label key={s.label} className='edition-label'><EditionDot edition={s.label} key={s.label}/>{s.label}</label>);
    return (
        <div id='header'>
            <header className='viewer__cols'>
                <div id='viewer__legend-editions'>
                    {sourceLabels}
                </div>
                <div id='viewer__title'  className='center-label'>
                    {source ?
                    <h2>{source} Edition</h2>
                    : <h2>Edition</h2>}
                </div>
                <div id='viewer__legend-variance'>
                    <label>Amount of Variance</label>
                    <img className='variations' src={variations.src} alt="variations scale" />
                </div>
            </header>

            <hr className='line' />
            <div className='viewer__cols'>
                <div className='center-label'>Marginalia</div>
                <div className='center-label'>Text</div>
                <div className='center-label'>Variations</div>
            </div>
        </div>

    );
}
