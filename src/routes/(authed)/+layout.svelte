<script lang="ts">
  import { Navigation } from '@skeletonlabs/skeleton-svelte';
  // Icons
import {
  Menu as IconMenu,
  Settings,
  EllipsisVertical,
  CircleGauge,
  ShoppingBag,
  FileText,
  User,
  Factory,
  Search,
  LogOut,
} from '@lucide/svelte';

  import { AppBar } from '@skeletonlabs/skeleton-svelte';

   import LightSwitch  from '$lib/DarkLightMode.svelte';
  let isExpanded = $state(false);
  let { children } = $props();
  function toggleExpanded() {
    isExpanded = !isExpanded;
  }

   let value = $state('dashboard');

  import { Modal } from '@skeletonlabs/skeleton-svelte';

  let drawerState = $state(false);

  function drawerClose() {
    drawerState = false;
  }


  const navItems = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard", icon: CircleGauge },
    { id: "product_search", label: "Product", href: "/product", icon: Search },
    { id: "quotation", label: "Quotation", href: "/quotation", icon: FileText },
    { id: "order", label: "Order", href: "/order", icon: ShoppingBag },
    { id: "business_account", label: "Business", href: "/business", icon: Factory },
    { id: "user_account", label: "User", href: "/user", icon: User },
    { id: "setting", label: "Setting", href: "/setting", icon: Settings },
    { id: "sign_out", label: "Sign Out", href: "/login", icon: LogOut }
  ];

  const smallScreenMainNavItems = navItems.slice(0, 7);
  const smallScreenExtraNavItems = navItems.slice(7);
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

  <div class="hidden md:block w-full h-screen flex flex-col overflow-hidden animate-fade-in">
      <header id="shell-header" class="sticky z-10  ">

        <AppBar  trailPadding="pr-8" background="bg-surface-200-800"  headlineClasses="sm:hidden" centerClasses="hidden sm:block">
          {#snippet lead()}
              <Navigation.Tile selected={false} id="expand" labelExpanded="Menu" onclick={toggleExpanded} title="Expand" >
                <IconMenu />
              </Navigation.Tile>
              <h4 class="text-2xl font-medium text-red-500">PlaceOrder</h4>
          {/snippet}
          {#snippet trail()}
            <div class="hidden sm:flex justify-start ml- space-x-4">
              <LightSwitch />
            </div>
          {/snippet}

        </AppBar>
      </header>
      <div class="flex-auto w-full h-full flex overflow-auto"  style="height: calc(100vh - 70px);" >

          <aside  class="flex-none w-auto overflow-x-hidden overflow-y-auto">

            <Navigation.Rail width="w-20"  classes="transition-all duration-100 ease-in-out"  value={value} expanded={isExpanded}  onValueChange={(newValue) => (value = newValue !== "expand" ? newValue : value )}>
                {#snippet tiles()}

                  {#each navItems as item}
                    <Navigation.Tile 
                      id={item.id} 
                      label={item.label} 
                      labelExpanded={item.label} 
                      href={item.href}
                    >
                    <item.icon></item.icon>
                    </Navigation.Tile>
                  {/each}
                {/snippet}
            </Navigation.Rail>
          </aside>
          <div  class="flex-1 overflow-x-hidden  flex flex-col bg-primary-50-950">

              <main class="flex-1 ">{@render children()}</main>
          </div>
      </div>
  </div>

<div class="block md:hidden ">
  <aside  class="bg-primary-50-950 grid min-h-screen w-full grid-rows-[1fr_auto] border-[1px] shadow shadow-surface-500">
      <main >

        {@render children()}
      </main>
      <Navigation.Bar {value}  base="flex sticky bottom-0 w-full overflow-x-auto " onValueChange={(newValue) => (value = newValue !== "more" ? newValue : value )}>
        {#each smallScreenMainNavItems as item}
          <Navigation.Tile 
            id={item.id} 
            label={item.label} 
            href={item.href}
          >
             <item.icon></item.icon>
          </Navigation.Tile>
        {/each}

        <Navigation.Tile 
          id="more" 
          label="More" 
          onclick={() => (drawerState = true)}
        >
          <EllipsisVertical />
        </Navigation.Tile>
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

    <article>
      <article class="grid grid-cols-4 grid-rows-4  divide-gray-200">
        <div class="p-2 "><LightSwitch useButton={false}/> </div>
        {#each smallScreenExtraNavItems as item}
          <div class="p-2">
            <Navigation.Tile 
              id={item.id} 
              label={item.label} 
              href={item.href}
            >
              <item.icon></item.icon>
            </Navigation.Tile>
          </div>
        {/each}    
      </article>
    </article>
  {/snippet}
</Modal>


                  