const passwordbox = document.getElementById('password');
        const length = 12;

        const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const number = '0123456789';
        const symbol = '~!@#$%^&*()_-+=:;"';

        const allchars = UpperCase + lowerCase + number + symbol;

        function createPassword() {
            let password = '';
            password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += number[Math.floor(Math.random() * number.length)];
            password += symbol[Math.floor(Math.random() * symbol.length)];

            while (password > password.length) {
                password += allchars[Math.floor(Math.random() * allchars.length)];

            }
            passwordbox.value = password;
        }