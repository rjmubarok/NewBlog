// moment for time 
import Vue from "vue";
import moment from "moment";
Vue.filter('time', (a) => {
    return moment(a).format('LLLL'); // সোমবার, ৩ জানুয়ারি ২০২২, রাত ৯:৩৯ সময়
});
Vue.filter('subString', (content, lenght) => {
    return content.substring(0, lenght);
});