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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(['fetchTodos'])
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
.todos {
  max-width: 800px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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