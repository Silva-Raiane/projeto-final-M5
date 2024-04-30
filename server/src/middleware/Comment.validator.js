import { ERROS } from "../shared/messages.js";

export class CommentValidator{
    async createCommentValidation(req, res, next){
        const { comment, creatorId, postId } = req.body || {}
        const fields = ["comment", "creatorId", "postId"]
        const errors = []

        for (const field of fields) {
            if (!req.body[field]) {
                errors.push(`${ERROS.COMMENT_NEEDS} a/an ${field}`);
            }
        }
        
        if (errors.length) {
            return res.status(404).json({ message: errors });
        }
        
        next()
    }

    async getCommentsFromPostValidation(req, res, next){
        const { postId } = req.body
        if (!postId){
            return res.status(404).json({
                message: `Missing post's id`
            })
        }
        next()
    }

    async deleteCommentValidation(req, res, next){
        const { commentId, userId, password } = req.body || {}
        const fields = ["commentId", "userId", "password"]
        const errors = []

        for (const field of fields) {
            if (!req.body[field]) {
                errors.push(`${ERROS.COMMENT_NEEDS} a/an ${field}`);
            }
        }
        
        if (errors.length) {
            return res.status(404).json({ message: errors });
        }
        
        next()   
    }
}