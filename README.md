# Registration and Login System

This project is a registration and login system that allows users to sign up, log in, and manage their accounts. It includes manual payment processing and activation keys for account activation and result viewing.

## Features

- User registration and login
- Account activation via activation keys
- Manual payment processing
- User dashboard for viewing results

## Project Structure

```
registration-login-system
├── src
│   ├── controllers
│   │   ├── authController.js
│   │   └── paymentController.js
│   ├── models
│   │   ├── userModel.js
│   │   └── activationKeyModel.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── paymentRoutes.js
│   ├── services
│   │   ├── authService.js
│   │   └── paymentService.js
│   ├── utils
│   │   └── helpers.js
│   ├── views
│   │   ├── login.html
│   │   ├── register.html
│   │   └── dashboard.html
│   └── app.js
├── config
│   └── dbConfig.js
├── public
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
│   └── images
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd registration-login-system
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables in the `.env` file.

5. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate to the registration page to create a new account.
- After registration, check your email for an activation key.
- Use the activation key to activate your account.
- Log in to access your dashboard and view results.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.
