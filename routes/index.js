const express=require("express");
const router=express.Router();
const home=require('../controller/homeController');
router.get('/',home);
console.log("router loaded");

module.exports=router;