var companyRouter = require('express').Router();
const Company = require('./../models/Company');

companyRouter.get('/', async(req, res) => {
    try {
        const result = await Company.find({})
        res.send(result)
    }
    catch (e) {
        res.status(500).send(e);
    }
})

companyRouter.post('/', async(req, res) => {
    try {
        const doc = new Company(req.body)
        const result = await doc.save();
        res.send(result);
    }
    catch (e) {
        res.status(500).send(e)
    }
})

module.exports = companyRouter;