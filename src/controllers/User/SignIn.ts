import { Request, Response } from "express";
import { UserModel } from "../../models/User";
import { UserSchema } from "../../types/types";

import jwt from 'jsonwebtoken'

export const AddUser = async (req: Request, res: Response) => {
    try {


        const {data}: {data:UserSchema} = await req.body
        const user: UserSchema[] | null = await UserModel.findOne({ email: data.email })
        if (user==null) {
            const newUser=await UserModel.create({
                Username: data.Username,
                Password: data.Password,
                email: data.email,


            })
            const token = jwt.sign({ userId: newUser._id }, `${process.env.SECRET}`);

            return res.cookie("token", token, {
                httpOnly: true,
                sameSite: true,
                expires: new Date(Date.now() + 60000 * 60000)
            }).json({
                success: true, message: "User created successfully"
            })
        } else {
            res.json({
                success: false, message: "user already exists"
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            success: false, message: "some think wrong"
        })
    }
}
