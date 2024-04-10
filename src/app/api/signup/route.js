export async function POST(formData) {
    const req = await fetch(`http://localhost:8080/members/new`, {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
}