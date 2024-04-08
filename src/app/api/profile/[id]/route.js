export async function GET(request, { params: num }) {
  const obj = num;
  const id = parseInt(obj.id, 10);

  const res = await fetch(`http://localhost:8080/profiles/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
