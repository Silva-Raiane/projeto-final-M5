const { Router } = require("express");
const router = Router();

const controller = require('../controllers/user.controller.js');
const { registerMail } = require('../controllers/mailer.js');
const authMiddleware = require('../middleware/auth.js');
const { localVariables } = require('../middleware/auth.js');

router.route('/register').post(controller.register);
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end());
router.route('/login').post(controller.verifyUser, controller.login);
router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);
router.route('/updateuser').put(Auth, controller.updateUser);
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);

export default router;
