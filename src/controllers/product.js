import Joi from "joi";
import Product from "../models/product";

const productSchema=Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required()
})

export const getAll=async(req,res)=>{
    try {
       
        const product=await Product.find()
        if(product.length==0){
            return res.status(200).json({
                message:"Danh sách sản phẩm trống"
            })
        }
        return res.status(200).json({
            message:"Danh sách sản phẩm",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}
export const getOne=async(req,res)=>{
    try {
       
        const product=await Product.findById({_id:req.params.id})
        if(!product){
            return res.status(200).json({
                message:"Sản phẩm không tồn tại"
            })
        }
        return res.status(200).json({
            message:"Danh sách sản phẩm",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}
export const create=async(req,res)=>{
    try {
        const {error}=productSchema.validate(req.body)
        if(error){
            return res.json({
                message:error.details[0].message
            })
        }
        const product=await Product.create(req.body)
        return res.status(200).json({
            message:"Thêm sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}
export const update=async(req,res)=>{
    try {
        const {error}=productSchema.validate(req.body)
        if(error){
            return res.json({
                message:error.details[0].message
            })
        }
        const product=await Product.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!product){
           return res.status(200).json({
            message:"Sản phẩm không tồn tại"
           })
        }
        return res.status(200).json({
            message:"Sửa sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}
export const remove=async(req,res)=>{
    try {
       
        const product=await Product.findByIdAndDelete({_id:req.params.id})
        if(product.length==0){
            return res.status(200).json({
                message:"Sản phẩm không tồn tại"
            })
        }
        return res.status(200).json({
            message:"Xóa sản phẩm thành công",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message:error
        })
    }
}