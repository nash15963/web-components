/**
 * Represents the HTTP method types.
 * @typedef {"GET" | "POST" | "PUT" | "DELETE"} Method
 */

/**
 * Fetch data from an API.
 * @param {string} url - The URL to fetch from.
 * @param {Method} method - The HTTP method to use for the request.
 * @param {*} data - The data to send with the request. Should be `undefined` for GET requests.
 * @returns {Promise<*>} A promise that resolves with the fetched data.
 */
export const fetchApi = (url, method = "GET", data) => {
    return fetch(url, {
        credentials: "same-origin",
        headers: {
            "user-agent": "Mozilla/4.0 MDN Example",
            "content-type": "application/json",
        },
        method: method,
        body: method === "GET" ? undefined : JSON.stringify(data),
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        throw error; // 或者返回一個特定的錯誤消息
    });
};
