<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form class="form" @submit="onSubmit">
        <input
          class="form-input"
          type="text"
          v-model="title"
          placeholder="add toto..."
        />
        <input class="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "addTodo",
  data(){
      return {
          title:""
      }
  },
  methods: {
      ...mapActions(['addTodo']),
      onSubmit(event) {
          event.preventDefault();
          this.addTodo(this.title);
      }
  }
};
</script>

<style >
input[type="submit"] {
  background-color: rgb(0, 116, 204);
  color: white;
  border: solid rgb(0, 116, 204) 1px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
}

input[type="text"] {
  border: solid rgb(0, 116, 204) 1px;
  border-radius: 4px;
  padding: 8px;
  margin-right: 4px;
}
</style>
