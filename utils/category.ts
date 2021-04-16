export default function (category: string | string[]) {
    let folder: string
    switch (category) {
        case "wolf":
        case "wolves":
            folder = "wolves"
            break;
        case "fox":
        case "foxes":
            folder = "foxes"
            break;
        case "hyena":
        case "hyenas":
        case "yeens":
            folder = "yeens"
            break;



        default:
            folder = "none"
            break;
    }

    return folder
}