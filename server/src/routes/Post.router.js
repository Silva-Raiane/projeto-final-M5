import { Router } from "express"
import { createPost, getPost, updateTitle, updateContent, deletePost } from "../controllers/Post.controller.js" 
import { PostValidator } from "../middleware/Post.validator.js"

const routerPost = Router()

const instancePostValidator = new PostValidator()

routerPost.post("/create-post", instancePostValidator.createPostValidation, async (req, res) =>{
    return await createPost(req, res)
})

routerPost.get("/posts/get", instancePostValidator.getPostValidation, async (req, res) =>{
    return await getPost(req, res)
})

routerPost.patch("/posts/update-title", instancePostValidator.updateTitleValidation, async (req, res)=>{
    return await updateTitle(req, res)
})

routerPost.patch("/posts/update-content", instancePostValidator.updateContentValidation, async (req, res)=>{
    return await updateContent(req, res)
})

routerPost.delete("/post/delete-post", instancePostValidator.deletePostValidation, async (req, res)=>{
    return await deletePost(req, res)
})

export {routerPost}