const arr1 = ["sm" , "md", "lg", "xl"]
const arr2 = ["md" , "sm", "lg", "xl"]



console.log(JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort()))

console.log(JSON.stringify(arr1.sort()));