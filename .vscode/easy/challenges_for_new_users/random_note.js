var canConstruct = function (ransomNote, magazine) {
    var m = {};

    for (var c in magazine) {
        m[magazine[c]] = !m[magazine[c]] ? 1 : m[magazine[c]] + 1;
    }
    console.log(ransomNote);
    console.log(m);
    for (var c in ransomNote) {
        if (!m[ransomNote[c]] || m[ransomNote[c]] < 1) {
            return false;
        }
        else {
            m[ransomNote[c]] = m[ransomNote[c]] - 1;
        }
        console.log(m);

    }
    return true;
};

console.log(canConstruct('aa', 'ab'));