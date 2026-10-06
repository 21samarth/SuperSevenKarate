import mongoose from 'mongoose';
const contentSchema=new mongoose.Schema({type:{type:String,required:true,index:true},title:String,slug:String,subtitle:String,description:String,image:String,images:[String],items:[mongoose.Schema.Types.Mixed],meta:{type:mongoose.Schema.Types.Mixed,default:{}},order:{type:Number,default:0},published:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model('Content',contentSchema);
