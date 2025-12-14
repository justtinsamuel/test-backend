const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = (password) => {
    const encrypted = bcrypt.hashSync(password, saltRounds); 
    return encrypted;
}

const decryptPassword = (password, encrypted) => {
    const decrypted = bcrypt.compareSync(password, encrypted);
    return decrypted;
}

module.exports = {
    encryptPassword,
    decryptPassword
}