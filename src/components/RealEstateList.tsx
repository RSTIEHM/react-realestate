import { RealEstateItems } from "../lib/types";

// PROP TYPE ======
type RealEstateListProps = {
  realEstateItems: RealEstateItems[];
  isLoading: boolean;
};

export default function RealEstateList({
  realEstateItems,
  isLoading,
}: RealEstateListProps) {
  if (!isLoading) {
    console.log(realEstateItems, "IN LIST");
  }

  return (
    <div>
      {realEstateItems.length > 0 &&
        realEstateItems.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}
