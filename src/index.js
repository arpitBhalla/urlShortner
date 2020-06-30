const Button = document.getElementById("convert")
const ENDPOINT = "/shortUrl"
const conert = (body) => {
    return fetch(ENDPOINT, {
        method: "post",
        headers: {
            "x-api-key": "wertyui",
            "content-type":"application/json"
        },
        body: JSON.stringify({
            url: body
        })
    })
        .then(res => res.json())
}

Button.onclick = (e) => {
    const url = document.getElementById("url").value
    Button.innerHTML = "Loading..."
    Button.disabled = true
    conert(url).then(res => {
        Button.innerHTML = "Short"
        Button.disabled = false

        console.log(res)

    })
}
