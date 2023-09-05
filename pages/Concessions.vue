<script setup>
const MENU = [
  {
    name: "Drinks",
    items: [
      {
        name: "Gatorade",
        price: 2.0,
      },
      {
        name: "Bottled Water",
        price: 1.0,
      },
      {
        name: "Soda",
        price: 1.0,
      },
    ],
  },
  {
    name: "Food",
    items: [
    {
        name: "Chic-Fil-A",
        price: 6.0,
      },
      {
        name: "Hot Dog",
        price: 2.0,
      },
      {
        name: "Walking Taco",
        price: 4.0,
      },
      {
        name: "Mixed Berries",
        price: 3.0,
      },
    ],
  },
  {
    name: "Snacks",
    items: [
      {
        name: "Brownies",
        price: 2.0,
      },
      {
        name: "Cookies",
        price: 1.0,
      },
      {
        name: "Chips",
        price: 1.0,
      },
      {
        name: "Candy",
        price: 1.0,
      },
    ],
  },
];
</script>

<template>
  <div class="mx-4">
    <h1 class="text-3xl text-center bg-accent text-black font-bold mb-4 rounded-md">
      Concessions Menu
    </h1>

    <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="col-span-2 text-center">
            We accept Cash, Venmo, and Apple Pay
        </div>
        <div class="col-span-1 text-center">
            <span><Icon name="fa-brands:apple-pay" size="48" /></span>
            <div class="text-sm">412-980-0812</div>
        </div>
        <div class="col-span-1 text-center">
            <a href="https://account.venmo.com/u/Laura-Palmer-52" target="_blank">
                <span><Icon name="simple-icons:venmo" size="48" /><sup class="pl-1"><Icon name="mdi:open-in-new" size="14" /></sup></span>
                <div class="text-sm">@Laura-Palmer-52</div>
            </a>
        </div>
    </div>
    

    <table
      v-for="category in MENU"
      :key="category.name"
      class="w-full text-xl mb-8"
    >
      <caption class="text-2xl text-center bg-accent text-black font-bold rounded-md">
        {{
          category.name
        }}
      </caption>
      <tbody>
        <tr v-for="item in category.items" :key="item.name">
          <td class="pl-4 pt-2">{{ item.name }}</td>
          <td class="text-right pr-4">${{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
