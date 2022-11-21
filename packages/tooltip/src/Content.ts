import type { SmuiElementMap } from '@detachhead/smui-common';
import { classAdderBuilder } from '@detachhead/smui-common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-tooltip__content',
  tag: 'div',
});
