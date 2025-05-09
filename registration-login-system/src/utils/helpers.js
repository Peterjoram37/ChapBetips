module.exports = {
    generateActivationKey: function(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    validateInput: function(input) {
        // Basic validation to check if input is not empty
        return input && input.trim() !== '';
    },

    hashPassword: async function(password) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    },

    comparePasswords: async function(password, hashedPassword) {
        const bcrypt = require('bcrypt');
        return await bcrypt.compare(password, hashedPassword);
    }
};