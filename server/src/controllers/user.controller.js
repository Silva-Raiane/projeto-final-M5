const UserModel = require('../model/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');

async function verifyUser(req, res, next) {
    try {
        const { username } = req.method === "GET" ? req.query : req.body;
        const exist = await UserModel.findOne({ username });
        if (!exist) return res.status(404).send({ error: "Can't find User!" });
        next();
    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" });
    }
}

async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;
        const existUsername = UserModel.findOne({ username });
        const existEmail = UserModel.findOne({ email });
        Promise.all([existUsername, existEmail]).then(() => {
            if (password) {
                bcrypt.hash(password, 10).then(hashedPassword => {
                    const user = new UserModel({
                        username,
                        password: hashedPassword,
                        profile: profile || '',
                        email
                    });
                    user.save().then(result => res.status(201).send({ msg: "User Register Successfully" })).catch(error => res.status(500).send({ error }));
                }).catch(error => {
                    return res.status(500).send({ error: "Enable to hashed password" });
                });
            }
        }).catch(error => {
            return res.status(500).send({ error });
        });
    } catch (error) {
        return res.status(500).send(error);
    }
}

async function login(req, res) {
    const { username, password } = req.body;
    try {
        UserModel.findOne({ username }).then(user => {
            bcrypt.compare(password, user.password).then(passwordCheck => {
                if (!passwordCheck) return res.status(400).send({ error: "Don't have Password" });
                const token = jwt.sign({ userId: user._id, username: user.username }, ENV.JWT_SECRET, { expiresIn: "24h" });
                return res.status(200).send({ msg: "Login Successful...!", username: user.username, token });
            }).catch(error => {
                return res.status(400).send({ error: "Password does not Match" });
            });
        }).catch(error => {
            return res.status(404).send({ error: "Username not Found" });
        });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

module.exports = { verifyUser, register, login };