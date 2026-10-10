import { home } from "../data/mockData";

export function EditHomeView() {
    return (
        <>
            <header className="page-header">
                <div>
                    <span className="eyebrow">
                        Home
                    </span>

                    <h1>Edit Home</h1>

                    <p>
                        Enter information about your property.
                    </p>
                </div>
            </header>

            <section className="form-panel">
                <div className="form-help">
                    <strong>
                        Not sure where to find this information?
                    </strong>

                    <p>
                        Check your county assessor or GIS parcel
                        website, appraisal, closing documents,
                        home inspection, property-tax records,
                        or real-estate listing.
                    </p>
                </div>

                <div className="form-grid">
                    <label className="form-field">
                        <span>Home Name</span>

                        <input
                            type="text"
                            defaultValue={home.name}
                        />
                    </label>

                    <label className="form-field">
                        <span>Home Type</span>

                        <select defaultValue={home.homeType}>
                            <option value="">
                                Select home type
                            </option>

                            <option value="single-family">
                                Single Family
                            </option>

                            <option value="townhouse">
                                Townhouse
                            </option>

                            <option value="condominium">
                                Condominium
                            </option>

                            <option value="manufactured">
                                Manufactured Home
                            </option>

                            <option value="multi-family">
                                Multi-Family
                            </option>

                            <option value="other">
                                Other
                            </option>
                        </select>
                    </label>

                    <label className="form-field">
                        <span>Year Built</span>

                        <input
                            type="number"
                            defaultValue={home.yearBuilt}
                        />
                    </label>

                    <label className="form-field">
                        <span>Lot Size</span>

                        <div className="input-with-unit">
                            <input
                                type="number"
                                defaultValue={home.lotSquareFeet}
                            />

                            <span>sq ft</span>
                        </div>
                    </label>

                    <label className="form-field">
                        <span>Livable Area</span>

                        <div className="input-with-unit">
                            <input
                                type="number"
                                defaultValue={home.livableSquareFeet}
                            />

                            <span>sq ft</span>
                        </div>
                    </label>

                    <label className="form-field">
                        <span>Bedrooms</span>

                        <input
                            type="number"
                            defaultValue={home.bedrooms}
                        />
                    </label>

                    <label className="form-field">
                        <span>Full Bathrooms</span>

                        <input
                            type="number"
                            defaultValue={home.fullBathrooms}
                        />
                    </label>

                    <label className="form-field">
                        <span>Half Bathrooms</span>

                        <input
                            type="number"
                            defaultValue={home.halfBathrooms}
                        />
                    </label>

                    <label className="form-field">
                        <span>Heating</span>

                        <select defaultValue={home.heatingType}>
                            <option value="">Select heating</option>
                            <option value="heat-pump">Heat Pump</option>
                            <option value="gas-furnace">Gas Furnace</option>
                            <option value="electric">Electric</option>
                            <option value="boiler">Boiler</option>
                            <option value="radiant">Radiant</option>
                            <option value="mini-split">Mini Split</option>
                            <option value="wood">Wood</option>
                            <option value="multiple">Multiple Systems</option>
                            <option value="none">None</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label className="form-field">
                        <span>Cooling</span>

                        <select defaultValue={home.coolingType}>
                            <option value="">Select cooling</option>
                            <option value="central-air">Central Air</option>
                            <option value="heat-pump">Heat Pump</option>
                            <option value="mini-split">Mini Split</option>
                            <option value="window-units">Window Units</option>
                            <option value="evaporative">Evaporative</option>
                            <option value="multiple">Multiple Systems</option>
                            <option value="none">None</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label className="form-field">
                        <span>Parking / Garage</span>

                        <select defaultValue={home.garageType}>
                            <option value="">Select garage type</option>
                            <option value="none">None</option>
                            <option value="attached">Attached Garage</option>
                            <option value="detached">Detached Garage</option>
                            <option value="carport">Carport</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label className="form-field">
                        <span>Garage Spaces</span>

                        <input
                            type="number"
                            defaultValue={home.garageSpaces}
                        />
                    </label>

                    <label className="form-field">
                        <span>Roof Material</span>

                        <select defaultValue={home.roofMaterial}>
                            <option value="">Select roof material</option>
                            <option value="asphalt-shingle">
                                Asphalt Shingle
                            </option>
                            <option value="metal">Metal</option>
                            <option value="tile">Tile</option>
                            <option value="slate">Slate</option>
                            <option value="wood-shake">Wood Shake</option>
                            <option value="membrane">
                                Membrane / Flat Roof
                            </option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <label className="form-field">
                        <span>Parcel Number</span>

                        <input
                            type="text"
                            defaultValue={home.parcelNumber}
                        />
                    </label>
                </div>

                <div className="form-actions">
                    <button type="button">
                        Save Changes
                    </button>
                </div>
            </section>
        </>
    );
}