import { Dictionary } from '@/types/types';
import { Head } from '@inertiajs/react';
import { useIps } from '@/lib/hooks/use-ips';

function Section({title, json}: {title: string, json: object}) {
  return (
    <>
      <section>
        <p style={{fontWeight: '600'}}>{title}</p>

        <pre style={{fontSize: '11px'}}>
                    {typeof json === 'object' && JSON.stringify(json, null, 2)}
                </pre>
      </section>
    </>
  );
}

type HomeProps = {
  cookies: Dictionary<string>;
  ip: string;
  languages: string[];
  headers: Dictionary<string[]>;
  query: string[];
}
export default function Home({cookies, languages, headers, query}: HomeProps) {
  const { ipv4, ipv6 } = useIps();

  return (
    <>
      <div>
        <Head title="Client info"/>

        <section>
          <p>IP v4: { ipv4 }</p>
          <p>IP v6: { ipv6 }</p>
        </section>

        <Section title="Cookies" json={cookies}/>

        <Section title="Languages" json={languages}/>

        <Section title="Headers" json={headers}/>

        <Section title="Query" json={query}/>
      </div>
    </>
  );
}