import { uploadBytes, getDownloadURL, ref} from '@firebase/storage'
import { storage } from '../firebase/config'


const useStorage = (file) => {
    const error = ref(null)
    const url = ref(null)
    const progress = ref(null)




    const storageRef = ref(storage, ('images/' + file.name))

    const uploadTask = uploadBytes(storageRef, file);

    uploadTask.on('state_changed', 
    (snapshot) => {
        console.log(snapshot)
    },
    (err) => {
        console.log(err.code)
    },
    () =>  {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL)
        })
        
    })

    return { url, error, progress}
}


export default useStorage