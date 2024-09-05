import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
export interface CustomRequest extends Request {
    userId?: string;
    UserName?: string;
    existingUser?: UserSchema
}
import { config } from "dotenv";
import { UserModel } from "../models/User";
import { UserSchema } from "../types/types";
config()
export const Verify = async (req: CustomRequest, res: Response, next: NextFunction) => {



    const token: string | undefined = await req.cookies?.token;


    if (token == undefined) {
        return res.json({ success: false, message: "Login first" })
    }
    else {


        let decodedToken: JwtPayload | string;
        try {
            decodedToken = jwt.verify(token, `${process.env.SECRET}`);
        } catch (error) {
            console.error("Error verifying token:", error);
            return res.status(400).json({ success: false, message: 'Invalid token' });
        }

        if (typeof decodedToken === 'string' || !decodedToken.userId) {
            console.error("Invalid token payload:", decodedToken);
            return res.status(400).json({ success: false, message: 'Invalid token payload' });
        }

        let userId = String(decodedToken.userId);




        const existingUser: UserSchema | null = await UserModel.findById(userId);




        if (existingUser == null) {
            return res.json({ success: false, message: "login  " })

        } else {
            req.userId = userId;
           
            req.UserName=existingUser.Username;
            req.existingUser=existingUser

            next()
        }
    }


}