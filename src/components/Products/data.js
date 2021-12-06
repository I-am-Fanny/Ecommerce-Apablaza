


const products = [

    //Mujer
    
   
   
    {  
       id:1,
       name: "Calza",
       imagen:["https://thumbs.nosto.com/quick/rbxh5h46/8/438818_alt_64cdcce2188af1af5aeee350def0f5d02c78b2b3a9b3b721a1e33e196a029ef6/956afd5ea41d7841cee88e112e435ac291c9d19ca7fed19472c277de94ade72da/A"],
       precio: 7500,
       stock: 25,
       descripcion: "Comodidad para el día a día. Look con 3 tonos de colores y logo estampado",
       categoryId: 13,
       category: {
          name: "Mujer",
          id:13
       }
      
    },

    
    
    {
        name: "Top",
        imagen:[ "https://thumbs.nosto.com/quick/rbxh5h46/8/374991_alt_3fffac97a9db785539f3acd84491b3f066d399f5b1ab7d22ed2cf2d80bf4a907/b188356fcb954c844e9de7fce50c5e9920919a50dd845fb9a1f91843ca5ae087a/A"],
        precio: 5000,
        stock: 15,
        descripcion: "La tela suave con tecnología Dri-FIT mueve el sudor de tu piel para una evaporación más rápida y ayudarte a mantenerte seca y cómoda.",
        id:2,
        categoryId: 13,
        category: {
           name: "Mujer",
           id: 13
        }
     },

     {
        name: "Zapatillas",
        imagen:[ "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-x9000l1-mujer-negra-100010h00577001-1.jpg"],
        precio: 12000,
        stock: 10,
        descripcion: "Diseñada para corredoras con pisada neutra. Con puyap. Soporte liviano.",
        id:3,
        categoryId: 13,
        category: {
           name: "Mujer",
           id: 13
        }
     },
   




    //Hombre


   {
      name: "Pantalon",
      imagen:[ "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/p/a/pantalon-puma-entrenamiento-rebel-negro-640020585753001-1.jpg"],
      precio: 8000,
      stock: 18,
      descripcion: "Posee cintura elastizada con cordon de ajuste interno. Bolsillos laterales y botamanga con puño elastizado.",
      id:4,
      categoryId: 14,
     
        category: {
           name: "Hombre",
           id: 14
        }
   },
  
   {
      name: "Remera",
      imagen: ["https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/r/e/remera-fila-over-digital-verde-3000211ht042607-1.jpg"],
      precio: 7500,
      stock: 35,
      descripcion: "Lucite con la remera estampada de algodón FILA Over Digital. Regular fitLogo FILA aplicado.",
      id:5,
      categoryId: 14,
        category: {
           name: "Hombre",
           id: 14
        }
   },
  
   {
      name: "Zapatillas",
      imagen: ["https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-x9000l2-negra-83264864-100010gy0125001-1.jpg"],
      precio: 16000,
      stock: 13,
      descripcion: "Incorporan amortiguación flexible y liviana Bounce. La tecnología Jetboost en el talón te retorna aún más energía con cada paso y maximiza la sensación de estabilidad.",
      id:6,
      categoryId: 14,
        category: {
           name: "Hombre",
           id: 14
        }
   },
  




 //Niño  
  
      {
         name: "Conjunto",
         imagen:[ "https://thumbs.nosto.com/quick/rbxh5h46/8/438518_alt_19095ffdd26bc62931d4a398096275e304f36bd22016f4fdfc2a3076fd8968c0/0579ffae63240638fe2c933814634bfddeed24da30726ca3e2c1d4761ab1b443a/A"],
         precio: 7900,
         stock: 29,
         descripcion: "El conjunto de running para niño es la opción ideal para los entrenamientos de los más pequeños.",
         id:7,
         categoryId: 15,
        category: {
           name: "Niño",
           id: 15
        }
      },
 
      {
         name: "Zapatillas",
         imagen: ["https://thumbs.nosto.com/quick/rbxh5h46/8/437707_alt_c9cb6cd4814ee7bfca943d001d853c87182c87399d0b20c6d6c1cad29cd9b3ee/7ad6d4e08a7425e13a1025be5ef87a1c7b442c448a94955335f47f7b5eb4584ca/A"],
         precio: 6200,
         stock: 8,
         descripcion: "Diseño y detalles únicos para lo más chicos en un calzado de performance para quienes practican deporte y aman la moda. ",
         id:8,
         categoryId: 15,
         category: {
           name: "Niño",
           id: 15
        }
      },
 
      {
         name: "Pelota",
         imagen: ["https://thumbs.nosto.com/quick/rbxh5h46/8/420032_alt_365eefc372749942b0d82feae3d5dc0304057b055bb7ad0b3f4940464efe0b2f/bcff86c8a7cd241a4c7797f9d05fdabe6d2291134003b3e3a384c571030c4575a/A"],
         precio: 3500,
         stock: 50,
         descripcion: "Acompañá a tu equipo favorito con la Pelota de fútbol del Manchester City. Tamaño: Nº5.",
         id:9,
         categoryId: 15,
         category: {
           name: "Niño",
           id: 15
        }
      },
 




     //Niña

   

      {
         name: "Conjunto",
         imagen:[ "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/c/o/conjunto-adidas-training-frozen-2-ni_a-lila-100020gd3714001-1.jpg"],
         precio: 7800,
         stock: 26,
         descripcion: "La remera estampada es ligera y muy suave. Las calzas elásticas lucen un estampado inspirado en diamantes.",
         id:10,
         categoryId: 16,
         category: {
           name: "Niña",
           id: 16
        }
      },
 
      {
         name: "Zapatillas",
         imagen: ["https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-topper-costa-ni_o-ni_a-crudo-800010055959001-1.jpg"],
         precio: 6500,
         stock: 11,
         descripcion: " Zapatillas Retro. Calzado bien urbano y canchero para los más chicos.",
         id:11,
         
         categoryId: 16,
         category: {
           name: "Niña",
           id: 16
        }
      },
 
      {
         name: "Pelota",
         imagen: ["https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/p/e/pelota-de-futbol-kappa-player-20-3g-numero-4-fucsia-39504304wnu0a01-1.jpg"],
         precio: 3400,
         stock: 37,
         descripcion: "Los partidos con amigos y entrenamientos serán muchos más divertidos con esta pelota KAPPA 20.3G de medio pique. Tamaño: N4.",
         id:12,
         categoryId: 16,
         category: {
           name: "Niña",
           id: 16
        }
      }
    
   ]
   

     




 


module.exports ={
   products,
}
