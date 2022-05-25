// require express
const express = require('express');
const { register, login } = require('../Controllers/user');
const isAuth = require('../middleware/isAuth');
const { registerValdidation, validation, loginValidation } = require('../middleware/validator');

const router = express.Router();

// route user login & register

// register
router.post('/register',registerValdidation(), validation, register)

// login 
router.post('/login',loginValidation(), validation, login);

// current User
router.get("/current", isAuth, (req, res) => {
    res.send(req.user)
})


// export
module.exports = router;