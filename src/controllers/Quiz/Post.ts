import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { PostModel, UserModel } from "../../models/User";

export const Post = async (req: CustomRequest, res: Response) => {

    try {
        const data=req.body
        const user=req.existingUser
      const pp =  await PostModel.create({
            UserName:user?.Username,
            UseId:user?.id,
            Title:data.Title,
            Image:data.Image
        })
        await UserModel.findByIdAndUpdate({ _id: user?.id }, {
            $push: { Post: pp },
        },
            { new: true })
        res.json({
            success: true, message: "post add  successfully"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "something failed"
        })
        
    }
}