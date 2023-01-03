// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
var isSubsequence = function (s, t) {
    var res = "";
    var index_find = -1;
    for (j = 0; j < s.length; j++) {

        for (i = 0; i < t.length; i++) {


            if (t[i] == s[j] && index_find != i && index_find < i) {
                // if (res.includes(t[i])) {
                //     res = t[i];
                //     index_find = i
                //     console.log("new res :" + res);
                // }
                // else {
                res += s[j];
                console.log(res);
                index_find = i;
                //     }


            }
        }
        console.log(res);
    }
    if (res == s)
        return true;

    return false;
};


