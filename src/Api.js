const BASE_URL = "https://jsonplaceholder.typicode.com";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getUsers() {
  return fetchData("/users");
}

export async function getPosts() {
  return fetchData("/posts");
}
