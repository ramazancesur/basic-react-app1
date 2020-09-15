export const findMaxID=(counterList)=>{
    return counterList.length!==0? Math.max(...counterList.map(counter=> counter.id))+1 : 0;
}