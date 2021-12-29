import { createApp } from 'vue'
import App from './App.vue'

import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import TopPage from "./pages/TopPage.vue";
import PlayPage from "./pages/PlayPage.vue";

import TetrominoList from "./graph/TetrominoList.vue";
import FixedTetrisField from "./graph/FixedTetrisField.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/play",
    name: "PlayPage",
    component: PlayPage
  },
  {
    path: "/tetromino_list",
    name: "TetrominoList",
    component: TetrominoList
  },
  {
    path: "/fixed_tetris_field",
    name: "FixedTetrisField",
    component: FixedTetrisField
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
