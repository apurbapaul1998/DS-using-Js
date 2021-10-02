//two sum//
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]




 var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return[i,j]
            }
        }
    }
    
};

//maximum subarray//   Kadane's Algorithm
var maxSubArray = function(nums) {
    let sum=0;
    let maxi= nums[0];
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        if(sum>maxi){
            maxi=sum;
        }
        if(sum<0){
            sum=0
        }
            
        }
    return maxi;
    }



 //Move Zeroes//
    var moveZeroes = function(nums) {
        let i=0;
        for(let j=0;j<nums.length;j++){
            if(nums[j]!=0){
                nums[i]=nums[j];
                i++
            }
        }
        for(let j=i;j<nums.length;j++)
            nums[j]=0;
    };




//     Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function(nums, val) {
    let i=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j]!=val){
            nums[i]=nums[j];
            i++;
        }
    }
    return i;
    
};
