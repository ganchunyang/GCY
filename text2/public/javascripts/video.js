
let videoVM = new Vue({
    el:"#showVue",
    data:{
        arr:[],
        page:0,
        line:4
    },
    methods:{
         refresh:function () {
             this.$http.post('/video',{page:this.page,line:this.line}).then(function (data) {
                 console.log(data);
                 this.page+=this.line;
                 this.arr.push(...data.body);
             })
         }
    },
    created:function () {
        this.refresh()
    }

});
pullToRefresh.init({
    // required
    ptrElement: "#ptr-instructions", // 'pull to refresh' intructions element
    ptrTextElement: ".ptr-instructions-text", // intructions' text element
    targetElement: "#main", // target element that will be dragged and refreshed
    // optional
    instructionsPullToRefresh: "pull to refresh", // text
    instructionsReleaseToRefresh: "Release to refresh", //text
    instructionsRefreshing: "refreshing", // text
    threshold: 60, // minimum distance required to trigger the onPull callback
    onPull: function () { // callback fn
        //alert('onPull fired');
        videoVM.refresh();
    }
});