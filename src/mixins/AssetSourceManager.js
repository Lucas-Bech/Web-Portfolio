export default {
    methods: {
        
        getFile(/*file_to_get*/) {
            // Consume API to fetch files
        },
        
        // FontAwesome has different types of icons (Brand, Solid, etc...)
        get_fa_class(fa_type, fa_icon) {
            return fa_type + ' fa-' + fa_icon
        },
        
        is_fa(icon_origin) {
            return icon_origin === 'fas' || icon_origin === 'fab'
        }
    }
}