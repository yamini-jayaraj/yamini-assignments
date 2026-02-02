let browser = 'chrome'
function checkbrowserversion(callback){
    setTimeout(()=>{
        callback(browser)
    },2000)
}

function showbrowsername(browsername){
    console.log("browser version :" +browsername)

}
checkbrowserversion(showbrowsername);