const Car = require('../models/Car');

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


exports.addCar = async (req, res) => {
    const { make, model, year, transmission, mileage, deposit, pricePerDay } = req.body;

    try {
        const newCar = new Car({
            make,
            model,
            year,
            transmission,
            mileage,
            deposit,
            pricePerDay,
        });

        await newCar.save();
        res.status(201).json({ message: 'Car added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
