// var initTab = function() {
//     var tabHeader = $('tabHeader'),
//         tabBody = $('tabBody'),
//         lis = tabHeader.getElementsByTagName('li'),
//         divs=tabBody.children,
//         i,
//         j,
//         len = lis.length;  

//     for (i = 0; i < len; i++) {
//         lis[i].setAttribute('index',i);

//         lis[i].onclick = function(){
//             for(j=0;j<len;j++){
//                 var index=this.getAttribute('index');
//                 // lis[j].className='';
//                 // lis[j].removeAttribute('class');//二选一
//                 divs[j].style.display='none';
//                 lis[j].className='';
//             }
//             this.className = 'active';
//             divs[index].style.display='block';
//         }
//     };
// }
// initTab();

//
//var initTab = function() {
//
//  var tabHeader = $('tabHeader'),
//      tabBody = $('tabBody'),
//      lis = tabHeader.getElementsByTagName('li'),
//      divs = tabBody.children,
//      i,
//      j,
//      len = lis.length;
//
//      for (i = 0; i < len; i++) {
//          lis[i].setAttribute('index',i);
//          lis[i].onclick = function() {
//              for (j = 0; j < len; j++) {
//                  var index = this.getAttribute('index');
//                  lis[j].className = '';
//                  divs[j].style.display = 'none';
//              };
//              this.className = 'active';
//              divs[index].style.display = 'block';
//          }
//      };
//
//}
//initTab();
//
//




var initTab = function() {
	
	var tabHeader = document.getElementById('tabHeader');
	var tabBody = document.getElementById('tabBody');
	
	var headerLi = tabHeader.getElementsByTagName('li');
	var bodyLi = tabBody.getElementsByTagName('div');


	for(var i=0; i<headerLi.length;i++) {
		headerLi[i].setAttribute('index',i);
		headerLi[i].onclick = function() {
			for(var j=0;j<headerLi.length;j++){
				
				var index = this.getAttribute('index');
				
				headerLi[j].className = '';
				
				bodyLi[j].style.display = 'none';
				
			}
			
			this.className = 'active';
			
			bodyLi[index].style.display = 'block';
			
		}
	}
}
initTab();




