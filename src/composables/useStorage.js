import { getDownloadURL, ref, uploadBytesResumable} from '@firebase/storage'
import { storage, firestore } from '../firebase/config'
import { serverTimestamp, addDoc, collection} from "firebase/firestore"; 
import {ref as vref} from "@vue/reactivity";

const useStorage = (file, title, category, description) => {
    const url = vref(null);
    const error = vref(null);
    const progress = vref(null);

    const storageRef = ref(storage, ('images/' + file.name));
    const collectionRef = collection(firestore, 'images');


    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on('state_changed', 
    (snapshot) => {
        console.log(snapshot);
    },
    (err) => {
        error.value = err;
    },
    async () =>  {
        const dlUrl = await getDownloadURL(uploadTask.snapshot.ref)
        const docRef = await addDoc(collectionRef, {
            url: dlUrl,
            timestamp: serverTimestamp(),
            title: title,
            category: category,
            description: description
        });
        url.value = dlUrl;
        console.log("Document written with ID: ", docRef.id);
});

    return { progress, url, error}
}


export default useStorage