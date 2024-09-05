import { Request, Response } from "express";
import { UserModel } from "../../models/User";
import { UserSchema } from "../../types/types";

export const Profile = async (req: Request, res: Response) => {

try {
    const {userId} = await req.body



    const User:UserSchema|null = await UserModel.findById(userId);
    if (User==null) {
        res.json({ success: false, message: "Login plz" });
    }else{
        res.json({ success: true, message: User });
    }
} catch (error) {
    console.log(error);


    res.json({ success: false, message: "some Think Wrong" });
    
}

}