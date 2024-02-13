const params = new URLSearchParams(document.location.search);

const order = params.get("order")

if (order == "desc") {
    document.getElementById("asc").classList.add("hidden")
    document.getElementById("desc").classList.remove("hidden")
} else {
    document.getElementById("asc").classList.remove("hidden")
    document.getElementById("desc").classList.add("hidden")
}

const changeSort = () => {
    if (order == "desc") {
        window.location.assign(`${window.location.href.split("?")[0]}?order=asc#gifts`)
    } else {
        window.location.assign(`${window.location.href.split("?")[0]}?order=desc#gifts`)
    }
    console.log("DEBUG")
}