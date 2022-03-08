function type(param: any) {
  return Object.prototype.toString.call(param).slice(8, -1).toLocaleLowerCase();
}

// 将二维数组转换为一维数组
function flat(arr: any[]) {
  return arr.reduce((acc, cur) => {
    if (type(cur) === "array") {
      acc = acc.concat(cur);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

// 字符串转数字
function stringToNum(param: string) {
  return (
    param
      .split("")
      // .map((ele: any) => ele - 0)
      .map((ele: any) => Number(ele))
      .reduce((acc, cur: any) => acc * 10 + cur)
  );
}

// 数组求和
function arrToSum(arr: number[]) {
  return arr.reduce((acc, cur) => acc + cur);
}

// 计算数组中每个元素出现的次数
function arrToCount(arr: any[]) {
  return arr.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}


