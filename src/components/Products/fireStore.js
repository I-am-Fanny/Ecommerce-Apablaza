import db from './configFirebase';
import {query, orderBy, where, collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from '@firebase/firestore';



 export const firestore = async (idCat) => {
    let q;
    
    if (idCat) {
        q = query(collection(db, "products"),  where('categoryId', '==', idCat));

    } else {

     q = query(collection(db, "products"), orderBy('name'));
}
    const querySnapshot = await getDocs(q);
    const dataFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFirestore;
    
}
export const firestorePromesa = async (itemId) => {
    const docRef = doc(db, "products", itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: itemId,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No es un documento");
    }
}



