import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../shared/tanstackquery/tanstackQuery';

export default function main() {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}
