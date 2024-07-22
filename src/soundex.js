function getSoundexCode(char) {
    char = char.toUpperCase();
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
    if (!name) return '';
    let nameVal = name.toUpperCase();
    let soundex = [nameVal[0]];
    let prevCode = getSoundexCode(nameVal[0]);

    name.forEach( (index, val) => {
     if(soundex.length < 4) {
             if (getSoundexCode(val) !== '0' && getSoundexCode(val) !== prevCode) {
                        soundex.push(code);
                }
                prevCode = code;
        }
        })
    return soundex.padEnd(4, '0');
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

