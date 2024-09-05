import mongoose, { Model } from "mongoose";
import { CoursesSchema, IssuesSchema, PostSchema, QuizSchema, UserSchema } from "../types/types";

const User = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    Post: {
        type: [{ type: mongoose.Schema.Types.Array, ref: "Post", onDelete: 'cascade' }],
        default: []
    },
    Issues: {
        type: [{ type: mongoose.Schema.Types.Array, ref: "Issues", onDelete: 'cascade' }],
        default: []
    },
    Quiz: {
        type: [{ type: mongoose.Schema.Types.Array, ref: "Quiz", onDelete: 'cascade' }],
        default: []
    },
    Courses: {
        type: [{ type: mongoose.Schema.Types.Array, ref: "Courses", onDelete: 'cascade' }],
        default: []
    }
});



// Define the Course schema
const Courses = new mongoose.Schema({
    UseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    UserName: {
        type: mongoose.Schema.Types.String,
        ref: "User",
        required: true
    },
    CourseName: {
        type: String,
        required: true
    },
    Video: {
        type: String
    }
});

// Define the Issues schema
const Issues = new mongoose.Schema({
    UseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    UserName: {
        type: mongoose.Schema.Types.String,
        ref: "User",
        required: true
    },
    Github: {
        type: String,
        required: true
    },
    Issue: {
        type: String,
        required: true
    },
    Solution:{
        type:[],
        default:[]
    }
 
});

// Define the Quiz schema
const Quiz = new mongoose.Schema({
    UseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    UserName: {
        type: mongoose.Schema.Types.String,
        ref: "User",
        required: true
    },
    Question: {
        type: String,
        required: true
    },
    Options: {
        type: [],
        required: true
    }
});

const Post = new mongoose.Schema({
    Title:{
        type:String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    UseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    UserName: {
        type: mongoose.Schema.Types.String,
        ref: "User",
        required: true
    }


})

// Create the models
export const UserModel: Model<UserSchema> = mongoose.model<UserSchema>('user', User);
export const CoursesModel: Model<CoursesSchema> = mongoose.model<CoursesSchema>('courses', Courses);
export const IssuesModel: Model<IssuesSchema> = mongoose.model<IssuesSchema>('issues', Issues);
export const QuizModel: Model<QuizSchema> = mongoose.model<QuizSchema>('quiz', Quiz);
export const PostModel: Model<PostSchema> = mongoose.model<PostSchema>('Post', Post);