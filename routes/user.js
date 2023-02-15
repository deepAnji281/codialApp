const express=require('express');
const router=express.Router();
const user=require('../controller/userController');

router.get('/user',user.user);
router.get('/sign-up',user.signUp);
router.get('/sign-in',user.signIn);
router.post('/user/create',user.create);
router.post('/user/create-session',user.createSession);
module.exports=router;