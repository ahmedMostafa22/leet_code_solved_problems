/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    var result = [];
    var map = new Map();
    for (let i = 0; i < cpdomains.length; i++) {
        var allSections = cpdomains[i].split(' ');
        var dotSeperatedCPD = allSections[1].split('.');
        for (let j = 0; j < dotSeperatedCPD.length; j++) {
            var visits = parseInt(allSections[0]);
            var domain = dotSeperatedCPD.slice(j).join('.');
            map.set(domain, map.has(domain) ? visits + map.get(domain) : visits);
        }
    }
    console.log(map);
    map.forEach((v, k) => result.push(v + ' ' + k));
    return result;
};
// console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));