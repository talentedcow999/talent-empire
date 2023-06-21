// Discord Js Webhook api to send details to user

export default function handler(req, res) {
  const Details = JSON.parse(JSON.stringify(res.body));

  res.status(200).json({ name: "John Doe" });
}
