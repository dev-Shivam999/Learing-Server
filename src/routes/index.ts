import express from 'express';
import { Profile } from '../controllers/User/Profile';
import { Verify } from '../utils/verify';
import { AddUser } from '../controllers/User/SignIn';
import { Login } from '../controllers/User/Login';
import { Quiz } from '../controllers/Quiz/Quiz';
import { Post } from '../controllers/Quiz/Post';
import {  Issue } from '../controllers/Quiz/Issue';
import { Course } from '../controllers/Quiz/Course';
import { GetQuiz } from '../controllers/User/GetQuiz';
import { GetPost } from '../controllers/User/GetPost';
import { GetIssue } from '../controllers/User/GetIssue';
import { GetCourse } from '../controllers/User/GetCourse';
import { FillIssue } from '../controllers/User/FillIssue';



export const User= express.Router()

User.post('/Profile',Verify,Profile);
User.post('/Sign',AddUser);
User.post('/Login',Login);
User.post('/AddQuiz', Verify,Quiz);
User.get('/Quiz',GetQuiz);
User.post('/AddPost', Verify,Post);
User.get('/Post',GetPost);
User.post('/AddIssue', Verify,Issue);
User.get('/Issue',GetIssue);
User.post('/FillIssue',Verify,FillIssue)
User.post('/AddCourse', Verify, Course);
User.get('/Course',GetCourse);
