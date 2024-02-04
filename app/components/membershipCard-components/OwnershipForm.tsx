import {
  FormControl,
  Stack,
  Spacer,
  RadioGroup,
  HStack,
  Radio,
  Checkbox,
  CheckboxGroup,
  FormHelperText,
} from "@chakra-ui/react";

function OwnershipForm() {
  return (
    <Stack>
      <FormControl>
        <RadioGroup
          defaultValue="Homeowner"
          colorScheme="yellow"
          fontFamily="font.body"
          fontSize="md"
        >
          <HStack spacing="24px">
            <Radio value="Homeowner" size="md">
              Homeowner
            </Radio>
            <Radio value="Lot Owner" size="md">
              Lot Owner
            </Radio>
            <Radio value="Tenant" size="md">
              Tenant
            </Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText mt="10px">For Homeowner only:</FormHelperText>
      </FormControl>
      <Spacer />
      <CheckboxGroup colorScheme="yellow">
        <Stack spacing="2" direction="column">
          <Checkbox
            value="Own Use"
            size="md"
            fontSize="md"
            fontFamily="font.body"
          >
            Own Use
          </Checkbox>
          <Checkbox
            value="For Rent"
            size="md"
            fontSize="md"
            fontFamily="font.body"
          >
            For Rent
          </Checkbox>
        </Stack>
      </CheckboxGroup>
    </Stack>
  );
}
export default OwnershipForm;
