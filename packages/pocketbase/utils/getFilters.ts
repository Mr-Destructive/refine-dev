import { CrudFilters } from "@refinedev/core";
import { generateFilter } from "./filters";

type GetPocketbaseFiltersType = {
    (filters?: CrudFilters): string;
};

export const generatePocketbaseFilters: GetPocketbaseFiltersType = (
    filters,
) => {
    const pocketbaseFilters: string[] = [];

    for (const filter of filters ?? []) {
        if (
            filter.operator !== "or" &&
            filter.operator !== "and" &&
            "field" in filter
        ) {
            pocketbaseFilters.push(
                generateFilter({
                    ...filter,
                }),
            );
        }
    }

    return pocketbaseFilters.join(" && ");
};
