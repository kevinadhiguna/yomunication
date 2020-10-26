require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Article = require('./models/article');
const articleRouter = require('./routes/articles');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

// 'on' indicates that the event will be called every time it occurs
db.on("error", error => console.log('❌' + error));

// 'once' signifies that the event will be called only once
db.once('open', () => console.log('🎉 Successfully connected to MongoDB'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('🚀 Server is running at port ' + PORT));
