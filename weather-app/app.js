(() => {
    const geoCode = require('./utils/geocode');
    const forecast = require('./utils/forecast');

    if (process.argv.length < 3) {
        return console.log('Please provide the name of the location...');
    }
    const location = process.argv[2];
    geoCode(location, (error, {
        lat,
        lon,
        location
    } = {}) => {
        if (error) {
            return console.log(error);
        }
        forecast(lat, lon, (error, {
            description,
            currentTemp,
            feelslike
        } = {}) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(`Currently it's ${description} at ${currentTemp} Celsius` +
                ` and feels like ${feelslike} outdoors`);
        });
    });
})();