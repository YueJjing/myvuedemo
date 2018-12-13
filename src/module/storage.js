//封装本地存储localStorage
let storage = {
  //存储到本地缓存,把对象通过JSON.stringify转换为JSON字符串
  setStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  },
  //获取本地存储数据,把JSON字符串通过JSON.parse转换为对象
  getStorage(key){
    return JSON.parse(localStorage.getItem(key))
  },
  //删除本地缓存
  removeStorage(key){
    localStorage.removeItem(key)
  }
}
export default storage;
