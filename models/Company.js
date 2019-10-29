const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    motto: String,
    img: String,
    email: String,
    phone: String,
    location: String,
    hashtags: [String],
    expectedPriceTop: Number,
    expectedPriceBottom: Number, 
    portfolioCountTop: Number,
    portfolioCountBottom: Number
})

const Company = mongoose.model('Company', companySchema);

module.exports = Company;