import { Response } from "express";
import { CustomRequest } from "../../utils/verify";
import { IssuesModel } from "../../models/User";

export const GetIssue = async (req: CustomRequest, res: Response) => {

  try {
      const Issue = await IssuesModel.find({})
      return res.json({ success: true, message: Issue })
    } catch (error) {
        console.log(error);
        
      return res.json({ success: true, message: "Some think wrong" })
    
  }
}

