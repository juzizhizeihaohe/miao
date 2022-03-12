//输入n个数然后反向输出
function inputAndReberse(n) {
  let a = [];
  if (n == 0) {
    return 1;
  } a.push(Number(prompt()));
  return inputAndReberse(n - 1);
}
