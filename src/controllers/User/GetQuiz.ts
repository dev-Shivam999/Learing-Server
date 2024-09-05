import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { QuizModel } from "../../models/User";

export const GetQuiz = async (req: CustomRequest, res: Response) => {

try {
    const Quiz = await QuizModel.find({})

    
    return res.json({ success: true, message: Quiz })
} catch (error) {
   console.log(error);
   return res.json({ success: false, message:"Failed to load"})
    
}

}
