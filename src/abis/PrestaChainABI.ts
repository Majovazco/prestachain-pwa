export const PRESTACHAIN_ABI = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_monedaAUsar",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_registry",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "approvalsPorSolicitud",
        "inputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "approver",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "hasaApproved",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "aprobarSolicitud",
        "inputs": [
            {
                "name": "_solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "currentPrestamoId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "currentSolicitudId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPrestamo",
        "inputs": [
            {
                "name": "_prestamoId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PrestaChain.Prestamo",
                "components": [
                    {
                        "name": "solicitudId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "prestador",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "cantidadAPagar",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "fechaDeInicio",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "fechaDeFinalizacion",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "pagado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPrestamosOfrecidosPorPrestador",
        "inputs": [
            {
                "name": "_prestador",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct PrestaChain.Prestamo[]",
                "components": [
                    {
                        "name": "solicitudId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "prestador",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "cantidadAPagar",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "fechaDeInicio",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "fechaDeFinalizacion",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "pagado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getSolicitud",
        "inputs": [
            {
                "name": "_solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct PrestaChain.Solicitud",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cantidad",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "meses",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tasaInteresMensual",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lider",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coAcreditados",
                        "type": "address[]",
                        "internalType": "address[]"
                    },
                    {
                        "name": "approvalsRequired",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "approvalsReceived",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "activa",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creditoOtorgado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getSolicitudes",
        "inputs": [
            {
                "name": "_solicitante",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct PrestaChain.Solicitud[]",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cantidad",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "meses",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tasaInteresMensual",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lider",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coAcreditados",
                        "type": "address[]",
                        "internalType": "address[]"
                    },
                    {
                        "name": "approvalsRequired",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "approvalsReceived",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "activa",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creditoOtorgado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "monedaAUsar",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract MXNToken"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "otorgarPrestamo",
        "inputs": [
            {
                "name": "_solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "prestamos",
        "inputs": [
            {
                "name": "prestamoId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "prestador",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "cantidadAPagar",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "fechaDeInicio",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "fechaDeFinalizacion",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "pagado",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "prestamosOfrecidosPorPrestador",
        "inputs": [
            {
                "name": "prestador",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "prestamosOfrecidos",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "registry",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract PrestaChainRegistry"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "solicitarPrestamo",
        "inputs": [
            {
                "name": "_cantidad",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_meses",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_tasaInterestMensual",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_coAcreditados",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "solicitudes",
        "inputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "cantidad",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "meses",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "tasaInteresMensual",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "lider",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "approvalsRequired",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "approvalsReceived",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "activa",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "creditoOtorgado",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "solicitudesPorSolicitante",
        "inputs": [
            {
                "name": "solicitante",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "PrestamoAprobado",
        "inputs": [
            {
                "name": "prestamoId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "solicitud",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct PrestaChain.Solicitud",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cantidad",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "meses",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tasaInteresMensual",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lider",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coAcreditados",
                        "type": "address[]",
                        "internalType": "address[]"
                    },
                    {
                        "name": "approvalsRequired",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "approvalsReceived",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "activa",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creditoOtorgado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            },
            {
                "name": "prestamo",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct PrestaChain.Prestamo",
                "components": [
                    {
                        "name": "solicitudId",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "prestador",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "cantidadAPagar",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "fechaDeInicio",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "fechaDeFinalizacion",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "pagado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SolicitudAprovada",
        "inputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "aprobadaPor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "solicitud",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct PrestaChain.Solicitud",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cantidad",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "meses",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tasaInteresMensual",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lider",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coAcreditados",
                        "type": "address[]",
                        "internalType": "address[]"
                    },
                    {
                        "name": "approvalsRequired",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "approvalsReceived",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "activa",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creditoOtorgado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SolicitudCoAprovada",
        "inputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "aprobadaPor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "solicitud",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct PrestaChain.Solicitud",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cantidad",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "meses",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tasaInteresMensual",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lider",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coAcreditados",
                        "type": "address[]",
                        "internalType": "address[]"
                    },
                    {
                        "name": "approvalsRequired",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "approvalsReceived",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "activa",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creditoOtorgado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "SolicitudCreada",
        "inputs": [
            {
                "name": "solicitudId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "creadaPor",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "solicitud",
                "type": "tuple",
                "indexed": false,
                "internalType": "struct PrestaChain.Solicitud",
                "components": [
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "cantidad",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "meses",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "tasaInteresMensual",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "lider",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "coAcreditados",
                        "type": "address[]",
                        "internalType": "address[]"
                    },
                    {
                        "name": "approvalsRequired",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "approvalsReceived",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "activa",
                        "type": "bool",
                        "internalType": "bool"
                    },
                    {
                        "name": "creditoOtorgado",
                        "type": "bool",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "CantidadNoPuedeSerCero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExisteUnaSolicitudActiva",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LiderNoPuedeAprobarSuPropiaSolicitud",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MesesNoPuedeSerCero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoEsCoAcreditado",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoHayCoAcreditados",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PrestadorNoTieneFondosSuficientes",
        "inputs": []
    },
    {
        "type": "error",
        "name": "SolicitudNoExiste",
        "inputs": []
    },
    {
        "type": "error",
        "name": "TasaInteresMensualNoPuedeSerCero",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UsuarioNoRegistrado",
        "inputs": []
    },
    {
        "type": "error",
        "name": "YaAproboLaSolicitud",
        "inputs": []
    }
]