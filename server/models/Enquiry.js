import mongoose from 'mongoose';
const enquirySchema=new mongoose.Schema({name:{type:String,required:true},phone:{type:String,required:true},email:String,age:String,program:String,message:String,source:{type:String,default:'website'},status:{type:String,default:'new'},createdAt:{type:Date,default:Date.now}});
export default mongoose.model('Enquiry',enquirySchema);
