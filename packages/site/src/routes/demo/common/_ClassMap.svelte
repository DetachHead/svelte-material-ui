<div>
  <Button
    class={classMap({
      'my-button': true,
      big: big,
      [color]: true,
    })}
  >
    <Label>I'm a Colored Button</Label>
  </Button>
</div>

<div>
  <FormField style="margin-right: 1em;">
    <Checkbox bind:checked={big} />
    <span slot="label">Big</span>
  </FormField>
  {#each ['red', 'blue', 'green'] as option}
    <FormField style="margin-right: 1em;">
      <Radio bind:group={color} value={option} />
      <span slot="label">{`${option[0].toUpperCase()}${option.slice(1)}`}</span>
    </FormField>
  {/each}
</div>

<script lang="ts">
  import { classMap } from '@detachhead/smui-common/internal';
  import { Label } from '@detachhead/smui-common';
  import Button from '@detachhead/smui-button';
  import FormField from '@detachhead/smui-form-field';
  import Radio from '@detachhead/smui-radio';
  import Checkbox from '@detachhead/smui-checkbox';

  let big = false;
  let color = 'red';
</script>

<style>
  * :global(.my-button) {
    margin: 0.5em;
  }

  * :global(.red) {
    color: red;
  }
  * :global(.blue) {
    color: blue;
  }
  * :global(.green) {
    color: green;
  }

  * :global(.big) {
    font-size: 1.5em;
  }
</style>
