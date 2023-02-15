const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=5000
const db=require('./configure/mongoose');
const expressLayouts=require('express-ejs-layouts');
app.use(expressLayouts);
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParser());
// to extract style and subscript tag in diffrent pages and diffrent files
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use('/',require('./routes/index'));
app.use('/',require('./routes/user'));

app.set('view engine','ejs')
app.set('views','./views')
app.listen(port,(err)=>{
    if(err)
    {
        console.log(`error ${err}`);
        return;
    }
    console.log(`server is running at port ${port}`);
})