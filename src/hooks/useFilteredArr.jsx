import { useMemo } from "react";

export const useFilteredArr = (ValuesArr , filterBy ) => {
    const filteredArr = useMemo(() => {
        return ValuesArr.filter((e) =>
          e.title.toLowerCase().includes(filterBy.toLowerCase())
        );
      }, [filterBy, ValuesArr]);
    return filteredArr
}