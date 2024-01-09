export const checkValidData = (email, password, name) => {
    const isNamePresent = name !== '';
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
    );
    if (!isNamePresent) return 'Name is mandatory';
    if (!isEmailValid) return 'Email ID is not valid';
    if (!isPasswordValid) return 'Password is not valid';
    return null;
};
