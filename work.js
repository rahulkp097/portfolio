let  nums = [1,2,3,1], k = 3
let num = [1,0,1,1], r = 1
let n = [1,2,3,1,2,3], l = 2



function find(nums,k){
for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]===nums[j]){
        
            let r= Math.abs(i-j)
            console.log(r)
            if(r<=k){
                return true
            }
            
        }
    }
}
return false

}

console.log(find(num,r))