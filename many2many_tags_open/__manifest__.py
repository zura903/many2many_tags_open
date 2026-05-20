{
    'name': 'Many2Many Tags Open',
    'version': '19.0.1.0.1',
    'author': 'Zura Mukbaniani',
    'category': 'Technical',
    'summary': 'Extends many2many_tags widget to open records on tag click',
    'description': """
        Provides a new field widget `many2many_tags_open` that works exactly like
        the standard many2many_tags but lets users click a tag to open the linked
        record in a dialog.  In edit mode the dialog is editable; in readonly mode
        the dialog is read-only.
    """,
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'many2many_tags_open/static/src/js/many2many_tags_open_field.js',
        ],
    },
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
