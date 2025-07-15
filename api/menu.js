export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing restaurant ID" });
  }

  const swiggyMenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=${id}`;

  try {
    const response = await fetch(swiggyMenuURL, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Menu API request failed." });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Menu API error:", err);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
}
