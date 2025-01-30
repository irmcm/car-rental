const Rental = require('../models/Rental');
const Car = require('../models/Car');
const User = require('../models/User');

exports.createRental = async (req, res) => {
    const { userId, carId, startDate, endDate, totalCost } = req.body;

    try {
        const rental = new Rental({
            userId,
            carId,
            startDate,
            endDate,
            totalCost,
        });

        await rental.save();
        res.status(201).json({ message: 'Rental created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
