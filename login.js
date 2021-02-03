export async function fluxoLogin(driver){
    try{
        // console.log('fluxo Login')
        await openSite(driver);
        await loginSite(driver);
        await authorizeLogin(driver);
    }catch(e){
        await retry(fluxoLogin, driver, 500)
    }
}


async function openSite(driver){
    // console.log('openSite');
    await driver.get('https://www.easports.com/br/fifa/ultimate-team/web-app/');
    
}

async function loginSite(driver){
    try{
        // console.log('loginSite')
        await driver.findElement(By.className('call-to-action')).click();
        await driver.findElement(By.id('email')).sendKeys(email);
        await driver.findElement(By.id('password')).sendKeys(senha);
        await driver.findElement(By.id('btnLogin')).click();
    }
    catch(e){
        await retry(loginSite, driver, 500)
    }
    
}

async function authorizeLogin(driver){
    try{
        // console.log('authorizeLogin');
        var validateCode  = await driver.findElements(By.className('origin-ux-radio-button-label'))
        validateCode.map((val, index) => {
            if(index === 2){
                val.click()
            }
        })
        await driver.findElement(By.id('btnSendCode')).click();
        // console.log('agurandando digitação do código');
    }catch(e){
        await retry(authorizeLogin, driver, 500)
    }
}