import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        magazines: [
            {
                title: "May 2021",
                author: "Firehouse",
                featured: true,
                img: "2021/05/May_Cover.60a3bc12eedaf"
            },
            {
                title: "Apr 2021",
                author: "Firehouse",
                featured: false,
                img: "2021/05/FIR_1a_0421_cover.60a3c1489a2f5"
            },
            {
                title: "Mar 2021",
                author: "Firehouse",
                featured: false,
                img: "2021/03/March_cover.60467aa9e6b53"
            },
            {
                title: "Feb 2021",
                author: "Firehouse",
                featured: false,
                img: "2021/02/Feb_21_cover.6023f7b5966e0"
            },
            {
                title: "Jan 2021",
                author: "Firehouse",
                featured: false,
                img: "2021/01/FIR_1_0121_January_cover.5ff350a2d06dd"
            },
            {
                title: "Dec 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/11/Dec._cover.5faea9e8828b2"
            },
            {
                title: "Nov 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/10/Nov._2020_Cover.5f96f7db9ed72"
            },
            {
                title: "Oct 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/09/FIR_1_1020_October.5f6e130dded57"
            },
            {
                title: "Sep 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/08/Sept._cover.5f35396c77e3a"
            },
            {
                title: "Aug 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/07/Cover.5f10bb1c79cb1"
            },
            {
                title: "Jul 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/06/FIR_1_0720_JULYCover.5ef2102d00505"
            },
            {
                title: "Jun 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/05/FIR_1_0620_Cover.5ec7d71128a72"
            },
            {
                title: "May 2020",
                author: "Firehouse",
                featured: false,
                img: "2020/04/May_cover.5ea718ac30297"
            },
        ]
    },
    mutations: {},
    actions: {},
    modules: {},
    strict: true
});