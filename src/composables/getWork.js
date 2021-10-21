import { ref } from 'vue'
import { db } from '../firebase/config'

const getWork = (id) => {
    const work = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let res = await db.collection('works').doc(id).get()

            if (!res.exists){
                throw Error('That post does not exist')
            }

            work.value = { ...res.data(), id: res.id}
            console.log(work.value)
        }
        catch (err){
            error.value = err.message
            console.log(error.value)
        }
    }

    return { post, error, load }
}

export default getWork