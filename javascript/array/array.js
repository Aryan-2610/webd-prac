//1
let teaFlavours=["green tea","black tea","oolong tea"]
const firstTea=teaFlavours[0]
console.log(firstTea)
teaFlavours[1]="red tea"

teaFlavours[3]="magic tea"
teaFlavours.push("magicful tea") //add at end
console.log(teaFlavours)

//remove last using pop
teaFlavours.pop()
console.log(teaFlavours)

//soft copy of array (due to memory reference)
let popularTeas=teaFlavours
console.log(teaFlavours)
teaFlavours[0]="changed"
console.log(popularTeas)

//hard copy
let hardCopyTea=[...teaFlavours] //or
let hardCopy=teaFlavours.slice( )

teaFlavours.pop()
console.log(hardCopyTea)

//add two arrays
//arr1+arr2=string
console.log(hardCopy+teaFlavours)
console.log(typeof hardCopy+teaFlavours)


//merge two arrays
let newarr=[...hardCopy,...teaFlavours]
console.log(newarr)
console.log(typeof newarr)
//or
let newarr2=teaFlavours.concat(hardCopy)

//if array contains
let isGreentea=teaFlavours.includes("green tea")
console.log(isGreentea)