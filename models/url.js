const helper = require('../helpers/util.js');

module.exports = function(sequelize, DataTypes) {
  var Url = sequelize.define('Url', {
    Url: DataTypes.STRING,
    ShortUrl: DataTypes.STRING,
    click_count: DataTypes.INTEGER
  },{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    hooks: {
      beforeCreate: (url) => {
        url.ShortUrl = helper.ShortURL(url.Url);
        url.click_count = 0;
      }
    }
  });
  return Url;
};
