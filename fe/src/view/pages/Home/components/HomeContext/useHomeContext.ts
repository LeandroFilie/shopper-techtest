import { useContext } from 'react';
import { HomeContext } from '.';

export function useHomeContext() {
  return useContext(HomeContext);
}
