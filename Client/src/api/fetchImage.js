export const fetchImage =  async(prompt) => {
    try {
        const response = await fetch('http://localhost:3080/generateImage', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}