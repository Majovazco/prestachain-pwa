import { ContactoInfo } from "../types";

const CONTACTOS: ContactoInfo[] = [{
    address: "0xcD3b6a675fd012366498582dE848844873d254Ae",
    img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    username: "Maria Joe"
},
{
    address: "0x25DAB3dA73EAB10e7C89Fd891F005015dEfE377e",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    username: "Edson Jones",
},
{
    address: "0x4031667885beD2306c90494A2B06839F7384dBcE",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    username: "David Ayam",
},
{
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    img: "https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    username: "Hassel",
},
{
    address: "0x407C12D39b01E50Cf8a25d41fd349743193D082C",
    img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    username: "Javier",
},
{
    address: "0xEB40824601A19BdF20542a677E52f1E4297c66Fa",
    img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    username: "Joana"
},
{
    address: "0xC12AE746678740A052B60c3D6b591ed7ADee5926",
    img: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    username: "Luis"
}
]

export const getUserDataBy = (address: string) => {
    const item = CONTACTOS.find(contacto => contacto.address === address);
    if (!item) {
        throw new Error(`Contacto with address ${address} not found`);
    }
    return item;
}
