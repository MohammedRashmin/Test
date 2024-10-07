function click1(){
    let num1=Number(document.getElementById("Number1").value);
    let num2=Number(document.getElementById("Number2").value);
    let ans;

    if(num1<num2){
        ans=num2;
       
    }
    else if(num1>num2){
        ans=num1;

    }
    else{
        ans="Numbers are Equal";
    }
    document.getElementById("outtext").innerHTML= ans;
}