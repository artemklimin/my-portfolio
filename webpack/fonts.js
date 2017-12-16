module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|ttf)$/,
                    loader: 'file-loader',
                    options: {name: 'css/fonts/[name].[ext]'}
                },
            ],
        },
    };
};