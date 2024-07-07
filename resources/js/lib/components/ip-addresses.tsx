import { useIps } from '@/lib/hooks/use-ips';
import { Alert, Skeleton, Text } from '@mantine/core';

function IpAlert({ipVersion}: {ipVersion: number}) {
  return (
    <Alert variant="light" color="red" radius="md" title="Error">
      Unable to fetch IPv {ipVersion}
    </Alert>
  )
}

function IpDisplay({ipVersion, ip}: {ipVersion: number, ip: string | undefined | null}) {
  return (
    <>
      {typeof ip === 'undefined' && (
        <Skeleton height={16} />
      )}

      {typeof ip === null && (
        <IpAlert ipVersion={ipVersion} />
      )}

      {typeof ip === 'string' && (
        <Text fz="h2">IPv{ipVersion}: {ip}</Text>
      )}
    </>
  )
}

export function IpAddresses() {
  const { ipv4, ipv6 } = useIps();

  return (
    <>
      <IpDisplay ip={ipv4} ipVersion={4} />
      <IpDisplay ip={ipv6} ipVersion={6} />
    </>
  )
}