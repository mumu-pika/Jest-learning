// src/utils/getSearchObj.ts
/* 
  这个函数的作用是把网页地址中的query 查询参数字符串 转换为 对象
*/
// const getSearchObj = () => {
//   // ?a=1&b=2
//   const { search } = window.location;

//   // a=1&b=2
//   const searchStr = search.slice(1);

//   // ['a=1', 'b=2']
//   const pairs = searchStr.split("&");

//   // { 'a': '1' }
//   const searchObj: Record<string, string> = {};

//   pairs.forEach((pair) => {
//     // [a, 1]
//     const [key, value] = pair.split("=");
//     searchObj[key] = value;
//   });

//   return searchObj;
// };

// export default getSearchObj;

/* 
  上面的getSearchObj() 只是一个示例方法，
  如果你想把 查询字符串 转换为 对象，
  可以用下面更现代且更安全的方法(注意浏览器兼容性)：

*/

const getSearchObj = () => {
  return Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  )
}

export default getSearchObj
