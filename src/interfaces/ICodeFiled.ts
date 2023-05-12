export interface ICodeField {
    code: string,
    onChange: (text: string) => void,
    error: boolean
}