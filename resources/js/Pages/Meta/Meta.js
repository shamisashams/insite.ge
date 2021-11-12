export default function (title, keyword, description) {
    return {
        title: title,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: keyword,
                description: description
            }
        }
    };
}
