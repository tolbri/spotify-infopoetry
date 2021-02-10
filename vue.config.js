module.exports = {
    // devServer: {
    //     disableHostCheck: true,
    //     port: 8080,
    //     public: '0.0.0.0:8080'
    // },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/spotify-infopoetry/'
        : '/spotify-infopoetry/',
    // publicPath: "/",
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
};