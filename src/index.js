module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) ) {
    return [];
}
  let array = [];
  matrix.forEach((element,count) => {
    if(count%2){
        let temp = element;
     array=array.concat(temp.reverse())
    } else{
 array=array.concat(element)
    }
});
return array;
}
