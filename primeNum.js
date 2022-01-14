let user=17;
let isPrime=true;

for(i=2; i<=user; i++){
    if(user%2==0){
        isPrime=false;
    }
}
if(isPrime==true){
    console.log(user, "is prime number")
}else{
    console.log(user, "is not prime")
}