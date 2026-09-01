function registerSync() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("registerr here");
            resolve();
        }, 1000);
    });
}
function login() {
    return new Promise((resolve, reject)=>{ 
    setTimeout(()=>{
        console.log("login here");
        resolve();
    }, 2000);
});
}
function getdata() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("fetch data from DB");
            resolve();
        }, 3000);
    });
}
function displaydata() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("display data");
            resolve();
        }, 4000);
    });
}
// registerSync().then(login).then(getdata).then(displaydata).catch((err)=>{
//     console.log(err);
// })
async  function test(){
    try{
        await registerSync();
        await login();
        await getdata();
        await displaydata();
    }
    catch(err){
        console.log("Error occurred:", err);
    }
}
test();
console.log("this is async code");
