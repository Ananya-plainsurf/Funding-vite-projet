import { useEffect, useState } from "react";
import { client } from "@utilities/client";

export const useGetFundingDetails = () => {
  const [fundingDetails, setFundingDetails] = useState([]);
  useEffect(() => {
    const fetchFundingDetails = async () => {
      const response = await client("frontend-assignment.json");
      setFundingDetails(response);
    };

    fetchFundingDetails();
  }, []);

  return fundingDetails;
};
