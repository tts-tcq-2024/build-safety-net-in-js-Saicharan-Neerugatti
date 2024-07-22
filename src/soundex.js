function getSoundexCode(char) {
    const soundexDict = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6'
    };
    return soundexDict[char] || '0';
}

function generateSoundex(name) {
     if (!name) {
         return '';
     }
    let upperName = name.toUpperCase();
    let soundex = upperName[0]
    let prevCode = getSoundexCode(upperName[0]);

    for (let i = 1; i < upperName.length; i++) {
        let code = getSoundexCode(upperName[i]);
        if (code !== '0' && code !== prevCode) {
            soundex += code ;
        }
        prevCode = code;
    }
    return (soundex + '000').slice(0,4)
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

