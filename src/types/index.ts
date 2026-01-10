export type DeploymentValue = `0x${string}`;

export interface Deployments {
    [contractName: string]: {
        [networkId: string]: DeploymentValue;
    };
}

export interface Solicitud {
    id: string;
    creadaPor: string;
    activa: boolean
    approvalsReceived: number
    approvalsRequired: number
    cantidad: string
    coAcreditados: string[]
    creditoOtorgado: boolean
    lider: string
    meses: number
    tasaInteresMensual: number
}

export interface NotificationItem {
    content: Solicitud
    viewed: boolean
}

export interface ContactoInfo {
    address: string;
    img: string;
    username: string;
}