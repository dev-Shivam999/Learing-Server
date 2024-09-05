import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { IssuesModel, UserModel } from "../../models/User";

export const Issue = async (req: CustomRequest, res: Response) => {

    try {
        const data = await req.body
        const user =  req.existingUser
     const pp=   await IssuesModel.create({
            UserName: user?.Username,
            UseId: user?.id,
            Github: data.Github,
            Issue: data.Issue,


        })

        await UserModel.findByIdAndUpdate({ _id: user?.id }, {
            $push: { Issues: pp },
        },
            { new: true })
        return res.json({success: true,message:"Issue created successfully"})
        
    } catch (error) {
        console.log(error);
        return res.json({success: false,message:"some thing wrong"})


    }
}
