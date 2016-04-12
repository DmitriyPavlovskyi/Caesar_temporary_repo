templates.groupEditCreate = _.template([
   '<section class="modal-window">',
                '<section class="form-inline form-wrapper container">',
                    '<div class="row">',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="name" class="control-label">Group name</label>',
                            '<input type="text" class="form-control" id="name" name="name" value="<%= name %>">',
                        '<span class="help-block hidden"></span>',
                       ' </div>',

                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="budgetOptions" class="control-label">Budget owner</label>',
                            '<div class="btn-group pull-right" id="budgetOptions">',
                                '<button class="<%= !budgetOwner?\'active disabled\': \'\'%> btn btn-default budget-option <%= budgetOwner ===  \'SoftServe\' ? \'active\' : \'\'%>" data-value="SoftServe">SoftServe</button>',
                                '<button class="btn btn-default budget-option <%= budgetOwner ===  \'OpenGroup\' ? \'active\' : \'\'%>" data-value="OpenGroup">OpenGroup</button>',
                            '</div>',
                        '</div>',
                    '</div>',

                   ' <hr>',

                    '<div class="row">',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="direction" class="control-label">Direction</label>',
                           ' <select class="form-control" name="direction" id="direction">',
                                '<% _(directions).each(function(thisDirection) { %>',
                                '<option data-name="direction" value="<%= thisDirection %>" <%= thisDirection === direction ? \'selected\' : \'\' %> > <%= thisDirection %> </option>',
                                '<% }); %>',
                            '</select>',
                        '</div>',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="startDate" class="control-label">Start date</label>',
                            '<input type="date" class="form-control" id="startDate" name="startDate" value="<%= startDate %>">',
    '<span class="help-block hidden"></span>',
                       '</div>',
                    '</div>',

                    '<hr>',

                    '<div class="row">',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="location" class="control-label">Location</label>',
                            '<select name="location" class="form-control" id="location">',
                                '<% _(locations).each(function(thisLocation) { %>',
                                '<option data-name="location" value="<%= thisLocation %>" <%= thisLocation === location ? \'selected\' : \'\'  %> > <%= thisLocation %> </option>',
                                '<% }); %>',
                           '</select>',
                        '</div>',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="finishDate" class="control-label">Finish date</label>',
                            '<input type="date" class="form-control" id="finishDate" name="finishDate" value="<%= finishDate %>">',
                        '<span class="help-block hidden"></span>',
                        '</div>',
                    '</div>',

                    '<hr>',

                    '<div class="row">',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                            '<label class="control-label">Teachers</label>',
                            '<div id="teachers"></div>',
                        '</div>',
                        '<div class="form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 ">',
                            '<label for="experts" class="control-label">Experts</label>',
    '                        <div id="experts"></div>',
                        '<span class="help-block hidden"></span>',
                        '</div>',
                    '</div>',

                    '<hr>',

                    '<div class="text-center">',
                    '<span class="fa fa-check-circle-o fa-3x icon" id="save"></span>',
                    '<span class="fa fa-times-circle-o fa-3x icon" id="cancel"></span></div>',
    '                </div>',
                '</section>',
            '</section>'
].join(''));