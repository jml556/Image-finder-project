const apiKey = 'gB643b-X26TFNkCRaLf6cU1OzVm2If_nL3ibPwWB3As'
const baseUrl = 'https://api.unsplash.com/'
const imageArr = [];

const getData = async (term) => {
    try {
        const res = await fetch(`${baseUrl}search/photos?per_page=30&query=${term}`, {
            headers: {
                Authorization: `Client-ID ${apiKey}`
            }
        })
        const data = await res.json()
        console.log(data)
    }
    catch(err) {
        throw new Error(err)
    }
}
