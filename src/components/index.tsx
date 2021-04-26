import { IAvailableComponents } from './types'

const components: IAvailableComponents = {
    Input: ({ ...props }) => <input {...props} />,
    Button: ({ content, ...props }) => <button {...props}>{content}</button>
}

export const {
    Input,
    Button
} = components;