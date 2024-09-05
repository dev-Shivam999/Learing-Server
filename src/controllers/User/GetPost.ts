import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { PostModel } from "../../models/User";

export const GetPost = async (req: CustomRequest, res: Response) => {
try {
    const Post = await PostModel.find({})
    return res.json({ success: true, message: Post })
} catch (error) {
    console.log(error);
    return res.json({ success: false, message: "SOME THING WRONG" })
    
}
}
