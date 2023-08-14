import {sources} from '../../data/units.json'
import slugify from '../helpers/slugify';
import {useEffect, useState} from "react";

export default function Paging({ source, unit }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const pages = sources
        .filter((s) => s.label === source)
        .flatMap((s) => s.units.map((unit) => unit.id)
        );

    useEffect(() => {
        const currentURL = window.location.pathname.split('/');
        const chapter = currentURL[currentURL.length - 1].split('#')[0];
        const pageIndex = pages.findIndex((p) => p === chapter);
        setCurrentPageIndex(pageIndex)
    },[source,])

    const goToPreviousPage = () => {
        if (currentPageIndex > 0) {
            const previousIndex = currentPageIndex - 1;
            setCurrentPageIndex(previousIndex);
            const previousPage = `/viewer/${source}/${pages[previousIndex]}#viewer__contents`
            window.location.replace(previousPage)
        }
    };

    const goToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            const nextIndex = currentPageIndex + 1;
            setCurrentPageIndex(nextIndex);
            const nextPage = `/viewer/${source}/${pages[nextIndex]}#viewer__contents`
            window.location.replace(nextPage)
        }
    };

    const sourceData = sources.filter(s => s.label === source)[0]
    // console.log('source',source, unit)
    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newUnit = event.target.value
        const path = `/viewer/${source}/${slugify(newUnit)}`
        window.location.replace(path)
    };
    return (
        <div>
            <div className='paging'>
                <div className='in-line'>
                    <form method="get">
                        <label className='bold-choose'>CHOOSE A SECTION</label>
                            <select className='select-style' value={unit} onChange={handleUnitChange}>
                                {sourceData.units.map((u) => (
                                    <option key={u.id} value={slugify(u.id)}>{u.label}</option>
                                ))}
                            </select>
                    </form>
                </div>

                <div className='in-line paging-buttons'>
                    <button onClick={goToPreviousPage} className='prev'
                            disabled={currentPageIndex <= 0}></button><label>Previous Page</label>
                    <label className='margin-button'>Next Page</label>
                    <button className='next' onClick={goToNextPage} disabled={currentPageIndex >= (pages.length - 1)}></button>
                </div>
            </div>
        </div>
    );
}

