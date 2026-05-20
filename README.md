# Many2Many Tags Open

**Version:** 19.0.1.0.1  
**Author:** Zura Mukbaniani  
**License:** LGPL-3  
**Category:** Technical

---

## Overview

Provides a new field widget `many2many_tags_open` that extends the standard Odoo `many2many_tags` widget with one extra capability: **clicking a tag navigates directly to that record's form view**.

No dialog, no popup — the user is taken to the full form view of the related record, exactly as if they had opened it from a menu.

---

## Features

- Click any tag to open its form view
- Uses `get_formview_action` under the hood, so custom form views defined for the related model are always respected
- Inherits all standard `many2many_tags` options (`color_field`, `no_create`, `no_quick_create`, etc.)
- Tags show a `cursor-pointer` to make them visually clickable
- Delete button still works independently — clicking it does **not** trigger navigation

---

## Installation

1. Copy the `many2many_tags_open` folder into your Odoo `addons` path.
2. Restart the Odoo server.
3. Go to **Apps**, search for **Many2Many Tags Open**, and install it.

---

## Usage

Add `widget="many2many_tags_open"` to any `many2many` or `one2many` field in a view XML:

```xml
<field name="tag_ids" widget="many2many_tags_open"/>
```

### With options

All standard `many2many_tags` options are supported:

```xml
<field
    name="tag_ids"
    widget="many2many_tags_open"
    options="{'no_create': True, 'color_field': 'color'}"
/>
```

---

## Supported Field Types

| Type | Supported |
|------|-----------|
| `many2many` | ✅ |
| `one2many` | ✅ |

---

## Technical Notes

- Extends `Many2ManyTagsField` from `@web/views/fields/many2many_tags/many2many_tags_field`
- Injects the `action` service and calls `doAction` with the result of `get_formview_action` on click
- Registered in the fields registry under the key `many2many_tags_open`
- No Python code — frontend only

---

## Dependencies

- `web` (Odoo built-in)
