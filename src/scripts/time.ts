function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
  
export function formatDate(date_str) {
    if(!date_str){
        return('N/a')
    }
    const date = new Date(date_str)
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
}