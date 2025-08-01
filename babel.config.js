// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            ['@babel/preset-react', {
                runtime: 'automatic', // ⬅️ wichtig
            }],
        ],
    };
};
module.exports = function(api) {
    api.cache(true);
    return {
        presets: [
            'babel-preset-expo',
            '@babel/preset-typescript',
            ['@babel/preset-react', { runtime: 'automatic' }]
        ],
    };
};
