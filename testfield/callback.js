const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('an error!', undefined);
        callback(undefined, [1, 4, 7]);
    }, 2000);
};

doWorkCallback((err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log(result);
});