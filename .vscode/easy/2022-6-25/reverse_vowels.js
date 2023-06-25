/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var word = s.split('');
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (vowels.includes(word[i])) {
            while (!vowels.includes(word[j])) {
                j--;
            }
            console.log(i, j);
            var temp = word[i];
            word[i] = word[j];
            word[j] = temp;
            j--;
        }
        i++;
    }
    return word.join('');
};

// console.log(reverseVowels('leetcode'));
// console.log(reverseVowels('hello'));