import RoomsData from "@/app/lib/data.json";
export async function GET() {
  const roomsList = RoomsData.data.rooms;
  const set = roomsList.map((room) => ({
    id: parseInt(room.id),
    image: room.images,
    country: room.country,
    location: room.location,
    price: room.price,
    distance: room.distance,
    date: room.date,
    description: room.description,
    rating: room.rating,
  }));

  return Response.json({ data: JSON.stringify(set) });
}
