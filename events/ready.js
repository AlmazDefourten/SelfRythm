const utils = require('../utils');

module.exports = client => {

    client.user.setActivity("�������� �������", {type: "LISTENING"});

    utils.log(`Logged in as ${client.user.tag} !`);

};