import { API_BASE_URL } from "./config";

export const getProjectDetailResolver = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/refs/heads/master/frontend-assignment.json`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching project details:", error);
    throw error;
  }
};
