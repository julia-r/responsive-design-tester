
var vm = new Vue({
    el: '#app',
    data: {
        headline: {
            font_size: 18,
            font_family: "Verdana",
            google_font: false
        },
        paragraph: {
            font_size: 14,
            font_family: "Verdana",
            google_font: false
        },
        button: {
            width: 44,
            height: 44
        },
        fontStyle: {
           color: 'red',
           fontSize: '13px'
        }
    },
    computed: {
        headline_font_url: function (){
            return this.headline.font_family.replace(" ", "+");
        },
        paragraph_font_url: function (){
            return this.paragraph.font_family.replace(" ", "+");
        },
    },

    watch: {
    },
    methods: {
        example: function () {

        },
    },
    config: {
        debug: true
    }
});
