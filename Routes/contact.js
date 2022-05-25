// 1 require express
const express = require("express");
const { addContact, getContacts, getOneContact, deleteContact, editContact } = require("../Controllers/contact");
const Contact = require("../models/Contact");
const isAuth = require("../middleware/isAuth")

// express Router
const router = express.Router();

/// Routes

router.get('/test', (req, res) => {
    res.send('Hello World')
})

/**
 * @desc : add contact
 * @path : http://localhost:7800/api/contacts/
 * @method : POST
 * @data : req.body
 */
router.post('/', isAuth, addContact)

/**
 * @desc : get all contacts
 * @path : http://localhost:7800/api/contact/
 * @method : GET
 * @data : no data
 */
router.get('/getallcontact', getContacts)

/**
 * @desc : get one contact
 * @path : http://localhost:7800/api/contact/:id
 * @method : GET
 * @data : req.params._id
 */
router.get('/:id', getOneContact)

/**
 * @desc : delete contact
 * @path : http://localhost:7800/api/contact/:id
 * @method : DELETE
 * @data : req.params._id
 */
router.delete('/:_id', deleteContact)

/**
 * @desc : update contact
 * @path : http://localhost:7800/api/contact/:_id
 * @method : PUT
 * @data : req.params._id & req.body
 */
router.put('/:_id', editContact)


// export
module.exports = router;