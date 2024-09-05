import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { CoursesModel, UserModel } from "../../models/User";

export const Course = async (req: CustomRequest, res: Response) => {


    try {
        const data = req.body
        const user = req.existingUser
        const pp = await CoursesModel.create({
            UserName: user?.Username,
            UseId: user?.id,

            CourseName: data.CourseName,
            Video: data.Video
        })

        await UserModel.findByIdAndUpdate({ _id: user?.id }, {
            $push: { Course:pp },
        },
            { new: true }
    )

        return res.json({ success: true, message: "Course created successfully" })

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "some thing wrong" })


    }
}
