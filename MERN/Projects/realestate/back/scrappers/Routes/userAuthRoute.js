import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import  userModel  from '../model/userModel.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //Check for existing user

        const alreadyExists = await userModel.findOne({
            $or: [{ email: email }, { username: username }]
        });
        if (alreadyExists) {
            return res.status(409).json({ status: false, message: "User already exists!" });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            username: username,
            email: email,
            password: hashPassword
        });
        await newUser.save();
        return res.status(200).json({ status: true, message: "Your registration is successful!" });
    }
    catch (err) {
        if (err.code == 11000) {
            return res.status(409).json({ status: false, message: "User already exists!" });
        }
        return res.status(403).json({ status: false, message: "Something went wrong!" });

    }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const userExists = await userModel.findOne({ email: email });
    if (!userExists) {
        return res.status(401).json({ status: false, message: "User not Authorized!" });
    }
    const passwordMatch = await bcrypt.compare(password, userExists.password);
    if (!passwordMatch) {
        return res.status(401).json({ status: false, message: "Wrong Email or Password!" });
    }
    const token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('isLoggedIn', token, { httpOnly: true, maxAge: 24 * 60 * 60 });
    return res.status(200).json({ status: true, message: "You logged in Successfully!" });
});

router.post('/forgot', async (req, res) => {
    try {
        const { email } = req.body;
        const userExists = await userModel.findOne({ email: email });
        if (!userExists) {
            return res.status(404).json({ status: false, message: "User does not exist!" });
        }
        const newToken = jwt.sign({ username: userExists.username }, process.env.JWT_SECRET, { expiresIn: '5m' });
        //Email config
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASS,
            },
        });

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: 'anishdas506@gmail.com', // sender address
                to: `${email}`, // list of receivers
                subject: "Reset Password", // Subject line
                text: `http://localhost:5173/reset/${newToken}`, // plain text body
            });
            console.log("Message sent: %s", info.messageId);
        }

        main().catch(console.error);
    }
    catch (error) {
        return res.status(403).json({ status: false, message: "Something went wrong!" });
    }
});

router.post('/reset/:token', async (req, res) => {
    try {
        const { password, token } = req.body;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const id = decodedToken.id;
        console.log(id);
        const newHashPassword = await bcrypt(password, 10);
        await User.findByIdandUpdate({ _id: id }, { password: newHashPassword });
        return res.status(200).json({ status: true, message: "Your password have been updated successfully!" });
    }
    catch (err) {
        res.status(403).json({ status: false, message: "Something went wrong!" });
    }

});

router.get('/verify', async (req, res) => {
    try {
        const token = req.cookies.isLoggedIn;
        if (!token) {
            return res.status(401).json({ status: false, message: "Please Login and tru again!" });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ status: false, message: "Please Login and tru again!" });
        }
        const user = await userModel.findById(decodedToken._id);
        if (!user) {
            return res.status(404).json({ status: false, message: "User does not exist!" });
        }
        return res.status(200).json({ status: true, message: "User Authorized!" });
    }
    catch (err) {
        return res.status(403).json({ status: false, message: "Something went wrong!" });
    }
});


export { router as userAuthRouter};