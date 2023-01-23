import { ChakraProvider } from '@chakra-ui/react';
import UserForm from './user/UserForm';

function App() {
  return (
    <ChakraProvider>
      <UserForm />
    </ChakraProvider>
  );
}

export default App;
