
<script lang="ts">
  import { CircleDollarSign, Check, Search } from 'lucide-react';
  import { Segment } from '@skeletonlabs/skeleton-svelte';
  import Lightswitch from '$lib/DarkLightMode.svelte';
  import { fade, fly } from 'svelte/transition';
  let selected: string = $state('password');
  

</script>
<style>
    @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in forwards;
  }




</style>

 <div class="flex flex-col justify-center min-h-screen animate-fade-in">
  <form class="w-full space-y-8 py-3"  >
    <div class="flex justify-center items-center flex-grow">
      <div class="bg-surface p-6 rounded-lg shadow-xl w-120">
        <div class="py-3 px-6 text-center">
          <h1 class="text-xl font-medium text-foreground">Welcome Back <Lightswitch /></h1>
          <p class="mt-2 text-sm text-muted-foreground">Sign in to your Account</p>
        </div>
        <div class="mb-2">
          <label for="emailOrMobile" class="form-label">
            {selected == "password" ? "Email or Mobile Number" : "Mobile Number"}
          </label>
          <input
            id="emailOrMobile"
            class="ig-input rounded py-3 preset-outlined-surface-200-800"
            placeholder={selected == "password" ? "Enter Email or Mobile Number" : "Enter Mobile Number"}
            type={selected == "password" ? "text" : "number"}
          />
        </div>

        <div class="flex space-x-4 py-1">
          <Segment name="size" value={selected} onValueChange={(e) => (selected = e.value || "password")}>
            <Segment.Item value="otp">OTP</Segment.Item>
            <Segment.Item value="password">Password</Segment.Item>
          </Segment>
        </div>

        {#if selected == "password"}
          <div class="mb-2">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              class="ig-input rounded py-3 preset-outlined-surface-200-800"
              placeholder="Enter your password"
              type="text"
            />
          </div>
        {:else}
          <div class="grid grid-cols-12 gap-2 items-center">
            <label for="otp" class="col-span-12 form-label">OTP</label>
            <input
              id="otp"
              class="col-span-9 ig-input rounded py-3 preset-outlined-surface-200-800"
              placeholder="Enter OTP"
              type="number"
            />
            <button class="col-span-3 py-3 bg-primary hover:bg-surface-variant text-foreground px-4 py-2 rounded bg-surface-50 text-surface-contrast-50 transition ease-in-out duration-200 hover:brightness-90 hover:scale-101">
              Send OTP
            </button>
          </div>
        {/if}

        <div class="flex space-x-2 mt-5">
          <button type="submit" class="flex-grow ig-input bg-primary rounded py-3  dark:bg-surface-50 bg-surface-900 dark:text-surface-contrast-50 text-surface-contrast-900 transition ease-in-out duration-200 hover:brightness-70 hover:scale-101">
            Login
          </button>
        </div>

        <div class="flex justify-center items-center space-x-2 ">
          <p class="text-center mt-7">
            Don't have an account?
            <a href="/register" class="text-primaryfont-medium dark:hover:brightness-110 hover:brightness-10"><b>Register Now</b></a>
          </p>
        </div>
      </div>
    </div>

    <div class="text-center text-muted-foreground">
      <p>© 2025 PlaceOrder B2B Buyer Portal</p>
      <p class="mt-1">Powered by Ultranet Private Limited</p>
    </div>
  </form>
</div>


