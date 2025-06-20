import express from 'express';
import { adminLogin, approveCommentById, deleteCommentById, getAllComments, getDashboard } from '../controllers/adminControllers.js';
import auth from '../middlewares/auth.js'; // ✅ missing import fixed
import { getAllBlogs } from '../controllers/blogControllers.js';

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", auth , getAllComments);
adminRouter.get("/blogs", auth , getAllBlogs);
adminRouter.post("/delete-comment", auth , deleteCommentById);
adminRouter.post("/approve-comment", auth , approveCommentById);
adminRouter.get("/dashboard", auth , getDashboard);

export default adminRouter