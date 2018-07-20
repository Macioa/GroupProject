


router.get('/:id/profile', (req, res)=>{
    res.render('users/show.ejs', {
    user:user,
    hostedEvents:hostedEvents,
    attendedEvents:attendedEvents
    })
})