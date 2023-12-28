import React from 'react'
import { useDrag } from 'react-dnd'
import { Text, Box } from '@chakra-ui/react'
import { DragHandleIcon } from '@chakra-ui/icons'

const DragItem: React.FC<ComponentItemProps> = ({
  type,
  soon,
  label,
  isMeta,
  isChild,
  rootParentType,
}) => {
  const [, drag] = useDrag({
    item: { id: type, type, isMeta, rootParentType },
  })

  let boxProps: any = {
    cursor: 'no-drop',
    color: 'whiteAlpha.600',
  }

  if (!soon) {
    boxProps = {
      ref: drag,
      color: '#9e9e9e',
      cursor: 'move',
      _hover: {
        ml: -1,
        mr: 1,
        bg: '#3b82f680',
        boxShadow: 'sm',
        color: 'white',
      },
    }
  }

  if (isChild) {
    boxProps = { ...boxProps, ml: 4 }
  }

  return (
    <Box
      boxSizing="border-box"
      transition="margin 200ms"
      my={1}
      borderRadius="md"
      p={1}
      display="flex"
      alignItems="center"
      {...boxProps}
    >
      <DragHandleIcon path="" fontSize="xs" mr={2} />
      <Text letterSpacing="wide" fontSize="sm" textTransform="capitalize">
        {label}
      </Text>
      {isMeta && (
        <Box
          ml={2}
          borderWidth="1px"
          color="blue"
          borderColor="teal.600"
          fontSize="xs"
          borderRadius={4}
          px={1}
        >
          preset
        </Box>
      )}
      {soon && (
        <Box
          ml={2}
          borderWidth="1px"
          color="whiteAlpha.500"
          borderColor="whiteAlpha.300"
          fontSize="xs"
          borderRadius={4}
          px={1}
        >
          soon
        </Box>
      )}
    </Box>
  )
}

export default DragItem
