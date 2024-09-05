import mongoose from "mongoose";

export type UserSchema= mongoose.Document & User
export type QuizSchema = mongoose.Document & Quiz
export type IssuesSchema = mongoose.Document & Issue
export type CoursesSchema = mongoose.Document & Course
export type PostSchema = mongoose.Document & Post


interface User{
    Username:string,
    Password: string,
    email:string,
    Post: Post[],
    Issues: Issue[],
    Quiz: Quiz[]
    Courses:Course[]


}
interface Quiz{

    UseId: string,
    UserName:string,
    Question:string,
    Options: []

}
interface Issue{

    UseId: string,
    UserName: string,
    Github: string,
    Issue:string,
    Solutions: []
}
interface Course{
    UseId: string,
    UserName:string,
    CourseName: string,
    Video: string
}
interface Post{
    Title:string,
    Image:string,
    UseId:string,
    UserName: string

}