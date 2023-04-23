<template>
  <button @click="onDeleteAll">
      Delete all completed
  </button>
</template>

<script>
  export default {
      name: 'DeleteAllCompleted',
      props: {
          todos: {
              type: Array,
          },
      },
      methods: {
          onDeleteAll() {
            const newTodos = this.todos.filter(todo => !todo.completed);

            this.$emit('delete-all-completed', newTodos);
          }
      },
  }
</script>

<style scoped>
  button{
      transition: .2s ease;
      background: red;
      color: white;
      border: none;
      width: 100%;
      padding: .5rem;
  }

  button:hover{
      color: black;
      outline: 1px solid red;
      cursor: pointer;
      background: transparent;
  }
</style>
