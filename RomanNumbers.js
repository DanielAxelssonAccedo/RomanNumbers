
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

    if(n < 10)
    {
        return this.ConvertSingleToRoman(n)
    }
    else if(n < 100)
    {
        const stringN = n.toString()
        const decands = stringN.charAt(0)
        var single = n % 10
        var result = ""
        

        switch(decands) {
            case '1': result = "X"; break;
            case '2': result = "XX"; break;
            case '3': result = "XXX"; break;
            case '4': result = "XL"; break;
            case '5': result = "L"; break;
            case '6': result = "LX"; break;
            case '7': result = "LXX"; break;
            case '8': result = "LXXX"; break;
            case '9': result = "XC"; break;

        }

        if (single != 0)
        {
            result = result.concat(this.ConvertSingleToRoman(single))

        }
        
        
        
        return result
        
    }
    

return true

},

ConvertSingleToRoman:function(n) {
    if(Number.isInteger(n) != true)
    {
        throw new TypeError("n is not an integer")
    }

    if(n <= 0 || n >= 10)
    {
        throw new TypeError("n must be a postive non-zero integer and less then 9")
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
    
}

}



