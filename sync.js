function registerSync() {
    waitfordelay(1000);
    console.log("registerr here");
}
function login() {
    waitfordelay(2000);
    console.log("login here");
}
function getdata() {
    waitfordelay(3000);
    console.log("fetch data from DB");
}
function displaydata() {
    waitfordelay(4000);
    console.log("display data");
}
function waitfordelay(delay){
    const mt= Date.now()+delay;
    while(Date.now()<mt){

    }
}
registerSync();
login();
getdata();
displaydata();



