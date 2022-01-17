import api from "../service/Api";

const productBaseController = "https://sidcloud.azurewebsites.net/api/ProductCategory/";

export const product = async () => {
    // debugger
    try {
        const response = await api.get(`${productBaseController}GetAllProduct`);
        // console.log({ response })
        if (typeof response !== "undefined") {
            if (response.status === 200) {
                console.log("Get Product", "Success");
                return response.data;
            }
        } else {
            console.log("Get Product", "Error in fetching API");
        }
    } catch (ex) {
        console.log("Get Product", "An error occurred");
        // store.dispatch(showMessage({ message: "An error occurred", severity: 0 }));
    }
};