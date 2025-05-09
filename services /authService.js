class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async registerUser(username, password) {
        const hashedPassword = await this.hashPassword(password);
        const newUser = new this.userModel({
            username,
            password: hashedPassword,
            accountStatus: 'inactive'
        });
        return await newUser.save();
    }

    async loginUser(username, password) {
        const user = await this.userModel.findOne({ username });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await this.validatePassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return user;
    }

    async hashPassword(password) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    async validatePassword(password, hashedPassword) {
        const bcrypt = require('bcrypt');
        return await bcrypt.compare(password, hashedPassword);
    }

    async activateAccount(userId) {
        return await this.userModel.findByIdAndUpdate(userId, { accountStatus: 'active' });
    }
}

module.exports = AuthService;
