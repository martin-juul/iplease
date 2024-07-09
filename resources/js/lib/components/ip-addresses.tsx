import { useIps } from '@/lib/hooks/use-ips';
import { Alert, Button, CopyButton, Skeleton, Text } from '@mantine/core';

function IpAlert({ipVersion}: { ipVersion: number }) {
  return (
    <Alert variant="light" color="red" radius="md" title="Error" mb="xs">
      Unable to fetch IPv{ipVersion}
    </Alert>
  );
}

function IpDisplay({ipVersion, ip}: { ipVersion: number, ip: string | undefined | null }) {
  return (
    <>
      {typeof ip === 'undefined' && (
        <Skeleton height={16}/>
      )}

      {ip === null && (
        <IpAlert ipVersion={ipVersion}/>
      )}

      {typeof ip === 'string' && (
          <CopyButton value={ip}>
            {({copied, copy}) => (
              <Text fz="h2">
                IPv{ipVersion}: {ip}
                <Button
                  ml="md"
                  size="xs"
                  color={copied ? 'teal' : 'blue'}
                  variant="light"
                  onClick={copy}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </Text>
            )}
          </CopyButton>
      )}
    </>
  );
}

export function IpAddresses() {
  const {ipv4, ipv6} = useIps();

  return (
    <>
      <IpDisplay ip={ipv4} ipVersion={4}/>

      <IpDisplay ip={ipv6} ipVersion={6}/>
    </>
  );
}