export async function POST(response) {
    const formData = await response.json()
    const res = await fetch(`http://localhost:8080/members/new`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: 
            formData
    })
    const data = await res.json
    return Request.json(data)
}
