interface PropertyDetailProps {
    label: string;
    value: string | number;
}

export function PropertyDetail({
    label,
    value
}: PropertyDetailProps) {
    return (
        <div className="property-detail">
            <span className="property-detail__label">
                {label}
            </span>

            <strong className="property-detail__value">
                {value}
            </strong>
        </div>
    );
}