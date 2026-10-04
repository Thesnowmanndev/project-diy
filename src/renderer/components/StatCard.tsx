interface StatCardProps {
    label: string;
    value: string | number;
}

export function StatCard({ label, value }: StatCardProps) {
    return (
        <article className="stat-card">
            <span className="stat-card__label">
                {label}
            </span>

            <strong className="stat-card__value">
                {value}
            </strong>
        </article>
    )
}