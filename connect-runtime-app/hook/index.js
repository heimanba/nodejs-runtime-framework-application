async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n    Welcome to the connect application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
     This application can help you quickly deploy the connect project.
     The application uses FC component：https://github.com/devsapp/fc
     The application homepage: https://github.com/devsapp/nodejs-runtime-framework-application/tree/master/connect-runtime-app`)
    console.log(`\n     You can execute the following commands to develop application：
     npm install
     npm run dev
     s deploy\n`)
}

module.exports = {
    postInit,
    preInit
}

