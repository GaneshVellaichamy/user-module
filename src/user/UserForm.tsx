import {
    Card,
    CardHeader,
    Flex,
    Heading,
    Icon,
    CardBody,
    CardFooter,
    Table,
    Tbody,
    Tr,
    Input,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    Stack,
    Spacer,
    useToast,
  } from '@chakra-ui/react';
  import { Close, PersonAddAlt } from '@mui/icons-material';
  import { useEffect, useState } from 'react';
  import PrimaryButton from './components/PrimaryButton';
  import TdAttribute from './components/TdAttribute';
  import ThAttribute from './components/ThAttribute';
  
  type User = {
    name: string;
    age: number | undefined;
    phone: number | undefined;
  };
  
  export default function UserForm() {
    const [userData, setUserData] = useState<User[]>([]);
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [phone, setPhone] = useState<number>(0);
    const toast = useToast();
  
    useEffect(() => {
      setName('');
      setAge(0);
      setPhone(0);
    }, [userData]);
  
    const addUser = () => {
      const tempUserData = userData;
      if (name.length === 0) {
        toast({
          description: 'Please provide value at name field',
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        });
        return;
      }
      if (age <= 0 || age > 100) {
        toast({
          description: 'Please enter age between 1 to 100',
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        });
        return;
      }
      if (phone < 1000000000) {
        toast({
          description: 'Please enter 10 digits phone number',
          status: 'error',
          duration: 3000,
          position: 'top',
          isClosable: true,
        });
        return;
      }
      tempUserData.push({
        name,
        age,
        phone,
      });
      setUserData([...tempUserData]);
    };
  
    const removeUser = (removedIndex: number) => {
        if(removedIndex >= 0) {
            const tempUserData = userData;
            tempUserData.splice(removedIndex, 1);
            setUserData([...tempUserData]);
        }
    };
  
    return (
      <>
        <Flex alignItems="center" flexDirection="row" justifyContent="center">
          <Card maxW="md" variant="outline" mt="4">
            <CardHeader>
              <Heading size="sm">User Information Form</Heading>
            </CardHeader>
            <CardBody>
              <Table>
                <Tbody>
                  <Tr>
                    <ThAttribute>Name</ThAttribute>
                    <TdAttribute>
                      <Input
                        placeholder="Username"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        maxLength={250}
                        isRequired
                      />
                    </TdAttribute>
                  </Tr>
                  <Tr>
                    <ThAttribute>Age</ThAttribute>
                    <TdAttribute>
                      <NumberInput
                        size="md"
                        inputMode="numeric"
                        onChange={(changedAge) => setAge(Number(changedAge))}
                        value={age}
                        max={100}
                        isRequired
                      >
                        <NumberInputField />
                      </NumberInput>
                    </TdAttribute>
                  </Tr>
                  <Tr>
                    <ThAttribute>Phone</ThAttribute>
                    <TdAttribute>
                      <NumberInput
                        size="md"
                        inputMode="numeric"
                        onChange={(changedPhone) => setPhone(Number(changedPhone))}
                        value={phone}
                        isRequired
                        max={9999999999}
                      >
                        <NumberInputField />
                      </NumberInput>
                    </TdAttribute>
                  </Tr>
                </Tbody>
              </Table>
            </CardBody>
            <CardFooter justifyContent="center">
              <PrimaryButton
                leftIcon={<Icon fontSize="x-large" as={PersonAddAlt} />}
                onClick={() => {
                  addUser();
                }}
              >
                Add
              </PrimaryButton>
            </CardFooter>
          </Card>
        </Flex>

        {/* Added Users displayed here */}
        <Flex alignItems="center" flexDirection="row" justifyContent="center" mt="10">
          <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3 }}>
            {userData.map((user, index) => {
              return (
                <Card maxW="md" variant="filled">
                  <CardHeader>
                    <Stack>
                      <Flex>
                        <Heading size="sm">User Detail</Heading>
                        <Spacer />
                        <Icon fontSize="lg" as={Close} onClick={() => removeUser(index)} cursor="pointer" />
                      </Flex>
                    </Stack>
                  </CardHeader>
                  <CardBody>
                    <Table>
                      <Tbody>
                        <Tr>
                          <ThAttribute fontSize="sm" fontWeight="700">
                            Name:
                          </ThAttribute>
                          <TdAttribute>{user.name}</TdAttribute>
                        </Tr>
                        <Tr>
                          <ThAttribute fontSize="sm" fontWeight="700">
                            Age:
                          </ThAttribute>
                          <TdAttribute>{user.age}</TdAttribute>
                        </Tr>
                        <Tr>
                          <ThAttribute fontSize="sm" fontWeight="700">
                            Phone:
                          </ThAttribute>
                          <TdAttribute>{user.phone}</TdAttribute>
                        </Tr>
                      </Tbody>
                    </Table>
                  </CardBody>
                </Card>
              );
            })}
          </SimpleGrid>
        </Flex>
      </>
    );
  }
  