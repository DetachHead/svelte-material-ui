<div class="my-component {className}" {...exclude($$restProps, ['button$'])}>
  <Button
    on:click
    class="button {button$class}"
    {...prefixFilter($$restProps, 'button$')}
  >
    <slot />
  </Button>
</div>

<script lang="ts">
  import { exclude, prefixFilter } from '@detachhead/smui-common/internal';
  import Button from '@detachhead/smui-button';

  let className = '';
  export { className as class };
  export let button$class = '';
</script>
