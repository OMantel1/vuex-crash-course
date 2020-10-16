<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
};
</script>

<style>
.todos {
  max-width: 500px;
  margin: auto;
}
.todo {
  border: solid rgb(70, 70, 70) 1px;
  border-radius: 4px;
  margin: 8px;
  padding: 4px 4px;
  text-align: left;
  font-size: 12px;
}
</style>