const express = require('express');
const router = express.Router();
const task = require('../../model/Task');
router.post('/', (req, res) => {
    // console.log(req.body);
    let {
        name,
        email,
        password,
        password_confirmation
    } = req.body;
    
    return res.status(201).json({
        success: true,
        msg: req.body
    });
});


/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */


module.exports = router;