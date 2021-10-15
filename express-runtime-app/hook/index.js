async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _____                             
    |  ___|                            
    | |____  ___ __  _ __ ___  ___ ___ 
    |  __\\ \\/ / '_ \\| '__/ _ \\/ __/ __|
    | |___>  <| |_) | | |  __/\\__ \\__ \\
    \\____/_/\\_\\ .__/|_|  \\___||___/___/
              | |                      
              |_|                      
                                        `)
    console.log(`\n    Welcome to the Express application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
     This application can help you quickly deploy the Express project.
     The application uses FC component：https://github.com/devsapp/fc
     The application homepage: https://github.com/devsapp/nodejs-runtime-framework-application/tree/master/express-runtime-app`)
    console.log(`\n     You can execute the following commands to develop application：
     npm install
     npm run dev
     s deploy\n`)
}

module.exports = {
    postInit,
    preInit
}

