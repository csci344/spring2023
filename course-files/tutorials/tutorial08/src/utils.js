export const getAccessToken = async (username, password) => {
    const postData = {
        "username": username,
        "password": password
    };
    const endpoint = `/api/token/`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    return data.access_token;
}