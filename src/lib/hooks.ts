import { useQuery } from "@tanstack/react-query";
import { RealEstateItems } from "./types";

type RealEatateItemsApiResponse = {
  realEstateItems: RealEstateItems[];
};

const fetchRealEstateItems = async (
  searchText: string
): Promise<RealEatateItemsApiResponse> => {
  console.log(searchText);
  const request = await fetch("data1.json");
  if (!request.ok) {
    const errorData = await request.json();
    throw new Error(errorData.description);
  }

  const data = await request.json();
  console.log(data, "IN FETCH");
  return data;
};

export function useSearchQuery(searchText: string) {
  const { data, isInitialLoading } = useQuery(
    ["real-estate-items", searchText],
    () => fetchRealEstateItems(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
    }
  );
  console.log(data, "IN QUERY");
  return {
    realEstateItems: data?.realEstateItems,
    isLoading: isInitialLoading,
  } as const;
}
