"use strict";

//Based on ShortURL by delight-im (https://github.com/delight-im/ShortURL/blob/master/JavaScript/ShortURL.js)

module.exports = {
  ShortURL: (url) => {
    const alphabet = '23456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ-_';
    const base = alphabet.length;
    let num = url.length*(Math.floor(Math.random() * 999999) + 1000000);
    let str = '';
      while (num > 0) {
        str = alphabet.charAt(num % base) + str;
        num = Math.floor(num / base);
      }
    return str;
  }
};
