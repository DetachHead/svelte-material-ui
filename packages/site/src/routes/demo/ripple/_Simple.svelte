<p use:Ripple={{ surface: true }} tabindex="0">
  SMUI ripples can be added to arbitrary elements, like this <code>p</code>
  element. Try clicking it to see the ripple.
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
