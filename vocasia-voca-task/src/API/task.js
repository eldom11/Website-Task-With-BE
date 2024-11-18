const API_URL = "http://localhost:8080/api/tasks";

export async function getTasks(token) {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function addTask(token, newTask) {
  try {
    const task = { title: newTask };
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Failed to add task");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
}
