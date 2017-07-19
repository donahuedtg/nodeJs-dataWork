module.exports = {
    index: (req, res) => {
        res.render('home/index');
    },
    //end index
    contact: (req, res) => {
        res.render('home/contact')
    }
}