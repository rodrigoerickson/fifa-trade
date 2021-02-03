async function retry(applyFunction, driver, timeSleep){
    // console.log('retentativa');
    // console.log('aguardando '+timeSleep+' para retentativa')
    await sleep(timeSleep)
    await applyFunction(driver)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}