document.addEventListener('DOMContentLoaded',()=>{
    doApi().then((data)=>{
        createAllCoins(data);
    });
    //without api:
    // const newCrypto1 = new CryptoES6(id_parent,'btc','bitcoin',3000);
    // newCrypto1.addToHtml();
    // const newCrypto2 = new CryptoES6(id_parent,'Ripple','ripple',10);
    // newCrypto2.addToHtml();
})

//with fetch-then:

// function doApi(){
//     const url = 'http://fs1.co.il/bus/bitcoin.php';
//     fetch(url)
//         .then(response=> response.json())
//         .then(data=>{
//             // console.log(data);
//             createAllCoins(data);
//         });
// }

// function createAllCoins(_coins_ar){
//     let result=[];
//     for (let i in _coins_ar){
//         result.push(_coins_ar[i]);
//     }
//     for (let i=0; i<result.length;i++){
//         let item = result[i];
//         const newCrypto1 = new CryptoES6(id_parent,item.name,item.id,item.price_usd);
//         newCrypto1.addToHtml();   
//     };
// }


//with async-await:
const doApi = async()=>{
    const url = 'http://fs1.co.il/bus/bitcoin.php';
    const response = await fetch(url);
    const data = response.json();
    return data;
    

}

function createAllCoins(_coins_ar){
    let result=[];
    for (let i in _coins_ar){
        result.push(_coins_ar[i]);
    }
    for (let i=0; i<result.length;i++){
        let item = result[i];
        const newCrypto1 = new CryptoES6(id_parent,item.name,item.id,item.price_usd);
        newCrypto1.addToHtml();   
    };
}