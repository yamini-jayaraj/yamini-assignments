let browsername = "edge"

if(browsername='chrome'){
    console.log("the browser name is :chrome "+" "+browsername)

}else {
    console.log("the browser name is edge"+ " "+browsername)
}
let testtype ='smoketesting'

switch (testtype){
    case 'regression':
        console.log ("the testtype has to be regression testing")
        break
        case 'smoketesting':
        console.log("the test type has to be smoke testing")
        break
        case 'sanity':
        console.log("the test type has to be sanity")
        break
        default:
        console.log("none of the above is the testtype")


}