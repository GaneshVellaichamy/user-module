import { Th, TableColumnHeaderProps } from '@chakra-ui/react';

export default function ThAttribute(props: TableColumnHeaderProps) {
  return <Th fontFamily="Inter" fontWeight="400" fontSize="lg" color="gray.700"  {...props} />;
}
