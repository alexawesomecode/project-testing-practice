const analyze = (nums) => {
  const average = nums.reduce((acc, curr) => acc + curr) / nums.length;
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const len = nums.length;
  const result = {
    average, length: len, max, min,
  };
  return result;
};

export default analyze;
