const User=require('../modals/user');


module.exports.user=function(req,res)
{
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id,(err,user)=>{
            if(err){console.log('finfing the data error');return}
            if(user)
            {
                return res.render('profile',{
                    title:'user-profile',
                    user:user
                })
            }
            return res.redirect('/sign-in');
        })
        
    }
    else{
        return res.redirect('/sign-in');
    }

}
// creating or rendering signup page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{title:"codial | signUp"})
}

// creating  or rendering  signin page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{title:"codial | signIn"});
}


// get the signup data
module.exports.create=function(req,res){
    // todo latter
    // if(req.body.password!=req.body.confirm_password)
    // {
    //     return res.redirect('back');
    // }
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){console.log('getting err in sign up the data');return}
        if(!user){
            User.create(req.body,(err,user)=>{
                if(err){console.log('getting err in creating the user');return}
                return res.redirect('/sign-in');
                
            })
        }
        else{
            return res.redirect('back');
        }
    })

}


// get the signin data
module.exports.createSession=function(req,res){
    //todo latter
    // find the user
    

}
