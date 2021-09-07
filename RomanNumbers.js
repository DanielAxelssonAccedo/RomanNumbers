
module.exports = {

ConvertArabicToRoman:function(n)
{
    if(Number.isInteger(n) != true)
    {
        throw new TypeError("n is not an integer")
    }

    if(n <= 0)
    {
        throw new TypeError("n must be a postive non-zero integer")
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



