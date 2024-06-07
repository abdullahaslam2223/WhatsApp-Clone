const chats = [
  {
    contact_name: "Daud Usman",
    message: "Mamo kia kar rhy hain?",
    date: "11:51 am",
  },
  {
    contact_name: "Farhan Yousaf",
    message: "Chalo let's see",
    date: "10:11 am",
  },
  {
    contact_name: "Ahmad Raza",
    message: "Nai yar mein gaon hon",
    date: "9:25 am",
  },
  {
    contact_name: "Awais Aslam",
    message: "Kia hal hai bhai g?",
    date: "Yesterday",
  },
  {
    contact_name: "Umair Bhatti",
    message: "aoa",
    date: "Yesterday",
  },
  {
    contact_name: "Abu G",
    message: "Kesa lga aap ko?",
    date: "Wednesday",
  },
  {
    contact_name: "Bilal Yamin",
    message: "Kia ho rha hai aaj kal",
    date: "Tuesday",
  },
  {
    contact_name: "Ahtisham Ul Haq",
    message: "Han milty hain kal, Insha'Allah",
    date: "Monday",
  },
  {
    contact_name: "Ali Ghumman",
    message: "Jab tak pata nhi chalta",
    date: "27/04/2024",
  },
  {
    contact_name: "+923453302223",
    message: `Hi Mudassir,

    Here is the quote after discussing with Team.

    Options
    Monthly = RS. 25500 - paid Monthly 15% off
    Annually = RS 225000 - ( 18750 Monthly) - paid Annually 25% off
    Monthly $ = 75 / month upfront monthly payment using saved credit card -  paid in $ using Prepaid monthly charges
    Max orders limit 36000
    If exceeds then we will have to negotiate.

    Please let me know if you have any queries?`,
    date: "25/04/2024",
  },
  {
    contact_name: "+923158612223",
    message: "Kon?",
    date: "26/04/2024",
  },
];

const chatContainer = document.getElementById("chats");

chats.forEach((chat) => {
  const section = document.createElement("section");
  section.classList.add("chat-item");

  const img = document.createElement("img");
  img.classList.add("no-profile");
  img.setAttribute("src", "./img/profile.png");
  img.setAttribute("alt", "no profile");

  section.appendChild(img);

  const div = document.createElement("div");
  div.classList.add("texts");

  const contact = document.createElement("h3");
  contact.textContent = chat.contact_name;
  div.appendChild(contact);

  const message = document.createElement("p");
  message.textContent =
    chat?.message.length > 50
      ? chat.message.substring(0, 50) + "..."
      : chat?.message;
  div.appendChild(message);

  section.appendChild(div);

  const date = document.createElement("p");
  date.classList.add("message-date");
  date.textContent = chat.date;

  section.appendChild(date);

  chatContainer.appendChild(section);
});

const toggle_filter = () => {
  const chat_dropdown = document.getElementsByClassName("chat-dropdown");
  chat_dropdown[0].classList.contains("chat-dropdown-visible")
    ? chat_dropdown[0].classList.remove("chat-dropdown-visible")
    : chat_dropdown[0].classList.add("chat-dropdown-visible");
};
