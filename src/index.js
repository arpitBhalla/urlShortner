const Button = document.getElementById("convert")
const ENDPOINT = "/shortUrl"
const conert = (body) => {
    return fetch(ENDPOINT, {
        method: "post",
        headers: {
            "x-api-key": "wertyui",
            "content-type": "application/json"
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
        const { success, data } = res
        Button.innerHTML = "Short"
        Button.disabled = false
        if (success) {
            const { shorted } = data
            let a = document.createElement("a")
            a.href = window.location+shorted
            a.innerHTML = window.location+shorted
            document.getElementsByClassName("container")[0].appendChild(a)
        }

    })
}

// window.onload = () => {
//     fetch("/list")
//         .then(res => res.json())
//         .then(res => {
//             const { success, data } = res
//             console.log(data.urls)
//             if (success)
//                 data.urls.map(v => document.getElementsByClassName("container")[0]
//                     .appendChild(<a href="${v.url}">${v.url}</a>))
//             console.log(res)
//         })
// }