export async function POST(request) {
  const formData = await request.json();
  const res = await fetch(`http://localhost:8080/members/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return res;
}
