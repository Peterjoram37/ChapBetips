const mongoose = require('mongoose');

const dbConfig = {
    url: process.env.DB_URL || 'mongodb://localhost:27017/registration-login-system',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url, dbConfig.options);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
};