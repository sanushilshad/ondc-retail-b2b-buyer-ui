
<script>
      import LightSwitch from '$lib/DarkLightMode.svelte';
</script>

<div class="flex flex-col justify-center min-h-screen animate-fade-in mx-4">
    <!-- <LightSwitch /> -->

    <div class="flex flex-col justify-center items-center text-center flex-grow">
        <div>
            <h4 class="text-4xl font-bold">
                B2B Commerce on <span class="text-red-500">ONDC Network</span>
            </h4>
            <p class="mt-2 text-xl">
                Connect with suppliers, manage quotations, and streamline your procurement process all in one place.
            </p>
        </div>

        <div class="flex gap-4 mt-4">
            <button class="w-32 h-12 btn preset-outlined-primary-500">
                <a href="/login">Sign In</a>
            </button>

            <button class="w-32 h-12 btn preset-outlined-primary-500">
                <a href="/register">Sign Up</a>
            </button>
        </div>
    </div>

    <div class="container mx-auto px-4 h-16 flex items-center justify-center">

    </div>

    <!-- Ensures this stays at the bottom -->
    <div class="text-center text-muted-foreground mt-auto mb-3">
        <p>© 2025 PlaceOrder. All rights reserved.</p>
        <div class="flex justify-center gap-6 mt-2 text-sm">
            <a href="https://placeorder.com/terms-of-use/" target="_blank" class="hover:underline">Terms of Service</a>
            <a href="https://placeorder.com/privacy-policy/"  target="_blank" class="hover:underline">Privacy Policy</a>
            <a href="https://placeorder.com/about-us/" target="_blank" class="hover:underline">About Us</a>
        </div>
    </div>
</div>