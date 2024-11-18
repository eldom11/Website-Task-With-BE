const API_URL = "http://localhost:8080/api/tasks";

// Sran mentor pake Fetch API
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

export async function markTaskDone(token, taskId) {
  try {
    const response = await fetch(`${API_URL}/${taskId}/done`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to mark task as done");
    }
  } catch (error) {
    console.error("Error marking task as done:", error);
    throw error;
  }
}

export async function deleteTask(token, taskId) {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}
