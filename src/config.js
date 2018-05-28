
const config = {
    ports: {
        node: 8000,
        react: 8001,
        vue: 8002,
    },
    apiUrls: {
        about: 'http://localhost:8000/api/about',
        connect: 'http://localhost:8000/api/connect',
        home: 'http://localhost:8000/api/home',
        skills: 'http://localhost:8000/api/skills',
    }
};

module.exports = config;
