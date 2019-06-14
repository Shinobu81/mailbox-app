const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://ronh:0350@mailbox-3enm6.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {dbName: 'Mailbox', useNewUrlParser:true}, (err) => {
    console.log('mongo db connection', err)
})

const applicantSchema = mongoose.Schema({
    openDate: {type:Date},
    term: {type:String},
    pmb: {type:String},
    firstName: {type:String},
    lastName: {type:String},
    city: {type:String},
    state: {type:String},
    zip: {type:String},
    country: {type:String},
    phone: {type:String},
    email: {type:String},
    companyName: {type:String},
    companyAddress: {type:String},
    companyCity: {type:String},
    companyState: {type:String},
    companyZip: {type:String},
    companyCountry: {type:String},
    authorize: {type:String},
    signed: {type:Boolean}
}, {collection: 'applicantInfo'});

module.exports = mongoose.model('applicantInfo', applicantSchema);