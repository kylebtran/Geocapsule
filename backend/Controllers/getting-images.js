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
            
            let path = itemRef._location.path_;
            
            path = path.split(" ");
            const date = path[9];
            const time = path[10];
            imageUrls.push({
                time: `${date} ${time}`,
                url: url
            });      
        }
        
        // Sort the Image urls based on time.
        imageUrls.sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);

            return dateA - dateB;
        });

        return imageUrls;

        
    }  catch (error) {
        console.log(error);
    }

}

export default getAllImageUrls;