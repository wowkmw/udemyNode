const fs = require('fs');

function jsonParser(jsonFile) {
    return JSON.parse(fs.readFileSync(jsonFile).toString());
}

function jsonWriter(jsObject) {
    fs.writeFileSync('1-json.json', JSON.stringify(jsObject));
}

const data = jsonParser('1-json.json');
data.name = 'Jim Kuo';
data.age = 29;
jsonWriter(data);