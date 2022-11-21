<p use:Ripple={{ surface: true, color: 'primary' }} tabindex="0">
  Primary color.
</p>

<script lang="ts">
  import Ripple from '@detachhead/smui-ripple';
</script>

<style>
  p {
    padding: 10px;
    border-radius: 5px;
  }

  [tabindex='0'] {
    cursor: pointer;
  }
</style>
