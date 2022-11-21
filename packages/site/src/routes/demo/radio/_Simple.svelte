<div class="radio-demo">
  {#each options as option}
    <FormField>
      <Radio
        bind:group={selected}
        value={option.name}
        disabled={option.disabled}
      />
      <span slot="label">
        {option.name}{option.disabled ? ' (disabled)' : ''}
      </span>
    </FormField>
  {/each}
</div>

<div style="margin-top: 1em;">
  <Button
    on:click={() => {
      selected = 'Doc';
    }}
  >
    Select Doc Programmatically
  </Button>
</div>

<pre class="status">Selected: {selected}</pre>

<script lang="ts">
  import Radio from '@detachhead/smui-radio';
  import FormField from '@detachhead/smui-form-field';
  import Button from '@detachhead/smui-button';

  let options = [
    {
      name: 'Bashful',
      disabled: false,
    },
    {
      name: 'Doc',
      disabled: true,
    },
    {
      name: 'Dopey',
      disabled: false,
    },
    {
      name: 'Happy',
      disabled: false,
    },
    {
      name: 'Sleepy',
      disabled: false,
    },
    {
      name: 'Sneezy',
      disabled: false,
    },
    {
      name: 'Grumpy',
      disabled: false,
    },
  ];
  let selected = 'Grumpy';
</script>

<style>
  .radio-demo > :global(*) {
    margin: 0 0.2em;
  }
</style>
