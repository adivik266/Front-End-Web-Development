function missing(n){
    n.sort(function(a,b){return a-b})

    for(var i=0;i<n.length;i++)
    {
        if(i+1!=n[i])
        return i+1;
    }
}

var numbers = [3,8,7,9,6,1,12,5,14,2,19,4,16,18,10,15,13,17,20];
console.log(missing(numbers));