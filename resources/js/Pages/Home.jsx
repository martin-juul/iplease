import {Head} from "@inertiajs/react";



function Section({ title, json }) {
    return (
        <>
            <section>
                <p style={{ fontWeight: '600' }}>{title}</p>

                <pre style={{ fontSize: '11px' }}>
                    {typeof json === 'object' && JSON.stringify(json, null, 2)}
                </pre>
            </section>
        </>
    )
}

export default function Home({cookies, ip, languages, headers, query}) {
    return (
        <>
            <div>
                <Head title="Your info"/>

                <section>
                    <p>IP: {ip}</p>

                </section>

                <Section title="Cookies" json={cookies} />

                <Section title="Languages" json={languages} />

                <Section title="Headers" json={headers} />

                <Section title="Query" json={query} />
            </div>
        </>
    )
}
