export default function getCategoryInfo(cat) {
    switch (cat) {
        case 'electronics':
            return {label:'الکترونیکی',value:1}
        case 'jewelery':
            return {label:'جواهرات',value:2}
        case 'men\'s clothing':
            return {label:'مردانه',value:3}
        case 'women\'s clothing':
            return {label:'زنانه',value:4}
        default:
            return {}
    }
}
