async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _   _            _     _     
    | \\ | |          | |   (_)    
    |  \\| |_   ___  _| |_   _ ___ 
    | . \` | | | \\ \\/ / __| | / __|
    | |\\  | |_| |>  <| |_ _| \\__ \\
    \\_| \\_/\\__,_/_/\\_\\\\__(_) |___/
                          _/ |    
                         |__/     
                                        `);
    console.log(`\n    Welcome to the Egg application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
     This application can help you quickly deploy the Egg project.
     The application uses FC component：https://github.com/devsapp/fc
     The application homepage: https://github.com/devsapp/nodejs-runtime-framework-application/tree/master/egg-runtime-app\n`)
}

module.exports = {
    postInit,
    preInit
}

