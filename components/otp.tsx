import Colors from '@/constants/Colors'
import React, { useState } from 'react'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { Text, YStack, useTheme } from 'tamagui'

const CELL_COUNT = 6

export function OTPInput() {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue })
  const theme = useTheme()

  return (
    <YStack marginTop="$4" paddingHorizontal="$4">
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        keyboardType="number-pad"
        renderCell={({ index, symbol, isFocused }) => (
          <YStack
            key={index}
            width={48}
            height={56}
            borderRadius="$4"
            borderWidth={2}
            borderColor={isFocused ? Colors.background.primary : Colors.background.secondary}
            alignItems="center"
            justifyContent="center"
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text fontSize="$5" color="$color" fontWeight="600">
              {symbol || (isFocused ? <Cursor /> : '')}
            </Text>
          </YStack>
        )}
      />
    </YStack>
  )
}
