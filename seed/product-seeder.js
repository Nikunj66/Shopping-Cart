var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingcart?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{ useNewUrlParser: true, useUnifiedTopology:true });
var products=[
    new Product({
    imagePath:'https://i.ytimg.com/vi/Crc2iO_-LR8/maxresdefault.jpg',
    title:'Gothic Game',
    description:'Gothic Game is very amazing game or intersting game. Graphics are also awasom in game.',
    price:34
    }),
    new Product({
    imagePath:'https://d2otcp20hyujm8.cloudfront.net/wp-content/uploads/2018/07/26104725/Super-Mario-the-super-mario-fan-club-31134489-1024-768.jpg',
    title:'Mario Game',
    description:'Mario Game is very amazing game or intersting game. Graphics are also awasom in game.',
    price:23
    }),
    new Product({
    imagePath:'https://s3.gaming-cdn.com/images/products/824/orig/need-for-speed-cover.jpg',
    title:'NFS Game',
    description:'NFS Game is very amazing game or intersting game. Graphics are also awasom in game.',
    price:56
    }),
    new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Vice-city-cover.jpg/220px-Vice-city-cover.jpg',
    title:'Vice City Game',
    description:'Vice City Game is very amazing game or intersting game. Graphics are also awasom in game.',
    price:32
    })

];
var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length)
        {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}
