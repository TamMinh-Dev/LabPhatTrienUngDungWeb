const config = {
    app: {
        port: (typeof process !== 'undefined' && process.env && process.env.PORT) ? process.env.PORT : 3000,
}
};

export default config;