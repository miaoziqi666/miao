// 数组去重方法一

// var arr2='2 72 37 0 8 728 93 7 7 0 8 99 101 150 7'.split(' ')

// function arr(array) {
//     var kong=[];
//     for (var i = 0; i < array.length; i++) {
//         if (bijiao(kong,array[i])<0) {
//             kong.push(array[i])
//         };
//     };
//     return kong
// }

// function bijiao(arr,val) {
//     var index=-1
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]==val) {
//             index= i;
//         };
//     };
//     return index
// }


// var arr1=arr(arr2);
//     console.log(arr1);












// function arr3(xingcan){
//     var kong=[];
//     for (var i = 0; i < xingcan.length; i++) {

//         if (xinzhi(xingcan[i],kong)<0) {
//             kong.push(xingcan[i]);
//         };
//         // if (kong.indexOf(xingcan[i])<0) {
//         //     kong.push(xingcan[i]);
//         // };
//     };
//     return kong;
//     console.log[kong]
// }


// function xinzhi(val,arr4){
//     var index=-1 ;
//     for (var i = 0; i < arr4.length; i++) {
//         if(arr4[i]==val){
//             index=i;
//             break;
//         }
//     };
//     return index;

// }

// var arr=arr3(arr2);

// console.log(arr)



// 数组去重方法二

var arr='2 72 37 0 8 728 93 7 12 7 0 8 99 101 150 7 351'.split(' ')

function unique(array) {
    var i,
        len=array.length,
        obj = {},
        newArr= [];

        console.log(array)

    for (var i = 0; i < len; i++) {
        obj[array[i]] = 0;
    };

    console.log(obj);

    for(var index in obj) {
        newArr.push(index);
    }

    return newArr;
}

var iii=unique(arr);
console.log(iii)


//数组查重方法三
// var arr2='2 72 37 0 8 728 93 7 7 0 8 99 101 150 7'.split(' ');

// function uniq(arr){
//     var i,len=arr.length,tmpArr=[];

//     for(i=0; i<len;i++){
//         if (!inArray(tmpArr,arr[i])) {
//             tmpArr.push(arr[i]);
//         };
//     }
//     return tmpArr;
// }

// function inArray(array,item){
//     var i,len=array.length;
//     for(i=0;i<len;i++){
//         if(item == array[i]){
//             return true;
//         }

//     }
//     return false; 
// }

// var r=uniq(arr2);
// console.log(r);



// var arr2='2 72 37 0 8 728 93 7 7 0 8 99 101 150 7'.split(' ');

// function uniq(arr){
//     var i,len=arr.length,tmpArr=[];

//     for(i=0; i<len;i++){
//         if (!inArray(tmpArr,arr[i])) {
//             tmpArr.push(arr[i]);
//         };
//     }
//     return tmpArr;
// }

// function inArray(array,item){
//     var i,len=array.length;
//     for(i=0;i<len;i++){
//         if(item == array[i]){
//             return true;
//         }

//     }
//     return false; 
// }

// var r=uniq(arr2);
// console.log(r);




// ？？？？？？？

var arr2='2 72 37 0 8 728 93 7 7 0 8 99 101 150 7'.split(' ');

function arrayi(array1) {
    for (var i = 0; i < array1.length; i++) {
        console.log(array1[i])
        for (var j = i+1; j < array1.length; j++) {
            if (array1[i]===array1[j]) {
                array1.splice(j,1);
            };
        };
    };    
    return array1
}
var r=arrayi(arr2);
console.log(r)