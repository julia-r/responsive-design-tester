
var vm = new Vue({
    el: '#app',
    data: {
        headline: {
            font_size: 18,
            uppercase: false,
            font_family: "Verdana",
            google_font: false
        },
        paragraph: {
            font_size: 14,
            uppercase: false,
            font_family: "Verdana",
            google_font: false
        },
        button: {
            width: 44,
            height: 44
        },

    },
    computed: {
        headline_font_url: function (){
            return this.headline.font_family.replace(" ", "+");
        },
        paragraph_font_url: function (){
            return this.paragraph.font_family.replace(" ", "+");
        },
        headline_text_transform: function (){
            if(this.headline.uppercase){
                return  "uppercase"
            }
            else {
                return "none"
            }
        },
        paragraph_text_transform: function (){
            if(this.paragraph.uppercase){
                return "uppercase"
            }
            else {
                return "none"
            }
        },
        headlineStyle: function (){
            return {
                fontSize: this.headline.font_size + "px",
                fontFamily: this.headline.font_family,
                textTransform: this.headline_text_transform
            }
        },
        paragraphStyle: function (){
            return {
                fontSize: this.paragraph.font_size + "px",
                fontFamily: this.paragraph.font_family,
                textTransform: this.paragraph_text_transform
            }
        }
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
