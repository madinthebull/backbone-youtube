//the VideosCollection will be responsible for the YoutubeAPI
var VideosCollection = Backbone.Collection.extend({

    model: VideoModel,
    
    fetchAPIData: function (query) {
        this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoDefinition=high&key=AIzaSyBg4MPAVQKAhUcWR6hpfHkV2CMq-t0Pges`
        console.log("After user search input, the url looks like:", this.url);
        this.fetch();
    },

    parse: function (response) {
        console.log(response);
        return response.items.map( m => ({
            id: m.id.videoId,
            title: m.snippet.title,
            description: m.snippet.description,
        }));
    }
});



//a different version of this file: 
/*
var VideosCollection = Backbone.Collection.extend({
    url: function () {
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${this.query}&type=video&videoDefinition=high&key=AIzaSyBg4MPAVQKAhUcWR6hpfHkV2CMq-t0Pges`
    },

    model: VideoModel,
    
    fetchAPIData: function (query) {
        this.query = query;
        console.log("After user search input, the url looks like:", this.url);
        this.fetch();
    },

    parse: function (response) {
        console.log('kittens');
        return response.items.map(function (m) {
            return {
            id: m.id.videoId,
            title: m.snippet.title,
            description: m.snippet.description,
            }
        }, this);
    }
});
*/