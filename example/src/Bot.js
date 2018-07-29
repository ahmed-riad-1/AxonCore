'use strict';

import Client from './Client';

import config from './configs/customConf.json';
import tokenConf from './configs/tokenConf.json';
import generalConf from './configs/generalConf.json';
import templateConf from './configs/templateConf.json';

const Bot = new Client(
    tokenConf.bot.token,
    {
        autoreconnect: true,
        defaultImageFormat: 'png',
        defaultImageSize: 512,
        disableEveryone: true,
        getAllUsers: true,
        messageLimit: 100,
        restMode: true
    },
    config,
    generalConf,
    templateConf,
    tokenConf
);

export default Bot;
