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
    soundex = name[0].toUpperCase();
    soundex = getSoundexName(name,soundex, getSoundexCode(name[0]))
    return soundex.padEnd(4, '0');
}

function getSoundexName(name, soundex, prevCode) {
      for (let i = 1; i < name.length && soundex.length < 4; i++) {
        let code = getSoundexCode(name[i]);
        if (code !== '0' && code !== prevCode) {
            soundex.push(code);
        }
        prevCode = code;
    }
    return soundex;
}

module.exports = {
    generateSoundex
};

