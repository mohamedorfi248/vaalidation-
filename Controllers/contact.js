const Contact = require("../models/Contact");



exports.addContact = async (req, res) => {
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone, id_user:req.user._id});
        await newContact.save()
        res.status(200).send({msg: 'Contact add successfully ...', newContact})
    } catch (error) {
        res.status(400).send({msg:'Can not add contact !!!', error})
    }
}

exports.getContacts = async (req, res) => {
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg:'This is the list of all contacts ..', listContacts})
    } catch (error) {
        res.status(400).send({msg: 'Can not get all contacts !!!', error})
    }
}

exports.getOneContact = async (req, res) => {
    try {
        const contactToGet = await Contact.findOne({ _id: req.params.id});
        res.status(200).send({msg: 'I get the contact ...', contactToGet})
    } catch (error) {
        res.status(400).send({msg: 'Can not get contact with this Id !!!', error})
    }
}

exports.deleteContact = async (req, res) => {
    try {
        const {_id} = req.params;
        await Contact.findByIdAndDelete({_id});
        res.status(200).send({msg: 'Contact deleted ...'})
    } catch (error) {
        res.status(400).send({msg: 'Con not delete contact with this Id !!!', error})
    }
}

exports.editContact = async (req, res) => {
    try {
        const {_id} = req.params;
        const result = await Contact.updateOne({_id}, {$set : { ...req.body }});
        res.status(200).send({msg: 'Contact updated ...'})
    } catch (error) {
        res.status(400).send({msg: 'Can not update contact with this Id !!!', error})
    }
}