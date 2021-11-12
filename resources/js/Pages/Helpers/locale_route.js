export function locale_route(locale, path) {
    return path !== "/" ? "/" + locale + path : "/" + locale;
}
