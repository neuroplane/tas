//
export const services = {
    login: () => {
        console.log("This line is called from services/index.ts: export const services login: ()")
    },
    apitest: (element: string) => {
        console.log("This line is called from services/index.ts: export const services apitest: (). " + element)
    }
}