<script lang="ts" setup>
import { reactive } from "vue";
import { Tetromino, TETROMINO_TYPE } from '../common/Tetromino'
import { Field } from '../common/Field'

// const field = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 4, 4, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 4, 4, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 4, 0, 1],
//   [0, 0, 0, 0, 0, 0, 4, 4, 2, 2],
//   [1, 0, 0, 0, 0, 0, 4, 7, 2, 2],
//   [1, 0, 0, 0, 0, 6, 7, 7, 7, 0],
//   [1, 0, 0, 3, 3, 6, 6, 6, 2, 2],
//   [1, 0, 3, 3, 1, 1, 1, 1, 2, 2],
// ];

const field = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 4, 4, 0, 0, 0, 0, 4, 0, 0],
  [0, 0, 4, 4, 0, 0, 4, 4, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
];

const classBlockColor = (x: number, y: number) => {
  const type = field[y][x]
  return Tetromino.id(type as TETROMINO_TYPE)
}

</script>

<template>
  <div class="container">
    <div class="tetris">
      <table
        class="field"
        style="border-collapse: collapse"
      >
        <tr v-for="(row, y) in field">
          <td
            v-for="(col, x) in row"
            class="block"
            :class="classBlockColor(x, y)"
          />
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* ========= Tetris Field ========= */
.container {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.field {
  border: ridge 0.4em #2c3e50;
  border-top: none;
}

.block {
  width: 1em;
  height: 1em;
  border: 0.1px solid #95a5a6;

  &-i {
    background: #3498db;
  }
  &-o {
    background: #f1c40f;
  }
  &-t {
    background: #9b59b6;
  }
  &-j {
    background: #1e3799;
  }
  &-l {
    background: #e67e22;
  }
  &-s {
    background: #2ecc71;
  }
  &-z {
    background: #e74c3c;
  }
}

/* ========= Information Field  =========*/
.information {
  margin-left: 0.5em;
}

</style>