const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    transmission: { type: String, required: true },
    fuel: { type: String, required: true },
    dailyPrice: { type: Number, required: true },
    capacity: { type: Number, required: true },
    img: { type: String, required: true },
});

module.exports = mongoose.model('Car', carSchema);

