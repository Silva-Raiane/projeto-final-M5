import { createComment, getCommentsFromPost, deleteComment } from "../controllers/Comment.controller.js"
import { CommentValidator } from "../middleware/Comment.validator.js"
import { Router } from "express"

const routerComment = Router()
const instanceCommentValidator = new CommentValidator()

routerComment.post("/create-comment", instanceCommentValidator.createCommentValidation, async (req, res)=>{
    return await createComment(req, res)
})
routerComment.get("/comments/get-from-post", async (req, res) => {
    return await getCommentsFromPost(req, res)
})
routerComment.delete("/comments/delete", async (req, res)=>{
    return await deleteComment(req, res)
})

export {routerComment}