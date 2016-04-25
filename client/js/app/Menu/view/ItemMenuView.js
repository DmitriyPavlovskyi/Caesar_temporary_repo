'use strict';
(function (This, app) {
    This.ItemMenuView = Backbone.View.extend({
        tagName: 'div',
        className: 'itemMenu',

        events: {
            'click': 'openPage'
        },

        initialize: function () {
            this.$itemMenu = $('.itemMenu');
        },

        render: function () {
            this.$el.html(templates.ItemMenuTpl(this.model.toJSON()));

            return this;
        },

        openPage: function () {
            this.$itemMenu.removeClass('activeItem');
            this.$el.addClass('activeItem');
            app.mediator.publish('Menu: SelectedPage', this.model.get('description'));

        }
        
    });
})(CS.Menu, app);