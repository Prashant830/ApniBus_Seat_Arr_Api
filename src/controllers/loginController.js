const AppError = require('../utils/AppError');
const loginService = require('../services/loginService');
const { client } = require('../utils/mongoClient');



const db = client.db('ApniBus'); 
const usersCollection = db.collection('users');

async function userRegister(req, res, next) {
    try {
        const { username, password } = req.body;
        console.log(username + " " + password)

        const user = await usersCollection.findOne({ username });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        if(!username && !password ){
            return res.status(400).json({ message: 'Username And Password is required' }); 
        }
 
        if(!username){
            return res.status(400).json({ message: 'Username is required' }); 
        } 
        if(!password){
            return res.status(400).json({ message: 'Password is required' }); 
        }
        
        // Create new user
        await usersCollection.insertOne({
            username: username,
            password: password,
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


async function userLogin(req, res, next) {
    try {
        console.log(req.body); 
        const loginToken = await loginService.getLoginToken(req.body);
        res.status(200).json({
            status: 'success',
            token: loginToken,
        });
    } catch (error) {
        next(error);
    }
}


module.exports = { userLogin ,  userRegister};
