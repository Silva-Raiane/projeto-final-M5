import { ERROS } from "../shared/messages.js";
export class PostValidator{
    async createPostValidation(req, res, next){
        const { title, content, creatorId } = req.body || {}
        const fields = ["title", "content", "creatorId"]
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

    async getPostValidation(req, res, next){
        const { id } = req.body || {}
        const fields = ["id"]
        const erros = []

        for(const field of fields){
            if(!req.body[field]){
                erros.push(`${ERROS.POST_NEEDS} a/an ${field}`)
            }
        }

        if(erros.length){
            return res.status(404).json({message: erros})
        }

        next()
    }

    async updateTitleValidation(req, res, next){
        const { newTitle, postId, userId, password } = req.body || {}
        const fields = ["newTitle", "postId", "userId", "password"]
        const erros = []

        for(const field of fields){
            if(!req.body[field]){
                erros.push(`${ERROS.POST_NEEDS} a/an ${field}`)
            }
        }

        if(erros.length){
            return res.status(404).json({message: erros})
        }

        next()
    }

    async updateContentValidation(req, res, next){
        const { newContent, postId, userId, password } = req.body || {}
        const fields = ["newContent", "postId", "userId", "password"]
        const erros = []

        for(const field of fields){
            if(!req.body[field]){
                erros.push(`${ERROS.POST_NEEDS} a/an ${field}`)
            }
        }

        if(erros.length){
            return res.status(404).json({message: erros})
        }

        next()
    }

    async deletePostValidation(req, res, next){
        const { postId, userId, password } = req.body || {}
        const fields = ["postId", "userId", "password"]
        const erros = []

        for(const field of fields){
            if(!req.body[field]){
                erros.push(`${ERROS.POST_NEEDS} a/an ${field}`)
            }
        }

        if(erros.length){
            return res.status(404).json({message: erros})
        }

        next()
    }
}