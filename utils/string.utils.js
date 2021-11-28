class StringUtils {
    getVowelsCount(string) {
        let vowels = 'aeiou';
        let vowelsCount = 0;

        for (let char of string.toLowerCase()) {
            if (vowels.includes(char))
            vowelsCount++;
        }
        console.log(vowelsCount);
        return vowelsCount;
    }

    findVowels(string) {
        let vowels = 'aeiou';
        let vowelsFound = {};

        for (let char of string.toLowerCase()) {
            if (vowels.includes(char))
            vowelsFound[char] = vowelsFound[char] ? vowelsFound[char] + 1 : 1
        }
        console.log(vowelsFound);
        return vowelsFound;
    }
}

module.exports = StringUtils;