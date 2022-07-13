"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
exports.videosRouter = (0, express_1.Router)({});
const videos = [
    { id: 1, title: 'About JS - 01', author: 'it-incubator.eu' },
    { id: 2, title: 'About JS - 02', author: 'it-incubator.eu' },
    { id: 3, title: 'About JS - 03', author: 'it-incubator.eu' },
    { id: 4, title: 'About JS - 04', author: 'it-incubator.eu' },
    { id: 5, title: 'About JS - 05', author: 'it-incubator.eu' },
];
exports.videosRouter.get('/videos', (req, res) => {
    res.send(videos);
});
exports.videosRouter.post('/videos', (req, res) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    };
    videos.push(newVideo);
    res.send(newVideo);
});
exports.videosRouter.get('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    // FIND VIDEO AND RETURN IT
    // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
});
exports.videosRouter.put('/videos/:videoId', (req, res) => {
});
exports.videosRouter.delete('/videos/:videoId', (req, res) => {
    for (let i = 0; i < videos.length; i++) {
        if (videos[i].id === +req.params.videoId) {
            videos.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
//# sourceMappingURL=videos-routers.js.map