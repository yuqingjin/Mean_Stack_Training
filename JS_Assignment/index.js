// 1. reverse a number
// Example x = 32243;
// Expected Output: 34223

let reverseNumber = function(num) {
    var num_str = String(num);
    var rev_num = ""

    for (i = num_str.length-1; i >=0; i--) {
        rev_num += num_str[i]
    }

    console.log(Number(rev_num));
}

// reverseNumber(32243);



// 2.check if a string is palindrome
// e.g., madam or nurses run.
let palindromeString = function(str) {
    var str_lst = str.split("");
    console.log("str_lst", str_lst)
    var left = 0;
    var right = str.length - 1;
    while (left <= right) {
        if (str_lst[left] === " ") {
            left ++;
            continue
        }

        if (str_lst[right] === " ") {
            right --;
            continue
        }

        if (str_lst[left] != str_lst[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

// console.log(palindromeString('nurse run'));




// 3.generates all combinations of a string
// e.g. dog -> d, do, dog, o, og, g

function generateCombinations(str) {
    const res = [];
    for (let l = 0; l<str.length; l ++){
        for (let r = l+1; r < str.length+1; r++){
            res.push(str.substring(l, r));
        }
    }
    return res;
}

// console.log(generateCombinations("dog"))




// 4.sort string
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
function sortString(str) {
    let str_lst = str.split("");
    str_lst.sort();
    console.log(str_lst)
}

// sortString('webmaster');


// 5.Capitalize the first letter in each word
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function capitalizeFirstLetters(sentence) {
    var word_lst = sentence.split(" ");
    for (index=0; index<word_lst.length; index++) {
        var word = word_lst[index];
        word_lst[index] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    console.log(word_lst.join(" "));
}

// capitalizeFirstLetters('the quick brown fox');


// 6.find longest word in a sentence
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
function longestWord(sentence) {
    var longest = '';

    var word_lst = sentence.split(" ");
    for (let index=0; index<word_lst.length; index++) {
        if (word_lst[index].length > longest.length) {
            longest = word_lst[index]
        }
    }

    return longest
}

// res = longestWord('web development tutorial');
// console.log(res)

// 7. count vowels
// Example string: 'The quick brown fox'
// Expected Output: 5
function vowelCounter(str) {
    let cnt = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let index = 0; index < str.length; index++) {
        if (vowels.has(str[index])) {
            cnt ++;
        }
    }
    return cnt
}

// res = vowelCounter('the quick brown fox');
// console.log(cnt);


// 8. checkPrimeNumber
// A prime number (or a prime) is a natural number greater than 1
// that has no positive divisors other than 1 and itself.
function checkPrimeNumber(num) {
    if (num <= 1) {return false};
    for (let i = 2, s = Math.sqrt(num); i<=s; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// res = checkPrimeNumber(12);
// console.log(res)



// ?
// 9. check variable type
// Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function typeCheck(variable) {
    var variable;
    if (typeof(variable) != undefined) {
        return typeof(variable)
    } else {
        return 'undefined'
    }
}

// console.log(typeCheck(a))


// 10. returns the n rows by n columns identity matrix.
function identityMatrix(num) {
    var matrix = [];
    for (let i=0; i<num; i++) {
        var level = Array(num).fill(0);
        level[i] = 1;
        matrix.push(level);
    }
    return matrix
}

// console.log(identityMatrix(2));


// 11. Write a JavaScript function which will take an array of numbers
// stored and find the second lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4

function secondLowAndGreat(arr) {
    arr.sort();
    console.log(arr);
    if (arr.length < 2) {
        return null
    }
    return [ arr[1], arr.at(-2) ];
}

// console.log(secondLowAndGreat([1,2,3,4,5]))


// 12. Write a JavaScript function which says whether a number is perfect.
// a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function checkPerfectNumber(num) {
    let total = 0;
    for (let i = 1; i < num; i++) {
        // console.log(i);
        if (num % i === 0) {
            total += i;
        }
    }
    return total === num
};

// console.log(checkPerfectNumber(6));


// 13. Write a JavaScript function to compute the factors of a positive integer.

function computeFactors(num) {
    let res = [];
    for (let i=1; i<=num; i++) {
        if (num%i===0) {
            res.push(i);
        }
    }
    return res
}
// console.log(computeFactors(12))



// 14. Write a JavaScript function to convert an amount to coins. Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1

function amountTocoins(amount, coins) {
    var dp = Array(amount+1).fill(Infinity);
    dp[0] = 0;
    coins.sort(function (a,b) {return a-b});
    for (let i = 1; i<=amount; i++) {
        for (const coin of coins) {
            if (i-coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }
    if (dp.at(-1) != Infinity) {
        var res = [], i = coins.length-1;
        while (amount && i>=0) {
            if (amount-coins[i]>=0) {
                res.push(coins[i]);
                amount -= coins[i]
            } else {
                i--;
            }
        }
        return res
    } else {
        return null
    }
}

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
// console.log(amountTocoins(11, [5, 2, 1]));



// 15. Write a JavaScript function to compute the value of bn where n is
// the exponent and b is the bases. Accept b and n from the user and display the result.
function exponential (b, n) {
    return b**n
}

// console.log(exponential(2,5))



// 16. Write a JavaScript function to extract unique characters from a string.
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueChars(str) {
    let char_set = new Set();
    let uniq_str = '';
    for (let i = 0; i < str.length; i++) {
        if (!char_set.has(str[i])) {
            uniq_str += str[i];
            char_set.add(str[i]);
        }
    }
    return uniq_str
}

// console.log(uniqueChars('thequickbrownfoxjumpsoverthelazydog'))

// ?
// 17. Write a JavaScript function to get the number of occurrences of
// each letter in specified string.
function getOccurrence(str) {
    let char_dic = {};
    for (var char of str) {
        if (char_dic[char] != undefined) {
            char_dic[char] += 1;
        } else {
            char_dic[char] = 1;
        }
    }
    return char_dic
}
// console.log(getOccurrence('qwer'))



// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller
// and smaller chunks until it finds the desired value.
function binarySearch (target, arr) {
    var l = 0, r = arr.length-1;
    if (target > arr.at(-1) || target < arr.at(0)) {
        return false
    }

    while (l <= r) {
        let mid = parseInt((l+r)/2);
        // console.log(mid);
        if (arr.at(mid) === target) {
            return true
        } else if (arr.at(mid) > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false
}

// console.log(binarySearch(5, [1,2,3,4,5,6]))



// 19. Write a JavaScript function that returns array elements larger than a number.
function quickSelect(num, arr) {
    var res = [];
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > num) {
            res.push(arr[i]);
        }
    }
    return res
}

// console.log(quickSelect(2, [0,2,7,5,9,5,6,7]))


// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomIDGenrator(n) {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var id = '';

    // generate random int between 0 to str.length(excluded)
    // math.random() generates a [0,1) float
    getRandomInt = function () {
        return Math.floor(Math.random() * str.length)
    }

    for (let i= 0; i < n; i++) {
        id += str[getRandomInt()];
    }
    return id
}

// console.log(randomIDGenrator(10))



// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Sample array: [1, 2, 3] and subset length is 2
// Expected output: [[2, 1], [3, 1], [3, 2]]
function subsetWithFixedLen(len, arr) {
    var sub = [];
    var res = [];

    let subsetTracking = function(i) {
        if (i === arr.length) {
            if (sub.length === len){
                res.push([...sub]);
            };
            return
        }

        // case1: include cur_element into subset
        sub.push(arr[i]);
        subsetTracking(i+1);

        // case2: exclude current element
        sub.pop();
        subsetTracking(i+1);

    }
    subsetTracking(0);
    return res
}
// console.log(subsetWithFixedLen(2, [1,2,3,5,6]))


// done
// 22. Write a JavaScript function that accepts two arguments, a string and a letter
// and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o'
// Expected output: 3

function letterOccurrence(str, letter) {
    let cnt = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === letter) {
            cnt += 1;
        }
    }
    return cnt
}
// console.log(letterOccurrence('microsoft.com', 'o'))


// done
// 23. Write a JavaScript function to find the first not repeated character. Sample arguments: 'abacddbec'
// Expected output: 'e'
function notRepeatingChar(str) {

    // Counter char in str
    let char_dic = {};
    let str_lst = str.split('');
    // console.log(str_lst);
    for (let char of str_lst) {
        if (char_dic[char] === undefined) {
            char_dic[char] = 1;
        } else {
            char_dic[char] += 1;
        }
    }

    // iterate str again to find the first value == 1
    for (const char of str) {
        if (char_dic[char] === 1) {
            return char
        }
    }
    return null
}

// console.log(notRepeatingChar('abacddbec'))



// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort,
// is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
    for (let i =0; i< arr.length; i++) {
        // last i element are already in sorted order
        for (let j = 0; j < (arr.length-i-1); j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr.reverse()
}

// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))


// done
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(arr) {
    var res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res
}

// console.log(longestCountryName(["Australia", "Germany", "United States of America"]))



// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.
function longestSubstringWithoutRepeating(str) {
    let res = '';
    let char_set = new Set();
    let l = 0, r = 0;

    for (let _ = 0; _ < str.length; _++) {
        while (char_set.has(str[r])) {
            char_set.delete(str[l]);
            l++;
        }

        char_set.add(str[r]);
        r++;
        if ((r-l+1) > res.length) {
            res = str.substring(l, r)
        }
    }
    return res
}
// console.log(longestSubstringWithoutRepeating('abcdeafbcbb'))



// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
function longestPalindrome(str) {
    let res = '';
    // find even length palindrome
    for (let i = 0; i< str.length-1; i++) {
        let l = i, r = i+1;
        while (l >= 0 && r < str.length && str[l] === str[r]) {
            l--;
            r++;
        }
        if ((r-l-1) > res.length) {
            res = str.substring(l+1, r);
        }
    };

    // find odd length palindrome
    for (let i = 1; i< str.length-1; i++) {
        let l = i-1, r = i+1;
        while (l >= 0 && r < str.length && str[l] === str[r]) {
            l--;
            r++;
        }
        if ((r-l-1) > res.length) {
            res = str.substring(l+1, r);
        }
    };

    return res

}
// console.log(longestPalindrome('anabelle'))



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function greet(name) {
    let str = "Hello " + name;
    return str
}

function welcomeToOurHotel(func, hotel, customer) {
    console.log(func(customer), ", welcome to " + hotel + "!");
}

// welcomeToOurHotel(greet, "Island Shangri-La Hotel", "Kim")


// 29. Write a JavaScript function to get the function name.
function thisIsFunctionName() {
    console.log( arguments.callee.name );
}

// thisIsFunctionName();
