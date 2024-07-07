import React from 'react';
import png256 from '@/assets/logo/256.png'

export type LogoProps = {
  height?: number | string;
}

export function Logo(props: LogoProps) {
  return (
    <img src={png256} height={props.height} alt="IPLease logo" />
  )
}