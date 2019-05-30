function add(n){
 const sum= function(m){
   return add(m+n);
 }
 sum.valueOf=function(){
   return n;
 }
 return sum;
}

console.log(add(1)(2)(3));