/*What is a hashmap?
 we use hashing to create indexes and then map it so we can uickly locate the values using keys
time complecity: it has constant lookup time
imagine theres 1000 numbers but the size range is 0-30. How can I indexes the numbers.
example:
1000 % 30 = 10 and every time you imput the number 1000, you'll get the hashmap index for 10
 */

/*Map functions in Javascript:
Map.clear() - removes all elements from the map
Map.delete() - removes sppecific element from the map by key
Map.set() - adds or updates an entry in the map with a specfic key and value     CONSTANT TIME
Map.get() - returns a specific element from the map. if key doesn't exist, it returns undefined     CONSTANT TIME
Map.forEach() - is a function the runs once per each key-value pair in the insertion order
Map.has() - return boolean to say if the element exsists in the map or not
Map.entries() - returns a new map object that contains the key-value pairs for each element in insertion order
Map.keys() - returns a new map object that contains the keys for each element of the map in insertion order
Map.values() - returns a new map object that contains the values for each element of the map in insertion order
Map.size() - returns the number of elements in the map    CONSTANT TIME

*/

/*Question Example: con
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
// Linear Time Solution O(n)
var containsDuplicate = function (nums) {
    let newMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (newMap.has(nums[i])) {
            return true;
        } else {
            newMap.set(nums[i]);
        }
    }
    return false;
};

let nums1 = [1,2,3,1];
let nums2 = [1,2,3,4];
let nums3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));


/*Question 2: Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/
// Linear Time Solution O(n)
var twoSum = function (nums, target) {
    let newMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (newMap.has(difference)) {
            return [i, newMap.get(difference)]
        } else {
            newMap.set(nums[i], i)
        }
    }
};

let nums4 = [2,7,11,15];
let target4 = 9;
let nums5 = [3,2,4];
let target5 = 6;
let nums6 = [3,3];
let target6 = 6;
console.log(twoSum(nums4, target4));
console.log(twoSum(nums5, target5));
console.log(twoSum(nums6, target6));