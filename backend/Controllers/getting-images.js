import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../Configurations/firebase_config.js";

// // Initialize a firebase application
initializeApp(firebaseConfig);

const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'files/UCLA/');

// Get the downloadable and public URL for each image in the database.
async function getAllImageUrls(){

    let imageUrls = [];

    try{
        const res = await listAll(listRef);

        for (const itemRef of res.items) {
            const url = await getDownloadURL(itemRef);
            imageUrls.push(url);
            console.log(imageUrls);
        }

        
    }  catch (error) {
        console.log(error);
    }

    console.log("All URLs retrieved:", imageUrls);
    return imageUrls;

}

export default getAllImageUrls;