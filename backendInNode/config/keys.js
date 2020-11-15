
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb://wg:wg@dfghj:29906/mern",
        secret: 'yoursecret'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/dtr",
        secret: 'yoursecret'
    };
}
