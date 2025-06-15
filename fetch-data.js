document.addEventListener("DOMContentLoaded", fetchUseData);

async function fetchUseData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear previous content
    dataContainer.innerHTML = "";

    // Create a list to display user names
    const userList = document.createElement("ul");

    // Populate the list with user names
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.name}`;
      userList.appendChild(listItem);
    });
    // Append the list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    console.error("Error fetching data:", error);
    dataContainer.innerHTML = "Error fetching data. Please try again later.";
  }
}
