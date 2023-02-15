const passport=require('passport');
const localStrategey=require('passport-local').Strategy;
const User=require('../modals/user');


// auntheticate the user using passport.js
passport.use(new localStrategey({
    usernameField:'email'
},
function(email,password,done)
{
    User.findOne({email:email},function(err,user){
        if(err)
        {
            console.log('error is finding to auntheticate the user -> passport');
            return done(err);
        }
        if(!user || user.password!=password)
        {
            console.log('user is not found in -> passport.js ');
            return done(null,false);
        }
        return done(null,user);
    })
}


));

// serialize the user to key which is kept in cookies
passport.serializeUser(function(done,user){
      return done(null,user.id);
})

// deserilize the user to keep

passport .deserializeUser(function(done,id){
    User.findById(id,function(err,user){
         if(err){
            console.log('error in using to find passport.js');
            return done(err);
         }
         return done(null,user);
    })
})
module.exports=passport;