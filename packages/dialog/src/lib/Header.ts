import type { SmuiElementMap } from '@detachhead/smui-common';
import { classAdderBuilder } from '@detachhead/smui-common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-dialog__header',
  tag: 'div',
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});
