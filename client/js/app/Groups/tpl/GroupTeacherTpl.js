templates.groupTeachersTpl = _.template([
    '<ul class="list">',
    '</ul>',
    '<div class="add-teacher clearfix"></div>'
].join(''));


templates.groupSelectTeacherTpl = _.template([
    '<div>',
    '    <select name="teachers" id="teachers" class="form-control pull-left">',
    '    <% _(allTeachers).each(function(teacher) { %>',
    '       <option value="<%= teacher %>" <%= teacher === defaultTeacher ? \'selected\' : \'\' %>><%= teacher %></option>',
    '    <% }); %>',
    '    </select>',
    '       <span class="fa fa-times-circle-o fa-2x pull-right small-btn" id="cancelSelect"></span>',
    '       <span class="fa fa-check-circle-o fa-2x pull-right small-btn" id="acceptSelect"></span>',
    '</div>'
].join(''));

templates.groupMoreTeacherTpl = _.template('<span class="add-teacher-btn" tabindex="6">+ one more teacher</span>');

templates.groupTeacherTpl = _.template([
    '<% _(teachers).each(function(teacher) { %>',
    '<li>',
    '    <span class="list-item"><%= teacher %></span>',
    '    <span class="remove-teacher fa fa-times-circle-o fa-2x small-btn" data-teacher="<%= teacher %>" tabindex="5"></span>',
    '</li>',
    '<% }); %>'
].join(''));