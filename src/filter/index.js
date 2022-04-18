
import formatDate from "./formatDate";
const Filters = [formatDate];

export default {
    install: Vue => {
        if (Filters.length) {
            Filters.map(_filter => {
                Vue.filter(_filter.key, _filter.func)
            })
        }
    }
}