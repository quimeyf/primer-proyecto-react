const BASE_URL = "https://693090e9778bbf9e0071e47f.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL.URL, {
        method: "POST",
        headers: { "Content-type": "aplication/json" },
        body: JSON.stringify(product),
    });

    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
}