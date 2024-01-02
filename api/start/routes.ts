import Route from '@ioc:Adonis/Core/Route'

// Routes for Event
Route.group(() => {
  Route.get('/', 'EventController.index'),
    Route.post('/create-event', 'EventController.create'),
    Route.put('/update-event/:id', 'EventController.update'),
    Route.delete('/delete-event/:id', 'EventController.delete')
}).namespace('App/Controllers/Http')

Route.group(() => {
  Route.post('/create-user', 'UsersController.register'),
    Route.post('/login', 'UsersController.login'),
    Route.get('/logout', 'UsersController.logout')
}).namespace('App/Controllers/Http/')

Route.group(() => {
  Route.post('/:id_event', 'TicketsController.buyTicket'),
    Route.get('/:id_event/ticket/:id_user', 'TicketsController.verify')
}).namespace('App/Controllers/Http')
