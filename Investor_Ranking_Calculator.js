// First commit 

const readline = require('readline-sync');

function totalAssets() {
    let assetIdentified = parseInt(readline.question('How many assets does this investor have?'));
    let totalValueOfAssets = 0;
    let assetsArray = [];

    for(let assetCounted = 1; assetCounted<= assetIdentified; assetCounted++) {
        let individualAssetValue = parseFloat(readline.question('What is the value of asset ' + assetCounted + '?'));
        assetsArray.push(individualAssetValue)
        let sum = 0;
        for(let i= 0; i< assetsArray.length; i++) {
            totalValueOfAssets = sum += assetsArray[i];
        }
    }
    console.log(totalValueOfAssets)
    return totalValueOfAssets;
}

function totalDebt() {
    
}