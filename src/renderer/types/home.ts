export type HomeType =
    | "single-family"
    | "townhouse"
    | "condominium"
    | "manufactured"
    | "multi-family"
    | "other";

export type HeatingType =
    | "heat-pump"
    | "gas-furnace"
    | "electric"
    | "boiler"
    | "radiant"
    | "mini-split"
    | "wood"
    | "multiple"
    | "other"
    | "none";

export type CoolingType =
    | "central-air"
    | "heat-pump"
    | "mini-split"
    | "window-units"
    | "evaporative"
    | "multiple"
    | "other"
    | "none";

export type GarageType =
    | "none"
    | "attached"
    | "detached"
    | "carport"
    | "other";

export type RoofMaterial =
    | "asphalt-shingle"
    | "metal"
    | "tile"
    | "slate"
    | "wood-shake"
    | "membrane"
    | "other";

export interface Home {
    id: number;
    name: string;

    homeType?: HomeType;

    yearBuilt?: number;

    lotSquareFeet?: number;
    livableSquareFeet?: number;

    bedrooms?: number;

    fullBathrooms?: number;
    halfBathrooms?: number;

    heatingType?: HeatingType;
    coolingType?: CoolingType;

    garageType?: GarageType;
    garageSpaces?: number;

    roofMaterial?: RoofMaterial;

    parcelNumber?: string;
}