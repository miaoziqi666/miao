// function initCheckBox(){
//     var all=document.getElementById('all'),
//         chks=document.getElementsByName('chk'),
//         len=chks.length,
//         i,
//         j,
//         k;
//         all.onclick=function(){
//         var status='';
//             this.checked&&(status='checked');//if（this。chencked）{status=’checked‘}else（status=’‘）；
//             for (i = 0; i < len; i++) {
//                 chks[i].checked=status;
//             }
//         }


//         for (j = 0; j < len; j++) {
//             chks[j].onclick=function(){
//                 if(isCheckedAll()){
//                     all.checked='checked';
//                 }else{
//                     all.checked= '';
//                 }
//             }
//         };


//         function isCheckedAll(){
//             for (k = 0; k < len; k++) {
//                 if (!chks[k].checked) {
//                     return false;
//                 };
//             };
//             return true;
//         }
        
// }
// initCheckBox()





// function initCheckBox() {
//     var all=document.getElementById('all'),
//         chks = document.getElementsByName('chk'),
//         len = chks.length,
//         j,
//         k;

//     all.onclick=function(){
//         var i,status = '';
//         this.checked&&(status='checked');
//         for (var i = 0; i < len; i++) {
//             chks[i].checked=status;
//         };
//     }

//     for(j=0;j<len;j++){
//         chks[j].onclick=function(){
//             if(this.checked){
//                 this.parentNode.parentNode.style.backgroundColor='yellow';
//             }else{
//                 this.parentNode.parentNode.style.backgroundColor='#fff';
//             }
//             if(isCheckedAll()) {
//                 all.checked ='checked';
//             }else{
//                 all.checked = '';
//             }
//         }
//     }

//     function isCheckedAll() {
//         for (var k = 0; k < len; k++) {
//             if(!chks[k].checked) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// initCheckBox();




// function initCheckBox(){
//     var all = document.getElementById('all');
//     var chk = document.getElementsByName('chk');
//     var len = chk.length;

//     all.onclick=function() {
//         var start='',bgColor='';
//         // all.checked&&(start='checked');
//         if(this.checked){
//             start='checked';
//             bgColor='yellow';
//         }else{
//             start='';
//             bgColor='#fff';
//         }
//         for (var i = 0; i < len; i++) {
//             chk[i].checked=start;
//             chk[i].parentNode.parentNode.style.backgroundColor=bgColor;
//         };
//     }

//     for (var j = 0; j < len; j++) {
//         chk[j].onclick=function() {
//             if(this.checked){
//                 this.parentNode.parentNode.style.backgroundColor='yellow';
//             }else{
//                 this.parentNode.parentNode.style.backgroundColor='#fff';
//             }
//             if (isCheckedAll()) {
//                 all.checked='checked';
//             }else{
//                 all.checked='';
//             }
//         }
//     };

//     function isCheckedAll() {
//         for(var k =0; k < len; k++){
//             if (!chk[k].checked) {
//                 return false;
//             }
//         };
//         return true;
//     };

// };
// initCheckBox()



function initCheckBox() {
    var all=document.getElementById('all');
    var chk=document.getElementsByName('chk');
    var len = chk.length;

    all.onclick=function(){
        var start='',bgColor='';
        if (this.checked) {
            start='checked';
            bgColor='yellow';
        }else{
            start='';
            bgColor='#fff';
        }
        for (var i = 0; i < len; i++) {
            chk[i].checked=start;
            chk[i].parentNode.parentNode.style.backgroundColor=bgColor;
        };
    };

    for (var j = 0; j < len; j++) {
        chk[j].onclick=function() {
            if (this.checked) {
                this.parentNode.parentNode.style.backgroundColor='yellow';
            }else{
                this.parentNode.parentNode.style.backgroundColor='#fff';
            }
            if (isCheckedAll()) {
                all.checked='checked';
            }else{
                all.checked='';    
            }
        }
    };

    function isCheckedAll(){
        for (var k = 0; k < len; k++) {
            if(!chk[k].checked){
                return false;
            }
        };
        return true;
    }

};

initCheckBox()



