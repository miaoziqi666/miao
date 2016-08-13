var arr = [
    {
        name:'test1',
        age:31,
        mobile:15099998888,
        email:'test1@126',
        gender:'男'
        },

    {
        name:'test2',
        age:32,
        mobile:15099998888,
        email:'test2@126',
        gender:'男'
        },

    {
        name:'test3',
        age:33,
        mobile:15099998888,
        email:'test3@126',
        gender:'男'
        },

    {
        name:'test4',
        age:34,
        mobile:15099998888,
        email:'test4@126',
        gender:'男'
        },

    {
        name:'test5',
        age:35,
        mobile:15099998888,
        email:'test5@126',
        gender:'男'
        },
    {
        name:'test6',
        age:35,
        mobile:15099998888,
        email:'test5@126',
        gender:'男'
        }

];


var tablee = function() {

    var i,len=arr.length,table =$$('table')[0],kong=[];

    for (i = 0; i < len; i++) {
        
        kong.push(
            '<tr>',
                '<td>',arr[i].name,'</td>',
                '<td>',arr[i].age,'</td>',
                '<td>',arr[i].mobile,'</td>',
               '<td>',arr[i].email,'</td>',
                '<td>',arr[i].gender,'</td>',
            '</tr>'
        )
    };
    table.innerHTML+=kong.join("");
}
tablee();









// var tablee = function(){
// 	var i ,kong = [],table =$$('table')[0], len=arr.length;
// 	for(var i = 0; i<len;i++){
// 		kong.push(
// 		'<tr>',
//             '<td>',arr[i].name,'</td>',
//             '<td>',arr[i].age,'</td>',
//             '<td>',arr[i].mobile,'</td>',
//            '<td>',arr[i].email,'</td>',
//             '<td>',arr[i].gender,'</td>',
//         '</tr>'
// 		)
// 	}
// 	table.innerHTML+=kong.join("")
// }
// tablee()

//13298756663
//var tablee= function() {
//  var i ,kong=[] ,table=$$('table')[0], len=arr.length;
//  for (var i = 0; i < len; i++) {
//      kong.push(
//      '<tr>',
//          '<td>',arr[i].name,'</td>',
//          '<td>',arr[i].age,'</td>',
//          '<td>',arr[i].mobile,'</td>',
//         '<td>',arr[i].email,'</td>',
//          '<td>',arr[i].gender,'</td>',
//      '</tr>'
//          )
//  };
//  table.innerHTML+=kong.join('');
//}
//
//tablee()

// var renderTable=function(){
//     var i,len=arr.length,trs=[],table=$$('table')[0];
//     for (var i = 0; i < len; i++) {
//         trs.push(
//         '<tr>',
//             '<td>',arr[i].name,'</td>',
//             '<td>',arr[i].age,'</td>',
//             '<td>',arr[i].mobile,'</td>',
//            '<td>',arr[i].email,'</td>',
//             '<td>',arr[i].gender,'</td>',
//         '</tr>'
//         );
//         console.log(arr[i]);
//     };
//     table.innerHTML+=trs.join('');
// }

// renderTable();