export const asciiLowerCase = (): string[] => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
}