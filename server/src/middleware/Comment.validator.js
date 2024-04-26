import { ERROS } from "../shared/messages";

export class CommentValidator{
    async createCommentValidation(req, res, next){
        const { comment, creatorId, postId } = req.body || {}
        const fields = ["comment", "creatorId", "postId"]
        const errors = []

        for (const field of fields) {
            if (!req.body[field]) {
                errors.push(`${ERROS.USER_NEEDS} a/an ${field}`);
            }
        }
        
        if (errors.length) {
            return res.status(404).json({ message: errors });
        }
        
        next()
    }
}