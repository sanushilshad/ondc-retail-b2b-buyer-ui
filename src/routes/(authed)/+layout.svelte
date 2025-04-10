<script lang="ts">
  import { Navigation } from '@skeletonlabs/skeleton-svelte';
  // Icons
import {
  Menu as IconMenu,
  Settings as IconSettings,
  EllipsisVertical as Ellipsis,
  CircleGauge as Gauge,
  ShoppingBag as Bag,
  BookOpen as Book,
  User,
  Factory,
  Search,
  LogOut
} from '@lucide/svelte';

  import { AppBar } from '@skeletonlabs/skeleton-svelte';

   import { Avatar } from '@skeletonlabs/skeleton-svelte';
   import LightSwitch from '$lib/DarkLightMode.svelte';
  let isExpanded = $state(false);
  let { children } = $props();
  function toggleExpanded() {
    isExpanded = !isExpanded;
  }

   let value = $state('dashboard');
  //  let railTitle = $derived.by(() => (value));

  import { Modal } from '@skeletonlabs/skeleton-svelte';

  let drawerState = $state(false);

  function drawerClose() {
    drawerState = false;
  }

</script>


<style>
    @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.4s ease-in forwards;
  }
</style>

  <!-- <div class="hidden md:block w-full h-full flex flex-col overflow-auto">
  <header id="shell-header" class="flex-none z-10">
    <AppBar background="bg-surface-200-800" headlineClasses="sm:hidden" centerClasses="hidden sm:block">
      {#snippet lead()}
          <Navigation.Tile selected={false} id="expand" labelExpanded="Menu" onclick={toggleExpanded} title="Expand">
            <IconMenu />
          </Navigation.Tile>
          <h4 class="text-2xl font-medium text-red-500">PlaceOrder</h4>
      {/snippet}
      {#snippet trail()}
          <div class="hidden space-x-4 sm:flex">
            <LightSwitch />
          </div>
      {/snippet}
    </AppBar>
  </header>

      <div class="flex-auto w-full h-full flex overflow-hidden" >

          <aside  class="flex-none overflow-x-hidden overflow-y-auto ">

            <Navigation.Rail  classes="transition-all duration-100 ease-in-out"  value={value} expanded={isExpanded}  onValueChange={(newValue) => (value = newValue !== "expand" ? newValue : value )}>
                {#snippet tiles()}
                  <Navigation.Tile id="dashboard" label="Dashboard" labelExpanded="Dashboard"  href="/dashboard"><Gauge /></Navigation.Tile>
                  <Navigation.Tile id="product_search" label="Product"  labelExpanded="Product"  href="/product"><Search /></Navigation.Tile>
                  <Navigation.Tile id="quotation"   label="Quotation"  labelExpanded="Quotation"  href="/quotation"><Book /></Navigation.Tile>
                  <Navigation.Tile id="order" label="Order"  labelExpanded="Order"  href="/order"><Bag /></Navigation.Tile>
                  <Navigation.Tile id="business_account" label="Business"  labelExpanded="Business"  href="/business"><Factory /></Navigation.Tile>
                  <Navigation.Tile id="user_account" label="User"  labelExpanded="User" href="/user"><User /></Navigation.Tile>
                  <Navigation.Tile id="setting" label="Setting"  labelExpanded="Setting"  href="/setting"><IconSettings /></Navigation.Tile>
                  <Navigation.Tile id="sign_out" label="Sign Out"  labelExpanded="Sign Out"  href="/login"><LogOut /></Navigation.Tile>
                {/snippet}
            </Navigation.Rail>
          </aside>
          <div  class="flex-1 overflow-x-hidden flex flex-col bg-primary-50-950">

              <main class="flex-1 ">{@render children()}</main>
          </div>
      </div>
  </div> -->
  <div class="hidden md:block w-full h-screen flex flex-col overflow-hidden animate-fade-in">
      <header id="shell-header" class="sticky z-10  ">

        <AppBar background="bg-surface-200-800"  headlineClasses="sm:hidden" centerClasses="hidden sm:block">
          {#snippet lead()}
              <Navigation.Tile selected={false} id="expand" labelExpanded="Menu" onclick={toggleExpanded} title="Expand" >
                <IconMenu />
              </Navigation.Tile>
              <h4 class="text-2xl font-medium text-red-500">PlaceOrder</h4>
          {/snippet}
          {#snippet trail()}
            <div class="hidden space-x-4 sm:flex">
              <LightSwitch />

            </div>
          {/snippet}

        </AppBar>
      </header>
      <div class="flex-auto w-full h-full flex overflow-auto"  style="height: calc(100vh - 70px);" >

          <aside  class="flex-none w-auto overflow-x-hidden overflow-y-auto">

            <Navigation.Rail  classes="transition-all duration-100 ease-in-out"  value={value} expanded={isExpanded}  onValueChange={(newValue) => (value = newValue !== "expand" ? newValue : value )}>
                {#snippet tiles()}
                  <Navigation.Tile id="dashboard" label="Dashboard" labelExpanded="Dashboard"  href="/dashboard"><Gauge /></Navigation.Tile>
                  <Navigation.Tile id="product_search" label="Product"  labelExpanded="Product"  href="/product"><Search /></Navigation.Tile>
                  <Navigation.Tile id="quotation"   label="Quotation"  labelExpanded="Quotation"  href="/quotation"><Book /></Navigation.Tile>
                  <Navigation.Tile id="order" label="Order"  labelExpanded="Order"  href="/order"><Bag /></Navigation.Tile>
                  <Navigation.Tile id="business_account" label="Business"  labelExpanded="Business"  href="/business"><Factory /></Navigation.Tile>
                  <Navigation.Tile id="user_account" label="User"  labelExpanded="User" href="/user"><User /></Navigation.Tile>
                  <Navigation.Tile id="setting" label="Setting"  labelExpanded="Setting"  href="/setting"><IconSettings /></Navigation.Tile>
                  <Navigation.Tile id="sign_out" label="Sign Out"  labelExpanded="Sign Out"  href="/login"><LogOut /></Navigation.Tile>
                {/snippet}
            </Navigation.Rail>
          </aside>
          <div  class="flex-1 overflow-x-hidden  flex flex-col bg-primary-50-950">

              <main class="flex-1 ">{@render children()}</main>
          </div>
      </div>
  </div>

<div class="block md:hidden">
  <aside  class="bg-primary-50-950 grid min-h-screen w-full grid-rows-[1fr_auto] border-[1px]">
      <main >

        {@render children()}
      </main>
      <Navigation.Bar {value}  base="flex sticky bottom-0 w-full overflow-x-auto " onValueChange={(newValue) => (value = newValue !== "more" ? newValue : value )}>
        <Navigation.Tile  id="dashboard" label="Dashboard" href="/dashboard"><Gauge /></Navigation.Tile>
        <Navigation.Tile id="product_search" label="Product"   href="/product"><Search /></Navigation.Tile>
        <Navigation.Tile id="quotation"   label="Quotation"  href="/quotation"><Book /></Navigation.Tile>
        <Navigation.Tile id="order" label="Order"  href="/order"><Bag /></Navigation.Tile>
        <Navigation.Tile id="business_account" label="Business"  href="/business"><Factory /></Navigation.Tile>
        <Navigation.Tile id="user_account" label="User"  href="/user"><User /></Navigation.Tile>
        <Navigation.Tile id="setting" label="Setting"  href="/setting"><IconSettings /></Navigation.Tile>
        <Navigation.Tile id="more" label="More" onclick={() => (drawerState = true)}><Ellipsis /></Navigation.Tile>
        
      </Navigation.Bar>

  </aside>

</div>

<Modal
  open={drawerState}
  onOpenChange={(e) => (drawerState = e.open)}
  triggerBase="btn preset-tonal"
  contentBase="bg-surface-100-900 p-4 space-y-4 shadow-xl w-[480px] h-auto rounded-t-lg"
  positionerJustify="justify-end"
  positionerAlign="items-center"
  positionerPadding="p-0"
  transitionsPositionerIn={{ y: 100, duration: 200 }}
  transitionsPositionerOut={{ y: 100, duration: 200 }}
>
  {#snippet content()}
    <header class="flex justify-between">
      <h2 class="h2">Drawer Example</h2>
    </header>
    <article>
      <LightSwitch />
      <Navigation.Tile id="sign_out" label="Sign Out"  labelExpanded="Sign Out"  href="/login"><LogOut /></Navigation.Tile>
    </article>
    <footer>
      <button type="button" class="btn preset-filled" onclick={drawerClose}>Close Drawer</button>
    </footer>
  {/snippet}
</Modal>


                  