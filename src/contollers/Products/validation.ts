export default Object.freeze({
    product: {
        post: {
            productName: {
                in: ["body"],
                errorMessage: "productName is empty",
                isRequired: true,
                custom: {
                    options: (productName: String) => (productName.length && productName !== "" && typeof productName === "string")
                }
            },
            userId: {
                in: ["body"],
                errorMessage: "userId is empty",
                isLength: {
                    errorMessage: 'userId should be at least 7 chars long',
                    // Multiple options would be expressed as an array
                    options: { min: 7 },
                },
                custom: {
                    options: (userId: String) => (userId.length && userId !== "" && typeof userId === "string"),

                }
            },
            name: {
                in: ["body"],
                errorMessage: "name is empty",
                custom: {
                    options: (name: String) => (name.length && name !== "" && typeof name === "string"),
                    errorMessage: "name is bad format",
                }
            },
            visible: {
                in: ["body"],
                errorMessage: "visible is empty",
                custom: {
                    options: (visible: String) => (visible.length && visible !== "" && typeof name === "string"),
                    errorMessage: "visible is bad format",
                }
            }
        },
        put: {
            id: {
                in: ["params"],
                errorMessage: "id is empty",
                isRequired: true,
                custom: {
                    options: (id: String) => (id.length && id !== "" && typeof id === "string")
                }
            },

            productName: {
                in: ["body"],
                errorMessage: "productName is empty",
                isRequired: true,
                custom: {
                    options: (productName: String) => (productName.length && productName !== "" && typeof productName === "string")
                }
            },
            userId: {
                in: ["body"],
                errorMessage: "userId is empty",
                isLength: {
                    errorMessage: 'userId should be at least 7 chars long',
                    // Multiple options would be expressed as an array
                    options: { min: 7 },
                },
                custom: {
                    options: (userId: String) => (userId.length && userId !== "" && typeof userId === "string"),

                }
            },
            name: {
                in: ["body"],
                errorMessage: "name is empty",
                custom: {
                    options: (name: String) => (name.length && name !== "" && typeof name === "string"),
                    errorMessage: "name is bad format",
                }
            },
            visible: {
                in: ["body"],
                errorMessage: "visible is empty",
                custom: {
                    options: (visible: String) => (visible.length && visible !== "" && typeof name === "string"),
                    errorMessage: "visible is bad format",
                }
            }
        },
        getById: {
            id: {
                in: ["params"],
                errorMessage: "id is empty",
                isRequired: true,
                custom: {
                    options: (id: String) => (id.length && id !== "" && typeof id === "string")
                }
            },
        },
        delete: {
            id: {
                in: ["params"],
                errorMessage: "id is empty",
                isRequired: true,
                custom: {
                    options: (id: String) => (id.length && id !== "" && typeof id === "string")
                }
            },
        }
    }
})