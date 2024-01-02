import Route from '@ioc:Adonis/Core/Route'

// groupe de Routes pour evenements
Route.group(() =>
  // route pour afficher l'ensemble des evenements
  Route.get('/', 'EventController.index'),
  // route pour creer des evenements
    Route.post('/create-event', 'EventController.create'),
  // route pour modifier un evenement
    Route.put('/update-event/:id', 'EventController.update'),
  // route pour supprimer un evenement
    Route.delete('/delete-event/:id', 'EventController.delete')
}).namespace('App/Controllers/Http')

// groupes de routes pour l'utilisateur
Route.group(() => {
  // route pour se creer un compte user
  Route.post('/create-user', 'UsersController.register'),
  // route pour permettre au user se connecter dans la plateforme
    Route.post('/login', 'UsersController.login'),
    // Route permettant a un utilisateur de se deconnecter
    Route.get('/logout', 'UsersController.logout')
}).namespace('App/Controllers/Http/')

// groupe de route sur les actions tickets
Route.group(() => {
  //route pour acheter un ticket
  Route.post('/:id_event', 'TicketsController.buyTicket'),
  // route pour verifier si un utilisateur A a bien acheter un ticket
    Route.get('/:id_event/ticket/:id_user', 'TicketsController.verify')
}).namespace('App/Controllers/Http')
