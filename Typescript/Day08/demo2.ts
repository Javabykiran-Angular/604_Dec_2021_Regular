
export class Myclass{
    //Property
    private id:number;
    public fname:string;
    protected lname:string

    constructor(id:number,f:string,l:string){
          this.id=id;
          this.fname=f;
          this.lname=l;
    }

   

    display(){
      console.log(`
        Id  :: ${this.id}
        First name :: ${this.fname}
        Last Name:: ${this.lname}
      `)
    }


}

// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();

export function add1(a:number,b:number){
  return (a+b);
}

export const pi=3.14;
