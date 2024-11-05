const sentance = 'india myloveforlife is my counrty and it is very beautiful';
function findLongest(line){
  
  let arrySentance= line.split(' ');
  
  let maxValue= '';
  
  for(let i=0;i<arrySentance.length;i++){
    
    if(arrySentance[i].length>maxValue.length){
      maxValue = arrySentance[i]
    }
    
  }
  return maxValue
};

console.log(findLongest(sentance))
