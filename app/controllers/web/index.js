(function (){
    'use strict'
    const page = {
        index: 'templates/index'
    }

    exports.index = (req, res, next) => {
        res.render(page.index, {
            title: 'thegodsgift',
            firstName: 'God\'sgift',
            lastName: 'Matthew',
            aboutMe: `"God'sgift Matthew", "NodeJs developer", "Full stack Developer"`
        })
    }

})()