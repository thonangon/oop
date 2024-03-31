class Numbers{
    constructor(public a:number, public b:number){ //parameters are marked as public, which means they can be accessed directly from class instances.
    }
    getSqure(){
        return new Numbers((this.a)**2,(this.b)**2)

    }
}
let obj = new Numbers(2,3)
console.log('a='+obj.getSqure().a+', b='+obj.getSqure().b)


// other way==================================
// class Numbers{
//     a:number
//     b:number
//     constructor( a:number, b:number){
//         this.a = a;
//         this.b = b;
//     }
//     getSqure(){
//         return new Numbers((this.a)**2,(this.b)**2)

//     }
// }
// let obj = new Numbers(2,3)
// console.log('a='+obj.getSqure().a+', b='+obj.getSqure().b)