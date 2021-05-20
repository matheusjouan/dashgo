import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Jouan</Text>
          <Text color="gray.300">
            mj@hotmail.com
         </Text>
        </Box>
      )}

      <Avatar size="md" name="Matheus Jouan" src="" />
    </Flex>
  )
}