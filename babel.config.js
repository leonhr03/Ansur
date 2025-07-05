module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'], // oder 'module:metro-react-native-babel-preset' wenn kein Expo
        plugins: [
            ['module:react-native-dotenv', {
                moduleName: '@env',
                path: '.env',
                safe: false,
                allowUndefined: true,
            }],
        ],
    };
};
