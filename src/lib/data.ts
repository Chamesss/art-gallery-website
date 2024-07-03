export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Products",
        hash: "#products",
    },
    {
        name: "About Us",
        hash: "#about",
    },
    {
        name: "Concept",
        hash: "#concept",
    },
    {
        name: "Contact Us",
        hash: "#contact",
    },
] as const;

export const products: Product[] = [
    {
        id: 0,
        title: "Model 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pictures: [""],
        width: 20,
        height: 20,
        tokens: ["Token1", "Token2", "Token3"]
    },
    {
        id: 1,
        title: "Model 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pictures: [""],
        width: 20,
        height: 20,
        tokens: ["Token4", "Token5", "Token6"]
    },
    {
        id: 2,
        title: "Model 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        pictures: [""],
        width: 20,
        height: 20,
        tokens: ["Token7", "Token8", "Token9"]
    }
]
