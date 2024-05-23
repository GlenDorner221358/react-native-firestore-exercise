// Firestore functionality
import { collection, addDoc, getDocs, doc, query, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";

// Create new
export const createNewBucketItem = async (item) => {

    try {
        const docRef = await addDoc(collection(db, "items"), item);
        console.log("Document written with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding document", e);
        return false
    }

}

// Get all
export const getMyBucketList = async () => {

    var allItems = []

    var q = query( collection(db, "items"), orderBy('priority', "asc")
    // , where("priority", "==", true) 
    )
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        allItems.push({... doc.data(), id: doc.id})
    });

    console.log(allItems)
    return allItems
}