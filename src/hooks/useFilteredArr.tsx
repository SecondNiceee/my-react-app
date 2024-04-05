import { useMemo } from "react";

export const useFilteredArr = (ordersInformation: any , filterBy: any ) => {
    const filteredArr = useMemo(() => {
        return ordersInformation.filter((e: any) =>
          e.title.toLowerCase().includes(filterBy.toLowerCase())
        );
      }, [filterBy, ordersInformation]);
    return filteredArr
}