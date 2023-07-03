import { CrudFilter } from "@refinedev/core";

export const generateFilter = (filter: CrudFilter) => {
    switch (filter.operator) {
        case "eq":
            return `${filter.field} = ${filter.value}`;
        case "ne":
            return `${filter.field} != ${filter.value}`;
        case "gt":
            return `${filter.field} > ${filter.value}`;
        case "gte":
            return `${filter.field} >= ${filter.value}`;
        case "lt":
            return `${filter.field} < ${filter.value}`;
        case "lte":
            return `${filter.field} <= ${filter.value}`;
        case "contains":
            return `${filter.field} LIKE '%${filter.value}%'`;
        default:
            throw new Error(`Operator ${filter.operator} is not supported`);
    }
};
