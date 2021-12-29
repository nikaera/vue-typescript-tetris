<script lang="ts" setup>
import TetrominoPreviewComponent from '../components/TetrominoPreviewComponent.vue'
import { Tetromino, TETROMINO_TYPE } from "../common/Tetromino";

const tetrominoDatas = [
  1, 2, 3, 4, 5, 6, 7
].map(i => new Tetromino(i as TETROMINO_TYPE).data)
</script>

<template>
  <div class="container">
    <div v-for="data in tetrominoDatas">
      <TetrominoPreviewComponent :tetromino="data" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80vw;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}
</style>