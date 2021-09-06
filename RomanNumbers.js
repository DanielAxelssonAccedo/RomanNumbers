
module.exports = {

ConvertArabicToRoman:function(n)
{
    if(Number.isInteger(n) != true)
    {
        console.log('This is not an integer')
        return false
    
    }

    if(n === 0)
    {
        console.log('Roman Numbers dont have 0!')
        return false
    }

    switch(n) {
        case 1: return "I"
        case 2: return "II"
        case 3: return "III"
        case 4: return "IV"
        case 5: return "V"
        case 6: return "VI"
        case 7: return "VII"
        case 8: return "VIII"
        case 9: return "IX"
    }

return true

}

}



