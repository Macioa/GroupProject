defaultConfig = {
    port: 3000,



    dbUser: "Daniel",
    dbPass: "l5Eec9",
}

defaultConfig.dbUser = process.env.dbUser || defaultConfig.dbUser;
defaultConfig.dbPass = process.env.dbPass || defaultConfig.dbPass;

module.exports = defaultConfig
