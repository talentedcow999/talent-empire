// Discord Js Webhook api to send details to user

const Discord_Webhook =
  "https://discord.com/api/webhooks/1121913613087686676/4OgbJvbPQ1aU09dHYfRXdKTZpO_HLleQRrkXD1tcvGEhkstn3gFtO370d7u7kYt58wyE";

export default async function handler(req, res) {
  const Details = JSON.parse(req.body);

  const sendDetails = await fetch(Discord_Webhook, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // the username to be displayed
      username: "Talent Empure Contact Form",
      // the avatar to be displayed
      avatar_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20221102143815",
      // contents of the message to be sent
      content: "Hey @everyone, We Got a new contact form submission",

      // embeds to be sent
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 4164863,
          // author

          // embed title
          // - link on 2nd row
          title: "Contact Form Submission",
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [
            {
              name: "Full Name",
              value: `\`\`\`${Details?.User}\`\`\``,
            },
            {
              name: "Email Id",
              value: `\`\`\`${Details?.EmailId}\`\`\``,
            },
            {
              name: "Message",
              value: `\`\`\`${Details?.MessageInput}\`\`\``,
            },
          ],
        },
      ],
    }),
  });

  if (sendDetails?.status == 204) {
    res.status(200).json({ error: false });
  } else {
    res.status(200).json({ error: true });
  }
}
