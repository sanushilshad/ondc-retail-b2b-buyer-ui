
<script lang="ts">
  import LightSwitch from '$lib/DarkLightMode.svelte';
  import EyeIcon from '@lucide/svelte/icons/eye';
  import EyeOffIcon from '@lucide/svelte/icons/eye-off';
  import Footer from '$lib/FooterOne.svelte';
  let showPassword: boolean = $state(false);
  

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

 <div class="flex flex-col justify-center min-h-screen animate-fade-in mx-4">
  <form class="w-full space-y-8 py-3"  >
    <div class="flex justify-center items-center flex-grow">
      <div class="bg-surface-50-900 p-6 rounded-lg shadow shadow-surface-500 w-120">
        <div class="py-3 px-6 text-center">
          <LightSwitch />
          <h1 class="text-xl font-medium text-foreground">Create Account</h1>
          <p class="text-sm text-muted-foreground">Join the PlaceOrder</p>
        </div>
        <div class="mb-2">
          <label for="full_name" class="form-label">
            Full Name
          </label>
          <input
            id="full_name"
            class="ig-input rounded py-3 preset-outlined-surface-300-700"
            placeholder="Enter your full name"
            type="text"
          />
        </div>

        <div class="flex flex-col gap-2 ">
          <label for="international_dialing_code" class="form-label ">Mobile No</label>
          <div class="flex gap-2 items-center">
            <input
              id="international_dialing_code"
              class="w-1/4 h-13 ig-input rounded px-4 preset-outlined-surface-300-700"
              placeholder="Enter OTP"
              type="tel"
              value="+91"
              readonly
            />
            <input
              id="mobile_no"
              class="w-3/4 h-13 ig-input rounded px-4 preset-outlined-surface-300-700"
              placeholder="10 digit mobile no"
              type="tel"
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="email" class="form-label">
           Email Address
          </label>
          <input
            id="email"
            class="ig-input rounded py-3 preset-outlined-surface-300-700"
            placeholder="Enter your email address"
            type="email"
          />
        </div>

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



        <div class="flex space-x-2 mt-5 ">
          <button type="submit" class="flex-grow ig-input rounded py-3 bg-primary-950-50 text-primary-50-950  transition ease-in-out duration-200  hover:bg-surface-500">
            Register
          </button>
        </div>

        <div class="flex justify-center items-center space-x-2">
          <p class="text-center mt-7">
            Already have an account?
            <a href="/login" class="text-primary-950-50 hover:brightness-10"><b> Login Now</b></a>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
  </form>
</div>


