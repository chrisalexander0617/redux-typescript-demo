import { getDocs } from 'firebase/firestore/lite';

export const fetchDocsData = async (name: any) => {
    try {
        const data = await getDocs(name)
        return data
    } catch { console.error('there was an issue') }
}