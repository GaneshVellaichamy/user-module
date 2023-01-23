import { Td, TableCellProps } from '@chakra-ui/react';

export default function TdAttribute(props: TableCellProps) {
  return <Td fontFamily="Inter" color="gray.700" textTransform="none" fontSize="sm" fontWeight="400" px="4" py="2" {...props} />;
}
