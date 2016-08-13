var wp = document.getElementById('wp');
var tableHTML = [
    '<table border="1">',
];

for(var i=1;i<=9;i++){
    tableHTML.push('<tr>');
    for(var j=1; j<=i; j++){
        tableHTML.push('<td>'+i+'*'+j+'='+i*j+'</td>');
    }
    tableHTML.push('</tr>');
} 

tableHTML. push('</table>');

wp.innerHTML = tableHTML.join('');
console.log(tableHTML.join());
