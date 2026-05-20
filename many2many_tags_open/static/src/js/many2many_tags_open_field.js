import { registry } from "@web/core/registry";
import {
    Many2ManyTagsField,
    many2ManyTagsField,
} from "@web/views/fields/many2many_tags/many2many_tags_field";
import { useService } from "@web/core/utils/hooks";

export class Many2ManyTagsOpenField extends Many2ManyTagsField {
    setup() {
        super.setup();
        this.action = useService("action");
    }

    getTagProps(record) {
        const props = super.getTagProps(record);
        props.onClick = (ev) => this.onTagClick(ev, record);
        // canEdit adds the cursor-pointer CSS class in TagsList
        props.canEdit = true;
        return props;
    }

    async onTagClick(ev, record) {
        const action = await this.orm.call(
            this.relation,
            "get_formview_action",
            [[record.resId]],
            { context: this.props.context }
        );
        this.action.doAction(action);
    }
}

export const many2ManyTagsOpenField = {
    ...many2ManyTagsField,
    component: Many2ManyTagsOpenField,
};

registry.category("fields").add("many2many_tags_open", many2ManyTagsOpenField);
