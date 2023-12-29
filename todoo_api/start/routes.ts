import Route from "@ioc:Adonis/Core/Route";

// Routes for Event
Route.group(() => {
  Route.get("/", "EventController.index"),
    Route.post("/create-event", "EventController.create"),
    Route.post("/update-event", "EventController.update"),
    Route.delete("/:id", "EventController.delete");
}).namespace("App/Controllers/Http");
