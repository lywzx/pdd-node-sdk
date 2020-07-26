/**
 * 处理日期格式化
 * @param d Date
 * @param mask string
 */
export function formatDate(d: Date, mask: string): string {
  const zeroize = function(value: string | number, length = 2) {
    value = String(value);
    let i = 0;
    let zeros = '';
    for (; i < length - value.length; i++) {
      zeros += '0';
    }
    return zeros + value;
  };
  return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, ($0: any) => {
    switch ($0) {
      case 'd':
        return d.getDate();
      case 'dd':
        return zeroize(d.getDate());
      case 'ddd':
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
      case 'dddd':
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
      case 'M':
        return d.getMonth() + 1;
      case 'MM':
        return zeroize(d.getMonth() + 1);
      case 'MMM':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
      case 'MMMM':
        return [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ][d.getMonth()];
      case 'yy':
        return String(d.getFullYear()).substr(2);
      case 'yyyy':
        return d.getFullYear();
      case 'h':
        return d.getHours() % 12 || 12;
      case 'hh':
        return zeroize(d.getHours() % 12 || 12);
      case 'H':
        return d.getHours();
      case 'HH':
        return zeroize(d.getHours());
      case 'm':
        return d.getMinutes();
      case 'mm':
        return zeroize(d.getMinutes());
      case 's':
        return d.getSeconds();
      case 'ss':
        return zeroize(d.getSeconds());
      case 'l':
        return zeroize(d.getMilliseconds(), 3);
      case 'L':
        let m = d.getMilliseconds();
        if (m > 99) m = Math.round(m / 10);
        return zeroize(m);
      case 'tt':
        return d.getHours() < 12 ? 'am' : 'pm';
      case 'TT':
        return d.getHours() < 12 ? 'AM' : 'PM';
      case 'Z':
        return d.toUTCString().match(/[A-Z]+$/);
      // Return quoted strings with the surrounding quotes removed

      default:
        return $0.substr(1, $0.length - 2);
    }
  });
}

/**
 * 获取时间戳，以秒为单位
 * @param dt
 */
export function timestamp(dt = new Date()) {
  return parseInt((dt.getTime() / 1000).toString(), 10);
}
