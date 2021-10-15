async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _____            
    |  ___|           
    | |__  __ _  __ _ 
    |  __|/ _\` |/ _\` |
    | |__| (_| | (_| |
    \\____/\\__, |\\__, |
           __/ | __/ |
          |___/ |___/ 
                                        `)
    console.log(`\n    Welcome to the Egg application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
     This application can help you quickly deploy the Egg project.
     The application uses FC component：https://github.com/devsapp/fc
     The application homepage: https://github.com/devsapp/nodejs-runtime-framework-application/tree/master/egg-runtime-app`)
    console.log(`\n     You can execute the following commands to develop application：
     npm install
     npm run dev
     s deploy\n`)
}

module.exports = {
    postInit,
    preInit
}

