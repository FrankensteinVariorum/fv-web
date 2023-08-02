// This script is to scrape the thumbnails for Thomas.
// Run `node scrapeLink.js` in `/src/data` directory in the terminal to prefetch the data

import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const total_page = 4; // Data is on 4 different pages
    let complete_data = [];

    for (let i = 0; i < total_page; i++){
        await page.goto(`https://www.themorgan.org/collection/frankenstein/thumbs/?page=${i}`); // the target web page
        // use selector `div.field-content a` to get all link texts and URLs
        const data = await page.$$eval('span.field-content a', (elements) =>
            elements.map((el) => {
                // This function is to convert roman numerals to Arabic numerals and convert the datatype from string to number
                const numberConvertor = (input_num) => {
                    const numberMap = {
                        'i': 1, 'ii': 2, 'iii': 3,
                        'iv': 4, 'v': 5, 'vi': 6,
                        'vii': 7, 'viii': 8, 'ix': 9,
                        'x': 10, 'xi': 11, 'xii': 12,
                    };
                    // if the input is Roman numeral, convert it to Arabic numeral
                    if (input_num in numberMap)
                        return numberMap[input_num]
                    // if the input is an integer, convert its datatype to number
                    else if (!isNaN(parseInt(input_num, 10)))
                        return parseInt(input_num, 10)
                    // if the input is invalid, return null
                    else
                        return null
                };
                return{
                    text: el.textContent.trim(), // link Text
                    unit: el.textContent.trim().split(', p')[0].toLowerCase(). // vol. i, chapter i
                        replace(/[,.]/g, ''). // vol i chapter i
                        replace(/\s/g, '_')?. // vol_i_chapter_i
                        replace(/(?<!\[)(i{1,3})(?=\w)/, (
                                match => numberConvertor(match) // vol_1_chapter_i
                            )
                        ),
                    page: [
                        numberConvertor(el.textContent.trim().split(/,\spp?.\s/)[1]?.split(/[-–]/)[0]?.replace(/[\[\]]/g, '')) || null,
                        numberConvertor(el.textContent.trim().split(/,\spp?.\s/)[1]?.split(/[-–]/)[1]?.replace(/[\[\]]/g, '')) || numberConvertor(el.textContent.trim()?.split(/,\spp?.\s/g)[1]?.replace(/[\[\]]/g, '')) || null,
                    ],
                    url: el.getAttribute('href'), // URL
                };
            })
        );
        complete_data = complete_data.concat(data);
    }

    // save as json
    fs.writeFileSync('thumbnails.json', JSON.stringify(complete_data, null, 2));

    await browser.close();
}

scrapeData();
