const ArabicNumbers = []
const RomanNumbers = []
const splitInput = CreateSplittinput()


console.log('Outside the function ' + splitInput)
ForLoopslipptArray(CreateSplittinput())
ConvertArabicToRoman(ArabicNumbers)
ResultToText(RomanNumbers)


function CreateSplittinput()
{
const fs = require('fs')
const input = fs.readFileSync('test', 'utf8');
const splitInput = input.split('\n')
console.log('in the function ' + splitInput)
return splitInput
}

function ForLoopslipptArray(list){
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

function GetFirstNumberInArray(FirstNumber){


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
    


