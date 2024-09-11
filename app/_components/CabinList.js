import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins = cabins;

  if (filter === "small")
    displayedCabins = cabins.filter(({ maxCapacity }) => maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      ({ maxCapacity }) => maxCapacity > 3 && maxCapacity < 8
    );
  if (filter === "large")
    displayedCabins = cabins.filter(({ maxCapacity }) => maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
