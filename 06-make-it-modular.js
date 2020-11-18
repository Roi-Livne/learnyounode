const mymodule = require('./mymodule.js');
mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) console.log(err);
    else {
        for (let i = 0; i < data.length; i++) console.log(data[i]);
    }
})