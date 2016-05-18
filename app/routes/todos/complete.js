import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        //return this.store.query('todo', { isCompleted: true });

        return this.store.filter('todo', function(todo) {
           return todo.get('isCompleted');
        });
    },
    renderTemplate(controller, model) {
        this.render('todos.index', {
            model: model
        });
    }

});
