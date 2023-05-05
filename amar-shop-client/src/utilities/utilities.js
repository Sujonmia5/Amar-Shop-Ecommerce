export const ConvertToBase64 = (file) => {
    return new Promise((resolve, error) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            resolve(reader.result)
        }
        reader.onerror = () => {
            error(reader.error)
        }
    })
}