import type { Home } from "../types/home";

export function getBathroomCount(home: Home): number {
    return (
        (home.fullBathrooms ?? 0) +
        (home.halfBathrooms ?? 0) * 0.5
    );
}

export function formatHomeType(
    homeType: Home["homeType"]
): string {
    switch (homeType) {
        case "single-family":
            return "Single Family";

        case "townhouse":
            return "Townhouse";

        case "condominium":
            return "Condominium";

        case "manufactured":
            return "Manufactured Home";

        case "multi-family":
            return "Multi-Family";

        case "other":
            return "Other";

        default:
            return "Not entered";
    }
}

export function formatGarage(
    home: Home
): string {
    if (!home.garageType) {
        return "Not entered";
    }

    if (home.garageType === "none") {
        return "None";
    }

    const garageType =
        home.garageType.charAt(0).toUpperCase() +
        home.garageType.slice(1);

    if (!home.garageSpaces) {
        return garageType;
    }

    return `${garageType} · ${home.garageSpaces} car`;
}

export function formatHeatingType(
    heatingType: Home["heatingType"]
): string {
    switch (heatingType) {
        case "heat-pump":
            return "Heat Pump";

        case "gas-furnace":
            return "Gas Furnace";

        case "electric":
            return "Electric";

        case "boiler":
            return "Boiler";

        case "radiant":
            return "Radiant";

        case "mini-split":
            return "Mini Split";

        case "wood":
            return "Wood";

        case "multiple":
            return "Multiple Systems";

        case "other":
            return "Other";

        case "none":
            return "None";

        default:
            return "Not entered";
    }
}

export function formatCoolingType(
    coolingType: Home["coolingType"]
): string {
    switch (coolingType) {
        case "central-air":
            return "Central Air";

        case "heat-pump":
            return "Heat Pump";

        case "mini-split":
            return "Mini Split";

        case "window-units":
            return "Window Units";

        case "evaporative":
            return "Evaporative";

        case "multiple":
            return "Multiple Systems";

        case "other":
            return "Other";

        case "none":
            return "None";

        default:
            return "Not entered";
    }
}

export function formatRoofMaterial(
    roofMaterial: Home["roofMaterial"]
): string {
    switch (roofMaterial) {
        case "asphalt-shingle":
            return "Asphalt Shingle";

        case "metal":
            return "Metal";

        case "tile":
            return "Tile";

        case "slate":
            return "Slate";

        case "wood-shake":
            return "Wood Shake";

        case "membrane":
            return "Membrane / Flat Roof";

        case "other":
            return "Other";

        default:
            return "Not entered";
    }
}