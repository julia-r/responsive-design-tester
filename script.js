
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
            height: 44,
            font_size: 12,
            uppercase: false,
            font_family: "Verdana",
            google_font: false
        },
        viewport: {
            width: "",
            height: ""
        }
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
        button_text_transform: function (){
            if(this.button.uppercase){
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
        },
        buttonStyle: function (){
            return {
                width: this.button.width + "px",
                height: this.button.height + "px",
                fontSize: this.button.font_size + "px",
                fontFamily: this.button.font_family,
                textTransform: this.button_text_transform
            }
        }
    },

    watch: {
    },
    methods: {
         getDimensions: function() {
             this.viewport.width = window.innerWidth;
             this.viewport.height = window.innerHeight;
        }
    },
    config: {
        debug: true
    }
});

window.onresize = vm.getDimensions;

ready(vm.getDimensions)

function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}