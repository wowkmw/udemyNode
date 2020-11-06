const nums = [3, 2, 4];
const target = 6;

const myfun = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (i) {
            console.log('i=' + i);
            for (let j = i + 1; j < nums.length; j++) {
                console.log('j=' + j);
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};

console.log(myfun(nums, target));