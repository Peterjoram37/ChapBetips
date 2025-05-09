class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async register(req, res) {
        try {
            const { username, password } = req.body;
            const user = await this.authService.registerUser(username, password);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const token = await this.authService.loginUser(username, password);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async activateAccount(req, res) {
        try {
            const { activationKey } = req.body;
            const result = await this.authService.activateUserAccount(activationKey);
            res.status(200).json({ message: 'Account activated successfully', result });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default AuthController;