 let is_ok = true;

 const Promesa = (time,task) => {
     return new  Promise((resolve, reject) => {
         setTimeout(() => {
             if(is_ok) {
                 resolve(task);
             }else {
                 reject("No se pueden cargar los productos");
             }
         }, time);
     });
 }

 export default Promesa;