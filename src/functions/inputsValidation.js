function inputsValidation(input, type) {
    input = input.trim();

    let payload = {
        value: input,
        error: false,
        notification: ''
    };

    switch (type) {
        case 'email':
            if (!input) {
                payload = { ...payload, error: true, notification: 'email input is empty' };
                break;
            }

            const newEmail = input.toLowerCase();
            const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

            if (!emailFormat.test(newEmail)) {
                payload = { ...payload, error: true, notification: 'email is not valid' };
            }

            payload = { ...payload, value: newEmail };

            break;

        case 'password':
            if (!input) {
                payload = { ...payload, error: true, notification: 'password input is empty' };
                break;
            }

            const minPassLength = 4;

            if (input.length < minPassLength) {
                payload = { ...payload, error: true, notification: `password length must be ${minPassLength} characters` };
                break;
            }

            break;

        default:
            break;
    }

    return payload;
}

export default inputsValidation;