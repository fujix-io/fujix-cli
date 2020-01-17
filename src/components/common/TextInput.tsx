import React from 'react'
import InkTextInput, { InkTextInputProps } from 'ink-text-input'

interface TextInputProps extends InkTextInputProps {
  onFocus?: () => void;
  onBlur?: () => void;
}
const TextInput: React.FC<TextInputProps> = ({ onBlur, onFocus, ...props }) => {
	React.useEffect(() => {
		onFocus && onFocus()
		return onBlur
	}, [onFocus, onBlur])
	return <InkTextInput {...props} showCursor={true} />
}

export default TextInput;
