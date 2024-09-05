import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { IssuesModel, UserModel } from "../../models/User";

export const FillIssue = async (req: CustomRequest, res: Response) => {
    try {
        const data = req.body
        const User = req.existingUser

        await IssuesModel.findByIdAndUpdate(
            { _id: data.id },
            {
                $push: { Solution: data.Solution },
            },
            { new: true }
        )
        await UserModel.findByIdAndUpdate({ _id: User?.id }, {
            $push: { Issues: data.Solution },
        },
            { new: true })
        return res.json({ success: true, message: "Issue Send" })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "something went wrong" })

    }
}
