import { DataProvider } from "@refinedev/core";
import Pocketbase from "pocketbase";
import { generatePocketbaseFilters } from "./utils/getFilters";
import { getPocketbaseSorting } from "./utils/sorters";

export const dataProvider = (
    pocketbaseClient: Pocketbase,
): Required<DataProvider> => {
    return {
        getList: async ({ resource, pagination, filters, sorters }) => {
            const { current = 1, pageSize = 10 } = pagination ?? {};

            const pocketbaseFilters = getPocketbaseSorting(filters);

            const skip = (current - 1) * pageSize;

            const pocketbaseSorts = generatePocketbaseFilters(sorters);
        },
    };
};
