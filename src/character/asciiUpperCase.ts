export const asciiUpperCase = (): string[] => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
}