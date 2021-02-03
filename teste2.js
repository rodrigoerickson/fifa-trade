require('chromedriver');
const { Builder, By, Key } = require('selenium-webdriver');

// var nomeJogador = 'Vardy';
// var nomeJogadorCarta = 'Vardy';
// var precoDeCompra = 1600;
// var precoDeVenda = 1800;

// var nomeJogador = 'Naldo';
// var nomeJogadorCarta = 'Naldo';
// var precoDeCompra = 1400;
// var precoDeVenda = 1600;


// var nomeJogador = 'Varane';
// var nomeJogadorCarta = 'Varane';
// var precoDeCompra = 160000;
// var precoDeVenda = 200000;


// var nomeJogador = 'Isco';
// var nomeJogadorCarta = 'Isco';
// var precoDeCompra = 14500;
// var precoDeVenda = 15750;

//var nomeJogador = 'Jesus';
// var nomeJogadorCarta = 'Gabriel Jesus';
// var precoDeCompra = 4800;
// var precoDeVenda = 5300;


// var nomeJogador = 'Jesus';
// var nomeJogadorCarta = 'Gabriel Jesus';
// var precoDeCompra = 4800;
// var precoDeVenda = 5300;

// var nomeJogador = 'Gómez';
// var nomeJogadorCarta = 'Gómez';
// var precoDeCompra = 9100;
// var precoDeVenda = 9800;

// var nomeJogador = 'William Troost-Ekong';
// var nomeJogadorCarta = 'William Troost-Ekong';
// var precoDeCompra = 700;
// var precoDeVenda = 850;

// var nomeJogador = 'Gameiro';
// var nomeJogadorCarta = 'Gameiro';
// var precoDeCompra = 800;
// var precoDeVenda = 900;

// var nomeJogador = 'Buffon';
// var nomeJogadorCarta = 'Buffon';
// var precoDeCompra = 1100;
// var precoDeVenda = 1300;

// var nomeJogador = 'Talisca';
// var nomeJogadorCarta = 'Anderson Talisca';
// var precoDeCompra = 2200;
// var precoDeVenda = 2400;

// var nomeJogador = 'Kampl';
// var nomeJogadorCarta = 'Kampl';
// var precoDeCompra = 950;
// var precoDeVenda = 1100;

// var nomeJogador = 'Sergej';
// var nomeJogadorCarta = 'Milinković-Savić';
// var precoDeCompra = 13750;
// var precoDeVenda = 14750;

// var nomeJogador = 'Dimitri Payet';
// var nomeJogadorCarta = 'Payet';
// var precoDeCompra = 1100;
// var precoDeVenda = 1300;

// var nomeJogador = 'Vinícius Jr.';
// var nomeJogadorCarta = 'Vinícius Jr.';
// var precoDeCompra = 850;
// var precoDeVenda = 1000;

// var nomeJogador = 'Nicolas Pépé';
// var nomeJogadorCarta = 'Pépé';
// var precoDeCompra = 6800;
// var precoDeVenda = 7400;

var nomeJogador = 'Aduriz';
var nomeJogadorCarta = 'Aduriz';
var precoDeCompra = 750;
var precoDeVenda = 950;

var nomeJogador = 'Casillas';
var nomeJogadorCarta = 'Casillas';
var precoDeCompra = 950;
var precoDeVenda = 1200;

var nomeJogador = 'Miranda';
var nomeJogadorCarta = 'miranda';
var precoDeCompra = 1200;
var precoDeVenda = 1400;

var nomeJogador = 'Tolisso';
var nomeJogadorCarta = 'Tolisso';
var precoDeCompra = 1300;
var precoDeVenda = 1500;

var nomeJogador = 'Jamie Vardy';
var nomeJogadorCarta = 'Vardy';
var precoDeCompra = 2500;
var precoDeVenda = 2900;


var nomeJogador = 'Van de beek';
var nomeJogadorCarta = 'Van de beek';
var precoDeCompra = 900;
var precoDeVenda = 1100;

var nomeJogador = 'Luka Jović';
var nomeJogadorCarta = 'Jovića';
var precoDeCompra = 1800;
var precoDeVenda = 2100;

var nomeJogador = 'Carlos Vela';
var nomeJogadorCarta = 'Vela';
var precoDeCompra = 1300;
var precoDeVenda = 1500;


var nomeJogador = 'Yedlin';
var nomeJogadorCarta = 'Yedlin';
var precoDeCompra = 1200;
var precoDeVenda = 1500;

var nomeJogador = 'João Félix';
var nomeJogadorCarta = 'João Félix';
var precoDeCompra = 1500;
var precoDeVenda = 1700;



var nomeJogador = 'Williams';
var nomeJogadorCarta = 'Iñake Williams';
var precoDeCompra = 1200;
var precoDeVenda = 1400;





var nomeJogador = 'Cuadrado';
var nomeJogadorCarta = 'Cuadrado';
var precoDeCompra = 1300;
var precoDeVenda = 1500;




var nomeJogador = 'Ndombele';
var nomeJogadorCarta = 'Ndombele';
var precoDeCompra = 1100;
var precoDeVenda = 1300;

var nomeJogador = 'Militão';
var nomeJogadorCarta = 'Éder Militão';
var precoDeCompra = 1500;
var precoDeVenda = 1700;






var nomeJogador = 'Miranda';
var nomeJogadorCarta = 'miranda';
var precoDeCompra = 2600;
var precoDeVenda = 2900;

var nomeJogador = 'Mateo Kovačić';
var nomeJogadorCarta = 'Kovačić';
var precoDeCompra = 2700;
var precoDeVenda = 3000;


var nomeJogador = 'Yarmolenko';
var nomeJogadorCarta = 'Yarmolenko';
var precoDeCompra = 850;
var precoDeVenda = 1000;




var nomeJogador = 'James Rodríguez';
var nomeJogadorCarta = 'Rodríguez';
var precoDeCompra = 1000;
var precoDeVenda = 1200;

var nomeJogador = 'Capoue';
var nomeJogadorCarta = 'Capoue';
var precoDeCompra = 800;
var precoDeVenda = 900;




var nomeJogador = 'Morales';
var nomeJogadorCarta = 'Morales';
var precoDeCompra = 1000;
var precoDeVenda = 1100;






var nomeJogador = 'Bailey';
var nomeJogadorCarta = 'Bailey';
var precoDeCompra = 1100;
var precoDeVenda = 1300;

var nomeJogador = 'Nicolas Pépé';
var nomeJogadorCarta = 'Pépé';
var precoDeCompra = 950;
var precoDeVenda = 1100;


var nomeJogador = 'Adama Traoré';
var nomeJogadorCarta = 'Traoré';
var precoDeCompra = 950;
var precoDeVenda = 1100;

var nomeJogador = 'Richarlison';
var nomeJogadorCarta = 'Richarlison';
var precoDeCompra = 1000;
var precoDeVenda = 1100;



















var nomeJogador = 'Miranda';
var nomeJogadorCarta = 'Miranda';
var precoDeCompra = 1100;
var precoDeVenda = 1300;


var nomeJogador = 'Gameiro';
var nomeJogadorCarta = 'Gameiro';
var precoDeCompra = 850;
var precoDeVenda = 950;

var nomeJogador = 'Lucas Hernández';
var nomeJogadorCarta = 'Hernández';
var precoDeCompra = 1400;
var precoDeVenda = 1600;

var nomeJogador = 'Marcos Llorente';
var nomeJogadorCarta = 'Marcos Llorente';
var precoDeCompra = 1000;
var precoDeVenda = 1200;



var nomeJogador = 'Nicolas Pépé';
var nomeJogadorCarta = 'Pépé';
var precoDeCompra = 1000;
var precoDeVenda = 1200;



var nomeJogador = 'Óliver Torres';
var nomeJogadorCarta = 'Óliver Torres';
var precoDeCompra = 1100;
var precoDeVenda = 1300;

var nomeJogador = 'Hugo mallo';
var nomeJogadorCarta = 'Hugo mallo';
var precoDeCompra = 550;
var precoDeVenda = 650;




var nomeJogador = 'Yannick Carrasco';
var nomeJogadorCarta = 'Carrasco';
var precoDeCompra = 1300;
var precoDeVenda = 1500;

var nomeJogador = 'Talisca';
var nomeJogadorCarta = 'Anderson Talisca';
var precoDeCompra = 850;
var precoDeVenda = 1000;

var nomeJogador = 'Promes';
var nomeJogadorCarta = 'Promes';
var precoDeCompra = 1300;
var precoDeVenda = 1500;

var nomeJogador = 'Eric Bailly';
var nomeJogadorCarta = 'Bailly';
var precoDeCompra = 1300;
var precoDeVenda = 1500;





var email = "fifa-rodris@hotmail.com"
var email = 'rodris_erick3@hotmail.com';
var senha = "";

var variacaoBotaoCache = true;
var countBotaoCache = 0;
var jaPesquisouNome = 0;



async function retry(applyFunction, driver, timeSleep){
    // console.log('retentativa');
    // console.log('aguardando '+timeSleep+' para retentativa')
    await sleep(timeSleep)
    await applyFunction(driver)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



/////////////////////////////////////////////
//////////////// TELA BUSCAR /////////////

async function PBuscar_clickDinamicoCache(driver){
    // console.log('PBuscar_clickDinamicoCache');
    try{
        await sleep(2500);
        countBotaoCache = countBotaoCache + 1;
        if((countBotaoCache%5)===0){
            variacaoBotaoCache = !variacaoBotaoCache
        }
        if(variacaoBotaoCache){
            // console.log('PBuscar_clickDinamicoCache: incrementando um no lance')
            var decrementValue  = await driver.findElements(By.className('increment-value'));
            decrementValue.map((val,index) => {
                if(index === 2){
                    val.click()
                }
            })
        }else{
            // console.log('PBuscar_clickDinamicoCache: decrementando um no lance')
            var decrementValue  = await driver.findElements(By.className('decrement-value'));
            decrementValue.map((val,index) => {
                if(index === 2){
                    val.click()
                }
            })
        }
    }catch(e){
        await retry(PBuscar_clickDinamicoCache, driver, 500)
    }
}


async function PBuscar_clearNomeBuscaComprar(driver){
    // console.log('PBuscar_clearNomeBuscaComprar')
    try{
        var getInputValueNomeDoJogador = await driver.findElement(By.className('ut-text-input-control')).getAttribute("value");
        if(!!getInputValueNomeDoJogador){
            // console.log('PBuscar_clearNomeBuscaComprar: clicando em limpar o nome');
            // console.log('PBuscar_clearNomeBuscaComprar - getInputValueNomeDoJogador: ', getInputValueNomeDoJogador)
            await driver.findElement(By.className('icon_close')).click();
        }
    }
    catch(e){
        await retry(PBuscar_clearNomeBuscaComprar, driver, 500);
    }
}

async function PBuscar_preencherNome(driver){
    // console.log('PBuscar_preencherNome');
    try{
        
        await sleep(5000);
        // console.log('await sleep(5000);');
        await driver.findElement(By.className('ut-text-input-control')).click();
        await sleep(3000);
        // console.log('await sleep(3000);');
        await driver.findElement(By.className('ut-text-input-control')).sendKeys(nomeJogador);
        // console.log('PBuscar_preencherNome: clicando no nome do jogador')
        await sleep(3000);
        // console.log('await sleep(2000)');
        var resultadoBusca = await driver.findElements(By.className('btn-text'));
        resultadoBusca.map((val,index) => {
            if(index === 0){
                val.click()
            }
        })
    }catch(e){
        await retry(PBuscar_preencherNome, driver, 500)
    }
}

async function PBuscar_fluxoPreencherNome(driver){

    // console.log('PBuscar_fluxoPreencherNome');
    try{
        // console.log('PBuscar_fluxoPreencherNome: verificando se já pesquisei uma vez');        
        if(!jaPesquisouNome){
            // console.log('PBuscar_fluxoPreencherNome: sim, já foi pesquisado uma vez')
            jaPesquisouNome = 1;
            await PBuscar_clearNomeBuscaComprar(driver);
            await PBuscar_preencherNome(driver);
        }
    }catch(e){
        await retry(PBuscar_fluxoPreencherNome, driver, 500)
    }
}


/////////////////////////////////////////////
//////////////// TELA BUSCAR ///////////////




/////////////////////////////////////////////
//////////////// TELA COMPRAR /////////////


async function PCompra_SeConseguiuComprar(driver){
    // console.log('PCompra_SeConseguiuComprar');
    try{
        await sleep(2000);
        // console.log('await sleep(1000);')
        var seConseguiuComprar = await driver.findElements(By.className('won'));
        // console.log(seConseguiuComprar)
        await sleep(10000);
        // console.log('await sleep(10000);')
        if(seConseguiuComprar.length > 0){
            // console.log('indo para o fluxo de vender')
            jaPesquisouNome = 0
            await fluxoCompletoVender(driver);
        }else{
            await clickvoltar(driver);
            // console.log('voltando')
            await sleep(500);
            // console.log('indo para o fluxo de Buscar')
            await retry (PBuscar_FluxoBuscarJogador, driver, 500);
        }
    }catch(e){
        await retry(PCompra_SeConseguiuComprar, driver, 500);
    }
}

async function teste (driver, seFoiEncontrado){

    try{
        // console.log('PBuscar_FluxoBuscarJogador - seFoiEncontrado: ', seFoiEncontrado)
        if(!seFoiEncontrado){
            // console.log('PBuscar_FluxoBuscarJogador: jogador nessa faixa de preço não foi encontrando')
            await clickvoltar(driver);
            // console.log('PBuscar_FluxoBuscarJogador: tentando encontrar o jogado novamente');
            await sleep(500);
            // console.log('await sleep(500);');
            await PBuscar_FluxoBuscarJogador(driver);
        }else{
            // console.log('PBuscar_FluxoBuscarJogador: parece que foi encontrado')
            await PComprar_FluxoClickComprarJogador(driver);
            await sleep(200);
            // console.log('await sleep(200);');
            await PCompra_SeConseguiuComprar(driver);               
        }
    }catch(e){
        await retry(teste, driver, 300)
    }
}

async function PComprar_fluxoComprar(driver){
    // console.log('PComprar_fluxoComprar')
    var controle = false;
    var paramentro;
    try{
        var naoEncontrado = await driver.findElements(By.className('contents'));
        
        if(naoEncontrado.length > 0){
            // console.log('PComprar_fluxoComprar:', false)
            controle = true;
            paramentro = false;
        }
        await sleep(100);
        
        var encontrou = await driver.findElements(By.className('listFUTItem'));
        
        if(encontrou.length > 0){
            // console.log('PComprar_fluxoComprar:', true)
            controle = true;
            paramentro = true;
        }

        if(controle){
            await teste(driver, paramentro);
            return;
        }

        throw new Error();
    }catch(e){
        await retry(PComprar_fluxoComprar, driver, 200);
    }
}

async function PComprar_validaSeBuscouJogadorCorreto(driver){
    // console.log('PComprar_validaSeBuscouJogadorCorreto');
    try{
        var name = await driver.findElements(By.className("main-view"));
        var retorno;
        var nomeTexto;
        name.map((val,index) => {
            if(index === 0){
                nomeTexto = val.getText();
                
            }
        })
        textresult  = await nomeTexto;
        // console.log('PComprar_validaSeBuscouJogadorCorreto - nome do jogador validado:', textresult)
        // console.log('if: ('+textresult+' === '+ nomeJogadorCarta.toUpperCase()+')')
        if(textresult === nomeJogadorCarta.toUpperCase()){
            // console.log('PComprar_validaSeBuscouJogadorCorreto: true')
            retorno = true
        }else{
            // console.log('PComprar_validaSeBuscouJogadorCorreto: false')
            retorno = false
        }
        return retorno
    }catch(e){
        await retry(PComprar_validaSeBuscouJogadorCorreto, driver, 500)
    }
}

async function PComprar_clickModalConfirmarCompra(driver){
    try{
        var modal = await driver.findElement(By.className('ui-dialog-type-message'));
        console.log('modal: '+ modal);
        var botaoConfirmarCompra  = await modal.findElements(By.className('btn-text'))
        console.log('botaoConfirmarCompra: '+ botaoConfirmarCompra);
        botaoConfirmarCompra.map((val,index) => {
            console.log('entrou')
            if(index === 0){
                val.click();
            }
        })
    }catch(e){
        // retry(PComprar_clickModalConfirmarCompra, driver, 500);
    }
}

async function PComprar_ClickComprarJogador(driver){
    try{
        var botaoComprar = await driver.findElement(By.className("bidOptions"))
            botaoComprar.findElement(By.className('buyButton')).click()
    }catch(e){
        // await clickvoltar(driver);
        // retry(PComprar_ClickComprarJogador, driver, 500);
    }
}



async function PComprar_FluxoClickComprarJogador(driver){
    // console.log('PComprar_FluxoClickComprarJogador')
    try{
        var verificacao = await PComprar_validaSeBuscouJogadorCorreto(driver);
        await sleep(500); 
        // console.log('await sleep(500)');
        if(verificacao){
            // console.log('PComprar_FluxoClickComprarJogador: jogado encontrado')
            // console.log('PComprar_FluxoClickComprarJogador: clicando em comprar')
            await PComprar_ClickComprarJogador(driver);
            await sleep(500);
            // console.log('await sleep(500);');
            await PComprar_clickModalConfirmarCompra(driver);
        }else{
            await driver.findElement(By.className('ut-navigation-button-control')).click();
            await retry (PBuscar_FluxoBuscarJogador, driver, 500);
        }
    }catch(e){
        await clickvoltar(driver);
        await retry (PBuscar_FluxoBuscarJogador, driver, 500);
    }
}
/////////////////////////////////////////////
//////////////// TELA COMPRAR ////////////



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


async function clickTransfer(driver){
    try{
        // console.log('clickTransfer');
        await driver.findElement(By.className('icon-transfer')).click();
    }catch(e){
        await retry(clickTransfer, driver, 1000)
    }
}
async function clickInicio(driver){
    try{
        // console.log('clickInicio');
        await driver.findElement(By.className('icon-home')).click();
    }catch(e){
        await retry(clickInicio, driver, 1000)
    }
}

async function clickItensNaoAtribuidos(driver){
    try{
        // console.log('clickItensNaoAtribuidos');
        await driver.findElement(By.className('ut-unassigned-tile-view')).click();
    }catch(e){
        await retry(clickItensNaoAtribuidos, driver, 1000)
    }
}

async function clickListarTransferencia(driver){
    try{
        // console.log('clickListarTransferencia');
        await sleep(2000)
        await driver.findElement(By.className('accordian')).click();
    }catch(e){
        await retry(clickListarTransferencia, driver, 1000)
    }
}


async function clickBuscarNoMercado(driver){
    try{
        // console.log('clickBuscarNoMercado')
        await driver.findElement(By.className('ut-tile-transfer-market'))
            .findElement(By.className('tileContent')).click();
    }catch(e){
        await retry(clickBuscarNoMercado, driver, 500)
    }
}

async function setValoresComprar (driver){
    await sleep(500);
    try{
        // console.log('setValoresComprar')
        var inputsDeValores  = await driver.findElements(By.className('numericInput'))
        inputsDeValores.map((val, index) => {
            if(index === 2){
                val.clear();
                val.sendKeys('200')
            }
            if(index === 3){
                val.clear();
                val.sendKeys(precoDeCompra)
            }
        })

        var seconseguiusetar = false;
        var valormaximoinput;
        await sleep(2000)
        inputsDeValores.map((val, index) => {
            if(index === 3){
                valormaximoinput = val.getAttribute("value");
            }
        })
        valormaximoinput = await valormaximoinput;
        // console.log("parseInt("+valormaximoinput+") === parseInt("+precoDeCompra+"))");
        if(parseInt(valormaximoinput) === parseInt(precoDeCompra)){
            seconseguiusetar = true
        }

        if(!seconseguiusetar){
            await retry(setValoresComprar, driver, 500)    
        }

    }catch(e){
        await retry(setValoresComprar, driver, 500)
    }
}

async function setValoresVenda (driver){
    try{
        // console.log('setValoresVenda')
        var inputsDeValores  = await driver.findElements(By.className('numericInput'))
        // console.log('inputsDeValores')
        await sleep(2000)
        inputsDeValores.map((val, index) => {
            if(index === 0){
                // console.log('setValoresVenda: valor minimo');
                val.sendKeys(Key.chord(Key.CONTROL, "a"), precoDeVenda-100);
                
            }
            if(index === 1){
                // console.log('setValoresVenda: valor maximo');
                val.sendKeys(Key.chord(Key.CONTROL, "a"), precoDeVenda);
                
            }
        })

        // console.log('esse é bom')
        

        await sleep(2000)
        // console.log('inputsDeValores')
        inputsDeValores = await driver.findElements(By.className('numericInput'))
        // console.log('valorDoInput conseguiSetarOValor')
        var valorDoInput;
        var conseguiSetarOValor = false;
        await sleep(2000)
        // console.log('verificar se foi preenchido corretamente');
        inputsDeValores.map((val, index) => {
            if(index === 1){
                // console.log('valorDoInput');
                valorDoInput = val.getAttribute("value");
            }
        })
        valorDoInput = await valorDoInput;
        // console.log('valorDoInput: ', valorDoInput)
        // console.log(typeof valorDoInput)
        // console.log(typeof precoDeVenda)
        // console.log('('+valorDoInput+' === '+precoDeVenda+')')
        if(parseInt(valorDoInput) === parseInt(precoDeVenda)){
            // console.log('entrou no if')
            conseguiSetarOValor = true;
        }
        
        // console.log('conseguiSetarOValor: ', conseguiSetarOValor)
        if(!conseguiSetarOValor){
            // console.log('tentar de novo essa porra')
            await retry(setValoresVenda, driver, 500)
        }

    }catch(e){
        await retry(setValoresVenda, driver, 500)
    }
}




/////////////////////////////////
/////////// CLICKS //////////////

async function clickListarItemParaVenda(driver){
    // console.log('clickListarItemParaVenda')
    try{
        var inputsDeValores  = await driver.findElements(By.className('call-to-action'))
        inputsDeValores.map((val, index) => {
            if(index === 1){
                // console.log('vende porra!!!!!!!!!!!!!!!')
                val.click();
            }
        })
        await sleep(1000);

    }catch(e){
        await retry(clickListarItemParaVenda, driver, 500)
    }
}

async function clickPesquisarCompra(driver){
    // console.log('clickPesquisarCompra');
    try{
        await driver.findElement(By.className('call-to-action')).click();
    }catch(e){
        await retry(clickPesquisarCompra, driver, 500);
    }
}

async function clickvoltar(driver){
    // console.log('clickvoltar')
    try{
        await driver.findElement(By.className('ut-navigation-button-control')).click()
        // console.log('voltando2')
        await sleep(500);
    }catch(e){
        await retry(clickvoltar, driver, 500)
    }
}
/////////////////////////////////
/////////// CLICKS //////////////


/////////////////////////////////
/////////// FLUXOS //////////////
async function fluxoCompletoVender(driver){
    await clickInicio(driver);
    await clickItensNaoAtribuidos(driver);
    await clickListarTransferencia(driver);
    await setValoresVenda(driver);
    await clickListarItemParaVenda(driver);
    await sleep(2000)
    await fluxoCompletoComprar(driver);
}

async function fluxoLogin(driver){
    try{
        // console.log('fluxo Login')
        await openSite(driver);
        await loginSite(driver);
        await authorizeLogin(driver);
    }catch(e){
        await retry(fluxoLogin, driver, 500)
    }
}

async function fluxoCompletoComprar(driver){
    //passo 3 - comprar
    await clickTransfer(driver);
    await clickBuscarNoMercado(driver);
    
    // // passo 7    
    await setValoresComprar(driver);
    await PBuscar_FluxoBuscarJogador(driver);
    
}

async function PBuscar_FluxoBuscarJogador(driver){
    // console.log('PBuscar_FluxoBuscarJogador');

    try{
        
        await PBuscar_clickDinamicoCache(driver);
        await PBuscar_fluxoPreencherNome(driver);
        await clickPesquisarCompra(driver);
        // await sleep(500);
        // console.log('await sleep(500);')
        await PComprar_fluxoComprar(driver);
        
    }catch(e){
        await setValoresComprar(driver);
        await retry(PBuscar_FluxoBuscarJogador, driver, 500);
    }
    
}

async function getPrice (){
    await clickTransfer(driver);
    await clickBuscarNoMercado(driver);
}
/////////////////////////////////
/////////// FLUXOS //////////////


async function init (){
    let driver;
    driver = await new Builder().forBrowser('chrome', '78').build();
    await fluxoLogin(driver);
    try{
        await fluxoCompletoComprar(driver);
        // await getPrice(driver);
    }catch(e){
        await retry(fluxoCompletoComprar, driver, 500)
        // await retry(getPrice, driver, 500)
    }
}
init();
