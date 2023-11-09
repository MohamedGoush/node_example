const express = require("express")

const app = express();

app.listen(4000, () => {
    console.log('listerning for request for my awesome port');
})