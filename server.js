const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const carRoutes = require('./routes/carRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

require('dotenv').config();

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:3001',  
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/users', userRoutes); 
app.use('/api/cars', carRoutes);    
app.use('/api/rentals', rentalRoutes); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

mongoose.connect('mongodb://localhost:27017/car-rental-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => console.error('MongoDB connection error:', err));


