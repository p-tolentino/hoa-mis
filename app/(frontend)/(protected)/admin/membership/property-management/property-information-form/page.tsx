"use client";

import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

function PropertyForm() {
  return (
    <Grid
      maxW="100rem"
      templateRows="repeat(4, 1fr)"
      templateColumns={"repeat(3, 1fr)"}
      gap={"2rem"}
      h="40vh"
    >
      {/* Lot Number */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily="font.body">
            Lot Number:
          </FormLabel>
          <Input
            type="number"
            fontFamily="font.body"
            placeholder="XXX"
            fontSize="14px"
            size="md"
          />
        </FormControl>
      </GridItem>

      {/* Lot Size */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily="font.body">
            Lot Size (in sqm.):
          </FormLabel>
          <Input
            type="number"
            fontFamily="font.body"
            placeholder="XXXXXX"
            fontSize="14px"
            size="md"
          />
        </FormControl>
      </GridItem>

      {/* Purchase Date */}
      <GridItem>
        <FormControl isRequired>
          <FormLabel fontSize="md" fontFamily="font.body">
            Purchase Date:
          </FormLabel>
          <Input
            type="date"
            fontFamily="font.body"
            placeholder="XXXXX"
            fontSize="14px"
            size="md"
          />
        </FormControl>
      </GridItem>

      {/* Property Documents */}

      <GridItem>
        <FormControl>
          <FormLabel fontSize="md" fontFamily="font.body">
            Land Title
          </FormLabel>
          <Input type="file" fontFamily="font.body" h="100px" />
          <FormHelperText>(For Homeowners and Lot Owners)</FormHelperText>
        </FormControl>
      </GridItem>

      <GridItem>
        <FormControl>
          <FormLabel fontSize="md" fontFamily="font.body">
            Lease Contract:
          </FormLabel>
          <Input type="file" fontFamily="font.body" h="100px" />
          <FormHelperText>(For Tenants)</FormHelperText>
        </FormControl>
      </GridItem>

      {/* Other Property Document 1 */}
      <GridItem>
        <FormControl>
          <FormLabel fontSize="md" fontFamily="font.body">
            Other Property Document 1:
          </FormLabel>
          <Input type="file" fontFamily="font.body" h="100px" />
        </FormControl>
      </GridItem>

      {/* Other Property Document 2 */}
      <GridItem>
        <FormControl>
          <FormLabel fontSize="md" fontFamily="font.body">
            Other Property Document 2 :
          </FormLabel>
          <Input type="file" fontFamily="font.body" h="100px" />
        </FormControl>
      </GridItem>
    </Grid>
  );
}
export default PropertyForm;
