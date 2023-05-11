export interface IButton {
    text: string,
    icon?: boolean,
    disabled?: boolean,
    loading?: boolean,
    onClick: () => void
}