import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { CoursesModel } from "../../models/User";

export const GetCourse = async (req: CustomRequest, res: Response) => {
   try {
       const Course = await CoursesModel.find({})
       return res.json({ success: true, message: Course })
   } catch (error) {
    console.log(error);
    return res.json({ success: false,message:"Something went wrong"})
    
   }

}
