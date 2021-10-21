import { ref } from 'vue'
import { db } from '../firebase/config'

const getWorks = () => {
    const works = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await db.collection('works').get()
            
            works.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
        }
        catch (err){
            error.value = err.message
            console.log(error.value)
        }
    }

    return {works, error, load}
}

export default getWorks