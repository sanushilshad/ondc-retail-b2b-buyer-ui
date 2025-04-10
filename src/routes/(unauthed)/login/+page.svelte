
<script lang="ts">
  import { Segment } from '@skeletonlabs/skeleton-svelte';
  import LightSwitch from '$lib/DarkLightMode.svelte';
  import EyeIcon from '@lucide/svelte/icons/eye';
  import EyeOffIcon from '@lucide/svelte/icons/eye-off';
  import Footer from '$lib/FooterOne.svelte';
  let showPassword: boolean = $state(false);
  let selected: string = $state('password');
  
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // goto('/dashboard');
  //  window.location.href = '/dashboard';
  // }
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
<!-- <body class="bg-surface-200-800"> -->
 <div class="flex flex-col justify-center min-h-screen animate-fade-in mx-4">
  <form action="/dashboard" class="w-full space-y-8 py-3" >
    <div class="flex justify-center items-center flex-grow">
      <div class="p-6 rounded-lg shadow shadow-surface-500 w-120">
        <div class="py-3 px-6 text-center">
          <LightSwitch />
          <h1 class="text-xl font-medium">Welcome Back
             </h1>
          <p class="text-sm">Sign in to your Account</p>
        </div>
        <div class="mb-2">
          <label for="username" class="form-label">
            {selected == "password" ? "Email or Mobile Number" : "Mobile Number"}
          </label>
          <input
            id="username"
            class="ig-input rounded py-3 preset-outlined-surface-300-700"
            placeholder={selected == "password" ? "Enter Email or Mobile Number" : "Enter Mobile Number"}
            type={selected == "password" ? "text" : "tel"}
            required
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
          
          <div class="relative">
            <input
              id="password"
              class="ig-input rounded py-3 preset-outlined-surface-300-700 w-full pr-10"
              placeholder="Create a secure password"
        
              type={showPassword ? "text" : "password"}
            />
            

            <button
              type="button"
              class="absolute inset-y-0 right-3 flex items-center"
              onclick={() => showPassword = !showPassword}
            >
              {#if showPassword}
                <EyeOffIcon  />
              {:else}
                <EyeIcon />
              {/if}
            </button>
          </div>
        </div>
        {:else}
<div class="flex flex-col gap-2 ">
  <label for="otp" class="form-label ">OTP</label>
  <div class="flex gap-2 items-center">
    <input
      id="otp"
      class="w-3/4 h-13 ig-input rounded px-4 preset-outlined-surface-300-700"
      placeholder="Enter OTP"
      type="number"
      required
    />
    <button class="w-1/4 h-13 bg-primary-950-50 text-primary-50-950  px-4 rounded  whitespace-nowrap flex items-center justify-center  transition ease-in-out duration-200  hover:bg-surface-500">
      Send OTP
    </button>
  </div>
</div>
        {/if}

        <div class="flex space-x-2 mt-5 ">
          <button type="submit" class="flex-grow ig-input rounded py-3 bg-primary-950-50 text-primary-50-950  transition ease-in-out duration-200  hover:bg-surface-500">
            Login
          </button>
        </div>

        <div class="flex justify-center items-center space-x-2">
          <p class="text-center mt-7">
            Don't have an account?
            <a href="/register" class="text-primary-950-50 hover:brightness-10"><b>Register Now</b></a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
  </form>
</div>



