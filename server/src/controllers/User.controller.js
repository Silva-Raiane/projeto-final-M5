import { UserService } from "../services/User.service.js"
import { generateAccessToken } from "../authentication/Authenticator.js"

const instanceUsersService = new UserService()

export async function createUser(req, res){
    const { username, email, password } = req.body
    const {statusValue, message, userId} = await instanceUsersService.createUser(username, email, password)
    const userToken = generateAccessToken(userId)
    return res.status(statusValue).json(
    {
        message: message,
        token: userToken
    }
    )
}

export async function getUser(req, res){
    const {id} = req.body
    const {statusValue, message, user} = await instanceUsersService.getUser(id)
    return res.status(statusValue).json({
        message: message,
        user: user
    })
    
}

export async function logInUser(req, res){
    const { email, password } = req.body

    const userId = await instanceUsersService.userValidation(email, password);
    if(userId){
        const token = generateAccessToken(userId)
        return res.status(200).json({
            token: token
        })
    }

    return res.status(404).json({
        message: "The email or password is wrong!"
    })
}

export async function updateUsersPassword(req, res){
        const { id, password, newPassword} = req.body
        const {statusValue, message} = await instanceUsersService.updatePassword(id, password, newPassword)
        return res.status(statusValue).json({message: message})
}

export async function updateUsername(req, res){
    const { id, password, newUsername} = req.body
    const {statusValue, message} = await instanceUsersService.updateUsername(id, password, newUsername)
    return res.status(statusValue).json({message: message})
}

export async function deleteUser(req, res){
    const { id } = req.body
    const { statusValue, message} = await instanceUsersService.deleteUser(id)
    return res.status(statusValue).json({message: message})
}