export function SettingsView() {
    return (
        <>
            <header className="page-header">
                <div>
                    <span className="eyebrow">
                        Project DIY
                    </span>

                    <h1>Settings</h1>

                    <p>
                        Application preferences
                        and local data settings.
                    </p>
                </div>
            </header>

            <section className="settings-panel">
                <h2>Local-first by design</h2>

                <p>
                    Project DIY stores its data
                    on your computer and does not
                    require a cloud account.
                </p>
            </section>
        </>
    );
}