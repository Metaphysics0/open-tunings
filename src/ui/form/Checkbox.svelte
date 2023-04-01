<script lang="ts">
  export let label: string;
  export let value: string = label;

  export let checked = false;
</script>

<div class="mr-6">
  <label
    class="cursor-pointer flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    <input
      bind:checked
      type="checkbox"
      {value}
      class="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    {label}
  </label>
</div>
