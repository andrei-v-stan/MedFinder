export declare class MedicineOptionsDto {
    select?: {
        name?: boolean;
        description?: boolean;
        manufacturer?: boolean;
    };
    where?: {
        name?: string;
        description?: string;
        manufacturer?: string;
    };
    order?: string[];
    constructor();
}
