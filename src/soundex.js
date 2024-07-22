function generateSoundex(name) {
    if (!name) return '';
    const soundexMap = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6'
    };
    name = name.toUpperCase();
    let soundex = name[0]; 
    let prevCode = soundexDict[name[0]] || '0';

    for (let i = 1; i < name.length && soundex.length < 4; i++) {
        let code = soundexDict[name[0]];
        if (code !== '0' && code !== prevCode) {
            soundex += code;
        }
        prevCode = code;
    }
    return soundex.padEnd(4, '0');
}

module.exports = {
    generateSoundex
};

