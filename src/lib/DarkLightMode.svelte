<script lang="ts">
  import { onMount } from 'svelte';
  import { Sun, Moon } from '@lucide/svelte';
  import { Navigation } from '@skeletonlabs/skeleton-svelte';
  let checked = $state(false);

  onMount(() => {
    const mode = localStorage.getItem('mode') || 'dark';
    checked = mode === 'dark';
    document.documentElement.setAttribute('data-mode', mode);
  });

  const toggleMode = () => {
    const newMode = checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-mode', newMode);
    localStorage.setItem('mode', newMode);
    checked = !checked;
  };
  let tileLabel = $derived(checked ? 'Light' : 'Dark');
  let {useButton = true} = $props();
</script>

{#if useButton}
  <button 
    type="button"
    onclick={toggleMode} 
    class="bg-transparent border-0 p-3 m-0 outline-none cursor-pointer 
          rounded-full hover:bg-surface-500 transition 
          focus:outline-none focus:ring-0 aspect-square"
  >
    {#if checked}
      <Moon class="w-5 h-5" />
    {:else}
      <Sun class="w-5 h-5" />
    {/if}
  </button>
{:else}
  <Navigation.Tile id="dark_light_mode" label={tileLabel} onclick={toggleMode}>
    {#if checked}
      <Sun class="w-5 h-5" />
    {:else}
      <Moon class="w-5 h-5" />

    {/if}
  </Navigation.Tile>
{/if}
