interface IEmp  {
   name:string 
   phone:number 
   email:string
}

interface IAddress {
     city:string,
     state:string,
     pincode:number,
    
  }

 interface IStudent {
       name:string,
       phone:number,
       address:IAddress
 }
  

 var emp1:IEmp = {
     name:"Ibase",
     phone:999999,
     email:"Ibase@gmail.com",
     
 }

 var s1:IStudent= {
    name:"Raj",
    phone:2974927,
    address:{
        city:"Nagpur",
        state:"MH",
        pincode:932939,
        
    }
 }