// 排序从小到大排
var arr = '2,3,4,5,1,2,3,4,745'.split(',');



function order(array){
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if(Number(arr[i])<Number(arr[j])){
                var arrayi = arr[i];
                    arr[i]=arr[j];
                    arr[j]=arrayi;
            }
        };
        console.log(arrayi)
    };

    return array;
}
var  arr1=order(arr); 
console.log(arr1);


// var  arr2 = arr.sort(function(a,b){
//     return b-a
// });
// console.log(arr2)



var arr = '2,3,4,5,1,2,3,4,745'.split(',');

// var paixu = function(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var j = i+1; j < array.length; j++) {
//             if(arr[i]>arr[j]){
//                 var arr2 = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = arr2;
//             }
//         };
//     };
//     return array
// }

// var arr1=paixu(arr);
// console.log(arr1)


var arr22 = arr.sort(function(a,b){
    return a-b;
})
console.log(arr);
// // 排序从大到小和从小到大
// var arr = '2,3,4,5,1,2,3,4,745,'.split(',');




// console.log(arr.indexOf(1));


// function order(tmpArr){
//     return tmpArr.sort(sortBy)
// };
// // 把函数 sortBy写到  return里面就好了


// function sortBy(a,b) {

//     // 重点 a-b 正排序
//     // return a-b;
//     // 重点b-a 倒排序
//     return b-a;

//      // if(a<b){ 
//      //    return 1;
//      //    // return -1;
//      // }else if(a>b){
//      //    return -1;
//      //    // return 1;
//      // }else{
//      //    return 0;
//      //    // return 0;
//      // }
// }
// var newArr = order(arr);

// console.log(newArr);