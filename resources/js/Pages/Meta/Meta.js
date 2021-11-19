export default function (title, keyword, description) {
    return {
        title: title,
        meta: {
            name: {
                keywords: keyword,
                description: description
            }
        }
    };
}
