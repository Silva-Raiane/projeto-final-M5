import { CommentService } from "../services/Comment.service.js"

const instanceCommentService = new CommentService()

export async function createComment(req, res){
    try{
        const { comment, creatorId, postId} = req.body
        const response = await instanceCommentService.createComment(comment, creatorId, postId)

        return res.status(response.statusValue).json({
            message: response.message
        })
    }catch(error){
        return res.status(404).json({message:error.message})
    }
}

export async function deleteComment(req, res){
    try{
        const { commentId, userId, password } = req.body
        const response = await instanceCommentService.deleteComment(commentId, userId, password)

        return res.status(response.statusValue).json({message: response.message})
    }catch(error){
        return res.status(404).json({message: error.message})
    }
}