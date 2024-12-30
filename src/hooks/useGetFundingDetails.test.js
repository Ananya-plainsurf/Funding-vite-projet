import { renderHook, waitFor } from "@testing-library/react";
import { useGetFundingDetails } from "@hooks/useGetFundingDetails"; // Adjust path
import { vi } from "vitest";
import { client } from "@utilities/client"; // Adjust path

// Move the vi.mock to the top
vi.mock("@utilities/client"); // Mocking client function

describe("useGetFundingDetails Hook", () => {
  it("fetches and returns funding details correctly", async () => {
    // Mock data can now be declared inside the test function
    const mockData = [
      {
        "s.no": 0,
        "amt.pledged": 15823,
        blurb:
          "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
        by: "Museum of Science Fiction",
        country: "US",
        currency: "usd",
        "end.time": "2016-11-01T23:59:00-04:00",
        location: "Washington, DC",
        "percentage.funded": 186,
        "num.backers": "219382",
        state: "DC",
        title: "Catalysts, Explorers & Secret Keepers: Women of SF",
        type: "Town",
        url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
      },
      // Additional mock data can be added here
    ];

    // Mock the client request to return the mock data
    client.mockResolvedValue(mockData);

    // Render the hook and wait for the result
    const { result } = renderHook(() => useGetFundingDetails());

    // Assert that the fetched data is correct
    await waitFor(() => expect(result.current).toEqual(mockData));
  });
});
