<script setup>
const rightDrawerOpen = ref(null);

const closeDrawer = () => {
  rightDrawerOpen.value.checked = false;
};
</script>

<template>
  <main class="min-w-screen min-h-screen overflow-auto">
    <header>
      <div class="navbar bg-base-100">
        <div class="flex-none">
          <NuxtLink to="/">
          <button class="btn btn-square btn-ghost">
            <img src="/QVLogo.png" alt="QV Logo" />
          </button>
          </NuxtLink>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-lg"
            >Girls Varsity Volleyball</a
          >
        </div>
        <div class="flex-none">
          <label for="right-drawer" class="drawer-button btn btn-square btn-link"><Icon name="mdi-dots-horizontal" size="24" /></label>
        </div>
      </div>
    </header>

    <div class="">
      <div class="drawer drawer-end">
            <input id="right-drawer" type="checkbox" class="drawer-toggle" ref="rightDrawerOpen"/>
            <div class="drawer-content">
              <slot />
            </div> 
            <div class="drawer-side z-10">
              <label for="right-drawer" class="drawer-overlay"></label>
              <ul class="menu bg-base-200 w-2/3 h-full">
                
                <li>
                  <NuxtLink to="/" @click="closeDrawer">
                      <Icon name="mdi-home-outline" size="24" />
                      Home
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/Schedule" @click="closeDrawer">
                      <Icon name="material-symbols:schedule-outline" size="24" />
                      Schedule
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/Team/1" @click="closeDrawer">
                      <Icon name="ri:team-line" size="24" />
                      QV Roster
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/Stats" @click="closeDrawer">
                      <Icon name="ic:baseline-query-stats" size="24" />
                      QV Stats
                  </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/Sponsors" @click="closeDrawer">
                      <Icon name="octicon:sponsor-tiers-24" size="24" />
                      Sponsors
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/LearnMore" @click="closeDrawer">
                      <Icon name="mdi:school-outline" size="24" />
                      Learn More
                  </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/Share" @click="closeDrawer">
                      <Icon name="mdi:share-variant-outline" size="24" />
                      Share
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
    </div>

    <!-- <footer>
      <div class="btm-nav btm-nav-sm">
        <button>
          <a href="" @click.prevent="goBack()">
            <Icon name="mdi-arrow-left" size="24" />
          </a>
        </button>
        <button class="active">
          <NuxtLink to="/">
            <Icon name="mdi-home-outline" size="24" />
          </NuxtLink>
        </button>
      </div>
    </footer> -->
  </main>
</template>
