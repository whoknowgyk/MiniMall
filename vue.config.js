// webpack配置
// node.js使用CommonJS规范

// 配置代理跨域
// 代理跨域使用的就是自己的接口，但是内部会通过node.js转发别人的服务
// module.exports = {
//     devServer:{
//         host:'localhost',
//         port:8080,
//         proxy:{
//             '/activity':{
//                 target:'https://www.imooc.com',
//                 changeOrigin:true,
//                 pathRewrite:{
//                     '/activity':'activity'
//                 }
//             },
//         },
//     }
// }