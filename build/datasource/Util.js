"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = require("crypto");
class Util {
    static encrypt(plain_text) {
        var cipher = Crypto.createCipher('aes-256-cbc', 'nPDcVf356aN0wT52YIshPJYioi1srwsP');
        var cipher_text = cipher.update(plain_text, 'utf8', 'hex');
        cipher_text += cipher.final('hex');
        return cipher_text;
    }
    static decrypt(cipher_text) {
        var decipher = Crypto.createDecipher('aes-256-cbc', 'nPDcVf356aN0wT52YIshPJYioi1srwsP');
        var plain_text = decipher.update(cipher_text, 'hex', 'utf8');
        plain_text += decipher.final('utf8');
        return plain_text;
    }
}
exports.Util = Util;
