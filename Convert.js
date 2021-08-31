function GetFirstNumberInArray(FirstNumber){


}

function ForLoopslipptToArabicNumbers(list){
    for(i = 0; i < list.length; i++){
        ArabicNumbers.push(parseInt(list[i]))   
    }

}

function ConvertArabicToRoman(list){

    list.forEach(element => {
        console.log('Element is ' + element)
        
        temp = element + 1
       RomanNumbers.push(temp)
    });


}

function ResultToText(list){
    const fs = require('fs')
    const writeStream = fs.createWriteStream('romanresult.txt')
    const pathName = writeStream.path

    list.forEach(value => writeStream.write(`${value}`))
    writeStream.on('finish', () => {
        console.log(`wrote all the array data to file ${pathName}`)
    })

    writeStream.on('error', (err) => {
        console.error(`There is an error writing the file', ${pathName} => ${err}`)
    })

    writeStream.end()
}
    