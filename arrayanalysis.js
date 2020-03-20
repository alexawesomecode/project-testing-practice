const analyze = (nums) => {

    const average = nums.reduce((acc, curr) => acc + curr) / nums.length;
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    const len = nums.length;
    const result = { "average": average, "length": len, "max": max, "min": min }
    return result;


};

export default analyze;