import express from 'express';import Content from '../models/Content.js';import auth from '../middleware/auth.js';
const r=express.Router();
r.get('/:type',async(req,res)=>{try{res.json(await Content.find({type:req.params.type,published:true}).sort({order:1,createdAt:-1}))}catch(e){res.status(500).json({message:e.message})}});
r.get('/',auth,async(req,res)=>res.json(await Content.find().sort({type:1,order:1})));
r.post('/',auth,async(req,res)=>{try{res.status(201).json(await Content.create(req.body))}catch(e){res.status(400).json({message:e.message})}});
r.put('/:id',auth,async(req,res)=>{try{res.json(await Content.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}))}catch(e){res.status(400).json({message:e.message})}});
r.delete('/:id',auth,async(req,res)=>{await Content.findByIdAndDelete(req.params.id);res.json({ok:true})});export default r;
