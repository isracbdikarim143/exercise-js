function fetchUserData(){
    return new Promise((resolve, reject) => {
        let success=true;
        setTimeout(() =>{
            if(success){
                resolve({id:"22165", name:"isra cabdikariim"})

            } else{
                reject("filled weeye")
            }
        },2000);
    })
}
async function displayUserData(){
    try{
        let data=await fetchUserData();
        console.log( data)
    } catch(error){
        console.log(error)
    }
}
displayUserData();