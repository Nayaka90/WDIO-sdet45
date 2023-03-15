var str="aaa bbb ccc"
var words=str.split(' ')
var str1=""
for (let index = 0; index < words.length; index++) {
    var k=index
    for (let j = 0; j < words.length;j++) {
        try{
            str1+=words[k++].charAt(j);
            // console.log(words[k++].charAt(j))
        }
        catch(err){
            k=0
            str1+=words[k++].charAt(j);
            // console.log(words[k++].charAt(j))
        }      
    }
    str1+=" "
    // console.log(" ")
}
console.log(str1);
//abc bca cab  

var str="sum"
var sp=str.length-1
var pat=''
for (let index = 0; index <2*str.length-1; index++) {
    for (let j = 0; j < str.length; j++) {
        if(j<sp)
        pat+=' '
        else
        pat+=str[j]
    }
    pat+='\n'
    if(index<str.length-1)
    sp--
    else
    sp++   
}
console.log(pat)
//    m
//   um
//  sum
//   um
//    m
var str="sum"
var sp=str.length-1
var pat=''
for (let index = 0; index <2*str.length-1; index++) {
    var k=0
    for (let j = 0; j < str.length; j++) {  
        if(j<sp)
        pat+=' '
        else
        pat+=str[k++]
    }
    pat+='\n'
    if(index<str.length-1)
    sp--
    else
    sp++   
}
console.log(pat)
//    s
//   su
//  sum
//   su
//    s

var n=5
var st=1
var sp=n-Math.ceil(n/2)
for (let index = 0; index < 7; index++) {
    for (let index = 0; index < sp; index++) {

        pat+=' ';
    }
    for (let index = 0; index < st; index++) {
        
        pat+='*'
    }
    pat+='\n'
    if(index<Math.floor(n/2)){
        sp--
        st+=2
    } 
    else
    {
        sp++
        st-=2
    }
}
console.log(pat);
    //   *
    //  ***
    // *****
    //  ***
    //   *













