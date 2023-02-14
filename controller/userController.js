module.exports.user=function(req,res)
{
    return res.render('profile',{title:"profile page"});

}
// creating or rendering signup page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{title:"codial | signUp"})
}

// creating  or rendering  signin page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{title:"codial | signIn"});
}

