export interface IButton {
    text?: string,
    icon?: boolean,
    disabled?: boolean,
    loading?: boolean,
    onClick: () => void
}

export interface IButtonProfile {
    icon: "clipboard-text-outline" | "shield-alert-outline" | "exit-to-app",
    title: string,
    haveStick?: boolean
    onClick: () => void
}