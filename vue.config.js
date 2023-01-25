module.exports = {
    devServer: {
        proxy: {
            '^/notion': {
                target: 'https://api.notion.com/v1/pages',
                ws: true,
                changeOrigin: true
            },
        }
    }
};