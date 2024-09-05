import { Request, Response } from "express";
import { UserSchema } from "../../types/types";
import { UserModel } from "../../models/User";

import jwt from 'jsonwebtoken'

export const Login = async (req: Request, res: Response) => {
    try {
        const { password, email } = req.body;

        const existingUser: UserSchema | null = await UserModel.findOne({ email: email });

        if (!existingUser) {
            return res.json({ success: false, message: "User not  exists" });
        }
        if (existingUser.Password==password) {

            const token = jwt.sign({ userId: existingUser._id }, `${process.env.SECRET}`);


            return res.cookie("token", token, {
                httpOnly: true,
                sameSite: true,
                expires: new Date(Date.now() + 60000 * 60000)
            })
                .json({ success: true, message: "user Login in  " });

        }else{
            return res.json({success:false,message:"password wrong"})
        }


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "some thing went wrong" })

    }
}
