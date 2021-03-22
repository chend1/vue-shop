// 防抖函数
export function debounce(func,time=200){
  let timer = null;
  return function() {
    let args = arguments; // arguments中存着e
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, time)
  }
}