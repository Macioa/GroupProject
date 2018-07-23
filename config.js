defaultConfig = {
    port: 3000,


    
    dbUser: "user",
    dbPass: "password",
}

defaultConfig.dbUser = process.env.dbUser || defaultConfig.dbUser;
defaultConfig.dbPass = process.env.dbPass || defaultConfig.dbPass;

module.exports = defaultConfig