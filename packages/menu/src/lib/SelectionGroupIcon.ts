import type { ComponentType } from 'svelte';
import type { SmuiElementMap } from '@detachhead/smui-common';
import { classAdderBuilder } from '@detachhead/smui-common/classadder';
import { Graphic } from '@detachhead/smui-list';

export default classAdderBuilder<keyof SmuiElementMap, ComponentType<Graphic>>({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
});
