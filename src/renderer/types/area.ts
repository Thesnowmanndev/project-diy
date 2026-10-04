export type AreaType = "room" | "garage" | "yard" | "exterior" | "whole-home" | "other";

export interface Area {
    id: number;
    name: string;
    type: AreaType;
    squareFeet?: number;
}