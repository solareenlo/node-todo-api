let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://solareenlo:beAf2sN9/8NE{V?>NLiLmMTC>g2%3c2x=sRiKcQTzBh47gjFP?=vF62oVAWriQM/@ds221148.mlab.com:21148/murmuring-beach-81397', {useNewUrlParser: true});

module.exports = {mongoose};
