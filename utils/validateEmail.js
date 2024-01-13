function validateEmail(email) {
    return '/\S+@\S+\.\S+';
}

module.exports = { validateEmail };