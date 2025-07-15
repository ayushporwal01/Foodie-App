export default async function handler(req, res) {
  try {
    const swiggyURL = "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.7195687&lng=75.8577258&carousel=true&third_party_vendor=1";

    const response = await fetch(swiggyURL, {
      headers: {
        "User-Agent": "Mozilla/5.0", // trick Swiggy into thinking it’s a browser
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Swiggy API request failed." });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Serverless function error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
