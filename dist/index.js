"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const corsMiddleware = (0, cors_1.default)();
app.use(corsMiddleware);
const jsonBodyMiddleware = body_parser_1.default.json();
app.use(jsonBodyMiddleware);
const port = process.env.PORT || 5000;
const videos = [
    { id: 1, title: 'About JS - 01', author: 'it-incubator.eu' },
    { id: 2, title: 'About JS - 02', author: 'it-incubator.eu' },
    { id: 3, title: 'About JS - 03', author: 'it-incubator.eu' },
    { id: 4, title: 'About JS - 04', author: 'it-incubator.eu' },
    { id: 5, title: 'About JS - 05', author: 'it-incubator.eu' },
];
app.use((0, cors_1.default)());
app.get('/', (req, res) => { });
app.get('/', (req, res) => { });
app.get('/videos', (req, res) => {
    res.send(videos);
});
app.post('/videos', (req, res) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'it-incubator.eu'
    };
    videos.push(newVideo);
    res.send(newVideo);
});
app.get('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    // FIND VIDEO AND RETURN IT
    // IF VIDEO IS NOW EXISTS THEN RETURN 404 CODE
});
app.put('/videos/:videoId', (req, res) => { });
app.delete('/videos/:videoId', (req, res) => { });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map