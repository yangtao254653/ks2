let Mock = require("mockjs")
let data = [
    {title:"中国 npm 镜像源升级广告hhhhh",name:"小白",nums:"123123",num:12},
    {title:"11111",name:"小黑",nums:"123",num:12},
    {title:"22222",name:"小红",nums:"321",num:12},
    {title:"33333",name:"小绿",nums:"123",num:12},
    {title:"44444",name:"小紫",nums:"321",num:12},
    {title:"中国 npm 镜像源升级广告hhhhh",name:"小白",nums:"123123",num:12},
    {title:"11111",name:"小黑",nums:"123",num:12},
    {title:"22222",name:"小红",nums:"321",num:12},
    {title:"33333",name:"小绿",nums:"123",num:12},
    {title:"44444",name:"小紫",nums:"321",num:12},
    {title:"中国 npm 镜像源升级广告hhhhh",name:"小白",nums:"123123",num:12},
    {title:"11111",name:"小黑",nums:"123",num:12},
    {title:"22222",name:"小红",nums:"321",num:12},
    {title:"33333",name:"小绿",nums:"123",num:12},
    {title:"44444",name:"小紫",nums:"321",num:12},
    {title:"中国 npm 镜像源升级广告hhhhh",name:"小白",nums:"123123",num:12},
    {title:"11111",name:"小黑",nums:"123",num:12},
    {title:"22222",name:"小红",nums:"321",num:12},
    {title:"33333",name:"小绿",nums:"123",num:12},
    {title:"44444",name:"小紫",nums:"321",num:12}
]
Mock.mock("/api/login",'get',function(config){
    return data;
})
Mock.mock(/\/api\/dele\/\d/,"delete",function(config){
    let id = config.url[config.url.length-1];
    data.splice(id,1);
    console.log(data);
    return data
})