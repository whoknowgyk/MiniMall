module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'https://test',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}