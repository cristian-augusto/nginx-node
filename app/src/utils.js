import axios from "axios";

const getRandomUser = async () => {
  try {
    const response = await axios.get(
      "https://randomuser.me/api/?nat=br&results=1"
    );
    return response.data;
  } catch {
    return null;
  }
};

export const getRandomName = async () => {
  const response = await getRandomUser();
  if (!response) return "";

  const { first, last } = response.results[0].name;

  return `${first} ${last}`;
};

export const buildBodyResponse = (namesList) => {
  const title = "<h1>Full Cycle Rocks!</h1>";
  let body = "";
  body += title;
  body += "</br>";

  body += "<ul>";
  const names = [];
  for (const name of namesList) {
    names.push(`<li>${name}</li>`);
  }
  body += names.join("\n");
  body += "</ul>";
  return body;
};
