export interface IQueries<T = any> {
    limit?: number;
    page?: number;
    fields?: Array<string>
    // sortBy?: string;
    // sortChildrenBy?: string;
    // sortDir?: string | TDirectionSort;
    // searchBy?: string;
    // searchVal?: string;
    // filterBy?: string;
    // filterVal?: string;
    // isDeleted?: string | boolean;
    // fieldsSelected?: Array<keyof TFieldSelected> | any;
    // [key: string]: string | number | boolean | any;
}