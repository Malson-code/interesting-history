// 公共数据处理方法
export default {

  //生成Uuid  len生成的UUID长度
  generateUuid(len = 21) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let uuid = [], i, radix = chars.length;
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    return 'U' + uuid.join('');
  },

  //深度拷贝对象
  deepCopyValue(source) {
    let sourceCopy = source instanceof Array ? [] : {};
    for (var item in source) {
      if (source[item] !== null) {
        sourceCopy[item] = typeof source[item] === 'object' ? this.deepCopyValue(source[item]) :  source[item];
      } else {
        sourceCopy[item] = source[item] = null;
      }
    }
    return sourceCopy;
  },
}