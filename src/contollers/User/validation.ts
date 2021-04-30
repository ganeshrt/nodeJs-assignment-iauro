export default Object.freeze({
    user: {
        post: {
            email: {
                in: ["body"],
                errorMessage: "email is empty",
                isRequired: true,
                custom: {
                    options: (email: String) => (email.length && email !== "" && typeof email === "string")
                }
            },
            password: {
                in: ["body"],
                errorMessage: "password is empty",
                isLength: {
                    errorMessage: 'Password should be at least 7 chars long',
                    // Multiple options would be expressed as an array
                    options: { min: 7 },
                },
                custom: {
                    options: (password: String) => (password.length && password !== "" && typeof password === "string"),

                }
            },
            role: {
                in: ["body"],
                errorMessage: "role is empty",
                custom: {
                    options: (role: String) => (role.length && role !== "" && typeof role === "string"),
                    errorMessage: "role is bad format",
                }
            }
        },
        get: {
            email: {
                in: ["body"],
                errorMessage: "email is empty",
                optional: false,
                custom: {
                    options: (email: String) => (email.length && email !== "" && typeof email === "string"),
                    errorMessage: "username is bad format",
                }
            },
            password: {
                in: ["body"],
                errorMessage: "password is empty",
                optional: false,
                custom: {
                    options: (password: String) => (password.length && password !== "" && typeof password === "string"),
                    errorMessage: "password is bad format",
                }
            },
        }
    }
})