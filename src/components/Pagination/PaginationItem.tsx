import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean
  number: number;
}

export function PaginationItem({ isCurrent, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ cursor: 'default', bgColor: "pink.500" }}
      >
        {number}
      </Button>
    )
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  )
}