const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => {
    console.log('hit hit hit');
    res.send('Hweo Worlkd');
});

app.use('/', router);

app.listen(process.argv[2] || process.env.PORT || 3000, () => {
console.log(`app is listening at ~! ${process.argv[2] || process.env.PORT || 3000}`);
});

