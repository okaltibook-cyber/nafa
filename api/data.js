export default async function handler(req, res) {
  const response = await fetch(
    "https://api.baserow.io/api/database/rows/table/843455/?user_field_names=true",
    {
      headers: {
        Authorization: `Token 2y8kAxYZbNJ2c2iefUyUeVeGOqXB6efN`
      }
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
