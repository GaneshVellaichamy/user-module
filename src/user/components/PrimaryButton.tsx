import { Button, ButtonProps } from '@chakra-ui/react';

export default function PrimaryButton(props: ButtonProps) {
  return <Button bgColor="blue.500" color="white" fontFamily="Inter" fontSize="md" fontWeight="600" {...props} />;
}
