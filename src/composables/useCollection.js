import { ref as vref, watchEffect} from "vue"
import { firestore } from "../firebase/config"
import { query, onSnapshot, collection, orderBy} from "firebase/firestore";


const useCollection = (coll) => {
    const documents = vref(null)
    const error = vref(null)

    const collectionRef = collection(firestore, coll)


    const q = query(collectionRef, orderBy('timestamp', 'desc'))

    const unsub = onSnapshot(q, (snap) => {
        let results = []
        snap.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id})
        })


        documents.value = results
        error.value = null
        console.log(documents.value)
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch the data'
    })
    
    watchEffect((onInvalidate) =>  {
        onInvalidate(() => unsub())
    })

    return { documents, error}
}


export default useCollection