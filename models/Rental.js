const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pickupDate: { type: Date, required: true },
    dropoffDate: { type: Date, required: true },
});

module.exports = mongoose.model('Rental', rentalSchema);

module.exports = mongoose.model('Rental', rentalSchema);
