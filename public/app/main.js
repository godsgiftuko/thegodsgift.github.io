!(function($) {
    'use strict'

    $('#indexMailObject').submit(function(ev){
        ev.preventDefault()
        
        const name = element('#name')
        const email = element('#email')
        const subject = element('#subject')
        const comments = element('#comments')

        $.ajax({
            url: window.location.href,
            method: 'POST',
            contentType: 'application/json',
            data: parseData(name, email, subject, comments),
            beforeSend: () => notification({}),
            success: response => notification({ response }),
            error: error => notification({ error })
        })

    })
})(jQuery)