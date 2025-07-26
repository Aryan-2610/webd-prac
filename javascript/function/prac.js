function greet(name){//parameter
    console.log(`hello. ${name}`)
}
greet("aryan")//argument

//nesting function
function OrderTea(teaType){
    function confirmOrder(){
        return `order confirmeed for chai`
    }
    return confirmOrder()
}