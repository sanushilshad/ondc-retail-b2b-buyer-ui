<script lang="ts">
  export let message: string = 'Loading...';
</script>

<div class="flex flex-col justify-center items-center min-h-screen text-center gap-4">
  <!-- Circular Ring Loader -->
  <div class="h-14 w-14 rounded-full border-6 border-tertiary-50-950 border-t-tertiary-600-400 animate-spin"></div>
  <p class="text-lg text-surface-700 dark:text-surface-300">{message}</p>
</div>

<style>
  .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>