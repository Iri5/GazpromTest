const csvParse = require('csv-parse');
const fs = require('fs');

let records = [];

const processFile = async () => {
    const records = [];
    const parser = fs
        .createReadStream(`./article_def_v_orig.csv`)
        .pipe(csvParse.parse({
        }));
    for await (const record of parser) {
        records.push(record.slice(0, 5));
    }
    return records;
};
(async () => {
    records = await processFile();
})();

function getSlice(page, limit) {
    let firstIndex = 1;
    if (page != 1) firstIndex += page * limit - limit;
    // +limit преобразование строки к числу
    let lastIndex = firstIndex + +limit;
    let pagesArray = records.slice(firstIndex, lastIndex);
    //records[0] содержит заголовки
    return JSON.stringify({titles: records[0], total:records.length, pages: pagesArray});
}

class PageController {   
    init(req, res) {
        let { page, limit } = req.query;

        page = page || 1;
        limit = limit || 20;

        let slice = getSlice(page, limit);
        res.send(slice);
    }
    
}

module.exports = new PageController();