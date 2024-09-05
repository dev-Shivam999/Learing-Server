import {  Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { QuizModel, UserModel } from "../../models/User";

export const Quiz = async (req: CustomRequest, res: Response) => {



   try {
       const userId = req.userId
       const userName = req.UserName
       const data = req.body
       const user = req.existingUser

      const pp= await QuizModel.create({
           UseId: userId,

           UserName: userName,
           Question: data.Question,
           Options: data.Options
       })

       await UserModel.findByIdAndUpdate({ _id: user?.id }, {
           $push: { Quiz: pp },
       },
           { new: true }
       )

       res.json({
        success: true,message:"product add  successfully"
       })
   } catch (error) {
    
    console.log(error);

       res.json({
           success: false, message: "something failed"
       })
   }

}
