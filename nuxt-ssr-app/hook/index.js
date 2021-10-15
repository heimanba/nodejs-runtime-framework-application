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
    console.log(`\n    Welcome to the nuxt SSR application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
     This application can help you quickly deploy the nuxt SSR project.
     The application uses FC component：https://github.com/devsapp/fc
     The application homepage: https://github.com/devsapp/nuxt-ssr-app`)
    console.log(`\n     You can execute the following commands to develop application：
     npm install
     npm run dev
     s deploy\n`)
}

module.exports = {
    postInit,
    preInit
}

