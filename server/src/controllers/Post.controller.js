import { PostService } from "../services/Post.service.js"

const instancePostService = new PostService()

export async function createPost(req, res){
    const {title, content, creatorId} = req.body
    const { statusValue, message} = await instancePostService.createPost(title, content, creatorId)
    return res.status(statusValue).json({message: message})
}

export async function getPost(req, res){
    try{
        const {id} = req.body
        const response = await instancePostService.getPost(id)
        return res.status(response.statusValue).json({response})
    }catch(error){
        return res.status(404).json({error: error.message})
    }
}

export async function updateTitle(req, res){
    try{
        const { newTitle, postId, userId, password } = req.body
        const response = await instancePostService.updateTitle(userId, postId, password, newTitle)
        return res.status(response.statusValue).json({response})
    }catch(error){
        return res.status(404).json({error: error.message})
    }
}

export async function updateContent(req, res){
    try{
        const { newContent, postId, userId, password } = req.body
        const response = await instancePostService.updateContent(userId, postId, password, newContent)
        return res.status(response.statusValue).json({response})
    }catch(error){
        return res.status(404).json({error: error.message})
    }
}

export async function deletePost(req, res){
    try{
        const { userId, postId, password} = req.body
        const response = await instancePostService.deletePost(userId, postId, password)
        
        return res.status(response.statusValue).json({response})
    }catch(error){
        return res.status(404).json({error: error.message})
    }
}