import { CrudSorting } from "@refinedev/core";

type GetPocketbaseSortingType = {
    (sorts?: CrudSorting): string;
};

export const getPocketbaseSorting: GetPocketbaseSortingType = (sorters) => {
    const sorts: string[] = [];

    if (sorters) {
        sorters.map((item) => {
            if (item.order === "asc") {
                sorts.push(`${item.field} ASC`);
            } else {
                sorts.push(`${item.field} DESC`);
            }
        });
    }

    return sorts.join(", ");
};
