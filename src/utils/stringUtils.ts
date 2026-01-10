export const formatAddress = (address: string) => {
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
}

export const formatAddressCustom = (address: string, items: number) => {
    return `${address.substring(0, items)}...${address.substring(address.length - items)}`;
}
