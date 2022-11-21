import type { SmuiElementMap } from '@detachhead/smui-common';
import { classAdderBuilder } from '@detachhead/smui-common/classadder';

export default classAdderBuilder<keyof SmuiElementMap>({
  class: 'mdc-text-field__affix mdc-text-field__affix--suffix',
  tag: 'span',
});
