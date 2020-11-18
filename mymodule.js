const { builtinModules } = require("module");
const fs = require("fs");

module.exports = function (path, ext, callback) {
    const filteredList = [];
    fs.readdir(path, (err, list) => {
        if (err) callback(err, null);
        else {
            for (let file of list) if (file.split('.')[1] === ext) filteredList.push(file);
            callback(null, filteredList);
        }
    })
}

